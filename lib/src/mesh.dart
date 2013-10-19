part of chronos_gl;

class Mesh extends Node {
  
  RenderingContext gl;
  bool debug=false;
  bool blend=false;
  int blend_sFactor = SRC_ALPHA;
  int blend_dFactor = ONE;
  
  bool drawPoints;
  
  Texture texture;
  
  Buffer verticesBuffer, textureCoordBuffer, normalsBuffer, vertexIndexBuffer;
  
  int numItems;
 
  Mesh( MeshData meshData, [this.drawPoints=false]) {
    this.texture = meshData.texture;
    
    gl = ChronosGL.globalGL;

    verticesBuffer = gl.createBuffer();
    gl.bindBuffer(ARRAY_BUFFER, verticesBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, meshData.vertices, STATIC_DRAW);

    if( meshData.textureCoords != null ) {
      textureCoordBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, textureCoordBuffer);
      gl.bufferDataTyped(ARRAY_BUFFER, meshData.textureCoords, STATIC_DRAW);
    }
    
    if( meshData.normals != null ) {
      normalsBuffer = gl.createBuffer();
      gl.bindBuffer(ARRAY_BUFFER, normalsBuffer);
      gl.bufferDataTyped(ARRAY_BUFFER, meshData.normals, STATIC_DRAW);
    }
    
    if( meshData.vertexIndices != null ) {
      numItems = meshData.vertexIndices.length;
      vertexIndexBuffer = gl.createBuffer();
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
      gl.bufferDataTyped(ELEMENT_ARRAY_BUFFER, meshData.vertexIndices, STATIC_DRAW);
    } else {
      numItems = meshData.vertices.length ~/ 3;
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
       
    gl.bindBuffer(ARRAY_BUFFER, verticesBuffer);
    gl.vertexAttribPointer(program.vertexPositionAttribute, 3, FLOAT, false, 0, 0);

    if( program.shaderObject.textureCoordinatesAttribute != null) {
      gl.bindBuffer(ARRAY_BUFFER, textureCoordBuffer);
      gl.vertexAttribPointer(program.textureCoordAttribute, 2, FLOAT, false, 0, 0);
    }

    if( program.shaderObject.normalAttribute != null) {
      gl.bindBuffer(ARRAY_BUFFER, normalsBuffer);
      gl.vertexAttribPointer(program.normalAttribute, 3, FLOAT, false, 0, 0);
    }

    if( program.shaderObject.textureSamplerUniform != null) {
      gl.activeTexture(TEXTURE0);
      gl.bindTexture(TEXTURE_2D, texture);
      gl.uniform1i(program.samplerUniform, 0);
    }

    if( program.shaderObject.transformationMatrixUniform != null) {
      gl.uniformMatrix4fv(program.transformationMatrixUniform, false, matrix.array);
    }

    gl.uniformMatrix4fv(program.mvMatrixUniform, false, mvMatrix.array);
    
    if( drawPoints ) {
      gl.drawArrays(POINTS, 0, numItems);
    } else if( vertexIndexBuffer == null) {
      gl.drawArrays(TRIANGLES, 0, numItems);
    } else  {
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
      gl.drawElements(TRIANGLES, numItems, UNSIGNED_SHORT, 0);
    }
    
    if( debug)
      print( gl.getProgramInfoLog(program.program));
    
    if( blend) {
      //gl.enable(gl.DEPTH_TEST);
      gl.disable(BLEND);
    }
    
    
  }

  
}