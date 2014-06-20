part of chronosgl;

ShaderObject createPlane2GreyShader() {
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
          float d=sin(dot( aVertexPosition, aNormal)) / 2.0 + 0.5;
          vColor = vec3(d,d,d);
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

        vec3 HSV2RGB( vec3 hsv ) // by patapom at stackoverflow.com
        {
            hsv.x = mod( 100.0 + hsv.x, 1.0 ); // Ensure [0,1[
            float   HueSlice = 6.0 * hsv.x; // In [0,6[
            float   HueSliceInteger = floor( HueSlice );
            float   HueSliceInterpolant = HueSlice - HueSliceInteger; // In [0,1[ for each hue slice
            vec3  TempRGB = vec3(   hsv.z * (1.0 - hsv.y), hsv.z * (1.0 - hsv.y * HueSliceInterpolant), hsv.z * (1.0 - hsv.y * (1.0 - HueSliceInterpolant)) );
            float   IsOddSlice = mod( HueSliceInteger, 2.0 ); // 0 if even (slices 0, 2, 4), 1 if odd (slices 1, 3, 5)
            float   ThreeSliceSelector = 0.5 * (HueSliceInteger - IsOddSlice); // (0, 1, 2) corresponding to slices (0, 2, 4) and (1, 3, 5)
            vec3  ScrollingRGBForEvenSlices = vec3( hsv.z, TempRGB.zx );           // (V, Temp Blue, Temp Red) for even slices (0, 2, 4)
            vec3  ScrollingRGBForOddSlices = vec3( TempRGB.y, hsv.z, TempRGB.x );  // (Temp Green, V, Temp Red) for odd slices (1, 3, 5)
            vec3  ScrollingRGB = mix( ScrollingRGBForEvenSlices, ScrollingRGBForOddSlices, IsOddSlice );
            float   IsNotFirstSlice = clamp( ThreeSliceSelector, 0.0,1.0 ); // 1 if NOT the first slice (true for slices 1 and 2)
            float   IsNotSecondSlice = clamp( ThreeSliceSelector-1.0, 0.0,1. ); // 1 if NOT the first or second slice (true only for slice 2)
            return  mix( ScrollingRGB.xyz, mix( ScrollingRGB.zxy, ScrollingRGB.yzx, IsNotSecondSlice ), IsNotFirstSlice ); // Make the RGB rotate right depending on final slice index
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

