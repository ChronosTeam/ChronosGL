library core;

// This library does not depend on "dart:html"
// It would be nice if we could also break the dependency on dart:web_gl
// for easier testing.
import 'dart:typed_data';
import 'dart:async';
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;

import 'package:vector_math/vector_math.dart' as VM;

import "../base/lib.dart";
export "../base/lib.dart";

part "extensions.dart";
part "node.dart";
part "shader_program.dart";
part "render_program.dart";
part "mesh_data.dart";
part "textures.dart";
part "material.dart";
part "shader_utils.dart";
part "framebuffer.dart";
part "render_phase.dart";


