library chronosutil;

import 'dart:html' as HTML;

const int _numBars = 90;
const int _graphHeight = 30;
const int _maxFps = 90;

class Stats {
  HTML.Element _root;
  HTML.Element _text;
  HTML.Element _extra;
  HTML.Element _graph;

  Stats(HTML.Element root, String fg, String bg) {
    if (root == null) throw "no element provided";
    _root = root;
    _root.style
      ..color = fg
      ..fontFamily = "Helvetica,Arial,sans-serif"
      ..fontSize = "9px"
      ..lineHeight = "15px"
      ..padding = "0 0 3px 3px"
      ..textAlign = "left"
      ..background = bg;

    _text = _MakeText("@@@@");
    _root.append(_text);

    _graph = _MakeGraph(fg, bg, _numBars, _graphHeight);
    _root.append(_graph);

    _extra = new HTML.Element.div();
    _root.append(_extra);
  }

  HTML.Element _MakeText(String initial) {
    HTML.Element text = new HTML.Element.div();
    text.style..fontWeight = "bold";
    text.text = initial;
    return text;
  }

  HTML.Element _MakeGraph(String fg, String bg, int bars, int height) {
    HTML.Element graph = new HTML.Element.div();
    graph.style
      ..width = "${bars}px"
      ..height = "${height}px"
      ..color = fg
      ..background = fg;

    for (int i = 0; i < bars; i++) {
      HTML.Element e = new HTML.Element.span();
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
  int _frames = 0;
  double _lastSample = 0.0;

  StatsFps(HTML.Element root, String fg, String bg) : super(root, fg, bg);

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
