import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, -45.0, 0.3);
  Perspective perspective = new Perspective(orbit, 0.1, 2520.0);

  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);
  ChronosFramebuffer fb = new ChronosFramebuffer(chronosGL.gl, width, height);
  RenderingPhase phase1 = new RenderingPhase("phase1", chronosGL.gl, fb);
  phase1.viewPortW = width;
  phase1.viewPortH = height;

  ShaderProgram prg1 = phase1.createProgram(createPlane2GreyShader());

  RenderingPhase phase2 = new RenderingPhase("phase2", chronosGL.gl, null);
  phase2.viewPortW = width;
  phase2.viewPortH = height;

  ShaderProgram prg2 = phase2.createProgram(createSobelShader());
  prg2
    ..SetUniform(uCanvasSize, new VM.Vector2(0.0 + width, 0.0 + height))
    ..SetUniform(uTexture2Sampler, fb.depthTexture)
    ..SetUniform(uTextureSampler, fb.colorTexture)
    ..add(UnitMesh);

  RenderingPhase phase1only =
      new RenderingPhase("phase1only", chronosGL.gl, null);
  phase1only.viewPortW = width;
  phase1only.viewPortH = height;
  phase1only.AddShaderProgram(prg1);

  bool useSobel = true;

  HTML.InputElement myselect =
      HTML.document.querySelector('#activate') as HTML.InputElement;
  myselect.onChange.listen((HTML.Event e) {
    useSobel = myselect.checked;
  });

  loadObj("../ct_logo.obj").then((MeshData md) {
    Material mat = new Material("mat");
    Mesh mesh = new Mesh(md.name, md, mat)
      ..rotX(3.14 / 2)
      ..rotZ(3.14);
    Node n = new Node("wrapper", mesh);
    //n.invert = true;
    n.lookAt(new VM.Vector3(100.0, 0.0, -100.0));
    //n.matrix.scale(0.02);

    prg1.add(mesh);

    double _lastTimeMs = 0.0;
    void animate(timeMs) {
      timeMs = 0.0 + timeMs;
      double elapsed = timeMs - _lastTimeMs;
      _lastTimeMs = timeMs;
      orbit.azimuth += 0.001;
      orbit.animate(elapsed);
      //perspective.Adjust(canvas);
      if (useSobel) {
        phase1.draw([perspective]);
        phase2.draw([perspective]);
      } else {
        phase1only.draw([perspective]);
      }
      HTML.window.animationFrame.then(animate);
    }

    Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
      animate(0.0);
    });
  });
}
