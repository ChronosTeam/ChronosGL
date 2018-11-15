part of core;

/// is inherited by almost all other classes in ChronosGL.
/// It mostly exists to help with debugging by giving names to objects.
/// It also provides a simple mechanism for en-/dis-abling objects, though
/// what it means to be disabled will differ from class to class.
abstract class NamedEntity {
  NamedEntity(this.name);

  final String name;
  bool debug = false;
  bool enabled = true;
}

class UnknownEntity extends NamedEntity {
  UnknownEntity() : super("UnknownEntity");
}

final NamedEntity kUnknownEntity = UnknownEntity();

/// is an abstraction for a set of uniforms
///
/// Important subclasses are:
/// * Projection provides a perspective matrix uniform
/// * Material provides color and texture uniforms
/// * Illumination provides uniforms describing light sources
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

  @override
  String toString() {
    List<String> out = <String>["{$runtimeType}[$name]"];
    for (String key in _uniforms.keys) {
      out.add("${key}: ${_uniforms[key]}");
    }
    return out.join("\n");
  }
}
