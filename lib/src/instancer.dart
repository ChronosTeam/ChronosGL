part of chronosgl;

class Instancer {
  Mesh mesh;
  int count;
  bool enabled = true;
  RenderingContext gl;

  List<ShaderObject> instancedShader;

  Instancer(this.mesh, this.count) {
    instancedShader = createInstancedShader();
  }

  List<ShaderObject> createInstancedShader() {
    return [
      new ShaderObject("InstancedV")
        ..AddAttributeVar(aVertexPosition)
        ..AddAttributeVar(iaRotatation)
        ..AddAttributeVar(iaTranslation)
        ..AddVaryingVar(vColors)
        ..AddUniformVar(uPerspectiveMatrix)
        ..AddUniformVar(uModelViewMatrix)
        ..SetBody([
          """
        vec3 rotate_vertex_position(vec3 pos, vec4 rot) { 
          return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);
        }

        void main(void) {
          vec3 P = rotate_vertex_position(${aVertexPosition}, ${iaRotatation}) + 
                    ${iaTranslation};
          gl_Position = ${uPerspectiveMatrix} * ${uModelViewMatrix} * vec4(P, 1);
          ${vColors} = vec3( sin(${aVertexPosition}.x)/2.0+0.5, 
                       cos(${aVertexPosition}.y)/2.0+0.5, 
                       sin(${aVertexPosition}.z)/2.0+0.5);
        }
        """
        ]),
      new ShaderObject("InstancedF")
        ..AddVaryingVar(vColors)
        ..SetBodyWithMain([" gl_FragColor = vec4( ${vColors}, 1. );"])
    ];
  }

  void draw(ShaderProgram program, Matrix4 mvMatrix) {
    mesh.bindBuffers(program);
    mesh.bindUniforms(program);

    program.inputs.SetUniformVal(uModelViewMatrix, mvMatrix);
    program.MaybeSetUniform(uModelViewMatrix);
    program.Draw(
        count, mesh.numItems, mesh.drawPoints, mesh._indexBuffer != null);
  }
}
