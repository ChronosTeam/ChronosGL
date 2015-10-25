part of chronosgl;

class Spatial {

  // position and rotation
  // the idea to use a matrix4 for this might be problematic, as the values degenerate over time. Might be better to use Quaternions anyways
  // regular lookAt calls could "repair" the matrix ( or an optimized variant of lookAt).
  Matrix4 transform = new Matrix4();

  // temp variables to avoid creating new objects:
  // CHANGES TO THE VALUES WILL NOT IMPACT THE MATRIX AND MIGHT BE SHARED WITH OTHER USERS
  Vector _pos = new Vector();
  Vector _back = new Vector();
  Vector _up = new Vector();
  Vector _right = new Vector();

  Vector getPos() {
    _pos[0] = this.transform[Matrix4.POSX];
    _pos[1] = this.transform[Matrix4.POSY];
    _pos[2] = this.transform[Matrix4.POSZ];
    return this._pos;
  }

  // get the values from column 2. They represent the trail direction of this matrx
  // return ReadOnly vec3
  Vector getBack() {
    _back[0] = transform[Matrix4.BACKX];
    _back[1] = transform[Matrix4.BACKY];
    _back[2] = transform[Matrix4.BACKZ];
    return _back;
  }

  // get the values from column 1. They represent the up vector of this matrx
  // return ReadOnly vec3
  Vector getUp() {
    _up[0] = transform[Matrix4.UPX];
    _up[1] = transform[Matrix4.UPY];
    _up[2] = transform[Matrix4.UPZ];
    return _up;
  }

  // get the values from column 0. They represent the right vector of this matrx
  // return ReadOnly vec3
  Vector getRight() {
    _right[0] = transform[Matrix4.RIGHTX];
    _right[1] = transform[Matrix4.RIGHTY];
    _right[2] = transform[Matrix4.RIGHTZ];
    return _right;
  }

  void setPos(num x, num y, num z) // TODO: make dynamic
  {
    transform[Matrix4.POSX] = x;
    transform[Matrix4.POSY] = y;
    transform[Matrix4.POSZ] = z;
  }

  void addPos(num x, num y, num z) {
    translate(x, y, z); // alias
  }

  void addPosFromVec(Vector vector) {
    translateFromVec(vector); // alias
  }

  void setPosFromVec(Vector vector) {
    transform[Matrix4.POSX] = vector[0];
    transform[Matrix4.POSY] = vector[1];
    transform[Matrix4.POSZ] = vector[2];
  }

  void setPosFromSpherical(double radius, double azimuth, double polar) {
    double rcp = radius * Math.cos(polar);
    setPos(rcp * Math.cos(azimuth), radius * Math.sin(polar),
        rcp * Math.sin(azimuth));
  }

  void translate(num x, num y, num z, [double factor = 1.0]) {
    transform[Matrix4.POSX] += x * factor;
    transform[Matrix4.POSY] += y * factor;
    transform[Matrix4.POSZ] += z * factor;
  }

  void translateFromVec(Vector vector, [double factor = 1.0]) {
    transform[Matrix4.POSX] += vector[0] * factor;
    transform[Matrix4.POSY] += vector[1] * factor;
    transform[Matrix4.POSZ] += vector[2] * factor;
  }

  void moveForward(num amount) {
    moveBackward(-amount);
  }

  void moveBackward(num amount) {
    transform[Matrix4.POSX] += transform[Matrix4.BACKX] * amount;
    transform[Matrix4.POSY] += transform[Matrix4.BACKY] * amount;
    transform[Matrix4.POSZ] += transform[Matrix4.BACKZ] * amount;
  }

  void moveUp(num amount) {
    transform[Matrix4.POSX] += transform[Matrix4.UPX] * amount;
    transform[Matrix4.POSY] += transform[Matrix4.UPY] * amount;
    transform[Matrix4.POSZ] += transform[Matrix4.UPZ] * amount;
  }

  void moveLeft(num amount) {
    moveRight(-amount);
  }

  void moveRight(num amount) {
    transform[Matrix4.POSX] += transform[Matrix4.RIGHTX] * amount;
    transform[Matrix4.POSY] += transform[Matrix4.RIGHTY] * amount;
    transform[Matrix4.POSZ] += transform[Matrix4.RIGHTZ] * amount;
  }

  void rotX(double angle) {
    transform.rotateX(angle);
  }

  void rotY(double angle) {
    transform.rotateY(angle);
  }

  void rotZ(double angle) {
    transform.rotateZ(angle);
  }

  void lookUp(double amount) {
    transform.rotate(-amount, getRight());
  }

  void lookDown(double amount) {
    transform.rotate(amount, getRight());
  }

  void rollLeft(double amount) {
    transform.rotate(-amount, getBack());
  }

  void rollRight(double amount) {
    transform.rotate(amount, getBack());
  }

  void lookLeft(double amount) {
    transform.rotate(-amount, getUp());
  }

  void lookRight(double amount) {
    transform.rotate(amount, getUp());
  }

  void lookAt(Vector target, [Vector up]) {
    transform.lookAt_alt(getPos(), target, up);
  }
}
