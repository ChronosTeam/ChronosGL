part of chronosgl;

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

  static HTML.CanvasElement createCanvas(
      HTML.CanvasElement canvas, callback(HTML.CanvasRenderingContext2D ctx),
      [int size = 512]) {
    if (canvas == null)
      canvas = new HTML.CanvasElement(width: size, height: size);
    HTML.CanvasRenderingContext2D context = canvas.getContext('2d');
    callback(context);
    return canvas;
  }

  static HTML.CanvasElement createGradientImage2(
      double time, HTML.CanvasElement canvas) {
    int d = 512;
    return createCanvas(canvas, (HTML.CanvasRenderingContext2D ctx) {
      double sint = Math.sin(time);
      double n = (sint + 1) / 2;
      ctx.rect(0, 0, d, d);
      HTML.CanvasGradient grad = ctx.createLinearGradient(0, 0, d * n, d);
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
    });
  }

  static Texture createParticleTexture(ChronosGL cgl, [String name = "Utils::Particles"]) {
    return new WebTexture(cgl, name, createParticleCanvas())..Install();
  }

  static HTML.CanvasElement createParticleCanvas() {
    int d = 64;
    return createCanvas(null, (HTML.CanvasRenderingContext2D ctx) {
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
    }, d);
  }

  static Node MakeSkycube(gl, Texture cubeTexture) {
    Material mat = new Material("skycube")
      ..SetUniform(uCubeTexture, cubeTexture);
    MeshData md = ShapeCube(gl, x: 512.0, y: 512.0, z: 512.0);
    return new Node("skycube", md, mat);
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

  static Node MakeParticles(ChronosGL cgl, int numPoints,
      [int dimension = 100]) {
    Material mat = new Material.Transparent("stars", new BlendEquation.Mix())
      ..SetUniform(uTexture, createParticleTexture(cgl))
      ..SetUniform(uPointSize, 1000);

    Math.Random rand = new Math.Random();
    GeometryBuilder gb = new GeometryBuilder(true);
    for (var i = 0; i < numPoints; i++) {
      gb.AddVertex(new VM.Vector3(
          (rand.nextDouble() - 0.5) * dimension,
          (rand.nextDouble() - 0.5) * dimension,
          (rand.nextDouble() - 0.5) * dimension));
    }

    id++;
    final String name = 'point_sprites_mesh_' + id.toString();
    return new Node(name, GeometryBuilderToMeshData(name, cgl, gb), mat);
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

MeshData ShapeCube(ChronosGL cgl,
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0}) {
  GeometryBuilder gb = CubeGeometry(
      x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  return GeometryBuilderToMeshData("cube", cgl, gb);
}

MeshData ShapeWedge(ChronosGL cgl,
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0}) {
  GeometryBuilder gb = WedgeGeometry(
      x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  return GeometryBuilderToMeshData("wedge", cgl, gb);
}

MeshData ShapeCylinder(ChronosGL cgl, double radTop, double radBot,
    double height, int radialSubdivisions,
    [bool computeNormals = true]) {
  GeometryBuilder gb = CylinderGeometry(
      radTop, radBot, height, radialSubdivisions, computeNormals);
  return GeometryBuilderToMeshData("cylinder-${radialSubdivisions}", cgl, gb);
}

MeshData ShapeIcosahedron(ChronosGL cgl,
    [int subdivisions = 4, double scale = 1.0, bool computeNormals = true]) {
  GeometryBuilder gb = IcosahedronGeometry(subdivisions, scale, computeNormals);
  return GeometryBuilderToMeshData("icosahedron-${subdivisions}", cgl, gb);
}

MeshData ShapeTorusKnot(ChronosGL cgl,
    {double radius: 20.0,
    double tube: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0,
    useQuads: true}) {
  GeometryBuilder gb = ShapeTorusKnotGeometry(
      radius: radius,
      tube: tube,
      segmentsR: segmentsR,
      segmentsT: segmentsT,
      p: p,
      q: q,
      heightScale: heightScale,
      useQuads: useQuads);
  return GeometryBuilderToMeshData("torusknot", cgl, gb);
}

MeshData ShapeQuad(ChronosGL cgl, int size) {
  GeometryBuilder gb = QuadGeometry(size);
  return GeometryBuilderToMeshData("quad", cgl, gb);
}

MeshData ShapeGrid(ChronosGL cgl, int xstrips, int ystrips,
    double xlen, double ylen) {
  GeometryBuilder gb = GridGeometry(xstrips, ystrips, xlen, ylen);
  return GeometryBuilderToMeshData("strips", cgl, gb);
}

MeshData DirectionalLightVisualizer(
    ChronosGL cgl, double cubeLen, double delta, VM.Vector3 dir) {
  assert(dir.y != 0.0);
  final double d = cubeLen * 0.5;
  final double end = delta * (d / delta).floor();
  final double start = -end;
  final VM.Vector3 dir2y = dir * d / dir.y;
  List<VM.Vector3> points = [];
  for (double x = start; x <= end; x += delta) {
    for (double z = start; z <= end; z += delta) {
      // we have an intersection  point with xz plane, now get the
      // intersection with the top and bottom face of the cube
      points.add(new VM.Vector3(x, 0.0, z)..add(dir2y));
      points.add(new VM.Vector3(x, 0.0, z)..sub(dir2y));
    }
  }
  MeshData md = new MeshData("dirLightViz", cgl, WEBGL.LINES);
  md.AddVertices(FlattenVector3List(points));
  List<int> faces = new List<int>(points.length);
  for (int i = 0; i < points.length; ++i) faces[i] = i;
  md.AddFaces(faces);
  return md;
}

VM.Vector3 GetOrthogonalVector3(VM.Vector3 dir) {
  if (dir.x != 0.0) {
    if (dir.y != 0.0) return new VM.Vector3(-dir.y, dir.x, 0.0);
    if (dir.z != 0.0) return new VM.Vector3(-dir.z, 0.0, dir.x);
    return new VM.Vector3(0.0, 1.0, 1.0);
  } else {
    if (dir.y == 0.0) return new VM.Vector3(1.0, 1.0, 0.0);
    if (dir.z == 0.0) return new VM.Vector3(1.0, 0.0, 1.0);
    return new VM.Vector3(0.0, -dir.z, dir.y);
  }
}

MeshData SpotLightVisualizer(ChronosGL cgl, VM.Vector3 pos,
    VM.Vector3 dir, double range, double angle) {
  final int kSpines = 8;
  VM.Vector3 center = pos + dir.normalized() * range;
  List<VM.Vector3> points = [pos, center];
  VM.Vector3 ortho = GetOrthogonalVector3(dir)
    ..normalize()
    ..scale(Math.tan(angle) * range);
  for (int i = 0; i < kSpines; i++) {
    VM.Vector3 p = ortho.clone()
      ..applyAxisAngle(dir, i * 2.0 * Math.PI / kSpines)
      ..add(center);
    points.add(p);
  }

  MeshData md = new MeshData("spotlightViz", cgl, WEBGL.LINES);
  md.AddVertices(FlattenVector3List(points));
  List<int> faces = [];
  for (int i = 1; i < points.length; ++i) {
    faces.add(0);
    faces.add(i);
  }

  // funnel
  for (int i = 3; i < points.length; ++i) {
    faces.add(i - 1);
    faces.add(i);
  }
  faces.add(points.length - 1);
  faces.add(2);

  // cross
  for (int i = 2; i < points.length; ++i) {
    if (i % 2 == 0) {
      faces.add(1);
      faces.add(i);
    }
  }
  md.AddFaces(faces);
  return md;
}

/*
MeshData PointLightVisualizer(
    WEBGL.RenderingContext gl, VM.Vector3 pos, double range) {
  List<VM.Vector3> points = [];
  List<int> faces = [];
  // Rays from center
  for (VM.Vector3 v in IcosahedronVertexList) {
    faces.add(points.length);
    faces.add(IcosahedronVertexList.length);
    points.add(pos + (v * range));
  }
  points.add(pos);

  // Faces
  for (Face3 f in IcosahedronFaceList) {
    faces.add(f.a);
    faces.add(f.b);
    faces.add(f.b);
    faces.add(f.c);
    faces.add(f.c);
    faces.add(f.a);
  }

  MeshData md = new MeshData("pointlight", gl, WEBGL.LINES);
  md.AddVertices(FlattenVector3List(points));
  md.AddFaces(faces);
  return md;
}
*/
MeshData PointLightVisualizer(
    ChronosGL cgl, VM.Vector3 pos, double range) {
  List<VM.Vector3> points = [];
  List<int> faces = [];
  // Rays from center
  for (VM.Vector3 v in IcosahedronVertexList) {
    faces.add(points.length);
    faces.add(IcosahedronVertexList.length);
    points.add(pos + (v * range));
  }
  points.add(pos);

  MeshData md = new MeshData("pointlightViz", cgl, WEBGL.LINES);
  md.AddVertices(FlattenVector3List(points));
  md.AddFaces(faces);
  return md;
}
