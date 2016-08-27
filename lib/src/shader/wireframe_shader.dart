part of chronosshader;

//  GL_OES_standard_derivatives 
//  dFdx()
//  dFdy()  
//  fwidth()

String _WireframeF = """
#extension GL_OES_standard_derivatives : enable


// the 3 vertices of a Face3 (w == 0) have the centers:
// (1, 0, 0, 0)) 
// (0, 1, 0, 0)
// (0, 0, 1, 0)
float edgeFactorFace3(vec3 center) {
    vec3 d = fwidth(center);
    vec3 a3 = smoothstep(vec3(0.0), d * 1.5, center);
    return min(min(a3.x, a3.y), a3.z);
}

// the 4 vertices of a Face4 (w == 1) have the centers:
// (1, 0, 0, 1) 
// (1, 1, 0, 1)
// (0, 1, 0, 1)
// (0, 0, 0, 1)
float edgeFactorFace4(vec2 center) {
    vec2 d = fwidth(center);
    vec2 a2 = smoothstep(vec2(0.0), d * 1.5, center);
    return min(a2.x, a2.y);
}

void main() {
    vec4 color;
    if (${vCenter}.w == 0.0) {
        color = mix(${uColorAlpha}, ${uColorAlpha2}, 
                        edgeFactorFace3(${vCenter}.xyz));
    } else {
        color = mix(${uColorAlpha}, ${uColorAlpha2},    
                    min(edgeFactorFace4(${vCenter}.xy), 
                        edgeFactorFace4(1.0 - ${vCenter}.xy)));
    }
    gl_FragColor = color;
}
""";

List<ShaderObject> createWireframeShader() {
  return [
    new ShaderObject("WireframeV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aCenter)
      ..AddVaryingVar(vCenter)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBodyWithMain([StdVertexBody, "${vCenter} = ${aCenter};"]),
    new ShaderObject("WireframeF")
      ..AddVaryingVar(vCenter)
      ..AddUniformVar(uColorAlpha)
      ..AddUniformVar(uColorAlpha2)
      ..SetBody([_WireframeF])
  ];
}
