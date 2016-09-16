part of chronosgl;

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

// MeshData presents attributes and vertex buffers associated with
// an object, e.g. a sphere, cube, etc.
class MeshData extends RenderInputProvider {
  final WEBGL.RenderingContext _gl;

  final Map<String, WEBGL.Buffer> _buffers = {};
  WEBGL.Buffer _indexBuffer;
  int numItems = 0;
  List<Face1> _points1 = [];
  List<Face2> _lines2 = [];
  List<Face3> _faces3 = [];
  List<Face4> _faces4 = [];
  List<double> _vertices = [];
  List<int> _faces = [];
  Map<String, List<double>> _attributes = {};

  MeshData(String name, this._gl) : super("meshdata:" + name);

  int DrawMode() {
    if (_points1.length > 0) {
      return WEBGL.POINTS;
    } else if (_lines2.length > 0) {
      return WEBGL.LINES;
    } else {
      return WEBGL.TRIANGLES;
    }
  }

  void clearData() {
    for (String canonical in _buffers.keys) {
      _gl.deleteBuffer(_buffers[canonical]);
    }
    if (_indexBuffer != null) {
      _gl.deleteBuffer(_indexBuffer);
    }
  }

  void AddBuffer(String canonical, Float32List data) {
    if (debug) print("AddBuffer ${canonical} ${data.length}");
    _buffers[canonical] = CreateAndInitializeArrayBuffer(_gl, data);
  }

  void ChangeBufferCanonical(String canonical, Float32List data) {
    if (debug) print("ChangeBuffer ${canonical} ${data.length}");
    ChangeArrayBuffer(_gl, _buffers[canonical], data);
  }

  bool UsesArrayBuffer() {
    return _points1.length == 0;
  }

  void SanityCheck() {
    if (_points1.length > 0) {
      assert(_lines2.length == 0 && _faces3.length == 0 && _faces4.length == 0);
    } else if (_lines2.length > 0) {
      assert(
          _points1.length == 0 && _faces3.length == 0 && _faces4.length == 0);
    }

    int maxIndexFace1 = -1;
    for (Face1 f in _points1) {
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

  void Finalize() {
    AddBuffer(aVertexPosition, GetVertexData());

    for (String canonical in GetAttributes()) {
      AddBuffer(canonical, GetAttributeData(canonical));
    }

    List<int> indices = GetVertexIndices();
    if (indices != null) {
      numItems = indices.length;
      if (ChronosGL.useElementIndexUint) {
        _indexBuffer = CreateAndInitializeElementArrayBuffer(
            _gl, new Uint32List.fromList(indices));
      } else {
        _indexBuffer = CreateAndInitializeElementArrayBuffer(
            _gl, new Uint16List.fromList(indices));
      }
    } else {
      numItems = GetVertexData().length ~/ 3;
    }
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
  }

  @override
  void RemoveRenderInputs(RenderInputs program) {
    for (String canonical in _buffers.keys) {
      program.Remove(canonical);
    }
    if (_indexBuffer != null) program.Remove(eArray);
  }

  Iterable<String> GetAttributes() {
    return _attributes.keys;
  }

  // Note, this is meant to be called only once at the when everything
  // is done.
  // * It would also be nice to preserve the incoming structure
  //   of the attribute data rather then flatten everything to
  //   a List<double>
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
    if (_points1.length > 0) return null;
    if (_faces.isEmpty) {
      _faces = new Uint32List(
          _lines2.length * 2 + _faces3.length * 3 + _faces4.length * 6);
      int i = 0;
      for (Face2 l2 in _lines2) {
        _faces[i + 0] = l2.a;
        _faces[i + 1] = l2.b;
        i += 2;
      }
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

  bool HasAttribute(String canonical) {
    return _attributes.containsKey(canonical);
  }

  void AddFaces1(int n) {
    int v = _vertices.length ~/ 3;
    for (int i = 0; i < n; i++, v++) {
      _points1.add(new Face1(v));
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
  void AddVertices(List<VM.Vector3> lst) {
    for (VM.Vector3 v in lst) {
      _vertices.addAll(v.storage);
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

  void AddAttributesDouble(String canonical, List<double> lst) {
    _attributes[canonical].addAll(lst);
  }

  void AddAttributesVector3(String canonical, List<VM.Vector3> lst) {
    for (VM.Vector3 v in lst) {
      _attributes[canonical].addAll(v.storage);
    }
  }

  void AddAttributesVector2(String canonical, List<VM.Vector2> lst) {
    for (VM.Vector2 v in lst) {
      _attributes[canonical].addAll(v.storage);
    }
  }

  void AddAttributesVector4(String canonical, List<VM.Vector4> lst) {
    for (VM.Vector4 v in lst) {
      _attributes[canonical].addAll(v.storage);
    }
  }
  /*
    void generateEmptyNormals() {
      if (normals.length != vertices.length) {
        normals = new List<double>.generate(vertices.length, (idx) => 0.0);
      }
    }*/

  VM.Vector3 temp = new VM.Vector3.zero();

  bool normalFromPoints(
      VM.Vector3 a, VM.Vector3 b, VM.Vector3 c, VM.Vector3 normal) {
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

  // add support for Face4
  void generateWireframeCenters() {
    if (!_attributes.containsKey(aCenter)) EnableAttribute(aCenter);
    List<double> centers = _attributes[aCenter];
    while (centers.length < _vertices.length * 4 ~/ 3) {
      centers.add(0.0);
    }
    void setCenter(VM.Vector4 n, int i) {
      centers[4 * i + 0] = n.x;
      centers[4 * i + 1] = n.y;
      centers[4 * i + 2] = n.z;
      centers[4 * i + 3] = n.w;
    }

    VM.Vector4 a3 = new VM.Vector4(1.0, 0.0, 0.0, 0.0);
    VM.Vector4 b3 = new VM.Vector4(0.0, 1.0, 0.0, 0.0);
    VM.Vector4 c3 = new VM.Vector4(0.0, 0.0, 1.0, 0.0);

    for (Face3 f in _faces3) {
      setCenter(a3, f.a);
      setCenter(b3, f.b);
      setCenter(c3, f.c);
    }

    VM.Vector4 a4 = new VM.Vector4(1.0, 0.0, 0.0, 1.0);
    VM.Vector4 b4 = new VM.Vector4(1.0, 1.0, 0.0, 1.0);
    VM.Vector4 c4 = new VM.Vector4(0.0, 1.0, 0.0, 1.0);
    VM.Vector4 d4 = new VM.Vector4(0.0, 0.0, 0.0, 1.0);

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
    VM.Vector3 tempa = new VM.Vector3.zero();
    VM.Vector3 tempb = new VM.Vector3.zero();
    VM.Vector3 tempc = new VM.Vector3.zero();
    VM.Vector3 norm = new VM.Vector3.zero();

    void setVector(VM.Vector3 v, int i) {
      v.setValues(
          _vertices[i * 3 + 0], _vertices[i * 3 + 1], _vertices[i * 3 + 2]);
    }

    List<double> normals = _attributes[aNormal];
    while (normals.length < _vertices.length) {
      normals.add(0.0);
    }

    void setNormal(VM.Vector3 n, int i) {
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

  void generateRadialNormals(VM.Vector3 center) {
    if (!_attributes.containsKey(aNormal)) EnableAttribute(aNormal);
    VM.Vector3 norm = new VM.Vector3.zero();

    List<double> normals = _attributes[aNormal];
    while (normals.length < _vertices.length) {
      normals.add(0.0);
    }

    for (int i = 0; i < _vertices.length; i += 3) {
      norm.setValues(_vertices[i + 0], _vertices[i + 1], _vertices[i + 2]);
      norm.sub(center);
      norm.normalize();
      normals[i + 0] = norm.x;
      normals[i + 1] = norm.y;
      normals[i + 2] = norm.z;
    }
  }

  void setFace4UV(
      int n, VM.Vector2 a, VM.Vector2 b, VM.Vector2 c, VM.Vector2 d) {
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
  @override
  String toString() {
    return "MESH[${name}] F:${_faces.length} F3:${_faces3.length} V:${_vertices.length}";
  }
}

// InstancerData presents attributes and vertex buffers associated with
// instancing.
class InstancerData extends RenderInputProvider {
  final WEBGL.RenderingContext _gl;

  final Map<String, WEBGL.Buffer> _buffers = {};
  int numInstances;

  InstancerData(String name, this._gl, this.numInstances) : super(name);

  void AddBuffer(String canonical, Float32List data) {
    _buffers[canonical] = CreateAndInitializeArrayBuffer(_gl, data);
  }

  void ChangeBufferCanonical(String canonical, Float32List data) {
    ChangeArrayBuffer(_gl, _buffers[canonical], data);
  }

  @override
  void AddRenderInputs(RenderInputs program) {
    for (String canonical in _buffers.keys) {
      program.SetInputWithOrigin(this, canonical, _buffers[canonical]);
    }
  }

  @override
  void RemoveRenderInputs(RenderInputs program) {
    for (String canonical in _buffers.keys) {
      program.Remove(canonical);
    }
  }
}
