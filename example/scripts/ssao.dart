import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas',
      useFramebuffer: true,
      fxShader: createSSAOShader(),
      near: 0.1,
      far: 2520.0);
  ShaderProgram prg = chronosGL.createProgram(createSolidColorShader());
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 15.0, -45.0, 0.3);
  chronosGL.addAnimatable('orbitCam', orbit);

  loadObj("ct_logo.obj").then((MeshData md) {
    Material mat = new Material()
      ..SetUniform(uColor, new Vector(0.9, 0.9, 0.9));
    Mesh mesh = md.createMesh(mat)
      ..rotX(3.14 / 2)
      ..rotZ(3.14);
    Node n = new Node(mesh)
      //n.invert = true;
      ..lookAt(new Vector(100.0, 0.0, -100.0));
    //n.matrix.scale(0.02);

    prg.add(mesh);

    TextureWrapper.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
      chronosGL.run();
    });
  });
}
