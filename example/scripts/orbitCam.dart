import 'package:chronosgl/chronosgl.dart';

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

  MeshData sphere = chronosGL.shapes.createIcosahedron();
  Material headMat = new Material()..SetUniform(uColor, new Vector(0.94, 0.72, 0.63));
  Mesh head = sphere.createMesh(headMat);
  
  Material eyeMat = new Material()..SetUniform(uColor, new Vector(0.0, 0.0, 1.0));
  Mesh leftEye = sphere.createMesh(eyeMat)
    ..setPos(-0.2, 0.4, -0.8)
    ..transform.setScale(0.2);
  head.add(leftEye);

  Mesh rightEye = sphere.createMesh(eyeMat)
    ..transform.setScale(0.2)
    ..setPos(0.2, 0.4, -0.8);
  head.add(rightEye);
  
  Material noseMat = new Material()..SetUniform(uColor, new Vector(0.9, 0.7, 0.6));
  Mesh nose = sphere.createMesh(noseMat)
    ..transform.setScale(0.3)
    ..setPos(0.0, 0.0, -0.9);
  head.add(nose);

  prg.add(head);

  TextureWrapper tw = chronosGL.getUtils().createParticleTexture();
   chronosGL.getUtils().addParticles(2000, tw);
   TextureWrapper.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
     chronosGL.run();
   });
}
