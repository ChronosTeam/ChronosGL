import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;

import 'package:vector_math/vector_math.dart' as VM;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  VM.Vector3 posLight1 = new VM.Vector3(0.0, 50.0, 0.0);
  VM.Vector3 colWhite = new VM.Vector3(0.0, 0.0, 1.0);
  VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);

  Light light = new Light.Directional(0, posLight1, colRed, colWhite);

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  final int w = canvas.clientWidth ~/ 2;
  final int h = canvas.clientHeight;

  Perspective perspective = new Perspective(orbit);

  // using RGBA is absolutely crucial since we store floats
  // in a 4 byte fix-point format where the most significant
  // byte ends up in the A chanel.
  ChronosFramebuffer shadowBuffer =
      new ChronosFramebuffer(chronosGL.gl, w, h, WEBGL.RGBA);

  //Projection shadowProjection =
  //   new Orthographic(orbit, -100.0, 100.0, -100.0, 0.0, 100.0);

  ShadowProjection shadowProjection =
      new ShadowProjection(light, -20.0, 20.0, -20.0, 0.0, 100.0);
  shadowProjection.AdjustAspect(w, h);

  RenderingPhase phaseComputeShadow =
      new RenderingPhase("compute-shadow", chronosGL.gl, shadowBuffer);
  phaseComputeShadow.viewPortW = w;
  phaseComputeShadow.viewPortH = h;
  ShaderProgram shadowMap =
      phaseComputeShadow.createProgram(createShadowShader());

  RenderingPhase phaseDisplayShadow =
      new RenderingPhase("display-shadow", chronosGL.gl);

  ShaderProgram copyToScreen =
      phaseDisplayShadow.createProgram(createCopyShaderForShadow());

  copyToScreen.SetUniform(uTextureSampler, shadowBuffer.colorTexture);
  copyToScreen.add(UnitMesh);

  RenderingPhase phaseMain = new RenderingPhase("main", chronosGL.gl);
  phaseMain.clearColorBuffer = false;
  ShaderProgram basic =
      phaseMain.createProgram(createLightShaderBlinnPhongWithShadow());

  basic.SetUniform(uShadowSampler0, shadowBuffer.colorTexture);

  Texture solid = new CanvasTexture.SolidColor("red-solid", "red");
  final Material mat1 = new Material("mat1")
    ..SetUniform(uTextureSampler, solid)
    ..SetUniform(uColor, new VM.Vector3(0.0, 0.0, 1.0));

  final Material mat2 = new Material("mat2")
    ..SetUniform(uTextureSampler, solid)
    ..SetUniform(uColor, new VM.Vector3(1.0, 0.0, 0.0));

  final Material mat3 = new Material("mat3")
    ..SetUniform(uTextureSampler, solid)
    ..SetUniform(uColor, new VM.Vector3(0.8, 0.8, 0.8));

  {
    Mesh ico = new Mesh(
        "sphere",
        Shapes.Icosahedron(3)..generateNormalsAssumingTriangleMode(),
        mat1)..setPos(0.0, 0.0, 0.0);
    shadowMap.add(ico);
    basic.add(ico);
  }
  {
    Mesh cube = new Mesh("cube", Shapes.Cube(), mat2)..setPos(-5.0, 0.0, -5.0);
    shadowMap.add(cube);
    basic.add(cube);
  }

  {
    Mesh cyl = new Mesh(
        "cylinder",
        Shapes.Cylinder(3.0, 6.0, 2.0, 32)
          ..generateNormalsAssumingTriangleMode(),
        mat2)..setPos(5.0, 0.0, -5.0);
    shadowMap.add(cyl);
    basic.add(cyl);
  }

  /*
  {
    Mesh torus = new Mesh(Shapes.TorusKnot(radius: 1.0, tube: 0.4)..generateNormalsAssumingTriangleMode(), mat2)
      ..setPos(5.0, 0.0, 5.0);
    program.add(torus);
    basic.add(torus);
  }
*/
  {
    // plane
    Mesh cube = new Mesh("cube", Shapes.Cube(x: 20.0, y: 0.1, z: 20.0), mat3)
      ..setPos(0.0, -10.0, 0.0);
    shadowMap.add(cube);
    basic.add(cube);
  }

  // Create sphere representing the light source
  ShaderProgram fixedShaderPrg =
      phaseMain.createProgram(createSolidColorShader());
  Material icoMat = new Material("sphere")
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));
  Mesh ico1 = new Mesh("spehere", Shapes.Icosahedron(), icoMat)
    ..setPosFromVec(posLight1);

  fixedShaderPrg.add(ico1);

  double _lastTimeMs = 0.0;

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    w = w ~/ 2;
    perspective.AdjustAspect(w, h);
    phaseMain.viewPortW = w;
    phaseMain.viewPortH = h;
    phaseDisplayShadow.viewPortW = w;
    phaseDisplayShadow.viewPortH = h;
    phaseDisplayShadow.viewPortX = phaseMain.viewPortW;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);

    // Compute the shadow map
    phaseComputeShadow.draw([shadowProjection, light]);
    // show the shadow map
    phaseDisplayShadow.draw([shadowProjection]);
    // render scene utilizing shadow map
    phaseMain.draw([perspective, shadowProjection, light]);

    HTML.window.animationFrame.then(animate);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    animate(0.0);
  });
}
