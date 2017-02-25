import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:typed_data';
import 'package:vector_math/vector_math.dart' as VM;

List<ShaderObject> createInstancedShader() {
  return [
    new ShaderObject("InstancedV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(iaRotation)
      ..AddAttributeVar(iaTranslation)
      ..AddVaryingVar(vColor)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBody([
        """
        vec3 rotate_vertex_position(vec3 pos, vec4 rot) { 
          return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);
        }

        void main(void) {
          vec3 P = rotate_vertex_position(${aVertexPosition}, ${iaRotation}) +
                    ${iaTranslation};
          gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(P, 1);
          ${vColor} = vec3( sin(${aVertexPosition}.x)/2.0+0.5,
                       cos(${aVertexPosition}.y)/2.0+0.5, 
                       sin(${aVertexPosition}.z)/2.0+0.5);
        }
        """
      ]),
    new ShaderObject("InstancedF")
      ..AddVaryingVar(vColor)
      ..SetBodyWithMain([" gl_FragColor = vec4( ${vColor}, 1. );"])
  ];
}

InstancerData MakeInstances(dynamic gl) {
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

  InstancerData out = new InstancerData("instances", gl, count);
  out.AddBuffer(iaRotation, rotations);
  out.AddBuffer(iaTranslation, translations);
  return out;
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(265.0);
  Perspective perspective = new Perspective(orbit);
  RenderPhase phase = new RenderPhase("main", chronosGL);

  Material mat = new Material("mat");
  Node m = new Node.WithInstances(
      "torus",
      ShapeTorusKnot(chronosGL, radius: 12.0),
      MakeInstances(chronosGL),
      mat);

  RenderProgram prg = phase.createProgram(createInstancedShader());
  prg.add(m);

  RenderProgram programSprites =
      phase.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(chronosGL, 2000));

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
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
