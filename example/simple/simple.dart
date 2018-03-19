import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';

// A very simple shaders - many other are available out of the box.
final ShaderObject demoVertexShader = new ShaderObject("demoVertexShader")
  ..AddAttributeVars([aPosition])
  ..AddVaryingVars([vColor])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBody([
    """
void main(void) {
    gl_Position = ${uPerspectiveViewMatrix} *
                  ${uModelMatrix} *
                  vec4(${aPosition}, 1.0);
    ${vColor}.r = sin(${aPosition}.x)/2.0+0.5;
    ${vColor}.g = cos(${aPosition}.y)/2.0+0.5;
    ${vColor}.b = sin(${aPosition}.z)/2.0+0.5;
}
"""
  ]);

final ShaderObject demoFragmentShader = new ShaderObject("demoFragmentShader")
  ..AddVaryingVars([vColor])
  ..SetBodyWithMain(["${oFragColor}.rgb = ${vColor};"]);

void main() {
  // The canvas is what we render the 3d scene into.
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');

  gLogLevel = 1; // enable more logging
  // Create a ChronosGL object for the canvas.
  ChronosGL cgl = new ChronosGL(canvas);

  // Create camera, listening to 'body' element for control inputs.
  OrbitCamera orbit = new OrbitCamera(5.0, 0.0, 0.0, HTML.document.body);
  // Create a perspective. We use a combined view+perspective matrix,
  // so the camera is part of the perspective.
  // The perspective also make sure canvas has full screen resolution
  // and that we respond to resize events.
  PerspectiveResizeAware perspective =
      new PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  // Create the main shader program for displaying the torus.
  RenderProgram progBasic =
      new RenderProgram("basic", cgl, demoVertexShader, demoFragmentShader);

  // Make a torus and add it to the first program,
  //UniformGroup uniformsBasic = new UniformGroup("torus-mat")
  Material materialBasic = new Material("torus-mat")
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity());
  MeshData torus = ShapeTorusKnot(progBasic, radius: 1.0, tubeRadius: 0.4);

  // Create the second shader program and the point sprites. The details are
  // hidden in the library functions.
  RenderProgram progSprites = new RenderProgram(
      "basic", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
  Material materialStars = Utils.MakeStarMaterial(cgl)
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity());
  MeshData stars = Utils.MakeStarMesh(progSprites, 2000, 100.0);

  // Main loop body
  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    // animate the camera a little
    orbit.azimuth += 0.003;
    // allow the camera to also reflect mouse movement.
    orbit.animate(elapsed);

    // use default framebuffer which also auto clears itself
    progBasic.Draw(torus, [perspective, materialBasic]);
    progSprites.Draw(stars, [perspective, materialStars]);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
