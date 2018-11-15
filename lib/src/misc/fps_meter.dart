part of misc;

const int _numBars = 90;
const int _graphHeight = 30;
const int _maxFps = 90;

HTML.Element _MakeText(String initial) {
  HTML.Element text = HTML.Element.div();
  text.style..fontWeight = "bold";
  text.text = initial;
  return text;
}

HTML.Element _MakeGraph(String fg, String bg, int bars, int height) {
  HTML.Element graph = HTML.Element.div();
  graph.style
    ..width = "${bars}px"
    ..height = "${height}px"
    ..color = fg
    ..background = fg;

  for (int i = 0; i < bars; i++) {
    HTML.Element e = HTML.Element.span();
    e.style
      ..width = "1px"
      ..height = "${height}px"
      ..float = "left"
      ..opacity = "0.9"
      ..background = bg;
    graph.append(e);
  }
  return graph;
}

class Stats {
  Stats(this._root, String fg, String bg)
      : _graph = _MakeGraph(fg, bg, _numBars, _graphHeight) {
    if (_root == null) throw "no element provided";
    _root.style
      ..color = fg
      ..fontFamily = "Helvetica,Arial,sans-serif"
      ..fontSize = "9px"
      ..lineHeight = "15px"
      ..padding = "0 0 3px 3px"
      ..textAlign = "left"
      ..background = bg;

    _root.append(_text);
    _root.append(_graph);
    _root.append(_extra);
  }

  final HTML.Element _root;
  final HTML.Element _text = _MakeText("@@@@");
  final HTML.Element _extra = HTML.Element.div();
  final HTML.Element _graph;

  void ChangeExtra(String s) {
    _extra.innerHtml = s;
  }

  void AddRawValue(int v) {
    if (v < 0) v = 0;
    if (v > _graphHeight) v = _graphHeight;
    HTML.Element e = _graph.firstChild;
    e.style.height = "${v}px";
    _graph.append(e);
  }
}

const double _SAMPLE_RATE_MS = 1000.0;

class StatsFps extends Stats {
  StatsFps(HTML.Element root, String fg, String bg) : super(root, fg, bg);

  int _frames = 0;
  double _lastSample = 0.0;

  void UpdateFrameCount(double now, [String extra = ""]) {
    _frames++;
    if ((now - _lastSample) < _SAMPLE_RATE_MS) return;
    double fps = _frames * 1000.0 / _SAMPLE_RATE_MS;
    //print("${fps}");
    _frames = 0;
    _lastSample = now;
    _text.text = fps.toStringAsFixed(2) + " fps";
    _extra.innerHtml = extra;
    AddRawValue(_graphHeight * fps.ceil() ~/ _maxFps);
  }
}
