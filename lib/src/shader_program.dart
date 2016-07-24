part of chronosgl;

const int DRAW_MODE_POINTS = WEBGL.POINTS;
const int DRAW_MODE_LINES = WEBGL.LINES;
const int DRAW_MODE_TRIANGLES = WEBGL.TRIANGLES;

// For use with uniforms
class ShaderProgramInputs {
  Map _uniforms = {};

  void SetUniformVal(String canonical, var val) {
    if (RetrieveShaderVarDesc(canonical) == null) throw "unknown ${canonical}";
    _uniforms[canonical] = val;
  }

  GetUniformVal(String canonical) {
    if (RetrieveShaderVarDesc(canonical) == null) throw "unknown ${canonical}";
    return _uniforms[canonical];
  }

  bool HasUniform(String canonical) {
    return _uniforms.containsKey(canonical);
  }

  Iterable<String> GetCanonicals() {
    return _uniforms.keys;
  }
}

// Represent a GPU shader program
// The protocol is roughly this:
// Begin()
// (SetUniform()* SetAttribute()* Draw())+
// End()
class CoreProgram {
  String name;
  ShaderObject _shaderObjectV;
  ShaderObject _shaderObjectF;
  WEBGL.RenderingContext _gl;
  WEBGL.Program _program;
  Map<String, int> _attributeLocations = {};
  Map<String, WEBGL.UniformLocation> _uniformLocations = {};
  Set<String> _uniformInitialized = new Set<String>();
  WEBGL.AngleInstancedArrays _extInstancedArrays;

  CoreProgram(this._gl, this._shaderObjectV, this._shaderObjectF, this.name) {
    _extInstancedArrays = _gl.getExtension("ANGLE_instanced_arrays");
    ShaderUtils su = new ShaderUtils(_gl);
    _program = su.getProgram(_shaderObjectV.shader, _shaderObjectF.shader);
    for (String v in _shaderObjectV.attributeVars.keys) {
      _attributeLocations[v] = _gl.getAttribLocation(_program, v);
      //HTML.window.console.log("$v ${_attributeLocations[v]} ");
      if (_attributeLocations[v] < 0) {
        LogError("cannot get location for  attribute $v");
        assert(false);
      }
    }

    for (String v in _shaderObjectV.uniformVars.keys) {
      _uniformLocations[v] = _gl.getUniformLocation(_program, v);
    }

    for (String v in _shaderObjectF.uniformVars.keys) {
      // This can happen! Example both shaders use uTime.
      // assert(!uniformLocations.containsKey(v));
      _uniformLocations[v] = _gl.getUniformLocation(_program, v);
    }
  }

  bool HasAttribute(String canonical) {
    return _attributeLocations.containsKey(canonical);
  }

  void SetAttribute(String canonical, WEBGL.Buffer buffer, normalized,
      int stride, int offset) {
    final int index = _attributeLocations[canonical];
    _gl.bindBuffer(WEBGL.ARRAY_BUFFER, buffer);
    ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);
    if (desc == null) throw "Unknown canonical ${canonical}";
    if (!desc.IsScalarTypeFloat()) throw "type ${canonical} is not float";
    _gl.vertexAttribPointer(
        index, desc.GetSize(), WEBGL.FLOAT, normalized, stride, offset);
  }

  void SetElementArray(WEBGL.Buffer b) {
    _gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, b);
  }

  bool HasUniform(String canonical) {
    return _uniformLocations.containsKey(canonical);
  }

  void SetUniform(String canonical, var val) {
    _uniformInitialized.add(canonical);

    // Note, we could make this smarter and skip
    // overwriting values with the same values;
    ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);
    if (desc == null) throw "unknown ${canonical}";
    assert(_uniformLocations.containsKey(canonical));
    WEBGL.UniformLocation l = _uniformLocations[canonical];
    switch (desc.type) {
      case "float":
        _gl.uniform1f(l, val);
        break;
      case "mat4":
        _gl.uniformMatrix4fv(l, false, val.storage);
        break;
      case "mat3":
        _gl.uniformMatrix3fv(l, false, val.storage);
        break;
      case "vec4":
        assert(val.storage.length == 4);
        _gl.uniform4fv(l, val.storage);
        break;
      case "vec3":
        assert(val.storage.length == 3);
        _gl.uniform3fv(l, val.storage);
        break;
      case "vec2":
        assert(val.storage.length == 2);
        _gl.uniform2fv(l, val.storage);
        break;
      case "sampler2D":
        int n;
        switch (canonical) {
          case uTextureSampler:
            n = 0;
            break;
          case uTexture2Sampler:
            n = 1;
            break;
          case uTexture3Sampler:
            n = 2;
            break;
          case uTexture4Sampler:
            n = 3;
            break;
          default:
            throw "unknown texture ";
        }
        _gl.activeTexture(WEBGL.TEXTURE0 + n);
        _gl.bindTexture(WEBGL.TEXTURE_2D, val.GetTexture());
        _gl.uniform1i(l, n);
        break;
      case "samplerCube":
        assert(canonical == uTextureCubeSampler);
        int n = (_uniformLocations.containsKey(uTextureSampler) ? 1 : 0) +
            (_uniformLocations.containsKey(uTexture2Sampler) ? 1 : 0);
        _gl.activeTexture(WEBGL.TEXTURE0 + n);
        _gl.bindTexture(WEBGL.TEXTURE_CUBE_MAP, val.GetTexture());
        _gl.uniform1i(l, n);
        break;
      default:
        print("Error: unknow uniform type: ${desc.type}");
        assert(false);
    }
  }

  bool AllUniformsInitialized() {
    //LogInfo("program ${program.name}");
    //     LogInfo("want: ${program.uniformLocations}");
    //     LogInfo("have: ${program._uniformInitialized}");
    return _uniformInitialized.length == _uniformLocations.length;
  }

  List<String> UniformsUninitialized() {
    List<String> out = [];
    for (String u in _uniformLocations.keys) {
      if (!_uniformInitialized.contains(u)) out.add(u);
    }
    return out;
  }

  void Begin(bool debug) {
    if (debug) print("[${name} setting attributes");
    _gl.useProgram(_program);
    for (String a in _attributeLocations.keys) {
      final index = _attributeLocations[a];
      if (debug) print("[${name}] $a $index");
      _gl.enableVertexAttribArray(index);
      if (a.startsWith("ia")) {
        _extInstancedArrays.vertexAttribDivisorAngle(index, 1);
      }
    }
  }

  void Draw(bool debug, int numInstances, int numItems, int drawMode,
      bool useArrayBuffer) {
    if (debug)
      print("[${name}] draw points: ${drawMode} instances${numInstances}");
    if (!AllUniformsInitialized()) {
      throw "${name}: uninitialized uniforms: ${UniformsUninitialized()}";
    }


    if (numInstances > 0) {
      if (useArrayBuffer) {
        _extInstancedArrays.drawElementsInstancedAngle(
            drawMode,
            numItems,
            ChronosGL.useElementIndexUint
                ? WEBGL.UNSIGNED_INT
                : WEBGL.UNSIGNED_SHORT,
            0,
            numInstances);
      } else {
        _extInstancedArrays.drawArraysInstancedAngle(
            drawMode, 0, numItems, numInstances);
      }
    } else {
      if (useArrayBuffer) {
        _gl.drawElements(
            drawMode,
            numItems,
            ChronosGL.useElementIndexUint
                ? WEBGL.UNSIGNED_INT
                : WEBGL.UNSIGNED_SHORT,
            0);
      } else {
        _gl.drawArrays(drawMode, 0, numItems);
      }
    }
    if (debug) print(_gl.getProgramInfoLog(_program));
  }

  void End(bool debug) {
    if (debug) print("[${name} unsetting attributes");
    for (String canonical in _attributeLocations.keys) {
      int index = _attributeLocations[canonical];
      if (canonical.startsWith("ia")) {
        _extInstancedArrays.vertexAttribDivisorAngle(index, 0);
      }
      _gl.disableVertexAttribArray(index);
    }
  }
}

// ShaderProgram represents multiple invocations of the same
// CoreProgram.
class ShaderProgram implements Drawable {
  ShaderProgramInputs inputs = new ShaderProgramInputs();

  WEBGL.RenderingContext _gl;
  CoreProgram _program;

  // Should this be done per processed Mesh?

  bool debug = false;
  bool active;

  // these are the identity by default
  VM.Matrix4 modelviewMatrix = new VM.Matrix4.identity();
  VM.Matrix4 viewMatrix = new VM.Matrix4.identity();
  VM.Matrix4 normalMatrix = new VM.Matrix4.identity();
  List<Node> followCameraObjects = new List<Node>();
  List<Node> objects = new List<Node>();

  ShaderProgram(this._gl, shaderObjectV, shaderObjectF, name) {
    _program = new CoreProgram(_gl, shaderObjectV, shaderObjectF, name);
    inputs.SetUniformVal(uTime, 0.0);
  }

  ShaderProgram.Clone(this._gl, ShaderProgram other) {
    assert(other != null);
    _program = other._program;
    inputs.SetUniformVal(uTime, 0.0);
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

  void MaybeSetAttribute(String canonical, WEBGL.Buffer buffer,
      [bool normalized = false, int stride = 0, int offset = 0]) {
    if (!_program.HasAttribute(canonical)) return;
    _program.SetAttribute(canonical, buffer, normalized, stride, offset);
  }

  void SetElementArray(WEBGL.Buffer b) {
    _program.SetElementArray(b);
  }

  void MaybeSetUniform(String canonical) {
    if (_program.HasUniform(canonical)) {
      _program.SetUniform(canonical, inputs.GetUniformVal(canonical));
    }
  }

  void MaybeSetUniformsBulk(ShaderProgramInputs inputs) {
    for (String canonical in inputs.GetCanonicals()) {
      var val = inputs.GetUniformVal(canonical);
      if (_program.HasUniform(canonical)) {
        _program.SetUniform(canonical, val);
      }
    }
  }

  void Draw(int numInstances, int numItems, int drawMode, bool useArrayBuffer) {
    _program.Draw(debug, numInstances, numItems, drawMode, useArrayBuffer);
  }

  void draw(PerspectiveParams dynpar, List<Light> lights, Camera camera,
      VM.Matrix4 pMatrix) {
    if (!hasEnabledObjects()) return;

    _program.Begin(debug);

    if (debug) print("[setting ununiforms");
    inputs.SetUniformVal(uCameraNear, dynpar.near);
    inputs.SetUniformVal(uCameraFar, dynpar.far);
    inputs.SetUniformVal(
        uCanvasSize, new VM.Vector2(dynpar.width.toDouble(), dynpar.height.toDouble()));
    inputs.SetUniformVal(uPerspectiveMatrix, pMatrix);
    if (camera != null) {
      camera.getViewMatrix(viewMatrix);
      modelviewMatrix.setFrom(viewMatrix);
      inputs.SetUniformVal(uViewMatrix, viewMatrix);
    }
    for (int i = 0; i < lights.length; ++i) {
      Light l = lights[i];
      String canonical = uLightSourceInfo + "$i";
      inputs.SetUniformVal(canonical, l.PackInfo(viewMatrix));
    }

    //print( "error: ${gl.getError()}" );

    //print( "pM: ${pMatrix} ${pMatrixUniform}" );

    //print( "mvM: ${mvMatrix}");

    // like skybox
    if (debug) print("[draw followCameraObjects ${followCameraObjects.length}");

    // This is broken but without an example it is hard fix
    for (Node node in followCameraObjects) {
      if (node.enabled) node.draw(this, inputs, modelviewMatrix);
    }

    if (debug) print("[draw objects ${objects.length}");
    for (Node node in objects) {
      if (node.enabled) node.draw(this, inputs, modelviewMatrix);
    }
    _program.End(debug);
  }
}
