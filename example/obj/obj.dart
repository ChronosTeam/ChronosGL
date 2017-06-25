import 'dart:html' as HTML;
import 'dart:async';
import 'dart:math' as Math;
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

String modelFile = "../ct_logo.obj";

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;

  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(25.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0)
    ..AdjustAspect(width, height);

  RenderProgram progDemo =
      new RenderProgram("demo", chronosGL, demoVertexShader, demoFragmentShader);

  MeshData ctLogo;
  Material material = new Material("mat")
    ..SetUniform(uColor, ColorGray8)
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity()..rotateX(Math.PI / 2));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    progDemo.Draw(ctLogo, [perspective, material]);
    HTML.window.animationFrame.then(animate);
  }

  List<Future<Object>> futures = [
    LoadRaw(modelFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Mesh
    GeometryBuilder gb = ImportGeometryFromWavefront(list[0]);
    ctLogo = GeometryBuilderToMeshData(modelFile, progDemo, gb);

    animate(0.0);
  });
}
