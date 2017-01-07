import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'package:vector_math/vector_math.dart' as VM;

String modelFile = "../asset/leeperrysmith/LeePerrySmith.obj";
String bumpmapFile =
    "../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg";

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  // Required for bump mapping unparametrized surfaces a la Morten Mikkelsen
  var ext = GetGlExtensionStandardDerivatives(chronosGL.gl);
  if (ext == null) HTML.window.alert("OES_standard_derivatives not supported");

  OrbitCamera orbit = new OrbitCamera(0.5);
  Perspective perspective = new Perspective(orbit);

  RenderPhase phase = new RenderPhase("main", chronosGL.gl);
  RenderProgram prg = phase.createProgram(createTexturedShader());

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
    fps.UpdateFrameCount(timeMs);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  List<Future<dynamic>> futures = [
    LoadRaw(modelFile),
    LoadImage(bumpmapFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Bumpmap
    Texture bumpmap = new ImageTexture(chronosGL.gl, bumpmapFile, list[1]);

    // Setup Mesh
    GeometryBuilder gb = GeometryFromWavefront(list[0]);
    MeshData md = GeometryBuilderToMeshData(modelFile, chronosGL.gl, gb);

    Material mat = new Material("mat")
      ..SetUniform(uTexture, bumpmap)
      ..SetUniform(uColor, new VM.Vector3.zero());
    Node mesh = new Node(md.name, md, mat);
    Node n = new Node.Container("wrapper", mesh);
    //n.invert = true;
    n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
    //n.matrix.scale(0.02);
    prg.add(n);
    // GO!
    animate(0.0);
  });
}
