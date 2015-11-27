part of chronosgl;

GetGlExtensionDepth(WEBGL.RenderingContext gl) {
  var ext = null;
  for (String prefix in ["", "MOZ_", "WEBKIT_"]) {
    ext = gl.getExtension(prefix + "WEBGL_depth_texture");
    if (ext != null) break;
  }
  if (ext == null) {
    LogWarn("ExtensionDepth NOT SUPPORTED");
  }
  return ext;
}

GetGlExtensionAnisotropic(WEBGL.RenderingContext gl) {
  var ext = null;
  for (String prefix in ["", "MOZ_", "WEBKIT_"]) {
    ext = gl.getExtension(prefix + "EXT_texture_filter_anisotropic");
    if (ext != null) break;
  }
  if (ext == null) {
    LogWarn("ExtensionAnisotropic NOT SUPPORTED");
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
    magFilter = WEBGL.LINEAR;  // is this the best?
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

// Consider using subclasses
class Texture {
  static Map<String, Texture> _cache = new Map<String, Texture>();

  static Texture Lookup(String url) {
    assert(_cache.containsKey(url));
    return _cache[url];
  }

  static Future<dynamic> loadAndInstallAllTextures(WEBGL.RenderingContext gl) {
    List<Future<HTML.Event>> futures = [];
    for (String key in _cache.keys) {
      Future<dynamic> f = _cache[key]._future;
      if (f != null) futures.add(f);
    }
    return Future.wait(futures).then((List list) {
      LogInfo("All images have loaded");
      for (String key in _cache.keys) {
        Texture tw = _cache[key];
        if (tw._texture != null) continue;
        if (tw._type != WEBGL.TEXTURE_2D &&
            tw._type != WEBGL.TEXTURE_CUBE_MAP) continue;
        tw.Install(gl);
      }
    });
  }

  final String _url;
  int _type;
  WEBGL.Texture _texture = null;
  Future<dynamic> _future = null;
  TextureProperties properties = new TextureProperties();

  // Exactly one of the next three must be non-null
  HTML.ImageElement _image = null;
  HTML.CanvasElement _canvas = null;
  List<Texture> _cubeChildren = null;
  int _nullWidth;
  int _nullHeight;
  bool _isNullDepth = false;

  // TODO: consolidate

  WEBGL.Texture GetTexture() {
    return _texture;
  }

  Texture.Canvas(this._url, this._canvas,
      [this._type = WEBGL.TEXTURE_2D]) {
    assert(!_cache.containsKey(_url));
    _cache[_url] = this;
  }

  Texture.SolidColor(String url, String fillStyle,
      [type = WEBGL.TEXTURE_2D])
      : this.Canvas(url, MakeSolidColorCanvas(fillStyle), type);

  Texture.Image(this._url, [this._type = WEBGL.TEXTURE_2D]) {
    _image = new HTML.ImageElement();
    _future = _image.onLoad.first;
    _image.src = _url;
    _cache[_url] = this;
  }

  Texture.Null(
      this._url, this._nullWidth, this._nullHeight, this._isNullDepth,
      [this._type = WEBGL.TEXTURE_2D]) {
    properties.flipY = false;
    properties.clamp = true;
    properties.mipmap = false;
    properties.SetFilterNearest();
  }

  Texture.ImageCube(this._url, String prefix, String suffix) {
    _type = WEBGL.TEXTURE_CUBE_MAP;
    _cubeChildren = [
      new Texture.Image(
          prefix + "nx" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_X),
      new Texture.Image(
          prefix + "px" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_X),
      new Texture.Image(
          prefix + "ny" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Y),
      new Texture.Image(
          prefix + "py" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Y),
      new Texture.Image(
          prefix + "nz" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Z),
      new Texture.Image(
          prefix + "pz" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Z),
    ];
    properties.clamp = true;
    _cache[_url] = this;
  }

  void InstallCubeChild(WEBGL.RenderingContext gl) {
    if (_canvas != null) {
      gl.texImage2DCanvas(
          _type, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _canvas);
    } else {
      assert(_image != null);
      gl.texImage2DImage(
          _type, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _image);
    }
  }

  void Install(WEBGL.RenderingContext gl) {
    LogInfo("Installing texture ${_url}");
    assert(_texture == null);
    _texture = gl.createTexture();
    gl.bindTexture(_type, _texture);

    if (_canvas != null) {
      gl.texImage2DCanvas(
          _type, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _canvas);
    } else if (_image != null) {
      gl.texImage2DImage(
          _type, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _image);
    } else if (_cubeChildren != null) {
      assert(_type == WEBGL.TEXTURE_CUBE_MAP);
      for (Texture child in _cubeChildren) {
        child.InstallCubeChild(gl);
      }
    } else {
      assert(_nullWidth > 0 && _nullHeight > 0);
      if (_isNullDepth) {
        gl.texImage2DTyped(
            WEBGL.TEXTURE_2D,
            0,
            WEBGL.DEPTH_COMPONENT,
            _nullWidth,
            _nullHeight,
            0,
            WEBGL.DEPTH_COMPONENT,
            WEBGL.UNSIGNED_SHORT,
            null);
      } else {
        gl.texImage2DTyped(WEBGL.TEXTURE_2D, 0, WEBGL.RGB, _nullWidth,
            _nullHeight, 0, WEBGL.RGB, WEBGL.UNSIGNED_BYTE, null);
      }
    }
    properties.Install(gl, _type);
    gl.bindTexture(WEBGL.TEXTURE_2D, null);
  }

  String toString() {
    return "${_image.src} - texture: ${_texture}, type: $_type";
  }
}
