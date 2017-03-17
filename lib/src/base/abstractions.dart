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

class UnknownEntity extends NamedEntity {
  UnknownEntity() : super("UnknownEntity");
}

final NamedEntity kUnknownEntity = new UnknownEntity();

/// ## Class RenderInputsSink (is a NamedEntity)
/// represents a collection of **Inputs**
/// There is only one class inheriting from it: RenderProgram
/// The **Inputs** are usually populated by **RenderInputSource** via
/// their AddToThink(), but **Inputs** can also set directly by
/// calling SetInput()/ForceInput().
class RenderInputSink extends NamedEntity {
  // TODO: this should contain all the state, including blending, depth writing
  // and detect incompatible settings
  Map<String, dynamic> _inputs = {};
  Map<String, NamedEntity> _origin = {};

  RenderInputSink(String name) : super(name);

  void ForceInput(String canonical, var val, [NamedEntity origin = null]) {
    if (RetrieveShaderVarDesc(canonical) == null) throw "unknown ${canonical}";
    if (origin == null) origin = kUnknownEntity;
    _inputs[canonical] = val;
    _origin[canonical] = origin;
  }

  void SetInput(String canonical, var val, [NamedEntity origin = null]) {
    if (_inputs.containsKey(canonical)) {
      LogError("canonical already present: ${canonical}");
      assert(false);
    }
    ForceInput(canonical, val, origin);
  }

  bool HasInput(String canonical) {
    return _inputs.containsKey(canonical);
  }

  Iterable<String> AllInputs() {
    return _inputs.keys;
  }

  void Remove(String canonical) {
    assert(_inputs.containsKey(canonical));
    _inputs.remove(canonical);
    _origin.remove(canonical);
  }

  Map<String, dynamic> GetInputs() => _inputs;
}

/// ## Class RenderInputSource (is a NamedEntity)
/// is an abstraction for adding/removing
/// inputs to/from a RenderInputSink object.
///
/// Typically the RenderInputSink object will be GPU program
/// and the RenderInputSource
/// a Projections object to provide a perspective matrix uniform
/// or a MeshData object to provide vertex attributes
/// or Material object to provide color and texture uniforms
/// or ...
abstract class RenderInputSource extends NamedEntity {
  RenderInputSource(String name) : super(name);

  void AddToSink(RenderInputSink inputs);
  void RemoveFromSink(RenderInputSink inputs);
}
