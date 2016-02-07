part of chronosgl;

class Face1 {
  int a;
  Face1(this.a);
}

class Face3 {
  int a, b, c;
  Face3(this.a, this.b, this.c);
}

class Face4 {
  int a, b, c, d;
  Face4(this.a, this.b, this.c, this.d);
}

// Note:
// * It helps testability to keep this class
//   from being free of WebGL dependencies
// * But if we used WebGL buffers here at some point
//   they could be reused for different Meshes.
//   Right now each Mesh creates its own WebGL buffers.
// * It would also be nice to preserve the incoming structure
//   of the attribute data rather then flatten everything to
//   a List<double>
class MeshData {
  String name = "";
  List<Face1> _faces1 = [];
  List<Face3> _faces3 = [];
  List<Face4> _faces4 = [];
  List<double> _vertices = [];
  Map<String, List<double>> _attributes = {};

  MeshData();

  bool IsPoints() {
    return _faces1.length > 0;
  }

  void SanityCheck() {
    if (IsPoints()) {
      assert(_faces3.length == 0 && _faces4.length == 0);
    }

    int maxIndexFace1 = 0;
    for (Face1 f in _faces1) {
      if(f.a > maxIndexFace1) maxIndexFace1 = f.a;
    }
    
    int maxIndexFace3 = 0;
    for (Face3 f in _faces3) {
      if(f.a > maxIndexFace3) maxIndexFace3 = f.a;
      if(f.b > maxIndexFace3) maxIndexFace3 = f.b;
      if(f.c > maxIndexFace3) maxIndexFace3 = f.c;
    }
    
    int maxIndexFace4 = 0;
    for (Face4 f in _faces4) {
      if(f.a > maxIndexFace4) maxIndexFace4 = f.a;
      if(f.b > maxIndexFace4) maxIndexFace4 = f.b;
      if(f.c > maxIndexFace4) maxIndexFace4 = f.c;
      if(f.d > maxIndexFace4) maxIndexFace4 = f.d;
    }
    
    final int n = _vertices.length ~/ 3;
    assert(n > 0);
    assert (maxIndexFace1 < n);
    assert (maxIndexFace3 < n);
    assert (maxIndexFace4 < n);
    
    for (String canonical in _attributes.keys) {
      int x = _attributes[canonical].length;
      //print ("@@@@@ ${canonical} $n $x");
      if (x != 1 * n && x == 2 * n && x == 3 * n && x == 4 * n) {
        throw "${name}: bad attribute size $n $x";
      }
    }
  }

  Iterable<String> GetAttributes() {
    return _attributes.keys;
  }

  List<double> GetAttributeData(String canonical) {
    return _attributes[canonical];
  }

  List<double> GetVertexData() {
    return _vertices;
  }

  List<int> GetVertexIndices() {
    if (IsPoints()) return null;
    List<int> out = [];
    for (Face3 f3 in _faces3) {
      out.add(f3.a);
      out.add(f3.b);
      out.add(f3.c);
    }
    for (Face4 f4 in _faces4) {
      out.add(f4.a);
      out.add(f4.b);
      out.add(f4.c);
      //
      out.add(f4.a);
      out.add(f4.c);
      out.add(f4.d);
    }
    return out;
  }

  void EnableAttribute(String canonical) {
    assert(!_attributes.containsKey(canonical));
    assert(canonical.startsWith("a"));
    _attributes[canonical] = [];
  }

  void AddFaces1(int n) {
    int v = _vertices.length ~/ 3;
    for (int i = 0; i < n; i++, v++) {
      _faces1.add(new Face1(v));
    }
  }

  void AddFace3(int a, int b, int c) {
    _faces3.add(new Face3(a, b, c));
  }

  void AddFace4(int a, int b, int c, int d) {
    _faces4.add(new Face4(a, b, c, d));
  }

  void AddFaces3(int n) {
    int v = _vertices.length ~/ 3;
    for (int i = 0; i < n; i++, v += 3) {
      _faces3.add(new Face3(v + 0, v + 1, v + 2));
    }
  }

  void AddFaces4(int n) {
    int v = _vertices.length ~/ 3;
    for (int i = 0; i < n; i++, v += 4) {
      _faces4.add(new Face4(v + 0, v + 1, v + 2, v + 3));
    }
  }

  void AddVertices(List<Vector> lst) {
    for (Vector v in lst) {
      _vertices.addAll(v.array);
    }
  }

  void AddAttributesVector(String canonical, List<Vector> lst) {
    for (Vector v in lst) {
      _attributes[canonical].addAll(v.array);
    }
  }

  void AddAttributesVector2(String canonical, List<Vector2> lst) {
    for (Vector2 v in lst) {
      _attributes[canonical].addAll(v.array);
    }
  }

  /*
    void generateEmptyNormals() {
      if (normals.length != vertices.length) {
        normals = new List<double>.generate(vertices.length, (idx) => 0.0);
      }
    }*/

  Vector temp = new Vector();

  bool normalFromPoints(Vector a, Vector b, Vector c, Vector normal) {
    temp.set(b).subtract(a);
    normal.set(c).subtract(a);

    normal.cross(temp);
    double len = normal.length();
    if (len == 0) {
      return false;
    }

    normal.scale(-1 /
        len); // normalize // added the minus to make it the correct normal compared to the base cube
    return true;
  }

  // add support for Face4
  void generateWireframeCenters() {
    if (!_attributes.containsKey(aCenter)) EnableAttribute(aCenter);
    List<double> centers = GetAttributeData(aCenter);
    while (centers.length < _vertices.length * 4 ~/ 3) {
      centers.add(0.0);
    }
    void setCenter(Vector4 n, int i) {
      centers[4 * i + 0] = n.x;
      centers[4 * i + 1] = n.y;
      centers[4 * i + 2] = n.z;
      centers[4 * i + 3] = n.w;
    }

    Vector4 a3 = new Vector4(1, 0, 0, 0);
    Vector4 b3 = new Vector4(0, 1, 0, 0);
    Vector4 c3 = new Vector4(0, 0, 1, 0);

    for (Face3 f in _faces3) {
      setCenter(a3, f.a);
      setCenter(b3, f.b);
      setCenter(c3, f.c);
    }

    Vector4 a4 = new Vector4(1, 0, 0, 1);
    Vector4 b4 = new Vector4(1, 1, 0, 1);
    Vector4 c4 = new Vector4(0, 1, 0, 1);
    Vector4 d4 = new Vector4(0, 0, 0, 1);

    for (Face4 f in _faces4) {
      setCenter(a4, f.a);
      setCenter(b4, f.b);
      setCenter(c4, f.c);
      setCenter(d4, f.d);
    }
  }

  // TODO: add support for Face4
  void generateNormalsAssumingTriangleMode() {
    if (!_attributes.containsKey(aNormal)) EnableAttribute(aNormal);
    Vector tempa = new Vector();
    Vector tempb = new Vector();
    Vector tempc = new Vector();
    Vector norm = new Vector();

    void setVector(Vector v, int i) {
      v.set(_vertices[i * 3 + 0], _vertices[i * 3 + 1], _vertices[i * 3 + 2]);
    }

    List<double> normals = GetAttributeData(aNormal);
    while (normals.length < _vertices.length) {
      normals.add(0.0);
    }

    void setNormal(Vector n, int i) {
      normals[3 * i + 0] = n.x;
      normals[3 * i + 1] = n.y;
      normals[3 * i + 2] = n.z;
    }

    for (Face3 f in _faces3) {
      setVector(tempa, f.a);
      setVector(tempb, f.b);
      setVector(tempc, f.c);
      normalFromPoints(tempa, tempb, tempc, norm);
      setNormal(norm, f.a);
      setNormal(norm, f.b);
      setNormal(norm, f.c);
    }
  }

  void setFace4UV(int n, Vector2 a, Vector2 b, Vector2 c, Vector2 d) {
    assert(_attributes.containsKey(aTextureCoordinates));
    Face4 f = _faces4[n];
    List<double> uvs = GetAttributeData(aTextureCoordinates);
    uvs[2 * f.a + 0] = a.x;
    uvs[2 * f.a + 1] = a.y;
    uvs[2 * f.b + 0] = b.x;
    uvs[2 * f.b + 1] = b.y;
    uvs[2 * f.c + 0] = c.x;
    uvs[2 * f.c + 1] = c.y;
    uvs[2 * f.d + 0] = d.x;
    uvs[2 * f.d + 1] = d.y;
  }
  /*
    // use this so normals have room and don't need to share a vertex
    // for example a cube can have 3 different normals for the same vertex
    // so we need 3 different places where we store the same vertex so we have room for 3 different normals
    // TODO: add UV Map and the other stuff
    // add support for Face4
    void deDuplicateIndices() {
      Float32List newVertices = new Float32List(vertexIndices.length * 3);
      int pos = 0;
      for (int i = 0; i < vertexIndices.length; i++) {
        int t = vertexIndices[i] * 3;
        newVertices[pos++] = vertices[t + 0];
        newVertices[pos++] = vertices[t + 1];
        newVertices[pos++] = vertices[t + 2];
      }
      for (int i = 0; i < vertexIndices.length; i++) {
        vertexIndices[i] = i;
      }
      vertices = newVertices;
    }
  
     */
}
