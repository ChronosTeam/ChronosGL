import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
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
      ..AddAttributeVars([aVertexPosition, aNormal, aTextureCoordinates])
      ..AddVaryingVars([vVertexPosition, vNormal, vTextureCoordinates])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vTextureCoordinates} = ${aTextureCoordinates};
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightBlinnPhongFancyF")
      ..AddVaryingVars([vVertexPosition, vNormal, vTextureCoordinates])
      ..AddUniformVars([uLightDescs, uLightTypes])
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
                                    ${uLightTypes});
gl_FragColor.rgb = acc.diffuse + acc.specular + uColor;
gl_FragColor.a = 1.0;

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
final VM.Vector3 colYellow = new VM.Vector3(1.0, 1.0, 0.0);
final VM.Vector3 colDiffuse = new VM.Vector3.all(0.3);
final VM.Vector3 colSpecular = new VM.Vector3.all(0.133);

final double glossiness = 2.0;
final double range = 50.0;
final double angle = MATH.PI / 5.0;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  // Required for bump mapping unparametrized surfaces a la Morten Mikkelsen
  var ext = GetGlExtensionStandardDerivatives(chronosGL);
  if (ext == null) HTML.window.alert("OES_standard_derivatives not supported");

  OrbitCamera orbit = new OrbitCamera(0.5);
  Perspective perspective = new Perspective(orbit);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram fixed = phase.createProgram(createSolidColorShader());
  RenderProgram prg = phase.createProgram(createShader());

  Illumination illumination = new Illumination();
  if (false) {
    illumination.AddLight(new SpotLight("spot", posLight, dirLight, colDiffuse,
        colSpecular, range, angle, 2.0, glossiness));
  } else {
    illumination.AddLight(new DirectionalLight(
        "dir", dirLight, colDiffuse, colSpecular, glossiness));
  }
  Material lightSourceMat = new Material("light")
    ..SetUniform(uColor, colYellow);
  Node shapePointLight = new Node(
      "pointLight", ShapeIcosahedron(chronosGL, 4, 0.1), lightSourceMat)
    ..setPosFromVec(posLight);
  fixed.add(shapePointLight);

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
    fps.UpdateFrameCount(timeMs);
    phase.draw([perspective, illumination]);
    HTML.window.animationFrame.then(animate);
  }

  Material mat = new Material("mat")..SetUniform(uColor, colSkin);

  List<Future<dynamic>> futures = [
    LoadJson(modelFile),
    LoadImage(bumpmapFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Bumpmap
    Texture bumpmap = new WebTexture(chronosGL, bumpmapFile, list[1]);
    mat.SetUniform(uBumpMap, bumpmap);
    mat.SetUniform(uBumpScale, 12.0);
    // Setup Mesh
    List<GeometryBuilder> gbs = ReadThreeJsMeshes(list[0]);
    print(gbs[0]);
    MeshData md = GeometryBuilderToMeshData(modelFile, chronosGL, gbs[0]);

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
