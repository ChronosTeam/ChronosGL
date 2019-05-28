part of chronosshader;

final ShaderObject texturedVertexShader = ShaderObject("Textured")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..AddVaryingVars([vTexUV])
  ..SetBody([StdVertexShaderWithTextureForwardString]);

final ShaderObject texturedFragmentShader = ShaderObject("TexturedF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uColor, uTexture])
  ..SetBodyWithMain([
    "${oFragColor} = texture(${uTexture}, ${vTexUV}) + vec4( ${uColor}, 0.0 );"
  ]);

final ShaderObject solidColorVertexShader = ShaderObject("SolidColor")
  ..AddAttributeVars([aPosition])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBodyWithMain([StdVertexBody]);

final ShaderObject solidColorFragmentShader = ShaderObject("SolidColorF")
  ..AddUniformVars([uColor])
  ..SetBodyWithMain(["${oFragColor} = vec4( ${uColor}, 1.0 );"]);

// this shader works well for cube shapes,
// for other shapes it might be better to use the normals attribute
// to sample the cube texture
final ShaderObject cubeMapVertexShader = ShaderObject("CubeMap")
  ..AddAttributeVars([aPosition])
  ..AddVaryingVars([vPosition])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBodyWithMain([StdVertexBody, "${vPosition} = normalize(${aPosition});"]);

final ShaderObject cubeMapFragmentShader = ShaderObject("CubeMapF")
  ..AddVaryingVars([vPosition])
  ..AddUniformVars([uCubeTexture])
  ..SetBodyWithMain(
      ["${oFragColor} = texture( ${uCubeTexture}, ${vPosition} );"]);

final ShaderObject pointSpritesVertexShader = ShaderObject("PointSpritesV")
  ..AddAttributeVars([aPosition])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uPointSize])
  ..SetBodyWithMain(
      [StdVertexBody, "gl_PointSize = ${uPointSize}/gl_Position.z;"]);

final ShaderObject pointSpritesFragmentShader = ShaderObject("PointSpritesF")
  ..AddUniformVars([uTexture])
  ..SetBodyWithMain(["${oFragColor} = texture( ${uTexture},  gl_PointCoord);"]);

final ShaderObject demoVertexShader = ShaderObject("FixedVertexColorV")
  ..AddAttributeVars([aPosition])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..AddVaryingVars([vColor])
  ..SetBodyWithMain([
    StdVertexBody,
    "${vColor} = ColorFromPosition(${aPosition});",
  ], prolog: [
    StdLibShader
  ]);

final ShaderObject demoFragmentShader = ShaderObject("FixedVertexColorF")
  ..AddVaryingVars([vColor])
  ..SetBodyWithMain(["${oFragColor} = vec4( ${vColor}, 1.0 );"]);

final ShaderObject multiColorVertexShader = ShaderObject("MultiColorVertexColorV")
  ..AddAttributeVars([aPosition, aColor])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..AddVaryingVars([vColor])
  ..SetBodyWithMain([
    StdVertexBody,
    "${vColor} = ${aColor};",
  ], prolog: [
    StdLibShader
  ]);

final ShaderObject multiColorFragmentShader = ShaderObject("MultiColorVertexColorF")
  ..AddVaryingVars([vColor])
  ..SetBodyWithMain(["${oFragColor} = vec4( ${vColor}, 1.0 );"]);
