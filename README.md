# ChronosGL


<img src="http://i.imgur.com/JkaU6LF.png" style="width: 600px;"/>

A simple WebGL2 engine written in Dart
--------------------------------------

## Features:

* MIT licensed
* straight-forward API
* lightweight (close to "baremetal")
* fully based on WebGL2 and GLSL 3.00es
* keyboard and mouse event capture
* support for canvas based textures including skybox
* focus on procedural content generation
* optional basic scenegraph
* importer for several file formats
* bone animations
* few dependencies

## Code

* [Github](https://github.com/ChronosTeam/ChronosGL)
* [Classes/Basic Concepts](https://github.com/ChronosTeam/ChronosGL/tree/master/class_glossary.md)

## Examples

To run examples see Makefile

* [Live Examples](http://chronosteam.github.io/ChronosGL/Examples/)
* [Simple example HTML part (simple.html)](https://github.com/ChronosTeam/ChronosGL/tree/master/example/simple/simple.html)
* [Simple example Dart part (simple.dart)](https://github.com/ChronosTeam/ChronosGL/tree/master/example/simple/simple.dart)


## Usage


Create a new Dart webapp project, add this as a `pubspec.yaml` dependency:
```
    dependencies:
        chronosgl: any
```
You also need the `vector_math` library which is the only library that
ChronosGL is dependent on.

As a test copy `simple.html` and `simple.dart` from above into
your project.

It should look like this:
<img src="http://i.imgur.com/Zb1XyCG.png" style="width: 600px;"/>

If you need to import `dart:html`, do so as follows:
```
import 'dart:html' as HTML;
```
This will avoid a naming conflict for `Node`.
