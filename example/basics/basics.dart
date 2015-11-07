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

  TextureCache textureCache = chronosGL.getTextureCache();
  textureCache.addSolidColor("red", "rgba(255,0,0,1)");
  TextureWrapper gradient = textureCache.add("../gradient.jpg");
  TextureWrapper trans = textureCache.add("../transparent.png");
  TextureWrapper wood = textureCache.add("../wood.jpg");

  //ShaderProgram perlinNoise = chronosGL.createProgram(createPerlinNoiseColorShader(), true);

  Material matWood = new Material()
    ..SetUniform(uTextureSampler, wood.texture)
    ..SetUniform(uColor, new Vector(1, 0, 0));
  textureCache.loadAllThenExecute(() {
    Mesh ico = chronosGL.shapes.createIcosahedron(3).createMesh(matWood)
      ..setPos(0, 0, 0);
    chronosGL.programBasic.add(ico);

    Material matGradient = new Material()
      ..SetUniform(uTextureSampler, gradient.texture);

    Mesh cube = chronosGL.shapes.createCube().createMesh(matGradient)
      ..setPos(-5, 0, -5);
    chronosGL.programBasic.add(cube);

    Material matTrans = new Material()
      ..SetUniform(uTextureSampler, trans.texture)
      ..blend = true;
    Mesh cyl = chronosGL.shapes
        .createCylinder(3.0, 2.0, 32)
        .createMesh(matTrans)..setPos(5, 0, -5);
    chronosGL.programBasic.add(cyl);

    Mesh quad = chronosGL.shapes.createQuad(2).createMesh(matTrans)
      //quad.blend_dFactor = chronosGL.blendConstants.ONE_MINUS_SRC_ALPHA;
      ..setPos(-5, 0, 5);
    chronosGL.programBasic.add(quad);

    Mesh torus =
        chronosGL.shapes.createTorusKnot(radius: 1.0, tube: 0.4).createMesh(matGradient)
          ..setPos(5, 0, 5);
    chronosGL.programBasic.add(torus);

    chronosGL.getUtils().addParticles(2000, 100);
    chronosGL.run();
  });
}
