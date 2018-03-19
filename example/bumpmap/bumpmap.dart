import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'package:vector_math/vector_math.dart' as VM;
import "dart:math" as MATH;

const String dir = "../asset/leeperrysmith/";
const String modelFile = dir + "LeePerrySmith.js";
const String bumpmapFile = dir + "Infinite-Level_02_Disp_NoSmoothUV-4096.jpg";

final ShaderObject vertexShader = new ShaderObject("LightBlinnPhongFancyV")
  ..AddAttributeVars([aPosition, aNormal, aTexUV])
  ..AddVaryingVars([vPosition, vNormal, vTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
  ..SetBodyWithMain([
    """
vec4 pos = ${uModelMatrix} * vec4(${aPosition}, 1.0);
gl_Position = ${uPerspectiveViewMatrix} * pos;
${vPosition} = pos.xyz;
${vTexUV} = ${aTexUV};
${vNormal} = ${uNormalMatrix} * ${aNormal};
"""
  ]);

final ShaderObject fragmentShader = new ShaderObject("LightBlinnPhongFancyF")
  ..AddVaryingVars([vPosition, vNormal, vTexUV])
  ..AddUniformVars([uLightDescs, uLightTypes, uShininess])
  ..AddUniformVars([uEyePosition, uColor])
  ..AddUniformVars([uBumpScale, uBumpMap])
  ..SetBodyWithMain([
    """
vec2 uv = dHdxy_fwd(${vTexUV}, ${uBumpScale}, ${uBumpMap});
vec3 normal = perturbNormalArb(${vPosition}, vNormal, uv);

ColorComponents acc = CombinedLight(${vPosition} - ${uEyePosition},
                                    normal,
                                    ${uEyePosition},
                                    ${uLightDescs},
                                    ${uLightTypes},
                                    ${uShininess});
${oFragColor}.rgb = acc.diffuse + acc.specular + uColor;
${oFragColor}.a = 1.0;

"""
  ], prolog: [
    StdLibShaderDerivative,
    StdLibShader,
  ]);

final VM.Vector3 colSkin = new VM.Vector3(0.333, 0.157, 0.067);
//const VM.Vector3 colGray = new VM.Vector3(0.2, 0.2, 0.2);
final VM.Vector3 posLight = new VM.Vector3(0.5, 0.5, 0.0);
final VM.Vector3 dirLight = new VM.Vector3(-1.0, -1.0, 0.0);
final VM.Vector3 colDiffuse = new VM.Vector3.all(0.3);
final VM.Vector3 colSpecular = new VM.Vector3.all(0.133);

final double glossiness = 2.0;
final double range = 1.0;
final double angle = MATH.PI / 6.0;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = new ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = new OrbitCamera(0.5, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  DirectionalLight dl =
      new DirectionalLight("dir", dirLight, colDiffuse, colSpecular, 40.0);
  /*
  SpotLight sl = new SpotLight("spot", posLight, dirLight, colDiffuse,
      colSpecular, range, angle, 2.0, 1.0, 40.0);
  */
  Light light = dl;
  Illumination illumination = new Illumination();
  illumination.AddLight(light);

  final RenderPhaseResizeAware phase =
      new RenderPhaseResizeAware("main", cgl, canvas, perspective);

  Scene sceneFixed = new Scene(
      "Fixed",
      new RenderProgram(
          "Fixed", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective, illumination]);
  phase.add(sceneFixed);

  Material lightMat = new Material("light")..SetUniform(uColor, ColorYellow);
  sceneFixed.add(new Node(
      "pointLight", LightVisualizer(sceneFixed.program, light), lightMat));

  Scene sceneMain = new Scene(
      "main",
      new RenderProgram("main", cgl, vertexShader, fragmentShader),
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

  Material mat = new Material("mat")
    ..SetUniform(uColor, colSkin)
    ..SetUniform(uShininess, glossiness);

  List<Future<Object>> futures = [
    LoadJson(modelFile),
    LoadImage(bumpmapFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Bumpmap
    Texture bumpmap = new ImageTexture(cgl, bumpmapFile, list[1]);
    mat.SetUniform(uBumpMap, bumpmap);
    mat.SetUniform(uBumpScale, 12.0);
    // Setup Mesh
    List<GeometryBuilder> gbs = ImportGeometryFromThreeJsJson(list[0]);
    print(gbs[0]);
    MeshData md =
        GeometryBuilderToMeshData(modelFile, sceneMain.program, gbs[0]);

    Node mesh = new Node(md.name, md, mat);
    Node n = new Node.Container("wrapper", mesh);
    //n.invert = true;
    n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
    //n.matrix.scale(0.02);
    sceneMain.add(n);
    // GO!
    animate(0.0);
  });
}
