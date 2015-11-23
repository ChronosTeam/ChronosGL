library chronosgl;

import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;
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
part "src/material.dart";
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
part "src/shader/basic_shader.dart";
part "src/shader/blur_shader.dart";

part "src/shader/plane_shader.dart";
part "src/shader/ssao_shader.dart";
part "src/shader/sobel_shader.dart";
part "src/shader/debug_shader.dart";

part "src/shader/perlin_noise_func.dart";
part "src/shader/perlin_noise_shader.dart";
part "src/shader/plasma_shader.dart";

void LogInfo(String s) {
  HTML.window.console.log(s);
}

void LogDebugx(String s) {
  HTML.window.console.debug(s);
}

void LogError(String s) {
  HTML.window.console.error(s);
}

void LogWarn(String s) {
  HTML.window.console.warn(s);
}


class PerspectiveParams {
  int width;
  int height;
  int fov = 50;
  double near = 0.1;
  double far = 1000.0;
}

class LightParams {
  Vector pointLightLocation = new Vector();
}

abstract class Animatable {
  bool active = true;
  void animate(double elapsed);
}

abstract class Drawable extends Animatable {
  void draw(PerspectiveParams dynpar, LightParams lightpar, Camera camera, Matrix4 pMatrix);
}

typedef void AnimateCallback(double elapsed, double time);

class RenderingPhase {
  WEBGL.RenderingContext _gl;
  final ChronosFramebuffer _framebuffer;
  Map<String, ShaderProgram> _programs = new Map<String, ShaderProgram>();
  Matrix4 _pMatrix;
  bool clearBuffer = true;

  RenderingPhase(this._gl, this._framebuffer);
  
  void UpdatePerspective(final PerspectiveParams dynpar) {
    _pMatrix.setPerspective(
        dynpar.fov, dynpar.width / dynpar.height, dynpar.near, dynpar.far);
  }

  void draw(PerspectiveParams dynpar, LightParams lightpar, Camera camera) {
    _gl.bindFramebuffer(WEBGL.FRAMEBUFFER, _framebuffer.framebuffer);

    _gl.viewport(0, 0, _framebuffer.width, _framebuffer.height);

    if (clearBuffer) {
      _gl.clear(WEBGL.COLOR_BUFFER_BIT | WEBGL.DEPTH_BUFFER_BIT);
    }

    for (ShaderProgram prg in _programs.values) {
      prg.draw(dynpar, lightpar, camera, _pMatrix);
    }
  }

  ShaderProgram createProgram(List<ShaderObject> so) {
    ShaderProgram pn = new ShaderProgram(_gl, so[0], so[1], so[0].name);
    _programs[so[0].name] = pn;
    return pn;
  }

  void animate(num timeNow, double elapsed) {
    for (ShaderProgram prg in _programs.values) {
      prg.animate(elapsed);
    }
  }
}

class ChronosGL {
  static WEBGL.RenderingContext globalGL;
  static bool useElementIndexUint = false;
  var elementIndexUintExt;

  WEBGL.RenderingContext gl;

  Map<String, ShaderProgram> programs = new Map<String, ShaderProgram>();
  Map<String, Animatable> animatables = new Map<String, Animatable>();
  Map<String, AnimateCallback> animateCallbacks =
      new Map<String, AnimateCallback>();

  HTML.CanvasElement _canvas;
  //double _aspect; // this might be useful in shaders sometimes
  Camera _camera;
  Utils _utils;
  PerspectiveParams perspar = new PerspectiveParams();
  LightParams lightpar = new LightParams();
  int _lastFov_ = 49;
  int _lastWidth = 0;
  int _lastHeight = 0;

  ChronosFramebuffer fxFramebuffer;
  Mesh fxWall;
  ShaderProgram fxProgram; // shortcut
  Matrix4 fxMatrix = new Matrix4();
  Matrix4 _pMatrix = new Matrix4();

  Shapes shapes = new Shapes();

 
  ChronosGL(dynamic canvasOrID,
      {bool useFramebuffer: false,
      List<ShaderObject> fxShader,
      near: 0.1,
      far: 1000.0,
      bool useElementIndexUint: false}) {
    if (canvasOrID is HTML.CanvasElement) {
      _canvas = canvasOrID;
    } else {
      _canvas = HTML.document.querySelector(canvasOrID);
    }

    perspar.near = near;
    perspar.far = far;
    // fix a bug in current chrome v.27
    _canvas.onDragStart.listen((HTML.MouseEvent event) {
      event.preventDefault();
    });

    perspar.width = _canvas.clientWidth;
    perspar.height = _canvas.clientHeight;
    _canvas.width =  perspar.width; 
    _canvas.height =   perspar.height;
    //_aspect = _canvas.clientWidth / _canvas.clientHeight;
    gl = _canvas.getContext("experimental-webgl");
    if (gl == null) {
      throw new Exception(
          'calling canvas.getContext("experimental-webgl") failed, make sure you run on a computer that supports WebGL, test here: http://get.webgl.org/');
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
    gl.enable(WEBGL.DEPTH_TEST);

    _camera = new Camera();
    _utils = new Utils(this);

    if (useFramebuffer) {
      fxFramebuffer = new ChronosFramebuffer(gl, _canvas.width, _canvas.height);
      Material mat = new Material()
        ..SetUniform(uTexture2Sampler, fxFramebuffer.depthTexture)
        ..SetUniform(uTextureSampler, fxFramebuffer.colorTexture);
      fxWall = _utils.createQuad(mat, 1);
      if (fxShader == null) {
        fxShader = createTexturedShader();
      }
      fxProgram = new ShaderProgram(gl, fxShader[0], fxShader[1], "fx");

      fxProgram.add(fxWall);
    }

    setUpEventCapture(_canvas);
  }

  WEBGL.RenderingContext getRenderingContext() {
    return gl;
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

  ShaderProgram createProgram(List<ShaderObject> so, [bool register = true]) {
    ShaderProgram pn = new ShaderProgram(gl, so[0], so[1], so[0].name);
    if (register) this.programs[so[0].name] = pn;
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
      if (a.active) a.animate(elapsed);
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

  bool _PerspectiveHasChanged() {
    return _lastWidth != perspar.width ||
        _lastHeight != perspar.height ||
        _lastFov_ != perspar.fov;
  }

  void _SetupNewPerspective() {
    perspar.width = _canvas.clientWidth;
    perspar.height = _canvas.clientHeight;
    _canvas.width = _canvas.clientWidth;
    _canvas.height = _canvas.clientHeight;
    gl.viewport(0, 0, _canvas.clientWidth, _canvas.clientHeight);
    _pMatrix.setPerspective(
        perspar.fov, perspar.width / perspar.height, perspar.near, perspar.far);
    _lastWidth = _canvas.clientWidth;
    _lastHeight = _canvas.clientHeight;
    _lastFov_ = perspar.fov;
    //print("setting viewport ${canvas.clientWidth} x ${canvas.clientHeight}");
  }

  void draw() {
    if (fxFramebuffer != null) {
      gl.bindFramebuffer(WEBGL.FRAMEBUFFER, fxFramebuffer.framebuffer);
    }

    if (_PerspectiveHasChanged()) {
      _SetupNewPerspective();
    }
    
    gl.clear(WEBGL.COLOR_BUFFER_BIT | WEBGL.DEPTH_BUFFER_BIT);
    for (ShaderProgram prg in programs.values) {
      prg.draw(perspar, lightpar, getCamera(), _pMatrix);
    }

    if (fxFramebuffer != null && fxFramebuffer.ready()) {
      gl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
      gl.clear(WEBGL.COLOR_BUFFER_BIT | WEBGL.DEPTH_BUFFER_BIT);
      fxProgram.draw(perspar, lightpar, getCamera(), fxMatrix, fxMatrix);
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
