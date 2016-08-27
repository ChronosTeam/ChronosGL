part of chronosshader;

const String StdVertexBody =
    "gl_Position = ${uPerspectiveViewMatrix} * ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);";

const String NullVertexBody = "gl_Position = vec4(${aVertexPosition}, 1.0);";

List<ShaderObject> createTexturedShader() {
  return [
    new ShaderObject("Textured")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain(
          [StdVertexBody, "${vTextureCoordinates} = ${aTextureCoordinates};"]),
    new ShaderObject("TexturedF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uColor)
      ..AddUniformVar(uTextureSampler)
      ..SetBodyWithMain([
        "gl_FragColor = texture2D(${uTextureSampler}, ${vTextureCoordinates}) + vec4( ${uColor}, 0.0 );"
      ])
  ];
}

List<ShaderObject> createSolidColorShader() {
  return [
    new ShaderObject("SolidColor")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([StdVertexBody]),
    new ShaderObject("SolidColorF")
      ..AddUniformVar(uColor)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${uColor}, 1.0 );"])
  ];
}

List<ShaderObject> createColorShader() {
  return [
    new ShaderObject("Color")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddAttributeVar(aColors)
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain([StdVertexBody, "${vColors} = ${aColors};"]),
    new ShaderObject("ColorF")
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${vColors}, 1.0 );"])
  ];
}

//  Gouraud shading - most action happens in vertext shader - cheaper

// Phong shader - most action happens in fragment shader - expensive
// Light Matrix m organization:
// m[0].xyz light direction
//
List<ShaderObject> createLightShaderBlinnPhong() {
  return [
    new ShaderObject("Light")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddVaryingVar(vVertexPosition)
      ..AddVaryingVar(vNormal)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddUniformVar(uNormalMatrix)
      ..SetBodyWithMain([
        """
        vec4 pos = ${uModelMatrix} * vec4(${aVertexPosition}, 1.0);
        gl_Position = ${uPerspectiveViewMatrix} * pos;
        ${vVertexPosition} = pos.xyz;
        ${vNormal} = (${uModelMatrix} * vec4(${aNormal}, 0.0)).xyz;
        // ${vNormal} = ${uNormalMatrix} * ${aNormal};
        """
      ]),
    new ShaderObject("LightF")
      ..AddVaryingVar(vNormal)
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uLightSourceInfo0)
      ..AddUniformVar(uEyePosition)
      ..SetBody([
        """

      float GetDiffuse(vec3 lightDir, vec3 normal) {
        return max(dot(normal, lightDir), 0.0);
      }

      float GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {
          vec3 angleW = normalize(viewDir + lightDir);
          float specComp = max(0., dot(normal, angleW));
          return pow(specComp, max(1.0, glossiness));
      }

      void main() {
        // diffuse
        float type = ${uLightSourceInfo0}[0].a;
        vec3 diffuseColor = ${uLightSourceInfo0}[2].xyz;
        vec3 specularColor = ${uLightSourceInfo0}[3].xyz;
        float glossiness = 10.0;

        float diffuseFactor = 0.0;
        float specularFactor = 0.0;
        if (type == 5.0) {
          // ================= directional light
          vec3 lightDir = normalize(${uLightSourceInfo0}[1].xyz);
          diffuseFactor = GetDiffuse(lightDir, ${vNormal});
          specularFactor = GetSpecular(lightDir,
                normalize(${uEyePosition} - vVertexPosition),
                ${vNormal}, glossiness);
        } else if (type == 3.0) {
          // ================= point light
          vec3 lightLoc = ${uLightSourceInfo0}[0].xyz;
          vec3 lightDir = lightLoc - ${vVertexPosition};
          float range =  ${uLightSourceInfo0}[1].a;
          float attenuation = max(0.0, 1.0 - length(lightDir) / range);

          diffuseFactor = attenuation * GetDiffuse(normalize(lightDir), ${vNormal});
          specularFactor = attenuation * GetSpecular(
               lightDir, normalize(${uEyePosition} - vVertexPosition),
               ${vNormal}, glossiness);
        } else if (type == 2.0) {
          // ================= spot light
          vec3 lightLoc = ${uLightSourceInfo0}[0].xyz;
          vec3 lampDir = normalize(lightLoc - ${vVertexPosition});
          vec3 lightDir = normalize(${uLightSourceInfo0}[1].xyz);
          float spotCutoff = ${uLightSourceInfo0}[2].a;
          float cosAngle = max(0., dot(lightDir, lampDir));
	        if (cosAngle < spotCutoff) {
            diffuseFactor = 0.0;
            specularFactor = 0.0;
          } else {
            float spotFocus = ${uLightSourceInfo0}[3].a;
            float range =  ${uLightSourceInfo0}[1].a;
            cosAngle = max(0.0, pow(cosAngle, spotFocus));
	          float attenuation = max(0.0, 1.0 - length(lampDir) / range) * cosAngle;
            diffuseFactor = attenuation * GetDiffuse(lightDir, ${vNormal});
            specularFactor = attenuation * GetSpecular(lightDir,
                normalize(${uEyePosition} - vVertexPosition), ${vNormal}, glossiness);
          }
        }

         gl_FragColor = vec4(diffuseFactor * diffuseColor + specularFactor * specularColor, 1.0 );
      }
      """
      ])
  ];
}

List<ShaderObject> createNormal2ColorShader() {
  return [
    new ShaderObject("Normal2Color")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddVaryingVar(vColors)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        StdVertexBody,
        "vColors = normalize(${aNormal} / 2.0 + vec3(0.5) );"
      ]),
    new ShaderObject("Normal2ColorF")
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain(["gl_FragColor = vec4( ${vColors}, 1.0 );"])
  ];
}

// this shader works well for cube shapes, for other shapes it might be better to use the normals attribute to sample the cube texture
List<ShaderObject> createCubeMapShader() {
  return [
    new ShaderObject("CubeMap")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([
        StdVertexBody,
        "${vVertexPosition} = normalize(${aVertexPosition});"
      ]),
    new ShaderObject("CubeMapF")
      ..AddVaryingVar(vVertexPosition)
      ..AddUniformVar(uTextureCubeSampler)
      ..SetBodyWithMain([
        "gl_FragColor = textureCube( ${uTextureCubeSampler}, ${vVertexPosition} );"
      ]),
  ];
}

List<ShaderObject> createPointSpritesShader() {
  return [
    new ShaderObject("PointSprites")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddUniformVar(uPointSize)
      ..SetBodyWithMain(
          [StdVertexBody, "gl_PointSize = ${uPointSize}/gl_Position.z;"]),
    new ShaderObject("PointSpritesF")
      ..AddUniformVar(uTextureSampler)
      ..SetBodyWithMain(
          ["gl_FragColor = texture2D( ${uTextureSampler},  gl_PointCoord);"])
  ];
}
