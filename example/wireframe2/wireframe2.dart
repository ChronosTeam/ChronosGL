import 'dart:html' as HTML;
import 'dart:async';

import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';

const String meshFile = "../asset/dragon/dragon.obj";

HTML.InputElement gShowNormals =
    HTML.document.querySelector('#normals') as HTML.InputElement;

HTML.InputElement gShowWires =
    HTML.document.querySelector('#wires') as HTML.InputElement;

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");

  HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  ChronosGL cgl = ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = OrbitCamera(25.0, 10.0, 0.0, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 1000.0);
  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);
  Scene scene = Scene(
      "solid",
      RenderProgram(
          "solid", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);
  phase.add(scene);

  final Material matWire = Material("wire")..SetUniform(uColor, ColorYellow);
  final Material matNorm = Material("normal")..SetUniform(uColor, ColorBlue);

  late Node nodeWire;
  late Node nodeNorm;

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    nodeNorm.enabled = gShowNormals.checked!;
    nodeWire.enabled = gShowWires.checked!;
    phase.Draw();

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  List<Future<Object>> futures = [
    LoadRaw(meshFile),
  ];

  Future.wait(futures).then((List list) {
    GeometryBuilder gb = ImportGeometryFromWavefront(list[0]);
    print(gb);
    MeshData mdWire =
        GeometryBuilderToMeshDataWireframe(meshFile, scene.program, gb);
    print(mdWire);

    nodeWire = Node(mdWire.name, mdWire, matWire);
    nodeWire.lookAt(VM.Vector3(100.0, 0.0, 0.0));
    scene.add(nodeWire);

    MeshData mdNorm =
        GeometryBuilderToWireframeNormals(scene.program, gb, 0.05);
    nodeNorm = Node(mdNorm.name, mdNorm, matNorm);
    nodeNorm.lookAt(VM.Vector3(100.0, 0.0, 0.0));
    scene.add(nodeNorm);

    // Start
    animate(0.0);
  });
}
