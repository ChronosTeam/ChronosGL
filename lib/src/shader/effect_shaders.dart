part of chronosshader;

final ShaderObject effectVertexShader = ShaderObject("uv-passthru")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddVaryingVars([vTexUV])
  ..SetBodyWithMain([NullVertexBody, "${vTexUV} = ${aTexUV};"]);

final ShaderObject copyVertexShader = effectVertexShader;

final ShaderObject copyFragmentShader = ShaderObject("copyF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture])
  ..SetBodyWithMain(["${oFragColor} = texture(${uTexture}, ${vTexUV});"]);

const String _libFragment = """
vec3 RGBtoHSV(vec3 rgb) {
   float r = rgb.r;
   float g = rgb.g;
   float b = rgb.b;


   float minv = min(min(r, g), b);
   float maxv = max(max(r, g), b);
   float delta = maxv - minv;

   vec3 res;
   res.z = maxv;            // v
   if( maxv == 0.0 ) {
      // r = g = b = 0      // s = 0, v is undefined
      res.y = 0.0;
      res.x = -1.0;
      return res;
   }

   res.y = delta / maxv;      // s
   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta
   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow
   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan

   res.x = res.x * 60.0;            // degrees
   if( res.x < 0.0 ) res.x = res.x + 360.0;

   return res;
}

vec3 HSVtoRGB(vec3 hsv) {
   float h = hsv.x / 60.0;  // sector 0 to 5
   float s = hsv.y;
   float v = hsv.z;

   if( s == 0.0 ) {
      // achromatic (grey)
      return vec3(v, v, v);
   }

   int i = int(floor( h ));
   float f = h - float(i);         // fractional part of h
   float p = v * ( 1.0 - s );
   float q = v * ( 1.0 - s * f );
   float t = v * ( 1.0 - s * ( 1.0 - f ) );

   if (i == 0) return vec3(v, t, p);
   else if (i == 1) return vec3(q, v , p);
   else if (i == 2) return vec3(p, v, t);
   else if (i == 3) return vec3(p, q, v);
   else if (i == 4) return vec3(t, p, v);
   return vec3(v, p, q);
}
""";

// Inspired by
// http://coding-experiments.blogspot.sg/2011/01/toon-pixel-shader.html
String _toonFragment = """

vec3 config = vec3(1.0 / 80.0, 6.0, 3.0);
// vec3 config = vec3(0.2, 2.0, 2.0);


// averaged pixel intensity from 3 color channels
float avg3(vec3 pix) {
 return (pix.r + pix.g + pix.b)/3.0;
}

vec3 get_pixel(vec2 coords, float dx, float dy) {
 return texture(${uTexture}, coords + vec2(dx, dy)).rgb;
}

// returns pixel color using a strange kernel

float IsEdge(vec2 coords, vec2 dim) {
  vec2 d = vec2(1.0, 1.0) / dim;

  // read neighboring pixel intensities
  float pix0 = avg3(get_pixel(coords, -d.x, -d.y));
  float pix1 = avg3(get_pixel(coords, -d.x, 0.0));
  float pix2 = avg3(get_pixel(coords, -d.x, d.y));
  float pix3 = avg3(get_pixel(coords, 0.0, -d.y));

  float pix5 = avg3(get_pixel(coords, 0.0, d.y));
  float pix6 = avg3(get_pixel(coords, d.x, -d.y));
  float pix7 = avg3(get_pixel(coords, d.x, 0.0));
  float pix8 = avg3(get_pixel(coords, d.x, d.y));


  // average color differences around neighboring pixels
  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +
                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;
  return clamp(5.5*delta, 0.0, 1.0);
}

void main() {
    vec2 texdim = vec2(textureSize(${uTexture}, 0));
    vec4 colorOrg = texture(${uTexture}, ${vTexUV});
    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);
    // find nearest level
    vHSV =  ceil(vHSV * config) / config;
    float edg = IsEdge(${vTexUV}, texdim);
    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);
    //vec3 vRGB = (edg >= 0.3) ? vec3(1.0, 1.0, 1.0) : vec3(0.0, 0.0, 0.0);
    //vec3 vRGB = HSVtoRGB(vHSV);
    ${oFragColor} = vec4(vRGB, 1.0);
}
""";

final ShaderObject toonFragmentShader = ShaderObject("ToonF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture])
  ..SetBody([_libFragment, _toonFragment]);

// Inspired by glfx.js
// The edges of a hexagon centered at 0,0 with diameter 1.0 are:
// where is the height of an equilateral triangle with edge length 1.0
// H = sqrt(0.75)  = 0.866025404;
const String _hexPixelateFragment = """

float S = 0.86602540378;

vec2 GetHexCenter(vec2 p) {
 vec2 a;
    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));
    else a = vec2(ceil(p.x), ceil(p.y));
    vec2 b = vec2(ceil(p.x), floor(p.y));
    vec2 c = vec2(floor(p.x), ceil(p.y));

    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);
    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);
    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);
    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);

    float alen = length(P - A);
    float blen = length(P - B);
    float clen = length(P - C);

    if (alen < blen) {
        return (alen < clen) ? a : c;
    } else {
        return (blen < clen) ? b : c;
    }
}

vec2 ToPixelSpace(vec2 v, vec2 texdim) {
    vec2 p = (v * texdim - ${uCenter2}) / ${uPointSize};
    float t = p.y / S;
    return vec2(p.x - 0.5 * t, t);
}

vec2 ToNormalizedSpace(vec2 v, vec2 texdim) {
   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);
   return p * ${uPointSize} / texdim + ${uCenter2} / texdim;
}

void main() {
    vec2 texdim = vec2(textureSize(${uTexture}, 0));
    vec2 p = ToPixelSpace(${vTexUV}, texdim);
    vec2 c = GetHexCenter(p);
    vec2 q = ToNormalizedSpace(c, texdim);
    ${oFragColor} = texture(${uTexture}, q);
}
""";

final ShaderObject hexPixelateFragmentShader = ShaderObject("HexPixelateF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uCenter2, uPointSize, uTexture])
  ..SetBody([_hexPixelateFragment]);

// Inspired by three.js
const String _dotFragment = """
float pattern(vec2 tex) {
		float s = sin( ${uAngle} );
		float c = cos( ${uAngle} );
		vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * ${uScale};
		return ( sin( point.x ) * sin( point.y ) ) * 4.0;
}

void main() {
		vec2 texdim = vec2(textureSize(${uTexture}, 0));
		vec4 color = texture(${uTexture}, ${vTexUV} );
		float average = ( color.r + color.g + color.b ) / 3.0;
     vec2 tex = ${vTexUV}* texdim - ${uCenter2};
		${oFragColor} = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );
}
""";

final ShaderObject dotFragmentShader = ShaderObject("DotF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uCenter2, uScale, uAngle, uTexture])
  ..SetBody([_dotFragment]);

// Inspired by https://www.shadertoy.com/view/4dBGzK
const String _tvDistortionFragment = """
float rand(vec2 co)  {
    float a = 12.9898;
    float b = 78.233;
    float c = 43758.5453;
    float dt = dot(co.xy, vec2(a,b));
    float sn = mod(dt,3.14);
    return fract(sin(sn) * c);
}

vec3 rgbDistortion(vec2 uv, float magnitude, float time) {
    // x offset for the three color channels
    // we do not change the y
	  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +
	             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;
	  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +
               sin(time * 9.0) * magnitude;
	  float dB = 0.0;
    return vec3(dR, dG, dB);
}

void main() {
      vec3 d = rgbDistortion(${vTexUV}, ${uScale}, ${uTime});
      float x = ${vTexUV}.x;
      float y = ${vTexUV}.y;

			float r = texture(${uTexture}, vec2(x + d.r, y) ).r;
			float g = texture(${uTexture}, vec2(x + d.g, y) ).g;
			float b = texture(${uTexture}, vec2(x + d.b, y) ).b;
			${oFragColor} = vec4( r, g, b, 1.0 );
}
""";

final ShaderObject tvDistortionFragmentShader = ShaderObject("DotF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uScale, uTime, uTexture])
  ..SetBody([_tvDistortionFragment]);

const String _kaleidoscopeFragment = """
vec2 kaleidoscope( vec2 uv, float n) {
   float PI = 3.1415926;
    float angle = PI / n;
    float r = length(uv);
	  float a = atan( uv.y, uv.x ) / angle;
	  a = mix( fract( a ), 1.0 - fract( a ), mod( floor( a ), 2.0 ) ) * angle;
	return vec2( cos( a ), sin( a ) ) * r;
}

void main() {
    vec2 uv = kaleidoscope(${vTexUV} - ${uCenter2}, ${uScale});
    ${oFragColor} = texture(${uTexture}, uv + ${uCenter2});
}
""";

final ShaderObject kaleidoscopeShader = ShaderObject("KaleidoscopeF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uScale, uCenter2, uTexture])
  ..SetBody([_kaleidoscopeFragment]);

// Inspired by https://www.shadertoy.com/view/MtcXRB
const String _lumidotsFragment = """

// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }
// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }


void main() {
	  vec2 texdim = vec2(textureSize(${uTexture}, 0));
    float r = ${uPointSize};
    vec2 uv = ${vTexUV} * texdim;
    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;
    vec3 col = texture(${uTexture}, center / texdim).rgb;
    float lum = max(0.1, RGB2Luma(col));
    float alpha =  smoothstep(1.0, 0.5,
                              distance(center, uv) / lum / r);
    ${oFragColor}.rgb = col.rgb * alpha;
}
""";

final ShaderObject lumidotsFragmentShader = ShaderObject("LumidotsF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uPointSize, uTexture])
  ..SetBody([_lumidotsFragment]);

const String _squarePixelateFragment = """
void main() {
	  vec2 texdim = vec2(textureSize(${uTexture}, 0));
    float r = ${uPointSize};
    vec2 uv = ${vTexUV} * texdim;
    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;
    ${oFragColor} = texture(${uTexture}, center / texdim);
}
""";

final ShaderObject squarePixelateFragmentShader =
    ShaderObject("SquarePixelateF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uPointSize, uTexture])
      ..SetBody([_squarePixelateFragment]);

const String _luminosityHighPassFragment = """

// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }
// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }

void main() {
    vec4 color = texture(${uTexture}, ${vTexUV});
    float luma = RGB2Luma(color.rgb);
    float alpha = smoothstep(${uRange}.x, ${uRange}.y, luma);
    ${oFragColor} = mix(${uColorAlpha}, color, alpha );
}
""";

final ShaderObject luminosityHighPassFragmentShader =
    ShaderObject("LuminosityHighPassF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uRange, uColorAlpha, uTexture])
      ..SetBody([_luminosityHighPassFragment]);

final ShaderObject fisheyeFragmentShader = ShaderObject("FisheyePassF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture])
  ..SetBody([
    """

float fisheye_radius = 1.0;
      
void main() {
    float y = (${vTexUV}.y-0.5) * 2.0; // [0,1] => [-1, 1]

    float angle = asin(y/fisheye_radius); // [-pi/2, pi/2]
    float arc_length = angle * fisheye_radius;

    float max_arc_length = asin(1.0 / fisheye_radius) * fisheye_radius;
    float normalized_arc_length = (arc_length + max_arc_length) / 
                                  (max_arc_length * 2.0);
    // set arc_length as y
    vec2 uv = vec2(${vTexUV}.x, normalized_arc_length); 
    ${oFragColor} = texture(${uTexture}, uv); 
}
"""
  ]);

final ShaderObject filmFragmentShader = ShaderObject("FilmPassF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture])
  ..SetBody([
    """

vec2 translation = vec2(0.1, 0.0);
float frame = 1.0;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

float vignette(vec2 uv) {
    return min(1., 6000. * (uv.x * uv.y * (1. - uv.x) * (1. - uv.y) - pow(.2, 4.)));
}

float verticalNoise(vec2 uv) {
    return rand(vec2(uv.x * 0.3242 + 1.4839, 1.));
}

float randomLines(vec2 uv, float a, float b, float c, float d) {
    float discrete = floor(frame / 4.);
    return step(0.0002 + 0.0005 * sin(discrete / a),
            abs(uv.x - b + 0.05 * sin(discrete / c) * cos(discrete / d)));
}

vec3 scene(vec2 uv) {
    vec3 color = texture(${uTexture}, uv).rgb;
    color += 0.1;
    color *= vignette(uv);
    color *= 0.9 + 0.1 * rand(uv);
    color *= 0.95 + 0.05 * verticalNoise(${vTexUV} + floor(frame / 4.));
    color = 0.5 * color + color * 0.5 * randomLines(uv, 28., 0.7, 33., 58.);
    color = color * 0.8 + color * 0.2 * randomLines(uv, 47., 0.78, 61., 27.);
    color = color * 0.7 + color * 0.3 * randomLines(uv, 31., 0.28, 79., 43.);
    color = pow(max(vec3(0.),color), vec3(1.5));
    color *= 0.8 + 0.4 * rand(vec2(floor(frame / 4.), 0.2));
    return color;
}

void main() {
    vec2 uv = ${vTexUV};
    uv += translation;
    uv = vec2(${vTexUV}.x, mod(uv.y, 1.));
    ${oFragColor} = vec4(scene(uv), 1.);
}
"""
  ]);

final VM.Matrix3 ConvolutionMatrixEmboss =
    VM.Matrix3(-1.0, 0.0, -1.0, 0.0, 4.0, 0.0, -1.0, 0.0, -1.0);
final VM.Vector3 ConvolutionOffsetEmboss = VM.Vector3(0.5, 0.5, 0.5);

final VM.Matrix3 ConvolutionMatrixEmboss2 =
    VM.Matrix3(2.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, -1.0);
final VM.Vector3 ConvolutionOffsetEmboss2 = VM.Vector3(0.5, 0.5, 0.5);

final VM.Matrix3 ConvolutionMatrixEngrave =
    VM.Matrix3(-2.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0);
final VM.Vector3 ConvolutionOffsetEngrave = VM.Vector3(0.37, 0.37, 0.37);

final VM.Matrix3 ConvolutionMatrixSharpen =
    VM.Matrix3(0.0, -2.0, 0.0, -2.0, 11.0, -2.0, 0.0, -2.0, 0.0)..scale(0.333);
final VM.Vector3 ConvolutionOffsetSharpen = VM.Vector3(0.0, 0.0, 0.0);

final VM.Matrix3 ConvolutionMatrixEdges =
    VM.Matrix3(-1.0, -1.0, -1.0, -1.0, 8.0, -1.0, -1.0, -1.0, -1.0);
final VM.Vector3 ConvolutionOffsetEdges = VM.Vector3(0.0, 0.0, 0.0);

final VM.Matrix3 ConvolutionMatrixBlur =
    VM.Matrix3(1.0, 2.0, 1.0, 2.0, 4.0, 2.0, 1.0, 2.0, 1.0)..scale(1.0 / 16.0);
final VM.Vector3 ConvolutionOffsetBlur = VM.Vector3(0.0, 0.0, 0.0);

final ShaderObject convolution3x3FragmentShader =
    ShaderObject("Convolution3x3F")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uTexture, uColor, uConvolutionMatrix])
      ..SetBody([
        """
void main() {
    mat3 m = ${uConvolutionMatrix};
    vec2 d = 1.0 / vec2(textureSize(${uTexture}, 0));
    vec3 sum = vec3(0.0, 0.0, 0.0);
    for (int x = -1; x <= 1; x++) {
      for (int y = -1; y <= 1; y++) {
        sum += m[x+1][y+1] * texture(${uTexture}, ${vTexUV} + d * vec2(x, y)).rgb;     
      }
    }
    ${oFragColor}.rgb = ${uColor} + sum;
}

"""
      ]);

final ShaderObject scanlineFragmentShader = ShaderObject("ScanlinePixelateF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture, uRange])
  ..SetBody([
    """
      
// const vec3 comp = vec3(0.05, 0.15, 0.95);
const vec3 comp = vec3(0.1, 0.30, 0.85);

void main() {
    // number scan lines: texture height * 
    vec2 sine_coord = ${uRange} * 2.0 * 3.1415;
                        
    sine_coord.x = 0.0;
    vec3 color =  texture(${uTexture}, ${vTexUV}).xyz;
    float m = comp.z + 
              dot(comp.xy * sin(${vTexUV} * sine_coord), vec2(1.0, 1.0));
    ${oFragColor} = vec4(color * m, 1.0);
}
"""
  ]);

final ShaderObject waterFragmentShader = ShaderObject("WaterPixelateF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture, uTime])
  ..SetBody([
    """
float wave(vec2 pos, float srcX, float srcY, float t) {
   float dist = 300.0 * length(pos - vec2(srcX, srcY));
   return sin(dist - 0.15 * t);
}

void main() {
    vec3 color =  texture(${uTexture}, ${vTexUV}).xyz;
    float t =  ${uTime} * 50.0;
    float res = 0.0;
    res += wave(${vTexUV}, 0.6, 0.7, t);
    res += wave(${vTexUV}, 0.9, 0.9, t);
    res += wave(${vTexUV}, -0.6, 0.3, t);
    res += wave(${vTexUV}, 0.1, 0.4, t);
    // res += wave(${vTexUV}, 0.1, 0.4, t);
    res += wave(${vTexUV}, 0.5, 0.5, t);
    res += wave(${vTexUV}, -1.0, 1.4, t);
    ${oFragColor} = vec4(color * (0.9 + 0.012 * res), 1.0);
}
"""
  ]);

ShaderObject CrosshatchFragmentShader(int mode) {
  return ShaderObject("crosshatchPixelateF")
    ..AddVaryingVars([vTexUV])
    ..AddUniformVars([uTexture])
    ..SetBody([
      "#define MODE ${mode}",
      """
float level1 = 1.0;
float level2 = 0.7;
float level3 = 0.5;
float level4 = 0.3;

float dist = 10.0;
float thickness = 0.5;

#if MODE == 0
// diagonal crosshach
vec2 slope = vec2(1.0, 1.0);
#elif MODE == 1
// regular crosshatch
vec2 slope = vec2(1.0, 0.0);
#else
ERROR
#endif

float PixelColor(vec2 pixel, float lum) {
    if (lum < level1) {
        // main anti diagonal
        if (mod(pixel.x * slope.x + pixel.y * slope.y, dist) <= thickness) return 0.0; 
    }  
  
    if (lum < level2) { 
        // main diagonal
        if (mod(pixel.x * slope.y - pixel.y * slope.x, dist) <= thickness) return 0.0;
    }  
  
    if (lum < level3) {
        // inbetween anti diagonals
        if (mod(pixel.x * slope.x + pixel.y * slope.y - dist * 0.5, dist) <= thickness) return 0.0;
    }  
  
    if (lum < level4) {
        // inbetween main diagonals
        if (mod(pixel.x * slope.y - pixel.y * slope.x - dist * 0.5, dist) <= thickness) return 0.0;
    } 
    
    return 1.0;
}       
       
void main()  { 
    vec2 pixel = gl_FragCoord.xy;  // this is really pixel + 0.5
   
    float lum = dot(vec3(0.2126, 0.7152, 0.0723), 
                    texture(${uTexture}, ${vTexUV}).rgb);
    
    float color = PixelColor(pixel, lum);
    ${oFragColor} = vec4(vec3(color), 1.0);  
}      

"""
    ]);
}

// Technicolor effect from
// http://001.vade.info/
//
// Sepia
// http://www.nutty.ca/?page_id=352&link=old_film
const String photoEffectHelper = """

vec3 SepiaColor(float gray, float sepiaFactor) {
    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);
    vec3 one3 = vec3(1.0);
    vec3 color = gray <= 0.5 ?
                 sepiaColor * 2.0 * gray :
                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);

    return vec3(gray) + sepiaFactor * (color - vec3(gray));
}

// additive blend of red and blue channels
vec3 Technicolor1(vec3 inColor, float amount) {	
     vec2 bgFilter = vec2(1.0, 0.7);
     float bg = dot(inColor.bg, bgFilter) * 0.5;
     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);
}

// multiplicative blend of red and blue channels
vec3 Technicolor2(vec3 inColor, float amount) {	
    // TODO: simply this mess
    vec3 redfilter       = vec3(1.0, 0.0, 0.0);
    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);
    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);
    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);

	  vec3 redrecord       = inColor * redfilter;
	  vec3 bluegreenrecord = inColor * bluegreenfilter;
	
	  vec3 rednegative = vec3(redrecord.r);
	  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);
	
	  vec3 redoutput = rednegative + cyanfilter;
	  vec3 bluegreenoutput = bluegreennegative + magentafilter;
	
	  vec3 result = redoutput * bluegreenoutput;
	
	  return mix(inColor, result, amount);
}

//  matting between all channels.
vec3 Technicolor3(vec3 inColor, float amount) {		
  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;
 	return mix(inColor, inColor * matte.gbr * matte.brg, amount);
}

// cyan, magenta, yellow and red/orange filters
vec3 Technicolor4(vec3 inColor, float amount) {		
    // TODO: simply this mess
    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);
    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);
    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);
    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);
    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);
    
    vec3 greenrecord = inColor * greenfilter;
	  vec3 bluerecord  = inColor * magentafilter;
    vec3 redrecord   = inColor * redorangefilter;
    
    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);
	  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);
	  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);
	
	  vec3 redoutput   = rednegative + cyanfilter;
	  vec3 greenoutput = greennegative + magentafilter;
	  vec3 blueoutput  =  bluenegative + yellowfilter;
	
	  vec3 result = redoutput * greenoutput * blueoutput;
    return mix(inColor, result, amount);
}

float VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {		
	float d = distance(vec2(0.5, 0.5), uv) * 1.414213;
	return clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);
}

""";

final ShaderObject sepiaFragmentShader = ShaderObject("sepiaPixelateF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture, uScale])
  ..SetBody([
    photoEffectHelper,
    """
void main() { 
    vec3 color = texture(${uTexture}, ${vTexUV}).rgb;
    float gray = dot(color, vec3(0.3333));
    // float gray = dot(color, vec3(0.2126, 0.7152, 0.0723));
    ${oFragColor} = vec4(SepiaColor(gray, ${uScale}), 1.0);
}
"""
  ]);

final ShaderObject techicolorFragmentShader =
    ShaderObject("technicolorPixelateF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uTexture, uScale])
      ..SetBody([
        photoEffectHelper,
        """
void main() { 
    vec3 color = texture(${uTexture}, ${vTexUV}).rgb;
    ${oFragColor} = vec4(Technicolor3(color, 0.5), 1.0);
}
"""
      ]);

final ShaderObject vignettingFragmentShader =
    ShaderObject("vignettingPixelateF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uTexture, uRange])
      ..SetBody([
        photoEffectHelper,
        """
void main() { 
    vec3 color = texture(${uTexture}, ${vTexUV}).rgb;
    float v = VignettingFactor(${vTexUV}, ${uRange}.x, ${uRange}.y);
    ${oFragColor} = vec4(color * v, 1.0);
}
"""
      ]);

/*
// DOES NOT WORK YET
final ShaderObject waterColorFragmentShader =
    new ShaderObject("WaterColorPixelateF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uTexture])
      ..SetBody([
        """
      
vec3 compress(vec3 color, float threshold, float ratio) {
   vec3 diff = clamp(color - vec3(threshold), 0.0, 100.0);
   return clamp(color - diff * (1.0 - 1.0/ratio), 0.0, 1.0);
}

void main() {
    vec2 d = 0.5 / vec2(textureSize(${uTexture}, 0));
    float dx = d.x;
    float dy = d.y;
    vec2 pixel = ${vTexUV} * vec2(textureSize(${uTexture}, 0)) + vec2(0.5);
  
    vec3 first = mix(texture(${uTexture}, ${vTexUV} + vec2(-dx, -dy)).rgb,
                     texture(${uTexture}, ${vTexUV} + vec2(dx, -dy)).rgb,
                     fract(pixel.x));
   
    vec3 second = mix(texture(${uTexture}, ${vTexUV} + vec2(-dx, dy)).rgb,
                      texture(${uTexture}, ${vTexUV} + vec2(dx, dy)).rgb,
                      fract(pixel.x));

    vec3 mid_horiz = mix(texture(${uTexture}, ${vTexUV} + vec2(-dx, 0.0)).rgb,
                         texture(${uTexture}, ${vTexUV} + vec2(dx, 0.0)).rgb,
                         fract(pixel.x));
  
    vec3 mid_vert = mix(texture(${uTexture}, ${vTexUV} + vec2(0.0, -dy)).rgb,
                        texture(${uTexture}, ${vTexUV} + vec2(0.0, dy)).rgb,
                        fract(pixel.y));

    vec3 res = mix(first, second, fract(pixel.y));
    vec3 final = 0.26 * (res + mid_horiz + mid_vert) + 
                 3.5 * abs(res - mix(mid_horiz, mid_vert, 0.5));
    ${oFragColor} = vec4(compress(final, 0.8, 5.0), 1.0);
    
}

"""
      ]);
*/
