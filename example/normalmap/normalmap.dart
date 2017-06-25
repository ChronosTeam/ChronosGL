import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'package:vector_math/vector_math.dart' as VM;

String Dir = "../asset/leeperrysmith/";
String modelFile = Dir + "LeePerrySmith.js";
String normalmapFile = Dir + "Infinite-Level_02_Tangent_SmoothUV.jpg";
String textureFile = Dir + "Map-COL.jpg";
String specularmapFile = Dir + "Map-SPEC.jpg";

final ShaderObject vertexShader = new ShaderObject("LightBlinnPhongV")
  ..AddAttributeVars([aPosition, aNormal, aTexUV])
  ..AddVaryingVars([vPosition, vNormal, vTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
  ..SetBodyWithMain([
    """
        vec4 pos = ${uModelMatrix} * vec4(${aPosition}, 1.0);
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vPosition} = pos.xyz;
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        ${vTexUV} = ${aTexUV};
"""
  ]);

final ShaderObject fragmentShader = new ShaderObject("LightBlinnPhongF")
  ..AddVaryingVars([vPosition, vNormal, vTexUV])
  ..AddUniformVars([uLightDescs, uLightTypes, uShininess])
  ..AddUniformVars([uEyePosition, uColor, uTexture])
  ..SetBodyWithMain([
    """
ColorComponents acc = CombinedLight(${vPosition} - ${uEyePosition},
                                    ${vNormal},
                                    ${uEyePosition},
                                    ${uLightDescs},
                                    ${uLightTypes},
                                    ${uShininess});

vec4 diffuseMap = texture(${uTexture}, ${vTexUV} );

${oFragColor}.rgb = diffuseMap.rgb + acc.diffuse + acc.specular + uColor;
${oFragColor}.a = 1.0;

"""
  ], prolog: [
    StdLibShader
  ]);

VM.Vector3 posLight = new VM.Vector3(0.5, 1.0, 0.0);
VM.Vector3 dirLight = new VM.Vector3(0.0, 10.0, 0.0);
VM.Vector3 colDiffuse = new VM.Vector3.all(0.866);
VM.Vector3 colSpecular = new VM.Vector3.all(0.133);

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(0.5, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 100.0);
  Illumination illumination = new Illumination();
  illumination.AddLight(new SpotLight("spot", posLight, posLight, colDiffuse,
      colSpecular, 50.0, 0.95, 2.0, 1.0, 50.0));

  RenderPhase phase = new RenderPhase("main", chronosGL);
  Scene sceneFixed = new Scene(
      "Fixed",
      new RenderProgram(
          "Fixed", chronosGL, solidColorVertexShader, solidColorFragmentShader),
      [perspective, illumination]);
  phase.add(sceneFixed);

  Material lightSourceMat = new Material("light")
    ..SetUniform(uColor, ColorYellow)
    ..SetUniform(uShininess, 25.0);
  Node shapePointLight = new Node("pointLight",
      ShapeIcosahedron(sceneFixed.program, 4, 0.1), lightSourceMat)
    ..setPosFromVec(posLight);
  sceneFixed.add(shapePointLight);

  Scene sceneMain = new Scene(
      "main",
      new RenderProgram("main", chronosGL, vertexShader, fragmentShader),
      [perspective, illumination]);
  phase.add(sceneMain);

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
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.Draw();

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs);
  }

  Material mat = new Material("mat")
    ..SetUniform(uColor, ColorGray4)
    ..SetUniform(uShininess, 25.0);

  List<Future<Object>> futures = [
    LoadJson(modelFile),
    LoadImage(textureFile),
    LoadImage(specularmapFile),
    LoadImage(normalmapFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Maps
    ImageTexture texture = new ImageTexture(chronosGL, textureFile, list[1]);
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
