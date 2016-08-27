import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;

import 'package:vector_math/vector_math.dart' as VM;

// r,g,b,a  are in the range of [0, 255]
// float = r / (256^4) + g / (256^3) + b / 256^2 + a / 256^1
// float is assumed to be in [0, 1]
// Not that the conversion from bytes to floats introduces a 1/256 factor
// From http://spidergl.org/example.php?id=6
String packFloatToRGBA = """
vec4 pack_depth(float depth) {
	const vec4 bit_shift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
	const vec4 bit_mask  = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
	vec4 res = fract(depth * bit_shift);
	res -= res.xxyz * bit_mask;
	return res;
}
""";

String unpackRGBAToFloat = """
float unpack_depth(vec4 rgba_depth) {
	const vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
	float depth = dot(rgba_depth, bit_shift);
	return depth;
}
""";

List<ShaderObject> createShadowShader() {
  return [
    new ShaderObject("ShadowV")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([StdVertexBody]),
    new ShaderObject("ShadowF")
      ..SetBody([
        packFloatToRGBA,
        "void main(void) { gl_FragColor = pack_depth(gl_FragCoord.z); }"
      ])
  ];
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  VM.Vector3 posLight1 = new VM.Vector3(10.0, 10.0, 0.0);
  VM.Vector3 colWhite = new VM.Vector3(0.0, 0.0, 1.0);
  VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);

  Light light = new Light.Point(posLight1, colRed, colWhite, 20.0);
  //Light light = new Light.Directional(posLight1, colRed, colWhite);
  //VM.Matrix4 projection = VM.makeOrthographicMatrix(-12.0, 12.0, -12.0, 12.0, -12.0, 12.0);

  Perspective perspective = new Perspective();
  RenderingPhase phaseShadow =
      new RenderingPhase(chronosGL.gl, orbit, perspective);
  RenderingPhase phaseMain =
      new RenderingPhase(chronosGL.gl, orbit, perspective);
  phaseMain.clearColorBuffer = false;
  Texture solid = new CanvasTexture.SolidColor("red-solid", "red");
  //ShaderProgram program = chronosGL.createProgram(createTexturedShader());
  ShaderProgram program = phaseShadow.createProgram(createShadowShader());
  ShaderProgram basic = phaseMain.createProgram(createLightShaderBlinnPhong());

  VM.Matrix4 model = new VM.Matrix4.identity();

  final Material mat1 = new Material()
    ..SetUniform(uTextureSampler, solid)
    ..SetUniform(uColor, new VM.Vector3(0.0, 0.0, 1.0));

  final Material mat2 = new Material()
    ..SetUniform(uTextureSampler, solid)
    ..SetUniform(uColor, new VM.Vector3(1.0, 0.0, 0.0));

  final Material mat3 = new Material()
    ..SetUniform(uTextureSampler, solid)
    ..SetUniform(uColor, new VM.Vector3(0.8, 0.8, 0.8));

  {
    Mesh ico = new Mesh(
        Shapes.Icosahedron(3)..generateNormalsAssumingTriangleMode(), mat1)
      ..setPos(0.0, 0.0, 0.0);
    program.add(ico);
    basic.add(ico);
  }
  {
    Mesh cube = new Mesh(Shapes.Cube(), mat2)
      ..setPos(-5.0, 0.0, -5.0)
      ..name = "cube";
    program.add(cube);
    basic.add(cube);
  }

  {
    Mesh cyl = new Mesh(
        Shapes.Cylinder(3.0, 6.0, 2.0, 32)
          ..generateNormalsAssumingTriangleMode(),
        mat2)..setPos(5.0, 0.0, -5.0);
    program.add(cyl);
    basic.add(cyl);
  }

  /*
  {
    Mesh torus = new Mesh(Shapes.TorusKnot(radius: 1.0, tube: 0.4)..generateNormalsAssumingTriangleMode(), mat2)
      ..setPos(5.0, 0.0, 5.0);
    program.add(torus);
    basic.add(torus);
  }
*/
  {
    // plane
    Mesh cube = new Mesh(Shapes.Cube(x: 20.0, y: 0.1, z: 20.0), mat3)
      ..setPos(0.0, -10.0, 0.0)
      ..name = "cube";
    program.add(cube);
    basic.add(cube);
  }

  // Create sphere representing the light source
  ShaderProgram fixedShaderPrg = phaseMain.createProgram(createSolidColorShader());
  Material icoMat = new Material()
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));
  Mesh ico1 = new Mesh(Shapes.Icosahedron(), icoMat)..setPosFromVec(posLight1);

  fixedShaderPrg.add(ico1);
  perspective.Adjust(canvas);
  perspective.width ~/= 2.0;
  perspective.UpdatePerspective();
  double _lastTimeMs = 0.0;
  void animate(double timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phaseShadow.viewPortX = perspective.width;
    phaseShadow.draw([]);
    phaseMain.draw([light]);
    HTML.window.animationFrame.then(animate);
  }
  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
