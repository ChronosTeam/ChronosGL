part of chronosgl;

/// HTML keyboard handling
class Keyboard {
  final Set<int> _currentlyPressedKeys = new Set<int>();
  final Set<int> _justPressedKeys = new Set<int>();
  final Set<int> _justReleasedKeys = new Set<int>();

  Keyboard(dynamic elem) {
    if (elem == null) elem = HTML.document;

    elem.onKeyDown.listen((HTML.KeyboardEvent e) {
      _currentlyPressedKeys.add(e.which);
      _justPressedKeys.add(e.which);
    });

    elem.onKeyUp.listen((HTML.KeyboardEvent e) {
      _currentlyPressedKeys.remove(e.which);
      _justReleasedKeys.add(e.which);
    });
  }

  bool currentlyPressedKey(int key) => _currentlyPressedKeys.contains(key);

  // if you use this function make sure you call AfterFrameCleanup
  bool justPressedKey(int key) => _justPressedKeys.contains(key);

  // if you use this function make sure you call AfterFrameCleanup
  bool justReleasedKey(int key) => _justReleasedKeys.contains(key);

  void AfterFrameCleanup() {
    _justReleasedKeys.clear();
    _justPressedKeys.clear();
  }

// See http://keycode.info/
  static const int PAGEUP = 33;
  static const int PAGEDOWN = 34;
  static const int END = 35;
  static const int HOME = 36;
  static const int LEFT = 37;
  static const int RIGHT = 39;
  static const int UP = 38;
  static const int DOWN = 40;
  static const int SPACE = 32;
  static const int SHIFT = 16;
  static const int CTRL = 17;
  static const int ALT = 18;
  static const int TAB = 9;
  static const int A = 65;
  static const int B = 66;
  static const int C = 67;
  static const int D = 68;
  static const int E = 69;
  static const int F = 70;
  static const int G = 71;
  static const int H = 72;
  static const int I = 73;
  static const int J = 74;
  static const int K = 75;
  static const int L = 76;
  static const int M = 77;
  static const int N = 78;
  static const int O = 79;
  static const int P = 80;
  static const int Q = 81;
  static const int R = 82;
  static const int S = 83;
  static const int T = 84;
  static const int U = 85;
  static const int V = 86;
  static const int W = 87;
  static const int X = 88;
  static const int Y = 89;
  static const int Z = 90;
  //
  static const int F1 = 112;
  static const int F2 = 113;
  static const int F3 = 114;
  static const int F4 = 115;
  static const int F5 = 116;
  static const int F6 = 117;
  static const int F7 = 118;
  static const int F8 = 119;
  static const int F9 = 120;
  static const int F10 = 121;
  static const int F11 = 122;
  static const int F12 = 123;
}

class Mouse {
  static const int RIGHT = 2;
  static const int MIDDLE = 1;
  static const int LEFT = 0;

  final Set<int> _currentlyPressedMouseButtons = new Set<int>();

  int moveDeltaX = 0;
  int moveDeltaY = 0;
  int wheelDeltaY = 0;

  Mouse(dynamic elem) {
    if (elem == null) elem = HTML.document;

    elem.onMouseMove.listen((HTML.MouseEvent e) {
      e.preventDefault();

      moveDeltaX = e.movement.x;
      moveDeltaY = e.movement.y;
      //print ("MOVE ${moveDeltaX}x${moveDeltaY}");
    });

    elem.onMouseDown.listen((HTML.MouseEvent e) {
      e.preventDefault();
      print("BUTTON ${e.button}");
      _currentlyPressedMouseButtons.add(e.button);
    });

    elem.onMouseUp.listen((HTML.MouseEvent e) {
      e.preventDefault();
      _currentlyPressedMouseButtons.remove(e.button);
    });

    elem.onMouseWheel.listen((HTML.WheelEvent e) {
      e.preventDefault();
      wheelDeltaY = e.deltaY;
    });

    /*
  canvas.onContextMenu.listen((HTML.MouseEvent e) {
    e.preventDefault();
    //e.stopPropagation();
    //e.cancelBubble = true;
  });

    canvas.onDragStart.listen((HTML.MouseEvent event) {
      event.preventDefault();
    });
    */
    /*

    eventElement.onTouchStart.listen((HTML.TouchEvent e) {
      mouseDownX = e.touches[0].client.x;
      mouseDownY = e.touches[0].client.y;
    });

    eventElement.onTouchMove.listen((HTML.TouchEvent e) {
      //azimuth += e.movement.x*0.01;
      //polar += e.movement.y*0.01;
      HTML.Point p = e.touches[0].client;
      azimuth += (p.x - mouseDownX) * 0.01;
      polar += (mouseDownY - p.y) * 0.01;
      mouseDownX = p.x;
      mouseDownY = p.y;
    });

    setUpEventCapture(null);
    */
  }

  bool currentlyPressedMouseButton(int key) =>
      _currentlyPressedMouseButtons.contains(key);

  void AfterFrameCleanup() {
    moveDeltaY = 0;
    moveDeltaX = 0;
    wheelDeltaY = 0;
  }
}

class OrbitCamera extends Camera {
  double _radius;
  double azimuth;
  double polar;
  double roll = 0.0;
  final VM.Vector3 _lookAtPos = new VM.Vector3.zero();
  num mouseWheelFactor = -0.02;
  final Keyboard _keyboard;
  final Mouse _mouse;

  /// OrbitCamera initializes an orbiting camera
  ///
  /// @param this._radius blah
  /// @param this._polar blah
  OrbitCamera(this._radius, this.azimuth, this.polar, HTML.Element eventElement)
      : _keyboard = new Keyboard(eventElement),
        _mouse = new Mouse(eventElement),
        super("camera:orbit");

  void setLookAt(VM.Vector3 v) {
    _lookAtPos.setFrom(v);
  }

  void setRadius(double v) {
    _radius = v;
  }

  void animate(double elapsed) {
    if (_mouse.currentlyPressedMouseButton(Mouse.LEFT) ||
        _mouse.currentlyPressedMouseButton(Mouse.MIDDLE)) {
      //azimuth += e.movement.x*0.01;
      //polar += e.movement.y*0.01;
      azimuth += _mouse.moveDeltaX * 0.01;
      polar += _mouse.moveDeltaY * 0.01;
    }

    if (_keyboard.currentlyPressedKey(Keyboard.LEFT)) {
      azimuth += (0.03);
    } else if (_keyboard.currentlyPressedKey(Keyboard.RIGHT)) {
      azimuth -= (0.03);
    }

    if (_keyboard.currentlyPressedKey(Keyboard.UP)) {
      polar += (0.03);
    } else if (_keyboard.currentlyPressedKey(Keyboard.DOWN)) {
      polar -= (0.03);
    }

    if (_keyboard.currentlyPressedKey(Keyboard.PAGEUP)) {
      _radius *= 0.99;
    } else if (_keyboard.currentlyPressedKey(Keyboard.PAGEDOWN)) {
      _radius *= 1.01;
    }

    if (_keyboard.currentlyPressedKey(Keyboard.SPACE)) {
      azimuth = 0.0;
      polar = 0.0;
    }

    double d = _mouse.wheelDeltaY * mouseWheelFactor;
    if (_radius - d > 0) _radius -= d;

    polar = polar.clamp(-Math.pi / 2 + 0.1, Math.pi / 2 - 0.1);
    setPosFromSpherical(_radius, azimuth, polar);
    addPosFromVec(_lookAtPos);
    lookAt(_lookAtPos);
    rollLeft(roll);
    _keyboard.AfterFrameCleanup();
    _mouse.AfterFrameCleanup();
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
