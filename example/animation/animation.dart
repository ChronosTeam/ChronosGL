import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

const String meshFile = "../asset/monster/monster.json";
const String textureFile = "../asset/monster/monster.jpg";

const String skinningVertexShader = """
mat4 GetBoneMatrix(sampler2D table, int index, int time) {
    vec4 v1 = texelFetch(table, ivec2(index * 4 + 0, time), 0);
    vec4 v2 = texelFetch(table, ivec2(index * 4 + 1, time), 0);
    vec4 v3 = texelFetch(table, ivec2(index * 4 + 2, time), 0);
    vec4 v4 = texelFetch(table, ivec2(index * 4 + 3, time), 0);
    return mat4(v1, v2, v3, v4);
    //return uBoneMatrices[index];
}

mat4 adjustMatrix(sampler2D table, vec4 weights, ivec4 indices, int time) {
    return weights.x * GetBoneMatrix(table, indices.x, time) +
           weights.y * GetBoneMatrix(table, indices.y, time) +
           weights.z * GetBoneMatrix(table, indices.z, time) +
           weights.w * GetBoneMatrix(table, indices.w, time);
}

void main() {
   mat4 skinMat = uModelMatrix * adjustMatrix(${uAnimationTable},
                                              ${aBoneWeight},
                                              ivec4(${aBoneIndex}),
                                              int(${uTime}));
   vec4 pos = skinMat * vec4(${aPosition}, 1.0);
   // vPosition = pos.xyz;
   // This is not quite accurate
   //${vNormal} = normalize(mat3(skinMat) * aNormal);
   gl_Position = ${uPerspectiveViewMatrix} * pos;

   ${vTexUV} = ${aTexUV};
}

""";

const String skinningFragmentShader = """
void main() {
  ${oFragColor} = texture(${uTexture}, ${vTexUV});
}
""";

final ShaderObject animationVertexShader = ShaderObject("AnimationV")
  ..AddAttributeVars([aPosition, aTexUV, aBoneIndex, aBoneWeight])
  //..AddAttributeVar(aNormal)
  ..AddVaryingVars([vTexUV])
  //..AddVaryingVar(vNormal)
  ..AddUniformVars([
    uPerspectiveViewMatrix,
    uModelMatrix,
    uAnimationTable,
    uTime,
  ])
  ..SetBody([skinningVertexShader]);

final ShaderObject animationFragmentShader = ShaderObject("AnimationV")
  ..AddVaryingVars([vTexUV])
  ..AddUniformVars([uTexture])
  ..SetBody([skinningFragmentShader]);

final double kAnimTimeStep = 0.0333;

void main() {
  StatsFps fps =
      StatsFps(HTML.document.getElementById("stats")!, "blue", "gray");
  HTML.CanvasElement canvas =
      HTML.document.querySelector('#webgl-canvas') as HTML.CanvasElement;
  ChronosGL cgl = ChronosGL(canvas, faceCulling: true);
  OrbitCamera orbit = OrbitCamera(5000.0, 0.0, 0.0, canvas);
  Perspective perspective = Perspective(orbit, 1.0, 10000.0);

  // Shows the actual animation.
  final Scene sceneAnim = Scene(
      "animation",
      RenderProgram(
          "animation", cgl, animationVertexShader, animationFragmentShader),
      [perspective]);

  // Shows a bone only animation.
  final Scene sceneSkeleton = Scene(
      "solid",
      RenderProgram(
          "solid", cgl, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);

  // Shows the un-animated object.
  final Scene sceneDemo = Scene(
      "demo",
      RenderProgram("demo", cgl, demoVertexShader, demoFragmentShader),
      [perspective]);

  assert(sceneSkeleton.program
      .HasDownwardCompatibleAttributesTo(sceneAnim.program));

  final RenderPhaseResizeAware phase =
      RenderPhaseResizeAware("main", cgl, canvas, perspective)
        ..add(sceneSkeleton)
        ..add(sceneAnim)
        ..add(sceneDemo);

  final Material matWire = Material("wire")..SetUniform(uColor, ColorYellow);

  final Material mat = Material("mat");
  late TypedTextureMutable animationTable;
  late List<double> animationSteps;
  late BoneVisualizer boneVisualizer;

  Map<String, RenderProgram> programMap = {
    "idSkeleton": sceneSkeleton.program,
    "idStatic": sceneDemo.program,
    "idAnimation": sceneAnim.program,
  };

  for (HTML.Node node in HTML.document.getElementsByTagName("input")) {
    HTML.Element input = node as HTML.Element;
    input.onChange.listen((HTML.Event e) {
      HTML.InputElement input = e.target as HTML.InputElement;
      print("${input.id} toggle ${input.checked}");
      programMap[input.id]!.enabled = input.checked!;
    });
  }

  for (HTML.Node node in HTML.document.getElementsByTagName("input")) {
    HTML.Element input = node as HTML.Element;
    print("initialize inputs ${input.id}");
    input.dispatchEvent(HTML.Event("change"));
  }

  double _lastTimeMs = 0.0;

  mat.ForceUniform(uTime, 0.0);

  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.Draw();

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(_lastTimeMs);

    int step =
        ((timeMs / 1000.0) / kAnimTimeStep).floor() % animationSteps.length;
    mat.ForceUniform(uTime, step + 0.0);
    boneVisualizer.Update(timeMs / 1000.0);
  }

  List<Future<Object>> futures = [
    LoadJson(meshFile),
    LoadImage(textureFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Texture
    Texture tex = ImageTexture(cgl, textureFile, list[1]);
    mat..SetUniform(uTexture, tex);

    final Map<String, dynamic> meshJson = list[0]["meshes"][0];
    final Map<String, dynamic> animJson = list[0]["animations"][0];
    VM.Matrix4 globalOffsetTransform = VM.Matrix4.identity();
    List<Bone> skeleton = ImportSkeletonFromAssimp2Json(list[0]);
    final GeometryBuilder gb =
        ImportGeometryFromAssimp2JsonMesh(meshJson, skeleton);
    SkeletalAnimation anim = ImportAnimationFromAssimp2Json(animJson, skeleton);
    print("Imnported ${anim}");
    {
      MeshData md = GeometryBuilderToMeshData(meshFile, sceneAnim.program, gb);
      Node mesh = Node(md.name, md, mat)..rotX(-3.14 / 4);
      Node n = Node.Container("wrapper", mesh);
      n.lookAt(VM.Vector3(100.0, 0.0, 0.0));
      sceneDemo.add(n);
      sceneAnim.add(n);
    }
    animationSteps = [];
    for (double t = 0.0; t < anim.duration; t += kAnimTimeStep) {
      animationSteps.add(t);
    }

    {
      Float32List animationData = CreateAnimationTable(
          skeleton, globalOffsetTransform, anim, animationSteps);
      animationTable = TypedTextureMutable(
          cgl,
          "anim",
          skeleton.length * 4,
          animationSteps.length,
          GL_RGBA32F,
          TexturePropertiesFramebuffer,
          GL_RGBA,
          GL_FLOAT,
          animationData);
      mat.SetUniform(uAnimationTable, animationTable);

      boneVisualizer =
          BoneVisualizer(sceneSkeleton.program, matWire, skeleton, anim);

      Node mesh = boneVisualizer.mesh..rotX(3.14 / 4);
      Node n = Node.Container("wrapper", mesh);
      n.lookAt(VM.Vector3(100.0, 0.0, 0.0));
      sceneSkeleton.add(n);
    }

    // Start
    animate(0.0);
  });
}
