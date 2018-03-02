import 'package:chronosgl/chronosgl.dart';
import 'dart:math' as Math;
import 'dart:html' as HTML;

import 'package:vector_math/vector_math.dart' as VM;

final ShaderObject fireworksVertexShader = new ShaderObject("FireWorksV")
  ..AddAttributeVars([aPosition, aNormal])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uTime])
  ..SetBodyWithMain([
    """
      float t = mod(${uTime}, 5.0);
      vec3 vp = ${aPosition};
      if( t < 3.0) {
       vp.y = t;
      } else {
       vp.y = 3.0;
       vp += normalize(${aNormal})*(t-3.0);
      }
      gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(vp, 1.0);
      gl_PointSize = 100.0/gl_Position.z;
"""
  ]);

final ShaderObject fireworksFragmentShader = new ShaderObject("FireWorksF")
  ..AddUniformVars([uTime, uColor, uTexture])
  ..SetBodyWithMain([
    """
      ${oFragColor} = texture(${uTexture}, gl_PointCoord);
      float t = mod(${uTime}, 5.0);
      if( t < 3.0) {
         //gl_FragColor.x = 1.0;
      } else {
         //gl_FragColor.rgb = ${uColor};
         ${oFragColor}.a -= (t-3.0);
      }
"""
  ]);

MeshData getRocket(RenderProgram prog) {
  int numPoints = 200;
  Math.Random rand = new Math.Random();

  List<VM.Vector3> vertices = [];
  List<VM.Vector3> normals = [];
  for (var i = 0; i < numPoints; i++) {
    vertices.add(new VM.Vector3(0.0, 0.0, 0.0));
    normals.add(new VM.Vector3(rand.nextDouble() - 0.5, rand.nextDouble() - 0.5,
        rand.nextDouble() - 0.5));
  }

  return prog.MakeMeshData("firefwork-particles", GL_POINTS)
    ..AddVertices(FlattenVector3List(vertices))
    ..AddAttribute(aNormal, FlattenVector3List(normals), 3);
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  // Make sure canvas is really full screen
  final int w = canvas.clientWidth;
  final int h = canvas.clientHeight;
  canvas.width = w;
  canvas.height = h;

  ChronosGL cgl = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(15.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);
  perspective.AdjustAspect(w, h);

  final RenderProgram progSprites = new RenderProgram(
      "basic", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);

  final RenderProgram progFireworks = new RenderProgram(
      "fireworks", cgl, fireworksVertexShader, fireworksFragmentShader);

  // used for both stars and fireworks
  final Material material = Utils.MakeStarMaterial(cgl)
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity())
    ..SetUniform(uColor, ColorRed);

  final MeshData stars = Utils.MakeStarMesh(progSprites, 2000, 100.0);
  final MeshData rocket = getRocket(progFireworks);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    material.ForceUniform(uTime, timeMs / 1000.0);

    progSprites.Draw(stars, [perspective, material]);
    progFireworks.Draw(rocket, [perspective, material]);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
