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
    HTML.VideoElement video = new HTML.VideoElement()..autoplay = true;
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
      : super(gl, textureType, url) {
    _Install();
  }

  CanvasTexture.SolidColor(
      WEBGL.RenderingContext gl, String url, String fillStyle,
      [textureType = WEBGL.TEXTURE_2D])
      : super(gl, textureType, url) {
    _canvas = MakeSolidColorCanvas(fillStyle);
    _Install();
  }

  void _Install() {
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
}

// The image must already be loaded
class ImageTexture extends Texture {
  HTML.ImageElement _image;

  ImageTexture(WEBGL.RenderingContext gl, String url, HTML.ImageElement img,
      [textureType = WEBGL.TEXTURE_2D])
      : super(gl, textureType, url) {
    _image = img;
    _Install();
  }

  void _Install() {
    // Check for CubeChild
    if (GetTextureType() != WEBGL.TEXTURE_2D) return;
    Bind(true);
    SetImageData(_image);
    UnBind(true);
  }
}

final List<String> _kUrlInfix = ["nx", "px", "ny", "py", "nz", "pz"];

List<Future<HTML.ImageElement>> LoadCubeImages(
    String urlPrefix, String urlSuffix) {
  List<Future<HTML.ImageElement>> out = new List<Future<HTML.ImageElement>>(6);
  for (int i = 0; i < _kUrlInfix.length; ++i) {
    Completer c = new Completer();
    HTML.ImageElement image = new HTML.ImageElement();
    image.onLoad.first.then((_) => c.complete(image));
    image.src = urlPrefix + _kUrlInfix[i] + urlSuffix;
    out[i] = c.future as Future<HTML.ImageElement>;
  }
  return out;
}


