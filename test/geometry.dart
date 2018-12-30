@TestOn("chrome")
import 'package:chronosgl/src/core/lib.dart';
import 'package:chronosgl/src/shape/lib.dart';
import "package:test/test.dart";

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
      GeometryBuilder gb = IcosahedronGeometry(subdivisions: i);
      expect(gb.GenerateFaceIndices().length, equals(triangles[i]));
    }
  });

  test("cube", () {
    GeometryBuilder gb = CubeGeometry(computeNormals: true);
    expect(gb.GenerateFaceIndices().length, equals(6 * 6));
    expect(gb.IsOrientableManifoldWithBoundaries(), equals(true));
  });

  test("ico", () {
    GeometryBuilder gb = IcosahedronGeometry(subdivisions: 1);
    expect(gb.IsOrientableManifoldWithBoundaries(), equals(true));
  });

  /*
  test("torus", () {
    GeometryBuilder gb = TorusKnotGeometry(
        radius: 20.0,
        tubeRadius: 4.0,
        segmentsR: 128,
        segmentsT: 16,
        p: 3,
        q: 4,
        heightScale: 1.0,
        computeNormals: true);
    expect(gb.GenerateFaceIndices().length, equals(16 * 128 * 6));
    expect(gb.IsOrientableManifoldWithBoundaries(), equals(true));
  });
*/

  /*
  test("torus_wireframe", () {
    GeometryBuilder gb = TorusKnotGeometryWireframeFriendly(
        radius: 20.0,
        tubeRadius: 4.0,
        segmentsR: 128,
        segmentsT: 16,
        p: 3,
        q: 4,
        heightScale: 1.0,
        computeNormals: true);
    expect(gb.GenerateFaceIndices().length, equals(16 * 128 * 6));
    expect(gb.IsOrientableManifoldWithBoundaries(), equals(true));
*/

  print("PASS");
}
