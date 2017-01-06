import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

String meshFile = "../asset/knight/knight.js";

String skinningVertexShader = """

mat4 adjustMatrix() {
    return aBoneWeight.x * uBoneMatrices[int(aBoneIndex.x)] +
           aBoneWeight.y * uBoneMatrices[int(aBoneIndex.y)] +
           aBoneWeight.z * uBoneMatrices[int(aBoneIndex.z)] +
           aBoneWeight.w * uBoneMatrices[int(aBoneIndex.w)];
}

void main() {
   mat4 skinMat = uModelMatrix * adjustMatrix();
   vec4 pos = skinMat * vec4(aVertexPosition, 1.0);
   // vVertexPosition = pos.xyz;
   // This is not quite accurate
   //${vNormal} = normalize(mat3(skinMat) * aNormal);
   gl_Position = uPerspectiveViewMatrix * pos;


   ${vColors} = vec3( sin(${aVertexPosition}.x)/2.0+0.5,
                      cos(${aVertexPosition}.y)/2.0+0.5,
                      sin(${aVertexPosition}.z)/2.0+0.5);
   //vTextureCoordinates = aTextureCoordinates;
}

""";

String skinningFragmentShader = """
void main() {
  gl_FragColor.rgb = ${vColors};
}
""";

List<ShaderObject> createAnimationShader() {
  return [
    new ShaderObject("AnimationV")
      ..AddAttributeVar(aVertexPosition)
      //..AddAttributeVar(aNormal)
      //..AddAttributeVar(aTextureCoordinates)
      ..AddAttributeVar(aBoneIndex)
      ..AddAttributeVar(aBoneWeight)
      ..AddVaryingVar(vVertexPosition)
      //..AddVaryingVar(vTextureCoordinates)
      //..AddVaryingVar(vNormal)
      ..AddVaryingVar(vColors)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddUniformVar(uBoneMatrices)
      ..SetBody([skinningVertexShader]),
    new ShaderObject("AnimationV")
      ..AddVaryingVar(vColors, vColors)
      //..AddVaryingVar(vTextureCoordinates)
      //..AddUniformVar(uTextureSampler)
      ..SetBody([skinningFragmentShader]),
  ];
}

// A very simple shaders - many other are available out of the box.
List<ShaderObject> demoShader() {
  return [
    new ShaderObject("demoVertexShader")
      ..AddAttributeVar(aVertexPosition)
      ..AddVaryingVar(vColors)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..SetBody([
        """
        void main(void) {
          gl_Position = ${uPerspectiveViewMatrix} *
                        ${uModelMatrix} *
                        vec4(${aVertexPosition}, 1.0);
          ${vColors}.r = sin(${aVertexPosition}.x)/2.0+0.5;
          ${vColors}.g = cos(${aVertexPosition}.y)/2.0+0.5;
          ${vColors}.b = sin(${aVertexPosition}.z)/2.0+0.5;
        }
        """
      ]),
    new ShaderObject("demoFragmentShader")
      ..AddVaryingVar(vColors)
      ..SetBodyWithMain(["gl_FragColor.rgb = ${vColors};"])
  ];
}

List<VM.Vector3> ConvertToVector3List(List<double> lst) {
  List<VM.Vector3> out = new List<VM.Vector3>(lst.length ~/ 3);
  for (int i = 0; i < lst.length; i += 3) {
    //print("${lst[i + 0]}  ${lst[i + 1]}  ${lst[i + 2]}");
    out[i ~/ 3] = new VM.Vector3(
        lst[i + 0].toDouble(), lst[i + 1].toDouble(), lst[i + 2].toDouble());
  }
  return out;
}

List<VM.Vector2> ConvertToVector2List(List<double> lst) {
  List<VM.Vector2> out = new List<VM.Vector2>(lst.length ~/ 2);
  for (int i = 0; i < lst.length; i += 2) {
    out[i ~/ 2] = new VM.Vector2(lst[i + 0].toDouble(), lst[i + 1].toDouble());
  }
  return out;
}

List<VM.Vector4> ConvertToVector4List(int nFill, List<double> lst) {
  List<VM.Vector4> out = new List<VM.Vector4>(lst.length ~/ nFill);
  for (int i = 0; i < lst.length; i += nFill) {
    VM.Vector4 v = new VM.Vector4.zero();
    for (int x = 0; x < nFill; ++x) {
      v[x] = lst[i + x].toDouble();
    }
    out[i ~/ nFill] = v;
  }
  return out;
}

int FindSkinMultiplier(Map json) {
  final List<int> SkinIndex = json["skinIndices"];
  final List<int> SkinWeight = json["skinWeights"];
  if (SkinIndex.length == 0) return 0;
  final int vertexLength = json["vertices"].length ~/ 3;
  final int skinMultiplier = SkinIndex.length ~/ vertexLength;

  assert(vertexLength * skinMultiplier == SkinIndex.length);
  assert(vertexLength * skinMultiplier == SkinWeight.length);
  assert(skinMultiplier <= 4);
  print("Skin multiplier is ${skinMultiplier}");
  return skinMultiplier;
}

List<GeometryBuilder> ReadMeshes(Map json) {
  List<GeometryBuilder> out = [];
  //
  final int skinMultiplier = FindSkinMultiplier(json);
  final List<int> Faces = json["faces"];

  final List<VM.Vector3> Vertices = ConvertToVector3List(json["vertices"]);
  final List<VM.Vector3> Normals = ConvertToVector3List(json["normals"]);
  final List<VM.Vector4> SkinIndex =
      ConvertToVector4List(skinMultiplier, json["skinIndices"]);

  final List<VM.Vector4> SkinWeight =
      ConvertToVector4List(skinMultiplier, json["skinWeights"]);
  // TODO: support for more than one
  final List<VM.Vector2> Uvs = ConvertToVector2List(json["uvs"][0]);
  // TODO: support incomplete
  //final List Colors = json["colors"];

  int i = 0;
  while (i < Faces.length) {
    final int t = Faces[i++];
    final int d = (t & 1) == 0 ? 3 : 4; // quad or triangle
    final bool hasMaterial = (t & 2) != 0;
    final bool hasFaceVertexUv = (t & 8) != 0;
    final bool hasFaceNormal = (t & 16) != 0;
    final bool hasFaceVertexNormal = (t & 32) != 0;
    final bool hasFaceColor = (t & 64) != 0;
    final bool hasFaceVertexColor = (t & 128) != 0;

    List<int> indices = [];
    for (int j = 0; j < d; j++) {
      indices.add(Faces[i++]);
    }

    int mat = 0;
    if (hasMaterial) {
      mat = Faces[i++];
    }

    List<VM.Vector2> uv = [];
    if (hasFaceVertexUv) {
      for (int j = 0; j < d; j++) {
        uv.add(Uvs[Faces[i++]]);
      }
    }

    List<VM.Vector3> normal = [];
    if (hasFaceNormal) {
      VM.Vector3 norm = Normals[Faces[i++]];
      for (int j = 0; j < d; j++) {
        normal.add(norm);
      }
    }

    if (hasFaceVertexNormal) {
      for (int j = 0; j < d; j++) {
        normal.add(Normals[Faces[i++]]);
      }
    }

    List<int> color = [];
    if (hasFaceColor) {
      assert(false);
      int col = Faces[i++];
      for (int j = 0; j < d; j++) {
        color.add(col);
      }
    }

    if (hasFaceVertexColor) {
      assert(false);
      for (int j = 0; j < d; j++) {
        color.add(Faces[i++]);
      }
    }

    while (out.length <= mat) {
      GeometryBuilder gb = new GeometryBuilder();
      if (Normals.length > 0) gb.EnableAttribute(aNormal);
      if (Uvs.length > 0) gb.EnableAttribute(aTextureCoordinates);
      if (SkinIndex.length > 0) gb.EnableAttribute(aBoneIndex);
      if (SkinWeight.length > 0) gb.EnableAttribute(aBoneWeight);
      out.add(gb);
    }
    GeometryBuilder gb = out[mat];
    List<VM.Vector3> vertex = [];

    for (int i in indices) {
      vertex.add(Vertices[i]);
    }

    if (d == 3) {
      gb.AddVerticesFace3(vertex);
    } else {
      assert(d == 4);
      gb.AddVerticesFace4(vertex);
    }
    if (uv.length > 0) {
      gb.AddAttributesVector2(aTextureCoordinates, uv);
    }
    if (normal.length > 0) {
      gb.AddAttributesVector3(aNormal, normal);
    }

    if (skinMultiplier > 0) {
      assert(Vertices.length == SkinIndex.length);
      assert(Vertices.length == SkinWeight.length);

      List<VM.Vector4> boneIndex = [];
      List<VM.Vector4> boneWeight = [];
      for (int i in indices) {
        boneIndex.add(SkinIndex[i]);
        boneWeight.add(SkinWeight[i]);
      }
      gb.AddAttributesVector4(aBoneIndex, boneIndex);
      gb.AddAttributesVector4(aBoneWeight, boneWeight);
    }
  }

  return out;
}

VM.Vector3 MakeVector3(List<num> lst) {
  return new VM.Vector3(
      lst[0].toDouble(), lst[1].toDouble(), lst[2].toDouble());
}

VM.Vector3 MakeTransVector3(List<num> lst) {
  if (lst == null) return new VM.Vector3.zero();
  return MakeVector3(lst);
}

VM.Vector3 MakeScaleVector3(List<num> lst) {
  if (lst == null) return new VM.Vector3(1.0, 1.0, 1.0);
  return MakeVector3(lst);
}

VM.Quaternion MakeQuaternion(List<num> lst) {
  if (lst == null) return new VM.Quaternion.identity();

  return new VM.Quaternion(lst[1].toDouble(), lst[2].toDouble(),
      lst[3].toDouble(), lst[0].toDouble());
}

List<Bone> ReadBones(Map json) {
  final Map metadata = json["metadata"];
  final List<Map> Bones = json["bones"];
  List<Bone> bones = new List<Bone>(metadata["bones"]);
  for (int i = 0; i < Bones.length; i++) {
    Map m = Bones[i];
    String name = m["name"];
    int parent = m["parent"];
    final VM.Vector3 s = MakeScaleVector3(m["scl"]);
    final VM.Vector3 t = MakeTransVector3(m["pos"]);
    final VM.Quaternion r = MakeQuaternion(m["qrot"]);
    VM.Matrix4 mat = new VM.Matrix4.zero()
      ..setFromTranslationRotationScale(t, r, s);
    Bone b = new Bone(name, i, mat, new VM.Matrix4.identity());
    bones[i] = b;
    if (parent != -1) {
      bones[parent].children.add(b);
    }
  }
  return bones;
}

SkeletonAnimation ReadAnimation(Map json) {
  final Map animation = json["animation"];
  final List<Map> hierarchy = animation["hierarchy"];
  SkeletonAnimation s = new SkeletonAnimation(
      animation["name"], animation["length"], hierarchy.length);
  assert(hierarchy.length == json["bones"].length);
  for (int i = 0; i < hierarchy.length; ++i) {
    List<double> pTimes = [];
    List<VM.Vector3> pValues = [];
    List<double> rTimes = [];
    List<VM.Quaternion> rValues = [];
    List<double> sTimes = [];
    List<VM.Vector3> sValues = [];
    for (Map m in hierarchy[i]["keys"]) {
      double t = m["time"].toDouble();
      /*
      if (m.containsKey("pos")) {
        pTimes.add(t);
        pValues.add(MakeTransVector3(m["pos"]));
      }
      */

      if (m.containsKey("scale")) {
        sTimes.add(t);
        sValues.add(MakeScaleVector3(m["scl"]));
      }

      /*
      if (m.containsKey("rot")) {
        rTimes.add(t);
        rValues.add(MakeQuaternion(m["rot"]));
      }
      */
    }
    BoneAnimation ba =
        new BoneAnimation(i, pTimes, pValues, rTimes, rValues, sTimes, sValues);
    s.InsertBone(ba);
  }
  return s;
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  OrbitCamera orbit = new OrbitCamera(20.0);
  Perspective perspective = new Perspective(orbit);

  RenderPhase phase = new RenderPhase("main", chronosGL.gl);
  //RenderProgram prg = phase.createProgram(createDemoShader());
  RenderProgram prg = phase.createProgram(createAnimationShader());

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
  SkeletonAnimation anim;
  PosedSkeleton posedSkeleton;
  SkeletonPoser poser = new SkeletonPoser();
  VM.Matrix4 globalOffsetTransform = new VM.Matrix4.identity();

  double _lastTimeMs = 0.0;

  void animate(timeMs) {
    timeMs = 0.0 + timeMs;
    double elapsed = timeMs - _lastTimeMs;
    _lastTimeMs = timeMs;
    orbit.azimuth += 0.001;
    orbit.animate(elapsed);
    fps.UpdateFrameCount(timeMs);
    phase.draw([perspective]);
    HTML.window.animationFrame.then(animate);

    final double relTime = (timeMs / 1000.0) % anim.duration;
    print ("${relTime}");
    poser.pose(skeleton, globalOffsetTransform, anim, posedSkeleton, relTime);
    for (int i = 0; i < posedSkeleton.skinningTransforms.length; ++i) {
      final int offset = i * 16;
      final VM.Matrix4 m = posedSkeleton.skinningTransforms[i];
      for (int t = 0; t < 16; t++) {
        matrices[offset + t] = m[t];
      }
    }
  }

  List<Future<dynamic>> futures = [
    LoadJson(meshFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Mesh
    List<GeometryBuilder> gb = ReadMeshes(list[0]);
    skeleton = ReadBones(list[0]);
    anim = ReadAnimation(list[0]);
    posedSkeleton = new PosedSkeleton(skeleton.length);
    MeshData md = GeometryBuilderToMeshData(meshFile, chronosGL.gl, gb[0]);
    Node mesh = new Node(md.name, md, mat)..rotX(-3.14 / 4);
    Node n = new Node.Container("wrapper", mesh);
    n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
    prg.add(n);

    // Start
    animate(0.0);
  });
}
