part of chronosshader;

const String StdVertexBody =
    "gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);";

const String StdVertexTextureForward =
    "${vTextureCoordinates} = ${aTextureCoordinates};";

const String NullVertexBody = "gl_Position = vec4(${aVertexPosition}, 1.0);";

// No globals, no dependencies on Shader variables
const String StdLibShader = """
// ============================================================
// MISC
// ============================================================

vec3 ColorFromPosition(vec3 pos) {
    return vec3( sin(pos.x) / 2.0 + 0.5,
                 cos(pos.y) / 2.0 + 0.5,
                 sin(pos.z) / 2.0 + 0.5);
}

// wandalen
// http://stackoverflow.com/questions/9446888/best-way-to-detect-nans-in-opengl-shaders
// important: some nVidias failed to cope with version below.
// Probably wrong optimization.
// return ( val <= 0.0 || 0.0 <= val ) ? false : true;
bool isnan( float val ) {
    return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
}


vec3 RangeToGray(float f, float a, float b) {
    if (f > a) return vec3(1.0);
    if (f < b) return vec3(0.0);
    return vec3 ((f - b) / (a-b));
}

float useValueButReturnZero(float x) {
    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;
}

// ============================================================
// LIGHT
// ============================================================
struct LightIntensity {
    float diffuse;
    float specular;
    float attenuation;
};

struct LightSourceInfo {
    vec3 pos;      // for spot and point
    vec3 dir;      // for spot and dir light
    vec3 diffuseColor;
    vec3 specularColor;
    float type;
    float range;        // for spot and point
    float spotCutoff;   // for spot
    float spotFocus;    // for spot
    float glossiness;   // Oddball: this comes from the material
};

// This needs to stay in sync woth Light::PackInfo in lighting.dart
const float LIGHT_TYPE_SPOT = 2.0;
const float LIGHT_TYPE_DIRECTIONAL = 5.0;
const float LIGHT_TYPE_POINT = 3.0;


LightSourceInfo UnpackLightSourceInfo(mat4 m, float glossiness) {
    LightSourceInfo info;
    info.pos = m[0].xyz;
    info.dir = normalize(m[1].xyz);
    info.diffuseColor = m[2].xyz;
    info.specularColor = m[3].xyz;
    info.type = m[0].a;
    info.range = m[1].a;
    info.spotCutoff = m[2].a;
    info.spotFocus = m[3].a;
    info.glossiness = glossiness;
    return info;
}

float GetDiffuse(vec3 lightDir, vec3 normal) {
    return max(dot(normal, lightDir), 0.0);
}

float GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {
    vec3 angleW = normalize(viewDir + lightDir);
    float specComp = max(0., dot(normal, angleW));
    return pow(specComp, max(1.0, glossiness));
}

void GetDiffuseAndSpecularFactors(LightSourceInfo info,
                                  vec3 vertexPos,
                                  vec3 vertexNormal,
                                  vec3 eyePos,
                                  out float diffuseFactor,
                                  out float specularFactor) {
    if (info.type == LIGHT_TYPE_DIRECTIONAL) {
        diffuseFactor = GetDiffuse(info.dir, vertexNormal);
        specularFactor = GetSpecular(info.dir, normalize(eyePos - vertexPos),
                                     vertexNormal, info.glossiness);
    } else if (info.type == LIGHT_TYPE_POINT) {
        vec3 lightDir = info.pos - vertexPos;
        float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);
        vec3 lightDirNorm = normalize(lightDir);
        vec3 viewDirNorm = normalize(eyePos - vertexPos);
        diffuseFactor = attenuation * GetDiffuse(lightDirNorm, vertexNormal);
        specularFactor = attenuation * GetSpecular(lightDirNorm, viewDirNorm,
                                                   vertexNormal, info.glossiness);
    } else if (info.type == LIGHT_TYPE_SPOT) {
        vec3 spotDir = normalize(info.pos - vertexPos);
        vec3 lightDirNorm = normalize(info.dir);
        float cosAngle = max(0., dot(lightDirNorm, spotDir));
	      if (cosAngle < info.spotCutoff) {
            diffuseFactor = 0.0;
            specularFactor = 0.0;
        } else {
            cosAngle = max(0.0, pow(cosAngle, info.spotFocus));
	          float attenuation = max(0.0, 1.0 - length(spotDir) / info.range) * cosAngle;
	          vec3 viewDirNorm = normalize(eyePos - vertexPos);
            diffuseFactor = attenuation * GetDiffuse(lightDirNorm, vertexNormal);
            specularFactor = attenuation * GetSpecular(lightDirNorm, viewDirNorm,
                                                       vertexNormal, info.glossiness);
        }
    } else {
        diffuseFactor = 0.0;
        specularFactor = 0.0;
    }
}
// ============================================================
// SHADOW
// ============================================================
// r,g,b,a  are in the range of [0, 254]
// float = r / 255^1 + g / 255^2 + b / 255^3 + a / 255^4
// float is assumed to be in [0, 1]
// Not that the conversion from bytes to floats introduces a 1/255 factor
// Inspired by http://spidergl.org/example.php?id=6

// 256.0 does not work quite as well.
const float _b = 255.0;
const vec4 _shift = vec4(1.0, _b, _b * _b, _b * _b * _b);
const vec4 _shiftInv = vec4(1.0, 1.0 / _b, 1.0 / (_b * _b), 1.0 / (_b * _b * _b));

vec4 packDepth(float depth) {
	  vec4 res = fract(depth * _shift);
    // the next three correction terms can probably be omitted if we
    // know for sure that we are dealing with 8 bits per color component
    res.r -= res.g / _b;
    res.g -= res.b / _b;
    res.b -= res.a / _b;
	  return res;
}

float unpackDepth(vec4 rgba_depth) {
	  return dot(rgba_depth, _shiftInv);
}

float computeShadow(vec4 positionFromLight, sampler2D shadowMap,
                    float darkness, float bias) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;

		if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
			// no shadow
			return 1.0;
		}

		float shadow = unpackDepth(texture2D(shadowMap, uv));


		if (depth.z > shadow + bias) {
			return darkness;
		}
		return 1.0;
}

""";


// ============================================================
// STUFF WITH DERIVATIVE
// ============================================================

// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen
// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html
//
// Evaluate the derivative of the height w.r.t. screen-space using forward
// differencing (listing 2)
const String StdLibShaderDerivative = """

#extension GL_OES_standard_derivatives : enable

vec2 dHdxy_fwd(vec2 uv, float scale, sampler2D map) {
    vec2 dSTdx = dFdx( uv );
    vec2 dSTdy = dFdy( uv );

    float Hll = scale * texture2D(map, uv ).x;
    float dBx = scale * texture2D(map, uv + dSTdx ).x - Hll;
    float dBy = scale * texture2D(map, uv + dSTdy ).x - Hll;

    return vec2( dBx, dBy );
}

vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
    surf_norm = normalize  (surf_norm);
    vec3 vSigmaX = dFdx( surf_pos );
    vec3 vSigmaY = dFdy( surf_pos );
    vec3 vN = surf_norm;            // normalized

    vec3 R1 = cross( vSigmaY, vN );
    vec3 R2 = cross( vN, vSigmaX );

    float fDet = dot( vSigmaX, R1 );

    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
    return normalize( abs( fDet ) * surf_norm - vGrad );
}
""";