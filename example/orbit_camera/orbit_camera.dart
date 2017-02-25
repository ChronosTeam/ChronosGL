import 'package:chronosgl/chronosgl.dart';

import 'package:vector_math/vector_math.dart' as VM;
import 'dart:html' as HTML;

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0);
  Perspective perspective = new Perspective(orbit);
  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram prg = phase.createProgram(createSolidColorShader());

  MeshData sphere = ShapeIcosahedron(chronosGL);
  Material headMat = new Material("head")
    ..SetUniform(uColor, new VM.Vector3(0.94, 0.72, 0.63));
  Node head = new Node("head", sphere, headMat);

  Material eyeMat = new Material("eye")
    ..SetUniform(uColor, new VM.Vector3(0.0, 0.0, 1.0));
  Node leftEye = new Node("leftEye", sphere, eyeMat)
    ..setPos(-0.2, 0.4, -0.8)
    ..transform.scale(0.2);
  head.add(leftEye);

  Node rightEye = new Node("rightEye", sphere, eyeMat)
    ..transform.scale(0.2)
    ..setPos(0.2, 0.4, -0.8);
  head.add(rightEye);

  Material noseMat = new Material("nose")
    ..SetUniform(uColor, new VM.Vector3(0.9, 0.7, 0.6));
  Node nose = new Node("nose", sphere, noseMat)
    ..transform.scale(0.3)
    ..setPos(0.0, 0.0, -0.9);
  head.add(nose);

  prg.add(head);

  RenderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(chronosGL, 2000));

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    perspective.AdjustAspect(w, h);
    phase.viewPortW = w;
    phase.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
