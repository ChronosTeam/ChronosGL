import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'package:vector_math/vector_math.dart' as VM;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  Perspective perspective = new Perspective(orbit);

  RenderPhase phase = new RenderPhase("main", chronosGL.gl);
  RenderProgram basic = phase.createProgram(createTexturedShader());

  //TextureWrapper red = new TextureWrapper.SolidColor("red", "rgba(255,0,0,1)");
  Texture gradient = new ImageTexture("../gradient.jpg");
  Texture trans = new ImageTexture("../transparent.png");
  Texture wood = new ImageTexture("../wood.jpg");

  final Material matWood = new Material("wood")
    ..SetUniform(uTextureSampler, wood)
    ..SetUniform(uColor, new VM.Vector3(1.0, 0.9, 0.0));

  final Material matGradient = new Material("gradient")
    ..SetUniform(uColor, new VM.Vector3(1.0, 0.0, 0.0))
    ..SetUniform(uTextureSampler, gradient);

  final Material matTrans = new Material("trans")
    ..SetUniform(uTextureSampler, trans)
    ..blend = true;

  {
    Node ico = new Node("sphere", ShapeIcosahedron(chronosGL.gl, 3), matWood)
      ..setPos(0.0, 0.0, 0.0);
    basic.add(ico);
  }
  {
    Node cube = new Node("cube", ShapeCube(chronosGL.gl), matGradient)
      ..setPos(-5.0, 0.0, -5.0);
    basic.add(cube);
  }

  {
    Node cyl =
        new Node("cylinder", ShapeCylinder(chronosGL.gl, 3.0, 6.0, 2.0, 32), matTrans)
          ..setPos(5.0, 0.0, -5.0);
    basic.add(cyl);
  }
  {
    Node quad = new Node("quad", ShapeQuad(chronosGL.gl, 2), matTrans)
      //quad.blend_dFactor = chronosGL.blendConstants.ONE_MINUS_SRC_ALPHA;
      ..setPos(-5.0, 0.0, 5.0);
    basic.add(quad);
  }
  {
    Node torus =
        new Node("torus", ShapeTorusKnot(chronosGL.gl, radius: 1.0, tube: 0.4), matGradient)
          ..setPos(5.0, 0.0, 5.0);
    basic.add(torus);
  }

  RenderProgram sprites = phase.createProgram(createPointSpritesShader());
  sprites.add(Utils.MakeParticles(chronosGL.gl, 2000));

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

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
