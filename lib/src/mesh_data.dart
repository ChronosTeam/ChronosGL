part of chronosgl;

class MeshData {

  List<double> vertices;
  List<double> normals;
  List<double> textureCoords;
  List<int> vertexIndices;
  Texture texture;
  Texture texture2;

  MeshData({this.vertices, this.textureCoords, this.normals, this.vertexIndices, this.texture, this.texture2});

  MeshData.empty() {
    vertices = new List<double>();
    textureCoords = new List<double>();
    normals = new List<double>();
    vertexIndices = new List<int>();
  }

  void optimize() {
    if (!(vertices is Float32List)) vertices = new Float32List.fromList(vertices);
    if ( textureCoords == null) textureCoords = new List<double>();
    if (!(textureCoords is Float32List)) textureCoords = new Float32List.fromList(textureCoords);
    if ( normals == null) normals = new List<double>();
    if (!(normals is Float32List)) normals = new Float32List.fromList(normals);
    if (!(vertexIndices is Uint16List)) vertexIndices = new Uint16List.fromList(vertexIndices);
  }


  Mesh createMesh() {
    optimize();
    return new Mesh(this);
  }

}
