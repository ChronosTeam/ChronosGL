import 'package:chronosgl/chronosgl.dart';
import 'dart:html' as HTML;

import 'dart:async';
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

const String meshFile = "../asset/knight/knight.js";

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


   ${vColor} = vec3( sin(${aPosition}.x)/2.0+0.5,
                      cos(${aPosition}.y)/2.0+0.5,
                      sin(${aPosition}.z)/2.0+0.5);
   //vTexUV = ${aTexUV};
}

""";

const String skinningFragmentShader = """
void main() {
  ${oFragColor}.rgb = ${vColor};
}
""";

final ShaderObject animationVertexShader = new ShaderObject("AnimationV")
  ..AddAttributeVars([aPosition, aBoneIndex, aBoneWeight])
  //..AddAttributeVar(aNormal)
  //..AddAttributeVar(aTexUV)
  ..AddVaryingVars([vColor])
  //..AddVaryingVar(vTexUV)
  //..AddVaryingVar(vNormal)
  ..AddUniformVars(
      [uPerspectiveViewMatrix, uModelMatrix, uAnimationTable, uTime])
  ..SetBody([skinningVertexShader]);

final ShaderObject animationFragmentShader = new ShaderObject("AnimationV")
  ..AddVaryingVars([vColor])
  //..AddVaryingVar(vTexUV)
  //..AddUniformVar(uTextureSampler)
  ..SetBody([skinningFragmentShader]);

final double kAnimTimeStep = 0.0333;

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);

  OrbitCamera orbit = new OrbitCamera(20.0, 0.0, 0.0, canvas);
  Perspective perspective = new Perspective(orbit, 0.1, 1000.0);

  RenderPhase phase = new RenderPhase("main", chronosGL);

  Scene sceneAnim = new Scene(
      "animation",
      new RenderProgram("animation", chronosGL, animationVertexShader,
          animationFragmentShader),
      [perspective]);
  phase.add(sceneAnim);

  Scene sceneSkeleton = new Scene(
      "solid",
      new RenderProgram(
          "solid", chronosGL, solidColorVertexShader, solidColorFragmentShader),
      [perspective]);
  phase.add(sceneSkeleton);

  Scene sceneDemo = new Scene(
      "demo",
      new RenderProgram(
          "demo", chronosGL, demoVertexShader, demoFragmentShader),
      [perspective]);
  phase.add(sceneDemo);

  assert(sceneSkeleton.program
      .HasDownwardCompatibleAttributesTo(sceneAnim.program));

  final Material matWire = new Material("wire")
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0));

  BoneVisualizer boneVisualizer;
  TypedTextureMutable animationTable;
  List<double> animationSteps;

  Material mat = new Material("mat");

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

  Map<String, RenderProgram> programMap = {
    "idSkeleton": sceneSkeleton.program,
    "idStatic": sceneDemo.program,
    "idAnimation": sceneAnim.program,
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

  void animate(num timeMs) {
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs + 0.0;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    phase.Draw([]);

    HTML.window.animationFrame.then(animate);
    fps.UpdateFrameCount(timeMs);

    int step =
        ((timeMs / 1000.0) / kAnimTimeStep).floor() % animationSteps.length;
    mat.ForceUniform(uTime, step + 0.0);

    boneVisualizer.Update(timeMs / 1000.0);
  }

  List<Future<Object>> futures = [
    LoadJson(meshFile),
  ];

  Future.wait(futures).then((List list) {
    VM.Matrix4 globalOffsetTransform = new VM.Matrix4.identity();
    // Setup Mesh
    List<GeometryBuilder> gb = ImportGeometryFromThreeJsJson(list[0]);
    List<Bone> skeleton = ImportSkeletonFromThreeJsJson(list[0]);
    SkeletalAnimation anim = ImportAnimationFromThreeJsJson(list[0], skeleton);
    // skin mesh
    {
      MeshData md =
          GeometryBuilderToMeshData(meshFile, sceneAnim.program, gb[0]);
      Node mesh = new Node(md.name, md, mat)..rotX(-3.14 / 4);
      Node n = new Node.Container("wrapper", mesh);
      n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
      sceneDemo.add(n);
      sceneAnim.add(n);
    }
    {
      animationSteps = [];
      for (double t = 0.0; t < anim.duration; t += kAnimTimeStep) {
        animationSteps.add(t);
      }
      Float32List animationData = CreateAnimationTable(
          skeleton, globalOffsetTransform, anim, animationSteps);
      animationTable = new TypedTextureMutable(chronosGL, "anim", skeleton.length * 4,
          animationSteps.length, GL_RGBA32F, TexturePropertiesFramebuffer,GL_RGBA, GL_FLOAT, animationData);
      mat.SetUniform(uAnimationTable, animationTable);
    }
    // bone wire mesh
    {
      boneVisualizer =
          new BoneVisualizer(sceneSkeleton.program, matWire, skeleton, anim);
      Node mesh = boneVisualizer.mesh..rotX(3.14 / 4);
      Node n = new Node.Container("wrapper", mesh);
      n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
      sceneSkeleton.add(n);
    }

    animate(0.0);
  });
}
