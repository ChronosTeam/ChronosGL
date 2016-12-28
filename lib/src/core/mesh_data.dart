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

// MeshData presents attributes and vertex buffers associated with
// an object, e.g. a sphere, cube, etc.
// Protocol:
// After creation:
// * populate the object by calling AddFaceX
// * Call Finalize
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

  void ChangeBufferCanonical(String canonical, Float32List data) {
    if (debug) print("ChangeBuffer ${canonical} ${data.length}");
    _attributes[canonical] = data;
    ChangeArrayBuffer(_gl, _buffers[canonical], data);
  }

  int GetNumItems() {
    if (_faces != null) {
      return _faces.length;
    }
    return _vertices.length ~/ 3;
  }

  void AddVertices(List<VM.Vector3> vs) {
    Float32List data = new Float32List(vs.length * 3);
    for (int i = 0; i < vs.length; ++i) {
      data[i * 3 + 0] = vs[i].x;
      data[i * 3 + 1] = vs[i].y;
      data[i * 3 + 2] = vs[i].z;
    }
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

  void AddAttributesDouble(String canonical, List<double> lst) {
    assert(lst.length == _vertices.length ~/ 3);
    Float32List data = new Float32List.fromList(lst);
    _addBuffer(canonical, data);
    _attributes[canonical] = data;
  }

  void AddAttributesVector2(String canonical, List<VM.Vector2> lst) {
    assert(lst.length == _vertices.length ~/ 3);
    Float32List data = new Float32List(lst.length * 2);
    for (int i = 0; i < lst.length; ++i) {
      data[i * 2 + 0] = lst[i].x;
      data[i * 2 + 1] = lst[i].y;
    }
    _addBuffer(canonical, data);
    _attributes[canonical] = data;
  }

  void AddAttributesVector3(String canonical, List<VM.Vector3> lst) {
    assert(lst.length == _vertices.length ~/ 3);
    Float32List data = new Float32List(lst.length * 3);
    for (int i = 0; i < lst.length; ++i) {
      data[i * 3 + 0] = lst[i].x;
      data[i * 3 + 1] = lst[i].y;
      data[i * 3 + 2] = lst[i].z;
    }
    _addBuffer(canonical, data);
    _attributes[canonical] = data;
  }

  void AddAttributesVector4(String canonical, List<VM.Vector4> lst) {
    assert(lst.length == _vertices.length ~/ 3);
    Float32List data = new Float32List(lst.length * 4);
    for (int i = 0; i < lst.length; ++i) {
      data[i * 4 + 0] = lst[i].x;
      data[i * 4 + 1] = lst[i].y;
      data[i * 4 + 2] = lst[i].z;
      data[i * 4 + 3] = lst[i].w;
    }
    _addBuffer(canonical, data);
    _attributes[canonical] = data;
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

MeshData GeometryBuilderToMeshData(
    String name, WEBGL.RenderingContext gl, GeometryBuilder gb) {
  MeshData md = new MeshData(name, gl, WEBGL.TRIANGLES);
  md.AddVertices(gb.vertices);
  md.AddFaces(gb.GenerateFaceIndices());
  for (String canonical in gb.attributes.keys) {
    dynamic lst = gb.attributes[canonical];
    switch (lst[0].runtimeType) {
      case VM.Vector2:
        md.AddAttributesVector2(canonical, lst);
        break;
      case VM.Vector3:
        md.AddAttributesVector3(canonical, lst);
        break;
      case VM.Vector4:
        md.AddAttributesVector4(canonical, lst);
        break;
      default:
        assert(false);
        break;
    }
  }
  return md;
}
