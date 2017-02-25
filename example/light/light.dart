import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:web_gl' as WEBGL;
import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;
import "dart:math" as MATH;

final VM.Vector3 colBlack = new VM.Vector3(0.0, 0.0, 0.0);
final VM.Vector3 colGray = new VM.Vector3(0.2, 0.2, 0.2);

final VM.Vector3 colBlue = new VM.Vector3(0.0, 0.0, 1.0);
final VM.Vector3 colLiteBlue = new VM.Vector3(0.0, 0.0, 0.5);

final VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);
final VM.Vector3 colLiteRed = new VM.Vector3(0.5, 0.0, 0.0);

final VM.Vector3 colGreen = new VM.Vector3(0.0, 1.0, 0.0);
final VM.Vector3 colLiteGreen = new VM.Vector3(0.0, 0.5, 0.0);

final VM.Vector3 colYellow = new VM.Vector3(1.0, 1.0, 0.0);

final VM.Vector3 posLight = new VM.Vector3(11.0, 20.0, 0.0);
final VM.Vector3 dirLight = new VM.Vector3(0.0, -50.0, 0.0);
final VM.Vector3 spotDirLight = new VM.Vector3(-11.0, -30.0, 0.0);

final double range = 50.0;
final double angle =  MATH.PI / 7.0;
final double glossiness = 25.0;

// These must be in-sync with the .html file
final String idPoint = "idPoint";
final String idSpot = "idSpot";
final String idDirectional = "idDirectional";

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  chronosGL.enable(WEBGL.CULL_FACE);

  OrbitCamera orbit = new OrbitCamera(50.0, 10.0);
  orbit.setPos(0.0, 0.0, 56.0);
  Perspective perspective = new Perspective(orbit, 0.1, 10000.0);
  RenderPhase phaseBlinnPhong = new RenderPhase("blinn-phong", chronosGL);
  RenderProgram lightBlinnPhong =
      phaseBlinnPhong.createProgram(createLightShaderBlinnPhong());
  RenderProgram fixedBlinnPhong =
      phaseBlinnPhong.createProgram(createSolidColorShader());

  RenderPhase phaseGourad = new RenderPhase("gourad", chronosGL);
  RenderProgram lightGourad =
      phaseGourad.createProgram(createLightShaderGourad());
  RenderProgram fixedGourad =
      phaseGourad.createProgram(createSolidColorShader());

  Map<String, Light> lightSources = {
    idDirectional:
        new DirectionalLight("dir", dirLight, colLiteRed, colRed, glossiness),
    idPoint: new PointLight(
        "point", posLight, colLiteBlue, colBlue, range, glossiness),
    idSpot: new SpotLight("spot", posLight, spotDirLight, colLiteGreen, colGreen,
        range, angle, 2.0, glossiness)
  };

  Illumination illumination = new Illumination();
  for (Light l in lightSources.values) {
    illumination.AddLight(l);
  }

  // Same order as lightSources
  Material lightSourceMat = new Material("light")
    ..SetUniform(uColor, colYellow);
  Map<String, Node> lightVisualizers = {
    idDirectional: new Node(
        "DirLightViz",
        DirectionalLightVisualizer(chronosGL, 80.0, 30.0, -dirLight),
        lightSourceMat),
    idPoint: new Node(
        "PointLightViz",
        PointLightVisualizer(chronosGL, posLight, range),
        lightSourceMat),
    idSpot: new Node(
        "SpotLightViz",
        SpotLightVisualizer(chronosGL, posLight, spotDirLight, range, angle),
        lightSourceMat)
  };

  for (Node n in lightVisualizers.values) {
    fixedBlinnPhong.add(n);
    fixedGourad.add(n);
  }

  MeshData cubeMeshData = ShapeCube(chronosGL, x: 2.0, y: 2.0, z: 2.0);
  MeshData sphereMeshData = ShapeIcosahedron(chronosGL);

  Material cubeMat = new Material("mat")..SetUniform(uColor, colGray);
  List<Node> meshes = [];
  for (int i = 0; i < 8; i++) {
    double x = i & 1 == 0 ? -10.0 : 10.0;
    double y = i & 2 == 0 ? -10.0 : 10.0;
    double z = i & 4 == 0 ? -10.0 : 10.0;
    meshes.add(
        new Node("mesh", i % 2 == 0 ? cubeMeshData : sphereMeshData, cubeMat)
          ..setPos(x, y, z)
          ..lookUp(1.0)
          ..lookLeft(0.7));
  }

  for (Node m in meshes) {
    lightGourad.add(m);
    lightBlinnPhong.add(m);
  }

  // Subdivide plane to show Gourad shading issues
  Node grid =
      new Node("grid", ShapeGrid(chronosGL, 20, 20, 80.0, 80.0), cubeMat);
  grid.rotX(-MATH.PI * 0.48);
  grid.setPos(0.0, -20.0, 20.0);
  lightGourad.add(grid);
  lightBlinnPhong.add(grid);

  HTML.SelectElement selectPhase =
      HTML.document.querySelector('#phase') as HTML.SelectElement;
  assert(selectPhase != null);
  selectPhase.selectedIndex = 0;

  for (HTML.Element input in HTML.document.getElementsByTagName("input")) {
    input.onChange.listen((HTML.Event e) {
      HTML.InputElement input = e.target as HTML.InputElement;
      print("${input.id} toggle ${input.checked}");
      lightSources[input.id].enabled = input.checked;
      lightVisualizers[input.id].enabled = input.checked;
    });
  }

  for (HTML.Element e in HTML.document.getElementsByTagName("input")) {
    print("initialize inputs ${e.id}");
    e.dispatchEvent(new HTML.Event("change"));
  }

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    perspective.AdjustAspect(w, h);
    phaseGourad.viewPortW = w;
    phaseGourad.viewPortH = h;

    phaseBlinnPhong.viewPortW = w;
    phaseBlinnPhong.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs += 0.0; // bug workaround - force double
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);

    for (Node m in meshes) {
      m.rollLeft(elapsed * 0.0003);
      m.lookLeft(elapsed * 0.0003);
    }

    RenderPhase phase =
        selectPhase.selectedIndex == 0 ? phaseBlinnPhong : phaseGourad;
    phase.draw([perspective, illumination]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
