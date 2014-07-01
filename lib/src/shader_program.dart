part of chronosgl;

class ShaderObject {
  ShaderObject(this.name);
  String name;
  String vertexShader;
  String fragmentShader;
  String vertexPositionAttribute;
  String textureCoordinatesAttribute;
  String normalAttribute;
  String transformationMatrixUniform;
  String modelViewMatrixUniform;
  String perpectiveMatrixUniform;
  String textureSamplerUniform;
  String texture2SamplerUniform;
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
  int textureCoordAttribute;
  int normalAttribute;
  UniformLocation pMatrixUniform;
  UniformLocation mvMatrixUniform;
  UniformLocation samplerUniform;
  UniformLocation sampler2Uniform;
  UniformLocation transformationMatrixUniform;
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

    if( shaderObject.textureCoordinatesAttribute != null)
      textureCoordAttribute = gl.getAttribLocation(program, shaderObject.textureCoordinatesAttribute);

    if( shaderObject.normalAttribute != null)
      normalAttribute = gl.getAttribLocation(program, shaderObject.normalAttribute);

    pMatrixUniform = getUniformLocation( shaderObject.perpectiveMatrixUniform);
    mvMatrixUniform = getUniformLocation( shaderObject.modelViewMatrixUniform);

    if( shaderObject.textureSamplerUniform != null)
      samplerUniform = getUniformLocation( shaderObject.textureSamplerUniform);

    if( shaderObject.texture2SamplerUniform != null)
      sampler2Uniform = getUniformLocation( shaderObject.texture2SamplerUniform);

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
    return new Uniform( gl.getUniformLocation( program, name), gl);
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
    if( shaderObject.textureCoordinatesAttribute != null)
      gl.enableVertexAttribArray(textureCoordAttribute);
    if( shaderObject.normalAttribute != null)
      gl.enableVertexAttribArray(normalAttribute);
    //print( "error: ${gl.getError()}" );
    
    //print( "pM: ${pMatrix} ${pMatrixUniform}" );

    gl.uniformMatrix4fv(pMatrixUniform, false, pMatrix.array);
    
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
    
    drawObjects(followCameraObjects);   

    camera.getMVMatrix(mvMatrix, true);
    
    if( overrideMvMatrix != null) {
      mvMatrix.setElements(overrideMvMatrix);
    }
    
    drawObjects(objects);   
    gl.disableVertexAttribArray(vertexPositionAttribute);
    if( shaderObject.textureCoordinatesAttribute != null)
      gl.disableVertexAttribArray(textureCoordAttribute);
    if( shaderObject.normalAttribute != null)
      gl.disableVertexAttribArray(normalAttribute);
  }

  
  void drawObjects(List<Spatial> objects) {
    for( Node node in objects)
    {
      if( node.enabled)
        node.draw(this, mvMatrix);
    }
  }
  
  
  
}

