import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import "dart:async";
import "package:js/js.dart";
//cimport 'dart:js';

void Ready(HTML.MidiAccess succ) {
  print("INPUTS ${succ.inputs}");
  print("OUTPUTS ${succ.outputs}");
}

void main() async {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  dynamic a = HTML.window.navigator.requestMidiAccess();
  print("@@ PROMISE >>>> $a");

  a.then(Ready);

  double _lastTimeMs = 0.0;

  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;

    List<String> out = [];
    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs, out.join("<br>"));
  }

  animate(0.0);
}
