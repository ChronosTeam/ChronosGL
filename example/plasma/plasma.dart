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
  MeshData md = chronosGL.shapes.createCube();
  for (int i = 0; i < md.vertices.length; i++) {
    md.vertices[i] = md.vertices[i] * 10;
  }
  Mesh m = md.createMesh(mat);
  m.setPos(0, 0, 0);
  m.lookUp(1.0);
  m.lookLeft(0.7);

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
  ShaderProgram programSprites = chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
