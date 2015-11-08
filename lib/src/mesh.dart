part of chronosgl;

Buffer CreateAndInitializeArrayBufferFloat32(RenderingContext gl, Float32List data) {
   Buffer b = gl.createBuffer();
   gl.bindBuffer(ARRAY_BUFFER, b);
   gl.bufferDataTyped(ARRAY_BUFFER, data, STATIC_DRAW);
   return b;
 }
 
 Buffer CreateAndInitializeArrayElementBufferUint32(
     RenderingContext gl, Uint32List data) {
    Buffer b = gl.createBuffer();
    gl.bindBuffer(ELEMENT_ARRAY_BUFFER, b);
    gl.bufferDataTyped(ELEMENT_ARRAY_BUFFER, data, STATIC_DRAW);
    return b;
  }
 
 Buffer CreateAndInitializeArrayElementBufferUint16(
      RenderingContext gl, Uint16List data) {
     Buffer b = gl.createBuffer();
     gl.bindBuffer(ELEMENT_ARRAY_BUFFER, b);
     gl.bufferDataTyped(ELEMENT_ARRAY_BUFFER, data, STATIC_DRAW);
     return b;
   }
 
 
class Mesh extends Node {
  RenderingContext gl;
  bool debug = false;

  bool drawPoints;

  Map<String, Buffer> _buffers = {};
  Buffer _indexBuffer = null;
  int numItems;
  Material material;

 
  Mesh(MeshData meshData, this.material, {this.drawPoints: false}) {
    if (!meshData.isOptimized) meshData.optimize();

    gl = ChronosGL.globalGL;

    assert(meshData.vertices != null);
    _buffers[aVertexPosition] = CreateAndInitializeArrayBufferFloat32(gl, meshData.vertices);
    if (meshData.colors != null) {
      _buffers[aColors] = CreateAndInitializeArrayBufferFloat32(gl, meshData.colors);
    }
    if (meshData.textureCoords != null) {
      _buffers[aTextureCoordinates] = CreateAndInitializeArrayBufferFloat32(
         gl, meshData.textureCoords);
    }
    if (meshData.normals != null) {
      _buffers[aNormal] = CreateAndInitializeArrayBufferFloat32(gl, meshData.normals);
    }

    if (meshData.binormals != null) {
      _buffers[aBinormal] = CreateAndInitializeArrayBufferFloat32(gl, meshData.binormals);
    }


    if (meshData.vertexIndices != null) {
      numItems = meshData.vertexIndices.length;
      if (ChronosGL.useElementIndexUint) {
        _indexBuffer = CreateAndInitializeArrayElementBufferUint32(gl, meshData.vertexIndices);
      } else {
        _indexBuffer = CreateAndInitializeArrayElementBufferUint16(gl, meshData.vertexIndices);
      }
    } else {
      numItems = meshData.vertices.length ~/ 3;
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
  void draw2(ShaderProgram program) {
    if (debug) {
      print("Mesh: $name");
      //print(program.shaderObject.textureSamplerUniform);
      print(drawPoints);
      print(numItems);
      print(mvMatrix.array);
      print('-----');
    }

    material.RenderingInit(gl);

    bindBuffers(program);
    bindUniforms(program);
    if (!program.AllUniformsInitialized()) {
      LogInfo("program ${program.name}");
      LogInfo("want: ${program._uniformLocations}");
      LogInfo("have: ${program._uniformInitialized}");
      assert(false);
    }
    
    program.Draw(numItems, drawPoints, _indexBuffer != null);
 
    material.RenderingExit(gl);
  }

  void bindBuffers(ShaderProgram program) {
    for (String canonical in _buffers.keys) {
      program.MaybeSetAttribute(canonical, _buffers[canonical]);
    }
    // should this really be here - interaction with indexer
    if (_indexBuffer != null ) {
      program.SetElementArray(_indexBuffer);
    }
  }

  // This code is still a bit awkward.
  void bindUniforms(ShaderProgram program) {
    ShaderProgramInputs inp = material._inputs;
    inp.SetUniformVal(uTransformationMatrix, transform);
    inp.SetUniformVal(uModelViewMatrix, mvMatrix);
    program.MaybeSetUniformsBulk(inp);
  }
}
