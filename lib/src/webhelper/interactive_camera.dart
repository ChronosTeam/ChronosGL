part of webhelper;

/// Interactive Camera focused on a specific point.
class OrbitCamera extends Spatial {
  /// OrbitCamera initializes an orbiting camera
  ///
  /// @param this._radius blah
  /// @param this._polar blah
  OrbitCamera(this._radius, this.azimuth, this.polar, HTML.Element eventElement)
      : keyboard = Keyboard(null),
        mouse = Mouse(eventElement),
        super("camera:orbit");

  double _radius;
  double azimuth;
  double polar;
  double roll = 0.0;
  final VM.Vector3 _lookAtPos = VM.Vector3.zero();
  num mouseWheelFactor = -0.02;
  final Keyboard keyboard;
  final Mouse mouse;

  void setLookAt(VM.Vector3 v) {
    _lookAtPos.setFrom(v);
  }

  void setRadius(double v) {
    _radius = v;
  }

  void animate(double elapsed) {
    if (mouse.currentlyPressedButton(Mouse.LEFT) ||
        mouse.currentlyPressedButton(Mouse.MIDDLE)) {
      //azimuth += e.movement.x*0.01;
      //polar += e.movement.y*0.01;
      azimuth += mouse.moveDeltaX * 0.01;
      polar += mouse.moveDeltaY * 0.01;
    }

    if (keyboard.currentlyPressedKey(Keyboard.LEFT)) {
      azimuth += (0.03);
    } else if (keyboard.currentlyPressedKey(Keyboard.RIGHT)) {
      azimuth -= (0.03);
    }

    if (keyboard.currentlyPressedKey(Keyboard.UP)) {
      polar += (0.03);
    } else if (keyboard.currentlyPressedKey(Keyboard.DOWN)) {
      polar -= (0.03);
    }

    if (keyboard.currentlyPressedKey(Keyboard.PAGEUP)) {
      _radius *= 0.99;
    } else if (keyboard.currentlyPressedKey(Keyboard.PAGEDOWN)) {
      _radius *= 1.01;
    }

    if (keyboard.currentlyPressedKey(Keyboard.SPACE)) {
      azimuth = 0.0;
      polar = 0.0;
    }

    double d = mouse.wheelDeltaY * mouseWheelFactor;
    if (_radius - d > 0) _radius -= d;

    polar = polar.clamp(-Math.pi / 2 + 0.1, Math.pi / 2 - 0.1);
    setPosFromSpherical(_radius, azimuth, polar);
    addPosFromVec(_lookAtPos);
    lookAt(_lookAtPos);
    rollLeft(roll);
    keyboard.AfterFrameCleanup();
    mouse.AfterFrameCleanup();
  }
}

/*
class FlyingCamera extends Camera {
  VM.Vector3 momentum_ = new VM.Vector3.zero();

  FlyingCamera() : super("camera:flying");

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

  @override
  void moveForward(double amount) {
    VM.Vector3 t = getBack();
    t.negate();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  @override
  void moveBackward(double amount) {
    VM.Vector3 t = getBack();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  @override
  void moveUp(num amount) {
    VM.Vector3 t = getUp();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  @override
  void moveDown(num amount) {
    VM.Vector3 t = getUp();
    t.negate();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  @override
  void moveLeft(num amount) {
    VM.Vector3 t = getRight();
    t.negate();
    VM.Vector3.mix(momentum_, t, amount, momentum_);
  }

  @override
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

  FPSCamera([HTML.Element eventElement]) : super("camera:fps") {
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

    if (movementY != 0) transform.rotate(getRight(), movementY * 0.006);
    if (movementX != 0) transform.rotate(up, movementX * 0.006);

    movementX = 0;
    movementY = 0;
  }
}

*/
