part of base;

final VM.Vector3 _up = new VM.Vector3(0.0, 1.0, 0.0);
final VM.Vector3 _up2 = new VM.Vector3(0.0, 0.0, 1.0);

/// ## Class Light
/// represents a light source with helpers for
/// light and shadow computation.
/// **Light** is NOT a **ShaderInputProvider**. But several **Lights**
/// can be added to an **Illumination** object which is
/// a **ShaderInputProvider**.
abstract class Light extends NamedEntity {
  final int type;
  Light(String name, this.type) : super(name);

  void ExtractInfo(Float32List m, int offset);

  VM.Matrix4 ExtractShadowProjViewMatrix();
}

class PointLight extends Light {
  VM.Vector3 pos;
  VM.Vector3 _colDiffuse;
  VM.Vector3 _colSpecular;
  double _range;
  double _glossiness;

  PointLight(String name, this.pos, this._colDiffuse, this._colSpecular,
      this._range, this._glossiness)
      : super(name, lightTypePoint);

  // Must be in sync with UnpackPointLightInfo
  @override
  void ExtractInfo(Float32List m, int o) {
    m[o + 0] = pos.x;
    m[o + 1] = pos.y;
    m[o + 2] = pos.z;
    //
    m[o + 8] = _colDiffuse.x;
    m[o + 9] = _colDiffuse.y;
    m[o + 10] = _colDiffuse.z;
    //
    m[o + 12] = _colSpecular.x;
    m[o + 13] = _colSpecular.y;
    m[o + 14] = _colSpecular.z;
    //
    m[o + 3] = _glossiness;
    m[o + 7] = _range;
  }

  @override
  VM.Matrix4 ExtractShadowProjViewMatrix() {
    assert(false, "NYI");
    return new VM.Matrix4.zero();
  }
}

class DirectionalLight extends Light {
  VM.Vector3 dir;
  VM.Vector3 _colDiffuse;
  VM.Vector3 _colSpecular;
  double _glossiness;
  double aspect = 1.0;
  double _l = -30.0;
  double _r = 30.0;
  double _d = -30.0;
  double _f = 0.0;
  double _b = 100.0;

  VM.Matrix4 _projViewMat = new VM.Matrix4.zero();
  VM.Matrix4 _tmpMat = new VM.Matrix4.zero();

  DirectionalLight(String name, VM.Vector3 this.dir, this._colDiffuse,
      this._colSpecular, this._glossiness)
      : super(name, lightTypeDirectional);

  // Must be in sync with UnpackDirectionalLightInfo
  @override
  void ExtractInfo(Float32List m, int o) {
    m[o + 4] = dir.x;
    m[o + 5] = dir.y;
    m[o + 6] = dir.z;
    //
    m[o + 8] = _colDiffuse.x;
    m[o + 9] = _colDiffuse.y;
    m[o + 10] = _colDiffuse.z;
    //
    m[o + 12] = _colSpecular.x;
    m[o + 13] = _colSpecular.y;
    m[o + 14] = _colSpecular.z;
    //
    m[o + 3] = _glossiness;
  }

  @override
  VM.Matrix4 ExtractShadowProjViewMatrix() {
    double w = _r - _l;
    double h = w / aspect;

    VM.setOrthographicMatrix(_projViewMat, _l, _r, _d, _d + h, _f, _b);

    VM.Vector3 up = (dir.x == 0.0 && dir.z == 0.0) ? _up2 : _up;
    VM.setViewMatrix(_tmpMat, new VM.Vector3.zero(), dir, up);
    _projViewMat.multiply(_tmpMat);
    return _projViewMat;
  }
}

class SpotLight extends Light {
  VM.Vector3 pos;
  VM.Vector3 dir;
  VM.Vector3 _colDiffuse;
  VM.Vector3 _colSpecular;
  double _range;
  double _angle;
  double _spotFocus;
  double _glossiness;

  SpotLight(
      String name,
      VM.Vector3 this.pos,
      VM.Vector3 this.dir,
      this._colDiffuse,
      this._colSpecular,
      this._range,
      this._angle,
      this._spotFocus,
      this._glossiness)
      : super(name, lightTypeSpot);

  // Must be in sync with UnpackSpotLightInfo
  @override
  void ExtractInfo(Float32List m, int o) {
    m[o + 0] = pos.x;
    m[o + 1] = pos.y;
    m[o + 2] = pos.z;
    //
    m[o + 4] = dir.x;
    m[o + 5] = dir.y;
    m[o + 6] = dir.z;
    //
    m[o + 8] = _colDiffuse.x;
    m[o + 9] = _colDiffuse.y;
    m[o + 10] = _colDiffuse.z;
    //
    m[o + 12] = _colSpecular.x;
    m[o + 13] = _colSpecular.y;
    m[o + 14] = _colSpecular.z;
    //
    m[o + 3] = _glossiness;
    m[o + 7] = _range;
    m[o + 11] = Math.cos(_angle);
    m[o + 15] = _spotFocus;
  }

  /*
  @override
  VM.Matrix4 ExtractShadowProjViewMatrix() {
    VM.Vector3 up = (dir.x == 0.0 && dir.z == 0.0) ? _up2 : _up;
    VM.Matrix4 mat = new VM.Matrix4.zero();
    VM.setViewMatrix(mat, _pos, _dir - _pos, up);
    return mat;
  }
}
*/

  @override
  VM.Matrix4 ExtractShadowProjViewMatrix() {
    VM.Vector3 up = (dir.x == 0.0 && dir.z == 0.0) ? _up2 : _up;
    VM.Matrix4 mat = new VM.Matrix4.zero();
    VM.setViewMatrix(mat, pos, pos - dir, up);
    return mat;
  }
}

/*
// TODO: add proper support for this
class HemisphericalLight implements Light {
  VM.Vector3 _dir;
  VM.Vector3 _colDiffuse;
  VM.Vector3 _colSpecular;
  VM.Vector3 _colGround;

  HemisphericalLight(
      VM.Vector3 dir, this._colDiffuse, this._colGround, this._colSpecular);

  @override
  void ExtractInfo(Float32List m) {
    assert(false, "NYI");
  }

  @override
  void ExtractShadowViewMatrix(Float32List m) {
    assert(false, "NYI");
  }
}
*/

/// ## Class Illumination (is a RenderInputProvider)
/// represents a collection of Lights.
class Illumination extends RenderInputProvider {
  final List<Light> _lights = [];
  final Float32List _lightDescs = new Float32List(16 * kMaxLights);
  final Float32List _lightTypes = new Float32List(kMaxLights);

  Illumination() : super("illumination");

  void AddLight(Light l) {
    _lights.add(l);
  }

  static void _SetLightInfo(
      Float32List descs, Float32List types, List<Light> lights) {
    // maybe only do this as needed
    descs.fillRange(0, descs.length, 0.0);
    types.fillRange(0, types.length, lightTypeInvalid + 0.0);
    int n = 0;
    for (Light l in lights) {
      if (l.enabled) {
        l.ExtractInfo(descs, n * 16);
        types[n] = l.type + 0.0;
        n++;
      }
    }
  }

  @override
  void AddRenderInputs(RenderInputs inputs) {
    _SetLightInfo(_lightDescs, _lightTypes, _lights);
    inputs.SetInputWithOrigin(this, uLightDescs, _lightDescs);
    inputs.SetInputWithOrigin(this, uLightTypes, _lightTypes);
  }

  @override
  void RemoveRenderInputs(RenderInputs inputs) {
    inputs.Remove(uLightDescs);
    inputs.Remove(uLightTypes);
  }
}

// very much like a orthographic
/*
class ShadowProjection extends RenderInputProvider {
  final Light _light;
  final VM.Matrix4 _proj = new VM.Matrix4.zero();
  final VM.Matrix4 _viewMatrix = new VM.Matrix4.zero();
  final VM.Matrix4 _projViewMatrix = new VM.Matrix4.identity();
  double _aspect = 1.0;
  double _l;
  double _r;
  double _d;
  double _f;
  double _b;

  // d = "down", up is computed dynamically based on height & width
  ShadowProjection(this._light, this._l, this._r, this._d, this._f, this._b)
      : super("shadow-projection") {
    Update();
  }

  @override
  void AddRenderInputs(RenderInputs inputs) {
    _light.ExtractShadowViewMatrix(_viewMatrix);
    _projViewMatrix.setFrom(_proj);
    _projViewMatrix.multiply(_viewMatrix);
    //print("lightmat: ${_projViewMatrix}");
    inputs.SetInputWithOrigin(
        this, uLightPerspectiveViewMatrix + "${_light.no}", _projViewMatrix);
  }

  @override
  void RemoveRenderInputs(RenderInputs inputs) {
    inputs.Remove(uLightPerspectiveViewMatrix + "${_light.no}");
  }

  void AdjustAspect(int w, int h) {
    double a = w / h;
    if (_aspect == a) return;
    _aspect = a;
    Update();
  }

  void Update() {
    double w = _r - _l;
    double h = w / _aspect;
    if (_light is DirectionalLight) {
      VM.setOrthographicMatrix(_proj, _l, _r, _d, _d + h, _f, _b);
    } else if (_light is SpotLight) {
      // FIXME - fix the hardcoded constant
      VM.setPerspectiveMatrix(_proj, 90.0 * Math.PI / 180.0, _aspect, .1, _b);
    } else {
      assert(false);
    }
  }
}
*/
