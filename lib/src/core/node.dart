part of core;

/// Node represents a tree hierarchy of objects that well be rendered
/// with a single RenderProgram.
/// Currently, only leaf Nodes will cause draw calls by providing
/// both MeshData and Material (and optionally InstancerData).
/// Non leaf Nodes (aka containers) currently do not support
/// having a Material associated with them but we would like to change
/// that.
/// Each Node is also a Spatial so it be re-oriented with respect to its parent
class Node extends Spatial {
  RenderInputProvider _material;
  MeshData _meshData;
  InstancerData _instancerData;

  // children inherent the parent matrix for its rotation and position
  final List<Node> children = [];
  final VM.Matrix3 _normMatrix = new VM.Matrix3.zero();
  final VM.Matrix4 _modelMatrix = new VM.Matrix4.identity();

  Node.Container(String name, [Node child = null]) : super(name) {
    if (child != null) children.add(child);
  }

  Node(String name, this._meshData, this._material) : super(name) {
    //if (!meshData.isOptimized) meshData.optimize();
    _meshData.SanityCheck();
    _meshData.Finalize();
  }

  Node.WithInstances(
      String name, MeshData md, this._instancerData, this._material)
      : super(name) {
    UpdateMeshData(md);
  }

  RenderInputProvider get material => _material;

  MeshData get meshData => _meshData;

  InstancerData get instancerData => _instancerData;

  void UpdateMeshData(MeshData md) {
    //if (!meshData.isOptimized) meshData.optimize();
    md.SanityCheck();
    md.Finalize();
    _meshData = md;
  }

  void add(Node node) {
    children.add(node);
  }

  /*
  void UpdateMeshData(MeshData md) {
    _meshData = md;
    ChangeBufferCanonical(aVertexPosition, _meshData.GetVertexData());

    for (String canonical in _meshData.GetAttributes()) {
      ChangeBufferCanonical(canonical, _meshData.GetAttributeData(canonical));
    }
    List<int> indices = _meshData.GetVertexIndices();
    if (indices != null) {
      numItems = indices.length;
      if (ChronosGL.useElementIndexUint) {
        ChangeElementArrayBuffer(
            gl, _indexBuffer, new Uint32List.fromList(indices));
      } else {
        ChangeElementArrayBuffer(
            gl, _indexBuffer, new Uint16List.fromList(indices));
      }
    } else {
      numItems = _meshData.GetVertexData().length ~/ 3;
    }
  }*/

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

  int GetNumInstances() {
      return _instancerData == null ? 0 : _instancerData.numInstances;
  }

  int GetNumItems() {
      return _meshData.numItems;
  }

  int GetDrawMode() {
    return _meshData.DrawMode();
  }

  VM.Matrix4 UpdateModelMatrix(final VM.Matrix4 parent) {
    // copy the mvMatrix, so we don't change the original
    _modelMatrix.setFrom(parent);
    _modelMatrix.multiply(transform);
    return _modelMatrix;
  }

  bool SomethingToDraw() {
    return _material != null && _meshData != null && _meshData.numItems != 0;
  }

  String toString() => "$name items ${_meshData.numItems}";
}
