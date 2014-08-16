library testgl;

import 'dart:html' as html;
import 'dart:math' as Math;
import 'dart:web_gl';
import 'package:chronosgl/chronosgl.dart';

part 'torusKnot_camera.dart';

class CoolTexture extends Animatable {
  
  ChronosGL chronosGL;
  Mesh m;
  
  CoolTexture( this.chronosGL, this.m) {
    
  }
  
  html.CanvasElement canvas2d;
  double time = 0.0;
  void animate(double elapsed) {
    time += elapsed/1000;
    canvas2d = chronosGL.getUtils().createGradientImage2( time, canvas2d);
    chronosGL.gl.bindTexture(TEXTURE_2D, m.texture);
    chronosGL.gl.texImage2DCanvas(TEXTURE_2D, 0, RGBA, RGBA, UNSIGNED_BYTE,  canvas2d);

  }
}

class MyGame {

  ChronosGL chronosGL;
  Camera camera;
  TextureCache textureCache;
  TextureWrapper blockTex;
  
  
  MyGame() {
    chronosGL = new ChronosGL('#webgl-canvas', transparent: true);
    camera = chronosGL.getCamera();
    textureCache = chronosGL.getTextureCache();
    
    blockTex = textureCache.add("gradient.jpg");
    textureCache.add("particle.bmp");
    textureCache.loadAllThenExecute(init);
  }


  Vector p1 = new Vector();
  
  
  void init() {

    //camera.setPos( 0.0, 0.0, 56.0 );
    //capturedInput.setUpCapture();
    //FlyingCamera fc = new FlyingCamera(camera);    chronosGL.addPhysicsObject('flyingCamera', fc);
    
    TorusKnotCamera tkc = new TorusKnotCamera(camera);    chronosGL.addAnimatable('tkc', tkc);
    
    

    Mesh m = chronosGL.getUtils().addTorusKnot( textureWrapper: blockTex);
    
    CoolTexture ct = new CoolTexture( chronosGL, m);
    chronosGL.addAnimatable('ct', ct);
        
    //chronosGL.programPointSprites.add( new PointSprites( 2000, textureCache.get( "textures/particle.bmp")));
    
    int p = 2;
    int q = 3;
    double radius=20.0;
    for ( int i = 0; i < 128; ++ i ) {
      double u = i / 128 * 2 * p * Math.PI;
      getTorusKnotPos( u, q, p, radius, 1.0, p1 );
      //chronosGL.programPointSprites.add(new PointSprites.fromVertex(p1, textureCache.get("textures/particle.bmp")));
    }
    
    //html.query("#sample_container_id").onMouseUp.listen((html.MouseEvent event){    m.rotX(event.client.x/1000);      m.rotY(event.client.y/1000);    });

    // fix a bug in current chrome v.27
    html.querySelector("#webgl-canvas").onDragStart.listen((html.MouseEvent event){      event.preventDefault();    });

    chronosGL.run( 0.0);
    
    
  }
}

void main() {
  MyGame myGame = new MyGame();
}

