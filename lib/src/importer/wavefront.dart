part of importer;

// https://en.wikipedia.org/wiki/Wavefront_.obj_file

GeometryBuilder ImportGeometryFromWavefront(String text) {
  GeometryBuilder gb = GeometryBuilder();
  gb.EnableAttribute(aTexUV);
  gb.EnableAttribute(aNormal);

  // This is a map which associates a range of indices with a name
  // The name comes from the 'g' tag (of the form "g NAME"). Indices
  // are part of one group until another 'g' tag is seen. If any indices
  // come before a 'g' tag, it is given the group name "_unnamed"
  // 'group' is an object whose property names are the group name and
  // whose value is a 2 element array with [<first index>, <num indices>]
  Map<String, int> groups = {};

  final RegExp lineEnd = RegExp(r"\s*\n");
  final dynamic sep = RegExp(r"\s+");

  final List<VM.Vector3> vertices = [];
  final List<VM.Vector3> normals = [];
  final List<VM.Vector2> uvs = [];

  final DateTime start = DateTime.now();

  final List<VM.Vector3> faceVertices = [];
  final List<VM.Vector3> faceNormal = [];
  final List<VM.Vector2> faceUvs = [];

  final List<String> lines = text.split(lineEnd);

  for (String line in lines) {
    // ignore comments
    if (line.isEmpty || line[0] == "#") continue;
    List<String> array = line.split(sep);
    assert(!array.isEmpty);
    assert(!array.last.isEmpty);

    //print("### ${array}");

    if (array[0] == "g") {
      groups[array[1]] = vertices.length;
    } else if (array[0] == "v") {
      vertices.add(VM.Vector3(double.parse(array[1]), double.parse(array[2]),
          double.parse(array[3])));
    } else if (array[0] == "vt") {
      uvs.add(VM.Vector2(double.parse(array[1]), double.parse(array[2])));
    } else if (array[0] == "vn") {
      normals.add(VM.Vector3(double.parse(array[1]), double.parse(array[2]),
          double.parse(array[3])));
    } else if (array[0] == "f") {
      // face
      if (array.length != 4 && array.length != 5) {
        print("*** Error: face '" + line + "' not handled");
        continue;
      }

      faceVertices.clear();
      faceNormal.clear();
      faceUvs.clear();

      for (int i = 1; i < array.length; ++i) {
        // add a new entry to the map and arrays
        List<String> f = array[i].split("/");
        assert(f.length > 0);
        while (f.length < 3) f.add("");

        // TODO: support negative indices
        final int vtx = int.parse(f[0]) - 1;
        final int tex = f[1] == "" ? -1 : int.parse(f[1]) - 1;
        final int nor = f[2] == "" ? -1 : int.parse(f[2]) - 1;

        if (vtx < vertices.length) {
          faceVertices.add(vertices[vtx]);
        } else {
          faceVertices.add(VM.Vector3.zero());
        }

        if (uvs.length == 0) {
          faceUvs.add(VM.Vector2.zero());
        } else if (tex != -1 && tex < uvs.length) {
          faceUvs.add(uvs[tex]);
        } else {
          LogWarn("problem uv $i ${tex}");
          faceUvs.add(VM.Vector2.zero());
        }
        if (normals.length == 0) {
          faceNormal.add(VM.Vector3.zero());
        } else if (nor != -1 && nor < normals.length) {
          faceNormal.add(normals[nor]);
        } else {
          LogWarn("problem normals $i ${nor}");
          faceNormal.add(VM.Vector3.zero());
        }
      }
      if (array.length == 4) {
        gb.AddVerticesFace3TakeOwnership(faceVertices);
      } else {
        gb.AddVerticesFace4TakeOwnership(faceVertices);
      }
      gb.AddAttributesVector3(aNormal, faceNormal);
      gb.AddAttributesVector2(aTexUV, faceUvs);
    }
  }
  final Duration delta = DateTime.now().difference(start);
  LogInfo("Wavefront loaded in (${delta}) ${gb}");
  return gb;
}
