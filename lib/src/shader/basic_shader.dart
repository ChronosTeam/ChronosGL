part of chronosgl;

@deprecated
ShaderObject createBasicShader() {
  return createTexturedShader();
}

ShaderObject createTexturedShader() {
  ShaderObject shaderObject = new ShaderObject("Textured");

  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.textureSamplerUniform = "uSampler";
  shaderObject.fragmentShaderBody = "gl_FragColor = texture2D(uSampler, vaTextureCoord);";
  return generateShader(shaderObject);
}

ShaderObject createSolidColorShader() {
  ShaderObject shaderObject = new ShaderObject("Color");
  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.colorUniform = "uColor";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";

  shaderObject.fragmentShaderHeader = "uniform vec3 uColor;";
  shaderObject.fragmentShaderBody = "gl_FragColor = vec4( uColor, 1.0 );";
  return generateShader(shaderObject);
}

ShaderObject createColorShader() {
  ShaderObject shaderObject = new ShaderObject("Color");
  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.colorsAttribute = "aColor";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.fragmentShaderBody = "gl_FragColor = vec4( vaColor, 1.0 );";
  return generateShader(shaderObject);
}

ShaderObject createLightShader() {
  ShaderObject shaderObject = new ShaderObject("Light");

  shaderObject.vertexShader = """
        precision mediump float;

        attribute vec3 aVertexPosition;
        attribute vec3 aNormal;
        
        uniform mat4 uMVMatrix;
        uniform mat4 uViewMatrix;
        uniform mat4 uPMatrix;
        uniform vec3 pointLightLocation;

        vec3 pointLightLocation_;

        vec3 lightDir = vec3(1.0,0.0,1.0);
        vec3 ambientColor = vec3(0.0,0.0,0.0);
        vec3 directionalColor = vec3(1.0,1.0,1.0);

        varying vec3 vLightWeighting;
        varying vec3 vNormal;

        void main(void) {
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
          vNormal = (uMVMatrix * vec4(aNormal, 0.0)).xyz;
          pointLightLocation_ = (uViewMatrix * vec4(pointLightLocation, 0.0)).xyz;

          vec3 lightDir = normalize(pointLightLocation_ - aVertexPosition.xyz);

          float directionalLightWeighting = max(dot(vNormal, normalize(lightDir)), 0.0);
          vLightWeighting = ambientColor + directionalColor * directionalLightWeighting;
        }
        """;

  shaderObject.fragmentShader = """
        precision mediump float;
        
        varying vec3 vLightWeighting;
        varying vec3 vNormal;

        void main(void) {
          //gl_FragColor = vec4( vNormal * vLightWeighting, 1.0 );
          gl_FragColor = vec4( vLightWeighting, 1.0 );
        }
        """;

  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.normalAttribute = "aNormal";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.viewMatrixUniform = "uViewMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.pointLightLocationUniform = "pointLightLocation";

  return shaderObject;
}

ShaderObject createNormal2ColorShader() {
  ShaderObject shaderObject = new ShaderObject("Normal2Color");

  shaderObject.vertexShader = """
        precision mediump float;

        attribute vec3 aVertexPosition;
        attribute vec3 aNormal;
        
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
        
        varying vec3 vColor;

        void main(void) {
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
          vColor=normalize( aNormal / 2.0 + vec3(0.5) );
        }
        """;

  shaderObject.fragmentShader = """
        precision mediump float;
        
        varying vec3 vColor;

        void main(void) {
          gl_FragColor = vec4( vColor, 1.0 );
        }
        """;

  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.normalAttribute = "aNormal";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";

  return shaderObject;
}

// this shader works well for cube shapes, for other shapes it might be better to use the normals attribute to sample the cube texture
ShaderObject createCubeMapShader() {
  ShaderObject shaderObject = new ShaderObject("CubeMap");
  shaderObject.vertexShader = """
    precision mediump float;
    attribute vec3 vertexPosition;
    uniform mat4 uPMatrix;
    uniform mat4 uMVMatrix;
    varying vec3 vertexPos;
    void main(void) {
      vertexPos = normalize(vertexPosition);
      gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
    }
  """;
  shaderObject.fragmentShader = """
    precision mediump float;
    uniform samplerCube sampler;
    varying vec3 vertexPos;
    void main() {
      gl_FragColor = textureCube(sampler, vertexPos);
    }
  """;
  shaderObject.vertexPositionAttribute = "vertexPosition";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.textureCubeSamplerUniform = "sampler";
  return shaderObject;
}

ShaderObject createPointSpritesShader() {
  ShaderObject shaderObject = new ShaderObject("PointSprites");

  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.textureSamplerUniform = "uSampler";
  shaderObject.vertexShaderBody = "gl_PointSize = 1000.0/gl_Position.z;";
  shaderObject.fragmentShaderBody = "gl_FragColor = texture2D(uSampler, gl_PointCoord);";
  return generateShader(shaderObject);
}
