import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  TextureWrapper cubeTex =
      new TextureWrapper.ImageCube("stars", "skybox_", ".png")..clamp = true;

  chronosGL.installOrbitCamera(15.0);
  
  ShaderProgram programCM = chronosGL.createProgram(createCubeMapShader());
  Mesh sky = Utils.MakeSkycube(cubeTex); 
  programCM.addFollowCameraObject(sky);
  
  Material mat = new Material()..SetUniform(uTextureCubeSampler, cubeTex);
  Mesh m = chronosGL.shapes.createCube().multiplyVertices(2).createMesh(mat);
  programCM.add(m);

  
  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  TextureWrapper.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
