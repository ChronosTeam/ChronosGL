import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas',
      useFramebuffer: false, fxShader: createBlurShader2());

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0, 10.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('OrbitCam', orbit);

  //TextureWrapper red = new TextureWrapper.SolidColor("red", "rgba(255,0,0,1)");
  TextureWrapper gradient = new TextureWrapper.Image("../gradient.jpg");
  TextureWrapper trans = new TextureWrapper.Image("../transparent.png");
  TextureWrapper wood = new TextureWrapper.Image("../wood.jpg");
  
  //ShaderProgram perlinNoise = chronosGL.createProgram(createPerlinNoiseColorShader(), true);

  Material matWood = new Material()
    ..SetUniform(uTextureSampler, wood)
    ..SetUniform(uColor, new Vector(1, 0, 0));

  Mesh ico = chronosGL.shapes.createIcosahedron(3).createMesh(matWood)
    ..setPos(0, 0, 0);
  chronosGL.programBasic.add(ico);

  Material matGradient = new Material()
    ..SetUniform(uTextureSampler, gradient);

  Mesh cube = chronosGL.shapes.createCube().createMesh(matGradient)
    ..setPos(-5, 0, -5);
  chronosGL.programBasic.add(cube);

  Material matTrans = new Material()
    ..SetUniform(uTextureSampler, trans)
    ..blend = true;
  Mesh cyl = chronosGL.shapes.createCylinder(3.0, 2.0, 32).createMesh(matTrans)
    ..setPos(5, 0, -5);
  chronosGL.programBasic.add(cyl);

  Mesh quad = chronosGL.shapes.createQuad(2).createMesh(matTrans)
    //quad.blend_dFactor = chronosGL.blendConstants.ONE_MINUS_SRC_ALPHA;
    ..setPos(-5, 0, 5);
  chronosGL.programBasic.add(quad);

  Mesh torus = chronosGL.shapes
      .createTorusKnot(radius: 1.0, tube: 0.4)
      .createMesh(matGradient)..setPos(5, 0, 5);
  chronosGL.programBasic.add(torus);
  
  TextureWrapper tw = chronosGL.getUtils().createParticleTexture();
  chronosGL.getUtils().addParticles(2000, tw);

  TextureWrapper.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
