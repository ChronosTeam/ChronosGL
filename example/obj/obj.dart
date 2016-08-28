import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;

import 'package:vector_math/vector_math.dart' as VM;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(25.0);
  Perspective perspective = new Perspective(orbit);

  RenderingPhase phase = new RenderingPhase("main", chronosGL.gl, perspective);
  ShaderProgram prg = phase.createProgram(createDemoShader());

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

  loadObj("../ct_logo.obj").then((MeshData md) {
    Material mat = new Material("mat");
    Mesh mesh = new Mesh(md.name, md, mat)..rotX(3.14 / 2);
    //mesh.rotY(3.14);
    Node n = new Node("wrapper", mesh);
    //n.invert = true;
    n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
    //n.matrix.scale(0.02);
    prg.add(n);
    animate(0.0);
  });
}
