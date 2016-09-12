part of chronosgl;

// only loads fully triangulated OBJ files

Future<MeshData> loadObj(String url) {
  Completer c = new Completer();
  HTML.HttpRequest hr = new HTML.HttpRequest();
  //hr.responseType = "arraybuffer";
  hr.open("GET", url);
  hr.onLoadEnd.listen((e) {
    MeshData result = doLoadObj(hr.response);
    c.complete(result);
  });
  hr.send('');
  return c.future as Future<MeshData>;
}

MeshData doLoadObj(String text) {
  MeshData md = new MeshData(text);
  md.EnableAttribute(aTextureCoordinates);
  md.EnableAttribute(aNormal);

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

  for (String line2 in lines) {
    String line = line2.replaceAll("[ \t]+", " ").replaceFirst('\s\s*\$', "");

    // ignore comments
    if (line.length == 0 || line[0] == "#") continue;

    List<String> array = line.split(" ");
    if (array[0] == "g") {
      groups[array[1]] = vertices.length;
    } else if (array[0] == "v") {
      vertices.add(new VM.Vector3(double.parse(array[1]), double.parse(array[2]),
          double.parse(array[3])));
    } else if (array[0] == "vt") {
      uvs.add(new VM.Vector2(double.parse(array[1]), double.parse(array[2])));
    } else if (array[0] == "vn") {
      normals.add(new VM.Vector3(double.parse(array[1]), double.parse(array[2]),
          double.parse(array[3])));
    } else if (array[0] == "f") {
      // face
      if (array.length != 4) {
        print("*** Error: face '" + line + "' not handled");
        continue;
      }

      List<VM.Vector3> faceVertices = [];
      List<VM.Vector3> faceNormal = [];
      List<VM.Vector2> faceUvs = [];
      for (int i = 1; i < 4; ++i) {
        // add a new entry to the map and arrays
        List<String> f = array[i].split("/");
        int vtx, nor, tex;

        if (f.length == 1) {
          vtx = int.parse(f[0]) - 1;
          nor = vtx;
          tex = vtx;
        } else if (f.length == 3) {
          vtx = int.parse(f[0]) - 1;
          tex = int.parse(f[1]) - 1;
          nor = int.parse(f[2]) - 1;
        } else {
          throw "*** Error: did not understand face ' ${array[i]}";
        }

        if (vtx < vertices.length) {
          faceVertices.add(vertices[vtx]);
        } else {
          faceVertices.add(new VM.Vector3.zero());
        }

        if (tex < uvs.length) {
          faceUvs.add(uvs[tex]);
        } else {
          faceUvs.add(new VM.Vector2.zero());
        }
        if (nor < normals.length) {
          faceNormal.add(normals[nor]);
        } else {
          faceNormal.add(new VM.Vector3.zero());
        }
      }
      md.AddFaces3(1);
      md.AddVertices(faceVertices);
      md.AddAttributesVector3(aNormal, faceNormal);
      md.AddAttributesVector2(aTextureCoordinates, faceUvs);
    }
  }

  return md;
}
