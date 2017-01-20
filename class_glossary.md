# Base Layer (uses nothing)
The **base layer** contains many of the fundamental abstractions
like NamedEntity, RenderInputs, RenderInputProvider,
RenderProgram, Spacial, Node. Illumination, Perspective,
Camera, etc

It was broken out of the **core layer** because it does not have
dependencies on dart:web_gl' which simplifies unit testing.

## Concept Input
An **Input** is parameter to a program running on the GPU

The best known input types are Uniforms and Attributes but
ChronosGL goes a step further and also considers blending
modes, depth-test, etc. to be inputs as well.

Each input has a **canonical name**. By convention the first
letter of the name signals the type of input:

* a: "Attribute" (aVertexPosition, aTextureCoordinates, aNormal, ...)
* u: "Uniform" (uPerspectiveViewMatrix, uTexture, ...)
* c: "Controls" (cDepthWrite, cDepthTest, cBlendEquation, ...)
* v: "Varying Attributes"
* i: "Indexer Attributes"

A large number of **canonical names** are already registered by default.
Additional ones required by custom shaders can be registered at startup.
See lib/src/base/shader_object.dart for a list.

## Class NamedEntity
is inherited by almost all other classes in ChronosGL.
It mostly exists to help with debugging by giving names to objects.
It also provides a simple mechanism for en-/dis-abling objects, though
what it means to be disabled will differ from class to class.

## Class RenderInputs (is a NamedEntity)
represents a collection of **Inputs**
There is only one class inheriting from it: RenderProgram
So it will likely go away.
**RenderInputs** are populated by **RenderInputProvider**.

## Class RenderInputProvider (is a NamedEntity)
is an abstraction for adding/removing
inputs to/from a RenderInputs object.

Typically the RenderInputs object will be GPU program
and the RenderInputsProvider
a Projections object to provide a perspective matrix uniform
or a MeshData object to provide vertex attributes
or Material object to provide color and texture uniforms
or ...

## Class RenderProgram (is a RenderInputs)
represents several invocations of the same program running on the GPU.
It consists of a tree of **Nodes** which provide **Inputs** for the
program. The program is invoked once for most **Nodes** while traversing
the tree recursively.

## Class Spatial (is a NamedEntity)
is a base class for object that need to be transformed, e.g.
moved, scaled, rotated.

## Class Node (is a Spatial)
represents a tree hierarchy of objects that well be rendered
by rendered RenderProgram.
Currently, only leaf Nodes will cause draw calls by providing
**Inputs** for MeshData and Material (and optionally InstancerData).
Non leaf Nodes (aka containers) currently do not support
having a Material associated with them but we would like to change that.
Each Node is also a Spatial so it be re-oriented with respect to its parent

## Class Light
represents a light source with helpers for
light and shadow computation.
**Light** is NOT a **ShaderInputProvider**. But several **Lights**
can be added to an **Illumination** object which is
a **ShaderInputProvider**.

## Class Illumination (is a RenderInputProvider)
represents a collection of Lights.

## Class Camera (is a Spatial)
provides helpers to set up a view matrix.

## Class Orthographic (is a RenderInputProvider)
TBD

## Class Perspective (is a RenderInputProvider)
provides the **Input** for perspective projection, i.e.
the uPerspectiveViewMatrix Uniform which also requires a **Camera**
for view matrix.

# Core Layer (uses Base Layer, dart:web_gl)
The **core layer** adds abstractions to the *base layer**
which require the use of  **dart:web_gl**.
Code using the **core layer** can currently not be unit tested
but requires more elaborate browser tests.

## Class Material (is a RenderInputProvider)
is a light weight container for **Inputs**.
By convention the *Inputs** pertain to mesh appearance.

## Class RenderPhase (is a NamedEntity)
represents a sequence of RenderPrograms.

## Class ShaderProgram (is a RenderProgram)
represents invocations of an actual GPU program.

## Class TextureProperties
is the base class for all textures

## Class MeshData (is a RenderInputProvider)
presents attributes and vertex buffers associated with
an mesh, e.g. a sphere, cube, etc.
MeshData objects can be populated directly but often they
will derived from **GeometryBuilder** objects.

# Shader Layer (uses Base Layer)
provides many standard Vertex and Fragment shaders.

# Shape Layer (uses Base Layer)
contains helpers for creating **GeometryBuilder**
objects for basic shapes like cubes and cylinders.
Higher layers contain wrappers that generate the corresponding
MeshData objects from them.

# Animation Layer (uses nothing)
provides abstractions for animated meshes.

## Class Bone
TBD

## Class PosedSkeleton
represents a Skeleton ready to be used for skinning.

## Class BoneAnimation
represents Key frame animation data for a single bone in a skeleton.

## Class SkeletonAnimation
represents Key frame animation data for an entire skeleton.

# Importer Layer (uses Base Layer)
contains helpers reading various mesh file formats into **GeometryBuilders**

# WebHelper Layer (uses Core Layer, dart:html)
adds helpers which require access to HTML features like
DOM tree (elements).

