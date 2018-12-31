part of shape;

// single color cylinder
// uv mapping is weird to help with debugging

GeometryBuilder CylinderGeometry(double radTop, double radBot, double height,
    int radialSubdivisions, bool computeNormals) {
  assert (radialSubdivisions >2, "must have at least 3 divisions");
  double halfHeight = height / 2;

  List<VM.Vector3> vertices = [];
  List<VM.Vector2> uvs = [];
  List<VM.Vector3> normal = [];
  // top center
  vertices.add(VM.Vector3(0.0, halfHeight, 0.0));
  uvs.add(VM.Vector2(0.0, 0.0));
  if (computeNormals) normal.add(VM.Vector3(0.0, 1.0, 0.0));
  // bottom center
  vertices.add(VM.Vector3(0.0, -halfHeight, 0.0));
  uvs.add(VM.Vector2(1.0, 1.0));
  if (computeNormals) normal.add(VM.Vector3(0.0, -1.0, 0.0));

  // First round for disks
  for (int i = 0; i < radialSubdivisions; i++) {
    double u = i / radialSubdivisions;

    double x = Math.sin(u * Math.pi * 2);
    double z = Math.cos(u * Math.pi * 2);

    vertices.add(VM.Vector3(x * radTop, halfHeight, z * radTop));
    uvs.add(VM.Vector2(u, 1.0));
    if (computeNormals) normal.add(VM.Vector3(0.0, 1.0, 0.0));
    vertices.add(VM.Vector3(x * radBot, -halfHeight, z * radBot));
    uvs.add(VM.Vector2(u, 0.0));
    if (computeNormals) normal.add(VM.Vector3(0.0, -1.0, 0.0));
  }

  if (computeNormals) {
    assert(vertices.length == 2 + 2 * radialSubdivisions);
    assert(uvs.length == 2 + 2 * radialSubdivisions);
    // Second set of vertices for walls with different normals
    for (int i = 0; i < 2 * radialSubdivisions; i += 2) {
      vertices.add(vertices[i + 2]);
      vertices.add(vertices[i + 3]);
      uvs.add(uvs[i + 2]);
      uvs.add(uvs[i + 3]);
      // Now compute normals
      VM.Vector3 a = vertices[i + 2];
      VM.Vector3 b = vertices[i + 3];
      // note: we added vertices so we will not access out  of bounds
      VM.Vector3 c = vertices[i + 4];
      VM.Vector3 temp = VM.Vector3.zero();
      VM.Vector3 norm = VM.Vector3.zero();
      NormalFromPoints(a, b, c, temp, norm);
      normal.add(norm);
      normal.add(norm);
    }
    assert(vertices.length == 2 + 4 * radialSubdivisions);
  } else {
    assert(vertices.length == 2 + 2 * radialSubdivisions);
  }
  GeometryBuilder gb = GeometryBuilder();
  gb.EnableAttribute(aTexUV);
  gb.AddVertices(vertices);
  gb.AddAttributesVector2(aTexUV, uvs);
  if (computeNormals) {
    gb.EnableAttribute(aNormal);
    gb.AddAttributesVector3(aNormal, normal);
  }
  // triangles for top and bottom
  for (int i = 0; i < radialSubdivisions; i++) {
    final int t = (i * 2) + 2; // top node
    final int b = t + 1; // bot node
    int j = i + 1;
    if (j == radialSubdivisions) j = 0;
    final int tnext = (j * 2) + 2;
    final int bnext = tnext + 1;
    // triangle in top circle
    gb.AddFace3(0, t, tnext);
    // triangle in bottom circle
    gb.AddFace3(1, bnext, b);

    // Wall
    int o = computeNormals ? radialSubdivisions * 2 : 0;
    gb.AddFace4(o + tnext, o + t, o + b, o + bnext);
  }
  return gb;
}

/// Like CylinderGeometry but with duplicate Vertices to make it possible
///  to add aCenter attributes with GenerateWireframeCenters()
GeometryBuilder CylinderGeometryWireframeFriendly(
    double radTop, double radBot, double height, int radialSubdivisions) {
  // Compute points on edges
  final double halfHeight = height / 2;
  List<VM.Vector3> top = [];
  List<VM.Vector3> bot = [];
  for (int i = 0; i < radialSubdivisions; i++) {
    double u = i / radialSubdivisions * Math.pi * 2.0;
    double x = Math.sin(u);
    double z = Math.cos(u);
    top.add(VM.Vector3(radTop * x, halfHeight, radTop * z));
    bot.add(VM.Vector3(radBot * x, -halfHeight, radBot * z));
  }
  // repeat three first point so we can safely index with +1
  top.add(top[0]);
  bot.add(bot[0]);
  assert(top.length == radialSubdivisions + 1);
  assert(bot.length == radialSubdivisions + 1);

  final VM.Vector2 zero = VM.Vector2(0.0, 0.0);
  final VM.Vector3 centerTop = VM.Vector3(0.0, halfHeight, 0.0);
  final VM.Vector3 centerBot = VM.Vector3(0.0, -halfHeight, 0.0);

  GeometryBuilder gb = GeometryBuilder();
  gb.EnableAttribute(aTexUV);

  // Q: Why do we have to repeat the vertices?
  // A: Without it example wireframe does not work
  // top and bottom are Face3
  gb.AddFaces3(2 * radialSubdivisions);
  for (int i = 0; i < radialSubdivisions; i++) {
    gb.AddVertices([centerTop, top[i], top[i + 1]]);
    gb.AddVertices([centerBot, bot[i + 1], bot[i]]);
    // TODO: fix these:
    gb.AddAttributesVector2(aTexUV, [zero, zero, zero]);
    gb.AddAttributesVector2(aTexUV, [zero, zero, zero]);
  }

  gb.AddFaces4(radialSubdivisions);
  for (int i = 0; i < radialSubdivisions; i++) {
    gb.AddVertices([top[i + 1], top[i], bot[i], bot[i + 1]]);
    // TODO: fix these:
    gb.AddAttributesVector2(aTexUV, [zero, zero, zero, zero]);
  }
  return gb;
}

/// Like ConeGeometry but with duplicate Vertices to make it possible
///  to add aCenter attributes with GenerateWireframeCenters()
GeometryBuilder ConeGeometryWireframeFrienly(
    double rad, double height, int radialSubdivisions) {
  // Compute points on edges
  final double halfHeight = height / 2;
  VM.Vector3 top = VM.Vector3(0.0, halfHeight, 0.0);

  List<VM.Vector3> bot = [];
  for (int i = 0; i < radialSubdivisions; i++) {
    double u = i / radialSubdivisions * Math.pi * 2.0;
    double x = Math.sin(u);
    double z = Math.cos(u);
    bot.add(VM.Vector3(rad * x, -halfHeight, rad * z));
  }
  // repeat three first point so we can safely index with +1
  bot.add(bot[0]);
  assert(bot.length == radialSubdivisions + 1);

  final VM.Vector2 zero = VM.Vector2(0.0, 0.0);
  final VM.Vector3 centerBot = VM.Vector3(0.0, -halfHeight, 0.0);

  GeometryBuilder gb = GeometryBuilder();
  gb.EnableAttribute(aTexUV);

  // Q: Why do we have to repeat the vertices?
  // A: Without it example wireframe does not work
  // top and bottom are Face3
  gb.AddFaces3(radialSubdivisions);
  for (int i = 0; i < radialSubdivisions; i++) {
    gb.AddVertices([centerBot, bot[i + 1], bot[i]]);
    // TODO: fix these:
    gb.AddAttributesVector2(aTexUV, [zero, zero, zero]);
  }

  gb.AddFaces3(radialSubdivisions);
  for (int i = 0; i < radialSubdivisions; i++) {
    gb.AddVertices([top, bot[i], bot[i + 1]]);
    // TODO: fix these:
    gb.AddAttributesVector2(aTexUV, [zero, zero, zero]);
  }
  return gb;
}
