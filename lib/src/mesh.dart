part of chronosgl;

class Mesh extends Node {
  RenderingContext gl;
  bool debug = false;
  bool depthTest = true;
  bool depthWrite = true;
  bool blend = false;
  int blend_sFactor = SRC_ALPHA;
  int blend_dFactor = ONE_MINUS_SRC_ALPHA; // This was ONE;
  int blendEquation = FUNC_ADD;

  bool drawPoints;
  ShaderProgramInputs _inputs = new ShaderProgramInputs();

  Buffer verticesBuffer,
      colorsBuffer,
      textureCoordBuffer,
      normalsBuffer,
      binormalsBuffer,
      vertexIndexBuffer;

  int numItems;

  void SetUniform(String canonical, val) {
    _inputs.SetUniformVal(canonical, val);
  }

  Mesh(MeshData meshData, {this.drawPoints: false}) {
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

    if (blend) {
      gl.enable(BLEND);
      gl.blendFunc(blend_sFactor, blend_dFactor);
      gl.blendEquation(blendEquation);
    }

    if (!depthTest) {
      gl.disable(DEPTH_TEST);
    }
    if (!depthWrite) {
      gl.depthMask(false);
    }

    bindBuffers(program);
    bindUniforms(program);
    if(!program.AllUniformsInitialized()) {
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

    if (blend) {
      gl.disable(BLEND);
    }
    if (!depthTest) {
      gl.enable(DEPTH_TEST);
    }
    if (!depthWrite) {
      gl.depthMask(true);
    }
  }

  void bindBuffers(ShaderProgram program) {
    program.MaybeSetAttribute(aVertexPosition, verticesBuffer, "vec3");
    program.MaybeSetAttribute(aColors, colorsBuffer, "vec3");
    program.MaybeSetAttribute(aTextureCoordinates, textureCoordBuffer, "vec2");
    program.MaybeSetAttribute(aNormal, normalsBuffer, "vec3");
    program.MaybeSetAttribute(aBinormal, binormalsBuffer, "vec3");
  }

  void bindUniforms(ShaderProgram program) {
    _inputs.SetUniformVal(uTransformationMatrix, transform);
    _inputs.SetUniformVal(uModelViewMatrix, mvMatrix);
    program.MaybeSetUniformsBulk(_inputs);
  }
}
