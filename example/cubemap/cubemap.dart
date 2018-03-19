import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

import "dart:async";

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 0.0, 0.0, canvas);
  PerspectiveResizeAware perspective =
      new PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  final RenderProgram progCube = new RenderProgram(
      "solid", cgl, cubeMapVertexShader, cubeMapFragmentShader);

  // The Skybox and the cube use the same material
  final Material mat = new Material("cubemap")
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity());
  final MeshData mdCube = ShapeCube(progCube, x: 2.0, y: 2.0, z: 2.0);
  final MeshData mdSky = ShapeCube(progCube, x: 512.0, y: 512.0, z: 512.0);

  final RenderProgram progStars = new RenderProgram(
      "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
  final Material matStars = Utils.MakeStarMaterial(cgl)
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity());
  final MeshData mdStars = Utils.MakeStarMesh(progStars, 2000, 100.0);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    progCube.Draw(mdCube, [mat, perspective]);
    progCube.Draw(mdSky, [mat, perspective]);
    progStars.Draw(mdStars, [matStars, perspective]);

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
