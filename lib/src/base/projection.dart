part of base;

/// ## Class Orthographic (is a RenderInputProvider)
/// TBD
class Orthographic extends RenderInputProvider {
  final Camera _camera;
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
  Orthographic(this._camera, this._l, this._r, this._d, this._f, this._b)
      : super("othrogrpahic") {
    Update();
  }

  @override
  void AddRenderInputs(RenderInputs inputs) {
    _camera.getViewMatrix(_viewMatrix);
    _projViewMatrix.setFrom(_proj);
    _projViewMatrix.multiply(_viewMatrix);
    inputs.SetInputWithOrigin(this, uPerspectiveViewMatrix, _projViewMatrix);
  }

  @override
  void RemoveRenderInputs(RenderInputs inputs) {
    inputs.Remove(uPerspectiveViewMatrix);
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

/// ## Class Perspective (is a RenderInputProvider)
/// provides the **Input** for perspective projection, i.e.
/// the uPerspectiveViewMatrix Uniform which also requires a **Camera**
/// for view matrix.
class Perspective extends RenderInputProvider {
  Camera _camera;
  double _fov = 50.0; // horizontal fov in deg  divided by 2
  double _aspect = 1.0;
  double _near = 0.1;
  double _far = 1000.0;
  final VM.Matrix4 _perspectiveViewMatrix = new VM.Matrix4.identity();
  final VM.Matrix4 _viewMatrix = new VM.Matrix4.identity();
  final VM.Matrix4 _mat = new VM.Matrix4.zero();

  Perspective(this._camera,
      [this._near = 0.1, this._far = 1000.0, String name = "perspective"])
      : super(name) {
    Update();
  }

  void AdjustAspect(int w, int h) {
    double a = w / h;

    if (_aspect == a) return;
    _aspect = a;
    Update();
  }

  void Update() {
    VM.setPerspectiveMatrix(_mat, _fov * Math.PI / 180.0, _aspect, _near, _far);
  }

  void UpdateFov(double fov) {
    if (_fov == fov) return;
    _fov = fov;
    Update();
  }

  void UpdateCamera(Camera cam) {
    _camera = cam;
  }

  @override
  void AddRenderInputs(RenderInputs inputs) {
    inputs.SetInputWithOrigin(this, uEyePosition, _camera.getEyePosition());
    _camera.getViewMatrix(_viewMatrix);
    _perspectiveViewMatrix.setFrom(_mat);
    _perspectiveViewMatrix.multiply(_viewMatrix);
    inputs.SetInputWithOrigin(
        this, uPerspectiveViewMatrix, _perspectiveViewMatrix);
  }

  @override
  void RemoveRenderInputs(RenderInputs inputs) {
    inputs.Remove(uEyePosition);
    inputs.Remove(uPerspectiveViewMatrix);
  }
}
