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

  MeshData cubeMeshData = Shapes.Cube(x:2.0, y:2.0, z:2.0);

  Material cubeMat = new Material();
  Mesh cubeMesh = new Mesh(cubeMeshData, cubeMat)
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

  Vector posLight1 =  new Vector(11, 11, 1);
  Vector posLight2 =  new Vector(-11, 11, 1);
  chronosGL.lights.add (new Light.Point(posLight1));
  chronosGL.lights.add (new Light.Point(posLight2));
  Material icoMat = new Material()..SetUniform(uColor, new Vector(1, 1, 0));
  Mesh ico1 = new Mesh(Shapes.Icosahedron(), icoMat)
    ..setPosFromVec(posLight1);
  fixedShaderPrg.add(ico1);
  /*
  Mesh ico2 = new Mesh(Shapes.Icosahedron(), icoMat)
     ..setPosFromVec(posLight2);
   fixedShaderPrg.add(ico2);
*/
  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
