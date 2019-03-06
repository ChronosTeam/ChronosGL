import 'dart:html' as HTML;
import 'dart:math' as Math;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

// A very simple shaders - many other are available out of the box.
// aPosition will be provided by the MeshData object `torus`
// uPerspectiveViewMatrix
// uPerspectiveViewMatrix will be provided by the Material object `materialBasic`
// uModelMatrix will be provided by the Material object `materialBasic`
final ShaderObject demoVertexShader = ShaderObject("demoVertexShader")
  ..AddAttributeVars([aPosition])
  ..AddVaryingVars([vColor])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBody([
    """
void main() {
    gl_Position = ${uPerspectiveViewMatrix} *
                  ${uModelMatrix} *
                  vec4(${aPosition}, 1.0);
    ${vColor}.r = sin(${aPosition}.x)/2.0+0.5;
    ${vColor}.g = cos(${aPosition}.y)/2.0+0.5;
    ${vColor}.b = sin(${aPosition}.z)/2.0+0.5;
}
"""
  ]);

final ShaderObject demoFragmentShader = ShaderObject("demoFragmentShader")
  ..AddVaryingVars([vColor])
  ..SetBody([
    """
void main() {
    ${oFragColor}.rgb = ${vColor};
}
    """
  ]);

void RandomPointOnUnitSphere(VM.Vector3 out, Math.Random rng) {
  while (true) {
    double x = rng.nextDouble() * 2.0 - 1.0;
    double y = rng.nextDouble() * 2.0 - 1.0;
    double sq = x * x + y * y;
    if (sq >= 1.0) continue;
    double rt = Math.sqrt(1.0 - sq);
    out.setValues(2.0 * x * rt, 2.0 * y * rt, 1.0 - 2.0 * sq);
    return;
  }
}

class CameraShaker {
  CameraShaker(this._camera, this._rng);

  void Shake(double amplitude) {
    Unshake();
    RandomPointOnUnitSphere(_offset, _rng);
    _offset.scale(amplitude);
    _camera.addPosFromVec(_offset);
  }

  void Unshake() {
    _offset.scale(-1.0);
    _camera.addPosFromVec(_offset);
    _offset.setZero();
  }

  final VM.Vector3 _offset = new VM.Vector3.zero();
  final Math.Random _rng;
  final Spatial _camera;
}

void main() {
  // The canvas is what we render the 3d scene into.
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');

  gLogLevel = 1; // enable more logging
  // Create a ChronosGL object for the canvas.
  final ChronosGL cgl = ChronosGL(canvas);

  // Create interactive camera, listening to 'body' element for
  // control inputs like mouse drag events.
  final OrbitCamera orbit = OrbitCamera(5.0, 0.0, 0.0, HTML.document.body);
  // Create a perspective. We use a combined view+perspective matrix,
  // which is obtained by combining te view matrix from the camera with
  // the perspective matrix.
  // The perspective also make sure canvas has full screen resolution
  // and that we respond to resize events.
  final PerspectiveResizeAware perspective =
      PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  // Create the main shader program for displaying the torus.
  final RenderProgram prog =
      RenderProgram("basic", cgl, demoVertexShader, demoFragmentShader);

  // Create the Material, basically a container for uniforms, which provides
  // uModelMatrix and controls basic settings for depth buffers and blending.
  final Material material = Material("torus-mat")
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());
  // Make a torus and add it to the first program providing the
  // aPosition attribute.
  final MeshData torus = ShapeTorusKnot(prog, radius: 1.0, tubeRadius: 0.4);

  // Create the second shader program and the point sprites. The details are
  // hidden in the library functions.
  final RenderProgram progSprites = RenderProgram(
      "basic", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
  final Material materialStars = Utils.MakeStarMaterial(cgl)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());
  final MeshData stars = Utils.MakeStarMesh(progSprites, 2000, 100.0);

  final Math.Random rng = Math.Random(0);
  final CameraShaker shaker = new CameraShaker(orbit, rng);
  // Main loop body
  double _lastShakeMs = 0.0;
  double _lastTimeMs = 0.0;
  const  double shakeIntervalMs = 2000.0;
  const  double shakeDurationMs = 500.0;

  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    // animate the camera a little
    orbit.azimuth += 0.003;
    // allow the camera to also reflect mouse movement.
    orbit.animate(elapsed);

    final double shakeAgeMs = _lastTimeMs - (_lastShakeMs + shakeIntervalMs);

    if (shakeAgeMs >= 0.0) {
      if (shakeAgeMs >= shakeDurationMs) {
        shaker.Unshake();
        _lastShakeMs = _lastTimeMs;
      }

      shaker.Shake((500 - shakeAgeMs) * 0.0001);
    }

    // use default framebuffer which also auto clears itself
    prog.Draw(torus, [perspective, material]);
    progSprites.Draw(stars, [perspective, materialStars]);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
