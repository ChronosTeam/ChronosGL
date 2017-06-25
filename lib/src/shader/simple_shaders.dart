part of chronosshader;

final ShaderObject texturedVertexShader = new ShaderObject("Textured")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..AddVaryingVars([vTexUV])
  ..SetBodyWithMain([StdVertexBody, StdVertexTextureForward]);

final ShaderObject texturedFragmentShader = new ShaderObject("TexturedF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uColor, uTexture])
  ..SetBodyWithMain([
    "${oFragColor} = texture(${uTexture}, ${vTexUV}) + vec4( ${uColor}, 0.0 );"
  ]);

final ShaderObject solidColorVertexShader = new ShaderObject("SolidColor")
  ..AddAttributeVars([aPosition])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBodyWithMain([StdVertexBody]);

final ShaderObject solidColorFragmentShader = new ShaderObject("SolidColorF")
  ..AddUniformVars([uColor])
  ..SetBodyWithMain(["${oFragColor} = vec4( ${uColor}, 1.0 );"]);

// this shader works well for cube shapes,
// for other shapes it might be better to use the normals attribute
// to sample the cube texture
final ShaderObject cubeMapVertexShader = new ShaderObject("CubeMap")
  ..AddAttributeVars([aPosition])
  ..AddVaryingVars([vPosition])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBodyWithMain(
      [StdVertexBody, "${vPosition} = normalize(${aPosition});"]);

final ShaderObject cubeMapFragmentShader = new ShaderObject("CubeMapF")
  ..AddVaryingVars([vPosition])
  ..AddUniformVars([uCubeTexture])
  ..SetBodyWithMain(
      ["${oFragColor} = texture( ${uCubeTexture}, ${vPosition} );"]);

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

final ShaderObject demoVertexShader = new ShaderObject("FixedVertexColorV")
  ..AddAttributeVars([aPosition])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..AddVaryingVars([vColor])
  ..SetBodyWithMain([
    StdVertexBody,
    "${vColor} = ColorFromPosition(${aPosition});",
  ], prolog: [
    StdLibShader
  ]);

final ShaderObject demoFragmentShader = new ShaderObject("FixedVertexColorF")
  ..AddVaryingVars([vColor])
  ..SetBodyWithMain(["${oFragColor} = vec4( ${vColor}, 1.0 );"]);
