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

class Mesh extends Node {
  WEBGL.RenderingContext gl;
  bool debug = false;

  Map<String, WEBGL.Buffer> _buffers = {};
  WEBGL.Buffer _indexBuffer = null;
  int numItems;
  int numInstances = 0;
  Material material;
  MeshData _meshData;

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

  Mesh(this._meshData, this.material, {this.debug: false}) {
    //if (!meshData.isOptimized) meshData.optimize();
    _meshData.SanityCheck();
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

  // this gets called by Node.draw()
  void draw2(ShaderProgram program, ShaderProgramInputs inputs, List<DrawStats> stats) {
    if (debug) {
      print("draw2: $name items ${numItems}");
      //print(program.shaderObject.textureSamplerUniform);
      //print(mvMatrix.array);
      //print('-----');
    }

    if (numItems == 0) return;
    material.RenderingInit(gl);
    bindBuffers(program);
    VM.Matrix3 normMatrix;
    normMatrix = mvMatrix.getNormalMatrix();
    program.MaybeSetUniformsBulk(material._inputs);
    inputs.SetUniformVal(uTransformationMatrix, transform);
    //inputs.SetUniformVal(uModelViewMatrix, mvMatrix);
    inputs.SetUniformVal(uModelMatrix, mvMatrix);
    inputs.SetUniformVal(uNormalMatrix, normMatrix);
    program.MaybeSetUniformsBulk(inputs);
    program.Draw(
        numInstances, numItems, _meshData.DrawMode(), _indexBuffer != null, stats);

    material.RenderingExit(gl);
  }

  void bindBuffers(ShaderProgram program) {
    for (String canonical in _buffers.keys) {
      program.MaybeSetAttribute(canonical, _buffers[canonical]);
    }

    // should this really be here - interaction with indexer
    if (_indexBuffer != null) {
      program.SetElementArray(_indexBuffer);
    }
  }
}
