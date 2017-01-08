part of chronosshader;

List<ShaderObject> createSobelShader() {
  return [
    new ShaderObject("SobelV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(
          [NullVertexBody, StdVertexTextureForward]),
    new ShaderObject("SobelF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTexture)
      ..AddUniformVar(uCanvasSize)
      ..SetBody([
        """
  float lum(vec4 c) {
    return dot(c.xyz, vec3(0.3, 0.59, 0.11));
  }


  float sobel() {
      vec2 imageIncrement = vec2(1.0/${uCanvasSize}.x,1.0/${uCanvasSize}.y);
      float t00 = lum(texture2D(${uTexture}, vTextureCoordinates + imageIncrement * vec2(-1, -1)));
      float t10 = lum(texture2D(${uTexture}, vTextureCoordinates + imageIncrement * vec2( 0, -1)));
      float t20 = lum(texture2D(${uTexture}, vTextureCoordinates + imageIncrement * vec2( 1, -1)));
      float t01 = lum(texture2D(${uTexture}, vTextureCoordinates + imageIncrement * vec2(-1,  0)));
      float t21 = lum(texture2D(${uTexture}, vTextureCoordinates + imageIncrement * vec2( 1,  0)));
      float t02 = lum(texture2D(${uTexture}, vTextureCoordinates + imageIncrement * vec2(-1,  1)));
      float t12 = lum(texture2D(${uTexture}, vTextureCoordinates + imageIncrement * vec2( 0,  1)));
      float t22 = lum(texture2D(${uTexture}, vTextureCoordinates + imageIncrement * vec2( 1,  1)));
      vec2 grad;
      grad.x = t00 + 2.0 * t01 + t02 - t20 - 2.0 * t21 - t22;
      grad.y = t00 + 2.0 * t10 + t20 - t02 - 2.0 * t12 - t22;
      return length(grad);
  } 

  void main(void) {
      float len = sobel();
      gl_FragColor = vec4(len, len, len, 1.0); // 
  }
  """
      ])
  ];
}
