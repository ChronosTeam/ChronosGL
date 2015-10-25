part of chronosgl;

class TextureCache {
  Map<String, TextureWrapper> textureCache = new Map<String, TextureWrapper>();
  ChronosGL chronosGL;
  RenderingContext gl;

  TextureCache(this.chronosGL) {
    gl = chronosGL.gl;
  }

  TextureWrapper add(String url, [bool clamp = false]) {
    return textureCache[url] =
        new TextureWrapper(this.gl, clamp: clamp, type: TEXTURE_2D);
  }

  void addCube(String name, String prefix, String suffix, {bool clamp: false,
      String nx: "nx", String px: "px", String ny: "ny", String py: "py",
      String nz: "nz", String pz: "pz"}) {
    TextureWrapper tw = textureCache[name] =
        new TextureWrapper(this.gl, cubemap: true, type: TEXTURE_CUBE_MAP);
    TextureWrapper temp;
    temp = textureCache[prefix + nx + suffix] = new TextureWrapper(this.gl,
        cubemap: true, type: TEXTURE_CUBE_MAP_NEGATIVE_X);
    tw.cubeTextureChildren.add(temp);
    temp = textureCache[prefix + px + suffix] = new TextureWrapper(this.gl,
        cubemap: true, type: TEXTURE_CUBE_MAP_POSITIVE_X);
    tw.cubeTextureChildren.add(temp);
    temp = textureCache[prefix + ny + suffix] = new TextureWrapper(this.gl,
        cubemap: true, type: TEXTURE_CUBE_MAP_NEGATIVE_Y);
    tw.cubeTextureChildren.add(temp);
    temp = textureCache[prefix + py + suffix] = new TextureWrapper(this.gl,
        cubemap: true, type: TEXTURE_CUBE_MAP_POSITIVE_Y);
    tw.cubeTextureChildren.add(temp);
    temp = textureCache[prefix + nz + suffix] = new TextureWrapper(this.gl,
        cubemap: true, type: TEXTURE_CUBE_MAP_NEGATIVE_Z);
    tw.cubeTextureChildren.add(temp);
    temp = textureCache[prefix + pz + suffix] = new TextureWrapper(this.gl,
        cubemap: true, type: TEXTURE_CUBE_MAP_POSITIVE_Z);
    tw.cubeTextureChildren.add(temp);

    tw.loaded = true;
  }

  TextureWrapper addSolidColor(String url, String fillStyle) {
    TextureWrapper tw = new TextureWrapper(this.gl, clamp: false);
    tw.loaded = true;
    tw.texture = chronosGL.getUtils().createSolidTexture(fillStyle);
    return textureCache[url] = tw;
  }

  TextureWrapper addCanvas(String url, HTML.CanvasElement canvas,
      {bool flipY: true}) {
    TextureWrapper tw = new TextureWrapper(this.gl, clamp: false);
    tw.loaded = true;
    tw.texture = chronosGL.getUtils().createTextureFromCanvas(canvas, flipY);
    return textureCache[url] = tw;
  }

  Texture get(String url) {
    return textureCache[url].texture;
  }

  TextureWrapper getTW(String url) {
    return textureCache[url];
  }

  void loadAllThenExecute(callBackFunc()) {
    List<Future<HTML.Event>> futures = new List<Future<HTML.Event>>();

    for (String url in textureCache.keys) {
      //print(url);
      TextureWrapper textureWrapper = textureCache[url];
      if (textureWrapper.loaded) continue;

      futures.add(textureWrapper.image.onLoad.first);

      textureWrapper.image.src = url;

      if (textureWrapper.cubemap) textureWrapper.loaded = true;
    }

    // TODO: check for error !!
    Future.wait(futures).then((List list) {
      for (String url in textureCache.keys) {
        TextureWrapper textureWrapper = textureCache[url];
        if (textureWrapper.loaded &&
            textureWrapper.type != TEXTURE_CUBE_MAP) continue;

        if (textureWrapper.cubemap &&
            textureWrapper.type != TEXTURE_CUBE_MAP) continue;

        gl.bindTexture(textureWrapper.type, textureWrapper.texture);
        gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, 1);
        gl.texParameteri(textureWrapper.type, TEXTURE_MAG_FILTER, LINEAR);
        gl.texParameteri(
            textureWrapper.type, TEXTURE_MIN_FILTER, LINEAR); // _MIPMAP_NEAREST
        if (textureWrapper.clamp) {
          gl.texParameteri(textureWrapper.type, TEXTURE_WRAP_S,
              CLAMP_TO_EDGE); // this fixes glitches on skybox seams
          gl.texParameteri(textureWrapper.type, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
        }

        if (textureWrapper.type == TEXTURE_CUBE_MAP) {
          for (TextureWrapper tw in textureWrapper.cubeTextureChildren) {
            gl.texImage2DImage(tw.type, 0, RGBA, RGBA, UNSIGNED_BYTE, tw.image);
          }
        } else {
          gl.texImage2DImage(textureWrapper.type, 0, RGBA, RGBA, UNSIGNED_BYTE,
              textureWrapper.image);
        }
        //gl.generateMipmap(gl.TEXTURE_2D);

        gl.bindTexture(TEXTURE_2D, null);
        textureWrapper.loaded = true;

        print("loaded: $url");
      }

      callBackFunc();
    });
  }

  int check() {
    print("check");
    int notReadyCount = 0;
    for (String url in textureCache.keys) {
      //console.log("check: " + url + " : " + textureCache[url].ready);
      if (!textureCache[url].loaded) {
        notReadyCount++;
      }
    }
    return notReadyCount;
  }
}

class TextureWrapper {
  Texture texture;
  HTML.ImageElement image = new HTML.ImageElement();
  bool loaded = false;
  bool clamp = false;
  bool cubemap = false;
  int type;
  List<TextureWrapper> cubeTextureChildren = new List<TextureWrapper>();

  TextureWrapper(RenderingContext gl,
      {this.clamp: false, this.cubemap: false, this.type: TEXTURE_2D}) {
    texture = gl.createTexture();
  }

  String toString() {
    return "${image.src} - loaded: $loaded, clamp: $clamp, cubemap: $cubemap, type: $type";
  }
}
