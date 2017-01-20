part of base;

final int RIGHTX = 0, RIGHTY = 4, RIGHTZ = 8;
final int UPX = 1, UPY = 5, UPZ = 9;
final int BACKX = 2, BACKY = 6, BACKZ = 10;
final int POSX = 12, POSY = 13, POSZ = 14;

/// ## Class Spatial (is a NamedEntity)
/// is a base class for object that need to be transformed, e.g.
/// moved, scaled, rotated.
class Spatial extends NamedEntity {
  Spatial(String name) : super(name);
  // position and rotation
  // the idea to use a matrix4 for this might be problematic,
  // as the values degenerate over time.
  // Might be better to use Quaternions anyways
  // regular lookAt calls could "repair" the matrix
  // ( or an optimized variant of lookAt).
  final VM.Matrix4 transform = new VM.Matrix4.identity();

  // temp variables to avoid creating new objects:
  // CHANGES TO THE VALUES WILL NOT IMPACT THE MATRIX AND MIGHT BE SHARED WITH OTHER USERS
  final VM.Vector3 _pos = new VM.Vector3.zero();
  final VM.Vector3 _back = new VM.Vector3.zero();
  final VM.Vector3 _up = new VM.Vector3.zero();
  final VM.Vector3 _right = new VM.Vector3.zero();

  VM.Vector3 getPos() {
    _pos[0] = this.transform[POSX];
    _pos[1] = this.transform[POSY];
    _pos[2] = this.transform[POSZ];
    return this._pos;
  }

  // get the values from column 2. They represent the trail direction of this matrx
  // return ReadOnly vec3
  VM.Vector3 getBack() {
    _back[0] = transform[BACKX];
    _back[1] = transform[BACKY];
    _back[2] = transform[BACKZ];
    return _back;
  }

  // get the values from column 1. They represent the up vector of this matrx
  // return ReadOnly vec3
  VM.Vector3 getUp() {
    _up[0] = transform[UPX];
    _up[1] = transform[UPY];
    _up[2] = transform[UPZ];
    return _up;
  }

  // get the values from column 0. They represent the right vector of this matrx
  // return ReadOnly vec3
  VM.Vector3 getRight() {
    _right[0] = transform[RIGHTX];
    _right[1] = transform[RIGHTY];
    _right[2] = transform[RIGHTZ];
    return _right;
  }

  void setPos(double x, double y, double z) // TODO: make dynamic
  {
    transform[POSX] = x;
    transform[POSY] = y;
    transform[POSZ] = z;
  }
  /*
  void scale(num x, num y, num z) {
    transform[0] *= x;
    transform[5] *= x;
    transform[10] *= x;
  }*/

  void addPos(double x, double y, double z) {
    translate(x, y, z); // alias
  }

  void addPosFromVec(VM.Vector3 vector) {
    translateFromVec(vector); // alias
  }

  void setPosFromVec(VM.Vector3 vector) {
    transform[POSX] = vector[0];
    transform[POSY] = vector[1];
    transform[POSZ] = vector[2];
  }

  void setPosFromSpherical(double radius, double azimuth, double polar) {
    double rcp = radius * Math.cos(polar);
    setPos(rcp * Math.cos(azimuth), radius * Math.sin(polar),
        rcp * Math.sin(azimuth));
  }

  void translate(double x, double y, double z, [double factor = 1.0]) {
    transform[POSX] += x * factor;
    transform[POSY] += y * factor;
    transform[POSZ] += z * factor;
  }

  void translateFromVec(VM.Vector3 vector, [double factor = 1.0]) {
    transform[POSX] += vector[0] * factor;
    transform[POSY] += vector[1] * factor;
    transform[POSZ] += vector[2] * factor;
  }

  void moveForward(double amount) {
    moveBackward(-amount);
  }

  void moveBackward(double amount) {
    transform[POSX] += transform[BACKX] * amount;
    transform[POSY] += transform[BACKY] * amount;
    transform[POSZ] += transform[BACKZ] * amount;
  }

  void moveUp(double amount) {
    transform[POSX] += transform[UPX] * amount;
    transform[POSY] += transform[UPY] * amount;
    transform[POSZ] += transform[UPZ] * amount;
  }

  void moveDown(double amount) {
    moveUp(-amount);
  }

  void moveLeft(double amount) {
    moveRight(-amount);
  }

  void moveRight(double amount) {
    transform[POSX] += transform[RIGHTX] * amount;
    transform[POSY] += transform[RIGHTY] * amount;
    transform[POSZ] += transform[RIGHTZ] * amount;
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
    transform.rotate(getRight(), -amount);
  }

  void lookDown(double amount) {
    transform.rotate(getRight(), amount);
  }

  void rollLeft(double amount) {
    transform.rotate(getBack(), -amount);
  }

  void rollRight(double amount) {
    transform.rotate(getBack(), amount);
  }

  void lookLeft(double amount) {
    transform.rotate(getUp(), -amount);
  }

  void lookRight(double amount) {
    transform.rotate(getUp(), amount);
  }

  void lookAt(VM.Vector3 target, [VM.Vector3 up]) {
    //TODO(rhulha): why is this necessary? The old math library did not fill in those matrix cells
    double x = transform[12];
    double y = transform[13];
    double z = transform[14];
    if (up == null) up = new VM.Vector3(0.0, 1.0, 0.0);
    VM.setViewMatrix(transform, getPos(), target, up);
    transform[12] = x;
    transform[13] = y;
    transform[14] = z;
    //transform.lookAt_alt(getPos(), target, up);
  }
}
