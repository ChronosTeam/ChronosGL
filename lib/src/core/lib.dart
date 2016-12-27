library core;

// This library does not depend on "dart:html"
// It would be nice if we could also break the dependency on dart:web_gl
// for easier testing.
import 'dart:typed_data';
import 'dart:async';
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;

import 'package:vector_math/vector_math.dart' as VM;

import "../shader/lib.dart";
export "../shader/lib.dart";


part "abstractions.dart";
part "node.dart";
part "shader_program.dart";
part "render_program.dart";
part "spatial.dart";
part "mesh_data.dart";
part "projection.dart";
part "camera.dart";
part "lighting.dart";
part "textures.dart";
part "material.dart";
part "shader_utils.dart";
part "framebuffer.dart";
part "render_phase.dart";

void LogInfo(String s) {
  print("I: " + s);
}

void LogDebugx(String s) {
  print("D:" + s);
}

void LogError(String s) {
  print("E:" + s);
}

void LogWarn(String s) {
  print("W:" + s);
}

bool globalUseElementIndexUint = false;
