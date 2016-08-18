import 'dart:html' as HTML;
import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas',
      useFramebuffer: false, fxShader: createPlasmaShader3());

  List<ShaderProgram> prgs = new List<ShaderProgram>();
  prgs.add(chronosGL.createProgram(createPlasmaShader()));
  prgs.add(chronosGL.createProgram(createPlasmaShader2()));
  prgs.add(chronosGL.createProgram(createPlasmaShader3()));

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 65.0);

  Material mat = new Material();
  MeshData md = Shapes.Cube(x: 10.0, y: 10.0, z: 10.0);

  Mesh m = new Mesh(md, mat)
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
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  double _lastTimeMs = 0.0;

  void animate(timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    m.rollLeft(timeMs * 0.000001);
    m.lookLeft(timeMs * 0.000001);
    for (ShaderProgram p in prgs) {
      p.inputs.SetUniformVal(uTime, timeMs / 1000.0);
    }

    chronosGL.draw();
    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
