import 'dart:html' as HTML;
import 'dart:async';

import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'package:vector_math/vector_math.dart' as VM;

String modelFile = "../ct_logo.obj";

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, -45.0, 0.3);
  Perspective perspective = new Perspective(orbit, 0.1, 2520.0);

  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);

  ChronosFramebuffer fb = new ChronosFramebuffer(chronosGL, width, height);
  RenderPhase phase1 = new RenderPhase("phase1", chronosGL, fb);
  phase1.viewPortW = width;
  phase1.viewPortH = height;

  RenderProgram prg1 = phase1.createProgram(createPlane2GreyShader());

  RenderPhase phase2 = new RenderPhase("phase2", chronosGL, null);
  phase2.viewPortW = width;
  phase2.viewPortH = height;

  RenderProgram prg2 = phase2.createProgram(createSobelShader());
  prg2
    ..SetInput(uCanvasSize, new VM.Vector2(0.0 + width, 0.0 + height))
    ..SetInput(uDepthMap, fb.depthTexture)
    ..SetInput(uTexture, fb.colorTexture)
    ..add(UnitNode(chronosGL));

  RenderPhase phase1only = new RenderPhase("phase1only", chronosGL, null);
  phase1only.viewPortW = width;
  phase1only.viewPortH = height;
  phase1only.AddRenderProgram(prg1);

  bool useSobel = true;

  HTML.InputElement myselect =
      HTML.document.querySelector('#activate') as HTML.InputElement;
  myselect.onChange.listen((HTML.Event e) {
    useSobel = myselect.checked;
  });

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    if (useSobel) {
      phase1.draw([perspective]);
      phase2.draw([perspective]);
    } else {
      phase1only.draw([perspective]);
    }
    HTML.window.animationFrame.then(animate);
  }

  List<Future<dynamic>> futures = [
    LoadRaw(modelFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Mesh
    GeometryBuilder ctLogo = GeometryFromWavefront(list[0]);

    MeshData md = GeometryBuilderToMeshData("", chronosGL, ctLogo);
    Material mat = new Material("mat");
    Node mesh = new Node(md.name, md, mat)
      ..rotX(3.14 / 2)
      ..rotZ(3.14);
    Node n = new Node.Container("wrapper", mesh);
    //n.invert = true;
    n.lookAt(new VM.Vector3(100.0, 0.0, -100.0));
    //n.matrix.scale(0.02);

    prg1.add(mesh);

    animate(0.0);
  });
}
