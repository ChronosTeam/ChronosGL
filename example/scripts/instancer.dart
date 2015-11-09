import 'package:chronosgl/chronosgl.dart';
import 'dart:typed_data';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 265.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);

  Material mat = new Material();
  Mesh m = chronosGL.shapes.createTorusKnot(radius: 12.0).createMesh(mat);

  int count = 1000;
  Float32List translations = new Float32List(count * 3);
  Float32List rotations = new Float32List(count * 4);

  Instancer instancer = new Instancer(m, count);

  Spatial spatial = new Spatial();
  Quaternion q = new Quaternion();
  
  int pos = 0;
  for (int x = -5; x < 5; x++) {
    for (int y = -5; y < 5; y++) {
      for (int z = -5; z < 5; z++) {
        spatial.setPos(x * 40, y * 40, z * 30);
        translations.setAll(pos * 3, spatial.getPos().array);
        q.fromRotationMatrix4(spatial.transform);
        rotations.setAll(pos * 3, q.array);
        pos++;
      }
    }
  }

  m.AddBuffer(iaRotatation, rotations);
  m.AddBuffer(iaTranslation, translations);
  ShaderProgram prg = chronosGL.createProgram(instancer.instancedShader);
  prg.addInstancer(instancer);
  chronosGL.getUtils().addParticles(2000, 100);
  chronosGL.run();
}
