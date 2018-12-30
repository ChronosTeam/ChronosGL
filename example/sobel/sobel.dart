import 'dart:html' as HTML;
import 'dart:async';
import 'dart:math' as Math;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

const String modelFile = "../ct_logo.obj";

final HTML.InputElement gSobel =
    HTML.document.querySelector('#activate') as HTML.InputElement;

final List<Future<Object>> gLoadables = [];

void main() {
  final StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');
  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  final ChronosGL cgl = ChronosGL(canvas);
  final OrbitCamera orbit = OrbitCamera(15.0, -45.0, 0.3, canvas);
  final Perspective perspective = Perspective(orbit, 0.1, 2520.0)
    ..AdjustAspect(width, height);

  final Framebuffer screen = Framebuffer.Screen(cgl);
  final Framebuffer fb = Framebuffer.Default(cgl, width, height);

  final List<ShaderObject> greyShader = createPlane2GreyShader();
  final RenderProgram progGrey =
      RenderProgram("grey", cgl, greyShader[0], greyShader[1]);

  final RenderProgram progSobel =
      RenderProgram("ssao", cgl, sobelVertexShader, sobelFrgmentShader);

  final UniformGroup uniforms = UniformGroup("plain")
    ..SetUniform(uCanvasSize, VM.Vector2(0.0 + width, 0.0 + height))
    ..SetUniform(uDepthMap, fb.depthTexture)
    ..SetUniform(uTexture, fb.colorTexture);

  final MeshData unitQuad = ShapeQuad(progSobel, 1);
  MeshData ctLogo;
  var future = LoadRaw(modelFile)
    ..then((String content) {
      GeometryBuilder gb = ImportGeometryFromWavefront(content);
      ctLogo = GeometryBuilderToMeshData("", progGrey, gb);
    });
  gLoadables.add(future);

  Material material = Material("mat")
    ..SetUniform(uModelMatrix, VM.Matrix4.identity()..rotateX(Math.pi / 2));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    if (gSobel.checked) {
      // Draw objects into fb
      fb.Activate(GL_CLEAR_ALL, 0, 0, width, height);
      progGrey.Draw(ctLogo, [perspective, material]);
      // Apply sobel to fb and show result on screen
      screen.Activate(GL_CLEAR_ALL, 0, 0, width, height);
      progSobel.Draw(unitQuad, [uniforms]);
    } else {
      progGrey.Draw(ctLogo, [perspective, material]);
    }
    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  Future.wait(gLoadables).then((List list) {
    animate(0.0);
  });
}
