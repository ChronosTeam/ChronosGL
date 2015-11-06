part of chronosgl;

class ShaderVarDesc {
  String type;
  String purpose = "";

  int GetSize() {
    switch (type) {
      case "vec2":
        return 2;
      case "vec3":
        return 3;
      case "vec4":
        return 4;
      default:
        assert(false);
        return -1;
    }
  }

  int GetScalarType() {
    switch (type) {
      case "vec2":
      case "vec3":
      case "vec4":
        return FLOAT;
      default:
        assert(false);
        return -1;
    }
  }

  ShaderVarDesc(this.type, this.purpose);
}

// Used both as enum and as string. The latter allows for a limited form
// of syntax checking inside shader programs.
const String aColors = "aColors";
const String aVertexPosition = "aVertexPosition";
const String aTextureCoordinates = "aTextureCoordinates";
const String aNormal = "aNormal";
const String aBinormal = "aBinormal";

const String vColors = "vColors";
const String vTextureCoordinates = "vTextureCoordinates";
const String vLightWeighting = "vLightWeighting";
const String vNormal = "vNormal";
const String vVertexPosition = "vVertexPosition";

const String uTransformationMatrix = "uTransformationMatrix";
const String uModelViewMatrix = "uModelViewMatrix";
const String uViewMatrix = "uViewMatrix";
const String uPerspectiveMatrix = "uPerpectiveMatrix";
const String uTextureSampler = "uTextureSampler";
const String uTextureCubeSampler = "uTextureCubeSampler";
const String uTexture2Sampler = "uTexture2Sampler";
const String uPointLightLocation = "uPointLightLocation";
const String uTime = "uTime";
const String uColor = "uColor";
const String uCameraNear = "uCameraNear";
const String uCameraFar = "uCameraFar";
const String uCanvasSize = "uCanvasSize";

Map<String, ShaderVarDesc> _VarsDb = {
  // attribute vars
  // This should also contain an alpha channel
  aColors: new ShaderVarDesc("vec3", "per vertex color"),
  aVertexPosition: new ShaderVarDesc("vec3", "vertex coordinates"),
  aTextureCoordinates: new ShaderVarDesc("vec2", "texture uvs"),
  aNormal: new ShaderVarDesc("vec3", "vertex normals"),
  aBinormal: new ShaderVarDesc("vec3", "vertex binormals"),

  // Varying
  vColors: new ShaderVarDesc("vec3", "per vertex color"),
  vTextureCoordinates: new ShaderVarDesc("vec2", ""),
  vLightWeighting: new ShaderVarDesc("vec3", ""),
  vNormal: new ShaderVarDesc("vec3", ""),
  vVertexPosition: new ShaderVarDesc("vec3", "vertex coordinates"),

  // uniform vars
  uTransformationMatrix: new ShaderVarDesc("mat4", ""),
  uModelViewMatrix: new ShaderVarDesc("mat4", ""),
  uViewMatrix: new ShaderVarDesc("mat4", ""),
  uPerspectiveMatrix: new ShaderVarDesc("mat4", ""),
  uTextureSampler: new ShaderVarDesc("sampler2D", ""),
  uTexture2Sampler: new ShaderVarDesc("sampler2D", ""),
  uTextureCubeSampler: new ShaderVarDesc("samplerCube", ""),
  uPointLightLocation: new ShaderVarDesc("vec3", ""),
  uTime: new ShaderVarDesc("float", "time since program start in sec"),
  uCameraNear: new ShaderVarDesc("float", ""),
  uCameraFar: new ShaderVarDesc("float", ""),
  uCanvasSize: new ShaderVarDesc("vec2", ""),
  uColor: new ShaderVarDesc("vec3", ""),
};

void IntroduceNewShaderVar(String name, ShaderVarDesc desc) {
  assert(!_VarsDb.containsKey(name));
  _VarsDb[name] = desc;
}

// ShaderObject describes a shader (either fragment or vertex) and its
// interface to the world.
class ShaderObject {
  String name;
  String shader = null;

  Map<String, String> attributeVars = {};
  Map<String, String> uniformVars = {};
  Map<String, String> varyingVars = {};

  ShaderObject(this.name);

  void AddAttributeVar(String canonicalName, [String actualName = null]) {
    assert(shader == null);
    assert(_VarsDb.containsKey(canonicalName));
    assert(!attributeVars.containsKey(canonicalName));
    if (actualName == null) actualName = canonicalName;
    attributeVars[canonicalName] = actualName;
  }

  void AddUniformVar(String canonicalName, [String actualName = null]) {
    assert(shader == null);
    assert(_VarsDb.containsKey(canonicalName));
    assert(!uniformVars.containsKey(canonicalName));
    if (actualName == null) actualName = canonicalName;
    uniformVars[canonicalName] = actualName;
  }

  void AddVaryingVar(String canonicalName, [String actualName = null]) {
    assert(shader == null);
    assert(_VarsDb.containsKey(canonicalName));
    assert(!varyingVars.containsKey(canonicalName));
    if (actualName == null) actualName = canonicalName;
    varyingVars[canonicalName] = actualName;
  }

  void SetBodyWithMain(List<String> body) {
    assert(shader == null);
    shader = _CreateShader(true, body);
  }

  void SetBody(List<String> body) {
    assert(shader == null);
    shader = _CreateShader(false, body);
  }

  // InitializeShader updates the shader field from header and body.
  // If you have set shader manually do not call this.
  String _CreateShader(bool addWrapperForMain, List<String> body) {
    assert(shader == null);
    List<String> out = [];
    out.add("precision mediump float;");
    out.add("");
    for (String v in attributeVars.keys) {
      ShaderVarDesc d = _VarsDb[v];
      out.add("attribute ${d.type} ${attributeVars[v]};");
    }
    out.add("");
    for (String v in varyingVars.keys) {
      ShaderVarDesc d = _VarsDb[v];
      out.add("varying ${d.type} ${varyingVars[v]};");
    }
    out.add("");
    for (String v in uniformVars.keys) {
      ShaderVarDesc d = _VarsDb[v];
      out.add("uniform ${d.type} ${uniformVars[v]};");
    }
    out.add("");

    if (addWrapperForMain) {
      out.add("void main(void) {");
    }
    out.addAll(body);
    if (addWrapperForMain) {
      out.add("}");
    }

    return out.join("\n");
  }
}

// For use with uniforms
class ShaderProgramInputs {
  Map _uniforms = {};
  Texture texture;
  Texture texture2;
  Texture textureCube;

  void SetUniformVal(String canonical, var val) {
    assert(_VarsDb.containsKey(canonical));
    _uniforms[canonical] = val;
  }

  GetUniformVal(String canonical) {
    assert(_VarsDb.containsKey(canonical));
    return _uniforms[canonical];
  }
}

class ShaderProgram implements Drawable {
  ChronosGL chronosGL;
  ShaderObject shaderObjectV;
  ShaderObject shaderObjectF;
  ShaderProgramInputs inputs = new ShaderProgramInputs();

  String name;
  RenderingContext gl;
  Program program;

  Map<String, int> attributeLocations = {};
  Map<String, UniformLocation> uniformLocations = {};

  bool debug = false;
  bool active;

  Matrix4 mvMatrix = new Matrix4();
  List<Node> followCameraObjects = new List<Node>();
  List<Node> objects = new List<Node>();
  List<Instancer> instancers = new List<Instancer>();

  ShaderProgram(
      this.chronosGL, this.shaderObjectV, this.shaderObjectF, this.name) {
    gl = chronosGL.getRenderingContext();
    ShaderUtils su = new ShaderUtils(gl);
    program = su.getProgram(shaderObjectV.shader, shaderObjectF.shader);
    for (String v in shaderObjectV.attributeVars.keys) {
      attributeLocations[v] = gl.getAttribLocation(program, v);
      HTML.window.console.log("$v ${attributeLocations[v]} ");
      assert(attributeLocations[v] >= 0);
    }

    for (String v in shaderObjectV.uniformVars.keys) {
      uniformLocations[v] = getUniformLocation(v);
    }

    for (String v in shaderObjectF.uniformVars.keys) {
      // This can happen! Example both shaders use uTime.
      // assert(!uniformLocations.containsKey(v));
      uniformLocations[v] = getUniformLocation(v);
    }
    inputs.SetUniformVal(uTime, 0.0);
  }

  int getAttributeLocation(String name) {
    return gl.getAttribLocation(program, name);
  }

  UniformLocation getUniformLocation(String name) {
    return gl.getUniformLocation(program, name);
  }

  Node add(Node obj) {
    objects.add(obj);
    return obj;
  }

  bool remove(Node obj) {
    return objects.remove(obj);
  }

  Node addFollowCameraObject(Node obj) {
    followCameraObjects.add(obj);
    return obj;
  }

  void animate(double elapsed) {
    inputs.SetUniformVal(uTime, inputs.GetUniformVal(uTime) + elapsed / 1000);
    for (Node node in objects) {
      if (node.enabled) node.animate(elapsed);
    }
  }

  bool hasEnabledObjects() {
    if (objects.any((Node n) => n.enabled)) return true;
    if (followCameraObjects.any((Node n) => n.enabled)) return true;
    if (instancers.any((Instancer i) => i.enabled)) return true;
    return false;
  }

  void MaybeSetAttribute(String a, Buffer buffer, String type,
      [bool normalized = false, int stride = 0, int offset = 0]) {
    assert(type == _VarsDb[a].type);
    if (!attributeLocations.containsKey(a)) return;
    int index = attributeLocations[a];
    gl.bindBuffer(ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(index, _VarsDb[a].GetSize(),
        _VarsDb[a].GetScalarType(), normalized, stride, offset);
  }

  void SetUniform(String canonical) {
    assert(_VarsDb.containsKey(canonical));
    ShaderVarDesc desc = _VarsDb[canonical];
    UniformLocation l = uniformLocations[canonical];
    var val = inputs.GetUniformVal(canonical);
    switch (desc.type) {
      case "mat4":
        gl.uniformMatrix4fv(l, false, val);
        break;
      case "float":
        gl.uniform1f(l, val);
        break;
      case "vec3":
        gl.uniform3fv(l, val);
        break;
      case "vec2":
        gl.uniform2fv(l, val);
        break;
      case "sampler2D":
        if (canonical == uTextureSampler) {
          int n = 0;
          gl.activeTexture(TEXTURE0 + n);
          gl.bindTexture(TEXTURE_2D, val);
          gl.uniform1i(l, n);
        } else if (canonical == uTexture2Sampler) {
          int n = uniformLocations.containsKey(uTextureSampler) ? 1 : 0;
          gl.activeTexture(TEXTURE0 + n);
          gl.bindTexture(TEXTURE_2D, val);
          gl.uniform1i(l, n);
        } else {
          assert(false);
        }
        break;
      case "samplerCube":
        assert(canonical == uTextureCubeSampler);
        int n = (uniformLocations.containsKey(uTextureSampler) ? 1 : 0) +
            (uniformLocations.containsKey(uTexture2Sampler) ? 1 : 0);
        gl.activeTexture(TEXTURE0 + n);
        gl.bindTexture(TEXTURE_CUBE_MAP, inputs.textureCube);
        gl.uniform1i(l, n);
        break;
      default:
        assert(false);
    }
  }
  void MaybeSetUniform(String canonical) {
    if (uniformLocations.containsKey(canonical)) SetUniform(canonical);
  }
  
  void draw(Matrix4 pMatrix, [Matrix4 overrideMvMatrix]) {
    if (!hasEnabledObjects()) return;

    if (debug) print("name: $name");

    gl.useProgram(program);
    for (String a in attributeLocations.keys) {
      gl.enableVertexAttribArray(attributeLocations[a]);
    }

    Camera camera = chronosGL.getCamera();
    camera.getMVMatrix(mvMatrix, false);

    inputs.SetUniformVal(uCameraNear, chronosGL.near);
    inputs.SetUniformVal(uCameraFar, chronosGL.far);
    inputs.SetUniformVal(
        uCanvasSize,
        new Vector(
                chronosGL._canvas.clientWidth, chronosGL._canvas.clientHeight)
            .array);
    inputs.SetUniformVal(uPerspectiveMatrix, pMatrix.array);
    inputs.SetUniformVal(
        uPointLightLocation, chronosGL.pointLightLocation.array);

    // TODO: make the WHEN gets WHAT updated more rigorous
    // Only do a subset here
    for (String u in [
      uPerspectiveMatrix,
      uTime,
      uPointLightLocation,
      uCameraFar,
      uCameraNear,
      uCanvasSize
    ]) {
      MaybeSetUniform(u);
    }
    //print( "error: ${gl.getError()}" );

    //print( "pM: ${pMatrix} ${pMatrixUniform}" );

    //print( "mvM: ${mvMatrix}");

    drawObjects(followCameraObjects); // like skybox

    camera.getMVMatrix(mvMatrix, true);

    
    inputs.SetUniformVal(uViewMatrix, mvMatrix.array);
    MaybeSetUniform(uViewMatrix);

    if (overrideMvMatrix != null) {
      mvMatrix.setElements(overrideMvMatrix);
    }

    drawObjects(objects);

    drawInstancers();
    for (String a in attributeLocations.keys) {
      gl.disableVertexAttribArray(attributeLocations[a]);
    }
  }

  void drawInstancers() {
    for (Instancer instancer in instancers) {
      if (instancer.enabled) instancer.draw(this, mvMatrix);
    }
  }

  void drawObjects(List<Spatial> objects) {
    for (Node node in objects) {
      if (node.enabled) node.draw(this, mvMatrix);
    }
  }

  void addInstancer(Instancer instancer) {
    instancers.add(instancer);
  }
}
