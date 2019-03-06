part of core;

/// provides an Orthographic Perspective Matrix
class Orthographic extends UniformGroup {
  // d = "down", up is computed dynamically based on height & width
  Orthographic(this._camera, this._l, this._r, this._d, this._f, this._b)
      : super("othrogrpahic") {
    Update();
  }

  final Spatial _camera;
  final VM.Matrix4 _proj = VM.Matrix4.zero();
  final VM.Matrix4 _viewMatrix = VM.Matrix4.zero();
  final VM.Matrix4 _projViewMatrix = VM.Matrix4.identity();
  double _aspect = 1.0;
  double _l;
  double _r;
  double _d;
  double _f;
  double _b;

  @override
  Map<String, Object> GetUniforms() {
    _camera.getViewMatrix(_viewMatrix);
    _projViewMatrix.setFrom(_proj);
    _projViewMatrix.multiply(_viewMatrix);
    ForceUniform(uPerspectiveViewMatrix, _projViewMatrix);
    return _uniforms;
  }

  void Update() {
    double w = _r - _l;
    double h = w / _aspect;
    VM.setOrthographicMatrix(_proj, _l, _r, _d, _d + h, _f, _b);
  }

  void AdjustAspect(int w, int h) {
    double a = w / h;
    if (_aspect == a) return;
    _aspect = a;
    Update();
  }
}

/// provides the **Input** for perspective projection, i.e.
/// the uPerspectiveViewMatrix Uniform which also requires a **Camera**
/// for view matrix.
class Perspective extends UniformGroup {
  Perspective(this._camera, this._near, this._far,
      [String name = "perspective"])
      : super(name) {
    Update();
  }

  Spatial _camera;
  double _fov = 50.0; // horizontal fov in deg  divided by 2
  double _aspect = 1.0;
  double _near = 0.1;
  double _far = 1000.0;
  final VM.Matrix4 _perspectiveViewMatrix = VM.Matrix4.identity();
  final VM.Matrix4 _viewMatrix = VM.Matrix4.identity();
  final VM.Matrix4 _mat = VM.Matrix4.zero();

  void AdjustAspect(int w, int h) {
    double a = w / h;

    if (_aspect == a) return;
    _aspect = a;
    Update();
  }

  void Update() {
    VM.setPerspectiveMatrix(_mat, _fov * Math.pi / 180.0, _aspect, _near, _far);
  }

  void UpdateFov(double fov) {
    if (_fov == fov) return;
    _fov = fov;
    Update();
  }

  void UpdateCamera(Spatial cam) {
    _camera = cam;
  }

  @override
  Map<String, Object> GetUniforms() {
    ForceUniform(uEyePosition, _camera.getEyePosition());
    _camera.getViewMatrix(_viewMatrix);
    _perspectiveViewMatrix.setFrom(_mat);
    _perspectiveViewMatrix.multiply(_viewMatrix);
    ForceUniform(uPerspectiveViewMatrix, _perspectiveViewMatrix);
    return _uniforms;
  }
}
