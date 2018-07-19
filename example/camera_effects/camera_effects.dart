import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

import 'dart:async';
import 'package:chronosgl/chronosgl.dart';

HTML.SelectElement gEffect =
    HTML.document.querySelector('#effect') as HTML.SelectElement;

class Effect {
  static Map<String, Effect> all = {};

  final String name;
  final RenderProgram program;
  final UniformGroup uniforms;

  Effect(ChronosGL cgl, ShaderObject shader, this.uniforms)
      : name = uniforms.name,
        program =
            RenderProgram(uniforms.name, cgl, effectVertexShader, shader) {
    all[uniforms.name] = this;
  }
}

void RegisterEffects(ChronosGL cgl) {
  Effect(cgl, copyFragmentShader, UniformGroup("none"));

  Effect(cgl, toonFragmentShader, UniformGroup("toon"));

  Effect(
      cgl,
      hexPixelateFragmentShader,
      UniformGroup("hexalate-6")
        ..SetUniform(uCenter2, VM.Vector2(0.5, 0.5))
        ..SetUniform(uPointSize, 6.0));

  Effect(
      cgl,
      dotFragmentShader,
      UniformGroup("dot")
        ..SetUniform(uCenter2, VM.Vector2(0.0, 0.0))
        ..SetUniform(uScale, 0.8)
        ..SetUniform(uAngle, 0.5));

  Effect(
      cgl,
      tvDistortionFragmentShader,
      UniformGroup("tv-distortion")
        ..SetUniform(uScale, 0.0009)
        ..SetUniform(uTime, 0.0));

  Effect(cgl, lumidotsFragmentShader,
      UniformGroup("lumidots-4")..SetUniform(uPointSize, 4.0));

  Effect(cgl, squarePixelateFragmentShader,
      UniformGroup("square-4")..SetUniform(uPointSize, 4.0));

  Effect(cgl, scanlineFragmentShader,
      UniformGroup("scanline")..SetUniform(uRange, VM.Vector2(120.0, 240.0)));

  Effect(cgl, waterFragmentShader, UniformGroup("water"));

  Effect(cgl, CrosshatchFragmentShader(0), UniformGroup("crosshatch"));

  Effect(
      cgl, sepiaFragmentShader, UniformGroup("sepia")..SetUniform(uScale, 0.5));

  Effect(cgl, techicolorFragmentShader, UniformGroup("technicolor"));

  Effect(cgl, vignettingFragmentShader,
      UniformGroup("vigenetting")..SetUniform(uRange, VM.Vector2(0.4, 0.7)));

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
  // Make sure canvas has full screen resolution
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  ChronosGL cgl = ChronosGL(canvas);
  RegisterEffects(cgl);

  HTML.VideoElement video;
  ImageTexture texture;
  MeshData unitQuad = ShapeQuad(Effect.all["dot"].program, 1);

  void animate(num timeMs) {
    try {
      // Get new image from camera and update texture with it.
      texture.Update();
    } catch (exception) {
      print(exception);
    }

    Effect active = Effect.all[gEffect.value];
    active.uniforms.ForceUniform(uTime, timeMs / 1000.0);
    active.uniforms.ForceUniform(uTexture, texture);
    active.program.Draw(unitQuad, [active.uniforms]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs + 0.0);
  }

  List<Future<Object>> futures = [
    MakeVideoElementFromCamera(),
  ];

  Future.wait(futures).then((List list) {
    video = list[0];
    if (video == null) {
      HTML.window
          .alert("Could not access camera - do you have a camera installed?");
    }
    int w = video.videoWidth;
    int h = video.videoHeight;
    print("camera resolution: ${w}x${h}");
    //  This does not seem to have any effect and/or break firefox
    // canvas.width = w;
    // canvas.height = h;
    // cgl.viewport(0, 0, w, h);
    texture = ImageTexture(cgl, "video", video, TexturePropertiesVideo);

    animate(0.0);
  });
}
