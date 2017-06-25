import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';

import 'package:vector_math/vector_math.dart' as VM;

final HTML.InputElement gWidth = HTML.document.querySelector('#width');
final HTML.InputElement gHeight = HTML.document.querySelector('#height');
final HTML.InputElement gSegments = HTML.document.querySelector('#segments');

final HTML.SelectElement gEasingWidth =
    HTML.document.querySelector('#easingWidth');
final HTML.SelectElement gEasingHeight =
    HTML.document.querySelector('#easingHeight');

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  int w = canvas.clientWidth;
  int h = canvas.clientHeight;
  canvas.width = w;
  canvas.height = h;
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0)
    ..AdjustAspect(w, h);
  RenderProgram prog = new RenderProgram(
      "basic", chronosGL, solidColorVertexShader, solidColorFragmentShader);

  final Material matWire = new Material("wire")
    ..SetUniform(uColor, ColorYellow)
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity());

  List<VM.Vector2> base = ContourCircle(20, 10.0);
  List<VM.Vector2> grad = GetContourGradient(base);

  MeshData MakeBevelMesh(RenderProgram prog) {
    double width = gWidth.valueAsNumber + 0.0;
    double height = gHeight.valueAsNumber + 0.0;
    Easing easingWidth = MapStringToEasing[gEasingWidth.value];
    Easing easingHeight = MapStringToEasing[gEasingHeight.value];
    int segments = gSegments.valueAsNumber;
    List<VM.Vector2> supports = BevelSupportPoints(width, height, segments,
        widthEasing: easingWidth, heightEasing: easingHeight);
    List<List<VM.Vector3>> strips =
        BevelStrips(base, grad, supports, new VM.Matrix3.identity());
    GeometryBuilder gb = new GeometryBuilder();
    gb.AddFaces4Strips(strips, true);
    return GeometryBuilderToMeshDataWireframe("", prog, gb);
  }


  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    MeshData wire = MakeBevelMesh(prog);
    orbit.animate(elapsed);
    prog.Draw(wire, [perspective, matWire]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs);
  }

  animate(0.0);
}
