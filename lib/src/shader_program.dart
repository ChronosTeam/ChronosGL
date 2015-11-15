part of chronosgl;

class ShaderVarDesc {
  String type;
  String purpose = "";

  int GetSize() {
    switch (type) {
      case "float":
        return 1;
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
      case "float":
      case "vec2":
      case "vec3":
      case "vec4":
        return WEBGL.FLOAT;
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

// Instancer
const String iaRotatation = "iaRotation";
const String iaTranslation = "iaTranslation";

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
const String uPointSize = "uPointSize";
const String uFogNear = "uFogNear";
const String uFogFar = "uFogFar";

Map<String, ShaderVarDesc> _VarsDb = {
  // attribute vars
  // This should also contain an alpha channel
  aColors: new ShaderVarDesc("vec3", "per vertex color"),
  aVertexPosition: new ShaderVarDesc("vec3", "vertex coordinates"),
  aTextureCoordinates: new ShaderVarDesc("vec2", "texture uvs"),
  aNormal: new ShaderVarDesc("vec3", "vertex normals"),
  aBinormal: new ShaderVarDesc("vec3", "vertex binormals"),
  iaRotatation: new ShaderVarDesc("vec4", ""),
  iaTranslation: new ShaderVarDesc("vec3", ""),

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
  uFogNear: new ShaderVarDesc("float", ""),
  uFogFar: new ShaderVarDesc("float", ""),
  uPointSize: new ShaderVarDesc("float", ""),
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

  void SetUniformVal(String canonical, var val) {
    assert(_VarsDb.containsKey(canonical));
    _uniforms[canonical] = val;
  }

  GetUniformVal(String canonical) {
    assert(_VarsDb.containsKey(canonical));
    return _uniforms[canonical];
  }

  bool HasUniform(String canonical) {
    return _uniforms.containsKey(canonical);
  }

  Iterable<String> GetCanonicals() {
    return _uniforms.keys;
  }
}

class ShaderProgram implements Drawable {
  ChronosGL chronosGL;
  ShaderObject shaderObjectV;
  ShaderObject shaderObjectF;
  ShaderProgramInputs inputs = new ShaderProgramInputs();

  String name;
  WEBGL.RenderingContext gl;
  WEBGL.Program program;

  Map<String, int> _attributeLocations = {};
  Map<String, WEBGL.UniformLocation> _uniformLocations = {};
  // Should this be done per processed Mesh?
  Set<String> _uniformInitialized = new Set<String>();

  bool debug = false;
  bool active;

  Matrix4 mvMatrix = new Matrix4();
  List<Node> followCameraObjects = new List<Node>();
  List<Node> objects = new List<Node>();

  ShaderProgram(
      this.chronosGL, this.shaderObjectV, this.shaderObjectF, this.name) {
    gl = chronosGL.getRenderingContext();
    ShaderUtils su = new ShaderUtils(gl);
    program = su.getProgram(shaderObjectV.shader, shaderObjectF.shader);
    for (String v in shaderObjectV.attributeVars.keys) {
      _attributeLocations[v] = gl.getAttribLocation(program, v);
      //HTML.window.console.log("$v ${_attributeLocations[v]} ");
      assert(_attributeLocations[v] >= 0);
    }

    for (String v in shaderObjectV.uniformVars.keys) {
      _uniformLocations[v] = getUniformLocation(v);
    }

    for (String v in shaderObjectF.uniformVars.keys) {
      // This can happen! Example both shaders use uTime.
      // assert(!uniformLocations.containsKey(v));
      _uniformLocations[v] = getUniformLocation(v);
    }
    inputs.SetUniformVal(uTime, 0.0);
  }

  bool AllUniformsInitialized() {
    return _uniformInitialized.length == _uniformLocations.length;
  }

  int getAttributeLocation(String name) {
    return gl.getAttribLocation(program, name);
  }

  WEBGL.UniformLocation getUniformLocation(String name) {
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
    return false;
  }

  void MaybeSetAttribute(String a, WEBGL.Buffer buffer,
      [bool normalized = false, int stride = 0, int offset = 0]) {
    if (!_attributeLocations.containsKey(a)) return;
    int index = _attributeLocations[a];
    gl.bindBuffer(WEBGL.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(index, _VarsDb[a].GetSize(),
        _VarsDb[a].GetScalarType(), normalized, stride, offset);
    // Hack for instances - can this be moved to where we enable the attribute?
    if (a.startsWith("ia")) {
      WEBGL.AngleInstancedArrays ext = gl.getExtension("ANGLE_instanced_arrays");
      ext.vertexAttribDivisorAngle(index, 1);
    }
  }

  void SetElementArray(WEBGL.Buffer b) {
    gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, b);
  }

  void Draw(
      int numInstances, int numItems, bool drawPoints, bool useArrayBuffer) {
    if (numInstances > 0) {
      WEBGL.AngleInstancedArrays ext = gl.getExtension("ANGLE_instanced_arrays");
      if (drawPoints) {
        ext.drawArraysInstancedAngle(WEBGL.POINTS, 0, numItems, numInstances);
      } else if (useArrayBuffer) {
        ext.drawElementsInstancedAngle(
            WEBGL.TRIANGLES,
            numItems,
            ChronosGL.useElementIndexUint ? WEBGL.UNSIGNED_INT : WEBGL.UNSIGNED_SHORT,
            0,
            numInstances);
      } else {
        ext.drawArraysInstancedAngle(WEBGL.TRIANGLES, 0, numItems, numInstances);
      }
    } else {
      if (drawPoints) {
        gl.drawArrays(WEBGL.POINTS, 0, numItems);
      } else if (useArrayBuffer) {
        gl.drawElements(WEBGL.TRIANGLES, numItems,
            ChronosGL.useElementIndexUint ? WEBGL.UNSIGNED_INT : WEBGL.UNSIGNED_SHORT, 0);
      } else {
        gl.drawArrays(WEBGL.TRIANGLES, 0, numItems);
      }
    }
    if (debug) print(gl.getProgramInfoLog(program));
  }

  void SetUniform(String canonical, var val) {
    // Note, we could make this smarter and skip
    // overwriting values with the same values;
    assert(_VarsDb.containsKey(canonical));
    ShaderVarDesc desc = _VarsDb[canonical];
    assert(_uniformLocations.containsKey(canonical));
    WEBGL.UniformLocation l = _uniformLocations[canonical];
    _uniformInitialized.add(canonical);
    switch (desc.type) {
      case "float":
        gl.uniform1f(l, val);
        break;
      case "mat4":
        gl.uniformMatrix4fv(l, false, val.array);
        break;
      case "vec3":
        assert (val.array.length == 3);
        gl.uniform3fv(l, val.array);
        break;
      case "vec2":
        assert (val.array.length == 2);
        gl.uniform2fv(l, val.array);
        break;
      case "sampler2D":
        if (canonical == uTextureSampler) {
          int n = 0;
          gl.activeTexture(WEBGL.TEXTURE0 + n);
          gl.bindTexture(WEBGL.TEXTURE_2D, val.GetTexture());
          gl.uniform1i(l, n);
        } else if (canonical == uTexture2Sampler) {
          int n = _uniformLocations.containsKey(uTextureSampler) ? 1 : 0;
          gl.activeTexture(WEBGL.TEXTURE0 + n);
          gl.bindTexture(WEBGL.TEXTURE_2D, val.GetTexture());
          gl.uniform1i(l, n);
        } else {
          assert(false);
        }
        break;
      case "samplerCube":
        assert(canonical == uTextureCubeSampler);
        int n = (_uniformLocations.containsKey(uTextureSampler) ? 1 : 0) +
            (_uniformLocations.containsKey(uTexture2Sampler) ? 1 : 0);
        gl.activeTexture(WEBGL.TEXTURE0 + n);
        gl.bindTexture(WEBGL.TEXTURE_CUBE_MAP, val.GetTexture());
        gl.uniform1i(l, n);
        break;
      default:
        assert(false);
    }
  }

  void MaybeSetUniform(String canonical) {
    if (_uniformLocations.containsKey(canonical)) {
      SetUniform(canonical, inputs.GetUniformVal(canonical));
    }
  }

  void MaybeSetUniformsBulk(ShaderProgramInputs inputs) {
    for (String canonical in inputs.GetCanonicals()) {
      var val = inputs.GetUniformVal(canonical);
      if (_uniformLocations.containsKey(canonical)) {
        SetUniform(canonical, val);
      }
    }
  }

  void draw(Matrix4 pMatrix, [Matrix4 overrideMvMatrix]) {
    if (!hasEnabledObjects()) return;

    if (debug) print("name: $name");

    gl.useProgram(program);
    for (String a in _attributeLocations.keys) {
      gl.enableVertexAttribArray(_attributeLocations[a]);
      // see whether we can move the instancing stuff here as well
    }

    Camera camera = chronosGL.getCamera();
    camera.getMVMatrix(mvMatrix, false);

    inputs.SetUniformVal(uCameraNear, chronosGL.near);
    inputs.SetUniformVal(uCameraFar, chronosGL.far);
    inputs.SetUniformVal(
        uCanvasSize,
        new Vector2(
            chronosGL._canvas.clientWidth, chronosGL._canvas.clientHeight));
    inputs.SetUniformVal(uPerspectiveMatrix, pMatrix);
    inputs.SetUniformVal(uPointLightLocation, chronosGL.pointLightLocation);

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

    // like skybox
    for (Node node in followCameraObjects) {
      if (node.enabled) node.draw(this, mvMatrix);
    }

    camera.getMVMatrix(mvMatrix, true);

    inputs.SetUniformVal(uViewMatrix, mvMatrix);
    MaybeSetUniform(uViewMatrix);

    if (overrideMvMatrix != null) {
      mvMatrix.setElements(overrideMvMatrix);
    }

    for (Node node in objects) {
      if (node.enabled) node.draw(this, mvMatrix);
    }

    for (String canonical in _attributeLocations.keys) {
      int index = _attributeLocations[canonical];
      if (canonical.startsWith("ia")) {
        WEBGL.AngleInstancedArrays ext = gl.getExtension("ANGLE_instanced_arrays");
        ext.vertexAttribDivisorAngle(index, 0);
      }
      gl.disableVertexAttribArray(index);
    }
  }
}
