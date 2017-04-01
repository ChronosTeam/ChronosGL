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
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);
  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram program = phase.createProgram(createSolidColorShader());
  final Material matWire = new Material("wire")
    ..SetUniform(uColor, ColorYellow);

  List<VM.Vector2> base = ContourCircle(20, 10.0);
  List<VM.Vector2> grad = GetContourGradient(base);

  MeshData MakeBevelMesh() {
    double width = gWidth.valueAsNumber + 0.0;
    double height = gHeight.valueAsNumber + 0.0;
    Easing easingWidth = MapStringToEasing[gEasingWidth.value];
    Easing easingHeight = MapStringToEasing[gEasingHeight.value];
    int segments = gSegments.valueAsNumber;
    List<VM.Vector2> supports =
        BevelSupportPoints(width, height, segments, widthEasing: easingWidth,
        heightEasing: easingHeight);
    List<List<VM.Vector3>> strips =
        BevelStrips(base, grad, supports, new VM.Matrix3.identity());
    GeometryBuilder gb = new GeometryBuilder();
    gb.AddFaces4Strips(strips, true);
    return GeometryBuilderToMeshDataWireframe("", chronosGL, gb);
  }

  Node node = new Node("pipe", MakeBevelMesh(), matWire);
  program.add(node);

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
    node.meshData = MakeBevelMesh();
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
