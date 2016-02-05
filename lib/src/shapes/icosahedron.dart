part of chronosgl;

class IcosahedronMeshData extends MeshData {
  IcosahedronMeshData([int subdivisions = 4]) : super.empty() {
    MeshData tempMeshData = new MeshData.empty();

    // create 12 vertices of a Icosahedron

    double t = (1 + Math.sqrt(5)) / 2;

    v(-1, t, 0);
    v(1, t, 0);
    v(-1, -t, 0);
    v(1, -t, 0);

    v(0, -1, t);
    v(0, 1, t);
    v(0, -1, -t);
    v(0, 1, -t);

    v(t, 0, -1);
    v(t, 0, 1);
    v(-t, 0, -1);
    v(-t, 0, 1);

    // 5 faces around point 0

    f3(0, 11, 5, tempMeshData);
    f3(0, 5, 1, tempMeshData);
    f3(0, 1, 7, tempMeshData);
    f3(0, 7, 10, tempMeshData);
    f3(0, 10, 11, tempMeshData);

    // 5 adjacent faces

    f3(1, 5, 9, tempMeshData);
    f3(5, 11, 4, tempMeshData);
    f3(11, 10, 2, tempMeshData);
    f3(10, 7, 6, tempMeshData);
    f3(7, 1, 8, tempMeshData);

    // 5 faces around point 3

    f3(3, 9, 4, tempMeshData);
    f3(3, 4, 2, tempMeshData);
    f3(3, 2, 6, tempMeshData);
    f3(3, 6, 8, tempMeshData);
    f3(3, 8, 9, tempMeshData);

    // 5 adjacent faces

    f3(4, 9, 5, tempMeshData);
    f3(2, 4, 11, tempMeshData);
    f3(6, 2, 10, tempMeshData);
    f3(8, 6, 7, tempMeshData);
    f3(9, 8, 1, tempMeshData);

    // subdivide faces to refine the triangles

    for (int i = 0; i < subdivisions; i++) {
      MeshData tempMeshData2 = new MeshData.empty();

      for (int i = 0, l = tempMeshData.vertexIndices.length ~/ 3; i < l; i++) {

        // replace each triangle by 4 triangles

        List<int> face = tempMeshData.vertexIndices.sublist(i * 3, i * 3 + 3);

        int a = getMiddlePoint(face[0], face[1]);
        int b = getMiddlePoint(face[1], face[2]);
        int c = getMiddlePoint(face[2], face[0]);

        f3(face[0], a, c, tempMeshData2);
        f3(face[1], b, a, tempMeshData2);
        f3(face[2], c, b, tempMeshData2);
        f3(a, b, c, tempMeshData2);
      }

      tempMeshData.vertexIndices = tempMeshData2.vertexIndices;
      tempMeshData.textureCoords = tempMeshData2.textureCoords;
    }

    vertexIndices = tempMeshData.vertexIndices;
    textureCoords = tempMeshData.textureCoords;

    tempMeshData = new MeshData.empty();

    // we need to point vertexIndices to unique vertex and textureCoord combinations... if only OpenGL supported the obj file format natively...
    for (int i = 0, l = vertexIndices.length; i < l; i++) {
      int index = vertexIndices[i];

      tempMeshData.vertices.addAll(vertices.sublist(index * 3, index * 3 + 3));
      tempMeshData.vertexIndices.add(i);
    }

    vertexIndices = tempMeshData.vertexIndices;
    vertices = tempMeshData.vertices;

    optimize();

//    for ( int i = 0, l = vertexIndices.length; i < l; i ++ ) {
//      int index = vertexIndices[i];
//
//      if( i % 3 == 0)
//        print("############ $index");
//      print(vertices.sublist( index*3, index*3+3 ));
//      print(textureCoords.sublist( index*2, index*2+2 ));
//
//    }
//
//    print( vertexIndices.length);
//    print( textureCoords.length);
//    print( vertices.length);
    //print( vertexIndices.length);
  }

  void v(num x, num y, num z) {
    var length = Math.sqrt(x * x + y * y + z * z);
    vertices.addAll([x / length, y / length, z / length]);
  }

  double getU2(double z, double x) {
    return 0.5 * (1.0 + Math.atan2(z, x) * (1 / Math.PI));
  }

  double getV2(double y) {
    return Math.acos(y) * (1 / Math.PI);
  }

  double getU1(double z, double x) {
    return 1 - (((Math.atan2(z, x) + Math.PI) % Math.PI) / Math.PI * 0.5);
  }

  double getV1(double y) {
    return 0.5 - y / 2;
  }

  void f3(int a, int b, int c, MeshData scope) {
    List<double> v1 = vertices.sublist(a * 3, a * 3 + 3);
    List<double> v2 = vertices.sublist(b * 3, b * 3 + 3);
    List<double> v3 = vertices.sublist(c * 3, c * 3 + 3);

    scope.vertexIndices.addAll([a, b, c]);

    // face.vertexNormals.push( v1.clone().normalize(), v2.clone().normalize(), v3.clone().normalize() );

    scope.textureCoords.addAll([getU2(v1[2], v1[0]), getV2(v1[1]), getU2(v2[2], v2[0]), getV2(v2[1]), getU2(v3[2], v3[0]), getV2(v3[1])]);
  }

  int getMiddlePoint(int p1, int p2) {
    List<double> pos1 = vertices.sublist(p1 * 3, p1 * 3 + 3);
    List<double> pos2 = vertices.sublist(p2 * 3, p2 * 3 + 3);

    double x = (pos1[0] + pos2[0]) / 2;
    double y = (pos1[1] + pos2[1]) / 2;
    double z = (pos1[2] + pos2[2]) / 2;

    v(x, y, z);
    return vertices.length ~/ 3 - 1;
  }
}
