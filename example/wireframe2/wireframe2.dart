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
  chronosGL.enable(WEBGL.CULL_FACE);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  Perspective perspective = new Perspective(orbit);
  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram program = phase.createProgram(createSolidColorShader());
  final Material matWireframe = new Material("wire")
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0))
    ..SetUniform(cBlend, true, true)
    ..SetUniform(cBlendEquation, new BlendEquation.Standard());

  {
    GeometryBuilder gb = IcosahedronGeometry(2);
    Node ico = new Node(
        "sphere",
        GeometryBuilderToMeshDataLines("icosahedron", chronosGL, gb),
        matWireframe)..setPos(0.0, 0.0, 0.0);
    program.add(ico);
  }

  {
    GeometryBuilder gb = CubeGeometry();
    Node cube = new Node(
        "cube",
        GeometryBuilderToMeshDataLines("cube", chronosGL, gb),
        matWireframe)..setPos(-5.0, 0.0, -5.0);
    program.add(cube);
  }

  {
    GeometryBuilder gb = WedgeGeometry();
    Node wedge = new Node(
        "wedge",
        GeometryBuilderToMeshDataLines("wedge", chronosGL, gb),
        matWireframe)..setPos(0.0, -5.0, 0.0);
    program.add(wedge);
  }

  {
    GeometryBuilder gb = CylinderGeometry(3.0, 4.0, 2.0, 16, false);
    Node cyl = new Node(
        "cylinder",
        GeometryBuilderToMeshDataLines("cylinder", chronosGL, gb),
        matWireframe)..setPos(5.0, 0.0, -5.0);
    program.add(cyl);
  }

  {
    GeometryBuilder gb = QuadGeometry(2);
    Node quad = new Node(
        "quad",
        GeometryBuilderToMeshDataLines("quad", chronosGL, gb),
        matWireframe)..setPos(-5.0, 0.0, 5.0);
    program.add(quad);
  }

  {
    GeometryBuilder gb = ShapeTorusKnotGeometry(radius: 1.0, tube: 0.4);
    Node torus = new Node(
        "torus",
        GeometryBuilderToMeshDataLines("torus", chronosGL, gb),
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

  animate(0.0);
}
