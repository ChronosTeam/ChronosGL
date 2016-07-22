import 'package:chronosgl/chronosgl.dart';
import 'dart:math' as Math;

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  ShaderProgram prg = chronosGL.createProgram(createDemoShader());
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 15.0, -45.0, 0.3);
  chronosGL.addAnimatable('orbitCam', orbit);
  Material mat = new Material();
  Math.Random rng = new Math.Random();

  loadObj("../ct_logo.obj").then((MeshData md) {
    Mesh mesh = new Mesh(md, mat)
      ..rotX(3.14 / 2)
      ..rotZ(3.14);
    Node n = new Node(mesh);
    //n.invert = true;
    n.lookAt(new Vector(100.0, 0.0, -100.0));
    //n.matrix.scale(0.02);

    Vector axis = new Vector(0.0, 0.0, 1.0);
    Quaternion start = new Quaternion().fromRotationMatrix4(n.transform);
    Quaternion end =
        new Quaternion().setAxisAngle(axis, 3.14);
    Quaternion work = new Quaternion();
    double time = 0.0;

    n.setAnimateCallback((Node node, double elapsedMs) {
      if (time < 1.0) {
        work.slerp(start, end, time += 0.2 * elapsedMs / 1000);
        work.toRotationMatrix4(node.transform);
        return;
      } else {
        time = 0.0;
        double angle;
        if (rng.nextBool()) {
          axis..set(rng.nextDouble(), rng.nextDouble(), rng.nextDouble());
          axis.normalize();
          angle = 2  * Math.PI * rng.nextDouble();
        } else {
          axis.set(0.0, 0.0, 0.0);
          angle = 0.0;
        }
        start.fromRotationMatrix4(node.transform);
        end.setAxisAngle(axis, angle);
      }
    });

    prg.add(n);

    ShaderProgram programSprites =
        chronosGL.createProgram(createPointSpritesShader());
    programSprites.add(Utils.MakeParticles(2000));

    Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
      chronosGL.run();
    });
  });
}
