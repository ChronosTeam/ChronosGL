import 'dart:html' as HTML;

import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';

// TODO: the torusknot cannot be seen through the other objects -why

final HTML.InputElement gOpaque =
    HTML.document.querySelector('#opaque') as HTML.InputElement;

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 1000.0);
  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);

  Scene scene = Scene(
      "wireframe",
      RenderProgram(
          "main", cgl, wireframeVertexShader, wireframeFragmentShader),
      [perspective]);
  phase.add(scene);

  final Material matWireframe = Material("wire")
    ..SetUniform(uColorAlpha, VM.Vector4(1.0, 1.0, 0.0, 1.0))
    ..SetUniform(uColorAlpha2, VM.Vector4(0.0, 0.0, 0.0, 0.5));

  {
    GeometryBuilder gb = IcosahedronGeometry(2)..GenerateWireframeCenters();
    Node ico = Node(
        "sphere",
        GeometryBuilderToMeshData("icosahedron", scene.program, gb),
        matWireframe)
      ..setPos(0.0, 0.0, 0.0);
    scene.add(ico);
  }

  {
    GeometryBuilder gb = CubeGeometry()..GenerateWireframeCenters();
    Node cube = Node("cube",
        GeometryBuilderToMeshData("cube", scene.program, gb), matWireframe)
      ..setPos(-5.0, 0.0, -5.0);
    scene.add(cube);
  }

  {
    GeometryBuilder gb = WedgeGeometry()..GenerateWireframeCenters();
    Node wedge = Node("wedge",
        GeometryBuilderToMeshData("wedge", scene.program, gb), matWireframe)
      ..setPos(0.0, -5.0, 0.0);
    scene.add(wedge);
  }

  {
    GeometryBuilder gb = CylinderGeometryWireframeFriendly(3.0, 4.0, 2.0, 16)
      ..GenerateWireframeCenters();
    Node cyl = Node("cylinder",
        GeometryBuilderToMeshData("cylinder", scene.program, gb), matWireframe)
      ..setPos(5.0, 0.0, -5.0);
    scene.add(cyl);
  }

  {
    GeometryBuilder gb = QuadGeometry(2)..GenerateWireframeCenters();
    Node quad = Node("quad",
        GeometryBuilderToMeshData("quad", scene.program, gb), matWireframe)
      ..setPos(-5.0, 0.0, 5.0);
    scene.add(quad);
  }

  {
    GeometryBuilder gb =
        ShapeTorusKnotGeometryWireframeFriendly(radius: 1.0, tubeRadius: 0.4)
          ..GenerateWireframeCenters();
    Node torus = Node("torus",
        GeometryBuilderToMeshData("torus", scene.program, gb), matWireframe)
      ..setPos(5.0, 0.0, 5.0);
    scene.add(torus);
  }

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    matWireframe.ForceUniform(cBlendEquation,
        gOpaque.checked ? BlendEquationNone : BlendEquationStandard);
    phase.Draw();

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  animate(0.0);
}
