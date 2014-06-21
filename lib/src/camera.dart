part of chronosgl;

class Camera extends Spatial
{
  
  Matrix4 tempMatrix = new Matrix4.zero();
  bool alternativeTranslate=false;
  
  void getMVMatrix( Matrix4 mvMatrix, bool translate) {
    for( var i = 0; i<16; i++)
    {
      tempMatrix[i] = matrix[i] * ( i < 12 ? 1 : -1);
    }
    //mat4.inverse( this.matrix, );
    mvMatrix.setRotation(tempMatrix.getRotation());
    if( translate) {

      if( alternativeTranslate)
      {
        mvMatrix[12] = matrix[12];
        mvMatrix[13] = matrix[13];
        mvMatrix[14] = matrix[14];
        mvMatrix[15] = matrix[15];
      } else {
        mvMatrix.setTranslationRaw( tempMatrix[12], tempMatrix[13], tempMatrix[14]);
        //mat4.translate( mat, [this.tempMatrix[12], this.tempMatrix[13], this.tempMatrix[14]]);
      }

    }
  }
}

class FlyingCamera extends Animatable
{
  Camera camera;
  Vector3 momentum = new Vector3.zero();
  
  FlyingCamera( this.camera);
  
  void animate( double elapsed)
  {
    Map<int, bool> cpk = currentlyPressedKeys;
    Map<String, bool> cpmb = currentlyPressedMouseButtons;
    
    if (cpk[Key.A] != null) {
      moveLeft(0.03);
    } else if (cpk[Key.D] != null) {
      moveRight(0.03);
    }
    if (cpk[Key.W] != null) {
      moveForward(0.03);
    } else if (cpk[Key.S] != null) {
      moveBackward(0.03);
    }
    
    if( cpk[Key.SPACE] != null) {
      momentum.scale( 0.92 );
    }
    
    if( mouseY!=0)
      camera.lookUp(mouseY*0.00006);
    if( mouseX!=0)
      camera.lookLeft(-mouseX*0.00003);

    camera.translateFromVec( momentum );
  }
  
  void moveForward(double amount) {
    Vector3 back = camera.getBack();
    back.negate();
    Vector3.mix(momentum, back, amount, momentum);
  }
  void moveBackward(double amount) {
    Vector3 back = camera.getBack();
    Vector3.mix(momentum, back, amount, momentum);
  }
  void moveUp( num amount) {
    Vector3 up = camera.getUp();
    Vector3.mix(momentum, up, amount, momentum);
  }
  void moveDown( num amount) {
    Vector3 up = camera.getUp();
    up.negate();
    Vector3.mix(momentum, up, amount, momentum);
  }
  void moveLeft( num amount) {
    Vector3 right = camera.getRight();
    right.negate();
    Vector3.mix(momentum, right, amount, momentum);
  }
  void moveRight( num amount) {
    Vector3 right = camera.getRight();
    Vector3.mix(momentum, right, amount, momentum);
  }
}

class FPSCamera extends Animatable
{
  Camera camera;
  Vector3 momentum = new Vector3.zero();
  Vector3 movement = new Vector3.zero();
  Vector3 tmp = new Vector3.zero();

  Vector3 traceStart = new Vector3.zero();
  Vector3 traceEnd = new Vector3.zero();
  
  Vector3 up = new Vector3(0.0,0.0,1.0);
  
  int movementX=0;
  int movementY=0;
  
  FPSCamera( this.camera) {

    HTML.document.onMouseDown.listen( (HTML.MouseEvent e) {
      e.preventDefault();
      HTML.document.body.requestPointerLock();
    });
    
    HTML.document.body.onMouseMove.listen( (HTML.MouseEvent e) {
      e.preventDefault();
      movementX += e.movement.x;
      movementY += e.movement.y;
    });

  }
  
  void animate( double elapsed)
  {
    Map<int, bool> cpk = currentlyPressedKeys;
    Map<String, bool> cpmb = currentlyPressedMouseButtons;
    
    movement.scale(0.0);
    
    if (cpk[Key.W] != null) {
      movement.sub( camera.getBack() );
    }
    if (cpk[Key.A] != null) {
      movement.sub( camera.getRight() );
    }
    if (cpk[Key.S] != null) {
      movement.add( camera.getBack() );
    }
    if (cpk[Key.D] != null) {
      movement.add( camera.getRight() );
    }
    
    movement.z = 0.0;
    movement.normalize();
    momentum.add(movement);
    tmp.setFrom(momentum);
    tmp.scale(0.02);
    
    traceStart.setFrom(camera.getPos());
    traceEnd.setFrom(camera.getPos());
    traceEnd.add(tmp);
    
    //Output output = level.trace( traceStart, traceEnd, 10.0);
    //if( output.fraction == 1.0 || output.startSolid || output.allSolid )

      camera.translateFromVec(tmp);
    momentum.scale( 0.85);
    
    if( cpk[Key.SPACE] != null) {
    }
    
    if( movementY!=0)
      camera.matrix.rotate( camera.getRight(), movementY*0.006 );
    if( movementX!=0)
      camera.matrix.rotate( up, movementX*0.006 );
    
    movementX=0;
    movementY=0;
  }
  
}
