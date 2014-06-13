part of chronosgl;

class TextureCache {
  
  Map<String, TextureWrapper> textureCache = new Map<String, TextureWrapper>();
  ChronosGL chronosGL;
  RenderingContext gl;
  
  TextureCache(this.chronosGL)
  {
    gl = chronosGL.gl;
  }

  TextureWrapper add(String url, [bool clamp]) {
    textureCache[url] = new TextureWrapper(this.gl, clamp);
    return textureCache[url];
  }
  
  void addSolidColor(String url, String fillStyle) {
    TextureWrapper tw = new TextureWrapper(this.gl, false);
    tw.loaded = true;
    tw.texture = chronosGL.getUtils().createSolidTexture(fillStyle);
    textureCache[url] = tw;
  }

  Texture get(String url) {
    return textureCache[url].texture;
  }

  TextureWrapper getTW(String url) {
    return textureCache[url];
  }

  void loadAllThenExecute( callBackFunc(  ) ) {
    
    List<Future<HTML.Event>> futures = new List<Future<HTML.Event>>();
    
    for( String url in textureCache.keys)
    {
      print(url);
      TextureWrapper textureWrapper = textureCache[url];
      if( textureWrapper.loaded )
        continue;
      
      futures.add( textureWrapper.image.onLoad.first);
      
      textureWrapper.image.src = url;
    }
    

    // TODO: check for error !!
    Future.wait(futures).then( (List list) {
      
      for( String url in textureCache.keys)
      {
        TextureWrapper textureWrapper = textureCache[url];
        if( textureWrapper.loaded )
          continue;
        
        gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, 1);
        gl.bindTexture(TEXTURE_2D, textureWrapper.texture);
        gl.texImage2DImage(TEXTURE_2D, 0, RGBA, RGBA, UNSIGNED_BYTE, textureWrapper.image);
        gl.texParameteri(TEXTURE_2D, TEXTURE_MAG_FILTER, LINEAR);
        gl.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR); // _MIPMAP_NEAREST
        if( textureWrapper.clamp  )
        {
          gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE); // this fixes glitch on skybox seams
          gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
        }
        //gl.generateMipmap(gl.TEXTURE_2D);
        
        gl.bindTexture(TEXTURE_2D, null);
        textureWrapper.loaded = true;
        
        print( "loaded: $url");
      }
      
      callBackFunc();
      
    });
    
  }
  
  int check() {
    print("check");
    int notReadyCount = 0;
    for( String url in textureCache.keys )
    {
      //console.log("check: " + url + " : " + textureCache[url].ready);
      if( ! textureCache[url].loaded)
      {
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
  
  TextureWrapper(RenderingContext gl, bool clamp)
  {
    texture = gl.createTexture();
    this.clamp = clamp == null ? false : clamp;
  }
  
}
