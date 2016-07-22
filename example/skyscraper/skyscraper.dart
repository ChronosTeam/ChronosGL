import 'package:chronosgl/chronosgl.dart';

import 'package:vector_math/vector_math.dart' as VM;

List<ShaderObject> createSkyScraperShader() {
  return [
    new ShaderObject("SkyScraperV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vVertexPosition)
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBodyWithMain([
        StdVertexBody,
        "${vVertexPosition} = ${aVertexPosition};",
        "${vTextureCoordinates} = ${aTextureCoordinates};",
      ]),
    new ShaderObject("SkyScraperF")
      ..AddVaryingVar(vVertexPosition)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(["""
      // the step finds the windows
      // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts
      // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the artifacts on the right side
      float s1 = step(mod(${vTextureCoordinates}.x*11.+1., 2.), 1.);
      float s2 = step(mod(${vTextureCoordinates}.y*21.+1., 2.), 1.);
      float s3 = step( s1+s2, 1.1);

      gl_FragColor = vec4( 1.-s3, 1.-s3, 1.-s3, 1. );
          
      //gl_FragColor = vec4( mod(vVertexPosition.x*10.0,2.0) , 
      //                       mod(vVertexPosition.y*20.0,2.0), 
      //                       mod(vVertexPosition.z*10.0,2.0), 1. );
"""
      ])
  ];
}


void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);

  Material mat = new Material();
  // Sky Sphere
  ShaderProgram skyprg = chronosGL
      .createProgram(createDemoShader()); //  PerlinNoiseColorShader(true));
  MeshData md = Shapes.Icosahedron(3);
  //..multiplyVertices(100);
  Mesh m = new Mesh(md, mat)..transform.setScale(100.0);
  skyprg.add(m);

  ShaderProgram prg = chronosGL.createProgram(createSkyScraperShader());

  for (int x = -10; x < 10; x += 4) {
    for (int z = -10; z < 10; z += 4) {
      // 0.01 and 0.99 is to remove some artifacts on the edges
      MeshData md = Shapes.Cube(
          x: 1.0,
          y: 2.0,
          z: 1.0,
          uMin: 0.01,
          uMax: 0.99,
          vMin: 0.01,
          vMax: 0.99);
      VM.Vector2 q = new VM.Vector2(0.01, 0.01);
      md.setFace4UV(2, q, q, q, q);
      md.setFace4UV(3, q, q, q, q);
      Mesh m = new Mesh(md, mat)
      ..setPos(x, 0, z);
      prg.add(m);
    }
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
     chronosGL.run();
   });
}
