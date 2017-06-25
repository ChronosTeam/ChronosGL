import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:typed_data';

import 'package:chronosgl/chronosgl.dart';

final HTML.InputElement gStencil =
    HTML.document.querySelector('#stencil') as HTML.InputElement;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  final int width = canvas.clientWidth;
  final int height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);

  Framebuffer fb = new Framebuffer.DefaultWithStencil(chronosGL, width, height);
  RenderPhase phase = new RenderPhase("main", chronosGL, fb)
    ..viewPortW = width
    ..viewPortH = height
    ..clearStencilBuffer = false;

  TheStencilFunction StencilEqualOne =
      new TheStencilFunction(GL_EQUAL, 1, 0xff);

  Uint32List data = new Uint32List(width * height);
  for (int x = 0; x < width; ++x) {
    for (int y = 0; y < height; ++y) {
      data[y * width + x] = (x & 8) == 0 ? 0 : 1;
    }
  }
  phase.framebuffer.depthTexture.SetImageData(data);

  Scene scene = new Scene(
      "solid",
      new RenderProgram(
          "solid", chronosGL, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);
  phase.add(scene);

  final Material matRed = new Material("red")
    ..SetUniform(uColor, ColorRed)
    ..ForceUniform(cStencilFunc, StencilFunctionNone);

  final Material matBlue = new Material("blue")
    ..SetUniform(uColor, ColorBlue)
    ..ForceUniform(cStencilFunc, StencilEqualOne);

  Node ico = new Node("sphere", ShapeIcosahedron(scene.program, 3), matRed)
    ..setPos(0.0, 0.0, 0.0);
  scene.add(ico);

  Node cube = new Node("cube", ShapeCube(scene.program), matBlue)
    ..setPos(-5.0, 0.0, -5.0);
  scene.add(cube);

  Node cyl = new Node(
      "cylinder", ShapeCylinder(scene.program, 1.0, 3.0, 2.0, 32), matRed)
    ..setPos(5.0, 0.0, -5.0);
  scene.add(cyl);

  Node torus = new Node(
      "torus", ShapeTorusKnot(scene.program, radius: 1.0, tube: 0.4), matBlue)
    ..setPos(5.0, 0.0, 5.0);
  scene.add(torus);

  // using a phase for this simple effect is overkill - this is just
  // demonstrating that it can be done.
  RenderPhase phase2 = new RenderPhase("copy", chronosGL)
    ..viewPortW = width
    ..viewPortH = height;

  UniformGroup uniforms = new UniformGroup("plain")
    ..SetUniform(uCanvasSize, new VM.Vector2(0.0 + width, 0.0 + height))
    ..SetUniform(uTexture, fb.colorTexture);

  Scene postproc = new Scene(
      "postproc",
      new RenderProgram(
          "postproc", chronosGL, copyVertexShader, copyFragmentShader),
      [uniforms]);
  phase2.add(postproc);

  postproc.add(UnitNode(postproc.program));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    matBlue.ForceUniform(
        cStencilFunc, gStencil.checked ? StencilEqualOne : StencilFunctionNone);

    List<DrawStats> stats = [];
    phase.Draw(stats);
    phase2.Draw(stats);
    List<String> out = [];
    for (DrawStats d in stats) {
      out.add(d.toString());
    }

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs, out.join("<br>"));
  }

  animate(0.0);
}
