part of chronosgl;

class MeshData {

  List<double> vertices;
  List<double> colors;
  List<double> normals;
  List<double> binormals;
  List<double> textureCoords;
  List<int> vertexIndices;
  bool isOptimized=false;

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
    
    if ( colors != null && !(colors is Float32List)) colors = new Float32List.fromList(colors);

    if ( textureCoords != null && !(textureCoords is Float32List)) textureCoords = new Float32List.fromList(textureCoords);
    
    if ( normals != null && !(normals is Float32List)) normals = new Float32List.fromList(normals);
    
    if ( binormals != null && !(binormals is Float32List)) binormals = new Float32List.fromList(binormals);
    
    if ( vertexIndices != null && !(vertexIndices is TypedData)) {
      vertexIndices = ChronosGL.useElementIndexUint ? new Uint32List.fromList(vertexIndices) : new Uint16List.fromList(vertexIndices);
    }
    isOptimized=true;
  }

  Mesh createMesh() {
    optimize();
    return new Mesh(this);
  }

  void multiplyVertices(num m) {
    for(int i = 0; i < vertices.length; i++) {
      vertices[i] *= m;
    }
  }
}
