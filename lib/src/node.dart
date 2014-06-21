part of chronosgl;

// a Node is a Spatial without Mesh data that can have children
class Node extends Spatial {
  
  String name = '';
  String type = '';
  bool enabled= true;
  bool invert = false;
  
  // children inheret the parent matrix for its rotation and position
  List <Node> children = new List<Node>();
  
  Matrix4 mvMatrix = new Matrix4.zero();
  Matrix4 tempMatrix = new Matrix4.zero();
  
  Node( [Node child]) {
    
    if( child!=null)
      children.add( child);
    
  }
  
  Spatial add( Node child)
  {
    children.add( child);
    return child;
  }
  
  void animate( double elapsed)
  {
    
  }
  
  // this should be overridden by subclasses
  void draw2( ShaderProgram program) {
  }
  
  void draw( ShaderProgram program, Matrix4 parentMVMatrix) {
    
    // copy the mvMatrix, so we don't change the original
    mvMatrix.setFrom( parentMVMatrix);
    
    // funky stuff going on below, I don't know why it is needed, but otherwise ship rotation is wrong
    // found this code by trial and error
    tempMatrix.setFrom( matrix);
    if( invert)
    {
      tempMatrix.invert();
      tempMatrix.setTranslation( matrix.getTranslation() );
    }
    mvMatrix.multiply( tempMatrix);
    
    draw2( program);

    for ( Node node in children)
    {
      node.draw( program, mvMatrix);
    }
  }
  
}

