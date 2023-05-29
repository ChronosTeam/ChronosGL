//@TestOn("dartium")
import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';
//import "package:test/test.dart";
import 'polygon_data.dart' as DATA;

final HTML.InputElement gScale =
    HTML.document.querySelector('#scale') as HTML.InputElement;

final HTML.CanvasElement gCanvas =
    HTML.document.querySelector('#canvas') as HTML.CanvasElement;
final int gWidth = gCanvas.width!;
final int gHeight = gCanvas.height!;
final HTML.CanvasRenderingContext2D gContext = gCanvas.context2D;

void DrawContour(List<VM.Vector2> contour, String color) {
  gContext
    ..beginPath()
    ..moveTo(contour[0].x, contour[0].y);
  for (VM.Vector2 v in contour.sublist(1)) {
    gContext.lineTo(v.x, v.y);
  }
  gContext
    ..closePath()
    ..strokeStyle = color
    ..lineWidth = 5
    ..stroke();
}

void DrawMovement(List<VM.Vector2> contour, List<VM.Vector2> movement,
    double scale, String color) {
  assert(contour.length == movement.length);
  gContext.beginPath();

  for (int i = 0; i < contour.length; i++) {
    gContext
      ..moveTo(contour[i].x, contour[i].y)
      ..lineTo(contour[i].x + scale * movement[i].x,
          contour[i].y + scale * movement[i].y);
  }
  gContext
    ..closePath()
    ..strokeStyle = color
    ..lineWidth = 5
    ..stroke();
}

void ClearCanvas() {
  gContext
    ..fillStyle = "red"
    ..fillRect(0, 0, gWidth, gHeight);
}

Map<String, List<VM.Vector2>> gContours = {
  "Building": DATA.MakeContour(DATA.BuildingData, 4.0, 16.0, -600.0, -70.0),
  "Bird": DATA.MakeContour(DATA.BirdData, 40.0, 40.0, 12.0, 12.0),
};

Map<String, List<VM.Vector2>> gGradients = {};

void main() {
  for (String k in gContours.keys) {
    gContours[k] = FilterDupsAndColinear(gContours[k]!);
    gGradients[k] = GetContourGradient(gContours[k]!);
  }

  void animate(num timeMs) {
    ClearCanvas();
    HTML.window.animationFrame.then(animate);
    String k = "Building";
    List<VM.Vector2> c = gContours[k]!;
    List<VM.Vector2> g = gGradients[k]!;
    DrawContour(c, "blue");
    DrawMovement(c, g, 50.0, "green");
    List<VM.Vector2> scaled = List.generate(c.length, (i) => VM.Vector2.zero());
    for (int i = 0; i < c.length; ++i) {
      scaled[i] = c[i] + g[i].scaled(gScale.valueAsNumber!.toDouble());
    }
    DrawContour(scaled, "yellow");
  }

  animate(0.0);
}
