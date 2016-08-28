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
  RenderingPhase phaseBlinnPhong =
      new RenderingPhase("blinn-phong", chronosGL.gl, perspective);
  ShaderProgram lightBlinnPhong =
      phaseBlinnPhong.createProgram(createLightShaderBlinnPhong());
  ShaderProgram fixedBlinnPhong =
      phaseBlinnPhong.createProgram(createSolidColorShader());

  RenderingPhase phaseGourad = new RenderingPhase("gourad", chronosGL.gl, perspective);
  ShaderProgram lightGourad =
      phaseGourad.createProgram(createLightShaderGourad());
  ShaderProgram fixedGourad =
      phaseGourad.createProgram(createSolidColorShader());

  VM.Vector3 colBlue = new VM.Vector3(0.0, 0.0, 1.0);
  VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);
  VM.Vector3 posLight = new VM.Vector3(10.0, 20.0, 0.0);
  VM.Vector3 dirLight = new VM.Vector3(0.0, 50.0, 0.0);
  List<Light> lights = [];
  lights.add(new Light.Directional(dirLight, colRed, colBlue));
  lights.add(new Light.Point(posLight, colRed, colBlue, 70.0));
  lights.add(
      new Light.Spot(posLight, posLight, colRed, colBlue, 50.0, 0.95, 2.0));

  MeshData cubeMeshData = Shapes.Cube(x: 2.0, y: 2.0, z: 2.0);
  MeshData sphereMeshData = Shapes.Icosahedron()
    ..generateNormalsAssumingTriangleMode();
  Material cubeMat = new Material("mat");
  List<Mesh> meshes = [];
  for (int i = 0; i < 8; i++) {
    double x = i & 1 == 0 ? -10.0 : 10.0;
    double y = i & 2 == 0 ? -10.0 : 10.0;
    double z = i & 4 == 0 ? -10.0 : 10.0;
    meshes.add(new Mesh("mesh", i % 2 == 0 ? cubeMeshData : sphereMeshData, cubeMat)
      ..setPos(x, y, z)
      ..lookUp(1.0)
      ..lookLeft(0.7));
  }

  for (Mesh m in meshes) {
    lightGourad.add(m);
    lightBlinnPhong.add(m);
  }
  // Subdivide plane to show Gourad shading issues
  List<Mesh> plane = [];
  for (double x = -40.0; x < 40.0; x += 4.0) {
    for (double y = -40.0; y < 40.0; y += 4.0) {
      Mesh m = new Mesh("plane-$x-$y",
          Shapes.Cube(x: 4.0, y: 0.1, z: 4.0)
            ..generateNormalsAssumingTriangleMode(),
          cubeMat)..setPos(x + 2.0, -20.0, y + 2.0);
      plane.add(m);
    }
  }
  for (Mesh m in plane) {
    lightGourad.add(m);
    lightBlinnPhong.add(m);
  }

  Material lightSourceMat = new Material("light")
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));
  Mesh shapePointLight = new Mesh("pointLight", Shapes.Icosahedron(), lightSourceMat)
    ..setPosFromVec(posLight);
  fixedBlinnPhong.add(shapePointLight);
  fixedGourad.add(shapePointLight);

  Mesh shapeDirLight =
      new Mesh("dirLight", Shapes.Cylinder(0.4, 0.4, 200.0, 20), lightSourceMat)
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

  double _lastTimeMs = 0.0;
  void animate(double timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);

    for (Mesh m in meshes) {
      m.rollLeft(elapsed * 0.0003);
      m.lookLeft(elapsed * 0.0003);
    }

    perspective.Adjust(canvas);
    Light light = lights[selectLight.selectedIndex];
    RenderingPhase phase =
        selectPhase.selectedIndex == 0 ? phaseBlinnPhong : phaseGourad;
    phase.draw([light]);

    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
