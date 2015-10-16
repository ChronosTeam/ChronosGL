import 'package:chronosgl/chronosgl.dart';

void main() {
  
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', transparent: false);

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 165.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth+=0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);
    
  TextureCache textureCache = chronosGL.getTextureCache();
  TextureWrapper blockTex = textureCache.add("gradient.jpg");

  ShaderProgram perlinNoise = chronosGL.createProgram(createPerlinNoiseColorShader(), true);

  textureCache.loadAllThenExecute(() {
    
    Mesh m1 = chronosGL.getUtils().createTorusKnotMesh( texture: blockTex.texture);
    m1.setPos(-50, 0, 0);
    chronosGL.programBasic.add(m1);

    Mesh m2 = chronosGL.getUtils().createTorusKnotMesh();
    m2.setPos(50, 0, 0);
    perlinNoise.add(m2);
    
    chronosGL.getUtils().addParticles(2000, 100);
    chronosGL.run();
  });
  
}
