part of chronosgl;

class ShaderVarDesc {
  String type;
  String purpose = "";

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

  // uniform vars
  uTransformationMatrix: new ShaderVarDesc("mat4", ""),
  uModelViewMatrix: new ShaderVarDesc("mat4", ""),
  uViewMatrix: new ShaderVarDesc("mat4", ""),
  uPerspectiveMatrix: new ShaderVarDesc("mat4", ""),
  uTextureSampler: new ShaderVarDesc("sampler2D", ""),
  uTexture2Sampler: new ShaderVarDesc("sampler2D", ""),
  uPointLightLocation: new ShaderVarDesc("vec", ""),
  uTime: new ShaderVarDesc("float", "time since program start in sec"),
  uCameraNear: new ShaderVarDesc("float", ""),
  uCameraFar: new ShaderVarDesc("float", ""),
  uCanvasSize: new ShaderVarDesc("vec 2", ""),
  uColor: new ShaderVarDesc("vec3", ""),
  // "textureCubeSampler": new ShaderVarDesc(""),
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
  List<String> _header = null;
  List<String> _body = null;

  Map<String, String> attributeVars = {};
  Map<String, String> uniformVars = {};
  Map<String, String> varyingVars = {};

  ShaderObject(this.name);

  void AddAttributeVar(String canonicalName, String actualName) {
    assert(_VarsDb.containsKey(canonicalName));
    assert(!attributeVars.containsKey(canonicalName));
    attributeVars[canonicalName] = actualName;
  }

  void AddUniformVar(String canonicalName, String actualName) {
    assert(_VarsDb.containsKey(canonicalName));
    assert(!uniformVars.containsKey(canonicalName));
    uniformVars[canonicalName] = actualName;
  }

  void AddVaryingVar(String canonicalName, String actualName) {
    assert(_VarsDb.containsKey(canonicalName));
    assert(!varyingVars.containsKey(canonicalName));
    varyingVars[canonicalName] = actualName;
  }

  void SetBody(List<String> s) {
    assert(_body == null);
    _body = s;
  }

  void SetHeader(List<String> s) {
    assert(_header == null);
    _header = s;
  }

  // InitializeShader updates the shader field from header and body.
  // If you have set shader manually do not call this.
  void InitializeShader(bool addWrapperForMain) {
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
    if (_header != null) {
      out.addAll(_header);
      out.add("");
    }

    if (addWrapperForMain) {
      out.add("void main(void) {");
    }
    out.addAll(_body);
    if (addWrapperForMain) {
      out.add("}");
    }

    shader = out.join("\n");
  }
}

// For use with uniforms
class ShaderProgramInputs {
  double timeNow = 0.0;
  Vector color = new Vector();
  double near = 0.0;
  double far = 0.0;
  double width = 0.0;
  double height = 0.0;

  Matrix4 modelviewMatrix = new Matrix4();
  Matrix4 transformMatrix = new Matrix4();
  Matrix4 perspectiveMatrix = new Matrix4();

  Texture texture;
  Texture texture2;
  Texture textureCube;
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
    }

    for (String v in shaderObjectV.uniformVars.keys) {
      uniformLocations[v] = getUniformLocation(v);
    }

    for (String v in shaderObjectF.uniformVars.keys) {
      assert(!uniformLocations.containsKey(v));
      uniformLocations[v] = getUniformLocation(v);
    }
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
    inputs.timeNow += elapsed;
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

  void MaybeSetAttribute(String a, Buffer buffer, int size, int type,
      bool normalized, int stride, int offset) {
    if (!attributeLocations.containsKey(a)) return;
    int index = attributeLocations[a];
    gl.bindBuffer(ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
  }

  // Maybe take inputs as an argument
  // This could also be table driven by adding more info ShaderVarDesc
  void MaybeSetUniform(String u) {
    if (!uniformLocations.containsKey(u)) return;
    UniformLocation l = uniformLocations[u];
    switch (u) {
      case uPerspectiveMatrix:
        gl.uniformMatrix4fv(l, false, inputs.perspectiveMatrix.array);
        break;
      case uModelViewMatrix:
        gl.uniformMatrix4fv(l, false, inputs.modelviewMatrix.array);
        break;
      case uTransformationMatrix:
        gl.uniformMatrix4fv(l, false, inputs.transformMatrix.array);
        break;
      case uTime:
        gl.uniform1f(l, inputs.timeNow / 1000);
        break;
      case uPointLightLocation:
        //gl.uniform3fv(l, inputs.pointLightLocation.array);
        assert(false);
        break;
      case uCameraNear:
        gl.uniform1f(l, inputs.near);
        break;
      case uCameraFar:
        gl.uniform1f(l, inputs.far);
        break;
      case uCanvasSize:
        gl.uniform2f(l, inputs.width, inputs.height);
        break;
      case uTextureSampler:
        int n = 0;
        gl.activeTexture(TEXTURE0 + n);
        gl.bindTexture(TEXTURE_2D, inputs.texture);
        gl.uniform1i(l, n);
        break;
      case uTextureSampler:
        int n = 0;
        gl.activeTexture(TEXTURE0 + n);
        gl.bindTexture(TEXTURE_2D, inputs.texture);
        gl.uniform1i(l, n);
        break;
      case uTexture2Sampler:
        int n = uniformLocations.containsKey(uTextureSampler) ? 1 : 0;
        gl.activeTexture(TEXTURE0 + n);
        gl.bindTexture(TEXTURE_2D, inputs.texture2);
        gl.uniform1i(l, n);
        break;
      case uTextureCubeSampler:
        int n = (uniformLocations.containsKey(uTextureSampler) ? 1 : 0) +
            (uniformLocations.containsKey(uTexture2Sampler) ? 1 : 0);
        gl.activeTexture(TEXTURE0 + n);
        gl.bindTexture(TEXTURE_CUBE_MAP, inputs.textureCube);
        gl.uniform1i(l, n);
        break;
      case uColor:
        gl.uniform3fv(l, inputs.color.array);
        break;
      default:
        assert(false);
        break;
    }
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

    inputs.near = chronosGL.near;
    inputs.far = chronosGL.far;
    inputs.width = chronosGL._canvas.clientWidth * 1.0;
    inputs.height = chronosGL._canvas.clientHeight * 1.0;
    inputs.perspectiveMatrix = pMatrix;
    // Only do a subset here
    for (String u in uniformLocations.keys) {
      switch (u) {
        case uPerspectiveMatrix:
        case uTime:
        case uPointLightLocation:
        case uCameraFar:
        case uCameraNear:
        case uCanvasSize:
          MaybeSetUniform(u);
          break;
      }
    }
    //print( "error: ${gl.getError()}" );

    //print( "pM: ${pMatrix} ${pMatrixUniform}" );

    //print( "mvM: ${mvMatrix}");

    drawObjects(followCameraObjects); // like skybox

    camera.getMVMatrix(mvMatrix, true);

    inputs.modelviewMatrix = mvMatrix;
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
