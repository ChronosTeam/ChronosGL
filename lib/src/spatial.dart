part of chronosgl;

class Spatial {

  static int RIGHTX = 0, RIGHTY = 4, RIGHTZ = 8;
  static int UPX = 1, UPY = 5, UPZ = 9;
  static int BACKX = 2, BACKY = 6, BACKZ = 10;
  static int POSX = 12, POSY = 13, POSZ = 14;

  // position and rotation
  // the idea to use a matrix4 for this might be problematic, as the values degenerate over time. Might be better to use Quaternions anyways
  // regular lookAt calls could "repair" the matrix ( or an optimized variant of lookAt).
  Matrix4 matrix = new Matrix4.zero();
  
  // temp variables to avoid creating new objects:
  // CHANGES TO THE VALUES WILL NOT IMPACT THE MATRIX AND MIGHT BE SHARED WITH OTHER USERS 
  Vector3 _pos = new Vector3.zero();
  Vector3 _back = new Vector3.zero();
  Vector3 _up = new Vector3.zero();
  Vector3 _right = new Vector3.zero();
  
  Vector3 getPos() {
    _pos[0] = this.matrix[POSX];
    _pos[1] = this.matrix[POSY];
    _pos[2] = this.matrix[POSZ];
    return this._pos;
  }
  
  // get the values from column 2. They represent the trail direction of this matrx
  // return ReadOnly vec3
  Vector3 getBack()
  {
    _back[0] = matrix[BACKX];
    _back[1] = matrix[BACKY];
    _back[2] = matrix[BACKZ];
    return _back;
  }

  // get the values from column 1. They represent the up vector of this matrx
  // return ReadOnly vec3
  Vector3 getUp()
  {
    _up[0] = matrix[UPX];
    _up[1] = matrix[UPY];
    _up[2] = matrix[UPZ];
    return _up;
  }

  // get the values from column 0. They represent the right vector of this matrx
  // return ReadOnly vec3
  Vector3 getRight()
  {
    _right[0] = matrix[RIGHTX];
    _right[1] = matrix[RIGHTY];
    _right[2] = matrix[RIGHTZ];
    return _right;
  }
  
  void setPos( double x, double y, double z )
  {
    matrix[POSX] = x;
    matrix[POSY] = y;
    matrix[POSZ] = z;
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
    matrix[POSX] = vector[0];
    matrix[POSY] = vector[1];
    matrix[POSZ] = vector[2];
  }
  
  void translate( num x, num y, num z, [double factor=1.0])
  {
    matrix[POSX] += x*factor;
    matrix[POSY] += y*factor;
    matrix[POSZ] += z*factor;    
  }

  void translateFromVec( Vector3 vector, [double factor=1.0])
  {
    matrix[POSX] += vector[0]*factor;
    matrix[POSY] += vector[1]*factor;
    matrix[POSZ] += vector[2]*factor;    
  }
  
  void moveForward( num amount) {
    moveBackward(-amount);
  }

  void moveBackward( num amount) {
    matrix[POSX] += matrix[BACKX] * amount; 
    matrix[POSY] += matrix[BACKY] * amount;
    matrix[POSZ] += matrix[BACKZ] * amount;
  }

  void moveUp( num amount)
  {
    matrix[POSX] += matrix[UPX] * amount; 
    matrix[POSY] += matrix[UPY] * amount;
    matrix[POSZ] += matrix[UPZ] * amount;
  }

  void moveLeft( num amount)
  {
    moveRight( -amount);
  }

  void moveRight( num amount)
  {
    matrix[POSX] += matrix[RIGHTX] * amount; 
    matrix[POSY] += matrix[RIGHTY] * amount;
    matrix[POSZ] += matrix[RIGHTZ] * amount;
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
    matrix.rotate( getRight(), -amount );
  }
  
  void lookDown( double amount)
  {
    matrix.rotate( getRight(), amount );
  }
  
  void rollLeft( double amount)
  {
    matrix.rotate( getBack(), -amount );
  }
  
  void rollRight( double amount)
  {
    matrix.rotate( getBack(), amount );
  }
  
  void lookLeft( double amount)
  {
    matrix.rotate( getUp(), -amount );
  }
  
  void lookRight( double amount)
  {
    matrix.rotate( getUp(), amount );
  }
  
  void lookAt( Vector3 target, [Vector3 up])
  {
    matrix = makeViewMatrix( getPos(), target, up);
  }
  
  
}

