import "dart:async";
import 'dart:html' as HTML;
import 'dart:math' as Math;

import 'package:chronosgl/chronosgl.dart';
import 'package:vector_math/vector_math.dart' as VM;

import 'shader.dart';

const double musicSlowBegin = 95.0;
const double musicSlowEnd = 123.0;

const double musicMuteBegin = 159.2;
const double musicMuteEnd = 161.72;

const double musicBeatsBegin = 28.32;
const double flySpeedDivider = 3.0;

const double cameraIntroEnd = 6.0;
const double cameraTargetDistance = 0.3;

const String modelFile = "../ct_logo.obj";

const String about = """ 
Music: Life's things by Mindthings.
Browser demo for c't competition 2013 by ray@systaro.de.
Inspiration from clicktorelease.com.
""";

final List<Future<Object>> gLoadables = [];

void PositionInTorus(double time, VM.Vector3 out) {
  TorusKnotGetPos(time / 2.0, 3, 2, 20.0, 1.0, out);
}

double getTweenFactor(double begin, double end, double current) {
  double diff = end - begin;
  return (current - begin) / diff;
}

double Tween(double now) {
  double offset = musicBeatsBegin / flySpeedDivider - cameraIntroEnd;
  if (now > musicSlowBegin && now < musicSlowEnd) {
    // music is slow: slow camera down
    double diff = musicSlowEnd - musicSlowBegin;
    double drag = Math.sin(((now - musicSlowBegin) / diff) * Math.pi / 2) * 3;
    return drag + offset;
  } else if (now > musicMuteBegin && now < musicMuteEnd) {
    double diff = musicMuteEnd - musicMuteBegin;
    double drag = Math.sin(((now - musicMuteBegin) / diff) * Math.pi / 2) * 3;
    return drag + offset;
  } else {
    return offset;
  }
}

class TheNodes {
  TheNodes() {
    PositionInTorus(cameraIntroEnd, cameraIntroEndPoint);
  }

  Material material;
  Node knot;
  Node icoBig;
  Node icoSmall;
  Node ctLogo;
  Spatial camera;
  final VM.Vector3 cameraIntroStartPoint = VM.Vector3(60.0, -70.0, 150.0);
  final VM.Vector3 cameraIntroEndPoint = VM.Vector3.zero();
  bool switched = false;
  int switchCount = 0;
  VM.Vector3 _p1 = VM.Vector3.zero();
  VM.Vector3 _p2 = VM.Vector3.zero();

  // now == -1.0 signals music ended
  void advanceTimeline(double now) {
    final double tween = Tween(now);

    if (now <= 2.0) {
      // do nothing
    } else if (now < musicBeatsBegin) {
      // intro time: slowly move camera to torus
      knot.enabled = true;
      icoBig.enabled = true;
      // icoSmall.enabled = true;
      final double frac = now / 30.0; // 30.0 is close to musicBeatsBegin
      VM.Vector3.mix(cameraIntroStartPoint, cameraIntroEndPoint, frac, _p1);
      camera.setPosFromVec(_p1);
      camera.lookAt(cameraIntroEndPoint);
    } else {
      knot.enabled = true;
      icoBig.enabled = false;
      if (now > 180.0) {
        material.SetUniform(uFadeFactor, getTweenFactor(180.0, 192.0, now));
      }
      final double pos = now / flySpeedDivider - tween;
      PositionInTorus(pos, _p1);
      PositionInTorus(pos + cameraTargetDistance, _p2);
      camera.setPosFromVec(_p1);
      camera.lookAt(_p2);
    }

    final double amp = Math.sin(now / 6.0 - 1.5);
    if (amp > 0.9) {
      if (!switched) {
        if (icoSmall.enabled) {
          ctLogo.enabled = true;
          icoSmall.enabled = false;
        } else {
          ctLogo.enabled = false;
          icoSmall.enabled = true;
        }
        switched = true;
        switchCount++;
      }
    } else {
      switched = false;
    }

    if (switchCount >= 5) {
      // music is about to end
      icoSmall.enabled = false;
      ctLogo.enabled = false;
    }

    // ctLogo.enabled = true;
    final Node active = ctLogo.enabled ? ctLogo : icoSmall;
    final double pos = now / flySpeedDivider + amp + 1.1 - tween;
    PositionInTorus(pos, _p1);
    PositionInTorus(pos + cameraTargetDistance, _p2);
    active.setPosFromVec(_p1);

    //active.lookAt(_p2, camera.getUp());
    // we want the ct sign to stand upward
    // why does this change the position?
    active.rotZ(now / 1000.0);
  }
}

void main() {
  IntroduceNewShaderVar(uFadeFactor, const ShaderVarDesc("float", ""));
  final HTML.DivElement infoElement = HTML.document.getElementById("info");
  final HTML.CanvasElement canvas =
      HTML.document.getElementById("webgl-canvas");
  final HTML.AudioElement musicElement = HTML.document.getElementById("music");
  final ChronosGL cgl = ChronosGL(canvas);
  final theNodes = TheNodes();

  theNodes.camera = Spatial("camera");

  Perspective perspective = Perspective(theNodes.camera, 0.1, 1000.0);

  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);
  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);

  theNodes.material = Material("matLogo")..SetUniform(uFadeFactor, 0.0);

  // =========================================
  final Scene scene_pnvc = Scene("", MakeVertexColorShader(cgl), [perspective]);
  phase.add(scene_pnvc);

  theNodes.knot = Node(
      "knot",
      ShapeTorusKnot(scene_pnvc.program, segmentsR: 512, segmentsT: 64),
      theNodes.material)
    ..enabled = false;
  scene_pnvc.add(theNodes.knot);

  // =========================================
  final RenderProgram pnc_novertexmovement = RenderProgram("flying_logo", cgl,
      perlinNoiseVertexShader, makePerlinNoiseColorFragmentShader(false));

  final Scene scene_pnc_novertexmovement =
      Scene("", pnc_novertexmovement, [perspective]);
  phase.add(scene_pnc_novertexmovement);

  // =========================================
  final RenderProgram pncb = RenderProgram("background", cgl,
      perlinNoiseVertexShader, makePerlinNoiseColorFragmentShader(true));

  final Scene scene_pncb = Scene("", pncb, [perspective]);
  phase.add(scene_pncb);

  theNodes.icoBig = Node(
      "large_sphere",
      ShapeIcosahedron(scene_pncb.program, subdivisions: 3, scale: 500),
      theNodes.material)
    ..enabled = false;
  scene_pncb.add(theNodes.icoBig);

  // =========================================
  final RenderProgram pnc = RenderProgram("flying_deformaning_ball", cgl,
      deformingPerlinNoiseVertexShader,
      makePerlinNoiseColorFragmentShader(false));

  final Scene scene_pnc = Scene("", pnc, [perspective]);
  phase.add(scene_pnc);
  theNodes.icoSmall = Node("small_sphere",
      ShapeIcosahedron(scene_pnc.program, subdivisions: 4), theNodes.material)
    ..enabled = false;
  scene_pnc.add(theNodes.icoSmall);


  var future = LoadRaw(modelFile)
    ..then((String content) {
      GeometryBuilder gb = ImportGeometryFromWavefront(content);
      MeshData md = GeometryBuilderToMeshData("", pnc_novertexmovement, gb);
      theNodes.ctLogo = Node(md.name, md, theNodes.material)
        ..rotX(Math.pi / 2.0)
        ..rotZ(Math.pi)
        ..transform.scale(0.25, 0.25, 0.25)
        ..enabled = false;
      scene_pnc_novertexmovement.add(theNodes.ctLogo);
      //  ctLogo.invert=true;  // ???????????
    });
  gLoadables.add(future);

  double startMs = -1.0;
  void animate(num timeMs) {
    if (startMs < 0.0) startMs = timeMs;
    // double now = (timeMs - startMs) * 0.001 *  2.0;
    final double now = musicElement.currentTime;
    if (musicElement.ended || now > 192.0) {
      infoElement.text = about;
    } else {
      theNodes.advanceTimeline(now);
      infoElement.text = "${now}";
    }

    theNodes.material.ForceUniform(uTime, timeMs / 1000.0);
    phase.Draw();

    HTML.window.animationFrame.then(animate);
  }

  Future.wait(gLoadables).then((List list) {
    musicElement.play();
    infoElement.text = "";

    animate(0.0);
  });
}
