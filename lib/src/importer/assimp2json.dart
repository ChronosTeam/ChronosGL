part of importer;

GeometryBuilder ReadOneMesh(Map mesh) {
  GeometryBuilder gb = new GeometryBuilder();
  String name = mesh['name'];

  assert(mesh.containsKey("vertices"), "no vertices");
  gb.AddVertices(ConvertToVector3List(mesh['vertices']));
  if (mesh.containsKey("normals")) {
    gb.EnableAttribute(aNormal);
    gb.AddAttributesVector3(aNormal, ConvertToVector3List(mesh['normals']));
  }
  if (mesh.containsKey("texturecoords")) {
    assert(mesh["texturecoords"].length == 1);
    gb.EnableAttribute(aTextureCoordinates);
    gb.AddAttributesVector2(
        aTextureCoordinates, ConvertToVector2List(mesh['texturecoords'][0]));
  }
  if (mesh.containsKey("tangents")) {
    gb.EnableAttribute(aTangent);
    gb.AddAttributesVector3(aTangent, ConvertToVector3List(mesh['tangents']));
  }
  if (mesh.containsKey("bitangents")) {
    gb.EnableAttribute(aBitangent);
    gb.AddAttributesVector3(aBitangent, ConvertToVector3List(mesh['bitangents']));
  }
  List<List<int>> faces = mesh['faces'];
  assert(faces != null, "no faces");
  for (List<int> f in faces) {
    assert (f.length == 3);
    gb.AddFace3(f[0], f[1], f[2]);
  }
  print("mesh ${name} ${gb} ${mesh.keys}");
  return gb;
}

List<GeometryBuilder> ReadAssimp2JsonMeshes(Map json) {
  List<GeometryBuilder> out = [];
  for (var m in json['meshes']) {
    out.add(ReadOneMesh(m));
  }
  return out;
}
