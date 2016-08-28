part of chronosgl;

abstract class Projection extends NamedEntity {
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

/*
class ShadowMapProjection extends Projection {
  final VM.Matrix4 _proj = new VM.Matrix4.zero();
  final VM.Matrix4 _view = new VM.Matrix4.zero();
  final VM.Vector3 _vec = new VM.Vector3.zero();
  final VM.Vector3 _zero = new VM.Vector3.zero();
  final VM.Vector3 _up = new VM.Vector3(0.0, 1.0, 0.0);
  final VM.Vector3 _dir = new VM.Vector3.zero();
  final VM.Vector3 _pos = new VM.Vector3(0.0, 0.0, 100.0);

  ShadowMapProjection(VM.Vector3 dir) : super("shadow-map") {
    _dir.setFrom(dir);
  }

  void UpdateUniforms(ShaderProgramInputs inputs) {
    final double dim = 5000.0;
    VM.setOrthographicMatrix(_proj, -dim, dim, -dim, dim, 0, -dim);
    VM.setViewMatrix(_view, , _dir, _up);
    _proj.multiply(_view);
    inputs.SetUniformVal(this, uPerspectiveViewMatrix, _proj);
  }

  void Update() {}
}
*/

class Orthographic extends Projection {
  final Camera _camera;
  final VM.Matrix4 _proj = new VM.Matrix4.zero();
  final VM.Matrix4 _view = new VM.Matrix4.zero();
  final VM.Vector3 _vec = new VM.Vector3.zero();
  final VM.Vector3 _zero = new VM.Vector3.zero();
  final VM.Vector3 _up = new VM.Vector3(0.0, 1.0, 0.0);
  final VM.Vector3 _dir = new VM.Vector3.zero();
  final VM.Vector3 _pos = new VM.Vector3(0.0, 0.0, 100.0);

  Orthographic(this._camera) : super("othrogrpahic") {}

  void UpdateUniforms(ShaderProgramInputs inputs) {
    final double dim = 0.1;
    VM.setOrthographicMatrix(_proj, -dim, dim, -dim, dim, dim, -dim);
    VM.setPerspectiveMatrix(_proj, 0.25 * Math.PI / 180.0, 1.0, -dim, dim);
    //_camera.getViewMatrix(_view);
    VM.setViewMatrix(_view, _pos, _dir, _up);
    _proj.multiply(_view);
    inputs.SetUniformVal(this, uPerspectiveViewMatrix, _proj);
  }

  void Update() {}
}

class Perspective extends Projection {
  final Camera _camera;
  int _fov = 50; // horizontal fov in deg  divided by 2

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

  void UpdateUniforms(ShaderProgramInputs inputs) {
    inputs.SetUniformVal(this, uCameraNear, _near);
    inputs.SetUniformVal(this, uCameraFar, _far);
    inputs.SetUniformVal(
        this, uCanvasSize, new VM.Vector2(width.toDouble(), height.toDouble()));
    inputs.SetUniformVal(this, uEyePosition, _camera.getEyePosition());
    _camera.getViewMatrix(_viewMatrix);
    _perspectiveViewMatrix.setFrom(_mat);
    _perspectiveViewMatrix.multiply(_viewMatrix);
    inputs.SetUniformVal(this, uPerspectiveViewMatrix, _perspectiveViewMatrix);
  }
}
