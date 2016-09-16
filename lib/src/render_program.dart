part of chronosgl;

const int DRAW_MODE_POINTS = WEBGL.POINTS;
const int DRAW_MODE_LINES = WEBGL.LINES;
const int DRAW_MODE_TRIANGLES = WEBGL.TRIANGLES;

class DrawStats {
  String name;
  int numInstances;
  int numItems;
  int drawMode;

  DrawStats(this.name, this.numInstances, this.numItems, this.drawMode);

  @override
  String toString() {
    return "[${name}] ${numInstances} ${numItems} ${drawMode}";
  }
}


// ShaderProgram represents multiple invocations of the same
// CoreProgram.
// At alls contains its inputs
class RenderProgram extends ShaderProgramInputs {
  final ShaderProgram _program;

  // Should this be done per processed Mesh?

  bool debug = false;
  bool active;

  // these are the identity by default
  final VM.Matrix4 _modelMatrix = new VM.Matrix4.identity();
  final List<Node> objects = new List<Node>();

  RenderProgram(String name, this._program) : super(name);

  void add(Node obj) {
    objects.add(obj);
  }

  bool remove(Node obj) {
    return objects.remove(obj);
  }

  void removeAll() {
    return objects.clear();
  }

  bool hasEnabledObjects() {
    if (objects.any((Node n) => n.enabled)) return true;
    return false;
  }

  void Draw(
      int numInstances, int numItems, int drawMode, List<DrawStats> stats) {
    if (stats != null) {
      stats.add(new DrawStats(_program.name, numInstances, numItems, drawMode));
    }
    _program.Draw(debug, _inputs, numInstances, numItems, drawMode);
  }

  // This is a weird flow control:
  // * When draw() is called,
  // * we recursively draw items in objects passing "this" as a parameter
  // * the objects then call the Draw method above
  void draw(List<DrawStats> stats) {
    _program.Begin(debug);
    _modelMatrix.setIdentity();
    if (debug) print("[draw objects ${objects.length}");
    for (Node node in objects) {
      if (node.enabled) node.draw(this, _modelMatrix, stats);
    }
    _program.End(debug);
  }
}
