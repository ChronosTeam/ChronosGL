import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import "dart:async";

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

Material matSphere = new Material.Transparent("sphere", BlendEquationMix);

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective, int num) {
  Scene scene = new Scene(
      "stars",
      new RenderProgram(
          "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader),
      [perspective]);
  scene.add(Utils.MakeParticles(scene.program, num));
  return scene;
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = new OrbitCamera(5.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  Scene scene = new Scene(
      "spheres",
      new RenderProgram(
          "spheres", cgl, sphereVertexShader, sphereFragmentShader),
      [perspective]);
  MeshData md = ShapeIcosahedron(scene.program, 3);
  scene.add(new Node("sphere", md, matSphere)..setPos(0.0, 0.0, 0.0));
  scene.add(new Node("sphere", md, matSphere)..setPos(1.5, 0.0, 0.0));

  final RenderPhaseResizeAware phase =
      new RenderPhaseResizeAware("main", cgl, canvas, perspective)
        ..add(MakeStarScene(cgl, perspective, 2000))
        ..add(scene);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.Draw();

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  List<Future<Object>> futures = [
    LoadImage(textureFile),
  ];
  Future.wait(futures).then((List list) {
    Texture bubble = new ImageTexture(cgl, textureFile, list[0]);
    matSphere..SetUniform(uTexture, bubble);
    animate(0.0);
  });
}
