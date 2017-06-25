part of core;

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


/// ## Class UniformGroup (is a NamedEntity)
/// is an abstraction for a set of uniforms
///
/// Important subclasses are:
/// a Projections object to provide a perspective matrix uniform
/// or Material object to provide color and texture uniforms
/// or ...
class UniformGroup extends NamedEntity {
  UniformGroup(String name) : super(name);

  Map<String, Object> _uniforms = {};

  void SetUniform(String canonical, Object val) {
    assert(
    !_uniforms.containsKey(canonical), "uniform ${canonical} already set");
    ForceUniform(canonical, val);
  }

  void ForceUniform(String canonical, Object val) {
    _uniforms[canonical] = val;
  }

  bool HasUniform(String canonical) {
    return _uniforms.containsKey(canonical);
  }

  Map<String, Object> GetUniforms() => _uniforms;
}
