part of chronosgl;

int typeLightNone = 1;
int typeLightSpot = 2;
int typeLightPoint = 3;
int typeLightHemi = 4;
int typeLightDir = 5;

class Light {
  int _type;
  Vector _pos;
  Vector _dir;

  Light.Point(this._pos) {
    _type = typeLightPoint;
  }

  Matrix4 PackInfo(Matrix4 viewMatrix) {
    List<double> p = [_pos.x, _pos.y, _pos.z, 1.0];
    viewMatrix.multiplyVec4(p);
    Matrix4 m = new Matrix4();
    m[0] = p[0];
    m[1] = p[1];
    m[2] = p[2];
    return m;
  }
}
