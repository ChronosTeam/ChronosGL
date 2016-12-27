part of shapes;

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

MeshData ShapeCube(WEBGL.RenderingContext gl,
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0}) {
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

  MeshData md = new MeshData("cube", gl);
  md.EnableAttribute(aNormal);
  md.EnableAttribute(aTextureCoordinates);

  md.AddFaces4(6);

  md.AddVertices(vertices);
  md.AddAttributesVector2(aTextureCoordinates, uvs);
  for (int i = 0; i < _CubeNormals.length; i++) {
    VM.Vector3 n = _CubeNormals[i];
    md.AddAttributesVector3(aNormal, [n, n, n, n]);
  }

  return md;
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
MeshData ShapeWedge(WEBGL.RenderingContext gl,
    {double x: 1.0,
    double y: 1.0,
    double z: 1.0,
    double uMin: 0.0,
    double uMax: 1.0,
    double vMin: 0.0,
    double vMax: 1.0}) {
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
    // Front face3
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

  List<VM.Vector2> uvs = [
    // Front face
    new VM.Vector2(uMin, vMin),
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),

    // Back face
    new VM.Vector2(uMax, vMin),
    new VM.Vector2(uMax, vMax),
    new VM.Vector2(uMin, vMax),

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

  MeshData md = new MeshData("wedge", gl);
  md.EnableAttribute(aNormal);
  md.EnableAttribute(aTextureCoordinates);

  md.AddFaces3(2);
  md.AddVertices(vertices3);
  md.AddFaces4(3);
  md.AddVertices(vertices4);
  md.AddAttributesVector2(aTextureCoordinates, uvs);
  for (int i = 0; i < _WedgeNormals.length; i++) {
    VM.Vector3 n = _WedgeNormals[i];
    md.AddAttributesVector3(aNormal, [n, n, n, n]);
  }

  return md;
}
