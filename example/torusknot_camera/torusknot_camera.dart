import 'dart:html' as HTML;
import 'dart:math' as Math;
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

VM.Vector3 p1 = new VM.Vector3.zero();

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective, int num) {
  Scene scene = new Scene(
      "stars",
      new RenderProgram(
          "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader),
      [perspective]);
  scene.add(Utils.MakeParticles(scene.program, num));
  return scene;
}

void updateTorusTexture(double time, HTML.CanvasElement canvas) {
  HTML.CanvasRenderingContext2D ctx = canvas.getContext('2d');
  double sint = Math.sin(time);
  double n = (sint + 1) / 2;
  ctx.rect(0, 0, canvas.width, canvas.height);
  HTML.CanvasGradient grad = ctx.createLinearGradient(0, 0, canvas.width * n, canvas.height);
  double cs1 = (360 * n).floorToDouble();
  double cs2 = (90 * n).floorToDouble();
  grad.addColorStop(0, 'hsla($cs1, 100%, 40%, 1)');
  grad.addColorStop(0.2, 'black');
  grad.addColorStop(0.3, 'black');
  grad.addColorStop(0.5, 'hsla($cs2, 100%, 40%, 1)');
  grad.addColorStop(0.7, 'black');
  grad.addColorStop(0.9, 'black');
  grad.addColorStop(1, 'hsla($cs1, 100%, 40%, 1)');
  ctx.fillStyle = grad;
  ctx.fill();
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  TorusKnotCamera tkc = new TorusKnotCamera();
  Perspective perspective = new Perspective(tkc, 0.1, 1000.0);
  RenderPhase phase = new RenderPhase("main", chronosGL);

  Scene scene = new Scene(
      "objects",
      new RenderProgram(
          "textured", chronosGL, texturedVertexShader, texturedFragmentShader),
      [perspective]);
  phase.add(scene);

  int d = 512;
  HTML.CanvasElement canvas2d = new HTML.CanvasElement(width: d, height: d);

  updateTorusTexture(0.0, canvas2d);
  Texture generatedTexture = new ImageTexture(chronosGL, "gen", canvas2d);

  // Maybe disable depth test?
  Material mat = new Material.Transparent("torus", BlendEquationStandard)
    ..SetUniform(uTexture, generatedTexture)
    ..SetUniform(uColor, new VM.Vector3.zero());

  scene.add(
      new Node("torus", ShapeTorusKnot(scene.program, useQuads: false), mat));

  int p = 2;
  int q = 3;
  double radius = 20.0;
  for (int i = 0; i < 128; ++i) {
    double u = i / 128 * 2 * p * Math.PI;
    getTorusKnotPos(u, q, p, radius, 1.0, p1);
    //chronosGL.programs['point_sprites'].add(new PointSprites.fromVertex(p1, textureCache.get("textures/particle.bmp")));
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

    tkc.animate(elapsed);

    updateTorusTexture(timeMs / 1000, canvas2d);
    chronosGL.bindTexture(GL_TEXTURE_2D, generatedTexture.GetTexture());
    chronosGL.texImage2Dweb(
        GL_TEXTURE_2D, 0, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE, canvas2d);

    phase.Draw();
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
