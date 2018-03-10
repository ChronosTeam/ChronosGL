import 'dart:html' as HTML;
import 'dart:math' as Math;
import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

VM.Vector3 p1 = new VM.Vector3.zero();

Scene MakeStarScene(ChronosGL cgl, UniformGroup perspective, int num) {
  Scene scene = new Scene(
      "stars",
      new RenderProgram(
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

final List<VM.Vector2> T1 = [
  new VM.Vector2(1.0, 0.2),
  new VM.Vector2(0.0, 0.7)
];

final List<VM.Vector2> T = [
  new VM.Vector2(1.0, 0.2),
  new VM.Vector2(0.0, 0.7),
  new VM.Vector2(0.0, 0.7),
];

MeshData TorusKnotWithCustumUV(RenderProgram program) {
  final List<List<VM.Vector3>> bands = TorusKnotVertexBands(wrap: true);
  final int w = bands[0].length;
  final int h = bands.length;
  final List<VM.Vector2> uvs = [];
  for (int n = 0; n < w * h; n++) {
    uvs.add(T[n % T.length]);
  }

  final GeometryBuilder gb = new GeometryBuilder()..EnableAttribute(aTexUV);

  for (List<VM.Vector3> lst in bands) {
    gb.AddVertices(lst);
  }

  gb.AddAttributesVector2(aTexUV, uvs);

  for (int i = 0; i < h; ++i) {
    final int ip = (i + 1) % h;
    for (int j = 0; j < w; ++j) {
      final int jp = (j + 1) % w;
      gb.AddFace4(i * w + j, ip * w + j, ip * w + jp, i * w + jp);
    }
  }
  gb.GenerateNormalsAssumingTriangleMode();
  return GeometryBuilderToMeshData("torusknot", program, gb);
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas);
  TorusKnotCamera tkc = new TorusKnotCamera();
  Perspective perspective = new Perspective(tkc, 0.1, 1000.0);

  final Scene scene = new Scene(
      "objects",
      new RenderProgram(
          "textured", cgl, texturedVertexShader, texturedFragmentShader),
      [perspective]);

  final RenderPhase phase = new RenderPhase("main", cgl)
    ..add(MakeStarScene(cgl, perspective, 2000))
    ..add(scene);

  int d = 512;
  //HTML.CanvasElement canvas2d = new HTML.CanvasElement(width: d, height: d);
  final HTML.CanvasElement canvas2d = HTML.document.querySelector('#texture');
  updateTorusTexture(0.0, canvas2d);
  final ImageTexture generatedTexture = new ImageTexture(cgl, "gen", canvas2d);

  // Maybe disable depth test?
  final Material mat = new Material.Transparent("torus", BlendEquationMix)
    ..SetUniform(uTexture, generatedTexture)
    ..SetUniform(uColor, new VM.Vector3.zero());

  scene.add(new Node("torus", TorusKnotWithCustumUV(scene.program), mat));

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
    _lastTimeMs = timeMs + 0.0;

    tkc.animate(_lastTimeMs);

    updateTorusTexture(timeMs / 1000, canvas2d);
    generatedTexture.SetImageData(canvas2d);

    phase.Draw();
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
