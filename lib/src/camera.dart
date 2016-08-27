part of chronosgl;

class Camera extends Spatial {
  // Get the model view matrix.  This overwrites the content of parameter m.
  // The view matrix is the inverse of the camera’s transformation matrix
  // in world-space.
  void getViewMatrix(VM.Matrix4 m) {
    // why does this seem to be already inverted/transposed ?
    m.setFrom(transform);
    m[12] = 0.0;
    m[13] = 0.0;
    m[14] = 0.0;
    m[15] = 1.0;
    // The eye position is negated which is equivalent to the inverse of the translation matrix: T(v)^-1 == T(-v)
    // T = translation matrix, v = eye position.
    // short cut for rotationMatrixInverted * translationMatrixInverted,
    // see http://3dgep.com/understanding-the-view-matrix/#Look_At_Camera
    m.translate(-transform[12], -transform[13], -transform[14]);
  }

  VM.Vector3 getEyePosition() {
    return new VM.Vector3(transform[12], transform[13], transform[14]);
  }
}

class OrbitCamera extends Camera {
  double _radius;
  double azimuth;
  double _polar;
  final VM.Vector3 _lookAtPos = new VM.Vector3.zero();
  num mouseWheelFactor = -0.01;

  Map<int, bool> _cpk = currentlyPressedKeys;
  Map<String, bool> _cpmb = currentlyPressedMouseButtons;

  OrbitCamera(this._radius,
      [this.azimuth = 0.0,
      this._polar = 0.0,
      HTML.Element eventElement = null]) {
    if (eventElement == null) eventElement = HTML.document.body;
    eventElement.onMouseWheel.listen((HTML.WheelEvent e) {
      try {
        double d = e.deltaY * mouseWheelFactor;
        if (_radius - d > 0) _radius -= d;
      } catch (e) {
        print(e);
      }
    });
    eventElement.onMouseMove.listen((HTML.MouseEvent e) {
      e.preventDefault();
      if (_cpmb['left'] != null) {
        //azimuth += e.movement.x*0.01;
        //polar += e.movement.y*0.01;
        azimuth += (mouseX - mouseDownX) * 0.01;
        _polar += (mouseDownY - mouseY) * 0.01;
        mouseDownX = mouseX;
        mouseDownY = mouseY;
      }
    });
    eventElement.onTouchStart.listen((HTML.TouchEvent e) {
      mouseDownX = e.touches[0].client.x;
      mouseDownY = e.touches[0].client.y;
    });
    eventElement.onTouchMove.listen((HTML.TouchEvent e) {
      //azimuth += e.movement.x*0.01;
      //polar += e.movement.y*0.01;
      HTML.Point p = e.touches[0].client;
      azimuth += (p.x - mouseDownX) * 0.01;
      _polar += (mouseDownY - p.y) * 0.01;
      mouseDownX = p.x;
      mouseDownY = p.y;
    });
  }

  void setLookAt(VM.Vector3 v) {
    _lookAtPos.setFrom(v);
  }

  void animate(double elapsed) {
    if (_cpk[Key.LEFT] != null) {
      azimuth += (0.03);
    } else if (_cpk[Key.RIGHT] != null) {
      azimuth -= (0.03);
    }
    if (_cpk[Key.UP] != null) {
      _polar += (0.03);
    } else if (_cpk[Key.DOWN] != null) {
      _polar -= (0.03);
    }
    if (_cpk[Key.SPACE] != null) {
      azimuth = 0.0;
      _polar = 0.0;
    }
    _polar = _polar.clamp(-Math.PI / 2 + 0.1, Math.PI / 2 - 0.1);
    setPosFromSpherical(_radius, azimuth, _polar);
    addPosFromVec(_lookAtPos);
    lookAt(_lookAtPos);
  }
}

class FlyingCamera extends Camera {
  VM.Vector3 momentum_ = new VM.Vector3.zero();

  FlyingCamera();

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
      momentum_.scale(0.92);
    }

    if (mouseY != 0) lookUp(mouseY * 0.00006);
    if (mouseX != 0) lookLeft(-mouseX * 0.00003);

    translateFromVec(momentum_);
  }

  void moveForward(double amount) {
    VM.Vector3 t = getBack();
    t.negate();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  void moveBackward(double amount) {
    VM.Vector3 t = getBack();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  void moveUp(num amount) {
    VM.Vector3 t = getUp();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  void moveDown(num amount) {
    VM.Vector3 t = getUp();
    t.negate();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  void moveLeft(num amount) {
    VM.Vector3 t = getRight();
    t.negate();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  void moveRight(num amount) {
    VM.Vector3 t = getRight();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }
}

class FPSCamera extends Camera {
  VM.Vector3 momentum = new VM.Vector3.zero();
  VM.Vector3 movement = new VM.Vector3.zero();
  VM.Vector3 tmp = new VM.Vector3.zero();

  VM.Vector3 traceStart = new VM.Vector3.zero();
  VM.Vector3 traceEnd = new VM.Vector3.zero();

  VM.Vector3 up = new VM.Vector3(0.0, 0.0, 1.0);

  int movementX = 0;
  int movementY = 0;

  FPSCamera([HTML.Element eventElement = null]) {
    if (eventElement == null) eventElement = HTML.document.body;
    eventElement.onMouseDown.listen((HTML.MouseEvent e) {
      e.preventDefault();
      eventElement.requestPointerLock();
    });

    eventElement.onMouseMove.listen((HTML.MouseEvent e) {
      e.preventDefault();
      movementX += e.movement.x;
      movementY += e.movement.y;
    });
  }

  void animate(double elapsed) {
    Map<int, bool> cpk = currentlyPressedKeys;
    //Map<String, bool> cpmb = currentlyPressedMouseButtons;

    movement.scale(0.0);

    if (cpk[Key.W] != null) {
      movement.sub(getBack());
    }
    if (cpk[Key.A] != null) {
      movement.sub(getRight());
    }
    if (cpk[Key.S] != null) {
      movement.add(getBack());
    }
    if (cpk[Key.D] != null) {
      movement.add(getRight());
    }

    movement.z = 0.0;
    movement.normalize();
    momentum.add(movement);
    tmp.setFrom(momentum);
    tmp.scale(0.02);

    traceStart.setFrom(getPos());
    traceEnd.setFrom(getPos());
    traceEnd.add(tmp);

    //Output output = level.trace( traceStart, traceEnd, 10.0);
    //if( output.fraction == 1.0 || output.startSolid || output.allSolid )

    translateFromVec(tmp);
    momentum.scale(0.85);

    if (cpk[Key.SPACE] != null) {}

    if (movementY != 0)
      transform.rotate(getRight(), movementY * 0.006);
    if (movementX != 0) transform.rotate(up, movementX * 0.006);

    movementX = 0;
    movementY = 0;
  }
}

// this class lets a Camera fly through a TorusKnot like through a tunnel
class TorusKnotCamera extends Camera {
  TorusKnotCamera();

  VM.Vector3 p1 = new VM.Vector3.zero();
  VM.Vector3 p2 = new VM.Vector3.zero();

  int p = 2;
  int q = 3;
  double radius = 20.0;

  double time = 0.0;
  VM.Vector3 up = new VM.Vector3.zero();

  void animate(double elapsed) {
    time += elapsed;
    getTorusKnotPos(time / 1500, q, p, radius, 1.0, p1);
    getTorusKnotPos((time / 1500) + 0.1, q, p, radius, 1.0, p2);
    up
      ..setFrom(p2)
      ..normalize();
    setPosFromVec(p1);
    lookAt(p2);
  }
}
