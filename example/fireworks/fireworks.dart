import 'package:chronosgl/chronosgl.dart';
import 'dart:typed_data';
import 'dart:math' as Math;

ShaderObject createFireWorksShader() {
  ShaderObject shaderObject = new ShaderObject("FireWorks");

  shaderObject.vertexShader = """
    precision mediump float;
    attribute vec3 vertexPosition;
    //attribute vec3 vertexColor;
    attribute vec3 disperse;

    uniform mat4 uPMatrix;
    uniform mat4 uMVMatrix;
    uniform float time;


    vec3 vp;
    
    varying vec3 color;

    void main(void) {
      //color = vertexColor;
      float t = mod(time, 5.0);
      vp = vertexPosition;
      if( t < 3.0) {
       vp.y = t;
      } else {
       vp.y = 3.0;
       vp += normalize(disperse)*(t-3.0);
      }
      gl_Position = uPMatrix * uMVMatrix * vec4(vp, 1.0);
      gl_PointSize = 100.0/gl_Position.z;
    }
  """;

  shaderObject.fragmentShader = """
    precision mediump float;
    uniform float time;
    uniform sampler2D texture;
 
    //varying vec3 color;
    uniform vec3 color;


    void main() {
      gl_FragColor = texture2D(texture, gl_PointCoord);
      float t = mod(time, 5.0);
      if( t < 3.0) {
         //gl_FragColor.x = 1.0;
      } else {
         //gl_FragColor.rgb = color;
         gl_FragColor.a -= (t-3.0);
      }
    }
  """;

  shaderObject.vertexPositionAttribute = "vertexPosition";
  shaderObject.normalAttribute = "disperse";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.textureSamplerUniform = "texture";
  shaderObject.timeUniform = "time";
  shaderObject.colorUniform = "color";

  return shaderObject;
}

Math.Random rand = new Math.Random();

Mesh getRocket(ChronosGL chronosGL) {
  int numPoints = 200;

  Float32List vertices = new Float32List(numPoints * 3);
  Float32List normals = new Float32List(numPoints * 3);
  for (var i = 0; i < normals.length; i++) {
    normals[i] = rand.nextDouble() - 0.5;
  }

  MeshData md = new MeshData(vertices: vertices, normals: normals);

  Mesh m = new Mesh(md, drawPoints: true, texture: chronosGL.getUtils().createParticleTexture());
  m.color.set(1.0, 0.0, 0.0);
  m.blend = true;
  m.depthWrite = false;
  m.blend_dFactor = 0x0301; // WebGLRenderingContext.ONE_MINUS_SRC_COLOR;

  return m;
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

  ShaderProgram pssp = chronosGL.createProgram(createFireWorksShader());

  pssp.add(getRocket(chronosGL));

  chronosGL.getUtils().addParticles(2000);

  chronosGL.run(1);
}
