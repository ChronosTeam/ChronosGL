import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  TextureCache textureCache = chronosGL.getTextureCache();
  textureCache.addSolidColor("red", "rgba(255,0,0,255)");
  textureCache.addCube("stars", "skybox_", ".png");
  textureCache.loadAllThenExecute(() {
    
    chronosGL.installOrbitCamera(15.0);

    chronosGL.getUtils().addSkycube( textureCache.get("stars"));

    Mesh m = chronosGL.getUtils().createCube().multiplyVertices(2).createMesh();
    m.textureCube = textureCache.get("stars");
    chronosGL.programs["CubeMap"].add(m);
    
    chronosGL.getUtils().addParticles(200);
    chronosGL.run();
  });
}
