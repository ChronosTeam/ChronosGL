part of chronosgl;

// only loads fully triangulated OBJ files

Future<MeshData2> loadObj(String url)
{
  Completer c = new Completer();
  HTML.HttpRequest hr = new HTML.HttpRequest();
  //hr.responseType = "arraybuffer";
  hr.open("GET", url);
  hr.onLoadEnd.listen( (e) {
    
    MeshData2 result = doLoadObj( hr.response);
    c.complete(result);
    
    
  });
  hr.send('');
  return c.future;
}

MeshData2 doLoadObj(String text)
{
  MeshData2 endResult = new MeshData2.empty();
  MeshData2 rawData = new MeshData2.empty();

    Map<String, int> facemap = new Map<String, int>();
    int index = 0;

    // This is a map which associates a range of indices with a name
    // The name comes from the 'g' tag (of the form "g NAME"). Indices
    // are part of one group until another 'g' tag is seen. If any indices
    // come before a 'g' tag, it is given the group name "_unnamed"
    // 'group' is an object whose property names are the group name and
    // whose value is a 2 element array with [<first index>, <num indices>]
    Map groups = new Map();
    List<int> currentGroup = new List<int>.from([-1, 0]);
    groups["_unnamed"] = currentGroup;

    List<String> lines = text.split("\n");
    for (String line2 in lines) {
        String line = line2.replaceAll("[ \t]+", " ").replaceFirst('\s\s*\$', "");

        // ignore comments
        if (line.length == 0 || line[0] == "#")
            continue;

        List<String> array = line.split(" ");
        if (array[0] == "g") {
            // new group
            currentGroup = [endResult.vertexIndices.length, 0];
            groups[array[1]] = currentGroup;
        }
        else if (array[0] == "v") {
          rawData.vertices.add(double.parse(array[1]));
          rawData.vertices.add(double.parse(array[2]));
          rawData.vertices.add(double.parse(array[3]));
        }
        else if (array[0] == "vt") {
          rawData.textureCoords.add(double.parse(array[1]));
          rawData.textureCoords.add(double.parse(array[2]));
        }
        else if (array[0] == "vn") {
          rawData.normals.add(double.parse(array[1]));
          rawData.normals.add(double.parse(array[2]));
          rawData.normals.add(double.parse(array[3]));
        }
        else if (array[0] == "f") {
            // face
            if (array.length != 4) {
                print("*** Error: face '"+line+"' not handled");
                continue;
            }

            for (int i = 1; i < 4; ++i) {
                if (! facemap.containsKey(array[i]) ) {
                    // add a new entry to the map and arrays
                  List<String> f = array[i].split("/");
                    int vtx, nor, tex;

                    if (f.length == 1) {
                        vtx = int.parse(f[0]) - 1;
                        nor = vtx;
                        tex = vtx;
                    }
                    else if (f.length == 3) {
                        vtx = int.parse(f[0]) - 1;
                        tex = int.parse(f[1]) - 1;
                        nor = int.parse(f[2]) - 1;
                    }
                    else {
                        print("*** Error: did not understand face '"+array[i]+"'");
                        return null;
                    }

                    // do the vertices
                    double x = 0.0;
                    double y = 0.0;
                    double z = 0.0;
                    if (vtx * 3 + 2 < rawData.vertices.length) {
                        x = rawData.vertices[vtx*3];
                        y = rawData.vertices[vtx*3+1];
                        z = rawData.vertices[vtx*3+2];
                    }
                    
                    endResult.vertices.add(x);
                    endResult.vertices.add(y);
                    endResult.vertices.add(z);

                    // do the textures
                    x = 0.0;
                    y = 0.0;
                    if (tex * 2 + 1 < rawData.textureCoords.length) {
                        x = rawData.textureCoords[tex*2];
                        y = rawData.textureCoords[tex*2+1];
                    }
                    
                    endResult.textureCoords.add(x);
                    endResult.textureCoords.add(y);

                    // do the normals
                    x = 0.0;
                    y = 0.0;
                    z = 1.0;
                    if (nor * 3 + 2 < rawData.normals.length) {
                        x = rawData.normals[nor*3];
                        y = rawData.normals[nor*3+1];
                        z = rawData.normals[nor*3+2];
                    }
                    
                    endResult.normals.add(x);
                    endResult.normals.add(y);
                    endResult.normals.add(z);

                    facemap[array[i]] = index++;
                }

                endResult.vertexIndices.add(facemap[array[i]]);
                currentGroup[1]++;
            }
        }
    }

    return endResult;
}
