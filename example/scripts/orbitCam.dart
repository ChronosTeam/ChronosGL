import 'package:chronosgl/chronosgl.dart';

import 'package:vector_math/vector_math.dart' as VM;
import 'dart:html' as HTML;

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0);
  Perspective perspective = new Perspective(orbit);
  RenderingPhase phase = new RenderingPhase("main", chronosGL.gl, perspective);
  ShaderProgram prg = phase.createProgram(createSolidColorShader());

  MeshData sphere = Shapes.Icosahedron();
  Material headMat = new Material("head")
    ..SetUniform(uColor, new VM.Vector3(0.94, 0.72, 0.63));
  Mesh head = new Mesh("head", sphere, headMat);

  Material eyeMat = new Material("eye")
    ..SetUniform(uColor, new VM.Vector3(0.0, 0.0, 1.0));
  Mesh leftEye = new Mesh("leftEye", sphere, eyeMat)
    ..setPos(-0.2, 0.4, -0.8)
    ..transform.scale(0.2);
  head.add(leftEye);

  Mesh rightEye = new Mesh("rightEye", sphere, eyeMat)
    ..transform.scale(0.2)
    ..setPos(0.2, 0.4, -0.8);
  head.add(rightEye);

  Material noseMat = new Material("nose")
    ..SetUniform(uColor, new VM.Vector3(0.9, 0.7, 0.6));
  Mesh nose = new Mesh("nose", sphere, noseMat)
    ..transform.scale(0.3)
    ..setPos(0.0, 0.0, -0.9);
  head.add(nose);

  prg.add(head);

  ShaderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  double _lastTimeMs = 0.0;
  void animate(double timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    perspective.Adjust(canvas);
    phase.draw([]);
    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
