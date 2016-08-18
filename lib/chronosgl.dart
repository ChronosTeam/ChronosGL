library chronosgl;

import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;

import 'dart:typed_data';
import 'dart:async';
import 'dart:convert';

import 'package:vector_math/vector_math.dart' as VM;

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
  int fov = 50; // horizobtal fov in deg  divided by 2
  double near = 0.1;
  double far = 1000.0;

  List<VM.Plane> _cullPlanes = [
    new VM.Plane.components(0.0, 0.0, 0.0, 0.0),
    new VM.Plane.components(0.0, 0.0, 0.0, 0.0),
    new VM.Plane.components(0.0, 0.0, 0.0, 0.0),
    new VM.Plane.components(0.0, 0.0, 0.0, 0.0)
  ];

  double aspecRatioInv() {
    return height / width;
  }

  // Distance to projection plane
  double focalLength() {
    return 1.0 / Math.tan(fov * Math.PI / 360.0);
  }

  double vfov() {
    return Math.atan(aspecRatioInv() / focalLength());
  }

  void UpdatePerspective(VM.Matrix4 mat) {
    VM.setPerspectiveMatrix(mat, fov * Math.PI / 180.0, width / height, near, far);
    double e = focalLength();
    double a = aspecRatioInv();
    double ee1 = Math.sqrt(e * e + 1);
    double eeaa = Math.sqrt(e * e + a * a);
    // Left
    VM.Plane c0 = _cullPlanes[0];
    c0.normal[0] = e / ee1;
    c0.normal[1] = 0.0;
    c0.normal[2] = -1.0 / ee1;
    c0.constant = 0.0;
    // Right
    VM.Plane c1 = _cullPlanes[1];
    c1.normal[0] = -e / ee1;
    c1.normal[1] = 0.0;
    c1.normal[2] = -1.0 / ee1;
    c1.constant = 0.0;
    // Bottom
    VM.Plane c2 = _cullPlanes[2];
    c2.normal[0] = 0.0;
    c2.normal[1] = e / eeaa;
    c2.normal[2] = -a / eeaa;
    c2.constant = 0.0;
    // Top
    VM.Plane c3 = _cullPlanes[3];
    c3.normal[0] = 0.0;
    c3.normal[1] = -e / eeaa;
    c3.normal[2] = -a / eeaa;
    c3.constant = 0.0;
  }

  bool IntersectSphere(VM.Vector3 center, double radius) {
    for (VM.Plane plane in _cullPlanes) {
      double d = plane.distanceToVector3(center);
      if (d < -radius) return false;
    }
    return true;
  }
}

abstract class Animatable {
  bool active = true;
  void animate(double elapsed);
}

abstract class Drawable extends Animatable {
  void draw(PerspectiveParams dynpar, List<Light> lights, Camera camera,
      VM.Matrix4 pMatrix, List<DrawStats> stats);
}

typedef void AnimateCallback(double elapsed, double time);

class RenderingPhase {
  final WEBGL.RenderingContext _gl;
  ChronosFramebuffer _framebuffer;
  List<ShaderProgram> _programs = [];
  VM.Matrix4 _pMatrix = new VM.Matrix4.identity();
  bool clearColorBuffer = true;
  bool clearDepthBuffer = true;
  final bool _usePerspectiveMatrix;
  List<DrawStats> stats = null;

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
      perspar.UpdatePerspective(_pMatrix);
    }
    if (clearColorBuffer || clearDepthBuffer) {
      int mode = 0;
      if (clearColorBuffer) mode |= WEBGL.COLOR_BUFFER_BIT;
      if (clearDepthBuffer) mode |= WEBGL.DEPTH_BUFFER_BIT;
      _gl.clear(mode);
    }

    for (ShaderProgram prg in _programs) {
      prg.draw(perspar, lights, camera, _pMatrix, stats);
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
}

class ChronosGL {
  static WEBGL.RenderingContext globalGL;
  static bool useElementIndexUint = false;
  var elementIndexUintExt;

  WEBGL.RenderingContext gl;

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

  RenderingPhase GetLastRenderPhase() {
      return _renderPhases.last;
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
    //LogInfo(
    //    "New perspective: ${perspar.width} ${perspar.height} ${perspar.fov}");
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

  void setLineWidth(int w) {
    gl.lineWidth(w);
  }

}
