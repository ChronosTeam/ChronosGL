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

/// ## Class Material (is a RenderInputSource)
/// is a light weight container for **Inputs**.
/// By convention the *Inputs** pertain to mesh appearance.
class Material extends RenderInputSource {
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

  void SetUniform(String canonical, dynamic val) {
    assert(!_uniforms.containsKey(canonical));
    ForceUniform(canonical, val);
  }

  void ForceUniform(String canonical, dynamic val) {
    _uniforms[canonical] = val;
  }

  bool HasUniform(String canonical) {
    return _uniforms.containsKey(canonical);
  }

  @override
  void AddToSink(RenderInputSink inputs) {
    _uniforms.forEach((String k, v) {
      inputs.SetInput(k, v, this);
    });
  }

  @override
  void RemoveFromSink(RenderInputSink inputs) {
    for (String canonical in _uniforms.keys) {
      inputs.Remove(canonical);
    }
  }
}
