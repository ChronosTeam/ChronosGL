library misc;

// This library does not depend on "dart:html"
// It would be nice if we could also break the dependency on dart:web_gl
// for easier testing.
import 'dart:typed_data';
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;

import 'package:vector_math/vector_math.dart' as VM;

import "../core/lib.dart";
import "../shape/lib.dart";

/// # Layer: Misc (uses Base Layer, Core Layer, Shape Layerr, dart:web_gl)
/// The **misc layer** contains miscellaneous helpers

part "light_visualizer.dart";
