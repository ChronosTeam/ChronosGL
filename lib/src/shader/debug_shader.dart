part of chronosshader;

List<ShaderObject> createDemoShader() {
  return createFixedVertexColorShader();
}

List<ShaderObject> createFixedVertexColorShader() {
  return [
    new ShaderObject("FixedVertexColorV")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddVaryingVar(vColor)
      ..SetBodyWithMain([
        StdVertexBody,
        """
      ${vColor} = vec3( sin(${aVertexPosition}.x)/2.0+0.5,
                         cos(${aVertexPosition}.y)/2.0+0.5, 
                         sin(${aVertexPosition}.z)/2.0+0.5);
"""
      ]),
    new ShaderObject("FixedVertexColorF")
      ..AddVaryingVar(vColor)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${vColor}, 1.0 );"])
  ];
}

List<ShaderObject> createDebugTexCoordsShader() {
  return [
    new ShaderObject("DebugTexCoordsV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("DebugTexCoordsF")
      ..AddVaryingVar(vTextureCoordinates, vTextureCoordinates)
      ..SetBodyWithMain(
          ["gl_FragColor = vec4(${vTextureCoordinates}, 0.0, 1.0);"])
  ];
}

