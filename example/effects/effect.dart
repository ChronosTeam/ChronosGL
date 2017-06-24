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
  //double s = t % interval * 2.0 * Math.PI;
  return (b - a) * (0.5 + 0.5 * Math.cos(t)) + a;
}

class Effect {
  static Map<String, Effect> all = {};

  final String name;
  final RenderProgram program;
  final UniformGroup uniforms;

  Effect(ChronosGL cgl, List<ShaderObject> shaders, this.uniforms)
      : name = uniforms.name,
        program =
            new RenderProgram(uniforms.name, cgl, shaders[0], shaders[1]) {
    all[uniforms.name] = this;
  }
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;

  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, -45.0, 0.3, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 2520.0)
    ..AdjustAspect(width, height);

  Framebuffer screen = new Framebuffer.Screen(chronosGL);

  Framebuffer fb = new Framebuffer.Default(chronosGL, width, height);

  List<ShaderObject> shaders = createDemoShader();
  RenderProgram progDemo =
      new RenderProgram("demo", chronosGL, shaders[0], shaders[1]);

  new Effect(chronosGL, createCopyShader(),
      new UniformGroup("none")..SetUniform(uTexture, fb.colorTexture));

  new Effect(chronosGL, createToonShader(),
      new UniformGroup("toon")..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createHexPixelateShader(),
      new UniformGroup("hexalate-10")
        ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
        ..SetUniform(uPointSize, 10.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createHexPixelateShader(),
      new UniformGroup("hexalate-20")
        ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
        ..SetUniform(uPointSize, 20.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createHexPixelateShader(),
      new UniformGroup("hexalate-varying")
        ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
        ..SetUniform(uPointSize, 10.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createDotShader(),
      new UniformGroup("dot")
        ..SetUniform(uCenter2, new VM.Vector2(0.0, 0.0))
        ..SetUniform(uScale, 0.8)
        ..SetUniform(uAngle, 0.5)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createDotShader(),
      new UniformGroup("dot2")
        ..SetUniform(uCenter2, new VM.Vector2(0.0, 0.0))
        ..SetUniform(uScale, 0.3)
        ..SetUniform(uAngle, 0.5)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createTvDistortionShader(),
      new UniformGroup("tv-distortion")
        ..SetUniform(uScale, 0.0009)
        ..SetUniform(uTime, 0.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createKaleidoscopeShader(),
      new UniformGroup("kaleidoscope8")
        ..SetUniform(uScale, 8.0)
        ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createKaleidoscopeShader(),
      new UniformGroup("kaleidoscope5")
        ..SetUniform(uScale, 5.0)
        ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createLumidotsShader(),
      new UniformGroup("lumidots-8")
        ..SetUniform(uPointSize, 8.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createLumidotsShader(),
      new UniformGroup("lumidots-16")
        ..SetUniform(uPointSize, 16.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createLumidotsShader(),
      new UniformGroup("lumidots-varying")
        ..SetUniform(uPointSize, 16.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createSquarePixelateShader(),
      new UniformGroup("square-8")
        ..SetUniform(uPointSize, 8.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createSquarePixelateShader(),
      new UniformGroup("square-16")
        ..SetUniform(uPointSize, 16.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createSquarePixelateShader(),
      new UniformGroup("square-varying")
        ..SetUniform(uPointSize, 16.0)
        ..SetUniform(uTexture, fb.colorTexture));

  new Effect(
      chronosGL,
      createLuminosityHighPassShader(),
      new UniformGroup("luminosity-highpass")
        ..SetUniform(uRange, new VM.Vector2(0.85, 0.86))
        ..SetUniform(uColorAlpha, new VM.Vector4.zero())
        ..SetUniform(uTexture, fb.colorTexture));

  MeshData unitQuad = ShapeQuad(Effect.all["dot"].program, 1);
  MeshData ctLogo;

  Material material = new Material("mat")
    ..SetUniform(uColor, ColorGray8)
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity()..rotateX(Math.PI / 2));

  assert(gEffect != null);
  for (String o in Effect.all.keys) {
    gEffect.appendHtml("<option>$o</option>");
  }

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.01;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);

    Effect active = Effect.all[gEffect.value];
    double timeSec = timeMs / 1000.0;

    if (gEffect.value == "tv-distortion") {
      active.uniforms.ForceUniform(uTime, timeSec);
    } else if (gEffect.value == "hexalate-varying") {
      active.uniforms
          .ForceUniform(uPointSize, RangeOverTime(4.0, 30.0, 20.0, timeSec));
    } else if (gEffect.value == "square-varying") {
      active.uniforms
          .ForceUniform(uPointSize, RangeOverTime(4.0, 30.0, 20.0, timeSec));
    } else if (gEffect.value == "lumidots-varying") {
      active.uniforms
          .ForceUniform(uPointSize, RangeOverTime(4.0, 30.0, 20.0, timeSec));
    }

    fb.Activate(GL_CLEAR_ALL, 0, 0, width, height);
    progDemo.Draw(ctLogo, [perspective, material]);

    screen.Activate(GL_CLEAR_ALL, 0, 0, width, height);
    active.program.Draw(unitQuad, [active.uniforms]);

    HTML.window.animationFrame.then(animate);
  }

  List<Future<Object>> futures = [
    LoadRaw(modelFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Mesh
    GeometryBuilder gb = ImportGeometryFromWavefront(list[0]);
    ctLogo = GeometryBuilderToMeshData("", progDemo, gb);
    animate(0.0);
  });
}
