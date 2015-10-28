import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', useFramebuffer: false, fxShader: createSobelShader(), near: 0.1, far: 2520.0);
  ShaderProgram prg = chronosGL.createProgram(createNormal2ColorShader());
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0, -45.0, 0.3);
  chronosGL.addAnimatable('orbitCam', orbit);
  
  List<MeshData> mymd= new List<MeshData>();

  loadObj("../ct_logo.obj").then((MeshData ctLogo) {
    
    mymd.add(ctLogo);
    mymd.add(chronosGL.shapes.createCylinder(1.0, 2.0, 16));
    mymd.add(chronosGL.shapes.createCube());
    
    for (var i = 0; i < mymd.length; i++) {
      MeshData md = mymd[i];
      // the logo is missing normals so we generate them here, but wait, why are the colors all wrong ?
      md.generateNormalsAssumingTriangleMode();
      Mesh mesh = md.createMesh();
      if( md == ctLogo) {
        mesh.rotX(3.14 / 2);
        mesh.rotZ(3.14);
      }
      mesh.setPos(-5+i*7, -4, 0);
      prg.add(mesh);
    }
     
    for (var i = 0; i < mymd.length; i++) {
      MeshData md = mymd[i];
      // because some vertices were reused for different faces, so we need to deduplicate the indices
      md.deDeuplicateIndices().generateNormalsAssumingTriangleMode();
      Mesh mesh = md.createMesh();
      if( md == ctLogo) {
        mesh.rotX(3.14 / 2);
        mesh.rotZ(3.14);
      }
      mesh.setPos(-5+i*7, 4, 0);
      prg.add(mesh);
    }
    chronosGL.run();
  });
}
