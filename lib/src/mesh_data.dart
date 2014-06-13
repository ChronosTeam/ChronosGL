part of chronosgl;

class MeshData {
  
  Float32List vertices;
  Float32List textureCoords;
  Float32List normals;
  Uint16List vertexIndices;
  Texture texture;
  Texture texture2;
  
  MeshData({ this.vertices, this.textureCoords, this.normals, this.vertexIndices, this.texture, this.texture2});
  
  MeshData.empty(){
    vertices = new List<double>();
    textureCoords = new List<double>();
    normals = new List<double>();
    vertexIndices = new List<int>();
  }
  
  Mesh createMesh() {
    return new Mesh( this);
  }
  
}

class MeshData2 {
  
  List<double> vertices;
  List<double> normals;
  List<double> textureCoords;
  List<int> vertexIndices;
  Texture texture;
  Texture texture2;
  
  MeshData2({ this.vertices, this.textureCoords, this.normals, this.vertexIndices, this.texture, this.texture2});
  
  MeshData2.empty(){
    vertices = new List<double>();
    textureCoords = new List<double>();
    normals = new List<double>();
    vertexIndices = new List<int>();
  }
  
  MeshData createMeshData() {
    return new MeshData(
        vertices : new Float32List.fromList(vertices), 
        textureCoords : new Float32List.fromList(textureCoords),
        normals : new Float32List.fromList(normals),
        vertexIndices : new Uint16List.fromList(vertexIndices),
        texture : texture,
        texture2 : texture2
    );
  }
  
  Mesh createMesh() {
    return new Mesh( createMeshData() );
  }
  
}
