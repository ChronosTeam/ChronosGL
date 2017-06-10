# ChronosGL


<img src="http://i.imgur.com/JkaU6LF.png" style="width: 600px;"/>

A simple WebGL2 engine written in Dart
--------------------------------------

## Features:

* MIT licensed
* simple code and API through small number of abstractions
* lightweight and fast (clsoe to "baremetal")
* Fully WebGL2 and GLSL 3.00es based (as of version 3.X)
* capture keyboard and mouse events
* great support for canvas based textures including skybox
* focus on procedural content generation and textureless rendering

## Code

* [Github](https://github.com/ChronosTeam/ChronosGL)
* [Classes/Basic Concepts](https://github.com/ChronosTeam/ChronosGL/tree/master/class_glossary.md)

## Example (from example/simple/)

* [HTML part](https://github.com/ChronosTeam/ChronosGL/tree/master/example/simple/simple.html)
* [Dart part](https://github.com/ChronosTeam/ChronosGL/tree/master/example/simple/simple.dart)

## Usage

*You must use Dartium (Version 50 or later) and Dart SDK (Version 1.24.0-dev.6.9-1 or later)*

Create a new Dart webapp project, add this as a pubspec.yaml dependency:
        dependencies:
          chronosgl: any

You may also need the vector_math library which is the only library that ChronosGL
is dependent on.


Copy the example from above and run it in Dartium.

It should look like this:
<img src="http://i.imgur.com/Zb1XyCG.png" style="width: 600px;"/>

If you need dart:html, it is recommended to add dart:html as HTML like this, due to a naming conflict regarding Node:
import 'dart:html' as HTML;
