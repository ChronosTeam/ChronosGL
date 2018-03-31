part of shape;

/// Parametric representation of a TorusKnot
/// u varies from 0 - 2 PI
void TorusKnotGetPos(
    double u, int q, int p, double radius, double heightScale, VM.Vector3 vec) {
  final double cq = Math.cos(q * u);
  final double sq = Math.sin(q * u);
  final double cp = Math.cos(p * u);
  final double sp = Math.sin(p * u);

  vec.x = radius * (2.0 + cq) * 0.5 * cp;
  vec.y = radius * (2.0 + cq) * 0.5 * sp;
  vec.z = heightScale * radius * 0.5 * sq;
}

const double _TorusEpsilon = 0.01;

GeometryBuilder ShapeTorusKnotGeometry(
    {double radius: 20.0,
    double tubeRadius: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0,
    bool wrap: false,
    bool computeUVs: true,
    bool computeNormals: true}) {
  void curveFunc(double u, VM.Vector3 out) {
    TorusKnotGetPos(u, q, p, radius, heightScale, out);
  }

  int extra = wrap ? 0 : 1;
  final int w = segmentsT + extra;
  final int h = segmentsR + extra;

  final List<VM.Vector3> pointsAndTangents =
      ParametricCurvePointsAndTangents(curveFunc, 0.0, 2.0 * Math.pi, h, wrap);

  assert(pointsAndTangents.length == 2 * h);

  final List<List<VM.Vector3>> bands =
      TubeHullBands(pointsAndTangents, segmentsT, tubeRadius, wrap);
  assert(bands.length == h);

  assert(bands[0].length == 2 * w);

  final GeometryBuilder gb = new GeometryBuilder();

  for (List<VM.Vector3> lst in bands) {
    for (int i = 0; i < lst.length; i += 2) {
      gb.AddVertex(lst[i]);
    }
  }
  assert(gb.vertices.length == w * h);

  gb.GenerateRegularGridFaces(w, h, wrap);

  if (computeUVs) {
    gb.GenerateRegularGridUV(w, h);
    assert(gb.attributes[aTexUV].length == gb.vertices.length);
  }

  if (computeNormals) {
    gb.EnableAttribute(aNormal);
    for (List<VM.Vector3> lst in bands) {
      for (int i = 0; i < lst.length; i += 2) {
        gb.AddAttributeVector3(aNormal, lst[i + 1]);
      }
    }
    assert(gb.attributes[aNormal].length == gb.vertices.length);
  }
  return gb;
}

/// Like ShapeTorusKnotGeometry but with duplicate Vertices to make it
/// possible to add aCenter attributes with GenerateWireframeCenters()
GeometryBuilder ShapeTorusKnotGeometryWireframeFriendly(
    {double radius: 20.0,
    double tubeRadius: 4.0,
    int segmentsR: 128,
    int segmentsT: 16,
    int p: 2,
    int q: 3,
    double heightScale: 1.0,
    bool computeUVs: true,
    bool computeNormals: true}) {
  void curveFunc(double u, VM.Vector3 out) {
    TorusKnotGetPos(u, q, p, radius, heightScale, out);
  }

  final int h = segmentsR + 1;

  final List<VM.Vector3> pointsAndTangents =
      ParametricCurvePointsAndTangents(curveFunc, 0.0, 2.0 * Math.pi, h, false);

  assert(pointsAndTangents.length == 2 * h);

  final List<List<VM.Vector3>> bands =
      TubeHullBands(pointsAndTangents, segmentsT, tubeRadius, false);
  assert(bands.length == h);

  final GeometryBuilder gb = new GeometryBuilder();

  for (int i = 0; i < segmentsR; ++i) {
    for (int j = 0; j < segmentsT; ++j) {
      final int ip = i + 1;
      final int jp = j + 1;
      gb.AddFaces4(1);
      gb.AddVertices([
        bands[i][jp * 2],
        bands[ip][jp * 2],
        bands[ip][j * 2],
        bands[i][j * 2]
      ]);
    }
  }

  if (computeUVs) {
    gb..EnableAttribute(aTexUV);
    for (int i = 0; i < segmentsR; ++i) {
      for (int j = 0; j < segmentsT; ++j) {
        final int ip = i + 1;
        final int jp = j + 1;
        gb.AddAttributesVector2(aTexUV, [
          new VM.Vector2(i / segmentsR, jp / segmentsT),
          new VM.Vector2(ip / segmentsR, jp / segmentsT),
          new VM.Vector2(ip / segmentsR, j / segmentsT),
          new VM.Vector2(i / segmentsR, j / segmentsT)
        ]);
      }
    }
  }

  if (computeNormals) gb.GenerateNormalsAssumingTriangleMode();
  return gb;
}

/// Camera flying through a TorusKnot like through a tunnel
class TorusKnotCamera extends Camera {
  final double radius;
  final int p;
  final int q;
  final double heightScale;

  TorusKnotCamera(
      {this.radius: 20.0,
      this.p: 2,
      this.q: 3,
      this.heightScale: 1.0})
      : super("camera:torusknot");

  final VM.Vector3 p1 = new VM.Vector3.zero();
  final VM.Vector3 p2 = new VM.Vector3.zero();


  void animate(double timeMs) {
    double u = timeMs / 3000;
    TorusKnotGetPos(u, q, p, radius, heightScale, p1);
    TorusKnotGetPos(u + _TorusEpsilon, q, p, radius, heightScale, p2);

    setPosFromVec(p1);
    lookAt(p2, p1);
  }
}
