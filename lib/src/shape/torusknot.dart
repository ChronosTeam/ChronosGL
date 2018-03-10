part of shape;

/// Parametric representation of a TorusKnot
void TorusKnotGetPos(
    double u, int q, int p, double radius, double heightScale, VM.Vector3 vec) {
  final double quOverP = q / p * u;
  final double c = Math.cos(quOverP);
  final double s = Math.sin(quOverP);

  vec.x = radius * (2.0 + c) * 0.5 * Math.cos(u);
  vec.y = radius * (2.0 + c) * 0.5 * Math.sin(u);
  vec.z = heightScale * radius * s * 0.5;
}

const double _TorusEpsilon = 0.01;

/// Generate Vertices for Torusknot
///
/// With wrapping output will be segmentsR lists of vertices.
/// Each list consisting of segmentsT vertices.
///
/// Without wrapping output will be segmentsR+1 lists of vertices
/// (the first and last being identical)
/// Each list consisting of segmentsT+1 vertices
/// (again the first and last being identical)
/// The duplication of nodes allows us to associate
/// different aTexUV attributes with them.
List<List<VM.Vector3>> TorusKnotVertexBands(
    {double radius: 20.0,
    double tube: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0,
    bool wrap: false}) {
  // if we do not wrap we duplicate vertices
  final int extra = wrap ? 0 : 1;

  final List<List<VM.Vector3>> vertices = [];
  // Avoid unnecessary allocations:
  final VM.Vector3 p1 = new VM.Vector3.zero();
  final VM.Vector3 p2 = new VM.Vector3.zero();
  final VM.Vector3 p3 = new VM.Vector3.zero();
  final VM.Vector3 v1 = new VM.Vector3.zero();
  final VM.Vector3 v2 = new VM.Vector3.zero();

  for (int i = 0; i < segmentsR + extra; ++i) {
    List<VM.Vector3> band = [];
    vertices.add(band);

    double u = i / segmentsR * 2 * p * Math.PI;
    TorusKnotGetPos(u, q, p, radius, heightScale, p1);
    TorusKnotGetPos(u + _TorusEpsilon, q, p, radius, heightScale, p2);

    p2.sub(p1);
    VM.buildPlaneVectors(p2, v1, v2);
    v1.normalize();
    v2.normalize();

    for (int j = 0; j < segmentsT + extra; ++j) {
      double v = j / segmentsT * 2 * Math.PI;
      double cx =
          tube * Math.cos(v); // TODO: Hack: Negating it so it faces outside.
      double cy = tube * Math.sin(v);

      p3.setFrom(p1);
      p3.addScaled(v1, cx);
      p3.addScaled(v2, cy);

      band.add(new VM.Vector3.copy(p3));
    }
  }
  return vertices;
}

List<List<VM.Vector2>> UniformUVsForVertexBands(
    List<List<VM.Vector3>> vertices) {
  List<List<VM.Vector2>> uvs = [];
  final int h = vertices.length - 1;
  final int w = vertices[0].length - 1;
  for (int y = 0; y <= h; ++y) {
    List<VM.Vector2> band = [];
    uvs.add(band);
    for (int x = 0; x <= w; ++x) {
      // we interchange x and y for historical reasons here
      band.add(new VM.Vector2(y / h, x / w));
    }
  }
  return uvs;
}

GeometryBuilder ShapeTorusKnotGeometry(
    {double radius: 20.0,
    double tube: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0,
    bool computeNormals: true}) {
  final List<List<VM.Vector3>> bands = TorusKnotVertexBands(
      radius: radius,
      tube: tube,
      segmentsR: segmentsR,
      segmentsT: segmentsT,
      p: p,
      q: q,
      heightScale: heightScale);

  final List<List<VM.Vector2>> uvs = UniformUVsForVertexBands(bands);
  assert(uvs.length == bands.length);
  assert(uvs[0].length == bands[0].length);

  final GeometryBuilder gb = new GeometryBuilder()..EnableAttribute(aTexUV);

  for (List<VM.Vector3> lst in bands) {
    gb.AddVertices(lst);
  }
  for (List<VM.Vector2> lst in uvs) {
    gb.AddAttributesVector2(aTexUV, lst);
  }

  final int w = bands[0].length;
  for (int i = 0; i < segmentsR; ++i) {
    for (int j = 0; j < segmentsT; ++j) {
      final int ip = i + 1;
      final int jp = j + 1;
      gb.AddFace4(i * w + jp, ip * w + jp, ip * w + j, i * w + j);
    }
  }
  if (computeNormals) gb.GenerateNormalsAssumingTriangleMode();
  return gb;
}

/// Like ShapeTorusKnotGeometry but with duplicate Vertices to make it possible
///  to add aCenter attributes with GenerateWireframeCenters()
GeometryBuilder ShapeTorusKnotGeometryWireframeFriendly(
    {double radius: 20.0,
    double tube: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0,
    bool computeNormals: true}) {
  final List<List<VM.Vector3>> bands = TorusKnotVertexBands(
      radius: radius,
      tube: tube,
      segmentsR: segmentsR,
      segmentsT: segmentsT,
      p: p,
      q: q,
      heightScale: heightScale);

  final List<List<VM.Vector2>> uvs = UniformUVsForVertexBands(bands);

  final GeometryBuilder gb = new GeometryBuilder()..EnableAttribute(aTexUV);

  for (int i = 0; i < segmentsR; ++i) {
    for (int j = 0; j < segmentsT; ++j) {
      final int ip = i + 1;
      final int jp = j + 1;
      gb.AddFaces4(1);
      gb.AddVertices([bands[i][jp], bands[ip][jp], bands[ip][j], bands[i][j]]);
      gb.AddAttributesVector2(
          aTexUV, [uvs[i][jp], uvs[ip][jp], uvs[ip][j], uvs[i][j]]);
    }
  }

  if (computeNormals) gb.GenerateNormalsAssumingTriangleMode();
  return gb;
}

/// Camera flying through a TorusKnot like through a tunnel
class TorusKnotCamera extends Camera {
  final double radius;
  final double tube;
  final int p;
  final int q;
  final double heightScale;

  TorusKnotCamera(
      {this.radius: 20.0,
      this.tube: 4.0,
      this.p: 2,
      this.q: 3,
      this.heightScale: 1.0})
      : super("camera:torusknot");

  VM.Vector3 p1 = new VM.Vector3.zero();
  VM.Vector3 p2 = new VM.Vector3.zero();
  VM.Vector3 up = new VM.Vector3.zero();

  void animate(double timeMs) {
    double u = timeMs / 1500;
    TorusKnotGetPos(u, q, p, radius, heightScale, p1);
    TorusKnotGetPos(u + _TorusEpsilon, q, p, radius, heightScale, p2);
    up
      ..setFrom(p2)
      ..normalize();
    setPosFromVec(p1);
    lookAt(p2);
  }
}
