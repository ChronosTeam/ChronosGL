import 'dart:html' as HTML;
import 'dart:async';
import 'package:chronosgl/chronosgl.dart';

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  Scene sceneBackground = new Scene(
      "bg",
      new RenderProgram("bg", chronosGL, copyVertexShader, copyFragmentShader),
      []);
  phase.add(sceneBackground);

  final Material matBackground = new Material("bg")
    ..ForceUniform(cDepthWrite, false);
  sceneBackground.add(
      new Node("bg", ShapeQuad(sceneBackground.program, 1), matBackground));

  Scene sceneCube = new Scene(
      "objects",
      new RenderProgram(
          "solid", chronosGL, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);
  phase.add(sceneCube);

  final Material matCube = new Material("cube")..SetUniform(uColor, ColorRed);

  double dim = 0.2;
  Node cube = new Node(
      "cube", ShapeCube(sceneCube.program, x: dim, y: dim, z: dim), matCube)
    ..setPos(-5.0, 0.0, -5.0);
  sceneCube.add(cube);

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

  HTML.VideoElement video;
  ImageTexture texture;

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.animate(elapsed);
    cube.rotX(0.01);
    cube.rotY(0.01);
    try {
      texture.Update();
    } catch (exception) {
      print(exception);
    }
    List<DrawStats> stats = [];
    phase.Draw(stats);
    List<String> out = [];
    for (DrawStats d in stats) {
      out.add(d.toString());
    }

    fps.UpdateFrameCount(_lastTimeMs, out.join("<br>"));

    HTML.window.animationFrame.then(animate);
  }

  List<Future<Object>> futures = [
    MakeVideoElementFromCamera(),
  ];

  Future.wait(futures).then((List list) {
    video = list[0];
    if (video == null) {
      HTML.window.alert("could not access camera");
    }
    texture =
        new ImageTexture(chronosGL, "video", video, TexturePropertiesVideo);
    matBackground.SetUniform(uTexture, texture);
    animate(0.0);
  });
}
