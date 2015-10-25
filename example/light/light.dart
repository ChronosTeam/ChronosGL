import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  Camera camera = chronosGL.getCamera();
  camera.setPos(0.0, 0.0, 56.0);

  FlyingCamera fc = new FlyingCamera(camera); // W,A,S,D keys fly
  chronosGL.addAnimatable('flyingCamera', fc);

  MeshData cubeMeshData = chronosGL.shapes.createCube();
  cubeMeshData.multiplyVertices(2);

  Mesh cubeMesh = cubeMeshData.createMesh();
  cubeMesh.setPos(0.0, 0.0, 0.0);
  cubeMesh.lookUp(1.0);
  cubeMesh.lookLeft(0.7);

  cubeMesh.setAnimateCallback((Node node, double time) {
    cubeMesh.rollLeft(time * 0.0001);
    cubeMesh.lookLeft(time * 0.0001);
  });

  ShaderProgram lightShaderPrg = chronosGL.createProgram(createLightShader());
  lightShaderPrg.add(cubeMesh);
  ShaderProgram fixedShaderPrg = chronosGL.createProgram(createSolidColorShader());

  chronosGL.pointLightLocation.set(11, 11, 1);

  Mesh ico = chronosGL.shapes.createIcosahedron().createMesh();
  ico.setPos(11, 11, 1);
  ico.color.set(1, 1, 0);
  fixedShaderPrg.add(ico);

  chronosGL.getUtils().addParticles(2000);

  chronosGL.run();
}
