import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:html' as HTML;
import "dart:async";

String textureFile = "../gradient.jpg";


void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');

  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(165.0, 0.0, 0.0, canvas);
  PerspectiveResizeAware perspective =
      new PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  final RenderProgram programTexture = new RenderProgram(
      "textured", cgl, texturedVertexShader, texturedFragmentShader);
  final RenderProgram programPerlin = new RenderProgram("perlin", cgl,
      perlinNoiseVertexShader, makePerlinNoiseColorFragmentShader(false));

  final MeshData torus = ShapeTorusKnot(programTexture);

  // A gradient texture will be added after it has loaded.
  final Material matTexture = new Material("texture")
    ..SetUniform(uModelMatrix,
        new VM.Matrix4.identity()..setTranslationRaw(-50.0, 0.0, 0.0))
    ..SetUniform(uColor, new VM.Vector3.zero());

  final Material matPerlin = new Material("perlin")
    ..SetUniform(uModelMatrix,
        new VM.Matrix4.identity()..setTranslationRaw(50.0, 0.0, 0.0));

  final RenderProgram progStars = new RenderProgram(
      "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
  final Material matStars = Utils.MakeStarMaterial(cgl)
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity());
  final MeshData mdStars = Utils.MakeStarMesh(progStars, 2000, 200.0);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    matPerlin.ForceUniform(uTime, timeMs / 1000.0);
    programTexture.Draw(torus, [perspective, matTexture]);
    programPerlin.Draw(torus, [perspective, matPerlin]);
  progStars.Draw(mdStars, [matStars, perspective]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  List<Future<Object>> futures = [
    LoadImage(textureFile),
  ];

  Future.wait(futures).then((List list) {
    Texture tex = new ImageTexture(cgl, textureFile, list[0]);
    matTexture..SetUniform(uTexture, tex);
    animate(0.0);
  });
}
