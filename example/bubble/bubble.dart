import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import "dart:async";
import 'package:vector_math/vector_math.dart' as VM;

String textureFile = "sphere.png";
// https://cycling74.com/forums/topic/shader-help-recreating-gl_sphere_map/
// https://www.opengl.org/wiki/Mathematics_of_glTexGen

String _SphereV = """
  vec3 u = normalize(vec3(${uModelMatrix} * vec4(${aPosition}, 1.0)));
  vec3 n = normalize(${uNormalMatrix} * ${aNormal} );
  vec3 r = reflect( u, n );
  r.z += 1.0;
  float m = 2.0 * length(r);
  ${vTexUV} = vec2(r.x/m + 0.5, r.y/m + 0.5);
""";

ShaderObject sphereVertexShader = new ShaderObject("sphereV")
  ..AddAttributeVars([aPosition, aNormal])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
  ..AddVaryingVars([vTexUV])
  ..SetBodyWithMain([StdVertexBody, _SphereV]);

ShaderObject sphereFragmentShader = new ShaderObject("sphereF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture])
  ..SetBodyWithMain(["${oFragColor} = texture(${uTexture}, ${vTexUV});"]);

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = new OrbitCamera(5.0, 10.0, 0.0, canvas);
  PerspectiveResizeAware perspective =
      new PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  final RenderProgram progSphere = new RenderProgram(
      "spheres", cgl, sphereVertexShader, sphereFragmentShader);
  final MeshData mdSphere = ShapeIcosahedron(progSphere, 3);
  final VM.Matrix4 modelMat = new VM.Matrix4.identity();
  final VM.Matrix3 normalMat = new VM.Matrix3.identity();

  final Material matSphere =
      new Material.Transparent("sphere", BlendEquationMix)
        ..SetUniform(uNormalMatrix, normalMat)
        ..SetUniform(uModelMatrix, modelMat);

  final RenderProgram progStars = new RenderProgram(
      "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
  final Material matStars = Utils.MakeStarMaterial(cgl)
    ..SetUniform(uModelMatrix, new VM.Matrix4.identity());
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

  List<Future<Object>> futures = [
    LoadImage(textureFile),
  ];
  Future.wait(futures).then((List list) {
    Texture bubble = new ImageTexture(cgl, textureFile, list[0]);
    matSphere.SetUniform(uTexture, bubble);
    animate(0.0);
  });
}
