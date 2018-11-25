import 'dart:html' as HTML;
import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/chronosgl.dart';

const String aCurrentPosition = "aCurrentPosition";

final ShaderObject fireworksVertexShader = ShaderObject("FireWorksV")
  ..AddAttributeVars([aPosition, aCurrentPosition, aNormal])
  ..AddVaryingVars([vColor])
  ..AddTransformVars([tPosition])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uTime, uPointSize])
  ..SetBody([
    """
float rand(vec2 xy){
     return fract(sin(dot(xy, vec2(12.9898, 78.233))) * 43758.5453);
}
     
float NewHeight(float oy, float y, float t) {
    float bottom = - 2.0;
    float speed = 0.03;
    t = mod(t, 12.0);
    if (t < 2.0) {            // normal
        return y;
    } else if ( t < 6.0) {    // shrinking
        t = t - 2.0;
        y = y - t * speed * (rand(vec2(t, y)));
        if (y > bottom) return y;
        return bottom;  
    } else if ( t < 8.0) {    // flat 
        return bottom;      
    } else {
       t = t - 8.0;
       y = y + t * speed * (rand(vec2(t, oy)));
       if (y > oy) return oy;
       return y; 
    }
}

void main() {
    vec4 pos = vec4(${aCurrentPosition}, 1.0);
    pos.y = NewHeight(${aPosition}.y, pos.y, ${uTime});
    // new current pos for next run
    ${tPosition} = pos.xyz;

    gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * pos;
                  
    gl_PointSize = ${uPointSize} / gl_Position.z;
    ${vColor}.r = sin(${aPosition}.x)/2.0+0.5;
    ${vColor}.g = cos(${aPosition}.y)/2.0+0.5;
    ${vColor}.b = sin(${aPosition}.z)/2.0+0.5;
}
"""
  ]);

final ShaderObject fireworksFragmentShader = ShaderObject("FireWorksF")
  ..AddVaryingVars([vColor])
  ..SetBodyWithMain(["${oFragColor}.rgb = ${vColor};"]);

void main() {
  IntroduceNewShaderVar(aCurrentPosition, const ShaderVarDesc(VarTypeVec3, ""));

  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");

  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');
  final ChronosGL cgl = ChronosGL(canvas);

  final OrbitCamera orbit = OrbitCamera(5.0, 0.0, 0.0, HTML.document.body);

  final PerspectiveResizeAware perspective =
      PerspectiveResizeAware(cgl, canvas, orbit, 0.1, 1000.0);

  final RenderProgram prog = RenderProgram(
      "fireworks", cgl, fireworksVertexShader, fireworksFragmentShader);
  final int bindingIndex = prog.GetTransformBindingIndex(tPosition);


  final Material material = Material("torus-mat")
    ..SetUniform(uPointSize, 10.0)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());

  final detail = 8;
  final MeshData torus = ShapeTorusKnot(prog,
      radius: 1.0,
      tubeRadius: 0.2,
      computeNormals: true,
      segmentsR: 256 * detail,
      segmentsT: 16 * detail);
  final MeshData points = ExtractPointCloud(prog, torus);
  points.AddAttribute(aCurrentPosition, points.GetAttribute(aPosition), 3);

  MeshData out = prog.MakeMeshData("out", GL_POINTS)
    ..AddVertices(points.GetAttribute(aPosition));

  cgl.bindBuffer(GL_ARRAY_BUFFER, null);
  cgl.bindBufferBase(GL_TRANSFORM_FEEDBACK_BUFFER, bindingIndex, null);
  cgl.bindBufferBase(
      GL_TRANSFORM_FEEDBACK_BUFFER, bindingIndex, out.GetBuffer(aPosition));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    // animate the camera a little
    orbit.azimuth += 0.003;
    // allow the camera to also reflect mouse movement.
    orbit.animate(elapsed);

    material.ForceUniform(uTime, timeMs / 1000.0);
    prog.Draw(points, [perspective, material]);
    // use vertex shader output as aCurrentPositions for next round
    cgl.bindBuffer(GL_ARRAY_BUFFER, points.GetBuffer(aCurrentPosition));
    cgl.bindBuffer(GL_TRANSFORM_FEEDBACK_BUFFER, out.GetBuffer(aPosition));
    cgl.copyBufferSubData(GL_TRANSFORM_FEEDBACK_BUFFER, GL_ARRAY_BUFFER, 0, 0,
        points.GetNumItems() * 3 * 4);
    print ("${points.GetNumItems()}");

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs + 0.0);
  }

  animate(0.0);
}
