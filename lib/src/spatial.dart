part of chronosgl;

class Spatial {

  // position and rotation
  // the idea to use a matrix4 for this might be problematic, as the values degenerate over time. Might be better to use Quaternions anyways
  // regular lookAt calls could "repair" the matrix ( or an optimized variant of lookAt).
  Matrix4 matrix = new Matrix4();
  
  // temp variables to avoid creating new objects:
  // CHANGES TO THE VALUES WILL NOT IMPACT THE MATRIX AND MIGHT BE SHARED WITH OTHER USERS 
  Vector3 _pos = new Vector3.zero();
  Vector3 _back = new Vector3.zero();
  Vector3 _up = new Vector3.zero();
  Vector3 _right = new Vector3.zero();
  
  Vector3 getPos() {
    _pos[0] = this.matrix[Matrix4.POSX];
    _pos[1] = this.matrix[Matrix4.POSY];
    _pos[2] = this.matrix[Matrix4.POSZ];
    return this._pos;
  }
  
  // get the values from column 2. They represent the trail direction of this matrx
  // return ReadOnly vec3
  Vector3 getBack()
  {
    _back[0] = matrix[Matrix4.BACKX];
    _back[1] = matrix[Matrix4.BACKY];
    _back[2] = matrix[Matrix4.BACKZ];
    return _back;
  }

  // get the values from column 1. They represent the up vector of this matrx
  // return ReadOnly vec3
  Vector3 getUp()
  {
    _up[0] = matrix[Matrix4.UPX];
    _up[1] = matrix[Matrix4.UPY];
    _up[2] = matrix[Matrix4.UPZ];
    return _up;
  }

  // get the values from column 0. They represent the right vector of this matrx
  // return ReadOnly vec3
  Vector3 getRight()
  {
    _right[0] = matrix[Matrix4.RIGHTX];
    _right[1] = matrix[Matrix4.RIGHTY];
    _right[2] = matrix[Matrix4.RIGHTZ];
    return _right;
  }
  
  void setPos( double x, double y, double z )
  {
    matrix[Matrix4.POSX] = x;
    matrix[Matrix4.POSY] = y;
    matrix[Matrix4.POSZ] = z;
  }

  void addPos( num x, num y, num z )
  {
    translate( x, y, z); // alias
  }

  void addPosFromVec( Vector3 vector )
  {
    translateFromVec( vector); // alias
  }

  void setPosFromVec( Vector3 vector )
  {
    matrix[Matrix4.POSX] = vector[0];
    matrix[Matrix4.POSY] = vector[1];
    matrix[Matrix4.POSZ] = vector[2];
  }
  
  void translate( num x, num y, num z, [double factor=1.0])
  {
    matrix[Matrix4.POSX] += x*factor;
    matrix[Matrix4.POSY] += y*factor;
    matrix[Matrix4.POSZ] += z*factor;    
  }

  void translateFromVec( Vector3 vector, [double factor=1.0])
  {
    matrix[Matrix4.POSX] += vector[0]*factor;
    matrix[Matrix4.POSY] += vector[1]*factor;
    matrix[Matrix4.POSZ] += vector[2]*factor;    
  }
  
  void moveForward( num amount) {
    moveBackward(-amount);
  }

  void moveBackward( num amount) {
    matrix[Matrix4.POSX] += matrix[Matrix4.BACKX] * amount; 
    matrix[Matrix4.POSY] += matrix[Matrix4.BACKY] * amount;
    matrix[Matrix4.POSZ] += matrix[Matrix4.BACKZ] * amount;
  }

  void moveUp( num amount)
  {
    matrix[Matrix4.POSX] += matrix[Matrix4.UPX] * amount; 
    matrix[Matrix4.POSY] += matrix[Matrix4.UPY] * amount;
    matrix[Matrix4.POSZ] += matrix[Matrix4.UPZ] * amount;
  }

  void moveLeft( num amount)
  {
    moveRight( -amount);
  }

  void moveRight( num amount)
  {
    matrix[Matrix4.POSX] += matrix[Matrix4.RIGHTX] * amount; 
    matrix[Matrix4.POSY] += matrix[Matrix4.RIGHTY] * amount;
    matrix[Matrix4.POSZ] += matrix[Matrix4.RIGHTZ] * amount;
  }
  
  void rotX( double angle) {
    matrix.rotateX(angle);
  }
  
  void rotY( double angle)
  {
    matrix.rotateY(angle);
  }
  
  void rotZ( double angle)
  {
    matrix.rotateZ(angle);
  }
  
  void lookUp( double amount)
  {
    matrix.rotate( -amount, getRight());
  }
  
  void lookDown( double amount)
  {
    matrix.rotate( amount, getRight());
  }
  
  void rollLeft( double amount)
  {
    matrix.rotate( -amount, getBack());
  }
  
  void rollRight( double amount)
  {
    matrix.rotate( amount, getBack());
  }
  
  void lookLeft( double amount)
  {
    matrix.rotate( -amount, getUp());
  }
  
  void lookRight( double amount)
  {
    matrix.rotate( amount, getUp());
  }
  
  void lookAt( Vector3 target, [Vector3 up])
  {
    matrix.lookAt_alt( getPos(), target, up);
  }
  
  
}

