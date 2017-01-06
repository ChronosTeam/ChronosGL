import 'package:chronosgl/chronosgl.dart';
import 'package:chronosgl/chronosutil.dart';
import 'dart:html' as HTML;
import 'dart:async';
import 'dart:typed_data';

import 'package:vector_math/vector_math.dart' as VM;

String meshFile = "../asset/hellknight/hellknight.mesh";
String animFile = "../asset/hellknight/walk7.anim";
//String animFile = "../asset/hellknight/stand.anim";

String textureFile = "../asset/hellknight/body_diffuse.png";

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
  vTextureCoordinates = aTextureCoordinates;
}

""";

String skinningFragmentShader = """
void main() {
  gl_FragColor = texture2D(${uTextureSampler}, ${vTextureCoordinates});
}
""";

List<ShaderObject> createAnimationShader() {
  return [
    new ShaderObject("AnimationV")
      ..AddAttributeVar(aVertexPosition)
      //..AddAttributeVar(aNormal)
      ..AddAttributeVar(aTextureCoordinates)
      ..AddAttributeVar(aBoneIndex)
      ..AddAttributeVar(aBoneWeight)
      ..AddVaryingVar(vVertexPosition)
      ..AddVaryingVar(vTextureCoordinates)
      //..AddVaryingVar(vNormal)
      ..AddVaryingVar(vColors)
      ..AddUniformVar(uPerspectiveViewMatrix)
      ..AddUniformVar(uModelMatrix)
      ..AddUniformVar(uBoneMatrices)
      ..SetBody([skinningVertexShader]),
    new ShaderObject("AnimationV")
      ..AddVaryingVar(vColors, vColors)
      ..AddVaryingVar(vTextureCoordinates)
      ..AddUniformVar(uTextureSampler)
      ..SetBody([skinningFragmentShader]),
  ];
}

GeometryBuilder ReadMeshData(data) {
  List<int> indices = data["indices"];
  print(indices.length);

  List meshes = data["meshes"];
  print(meshes.length);

  List vertices = data["vertices"];
  print("VERTICES: ${vertices.length}  ${vertices.length /  3} ");

  List<double> vertexWeights = data["vertexWeights"];
  print(vertexWeights.length);

  GeometryBuilder gb = new GeometryBuilder();
  for (int i = 0; i < vertices.length; i += 12) {
    gb.AddVertices(
        [new VM.Vector3(vertices[i + 0], vertices[i + 1], vertices[i + 2])]);
  }
  for (int i = 0; i < indices.length; i += 3) {
    gb.AddFace3(indices[i + 0], indices[i + 1], indices[i + 2]);
  }

  gb.EnableAttribute(aTextureCoordinates);
  for (int i = 0; i < vertices.length; i += 12) {
    gb.AddAttributesVector2(aTextureCoordinates,
        [new VM.Vector2(vertices[i + 8], vertices[i + 9])]);
  }

  //
  List<double> bi = data["vertexBones"];
  print(bi.length);
  gb.EnableAttribute(aBoneIndex);
  assert(bi.length == 4 * vertices.length ~/ 12);
  for (int i = 0; i < bi.length; i += 4) {
    gb.AddAttributesVector4(aBoneIndex, [
      new VM.Vector4(
          bi[i + 0] + 0.0, bi[i + 1] + 0.0, bi[i + 2] + 0.0, bi[i + 3] + 0.0)
    ]);
  }

  //
  List<double> bw = data["vertexWeights"];
  print(bw.length);
  gb.EnableAttribute(aBoneWeight);
  assert(bw.length == 4 * vertices.length ~/ 12);
  for (int i = 0; i < bw.length; i += 4) {
    gb.AddAttributesVector4(aBoneWeight, [
      new VM.Vector4(
          bw[i + 0] + 0.0, bw[i + 1] + 0.0, bw[i + 2] + 0.0, bw[i + 3] + 0.0)
    ]);
  }
  return gb;
}

List<Bone> ReadSkeleton(Map data, Map<String, int> nameToPos) {
  List boneTable = data["boneTable"];

  int max = 0;
  for (var bone in boneTable) {
    int index = bone["index"];
    if (index > max) max = index;
  }
  List<Bone> skeleton = new List<Bone>(max + 1);
  for (var bone in boneTable) {
    List children = bone["children"];
    String name = bone["name"];
    int index = bone["index"];
    String parent = bone["parent"];
    print("${index} ${name} (${parent}) ${children.length}}");
    nameToPos[name] = index;
    List<double> localTransform = bone["localTransform"];
    List<double> offsetTransform = bone["offsetTransform"];

    Bone b = new Bone(
        name,
        index,
        index == 0 ? -1 : nameToPos[parent],
        localTransform == null
            ? new VM.Matrix4.identity()
            : new VM.Matrix4.fromList(localTransform),
        offsetTransform == null
            ? new VM.Matrix4.identity()
            : new VM.Matrix4.fromList(offsetTransform));
    skeleton[index] = b;
  }
  print("sleleton with ${skeleton.length} bones");
  return skeleton;
}

List<double> extractTicks(List<Map> data, int ticksPerSecond) {
  List<double> out = new List<double>(data.length);
  for (int i = 0; i < data.length; i++) {
    out[i] = data[i]['time'] / ticksPerSecond;
  }
  return out;
}

List<VM.Vector> extractValueVec3(List<Map> data) {
  List<VM.Vector3> out = new List<VM.Vector3>(data.length);
  for (int i = 0; i < data.length; i++) {
    var p = data[i]['value'];
    out[i] = new VM.Vector3(p[0], p[1], p[2]);
  }
  return out;
}

List<VM.Quaternion> extractValueQuaternion(List<Map> data) {
  List<VM.Quaternion> out = new List<VM.Quaternion>(data.length);
  for (int i = 0; i < data.length; i++) {
    var p = data[i]['value'];
    out[i] = new VM.Quaternion(p[0], p[1], p[2], p[3]);
  }
  return out;
}

SkeletonAnimation ReadAnim(
    Map data, List<Bone> skeleton, Map<String, int> nameToPos) {
  String animName = data["name"];
  final int duration = data["duration"];
  final int ticksPerSec = data["ticksPerSecond"];

  SkeletonAnimation sa =
      new SkeletonAnimation(animName, duration / ticksPerSec, skeleton.length);
  var anims = data["boneAnimations"];
  for (Map a in anims) {
    String name = a["name"];
    if (!nameToPos.containsKey(name)) {
      print("@@@Skipping unknown ${name}");
      continue;
    }
    int index = nameToPos[name];
    Bone b = skeleton[index];
    if (b == null) {
      print("@@@Skipping unknown ${name}");
      continue;
    }
    List<Map> positions = a["positions"];
    List<Map> rotations = a["rotations"];
    List<Map> scales = a["scales"];
    print(
        "${name}:  pos: ${positions.length}   rot: ${rotations.length}  scl: ${scales.length}");

    BoneAnimation ba = new BoneAnimation(
        index,
        extractTicks(positions, ticksPerSec),
        extractValueVec3(positions),
        extractTicks(rotations, ticksPerSec),
        extractValueQuaternion(rotations),
        extractTicks(scales, ticksPerSec),
        extractValueVec3(scales));
    sa.InsertBone(ba);
  }
  print("animation with ${sa.animList.length} bones");
  return sa;
}

void main() {
  StatsFps fps =
      new StatsFps(HTML.document.getElementById("stats"), "blue", "gray");
  HTML.CanvasElement canvas = HTML.document.querySelector('#webgl-canvas');
  ChronosGL chronosGL = new ChronosGL(canvas);
  //UseElementIndexUint(chronosGL.gl);
  OrbitCamera orbit = new OrbitCamera(300.0);
  Perspective perspective = new Perspective(orbit);

  final RenderPhase phase = new RenderPhase("main", chronosGL.gl);
  //RenderProgram prg = phase.createProgram(createDemoShader());
  final RenderProgram prg = phase.createProgram(createAnimationShader());

  final RenderProgram prgWire = phase.createProgram(createSolidColorShader());
  final Material matWire = new Material("wire")
    ..SetUniform(uColor, new VM.Vector3(1.0, 1.0, 0.0))
    ..SetUniform(cBlend, true, true)
    ..SetUniform(cBlendEquation, new BlendEquation.Standard());

  final Material mat = new Material("mat");
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
    final double relTime = (timeMs / 1000.0) % anim.duration;
    PoseSkeleton(skeleton, globalOffsetTransform, anim, posedSkeleton, relTime);
    FlattenMatrix4List(posedSkeleton.skinningTransforms, matrices);

    List<VM.Vector3> bonePos =
        BonePosFromPosedSkeleton(skeleton, posedSkeleton);
    mdWire.ChangeVertices(FlattenVector3List(bonePos));
  }

  List<Future<dynamic>> futures = [
    LoadJson(meshFile),
    LoadJson(animFile),
    LoadImage(textureFile),
  ];

  Future.wait(futures).then((List list) {
    // Setup Texture
    Texture tex = new ImageTextureLoaded(chronosGL.gl, textureFile, list[2]);
    mat..SetUniform(uTextureSampler, tex);
    // Setup Mesh
    GeometryBuilder gb = ReadMeshData(list[0]);
    {
      MeshData md = GeometryBuilderToMeshData(meshFile, chronosGL.gl, gb);
      Node mesh = new Node(md.name, md, mat)..rotX(-3.14 / 4);
      Node n = new Node.Container("wrapper", mesh);
      n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
      prg.add(n);
    }

    assert(list[1].length == 1);
    Map<String, int> nameToPos = {};
    skeleton = ReadSkeleton(list[0], nameToPos);
    anim = ReadAnim(list[1][0], skeleton, nameToPos);
    posedSkeleton = new PosedSkeleton(skeleton.length);

    {
      PoseSkeleton(skeleton, globalOffsetTransform, anim, posedSkeleton, 0.0);
      mdWire = LineEndPointsToMeshData("wire", chronosGL.gl,
          BonePosFromPosedSkeleton(skeleton, posedSkeleton));
      Node mesh = new Node(mdWire.name, mdWire, matWire)
        ..rotX(3.14 / 4);
      Node n = new Node.Container("wrapper", mesh);
      n.lookAt(new VM.Vector3(100.0, 0.0, 0.0));
      prgWire.add(n);
    }
    // Start
    animate(0.0);
  });
}
