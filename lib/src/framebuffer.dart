part of chronosgl;

class ChronosFramebuffer {
  RenderingContext gl;
  int width;
  int height;

  Framebuffer framebuffer;
  Renderbuffer renderbuffer;
  TextureWrapper colorTexture;
  TextureWrapper depthTexture;
  var depthTextureExt;

  ChronosFramebuffer(this.gl, this.width, this.height) {
    depthTextureExt = GetGlExtensionDepth(gl);
    // http://blog.tojicode.com/2012/07/using-webgldepthtexture.html
    if (depthTextureExt == null) {
      throw "Error";
    }

    framebuffer = gl.createFramebuffer();

    colorTexture =
        new TextureWrapper.Null("frame::color", width, height, false);
    colorTexture.Install(gl);
    depthTexture = new TextureWrapper.Null("frame::depth", width, height, true);
    depthTexture.Install(gl);

    gl.bindFramebuffer(FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(FRAMEBUFFER, COLOR_ATTACHMENT0, TEXTURE_2D,
        colorTexture.GetTexture(), 0);
    gl.framebufferTexture2D(
        FRAMEBUFFER, DEPTH_ATTACHMENT, TEXTURE_2D, depthTexture.GetTexture(), 0);

    gl.bindTexture(TEXTURE_2D, null);
    gl.bindFramebuffer(FRAMEBUFFER, null);
  }

  bool ready() {
    bool result =
        gl.checkFramebufferStatus(FRAMEBUFFER) == FRAMEBUFFER_COMPLETE;
    if (!result) {
      print("FRAMEBUFFER_INCOMPLETE");
    }
    return result;
  }
}
