import 'dart:html' as HTML;
import "dart:math" as MATH;
import 'dart:async';

import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';

final VM.Vector3 posLight = new VM.Vector3(11.0, 20.0, 0.0);
final VM.Vector3 dirLight = new VM.Vector3(0.0, -50.0, 0.0);
final VM.Vector3 spotDirLight = new VM.Vector3(-11.0, -30.0, 0.0);

final double range = 50.0;
final double angle = MATH.PI / 7.0;
final double glossiness = 10.0;

// These must be in-sync with the .html file
const String idPoint = "idPoint";
const String idSpot = "idSpot";
const String idDirectional = "idDirectional";

const String meshFile = "../asset/dragon/dragon.obj";
const String textureFile = "../asset/dragon/dragon.png";

final Map<String, Light> gLightSources = {
  idDirectional:
      new DirectionalLight("dir", dirLight, ColorBlack, ColorWhite, 40.0),
  idPoint: new PointLight("point", posLight, ColorLiteBlue, ColorWhite, range),
  idSpot: new SpotLight("spot", posLight, spotDirLight, ColorLiteGreen,
      ColorWhite, range, angle, 2.0, 1.0, 40.0)
};

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = new OrbitCamera(50.0, 10.0, 0.0, canvas);
  orbit.setPos(0.0, 0.0, 56.0);
  Perspective perspective = new Perspective(orbit, 0.1, 10000.0);

  Illumination illumination = new Illumination();
  for (Light l in gLightSources.values) {
    illumination.AddLight(l);
  }

  RenderPhase phaseBlinnPhong = new RenderPhase("BlinnPhong", chronosGL);
  Scene sceneBlinnPhong = new Scene(
      "BlinnPhong",
      new RenderProgram("BlinnPhong", chronosGL, lightVertexShaderBlinnPhong,
          lightFragmentShaderBlinnPhong),
      [perspective, illumination]);
  phaseBlinnPhong.add(sceneBlinnPhong);

  RenderPhase phaseGourad = new RenderPhase("Gourad", chronosGL);
  Scene sceneGourad = new Scene(
      "Gourad",
      new RenderProgram("Gourad", chronosGL, lightVertexShaderGourad,
          lightFragmentShaderGourad),
      [perspective, illumination]);
  phaseGourad.add(sceneGourad);

  assert(
      sceneBlinnPhong.program.HasCompatibleAttributesTo(sceneGourad.program));

  Scene sceneFixed = new Scene(
      "Fixed",
      new RenderProgram(
          "Fixed", chronosGL, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);

  phaseBlinnPhong.add(sceneFixed);
  phaseGourad.add(sceneFixed);

  Material lightSourceMat = new Material("light")
    ..SetUniform(uColor, ColorYellow);
  Map<String, Node> lightVisualizers = {
    idDirectional: new Node(
        "DirLightViz",
        LightVisualizer(sceneFixed.program, gLightSources[idDirectional]),
        lightSourceMat),
    idPoint: new Node(
        "PointLightViz",
        LightVisualizer(sceneFixed.program, gLightSources[idPoint]),
        lightSourceMat),
    idSpot: new Node(
        "SpotLightViz",
        LightVisualizer(sceneFixed.program, gLightSources[idSpot]),
        lightSourceMat)
  };

  for (Node n in lightVisualizers.values) {
    sceneFixed.add(n);
  }

  // This will be populated when the model has loaded
  Node node = new Node.Container("dragon");

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
    fps.UpdateFrameCount(timeMs);

    RenderPhase phase =
        selectPhase.selectedIndex == 0 ? phaseBlinnPhong : phaseGourad;
    phase.Draw();
    HTML.window.animationFrame.then(animate);
  }

  List<Future<Object>> futures = [
    LoadRaw(meshFile),
    LoadImage(textureFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Texture
    Texture tex = new ImageTexture(chronosGL, textureFile, list[1]);

    Material mat = new Material("matDragon")
      ..SetUniform(uTexture, tex)
      ..SetUniform(uShininess, glossiness);
    GeometryBuilder gb = ImportGeometryFromWavefront(list[0]);
    print(gb);
    MeshData md =
        GeometryBuilderToMeshData(meshFile, sceneBlinnPhong.program, gb);
    Node mesh = new Node(md.name, md, mat);
    //..rotX(-3.14 / 4);
    Node n = new Node.Container("wrapper", mesh);
    n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));

    node.add(n);
    // Start
    animate(0.0);
  });
}
