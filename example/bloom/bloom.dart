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

  RenderProgram perlinNoise =
      phaseMain.createProgram(createPerlinNoiseColorShader(true));

  Material mat = new Material("mat");
  Node node = new Node("torus", ShapeTorusKnot(perlinNoise), mat);
  perlinNoise.add(node);

  RenderPhase phaseHighPass = new RenderPhase("highpass", chronosGL, fb2)
    ..viewPortW = width ~/ 2
    ..viewPortH = height ~/ 2;

  Material uniformsHighPass = new Material.Plain("uniformsHighPass")
    ..SetUniform(uRange, new VM.Vector2(0.65, 0.65 + 0.01))
        ..SetUniform(uColorAlpha, new VM.Vector4.zero())
        ..SetUniform(uTexture, fb.colorTexture);

  RenderProgram progHighPass = phaseHighPass
      .createProgram(createLuminosityHighPassShader());


  progHighPass.add(UnitNode(progHighPass));

  int radius = 6;

  RenderPhase phaseBloom1 = new RenderPhase("bloom1", chronosGL, fb1)
    ..viewPortW = width ~/ 2
    ..viewPortH = height ~/ 2;

  Material uniformsBloom1 = new Material.Plain("uniformBloom1")
   ..SetUniform(uDirection, new VM.Vector2(1.5, 0.0))
        ..SetUniform(uTexture, fb2.colorTexture);
  RenderProgram bloom1 = phaseBloom1
      .createProgram(createBloomTextureShader(radius, radius * 1.0));

  bloom1.add(UnitNode(bloom1));

  RenderPhase phaseBloom2 = new RenderPhase("bloom2", chronosGL, fb2)
    ..viewPortW = width ~/ 2
    ..viewPortH = height ~/ 2;
    Material uniformsBloom2 = new Material.Plain("uniformBloom2")
   ..SetUniform(uDirection, new VM.Vector2(0.0, 1.5))
        ..SetUniform(uTexture, fb1.colorTexture);
  RenderProgram bloom2 = phaseBloom2.createProgram(createBloomTextureShader(radius, radius * 1.0));

    bloom2.add(UnitNode(bloom2));

  RenderPhase phaseApply = new RenderPhase("apply", chronosGL, null)
    ..viewPortW = width
    ..viewPortH = height;
   Material uniformsApply = new Material.Plain("uniformApply")
      ..SetUniform(uTexture, fb.colorTexture)
        ..SetUniform(uScale, 0.6)
        ..SetUniform(uColor, ColorWhite)
        ..SetUniform(uTexture2, fb2.colorTexture);
  RenderProgram progApply =
      phaseApply.createProgram(createApplyBloomEffectShader());

  progApply.add(UnitNode(progApply));

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    double v;
    timeMs = timeMs + 0.0;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.01;
    orbit.animate(elapsed);
    mat.ForceUniform(uTime, timeMs / 1000.0);
    phaseMain.draw([perspective]);
    v = gLuminance.valueAsNumber * 1.0;
    uniformsHighPass.ForceUniform(uRange, new VM.Vector2(v, v + 0.01));
    phaseHighPass.draw([perspective, uniformsHighPass]);
    phaseBloom1.draw([perspective, uniformsBloom1]);
    phaseBloom2.draw([perspective, uniformsBloom2]);
    v = gIntensity.valueAsNumber * 1.0;
    uniformsApply.ForceUniform(uScale, v);
    phaseApply.draw([perspective, uniformsApply]);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
