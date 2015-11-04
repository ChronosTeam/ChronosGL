part of chronosgl;

const String StdVertexBody =
    "gl_Position = ${uPerspectiveMatrix} * ${uModelViewMatrix} * vec4(${aVertexPosition}, 1.0);";

    // TODO: consider collapsing: AddAttributeVar(x, x) => .AddAttributeVar(x)
List<ShaderObject> createTexturedShader() {
  return [
    new ShaderObject("TexturedV")
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..AddAttributeVar(aTextureCoordinates, aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates, vTextureCoordinates)
      ..SetBody(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"])
      ..InitializeShader(true),
    new ShaderObject("TexturedF")
      ..AddVaryingVar(vTextureCoordinates, vTextureCoordinates)
      ..AddUniformVar(uColor, uColor)
      ..AddUniformVar(uTextureSampler, uTextureSampler)
      ..SetBody([
        "gl_FragColor = texture2D(${uTextureSampler}, ${vTextureCoordinates}) + vec4( ${uColor}, 0.0 );"
      ])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createSolidColorShader() {
  return [
    new ShaderObject("SolidColorV")
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..SetBody([StdVertexBody])
      ..InitializeShader(true),
    new ShaderObject("SolidColorF")
      ..AddUniformVar(uColor, uColor)
      ..SetBody(["gl_FragColor = vec4( ${uColor}, 1.0 );"])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createColorShader() {
  return [
    new ShaderObject("ColorV")
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..AddAttributeVar(aColors, aColors)
      ..AddVaryingVar(vColors, vColors)
      ..SetBody([StdVertexBody, "${vColors} = ${aColors};"])
      ..InitializeShader(true),
    new ShaderObject("ColorF")
      ..AddVaryingVar(vColors, "vaColor")
      ..SetBody(["gl_FragColor = vec4( vaColor, 1.0 );"])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createLightShader() {
  return [
    new ShaderObject("LightV")
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddAttributeVar(aNormal, aNormal)
      ..AddVaryingVar(vNormal, vNormal)
      ..AddVaryingVar(vLightWeighting, vLightWeighting)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..AddUniformVar(uViewMatrix, uViewMatrix)
      ..AddUniformVar(uPointLightLocation, uPointLightLocation)
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
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddAttributeVar(aNormal, aNormal)
      ..AddVaryingVar(vColors, vColors)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..SetBody([
        StdVertexBody,
        "vColors = normalize(${aNormal} / 2.0 + vec3(0.5) );"
      ])
      ..InitializeShader(true),
    new ShaderObject("Normal2ColorF")
      ..AddVaryingVar(vNormal, vNormal)
      ..SetBody(["gl_FragColor = vec4( ${vColors}, 1.0 );"])
      ..InitializeShader(true)
  ];
}

// this shader works well for cube shapes, for other shapes it might be better to use the normals attribute to sample the cube texture
List<ShaderObject> createCubeMapShader() {
  return [
    new ShaderObject("CubeMapV")
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddVaryingVar(vVertexPosition, vVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..SetBody([
        StdVertexBody,
        "${vVertexPosition} = normalize(${aVertexPosition});"
      ])
      ..InitializeShader(true),
    new ShaderObject("CubeMapF")
      ..AddVaryingVar(vVertexPosition, vVertexPosition)
      ..AddUniformVar(uTextureCubeSampler, uTextureCubeSampler)
      ..SetBody([
        "gl_FragColor = textureCube( ${uTextureCubeSampler}, ${vVertexPosition} );"
      ])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createPointSpritesShader() {
  return [
    new ShaderObject("PointSprites")
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..SetBody([StdVertexBody, "gl_PointSize = 1000.0/gl_Position.z;"])
      ..InitializeShader(true),
    new ShaderObject("PointSpritesF")
      ..AddUniformVar(uTextureSampler, uTextureSampler)
      ..SetBody(
          ["gl_FragColor = texture2D( ${uTextureSampler},  gl_PointCoord);"])
      ..InitializeShader(true)
  ];
}
