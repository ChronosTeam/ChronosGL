part of base;

/// NamedEntity is the class that almost all other classed in
/// ChronosGL inherit from.
/// It mostly exists to help with debugging by given objects names.
/// It also provides a simple mechanism for en-/dis-abling objects.
abstract class NamedEntity {
  final String name;
  bool debug = false;
  bool enabled = true;

  NamedEntity(this.name);
}

/// RenderInputs represents a container of Inputs for program
/// running on the GPU.
/// The best known input types are Uniforms and Attributes but
/// ChronosGL goes a step further and also considers blending
/// modes, depth-test, etc. to be inputs as well.
///
/// Each input has a canonical name. By convention the first
/// letter of the canonical name signal the type of input:
/// a: Attribute
/// v: Uniform
/// ...
///
/// A large number of those names are already registered by default.
/// Additional ones required by custom shaders can be registered at
/// startup.
///
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

/// RenderInputProvider is an abstract interface for adding/removing
/// inputs to/from a RenderInputs object.
///
/// Typically the RenderInputs object will be GPU program
/// and the RenderInputsProvider will be
/// a Projections object to provide a perspective matrix uniform
/// or a MeshData object to provide vertex attributes
/// or Material object to provide color and texture uniforms
/// or ...
abstract class RenderInputProvider extends NamedEntity {
  RenderInputProvider(String name) : super(name);

  void AddRenderInputs(RenderInputs inputs);
  void RemoveRenderInputs(RenderInputs inputs);
}
