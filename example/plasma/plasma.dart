import 'dart:html' as html;
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
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);

  Material mat = new Material();
  MeshData md = Shapes.Cube(x:10.0, y:10.0, z:10.0);

  Mesh m = new Mesh(md, mat)
    ..setPos(0, 0, 0)
    ..lookUp(1.0)
    ..lookLeft(0.7);

  m.setAnimateCallback((Node node, double time) {
    m.rollLeft(time * 0.0001);
    m.lookLeft(time * 0.0001);
  });

  prgs[0].add(m);

  int pointer = 0;

  html.document.addEventListener('keypress', (event) {
    prgs[pointer % 3].remove(m);
    prgs[(pointer + 1) % 3].add(m);
    pointer = (pointer + 1) % 3;
  });

  html.SelectElement myselect =
      html.document.querySelector('#myselect') as html.SelectElement;
  myselect.onChange.listen((html.Event e) {
    prgs[pointer].remove(m);
    pointer = myselect.selectedIndex;
    prgs[(pointer)].add(m);
  });
  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
