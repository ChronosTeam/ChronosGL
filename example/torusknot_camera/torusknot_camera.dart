import 'dart:html' as HTML;
import 'dart:math' as Math;
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

VM.Vector3 p1 = VM.Vector3.zero();

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective, int num) {
  Scene scene = Scene(
      "stars",
      RenderProgram(
          "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader),
      [perspective]);
  scene.add(Utils.MakeParticles(scene.program, num));
  return scene;
}

void updateTorusTexture(double time, HTML.CanvasElement canvas) {
  HTML.CanvasRenderingContext2D ctx = canvas.getContext('2d');
  double sint = Math.sin(time);
  double n = (sint + 1) / 2;
  ctx.rect(0, 0, canvas.width, canvas.height);
  // Direction of gradient is diagonal
  HTML.CanvasGradient grad =
      ctx.createLinearGradient(0, 0, canvas.width * n, canvas.height);
  double cs1 = (360 * n).floorToDouble();
  double cs2 = (90 * n).floorToDouble();
  grad.addColorStop(0, 'hsla($cs1, 100%, 40%, 1)');
  grad.addColorStop(0.2, 'black');
  grad.addColorStop(0.3, 'black');
  grad.addColorStop(0.5, 'hsla($cs2, 100%, 40%, 1)');
  grad.addColorStop(0.7, 'black');
  grad.addColorStop(0.9, 'black');
  grad.addColorStop(1, 'hsla($cs1, 100%, 40%, 1)');
  ctx.fillStyle = grad;
  ctx.fill();
}

final List<VM.Vector2> T = [
  VM.Vector2(1.0, 0.2),
  VM.Vector2(0.0, 0.7),
  VM.Vector2(0.0, 0.7),
];

MeshData TorusKnotWithCustumUV(RenderProgram program) {
  final int w = 17; // Try different values
  final int h = 128;

  final GeometryBuilder gb = ShapeTorusKnotGeometry(
      segmentsR: h,
      segmentsT: w,
      computeUVs: false,
      computeNormals: false,
      wrap: true);
  //assert(gb.vertices.length == w * h);

  gb.EnableAttribute(aTexUV);
  final List<VM.Vector2> uvs = [];
  for (int n = 0; n < gb.vertices.length; n++) {
    uvs.add(T[n % T.length]);
  }

  gb.AddAttributesVector2(aTexUV, uvs);

  return GeometryBuilderToMeshData("torusknot", program, gb);
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas);
  TorusKnotCamera tkc = TorusKnotCamera();
  Perspective perspective = Perspective(tkc, 0.1, 1000.0);

  final Scene scene = Scene(
      "objects",
      RenderProgram(
          "textured", cgl, texturedVertexShader, texturedFragmentShader),
      [perspective]);
  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective)
        ..add(MakeStarScene(cgl, perspective, 2000))
        ..add(scene);

  // int d = 512;
  // HTML.CanvasElement canvas2d = new HTML.CanvasElement(width: d, height: d);
  final HTML.CanvasElement canvas2d = HTML.document.querySelector('#texture');
  updateTorusTexture(0.0, canvas2d);
  final ImageTexture generatedTexture = ImageTexture(cgl, "gen", canvas2d);

  // Maybe disable depth test?
  final Material mat = Material.Transparent("torus", BlendEquationMix)
    ..SetUniform(uTexture, generatedTexture)
    ..SetUniform(uColor, VM.Vector3.zero());

  scene.add(Node("torus", TorusKnotWithCustumUV(scene.program), mat));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    _lastTimeMs = timeMs + 0.0;

    tkc.animate(_lastTimeMs);

    updateTorusTexture(timeMs / 1000, canvas2d);
    generatedTexture.SetImageData(canvas2d);

    phase.Draw();
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
