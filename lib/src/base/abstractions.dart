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

/// ## Class UniformSink (is a NamedEntity)
/// represents a collection of **Inputs**
/// There is only one class inheriting from it: RenderProgram
/// The **Inputs** are usually populated by **UniformSource** via
/// their AddToSink(), but **Inputs** can also set directly by
/// calling SetInput()/ForceInput().
abstract class UniformSink extends NamedEntity {
  UniformSink(String name) : super(name);

  void ForceInput(String canonical, var val, [NamedEntity origin = null]);

  void SetInput(String canonical, var val, [NamedEntity origin = null]);

  void Remove(String canonical);
}

/// ## Class UniformSource (is a NamedEntity)
/// is an abstraction for adding/removing
/// inputs to/from a RenderInputSink object.
///
/// Typically the UniformSink object will be GPU program
/// and the RenderInputSource
/// a Projections object to provide a perspective matrix uniform
/// or a MeshData object to provide vertex attributes
/// or Material object to provide color and texture uniforms
/// or ...
abstract class UniformSource extends NamedEntity {
  UniformSource(String name) : super(name);

  void AddToSink(UniformSink inputs);
  void RemoveFromSink(UniformSink inputs);
}
