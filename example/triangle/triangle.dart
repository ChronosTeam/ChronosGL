import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:math' as Math;

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

  OrbitCamera orbit = new OrbitCamera(20.0);
  double d = 40.0;
  Orthographic orthographic = new Orthographic(orbit, -d, d, -d, -d, 100.0);
  RenderPhase phaseOrthograhic = new RenderPhase("shadow", chronosGL);
  RenderProgram prgOrthographic =
      phaseOrthograhic.createProgram(createTexturedShader());

  Texture solid =
      new CanvasTexture.SolidColor(chronosGL, "red-solid", "red");
  final Material mat1 = new Material("mat1")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, new VM.Vector3(0.0, 0.0, 1.0));

  final Material mat2 = new Material("mat2")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, new VM.Vector3(1.0, 0.0, 0.0));

  final Material mat3 = new Material("mat3")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, new VM.Vector3(0.0, 1.0, 0.0));

  double thickness = 3.0;
  double length = 5.0 * thickness;

  Node side1 = new Node(
      "side1",
      ShapeCube(chronosGL, x: length, y: thickness, z: thickness),
      mat1)..setPos(-thickness, 0.0, 0.0);

  Node side2 = new Node(
      "side2",
      ShapeCube(chronosGL, x: thickness, y: thickness, z: length),
      mat2)..setPos(-length, 0.0, length + thickness);

  double length3 = length - thickness;
  Node side3a = new Node(
      "side3a",
      ShapeCube(chronosGL, x: thickness, y: length3, z: thickness),
      mat3)..setPos(length, length3 - 1 * thickness, 0.0);

  Node side3b = new Node("side3b",
      ShapeWedge(chronosGL, x: thickness, y: thickness, z: thickness), mat3)
    ..rotY(Math.PI)
    ..setPos(length, length + length3 - thickness, 0.0);

  Node triangle = new Node.Container("triangle");
  triangle.add(side1);
  triangle.add(side2);
  triangle.add(side3a);
  triangle.add(side3b);
  /*
  Node plane = new Node(
      "cube", ShapeCube(chronosGL, x: 20.0, y: 0.1, z: 20.0), matPlane)
    ..setPos(0.0, -1.5, 0.0);

  for (Node m in [triangle, plane]) {
    prgOrthographic.add(m);
  }
*/
  prgOrthographic.add(triangle);

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    orthographic.AdjustAspect(w, h);
    phaseOrthograhic.viewPortW = w;
    phaseOrthograhic.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  // 35deg is slightly too large.
  // Need to find a math reference for actual real angle.
  // E.g.: http://www.cse.ust.hk/~pang/papers/Impossible_Figures_ToG.pdf
  orbit.polar = 35.0 * Math.PI / 180.0;
  orbit.azimuth = -45.0 * Math.PI / 180.0;
  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs += 0.0; // force double
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    //orbit.azimuth += 0.001;
    //orbit.rotZ(0.001);
    orbit.animate(elapsed);
    orbit.roll += 0.01;
    double polar = orbit.polar * 180.0 / Math.PI;
    double azimuth = orbit.azimuth * 180.0 / Math.PI;
    fps.UpdateFrameCount(timeMs, "${polar}<br>${azimuth}");
    phaseOrthograhic.draw([orthographic]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
