part of chronosgl;

// a Node is a Spatial without Mesh data that can have children
class Node extends Spatial {
  
  String name = '';
  String type = '';
  bool enabled= true;
  bool invert = false;
  
  // children inheret the parent matrix for its rotation and position
  List <Node> children = new List<Node>();
  
  Matrix4 mvMatrix = new Matrix4();
  Matrix4 tempMatrix = new Matrix4();
  
  Node( [Node child]) {
    
    if( child!=null)
      children.add( child);
    
  }
  
  Spatial add( Node child)
  {
    children.add( child);
    return child;
  }
  
  var animateCallback;
  void setAnimateCallback( cb(Node node, double elapsed) ) {
    animateCallback = cb;
  }
  
  void animate( double elapsed)
  {
    if( animateCallback != null) {
      animateCallback( this, elapsed);
    }
  }
  
  // this should be overridden by subclasses
  void draw2( ShaderProgram program) {
  }
  
  void draw( ShaderProgram program, Matrix4 parentMVMatrix) {
    
    // copy the mvMatrix, so we don't change the original
    mvMatrix.setElements( parentMVMatrix);
    
    // funky stuff going on below, I don't know why it is needed, but otherwise ship rotation is wrong
    // found this code by trial and error
    tempMatrix.setElements( matrix);
    if( invert)
    {
      tempMatrix.invert();
      tempMatrix.copyPositionFrom( matrix );
    }
    mvMatrix.multiplyWith( tempMatrix);
    
    draw2( program);

    for ( Node node in children)
    {
      node.draw( program, mvMatrix);
    }
  }
  
}

