import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';

// A very simple shaders - many other are available out of the box.
List<ShaderObject> demoShader() {
  return [
    new ShaderObject("demoVertexShader")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vColor)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBody([
        """
        void main(void) {
          gl_Position = ${uPerspectiveViewMatrix} *
                        ${uModelMatrix} *
                        vec4(${aVertexPosition}, 1.0);
          ${vColor}.r = sin(${aVertexPosition}.x)/2.0+0.5;
          ${vColor}.g = cos(${aVertexPosition}.y)/2.0+0.5;
          ${vColor}.b = sin(${aVertexPosition}.z)/2.0+0.5;
        }
        """
      ]),
    new ShaderObject("demoFragmentShader")
      ..AddVaryingVar(vColor)
      ..SetBodyWithMain(["gl_FragColor.rgb = ${vColor};"])
  ];
}

void main() {
  // The canvas is what we render the 3d scene into.
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  // Make sure canvas is really full screen
  final int w = canvas.clientWidth;
  final int h = canvas.clientHeight;
  canvas.width = w;
  canvas.height = h;

  // Create a ChronosGL object for the canvas.
  ChronosGL chronosGL = new ChronosGL(canvas);

  // Create camera, listening to 'body' element for control inputs.
  OrbitCamera orbit = new OrbitCamera(5.0, 0.0, 0.0, HTML.document.body);
  // Create a perspective. We use a combined view+perspective matrix,
  // so the camera is part of the perspective.
  Perspective perspective = new Perspective(orbit);
  perspective.AdjustAspect(w, h);

  // Create a phase to run our two shader programs.
  RenderPhase phase = new RenderPhase("main", chronosGL);
  // Use the entire canvas.
  phase.viewPortW = w;
  phase.viewPortH = h;
  // Create the first shader programs and add it to the phase.
  RenderProgram basic = phase.createProgram(demoShader());

  // Make a torus and add it to the first program,
  Material mat = new Material("torus-mat");
  Node torus = new Node(
      "torus", ShapeTorusKnot(chronosGL, radius: 1.0, tube: 0.4), mat);
  basic.add(torus);

  // Create the second program and the point sprites. The details are
  // hidden in the library functions.
  RenderProgram sprites = phase.createProgram(createPointSpritesShader());
  sprites.add(Utils.MakeParticles(chronosGL, 2000));

  // Main loop body
  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    // timeMs can be both int or double - force a double.
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    // animate the camera a little
    orbit.azimuth += 0.001;
    // allow the camera to also reflect mouse movement.
    orbit.animate(elapsed);

    // Draw both the knot and point sprites with the given perspective.
    phase.draw([perspective]);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
 
