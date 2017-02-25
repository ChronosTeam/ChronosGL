library chronosgl;

import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;

import 'package:vector_math/vector_math.dart' as VM;

import 'src/base/lib.dart';
export 'src/base/lib.dart';

import 'src/core/lib.dart';
export 'src/core/lib.dart';

import 'src/shape/lib.dart';
export 'src/shape/lib.dart';

export "src/shader/lib.dart";
export "src/importer/lib.dart";
export 'src/animation/lib.dart';
export 'src/webhelper/lib.dart';

part "src/pickray.dart";
part "src/input.dart";

part "src/utils.dart";


final Material EmptyMaterial = new Material("empty-mat");

Node UnitNode(ChronosGL cgl) {
  final MeshData UnitQuad = ShapeQuad(cgl, 1);
  return new Node("unit-mesh", UnitQuad, EmptyMaterial);
}

