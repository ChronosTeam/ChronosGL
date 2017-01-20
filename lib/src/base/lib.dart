library base;

// This library does not depend on "dart:html" nor "dart:webgl"
// It would be nice if we could also break the dependency on dart:web_gl
// for easier testing.

import 'dart:math' as Math;
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;
/// # Layer: Base
/// The **base layer** contains many of the fundamental abstractions
/// like NamedEntity, RenderInputs, RenderInputProvider,
/// RenderProgram, Spacial, Node. Illumination, Perspective,
/// Camera, etc
///
/// It was broken out of the **core layer** because it does not have
/// dependencies on dart:web_gl' which simplifies unit testing.


/// ## Concept: Input
/// An **Input** is parameter to a program running on the GPU
///
/// The best known input types are Uniforms and Attributes but
/// ChronosGL goes a step further and also considers blending
/// modes, depth-test, etc. to be inputs as well.
///
/// Each input has a **canonical name**. By convention the first
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
