part of base;

class Face1 {
  int a;

  Face1(this.a);
}

class Face2 {
  int a, b;

  Face2(this.a, this.b);
}

class Face3 {
  int a, b, c;

  Face3(this.a, this.b, this.c);
}

class Face4 {
  int a, b, c, d;

  Face4(this.a, this.b, this.c, this.d);
}

class GeometryBuilder {
  final bool pointsOnly;
  List<Face3> _faces3 = [];
  List<Face4> _faces4 = [];
  List<VM.Vector3> vertices = [];
  Map<String, List> attributes = {};

  GeometryBuilder([this.pointsOnly = false]);

  void EnableAttribute(String canonical) {
    assert(!attributes.containsKey(canonical));
    assert(canonical.startsWith("a"));
    attributes[canonical] = [];
  }

  bool HasAttribute(String canonical) {
    return attributes.containsKey(canonical);
  }

  void SanityCheck() {
    if (pointsOnly) {
      assert(_faces3.length == 0);
      assert(_faces4.length == 0);
      return;
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

    final int n = vertices.length ~/ 3;
    assert(n >= 0);
    assert(maxIndexFace3 < n);
    assert(maxIndexFace4 < n);

    for (String canonical in attributes.keys) {
      assert(attributes[canonical].length == vertices.length,
          "bad attribute ${canonical}");
    }
  }

  void AddFace3(int a, int b, int c) {
    assert(pointsOnly == false);
    _faces3.add(new Face3(a, b, c));
  }

  void AddFace4(int a, int b, int c, int d) {
    assert(pointsOnly == false);
    _faces4.add(new Face4(a, b, c, d));
  }

  void AddFaces3(int n) {
    assert(pointsOnly == false);
    int v = vertices.length;
    for (int i = 0; i < n; i++, v += 3) {
      _faces3.add(new Face3(v + 0, v + 1, v + 2));
    }
  }

  void AddFaces4(int n) {
    assert(pointsOnly == false);
    int v = vertices.length;
    for (int i = 0; i < n; i++, v += 4) {
      _faces4.add(new Face4(v + 0, v + 1, v + 2, v + 3));
    }
  }

  // Extract the triplets from vertex
  void AddVertices(List<VM.Vector3> vs) {
    for (VM.Vector3 v in vs) {
      vertices.add(v.clone());
    }
  }

  void AddVertex(VM.Vector3 v) {
    vertices.add(v.clone());
  }

  void AddVerticesFace3(List<VM.Vector3> vs) {
    assert(vs.length == 3);
    int i = vertices.length;
    _faces3.add(new Face3(i + 0, i + 1, i + 2));
    for (VM.Vector3 v in vs) {
      vertices.add(v.clone());
    }
  }

  void AddAttributesDouble(String canonical, List<double> lst) {
    List ts = attributes[canonical];
    for (double v in lst) {
      ts.add(v);
    }
  }

  void AddAttributesVector2(String canonical, List<VM.Vector2> lst) {
    List ts = attributes[canonical];
    for (VM.Vector2 v in lst) {
      ts.add(v.clone());
    }
  }

  void AddAttributesVector3(String canonical, List<VM.Vector3> lst) {
    List ts = attributes[canonical];
    for (VM.Vector3 v in lst) {
      ts.add(v.clone());
    }
  }

  void AddAttributesVector4(String canonical, List<VM.Vector4> lst) {
    List ts = attributes[canonical];
    for (VM.Vector4 v in lst) {
      ts.add(v.clone());
    }
  }

  void AddVerticesFace4(List<VM.Vector3> vs) {
    assert(vs.length == 4);
    int i = vertices.length;
    _faces4.add(new Face4(i + 0, i + 1, i + 2, i + 3));
    for (VM.Vector3 v in vs) {
      vertices.add(v.clone());
    }
  }

  // generateFaces is usually only called once to initialize _faces.
  // Its main purpose is to convert Face4 into two triangles
  List<int> GenerateFaceIndices() {
    List<int> faces = new List<int>(_faces3.length * 3 + _faces4.length * 6);
    int i = 0;
    for (Face3 f3 in _faces3) {
      faces[i + 0] = f3.a;
      faces[i + 1] = f3.b;
      faces[i + 2] = f3.c;
      i += 3;
    }
    for (Face4 f4 in _faces4) {
      faces[i + 0] = f4.a;
      faces[i + 1] = f4.b;
      faces[i + 2] = f4.c;
      //
      faces[i + 3] = f4.a;
      faces[i + 4] = f4.c;
      faces[i + 5] = f4.d;
      i += 6;
    }
    assert(i == faces.length);
    return faces;
  }

  List<int> GenerateLineIndices() {
    List<int> lines = new List<int>(_faces3.length * 6 + _faces4.length * 8);
    int i = 0;
    for (Face3 f3 in _faces3) {
      lines[i + 0] = f3.a;
      lines[i + 1] = f3.b;
      lines[i + 2] = f3.b;
      lines[i + 3] = f3.c;
      lines[i + 4] = f3.c;
      lines[i + 5] = f3.a;
      i += 6;
    }
    for (Face4 f4 in _faces4) {
      lines[i + 0] = f4.a;
      lines[i + 1] = f4.b;
      lines[i + 2] = f4.b;
      lines[i + 3] = f4.c;
      lines[i + 4] = f4.c;
      lines[i + 5] = f4.d;
      lines[i + 6] = f4.d;
      lines[i + 7] = f4.a;
      i += 8;
    }
    assert(i == lines.length);
    return lines;
  }

  static bool normalFromPoints(VM.Vector3 a, VM.Vector3 b, VM.Vector3 c,
      VM.Vector3 temp, VM.Vector3 normal) {
    temp
      ..setFrom(b)
      ..sub(a);
    normal
      ..setFrom(c)
      ..sub(a);

    normal.crossInto(temp, normal);

    double len = normal.length;
    if (len == 0) {
      return false;
    }

    normal.scale(-1 /
        len); // normalize // added the minus to make it the correct normal compared to the base cube
    return true;
  }

  void GenerateNormalsAssumingTriangleMode() {
    List<VM.Vector3> normals = new List<VM.Vector3>(vertices.length);
    VM.Vector3 temp = new VM.Vector3.zero();
    VM.Vector3 norm = new VM.Vector3.zero();
    for (Face3 f3 in _faces3) {
      normalFromPoints(
          vertices[f3.a], vertices[f3.b], vertices[f3.c], temp, norm);
      normals[f3.a] = norm.clone();
      normals[f3.b] = norm.clone();
      normals[f3.c] = norm.clone();
    }

    for (Face4 f4 in _faces4) {
      normalFromPoints(
          vertices[f4.a], vertices[f4.b], vertices[f4.c], temp, norm);
      normals[f4.a] = norm.clone();
      normals[f4.b] = norm.clone();
      normals[f4.c] = norm.clone();
      normals[f4.d] = norm.clone();
    }
    attributes[aNormal] = normals;
  }

  void GenerateRadialNormals(VM.Vector3 center) {
    VM.Vector3 norm = new VM.Vector3.zero();
    List<VM.Vector3> normals = new List<VM.Vector3>(vertices.length);

    for (int i = 0; i < vertices.length; ++i) {
      norm = vertices[i] - center;
      norm.normalize();
      normals[i] = norm.clone();
    }
    attributes[aNormal] = normals;
  }

// populate aCenter Input
  void GenerateWireframeCenters() {
    List<VM.Vector4> center = new List<VM.Vector4>(vertices.length);

    VM.Vector4 a3 = new VM.Vector4(1.0, 0.0, 0.0, 0.0);
    VM.Vector4 b3 = new VM.Vector4(0.0, 1.0, 0.0, 0.0);
    VM.Vector4 c3 = new VM.Vector4(0.0, 0.0, 1.0, 0.0);

    for (Face3 f in _faces3) {
      center[f.a] = a3.clone();
      center[f.b] = b3.clone();
      center[f.c] = c3.clone();
    }

    VM.Vector4 a4 = new VM.Vector4(1.0, 0.0, 0.0, 1.0);
    VM.Vector4 b4 = new VM.Vector4(1.0, 1.0, 0.0, 1.0);
    VM.Vector4 c4 = new VM.Vector4(0.0, 1.0, 0.0, 1.0);
    VM.Vector4 d4 = new VM.Vector4(0.0, 0.0, 0.0, 1.0);

    for (Face4 f in _faces4) {
      center[f.a] = a4.clone();
      center[f.b] = b4.clone();
      center[f.c] = c4.clone();
      center[f.d] = d4.clone();
    }
    attributes[aCenter] = center;
  }

  @override
  String toString() {
    List<String> s = [
      "GB:",
      "V[${vertices.length}]",
      "f3[${_faces3.length}]",
      "f4[${_faces4.length}]"
    ];
    for (String canonical in attributes.keys) {
      s.add("${canonical}[${attributes[canonical].length}]");
    }
    return s.join(" ");
  }
}
