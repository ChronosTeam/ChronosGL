part of core;

const int GL_CLEAR_ALL =
GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT | GL_STENCIL_BUFFER_BIT;

int TextureChannelsByType(int format) {
  switch (format) {
    case GL_LUMINANCE:
      return 1;
    case GL_LUMINANCE_ALPHA:
      return 2;
    case GL_RGB:
      return 3;
    case GL_RGBA:
      return 4;
    default:
      assert(false);
      return -1;
  }
}

String _FormatName(int format) {
  switch (format) {
    case GL_LUMINANCE:
      return "GL_LUMINANCE";
    case GL_LUMINANCE_ALPHA:
      return "GL_LUMINANCE_ALPHA";
    case GL_RGB:
      return "GL_RGB";
    case GL_RGBA:
      return "GL_RGBA";
    default:
      return "${format}";
  }
}

String _TypeName(int code) {
  switch (code) {
    case GL_UNSIGNED_BYTE:
      return "GL_UNSIGNED_BYTE";
    case GL_FLOAT:
      return "GL_FLOAT";
    default:
      return "${code}";
  }
}

class FramebufferFormat {
  final int format;
  int channels;
  final int type;

  FramebufferFormat(this.format, this.channels, this.type);

  FramebufferFormat.fromActive(ChronosGL cgl)
      : format = cgl.getParameter(GL_IMPLEMENTATION_COLOR_READ_FORMAT),
        type = cgl.getParameter(GL_IMPLEMENTATION_COLOR_READ_TYPE) {
    channels = TextureChannelsByType(format);
  }

  @override
  String toString() {
    return "FB-FMT: ${_FormatName(format)} [${channels}] ${_TypeName(type)}";
  }
}


int _ChannelsToFormat(int channels) {
  switch (channels) {
    case 4:
      return GL_RGBA;
    case 2:
      return GL_RG;
    default:
      assert(false);
      return -1;
  }
}

class Framebuffer {
  ChronosGL _cgl;

  dynamic /* gl Framebuffer */ _framebuffer;
  Texture colorTexture;
  Texture depthTexture;
  Texture stencilTexture;

  Framebuffer(this._cgl, this.colorTexture,
      [this.depthTexture,
        this.stencilTexture,
        bool depthStencilCombined = false]) {
    _framebuffer = _cgl.createFramebuffer();

    _cgl.bindFramebuffer(GL_FRAMEBUFFER, _framebuffer);
    if (colorTexture != null) {
      _cgl.framebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0,
          GL_TEXTURE_2D, colorTexture.GetTexture(), 0);
    }
    if (depthTexture != null) {
      _cgl.framebufferTexture2D(
          GL_FRAMEBUFFER,
          depthStencilCombined
              ? GL_DEPTH_STENCIL_ATTACHMENT
              : GL_DEPTH_ATTACHMENT,
          GL_TEXTURE_2D,
          depthTexture.GetTexture(),
          0);
    }
    if (stencilTexture != null) {
      assert(!depthStencilCombined,
      "in combined mode - the stencil parameter must be null");
      _cgl.framebufferTexture2D(GL_FRAMEBUFFER, GL_STENCIL_ATTACHMENT,
          GL_TEXTURE_2D, stencilTexture.GetTexture(), 0);
    }

    int err = _cgl.checkFramebufferStatus(GL_FRAMEBUFFER);
    assert(err == GL_FRAMEBUFFER_COMPLETE, "framebuffer error: ${err}");
    if (err != GL_FRAMEBUFFER_COMPLETE) {
      throw "Error Incomplete Framebuffer: ${err}";
    }
    _cgl.bindFramebuffer(GL_FRAMEBUFFER, null);
  }

  Framebuffer.Screen(this._cgl) : _framebuffer = null;

  Framebuffer.Default(ChronosGL cgl, int w, int h)
      : this(
      cgl,
      TypedTexture(cgl, "frame::color", w, h, GL_RGBA8,
          TexturePropertiesFramebuffer),
      TypedTexture(cgl, "frame::depth", w, h, GL_DEPTH_COMPONENT24,
          TexturePropertiesFramebuffer));

  void Activate(int clear_mode, int viewPortX, int viewPortY, int viewPortW,
      int viewPortH) {
    _cgl.bindFramebuffer(GL_FRAMEBUFFER, _framebuffer);

    assert(viewPortW > 0 && viewPortH > 0);
    _cgl.viewport(viewPortX, viewPortY, viewPortW, viewPortH);

    if (clear_mode != 0) {
      _cgl.clear(clear_mode);
    }
  }

  /// If buf is non-null it must have size 4*w*h elements
  Float32List ExtractFloatData(Float32List buf, int x, int y, int w, int h) {
    _cgl.bindFramebuffer(GL_FRAMEBUFFER, _framebuffer);
    if (buf == null) {
      buf = Float32List(4 * w * h);
    }
    _cgl.readPixels(
        x,
        y,
        w,
        h,
        GL_RGBA,
        GL_FLOAT,
        buf);
    _cgl.bindFramebuffer(GL_FRAMEBUFFER, null);
    return buf;
  }

  /// If buf is non-null it must have size 4*w*h elements
  Uint8List ExtractByteData(Uint8List buf, int x, int y, int w, int h) {
    _cgl.bindFramebuffer(GL_FRAMEBUFFER, _framebuffer);
    if (buf == null) {
      buf = Uint8List(4 * w * h);
    }
    _cgl.readPixels(
        x,
        y,
        w,
        h,
        GL_RGBA,
        GL_UNSIGNED_BYTE,
        buf);
    _cgl.bindFramebuffer(GL_FRAMEBUFFER, null);
    return buf;
  }
}
