part of shape;

/// Produces single square: -1 <= x,y  <= 1, z == 0
///
/// This is mostly useful for processing the whole screen
/// in the fragment shader
GeometryBuilder QuadGeometry(num size) {
  List<VM.Vector3> vertices = [
    VM.Vector3(-1.0 * size, -1.0 * size, 0.0),
    VM.Vector3(1.0 * size, -1.0 * size, 0.0),
    VM.Vector3(1.0 * size, 1.0 * size, 0.0),
    VM.Vector3(-1.0 * size, 1.0 * size, 0.0)
  ];

  List<VM.Vector2> uvs = [
    VM.Vector2(0.0, 0.0),
    VM.Vector2(1.0, 0.0),
    VM.Vector2(1.0, 1.0),
    VM.Vector2(0.0, 1.0)
  ];

  VM.Vector3 n = VM.Vector3(0.0, 0.0, 1.0);
  List<VM.Vector3> normals = [n, n, n, n];

  GeometryBuilder gb = GeometryBuilder();
  gb.EnableAttribute(aTexUV);
  gb.AddVerticesFace4(vertices);
  gb.AddAttributesVector2(aTexUV, uvs);
  gb.EnableAttribute(aNormal);
  gb.AddAttributesVector3(aNormal, normals);
  return gb;
}

/// Checkerboard with xstrips X ystrips fields of dim xlen X ylen centered
/// around the origin
GeometryBuilder GridGeometry(
    int xstrips, int ystrips, double xlen, double ylen) {
  final double xoffset = xlen * 0.5;
  final double yoffset = ylen * 0.5;
  final double xdelta = xlen / xstrips;
  final double ydelta = xlen / ystrips;

  VM.Vector3 normal = VM.Vector3(0.0, 0.0, 1.0);
  List<VM.Vector3> vertices = List<VM.Vector3>((xstrips + 1) * (ystrips + 1));
  List<VM.Vector3> normals = List<VM.Vector3>((xstrips + 1) * (ystrips + 1));
  List<VM.Vector2> uvs = List<VM.Vector2>((xstrips + 1) * (ystrips + 1));

  int index(int x, int y) {
    return x * (xstrips + 1) + y;
  }

  for (int x = 0; x <= xstrips; ++x) {
    for (int y = 0; y <= ystrips; ++y) {
      final int ii = index(x, y);
      vertices[ii] =
          VM.Vector3(x * xdelta - xoffset, y * ydelta - yoffset, 0.0);
      normals[ii] = normal;
      uvs[ii] = VM.Vector2(x / xstrips, y / ystrips);
    }
  }
  GeometryBuilder gb = GeometryBuilder();
  gb.AddVertices(vertices);
  for (int x = 0; x < xstrips; ++x) {
    for (int y = 0; y < ystrips; ++y) {
      gb.AddFace4(
          index(x, y), index(x + 1, y), index(x + 1, y + 1), index(x, y + 1));
    }
  }
  gb.EnableAttribute(aTexUV);
  gb.AddAttributesVector2(aTexUV, uvs);
  gb.EnableAttribute(aNormal);
  gb.AddAttributesVector3(aNormal, normals);
  return gb;
}
