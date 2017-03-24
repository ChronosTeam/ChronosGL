part of chronosshader;

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
        "gl_FragColor = texture2D(${uTexture}, ${vTextureCoordinates});"
      ])
  ];
}
