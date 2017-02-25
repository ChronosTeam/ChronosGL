import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;

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
      ..AddUniformVars([uLightDescs, uLightTypes])
      ..AddUniformVars([uShadowMap, uEyePosition, uColor, uShadowBias])
      ..SetBodyWithMain([
        """
    float shadow = computeShadow(${vPositionFromLight},
                                 ${uShadowMap}, 0.1, ${uShadowBias});


    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));
    if (shadow > 0.0) {
        acc = CombinedLight(${vVertexPosition}, ${vNormal}, ${uEyePosition},
                      ${uLightDescs}, ${uLightTypes});
    }

    gl_FragColor.rgb = shadow * acc.diffuse +
                       shadow * acc.specular +
                       uColor;
    gl_FragColor.a = 1.0;
      """
      ], prolog: [
        StdLibShader
      ])
  ];
}

List<ShaderObject> createShadowShader() {
  return [
    new ShaderObject("ShadowV")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uLightPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        // Note we could just use gl_FragCoord.z in the Fragment shader
        // but this seems more logical
        """
    gl_Position = ${uLightPerspectiveViewMatrix} * ${uModelMatrix} *
                  vec4(${aVertexPosition}, 1.0);
    //${vPositionFromLight} = gl_Position;
    """
      ]),
    new ShaderObject("ShadowF")
      ..SetBodyWithMain([
        """
    // Note, this is equivalent to passing
    // ${vPositionFromLight}
    // in the vertex shader and then computing
    // d = ${vPositionFromLight}.z / ${vPositionFromLight}.w * 0.5 + 0.5;

    float d  = gl_FragCoord.z;
    // d is value between 0.0 and 1.0
    gl_FragColor = packDepth(d);
"""
      ], prolog: [
        StdLibShader
      ])
  ];
}

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
      ..AddUniformVar(uCutOff)
      ..SetBodyWithMain([
        """
vec2 uv = ${vTextureCoordinates}.xy;
vec4 packed4 = texture2D(${uTexture}, uv);
float depth = unpackDepth(packed4);
if (depth <= ${uCutOff}) {
   packed4 = vec4(0.0);
}

gl_FragColor.rgb = packed4.rgb;
gl_FragColor.a = 1.0;
"""
      ], prolog: [
        StdLibShader
      ])
  ];
}

final VM.Vector3 colBlack = new VM.Vector3(0.0, 0.0, 0.0);
final VM.Vector3 colGray = new VM.Vector3(0.2, 0.2, 0.2);

final VM.Vector3 colBlue = new VM.Vector3(0.0, 0.0, 1.0);
final VM.Vector3 colLiteBlue = new VM.Vector3(0.0, 0.0, 0.5);

final VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);
final VM.Vector3 colLiteRed = new VM.Vector3(0.5, 0.0, 0.0);

final VM.Vector3 colGreen = new VM.Vector3(0.0, 1.0, 0.0);
final VM.Vector3 colLiteGreen = new VM.Vector3(0.0, 0.5, 0.0);

final VM.Vector3 colYellow = new VM.Vector3(1.0, 1.0, 0.0);

final VM.Vector3 posLight = new VM.Vector3(11.0, 20.0, 0.0);
final VM.Vector3 dirLight = new VM.Vector3(0.0, -30.0, 0.0);

final double range = 50.0;
final double cutoff = 0.95;
final double glossiness = 25.0;

// These must be in-sync with the .html file
final String idPoint = "idPoint";
final String idSpot = "idSpot";
final String idDirectional = "idDirectional";

final Map<String, Light> lightSources = {
  idDirectional:
      new DirectionalLight("dir", dirLight, colBlue, colBlack, glossiness),
  idSpot: new SpotLight("spot", posLight, dirLight, colLiteGreen, colGreen,
      range, cutoff, 2.0, glossiness),
  idPoint: new PointLight(
      "point", posLight, colLiteBlue, colBlue, range, glossiness),
};

void EventRadioChanged(String name) {
  print("${name} toggle ");
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

final Material mat1 = new Material("mat1")
  ..SetUniform(uColor, new VM.Vector3(0.0, 0.0, 0.4));

final Material mat2 = new Material("mat2")
  ..SetUniform(uColor, new VM.Vector3(0.4, 0.0, 0.0));

final Material mat3 = new Material("mat3")
  ..SetUniform(uColor, new VM.Vector3(0.0, 0.4, 0.0));

final Material mat4 = new Material("mat3")
  ..SetUniform(uColor, new VM.Vector3(0.4, 0.4, 0.4));

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  final int w = canvas.clientWidth ~/ 2;
  final int h = canvas.clientHeight;

  final Perspective perspective = new Perspective(orbit);

  (lightSources[idDirectional] as DirectionalLight).aspect = w / h;

  Illumination illumination = new Illumination();
  for (Light l in lightSources.values) {
    illumination.AddLight(l);
  }

  // using RGBA is absolutely crucial since we store floats
  // in a 4 byte fix-point format where the most significant
  // byte ends up in the A chanel.
  ChronosFramebuffer shadowBuffer =
      new ChronosFramebuffer(chronosGL, w, h, WEBGL.RGBA);

  RenderPhase phaseComputeShadow =
      new RenderPhase("compute-shadow", chronosGL, shadowBuffer);
  phaseComputeShadow.viewPortW = w;
  phaseComputeShadow.viewPortH = h;
  RenderProgram shadowMap =
      phaseComputeShadow.createProgram(createShadowShader());

  RenderPhase phaseDisplayShadow =
      new RenderPhase("display-shadow", chronosGL);

  RenderProgram copyToScreen =
      phaseDisplayShadow.createProgram(createCopyShaderForShadow());

  copyToScreen.SetInput(uTexture, shadowBuffer.colorTexture);
  copyToScreen.add(UnitNode(chronosGL));

  RenderPhase phaseMain = new RenderPhase("main", chronosGL);
  phaseMain.clearColorBuffer = false;
  RenderProgram basic =
      phaseMain.createProgram(createLightShaderBlinnPhongWithShadow());

  basic.SetInput(uShadowMap, shadowBuffer.colorTexture);

  {
    Node ico = new Node("sphere", ShapeIcosahedron(chronosGL, 3), mat3)
      ..setPos(0.0, 0.0, 0.0);
    shadowMap.add(ico);
    basic.add(ico);
  }
  {
    Node cube = new Node("cube", ShapeCube(chronosGL), mat3)
      ..setPos(-5.0, 0.0, -5.0);
    shadowMap.add(cube);
    basic.add(cube);
  }

  {
    Node cyl = new Node(
        "cylinder", ShapeCylinder(chronosGL, 3.0, 6.0, 2.0, 32), mat3)
      ..setPos(5.0, 0.0, -5.0);
    shadowMap.add(cyl);
    basic.add(cyl);
  }

  /*
  {
    Mesh torus = new Mesh(Shapes.TorusKnot(radius: 1.0, tube: 0.4)..generateNormalsAssumingTriangleMode(), mat3)
      ..setPos(5.0, 0.0, 5.0);
    shadowMap.add(torus);
    basic.add(torus);
  }
*/

  {
    // plane
    Node cube = new Node(
        "cube", ShapeCube(chronosGL, x: 20.0, y: 0.1, z: 20.0), mat3)
      ..setPos(0.0, -10.0, 0.0);
    shadowMap.add(cube);
    basic.add(cube);
  }

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
          copyToScreen.ForceInput(uCutOff, value);
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
    phaseDisplayShadow.viewPortW = w;
    phaseDisplayShadow.viewPortH = h;
    phaseDisplayShadow.viewPortX = phaseMain.viewPortW;
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

    DirectionalLight dl = lightSources[idDirectional];
    VM.Matrix4 lm = dl.ExtractShadowProjViewMatrix();

    //SpotLight sl = lightSources[idSpot];
    //VM.Matrix4 lm = sl.ExtractShadowProjViewMatrix();

    shadowMap.ForceInput(uLightPerspectiveViewMatrix, lm);
    basic.ForceInput(uLightPerspectiveViewMatrix, lm);
    basic.ForceInput(uShadowBias, 0.0);
    // Compute the shadow map
    phaseComputeShadow.draw([]);
    // show the shadow map
    phaseDisplayShadow.draw([]);
    // render scene utilizing shadow map
    phaseMain.draw([perspective, illumination]);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
