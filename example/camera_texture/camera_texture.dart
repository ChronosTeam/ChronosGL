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
  RenderProgram basic = phase.createProgram(createTexturedShader());

  //Texture texture = new ImageTexture(chronosGL, "../gradient.jpg");

  final Material matGradient = new Material("gradient")
    ..SetUniform(uColor, ColorBlack);

  Node cube = new Node("cube", ShapeCube(basic), matGradient)
    ..setPos(-5.0, 0.0, -5.0);
  basic.add(cube);

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
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    try {
      texture.Update();
    } catch (exception) {
      print(exception);
    }
    List<DrawStats> stats = [];
    phase.draw([perspective], stats);
    List<String> out = [];
    for (DrawStats d in stats) {
      out.add(d.toString());
    }

    fps.UpdateFrameCount(timeMs, out.join("<br>"));

    HTML.window.animationFrame.then(animate);
  }

  List<Future<Object>> futures = [
    MakeVideoElementFromCamera(),
    //LoadVideo("movie.ogv"),
  ];

  Future.wait(futures).then((List list) {
    video = list[0];
    if (video == null) {
      HTML.window.alert("could not access camera");
    }
    texture = new ImageTexture(chronosGL, "video", video);
    texture.properties.minFilter = GL_LINEAR;
    texture.properties.clamp = true;
    // Figure out why moving this into the WebTexture contructor does not work.
    texture.Install();
    matGradient.SetUniform(uTexture, texture);
    animate(0.0);
  });
}
