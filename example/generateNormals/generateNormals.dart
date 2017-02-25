import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;

import 'dart:async';

List<ShaderObject> createNormal2ColorShader() {
  return [
    new ShaderObject("Normal2Color")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddVaryingVar(vColor)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        StdVertexBody,
        "${vColor} = normalize(${aNormal} / 2.0 + vec3(0.5) );"
      ]),
    new ShaderObject("Normal2ColorF")
      ..AddVaryingVar(vColor)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${vColor}, 1.0 );"])
  ];
}

String modelFile = "../ct_logo.obj";

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(25.0, -45.0, 0.3);
  Perspective perspective = new Perspective(orbit, 0.1, 2520.0);
  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram prg = phase.createProgram(createNormal2ColorShader());

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
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  Material mat = new Material("mat");

  List<Future<dynamic>> futures = [
    LoadRaw(modelFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Mesh
    GeometryBuilder ctLogo = GeometryFromWavefront(list[0]);

    List<GeometryBuilder> geos = [
      ctLogo,
      CylinderGeometry(1.0, 1.0, 2.0, 16, false),
      CubeGeometry(computeNormals: false)
    ];

    // with deduping (sorry -this is currently not necessary
    // because we de-dup most things implicitly)
    for (var i = 0; i < geos.length; i++) {
      geos[i].GenerateNormalsAssumingTriangleMode();
      MeshData md = GeometryBuilderToMeshData("", chronosGL, geos[i]);
      // because some vertices were reused for different faces, so we need to deduplicate the indices
      Node mesh = new Node(md.name, md, mat)..setPos(-5.0 + i * 7, 4.0, 0.0);
      if (geos[i] == ctLogo) {
        mesh.rotX(3.14 / 2);
        mesh.rotZ(3.14);
      }
      prg.add(mesh);
    }

    animate(0.0);
  });
}
