import 'package:chronosgl/chronosgl.dart';

String _SphereV = """
  //vec3 u = normalize(vec3(${uModelViewMatrix}) * vec4(${aVertexPosition}, 1.0));
  vec3 u = normalize(mat3(${uModelViewMatrix}) * ${aVertexPosition});
  vec3 n = normalize(${uNormalMatrix} * ${aNormal} );
  vec3 r = reflect( u, n );
  float m = 2.0 * sqrt( r.x*r.x + r.y*r.y + (r.z+1.0)*(r.z+1.0) );
  ${vTextureCoordinates} = vec2(r.x/m + 0.5, r.y/m + 0.5);
""";
List<ShaderObject> sphereShader() {
  return [
    new ShaderObject("sphereV")
      ..AddAttributeVar(aVertexPosition)
      ..AddAttributeVar(aNormal)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..AddUniformVar(uNormalMatrix)
      ..AddVaryingVar(vTextureCoordinates)
      ..SetBodyWithMain([StdVertexBody, _SphereV]),
    new ShaderObject("sphereF")
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTextureSampler)
      ..SetBodyWithMain([
        "gl_FragColor = texture2D(${uTextureSampler}, ${vTextureCoordinates});"
      ])
  ];
}

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas',
      useFramebuffer: false, fxShader: createBlurShader2());

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0, 10.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('OrbitCam', orbit);

  Texture bubble = new ImageTexture("sphere.png");

  {
    Material mat = new Material()
      ..SetUniform(uTextureSampler, bubble)
      ..SetUniform(uColor, new Vector(0, 0, 0));
    ShaderProgram programBasic =
        chronosGL.createProgram(createTexturedShader());

    Mesh ico = chronosGL.shapes.createIcosahedron(3).createMesh(mat)
      ..setPos(-10.0, 0, 0);
    programBasic.add(ico);
  }

  {
    ShaderProgram shaderSpheres = chronosGL.createProgram(sphereShader());
    Material mat = new Material()
      ..SetUniform(uTextureSampler, bubble);
    MeshData md = chronosGL.shapes.createIcosahedron(3);
    md.generateNormalsAssumingTriangleMode();
    Mesh m = new Mesh(md, mat) 
    ..setPos(10.0, 0, 0);
    
    shaderSpheres.add(m);
  }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
