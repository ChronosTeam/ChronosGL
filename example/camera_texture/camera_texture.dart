import 'dart:html' as HTML;
import 'dart:async';
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

void main2(HTML.VideoElement video) {
  if (video == null) {
    HTML.window
        .alert("Could not access camera - do you have a camera installed?");
    return;
  }
  final StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');
  final ChronosGL cgl = ChronosGL(canvas);
  final OrbitCamera orbit = OrbitCamera(15.0, 10.0, 0.0, canvas);
  final PerspectiveResizeAware perspective =
      PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  final RenderProgram program =
      RenderProgram("solid", cgl, texturedVertexShader, texturedFragmentShader);

  MeshData cube = ShapeCube(program);

  final ImageTexture texture =
      ImageTexture(cgl, "video", video, TexturePropertiesVideo);

  final Material mat = Material("cube")
    ..SetUniform(uColor, ColorBlack)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity())
    ..SetUniform(uTexture, texture);

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

  animate(0.0);
}

void main() {
  MakeVideoElementFromCamera().then(main2).catchError((
      AsyncError asyncError) {
     HTML.window
        .alert("Camera error ${asyncError}: - do you have a camera installed?");
  });
}

