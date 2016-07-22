part of chronosgl;

class Shapes {
  static MeshData Icosahedron([int subdivisions = 4]) {
    return createIcosahedronInternal(subdivisions);
  }

  static MeshData Cube(
      {double x: 1.0,
      double y: 1.0,
      double z: 1.0,
      double uMin: 0.0,
      double uMax: 1.0,
      double vMin: 0.0,
      double vMax: 1.0}) {
    return createCubeInternal(
        x: x, y: y, z: z, uMin: uMin, uMax: uMax, vMin: vMin, vMax: vMax);
  }

  static MeshData Cylinder(double radiusTop, double radiusBot, double height,
      int radialSubdivisions) {
    return createCylinderInternal(
        radiusTop, radiusBot, height, radialSubdivisions);
  }
  
  static MeshData CylinderWireframeFriendly(double radiusTop, double radiusBot, double height,
       int radialSubdivisions) {
     return createCylinderInternalWireframeFriendly(
         radiusTop, radiusBot, height, radialSubdivisions);
   }
  
  static MeshData TorusKnot(
      {double radius: 20.0,
      double tube: 4.0,
      int segmentsR: 128,
      int segmentsT: 16,
      int p: 2,
      int q: 3,
      double heightScale: 1.0}) {
    return createTorusKnotInternal(
        radius: radius,
        tube: tube,
        segmentsR: segmentsR,
        segmentsT: segmentsT,
        p: p,
        q: q,
        heightScale: heightScale);
  }

  static MeshData Quad(int size) {
    MeshData md = new MeshData();
    md.EnableAttribute(aTextureCoordinates);

    List<Vector> vertices = [
      new Vector(-1.0 * size, -1.0 * size, 0.0),
      new Vector(1.0 * size, -1.0 * size, 0.0),
      new Vector(1.0 * size, 1.0 * size, 0.0),
      new Vector(-1.0 * size, 1.0 * size, 0.0)
    ];

    List<VM.Vector2> uvs = [
      new VM.Vector2(0.0, 0.0),
      new VM.Vector2(1.0, 0.0),
      new VM.Vector2(1.0, 1.0),
      new VM.Vector2(0.0, 1.0)
    ];

    md.AddFace4(0, 1, 2, 3);
    md.AddVertices(vertices);
    md.AddAttributesVector2(aTextureCoordinates, uvs);
    return md;
  }
}
