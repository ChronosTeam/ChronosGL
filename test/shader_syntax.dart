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
    program = phase.createProgram(createLightShaderGourad());
    program = phase.createProgram(createLightShaderBlinnPhong());
    program = phase.createProgram(createLightShaderBlinnPhongWithShadow());
    program = phase.createProgram(createShadowShader());
    program = phase.createProgram(createCopyShader());
    program = phase.createProgram(createSSAOShader());
    program = phase.createProgram(createSobelShader());
    print("OK");
  });
}
