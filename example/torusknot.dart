import 'dart:html' as html;
import 'package:chronosgl/chronosgl.dart';

void main() {
  
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', transparent: false);

  Camera camera = chronosGL.getCamera();
  TextureCache textureCache = chronosGL.getTextureCache();
  TextureWrapper blockTex = textureCache.add("gradient.jpg");
  
  textureCache.loadAllThenExecute(() {
    camera.setPos( 0.0, 0.0, 56.0 );
    Mesh m = chronosGL.getUtils().createTorusKnotMesh( texture: blockTex.texture);
    html.querySelector("#webgl-canvas").onMouseMove.listen((html.MouseEvent event){
      m.rotX(event.client.x/10000);
      m.rotY(event.client.y/10000);
    });
    chronosGL.programBasic.add(m);
    chronosGL.run();
  });
  
}
