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

List<ShaderObject> createLightShaderBlinnPhongWithBumpMap() {
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
      ..AddUniformVars(
          [uLightSourceInfo0, uEyePosition, uColor, uBumpMap, uBumpScale])
      ..SetBody([
        """

      void main() {
        vec3 normal = perturbNormalArb(${uEyePosition}- ${vVertexPosition}, vNormal, dHdxy_fwd(${vTextureCoordinates}) );
        //if (normal.x != 10000000.0) normal =  vNormal;
        LightSourceInfo info =  UnpackLightSourceInfo(${uLightSourceInfo0}, 10.0);
        float diffuseFactor = 0.0;
        float specularFactor = 0.0;
        GetDiffuseAndSpecularFactors(info,
                                     ${vVertexPosition},
                                     normal,
                                     ${uEyePosition},
                                     diffuseFactor, specularFactor);

         gl_FragColor = vec4(diffuseFactor * info.diffuseColor +
                             specularFactor * info.specularColor +
                             uColor, 1.0 );
      }
      """
      ], prolog: [
        StdLibShader
      ])
  ];
}

List<ShaderObject> createLightShaderBlinnPhongWithShadow() {
  return [
    new ShaderObject("LightBlinnPhongV")
      ..AddAttributeVars([aVertexPosition, aNormal])
      ..AddVaryingVars([vVertexPosition, vNormal, vPositionFromLight0])
      ..AddUniformVars([
        uPerspectiveViewMatrix,
        uLightPerspectiveViewMatrix0,
        uModelMatrix,
        uNormalMatrix
      ])
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        ${vPositionFromLight0} = ${uLightPerspectiveViewMatrix0} * pos;
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightBlinnPhongF")
      ..AddVaryingVars([vVertexPosition, vNormal, vPositionFromLight0])
      ..AddUniformVars([uLightSourceInfo0, uShadowMap, uEyePosition])
      ..SetBody([
        """

void foo(vec4 positionFromLight, sampler2D shadowSampler,
                    float darkness, float bias) {
		vec3 depth = positionFromLight.xyz / positionFromLight.w;
		depth = 0.5 * depth + vec3(0.5);
		vec2 uv = depth.xy;

  float r = gl_FragColor.r;
	gl_FragColor =	texture2D(shadowSampler, uv);
   gl_FragColor.r += useValueButReturnZero(r);
}

      void main() {
        LightSourceInfo info = UnpackLightSourceInfo(${uLightSourceInfo0}, 10.0);
        float diffuseFactor = 0.0;
        float specularFactor = 0.0;
        GetDiffuseAndSpecularFactors(info,
                                     ${vVertexPosition},
                                     ${vNormal},
                                     ${uEyePosition},
                                     diffuseFactor, specularFactor);

        float shadow = computeShadow(${vPositionFromLight0},
                                     ${uShadowMap}, 0.4, -0.1);
        //shadow = 1.0;
        gl_FragColor.rgb = diffuseFactor * shadow * info.diffuseColor +
                             specularFactor * shadow * info.specularColor;
        //foo(${vPositionFromLight0}, ${uShadowMap}, 0.4, -0.1);
      }
      """
      ], prolog: [
        StdLibShader
      ])
  ];
}

List<ShaderObject> createShadowShader() {
  return [
    new ShaderObject("ShadowV")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vPositionFromLight0)
      ..AddUniformVar(uLightPerspectiveViewMatrix0)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        // Note we could just use gl_FragCoord.z in the Fragment shader
        // but this seems more logical
        """
        gl_Position = ${uLightPerspectiveViewMatrix0} * ${uModelMatrix} *
                      vec4(${aVertexPosition}, 1.0);
        ${vPositionFromLight0} = gl_Position;
        """
      ]),
    new ShaderObject("ShadowF")
      ..AddVaryingVar(vPositionFromLight0)
      ..SetBodyWithMain([
        """
// Note, this is equivalent to passing
//   ${vPositionFromLight0} = gl_Position;
// in the vertex shader and then computing
// float d = ${vPositionFromLight0}.z / ${vPositionFromLight0}.w * 0.5 + 0.5;
float d  = gl_FragCoord.z;

// d is value between 0.0 and 1.0
gl_FragColor = packDepth(d);
"""
      ], prolog: [
        StdLibShader
      ])
  ];
}

List<ShaderObject> createCopyShader() {
  return [
    new ShaderObject("copyV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(
          [NullVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("copyF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTexture)
      ..SetBodyWithMain([
        "vec2 v = ${vTextureCoordinates}.xy;",
        "gl_FragColor.rgb = texture2D (${uTexture}, v).rgb;"
      ])
  ];
}

List<ShaderObject> createCopyShaderForShadow() {
  return [
    new ShaderObject("copyV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(
          [NullVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("copyF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTexture)
      ..SetBodyWithMain([
        """
vec2 uv = ${vTextureCoordinates}.xy;
vec4 color = texture2D(${uTexture}, uv);
// Commenting the next line should not make any difference
//color = packDepth(unpackDepth(color));
gl_FragColor = color;

// necessary?
//gl_FragColor.r = unpackDepth(color) * 0.4;
//gl_FragColor.g = 0.0;
//gl_FragColor.b = 0.0;
//gl_FragColor.a = 1.0;
"""
      ], prolog: [
        StdLibShader
      ])
  ];
}
