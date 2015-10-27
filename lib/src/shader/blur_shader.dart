part of chronosgl;

ShaderObject createBlurShader() {
  ShaderObject shaderObject = new ShaderObject("Blur");

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



  void main(void)
  {
      float offset[3];
      offset[0]=0.;
      offset[1]=1.3846153846;
      offset[2]=3.2307692308;
      float weight[3];
      weight[0]=0.2270270270;
      weight[1]=0.3162162162;
      weight[2]=0.0702702703;

      //gl_FragColor = vec4(gl_FragCoord.x/size.x, gl_FragCoord.y/size.y, 0., 0.);
      //gl_FragColor = vec4(vTextureCoord.x, vTextureCoord.y, 0., 0.);

      gl_FragColor = texture2D( colorSampler, vTextureCoord)* weight[0];
      for (int i=1; i<3; i++) {
          gl_FragColor += texture2D( colorSampler, vTextureCoord+vec2(0.0, offset[i]/size.y) ) * weight[i];
          gl_FragColor += texture2D( colorSampler, vTextureCoord-vec2(0.0, offset[i]/size.y) ) * weight[i];
      }

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
