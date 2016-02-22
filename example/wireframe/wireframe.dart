import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';

import 'dart:web_gl' as WEBGL;
import 'dart:html';

void main() {
  StatsFps fps = new StatsFps(document.getElementById("stats"), "blue", "gray");
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', useFramebuffer: false);
  var ext = GetGlExtensionStandardDerivatives(chronosGL.gl);
  if (ext == null) window.alert("OES_standard_derivatives not supported");
 
  chronosGL.gl.enable(WEBGL.CULL_FACE);
  
  chronosGL.addAnimateCallback('fps', (double elapsed, double time) {
    fps.UpdateFrameCount(time);
  });
  
  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0, 10.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('OrbitCam', orbit);

  ShaderProgram program = chronosGL.createProgram(createWireframeShader());
  final Material matWireframe = new Material()
    ..SetUniform(uColorAlpha, new Vector4(1, 1, 0, 1.0))
    ..SetUniform(uColorAlpha2, new Vector4(0, 0, 0, 0.5))
    ..blend = true;
  {
    Mesh ico = new Mesh(Shapes.Icosahedron(2)..generateWireframeCenters(), matWireframe)..setPos(0, 0, 0);
    program.add(ico);
  }
  
  {
    Mesh cube = new Mesh(Shapes.Cube()..generateWireframeCenters(), matWireframe)
      ..setPos(-5, 0, -5)
      ..name = "cube";
    program.add(cube);
  }

  {
    Mesh cyl = new Mesh(
        Shapes.CylinderWireframeFriendly(3.0, 4.0, 2.0, 16)..generateWireframeCenters(),
        matWireframe)..setPos(5, 0, -5);
    program.add(cyl);
  }
  
   
  {
    Mesh quad =
        new Mesh(Shapes.Quad(2)..generateWireframeCenters(), matWireframe)
          ..setPos(-5, 0, 5)
          ..name = "quad";
    program.add(quad);
  }
  
  {
    Mesh torus = new Mesh(
        Shapes.TorusKnot(radius: 1.0, tube: 0.4)..generateWireframeCenters(),
        matWireframe)..setPos(5, 0, 5);
    program.add(torus);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
