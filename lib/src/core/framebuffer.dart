part of core;

class ChronosFramebuffer {
  WEBGL.RenderingContext gl;

  WEBGL.Framebuffer framebuffer;
  //WEBGL.Renderbuffer renderbuffer;
  TypedTexture colorTexture;
  TypedTexture depthTexture;
  var depthTextureExt;

  ChronosFramebuffer(this.gl, width, height, [colorFormat = WEBGL.RGB]) {
    depthTextureExt = GetGlExtensionDepth(gl);
    // http://blog.tojicode.com/2012/07/using-webgldepthtexture.html
    if (depthTextureExt == null) {
      throw "Error";
    }

    framebuffer = gl.createFramebuffer();

    colorTexture = new TypedTexture(
        gl, "frame::color", width, height, colorFormat, WEBGL.UNSIGNED_BYTE);
    //colorTexture.Install();
    depthTexture = new TypedTexture(gl, "frame::depth", width, height,
        WEBGL.DEPTH_COMPONENT, WEBGL.UNSIGNED_SHORT);
    //depthTexture.Install();

    gl.bindFramebuffer(WEBGL.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.COLOR_ATTACHMENT0,
        WEBGL.TEXTURE_2D, colorTexture.GetTexture(), 0);
    gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.DEPTH_ATTACHMENT,
        WEBGL.TEXTURE_2D, depthTexture.GetTexture(), 0);

    gl.bindTexture(WEBGL.TEXTURE_2D, null);
    gl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
  }

  ChronosFramebuffer.FromTexture(this.gl, this.colorTexture) {
    framebuffer = gl.createFramebuffer();

    gl.bindFramebuffer(WEBGL.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.COLOR_ATTACHMENT0,
        WEBGL.TEXTURE_2D, colorTexture.GetTexture(), 0);

    //depthTexture = new TypedTexture("frame::depth", width, height,
    //    WEBGL.DEPTH_COMPONENT, WEBGL.UNSIGNED_SHORT);
    //depthTexture.Install(gl);
    //gl.framebufferTexture2D(WEBGL.FRAMEBUFFER, WEBGL.DEPTH_ATTACHMENT,
    //    WEBGL.TEXTURE_2D, null, 0);

    //gl.bindTexture(WEBGL.TEXTURE_2D, null);
    int err = gl.checkFramebufferStatus(WEBGL.FRAMEBUFFER);
    assert(err == WEBGL.FRAMEBUFFER_COMPLETE);
    if (err != WEBGL.FRAMEBUFFER_COMPLETE) {
      throw "Error Incomplete Framebuffer: ${err}";
    }
    gl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
  }

  bool ready() {
    bool result = gl.checkFramebufferStatus(WEBGL.FRAMEBUFFER) ==
        WEBGL.FRAMEBUFFER_COMPLETE;
    if (!result) {
      print("FRAMEBUFFER_INCOMPLETE");
    }
    return result;
  }

  // e.g. into Float32List
  // BROKEN: https://github.com/dart-lang/sdk/issues/11614
  void ExtractData(var buf, int x, int y, int w, int h) {
    gl.bindFramebuffer(WEBGL.FRAMEBUFFER, framebuffer);
    // RGB (3 values per pixel), RGBA (4 values per pixel)
    // see TypeToNumChannels
    int implFormat = gl
        .getParameter(WEBGL.RenderingContext.IMPLEMENTATION_COLOR_READ_FORMAT);
    print ("impl format: ${implFormat}");
    // FLOAT, UNSIGNED BYTE
    int implType =
        gl.getParameter(WEBGL.RenderingContext.IMPLEMENTATION_COLOR_READ_TYPE);
    print ("impl type: ${implType}");
    gl.readPixels(x, y, w, h, implFormat, implType, buf);
    gl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
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
