part of chronosgl;

// An object which will update the state of ShaderProgramInputs
abstract class ShaderInputProvider extends NamedEntity {
  ShaderInputProvider(String name) : super(name);

  void UpdateShaderInputs(ShaderProgramInputs inputs);
}

// For use with uniforms
class ShaderProgramInputs extends NamedEntity {
  // TODO: this should contain all the state, including blending, depth writing
  // and detect incompatible settings
  Map<String, dynamic> _uniforms = {};
  Map<String, dynamic> _controls = {};
  Map<String, dynamic> _attributes = {};
  dynamic _element_array;

  Map<String, NamedEntity> _origin = {};

  ShaderProgramInputs(String name) : super(name);

  void SetUniformWithOrigin(NamedEntity origin, String canonical, var val) {
    if (RetrieveShaderVarDesc(canonical) == null) throw "unknown ${canonical}";
    _uniforms[canonical] = val;
    _origin[canonical] = origin;
  }

  void SetUniform(String canonical, val) {
    SetUniformWithOrigin(this, canonical, val);
  }

  dynamic GetUniformVal(String canonical) {
    if (RetrieveShaderVarDesc(canonical) == null) throw "unknown ${canonical}";
    return _uniforms[canonical];
  }

  void SetControlWithOrigin(NamedEntity origin, String canonical, var val) {
    _controls[canonical] = val;
    _origin[canonical] = origin;
  }

  bool HasUniform(String canonical) {
    return _uniforms.containsKey(canonical);
  }

  Iterable<String> AllUniforms() {
    return _uniforms.keys;
  }

  void SetAttributeWithOrigin(NamedEntity origin, String canonical, var val) {
    _attributes[canonical] = val;
    _origin[canonical] = origin;
  }

  Iterable<String> AllAttributes() {
    return _attributes.keys;
  }

  dynamic GetAttributeVal(String canonical) {
    if (RetrieveShaderVarDesc(canonical) == null) throw "unknown ${canonical}";
    return _attributes[canonical];
  }

  void MergeInputs(ShaderProgramInputs other) {
    other._uniforms.forEach((String k, v) {
      _uniforms[k] = v;
      _origin[k] = other._origin[k];
    });
  }

  void SetElementArrayWithOrigin(NamedEntity origin, WEBGL.Buffer buffer) {
    _element_array = buffer;
    _origin[eArray] = origin;
  }
}

void ActivateControls(
    WEBGL.RenderingContext gl, Map<String, dynamic> controls) {}

// Material is a very light weight class that just bundles up
// a bunch of ShaderInputs
class Material extends ShaderInputProvider {
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
  void UpdateShaderInputs(ShaderProgramInputs inputs) {
    _uniforms.forEach((String k, v) {
      inputs.SetUniformWithOrigin(this, k, v);
    });
  }
}
