part of shape;

List<VM.Vector3> _CubeNormals = [
  // Front face
  new VM.Vector3(0.0, 0.0, 1.0),
  // Back face
  new VM.Vector3(0.0, 0.0, -1.0),
  // Top face
  new VM.Vector3(0.0, 1.0, 0.0),
  // Bottom face
  new VM.Vector3(0.0, -1.0, 0.0),
// Right face
  new VM.Vector3(1.0, 0.0, 0.0),
  // Left face
  new VM.Vector3(-1.0, 0.0, 0.0)
];

GeometryBuilder CubeGeometry(
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0,
    bool computeNormals: true}) {
  List<VM.Vector3> vertices = [
    // Front face
    new VM.Vector3(-x, -y, z),
    new VM.Vector3(x, -y, z),
    new VM.Vector3(x, y, z),
    new VM.Vector3(-x, y, z),

    // Back face
    new VM.Vector3(-x, -y, -z),
    new VM.Vector3(-x, y, -z),
    new VM.Vector3(x, y, -z),
    new VM.Vector3(x, -y, -z),

    // Top face
    new VM.Vector3(-x, y, -z),
    new VM.Vector3(-x, y, z),
    new VM.Vector3(x, y, z),
    new VM.Vector3(x, y, -z),

    // Bottom face
    new VM.Vector3(x, -y, z),
    new VM.Vector3(-x, -y, z),
    new VM.Vector3(-x, -y, -z),
    new VM.Vector3(x, -y, -z),

    // Right face
    new VM.Vector3(x, -y, -z),
    new VM.Vector3(x, y, -z),
    new VM.Vector3(x, y, z),
    new VM.Vector3(x, -y, z),

    // Left face
    new VM.Vector3(-x, -y, -z),
    new VM.Vector3(-x, -y, z),
    new VM.Vector3(-x, y, z),
    new VM.Vector3(-x, y, -z)
  ];

  List<VM.Vector2> uvs = [
    // Front face
    new VM.Vector2(uMin, vMin),
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),
    new VM.Vector2(uMin, vMax),

    // Back face
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),
    new VM.Vector2(uMin, vMax),
    new VM.Vector2(uMin, vMin),

    // Top face
    new VM.Vector2(uMin, vMax),
    new VM.Vector2(uMin, vMin),
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),

    // Bottom face
    new VM.Vector2(uMax, vMax),
    new VM.Vector2(uMin, vMax),
    new VM.Vector2(uMin, vMin),
    new VM.Vector2(uMax, vMin),

    // Right face
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),
    new VM.Vector2(uMin, vMax),
    new VM.Vector2(uMin, vMin),

    // Left face
    new VM.Vector2(uMin, vMin),
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),
    new VM.Vector2(uMin, vMax)
  ];

  GeometryBuilder gb = new GeometryBuilder();
  gb.EnableAttribute(aTextureCoordinates);
  if (computeNormals) gb.EnableAttribute(aNormal);
  gb.AddFaces4(6);
  gb.AddVertices(vertices);
  gb.AddAttributesVector2(aTextureCoordinates, uvs);
  if (computeNormals) {
    for (int i = 0; i < _CubeNormals.length; i++) {
      VM.Vector3 n = _CubeNormals[i];
      gb.AddAttributesVector3(aNormal, [n, n, n, n]);
    }
  }
  return gb;
}

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

// A Wedge is the lower partof a cube that was cut in half
// through the plane: (-x, y, -z) (-x, y, z), (x, -y, -z), (x, -y, z)
GeometryBuilder WedgeGeometry(
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0,
    bool computeNormals: true}) {
  List<VM.Vector3> vertices3 = [
    // Front face3
    new VM.Vector3(-x, -y, z),
    new VM.Vector3(x, -y, z),
    new VM.Vector3(-x, y, z),

    // Back face3
    new VM.Vector3(-x, -y, -z),
    new VM.Vector3(-x, y, -z),
    new VM.Vector3(x, -y, -z),
  ];

  List<VM.Vector3> vertices4 = [
    // Front face4
    // Top/Right diagonal face
    new VM.Vector3(-x, y, -z),
    new VM.Vector3(-x, y, z),
    new VM.Vector3(x, -y, z),
    new VM.Vector3(x, -y, -z),

    // Bottom face
    new VM.Vector3(x, -y, z),
    new VM.Vector3(-x, -y, z),
    new VM.Vector3(-x, -y, -z),
    new VM.Vector3(x, -y, -z),

    // Left face
    new VM.Vector3(-x, -y, -z),
    new VM.Vector3(-x, -y, z),
    new VM.Vector3(-x, y, z),
    new VM.Vector3(-x, y, -z)
  ];

  List<VM.Vector2> uvs3 = [
    // Front face
    new VM.Vector2(uMin, vMin),
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),

    // Back face
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),
    new VM.Vector2(uMin, vMax),
  ];

  List<VM.Vector2> uvs4 = [
    // Top/Right diagonal face
    new VM.Vector2(uMin, vMax),
    new VM.Vector2(uMin, vMin),
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),

    // Bottom face
    new VM.Vector2(uMax, vMax),
    new VM.Vector2(uMin, vMax),
    new VM.Vector2(uMin, vMin),
    new VM.Vector2(uMax, vMin),

    // Left face
    new VM.Vector2(uMin, vMin),
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),
    new VM.Vector2(uMin, vMax)
  ];

  GeometryBuilder gb = new GeometryBuilder();
  gb.EnableAttribute(aTextureCoordinates);
  gb.EnableAttribute(aNormal);

  gb.AddFaces3(2);
  gb.AddVertices(vertices3);
  gb.AddAttributesVector2(aTextureCoordinates, uvs3);

  gb.AddFaces4(3);
  gb.AddVertices(vertices4);
  gb.AddAttributesVector2(aTextureCoordinates, uvs4);

  if (computeNormals) gb.GenerateNormalsAssumingTriangleMode();
  return gb;
}
