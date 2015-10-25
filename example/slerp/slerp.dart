import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  ShaderProgram prg = chronosGL.createProgram(createDemoShader());
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 65.0);
  chronosGL.addAnimatable('orbitCam', orbit);

  loadObj("../ct_logo.obj").then((MeshData md) {
    Mesh mesh = md.createMesh();
    mesh.rotX(3.14 / 2);
    mesh.rotZ(3.14);
    Node n = new Node(mesh);
    //n.invert = true;
    n.lookAt(new Vector(100.0, 0.0, -100.0));
    //n.matrix.scale(0.02);

    Quaternion start = new Quaternion().fromRotationMatrix4(n.transform);
    Quaternion end =
        new Quaternion().setAxisAngle(new Vector(0.0, 0.0, 1.0), 3.14);
    Quaternion work = new Quaternion();
    double time = 0.0;

    n.setAnimateCallback((Node node, double elapsed) {
      if (time < 1.0) {
        work.slerp(start, end, time += elapsed / 10000);
        work.toRotationMatrix4(node.transform);
      }
    });

    prg.add(n);
    chronosGL.getUtils().addParticles(2000, 100);
    chronosGL.run();
  });
}
