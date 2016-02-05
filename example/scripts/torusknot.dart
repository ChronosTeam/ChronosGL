import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 165.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);
  ShaderProgram programBasic = chronosGL.createProgram(createTexturedShader());

  Texture blockTex = new ImageTexture("gradient.jpg");

  ShaderProgram perlinNoise =
      chronosGL.createProgram(createPerlinNoiseColorShader(false));

  Material mat = new Material()
    ..SetUniform(uTextureSampler, blockTex)
    ..SetUniform(uColor, new Vector());
  Mesh m1 = new Mesh(Shapes.TorusKnot(), mat)
    ..setPos(-50, 0, 0);
  programBasic.add(m1);
  Material matDummy = new Material();
  Mesh m2 = new Mesh(Shapes.TorusKnot(), matDummy)
    ..setPos(50, 0, 0);
  perlinNoise.add(m2);

  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
