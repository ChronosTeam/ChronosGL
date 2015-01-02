part of chronosgl;

ShaderObject createSobelShader() {
  ShaderObject shaderObject = new ShaderObject("Sobel");
  
  shaderObject.vertexShader = """
  precision mediump float;
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  
  varying vec2 vTextureCoord;
  
  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
  """;
  
  shaderObject.fragmentShader = """
  precision mediump float;
  
  varying vec2 vTextureCoord;
  uniform sampler2D colorSampler;
  
  uniform float cameraNear;
  uniform float cameraFar;
  uniform vec2 size;

  float lum(vec4 c) {
    return dot(c.xyz, vec3(0.3, 0.59, 0.11));
  }

  float sobel() {
      vec2 imageIncrement = vec2(1.0/size.x,1.0/size.y);
      float t00 = lum(texture2D(colorSampler, vTextureCoord + imageIncrement * vec2(-1, -1)));
      float t10 = lum(texture2D(colorSampler, vTextureCoord + imageIncrement * vec2( 0, -1)));
      float t20 = lum(texture2D(colorSampler, vTextureCoord + imageIncrement * vec2( 1, -1)));
      float t01 = lum(texture2D(colorSampler, vTextureCoord + imageIncrement * vec2(-1,  0)));
      float t21 = lum(texture2D(colorSampler, vTextureCoord + imageIncrement * vec2( 1,  0)));
      float t02 = lum(texture2D(colorSampler, vTextureCoord + imageIncrement * vec2(-1,  1)));
      float t12 = lum(texture2D(colorSampler, vTextureCoord + imageIncrement * vec2( 0,  1)));
      float t22 = lum(texture2D(colorSampler, vTextureCoord + imageIncrement * vec2( 1,  1)));
      vec2 grad;
      grad.x = t00 + 2.0 * t01 + t02 - t20 - 2.0 * t21 - t22;
      grad.y = t00 + 2.0 * t10 + t20 - t02 - 2.0 * t12 - t22;
      return length(grad);
  } 

  void main(void) {
      float len = sobel();
      gl_FragColor = vec4(len, len, len, 1.0); // 
  }
  """;
  
  shaderObject.vertexPositionAttribute = "aVertexPosition"; 
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.textureSamplerUniform = "colorSampler";
  shaderObject.cameraNear = "cameraNear";
  shaderObject.cameraFar = "cameraFar";
  shaderObject.canvasSize = "size";
 
  return shaderObject;
}