import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import "dart:async";

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
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  Scene scene = new Scene(
      "objects",
      new RenderProgram(
          "solid", chronosGL, cubeMapVertexShader, cubeMapFragmentShader),
      [perspective]);
  phase.add(scene);

  Material mat = new Material("cubemap");
  MeshData md = ShapeCube(scene.program, x: 2.0, y: 2.0, z: 2.0);
  scene.add(new Node("cube", md, mat));

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
    phase.Draw();

    HTML.window.animationFrame.then(animate);
  }

  List<Future<Object>> futures = LoadCubeImages("skybox_", ".png");

  Future.wait(futures).then((List list) {
    Texture cubeTex = new CubeTexture(chronosGL, "stars", list);
    mat.SetUniform(uCubeTexture, cubeTex);
    Node sky = Utils.MakeSkycube(scene.program, cubeTex);
    scene.add(sky);
    animate(0.0);
  });
}
