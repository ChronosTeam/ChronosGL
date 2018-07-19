part of polygon;

/*
  Bevel Cut-View:

xxxxxxxxx             |
xxxxxxxxxxx           |
xxxxxxxxxxxxx         |
xxxxxxxxxxxxxxx       |
xxxxxxxxxxxxxxxx      |
xxxxxxxxxxxxxxxxx     |  y
xxxxxxxxxxxxxxxxxx    |
xxxxxxxxxxxxxxxxxxx   |
xxxxxxxxxxxxxxxxxxxx  |
xxxxxxxxxxxxxxxxxxxxx |
xxxxxxxxxxxxxxxxxxxxx |
---------------------------
                       x

 */
// Easing functions (aka inbetweening or tweening) map
// [0, 1] => [0, 1]
// You can visualize each function by googling the expression
// which will bring up google's graphing calculator, e.g.:
// 1 - cos(x * pi / 2)
// sin(x * pi / 2)
//
// References:
// http://gizma.com/easing/

double EasingCosine(double t) => 1.0 - Math.cos(t * Math.pi / 2);

double EasingSine(double t) => Math.sin(t * Math.pi / 2);

double EasingLinear(double t) => t;

double EasingQuadratic(double t) => t * t;

double EasingCubic(double t) => t * t * t;

typedef double Easing(double t);

final Map<String, Easing> MapStringToEasing = {
  "Cosine": EasingCosine,
  "Sine": EasingSine,
  "Quadratic": EasingQuadratic,
  "Cubic": EasingCubic,
  "Linear": EasingLinear,
};

// returns a sequence of x,y coordinates  describing the bevel cur
// through view (see above)
List<VM.Vector2> BevelSupportPoints(double width, double height, int nSupports,
    {Easing widthEasing = EasingCosine, Easing heightEasing = EasingSine}) {
  // out[0]
  List<VM.Vector2> out = List<VM.Vector2>(nSupports);
  for (int i = 0; i < nSupports; ++i) {
    // make sure t assumes zero and one at the extremes
    double t = i / (nSupports - 1);
    out[i] = VM.Vector2(-width * widthEasing(t), height * heightEasing(t));
  }
  return out;
}

// Merges a two-dimensional contour (plus corresponding gradient) with
// a two-dimension bevel support.
// the contour remains in the x,y plane but is replicated at different
// z-levels based on the y-coordinate of the bevel support.
// At each level the contour is extended based on the gradient and the supports
// x-coordinate.
// Typically supports[0] == (0,0) which means thet contour will appear
// a level z=0 unchanged.
List<List<VM.Vector3>> BevelStrips(List<VM.Vector2> contour,
    List<VM.Vector2> gradient, List<VM.Vector2> supports, VM.Matrix3 m) {
  assert(contour.length == gradient.length);
  List<List<VM.Vector3>> out = [];
  VM.Vector3 v = VM.Vector3.zero();
  for (VM.Vector2 s in supports) {
    List<VM.Vector3> c = List<VM.Vector3>(contour.length);
    for (int i = 0; i < c.length; ++i) {
      v.x = contour[i].x + gradient[i].x * s.x;
      v.y = contour[i].y + gradient[i].y * s.x;
      v.z = s.y;
      c[i] = m * v;
    }
    out.add(c);
  }
  return out;
}
