import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'package:vector_math/vector_math.dart' as VM;

String Dir = "../asset/leeperrysmith/";
String modelFile = Dir + "LeePerrySmith.js";
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
      ..AddUniformVars([uLightDescs, uLightTypes])
      ..AddUniformVars([uEyePosition, uColor, uTexture])
      ..SetBodyWithMain([
        """
ColorComponents acc = CombinedLight(${vVertexPosition} - ${uEyePosition},
                                    ${vNormal},
                                    ${uEyePosition},
                                    ${uLightDescs},
                                    ${uLightTypes});

vec4 diffuseMap = texture2D(${uTexture}, ${vTextureCoordinates} );

gl_FragColor.rgb = diffuseMap.rgb + acc.diffuse + acc.specular + uColor;
gl_FragColor.a = 1.0;

"""
      ], prolog: [
        StdLibShader
      ])
  ];
}

//VM.Vector3 colBlue = new VM.Vector3(0.0, 0.0, 1.0);
//VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);
//VM.Vector3 colWhite = new VM.Vector3(1.0, 1.0, 1.0);
VM.Vector3 colGray = new VM.Vector3(0.2, 0.2, 0.2);
VM.Vector3 posLight = new VM.Vector3(0.5, 1.0, 0.0);
VM.Vector3 dirLight = new VM.Vector3(0.0, 10.0, 0.0);
VM.Vector3 colYellow = new VM.Vector3(1.0, 1.0, 0.0);
VM.Vector3 colDiffuse = new VM.Vector3.all(0.866);
VM.Vector3 colSpecular = new VM.Vector3.all(0.133);

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
  illumination.AddLight(new SpotLight("spot", posLight, posLight, colDiffuse,
      colSpecular, 50.0, 0.95, 2.0, 25.0));

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

  Material mat = new Material("mat")..SetUniform(uColor, colGray);

  List<Future<dynamic>> futures = [
    LoadJson(modelFile),
    LoadImage(textureFile),
    LoadImage(specularmapFile),
    LoadImage(normalmapFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Maps
    WebTexture texture = new WebTexture(chronosGL, textureFile, list[1]);
    texture.Install();
    /*
    Texture specularmap =
        new ImageTexture(chronosGL, specularmapFile, list[2]);
    Texture normalmap = new ImageTexture(chronosGL, normalmapFile, list[3]);
    */
    mat.SetUniform(uTexture, texture);
    //mat.SetUniform(uNormalMap, normalmap);
    //mat.SetUniform(uSpecularMap, specularmap);
    mat.SetUniform(uNormalScale, 0.8);

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
