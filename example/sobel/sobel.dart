import 'dart:html' as HTML;
import 'dart:async';
import 'dart:math' as Math;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

const String modelFile = "../ct_logo.obj";

final HTML.InputElement gSobel =
    HTML.document.querySelector('#activate') as HTML.InputElement;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, -45.0, 0.3, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 2520.0)
    ..AdjustAspect(width, height);

  Framebuffer screen = new Framebuffer.Screen(chronosGL);
  Framebuffer fb = new Framebuffer.Default(chronosGL, width, height);

  List<ShaderObject> greyShader = createPlane2GreyShader();
  RenderProgram progGrey =
      new RenderProgram("grey", chronosGL, greyShader[0], greyShader[1]);

  List<ShaderObject> sobelShader = createSobelShader();
  RenderProgram progSobel =
      new RenderProgram("ssao", chronosGL, sobelShader[0], sobelShader[1]);

  UniformGroup uniforms = new UniformGroup("plain")
    ..SetUniform(uCanvasSize, new VM.Vector2(0.0 + width, 0.0 + height))
    ..SetUniform(uDepthMap, fb.depthTexture)
    ..SetUniform(uTexture, fb.colorTexture);

  MeshData unitQuad = ShapeQuad(progSobel, 1);
  MeshData ctLogo;
  Material material = new Material("mat")
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity()..rotateX(Math.PI / 2));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
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
  }

  List<Future<Object>> futures = [
    LoadRaw(modelFile),
  ];

  Future.wait(futures).then((List list) {
    GeometryBuilder gb = ImportGeometryFromWavefront(list[0]);
    ctLogo = GeometryBuilderToMeshData("", progGrey, gb);

    animate(0.0);
  });
}
