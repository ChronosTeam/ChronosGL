part of core;

String AddLineNumbers(String text) {
  List<String> out = text.split("\n");
  for (int i = 0; i < out.length; ++i) {
    out[i] = "${i + 1}: ${out[i]}";
  }
  return out.join("\n");
}

WEBGL.Shader CompileOneShader(
    ChronosGL cgl, int type, String text) {
  WEBGL.Shader shader = cgl.gl.createShader(type);

  cgl.gl.shaderSource(shader, text);
  cgl.gl.compileShader(shader);

  var result = cgl.gl.getShaderParameter(shader, WEBGL.COMPILE_STATUS);
  if (result != null && result == false) {
    String error = cgl.gl.getShaderInfoLog(shader);
    LogInfo("Compilation failed:");
    LogInfo(AddLineNumbers(text));
    LogInfo("Failure:");
    LogInfo(error);
    throw error;
  }
  return shader;
}

WEBGL.Program CompileWholeProgram(ChronosGL cgl,
    String vertexShaderText, String fragmentShaderText) {
  WEBGL.Program program = cgl.gl.createProgram();
  cgl.gl.attachShader(
      program, CompileOneShader(cgl, WEBGL.VERTEX_SHADER, vertexShaderText));
  cgl.gl.attachShader(
      program, CompileOneShader(cgl, WEBGL.FRAGMENT_SHADER, fragmentShaderText));
  cgl.gl.linkProgram(program);

  if (!cgl.gl.getProgramParameter(program, WEBGL.LINK_STATUS)) {
    throw cgl.gl.getProgramInfoLog(program);
  }

  return program;
}
