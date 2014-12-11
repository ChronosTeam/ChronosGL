import 'package:chronosgl/chronosgl.dart';

void main() {
  
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', transparent: false);

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 65.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth+=0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);
    
  TextureCache textureCache = chronosGL.getTextureCache();
  TextureWrapper blockTex = textureCache.add("gradient.jpg");
  
  textureCache.loadAllThenExecute(() {
    Mesh m = chronosGL.getUtils().createTorusKnotMesh( texture: blockTex.texture);
    chronosGL.programBasic.add(m);
    chronosGL.getUtils().addParticles(2000, 100);
    chronosGL.run();
  });
  
}
