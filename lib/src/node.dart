part of chronosgl;

class Node extends Spatial {
  WEBGL.RenderingContext gl = ChronosGL.globalGL;
  bool debug = false;
  bool enabled = true;
  final VM.Matrix3 _normMatrix = new VM.Matrix3.zero();

  Material material;
  MeshData _meshData;
  InstancerData _instancerData;

  // children inherent the parent matrix for its rotation and position
  final List<Node> _children = [];

  final VM.Matrix4 _mvMatrix = new VM.Matrix4.identity();

  Node.Container(String name, [Node child = null]) : super(name) {
    if (child != null) _children.add(child);
  }

  Node(String name, this._meshData, this.material) : super(name) {
    //if (!meshData.isOptimized) meshData.optimize();
    _meshData.SanityCheck();
    _meshData.Finalize();
  }

  Node.WithInstances(
      String name, this._meshData, this._instancerData, this.material)
      : super(name) {
    //if (!meshData.isOptimized) meshData.optimize();
    _meshData.SanityCheck();
    _meshData.Finalize();
  }

  void add(Node node) {
    _children.add(node);
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
    _normMatrix.copyNormalMatrix(_mvMatrix);
    program.SetInputWithOrigin(this, uTransformationMatrix, transform);
    program.SetInputWithOrigin(this, uModelMatrix, _mvMatrix);
    program.SetInputWithOrigin(this, uNormalMatrix, _normMatrix);
  }

  void RemoveShaderInputs(RenderInputs program) {
    program.Remove(uTransformationMatrix);
    program.Remove(uModelMatrix);
    program.Remove(uNormalMatrix);
  }

  // this gets called by Node.draw()
  void drawOne(RenderProgram program, List<DrawStats> stats) {
    if (debug) {
      print("draw2: $name items ${_meshData.numItems}");
    }

    if (_meshData.numItems == 0) return;
    material.RenderingInit(gl);
    material.AddRenderInputs(program);
    _meshData.AddRenderInputs(program);
    AddShaderInputs(program);
    if (_instancerData != null) _instancerData.AddRenderInputs(program);
    if (_meshData.numItems != 0) {
      int instances = _instancerData == null ? 0 : _instancerData.numInstances;
      program.Draw(instances, _meshData.numItems, _meshData.DrawMode(), stats);
    } else {
      print("WARNING: no items to render");
    }
    if (_instancerData != null) _instancerData.RemoveRenderInputs(program);
    RemoveShaderInputs(program);
    _meshData.RemoveRenderInputs(program);
    material.RemoveRenderInputs(program);
    material.RenderingExit(gl);
  }

  void draw(
      RenderProgram program, VM.Matrix4 parentMVMatrix, List<DrawStats> stats) {
    // copy the mvMatrix, so we don't change the original
    _mvMatrix.setFrom(parentMVMatrix);
    _mvMatrix.multiply(transform);
    // TODO: we should tolerate either of them being null
    // In particular if material != null we should apply it so it
    // is valid/active for all _children as well
    if (material != null && _meshData != null) {
      drawOne(program, stats);
    }
    for (Node node in _children) {
      node.draw(program, _mvMatrix, stats);
    }
  }
}
