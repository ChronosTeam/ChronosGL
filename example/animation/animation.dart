import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

const String meshFile = "../asset/monster/monster.json";
const String textureFile = "../asset/monster/monster.jpg";

const String skinningVertexShader = """
#if 1
mat4 adjustMatrix() {
    return aBoneWeight.x * uBoneMatrices[int(aBoneIndex.x)] +
           aBoneWeight.y * uBoneMatrices[int(aBoneIndex.y)] +
           aBoneWeight.z * uBoneMatrices[int(aBoneIndex.z)] +
           aBoneWeight.w * uBoneMatrices[int(aBoneIndex.w)];
}
#endif

void main() {
#if 1
   mat4 skinMat = uModelMatrix * adjustMatrix();
   vec4 pos = skinMat * vec4(aVertexPosition, 1.0);
   // vVertexPosition = pos.xyz;
   // This is not quite accurate
   //${vNormal} = normalize(mat3(skinMat) * aNormal);
   gl_Position = uPerspectiveViewMatrix * pos;
#else
 gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);
#endif

   vTextureCoordinates = aTextureCoordinates;
}

""";

const String skinningFragmentShader = """
void main() {
  ${oFragColor} = texture(${uTexture}, ${vTextureCoordinates});
}
""";

List<ShaderObject> createAnimationShader() {
  return [
    new ShaderObject("AnimationV")
      ..AddAttributeVars(
          [aVertexPosition, aTextureCoordinates, aBoneIndex, aBoneWeight])
      //..AddAttributeVar(aNormal)
      ..AddVaryingVars([vTextureCoordinates])
      //..AddVaryingVar(vNormal)
      ..AddUniformVars([uPerspectiveViewMatrix, uModelMatrix, uBoneMatrices])
      ..SetBody([skinningVertexShader]),
    new ShaderObject("AnimationV")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uTexture])
      ..SetBody([skinningFragmentShader]),
  ];
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = new OrbitCamera(5000.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 1.0, 10000.0);

  final RenderPhase phase = new RenderPhase("main", chronosGL);
  //RenderProgram prg = phase.createProgram(createDemoShader());
  final RenderProgram prgAnim = phase.createProgram(createAnimationShader());
  final RenderProgram prgSimple = phase.createProgram(createDemoShader());

  final RenderProgram prgBone = phase.createProgram(createSolidColorShader());
  final Material matWire = new Material("wire")
    ..SetUniform(uColor, ColorYellow);

  final Material mat = new Material("mat");
  VM.Matrix4 identity = new VM.Matrix4.identity();
  Float32List matrices = new Float32List(16 * 128);
  for (int i = 0; i < matrices.length; ++i) {
    matrices[i] = identity[i % 16];
  }
  mat.SetUniform(uBoneMatrices, matrices);

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
  double _lastTimeMs = 0.0;
  VM.Matrix4 globalOffsetTransform = new VM.Matrix4.identity();

  MeshData mdWire;

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

    List<VM.Vector3> bonePos =
        BonePosFromAnimatedSkeleton(skeleton, animatedSkeleton);
    mdWire.ChangeVertices(FlattenVector3List(bonePos));
  }

  List<Future<dynamic>> futures = [
    LoadJson(meshFile),
    LoadImage(textureFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Texture
    Texture tex = new ImageTexture(chronosGL, textureFile, list[1]);
    mat..SetUniform(uTexture, tex);

    final Map<String, dynamic> meshJson = list[0]["meshes"][0];
    final Map<String, dynamic> animJson = list[0]["animations"][0];
    skeleton = ImportSkeletonFromAssimp2Json(list[0]);
    final GeometryBuilder gb =
        ImportGeometryFromAssimp2JsonMesh(meshJson, skeleton);
    anim = ImportAnimationFromAssimp2Json(animJson, skeleton);
    {
      MeshData md = GeometryBuilderToMeshData(meshFile, chronosGL, gb);
      Node mesh = new Node(md.name, md, mat)..rotX(-3.14 / 4);
      Node n = new Node.Container("wrapper", mesh);
      n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
      prgSimple.add(n);
      prgAnim.add(n);
    }

    animatedSkeleton = new AnimatedSkeleton(skeleton.length);

    {
      UpdateAnimatedSkeleton(
          skeleton, globalOffsetTransform, anim, animatedSkeleton, 0.0);
      mdWire = LineEndPointsToMeshData("wire", chronosGL,
          BonePosFromAnimatedSkeleton(skeleton, animatedSkeleton));
      Node mesh = new Node(mdWire.name, mdWire, matWire)..rotX(3.14 / 4);
      Node n = new Node.Container("wrapper", mesh);
      n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
      prgBone.add(n);
    }

    // Start
    animate(0.0);
  });
}
