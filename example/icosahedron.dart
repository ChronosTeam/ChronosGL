import 'package:ChronosGL/chronos_gl.dart';

void main() {
  
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', false);

  Camera camera = chronosGL.getCamera();
  TextureCache textureCache = chronosGL.getTextureCache();
  TextureWrapper blockTex = textureCache.add("gradient.jpg");
  TextureWrapper partiTex = textureCache.add("particle.bmp");
  
  textureCache.loadAllThenExecute(() {
    camera.setPos( 0.0, 0.0, 56.0 );
    
    FlyingCamera fc = new FlyingCamera(camera); // W,A,S,D keys fly
    chronosGL.addAnimatable('flyingCamera', fc);
    
    MeshData md = chronosGL.getUtils().createIcosahedron(3);;
    md.texture = blockTex.texture;
    Mesh m = md.createMesh();
    chronosGL.programBasic.add(m);
    
    chronosGL.getUtils().addParticles(2000, partiTex.texture);
    
    chronosGL.run();
  });
  
}
