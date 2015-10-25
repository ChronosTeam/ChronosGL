library chronosgl;

import 'dart:html' as HTML;
import 'dart:web_gl';
import 'dart:math' as Math;
import 'dart:typed_data';
import 'dart:async';
import 'dart:convert';
import 'chronosmath.dart';
export 'chronosmath.dart';

part "src/node.dart";
part "src/textures.dart";
part "src/shader_utils.dart";
part "src/shader_program.dart";
part "src/spatial.dart";
part "src/camera.dart";
part "src/utils.dart";
part "src/mesh.dart";
part "src/mesh_data.dart";
part "src/shapes/shapes.dart";
part "src/shapes/cylinder.dart";
part "src/shapes/cube.dart";
part "src/shapes/torusknot.dart";
part "src/shapes/icosahedron.dart";
part "src/pickray.dart";
part "src/input.dart";
part "src/load_obj.dart";
part "src/framebuffer.dart";
part "src/instancer.dart";
part "src/shader/basic_shader.dart";
part "src/shader/plane_shader.dart";
part "src/shader/ssao_shader.dart";
part "src/shader/sobel_shader.dart";
part "src/shader/debug_shader.dart";
part "src/shader/perlin_noise_func.dart";
part "src/shader/perlin_noise_shader.dart";
part "src/shader/plasma_shader.dart";
part "src/shader/generate_shader.dart";

abstract class Animatable {
  void animate(double elapsed);
}

abstract class Drawable extends Animatable {
  void draw(Matrix4 pMatrix);
}

typedef void AnimateCallback(double elapsed, double time);

class ChronosGL {
  static RenderingContext globalGL;
  static bool useElementIndexUint = false;
  var elementIndexUintExt;

  RenderingContext gl;

  Map<String, ShaderProgram> programs = new Map<String, ShaderProgram>();
  Map<String, Animatable> animatables = new Map<String, Animatable>();
  Map<String, AnimateCallback> animateCallbacks = new Map<String, AnimateCallback>();

  ShaderProgram programBasic; // shortcut

  HTML.CanvasElement _canvas;
  //double _aspect; // this might be useful in shaders sometimes
  TextureCache _textureCache;
  Camera _camera;
  Utils _utils;
  ChronosFramebuffer fxFramebuffer;
  Mesh fxWall;
  ShaderProgram fxProgram; // shortcut
  Matrix4 fxMatrix = new Matrix4();
  Matrix4 _pMatrix = new Matrix4();

  Shapes shapes = new Shapes();

  num near = 0.1;
  num far = 1000;

  Vector pointLightLocation = new Vector();

  ChronosGL(dynamic canvasOrID, {bool transparent: false, bool useFramebuffer: false, ShaderObject fxShader, this.near: 0.1, this.far: 1000.0, bool useElementIndexUint: false}) {
    if (canvasOrID is HTML.CanvasElement) {
      _canvas = canvasOrID;
    } else {
      _canvas = HTML.document.querySelector(canvasOrID);
    }

    // fix a bug in current chrome v.27
    _canvas.onDragStart.listen((HTML.MouseEvent event) {
      event.preventDefault();
    });

    _canvas.width = _canvas.clientWidth;
    _canvas.height = _canvas.clientHeight;
    //_aspect = _canvas.clientWidth / _canvas.clientHeight;
    gl = _canvas.getContext("experimental-webgl");
    if (gl == null) {
      throw new Exception('calling canvas.getContext("experimental-webgl") failed, make sure you run on a computer that supports WebGL, test here: http://get.webgl.org/');
    }
    ChronosGL.globalGL = gl;

    if (useElementIndexUint) {
      elementIndexUintExt = gl.getExtension("OES_element_index_uint");
      if (elementIndexUintExt == null) {
        throw "Error: OES_element_index_uint is not supported";
      }
      ChronosGL.useElementIndexUint = useElementIndexUint;
    }

    //print( gl.getSupportedExtensions());

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    if (transparent) {
      gl.enable(BLEND);
      gl.blendFunc(SRC_ALPHA, DST_COLOR);
    } else {
      gl.enable(DEPTH_TEST);
    }

    programBasic = createProgram(createTexturedShader());

    _textureCache = new TextureCache(this);
    _camera = new Camera();
    _utils = new Utils(this);

    if (useFramebuffer) {
      fxFramebuffer = new ChronosFramebuffer(gl, _canvas.width, _canvas.height);
      fxWall = _utils.createQuad(fxFramebuffer.colorTexture, 1);
      fxWall.texture2 = fxFramebuffer.depthTexture;
      fxProgram = new ShaderProgram(this, fxShader == null ? createTexturedShader() : fxShader, 'fx');
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

  Utils getUtils() {
    return _utils;
  }

  ShaderProgram createProgram(ShaderObject so, [bool register = true]) {
    ShaderProgram pn = new ShaderProgram(this, so, so.name);
    if (register) this.programs[so.name] = pn;
    return pn;
  }

  void addAnimatable(String name, Animatable a) {
    animatables[name] = a;
  }

  void addAnimateCallback(String name, Function f) {
    animateCallbacks[name] = f;
  }

  void animate(num timeNow, double elapsed) {
    for (Animatable a in animatables.values) {
      a.animate(elapsed);
    }
    for (Function f in animateCallbacks.values) {
      f(elapsed, timeNow);
    }
    for (ShaderProgram prg in programs.values) {
      prg.animate(elapsed);
    }
    if (fxProgram != null) {
      fxProgram.animate(elapsed);
    }
  }

  int _lastWidth = 0;
  int _lastHeight = 0;

  void draw() {
    if (fxFramebuffer != null) {
      gl.bindFramebuffer(FRAMEBUFFER, fxFramebuffer.framebuffer);
    }

    if (_lastWidth != _canvas.clientWidth || _lastHeight != _canvas.clientHeight) {
      //print("setting viewport ${canvas.clientWidth} x ${canvas.clientHeight}");
      _canvas.width = _canvas.clientWidth;
      _canvas.height = _canvas.clientHeight;
      gl.viewport(0, 0, _canvas.clientWidth, _canvas.clientHeight);
      _pMatrix.setPerspective(50, _canvas.clientWidth / _canvas.clientHeight, near, far);
      _lastWidth = _canvas.clientWidth;
      _lastHeight = _canvas.clientHeight;
    }
    gl.clear(COLOR_BUFFER_BIT | DEPTH_BUFFER_BIT);

    for (ShaderProgram prg in programs.values) {
      prg.draw(_pMatrix);
    }

    if (fxFramebuffer != null && fxFramebuffer.ready()) {
      gl.bindFramebuffer(FRAMEBUFFER, null);
      gl.clear(COLOR_BUFFER_BIT | DEPTH_BUFFER_BIT);
      fxProgram.draw(fxMatrix, fxMatrix);
    }
  }

  HTML.CanvasElement getCanvas() {
    return _canvas;
  }

  double _lastTime = 0.0;
  void run([double timeNow]) {
    if (timeNow == null) timeNow = 0.0;
    if (_lastTime == 0) _lastTime = timeNow;
    double elapsed = timeNow - _lastTime;
    _lastTime = timeNow;
    if (elapsed.isNaN) {
      print("isNaN(elapsed)");
      elapsed = 0.0;
    }
    //if( elapsed > 24) print( "high elapsed: $elapsed");
    //myPlayerShip.animate(elapsed);
    animate(timeNow, elapsed);
    draw();
    HTML.window.requestAnimationFrame(run);
  }

  void setLineWidth(int w) {
    gl.lineWidth(w);
  }

  void installOrbitCamera(num distance) {
    OrbitCamera orbit = new OrbitCamera(_camera, distance.toDouble());
    addAnimatable('orbitCam', orbit);
    addAnimateCallback('rotateCamera', (double elapsed, double time) {
      //orbit.setPosFromSpherical(15.0, time*0.001, time*0.0005);
      orbit.azimuth += 0.001;
    });
  }
}
