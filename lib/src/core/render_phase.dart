part of core;

/// ## Class RenderPhase (is a NamedEntity)
/// represents a sequence of RenderPrograms.
class RenderPhase extends NamedEntity {
  final ChronosGL _cgl;
  Framebuffer _framebuffer;
  final List<RenderProgram> _programs = [];
  //final VM.Matrix4 _pMatrix = new VM.Matrix4.identity();
  int _clear_mode =
      GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT | GL_STENCIL_BUFFER_BIT;

  int viewPortX = 0;
  int viewPortY = 0;
  int viewPortW = 0;
  int viewPortH = 0;

  RenderPhase(String name, this._cgl, [this._framebuffer = null])
      : super(name) {
    if (_framebuffer == null) _framebuffer = new Framebuffer.Screen(_cgl);
  }

  Framebuffer get framebuffer => _framebuffer;

  void draw(List<UniformGroup> inputs, [List<DrawStats> stats = null]) {
    _framebuffer.Activate(
        _clear_mode, viewPortX, viewPortY, viewPortW, viewPortH);

    for (RenderProgram prg in _programs) {
      if (!prg.enabled) continue;
      prg.drawScene(stats, inputs);
    }
  }

  void set clearColorBuffer(bool clear) {
    if (clear)
      _clear_mode |= GL_COLOR_BUFFER_BIT;
    else
      _clear_mode &= ~GL_COLOR_BUFFER_BIT;
  }

  void set clearDepthBuffer(bool clear) {
    if (clear)
      _clear_mode |= GL_DEPTH_BUFFER_BIT;
    else
      _clear_mode &= ~GL_DEPTH_BUFFER_BIT;
  }

  void set clearStencilBuffer(bool clear) {
    if (clear)
      _clear_mode |= GL_STENCIL_BUFFER_BIT;
    else
      _clear_mode &= ~GL_STENCIL_BUFFER_BIT;
  }

  void AddRenderProgram(RenderProgram s) {
    _programs.add(s);
  }

  RenderProgram createProgram(List<ShaderObject> so) {
    RenderProgram prg = new RenderProgram(so[0].name, _cgl, so[0], so[1]);
    AddRenderProgram(prg);
    return prg;
  }
}
