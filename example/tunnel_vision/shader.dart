import 'package:chronosgl/chronosgl.dart';

const String uFadeFactor = "uFadeFactor";

final ShaderObject _perlinNoiseVertexShader = ShaderObject(
    "perlinNoiseVertexShader")
  ..AddAttributeVars([aPosition])
  ..AddVaryingVars([vColor])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uTime, uFadeFactor])
  ..SetBody([
    PerlinNoiseFunctions,
    """
vec3 lerp( vec3 vec, float factor) {
      vec.x += factor * (1. - vec.x);
      vec.y += factor * (1. - vec.y);
      vec.z += factor * (1. - vec.z);
      return vec;
}

void main() {
    float mytime = ${uTime} / 4.0;

    //float sint = (sin( mytime*10.)+1.0)/2.0;

    float r = pnoise( .75 * ( ${aPosition}*0.25 + mytime ), vec3( 2.0 ) );
    float g = pnoise( 0.8 * ( ${aPosition}*0.25 + mytime ), vec3( 2.0 ) );
    float b = pnoise( 0.9 * ( ${aPosition}*0.25 + mytime ), vec3( 2.0 ) );
    float n = pnoise( 1.5 * ( ${aPosition}*0.25 + mytime ), vec3( 2.0 ) );
    n = pow( 1., n );
    //float n = 10.0 * pnoise( 5.0 * ( vNormal + time ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + time ), vec3( 10.0 ) );
    //n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );
    //vColor = vec4( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n), 1.0 );
    //n=0.0;
    ${vColor} = vec3( (r + n), (g + n), (b + n));
    ${vColor} = lerp( ${vColor}, ${uFadeFactor});
    // float f = 0.5 * pnoise( normal + time, vec3( 10.0 ) );
    gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * 
                  vec4( ${aPosition}, 1.0 );
}
"""
  ]);

final ShaderObject _perlinNoiseFragmentShader =
    ShaderObject("perlinNoiseFragmentShader")
      ..AddVaryingVars([vColor])
      ..SetBody([
        """
void main(void) {
  oFragColor.rgb = vColor;
  oFragColor.a = 1.0;
}  
"""
      ]);

RenderProgram MakeVertexColorShader(ChronosGL cgl) {
  return RenderProgram(
      "basic", cgl, _perlinNoiseVertexShader, _perlinNoiseFragmentShader);
}

final ShaderObject deformingPerlinNoiseVertexShader = ShaderObject("PerlinNoiseV")
  ..AddAttributeVars([aPosition])
  ..AddVaryingVars([vNormal])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uTime])
  ..SetBody([
    PerlinNoiseFunctions,
    """
void main() {
    vec3 normal = normalize(${aPosition});
    float f = 0.5 * pnoise(normal + ${uTime} / 3.0, vec3(10.0));
    ${vNormal} = normal;
    gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * 
                  vec4(${aPosition} + f * normal, 1.0);
}
"""
  ]);
