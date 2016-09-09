part of chronosgl;

const int typeLightNone = 1;
const int typeLightSpot = 2;
const int typeLightPoint = 3;
const int typeLightHemi = 4;
const int typeLightDir = 5;

const int LIGHT0 = 0;

final VM.Vector3 _up = new VM.Vector3(0.0, 1.0, 0.0);
final VM.Vector3 _up2 = new VM.Vector3(0.0, 0.0, 1.0);

class Light extends ShaderInputProvider {
  int no;
  int _type;
  VM.Vector3 _pos = new VM.Vector3.zero();
  VM.Vector3 _dir = new VM.Vector3.zero();
  VM.Vector3 _colDiffuse = new VM.Vector3.zero();
  VM.Vector3 _colSpecular = new VM.Vector3.zero();
  VM.Vector3 _colGround = new VM.Vector3.zero(); // for Hemispherical
  double _range = 0.0; // for spot and point
  double _spotCutoff = 0.0; // for spot
  double _spotFocus = 0.0;  // for spot

  // Light emanating from a point in all directions.
  // Light gets "weaker" with increased distance.
  Light.Point(
      this.no, this._pos, this._colDiffuse, this._colSpecular, this._range)
      : super("point") {
    _type = typeLightPoint;
  }

  // Light cone emanating from a point.
  // As the cone widens light gets "weaker"
  Light.Spot(this.no, this._pos, this._dir, this._colDiffuse, this._colSpecular,
      this._range, this._spotCutoff, this._spotFocus)
      : super("spot") {
    _type = typeLightSpot;
  }

  // Coming from one direction at infinite distance - e.g. the sun
  // Note, the direction also included POSITIONING information!
  // It needs to be large enough to be outside of the scene being  illuminated
  Light.Directional(this.no, this._dir, this._colDiffuse, this._colSpecular)
      : super("directional") {
    _type = typeLightDir;
  }

  Light.Hemispherical(
      this.no, this._dir, this._colDiffuse, this._colGround, this._colSpecular)
      : super("hemispherical") {
    _type = typeLightHemi;
  }

  void getViewMatrixForShadow(VM.Matrix4 m) {
    assert(_type == typeLightDir);
    VM.Vector3 up = (_dir.x == 0.0 && _dir.z == 0.0) ? _up2 : _up;
    // Note, here is where we use the fact that direction also includes
    // position.
    VM.setViewMatrix(m, _dir, new VM.Vector3.zero(), up);
  }

  // This needs to stay in sync with UnpackLightSourceInfo
  // in the shader
  VM.Matrix4 PackInfo() {
    VM.Matrix4 m = new VM.Matrix4.zero();
    // do pos or ground
    if (_type == typeLightHemi) {
      m[0] = _colGround.x;
      m[1] = _colGround.y;
      m[2] = _colGround.z;
    } else {
      // do position
      m[0] = _pos.x;
      m[1] = _pos.y;
      m[2] = _pos.z;
    }
    // do dir
    m[4] = _dir.x;
    m[5] = _dir.y;
    m[6] = _dir.z;
    //
    m[8] = _colDiffuse.x;
    m[9] = _colDiffuse.y;
    m[10] = _colDiffuse.z;
    //
    m[12] = _colSpecular.x;
    m[13] = _colSpecular.y;
    m[14] = _colSpecular.z;
    //
    //
    m[3] = _type + 0.0;
    m[7] = _range;
    m[11] = _spotCutoff;
    m[15] = _spotFocus;
    return m;
  }

  void UpdateUniforms(ShaderProgramInputs inputs) {
    inputs.SetUniformWithOrigin(this, uLightSourceInfo + "${no}", PackInfo());
  }
}
