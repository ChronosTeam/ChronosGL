part of core;

class TheStencilFunction {
  TheStencilFunction(this.func, this.value, this.mask);

  int func;
  int value;
  int mask;
}

final TheStencilFunction StencilFunctionNone =
    TheStencilFunction(GL_INVALID_VALUE, 0, ~0);

final TheStencilFunction StencilFunctionAlways =
    TheStencilFunction(GL_ALWAYS, 0, ~0);

class TheStencilOp {
  TheStencilOp(this.fail, this.zfail, this.zpass);

  int fail;
  int zfail;
  int zpass;
}

class TheBlendEquation {
  TheBlendEquation(this.equation, this.srcFactor, this.dstFactor);

  int equation;
  int srcFactor;
  int dstFactor;
}

final TheBlendEquation BlendEquationNone =
    TheBlendEquation(GL_INVALID_VALUE, GL_INVALID_VALUE, GL_INVALID_VALUE);

// dst was GL_ONE
final TheBlendEquation BlendEquationStandard =
    TheBlendEquation(GL_FUNC_ADD, GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

final TheBlendEquation BlendEquationMix =
    TheBlendEquation(GL_FUNC_ADD, GL_SRC_ALPHA, GL_ONE_MINUS_SRC_COLOR);

final TheBlendEquation BlendEquationAdd =
    TheBlendEquation(GL_FUNC_ADD, GL_ONE, GL_ONE);

/// is a light weight container for uniforms related to the appearance
/// of a mesh.
/// At most one Material can be passed to the RenderProgram::Draw() call
/// because it controls the depth, stencil, and blending behavior
class Material extends UniformGroup {
  Material(String name) : super(name) {
    SetUniform(cDepthFunc, GL_LESS);
    SetUniform(cDepthTest, true);
    SetUniform(cDepthWrite, true);
    SetUniform(cBlendEquation, BlendEquationNone);
  }

  Material.Transparent(String name, TheBlendEquation beq) : super(name) {
    SetUniform(cDepthFunc, GL_LESS);
    SetUniform(cDepthTest, true);
    SetUniform(cDepthWrite, false);
    SetUniform(cBlendEquation, beq);
  }

  Material.Empty(String name) : super(name);
}
