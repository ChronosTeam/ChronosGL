import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

final ShaderObject blurdVertexShader = ShaderObject("bluredV")
  ..AddAttributeVars([aPosition])
  ..SetBody([NullVertexShaderString]);

final ShaderObject bluredFragmentShader = ShaderObject("bluredF")
  ..AddUniformVars([uColorAlpha])
  ..SetBodyWithMain(["${oFragColor} = ${uColorAlpha};"]);

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective, int num) {
  Scene scene = Scene(
      "stars",
      RenderProgram(
          "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader),
      [perspective]);
  scene.add(Utils.MakeParticles(scene.program, num));
  return scene;
}

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas, preserveDrawingBuffer: true);
  OrbitCamera orbit = OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 1000.0);
  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);
  phase.clearDepthBuffer = true;
  phase.clearColorBuffer = false;

  Scene scene = Scene(
      "blur",
      RenderProgram("blur", cgl, blurdVertexShader, bluredFragmentShader),
      [perspective]);
  phase.add(scene);

  // Every frame 4% of the screen will be blurred
  Material matBlur = Material.Transparent("blur", BlendEquationStandard)
    ..SetUniform(uColorAlpha, VM.Vector4(0.0, 0.0, 0.0, 0.04));
  scene.add(Node("", ShapeQuad(scene.program, 1), matBlur));

  phase.add(MakeStarScene(cgl, perspective, 2000));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.005;
    orbit.animate(elapsed);

    List<DrawStats> stats = [];
    phase.Draw(stats);
    List<String> out = [];
    for (DrawStats d in stats) {
      out.add(d.toString());
    }

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs, out.join("<br>"));
  }

  animate(0.0);
}
