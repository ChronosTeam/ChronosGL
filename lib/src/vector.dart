part of chronos_gl;

class Vector {
  
  Float32List array = new Float32List(3);
  
  
  double get x => array[0];
  double get y => array[1];
  double get z => array[2];
  
  set x(double v)  => array[0] = v;
  set y(double v)  => array[1] = v;
  set z(double v)  => array[2] = v;
  
  
  Vector( [num x=0.0, num y=0.0, num z=0.0])
  {
    array[0] = x;
    array[1] = y;
    array[2] = z;
  }
  
  double operator [](int index) {
    return array[index];
  }
  

  void operator []=(int index, double value) {
    array[index] = value;
  }

  void set( Vector v) {
      array[0] = v[0];
      array[1] = v[1];
      array[2] = v[2];
  }
  
  void add( Vector v) {
      array[0] += v[0];
      array[1] += v[1];
      array[2] += v[2];
  }

  void subtract( Vector v) {
      array[0] -= v[0];
      array[1] -= v[1];
      array[2] -= v[2];
  }

  void scale( num val) {
      array[0] *= val;
      array[1] *= val;
      array[2] *= val;
  }

  void negate() {
    array[0] = -array[0];
    array[1] = -array[1];
    array[2] = -array[2];
  }
  
  void normalize() {
    double x = array[0], y = array[1], z = array[2];
    double len = Math.sqrt(x * x + y * y + z * z);

    if (len==0) {
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
  }
  
  // I think the from and to is swapped, but it's the same in glmatrix...
  void direction( Vector from, Vector to)
  {
    num x = from[0] - to[0],
        y = from[1] - to[1],
        z = from[2] - to[2],
        len = Math.sqrt(x * x + y * y + z * z);

    if (len==0) {
      array[0] = 0.0;
      array[1] = 0.0;
      array[2] = 0.0;
    } else {
      len = 1 / len;
      array[0] = x * len;
      array[1] = y * len;
      array[2] = z * len;
    }

  }
  
  Vector cross(Vector vec1, Vector vec2) {
    num x = vec1[0], y = vec1[1], z = vec1[2],
        x2 = vec2[0], y2 = vec2[1], z2 = vec2[2];

    array[0] = y * z2 - z * y2;
    array[1] = z * x2 - x * z2;
    array[2] = x * y2 - y * x2;
    return this;
  }
  
  void lerp( Vector v, double lerp) {
    array[0] += lerp * (v[0] - array[0]);
    array[1] += lerp * (v[1] - array[1]);
    array[2] += lerp * (v[2] - array[2]);
  }
  
  double dist( Vector to) {
    double x = to[0] - array[0],
           y = to[1] - array[1],
           z = to[2] - array[2];
    
    return Math.sqrt(x*x + y*y + z*z);
  }
  
  // if we initialize the matrix here we get an endless loop
  // because Matrix also creates a new Vector...
  Matrix4 m = null;
  List<num> v = new List<num>(4);
  
  bool unproject( Matrix4 view, Matrix4 proj, List<num> viewport) {
    
    if( m == null)
      m = new Matrix4(); 

    v[0] = (array[0] - viewport[0]) * 2.0 / viewport[2] - 1.0;
    v[1] = (array[1] - viewport[1]) * 2.0 / viewport[3] - 1.0;
    v[2] = 2.0 * array[2] - 1.0;
    v[3] = 1.0;
    
    m.setElements(proj);
    m.multiplyWith( view );
    if(!m.invert()) { return false; }
    
    m.multiplyVec4( v);
    if(v[3] == 0.0) { return false; }

    array[0] = v[0] / v[3];
    array[1] = v[1] / v[3];
    array[2] = v[2] / v[3];
  }
 
  String toString() {
    return array.toString();
  }

}