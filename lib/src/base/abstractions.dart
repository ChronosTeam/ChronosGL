part of base;

/// ## Class NamedEntity
/// is inherited by almost all other classes in ChronosGL.
/// It mostly exists to help with debugging by giving names to objects.
/// It also provides a simple mechanism for en-/dis-abling objects, though
/// what it means to be disabled will differ from class to class.
abstract class NamedEntity {
  final String name;
  bool debug = false;
  bool enabled = true;

  NamedEntity(this.name);
}

/// ## Class RenderInputs (is a NamedEntity)
/// represents a collection of **Inputs**
/// There is only one class inheriting from it: RenderProgram
/// So it will likely go away.
/// **RenderInputs** are populated by **RenderInputProvider**.
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

/// ## Class RenderInputProvider (is a NamedEntity)
/// is an abstraction for adding/removing
/// inputs to/from a RenderInputs object.
///
/// Typically the RenderInputs object will be GPU program
/// and the RenderInputsProvider
/// a Projections object to provide a perspective matrix uniform
/// or a MeshData object to provide vertex attributes
/// or Material object to provide color and texture uniforms
/// or ...
abstract class RenderInputProvider extends NamedEntity {
  RenderInputProvider(String name) : super(name);

  void AddRenderInputs(RenderInputs inputs);
  void RemoveRenderInputs(RenderInputs inputs);
}
