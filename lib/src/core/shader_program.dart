part of core;

class DrawStats {
  String name;
  int numInstances;
  int numItems;
  int drawMode;

  DrawStats(this.name, this.numInstances, this.numItems, this.drawMode);

  @override
  String toString() => "[${name}] ${numInstances} ${numItems} ${drawMode}";
}

/// ## Class RenderProgram (is a RenderInputSink)
/// represents several invocations of the same program running on the GPU.
/// It consists of a tree of **Nodes** which provide **Inputs** for the
/// program. The program is invoked once for most **Nodes** while traversing
/// the tree recursively.
class RenderProgram extends RenderInputSink {
  ChronosGL _cgl;
  ShaderObject _shaderObjectV;
  ShaderObject _shaderObjectF;
  dynamic /* gl  Program */ _program;

  Set<String> _attributes;
  Map<String, dynamic /* gl UniformLocation */ > _uniformLocations = {};
  Set<String> _uniformsInitialized = new Set<String>();
  Set<String> _attributesInitialized = new Set<String>();

  int _nextTextureUnit;

  // these are the identity by default
  final VM.Matrix4 _modelMatrix = new VM.Matrix4.identity();
  final List<Node> objects = new List<Node>();

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

  void add(Node obj) {
    objects.add(obj);
  }

  bool remove(Node obj) {
    return objects.remove(obj);
  }

  void removeAll() {
    objects.clear();
  }

  MeshData MakeMeshData(String name, int drawMode) {
    return new MeshData(name, _cgl, drawMode, _shaderObjectV.GetLayoutMap());
  }

  bool HasCompatibleAttributesTo(RenderProgram other) {
    var a = _shaderObjectV.GetLayoutMap();
    var b = other._shaderObjectV.GetLayoutMap();
    if (a.length != b.length) return false;
    for (String key in a.keys) {
      if (a[key] != b[key]) return false;
    }
    return true;
  }

  bool HasDownwardCompatibleAttributesTo(RenderProgram other) {
    var a = _shaderObjectV.GetLayoutMap();
    var b = other._shaderObjectV.GetLayoutMap();
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

  bool _HasAttribute(String canonical) {
    return _attributes.contains(canonical);
  }

  ChronosGL getContext() => _cgl;

  bool _HasUniform(String canonical) {
    return _uniformLocations.containsKey(canonical);
  }

  void _SetControl(String canonical, var val) {
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

  void DrawSetUp() {
    if (debug) print("[${name} setting attributes");
    _cgl.useProgram(_program);
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

  void _drawOne(
      MeshData md, Map<String, dynamic> inputs, List<DrawStats> stats) {
    _ClearState();

    // TODO: put this behind a flag
    _uniformsInitialized.clear();
    SetInputs(inputs);

    _attributesInitialized.clear();
    for (String a in md.GetAttributes()) {
      _attributesInitialized.add(a);
    }
    if (stats != null) {
      stats.add(new DrawStats(
          name, md.GetNumInstances(), md.GetNumItems(), md.drawMode));
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

    md.SetUp();
    bool hasTransforms = _shaderObjectV.transformVars.length > 0;
    _cgl.draw(md.drawMode, md.GetNumItems(), md.elementArrayBufferType, 0,
        md.GetNumInstances(), hasTransforms);
    if (debug) print(_cgl.getProgramInfoLog(_program));
    md.TearDown();
  }

  void _drawRecursively(
      Node node, final VM.Matrix4 parent, List<DrawStats> stats) {
    if (!node.enabled) return;
    // m is read-only!
    final VM.Matrix4 m = node.UpdateModelMatrix(parent);
    if (node.SomethingToDraw()) {
      LogDebug("drawing: ${node}");
      node.AddShaderInputs(this);
      _drawOne(node.meshData, GetInputs(), stats);
      node.RemoveShaderInputs(this);
    }
    for (Node child in node.children) {
      _drawRecursively(child, m, stats);
    }
  }

  // This is a weird flow control:
  // * When draw() is called,
  // * we recursively draw items in objects passing "this" as a parameter
  // * the objects then call the Draw method above
  void draw(List<DrawStats> stats) {
    DrawSetUp();
    _modelMatrix.setIdentity();
    if (debug) print("[draw objects ${objects.length}");
    for (Node node in objects) {
      _drawRecursively(node, _modelMatrix, stats);
    }
    DrawTearDown();
  }

  void DrawTearDown() {}
}
