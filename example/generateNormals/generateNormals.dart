import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;

import 'dart:async';

final ShaderObject normal2ColorVertexShader = ShaderObject("Normal2Color")
  ..AddAttributeVars([aPosition, aNormal])
  ..AddVaryingVars([vColor])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBodyWithMain(
      [StdVertexBody, "${vColor} = normalize(${aNormal} / 2.0 + vec3(0.5) );"]);

final ShaderObject normal2ColorFragmentShader = ShaderObject("Normal2ColorF")
  ..AddVaryingVars([vColor])
  ..SetBodyWithMain(["${oFragColor} = vec4( ${vColor}, 1.0 );"]);

const String modelFile = "../ct_logo.obj";

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas);
  OrbitCamera orbit = OrbitCamera(25.0, -45.0, 0.3, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 2520.0);

  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);
  Scene scene = Scene(
      "objects",
      RenderProgram(
          "test", cgl, normal2ColorVertexShader, normal2ColorFragmentShader),
      [perspective]);
  phase.add(scene);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.Draw();
    HTML.window.animationFrame.then(animate);
  }

  Material mat = Material("mat");

  List<Future<Object>> futures = [
    LoadRaw(modelFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Mesh
    GeometryBuilder ctLogo = ImportGeometryFromWavefront(list[0]);

    List<GeometryBuilder> geos = [
      ctLogo,
      CylinderGeometry(1.0, 1.0, 2.0, 16, false),
      CubeGeometry(computeNormals: false)
    ];

    // with deduping (sorry -this is currently not necessary
    // because we de-dup most things implicitly)
    for (var i = 0; i < geos.length; i++) {
      geos[i].GenerateNormalsAssumingTriangleMode();
      MeshData md = GeometryBuilderToMeshData("", scene.program, geos[i]);
      // because some vertices were reused for different faces, so we need to deduplicate the indices
      Node mesh = Node(md.name, md, mat)..setPos(-5.0 + i * 7, 4.0, 0.0);
      if (geos[i] == ctLogo) {
        mesh.rotX(3.14 / 2);
        mesh.rotZ(3.14);
      }
      scene.add(mesh);
    }

    animate(0.0);
  });
}
