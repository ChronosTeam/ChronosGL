part of core;

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

bool IsCubeChildTextureType(int t) {
  switch (t) {
    case WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_X:
    case WEBGL.TEXTURE_CUBE_MAP_POSITIVE_X:
    case WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Y:
    case WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Y:
    case WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Z:
    case WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Z:
      return true;
    default:
      return false;
  }
}

// Base class for all textures
class Texture {
  final String _url;
  WEBGL.Texture _texture;
  final int _textureType;
  final WEBGL.RenderingContext _gl;

  TextureProperties properties = new TextureProperties();

  Texture(this._gl, this._textureType, this._url);

  void Bind([bool initTime = false]) {
    if (initTime) {
      _texture = _gl.createTexture();
    }

    _gl.bindTexture(_textureType, _texture);
  }

  void UnBind([bool initTime = false]) {
    if (initTime) {
      properties.Install(_gl, _textureType);
      int err = _gl.getError();
      assert(err == WEBGL.NO_ERROR);
    }
    _gl.bindTexture(_textureType, null);
  }

  void SetImageData(var data) {
    _gl.texImage2D(
        _textureType, 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, data);
  }

  int GetTextureType() => _textureType;

  WEBGL.Texture GetTexture() {
    return _texture;
  }

  @override
  String toString() {
    return "Texture[${_url}, ${_textureType}]";
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

  TypedTexture(WEBGL.RenderingContext gl, String url, this._width, this._height,
      this._formatType, this._dataType,
      [this._data = null])
      : super(gl, WEBGL.TEXTURE_2D, url) {
    properties.flipY = false;
    properties.clamp = true;
    properties.mipmap = false;
    properties.SetFilterNearest();
    _Install();
  }

  void UpdateContent(int w, int h, var data) {
    _data = data;
    _width = w;
    _height = h;
    Bind();
    _gl.texImage2D(WEBGL.TEXTURE_2D, 0, _formatType, _width, _height, 0,
        _formatType, _dataType, _data);
    UnBind();
  }

  void _Install() {
    Bind(true);
    _gl.texImage2D(WEBGL.TEXTURE_2D, 0, _formatType, _width, _height, 0,
        _formatType, _dataType, _data);
    UnBind(true);
  }

  dynamic GetData() {
    return _data;
  }

  @override
  String toString() {
    return "TypedTexture[${_url}, ${_dataType}, ${_formatType}]";
  }
}

// This sort of depends on dart:html but we use a dynamic type to disguise
// it.
// TODO: We want to call  Install() in the constructor but this does not
// seem to work for video elements.
class WebTexture extends Texture {
  dynamic _element; // CanvasElement, ImageElement, VideoElement

  WebTexture(WEBGL.RenderingContext gl, String url, this._element,
      [textureType = WEBGL.TEXTURE_2D])
      : super(gl, textureType, url);

  void Install() {
    Bind(true);
    SetImageData(_element);
    UnBind(true);
  }

  void Update() {
    Bind();
    SetImageData(_element);
    UnBind();
  }
}

final List<int> _kCubeModifier = [
  WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_X,
  WEBGL.TEXTURE_CUBE_MAP_POSITIVE_X,
  WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Y,
  WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Y,
  WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Z,
  WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Z,
];

class CubeTexture extends Texture {
  CubeTexture(WEBGL.RenderingContext gl, String url, List images)
      : super(gl, WEBGL.TEXTURE_CUBE_MAP, url) {
    assert(images.length == _kCubeModifier.length);
    Bind(true);
    for (int i = 0; i < _kCubeModifier.length; ++i) {
      _gl.texImage2D(_kCubeModifier[i], 0, WEBGL.RGBA, WEBGL.RGBA,
          WEBGL.UNSIGNED_BYTE,images[i]);
    }
    UnBind(true);

    properties.clamp = true;
  }
}
