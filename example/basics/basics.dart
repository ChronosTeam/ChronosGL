import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', useFramebuffer:false); 
   //   fxShader: [createBlurShader2V(), createBlurShader2F()]);

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0, 10.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('OrbitCam', orbit);

  TextureCache textureCache = chronosGL.getTextureCache();
  textureCache.addSolidColor("red", "rgba(255,0,0,1)");
  TextureWrapper gradient = textureCache.add("../gradient.jpg");
  TextureWrapper trans = textureCache.add("../transparent.png");
  TextureWrapper wood = textureCache.add("../wood.jpg");

  //ShaderProgram perlinNoise = chronosGL.createProgram(createPerlinNoiseColorShader(), true);

  textureCache.loadAllThenExecute(() {
    Mesh ico = chronosGL.shapes.createIcosahedron(3).createMesh().setTexture(wood.texture);
    ico.color.set(1, 0, 0);
    ico.setPos(0, 0, 0);
    chronosGL.programBasic.add(ico);

    Mesh cube = chronosGL.shapes.createCube().createMesh().setTexture(gradient.texture);
    cube.setPos(-5, 0, -5);
    chronosGL.programBasic.add(cube);

    Mesh cyl = chronosGL.shapes.createCylinder(3.0, 2.0, 32).createMesh().setTexture(trans.texture)..blend = true;
    cyl.setPos(5, 0, -5);
    chronosGL.programBasic.add(cyl);

    Mesh quad = chronosGL.shapes.createQuad(2).createMesh().setTexture(trans.texture)..blend = true;
    //quad.blend_dFactor = chronosGL.blendConstants.ONE_MINUS_SRC_ALPHA;
    quad.setPos(-5, 0, 5);
    chronosGL.programBasic.add(quad);

    Mesh torus = chronosGL.shapes.createTorusKnot(radius: 1.0, tube: 0.4).createMesh().setTexture(gradient.texture);
    torus.setPos(5, 0, 5);
    chronosGL.programBasic.add(torus);

    chronosGL.getUtils().addParticles(2000, 100);
    chronosGL.run();
  });
}
