// This is not really a test
@TestOn("dartium")
import "package:test/test.dart";
import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;

void main() {
  test("show_extensions", () {
    HTML.CanvasElement canvas = new HTML.CanvasElement(width: 200, height: 200);
    ChronosGL chronosGL = new ChronosGL(canvas);
    List exts = GetSupportedExtensions(chronosGL.gl);
    for (var e in exts) {
      print(e);
    }
    WEBGL.DebugRendererInfo di =
        chronosGL.gl.getExtension('WEBGL_debug_renderer_info');
    print(di);
    print(chronosGL.gl
        .getParameter(WEBGL.DebugRendererInfo.UNMASKED_VENDOR_WEBGL));
    print(chronosGL.gl
        .getParameter(WEBGL.DebugRendererInfo.UNMASKED_RENDERER_WEBGL));
  });

  print("PASS");
}
