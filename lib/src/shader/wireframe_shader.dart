part of chronosshader;

// http://codeflow.org/entries/2012/aug/02/easy-wireframe-display-with-barycentric-coordinates/

const String _WireframeF = """
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
    float q;
    if (${vCenter}.w == 0.0) {
        q = edgeFactorFace3(${vCenter}.xyz);
    } else {
        q = min(edgeFactorFace4(${vCenter}.xy),
                edgeFactorFace4(1.0 - ${vCenter}.xy));
    }
    ${oFragColor} = mix(${uColorAlpha}, ${uColorAlpha2}, q);
}
""";

final ShaderObject wireframeVertexShader = ShaderObject("WireframeV")
  ..AddAttributeVars([aPosition, aCenter])
  ..AddVaryingVars([vCenter])
  ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix])
  ..SetBodyWithMain([StdVertexBody, "${vCenter} = ${aCenter};"]);

final ShaderObject wireframeFragmentShader = ShaderObject("WireframeF")
  ..AddVaryingVars([vCenter])
  ..AddUniformVars([uColorAlpha, uColorAlpha2])
  ..SetBody([_WireframeF]);
