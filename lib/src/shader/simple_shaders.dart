part of chronosshader;

const String StdVertexBody =
    "gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);";

const String NullVertexBody = "gl_Position = vec4(${aVertexPosition}, 1.0);";

List<ShaderObject> createTexturedShader() {
  return [
    new ShaderObject("Textured")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("TexturedF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uColor)
      ..AddUniformVar(uTexture)
      ..SetBodyWithMain([
        "gl_FragColor = texture2D(${uTexture}, ${vTextureCoordinates}) + vec4( ${uColor}, 0.0 );"
      ])
  ];
}

List<ShaderObject> createSolidColorShader() {
  return [
    new ShaderObject("SolidColor")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([StdVertexBody]),
    new ShaderObject("SolidColorF")
      ..AddUniformVar(uColor)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${uColor}, 1.0 );"])
  ];
}

// this shader works well for cube shapes,
// for other shapes it might be better to use the normals attribute
// to sample the cube texture
List<ShaderObject> createCubeMapShader() {
  return [
    new ShaderObject("CubeMap")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        StdVertexBody,
        "${vVertexPosition} = normalize(${aVertexPosition});"
      ]),
    new ShaderObject("CubeMapF")
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uCubeTexture)
      ..SetBodyWithMain([
        "gl_FragColor = textureCube( ${uCubeTexture}, ${vVertexPosition} );"
      ]),
  ];
}

List<ShaderObject> createPointSpritesShader() {
  return [
    new ShaderObject("PointSprites")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddUniformVar(uPointSize)
      ..SetBodyWithMain(
          [StdVertexBody, "gl_PointSize = ${uPointSize}/gl_Position.z;"]),
    new ShaderObject("PointSpritesF")
      ..AddUniformVar(uTexture)
      ..SetBodyWithMain(
          ["gl_FragColor = texture2D( ${uTexture},  gl_PointCoord);"])
  ];
}
