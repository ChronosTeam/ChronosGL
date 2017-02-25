part of core;

/// ## Class ShaderProgram (is a RenderProgram)
/// represents invocations of an actual GPU program.
class ShaderProgram extends RenderProgram {
  ChronosGL _cgl;
  ShaderObject _shaderObjectV;
  ShaderObject _shaderObjectF;
  WEBGL.Program _program;
  Map<String, int> _attributeLocations = {};
  Map<String, WEBGL.UniformLocation> _uniformLocations = {};
  Set<String> _uniformsInitialized = new Set<String>();
  Set<String> _attributesInitialized = new Set<String>();
  // WEBGL.AngleInstancedArrays  for Dartium
  // WEBGL.ANGLEInstancedArrays for DDC
  int _drawMode = -1;
  int _numInstances = 0;
  int _numItems = 0;
  int _nextTextureUnit = 0;

  ShaderProgram(String name, this._cgl, this._shaderObjectV, this._shaderObjectF)
      : super(name) {
    _program =
        CompileWholeProgram(_cgl, _shaderObjectV.shader, _shaderObjectF.shader);
    for (String v in _shaderObjectV.attributeVars.keys) {
      _attributeLocations[v] = _cgl.gl.getAttribLocation(_program, v);
      if (_attributeLocations[v] < 0) {
        LogError("cannot get location for  attribute $v");
        assert(false);
      }
    }

    for (String v in _shaderObjectV.uniformVars.keys) {
      _uniformLocations[v] = _cgl.gl.getUniformLocation(_program, v);
    }

    for (String v in _shaderObjectF.uniformVars.keys) {
      // This can happen! Example both shaders use uTime.
      // assert(!uniformLocations.containsKey(v));
      _uniformLocations[v] = _cgl.gl.getUniformLocation(_program, v);
    }
  }

  bool _HasAttribute(String canonical) {
    return _attributeLocations.containsKey(canonical);
  }

  void _SetAttribute(String canonical, WEBGL.Buffer buffer, normalized,
      int stride, int offset) {
    _attributesInitialized.add(canonical);
    final int index = _attributeLocations[canonical];
    _cgl.gl.bindBuffer(WEBGL.ARRAY_BUFFER, buffer);
    ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);
    if (desc == null) throw "Unknown canonical ${canonical}";
    if (!desc.IsScalarTypeFloat()) throw "type ${canonical} is not float";
    _cgl.gl.vertexAttribPointer(
        index, desc.GetSize(), WEBGL.FLOAT, normalized, stride, offset);
  }

  bool _HasUniform(String canonical) {
    return _uniformLocations.containsKey(canonical);
  }

  void _SetControl(String canonical, var val) {
    switch (canonical) {
      case cNumInstances:
        _numInstances = val;
        break;
      case cDrawMode:
        _drawMode = val;
        break;
      case cNumItems:
        _numItems = val;
        break;
      case cDepthTest:
        if (val == true) {
          _cgl.enable(WEBGL.DEPTH_TEST);
        } else {
          _cgl.disable(WEBGL.DEPTH_TEST);
        }
        break;
      case cDepthWrite:
        _cgl.gl.depthMask(val);
        break;
      case cBlend:
        if (val == true) {
          _cgl.enable(WEBGL.BLEND);
        } else {
          _cgl.disable(WEBGL.BLEND);
        }
        break;
      case cBlendEquation:
        BlendEquation beq = val as BlendEquation;
        _cgl.gl.blendFunc(beq.srcFactor, beq.dstFactor);
        _cgl.gl.blendEquation(beq.equation);
        break;
    }
  }

  void _SetUniform(String canonical, var val) {
    _uniformsInitialized.add(canonical);

    // Note, we could make this smarter and skip
    // overwriting values with the same values;
    ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);
    if (desc == null) throw "unknown ${canonical}";
    assert(_uniformLocations.containsKey(canonical));
    WEBGL.UniformLocation l = _uniformLocations[canonical];
    switch (desc.type) {
      case "float":
        if (desc.arraySize == 0) {
          _cgl.gl.uniform1f(l, val);
        } else if (val is Float32List) {
          _cgl.gl.uniform1fv(l, val);
        }
        break;
      case "mat4":
        if (desc.arraySize == 0) {
          _cgl.gl.uniformMatrix4fv(l, false, val.storage);
        } else if (val is Float32List) {
          _cgl.gl.uniformMatrix4fv(l, false, val);
        }
        break;
      case "mat3":
        _cgl.gl.uniformMatrix3fv(l, false, val.storage);
        break;
      case "vec4":
        assert(val.storage.length == 4);
        _cgl.gl.uniform4fv(l, val.storage);
        break;
      case "vec3":
        assert(val.storage.length == 3);
        _cgl.gl.uniform3fv(l, val.storage);
        break;
      case "vec2":
        assert(val.storage.length == 2);
        _cgl.gl.uniform2fv(l, val.storage);
        break;
      case "sampler2D":
        _cgl.gl.activeTexture(WEBGL.TEXTURE0 + _nextTextureUnit);
        _cgl.bindTexture(WEBGL.TEXTURE_2D, val.GetTexture());
        _cgl.gl.uniform1i(l, _nextTextureUnit);
        _nextTextureUnit++;
        break;
      case "samplerCube":
        assert(canonical == uCubeTexture);
        _cgl.gl.activeTexture(WEBGL.TEXTURE0 + _nextTextureUnit);
        _cgl.bindTexture(WEBGL.TEXTURE_CUBE_MAP, val.GetTexture());
        _cgl.gl.uniform1i(l, _nextTextureUnit);
        _nextTextureUnit++;
        break;
      default:
        print("Error: unknow uniform type: ${desc.type}");
        assert(false);
    }
  }

  List<String> UninitializedInputs() {
    if (_uniformsInitialized.length == _uniformLocations.length &&
        _attributesInitialized.length == _attributeLocations.length) return [];
    List<String> out = [];
    for (String u in _uniformLocations.keys) {
      if (!_uniformsInitialized.contains(u)) out.add(u);
    }
    for (String u in _attributeLocations.keys) {
      if (!_attributesInitialized.contains(u)) out.add(u);
    }
    return out;
  }

  @override
  void DrawSetUp() {
    if (debug) print("[${name} setting attributes");
    _cgl.gl.useProgram(_program);
    for (String a in _attributeLocations.keys) {
      final index = _attributeLocations[a];
      if (debug) print("[${name}] $a $index");
      _cgl.gl.enableVertexAttribArray(index);
      if (a.codeUnitAt(0) == prefixInstancer) {
        _cgl.ext_ANGLE_instanced_arrays.vertexAttribDivisorAngle(index, 1);
      }
    }
  }

  int SetInputs(Map<String, dynamic> inputs) {
    int indexType = 0;
    _nextTextureUnit = 0;
    int count = 0;
    final DateTime start = new DateTime.now();

    for (String canonical in inputs.keys) {
      switch (canonical.codeUnitAt(0)) {
        case prefixUniform:
          if (_HasUniform(canonical)) {
            _SetUniform(canonical, inputs[canonical]);
            ++count;
          }
          break;
        case prefixElement:
          if (canonical == eArray) {
            _cgl.gl.bindBuffer(WEBGL.ELEMENT_ARRAY_BUFFER, inputs[canonical]);
            ++count;
          } else if (canonical == eArrayType) {
            indexType = inputs[canonical];
          }
          break;
        case prefixControl:
          _SetControl(canonical, inputs[canonical]);
          ++count;
          break;
        case prefixInstancer:
        case prefixAttribute:
          if (_HasAttribute(canonical)) {
            _SetAttribute(canonical, inputs[canonical], false, 0, 0);
            ++count;
          }
          break;
      }
    }
    final Duration delta = new DateTime.now().difference(start);
    LogDebug("setting ${count} var in ${delta}");
    return indexType;
  }

  @override
  void DrawOne(Map<String, dynamic> inputs, List<DrawStats> stats) {
    _numInstances = 0;
    // TODO: put this behind a flag
    _attributesInitialized.clear();
    _uniformsInitialized.clear();
    final int indexType = SetInputs(inputs);
    if (_numItems == 0) return;
    if (stats != null) {
      stats.add(new DrawStats(name, _numInstances, _numItems, _drawMode));
    }
    if (debug)
      print("[${name}] draw points: ${_drawMode} instances${_numInstances}");
    // TODO: put this behind a flag
    List<String> uninitialized = UninitializedInputs();
    if (uninitialized.isNotEmpty) {
      String mesg = "${name}: uninitialized inputs: ${uninitialized}";
      LogError(mesg);
      throw mesg;
    }

    if (_numInstances > 0) {
      if (indexType != 0) {
        _cgl.ext_ANGLE_instanced_arrays.drawElementsInstancedAngle(
            _drawMode, _numItems, indexType, 0, _numInstances);
      } else {
        _cgl.ext_ANGLE_instanced_arrays.drawArraysInstancedAngle(
            _drawMode, 0, _numItems, _numInstances);
      }
    } else {
      if (indexType != 0) {
        _cgl.gl.drawElements(_drawMode, _numItems, indexType, 0);
      } else {
        _cgl.gl.drawArrays(_drawMode, 0, _numItems);
      }
    }
    if (debug) print(_cgl.gl.getProgramInfoLog(_program));
  }

  @override
  void DrawTearDown() {
    if (debug) print("[${name} unsetting attributes");
    for (String canonical in _attributeLocations.keys) {
      int index = _attributeLocations[canonical];
      if (canonical.startsWith("ia")) {
        _cgl.ext_ANGLE_instanced_arrays.vertexAttribDivisorAngle(index, 0);
      }
      _cgl.gl.disableVertexAttribArray(index);
    }
  }
}
