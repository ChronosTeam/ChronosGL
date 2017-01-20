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
  void ExtractInfo(Float32List m, int offset);
  void ExtractShadowViewMatrix(Float32List m, int offset);
  Light(String name) : super(name);
}

class PointLight extends Light {
  VM.Vector3 _pos;
  VM.Vector3 _colDiffuse;
  VM.Vector3 _colSpecular;
  double _range;
  double _glossiness;

  PointLight(String name, this._pos, this._colDiffuse, this._colSpecular,
      this._range, this._glossiness)
      : super(name);

  // Must be in sync with UnpackPointLightInfo
  @override
  void ExtractInfo(Float32List m, int o) {
    m[o + 0] = _pos.x;
    m[o + 1] = _pos.y;
    m[o + 2] = _pos.z;
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
  void ExtractShadowViewMatrix(Float32List m, int offset) {
    assert(false, "NYI");
  }
}

class DirectionalLight extends Light {
  VM.Vector3 _dir;
  VM.Vector3 _colDiffuse;
  VM.Vector3 _colSpecular;
  double _glossiness;

  DirectionalLight(String name, VM.Vector3 this._dir, this._colDiffuse,
      this._colSpecular, this._glossiness)
      : super(name);

  // Must be in sync with UnpackDirectionalLightInfo
  @override
  void ExtractInfo(Float32List m, int o) {
    m[o + 4] = _dir.x;
    m[o + 5] = _dir.y;
    m[o + 6] = _dir.z;
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
  void ExtractShadowViewMatrix(Float32List m, offset) {
    VM.Vector3 up = (_dir.x == 0.0 && _dir.z == 0.0) ? _up2 : _up;
    VM.Matrix4 mat = new VM.Matrix4.zero();
    VM.setViewMatrix(mat, new VM.Vector3.zero(), _dir, up);
    m.insertAll(offset, mat.storage);
  }
}

class SpotLight extends Light {
  VM.Vector3 _pos;
  VM.Vector3 _dir;
  VM.Vector3 _colDiffuse;
  VM.Vector3 _colSpecular;
  double _range;
  double _spotCutoff;
  double _spotFocus;
  double _glossiness;

  SpotLight(
      String name,
      VM.Vector3 this._pos,
      VM.Vector3 this._dir,
      this._colDiffuse,
      this._colSpecular,
      this._range,
      this._spotCutoff,
      this._spotFocus,
      this._glossiness)
      : super(name);

  // Must be in sync with UnpackSpotLightInfo
  @override
  void ExtractInfo(Float32List m, int o) {
    m[o + 0] = _pos.x;
    m[o + 1] = _pos.y;
    m[o + 2] = _pos.z;
    //
    m[o + 4] = _dir.x;
    m[o + 5] = _dir.y;
    m[o + 6] = _dir.z;
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
    m[o + 11] = _spotCutoff;
    m[o + 15] = _spotFocus;
  }

  @override
  void ExtractShadowViewMatrix(Float32List m, int offset) {
    VM.Vector3 up = (_dir.x == 0.0 && _dir.z == 0.0) ? _up2 : _up;
    VM.Matrix4 mat = new VM.Matrix4.zero();
    VM.setViewMatrix(mat, _pos, _pos - _dir, up);
    m.insertAll(offset, mat.storage);
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
  final List<PointLight> _pointLights = [];
  final List<SpotLight> _spotLights = [];
  final List<DirectionalLight> _directionalLights = [];
  final Float32List _pointLightsInfo = new Float32List(16 * kMaxLightsPerType);
  final Float32List _spotLightsInfo = new Float32List(16 * kMaxLightsPerType);
  final Float32List _directionalLightsInfo =
      new Float32List(16 * kMaxLightsPerType);

  Illumination() : super("illumination");

  void AddLight(Light l) {
    if (l is PointLight) {
      _pointLights.add(l);
    } else if (l is SpotLight) {
      _spotLights.add(l);
    } else if (l is DirectionalLight) {
      _directionalLights.add(l);
    } else {
      assert(false, "known light $l");
    }
  }

  static void _SetLightInfo(Float32List data, List<Light> lights) {
    data.fillRange(0, data.length, 0.0);
    int offset = 0;
    for (Light l in lights) {
      if (l.enabled) {
        l.ExtractInfo(data, offset);
        offset += 16;
      }
    }
  }

  @override
  void AddRenderInputs(RenderInputs inputs) {
    _SetLightInfo(_spotLightsInfo, _spotLights);
    inputs.SetInputWithOrigin(this, uSpotLights, _spotLightsInfo);

    _SetLightInfo(_pointLightsInfo, _pointLights);
    inputs.SetInputWithOrigin(this, uPointLights, _pointLightsInfo);

    _SetLightInfo(_directionalLightsInfo, _directionalLights);
    inputs.SetInputWithOrigin(this, uDirectionalLights, _directionalLightsInfo);
  }

  @override
  void RemoveRenderInputs(RenderInputs inputs) {
    inputs.Remove(uSpotLights);
    inputs.Remove(uPointLights);
    inputs.Remove(uDirectionalLights);
  }
}

/*
// very much like a orthographic
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
    _light.getViewMatrixForShadow(_viewMatrix);
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
    switch (_light.type) {
      case typeLightDir:
        VM.setOrthographicMatrix(_proj, _l, _r, _d, _d + h, _f, _b);
        break;
      case typeLightSpot:
        // FIXME - fix the hardcoded constant
        VM.setPerspectiveMatrix(_proj, 90.0 * Math.PI / 180.0, _aspect, .1, _b);
        break;
      default:
        assert(false);
    }
  }
}
*/
