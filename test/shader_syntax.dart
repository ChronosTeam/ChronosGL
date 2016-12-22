@TestOn("dartium")
import "package:test/test.dart";
import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;

void main() {
  test("blah", () {
    HTML.CanvasElement canvas = new HTML.CanvasElement(width: 200, height: 200);
    ChronosGL chronosGL = new ChronosGL(canvas);
    RenderPhase phase = new RenderPhase("test", chronosGL.gl);
    RenderProgram program;
    program = phase.createProgram(createTexturedShader());
    print("${program}");
    program = phase.createProgram(createLightShaderGourad());
    print("${program}");
    program = phase.createProgram(createLightShaderBlinnPhong());
    print("${program}");
    program = phase.createProgram(createLightShaderBlinnPhongWithShadow());
    print("${program}");
    program = phase.createProgram(createShadowShader());
    print("${program}");
    program = phase.createProgram(createCopyShader());
    print("${program}");
    program = phase.createProgram(createSSAOShader());
    print("${program}");
    program = phase.createProgram(createSobelShader());
    print("${program}");
    q
    print("OK");
  });
}
