import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'package:vector_math/vector_math.dart' as VM;

const String dir = "../asset/leeperrysmith/";
const String modelFile = dir + "LeePerrySmith.js";
const String bumpmapFile = dir + "Infinite-Level_02_Disp_NoSmoothUV-4096.jpg";

List<ShaderObject> createShader() {
  return [
    new ShaderObject("LightBlinnPhongV")
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
    new ShaderObject("LightBlinnPhongF")
      ..AddVaryingVars([vVertexPosition, vNormal, vTextureCoordinates])
      ..AddUniformVars([uSpotLights, uPointLights, uDirectionalLights])
      ..AddUniformVars([uEyePosition, uColor])
      ..AddUniformVars([uBumpScale, uBumpMap])
      ..SetBodyWithMain([
        """

vec2 uv = dHdxy_fwd(${vTextureCoordinates}, ${uBumpScale}, ${uBumpMap});
vec3 normal = perturbNormalArb(${uEyePosition} - ${vVertexPosition}, vNormal, uv);

vec3 diffuseAccumulator;
vec3 specularAccumulator;
CombinedLight(${vVertexPosition}, normal, ${uEyePosition},
              diffuseAccumulator, specularAccumulator);


gl_FragColor.rgb = diffuseAccumulator +
                   specularAccumulator +
                   uColor;
gl_FragColor.a = 1.0;

"""
      ], prolog: [
        StdLibShaderDerivative,
        StdLibShader,
      ])
  ];
}

VM.Vector3 colSkin = new VM.Vector3(0.333, 0.157, 0.067);
//VM.Vector3 colGray = new VM.Vector3(0.2, 0.2, 0.2);
VM.Vector3 posLight = new VM.Vector3(0.5, 1.0, 0.0);
VM.Vector3 dirLight = new VM.Vector3(0.0, 10.0, 0.0);
VM.Vector3 colYellow = new VM.Vector3(1.0, 1.0, 0.0);
VM.Vector3 colDiffuse = new VM.Vector3.all(0.5);
VM.Vector3 colSpecular = new VM.Vector3.all(0.133);

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  // Required for bump mapping unparametrized surfaces a la Morten Mikkelsen
  var ext = GetGlExtensionStandardDerivatives(chronosGL.gl);
  if (ext == null) HTML.window.alert("OES_standard_derivatives not supported");

  OrbitCamera orbit = new OrbitCamera(0.5);
  Perspective perspective = new Perspective(orbit);

  RenderPhase phase = new RenderPhase("main", chronosGL.gl);
  RenderProgram fixed = phase.createProgram(createSolidColorShader());
  RenderProgram prg = phase.createProgram(createShader());

  Illumination illumination = new Illumination();
  illumination.AddLight(new SpotLight("spot", posLight, posLight, colDiffuse,
      colSpecular, 50.0, 0.95, 2.0, 25.0));

  Material lightSourceMat = new Material("light")
    ..SetUniform(uColor, colYellow);
  Node shapePointLight = new Node(
      "pointLight", ShapeIcosahedron(chronosGL.gl, 4, 0.1), lightSourceMat)
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
    Texture bumpmap = new WebTexture(chronosGL.gl, bumpmapFile, list[1]);
    mat.SetUniform(uBumpMap, bumpmap);
    mat.SetUniform(uBumpScale, 12.0);
    // Setup Mesh
    List<GeometryBuilder> gbs = ReadThreeJsMeshes(list[0]);
    print(gbs[0]);
    MeshData md = GeometryBuilderToMeshData(modelFile, chronosGL.gl, gbs[0]);

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
