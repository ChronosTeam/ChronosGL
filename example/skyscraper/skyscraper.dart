import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

final ShaderObject skyScraperVertexShader = new ShaderObject("SkyScraperV")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddVaryingVars([vPosition, vTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBodyWithMain([
    StdVertexBody,
    "${vPosition} = ${aPosition};",
    "${vTexUV} = ${aTexUV};",
  ]);

final ShaderObject skyScraperFragmentShader = new ShaderObject("SkyScraperF")
  ..AddVaryingVars([vPosition, vTexUV])
  ..SetBodyWithMain([
    """
      // the step finds the windows
      // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts
      // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the
      // artifacts on the right side
      float s1 = step(mod(${vTexUV}.x*11.+1., 2.), 1.);
      float s2 = step(mod(${vTexUV}.y*21.+1., 2.), 1.);
      float s3 = step( s1+s2, 1.1);

      ${oFragColor} = vec4( 1.-s3, 1.-s3, 1.-s3, 1. );

      //gl_FragColor = vec4( mod(vPosition.x*10.0,2.0) ,
      //                       mod(vPosition.y*20.0,2.0),
      //                       mod(vPosition.z*10.0,2.0), 1. );
"""
  ]);

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  int w = canvas.clientWidth;
  int h = canvas.clientHeight;
  canvas.width = w;
  canvas.height = h;
  ChronosGL cgl = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(25.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  final RenderPhaseResizeAware phase =
      new RenderPhaseResizeAware("main", cgl, canvas, perspective);

  Scene sceneBuilding = new Scene(
      "building",
      new RenderProgram(
          "building", cgl, skyScraperVertexShader, skyScraperFragmentShader),
      [perspective]);
  phase.add(sceneBuilding);

  Scene sceneSky = new Scene(
      "sky",
      new RenderProgram("sky", cgl, demoVertexShader, demoFragmentShader),
      [perspective]);
  phase.add(sceneSky);

  Material mat = new Material("mat");
  // Sky Sphere
  MeshData md = ShapeIcosahedron(sceneSky.program, 3);
  //..multiplyVertices(100);
  Node m = new Node(md.name, md, mat)..transform.scale(100.0);
  sceneSky.add(m);

  // 0.01 and 0.99 is to remove some artifacts on the edges
  VM.Vector2 q = new VM.Vector2(0.01, 0.01);
  GeometryBuilder gb = CubeGeometry(
      x: 1.0, y: 2.0, z: 1.0, uMin: 0.01, uMax: 0.99, vMin: 0.01, vMax: 0.99);
  List uvs = gb.attributes[aTexUV];
  // change top and bottom face
  for (int i = 2 * 4; i < 4 * 4; i++) {
    uvs[i].setFrom(q);
  }
  MeshData house =
      GeometryBuilderToMeshData("house", sceneBuilding.program, gb);

  for (int x = -10; x < 10; x += 4) {
    for (int z = -10; z < 10; z += 4) {
      Node m = new Node(house.name, house, mat)
        ..setPos(x.toDouble(), 0.0, z.toDouble());
      sceneBuilding.add(m);
    }
  }

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.Draw();
    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  animate(0.0);
}
