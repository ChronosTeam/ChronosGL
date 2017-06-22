library base;

// This library does not depend on "dart:html" nor does
// in use the ChronosGL object q
import 'dart:math' as Math;
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

/// # Layer: Base
/// The **base layer** contains many of the fundamental abstractions like:
/// NamedEntity, Uniforms, Spacial, Node. Illumination, Perspective,
/// Camera, etc
///

/// ## Canonical Names:
/// Each attribute/uniform has a **canonical name**. By convention the first
/// letter of the name signals the type of input:
///
/// * a: "Attribute" (aVertexPosition, aTextureCoordinates, aNormal, ...)
/// * u: "Uniform" (uPerspectiveViewMatrix, uTexture, ...)
/// * c: "Controls" (cDepthWrite, cDepthTest, cBlendEquation, ...)
/// * v: "Varying Attributes"
/// * i: "Indexer Attributes"
//
/// A large number of **canonical names** are already registered by default.
/// Additional ones required by custom shaders can be registered at startup.
/// See lib/src/base/shader_object.dart for a list.
part 'shader_object.dart';
part "abstractions.dart";
part "spatial.dart";
part "projection.dart";
part "camera.dart";
part "geometry_builder.dart";
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
