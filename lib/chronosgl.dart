library chronosgl;

import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;

import 'dart:async';
import 'dart:convert';

import 'package:vector_math/vector_math.dart' as VM;

//import 'chronosshader.dart';
//export 'chronosshader.dart';

import 'src/core/lib.dart';
export 'src/core/lib.dart';

/*
part "src/node.dart";
part "src/textures.dart";
part "src/shader_utils.dart";
part "src/shader_program.dart";
part "src/render_program.dart";
part "src/spatial.dart";
part "src/camera.dart";
part "src/framebuffer.dart";
part "src/lighting.dart";
part "src/material.dart";
part "src/mesh_data.dart";
part "src/projection.dart";
*/
part "src/shapes/shapes.dart";
part "src/shapes/cylinder.dart";
part "src/shapes/cube.dart";
part "src/shapes/torusknot.dart";
part "src/shapes/icosahedron.dart";
part "src/pickray.dart";
part "src/input.dart";
part "src/load_obj.dart";

part "src/utils.dart";



final Material EmptyMaterial = new Material("empty-mat");

Node UnitNode( WEBGL.RenderingContext gl) {
  final MeshData UnitQuad = ShapeQuad(gl, 1);
  return new Node("unit-mesh", UnitQuad, EmptyMaterial);
}

/// RenderPhase represents a sequence of RenderPrograms.
class RenderPhase extends NamedEntity {
  final WEBGL.RenderingContext _gl;
  ChronosFramebuffer _framebuffer;
  final List<RenderProgram> _programs = [];
  //final VM.Matrix4 _pMatrix = new VM.Matrix4.identity();
  bool clearColorBuffer = true;
  bool clearDepthBuffer = true;
  int viewPortX = 0;
  int viewPortY = 0;
  int viewPortW = 0;
  int viewPortH = 0;

  RenderPhase(String name, this._gl, [this._framebuffer = null]) : super(name);

  void SetFramebuffer(ChronosFramebuffer fb) {
    _framebuffer = fb;
  }

  void draw(List<RenderInputProvider> inputs, [List<DrawStats> stats = null]) {
    if (_framebuffer == null) {
      _gl.bindFramebuffer(WEBGL.FRAMEBUFFER, null);
    } else {
      _gl.bindFramebuffer(WEBGL.FRAMEBUFFER, _framebuffer.framebuffer);
    }
    assert(viewPortW > 0 && viewPortH > 0);
    _gl.viewport(viewPortX, viewPortY, viewPortW, viewPortH);

    if (clearColorBuffer || clearDepthBuffer) {
      int mode = 0;
      if (clearColorBuffer) mode |= WEBGL.COLOR_BUFFER_BIT;
      if (clearDepthBuffer) mode |= WEBGL.DEPTH_BUFFER_BIT;
      _gl.clear(mode);
    }

    for (RenderProgram prg in _programs) {
      if (!prg.enabled) continue;
      for (RenderInputProvider p in inputs) {
        p.AddRenderInputs(prg);
      }
      prg.draw(stats);
      for (RenderInputProvider p in inputs) {
        p.RemoveRenderInputs(prg);
      }
    }
  }

  void AddRenderProgram(RenderProgram s) {
    _programs.add(s);
  }

  RenderProgram createProgram(List<ShaderObject> so) {
    ShaderProgram prg = new ShaderProgram(so[0].name, _gl, so[0], so[1]);
    RenderProgram pn = new RenderProgram(so[0].name, prg);
    AddRenderProgram(pn);
    return pn;
  }
}

class ChronosGL {
  static bool useElementIndexUint = false;
  var elementIndexUintExt;

  WEBGL.RenderingContext gl;

  // TODO: move this into a RenderingPhase
  final HTML.CanvasElement _canvas;

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
