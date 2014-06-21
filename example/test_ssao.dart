import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart';

void main() {
  
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', useFramebuffer:true, fxShader: createSSAOShader(), near: 0.1, far:2520.0);
  ShaderProgram prg = chronosGL.createProgram('FixedVertexColor', createFixedVertexColorShader());
  Camera camera = chronosGL.getCamera();
  camera.setPos( 0.0, 0.0, 56.0 );
  FlyingCamera fc = new FlyingCamera(camera); // W,A,S,D keys fly
  chronosGL.addAnimatable('flyingCamera', fc);

  loadObj( "ct_logo.obj").then((MeshData2 md) {
    
    Mesh mesh = md.createMesh();
    mesh.rotX(3.14/2);
    mesh.rotZ(3.14);
    Node n = new  Node(mesh);
    //n.invert = true;
    n.lookAt(new Vector3(100.0,0.0,-100.0));
    //n.matrix.scale(0.02);
    
    prg.add( mesh);
    chronosGL.run();
    
  });
  
  
  
  
}
