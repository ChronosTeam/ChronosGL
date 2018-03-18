import 'package:chronosgl/chronosgl.dart';

import 'package:vector_math/vector_math.dart' as VM;
import 'dart:html' as HTML;

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective, int num) {
  Scene scene = new Scene(
      "stars",
      new RenderProgram(
          "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader),
      [perspective]);
  scene.add(Utils.MakeParticles(scene.program, num));
  return scene;
}

Node MakeHead(RenderProgram program) {
  MeshData sphere = ShapeIcosahedron(program);
  Material headMat = new Material("head")
    ..SetUniform(uColor, new VM.Vector3(0.94, 0.72, 0.63));
  Node head = new Node("head", sphere, headMat);

  Material eyeMat = new Material("eye")..SetUniform(uColor, ColorBlue);
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
  return head;
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  final Scene scene = new Scene(
      "objects",
      new RenderProgram(
          "solid", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);

  scene.add(MakeHead(scene.program));

  final RenderPhaseResizeAware phase =
      new RenderPhaseResizeAware("main", cgl, canvas, perspective)
        ..add(scene)
        ..add(MakeStarScene(cgl, perspective, 2000));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.Draw();

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
