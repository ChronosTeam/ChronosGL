import 'dart:typed_data';
import 'dart:math' as Math;
import 'dart:html' as HTML;
//import 'dart:js' as JS;

import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';

final ShaderObject demoVertexShader = ShaderObject("demoVertexShader")
  ..AddAttributeVars([aPosition, aPointSize, aColor])
  ..AddVaryingVars([vColor])
  ..SetBody([
    """
void main(void) {
    gl_Position = vec4(${aPosition}.xy, 0.0, 1.0);
    gl_PointSize = ${aPointSize};
    ${vColor} = ${aColor};
} 
"""
  ]);

final ShaderObject demoFragmentShader = ShaderObject("demoFragmentShader")
  ..AddVaryingVars([vColor])
  ..SetBody([
    """
void main(void) {
    float r = length(gl_PointCoord.xy - vec2(0.5, 0.5));
    ${oFragColor}.rgb = r*r < 0.2 ? ${vColor} : vec3(0.0, 0.0, 0.0);
}
"""
  ]);

final VM.Vector2 middle = VM.Vector2(0.5, 0.5);

class Sprite {
  final bool isShip;
  double size;
  final VM.Vector2 pos;
  double angle;
  double velocity;
  final VM.Vector2 dir = VM.Vector2.zero(); // cache cartesian direction
  final VM.Vector3 color;

  Sprite(this.isShip, this.size, Math.Random rng)
      : pos = VM.Vector2.random(rng)
          ..sub(middle)
          ..scale(2.0),
        velocity = rng.nextDouble(),
        angle = 2.0 * Math.pi * rng.nextDouble(),
        color = VM.Vector3.random(rng) {
    dir.setValues(dirX, dirY);
  }

  double get dirX => velocity * Math.sin(angle);
  double get dirY => velocity * Math.cos(angle);

  void AdvanceTime(double speed) {
    pos.addScaled(dir, speed);
    if (isShip) {
      if (pos.x < -1.0) pos.x = 2.0 - pos.x;
      if (pos.x > 1.0) pos.x = -2.0 + pos.x;
      if (pos.y < -1.0) pos.y = 2.0 - pos.y;
      if (pos.y > 1.0) pos.y = -2.0 + pos.y;
    }
  }

  void setAngle(double a) {
    angle = a;
    dir.setValues(dirX, dirY);
  }

  void setVelocity(double v) {
    if (v > 10.0) v = 10.0;
    if (v < 0.0) v = 0.0;
    velocity = v;
    dir.setValues(dirX, dirY);
  }

  void TurnLeft() {
    setAngle(angle - 2.0 * Math.pi * 0.005);
  }

  void Accelerate() {
    setVelocity(velocity + 0.05);
  }

  void Break() {
    setVelocity(velocity - 0.05);
  }

  void TurnRight() {
    setAngle(angle + 2.0 * Math.pi * 0.005);
  }

  bool isInvisible() {
    if (isShip) return false;
    return pos.x > 1.0 || pos.x < -1.0 || pos.y > 1.0 || pos.y < -1.0;
  }
}

const int NumBullets = 10;

void ExtractSpritePositions(List<Sprite> sprites, Float32List out) {
  int offset = 0;
  for (Sprite s in sprites) {
    if (s.isShip) {
      //s.size = 1000.0;
      double dx = Math.sin(s.angle);
      double dy = Math.cos(s.angle);
      double d2x = -dy * 0.05;
      double d2y = dx * 0.05;
      dx *= 0.07;
      dy *= 0.07;

      out[offset + 0] = s.pos.x + dx;
      out[offset + 1] = s.pos.y + dy;
      out[offset + 2] = 0.0;
      offset += 3;
      out[offset + 0] = s.pos.x + d2x;
      out[offset + 1] = s.pos.y + d2y;
      out[offset + 2] = 0.0;
      offset += 3;
      out[offset + 0] = s.pos.x - d2x;
      out[offset + 1] = s.pos.y - d2y;
      out[offset + 2] = 0.0;
      offset += 3;
    } else {
      out[offset + 0] = s.pos.x;
      out[offset + 1] = s.pos.y;
      out[offset + 2] = 0.0;
      offset += 3;
    }
  }
}

void ExtractSpriteColors(List<Sprite> sprites, Float32List out) {
  int offset = 0;
  for (Sprite s in sprites) {
    out[offset + 0] = s.color.r;
    out[offset + 1] = s.color.g;
    out[offset + 2] = s.color.b;
    offset += 3;

    if (s.isShip) {
      for (int i = 0; i < 2; i++) {
        out[offset + 0] = s.color.r * 0.5;
        out[offset + 1] = s.color.g * 0.5;
        out[offset + 2] = s.color.b * 0.5;
        offset += 3;
      }
    }
  }
}

void ExtractSpriteSizes(List<Sprite> sprites, Float32List out) {
  int offset = 0;
  for (Sprite s in sprites) {
    out[offset] = s.size;
    offset++;

    if (s.isShip) {
      for (int i = 0; i < 2; i++) {
        out[offset] = s.size;
        offset++;
      }
    }
  }
}

final HTML.DivElement info = HTML.document.querySelector('#info');

class Gamepad {
  int _index;
  HTML.Gamepad _gp;
  double x = 0.0;
  double y = 0.0;
  bool button = false;
  bool justPressed = false;
  bool justReleased = false;

  Gamepad([this._index = -1]);

  bool _LazyInitialize() {
    if (_gp != null) return true;
    var pads = HTML.window.navigator.getGamepads();
    int count = 0;
    for (HTML.Gamepad p in pads) {
      // print("${_index} $p");
      if ((count == _index || _index == -1) && p != null) {
        print("found gamepad: ${p.id} ${p.mapping}");
        print("buttons: ${p.buttons.length} axes: ${p.axes.length}");
        _gp = p;
        _index = count;
        return true;
      }
      count++;
    }
    return false;
  }

  void Poll() {
    if (!_LazyInitialize()) {
      info.innerHtml = "no joystick detected";
      return;
    }
    // https://github.com/dart-lang/sdk/issues/33148
    // This reloading should not be necessary
    _gp = HTML.window.navigator.getGamepads()[_index];
    List<bool> bs = [];
    for (var b in _gp.buttons) {
      bs.add(b.pressed);
    }
    info.innerHtml =
        "device[${_index}]: ${_gp.id}<br>axes: ${_gp.axes}<br>buttons: ${bs}";
    x = _gp.axes[0] + 0.0;
    y = _gp.axes[1] + 0.0;
    if (button != _gp.buttons[0].pressed) {
      if (button) {
        justReleased = true;
      } else {
        justPressed = true;
      }
    }
    button = _gp.buttons[0].pressed;
  }

  void AfterFrameCleanup() {
    justPressed = false;
    justReleased = false;
  }
}

void HandleUseInput(Keyboard input, Gamepad gamepad, List<Sprite> sprites) {
  gamepad.Poll();

  if (input.currentlyPressedKey(Keyboard.LEFT) || gamepad.x < -0.5) {
    sprites[0].TurnLeft();
  } else if (input.currentlyPressedKey(Keyboard.RIGHT) || gamepad.x > 0.5) {
    sprites[0].TurnRight();
  } else if (input.currentlyPressedKey(Keyboard.UP) || gamepad.y < -0.5) {
    sprites[0].Accelerate();
  } else if (input.currentlyPressedKey(Keyboard.DOWN) || gamepad.y > 0.5) {
    sprites[0].Break();
  } else if (input.justPressedKey(Keyboard.SPACE) || gamepad.justPressed) {
    print("fire");
    for (Sprite s in sprites) {
      Sprite ship = sprites[0];
      if (s.isInvisible()) {
        s.pos.setFrom(ship.pos);
        s.setAngle(ship.angle);
        s.setVelocity(10.0);
        break;
      }
    }
  }
  gamepad.AfterFrameCleanup();
  input.AfterFrameCleanup();
}

void main() {
  final Math.Random rng = Math.Random();
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');
  final int w = canvas.clientWidth;
  final int h = canvas.clientHeight;
  final int d = Math.min(w, h);
  // use a square canvas to avoid distortion
  canvas.width = d;
  canvas.height = d;

  final Keyboard input = Keyboard(null);
  final Gamepad gamepad = Gamepad(-1);

  final List<Sprite> sprites = [Sprite(true, 50.0, rng)];
  for (int i = 0; i < NumBullets; ++i) {
    sprites.add(Sprite(false, 20.0, rng));
  }

  final ChronosGL cgl = ChronosGL(canvas, antialiasing: false);
  // Create the main shader program for displaying the torus.
  final RenderProgram prog =
      RenderProgram("basic", cgl, demoVertexShader, demoFragmentShader);

  final Float32List points = Float32List(3 * (sprites.length + 2));
  final Float32List sizes = Float32List(sprites.length + 2);
  final Float32List colors = Float32List(3 * (sprites.length + 2));

  ExtractSpritePositions(sprites, points);
  ExtractSpriteSizes(sprites, sizes);
  ExtractSpriteColors(sprites, colors);

  final MeshData mesh = prog.MakeMeshData("points", GL_POINTS)
    ..AddVertices(points)
    ..AddAttribute(aPointSize, sizes, 1)
    ..AddAttribute(aColor, colors, 3);

  Material mat = Material("nodepth")
    ..ForceUniform(cBlendEquation, BlendEquationAdd)
    ..ForceUniform(cDepthTest, false)
    ..ForceUniform(cDepthWrite, false);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    for (Sprite s in sprites) {
      s.AdvanceTime(elapsed / 10000.0);
    }

    HandleUseInput(input, gamepad, sprites);

    ExtractSpritePositions(sprites, points);
    mesh.ChangeVertices(points);

    prog.Draw(mesh, [mat]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
