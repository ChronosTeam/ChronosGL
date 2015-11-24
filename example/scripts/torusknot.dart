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

  TextureWrapper blockTex = new TextureWrapper.Image("gradient.jpg");

  ShaderProgram perlinNoise =
      chronosGL.createProgram(createPerlinNoiseColorShader(false));

  Material mat = new Material()
    ..SetUniform(uTextureSampler, blockTex)
    ..SetUniform(uColor, new Vector());
  Mesh m1 = chronosGL.shapes.createTorusKnot().createMesh(mat)
    ..setPos(-50, 0, 0);
  programBasic.add(m1);
  Material matDummy = new Material();
  Mesh m2 = chronosGL.shapes.createTorusKnot().createMesh(matDummy)
    ..setPos(50, 0, 0);
  perlinNoise.add(m2);
  
  Utils utils = new Utils(chronosGL);
  TextureWrapper tw = utils.createParticleTexture();
  utils.addParticles(2000, tw);
  TextureWrapper.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
