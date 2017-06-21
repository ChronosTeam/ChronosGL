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
  double range;

  PointLight(
      String name, this.pos, this._colDiffuse, this._colSpecular, this.range)
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
    m[o + 7] = range;
  }

  @override
  VM.Matrix4 ExtractShadowProjViewMatrix() {
    assert(false, "NYI");
    return new VM.Matrix4.zero();
  }

  @override
  String toString() {
    return "PL: p:${pos}  r:${range}";
  }
}

const double _orthoDim = 40.0;

class DirectionalLight extends Light {
  VM.Vector3 dir;
  final VM.Vector3 _colDiffuse;
  final VM.Vector3 _colSpecular;
  final double dim;

  VM.Matrix4 _projViewMat = new VM.Matrix4.zero();
  VM.Matrix4 _tmpMat = new VM.Matrix4.zero();

  DirectionalLight(String name, VM.Vector3 this.dir, this._colDiffuse,
      this._colSpecular, this.dim)
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
  }

  @override
  VM.Matrix4 ExtractShadowProjViewMatrix() {
    VM.setOrthographicMatrix(_projViewMat, -dim, dim, -dim, dim, -dim, dim);

    VM.Vector3 up = (dir.x == 0.0 && dir.z == 0.0) ? _up2 : _up;
    VM.setViewMatrix(_tmpMat, new VM.Vector3.zero(), dir, up);
    _projViewMat.multiply(_tmpMat);
    return _projViewMat;
  }

  @override
  String toString() {
    return "DL: p:${dir}";
  }
}

class SpotLight extends Light {
  VM.Vector3 pos;
  VM.Vector3 dir;
  final VM.Vector3 _colDiffuse;
  final VM.Vector3 _colSpecular;
  double range;
  double angle;
  //
  double _spotFocus;
  //
  double _aspect = 1.0;
  double _near;
  double _far;
  VM.Matrix4 _m1 = new VM.Matrix4.zero();
  VM.Matrix4 _m2 = new VM.Matrix4.zero();

  SpotLight(
    String name,
    VM.Vector3 this.pos,
    VM.Vector3 this.dir,
    this._colDiffuse,
    this._colSpecular,
    this.range,
    this.angle,
    this._spotFocus,
    this._near,
    this._far,
  )
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
    m[o + 7] = range;
    m[o + 11] = Math.cos(angle);
    m[o + 15] = _spotFocus;
  }

  @override
  VM.Matrix4 ExtractShadowProjViewMatrix() {
    VM.Vector3 up = (dir.x == 0.0 && dir.z == 0.0) ? _up2 : _up;

    VM.setViewMatrix(_m1, pos, dir + pos, up);
    // 2.1 = 2.0 + epsilon
    VM.setPerspectiveMatrix(_m2, 2.1 * angle, _aspect, _near, _far);
    _m2.multiply(_m1);
    return _m2;
  }

  @override
  String toString() {
    return "SL: p:${pos}  d:${dir}  r:${range}  a:${angle}";
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
class Illumination extends UniformSource {
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
  void AddToSink(UniformSink inputs) {
    _SetLightInfo(_lightDescs, _lightTypes, _lights);
    inputs.SetInput(uLightDescs, _lightDescs, this);
    inputs.SetInput(uLightTypes, _lightTypes, this);
  }

  @override
  void RemoveFromSink(UniformSink inputs) {
    inputs.Remove(uLightDescs);
    inputs.Remove(uLightTypes);
  }
}
