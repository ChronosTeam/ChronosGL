part of misc;

class Utils {
/*
  Texture createCheckerboardTexture() {
    var pixels = new Uint8List.fromList(
        [255, 255, 255, 0, 0, 0, 0, 0, 0, 255, 255, 255]);
    var texture = gl.createTexture();
    gl.bindTexture(TEXTURE_2D, texture);
    gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
    gl.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, NEAREST);
    gl.texParameteri(TEXTURE_2D, TEXTURE_MAG_FILTER, NEAREST);
    //  gl.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR);
    //  gl.texParameteri(TEXTURE_2D, TEXTURE_MAG_FILTER, LINEAR);
    gl.pixelStorei(UNPACK_ALIGNMENT, 1);
    gl.texImage2DTyped(TEXTURE_2D, 0, RGB, 2, 2, 0, RGB, UNSIGNED_BYTE, pixels);
    return texture;
  }
*/

  static Texture createParticleTexture(ChronosGL cgl,
      [String name = "Utils::Particles"]) {
    return ImageTexture(cgl, name, createParticleCanvas());
  }

  static HTML.CanvasElement createParticleCanvas() {
    int d = 64;
    HTML.CanvasElement canvas = HTML.CanvasElement(width: d, height: d);
    HTML.CanvasRenderingContext2D ctx = canvas.getContext('2d');
    int x = d ~/ 2, y = d ~/ 2;

    var gradient = ctx.createRadialGradient(x, y, 1, x, y, 22);
    gradient.addColorStop(0, 'gray');
    gradient.addColorStop(1, 'black');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, d, d);

    gradient = ctx.createRadialGradient(x, y, 1, x, y, 6);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, 'gray');

    ctx.globalAlpha = 0.9;
    ctx.fillStyle = gradient;
    ctx.arc(x, y, 4, 0, 2 * Math.pi);
    ctx.fill();
    return canvas;
  }

  static int id = 1;

  static Math.Random rand = Math.Random();

  static MeshData MakeStarMesh(
      RenderProgram prog, int numPoints, double dimension) {
    final String name = 'stars_${numPoints}';
    Float32List pos = Float32List(numPoints * 3);
    for (var i = 0; i < numPoints * 3; i++) {
      pos[i] = (rand.nextDouble() - 0.5) * dimension;
    }
    return prog.MakeMeshData(name, GL_POINTS)..AddVertices(pos);
  }

  static Material MakeStarMaterial(ChronosGL cgl, [double size = 1000.0]) {
    return Material.Transparent("stars", BlendEquationMix)
      ..SetUniform(uTexture, createParticleTexture(cgl))
      ..SetUniform(uPointSize, size);
  }

  static Node MakeParticles(RenderProgram prog, int numPoints,
      [double dimension = 100.0]) {
    Material mat = MakeStarMaterial(prog.getContext());
    MeshData md = MakeStarMesh(prog, numPoints, dimension);
    return Node(md.name, md, mat);
  }
}

MeshData ShapeCube(RenderProgram prog,
    {double x = 1.0,
    double y = 1.0,
    double z = 1.0,
    double uMin = 0.0,
    double uMax = 1.0,
    double vMin = 0.0,
    double vMax = 1.0,
    bool computeNormals = true}) {
  GeometryBuilder gb = CubeGeometry(
      x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  return GeometryBuilderToMeshData("cube", prog, gb);
}

MeshData ShapeWedge(RenderProgram prog,
    {double x = 1.0,
    double y = 1.0,
    double z = 1.0,
    double uMin = 0.0,
    double uMax = 1.0,
    double vMin = 0.0,
    double vMax = 1.0}) {
  GeometryBuilder gb = WedgeGeometry(
      x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  return GeometryBuilderToMeshData("wedge", prog, gb);
}

MeshData ShapeCylinder(RenderProgram prog, double radTop, double radBot,
    double height, int radialSubdivisions,
    [bool computeNormals = true]) {
  GeometryBuilder gb = CylinderGeometry(
      radTop, radBot, height, radialSubdivisions, computeNormals);
  return GeometryBuilderToMeshData("cylinder-${radialSubdivisions}", prog, gb);
}

MeshData ShapeIcosahedron(RenderProgram prog,
    {int subdivisions = 4, double scale = 1.0, bool computeNormals = true}) {
  GeometryBuilder gb = IcosahedronGeometry(
      subdivisions: subdivisions, scale: scale, computeNormals: computeNormals);
  return GeometryBuilderToMeshData("icosahedron-${subdivisions}", prog, gb);
}

MeshData ShapeTorusKnot(RenderProgram prog,
    {double radius = 20.0,
    double tubeRadius = 4.0,
    int segmentsR = 128,
    int segmentsT = 16,
    int p = 2,
    int q = 3,
    double heightScale = 1.0,
    bool computeNormals = true}) {
  GeometryBuilder gb = TorusKnotGeometry(
      radius: radius,
      tubeRadius: tubeRadius,
      segmentsR: segmentsR,
      segmentsT: segmentsT,
      p: p,
      q: q,
      heightScale: heightScale,
      computeNormals: computeNormals);
  return GeometryBuilderToMeshData("torusknot", prog, gb);
}

MeshData ShapeQuad(RenderProgram prog, int size) {
  GeometryBuilder gb = QuadGeometry(size);
  return GeometryBuilderToMeshData("quad", prog, gb);
}

MeshData ShapeGrid(
    RenderProgram prog, int xstrips, int ystrips, double xlen, double ylen) {
  GeometryBuilder gb = GridGeometry(xstrips, ystrips, xlen, ylen);
  return GeometryBuilderToMeshData("strips", prog, gb);
}

final Material EmptyMaterial = Material("empty-mat");

Node UnitNode(RenderProgram prog) {
  final MeshData UnitQuad = ShapeQuad(prog, 1);
  return Node("unit-mesh", UnitQuad, EmptyMaterial);
}

final VM.Vector3 ColorWhite = VM.Vector3(1.0, 1.0, 1.0);
final VM.Vector3 ColorGray8 = VM.Vector3(0.8, 0.8, 0.8);
final VM.Vector3 ColorGray6 = VM.Vector3(0.6, 0.6, 0.6);
final VM.Vector3 ColorGray4 = VM.Vector3(0.4, 0.4, 0.4);
final VM.Vector3 ColorGray2 = VM.Vector3(0.2, 0.2, 0.2);
final VM.Vector3 ColorBlack = VM.Vector3(0.0, 0.0, 0.0);

final VM.Vector3 ColorBlue = VM.Vector3(0.0, 0.0, 1.0);
final VM.Vector3 ColorLiteBlue = VM.Vector3(0.0, 0.0, 0.5);

final VM.Vector3 ColorRed = VM.Vector3(1.0, 0.0, 0.0);
final VM.Vector3 ColorLiteRed = VM.Vector3(0.5, 0.0, 0.0);

final VM.Vector3 ColorGreen = VM.Vector3(0.0, 1.0, 0.0);
final VM.Vector3 ColorLiteGreen = VM.Vector3(0.0, 0.5, 0.0);

final VM.Vector3 ColorYellow = VM.Vector3(1.0, 1.0, 0.0);
final VM.Vector3 ColorLiteYellow = VM.Vector3(0.5, 0.5, 0.0);

final VM.Vector3 ColorMagenta = VM.Vector3(1.0, 0.0, 1.0);
final VM.Vector3 ColorLiteMagenta = VM.Vector3(0.5, 0.0, 0.5);

final VM.Vector3 ColorCyan = VM.Vector3(0.0, 1.0, 1.0);
final VM.Vector3 ColorLiteCyan = VM.Vector3(0.0, 0.5, 0.5);

/// A RenderPhase which automatically updates perspective and viewport when
/// the window size is changed.
/// This assumes that the canvas is always "full screen".
class RenderPhaseResizeAware extends RenderPhase {
  RenderPhaseResizeAware(
      String name, ChronosGL cgl, this._canvas, this._perspective)
      : super(name, cgl) {
    resolutionChange(null);
    HTML.window.onResize.listen(resolutionChange);
  }

  final HTML.CanvasElement _canvas;
  final Perspective _perspective;

  void resolutionChange(HTML.Event ev) {
    int w = _canvas.clientWidth;
    int h = _canvas.clientHeight;
    _canvas.width = w;
    _canvas.height = h;
    print("size change $w $h");
    _perspective.AdjustAspect(w, h);
    viewPortW = w;
    viewPortH = h;
  }
}

class PerspectiveResizeAware extends Perspective {
  PerspectiveResizeAware(
      this._cgl, this._canvas, Camera camera, double near, double far)
      : super(camera, near, far) {
    resolutionChange(null);
    HTML.window.onResize.listen(resolutionChange);
  }

  final HTML.CanvasElement _canvas;
  final ChronosGL _cgl;

  void resolutionChange(HTML.Event ev) {
    int w = _canvas.clientWidth;
    int h = _canvas.clientHeight;
    _canvas.width = w;
    _canvas.height = h;
    print("size change $w $h");
    AdjustAspect(w, h);

    _cgl.viewport(0, 0, w, h);
  }
}
