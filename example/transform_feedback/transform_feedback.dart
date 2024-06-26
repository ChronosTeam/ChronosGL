import 'package:chronosgl/chronosgl.dart';
import 'dart:math' as Math;
import 'dart:html' as HTML;
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

const double kMaxDistance = 100.1;
const double kMinDistance = 0.2;

final VM.Vector3 kVecOutOfBounds = VM.Vector3.all(kMaxDistance * 100.0);

const String uSources = "uSources";
const String uSinks = "uSinks";

final HTML.SelectElement gParticles =
    HTML.document.querySelector('#particles') as HTML.SelectElement;

final HTML.InputElement gCpuCompute =
    HTML.document.querySelector('#cpucompute') as HTML.InputElement;

final ShaderObject particleVertexShader = ShaderObject("ParticleV")
  ..AddAttributeVars([aPosition])
  ..AddUniformVars(
      [uPerspectiveViewMatrix, uModelMatrix, uPointSize, uSources, uSinks])
  ..AddTransformVars([tPosition])
  ..SetBody([
    """
const float kMaxDistance = ${kMaxDistance};
const float kMinDistance = ${kMinDistance};
const float dt = 0.06;  
    
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
    return pos + normalize(force) * dt;
}
      
void main() {        
    gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * 
                  vec4(${aPosition}, 1.0);
    gl_PointSize = ${uPointSize}/gl_Position.z;
    
    // new position for next round
    ${tPosition} = Update(${aPosition}, gl_Position.xyz);
}
"""
  ]);

final ShaderObject particleFragmentShader = ShaderObject("ParticleF")
  ..AddUniformVars([uTexture])
  ..SetBody([
    """
void main() {
      ${oFragColor} = texture( ${uTexture},  gl_PointCoord);
}
"""
  ]);

String DumpVec(VM.Vector3 v) => "${v.x} ${v.y} ${v.z}";

// Source or Sink for Ions. Can move themselves - currently not used.
class Pole {
  Pole(VM.Vector3 pos) : _pos = pos.clone();

  final VM.Vector3 _pos;

  VM.Vector3 Pos() => _pos;

  @override
  String toString() => "POLE: ${DumpVec(_pos)}";
}

// Particle emitted from a Source Pole and heading towards a Sink Pole.
class Ion {
  Ion(VM.Vector3 pos) : _pos = pos.clone();

  VM.Vector3 _pos;

  VM.Vector3 Pos() => _pos;

  // Update position based on distance Source/Sink Poles
  void Update(List<Pole> srcs, List<Pole> dsts, Math.Random rng, double dt) {
    VM.Vector3 force = VM.Vector3.zero();

    for (Pole pole in srcs) {
      // accumulate pushing forces
      VM.Vector3 t = _pos - pole.Pos();
      final double dist = t.length;
      if (dist <= kMinDistance) continue;
      if (dist > kMaxDistance) {
        // too far away
        Pole p = srcs[rng.nextInt(srcs.length)];
        _pos = p.Pos() + RandomVector(rng, 0.35);
        return;
      }
      force += t / (dist * dist);
    }

    for (Pole pole in dsts) {
      // accumulate pulling forces
      VM.Vector3 t = pole.Pos() - _pos; //
      final double dist = t.length;
      if (dist <= kMinDistance) {
        // too close to dst pole
        Pole p = srcs[rng.nextInt(srcs.length)];
        _pos = p.Pos() + RandomVector(rng, 0.35);
        return;
      }
      force += t / (dist * dist);
    }

    // the normalization sacrifices physics for aesthetics
    _pos += force.normalized() * dt;
  }

  @override
  String toString() => "ION: ${DumpVec(_pos)}";
}

VM.Vector3 RandomVector(Math.Random rng, double d) {
  return VM.Vector3((rng.nextDouble() - 0.5), (rng.nextDouble() - 0.5),
      (rng.nextDouble() - 0.5))
    ..scale(d);
}

List<Pole> MakeRowOfPoles(List<double> xx, double y, double z, double scale) {
  List<Pole> out = [];
  for (double x in xx) {
    out.add(Pole(VM.Vector3(x, y, z) * scale));
  }
  return out;
}

Float32List ExtractPolePos(List<Pole> poles) {
  Float32List out = Float32List(3 * poles.length);
  int n = 0;
  for (Pole p in poles) {
    out[n + 0] = p.Pos().x;
    out[n + 1] = p.Pos().y;
    out[n + 2] = p.Pos().z;
    n += 3;
  }
  return out;
}

void ExtractIonPos(List<Ion> ions, Float32List out) {
  assert(ions.length * 3 == out.length);
  int n = 0;
  for (Ion ion in ions) {
    out[n + 0] = ion.Pos().x;
    out[n + 1] = ion.Pos().y;
    out[n + 2] = ion.Pos().z;
    n += 3;
  }
}

void main() {
  IntroduceNewShaderVar(
      uSources, const ShaderVarDesc(VarTypeVec3, "", arraySize: 5));
  IntroduceNewShaderVar(
      uSinks, const ShaderVarDesc(VarTypeVec3, "", arraySize: 5));

  final StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");

  final Math.Random rng = Math.Random(0);

  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  final int width = canvas.clientWidth;
  final int height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;

  final ChronosGL cgl = ChronosGL(canvas);
  final OrbitCamera orbit = OrbitCamera(15.0, 0.5, 0.5, canvas);
  final Perspective perspective = Perspective(orbit, 0.1, 1000.0)
    ..AdjustAspect(width, height);

  final RenderProgram programJS = RenderProgram(
      "CPU", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
  final RenderProgram programGPU =
      RenderProgram("GPU", cgl, particleVertexShader, particleFragmentShader);
  final int bindingIndex = programGPU.GetTransformBindingIndex(tPosition);
  print("@@@@ ${bindingIndex}");

  final List<Pole> srcPoles =
      MakeRowOfPoles([2.0, 1.0, 0.0, -1.0, -2.0], 0.0, 2.0, 3.0);
  final List<Pole> dstPoles =
      MakeRowOfPoles([2.0, 1.0, 0.0, -1.0, -2.0], 0.0, -2.0, 3.0);

  List<Ion> ions = [Ion(RandomVector(rng, kMaxDistance * 100.0))];
  Float32List ionsPos = Float32List(3 * ions.length);
  ExtractIonPos(ions, ionsPos);

  // JS version setup
  Material matJS = Material.Transparent("stars", BlendEquationMix)
    ..SetUniform(uTexture, Utils.createParticleTexture(cgl))
    ..SetUniform(uModelMatrix, VM.Matrix4.identity())
    ..SetUniform(uPointSize, 200.0);
  MeshData mdJS = programJS.MakeMeshData("mdJS", GL_POINTS)
    ..AddVertices(ionsPos);

  // GPU version setup
  Material matGPU = Material.Transparent("stars", BlendEquationMix)
    ..SetUniform(uTexture, Utils.createParticleTexture(cgl))
    ..SetUniform(uModelMatrix, VM.Matrix4.identity())
    ..SetUniform(uPointSize, 200.0)
    ..SetUniform(uSources, ExtractPolePos(srcPoles))
    ..SetUniform(uSinks, ExtractPolePos(dstPoles));

  MeshData mdOut = programGPU.MakeMeshData("ionsOut", GL_POINTS)
    ..AddVertices(ionsPos);
  MeshData mdIn = programGPU.MakeMeshData("ionsIn", GL_POINTS)
    ..AddVertices(ionsPos);

  void ResizeIons(HTML.Event? ev) {
    int n = int.parse(gParticles.value!);
    print("resize to $n ions");
    ions.clear();
    for (int i = 0; i < n; i++) {
      Ion ion = Ion(RandomVector(rng, kMaxDistance * 100.0));
      ions.add(ion);
    }
    ionsPos = Float32List(3 * n);
    ExtractIonPos(ions, ionsPos);
    cgl.bindBuffer(GL_ARRAY_BUFFER, null);
    cgl.bindBufferBase(GL_TRANSFORM_FEEDBACK_BUFFER, bindingIndex, null);
    mdOut.ChangeVertexData(ionsPos);
    mdIn.ChangeVertexData(ionsPos);
    cgl.bindBufferBase(
        GL_TRANSFORM_FEEDBACK_BUFFER, bindingIndex, mdOut.GetBuffer(aPosition));
  }

  void UpdateIonsJS(double t) {
    for (Ion ion in ions) {
      ion.Update(srcPoles, dstPoles, rng, t);
    }
    ExtractIonPos(ions, ionsPos);
    mdJS.ChangeVertexData(ionsPos);
  }

  var transform = cgl.createTransformFeedback();
  cgl.bindTransformFeedback(transform);

  ResizeIons(null);

  void animate(num timeMs) {
    orbit.azimuth += 0.002;
    orbit.animate(0.0); // argument is not used

    if (gCpuCompute.checked!) {
      UpdateIonsJS(0.06);
      programJS.Draw(mdJS, [perspective, matJS]);
    } else {
      programGPU.Draw(mdIn, [perspective, matGPU]);
      // use vertex shader output as input for next round
      cgl.bindBuffer(GL_ARRAY_BUFFER, mdIn.GetBuffer(aPosition));
      cgl.bindBuffer(GL_TRANSFORM_FEEDBACK_BUFFER, mdOut.GetBuffer(aPosition));
      cgl.copyBufferSubData(GL_TRANSFORM_FEEDBACK_BUFFER, GL_ARRAY_BUFFER, 0, 0,
          ions.length * 3 * 4);
    }
    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs + 0.0);
  }

  gParticles.onChange.listen(ResizeIons);
  animate(0.0);
}
