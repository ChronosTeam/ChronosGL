part of chronosshader;

/*
// Adapted from Babylon JS Shaders

int typeLightNone = 1;
int typeLightSpot = 2;
int typeLightPoint = 3;
int typeLightHemi = 4;
int typeLightDir = 5;

int typeShadowNone = 1;
int typeShadowReg = 2;
int typeShadowPcf0 = 3;
int typeShadowVsm0 = 4;


class LightConfig {
  int lightType;
  int shadowType;
  LightConfig(this.lightType, this.shadowType);
}

String ShadowProlog = """

struct ShadowInfo {
     float darkness; 
     float bias;
     float mapSize;
};

float unpack(vec4 color) {
    vec4 bit_shift = vec4(1.0 / (255.0 * 255.0 * 255.0), 1.0 / (255.0 * 255.0), 1.0 / 255.0, 1.0);
    return dot(color, bit_shift);
}

// For typeLightPoint
float computeShadowCube(vec3 position, vec3 lightPosition, samplerCube shadowSampler, vec2 depthValues, ShadowInfo info) {
		vec3 directionToLight = position - lightPosition;
		float depth = length(directionToLight);
		depth = (depth - depthValues.x) / (depthValues.y - depthValues.x);
		depth = clamp(depth, 0., 1.0);

		directionToLight = normalize(directionToLight);
		directionToLight.y = -directionToLight.y;

		float shadow = unpack(textureCube(shadowSampler, directionToLight)) + info.bias;

		if (depth > shadow) return info.darkness;
		return 1.0;
}

// For typeLightPoint
float computeShadowithPCFCube(vec3 position, vec3 lightPosition, samplerCube shadowSampler, vec2 depthValues, ShadowInfo info) {
		vec3 directionToLight = position - lightPosition;
		float depth = length(directionToLight);

		depth = (depth - depthValues.x) / (depthValues.y - depthValues.x);
		depth = clamp(depth, 0., 1.0);

		directionToLight = normalize(directionToLight);
		directionToLight.y = -directionToLight.y;

		float visibility = 1.;

		vec3 poissonDisk[4];
		poissonDisk[0] = vec3(-1.0, 1.0, -1.0);
		poissonDisk[1] = vec3(1.0, -1.0, -1.0);
		poissonDisk[2] = vec3(-1.0, -1.0, -1.0);
		poissonDisk[3] = vec3(1.0, -1.0, 1.0);

		// Poisson Sampling
		float biasedDepth = depth - info.bias;

		if (unpack(textureCube(shadowSampler, directionToLight + poissonDisk[0] * info.mapSize)) < biasedDepth) visibility -= 0.25;
		if (unpack(textureCube(shadowSampler, directionToLight + poissonDisk[1] * info.mapSize)) < biasedDepth) visibility -= 0.25;
		if (unpack(textureCube(shadowSampler, directionToLight + poissonDisk[2] * info.mapSize)) < biasedDepth) visibility -= 0.25;
		if (unpack(textureCube(shadowSampler, directionToLight + poissonDisk[3] * info.mapSize)) < biasedDepth) visibility -= 0.25;
		return  min(1.0, visibility + info.darkness);
}


// For typeLightSpot
float computeShadow(vec4 vPositionFromLight, sampler2D shadowSampler, ShadowInfo info) {
		vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;

		if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0) return 1.0;

		float shadow = unpack(texture2D(shadowSampler, uv)) + info.bias;

		if (depth.z > shadow) return info.darkness;
		return 1.;
}

// For typeLightSpot
float computeShadowithPCF(vec4 vPositionFromLight, sampler2D shadowSampler, ShadowInfo info) {
		vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;
  	depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;

		if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0) return 1.0;

		float visibility = 1.;

		vec2 poissonDisk[4];
		poissonDisk[0] = vec2(-0.94201624, -0.39906216);
		poissonDisk[1] = vec2(0.94558609, -0.76890725);
		poissonDisk[2] = vec2(-0.094184101, -0.92938870);
		poissonDisk[3] = vec2(0.34495938, 0.29387760);

		// Poisson Sampling
		float biasedDepth = depth.z - info.bias;

		if (unpack(texture2D(shadowSampler, uv + poissonDisk[0] * info.mapSize)) < biasedDepth) visibility -= 0.25;
		if (unpack(texture2D(shadowSampler, uv + poissonDisk[1] * info.mapSize)) < biasedDepth) visibility -= 0.25;
		if (unpack(texture2D(shadowSampler, uv + poissonDisk[2] * info.mapSize)) < biasedDepth) visibility -= 0.25;
		if (unpack(texture2D(shadowSampler, uv + poissonDisk[3] * info.mapSize)) < biasedDepth) visibility -= 0.25;
		return  min(1.0, visibility + info.darkness);
}

float unpackHalf(vec2 color) {
   return color.x + (color.y / 255.0);
}

float linstep(float low, float high, float v) {
    return clamp((v - low) / (high - low), 0.0, 1.0);
}

float ChebychevInequality(vec2 moments, float compare, float bias) {
    float p = smoothstep(compare - bias, compare, moments.x);
    float variance = max(moments.y - moments.x * moments.x, 0.02);
    float d = compare - moments.x;
    float p_max = linstep(0.2, 1.0, variance / (variance + d * d));

    return clamp(max(p, p_max), 0.0, 1.0);
}

float computeShadowithVSM(vec4 vPositionFromLight, sampler2D shadowSampler, float bias, float darkness) {
    vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;
    depth = 0.5 * depth + vec3(0.5);
    vec2 uv = depth.xy;

    if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0 || depth.z >= 1.0) return 1.0;

    vec4 texel = texture2D(shadowSampler, uv);

    vec2 moments = vec2(unpackHalf(texel.xy), unpackHalf(texel.zw));
    return min(1.0, 1.0 - ChebychevInequality(moments, depth.z, bias) + darkness);
}
""";

String FresnelProlog = """
float computeFresnelTerm(vec3 viewDirection, vec3 worldNormal, float bias, float power) {
    float fresnelTerm = pow(bias + abs(dot(viewDirection, worldNormal)), power);
    return clamp(fresnelTerm, 0., 1.);
}
""";

String FogProlog = """

#define FOGMODE_NONE    0.0
#define FOGMODE_EXP     1.0
#define FOGMODE_EXP2    2.0
#define FOGMODE_LINEAR  3.0
#define E 2.71828

float CalcFogFactor(float fogType, float fogStart, float fogEnd, float fogDistance, float fogDensity) {
	float f = 1.0;
	if (FOGMODE_LINEAR == fogType) {
		f = (fogEnd - fogDistance) / (fogEnd - fogStart);
	} else if (FOGMODE_EXP == fogType) {
		f = 1.0 / pow(E, fogDistance * fogDensity);
	} else if (FOGMODE_EXP2 == fogType) {
		f = 1.0 / pow(E, fogDistance * fogDistance * fogDensity * fogDensity);
	}

	return clamp(f, 0.0, 1.0);
}
""";

String LightProlog = """
struct LightIntensity {
    float diffuse;
    float specular;
    float attenuation;
};

struct LightSourceInfo {
    vec3 pos;      // for spot and point
    vec3 dir;      // for spot and dir light
    vec3 diffuseColor;
    vec3 groundColor;   // for hemispehere light
    // specular
    vec3 specularColor;
    float glossiness;   // Oddball: this comes from the material
    float range;        // for spot and point
    float spotCutoff;   // for spot
    float spotFocus;    // for spot
};

// This needs to stay in sync woth Light::PackInfo
LightSourceInfo UnpackLightSourceInfo(mat4 m) {
  LightSourceInfo info;
  info.pos = m[0].xyz;
  info.dir = m[1].xyz;
  info.diffuseColor = m[2].xyz;
  info.specularColor = m[3].xyz;
  info.range = m[0].a;
  info.spotCutoff = m[1].a; 
  info.spotFocus = m[3].a;    
  return info;
}

float computeSpecular(LightSourceInfo info, GlobalConsts gc, vec3 lightDir) {
#ifdef SPECULARTERM
    vec3 half = normalize(gc.viewDirection + lightDir);
    float specComp = max(0., dot(gc.Normal, half));
    return pow(specComp, max(1., gc.glossiness));
#else
    return 0.0;
#endif
}

LightIntensity computeDirectionalLighting(LightSourceInfo info, GlobalConsts gc) {
	vec3 lightDir = normalize(-info.dir);
	float ndl = max(0., dot(gc.normal, lightDir));
  return LightIntensity(ndl,
	                      computeSpecular(info, gc, lightDir),
                        1.0);
}

LightIntensity computePointLighting(LightSourceInfo info, GlobalConsts gc) {
  vec3 lampDir = info.pos - gc.pos;
  // the further away the light the weaker - complete cutoff at range
  float attenuation = max(0., 1.0 - length(lampDir) / info.range);
  vec3 lightDir = normalize(lampDir);
  float ndl = max(0., dot(gc.normal, lightDir));
  return LightIntensity(ndl,
                       computeSpecular(info, gc, lightDir),
                       attenuation);

}

LightIntensity computeSpotLighting(LightSourceInfo info, GlobalConsts gc) {
    vec3 lampDir = info.pos - gc.pos;
    // if the angle to light source and the direction of the light source
    // is too large - ignore the light. 
    float cosAngle = max(0., dot(-info.dir, lampDir));
	  if (cosAngle < info.spotCutoff) {
        return LightIntensity(0.0, 0.0, 0.0);
    }
 
    // intensity is smaller if the the angle is large and the source is distant.
    cosAngle = max(0., pow(cosAngle, info.spotFocus));
	  float attenuation = max(0., 1.0 - length(lampDir) / info.range) * cosAngle;

	  float ndl = max(0., dot(gc.normal, -info.dir));
    return LightIntensity(ndl,
                         computeSpecular(info, gc, info.dir),
                         attenuation);
}

LightIntensity computeHemisphericLighting(LightSourceInfo info, GlobalConsts gc) {
	  // make this a value between 0 and 1
    float ndl = dot(gc.normal, info.dir) * 0.5 + 0.5;
    return LightIntensity(ndl,
                         computeSpecular(info, gc, info.pos),
                         1.0);

}
""";

String GlobalProlog = """

struct ColorVars {
  vec3 ambient;
  vec3 base;
  vec3 diffuse;
  vec3 specularBase;
  vec3 diffuseBase;
  vec3 ambientBase;
  vec3 reflection;
  vec3 emissive;
  vec3 specular;
  vec3 fog;
  float alpha;
  float fogFactor;
};

struct Material {
  vec3 colorDiffuse;
  vec3 colorSpecular;
  vec3 colorAmbient;
  vec3 colorEmissive;
  float alphaDiffuse;
  float glossiness;     // used for all lights
};

Material UnpackMaterial(mat4 m) {
   Material mat;
   mat.colorDiffuse = m[0].rgb;
   mat.colorSpecular = m[1].rgb;
   mat.colorEmissive = m[2].rgb;
   mat.colorAmbient = m[3].rgb;
   
   mat.alphaDiffuse = m[0].a;
   mat.glossiness = m[1].a;
   return mat;
}

struct GlobalConsts {
   vec3 viewDirection;  // used for all lights
   vec3 normal;         // used for all lights
   vec3 pos;            // used for all but hemi lights
   float glossiness;     // used for all lights
};

ColorVars InitColorVars(Material mat) {
    ColorVars c;
    // optionally from vColor and/or diffuseSampler and/or  vDiffuseInfos.
    c.base = vec3(1., 1., 1.);        
    //
    c.diffuse = mat.colorDiffuse;
    // optionally from ambientSampler
    c.ambient = vec3(1., 1., 1.); 
    c.reflection = vec3(0., 0., 0.);
    c.specular = mat.colorSpecular;  
    c.emissive = mat.colorEmissive;
    // from lighting
    c.specularBase = vec3(0., 0., 0.);
    // from lighting
    c.diffuseBase = vec3(0., 0., 0.);
    c.ambientBase = vec3(1., 1., 1.); 
    c.alpha = mat.alphaDiffuse;
    return c;
}

vec4 ComputeColor(ColorVars c) {
    vec3 d = clamp(c.diffuseBase * c.diffuse + 
                   c.emissive + 
                   c.ambient, 
                   0.0, 1.0);

    vec3 color = vec3(d * c.base * c.ambientBase + 
                      c.specularBase * c.specular + 
                      c.reflection);
    return  vec4(mix(color, c.fog,  c.fogFactor), c.alpha);
}

GlobalConsts InitGlobalVars(Material mat, vec3 pos, vec3 normal, vec3 eyePos) {
    GlobalConsts c;
    c.viewDirection = normalize(eyePos - pos);
    c.normal = normalize(normal);
    c.pos = pos;
    c.glossiness = mat.glossiness;
    return c;
}
""";

Map<int, String> mapLightComputeFun = {
  typeLightSpot: "computeSpotLighting",
  typeLightPoint: "computePointLighting",
  typeLightDir: "computeDirectionalLighting",
  typeLightHemi: "computeHemisphericLighting",
};

String MakeStandardFragment(bool useSpecularTerm, List<LightConfig> configs) {
  String indent = " ";
  List<String> out = [
    GlobalProlog,
    //ShadowProlog,
    //FogProlog,
    LightProlog,
    "void main() {",
    indent + "Material mat = UnpackMaterial(uMaterial);",
    indent + "ColorVars cv = InitColorVars(mat);;",
    indent +
        "GlobalConsts gc = InitGlobalVars(mat, vVertexPosition, vNormal, uEyePosition);",
  ];

  for (int i = 0; i < configs.length; i++) {
    LightConfig config = configs[i];
    List<String> block = [
      "{",
      "  LightSourceInfo info = UnpackLightSourceInfo(uLightSourceInfo$i);",
      "  LightIntensity intensity = ${mapLightComputeFun[config.lightType]}(info, gc);",
      "  cv.specularBase += info.specularColor * intensity.attenuation;",
      config.lightType == typeLightHemi
          ? "  cv.diffuseBase += mix(info.groundColor, info.diffuseColor, intensity.diffuse);"
          : "  cv.diffuseBase += info.diffuseColor * intensity.attenuation;",
      "}"
    ];
    for (String l in block) {
      out.add(indent + l);
    }
  }
  out.add(indent + "gl_FragColor = ComputeColor(cv);");
  out.add("}");
  return out.join("\n");
}

List<ShaderObject> createStandardShader(
    bool useSpecularTerm, List<LightConfig> configs) {
  ShaderObject v = new ShaderObject("StandardV")
    ..AddAttributeVar(aVertexPosition)
    ..AddUniformVar(uPerspectiveViewMatrix)
    ..AddUniformVar(uModelMatrix)
    ..AddAttributeVar(aTextureCoordinates)
    ..AddVaryingVar(vTextureCoordinates)
    ..SetBodyWithMain(
        [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]);

  ShaderObject f = new ShaderObject("StandardF")
    ..AddVaryingVar(vVertexPosition)
    ..AddVaryingVar(vNormal)
    ..AddUniformVar(uMaterial)
    ..AddUniformVar(uEyePosition);
   
  f
    ..AddUniformVar(uLightSourceInfo0)
    ..AddUniformVar(uLightSourceInfo1)
    ..AddUniformVar(uLightSourceInfo2)
    ..AddUniformVar(uLightSourceInfo3)
    ..SetBody([MakeStandardFragment(useSpecularTerm, configs)]);
  return [v, f];
}
*/