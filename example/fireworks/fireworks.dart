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
      gl_PointSize = 1000.0/gl_Position.z;
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
         //gl_FragColor.a -= (t-3.0);
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

void main() {

  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  Camera camera = chronosGL.getCamera();
  camera.setPos(0.0, 0.0, 56.0);

  FlyingCamera fc = new FlyingCamera(camera); // W,A,S,D keys fly
  chronosGL.addAnimatable('flyingCamera', fc);

  Math.Random rand = new Math.Random();
  
  int numPoints = 100;
  
  Float32List vertices = new Float32List(numPoints*3);
  Float32List normals = new Float32List(numPoints*3);
  for( var i=0; i < normals.length; i++)
  {
    normals[i] = rand.nextDouble()-0.5;
  }

  MeshData md = new MeshData(vertices: vertices, normals: normals, texture: chronosGL.getUtils().createParticleTexture() );
  
  Mesh m= new Mesh( md, true);
  m.color.set(1.0,0.0,0.0);
  m.blend = true;
  
  ShaderProgram pssp = chronosGL.createProgram( createFireWorksShader());
  pssp.add( m);
      
  chronosGL.getUtils().addParticles(2000);

  chronosGL.run();
}
