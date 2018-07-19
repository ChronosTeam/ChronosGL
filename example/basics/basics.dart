import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import "dart:async";

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective, int num) {
  Scene scene = Scene(
      "stars",
      RenderProgram(
          "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader),
      [perspective]);
  scene.add(Utils.MakeParticles(scene.program, num));
  return scene;
}

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 1000.0);

  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);
  final Scene scene = Scene(
      "objects",
      RenderProgram(
          "textured", cgl, texturedVertexShader, texturedFragmentShader),
      [perspective]);
  phase.add(scene);

  // textures will be set after they are loaded
  final Material matWood = Material("wood")..SetUniform(uColor, ColorBlack);

  final Material matGradient = Material("gradient")
    ..SetUniform(uColor, ColorRed);

  final Material matTrans = Material("trans")
    ..SetUniform(uColor, ColorGray4)
    ..ForceUniform(cBlendEquation, BlendEquationStandard);

  {
    Node ico = Node("sphere", ShapeIcosahedron(scene.program, 3), matWood)
      ..setPos(0.0, 0.0, 0.0);
    scene.add(ico);
  }
  {
    Node cube = Node("cube", ShapeCube(scene.program), matGradient)
      ..setPos(-5.0, 0.0, -5.0);
    scene.add(cube);
  }

  {
    Node cyl = Node(
        "cylinder", ShapeCylinder(scene.program, 3.0, 6.0, 2.0, 32), matTrans)
      ..setPos(5.0, 0.0, -5.0);
    scene.add(cyl);
  }
  {
    Node quad = Node("quad", ShapeQuad(scene.program, 2), matTrans)
      ..setPos(-5.0, 0.0, 5.0);
    scene.add(quad);
  }
  {
    Node torus = Node(
        "torus",
        ShapeTorusKnot(scene.program, radius: 1.0, tubeRadius: 0.4),
        matGradient)
      ..setPos(5.0, 0.0, 5.0);
    scene.add(torus);
  }

  phase.add(MakeStarScene(cgl, perspective, 2000));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    List<DrawStats> stats = [];
    phase.Draw(stats);
    List<String> out = [];
    for (DrawStats d in stats) {
      out.add(d.toString());
    }

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs, out.join("<br>"));
  }

  List<Future<Object>> futures = [
    LoadImage("../gradient.jpg"),
    LoadImage("../transparent.png"),
    LoadImage("../wood.jpg"),
  ];

  Future.wait(futures).then((List list) {
    Texture gradient = ImageTexture(cgl, "../gradient.jpg", list[0]);
    matGradient.SetUniform(uTexture, gradient);
    Texture trans = ImageTexture(cgl, "../transparent.png", list[1]);
    matTrans.SetUniform(uTexture, trans);

    Texture wood = ImageTexture(cgl, "../wood.jpg", list[2]);
    matWood.SetUniform(uTexture, wood);
    animate(0.0);
  });
}
