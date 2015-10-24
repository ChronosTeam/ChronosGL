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

        // > 0.01 to remove some artifacts on the edges
        // the mod finds the windows
        // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts
        // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the artifacts on the right side
        void main(void) {
          if( vTextureCoord.x > 0.01 && vTextureCoord.y > 0.01 && mod(vTextureCoord.x*10.9, 2.)>1. && mod(vTextureCoord.y*20.9, 2.)>1.) 
            gl_FragColor = vec4( 1., 1., 1., 1. );
          else
            gl_FragColor = vec4( 0., 0., 0., 1. );
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
    orbit.azimuth+=0.001;
  });
  chronosGL.addAnimatable('orbitCam', orbit);
    
  ShaderProgram prg = chronosGL.createProgram( createSkyScraperShader());

  for(int x=-10; x<10; x+=4) {
    for(int z=-10; z<10; z+=4) {
      Mesh m = chronosGL.getUtils().createCube(x:1.0,y:2.0,z:1.0).createMesh();
      m.setPos(x, 0, z);
      prg.add( m);
    }
  }

  
  chronosGL.getUtils().addParticles(2000, 100);
  chronosGL.run();
}

