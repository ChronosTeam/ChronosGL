library scene;

// This library does not depend on "dart:html"
// for easier testing.
import 'package:vector_math/vector_math.dart' as VM;

import "../core/lib.dart";

/// # Layer: Scene (uses Core Layer)
/// The **scene layer** adds abstractions to the *core layer**
/// related to scene graphs.
///
part "node.dart";
part "render_phase.dart";
