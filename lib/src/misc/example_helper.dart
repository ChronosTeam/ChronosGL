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
    return new ImageTexture(cgl, name, createParticleCanvas());
  }

  static HTML.CanvasElement createParticleCanvas() {
    int d = 64;
    HTML.CanvasElement canvas = new HTML.CanvasElement(width: d, height: d);
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
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
    return canvas;
  }


  /*
  void addSkybox(String prefix, String suffix, String nx, String px, String nz,
      String pz, String ny, String py) {
    Material mm(String middle) {
      return new Material()..SetUniform(uTextureSampler, textureCache.getTW(prefix + middle + suffix).texture);
    }

    Mesh skybox_nx = createQuad(mm(nx), 1004);
    skybox_nx.setPos(-2.0, 2.0, -1000.0);
    chronosGL.programBasic.addFollowCameraObject(skybox_nx);

    Mesh skybox_px = createQuad(mm(px), 1004);
    skybox_px.setPos(-2.0, 2.0, 1000.0);
    skybox_px.rotY(Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_px);

    Mesh skybox_nz = createQuad(mm(nz), 1004);
    skybox_nz.setPos(-1000.0, 2.0, -2.0);
    skybox_nz.rotY(0.5 * Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_nz);

    Mesh skybox_pz = createQuad(mm(pz), 1004);
    skybox_pz.setPos(1000.0, 2.0, -2.0);
    skybox_pz.rotY(1.5 * Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_pz);

    Mesh skybox_ny = createQuad(mm(ny), 1004);
    skybox_ny.setPos(-2.0, -1000.0, -2.0);
    skybox_ny.rotX(1.5 * Math.PI);
    skybox_ny.rotZ(1.5 * Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_ny);

    Mesh skybox_py = createQuad(mm(py), 1004);
    skybox_py.setPos(-2.0, 1000.0, -2.0);
    skybox_py.rotX(0.5 * Math.PI);
    skybox_py.rotZ(0.5 * Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_py);
  }*/

  /*
  @deprecated // use chronosGL.shapes.create...
  MeshData createIcosahedron([int subdivisions = 4]) {
    return new Icosahedron(subdivisions);
  }

  @deprecated // use chronosGL.shapes.create...
  MeshData createCube(
      {double x: 1.0,
      double y: 1.0,
      double z: 1.0,
      double uMin: 0.0,
      double uMax: 1.0,
      double vMin: 0.0,
      double vMax: 1.0}) {
    return createCubeInternal(
        x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  }

  @deprecated // use chronosGL.shapes.create...
  Mesh createTorusKnotMesh(
      {double radius: 20.0,
      double tube: 4.0,
      int segmentsR: 128,
      int segmentsT: 16,
      int p: 2,
      int q: 3,
      double heightScale: 1.0,
      Texture texture}) {
    Material mat = new Material()..SetUniform(uTextureSampler, texture);
    return new Mesh(createTorusKnotInternal(
        radius: radius,
        tube: tube,
        segmentsR: segmentsR,
        segmentsT: segmentsT,
        p: p,
        q: q,
        heightScale: heightScale), mat);
  }
   */

  static int id = 1;

  static Math.Random rand = new Math.Random();

  static MeshData MakeStarMesh(
      RenderProgram prog, int numPoints, double dimension) {
    final String name = 'stars_${numPoints}';
    Float32List pos = new Float32List(numPoints * 3);
    for (var i = 0; i < numPoints * 3; i++) {
      pos[i] = (rand.nextDouble() - 0.5) * dimension;
    }
    return prog.MakeMeshData(name, GL_POINTS)..AddVertices(pos);
  }

  static Material MakeStarMaterial(ChronosGL cgl, [double size = 1000.0]) {
    return new Material.Transparent("stars", BlendEquationMix)
      ..SetUniform(uTexture, createParticleTexture(cgl))
      ..SetUniform(uPointSize, size);
  }

  static Node MakeParticles(RenderProgram prog, int numPoints,
      [double dimension = 100.0]) {
    Material mat = MakeStarMaterial(prog.getContext());
    MeshData md = MakeStarMesh(prog, numPoints, dimension);
    return new Node(md.name, md, mat);
  }

  static String getQueryVariable(String name) {
    String query = HTML.window.location.search.substring(1);
    List<String> vars = query.split("&");
    for (int i = 0; i < vars.length; i++) {
      List<String> pair = vars[i].split("=");
      if (pair[0] == name) {
        return Uri.decodeComponent(pair[1]);
      }
    }
    return null;
  }
}

MeshData ShapeCube(RenderProgram prog,
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0}) {
  GeometryBuilder gb = CubeGeometry(
      x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  return GeometryBuilderToMeshData("cube", prog, gb);
}

MeshData ShapeWedge(RenderProgram prog,
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0}) {
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
    [int subdivisions = 4, double scale = 1.0, bool computeNormals = true]) {
  GeometryBuilder gb = IcosahedronGeometry(subdivisions, scale, computeNormals);
  return GeometryBuilderToMeshData("icosahedron-${subdivisions}", prog, gb);
}

MeshData ShapeTorusKnot(RenderProgram prog,
    {double radius: 20.0,
    double tube: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0,
    bool computeNormals = true}) {
  GeometryBuilder gb = ShapeTorusKnotGeometry(
      radius: radius,
      tube: tube,
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

final Material EmptyMaterial = new Material("empty-mat");

Node UnitNode(RenderProgram prog) {
  final MeshData UnitQuad = ShapeQuad(prog, 1);
  return new Node("unit-mesh", UnitQuad, EmptyMaterial);
}

final VM.Vector3 ColorWhite = new VM.Vector3(1.0, 1.0, 1.0);
final VM.Vector3 ColorGray8 = new VM.Vector3(0.8, 0.8, 0.8);
final VM.Vector3 ColorGray6 = new VM.Vector3(0.6, 0.6, 0.6);
final VM.Vector3 ColorGray4 = new VM.Vector3(0.4, 0.4, 0.4);
final VM.Vector3 ColorGray2 = new VM.Vector3(0.2, 0.2, 0.2);
final VM.Vector3 ColorBlack = new VM.Vector3(0.0, 0.0, 0.0);

final VM.Vector3 ColorBlue = new VM.Vector3(0.0, 0.0, 1.0);
final VM.Vector3 ColorLiteBlue = new VM.Vector3(0.0, 0.0, 0.5);

final VM.Vector3 ColorRed = new VM.Vector3(1.0, 0.0, 0.0);
final VM.Vector3 ColorLiteRed = new VM.Vector3(0.5, 0.0, 0.0);

final VM.Vector3 ColorGreen = new VM.Vector3(0.0, 1.0, 0.0);
final VM.Vector3 ColorLiteGreen = new VM.Vector3(0.0, 0.5, 0.0);

final VM.Vector3 ColorYellow = new VM.Vector3(1.0, 1.0, 0.0);
final VM.Vector3 ColorLiteYellow = new VM.Vector3(0.5, 0.5, 0.0);

final VM.Vector3 ColorMagenta = new VM.Vector3(1.0, 0.0, 1.0);
final VM.Vector3 ColorLiteMagenta = new VM.Vector3(0.5, 0.0, 0.5);

final VM.Vector3 ColorCyan = new VM.Vector3(0.0, 1.0, 1.0);
final VM.Vector3 ColorLiteCyan = new VM.Vector3(0.0, 0.5, 0.5);
