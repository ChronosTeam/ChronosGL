part of importer;

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
  for (int i = 0, pos = 0; i < lst.length; i += nFill, pos++) {
    VM.Vector4 v = new VM.Vector4.zero();
    for (int x = 0; x < nFill; ++x) {
      v[x] = lst[i + x].toDouble();
    }
    out[pos] = v;
  }
  return out;
}

int _FindSkinMultiplier(Map json) {
  final List<int> SkinIndex = json["skinIndices"];
  final List<int> SkinWeight = json["skinWeights"];
  if (SkinIndex == null || SkinIndex.length == 0) return 0;
  final int vertexLength = json["vertices"].length ~/ 3;
  final int skinMultiplier = SkinIndex.length ~/ vertexLength;

  assert(vertexLength * skinMultiplier == SkinIndex.length);
  assert(vertexLength * skinMultiplier == SkinWeight.length);
  assert(skinMultiplier <= 4);
  print("Skin multiplier is ${skinMultiplier}");
  return skinMultiplier;
}

List<GeometryBuilder> ReadThreeJsMeshes(Map json) {
  List<GeometryBuilder> out = [];
  //
  final int skinMultiplier = _FindSkinMultiplier(json);
  final List<int> Faces = json["faces"];
  print("faces: ${Faces.length}");

  final List<VM.Vector3> Vertices = ConvertToVector3List(json["vertices"]);
  final List<VM.Vector3> Normals = ConvertToVector3List(json["normals"]);
  final List<VM.Vector4> SkinIndex = skinMultiplier == 0
      ? null
      : ConvertToVector4List(skinMultiplier, json["skinIndices"]);

  final List<VM.Vector4> SkinWeight = skinMultiplier == 0
      ? null
      : ConvertToVector4List(skinMultiplier, json["skinWeights"]);
  if (SkinWeight != null) {
    for (VM.Vector4 v in SkinWeight) {
      final double d = v.x + v.y + v.z + v.w;
      if (d < 0.98 || d > 1.02) {
        print("bad vector: $v");
      }
    }
  }
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
      if (skinMultiplier > 0) {
        gb.EnableAttribute(aBoneIndex);
        gb.EnableAttribute(aBoneWeight);
      }
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

  print("out: ${out.length} ${out[0]}");
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

  return new VM.Quaternion(lst[0].toDouble(), lst[1].toDouble(),
      lst[2].toDouble(), lst[3].toDouble());
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

      if (m.containsKey("pos")) {
        pTimes.add(t);
        pValues.add(MakeTransVector3(m["pos"]));
      }

      if (m.containsKey("scale")) {
        sTimes.add(t);
        sValues.add(MakeScaleVector3(m["scl"]));
      }

      if (m.containsKey("rot")) {
        rTimes.add(t);
        rValues.add(MakeQuaternion(m["rot"]));
      }
    }
    BoneAnimation ba =
        new BoneAnimation(i, pTimes, pValues, rTimes, rValues, sTimes, sValues);
    s.InsertBone(ba);
  }
  print("anim-bones: ${s.animList.length}");
  return s;
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
    if (i != 0 && parent < 0) {
      print("found unusal root node ${i} ${parent}");
    }
    bones[i] = new Bone(name, i, parent, new VM.Matrix4.identity(), mat);
  }
  print("bones: ${bones.length}");
  return bones;
}