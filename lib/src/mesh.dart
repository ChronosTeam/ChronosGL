part of chronosgl;

class Mesh extends Node {
  
  RenderingContext gl;
  bool debug=false;
  bool blend=false;
  int blend_sFactor = SRC_ALPHA;
  int blend_dFactor = ONE;
  
  bool drawPoints;
  
  Texture texture;
  Texture texture2;
  Texture textureCube;
  Vector color = new Vector();
  
  Buffer verticesBuffer, colorsBuffer, textureCoordBuffer, normalsBuffer, binormalsBuffer, vertexIndexBuffer;
  
  int numItems;
 
  Mesh( MeshData meshData, [this.drawPoints=false]) {
    
    if( !meshData.isOptimized)
      meshData.optimize();
    
    this.texture = meshData.texture;
    this.texture2 = meshData.texture2;
    
    gl = ChronosGL.globalGL;

    verticesBuffer = gl.createBuffer();
    gl.bindBuffer(ARRAY_BUFFER, verticesBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, meshData.vertices as Float32List, STATIC_DRAW);

    if( meshData.colors != null ) {
      colorsBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, colorsBuffer);
      gl.bufferDataTyped(ARRAY_BUFFER, meshData.colors as Float32List, STATIC_DRAW);
    }

    if( meshData.textureCoords != null ) {
      textureCoordBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, textureCoordBuffer);
      gl.bufferDataTyped(ARRAY_BUFFER, meshData.textureCoords as Float32List, STATIC_DRAW);
    }
    
    if( meshData.normals != null ) {
      normalsBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, normalsBuffer);
      gl.bufferDataTyped(ARRAY_BUFFER, meshData.normals as Float32List, STATIC_DRAW);
    }
    
    if( meshData.binormals != null ) {
      binormalsBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, binormalsBuffer);
      gl.bufferDataTyped(ARRAY_BUFFER, meshData.binormals as Float32List, STATIC_DRAW);
    }
    
    if( meshData.vertexIndices != null ) {
      numItems = meshData.vertexIndices.length;
      vertexIndexBuffer = gl.createBuffer();
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
      if(ChronosGL.useElementIndexUint)
        gl.bufferDataTyped(ELEMENT_ARRAY_BUFFER, meshData.vertexIndices as Uint32List, STATIC_DRAW);
      else
        gl.bufferDataTyped(ELEMENT_ARRAY_BUFFER, meshData.vertexIndices as Uint16List, STATIC_DRAW);
    } else {
      numItems = meshData.vertices.length ~/ 3;
    }
    
  }
  
  void clearData() {
    gl.deleteBuffer( verticesBuffer);
    if( colorsBuffer != null ) {
      gl.deleteBuffer( colorsBuffer);
    }
    if( textureCoordBuffer != null ) {
      gl.deleteBuffer( textureCoordBuffer);
    }
    if( normalsBuffer != null ) {
      gl.deleteBuffer( normalsBuffer);
    }
    if( binormalsBuffer != null ) {
      gl.deleteBuffer( binormalsBuffer);
    }
    if( vertexIndexBuffer != null ) {
      gl.deleteBuffer( vertexIndexBuffer);
    }
  }

  // this gets called by Node.draw()
  void draw2( ShaderProgram program) {
    
    if( debug) {
      print( "Mesh: $name");
      print( program.shaderObject.textureSamplerUniform);
      print( drawPoints);
      print( numItems);
      print( mvMatrix.array);
      print( '-----');
      
    }
    
    if( blend) {
      //gl.disable(gl.DEPTH_TEST);
      gl.enable(BLEND);
      gl.blendFunc(blend_sFactor, blend_dFactor);
    }
       
    bindBuffers(program);
    bindTextures(program);
    
    if( program.shaderObject.colorUniform != null) {
      program.colorUniform.setValue3fv(color);
    }

    if( program.shaderObject.transformationMatrixUniform != null) {
      gl.uniformMatrix4fv(program.transformationMatrixUniform, false, transform.array);
    }

    gl.uniformMatrix4fv(program.modelViewMatrixUniform, false, mvMatrix.array);
    
    if( drawPoints ) {
      gl.drawArrays(POINTS, 0, numItems);
    } else if( vertexIndexBuffer == null) {
      gl.drawArrays(TRIANGLES, 0, numItems);
    } else  {
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
      gl.drawElements(TRIANGLES, numItems, ChronosGL.useElementIndexUint ? UNSIGNED_INT : UNSIGNED_SHORT, 0);
    }
    
    if( debug)
      print( gl.getProgramInfoLog(program.program));
    
    if( blend) {
      //gl.enable(gl.DEPTH_TEST);
      gl.disable(BLEND);
    }
    
    
  }

  void bindBuffers(ShaderProgram program) {
    gl.bindBuffer(ARRAY_BUFFER, verticesBuffer);
    gl.vertexAttribPointer(program.vertexPositionAttribute, 3, FLOAT, false, 0, 0);
    
    if( program.shaderObject.colorsAttribute != null) {
      gl.bindBuffer(ARRAY_BUFFER, colorsBuffer);
      gl.vertexAttribPointer(program.colorsAttribute, 3, FLOAT, false, 0, 0);
    }
    
    if( program.shaderObject.textureCoordinatesAttribute != null) {
      gl.bindBuffer(ARRAY_BUFFER, textureCoordBuffer);
      gl.vertexAttribPointer(program.textureCoordAttribute, 2, FLOAT, false, 0, 0);
    }
    
    if( program.shaderObject.normalAttribute != null) {
      gl.bindBuffer(ARRAY_BUFFER, normalsBuffer);
      gl.vertexAttribPointer(program.normalAttribute, 3, FLOAT, false, 0, 0);
    }
    
    if( program.shaderObject.binormalAttribute != null) {
      gl.bindBuffer(ARRAY_BUFFER, binormalsBuffer);
      gl.vertexAttribPointer(program.binormalAttribute, 3, FLOAT, false, 0, 0);
    }
  }

  void bindTextures(ShaderProgram program) {
    int activeTextureCounter=0;
    if( program.shaderObject.textureSamplerUniform != null) {
      gl.activeTexture(TEXTURE0+activeTextureCounter);
      gl.bindTexture(TEXTURE_2D, texture);
      gl.uniform1i(program.textureSamplerUniform, activeTextureCounter++);
    }
    
    if( program.shaderObject.texture2SamplerUniform != null) {
      gl.activeTexture(TEXTURE0+activeTextureCounter);
      gl.bindTexture(TEXTURE_2D, texture2);
      gl.uniform1i(program.texture2SamplerUniform, activeTextureCounter++);
    }
    
    if( program.shaderObject.textureCubeSamplerUniform != null) {
      gl.activeTexture(TEXTURE0+activeTextureCounter);
      gl.bindTexture(TEXTURE_CUBE_MAP, textureCube);
      gl.uniform1i(program.textureCubeSamplerUniform, activeTextureCounter++);
    }
  }

  
}