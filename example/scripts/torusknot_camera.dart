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
  Perspective perspective = new Perspective();
  TorusKnotCamera tkc = new TorusKnotCamera();
  RenderingPhase phase = chronosGL.createPhase(tkc, perspective);

  ShaderProgram programBasic = phase.createProgram(createTexturedShader());

  canvas2d = Utils.createGradientImage2(0.0, canvas2d);
  Texture generatedTexture = new CanvasTexture("gen", canvas2d);

  Material mat = new Material()
    ..SetUniform(uTextureSampler, generatedTexture)
    ..SetUniform(uColor, new VM.Vector3.zero())
    ..blend = true
    ..depthTest = false;
  Mesh m = new Mesh(Shapes.TorusKnot(), mat);

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
  programSprites.add(Utils.MakeParticles(2000));
  double _lastTimeMs = 0.0;

  void animate(timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;

    tkc.animate(elapsed);

    canvas2d = Utils.createGradientImage2(timeMs / 1000, canvas2d);
    chronosGL.gl.bindTexture(WEBGL.TEXTURE_2D, generatedTexture.GetTexture());
    chronosGL.gl.texImage2D(WEBGL.TEXTURE_2D, 0, WEBGL.RGBA, WEBGL.RGBA,
        WEBGL.UNSIGNED_BYTE, canvas2d);

    perspective.Adjust(canvas);
    phase.draw([]);
    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
