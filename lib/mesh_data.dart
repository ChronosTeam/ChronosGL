part of chronos_gl;

class MeshData {
  
  Float32List vertices;
  Float32List textureCoords;
  Uint16List vertexIndices;
  Texture texture;
  
  MeshData({ this.vertices, this.textureCoords, this.vertexIndices, this.texture}) {
  }
  
  MeshData.empty(){
    vertices = new List<double>();
    textureCoords = new List<double>();
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
  
  MeshData2({ this.vertices, this.textureCoords, this.vertexIndices, this.texture}) {
  }
  
  MeshData2.empty(){
    vertices = new List<double>();
    textureCoords = new List<double>();
    normals = new List<double>();
    vertexIndices = new List<int>();
  }
  
  MeshData createMeshData() {
    return new MeshData( vertices : new Float32List.fromList(vertices), textureCoords : new Float32List.fromList(textureCoords), vertexIndices : new Uint16List.fromList(vertexIndices), texture : texture  );
  }
  
  Mesh createMesh() {
    return new Mesh( createMeshData() );
  }
  
}
