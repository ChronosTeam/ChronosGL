import 'package:chronosgl/chronosgl.dart';
import 'dart:math' as Math;
import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

List<ShaderObject> createFireWorksShader() {
  return [
    new ShaderObject("FireWorksV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uTime])
      ..AddTransformVars([tPosition])
      ..SetBodyWithMain([
        """
float t = mod(${uTime}, 5.0);
vec3 vp = ${aVertexPosition};
if( t < 3.0) {
    vp.y = t;
} else {
    vp.y = 3.0;
    vp += normalize(${aNormal})*(t-3.0);
}

gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(vp, 1.0);
gl_PointSize = 100.0/gl_Position.z;
${tPosition} = gl_Position.xyz;
${tPosition}.x = 666.0;
"""
      ]),
    new ShaderObject("FireWorksF")
      ..AddUniformVars([uTime, uColor, uTexture])
      ..SetBodyWithMain([
        """
${oFragColor} = texture(${uTexture}, gl_PointCoord);
float t = mod(${uTime}, 5.0);
if( t < 3.0) {
    //gl_FragColor.x = 1.0;
} else {
    //gl_FragColor.rgb = ${uColor};
    ${oFragColor}.a -= (t-3.0);
}
"""
      ])
  ];
}

Math.Random rand = new Math.Random();

const int KNumStars = 2000;
const int kNumFireworkParticles = 200;

Node getRocket(dynamic gl, Texture tw) {
  List<VM.Vector3> vertices = [];
  List<VM.Vector3> normals = [];
  for (var i = 0; i < kNumFireworkParticles; i++) {
    vertices.add(new VM.Vector3(0.0, 0.0, 0.0));
    normals.add(new VM.Vector3(rand.nextDouble() - 0.5, rand.nextDouble() - 0.5,
        rand.nextDouble() - 0.5));
  }

  MeshData md = new MeshData("firefwork-particles", gl, GL_POINTS)
    ..AddVertices(FlattenVector3List(vertices))
    ..AddAttribute(aNormal, FlattenVector3List(normals), 3);

  Material mat = new Material.Transparent("mat", BlendEquationMix)
    ..SetUniform(uTexture, tw)
    ..SetUniform(uColor, ColorRed);
  return new Node(md.name, md, mat);
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);
  RenderPhase phase = new RenderPhase("main", chronosGL);

  RenderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(chronosGL, 2000));

  RenderProgram pssp = phase.createProgram(createFireWorksShader());
  pssp.add(getRocket(
      chronosGL, Utils.createParticleTexture(chronosGL, "fireworks")));

  var transform = chronosGL.createTransformFeedback();
  chronosGL.bindTransformFeedback(transform);
  WEBGL.Buffer buf = chronosGL.createBuffer();
  chronosGL.bindBufferBase(GL_TRANSFORM_FEEDBACK_BUFFER, 0, buf);

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    perspective.AdjustAspect(w, h);
    phase.viewPortW = w;
    phase.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  Float32List outDataIn = new Float32List(200 * 3);
  Float32List outData = new Float32List(200 * 3);
  outDataIn[2] = 111.0;
  chronosGL.ChangeTransformBuffer(buf, outDataIn);
  chronosGL.GetTransformBuffer(buf, outData);
  print("${outData[0]} ${outData[1]} ${outData[2]}");

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;

    orbit.animate(elapsed);
    pssp.ForceInput(uTime, timeMs / 1000.0);
    chronosGL.bindTransformFeedback(transform);
    phase.draw([perspective]);
    chronosGL.GetTransformBuffer(buf, outData);
    print("${outData[0]} ${outData[1]} ${outData[2]}");

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
