import 'dart:html' as HTML;
import 'dart:typed_data';
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

Map<String, VM.Vector3> ShapeToColor = {
  "sphere": ColorCyan,
  "cube": ColorRed,
  "cylinder": ColorGreen,
  "quad": ColorMagenta,
  "torus": ColorBlue,
};

void main() {
  HTML.DivElement info = HTML.document.querySelector('#info');

  final StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);

  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  final RenderPhase phase = new RenderPhase("main", cgl);
  final Scene scene = new Scene(
      "objects",
      new RenderProgram(
          "prog", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);
  phase.add(scene);

  {
    String name = "sphere";
    Material mat = new Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node = new Node(name, ShapeIcosahedron(scene.program, 3), mat)
      ..setPos(0.0, 0.0, 0.0);
    scene.add(node);
  }
  {
    String name = "cube";
    Material mat = new Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node = new Node(name, ShapeCube(scene.program), mat)
      ..setPos(-5.0, 0.0, -5.0);
    scene.add(node);
  }

  {
    String name = "cylinder";
    Material mat = new Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node =
        new Node(name, ShapeCylinder(scene.program, 3.0, 6.0, 2.0, 32), mat)
          ..setPos(5.0, 0.0, -5.0);
    scene.add(node);
  }
  {
    String name = "quad";
    Material mat = new Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node = new Node(name, ShapeQuad(scene.program, 2), mat)
      ..setPos(-5.0, 0.0, 5.0);
    scene.add(node);
  }
  {
    String name = "torus";
    Material mat = new Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node = new Node(
        name, ShapeTorusKnot(scene.program, radius: 1.0, tubeRadius: 0.4), mat)
      ..setPos(5.0, 0.0, 5.0);
    scene.add(node);
  }

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

  List<String> out = [
    "<h2>&nbsp;Press shift to pick object under cursor&nbsp;</h2>",
    ""
  ];

  final Uint8List pixelData = new Uint8List(1 * 4);

  String getShapeUnderCusorInfo() {
    int x = orbit.mouse.currentX;
    int y = canvas.clientHeight - orbit.mouse.currentY;
    // This also works
    //new Framebuffer.Screen(cgl).ExtractByteData(pixelData, x, y, 1, 1);
    cgl.readPixels(x, y, 1, 1, GL_RGBA, GL_UNSIGNED_BYTE, pixelData);
    VM.Vector3 pick = new VM.Vector3(
        pixelData[0] + 0.0, pixelData[1] + 0.0, pixelData[2] + 0.0)
      ..scale(1.0 / 255.0);
    for (String name in ShapeToColor.keys) {
      if (ShapeToColor[name] == pick) {
        return "${x}.${y} ${pixelData}: ${name}";
      }
    }
    return "${x}.${y} ${pixelData}: NONE";
  }

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;

    orbit.azimuth += 0.001;

    phase.Draw();

    info.innerHtml = getShapeUnderCusorInfo();

    // this also clears keyboard data
    orbit.animate(elapsed);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  animate(0.0);
}
