part of shapes;



GeometryBuilder QuadGeometry(num size) {
  List<VM.Vector3> vertices = [
    new VM.Vector3(-1.0 * size, -1.0 * size, 0.0),
    new VM.Vector3(1.0 * size, -1.0 * size, 0.0),
    new VM.Vector3(1.0 * size, 1.0 * size, 0.0),
    new VM.Vector3(-1.0 * size, 1.0 * size, 0.0)
  ];

  List<VM.Vector2> uvs = [
    new VM.Vector2(0.0, 0.0),
    new VM.Vector2(1.0, 0.0),
    new VM.Vector2(1.0, 1.0),
    new VM.Vector2(0.0, 1.0)
  ];

  GeometryBuilder gb = new GeometryBuilder();
  gb.EnableAttribute(aTextureCoordinates);
  gb.AddVerticesFace4(vertices);
  gb.AddAttributesVector2(aTextureCoordinates, uvs);
  return gb;
}
