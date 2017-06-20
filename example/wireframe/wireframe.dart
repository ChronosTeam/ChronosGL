import 'dart:html' as HTML;

import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';

// TODO: the torusknot cannot be seen through the other objects -why

final HTML.InputElement gOpaque =
    HTML.document.querySelector('#opaque') as HTML.InputElement;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);
  RenderPhase phase = new RenderPhase("main", chronosGL);
  ShaderProgram program = phase.createProgram(createWireframeShader());
  final Material matWireframe = new Material("wire")
    ..SetUniform(uColorAlpha, new VM.Vector4(1.0, 1.0, 0.0, 1.0))
    ..SetUniform(uColorAlpha2, new VM.Vector4(0.0, 0.0, 0.0, 0.5));

  {
    GeometryBuilder gb = IcosahedronGeometry(2)..GenerateWireframeCenters();
    Node ico = new Node("sphere",
        GeometryBuilderToMeshData("icosahedron", program, gb), matWireframe)
      ..setPos(0.0, 0.0, 0.0);
    program.add(ico);
  }

  {
    GeometryBuilder gb = CubeGeometry()..GenerateWireframeCenters();
    Node cube = new Node(
        "cube", GeometryBuilderToMeshData("cube", program, gb), matWireframe)
      ..setPos(-5.0, 0.0, -5.0);
    program.add(cube);
  }

  {
    GeometryBuilder gb = WedgeGeometry()..GenerateWireframeCenters();
    Node wedge = new Node("wedge",
        GeometryBuilderToMeshData("wedge", program, gb), matWireframe)
      ..setPos(0.0, -5.0, 0.0);
    program.add(wedge);
  }

  {
    GeometryBuilder gb = CylinderGeometryWireframeFriendly(3.0, 4.0, 2.0, 16)
      ..GenerateWireframeCenters();
    Node cyl = new Node("cylinder",
        GeometryBuilderToMeshData("cylinder", program, gb), matWireframe)
      ..setPos(5.0, 0.0, -5.0);
    program.add(cyl);
  }

  {
    GeometryBuilder gb = QuadGeometry(2)..GenerateWireframeCenters();
    Node quad = new Node(
        "quad", GeometryBuilderToMeshData("quad", program, gb), matWireframe)
      ..setPos(-5.0, 0.0, 5.0);
    program.add(quad);
  }

  {
    GeometryBuilder gb = ShapeTorusKnotGeometry(radius: 1.0, tube: 0.4)
      ..GenerateWireframeCenters();
    Node torus = new Node("torus",
        GeometryBuilderToMeshData("torus", program, gb), matWireframe)
      ..setPos(5.0, 0.0, 5.0);
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
    matWireframe.ForceUniform(cBlendEquation,
        gOpaque.checked ? BlendEquationNone : BlendEquationStandard);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
