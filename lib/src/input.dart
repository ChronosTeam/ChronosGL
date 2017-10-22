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

void setUpCapture(HTML.CanvasElement canvas) {
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
