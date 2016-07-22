import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html';
import 'dart:typed_data';

List<ShaderObject> createInstancedShader() {
  return [
    new ShaderObject("InstancedV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(iaRotatation)
      ..AddAttributeVar(iaTranslation)
      ..AddVaryingVar(vColors)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBody([
        """
        vec3 rotate_vertex_position(vec3 pos, vec4 rot) { 
          return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);
        }

        void main(void) {
          vec3 P = rotate_vertex_position(${aVertexPosition}, ${iaRotatation}) + 
                    ${iaTranslation};
          gl_Position = ${uPerspectiveMatrix} * ${uModelViewMatrix} * vec4(P, 1);
          ${vColors} = vec3( sin(${aVertexPosition}.x)/2.0+0.5, 
                       cos(${aVertexPosition}.y)/2.0+0.5, 
                       sin(${aVertexPosition}.z)/2.0+0.5);
        }
        """
      ]),
    new ShaderObject("InstancedF")
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain([" gl_FragColor = vec4( ${vColors}, 1. );"])
  ];
}

void main() {
  StatsFps fps = new StatsFps(document.getElementById("stats"), "blue", "gray");
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  
  chronosGL.addAnimateCallback('fps', (double elapsed, double time) {
     fps.UpdateFrameCount(time);
   });
  
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 265.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);

  Material mat = new Material();
  Mesh m = new Mesh(Shapes.TorusKnot(radius: 12.0), mat);

  int count = 1000;
  Float32List translations = new Float32List(count * 3);
  Float32List rotations = new Float32List(count * 4);

  Spatial spatial = new Spatial();
  Quaternion q = new Quaternion();

  int pos = 0;
  for (int x = -5; x < 5; x++) {
    for (int y = -5; y < 5; y++) {
      for (int z = -5; z < 5; z++) {
        spatial.setPos(x * 40, y * 40, z * 30);
        translations.setAll(pos * 3, spatial.getPos().storage);
        q.fromRotationMatrix4(spatial.transform);
        rotations.setAll(pos * 3, q.array);
        pos++;
      }
    }
  }

  m.AddBuffer(iaRotatation, rotations);
  m.AddBuffer(iaTranslation, translations);
  m.numInstances = 1000;

  ShaderProgram prg = chronosGL.createProgram(createInstancedShader());
  prg.add(m);

  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
