part of chronosgl;

ShaderObject createPlasmaShader() {
  ShaderObject shaderObject = new ShaderObject("Plasma");
  
  shaderObject.vertexPositionAttribute = "aVertexPosition"; 
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.timeUniform = "time";

  //         #define PI 3.1415926535897932384626433832795
 
  String fragmentShaderBody = """
          vec4 newColor = vec4(vaTextureCoord, 1.0, 1.0);
          //float x = min(vaTextureCoord.s, 1.0 - vaTextureCoord.s);
          //float y = vaTextureCoord.t;
          //newColor.g = sin(x * cos(time/15.0) * 120.0) + cos(y * sin(time/10.0) * 120.0) + sin(sqrt(y * y + x * x) * 40.0);
          gl_FragColor = newColor;
  """;
  
  return generateShader(shaderObject, "", fragmentShaderBody);
}
