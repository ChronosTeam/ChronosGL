import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:typed_data';

import 'package:chronosgl/chronosgl.dart';

final HTML.InputElement gStencil =
    HTML.document.querySelector('#stencil') as HTML.InputElement;

TypedTextureMutable MakeStripedStencilBuffer(
    ChronosGL cgl, int width, int height, int stripeWidth) {
  Uint32List data = Uint32List(width * height);
  for (int x = 0; x < width; ++x) {
    for (int y = 0; y < height; ++y) {
      data[y * width + x] = x % (2 * stripeWidth) < stripeWidth ? 0 : 1;
    }
  }

  return TypedTextureMutable(
      cgl,
      "frame::depth.stencil",
      width,
      height,
      GL_DEPTH24_STENCIL8,
      TexturePropertiesFramebuffer,
      GL_DEPTH_STENCIL,
      GL_UNSIGNED_INT_24_8,
      data);
}

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 1000.0);

  final int width = canvas.clientWidth;
  final int height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);

  // I could not get this work by writing directly to the screen.
  // so we write to fb first and then copy that to the screen.
  TypedTexture colorBuffer = TypedTexture(cgl, "frame::color", width, height,
      GL_RGBA8, TexturePropertiesFramebuffer);
  TypedTextureMutable depthStencilBuffer =
      MakeStripedStencilBuffer(cgl, width, height, 8);
  Framebuffer fb =
      Framebuffer(cgl, colorBuffer, depthStencilBuffer, null, true);

  RenderPhase phase = RenderPhase("main", cgl, fb)
    ..viewPortW = width
    ..viewPortH = height
    ..clearStencilBuffer = false;

  Scene scene = Scene(
      "solid",
      RenderProgram(
          "solid", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);
  phase.add(scene);

  final Material matRed = Material("red")
    ..SetUniform(uColor, ColorRed)
    ..ForceUniform(cStencilFunc, StencilFunctionNone);

  final TheStencilFunction StencilEqualOne =
      TheStencilFunction(GL_EQUAL, 1, 0xff);

  final Material matBlueStencil = Material("blue")
    ..SetUniform(uColor, ColorBlue)
    ..ForceUniform(cStencilFunc, StencilEqualOne);

  scene.add(Node("sphere", ShapeIcosahedron(scene.program, 3), matRed)
    ..setPos(0.0, 0.0, 0.0));

  scene.add(Node("cube", ShapeCube(scene.program), matBlueStencil)
    ..setPos(-5.0, 0.0, -5.0));

  scene.add(
      Node("cylinder", ShapeCylinder(scene.program, 1.0, 3.0, 2.0, 32), matRed)
        ..setPos(5.0, 0.0, -5.0));

  scene.add(Node(
      "torus",
      ShapeTorusKnot(scene.program, radius: 1.0, tubeRadius: 0.4),
      matBlueStencil)
    ..setPos(5.0, 0.0, 5.0));

  // using a phase for this simple effect is overkill - this is just
  // demonstrating that it can be done.
  RenderPhase phase2 = RenderPhase("copy", cgl)
    ..viewPortW = width
    ..viewPortH = height;

  UniformGroup uniforms = UniformGroup("plain")
    ..SetUniform(uCanvasSize, VM.Vector2(0.0 + width, 0.0 + height))
    ..SetUniform(uTexture, fb.colorTexture);

  Scene postproc = Scene(
      "postproc",
      RenderProgram("postproc", cgl, copyVertexShader, copyFragmentShader),
      [uniforms]);
  phase2.add(postproc);

  postproc.add(UnitNode(postproc.program));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    matBlueStencil.ForceUniform(
        cStencilFunc, gStencil.checked ? StencilEqualOne : StencilFunctionNone);

    List<DrawStats> stats = [];
    phase.Draw(stats);
    phase2.Draw(stats);
    List<String> out = [];
    for (DrawStats d in stats) {
      out.add(d.toString());
    }

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs, out.join("<br>"));
  }

  animate(0.0);
}
