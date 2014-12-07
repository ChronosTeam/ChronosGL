import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  ShaderProgram prg = chronosGL.createProgram( createSolidColorShader());
  Camera camera = chronosGL.getCamera();

  OrbitCamera orbit = new OrbitCamera(camera, 15.0);
  orbit.setPosFromSpherical(15.0, 15.0, 12.0);
  
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    //orbit.setPosFromSpherical(15.0, time*0.001, time*0.0005);
  });
  
  chronosGL.addAnimatable('orbitCam', orbit);
  
  MeshData sphere = chronosGL.getUtils().createIcosahedron();

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

  prg.add( head);
  
  chronosGL.getUtils().addParticles(2000, 100);
  
  chronosGL.run();
}
