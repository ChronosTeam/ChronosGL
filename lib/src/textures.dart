part of chronosgl;

GetGlExtensionAnisotropic(RenderingContext gl) {
  var ext = null;
  for (String prefix in ["", "MOZ_", "WEBKIT_"]) {
    ext = gl.getExtension(prefix + "EXT_texture_filter_anisotropic");
    if (ext != null) break;
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

int MaxAnisotropicFilterLevel(RenderingContext gl) {
  var ext = GetGlExtensionAnisotropic(gl);
  if (ext == null) {
    return kNoAnisotropicFilterLevel;
  }
  return gl
      .getParameter(ExtTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
}

class TextureWrapper {
  static Map<String, TextureWrapper> _cache = new Map<String, TextureWrapper>();

  static TextureWrapper Lookup(String url) {
    assert(_cache.containsKey(url));
    return _cache[url];
  }

  static Future<dynamic> loadAndInstallAllTextures(RenderingContext gl) {
    List<Future<HTML.Event>> futures = [];
    for (String key in _cache.keys) {
      Future<dynamic> f = _cache[key]._future;
      if (f != null) futures.add(f);
    }
    return Future.wait(futures).then((List list) {
      LogInfo("All images have loaded");
      for (String key in _cache.keys) {
        TextureWrapper tw = _cache[key];
        if (tw._texture != null) continue;
        if (tw._type != TEXTURE_2D && tw._type != TEXTURE_CUBE_MAP) continue;
        tw.Install(gl);
      }
    });
  }

  final String _url;
  int _type;
  Texture _texture = null;
  Future<dynamic> _future = null;

  // Exactly one of the next three must be non-null
  HTML.ImageElement _image = null;
  HTML.CanvasElement _canvas = null;
  List<TextureWrapper> _cubeChildren = null;

  // TODO: consolidate
  bool mipmap = false;
  bool clamp = false;
  bool flipY = true;
  int anisotropicFilterLevel = kNoAnisotropicFilterLevel;
  int minFilter = LINEAR; // LINEAR_MIPMAP_LINEAR
  int magFilter = LINEAR;

  Texture GetTexture() {
    return _texture;
  }
  
  TextureWrapper.Canvas(this._url, this._canvas, [this._type = TEXTURE_2D]) {
    assert(!_cache.containsKey(_url));
    _cache[_url] = this;
  }

  TextureWrapper.SolidColor(String url, String fillStyle, [type = TEXTURE_2D])
      : this.Canvas(url, MakeSolidColorCanvas(fillStyle), type);

  TextureWrapper.Image(this._url, [this._type = TEXTURE_2D]) {
    _image = new HTML.ImageElement();
    _future = _image.onLoad.first;
    _image.src = _url;
    _cache[_url] = this;
  }

  TextureWrapper.ImageCube(this._url, String prefix, String suffix) {
    _type = TEXTURE_CUBE_MAP;
    _cubeChildren = [
      new TextureWrapper.Image(
          prefix + "nx" + suffix, TEXTURE_CUBE_MAP_NEGATIVE_X),
      new TextureWrapper.Image(
          prefix + "px" + suffix, TEXTURE_CUBE_MAP_POSITIVE_X),
      new TextureWrapper.Image(
          prefix + "ny" + suffix, TEXTURE_CUBE_MAP_NEGATIVE_Y),
      new TextureWrapper.Image(
          prefix + "py" + suffix, TEXTURE_CUBE_MAP_POSITIVE_Y),
      new TextureWrapper.Image(
          prefix + "nz" + suffix, TEXTURE_CUBE_MAP_NEGATIVE_Z),
      new TextureWrapper.Image(
          prefix + "pz" + suffix, TEXTURE_CUBE_MAP_POSITIVE_Z),
    ];
    _cache[_url] = this;
  }

  void InstallCubeChild(RenderingContext gl) {
    if (_canvas != null) {
      gl.texImage2DCanvas(_type, 0, RGBA, RGBA, UNSIGNED_BYTE, _canvas);
    } else {
      assert(_image != null);
      gl.texImage2DImage(_type, 0, RGBA, RGBA, UNSIGNED_BYTE, _image);
    }
  }

  void Install(RenderingContext gl) {
    LogInfo("Installing texture ${_url}");
    assert(_texture == null);
    _texture = gl.createTexture();
    gl.bindTexture(_type, _texture);
    if (flipY) {
      gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, 1);
    }

    if (anisotropicFilterLevel != kNoAnisotropicFilterLevel) {
      gl.texParameterf(
          _type,
          ExtTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,
          anisotropicFilterLevel);
    }
    gl.texParameteri(_type, TEXTURE_MAG_FILTER, magFilter);
    gl.texParameteri(_type, TEXTURE_MIN_FILTER, minFilter);

    if (clamp) {
      // this fixes glitches on skybox seams
      gl.texParameteri(_type, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
      gl.texParameteri(_type, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
    }

    if (_canvas != null) {
      gl.texImage2DCanvas(_type, 0, RGBA, RGBA, UNSIGNED_BYTE, _canvas);
    } else if (_image != null) {
      gl.texImage2DImage(_type, 0, RGBA, RGBA, UNSIGNED_BYTE, _image);
    } else if (_cubeChildren != null) {
      assert(_type == TEXTURE_CUBE_MAP);
      for (TextureWrapper child in _cubeChildren) {
        child.InstallCubeChild(gl);
      }
    }

    if (mipmap) {
      gl.generateMipmap(TEXTURE_2D);
    }

    gl.bindTexture(TEXTURE_2D, null);
  }

  String toString() {
    return "${_image.src} - texture: ${_texture}, clamp: $clamp,  type: $_type";
  }
}
