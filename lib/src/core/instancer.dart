part of core;

// InstancerData presents attributes and vertex buffers associated with
// instancing.
class InstancerData extends RenderInputSource {
  final ChronosGL _cgl;

  final Map<String, dynamic /* gl Buffer */> _buffers = {};
  int numInstances;

  InstancerData(String name, this._cgl, this.numInstances) : super(name);

  void AddBuffer(String canonical, Float32List data) {
     dynamic /* gl Buffer */ b = _cgl.createBuffer();
     _cgl.ChangeArrayBuffer(b, data);
    _buffers[canonical] = b;
  }

  void ChangeBufferCanonical(String canonical, Float32List data) {
    _cgl.ChangeArrayBuffer(_buffers[canonical], data);
  }

  @override
  void AddToSink(RenderInputSink program) {
    for (String canonical in _buffers.keys) {
      program.SetInput(canonical, _buffers[canonical], this);
    }
    program.SetInput(cNumInstances, numInstances, this);
  }

  @override
  void RemoveFromSink(RenderInputSink program) {
    for (String canonical in _buffers.keys) {
      program.Remove(canonical);
    }
    program.Remove(cNumInstances);
  }
}
