import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;

const String uFlameHeight = "uFlameHeight";
const String uFlameWidth = "uFlameWidth";
const String uFlameTurbulence = "uFlameTurbulence";
const String uFlameThrottle = "uFlameThrottle";

const String uRandomSeed = "uRandomSeed";

// Background:
// http://lodev.org/cgtutor/fire.html

final ShaderObject nullVertexShader = ShaderObject("nullShaderV")
  ..AddAttributeVars([aPosition])
  ..SetBody([NullVertexShaderString]);

final ShaderObject fireFragmentShader = ShaderObject("fireShaderF")
  ..AddUniformVars([
    uTexture,
    uFlameThrottle,
    uRandomSeed,
    uFlameWidth,
    uFlameHeight,
    uFlameTurbulence
  ])
  ..SetBody([
    """
float rand(vec2 xy){
    return fract(sin(dot(xy ,vec2(12.9898,78.233))) * 43758.5453);
}
    
float get(vec2 xy) {
    vec2 DIM = vec2(textureSize(${uTexture}, 0));  
    return texture(${uTexture}, xy / DIM).r;
}

float NextValue(vec2 xy) {
    if (xy.y < 1.0) {
        float r = rand(vec2(${uRandomSeed}, xy.x));
        return get(xy) + (r - 0.5) * ${uFlameTurbulence}; 
    }
    
    float height = ${uFlameHeight};
    float width =  ${uFlameWidth};
    return (4.0 * get(xy) +
            get(xy + vec2(0.0, -height)) +
            get(xy + vec2(-width,  -height)) +
            get(xy + vec2(width,  -height)) +
            get(xy + vec2(0.0, -2.0 * height))) * ${uFlameThrottle} * 0.5;
}

void main() {
    float v = NextValue(gl_FragCoord.xy);
    ${oFragColor}.r = v;
}
"""
  ]);

final ShaderObject colorFragmentShader = ShaderObject("colorShaderF")
  ..AddUniformVars([uTexture])
  ..SetBody([
    ColorFunctions,
    """ 
float get(vec2 xy) {
    vec2 DIM = vec2(textureSize(${uTexture}, 0));  
    return texture(${uTexture}, xy / DIM).r;
}

void main() {
    float v  = get(gl_FragCoord.xy);
    vec3 hsl = vec3(v / 3.0, 1.0, clamp(2.0 * v, 0.0, 1.0));
    ${oFragColor}.rgb = HSLtoRGB(hsl);
}
"""
  ]);

void main() {
  IntroduceNewShaderVar(uFlameHeight, const ShaderVarDesc("float", ""));
  IntroduceNewShaderVar(uFlameWidth, const ShaderVarDesc("float", ""));
  IntroduceNewShaderVar(uFlameTurbulence, const ShaderVarDesc("float", ""));
  IntroduceNewShaderVar(uFlameThrottle, const ShaderVarDesc("float", ""));

  IntroduceNewShaderVar(uRandomSeed, const ShaderVarDesc("float", ""));

  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");
  HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  final int w = canvas.clientWidth;
  final int h = canvas.clientHeight;
  canvas.width = w;
  canvas.height = h;

  final ChronosGL cgl = ChronosGL(canvas, faceCulling: true);
  final Framebuffer screen = Framebuffer.Screen(cgl);

  final TypedTextureMutable t1 = TypedTextureMutable(cgl, "t1", w, h, GL_RGBA,
      TexturePropertiesFramebuffer, GL_RGBA, GL_UNSIGNED_BYTE, null);

  final TypedTextureMutable t2 = TypedTextureMutable(cgl, "t2", w, h, GL_RGBA,
      TexturePropertiesFramebuffer, GL_RGBA, GL_UNSIGNED_BYTE, null);

  final RenderProgram programFire =
      RenderProgram("fire", cgl, nullVertexShader, fireFragmentShader);

  final RenderProgram programColor =
      RenderProgram("color", cgl, nullVertexShader, colorFragmentShader);

  final MeshData unit = ShapeQuad(programFire, 1);

  // Set up Ping-Ponging
  final Framebuffer fb1 = Framebuffer(cgl, t1);
  final Framebuffer fb2 = Framebuffer(cgl, t2);
  final UniformGroup ug = UniformGroup("ug")
    ..ForceUniform(uRandomSeed, 0.0)
    ..ForceUniform(uFlameTurbulence, 0.2)
    ..ForceUniform(uFlameHeight, 3.5)
    ..ForceUniform(uFlameWidth, 1.2)
    ..ForceUniform(uFlameThrottle, 0.248); // needs to smaller than 1/4.0

  // Event Handling
  for (HTML.Node node in HTML.document.getElementsByTagName("input")) {
    HTML.Element input = node as HTML.Element;
    input.onChange.listen((HTML.Event e) {
      HTML.InputElement input = e.target as HTML.InputElement;
      if (input.type == "range") {
        HTML.OutputElement output =
            HTML.document.getElementById(input.id + "2") as HTML.OutputElement;
        ug.ForceUniform(input.id, double.parse(input.value!));
        output.value = input.value;
      }
    });
  }

  // Trigger handlers
  for (HTML.Node node in HTML.document.getElementsByTagName("input")) {
    HTML.Element input = node as HTML.Element;
    input.dispatchEvent(HTML.Event("change"));
  }

  double _lastTimeMs = 0.0;
  int frame = 0;
  void animate(num timeMs) {
    _lastTimeMs = timeMs + 0.0;
    frame++;
    ug.ForceUniform(uRandomSeed, _lastTimeMs);

    if (frame % 2 == 0) {
      fb1.Activate(GL_CLEAR_ALL, 0, 0, w, h);
      ug..ForceUniform(uTexture, t2);
      programFire.Draw(unit, [ug]);
      screen.Activate(GL_CLEAR_ALL, 0, 0, w, h);
      ug..ForceUniform(uTexture, t1);
      programColor.Draw(unit, [ug]);
    } else {
      fb2.Activate(GL_CLEAR_ALL, 0, 0, w, h);
      ug..ForceUniform(uTexture, t1);
      programFire.Draw(unit, [ug]);
      screen.Activate(GL_CLEAR_ALL, 0, 0, w, h);
      ug..ForceUniform(uTexture, t2);
      programColor.Draw(unit, [ug]);
    }

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs, "${frame}");
  }

  animate(0.0);
}
