import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  Perspective perspective = new Perspective(0.1, 2520.0);
  OrbitCamera orbit = new OrbitCamera(25.0, -45.0, 0.3);
  RenderingPhase phase = new RenderingPhase(chronosGL.gl, orbit, perspective);
  ShaderProgram prg = phase.createProgram(createNormal2ColorShader());

  List<MeshData> mymd = new List<MeshData>();

  loadObj("../ct_logo.obj").then((MeshData ctLogo) {
    mymd.add(ctLogo);
    mymd.add(Shapes.Cylinder(1.0, 1.0, 2.0, 16));
    mymd.add(Shapes.Cube());
    Material mat = new Material();
    // No deduping
    for (var i = 0; i < mymd.length; i++) {
      MeshData md = mymd[i];
      // the logo is missing normals so we generate them here, but wait, why are the colors all wrong ?
      md.generateNormalsAssumingTriangleMode();
      Mesh mesh = new Mesh(md, mat);
      if (md == ctLogo) {
        mesh.rotX(3.14 / 2);
        mesh.rotZ(3.14);
      }
      mesh.setPos(-5.0 + i * 7, -4.0, 0.0);
      prg.add(mesh);
    }

    // with deduping (sorry -this is currently not necessary because we de-dup most things implicitly)
    for (var i = 0; i < mymd.length; i++) {
      MeshData md = mymd[i];
      // because some vertices were reused for different faces, so we need to deduplicate the indices
      md
        //..deDeuplicateIndices()
        ..generateNormalsAssumingTriangleMode();
      Mesh mesh = new Mesh(md, mat);
      if (md == ctLogo) {
        mesh.rotX(3.14 / 2);
        mesh.rotZ(3.14);
      }
      mesh.setPos(-5.0 + i * 7, 4.0, 0.0);
      prg.add(mesh);
    }

    double _lastTimeMs = 0.0;
    void animate(timeMs) {
      double elapsed = timeMs - _lastTimeMs;
      _lastTimeMs = timeMs;
      orbit.azimuth += 0.001;
      orbit.animate(elapsed);
      perspective.Adjust(canvas);
      phase.draw([]);
      HTML.window.animationFrame.then(animate);
    }

    Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
      animate(0.0);
    });
  });
}
