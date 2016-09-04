import 'dart:html' as HTML;
import 'package:chronosgl/chronosgl.dart';

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(65.0);
  Perspective perspective = new Perspective(orbit);

  RenderingPhase phase = new RenderingPhase("main", chronosGL.gl, perspective);
  List<ShaderProgram> prgs = new List<ShaderProgram>();
  prgs.add(phase.createProgram(createPlasmaShader()));
  prgs.add(phase.createProgram(createPlasmaShader2()));
  prgs.add(phase.createProgram(createPlasmaShader3()));

  Material mat = new Material("mat");
  MeshData md = Shapes.Cube(x: 10.0, y: 10.0, z: 10.0);

  Mesh m = new Mesh(md.name, md, mat)
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
  ShaderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  double _lastTimeMs = 0.0;

  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    m.rollLeft(elapsed * 0.0005);
    m.lookLeft(elapsed * 0.0005);
    for (ShaderProgram p in prgs) {
      p.SetUniform(uTime, timeMs / 1000.0);
    }
    perspective.Adjust(canvas);
    phase.draw([]);
    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
