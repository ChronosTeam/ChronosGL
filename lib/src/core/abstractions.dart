part of core;


abstract class NamedEntity {
  final String name;
  bool debug = false;
  bool enabled = true;

  NamedEntity(this.name);
}