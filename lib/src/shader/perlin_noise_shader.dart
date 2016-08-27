part of chronosshader;

// NOT USED: uFadeFactor hookup not yet implemented
/* 
const String _PerlinNoiseVertexShaderPart2 = """
vec4 lerp( vec4 vec, float factor) {
        vec.x += factor * (1. - vec.x);
        vec.y += factor * (1. - vec.y);
        vec.z += factor * (1. - vec.z);
        return vec;
}
      
void main() {      
      float mytime = ${uTime} / 4.0;
      
      //float sint = (sin( mytime*10.)+1.0)/2.0;
      
      float r = pnoise( .75 * ( aVertexPosition*0.25 + mytime ), vec3( 2.0 ) );
      float g = pnoise( 0.8 * ( aVertexPosition*0.25 + mytime ), vec3( 2.0 ) );
      float b = pnoise( 0.9 * ( aVertexPosition*0.25 + mytime ), vec3( 2.0 ) );
      float n = pnoise( 1.5 * ( aVertexPosition*0.25 + mytime ), vec3( 2.0 ) );
      n = pow( 1., n );
      //float n = 10.0 * pnoise( 5.0 * ( vNormal + time ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + time ), vec3( 10.0 ) );
      //n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );
      //vColor = vec4( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n), 1.0 );
      //n=0.0;
      ${vColors} = vec4( (r + n), (g + n), (b + n), 1.0 );
      ${vColors} = lerp( vColors, ${uFadeFactor});
      
      // float f = 0.5 * pnoise( normal + time, vec3( 10.0 ) );
    gl_Position = ${uPerspectiveMatrix} * ${uModelViewMatrix} * vec4(${aVertexPosition}, 1.0);
}
      """;

List<ShaderObject> createPerlinNoiseVertexColorShader() {
  return [
    new ShaderObject("PerlinNoiseVertexColorV")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vColors)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddUniformVar(uTime)
      ..AddUniformVar(uFadeFactor)
      ..SetBody([perlinNoisefunctions, _PerlinNoiseVertexShaderPart2]),
    new ShaderObject("PerlinNoiseVertexColorF")
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain(["gl_FragColor = ${vColors};"])
  ];
}
 */


// this shader is build for use with an icosahedron
List<ShaderObject> createPerlinNoiseColorShader(bool blackVariant) {
  String define = "";
  String name = "PerlinNoiseColor";
  if (blackVariant) {
    define = "#define BLACK 1";
    name = "Black" + name;
  }
  return [
    new ShaderObject(name + "V")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vNormal)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddUniformVar(uTime)
      ..SetBody([
        perlinNoisefunctions,
        """
void main() {
        vec3 normal = normalize( ${aVertexPosition});
        float f = 0.5 * pnoise( normal + ${uTime}/3.0, vec3( 10.0 ) );
        //vNormal = ${aVertexPosition} + f * normal;
        //vNormal = f*normal;
        ${vNormal} = normal;
        gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
}
      """
      ]),
    new ShaderObject(name + " F")
      ..AddVaryingVar(vNormal)
      ..AddUniformVar(uTime)
      ..AddUniformVar(uTransformationMatrix)
      ..SetBody([
        define,
        perlinNoisefunctions,
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
  float r = pnoise( .75 * ( vNormal*factor + mytime ), vec3( period ) );
  float g = pnoise( 0.8 * ( vNormal*factor + mytime ), vec3( period ) );
  float b = pnoise( 0.9 * ( vNormal*factor + mytime ), vec3( period ) );
  float n = pnoise( 1.5 * ( vNormal*factor + mytime ), vec3( period ) );
#else
  float mytime = 0.0 ; //${uTime}/50.0;
  float period = 5.0;
  float factor = 1.0; // sin( ${uTime})/4.0+2.0;
  vec3 translation = ${uTransformationMatrix}[3].xyz;
  float r = pnoise( .75 * ( translation*0.175 + vNormal*factor + mytime ), vec3( period ) );
  float g = pnoise( 0.8 * ( translation*0.175 + vNormal*factor + mytime ), vec3( period ) );
  float b = pnoise( 0.9 * ( translation*0.175 + vNormal*factor + mytime ), vec3( period ) );
  float n = pnoise( 1.5 * ( translation*0.175 + vNormal*factor + mytime ), vec3( period ) );
#endif

  n = pow( .001, n );
//float n = 10.0 * pnoise( 5.0 * ( vNormal + ${uTime} ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + ${uTime} ), vec3( 10.0 ) );
//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );
#ifdef BLACK
  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );
#else
  vec3 color = vec3( (r + n), (g + n), (b + n) );
#endif
  gl_FragColor = vec4( color, 1.0 );
}
"""
      ])
  ];
}
