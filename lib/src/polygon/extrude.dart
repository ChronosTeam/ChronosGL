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

double EasingCosine(double t) => 1.0 - Math.cos(t * Math.PI / 2);

double EasingSine(double t) => Math.sin(t * Math.PI / 2);

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

List<VM.Vector2> BevelSupportPoints(double width, double height, int nSupports,
    {Easing widthEasing = EasingCosine, Easing heightEasing = EasingSine}) {
  // out[0]
  List<VM.Vector2> out = new List<VM.Vector2>(nSupports);
  for (int i = 0; i < nSupports; ++i) {
    double t = i / nSupports;
    out[i] = new VM.Vector2(-width * widthEasing(t), height * heightEasing(t));
  }
  return out;
}

List<List<VM.Vector3>> BevelStrips(List<VM.Vector2> contour,
    List<VM.Vector2> gradient, List<VM.Vector2> supports, VM.Matrix3 m) {
  assert(contour.length == gradient.length);
  List<List<VM.Vector3>> out = [];
  VM.Vector3 v = new VM.Vector3.zero();
  for (VM.Vector2 s in supports) {
    List<VM.Vector3> c = new List<VM.Vector3>(contour.length);
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
