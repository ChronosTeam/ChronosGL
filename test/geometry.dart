@TestOn("dartium")
import "package:test/test.dart";
import 'package:chronosgl/chronosgl.dart';

void main() {
  test("blah", () {
    MeshData md;

    for (int i = 0; i <= 5; ++i) {
      md = ShapeIcosahedron(null, i);
      print("${md}");
    }
    md = ShapeCube(null);
    print("${md}");

    md = ShapeCylinder(null, 3.0, 6.0, 2.0, 32);
    print("${md}");

    md = ShapeQuad(null, 2);
    print("${md}");

    print("OK");
  });
}
