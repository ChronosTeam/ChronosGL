import 'package:chronosgl/chronosgl.dart';
import 'dart:html';
import 'package:chronosgl/chronosutil.dart';

void main() {
  ChronosGL chronosGL = new ChronosGL('#webgl-canvas');
  Texture cubeTex =
      new CubeTexture("stars", "skybox_", ".png");

  Camera camera = chronosGL.getCamera();
  OrbitCamera orbit = new OrbitCamera(camera, 15.0);

  ShaderProgram programCM = chronosGL.createProgram(createCubeMapShader());
  Mesh sky = Utils.MakeSkycube(cubeTex); 
  programCM.addFollowCameraObject(sky);
  
  Material mat = new Material()..SetUniform(uTextureCubeSampler, cubeTex);
  MeshData md = Shapes.Cube(x:2.0, y:2.0, z:2.0);
  programCM.add(new Mesh(md, mat));

  
  ShaderProgram programSprites =
      chronosGL.createProgram(createPointSpritesShader());
  programSprites.add(Utils.MakeParticles(2000));

  double _lastTimeMs = 0.0;
   void animate(timeMs) {
     double elapsed = timeMs - _lastTimeMs;
     _lastTimeMs = timeMs;
     orbit.azimuth += 0.001;
     orbit.animate(elapsed);
     chronosGL.draw();
     window.animationFrame.then(animate);
   }

  Texture.loadAndInstallAllTextures(chronosGL.gl).then((dummy) {
        animate(0.0);
  });
}
