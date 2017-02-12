// Importer for assimp2json generated files
// https://github.com/acgessler/assimp2json
// Online converter: http://www.greentoken.de/onlineconv/
part of importer;

List<double> _Floatify(List<num> lst) {
  for (int i = 0; i < lst.length; ++i) {
    if (lst[i] is int) lst[i] = lst[i].toDouble();
  }
  return lst;
}

//Also fills in the offsets for skeleton
GeometryBuilder ReadAssimp2JsonMesh(
    Map<String, dynamic> mesh, List<Bone> skeleton) {
  GeometryBuilder gb = new GeometryBuilder();
  String name = mesh['name'];

  assert(mesh.containsKey("vertices"), "no vertices");
  gb.AddVertices(ConvertToVector3List(mesh['vertices']));
  if (mesh.containsKey("normals")) {
    gb.EnableAttribute(aNormal);
    gb.AddAttributesVector3(aNormal, ConvertToVector3List(mesh['normals']));
  }
  if (mesh.containsKey("texturecoords")) {
    assert(mesh["texturecoords"].length == 1);
    gb.EnableAttribute(aTextureCoordinates);
    gb.AddAttributesVector2(
        aTextureCoordinates, ConvertToVector2List(mesh['texturecoords'][0]));
  }
  if (mesh.containsKey("tangents")) {
    gb.EnableAttribute(aTangent);
    gb.AddAttributesVector3(aTangent, ConvertToVector3List(mesh['tangents']));
  }
  if (mesh.containsKey("bitangents")) {
    gb.EnableAttribute(aBitangent);
    gb.AddAttributesVector3(
        aBitangent, ConvertToVector3List(mesh['bitangents']));
  }
  List<List<int>> faces = mesh['faces'];
  assert(faces != null, "no faces");
  for (List<int> f in faces) {
    assert(f.length == 3);
    gb.AddFace3(f[0], f[1], f[2]);
  }

  if (skeleton != null) {
    Map<String, Bone> name2bone = new Map<String, Bone>();
    skeleton.forEach((b) => name2bone[b.boneName] = b);
    final int n = mesh['normals'].length ~/ 3;
    List<VM.Vector4> indices = new List<VM.Vector4>(n);
    List<VM.Vector4> weights = new List<VM.Vector4>(n);
    for (int i = 0; i < n; ++i) {
      indices[i] = new VM.Vector4.zero();
      weights[i] = new VM.Vector4.zero();
    }
    for (Map<String, dynamic> b in mesh["bones"]) {
      assert(name2bone.containsKey(b["name"]));
      final Bone bone = name2bone[b["name"]];
      List<num> tnum = b["offsetmatrix"];
      // Note: Surprising side-effect
      bone.offsetTransform.copyFromArray(_Floatify(tnum));
      bone.offsetTransform.transpose();
      if (b.containsKey("weights")) {
        final double boneIndex = bone.boneIndex.toDouble();

        for (List<num> w in b["weights"]) {
          final int vertex = w[0];
          int pos;
          for (pos = 0; pos < 4; ++pos) {
            if (weights[vertex][pos] == 0.0) break;
          }
          assert(pos != 4);
          weights[vertex][pos] = w[1].toDouble();
          indices[vertex][pos] = boneIndex;
        }
      }
    }
    gb.EnableAttribute(aBoneIndex);
    gb.EnableAttribute(aBoneWeight);
    gb.AddAttributesVector4(aBoneIndex, indices);
    gb.AddAttributesVector4(aBoneWeight, weights);
  }

  print("mesh ${name} ${gb} ${mesh.keys}");
  return gb;
}

List<Bone> ReadAssimp2JsonSkeleton(Map<String, dynamic> json) {
  List<Bone> out = new List<Bone>();
  int count = 0;

  void dfs(Map<String, dynamic> node, int parent) {
    String name = node["name"];
    List<num> tnum = node["transformation"];
    VM.Matrix4 transform = new VM.Matrix4.fromList(_Floatify(tnum));
    transform.transpose();
    VM.Matrix4 offset = new VM.Matrix4.identity();
    Bone bone = new Bone(name, count, parent, transform, offset);
    count++;
    out.add(bone);
    if (node.containsKey("children")) {
      for (Map<String, dynamic> child in node["children"]) {
        dfs(child, bone.boneIndex);
      }
    }
  }

  // We do not represent the root node as a node as it seems to have
  // a bad transform matrix
  // dfs(json["rootnode"], -1);
  Map<String, dynamic> root = json["rootnode"];
  for (Map<String, dynamic> child in root["children"]) {
    dfs(child, -1);
  }

  return out;
}

SkeletalAnimation ReadAssimp2JsonAnimation(
    Map<String, dynamic> json, List<Bone> skeleton) {
  Map<String, Bone> name2bone = new Map<String, Bone>();
  skeleton.forEach((b) => name2bone[b.boneName] = b);

  String name = json["name"];
  double tickspersecond = json["tickspersecond"].toDouble();
  double duration = json["duration"];
  List<Map<String, dynamic>> channels = json["channels"];
  assert(channels != null);
  SkeletalAnimation anim =
      new SkeletalAnimation(name, duration, skeleton.length);
  print("animated bones: ${channels.length}");
  for (Map<String, dynamic> c in channels) {
    assert(name2bone.containsKey(c["name"]));
    final Bone bone = name2bone[c["name"]];

    List<double> positionTimes = [];
    List<VM.Vector3> positionValues = [];
    for (List pos in c["positionkeys"]) {
      positionTimes.add(pos[0] / tickspersecond);
      positionValues.add(new VM.Vector3.array(_Floatify(pos[1])));
    }

    List<double> rotationTimes = [];
    List<VM.Quaternion> rotationValues = [];
    for (List rot in c["rotationkeys"]) {
      rotationTimes.add(rot[0] / tickspersecond);
      List<double> q = _Floatify(rot[1]);
      rotationValues.add(new VM.Quaternion(q[1], q[2], q[3], q[0]));
    }

    List<double> scaleTimes = [];
    List<VM.Vector3> scaleValues = [];
    for (List sca in c["scalingkeys"]) {
      scaleTimes.add(sca[0] / tickspersecond);
      scaleValues.add(new VM.Vector3.array(_Floatify(sca[1])));
    }

    anim.InsertBone(new BoneAnimation(bone, positionTimes, positionValues,
        rotationTimes, rotationValues, scaleTimes, scaleValues));
  }

  return anim;
}
