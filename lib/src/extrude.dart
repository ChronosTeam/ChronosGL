part of chronosgl;

class ExtrudeOptions {
  int curveSegments; //  number of points on the curves
  int steps; // number of points used for subdividing segements of extrude spline
  int amount; //  — int. Depth to extrude the shape
  bool bevelEnabled; //  bool. turn on bevel

  double bevelThickness; // float. how deep into the original shape bevel goes
  double bevelSize; // float. how far from shape outline is bevel
  int bevelSegments; // number of bevel layers
  // extrudePath — THREE.Curve. curve to extrude shape along
  // frames — Object. containing arrays of tangents, normals, binormals
  // material — int. material index for front and back faces
  // extrudeMaterial — int. material index for extrusion and beveled faces
  // UVGenerator — Object. object that provides UV generator functions
}
/*
  Bevel:

               beveled contour
  -----
       \
        \
         \    original countour
          |
          |
          |
          |
 */




double EasingCos(double t) {
  return Math.cos(t * Math.PI / 2);
}

double EasingSin(double t) {
  return Math.sin(t * Math.PI / 2);
}

typedef double Easing(double t);

List<double> BevelLayerOffsets(double thickness, int segments) {
  // out[0]
  List<double> out = [];
  for (int seg = 0; seg < segments; ++seg) {
    double t = seg / segments;
    out.add(thickness * Math.cos(t * Math.PI / 2));
  }
  return out;
}


List<VM.Vector2> BevelMovement(final List<VM.Vector2> contour) {
  final int cl = contour.length;
  List<VM.Vector2> out = [];
  for (int i = 0; i < cl; ++i) {
    int prev = i - 1;
    if (prev < 0) prev += cl;
    int next = i + 1;
    if (next >= cl) next -= cl;
    out.add(_getBevelVec(contour[prev], contour[i], contour[next]));
  }
  return out;
}

List<List<VM.Vector2>> BevelLayerContours(
    final List<VM.Vector2> contour, int segments) {}
