part of chronosgl;

ShaderObject createDemoShader() {
  return createFixedVertexColorShader();
}

ShaderObject createFixedVertexColorShader() {
  ShaderObject shaderObject = new ShaderObject("FixedVertexColor");
  
  shaderObject.vertexShader = """
        precision mediump float;
        attribute vec3 aVertexPosition;
        
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec3 vColor;
        
        void main(void) {
          vColor = vec3( sin(aVertexPosition.x)/2.0+0.5, cos(aVertexPosition.y)/2.0+0.5, sin(aVertexPosition.z)/2.0+0.5);
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        }
        """;
  
  shaderObject.fragmentShader = """
        precision mediump float;
        
        varying vec3 vColor;

        void main(void) {
          gl_FragColor = vec4( vColor, 1. );
        }
        """;
  
  shaderObject.vertexPositionAttribute = "aVertexPosition"; 
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  
  return shaderObject;
}

ShaderObject createDebugTexCoordsShader() {
  ShaderObject shaderObject = new ShaderObject("DebugTexCoords");
  shaderObject.vertexPositionAttribute = "aVertexPosition"; 
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  return generateShader(shaderObject, "", "gl_FragColor = vec4(vaTextureCoord, 1.0, 1.0);");
}

ShaderObject createDepthShader() {
  ShaderObject shaderObject = new ShaderObject("Depth");
  
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
        uniform sampler2D uSampler;
        uniform sampler2D depthSampler;
  
        uniform float cameraNear;
        uniform float cameraFar;
        
        float linearizeDepth(float z)
        {
          float n = cameraNear;
          float f = cameraFar;
          return (2.0 * n) / (f + n - z * (f - n)); 
        }

        void main(void) {
          vec4 texel = texture2D(depthSampler, vTextureCoord);
          gl_FragColor = vec4(vec3(linearizeDepth(texel.x)), 1.0);
        }
        """;
  
  shaderObject.vertexPositionAttribute = "aVertexPosition"; 
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.textureSamplerUniform = "uSampler";
  shaderObject.texture2SamplerUniform = "depthSampler";
  shaderObject.cameraNear = "cameraNear";
  shaderObject.cameraFar = "cameraFar";
    
  return shaderObject;
}
