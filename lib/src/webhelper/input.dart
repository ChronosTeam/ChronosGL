part of webhelper;

/// HTML keyboard handling
class Keyboard {
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

  final Set<int> _currentlyPressedKeys = <int>{};
  final Set<int> _justPressedKeys = <int>{};
  final Set<int> _justReleasedKeys = <int>{};

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

/// HTML mouse handling
class Mouse {
  Mouse(dynamic elem) {
    if (elem == null) elem = HTML.document;

    elem.onMouseMove.listen((HTML.MouseEvent e) {
      e.preventDefault();

      currentX = e.offset.x;
      currentY = e.offset.y;

      moveDeltaX = e.movement.x;
      moveDeltaY = e.movement.y;
      //print ("MOVE ${moveDeltaX}x${moveDeltaY}");
    });

    elem.onMouseDown.listen((HTML.MouseEvent e) {
      e.preventDefault();
      print("BUTTON ${e.button}");
      _currentlyPressedButtons.add(e.button);
      _justPressedButtons.add(e.button);
    });

    elem.onMouseUp.listen((HTML.MouseEvent e) {
      e.preventDefault();
      _currentlyPressedButtons.remove(e.button);
      _justReleasedButtons.add(e.button);
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

  static const int RIGHT = 2;
  static const int MIDDLE = 1;
  static const int LEFT = 0;

  final Set<int> _currentlyPressedButtons = <int>{};
  final Set<int> _justPressedButtons = <int>{};
  final Set<int> _justReleasedButtons = <int>{};

  int moveDeltaX = 0;
  int moveDeltaY = 0;
  int wheelDeltaY = 0;
  int currentX = 0;
  int currentY = 0;

  bool currentlyPressedButton(int key) =>
      _currentlyPressedButtons.contains(key);

  // if you use this function make sure you call AfterFrameCleanup
  bool justPressedButton(int key) => _justPressedButtons.contains(key);

  // if you use this function make sure you call AfterFrameCleanup
  bool justReleasedButton(int key) => _justReleasedButtons.contains(key);

  void AfterFrameCleanup() {
    moveDeltaY = 0;
    moveDeltaX = 0;
    wheelDeltaY = 0;
    _justReleasedButtons.clear();
    _justPressedButtons.clear();
  }
}
