import "dart:async";
import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

String textureFile = "sphere.png";
// https://cycling74.com/forums/topic/shader-help-recreating-gl_sphere_map/
// https://www.opengl.org/wiki/Mathematics_of_glTexGen

ShaderObject sphereVertexShader = ShaderObject("sphereV")
  ..AddAttributeVars([aPosition, aNormal])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
  ..AddVaryingVars([vTexUV])
  ..SetBody([
    """
void main() {
    ${StdVertexBody}
    vec3 u = normalize(vec3(${uModelMatrix} * vec4(${aPosition}, 1.0)));
    vec3 n = normalize(${uNormalMatrix} * ${aNormal} );
    vec3 r = reflect( u, n );
    r.z += 1.0;
    float m = 2.0 * length(r);
    ${vTexUV} = vec2(r.x/m + 0.5, r.y/m + 0.5);
}
  """
  ]);

ShaderObject sphereFragmentShader = ShaderObject("sphereF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture])
  ..SetBody([
    """
void main() {
    ${oFragColor} = texture(${uTexture}, ${vTexUV});
}
      """
  ]);

final List<Future<Object>> gLoadables = [];

void main() {
  final StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');
  final ChronosGL cgl = ChronosGL(canvas, faceCulling: true);

  final OrbitCamera orbit = OrbitCamera(5.0, 10.0, 0.0, canvas);
  final PerspectiveResizeAware perspective =
      PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  final RenderProgram progSphere =
      RenderProgram("spheres", cgl, sphereVertexShader, sphereFragmentShader);
  final MeshData mdSphere = ShapeIcosahedron(progSphere, subdivisions: 3);
  final VM.Matrix4 modelMat = VM.Matrix4.identity();
  final VM.Matrix3 normalMat = VM.Matrix3.identity();

  final Material matSphere = Material.Transparent("sphere", BlendEquationMix)
    ..SetUniform(uNormalMatrix, normalMat)
    ..SetUniform(uModelMatrix, modelMat);
  var future = LoadImage(textureFile)
    ..then((HTML.ImageElement img) {
      Texture bubble = ImageTexture(cgl, textureFile, img);
      matSphere.SetUniform(uTexture, bubble);
    });
  gLoadables.add(future);

  final RenderProgram progStars = RenderProgram(
      "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
  final Material matStars = Utils.MakeStarMaterial(cgl)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());
  final MeshData mdStars = Utils.MakeStarMesh(progStars, 2000, 100.0);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    modelMat.setIdentity();
    progSphere.Draw(mdSphere, [matSphere, perspective]);
    modelMat.setTranslationRaw(1.5, 0.0, 0.0);
    progSphere.Draw(mdSphere, [matSphere, perspective]);
    progStars.Draw(mdStars, [matStars, perspective]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  Future.wait(gLoadables).then((List list) {
    animate(0.0);
  });
}
