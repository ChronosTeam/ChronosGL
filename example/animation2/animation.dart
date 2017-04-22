import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:web_gl' as WEBGL;

import 'dart:async';
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

String meshFile = "../asset/knight/knight.js";

String skinningVertexShader = """

mat4 adjustMatrix() {
   mat4 res = aBoneWeight.x * uBoneMatrices[int(aBoneIndex.x)]
            + aBoneWeight.y * uBoneMatrices[int(aBoneIndex.y)]
            + aBoneWeight.z * uBoneMatrices[int(aBoneIndex.z)]
            + aBoneWeight.w * uBoneMatrices[int(aBoneIndex.w)];
   return res;
}

void main() {
   mat4 skinMat = uModelMatrix * adjustMatrix();
   vec4 pos = skinMat * vec4(aVertexPosition, 1.0);
   // vVertexPosition = pos.xyz;
   // This is not quite accurate
   //${vNormal} = normalize(mat3(skinMat) * aNormal);
   gl_Position = uPerspectiveViewMatrix * pos;


   ${vColor} = vec3( sin(${aVertexPosition}.x)/2.0+0.5,
                      cos(${aVertexPosition}.y)/2.0+0.5,
                      sin(${aVertexPosition}.z)/2.0+0.5);
   //vTextureCoordinates = aTextureCoordinates;
}

""";

String skinningFragmentShader = """
void main() {
  ${oFragColor}.rgb = ${vColor};
}
""";

List<ShaderObject> createAnimationShader() {
  return [
    new ShaderObject("AnimationV")
      ..AddAttributeVars([aVertexPosition, aBoneIndex, aBoneWeight])
      //..AddAttributeVar(aNormal)
      //..AddAttributeVar(aTextureCoordinates)
      ..AddVaryingVars([vColor])
      //..AddVaryingVar(vTextureCoordinates)
      //..AddVaryingVar(vNormal)
      ..AddUniformVars([
        uPerspectiveViewMatrix,
        uModelMatrix,
        uBoneMatrices,
        uAnimationTable,
        uTime
      ])
      ..SetBody([skinningVertexShader]),
    new ShaderObject("AnimationV")
      ..AddVaryingVars([vColor])
      //..AddVaryingVar(vTextureCoordinates)
      //..AddUniformVar(uTextureSampler)
      ..SetBody([skinningFragmentShader]),
  ];
}

final double kAnimTimeStep = 0.0333;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(20.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  RenderPhase phase = new RenderPhase("main", chronosGL);
  RenderProgram prgSimple = phase.createProgram(createDemoShader());
  RenderProgram prgAnim = phase.createProgram(createAnimationShader());

  final RenderProgram prgBone = phase.createProgram(createSolidColorShader());
  final Material matWire = new Material("wire")
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));

  BoneVisualizer boneVisualizer;
  TypedTexture animationTable;
  List<double> animationSteps;

  Material mat = new Material("mat");
  VM.Matrix4 identity = new VM.Matrix4.identity();
  Float32List matrices = new Float32List(16 * 128);
  for (int i = 0; i < matrices.length; ++i) {
    matrices[i] = identity[i % 16];
  }
  mat.SetUniform(uBoneMatrices, matrices);

  void resolutionChange(HTML.Event ev) {
    int w = canvas.clientWidth;
    int h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    print("size change $w $h");
    perspective.AdjustAspect(w, h);
    phase.viewPortW = w;
    phase.viewPortH = h;
  }

  resolutionChange(null);
  HTML.window.onResize.listen(resolutionChange);

  List<Bone> skeleton;
  SkeletalAnimation anim;
  AnimatedSkeleton animatedSkeleton;
  VM.Matrix4 globalOffsetTransform = new VM.Matrix4.identity();
  MeshData mdWire;

  Map<String, RenderProgram> programMap = {
    "idSkeleton": prgBone,
    "idStatic": prgSimple,
    "idAnimation": prgAnim,
  };

  for (HTML.Element input in HTML.document.getElementsByTagName("input")) {
    input.onChange.listen((HTML.Event e) {
      HTML.InputElement input = e.target as HTML.InputElement;
      print("${input.id} toggle ${input.checked}");
      programMap[input.id].enabled = input.checked;
    });
  }

  for (HTML.Element e in HTML.document.getElementsByTagName("input")) {
    print("initialize inputs ${e.id}");
    e.dispatchEvent(new HTML.Event("change"));
  }

  double _lastTimeMs = 0.0;
  mat.ForceUniform(uTime, 0.0);

  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);

    double relTime = (timeMs / 1000.0) % anim.duration;
    UpdateAnimatedSkeleton(
        skeleton, globalOffsetTransform, anim, animatedSkeleton, relTime);

    FlattenMatrix4List(animatedSkeleton.skinningTransforms, matrices);

    boneVisualizer.Update(timeMs / 1000.0);
  }

  List<Future<dynamic>> futures = [
    LoadJson(meshFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Mesh
    List<GeometryBuilder> gb = ImportGeometryFromThreeJsJson(list[0]);
    skeleton = ImportSkeletonFromThreeJsJson(list[0]);
    anim = ImportAnimationFromThreeJsJson(list[0], skeleton);
    animatedSkeleton = new AnimatedSkeleton(skeleton.length);
    // skin mesh
    {
      MeshData md = GeometryBuilderToMeshData(meshFile, chronosGL, gb[0]);
      Node mesh = new Node(md.name, md, mat)..rotX(-3.14 / 4);
      Node n = new Node.Container("wrapper", mesh);
      n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
      prgSimple.add(n);
      prgAnim.add(n);
    }
    {
      animationSteps = [];
      for (double t = 0.0; t < anim.duration; t += kAnimTimeStep) {
        animationSteps.add(t);
      }
      Float32List animationData = CreateAnimationTable(
          skeleton, globalOffsetTransform, anim, animationSteps);
      animationTable = new TypedTexture(
          chronosGL,
          "anim",
          skeleton.length * 4,
          animationSteps.length,
          GL_RGBA32F,
          WEBGL.RGBA,
          WEBGL.FLOAT,
          animationData);
      mat.SetUniform(uAnimationTable, animationTable);
    }
    // bone wire mesh
    {
      boneVisualizer = new BoneVisualizer(chronosGL, matWire, skeleton, anim);
      Node mesh = boneVisualizer.mesh..rotX(3.14 / 4);
      Node n = new Node.Container("wrapper", mesh);
      n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
      prgBone.add(n);
    }

    // Start
    animate(0.0);
  });
}
