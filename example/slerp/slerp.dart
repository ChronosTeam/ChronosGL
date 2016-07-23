import 'package:chronosgl/chronosgl.dart';
import 'dart:math' as Math;
import 'package:vector_math/vector_math.dart' as VM;

VM.Quaternion slerp(VM.Quaternion a, VM.Quaternion b, double t) {
  double ax = a[0], ay = a[1], az = a[2], aw = a[3];
  double bx = b[0], by = b[1], bz = b[2], bw = b[3];
  double omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if ((1.0 - cosom) > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  return new VM.Quaternion(scale0 * ax + scale1 * bx, scale0 * ay + scale1 * by,
      scale0 * az + scale1 * bz, scale0 * aw + scale1 * bw);
}

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
    n.lookAt(new VM.Vector3(100.0, 0.0, -100.0));
    //n.matrix.scale(0.02);

    VM.Vector3 axis = new VM.Vector3(0.0, 0.0, 1.0);
    VM.Quaternion start = new VM.Quaternion.identity();
    VM.Matrix3 qm = new VM.Matrix3.zero();
    qm.copyFromArray(new Matrix3.fromM4(n.transform).array);
    start.setFromRotation(qm);
    VM.Quaternion end = new VM.Quaternion.identity();
    end.setAxisAngle(axis, 3.14);
    double time = 0.0;

    n.setAnimateCallback((Node node, double elapsedMs) {
      if (time < 1.0) {
        VM.Quaternion work = slerp(start, end, time += 0.2 * elapsedMs / 1000);
        VM.Matrix3 rm = work.asRotationMatrix();
        var t = node.transform;
        var s = rm.storage;
        t[0] = s[0];
        t[1] = s[1];
        t[2] = s[2];
        t[3] = 0.0;
        t[4] = s[3];
        t[5] = s[4];
        t[6] = s[5];
        t[7] = 0.0;
        t[8] = s[6];
        t[9] = s[7];
        t[10] = s[8];
        t[11] = 0.0;
        t[12] = 0.0;
        t[13] = 0.0;
        t[14] = 0.0;
        t[15] = 1.0;
        return;
      } else {
        print("new rotation");
        time = 0.0;
        double angle;
        if (rng.nextBool()) {
          axis..setValues(rng.nextDouble(), rng.nextDouble(), rng.nextDouble());
          axis.normalize();
          angle = 2 * Math.PI * rng.nextDouble();
        } else {
          axis.setValues(0.0, 0.0, 0.0);
          angle = 0.0;
        }
        print("new rotation axis: " + axis.toString());
        qm.copyFromArray(new Matrix3.fromM4(node.transform).array);
        start.setFromRotation(qm);
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
