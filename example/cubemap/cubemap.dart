import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'package:chronosgl/chronosutil.dart';

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0);
  Perspective perspective = new Perspective(orbit);

  Texture cubeTex = new CubeTexture("stars", "skybox_", ".png");

  RenderingPhase phase = new RenderingPhase(chronosGL.gl, perspective);
  ShaderProgram programCM = phase.createProgram(createCubeMapShader());
  Mesh sky = Utils.MakeSkycube(cubeTex);
  programCM.add(sky);

  Material mat = new Material()..SetUniform(uTextureCubeSampler, cubeTex);
  MeshData md = Shapes.Cube(x: 2.0, y: 2.0, z: 2.0);
  programCM.add(new Mesh(md, mat));

  ShaderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  double _lastTimeMs = 0.0;
  void animate(double timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    perspective.Adjust(canvas);
    phase.draw([]);

    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
