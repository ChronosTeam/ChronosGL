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

abstract class ShaderUniformProvider {
  void UpdateUniforms(ShaderProgramInputs input);
}

abstract class Projection extends ShaderUniformProvider {
  int width = 0;
  int height = 0;
}

class Perspective extends Projection {
  final Camera _camera;
  int fov = 50; // horizobtal fov in deg  divided by 2

  int _lastFov_ = 49;
  int _lastWidth = 0;
  int _lastHeight = 0;

  double near = 0.1;
  double far = 1000.0;

  Perspective(this._camera, [this.near = 0.1, this.far = 1000.0]);
  final VM.Matrix4 _perspectiveViewMatrix = new VM.Matrix4.identity();
  final VM.Matrix4 _viewMatrix = new VM.Matrix4.identity();
  final VM.Matrix4 _mat = new VM.Matrix4.zero();

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

  bool _PerspectiveHasChanged(HTML.CanvasElement canvas) {
    return _lastWidth != width ||
        _lastHeight != height ||
        _lastWidth != canvas.clientWidth ||
        _lastHeight != canvas.clientHeight ||
        _lastFov_ != fov;
  }

  void _SetupNewPerspective(HTML.CanvasElement canvas) {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    _lastWidth = canvas.clientWidth;
    _lastHeight = canvas.clientHeight;
    _lastFov_ = fov;
    //LogInfo(
    //    "New perspective: ${perspar.width} ${perspar.height} ${perspar.fov}");
    UpdatePerspective();
  }

  void Adjust(HTML.CanvasElement canvas) {
    if (_PerspectiveHasChanged(canvas)) {
      _SetupNewPerspective(canvas);
    }
  }

  void UpdatePerspective() {
    VM.setPerspectiveMatrix(
        _mat, fov * Math.PI / 180.0, width / height, near, far);
    /*
    //m.setFrom(_mat);
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
    */
  }

  VM.Matrix4 GetPerspectiveMatrix() {
    return _mat;
  }

  void getPerspectiveMatrix(VM.Matrix4 m) {
    m.setFrom(_mat);
  }

  bool IntersectSphere(VM.Vector3 center, double radius) {
    for (VM.Plane plane in _cullPlanes) {
      double d = plane.distanceToVector3(center);
      if (d < -radius) return false;
    }
    return true;
  }

  void UpdateUniforms(ShaderProgramInputs inputs) {
    inputs.SetUniformVal(uCameraNear, near);
    inputs.SetUniformVal(uCameraFar, far);
    inputs.SetUniformVal(
        uCanvasSize, new VM.Vector2(width.toDouble(), height.toDouble()));
    inputs.SetUniformVal(uEyePosition, _camera.getEyePosition());
    _camera.getViewMatrix(_viewMatrix);
    getPerspectiveMatrix(_perspectiveViewMatrix);
    _perspectiveViewMatrix.multiply(_viewMatrix);
    inputs.SetUniformVal(uPerspectiveViewMatrix, _perspectiveViewMatrix);
  }
}

abstract class Drawable {
  void draw(
      ShaderUniformProvider dynpar, List<Light> lights, List<DrawStats> stats);
}

class RenderingPhase {
  final WEBGL.RenderingContext _gl;
  ChronosFramebuffer _framebuffer;
  final List<ShaderProgram> _programs = [];
  //final VM.Matrix4 _pMatrix = new VM.Matrix4.identity();
  bool clearColorBuffer = true;
  bool clearDepthBuffer = true;
  int viewPortX = 0;
  int viewPortY = 0;
  List<DrawStats> stats = null;
  final Projection _perspective;

  RenderingPhase(this._gl, this._perspective, [this._framebuffer = null]);

  void SetFramebuffer(ChronosFramebuffer fb) {
    _framebuffer = fb;
  }

  void draw(List<Light> lights) {
    if (_framebuffer == null) {
      _gl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
    } else {
      _gl.bindFramebuffer(WEBGL.FRAMEBUFFER, _framebuffer.framebuffer);
    }
    _gl.viewport(viewPortX, viewPortY, _perspective.width, _perspective.height);

    if (clearColorBuffer || clearDepthBuffer) {
      int mode = 0;
      if (clearColorBuffer) mode |= WEBGL.COLOR_BUFFER_BIT;
      if (clearDepthBuffer) mode |= WEBGL.DEPTH_BUFFER_BIT;
      _gl.clear(mode);
    }

    for (ShaderProgram prg in _programs) {
      prg.draw(_perspective, lights, stats);
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

  //Perspective perspar = new Perspective();
  List<Light> lights = [];

  ChronosGL(this._canvas,
      {bool preserveDrawingBuffer: false, bool useElementIndexUint: false}) {
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
    // fix a bug in current chrome v.27

    // Event setup
    _canvas.onDragStart.listen((HTML.MouseEvent event) {
      event.preventDefault();
    });

    setUpEventCapture(_canvas);
  }

  WEBGL.RenderingContext getRenderingContext() {
    return gl;
  }

  HTML.CanvasElement getCanvas() {
    return _canvas;
  }

  void setLineWidth(int w) {
    gl.lineWidth(w);
  }
}
