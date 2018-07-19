import 'package:chronosgl/chronosgl.dart';
import 'dart:math' as Math;
import 'dart:html' as HTML;
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

const double kMaxDistance = 100.1;
const double kMinDistance = 0.2;
const int kIons = 10000;

String DumpVec(VM.Vector3 v) {
  return "${v.x} ${v.y} ${v.z}";
}

// Source or Sink for Ions.
// Can move themselves - currently not used.
class Pole {
  VM.Vector3 _pos = VM.Vector3.zero();
  VM.Vector3 _src = VM.Vector3.zero();
  VM.Vector3 _dst = VM.Vector3.zero();
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

// Particle emitted from a Source Pole and heading towards a Sink Pole.
class Ion {
  VM.Vector3 _pos;
  double _speed;

  Ion(this._speed, VM.Vector3 pos) {
    _pos = pos.clone();
  }

  VM.Vector3 Pos() => _pos;

  @override
  String toString() => "ION: ${DumpVec(_pos)} speed: ${_speed}";

  // Update position based on distance Source/Sink Poles
  void Update(List<Pole> srcs, List<Pole> dsts, Math.Random rng, double dt) {
    VM.Vector3 force = VM.Vector3.zero();

    for (Pole pole in srcs) {
      VM.Vector3 t = _pos - pole.Pos(); // pushing force
      final double len = t.length;
      if (len <= kMinDistance) continue;
      // stop if we are out of bounds
      if (len > kMaxDistance) {
        Pole p = srcs[rng.nextInt(srcs.length)];
        _pos = p.Pos() + RandomVector(rng, 20.0 * dt);
        print("too far ${len}");
        return;
      }
      // the further the distance the weaker the force
      force += t / (len * len);
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
      force += t / (len * len);
    }

    // the normalization sacrifices physics for aesthetics
    _pos += force.normalized() * dt * _speed;
  }
}

VM.Vector3 RandomVector(Math.Random rng, double d) {
  return VM.Vector3((rng.nextDouble() - 0.5) * d, (rng.nextDouble() - 0.5) * d,
      (rng.nextDouble() - 0.5) * d);
}

List<Pole> MakeRowOfPoles(List<double> xx, double y, double z, double scale) {
  List<Pole> out = [];
  for (double x in xx) {
    out.add(Pole(VM.Vector3(x, y, z) * scale)..Update(1.0));
  }
  return out;
}

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  final Math.Random rng = Math.Random(0);

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  final int width = canvas.clientWidth;
  final int height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;

  ChronosGL chronosGL = ChronosGL(canvas);
  OrbitCamera orbit = OrbitCamera(15.0, 0.5, 0.5, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 1000.0)
    ..AdjustAspect(width, height);

  final RenderProgram program = RenderProgram(
      "CPU", chronosGL, pointSpritesVertexShader, pointSpritesFragmentShader);

  List<Pole> srcPoles =
      MakeRowOfPoles([2.0, 1.0, 0.0, -1.0, -2.0], 0.0, 2.0, 3.0);
  List<Pole> dstPoles =
      MakeRowOfPoles([2.0, 1.0, 0.0, -1.0, -2.0], 0.0, -2.0, 3.0);

  VM.Vector3 outOfBounds = VM.Vector3.all(kMaxDistance * 100.0);
  List<Ion> ions = [];
  for (int i = 0; i < kIons; i++) {
    Ion ion = Ion(2.0, outOfBounds);
    ions.add(ion);
  }
  Float32List vertices = Float32List(3 * kIons);
  Material mat = Material.Transparent("stars", BlendEquationMix)
    ..SetUniform(uTexture, Utils.createParticleTexture(chronosGL))
    ..SetUniform(uPointSize, 200.0)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());
  GeometryBuilder gb = GeometryBuilder(true);
  for (var i = 0; i < kIons; i++) {
    gb.AddVertex(VM.Vector3.zero());
  }
  MeshData md = GeometryBuilderToMeshData("", program, gb);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;

    if (elapsed > 0.0) {
      int n = 0;
      for (Ion ion in ions) {
        ion.Update(srcPoles, dstPoles, rng, elapsed / 1000.0);
        vertices[n + 0] = ion.Pos().x;
        vertices[n + 1] = ion.Pos().y;
        vertices[n + 2] = ion.Pos().z;
        n += 3;
      }
      md.ChangeVertices(vertices);
    }
    orbit.animate(elapsed);

    program.Draw(md, [perspective, mat]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs);
  }

  animate(0.0);
}
