@TestOn("dartium")
import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import "package:test/test.dart";

void main() {
  test("shader_syntax", () {
    HTML.CanvasElement canvas = new HTML.CanvasElement(width: 200, height: 200);
    ChronosGL cgl = new ChronosGL(canvas);
    RenderPhase phase = new RenderPhase("test", cgl);
    RenderProgram program;
    program = new RenderProgram("prog", cgl, texturedVertexShader, texturedFragmentShader);
    print("${program}");
    phase.add(new Scene("scene", program));
    /*
    program = phase.createProgram(createLightShaderGourad());
    print("${program}");
    program = phase.createProgram(createLightShaderBlinnPhong());
    print("${program}");
    /*
    program = phase.createProgram(createLightShaderBlinnPhongWithShadow());
    print("${program}");
    program = phase.createProgram(createShadowShader());
    print("${program}");
    program = phase.createProgram(createCopyShader());
*/
    print("${program}");
    program = phase.createProgram(createSSAOShader());
    print("${program}");
    program = phase.createProgram(createSobelShader());
    print("${program}");
    */
  });

  print("PASS");
}
