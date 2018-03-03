part of core;

class DrawStats {
  String name;
  int numInstances;
  int numItems;
  int drawMode;
  Duration duration;

  DrawStats(
      this.name, this.numInstances, this.numItems, this.drawMode, this.duration);

  @override
  String toString() => "[${name}] ${numInstances} ${numItems} mode:${drawMode} [${duration.inMicroseconds}usec]";
}

/// ## Class RenderProgram (is a NamedEntity)
/// represents program running on the GPU with an API to invoke it.
class RenderProgram extends NamedEntity {
  ChronosGL _cgl;
  ShaderObject _shaderObjectV;
  ShaderObject _shaderObjectF;
  Object /* gl  Program */ _program;

  Set<String> _attributes;
  Map<String, Object /* WEBGL.UniformLocation */ > _uniformLocations = {};
  Map<String, String> _uniformsInitialized = {};
  Set<String> _attributesInitialized = new Set<String>();

  int _nextTextureUnit;


  RenderProgram(
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

  ShaderObject get shaderObjectV =>  _shaderObjectV;
  ShaderObject get shaderObjectF =>  _shaderObjectF;

  int GetTransformBindingIndex(String canonical) {
    return _shaderObjectV.GetTransformBindingIndex(canonical);
  }

  MeshData MakeMeshData(String name, int drawMode) {
    return new MeshData(
        name, _cgl, drawMode, _shaderObjectV.GetAttributeLayoutMap());
  }

  bool HasCompatibleAttributesTo(RenderProgram other) {
    var a = _shaderObjectV.GetAttributeLayoutMap();
    var b = other._shaderObjectV.GetAttributeLayoutMap();
    if (a.length != b.length) return false;
    for (String key in a.keys) {
      if (a[key] != b[key]) return false;
    }
    return true;
  }

  bool HasDownwardCompatibleAttributesTo(RenderProgram other) {
    var a = _shaderObjectV.GetAttributeLayoutMap();
    var b = other._shaderObjectV.GetAttributeLayoutMap();
    for (String key in a.keys) {
      if (a[key] != b[key]) {
        return false;
      }
    }
    return true;
  }

  void _ClearState() {
    _nextTextureUnit = 0;
  }

  ChronosGL getContext() => _cgl;

  bool _HasUniform(String canonical) {
    return _uniformLocations.containsKey(canonical);
  }

  void _SetControl(String canonical, Object val) {
    switch (canonical) {
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

  void _SetUniform(String group, String canonical, Object val) {
    // enable only for debug
    if (_uniformsInitialized.containsKey(canonical)) {
      LogError(
          "${canonical} : group [${group}] overwrites [${canonical}]");
    }
    _uniformsInitialized[canonical] = group;

    // Note, we could make this smarter and skip
    // overwriting values with the same values;
    ShaderVarDesc desc = RetrieveShaderVarDesc(canonical);
    if (desc == null) throw "unknown ${canonical}";
    assert(_uniformLocations.containsKey(canonical));
    Object /* UniformLocation */ l = _uniformLocations[canonical];
    switch (desc.type) {
      case VarTypeInt:
        if (desc.arraySize == 0) {
          _cgl.uniform1i(l, val);
        } else if (val is Int32List) {
          _cgl.uniform1iv(l, val);
        }
        break;
      case VarTypeFloat:
        if (desc.arraySize == 0) {
          _cgl.uniform1f(l, val);
        } else if (val is Float32List) {
          _cgl.uniform1fv(l, val);
        }
        break;
      case VarTypeMat4:
        if (desc.arraySize == 0) {
          _cgl.uniformMatrix4fv(l, false, (val as VM.Matrix4).storage);
        } else if (val is Float32List) {
          _cgl.uniformMatrix4fv(l, false, val);
        } else {
          assert(false, "bad unform: ${canonical}");
        }
        break;
      case VarTypeMat3:
        if (desc.arraySize == 0) {
          _cgl.uniformMatrix3fv(l, false, (val as VM.Matrix3).storage);
        } else if (val is Float32List) {
          _cgl.uniformMatrix3fv(l, false, val);
        } else {
          assert(false, "bad unform: ${canonical}");
        }
        break;
      case VarTypeVec4:
        if (desc.arraySize == 0) {
          _cgl.uniform4fv(l, (val as VM.Vector4).storage);
        } else {
          _cgl.uniform4fv(l, val);
        }
        break;
      case VarTypeVec3:
        if (desc.arraySize == 0) {
          _cgl.uniform3fv(l, (val as VM.Vector3).storage);
        } else {
          _cgl.uniform3fv(l, val);
        }
        break;
      case VarTypeVec2:
        if (desc.arraySize == 0) {
          _cgl.uniform2fv(l, (val as VM.Vector2).storage);
        } else {
          _cgl.uniform2fv(l, val);
        }
        break;
      case VarTypeSampler2D:
      case VarTypeSampler2DShadow:
        _cgl.activeTexture(GL_TEXTURE0 + _nextTextureUnit);
        _cgl.bindTexture(GL_TEXTURE_2D, (val as Texture).GetTexture());
        _cgl.uniform1i(l, _nextTextureUnit);
        _nextTextureUnit++;
        break;
      case VarTypeSamplerCube:
        assert(canonical == uCubeTexture);
        _cgl.activeTexture(GL_TEXTURE0 + _nextTextureUnit);
        _cgl.bindTexture(GL_TEXTURE_CUBE_MAP, (val as Texture).GetTexture());
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
      if (!_uniformsInitialized.containsKey(u)) out.add(u);
    }
    for (String u in _attributes) {
      if (!_attributesInitialized.contains(u)) out.add(u);
    }
    return out;
  }

  void _ActivateUniforms(String group, Map<String, Object> inputs) {
    int count = 0;
    final DateTime start = new DateTime.now();

    for (String canonical in inputs.keys) {
      switch (canonical.codeUnitAt(0)) {
        case prefixUniform:
          if (_HasUniform(canonical)) {
            _SetUniform(group, canonical, inputs[canonical]);
            ++count;
          }
          break;
        case prefixControl:
          _SetControl(canonical, inputs[canonical]);
          ++count;
          break;
      }
    }
    final Duration delta = new DateTime.now().difference(start);
    LogDebug("setting ${count} var in ${delta}");
  }

  void Draw(MeshData md, List<UniformGroup> uniforms,
      [List<DrawStats> stats]) {
    final DateTime start = new DateTime.now();
    _cgl.useProgram(_program);
    _ClearState();

    // TODO: put this behind a flag
    _uniformsInitialized.clear();
    for (UniformGroup u in uniforms) {
      _ActivateUniforms(u.name, u.GetUniforms());
    }

    _attributesInitialized.clear();
    for (String a in md.GetAttributes()) {
      _attributesInitialized.add(a);
    }
    if (debug)
      print(
          "[${name}] draw points: ${md.drawMode} instances${md.GetNumInstances()}");
    // TODO: put this behind a flag
    List<String> uninitialized = UninitializedInputs();
    if (uninitialized.isNotEmpty) {
      String mesg =
          "${name} ${md.drawMode}: uninitialized inputs: ${uninitialized}";
      LogError(mesg);
      //throw mesg;
    }

    md.Activate();
    bool hasTransforms = _shaderObjectV.transformVars.length > 0;
    _cgl.draw(md.drawMode, md.GetNumItems(), md.elementArrayBufferType, 0,
        md.GetNumInstances(), hasTransforms);
    if (debug) print(_cgl.getProgramInfoLog(_program));
    if (stats != null) {
      stats.add(new DrawStats(name, md.GetNumInstances(), md.GetNumItems(),
          md.drawMode, new DateTime.now().difference(start)));
    }
  }
}
