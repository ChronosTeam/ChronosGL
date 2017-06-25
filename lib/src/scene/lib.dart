library scene;

// This library does not depend on "dart:html"
// for easier testing.
import 'dart:typed_data';
import 'dart:web_gl' as WEBGL;  // only chronosgl.dart uses WEBGL

import 'package:vector_math/vector_math.dart' as VM;

import "../core/lib.dart";

/// # Layer: Scene (uses Base Layer, Core Layer, dart:web_gl)
/// The **scene layer** adds abstractions to the *core layer**
/// related to scene graphs.
///
part "node.dart";
part "render_phase.dart";
