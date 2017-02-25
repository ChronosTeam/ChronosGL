import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'package:vector_math/vector_math.dart' as VM;

List<ShaderObject> blurdShader() {
  return [
    new ShaderObject("bluredV")
      ..AddAttributeVar(aVertexPosition)
      ..SetBodyWithMain([NullVertexBody]),
    new ShaderObject("bluredF")
      ..AddUniformVar(uColorAlpha)
      ..SetBodyWithMain(["gl_FragColor = ${uColorAlpha};"])
  ];
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, preserveDrawingBuffer: true);
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  Perspective perspective = new Perspective(orbit);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  phase.clearDepthBuffer = true;
  phase.clearColorBuffer = false;

  // Every frame 4% of the screen will be blurred
  RenderProgram shaderProgramBlur = phase.createProgram(blurdShader());
  Material matBlur = new Material.Transparent("blur", new BlendEquation.Standard())
    ..SetUniform(uColorAlpha, new VM.Vector4(0.0, 0.0, 0.0, 0.04));
  shaderProgramBlur.add(new Node("", ShapeQuad(chronosGL, 1), matBlur));

  // stars
  RenderProgram sprites = phase.createProgram(createPointSpritesShader());
  sprites.add(Utils.MakeParticles(chronosGL, 2000));

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
    orbit.azimuth += 0.005;
    orbit.animate(elapsed);

    List<DrawStats> stats = [];
    phase.draw([perspective], stats);
    List<String> out = [];
    for (DrawStats d in stats) {
      out.add(d.toString());
    }

    fps.UpdateFrameCount(timeMs, out.join("<br>"));

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
