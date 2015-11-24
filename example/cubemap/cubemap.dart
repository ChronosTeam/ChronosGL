import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  TextureWrapper cubeTex =
      new TextureWrapper.ImageCube("stars", "skybox_", ".png")..clamp = true;

  chronosGL.installOrbitCamera(15.0);
  Utils utils = new Utils(chronosGL);
  utils.addSkycube(cubeTex);

  Material mat = new Material()
    ..SetUniform(uTextureCubeSampler, cubeTex);
  Mesh m = chronosGL.shapes.createCube().multiplyVertices(2).createMesh(mat);
  chronosGL.getProgramByName("CubeMap").add(m);
  
  TextureWrapper tw = utils.createParticleTexture();
  utils.addParticles(2000, tw);
  TextureWrapper.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
