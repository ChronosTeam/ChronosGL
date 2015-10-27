part of chronosgl;

ShaderObject createBlurShader() {
  // addapted from http://www.geeks3d.com/20100909/shader-library-gaussian-blur-post-processing-filter-in-glsl/
  ShaderObject shaderObject = new ShaderObject("Blur");

  shaderObject.vertexShader = """
  precision mediump float;
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  
  varying vec2 vTextureCoord;
  
  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
  """;

  shaderObject.fragmentShader = """
  precision mediump float;
  
  varying vec2 vTextureCoord;
  uniform sampler2D colorSampler;
  
  uniform float cameraNear;
  uniform float cameraFar;
  uniform vec2 size;



  void main(void)
  {
      float offset[3];
      offset[0]=0.;
      offset[1]=1.3846153846;
      offset[2]=3.2307692308;
      float weight[3];
      weight[0]=0.2270270270;
      weight[1]=0.3162162162;
      weight[2]=0.0702702703;

      //gl_FragColor = vec4(gl_FragCoord.x/size.x, gl_FragCoord.y/size.y, 0., 0.);
      //gl_FragColor = vec4(vTextureCoord.x, vTextureCoord.y, 0., 0.);

      gl_FragColor = texture2D( colorSampler, vTextureCoord)* weight[0];
      for (int i=1; i<3; i++) {
          gl_FragColor += texture2D( colorSampler, vTextureCoord+vec2(0.0, offset[i]/size.y) ) * weight[i];
          gl_FragColor += texture2D( colorSampler, vTextureCoord-vec2(0.0, offset[i]/size.y) ) * weight[i];
      }

  }

  """;

  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.textureSamplerUniform = "colorSampler";
  shaderObject.cameraNear = "cameraNear";
  shaderObject.cameraFar = "cameraFar";
  shaderObject.canvasSize = "size";

  return shaderObject;
}


// https://www.shadertoy.com/view/XdfGDH
ShaderObject createBlurShader2() {
  ShaderObject shaderObject = new ShaderObject("Blur");

  shaderObject.vertexShader = """
  precision mediump float;
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  
  varying vec2 vTextureCoord;
  
  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
  """;

  shaderObject.fragmentShader = """
  precision mediump float;
  
  varying vec2 vTextureCoord;
  uniform sampler2D iChannel0;
  
  uniform vec2      iResolution;
  uniform float     iGlobalTime;

  uniform float cameraNear;
  uniform float cameraFar;

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

  shaderObject.vertexPositionAttribute = "aVertexPosition";
  shaderObject.textureCoordinatesAttribute = "aTextureCoord";
  shaderObject.modelViewMatrixUniform = "uMVMatrix";
  shaderObject.perpectiveMatrixUniform = "uPMatrix";
  shaderObject.textureSamplerUniform = "iChannel0";
  shaderObject.cameraNear = "cameraNear";
  shaderObject.cameraFar = "cameraFar";
  shaderObject.canvasSize = "iResolution";

  return shaderObject;
}
