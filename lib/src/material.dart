part of chronosgl;

// An object which will update the state of ShaderProgramInputs
abstract class RenderInputProvider extends NamedEntity {
  RenderInputProvider(String name) : super(name);

  void AddRenderInputs(RenderInputs inputs);
  void RemoveRenderInputs(RenderInputs inputs);
}



// Material is a very light weight class that just bundles up
// a bunch of ShaderInputs
class Material extends RenderInputProvider {
  bool depthTest = true;
  bool depthWrite = true;
  bool blend = false;
  int blend_sFactor = WEBGL.SRC_ALPHA;
  int blend_dFactor = WEBGL.ONE_MINUS_SRC_ALPHA; // This was ONE;
  int blendEquation = WEBGL.FUNC_ADD;
  Map<String, dynamic> _uniforms = {};

  Material(String name) : super(name);

  // TODO: get rid of there and instead introduce some "tri-state" logic
  void RenderingInit(WEBGL.RenderingContext gl) {
    if (blend) {
      gl.enable(WEBGL.BLEND);
      gl.blendFunc(blend_sFactor, blend_dFactor);
      gl.blendEquation(blendEquation);
    }

    if (!depthTest) {
      gl.disable(WEBGL.DEPTH_TEST);
    }
    if (!depthWrite) {
      gl.depthMask(false);
    }
  }

  void RenderingExit(WEBGL.RenderingContext gl) {
    if (blend) {
      gl.disable(WEBGL.BLEND);
    }
    if (!depthTest) {
      gl.enable(WEBGL.DEPTH_TEST);
    }
    if (!depthWrite) {
      gl.depthMask(true);
    }
  }

  bool HasUniform(String canonical) {
    return _uniforms.containsKey(canonical);
  }

  void SetUniform(String canonical, val, [bool allowOverride = false]) {
    assert(allowOverride || !_uniforms.containsKey(canonical));
    _uniforms[canonical] = val;
  }

  @override
  void AddRenderInputs(RenderInputs inputs) {
    _uniforms.forEach((String k, v) {
      inputs.SetInputWithOrigin(this, k, v);
    });
  }

  @override
  void RemoveRenderInputs(RenderInputs inputs) {
    for (String canonical in _uniforms.keys) {
      inputs.Remove(canonical);
    };
  }
}
