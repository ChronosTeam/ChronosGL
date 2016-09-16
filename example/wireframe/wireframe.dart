import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';

import 'package:vector_math/vector_math.dart' as VM;

import 'dart:web_gl' as WEBGL;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  var ext = GetGlExtensionStandardDerivatives(chronosGL.gl);
  if (ext == null) HTML.window.alert("OES_standard_derivatives not supported");
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  Perspective perspective = new Perspective(orbit);
  RenderPhase phase = new RenderPhase("main", chronosGL.gl);
  RenderProgram program = phase.createProgram(createWireframeShader());
  final Material matWireframe = new Material("wire")
    ..SetUniform(uColorAlpha, new VM.Vector4(1.0, 1.0, 0.0, 1.0))
    ..SetUniform(uColorAlpha2, new VM.Vector4(0.0, 0.0, 0.0, 0.5))
    ..SetUniform(cBlend, true, true)
    ..SetUniform(cBlendEquation, new BlendEquation.Standard());
  {
    Node ico = new Node(
        "sphere",
        ShapeIcosahedron(chronosGL.gl, 2)..generateWireframeCenters(),
        matWireframe)..setPos(0.0, 0.0, 0.0);
    program.add(ico);
  }

  {
    Node cube = new Node(
        "cube",
        ShapeCube(chronosGL.gl)..generateWireframeCenters(),
        matWireframe)..setPos(-5.0, 0.0, -5.0);
    program.add(cube);
  }

  {
    Node cyl = new Node(
        "cylinder",
        ShapeCylinderWireframeFriendly(chronosGL.gl, 3.0, 4.0, 2.0, 16)
          ..generateWireframeCenters(),
        matWireframe)..setPos(5.0, 0.0, -5.0);
    program.add(cyl);
  }

  {
    Node quad = new Node(
        "quad",
        ShapeQuad(chronosGL.gl, 2)..generateWireframeCenters(),
        matWireframe)..setPos(-5.0, 0.0, 5.0);
    program.add(quad);
  }

  {
    Node torus = new Node(
        "torus",
        ShapeTorusKnot(chronosGL.gl, radius: 1.0, tube: 0.4)
          ..generateWireframeCenters(),
        matWireframe)..setPos(5.0, 0.0, 5.0);
    program.add(torus);
  }

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

  chronosGL.gl.enable(WEBGL.CULL_FACE);

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
