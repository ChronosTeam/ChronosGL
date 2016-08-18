import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html';

import 'package:vector_math/vector_math.dart' as VM;



// r,g,b,a  are in the range of [0, 255]
// float = r / (256^4) + g / (256^3) + b / 256^2 + a / 256^1
// float is assumed to be in [0, 1]
// Not that the conversion from bytes to floats introduces a 1/256 factor
// From http://spidergl.org/example.php?id=6
String packFloatToRGBA = """
vec4 pack_depth(float depth) {
	const vec4 bit_shift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
	const vec4 bit_mask  = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
	vec4 res = fract(depth * bit_shift);
	res -= res.xxyz * bit_mask;
	return res;
}
""";

String unpackRGBAToFloat = """
float unpack_depth(vec4 rgba_depth) {
	const vec4 bit_shift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
	float depth = dot(rgba_depth, bit_shift);
	return depth;
}
""";

List<ShaderObject> createShadowShader() {
  return [
    new ShaderObject("ShadowV")
      ..AddAttributeVar(aVertexPosition)
      ..AddUniformVar(uPerspectiveMatrix)
      ..AddUniformVar(uModelViewMatrix)
      ..SetBodyWithMain(
          [StdVertexBody]),
    new ShaderObject("ShadowF")
      ..SetBody([packFloatToRGBA,
                 "void main(void) { gl_FragColor = pack_depth(gl_FragCoord.z); }"])
  ];
}

void main() {
  StatsFps fps = new StatsFps(document.getElementById("stats"), "blue", "gray");
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas',
      useFramebuffer: false, fxShader: createBlurShader2());

  chronosGL.addAnimateCallback('fps', (double elapsed, double time) {
    fps.UpdateFrameCount(time);
  });

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 25.0, 10.0);
  chronosGL.addAnimateCallback('rotateCamera', (double elapsed, double time) {
    orbit.azimuth += 0.001;
  });
  chronosGL.addAnimatable('OrbitCam', orbit);


  VM.Vector3 posLight1 = new VM.Vector3(0.0, 0.0, 0.0);
  VM.Vector3 colWhite = new VM.Vector3(1.0, 1.0, 1.0);
  VM.Vector3 colRed = new VM.Vector3(1.0, 0.0, 0.0);
  chronosGL.lights.add(new Light.Point(posLight1, colRed, colWhite, 20.0));


  Texture solid = new CanvasTexture.SolidColor("red-solid", "red");
  //ShaderProgram program = chronosGL.createProgram(createTexturedShader());
  ShaderProgram program = chronosGL.createProgram(createShadowShader());
  VM.Matrix4 projection = VM.makeOrthographicMatrix(-12.0, 12.0, -12.0, 12.0, -12.0, 12.0);

  VM.Matrix4 model = new VM.Matrix4.identity();

  final Material mat1 = new Material()
    ..SetUniform(uTextureSampler, solid)
    ..SetUniform(uColor, new VM.Vector3(0.0, 0.0, 1.0));

  final Material mat2 = new Material()
    ..SetUniform(uTextureSampler, solid)
    ..SetUniform(uColor, new VM.Vector3(1.0, 0.0, 0.0));

  final Material mat3 = new Material()
    ..SetUniform(uTextureSampler, solid)
    ..SetUniform(uColor, new VM.Vector3(0.8, 0.8, 0.8));

  {
    Mesh ico = new Mesh(Shapes.Icosahedron(3), mat1)..setPos(0.0, 0.0, 0.0);
    program.add(ico);
  }
  {
    Mesh cube = new Mesh(Shapes.Cube(), mat2)
      ..setPos(-5.0, 0.0, -5.0)
      ..name = "cube";
    program.add(cube);
  }

  {
    Mesh cyl = new Mesh(Shapes.Cylinder(3.0, 6.0, 2.0, 32), mat2)
      ..setPos(5.0, 0.0, -5.0);
    program.add(cyl);
  }

  {
    Mesh torus = new Mesh(Shapes.TorusKnot(radius: 1.0, tube: 0.4), mat2)
      ..setPos(5.0, 0.0, 5.0);
    program.add(torus);
  }
  {
    Mesh cube = new Mesh(Shapes.Cube(x: 20.0, y: 0.1, z: 20.0), mat3)
      ..setPos(0.0, -10.0, 0.0)
      ..name = "cube";
    program.add(cube);
  }

  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
    chronosGL.run();
  });
}
