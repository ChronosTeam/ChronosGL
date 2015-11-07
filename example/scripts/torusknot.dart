import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 165.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);

  TextureCache textureCache = chronosGL.getTextureCache();
  TextureWrapper blockTex = textureCache.add("gradient.jpg");

  ShaderProgram perlinNoise =
      chronosGL.createProgram(createPerlinNoiseColorShader(false), true);

  textureCache.loadAllThenExecute(() {
    Material mat = new Material()
      ..SetUniform(uTextureSampler, blockTex.texture)
      ..SetUniform(uColor, new Vector());
    Mesh m1 = chronosGL.shapes.createTorusKnot().createMesh(mat)
      ..setPos(-50, 0, 0);
    chronosGL.programBasic.add(m1);
    Material matDummy = new Material();
    Mesh m2 = chronosGL.shapes.createTorusKnot().createMesh(matDummy)..setPos(50, 0, 0);
    perlinNoise.add(m2);

    chronosGL.getUtils().addParticles(2000, 100);
    chronosGL.run();
  });
}
