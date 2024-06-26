import 'dart:html' as HTML;
import 'dart:typed_data';

import 'package:chronosgl/chronosgl.dart';

const int kDim = 500;

final ShaderObject computeVertexShader = ShaderObject("computeVertexShader")
  ..AddAttributeVars([aPosition])
  ..SetBody([NullVertexShaderString]);

final ShaderObject computeFragmentShader = ShaderObject("computeFragmentShader")
  ..SetBody([
    """
void main() { 
    ${oFragColor}.b = gl_FragCoord.x / ${kDim}.0;
    ${oFragColor}.g = gl_FragCoord.y / ${kDim}.0;
    ${oFragColor}.r = 0.0;
}
    """
  ]);

String ExtractAndSummarizeBytes(Framebuffer fb, int w, int h) {
  Uint8List buf = fb.ExtractByteData(null, 0, 0, w, h);
  int channels = buf.length ~/ (w * h);
  print("Buffer length: ${buf.length} channels: ${channels}");
  int r = 0;
  int g = 0;
  int b = 0;
  for (int i = 0; i < buf.length; i += channels) {
    r += buf[i + 0];
    g += buf[i + 1];
    b += buf[i + 2];
  }
  return "${r / (w * h)} ${g / (w * h)} ${b / (w * h)}";
}

String ExtractAndSummarizeFloat(Framebuffer fb, int w, int h) {
  Float32List buf = fb.ExtractFloatData(null, 0, 0, w, h);
  int channels = buf.length ~/ (w * h);
  print("Buffer length: ${buf.length} channels: ${channels}");
  double r = 0.0;
  double g = 0.0;
  double b = 0.0;
  double a = 0.0;
  for (int i = 0; i < buf.length; i += channels) {
    r += buf[i + 0];
    g += buf[i + 1];
    b += buf[i + 2];
    a += buf[i + 3];
  }

  return "${r / (w * h)} ${g / (w * h)} ${b / (w * h)} ${a / (w * h)}";
}

void main() {
  final HTML.DivElement results =
      HTML.document.querySelector('#results') as HTML.DivElement;

  // The canvas is what we render the 3d scene into.
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  canvas
    ..width = kDim
    ..height = kDim;

  final ChronosGL cgl = ChronosGL(canvas);

  final RenderProgram program =
      RenderProgram("program", cgl, computeVertexShader, computeFragmentShader);

  final MeshData unitQuad = ShapeQuad(program, 1);

  {
    final Framebuffer fb = Framebuffer.Default(cgl, kDim, kDim);

    results.innerHtml =
        results.innerHtml! + "<h3>Drawing into default format FB</h3>";
    fb.Activate(GL_CLEAR_ALL, 0, 0, kDim, kDim);
    program.Draw(unitQuad, []);
    results.innerHtml =
        results.innerHtml! + ExtractAndSummarizeBytes(fb, kDim, kDim) + "\n";
  }

  {
    results.innerHtml =
        results.innerHtml! + "<h3>Drawing into float format FB</h3>";
    var ext = cgl.getExtension("EXT_color_buffer_float");
    if (ext == null) {
      results.innerHtml = results.innerHtml! +
          "extension not available: EXT_color_buffer_float";
    }
    TypedTexture tex = TypedTexture(
        cgl, "float", kDim, kDim, GL_RGBA32F, TexturePropertiesFramebuffer);

    Framebuffer fb = Framebuffer(cgl, tex);
    fb.Activate(GL_CLEAR_ALL, 0, 0, kDim, kDim);
    program.Draw(unitQuad, []);
    results.innerHtml =
        results.innerHtml! + ExtractAndSummarizeFloat(fb, kDim, kDim) + "\n";
  }
}
