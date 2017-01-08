import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;

import 'package:vector_math/vector_math.dart' as VM;


List<ShaderObject> createLightShaderBlinnPhongWithShadow() {
  return [
    new ShaderObject("LightBlinnPhongV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vVertexPosition, vNormal, vPositionFromLight0])
      ..AddUniformVars([
        uPerspectiveViewMatrix,
        uLightPerspectiveViewMatrix0,
        uModelMatrix,
        uNormalMatrix
      ])
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        ${vPositionFromLight0} = ${uLightPerspectiveViewMatrix0} * pos;
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightBlinnPhongF")
      ..AddVaryingVars([vVertexPosition, vNormal, vPositionFromLight0])
      ..AddUniformVars([uLightSourceInfo0, uShadowMap, uEyePosition])
      ..SetBody([
        """

void foo(vec4 positionFromLight, sampler2D shadowSampler,
                    float darkness, float bias) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;

  float r = gl_FragColor.r;
	gl_FragColor =	texture2D(shadowSampler, uv);
   gl_FragColor.r += useValueButReturnZero(r);
}

      void main() {
        LightSourceInfo info = UnpackLightSourceInfo(${uLightSourceInfo0}, 10.0);
        float diffuseFactor = 0.0;
        float specularFactor = 0.0;
        GetDiffuseAndSpecularFactors(info,
                                     ${vVertexPosition},
                                     ${vNormal},
                                     ${uEyePosition},
                                     diffuseFactor, specularFactor);

        float shadow = computeShadow(${vPositionFromLight0},
                                     ${uShadowMap}, 0.4, -0.1);
        //shadow = 1.0;
        gl_FragColor.rgb = diffuseFactor * shadow * info.diffuseColor +
                             specularFactor * shadow * info.specularColor;
        //foo(${vPositionFromLight0}, ${uShadowMap}, 0.4, -0.1);
      }
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
      ..AddVaryingVar(vPositionFromLight0)
      ..AddUniformVar(uLightPerspectiveViewMatrix0)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        // Note we could just use gl_FragCoord.z in the Fragment shader
        // but this seems more logical
        """
        gl_Position = ${uLightPerspectiveViewMatrix0} * ${uModelMatrix} *
                      vec4(${aVertexPosition}, 1.0);
        ${vPositionFromLight0} = gl_Position;
        """
      ]),
    new ShaderObject("ShadowF")
      ..AddVaryingVar(vPositionFromLight0)
      ..SetBodyWithMain([
        """
// Note, this is equivalent to passing
//   ${vPositionFromLight0} = gl_Position;
// in the vertex shader and then computing
// float d = ${vPositionFromLight0}.z / ${vPositionFromLight0}.w * 0.5 + 0.5;
float d  = gl_FragCoord.z;

// d is value between 0.0 and 1.0
gl_FragColor = packDepth(d);
"""
      ], prolog: [
        StdLibShader
      ])
  ];
}

List<ShaderObject> createCopyShader() {
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
      ..SetBodyWithMain([
        "vec2 v = ${vTextureCoordinates}.xy;",
        "gl_FragColor.rgb = texture2D (${uTexture}, v).rgb;"
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
      ..SetBodyWithMain([
        """
vec2 uv = ${vTextureCoordinates}.xy;
vec4 color = texture2D(${uTexture}, uv);
// Commenting the next line should not make any difference
//color = packDepth(unpackDepth(color));
gl_FragColor = color;

// necessary?
//gl_FragColor.r = unpackDepth(color) * 0.4;
//gl_FragColor.g = 0.0;
//gl_FragColor.b = 0.0;
//gl_FragColor.a = 1.0;
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

  OrbitCamera orbit = new OrbitCamera(25.0, 10.0);
  VM.Vector3 posLight = new VM.Vector3(2.0, 10.0, 5.0);
  VM.Vector3 dirLight = new VM.Vector3(0.0, 1.0, 0.0);

  VM.Vector3 colWhite = new VM.Vector3(0.0, 0.0, 1.0);
  VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);

  Light light = new Light.Directional(0, dirLight, colRed, colWhite);
  //Light light = new Light.Spot(0, posLight, dirLight, colRed, colWhite, 100.0, 0.85, 2.0);
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  final int w = canvas.clientWidth ~/ 2;
  final int h = canvas.clientHeight;

  Perspective perspective = new Perspective(orbit);

  // using RGBA is absolutely crucial since we store floats
  // in a 4 byte fix-point format where the most significant
  // byte ends up in the A chanel.
  ChronosFramebuffer shadowBuffer =
      new ChronosFramebuffer(chronosGL.gl, w, h, WEBGL.RGBA);

  ShadowProjection shadowProjection =
      new ShadowProjection(light, -30.0, 30.0, -30.0, 0.0, 100.0);
  shadowProjection.AdjustAspect(w, h);

  RenderPhase phaseComputeShadow =
      new RenderPhase("compute-shadow", chronosGL.gl, shadowBuffer);
  phaseComputeShadow.viewPortW = w;
  phaseComputeShadow.viewPortH = h;
  RenderProgram shadowMap =
      phaseComputeShadow.createProgram(createShadowShader());

  RenderPhase phaseDisplayShadow =
      new RenderPhase("display-shadow", chronosGL.gl);

  RenderProgram copyToScreen =
      phaseDisplayShadow.createProgram(createCopyShaderForShadow());

  copyToScreen.SetInput(uTexture, shadowBuffer.colorTexture);
  copyToScreen.add(UnitNode(chronosGL.gl));

  RenderPhase phaseMain = new RenderPhase("main", chronosGL.gl);
  phaseMain.clearColorBuffer = false;
  RenderProgram basic =
      phaseMain.createProgram(createLightShaderBlinnPhongWithShadow());

  basic.SetInput(uShadowMap, shadowBuffer.colorTexture);

  Texture solid =
      new CanvasTexture.SolidColor(chronosGL.gl, "red-solid", "red");
  final Material mat1 = new Material("mat1")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, new VM.Vector3(0.0, 0.0, 1.0));

  final Material mat2 = new Material("mat2")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, new VM.Vector3(1.0, 0.0, 0.0));

  final Material mat3 = new Material("mat3")
    ..SetUniform(uTexture, solid)
    ..SetUniform(uColor, new VM.Vector3(0.8, 0.8, 0.8));

  {
    Node ico = new Node("sphere", ShapeIcosahedron(chronosGL.gl, 3), mat1)
      ..setPos(0.0, 0.0, 0.0);
    shadowMap.add(ico);
    basic.add(ico);
  }
  {
    Node cube = new Node("cube", ShapeCube(chronosGL.gl), mat2)
      ..setPos(-5.0, 0.0, -5.0);
    shadowMap.add(cube);
    basic.add(cube);
  }

  {
    Node cyl = new Node(
        "cylinder", ShapeCylinder(chronosGL.gl, 3.0, 6.0, 2.0, 32), mat2)
      ..setPos(5.0, 0.0, -5.0);
    shadowMap.add(cyl);
    basic.add(cyl);
  }

  /*
  {
    Mesh torus = new Mesh(Shapes.TorusKnot(radius: 1.0, tube: 0.4)..generateNormalsAssumingTriangleMode(), mat2)
      ..setPos(5.0, 0.0, 5.0);
    program.add(torus);
    basic.add(torus);
  }
*/
  {
    // plane
    Node cube = new Node(
        "cube", ShapeCube(chronosGL.gl, x: 20.0, y: 0.1, z: 20.0), mat3)
      ..setPos(0.0, -10.0, 0.0);
    shadowMap.add(cube);
    basic.add(cube);
  }

  // Create sphere representing the light source
  RenderProgram fixedShaderPrg =
      phaseMain.createProgram(createSolidColorShader());
  Material icoMat = new Material("sphere")
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));
  Node ico1 = new Node("spehere", ShapeIcosahedron(chronosGL.gl), icoMat)
    ..setPosFromVec(posLight);

  fixedShaderPrg.add(ico1);

  double _lastTimeMs = 0.0;

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

  double GetInputValue(HTML.InputElement e) {
    return double.parse(e.value);
  }

  void SwallowEvent(HTML.Event e) {
    e.stopPropagation();
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);
  //HTML.document.getElementById("posx").onChange.listen((HTML.Event ev) =>
  //light.pos.x = GetInputValue(ev));
  HTML.document.getElementById("posx").onMouseMove.listen(SwallowEvent);
  HTML.document.getElementById("posy").onMouseMove.listen(SwallowEvent);
  HTML.document.getElementById("posz").onMouseMove.listen(SwallowEvent);

  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    //orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);

    double lx = GetInputValue(HTML.document.getElementById("posx"));
    double ly = GetInputValue(HTML.document.getElementById("posy"));
    double lz = GetInputValue(HTML.document.getElementById("posz"));
    //  note: since we have a directional light, pos has not effect
    light.pos.setValues(lx, ly, lz);
    ico1.setPosFromVec(light.pos);
    // Compute the shadow map
    phaseComputeShadow.draw([shadowProjection, light]);
    // show the shadow map
    phaseDisplayShadow.draw([shadowProjection]);
    // render scene utilizing shadow map
    phaseMain.draw([perspective, shadowProjection, light]);

    HTML.window.animationFrame.then(animate);
  }

  animate(0.0);
}
