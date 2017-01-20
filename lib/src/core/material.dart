part of core;


class BlendEquation {
  int equation;
  int srcFactor;
  int dstFactor;

  BlendEquation.Standard() {
    srcFactor = WEBGL.SRC_ALPHA;
    dstFactor = WEBGL.ONE_MINUS_SRC_ALPHA; // This was ONE;
    equation = WEBGL.FUNC_ADD;
  }

  BlendEquation.Mix() {
    srcFactor = WEBGL.SRC_ALPHA;
    dstFactor = WEBGL.ONE_MINUS_SRC_COLOR;
    equation = WEBGL.FUNC_ADD;
  }

  BlendEquation.Add() {
    srcFactor = WEBGL.ONE;
    dstFactor = WEBGL.ONE;
    equation = WEBGL.FUNC_ADD;
  }
}

/// ## Class Material (is a RenderInputProvider)
/// is a light weight container for **Inputs**.
/// By convention the *Inputs** pertain to mesh appearance.
class Material extends RenderInputProvider {
  Map<String, dynamic> _uniforms = {};

  Material(String name) : super(name) {
    SetUniform(cDepthTest, true);
    SetUniform(cDepthWrite, true);
    SetUniform(cBlend, false);
  }

  Material.Transparent(String name, BlendEquation beq) : super(name) {
    SetUniform(cDepthTest, true);
    SetUniform(cDepthWrite, false);
    SetUniform(cBlend, true);
    SetUniform(cBlendEquation, beq);
  }

  Material.BlendAndDepthNeutral(String name) : super(name);

  void SetUniform(String canonical, val, [bool allowOverride = false]) {
    assert(allowOverride || !_uniforms.containsKey(canonical));
    _uniforms[canonical] = val;
  }

  void ForceUniform(String canonical, val) {
    _uniforms[canonical] = val;
  }

  bool HasUniform(String canonical) {
    return _uniforms.containsKey(canonical);
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
    }
  }
}
