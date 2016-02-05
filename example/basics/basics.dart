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
  Texture gradient = new ImageTexture("../gradient.jpg");
  Texture trans = new ImageTexture("../transparent.png");
  Texture wood = new ImageTexture("../wood.jpg");

  //ShaderProgram perlinNoise = chronosGL.createProgram(createPerlinNoiseColorShader(), true);

  Material matWood = new Material()
    ..SetUniform(uTextureSampler, wood)
    ..SetUniform(uColor, new Vector(1, 0, 0));
  ShaderProgram programBasic = chronosGL.createProgram(createTexturedShader());

  Mesh ico = new Mesh(Shapes.Icosahedron(3), matWood)..setPos(0, 0, 0);
  programBasic.add(ico);

  Material matGradient = new Material()..SetUniform(uTextureSampler, gradient);

  Mesh cube = new Mesh(Shapes.Cube(), matGradient)..setPos(-5, 0, -5);
  programBasic.add(cube);

  Material matTrans = new Material()
    ..SetUniform(uTextureSampler, trans)
    ..blend = true;
  Mesh cyl = new Mesh(Shapes.Cylinder(3.0, 6.0, 2.0, 32), matTrans)
    ..setPos(5, 0, -5);
  programBasic.add(cyl);

  Mesh quad = new Mesh(Shapes.Quad(2), matTrans)
    //quad.blend_dFactor = chronosGL.blendConstants.ONE_MINUS_SRC_ALPHA;
    ..setPos(-5, 0, 5);
  programBasic.add(quad);

  Mesh torus =
      new Mesh(Shapes.TorusKnot(radius: 1.0, tube: 0.4), matGradient)
        ..setPos(5, 0, 5);
  programBasic.add(torus);
  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
