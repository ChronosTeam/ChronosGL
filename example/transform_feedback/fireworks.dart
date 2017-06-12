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

const int kNumFireworkParticles = 200;
const double kMaxDistance = 100.0;
const double kMinDistance = 0.2;
const int kIons = 10000;

String DumpVec(VM.Vector3 v) {
  return "${v.x} ${v.y} ${v.z}";
}

class Pole {
  VM.Vector3 _pos = new VM.Vector3.zero();
  VM.Vector3 _src = new VM.Vector3.zero();
  VM.Vector3 _dst = new VM.Vector3.zero();
  double _t = 0.0;

  Pole(VM.Vector3 dst) {
    setNewTarget(dst);
  }

  void setNewTarget(VM.Vector3 dst) {
    _dst.xyz = dst.xyz;
    _src.xyz = _pos.xyz;
    Update(0.0);
  }

  void Update(double t) {
    _t = t;
    VM.Vector3.mix(_src, _dst, t, _pos);
  }

  VM.Vector3 Pos() => _pos;

  @override
  String toString() =>
      "POLE: ${DumpVec(_pos)} time ${_t} [${DumpVec(_src)}] => [${DumpVec(_dst)}]";
}

class Ion {
  VM.Vector3 _pos;
  double _speed;

  Ion(this._speed, VM.Vector3 pos) {
    _pos = pos.clone();
  }

  VM.Vector3 Pos() => _pos;

  @override
  String toString() => "ION: ${DumpVec(_pos)} speed: ${_speed}";

  void Update(List<Pole> srcs, List<Pole> dsts, Math.Random rng, double dt) {
    double distMax = 0.0;
    VM.Vector3 force = new VM.Vector3.zero();

    for (Pole pole in srcs) {
      VM.Vector3 t = _pos - pole.Pos(); // pushing force
      final double len = t.length;
      if (len <= kMinDistance) continue;
      // stop if we are out of bounds
      if (len > kMaxDistance) {
        Pole p = srcs[rng.nextInt(srcs.length)];
        _pos = p.Pos() + RandomVector(rng, 20.0 *  dt);
        print("too far ${len}");
        return;
      }
      if (len > distMax) distMax = len;
      t = t / (len * len); // the further the distance the weaker the force
      force += t;
    }

    for (Pole pole in dsts) {
      VM.Vector3 t = pole.Pos() - _pos; // pulling force
      final double len = t.length;
      // stop if we would hit the pole in the next timestep
      if (len <= kMinDistance) {
        Pole p = srcs[rng.nextInt(srcs.length)];
        _pos = p.Pos() + RandomVector(rng, 20.0 * dt);
        print("too close: ${len}");
        return;
      }
      t = t / (len * len);
      force += t;
    }

    // the normalization sacrifices physics for aesthetics
    _pos += force.normalized() * dt * _speed;
  }
}

VM.Vector3 RandomVector(Math.Random rng, double d) {
  return new VM.Vector3((rng.nextDouble() - 0.5) * d,
      (rng.nextDouble() - 0.5) * d, (rng.nextDouble() - 0.5) * d);
}

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
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 0.5, 0.5, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);
  RenderPhase phase = new RenderPhase("main", chronosGL);

  Math.Random rng = new Math.Random(0);
  List<Pole> srcPoles = [];
  double p = 3.0;
  srcPoles.add(new Pole(new VM.Vector3(2.0 * p, 0.0, 2.0 * p))..Update(1.0));
  srcPoles.add(new Pole(new VM.Vector3(1.0 * p, 0.0, 2.0 * p))..Update(1.0));
  srcPoles.add(new Pole(new VM.Vector3(0.0 * p, 0.0, 2.0 * p))..Update(1.0));
  srcPoles.add(new Pole(new VM.Vector3(-1.0 * p, 0.0, 2.0 * p))..Update(1.0));
  srcPoles.add(new Pole(new VM.Vector3(-2.0 * p, 0.0, 2.0 * p))..Update(1.0));

  List<Pole> dstPoles = [];
  dstPoles.add(new Pole(new VM.Vector3(2.0 * p, 0.0, -2.0 * p))..Update(1.0));
  dstPoles.add(new Pole(new VM.Vector3(1.0 * p, 0.0, -2.0 * p))..Update(1.0));
  dstPoles.add(new Pole(new VM.Vector3(0.0 * p, 0.0, -2.0 * p))..Update(1.0));
  dstPoles.add(new Pole(new VM.Vector3(-1.0 * p, 0.0, -2.0 * p))..Update(1.0));
  dstPoles.add(new Pole(new VM.Vector3(-2.0 * p, 0.0, -2.0 * p))..Update(1.0));

  VM.Vector3 outOfBounds = new VM.Vector3.all(kMaxDistance * 100.0);
  List<Ion> ions = [];
  for (int i = 0; i < kIons; i++) {
    Ion ion = new Ion(1.0 + 2.0 * rng.nextDouble(), outOfBounds);
    ions.add(ion);
  }
  Float32List vertices = new Float32List(3 * kIons);
  Material mat = new Material.Transparent("stars", BlendEquationMix)
    ..SetUniform(uTexture, Utils.createParticleTexture(chronosGL))
    ..SetUniform(uPointSize, 200.0);
  GeometryBuilder gb = new GeometryBuilder(true);
  for (var i = 0; i < kIons; i++) {
    gb.AddVertex(new VM.Vector3.zero());
  }
  MeshData md = GeometryBuilderToMeshData("", chronosGL, gb);
  RenderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(new Node("ions", md, mat));

  /*
  RenderProgram pssp = phase.createProgram(createFireWorksShader());
  pssp.add(getRocket(
      chronosGL, Utils.createParticleTexture(chronosGL, "fireworks")));

  var transform = chronosGL.createTransformFeedback();
  chronosGL.bindTransformFeedback(transform);
  WEBGL.Buffer buf = chronosGL.createBuffer();
  chronosGL.bindBufferBase(GL_TRANSFORM_FEEDBACK_BUFFER, 0, buf);
*/
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
/*
  Float32List outDataIn = new Float32List(200 * 3);
  Float32List outData = new Float32List(200 * 3);
  outDataIn[2] = 111.0;
  chronosGL.ChangeTransformBuffer(buf, outDataIn);
  chronosGL.GetTransformBuffer(buf, outData);
  print("${outData[0]} ${outData[1]} ${outData[2]}");
*/
  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    int n = 0;
    for (Ion ion in ions) {
      if (elapsed == 0.0) continue;
      ion.Update(srcPoles, dstPoles, rng, elapsed / 1000.0);
      vertices[n + 0] = ion.Pos().x;
      vertices[n + 1] = ion.Pos().y;
      vertices[n + 2] = ion.Pos().z;
      n += 3;
    }
    md.ChangeVertices(vertices);

    orbit.animate(elapsed);
    /*
    pssp.ForceInput(uTime, timeMs / 1000.0);
    chronosGL.bindTransformFeedback(transform);
    */
    phase.draw([perspective]);
    /*
    chronosGL.GetTransformBuffer(buf, outData);
    print("${outData[0]} ${outData[1]} ${outData[2]}");
    */
    fps.UpdateFrameCount(timeMs);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
