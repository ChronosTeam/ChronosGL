import 'package:chronosgl/chronosgl.dart';
import 'dart:typed_data';
import 'dart:math' as Math;

import 'package:vector_math/vector_math.dart' as VM;

List<ShaderObject> createFireWorksShader() {
  return [
    new ShaderObject("FireWorksV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddUniformVar(uTime, uTime)
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
      gl_Position = ${uPerspectiveMatrix} * ${uModelViewMatrix} * vec4(vp, 1.0);
      gl_PointSize = 100.0/gl_Position.z;
"""
      ]),
    new ShaderObject("FireWorksF")
      ..AddUniformVar(uTime)
      ..AddUniformVar(uColor)
      ..AddUniformVar(uTextureSampler)
      ..SetBodyWithMain([
        """
      gl_FragColor = texture2D(${uTextureSampler}, gl_PointCoord);
      float t = mod(${uTime}, 5.0);
      if( t < 3.0) {
         //gl_FragColor.x = 1.0;
      } else {
         //gl_FragColor.rgb = ${uColor};
         gl_FragColor.a -= (t-3.0);
      }
"""
      ])
  ];
}

Math.Random rand = new Math.Random();

Mesh getRocket(Texture tw) {
  int numPoints = 200;

  List<VM.Vector3> vertices = [];
  List<VM.Vector3> normals = [];
  for (var i = 0; i < numPoints; i++) {
    vertices.add(new VM.Vector3(0.0, 0.0, 0.0));
    normals.add(new VM.Vector3(rand.nextDouble() - 0.5, rand.nextDouble() - 0.5,
        rand.nextDouble() - 0.5));
  }

  MeshData md = new MeshData()
    ..EnableAttribute(aNormal)
    ..AddFaces1(numPoints)
    ..AddVertices(vertices)
    ..AddAttributesVector3(aNormal, normals);

  Material mat = new Material()
    ..SetUniform(uTextureSampler, tw)
    ..SetUniform(uColor, new VM.Vector3(1.0, 0.0, 0.0))
    ..blend = true
    ..depthWrite = false
    ..blend_dFactor = 0x0301; // WebGLRenderingContext.ONE_MINUS_SRC_COLOR;
  return new Mesh(md, mat);
}

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 15.0);
  chronosGL.addAnimatable('orbitCam', orbit);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    //orbit.setPosFromSpherical(15.0, time*0.001, time*0.0005);
    orbit.azimuth += 0.001;
  });
  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  ShaderProgram pssp = chronosGL.createProgram(createFireWorksShader());
  pssp.add(getRocket(Utils.createParticleTexture("fireworks")));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
