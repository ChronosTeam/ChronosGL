part of chronosmath;

class Quaternion {
  Float32List array;

  double get x => array[0];
  double get y => array[1];
  double get z => array[2];
  double get w => array[3];

  set x(double v) => array[0] = v;
  set y(double v) => array[1] = v;
  set z(double v) => array[2] = v;
  set w(double v) => array[3] = v;

  // Careful, this shares the data...
  Quaternion.useList(this.array);

  Quaternion.fromList(List<double> list) {
    this.array = new Float32List(4);
    this.array[0] = list[0];
    this.array[1] = list[1];
    this.array[2] = list[2];
    this.array[3] = list[3];
  }

  Quaternion.fromQuaternion(Quaternion vector) {
    this.array = new Float32List(4);
    this.array[0] = vector[0];
    this.array[1] = vector[1];
    this.array[2] = vector[2];
    this.array[3] = vector[3];
  }

  Quaternion([double x = 0.0, double y = 0.0, double z = 0.0, double w = 1.0]) {
    array = new Float32List(4);
    array[0] = x;
    array[1] = y;
    array[2] = z;
    array[3] = w;
  }

  double operator [](int index) {
    return array[index];
  }

  void operator []=(int index, double value) {
    array[index] = value;
  }

  Quaternion set(dynamic x, double y, double z, double w) {
    if (x is Quaternion) {
      array[0] = x[0];
      array[1] = x[1];
      array[2] = x[2];
      array[3] = x[3];
    } else {
      array[0] = x;
      array[1] = y;
      array[2] = z;
      array[3] = w;
    }
    return this;
  }

  Quaternion setAxisAngle(Vector axis, double rad) {
    rad = rad * 0.5;
    double s = Math.sin(rad);
    array[0] = s * axis[0];
    array[1] = s * axis[1];
    array[2] = s * axis[2];
    array[3] = Math.cos(rad);
    return this;
  }

  Vector _tempLookAt = new Vector();
  // untested
  Quaternion lookAt(Vector direction) {
    _tempLookAt.set(direction).normalize();

    double dot = _tempLookAt.dot(Vector.BACK);

    if ((dot + 1.0).abs() < 0.000001) {
      return set(0.0, 1.0, 0.0, Math.PI);
    }
    if ((dot - 1.0).abs() < 0.000001) {
      return set(0.0, 0.0, 0.0, 1.0);
    }

    double angle = Math.acos(dot);
    Vector axis = _tempLookAt.cross(Vector.BACK);
    //rotAxis.normalize();
    return setAxisAngle(axis, angle);
  }

  Float32List m = new Float32List(9);
  Quaternion fromRotationMatrix4(Matrix4 m4) {
    m[0] = m4[0];
    m[1] = m4[1];
    m[2] = m4[2];
    m[3] = m4[4];
    m[4] = m4[5];
    m[5] = m4[6];
    m[6] = m4[8];
    m[7] = m4[9];
    m[8] = m4[10];

    double trace = m[0] + m[4] + m[8];
    double root;

    if (trace > 0.0) {
      // |w| > 1/2, may as well choose w > 1/2
      root = Math.sqrt(trace + 1.0); // 2w
      array[3] = 0.5 * root;
      root = 0.5 / root; // 1/(4w)
      array[0] = (m[5] - m[7]) * root;
      array[1] = (m[6] - m[2]) * root;
      array[2] = (m[1] - m[3]) * root;
    } else {
      // |w| <= 1/2
      var i = 0;
      if (m[4] > m[0]) i = 1;
      if (m[8] > m[i * 3 + i]) i = 2;
      var j = (i + 1) % 3;
      var k = (i + 2) % 3;

      root = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
      array[i] = 0.5 * root;
      root = 0.5 / root;
      array[3] = (m[j * 3 + k] - m[k * 3 + j]) * root;
      array[j] = (m[j * 3 + i] + m[i * 3 + j]) * root;
      array[k] = (m[k * 3 + i] + m[i * 3 + k]) * root;
    }
    return this;
  }

  // only sets the rotation part, leaves translation and other fields untouched
  void toRotationMatrix4(Matrix4 out) {
    double x2 = x + x,
        y2 = y + y,
        z2 = z + z,
        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[4] = yx - wz;
    out[8] = zx + wy;

    out[1] = yx + wz;
    out[5] = 1 - xx - zz;
    out[9] = zy - wx;

    out[2] = zx - wy;
    out[6] = zy + wx;
    out[10] = 1 - xx - yy;
  }

  Quaternion slerp(Quaternion a, Quaternion b, double t) {
    double ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    double bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];
    double omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if (cosom < 0.0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    // calculate coefficients
    if ((1.0 - cosom) > 0.000001) {
      // standard case (slerp)
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      // "from" and "to" quaternions are very close
      //  ... so we can do a linear interpolation
      scale0 = 1.0 - t;
      scale1 = t;
    }
    // calculate final values
    array[0] = scale0 * ax + scale1 * bx;
    array[1] = scale0 * ay + scale1 * by;
    array[2] = scale0 * az + scale1 * bz;
    array[3] = scale0 * aw + scale1 * bw;

    return this;
  }

  Quaternion copy() {
    return new Quaternion.fromList(this.array);
  }
}
