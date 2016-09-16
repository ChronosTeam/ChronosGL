# ChronosGL


<img src="http://i.imgur.com/JkaU6LF.png" style="width: 600px;"/>

A scene graph for WebGL written in Dart
---------------------------------------

## Features:

* MIT licensed
* very high focus on simple, minimal and elegant code and API
* lightweight and fast
* capture keyboard and mouse events
* all scene graph nodes position and rotation are based on a single matrix4 variable.
  this is likely the main differentiator to other scene graphs
* space ship camera included
* shapes: cube, cylinder, icosahedron and torusknot
* pickray
* points sprites ( very basic particles )
* skybox
* async texture loader with progress feedback
* only dependent on vector_math library
* great support for canvas based textures
* focus on procedural content generation and textureless rendering


## Usage

create a new Dart webapp project, add this as a pubspec.yaml dependency:
dependencies:
  chronosgl: any

## Basic Concepts

[See the class glossary](class_glossary.md)

## Example

[HTML part](example/simple/simple.html)
[Dart part](example/simple/simple.dart)

It should look like this:
<img src="http://i.imgur.com/Zb1XyCG.png" style="width: 600px;"/>

If you need dart:html, it is recommended to add dart:html as HTML like this, due to a naming conflict regarding Node:
import 'dart:html' as HTML;


