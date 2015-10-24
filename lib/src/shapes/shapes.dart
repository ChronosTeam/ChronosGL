part of chronosgl;

class Shapes {
  MeshData createIcosahedron([int subdivisions = 4]) {
    return new Icosahedron(subdivisions);
  }

  MeshData createCube({double x: 1.0, double y: 1.0, double z: 1.0, double uMin: 0.0, double uMax: 1.0, double vMin: 0.0, double vMax: 1.0}) {
    return createCubeInternal(x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  }

  MeshData createCylinder(double radius, double height, int radialSubdivisions) {
    return createCylinderInternal(radius, height, radialSubdivisions);
  }

  MeshData createTorusKnot({double radius: 20.0, double tube: 4.0, int segmentsR: 128, int segmentsT: 16, int p: 2, int q: 3, double heightScale: 1.0}) {
    return createTorusKnotInternal(radius: radius, tube: tube, segmentsR: segmentsR, segmentsT: segmentsT, p: p, q: q, heightScale: heightScale);
  }

  MeshData createQuad(int size) {
    List<double> verts = [-1.0 * size, -1.0 * size, 0.0, 1.0 * size, -1.0 * size, 0.0, 1.0 * size, 1.0 * size, 0.0, -1.0 * size, 1.0 * size, 0.0];
    List<double> textureCoords = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];
    List<int> vertexIndices = [0, 1, 2, 0, 2, 3];
    return new MeshData(vertices: verts, textureCoords: textureCoords, vertexIndices: vertexIndices);
  }
}
