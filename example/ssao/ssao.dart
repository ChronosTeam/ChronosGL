import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', near: 0.1, far: 2520.0);

  ChronosFramebuffer fb = new ChronosFramebuffer(
      chronosGL.gl, chronosGL.perspar.width, chronosGL.perspar.height);

  OrbitCamera orbit = new OrbitCamera(15.0, -45.0, 0.3);
  RenderingPhase phase1 = chronosGL.createPhase(orbit, fb);

  ShaderProgram prg1 = phase1.createProgram(createSolidColorShader());

  RenderingPhase phase2 = chronosGL.createPhase(orbit, null);
  ShaderProgram prg2 = phase2.createProgram(createSSAOShader());
  Material mat = new Material()
    ..SetUniform(uTexture2Sampler, fb.depthTexture)
    ..SetUniform(uTextureSampler, fb.colorTexture);
  prg2.add(new Mesh(Shapes.Quad(1), mat));

  RenderingPhase phase1only = chronosGL.createPhase(orbit, null);
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

  loadObj("../ct_logo.obj").then((MeshData md) {
    Material mat = new Material()
      ..SetUniform(uColor, new VM.Vector3(0.9, 0.9, 0.9));
    Mesh mesh = new Mesh(md, mat)
      ..rotX(3.14 / 2)
      ..rotZ(3.14);
    Node n = new Node(mesh)
      //n.invert = true;
      ..lookAt(new VM.Vector3(100.0, 0.0, -100.0));
    //n.matrix.scale(0.02);

    prg1.add(mesh);

    double _lastTimeMs = 0.0;
    void animate(timeMs) {
      double elapsed = timeMs - _lastTimeMs;
      _lastTimeMs = timeMs;
      orbit.animate(elapsed);
      fps.UpdateFrameCount(timeMs);
      chronosGL.draw();
      HTML.window.animationFrame.then(animate);
    }
    Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
      animate(0.0);
    });
  });
}
