import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html';

import 'package:vector_math/vector_math.dart' as VM;

// https://cycling74.com/forums/topic/shader-help-recreating-gl_sphere_map/
// https://www.opengl.org/wiki/Mathematics_of_glTexGen

String _SphereV = """
  vec3 u = normalize(vec3(${uModelViewMatrix} * vec4(${aVertexPosition}, 1.0)));
  vec3 n = normalize(${uNormalMatrix} * ${aNormal} );
  vec3 r = reflect( u, n );
  r.z += 1.0;
  float m = 2.0 * length(r);
  ${vTextureCoordinates} = vec2(r.x/m + 0.5, r.y/m + 0.5);
""";

List<ShaderObject> sphereShader() {
  return [
    new ShaderObject("sphereV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddUniformVar(uNormalMatrix)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain([StdVertexBody, _SphereV]),
    new ShaderObject("sphereF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTextureSampler)
      ..SetBodyWithMain([
        "gl_FragColor = texture2D(${uTextureSampler}, ${vTextureCoordinates});"
      ])
  ];
}

void main() {
  StatsFps fps = new StatsFps(document.getElementById("stats"), "blue", "gray");
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  OrbitCamera orbit = new OrbitCamera(5.0, 10.0);
  RenderingPhase phase = chronosGL.createPhase(orbit);
  // Note, moving the camera does not have an effect

  Texture bubble = new ImageTexture("sphere.png");

  ShaderProgram shaderSpheres = phase.createProgram(sphereShader());
  Material mat = new Material()..SetUniform(uTextureSampler, bubble);
  MeshData md = Shapes.Icosahedron(3);
  //md.generateNormalsAssumingTriangleMode();
  md.generateRadialNormals(new VM.Vector3(0.0, 0.0, 0.0));
  Mesh m = new Mesh(md, mat)..setPos(0.0, 0.0, 0.0);

  shaderSpheres.add(m);

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    chronosGL.draw();
    window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
