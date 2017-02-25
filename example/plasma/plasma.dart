import 'dart:html' as HTML;
import 'package:chronosgl/chronosgl.dart';

// http://www.bidouille.org/prog/plasma
// see also: https://www.shadertoy.com/view/XdX3Wn
// and http://iq12.com/2013/04/fifty-shaders-of-grey/

// TODO: Add www.shadertoy.com/view/4dlGDN www.shadertoy.com/view/lsfGzr

List<ShaderObject> createPlasmaShader() {
  return [
    new ShaderObject("Plasma1V")
      ..AddAttributeVars([aVertexPosition, aTextureCoordinates])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain([
        StdVertexBody,
        "${vTextureCoordinates} = ${aTextureCoordinates};"
      ]),
    new ShaderObject("Plasma1F")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTime)
      ..SetBodyWithMain([
        """
    #define PI 3.1415926535897932384626433832795
    float u_time = ${uTime} * 5.0;
    vec2 u_k = vec2(10.0,10.0);

    float v = 0.0;
    vec2 c = ${vTextureCoordinates} * u_k - u_k/2.0;
    v += sin((c.x+u_time));
    v += sin((c.y+u_time)/2.0);
    v += sin((c.x+c.y+u_time)/2.0);
    c += u_k/2.0 * vec2(sin(u_time/3.0), cos(u_time/2.0));
    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+u_time);
    v = v / 2.0;
    vec3 col1 = vec3(1.0, sin(PI*v), cos(PI*v));
    vec3 col2 = vec3(sin(PI*v), cos(PI*v), -1.0);
    vec3 col = mix(col1, col2, sin(u_time)*.5+.5);
    gl_FragColor = vec4(col*.5 + .5, 1.0);
"""
      ])
  ];
}

List<ShaderObject> createPlasmaShader2() {
  return [
    new ShaderObject("Plasma2V")
      ..AddAttributeVars([aVertexPosition, aTextureCoordinates])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain([
        StdVertexBody,
        "${vTextureCoordinates} = ${aTextureCoordinates};"
      ]),
    new ShaderObject("Plasma2F")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTime)
      ..SetBodyWithMain([
        """
    float x = ${vTextureCoordinates}.x;
    float y = ${vTextureCoordinates}.y;
    float v = sin(x * cos(${uTime}/15.0) * 120.0) +
              cos(y * sin(${uTime}/10.0) * 120.0) +
              sin(sqrt(y * y + x * x) * 40.0);
    gl_FragColor = vec4(1, v,1,1);
  """
      ])
  ];
}

List<ShaderObject> createPlasmaShader3() {
  return [
    new ShaderObject("Plasma3V")
      ..AddAttributeVars([aVertexPosition, aTextureCoordinates])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain([
        StdVertexBody,
        "${vTextureCoordinates} = ${aTextureCoordinates};"
      ]),
    new ShaderObject("Plasma3F")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTime)
      ..SetBodyWithMain([
        """
    float x = ${vTextureCoordinates}.x*1000.0; // gl_FragCoord.x;
    float y = ${vTextureCoordinates}.y*1000.0; // gl_FragCoord.y;
    float time = ${uTime};
    float mov0 = x+y+cos(sin(time)*2.)*100.+sin(x/100.)*1000.;
    float mov1 = y / 720.0 / 0.2 + time;
    float mov2 = x / 1280.0 / 0.2;
    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);
    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));
    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));
    gl_FragColor = vec4( c1,c2,c3,1.0);
  """
      ])
  ];
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(65.0);
  Perspective perspective = new Perspective(orbit);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  List<RenderProgram> prgs = new List<RenderProgram>();
  prgs.add(phase.createProgram(createPlasmaShader()));
  prgs.add(phase.createProgram(createPlasmaShader2()));
  prgs.add(phase.createProgram(createPlasmaShader3()));

  Material mat = new Material("mat");
  MeshData md = ShapeCube(chronosGL, x: 10.0, y: 10.0, z: 10.0);

  Node m = new Node(md.name, md, mat)
    ..setPos(0.0, 0.0, 0.0)
    ..lookUp(1.0)
    ..lookLeft(0.7);

  prgs[0].add(m);

  int pointer = 0;

  HTML.document.addEventListener('keypress', (event) {
    prgs[pointer % 3].remove(m);
    prgs[(pointer + 1) % 3].add(m);
    pointer = (pointer + 1) % 3;
  });

  HTML.SelectElement myselect =
      HTML.document.querySelector('#myselect') as HTML.SelectElement;
  myselect.onChange.listen((HTML.Event e) {
    prgs[pointer].remove(m);
    pointer = myselect.selectedIndex;
    prgs[(pointer)].add(m);
  });
  RenderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(chronosGL, 2000));

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
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    m.rollLeft(elapsed * 0.0005);
    m.lookLeft(elapsed * 0.0005);
    for (RenderProgram p in prgs) {
      p.ForceInput(uTime, timeMs / 1000.0);
    }
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
