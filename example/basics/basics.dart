import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import "dart:async";

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective, int num) {
  Scene scene = new Scene(
      "stars",
      new RenderProgram(
          "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader),
      [perspective]);
  scene.add(Utils.MakeParticles(scene.program, num));
  return scene;
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  final RenderPhaseResizeAware phase =
      new RenderPhaseResizeAware("main", cgl, canvas, perspective);
  final Scene scene = new Scene(
      "objects",
      new RenderProgram(
          "textured", cgl, texturedVertexShader, texturedFragmentShader),
      [perspective]);
  phase.add(scene);

  // textures will be set after they are loaded
  final Material matWood = new Material("wood")..SetUniform(uColor, ColorBlack);

  final Material matGradient = new Material("gradient")
    ..SetUniform(uColor, ColorRed);

  final Material matTrans = new Material("trans")
    ..SetUniform(uColor, ColorGray4)
    ..ForceUniform(cBlendEquation, BlendEquationStandard);

  {
    Node ico = new Node("sphere", ShapeIcosahedron(scene.program, 3), matWood)
      ..setPos(0.0, 0.0, 0.0);
    scene.add(ico);
  }
  {
    Node cube = new Node("cube", ShapeCube(scene.program), matGradient)
      ..setPos(-5.0, 0.0, -5.0);
    scene.add(cube);
  }

  {
    Node cyl = new Node(
        "cylinder", ShapeCylinder(scene.program, 3.0, 6.0, 2.0, 32), matTrans)
      ..setPos(5.0, 0.0, -5.0);
    scene.add(cyl);
  }
  {
    Node quad = new Node("quad", ShapeQuad(scene.program, 2), matTrans)
      ..setPos(-5.0, 0.0, 5.0);
    scene.add(quad);
  }
  {
    Node torus = new Node(
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
    Texture gradient = new ImageTexture(cgl, "../gradient.jpg", list[0]);
    matGradient.SetUniform(uTexture, gradient);
    Texture trans = new ImageTexture(cgl, "../transparent.png", list[1]);
    matTrans.SetUniform(uTexture, trans);

    Texture wood = new ImageTexture(cgl, "../wood.jpg", list[2]);
    matWood.SetUniform(uTexture, wood);
    animate(0.0);
  });
}
