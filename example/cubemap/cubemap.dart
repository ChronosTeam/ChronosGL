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
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  final RenderPhaseResizeAware phase =
      new RenderPhaseResizeAware("main", cgl, canvas, perspective);

  Scene scene = new Scene(
      "objects",
      new RenderProgram(
          "solid", cgl, cubeMapVertexShader, cubeMapFragmentShader),
      [perspective]);
  phase.add(scene);

  // The Skybox and the cube use the same material
  Material mat = new Material("cubemap");
  MeshData mdCube = ShapeCube(scene.program, x: 2.0, y: 2.0, z: 2.0);
  scene.add(new Node("cube", mdCube, mat));
  MeshData mdSky = ShapeCube(scene.program, x: 512.0, y: 512.0, z: 512.0);
  scene.add(new Node("sky", mdSky, mat));

  phase.add(MakeStarScene(cgl, perspective, 2000));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.Draw();

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  List<Future<Object>> futures = LoadCubeImages("skybox_", ".png");

  Future.wait(futures).then((List list) {
    Texture cubeTex = new CubeTexture(cgl, "stars", list);
    mat.SetUniform(uCubeTexture, cubeTex);
    animate(0.0);
  });
}
