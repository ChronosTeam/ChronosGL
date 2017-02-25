part of core;


Float32List FlattenVector3List(List<VM.Vector3> v, [Float32List data = null]) {
  if (data == null) data = new Float32List(v.length * 3);
  for (int i = 0; i < v.length; ++i) {
    data[i * 3 + 0] = v[i].x;
    data[i * 3 + 1] = v[i].y;
    data[i * 3 + 2] = v[i].z;
  }
  return data;
}

Float32List FlattenVector2List(List<VM.Vector2> v, [Float32List data = null]) {
  if (data == null) data = new Float32List(v.length * 2);
  for (int i = 0; i < v.length; ++i) {
    data[i * 2 + 0] = v[i].x;
    data[i * 2 + 1] = v[i].y;
  }
  return data;
}

Float32List FlattenVector4List(List<VM.Vector4> v, [Float32List data = null]) {
  if (data == null) data = new Float32List(v.length * 4);
  for (int i = 0; i < v.length; ++i) {
    data[i * 4 + 0] = v[i].x;
    data[i * 4 + 1] = v[i].y;
    data[i * 4 + 2] = v[i].z;
    data[i * 4 + 3] = v[i].w;
  }
  return data;
}

Float32List FlattenMatrix4List(List<VM.Matrix4> v, [Float32List data = null]) {
  if (data == null) data = new Float32List(v.length * 16);
  for (int i = 0; i < v.length; ++i) {
    VM.Matrix4 m = v[i];
    for (int j = 0; j < 16; ++j) data[i * 16 + j] = m[j];
  }
  return data;
}

/// ## Class MeshData (is a RenderInputProvider)
/// presents attributes and vertex buffers associated with
/// an mesh, e.g. a sphere, cube, etc.
/// MeshData objects can be populated directly but often they
/// will derived from **GeometryBuilder** objects.
class MeshData extends RenderInputProvider {
  final ChronosGL _cgl;
  final _drawMode;
  final Map<String, WEBGL.Buffer> _buffers = {};
  WEBGL.Buffer _indexBuffer;
  int _indexBufferType = -1;

  Float32List _vertices = null;
  List<int> _faces;
  Map<String, Float32List> _attributes = {};

  MeshData(String name, this._cgl, this._drawMode) : super("meshdata:" + name);

  void clearData() {
    for (String canonical in _buffers.keys) {
      _cgl.gl.deleteBuffer(_buffers[canonical]);
    }
    if (_indexBuffer != null) {
      _cgl.gl.deleteBuffer(_indexBuffer);
    }
  }

  void _addBuffer(String canonical, Float32List data) {
    if (debug) print("AddBuffer ${canonical} ${data.length}");
    _buffers[canonical] = _cgl.CreateAndInitializeArrayBuffer(data);
  }

  void ChangeAttribute(String canonical, Float32List data, int width) {
    if (debug) print("ChangeBuffer ${canonical} ${data.length}");
    assert(data.length ~/ width == _vertices.length ~/ 3);
    _attributes[canonical] = data;
    _cgl.ChangeArrayBuffer(_buffers[canonical], data);
  }

  void ChangeVertices(Float32List data) {
    final String canonical = aVertexPosition;
    _attributes[canonical] = data;
    _cgl.ChangeArrayBuffer(_buffers[canonical], data);
  }

  int GetNumItems() {
    if (_faces != null) {
      return _faces.length;
    }
    return _vertices.length ~/ 3;
  }

  Float32List GetAttribute(String canonical) {
    return _attributes[canonical];
  }

  void AddAttribute(String canonical, Float32List data, int width) {
    assert(data.length ~/ width == _vertices.length ~/ 3);
    _addBuffer(canonical, data);
    _attributes[canonical] = data;
  }

  void AddVertices(Float32List data) {
    final String canonical = aVertexPosition;
    _addBuffer(canonical, data);
    _attributes[canonical] = data;
    _vertices = data;
  }

  void AddFaces(List<int> faces) {
    assert(_vertices != null);
    if (_vertices.length < 3 * 256) {
      _faces = new Uint8List.fromList(faces);
      _indexBufferType = WEBGL.UNSIGNED_BYTE;
    } else if (_vertices.length < 3 * 65536) {
      _faces = new Uint16List.fromList(faces);
      _indexBufferType = WEBGL.UNSIGNED_SHORT;
    } else {
      _faces = new Uint32List.fromList(faces);
      _indexBufferType = WEBGL.UNSIGNED_INT;
    }
    _indexBuffer =
        _cgl.CreateAndInitializeElementArrayBuffer(_faces as TypedData);
  }

  @override
  void AddRenderInputs(RenderInputs program) {
    for (String canonical in _buffers.keys) {
      program.SetInputWithOrigin(this, canonical, _buffers[canonical]);
    }

    // should this really be here - interaction with indexer
    if (_indexBuffer != null) {
      program.SetInputWithOrigin(this, eArray, _indexBuffer);
      program.SetInputWithOrigin(this, eArrayType, _indexBufferType);
    }
    program.SetInputWithOrigin(this, cDrawMode, _drawMode);
    program.SetInputWithOrigin(this, cNumItems, GetNumItems());
  }

  @override
  void RemoveRenderInputs(RenderInputs program) {
    for (String canonical in _buffers.keys) {
      program.Remove(canonical);
    }
    if (_indexBuffer != null) {
      program.Remove(eArray);
      program.Remove(eArrayType);
    }
    program.Remove(cDrawMode);
    program.Remove(cNumItems);
  }

  Iterable<String> GetAttributes() {
    return _attributes.keys;
  }

  @override
  String toString() {
    List<String> lst = ["Faces:${_faces.length}"];
    for (String c in _attributes.keys) {
      lst.add("${c}:${_attributes[c].length}");
    }

    return "MESH[${name}] " + lst.join("  ");
  }
}

void _GeometryBuilderAttributesToMeshData(GeometryBuilder gb, MeshData md) {
  for (String canonical in gb.attributes.keys) {
    dynamic lst = gb.attributes[canonical];
    if (lst[0].runtimeType == VM.Vector2) {
      md.AddAttribute(canonical, FlattenVector2List(lst), 2);
    } else if (lst[0].runtimeType == VM.Vector3) {
      md.AddAttribute(canonical, FlattenVector3List(lst), 3);
    } else if (lst[0].runtimeType == VM.Vector4) {
      md.AddAttribute(canonical, FlattenVector4List(lst), 4);
    } else if (lst[0].runtimeType == double) {
      md.AddAttribute(canonical, new Float32List.fromList(lst), 1);
    } else {
      assert(false,
          "unknown type for ${canonical} ${lst} [${lst[0].runtimeType}]");
    }
  }
}

MeshData GeometryBuilderToMeshData(
    String name, ChronosGL cgl, GeometryBuilder gb) {
  MeshData md =
      new MeshData(name, cgl, gb.pointsOnly ? WEBGL.POINTS : WEBGL.TRIANGLES);
  md.AddVertices(FlattenVector3List(gb.vertices));
  if (!gb.pointsOnly) md.AddFaces(gb.GenerateFaceIndices());
  _GeometryBuilderAttributesToMeshData(gb, md);
  return md;
}

MeshData GeometryBuilderToMeshDataLines(
    String name, ChronosGL cgl, GeometryBuilder gb) {
  MeshData md = new MeshData(name, cgl, WEBGL.LINES);
  md.AddVertices(FlattenVector3List(gb.vertices));
  md.AddFaces(gb.GenerateLineIndices());
  _GeometryBuilderAttributesToMeshData(gb, md);
  return md;
}

MeshData LineEndPointsToMeshData(
    String name, ChronosGL cgl, List<VM.Vector3> points) {
  MeshData md = new MeshData(name, cgl, WEBGL.LINES);
  md.AddVertices(FlattenVector3List(points));
  List<int> faces = new List<int>(points.length);
  for (int i = 0; i < points.length; ++i) faces[i] = i;
  md.AddFaces(faces);
  return md;
}

MeshData ExtractWireframeNormals(ChronosGL cgl, MeshData md, [scale = 1.0]) {
  assert(md._drawMode == WEBGL.TRIANGLES);
  MeshData out = new MeshData(md.name, cgl, WEBGL.LINES);
  final Float32List vertices = md.GetAttribute(aVertexPosition);
  final Float32List normals = md.GetAttribute(aNormal);
  assert(vertices.length == normals.length);
  Float32List v = new Float32List(2 * vertices.length);
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
  List<int> lines = new List<int>(n);
  for (int i = 0; i < n; i++) {
    lines[i] = i;
  }

  out.AddFaces(lines);
  return out;
}

MeshData ExtractWireframe(ChronosGL cgl, MeshData md) {
  assert(md._drawMode == WEBGL.TRIANGLES);
  MeshData out = new MeshData(md.name, cgl, WEBGL.LINES);
  out.AddVertices(md._vertices);
  final List<int> faces = md._faces;
  List<int> lines = new List<int>(faces.length * 2);
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
