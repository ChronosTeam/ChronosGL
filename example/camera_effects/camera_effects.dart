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
            new RenderProgram(uniforms.name, cgl, effectVertexShader, shader) {
    all[uniforms.name] = this;
  }
}

void RegisterEffects(ChronosGL cgl) {
  new Effect(cgl, copyFragmentShader, new UniformGroup("none"));

  new Effect(cgl, toonFragmentShader, new UniformGroup("toon"));

  new Effect(
      cgl,
      hexPixelateFragmentShader,
      new UniformGroup("hexalate-10")
        ..SetUniform(uCenter2, new VM.Vector2(0.5, 0.5))
        ..SetUniform(uPointSize, 10.0));

  new Effect(
      cgl,
      dotFragmentShader,
      new UniformGroup("dot")
        ..SetUniform(uCenter2, new VM.Vector2(0.0, 0.0))
        ..SetUniform(uScale, 0.8)
        ..SetUniform(uAngle, 0.5));

  new Effect(
      cgl,
      tvDistortionFragmentShader,
      new UniformGroup("tv-distortion")
        ..SetUniform(uScale, 0.0009)
        ..SetUniform(uTime, 0.0));

  new Effect(cgl, lumidotsFragmentShader,
      new UniformGroup("lumidots-8")..SetUniform(uPointSize, 8.0));

  new Effect(cgl, squarePixelateFragmentShader,
      new UniformGroup("square-8")..SetUniform(uPointSize, 8.0));

  assert(gEffect != null);
  for (String o in Effect.all.keys) {
    gEffect.appendHtml("<option>$o</option>");
  }
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  // Make sure canvas has full screen resolution
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  ChronosGL cgl = new ChronosGL(canvas);
  RegisterEffects(cgl);

  HTML.VideoElement video;
  ImageTexture texture;
  MeshData unitQuad = ShapeQuad(Effect.all["dot"].program, 1);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    try {
      // Get new image from camera and update texture with it.
      texture.Update();
      print("updated texture");
    } catch (exception) {
      print(exception);
    }

    Effect active = Effect.all[gEffect.value];
    active.uniforms.ForceUniform(uTime, timeMs / 1000.0);
    active.uniforms.ForceUniform(uTexture, texture);
    active.program.Draw(unitQuad, [active.uniforms]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs);
  }

  List<Future<Object>> futures = [
    MakeVideoElementFromCamera(),
    //LoadVideo("movie.ogv"),
  ];

  Future.wait(futures).then((List list) {
    video = list[0];
    if (video == null) {
      HTML.window
          .alert("Could not access camera - do you have a camera installed?");
    }
    texture = new ImageTexture(cgl, "video", video, TexturePropertiesVideo);
    animate(0.0);
  });
}
