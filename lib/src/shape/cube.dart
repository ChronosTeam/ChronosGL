part of shape;

final List<VM.Vector3> _CubeNormals = [
  // Front face
  VM.Vector3(0.0, 0.0, 1.0),
  // Back face
  VM.Vector3(0.0, 0.0, -1.0),
  // Top face
  VM.Vector3(0.0, 1.0, 0.0),
  // Bottom face
  VM.Vector3(0.0, -1.0, 0.0),
// Right face
  VM.Vector3(1.0, 0.0, 0.0),
  // Left face
  VM.Vector3(-1.0, 0.0, 0.0)
];

/// Returns a GeometryBuilder for Cube with TexUVs and optionally
/// Normals.
GeometryBuilder CubeGeometry(
    {double x = 1.0,
    double y = 1.0,
    double z = 1.0,
    double uMin = 0.0,
    double uMax = 1.0,
    double vMin = 0.0,
    double vMax = 1.0,
    bool computeNormals = true}) {
  List<VM.Vector3> vertices = [
    // Front face
    VM.Vector3(-x, -y, z),
    VM.Vector3(x, -y, z),
    VM.Vector3(x, y, z),
    VM.Vector3(-x, y, z),

    // Back face
    VM.Vector3(-x, -y, -z),
    VM.Vector3(-x, y, -z),
    VM.Vector3(x, y, -z),
    VM.Vector3(x, -y, -z),

    // Top face
    VM.Vector3(-x, y, -z),
    VM.Vector3(-x, y, z),
    VM.Vector3(x, y, z),
    VM.Vector3(x, y, -z),

    // Bottom face
    VM.Vector3(x, -y, z),
    VM.Vector3(-x, -y, z),
    VM.Vector3(-x, -y, -z),
    VM.Vector3(x, -y, -z),

    // Right face
    VM.Vector3(x, -y, -z),
    VM.Vector3(x, y, -z),
    VM.Vector3(x, y, z),
    VM.Vector3(x, -y, z),

    // Left face
    VM.Vector3(-x, -y, -z),
    VM.Vector3(-x, -y, z),
    VM.Vector3(-x, y, z),
    VM.Vector3(-x, y, -z)
  ];

  List<VM.Vector2> uvs = [
    // Front face
    VM.Vector2(uMin, vMin),
    VM.Vector2(uMax, vMin),
    VM.Vector2(uMax, vMax),
    VM.Vector2(uMin, vMax),

    // Back face
    VM.Vector2(uMax, vMin),
    VM.Vector2(uMax, vMax),
    VM.Vector2(uMin, vMax),
    VM.Vector2(uMin, vMin),

    // Top face
    VM.Vector2(uMin, vMax),
    VM.Vector2(uMin, vMin),
    VM.Vector2(uMax, vMin),
    VM.Vector2(uMax, vMax),

    // Bottom face
    VM.Vector2(uMax, vMax),
    VM.Vector2(uMin, vMax),
    VM.Vector2(uMin, vMin),
    VM.Vector2(uMax, vMin),

    // Right face
    VM.Vector2(uMax, vMin),
    VM.Vector2(uMax, vMax),
    VM.Vector2(uMin, vMax),
    VM.Vector2(uMin, vMin),

    // Left face
    VM.Vector2(uMin, vMin),
    VM.Vector2(uMax, vMin),
    VM.Vector2(uMax, vMax),
    VM.Vector2(uMin, vMax)
  ];

  GeometryBuilder gb = GeometryBuilder();
  gb.EnableAttribute(aTexUV);
  if (computeNormals) gb.EnableAttribute(aNormal);
  gb.AddFaces4(6);
  gb.AddVertices(vertices);
  gb.AddAttributesVector2(aTexUV, uvs);
  if (computeNormals) {
    for (int i = 0; i < _CubeNormals.length; i++) {
      VM.Vector3 n = _CubeNormals[i];
      gb.AddAttributesVector3(aNormal, [n, n, n, n]);
    }
  }
  return gb;
}

/*
final List<VM.Vector3> _WedgeNormals = [
  // Front face
  new VM.Vector3(0.0, 0.0, 1.0),
  // Back face
  new VM.Vector3(0.0, 0.0, -1.0),
  // Top/Right face
  new VM.Vector3(1.0, 1.0, 0.0)..normalize(),
  // Bottom face
  new VM.Vector3(0.0, -1.0, 0.0),
  // Left face
  new VM.Vector3(-1.0, 0.0, 0.0)
];
*/

/// A Wedge is the lower part of a cube that was cut in half
/// through the plane: (-x, y, -z) (-x, y, z), (x, -y, -z), (x, -y, z)
GeometryBuilder WedgeGeometry(
    {double x = 1.0,
    double y = 1.0,
    double z = 1.0,
    double uMin = 0.0,
    double uMax = 1.0,
    double vMin = 0.0,
    double vMax = 1.0,
    bool computeNormals = true}) {
  List<VM.Vector3> vertices3 = [
    // Front face3
    VM.Vector3(-x, -y, z),
    VM.Vector3(x, -y, z),
    VM.Vector3(-x, y, z),

    // Back face3
    VM.Vector3(-x, -y, -z),
    VM.Vector3(-x, y, -z),
    VM.Vector3(x, -y, -z),
  ];

  List<VM.Vector3> vertices4 = [
    // Front face4
    // Top/Right diagonal face
    VM.Vector3(-x, y, -z),
    VM.Vector3(-x, y, z),
    VM.Vector3(x, -y, z),
    VM.Vector3(x, -y, -z),

    // Bottom face
    VM.Vector3(x, -y, z),
    VM.Vector3(-x, -y, z),
    VM.Vector3(-x, -y, -z),
    VM.Vector3(x, -y, -z),

    // Left face
    VM.Vector3(-x, -y, -z),
    VM.Vector3(-x, -y, z),
    VM.Vector3(-x, y, z),
    VM.Vector3(-x, y, -z)
  ];

  List<VM.Vector2> uvs3 = [
    // Front face
    VM.Vector2(uMin, vMin),
    VM.Vector2(uMax, vMin),
    VM.Vector2(uMax, vMax),

    // Back face
    VM.Vector2(uMax, vMin),
    VM.Vector2(uMax, vMax),
    VM.Vector2(uMin, vMax),
  ];

  List<VM.Vector2> uvs4 = [
    // Top/Right diagonal face
    VM.Vector2(uMin, vMax),
    VM.Vector2(uMin, vMin),
    VM.Vector2(uMax, vMin),
    VM.Vector2(uMax, vMax),

    // Bottom face
    VM.Vector2(uMax, vMax),
    VM.Vector2(uMin, vMax),
    VM.Vector2(uMin, vMin),
    VM.Vector2(uMax, vMin),

    // Left face
    VM.Vector2(uMin, vMin),
    VM.Vector2(uMax, vMin),
    VM.Vector2(uMax, vMax),
    VM.Vector2(uMin, vMax)
  ];

  GeometryBuilder gb = GeometryBuilder();
  gb.EnableAttribute(aTexUV);
  gb.EnableAttribute(aNormal);

  gb.AddFaces3(2);
  gb.AddVertices(vertices3);
  gb.AddAttributesVector2(aTexUV, uvs3);

  gb.AddFaces4(3);
  gb.AddVertices(vertices4);
  gb.AddAttributesVector2(aTexUV, uvs4);

  if (computeNormals) gb.GenerateNormalsAssumingTriangleMode();
  return gb;
}
