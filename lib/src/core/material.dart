part of core;

class TheStencilFunction {
  int func;
  int value;
  int mask;

  TheStencilFunction(this.func, this.value, this.mask);
}

final TheStencilFunction StencilFunctionNone =
    new TheStencilFunction(GL_INVALID_VALUE, 0, ~0);

final TheStencilFunction StencilFunctionAlways =
    new TheStencilFunction(GL_ALWAYS, 0, ~0);

class TheBlendEquation {
  int equation;
  int srcFactor;
  int dstFactor;

  TheBlendEquation(this.equation, this.srcFactor, this.dstFactor);
}

final TheBlendEquation BlendEquationNone =
    new TheBlendEquation(GL_INVALID_VALUE, GL_INVALID_VALUE, GL_INVALID_VALUE);

// dst was GL_ONE
final TheBlendEquation BlendEquationStandard =
    new TheBlendEquation(GL_FUNC_ADD, GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

final TheBlendEquation BlendEquationMix =
    new TheBlendEquation(GL_FUNC_ADD, GL_SRC_ALPHA, GL_ONE_MINUS_SRC_COLOR);

final TheBlendEquation BlendEquationAdd =
    new TheBlendEquation(GL_FUNC_ADD, GL_ONE, GL_ONE);

/// ## Class Material (is a UniformGroup)
/// is a light weight container for uniforms related to the appearance
/// of a mesh.
class Material extends UniformGroup {

  Material(String name) : super(name) {
    SetUniform(cDepthTest, true);
    SetUniform(cDepthWrite, true);
    SetUniform(cBlendEquation, BlendEquationNone);
    SetUniform(cStencilFunc, StencilFunctionNone);
  }

  Material.Transparent(String name, TheBlendEquation beq) : super(name) {
    SetUniform(cDepthTest, true);
    SetUniform(cDepthWrite, false);
    SetUniform(cBlendEquation, beq);
    SetUniform(cStencilFunc, StencilFunctionNone);
  }
}
