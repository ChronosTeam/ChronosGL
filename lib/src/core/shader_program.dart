part of core;

/// ## Class ShaderProgram (is a RenderProgram)
/// represents invocations of an actual GPU program.
class ShaderProgram extends RenderProgram {
  ChronosGL _cgl;
  ShaderObject _shaderObjectV;
  ShaderObject _shaderObjectF;
  dynamic /* gl  Program */ _program;

  Set<String> _attributes;
  Map<String, dynamic /* gl UniformLocation */ > _uniformLocations = {};
  Set<String> _uniformsInitialized = new Set<String>();
  Set<String> _attributesInitialized = new Set<String>();
  // Per draw state
  int _drawMode;
  int _numInstances;
  int _numItems;
  int _nextTextureUnit;
  int _elementArrayBufferType;
  var _elementArrayBuffer;

  ShaderProgram(
      String name, this._cgl, this._shaderObjectV, this._shaderObjectF)
      : super(name) {
    _program = _cgl.CompileWholeProgram(_shaderObjectV.shader,
        _shaderObjectF.shader, _shaderObjectV.transformVars);

    _attributes = new Set.from(_shaderObjectV.attributeVars);
    for (String v in _shaderObjectV.uniformVars) {
      _uniformLocations[v] = _cgl.getUniformLocation(_program, v);
    }

    for (String v in _shaderObjectF.uniformVars) {
      // This can happen! Example both shaders use uTime.
      // assert(!uniformLocations.containsKey(v));
      _uniformLocations[v] = _cgl.getUniformLocation(_program, v);
    }
  }

  MeshData MakeMeshData(String name, int drawMode) {
     return new MeshData(name, _cgl, drawMode, _shaderObjectV.GetLayoutMap());
  }

  bool HasCompatibleAttributesTo(ShaderProgram other) {
    var a = _shaderObjectV.GetLayoutMap();
    var b = other._shaderObjectV.GetLayoutMap();
    if (a.length != b.length) return false;
    for (String key in a.keys) {
      if (a[key] != b[key]) return false;
    }
    return true;
  }

  bool HasDownCompatibleAttributesTo(ShaderProgram other) {
    var a = _shaderObjectV.GetLayoutMap();
    var b = other._shaderObjectV.GetLayoutMap();
    for (String key in a.keys) {
      if (a[key] != b[key]) return false;
    }
    return true;
  }

  void _ClearState() {
    _numInstances = 0;
    _nextTextureUnit = 0;
    _numItems = 0;
    _drawMode = -1;
    _elementArrayBufferType = 0;
    _elementArrayBuffer = null;
  }


  bool _HasAttribute(String canonical) {
    return _attributes.contains(canonical);
  }

  ChronosGL getContext() => _cgl;

  void _SetAttribute(String canonical, dynamic /* Buffer */ buffer, normalized,
      int stride, int offset) {
    _attributesInitialized.add(canonical);
    final int index = _shaderObjectV.GetLayoutPos(canonical);
    ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);
    if (desc == null) throw "Unknown canonical ${canonical}";
    switch (desc.type) {
      case VarTypeFloat:
      case VarTypeVec2:
      case VarTypeVec3:
      case VarTypeVec4:
        _cgl.vertexAttribPointer(buffer, index, desc.GetSize(), GL_FLOAT,
            normalized, stride, offset);
        break;
      case VarTypeUvec2:
      case VarTypeUvec3:
      case VarTypeUvec4:
        assert(false);
        /*
        _cgl.gl.vertexAttribIPointer(
            index, desc.GetSize(), GL_UNSIGNED_INT, normalized, stride, offset);
            */
        break;
      default:
        throw "type ${canonical} - ${desc.type} not supported";
        break;
    }
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
          _cgl.enable(GL_DEPTH_TEST);
        } else {
          _cgl.disable(GL_DEPTH_TEST);
        }
        break;
      case cStencilFunc:
        TheStencilFunction sfun = val as TheStencilFunction;
        if (sfun.func == GL_INVALID_VALUE) {
          _cgl.disable(GL_STENCIL_TEST);
        } else {
          _cgl.enable(GL_STENCIL_TEST);
          _cgl.stencilFunc(sfun.func, sfun.value, sfun.mask);
        }
        break;
      case cDepthWrite:
        _cgl.depthMask(val);
        break;
      case cBlendEquation:
        TheBlendEquation beq = val as TheBlendEquation;
        if (beq.equation == GL_INVALID_VALUE) {
          _cgl.disable(GL_BLEND);
        } else {
          _cgl.enable(GL_BLEND);
          _cgl.blendFunc(beq.srcFactor, beq.dstFactor);
          _cgl.blendEquation(beq.equation);
        }
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
    dynamic /* UniformLocation */ l = _uniformLocations[canonical];
    switch (desc.type) {
      case VarTypeFloat:
        if (desc.arraySize == 0) {
          _cgl.uniform1f(l, val);
        } else if (val is Float32List) {
          _cgl.uniform1fv(l, val);
        }
        break;
      case VarTypeMat4:
        if (desc.arraySize == 0) {
          _cgl.uniformMatrix4fv(l, false, val.storage);
        } else if (val is Float32List) {
          _cgl.uniformMatrix4fv(l, false, val);
        } else {
          assert(false, "bad unform: ${canonical}");
        }
        break;
      case VarTypeMat3:
        if (desc.arraySize == 0) {
          _cgl.uniformMatrix3fv(l, false, val.storage);
        } else if (val is Float32List) {
          _cgl.uniformMatrix3fv(l, false, val);
        } else {
          assert(false, "bad unform: ${canonical}");
        }
        break;
      case VarTypeVec4:
        if (desc.arraySize == 0) {
          assert(val.storage.length == 4);
          _cgl.uniform4fv(l, val.storage);
        } else {
          _cgl.uniform4fv(l, val);
        }
        break;
      case VarTypeVec3:
        if (desc.arraySize == 0) {
          assert(val.storage.length == 3);
          _cgl.uniform3fv(l, val.storage);
        } else {
          _cgl.uniform3fv(l, val);
        }
        break;
      case VarTypeVec2:
        if (desc.arraySize == 0) {
          assert(val.storage.length == 2);
          _cgl.uniform2fv(l, val.storage);
        } else {
          _cgl.uniform2fv(l, val);
        }
        break;
      case VarTypeSampler2D:
      case VarTypeSampler2DShadow:
        _cgl.activeTexture(GL_TEXTURE0 + _nextTextureUnit);
        _cgl.bindTexture(GL_TEXTURE_2D, val.GetTexture());
        _cgl.uniform1i(l, _nextTextureUnit);
        _nextTextureUnit++;
        break;
      case VarTypeSamplerCube:
        assert(canonical == uCubeTexture);
        _cgl.activeTexture(GL_TEXTURE0 + _nextTextureUnit);
        _cgl.bindTexture(GL_TEXTURE_CUBE_MAP, val.GetTexture());
        _cgl.uniform1i(l, _nextTextureUnit);
        _nextTextureUnit++;
        break;
      default:
        print("Error: unknow uniform type: ${desc.type}");
        assert(false);
    }
  }

  List<String> UninitializedInputs() {
    if (_uniformsInitialized.length == _uniformLocations.length &&
        _attributesInitialized.length == _attributes.length) return [];
    List<String> out = [];
    for (String u in _uniformLocations.keys) {
      if (!_uniformsInitialized.contains(u)) out.add(u);
    }
    for (String u in _attributes) {
      if (!_attributesInitialized.contains(u)) out.add(u);
    }
    return out;
  }

  @override
  void DrawSetUp() {
    if (debug) print("[${name} setting attributes");
    _cgl.useProgram(_program);
    for (String a in _attributes) {
      final index = _shaderObjectV.GetLayoutPos(a);
      if (debug) print("[${name}] $a $index");
      _cgl.enableVertexAttribArray(
          index, a.codeUnitAt(0) == prefixInstancer ? 1 : 0);
    }
  }

  void SetInputs(Map<String, dynamic> inputs) {
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
            _elementArrayBuffer = inputs[canonical];
            ++count;
          } else if (canonical == eArrayType) {
            _elementArrayBufferType = inputs[canonical];
          }
          break;
        case prefixControl:
          _SetControl(canonical, inputs[canonical]);
          ++count;
          break;
        case prefixInstancer:
        case prefixAttribute:
          if (_HasAttribute(canonical)) {
            // _SetAttribute(canonical, inputs[canonical], false, 0, 0);
            ++count;
          }
          break;
      }
    }
    final Duration delta = new DateTime.now().difference(start);
    LogDebug("setting ${count} var in ${delta}");
  }

  @override
  void DrawOne(Map<String, dynamic> inputs, List<DrawStats> stats) {
    _numInstances = 0;
    // TODO: put this behind a flag
    _attributesInitialized.clear();
    _uniformsInitialized.clear();
    _ClearState();
    SetInputs(inputs);
    if (_numItems == 0) return;
    if (stats != null) {
      stats.add(new DrawStats(name, _numInstances, _numItems, _drawMode));
    }
    if (debug)
      print("[${name}] draw points: ${_drawMode} instances${_numInstances}");
    // TODO: put this behind a flag
    List<String> uninitialized = UninitializedInputs();
    if (uninitialized.isNotEmpty) {
      String mesg =
          "${name} ${_drawMode}: uninitialized inputs: ${uninitialized}";
      LogError(mesg);
      //throw mesg;
    }

    bool hasTransforms = _shaderObjectV.transformVars.length > 0;
    _cgl.draw(_drawMode, _numItems, _elementArrayBuffer,
        _elementArrayBufferType, 0, _numInstances, hasTransforms);

    if (debug) print(_cgl.getProgramInfoLog(_program));
  }

  @override
  void DrawTearDown() {
    if (debug) print("[${name} unsetting attributes");
    for (String canonical in _attributes) {
      int index = _shaderObjectV.GetLayoutPos(canonical);
      _cgl.disableVertexAttribArray(
          index, canonical.codeUnitAt(0) == prefixInstancer);
    }
  }
}
