part of chronosgl;

// For use with uniforms
class ShaderProgramInputs extends ShaderInputProvider {
  Map<String, dynamic> _uniforms = {};
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

  GetUniformVal(String canonical) {
    if (RetrieveShaderVarDesc(canonical) == null) throw "unknown ${canonical}";
    return _uniforms[canonical];
  }

  bool HasUniform(String canonical) {
    return _uniforms.containsKey(canonical);
  }

  Iterable<String> GetCanonicals() {
    return _uniforms.keys;
  }

  void MergeInputs(ShaderProgramInputs other) {
    other._uniforms.forEach((String k, v) {
      _uniforms[k] = v;
      _origin[k] = other._origin[k];
    });
  }

  void UpdateUniforms(ShaderProgramInputs inputs) {
    inputs.MergeInputs(this);
  }
}

class Material extends ShaderProgramInputs {
  bool depthTest = true;
  bool depthWrite = true;
  bool blend = false;
  int blend_sFactor = WEBGL.SRC_ALPHA;
  int blend_dFactor = WEBGL.ONE_MINUS_SRC_ALPHA; // This was ONE;
  int blendEquation = WEBGL.FUNC_ADD;

   Material(String name) : super(name);

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
}
