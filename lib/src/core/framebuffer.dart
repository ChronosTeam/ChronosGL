part of core;

class ChronosFramebuffer {
  ChronosGL _cgl;

  dynamic /* gl Framebuffer */ framebuffer;
  Texture colorTexture;
  Texture depthTexture;
  Texture stencilTexture;

  ChronosFramebuffer(this._cgl, this.colorTexture,
      [this.depthTexture,
      this.stencilTexture = null,
      bool depthStencilCombined = false]) {
    framebuffer = _cgl.createFramebuffer();

    _cgl.bindFramebuffer(GL_FRAMEBUFFER, framebuffer);
    if (colorTexture != null) {
      _cgl.framebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0,
          GL_TEXTURE_2D, colorTexture.GetTexture(), 0);
    }
    if (depthTexture != null) {
      _cgl.framebufferTexture2D(
          GL_FRAMEBUFFER,
          depthStencilCombined
              ? GL_DEPTH_STENCIL_ATTACHMENT
              : GL_DEPTH_ATTACHMENT,
          GL_TEXTURE_2D,
          depthTexture.GetTexture(),
          0);
    }
    if (stencilTexture != null) {
      assert(!depthStencilCombined,
          "in combined mode - the stencil parameter must be null");
      _cgl.framebufferTexture2D(GL_FRAMEBUFFER, GL_STENCIL_ATTACHMENT,
          GL_TEXTURE_2D, stencilTexture.GetTexture(), 0);
    }

    int err = _cgl.checkFramebufferStatus(GL_FRAMEBUFFER);
    assert(err == GL_FRAMEBUFFER_COMPLETE);
    if (err != GL_FRAMEBUFFER_COMPLETE) {
      throw "Error Incomplete Framebuffer: ${err}";
    }
    _cgl.bindFramebuffer(GL_FRAMEBUFFER, null);
  }

  ChronosFramebuffer.Default(ChronosGL cgl, int w, int h)
      : this(
            cgl,
            new TypedTexture(
                cgl, "frame::color", w, h, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE),
            new DepthTexture(cgl, "frame::depth", w, h, GL_DEPTH_COMPONENT24,
                GL_UNSIGNED_INT, false));

  ChronosFramebuffer.DefaultWithStencil(ChronosGL cgl, int w, int h)
      : this(
            cgl,
            new TypedTexture(
                cgl, "frame::color", w, h, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE),
            new DepthStencilTexture(cgl, "frame::depth.stencil", w, h),
            null,
            true);

  bool ready() {
    bool result =
        _cgl.checkFramebufferStatus(GL_FRAMEBUFFER) == GL_FRAMEBUFFER_COMPLETE;
    if (!result) {
      print("FRAMEBUFFER_INCOMPLETE");
    }
    return result;
  }

  // e.g. into Float32List
  // BROKEN: https://github.com/dart-lang/sdk/issues/11614
  void ExtractData(var buf, int x, int y, int w, int h) {
    _cgl.bindFramebuffer(GL_FRAMEBUFFER, framebuffer);
    // RGB (3 values per pixel), RGBA (4 values per pixel)
    // see TypeToNumChannels
    int implFormat = _cgl.getParameter(GL_IMPLEMENTATION_COLOR_READ_FORMAT);
    print("impl format: ${implFormat}");
    // FLOAT, UNSIGNED BYTE
    int implType = _cgl.getParameter(GL_IMPLEMENTATION_COLOR_READ_TYPE);
    print("impl type: ${implType}");
    _cgl.readPixels(x, y, w, h, implFormat, implType, buf);
    _cgl.bindFramebuffer(GL_FRAMEBUFFER, null);
  }
}

int TypeToNumChannels(int t) {
  switch (t) {
    case GL_LUMINANCE:
      return 1;
    case GL_LUMINANCE_ALPHA:
      return 2;
    case GL_RGB:
      return 3;
    case GL_RGBA:
      return 4;
    default:
      assert(false);
      return -1;
  }
}
