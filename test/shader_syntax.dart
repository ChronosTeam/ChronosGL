@TestOn("chrome")
import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import "package:test/test.dart";

void main() {
  test("shader_syntax", () {
    HTML.CanvasElement canvas = HTML.CanvasElement(width: 200, height: 200);
    ChronosGL cgl = ChronosGL(canvas);
    RenderPhase phase = RenderPhase("test", cgl);
    RenderProgram program;

    program = RenderProgram(
        "prog", cgl, texturedVertexShader, texturedFragmentShader);
    print("${program}");
    phase.add(Scene("scene", program));

    program = RenderProgram(
        "prog", cgl, lightVertexShaderGourad, lightFragmentShaderGourad);
    print("${program}");

    program = RenderProgram("prog", cgl, lightVertexShaderBlinnPhong,
        lightFragmentShaderBlinnPhong);
    print("${program}");
    /*
    program = phase.createProgram(createLightShaderBlinnPhongWithShadow());
    print("${program}");
    program = phase.createProgram(createShadowShader());
    print("${program}");
    */
    program = RenderProgram("prog", cgl, copyVertexShader, copyFragmentShader);
    print("${program}");

    program = RenderProgram("prog", cgl, ssaoVertexShader, ssaoFragmentShader);
    print("${program}");

    program =
        RenderProgram("prog", cgl, sobelVertexShader, sobelFragmentShader);
    print("${program}");
  });

  print("PASS");
}
