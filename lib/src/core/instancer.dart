part of core;

// InstancerData presents attributes and vertex buffers associated with
// instancing.
class InstancerData extends RenderInputProvider {
  final ChronosGL _cgl;

  final Map<String, WEBGL.Buffer> _buffers = {};
  int numInstances;

  InstancerData(String name, this._cgl, this.numInstances) : super(name);

  void AddBuffer(String canonical, Float32List data) {
    _buffers[canonical] = _cgl.CreateAndInitializeArrayBuffer(data);
  }

  void ChangeBufferCanonical(String canonical, Float32List data) {
    _cgl.ChangeArrayBuffer(_buffers[canonical], data);
  }

  @override
  void AddRenderInputs(RenderInputs program) {
    for (String canonical in _buffers.keys) {
      program.SetInputWithOrigin(this, canonical, _buffers[canonical]);
    }
    program.SetInputWithOrigin(this, cNumInstances, numInstances);
  }

  @override
  void RemoveRenderInputs(RenderInputs program) {
    for (String canonical in _buffers.keys) {
      program.Remove(canonical);
    }
    program.Remove(cNumInstances);
  }
}