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

final List<Future<Object>> gLoadables = [];

Scene MakeMainScene(ChronosGL cgl, List<UniformGroup> uniforms) {
  final Scene scene = Scene(
      "objects",
      RenderProgram(
          "textured", cgl, texturedVertexShader, texturedFragmentShader),
      uniforms);
  // textures will be set after they are loaded
  final Material matWood = Material("wood")..SetUniform(uColor, ColorBlack);
  var f3 = LoadImage("../wood.jpg")
    ..then((HTML.ImageElement img) {
      Texture wood = ImageTexture(cgl, "../wood.jpg", img);
      matWood.SetUniform(uTexture, wood);
    });
  gLoadables.add(f3);

  final Material matGradient = Material("gradient")
    ..SetUniform(uColor, ColorRed);
  var f1 = LoadImage("../gradient.jpg")
    ..then((HTML.ImageElement img) {
      Texture gradient = ImageTexture(cgl, "../gradient.jpg", img);
      matGradient.SetUniform(uTexture, gradient);
    });
  gLoadables.add(f1);

  final Material matTrans = Material("trans")
    ..SetUniform(uColor, ColorGray4)
    ..ForceUniform(cBlendEquation, BlendEquationStandard);
  var f2 = LoadImage("../transparent.png")
    ..then((HTML.ImageElement img) {
      Texture trans = ImageTexture(cgl, "../transparent.png", img);
      matTrans.SetUniform(uTexture, trans);
    });
  gLoadables.add(f2);

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

  phase.add(MakeMainScene(cgl, [perspective]));
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

  Future.wait(gLoadables).then((List list) {
    animate(0.0);
  });
}
