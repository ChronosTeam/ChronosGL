import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  Camera camera = chronosGL.getCamera();
  camera.setPos(0.0, 0.0, 56.0);

  OrbitCamera orbit = new OrbitCamera(camera, 25.0, 10.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('OrbitCam', orbit);
  //FlyingCamera fc = new FlyingCamera(camera); // W,A,S,D keys fly
  //chronosGL.addAnimatable('flyingCamera', fc);

  MeshData cubeMeshData = chronosGL.shapes.createCube();
  cubeMeshData.multiplyVertices(2);

  Material cubeMat = new Material();
  Mesh cubeMesh = cubeMeshData.createMesh(cubeMat)
    ..setPos(0.0, 0.0, 0.0)
    ..lookUp(1.0)
    ..lookLeft(0.7);

  cubeMesh.setAnimateCallback((Node node, double time) {
    cubeMesh.rollLeft(time * 0.0001);
    cubeMesh.lookLeft(time * 0.0001);
  });

  ShaderProgram lightShaderPrg = chronosGL.createProgram(createLightShader());
  lightShaderPrg.add(cubeMesh);
  ShaderProgram fixedShaderPrg =
      chronosGL.createProgram(createSolidColorShader());

  chronosGL.lightpar.pointLightLocation.set(11, 11, 1);
  Material icoMat = new Material()..SetUniform(uColor, new Vector(1, 1, 0));
  Mesh ico = chronosGL.shapes.createIcosahedron().createMesh(icoMat)
    ..setPos(11, 11, 1);
  fixedShaderPrg.add(ico);

  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  TextureWrapper.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
