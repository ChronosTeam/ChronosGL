import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;

List<ShaderObject> createNormal2ColorShader() {
  return [
    new ShaderObject("Normal2Color")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddVaryingVar(vColors)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        StdVertexBody,
        "vColors = normalize(${aNormal} / 2.0 + vec3(0.5) );"
      ]),
    new ShaderObject("Normal2ColorF")
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${vColors}, 1.0 );"])
  ];
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(25.0, -45.0, 0.3);
  Perspective perspective = new Perspective(orbit, 0.1, 2520.0);
  RenderPhase phase = new RenderPhase("main", chronosGL.gl);
  RenderProgram prg = phase.createProgram(createNormal2ColorShader());

  List<MeshData> mymd = new List<MeshData>();

  loadObj("../ct_logo.obj").then((MeshData ctLogo) {
    mymd.add(ctLogo);
    mymd.add(Shapes.Cylinder(1.0, 1.0, 2.0, 16));
    mymd.add(Shapes.Cube());
    Material mat = new Material("mat");
    // No deduping
    for (var i = 0; i < mymd.length; i++) {
      MeshData md = mymd[i];
      // the logo is missing normals so we generate them here, but wait, why are the colors all wrong ?
      md.generateNormalsAssumingTriangleMode();
      Node mesh = new Node(md.name, md, mat);
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
      Node mesh = new Node(md.name, md, mat);
      if (md == ctLogo) {
        mesh.rotX(3.14 / 2);
        mesh.rotZ(3.14);
      }
      mesh.setPos(-5.0 + i * 7, 4.0, 0.0);
      prg.add(mesh);
    }

    void resolutionChange(HTML.Event ev) {
      int w = canvas.clientWidth;
      int h = canvas.clientHeight;
      canvas.width = w;
      canvas.height = h;
      print("size change $w $h");
      perspective.AdjustAspect(w, h);
      phase.viewPortW = w;
      phase.viewPortH = h;
    }

    resolutionChange(null);
    HTML.window.onResize.listen(resolutionChange);

    double _lastTimeMs = 0.0;
    void animate(timeMs) {
      timeMs = 0.0 + timeMs;
      double elapsed = timeMs - _lastTimeMs;
      _lastTimeMs = timeMs;
      orbit.azimuth += 0.001;
      orbit.animate(elapsed);
      phase.draw([perspective]);
      HTML.window.animationFrame.then(animate);
    }

    Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
      animate(0.0);
    });
  });
}
