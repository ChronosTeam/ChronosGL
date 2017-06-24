part of misc;

// Code for dealing with ShadowMaps

// Efficient Shadow Volume Rendering
// http://http.developer.nvidia.com/GPUGems/gpugems_ch09.html

// Cinematic Lighting
// http://http.developer.nvidia.com/GPUGems/gpugems_ch10.html

// Shadow Map Antialiasing
// http://http.developer.nvidia.com/GPUGems/gpugems_ch11.html

// Omnidirectional Shadow Mapping
// http://http.developer.nvidia.com/GPUGems/gpugems_ch12.html

// Generating Soft Shadows Using Occlusion Interval Maps
// http://http.developer.nvidia.com/GPUGems/gpugems_ch13.html

// Perspective Shadow Maps: Care and Feeding
// http://http.developer.nvidia.com/GPUGems/gpugems_ch14.html

// http://www.geeks3d.com/20091216/geexlab-how-to-visualize-the-depth-buffer-in-glsl/
// https://www.gamedev.net/resources/_/technical/graphics-programming-and-theory/3d-basics-r673
// http://stackoverflow.com/questions/21318471/rendering-orthographic-shadowmap-to-screen
// http://stackoverflow.com/questions/21318471/rendering-orthographic-shadowmap-to-screen
const String ShadowMapShaderLib = """

float GetShadow(vec3 depth, sampler2DShadow shadowMap, float bias1, float bias2) {
    depth.z = depth.z - bias1;
    return texture(shadowMap, depth);
    //return 1.0 - smoothstep(bias1, bias2, depth.z - d);
}

/*
float GetShadow(vec3 depth, sampler2DShadow shadowMap, float bias1, float bias2) {
    float d = GetShadowMapValue(shadowMap, depth.xy);
    return 1.0 - smoothstep(bias1, bias2, depth.z - d);
}

float GetShadowPCF16(
    vec3 depth, sampler2DShadow shadowMap, float bias1, float bias2) {
		vec2 uv = depth.xy;
		vec2 dimsInv = vec2(1.0 / float(textureSize(shadowMap, 0).x),
		                    1.0 / float(textureSize(shadowMap, 0).y));
    float d = 0.0;
    for(float dx = -1.5; dx <= 1.5; dx += 1.0) {
        for(float dy =-1.5; dy <= 1.5; dy += 1.0) {
            d += GetShadowMapValue(shadowMap, uv + vec2(dx, dy) * dimsInv);
        }
    }
    d /= 16.0;
    return 1.0 - smoothstep(bias1, bias2, depth.z - d);
}
*/

/*
float GetShadowPCF16(
    vec3 depth, sampler2D shadowMap, float bias1, float bias2) {
		vec2 uv = depth.xy;
		vec2 dimsInv = vec2(1.0 / float(textureSize(shadowMap, 0).x),
		                    1.0 / float(textureSize(shadowMap, 0).y));
    float d = 0.0;
    for(float dx = -1.5; dx <= 1.5; dx += 1.0) {
        for(float dy =-1.5; dy <= 1.5; dy += 1.0) {
            if (depth.z - GetShadowMapValue(shadowMap, uv + vec2(dx, dy) * dimsInv) > bias1) d += 1.0 / 16.0;
        }
    }

    return 1.0 - d;
}
*/

/*
float GetShadowPCF9(
    vec3 depth, sampler2D shadowMap, float bias1, float bias2) {
		vec2 uv = depth.xy;
		vec2 dimsInv = vec2(1.0 / float(textureSize(shadowMap, 0).x),
		                    1.0 / float(textureSize(shadowMap, 0).y));
    float d = 0.0;
    for(float dx = -1.0; dx <= 1.0; dx += 1.0) {
        for(float dy =-1.0; dy <= 1.0; dy += 1.0) {
            d += GetShadowMapValue(shadowMap, uv + vec2(dx, dy) * dimsInv);
        }
    }
    d /= 9.0;
    return 1.0 - smoothstep(bias1, bias2, depth.z - d);
}
*/
""";

/*
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
*/

abstract class ShadowMap {
  RenderPhase _phaseCompute;
  RenderProgram _programCompute;

  RenderPhase _phaseVisualize;
  UniformGroup _uniforms = new UniformGroup("uniforms");

  VM.Vector2 _mapSize;
  Texture _depthTexture;

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
    _uniforms.ForceUniform(uLightPerspectiveViewMatrix, lightMatrix);
    _phaseCompute.draw([_uniforms]);
  }

  void Visualize() {
    _phaseVisualize.draw([]);
  }

  VM.Vector2 GetMapSize() => _mapSize;
  Texture GetMapTexture() => _depthTexture;
}

List<ShaderObject> _createShadowShaderDepth16() {
  return [
    new ShaderObject("ShadowMapV")
      ..AddAttributeVars([aPosition])
      ..AddUniformVars([uLightPerspectiveViewMatrix, uModelMatrix])
      ..SetBodyWithMain([
        """
    gl_Position = ${uLightPerspectiveViewMatrix} * ${uModelMatrix} *
                  vec4(${aPosition}, 1.0);
    """
      ]),
    // What we care about here is the internal update of the depth buffer
    new ShaderObject("ShadowMapF")..SetBodyWithMain(["${oFragColor}.r = 1.0;"])
  ];
}

const String _GetShadowMapValueDepth16 = """
float GetShadowMapValue(sampler2D shadowMap,	vec2 uv) {
    return texture(shadowMap, uv).x;
}
""";

List<ShaderObject> _createShaderVisualizeShadowmapLinearDepth16() {
  return [
    new ShaderObject("copyV")
      ..AddAttributeVars([aPosition, aTexUV])
      ..AddVaryingVars([vTexUV])
      ..SetBodyWithMain(
          [NullVertexBody, "${vTexUV} = ${aTexUV};"]),
    new ShaderObject("copyF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uTexture, uCutOff, uCameraFar, uCameraNear])
      ..SetBodyWithMain([
        """
   float d = texture(${uTexture},  ${vTexUV}).x;
   ${oFragColor}.rgb = vec3(d >= ${uCutOff} ? d : 0.0);
"""
      ])
  ];
}

class ShadowMapDepth16 extends ShadowMap {
  Framebuffer _shadowBuffer;
  RenderProgram _programVisualize;

  ShadowMapDepth16(ChronosGL cgl, int w, int h) {
    _mapSize = new VM.Vector2(w + 0.0, h + 0.0);
    Texture dummy = new TypedTexture(
        cgl, "frame::color", w, h, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE);
    _depthTexture = new DepthTexture(
        cgl, "frame::depth", w, h, GL_DEPTH_COMPONENT24, GL_UNSIGNED_INT, true);
    _shadowBuffer = new Framebuffer(cgl, dummy, _depthTexture);
    _phaseCompute = new RenderPhase("compute-shadow", cgl, _shadowBuffer)
      ..viewPortW = w
      ..viewPortH = h;
    _programCompute = _phaseCompute.createProgram(_createShadowShaderDepth16());
    _uniforms..SetUniform(uTexture, GetMapTexture())
      ..SetUniform(uCutOff, 0.0)
      ..SetUniform(uCameraNear, 0.0)
      ..SetUniform(uCameraFar, 0.0);
    // We do not clear the color buffer for visualization, so Visualize
    // should be called as the last thing touching the framebuffer.
    _phaseVisualize = new RenderPhase("visualize-shadow", cgl)
      ..clearColorBuffer = false;
    _programVisualize = _phaseVisualize
        .createProgram(_createShaderVisualizeShadowmapLinearDepth16());

    _programVisualize.add(UnitNode(_programVisualize));
  }

  static String GetShadowMapValueLib() => _GetShadowMapValueDepth16;
}

const String _PackedRGBALib = """
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

""";

const String _GetShadowMapValuePackedRGBA = _PackedRGBALib +
    """
float GetShadowMapValue(sampler2D shadowMap,	vec2 uv) {
    return unpackDepth(texture(shadowMap, uv));
}
""";

List<ShaderObject> _createShadowShaderPackedRGBA() {
  return [
    new ShaderObject("ShadowV")
      ..AddAttributeVars([aPosition])
      ..AddVaryingVars([vDepth])
      ..AddUniformVars([uLightPerspectiveViewMatrix, uModelMatrix])
      ..SetBodyWithMain([
        """
    gl_Position = ${uLightPerspectiveViewMatrix} * ${uModelMatrix} * vec4(${aPosition}, 1.0);
    ${vDepth} = gl_Position.z / gl_Position.w * 0.5 + 0.5;
"""
      ]),
    new ShaderObject("ShadowF")
      ..AddVaryingVars([vDepth])
      ..SetBody([
        _PackedRGBALib,
        """
void main() {
    ${oFragColor} = packDepth(${vDepth});
}
"""
      ])
  ];
}

List<ShaderObject> _createShaderVisualizeShadowmapLinearPackedRGBA() {
  return [
    new ShaderObject("copyV")
      ..AddAttributeVars([aPosition, aTexUV])
      ..AddVaryingVars([vTexUV])
      ..SetBodyWithMain(
          [NullVertexBody, "${vTexUV} = ${aTexUV};"]),
    new ShaderObject("copyF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uShadowMap, uCutOff, uCameraFar, uCameraNear])
      ..SetBody([
        _PackedRGBALib,
        """
void main() {
    float d = unpackDepth(texture(${uShadowMap},  ${vTexUV}));
    ${oFragColor}.rgb = vec3(d >= ${uCutOff} ? d : 0.0);
}
"""
      ])
  ];
}

class ShadowMapPackedRGBA extends ShadowMap {
  Framebuffer _shadowBuffer;
  RenderProgram _programVisualize;

  ShadowMapPackedRGBA(ChronosGL cgl, int w, int h) {
    _mapSize = new VM.Vector2(w + 0.0, h + 0.0);
    _shadowBuffer = new Framebuffer.Default(cgl, w, h);
    _depthTexture = _shadowBuffer.colorTexture;
    _phaseCompute = new RenderPhase("compute-shadow", cgl, _shadowBuffer)
      ..viewPortW = w
      ..viewPortH = h;
    _programCompute =
        _phaseCompute.createProgram(_createShadowShaderPackedRGBA());

    // We do not clear the color buffer for visualization, so Visualize
    // should be called as the last thing touching the framebuffer.
    _phaseVisualize = new RenderPhase("visualize-shadow", cgl)
      ..clearColorBuffer = false;
    _programVisualize = _phaseVisualize
        .createProgram(_createShaderVisualizeShadowmapLinearPackedRGBA());
    _uniforms
          ..SetUniform(uShadowMap, GetMapTexture())
          ..SetUniform(uCutOff, 0.0)
          ..SetUniform(uCameraNear, 0.0)
          ..SetUniform(uCameraFar, 0.0);
    _programVisualize.add(UnitNode(_programVisualize));
  }

  static String GetShadowMapValueLib() => _GetShadowMapValuePackedRGBA;
}
