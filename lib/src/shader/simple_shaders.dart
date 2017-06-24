part of chronosshader;

List<ShaderObject> createTexturedShader() {
  return [
    new ShaderObject("Textured")
      ..AddAttributeVars([aPosition, aTexUV])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..AddVaryingVars([vTexUV])
      ..SetBodyWithMain([StdVertexBody, StdVertexTextureForward]),
    new ShaderObject("TexturedF")
      ..AddVaryingVars([vTexUV])
      ..AddUniformVars([uColor, uTexture])
      ..SetBodyWithMain([
        "${oFragColor} = texture(${uTexture}, ${vTexUV}) + vec4( ${uColor}, 0.0 );"
      ])
  ];
}

List<ShaderObject> createSolidColorShader() {
  return [
    new ShaderObject("SolidColor")
      ..AddAttributeVars([aPosition])
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
      ..AddAttributeVars([aPosition])
      ..AddVaryingVars([vVertexPosition])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..SetBodyWithMain([
        StdVertexBody,
        "${vVertexPosition} = normalize(${aPosition});"
      ]),
    new ShaderObject("CubeMapF")
      ..AddVaryingVars([vVertexPosition])
      ..AddUniformVars([uCubeTexture])
      ..SetBodyWithMain(
          ["${oFragColor} = texture( ${uCubeTexture}, ${vVertexPosition} );"]),
  ];
}

final ShaderObject pointSpritesVertexShader = new ShaderObject("PointSpritesV")
  ..AddAttributeVars([aPosition])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uPointSize])
  ..SetBodyWithMain(
      [StdVertexBody, "gl_PointSize = ${uPointSize}/gl_Position.z;"]);

final ShaderObject pointSpritesFragmentShader = new ShaderObject(
    "PointSpritesF")
  ..AddUniformVars([uTexture])
  ..SetBodyWithMain(["${oFragColor} = texture( ${uTexture},  gl_PointCoord);"]);

List<ShaderObject> createPointSpritesShader() =>
    [pointSpritesVertexShader, pointSpritesFragmentShader];

List<ShaderObject> createDemoShader() {
  return [
    new ShaderObject("FixedVertexColorV")
      ..AddAttributeVars([aPosition])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
      ..AddVaryingVars([vColor])
      ..SetBodyWithMain([
        StdVertexBody,
        "${vColor} = ColorFromPosition(${aPosition});",
      ], prolog: [
        StdLibShader
      ]),
    new ShaderObject("FixedVertexColorF")
      ..AddVaryingVars([vColor])
      ..SetBodyWithMain(["${oFragColor} = vec4( ${vColor}, 1.0 );"])
  ];
}
