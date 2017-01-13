library base;

// This library does not depend on "dart:html" nor "dart:webgl"
// It would be nice if we could also break the dependency on dart:web_gl
// for easier testing.

import 'dart:math' as Math;
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

part 'shader_object.dart';
part "abstractions.dart";
part "spatial.dart";
part "projection.dart";
part "camera.dart";
part "geometry_builder.dart";
part "node.dart";
part "render_program.dart";
part "illumination.dart";

void LogInfo(String s) {
  print("I: " + s);
}

void LogDebug(String s) {
  //print("D:" + s);
}

void LogError(String s) {
  print("E:" + s);
}

void LogWarn(String s) {
  print("W:" + s);
}

