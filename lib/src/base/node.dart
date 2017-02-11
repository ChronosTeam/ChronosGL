part of base;

/// ## Class Node (is a Spatial)
/// represents a tree hierarchy of objects that well be rendered
/// by rendered RenderProgram.
/// Currently, only leaf Nodes will cause draw calls by providing
/// **Inputs** for MeshData and Material (and optionally InstancerData).
/// Non leaf Nodes (aka containers) currently do not support
/// having a Material associated with them but we would like to change that.
/// Each Node is also a Spatial so it be re-oriented with respect to its parent
class Node extends Spatial {
  RenderInputProvider _material;
  RenderInputProvider _meshData;
  RenderInputProvider _instancerData;

  // children inherent the parent matrix for its rotation and position
  final List<Node> children = [];
  final VM.Matrix3 _normMatrix = new VM.Matrix3.zero();
  final VM.Matrix4 _modelMatrix = new VM.Matrix4.identity();

  Node.Container(String name, [Node child = null]) : super(name) {
    if (child != null) children.add(child);
  }

  Node(String name, this._meshData, this._material) : super(name) {
    //if (!meshData.isOptimized) meshData.optimize();
  }

  Node.WithInstances(
      String name, this._meshData, this._instancerData, this._material)
      : super(name);

  RenderInputProvider get material => _material;

  RenderInputProvider get meshData => _meshData;

  RenderInputProvider get instancerData => _instancerData;

  void set meshData(RenderInputProvider md)  { _meshData = md; }

  void add(Node node) {
    children.add(node);
  }

  void AddShaderInputs(RenderInputs program) {
    // TODO: computing the normal matrix like this is wrong
    _normMatrix.copyNormalMatrix(_modelMatrix);
    program.SetInputWithOrigin(this, uTransformationMatrix, transform);
    program.SetInputWithOrigin(this, uModelMatrix, _modelMatrix);
    program.SetInputWithOrigin(this, uNormalMatrix, _normMatrix);

    _material.AddRenderInputs(program);
    _meshData.AddRenderInputs(program);
    if (_instancerData != null) _instancerData.AddRenderInputs(program);
  }

  void RemoveShaderInputs(RenderInputs program) {
     if (_instancerData != null) _instancerData.RemoveRenderInputs(program);
    _meshData.RemoveRenderInputs(program);
    _material.RemoveRenderInputs(program);

    program.Remove(uTransformationMatrix);
    program.Remove(uModelMatrix);
    program.Remove(uNormalMatrix);
  }

  VM.Matrix4 UpdateModelMatrix(final VM.Matrix4 parent) {
    // copy the mvMatrix, so we don't change the original
    _modelMatrix.setFrom(parent);
    _modelMatrix.multiply(transform);
    return _modelMatrix;
  }

  bool SomethingToDraw() {
    return _material != null && _meshData != null;
  }

  @override
  String toString() => "NODE[${name}]";
}
