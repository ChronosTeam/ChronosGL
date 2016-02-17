part of chronosshader;

// Adapted from Babylon JS Shaders


int typeLightNone = 1;
int typeLightSpot = 2;
int typeLightPoint = 3;
int typeLightHemo = 4;
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
float computeShadowCube(vec3 positionW, vec3 lightPosition, samplerCube shadowSampler, vec2 depthValues, ShadowInfo info) {
			vec3 directionToLight = positionW - lightPosition;
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
float computeShadowWithPCFCube(vec3 positionW, vec3 lightPosition, samplerCube shadowSampler, vec2 depthValues, ShadowInfo info) {
			vec3 directionToLight = positionW - lightPosition;
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
			float biasedDepth = depth - bias;

			if (unpack(textureCube(shadowSampler, directionToLight + poissonDisk[0] * mapSize)) < biasedDepth) visibility -= 0.25;
			if (unpack(textureCube(shadowSampler, directionToLight + poissonDisk[1] * mapSize)) < biasedDepth) visibility -= 0.25;
			if (unpack(textureCube(shadowSampler, directionToLight + poissonDisk[2] * mapSize)) < biasedDepth) visibility -= 0.25;
			if (unpack(textureCube(shadowSampler, directionToLight + poissonDisk[3] * mapSize)) < biasedDepth) visibility -= 0.25;

			return  min(1.0, visibility + darkness);
		}





// For typeLightSpot
float computeShadow(vec4 vPositionFromLight, sampler2D shadowSampler, float darkness, float bias) {
			vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;
			depth = 0.5 * depth + vec3(0.5);
			vec2 uv = depth.xy;

			if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0) return 1.0;

			float shadow = unpack(texture2D(shadowSampler, uv)) + bias;

			if (depth.z > shadow) return darkness;
			return 1.;
		}

// For typeLightSpot
float computeShadowWithPCF(vec4 vPositionFromLight, sampler2D shadowSampler, float mapSize, float bias, float darkness) {
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
			float biasedDepth = depth.z - bias;

			if (unpack(texture2D(shadowSampler, uv + poissonDisk[0] * mapSize)) < biasedDepth) visibility -= 0.25;
			if (unpack(texture2D(shadowSampler, uv + poissonDisk[1] * mapSize)) < biasedDepth) visibility -= 0.25;
			if (unpack(texture2D(shadowSampler, uv + poissonDisk[2] * mapSize)) < biasedDepth) visibility -= 0.25;
			if (unpack(texture2D(shadowSampler, uv + poissonDisk[3] * mapSize)) < biasedDepth) visibility -= 0.25;

			return  min(1.0, visibility + darkness);
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

float computeShadowWithVSM(vec4 vPositionFromLight, sampler2D shadowSampler, float bias, float darkness) {
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
		f = (fogEnd - fFogDistance) / (fogEnd - fogStart);
	}
	else if (FOGMODE_EXP == fogType)
	{
		f = 1.0 / pow(E, fogDistance * fogDensity);
	}
	else if (FOGMODE_EXP2 == fogType)
	{
		f = 1.0 / pow(E, fogDistance * fogDistance * fogDensity * fogDensity);
	}

	return clamp(f, 0.0, 1.0);
}
""";

String LightProlog = """
struct LightingResult {
    vec3 diffuse;
    // specular
    vec3 specular;
};

struct LightingInfo {
    vec4 lightPos;
    vec3 diffuseColor;
    // specular
    vec3 viewDirection;
    vec3 specularColor;
    float glossiness;
}


vec3 computeSpecular(LightingInfo input, vec3 normal, vec3 lightVectorW, float attenuation) {
#ifdef SPECULARTERM
    vec3 angleW = normalize(input.viewDirection + lightVectorW);
    float specComp = max(0., dot(normal, angleW));
    specComp = pow(specComp, max(1., input.glossiness));
    return specComp * input.specularColor * attenuation;
#else
    return vec3(0.0);
#endif
}

LightingResult computeLighting(LightingInfo input, vec3 normal, float range) {
	vec3 lightVectorW;
	float attenuation = 1.0;
	if (input.lightPos.w == 0.0) {
		vec3 direction = input.lightPos.xyz - vPositionW;
		attenuation = max(0., 1.0 - length(direction) / range);
		lightVectorW = normalize(direction);
	} else {
		lightVectorW = normalize(-input.lightPos.xyz);
	}

	float ndl = max(0., dot(normal, lightVectorW));
        return LightingResult(ndl * input.diffuseColor * attenuation,
	                      computeSpecular(input, lightVectorW, attenuation);
}

LightingResult computeSpotLighting(LightingInfo input, vec3 normal, vec4 lightDirection, float range) {
	vec3 direction = lightPos.xyz - vPositionW;
	vec3 lightVectorW = normalize(direction);

	// diffuse
	float cosAngle = max(0., dot(-lightDirection.xyz, lightVectorW));

	if (cosAngle < lightDirection.w) {
            return LightingResult(vec3(0.0), vec3(0.0));
        }

        cosAngle = max(0., pow(cosAngle, lightPos.w));
	float attenuation = max(0., 1.0 - length(direction) / range) * cosAngle;

	float ndl = max(0., dot(normal, -lightDirection.xyz));
        return LightingResult(ndl * input.diffuseColor * attenuation.
                              computeSpecular(input, normal, lightDirection.xyz, attenuation);

}

LightingResult computeHemisphericLighting(LightingInfo input, vec3 normal, vec3 groundColor) {
	  float ndl = dot(normal, input.lightPos.xyz) * 0.5 + 0.5;
    return LightingResult(mix(groundColor, input.diffuseColor, ndl),
                          computeSpecular(input, normal, input.lightPos.xyz, 1,0);

}
""";


/*
List<String> MakeLightFragment(bool useSpecularTerm,
                               List<LightConfig> configs,
                               List<String> uniforms) {
    List<String> out = ["LightInfo lightInfo;", "LightingResult lightingResult;"];
    for (int i = 0; i < configs.length; i++) {




= LightInfo(vLightInfo${i}[0], vLightInfo${i}[1].rgb, vLightInfo${i}[2].xyz, vLightInfo${i}[3].rgb, glossiness)");
        switch(configs[i].typeLight) {
          case typeLightSpot:
            out.append("
            case typeLightPoint:
            case typeLightHemo:
            case typeLightDir:
        }
    }

}
 */
