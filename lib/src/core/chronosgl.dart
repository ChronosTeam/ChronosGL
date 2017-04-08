part of core;

const String NO_WEBGL_MESSAGE = """
Calling canvas.getContext("webgl2") failed,
make sure you run on a computer that supports WebGL2.

You can test your browser's compatibility here: http://webglreport.com/

(If you are using Dartium make sure you start it with the
option: --enable-unsafe-es3-apis)
""";

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

  var result = gl.getShaderParameter(shader, WEBGL.COMPILE_STATUS);
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
  dynamic gl;

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

    gl = _canvas.getContext("webgl2", attributes);
    if (gl == null) {
      throw new Exception(NO_WEBGL_MESSAGE);
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(WEBGL.DEPTH_TEST);
    if (faceCulling) {
      gl.enable(WEBGL.CULL_FACE);
    }
  }

  WEBGL.Program CompileWholeProgram(
      String vertexShaderText, String fragmentShaderText) {
    WEBGL.Program program = gl.createProgram();
    gl.attachShader(
        program, _CompileOneShader(gl, WEBGL.VERTEX_SHADER, vertexShaderText));
    gl.attachShader(program,
        _CompileOneShader(gl, WEBGL.FRAGMENT_SHADER, fragmentShaderText));
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, WEBGL.LINK_STATUS)) {
      throw gl.getProgramInfoLog(program);
    }

    return program;
  }

  void bindBuffer(int kind, WEBGL.Buffer buffer) {
    gl.bindBuffer(kind, buffer);
  }

  void ChangeArrayBuffer(WEBGL.Buffer buffer, Float32List data) {
    gl.bindBuffer(WEBGL.ARRAY_BUFFER, buffer);
    gl.bufferData(WEBGL.ARRAY_BUFFER, data, WEBGL.DYNAMIC_DRAW);
  }

  WEBGL.Buffer createBuffer() {
    return gl.createBuffer();
  }

  void ChangeElementArrayBuffer(WEBGL.Buffer buffer, TypedData data) {
    assert((data is Uint16List) || (data is Uint32List) || (data is Uint8List));
    gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, buffer);
    gl.bufferData(WEBGL.ELEMENT_ARRAY_BUFFER, data, WEBGL.DYNAMIC_DRAW);
  }

  // Why all these shims?
  // They are useful for instrumentation and may allow us some day
  // to interface with dart-gl
  void deleteBuffer(dynamic buffer) {
    gl.deleteBuffer(buffer);
  }

  WEBGL.Framebuffer createFramebuffer() {
    return gl.createFramebuffer();
  }

  void bindFramebuffer(int kind, dynamic framebuffer) {
    gl.bindFramebuffer(kind, framebuffer);
  }

  int checkFramebufferStatus(int kind) {
    return checkFramebufferStatus(kind);
  }

  WEBGL.Texture createTexture() {
    return gl.createTexture();
  }

  void bindTexture(int kind, dynamic texture) {
    gl.bindTexture(kind, texture);
  }

  void viewport(int x, int y, int w, int h) {
    gl.viewport(x, y, w, h);
  }

  void enable(int kind) {
    gl.enable(kind);
  }

  void disable(int kind) {
    gl.disable(kind);
  }

  void enableVertexAttribArray(int index) {
    gl.enableVertexAttribArray(index);
  }

  void disableVertexAttribArray(int index) {
    gl.disableVertexAttribArray(index);
  }

  void clear(int kind) {
    gl.clear(kind);
  }

  void setLineWidth(int w) {
    gl.lineWidth(w);
  }

  void generateMipmap(int kind) {
    gl.generateMipmap(kind);
  }

  void texParameteri(int kind1, int kind2, int val) {
    gl.texParameteri(kind1, kind2, val);
  }

  void texParameterf(int kind1, int kind2, double val) {
    gl.texParameterf(kind1, kind2, val);
  }

  dynamic getParameter(int kind) {
    return gl.getParameter(kind);
  }

  dynamic createProgram() {
    return gl.createProgram();
  }

  void linkProgram(dynamic obj) {
    return gl.linkProgram(obj);
  }

  void useProgram(dynamic obj) {
    return gl.useProgram(obj);
  }

  dynamic createShader(int kind) {
    return gl.createShader(kind);
  }

  int getError() {
    return gl.getError();
  }
}
