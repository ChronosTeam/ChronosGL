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
  TextureWrapper gradient = textureCache.add("../gradient.jpg");

  //ShaderProgram perlinNoise = chronosGL.createProgram(createPerlinNoiseColorShader(), true);

  textureCache.loadAllThenExecute(() {
    
    Mesh ico = chronosGL.shapes.createIcosahedron(3).createMesh().setTexture(gradient.texture);
    ico.setPos(0, 0, 0);
    chronosGL.programBasic.add(ico);

    Mesh m = chronosGL.shapes.createCube().createMesh().setTexture(gradient.texture);
    m.setPos(-5, 0, -5);
    chronosGL.programBasic.add(m);
    
    Mesh cyl = chronosGL.shapes.createCylinder(3.0, 2.0, 32).createMesh().setTexture(gradient.texture);
    cyl.setPos(5, 0, -5);
    chronosGL.programBasic.add(cyl);

    Mesh quad = chronosGL.shapes.createQuad(2).createMesh().setTexture(gradient.texture);
    quad.setPos(-5, 0, 5);
    chronosGL.programBasic.add(quad);

    Mesh torus = chronosGL.shapes.createTorusKnot(radius:1.0, tube:0.4).createMesh().setTexture(gradient.texture);
    torus.setPos(5, 0, 5);
    chronosGL.programBasic.add(torus);

    chronosGL.getUtils().addParticles(2000, 100);
    chronosGL.run();
  });
  
}
