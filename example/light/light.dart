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

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  orbit.setPos(0.0, 0.0, 56.0);
  RenderingPhase phase = new RenderingPhase(chronosGL.gl, orbit, perspective);

  //FlyingCamera fc = new FlyingCamera(camera); // W,A,S,D keys fly
  //chronosGL.addAnimatable('flyingCamera', fc);
  VM.Vector3 posLight1 = new VM.Vector3(0.0, 0.0, 0.0);
  //Vector colBlue = new Vector(0,0,1);
  VM.Vector3 colWhite = new VM.Vector3(1.0, 1.0, 1.0);
  VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);
  Light dirLight = new Light.Directional(posLight1, colRed, colWhite);

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

  ShaderProgram lightShaderPrg = phase.createProgram(createLightShader());
  for (Mesh m in meshes) lightShaderPrg.add(m);
  ShaderProgram fixedShaderPrg = phase.createProgram(createSolidColorShader());

  Material icoMat = new Material()
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));
  Mesh ico1 = new Mesh(Shapes.Icosahedron(), icoMat)..setPosFromVec(posLight1);
  fixedShaderPrg.add(ico1);
  /*
   Vector posLight2 =  new Vector(-11, 11, 1);
     chronosGL.lights.add (new Light.Point(posLight2));
  Mesh ico2 = new Mesh(Shapes.Icosahedron(), icoMat)
     ..setPosFromVec(posLight2);
   fixedShaderPrg.add(ico2);
*/
  /*
  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));
*/

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);

    for (Mesh m in meshes) {
      m.rollLeft(timeMs * 0.000003);
      m.lookLeft(timeMs * 0.000003);
    }

    perspective.Adjust(canvas);
    phase.draw([dirLight]);
    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
