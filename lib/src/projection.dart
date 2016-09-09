part of chronosgl;

abstract class Projection extends ShaderInputProvider {
  int _width;
  int _height;

  int get width => _width;
  int get height => _height;

  Projection(String name) : super(name);

  void UpdateUniforms(ShaderProgramInputs inputs);

  void Adjust(HTML.CanvasElement canvas,
      [double xscale = 1.0, double yscale = 1.0]) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    assert(h > 0);
    int ww = (w * xscale).floor();
    int hh = (h * yscale).floor();
    if (_width == ww && height == hh) return;
    _height = hh;
    _width = ww;
    Update();
  }

  void Update();
}


class Orthographic extends Projection {
  final Camera _camera;
  final VM.Matrix4 _proj = new VM.Matrix4.zero();
  final VM.Matrix4 _viewMatrix = new VM.Matrix4.zero();
  final VM.Matrix4 _projViewMatrix = new VM.Matrix4.identity();
  double _l;
  double _r;
  double _d;
  double _f;
  double _b;

  // d = "down", up is computed dynamically based on height & width
  Orthographic(this._camera, this._l, this._r, this._d, this._f, this._b)
      : super("othrogrpahic") {}

  void UpdateUniforms(ShaderProgramInputs inputs) {
    _camera.getViewMatrix(_viewMatrix);
    _projViewMatrix.setFrom(_proj);
    _projViewMatrix.multiply(_viewMatrix);
    inputs.SetUniformWithOrigin(this, uPerspectiveViewMatrix, _projViewMatrix);
  }

  void Update() {
    double w = _r - _l;
    double h = height * w / width;
    VM.setOrthographicMatrix(_proj, _l, _r, _d, _d + h, _f, _b);
  }
}

// very much like a orthographic
class ShadowProjection extends Projection {
  final Light _light;
  final VM.Matrix4 _proj = new VM.Matrix4.zero();
  final VM.Matrix4 _viewMatrix = new VM.Matrix4.zero();
  final VM.Matrix4 _projViewMatrix = new VM.Matrix4.identity();
  double _l;
  double _r;
  double _d;
  double _f;
  double _b;

  // d = "down", up is computed dynamically based on height & width
  ShadowProjection(this._light, this._l, this._r, this._d, this._f, this._b)
      : super("shadow-projection") {}

  void UpdateUniforms(ShaderProgramInputs inputs) {
    _light.getViewMatrixForShadow(_viewMatrix);
    _projViewMatrix.setFrom(_proj);
    _projViewMatrix.multiply(_viewMatrix);
    inputs.SetUniformWithOrigin(this, uPerspectiveViewMatrix, _projViewMatrix);
  }

  void Update() {
    double w = _r - _l;
    double h = height * w / width;
    VM.setOrthographicMatrix(_proj, _l, _r, _d, _d + h, _f, _b);
  }
}

class Perspective extends Projection {
  Camera _camera;
  double _fov = 50.0; // horizontal fov in deg  divided by 2

  double _near = 0.1;
  double _far = 1000.0;
  final VM.Matrix4 _perspectiveViewMatrix = new VM.Matrix4.identity();
  final VM.Matrix4 _viewMatrix = new VM.Matrix4.identity();
  final VM.Matrix4 _mat = new VM.Matrix4.zero();

  Perspective(this._camera,
      [this._near = 0.1, this._far = 1000.0, String name = "perspective"])
      : super(name);

  void Update() {
    VM.setPerspectiveMatrix(
        _mat, _fov * Math.PI / 180.0, _width / _height, _near, _far);
  }

  void UpdateFov(double fov) {
    _fov = fov;
    Update();
  }

  void UpdateCamera(Camera cam) {
    _camera = cam;
  }

  void UpdateUniforms(ShaderProgramInputs inputs) {
    inputs.SetUniformWithOrigin(this, uCameraNear, _near);
    inputs.SetUniformWithOrigin(this, uCameraFar, _far);
    inputs.SetUniformWithOrigin(
        this, uCanvasSize, new VM.Vector2(width.toDouble(), height.toDouble()));
    inputs.SetUniformWithOrigin(this, uEyePosition, _camera.getEyePosition());
    _camera.getViewMatrix(_viewMatrix);
    _perspectiveViewMatrix.setFrom(_mat);
    _perspectiveViewMatrix.multiply(_viewMatrix);
    inputs.SetUniformWithOrigin(this, uPerspectiveViewMatrix, _perspectiveViewMatrix);
  }
}
