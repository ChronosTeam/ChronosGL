part of chronosshader;

//  Gouraud shading - most action happens in vertext shader - cheaper
List<ShaderObject> createLightShaderGourad() {
  return [
    new ShaderObject("LightGouradV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vColor])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..AddUniformVars([uLightDescs, uLightTypes])
      ..AddUniformVars([uEyePosition, uColor])
      ..SetBody([
        """
    void main() {
    vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
    gl_Position = ${uPerspectiveViewMatrix} * pos;
    vec3 normal = ${uNormalMatrix} * ${aNormal};

    ColorComponents acc = CombinedLight(pos.xyz, normal, ${uEyePosition},
                  ${uLightDescs},
                  ${uLightTypes});

     ${vColor} = acc.diffuse + acc.specular + uColor;
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
      ..AddUniformVars([uLightDescs, uLightTypes])
      ..AddUniformVars([uEyePosition, uColor])
      ..SetBodyWithMain([
        """
    ColorComponents acc = CombinedLight(${vVertexPosition},
                                        ${vNormal},
                                        ${uEyePosition},
                                        ${uLightDescs}, ${uLightTypes});

    gl_FragColor.rgb = acc.diffuse + acc.specular + uColor;
    gl_FragColor.a = 1.0;
"""
      ], prolog: [
        StdLibShader
      ])
  ];
}
