# Layer: Base
The **base layer** contains many of the fundamental abstractions like:
NamedEntity, Uniforms, Spacial, Node. Illumination, Perspective,
Camera, etc


## Canonical Names:
Each attribute/uniform has a **canonical name**. By convention the first
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

## Class UniformGroup (is a NamedEntity)
is an abstraction for a set of uniforms

Important subclasses are:
a Projections object to provide a perspective matrix uniform
or Material object to provide color and texture uniforms
or ...

## Class Spatial (is a NamedEntity)
is a base class for object that need to be transformed, e.g.
moved, scaled, rotated.

## Class Light
represents a light source with helpers for
light and shadow computation.
**Light** is NOT a **UniformGroup**. But several **Lights**
can be added to an **Illumination** object which is
a **UnformGroup*.

## Class Illumination (is a Uniforms)
represents a collection of Lights.

## Class Camera (is a Spatial)
provides helpers to set up a view matrix.

## Class Orthographic (is a UniformGroup)
TBD

## Class Perspective (is a UniformGroup)
provides the **Input** for perspective projection, i.e.
the uPerspectiveViewMatrix Uniform which also requires a **Camera**
for view matrix.

# Layer: Core (uses Base Layer, dart:web_gl)
The **core layer** adds abstractions to the *base layer**
which require the use of  **dart:web_gl**.
Code using the **core layer** can currently not be unit tested
but requires more elaborate browser tests.

## Class Node (is a Spatial)
represents a tree hierarchy of objects that well be rendered
by rendered RenderProgram.
Currently, only leaf Nodes will cause draw calls by providing
**Inputs** for MeshData and Material (and optionally InstancerData).
Non leaf Nodes (aka containers) currently do not support
having a Material associated with them but we would like to change that.
Each Node is also a Spatial so it be re-oriented with respect to its parent

## Class Material (is a UniformGroup)
is a light weight container for uniforms related to the appearance
of a mesh.

## Class MeshData
presents a VAO - attributes and vertex buffers associated with
an mesh, e.g. a sphere, cube, etc.
MeshData objects can be populated directly but often they
will derived from **GeometryBuilder** objects.

## Class TextureProperties
is the base class for all textures

## Class RenderPhase (is a NamedEntity)
represents a sequence of RenderPrograms.

## Class RenderProgram (is a UniformSink)
represents several invocations of the same program running on the GPU.
It consists of a tree of **Nodes** which provide **Inputs** for the
program. The program is invoked once for most **Nodes** while traversing
the tree recursively.

# Layer: Shader (uses Base Layer)
provides many standard Vertex and Fragment shaders.

# Layer: Shape (uses Base Layer)
contains helpers for creating **GeometryBuilder**
objects for basic shapes like cubes and cylinders.
Higher layers contain wrappers that generate the corresponding
MeshData objects from them.

# Layer: Animation
provides abstractions for animated meshes.

## Class Bone
TBD

## Class AnimatedSkeleton
represents a Skeleton ready to be used for skinning.

## Class BoneAnimation
represents Key frame animation data for a single bone in a skeleton.

## Class SkeletalAnimation
represents Key frame animation data for an entire skeleton.

# Layer: Importer (uses Base Layer)
contains helpers reading various mesh file formats into **GeometryBuilders**

# Layer: WebHelper (uses Core Layer, dart:html)
adds helpers which require access to HTML features like
DOM tree (elements).

