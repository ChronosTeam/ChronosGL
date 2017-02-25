part of core;

class ChronosFramebuffer {
  ChronosGL _cgl;

  WEBGL.Framebuffer framebuffer;
  //WEBGL.Renderbuffer renderbuffer;
  TypedTexture colorTexture;
  TypedTexture depthTexture;
  var depthTextureExt;

  ChronosFramebuffer(this._cgl, width, height, [colorFormat = WEBGL.RGB]) {
    framebuffer = _cgl.gl.createFramebuffer();

    colorTexture = new TypedTexture(
        _cgl, "frame::color", width, height, colorFormat, WEBGL.UNSIGNED_BYTE);
    //colorTexture.Install();
    depthTexture = new TypedTexture(_cgl, "frame::depth", width, height,
        WEBGL.DEPTH_COMPONENT, WEBGL.UNSIGNED_SHORT);
    //depthTexture.Install();

    _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, framebuffer);
    _cgl.gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.COLOR_ATTACHMENT0,
        WEBGL.TEXTURE_2D, colorTexture.GetTexture(), 0);
    _cgl.gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.DEPTH_ATTACHMENT,
        WEBGL.TEXTURE_2D, depthTexture.GetTexture(), 0);

    _cgl.bindTexture(WEBGL.TEXTURE_2D, null);
    _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
  }

  ChronosFramebuffer.FromTexture(this._cgl, this.colorTexture) {
    framebuffer = _cgl.gl.createFramebuffer();

    _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, framebuffer);
    _cgl.gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.COLOR_ATTACHMENT0,
        WEBGL.TEXTURE_2D, colorTexture.GetTexture(), 0);

    //depthTexture = new TypedTexture("frame::depth", width, height,
    //    WEBGL.DEPTH_COMPONENT, WEBGL.UNSIGNED_SHORT);
    //depthTexture.Install(gl);
    //gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.DEPTH_ATTACHMENT,
    //    WEBGL.TEXTURE_2D, null, 0);

    //gl.bindTexture(WEBGL.TEXTURE_2D, null);
    int err = _cgl.gl.checkFramebufferStatus(WEBGL.FRAMEBUFFER);
    assert(err == WEBGL.FRAMEBUFFER_COMPLETE);
    if (err != WEBGL.FRAMEBUFFER_COMPLETE) {
      throw "Error Incomplete Framebuffer: ${err}";
    }
    _cgl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
  }

  bool ready() {
    bool result = _cgl.gl.checkFramebufferStatus(WEBGL.FRAMEBUFFER) ==
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
