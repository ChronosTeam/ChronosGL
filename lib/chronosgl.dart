library chronosgl;

import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;

import 'dart:async';
import 'dart:convert';

import 'package:vector_math/vector_math.dart' as VM;

import 'src/core/lib.dart';
export 'src/core/lib.dart';

import 'src/shapes/lib.dart';
export 'src/shapes/lib.dart';

export "src/shader/lib.dart";

part "src/pickray.dart";
part "src/input.dart";
part "src/load_obj.dart";

part "src/utils.dart";



final Material EmptyMaterial = new Material("empty-mat");

Node UnitNode( WEBGL.RenderingContext gl) {
  final MeshData UnitQuad = ShapeQuad(gl, 1);
  return new Node("unit-mesh", UnitQuad, EmptyMaterial);
}



class ChronosGL {
  var elementIndexUintExt;

  WEBGL.RenderingContext gl;

  // TODO: move this into a RenderingPhase
  final HTML.CanvasElement _canvas;

  ChronosGL(this._canvas,
      {bool preserveDrawingBuffer: false}) {
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
