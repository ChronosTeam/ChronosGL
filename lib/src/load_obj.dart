part of chronosgl;

// only loads fully triangulated OBJ files

Future<MeshData> loadObj(String url, WEBGL.RenderingContext gl) {
  Completer c = new Completer();
  HTML.HttpRequest hr = new HTML.HttpRequest();
  //hr.responseType = "arraybuffer";
  hr.open("GET", url);
  hr.onLoadEnd.listen((e) {
    MeshData result = doLoadObj(url, hr.response, gl);
    c.complete(result);
  });
  hr.send('');
  return c.future as Future<MeshData>;
}

MeshData doLoadObj(String url, String text, WEBGL.RenderingContext gl) {
  MeshData md = new MeshData(url, gl);
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
      md.AddFaces3(1);
      md.AddVertices(faceVertices);
      md.AddAttributesVector3(aNormal, faceNormal);
      md.AddAttributesVector2(aTextureCoordinates, faceUvs);
    }
  }
  final Duration delta = new DateTime.now().difference(start);
  print("loaded (${delta}) ${md}");
  return md;
}

HTML.CanvasElement MakeSolidColorCanvas(String fillStyle) {
  HTML.CanvasElement canvas = new HTML.CanvasElement(width: 2, height: 2);
  HTML.CanvasRenderingContext2D ctx = canvas.getContext('2d');
  ctx.fillStyle = fillStyle;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return canvas;
}

class CanvasTexture extends Texture {
  HTML.CanvasElement _canvas;

  CanvasTexture(String url, this._canvas,
      [textureType = WEBGL.TEXTURE_2D])
      : super(textureType, url);

  CanvasTexture.SolidColor(String url, String fillStyle,
      [textureType = WEBGL.TEXTURE_2D])
      : super(textureType, url) {
    _canvas = MakeSolidColorCanvas(fillStyle);
  }

  @override
  void Install(WEBGL.RenderingContext gl) {
    // Check for CubeChild
    if (GetTextureType() != WEBGL.TEXTURE_2D) return;
    SetTexture(gl.createTexture());
    gl.bindTexture(GetTextureType(), GetTexture());
    gl.texImage2D(
        GetTextureType(), 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _canvas);
    properties.Install(gl, GetTextureType());
    int err = gl.getError();
    assert(err == WEBGL.NO_ERROR);
    gl.bindTexture(GetTextureType(), null);
  }

  void UpdateFromCanvas(WEBGL.RenderingContext gl) {
    gl.bindTexture(GetTextureType(), GetTexture());
    gl.texImage2D(
        GetTextureType(), 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _canvas);
    gl.bindTexture(GetTextureType(), null);
  }

  @override
  void InstallAsCubeChild(WEBGL.RenderingContext gl) {
    gl.texImage2D(
        GetTextureType(), 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _canvas);
  }
}

class ImageTexture extends Texture {
  HTML.ImageElement _image;
  Future<dynamic> _future;

  ImageTexture(String url, [textureType = WEBGL.TEXTURE_2D])
      : super(textureType, url) {
    _image = new HTML.ImageElement();
    _future = _image.onLoad.first;
    _image.src = url;
  }

  @override
  void Install(WEBGL.RenderingContext gl) {
    // Check for CubeChild
    if (GetTextureType() != WEBGL.TEXTURE_2D) return;
    SetTexture(gl.createTexture());
    gl.bindTexture(GetTextureType(), GetTexture());
    gl.texImage2D(
        GetTextureType(), 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _image);
    properties.Install(gl, GetTextureType());
    int err = gl.getError();
    assert(err == WEBGL.NO_ERROR);
    gl.bindTexture(GetTextureType(), null);
  }

  @override
  void InstallAsCubeChild(WEBGL.RenderingContext gl) {
    gl.texImage2D(
        GetTextureType(), 0, WEBGL.RGBA, WEBGL.RGBA, WEBGL.UNSIGNED_BYTE, _image);
  }

  @override
  Future<dynamic> GetFuture() {
    return _future;
  }
}

class CubeTexture extends Texture {
  List<Texture> _cubeChildren;

  CubeTexture(String url, String prefix, String suffix) :
        super(WEBGL.TEXTURE_CUBE_MAP, url) {
    _cubeChildren = [
      new ImageTexture(
          prefix + "nx" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_X),
      new ImageTexture(
          prefix + "px" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_X),
      new ImageTexture(
          prefix + "ny" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Y),
      new ImageTexture(
          prefix + "py" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Y),
      new ImageTexture(
          prefix + "nz" + suffix, WEBGL.TEXTURE_CUBE_MAP_NEGATIVE_Z),
      new ImageTexture(
          prefix + "pz" + suffix, WEBGL.TEXTURE_CUBE_MAP_POSITIVE_Z),
    ];
    properties.clamp = true;
  }

  CubeTexture.fromTextures(String url, List<Texture> texs) : super(WEBGL.TEXTURE_CUBE_MAP, url) {
    _cubeChildren = texs;
    properties.clamp = true;
  }

  @override
  void Install(WEBGL.RenderingContext gl) {
    SetTexture(gl.createTexture());
    gl.bindTexture(WEBGL.TEXTURE_CUBE_MAP, GetTexture());
    for (Texture child in _cubeChildren) {
      child.InstallAsCubeChild(gl);
    }
    properties.Install(gl, WEBGL.TEXTURE_CUBE_MAP);
    int err = gl.getError();
    assert(err == WEBGL.NO_ERROR);
    gl.bindTexture(WEBGL.TEXTURE_CUBE_MAP, null);
  }
}
