part of core;

class Face1 {
  Face1(this.a);

  int a;
}

class Face2 {
  Face2(this.a, this.b);

  int a, b;
}

class Face3 {
  Face3(this.a, this.b, this.c);

  int a, b, c;
}

class Face4 {
  Face4(this.a, this.b, this.c, this.d);

  int a, b, c, d;
}

bool NormalFromPoints(VM.Vector3 a, VM.Vector3 b, VM.Vector3 c, VM.Vector3 temp,
    VM.Vector3 normal) {
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

class Edge3 {
  Edge3(this.v1, this.v2);

  VM.Vector3 v1;
  VM.Vector3 v2;

  @override
  bool operator ==(Object other) =>
      (other is Edge3) && v1 == other.v1 && v2 == other.v2;

  @override
  String toString() => "${v1} -> ${v2}";

  @override
  int get hashCode => v1.hashCode ^ v2.hashCode;
}

/// Helper for Shader independent Mesh creation.
/// Supports Faces with 3 and 4 Nodes or point clouds.
/// Use  GeometryBuilderToMeshData() to create the Mesh
/// for a specific Shader.
class GeometryBuilder {
  GeometryBuilder([this.pointsOnly = false]);

  // if true we have have point cloud
  final bool pointsOnly;
  final List<Face3> _faces3 = []; // only used if pointsOnly == false
  final List<Face4> _faces4 = []; // only used if pointsOnly == false
  final List<VM.Vector3> vertices = [];
  Map<String, List> attributes = {};

  void EnableAttribute(String canonical) {
    assert(!attributes.containsKey(canonical),
        "attribute ${canonical} already exists");
    assert(canonical.startsWith("a"), "${canonical} is not an attribute");
    ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);
    switch (desc.type) {
      case VarTypeVec2:
        attributes[canonical] = <VM.Vector2>[];
        break;
      case VarTypeVec3:
        attributes[canonical] = <VM.Vector3>[];
        break;
      case VarTypeVec4:
        attributes[canonical] = <VM.Vector4>[];
        break;
      case VarTypeFloat:
        attributes[canonical] = <double>[];
        break;
      case VarTypeUvec4:
        attributes[canonical] = <List<int>>[];
        break;
      default:
        assert(false, "unknown type for ${canonical}");
    }
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

    final int n = vertices.length;
    assert(n >= 0);
    assert(maxIndexFace3 < n, "${maxIndexFace3} vs $n");
    assert(maxIndexFace4 < n, "${maxIndexFace4} vs $n");

    for (String canonical in attributes.keys) {
      assert(attributes[canonical].length == vertices.length,
          "bad attribute ${canonical}");
    }
  }

  void AddFace3(int a, int b, int c) {
    assert(pointsOnly == false, "pointsOnly must be false");
    _faces3.add(Face3(a, b, c));
  }

  void AddFace4(int a, int b, int c, int d) {
    assert(pointsOnly == false, "pointsOnly must be false");

    _faces4.add(Face4(a, b, c, d));
  }

  void AddFaces3(int n) {
    assert(pointsOnly == false, "pointsOnly must be false");

    int v = vertices.length;
    for (int i = 0; i < n; i++, v += 3) {
      _faces3.add(Face3(v + 0, v + 1, v + 2));
    }
  }

  void AddFaces4(int n) {
    assert(pointsOnly == false);
    int v = vertices.length;
    for (int i = 0; i < n; i++, v += 4) {
      _faces4.add(Face4(v + 0, v + 1, v + 2, v + 3));
    }
  }

  // Extract the triplets from vertex
  void AddVertices(List<VM.Vector3> vs) {
    for (VM.Vector3 v in vs) {
      vertices.add(v.clone());
    }
  }

  void AddVerticesTakeOwnership(List<VM.Vector3> vs) {
    for (VM.Vector3 v in vs) {
      vertices.add(v);
    }
  }

  void AddVertex(VM.Vector3 v) {
    vertices.add(v.clone());
  }

  void AddVerticesFace3(List<VM.Vector3> vs) {
    assert(vs.length == 3);
    int i = vertices.length;
    AddFace3(i + 0, i + 1, i + 2);
    AddVertices(vs);
  }

  void AddVerticesFace3TakeOwnership(List<VM.Vector3> vs) {
    assert(vs.length == 3);
    int i = vertices.length;
    AddFace3(i + 0, i + 1, i + 2);
    AddVerticesTakeOwnership(vs);
  }

  void AddAttributeDouble(String canonical, double v) {
    List<double> ts = attributes[canonical];
    ts.add(v);
  }

  void AddAttributesDouble(String canonical, List<double> lst) {
    List<double> ts = attributes[canonical];
    for (double v in lst) {
      ts.add(v);
    }
  }

  void AddAttributeVector2(String canonical, VM.Vector2 v) {
    List<VM.Vector2> ts = attributes[canonical];
    ts.add(v.clone());
  }

  void AddAttributesVector2(String canonical, List<VM.Vector2> lst) {
    List<VM.Vector2> ts = attributes[canonical];
    for (VM.Vector2 v in lst) {
      ts.add(v.clone());
    }
  }

  void AddAttributesVector2TakeOwnership(
      String canonical, List<VM.Vector2> lst) {
    List<VM.Vector2> ts = attributes[canonical];
    for (VM.Vector2 v in lst) {
      ts.add(v);
    }
  }

  void AddAttributeVector3(String canonical, VM.Vector3 v) {
    List<VM.Vector3> ts = attributes[canonical];
    ts.add(v.clone());
  }

  void AddAttributesVector3(String canonical, List<VM.Vector3> lst) {
    List<VM.Vector3> ts = attributes[canonical];
    for (VM.Vector3 v in lst) {
      ts.add(v.clone());
    }
  }

  void AddAttributesVector3TakeOwnership(
      String canonical, List<VM.Vector3> lst) {
    List<VM.Vector3> ts = attributes[canonical];
    for (VM.Vector3 v in lst) {
      ts.add(v);
    }
  }

  void AddAttributeVector4(String canonical, VM.Vector4 v) {
    List<VM.Vector4> ts = attributes[canonical];
    ts.add(v.clone());
  }

  void AddAttributesVector4(String canonical, List<VM.Vector4> lst) {
    List<VM.Vector4> ts = attributes[canonical];
    for (VM.Vector4 v in lst) {
      ts.add(v.clone());
    }
  }

  void AddAttributesVector4TakeOwnership(
      String canonical, List<VM.Vector4> lst) {
    List ts = attributes[canonical];
    for (VM.Vector4 v in lst) {
      ts.add(v);
    }
  }

  void AddAttributesUvec4(String canonical, List<List<int>> lst) {
    List ts = attributes[canonical];
    for (List<int> v in lst) {
      ts.add(v.sublist(0));
    }
  }

  void AddVerticesFace4(List<VM.Vector3> vs) {
    assert(vs.length == 4);
    int i = vertices.length;
    AddFace4(i + 0, i + 1, i + 2, i + 3);
    AddVertices(vs);
  }

  void AddVerticesFace4TakeOwnership(List<VM.Vector3> vs) {
    assert(vs.length == 4);
    int i = vertices.length;
    AddFace4(i + 0, i + 1, i + 2, i + 3);
    AddVerticesTakeOwnership(vs);
  }

  void AddFaces4Strip(List<VM.Vector3> top, List<VM.Vector3> bot, bool closed) {
    assert(top.length == bot.length);
    final n = top.length - 1;
    for (int i = 0; i < n; ++i) {
      AddVerticesFace4([bot[i], bot[i + 1], top[i + 1], top[i]]);
    }
    if (closed) {
      AddVerticesFace4([bot[n], bot[0], top[0], top[n]]);
    }
  }

  void AddFaces4Strips(List<List<VM.Vector3>> strips, bool closed,
      [bool flip = false]) {
    for (int i = 0; i < strips.length - 1; ++i) {
      if (flip) {
        AddFaces4Strip(strips[i], strips[i + 1], closed);
      } else {
        AddFaces4Strip(strips[i + 1], strips[i], closed);
      }
    }
  }

  // generateFaces is usually only called once to initialize _faces.
  // Its main purpose is to convert Face4 into two triangles
  List<int> GenerateFaceIndices() {
    assert(_faces3.length > 0 || _faces4.length > 0);
    List<int> faces = List<int>(_faces3.length * 3 + _faces4.length * 6);
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
    List<int> lines = List<int>(_faces3.length * 6 + _faces4.length * 8);
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

  void GenerateNormalsAssumingTriangleMode() {
    List<VM.Vector3> normals = List<VM.Vector3>(vertices.length);
    VM.Vector3 temp = VM.Vector3.zero();
    VM.Vector3 norm = VM.Vector3.zero();
    for (Face3 f3 in _faces3) {
      NormalFromPoints(
          vertices[f3.a], vertices[f3.b], vertices[f3.c], temp, norm);
      normals[f3.a] = norm.clone();
      normals[f3.b] = norm.clone();
      normals[f3.c] = norm.clone();
    }

    for (Face4 f4 in _faces4) {
      NormalFromPoints(
          vertices[f4.a], vertices[f4.b], vertices[f4.c], temp, norm);
      normals[f4.a] = norm.clone();
      normals[f4.b] = norm.clone();
      normals[f4.c] = norm.clone();
      normals[f4.d] = norm.clone();
    }
    attributes[aNormal] = normals;
  }

  // TODO: this needs more work and may never work well
  void GenerateAveragedNormalsAssumingTriangleMode() {
    Map<VM.Vector3, VM.Vector3> avg = <VM.Vector3, VM.Vector3>{};
    //Map<VM.Vector3, double> cnt = {};
    VM.Vector3 temp = VM.Vector3.zero();
    VM.Vector3 norm = VM.Vector3.zero();

    void add(int index, VM.Vector3 n) {
      VM.Vector3 v = vertices[index];
      if (avg.containsKey(v)) {
        avg[v] += n;
        //cnt[v]++;
      } else {
        avg[v] = n;
        //cnt[v] = 1;
      }
    }

    for (Face3 f3 in _faces3) {
      NormalFromPoints(
          vertices[f3.a], vertices[f3.b], vertices[f3.c], temp, norm);
      VM.Vector3 n = norm.clone();
      add(f3.a, n);
      add(f3.b, n);
      add(f3.c, n);
    }

    for (Face4 f4 in _faces4) {
      NormalFromPoints(
          vertices[f4.a], vertices[f4.b], vertices[f4.c], temp, norm);
      VM.Vector3 n = norm.clone()..scale(2.0);
      add(f4.a, n);
      add(f4.b, n);
      add(f4.c, n);
      add(f4.d, n);
    }

    for (VM.Vector3 key in avg.keys) {
      avg[key] = avg[key]..normalize();
    }
    List<VM.Vector3> normals = List<VM.Vector3>(vertices.length);
    for (int i = 0; i < vertices.length; ++i) {
      normals[i] = avg[vertices[i]];
    }
    attributes[aNormal] = normals;
  }

  void GenerateRadialNormals(VM.Vector3 center) {
    VM.Vector3 norm = VM.Vector3.zero();
    List<VM.Vector3> normals = List<VM.Vector3>(vertices.length);

    for (int i = 0; i < vertices.length; ++i) {
      norm = vertices[i] - center;
      norm.normalize();
      normals[i] = norm.clone();
    }
    attributes[aNormal] = normals;
  }

// populate aCenter Input
  void GenerateWireframeCenters() {
    List<VM.Vector4> center = List<VM.Vector4>(vertices.length);

    VM.Vector4 a3 = VM.Vector4(1.0, 0.0, 0.0, 0.0);
    VM.Vector4 b3 = VM.Vector4(0.0, 1.0, 0.0, 0.0);
    VM.Vector4 c3 = VM.Vector4(0.0, 0.0, 1.0, 0.0);

    for (Face3 f in _faces3) {
      center[f.a] = a3.clone();
      center[f.b] = b3.clone();
      center[f.c] = c3.clone();
    }

    VM.Vector4 a4 = VM.Vector4(1.0, 0.0, 0.0, 1.0);
    VM.Vector4 b4 = VM.Vector4(1.0, 1.0, 0.0, 1.0);
    VM.Vector4 c4 = VM.Vector4(0.0, 1.0, 0.0, 1.0);
    VM.Vector4 d4 = VM.Vector4(0.0, 0.0, 0.0, 1.0);

    for (Face4 f in _faces4) {
      center[f.a] = a4.clone();
      center[f.b] = b4.clone();
      center[f.c] = c4.clone();
      center[f.d] = d4.clone();
    }
    attributes[aCenter] = center;
  }

  /// w: num horizontal points
  /// h: num vertical points
  void GenerateRegularGridUV(int w, int h) {
    assert(vertices.length == w * h, "grid vertices length mismatch");
    List<VM.Vector2> uvs = [];
    attributes[aTexUV] = uvs;

    for (int y = 0; y < h; ++y) {
      for (int x = 0; x < w; ++x) {
        // we interchange x and y for historical reasons here
        uvs.add(VM.Vector2(y / (h - 1), x / (w - 1)));
      }
    }
    assert(uvs.length == w * h, "grid uvs lengths mismatch");
  }

  void GenerateRegularGridFaces(int w, int h, bool wrapped) {
    assert(vertices.length == w * h);
    for (int i = 0; i < h - (wrapped ? 0 : 1); ++i) {
      for (int j = 0; j < w - (wrapped ? 0 : 1); ++j) {
        int ip = i + 1;
        int jp = j + 1;
        if (wrapped) {
          ip = ip % h;
          jp = jp % w;
        }
        AddFace4(i * w + jp, ip * w + jp, ip * w + j, i * w + j);
      }
    }
    if (wrapped) {
      assert(_faces4.length == w * h, "face4 length mismatch");
    }
  }

  // http://pages.mtu.edu/~shene/COURSES/cs3621/SLIDES/Mesh.pdf
  bool IsOrientableManifoldWithBoundaries() {
    Map<Edge3, Object> incidenceE = {};

    bool addEdge(VM.Vector3 v1, VM.Vector3 v2, Object face) {
      Edge3 edge = Edge3(v1, v2);
      if (incidenceE.containsKey(edge)) {
        // print("unexpected duplicate edge");
        return true;
      } else {
        incidenceE[edge] = face;
        return false;
      }
    }

    for (Face3 f3 in _faces3) {
      VM.Vector3 va = vertices[f3.a];
      VM.Vector3 vb = vertices[f3.b];
      VM.Vector3 vc = vertices[f3.c];
      if (addEdge(va, vb, f3) | addEdge(vb, vc, f3) | addEdge(vc, va, f3)) {
        return false;
      }
    }

    for (Face4 f4 in _faces4) {
      VM.Vector3 va = vertices[f4.a];
      VM.Vector3 vb = vertices[f4.b];
      VM.Vector3 vc = vertices[f4.c];
      VM.Vector3 vd = vertices[f4.d];
      if (addEdge(va, vb, f4) |
          addEdge(vb, vc, f4) |
          addEdge(vc, va, f4) |
          // same split as in  GenerateFaceIndices()
          addEdge(va, vc, f4) |
          addEdge(vc, vd, f4) |
          addEdge(vd, va, f4)) {
        return false;
      }
    }

    // print("number of edges: ${incidenceE.length}");

    // each edge is incident to two faces with compatible orientation
    for (Edge3 e in incidenceE.keys) {
      Edge3 f = Edge3(e.v2, e.v1);
      if (!incidenceE.containsKey(f)) {
        // print("unpaired edge ${e.v1}->${e.v2}");
        return false;
      }
    }

    // fan property
    Map<VM.Vector3, List<VM.Vector3>> incidenceV = {};
    for (Edge3 e in incidenceE.keys) {
      incidenceV.putIfAbsent(e.v1, () => <VM.Vector3>[]).add(e.v2);
    }

    bool formsLoop(List<VM.Vector3> lst) {
      for (int i = 0; i < lst.length; ++i) {
        VM.Vector3 v1 = i == 0 ? lst.last : lst[i - 1];
        // print("fan ${v1} ${lst}");
        bool found = false;
        for (int j = i; j < lst.length; ++j) {
          VM.Vector3 v2 = lst[j];
          if (incidenceE.containsKey(Edge3(v1, v2))) {
            lst[j] = lst[i];
            lst[i] = v2;
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      }
      return true;
    }

    for (List<VM.Vector3> lst in incidenceV.values) {
      if (!formsLoop(lst)) {
        // print ("fan issues for ${lst}");
        return false;
      }
    }
    return true;
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
      String type = RetrieveShaderVarDesc(canonical).type;
      s.add("${canonical}[${type},${attributes[canonical].length}]");
    }
    return s.join(" ");
  }
}
