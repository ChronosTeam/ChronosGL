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

  var animateCallback;
  // elapsed is in milliseconds (usually around 129.000 )
  // TODO: make this a list: addAnimateCallback
  void setAnimateCallback(cb(Node node, double elapsed)) {
    animateCallback = cb;
  }

  void animate(double elapsed) {
    if (animateCallback != null) {
      animateCallback(this, elapsed);
    }
  }

  // this should be overridden by subclasses
  void draw2(ShaderProgram program, ShaderProgramInputs inputs) {}

  void draw(ShaderProgram program, ShaderProgramInputs inputs,
      VM.Matrix4 parentMVMatrix) {
    // copy the mvMatrix, so we don't change the original
    mvMatrix.setFrom(parentMVMatrix);
    mvMatrix.multiply(transform);
    draw2(program, inputs);
    for (Node node in children) {
      node.draw(program, inputs, mvMatrix);
    }
  }
}
