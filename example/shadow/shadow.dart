import 'package:chronosgl/chronosgl.dart';
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
      ..AddUniformVars([uLightDescs, uLightTypes, uShininess])
      ..AddUniformVars(
          [uShadowMap, uCanvasSize, uEyePosition, uColor, uShadowBias])
      ..SetBody([
        """

#if 0
float GetShadow(vec4 positionFromLight,
                sampler2D shadowMap,
                float darkness,
                float bias) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;

    float d = texture2D(shadowMap, uv).x;
    //return 1.0 - smoothstep(bias, bias, depth.z - d);
    return (depth.z > d + bias) ? darkness : 1.0;
}
#endif

float GetShadowPCF(vec4 positionFromLight,
                   sampler2D shadowMap,
                   vec2 mapSize,
                   float darkness,
                   float bias) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;
    float d = 0.0;
    for(float dx = -1.5; dx <= 1.5; dx += 1.0) {
        for(float dy =-1.5; dy <= 1.5; dy += 1.0) {
            d += texture2D(shadowMap, uv + vec2(dx, dy) / mapSize).x;
        }
    }
    d /= 16.0;
    return 1.0 - smoothstep(0.001, 0.04, depth.z - d);
    //return (depth.z > d + bias) ? darkness : 1.0;
}

void main() {
#if 1
    float shadow = GetShadowPCF(${vPositionFromLight},
                                 ${uShadowMap}, ${uCanvasSize},
                                 0.1, ${uShadowBias});
#else
    float shadow = GetShadow(${vPositionFromLight},
                                 ${uShadowMap},
                                 0.1, ${uShadowBias});
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
}
      """
      ], prolog: [
        "",
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
        """
    gl_Position = ${uLightPerspectiveViewMatrix} * ${uModelMatrix} *
                  vec4(${aVertexPosition}, 1.0);
    """
      ]),
    // What we care about here is the internal update of the depth buffer
    new ShaderObject("ShadowF")..SetBodyWithMain(["gl_FragColor.r = 1.0;"])
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

final double range = 30.0;
final double cutoff = 0.5;
final double glossiness = 10.0;

// These must be in-sync with the .html file
final String idPoint = "idPoint";
final String idSpot = "idSpot";
final String idDirectional = "idDirectional";

final Map<String, Light> lightSources = {
  idDirectional: new DirectionalLight("dir", dirLight, ColorBlue, ColorBlack, 40.0),
  idSpot: new SpotLight("spot", posLight, dirLight, ColorBlue, ColorGreen,
      range, cutoff, 0.5),
  idPoint: new PointLight("point", posLight, ColorLiteBlue, ColorBlue, range),
};


Light gActiveLight;

void EventRadioChanged(String name) {
  print("${name} toggle ");
  gActiveLight =  lightSources[name];
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

const int gShadowMapW = 512;
const int gShadowMapH = 512;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: false);

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0, 0.0, canvas);

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  final int w = canvas.clientWidth ~/ 2;
  final int h = canvas.clientHeight;

  final Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  Illumination illumination = new Illumination();
  for (Light l in lightSources.values) {
    illumination.AddLight(l);
  }

  ChronosFramebuffer shadowBuffer = new ChronosFramebuffer(chronosGL, w, h);

  // fills the depthbuffer
  RenderPhase phaseComputeShadow =
      new RenderPhase("compute-shadow", chronosGL, shadowBuffer);
  phaseComputeShadow.viewPortW = gShadowMapW;
  phaseComputeShadow.viewPortH = gShadowMapH;
  RenderProgram shadowMap =
      phaseComputeShadow.createProgram(createShadowShader());

  // display depth buffer on right half of screen
  RenderPhase phaseDisplayShadow = new RenderPhase("display-shadow", chronosGL);
  RenderProgram copyToScreen = phaseDisplayShadow
      .createProgram(createCopyShaderForShadow())
        ..SetInput(uCameraNear, 1.0)
        ..SetInput(uCameraFar, 100.0);
  copyToScreen.SetInput(uTexture, shadowBuffer.depthTexture);
  copyToScreen.add(UnitNode(chronosGL));

  // display scene with shadow on left part of screen.
  RenderPhase phaseMain = new RenderPhase("main", chronosGL);
  // We already have stuff in the viewPort - do not clear it
  phaseMain.clearColorBuffer = false;
  RenderProgram basic = phaseMain
      .createProgram(createLightShaderBlinnPhongWithShadow())
        ..SetInput(uShadowMap, shadowBuffer.depthTexture)
        ..SetInput(uCanvasSize, new VM.Vector2(gShadowMapW + 0.0, gShadowMapH + 0.0))
        ..SetInput(uShadowBias, 0.03);
  RenderProgram fixed = phaseMain.createProgram(createSolidColorShader());

  for (Node n in MakeScene(chronosGL)) {
    basic.add(n);
    shadowMap.add(n);

    MeshData norm = ExtractWireframeNormals(chronosGL, n.meshData);
    //fixed.add(new Node("x", norm, matNormals));
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

    VM.Matrix4 lm = gActiveLight.ExtractShadowProjViewMatrix();
    UpdateLightVisualizer(mdLight, gActiveLight);
    fps.ChangeExtra("${gActiveLight}");

    shadowMap.ForceInput(uLightPerspectiveViewMatrix, lm);
    basic.ForceInput(uLightPerspectiveViewMatrix, lm);
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
