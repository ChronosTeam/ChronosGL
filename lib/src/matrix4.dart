part of chronosmath;

/* [1, 0, 0, 0,
 *  0, 1, 0, 0,
 *  0, 0, 1, 0,
 *  x, y, z, 0]
 */

class Matrix4 {

  Float32List array = new Float32List(16);

  Matrix4() {
    identity();
  }

  static int RIGHTX = 0,
      RIGHTY = 4,
      RIGHTZ = 8;
  static int UPX = 1,
      UPY = 5,
      UPZ = 9;
  static int BACKX = 2,
      BACKY = 6,
      BACKZ = 10;
  static int POSX = 12,
      POSY = 13,
      POSZ = 14;

  double operator [](int index) {
    return array[index];
  }

  void operator []=(int index, num value) {
    array[index] = value.toDouble();
  }

  void clear() {
    for (int i = 0; i < 16; i++) {
      array[i] = 0.0;
    }
  }

  Matrix4 identity() {
    for (int i = 0; i < 16; i++) {
      array[i] = i % 5 == 0 ? 1.0 : 0.0;
    }
    return this;
  }


  void frustum(double left, double right, double bottom, double top, double near, double far) {
    double rl = (right - left),
        tb = (top - bottom),
        fn = (far - near);
    clear();
    array[0] = (near * 2) / rl;
    array[5] = (near * 2) / tb;
    array[8] = (right + left) / rl;
    array[9] = (top + bottom) / tb;
    array[10] = -(far + near) / fn;
    array[11] = -1.0;
    array[14] = -(far * near * 2) / fn;
  }

  void setPerspective(int fovy, double aspect, double near, double far) {
    double top = near * Math.tan(fovy * Math.PI / 360.0);
    double right = top * aspect;
    frustum(-right, right, -top, top, near, far);
  }

  bool invert() {

    // Cache the matrix values (makes for huge speed increases!)
    double a00 = array[0],
        a01 = array[1],
        a02 = array[2],
        a03 = array[3],
        a10 = array[4],
        a11 = array[5],
        a12 = array[6],
        a13 = array[7],
        a20 = array[8],
        a21 = array[9],
        a22 = array[10],
        a23 = array[11],
        a30 = array[12],
        a31 = array[13],
        a32 = array[14],
        a33 = array[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        d = (b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06),
        invDet;

    // Calculate the determinant
    if (d == 0) {
      return false;
    }
    invDet = 1 / d;

    array[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
    array[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
    array[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
    array[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
    array[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
    array[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
    array[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
    array[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
    array[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
    array[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
    array[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
    array[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
    array[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
    array[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    array[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
    array[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;

    return true;
  }

  void rotate(double angle, Vector axis) {
    double x = axis[0],
        y = axis[1],
        z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s,
        c,
        t,
        a00,
        a01,
        a02,
        a03,
        a10,
        a11,
        a12,
        a13,
        a20,
        a21,
        a22,
        a23,
        b00,
        b01,
        b02,
        b10,
        b11,
        b12,
        b20,
        b21,
        b22;

    if (len == 0) {
      return null;
    }
    if (len != 1) {
      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
    }

    s = Math.sin(angle);
    c = Math.cos(angle);
    t = 1 - c;

    a00 = array[0];
    a01 = array[1];
    a02 = array[2];
    a03 = array[3];
    a10 = array[4];
    a11 = array[5];
    a12 = array[6];
    a13 = array[7];
    a20 = array[8];
    a21 = array[9];
    a22 = array[10];
    a23 = array[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    array[0] = a00 * b00 + a10 * b01 + a20 * b02;
    array[1] = a01 * b00 + a11 * b01 + a21 * b02;
    array[2] = a02 * b00 + a12 * b01 + a22 * b02;
    array[3] = a03 * b00 + a13 * b01 + a23 * b02;

    array[4] = a00 * b10 + a10 * b11 + a20 * b12;
    array[5] = a01 * b10 + a11 * b11 + a21 * b12;
    array[6] = a02 * b10 + a12 * b11 + a22 * b12;
    array[7] = a03 * b10 + a13 * b11 + a23 * b12;

    array[8] = a00 * b20 + a10 * b21 + a20 * b22;
    array[9] = a01 * b20 + a11 * b21 + a21 * b22;
    array[10] = a02 * b20 + a12 * b21 + a22 * b22;
    array[11] = a03 * b20 + a13 * b21 + a23 * b22;
  }

  void rotateX(double angle) {
    double s = Math.sin(angle),
        c = Math.cos(angle),
        a10 = array[4],
        a11 = array[5],
        a12 = array[6],
        a13 = array[7],
        a20 = array[8],
        a21 = array[9],
        a22 = array[10],
        a23 = array[11];

    // Perform axis-specific array multiplication
    array[4] = a10 * c + a20 * s;
    array[5] = a11 * c + a21 * s;
    array[6] = a12 * c + a22 * s;
    array[7] = a13 * c + a23 * s;

    array[8] = a10 * -s + a20 * c;
    array[9] = a11 * -s + a21 * c;
    array[10] = a12 * -s + a22 * c;
    array[11] = a13 * -s + a23 * c;
  }

  void rotateY(double angle) {
    double s = Math.sin(angle),
        c = Math.cos(angle),
        a00 = array[0],
        a01 = array[1],
        a02 = array[2],
        a03 = array[3],
        a20 = array[8],
        a21 = array[9],
        a22 = array[10],
        a23 = array[11];


    // Perform axis-specific matrix multiplication
    array[0] = a00 * c + a20 * -s;
    array[1] = a01 * c + a21 * -s;
    array[2] = a02 * c + a22 * -s;
    array[3] = a03 * c + a23 * -s;

    array[8] = a00 * s + a20 * c;
    array[9] = a01 * s + a21 * c;
    array[10] = a02 * s + a22 * c;
    array[11] = a03 * s + a23 * c;
  }

  void rotateZ(double angle) {
    double s = Math.sin(angle),
        c = Math.cos(angle),
        a00 = array[0],
        a01 = array[1],
        a02 = array[2],
        a03 = array[3],
        a10 = array[4],
        a11 = array[5],
        a12 = array[6],
        a13 = array[7];

    // Perform axis-specific matrix multiplication
    array[0] = a00 * c + a10 * s;
    array[1] = a01 * c + a11 * s;
    array[2] = a02 * c + a12 * s;
    array[3] = a03 * c + a13 * s;

    array[4] = a00 * -s + a10 * c;
    array[5] = a01 * -s + a11 * c;
    array[6] = a02 * -s + a12 * c;
    array[7] = a03 * -s + a13 * c;
  }


  setElements(Matrix4 other) {
    // TODO: why doesn't setElements work ? gives: "Dart_IntegerToInt64 expects argument 'integer' to be of type Integer."
    //array.setElements(other.array);
    for (int i = 0; i < array.length; i++) {
      array[i] = other.array[i];
    }
  }

  multiplyWith(Matrix4 other) {
// Cache the matrix values (makes for huge speed increases!)
    double a00 = array[0],
        a01 = array[1],
        a02 = array[2],
        a03 = array[3];
    double a10 = array[4],
        a11 = array[5],
        a12 = array[6],
        a13 = array[7];
    double a20 = array[8],
        a21 = array[9],
        a22 = array[10],
        a23 = array[11];
    double a30 = array[12],
        a31 = array[13],
        a32 = array[14],
        a33 = array[15];

    // Cache only the current line of the second matrix
    double b0 = other.array[0],
        b1 = other.array[1],
        b2 = other.array[2],
        b3 = other.array[3];
    array[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    array[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    array[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    array[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = other.array[4];
    b1 = other.array[5];
    b2 = other.array[6];
    b3 = other.array[7];
    array[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    array[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    array[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    array[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = other.array[8];
    b1 = other.array[9];
    b2 = other.array[10];
    b3 = other.array[11];
    array[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    array[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    array[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    array[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = other.array[12];
    b1 = other.array[13];
    b2 = other.array[14];
    b3 = other.array[15];
    array[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    array[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    array[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    array[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  }

  // dest = Vector4
  void multiplyVec4(List<double> vec4) {
    var x = vec4[0],
        y = vec4[1],
        z = vec4[2],
        w = vec4[3];

    vec4[0] = array[0] * x + array[4] * y + array[8] * z + array[12] * w;
    vec4[1] = array[1] * x + array[5] * y + array[9] * z + array[13] * w;
    vec4[2] = array[2] * x + array[6] * y + array[10] * z + array[14] * w;
    vec4[3] = array[3] * x + array[7] * y + array[11] * z + array[15] * w;
  }

  void toRotationMat(Matrix4 target) {
    target.array[0] = array[0];
    target.array[1] = array[1];
    target.array[2] = array[2];
    target.array[3] = array[3];
    target.array[4] = array[4];
    target.array[5] = array[5];
    target.array[6] = array[6];
    target.array[7] = array[7];
    target.array[8] = array[8];
    target.array[9] = array[9];
    target.array[10] = array[10];
    target.array[11] = array[11];
    target.array[12] = 0.0;
    target.array[13] = 0.0;
    target.array[14] = 0.0;
    target.array[15] = 1.0;
  }

  void translateLocal(double x, double y, double z) {
    array[12] = array[0] * x + array[4] * y + array[8] * z + array[12];
    array[13] = array[1] * x + array[5] * y + array[9] * z + array[13];
    array[14] = array[2] * x + array[6] * y + array[10] * z + array[14];
    array[15] = array[3] * x + array[7] * y + array[11] * z + array[15];
  }

  void copyPositionTo(Matrix4 target, [num factor = 1]) {
    target.array[12] = array[12] * factor;
    target.array[13] = array[13] * factor;
    target.array[14] = array[14] * factor;
  }

  void copyPositionFrom(Matrix4 from, [num factor = 1]) {
    array[12] = from[12] * factor;
    array[13] = from[13] * factor;
    array[14] = from[14] * factor;
  }

  Vector newBack = new Vector();
  Vector newUp = new Vector();
  Vector newRight = new Vector();

  void lookAt_alt(Vector eye, Vector target, [Vector up]) {
    if (up == null) up = new Vector(0.0, 1.0, 0.0);

    // vec3.direction goes from argument2 to argument1 and normalizes
    // as we want a back vector, we want from target to this spatial position
    newBack.direction(eye, target);
    newRight.cross2(up, newBack);
    newRight.normalize();
    newUp.cross2(newBack, newRight);

    array[0] = newRight[0];
    array[1] = newUp[0];
    array[2] = newBack[0];
    array[3] = 0.0;
    array[4] = newRight[1];
    array[5] = newUp[1];
    array[6] = newBack[1];
    array[7] = 0.0;
    array[8] = newRight[2];
    array[9] = newUp[2];
    array[10] = newBack[2];
    array[11] = 0.0;
    array[15] = 1.0;
  }

  String toString() {
    return "" + array.toString();
  }

  void setScale(double x, [double y, double z]) {
    if (y == null) y = x;
    if (z == null) z = x;
    array[0] *= x;
    array[1] *= y;
    array[2] *= z;
    array[4] *= x;
    array[5] *= y;
    array[6] *= z;
    array[8] *= x;
    array[9] *= y;
    array[10] *= z;
  }

  Vector getScale(Vector store) {
    var tx = store.set(array[0], array[4], array[8]).length();
    var ty = store.set(array[1], array[5], array[9]).length();
    var tz = store.set(array[2], array[6], array[10]).length();
    store.x = tx;
    store.y = ty;
    store.z = tz;
    return store;
  }

  void transpose() {
    double a01 = array[1],
        a02 = array[2],
        a03 = array[3],
        a12 = array[6],
        a13 = array[7],
        a23 = array[11];

    array[1] = array[4];
    array[2] = array[8];
    array[3] = array[12];
    array[4] = a01;
    array[6] = array[9];
    array[7] = array[13];
    array[8] = a02;
    array[9] = a12;
    array[11] = array[14];
    array[12] = a03;
    array[13] = a13;
    array[14] = a23;
  }

  void transposeRotation() {
    double a01 = array[1],
        a02 = array[2],
        a12 = array[6];

    array[1] = array[4];
    array[2] = array[8];
    array[4] = a01;
    array[6] = array[9];
    array[8] = a02;
    array[9] = a12;
  }
}
