part of chronosgl;

ShaderObject generateShader( ShaderObject shaderObject) {
 
  String vs = """
    precision mediump float;

    attribute vec3 ${shaderObject.vertexPositionAttribute};
    
    uniform mat4 ${shaderObject.modelViewMatrixUniform};
    uniform mat4 ${shaderObject.perpectiveMatrixUniform};
    """;

    if( shaderObject.vertexPositionAttribute != null) {
        vs += """
        attribute vec2 ${shaderObject.textureCoordinatesAttribute};
        varying vec2 v${shaderObject.textureCoordinatesAttribute};
        """;
    }
    
    vs += shaderObject.vertexShaderHeader+"\n";
    vs += "void main(void) {\n";
    vs += "gl_Position = ${shaderObject.perpectiveMatrixUniform} * ${shaderObject.modelViewMatrixUniform} * vec4(${shaderObject.vertexPositionAttribute}, 1.0);\n";
    
    if( shaderObject.vertexPositionAttribute != null) {
      vs += "v${shaderObject.textureCoordinatesAttribute} = ${shaderObject.textureCoordinatesAttribute};\n";
    }
    vs += shaderObject.vertexShaderBody;
    
    vs += "}\n";

  shaderObject.vertexShader = vs;
  
  // ----------------------
  
  String fs = "precision mediump float;\n";
  
  if( shaderObject.vertexPositionAttribute != null) {
    fs += "varying vec2 v${shaderObject.textureCoordinatesAttribute};\n";
  }  

  if( shaderObject.textureSamplerUniform != null) {
    fs += "uniform sampler2D ${shaderObject.textureSamplerUniform};\n";
  }
  
  if( shaderObject.timeUniform != null) {
    fs += "uniform float ${shaderObject.timeUniform};\n";
  }
        
  fs += shaderObject.fragmentShaderHeader+"\n";
  fs += "void main(void) {\n";
  fs += shaderObject.fragmentShaderBody;
  fs += "\n}\n";
  shaderObject.fragmentShader = fs;
 
  return shaderObject;
}
