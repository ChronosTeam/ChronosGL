import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  Texture cubeTex =
      new CubeTexture("stars", "skybox_", ".png");

  chronosGL.installOrbitCamera(15.0);
  
  ShaderProgram programCM = chronosGL.createProgram(createCubeMapShader());
  Mesh sky = Utils.MakeSkycube(cubeTex); 
  programCM.addFollowCameraObject(sky);
  
  Material mat = new Material()..SetUniform(uTextureCubeSampler, cubeTex);
  MeshData md = Shapes.Cube(x:2.0, y:2.0, z:2.0);
  programCM.add(new Mesh(md, mat));

  
  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
