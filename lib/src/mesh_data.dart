part of chronosgl;

class MeshData {
  List<double> vertices;
  List<double> colors;
  List<double> normals;
  List<double> binormals;
  List<double> textureCoords;
  List<int> vertexIndices;
  bool isOptimized = false;

  MeshData({this.vertices, this.colors, this.textureCoords, this.normals, this.binormals, this.vertexIndices});

  MeshData.empty() {
    vertices = new List<double>();
    colors = new List<double>();
    textureCoords = new List<double>();
    normals = new List<double>();
    binormals = new List<double>();
    vertexIndices = new List<int>();
  }

  void optimize() {
    if (!(vertices is Float32List)) vertices = new Float32List.fromList(vertices);

    if (colors != null && !(colors is Float32List)) colors = new Float32List.fromList(colors);

    if (textureCoords != null && !(textureCoords is Float32List)) textureCoords = new Float32List.fromList(textureCoords);

    if (normals != null && !(normals is Float32List)) normals = new Float32List.fromList(normals);

    if (binormals != null && !(binormals is Float32List)) binormals = new Float32List.fromList(binormals);

    if (vertexIndices != null && !(vertexIndices is TypedData)) {
      vertexIndices = ChronosGL.useElementIndexUint ? new Uint32List.fromList(vertexIndices) : new Uint16List.fromList(vertexIndices);
    }
    isOptimized = true;
  }

  Mesh createMesh(Material m) {
    optimize();
    return new Mesh(this, m);
  }
  
  void generateEmptyNormals() {
    if( normals == null || normals.length != vertices.length) {
      normals = new List<double>.generate(vertices.length, (idx) => 0.0);
    }
    
  }
  
  Vector temp = new Vector();
  bool normalFromPoints(Vector a, Vector b, Vector c, Vector normal) {

    temp.set(b).subtract(a);
    normal.set(c).subtract(a);

    normal.cross(temp);
    double len = normal.length();
    if (len == 0) {
      return false;
    }

    normal.scale(-1 / len); // normalize // added the minus to make it the correct normal compared to the base cube
    return true;
  }

  void setVector( Vector v, int i) {
    i = vertexIndices[i]*3;
    v.set( vertices[i+0], vertices[i+1], vertices[i+2] );
  }
  
  Vector tempa = new Vector();
  Vector tempb = new Vector();
  Vector tempc = new Vector();
  Vector tempd = new Vector();
  MeshData generateNormalsAssumingTriangleMode() {
    if( normals == null || normals.length != vertices.length) {
      normals = new List<double>(vertices.length);
    }
    for (int i = 0; i < vertexIndices.length; i+=3) {
      setVector( tempa, i+0);
      setVector( tempb, i+1);
      setVector( tempc, i+2);
      normalFromPoints( tempa, tempb, tempc, tempd);
      for (int j = 0; j < 3; j++) {
        int t = vertexIndices[i+j]*3;
        normals[t+0] = tempd.array[0];
        normals[t+1] = tempd.array[1];
        normals[t+2] = tempd.array[2];
      }
    }
    return this;
  }
  
  // use this so normals have room and don't need to share a vertex
  // for example a cube can have 3 different normals for the same vertex
  // so we need 3 different places where we store the same vertex so we have room for 3 different normals
  // TODO: add UV Map and the other stuff
  MeshData deDeuplicateIndices() { 
    List<double> newVertices = new List<double>(vertexIndices.length*3);
    int pos=0;
    for (int i = 0; i < vertexIndices.length; i++) {
      int t = vertexIndices[i]*3;
      newVertices[pos++] = vertices[t+0];
      newVertices[pos++] = vertices[t+1];
      newVertices[pos++] = vertices[t+2];
    }
    for (int i = 0; i < vertexIndices.length; i++) {
      vertexIndices[i]=i;
    }
    vertices = newVertices;
    return this;
  }

  MeshData multiplyVertices(num m) {
    for (int i = 0; i < vertices.length; i++) {
      vertices[i] *= m;
    }
    return this;
  }
}
