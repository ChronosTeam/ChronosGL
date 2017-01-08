import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'package:vector_math/vector_math.dart' as VM;

String Dir = "../asset/leeperrysmith/";
String modelFile = Dir + "LeePerrySmith.obj";
String normalmapFile = Dir + "Infinite-Level_02_Tangent_SmoothUV.jpg";
String textureFile = Dir + "Map-COL.jpg";
String specularmapFile = Dir + "Map-SPEC.jpg";


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
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        ${vTextureCoordinates} = ${aTextureCoordinates};
"""
      ]),
    new ShaderObject("LightBlinnPhongF")
      ..AddVaryingVars([vVertexPosition, vNormal, vTextureCoordinates])
      ..AddUniformVars([uLightSourceInfo0, uEyePosition, uColor, uTexture])
      ..SetBodyWithMain([
        """
LightSourceInfo info =  UnpackLightSourceInfo(${uLightSourceInfo0}, 10.0);

float diffuseFactor = 0.0;
float specularFactor = 0.0;

GetDiffuseAndSpecularFactors(info,
                             ${vVertexPosition},
                             ${vNormal},
                             ${uEyePosition},
                              diffuseFactor, specularFactor);

vec4 diffuseMap = texture2D(${uTexture}, ${vTextureCoordinates} );

gl_FragColor = vec4(diffuseMap.rgb * diffuseFactor * info.diffuseColor +
                    specularFactor * info.specularColor +
                    uColor,
                    1.0);

if (diffuseMap.r != 666.0) {
 // gl_FragColor = diffuseMap;
}

"""
      ], prolog: [
        StdLibShader
      ])
  ];
}


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
  VM.Vector3 colBlue = new VM.Vector3(0.0, 0.0, 1.0);
  VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);
  VM.Vector3 colWhite = new VM.Vector3(1.0, 1.0, 1.0);
  VM.Vector3 colGray = new VM.Vector3(0.2, 0.2, 0.2);
  VM.Vector3 posLight = new VM.Vector3(0.5, 1.0, 0.0);
  VM.Vector3 dirLight = new VM.Vector3(0.0, 10.0, 0.0);
  VM.Vector3 colYellow = new VM.Vector3(1.0, 1.0, 0.0);
  VM.Vector3 colDiffuse  = new VM.Vector3.all(0.866);
   VM.Vector3 colSpecular  = new VM.Vector3.all(0.133);
  //Light light = new Light.Spot(
  //    LIGHT0, posLight, posLight, colDiffuse , colSpecular, 50.0, 0.95, 2.0);
  Light light = new Light.Directional(LIGHT0, dirLight, colDiffuse, colSpecular);

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
    phase.draw([perspective, light]);
    HTML.window.animationFrame.then(animate);
  }

  Material mat = new Material("mat")..SetUniform(uColor, colGray);

  List<Future<dynamic>> futures = [
    LoadRaw(modelFile),
    LoadImage(textureFile),
    LoadImage(specularmapFile),
    LoadImage(normalmapFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Maps
    WebTexture texture = new WebTexture(chronosGL.gl, textureFile, list[1]);
    texture.Install();
    /*
    Texture specularmap =
        new ImageTexture(chronosGL.gl, specularmapFile, list[2]);
    Texture normalmap = new ImageTexture(chronosGL.gl, normalmapFile, list[3]);
    */
    mat.SetUniform(uTexture, texture);
    //mat.SetUniform(uNormalMap, normalmap);
    //mat.SetUniform(uSpecularMap, specularmap);
    mat.SetUniform(uNormalScale, 0.8);

    // Setup Mesh
    GeometryBuilder gb = GeometryFromWavefront(list[0]);
    gb.GenerateNormalsAssumingTriangleMode();
    MeshData md = GeometryBuilderToMeshData(modelFile, chronosGL.gl, gb);

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
