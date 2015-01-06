import 'package:chronosgl/chronosgl.dart';

void main() {
  
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth+=0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);
  
  TextureCache textureCache = chronosGL.getTextureCache();
  TextureWrapper blockTex = textureCache.add("gradient.jpg");
  
  textureCache.loadAllThenExecute(() {
    MeshData md = chronosGL.getUtils().createIcosahedron(3);
    Mesh m = md.createMesh();
    m.texture = blockTex.texture;
    chronosGL.programBasic.add(m);
    
    chronosGL.getUtils().addParticles(2000);
    
    chronosGL.run();
  });
  
}
