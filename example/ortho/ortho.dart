import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;

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
      ..AddAttributeVars([aVertexPosition])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
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

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);
  double d = 20.0;
  Orthographic orthographic = new Orthographic(orbit, -d, d, -d, -d, 100.0);
  RenderPhase phaseOrthograhic = new RenderPhase("shadow", chronosGL);
  ShaderProgram prgOrthographic =
      phaseOrthograhic.createProgram(createTexturedShader());

  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);
  RenderPhase phasePerspective = new RenderPhase("perspective", chronosGL);
  phasePerspective.clearColorBuffer = false;
  ShaderProgram prgPerspective =
      phasePerspective.createProgram(createTexturedShader());

  assert(prgOrthographic.HasCompatibleAttributesTo(prgPerspective));

  Texture solid = MakeSolidColorTexture(chronosGL, "red-solid", "red");
  final Material mat1 = new Material("mat1")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, ColorBlue);

  final Material mat2 = new Material("mat2")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, ColorRed);

  final Material mat3 = new Material("mat3")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, ColorGreen);

  final Material matPlane = new Material("plane")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, ColorGray8);

  Node ico = new Node("sphere", ShapeIcosahedron(prgOrthographic, 3), mat1)
    ..setPos(0.0, 0.0, 0.0);

  Node cube = new Node("cube", ShapeCube(prgOrthographic), mat2)
    ..setPos(-5.0, 0.0, -5.0);

  Node cyl = new Node(
      "cylinder", ShapeCylinder(prgOrthographic, 3.0, 6.0, 2.0, 32), mat3)
    ..setPos(5.0, 0.0, -5.0);

  /*
    Mesh torus = new Mesh(Shapes.TorusKnot(radius: 1.0, tube: 0.4)..generateNormalsAssumingTriangleMode(), mat2)
      ..setPos(5.0, 0.0, 5.0);
    program.add(torus);
    basic.add(torus);
  }*/

  Node plane = new Node(
      "cube", ShapeCube(prgOrthographic, x: 20.0, y: 0.1, z: 20.0), matPlane)
    ..setPos(0.0, -10.0, 0.0);

  for (Node m in [ico, cube, cyl, plane]) {
    prgOrthographic.add(m);
    prgPerspective.add(m);
  }

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    w = w ~/ 2;
    perspective.AdjustAspect(w, h);
    orthographic.AdjustAspect(w, h);
    phaseOrthograhic.viewPortW = w;
    phaseOrthograhic.viewPortH = h;
    phasePerspective.viewPortW = w;
    phasePerspective.viewPortH = h;
    phaseOrthograhic.viewPortX = phasePerspective.viewPortW;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs += 0.0; // force double
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    //orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phaseOrthograhic.draw([orthographic]);
    phasePerspective.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
