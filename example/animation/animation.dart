import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'dart:typed_data';
import 'dart:web_gl' as WEBGL;

import 'package:vector_math/vector_math.dart' as VM;

const String meshFile = "../asset/monster/monster.json";
const String textureFile = "../asset/monster/monster.jpg";

const String skinningVertexShader = """
mat4 GetBoneMatrix(int index, int time) {
    vec4 v1 = texelFetch(${uAnimationTable}, ivec2(index * 4 + 0, time), 0);
    vec4 v2 = texelFetch(${uAnimationTable}, ivec2(index * 4 + 1, time), 0);
    vec4 v3 = texelFetch(${uAnimationTable}, ivec2(index * 4 + 2, time), 0);
    vec4 v4 = texelFetch(${uAnimationTable}, ivec2(index * 4 + 3, time), 0);
    return mat4(v1, v2, v3, v4);
    //return uBoneMatrices[index];
}

mat4 adjustMatrix(int time) {
    return aBoneWeight.x * GetBoneMatrix(int(aBoneIndex.x), time) +
           aBoneWeight.y * GetBoneMatrix(int(aBoneIndex.y), time) +
           aBoneWeight.z * GetBoneMatrix(int(aBoneIndex.z), time) +
           aBoneWeight.w * GetBoneMatrix(int(aBoneIndex.w), time);
}

void main() {
   mat4 skinMat = uModelMatrix * adjustMatrix(int(${uTime}));
   vec4 pos = skinMat * vec4(aVertexPosition, 1.0);
   // vVertexPosition = pos.xyz;
   // This is not quite accurate
   //${vNormal} = normalize(mat3(skinMat) * aNormal);
   gl_Position = uPerspectiveViewMatrix * pos;

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
      ..AddUniformVars([
        uPerspectiveViewMatrix,
        uModelMatrix,
        uAnimationTable,
        uTime,
      ])
      ..SetBody([skinningVertexShader]),
    new ShaderObject("AnimationV")
      ..AddVaryingVars([vTextureCoordinates])
      ..AddUniformVars([uTexture])
      ..SetBody([skinningFragmentShader]),
  ];
}

final double kAnimTimeStep = 0.0333;


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
  TypedTexture animationTable;
  List<double> animationSteps;
  BoneVisualizer boneVisualizer;

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

    int step =
        ((timeMs / 1000.0) / kAnimTimeStep).floor() % animationSteps.length;
    mat.ForceUniform(uTime, step + 0.0);
    boneVisualizer.Update(timeMs / 1000.0);
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
    VM.Matrix4 globalOffsetTransform = new VM.Matrix4.identity();
    List<Bone> skeleton = ImportSkeletonFromAssimp2Json(list[0]);
    final GeometryBuilder gb =
        ImportGeometryFromAssimp2JsonMesh(meshJson, skeleton);
    SkeletalAnimation anim = ImportAnimationFromAssimp2Json(animJson, skeleton);
    print("Imnported ${anim}");
    {
      MeshData md = GeometryBuilderToMeshData(meshFile, chronosGL, gb);
      Node mesh = new Node(md.name, md, mat)..rotX(-3.14 / 4);
      Node n = new Node.Container("wrapper", mesh);
      n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
      prgSimple.add(n);
      prgAnim.add(n);
    }
    animationSteps = [];
    for (double t = 0.0; t < anim.duration; t += kAnimTimeStep) {
      animationSteps.add(t);
    }

    {
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
