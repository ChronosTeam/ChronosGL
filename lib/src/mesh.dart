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

  Texture texture;
  Texture texture2;
  Texture textureCube;
  Vector color = new Vector();

  Buffer verticesBuffer,
      colorsBuffer,
      textureCoordBuffer,
      normalsBuffer,
      binormalsBuffer,
      vertexIndexBuffer;

  int numItems;

  Mesh(MeshData meshData,
      {this.drawPoints: false, this.texture, this.texture2, this.textureCube}) {
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
    bindTextures(program);

    // TODO: improve this interface
    program.inputs.SetUniformVal(uColor, color.array);
    program.MaybeSetUniform(uColor);

    program.inputs.SetUniformVal(uTransformationMatrix, transform.array);
    program.MaybeSetUniform(uTransformationMatrix);

    program.inputs.SetUniformVal(uModelViewMatrix, mvMatrix.array);
    program.MaybeSetUniform(uModelViewMatrix);

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

  // move this function into class SahderProgram
  void bindTextures(ShaderProgram program) {
    program.inputs.SetUniformVal(uTextureSampler, texture);
    program.inputs.SetUniformVal(uTexture2Sampler, texture2);
    program.inputs.SetUniformVal(uTextureCubeSampler, textureCube);
    program.MaybeSetUniform(uTextureSampler);
    program.MaybeSetUniform(uTexture2Sampler);
    program.MaybeSetUniform(uTextureCubeSampler);
  }

  Mesh setTexture(Texture t) {
    texture = t;
    return this;
  }
}
