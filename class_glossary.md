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

## class Spatial extends NamedEntity 
is a base class for object that need to be transformed, e.g.
moved, scaled, rotated. It is also used as a Camera abstraction.

## class MeshData extends NamedEntity 
represent the raw data for mesh.
Internally this is wrapper around a Vertex Array Object (VAO).
MeshData objects can be populated directly but often they
will derived from **GeometryBuilder** objects.
The other common way to create a MeshData object is via
RenderProgram.MakeMeshData().
Note, MeshData is always associated with a specific RenderProgram
but it is possible to assert compatibility with multiple RenderPrograms.

## class GeometryBuilder 
Helper for Shader independent Mesh creation.
Supports Faces with 3 and 4 Nodes or point clouds.
Use  GeometryBuilderToMeshData() to create the Mesh
for a specific Shader.

## class TextureProperties 
properties like clamping and mip-mapping.

## class Texture 
is the base class for all textures

## class Orthographic extends UniformGroup 
provides an Orthographic Perspective Matrix

## class Perspective extends UniformGroup 
provides the **Input** for perspective projection, i.e.
the uPerspectiveViewMatrix Uniform which also requires a **Camera**
for view matrix.

## class Material extends UniformGroup 
is a light weight container for uniforms related to the appearance
of a mesh.

## class ChronosGL 
Prepares a canvas for 3d rendering. Contains wrapper for all the
WebGL2 bindings

## abstract class NamedEntity 
is inherited by almost all other classes in ChronosGL.
It mostly exists to help with debugging by giving names to objects.
It also provides a simple mechanism for en-/dis-abling objects, though
what it means to be disabled will differ from class to class.

## class UniformGroup extends NamedEntity 
is an abstraction for a set of uniforms

Important subclasses are:
* Projection provides a perspective matrix uniform
* Material provides color and texture uniforms
* Illumination provides uniforms describing light sources

## class DrawStats 
Helper class for holding info produced by RenderProgram::Draw().

## class RenderProgram extends NamedEntity 
represents program (Fragment + Vertex Shader) running on the GPU with an API to invoke it.

## abstract class Light extends NamedEntity 
represents a light source with helpers for
light and shadow computation.
**Light** is NOT a **UniformGroup**. But several **Lights**
can be added to an **Illumination** object which is
a **UnformGroup*.

## class PointLight extends Light 
light is emanating from a single point in all directions

## class DirectionalLight extends Light 
Conceptually a directional light is emanating from a infinitely large source
at infinite distance.

## class SpotLight extends Light 
a cone of directional light is emanating from a point

## class Illumination extends UniformGroup 
represents a collection of Lights.

# Layer: Scene (uses Core Layer)
The **scene layer** adds abstractions to the *core layer**
related to scene graphs.


## class Scene extends NamedEntity 
 represents a simple scene graph.
 Each scene is rendered by multiple invocation of a single RenderProgram
 and contains additional UniformGroups to be passed to
 that program at draw time.

## class RenderPhase extends NamedEntity 
represents a sequence of Scenes.

## class Node extends Spatial 
represents a hierarchy of objects that well be rendered
by rendered RenderProgram.
Typically that hierarchy is a tree but DAGs are supported.
Only leaf Nodes will cause draw calls by providing
MeshData and Material.
Non leaf Nodes are just containers for other Nodes
Each Node is a Spatial so it be re-oriented with respect to its parent

# Layer: Shader (uses Core Layer)
provides many standard Vertex and Fragment shaders.

# Layer: Shape (uses Core Layer)
contains helpers for creating **GeometryBuilder**
objects for basic shapes like cubes and cylinders.
Higher layers contain wrappers that generate the corresponding
MeshData objects from them.

## class TorusKnotCamera extends Spatial 
Camera flying through a TorusKnot like through a tunnel

# Layer: Animation
provides abstractions for animated meshes.

## class Bone 
 the basic unit of a skeleton. Bones form a tree structure and have
 a parent bone.

## class AnimatedSkeleton 
represents a Skeleton ready to be used for skinning.

## class BoneAnimation 
represents Key frame animation data for a single bone in a skeleton.

## class SkeletalAnimation 
represents Key frame animation data for an entire skeleton.

# Layer: Importer (uses Core Layer)
contains helpers reading various mesh file formats into **GeometryBuilders**

# Layer: WebHelper (uses Core Layer, dart:html)
adds helpers which require access to HTML features like
DOM tree (elements).

## class Keyboard 
HTML keyboard handling

## class Mouse 
HTML mouse handling

## class OrbitCamera extends Spatial 
Interactive Camera focused on a specific point.

# Layer: Misc (uses Core Layer, Scene Layer, Shape Layer, Shader Layer, Animation Layer)
The **misc layer** contains miscellaneous helpers

## class RenderPhaseResizeAware extends RenderPhase 
A RenderPhase which automatically updates perspective and viewport when
the window size is changed.
This assumes that the canvas is always "full screen".

