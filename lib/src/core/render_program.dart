part of core;

class DrawStats {
  String name;
  int numInstances;
  int numItems;
  int drawMode;

  DrawStats(this.name, this.numInstances, this.numItems, this.drawMode);

  @override
  String toString() => "[${name}] ${numInstances} ${numItems} ${drawMode}";
}

/// RenderProgram combines a ShaderProgram with a collection of Nodes
/// to be rendered by it.
class RenderProgram extends RenderInputs {
  // these are the identity by default
  final VM.Matrix4 _modelMatrix = new VM.Matrix4.identity();
  final List<Node> objects = new List<Node>();

  RenderProgram(String name) : super(name);

  void add(Node obj) {
    objects.add(obj);
  }

  bool remove(Node obj) {
    return objects.remove(obj);
  }

  void removeAll() {
    return objects.clear();
  }

  _draw(List<DrawStats> stats) {
    assert(false, "must be impemented in subclass");
  }

  _drawSetUp() {
    assert(false, "must be impemented in subclass");
  }

  _drawTearDown() {
    assert(false, "must be impemented in subclass");
  }

  void _drawRecursively(
      Node node, final VM.Matrix4 parent, List<DrawStats> stats) {
    if (!node.enabled) return;
    final VM.Matrix4 m = node.UpdateModelMatrix(parent);
    if (node.SomethingToDraw()) {
      LogDebug("drawing: ${node}");
      node.AddShaderInputs(this);
      _draw(stats);
      node.RemoveShaderInputs(this);
    }
    for (Node child in node.children) {
      _drawRecursively(child, m, stats);
    }
  }

  // This is a weird flow control:
  // * When draw() is called,
  // * we recursively draw items in objects passing "this" as a parameter
  // * the objects then call the Draw method above
  void draw(List<DrawStats> stats) {
    _drawSetUp();
    _modelMatrix.setIdentity();
    if (debug) print("[draw objects ${objects.length}");
    for (Node node in objects) {
      _drawRecursively(node, _modelMatrix, stats);
    }
    _drawTearDown();
  }
}
