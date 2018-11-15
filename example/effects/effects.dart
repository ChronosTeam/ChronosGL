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
  Effect(ChronosGL cgl, ShaderObject shader, this.uniforms)
      : name = uniforms.name,
        program =
            RenderProgram(uniforms.name, cgl, effectVertexShader, shader) {
    all[uniforms.name] = this;
  }

  static Map<String, Effect> all = {};

  final String name;
  final RenderProgram program;
  final UniformGroup uniforms;
}

void RegisterEffects(ChronosGL cgl, Texture fb) {
  Effect(
      cgl, copyFragmentShader, UniformGroup("none")..SetUniform(uTexture, fb));

  Effect(
      cgl, toonFragmentShader, UniformGroup("toon")..SetUniform(uTexture, fb));

  Effect(
      cgl,
      hexPixelateFragmentShader,
      UniformGroup("hexalate-10")
        ..SetUniform(uCenter2, VM.Vector2(0.5, 0.5))
        ..SetUniform(uPointSize, 10.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      hexPixelateFragmentShader,
      UniformGroup("hexalate-20")
        ..SetUniform(uCenter2, VM.Vector2(0.5, 0.5))
        ..SetUniform(uPointSize, 20.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      hexPixelateFragmentShader,
      UniformGroup("hexalate-varying")
        ..SetUniform(uCenter2, VM.Vector2(0.5, 0.5))
        ..SetUniform(uPointSize, 10.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      dotFragmentShader,
      UniformGroup("dot")
        ..SetUniform(uCenter2, VM.Vector2(0.0, 0.0))
        ..SetUniform(uScale, 0.8)
        ..SetUniform(uAngle, 0.5)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      dotFragmentShader,
      UniformGroup("dot2")
        ..SetUniform(uCenter2, VM.Vector2(0.0, 0.0))
        ..SetUniform(uScale, 0.3)
        ..SetUniform(uAngle, 0.5)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      tvDistortionFragmentShader,
      UniformGroup("tv-distortion")
        ..SetUniform(uScale, 0.0009)
        ..SetUniform(uTime, 0.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      kaleidoscopeShader,
      UniformGroup("kaleidoscope8")
        ..SetUniform(uScale, 8.0)
        ..SetUniform(uCenter2, VM.Vector2(0.5, 0.5))
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      kaleidoscopeShader,
      UniformGroup("kaleidoscope5")
        ..SetUniform(uScale, 5.0)
        ..SetUniform(uCenter2, VM.Vector2(0.5, 0.5))
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      lumidotsFragmentShader,
      UniformGroup("lumidots-8")
        ..SetUniform(uPointSize, 8.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      lumidotsFragmentShader,
      UniformGroup("lumidots-16")
        ..SetUniform(uPointSize, 16.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      lumidotsFragmentShader,
      UniformGroup("lumidots-varying")
        ..SetUniform(uPointSize, 16.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      squarePixelateFragmentShader,
      UniformGroup("square-8")
        ..SetUniform(uPointSize, 8.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      squarePixelateFragmentShader,
      UniformGroup("square-16")
        ..SetUniform(uPointSize, 16.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      squarePixelateFragmentShader,
      UniformGroup("square-varying")
        ..SetUniform(uPointSize, 16.0)
        ..SetUniform(uTexture, fb));

  Effect(
      cgl,
      scanlineFragmentShader,
      UniformGroup("scanline")
        ..SetUniform(uRange, VM.Vector2(120.0, 240.0))
        ..SetUniform(uTexture, fb));

  Effect(cgl, waterFragmentShader,
      UniformGroup("water")..SetUniform(uTexture, fb));

  Effect(cgl, CrosshatchFragmentShader(0),
      UniformGroup("crosshatch")..SetUniform(uTexture, fb));

  Effect(
      cgl,
      luminosityHighPassFragmentShader,
      UniformGroup("luminosity-highpass")
        ..SetUniform(uRange, VM.Vector2(0.85, 0.86))
        ..SetUniform(uColorAlpha, VM.Vector4.zero())
        ..SetUniform(uTexture, fb));

  Effect(cgl, fisheyeFragmentShader,
      UniformGroup("fisheye")..SetUniform(uTexture, fb));

  Effect(
      cgl, filmFragmentShader, UniformGroup("film")..SetUniform(uTexture, fb));

  Effect(
      cgl,
      convolution3x3FragmentShader,
      UniformGroup("emboss")
        ..SetUniform(uConvolutionMatrix, ConvolutionMatrixEmboss)
        ..SetUniform(uColor, ConvolutionOffsetEmboss));

  Effect(
      cgl,
      convolution3x3FragmentShader,
      UniformGroup("emboss2")
        ..SetUniform(uConvolutionMatrix, ConvolutionMatrixEmboss2)
        ..SetUniform(uColor, ConvolutionOffsetEmboss2));
  Effect(
      cgl,
      convolution3x3FragmentShader,
      UniformGroup("engrave")
        ..SetUniform(uConvolutionMatrix, ConvolutionMatrixEngrave)
        ..SetUniform(uColor, ConvolutionOffsetEngrave));

  Effect(
      cgl,
      convolution3x3FragmentShader,
      UniformGroup("sharpen")
        ..SetUniform(uConvolutionMatrix, ConvolutionMatrixSharpen)
        ..SetUniform(uColor, ConvolutionOffsetSharpen));

  Effect(
      cgl,
      convolution3x3FragmentShader,
      UniformGroup("edges")
        ..SetUniform(uConvolutionMatrix, ConvolutionMatrixEdges)
        ..SetUniform(uColor, ConvolutionOffsetEdges));

  Effect(
      cgl,
      convolution3x3FragmentShader,
      UniformGroup("blur")
        ..SetUniform(uConvolutionMatrix, ConvolutionMatrixBlur)
        ..SetUniform(uColor, ConvolutionOffsetBlur));

  assert(gEffect != null);

  for (String o in Effect.all.keys) {
    gEffect.appendHtml("<option>$o</option>");
  }
}

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;

  ChronosGL cgl = ChronosGL(canvas);

  OrbitCamera orbit = OrbitCamera(15.0, -45.0, 0.3, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 2520.0)
    ..AdjustAspect(width, height);

  Framebuffer screen = Framebuffer.Screen(cgl);

  Framebuffer fb = Framebuffer.Default(cgl, width, height);

  RegisterEffects(cgl, fb.colorTexture);

  RenderProgram progDemo =
      RenderProgram("demo", cgl, demoVertexShader, demoFragmentShader);

  MeshData unitQuad = ShapeQuad(Effect.all["dot"].program, 1);
  MeshData ctLogo;

  Material material = Material("mat")
    ..SetUniform(uColor, ColorGray8)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity()..rotateX(Math.pi / 2));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.01;
    orbit.animate(elapsed);

    Effect active = Effect.all[gEffect.value];
    final double timeSec = timeMs / 1000.0;

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
    } else if (gEffect.value == "water") {
      active.uniforms.ForceUniform(uTime, _lastTimeMs / 1000.0);
    }

    // Draw logo to fb
    fb.Activate(GL_CLEAR_ALL, 0, 0, width, height);
    progDemo.Draw(ctLogo, [perspective, material]);

    // Apply currently active effect/program to fb and show result on screen
    screen.Activate(GL_CLEAR_ALL, 0, 0, width, height);
    active.program.Draw(unitQuad, [active.uniforms]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
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
