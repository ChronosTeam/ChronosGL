import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

const String uFreqMul = "uFreqMul";
const String uAmplMul = "uAmplMul";

// consider moving these into a vector
const String uAmpl1 = "uAmpl1";
const String uAmpl2 = "uAmpl2";
const String uAmpl3 = "uAmpl3";
const String uMode = "uMode";
const String uSpeed = "uSpeed";

final ShaderObject nullVertexShader = new ShaderObject("nullShaderV")
  ..AddAttributeVars([aPosition])
  ..SetBodyWithMain([NullVertexBody]);

String shader = """
   #define D 3
   // default:
   // const float ampls[D] = float[](1.0, 0.5, 0.25);

   const float freqs[D] = float[](1.0, 2.0, 4.0);
  
   float ComplexNoise(vec2 xy, 
                      float baseFreq, float freqs[D], 
                      float baseAmpl, float ampls[D]) {
       float total = 0.0;
       for(int i = 0; i < D; i++) {
           total += baseAmpl * ampls[i] * snoise3(vec3(xy * baseFreq * freqs[i], ${uTime} * ${uSpeed}));
       }             
       return total;
   }
   
   float Standard(vec2 xy) {
       float ampls[D] = float[](${uAmpl1}, ${uAmpl2}, ${uAmpl3});
       return ComplexNoise(xy, ${uFreqMul}, freqs, ${uAmplMul}, ampls);
   }
 
   float Marble(vec2 xy) {
       float ampls[D] = float[](${uAmpl1}, ${uAmpl2}, ${uAmpl3});
       float n = ComplexNoise(xy, ${uFreqMul}, freqs, ${uAmplMul}, ampls);
       return abs(cos(xy.x * 0.008 + xy.y * 0.008 + 4.0 * n)); 
   }
   
   float Wood(vec2 xy) {
       float ampls[D] = float[](${uAmpl1}, ${uAmpl2}, ${uAmpl3});
       vec2 p = xy / 40.0;
       float n = ComplexNoise(xy, ${uFreqMul}, freqs, ${uAmplMul}, ampls);
       return cos((length(p) + n) * 4.0); 
   
       //float n = 0.4 * snoise2(xy * 0.005);   
       //float n = ComplexNoise(xy, 0.01, freqs, 0.2, ampls);
   }  

   vec3 Cloud(vec2 xy) {
       float ampls[D] = float[](${uAmpl1}, ${uAmpl2}, ${uAmpl3});
       float n = ComplexNoise(xy, ${uFreqMul}, freqs, ${uAmplMul}, ampls);
       return HSLtoRGB(vec3(0.66, 1.0, 0.75 + n / 4.0));
   }  
   
   void main() {
       // This are pixel coordinates  0, 0 being lowel left
       vec2 xy = gl_FragCoord.xy - 0.5 * ${uCanvasSize};
       
       // see simple_noise.html for mode coding 
       if (${uMode} == 4.0) {
           ${oFragColor}.g = Marble(xy);
       } else if (${uMode} == 3.0) {
           ${oFragColor}.rgb = Cloud(xy);
       } else if (${uMode} == 2.0) {
           ${oFragColor}.g = Wood(xy);
       } else {
           ${oFragColor}.g =  Standard(xy);
       }
   }
 """;

final ShaderObject noiseFragmentShader = new ShaderObject("noiseShaderF")
  ..AddUniformVars([
    uTime,
    uCanvasSize,
    uAmpl1,
    uAmpl2,
    uAmpl3,
    uAmplMul,
    uFreqMul,
    uMode,
    uSpeed
  ])
  ..SetBody(
      [ColorFunctions, SimplexNoiseHelpers, SimplexNoiseFunction3, shader]);

void main() {
  IntroduceNewShaderVar(uFreqMul, const ShaderVarDesc("float", ""));
  IntroduceNewShaderVar(uAmplMul, const ShaderVarDesc("float", ""));
  IntroduceNewShaderVar(uAmpl1, const ShaderVarDesc("float", ""));
  IntroduceNewShaderVar(uAmpl2, const ShaderVarDesc("float", ""));
  IntroduceNewShaderVar(uAmpl3, const ShaderVarDesc("float", ""));
  IntroduceNewShaderVar(uMode, const ShaderVarDesc("float", ""));
  IntroduceNewShaderVar(uSpeed, const ShaderVarDesc("float", ""));

  final StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');
  final int w = canvas.clientWidth;
  final int h = canvas.clientHeight;
  canvas.width = w;
  canvas.height = h;

  final ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);

  final RenderProgram programPerlin =
      new RenderProgram("perlin", cgl, nullVertexShader, noiseFragmentShader);

  final MeshData quad = ShapeQuad(programPerlin, 1);

  final UniformGroup uniforms = new UniformGroup("simplex")
    ..ForceUniform(uTime, 0.0)
    ..ForceUniform(uCanvasSize, new VM.Vector2(w + 0.0, h + 0.0));

  // Event Handling
  for (HTML.Element input in HTML.document.getElementsByTagName("input")) {
    input.onChange.listen((HTML.Event e) {
      HTML.InputElement input = e.target as HTML.InputElement;
      if (input.type == "range") {
        HTML.OutputElement output =
            HTML.document.getElementById(input.name);
        uniforms.ForceUniform(input.name, double.parse(input.value));
        output.value = input.value;
      }
      if (input.type == "radio") {
        uniforms.ForceUniform(input.name, double.parse(input.value));
      }
    });
  }

  // Trigger handlers
  for (HTML.InputElement input in HTML.document.getElementsByTagName("input")) {
    if (input.type == "radio" && !input.checked) continue;
    input.dispatchEvent(new HTML.Event("change"));
  }

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    _lastTimeMs = timeMs + 0.0;

    uniforms.ForceUniform(uTime, timeMs / 1000.0);
    programPerlin.Draw(quad, [uniforms]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  animate(0.0);
}
