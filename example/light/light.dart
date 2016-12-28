import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  orbit.setPos(0.0, 0.0, 56.0);
  Perspective perspective = new Perspective(orbit, 0.1, 10000.0);
  RenderPhase phaseBlinnPhong =
      new RenderPhase("blinn-phong", chronosGL.gl);
  RenderProgram lightBlinnPhong =
      phaseBlinnPhong.createProgram(createLightShaderBlinnPhong());
  RenderProgram fixedBlinnPhong =
      phaseBlinnPhong.createProgram(createSolidColorShader());

  RenderPhase phaseGourad = new RenderPhase("gourad", chronosGL.gl);
  RenderProgram lightGourad =
      phaseGourad.createProgram(createLightShaderGourad());
  RenderProgram fixedGourad =
      phaseGourad.createProgram(createSolidColorShader());

  VM.Vector3 colBlue = new VM.Vector3(0.0, 0.0, 1.0);
  VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);
  VM.Vector3 colGray = new VM.Vector3(0.2, 0.2, 0.2);
  VM.Vector3 posLight = new VM.Vector3(10.0, 20.0, 0.0);
  VM.Vector3 dirLight = new VM.Vector3(0.0, 50.0, 0.0);
  List<Light> lights = [
    new Light.Directional(LIGHT0, dirLight, colRed, colBlue),
    new Light.Point(LIGHT0, posLight, colRed, colBlue, 70.0),
    new Light.Spot(LIGHT0, posLight, posLight, colRed, colBlue, 50.0, 0.95, 2.0)
  ];

  MeshData cubeMeshData = ShapeCube(chronosGL.gl, x: 2.0, y: 2.0, z: 2.0);
  MeshData sphereMeshData = ShapeIcosahedron(chronosGL.gl);

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
  List<Node> plane = [];
  for (double x = -40.0; x < 40.0; x += 4.0) {
    for (double y = -40.0; y < 40.0; y += 4.0) {
      Node m = new Node(
          "plane-$x-$y",
          ShapeCube(chronosGL.gl, x: 4.0, y: 0.1, z: 4.0),
          cubeMat)..setPos(x + 2.0, -20.0, y + 2.0);
      plane.add(m);
    }
  }
  for (Node m in plane) {
    lightGourad.add(m);
    lightBlinnPhong.add(m);
  }

  Material lightSourceMat = new Material("light")
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));
  Node shapePointLight =
      new Node("pointLight", ShapeIcosahedron(chronosGL.gl), lightSourceMat)
        ..setPosFromVec(posLight);
  fixedBlinnPhong.add(shapePointLight);
  fixedGourad.add(shapePointLight);

  Node shapeDirLight =
      new Node("dirLight", ShapeCylinder(chronosGL.gl, 0.4, 0.4, 200.0, 20), lightSourceMat)
        ..setPosFromVec(dirLight);
  fixedBlinnPhong.add(shapeDirLight);
  fixedGourad.add(shapeDirLight);

  HTML.SelectElement selectLight =
      HTML.document.querySelector('#light') as HTML.SelectElement;
  assert(selectLight != null);
  selectLight.selectedIndex = 0;

  HTML.SelectElement selectPhase =
      HTML.document.querySelector('#phase') as HTML.SelectElement;
  assert(selectPhase != null);
  selectPhase.selectedIndex = 0;

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

    Light light = lights[selectLight.selectedIndex];
    RenderPhase phase =
        selectPhase.selectedIndex == 0 ? phaseBlinnPhong : phaseGourad;
    phase.draw([perspective, light]);

    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures().then((dummy) {
    animate(0.0);
  });
}
