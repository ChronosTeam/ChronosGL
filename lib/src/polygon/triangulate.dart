part of chronospolygon;

/*
Simple Triangulation based on Ear clipping

For a smarter algorith check:
https://github.com/mapbox/earcut
which is also used by babylonjs
*/

bool _isGoodEar(final List<VM.Vector2> contour, final List<int> available,
    int i0, int i1, int i2) {
  final VM.Vector2 a = contour[i0];
  final VM.Vector2 b = contour[i1];
  final VM.Vector2 c = contour[i2];

  if (!IsCounterClockWise(a, b, c)) {
    return false;
  }
  for (int j = 0; j < available.length; j++) {
    int vi = available[j];
    if (vi == i0 || vi == i1 || vi == i2) continue;
    // If one of the subsequent points is in the triangle
    // the currently proposed triangle is too big.
    if (IsInTriangle(a, b, c, contour[vi])) {
      return false;
    }
  }
  return true;
}

// Triangulate will not work for all contours.
List<int> Triangulate(List<VM.Vector2> contour) {
  assert(contour.length >= 3);
  List<int> triangles = new List<int>();

  List<int> available = new List<int>();
  for (int p = 0; p < contour.length; p++) {
    available.add(p);
  }

  do {
    final int al = available.length;
    // Note, for simple polygons we should not really iterate much here.
    bool foundTriangle = false;
    for (int i = 0; i < al; ++i) {
      int i0 = i;
      int i1 = i + 1;
      if (i1 >= al) i1 -= al;
      int i2 = i + 2;
      if (i2 >= al) i2 -= al;

      i0 = available[i0];
      i1 = available[i1];
      i2 = available[i2];
      if (_isGoodEar(contour, available, i0, i1, i2)) {
        //print("GOOD ${i0}  ${i1}  ${i2}");
        triangles.add(i0);
        triangles.add(i1);
        triangles.add(i2);
        // discard middle point
        int eliminate = i + 1;
        if (eliminate >= al) eliminate -= al;
        available.removeAt(eliminate);
        foundTriangle = true;
        break;
      }
    }
    if (!foundTriangle) {
      print("ERROR: Could not triangulate");
      return null;
    }
  } while (available.length >= 3);

  return triangles;
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
// We assume the hole does not touch the contour
void FindBridge(List<VM.Vector2> contour, VM.Vector2 leftmostHole) {
  //double qx = double.NEGATIVE_INFINITY;
}
