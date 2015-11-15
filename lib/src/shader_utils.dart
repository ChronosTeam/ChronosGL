part of chronosgl;

class Uniform {
  WEBGL.UniformLocation uniformLocation;
  WEBGL.RenderingContext gl;

  Uniform(this.uniformLocation, this.gl);

  WEBGL.UniformLocation getUniformLocation() {
    return uniformLocation;
  }

  void setValue1f(num v) {
    gl.uniform1f(uniformLocation, v);
  }

  void setValue3f(num x, num y, num z) {
    gl.uniform3f(uniformLocation, x, y, z);
  }

  void setValue3fv(Vector v) {
    gl.uniform3fv(uniformLocation, v.array);
  }
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
      LogInfo(text);
      LogInfo("Failure:");
      LogInfo(error);
      throw error;
    }
    return shader;
  }

  WEBGL.Program getProgram(String vertexShaderText, String fragmentShaderText) {
    WEBGL.Program program = gl.createProgram();
    gl.attachShader(program, getShader(WEBGL.VERTEX_SHADER, vertexShaderText));
    gl.attachShader(program, getShader(WEBGL.FRAGMENT_SHADER, fragmentShaderText));
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, WEBGL.LINK_STATUS)) {
      throw gl.getProgramInfoLog(program);
    }

    return program;
  }
}
