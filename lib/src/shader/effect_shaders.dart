part of chronosshader;

ShaderObject _effectVertexShader = new ShaderObject("uv-passthru")
  ..AddAttributeVars([aPosition, aTextureCoordinates])
  ..AddVaryingVars([vTextureCoordinates])
  ..SetBodyWithMain(
      [NullVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]);

List<ShaderObject> createCopyShader() {
  return [
    _effectVertexShader,
    new ShaderObject("copyF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uTexture])
      ..SetBodyWithMain(
          ["${oFragColor} = texture(${uTexture}, ${vTextureCoordinates});"])
  ];
}

String _libFragment = """
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

float nearestLevel(float col, int mode) {
   if (mode==0) return ceil(col / 80.0) * 80.0;
	 else if (mode==1) return ceil(col * 6.0) / 6.0;
	 else return ceil(col * 3.0) / 3.0;
}

// averaged pixel intensity from 3 color channels
float avg3(vec3 pix) {
 return (pix.r + pix.g + pix.b)/3.0;
}

vec3 get_pixel(vec2 coords, float dx, float dy) {
 return texture(${uTexture}, coords + vec2(dx, dy)).rgb;
}

// returns pixel color
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
    vec4 colorOrg = texture(${uTexture}, ${vTextureCoordinates});
    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);
    vHSV.x = nearestLevel(vHSV.x, 0);
    vHSV.y = nearestLevel(vHSV.y, 1);
    vHSV.z = nearestLevel(vHSV.z, 2);
    float edg = IsEdge(${vTextureCoordinates}, texdim);
    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);
    //vec3 vRGB = HSVtoRGB(vHSV);
    ${oFragColor} = vec4(vRGB, 1.0);
}
""";

List<ShaderObject> createToonShader() {
  return [
    _effectVertexShader,
    new ShaderObject("ToonF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uTexture])
      ..SetBody([_libFragment, _toonFragment])
  ];
}

// Inspired by glfx.js
// The edges of a hexagon centered at 0,0 with diameter 1.0 are:
// where is the height of an equilateral triangle with edge length 1.0
// H = sqrt(0.75)  = 0.866025404;
String _hexPixelateFragment = """

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
    vec2 p = ToPixelSpace(${vTextureCoordinates}, texdim);
    vec2 c = GetHexCenter(p);
    vec2 q = ToNormalizedSpace(c, texdim);
    ${oFragColor} = texture(${uTexture}, q);
}
""";

List<ShaderObject> createHexPixelateShader() {
  return [
    _effectVertexShader,
    new ShaderObject("HexPixelateF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uCenter2, uPointSize, uTexture])
      ..SetBody([_hexPixelateFragment])
  ];
}

// Inspired by three.js
String _dotFragment = """
float pattern(vec2 tex) {
		float s = sin( ${uAngle} );
		float c = cos( ${uAngle} );
		vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * ${uScale};
		return ( sin( point.x ) * sin( point.y ) ) * 4.0;
}

void main() {
		vec2 texdim = vec2(textureSize(${uTexture}, 0));
		vec4 color = texture(${uTexture}, ${vTextureCoordinates} );
		float average = ( color.r + color.g + color.b ) / 3.0;
     vec2 tex = ${vTextureCoordinates}* texdim - ${uCenter2};
		${oFragColor} = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );
}
""";

List<ShaderObject> createDotShader() {
  return [
    _effectVertexShader,
    new ShaderObject("DotF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uCenter2, uScale, uAngle, uTexture])
      ..SetBody([_dotFragment])
  ];
}

// Inspired by https://www.shadertoy.com/view/4dBGzK
String _tvDistortionFragment = """
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
      vec3 d = rgbDistortion(${vTextureCoordinates}, ${uScale}, ${uTime});
      float x = ${vTextureCoordinates}.x;
      float y = ${vTextureCoordinates}.y;

			float r = texture(${uTexture}, vec2(x + d.r, y) ).r;
			float g = texture(${uTexture}, vec2(x + d.g, y) ).g;
			float b = texture(${uTexture}, vec2(x + d.b, y) ).b;
			${oFragColor} = vec4( r, g, b, 1.0 );
}
""";

List<ShaderObject> createTvDistortionShader() {
  return [
    _effectVertexShader,
    new ShaderObject("DotF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uScale, uTime, uTexture])
      ..SetBody([_tvDistortionFragment])
  ];
}

String _kaleidoscopeFragment = """
vec2 kaleidoscope( vec2 uv, float n) {
   float PI = 3.1415926;
    float angle = PI / n;
    float r = length(uv);
	  float a = atan( uv.y, uv.x ) / angle;
	  a = mix( fract( a ), 1.0 - fract( a ), mod( floor( a ), 2.0 ) ) * angle;
	return vec2( cos( a ), sin( a ) ) * r;
}

void main() {
    vec2 uv = kaleidoscope(${vTextureCoordinates} - ${uCenter2}, ${uScale});
    ${oFragColor} = texture(${uTexture}, uv + ${uCenter2});
}
""";

List<ShaderObject> createKaleidoscopeShader() {
  return [
    _effectVertexShader,
    new ShaderObject("KaleidoscopeF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uScale, uCenter2, uTexture])
      ..SetBody([_kaleidoscopeFragment])
  ];
}




// Inspired by https://www.shadertoy.com/view/MtcXRB
String _lumidotsFragment = """

// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }
// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }


void main() {
	  vec2 texdim = vec2(textureSize(${uTexture}, 0));
    float r = ${uPointSize};
    vec2 uv = ${vTextureCoordinates} * texdim;
    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;
    vec3 col = texture(${uTexture}, center / texdim).rgb;
    float lum = max(0.1, RGB2Luma(col));
    float alpha =  smoothstep(1.0, 0.5,
                              distance(center, uv) / lum / r);
    ${oFragColor}.rgb = col.rgb * alpha;
}
""";

List<ShaderObject> createLumidotsShader() {
  return [
    _effectVertexShader,
    new ShaderObject("LumidotsF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uPointSize, uTexture])
      ..SetBody([_lumidotsFragment])
  ];
}

String _squarePixelateFragment = """
void main() {
	  vec2 texdim = vec2(textureSize(${uTexture}, 0));
    float r = ${uPointSize};
    vec2 uv = ${vTextureCoordinates} * texdim;
    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;
    ${oFragColor} = texture(${uTexture}, center / texdim);
}
""";

List<ShaderObject> createSquarePixelateShader() {
  return [
    _effectVertexShader,
    new ShaderObject("SquarePixelateF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uPointSize, uTexture])
      ..SetBody([_squarePixelateFragment])
  ];
}

String _luminosityHighPassFragment = """

// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }
// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }

void main() {
    vec4 color = texture(${uTexture}, ${vTextureCoordinates});
    float luma = RGB2Luma(color.rgb);
    float alpha = smoothstep(${uRange}.x, ${uRange}.y, luma);
    ${oFragColor} = mix(${uColorAlpha}, color, alpha );
}
""";

List<ShaderObject> createLuminosityHighPassShader() {
  return [
    _effectVertexShader,
    new ShaderObject("LuminosityHighPassF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uRange, uColorAlpha ,uTexture])
      ..SetBody([_luminosityHighPassFragment])
  ];
}
