import 'package:chronosgl/chronosgl.dart';

import 'package:vector_math/vector_math.dart' as VM;

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  ShaderProgram prg = chronosGL.createProgram(createSolidColorShader());
  Camera camera = chronosGL.getCamera();

  OrbitCamera orbit = new OrbitCamera(camera, 15.0);
  chronosGL.addAnimatable('orbitCam', orbit);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    //orbit.setPosFromSpherical(15.0, time*0.001, time*0.0005);
    orbit.azimuth += 0.001;
  });

  MeshData sphere = Shapes.Icosahedron();
  Material headMat = new Material()
    ..SetUniform(uColor, new VM.Vector3(0.94, 0.72, 0.63));
  Mesh head = new Mesh(sphere, headMat);

  Material eyeMat = new Material()
    ..SetUniform(uColor, new VM.Vector3(0.0, 0.0, 1.0));
  Mesh leftEye = new Mesh(sphere, eyeMat)
    ..setPos(-0.2, 0.4, -0.8)
    ..transform.scale(0.2);
  head.add(leftEye);

  Mesh rightEye = new Mesh(sphere, eyeMat)
    ..transform.scale(0.2)
    ..setPos(0.2, 0.4, -0.8);
  head.add(rightEye);

  Material noseMat = new Material()
    ..SetUniform(uColor, new VM.Vector3(0.9, 0.7, 0.6));
  Mesh nose = new Mesh(sphere, noseMat)
    ..transform.scale(0.3)
    ..setPos(0.0, 0.0, -0.9);
  head.add(nose);

  prg.add(head);

  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
