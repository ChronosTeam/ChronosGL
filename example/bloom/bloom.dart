import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:html' as HTML;

final HTML.InputElement gLuminance = HTML.document.querySelector('#luminance');
final HTML.InputElement gIntensity = HTML.document.querySelector('#intensity');

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(165.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);

  ChronosFramebuffer fb =
      new ChronosFramebuffer.Default(chronosGL, width, height);

  ChronosFramebuffer fb1 =
      new ChronosFramebuffer.Default(chronosGL, width ~/ 2, height ~/ 2);
  ChronosFramebuffer fb2 =
      new ChronosFramebuffer.Default(chronosGL, width ~/ 2, height ~/ 2);

  RenderPhase phaseMain = new RenderPhase("main", chronosGL, fb)
    ..viewPortW = width
    ..viewPortH = height;

  ShaderProgram perlinNoise =
      phaseMain.createProgram(createPerlinNoiseColorShader(true));

  Material mat = new Material("mat");
  Node node = new Node("torus", ShapeTorusKnot(perlinNoise), mat);
  perlinNoise.add(node);

  RenderPhase phaseHighPass = new RenderPhase("highpass", chronosGL, fb2)
    ..viewPortW = width ~/ 2
    ..viewPortH = height ~/ 2;

  ShaderProgram progHighPass = phaseHighPass
      .createProgram(createLuminosityHighPassShader())
        ..SetInput(uRange, new VM.Vector2(0.65, 0.65 + 0.01))
        ..SetInput(uColorAlpha, new VM.Vector4.zero())
        ..SetInput(uTexture, fb.colorTexture);

  progHighPass.add(UnitNode(progHighPass));

  int radius = 6;

  RenderPhase phaseBloom1 = new RenderPhase("bloom1", chronosGL, fb1)
    ..viewPortW = width ~/ 2
    ..viewPortH = height ~/ 2;
  ShaderProgram bloom1 = phaseBloom1
      .createProgram(createBloomTextureShader(radius, radius * 1.0))
        ..SetInput(uDirection, new VM.Vector2(1.5, 0.0))
        ..SetInput(uTexture, fb2.colorTexture);
  bloom1.add(UnitNode(bloom1));

  RenderPhase phaseBloom2 = new RenderPhase("bloom2", chronosGL, fb2)
    ..viewPortW = width ~/ 2
    ..viewPortH = height ~/ 2;
  ShaderProgram bloom2 = phaseBloom2.createProgram(createBloomTextureShader(radius, radius * 1.0))
    ..SetInput(uDirection, new VM.Vector2(0.0, 1.5))
    ..SetInput(uTexture, fb1.colorTexture);
    bloom2.add(UnitNode(bloom2));

  RenderPhase phaseApply = new RenderPhase("apply", chronosGL, null)
    ..viewPortW = width
    ..viewPortH = height;
  RenderProgram progApply =
      phaseApply.createProgram(createApplyBloomEffectShader())
        ..SetInput(uTexture, fb.colorTexture)
        ..SetInput(uScale, 0.6)
        ..SetInput(uColor, ColorWhite)
        ..SetInput(uTexture2, fb2.colorTexture);
  progApply.add(UnitNode(progApply));

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    double v;
    timeMs = timeMs + 0.0;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.01;
    orbit.animate(elapsed);
    perlinNoise.ForceInput(uTime, timeMs / 1000.0);
    phaseMain.draw([perspective]);
    v = gLuminance.valueAsNumber * 1.0;
    progHighPass.ForceInput(uRange, new VM.Vector2(v, v + 0.01));
    phaseHighPass.draw([perspective]);
    phaseBloom1.draw([perspective]);
    phaseBloom2.draw([perspective]);
    v = gIntensity.valueAsNumber * 1.0;
    progApply.ForceInput(uScale, v);
    phaseApply.draw([perspective]);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
