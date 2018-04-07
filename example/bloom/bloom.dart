import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:html' as HTML;

final HTML.InputElement gLuminance = HTML.document.querySelector('#luminance');
final HTML.InputElement gIntensity = HTML.document.querySelector('#intensity');

class BloomEffect {
  final int radius;
  final int w;
  final int h;
  final int wSmall;
  final int hSmall;
  final Framebuffer fbIn, fb1, fb2, fbOut;

  RenderProgram progHighPass, progBloom, progApplyBloom;
  UniformGroup uniformsHighPass, uniformsBloomH, uniformsBloomV, uniformsApply;
  MeshData unitQuad;

  BloomEffect(ChronosGL cgl, this.w, this.h, this.radius, int scale, this.fbIn,
      this.fbOut)
      : wSmall = w ~/ scale,
        hSmall = h ~/ scale,
        fb1 = new Framebuffer.Default(cgl, w ~/ scale, h ~/ scale),
        fb2 = new Framebuffer.Default(cgl, w ~/ scale, h ~/ scale) {
    progHighPass = new RenderProgram(
        "highpass", cgl, effectVertexShader, luminosityHighPassFragmentShader);

    progBloom = new RenderProgram("bloom", cgl, uvPassthruVertexShader,
        CreateBloomTextureFragmentShader(radius, radius * 1.0));

    progApplyBloom = new RenderProgram(
        "bloom", cgl, uvPassthruVertexShader, applyBloomEffectFragmentShader);

    assert(progApplyBloom.HasCompatibleAttributesTo(progHighPass));
    assert(progApplyBloom.HasCompatibleAttributesTo(progBloom));
    unitQuad = ShapeQuad(progApplyBloom, 1);

    // Note: the input uTexture varies between the various UniformGroups
    uniformsHighPass = new UniformGroup("uniformsHighPass")
      ..SetUniform(uRange, new VM.Vector2(0.65, 0.65 + 0.01))
      ..SetUniform(uColorAlpha, new VM.Vector4.zero())
      ..SetUniform(uTexture, fbIn.colorTexture);

    uniformsBloomH = new UniformGroup("Bloom Horizontal")
      ..SetUniform(uDirection, new VM.Vector2(1.5, 0.0))
      ..SetUniform(uTexture, fb2.colorTexture);

    uniformsBloomV = new UniformGroup("Bloom Vertical")
      ..SetUniform(uDirection, new VM.Vector2(0.0, 1.5))
      ..SetUniform(uTexture, fb1.colorTexture);

    uniformsApply = new UniformGroup("uniformApply")
      ..SetUniform(uTexture, fbIn.colorTexture)
      ..SetUniform(uScale, 0.6)
      ..SetUniform(uColor, ColorWhite)
      ..SetUniform(uTexture2, fb2.colorTexture);
  }

  void Draw(double luminosity, double intensity) {
    // Copy high intensity areas from fb to fb2
    fb2.Activate(GL_CLEAR_ALL, 0, 0, wSmall, hSmall);
    uniformsHighPass.ForceUniform(
        uRange, new VM.Vector2(luminosity, luminosity + 0.01));
    progHighPass.Draw(unitQuad, [uniformsHighPass]);

    // Blur fb2 to fb1 horizontally
    fb1.Activate(GL_CLEAR_ALL, 0, 0, wSmall, hSmall);
    progBloom.Draw(unitQuad, [uniformsBloomH]);

    // Blur fb1 to fb2 vertically
    fb2.Activate(GL_CLEAR_ALL, 0, 0, wSmall, hSmall);
    progBloom.Draw(unitQuad, [uniformsBloomV]);

    // Put all together: combine un-bloomed fb with fb2 and show result on screen
    fbOut.Activate(GL_CLEAR_ALL, 0, 0, w, h);
    uniformsApply.ForceUniform(uScale, intensity);
    progApplyBloom.Draw(unitQuad, [uniformsApply]);
  }
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(165.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);

  final Framebuffer screen = new Framebuffer.Screen(cgl);
  final Framebuffer fb = new Framebuffer.Default(cgl, width, height);

  final RenderProgram progPerlinNoise = new RenderProgram("perlin", cgl,
      perlinNoiseVertexShader, makePerlinNoiseColorFragmentShader(true));

  final Material material = new Material("mat")
    ..SetUniform(uTransformationMatrix, new VM.Matrix4.identity())
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity());

  final MeshData torus = ShapeTorusKnot(progPerlinNoise);

  final BloomEffect bloom =
      new BloomEffect(cgl, width, height, 6, 2, fb, screen);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.01;
    orbit.animate(elapsed);
    material.ForceUniform(uTime, timeMs / 1000.0);

    // Draw un-bloomed object to fb
    fb.Activate(GL_CLEAR_ALL, 0, 0, width, height);
    progPerlinNoise.Draw(torus, [perspective, material]);
    bloom.Draw(gLuminance.valueAsNumber * 1.0, gIntensity.valueAsNumber * 1.0);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  animate(0.0);
}
