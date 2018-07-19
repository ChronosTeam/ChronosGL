part of chronosshader;

List<ShaderObject> createPlane2GreyShader() {
  return [
    ShaderObject("Plane2GreyV")
      ..AddAttributeVars([aPosition, aNormal])
      ..AddVaryingVars([vColor])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..SetBodyWithMain([
        "float d = sin(dot( ${aPosition}, ${aNormal})) / 2.0 + 0.5;",
        "${vColor} = vec3(d,d,d);",
        StdVertexBody,
      ]),
    ShaderObject("Plane2GreyF")
      ..AddVaryingVars([vColor])
      ..SetBodyWithMain(["${oFragColor} = vec4(${vColor}, 1.0);"])
  ];
}

// by patapom at stackoverflow.com
const String _VertexShaderPlane2ColorV = """
vec3 HSV2RGB( vec3 hsv )
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
  gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(${aPosition}, 1.0);
  float d=dot( ${aPosition}, ${aNormal});
  vec3 hsv = vec3(d,1,1);
  ${vColor} = HSV2RGB(hsv);
}
""";

List<ShaderObject> createPlane2ColorShader() {
  return [
    ShaderObject("Plane2ColorV")
      ..AddAttributeVars([aPosition, aNormal])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..AddVaryingVars([vColor])
      ..SetBody([_VertexShaderPlane2ColorV]),
    ShaderObject("Plane2ColorF")
      ..AddVaryingVars([vColor])
      ..SetBodyWithMain(["${oFragColor} = vec4( vColor, 1.0 );"])
  ];
}
