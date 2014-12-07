part of chronosgl;

class Camera extends Spatial
{
  Spatial parent = null; // not currently working
  Matrix4 tempMatrix = new Matrix4();
  
  Matrix4 tempMatrixParent = new Matrix4();
  Matrix4 tempMatrixThis = new Matrix4();
  
  bool alternativeTranslate=false;
  
  void getMVMatrix( Matrix4 mvMatrix, bool translate) {
    if( parent != null) {
      tempMatrixParent.setElements(parent.transform);
      tempMatrixThis.setElements(transform);
      tempMatrixThis.invert();
      tempMatrixThis.copyPositionFrom( transform );
      tempMatrixParent.multiplyWith( tempMatrixThis);
      for( var i = 0; i<16; i++)
      {
        tempMatrix[i] = tempMatrixParent[i] * ( i < 12 ? 1 : -1);
      }
    } else {
      for( var i = 0; i<16; i++)
      {
        tempMatrix[i] = transform[i] * ( i < 12 ? 1 : -1);
      }
    }

    tempMatrix.toRotationMat( mvMatrix);
    if( translate) {
      if( alternativeTranslate)
      {
        mvMatrix[12] = transform[12];
        mvMatrix[13] = transform[13];
        mvMatrix[14] = transform[14];
        mvMatrix[15] = transform[15];
      } else {
        mvMatrix.translateLocal( tempMatrix[12], tempMatrix[13], tempMatrix[14]);
      }
    }
  }
}

class OrbitCamera extends Animatable {
  Camera camera;
  double radius;
  double azimuth;
  double polar;
  Vector lookAt = new Vector();

  double ma=0.0; // mouse azimuth
  double mp=0.0; // mouse polar

  Map<int, bool> cpk = currentlyPressedKeys;
  Map<String, bool> cpmb = currentlyPressedMouseButtons;

  OrbitCamera(this.camera, this.radius, [this.azimuth=0.0, this.polar=0.0]) {
    HTML.document.onMouseMove.listen( (HTML.MouseEvent e) {
      e.preventDefault();
      if( cpmb['left'] != null) {
        azimuth += e.movement.x*0.01;
        polar += e.movement.y*0.01;
      }
    });
  }
  
  void setLookAt(dynamic x, [double y, double z]) {
    if( x is Vector ){
      lookAt[0] = x[0];
      lookAt[1] = x[1];
      lookAt[2] = x[2];
    } else {
      lookAt[0] = x;
      lookAt[1] = y;
      lookAt[2] = z;
    }
  }
  
  void setPosFromSpherical(double radius, double azimuth, double polar) {
    camera.setPosFromSpherical(radius, azimuth, polar);
    camera.addPosFromVec(lookAt);
    camera.lookAt(lookAt);
  }
  
  void animate( double elapsed)
  {
    if (cpk[Key.LEFT] != null) {
      azimuth+=(0.03);
    } else if (cpk[Key.RIGHT] != null) {
      azimuth-=(0.03);
    }
    if (cpk[Key.UP] != null) {
      polar+=(0.03);
    } else if (cpk[Key.DOWN] != null) {
      polar-=(0.03);
    }
    if( cpk[Key.SPACE] != null) {
      azimuth=0.0;
      polar=0.0;
    }
    polar = polar.clamp(-Math.PI/2+0.1, Math.PI/2-0.1);
    setPosFromSpherical( radius, azimuth, polar);
  }
}

class FlyingCamera extends Animatable
{
  Camera camera;
  Vector momentum = new Vector();
  
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
    Vector back = camera.getBack();
    back.negate();
    momentum.lerp( back, amount);
  }
  void moveBackward(double amount) {
    Vector back = camera.getBack();
    momentum.lerp( back, amount);
  }
  void moveUp( num amount) {
    Vector up = camera.getUp();
    momentum.lerp( up, amount);
  }
  void moveDown( num amount) {
    Vector up = camera.getUp();
    up.negate();
    momentum.lerp( up, amount);
  }
  void moveLeft( num amount) {
    Vector right = camera.getRight();
    right.negate();
    momentum.lerp( right, amount);
  }
  void moveRight( num amount) {
    Vector right = camera.getRight();
    momentum.lerp( right, amount);
  }
}

class FPSCamera extends Animatable
{
  Camera camera;
  Vector momentum = new Vector();
  Vector movement = new Vector();
  Vector tmp = new Vector();

  Vector traceStart = new Vector();
  Vector traceEnd = new Vector();
  
  Vector up = new Vector(0.0,0.0,1.0);
  
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
    
    movement.scale(0);
    
    if (cpk[Key.W] != null) {
      movement.subtract( camera.getBack() );
    }
    if (cpk[Key.A] != null) {
      movement.subtract( camera.getRight() );
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
    tmp.set(momentum);
    tmp.scale(0.02);
    
    traceStart.set(camera.getPos());
    traceEnd.set(camera.getPos());
    traceEnd.add(tmp);
    
    //Output output = level.trace( traceStart, traceEnd, 10.0);
    //if( output.fraction == 1.0 || output.startSolid || output.allSolid )

      camera.translateFromVec(tmp);
    momentum.scale( 0.85);
    
    if( cpk[Key.SPACE] != null) {
    }
    
    if( movementY!=0)
      camera.transform.rotate( movementY*0.006, camera.getRight());
    if( movementX!=0)
      camera.transform.rotate( movementX*0.006, up);
    
    movementX=0;
    movementY=0;
  }
  
}
