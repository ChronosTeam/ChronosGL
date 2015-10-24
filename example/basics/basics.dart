import 'package:chronosgl/chronosgl.dart';
  
void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
    
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0, 10.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth+=0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);
  
  TextureCache textureCache = chronosGL.getTextureCache();
  TextureWrapper blockTex = textureCache.add("../gradient.jpg");

  //ShaderProgram perlinNoise = chronosGL.createProgram(createPerlinNoiseColorShader(), true);

  textureCache.loadAllThenExecute(() {
    
    Mesh m = chronosGL.shapes.createCube().createMesh().setTexture(blockTex.texture);
    m.setPos(-5, 0, -5);
    chronosGL.programBasic.add(m);
    
    Mesh ico = chronosGL.shapes.createIcosahedron(3).createMesh().setTexture(blockTex.texture);
    ico.setPos(5, 0, 5);
    chronosGL.programBasic.add(ico);

    Mesh cyl = chronosGL.shapes.createIcosahedron(3).createMesh().setTexture(blockTex.texture);
    cyl.setPos(5, 0, -5);
    chronosGL.programBasic.add(cyl);

    chronosGL.getUtils().addParticles(2000, 100);
    chronosGL.run();
  });
  
}
