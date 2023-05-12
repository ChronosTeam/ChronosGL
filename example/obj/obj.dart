import 'dart:html' as HTML;
import 'dart:async';
import 'dart:math' as Math;
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

const String modelFile = "../ct_logo.obj";

final List<Future<Object>> gLoadables = [];

void main() {
  final StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  final ChronosGL cgl = ChronosGL(canvas);
  final OrbitCamera orbit = OrbitCamera(25.0, 0.0, 0.0, canvas);
  final PerspectiveResizeAware perspective =
      PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  final RenderProgram progDemo =
      RenderProgram("demo", cgl, demoVertexShader, demoFragmentShader);

  late MeshData ctLogo; // we be initialized when loaded
  var future = LoadRaw(modelFile)
    ..then((String content) {
      GeometryBuilder gb = ImportGeometryFromWavefront(content);
      ctLogo = GeometryBuilderToMeshData("", progDemo, gb);
    });
  gLoadables.add(future);

  final Material material = Material("mat")
    ..SetUniform(uColor, ColorGray8)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity()..rotateX(Math.pi / 2));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    progDemo.Draw(ctLogo, [perspective, material]);
    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  Future.wait(gLoadables).then((List list) {
    animate(0.0);
  });
}
