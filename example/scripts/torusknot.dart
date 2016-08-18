import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:html' as HTML;

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 165.0);
  ShaderProgram programBasic = chronosGL.createProgram(createTexturedShader());

  Texture blockTex = new ImageTexture("gradient.jpg");

  ShaderProgram perlinNoise =
      chronosGL.createProgram(createPerlinNoiseColorShader(false));

  Material mat = new Material()
    ..SetUniform(uTextureSampler, blockTex)
    ..SetUniform(uColor, new VM.Vector3.zero());
  Mesh m1 = new Mesh(Shapes.TorusKnot(), mat)..setPos(-50.0, 0.0, 0.0);
  programBasic.add(m1);
  Material matDummy = new Material();
  Mesh m2 = new Mesh(Shapes.TorusKnot(), matDummy)..setPos(50.0, 0.0, 0.0);
  perlinNoise.add(m2);

  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    perlinNoise.inputs.SetUniformVal(uTime, timeMs / 1000.0);
    chronosGL.draw();
    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
