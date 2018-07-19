import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

import "dart:async";

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas);
  OrbitCamera orbit = OrbitCamera(15.0, 0.0, 0.0, canvas);
  PerspectiveResizeAware perspective =
      PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  final RenderProgram progCube =
      RenderProgram("solid", cgl, cubeMapVertexShader, cubeMapFragmentShader);

  // The Skybox and the cube use the same material
  final Material mat = Material("cubemap")
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());
  final MeshData mdCube = ShapeCube(progCube, x: 2.0, y: 2.0, z: 2.0);
  final MeshData mdSky = ShapeCube(progCube, x: 512.0, y: 512.0, z: 512.0);

  final RenderProgram progStars = RenderProgram(
      "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
  final Material matStars = Utils.MakeStarMaterial(cgl)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());
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
    Texture cubeTex = CubeTexture(cgl, "stars", list);
    mat.SetUniform(uCubeTexture, cubeTex);
    animate(0.0);
  });
}
