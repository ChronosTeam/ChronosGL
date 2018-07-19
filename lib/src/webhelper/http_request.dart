part of webhelper;

Future<String> LoadRaw(String url) {
  Completer<String> c = Completer();
  HTML.HttpRequest hr = HTML.HttpRequest();
  hr.open("GET", url);
  hr.onLoadEnd.listen((e) {
    c.complete(hr.response);
  });
  hr.send('');
  return c.future;
}

Future<Map> LoadJson(String url) {
  Completer<Map> c = Completer();
  HTML.HttpRequest hr = HTML.HttpRequest();
  hr.open("GET", url);
  hr.onLoadEnd.listen((e) {
    c.complete(json.decode(hr.response));
  });
  hr.send('');
  return c.future;
}

Future<HTML.ImageElement> LoadImage(String url) {
  Completer<HTML.ImageElement> c = Completer();
  HTML.ImageElement image = HTML.ImageElement();
  image.onLoad.first.then((_) => c.complete(image));
  image.src = url;
  return c.future;
}

Future<HTML.VideoElement> LoadVideo(String url) {
  Completer<HTML.VideoElement> c = Completer();
  HTML.VideoElement video = HTML.VideoElement();
  // this is crucial since we are waiting for "onplaying"
  video.autoplay = true;
  video.loop = true;
  video.onPlaying.first.then((_) => c.complete(video));
  video.src = url;
  return c.future;
}

final List<String> _kUrlInfix = ["nx", "px", "ny", "py", "nz", "pz"];

List<Future<HTML.ImageElement>> LoadCubeImages(
    String urlPrefix, String urlSuffix) {
  List<Future<HTML.ImageElement>> out = List<Future<HTML.ImageElement>>(6);
  for (int i = 0; i < _kUrlInfix.length; ++i) {
    Completer<HTML.ImageElement> c = Completer();
    HTML.ImageElement image = HTML.ImageElement();
    image.onLoad.first.then((_) => c.complete(image));
    image.src = urlPrefix + _kUrlInfix[i] + urlSuffix;
    out[i] = c.future;
  }
  return out;
}
