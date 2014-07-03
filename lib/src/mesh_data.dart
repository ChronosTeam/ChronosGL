part of chronosgl;

class MeshData {

  List<double> vertices;
  List<double> colors;
  List<double> normals;
  List<double> textureCoords;
  List<int> vertexIndices;
  Texture texture;
  Texture texture2;

  MeshData({this.vertices, this.colors, this.textureCoords, this.normals, this.vertexIndices, this.texture, this.texture2});

  MeshData.empty() {
    vertices = new List<double>();
    colors = new List<double>();
    textureCoords = new List<double>();
    normals = new List<double>();
    vertexIndices = new List<int>();
  }

  void optimize() {
    if (!(vertices is Float32List)) vertices = new Float32List.fromList(vertices);
    
    if ( colors != null && !(colors is Float32List)) colors = new Float32List.fromList(colors);

    if ( textureCoords != null && !(textureCoords is Float32List)) textureCoords = new Float32List.fromList(textureCoords);
    
    if ( normals != null && !(normals is Float32List)) normals = new Float32List.fromList(normals);
    
    if (!(vertexIndices is Uint16List)) vertexIndices = new Uint16List.fromList(vertexIndices);
  }


  Mesh createMesh() {
    optimize();
    return new Mesh(this);
  }

}
