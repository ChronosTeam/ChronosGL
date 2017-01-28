@TestOn("vm")
import "package:test/test.dart";
import '../lib/src/shape/lib.dart';
import '../lib/src/base/lib.dart';

void main() {
  test("basic", () {
    {
      GeometryBuilder gb = CubeGeometry();
      expect(gb.GenerateFaceIndices().length, equals(3 * 6 * 2));
    }

    {
      GeometryBuilder gb = WedgeGeometry();
      expect(gb.GenerateFaceIndices().length, equals(3 * 3 * 2 + 3 * 2));
    }

    {
      GeometryBuilder gb = QuadGeometry(1.0);
      expect(gb.GenerateFaceIndices().length, equals(3 * 2));
    }

    for (int i = 2; i < 16; i++) {
      GeometryBuilder gb = CylinderGeometry(3.0, 6.0, 2.0, i, true);
      expect(gb.GenerateFaceIndices().length, equals(3 * i * 4));
    }

    // TODO: come up with a closed form
    var triangles = [0, 240, 960, 3840, 15360, 61440];
    for (int i = 1; i <= 5; ++i) {
      GeometryBuilder gb = IcosahedronGeometry(i);
      expect(gb.GenerateFaceIndices().length, equals(triangles[i]));
    }
  });

  print("PASS");
}
