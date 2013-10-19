part of chronos_gl;

const String fs_precision = "precision mediump float;\n";
//float PI = 3.14159265358979323846264;

class ShaderObject {
  String vertexShader;
  String fragmentShader;
  String vertexPositionAttribute;
  String textureCoordinatesAttribute;
  String normalAttribute;
  String transformationMatrixUniform;
  String modelViewMatrixUniform;
  String perpectiveMatrixUniform;
  String textureSamplerUniform;
  String timeUniform;
}

class ShaderLib {
  
  ShaderObject createBasicShader() {
    ShaderObject shaderObject = new ShaderObject();
    
    // TODO: think about multipying uPMatrix and uMVMatrix in Dart code...
    // or maybe cache the result in a static ?
    
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
        
        void main(void) {
          gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
          //gl_FragColor = vec4( vec3( vTextureCoord, 0. ), 1. );
        }
        """;
    
    shaderObject.vertexPositionAttribute = "aVertexPosition"; 
    shaderObject.textureCoordinatesAttribute = "aTextureCoord";
    shaderObject.modelViewMatrixUniform = "uMVMatrix";
    shaderObject.perpectiveMatrixUniform = "uPMatrix";
    shaderObject.textureSamplerUniform = "uSampler";
    
    return shaderObject;
  }
  
  ShaderObject createNormal2ColorShader() {
    ShaderObject shaderObject = new ShaderObject();
    
    shaderObject.vertexShader = """
        precision mediump float;

        attribute vec3 aVertexPosition;
        attribute vec3 aNormal;
        
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
        
        varying vec3 vNormal;

        void main(void) {
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
          vNormal = aNormal;
        }
        """;
    
    shaderObject.fragmentShader = """
        precision mediump float;
        
        varying vec3 vNormal;

        void main(void) {
          gl_FragColor = vec4( normalize( vNormal / 2.0 + vec3(0.5) ), 1.0 );
        }
        """;
    
    shaderObject.vertexPositionAttribute = "aVertexPosition"; 
    shaderObject.normalAttribute = "aNormal";
    shaderObject.modelViewMatrixUniform = "uMVMatrix";
    shaderObject.perpectiveMatrixUniform = "uPMatrix";
    
    return shaderObject;
  }

  ShaderObject createFixedVertexColorShader() {
    ShaderObject shaderObject = new ShaderObject();
    
    shaderObject.vertexShader = """
        precision mediump float;
        attribute vec3 aVertexPosition;
        
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec3 vColor;
        
        void main(void) {
          vColor = vec3( sin(aVertexPosition.x), sin(aVertexPosition.y), sin(aVertexPosition.z));
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
  
  ShaderObject createPointSpritesShader() {
    ShaderObject shaderObject = new ShaderObject();
    
    shaderObject.vertexShader = """
        precision mediump float;
        attribute vec3 aVertexPosition;
        
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
        
        void main(void) {
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
          gl_PointSize = 1000.0/gl_Position.z;
        }
        """;
    
    shaderObject.fragmentShader = """
        precision mediump float;

        uniform sampler2D uSampler;
        
        void main(void) {
          gl_FragColor = texture2D(uSampler, gl_PointCoord);
          gl_FragColor.a = 0.4;
        }
        """;
    
    shaderObject.vertexPositionAttribute = "aVertexPosition"; 
    shaderObject.modelViewMatrixUniform = "uMVMatrix";
    shaderObject.perpectiveMatrixUniform = "uPMatrix";
    shaderObject.textureSamplerUniform = "uSampler";
    return shaderObject;
  }
  
}

