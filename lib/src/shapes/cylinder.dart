part of chronosgl;

// single color cylinder
// uv mapping is weird to help with debugging

MeshData createCylinderInternal(
    double radiusTop, double radiusBot, double height, int radialSubdivisions) {
  MeshData md = new MeshData();
  md.name = "cylinder";
  md.EnableAttribute(aTextureCoordinates);
  double halfHeight = height / 2;

  List<Vector> vertices = [];
  List<Vector2> uvs = [];

  // top center
  vertices.add(new Vector(0.0, halfHeight, 0.0));
  uvs.add(new Vector2(0.0, 0.0));
  // bottom center
  vertices.add(new Vector(0.0, -halfHeight, 0.0));
  uvs.add(new Vector2(1.0, 1.0));

  for (int i = 0; i < radialSubdivisions; i++) {
    double u = i / radialSubdivisions;

    double xposTop = radiusTop * Math.sin(u * Math.PI * 2);
    double zposTop = radiusTop * Math.cos(u * Math.PI * 2);
    double xposBot = radiusBot * Math.sin(u * Math.PI * 2);
    double zposBot = radiusBot * Math.cos(u * Math.PI * 2);

    vertices.add(new Vector(xposTop, halfHeight, zposTop));
    uvs.add(new Vector2(u, u));
    vertices.add(new Vector(xposBot, -halfHeight, zposBot));
    uvs.add(new Vector2(1.0, u));

    if (i > 0) {
      int p = (i * 2) + 2; // add offset for "top center" and "bottom center"
      // triangle in top circle
      md.AddFace3(0, p - 2, p);
      // triangle in bottom circle
      md.AddFace3(1, p - 1, p + 1);
      // triangle from two verts top to one vert bottom
      md.AddFace3(p - 2, p, p + 1);
      // triangle from two verts bottom to one vert top
      md.AddFace3(p - 1, p + 1, p - 2);
    }
  }

  // close the last gap
  if (true) {
    var i = radialSubdivisions;
    var p = (i * 2) + 2;
    // triangle in top circle
    md.AddFace3(0, p - 2, 2);
    // triangle in bottom circle
    md.AddFace3(1, p - 1, 3);
    // triangle from two verts top to one vert bottom
    md.AddFace3(p - 2, 2, 3);
    // triangle from two verts bottom to one vert top
    md.AddFace3(p - 1, 3, p - 2);
  }

  md.AddVertices(vertices);
  md.AddAttributesVector2(aTextureCoordinates, uvs);
  return md;
}

MeshData createCylinderInternalWireframeFriendly(
    double radTop, double radBot, double height, int radialSubdivisions) {
  final double halfHeight = height / 2;
  List<Vector> top = [];
  List<Vector> bot = [];
  for (int i = 0; i < radialSubdivisions; i++) {
    double u = i / radialSubdivisions;
    top.add(new Vector(radTop * Math.sin(u * Math.PI * 2), halfHeight,
        radTop * Math.cos(u * Math.PI * 2)));
    bot.add(new Vector(radBot * Math.sin(u * Math.PI * 2), -halfHeight,
        radBot * Math.cos(u * Math.PI * 2)));
  }
  top.add(top[0]);
  bot.add(bot[0]);

  Vector2 zero = new Vector2(0, 0);
  MeshData md = new MeshData();
  md.name = "cylinder-wireframe-friendly";
  md.EnableAttribute(aTextureCoordinates);
  final Vector centerTop = new Vector(0.0, halfHeight, 0.0);
  final Vector centerBot = new Vector(0.0, -halfHeight, 0.0);
  md.AddFaces3(2 * radialSubdivisions);
  for (int i = 0; i < radialSubdivisions; i++) {
    double u = i / radialSubdivisions;
    md.AddVertices([centerTop, top[i], top[i + 1]]);
    // TODO: fix these
    md.AddAttributesVector2(aTextureCoordinates, [zero, zero, zero]);
    md.AddVertices([centerBot, bot[i + 1], bot[i]]);
    // TODO: fix these
    md.AddAttributesVector2(aTextureCoordinates, [zero, zero, zero]);
  }

  md.AddFaces4(radialSubdivisions);
  for (int i = 0; i < radialSubdivisions; i++) {
    double u = i / radialSubdivisions;
    md.AddVertices([top[i+1], top[i], bot[i], bot[i+1]]);
    // TODO: fix these
    md.AddAttributesVector2(aTextureCoordinates, [zero, zero, zero, zero]);
  }
  return md;
}
