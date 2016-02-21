library chronosgl;

import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;
import 'dart:typed_data';
import 'dart:async';
import 'dart:convert';

import 'chronosmath.dart';
export 'chronosmath.dart';

import 'chronosshader.dart';
export 'chronosshader.dart';

part "src/node.dart";
part "src/textures.dart";
part "src/shader_utils.dart";
part "src/shader_program.dart";
part "src/spatial.dart";
part "src/camera.dart";
part "src/utils.dart";
part "src/lighting.dart";
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

abstract class Animatable {
  bool active = true;
  void animate(double elapsed);
}

abstract class Drawable extends Animatable {
  void draw(PerspectiveParams dynpar, List<Light> lights, Camera camera,
      Matrix4 pMatrix);
}

typedef void AnimateCallback(double elapsed, double time);

void UpdatePerspective(final PerspectiveParams dynpar, Matrix4 mat) {
  mat.setPerspective(
      dynpar.fov, dynpar.width / dynpar.height, dynpar.near, dynpar.far);
}

class RenderingPhase {
  final WEBGL.RenderingContext _gl;
  ChronosFramebuffer _framebuffer;
  List<ShaderProgram> _programs = [];
  Matrix4 _pMatrix = new Matrix4();
  bool clearBuffer = true;
  final bool _usePerspectiveMatrix;

  RenderingPhase(this._gl, this._framebuffer, this._usePerspectiveMatrix);

  void SetFramebuffer(ChronosFramebuffer fb) {
    _framebuffer = fb;
  }

  void draw(PerspectiveParams perspar, List<Light> lights, Camera camera) {
    if (_framebuffer == null) {
      _gl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
    } else {
      _gl.bindFramebuffer(WEBGL.FRAMEBUFFER, _framebuffer.framebuffer);
    }
    _gl.viewport(0, 0, perspar.width, perspar.height);
    if (_usePerspectiveMatrix) {
      UpdatePerspective(perspar, _pMatrix);
    }
    if (clearBuffer) {
      _gl.clear(WEBGL.COLOR_BUFFER_BIT | WEBGL.DEPTH_BUFFER_BIT);
    }

    for (ShaderProgram prg in _programs) {
      prg.draw(perspar, lights, camera, _pMatrix);
    }
  }

  void AddShaderProgram(ShaderProgram s) {
    _programs.add(s);
  }

  ShaderProgram createProgram(List<ShaderObject> so) {
    ShaderProgram pn = new ShaderProgram(_gl, so[0], so[1], so[0].name);
    AddShaderProgram(pn);
    return pn;
  }

  void animate(double elapsed) {
    for (ShaderProgram prg in _programs) {
      prg.animate(elapsed);
    }
  }
}

class ChronosGL {
  static WEBGL.RenderingContext globalGL;
  static bool useElementIndexUint = false;
  var elementIndexUintExt;

  WEBGL.RenderingContext gl;

  //Map<String, ShaderProgram> programs = new Map<String, ShaderProgram>();
  Map<String, Animatable> animatables = new Map<String, Animatable>();
  Map<String, AnimateCallback> animateCallbacks =
      new Map<String, AnimateCallback>();

  // TODO: move this into a RenderingPhase
  HTML.CanvasElement _canvas;
  Camera _camera;

  PerspectiveParams perspar = new PerspectiveParams();
  List<Light> lights = [];
  int _lastFov_ = 49;
  int _lastWidth = 0;
  int _lastHeight = 0;

  List<RenderingPhase> _renderPhases = [];

  ChronosGL(dynamic canvasOrID,
      {bool useFramebuffer: false,
      List<ShaderObject> fxShader,
      near: 0.1,
      far: 1000.0,
      bool preserveDrawingBuffer: false,
      bool addDefaultRenderingPhase: true,
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
    _canvas.width = perspar.width;
    _canvas.height = perspar.height;
    //_aspect = _canvas.clientWidth / _canvas.clientHeight;
    Map attributes = {
      "alpha": false,
      "depth": true,
      "stencil": true,
      "antialias": false,
      "premultipliedAlpha": true,
      "preserveDrawingBuffer": preserveDrawingBuffer,
    };

    gl = _canvas.getContext("webgl", attributes);
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

    if (addDefaultRenderingPhase) {
      addRenderPhase(new RenderingPhase(gl, null, true));
    }
    setUpEventCapture(_canvas);
  }

  WEBGL.RenderingContext getRenderingContext() {
    return gl;
  }

  Camera getCamera() {
    return _camera;
  }

  ShaderProgram createProgram(List<ShaderObject> so) {
    return _renderPhases.last.createProgram(so);
  }

  void addRenderPhase(RenderingPhase phase) {
    _renderPhases.add(phase);
  }

  void ClearAllRenderPhases() {
    _renderPhases.clear();
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

    for (RenderingPhase r in _renderPhases) {
      r.animate(elapsed);
    }
  }

  // Move the perspective stuff to the RenderPhases.
  // The resizing should happen there as well based on
  // some canvas element to watch.
  // Think about how to resize postprocessing buffers.
  bool _PerspectiveHasChanged() {
    return _lastWidth != perspar.width ||
        _lastHeight != perspar.height ||
        _lastWidth != _canvas.clientWidth ||
        _lastHeight != _canvas.clientHeight ||
        _lastFov_ != perspar.fov;
  }

  void _SetupNewPerspective() {
    perspar.width = _canvas.clientWidth;
    perspar.height = _canvas.clientHeight;
    _canvas.width = _canvas.clientWidth;
    _canvas.height = _canvas.clientHeight;

    _lastWidth = _canvas.clientWidth;
    _lastHeight = _canvas.clientHeight;
    _lastFov_ = perspar.fov;
    LogInfo(
        "New perspective: ${perspar.width} ${perspar.height} ${perspar.fov}");
  }

  void draw() {
    if (_PerspectiveHasChanged()) {
      _SetupNewPerspective();
    }

    for (RenderingPhase r in _renderPhases) {
      r.draw(perspar, lights, getCamera());
    }
  }

  HTML.CanvasElement getCanvas() {
    return _canvas;
  }

  double _lastTime = 0.0;
  void run([var timeNow]) {
    if (timeNow == null) timeNow = 0.0;
    if (_lastTime == 0.0) _lastTime = timeNow;
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
