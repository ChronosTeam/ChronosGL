part of chronosgl;

class Utils
{
  ChronosGL chronosGL;
  RenderingContext gl;
  TextureCache textureCache;
  
  Utils( this.chronosGL)
  {
    gl = chronosGL.getRenderingContext();
    textureCache = chronosGL.getTextureCache();
  }
  
  Texture createSolidTexture(String fillStyle)
  {
    HTML.CanvasElement canvas = new HTML.CanvasElement(width:2, height:2);
    HTML.CanvasRenderingContext2D ctx = canvas.getContext('2d');
    ctx.fillStyle = fillStyle;
    ctx.fillRect( 0, 0, canvas.width, canvas.height);
    
    var texture = gl.createTexture();
    gl.bindTexture(TEXTURE_2D, texture);
    gl.texImage2DCanvas(TEXTURE_2D, 0, RGBA, RGBA, UNSIGNED_BYTE, canvas);
    gl.texParameteri(TEXTURE_2D, TEXTURE_MAG_FILTER, LINEAR);
    gl.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR); // _MIPMAP_NEAREST
    return texture;
  }
  
  Texture createCheckerboardTexture() {
    var pixels = new Uint8List.fromList([255, 255, 255,
                                             0,   0,   0,
                                             0,   0,   0,
                                             255, 255, 255]);
    var texture = gl.createTexture();
    gl.bindTexture(TEXTURE_2D, texture);
    gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    gl.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
    gl.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, NEAREST);
    gl.texParameteri(TEXTURE_2D, TEXTURE_MAG_FILTER, NEAREST);
    //  gl.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR);
    //  gl.texParameteri(TEXTURE_2D, TEXTURE_MAG_FILTER, LINEAR);
    gl.pixelStorei(UNPACK_ALIGNMENT, 1);
    gl.texImage2DTyped(TEXTURE_2D, 0, RGB, 2, 2, 0, RGB, UNSIGNED_BYTE, pixels);
    return texture;
}
  
  HTML.CanvasElement createGradientImage2( double time, HTML.CanvasElement canvas)
  {
    double sint = Math.sin( time);
    double n = (sint+1)/2;
    if( canvas == null)
      canvas = new HTML.CanvasElement(width:512, height:512);
    int d = 512;
    canvas.width = canvas.height = d;
    HTML.CanvasRenderingContext2D context = canvas.getContext('2d');
    context.rect(0, 0, d, d);
    HTML.CanvasGradient grad = context.createLinearGradient(0, 0, d*n, d);
    double cs1 = (360*n).floorToDouble();
    double cs2 = (90*n).floorToDouble();
    grad.addColorStop(0, 'hsla($cs1, 100%, 40%, 1)');
    grad.addColorStop(0.2, 'black');
    grad.addColorStop(0.3, 'black');
    grad.addColorStop(0.5, 'hsla($cs2, 100%, 40%, 1)');
    grad.addColorStop(0.7, 'black');
    grad.addColorStop(0.9, 'black');
    grad.addColorStop(1, 'hsla($cs1, 100%, 40%, 1)');
    context.fillStyle = grad;
    context.fill();
    return canvas;
  }

  
  Mesh getWall( Texture texture, int size)
  {
    List<double> verts = [
        -1.0*size, -1.0*size,  0.0,
         1.0*size, -1.0*size,  0.0,
         1.0*size,  1.0*size,  0.0,
        -1.0*size,  1.0*size,  0.0
      ];
      
    List<double> textureCoords = [
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0
      ];
      
    List<int> vertexIndices = [
        0, 1, 2,
        0, 2, 3
      ];
      return new Mesh( new MeshData(vertices:verts, textureCoords:textureCoords, vertexIndices:vertexIndices, texture:texture));
  }
  
  void addSkybox( String prefix, String suffix, String nx, String px, String nz, String pz, String ny, String py)
  {
    Texture tnx = textureCache.get(prefix+nx+suffix);
    Texture tpx = textureCache.get(prefix+px+suffix);
    Texture tnz = textureCache.get(prefix+nz+suffix);
    Texture tpz = textureCache.get(prefix+pz+suffix);
    Texture tny = textureCache.get(prefix+ny+suffix);
    Texture tpy = textureCache.get(prefix+py+suffix);

    Mesh skybox_nx = getWall(tnx, 1004);
    skybox_nx.setPos(-2.0,2.0,-1000.0);
    chronosGL.programBasic.addFollowCameraObject(skybox_nx);

    Mesh skybox_px = getWall(tpx, 1004);
    skybox_px.setPos(-2.0,2.0,1000.0);
    skybox_px.rotY( Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_px);

    Mesh skybox_nz = getWall(tnz, 1004);
    skybox_nz.setPos(-1000.0,2.0,-2.0);
    skybox_nz.rotY(0.5*Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_nz);

    Mesh skybox_pz = getWall(tpz, 1004);
    skybox_pz.setPos(1000.0,2.0,-2.0);
    skybox_pz.rotY( 1.5*Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_pz);

    Mesh skybox_ny = getWall(tny, 1004);
    skybox_ny.setPos( -2.0,-1000.0,-2.0);
    skybox_ny.rotX( 1.5*Math.PI);
    skybox_ny.rotZ( 1.5*Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_ny);

    Mesh skybox_py = getWall(tpy, 1004);
    skybox_py.setPos( -2.0,1000.0,-2.0);
    skybox_py.rotX( 0.5*Math.PI);
    skybox_py.rotZ( 0.5*Math.PI);
    chronosGL.programBasic.addFollowCameraObject(skybox_py);
  }
  
  MeshData createIcosahedron( int subdivisions) {
    return new Icosahedron(subdivisions);
  }
  
  MeshData createCube([Texture texture]) {
    return createCubeInternal(texture);
  }
  
  Mesh createTorusKnotMesh( {double radius:20.0, double tube:4.0, int segmentsR:128, int segmentsT:16, int p:2, int q:3, double heightScale:1.0, Texture texture}) {
    return createTorusKnot(radius:radius, tube:tube, segmentsR:segmentsR, segmentsT:segmentsT, p:p, q:q, heightScale:heightScale, texture:texture).createMesh();
  }
  
  MeshData createTorusKnot( {double radius:20.0, double tube:4.0, int segmentsR:128, int segmentsT:16, int p:2, int q:3, double heightScale:1.0, Texture texture}) {
    return createTorusKnotInternal( radius:radius, tube:tube, segmentsR:segmentsR, segmentsT:segmentsT, p:p, q:q, heightScale:heightScale, texture:texture);
  }
  
  Mesh addCube( [TextureWrapper textureWrapper]) {
    Texture t;
    if( textureWrapper!=null)
      t = textureWrapper.texture;
    return chronosGL.programBasic.add( createCube(t).createMesh());
  }

  Mesh addTorusKnot(  {double radius:20.0, double tube:4.0, int segmentsR:128, int segmentsT:16, int p:2, int q:3, double heightScale:1.0, TextureWrapper textureWrapper}) {
    Texture t;
    if( textureWrapper!=null)
      t = textureWrapper.texture;
    return chronosGL.programBasic.add( createTorusKnot( radius:radius, tube:tube, segmentsR:segmentsR, segmentsT:segmentsT, p:p, q:q, heightScale:heightScale, texture: t).createMesh());
  }
  

  //alias
  void addParticles(int numPoints, Texture texture) {
    addPointSprites( numPoints, texture);
  }
  
  void addPointSprites(int numPoints, Texture texture) {
    // TODO: make this asynchronous
    Math.Random rand = new Math.Random();
    Float32List vertices = new Float32List(numPoints*3);
    for( var i=0; i < vertices.length/3; i+=3)
    {
      vertices[i] = rand.nextDouble()*1000-500;
      vertices[i+1] = rand.nextDouble()*1000-500;
      vertices[i+2] = rand.nextDouble()*1000-500;
    }

    
    MeshData md = new MeshData(vertices: vertices, texture: texture );
    
    ShaderProgram pssp = chronosGL.programs['point_sprites'];
    if( pssp == null)
        pssp = chronosGL.createProgram( createPointSpritesShader());
    Mesh m= new Mesh( md, true);
    m.blend = true;
    m.name = 'point_sprites_mesh_'+pssp.objects.length.toString();
    pssp.add( m);
    
  }
  
  Future<Object> loadFile(String url, [bool binary=false])
  {
    Completer c = new Completer();
    HTML.HttpRequest hr = new HTML.HttpRequest();
    hr.open("GET", url);
    if( binary)
      hr.responseType = "arraybuffer";
    hr.onLoadEnd.listen( (e) {
      c.complete(hr.response);
    });
    hr.send();
    return c.future;
  }

  Future<Object> loadBinaryFile(String url)
  {
    return loadFile( url, true);
  }

  Future<Object> loadJsonFile(String url)
  {
    Completer c = new Completer();
    HTML.HttpRequest hr = new HTML.HttpRequest();
    hr.open("GET", url);
    hr.onLoadEnd.listen( (e) {
      c.complete(JSON.decode( hr.responseText));
    });
    hr.send();
    return c.future;
  }

  String getQueryVariable( String name) {
    String query = HTML.window.location.search.substring(1);
    List<String> vars = query.split("&");
    for (int i = 0; i < vars.length; i++) {
      List<String> pair = vars[i].split("=");
      if (pair[0] == name) {
        return Uri.decodeComponent(pair[1]);
      }
    }
    return null;
  }
    
}

