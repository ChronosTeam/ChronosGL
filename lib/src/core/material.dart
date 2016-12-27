part of core;

/// RenderInputProvider provides inputs (aks parameters) necessary for running
/// a ShaderProgram. The primary examples for such inputs are:
/// Uniforms, Attributes, VertexBuffers
/// Each parameter has a canonical name, c.f. shader_object.dart.
/// A large number of those are already registered by default.
/// Additional ones required by custom shaders can be registered at
/// startup.
/// There are small number of unusual control inputs, e.g.
/// cBlend that indirectly effect the behavior of a ShaderProgram.
/// These are mostly related to fixed function features, like
/// blending and depth buffers.
abstract class RenderInputProvider extends NamedEntity {
  RenderInputProvider(String name) : super(name);

  void AddRenderInputs(RenderInputs inputs);
  void RemoveRenderInputs(RenderInputs inputs);
}

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

/// Material is a light weight container for Inputs.
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
    ;
  }
}
