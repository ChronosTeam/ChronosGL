import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  chronosGL.addAnimateCallback('fps', (double elapsed, double time) {
    fps.UpdateFrameCount(time);
  });
  ShaderProgram prg = chronosGL.createProgram(createDemoShader());
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);

  loadObj("../ct_logo.obj").then((MeshData md) {
    Material mat = new Material();
    Mesh mesh = new Mesh(md, mat)..rotX(3.14 / 2);
    //mesh.rotY(3.14);
    Node n = new Node(mesh);
    //n.invert = true;
    n.lookAt(new Vector(100, 0, 0));
    //n.matrix.scale(0.02);
    prg.add(n);
    chronosGL.run();
  });
}
