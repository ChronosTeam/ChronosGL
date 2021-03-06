import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:math' as Math;

Node Triangle(RenderProgram program) {
  final Material mat1 = Material("mat1")..SetUniform(uColor, ColorBlue);

  final Material mat2 = Material("mat2")..SetUniform(uColor, ColorRed);

  final Material mat3 = Material("mat3")..SetUniform(uColor, ColorGreen);

  double thickness = 3.0;
  double length = 5.0 * thickness;

  Node side1 = Node(
      "side1", ShapeCube(program, x: length, y: thickness, z: thickness), mat1)
    ..setPos(-thickness, 0.0, 0.0);

  Node side2 = Node(
      "side2", ShapeCube(program, x: thickness, y: thickness, z: length), mat2)
    ..setPos(-length, 0.0, length + thickness);

  double length3 = length - thickness;
  Node side3a = Node("side3a",
      ShapeCube(program, x: thickness, y: length3, z: thickness), mat3)
    ..setPos(length, length3 - 1 * thickness, 0.0);

  Node side3b = Node("side3b",
      ShapeWedge(program, x: thickness, y: thickness, z: thickness), mat3)
    ..rotY(Math.pi)
    ..setPos(length, length + length3 - thickness, 0.0);

  return Node.Container("triangle")
    ..add(side1)
    ..add(side2)
    ..add(side3a)
    ..add(side3b)
    ..moveDown(20.0);
}

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas);

  OrbitCamera orbit = OrbitCamera(20.0, 0.0, 0.0, canvas);
  double d = 40.0;
  Orthographic orthographic = Orthographic(orbit, -d, d, -d, -d, 100.0);
  RenderPhase phase = RenderPhase("shadow", cgl);

  Scene scene = Scene(
      "objects",
      RenderProgram(
          "textured", cgl, solidColorVertexShader, solidColorFragmentShader),
      [orthographic]);
  phase.add(scene);

  scene.add(Triangle(scene.program));

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    orthographic.AdjustAspect(w, h);
    phase.viewPortW = w;
    phase.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  // 35deg is slightly too large.
  // Need to find a math reference for actual real angle.
  // E.g.: http://www.cse.ust.hk/~pang/papers/Impossible_Figures_ToG.pdf
  orbit.polar = 35.0 * Math.pi / 180.0;
  orbit.azimuth = -45.0 * Math.pi / 180.0;
  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    //orbit.azimuth += 0.001;
    //orbit.rotZ(0.001);
    orbit.animate(elapsed);
    orbit.roll += 0.01;
    double polar = orbit.polar * 180.0 / Math.pi;
    double azimuth = orbit.azimuth * 180.0 / Math.pi;
    phase.Draw();

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs, "${polar}<br>${azimuth}");
  }

  animate(0.0);
}
