import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import "dart:async";
import "package:js/js.dart";
//cimport 'dart:js';

void Ready(succ) {
  print("READY ${succ.inputs.values}");

  for (dynamic k in succ.inputs.keys) {
    print("$k ${succ.inputs[k]}");
  }
}

void main() async {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  dynamic a = HTML.window.navigator.requestMidiAccess();
  print("@@ PROMISE >>>> $a");

  a.then(allowInterop(Ready));

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
