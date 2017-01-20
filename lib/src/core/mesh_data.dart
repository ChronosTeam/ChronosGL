part of core;

void ChangeArrayBuffer(
    WEBGL.RenderingContext gl, WEBGL.Buffer buffer, Float32List data) {
  gl.bindBuffer(WEBGL.ARRAY_BUFFER, buffer);
  gl.bufferData(WEBGL.ARRAY_BUFFER, data, WEBGL.DYNAMIC_DRAW);
}

WEBGL.Buffer CreateAndInitializeArrayBuffer(
    WEBGL.RenderingContext gl, Float32List data) {
  WEBGL.Buffer b = gl.createBuffer();
  ChangeArrayBuffer(gl, b, data);
  return b;
}

void ChangeElementArrayBuffer(
    WEBGL.RenderingContext gl, WEBGL.Buffer buffer, TypedData data) {
  gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, buffer);
  gl.bufferData(WEBGL.ELEMENT_ARRAY_BUFFER, data, WEBGL.DYNAMIC_DRAW);
}

WEBGL.Buffer CreateAndInitializeElementArrayBuffer(
    WEBGL.RenderingContext gl, TypedData data) {
  assert((data is Uint16List) || (data is Uint32List));
  WEBGL.Buffer b = gl.createBuffer();
  ChangeElementArrayBuffer(gl, b, data);
  return b;
}

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
  final WEBGL.RenderingContext _gl;
  final _drawMode;
  final Map<String, WEBGL.Buffer> _buffers = {};
  WEBGL.Buffer _indexBuffer;

  Float32List _vertices;
  List<int> _faces;
  Map<String, Float32List> _attributes = {};

  MeshData(String name, this._gl, this._drawMode) : super("meshdata:" + name);

  void clearData() {
    for (String canonical in _buffers.keys) {
      _gl.deleteBuffer(_buffers[canonical]);
    }
    if (_indexBuffer != null) {
      _gl.deleteBuffer(_indexBuffer);
    }
  }

  void _addBuffer(String canonical, Float32List data) {
    if (debug) print("AddBuffer ${canonical} ${data.length}");
    _buffers[canonical] = CreateAndInitializeArrayBuffer(_gl, data);
  }

  void ChangeAttribute(String canonical, Float32List data, int width) {
    if (debug) print("ChangeBuffer ${canonical} ${data.length}");
    assert(data.length ~/ width == _vertices.length ~/ 3);
    _attributes[canonical] = data;
    ChangeArrayBuffer(_gl, _buffers[canonical], data);
  }

  void ChangeVertices(Float32List data) {
    final String canonical = aVertexPosition;
    _attributes[canonical] = data;
    ChangeArrayBuffer(_gl, _buffers[canonical], data);
  }

  int GetNumItems() {
    if (_faces != null) {
      return _faces.length;
    }
    return _vertices.length ~/ 3;
  }

  void AddAttribute(String canonical, Float32List data, int width) {
    assert(data.length ~/ width == _vertices.length ~/ 3);
    _addBuffer(canonical, data);
    _attributes[canonical] = data;
  }

  void AddVertices(Float32List data) {
    _addBuffer(aVertexPosition, data);
    _vertices = data;
  }

  void AddFaces(List<int> faces) {
    if (globalUseElementIndexUint) {
      _faces = new Uint32List.fromList(faces);
    } else {
      _faces = new Uint16List.fromList(faces);
    }
    _indexBuffer =
        CreateAndInitializeElementArrayBuffer(_gl, _faces as TypedData);
  }

  @override
  void AddRenderInputs(RenderInputs program) {
    for (String canonical in _buffers.keys) {
      program.SetInputWithOrigin(this, canonical, _buffers[canonical]);
    }

    // should this really be here - interaction with indexer
    if (_indexBuffer != null) {
      program.SetInputWithOrigin(this, eArray, _indexBuffer);
    }
    program.SetInputWithOrigin(this, cDrawMode, _drawMode);
    program.SetInputWithOrigin(this, cNumItems, GetNumItems());
  }

  @override
  void RemoveRenderInputs(RenderInputs program) {
    for (String canonical in _buffers.keys) {
      program.Remove(canonical);
    }
    if (_indexBuffer != null) program.Remove(eArray);
    program.Remove(cDrawMode);
    program.Remove(cNumItems);
  }

  Iterable<String> GetAttributes() {
    return _attributes.keys;
  }

  /*
  @override
  String toString() {
    final int f = _faces.length;
    final int f3 = _faces3.length;
    final int f4 = _faces4.length;
    final int v = _vertices.length;
    return "MESH[${name}] F:${f} F3:${f3} F4:${f4} V:${v}";
  }
  */
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
    } else {
      assert(false);
    }
  }
}

MeshData GeometryBuilderToMeshData(
    String name, WEBGL.RenderingContext gl, GeometryBuilder gb) {
  MeshData md = new MeshData(name, gl, WEBGL.TRIANGLES);
  md.AddVertices(FlattenVector3List(gb.vertices));
  md.AddFaces(gb.GenerateFaceIndices());
  _GeometryBuilderAttributesToMeshData(gb, md);
  return md;
}

MeshData GeometryBuilderToMeshDataLines(
    String name, WEBGL.RenderingContext gl, GeometryBuilder gb) {
  MeshData md = new MeshData(name, gl, WEBGL.LINES);
  md.AddVertices(FlattenVector3List(gb.vertices));
  md.AddFaces(gb.GenerateLineIndices());
  _GeometryBuilderAttributesToMeshData(gb, md);
  return md;
}

MeshData LineEndPointsToMeshData(
    String name, WEBGL.RenderingContext gl, List<VM.Vector3> points) {
  MeshData md = new MeshData(name, gl, WEBGL.LINES);
  md.AddVertices(FlattenVector3List(points));
  List<int> faces = new List<int>(points.length);
  for (int i = 0; i < points.length; ++i) faces[i] = i;
  md.AddFaces(faces);
  return md;
}
