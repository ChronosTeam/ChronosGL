import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', near: 0.1, far: 2520.0);
  ChronosFramebuffer fb = new ChronosFramebuffer(
      chronosGL.gl, chronosGL.perspar.width, chronosGL.perspar.height);

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 15.0, -45.0, 0.3);
  chronosGL.addAnimatable('orbitCam', orbit);

  RenderingPhase phase1 = new RenderingPhase(chronosGL.gl, fb, true);
  ShaderProgram prg1 = phase1.createProgram(createSolidColorShader());

  RenderingPhase phase2 = new RenderingPhase(chronosGL.gl, null, false);
  ShaderProgram prg2 = phase2.createProgram(createSSAOShader());
  Material mat = new Material()
    ..SetUniform(uTexture2Sampler, fb.depthTexture)
    ..SetUniform(uTextureSampler, fb.colorTexture);
  prg2.add(Utils.createQuad(mat, 1));

  RenderingPhase phase1only = new RenderingPhase(chronosGL.gl, null, true);
  phase1only.AddShaderProgram(prg1);

  void ActivateSSAO(bool activate) {
    chronosGL.ClearAllRenderPhases();
    if (activate) {
      chronosGL.addRenderPhase(phase1);
      chronosGL.addRenderPhase(phase2);
    } else {
      chronosGL.addRenderPhase(phase1only);
    }
  }

  ActivateSSAO(true);

  HTML.InputElement myselect =
      HTML.document.querySelector('#activate') as HTML.InputElement;
  myselect.onChange.listen((HTML.Event e) {
    ActivateSSAO(myselect.checked);
  });

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

    prg1.add(mesh);

    Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
      chronosGL.run();
    });
  });
}
