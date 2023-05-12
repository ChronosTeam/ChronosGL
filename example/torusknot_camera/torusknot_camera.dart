import 'dart:html' as HTML;
import 'dart:math' as Math;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

VM.Vector3 p1 = VM.Vector3.zero();

// Camera flying through a TorusKnot like through a tunnel
class TorusKnotCamera extends Spatial {
  TorusKnotCamera(
      {this.radius = 20.0, this.p = 2, this.q = 3, this.heightScale = 1.0})
      : super("camera:torusknot");

  final double radius;
  final int p;
  final int q;
  final double heightScale;
  final double _TorusEpsilon = 0.01;

  final VM.Vector3 p1 = VM.Vector3.zero();
  final VM.Vector3 p2 = VM.Vector3.zero();

  void animate(double timeMs) {
    double u = timeMs / 3000;
    TorusKnotGetPos(u, q, p, radius, heightScale, p1);
    TorusKnotGetPos(u + _TorusEpsilon, q, p, radius, heightScale, p2);

    setPosFromVec(p1);
    lookAt(p2, p1);
  }
}

void updateTorusTexture(double time, HTML.CanvasElement canvas) {
  HTML.CanvasRenderingContext2D ctx =
      canvas.getContext('2d') as HTML.CanvasRenderingContext2D;
  double sint = Math.sin(time);
  double n = (sint + 1) / 2;
  ctx.rect(0, 0, canvas.width!, canvas.height!);
  // Direction of gradient is diagonal
  HTML.CanvasGradient grad =
      ctx.createLinearGradient(0, 0, canvas.width! * n, canvas.height!);
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

  final GeometryBuilder gb = TorusKnotGeometry(
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

void AddHexagonalWireframeCenters(GeometryBuilder gb) {
  List<VM.Vector4> center =
      List.generate(gb.vertices.length, (i) => VM.Vector4.zero());

  List<VM.Vector4> center3 = [
    VM.Vector4(1.0, 100.0, 0.0, 0.0),
    VM.Vector4(100.0, 1.0, 0.0, 0.0),
    VM.Vector4(100.0, 100.0, 1.0, 0.0),
    VM.Vector4(1.0, 100.0, 100.0, 0.0),
    VM.Vector4(0.0, 1.0, 100.0, 0.0),
    VM.Vector4(0.0, 100.0, 1.0, 0.0),
    VM.Vector4(1.0, 100.0, 100.0, 0.0),
    VM.Vector4(0.0, 1.0, 100.0, 0.0),
    VM.Vector4(0.0, 100.0, 1.0, 0.0),
    VM.Vector4(1.0, 100.0, 0.0, 0.0),
    VM.Vector4(100.0, 1.0, 0.0, 0.0),
    VM.Vector4(100.0, 100.0, 1.0, 0.0),
    VM.Vector4(1.0, 0.0, 100.0, 0.0),
    VM.Vector4(100.0, 1.0, 100.0, 0.0),
    VM.Vector4(100.0, 0.0, 1.0, 0.0),
    VM.Vector4(1.0, 0.0, 100.0, 0.0),
    VM.Vector4(100.0, 1.0, 100.0, 0.0),
    VM.Vector4(100.0, 0.0, 1.0, 0.0),
  ];

  int count = 0;
  for (Face3 f in gb.faces3) {
    center[f.a] = center3[count + 0];
    center[f.b] = center3[count + 1];
    center[f.c] = center3[count + 2];
    count += 3;
    if (count == center3.length) count = 0;
  }

  VM.Vector4 a4 = VM.Vector4(1.0, 0.0, 0.0, 1.0);
  VM.Vector4 b4 = VM.Vector4(1.0, 1.0, 0.0, 1.0);
  VM.Vector4 c4 = VM.Vector4(0.0, 1.0, 0.0, 1.0);
  VM.Vector4 d4 = VM.Vector4(0.0, 0.0, 0.0, 1.0);

  for (Face4 f in gb.faces4) {
    center[f.a] = a4.clone();
    center[f.b] = b4.clone();
    center[f.c] = c4.clone();
    center[f.d] = d4.clone();
  }
  gb.attributes[aCenter] = center;
}

class SimpleScene {
  void Draw(ChronosGL cgl, double timeMs, Perspective perspective) {
    program.Draw(mesh, [perspective, mat]);
  }

  late Material mat;
  late RenderProgram program;
  late MeshData mesh;
}

class SceneStars extends SimpleScene {
  SceneStars(ChronosGL cgl, int num, double dim) {
    program = RenderProgram(
        "stars", cgl, pointSpritesVertexShader, pointSpritesFragmentShader);
    mat = Utils.MakeStarMaterial(cgl)
      ..SetUniform(uModelMatrix, VM.Matrix4.identity());
    mesh = Utils.MakeStarMesh(program, 2000, dim);
  }
}

class SceneTextured extends SimpleScene {
  SceneTextured(ChronosGL cgl) {
    canvas2d = HTML.document.querySelector('#texture') as HTML.CanvasElement;
    updateTorusTexture(0.0, canvas2d);
    generatedTexture = ImageTexture(cgl, "gen", canvas2d);
    mat = Material.Transparent("torus", BlendEquationMix)
      ..SetUniform(uTexture, generatedTexture)
      ..SetUniform(uModelMatrix, VM.Matrix4.identity())
      ..SetUniform(uColor, VM.Vector3.zero());
    program = RenderProgram(
        "textured", cgl, texturedVertexShader, texturedFragmentShader);
    mesh = TorusKnotWithCustumUV(program);
  }

  @override
  void Draw(ChronosGL cgl, double timeMs, Perspective perspective) {
    updateTorusTexture(timeMs / 1000, canvas2d);
    generatedTexture.SetImageData(canvas2d);
    program.Draw(mesh, [perspective, mat]);
  }

  late HTML.CanvasElement canvas2d;
  late ImageTexture generatedTexture;
}

class SceneWireframe extends SimpleScene {
  SceneWireframe(ChronosGL cgl, GeometryBuilder torus) {
    mat = Material("wf")
      ..SetUniform(uModelMatrix, VM.Matrix4.identity())
      //..SetUniform(uWidth, 1.5)
      ..ForceUniform(cBlendEquation, BlendEquationStandard)
      ..SetUniform(uThickness, 10.0)
      ..SetUniform(uColorAlpha, VM.Vector4(0.0, 0.0, 1.0, 1.0))
      ..SetUniform(uColorAlpha2, VM.Vector4(0.0, 0.0, 0.1, 0.1));

    program = RenderProgram(
        "wf", cgl, wireframeVertexShader, wireframeFragmentShader);

    mesh = GeometryBuilderToMeshData("wf", program, torus);
  }

  factory SceneWireframe.Quad(ChronosGL cgl) {
    final GeometryBuilder torus = TorusKnotGeometryWireframeFriendly(
        computeUVs: false, computeNormals: false, inside: true);

    torus.GenerateWireframeCenters();
    return SceneWireframe(cgl, torus);
  }

  factory SceneWireframe.Triangle(ChronosGL cgl) {
    final GeometryBuilder torus =
        TorusKnotGeometryTriangularWireframeFriendly(inside: true);
    torus.GenerateWireframeCenters();
    return SceneWireframe(cgl, torus);
  }

  factory SceneWireframe.Hexagon(ChronosGL cgl) {
    final GeometryBuilder torus = TorusKnotGeometryTriangularWireframeFriendly(
        segmentsR: 192, segmentsT: 48, inside: true);
    AddHexagonalWireframeCenters(torus);
    return SceneWireframe(cgl, torus);
  }
  /*
      double alpha = Math.sin(timeMs / 2000.0) * 10.0 + 11.0;
      insideWireframe.mat.ForceUniform(uWidth, alpha);
      insideWireframeHex.mat.ForceUniform(uWidth, alpha);
      */
}

void main() {
  final HTML.SelectElement modeInput =
      HTML.document.querySelector('#mode') as HTML.SelectElement;
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  final ChronosGL cgl = ChronosGL(canvas);
  final TorusKnotCamera tkc = TorusKnotCamera();
  final Perspective perspective =
      PerspectiveResizeAware(cgl, canvas, tkc, 0.1, 1000.0)..UpdateFov(100.0);

  final SceneStars sceneStars = SceneStars(cgl, 2000, 1000);
  final SceneTextured sceneTextures = SceneTextured(cgl);
  final SceneWireframe sceneQuad = SceneWireframe.Quad(cgl);
  final SceneWireframe sceneTriangle = SceneWireframe.Triangle(cgl);
  final SceneWireframe sceneHexagon = SceneWireframe.Hexagon(cgl);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    _lastTimeMs = timeMs.toDouble();

    tkc.animate(_lastTimeMs);

    sceneStars.Draw(cgl, _lastTimeMs, perspective);

    switch (modeInput.value) {
      case "texture":
        sceneTextures.Draw(cgl, _lastTimeMs, perspective);
        break;
      case "rectangles":
        sceneQuad.Draw(cgl, _lastTimeMs, perspective);
        break;
      case "triangles":
        sceneTriangle.Draw(cgl, _lastTimeMs, perspective);
        break;
      case "hexagons":
        sceneHexagon.Draw(cgl, _lastTimeMs, perspective);
        break;
      default:
        print("unexpected mode ${modeInput.value}");
    }
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
