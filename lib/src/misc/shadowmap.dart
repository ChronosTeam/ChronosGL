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
final ShaderObject shadowVertexShaderDepth = ShaderObject("ShadowMapV")
  ..AddAttributeVars([aPosition])
  ..AddUniformVars([uLightPerspectiveViewMatrix, uModelMatrix])
  ..SetBody([
    """
void main() {
    gl_Position = ${uLightPerspectiveViewMatrix} * ${uModelMatrix} *
                  vec4(${aPosition}, 1.0);
}
    """
  ]);

final ShaderObject shadowFragmentShaderDepth =
// What we care about here is the internal update of the depth buffer
    ShaderObject("ShadowMapF")..SetBodyWithMain(["${oFragColor}.r = 1.0;"]);

final ShaderObject visualizeShadowmapVertexShaderLinearDepth16 =
    ShaderObject("copyV")
      ..AddAttributeVars([aPosition, aTexUV])
      ..AddVaryingVars([vTexUV])
      ..SetBody([NullVertexShaderWithTextureForwardString]);

final ShaderObject visualizeShadowmapFragmentShaderLinearDepth16 =
    ShaderObject("copyF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([
        uTexture,
        // uCutOff,
        uCameraFar, uCameraNear
      ])
      ..SetBody([
        """
void main() {     
   float d = texture(${uTexture},  ${vTexUV}).x;
   float near = ${uCameraNear};
   float far = ${uCameraFar};
   float gray = (2.0 * near) / (far + near - d * (far - near));
   ${oFragColor}.rgb = vec3(gray);
   // ${oFragColor}.rgb = vec3(d >= ${uCutOff} ? d : 0.0);
   // ${oFragColor}.rgb = vec3(d);
}
"""
      ]);

class ShadowMap {
  // Other options for format:  GL_DEPTH_COMPONENT32F
  ShadowMap(this._cgl, int w, int h, double near, double far,
      {int format = GL_DEPTH_COMPONENT24}) {
    _mapSize = VM.Vector2(w + 0.0, h + 0.0);
    // We do not really need a proper frame buffer texture as we are only
    // concerned about updated the depth buffer.
    // TODO: is there a way to disable the framebuffer writes altogether?
    Texture dummy = TypedTexture(
        _cgl, "frame::color", w, h, GL_RGBA8, TexturePropertiesFramebuffer);
    _depthTexture = TypedTexture(
        _cgl, "frame::depth", w, h, format, TexturePropertiesShadowMap);
    _shadowBuffer = Framebuffer(_cgl, dummy, _depthTexture);
    _phaseCompute = RenderPhase("compute-shadow", _cgl, _shadowBuffer)
      ..viewPortW = w
      ..viewPortH = h;

    _uniforms
      ..SetUniform(uTexture, GetMapTexture())
      // for visualization only:
      ..SetUniform(uCutOff, 0.0)
      ..SetUniform(uCameraNear, near)
      ..SetUniform(uCameraFar, far);

    _programCompute = Scene(
        "shadowCompute",
        RenderProgram("shadowCompute", _cgl, shadowVertexShaderDepth,
            shadowFragmentShaderDepth),
        [_uniforms]);
    _phaseCompute.add(_programCompute);

    // We do not clear the color buffer for visualization, so Visualize
    // should be called as the last thing touching the framebuffer.
    _phaseVisualize = RenderPhase("visualize-shadow", _cgl)
      ..clearColorBuffer = false;

    _programVisualize = Scene(
        "shadowVisualize",
        RenderProgram(
            "shadowVisualize",
            _cgl,
            visualizeShadowmapVertexShaderLinearDepth16,
            visualizeShadowmapFragmentShaderLinearDepth16),
        [_uniforms]);

    _programVisualize.add(UnitNode(_programVisualize.program));
    _phaseVisualize.add(_programVisualize);
  }

  final ChronosGL _cgl;
  late Texture _depthTexture;
  late RenderPhase _phaseCompute;
  late Framebuffer _shadowBuffer;
  late Scene _programCompute;

  late RenderPhase _phaseVisualize;
  UniformGroup _uniforms = UniformGroup("uniforms");

  late Scene _programVisualize;

  late VM.Vector2 _mapSize;

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
    _phaseCompute.Draw();
  }

  void Visualize() {
    // Total hack! TextureSamplers could make this nicer
    _cgl.bindTexture(GL_TEXTURE_2D, _depthTexture.GetTexture());
    _cgl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_COMPARE_MODE, GL_NONE);
    // Should we have chosen GL_NEAREST when we set up the texture?
    _cgl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
    _cgl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
    _cgl.bindTexture(GL_TEXTURE_2D, null);
    _phaseVisualize.Draw([]);

    _cgl.bindTexture(GL_TEXTURE_2D, _depthTexture.GetTexture());
    _cgl.texParameteri(
        GL_TEXTURE_2D, GL_TEXTURE_COMPARE_MODE, GL_COMPARE_REF_TO_TEXTURE);
    _cgl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    _cgl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    _cgl.bindTexture(GL_TEXTURE_2D, null);
  }

  VM.Vector2 GetMapSize() => _mapSize;

  Texture GetMapTexture() => _depthTexture;
}
