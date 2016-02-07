import 'package:chronosgl/chronosgl.dart';

import 'dart:html';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas', useFramebuffer: false);
  var ext = GetGlExtensionStandardDerivatives(chronosGL.gl);
  if (ext == null) window.alert("OES_standard_derivatives not supported");

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0, 10.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('OrbitCam', orbit);

  Texture gradient = new ImageTexture("../gradient.jpg");

  ShaderProgram program = chronosGL.createProgram(createWireframeShader());
  final Material matGradient = new Material()
    ..SetUniform(uColor, new Vector(1, 0, 0))
    ..SetUniform(uTextureSampler, gradient);

  {
    Mesh ico = new Mesh(Shapes.Icosahedron(2)..generateWireframeCenters(), matGradient)..setPos(0, 0, 0);
    program.add(ico);
  }
  
  {
    Mesh cube = new Mesh(Shapes.Cube()..generateWireframeCenters(), matGradient)
      ..setPos(-5, 0, -5)
      ..name = "cube";
    program.add(cube);
  }

  {
    Mesh cyl = new Mesh(
        Shapes.Cylinder(3.0, 3.0, 2.0, 16)..generateWireframeCenters(),
        matGradient)..setPos(5, 0, -5);
    program.add(cyl);
  }
  
   
  {
    Mesh quad =
        new Mesh(Shapes.Quad(2)..generateWireframeCenters(), matGradient)
          ..setPos(-5, 0, 5)
          ..name = "quad";
    program.add(quad);
  }
  
  {
    Mesh torus = new Mesh(
        Shapes.TorusKnot(radius: 1.0, tube: 0.4)..generateWireframeCenters(),
        matGradient)..setPos(5, 0, 5);
    program.add(torus);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
