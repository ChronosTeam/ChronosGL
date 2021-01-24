part of chronosgl;

class ChronosFramebuffer {
  RenderingContext gl;
  int width;
  int height;

  Framebuffer framebuffer;
  Renderbuffer renderbuffer;
  Texture colorTexture;
  Texture depthTexture;
  var depthTextureExt;

  Texture initTexture([bool depth = false]) {
    Texture texture = gl.createTexture();
    gl.bindTexture(WebGL.TEXTURE_2D, texture);
    gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MAG_FILTER, WebGL.NEAREST);
    gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MIN_FILTER, WebGL.NEAREST);
    gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_S, WebGL.CLAMP_TO_EDGE);
    gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_T, WebGL.CLAMP_TO_EDGE);
    if (depth)
      gl.texImage2D(WebGL.TEXTURE_2D, 0, WebGL.DEPTH_COMPONENT, width, height, 0, WebGL.DEPTH_COMPONENT, WebGL.UNSIGNED_SHORT, null);
    else
      gl.texImage2D(WebGL.TEXTURE_2D, 0, WebGL.RGB, width, height, 0, WebGL.RGB, WebGL.UNSIGNED_BYTE, null);
    return texture;
  }

  ChronosFramebuffer(this.gl, this.width, this.height) {
    depthTextureExt = gl.getExtension("WEBKIT_WEBGL_depth_texture"); // http://blog.tojicode.com/2012/07/using-webgldepthtexture.html
    if (depthTextureExt == null) {
      throw "Error";
    }

    framebuffer = gl.createFramebuffer();

    colorTexture = initTexture();
    depthTexture = initTexture(true);

    gl.bindFramebuffer(WebGL.FRAMEBUFFER, framebuffer);

    gl.framebufferTexture2D(WebGL.FRAMEBUFFER, WebGL.COLOR_ATTACHMENT0, WebGL.TEXTURE_2D, colorTexture, 0);
    gl.framebufferTexture2D(WebGL.FRAMEBUFFER, WebGL.DEPTH_ATTACHMENT, WebGL.TEXTURE_2D, depthTexture, 0);

    gl.bindTexture(WebGL.TEXTURE_2D, null);
    gl.bindFramebuffer(WebGL.FRAMEBUFFER, null);
  }

  ChronosFramebuffer.old(this.gl, this.width, this.height) {
    framebuffer = gl.createFramebuffer();
    renderbuffer = gl.createRenderbuffer();

    colorTexture = initTexture();

    gl.bindRenderbuffer(WebGL.RENDERBUFFER, renderbuffer);
    gl.bindFramebuffer(WebGL.FRAMEBUFFER, framebuffer);

    gl.renderbufferStorage(WebGL.RENDERBUFFER, WebGL.DEPTH_COMPONENT16, width, height);

    gl.framebufferTexture2D(WebGL.FRAMEBUFFER, WebGL.COLOR_ATTACHMENT0, WebGL.TEXTURE_2D, colorTexture, 0);

    gl.framebufferRenderbuffer(WebGL.FRAMEBUFFER, WebGL.DEPTH_ATTACHMENT, WebGL.RENDERBUFFER, renderbuffer);

    gl.bindTexture(WebGL.TEXTURE_2D, null);
    gl.bindRenderbuffer(WebGL.RENDERBUFFER, null);
    gl.bindFramebuffer(WebGL.FRAMEBUFFER, null);
  }

  bool ready() {
    bool result = gl.checkFramebufferStatus(WebGL.FRAMEBUFFER) == WebGL.FRAMEBUFFER_COMPLETE;
    if (!result) {
      print("FRAMEBUFFER_INCOMPLETE");
    }
    return result;
  }
}
