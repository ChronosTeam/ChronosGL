ChronosGL
=========

<img src="http://i.imgur.com/JkaU6LF.png" style="width: 600px;"/>

A scene graph for WebGL written in Dart
---------------------------------------

# Features:

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
* only Quaternion, Matrix4 and Vector3 math
* great support for canvas based textures
* focus on procedural content generation and textureless rendering



# Some basic ideas:

* ChronosGL contains getters for all important objects.
* The main loop iterates over all ShaderPrograms
* A ShaderProgam contains all Meshes that shall use its Shader
* Camera extends Spatial
* Node extends Spatial
* Mesh extends Node
* Nodes can contain child nodes and they inherit their parents transformation.

# Usage

create a new Dart webapp project, add this as a pubspec.yaml dependency:
dependencies:
  chronosgl: any

(The package name has switched to all lowercase!)

create a HTML page and add a canvas similar to this:

	<html>
	<head>
	    <title>ChronosGL</title>
	    <style>
	      #webgl-canvas {
	        width: 100%;
	        height: 100%;
	        display:block;
	      }
	      body {
	        height: 100%;
	        margin: 0;
	        background-color: black
	      }
	    </style>
	  </head>
	  <body>
	    <canvas id="webgl-canvas"></canvas>
	    <script type="application/dart" src="main.dart"></script>
	    <script src="packages/browser/dart.js"></script>
	  </body>
	</html>

replace your main.dart file with this:

	import 'package:chronosgl/chronosgl.dart';
	
	void main() {
	  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
      
	  Camera camera = chronosGL.getCamera();
	  OrbitCamera orbit = new OrbitCamera(camera, 65.0);
	  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
	    orbit.azimuth+=0.001;
	  });
	  chronosGL.addAnimatable('orbitCam', orbit);
	  
	  ShaderProgram prg = chronosGL.createProgram( createDemoShader());
	  Mesh m = chronosGL.getUtils().createTorusKnotMesh();
	  prg.add( m);
      
	  chronosGL.getUtils().addParticles(2000, 100);
	  chronosGL.run();
	}

Press play to test. It should look like this:  
<img src="http://i.imgur.com/Zb1XyCG.png" style="width: 600px;"/>

If you need dart:html, it is recommended to add dart:html as HTML like this, due to a naming conflict regarding Node:
import 'dart:html' as HTML;


