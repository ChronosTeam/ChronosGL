part of core;

/// ## Class RenderPhase (is a NamedEntity)
/// represents a sequence of RenderPrograms.
class RenderPhase extends NamedEntity {
  final ChronosGL _cgl;
  ChronosFramebuffer _framebuffer;
  final List<RenderProgram> _programs = [];
  //final VM.Matrix4 _pMatrix = new VM.Matrix4.identity();
  bool clearColorBuffer = true;
  bool clearDepthBuffer = true;
  int viewPortX = 0;
  int viewPortY = 0;
  int viewPortW = 0;
  int viewPortH = 0;

  RenderPhase(String name, this._cgl, [this._framebuffer = null]) : super(name);

  void SetFramebuffer(ChronosFramebuffer fb) {
    _framebuffer = fb;
  }

  void draw(List<RenderInputProvider> inputs, [List<DrawStats> stats = null]) {
    if (_framebuffer == null) {
      _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
    } else {
      _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, _framebuffer.framebuffer);
    }
    assert(viewPortW > 0 && viewPortH > 0);
    _cgl.gl.viewport(viewPortX, viewPortY, viewPortW, viewPortH);

    if (clearColorBuffer || clearDepthBuffer) {
      int mode = 0;
      if (clearColorBuffer) mode |= WEBGL.COLOR_BUFFER_BIT;
      if (clearDepthBuffer) mode |= WEBGL.DEPTH_BUFFER_BIT;
      _cgl.clear(mode);
    }

    for (RenderProgram prg in _programs) {
      if (!prg.enabled) continue;
      for (RenderInputProvider p in inputs) {
        p.AddRenderInputs(prg);
      }
      prg.draw(stats);
      for (RenderInputProvider p in inputs) {
        p.RemoveRenderInputs(prg);
      }
    }
  }

  void AddRenderProgram(RenderProgram s) {
    _programs.add(s);
  }

  RenderProgram createProgram(List<ShaderObject> so) {
    RenderProgram prg = new ShaderProgram(so[0].name, _cgl, so[0], so[1]);
    AddRenderProgram(prg);
    return prg;
  }
}
