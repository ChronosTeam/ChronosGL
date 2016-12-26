part of chronosgl;

// FIXME: use proper type
dynamic GetGlExtensionDepth(WEBGL.RenderingContext gl) {
  var ext;
  for (String prefix in ["", "MOZ_", "WEBKIT_"]) {
    ext = gl.getExtension(prefix + "WEBGL_depth_texture");
    if (ext != null) break;
  }
  if (ext == null) {
    LogWarn("ExtensionDepth NOT SUPPORTED");
  }
  return ext;
}

// FIXME: use proper type
dynamic GetGlExtensionAnisotropic(WEBGL.RenderingContext gl) {
  var ext;
  for (String prefix in ["", "MOZ_", "WEBKIT_"]) {
    ext = gl.getExtension(prefix + "EXT_texture_filter_anisotropic");
    if (ext != null) break;
  }
  if (ext == null) {
    LogWarn("ExtensionAnisotropic NOT SUPPORTED");
  }
  return ext;
}

// FIXME: use proper type
dynamic GetGlExtensionStandardDerivatives(WEBGL.RenderingContext gl) {
  var ext = gl.getExtension("OES_standard_derivatives");
  if (ext == null) {
    LogWarn("ExtensionStandardDerivative NOT SUPPORTED");
  }
  return ext;
}

HTML.CanvasElement MakeSolidColorCanvas(String fillStyle) {
  HTML.CanvasElement canvas = new HTML.CanvasElement(width: 2, height: 2);
  HTML.CanvasRenderingContext2D ctx = canvas.getContext('2d');
  ctx.fillStyle = fillStyle;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return canvas;
}

const int kNoAnisotropicFilterLevel = 1;

int MaxAnisotropicFilterLevel(WEBGL.RenderingContext gl) {
  var ext = GetGlExtensionAnisotropic(gl);
  if (ext == null) {
    return kNoAnisotropicFilterLevel;
  }
  return gl.getParameter(
      WEBGL.ExtTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
}

class TextureProperties {
  bool mipmap = false;
  bool clamp = false;
  bool flipY = true;
  int anisotropicFilterLevel = kNoAnisotropicFilterLevel;
  int minFilter = WEBGL.LINEAR;
  int magFilter = WEBGL.LINEAR;

  void SetFilterNearest() {
    minFilter = WEBGL.NEAREST;
    magFilter = WEBGL.NEAREST;
  }

  // Very good but also a bit slow
  void SetMipmapLinear() {
    minFilter = WEBGL.LINEAR_MIPMAP_LINEAR;
    magFilter = WEBGL.LINEAR; // is this the best?
  }

  // This assumes a texture is already bound
  void Install(WEBGL.RenderingContext gl, int type) {
    if (flipY) {
      gl.pixelStorei(WEBGL.UNPACK_FLIP_Y_WEBGL, 1);
    }

    if (anisotropicFilterLevel != kNoAnisotropicFilterLevel) {
      gl.texParameterf(
          type,
          WEBGL.ExtTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,
          anisotropicFilterLevel);
    }
    gl.texParameteri(type, WEBGL.TEXTURE_MAG_FILTER, magFilter);
    gl.texParameteri(type, WEBGL.TEXTURE_MIN_FILTER, minFilter);

    if (clamp) {
      // this fixes glitches on skybox seams
      gl.texParameteri(type, WEBGL.TEXTURE_WRAP_S, WEBGL.CLAMP_TO_EDGE);
      gl.texParameteri(type, WEBGL.TEXTURE_WRAP_T, WEBGL.CLAMP_TO_EDGE);
    }
    if (mipmap) {
      gl.generateMipmap(type);
    }
  }
}

// Base class for all textures
class Texture {
  final String _url;
  WEBGL.Texture _texture;

  TextureProperties properties = new TextureProperties();

  static List<Texture> _cache = [];

  Texture(this._url) {
    _cache.add(this);
  }

  static Future<dynamic> loadAndInstallAllTextures(WEBGL.RenderingContext gl) {
    List<Future<dynamic>> futures = [];
    for (Texture tw in _cache) {
      Future<dynamic> f = tw.GetFuture();
      if (f != null) futures.add(f);
    }
    return Future.wait(futures).then((List list) {
      LogInfo("All images have loaded");
      for (Texture tw in _cache) {
        if (tw._texture != null) continue;
        tw.Install(gl);
      }
    });
  }

  WEBGL.Texture GetTexture() {
    return _texture;
  }

  void Install(WEBGL.RenderingContext gl) {
    assert(false, "abstract Install() called");
  }

  void InstallAsCubeChild(WEBGL.RenderingContext gl) {
    assert(false, "abstract InstallAsCubeChild() called");
  }

  // Primarly for image base texture so we can wait until the image has load
  Future<dynamic> GetFuture() {
    return null;
  }

  @override
  String toString() {
    return "Texture[${_url}]";
  }
}

class CanvasTexture extends Texture {
  HTML.CanvasElement _canvas;
  final int _textureType;

  CanvasTexture(String url, this._canvas,
      [this._textureType = WEBGL.TEXTURE_2D])
      : super(url);

  CanvasTexture.SolidColor(String url, String fillStyle,
      [this._textureType = WEBGL.TEXTURE_2D])
      : super(url) {
    _canvas = MakeSolidColorCanvas(fillStyle);
  }

  @override
  void Install(WEBGL.RenderingContext gl) {
    // Check for CubeChild
    if (_textureType != WEBGL.TEXTURE_2D) return;
    _texture = gl.createTexture();
    gl.bindTexture(_textureType, _texture);
    gl.texImage2D(
        _textureType, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _canvas);
    properties.Install(gl, _textureType);
    int err = gl.getError();
    assert(err == WEBGL.NO_ERROR);
    gl.bindTexture(_textureType, null);
  }

  void UpdateFromCanvas(WEBGL.RenderingContext gl) {
    gl.bindTexture(_textureType, _texture);
    gl.texImage2D(
        _textureType, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _canvas);
    gl.bindTexture(_textureType, null);
  }

  @override
  void InstallAsCubeChild(WEBGL.RenderingContext gl) {
    gl.texImage2D(
        _textureType, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _canvas);
  }

  @override
  String toString() {
    return "CanvasTexture[${_url}, ${_textureType}]";
  }
}

class ImageTexture extends Texture {
  HTML.ImageElement _image;
  final int _textureType;
  Future<dynamic> _future;

  ImageTexture(String url, [this._textureType = WEBGL.TEXTURE_2D])
      : super(url) {
    _image = new HTML.ImageElement();
    _future = _image.onLoad.first;
    _image.src = url;
  }

  @override
  void Install(WEBGL.RenderingContext gl) {
    // Check for CubeChild
    if (_textureType != WEBGL.TEXTURE_2D) return;
    _texture = gl.createTexture();
    gl.bindTexture(_textureType, _texture);
    gl.texImage2D(
        _textureType, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _image);
    properties.Install(gl, _textureType);
    int err = gl.getError();
    assert(err == WEBGL.NO_ERROR);
    gl.bindTexture(_textureType, null);
  }

  @override
  void InstallAsCubeChild(WEBGL.RenderingContext gl) {
    gl.texImage2D(
        _textureType, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _image);
  }

  @override
  Future<dynamic> GetFuture() {
    return _future;
  }

  @override
  String toString() {
    return "ImageTexture[${_url}, ${_textureType}]";
  }
}

class TypedTexture extends Texture {
  int _width;
  int _height;
  // e.g. WEBGL.DEPTH_COMPONENT, WEBGL.RGB, WEBGL.RGBA
  final int _formatType;
  // e.g.  WEBGL.UNSIGNED_SHORT, WEBGL.UNSIGNED_BYTE. WEBGL.FLOAT
  final int _dataType;
  // null, Float32List, etc
  // null is required by the shadow example
  // There used to be a bug - this seems fixed now, cf.:
  // sdk: https://github.com/dart-lang/sdk/issues/23517
  var _data;

  TypedTexture(
      String url, this._width, this._height, this._formatType, this._dataType,
      [this._data = null])
      : super(url) {
    properties.flipY = false;
    properties.clamp = true;
    properties.mipmap = false;
    properties.SetFilterNearest();
  }

  void UpdateContent(WEBGL.RenderingContext gl, int w, int h, var data) {
    _data = data;
    _width = w;
    _height = h;
    gl.bindTexture(WEBGL.TEXTURE_2D, _texture);
    gl.texImage2D(WEBGL.TEXTURE_2D, 0, _formatType, _width, _height, 0,
        _formatType, _dataType, _data);
    gl.bindTexture(WEBGL.TEXTURE_2D, null);
  }

  @override
  void Install(WEBGL.RenderingContext gl) {
    _texture = gl.createTexture();
    gl.bindTexture(WEBGL.TEXTURE_2D, _texture);
    gl.texImage2D(WEBGL.TEXTURE_2D, 0, _formatType, _width, _height, 0,
        _formatType, _dataType, _data);
    properties.Install(gl, WEBGL.TEXTURE_2D);
    int err = gl.getError();
    assert(err == WEBGL.NO_ERROR);
    gl.bindTexture(WEBGL.TEXTURE_2D, null);
  }

  dynamic GetData() {
    return _data;
  }

  @override
  String toString() {
    return "TypedTexture[${_url}, ${_dataType}, ${_formatType}]";
  }
}

class CubeTexture extends Texture {
  List<Texture> _cubeChildren;

  CubeTexture(String url, String prefix, String suffix) : super(url) {
    _cubeChildren = [
      new ImageTexture(
          prefix + "nx" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_X),
      new ImageTexture(
          prefix + "px" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_X),
      new ImageTexture(
          prefix + "ny" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Y),
      new ImageTexture(
          prefix + "py" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Y),
      new ImageTexture(
          prefix + "nz" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Z),
      new ImageTexture(
          prefix + "pz" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Z),
    ];
    properties.clamp = true;
  }

  CubeTexture.fromTextures(String url, List<Texture> texs) : super(url) {
    _cubeChildren = texs;
    properties.clamp = true;
  }

  @override
  void Install(WEBGL.RenderingContext gl) {
    _texture = gl.createTexture();
    gl.bindTexture(WEBGL.TEXTURE_CUBE_MAP, _texture);
    for (Texture child in _cubeChildren) {
      child.InstallAsCubeChild(gl);
    }
    properties.Install(gl, WEBGL.TEXTURE_CUBE_MAP);
    int err = gl.getError();
    assert(err == WEBGL.NO_ERROR);
    gl.bindTexture(WEBGL.TEXTURE_CUBE_MAP, null);
  }
}
