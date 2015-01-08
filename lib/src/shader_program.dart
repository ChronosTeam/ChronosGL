part of chronosgl;

class ShaderObject {
  ShaderObject(this.name);
  String name;
  String vertexShader;
  String fragmentShader;
  
  String vertexPositionAttribute;
  String colorsAttribute;
  String textureCoordinatesAttribute;
  String normalAttribute;
  String binormalAttribute;
  
  String transformationMatrixUniform;
  String modelViewMatrixUniform;
  String viewMatrixUniform;
  String perpectiveMatrixUniform;
  String textureSamplerUniform;
  String texture2SamplerUniform;
  String textureCubeSamplerUniform;
  String colorUniform; // 3 floats
  String cameraNear;
  String cameraFar;
  String canvasSize; // canvas width and height
  String timeUniform;
  String pointLightLocationUniform;
  
  String vertexShaderHeader="";
  String vertexShaderBody="";
  String fragmentShaderHeader="";
  String fragmentShaderBody="";
}

class ShaderProgram implements Drawable {
  ChronosGL chronosGL;
  ShaderObject shaderObject;
  String name;
  RenderingContext gl;
  Program program;
  int vertexPositionAttribute;
  int colorsAttribute;
  int textureCoordAttribute;
  int normalAttribute;
  int binormalAttribute;
  UniformLocation transformationMatrixUniform;
  UniformLocation modelViewMatrixUniform;
  UniformLocation viewMatrixUniform;
  UniformLocation perpectiveMatrixUniform;
  UniformLocation textureSamplerUniform;
  UniformLocation texture2SamplerUniform;
  UniformLocation textureCubeSamplerUniform;
  Uniform colorUniform;
  UniformLocation cameraNear;
  UniformLocation cameraFar;
  UniformLocation size;
  UniformLocation timeUniform;
  Uniform pointLightLocationUniform;
  
  bool debug = false;
  
  Matrix4 mvMatrix = new Matrix4();
  List<Node> followCameraObjects = new List<Node>(); 
  List<Node> objects = new List<Node>();
  List<Instancer> instancers = new List<Instancer>();
  
  ShaderProgram( this.chronosGL, this.shaderObject, this.name)
  {
    
    gl = chronosGL.getRenderingContext();
  
    ShaderUtils su = new ShaderUtils(gl);
    program = su.getProgram( shaderObject.vertexShader, shaderObject.fragmentShader);
    
    vertexPositionAttribute = gl.getAttribLocation(program, shaderObject.vertexPositionAttribute);

    if( shaderObject.colorsAttribute != null)
      colorsAttribute = gl.getAttribLocation(program, shaderObject.colorsAttribute);

    if( shaderObject.textureCoordinatesAttribute != null)
      textureCoordAttribute = gl.getAttribLocation(program, shaderObject.textureCoordinatesAttribute);

    if( shaderObject.normalAttribute != null)
      normalAttribute = gl.getAttribLocation(program, shaderObject.normalAttribute);

    if( shaderObject.binormalAttribute != null)
      binormalAttribute = gl.getAttribLocation(program, shaderObject.binormalAttribute);

    perpectiveMatrixUniform = getUniformLocation( shaderObject.perpectiveMatrixUniform);
    modelViewMatrixUniform = getUniformLocation( shaderObject.modelViewMatrixUniform);

    if( shaderObject.viewMatrixUniform != null)
      viewMatrixUniform = getUniformLocation( shaderObject.viewMatrixUniform);

    if( shaderObject.textureSamplerUniform != null)
      textureSamplerUniform = getUniformLocation( shaderObject.textureSamplerUniform);

    if( shaderObject.texture2SamplerUniform != null)
      texture2SamplerUniform = getUniformLocation( shaderObject.texture2SamplerUniform);

    if( shaderObject.textureCubeSamplerUniform != null)
      textureCubeSamplerUniform = getUniformLocation( shaderObject.textureCubeSamplerUniform);

    if( shaderObject.colorUniform != null)
      colorUniform = getUniform( shaderObject.colorUniform);

    if( shaderObject.cameraNear != null)
      cameraNear = getUniformLocation( shaderObject.cameraNear);

    if( shaderObject.cameraFar != null)
      cameraFar = getUniformLocation( shaderObject.cameraFar);
    
    if( shaderObject.canvasSize != null)
      size = getUniformLocation( shaderObject.canvasSize);
    
    if( shaderObject.transformationMatrixUniform != null)
      transformationMatrixUniform = getUniformLocation( shaderObject.transformationMatrixUniform);

    if( shaderObject.timeUniform != null)
      timeUniform = getUniformLocation( shaderObject.timeUniform);

    if( shaderObject.pointLightLocationUniform != null)
      pointLightLocationUniform = getUniform( shaderObject.pointLightLocationUniform);
  }
  
  int getAttributeLocation( String name) {
    return gl.getAttribLocation( program, name);
  }
  
  UniformLocation getUniformLocation( String name) {
    return gl.getUniformLocation( program, name);
  }
  
  Uniform getUniform( String name) {
    return new Uniform( getUniformLocation( name), gl);
  }
  
  Node add( Node obj)  {
    objects.add(obj);
    return obj;
  }
  
  bool remove( Node obj) {
    return objects.remove(obj);
  }
  
  Node addFollowCameraObject( Node obj){
    followCameraObjects.add(obj);
    return obj;
  }

  double timeNow=0.0;
  void animate( double elapsed){
    timeNow += elapsed;
    for( Node node in objects)
    {
      if( node.enabled )
        node.animate(elapsed);
    } 
  }
  
  bool hasEnabledObjects() {
    if(objects.any((Node n)=>n.enabled))
      return true;
    if(followCameraObjects.any((Node n)=>n.enabled))
      return true;
    if(instancers.any((Instancer i)=>i.enabled))
      return true;
    return false;
  }
  
  void draw( Matrix4 pMatrix, [Matrix4 overrideMvMatrix] )
  {
    if( !hasEnabledObjects())
      return;
    
    if( debug )
      print( "name: $name");
    
    gl.useProgram(program);
    gl.enableVertexAttribArray(vertexPositionAttribute);

    if( shaderObject.colorsAttribute != null)
      gl.enableVertexAttribArray(colorsAttribute);
    if( shaderObject.textureCoordinatesAttribute != null)
      gl.enableVertexAttribArray(textureCoordAttribute);
    if( shaderObject.normalAttribute != null)
      gl.enableVertexAttribArray(normalAttribute);
    if( shaderObject.binormalAttribute != null)
      gl.enableVertexAttribArray(binormalAttribute);
    //print( "error: ${gl.getError()}" );
    
    //print( "pM: ${pMatrix} ${pMatrixUniform}" );

    if( shaderObject.perpectiveMatrixUniform != null)
      gl.uniformMatrix4fv(perpectiveMatrixUniform, false, pMatrix.array);
    
    if( shaderObject.timeUniform != null)
      gl.uniform1f(timeUniform, timeNow/1000);
    
    if( shaderObject.pointLightLocationUniform != null)
      pointLightLocationUniform.setValue3fv(chronosGL.pointLightLocation);
    
    Camera camera = chronosGL.getCamera();
    camera.getMVMatrix(mvMatrix, false);

    if( shaderObject.cameraNear != null)
      gl.uniform1f(cameraNear, chronosGL.near);;

    if( shaderObject.cameraFar != null)
      gl.uniform1f(cameraFar, chronosGL.far);;

    if( shaderObject.canvasSize != null)
      gl.uniform2f(size, chronosGL._canvas.clientWidth, chronosGL._canvas.clientHeight );

    
    //print( "mvM: ${mvMatrix}");
    
    drawObjects(followCameraObjects); // like skybox
    
    camera.getMVMatrix(mvMatrix, true);
    
    if( shaderObject.viewMatrixUniform != null)
      gl.uniformMatrix4fv(viewMatrixUniform, false, mvMatrix.array);

    if( overrideMvMatrix != null) {
      mvMatrix.setElements(overrideMvMatrix);
    }
    
    drawObjects(objects);   
    
    drawInstancers();
    
    gl.disableVertexAttribArray(vertexPositionAttribute);

    if( shaderObject.colorsAttribute != null)
      gl.disableVertexAttribArray(colorsAttribute);
    if( shaderObject.textureCoordinatesAttribute != null)
      gl.disableVertexAttribArray(textureCoordAttribute);
    if( shaderObject.normalAttribute != null)
      gl.disableVertexAttribArray(normalAttribute);
    if( shaderObject.binormalAttribute != null)
      gl.disableVertexAttribArray(binormalAttribute);
  }
  
  void drawInstancers() {
    for( Instancer instancer in instancers)
    {
      if( instancer.enabled)
        instancer.draw(this, mvMatrix);
    }
  }

  void drawObjects(List<Spatial> objects) {
    for( Node node in objects)
    {
      if( node.enabled)
        node.draw(this, mvMatrix);
    }
  }
  
  void addInstancer(Instancer instancer) {
    instancers.add(instancer);
  }
}

