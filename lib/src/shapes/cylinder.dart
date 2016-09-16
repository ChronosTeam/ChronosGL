part of chronosgl;

// single color cylinder
// uv mapping is weird to help with debugging

MeshData ShapeCylinder(WEBGL.RenderingContext gl, double radTop,
    double radBot, double height, int radialSubdivisions) {
  MeshData md = new MeshData("cylinder", gl);
  md.EnableAttribute(aTextureCoordinates);
  double halfHeight = height / 2;

  List<VM.Vector3> vertices = [];
  List<VM.Vector2> uvs = [];

  // top center
  vertices.add(new VM.Vector3(0.0, halfHeight, 0.0));
  uvs.add(new VM.Vector2(0.0, 0.0));
  // bottom center
  vertices.add(new VM.Vector3(0.0, -halfHeight, 0.0));
  uvs.add(new VM.Vector2(1.0, 1.0));

  for (int i = 0; i < radialSubdivisions; i++) {
    double u = i / radialSubdivisions;

    double x = Math.sin(u * Math.PI * 2);
    double z = Math.cos(u * Math.PI * 2);

    vertices.add(new VM.Vector3(x * radTop, halfHeight, z * radTop));
    uvs.add(new VM.Vector2(u, 1.0));
    vertices.add(new VM.Vector3(x * radBot, -halfHeight, z * radBot));
    uvs.add(new VM.Vector2(u, 0.0));
  }
  assert(vertices.length == 2 + 2 * radialSubdivisions);

  // triangles for top and bottom
  for (int i = 0; i < radialSubdivisions; i++) {
    final int t = (i * 2) + 2; // top node
    final int b = t + 1; // bot node
    int j = i + 1;
    if (j == radialSubdivisions) j = 0;
    final int tnext = (j * 2) + 2;
    final int bnext = tnext + 1;
    // triangle in top circle
    md.AddFace3(0, t, tnext);
    // triangle in bottom circle
    md.AddFace3(1, b, bnext);
    // triangle from two verts top to one vert bottom
    md.AddFace3(tnext, t, b);
    // triangle from two verts bottom to one vert top
    md.AddFace3(b, bnext, tnext);
  }

  md.AddVertices(vertices);
  md.AddAttributesVector2(aTextureCoordinates, uvs);
  return md;
}

MeshData ShapeCylinderWireframeFriendly(WEBGL.RenderingContext gl,
    double radTop, double radBot, double height, int radialSubdivisions) {
  // Compute points on edges
  final double halfHeight = height / 2;
  List<VM.Vector3> top = [];
  List<VM.Vector3> bot = [];
  for (int i = 0; i < radialSubdivisions; i++) {
    double u = i / radialSubdivisions * Math.PI * 2.0;
    double x = Math.sin(u);
    double z = Math.cos(u);
    top.add(new VM.Vector3(radTop * x, halfHeight, radTop * z));
    bot.add(new VM.Vector3(radBot * x, -halfHeight, radBot * z));
  }
  // repeat thre first point so we can safely index with +1
  top.add(top[0]);
  bot.add(bot[0]);
  assert(top.length == radialSubdivisions + 1);
  assert(bot.length == radialSubdivisions + 1);

  final VM.Vector2 zero = new VM.Vector2(0.0, 0.0);
  final VM.Vector3 centerTop = new VM.Vector3(0.0, halfHeight, 0.0);
  final VM.Vector3 centerBot = new VM.Vector3(0.0, -halfHeight, 0.0);

  MeshData md = new MeshData("cylinder-wireframe-friendly", gl);
  md.EnableAttribute(aTextureCoordinates);

  // top and bottom are Face3
  md.AddFaces3(2 * radialSubdivisions);
  for (int i = 0; i < radialSubdivisions; i++) {
    md.AddVertices([centerTop, top[i], top[i + 1]]);
    // TODO: fix these
    md.AddAttributesVector2(aTextureCoordinates, [zero, zero, zero]);
    md.AddVertices([centerBot, bot[i + 1], bot[i]]);
    // TODO: fix these
    md.AddAttributesVector2(aTextureCoordinates, [zero, zero, zero]);
  }

  md.AddFaces4(radialSubdivisions);
  for (int i = 0; i < radialSubdivisions; i++) {
    md.AddVertices([top[i + 1], top[i], bot[i], bot[i + 1]]);
    // TODO: fix these
    md.AddAttributesVector2(aTextureCoordinates, [zero, zero, zero, zero]);
  }
  return md;
}
