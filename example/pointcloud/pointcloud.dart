import 'dart:html' as HTML;
import 'dart:typed_data';

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

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
     
vec3 NewPos(vec3 orig, vec3 last, float t) {
    float bottom = - 2.0;
   
    t = mod(t, 14.0);
    if (t < 2.0) {            // normal
        return last;
    } else if ( t < 6.0) {    // shrinking
        float speed = 0.1;
        t = t - 2.0;
        // statistically 
        // * x just floats around orig.x
        // * y moves down by -0.25 (middle of  [0.25, -0.75])
        // * z just floats around orig.z
        vec3 delta = vec3(0.5 - rand(vec2(t, last.x)),
                          0.25 - rand(vec2(t, last.y)),
                          0.5 - rand(vec2(t, last.z)));
                          
        if (last.y < bottom + 0.3) {
           speed *= (last.y - bottom);
        }
        vec3 next = last + delta * speed;
        if (next.y < bottom) next.y = bottom;
        return next;  
    } else if ( t < 8.0) {    // flat 
        return last;      
    } else {
       t = t - 8.0;
       vec3 speed = clamp(orig - last, vec3(-1.0), vec3(1.0));
       
       vec3 delta = vec3(0.85 - rand(vec2(t, last.x)),
                         1.0 + rand(vec2(t, last.y)),
                         0.85 - rand(vec2(t, last.z)));
    
      
       return last + delta * 0.05 * speed;
    }
}

void main() {
    vec3 pos = NewPos(${aPosition}, ${aCurrentPosition}, ${uTime});
    // new current pos for next run
    ${tPosition} = pos;

    gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(pos, 1.0);
                  
    gl_PointSize = ${uPointSize} / gl_Position.z;
    ${vColor}.r = sin(${aPosition}.x)/2.0+0.5;
    ${vColor}.g = cos(${aPosition}.y)/2.0+0.5;
    ${vColor}.b = sin(${aPosition}.z)/2.0+0.5;
}
"""
  ]);

final ShaderObject fireworksFragmentShader = ShaderObject("FireWorksF")
  ..AddVaryingVars([vColor])
  ..SetBody([
    """
void main() {  
    ${oFragColor}.rgb = ${vColor};
}
    """
  ]);

void main() {
  IntroduceNewShaderVar(aCurrentPosition, const ShaderVarDesc(VarTypeVec3, ""));

  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");

  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  final ChronosGL cgl = ChronosGL(canvas);

  final OrbitCamera orbit = OrbitCamera(7.0, 0.0, 0.0, HTML.document.body!);

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
    ..AddVertices(points.GetAttribute(aPosition) as Float32List);

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

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs + 0.0);
  }

  animate(0.0);
}
