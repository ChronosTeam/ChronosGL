ChronosGL
=========

A scene graph for WebGL written in Dart
---------------------------------------

Features:

* very high focus on simple, minimal and elegant code and API

* lightweight and fast
* capture keyboard and mouse events
* all scene graph nodes positions and rotations are based on single matrix4 variable.
  this is likely the main differentiator to other scene graphs
* space ship camera included
* shapes: cube, cylinder, icosahedron and torusknot
* pickray
* points sprites ( very basic particles )
* skybox
* async texture loader with progress feedback
* only Matrix4 and Vector3 math



Some basic ideas:

* ChronosGL contains getters for all important objects.
* The main loop iterates over all ShaderPrograms
* A ShaderProgam contains all Meshes that shall use its Shader
* Camera extends Spatial
* Node extends Spatial
* Mesh extends Node
