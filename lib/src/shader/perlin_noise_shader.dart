part of chronosshader;

final ShaderObject perlinNoiseVertexShader = ShaderObject("PerlinNoiseV")
  ..AddAttributeVars([aPosition])
  ..AddVaryingVars([vNormal])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uTime])
  ..SetBody([
    PerlinNoiseFunctions,
    """
void main() {
    ${vNormal} = normalize( ${aPosition});
    gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(${aPosition}, 1.0);
}
"""
  ]);

// this shader is build for use with an icosahedron
ShaderObject makePerlinNoiseColorFragmentShader(bool blackVariant) {
  String define = "";
  String name = "PerlinNoiseColor";
  if (blackVariant) {
    define = "#define BLACK 1";
    name = "Black" + name;
  }
  return ShaderObject(name + " F")
    ..AddVaryingVars([vNormal])
    ..AddUniformVars([uTime, uTransformationMatrix])
    ..SetBody([
      define,
      PerlinNoiseFunctions,
      """
#define VARIANT 1

void main() {
#if VARIANT == 1
  float mytime = ${uTime}/2.0;
#ifdef BLACK
  mytime = ${uTime}/10.0;
#endif
  float period = 10.0;
  float factor = 1.0; // sin( ${uTime})/4.0+2.0;
  vec3 translation = ${uTransformationMatrix}[3].xyz;
  float r = pnoise( .75 * ( ${vNormal} *factor + mytime ), vec3( period ) );
  float g = pnoise( 0.8 * ( ${vNormal} *factor + mytime ), vec3( period ) );
  float b = pnoise( 0.9 * ( ${vNormal} *factor + mytime ), vec3( period ) );
  float n = pnoise( 1.5 * ( ${vNormal} *factor + mytime ), vec3( period ) );
#else
  float mytime = 0.0 ; //${uTime}/50.0;
  float period = 5.0;
  float factor = 1.0; // sin( ${uTime})/4.0+2.0;
  vec3 translation = ${uTransformationMatrix}[3].xyz;
  float r = pnoise( .75 * ( translation*0.175 + ${vNormal} *factor + mytime ), vec3( period ) );
  float g = pnoise( 0.8 * ( translation*0.175 + ${vNormal} *factor + mytime ), vec3( period ) );
  float b = pnoise( 0.9 * ( translation*0.175 + ${vNormal} *factor + mytime ), vec3( period ) );
  float n = pnoise( 1.5 * ( translation*0.175 + ${vNormal} *factor + mytime ), vec3( period ) );
#endif

  n = pow( .001, n );
//float n = 10.0 * pnoise( 5.0 * ( ${vNormal} + ${uTime} ), vec3( 10.0 ) ) * pnoise( .5 * ( ${vNormal} + ${uTime} ), vec3( 10.0 ) );
//n += .5 * pnoise( 4.0 * ${vNormal}, vec3( 10.0 ) );
#ifdef BLACK
  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );
#else
  vec3 color = vec3( (r + n), (g + n), (b + n) );
#endif
  ${oFragColor} = vec4( color, 1.0 );
}
"""
    ]);
}
