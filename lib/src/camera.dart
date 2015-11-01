part of chronosgl;

class Camera extends Spatial {
  // Get the model view matrix. The view matrix is the inverse of the camera’s transformation matrix in world-space.
  void getMVMatrix(Matrix4 mvMatrix, bool translate) {
    transform.toRotationMat(mvMatrix); // why does this seem to be already inverted/transposed ?
    if (translate) {
      // The eye position is negated which is equivalent to the inverse of the translation matrix: T(v)^-1 == T(-v)
      // T = translation matrix, v = eye position.
      mvMatrix.translateLocal(
          -transform[12], -transform[13], -transform[14]); // short cut for rotationMatrixInverted * translationMatrixInverted, see http://3dgep.com/understanding-the-view-matrix/#Look_At_Camera
    }
  }
}

class OrbitCamera extends Animatable {
  Camera camera;
  double radius;
  double azimuth;
  double polar;
  Vector lookAt = new Vector();

  double ma = 0.0; // mouse azimuth
  double mp = 0.0; // mouse polar

  Map<int, bool> cpk = currentlyPressedKeys;
  Map<String, bool> cpmb = currentlyPressedMouseButtons;

  OrbitCamera(this.camera, this.radius, [this.azimuth = 0.0, this.polar = 0.0]) {
    HTML.document.onMouseWheel.listen((HTML.WheelEvent e) {
      try {
        double d = e.deltaY * 0.01;
        if (radius - d > 0) radius -= d;
      } catch (e) {
        print(e);
      }
    });
    HTML.document.onMouseMove.listen((HTML.MouseEvent e) {
      e.preventDefault();
      if (cpmb['left'] != null) {
        //azimuth += e.movement.x*0.01;
        //polar += e.movement.y*0.01;
        azimuth += (mouseX - mouseDownX) * 0.01;
        polar += (mouseDownY - mouseY) * 0.01;
        mouseDownX = mouseX;
        mouseDownY = mouseY;
      }
    });
    HTML.document.onTouchStart.listen((HTML.TouchEvent e) {
      mouseDownX = e.touches[0].client.x;
      mouseDownY = e.touches[0].client.y;
    });
    HTML.document.onTouchMove.listen((HTML.TouchEvent e) {
      //azimuth += e.movement.x*0.01;
      //polar += e.movement.y*0.01;
      HTML.Point p = e.touches[0].client;
      azimuth += (p.x - mouseDownX) * 0.01;
      polar += (mouseDownY - p.y) * 0.01;
      mouseDownX = p.x;
      mouseDownY = p.y;
    });
  }

  void setLookAt(dynamic x, [double y, double z]) {
    if (x is Vector) {
      lookAt[0] = x[0];
      lookAt[1] = x[1];
      lookAt[2] = x[2];
    } else {
      lookAt[0] = x;
      lookAt[1] = y;
      lookAt[2] = z;
    }
  }

  void _setPosFromSpherical(double radius, double azimuth, double polar) {
    camera.setPosFromSpherical(radius, azimuth, polar);
    camera.addPosFromVec(lookAt);
    camera.lookAt(lookAt);
  }

  void animate(double elapsed) {
    if (cpk[Key.LEFT] != null) {
      azimuth += (0.03);
    } else if (cpk[Key.RIGHT] != null) {
      azimuth -= (0.03);
    }
    if (cpk[Key.UP] != null) {
      polar += (0.03);
    } else if (cpk[Key.DOWN] != null) {
      polar -= (0.03);
    }
    if (cpk[Key.SPACE] != null) {
      azimuth = 0.0;
      polar = 0.0;
    }
    polar = polar.clamp(-Math.PI / 2 + 0.1, Math.PI / 2 - 0.1);
    _setPosFromSpherical(radius, azimuth, polar);
  }
}

class FlyingCamera extends Animatable {
  Camera camera;
  Vector momentum = new Vector();

  FlyingCamera(this.camera);

  void animate(double elapsed) {
    Map<int, bool> cpk = currentlyPressedKeys;
    //Map<String, bool> cpmb = currentlyPressedMouseButtons;

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

    if (cpk[Key.SPACE] != null) {
      momentum.scale(0.92);
    }

    if (mouseY != 0) camera.lookUp(mouseY * 0.00006);
    if (mouseX != 0) camera.lookLeft(-mouseX * 0.00003);

    camera.translateFromVec(momentum);
  }

  void moveForward(double amount) {
    Vector back = camera.getBack();
    back.negate();
    momentum.lerp(back, amount);
  }
  void moveBackward(double amount) {
    Vector back = camera.getBack();
    momentum.lerp(back, amount);
  }
  void moveUp(num amount) {
    Vector up = camera.getUp();
    momentum.lerp(up, amount);
  }
  void moveDown(num amount) {
    Vector up = camera.getUp();
    up.negate();
    momentum.lerp(up, amount);
  }
  void moveLeft(num amount) {
    Vector right = camera.getRight();
    right.negate();
    momentum.lerp(right, amount);
  }
  void moveRight(num amount) {
    Vector right = camera.getRight();
    momentum.lerp(right, amount);
  }
}

class FPSCamera extends Animatable {
  Camera camera;
  Vector momentum = new Vector();
  Vector movement = new Vector();
  Vector tmp = new Vector();

  Vector traceStart = new Vector();
  Vector traceEnd = new Vector();

  Vector up = new Vector(0.0, 0.0, 1.0);

  int movementX = 0;
  int movementY = 0;

  FPSCamera(this.camera) {
    HTML.document.onMouseDown.listen((HTML.MouseEvent e) {
      e.preventDefault();
      HTML.document.body.requestPointerLock();
    });

    HTML.document.body.onMouseMove.listen((HTML.MouseEvent e) {
      e.preventDefault();
      movementX += e.movement.x;
      movementY += e.movement.y;
    });
  }

  void animate(double elapsed) {
    Map<int, bool> cpk = currentlyPressedKeys;
    //Map<String, bool> cpmb = currentlyPressedMouseButtons;

    movement.scale(0);

    if (cpk[Key.W] != null) {
      movement.subtract(camera.getBack());
    }
    if (cpk[Key.A] != null) {
      movement.subtract(camera.getRight());
    }
    if (cpk[Key.S] != null) {
      movement.add(camera.getBack());
    }
    if (cpk[Key.D] != null) {
      movement.add(camera.getRight());
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
    momentum.scale(0.85);

    if (cpk[Key.SPACE] != null) {}

    if (movementY != 0) camera.transform.rotate(movementY * 0.006, camera.getRight());
    if (movementX != 0) camera.transform.rotate(movementX * 0.006, up);

    movementX = 0;
    movementY = 0;
  }
}

// this class lets a Camera fly through a TorusKnot like through a tunnel
class TorusKnotCamera extends Animatable {
  Camera camera;

  TorusKnotCamera(this.camera);

  Vector p1 = new Vector();
  Vector p2 = new Vector();

  int p = 2;
  int q = 3;
  double radius = 20.0;

  double time = 0.0;
  Vector up = new Vector();

  void animate(double elapsed) {
    time += elapsed;
    getTorusKnotPos(time / 1500, q, p, radius, 1.0, p1);
    getTorusKnotPos((time / 1500) + 0.1, q, p, radius, 1.0, p2);
    up
      ..set(p2)
      ..normalize();
    camera.setPosFromVec(p1);
    camera.lookAt(p2);
  }
}
