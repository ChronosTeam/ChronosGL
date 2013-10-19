part of chronos_gl;

class ChronosFramebuffer {
  RenderingContext gl;
  int width;
  int height;
  
  Framebuffer framebuffer;
  Renderbuffer renderbuffer;
  Texture texture;
  
  ChronosFramebuffer( this.gl, this.width, this.height) {
    framebuffer = gl.createFramebuffer();
    renderbuffer = gl.createRenderbuffer();
    texture = gl.createTexture();

    gl.bindTexture( TEXTURE_2D, texture);
    gl.texImage2DTyped(TEXTURE_2D, 0, RGB, width, height, 0, RGB, UNSIGNED_BYTE, null);
    gl.texParameteri( TEXTURE_2D, TEXTURE_MAG_FILTER, NEAREST);
    gl.texParameteri( TEXTURE_2D, TEXTURE_MIN_FILTER, NEAREST);
    gl.texParameteri( TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    gl.texParameteri( TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);


    gl.bindRenderbuffer(RENDERBUFFER, renderbuffer);
    gl.bindFramebuffer(FRAMEBUFFER, framebuffer);

    gl.renderbufferStorage(RENDERBUFFER, DEPTH_COMPONENT16, width, height);

    gl.framebufferTexture2D(FRAMEBUFFER, COLOR_ATTACHMENT0, TEXTURE_2D, texture, 0);

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
