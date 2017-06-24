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

Node gCubeSphere = new Node.Container("scene");
Node gDragon = new Node.Container("dragon");

final Map<String, Node> gScenes = {
  "Scene": gCubeSphere,
  "Dragon": gDragon,
};

void MakeSceneCubeSphere(
    ChronosGL chronosGL, RenderProgram prog, Node container) {
  MeshData cubeMeshData = ShapeCube(prog, x: 2.0, y: 2.0, z: 2.0);
  MeshData sphereMeshData = ShapeIcosahedron(prog);

  List<Material> mats = [
    new Material("mat0")
      ..SetUniform(
          uTexture, MakeSolidColorTextureRGB(chronosGL, "gray", ColorGray4))
      ..SetUniform(uShininess, glossiness),
    new Material("mat1")
      ..SetUniform(
          uTexture, MakeSolidColorTextureRGB(chronosGL, "red", ColorRed))
      ..SetUniform(uShininess, glossiness),
    new Material("mat2")
      ..SetUniform(
          uTexture, MakeSolidColorTextureRGB(chronosGL, "red", ColorBlue))
      ..SetUniform(uShininess, glossiness),
    new Material("mat3")
      ..SetUniform(
          uTexture, MakeSolidColorTextureRGB(chronosGL, "red", ColorGreen))
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
  grid.rotX(-MATH.PI * 0.48);
  grid.setPos(0.0, -20.0, 20.0);
  container.add(grid);
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = new OrbitCamera(50.0, 10.0, 0.0, canvas);
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

  assert(lightBlinnPhong.HasCompatibleAttributesTo(lightGourad));
  assert(fixedBlinnPhong.HasCompatibleAttributesTo(fixedGourad));

  Illumination illumination = new Illumination();
  for (Light l in gLightSources.values) {
    illumination.AddLight(l);
  }

  Material lightSourceMat = new Material("light")
    ..SetUniform(uColor, ColorYellow);
  Map<String, Node> lightVisualizers = {
    idDirectional: new Node(
        "DirLightViz",
        LightVisualizer(fixedBlinnPhong, gLightSources[idDirectional]),
        lightSourceMat),
    idPoint: new Node(
        "PointLightViz",
        LightVisualizer(fixedBlinnPhong, gLightSources[idPoint]),
        lightSourceMat),
    idSpot: new Node("SpotLightViz",
        LightVisualizer(fixedBlinnPhong, gLightSources[idSpot]), lightSourceMat)
  };

  for (Node n in lightVisualizers.values) {
    fixedBlinnPhong.add(n);
    fixedGourad.add(n);
  }

  for (Node n in gScenes.values) {
    lightGourad.add(n);
    lightBlinnPhong.add(n);
  }

  MakeSceneCubeSphere(chronosGL, lightGourad, gCubeSphere);

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

  HTML.SelectElement selectScene =
      HTML.document.querySelector('#scene') as HTML.SelectElement;
  assert(selectScene != null);
  for (String o in gScenes.keys) {
    selectScene.appendHtml("<option>$o</option>");
  }

  selectScene.onChange.listen((HTML.Event e) {
    String selected = selectScene.value;
    for (String key in gScenes.keys) {
      gScenes[key].enabled = key == selected;
    }
    e.preventDefault();
  });
  selectScene.dispatchEvent(new HTML.Event("change"));

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
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);

    for (Node m in gCubeSphere.children) {
      if (m.name != "grid") {
        m.rollLeft(elapsed * 0.0003);
        m.lookLeft(elapsed * 0.0003);
      }
    }

    RenderPhase phase =
        selectPhase.selectedIndex == 0 ? phaseBlinnPhong : phaseGourad;
    phase.draw([perspective, illumination]);
    HTML.window.animationFrame.then(animate);
  }

  List<Future<dynamic>> futures = [
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
    MeshData md = GeometryBuilderToMeshData(meshFile, lightGourad, gb);
    Node mesh = new Node(md.name, md, mat);
    //..rotX(-3.14 / 4);
    Node n = new Node.Container("wrapper", mesh);
    n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));

    gDragon.add(n);
    // Start
    animate(0.0);
  });
}
