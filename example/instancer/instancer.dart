import 'dart:html' as HTML;
import 'dart:typed_data';

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

final ShaderObject instancedVertexShader = ShaderObject("InstancedV")
  ..AddAttributeVars([aPosition])
  ..AddAttributeVars([iaRotation, iaTranslation])
  ..AddVaryingVars([vColor])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBody([
    """
vec3 rotate_vertex_position(vec3 pos, vec4 rot) { 
    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);
}

void main() {
    vec3 P = rotate_vertex_position(${aPosition}, ${iaRotation}) +
             ${iaTranslation};
    gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(P, 1);
    ${vColor} = vec3(sin(${aPosition}.x)/2.0+0.5,
                     cos(${aPosition}.y)/2.0+0.5, 
                     sin(${aPosition}.z)/2.0+0.5);
}
"""
  ]);

final ShaderObject instancedFragmentShader = ShaderObject("InstancedF")
  ..AddVaryingVars([vColor])
  ..SetBody([
    """
void main() {  
     ${oFragColor} = vec4( ${vColor}, 1. );
}
     """
  ]);

void AddInstanceData(MeshData md) {
  int count = 1000;
  Float32List translations = Float32List(count * 3);
  Float32List rotations = Float32List(count * 4);

  Spatial spatial = Spatial("dummy");
  int pos = 0;
  for (int x = -5; x < 5; x++) {
    for (int y = -5; y < 5; y++) {
      for (int z = -5; z < 5; z++) {
        spatial.setPos(x * 40.0, y * 40.0, z * 30.0);
        translations.setAll(pos * 3, spatial.getPos().storage);
        VM.Quaternion q =
            VM.Quaternion.fromRotation(spatial.transform.getRotation());
        rotations.setAll(pos * 4, q.storage);
        pos++;
      }
    }
  }

  md.AddAttribute(iaRotation, rotations, 4);
  md.AddAttribute(iaTranslation, translations, 3);
}

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");
  HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;

  ChronosGL cgl = ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = OrbitCamera(265.0, 0.0, 0.0, canvas);
  final PerspectiveResizeAware perspective =
      PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  final RenderProgram progInstanced = RenderProgram(
      "instanced", cgl, instancedVertexShader, instancedFragmentShader);
  final Material mat = Material("mat")
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());
  final MeshData md = ShapeTorusKnot(progInstanced, radius: 12.0);
  AddInstanceData(md);

  final RenderProgram progStars = RenderProgram(
      "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
  final Material matStars = Utils.MakeStarMaterial(cgl)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());
  final MeshData mdStars = Utils.MakeStarMesh(progStars, 2000, 100.0);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    progInstanced.Draw(md, [mat, perspective]);
    progStars.Draw(mdStars, [matStars, perspective]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  animate(0.0);
}
