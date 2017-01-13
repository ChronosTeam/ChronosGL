part of chronosshader;

//  Gouraud shading - most action happens in vertext shader - cheaper
List<ShaderObject> createLightShaderGourad() {
  return [
    new ShaderObject("LightGouradV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vColor])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..AddUniformVars([uSpotLights])
      ..AddUniformVars([uPointLights])
      ..AddUniformVars([uDirectionalLights])
      ..AddUniformVars([uEyePosition, uColor])
      ..SetBody([
        """
    void main() {
    vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
    gl_Position = ${uPerspectiveViewMatrix} * pos;
    vec3 normal = ${uNormalMatrix} * ${aNormal};

    vec3 diffuseAccumulator;
    vec3 specularAccumulator;

    CombinedLight(pos.xyz, normal, ${uEyePosition},
                  ${uSpotLights},
                  ${uPointLights},
                  ${uDirectionalLights},
                  diffuseAccumulator, specularAccumulator);

     ${vColor} = diffuseAccumulator +
                 specularAccumulator +
                 uColor;
    }
        """
      ], prolog: [
        StdLibShader
      ]),
    new ShaderObject("LightGrouradV")
      ..AddVaryingVar(vColor)
      ..SetBodyWithMain(["gl_FragColor = vec4(${vColor}, 1.0 );"])
  ];
}

// Phong shader - most action happens in fragment shader - expensive
// Light Matrix m organization:
// m[0].xyz light direction
//
List<ShaderObject> createLightShaderBlinnPhong() {
  return [
    new ShaderObject("LightBlinnPhongV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vVertexPosition, vNormal])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightBlinnPhongF")
      ..AddVaryingVars([vVertexPosition, vNormal])
      ..AddUniformVars([uSpotLights, uPointLights, uDirectionalLights])
      ..AddUniformVars([uEyePosition, uColor])
      ..SetBodyWithMain([
        """
    vec3 diffuseAccumulator;
    vec3 specularAccumulator;

    CombinedLight(${vVertexPosition}, ${vNormal}, ${uEyePosition},
                  ${uSpotLights}, ${uPointLights}, ${uDirectionalLights},
                  diffuseAccumulator, specularAccumulator);

    gl_FragColor.rgb = diffuseAccumulator +
                       specularAccumulator +
                       uColor;
    gl_FragColor.a = 1.0;
"""
      ], prolog: [
        StdLibShader
      ])
  ];
}
