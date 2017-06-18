import 'package:chronosgl/chronosgl.dart';
import 'dart:math' as Math;
import 'dart:html' as HTML;
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

const double kMaxDistance = 100.1;
const double kMinDistance = 0.2;
const int kIons = 50000;

final VM.Vector3 kVecOutOfBounds = new VM.Vector3.all(kMaxDistance * 100.0);

const String uSources = "uSources";
const String uSinks = "uSinks";

List<ShaderObject> createFireWorksShader() {
  return [
    new ShaderObject("FireWorksV")
      ..AddAttributeVars([aVertexPosition])
      ..AddUniformVars(
          [uPerspectiveViewMatrix, uModelMatrix, uPointSize, uSources, uSinks])
      ..AddTransformVars([tPosition])
      ..SetBody([
        """
const float kMaxDistance = ${kMaxDistance};
const float kMinDistance = ${kMinDistance};
const float speed = 0.06;  
    
float rand(vec2 seed){
    return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453);
}      

int irand(int n, vec2 seed) {
    return int(floor(rand(seed) * float(n)));
}

vec3 vec3rand(vec3 seed) {
    return vec3(rand(seed.yz) - 0.5, rand(seed.xz) - 0.5, rand(seed.xy) - 0.5);
}

vec3 RandomSource(vec3 seed) {
    return ${uSources}[irand(${uSources}.length(), seed.xy * seed.z)];
}

vec3 Update(vec3 pos, vec3 seed) {
    vec3 force = vec3(0.0, 0.0, 0.0);
    for (int i = 0; i < ${uSources}.length(); ++i) {
       vec3 d = pos - ${uSources}[i];
       float l = length(d);
       if (l <= kMinDistance) continue;
       if (l >= kMaxDistance) {
           return RandomSource(seed) + vec3rand(seed) * 0.35;
       }
       force += d / (l * l); 
    } 
    
    for (int i = 0; i < ${uSinks}.length(); ++i) {
       vec3 d = ${uSinks}[i] - pos;
       float l = length(d);
       if (l <= kMinDistance) {
          return RandomSource(seed) + vec3rand(seed) * 0.35;
       }
       force += d / (l * l); 
    } 
    return pos + normalize(force) * speed;
}
      
void main() {        
    gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * 
                  vec4(${aVertexPosition}, 1.0);
    gl_PointSize = ${uPointSize}/gl_Position.z;
    
    // new position for next round
    ${tPosition} = Update(${aVertexPosition}, gl_Position.xyz);
}
"""
      ]),
    new ShaderObject("FireWorksF")
      ..AddUniformVars([uTexture])
      ..SetBody([
        """
void main() {
      ${oFragColor} = texture( ${uTexture},  gl_PointCoord);
}
"""
      ])
  ];
}

String DumpVec(VM.Vector3 v) => "${v.x} ${v.y} ${v.z}";

// Source or Sink for Ions. Can move themselves - currently not used.
class Pole {
  VM.Vector3 _pos = new VM.Vector3.zero();

  Pole(VM.Vector3 pos) {
    _pos = pos.clone();
  }

  VM.Vector3 Pos() => _pos;

  @override
  String toString() => "POLE: ${DumpVec(_pos)}";
}

// Particle emitted from a Source Pole and heading towards a Sink Pole.
class Ion {
  VM.Vector3 _pos;
  double _speed;

  Ion(this._speed, VM.Vector3 pos) {
    _pos = pos.clone();
  }

  VM.Vector3 Pos() => _pos;

  // Update position based on distance Source/Sink Poles
  void Update(List<Pole> srcs, List<Pole> dsts, Math.Random rng, double dt) {
    VM.Vector3 force = new VM.Vector3.zero();

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

  @override
  String toString() => "ION: ${DumpVec(_pos)} speed: ${_speed}";
}

VM.Vector3 RandomVector(Math.Random rng, double d) {
  return new VM.Vector3((rng.nextDouble() - 0.5) * d,
      (rng.nextDouble() - 0.5) * d, (rng.nextDouble() - 0.5) * d);
}

List<Pole> MakeRowOfPoles(List<double> xx, double y, double z, double scale) {
  List<Pole> out = [];
  for (double x in xx) {
    out.add(new Pole(new VM.Vector3(x, y, z) * scale));
  }
  return out;
}

Float32List ExtractPolePos(List<Pole> poles) {
  Float32List out = new Float32List(3 * poles.length);
  int n = 0;
  for (Pole p in poles) {
    out[n + 0] = p.Pos().x;
    out[n + 1] = p.Pos().y;
    out[n + 2] = p.Pos().z;
    n += 3;
  }
  return out;
}

void main() {
  IntroduceNewShaderVar(
      uSources, new ShaderVarDesc(VarTypeVec3, "", arraySize: 5));
  IntroduceNewShaderVar(
      uSinks, new ShaderVarDesc(VarTypeVec3, "", arraySize: 5));

  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  final Math.Random rng = new Math.Random(0);

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  final int width = canvas.clientWidth;
  final int height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;

  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 0.5, 0.5, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0)
    ..AdjustAspect(width, height);

  RenderPhase phase = new RenderPhase("main", chronosGL)
    ..viewPortW = width
    ..viewPortH = height;
  RenderProgram programJS = phase.createProgram(createPointSpritesShader());
  RenderProgram programGPU = phase.createProgram(createFireWorksShader());
  programJS.enabled = false;
  programGPU.enabled = !programJS.enabled;

  List<Pole> srcPoles =
      MakeRowOfPoles([2.0, 1.0, 0.0, -1.0, -2.0], 0.0, 2.0, 3.0);
  List<Pole> dstPoles =
      MakeRowOfPoles([2.0, 1.0, 0.0, -1.0, -2.0], 0.0, -2.0, 3.0);

  List<Ion> ions = [];
  for (int i = 0; i < kIons; i++) {
    Ion ion = new Ion(2.0, kVecOutOfBounds);
    ions.add(ion);
  }

  Float32List ionsPos = new Float32List(3 * kIons);
  void RecomputeIonsPos(double t) {
    int n = 0;
    for (Ion ion in ions) {
      ion.Update(srcPoles, dstPoles, rng, t);
      ionsPos[n + 0] = ion.Pos().x;
      ionsPos[n + 1] = ion.Pos().y;
      ionsPos[n + 2] = ion.Pos().z;
      n += 3;
    }
  }

  GeometryBuilder gb = new GeometryBuilder(true);
  for (var i = 0; i < kIons; i++) {
    gb.AddVertex(RandomVector(rng, kMaxDistance * 100.0));
  }

  // JS version setup
  Material matJS = new Material.Transparent("stars", BlendEquationMix)
    ..SetUniform(uTexture, Utils.createParticleTexture(chronosGL))
    ..SetUniform(uPointSize, 200.0);
  MeshData md = GeometryBuilderToMeshData("", chronosGL, gb);
  programJS.add(new Node("ions1", md, matJS));

  // GPU version setup
  Material matGPU = new Material.Transparent("stars", BlendEquationMix)
    ..SetUniform(uTexture, Utils.createParticleTexture(chronosGL))
    ..SetUniform(uPointSize, 200.0)
    ..SetUniform(uSources, ExtractPolePos(srcPoles))
    ..SetUniform(uSinks, ExtractPolePos(dstPoles));

  MeshData md2 = GeometryBuilderToMeshData("", chronosGL, gb);
  MeshData md1 = GeometryBuilderToMeshData("", chronosGL, gb);

  var transform = chronosGL.createTransformFeedback();
  chronosGL.bindTransformFeedback(transform);
  chronosGL.bindBufferBase(
      GL_TRANSFORM_FEEDBACK_BUFFER, 0, md2.GetBuffer(aVertexPosition));
  programGPU.add(new Node("ions2", md1, matGPU));
  chronosGL.bindTransformFeedback(transform);

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;

    if (programJS.enabled && elapsed > 0.0) {
      RecomputeIonsPos(elapsed / 1000.0);
      md.ChangeVertices(ionsPos);
    }
    orbit.animate(elapsed);

    phase.draw([perspective]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs);

    // use vertex shader output as input for next round
    if (programGPU.enabled) {
      chronosGL.bindBuffer(GL_ARRAY_BUFFER, md1.GetBuffer(aVertexPosition));
      chronosGL.bindBuffer(
          GL_TRANSFORM_FEEDBACK_BUFFER, md2.GetBuffer(aVertexPosition));
      chronosGL.copyBufferSubData(
          GL_TRANSFORM_FEEDBACK_BUFFER, GL_ARRAY_BUFFER, 0, 0, kIons * 3);
    }
  }

  animate(0.0);
}
