library shapes;

import 'dart:math' as Math;
import 'package:vector_math/vector_math.dart' as VM;

/// The shapes layer contains helpers for create GeometryBuilder
/// objects for basic shapes like cubes and cylinders.
/// Higher layer contain wrappers that generate the corresponding
/// MeshData objects from them.
///
/// Dependencies:
/// base layer (for GeometryBuilder)
import '../base/lib.dart';

part "plane.dart";
part "cylinder.dart";
part "cube.dart";
part "torusknot.dart";
part "icosahedron.dart";
