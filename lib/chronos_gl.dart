library chronos_gl;

import 'dart:html' as HTML;
import 'dart:web_gl';
import 'dart:math' as Math;
import 'dart:typed_data';
import 'dart:async';
import 'dart:convert';

part "src/node.dart";
part "src/vector.dart";
part "src/matrix4.dart";
part "src/textures.dart";
part "src/shader_utils.dart";
part "src/shader_program.dart";
part "src/spatial.dart";
part "src/camera.dart";
part "src/utils.dart";
part "src/mesh.dart";
part "src/mesh_data.dart";
part "src/shapes/cylinder.dart";
part "src/shapes/cube.dart";
part "src/shapes/torusknot.dart";
part "src/shapes/icosahedron.dart";
part "src/pickray.dart";
part "src/input.dart";
part "src/shader_lib.dart";
part "src/load_obj.dart";
part "src/framebuffer.dart";

abstract class Animatable {
  void animate( double elapsed);
}

abstract class Drawable extends Animatable {
  void draw( Matrix4 pMatrix);
}


class ChronosGL
{
  
  static RenderingContext globalGL;
  RenderingContext gl;
  
  Map<String, ShaderProgram> programs = new Map<String, ShaderProgram>();
  Map<String, Animatable> animatables = new Map<String, Animatable>();
  
  ShaderProgram programBasic; // shortcut
  ShaderLib _shaderLib;
  
  HTML.CanvasElement _canvas;
  double _aspect;
  TextureCache _textureCache;
  Camera _camera;
  Utils _utils;
  ChronosFramebuffer fxFramebuffer;
  Mesh fxWall;
  ShaderProgram fxProgram; // shortcut
  Matrix4 fxMatrix = new Matrix4(); 
  
  Matrix4 _pMatrix = new Matrix4(); 
  
  ChronosGL(String canvasID, {bool transparent:false, bool useFramebuffer:false, ShaderObject fxShader})
  {
    _canvas = HTML.document.query(canvasID);
    
    // fix a bug in current chrome v.27
    _canvas.onDragStart.listen((HTML.MouseEvent event){ event.preventDefault(); });

    // TODO: add resize handler
    _canvas.width = _canvas.clientWidth; 
    _canvas.height = _canvas.clientHeight;
    _aspect = _canvas.clientWidth / _canvas.clientHeight;
    gl = _canvas.getContext("experimental-webgl");
    ChronosGL.globalGL = gl;
    
    //print( gl.getSupportedExtensions());

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    if( transparent) {
      gl.enable(BLEND);
      gl.blendFunc(SRC_ALPHA, DST_COLOR);
    } else {
      gl.enable(DEPTH_TEST);
    }
    
    gl.lineWidth(5);
    
    _shaderLib = new ShaderLib();
    programBasic = createProgram( 'basic', _shaderLib.createBasicShader());
    
    _textureCache = new TextureCache(this);
    _camera = new Camera();
    _utils = new Utils( this);
    
    if( useFramebuffer) {
      fxFramebuffer = new ChronosFramebuffer(gl, _canvas.width, _canvas.height);
      fxWall = _utils.getWall( fxFramebuffer.colorTexture, 1);
      fxWall.texture2 = fxFramebuffer.depthTexture;
      fxProgram = new ShaderProgram(this, fxShader == null ? _shaderLib.createBasicShader() : fxShader, 'fx');
      fxProgram.add(fxWall);
    }

    setUpCapture();
  }
  
  RenderingContext getRenderingContext() {
    return gl;
  }

  TextureCache getTextureCache() {
    return _textureCache;
  }
  
  Matrix4 getPerspectiveMatrix() {
    return _pMatrix;
  }
  
  Camera getCamera() {
    return _camera;
  }

  ShaderLib getShaderLib() {
    return _shaderLib;
  }

  Utils getUtils() {
    return _utils;
  }
  
  ShaderProgram createProgram( String name, ShaderObject so, [bool register=true]) {
    ShaderProgram pn = new ShaderProgram(this, so, name);
    if( register)
      this.programs[name] = pn;
    return pn;
  }

  void addAnimatable(String name, Animatable a) {
    animatables[name] = a;
  }

  
  void animate(num timeNow, double elapsed)
  {
    for( Animatable a in animatables.values) {
      a.animate(elapsed);
    }
    for( ShaderProgram prg in programs.values)
    {
      prg.animate(elapsed);
    }
  }
  
  int _lastWidth = 0;
  int _lastHeight = 0;
  
  void draw()
  {
   
    if( fxFramebuffer != null) {
      gl.bindFramebuffer( FRAMEBUFFER, fxFramebuffer.framebuffer);
    }
    
    if( _lastWidth != _canvas.clientWidth || _lastHeight != _canvas.clientHeight)
    {
      //print("setting viewport ${canvas.clientWidth} x ${canvas.clientHeight}");
      _canvas.width = _canvas.clientWidth; 
      _canvas.height = _canvas.clientHeight;
      gl.viewport(0, 0, _canvas.clientWidth, _canvas.clientHeight);
      _pMatrix.setPerspective(50, _canvas.clientWidth / _canvas.clientHeight, 1.0, 520.0);
      _lastWidth = _canvas.clientWidth;
      _lastHeight = _canvas.clientHeight;
    }
    gl.clear(COLOR_BUFFER_BIT | DEPTH_BUFFER_BIT);
    
    for( ShaderProgram prg in programs.values)
    {
      prg.draw(_pMatrix);
    }
    
    if( fxFramebuffer != null && fxFramebuffer.ready()) {
      gl.bindFramebuffer( FRAMEBUFFER, null);
      gl.clear( COLOR_BUFFER_BIT | DEPTH_BUFFER_BIT);
      fxProgram.draw(fxMatrix, fxMatrix);
    }
    
  }
  
  HTML.CanvasElement getCanvas() {
    return _canvas;
  }
  
  double _lastTime=0.0;
  void run( [double timeNow]) {
    
    if( timeNow == null)
      timeNow = 0.0;
    if( _lastTime == 0)
      _lastTime = timeNow;
    double elapsed = timeNow - _lastTime;
    _lastTime = timeNow;
    if( elapsed.isNaN)
    {
      print( "isNaN(elapsed)");
      elapsed = 0.0;
    }
    //if( elapsed > 24) print( "high elapsed: $elapsed");
    //myPlayerShip.animate(elapsed);
    animate(timeNow, elapsed);
    draw(); 
    HTML.window.requestAnimationFrame(run);
  }


}

