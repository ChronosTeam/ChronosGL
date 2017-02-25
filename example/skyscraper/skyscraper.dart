import 'dart:html' as HTML;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

List<ShaderObject> createSkyScraperShader() {
  return [
    new ShaderObject("SkyScraperV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vVertexPosition)
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        StdVertexBody,
        "${vVertexPosition} = ${aVertexPosition};",
        "${vTextureCoordinates} = ${aTextureCoordinates};",
      ]),
    new ShaderObject("SkyScraperF")
      ..AddVaryingVar(vVertexPosition)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain([
        """
      // the step finds the windows
      // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts
      // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the
      // artifacts on the right side
      float s1 = step(mod(${vTextureCoordinates}.x*11.+1., 2.), 1.);
      float s2 = step(mod(${vTextureCoordinates}.y*21.+1., 2.), 1.);
      float s3 = step( s1+s2, 1.1);

      gl_FragColor = vec4( 1.-s3, 1.-s3, 1.-s3, 1. );

      //gl_FragColor = vec4( mod(vVertexPosition.x*10.0,2.0) ,
      //                       mod(vVertexPosition.y*20.0,2.0),
      //                       mod(vVertexPosition.z*10.0,2.0), 1. );
"""
      ])
  ];
}

void main() {
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(25.0);
  Perspective perspective = new Perspective(orbit);
  RenderPhase phase = new RenderPhase("main", chronosGL);

  Material mat = new Material("mat");
  // Sky Sphere
  RenderProgram skyprg = phase
      .createProgram(createDemoShader()); //  PerlinNoiseColorShader(true));
  MeshData md = ShapeIcosahedron(chronosGL, 3);
  //..multiplyVertices(100);
  Node m = new Node(md.name, md, mat)..transform.scale(100.0);
  skyprg.add(m);

  RenderProgram prg = phase.createProgram(createSkyScraperShader());

  // 0.01 and 0.99 is to remove some artifacts on the edges
  VM.Vector2 q = new VM.Vector2(0.01, 0.01);
  GeometryBuilder gb = CubeGeometry(
      x: 1.0, y: 2.0, z: 1.0, uMin: 0.01, uMax: 0.99, vMin: 0.01, vMax: 0.99);
  List uvs = gb.attributes[aTextureCoordinates];
  // change top and bottom face
  for (int i = 2 * 4; i < 4 * 4; i++) {
    uvs[i].setFrom(q);
  }
  MeshData house = GeometryBuilderToMeshData("house", chronosGL, gb);

  for (int x = -10; x < 10; x += 4) {
    for (int z = -10; z < 10; z += 4) {
      Node m = new Node(house.name, house, mat)
        ..setPos(x.toDouble(), 0.0, z.toDouble());
      prg.add(m);
    }
  }

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    perspective.AdjustAspect(w, h);
    phase.viewPortW = w;
    phase.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  double _lastTimeMs = 0.0;
  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
