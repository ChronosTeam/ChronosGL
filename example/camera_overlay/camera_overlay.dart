import 'dart:html' as HTML;
import 'dart:async';
import 'package:chronosgl/chronosgl.dart';

// This scene is responsible for filling the entire screen with a texture
// gleaned from the camera
Scene BackgroundScene(ChronosGL cgl, ImageTexture texture) {
  final Scene scene = Scene(
      "bg",
      RenderProgram(
          "bg", cgl, scalingCopyVertexShader, scalingCopyFragmentShader),
      []);

  final Material matBackground = Material("bg")
    ..ForceUniform(cDepthWrite, false)
    ..SetUniform(uTexture, texture);

  scene.add(Node("bg", ShapeQuad(scene.program, 1), matBackground));
  return scene;
}

Scene CubeScene(ChronosGL cgl, List<UniformGroup> uniforms) {
  // This scene renders the a red cube in front of the background
  Scene scene = Scene(
      "objects",
      RenderProgram(
          "solid", cgl, solidColorVertexShader, solidColorFragmentShader),
      uniforms);

  final Material matCube = Material("cube")..SetUniform(uColor, ColorRed);

  double dim = 0.2;
  Node cube =
      Node("cube", ShapeCube(scene.program, x: dim, y: dim, z: dim), matCube)
        ..setPos(-5.0, 0.0, -5.0);
  scene.add(cube);
  return scene;
}

void main2(HTML.VideoElement? video) {
  if (video == null) {
    HTML.window
        .alert("Could not access camera - do you have a camera installed?");
    return;
  }
  final StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");

  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;

  final ChronosGL cgl = ChronosGL(canvas);
  final OrbitCamera orbit = OrbitCamera(15.0, 10.0, 0.0, canvas);
  final Perspective perspective = Perspective(orbit, 0.1, 1000.0);

  final ImageTexture texture =
      ImageTexture(cgl, "video", video, TexturePropertiesVideo);

  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);

  phase.add(BackgroundScene(cgl, texture));
  final Scene cubeScene = CubeScene(cgl, [perspective]);
  final Node cubeNode = cubeScene.nodes[0];
  phase.add(cubeScene);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.animate(elapsed);
    cubeNode.rotX(0.01);
    cubeNode.rotY(0.01);
    try {
      // Get new image from camera and update texture with it.
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

  animate(0.0);
}

void main() {
  MakeVideoElementFromCamera().then(main2).catchError((AsyncError asyncError) {
    HTML.window
        .alert("Camera error ${asyncError}: - do you have a camera installed?");
  });
}
