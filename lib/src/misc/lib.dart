library misc;

// This library does not depend on "dart:html"
import 'dart:typed_data';
import 'dart:math' as Math;
import 'dart:html' as HTML;

import 'package:vector_math/vector_math.dart' as VM;

import "../base/lib.dart";
import "../core/lib.dart";
import "../shader/lib.dart";
import "../shape/lib.dart";
import "../scene/lib.dart";
import "../animation/lib.dart";

/// # Layer: Misc (uses Base Layer, Core Layer, Scene Layer, Shape Layer, Shader Layer, Animation Layer)
/// The **misc layer** contains miscellaneous helpers

part "bone_visualizer.dart";
part "light_visualizer.dart";
part "fps_meter.dart";
part "example_helper.dart";
part "shadowmap.dart";