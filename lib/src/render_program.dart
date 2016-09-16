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

class RenderInputs extends NamedEntity {
  // TODO: this should contain all the state, including blending, depth writing
  // and detect incompatible settings
  Map<String, dynamic> _inputs = {};
  Map<String, NamedEntity> _origin = {};

  RenderInputs(String name) : super(name);

  void ForceInputWithOrigin(NamedEntity origin, String canonical, var val) {
    if (RetrieveShaderVarDesc(canonical) == null) throw "unknown ${canonical}";
    _inputs[canonical] = val;
    _origin[canonical] = origin;
  }

  void SetInputWithOrigin(NamedEntity origin, String canonical, var val) {
    if(_inputs.containsKey(canonical)) {
      LogError("canonical already present: ${canonical}");
      assert(false);
    }
    ForceInputWithOrigin(origin, canonical, val);
  }

  void SetInput(String canonical, val) {
    SetInputWithOrigin(this, canonical, val);
  }

  void ForceInput(String canonical, val) {
    ForceInputWithOrigin(this, canonical, val);
  }

  bool HasInput(String canonical) {
    return _inputs.containsKey(canonical);
  }

  Iterable<String> AllInputs() {
    return _inputs.keys;
  }

  void MergeInputs(RenderInputs other) {
    other._inputs.forEach((String k, v) {
      _inputs[k] = v;
      _origin[k] = other._origin[k];
    });
  }

  void Remove(String canonical) {
    assert (_inputs.containsKey(canonical));
    _inputs.remove(canonical);
    _origin.remove(canonical);
  }
}

// ShaderProgram represents multiple invocations of the same
// CoreProgram.
// At alls contains its inputs
class RenderProgram extends RenderInputs {
  final ShaderProgram _program;
  
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
