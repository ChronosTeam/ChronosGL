part of chronospolygon;

/*
References:
http://www.flipcode.com/archives/Efficient_Polygon_Triangulation.shtml
https://www.crossdart.info/p/stagexl/1.0.0/src/geom/polygon.dart.html
http://polyk.ivank.net
https://github.com/mapbox/earcut
*/

// calculate area of the list<VM.Vector2> polygon
// The sign of the area indicates clock-wise/counter clockwise orientation
double GetSignedArea(final List<VM.Vector2> contour) {
  double a = 0.0;
  for (int i = 0; i < contour.length; ++i) {
    int j = i - 1;
    if (j < 0) j += contour.length;
    a += contour[j].cross(contour[i]);
  }
  return a * 0.5;
}

VM.Vector4 GetBounds(final List<VM.Vector2> contour) {
  double maxX = double.NEGATIVE_INFINITY;
  double minX = double.INFINITY;
  double maxY = double.NEGATIVE_INFINITY;
  double minY = double.INFINITY;

  for (VM.Vector2 v in contour) {
    maxX = Math.max(maxX, v.x);
    minX = Math.min(minX, v.x);
    maxY = Math.max(maxY, v.y);
    minY = Math.min(minY, v.y);
  }

  return new VM.Vector4(minX, minY, maxX, maxY);
}

bool IsInTriangle(final VM.Vector2 a, final VM.Vector2 b, final VM.Vector2 c,
    final VM.Vector2 p) {
  VM.Vector2 ap = a - p;
  VM.Vector2 bp = b - p;
  VM.Vector2 cp = c - p;
  return cp.x * ap.y - ap.x * cp.y >= 0 &&
      ap.x * bp.y - bp.x * ap.y >= 0 &&
      bp.x * cp.y - cp.x * bp.y >= 0;
}

// http://stackoverflow.com/questions/2931573/determining-if-two-rays-intersect
// http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
VM.Vector2 LineIntersection(final VM.Vector2 pointa, final VM.Vector2 dira,
    final VM.Vector2 pointb, final VM.Vector2 dirb) {
  double det = dira.cross(dirb);
  // Parallel check
  if (det == 0.0) return null;
  double t = (pointb - pointa).cross(dirb) / det;
  return pointa + dira * t;
}

bool Colinear(final VM.Vector2 a, final VM.Vector2 b, final VM.Vector2 c) {
  VM.Vector2 ab = a - b;
  VM.Vector2 bc = b - c;
  return ab.cross(bc) == 0.0;
}

// Note: this has one known bug when the first element is colinear
// with its neighbors
List<VM.Vector2> FilterDupsAndColinear(final List<VM.Vector2> contour) {
  List<VM.Vector2> out = new List<VM.Vector2>();
  final cl = contour.length;
  out.add(contour[0]);
  for (int i = 1; i < cl - 1; ++i) {
    final VM.Vector2 v0 = out.last;
    final VM.Vector2 v1 = contour[i];
    if (v0 == v1) continue;
    final VM.Vector2 v2 = contour[i + 1];
    if (Colinear(v0, v1, v2)) continue;
    out.add(v1);
  }

  VM.Vector2 v0 = out.last;
  VM.Vector2 v1 = contour.last;
  final VM.Vector2 v2 = out.first;
  if (v1 == v2) {
    v1 = out.removeLast();
    v0 = out.last;
  }
  if (v0 == v1) {
    v1 = out.removeLast();
    v0 = out.last;
  }
  // at this point v0 != v1 != v2
  if (!Colinear(v0, v1, v2)) {
    out.add(v1);
  }
  return out;
}

bool IsInPolygon(final List<VM.Vector2> contour, final VM.Vector2 p) {
  VM.Vector2 a;
  VM.Vector2 b = contour.last - p;
  int depth = 0;
  for (final VM.Vector2 v in contour) {
    a = b;
    b = v - p;
    if (a.y < 0 && b.y < 0) continue; // both "up" or both "down"
    if (a.y > 0 && b.y > 0) continue; // both "up" or both "down"
    if (a.x < 0 && b.x < 0) continue; // both points on left

    double lx = a.x - a.y * (b.x - a.x) / (b.y - a.y);

    if (lx == 0) return true; // point on edge
    if (lx > 0) depth++;
  }
  return (depth & 1) == 1;
}

// http://mathoverflow.net/questions/44096/detecting-whether-directed-cycle-is-clockwise-or-counterclockwise
bool IsCounterClockWise(
    final VM.Vector2 a, final VM.Vector2 b, final VM.Vector2 c) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) >= 0;
}

bool IsConvex(final List<VM.Vector2> contour) {
  assert(contour.length >= 3);

  for (int i = 0; i < contour.length; i++) {
    int im1 = i - 1;
    if (im1 < 0) im1 += contour.length;
    int im2 = i - 2;
    if (im2 < 0) im2 += contour.length;

    if (!IsCounterClockWise(contour[im2], contour[im1], contour[i]))
      return false;
  }

  return true;
}

VM.Vector2 _getMovement(VM.Vector2 prev, VM.Vector2 curr, VM.Vector2 next) {
  VM.Vector2 cp = curr - prev;
  VM.Vector2 nc = next - curr;
  double det = cp.cross(nc);
  if (det == 0.0) {
    print(prev);
    print(curr);
    print(next);
  }
  assert(det != 0);
  // we want to move the adjacent edges further to the inside
  // and then use  their new intersection point as the place for
  // curr to go to.
  VM.Vector2 cp_ortho = new VM.Vector2(-cp.y, cp.x)..normalize();
  VM.Vector2 nc_ortho = new VM.Vector2(-nc.y, nc.x)..normalize();
  VM.Vector2 prev_shifted = prev + cp_ortho;
  VM.Vector2 next_shifted = next + nc_ortho;

  VM.Vector2 x = LineIntersection(prev_shifted, cp, next_shifted, nc);
  return x - curr;
}

// GetContourMovement is to shrink or expand a contour.
// The output contains a direction Vector2 for each input point.
// The input must be free of colinear data.
List<VM.Vector2> GetContourMovement(final List<VM.Vector2> contour) {
  List<VM.Vector2> out = new List<VM.Vector2>();
  final cl = contour.length;
  for (int i = 0; i < contour.length; i++) {
    int im1 = i - 1;
    if (im1 < 0) im1 += cl;
    int ip1 = i + 1;
    if (ip1 >= cl) ip1 -= cl;

    VM.Vector2 v = _getMovement(contour[im1], contour[i], contour[ip1]);

    print ("${i}: ${contour[i]} -> ${v*0.2+contour[i]}");

    out.add(v * 0.1 + contour[i]);
  }
  return out;
}
