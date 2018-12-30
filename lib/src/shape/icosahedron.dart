part of shape;

double getU2(double z, double x) {
  return 0.5 * (1.0 + Math.atan2(z, x) * (1 / Math.pi));
}

double getV2(double y) {
  return Math.acos(y) * (1 / Math.pi);
}

/*
double getU1(double z, double x) {
  return 1 - (((Math.atan2(z, x) + Math.PI) % Math.PI) / Math.PI * 0.5);
}

double getV1(double y) {
  return 0.5 - y / 2;
}
*/

final List<Face3> IcosahedronFaceList = [
  // 5 faces around point 0
  Face3(0, 11, 5),
  Face3(0, 5, 1),
  Face3(0, 1, 7),
  Face3(0, 7, 10),
  Face3(0, 10, 11),

  // 5 adjacent faces
  Face3(1, 5, 9),
  Face3(5, 11, 4),
  Face3(11, 10, 2),
  Face3(10, 7, 6),
  Face3(7, 1, 8),

  // 5 faces around point 3
  Face3(3, 9, 4),
  Face3(3, 4, 2),
  Face3(3, 2, 6),
  Face3(3, 6, 8),
  Face3(3, 8, 9),

  // 5 adjacent faces
  Face3(4, 9, 5),
  Face3(2, 4, 11),
  Face3(6, 2, 10),
  Face3(8, 6, 7),
  Face3(9, 8, 1),
];

final double t = (1 + Math.sqrt(5)) / 2;

final List<VM.Vector3> IcosahedronVertexList = [
  VM.Vector3(-1.0, t, 0.0)..normalize(),
  VM.Vector3(1.0, t, 0.0)..normalize(),
  VM.Vector3(-1.0, -t, 0.0)..normalize(),
  VM.Vector3(1.0, -t, 0.0)..normalize(),
  //
  VM.Vector3(0.0, -1.0, t)..normalize(),
  VM.Vector3(0.0, 1.0, t)..normalize(),
  VM.Vector3(0.0, -1.0, -t)..normalize(),
  VM.Vector3(0.0, 1.0, -t)..normalize(),
  //
  VM.Vector3(t, 0.0, -1.0)..normalize(),
  VM.Vector3(t, 0.0, 1.0)..normalize(),
  VM.Vector3(-t, 0.0, -1.0)..normalize(),
  VM.Vector3(-t, 0.0, 1.0)..normalize()
];

// This produces the mash for an icosahedron when subdivisions == 0
// For every increase in subdivisions the number of faces is quadrupled:
//  #subdivisions  #faces  #vertices:
//   0             20           12
//   1             80           72
//   2            320          312
//   3           1280         1272
//   4           5120         5112
GeometryBuilder IcosahedronGeometry(
    {int subdivisions = 4, double scale = 1.0, bool computeNormals = true}) {
  List<Face3> faces = [];
  List<VM.Vector3> vertices = [];

  // start with 12 vertices and 20 faces of a Icosahedron
  faces.addAll(IcosahedronFaceList);
  vertices.addAll(IcosahedronVertexList);
  //print("@@@@ ${vertices.length} ${faces.length}");

  // subdivide faces to refine the triangles
  // Each time we make 4 triangles out of one
  for (int i = 0; i < subdivisions; i++) {
    List<Face3> tmp = [];
    for (Face3 f in faces) {
      // Note: a,b,c are unit vectors
      VM.Vector3 a = VM.Vector3.copy(vertices[f.a]);
      a
        ..add(vertices[f.b])
        ..scale(0.5)
        ..normalize();
      VM.Vector3 b = VM.Vector3.copy(vertices[f.b]);
      b
        ..add(vertices[f.c])
        ..scale(0.5)
        ..normalize();
      VM.Vector3 c = VM.Vector3.copy(vertices[f.c]);
      c
        ..add(vertices[f.a])
        ..scale(0.5)
        ..normalize();
      final int ia = vertices.length;
      vertices.add(a);
      final int ib = vertices.length;
      vertices.add(b);
      final int ic = vertices.length;
      vertices.add(c);

      tmp.add(Face3(f.a, ia, ic));
      tmp.add(Face3(f.b, ib, ia));
      tmp.add(Face3(f.c, ic, ib));
      tmp.add(Face3(ia, ib, ic));
    }
    //print("@@@@ ${vertices.length} ${tmp.length}");
    faces = tmp;
  }

  GeometryBuilder gb = GeometryBuilder();
  gb.EnableAttribute(aTexUV);
  if (computeNormals) {
    gb.EnableAttribute(aNormal);
  }
  // create final vertices and uvs of a Icosahedron
  for (Face3 f in faces) {
    VM.Vector3 v1 = vertices[f.a];
    assert(v1.length < 1.01 && v1.length > 0.99);
    VM.Vector3 v2 = vertices[f.b];
    assert(v2.length < 1.01 && v2.length > 0.99);
    VM.Vector3 v3 = vertices[f.c];
    assert(v3.length < 1.01 && v3.length > 0.99);

    //print ("@ ${v1.subtract(v2).length()}");
    //print ("@ ${v2.subtract(v3).length()}");
    //print ("@ ${v3.subtract(v1).length()}");
    VM.Vector2 t1 = VM.Vector2(getU2(v1.z, v1.x), getV2(v1.y));
    VM.Vector2 t2 = VM.Vector2(getU2(v2.z, v2.x), getV2(v2.y));
    VM.Vector2 t3 = VM.Vector2(getU2(v3.z, v3.x), getV2(v3.y));
    if (computeNormals) {
      gb.AddAttributesVector3(aNormal, [v1, v2, v3]);
    }
    gb.AddVerticesFace3([v1.scaled(scale), v2.scaled(scale), v3.scaled(scale)]);
    gb.AddAttributesVector2(aTexUV, [t1, t2, t3]);
  }
  return gb;
}
