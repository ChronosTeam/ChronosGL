part of chronosgl;

List<ShaderObject> createDemoShader() {
  return createFixedVertexColorShader();
}

List<ShaderObject> createFixedVertexColorShader() {
  return [
    new ShaderObject("FixedVertexColorV")
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..AddVaryingVar(vColors, vColors)
      ..SetBody([
        StdVertexBody,
        """
      ${vColors} = vec3( sin(${aVertexPosition}.x)/2.0+0.5, 
                         cos(${aVertexPosition}.y)/2.0+0.5, 
                         sin(${aVertexPosition}.z)/2.0+0.5);
"""
      ])
      ..InitializeShader(true),
    new ShaderObject("FixedVertexColorF")
      ..AddVaryingVar(vColors, vColors)
      ..SetBody(["gl_FragColor = vec4( ${vColors}, 1.0 );"])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createDebugTexCoordsShader() {
  return [
    new ShaderObject("DebugTexCoordsV")
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates, aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates, vTextureCoordinates)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..SetBody(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"])
      ..InitializeShader(true),
    new ShaderObject("DebugTexCoordsF")
      ..AddVaryingVar(vTextureCoordinates, vTextureCoordinates)
      ..SetBody(["gl_FragColor = vec4(${vTextureCoordinates}, 0.0, 1.0);"])
      ..InitializeShader(true)
  ];
}

List<ShaderObject> createDepthShader() {
  return [
    new ShaderObject("DepthV")
      ..AddAttributeVar(aVertexPosition, aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates, aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates, vTextureCoordinates)
      ..AddUniformVar(uPerspectiveMatrix, uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix, uModelViewMatrix)
      ..SetBody(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"])
      ..InitializeShader(true),
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
      ..InitializeShader(false)
  ];
}
