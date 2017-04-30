part of core;

const String NO_WEBGL_MESSAGE = """
Calling canvas.getContext("webgl2") failed,
make sure you run on a computer that supports WebGL2.

You can test your browser's compatibility here: http://webglreport.com/

(If you are using Dartium make sure you start it with the
option: --enable-unsafe-es3-apis)
""";

const int kNoAnisotropicFilterLevel = 1;

String _AddLineNumbers(String text) {
  List<String> out = text.split("\n");
  for (int i = 0; i < out.length; ++i) {
    out[i] = "${i + 1}: ${out[i]}";
  }
  return out.join("\n");
}

WEBGL.Shader _CompileOneShader(dynamic gl, int type, String text) {
  WEBGL.Shader shader = gl.createShader(type);

  gl.shaderSource(shader, text);
  gl.compileShader(shader);

  var result = gl.getShaderParameter(shader, GL_COMPILE_STATUS);
  if (result != null && result == false) {
    String error = gl.getShaderInfoLog(shader);
    LogInfo("Compilation failed:");
    LogInfo(_AddLineNumbers(text));
    LogInfo("Failure:");
    LogInfo(error);
    throw error;
  }
  return shader;
}

class ChronosGL {
  // either WebGL2RenderingContext' or 'RenderingContext2'
  dynamic _gl;

  final dynamic _canvas;

  ChronosGL(this._canvas,
      {bool preserveDrawingBuffer: false,
      bool faceCulling: false,
      bool antialiasing: true}) {
    Map attributes = {
      "alpha": false,
      "depth": true,
      "stencil": true,
      "antialias": antialiasing,
      "premultipliedAlpha": true,
      "preserveDrawingBuffer": preserveDrawingBuffer,
    };

    _gl = _canvas.getContext("webgl2", attributes);
    if (_gl == null) {
      throw new Exception(NO_WEBGL_MESSAGE);
    }

    _gl.clearColor(0.0, 0.0, 0.0, 1.0);
    _gl.enable(GL_DEPTH_TEST);
    if (faceCulling) {
      _gl.enable(GL_CULL_FACE);
    }
  }

  WEBGL.Program CompileWholeProgram(
      String vertexShaderText, String fragmentShaderText) {
    WEBGL.Program program = _gl.createProgram();
    _gl.attachShader(
        program, _CompileOneShader(_gl, GL_VERTEX_SHADER, vertexShaderText));
    _gl.attachShader(program,
        _CompileOneShader(_gl, GL_FRAGMENT_SHADER, fragmentShaderText));
    _gl.linkProgram(program);

    if (!_gl.getProgramParameter(program, GL_LINK_STATUS)) {
      throw _gl.getProgramInfoLog(program);
    }

    return program;
  }

  void bindBuffer(int kind, WEBGL.Buffer buffer) {
    _gl.bindBuffer(kind, buffer);
  }

  void ChangeArrayBuffer(WEBGL.Buffer buffer, List data) {
    _gl.bindBuffer(GL_ARRAY_BUFFER, buffer);
    _gl.bufferData(GL_ARRAY_BUFFER, data, GL_DYNAMIC_DRAW);
  }

  WEBGL.Buffer createBuffer() {
    return _gl.createBuffer();
  }

  void ChangeElementArrayBuffer(WEBGL.Buffer buffer, TypedData data) {
    assert((data is Uint16List) || (data is Uint32List) || (data is Uint8List));
    _gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, buffer);
    _gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, data, GL_DYNAMIC_DRAW);
  }

  // Why all these shims?
  // They are useful for instrumentation and may allow us some day
  // to interface with dart-gl
  void deleteBuffer(dynamic buffer) {
    _gl.deleteBuffer(buffer);
  }

  WEBGL.Framebuffer createFramebuffer() {
    return _gl.createFramebuffer();
  }

  void bindFramebuffer(int kind, dynamic framebuffer) {
    _gl.bindFramebuffer(kind, framebuffer);
  }

  int checkFramebufferStatus(int kind) {
    return _gl.checkFramebufferStatus(kind);
  }

  void framebufferTexture2D(
      int target, int attachment, int textarget, dynamic texture, int level) {
    _gl.framebufferTexture2D(target, attachment, textarget, texture, level);
  }

  WEBGL.Texture createTexture() {
    return _gl.createTexture();
  }

  void bindTexture(int kind, dynamic texture) {
    _gl.bindTexture(kind, texture);
  }

  void viewport(int x, int y, int w, int h) {
    _gl.viewport(x, y, w, h);
  }

  void enable(int kind) {
    _gl.enable(kind);
  }

  void disable(int kind) {
    _gl.disable(kind);
  }

  void depthMask(bool flag) {
    _gl.depthMask(flag);
  }

  void blendFunc(int srcFactor, int dstFactor) {
    _gl.blendFunc(srcFactor, dstFactor);
  }

  void blendEquation(int equation) {
    _gl.blendEquation(equation);
  }

  void enableVertexAttribArray(int index) {
    _gl.enableVertexAttribArray(index);
  }

  void disableVertexAttribArray(int index) {
    _gl.disableVertexAttribArray(index);
  }

  void clear(int kind) {
    _gl.clear(kind);
  }

  void setLineWidth(int w) {
    _gl.lineWidth(w);
  }

  void generateMipmap(int kind) {
    _gl.generateMipmap(kind);
  }

  void texParameteri(int kind1, int kind2, int val) {
    _gl.texParameteri(kind1, kind2, val);
  }

  void texParameterf(int kind1, int kind2, double val) {
    _gl.texParameterf(kind1, kind2, val);
  }

  dynamic getParameter(int kind) {
    return _gl.getParameter(kind);
  }

  void vertexAttribPointer(
      int index, int size, int type, bool normalized, int stride, int offset) {
    _gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
  }

  void texImage2Dweb(
      int target, int level, int iformat, int format, int type, dynamic data) {
    _gl.texImage2D(target, level, iformat, format, type, data);
  }

  void texImage2D(int target, int level, int iformat, int w, int h, int border,
      int format, int type, dynamic data) {
    _gl.texImage2D(target, level, iformat, w, h, border, format, type, data);
  }

  void activeTexture(int target) {
    _gl.activeTexture(target);
  }

  dynamic createProgram() {
    return _gl.createProgram();
  }

  void linkProgram(WEBGL.Program obj) {
    _gl.linkProgram(obj);
  }

  void useProgram(WEBGL.Program obj) {
    _gl.useProgram(obj);
  }

  dynamic createShader(int kind) {
    return _gl.createShader(kind);
  }

  int getAttribLocation(WEBGL.Program program, String attribute) {
    return _gl.getAttribLocation(program, attribute);
  }

  WEBGL.UniformLocation getUniformLocation(WEBGL.Program program, String uniform) {
    return _gl.getUniformLocation(program, uniform);
  }

  int getError() {
    return _gl.getError();
  }

  void vertexAttribDivisor(int index, int stride) {
    _gl.vertexAttribDivisor(index, stride);
  }

  // reads from bound GL_FRAMEBUFFER
  void readPixels(
      int x, int y, int w, int h, int implFormat, int implType, TypedData buf) {
    _gl.readPixels(x, y, w, h, implFormat, implType, buf);
  }

  String getProgramInfoLog(WEBGL.Program program) {
    return _gl.getProgramInfoLog(program);
  }

  void pixelStorei(int type, int value) {
    _gl.pixelStorei(type, value);
  }

  List getSupportedExtensions() {
    return _gl.getSupportedExtensions();
  }

  dynamic getExtension(String name) {
    return _gl.getExtension(name);
  }

  dynamic GetGlExtensionAnisotropic() {
    var ext = _gl.getExtension("EXT_texture_filter_anisotropic");
    if (ext == null) {
      LogWarn("ExtensionAnisotropic NOT SUPPORTED");
    }
    return ext;
  }

  int MaxAnisotropicFilterLevel() {
    var ext = GetGlExtensionAnisotropic();
    if (ext == null) {
      return kNoAnisotropicFilterLevel;
    }
    return getParameter(
        WEBGL.ExtTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
  }

  void drawElementsInstanced(
      int mode, int count, int type, int offset, int instanceCount) {
    if (instanceCount > 1) {
      _gl.drawElementsInstanced(mode, count, type, offset, instanceCount);
    } else {
      _gl.drawElements(mode, count, type, offset);
    }
  }

  void drawArraysInstanced(int mode, int first, int count, int instanceCount) {
    if (instanceCount > 1) {
      _gl.drawArraysInstanced(mode, first, count, instanceCount);
    } else {
      _gl.drawArrays(mode, first, count);
    }
  }

  void uniform1f(WEBGL.UniformLocation location, double value) {
    _gl.uniform1f(location, value);
  }

  void uniform1i(WEBGL.UniformLocation location, int value) {
    _gl.uniform1i(location, value);
  }

  void uniform1fv(WEBGL.UniformLocation location, Float32List value) {
    _gl.uniform1fv(location, value);
  }

  void uniform2fv(WEBGL.UniformLocation location, Float32List value) {
    _gl.uniform2fv(location, value);
  }

  void uniform3fv(WEBGL.UniformLocation location, Float32List value) {
    _gl.uniform3fv(location, value);
  }

  void uniform4fv(WEBGL.UniformLocation location, Float32List value) {
    _gl.uniform4fv(location, value);
  }

  void uniformMatrix4fv(WEBGL.UniformLocation location, bool transpose, Float32List value) {
    _gl.uniformMatrix4fv(location, transpose, value);
  }

  void uniformMatrix3fv(WEBGL.UniformLocation location, bool transpose, Float32List value) {
    _gl.uniformMatrix3fv(location, transpose, value);
  }
}
