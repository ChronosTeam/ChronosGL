part of chronosgl;

ShaderObject createPerlinNoiseVertexColorShader() {
  ShaderObject shaderObject = new ShaderObject("PerlinNoiseVertexColor");

  shaderObject.vertexShader = perlinNoisefunctions + """
      attribute vec3 aVertexPosition;
      
      uniform mat4 uMVMatrix;
      uniform mat4 uPMatrix;
      uniform float time;
      uniform float fadeFactor;
      
      varying vec4 vColor;

      vec4 lerp( vec4 vec, float factor) {
      vec.x += factor * (1. - vec.x);
      vec.y += factor * (1. - vec.y);
      vec.z += factor * (1. - vec.z);
      return vec;
      }
      
      void main() {
      
      float mytime = time / 4.0;
      
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
      vColor = vec4( (r + n), (g + n), (b + n), 1.0 );
      vColor = lerp( vColor, fadeFactor);
      
      // float f = 0.5 * pnoise( normal + time, vec3( 10.0 ) );
      gl_Position = uPMatrix * uMVMatrix * vec4( aVertexPosition, 1.0 );
      }
      """;

  shaderObject.fragmentShader = """
      precision mediump float;
      
      varying vec4 vColor;
      
      void main(void) {
        gl_FragColor = vColor;
      }
      """;

  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.timeUniform = "time";

  return shaderObject;
}

const String fs_precision = "precision mediump float;\n";

// this shader is build for use with an icosahedron
ShaderObject createPerlinNoiseColorShader([bool blackVariant]) {
  ShaderObject shaderObject = new ShaderObject(
      (blackVariant == true ? "Black" : "") + "PerlinNoiseColor");

  shaderObject.vertexShader = fs_precision + perlinNoisefunctions + """
      attribute vec3 aVertexPosition;
      
      uniform mat4 uMVMatrix;
      uniform mat4 uPMatrix;
      
      uniform float time;
      varying vec3 vNormal;
      
      void main() {
        vec3 normal = normalize( aVertexPosition);
        float f = 0.5 * pnoise( normal + time/3.0, vec3( 10.0 ) );
        //vNormal = aVertexPosition + f * normal;
        //vNormal = f*normal;
        vNormal = normal;
        gl_Position = uPMatrix * uMVMatrix * vec4( aVertexPosition + f * normal, 1.0 );
      }
      """;

  shaderObject.fragmentShader = fs_precision +
      perlinNoisefunctions +
      (blackVariant == true ? "#define BLACK 1\n" : "") +
      """

varying vec3 vNormal;
uniform mat4 uTMatrix;

#define VARIANT 1

uniform float time;
void main() {
#if VARIANT == 1
float mytime = time/2.0;
#ifdef BLACK
mytime = time/10.0;
#endif
float period = 10.0;
float factor = 1.0; // sin( time)/4.0+2.0;
vec3 translation = uTMatrix[3].xyz;
float r = pnoise( .75 * ( vNormal*factor + mytime ), vec3( period ) );
float g = pnoise( 0.8 * ( vNormal*factor + mytime ), vec3( period ) );
float b = pnoise( 0.9 * ( vNormal*factor + mytime ), vec3( period ) );
float n = pnoise( 1.5 * ( vNormal*factor + mytime ), vec3( period ) );
#else
float mytime = 0.0 ; //time/50.0;
float period = 5.0;
float factor = 1.0; // sin( time)/4.0+2.0;
vec3 translation = uTMatrix[3].xyz;
float r = pnoise( .75 * ( translation*0.175 + vNormal*factor + mytime ), vec3( period ) );
float g = pnoise( 0.8 * ( translation*0.175 + vNormal*factor + mytime ), vec3( period ) );
float b = pnoise( 0.9 * ( translation*0.175 + vNormal*factor + mytime ), vec3( period ) );
float n = pnoise( 1.5 * ( translation*0.175 + vNormal*factor + mytime ), vec3( period ) );
#endif

n = pow( .001, n );
//float n = 10.0 * pnoise( 5.0 * ( vNormal + time ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + time ), vec3( 10.0 ) );
//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );
#ifdef BLACK
vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );
#else
vec3 color = vec3( (r + n), (g + n), (b + n) );
#endif
gl_FragColor = vec4( color, 1.0 );
}
""";

  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.transformationMatrixUniform = "uTMatrix";
  shaderObject.timeUniform = "time";

  return shaderObject;
}
