@TestOn("dartium")
import "package:test/test.dart";
import 'package:chronosgl/chronosgl.dart';

void main() {
  test("geometry", () {
    {
      MeshData md;

      for (int i = 0; i <= 5; ++i) {
        md = ShapeIcosahedron(null, i);
        print("${md}");
      }
    }
    {
      MeshData md = ShapeCube(null);
      //md.Finalize();
      print("${md}");
    }
    {
      MeshData md = ShapeCylinder(null, 3.0, 6.0, 2.0, 32);
      print("${md}");
    }
    {
      MeshData md = ShapeQuad(null, 2);
      print("${md}");
    }
  });

  print("PASS");
}
