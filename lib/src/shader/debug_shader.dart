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
      ..AddVaryingVar(vColors, vColors)
      ..SetBodyWithMain([
        StdVertexBody,
        """
      ${vColors} = vec3( sin(${aVertexPosition}.x)/2.0+0.5, 
                         cos(${aVertexPosition}.y)/2.0+0.5, 
                         sin(${aVertexPosition}.z)/2.0+0.5);
"""
      ]),
    new ShaderObject("FixedVertexColorF")
      ..AddVaryingVar(vColors, vColors)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${vColors}, 1.0 );"])
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

List<ShaderObject> createDepthShader() {
  return [
    new ShaderObject("DepthV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("DepthsF")
      ..AddVaryingVar(vTextureCoordinates, vTextureCoordinates)
      ..AddUniformVar(uTextureSampler, "uSampler")
      ..AddUniformVar(uTexture2Sampler, "depthSampler")
      ..AddUniformVar(uCameraFar, uCameraFar)
      ..AddUniformVar(uCameraNear, uCameraNear)
      ..SetBody([
        """    
        float linearizeDepth(float z)
        {
          float n = ${uCameraNear};
          float f = ${uCameraFar};
          return (2.0 * n) / (f + n - z * (f - n)); 
        }

        void main(void) {
          vec4 texel = texture2D(depthSampler, ${vTextureCoordinates});
          gl_FragColor = vec4(vec3(linearizeDepth(texel.x)), 1.0);
        }
        """
      ])
  ];
}
