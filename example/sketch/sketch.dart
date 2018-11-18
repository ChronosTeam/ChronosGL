import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:typed_data';
import 'package:vector_math/vector_math.dart' as VM;
import 'dart:math' as Math;
import "dart:async";

//
// Final Shader
//

final ShaderObject instancedVertexShader = ShaderObject("finalV")
  ..AddAttributeVars([aPosition, aNormal, aTexUV])
  ..AddAttributeVars([iaRotation, iaTranslation, iaScale, iaColor])
  ..AddVaryingVars([vColor, vNormal, vTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uTime])
  ..SetBody([
    """
vec3 rotate_vertex_position(vec3 pos, vec4 rot) { 
    rot.xyz *= sin(0.5 * rot.w * ${uTime}) /  length(rot.xyz);
    rot.w = cos(0.5 * rot.w * ${uTime});
    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);
}

void main(void) {
  {
    vec3 p = ${aPosition} * ${iaScale};
    p = rotate_vertex_position(p, ${iaRotation});
    p = p + ${iaTranslation};
    gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(p, 1);
  }
  ${vTexUV} = ${aTexUV};
  ${vColor} = ${iaColor};
}
"""
  ]);

final ShaderObject instancedFragmentShader = ShaderObject("finalF")
  ..AddVaryingVars([vColor, vTexUV])
  ..AddUniformVars([uTexture, uTexture2])
  ..SetBody([
    """
float Edge(sampler2D t, ivec2 p) {
		vec4 hEdge = vec4(0.0);
		hEdge -= texelFetch(t, ivec2(p.x - 1, p.y - 1), 0) * 1.0;
		hEdge -= texelFetch(t, ivec2(p.x - 1, p.y    ), 0) * 2.0;
		hEdge -= texelFetch(t, ivec2(p.x - 1, p.y + 1), 0) * 1.0;
		hEdge += texelFetch(t, ivec2(p.x + 1, p.y - 1), 0) * 1.0;
		hEdge += texelFetch(t, ivec2(p.x + 1, p.y    ), 0) * 2.0;
		hEdge += texelFetch(t, ivec2(p.x + 1, p.y + 1), 0) * 1.0;
		vec4 vEdge = vec4(0.0);
		vEdge -= texelFetch(t, ivec2(p.x - 1, p.y - 1), 0) * 1.0;
		vEdge -= texelFetch(t, ivec2(p.x    , p.y - 1), 0) * 2.0;
		vEdge -= texelFetch(t, ivec2(p.x + 1, p.y - 1), 0) * 1.0;
		vEdge += texelFetch(t, ivec2(p.x - 1, p.y + 1), 0) * 1.0;
		vEdge += texelFetch(t, ivec2(p.x    , p.y + 1), 0) * 2.0;
		vEdge += texelFetch(t, ivec2(p.x + 1, p.y + 1), 0) * 1.0;
		vec3 edge = sqrt((hEdge.rgb * hEdge.rgb) + (vEdge.rgb * vEdge.rgb));
		return length(edge);
}

void main(void) {
  
  // ${oFragColor} = vec4(${vColor}, 1.0);
  float edge = Edge(${uTexture}, ivec2(gl_FragCoord.xy));
  vec4 color;
  vec4 info = texelFetch(${uTexture}, ivec2(gl_FragCoord.xy), 0);
  if (edge > 0.5) {
    color.rgb = vec3(0.0); // vec3(edge / (100.0 * info.w));
  } else {
    color.rgb = texture(${uTexture2}, ${vTexUV}).rgb;
  }
  color.a = 1.0;
  ${oFragColor} = abs(color);
}
  """
  ]);

//
// Preparation Shader
//

final ShaderObject preparationVertexShader = ShaderObject("preparationV")
  ..AddAttributeVars([aPosition, aNormal, aTexUV])
  ..AddAttributeVars([iaRotation, iaTranslation, iaScale, iaColor])
  ..AddVaryingVars([vNormal])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uTime])
  ..SetBody([
    """
vec3 rotate_vertex_position(vec3 pos, vec4 rot) { 
    rot.xyz *= sin(0.5 * rot.w * ${uTime}) /  length(rot.xyz);
    rot.w = cos(0.5 * rot.w * ${uTime});
    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);
}

void main(void) {
    {
      vec3 p = ${aPosition} * ${iaScale};
      p = rotate_vertex_position(p, ${iaRotation});
      p = p + ${iaTranslation};
      gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(p, 1);
    }
    {
      vec3 n = ${aNormal};
      n = rotate_vertex_position(n, ${iaRotation});
      ${vNormal} = normalize(n);
    }
}
"""
  ]);

final ShaderObject preparationFragmentShader = ShaderObject("preparationF")
  ..AddVaryingVars([vNormal])
  ..SetBodyWithMain([
    """
  ${oFragColor} = vec4(${vNormal}, gl_FragCoord.w);
  """
  ]);

void AddInstanceData(MeshData md, int count) {
  final Float32List scales = Float32List(count * 1);
  final Float32List colors = Float32List(count * 3);
  final Float32List translations = Float32List(count * 3);
  final Float32List rotations = Float32List(count * 4);
  final Math.Random rand = Math.Random();

  for (int i = 0; i < count; i++) {
    final VM.Vector3 t = VM.Vector3(rand.nextDouble() * 40,
        rand.nextDouble() * 40.0, rand.nextDouble() * 40.0);
    translations.setAll(i * 3, t.storage);
    final VM.Vector3 u =
        VM.Vector3(rand.nextDouble(), rand.nextDouble(), rand.nextDouble());
    /*
    final VM.Quaternion q = VM.Quaternion(
        Math.sqrt(1 - u.x) * Math.sin(2.0 * Math.pi * u.y),
        Math.sqrt(1 - u.x) * Math.cos(2.0 * Math.pi * u.y),
        Math.sqrt(1 - u.x) * Math.sin(2.0 * Math.pi * u.z),
        Math.sqrt(1 - u.x) * Math.cos(2.0 * Math.pi * u.z));
    */
    VM.Quaternion q =
        VM.Quaternion.axisAngle(u, 2.0 * rand.nextDouble() * Math.pi);
    rotations.setAll(i * 4, q.storage);
    final VM.Vector c =
        VM.Vector3(rand.nextDouble(), rand.nextDouble(), rand.nextDouble());
    colors.setAll(i * 3, c.storage);
    scales.setAll(i, [rand.nextDouble() * 5.0]);
  }

  md.AddAttribute(iaRotation, rotations, 4);
  md.AddAttribute(iaColor, colors, 3);
  md.AddAttribute(iaTranslation, translations, 3);
  md.AddAttribute(iaScale, scales, 1);
}

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');

  final ChronosGL cgl = ChronosGL(canvas, faceCulling: false)
    ..clearColor(0.5, 0.5, 0.5, 1.0);

  final dynamic ext = cgl.getExtension("EXT_color_buffer_float");
  if (ext == null) {
    HTML.window.alert("extension not available: EXT_color_buffer_float");
  }
  OrbitCamera orbit = OrbitCamera(100.0, 0.0, 0.0, canvas);

  Perspective perspective = Perspective(orbit, 0.1, 1000.0);

  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);

  final Framebuffer screen = Framebuffer.Screen(cgl);
  final RenderProgram progInstanced = RenderProgram(
      "instanced", cgl, instancedVertexShader, instancedFragmentShader);

  final TypedTexture tex = TypedTexture(
      cgl, "float", width, height, GL_RGBA32F, TexturePropertiesFramebuffer);
  final TypedTexture depthTexture = TypedTexture(cgl, "frame::depth", width,
      height, GL_DEPTH_COMPONENT24, TexturePropertiesShadowMap);
  final Framebuffer fb = Framebuffer(cgl, tex, depthTexture);
  final RenderProgram progPreparation = RenderProgram(
      "preparation", cgl, preparationVertexShader, preparationFragmentShader);

  final Material mat = Material("mat")
    ..SetUniform(uModelMatrix, VM.Matrix4.identity())
    ..SetUniform(uTexture, tex);

  final MeshData md = ShapeCube(progInstanced, computeNormals: true);
  AddInstanceData(md, 50);
  print("instances: ${md.GetNumInstances()}");

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);

    mat.ForceUniform(uTime, _lastTimeMs / 2000.0);
    fb.Activate(GL_CLEAR_ALL, 0, 0, width, height);
    progPreparation.Draw(md, [mat, perspective]);

    screen.Activate(GL_CLEAR_ALL, 0, 0, width, height);
    progInstanced.Draw(md, [mat, perspective]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);
  }

  List<Future<Object>> futures = [
    LoadImage("../asset/noise.png"),
  ];

 Future.wait(futures).then((List list) {
    Texture noise = ImageTexture(cgl, "noise", list[0]);
    mat.SetUniform(uTexture2, noise);
    animate(0.0);
  });
}
