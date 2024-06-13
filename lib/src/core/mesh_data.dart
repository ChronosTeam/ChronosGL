part of core;

Float32List FlattenVector3List(List<VM.Vector3> v, [Float32List? data]) {
  if (data == null) data = Float32List(v.length * 3);
  for (int i = 0; i < v.length; ++i) {
    data[i * 3 + 0] = v[i].x;
    data[i * 3 + 1] = v[i].y;
    data[i * 3 + 2] = v[i].z;
  }
  return data;
}

Float32List FlattenVector2List(List<VM.Vector2> v, [Float32List? data]) {
  if (data == null) data = Float32List(v.length * 2);
  for (int i = 0; i < v.length; ++i) {
    data[i * 2 + 0] = v[i].x;
    data[i * 2 + 1] = v[i].y;
  }
  return data;
}

Float32List FlattenVector4List(List<VM.Vector4> v, [Float32List? data]) {
  if (data == null) data = Float32List(v.length * 4);
  for (int i = 0; i < v.length; ++i) {
    data[i * 4 + 0] = v[i].x;
    data[i * 4 + 1] = v[i].y;
    data[i * 4 + 2] = v[i].z;
    data[i * 4 + 3] = v[i].w;
  }
  return data;
}

Uint32List FlattenUvec4List(List<List<int>> v, [Uint32List? data]) {
  if (data == null) data = Uint32List(v.length * 4);
  for (int i = 0; i < v.length; ++i) {
    data[i * 4 + 0] = v[i][0];
    data[i * 4 + 1] = v[i][1];
    data[i * 4 + 2] = v[i][2];
    data[i * 4 + 3] = v[i][3];
  }
  return data;
}

Float32List FlattenMatrix4List(List<VM.Matrix4> v, [Float32List? data]) {
  if (data == null) data = Float32List(v.length * 16);
  for (int i = 0; i < v.length; ++i) {
    VM.Matrix4 m = v[i];
    for (int j = 0; j < 16; ++j) data[i * 16 + j] = m[j];
  }
  return data;
}

/// represent the raw data for mesh.
/// Internally this is wrapper around a Vertex Array Object (VAO).
/// MeshData objects can be populated directly but often they
/// will derived from **GeometryBuilder** objects.
/// The other common way to create a MeshData object is via
/// RenderProgram.MakeMeshData().
/// Note, MeshData is always associated with a specific RenderProgram
/// but it is possible to assert compatibility with multiple RenderPrograms.
class MeshData extends NamedEntity {
  MeshData(String name, this._cgl, this._drawMode, this._locationMap)
      : _vao = _cgl.createVertexArray(),
        super("meshdata:" + name);

  final ChronosGL _cgl;
  final GlVertexArrayObject _vao;
  final int _drawMode;
  final Map<String, GlBuffer> _buffers = {};
  final Map<String, int> _locationMap;
  GlBuffer? _indexBuffer;
  int _instances = 0;
  int _indexBufferType = -1;

  late Float32List _vertices;
  List<int>? _faces;
  Map<String, List> _attributes = {};

  void clearData() {
    for (String canonical in _buffers.keys) {
      _cgl.deleteBuffer(_buffers[canonical]!);
    }
    if (_indexBuffer != null) {
      _cgl.deleteBuffer(_indexBuffer!);
    }
  }

  void ChangeAttributeData(String canonical, List data, int width) {
    if (debug) print("ChangeBuffer ${canonical} ${data.length}");
    if (canonical.codeUnitAt(0) == prefixInstancer) {
      assert(data.length ~/ width == _instances, "ChangeAttribute ${_instances}");
    } else {
      assert(data.length ~/ width == _vertices.length ~/ 3,
          "wrong size for attribute: ${canonical} expected: ${_vertices.length ~/ 3} got: ${data.length ~/ width}");
    }
    _attributes[canonical] = data;
    _cgl.ChangeArrayBuffer(_buffers[canonical]!, data);
  }

  void ChangeVertexData(Float32List data) {
    final String canonical = aPosition;
    _vertices = data;
    ChangeAttributeData(canonical, data, 3);
  }

  bool SupportsAttribute(String canonical) {
    return _locationMap.containsKey(canonical);
  }

  int get drawMode => _drawMode;

  int get elementArrayBufferType => _indexBufferType;

  int GetNumItems() {
    if (_faces != null) {
      return _faces!.length;
    }
    return _vertices.length ~/ 3;
  }

  int GetNumInstances() {
    return _instances;
  }

  List GetAttribute(String canonical) {
    return _attributes[canonical]!;
  }

  GlBuffer GetBuffer(String canonical) {
    return _buffers[canonical]!;
  }

  void ChangeAttributeBuffer(String canonical, GlBuffer buffer) {
    _buffers[canonical] = buffer;
    final bool instanced = canonical.codeUnitAt(0) == prefixInstancer;
    final ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);
    final int index = _locationMap[canonical]!;
    _cgl.bindVertexArray(_vao);
    _cgl.enableVertexAttribArray(index, instanced ? 1 : 0);
    _cgl.vertexAttribPointer(buffer, index, desc.GetSize(), GL_FLOAT, false, 0, 0);
  }

  void AddAttribute(String canonical, List data, int width) {
    final bool instanced = canonical.codeUnitAt(0) == prefixInstancer;
    if (instanced && _instances == 0) {
      _instances = data.length ~/ width;
    }
    ChangeAttributeBuffer(canonical, _cgl.createBuffer());
    ChangeAttributeData(canonical, data, width);
  }

  void AddVertices(Float32List data) {
    final String canonical = aPosition;
    ChangeAttributeBuffer(canonical, _cgl.createBuffer());
    ChangeVertexData(data);
  }

  void ChangeFaces(List<int> faces) {
    assert(_vertices != null);
    if (_vertices.length < 3 * 256) {
      _faces = Uint8List.fromList(faces);
      _indexBufferType = GL_UNSIGNED_BYTE;
    } else if (_vertices.length < 3 * 65536) {
      _faces = Uint16List.fromList(faces);
      _indexBufferType = GL_UNSIGNED_SHORT;
    } else {
      _faces = Uint32List.fromList(faces);
      _indexBufferType = GL_UNSIGNED_INT;
    }

    _cgl.bindVertexArray(_vao);
    _cgl.ChangeElementArrayBuffer(_indexBuffer!, _faces as TypedData);
  }

  void AddFaces(List<int> faces) {
    _indexBuffer = _cgl.createBuffer();
    ChangeFaces(faces);
  }

  void Activate() {
    _cgl.bindVertexArray(_vao);
  }

  Iterable<String> GetAttributes() {
    return _attributes.keys;
  }

  @override
  String toString() {
    int nf = _faces == null ? 0 : _faces!.length;
    List<String> lst = ["Faces:${nf}"];
    for (String c in _attributes.keys) {
      lst.add("${c}:${_attributes[c]!.length}");
    }

    return "MESH[${name}] " + lst.join("  ");
  }
}

void _GeometryBuilderAttributesToMeshData(GeometryBuilder gb, MeshData md) {
  for (String canonical in gb.attributes.keys) {
    if (!md.SupportsAttribute(canonical)) {
      LogInfo("Dropping unnecessary attribute: ${canonical}");
      continue;
    }
    List lst = gb.attributes[canonical]!;
    ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);

    //print("${md.name} ${canonical} ${lst}");
    switch (desc.type) {
      case VarTypeVec2:
        md.AddAttribute(canonical, FlattenVector2List(lst as List<VM.Vector2>), 2);
        break;
      case VarTypeVec3:
        md.AddAttribute(canonical, FlattenVector3List(lst as List<VM.Vector3>), 3);
        break;
      case VarTypeVec4:
        md.AddAttribute(canonical, FlattenVector4List(lst as List<VM.Vector4>), 4);
        break;
      case VarTypeFloat:
        md.AddAttribute(canonical, Float32List.fromList(lst as List<double>), 1);
        break;
      case VarTypeUvec4:
        md.AddAttribute(canonical, FlattenUvec4List(lst as List<List<int>>), 4);
        break;
      default:
        assert(false,
            "unknown type for ${canonical} [${lst[0].runtimeType}] [${lst.runtimeType}] ${lst}");
    }
  }
}

MeshData GeometryBuilderToMeshData(String name, RenderProgram prog, GeometryBuilder gb) {
  final DateTime start = DateTime.now();
  MeshData md = prog.MakeMeshData(name, gb.pointsOnly ? GL_POINTS : GL_TRIANGLES);
  md.AddVertices(FlattenVector3List(gb.vertices));
  if (!gb.pointsOnly) md.AddFaces(gb.GenerateFaceIndices());
  _GeometryBuilderAttributesToMeshData(gb, md);
  final Duration delta = DateTime.now().difference(start);
  LogInfo("GeometryBuilderToMeshData took (${delta}) ${md}");
  return md;
}

MeshData _ExtractWireframeNormals(
    MeshData out, List<double> vertices, List<double> normals, double scale) {
  assert(vertices.length == normals.length);
  Float32List v = Float32List(2 * vertices.length);
  for (int i = 0; i < vertices.length; i += 3) {
    v[2 * i + 0] = vertices[i + 0];
    v[2 * i + 1] = vertices[i + 1];
    v[2 * i + 2] = vertices[i + 2];
    v[2 * i + 3] = vertices[i + 0] + scale * normals[i + 0];
    v[2 * i + 4] = vertices[i + 1] + scale * normals[i + 1];
    v[2 * i + 5] = vertices[i + 2] + scale * normals[i + 2];
  }
  out.AddVertices(v);

  final int n = 2 * vertices.length ~/ 3;
  List<int> lines = List.generate(n, (i) => i);

  out.AddFaces(lines);
  return out;
}

MeshData GeometryBuilderToWireframeNormals(RenderProgram prog, GeometryBuilder gb,
    [double scale = 1.0]) {
  MeshData out = prog.MakeMeshData("norm", GL_LINES);
  return _ExtractWireframeNormals(out, FlattenVector3List(gb.vertices),
      FlattenVector3List(gb.attributes[aNormal] as List<VM.Vector3>), scale);
}

//Extract Wireframe MeshData
MeshData GeometryBuilderToMeshDataWireframe(String name, RenderProgram prog, GeometryBuilder gb) {
  MeshData md = prog.MakeMeshData(name, GL_LINES);
  md.AddVertices(FlattenVector3List(gb.vertices));
  md.AddFaces(gb.GenerateLineIndices());
  _GeometryBuilderAttributesToMeshData(gb, md);
  return md;
}

MeshData LineEndPointsToMeshData(String name, RenderProgram prog, List<VM.Vector3> points) {
  MeshData md = prog.MakeMeshData(name, GL_LINES);
  md.AddVertices(FlattenVector3List(points));
  List<int> faces = List.generate(points.length, (i) => i);
  md.AddFaces(faces);
  return md;
}

MeshData ExtractWireframeNormals(RenderProgram prog, MeshData md, [double scale = 1.0]) {
  assert(md._drawMode == GL_TRIANGLES, "expected GL_TRIANGLES");
  MeshData out = prog.MakeMeshData(md.name, GL_LINES);
  final Float32List vertices = md.GetAttribute(aPosition) as Float32List;
  final Float32List normals = md.GetAttribute(aNormal) as Float32List;
  return _ExtractWireframeNormals(out, vertices, normals, scale);
}

MeshData ExtractWireframe(RenderProgram prog, MeshData md) {
  assert(false);
  assert(md._drawMode == GL_TRIANGLES);
  MeshData out = prog.MakeMeshData(md.name, GL_LINES);
  out.AddVertices(md._vertices);
  final List<int> faces = md._faces!;
  // Probably wrong
  List<int> lines = List.generate(faces.length * 2, (i) => i);
  for (int i = 0; i < faces.length; i += 3) {
    lines[i * 2 + 0] = faces[i + 0];
    lines[i * 2 + 1] = faces[i + 1];
    lines[i * 2 + 2] = faces[i + 1];
    lines[i * 2 + 3] = faces[i + 2];
    lines[i * 2 + 4] = faces[i + 2];
    lines[i * 2 + 5] = faces[i + 0];
  }

  out.AddFaces(lines);
  return out;
}

List<double> _GetMeshFaceAreas(List<int> faces, Float32List verts) {
  VM.Vector3 v0 = VM.Vector3.zero();
  VM.Vector3 v1 = VM.Vector3.zero();
  VM.Vector3 v2 = VM.Vector3.zero();
  var areas = List<double>.filled(faces.length ~/ 3, 0.0);
  for (int f = 0; f < areas.length; ++f) {
    int i0 = faces[3 * f + 0];
    int i1 = faces[3 * f + 1];
    int i2 = faces[3 * f + 2];
    //
    v0.setValues(verts[3 * i0], verts[3 * i0 + 1], verts[3 * i0 + 2]);
    v1.setValues(verts[3 * i1], verts[3 * i1 + 1], verts[3 * i1 + 2]);
    v2.setValues(verts[3 * i2], verts[3 * i2 + 1], verts[3 * i2 + 2]);
    v1.sub(v0);
    v2.sub(v0);
    v1.crossInto(v2, v0);
    areas[f] = v0.length;
  }

  return areas;
}

double GetMeshFaceArea(MeshData md) {
  List<double> areas = _GetMeshFaceAreas(md._faces!, md._vertices);
  double total_area = 0.0;
  areas.forEach((d) => total_area += d);
  return total_area;
}

MeshData ExtractPointCloud(RenderProgram prog, MeshData md, int num_points,
    {bool extract_normal = true, bool extract_color = false}) {
  assert(md._drawMode == GL_TRIANGLES, "expected GL_TRIANGLES");
  if (extract_normal) {
    assert(md.SupportsAttribute(aNormal), "expected support for aNormal");
  }
  if (extract_color) {
    assert(md.SupportsAttribute(aColor), "expected support for aColor");
  }
  final List<int> faces = md._faces!;
  final Float32List verts = md._vertices;
  final Float32List norms =
      extract_normal ? md.GetAttribute(aNormal) as Float32List : Float32List(0);
  if (extract_normal) {
    assert(norms.length == verts.length);
  }
  final Float32List cols = extract_color ? md.GetAttribute(aColor) as Float32List : Float32List(0);
  if (extract_color) {
    assert(cols.length == verts.length);
  }

  VM.Vector3 v0 = VM.Vector3.zero();
  VM.Vector3 v1 = VM.Vector3.zero();
  VM.Vector3 v2 = VM.Vector3.zero();
  VM.Vector3 n0 = VM.Vector3.zero();
  VM.Vector3 n1 = VM.Vector3.zero();
  VM.Vector3 n2 = VM.Vector3.zero();
  VM.Vector3 c0 = VM.Vector3.zero();
  VM.Vector3 c1 = VM.Vector3.zero();
  VM.Vector3 c2 = VM.Vector3.zero();

  void getVertsForFace(int f) {
    int i0 = faces[3 * f + 0];
    int i1 = faces[3 * f + 1];
    int i2 = faces[3 * f + 2];
    //
    v0.setValues(verts[3 * i0], verts[3 * i0 + 1], verts[3 * i0 + 2]);
    v1.setValues(verts[3 * i1], verts[3 * i1 + 1], verts[3 * i1 + 2]);
    v2.setValues(verts[3 * i2], verts[3 * i2 + 1], verts[3 * i2 + 2]);
    //
    if (extract_normal) {
      n0.setValues(norms[3 * i0], norms[3 * i0 + 1], norms[3 * i0 + 2]);
      n1.setValues(norms[3 * i1], norms[3 * i1 + 1], norms[3 * i1 + 2]);
      n2.setValues(norms[3 * i2], norms[3 * i2 + 1], norms[3 * i2 + 2]);
    }
    if (extract_color) {
      c0.setValues(cols[3 * i0], cols[3 * i0 + 1], cols[3 * i0 + 2]);
      c1.setValues(cols[3 * i1], cols[3 * i1 + 1], cols[3 * i1 + 2]);
      c2.setValues(cols[3 * i2], cols[3 * i2 + 1], cols[3 * i2 + 2]);
    }
  }

  List<double> areas = _GetMeshFaceAreas(faces, verts);
  double total_area = 0.0;
  areas.forEach((d) => total_area += d);
  print("vertices: ${md._vertices.length ~/ 3}  faces: ${faces.length}  total: ${total_area}");
  final double area_per_point = total_area / num_points;
  double ceiling = 0.0;
  int current_face = 0;
  ceiling += areas[current_face];
  getVertsForFace(current_face);

  var rng = Math.Random();
  Float32List sampled_verts = Float32List(3 * num_points);
  Float32List sampled_norms = Float32List(3 * num_points);
  Float32List sampled_cols = Float32List(3 * num_points);

  for (int i = 0; i < num_points; ++i) {
    double x = i * area_per_point;
    while (x > ceiling) {
      ++current_face;
      ceiling += areas[current_face];
      getVertsForFace(current_face);
    }
    // https://chrischoy.github.io/research/barycentric-coordinate-for-mesh-sampling/
    // Random sampling is easy but not really what we want.
    // We want uniform covering
    double sqrt_u = Math.sqrt(rng.nextDouble());
    double v = rng.nextDouble();

    double a = 1 - sqrt_u;
    double b = sqrt_u - sqrt_u * v;
    double c = sqrt_u * v;
    sampled_verts[3 * i + 0] = a * v0.x + b * v1.x + c * v2.x;
    sampled_verts[3 * i + 1] = a * v0.y + b * v1.y + c * v2.y;
    sampled_verts[3 * i + 2] = a * v0.z + b * v1.z + c * v2.z;
    //
    if (extract_normal) {
      sampled_norms[3 * i + 0] = a * n0.x + b * n1.x + c * n2.x;
      sampled_norms[3 * i + 1] = a * n0.y + b * n1.y + c * n2.y;
      sampled_norms[3 * i + 2] = a * n0.z + b * n1.z + c * n2.z;
    }
    if (extract_color) {
      sampled_cols[3 * i + 0] = a * c0.r + b * c1.r + c * c2.r;
      sampled_cols[3 * i + 1] = a * c0.g + b * c1.g + c * c2.g;
      sampled_cols[3 * i + 2] = a * c0.b + b * c1.b + c * c2.b;
    }
  }
  MeshData out = prog.MakeMeshData(md.name, GL_POINTS);
  out.AddVertices(sampled_verts);
  if (extract_normal) {
    out.AddAttribute(aNormal, sampled_norms, 3);
  }
  if (extract_color) {
    out.AddAttribute(aColor, sampled_cols, 3);
  }
  return out;
}
