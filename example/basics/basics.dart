import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import "dart:async";

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram basic = phase.createProgram(createTexturedShader());

  final Material matWood = new Material("wood")
    ..SetUniform(uColor, ColorYellow);

  final Material matGradient = new Material("gradient")
    ..SetUniform(uColor, ColorRed);

  final Material matTrans = new Material("trans")
    ..SetUniform(uColor, ColorGray4)
    ..ForceUniform(cBlendEquation, BlendEquationStandard);

  {
    Node ico = new Node("sphere", ShapeIcosahedron(chronosGL, 3), matWood)
      ..setPos(0.0, 0.0, 0.0);
    basic.add(ico);
  }
  {
    Node cube = new Node("cube", ShapeCube(chronosGL), matGradient)
      ..setPos(-5.0, 0.0, -5.0);
    basic.add(cube);
  }

  {
    Node cyl = new Node(
        "cylinder", ShapeCylinder(chronosGL, 3.0, 6.0, 2.0, 32), matTrans)
      ..setPos(5.0, 0.0, -5.0);
    basic.add(cyl);
  }
  {
    Node quad = new Node("quad", ShapeQuad(chronosGL, 2), matTrans)
      //quad.blend_dFactor = chronosGL.blendConstants.ONE_MINUS_SRC_ALPHA;
      ..setPos(-5.0, 0.0, 5.0);
    basic.add(quad);
  }
  {
    Node torus = new Node(
        "torus", ShapeTorusKnot(chronosGL, radius: 1.0, tube: 0.4), matGradient)
      ..setPos(5.0, 0.0, 5.0);
    basic.add(torus);
  }

  RenderProgram sprites = phase.createProgram(createPointSpritesShader());
  sprites.add(Utils.MakeParticles(chronosGL, 2000));

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
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    List<DrawStats> stats = [];
    phase.draw([perspective], stats);
    List<String> out = [];
    for (DrawStats d in stats) {
      out.add(d.toString());
    }

    fps.UpdateFrameCount(timeMs, out.join("<br>"));

    HTML.window.animationFrame.then(animate);
  }

  List<Future<dynamic>> futures = [
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
