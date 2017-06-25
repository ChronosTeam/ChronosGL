library importer;

// This library does not depend on "dart:html" or core

import 'package:vector_math/vector_math.dart' as VM;

import "../core/lib.dart";
import "../animation/lib.dart";

/// # Layer: Importer (uses Core Layer)
/// contains helpers reading various mesh file formats into **GeometryBuilders**

part "util.dart";
part "wavefront.dart";
part "threejs.dart";
part "assimp2json.dart";
