part of chronosgl;

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
  String texture2SamplerUniform;
  String cameraNear;
  String cameraFar;
  String size; // canvas width and height
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
          gl_FragColor = texture2D(uSampler, vTextureCoord);
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
  
  ShaderObject createLightShader() {
    ShaderObject shaderObject = new ShaderObject();
    
    shaderObject.vertexShader = """
        precision mediump float;

        attribute vec3 aVertexPosition;
        attribute vec3 aNormal;
        
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        vec3 lightDir = vec3(1.0,0.0,1.0);
        vec3 ambientColor = vec3(0.0,0.0,0.0);
        vec3 directionalColor = vec3(1.0,1.0,1.0);

        vec3 pointLightLocation = vec3( 40, 0, 100);
        
        varying vec3 vLightWeighting;
        varying vec3 vNormal;

        void main(void) {
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
          vNormal = (uMVMatrix * vec4(aNormal, 0.0)).xyz;

          vec3 lightDir = normalize(pointLightLocation - aVertexPosition.xyz);

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
    shaderObject.perpectiveMatrixUniform = "uPMatrix";
    
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

  ShaderObject createPlane2ColorShader() {
    ShaderObject shaderObject = new ShaderObject();
    
    shaderObject.vertexShader = """
        precision mediump float;

        attribute vec3 aVertexPosition;
        attribute vec3 aNormal;
        
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
        
        varying vec3 vColor;

        vec3 HSV2RGB( vec3 hsv )
        {
            hsv.x = mod( 100.0 + hsv.x, 1.0 );                                       // Ensure [0,1[
    
            float   HueSlice = 6.0 * hsv.x;                                            // In [0,6[
            float   HueSliceInteger = floor( HueSlice );
            float   HueSliceInterpolant = HueSlice - HueSliceInteger;                   // In [0,1[ for each hue slice
    
            vec3  TempRGB = vec3(   hsv.z * (1.0 - hsv.y),
                                        hsv.z * (1.0 - hsv.y * HueSliceInterpolant),
                                        hsv.z * (1.0 - hsv.y * (1.0 - HueSliceInterpolant)) );
    
            float   IsOddSlice = mod( HueSliceInteger, 2.0 );                          // 0 if even (slices 0, 2, 4), 1 if odd (slices 1, 3, 5)
            float   ThreeSliceSelector = 0.5 * (HueSliceInteger - IsOddSlice);          // (0, 1, 2) corresponding to slices (0, 2, 4) and (1, 3, 5)
    
            vec3  ScrollingRGBForEvenSlices = vec3( hsv.z, TempRGB.zx );           // (V, Temp Blue, Temp Red) for even slices (0, 2, 4)
            vec3  ScrollingRGBForOddSlices = vec3( TempRGB.y, hsv.z, TempRGB.x );  // (Temp Green, V, Temp Red) for odd slices (1, 3, 5)
            vec3  ScrollingRGB = mix( ScrollingRGBForEvenSlices, ScrollingRGBForOddSlices, IsOddSlice );
    
            float   IsNotFirstSlice = clamp( ThreeSliceSelector, 0.0,1.0 );                   // 1 if NOT the first slice (true for slices 1 and 2)
            float   IsNotSecondSlice = clamp( ThreeSliceSelector-1.0, 0.0,1. );              // 1 if NOT the first or second slice (true only for slice 2)
    
            return  mix( ScrollingRGB.xyz, mix( ScrollingRGB.zxy, ScrollingRGB.yzx, IsNotSecondSlice ), IsNotFirstSlice );    // Make the RGB rotate right depending on final slice index
        }

        void main(void) {
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
          float d=dot( aVertexPosition, aNormal);
          vec3 hsv = vec3(d,1,1);
          vColor=HSV2RGB(hsv);
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

  ShaderObject createFixedVertexColorShader() {
    ShaderObject shaderObject = new ShaderObject();
    
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

