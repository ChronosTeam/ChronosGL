part of webhelper;

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

// TODO: deprecated, use WebTexture instead
class CanvasTexture extends Texture {
  HTML.CanvasElement _canvas;

  CanvasTexture(WEBGL.RenderingContext gl, String url, this._canvas,
      [textureType = WEBGL.TEXTURE_2D])
      : super(gl, textureType, url, new TextureProperties()) {
    _Install();
  }

  CanvasTexture.SolidColor(
      WEBGL.RenderingContext gl, String url, String fillStyle,
      [textureType = WEBGL.TEXTURE_2D])
      : super(gl, textureType, url, new TextureProperties()) {
    _canvas = MakeSolidColorCanvas(fillStyle);
    _Install();
  }

  void _Install() {
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



