part of chronosshader;

const String StdVertexBody =
    "gl_Position = ${uPerspectiveMatrix} * ${uModelViewMatrix} * vec4(${aVertexPosition}, 1.0);";

const String NullVertexBody =
    "gl_Position = vec4(${aVertexPosition}, 1.0);";

List<ShaderObject> createTexturedShader() {
  return [
    new ShaderObject("Textured")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("TexturedF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uColor)
      ..AddUniformVar(uTextureSampler)
      ..SetBodyWithMain([
        "gl_FragColor = texture2D(${uTextureSampler}, ${vTextureCoordinates}) + vec4( ${uColor}, 0.0 );"
      ])
  ];
}

List<ShaderObject> createSolidColorShader() {
  return [
    new ShaderObject("SolidColor")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBodyWithMain([StdVertexBody]),
    new ShaderObject("SolidColorF")
      ..AddUniformVar(uColor)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${uColor}, 1.0 );"])
  ];
}

List<ShaderObject> createColorShader() {
  return [
    new ShaderObject("Color")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddAttributeVar(aColors)
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain([StdVertexBody, "${vColors} = ${aColors};"]),
    new ShaderObject("ColorF")
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${vColors}, 1.0 );"])
  ];
}

List<ShaderObject> createLightShader() {
  return [
    new ShaderObject("Light")
      ..AddAttributeVar(aVertexPosition)
      
      ..AddAttributeVar(aNormal)
      ..AddVaryingVar(vVertexPosition)
      ..AddVaryingVar(vNormal)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddUniformVar(uViewMatrix)
      ..SetBodyWithMain([
        "vec4 pos = ${uModelViewMatrix} * vec4(${aVertexPosition}, 1.0);"
        "gl_Position = ${uPerspectiveMatrix} * pos;",
        "${vVertexPosition} = pos.xyz;",
        "${vNormal} = (${uModelViewMatrix} * vec4(${aNormal}, 0.0)).xyz;",
      ]),
    new ShaderObject("LightF")
      ..AddVaryingVar(vNormal)
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uLightSourceInfo0)
      ..SetBodyWithMain([
        // diffuse
        "vec3 pll = ${uLightSourceInfo0}[0].xyz;",
        "vec3 lightDir = normalize(pll - ${vVertexPosition});",
        "float w = max(dot(${vNormal}, lightDir), 0.0);",
        // specular
        "float glossiness = 10.0;",
        "vec3 viewDir = normalize(-vVertexPosition);",
        "vec3 angleW = normalize(viewDir + lightDir);",
        "float specComp = max(0., dot(${vNormal}, angleW));",
        "float s = pow(specComp, max(1., glossiness));",
        "gl_FragColor = vec4(w + s, s, s, 1.0 );"
        ])
  ];
}

List<ShaderObject> createNormal2ColorShader() {
  return [
    new ShaderObject("Normal2Color")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddVaryingVar(vColors)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBodyWithMain([
        StdVertexBody,
        "vColors = normalize(${aNormal} / 2.0 + vec3(0.5) );"
      ]),
    new ShaderObject("Normal2ColorF")
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${vColors}, 1.0 );"])
  ];
}

// this shader works well for cube shapes, for other shapes it might be better to use the normals attribute to sample the cube texture
List<ShaderObject> createCubeMapShader() {
  return [
    new ShaderObject("CubeMap")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBodyWithMain([
        StdVertexBody,
        "${vVertexPosition} = normalize(${aVertexPosition});"
      ]),
    new ShaderObject("CubeMapF")
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uTextureCubeSampler)
      ..SetBodyWithMain([
        "gl_FragColor = textureCube( ${uTextureCubeSampler}, ${vVertexPosition} );"
      ]),
  ];
}

List<ShaderObject> createPointSpritesShader() {
  return [
    new ShaderObject("PointSprites")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddUniformVar(uPointSize)
      ..SetBodyWithMain(
          [StdVertexBody, "gl_PointSize = ${uPointSize}/gl_Position.z;"]),
    new ShaderObject("PointSpritesF")
      ..AddUniformVar(uTextureSampler)
      ..SetBodyWithMain(
          ["gl_FragColor = texture2D( ${uTextureSampler},  gl_PointCoord);"])
  ];
}
