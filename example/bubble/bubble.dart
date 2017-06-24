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
  ${vTextureCoordinates} = vec2(r.x/m + 0.5, r.y/m + 0.5);
""";

List<ShaderObject> sphereShader() {
  return [
    new ShaderObject("sphereV")
      ..AddAttributeVars([aPosition, aNormal])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..AddVaryingVars([vTextureCoordinates])
      ..SetBodyWithMain([StdVertexBody, _SphereV]),
    new ShaderObject("sphereF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uTexture])
      ..SetBodyWithMain(
          ["${oFragColor} = texture(${uTexture}, ${vTextureCoordinates});"])
  ];
}

Material matSphere = new Material.Transparent("sphere", BlendEquationMix);

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = new OrbitCamera(5.0, 10.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);
  RenderPhase phase = new RenderPhase("main", chronosGL);

  RenderProgram sprites = phase.createProgram(createPointSpritesShader());
  sprites.add(Utils.MakeParticles(sprites, 2000));

  RenderProgram shaderSpheres = phase.createProgram(sphereShader());

  MeshData md = ShapeIcosahedron(shaderSpheres, 3);
  shaderSpheres.add(new Node("sphere", md, matSphere)..setPos(0.0, 0.0, 0.0));
  shaderSpheres.add(new Node("sphere", md, matSphere)..setPos(1.5, 0.0, 0.0));

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
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.draw([perspective]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs);
  }

  List<Future<Object>> futures = [
    LoadImage(textureFile),
  ];
  Future.wait(futures).then((List list) {
    Texture bubble = new ImageTexture(chronosGL, textureFile, list[0]);
    matSphere..SetUniform(uTexture, bubble);
    animate(0.0);
  });
}
