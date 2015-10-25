part of chronosgl;

class Instancer {
  Mesh mesh;
  int count;
  bool enabled = true;
  RenderingContext gl;

  ShaderObject instancedShader;

  Float32List translations;
  Float32List rotations; // as quaternions

  Buffer transformsBuffer;
  Buffer rotationsBuffer;

  Instancer(this.mesh, int count) {
    gl = ChronosGL.globalGL;
    setCount(count);
    instancedShader = createInstancedShader();
    transformsBuffer = gl.createBuffer();
    rotationsBuffer = gl.createBuffer();
  }

  void setCount(int count) {
    this.count = count;
    translations = new Float32List(count * 3);
    rotations = new Float32List(count * 4);
  }

  Quaternion q = new Quaternion();
  void setTransformFromSpatial(int position, Spatial spatial) {
    translations.setAll(position * 3, spatial.getPos().array);
    q.fromRotationMatrix4(spatial.transform);
    rotations.setAll(position * 3, q.array);
  }

  ShaderObject createInstancedShader() {
    ShaderObject shaderObject = new ShaderObject("Instanced");

    shaderObject.vertexShader = """
        precision mediump float;
        attribute vec3 aVertexPosition;
        
        attribute vec3 trans;
        attribute vec4 rot;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec3 vColor;

        // https://code.google.com/p/kri/wiki/Quaternions
        vec3 rotate_vertex_position(vec3 pos, vec4 rot)
        { 
          return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);
        }

        void main(void) {
          vec3 P = rotate_vertex_position(aVertexPosition, rot) + trans;
          gl_Position = uPMatrix * uMVMatrix * vec4(P, 1);
          vColor = vec3( sin(aVertexPosition.x)/2.0+0.5, cos(aVertexPosition.y)/2.0+0.5, sin(aVertexPosition.z)/2.0+0.5);
        }
        """;

    shaderObject.fragmentShader = """
        precision mediump float;
        
        varying vec3 vColor;

        void main(void) {
          gl_FragColor = vec4( vColor, 1. );
        }
        """;

    shaderObject.vertexPositionAttribute = "aVertexPosition";
    shaderObject.perpectiveMatrixUniform = "uPMatrix";
    shaderObject.modelViewMatrixUniform = "uMVMatrix";

    return shaderObject;
  }

  void draw(ShaderProgram program, Matrix4 mvMatrix) {
    AngleInstancedArrays extension = ChronosGL.globalGL
        .getExtension("ANGLE_instanced_arrays"); // Vendor prefixes may apply!

    mesh.bindBuffers(program);
    mesh.bindTextures(program);

    /*
    if( program.shaderObject.colorUniform != null) {
      program.colorUniform.setValue3fv(mesh.color);
    }
    */

    // Bind the instance position data
    gl.bindBuffer(ARRAY_BUFFER, transformsBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, translations, STATIC_DRAW);
    int transLocation = program.getAttributeLocation("trans");
    gl.enableVertexAttribArray(transLocation);
    gl.vertexAttribPointer(transLocation, 3, FLOAT, false, 0, 0);
    extension.vertexAttribDivisorAngle(
        transLocation, 1); // This makes it instanced!

    // Bind the instance rotation data
    gl.bindBuffer(ARRAY_BUFFER, rotationsBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, rotations, STATIC_DRAW);
    int rotLocation = program.getAttributeLocation("rot");
    gl.enableVertexAttribArray(rotLocation);
    gl.vertexAttribPointer(rotLocation, 4, FLOAT, false, 0, 0);
    extension.vertexAttribDivisorAngle(
        rotLocation, 1); // This makes it instanced!

    // Bind the instance color data
    //gl.bindBuffer(ARRAY_BUFFER, colorBuffer);
    //gl.enableVertexAttribArray(colorLocation);
    //gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 16, 0);
    //extension.vertexAttribDivisorAngle(colorLocation, 1); // This makes it instanced!

    gl.uniformMatrix4fv(program.modelViewMatrixUniform, false, mvMatrix.array);

    if (mesh.vertexIndexBuffer == null) {
      print("arg");
      extension.drawArraysInstancedAngle(
          TRIANGLES, 0, mesh.numItems, this.count);
    } else {
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER, mesh.vertexIndexBuffer);
      extension.drawElementsInstancedAngle(TRIANGLES, mesh.numItems,
          ChronosGL.useElementIndexUint ? UNSIGNED_INT : UNSIGNED_SHORT, 0,
          this.count);
    }

    extension.vertexAttribDivisorAngle(transLocation, 0);
    extension.vertexAttribDivisorAngle(rotLocation, 0);
    gl.disableVertexAttribArray(transLocation);
    gl.disableVertexAttribArray(rotLocation);
  }
}
