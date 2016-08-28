part of chronosgl;

abstract class Projection extends NamedEntity {
  int width = 0;
  int height = 0;

  Projection(String name) : super(name);

  void UpdateUniforms(ShaderProgramInputs inputs);
}

class Perspective extends Projection {
  final Camera _camera;
  int fov = 50; // horizobtal fov in deg  divided by 2

  int _lastFov_ = 49;
  int _lastWidth = 0;
  int _lastHeight = 0;

  double near = 0.1;
  double far = 1000.0;

  Perspective(this._camera,
      [this.near = 0.1, this.far = 1000.0, String name = "perspective"])
      : super(name);
  final VM.Matrix4 _perspectiveViewMatrix = new VM.Matrix4.identity();
  final VM.Matrix4 _viewMatrix = new VM.Matrix4.identity();
  final VM.Matrix4 _mat = new VM.Matrix4.zero();

  List<VM.Plane> _cullPlanes = [
    new VM.Plane.components(0.0, 0.0, 0.0, 0.0),
    new VM.Plane.components(0.0, 0.0, 0.0, 0.0),
    new VM.Plane.components(0.0, 0.0, 0.0, 0.0),
    new VM.Plane.components(0.0, 0.0, 0.0, 0.0)
  ];

  double aspecRatioInv() {
    return height / width;
  }

  // Distance to projection plane
  double focalLength() {
    return 1.0 / Math.tan(fov * Math.PI / 360.0);
  }

  double vfov() {
    return Math.atan(aspecRatioInv() / focalLength());
  }

  bool _PerspectiveHasChanged(HTML.CanvasElement canvas) {
    return _lastWidth != width ||
        _lastHeight != height ||
        _lastWidth != canvas.clientWidth ||
        _lastHeight != canvas.clientHeight ||
        _lastFov_ != fov;
  }

  void _SetupNewPerspective(HTML.CanvasElement canvas) {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    _lastWidth = canvas.clientWidth;
    _lastHeight = canvas.clientHeight;
    _lastFov_ = fov;
    //LogInfo(
    //    "New perspective: ${perspar.width} ${perspar.height} ${perspar.fov}");
    UpdatePerspective();
  }

  void Adjust(HTML.CanvasElement canvas) {
    if (_PerspectiveHasChanged(canvas)) {
      _SetupNewPerspective(canvas);
    }
  }

  void UpdatePerspective() {
    VM.setPerspectiveMatrix(
        _mat, fov * Math.PI / 180.0, width / height, near, far);
    /*
    //m.setFrom(_mat);
    double e = focalLength();
    double a = aspecRatioInv();
    double ee1 = Math.sqrt(e * e + 1);
    double eeaa = Math.sqrt(e * e + a * a);
    // Left
    VM.Plane c0 = _cullPlanes[0];
    c0.normal[0] = e / ee1;
    c0.normal[1] = 0.0;
    c0.normal[2] = -1.0 / ee1;
    c0.constant = 0.0;
    // Right
    VM.Plane c1 = _cullPlanes[1];
    c1.normal[0] = -e / ee1;
    c1.normal[1] = 0.0;
    c1.normal[2] = -1.0 / ee1;
    c1.constant = 0.0;
    // Bottom
    VM.Plane c2 = _cullPlanes[2];
    c2.normal[0] = 0.0;
    c2.normal[1] = e / eeaa;
    c2.normal[2] = -a / eeaa;
    c2.constant = 0.0;
    // Top
    VM.Plane c3 = _cullPlanes[3];
    c3.normal[0] = 0.0;
    c3.normal[1] = -e / eeaa;
    c3.normal[2] = -a / eeaa;
    c3.constant = 0.0;
    */
  }

  bool IntersectSphere(VM.Vector3 center, double radius) {
    for (VM.Plane plane in _cullPlanes) {
      double d = plane.distanceToVector3(center);
      if (d < -radius) return false;
    }
    return true;
  }

  void UpdateUniforms(ShaderProgramInputs inputs) {
    inputs.SetUniformVal(this, uCameraNear, near);
    inputs.SetUniformVal(this, uCameraFar, far);
    inputs.SetUniformVal(
        this, uCanvasSize, new VM.Vector2(width.toDouble(), height.toDouble()));
    inputs.SetUniformVal(this, uEyePosition, _camera.getEyePosition());
    _camera.getViewMatrix(_viewMatrix);
    _perspectiveViewMatrix.setFrom(_mat);
    _perspectiveViewMatrix.multiply(_viewMatrix);
    inputs.SetUniformVal(this, uPerspectiveViewMatrix, _perspectiveViewMatrix);
  }
}
