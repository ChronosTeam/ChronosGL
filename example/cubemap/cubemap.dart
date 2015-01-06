import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  TextureCache textureCache = chronosGL.getTextureCache();
  textureCache.addSolidColor("red", "rgba(255,0,0,255)");
  textureCache.addCube("stars", "skybox_", ".png");
  textureCache.loadAllThenExecute(() {
    //utils.addSkybox( "textures/skybox_", ".png", "nx", "px", "nz", "pz", "ny", "py");
    chronosGL.installOrbitCamera(15.0);

    ShaderProgram cm = chronosGL.createProgram(createCubeMapShader());

    MeshData md = chronosGL.getUtils().createCube();
    //md.multiplyVertices(10);
    Mesh m = md.createMesh();
    m.textureCube = textureCache.get("stars");
    cm.add(m);
    chronosGL.getUtils().addParticles(200);
    chronosGL.run();
  });
}
