part of core;

/// properties like clamping and mip-mapping.
class TextureProperties {
  TextureProperties();

  bool mipmap = false;
  bool clamp = false;
  bool shadow = false;
  bool flipY = true;
  int anisotropicFilterLevel = kNoAnisotropicFilterLevel;
  int minFilter = GL_LINEAR;
  int magFilter = GL_LINEAR;

  void SetFilterNearest() {
    minFilter = GL_NEAREST;
    magFilter = GL_NEAREST;
  }

  // Very good but also a bit slow
  void SetMipmapLinear() {
    mipmap = true;
    minFilter = GL_LINEAR_MIPMAP_LINEAR;
    magFilter = GL_LINEAR; // is this the best?
  }

  // This assumes a texture is already bound
  void InstallEarly(ChronosGL cgl, int type) {
    cgl.pixelStorei(GL_UNPACK_FLIP_Y_WEBGL, flipY ? 1 : 0);
  }

  // This assumes a texture is already bound
  void InstallLate(ChronosGL cgl, int type) {
    if (anisotropicFilterLevel != kNoAnisotropicFilterLevel) {
      cgl.texParameterf(
          type, GL_TEXTURE_MAX_ANISOTROPY_EXT, anisotropicFilterLevel + 0.0);
    }
    cgl.texParameteri(type, GL_TEXTURE_MAG_FILTER, magFilter);
    cgl.texParameteri(type, GL_TEXTURE_MIN_FILTER, minFilter);

    if (clamp) {
      // this fixes glitches on skybox seams
      cgl.texParameteri(type, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
      cgl.texParameteri(type, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);
    }
    if (mipmap) {
      cgl.generateMipmap(type);
    }

    if (shadow) {
      /*
      from: https://www.opengl.org/discussion_boards/showthread.php/180780-How-does-sampler2DArrayShadow-in-glsl-works

      Hardware depth comparisons happen internal to your texture lookup (i.e. texture() call).
      What you get back is not a filtered texture value, but rather a filtered depth comparison
      result (where the depth value you pass into the texturre call is compared against one or
      more texels). This gives you a filtered 0..1 visibility value, which is usually what you
      want anyway.
      */

      cgl.texParameteri(
          type, GL_TEXTURE_COMPARE_MODE, GL_COMPARE_REF_TO_TEXTURE);
    }
  }
}

final TextureProperties TexturePropertiesFramebuffer = TextureProperties()
  ..flipY = false
  ..clamp = true
  ..mipmap = false
  ..SetFilterNearest();

final TextureProperties TexturePropertiesFramebufferWrapped = TextureProperties()
  ..flipY = false
  ..clamp = false
  ..mipmap = false
  ..SetFilterNearest();

final TextureProperties TexturePropertiesVideo = TextureProperties()
  ..clamp = true;

// http://stackoverflow.com/questions/22419682/glsl-sampler2dshadow-and-shadow2d-clarification\
final TextureProperties TexturePropertiesShadowMap = TextureProperties()
  ..flipY = false
  ..clamp = true
  ..mipmap = false
  ..shadow = true;
//..SetFilterNearest();

final TextureProperties TexturePropertiesMipmap = TextureProperties()
  ..SetMipmapLinear();


bool IsCubeChildTextureType(int t) {
  switch (t) {
    case GL_TEXTURE_CUBE_MAP_NEGATIVE_X:
    case GL_TEXTURE_CUBE_MAP_POSITIVE_X:
    case GL_TEXTURE_CUBE_MAP_NEGATIVE_Y:
    case GL_TEXTURE_CUBE_MAP_POSITIVE_Y:
    case GL_TEXTURE_CUBE_MAP_NEGATIVE_Z:
    case GL_TEXTURE_CUBE_MAP_POSITIVE_Z:
      return true;
    default:
      return false;
  }
}

/// is the base class for all textures
class Texture {
  Texture(this._cgl, this._textureType, this._url, this.properties)
      : _texture = _cgl.createTexture();

  final String _url;
  final Object /* GL Texture */ _texture;
  final int _textureType;
  final ChronosGL _cgl;
  final TextureProperties properties;

  void CopyFromFramebuffer2D(int x, int y, int w, int h) {
    _cgl.bindTexture(_textureType, _texture);
    _cgl.copyTexImage2D(
        _textureType,
        0,
        GL_RGBA,
        x,
        y,
        w,
        h);
    Install();
  }

  void Install() {
    _cgl.bindTexture(_textureType, _texture);
    properties.InstallLate(_cgl, _textureType);
    int err = _cgl.getError();
    assert(err == GL_NO_ERROR);
  }

  int GetTextureType() => _textureType;

  Object /* gl Texture */ GetTexture() {
    return _texture;
  }

  @override
  String toString() {
    return "Texture[${_url}, ${_textureType}]";
  }
}

// https://www.khronos.org/registry/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
class TypedTexture extends Texture {
  TypedTexture(ChronosGL cgl, String url, this._width, this._height,
      this._internalFormat, TextureProperties prop)
      : super(cgl, GL_TEXTURE_2D, url, prop) {
    _cgl.bindTexture(_textureType, _texture);
    _cgl.texStorage2D(GL_TEXTURE_2D, 1, _internalFormat, _width, _height);
    properties.InstallLate(_cgl, _textureType);
    int err = _cgl.getError();
    assert(err == GL_NO_ERROR, "texture error ${err}");
    _cgl.bindTexture(_textureType, null);
  }

  final int _width;
  final int _height;
  final int _internalFormat;

  @override
  String toString() {
    return "TypedTexture[${_url}, ${_internalFormat}, ${_width} X ${_height}]";
  }
}

class TypedTextureMutable extends Texture {
  TypedTextureMutable(ChronosGL cgl,
      String url,
      this._width,
      this._height,
      this._internalFormat,
      TextureProperties prop,
      int format,
      int datatype,
      Object data)
      : super(cgl, GL_TEXTURE_2D, url, prop) {
    _cgl.bindTexture(_textureType, _texture);
    _cgl.texImage2D(
        GL_TEXTURE_2D,
        0,
        _internalFormat,
        _width,
        _height,
        0,
        format,
        datatype,
        data);
    properties.InstallLate(_cgl, _textureType);
    int err = _cgl.getError();
    assert(err == GL_NO_ERROR, "texture error ${err}");
    _cgl.bindTexture(_textureType, null);
  }

  final int _width;
  final int _height;
  final int _internalFormat;

  void UpdateContent(Object data, int format, int datatype) {
    _cgl.bindTexture(_textureType, _texture);
    _cgl.texImage2D(
        GL_TEXTURE_2D,
        0,
        _internalFormat,
        _width,
        _height,
        0,
        format,
        datatype,
        data);
    _cgl.bindTexture(_textureType, null);
  }

  void UpdateContentPartial(Object data, int formatType, int scalarType, int x,
      int y, int w, int h) {
    _cgl.bindTexture(_textureType, _texture);
    _cgl.texSubImage2D(
        GL_TEXTURE_2D,
        0,
        x,
        y,
        w,
        h,
        formatType,
        scalarType,
        data);
    _cgl.bindTexture(_textureType, null);
  }

  @override
  String toString() {
    return "TypedTextureMutable[${_url}, ${_internalFormat}, ${_width} X ${_height}]";
  }
}

// This sort of depends on dart:html but we use a dynamic type to disguise
// it.
// TODO: We want to call  Install() in the constructor but this does not
// seem to work for video elements.
class ImageTexture extends Texture {
  ImageTexture(ChronosGL cgl, String url, this._element,
      [TextureProperties tp, int textureType = GL_TEXTURE_2D])
      : super(cgl, textureType, url, tp == null ? TextureProperties() : tp) {
    _cgl.bindTexture(_textureType, _texture);

    properties.InstallEarly(_cgl, _textureType);
    SetImageData(_element);
    properties.InstallLate(_cgl, _textureType);
    int err = _cgl.getError();
    assert(err == GL_NO_ERROR);
    _cgl.bindTexture(_textureType, null);
  }

  dynamic _element; // CanvasElement, ImageElement, VideoElement

  void SetImageData(Object data) {
    _cgl.bindTexture(_textureType, _texture);
    _cgl.texImage2Dweb(
        _textureType, 0, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE, data);
  }

  void Update() {
    SetImageData(_element);
    _cgl.bindTexture(_textureType, null);
  }
}

const List<int> _kCubeModifier = [
  GL_TEXTURE_CUBE_MAP_NEGATIVE_X,
  GL_TEXTURE_CUBE_MAP_POSITIVE_X,
  GL_TEXTURE_CUBE_MAP_NEGATIVE_Y,
  GL_TEXTURE_CUBE_MAP_POSITIVE_Y,
  GL_TEXTURE_CUBE_MAP_NEGATIVE_Z,
  GL_TEXTURE_CUBE_MAP_POSITIVE_Z,
];

class CubeTexture extends Texture {
  CubeTexture(ChronosGL cgl, String url, List images)
      : super(
      cgl, GL_TEXTURE_CUBE_MAP, url, TextureProperties()
    ..clamp = true) {
    assert(images.length == _kCubeModifier.length);
    properties.InstallEarly(_cgl, _textureType);

    _cgl.bindTexture(_textureType, _texture);
    for (int i = 0; i < _kCubeModifier.length; ++i) {
      _cgl.texImage2Dweb(
          _kCubeModifier[i], 0, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE, images[i]);
    }
    properties.InstallLate(_cgl, _textureType);
    int err = _cgl.getError();
    assert(err == GL_NO_ERROR);
    _cgl.bindTexture(_textureType, null);

    // huh?
    properties.clamp = true;
  }
}
