part of chronosshader;

//  Gouraud shading - most action happens in vertext shader - cheaper
List<ShaderObject> createLightShaderGourad() {
  return [
    new ShaderObject("LightGouradV")
      ..AddAttributeVars([aVertexPosition, aNormal, aTextureCoordinates])
      ..AddVaryingVars([vColor])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..AddUniformVars([uLightDescs, uLightTypes, uShininess])
      ..AddUniformVars([uEyePosition, uTexture])
      ..SetBody([
        """
    void main() {
    vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
    gl_Position = ${uPerspectiveViewMatrix} * pos;
    vec3 normal = ${uNormalMatrix} * ${aNormal};

    ColorComponents acc = CombinedLight(pos.xyz, normal, ${uEyePosition},
                  ${uLightDescs},
                  ${uLightTypes},
                  ${uShininess});

     ${vColor} = acc.diffuse +
                 acc.specular +
                 texture2D(${uTexture}, ${aTextureCoordinates}).rgb;
    }
        """
      ], prolog: [
        StdLibShader
      ]),
    new ShaderObject("LightGrouradV")
      ..AddVaryingVars([vColor])
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
      ..AddAttributeVars([aVertexPosition, aNormal, aTextureCoordinates])
      ..AddVaryingVars([vVertexPosition, vNormal, vTextureCoordinates])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vTextureCoordinates} = ${aTextureCoordinates};
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightBlinnPhongF")
      ..AddVaryingVars([vVertexPosition, vNormal, vTextureCoordinates])
      ..AddUniformVars([uLightDescs, uLightTypes, uShininess])
      ..AddUniformVars([uEyePosition, uTexture])
      ..SetBodyWithMain([
        """
    ColorComponents acc = CombinedLight(${vVertexPosition},
                                        ${vNormal},
                                        ${uEyePosition},
                                        ${uLightDescs},
                                        ${uLightTypes},
                                        ${uShininess});

    gl_FragColor.rgb = acc.diffuse +
                       acc.specular +
                       texture2D(${uTexture}, ${vTextureCoordinates}).rgb;
    gl_FragColor.a = 1.0;
"""
      ], prolog: [
        StdLibShader
      ])
  ];
}
