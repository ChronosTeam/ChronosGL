part of chronosgl;

// http://www.bidouille.org/prog/plasma
// see also: https://www.shadertoy.com/view/XdX3Wn
// and http://iq12.com/2013/04/fifty-shaders-of-grey/

ShaderObject createPlasmaShader() {
  ShaderObject shaderObject = new ShaderObject("Plasma");
  
  shaderObject.vertexPositionAttribute = "aVertexPosition"; 
  shaderObject.textureCoordinatesAttribute = "_coords";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.timeUniform = "u_time";

  shaderObject.fragmentShaderHeader = "#define PI 3.1415926535897932384626433832795\n vec2 u_k = vec2(10.0,10.0);\n";
 
  shaderObject.fragmentShaderBody = """
    float v = 0.0;
    vec2 c = v_coords * u_k - u_k/2.0;
    v += sin((c.x+u_time));
    v += sin((c.y+u_time)/2.0);
    v += sin((c.x+c.y+u_time)/2.0);
    c += u_k/2.0 * vec2(sin(u_time/3.0), cos(u_time/2.0));
    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+u_time);
    v = v/2.0;
    vec3 col1 = vec3(1.0, sin(PI*v), cos(PI*v));
    vec3 col2 = vec3(sin(PI*v), cos(PI*v), -1.0);
    vec3 col = mix(col1, col2, sin(u_time)*.5+.5);
    gl_FragColor = vec4(col*.5 + .5, 1.0);
  """;
  
  return generateShader(shaderObject);
}

ShaderObject createPlasmaShader2() {
  ShaderObject shaderObject = new ShaderObject("Plasma");
  
  shaderObject.vertexPositionAttribute = "aVertexPosition"; 
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.timeUniform = "time";

  shaderObject.fragmentShaderBody = """
    float x = vaTextureCoord.x;
    float y = vaTextureCoord.y;
    gl_FragColor = vec4(1,sin(x * cos(time/15.0) * 120.0) + cos(y * sin(time/10.0) * 120.0) + sin(sqrt(y * y + x * x) * 40.0),1,1);
  """;
  
  return generateShader(shaderObject);
}

ShaderObject createPlasmaShader3() {
  ShaderObject shaderObject = new ShaderObject("Plasma");
  
  shaderObject.vertexPositionAttribute = "aVertexPosition"; 
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.timeUniform = "time";

  shaderObject.fragmentShaderBody = """
    float x = vaTextureCoord.x*1000.0; // gl_FragCoord.x;
    float y = vaTextureCoord.y*1000.0; // gl_FragCoord.y;
    float mov0 = x+y+cos(sin(time)*2.)*100.+sin(x/100.)*1000.;
    float mov1 = y / 720.0 / 0.2 + time;
    float mov2 = x / 1280.0 / 0.2;
    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);
    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));
    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));
    gl_FragColor = vec4( c1,c2,c3,1.0);
  """;
  
  return generateShader(shaderObject);
}

