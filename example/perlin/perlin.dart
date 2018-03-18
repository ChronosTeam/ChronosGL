import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:html' as HTML;
import "dart:async";

String textureFile = "../gradient.jpg";

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
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(165.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

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

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    matPerlin.ForceUniform(uTime, timeMs / 1000.0);
    programTexture.Draw(torus, [perspective, matTexture]);
    programPerlin.Draw(torus, [perspective, matPerlin]);

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
