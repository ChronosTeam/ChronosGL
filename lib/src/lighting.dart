part of chronosgl;

int typeLightNone = 1;
int typeLightSpot = 2;
int typeLightPoint = 3;
int typeLightHemi = 4;
int typeLightDir = 5;

class Light {
  int _type;
  VM.Vector3 _pos = new VM.Vector3.zero();
  VM.Vector3 _dir = new VM.Vector3.zero();
  VM.Vector3 _colDiffuse = new VM.Vector3.zero();
  VM.Vector3 _colSpecular = new VM.Vector3.zero();
  VM.Vector3 _colGround = new VM.Vector3.zero(); // for Hemisperical
  double _range = 0.0; // for spot and point
  double _spotCutoff = 0.0; // for spot
  double _spotFocus = 0.0; // for spot

  Light.Point(this._pos, this._colDiffuse, this._colSpecular, this._range) {
    _type = typeLightPoint;
  }

  Light.Spot(this._pos, this._dir, this._colDiffuse, this._colSpecular) {
    _type = typeLightSpot;
  }

  Light.Directional(this._dir, this._colDiffuse, this._colSpecular,
      this._spotCutoff, this._spotFocus) {
    _type = typeLightDir;
  }

  Light.Hemispherical(
      this._dir, this._colDiffuse, this._colGround, this._colSpecular) {
    _type = typeLightHemi;
  }

  // This needs to stay in sync with UnpackLightSourceInfo
  VM.Matrix4 PackInfo(VM.Matrix4 viewMatrix) {
    VM.Matrix4 m = new VM.Matrix4.zero();
    VM.Vector4 p = new VM.Vector4.zero();
    // do pos or ground
    if (_type == typeLightHemi) {
      m[0] = _colGround.x;
      m[1] = _colGround.y;
      m[2] = _colGround.z;
    } else {

      p.setValues(_pos.x, _pos.y, _pos.z, 1.0);
      viewMatrix.transform(p);

      m[0] = p[0];
      m[1] = p[1];
      m[2] = p[2];
    }
    // do dir
    p.setValues(_dir.x, _dir.y, _dir.z, 1.0);
    viewMatrix.transform(p);
    m[4] = p[0];
    m[5] = p[1];
    m[6] = p[2];
    //
    m[8] = _colDiffuse.x;
    m[9] = _colDiffuse.y;
    m[10] = _colDiffuse.z;
    //
    m[12] = _colSpecular.x;
    m[13] = _colSpecular.y;
    m[14] = _colSpecular.z;
    //
    m[3] = _range;
    m[7] = _spotCutoff;
    m[15] = _spotFocus;
    return m;
  }
}
