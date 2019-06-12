import 'dart:html' as HTML;
import 'dart:math' as Math;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

final ShaderObject stencilVertexShader = ShaderObject("stencilV")
  ..AddAttributeVars([aPosition])
  ..SetBody([NullVertexShaderString]);

final ShaderObject stencilFragmentShader = ShaderObject("stencilF")
  ..AddUniformVars([
    uTime,
    uCanvasSize,
  ])
  ..SetBody([
    """
void main() {
   float radius = ${uTime} * max(${uCanvasSize}.x, ${uCanvasSize}.y);
   vec2 center = vec2(${uCanvasSize}.x, ${uCanvasSize}.y) * 0.5;
   if (distance(center, gl_FragCoord.xy) > radius) {
      // It does not really matter what we write.
      // Any write will set the stencil buffer to 1
      ${oFragColor} = vec4(1.0);   
   } else {
      // do not set color and hence do not change stencil buffer 
      discard;
   }
}
"""
  ]);
final TheStencilFunction StencilAlways = TheStencilFunction(GL_ALWAYS, 1, 0xff);

final TheStencilFunction StencilEqualZero =
    TheStencilFunction(GL_EQUAL, 0, 0xff);

final TheStencilFunction StencilNotEqualZero =
    TheStencilFunction(GL_NOTEQUAL, 0, 0xff);

final TheStencilOp StencilWriteIfPixelSet =
    TheStencilOp(GL_KEEP, GL_KEEP, GL_REPLACE);

final TheStencilOp StencilWriteNever = TheStencilOp(GL_KEEP, GL_KEEP, GL_KEEP);

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

  final RenderPhase phase = RenderPhase("main", cgl)
    ..viewPortW = width
    ..viewPortH = height;

  final Material matGenStencil = Material("stencil")
    ..SetUniform(uTime, 1.0)
    ..SetUniform(uCanvasSize, VM.Vector2(0.0 + width, 0.0 + height))
    ..ForceUniform(cStencilFunc, StencilAlways)
    ..ForceUniform(cStencilOp, StencilWriteIfPixelSet)
    ..ForceUniform(cStencilWrite, 0xff) // only write stencil
    ..ForceUniform(cDepthWrite, false)
    ..ForceUniform(cColorWrite, [false, false, false, false])
    ..ForceUniform(cDepthTest, false);
  {
    Scene scene = Scene(
        "stencil",
        RenderProgram(
            "stencil", cgl, stencilVertexShader, stencilFragmentShader),
        []);
    phase.add(scene);
    scene.add(Node("unit", ShapeQuad(scene.program, 1), matGenStencil));
  }

  final Material matOnStencil = Material("onstencil")
    ..SetUniform(uColor, ColorRed)
    ..ForceUniform(cStencilFunc, StencilNotEqualZero)
    ..ForceUniform(cStencilOp, StencilWriteNever)
    ..ForceUniform(cStencilWrite, 0x0) // only write color/depth
    ..ForceUniform(cDepthWrite, true)
    ..ForceUniform(cColorWrite, [true, true, true, true])
    ..ForceUniform(cDepthTest, true);

  {
    Scene scene = Scene(
        "onstencil",
        RenderProgram(
            "onstencil", cgl, solidColorVertexShader, solidColorFragmentShader),
        [perspective]);
    phase.add(scene);
    scene.add(Node("cylinder", ShapeCylinder(scene.program, 2.0, 4.0, 4.0, 32),
        matOnStencil)
      ..setPos(10.0, 0.0, -10.0));

    scene.add(Node(
        "torus",
        ShapeTorusKnot(scene.program, radius: 2.5, tubeRadius: 0.8),
        matOnStencil)
      ..setPos(10.0, 0.0, 10.0));
  }

  final Material matOffStencil = Material("offstencil")
    ..SetUniform(uColor, ColorBlue)
    ..ForceUniform(cStencilFunc, StencilEqualZero)
    ..ForceUniform(cStencilOp, StencilWriteNever)
    ..ForceUniform(cStencilWrite, 0x0) // only write color/depth
    ..ForceUniform(cDepthWrite, true)
    ..ForceUniform(cColorWrite, [true, true, true, true])
    ..ForceUniform(cDepthTest, true);

  {
    Scene scene = Scene(
        "onstencil",
        RenderProgram(
            "onstencil", cgl, solidColorVertexShader, solidColorFragmentShader),
        [perspective]);
    phase.add(scene);
    scene.add(Node(
        "sphere",
        ShapeIcosahedron(scene.program, subdivisions: 3, scale: 5.0),
        matOffStencil)
      ..setPos(0.0, 0.0, 0.0));

    scene.add(Node(
        "cube", ShapeCube(scene.program, x: 2.0, y: 2.0, z: 2.0), matOffStencil)
      ..setPos(-10.0, 0.0, -10.0));
  }
  orbit.azimuth = 1.1;
  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    //print ("@@ ${timeMs / 2000.0 % 1.0} ");
    matGenStencil.ForceUniform(
        uTime, (Math.sin(timeMs / 2000.0) + 1.0) * 0.25);

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
