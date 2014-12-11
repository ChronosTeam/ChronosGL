import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 265.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth+=0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);
    
  Mesh m = chronosGL.getUtils().createTorusKnotMesh(radius:12.0);
  
  int count = 1000;
  
  Instancer instancer = new Instancer(m, count);
  
  Spatial spatial = new Spatial();
  
  int n = 0;
  for(int x=-5;x<5;x++){
    for(int y=-5;y<5;y++){
      for(int z=-5;z<5;z++){
        spatial.setPos(x*40, y*40, z*30);
        instancer.setTransformFromSpatial(n++, spatial);
      }
    }
  }
  
  ShaderProgram prg = chronosGL.createProgram( instancer.instancedShader);
  prg.addInstancer( instancer);
  chronosGL.getUtils().addParticles(2000, 100);
  chronosGL.run();
}
