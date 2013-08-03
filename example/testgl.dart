library testgl;

import 'dart:html' as html;
import 'dart:math' as Math;
import 'dart:web_gl';
import 'package:ChronosGL/chronos_gl.dart';

part "torusKnot_camera.dart";

class CoolTexture extends Animatable {
  
  ChronosGL raysWebGL;
  Mesh m;
  
  CoolTexture( this.raysWebGL, this.m) {
    
  }
  
  html.CanvasElement canvas2d;
  double time = 0.0;
  void animate(double elapsed) {
    time += elapsed/1000;
    canvas2d = raysWebGL.getUtils().createGradientImage2( time, canvas2d);
    raysWebGL.gl.bindTexture(TEXTURE_2D, m.texture);
    raysWebGL.gl.texImage2DCanvas(TEXTURE_2D, 0, RGBA, RGBA, UNSIGNED_BYTE,  canvas2d);

  }
}

class MyGame {

  ChronosGL raysWebGL;
  Camera camera;
  TextureCache textureCache;
  TextureWrapper blockTex;
  
  
  MyGame() {
    raysWebGL = new ChronosGL('#webgl-canvas', true);
    camera = raysWebGL.getCamera();
    textureCache = raysWebGL.getTextureCache();
    
    blockTex = textureCache.add("gradient.jpg");
    textureCache.add("particle.bmp");
    textureCache.loadAllThenExecute(init);
  }


  Vector p1 = new Vector();
  
  
  void init() {

    //camera.setPos( 0.0, 0.0, 56.0 );
    //capturedInput.setUpCapture();
    //FlyingCamera fc = new FlyingCamera(camera);    raysWebGL.addPhysicsObject('flyingCamera', fc);
    
    TorusKnotCamera tkc = new TorusKnotCamera(camera);    raysWebGL.addAnimatable('tkc', tkc);
    
    

    Mesh m = raysWebGL.getUtils().addTorusKnot( textureWrapper: blockTex);
    
    CoolTexture ct = new CoolTexture( raysWebGL, m);
    raysWebGL.addAnimatable('ct', ct);
        
    //raysWebGL.programPointSprites.add( new PointSprites( 2000, textureCache.get( "textures/particle.bmp")));
    
    int p = 2;
    int q = 3;
    double radius=20.0;
    for ( int i = 0; i < 128; ++ i ) {
      double u = i / 128 * 2 * p * Math.PI;
      getTorusKnotPos( u, q, p, radius, 1.0, p1 );
      //raysWebGL.programPointSprites.add(new PointSprites.fromVertex(p1, textureCache.get("textures/particle.bmp")));
    }
    
    //html.query("#sample_container_id").onMouseUp.listen((html.MouseEvent event){    m.rotX(event.client.x/1000);      m.rotY(event.client.y/1000);    });

    // fix a bug in current chrome v.27
    html.query("#webgl-canvas").onDragStart.listen((html.MouseEvent event){      event.preventDefault();    });

    raysWebGL.run( 0.0);
    
    
  }
}

void main() {
  MyGame myGame = new MyGame();
}

