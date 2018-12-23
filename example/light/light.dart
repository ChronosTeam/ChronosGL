import 'dart:html' as HTML;
import "dart:math" as MATH;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

final VM.Vector3 posLight = VM.Vector3(11.0, 20.0, 0.0);
final VM.Vector3 dirLight = VM.Vector3(0.0, -50.0, 0.0);
final VM.Vector3 spotDirLight = VM.Vector3(-11.0, -30.0, 0.0);

final double range = 80.0;
final double angle = MATH.pi / 7.0;
final double glossiness = 50.0;

// These must be in-sync with the .html file
const String idPoint = "idPoint";
const String idSpot = "idSpot";
const String idDirectional = "idDirectional";

final Map<String, Light> gLightSources = {
  idDirectional:
      DirectionalLight("dir", dirLight, ColorWhite, ColorWhite, 40.0),
  idPoint: PointLight("point", posLight, ColorWhite, ColorWhite, range),
  idSpot: SpotLight("spot", posLight, spotDirLight, ColorWhite, ColorWhite,
      range, angle, 2.0, 1.0, 40.0)
};

final Map<String, Node> gLightVisualizers = {};

Scene LightSourceVisualizerScene(ChronosGL cgl, List<UniformGroup> uniforms) {
  Scene scene = Scene(
      "Fixed",
      RenderProgram(
          "Fixed", cgl, solidColorVertexShader, solidColorFragmentShader),
      uniforms);

  Material lightSourceMat = Material("light")..SetUniform(uColor, ColorYellow);
  for (String k in gLightSources.keys) {
    gLightVisualizers[k] = Node(
        k, LightVisualizer(scene.program, gLightSources[k]), lightSourceMat);
  }
  for (Node n in gLightVisualizers.values) {
    scene.add(n);
  }
  return scene;
}

void MakeSceneCubeSphere(ChronosGL cgl, RenderProgram prog, Node container) {
  MeshData cubeMeshData = ShapeCube(prog, x: 2.0, y: 2.0, z: 2.0);
  MeshData sphereMeshData = ShapeIcosahedron(prog);

  List<Material> mats = [
    Material("mat0")
      ..SetUniform(
          uTexture, MakeSolidColorTextureRGB(cgl, "blue", ColorBlue * 0.5))
      ..SetUniform(uShininess, glossiness),
    Material("mat1")
      ..SetUniform(
          uTexture, MakeSolidColorTextureRGB(cgl, "red", ColorRed * 0.5))
      ..SetUniform(uShininess, glossiness),
    Material("mat2")
      ..SetUniform(
          uTexture, MakeSolidColorTextureRGB(cgl, "white", ColorWhite * 0.5))
      ..SetUniform(uShininess, glossiness),
    Material("mat3")
      ..SetUniform(
          uTexture, MakeSolidColorTextureRGB(cgl, "green", ColorGreen * 0.5))
      ..SetUniform(uShininess, glossiness),
  ];

  for (int i = 0; i < 8; i++) {
    double x = i & 1 == 0 ? -10.0 : 10.0;
    double y = i & 2 == 0 ? -10.0 : 10.0;
    double z = i & 4 == 0 ? -10.0 : 10.0;

    container.add(
        Node("mesh", i % 2 == 0 ? cubeMeshData : sphereMeshData, mats[i % 4])
          ..setPos(x, y, z)
          ..lookUp(1.0)
          ..lookLeft(0.7));
  }

  // Subdivide plane to show Gourad shading issues
  Node grid = Node("grid", ShapeGrid(prog, 20, 20, 80.0, 80.0), mats[2]);
  grid.rotX(-MATH.pi * 0.48);
  grid.setPos(0.0, -20.0, 20.0);
  container.add(grid);
}

void main() {
  final StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');
  final ChronosGL cgl = ChronosGL(canvas, faceCulling: true);

  final OrbitCamera orbit = OrbitCamera(50.0, 10.0, 0.0, canvas)
    ..setPos(0.0, 0.0, 56.0);
  final Perspective perspective = Perspective(orbit, 0.1, 10000.0);

  final Illumination illumination = Illumination();
  for (Light l in gLightSources.values) {
    illumination.AddLight(l);
  }

  final Scene sceneFixed = LightSourceVisualizerScene(cgl, [perspective]);

  final Scene sceneBlinnPhong = Scene(
      "BlinnPhong",
      RenderProgram("BlinnPhong", cgl, lightVertexShaderBlinnPhong,
          lightFragmentShaderBlinnPhong),
      [perspective, illumination]);

  final Scene sceneGourad = Scene(
      "Gourad",
      RenderProgram(
          "Gourad", cgl, lightVertexShaderGourad, lightFragmentShaderGourad),
      [perspective, illumination]);
  assert(
      sceneBlinnPhong.program.HasCompatibleAttributesTo(sceneGourad.program));

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

  Node node = Node.Container("scene");
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
      final String tag = input.id;
      print("${tag} toggle ${input.checked}");
      if (tag == "lightDiffuse") {
        for (Light light in gLightSources.values) {
          double v = input.checked ? 1.0 : 0.0;
          light.colorDiffuse.setValues(v, v, v);
        }
      } else if (tag == "lightSpecular") {
        for (Light light in gLightSources.values) {
          double v = input.checked ? 1.0 : 0.0;
          light.colorSpecular.setValues(v, v, v);
        }
      } else {
        gLightSources[tag].enabled = input.checked;
        gLightVisualizers[tag].enabled = input.checked;
      }
    });
  }

  // Update default settings
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
