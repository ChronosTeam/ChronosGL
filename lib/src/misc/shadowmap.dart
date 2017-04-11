part of misc;

List<ShaderObject> _createShadowShader() {
  return [
    new ShaderObject("ShadowMapV")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uLightPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        """
    gl_Position = ${uLightPerspectiveViewMatrix} * ${uModelMatrix} *
                  vec4(${aVertexPosition}, 1.0);
    """
      ]),
    // What we care about here is the internal update of the depth buffer
    new ShaderObject("ShadowMapF")..SetBodyWithMain(["gl_FragColor.r = 1.0;"])
  ];
}

// Suitable biases are: bias1: 0.0001 bias2: 0.04
// It is also ok to set both biases to the same value, e.g. 0.0001
const String ShadowMapShaderLib = """
float GetShadow(vec4 positionFromLight,
                sampler2D shadowMap,
                float bias1,
                float bias2) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		// depth is in [-1, 1] but we want [0, 1] for the texture lookup
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;

    float d = texture2D(shadowMap, uv).x;
    return 1.0 - smoothstep(bias1, bias2, depth.z - d);
}

float GetShadowPCF16(vec4 positionFromLight,
                     sampler2D shadowMap,
                     vec2 mapSize,
                     float bias1,
                     float bias2) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		// depth is in [-1, 1] but we want [0, 1] for the texture lookup
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;
    float d = 0.0;
    for(float dx = -1.5; dx <= 1.5; dx += 1.0) {
        for(float dy =-1.5; dy <= 1.5; dy += 1.0) {
            d += texture2D(shadowMap, uv + vec2(dx, dy) / mapSize).x;
        }
    }
    d /= 16.0;
    return 1.0 - smoothstep(bias1, bias2, depth.z - d);
}

float GetShadowPCF9(vec4 positionFromLight,
                    sampler2D shadowMap,
                    vec2 mapSize,
                    float bias1,
                    float bias2) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		// depth is in [-1, 1] but we want [0, 1] for the texture lookup
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;
    float d = 0.0;
    for(float dx = -1.0; dx <= 1.0; dx += 1.0) {
        for(float dy =-1.0; dy <= 1.0; dy += 1.0) {
            d += texture2D(shadowMap, uv + vec2(dx, dy) / mapSize).x;
        }
    }
    d /= 9.0;
    return 1.0 - smoothstep(bias1, bias2, depth.z - d);
}
""";

List<ShaderObject> _createShaderVisualizeShadowmapLinear() {
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
      ..AddUniformVars([uCutOff, uCameraFar, uCameraNear])
      ..SetBody([
        """
#if 0
float perspectiveDepthToViewZ(float z, float near, float far) {
    return near * far / ((far - near) * z - far);
}

float viewZToOrthographicDepth(float z, float near, float far) {
    return (z + near) / (near - far);
}

float orthographicDepthToViewZ(float d, float near, float far) {
    return d * (near - far) - near;
}

float viewZToPerspectiveDepth(float z, float near, float far) {
    return ((near + z) * far) / ((far - near) * z);
}

float LinearizeDepth(float z, float near, float far) {
 return (2.0 * near) / (far + near - z * (far - near));
}
#endif
void main() {
   float d = texture2D(${uTexture},  ${vTextureCoordinates}).x;
   gl_FragColor.rgb = vec3(d >= ${uCutOff} ? d : 0.0);
}
"""
      ])
  ];
}

class ShadowMap {
  ChronosFramebuffer _shadowBuffer;
  VM.Vector2 _mapSize;

  RenderPhase _phaseCompute;
  RenderProgram _programCompute;

  RenderPhase _phaseVisualize;
  RenderProgram _programVisualize;

  ShadowMap(ChronosGL cgl, int w, int h)
      : _mapSize = new VM.Vector2(w + 0.0, h + 0.0) {
    _shadowBuffer = new ChronosFramebuffer(cgl, w, h);
    _phaseCompute = new RenderPhase("compute-shadow", cgl, _shadowBuffer)
      ..viewPortW = w
      ..viewPortH = h;
    _programCompute = _phaseCompute.createProgram(_createShadowShader());

    // We do not clear the color buffer for visualization, so Visualize
    // should be called as the last thing touching the framebuffer.
    _phaseVisualize = new RenderPhase("visualize-shadow", cgl)
    ..clearColorBuffer = false;
    _programVisualize =
        _phaseVisualize.createProgram(_createShaderVisualizeShadowmapLinear())
          ..SetInput(uTexture, GetMapTexture())
          ..SetInput(uCutOff, 0.0)
          ..SetInput(uCameraNear, 0.0)
          ..SetInput(uCameraFar, 0.0)
          ..add(UnitNode(cgl));
  }

  void SetVisualizationViewPort(int x, int y, int w, int h) {
    _phaseVisualize
      ..viewPortX = x
      ..viewPortY = y
      ..viewPortW = w
      ..viewPortH = h;
  }

  void AddShadowCaster(Node node) {
    _programCompute.add(node);
  }

  void ClearShadowCasters() {
    _programCompute.removeAll();
  }

  // TODO: this should take a Illumination instance as an argument eventually
  void Compute(VM.Matrix4 lightMatrix) {
    _programCompute.ForceInput(uLightPerspectiveViewMatrix, lightMatrix);
    _phaseCompute.draw([]);
  }

  void Visualize() {
    _phaseVisualize.draw([]);
  }

  VM.Vector2 GetMapSize() => _mapSize;
  Texture GetMapTexture() => _shadowBuffer.depthTexture;
}
