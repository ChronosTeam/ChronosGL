part of core;

const String NO_WEBGL_MESSAGE = """
Calling canvas.getContext("experimental-webgl") failed,
make sure you run on a computer that supports WebGL.
Test here: http://get.webgl.org/
""";

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

  void bindFramebuffer(int kind, dynamic framebuffer) {
    gl.bindFramebuffer(kind, framebuffer);
  }

  void bindTexture(int kind, dynamic texture) {
    gl.bindTexture(kind, texture);
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


}
