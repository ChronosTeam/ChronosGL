import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';

import 'package:vector_math/vector_math.dart' as VM;

final HTML.InputElement gWidth =
    HTML.document.querySelector('#width') as HTML.InputElement;
final HTML.InputElement gHeight =
    HTML.document.querySelector('#height') as HTML.InputElement;
final HTML.InputElement gSegments =
    HTML.document.querySelector('#segments') as HTML.InputElement;

final HTML.SelectElement gEasingWidth =
    HTML.document.querySelector('#easingWidth') as HTML.SelectElement;
final HTML.SelectElement gEasingHeight =
    HTML.document.querySelector('#easingHeight') as HTML.SelectElement;
final List<VM.Vector2> gBase = ContourCircle(20, 10.0);
final List<VM.Vector2> gGrad = GetContourGradient(gBase);

MeshData MakeBevelMesh(RenderProgram prog) {
  double width = gWidth.valueAsNumber! + 0.0;
  double height = gHeight.valueAsNumber! + 0.0;
  Easing easingWidth = MapStringToEasing[gEasingWidth.value]!;
  Easing easingHeight = MapStringToEasing[gEasingHeight.value]!;
  int segments = gSegments.valueAsNumber!.toInt();
  List<VM.Vector2> supports = BevelSupportPoints(width, height, segments,
      widthEasing: easingWidth, heightEasing: easingHeight);
  List<List<VM.Vector3>> strips =
      BevelStrips(gBase, gGrad, supports, VM.Matrix3.identity());
  GeometryBuilder gb = GeometryBuilder();
  gb.AddFaces4Strips(strips, true);
  return GeometryBuilderToMeshDataWireframe("", prog, gb);
}

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");

  HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  ChronosGL cgl = ChronosGL(canvas);

  OrbitCamera orbit = OrbitCamera(25.0, 10.0, 0.0, canvas);
  final PerspectiveResizeAware perspective =
      PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);
  final RenderProgram prog = RenderProgram(
      "basic", cgl, solidColorVertexShader, solidColorFragmentShader);

  final Material matWire = Material("wire")
    ..SetUniform(uColor, ColorYellow)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    // For simplicity we create a new mesh every frame.
    MeshData wire = MakeBevelMesh(prog);
    orbit.animate(elapsed);
    prog.Draw(wire, [perspective, matWire]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  animate(0.0);
}
