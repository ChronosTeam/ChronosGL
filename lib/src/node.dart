part of chronosgl;

// a Node is a Spatial without Mesh data that can have children
class Node extends Spatial {
  String name = '';
  bool enabled = true;

  // children inheret the parent matrix for its rotation and position
  List<Node> children = new List<Node>();

  VM.Matrix4 mvMatrix = new VM.Matrix4.identity();

  Node([Node child]) {
    if (child != null) children.add(child);
  }

  Spatial add(Node child) {
    children.add(child);
    return child;
  }

  // this should be overridden by subclasses
  // E.g. Mesh overloads this to do the actuall drawing via program
  void draw2(ShaderProgram program, ShaderProgramInputs inputs, List<DrawStats> stats) {}

  void draw(ShaderProgram program, ShaderProgramInputs inputs,
      VM.Matrix4 parentMVMatrix, List<DrawStats> stats) {
    // copy the mvMatrix, so we don't change the original
    mvMatrix.setFrom(parentMVMatrix);
    mvMatrix.multiply(transform);
    draw2(program, inputs, stats);
    for (Node node in children) {
      node.draw(program, inputs, mvMatrix, stats);
    }
  }
}
