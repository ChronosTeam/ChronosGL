import 'dart:html' as HTML;
import 'dart:async';
import 'dart:math' as Math;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

const String modelFile = "../ct_logo.obj";

HTML.SelectElement gEffect =
    HTML.document.querySelector('#effect') as HTML.SelectElement;

HTML.SelectElement gScene =
    HTML.document.querySelector('#scene') as HTML.SelectElement;

double RangeOverTime(double a, double b, double interval, double t) {
  double s = t % interval * 2.0 * Math.PI;
  return (b - a) * (0.5 + 0.5 * Math.cos(t)) + a;
}

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

  Framebuffer fb =
      new Framebuffer.Default(chronosGL, width, height);

  RenderPhase phase1 = new RenderPhase("phase1", chronosGL, fb);
  phase1.viewPortW = width;
  phase1.viewPortH = height;

  RenderProgram prg1 = phase1.createProgram(createDemoShader());

  RenderPhase phase2 = new RenderPhase("effect", chronosGL, null)
    ..viewPortW = width
    ..viewPortH = height;

  Map<String, RenderProgram> effects = {};
  Map<String, UniformGroup> uniforms = {};

  effects["none"] = phase2.createProgram(createCopyShader());
  uniforms["none"] = new UniformGroup("none")
    ..SetUniform(uTexture, fb.colorTexture);

  effects["toon"] = phase2.createProgram(createToonShader());
  uniforms["toon"] = new UniformGroup("toon")
    ..SetUniform(uTexture, fb.colorTexture);

  effects["hexalate-10"] = phase2.createProgram(createHexPixelateShader());
  uniforms["hexalate-10"] = new UniformGroup("hexalate-10")
    ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
    ..SetUniform(uPointSize, 10.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["hexalate-20"] = phase2.createProgram(createHexPixelateShader());
  uniforms["hexalate-20"] = new UniformGroup("hexalate-20")
    ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
    ..SetUniform(uPointSize, 20.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["hexalate-varying"] = phase2.createProgram(createHexPixelateShader());
  uniforms["hexalate-varying"] = new UniformGroup("hexalate-varying")
    ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
    ..SetUniform(uPointSize, 10.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["dot"] = phase2.createProgram(createDotShader());
  uniforms["dot"] = new UniformGroup("dot")
    ..SetUniform(uCenter2, new VM.Vector2(0.0, 0.0))
    ..SetUniform(uScale, 0.8)
    ..SetUniform(uAngle, 0.5)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["dot2"] = phase2.createProgram(createDotShader());
  uniforms["dot2"] = new UniformGroup("dot2")
    ..SetUniform(uCenter2, new VM.Vector2(0.0, 0.0))
    ..SetUniform(uScale, 0.3)
    ..SetUniform(uAngle, 0.5)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["tv-distortion"] = phase2.createProgram(createTvDistortionShader());
  uniforms["tv-distortion"] = new UniformGroup("tv-distortion")
    ..SetUniform(uScale, 0.0009)
    ..SetUniform(uTime, 0.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["kaleidoscope8"] = phase2.createProgram(createKaleidoscopeShader());
  uniforms["kaleidoscope8"] = new UniformGroup("kaleidoscope8")
    ..SetUniform(uScale, 8.0)
    ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
    ..SetUniform(uTexture, fb.colorTexture);

  effects["kaleidoscope5"] = phase2.createProgram(createKaleidoscopeShader());
  uniforms["kaleidoscope5"] = new UniformGroup("kaleidoscope5")
    ..SetUniform(uScale, 5.0)
    ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
    ..SetUniform(uTexture, fb.colorTexture);

  effects["lumidots-8"] = phase2.createProgram(createLumidotsShader());
  uniforms["lumidots-8"] = new UniformGroup("lumidots-8")
    ..SetUniform(uPointSize, 8.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["lumidots-16"] = phase2.createProgram(createLumidotsShader());
  uniforms["lumidots-16"] = new UniformGroup("lumidots-16")
    ..SetUniform(uPointSize, 16.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["lumidots-varying"] = phase2.createProgram(createLumidotsShader());
  uniforms["lumidots-varying"] = new UniformGroup("lumidots-varying")
    ..SetUniform(uPointSize, 16.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["square-8"] = phase2.createProgram(createSquarePixelateShader());
  uniforms["square-8"] = new UniformGroup("square-8")
    ..SetUniform(uPointSize, 8.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["square-16"] = phase2.createProgram(createSquarePixelateShader());
  uniforms["square-16"] = new UniformGroup("square-16")
    ..SetUniform(uPointSize, 16.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["square-varying"] =
      phase2.createProgram(createSquarePixelateShader());
  uniforms["square-varying"] = new UniformGroup("square-varying")
    ..SetUniform(uPointSize, 16.0)
    ..SetUniform(uTexture, fb.colorTexture);

  effects["luminosity-highpass"] =
      phase2.createProgram(createLuminosityHighPassShader());
  uniforms["luminosity-highpass"] = new UniformGroup("luminosity-highpass")
    ..SetUniform(uRange, new VM.Vector2(0.85, 0.86))
    ..SetUniform(uColorAlpha, new VM.Vector4.zero())
    ..SetUniform(uTexture, fb.colorTexture);

  for (RenderProgram prog in effects.values) {
    prog.add(UnitNode(prog));
  }

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

    double timeSec = timeMs / 1000.0;
    uniforms["tv-distortion"].ForceUniform(uTime, timeSec);
    //effects["kaleidoscope5"].ForceInput(uScale, timeMs / 1000.0);
    uniforms["hexalate-varying"]
        .ForceUniform(uPointSize, RangeOverTime(4.0, 30.0, 20.0, timeSec));
    uniforms["square-varying"]
        .ForceUniform(uPointSize, RangeOverTime(4.0, 30.0, 20.0, timeSec));
    uniforms["lumidots-varying"]
        .ForceUniform(uPointSize, RangeOverTime(4.0, 30.0, 20.0, timeSec));
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
    MeshData md = GeometryBuilderToMeshData("", prg1, ctLogo);
    Material mat = new Material("mat")..SetUniform(uColor, ColorGray8);
    Node mesh = new Node(md.name, md, mat)
      ..rotX(3.14 / 2)
      ..rotZ(3.14);
    prg1.add(mesh);

    animate(0.0);
  });
}
