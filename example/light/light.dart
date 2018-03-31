import 'dart:html' as HTML;
import "dart:math" as MATH;

import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';

final VM.Vector3 posLight = new VM.Vector3(11.0, 20.0, 0.0);
final VM.Vector3 dirLight = new VM.Vector3(0.0, -50.0, 0.0);
final VM.Vector3 spotDirLight = new VM.Vector3(-11.0, -30.0, 0.0);

final double range = 50.0;
final double angle = MATH.pi / 7.0;
final double glossiness = 10.0;

// These must be in-sync with the .html file
const String idPoint = "idPoint";
const String idSpot = "idSpot";
const String idDirectional = "idDirectional";

final Map<String, Light> gLightSources = {
  idDirectional:
      new DirectionalLight("dir", dirLight, ColorBlack, ColorWhite, 40.0),
  idPoint: new PointLight("point", posLight, ColorLiteBlue, ColorWhite, range),
  idSpot: new SpotLight("spot", posLight, spotDirLight, ColorLiteGreen,
      ColorWhite, range, angle, 2.0, 1.0, 40.0)
};

void MakeSceneCubeSphere(ChronosGL cgl, RenderProgram prog, Node container) {
  MeshData cubeMeshData = ShapeCube(prog, x: 2.0, y: 2.0, z: 2.0);
  MeshData sphereMeshData = ShapeIcosahedron(prog);

  List<Material> mats = [
    new Material("mat0")
      ..SetUniform(uTexture, MakeSolidColorTextureRGB(cgl, "gray", ColorGray4))
      ..SetUniform(uShininess, glossiness),
    new Material("mat1")
      ..SetUniform(uTexture, MakeSolidColorTextureRGB(cgl, "red", ColorRed))
      ..SetUniform(uShininess, glossiness),
    new Material("mat2")
      ..SetUniform(uTexture, MakeSolidColorTextureRGB(cgl, "red", ColorBlue))
      ..SetUniform(uShininess, glossiness),
    new Material("mat3")
      ..SetUniform(uTexture, MakeSolidColorTextureRGB(cgl, "red", ColorGreen))
      ..SetUniform(uShininess, glossiness),
  ];

  for (int i = 0; i < 8; i++) {
    double x = i & 1 == 0 ? -10.0 : 10.0;
    double y = i & 2 == 0 ? -10.0 : 10.0;
    double z = i & 4 == 0 ? -10.0 : 10.0;

    container.add(new Node(
        "mesh", i % 2 == 0 ? cubeMeshData : sphereMeshData, mats[i % 4])
      ..setPos(x, y, z)
      ..lookUp(1.0)
      ..lookLeft(0.7));
  }

  // Subdivide plane to show Gourad shading issues
  Node grid = new Node("grid", ShapeGrid(prog, 20, 20, 80.0, 80.0), mats[0]);
  grid.rotX(-MATH.pi * 0.48);
  grid.setPos(0.0, -20.0, 20.0);
  container.add(grid);
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = new OrbitCamera(50.0, 10.0, 0.0, canvas);
  orbit.setPos(0.0, 0.0, 56.0);
  Perspective perspective = new Perspective(orbit, 0.1, 10000.0);

  Illumination illumination = new Illumination();
  for (Light l in gLightSources.values) {
    illumination.AddLight(l);
  }

  Scene sceneBlinnPhong = new Scene(
      "BlinnPhong",
      new RenderProgram("BlinnPhong", cgl, lightVertexShaderBlinnPhong,
          lightFragmentShaderBlinnPhong),
      [perspective, illumination]);

  Scene sceneGourad = new Scene(
      "Gourad",
      new RenderProgram(
          "Gourad", cgl, lightVertexShaderGourad, lightFragmentShaderGourad),
      [perspective, illumination]);
  assert(
      sceneBlinnPhong.program.HasCompatibleAttributesTo(sceneGourad.program));

  Scene sceneFixed = new Scene(
      "Fixed",
      new RenderProgram(
          "Fixed", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);

  // We have two phases
  // 1 BlinnPhong
  // 2 Gourad
  // Each has two scenes
  // 1 the lighting specific scene
  // 2 the lighting visualization scene which is shared by the two phases
  final RenderPhase phaseBlinnPhong = new RenderPhase("BlinnPhong", cgl)
    ..add(sceneBlinnPhong)
    ..add(sceneFixed);

  final RenderPhase phaseGourad = new RenderPhase("Gourad", cgl)
    ..add(sceneGourad)
    ..add(sceneFixed);

  Material lightSourceMat = new Material("light")
    ..SetUniform(uColor, ColorYellow);
  final Map<String, Node> lightVisualizers = {};
  for (String k in gLightSources.keys) {
    lightVisualizers[k] = new Node(k,
        LightVisualizer(sceneFixed.program, gLightSources[k]), lightSourceMat);
  }

  for (Node n in lightVisualizers.values) {
    sceneFixed.add(n);
  }

  Node node = new Node.Container("scene");
  MakeSceneCubeSphere(cgl, sceneBlinnPhong.program, node);

  sceneGourad.add(node);
  sceneBlinnPhong.add(node);

  HTML.SelectElement selectPhase =
      HTML.document.querySelector('#phase') as HTML.SelectElement;
  assert(selectPhase != null);
  selectPhase.selectedIndex = 0;

  for (HTML.Element input in HTML.document.getElementsByTagName("input")) {
    input.onChange.listen((HTML.Event e) {
      HTML.InputElement input = e.target as HTML.InputElement;
      print("${input.id} toggle ${input.checked}");
      gLightSources[input.id].enabled = input.checked;
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
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    for (Node m in node.children) {
      if (m.name != "grid") {
        m.rollLeft(elapsed * 0.0003);
        m.lookLeft(elapsed * 0.0003);
      }
    }

    RenderPhase phase =
        selectPhase.selectedIndex == 0 ? phaseBlinnPhong : phaseGourad;
    phase.Draw();
    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  animate(0.0);
}
