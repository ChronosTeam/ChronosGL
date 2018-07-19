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
  final HTML.DivElement info = HTML.document.querySelector('#info');

  final StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas, faceCulling: true);
  final Object ext = cgl.getExtension("WEBGL_get_buffer_sub_data_async");
  print("Ext ${ext}");
  OrbitCamera orbit = OrbitCamera(25.0, 10.0, 0.0, canvas);

  Perspective perspective = Perspective(orbit, 0.1, 1000.0);

  final RenderPhase phase = RenderPhase("main", cgl);
  final Scene scene = Scene(
      "objects",
      RenderProgram(
          "prog", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);
  phase.add(scene);

  {
    String name = "sphere";
    Material mat = Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node = Node(name, ShapeIcosahedron(scene.program, 3), mat)
      ..setPos(0.0, 0.0, 0.0);
    scene.add(node);
  }
  {
    String name = "cube";
    Material mat = Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node = Node(name, ShapeCube(scene.program), mat)
      ..setPos(-5.0, 0.0, -5.0);
    scene.add(node);
  }

  {
    String name = "cylinder";
    Material mat = Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node = Node(name, ShapeCylinder(scene.program, 3.0, 6.0, 2.0, 32), mat)
      ..setPos(5.0, 0.0, -5.0);
    scene.add(node);
  }
  {
    String name = "quad";
    Material mat = Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node = Node(name, ShapeQuad(scene.program, 2), mat)
      ..setPos(-5.0, 0.0, 5.0);
    scene.add(node);
  }
  {
    String name = "torus";
    Material mat = Material(name)..SetUniform(uColor, ShapeToColor[name]);
    Node node = Node(
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

  final Uint8List pixelData = Uint8List(1 * 4);
  final Object pbo = cgl.createBuffer();
  cgl.BufferDataSetSize(GL_PIXEL_PACK_BUFFER, pbo, 4, GL_DYNAMIC_READ);

  String getShapeUnderCusorInfo() {
    DateTime start = DateTime.now();
    int x = orbit.mouse.currentX;
    int y = canvas.clientHeight - orbit.mouse.currentY;
    VM.Vector3 pick;
    if (ext != null && false) {
      cgl.bindBuffer(GL_PIXEL_PACK_BUFFER, pbo);
      cgl.readPixelsToBuffer(x, y, 1, 1, GL_RGBA, GL_UNSIGNED_BYTE, 0);
      cgl.bindBuffer(GL_PIXEL_PACK_BUFFER, null);
      //print("@@@@ promise ${promise}");
      pick = VM.Vector3.zero();
    } else {
      // This also works
      //new Framebuffer.Screen(cgl).ExtractByteData(pixelData, x, y, 1, 1);
      cgl.readPixels(x, y, 1, 1, GL_RGBA, GL_UNSIGNED_BYTE, pixelData);
      pick =
          VM.Vector3(pixelData[0] + 0.0, pixelData[1] + 0.0, pixelData[2] + 0.0)
            ..scale(1.0 / 255.0);
    }
    String shape = "NONE";
    for (String name in ShapeToColor.keys) {
      if (ShapeToColor[name] == pick) {
        shape = name;
        break;
      }
    }
    Duration dur = DateTime.now().difference(start);
    return "${shape}<br>${x}.${y}<br>${pixelData}<br>${dur.inMicroseconds}us";
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
