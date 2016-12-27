part of core;

// InstancerData presents attributes and vertex buffers associated with
// instancing.
class InstancerData extends RenderInputProvider {
  final WEBGL.RenderingContext _gl;

  final Map<String, WEBGL.Buffer> _buffers = {};
  int numInstances;

  InstancerData(String name, this._gl, this.numInstances) : super(name);

  void AddBuffer(String canonical, Float32List data) {
    _buffers[canonical] = CreateAndInitializeArrayBuffer(_gl, data);
  }

  void ChangeBufferCanonical(String canonical, Float32List data) {
    ChangeArrayBuffer(_gl, _buffers[canonical], data);
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