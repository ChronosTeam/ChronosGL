import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import "dart:async";

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective,int num) {
  Scene scene = new Scene(
      "stars",
      new RenderProgram("stars", cgl, pointSpritesVertexShader,
          pointSpritesFragmentShader),
      [perspective]);
  scene.add(Utils.MakeParticles(scene.program, num));
  return scene;
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  Scene scene = new Scene(
      "objects",
      new RenderProgram(
          "textured", chronosGL, texturedVertexShader, texturedFragmentShader),
      [perspective]);
  phase.add(scene);

  final Material matWood = new Material("wood")
    ..SetUniform(uColor, ColorBlack);

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
      //quad.blend_dFactor = chronosGL.blendConstants.ONE_MINUS_SRC_ALPHA;
      ..setPos(-5.0, 0.0, 5.0);
    scene.add(quad);
  }
  {
    Node torus = new Node("torus",
        ShapeTorusKnot(scene.program, radius: 1.0, tube: 0.4), matGradient)
      ..setPos(5.0, 0.0, 5.0);
    scene.add(torus);
  }

  phase.add(MakeStarScene(chronosGL, perspective, 2000));

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
    fps.UpdateFrameCount(timeMs, out.join("<br>"));
  }

  List<Future<Object>> futures = [
    LoadImage("../gradient.jpg"),
    LoadImage("../transparent.png"),
    LoadImage("../wood.jpg"),
  ];

  Future.wait(futures).then((List list) {
    Texture gradient = new ImageTexture(chronosGL, "../gradient.jpg", list[0]);
    matGradient.SetUniform(uTexture, gradient);
    Texture trans = new ImageTexture(chronosGL, "../transparent.png", list[1]);
    matTrans.SetUniform(uTexture, trans);

    Texture wood = new ImageTexture(chronosGL, "../wood.jpg", list[2]);
    matWood.SetUniform(uTexture, wood);
    animate(0.0);
  });
}
