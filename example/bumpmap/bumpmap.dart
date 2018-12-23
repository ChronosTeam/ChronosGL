import 'dart:async';
import 'dart:html' as HTML;
import "dart:math" as MATH;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

const String dir = "../asset/leeperrysmith/";
const String modelFile = dir + "LeePerrySmith.js";
const String bumpmapFile = dir + "Infinite-Level_02_Disp_NoSmoothUV-4096.jpg";

final ShaderObject vertexShader = ShaderObject("LightBlinnPhongFancyV")
  ..AddAttributeVars([aPosition, aNormal, aTexUV])
  ..AddVaryingVars([vPosition, vNormal, vTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
  ..SetBody([
    """
void main() {
    vec4 pos = ${uModelMatrix} * vec4(${aPosition}, 1.0);
    gl_Position = ${uPerspectiveViewMatrix} * pos;
    ${vPosition} = pos.xyz;
    ${vTexUV} = ${aTexUV};
    ${vNormal} = ${uNormalMatrix} * ${aNormal};
}
"""
  ]);

final ShaderObject fragmentShader = ShaderObject("LightBlinnPhongFancyF")
  ..AddVaryingVars([vPosition, vNormal, vTexUV])
  ..AddUniformVars([uLightDescs, uLightTypes, uShininess])
  ..AddUniformVars([uEyePosition, uColor])
  ..AddUniformVars([uBumpScale, uBumpMap])
  ..SetBody([
    """    
void main() {
   vec3 normal = normalize(${vNormal});
   vec2 uv = dHdxy_fwd(${vTexUV}, ${uBumpScale}, ${uBumpMap});
   normal = perturbNormalArb(${vPosition}, normal, uv);
   ColorComponents acc = CombinedLight(${vPosition} - ${uEyePosition},
                                    normal,
                                    ${uEyePosition},
                                    ${uLightDescs},
                                    ${uLightTypes},
                                    ${uShininess});
    ${oFragColor}.rgb = acc.diffuse 
                    + acc.specular
                    + uColor;
   ${oFragColor}.a = 1.0;
}
"""
  ], prolog: [
    StdLibShaderDerivative,
    StdLibShader,
  ]);

final VM.Vector3 colSkin = VM.Vector3(0.333, 0.157, 0.067);
//const VM.Vector3 colGray = new VM.Vector3(0.2, 0.2, 0.2);
final VM.Vector3 dirLight = VM.Vector3(-1.0, -1.0, 0.0);
final VM.Vector3 colDiffuse = VM.Vector3.all(0.3);
final VM.Vector3 colSpecular = VM.Vector3.all(0.133);

final double glossiness = 10.0;
final double angle = MATH.pi / 6.0;

void main() {
  final StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  final HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas');
  final ChronosGL cgl = ChronosGL(canvas, faceCulling: true);

  final OrbitCamera orbit = OrbitCamera(0.3, 0.0, 0.0, canvas)
    ..mouseWheelFactor = -0.001;
  final Perspective perspective = Perspective(orbit, 0.01, 1000.0);

  final DirectionalLight light =
      DirectionalLight("dir", dirLight, colDiffuse, colSpecular, 40.0);


  final Illumination illumination = Illumination();
  illumination.AddLight(light);

  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);

  final Scene sceneMain = Scene(
      "main",
      RenderProgram("main", cgl, vertexShader, fragmentShader),
      [perspective, illumination]);
  phase.add(sceneMain);

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

  List<Future<Object>> futures = [
    LoadJson(modelFile),
    LoadImage(bumpmapFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Bumpmap
    final TextureProperties tp = TextureProperties()
      ..SetMipmapLinear()
      ..clamp = true;
    final Texture bumpmap = ImageTexture(cgl, bumpmapFile, list[1], tp);
    final Material mat = Material("mat")
      ..SetUniform(uColor, colSkin)
      ..SetUniform(uShininess, glossiness)
      ..SetUniform(uBumpMap, bumpmap)
      ..SetUniform(uBumpScale, 0.01);
    // Setup Mesh
    List<GeometryBuilder> gbs = ImportGeometryFromThreeJsJson(list[0]);
    print(gbs[0]);
    MeshData md =
        GeometryBuilderToMeshData(modelFile, sceneMain.program, gbs[0]);

    Node mesh = Node(md.name, md, mat);
    Node n = Node.Container("wrapper", mesh);
    //n.invert = true;
    n.lookAt(VM.Vector3(100.0, 0.0, 0.0));
    //n.matrix.scale(0.02);
    sceneMain.add(n);
    // GO!
    animate(0.0);
  });
}
