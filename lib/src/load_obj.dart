part of chronosgl;

Future<String> LoadRaw(String url) {
  Completer c = new Completer();
  HTML.HttpRequest hr = new HTML.HttpRequest();
  //hr.responseType = "arraybuffer";
  hr.open("GET", url);
  hr.onLoadEnd.listen((e) {
    c.complete(hr.response);
  });
  hr.send('');
  return c.future as Future<String>;
}

Future<String> LoadJson(String url) {
  Completer c = new Completer();
  HTML.HttpRequest hr = new HTML.HttpRequest();
  hr.open("GET", url);
  hr.onLoadEnd.listen((e) {
    c.complete(JSON.decode(hr.response));
  });
  hr.send('');
  return c.future as Future<String>;
}

Future<HTML.ImageElement> LoadImage(String url) {
  Completer c = new Completer();
  HTML.ImageElement image = new HTML.ImageElement();
  image.onLoad.first.then((_) => c.complete(image));
  image.src = url;
  return c.future as Future<HTML.ImageElement>;
}

Future<HTML.VideoElement> LoadVideo(String url) {
  Completer c = new Completer();
  HTML.VideoElement video = new HTML.VideoElement();
  // this is crucial since we are waiting for "onplaying"
  video.autoplay = true;
  video.loop = true;
  video.onPlaying.first.then((_) => c.complete(video));
  video.src = url;
  return c.future as Future<HTML.VideoElement>;
}

Future<HTML.VideoElement> MakeVideoElementFromCamera() {
  Completer c = new Completer();
  HTML.window.navigator
      .getUserMedia(video: true)
      .then((HTML.MediaStream stream) {
    HTML.VideoElement video = new HTML.VideoElement()
      ..autoplay = true;
    video.onPlaying.first.then((_) => c.complete(video));
    video.src = HTML.Url.createObjectUrl(stream);
  });
  return c.future as Future<HTML.VideoElement>;
}

HTML.CanvasElement MakeSolidColorCanvas(String fillStyle) {
  HTML.CanvasElement canvas = new HTML.CanvasElement(width: 2, height: 2);
  HTML.CanvasRenderingContext2D ctx = canvas.getContext('2d');
  ctx.fillStyle = fillStyle;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return canvas;
}

class CanvasTexture extends Texture {
  HTML.CanvasElement _canvas;

  CanvasTexture(WEBGL.RenderingContext gl, String url, this._canvas,
      [textureType = WEBGL.TEXTURE_2D])
      : super(gl, textureType, url);

  CanvasTexture.SolidColor(
      WEBGL.RenderingContext gl, String url, String fillStyle,
      [textureType = WEBGL.TEXTURE_2D])
      : super(gl, textureType, url) {
    _canvas = MakeSolidColorCanvas(fillStyle);
  }

  @override
  void Install() {
    // Check for CubeChild
    if (GetTextureType() != WEBGL.TEXTURE_2D) return;
    Bind(true);
    SetImageData(_canvas);
    UnBind(true);
  }

  void UpdateFromCanvas(WEBGL.RenderingContext gl) {
    Bind();
    SetImageData(_canvas);
    UnBind();
  }

  @override
  void InstallAsCubeChild() {
    SetImageData(_canvas);
  }
}

// The image must already be loaded
class ImageTextureLoaded extends Texture {
  HTML.ImageElement _image;

  ImageTextureLoaded(
      WEBGL.RenderingContext gl, String url, HTML.ImageElement img,
      [textureType = WEBGL.TEXTURE_2D])
      : super(gl, textureType, url) {
    _image = img;
    Install();
  }

  @override
  void Install() {
    // Check for CubeChild
    if (GetTextureType() != WEBGL.TEXTURE_2D) return;
    Bind(true);
    SetImageData(_image);
    UnBind(true);
  }

  @override
  void InstallAsCubeChild() {
    SetImageData(_image);
  }
}

class ImageTexture extends Texture {
  HTML.ImageElement _image;
  Future<dynamic> _future;

  ImageTexture(WEBGL.RenderingContext gl, String url,
      [textureType = WEBGL.TEXTURE_2D])
      : super(gl, textureType, url) {
    _image = new HTML.ImageElement();
    _future = _image.onLoad.first;
    _image.src = url;
  }

  @override
  void Install() {
    // Check for CubeChild
    if (GetTextureType() != WEBGL.TEXTURE_2D) return;
    Bind(true);
    SetImageData(_image);
    UnBind(true);
  }

  @override
  void InstallAsCubeChild() {
    SetImageData(_image);
  }

  @override
  Future<dynamic> GetFuture() {
    return _future;
  }
}

class CubeTexture extends Texture {
  List<Texture> _cubeChildren;

  CubeTexture(
      WEBGL.RenderingContext gl, String url, String prefix, String suffix)
      : super(gl, WEBGL.TEXTURE_CUBE_MAP, url) {
    _cubeChildren = [
      new ImageTexture(
          gl, prefix + "nx" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_X),
      new ImageTexture(
          gl, prefix + "px" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_X),
      new ImageTexture(
          gl, prefix + "ny" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Y),
      new ImageTexture(
          gl, prefix + "py" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Y),
      new ImageTexture(
          gl, prefix + "nz" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Z),
      new ImageTexture(
          gl, prefix + "pz" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Z),
    ];
    properties.clamp = true;
  }

  CubeTexture.fromTextures(
      WEBGL.RenderingContext gl, String url, List<Texture> texs)
      : super(gl, WEBGL.TEXTURE_CUBE_MAP, url) {
    _cubeChildren = texs;
    properties.clamp = true;
  }

  @override
  void Install() {
    Bind(true);
    for (Texture child in _cubeChildren) {
      child.InstallAsCubeChild();
    }
    UnBind(true);
  }
}
