part of chronosshader;

// addapted from http://www.geeks3d.com/20100909/shader-library-gaussian-blur-post-processing-filter-in-glsl/
List<ShaderObject> createBlurShader() {
  return [
    new ShaderObject("BlurV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("BlurF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uCameraFar)
      ..AddUniformVar(uCameraNear)
      ..AddUniformVar(uCanvasSize)
      ..AddUniformVar(uTexture)
      ..SetBodyWithMain([
        """
      float offset[3];
      offset[0]=0.;
      offset[1]=1.3846153846;
      offset[2]=3.2307692308;
      float weight[3];
      weight[0]=0.2270270270;
      weight[1]=0.3162162162;
      weight[2]=0.0702702703;

      //gl_FragColor = vec4(gl_FragCoord.x/size.x, gl_FragCoord.y/size.y, 0., 0.);
      //gl_FragColor = vec4(${vTextureCoordinates}.x, ${vTextureCoordinates}.y, 0., 0.);

      gl_FragColor = texture2D( ${uTexture}, ${vTextureCoordinates})* weight[0];
      for (int i=1; i<3; i++) {
          gl_FragColor += texture2D( ${uTexture}, ${vTextureCoordinates}+vec2(0.0, offset[i]/size.y) ) * weight[i];
          gl_FragColor += texture2D( ${uTexture}, ${vTextureCoordinates}-vec2(0.0, offset[i]/size.y) ) * weight[i];
      }

"""
      ])
  ];
}

// https://www.shadertoy.com/view/XdfGDH

const String Blur2FragShader = """
  float normpdf(in float x, in float sigma)
  {
    return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;
  }
  
  void mainImage( out vec4 fragColor, in vec2 fragCoord )
  {
    vec3 c = texture2D(iChannel0, fragCoord.xy / iResolution.xy).rgb;
      
    //declare stuff
    const int mSize = 21;
    const int kSize = (mSize-1)/2;
    float kernel[mSize];
    vec3 final_colour = vec3(0.0);
    
    //create the 1-D kernel
    float sigma = 7.0;
    float Z = 0.0;
    for (int j = 0; j <= kSize; ++j)
    {
      kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);
    }
    
    //get the normalization factor (as the gaussian has been clamped)
    for (int j = 0; j < mSize; ++j)
    {
      Z += kernel[j];
    }
    
    //read out the texels
    for (int i=-kSize; i <= kSize; ++i)
    {
      for (int j=-kSize; j <= kSize; ++j)
      {
        final_colour += kernel[kSize+j]*kernel[kSize+i]*texture2D(iChannel0, (fragCoord.xy+vec2(float(i),float(j))) / iResolution.xy).rgb;
  
      }
    }
    
    
    fragColor = vec4(final_colour/(Z*Z), 1.0);
  }

  void main(void)
  {
    mainImage( gl_FragColor, gl_FragCoord.xy);
  }
  """;

List<ShaderObject> createBlurShader2() {
  return [
    new ShaderObject("Blur2V")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([StdVertexBody]),
    new ShaderObject("Blur2F")
      ..AddUniformVar(uCameraFar, "cameraFar")
      ..AddUniformVar(uCameraNear, "cameraNear")
      ..AddUniformVar(uCanvasSize, "iResolution")
      ..AddUniformVar(uTexture, "iChannel0")
      ..SetBody([Blur2FragShader])
  ];
}
