library chronosgl;

import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;

import 'dart:async';
import 'dart:convert';

import 'package:vector_math/vector_math.dart' as VM;

import 'src/base/lib.dart';
export 'src/base/lib.dart';

import 'src/core/lib.dart';
export 'src/core/lib.dart';

import 'src/shapes/lib.dart';
export 'src/shapes/lib.dart';

export "src/shader/lib.dart";
export "src/importer/lib.dart";
export 'src/animation/lib.dart';
export 'src/webhelper/lib.dart';

part "src/pickray.dart";
part "src/input.dart";
part "src/load_obj.dart";

part "src/utils.dart";

const String NO_WEBGL_MESSAGE = """
Calling canvas.getContext("experimental-webgl") failed,
make sure you run on a computer that supports WebGL.
Test here: http://get.webgl.org/
""";

final Material EmptyMaterial = new Material("empty-mat");

Node UnitNode(WEBGL.RenderingContext gl) {
  final MeshData UnitQuad = ShapeQuad(gl, 1);
  return new Node("unit-mesh", UnitQuad, EmptyMaterial);
}

class ChronosGL {
  WEBGL.RenderingContext gl;

  final HTML.CanvasElement _canvas;

  ChronosGL(this._canvas, {bool preserveDrawingBuffer: false}) {
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
      throw new Exception(NO_WEBGL_MESSAGE);
    }

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
