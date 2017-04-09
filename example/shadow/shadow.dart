import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;
import 'dart:math' as Math;

import 'package:vector_math/vector_math.dart' as VM;

List<ShaderObject> createLightShaderBlinnPhongWithShadow() {
  return [
    new ShaderObject("LightBlinnPhongShadowV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vVertexPosition, vNormal, vPositionFromLight])
      ..AddUniformVars([
        uPerspectiveViewMatrix,
        uLightPerspectiveViewMatrix,
        uModelMatrix,
        uNormalMatrix
      ])
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        ${vPositionFromLight} = ${uLightPerspectiveViewMatrix} * pos;
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightBlinnPhongShadowF")
      ..AddVaryingVars([vVertexPosition, vNormal, vPositionFromLight])
      ..AddUniformVars([uLightDescs, uLightTypes, uShininess])
      ..AddUniformVars(
          [uShadowMap, uCanvasSize, uEyePosition, uColor, uShadowBias])
      ..SetBodyWithMain([
        """
#if 1
    float shadow = GetShadowPCF16(${vPositionFromLight},
                                  ${uShadowMap}, ${uCanvasSize},
                                  0.001, 0.01);
#else
    float shadow = GetShadow(${vPositionFromLight},
                             ${uShadowMap},
                             0.001, 0.001);
#endif

    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));
    if (shadow > 0.0) {
        acc = CombinedLight(${vVertexPosition}, ${vNormal}, ${uEyePosition},
                            ${uLightDescs}, ${uLightTypes}, ${uShininess});
    }

    gl_FragColor.rgb = shadow * acc.diffuse +
                       shadow * acc.specular +
                       uColor;
    gl_FragColor.a = 1.0;
    // if ( gl_FragColor.r != 66.0)  gl_FragColor.rgb = vec3(shadow);

      """
      ], prolog: [
        "",
        StdLibShader,
        ShadowMapShaderLib,
      ])
  ];
}

// http://www.geeks3d.com/20091216/geexlab-how-to-visualize-the-depth-buffer-in-glsl/
// https://www.gamedev.net/resources/_/technical/graphics-programming-and-theory/3d-basics-r673
// http://stackoverflow.com/questions/21318471/rendering-orthographic-shadowmap-to-screen
// http://stackoverflow.com/questions/21318471/rendering-orthographic-shadowmap-to-screen
List<ShaderObject> createCopyShaderForShadow() {
  return [
    new ShaderObject("copyV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(
          [NullVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("copyF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTexture)
      ..AddUniformVars([uCutOff, uCameraFar, uCameraNear])
      ..SetBody([
        """
float perspectiveDepthToViewZ(float z, float near, float far) {
    return near * far / ((far - near) * z - far);
}

float viewZToOrthographicDepth(float z, float near, float far) {
    return (z + near) / (near - far);
}

float orthographicDepthToViewZ(float d, float near, float far) {
    return d * (near - far) - near;
}

float viewZToPerspectiveDepth(float z, float near, float far) {
    return ((near + z) * far) / ((far - near) * z);
}

float LinearizeDepth(float z, float near, float far) {
 return (2.0 * near) / (far + near - z * (far - near));
}

void main() {
   float d = texture2D(${uTexture},  ${vTextureCoordinates}).x;
   gl_FragColor.rgb = vec3(d > ${uCutOff} ? d : 0.0);
}
"""
      ])
  ];
}

final VM.Vector3 posLight = new VM.Vector3(11.0, 20.0, 0.0);
final VM.Vector3 dirLight = new VM.Vector3(0.0, -30.0, 0.0);

final double range = 40.0;
final double angle = Math.PI / 6.0;
final double glossiness = 10.0;

// These must be in-sync with the .html file
final String idPoint = "idPoint";
final String idSpot = "idSpot";
final String idDirectional = "idDirectional";

final Map<String, Light> lightSources = {
  idDirectional:
      new DirectionalLight("dir", dirLight, ColorBlue, ColorBlack, 40.0),
  idSpot: new SpotLight("spot", posLight, dirLight, ColorBlue, ColorBlack,
      range, angle, 0.5, 0.5, range * 1.1),
  idPoint: new PointLight("point", posLight, ColorLiteBlue, ColorBlue, range),
};

Light gActiveLight;

void EventRadioChanged(String name) {
  print("${name} toggle ");
  gActiveLight = lightSources[name];
  lightSources[name].enabled = true;
  for (String n in lightSources.keys) {
    if (n != name) lightSources[n].enabled = false;
  }
}

void EventPositionChanged(String name, double value) {
  print("EventPositionChanged ${name} ${value}");
  switch (name) {
    case "posx":
      (lightSources[idSpot] as SpotLight).pos.x = value;
      (lightSources[idPoint] as PointLight).pos.x = value;
      break;
    case "posy":
      (lightSources[idSpot] as SpotLight).pos.y = value;
      (lightSources[idPoint] as PointLight).pos.y = value;
      break;
    case "posz":
      (lightSources[idSpot] as SpotLight).pos.z = value;
      (lightSources[idPoint] as PointLight).pos.z = value;
      break;
  }
}

void EventDirectionChanged(String name, double value) {
  print("EventDirectionChanged ${name} ${value}");
  switch (name) {
    case "dirx":
      (lightSources[idSpot] as SpotLight).dir.x = value;
      (lightSources[idDirectional] as DirectionalLight).dir.x = value;
      break;
      break;
    case "diry":
      (lightSources[idSpot] as SpotLight).dir.y = value;
      (lightSources[idDirectional] as DirectionalLight).dir.y = value;
      break;
    case "dirz":
      (lightSources[idSpot] as SpotLight).dir.z = value;
      (lightSources[idDirectional] as DirectionalLight).dir.z = value;
      break;
  }
}

double GetInputValue(HTML.InputElement e) {
  return double.parse(e.value);
}

void SwallowEvent(HTML.Event e) {
  e.stopPropagation();
}

final Material matGray = new Material("matGray")
  ..SetUniform(uColor, ColorGray4)
  ..SetUniform(uShininess, glossiness);

final Material matObjects = new Material("objects")
  ..SetUniform(uColor, ColorGray2)
  ..SetUniform(uShininess, glossiness);

final Material matNormals = new Material("normals")
  ..SetUniform(uColor, ColorRed)
  ..SetUniform(uShininess, glossiness);

final Material lightSourceMat = new Material("light")
  ..SetUniform(uColor, ColorYellow);

List<Node> MakeScene(ChronosGL chronosGL) {
  return [
    new Node("sphere", ShapeIcosahedron(chronosGL, 3), matObjects)
      ..setPos(0.0, 0.0, 0.0),
    new Node("cube", ShapeCube(chronosGL), matObjects)..setPos(-5.0, 0.0, -5.0),
    new Node(
        "cylinder", ShapeCylinder(chronosGL, 3.0, 6.0, 2.0, 32), matObjects)
      ..setPos(5.0, 0.0, -5.0),
    new Node("torusknot", ShapeTorusKnot(chronosGL, radius: 1.0, tube: 0.4),
        matObjects)
      ..setPos(5.0, 0.0, 5.0),
    new Node("plane", ShapeCube(chronosGL, x: 30.0, y: 0.1, z: 30.0), matGray)
      ..setPos(0.0, -10.0, 0.0),
  ];
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: false);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  final Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  Illumination illumination = new Illumination();
  for (Light l in lightSources.values) {
    illumination.AddLight(l);
  }

  ShadowMap shadowMap = new ShadowMap(chronosGL, 512, 512);

  // display scene with shadow on left part of screen.
  RenderPhase phaseMain = new RenderPhase("main", chronosGL);
  // We already have stuff in the viewPort - do not clear it
  phaseMain.clearColorBuffer = false;
  RenderProgram basic = phaseMain
      .createProgram(createLightShaderBlinnPhongWithShadow())
        ..SetInput(uShadowMap, shadowMap.GetMapTexture())
        ..SetInput(uCanvasSize, shadowMap.GetMapSize())
        ..SetInput(uShadowBias, 0.03);
  RenderProgram fixed = phaseMain.createProgram(createSolidColorShader());

  for (Node n in MakeScene(chronosGL)) {
    basic.add(n);
    shadowMap.AddShadowCaster(n);
  }

  // Same order as lightSources
  MeshData mdLight = EmptyLightVisualizer(chronosGL, "light");
  fixed.add(new Node("light", mdLight, lightSourceMat));

  // Event Handling
  for (HTML.Element input in HTML.document.getElementsByTagName("input")) {
    input.onChange.listen((HTML.Event e) {
      HTML.InputElement input = e.target as HTML.InputElement;
      if (input.type == "radio") {
        EventRadioChanged(input.id);
      }
    });

    input.onInput.listen((HTML.Event e) {
      HTML.InputElement input = e.target as HTML.InputElement;
      if (input.type == "range") {
        String name = input.id;
        double value = GetInputValue(input);
        if (name.startsWith("pos")) {
          EventPositionChanged(name, value);
        } else if (name.startsWith("dir")) {
          EventDirectionChanged(name, value);
        } else if (name == "cutoff") {
          print("set cutoff ${value}");
          //copyToScreen.ForceInput(uCutOff, value);
        }
      }
    });

    input.onMouseMove.listen(SwallowEvent);
  }

  for (HTML.Element e in HTML.document.getElementsByTagName("input")) {
    print("initialize inputs ${e.id}");
    e.dispatchEvent(new HTML.Event("change"));
    e.dispatchEvent(new HTML.Event("input"));
  }

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    w = w ~/ 2;
    perspective.AdjustAspect(w, h);
    phaseMain.viewPortW = w;
    phaseMain.viewPortH = h;
    shadowMap.SetVisualizationViewPort(phaseMain.viewPortW, 0, w, h);
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  double _lastTimeMs = 0.0;

  //HTML.document.getElementById("posx").onChange.listen((HTML.Event ev) =>
  //light.pos.x = GetInputValue(ev));

  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    //orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);

    VM.Matrix4 lm = gActiveLight.ExtractShadowProjViewMatrix();
    UpdateLightVisualizer(mdLight, gActiveLight);
    fps.ChangeExtra("${gActiveLight}");

    shadowMap.Compute(lm);
    shadowMap.Visualize();
    basic.ForceInput(uLightPerspectiveViewMatrix, lm);
    // render scene utilizing shadow map
    phaseMain.draw([perspective, illumination]);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
