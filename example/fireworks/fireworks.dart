import 'package:chronosgl/chronosgl.dart';
import 'dart:typed_data';
import 'dart:math' as Math;

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

  Float32List vertices = new Float32List(numPoints * 3);
  Float32List normals = new Float32List(numPoints * 3);
  for (var i = 0; i < normals.length; i++) {
    normals[i] = rand.nextDouble() - 0.5;
  }

  MeshData md = new MeshData()
    ..vertices = vertices
    ..normals = normals;
  Material mat = new Material()
    ..SetUniform(uTextureSampler, tw)
    ..SetUniform(uColor, new Vector(1.0, 0.0, 0.0))
    ..blend = true
    ..depthWrite = false
    ..blend_dFactor = 0x0301; // WebGLRenderingContext.ONE_MINUS_SRC_COLOR;
  return new Mesh(md, mat, drawPoints: true);
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
