part of chronosgl;

// a Node is a Spatial without Mesh data that can have children
class Node extends Spatial {
  bool enabled = true;

  // children inheret the parent matrix for its rotation and position
  final List<Node> _children = new List<Node>();

  final VM.Matrix4 _mvMatrix = new VM.Matrix4.identity();

  Node(String name, [Node child=null]) : super(name) {
    if (child != null) _children.add(child);
  }

  void add(Node child) {
    _children.add(child);
  }

  // this should be overridden by subclasses
  // E.g. Mesh overloads this to do the actuall drawing via program
  void draw2(ShaderProgram program, ShaderProgramInputs inputs, List<DrawStats> stats) {}

  void draw(ShaderProgram program, ShaderProgramInputs inputs,
      VM.Matrix4 parentMVMatrix, List<DrawStats> stats) {
    // copy the mvMatrix, so we don't change the original
    _mvMatrix.setFrom(parentMVMatrix);
    _mvMatrix.multiply(transform);
    draw2(program, inputs, stats);
    for (Node node in _children) {
      node.draw(program, inputs, _mvMatrix, stats);
    }
  }
}
