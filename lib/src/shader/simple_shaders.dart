part of chronosshader;

List<ShaderObject> createTexturedShader() {
  return [
    new ShaderObject("Textured")
      ..AddAttributeVars([aVertexPosition, aTextureCoordinates])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..AddVaryingVars([vTextureCoordinates])
      ..SetBodyWithMain([StdVertexBody, StdVertexTextureForward]),
    new ShaderObject("TexturedF")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uColor, uTexture])
      ..SetBodyWithMain([
        "${oFragColor} = texture(${uTexture}, ${vTextureCoordinates}) + vec4( ${uColor}, 0.0 );"
      ])
  ];
}

List<ShaderObject> createSolidColorShader() {
  return [
    new ShaderObject("SolidColor")
      ..AddAttributeVars([aVertexPosition])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..SetBodyWithMain([StdVertexBody]),
    new ShaderObject("SolidColorF")
      ..AddUniformVars([uColor])
      ..SetBodyWithMain(["${oFragColor} = vec4( ${uColor}, 1.0 );"])
  ];
}

// this shader works well for cube shapes,
// for other shapes it might be better to use the normals attribute
// to sample the cube texture
List<ShaderObject> createCubeMapShader() {
  return [
    new ShaderObject("CubeMap")
      ..AddAttributeVars([aVertexPosition])
      ..AddVaryingVars([vVertexPosition])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..SetBodyWithMain([
        StdVertexBody,
        "${vVertexPosition} = normalize(${aVertexPosition});"
      ]),
    new ShaderObject("CubeMapF")
      ..AddVaryingVars([vVertexPosition])
      ..AddUniformVars([uCubeTexture])
      ..SetBodyWithMain([
        "${oFragColor} = texture( ${uCubeTexture}, ${vVertexPosition} );"
      ]),
  ];
}

List<ShaderObject> createPointSpritesShader() {
  return [
    new ShaderObject("PointSprites")
      ..AddAttributeVars([aVertexPosition])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uPointSize])
      ..SetBodyWithMain(
          [StdVertexBody, "gl_PointSize = ${uPointSize}/gl_Position.z;"]),
    new ShaderObject("PointSpritesF")
      ..AddUniformVars([uTexture])
      ..SetBodyWithMain(
          ["${oFragColor} = texture( ${uTexture},  gl_PointCoord);"])
  ];
}

List<ShaderObject> createDemoShader() {
  return [
    new ShaderObject("FixedVertexColorV")
      ..AddAttributeVars([aVertexPosition])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..AddVaryingVars([vColor])
      ..SetBodyWithMain([
        StdVertexBody,
        "${vColor} = ColorFromPosition(${aVertexPosition});",
      ], prolog: [
        StdLibShader
      ]),
    new ShaderObject("FixedVertexColorF")
      ..AddVaryingVars([vColor])
      ..SetBodyWithMain(["${oFragColor} = vec4( ${vColor}, 1.0 );"])
  ];
}
