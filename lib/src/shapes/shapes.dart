part of shapes;


MeshData ShapeQuad(WEBGL.RenderingContext gl, int size) {
    MeshData md = new MeshData("quad", gl);
    md.EnableAttribute(aTextureCoordinates);

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

    md.AddFace4(0, 1, 2, 3);
    md.AddVertices(vertices);
    md.AddAttributesVector2(aTextureCoordinates, uvs);
    return md;
  }
