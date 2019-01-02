import 'dart:async';
import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';

final ShaderObject normal2ColorVertexShader = ShaderObject("Normal2Color")
  ..AddAttributeVars([aPosition, aNormal])
  ..AddVaryingVars([vColor])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBody([
    """
void main() {
    ${StdVertexBody} 
    ${vColor} = normalize(${aNormal} / 2.0 + vec3(0.5) );
}
      """
  ]);

final ShaderObject normal2ColorFragmentShader = ShaderObject("Normal2ColorF")
  ..AddVaryingVars([vColor])
  ..SetBody([
    """
void main() {  
    ${oFragColor} = vec4( ${vColor}, 1.0 );
}
    """
  ]);

const String modelFile = "../ct_logo.obj";

final List<Future<Object>> gLoadables = [];

void main() {
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');
  final ChronosGL cgl = ChronosGL(canvas);
  final OrbitCamera orbit = OrbitCamera(25.0, -45.0, 0.3, canvas);
  final Perspective perspective = Perspective(orbit, 0.1, 2520.0);

  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);
  final Scene scene = Scene(
      "objects",
      RenderProgram(
          "test", cgl, normal2ColorVertexShader, normal2ColorFragmentShader),
      [perspective]);
  phase.add(scene);
  final Material mat = Material("mat");

  var future = LoadRaw(modelFile)
    ..then((String content) {
      List<GeometryBuilder> geos = [
        ImportGeometryFromWavefront(content),
        CylinderGeometry(1.0, 1.0, 2.0, 16, false),
        CubeGeometry(computeNormals: false)
      ];

      for (var i = 0; i < geos.length; i++) {
        geos[i].GenerateNormalsAssumingTriangleMode();
        MeshData md = GeometryBuilderToMeshData("", scene.program, geos[i]);
        Node mesh = Node(md.name, md, mat)..setPos(-5.0 + i * 7, 4.0, 0.0);
        if (i == 0 /* ctLogo*/) {
          mesh
            ..rotX(3.14 / 2)
            ..rotZ(3.14);
        }
        scene.add(mesh);
      }
    });
  gLoadables.add(future);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.Draw();
    HTML.window.animationFrame.then(animate);
  }

  Future.wait(gLoadables).then((List list) {
    animate(0.0);
  });
}
