import 'package:chronosgl/chronosgl.dart';

// the beginnings of a planetary shooter

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  ShaderProgram prg = chronosGL.createProgram(createSolidColorShader());

  Camera camera = chronosGL.getCamera();
  camera.setPos(0, 0, 40);

  Spatial center = new Spatial();
  //center.rotX(2.0);
  //center.rotY(1.0);
  camera.parent = center;

  Map<int, bool> cpk = currentlyPressedKeys;

  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    if (cpk[Key.A] != null) {
      center.lookLeft(0.01);
    } else if (cpk[Key.D] != null) {
      center.lookRight(0.01);
    }
    if (cpk[Key.W] != null) {
      center.lookUp(0.01);
    } else if (cpk[Key.S] != null) {
      center.lookDown(0.01);
    }
    //center.rollLeft(0.0001);
    //center.rotX(0.0001);
  });

  MeshData sphere = chronosGL.shapes.createIcosahedron();

  Mesh head = sphere.createMesh();
  head.color.set(0.94, 0.72, 0.63);

  Mesh leftEye = sphere.createMesh();
  leftEye.color.set(0.0, 0.0, 1.0);
  leftEye.setPos(-0.2, 0.4, -0.8);
  leftEye.transform.setScale(0.2);
  head.add(leftEye);

  Mesh rightEye = sphere.createMesh();
  rightEye.color.set(0.0, 0.0, 1.0);
  rightEye.transform.setScale(0.2);
  rightEye.setPos(0.2, 0.4, -0.8);
  head.add(rightEye);

  Mesh nose = sphere.createMesh();
  nose.color.set(0.9, 0.7, 0.6);
  nose.transform.setScale(0.3);
  nose.setPos(0.0, 0.0, -0.9);
  head.add(nose);

  prg.add(head);

  chronosGL.getUtils().addParticles(2000, 100);

  chronosGL.run();
}
