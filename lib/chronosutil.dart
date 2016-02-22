library chronosutil;

import 'dart:html';

const int _numBars = 90;
const int _graphHeight = 30;
const int _maxFps = 90;

class Stats {
  Element _root;
  Element _text;
  Element _graph;

  Stats(Element root, String fg, String bg) {
    if (root == null) throw "no element provided";
    _root = root;
    _root.style
      ..padding = "0 0 3px 3px"
      ..textAlign = "left"
      ..background = bg;
    _text = new Element.div();
    _text.style
      ..fontFamily = "Helvetica,Arial,sans-serif"
      ..fontSize = "9px"
      ..fontWeight = "bold"
      ..lineHeight = "15px"
      ..color = fg;
    _text.text = "@@@@@";
    _root.append(_text);
    _graph = new Element.div();
    _graph.style
      ..width = "${_numBars}px"
      ..height = "${_graphHeight}px"
      ..background = fg;

    _root.append(_graph);
    for (int i = 0; i < _numBars; i++) {
      Element e = new Element.span();
      e.style
        ..width = "1px"
        ..height = "${_graphHeight}px"
        ..float = "left"
        ..opacity = "0.9"
        ..background = bg;
      _graph.append(e);
    }
  }

  void AddRawValue(int v) {
    if (v < 0) v = 0;
    if (v > _graphHeight) v = _graphHeight;
    Element e = _graph.firstChild;
    e.style.height = "${v}px";
    _graph.append(e);
  }
}

const double SAMPLE_RATE_MS = 1000.0;

class StatsFps extends Stats {
  int _frames = 0;
  double _lastSample = 0.0;

  void UpdateFrameCount(double now) {
  
    _frames++;
    if ((now - _lastSample) < SAMPLE_RATE_MS) return;
    double fps = _frames * 1000.0 / SAMPLE_RATE_MS;
    print("${fps}");
    _frames = 0;
    _lastSample = now;
    _text.text = fps.toStringAsFixed(2) + " fps";
    AddRawValue(_graphHeight * fps.ceil() ~/ _maxFps);
  }
  
  StatsFps(Element root, String fg, String bg) : super(root, fg, bg) {
    
  }
}
