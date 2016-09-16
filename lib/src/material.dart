part of chronosgl;

// An object which will update the state of ShaderProgramInputs
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
}

// Material is a very light weight class that just bundles up
// a bunch of ShaderInputs
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
