library shape;

import 'dart:math' as Math;
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:typed_data';

/// # Layer: Shape (uses Core Layer)
/// contains helpers for creating **GeometryBuilder**
/// objects for basic shapes like cubes and cylinders.
/// Higher layers contain wrappers that generate the corresponding
/// MeshData objects from them.

import '../core/lib.dart';

part "plane.dart";
part "cylinder.dart";
part "cube.dart";
part "torusknot.dart";
part "icosahedron.dart";
part "tube.dart";
