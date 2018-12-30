part of chronosshader;

final ShaderObject ssaoVertexShader = ShaderObject("SSAOV")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddVaryingVars([vTexUV])
  ..SetBody([NullVertexShaderWithTextureForwardString]);

final ShaderObject ssaoFragmentShader = ShaderObject("SSAOF")
  ..AddVaryingVars([vTexUV])
//..AddUniformVar(uFogEnabled)
//..AddUniformVar(uFogNear)
//..AddUniformVar(uFogFar)
  ..AddUniformVars([uCanvasSize, uCameraNear, uCameraFar, uTexture, uDepthMap])
  ..SetBody([
    """

    //uniform bool fogEnabled;
    const bool fogEnabled=false;

    //uniform bool onlyAO;
    const bool onlyAO=false;


    //uniform float aoClamp;
    const float aoClamp = 0.45;

    //uniform float lumInfluence;
    const float lumInfluence = 0.4;

    //varying vec2 vUv;
    
    #define DL 2.399963229728653
    #define EULER 2.718281828459045
    


    const int samples = 8;
    const float radius = 5.0;
    const bool useNoise = false;
    const float noiseAmount = 0.0003;
    const float diffArea = 0.4;
    const float gDisplace = 0.4;
    const vec3 onlyAOColor = vec3( 1.0, 0.7, 0.5 );
    
    float unpackDepth( const in vec4 rgba_depth ) {
      return rgba_depth.r;
    }

    float unpackDepth2(vec4 rgba_depth) {
      const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );
      float depth = dot( rgba_depth, bit_shift );
      return depth;
    }
    
    vec2 rand( const vec2 coord ) {
      vec2 noise;
      if ( useNoise ) {
        float nx = dot ( coord, vec2( 12.9898, 78.233 ) );
        float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );
        noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );
      } else {
        float width = ${uCanvasSize}.x;
        float height = ${uCanvasSize}.y;
        float ff = fract( 1.0 - coord.s * ( width / 2.0 ) );
        float gg = fract( coord.t * ( height / 2.0 ) );
        noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;
      }
      return ( noise * 2.0  - 1.0 ) * noiseAmount;
    }
    
/*
    float doFog() {
      float zdepth = unpackDepth( texture(${uDepthMap}, ${vTexUV} ) );
      float depth = -cameraFar * cameraNear / ( zdepth * cameraFarMinusNear - cameraFar );
      return smoothstep( fogNear, fogFar, depth );
    }
*/  

    float readDepth(vec2 coord) {
      float cameraFarPlusNear = ${uCameraFar} + ${uCameraNear};
      float cameraFarMinusNear = ${uCameraFar} - ${uCameraNear};
      float cameraCoef = 2.0 * ${uCameraNear};
      return cameraCoef / ( cameraFarPlusNear - unpackDepth( texture(${uDepthMap}, coord ) ) * cameraFarMinusNear );
    }
    
    float compareDepths( const in float depth1, const in float depth2, inout int far ) {
      float garea = 2.0;
      float diff = ( depth1 - depth2 ) * 100.0;
      if ( diff < gDisplace ) {
        garea = diffArea;
      } else {
        far = 1;
      }
    
      float dd = diff - gDisplace;
      float gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );
      return gauss;
    }
    
    float calcAO( float depth, float dw, float dh ) {
      float dd = radius - depth * radius;
      vec2 vv = vec2( dw, dh );
      vec2 coord1 = ${vTexUV} + dd * vv;
      vec2 coord2 = ${vTexUV} - dd * vv;
      float temp1 = 0.0;
      float temp2 = 0.0;
      int far = 0;
      temp1 = compareDepths( depth, readDepth( coord1 ), far );
      if ( far > 0 ) {
        temp2 = compareDepths( readDepth( coord2 ), depth, far );
        temp1 += ( 1.0 - temp1 ) * temp2;
      }
      return temp1;
    }
    
    void main() {
      float width = ${uCanvasSize}.x;
      float height = ${uCanvasSize}.y;

      vec2 noise = rand( ${vTexUV} );
      float depth = readDepth( ${vTexUV} );
      float tt = clamp( depth, aoClamp, 1.0 );
      float w = ( 1.0 / width )  / tt + ( noise.x * ( 1.0 - noise.x ) );
      float h = ( 1.0 / height ) / tt + ( noise.y * ( 1.0 - noise.y ) );
      float pw;
      float ph;
      float ao;
      float dz = 1.0 / float( samples );
      float z = 1.0 - dz / 2.0;
      float l = 0.0;
      for ( int i = 0; i <= samples; i ++ ) {
        float r = sqrt( 1.0 - z );
        pw = cos( l ) * r;
        ph = sin( l ) * r;
        ao += calcAO( depth, pw * w, ph * h );
        z = z - dz;
        l = l + DL;
      }
    
      ao /= float( samples );
      ao = 1.0 - ao;

/*
      if ( fogEnabled ) {
        ao = mix( ao, 1.0, doFog() );
      }
*/

      // Diffuse
      vec3 color = texture(${uTexture}, ${vTexUV} ).rgb;
      vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );
      float lum = dot( color.rgb, lumcoeff );
      vec3 luminance = vec3( lum );
      vec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );
    
      if ( onlyAO ) {
        final = onlyAOColor * vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );
      }
      ${oFragColor} = vec4( final, 1.0 );
      //${oFragColor} = vec4( color, 1.0 );
    }
    
    """
  ]);

