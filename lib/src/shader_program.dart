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
  String perpectiveMatrixUniform;
  String textureSamplerUniform;
  String texture2SamplerUniform;
  String textureCubeSamplerUniform;
  String colorUniform;
  String cameraNear;
  String cameraFar;
  String size; // canvas width and height
  String timeUniform;
  
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
  UniformLocation perpectiveMatrixUniform;
  UniformLocation textureSamplerUniform;
  UniformLocation texture2SamplerUniform;
  UniformLocation textureCubeSamplerUniform;
  Uniform colorUniform;
  UniformLocation cameraNear;
  UniformLocation cameraFar;
  UniformLocation size;
  UniformLocation timeUniform;
  
  bool debug = false;
  
  Matrix4 mvMatrix = new Matrix4();
  List<Node> followCameraObjects = new List<Node>(); 
  List<Node> objects = new List<Node>();
  
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
    
    if( shaderObject.size != null)
      size = getUniformLocation( shaderObject.size);
    
    if( shaderObject.transformationMatrixUniform != null)
      transformationMatrixUniform = getUniformLocation( shaderObject.transformationMatrixUniform);

    if( shaderObject.timeUniform != null)
      timeUniform = getUniformLocation( shaderObject.timeUniform);

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
    for( Node node in objects)
    {
      if( node.enabled)
        return true;
    }
    for( Node node in followCameraObjects)
    {
      if( node.enabled)
        return true;
    }

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

    gl.uniformMatrix4fv(perpectiveMatrixUniform, false, pMatrix.array);
    
    if( shaderObject.timeUniform != null)
      gl.uniform1f(timeUniform, timeNow/1000);
    
    Camera camera = chronosGL.getCamera();
    camera.getMVMatrix(mvMatrix, false);

    if( shaderObject.cameraNear != null)
      gl.uniform1f(cameraNear, chronosGL.near);;

    if( shaderObject.cameraFar != null)
      gl.uniform1f(cameraFar, chronosGL.far);;

    if( shaderObject.size != null)
      gl.uniform2f(size, chronosGL._canvas.clientWidth, chronosGL._canvas.clientHeight );

    
    //print( "mvM: ${mvMatrix}");
    
    drawObjects(followCameraObjects); // like skybox
    
    camera.getMVMatrix(mvMatrix, true);
    
    if( overrideMvMatrix != null) {
      mvMatrix.setElements(overrideMvMatrix);
    }
    
    drawObjects(objects);   
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

  
  void drawObjects(List<Spatial> objects) {
    for( Node node in objects)
    {
      if( node.enabled)
        node.draw(this, mvMatrix);
    }
  }
  
  
  
}

