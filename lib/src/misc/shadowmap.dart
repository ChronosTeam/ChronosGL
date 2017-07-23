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
final ShaderObject shadowVertexShaderDepth = new ShaderObject("ShadowMapV")
  ..AddAttributeVars([aPosition])
  ..AddUniformVars([uLightPerspectiveViewMatrix, uModelMatrix])
  ..SetBodyWithMain([
    """
    gl_Position = ${uLightPerspectiveViewMatrix} * ${uModelMatrix} *
                  vec4(${aPosition}, 1.0);
    """
  ]);

final ShaderObject shadowFragmentShaderDepth =
    // What we care about here is the internal update of the depth buffer
    new ShaderObject("ShadowMapF")..SetBodyWithMain(["${oFragColor}.r = 1.0;"]);

final ShaderObject visualizeShadowmapVertexShaderLinearDepth16 =
    new ShaderObject("copyV")
      ..AddAttributeVars([aPosition, aTexUV])
      ..AddVaryingVars([vTexUV])
      ..SetBodyWithMain([NullVertexBody, "${vTexUV} = ${aTexUV};"]);

final ShaderObject visualizeShadowmapFragmentShaderLinearDepth16 =
    new ShaderObject("copyF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uTexture, uCutOff, uCameraFar, uCameraNear])
      ..SetBodyWithMain([
        """
   float d = texture(${uTexture},  ${vTexUV}).x;
   float near = ${uCameraNear};
   float far = ${uCameraFar};
   float gray = (2.0 * near) / (far + near - d * (far - near));
   ${oFragColor}.rgb = vec3(gray);
   // ${oFragColor}.rgb = vec3(d >= ${uCutOff} ? d : 0.0);
   // ${oFragColor}.rgb = vec3(d);
"""
      ]);

class ShadowMap {
  final ChronosGL _cgl;
  Texture _depthTexture;
  RenderPhase _phaseCompute;
  Framebuffer _shadowBuffer;
  Scene _programCompute;

  RenderPhase _phaseVisualize;
  UniformGroup _uniforms = new UniformGroup("uniforms");

  Scene _programVisualize;

  VM.Vector2 _mapSize;

  // Other options for format:  GL_DEPTH_COMPONENT32F
  ShadowMap(this._cgl, int w, int h, double near, double far,
      {int format = GL_DEPTH_COMPONENT24}) {
    _mapSize = new VM.Vector2(w + 0.0, h + 0.0);
    Texture dummy = new TypedTexture(
        _cgl, "frame::color", w, h, GL_RGBA8, TexturePropertiesFramebuffer);
    _depthTexture = new TypedTexture(
        _cgl, "frame::depth", w, h, format, TexturePropertiesShadowMap);
    _shadowBuffer = new Framebuffer(_cgl, dummy, _depthTexture);
    _phaseCompute = new RenderPhase("compute-shadow", _cgl, _shadowBuffer)
      ..viewPortW = w
      ..viewPortH = h;

    _uniforms
      ..SetUniform(uTexture, GetMapTexture())
      ..SetUniform(uCutOff, 0.0)
      ..SetUniform(uCameraNear, near)
      ..SetUniform(uCameraFar, far);

    _programCompute = new Scene(
        "shadowCompute",
        new RenderProgram("shadowCompute", _cgl, shadowVertexShaderDepth,
            shadowFragmentShaderDepth),
        [_uniforms]);
    _phaseCompute.add(_programCompute);

    // We do not clear the color buffer for visualization, so Visualize
    // should be called as the last thing touching the framebuffer.
    _phaseVisualize = new RenderPhase("visualize-shadow", _cgl)
      ..clearColorBuffer = false;

    _programVisualize = new Scene(
        "shadowVisualize",
        new RenderProgram(
            "shadowVisualize",
            _cgl,
            visualizeShadowmapVertexShaderLinearDepth16,
            visualizeShadowmapFragmentShaderLinearDepth16),
        [_uniforms]);

    _programVisualize.add(UnitNode(_programVisualize.program));
    _phaseVisualize.add(_programVisualize);
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
    _uniforms.ForceUniform(uLightPerspectiveViewMatrix, lightMatrix);
    _phaseCompute.Draw();
  }

  void Visualize() {
    // Total hack! TextureSamplers could make this nicer
    _cgl.bindTexture(GL_TEXTURE_2D, _depthTexture.GetTexture());
    _cgl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_COMPARE_MODE, GL_NONE);
    _cgl.bindTexture(GL_TEXTURE_2D, null);
    _phaseVisualize.Draw([]);
    _cgl.bindTexture(GL_TEXTURE_2D, _depthTexture.GetTexture());
    _cgl.texParameteri(
        GL_TEXTURE_2D, GL_TEXTURE_COMPARE_MODE, GL_COMPARE_REF_TO_TEXTURE);
    _cgl.bindTexture(GL_TEXTURE_2D, null);
  }

  VM.Vector2 GetMapSize() => _mapSize;
  Texture GetMapTexture() => _depthTexture;
}
