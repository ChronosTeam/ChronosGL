part of chronosgl;

void ChangeArrayBuffer(
    WEBGL.RenderingContext gl, WEBGL.Buffer buffer, Float32List data) {
  gl.bindBuffer(WEBGL.ARRAY_BUFFER, buffer);
  gl.bufferData(WEBGL.ARRAY_BUFFER, data, WEBGL.DYNAMIC_DRAW);
}

WEBGL.Buffer CreateAndInitializeArrayBuffer(
    WEBGL.RenderingContext gl, Float32List data) {
  WEBGL.Buffer b = gl.createBuffer();
  ChangeArrayBuffer(gl, b, data);
  return b;
}

void ChangeElementArrayBuffer(
    WEBGL.RenderingContext gl, WEBGL.Buffer buffer, TypedData data) {
  gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, buffer);
  gl.bufferData(WEBGL.ELEMENT_ARRAY_BUFFER, data, WEBGL.DYNAMIC_DRAW);
}

WEBGL.Buffer CreateAndInitializeElementArrayBuffer(
    WEBGL.RenderingContext gl, TypedData data) {
  assert((data is Uint16List) || (data is Uint32List));
  WEBGL.Buffer b = gl.createBuffer();
  ChangeElementArrayBuffer(gl, b, data);
  return b;
}

class Node extends Spatial {
  WEBGL.RenderingContext gl;
  bool debug = false;
  bool enabled = true;
  final VM.Matrix3 _normMatrix = new VM.Matrix3.zero();
  final Map<String, WEBGL.Buffer> _buffers = {};
  WEBGL.Buffer _indexBuffer;
  int numItems;
  int numInstances = 0;
  Material material;
  MeshData _meshData;

  // children inherent the parent matrix for its rotation and position
  final List<Node> _children = [];

  final VM.Matrix4 _mvMatrix = new VM.Matrix4.identity();

  Node.Container(String name, [Node child = null]) : super(name) {
    if (child != null) _children.add(child);
  }

  Node(String name, this._meshData, this.material) : super(name) {
    //if (!meshData.isOptimized) meshData.optimize();
    _meshData.SanityCheck();
    // TODO FIX THIS hack
    // The MeshData should be registered with gl in the MeshData abstraction
    // not the Mesh abstraction.
    gl = ChronosGL.globalGL;
    AddBuffer(aVertexPosition, _meshData.GetVertexData());

    for (String canonical in _meshData.GetAttributes()) {
      AddBuffer(canonical, _meshData.GetAttributeData(canonical));
    }

    List<int> indices = _meshData.GetVertexIndices();
    if (indices != null) {
      numItems = indices.length;
      if (ChronosGL.useElementIndexUint) {
        _indexBuffer = CreateAndInitializeElementArrayBuffer(
            gl, new Uint32List.fromList(indices));
      } else {
        _indexBuffer = CreateAndInitializeElementArrayBuffer(
            gl, new Uint16List.fromList(indices));
      }
    } else {
      numItems = _meshData.GetVertexData().length ~/ 3;
    }
  }

  void add(Node node) {
    _children.add(node);
  }

  void AddBuffer(String canonical, Float32List data) {
    if (debug) print("AddBuffer ${canonical} ${data.length}");
    _buffers[canonical] = CreateAndInitializeArrayBuffer(gl, data);
  }

  void ChangeBufferCanonical(String canonical, Float32List data) {
    if (debug) print("ChangeBuffer ${canonical} ${data.length}");
    ChangeArrayBuffer(gl, _buffers[canonical], data);
  }

  int Drawmode() {
    return _meshData.DrawMode();
  }

  void UpdateMeshData(MeshData md) {
    _meshData = md;
    ChangeBufferCanonical(aVertexPosition, _meshData.GetVertexData());

    for (String canonical in _meshData.GetAttributes()) {
      ChangeBufferCanonical(canonical, _meshData.GetAttributeData(canonical));
    }
    List<int> indices = _meshData.GetVertexIndices();
    if (indices != null) {
      numItems = indices.length;
      if (ChronosGL.useElementIndexUint) {
        ChangeElementArrayBuffer(
            gl, _indexBuffer, new Uint32List.fromList(indices));
      } else {
        ChangeElementArrayBuffer(
            gl, _indexBuffer, new Uint16List.fromList(indices));
      }
    } else {
      numItems = _meshData.GetVertexData().length ~/ 3;
    }
  }

  void clearData() {
    for (String canonical in _buffers.keys) {
      gl.deleteBuffer(_buffers[canonical]);
    }
    if (_indexBuffer != null) {
      gl.deleteBuffer(_indexBuffer);
    }
  }

  void AddShaderInputs(ShaderProgramInputs program) {
    for (String canonical in _buffers.keys) {
      program.SetInputWithOrigin(this, canonical, _buffers[canonical]);
    }

    // should this really be here - interaction with indexer
    if (_indexBuffer != null) {
      program.SetInputWithOrigin(this, eArray, _indexBuffer);
    }

    // TODO: computing the normal matrix like this is wrong
    _normMatrix.copyNormalMatrix(_mvMatrix);
    program.SetInputWithOrigin(this, uTransformationMatrix, transform);
    program.SetInputWithOrigin(this, uModelMatrix, _mvMatrix);
    program.SetInputWithOrigin(this, uNormalMatrix, _normMatrix);
  }

  void RemoveShaderInputs(ShaderProgramInputs program) {
    for (String canonical in _buffers.keys) {
      program.Remove(canonical);
    }
    if (_indexBuffer != null) program.Remove(eArray);
    program.Remove(uTransformationMatrix);
    program.Remove(uModelMatrix);
    program.Remove(uNormalMatrix);
  }

  // this gets called by Node.draw()
  void drawOne(RenderProgram program, List<DrawStats> stats) {
    if (debug) {
      print("draw2: $name items ${numItems}");
      //print(program.shaderObject.textureSamplerUniform);
      //print(mvMatrix.array);
      //print('-----');
    }

    if (numItems == 0) return;
    material.RenderingInit(gl);
    material.AddShaderInputs(program);
    AddShaderInputs(program);
    program.Draw(numInstances, numItems, _meshData.DrawMode(), stats);
    RemoveShaderInputs(program);
    material.RemoveShaderInputs(program);
    material.RenderingExit(gl);
  }

  void draw(
      RenderProgram program, VM.Matrix4 parentMVMatrix, List<DrawStats> stats) {
    // copy the mvMatrix, so we don't change the original
    _mvMatrix.setFrom(parentMVMatrix);
    _mvMatrix.multiply(transform);
    // TODO: we should tolerate either of them being null
    // In particular if material != null we should apply it so it
    // is valid/active for all _children as well
    if (material != null && _meshData != null) {
      drawOne(program, stats);
    }
    for (Node node in _children) {
      node.draw(program, _mvMatrix, stats);
    }
  }
}
