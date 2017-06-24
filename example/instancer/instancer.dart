import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:typed_data';
import 'package:vector_math/vector_math.dart' as VM;

List<ShaderObject> createInstancedShader() {
  return [
    new ShaderObject("InstancedV")
      ..AddAttributeVars([aPosition])
      ..AddAttributeVars([iaRotation, iaTranslation])
      ..AddVaryingVars([vColor])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..SetBody([
        """
        vec3 rotate_vertex_position(vec3 pos, vec4 rot) { 
          return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);
        }

        void main(void) {
          vec3 P = rotate_vertex_position(${aPosition}, ${iaRotation}) +
                    ${iaTranslation};
          gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(P, 1);
          ${vColor} = vec3( sin(${aPosition}.x)/2.0+0.5,
                       cos(${aPosition}.y)/2.0+0.5, 
                       sin(${aPosition}.z)/2.0+0.5);
        }
        """
      ]),
    new ShaderObject("InstancedF")
      ..AddVaryingVars([vColor])
      ..SetBodyWithMain(["${oFragColor} = vec4( ${vColor}, 1. );"])
  ];
}

void AddInstanceData(MeshData md) {
  int count = 1000;
  Float32List translations = new Float32List(count * 3);
  Float32List rotations = new Float32List(count * 4);

  Spatial spatial = new Spatial("dummy");
  int pos = 0;
  for (int x = -5; x < 5; x++) {
    for (int y = -5; y < 5; y++) {
      for (int z = -5; z < 5; z++) {
        spatial.setPos(x * 40.0, y * 40.0, z * 30.0);
        translations.setAll(pos * 3, spatial.getPos().storage);
        VM.Quaternion q =
            new VM.Quaternion.fromRotation(spatial.transform.getRotation());
        rotations.setAll(pos * 3, q.storage);
        pos++;
      }
    }
  }

  md.AddAttribute(iaRotation, rotations, 4);
  md.AddAttribute(iaTranslation, translations, 3);
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(265.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);
  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram prg = phase.createProgram(createInstancedShader());

  Material mat = new Material("mat");
  MeshData md = ShapeTorusKnot(prg, radius: 12.0);
  AddInstanceData(md);
  Node m = new Node("torus", md, mat);
  prg.add(m);

  RenderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(programSprites, 2000));

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

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.draw([perspective]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs);
  }

  animate(0.0);
}
