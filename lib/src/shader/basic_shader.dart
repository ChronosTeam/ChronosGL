part of chronosshader;

//  Gouraud shading - most action happens in vertext shader - cheaper
List<ShaderObject> createLightShaderGourad() {
  return [
    new ShaderObject("LightGouradV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vColor])
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uNormalMatrix])
      ..AddUniformVar(uLightSourceInfo0)
      ..AddUniformVar(uEyePosition)
      ..AddUniformVar(uColor)
      ..SetBody([
        """
        void main() {
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        vec3 normal = ${uNormalMatrix} * ${aNormal};

        LightSourceInfo info =  UnpackLightSourceInfo(${uLightSourceInfo0}, 10.0);
        float diffuseFactor = 0.0;
        float specularFactor = 0.0;
        GetDiffuseAndSpecularFactors(info, pos.xyz, normal,
                                     ${uEyePosition},
                                     diffuseFactor, specularFactor);

         ${vColor} = diffuseFactor * info.diffuseColor +
                      specularFactor * info.specularColor +
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
      ..AddUniformVars([uLightSourceInfo0, uEyePosition, uColor])
      ..SetBodyWithMain([
        """
LightSourceInfo info =  UnpackLightSourceInfo(${uLightSourceInfo0}, 10.0);

float diffuseFactor = 0.0;
float specularFactor = 0.0;

GetDiffuseAndSpecularFactors(info,
                             ${vVertexPosition},
                             ${vNormal},
                             ${uEyePosition},
                              diffuseFactor, specularFactor);

gl_FragColor = vec4(diffuseFactor * info.diffuseColor +
                    specularFactor * info.specularColor +
                    uColor,
                    1.0);

"""
      ], prolog: [
        StdLibShader
      ])
  ];
}

