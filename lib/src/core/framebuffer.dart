part of core;

class ChronosFramebuffer {
  ChronosGL _cgl;

  WEBGL.Framebuffer framebuffer;
  Texture colorTexture;
  Texture depthTexture;

  ChronosFramebuffer(this._cgl, this.colorTexture, this.depthTexture) {
    framebuffer = _cgl.createFramebuffer();

    _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, framebuffer);
    if (colorTexture != null) {
      _cgl.gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.COLOR_ATTACHMENT0,
          WEBGL.TEXTURE_2D, colorTexture.GetTexture(), 0);
    }
    if (depthTexture != null) {
      _cgl.gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.DEPTH_ATTACHMENT,
          WEBGL.TEXTURE_2D, depthTexture.GetTexture(), 0);
    }

    int err = _cgl.checkFramebufferStatus(WEBGL.FRAMEBUFFER);
    assert(err == WEBGL.FRAMEBUFFER_COMPLETE);
    if (err != WEBGL.FRAMEBUFFER_COMPLETE) {
      throw "Error Incomplete Framebuffer: ${err}";
    }
    _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
  }

  ChronosFramebuffer.Default(ChronosGL cgl, int w, int h)
      : this(
            cgl,
            new TypedTexture(cgl, "frame::color", w, h,
                WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE),
            new DepthTexture(cgl, "frame::depth", w, h,
                GL_DEPTH_COMPONENT24, WEBGL.UNSIGNED_INT, false));

  bool ready() {
    bool result = _cgl.checkFramebufferStatus(WEBGL.FRAMEBUFFER) ==
        WEBGL.FRAMEBUFFER_COMPLETE;
    if (!result) {
      print("FRAMEBUFFER_INCOMPLETE");
    }
    return result;
  }

  // e.g. into Float32List
  // BROKEN: https://github.com/dart-lang/sdk/issues/11614
  void ExtractData(var buf, int x, int y, int w, int h) {
    _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, framebuffer);
    // RGB (3 values per pixel), RGBA (4 values per pixel)
    // see TypeToNumChannels
    int implFormat = _cgl.gl
        .getParameter(WEBGL.RenderingContext.IMPLEMENTATION_COLOR_READ_FORMAT);
    print("impl format: ${implFormat}");
    // FLOAT, UNSIGNED BYTE
    int implType = _cgl.gl
        .getParameter(WEBGL.RenderingContext.IMPLEMENTATION_COLOR_READ_TYPE);
    print("impl type: ${implType}");
    _cgl.gl.readPixels(x, y, w, h, implFormat, implType, buf);
    _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
  }
}

int TypeToNumChannels(int t) {
  switch (t) {
    case WEBGL.LUMINANCE:
      return 1;
    case WEBGL.LUMINANCE_ALPHA:
      return 2;
    case WEBGL.RGB:
      return 3;
    case WEBGL.RGBA:
      return 4;
    default:
      assert(false);
      return -1;
  }
}
