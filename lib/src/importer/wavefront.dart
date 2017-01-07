part of importer;

GeometryBuilder GeometryFromWavefront(String text) {
  GeometryBuilder gb = new GeometryBuilder();
  gb.EnableAttribute(aTextureCoordinates);
  gb.EnableAttribute(aNormal);

  // This is a map which associates a range of indices with a name
  // The name comes from the 'g' tag (of the form "g NAME"). Indices
  // are part of one group until another 'g' tag is seen. If any indices
  // come before a 'g' tag, it is given the group name "_unnamed"
  // 'group' is an object whose property names are the group name and
  // whose value is a 2 element array with [<first index>, <num indices>]
  Map<String, int> groups = {};

  List<String> lines = text.split("\n");

  List<VM.Vector3> vertices = [];
  List<VM.Vector3> normals = [];
  List<VM.Vector2> uvs = [];

  final DateTime start = new DateTime.now();

  for (String line2 in lines) {
    String line = line2.replaceAll("[ \t]+", " ").replaceFirst('\s\s*\$', "");
    // ignore comments
    if (line.length == 0 || line[0] == "#") continue;

    List<String> array = line.split(" ");
    if (array[0] == "g") {
      groups[array[1]] = vertices.length;
    } else if (array[0] == "v") {
      vertices.add(new VM.Vector3(double.parse(array[1]),
          double.parse(array[2]), double.parse(array[3])));
    } else if (array[0] == "vt") {
      uvs.add(new VM.Vector2(double.parse(array[1]), double.parse(array[2])));
    } else if (array[0] == "vn") {
      normals.add(new VM.Vector3(double.parse(array[1]), double.parse(array[2]),
          double.parse(array[3])));
    } else if (array[0] == "f") {
      // face
      if (array.length != 4 && array.length != 5) {
        print("*** Error: face '" + line + "' not handled");
        continue;
      }

      List<VM.Vector3> faceVertices = [];
      List<VM.Vector3> faceNormal = [];
      List<VM.Vector2> faceUvs = [];
      for (int i = 1; i < array.length; ++i) {
        // add a new entry to the map and arrays
        List<String> f = array[i].split("/");
        assert(f.length > 0);
        while (f.length < 3) f.add("");

        int vtx = int.parse(f[0]) - 1;
        int tex = f[1] == "" ? -1 : int.parse(f[1]) - 1;
        int nor = f[2] == "" ? -1 : int.parse(f[2]) - 1;

        if (vtx < vertices.length) {
          faceVertices.add(vertices[vtx]);
        } else {
          faceVertices.add(new VM.Vector3.zero());
        }

        if (tex != -1 && tex < uvs.length) {
          faceUvs.add(uvs[tex]);
        } else {
          //print("problem uv $i ${tex}");
          faceUvs.add(new VM.Vector2.zero());
        }
        if (nor != -1 && nor < normals.length) {
          faceNormal.add(normals[nor]);
        } else {
          //print("problem normals $i ${nor}");
          faceNormal.add(new VM.Vector3.zero());
        }
      }
      if (array.length == 4) {
        gb.AddVerticesFace3(faceVertices);
      } else {
        gb.AddVerticesFace4(faceVertices);
      }
      gb.AddAttributesVector3(aNormal, faceNormal);
      gb.AddAttributesVector2(aTextureCoordinates, faceUvs);
    }
  }
  final Duration delta = new DateTime.now().difference(start);
  print("loaded (${delta}) ${gb}");
  return gb;
}
