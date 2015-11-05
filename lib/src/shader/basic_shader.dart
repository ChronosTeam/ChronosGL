part of chronosgl;

const String StdVertexBody =
    "gl_Position = ${uPerspectiveMatrix} * ${uModelViewMatrix} * vec4(${aVertexPosition}, 1.0);";

// TODO: consider collapsing: AddAttributeVar(x, x) => .AddAttributeVar(x)
List<ShaderObject> createTexturedShader() {
  return [
    new ShaderObject("TexturedV")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBody(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"])
      ..InitializeShader(true),
    new ShaderObject("TexturedF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uColor)
      ..AddUniformVar(uTextureSampler)
      ..SetBody([
        "gl_FragColor = texture2D(${uTextureSampler}, ${vTextureCoordinates}) + vec4( ${uColor}, 0.0 );"
      ])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createSolidColorShader() {
  return [
    new ShaderObject("SolidColorV")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBody([StdVertexBody])
      ..InitializeShader(true),
    new ShaderObject("SolidColorF")
      ..AddUniformVar(uColor)
      ..SetBody(["gl_FragColor = vec4( ${uColor}, 1.0 );"])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createColorShader() {
  return [
    new ShaderObject("ColorV")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddAttributeVar(aColors)
      ..AddVaryingVar(vColors)
      ..SetBody([StdVertexBody, "${vColors} = ${aColors};"])
      ..InitializeShader(true),
    new ShaderObject("ColorF")
      ..AddVaryingVar(vColors)
      ..SetBody(["gl_FragColor = vec4( ${vColor}, 1.0 );"])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createLightShader() {
  return [
    new ShaderObject("LightV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddVaryingVar(vNormal)
      ..AddVaryingVar(vLightWeighting)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddUniformVar(uViewMatrix)
      ..AddUniformVar(uPointLightLocation)
      ..SetBody([
        StdVertexBody,
        "${vNormal} = (${uModelViewMatrix} * vec4(${aNormal}, 0.0)).xyz;",
        // Point Light Location
        "vec3 pll = (uViewMatrix * vec4(${uPointLightLocation}, 0.0)).xyz;",
        // Light Dir
        "vec3 ld = normalize(pll - ${aVertexPosition}.xyz);",
        // Ambient Color
        "vec3 ac = vec3(0.0,0.0,0.0);",
        // Directional Color
        "vec3 dc = vec3(1.0,1.0,1.0);",
        // Directional Light Weighting
        "float dlw = max(dot(${vNormal}, normalize(ld)), 0.0);",
        "${vLightWeighting} = ac + dc * dlw;",
      ])
      ..InitializeShader(true),
    new ShaderObject("LightF")
      ..AddVaryingVar(vNormal, vNormal)
      ..AddVaryingVar(vLightWeighting, vLightWeighting)
      // ..SetBody(["gl_FragColor = vec4( ${vNormal} * ${vLightWeighting}, 1.0 );"])
      ..SetBody(["gl_FragColor = vec4( ${vLightWeighting}, 1.0 );"])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createNormal2ColorShader() {
  return [
    new ShaderObject("Normal2ColorV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddVaryingVar(vColors)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBody([
        StdVertexBody,
        "vColors = normalize(${aNormal} / 2.0 + vec3(0.5) );"
      ])
      ..InitializeShader(true),
    new ShaderObject("Normal2ColorF")
      ..AddVaryingVar(vColors)
      ..SetBody(["gl_FragColor = vec4( ${vColors}, 1.0 );"])
      ..InitializeShader(true)
  ];
}

// this shader works well for cube shapes, for other shapes it might be better to use the normals attribute to sample the cube texture
List<ShaderObject> createCubeMapShader() {
  return [
    new ShaderObject("CubeMapV")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBody([
        StdVertexBody,
        "${vVertexPosition} = normalize(${aVertexPosition});"
      ])
      ..InitializeShader(true),
    new ShaderObject("CubeMapF")
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uTextureCubeSampler)
      ..SetBody([
        "gl_FragColor = textureCube( ${uTextureCubeSampler}, ${vVertexPosition} );"
      ])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createPointSpritesShader() {
  return [
    new ShaderObject("PointSprites")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBody([StdVertexBody, "gl_PointSize = 1000.0/gl_Position.z;"])
      ..InitializeShader(true),
    new ShaderObject("PointSpritesF")
      ..AddUniformVar(uTextureSampler)
      ..SetBody(
          ["gl_FragColor = texture2D( ${uTextureSampler},  gl_PointCoord);"])
      ..InitializeShader(true)
  ];
}
