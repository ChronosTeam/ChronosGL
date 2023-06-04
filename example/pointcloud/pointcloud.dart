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
    ..SetUniform(uPointSize, 20.0)
    ..SetUniform(uModelMatrix, VM.Matrix4.identity());

  final detail = 2;
  final MeshData torus = ShapeTorusKnot(prog,
      radius: 1.0,
      tubeRadius: 0.2,
      computeNormals: true,
      segmentsR: 256 * detail,
      segmentsT: 16 * detail);
  final MeshData points = ExtractPointCloud(prog, torus, 200000);
  points.AddAttribute(aCurrentPosition, points.GetAttribute(aPosition), 3);

  MeshData out0 = prog.MakeMeshData("out", GL_POINTS)
    ..AddVertices(points.GetAttribute(aPosition) as Float32List);
  MeshData out1 = prog.MakeMeshData("out", GL_POINTS)
    ..AddVertices(points.GetAttribute(aPosition) as Float32List);

  cgl.bindBufferBase(
      GL_TRANSFORM_FEEDBACK_BUFFER, bindingIndex, out0.GetBuffer(aPosition));

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    // animate the camera a little
    orbit.azimuth += 0.003;
    // allow the camera to also reflect mouse movement.
    orbit.animate(elapsed);

    material.ForceUniform(uTime, timeMs / 1000.0);
    cgl.bindBufferBase(
        GL_TRANSFORM_FEEDBACK_BUFFER, bindingIndex, out0.GetBuffer(aPosition));
    points.ChangeAttributeBuffer(aCurrentPosition, out1.GetBuffer(aPosition));
    prog.Draw(points, [perspective, material]);
    var t = out0;
    out0 = out1;
    out1 = t;

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs + 0.0);
  }

  animate(0.0);
}
