library core;

// This library does not depend on "dart:html"
// It would be nice if we could also break the dependency on dart:web_gl
// for easier testing.
import 'dart:collection';
import 'dart:typed_data';
import 'dart:math' as Math;
import 'dart:web_gl' as WEBGL; // only chronosgl.dart uses WEBGL

import 'package:vector_math/vector_math.dart' as VM;

/// # Layer: Core (dart:web_gl)
/// The **core layer** contains all of the fundamental abstractions like:
/// NamedEntity, Uniforms, Spacial, Illumination, Perspective,
/// Camera, RenderObject, RenderProgram, ChronosGL, etc.
///

/// ## Canonical Names:
/// Each attribute/uniform has a **canonical name**. By convention the first
/// letter of the name signals the type of input:
///
/// * a: "Attribute" (aPosition, aTexUV, aNormal, ...)
/// * u: "Uniform" (uPerspectiveViewMatrix, uTexture, ...)
/// * c: "Controls" (cDepthWrite, cDepthTest, cBlendEquation, ...)
/// * v: "Varying Attributes"
/// * i: "Indexer Attributes"
///
/// A large number of **canonical names** are already registered by default.
/// Additional ones required by custom shaders can be registered at startup.
/// See lib/src/base/shader_object.dart for a list.

part "render_program.dart";
part "mesh_data.dart";
part "textures.dart";
part "material.dart";
part "framebuffer.dart";
part "chronosgl.dart";
part "constants.dart";
part 'shader_object.dart';
part "abstractions.dart";
part "spatial.dart";
part "projection.dart";
part "geometry_builder.dart";
part "illumination.dart";

typedef GlBuffer = WEBGL.Buffer;
typedef GlFramebuffer = WEBGL.Framebuffer;
typedef GlVertexArrayObject = WEBGL.VertexArrayObject;
typedef GlTexture = WEBGL.Texture;
typedef GlTransformFeedback = WEBGL.TransformFeedback;
typedef GlUniformLocation = WEBGL.UniformLocation;
typedef GlProgram = WEBGL.Program;
typedef GlSampler = WEBGL.Sampler;
typedef GlShader = WEBGL.Shader;

int gLogLevel = 0;

void LogInfo(String s) {
  if (gLogLevel > 0) print("I: " + s);
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
