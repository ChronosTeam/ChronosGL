part of base;

class DrawStats {
  String name;
  int numInstances;
  int numItems;
  int drawMode;

  DrawStats(this.name, this.numInstances, this.numItems, this.drawMode);

  @override
  String toString() => "[${name}] ${numInstances} ${numItems} ${drawMode}";
}


/// ## Class RenderProgram (is a RenderInputs)
/// represents several invocations of the same program running on the GPU.
/// It consists of a tree of **Nodes** which provide **Inputs** for the
/// program. The program is invoked once for most **Nodes** while traversing
/// the tree recursively.
abstract class RenderProgram extends RenderInputs {
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

  void DrawOne( Map<String, dynamic>  inputs, List<DrawStats> stats);

  void DrawSetUp();

  void DrawTearDown();

  void _drawRecursively(
      Node node, final VM.Matrix4 parent, List<DrawStats> stats) {
    if (!node.enabled) return;
    // m is read-only!
    final VM.Matrix4 m = node.UpdateModelMatrix(parent);
    if (node.SomethingToDraw()) {
      LogDebug("drawing: ${node}");
      node.AddShaderInputs(this);
      DrawOne(GetInputs(), stats);
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
    DrawSetUp();
    _modelMatrix.setIdentity();
    if (debug) print("[draw objects ${objects.length}");
    for (Node node in objects) {
      _drawRecursively(node, _modelMatrix, stats);
    }
    DrawTearDown();
  }
}
