import 'package:chronosgl/chronosgl.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas',
      near: 0.1,
      far: 2520.0);
  ChronosFramebuffer fb = new ChronosFramebuffer(
        chronosGL.gl, chronosGL.perspar.width, chronosGL.perspar.height);

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 15.0, -45.0, 0.3);
  chronosGL.addAnimatable('orbitCam', orbit);
  
  RenderingPhase phase1 = new RenderingPhase(chronosGL.gl, fb, true);  
  ShaderProgram prg1 = phase1.createProgram(createSolidColorShader());
  chronosGL.addRenderPhase(phase1);


  RenderingPhase phase2 = new RenderingPhase(chronosGL.gl, null, false);
   ShaderProgram prg2 = phase2.createProgram(createSSAOShader());
   Material mat = new Material()
     ..SetUniform(uTexture2Sampler, fb.depthTexture)
     ..SetUniform(uTextureSampler, fb.colorTexture);
   prg2.add(Utils.createQuad(mat, 1));
   chronosGL.addRenderPhase(phase2);

  
  loadObj("ct_logo.obj").then((MeshData md) {
    Material mat = new Material()
      ..SetUniform(uColor, new Vector(0.9, 0.9, 0.9));
    Mesh mesh = md.createMesh(mat)
      ..rotX(3.14 / 2)
      ..rotZ(3.14);
    Node n = new Node(mesh)
      //n.invert = true;
      ..lookAt(new Vector(100.0, 0.0, -100.0));
    //n.matrix.scale(0.02);

    prg1.add(mesh);

    TextureWrapper.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
      chronosGL.run();
    });
  });
}
