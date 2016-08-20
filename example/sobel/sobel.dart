import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  Perspective perspective = new Perspective(0.1, 2520.0);
  OrbitCamera orbit = new OrbitCamera(15.0, -45.0, 0.3);


  perspective.Adjust(canvas);
  ChronosFramebuffer fb = new ChronosFramebuffer(
      chronosGL.gl, perspective.width, perspective.height);
  RenderingPhase phase1 = new RenderingPhase(chronosGL.gl, orbit, perspective, fb);

  ShaderProgram prg1 = phase1.createProgram(createPlane2GreyShader());

  RenderingPhase phase2 = new RenderingPhase(chronosGL.gl, orbit, perspective, null);
  ShaderProgram prg2 = phase2.createProgram(createSobelShader());
  Material mat = new Material()
    ..SetUniform(uTexture2Sampler, fb.depthTexture)
    ..SetUniform(uTextureSampler, fb.colorTexture);
  prg2.add(new Mesh(Shapes.Quad(1), mat));

  RenderingPhase phase1only = new RenderingPhase(chronosGL.gl, orbit, perspective, null);
  phase1only.AddShaderProgram(prg1);

  bool useSobel = true;

  HTML.InputElement myselect =
      HTML.document.querySelector('#activate') as HTML.InputElement;
  myselect.onChange.listen((HTML.Event e) {
    useSobel = myselect.checked;
  });

  loadObj("../ct_logo.obj").then((MeshData md) {
    Material mat = new Material();
    Mesh mesh = new Mesh(md, mat)
      ..rotX(3.14 / 2)
      ..rotZ(3.14);
    Node n = new Node(mesh);
    //n.invert = true;
    n.lookAt(new VM.Vector3(100.0, 0.0, -100.0));
    //n.matrix.scale(0.02);

    prg1.add(mesh);

    double _lastTimeMs = 0.0;
    void animate(timeMs) {
      double elapsed = timeMs - _lastTimeMs;
      _lastTimeMs = timeMs;
      orbit.azimuth += 0.001;
      orbit.animate(elapsed);
      //perspective.Adjust(canvas);
      if (useSobel) {
        phase1.draw([]);
        phase2.draw([]);
      } else {
        phase1only.draw([]);
      }
      HTML.window.animationFrame.then(animate);
    }

    Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
      animate(0.0);
    });
  });
}
