import 'dart:html' as HTML;
import 'dart:math' as Math;
import 'dart:web_gl' as WEBGL;
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

HTML.CanvasElement canvas2d;
VM.Vector3 p1 = new VM.Vector3.zero();

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  TorusKnotCamera tkc = new TorusKnotCamera();
  Perspective perspective = new Perspective(tkc);
  RenderPhase phase = new RenderPhase("main", chronosGL);

  RenderProgram programBasic = phase.createProgram(createTexturedShader());

  canvas2d = Utils.createGradientImage2(0.0, canvas2d);
  Texture generatedTexture = new CanvasTexture(chronosGL, "gen", canvas2d);

  // Maybe disable depth test?
  Material mat = new Material.Transparent("torus", new BlendEquation.Standard())
    ..SetUniform(uTexture, generatedTexture)
    ..SetUniform(uColor, new VM.Vector3.zero());
  Node m =
      new Node("torus", ShapeTorusKnot(chronosGL, useQuads: false), mat);

  programBasic.add(m);

  int p = 2;
  int q = 3;
  double radius = 20.0;
  for (int i = 0; i < 128; ++i) {
    double u = i / 128 * 2 * p * Math.PI;
    getTorusKnotPos(u, q, p, radius, 1.0, p1);
    //chronosGL.programs['point_sprites'].add(new PointSprites.fromVertex(p1, textureCache.get("textures/particle.bmp")));
  }

  RenderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(chronosGL, 2000));

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
    chronosGL.gl.bindTexture(WEBGL.TEXTURE_2D, generatedTexture.GetTexture());
    chronosGL.gl.texImage2D(WEBGL.TEXTURE_2D, 0, WEBGL.RGBA, WEBGL.RGBA,
        WEBGL.UNSIGNED_BYTE, canvas2d);

    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
