import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");
  HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  ChronosGL cgl = ChronosGL(canvas);

  OrbitCamera orbit = OrbitCamera(25.0, 10.0, 0.0, canvas);
  double d = 20.0;

  RenderProgram prog = RenderProgram(
      "textured", cgl, solidColorVertexShader, solidColorFragmentShader);

  Orthographic orthographic = Orthographic(orbit, -d, d, -d, -d, 100.0);
  RenderPhase phaseOrthograhic = RenderPhase("shadow", cgl);
  Scene sceneOrthographic = Scene("objects", prog, [orthographic]);
  phaseOrthograhic.add(sceneOrthographic);

  Perspective perspective = Perspective(orbit, 0.1, 1000.0);
  RenderPhase phasePerspective = RenderPhase("perspective", cgl);
  phasePerspective.clearColorBuffer = false;
  Scene scenePerspective = Scene("objects", prog, [perspective]);
  phasePerspective.add(scenePerspective);

  final Material mat1 = Material("mat1")..SetUniform(uColor, ColorBlue);
  final Material mat2 = Material("mat2")..SetUniform(uColor, ColorRed);
  final Material mat3 = Material("mat3")..SetUniform(uColor, ColorGreen);
  final Material mat4 = Material("mat4")..SetUniform(uColor, ColorCyan);
  final Material mat5 = Material("plane")..SetUniform(uColor, ColorGray8);

  final List<Node> nodes = [
    Node("sphere", ShapeIcosahedron(prog, subdivisions: 3), mat1)
      ..setPos(0.0, 0.0, 0.0),
    Node("cube", ShapeCube(prog), mat2)..setPos(-5.0, 0.0, -5.0),
    Node("cylinder", ShapeCylinder(prog, 3.0, 6.0, 2.0, 32), mat3)
      ..setPos(5.0, 0.0, -5.0),
    Node("torus", ShapeTorusKnot(prog, radius: 1.0, tubeRadius: 0.4), mat4)
      ..setPos(5.0, 0.0, 5.0),
    Node("cube", ShapeCube(prog, x: 20.0, y: 0.1, z: 20.0), mat5)
      ..setPos(0.0, -10.0, 0.0),
  ];

  for (Node n in nodes) {
    sceneOrthographic.add(n);
    scenePerspective.add(n);
  }

  // This sets the viewports among other things
  void resolutionChange(HTML.Event? ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    w = w ~/ 2;
    perspective.AdjustAspect(w, h);
    orthographic.AdjustAspect(w, h);
    phaseOrthograhic.viewPortW = w;
    phaseOrthograhic.viewPortH = h;
    phasePerspective.viewPortW = w;
    phasePerspective.viewPortH = h;
    phaseOrthograhic.viewPortX = phasePerspective.viewPortW;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    //orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phaseOrthograhic.Draw();
    phasePerspective.Draw();
    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  animate(0.0);
}
