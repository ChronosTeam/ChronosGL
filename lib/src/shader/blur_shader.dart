part of chronosshader;

// https://en.wikipedia.org/wiki/Gaussian_blur

double _gaussianPdf(double x, double sigma) {
  // 0.39894... =  1 / sqrt(2 * pi)
  return 0.39894 * Math.exp(-0.5 * x * x / (sigma * sigma)) / sigma;
}

String makeGaussianPdfKernelString(int radius, double sigma) {
  List<double> w = [];
  double total = 0.0;
  for (int i = 0; i < radius; ++i) {
    double x = _gaussianPdf(i * 1.0, sigma);
    w.add(x);
    total += x;
    if (i > 0) total += x;
  }

  StringBuffer sb = StringBuffer("");
  String sep = "";
  for (int i = 0; i < radius; ++i) {
    sb.write(sep);
    sep = ", ";
    sb.write("${w[i] / total}");
  }

  return "float kernel[$radius] = float[$radius](${sb.toString()});";
}

const String _kernelFragment = """
void main() {
    vec2 invSize = 1.0 / vec2(textureSize(${uTexture}, 0));
    vec3 sum = texture(${uTexture}, ${vTexUV}).rgb * kernel[0];
    for (int i = 1; i < kernel.length(); i++) {
        vec2 offset = ${uDirection} * invSize * float(i);
        sum += texture(${uTexture}, ${vTexUV} + offset).rgb * kernel[i];
        sum += texture(${uTexture}, ${vTexUV} - offset).rgb * kernel[i];
    }
    ${oFragColor} = vec4(sum, 1.0);
}
""";

ShaderObject CreateBloomTextureFragmentShader(int radius, double sigma) {
  String constants = makeGaussianPdfKernelString(radius, sigma);
  return ShaderObject("BloomPassF")
    ..AddVaryingVars([vTexUV])
    ..AddUniformVars([uDirection, uTexture])
    ..SetBody([constants, _kernelFragment]);
}

const String _applyBloomEffectFragment = """
void main() {
	${oFragColor} = texture(${uTexture}, ${vTexUV}) +
	                ${uScale} *
	                vec4(${uColor}, 1.0) *
	                texture(${uTexture2}, ${vTexUV});
}
""";

final ShaderObject uvPassthruVertexShader = ShaderObject("uv-passthru")
  ..AddAttributeVars([aPosition, aTexUV])
  ..AddVaryingVars([vTexUV])
  ..SetBodyWithMain([NullVertexBody, "${vTexUV} = ${aTexUV};"]);

final ShaderObject applyBloomEffectFragmentShader = ShaderObject("BloomPassF")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture, uTexture2, uScale, uColor])
  ..SetBody([_applyBloomEffectFragment]);
