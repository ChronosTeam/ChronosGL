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

const double cameraIntroEndPointU = 3.0;

const String modelFile = "../ct_logo.obj";

const String about = """ 
Music: Life's things by Mindthings.
Browser demo for c't competition 2013 by ray@systaro.de.
Inspiration from clicktorelease.com.
""";

final List<Future<Object>> gLoadables = [];

void PositionInTorus(double time, VM.Vector3 out) {
  TorusKnotGetPos(3.05 + time / 10.0, 3, 2, 20.0, 1.0, out);
}

VM.Vector3 up = VM.Vector3(0.0, 1.0, 0.0);

double getTweenFactor(double begin, double end, double current) {
  double diff = end - begin;
  return (current - begin) / diff;
}

class TheNodes {
  TheNodes() {
    PositionInTorus(0.0, cameraIntroEndPoint);
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
    /*
    icoSmall.enabled = true;
    PositionInTorus(now * 2.0, p1);
    icoSmall.setPosFromVec(p1);
    */
    double distance = 0.5;
    if (now <= 2.0) {
      // do nothing

    } else if (now < musicBeatsBegin - 2.0) {
      knot.enabled = true;
      icoBig.enabled = true;
      icoSmall.enabled = true;
      double frac = now / musicBeatsBegin;
      //if (frac > 1.0) frac = 1.0;
      VM.Vector3.mix(cameraIntroStartPoint, cameraIntroEndPoint, frac, _p1);
      PositionInTorus(0.0 + distance, _p2);
      //camera.lookAt(cameraIntroEndPoint);

      icoSmall.setPosFromVec(_p2);

      //PositionInTorus(0.0 - 0.5, _p1);
      camera.setPosFromVec(_p1);
      camera.lookAt(_p2, up);
    } else {
      knot.enabled = true;
      icoBig.enabled = false;
      icoSmall.enabled = true;
      if (now > 180.0) {
        material.SetUniform(uFadeFactor, getTweenFactor(180.0, 192.0, now));
      }
      // now -= musicBeatsBegin;
      PositionInTorus(now, _p1);
      PositionInTorus(now + distance, _p2);
      camera.setPosFromVec(_p1);
      camera.lookAt(_p2);
      icoSmall.setPosFromVec(_p2);
    }

    /*
    double amp = Math.sin(now / 6.0 - 1.5);
    if (amp > 0.9 && !music.ended) {
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
    */
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

  theNodes.camera = TorusKnotCamera();

  Perspective perspective = Perspective(theNodes.camera, 0.1, 1000.0);

  final width = canvas.clientWidth;
  final height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  perspective.AdjustAspect(width, height);
  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective);

  theNodes.material = Material("matLogo")..SetUniform(uFadeFactor, 0.5);

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

  theNodes.icoBig = Node(
      "sphere",
      ShapeIcosahedron(scene_pncb.program, subdivisions: 3, scale: 500),
      theNodes.material)
    ..enabled = false;
  scene_pncb.add(theNodes.icoBig);

  // =========================================
  final RenderProgram pnc = RenderProgram("basic", cgl, perlinNoiseVertexShader,
      makePerlinNoiseColorFragmentShader(false));

  final Scene scene_pnc = Scene("", pnc, [perspective]);
  phase.add(scene_pnc);
  theNodes.icoSmall = Node(
      "sphere",
      ShapeIcosahedron(scene_pnc.program, subdivisions: 4, scale: 0.1),
      theNodes.material)
    ..enabled = false;
  scene_pnc.add(theNodes.icoSmall);

  // =========================================
  /*
    ctLogo.invert=true;  // ???????????

  */

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
    });
  gLoadables.add(future);

  double startMs = -1.0;
  void animate(num timeMs) {
    if (startMs < 0.0) startMs = timeMs;
    double now = (timeMs - startMs) * 0.001 + 175.0;
    // double now = theNodes.music.currentTime;
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
