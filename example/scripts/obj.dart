import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  ShaderProgram prg = chronosGL.createProgram(createDemoShader());
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);

  loadObj("ct_logo.obj").then((MeshData md) {
    Mesh mesh = md.createMesh();
    mesh.rotX(3.14 / 2);
    //mesh.rotY(3.14);
    Node n = new Node(mesh);
    //n.invert = true;
    n.lookAt(new Vector(100, 0, 0));
    //n.matrix.scale(0.02);
    prg.add(n);
    chronosGL.run();
  });
}
