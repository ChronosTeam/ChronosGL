import 'dart:html' as HTML;
import 'dart:async';

import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'package:vector_math/vector_math.dart' as VM;

const String modelFile = "../ct_logo.obj";

HTML.SelectElement gEffect =
    HTML.document.querySelector('#effect') as HTML.SelectElement;

HTML.SelectElement gScene =
    HTML.document.querySelector('#scene') as HTML.SelectElement;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, -45.0, 0.3, canvas);
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

  RenderProgram prg1 = phase1.createProgram(createDemoShader());

  RenderPhase phase2 = new RenderPhase("effect", chronosGL, null);
  phase2.viewPortW = width;
  phase2.viewPortH = height;
  Map<String, RenderProgram> effects = {};
  effects["none"] = phase2.createProgram(createCopyShader())
    ..SetInput(uCanvasSize, new VM.Vector2(0.0 + width, 0.0 + height))
    ..SetInput(uTexture, fb.colorTexture)
    ..add(UnitNode(chronosGL));

  effects["toon"] = phase2.createProgram(createToonShader())
    ..SetInput(uCanvasSize, new VM.Vector2(0.0 + width, 0.0 + height))
    ..SetInput(uTexture, fb.colorTexture)
    ..add(UnitNode(chronosGL));

  effects["hexalate"] = phase2.createProgram(createHexPixelateShader())
    ..SetInput(uCanvasSize, new VM.Vector2(0.0 + width, 0.0 + height))
    ..SetInput(uCenter2, new VM.Vector2(0.5, 0.5))
    ..SetInput(uScale, 10.0)
    ..SetInput(uTexture, fb.colorTexture)
    ..add(UnitNode(chronosGL));

  assert(gEffect != null);
  for (String o in effects.keys) {
    gEffect.appendHtml("<option>$o</option>");
  }

  gEffect.onChange.listen((HTML.Event e) {
    String selected = gEffect.value;
    for (String key in effects.keys) {
      effects[key].enabled = key == selected;
    }
    e.preventDefault();
  });
  gEffect.dispatchEvent(new HTML.Event("change"));

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.01;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phase1.draw([perspective]);
    phase2.draw([perspective]);

    HTML.window.animationFrame.then(animate);
  }

  List<Future<dynamic>> futures = [
    LoadRaw(modelFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Mesh
    GeometryBuilder ctLogo = ImportGeometryFromWavefront(list[0]);
    MeshData md = GeometryBuilderToMeshData("", chronosGL, ctLogo);
    Material mat = new Material("mat")
      ..SetUniform(uColor, new VM.Vector3(0.9, 0.9, 0.9));
    Node mesh = new Node(md.name, md, mat)
      ..rotX(3.14 / 2)
      ..rotZ(3.14);
    prg1.add(mesh);

    animate(0.0);
  });
}
