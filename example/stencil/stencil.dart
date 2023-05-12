import 'dart:html' as HTML;
import 'dart:typed_data';

import 'package:chronosgl/chronosgl.dart';

final HTML.InputElement gStencil =
    HTML.document.querySelector('#stencil') as HTML.InputElement;

final ShaderObject stencilVertexShader = ShaderObject("stencilV")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddVaryingVars([vTexUV])
  ..SetBody([NullVertexShaderWithTextureForwardString]);

final ShaderObject stencilFragmentShader = ShaderObject("stencilF")
  ..AddUniformVars([
    uTexture,
  ])
  ..AddVaryingVars([vTexUV])
  ..SetBody([
    """
void main() {
   vec4 p = texture(${uTexture}, ${vTexUV});
   if (p.r > 0.0 || p.g >  0.0 || p.b > 0.0) {
      // It does not really matter what we write.
      // Any write will set the stencil buffer to 1
      ${oFragColor} = vec4(1.0, 1.0, 0.0, 1.0);   
   } else {
      // do not set color and hence do not change stencil buffer 
      discard;
   }
}
"""
  ]);

TypedTextureMutable MakeStripedStencilBuffer(
    ChronosGL cgl, int width, int height, int stripeWidth) {
  Uint8List data = Uint8List(width * height * 4);
  for (int y = 0; y < height; ++y) {
    for (int x = 0; x < width; ++x) {
      int mask = x % (2 * stripeWidth) < stripeWidth ? 0 : 0xff;
      int offset = 4 * (y * width + x);
      data[offset + 0] = mask;
      data[offset + 1] = mask;
      data[offset + 2] = mask;
      data[offset + 3] = mask;
    }
  }

  return TypedTextureMutable(cgl, "frame::depth.stencil", width, height,
      GL_RGBA, TexturePropertiesFramebuffer, GL_RGBA, GL_UNSIGNED_BYTE, data);
}

final TheStencilFunction StencilEqualZero =
    TheStencilFunction(GL_EQUAL, 0, 0xff);

final TheStencilFunction StencilNotEqualZero =
    TheStencilFunction(GL_NOTEQUAL, 0, 0xff);

final TheStencilFunction StencilAlways = TheStencilFunction(GL_ALWAYS, 1, 0xff);

final TheStencilOp StencilWriteNever = TheStencilOp(GL_KEEP, GL_KEEP, GL_KEEP);

final TheStencilOp StencilWriteIfPixelSet =
    TheStencilOp(GL_KEEP, GL_KEEP, GL_REPLACE);

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");

  HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  ChronosGL cgl =
      ChronosGL(canvas, faceCulling: true, preserveDrawingBuffer: true);
  OrbitCamera orbit = OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 1000.0);

  final int width = canvas.clientWidth;
  final int height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);

  // Initialize Stencil Buffer
  // Not we do not suppress writes to color/depth buffers which is
  // nice for debugging. These buffers will be cleared when we write
  // scene. Obviously, we preserve the stencil buffer.

  final TypedTextureMutable stencilBuffer =
      MakeStripedStencilBuffer(cgl, width, height, 8);

  final Material matGenStencil = Material("stencil")
    ..SetUniform(uTexture, stencilBuffer)
    ..ForceUniform(cStencilFunc, StencilAlways)
    ..ForceUniform(cStencilOp, StencilWriteIfPixelSet)
    ..ForceUniform(cStencilWrite, 0xff); // only write stencil

  final RenderProgram stencilWriter =
      RenderProgram("stencil", cgl, stencilVertexShader, stencilFragmentShader);

  cgl.viewport(0, 0, width, height);
  stencilWriter.Draw(ShapeQuad(stencilWriter, 1), [matGenStencil]);

  RenderPhase phase = RenderPhase("main", cgl)
    ..viewPortW = width
    ..viewPortH = height
    ..clearStencilBuffer = false;

  final Material matRed = Material("red")
    ..SetUniform(uColor, ColorRed)
    ..ForceUniform(cStencilFunc, StencilNotEqualZero)
    ..ForceUniform(cStencilOp, StencilWriteNever)
    ..ForceUniform(cStencilWrite, 0x0);

  final Material matBlue = Material("blue")
    ..SetUniform(uColor, ColorBlue)
    ..ForceUniform(cStencilFunc, StencilEqualZero)
    ..ForceUniform(cStencilOp, StencilWriteNever)
    ..ForceUniform(cStencilWrite, 0x0);

  {
    Scene scene = Scene(
        "solid",
        RenderProgram(
            "solid", cgl, solidColorVertexShader, solidColorFragmentShader),
        [perspective]);
    phase.add(scene);

    scene.add(
        Node("sphere", ShapeIcosahedron(scene.program, subdivisions: 3), matRed)
          ..setPos(0.0, 0.0, 0.0));

    scene.add(Node("cube", ShapeCube(scene.program), matBlue)
      ..setPos(-5.0, 0.0, -5.0));

    scene.add(Node(
        "cylinder", ShapeCylinder(scene.program, 1.0, 3.0, 2.0, 32), matRed)
      ..setPos(5.0, 0.0, -5.0));

    scene.add(Node("torus",
        ShapeTorusKnot(scene.program, radius: 1.0, tubeRadius: 0.4), matBlue)
      ..setPos(5.0, 0.0, 5.0));
  }

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    matBlue.ForceUniform(cStencilFunc,
        gStencil.checked! ? StencilEqualZero : StencilFunctionNone);

    matRed.ForceUniform(cStencilFunc,
        gStencil.checked! ? StencilNotEqualZero : StencilFunctionNone);

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
