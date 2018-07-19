import 'dart:html' as HTML;
import "dart:math" as MATH;
import 'dart:async';

import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';

final VM.Vector3 posLight = VM.Vector3(11.0, 20.0, 0.0);
final VM.Vector3 dirLight = VM.Vector3(0.0, -50.0, 0.0);
final VM.Vector3 spotDirLight = VM.Vector3(-11.0, -30.0, 0.0);

final double range = 50.0;
final double angle = MATH.pi / 7.0;
final double glossiness = 10.0;

// These must be in-sync with the .html file
const String idPoint = "idPoint";
const String idSpot = "idSpot";
const String idDirectional = "idDirectional";

const String meshFile = "../asset/dragon/dragon.obj";
const String textureFile = "../asset/dragon/dragon.png";

final Map<String, Light> gLightSources = {
  idDirectional:
      DirectionalLight("dir", dirLight, ColorBlack, ColorWhite, 40.0),
  idPoint: PointLight("point", posLight, ColorLiteBlue, ColorWhite, range),
  idSpot: SpotLight("spot", posLight, spotDirLight, ColorLiteGreen, ColorWhite,
      range, angle, 2.0, 1.0, 40.0)
};

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = OrbitCamera(50.0, 10.0, 0.0, canvas);
  orbit.setPos(0.0, 0.0, 56.0);
  Perspective perspective = Perspective(orbit, 0.1, 10000.0);

  Illumination illumination = Illumination();
  for (Light l in gLightSources.values) {
    illumination.AddLight(l);
  }
  Scene sceneBlinnPhong = Scene(
      "BlinnPhong",
      RenderProgram("BlinnPhong", cgl, lightVertexShaderBlinnPhong,
          lightFragmentShaderBlinnPhong),
      [perspective, illumination]);

  Scene sceneGourad = Scene(
      "Gourad",
      RenderProgram(
          "Gourad", cgl, lightVertexShaderGourad, lightFragmentShaderGourad),
      [perspective, illumination]);
  assert(
      sceneBlinnPhong.program.HasCompatibleAttributesTo(sceneGourad.program));

  Scene sceneFixed = Scene(
      "Fixed",
      RenderProgram(
          "Fixed", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);

  // We have two phases
  // 1 BlinnPhong
  // 2 Gourad
  // Each has two scenes
  // 1 the lighting specific scene
  // 2 the lighting visualization scene which is shared by the two phases
  final RenderPhase phaseBlinnPhong = RenderPhase("BlinnPhong", cgl)
    ..add(sceneBlinnPhong)
    ..add(sceneFixed);

  final RenderPhase phaseGourad = RenderPhase("Gourad", cgl)
    ..add(sceneGourad)
    ..add(sceneFixed);

  Material lightSourceMat = Material("light")..SetUniform(uColor, ColorYellow);
  final Map<String, Node> lightVisualizers = {};
  for (String k in gLightSources.keys) {
    lightVisualizers[k] = Node(k,
        LightVisualizer(sceneFixed.program, gLightSources[k]), lightSourceMat);
  }

  for (Node n in lightVisualizers.values) {
    sceneFixed.add(n);
  }

  // This will be populated when the model has loaded
  Node node = Node.Container("dragon");

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
    e.dispatchEvent(HTML.Event("change"));
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

    RenderPhase phase =
        selectPhase.selectedIndex == 0 ? phaseBlinnPhong : phaseGourad;
    phase.Draw();
    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  List<Future<Object>> futures = [
    LoadRaw(meshFile),
    LoadImage(textureFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Texture
    Texture tex = ImageTexture(cgl, textureFile, list[1]);

    Material mat = Material("matDragon")
      ..SetUniform(uTexture, tex)
      ..SetUniform(uShininess, glossiness);
    GeometryBuilder gb = ImportGeometryFromWavefront(list[0]);
    print(gb);
    MeshData md =
        GeometryBuilderToMeshData(meshFile, sceneBlinnPhong.program, gb);
    Node mesh = Node(md.name, md, mat);
    //..rotX(-3.14 / 4);
    Node n = Node.Container("wrapper", mesh);
    n.lookAt(VM.Vector3(100.0, 0.0, 0.0));

    node.add(n);
    // Start
    animate(0.0);
  });
}
