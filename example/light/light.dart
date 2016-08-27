import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  Perspective perspective = new Perspective();
  perspective.far = 10000.0;
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  orbit.setPos(0.0, 0.0, 56.0);
  RenderingPhase phase = new RenderingPhase(chronosGL.gl, orbit, perspective);

  //FlyingCamera fc = new FlyingCamera(camera); // W,A,S,D keys fly
  //chronosGL.addAnimatable('flyingCamera', fc);
  VM.Vector3 posLight = new VM.Vector3(10.0, 20.0, 0.0);
  //Vector colBlue = new Vector(0,0,1);
  VM.Vector3 colBlue = new VM.Vector3(0.0, 0.0, 1.0);
  VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);
  VM.Vector3 dirLight = new VM.Vector3(0.0, 50.0, 0.0);
  List<Light> lights = [];

  lights.add(new Light.Directional(dirLight, colRed, colBlue));
  lights.add(new Light.Point(posLight, colRed, colBlue, 50.0));
  lights.add(new Light.Directional(dirLight.normalized(), colRed, colBlue));
  //lights.add(new Light.Spot(posLight1, colRed, colBlue, 12.0));

  MeshData cubeMeshData = Shapes.Cube(x: 2.0, y: 2.0, z: 2.0);
  MeshData sphereMeshData = Shapes.Icosahedron()
    ..generateNormalsAssumingTriangleMode();

  Material cubeMat = new Material();
  List<Mesh> meshes = [];
  for (int i = 0; i < 8; i++) {
    double x = i & 1 == 0 ? -10.0 : 10.0;
    double y = i & 2 == 0 ? -10.0 : 10.0;
    double z = i & 4 == 0 ? -10.0 : 10.0;
    meshes.add(new Mesh(i % 2 == 0 ? cubeMeshData : sphereMeshData, cubeMat)
      ..setPos(x, y, z)
      ..lookUp(1.0)
      ..lookLeft(0.7));
  }

  ShaderProgram lightShaderPrg =
      phase.createProgram(createLightShaderBlinnPhong());
  for (Mesh m in meshes) lightShaderPrg.add(m);

  Mesh plane = new Mesh(
      Shapes.Cube(x: 20.0, y: 0.1, z: 20.0)
        ..generateNormalsAssumingTriangleMode(),
      cubeMat)
    ..setPos(0.0, -20.0, 0.0)
    ..name = "pane";
  lightShaderPrg.add(plane);

  // Create sphere representing the light source
  ShaderProgram fixedShaderPrg = phase.createProgram(createSolidColorShader());

  Material lightSourceMat = new Material()
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));


  Mesh shapePointLight = new Mesh(Shapes.Icosahedron(), lightSourceMat)
    ..setPosFromVec(posLight)
    ..name = "pointlight";
  fixedShaderPrg.add(shapePointLight);


  Mesh shapeDirLight =
      new Mesh(Shapes.Cylinder(0.4, 0.4, 200.0, 20), lightSourceMat)
        ..setPosFromVec(dirLight)
        ..name = "dirlight";
  fixedShaderPrg.add(shapeDirLight);

  HTML.SelectElement myselect =
      HTML.document.querySelector('#myselect') as HTML.SelectElement;
  assert(myselect != null);
  myselect.selectedIndex = 0;

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
    print("light: ${myselect.selectedIndex}");
    phase.draw([lights[myselect.selectedIndex]]);

    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
