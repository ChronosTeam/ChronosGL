import 'dart:html' as HTML;
import 'dart:async';
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 10.0, 0.0, canvas);
  PerspectiveResizeAware perspective =
      new PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  RenderProgram program = new RenderProgram(
      "solid", cgl, texturedVertexShader, texturedFragmentShader);

  final Material mat = new Material("cube")
    ..SetUniform(uColor, ColorBlack)
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity());

  MeshData cube = ShapeCube(program);

  HTML.VideoElement video;
  ImageTexture texture;

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    try {
      // Get new image from camera and update texture with it.
      texture.Update();
    } catch (exception) {
      print(exception);
    }
    program.Draw(cube, [perspective, mat]);

    fps.UpdateFrameCount(_lastTimeMs);

    HTML.window.animationFrame.then(animate);
  }

  List<Future<Object>> futures = [
    MakeVideoElementFromCamera(),
    //LoadVideo("movie.ogv"),
  ];

  Future.wait(futures).then((List list) {
    video = list[0];
    if (video == null) {
      HTML.window
          .alert("Could not access camera - do you have a camera installed?");
    }
    texture = new ImageTexture(cgl, "video", video, TexturePropertiesVideo);
    mat.SetUniform(uTexture, texture);
    animate(0.0);
  });
}
