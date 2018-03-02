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
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(165.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  final Scene sceneBasic = new Scene(
      "tesxtured",
      new RenderProgram(
          "textured", cgl, texturedVertexShader, texturedFragmentShader),
      [perspective]);

  // A gradient texture will be added after it has loaded.
  Material mat = new Material("torus")
    ..SetUniform(uColor, new VM.Vector3.zero());
  sceneBasic.add(new Node("torus1", ShapeTorusKnot(sceneBasic.program), mat)
    ..setPos(-50.0, 0.0, 0.0));

  final Scene scenePerlin = new Scene(
      "perlin",
      new RenderProgram("perlin", cgl, perlinNoiseVertexShader,
          makePerlinNoiseColorFragmentShader(false)),
      [perspective]);

  Material matDummy = new Material("mat");
  scenePerlin.add(new Node("torus2", ShapeTorusKnot(scenePerlin.program), matDummy)
    ..setPos(50.0, 0.0, 0.0));

  final RenderPhase phase = new RenderPhase("main", cgl)
    ..add(sceneBasic)
    ..add(scenePerlin)
    ..add(MakeStarScene(cgl, perspective, 2000));

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
    matDummy.ForceUniform(uTime, timeMs / 1000.0);
    phase.Draw();
    HTML.window.animationFrame.then(animate);
  }

  List<Future<Object>> futures = [
    LoadImage(textureFile),
  ];

  Future.wait(futures).then((List list) {
    Texture tex = new ImageTexture(cgl, textureFile, list[0]);
    mat..SetUniform(uTexture, tex);
    animate(0.0);
  });
}
