library chronos_gl;

import 'dart:html' as HTML;
import 'dart:web_gl';
import 'dart:math' as Math;
import 'dart:typed_data';
import 'dart:async';

part "node.dart";
part "vector.dart";
part "matrix4.dart";
part "textures.dart";
part "shader_utils.dart";
part "shader_program.dart";
part "spatial.dart";
part "camera.dart";
part "utils.dart";
part "mesh.dart";
part "mesh_data.dart";
part "shapes/cylinder.dart";
part "shapes/cube.dart";
part "shapes/torusknot.dart";
part "shapes/icosahedron.dart";
part "pickray.dart";
part "input.dart";
part "shader_lib.dart";
part "load_obj.dart";

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
  
  Matrix4 _pMatrix = new Matrix4(); 
  
  ChronosGL(String canvasID, [bool transparent=false])
  {
    _canvas = HTML.document.query(canvasID);
    
    // fix a bug in current chrome v.27
    _canvas.onDragStart.listen((HTML.MouseEvent event){      event.preventDefault();    });

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
    
    _shaderLib = new ShaderLib(this);
    programBasic = _shaderLib.createBasicShaderProgram('basic');
    
    _textureCache = new TextureCache(this);
    _camera = new Camera();
    _utils = new Utils( this);
    
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
    
    if( _lastWidth != _canvas.clientWidth || _lastHeight != _canvas.clientHeight)
    {
      //print("setting viewport ${canvas.clientWidth} x ${canvas.clientHeight}");
      _canvas.width = _canvas.clientWidth; 
      _canvas.height = _canvas.clientHeight;
      gl.viewport(0, 0, _canvas.clientWidth, _canvas.clientHeight);
      _pMatrix.setPerspective(50, _canvas.clientWidth / _canvas.clientHeight, 0.1, 2020.0);
      _lastWidth = _canvas.clientWidth;
      _lastHeight = _canvas.clientHeight;
    }
    gl.clear(COLOR_BUFFER_BIT | DEPTH_BUFFER_BIT);
    
    for( ShaderProgram prg in programs.values)
    {
      prg.draw(_pMatrix);
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

