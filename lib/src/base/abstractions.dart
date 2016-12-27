part of base;


abstract class NamedEntity {
  final String name;
  bool debug = false;
  bool enabled = true;

  NamedEntity(this.name);
}

/// RenderInputs represents a container of Inputs for a ShaderProgram.
class RenderInputs extends NamedEntity {
  // TODO: this should contain all the state, including blending, depth writing
  // and detect incompatible settings
  Map<String, dynamic> _inputs = {};
  Map<String, NamedEntity> _origin = {};

  RenderInputs(String name) : super(name);

  void ForceInputWithOrigin(NamedEntity origin, String canonical, var val) {
    if (RetrieveShaderVarDesc(canonical) == null) throw "unknown ${canonical}";
    _inputs[canonical] = val;
    _origin[canonical] = origin;
  }

  void SetInputWithOrigin(NamedEntity origin, String canonical, var val) {
    if(_inputs.containsKey(canonical)) {
      LogError("canonical already present: ${canonical}");
      assert(false);
    }
    ForceInputWithOrigin(origin, canonical, val);
  }

  void SetInput(String canonical, val) {
    SetInputWithOrigin(this, canonical, val);
  }

  void ForceInput(String canonical, val) {
    ForceInputWithOrigin(this, canonical, val);
  }

  bool HasInput(String canonical) {
    return _inputs.containsKey(canonical);
  }

  Iterable<String> AllInputs() {
    return _inputs.keys;
  }

  void MergeInputs(RenderInputs other) {
    other._inputs.forEach((String k, v) {
      _inputs[k] = v;
      _origin[k] = other._origin[k];
    });
  }

  void Remove(String canonical) {
    assert (_inputs.containsKey(canonical));
    _inputs.remove(canonical);
    _origin.remove(canonical);
  }

  Map<String, dynamic> GetInputs() =>  _inputs;
}

/// RenderInputProvider provides inputs (aks parameters) necessary for running
/// a ShaderProgram. The primary examples for such inputs are:
/// Uniforms, Attributes, VertexBuffers
/// Each parameter has a canonical name, c.f. shader_object.dart.
/// A large number of those are already registered by default.
/// Additional ones required by custom shaders can be registered at
/// startup.
/// There are small number of unusual control inputs, e.g.
/// cBlend that indirectly effect the behavior of a ShaderProgram.
/// These are mostly related to fixed function features, like
/// blending and depth buffers.
abstract class RenderInputProvider extends NamedEntity {
  RenderInputProvider(String name) : super(name);

  void AddRenderInputs(RenderInputs inputs);
  void RemoveRenderInputs(RenderInputs inputs);
}
