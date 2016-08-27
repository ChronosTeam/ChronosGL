import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';

import 'package:vector_math/vector_math.dart' as VM;

import 'dart:web_gl' as WEBGL;

void main() {
  StatsFps fps = new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  var ext = GetGlExtensionStandardDerivatives(chronosGL.gl);
  if (ext == null) HTML.window.alert("OES_standard_derivatives not supported");
  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  Perspective perspective = new Perspective(orbit);
  RenderingPhase phase = new RenderingPhase(chronosGL.gl, perspective);
  ShaderProgram program = phase.createProgram(createWireframeShader());
  final Material matWireframe = new Material()
    ..SetUniform(uColorAlpha, new VM.Vector4(1.0, 1.0, 0.0, 1.0))
    ..SetUniform(uColorAlpha2, new VM.Vector4(0.0, 0.0, 0.0, 0.5))
    ..blend = true;
  {
    Mesh ico = new Mesh(
        Shapes.Icosahedron(2)..generateWireframeCenters(), matWireframe)
      ..setPos(0.0, 0.0, 0.0);
    program.add(ico);
  }

  {
    Mesh cube =
        new Mesh(Shapes.Cube()..generateWireframeCenters(), matWireframe)
          ..setPos(-5.0, 0.0, -5.0)
          ..name = "cube";
    program.add(cube);
  }

  {
    Mesh cyl = new Mesh(
        Shapes.CylinderWireframeFriendly(3.0, 4.0, 2.0, 16)
          ..generateWireframeCenters(),
        matWireframe)..setPos(5.0, 0.0, -5.0);
    program.add(cyl);
  }

  {
    Mesh quad =
        new Mesh(Shapes.Quad(2)..generateWireframeCenters(), matWireframe)
          ..setPos(-5.0, 0.0, 5.0)
          ..name = "quad";
    program.add(quad);
  }

  {
    Mesh torus = new Mesh(
        Shapes.TorusKnot(radius: 1.0, tube: 0.4)..generateWireframeCenters(),
        matWireframe)..setPos(5.0, 0.0, 5.0);
    program.add(torus);
  }

  chronosGL.gl.enable(WEBGL.CULL_FACE);

  double _lastTimeMs = 0.0;
  void animate(double timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    perspective.Adjust(canvas);
    phase.draw([]);
    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
