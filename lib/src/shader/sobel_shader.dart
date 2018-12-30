part of chronosshader;

final ShaderObject sobelVertexShader = ShaderObject("SobelV")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddVaryingVars([vTexUV])
  ..SetBody([NullVertexShaderWithTextureForwardString]);

final ShaderObject sobelFragmentShader = ShaderObject("SobelF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture, uCanvasSize])
  ..SetBody([
    """
  float lum(vec4 c) {
    return dot(c.xyz, vec3(0.3, 0.59, 0.11));
  }

  float sobel() {
      vec2 imageIncrement = vec2(1.0/${uCanvasSize}.x,1.0/${uCanvasSize}.y);
      float t00 = lum(texture(${uTexture}, ${vTexUV} + imageIncrement * vec2(-1, -1)));
      float t10 = lum(texture(${uTexture}, ${vTexUV} + imageIncrement * vec2( 0, -1)));
      float t20 = lum(texture(${uTexture}, ${vTexUV} + imageIncrement * vec2( 1, -1)));
      float t01 = lum(texture(${uTexture}, ${vTexUV} + imageIncrement * vec2(-1,  0)));
      float t21 = lum(texture(${uTexture}, ${vTexUV} + imageIncrement * vec2( 1,  0)));
      float t02 = lum(texture(${uTexture}, ${vTexUV} + imageIncrement * vec2(-1,  1)));
      float t12 = lum(texture(${uTexture}, ${vTexUV} + imageIncrement * vec2( 0,  1)));
      float t22 = lum(texture(${uTexture}, ${vTexUV} + imageIncrement * vec2( 1,  1)));
       // sobel kernel used
       // x:
       // +1  0 -1
       // +2  0 -2
       // +1  0 -1
       // 
       // y:
       // +1  +2 +1
       //  0   0  0
       // -1  -2 -1
      vec2 grad;
      grad.x = t00 + 2.0 * t01 + t02 - t20 - 2.0 * t21 - t22;
      grad.y = t00 + 2.0 * t10 + t20 - t02 - 2.0 * t12 - t22;
      return length(grad);
  } 

  void main(void) {
      float len = sobel();
      ${oFragColor} = vec4(len, len, len, 1.0); //
  }
  """
  ]);
