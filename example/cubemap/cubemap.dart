import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import "dart:async";

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0);
  Perspective perspective = new Perspective(orbit);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram programCM = phase.createProgram(createCubeMapShader());

  Material mat = new Material("cubemap");
  MeshData md = ShapeCube(chronosGL, x: 2.0, y: 2.0, z: 2.0);
  programCM.add(new Node("cube", md, mat));

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
    phase.draw([perspective]);

    HTML.window.animationFrame.then(animate);
  }

  List<Future<dynamic>> futures = LoadCubeImages("skybox_", ".png");

  Future.wait(futures).then((List list) {
    Texture cubeTex = new CubeTexture(chronosGL, "stars", list);
    mat.SetUniform(uCubeTexture, cubeTex);
    Node sky = Utils.MakeSkycube(chronosGL, cubeTex);
    programCM.add(sky);
    animate(0.0);
  });
}
