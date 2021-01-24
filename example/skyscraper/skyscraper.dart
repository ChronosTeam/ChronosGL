import 'package:chronosgl/chronosgl.dart';

ShaderObject createSkyScraperShader() {
  ShaderObject shaderObject = new ShaderObject("SkyScraper");

  shaderObject.vertexShader = """
        precision mediump float;
        attribute vec3 aVertexPosition;

        attribute vec2 aTextureCoord;
        varying vec2 vTextureCoord;
        
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec3 vVertexPosition;
        
        void main(void) {
          vVertexPosition=aVertexPosition;
          vTextureCoord=aTextureCoord;
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        }
        """;

  shaderObject.fragmentShader = """
        precision mediump float;
        
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        // the step finds the windows
        // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts
        // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the artifacts on the right side
        void main(void) {
          
          float s1 = step(mod(vTextureCoord.x*11.+1., 2.), 1.);
          float s2 = step(mod(vTextureCoord.y*21.+1., 2.), 1.);
          float s3 = step( s1+s2, 1.1);

          gl_FragColor = vec4( 1.-s3, 1.-s3, 1.-s3, 1. );
          
          //gl_FragColor = vec4( mod(vVertexPosition.x*10.0,2.0) , mod(vVertexPosition.y*20.0,2.0), mod(vVertexPosition.z*10.0,2.0), 1. );
        }
        """;

  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";

  return shaderObject;
}

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);

  // Sky Sphere
  ShaderProgram skyprg = chronosGL.createProgram(createDemoShader()); //  PerlinNoiseColorShader(true));
  MeshData md = chronosGL.shapes.createIcosahedron(3).multiplyVertices(100);
  Mesh m = md.createMesh();
  skyprg.add(m);

  ShaderProgram prg = chronosGL.createProgram(createSkyScraperShader());

  for (int x = -10; x < 10; x += 4) {
    for (int z = -10; z < 10; z += 4) {
      // 0.01 and 0.99 is to remove some artifacts on the edges
      MeshData md = chronosGL.shapes.createCube(x: 1.0, y: 2.0, z: 1.0, uMin: 0.01, uMax: 0.99, vMin: 0.01, vMax: 0.99);
      md.textureCoords[17] = 0.01; // remove top face uv coords so the top of the SkySraper has no windows
      md.textureCoords[20] = 0.01;
      md.textureCoords[22] = 0.01;
      md.textureCoords[23] = 0.01;
      Mesh m = md.createMesh();
      m.setPos(x, 0, z);
      prg.add(m);
    }
  }

  //chronosGL.getUtils().addParticles(2000, 100);
  chronosGL.run(1);
}
