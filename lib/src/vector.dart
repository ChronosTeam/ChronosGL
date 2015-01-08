part of chronosmath;

class Vector {

  Float32List array;
  
  static final Vector RIGHT = new Vector(1.0,0.0,0.0);
  static final Vector UP = new Vector(0.0,1.0,0.0);
  static final Vector BACK = new Vector(0.0,0.0,1.0);

  double get x => array[0];
  double get y => array[1];
  double get z => array[2];

  set x(double v) => array[0] = v;
  set y(double v) => array[1] = v;
  set z(double v) => array[2] = v;

  // Careful, this shares the data...
  Vector.useList(this.array);

  Vector.fromList(List<double> list) {
    this.array = new Float32List(3);
    this.array[0] = list[0];
    this.array[1] = list[1];
    this.array[2] = list[2];
  }

  Vector.fromVector(Vector vector) {
    this.array = new Float32List(3);
    this.array[0] = vector[0];
    this.array[1] = vector[1];
    this.array[2] = vector[2];
  }

  Vector([num x = 0, num y = 0, num z = 0]) {
    array = new Float32List(3);
    array[0] = x.toDouble();
    array[1] = y.toDouble();
    array[2] = z.toDouble();
  }

  double operator [](int index) {
    return array[index];
  }

  void operator []=(int index, double value) {
    array[index] = value;
  }

  Vector set(dynamic x, [num y, num z]) {
    if( x is Vector ){
      array[0] = x[0];
      array[1] = x[1];
      array[2] = x[2];
    } else {
      array[0] = x.toDouble();
      array[1] = y.toDouble();
      array[2] = z.toDouble();
    }
    return this;
  }

  Vector copy() {
    return new Vector.fromList(this.array);
  }

  Vector add(Vector v) {
    array[0] += v[0];
    array[1] += v[1];
    array[2] += v[2];
    return this;
  }

  Vector subtract(Vector v) {
    array[0] -= v[0];
    array[1] -= v[1];
    array[2] -= v[2];
    return this;
  }

  Vector scale(num val) {
    array[0] *= val;
    array[1] *= val;
    array[2] *= val;
    return this;
  }

  Vector addScaledVector(Vector v, num val) {
    array[0] += v[0] * val;
    array[1] += v[1] *val;
    array[2] += v[2] *val;
    return this;
  }

  Vector negate() {
    array[0] = -array[0];
    array[1] = -array[1];
    array[2] = -array[2];
    return this;
  }

  Vector normalize() {
    double x = array[0],
        y = array[1],
        z = array[2];
    double len = Math.sqrt(x * x + y * y + z * z);

    if (len == 0) {
      array[0] = 0.0;
      array[1] = 0.0;
      array[2] = 0.0;
    } else if (len == 1) {
      array[0] = x;
      array[1] = y;
      array[2] = z;
    } else {
      len = 1 / len;
      array[0] = x * len;
      array[1] = y * len;
      array[2] = z * len;
    }
    return this;
  }

  // I think the from and to is swapped, but it's the same in glmatrix...
  Vector direction(Vector from, Vector to) {
    double x = from[0] - to[0],
        y = from[1] - to[1],
        z = from[2] - to[2],
        len = Math.sqrt(x * x + y * y + z * z);

    if (len == 0) {
      array[0] = 0.0;
      array[1] = 0.0;
      array[2] = 0.0;
    } else {
      len = 1 / len;
      array[0] = x * len;
      array[1] = y * len;
      array[2] = z * len;
    }
    return this;
  }

  // The cross product results in a vector perpendicular to the two input vectors
  // The result's magnitude is equal to the magnitudes of the two inputs multiplied together and then multiplied by the sine of the angle between the inputs.
  // Or in other words the result's magnitude is equal to the area of the parallelogram that the two input vectors span.
  Vector cross(Vector vec2) {
    return cross2(this, vec2);
  }

  Vector cross2(Vector vec1, Vector vec2) {
    double x = vec1[0],
        y = vec1[1],
        z = vec1[2],
        x2 = vec2[0],
        y2 = vec2[1],
        z2 = vec2[2];

    array[0] = y * z2 - z * y2;
    array[1] = z * x2 - x * z2;
    array[2] = x * y2 - y * x2;
    return this;
  }

  // The dot product is a float value equal to the magnitudes of the two vectors multiplied together and then multiplied by the cosine of the angle between them.
  // For normalized vectors Dot returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions and zero if the vectors are perpendicular.
  double dot(Vector vec2) {
    return array[0] * vec2[0] + array[1] * vec2[1] + array[2] * vec2[2];
  }

  Vector lerp(Vector v, double lerp) {
    array[0] += lerp * (v[0] - array[0]);
    array[1] += lerp * (v[1] - array[1]);
    array[2] += lerp * (v[2] - array[2]);
    return this;
  }

  double dist(Vector to) {
    double x = to[0] - array[0],
        y = to[1] - array[1],
        z = to[2] - array[2];

    return Math.sqrt(x * x + y * y + z * z);
  }

  double lengthSquared() {
    double x = array[0],
        y = array[1],
        z = array[2];
    return (x * x + y * y + z * z);
  }

  double length() {
    return Math.sqrt(lengthSquared());
  }
  
  // if we initialize the matrix here we get an endless loop
  // because Matrix also creates a new Vector...
  Matrix4 m = null;
  List<double> _v = new List<double>(4);

  bool unproject(Matrix4 view, Matrix4 proj, List<num> viewport) {

    if (m == null) m = new Matrix4();

    _v[0] = (array[0] - viewport[0]) * 2.0 / viewport[2] - 1.0;
    _v[1] = (array[1] - viewport[1]) * 2.0 / viewport[3] - 1.0;
    _v[2] = 2.0 * array[2] - 1.0;
    _v[3] = 1.0;

    m.setElements(proj);
    m.multiplyWith(view);
    if (!m.invert()) {
      return false;
    }

    m.multiplyVec4(_v);
    if (_v[3] == 0.0) {
      return false;
    }

    array[0] = _v[0] / _v[3];
    array[1] = _v[1] / _v[3];
    array[2] = _v[2] / _v[3];

    return true;
  }

  String toString() {
    return array.toString();
  }
}
