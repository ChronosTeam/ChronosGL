part of shape;

GeometryBuilder QuadGeometry(num size) {
  List<VM.Vector3> vertices = [
    new VM.Vector3(-1.0 * size, -1.0 * size, 0.0),
    new VM.Vector3(1.0 * size, -1.0 * size, 0.0),
    new VM.Vector3(1.0 * size, 1.0 * size, 0.0),
    new VM.Vector3(-1.0 * size, 1.0 * size, 0.0)
  ];

  List<VM.Vector2> uvs = [
    new VM.Vector2(0.0, 0.0),
    new VM.Vector2(1.0, 0.0),
    new VM.Vector2(1.0, 1.0),
    new VM.Vector2(0.0, 1.0)
  ];

  VM.Vector3 n = new VM.Vector3(0.0, 0.0, 1.0);
  List<VM.Vector3> normals = [n, n, n, n];

  GeometryBuilder gb = new GeometryBuilder();
  gb.EnableAttribute(aTextureCoordinates);
  gb.AddVerticesFace4(vertices);
  gb.AddAttributesVector2(aTextureCoordinates, uvs);
  gb.EnableAttribute(aNormal);
  gb.AddAttributesVector3(aNormal, normals);
  return gb;
}

GeometryBuilder GridGeometry(int xstrips, ystrips, double xlen, double ylen) {
  final double xoffset = xlen * 0.5;
  final double yoffset = ylen * 0.5;
  final double xdelta = xlen / xstrips;
  final double ydelta = xlen / ystrips;

  VM.Vector3 normal = new VM.Vector3(0.0, 0.0, 1.0);
  List<VM.Vector3> vertices =
      new List<VM.Vector3>((xstrips + 1) * (ystrips + 1));
  List<VM.Vector3> normals =
      new List<VM.Vector3>((xstrips + 1) * (ystrips + 1));

  int index(int x, int y) {
    return x * (xstrips + 1) + y;
  }

  for (int x = 0; x <= xstrips; ++x) {
    for (int y = 0; y <= ystrips; ++y) {
      vertices[index(x, y)] =
          new VM.Vector3(x * xdelta - xoffset, y * ydelta - yoffset, 0.0);
      normals[index(x, y)] = normal;
    }
  }
  GeometryBuilder gb = new GeometryBuilder();
  gb.AddVertices(vertices);
  for (int x = 0; x < xstrips; ++x) {
    for (int y = 0; y < ystrips; ++y) {
      gb.AddFace4(
          index(x, y), index(x+1, y), index(x + 1, y + 1), index(x, y+1));
    }
  }
  // TODO: add uv support
  //gb.EnableAttribute(aTextureCoordinates);
  //gb.AddAttributesVector2(aTextureCoordinates, uvs);
  gb.EnableAttribute(aNormal);
  gb.AddAttributesVector3(aNormal, normals);
  return gb;
}
