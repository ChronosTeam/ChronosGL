part of shape;

// modified from vectormath's version to not use arbitrary thresholds
void buildPlaneVectors(final VM.Vector3 planeNormal, VM.Vector3 u,
    VM.Vector3 v) {
  if (planeNormal.x.abs() > 0) {
    // choose u in x-y plane
    final double a =
        planeNormal.x * planeNormal.x + planeNormal.y * planeNormal.y;
    final double k = 1.0 / Math.sqrt(a); // note: a != 0 because x^2 > 0
    u
      ..x = -planeNormal.y * k
      ..y = planeNormal.x * k
      ..z = 0.0;

    v
      ..x = -planeNormal.z * planeNormal.x * k
      ..y = -planeNormal.z * planeNormal.y * k
      ..z = a * k;
  } else {
    // choose u in y-z plane
    final double a =
        planeNormal.y * planeNormal.y + planeNormal.z * planeNormal.z;
    final double k = 1.0 / Math.sqrt(a);
    u
      ..x = 0.0
      ..y = -planeNormal.z * k
      ..z = planeNormal.y * k;

    v
      ..x = a * k
      ..y = -planeNormal.x * (planeNormal.y * k)
      ..z = planeNormal.x * (-planeNormal.z * k);
  }
}

/// Given the points and corresponding tangents on a curve.
/// Compute the hull (points and normals) at radius around those points
/// divided into segment sections.
List<List<VM.Vector3>> TubeHullBands(List<VM.Vector3> pointsAndTangents,
    int segments, double radius) {
  final List<List<VM.Vector3>> out = [];
  // Avoid unnecessary allocations:

  final VM.Vector3 v1 = VM.Vector3.zero();
  final VM.Vector3 v2 = VM.Vector3.zero();

  final List<double> sinList = Float32List(segments);
  final List<double> cosList = Float32List(segments);

  for (int j = 0; j < segments; ++j) {
    double v = j / segments * 2 * Math.pi;
    cosList[j] = radius * Math.cos(v);
    sinList[j] = radius * Math.sin(v);
  }

  for (int i = 0; i < pointsAndTangents.length; i += 2) {
    VM.Vector3 c = pointsAndTangents[i + 0];
    VM.Vector3 d = pointsAndTangents[i + 1];
    List<VM.Vector3> band = [];
    out.add(band);

    buildPlaneVectors(d, v1, v2);
    v1.normalize();
    v2.normalize();

    for (int j = 0; j < segments; ++j) {
      // normal
      final VM.Vector3 p2 = VM.Vector3.zero();
      p2.addScaled(v1, cosList[j]);
      p2.addScaled(v2, sinList[j]);

      // point on hull
      final VM.Vector3 p1 = c + p2;
      band.add(p1);

      p2.normalize();
      band.add(p2);
    }
  }
  return out;
}

typedef void ParametricCurveFunc(double u, VM.Vector3 out);

/// Returns a List with alternating points and directions/tangents
/// Note this creates the curve for the interval [start, end] or,
/// if halfOpen == true,  for the half open interval [start, end[.
/// The latter is useful for situations where we expect f(start) == f(end)
/// but because numerical inaccuracies it will be slightly off.
/// In such situations it is better to manually duplicate the f(start)
List<VM.Vector3> ParametricCurvePointsAndTangents(ParametricCurveFunc func,
    double start, double end, int numPoints,
    {double epsilon = 0.001, bool halfOpen = false}) {
  assert(numPoints >= 2);
  final List<VM.Vector3> out = [];
  final VM.Vector3 p = VM.Vector3.zero();
  final VM.Vector3 d = VM.Vector3.zero();
  double denom = numPoints - (halfOpen ? 0.0 : 1.0);
  for (int i = 0; i < numPoints; ++i) {
    double u = (end - start) / denom * i + start;
    func(u, p);
    func(u + epsilon, d);
    d.sub(p);
    out.add(p.clone());
    out.add(d.clone());
  }
  return out;
}
