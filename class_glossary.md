# ChronosGL Concepts


## Input

An Input is a parameter for a ShaderProgram
The primary examples of inputs are: Uniforms, Attributes, VertexBuffers
Each Input has a canonical name, c.f. shader_object.dart.
A large number of those are already registered by default.
Additional ones required by custom shaders can be registered at
startup.
There are small number of unusual control inputs, e.g.
cBlend that indirectly effect the behavior of a ShaderProgram.
These are mostly related to fixed function features, like
blending and depth buffers.

## abstract class RenderInputProvider extends NamedEntity

RenderInputProvider provides inputs necessary for running a ShaderProgram.
Typically several RenderInputProvider are required to provide all the
parameter for a ShaderProgram. In particular, Uniforms and Attrbutes
originate in different RenderInputProviders



## class Material extends RenderInputProvider

Material is a light weight container for Inputs.


## class Spatial extends NamedEntity

Spatial is a base class for object that need to be transformed, e.g.
moved, scaled, rotated.


## class Node extends Spatial

Node represents a tree hierarchy of objects that well be rendered
with a single RenderProgram.
Currently, only leaf Nodes will cause draw calls by providing
both MeshData and Material (and optionally InstancerData).
Non leaf Nodes (aka containers) currently do not support
having a Material associated with them but we would like to change
that.
Each Node is also a Spatial so it be re-oriented with respect to its parent


## class RenderInputs extends NamedEntity

RenderInputs represents a container of Inputs for a ShaderProgram.


## class RenderProgram extends RenderInputs

RenderProgram combines a ShaderProgram with a collection of Nodes
to be rendered by it keeping track of the Inputs along the way.


## class RenderPhase extends NamedEntity

RenderPhase represents a sequence of RenderPrograms.
