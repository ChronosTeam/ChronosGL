import 'dart:html' as HTML;
import 'package:chronosgl/chronosgl.dart';

// http://www.bidouille.org/prog/plasma
// see also: https://www.shadertoy.com/view/XdX3Wn
// and http://iq12.com/2013/04/fifty-shaders-of-grey/

// TODO: Add www.shadertoy.com/view/4dlGDN www.shadertoy.com/view/lsfGzr

final ShaderObject plasmaVertexShader1 = new ShaderObject("Plasma1V")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..AddVaryingVars([vTexUV])
  ..SetBodyWithMain([StdVertexBody, "${vTexUV} = ${aTexUV};"]);

final ShaderObject plasmaFragmentShader1 = new ShaderObject("Plasma1F")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTime])
  ..SetBodyWithMain([
    """
    #define PI 3.1415926535897932384626433832795
    float u_time = ${uTime} * 5.0;
    vec2 u_k = vec2(10.0,10.0);

    float v = 0.0;
    vec2 c = ${vTexUV} * u_k - u_k/2.0;
    v += sin((c.x+u_time));
    v += sin((c.y+u_time)/2.0);
    v += sin((c.x+c.y+u_time)/2.0);
    c += u_k/2.0 * vec2(sin(u_time/3.0), cos(u_time/2.0));
    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+u_time);
    v = v / 2.0;
    vec3 col1 = vec3(1.0, sin(PI*v), cos(PI*v));
    vec3 col2 = vec3(sin(PI*v), cos(PI*v), -1.0);
    vec3 col = mix(col1, col2, sin(u_time)*.5+.5);
    ${oFragColor} = vec4(col*.5 + .5, 1.0);
"""
  ]);

final ShaderObject plasmaVertexShader2 = new ShaderObject("Plasma2V")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..AddVaryingVars([vTexUV])
  ..SetBodyWithMain([StdVertexBody, "${vTexUV} = ${aTexUV};"]);

final ShaderObject plasmaFragmentShader2 = new ShaderObject("Plasma2F")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTime])
  ..SetBodyWithMain([
    """
    float x = ${vTexUV}.x;
    float y = ${vTexUV}.y;
    float v = sin(x * cos(${uTime}/15.0) * 120.0) +
              cos(y * sin(${uTime}/10.0) * 120.0) +
              sin(sqrt(y * y + x * x) * 40.0);
    ${oFragColor} = vec4(1, v,1,1);
  """
  ]);

final ShaderObject plasmaVertexShader3 = new ShaderObject("Plasma3V")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..AddVaryingVars([vTexUV])
  ..SetBodyWithMain([StdVertexBody, "${vTexUV} = ${aTexUV};"]);

final ShaderObject plasmaFragmentShader3 = new ShaderObject("Plasma3F")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTime])
  ..SetBodyWithMain([
    """
    float x = ${vTexUV}.x*1000.0; // gl_FragCoord.x;
    float y = ${vTexUV}.y*1000.0; // gl_FragCoord.y;
    float time = ${uTime};
    float mov0 = x+y+cos(sin(time)*2.)*100.+sin(x/100.)*1000.;
    float mov1 = y / 720.0 / 0.2 + time;
    float mov2 = x / 1280.0 / 0.2;
    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);
    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));
    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));
    ${oFragColor} = vec4( c1,c2,c3,1.0);
  """
  ]);

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective, int num) {
  Scene scene = new Scene(
      "stars",
      new RenderProgram(
          "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader),
      [perspective]);
  scene.add(Utils.MakeParticles(scene.program, num));
  return scene;
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(65.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  List<Scene> scenes = [
    new Scene(
        "plasma1",
        new RenderProgram(
            "plasma1", chronosGL, plasmaVertexShader1, plasmaFragmentShader1),
        [perspective]),
    new Scene(
        "plasma2",
        new RenderProgram(
            "plasma2", chronosGL, plasmaVertexShader2, plasmaFragmentShader2),
        [perspective]),
    new Scene(
        "plasma3",
        new RenderProgram(
            "plasma3", chronosGL, plasmaVertexShader3, plasmaFragmentShader3),
        [perspective]),
  ];
  for (Scene s in scenes) phase.add(s);

  Material mat = new Material("mat");
  MeshData md = ShapeCube(scenes[0].program, x: 10.0, y: 10.0, z: 10.0);

  Node cube = new Node(md.name, md, mat)
    ..setPos(0.0, 0.0, 0.0)
    ..lookUp(1.0)
    ..lookLeft(0.7);

  scenes[0].add(cube);

  int pointer = 0;

  HTML.document.addEventListener('keypress', (event) {
    scenes[pointer % 3].remove(cube);
    scenes[(pointer + 1) % 3].add(cube);
    pointer = (pointer + 1) % 3;
  });

  HTML.SelectElement myselect =
      HTML.document.querySelector('#myselect') as HTML.SelectElement;
  myselect.onChange.listen((HTML.Event e) {
    scenes[pointer].remove(cube);
    pointer = myselect.selectedIndex;
    scenes[(pointer)].add(cube);
  });

  phase.add(MakeStarScene(chronosGL, perspective, 2000));

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    perspective.AdjustAspect(w, h);
    phase.viewPortW = w;
    phase.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    cube.rollLeft(elapsed * 0.0005);
    cube.lookLeft(elapsed * 0.0005);
    mat.ForceUniform(uTime, timeMs / 1000.0);

    phase.Draw();
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
