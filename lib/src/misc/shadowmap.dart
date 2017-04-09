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



class ShadowMap {
  ChronosFramebuffer _shadowBuffer;
  RenderPhase _phase;
  RenderProgram _program;

  ShadowMap(ChronosGL cgl, int w, int h) {
    _shadowBuffer = new ChronosFramebuffer(cgl, w, h);
    _phase = new RenderPhase("compute-shadow", cgl, _shadowBuffer);
    _phase.viewPortW = w;
    _phase.viewPortH = h;
    _program = _phase.createProgram(_createShadowShader());
  }

  void AddShadowCaster(Node node) {
    _program.add(node);
  }

  // TODO: this should take a Illumination instance as an argument eventually
  void Compute(VM.Matrix4 lightMatrix) {
    _program.ForceInput(uLightPerspectiveViewMatrix, lightMatrix);
    _phase.draw([]);
  }

  Texture GetMapTexture() => _shadowBuffer.depthTexture;
}
