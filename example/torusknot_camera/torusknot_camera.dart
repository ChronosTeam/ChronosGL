import 'dart:html' as HTML;
import 'dart:math' as Math;
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

HTML.CanvasElement canvas2d;
VM.Vector3 p1 = new VM.Vector3.zero();

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  TorusKnotCamera tkc = new TorusKnotCamera();
  Perspective perspective = new Perspective(tkc, 0.1, 1000.0);
  RenderPhase phase = new RenderPhase("main", chronosGL);

  ShaderProgram programBasic = phase.createProgram(createTexturedShader());

  canvas2d = Utils.createGradientImage2(0.0, canvas2d);
  Texture generatedTexture = new ImageTexture(chronosGL, "gen", canvas2d);

  // Maybe disable depth test?
  Material mat = new Material.Transparent("torus", BlendEquationStandard)
    ..SetUniform(uTexture, generatedTexture)
    ..SetUniform(uColor, new VM.Vector3.zero());
  Node m = new Node("torus", ShapeTorusKnot(programBasic, useQuads: false), mat);

  programBasic.add(m);

  int p = 2;
  int q = 3;
  double radius = 20.0;
  for (int i = 0; i < 128; ++i) {
    double u = i / 128 * 2 * p * Math.PI;
    getTorusKnotPos(u, q, p, radius, 1.0, p1);
    //chronosGL.programs['point_sprites'].add(new PointSprites.fromVertex(p1, textureCache.get("textures/particle.bmp")));
  }

  ShaderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(programSprites, 2000));

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

    tkc.animate(elapsed);

    canvas2d = Utils.createGradientImage2(timeMs / 1000, canvas2d);
    chronosGL.bindTexture(GL_TEXTURE_2D, generatedTexture.GetTexture());
    chronosGL.texImage2Dweb(GL_TEXTURE_2D, 0, GL_RGBA, GL_RGBA,
        GL_UNSIGNED_BYTE, canvas2d);

    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
