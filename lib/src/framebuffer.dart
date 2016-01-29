part of chronosgl;

class ChronosFramebuffer {
  WEBGL.RenderingContext gl;

  WEBGL.Framebuffer framebuffer;
  WEBGL.Renderbuffer renderbuffer;
  TypedTexture colorTexture;
  TypedTexture depthTexture;
  var depthTextureExt;

  ChronosFramebuffer(this.gl, width, height) {
    depthTextureExt = GetGlExtensionDepth(gl);
    // http://blog.tojicode.com/2012/07/using-webgldepthtexture.html
    if (depthTextureExt == null) {
      throw "Error";
    }

    framebuffer = gl.createFramebuffer();

    colorTexture = new TypedTexture(
        "frame::color", width, height, WEBGL.RGB, WEBGL.UNSIGNED_BYTE);
    colorTexture.Install(gl);
    depthTexture = new TypedTexture("frame::depth", width, height,
        WEBGL.DEPTH_COMPONENT, WEBGL.UNSIGNED_SHORT);
    depthTexture.Install(gl);

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
  void ExtractData(var buf, int x, int y, int w, int h) {
    gl.bindFramebuffer(WEBGL.FRAMEBUFFER, framebuffer);
    int implFormat =
        gl.getParameter(WEBGL.RenderingContext.IMPLEMENTATION_COLOR_READ_FORMAT);
    int implType =
        gl.getParameter(WEBGL.RenderingContext.IMPLEMENTATION_COLOR_READ_TYPE);
    gl.readPixels(x, y, w, h, implFormat, implType, buf);
    gl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
  }
}
