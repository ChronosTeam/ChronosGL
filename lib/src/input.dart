part of chronosgl;

Map<int, bool> currentlyPressedKeys = new Map<int, bool>();
Map<String, bool> currentlyPressedMouseButtons = new Map<String, bool>();

int clientX = 0;
int clientY = 0;
int mouseX = 0;
int mouseY = 0;
int mouseDownX = 0;
int mouseDownY = 0;
bool skipDefaultMouseMoveListener = false;

void setUpEventCapture(HTML.CanvasElement canvas) {
  HTML.document.onKeyDown.listen((HTML.KeyboardEvent e) {
    currentlyPressedKeys[e.keyCode] = true;
  });
  HTML.document.onKeyUp.listen((HTML.KeyboardEvent e) {
    currentlyPressedKeys[e.keyCode] = null;
  });

  if (!skipDefaultMouseMoveListener) {
    HTML.document.onMouseMove.listen((HTML.MouseEvent e) {
      //e.preventDefault();
      clientX = e.client.x;
      clientY = HTML.window.innerHeight - e.client.y;
      mouseX = e.client.x - (HTML.window.innerWidth ~/ 2);
      mouseY = -(e.client.y - (HTML.window.innerHeight ~/ 2));
    });
  }

  HTML.document.onMouseDown.listen((HTML.MouseEvent e) {
    //e.preventDefault();
    mouseDownX = e.client.x - (HTML.window.innerWidth ~/ 2);
    mouseDownY = -(e.client.y - (HTML.window.innerHeight ~/ 2));
    bool rightclick = e.button == 2;
    if (rightclick) currentlyPressedMouseButtons['right'] = true;
    else currentlyPressedMouseButtons['left'] = true;
  });

  canvas.onContextMenu.listen((HTML.MouseEvent e) {
    e.preventDefault();
    //e.stopPropagation();
    //e.cancelBubble = true;
  });

  HTML.document.onMouseUp.listen((HTML.MouseEvent e) {
    //e.preventDefault();
    bool rightclick = e.button == 2;
    if (rightclick) currentlyPressedMouseButtons['right'] = null;
    else currentlyPressedMouseButtons['left'] = null;
  });
}

abstract class Key {
  static int LEFT = 37;
  static int RIGHT = 39;
  static int UP = 38;
  static int DOWN = 40;
  static int SPACE = 32;
  static int SHIFT = 16;
  static int CTRL = 17;
  static int ALT = 18;
  static int TAB = 9;
  static int A = 65;
  static int B = 66;
  static int C = 67;
  static int D = 68;
  static int E = 69;
  static int F = 70;
  static int G = 71;
  static int H = 72;
  static int I = 73;
  static int J = 74;
  static int K = 75;
  static int L = 76;
  static int M = 77;
  static int N = 78;
  static int O = 79;
  static int P = 80;
  static int Q = 81;
  static int R = 82;
  static int S = 83;
  static int T = 84;
  static int U = 85;
  static int V = 86;
  static int W = 87;
  static int X = 88;
  static int Y = 89;
  static int Z = 90;
}

class OrbitCamera extends Camera {
  double _radius;
  double azimuth;
  double polar;
  double roll = 0.0;
  final VM.Vector3 _lookAtPos = new VM.Vector3.zero();
  num mouseWheelFactor = -0.01;

  Map<int, bool> _cpk = currentlyPressedKeys;
  Map<String, bool> _cpmb = currentlyPressedMouseButtons;

  OrbitCamera(this._radius,
      [this.azimuth = 0.0, this.polar = 0.0, HTML.Element eventElement = null])
      : super("camera:orbit") {
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
        polar += (mouseDownY - mouseY) * 0.01;
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
      polar += (mouseDownY - p.y) * 0.01;
      mouseDownX = p.x;
      mouseDownY = p.y;
    });
  }

  void setLookAt(VM.Vector3 v) {
    _lookAtPos.setFrom(v);
  }

  void setRadius(double v) {
    _radius = v;
  }

  void animate(double elapsed) {
    if (_cpk[Key.LEFT] != null) {
      azimuth += (0.03);
    } else if (_cpk[Key.RIGHT] != null) {
      azimuth -= (0.03);
    }
    if (_cpk[Key.UP] != null) {
      polar += (0.03);
    } else if (_cpk[Key.DOWN] != null) {
      polar -= (0.03);
    }
    if (_cpk[Key.SPACE] != null) {
      azimuth = 0.0;
      polar = 0.0;
    }
    polar = polar.clamp(-Math.PI / 2 + 0.1, Math.PI / 2 - 0.1);
    setPosFromSpherical(_radius, azimuth, polar);
    addPosFromVec(_lookAtPos);
    lookAt(_lookAtPos);
    rollLeft(roll);
  }
}

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

  FPSCamera([HTML.Element eventElement = null]) : super("camera:fps") {
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
