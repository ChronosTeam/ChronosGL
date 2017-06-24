import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'package:vector_math/vector_math.dart' as VM;
import "dart:math" as MATH;

const String dir = "../asset/leeperrysmith/";
const String modelFile = dir + "LeePerrySmith.js";
const String bumpmapFile = dir + "Infinite-Level_02_Disp_NoSmoothUV-4096.jpg";

List<ShaderObject> createShader() {
  return [
    new ShaderObject("LightBlinnPhongFancyV")
      ..AddAttributeVars([aPosition, aNormal, aTextureCoordinates])
      ..AddVaryingVars([vVertexPosition, vNormal, vTextureCoordinates])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aPosition}, 1.0);
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vTextureCoordinates} = ${aTextureCoordinates};
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightBlinnPhongFancyF")
      ..AddVaryingVars([vVertexPosition, vNormal, vTextureCoordinates])
      ..AddUniformVars([uLightDescs, uLightTypes, uShininess])
      ..AddUniformVars([uEyePosition, uColor])
      ..AddUniformVars([uBumpScale, uBumpMap])
      ..SetBodyWithMain([
        """


vec2 uv = dHdxy_fwd(${vTextureCoordinates}, ${uBumpScale}, ${uBumpMap});
vec3 normal = perturbNormalArb(${vVertexPosition}, vNormal, uv);

ColorComponents acc = CombinedLight(${vVertexPosition} - ${uEyePosition},
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
      ])
  ];
}

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
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);

  OrbitCamera orbit = new OrbitCamera(0.5, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram fixed = phase.createProgram(createSolidColorShader());
  RenderProgram prg = phase.createProgram(createShader());

  DirectionalLight dl = new DirectionalLight("dir", dirLight, colDiffuse, colSpecular, 40.0);
  SpotLight sl = new SpotLight("spot", posLight, dirLight, colDiffuse,
        colSpecular, range, angle, 2.0, 1.0, 40.0);
  Light light = dl;
  Illumination illumination = new Illumination();
  illumination.AddLight(light);
  Material lightMat = new Material("light")
    ..SetUniform(uColor, ColorYellow);
  fixed.add(new Node(
      "pointLight", LightVisualizer(fixed, light), lightMat));

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
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phase.draw([perspective, illumination]);
    HTML.window.animationFrame.then(animate);
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
    Texture bumpmap = new ImageTexture(chronosGL, bumpmapFile, list[1]);
    mat.SetUniform(uBumpMap, bumpmap);
    mat.SetUniform(uBumpScale, 12.0);
    // Setup Mesh
    List<GeometryBuilder> gbs = ImportGeometryFromThreeJsJson(list[0]);
    print(gbs[0]);
    MeshData md = GeometryBuilderToMeshData(modelFile, prg, gbs[0]);

    Node mesh = new Node(md.name, md, mat);
    Node n = new Node.Container("wrapper", mesh);
    //n.invert = true;
    n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
    //n.matrix.scale(0.02);
    prg.add(n);
    // GO!
    animate(0.0);
  });
}
