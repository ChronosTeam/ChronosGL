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
  List<int> _faces = [];
  Map<String, List<double>> _attributes = {};

  MeshData();

  bool IsPoints() {
    return _faces1.length > 0;
  }

  void SanityCheck() {
    if (IsPoints()) {
      assert(_faces3.length == 0 && _faces4.length == 0);
    }

    int maxIndexFace1 = -1;
    for (Face1 f in _faces1) {
      if (f.a > maxIndexFace1) maxIndexFace1 = f.a;
    }

    int maxIndexFace3 = -1;
    for (Face3 f in _faces3) {
      if (f.a > maxIndexFace3) maxIndexFace3 = f.a;
      if (f.b > maxIndexFace3) maxIndexFace3 = f.b;
      if (f.c > maxIndexFace3) maxIndexFace3 = f.c;
    }

    int maxIndexFace4 = -1;
    for (Face4 f in _faces4) {
      if (f.a > maxIndexFace4) maxIndexFace4 = f.a;
      if (f.b > maxIndexFace4) maxIndexFace4 = f.b;
      if (f.c > maxIndexFace4) maxIndexFace4 = f.c;
      if (f.d > maxIndexFace4) maxIndexFace4 = f.d;
    }

    final int n = _vertices.length ~/ 3;
    assert(n >= 0);
    assert(maxIndexFace1 < n);
    assert(maxIndexFace3 < n);
    assert(maxIndexFace4 < n);

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

  // Note, this is meant to be called only once at the when everything
  // is dones
  List<double> GetAttributeData(String canonical) {
    List<double> a = _attributes[canonical];
    if (a is TypedData) return a;
    return new Float32List.fromList(a);
  }

  Float32List GetVertexData() {
    if (_vertices is TypedData) return _vertices;
    return new Float32List.fromList(_vertices);
  }

  List<int> GetVertexIndices() {
    if (IsPoints()) return null;
    if (_faces.isEmpty) {
      _faces = new Uint32List(_faces3.length * 3 + _faces4.length * 6);
      List<int> out = [];
      int i = 0;
      for (Face3 f3 in _faces3) {
        _faces[i + 0] = f3.a;
        _faces[i + 1] = f3.b;
        _faces[i + 2] = f3.c;
        i += 3;
      }
      for (Face4 f4 in _faces4) {
        _faces[i + 0] = f4.a;
        _faces[i + 1] = f4.b;
        _faces[i + 2] = f4.c;
        //
        _faces[i + 3] = f4.a;
        _faces[i + 4] = f4.c;
        _faces[i + 5] = f4.d;
        i += 6;
      }
      assert(i == _faces.length);
    }
    return _faces;
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

  // Extract the triplets from vertex
  void AddVertices(List<Vector> lst) {
    for (Vector v in lst) {
      _vertices.addAll(v.array);
    }
  }

  void SetFacesRaw(List<int> lst, int end) {
    assert(_faces.length == 0);
    final int n = end & 0xffffff;
    Uint32List f = new Uint32List(n);
    for (int i = 0; i < end; i++) f[i] = lst[i];
    _faces = f;
  }

  void SetVerticesRaw(List<double> lst, int end) {
    assert(_vertices.length == 0);
    final int n = end & 0xffffff;
    Float32List f = new Float32List(n);
    for (int i = 0; i < end; i++) f[i] = lst[i];
    _vertices = f;
  }

  void SetAttributesRaw(String canonical, List<double> lst, int end) {
    assert(_attributes[canonical].length == 0);
    final int n = end & 0xffffff;
    Float32List f = new Float32List(n);
    for (int i = 0; i < end; i++) f[i] = lst[i];
    _attributes[canonical] = f;
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
    List<double> centers = _attributes[aCenter];
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

    List<double> normals = _attributes[aNormal];
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
    List<double> uvs = _attributes[aTextureCoordinates];
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
  String toString() {
    return "F ${_faces.length} ${_vertices.length}";
  }
}
