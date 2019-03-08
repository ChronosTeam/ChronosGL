

import "dart:async";
import 'dart:html' as HTML;
import 'dart:math' as Math;

import 'package:chronosgl/chronosgl.dart';
// import 'package:vector_math/vector_math.dart' as VM;

import 'shader.dart';

const double musicSlowBegin = 95.0;
const double musicSlowEnd = 123.0;

const double musicMuteBegin = 159.2;
const double musicMuteEnd = 161.72;

const double musicBeatsBegin = 28.32;
const double flySpeedDivider = 3.0;
const double cameraIntroEndPointTime = 6.0;

const String modelFile = "../ct_logo.obj";

const String about = """ 
Music: Life's things by Mindthings.
Browser demo for c't competition 2013 by ray@systaro.de.
Inspiration from clicktorelease.com.";
""";

/*
class TorusKnotCamera extends Animatable
{

  Camera camera;
  ShaderProgram pnvc;
  Node activeNode;
  Uniform fadeFactor;

  Vector p1 = new Vector();
  Vector p2 = new Vector();
  Vector cameraPos = new Vector();

  double time=0.0;
  double tween;
  bool switched=false;
  int switchCount=0;

  TorusKnotCamera( this.camera, this.pnvc) {
    activeNode = ctLogo; // currently the first node will be switched out, so the first visible node will be the littleBall
    tween=musicBeatsBegin/flySpeedDivider-cameraIntroEndPointTime;

    fadeFactor = pnvc.getUniform( "fadeFactor");
  }

  double getTweenFactor( double begin, double end, double current)
  {
    double diff = end-begin;
    return (current-begin)/diff;
  }

  void animate( double elapsed)
  {
    if( !music.ended) {
      time = music.currentTime;
    } else {
      time += elapsed/1000;
    }

    //html.query('#topLeftDiv').text = "${time}";

    if( time < musicBeatsBegin) {
       // intro time: slowly move camera to torus
      if( time > 2.0) {
        // intro time: black until music starts
        torus.enabled = true;
        bigBall.enabled = true;
      }
      cameraPos.set(cameraIntroStartPoint);
      cameraPos.lerp( cameraIntroEndPoint, time/30);
      camera.setPosFromVec(cameraPos);
      camera.lookAt(cameraIntroEndPoint);
      //camera.moveForward(0.09*elapsed/16.7);
    } else if( music.ended) {
      // music has stoped: stop moving and show c't logo
      html.query('#topLeftDiv').text = "Music: Life's things by Mindthings. Browser demo for c't competition 2013 by ray@systaro.de. Inspiration from clicktorelease.com.";
      //littleBall.enabled = false;
      //ctLogo.enabled = true;
      //setObjectPosAlongTorus( (time/flySpeedDivider)+0.09, ctLogo);
      //camera.moveForward(0.1*elapsed/16.7);
    } else {
      // normal time: move camera and activeNode
      double pos = time/flySpeedDivider;
      if( time > musicSlowBegin && time < musicSlowEnd) { // music is slow: slow camera down
        double diff = musicSlowEnd-musicSlowBegin;
        double drag = Math.sin(((time-musicSlowBegin)/diff)*Math.PI/2)*3;
        tween = (musicBeatsBegin/flySpeedDivider-cameraIntroEndPointTime) + drag;
      } else if ( time > musicMuteBegin && time < musicMuteEnd ) {
        double diff = musicMuteEnd-musicMuteBegin;
        double drag = Math.sin(((time-musicMuteBegin)/diff)*Math.PI/2)*3;
        tween = (musicBeatsBegin/flySpeedDivider-cameraIntroEndPointTime) + drag;
      }

      if( time> 180)
      {
        // fade to white
        fadeFactor.setValue(getTweenFactor(180.0, 192.0, time));
      }
      setObjectPosAlongTorus( pos-tween, camera);
      bigBall.enabled = false;
    }

    double amp = Math.sin(time/6-1.5);
    if( amp > 0.9 && !music.ended) {
      if( !switched) {
        if( activeNode == littleBall)  {
          activeNode = ctLogo;
          littleBall.enabled = false;
        } else {
          activeNode = littleBall;
          ctLogo.enabled = false;
        }
        activeNode.enabled = true;
        switched = true;
        switchCount++;
      }
    } else {
      switched = false;
    }

    if( switchCount >= 5) {
      // music is about to end
      littleBall.enabled = false;
      ctLogo.enabled = false;
    }
    double pos = (time/flySpeedDivider)+amp+1.1;
    //ballPos = (time/flySpeed)+0.5;
    setObjectPosAlongTorus( pos-tween, activeNode); // -1.5 to make the ball apear a bit later
    if( activeNode.children.length != 0)
      activeNode.children.first.rotZ(elapsed/1000);
  }

  void setObjectPosAlongTorus( double pos, Spatial node) {
    getTorusKnotPos( pos, q, p, radius, 1.0, p1 );
    getTorusKnotPos( pos+0.3, q, p, radius, 1.0, p2 );
    node.setPosFromVec(p1);
    if( node == camera)
      node.lookAt(p2); // let the camera use the z axis as its up vector.
    else
      node.lookAt(p2, camera.getUp());
  }
}

Camera camera;
TextureCache textureCache;
TextureWrapper blockTex;
html.AudioElement music;
Mesh torus;
Mesh littleBall;
Mesh bigBall;
Node ctLogo;

int p = 2;
int q = 3;
double radius=20.0;

Vector cameraIntroStartPoint = new Vector(60.0, -70.0, 150.0);
Vector cameraIntroEndPoint = new Vector();
*/
final List<Future<Object>> gLoadables = [];

void main() {
  IntroduceNewShaderVar(uFadeFactor, const ShaderVarDesc("float", ""));

  final HTML.CanvasElement canvas =
      HTML.document.getElementById("webgl-canvas");
  final HTML.AudioElement music = HTML.document.getElementById("music");
  final ChronosGL cgl = ChronosGL(canvas);
  // final RenderProgram pnvc = MakePerlinNoiseShader(cgl);

  OrbitCamera orbit = OrbitCamera(10.0, 0.0, 0.0, canvas);
  Perspective perspective = Perspective(orbit, 0.1, 1000.0);

  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);
  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);

  final Material material = Material("matLogo");
  // =========================================

  final Scene scene_pnvc  =
      Scene("", MakeVertexColorShader(cgl), [perspective]);
  phase.add(scene_pnvc);

  Node knot = Node(
      "knot",
      ShapeTorusKnot(scene_pnvc.program, segmentsR:512, segmentsT:64),
      material)
    ..setPos(0.0, 0.0, 0.0);
  scene_pnvc.add(knot);

  // =========================================
  final RenderProgram pnc_novertexmovement = RenderProgram("basic", cgl,
      perlinNoiseVertexShader, makePerlinNoiseColorFragmentShader(false));

  final Scene scene_pnc_novertexmovement =
      Scene("", pnc_novertexmovement, [perspective]);
  phase.add(scene_pnc_novertexmovement);

  // =========================================
  final RenderProgram pncb = RenderProgram("basic", cgl,
      perlinNoiseVertexShader, makePerlinNoiseColorFragmentShader(true));

  final Scene scene_pncb = Scene("", pncb, [perspective]);
  phase.add(scene_pncb);

  Node icoBig = Node(
      "sphere",
      ShapeIcosahedron(scene_pncb.program, subdivisions: 3, scale: 500),
      material)
    ..setPos(0.0, 0.0, 0.0);
  scene_pncb.add(icoBig);

  // =========================================
  final RenderProgram pnc = RenderProgram("basic", cgl, perlinNoiseVertexShader,
      makePerlinNoiseColorFragmentShader(false));

  final Scene scene_pnc = Scene("", pnc, [perspective]);
  phase.add(scene_pnc);
  Node icoSmall = Node(
      "sphere",
      ShapeIcosahedron(scene_pnc.program, subdivisions: 4), material)
    ..setPos(0.0, 0.0, 0.0);
  scene_pnc.add(icoSmall);

  // =========================================
  music.play();
  /*
  chronosGL = new ChronosGL('#webgl-canvas', false);
  camera = chronosGL.getCamera();
  music = html.query("#music");
  camera.setPosFromVec( cameraIntroStartPoint);

  getTorusKnotPos( cameraIntroEndPointTime, q, p, radius, 1.0, cameraIntroEndPoint );


  // TORUS KNOT MESH
  ShaderProgram pnvc = getPerlinNoiseVertexColorShader().createProgram('perlinNoiseVertexColors');
  torus = chronosGL.getUtils().createTorusKnot(segmentsR:512, segmentsT:64).createMesh();
  torus.enabled = false;
  pnvc.add(torus);

  MeshData2 ico = new Icosahedron(4);
  // LITTLE WHITE BALL MESH INSIDE TORUS
  ShaderProgram pnc = getPerlinNoiseColorShader().createProgram('perlin_noise');
  littleBall = ico.createMesh();
  littleBall.enabled = false;
  pnc.add( littleBall);

  // BIG BLACK BALL MESH OUTSIDE TORUS
  ShaderProgram pncBlack = getPerlinNoiseColorShader(true).createProgram('perlin_noise_black');


  bigBall = ico.createMesh();
  bigBall.matrix.scale(500.0);
  bigBall.enabled = false;
  pncBlack.add( bigBall);

  //html.query("#sample_container_id").onMouseUp.listen((html.MouseEvent event){    m.rotX(event.client.x/1000);      m.rotY(event.client.y/1000);    });
  // add mouse pointer influences the pitch and yaw a bit

  loadObj( "ct_logo.obj").then((MeshData2 md) {

    //ProgramNormal pnc = ShaderLib.perlinNoiseColors.getProgram( raysWebGL, 'perlin_noise');
    Mesh ctLogoMesh = md.createMesh();
    ctLogoMesh.rotX(Math.PI/2);
    ctLogoMesh.rotZ(Math.PI);
    ctLogoMesh.matrix.scale(0.25);
    ctLogo = new Node(ctLogoMesh);
    ctLogo.enabled=false;
    ctLogo.invert=true;

    ShaderObject so = getPerlinNoiseColorShader();
    so.vertexShader = so.vertexShader.replaceAll("+ f * normal", "");
    ShaderProgram pnc_novertexmovement = so.createProgram('pnc_novertexmovement');
    pnc_novertexmovement.add( ctLogo);
    TorusKnotCamera tkc = new TorusKnotCamera(camera, pnvc);
    chronosGL.addAnimatable('tkc', tkc);
    html.query('#webgl-canvas').onDoubleClick.listen((html.MouseEvent e) { html.query('#webgl-canvas').requestFullscreen();});
    music.play();
    html.query('#topLeftDiv').text = "";
    chronosGL.run( 0.0);
  });
*/

  var future = LoadRaw(modelFile)
    ..then((String content) {
      GeometryBuilder gb = ImportGeometryFromWavefront(content);
      MeshData md = GeometryBuilderToMeshData("", pnc_novertexmovement, gb);
      Node ctLogo = Node(md.name, md, material)
        ..rotX(Math.pi / 2.0)
        ..rotZ(Math.pi);
      ctLogo.transform.scale(0.25, 0.25, 0.25);
      scene_pnc_novertexmovement.add(ctLogo);
    });
  gLoadables.add(future);

  double _lastTimeMs = 0.0;
  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;

    orbit.azimuth += 0.01;
    orbit.animate(elapsed);
    material.ForceUniform(uTime, timeMs / 1000.0);
    phase.Draw();
    HTML.window.animationFrame.then(animate);
  }

  Future.wait(gLoadables).then((List list) {
    animate(0.0);
  });
}
