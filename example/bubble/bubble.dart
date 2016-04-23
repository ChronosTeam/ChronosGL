import 'package:chronosgl/chronosgl.dart';

// https://cycling74.com/forums/topic/shader-help-recreating-gl_sphere_map/
// https://www.opengl.org/wiki/Mathematics_of_glTexGen

String _SphereV = """
  vec3 u = normalize(vec3(${uModelViewMatrix} * vec4(${aVertexPosition}, 1.0)));
  vec3 n = normalize(${uNormalMatrix} * ${aNormal} );
  vec3 r = reflect( u, n );
  r.z += 1.0;
  float m = 2.0 * length(r);
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
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 5.0, 10.0);
  // Note, moving the camera does not have an effect
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.01;
  });
  chronosGL.addAnimatable('OrbitCam', orbit);

  Texture bubble = new ImageTexture("sphere.png");

  ShaderProgram shaderSpheres = chronosGL.createProgram(sphereShader());
  Material mat = new Material()..SetUniform(uTextureSampler, bubble);
  MeshData md = Shapes.Icosahedron(3);
  //md.generateNormalsAssumingTriangleMode();
  md.generateRadialNormals(new Vector(0.0, 0.0, 0.0));
  Mesh m = new Mesh(md, mat)..setPos(0.0, 0, 0);

  shaderSpheres.add(m);

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
