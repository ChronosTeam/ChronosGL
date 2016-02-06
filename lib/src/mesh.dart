part of chronosgl;

WEBGL.Buffer CreateAndInitializeArrayBufferFloat32(
    WEBGL.RenderingContext gl, Float32List data) {
  WEBGL.Buffer b = gl.createBuffer();
  gl.bindBuffer(WEBGL.ARRAY_BUFFER, b);
  gl.bufferDataTyped(WEBGL.ARRAY_BUFFER, data, WEBGL.STATIC_DRAW);
  return b;
}

WEBGL.Buffer CreateAndInitializeArrayElementBufferUint32(
    WEBGL.RenderingContext gl, Uint32List data) {
  WEBGL.Buffer b = gl.createBuffer();
  gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, b);
  gl.bufferDataTyped(WEBGL.ELEMENT_ARRAY_BUFFER, data, WEBGL.STATIC_DRAW);
  return b;
}

WEBGL.Buffer CreateAndInitializeArrayElementBufferUint16(
    WEBGL.RenderingContext gl, Uint16List data) {
  WEBGL.Buffer b = gl.createBuffer();
  gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, b);
  gl.bufferDataTyped(WEBGL.ELEMENT_ARRAY_BUFFER, data, WEBGL.STATIC_DRAW);
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
    _buffers[canonical] = CreateAndInitializeArrayBufferFloat32(gl, data);
  }

  void ChangeBuffer(String canonical, Float32List data) {
    gl.bindBuffer(WEBGL.ARRAY_BUFFER, _buffers[canonical]);
    gl.bufferDataTyped(WEBGL.ARRAY_BUFFER, data, WEBGL.DYNAMIC_DRAW);
  }

  Mesh(this._meshData, this.material) {
    //if (!meshData.isOptimized) meshData.optimize();
    _meshData.SanityCheck();
    gl = ChronosGL.globalGL;
    AddBuffer(
        aVertexPosition, new Float32List.fromList(_meshData.GetVertexData()));

    for (String canonical in _meshData.GetAttributes()) {
      AddBuffer(canonical,
          new Float32List.fromList(_meshData.GetAttributeData(canonical)));
    }

    List<int> indices = _meshData.GetVertexIndices();
    if (indices != null) {
      numItems = indices.length;
      if (ChronosGL.useElementIndexUint) {
        _indexBuffer = CreateAndInitializeArrayElementBufferUint32(
            gl, new Uint32List.fromList(indices));
      } else {
        _indexBuffer = CreateAndInitializeArrayElementBufferUint16(
            gl, new Uint16List.fromList(indices));
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
  void draw2(ShaderProgram program, ShaderProgramInputs inputs) {
    if (debug) {
      print("Mesh: $name items ${numItems}");
      //print(program.shaderObject.textureSamplerUniform);
      print(mvMatrix.array);
      print('-----');
    }

    material.RenderingInit(gl);
    bindBuffers(program);
    Matrix3 normMatrix = new Matrix3.fromM4(mvMatrix);
    normMatrix.invert();
    normMatrix.transpose();
    program.MaybeSetUniformsBulk(material._inputs);
    inputs.SetUniformVal(uTransformationMatrix, transform);
    inputs.SetUniformVal(uModelViewMatrix, mvMatrix);
    inputs.SetUniformVal(uNormalMatrix, normMatrix);
    program.MaybeSetUniformsBulk(inputs);
    program.Draw(
        numInstances, numItems, _meshData.IsPoints(), _indexBuffer != null);

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
