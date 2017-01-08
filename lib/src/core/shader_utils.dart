part of core;

String AddLineNumbers(String text) {
  List<String> out = text.split("\n");
  for (int i = 0; i < out.length; ++i) {
    out[i] = "${i + 1}: ${out[i]}";
  }
  return out.join("\n");
}

class ShaderUtils {
  WEBGL.RenderingContext gl;

  ShaderUtils(this.gl);

  WEBGL.Shader getShader(int type, String text) {
    WEBGL.Shader shader = gl.createShader(type);

    gl.shaderSource(shader, text);
    gl.compileShader(shader);

    var result = gl.getShaderParameter(shader, WEBGL.COMPILE_STATUS);
    if (result != null && result == false) {
      String error = gl.getShaderInfoLog(shader);
      LogInfo("Compilation failed:");
      LogInfo(AddLineNumbers(text));
      LogInfo("Failure:");
      LogInfo(error);
      throw error;
    }
    return shader;
  }

  WEBGL.Program getProgram(String vertexShaderText, String fragmentShaderText) {
    WEBGL.Program program = gl.createProgram();
    gl.attachShader(program, getShader(WEBGL.VERTEX_SHADER, vertexShaderText));
    gl.attachShader(
        program, getShader(WEBGL.FRAGMENT_SHADER, fragmentShaderText));
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, WEBGL.LINK_STATUS)) {
      throw gl.getProgramInfoLog(program);
    }

    return program;
  }
}
