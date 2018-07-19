import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'package:vector_math/vector_math.dart' as VM;

String Dir = "../asset/leeperrysmith/";
String modelFile = Dir + "LeePerrySmith.js";
String normalmapFile = Dir + "Infinite-Level_02_Tangent_SmoothUV.jpg";
String textureFile = Dir + "Map-COL.jpg";
String specularmapFile = Dir + "Map-SPEC.jpg";

final ShaderObject vertexShader = ShaderObject("LightBlinnPhongV")
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

final ShaderObject fragmentShader = ShaderObject("LightBlinnPhongF")
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

VM.Vector3 posLight = VM.Vector3(0.5, 1.0, 0.0);
VM.Vector3 dirLight = VM.Vector3(0.0, 10.0, 0.0);
VM.Vector3 colDiffuse = VM.Vector3.all(0.866);
VM.Vector3 colSpecular = VM.Vector3.all(0.133);

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL cgl = ChronosGL(canvas);

  OrbitCamera orbit = OrbitCamera(0.5, 0.0, 0.0, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 100.0);
  Illumination illumination = Illumination();
  illumination.AddLight(SpotLight("spot", posLight, posLight, colDiffuse,
      colSpecular, 50.0, 0.95, 2.0, 1.0, 50.0));

  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);
  Scene sceneFixed = Scene(
      "Fixed",
      RenderProgram(
          "Fixed", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective, illumination]);
  phase.add(sceneFixed);

  Material lightSourceMat = Material("light")
    ..SetUniform(uColor, ColorYellow)
    ..SetUniform(uShininess, 25.0);
  Node shapePointLight = Node("pointLight",
      ShapeIcosahedron(sceneFixed.program, 4, 0.1), lightSourceMat)
    ..setPosFromVec(posLight);
  sceneFixed.add(shapePointLight);

  Scene sceneMain = Scene(
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

  Material mat = Material("mat")
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
    ImageTexture texture = ImageTexture(cgl, textureFile, list[1]);
    /*
    Texture specularmap =
        new ImageTexture(cgl, specularmapFile, list[2]);
    Texture normalmap = new ImageTexture(cgl, normalmapFile, list[3]);
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
