part of core;

const String NO_WEBGL_MESSAGE = """
Calling canvas.getContext("experimental-webgl") failed,
make sure you run on a computer that supports WebGL.
Test here: http://get.webgl.org/
""";

String _AddLineNumbers(String text) {
  List<String> out = text.split("\n");
  for (int i = 0; i < out.length; ++i) {
    out[i] = "${i + 1}: ${out[i]}";
  }
  return out.join("\n");
}

WEBGL.Shader _CompileOneShader(
    WEBGL.RenderingContext gl, int type, String text) {
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
  WEBGL.RenderingContext gl;

  final dynamic _canvas;
  dynamic ext_OES_element_index_uint;
  dynamic ext_WEBGL_depth_texture;
  dynamic ext_ANGLE_instanced_arrays;

  ChronosGL(this._canvas, {bool preserveDrawingBuffer: false}) {
    Map attributes = {
      "alpha": false,
      "depth": true,
      "stencil": true,
      "antialias": false,
      "premultipliedAlpha": true,
      "preserveDrawingBuffer": preserveDrawingBuffer,
    };

    gl = _canvas.getContext("webgl", attributes);
    if (gl == null) {
      throw new Exception(NO_WEBGL_MESSAGE);
    }

    ext_OES_element_index_uint = gl.getExtension("OES_element_index_uint");
    if (ext_OES_element_index_uint == null) {
      throw "Error";
    }
    ext_WEBGL_depth_texture = gl.getExtension("WEBGL_depth_texture");
    if (ext_WEBGL_depth_texture == null) {
      throw "Error";
    }

    ext_ANGLE_instanced_arrays = gl.getExtension("ANGLE_instanced_arrays");
    if (ext_ANGLE_instanced_arrays == null) {
      throw "Error";
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(WEBGL.DEPTH_TEST);
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

  void ChangeArrayBuffer(WEBGL.Buffer buffer, Float32List data) {
    gl.bindBuffer(WEBGL.ARRAY_BUFFER, buffer);
    gl.bufferData(WEBGL.ARRAY_BUFFER, data, WEBGL.DYNAMIC_DRAW);
  }

  WEBGL.Buffer CreateAndInitializeArrayBuffer(Float32List data) {
    WEBGL.Buffer b = gl.createBuffer();
    ChangeArrayBuffer(b, data);
    return b;
  }

  void ChangeElementArrayBuffer(WEBGL.Buffer buffer, TypedData data) {
    gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, buffer);
    gl.bufferData(WEBGL.ELEMENT_ARRAY_BUFFER, data, WEBGL.DYNAMIC_DRAW);
  }

  WEBGL.Buffer CreateAndInitializeElementArrayBuffer(TypedData data) {
    assert((data is Uint16List) || (data is Uint32List) || (data is Uint8List));
    WEBGL.Buffer b = gl.createBuffer();
    ChangeElementArrayBuffer(b, data);
    return b;
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
