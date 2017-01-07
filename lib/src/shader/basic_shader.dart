part of chronosshader;

final String _shadowHelpers = """
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

float computeShadow(vec4 positionFromLight, sampler2D shadowSampler,
                    float darkness, float bias) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;

		if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
			// no shadow
			return 1.0;
		}

		float shadow = unpackDepth(texture2D(shadowSampler, uv));


		if (depth.z > shadow + bias) {
			return darkness;
		}
		return 1.0;
}

float useValueButReturnZero(float x) {
  return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;
}
""";

final String _lightHelpers = """
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

// This needs to stay in sync woth Light::PackInfo
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
    if (info.type == 5.0) {
        // ================= directional light
        diffuseFactor = GetDiffuse(info.dir, vertexNormal);
        specularFactor = GetSpecular(info.dir, normalize(eyePos - vertexPos),
                                     vertexNormal, info.glossiness);
    } else if (info.type == 3.0) {
        // ================= point light
        vec3 lightDir = info.pos - vertexPos;
        float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);
        vec3 lightDirNorm = normalize(lightDir);
        vec3 viewDirNorm = normalize(eyePos - vertexPos);
        diffuseFactor = attenuation * GetDiffuse(lightDirNorm, vertexNormal);
        specularFactor = attenuation * GetSpecular(lightDirNorm, viewDirNorm,
                                                   vertexNormal, info.glossiness);
    } else if (info.type == 2.0) {
        // ================= spot light
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
""";

//  Gouraud shading - most action happens in vertext shader - cheaper
List<ShaderObject> createLightShaderGourad() {
  return [
    new ShaderObject("LightGouradV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vColor])
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddUniformVar(uNormalMatrix)
      ..AddUniformVar(uLightSourceInfo0)
      ..AddUniformVar(uEyePosition)
      ..AddUniformVar(uColor)
      ..SetBody([
        _lightHelpers,
        """
        void main() {
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        vec3 normal = ${uNormalMatrix} * ${aNormal};

        LightSourceInfo info =  UnpackLightSourceInfo(${uLightSourceInfo0}, 10.0);
        float diffuseFactor = 0.0;
        float specularFactor = 0.0;
        GetDiffuseAndSpecularFactors(info, pos.xyz, normal,
                                     ${uEyePosition},
                                     diffuseFactor, specularFactor);

         ${vColor} = diffuseFactor * info.diffuseColor +
                      specularFactor * info.specularColor +
                      uColor;
        }
        """
      ]),
    new ShaderObject("LightGrouradV")
      ..AddVaryingVar(vColor)
      ..SetBodyWithMain(["gl_FragColor = vec4(${vColor}, 1.0 );"])
  ];
}

// Phong shader - most action happens in fragment shader - expensive
// Light Matrix m organization:
// m[0].xyz light direction
//
List<ShaderObject> createLightShaderBlinnPhong() {
  return [
    new ShaderObject("LightBlinnPhongV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vVertexPosition, vNormal])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightBlinnPhongF")
      ..AddVaryingVars([vVertexPosition, vNormal])
      ..AddUniformVars([uLightSourceInfo0, uEyePosition, uColor])
      ..SetBody([
        _lightHelpers,
        """
      void main() {
        LightSourceInfo info =  UnpackLightSourceInfo(${uLightSourceInfo0}, 10.0);
        float diffuseFactor = 0.0;
        float specularFactor = 0.0;
        GetDiffuseAndSpecularFactors(info,
                                     ${vVertexPosition},
                                     ${vNormal},
                                     ${uEyePosition},
                                     diffuseFactor, specularFactor);

         gl_FragColor = vec4(diffuseFactor * info.diffuseColor +
                             specularFactor * info.specularColor +
                             uColor, 1.0 );
      }
      """
      ])
  ];
}

List<ShaderObject> createLightShaderBlinnPhongWithShadow() {
  return [
    new ShaderObject("LightBlinnPhongV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vVertexPosition, vNormal, vPositionFromLight0])
      ..AddUniformVars([
        uPerspectiveViewMatrix,
        uLightPerspectiveViewMatrix0,
        uModelMatrix,
        uNormalMatrix
      ])
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        ${vPositionFromLight0} = ${uLightPerspectiveViewMatrix0} * pos;
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightBlinnPhongF")
      ..AddVaryingVars([vVertexPosition, vNormal, vPositionFromLight0])
      ..AddUniformVars([uLightSourceInfo0, uShadowMap, uEyePosition])
      ..SetBody([
        _lightHelpers,
        _shadowHelpers,
        """

void foo(vec4 positionFromLight, sampler2D shadowSampler,
                    float darkness, float bias) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;

  float r = gl_FragColor.r;
	gl_FragColor =	texture2D(shadowSampler, uv);
   gl_FragColor.r += useValueButReturnZero(r);
}

      void main() {
        LightSourceInfo info = UnpackLightSourceInfo(${uLightSourceInfo0}, 10.0);
        float diffuseFactor = 0.0;
        float specularFactor = 0.0;
        GetDiffuseAndSpecularFactors(info,
                                     ${vVertexPosition},
                                     ${vNormal},
                                     ${uEyePosition},
                                     diffuseFactor, specularFactor);

        float shadow = computeShadow(${vPositionFromLight0},
                                     ${uShadowMap}, 0.4, -0.1);
        //shadow = 1.0;
        gl_FragColor.rgb = diffuseFactor * shadow * info.diffuseColor +
                             specularFactor * shadow * info.specularColor;
        //foo(${vPositionFromLight0}, ${uShadowMap}, 0.4, -0.1);
      }
      """
      ])
  ];
}

List<ShaderObject> createShadowShader() {
  return [
    new ShaderObject("ShadowV")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vPositionFromLight0)
      ..AddUniformVar(uLightPerspectiveViewMatrix0)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        // Note we could just use gl_FragCoord.z in the Fragment shader
        // but this seems more logical
        """
        gl_Position = ${uLightPerspectiveViewMatrix0} * ${uModelMatrix} *
                      vec4(${aVertexPosition}, 1.0);
        ${vPositionFromLight0} = gl_Position;
        """
      ]),
    new ShaderObject("ShadowF")
      ..AddVaryingVar(vPositionFromLight0)
      ..SetBody([
        _shadowHelpers,
        """
        void main(void) {
          // Note, this is equivalent to passing
          //   ${vPositionFromLight0} = gl_Position;
          // in the vertex shader and then computing
          //float d = ${vPositionFromLight0}.z / ${vPositionFromLight0}.w * 0.5 + 0.5;
          float d  = gl_FragCoord.z;
          // d is value between 0.0 and 1.0
          gl_FragColor = packDepth(d);
          }
          """
      ])
  ];
}

List<ShaderObject> createCopyShader() {
  return [
    new ShaderObject("copyV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(
          [NullVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("copyF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTexture)
      ..SetBodyWithMain([
        "vec2 v = ${vTextureCoordinates}.xy;",
        "gl_FragColor.rgb = texture2D (${uTexture}, v).rgb;"
      ])
  ];
}

List<ShaderObject> createCopyShaderForShadow() {
  return [
    new ShaderObject("copyV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(
          [NullVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("copyF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTexture)
      ..SetBody([
        _shadowHelpers,
        """
      void main(void) {
          vec2 uv = ${vTextureCoordinates}.xy;
          vec4 color = texture2D(${uTexture}, uv);
          // Commenting the next line should not make any difference
          //color = packDepth(unpackDepth(color));
          gl_FragColor = color;
          // necessary?
          //gl_FragColor.r = unpackDepth(color) * 0.4;
          //gl_FragColor.g = 0.0;
          //gl_FragColor.b = 0.0;
          //gl_FragColor.a = 1.0;
      }
      """
      ])
  ];
}
