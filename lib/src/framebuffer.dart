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
  
  Texture initTexture( [bool depth=false]) {
    Texture texture  = gl.createTexture();
    gl.bindTexture( TEXTURE_2D, texture );
    gl.texParameteri( TEXTURE_2D, TEXTURE_MAG_FILTER, NEAREST);
    gl.texParameteri( TEXTURE_2D, TEXTURE_MIN_FILTER, NEAREST);
    gl.texParameteri( TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    gl.texParameteri( TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
    if( depth)
      gl.texImage2DTyped( TEXTURE_2D, 0, DEPTH_COMPONENT, width, height, 0, DEPTH_COMPONENT, UNSIGNED_SHORT, null);
    else
      gl.texImage2DTyped( TEXTURE_2D, 0, RGB, width, height, 0, RGB, UNSIGNED_BYTE, null);
    return texture;
  }
  
  ChronosFramebuffer( this.gl, this.width, this.height) {
    depthTextureExt = gl.getExtension("WEBKIT_WEBGL_depth_texture");  // http://blog.tojicode.com/2012/07/using-webgldepthtexture.html
    if(depthTextureExt==null) { throw "Error"; }

    framebuffer = gl.createFramebuffer();
    
    colorTexture = initTexture();
    depthTexture = initTexture(true);

    gl.bindFramebuffer( FRAMEBUFFER, framebuffer);

    gl.framebufferTexture2D( FRAMEBUFFER, COLOR_ATTACHMENT0, TEXTURE_2D, colorTexture, 0);
    gl.framebufferTexture2D( FRAMEBUFFER, DEPTH_ATTACHMENT, TEXTURE_2D, depthTexture, 0);
    
    gl.bindTexture(TEXTURE_2D, null);
    gl.bindFramebuffer(FRAMEBUFFER, null);
    
  }

  ChronosFramebuffer.old( this.gl, this.width, this.height) {
    framebuffer = gl.createFramebuffer();
    renderbuffer = gl.createRenderbuffer();
    
    colorTexture = initTexture();

    gl.bindRenderbuffer(RENDERBUFFER, renderbuffer);
    gl.bindFramebuffer(FRAMEBUFFER, framebuffer);

    gl.renderbufferStorage(RENDERBUFFER, DEPTH_COMPONENT16, width, height);

    gl.framebufferTexture2D(FRAMEBUFFER, COLOR_ATTACHMENT0, TEXTURE_2D, colorTexture, 0);

    gl.framebufferRenderbuffer(FRAMEBUFFER, DEPTH_ATTACHMENT, RENDERBUFFER, renderbuffer);
    
    gl.bindTexture(TEXTURE_2D, null);
    gl.bindRenderbuffer(RENDERBUFFER, null);
    gl.bindFramebuffer(FRAMEBUFFER, null);
    
  }
  
  bool ready() {
    bool result = gl.checkFramebufferStatus(FRAMEBUFFER) == FRAMEBUFFER_COMPLETE;
    if( !result) {
      print("FRAMEBUFFER_INCOMPLETE");
    }
    return result;
  }
  
}
