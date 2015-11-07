import 'dart:html' as html;
import 'dart:math' as Math;
import 'dart:web_gl';
import 'package:chronosgl/chronosgl.dart';

html.CanvasElement canvas2d;
Vector p1 = new Vector();

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
    
  Camera camera = chronosGL.getCamera();

  TorusKnotCamera tkc = new TorusKnotCamera(camera);
  chronosGL.addAnimatable('tkc', tkc);
  
  
  TextureCache textureCache = chronosGL.getTextureCache();
  canvas2d = chronosGL.getUtils().createGradientImage2(0.0, canvas2d);
  TextureWrapper generatedTexture = textureCache.addCanvas("gen", canvas2d);
  
  textureCache.loadAllThenExecute(() {
    Mesh m = chronosGL.shapes.createTorusKnot().createMesh()
    ..SetUniform(uTextureSampler, generatedTexture.texture)
    ..SetUniform(uColor, new Vector())
    ..blend=true
    ..depthTest=false;
    chronosGL.programBasic.add( m);
    chronosGL.addAnimateCallback('changeTexture', (double elapsed, double time) {
      canvas2d = chronosGL.getUtils().createGradientImage2(time/1000, canvas2d);
      chronosGL.gl.bindTexture(TEXTURE_2D, generatedTexture.texture);
      chronosGL.gl.texImage2DCanvas(TEXTURE_2D, 0, RGBA, RGBA, UNSIGNED_BYTE, canvas2d);
    });
  });
  

  int p = 2;
  int q = 3;
  double radius = 20.0;
  for (int i = 0; i < 128; ++i) {
    double u = i / 128 * 2 * p * Math.PI;
    getTorusKnotPos(u, q, p, radius, 1.0, p1);
    //chronosGL.programs['point_sprites'].add(new PointSprites.fromVertex(p1, textureCache.get("textures/particle.bmp")));
  }

  //chronosGL.programPointSprites.add( new PointSprites( 2000, textureCache.get( "textures/particle.bmp")));
  chronosGL.getUtils().addParticles(2000, 100);

  chronosGL.run();
}
