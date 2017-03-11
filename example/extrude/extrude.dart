import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';

import 'package:vector_math/vector_math.dart' as VM;



void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  Perspective perspective = new Perspective(orbit);
  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram program = phase.createProgram(createSolidColorShader());
  final Material matWire = new Material("wire")
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));

  List<VM.Vector2> base = ContourCircle(20, 10.0);
  List<VM.Vector3> top = SimpleExtrusionAxisZ(base, 10.0);
  List<VM.Vector3> bot = SimpleExtrusionAxisZ(base, -10.0);

  GeometryBuilder gb = new GeometryBuilder();
  gb.AddFaces4Strip(top, bot, true);
  MeshData mdWire = GeometryBuilderToMeshDataWireframe("", chronosGL, gb);
   program.add(new Node("pipe", mdWire, matWire));

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    perspective.AdjustAspect(w, h);
    phase.viewPortW = w;
    phase.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

    animate(0.0);

}
