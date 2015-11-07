part of chronosgl;

class Material {
  bool depthTest = true;
  bool depthWrite = true;
  bool blend = false;
  int blend_sFactor = SRC_ALPHA;
  int blend_dFactor = ONE_MINUS_SRC_ALPHA; // This was ONE;
  int blendEquation = FUNC_ADD;

  ShaderProgramInputs _inputs = new ShaderProgramInputs();
  
  void SetUniform(String canonical, val) {
    _inputs.SetUniformVal(canonical, val);
  }
  
  void RenderingInit(RenderingContext gl) {
    if (blend) {
      gl.enable(BLEND);
      gl.blendFunc(blend_sFactor, blend_dFactor);
      gl.blendEquation(blendEquation);
    }

    if (!depthTest) {
      gl.disable(DEPTH_TEST);
    }
    if (!depthWrite) {
      gl.depthMask(false);
    }
  }

  void RenderingExit(RenderingContext gl) {
    if (blend) {
      gl.disable(BLEND);
    }
    if (!depthTest) {
      gl.enable(DEPTH_TEST);
    }
    if (!depthWrite) {
      gl.depthMask(true);
    }
  }
}
