# Layer: Core (dart:web_gl)
The **core layer** contains all of the fundamental abstractions like:
NamedEntity, Uniforms, Spacial, Illumination, Perspective,
Camera, RenderObject, RenderProgram, ChronosGL, etc.


## Canonical Names:
Each attribute/uniform has a **canonical name**. By convention the first
letter of the name signals the type of input:

* a: "Attribute" (aPosition, aTexUV, aNormal, ...)
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
* Projection provides a perspective matrix uniform
* Material provides color and texture uniforms
* Illumination provides uniforms describing light sources

## Class Light
represents a light source with helpers for
light and shadow computation.
**Light** is NOT a **UniformGroup**. But several **Lights**
can be added to an **Illumination** object which is
a **UnformGroup*.

## Class Illumination (is a Uniforms)
represents a collection of Lights.

## Class Material (is a UniformGroup)
is a light weight container for uniforms related to the appearance
of a mesh.

## Class MeshData
represent the raw data for mesh.
Internally this is wrapper around a Vertex Array Object (VAO).
MeshData objects can be populated directly but often they
will derived from **GeometryBuilder** objects.

## Class RenderProgram (is a NamedEntity)
represents program running on the GPU with an API to invoke it.

## Class TextureProperties
is the base class for all textures

## Class Spatial (is a NamedEntity)
is a base class for object that need to be transformed, e.g.
moved, scaled, rotated.

## Class Camera (is a Spatial)
provides helpers to set up a view matrix.

## Class Orthographic (is a UniformGroup)
TBD

## Class Perspective (is a UniformGroup)
provides the **Input** for perspective projection, i.e.
the uPerspectiveViewMatrix Uniform which also requires a **Camera**
for view matrix.

# Layer: Scene (uses Core Layer)
The **scene layer** adds abstractions to the *core layer**
related to scene graphs.


## Class Node (is a Spatial)
represents a hierarchy of objects that well be rendered
by rendered RenderProgram.
Typically that hierarchy is a tree but DAGs are supported.
Only leaf Nodes will cause draw calls by providing
MeshData and Material.
Non leaf Nodes are just containers for other Nodes
Each Node is a Spatial so it be re-oriented with respect to its parent

 ## Class Scene (is a NamedEntity)
 represents a simple scene graph.
 Each scene is rendered by multiple invocation of a single RenderProgram
 and contains additional UniformGroups to be passed to
 that program at draw time.

## Class RenderPhase (is a NamedEntity)
represents a sequence of Scenes.

# Layer: Shader (uses Core Layer)
provides many standard Vertex and Fragment shaders.

# Layer: Shape (uses Core Layer)
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

# Layer: Importer (uses Core Layer)
contains helpers reading various mesh file formats into **GeometryBuilders**

# Layer: WebHelper (uses Core Layer, dart:html)
adds helpers which require access to HTML features like
DOM tree (elements).

# Layer: Misc (uses Core Layer, Scene Layer, Shape Layer, Shader Layer, Animation Layer)
The **misc layer** contains miscellaneous helpers

