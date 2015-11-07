part of chronosgl;

class Mesh extends Node {
  RenderingContext gl;
  bool debug = false;

  bool drawPoints;

  Buffer verticesBuffer,
      colorsBuffer,
      textureCoordBuffer,
      normalsBuffer,
      binormalsBuffer,
      vertexIndexBuffer;

  int numItems;

  Material material;

  Mesh(MeshData meshData, this.material,{this.drawPoints: false}) {
    if (!meshData.isOptimized) meshData.optimize();

    gl = ChronosGL.globalGL;

    verticesBuffer = gl.createBuffer();
    gl.bindBuffer(ARRAY_BUFFER, verticesBuffer);
    gl.bufferDataTyped(
        ARRAY_BUFFER, meshData.vertices as Float32List, STATIC_DRAW);

    if (meshData.colors != null) {
      colorsBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, colorsBuffer);
      gl.bufferDataTyped(
          ARRAY_BUFFER, meshData.colors as Float32List, STATIC_DRAW);
    }

    if (meshData.textureCoords != null) {
      textureCoordBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, textureCoordBuffer);
      gl.bufferDataTyped(
          ARRAY_BUFFER, meshData.textureCoords as Float32List, STATIC_DRAW);
    }

    if (meshData.normals != null) {
      normalsBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, normalsBuffer);
      gl.bufferDataTyped(
          ARRAY_BUFFER, meshData.normals as Float32List, STATIC_DRAW);
    }

    if (meshData.binormals != null) {
      binormalsBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, binormalsBuffer);
      gl.bufferDataTyped(
          ARRAY_BUFFER, meshData.binormals as Float32List, STATIC_DRAW);
    }

    if (meshData.vertexIndices != null) {
      numItems = meshData.vertexIndices.length;
      vertexIndexBuffer = gl.createBuffer();
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
      if (ChronosGL.useElementIndexUint) gl.bufferDataTyped(
          ELEMENT_ARRAY_BUFFER,
          meshData.vertexIndices as Uint32List,
          STATIC_DRAW);
      else gl.bufferDataTyped(ELEMENT_ARRAY_BUFFER,
          meshData.vertexIndices as Uint16List, STATIC_DRAW);
    } else {
      numItems = meshData.vertices.length ~/ 3;
    }
  }

  void clearData() {
    gl.deleteBuffer(verticesBuffer);
    if (colorsBuffer != null) {
      gl.deleteBuffer(colorsBuffer);
    }
    if (textureCoordBuffer != null) {
      gl.deleteBuffer(textureCoordBuffer);
    }
    if (normalsBuffer != null) {
      gl.deleteBuffer(normalsBuffer);
    }
    if (binormalsBuffer != null) {
      gl.deleteBuffer(binormalsBuffer);
    }
    if (vertexIndexBuffer != null) {
      gl.deleteBuffer(vertexIndexBuffer);
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
    if (drawPoints) {
      gl.drawArrays(POINTS, 0, numItems);
    } else if (vertexIndexBuffer == null) {
      gl.drawArrays(TRIANGLES, 0, numItems);
    } else {
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
      gl.drawElements(TRIANGLES, numItems,
          ChronosGL.useElementIndexUint ? UNSIGNED_INT : UNSIGNED_SHORT, 0);
    }

    if (debug) print(gl.getProgramInfoLog(program.program));

    material.RenderingExit(gl);
  }

  void bindBuffers(ShaderProgram program) {
    program.MaybeSetAttribute(aVertexPosition, verticesBuffer, "vec3");
    program.MaybeSetAttribute(aColors, colorsBuffer, "vec3");
    program.MaybeSetAttribute(aTextureCoordinates, textureCoordBuffer, "vec2");
    program.MaybeSetAttribute(aNormal, normalsBuffer, "vec3");
    program.MaybeSetAttribute(aBinormal, binormalsBuffer, "vec3");
  }

  // This code is still a bit awkward.
  void bindUniforms(ShaderProgram program) {
    ShaderProgramInputs inp = material._inputs;
    inp.SetUniformVal(uTransformationMatrix, transform);
    inp.SetUniformVal(uModelViewMatrix, mvMatrix);
    program.MaybeSetUniformsBulk(inp);
  }
}
