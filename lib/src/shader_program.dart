part of chronosgl;


// Represent a GPU shader program
// The protocol is roughly this:
// Begin()
// (SetUniform()* SetAttribute()* Draw())+
// End()
class ShaderProgram {
  String name;
  ShaderObject _shaderObjectV;
  ShaderObject _shaderObjectF;
  WEBGL.RenderingContext _gl;
  WEBGL.Program _program;
  Map<String, int> _attributeLocations = {};
  Map<String, WEBGL.UniformLocation> _uniformLocations = {};
  Set<String> _uniformInitialized = new Set<String>();
  WEBGL.AngleInstancedArrays _extInstancedArrays;

  ShaderProgram(this._gl, this._shaderObjectV, this._shaderObjectF, this.name) {
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

  bool _HasAttribute(String canonical) {
    return _attributeLocations.containsKey(canonical);
  }

  void _SetAttribute(String canonical, WEBGL.Buffer buffer, normalized,
      int stride, int offset) {
    final int index = _attributeLocations[canonical];
    _gl.bindBuffer(WEBGL.ARRAY_BUFFER, buffer);
    ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);
    if (desc == null) throw "Unknown canonical ${canonical}";
    if (!desc.IsScalarTypeFloat()) throw "type ${canonical} is not float";
    _gl.vertexAttribPointer(
        index, desc.GetSize(), WEBGL.FLOAT, normalized, stride, offset);
  }

  bool _HasUniform(String canonical) {
    return _uniformLocations.containsKey(canonical);
  }

  void _SetUniform(String canonical, var val) {
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
          case uShadowSampler0:
            n = 8;
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
      if (a.codeUnitAt(0) == prefixInstancer) {
        _extInstancedArrays.vertexAttribDivisorAngle(index, 1);
      }
    }
  }

  void SetInputs(Map<String, dynamic> inputs) {
    for (String canonical in inputs.keys) {
      switch (canonical.codeUnitAt(0)) {
        case prefixUniform:
          if (_HasUniform(canonical)) {
            _SetUniform(canonical, inputs[canonical]);
          }
          break;
        case prefixElement:
          _gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, inputs[canonical]);
          break;
        case prefixInstancer:
        case prefixAttribute:
          if (_HasAttribute(canonical)) {
            _SetAttribute(canonical, inputs[canonical], false, 0, 0);
          }
          break;
      }
    }
  }

  void Draw(bool debug, Map<String, dynamic> inputs, int numInstances,
      int numItems, int drawMode) {
    SetInputs(inputs);
    if (debug)
      print("[${name}] draw points: ${drawMode} instances${numInstances}");
    if (!AllUniformsInitialized()) {
      throw "${name}: uninitialized uniforms: ${UniformsUninitialized()}";
    }

    final bool useArrayBuffer = inputs.containsKey(eArray);
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

