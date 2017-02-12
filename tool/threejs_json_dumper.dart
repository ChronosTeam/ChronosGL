// cf.: https://github.com/mrdoob/three.js/blob/dev/src/loaders/JSONLoader.js
//      https://github.com/mrdoob/three.js/wiki/JSON-Model-format-3

import 'dart:io';
import 'dart:convert';
import 'package:args/args.dart';
import 'package:vector_math/vector_math.dart' as VM;

import '../lib/src/base/lib.dart';
import '../lib/src/importer/lib.dart';
import '../lib/src/animation/lib.dart';

// Note this is similar to lib/src/importer/threejs.dart
void DumpFaces(Map json, bool verbose) {
  final List<int> faces = json["faces"];
  int i = 0;
  int count = 0;

  int mVertex = 9;
  int mUv = 0;
  int mNormal = 0;
  int mMat = 0;

  while (i < faces.length) {
    count++;
    final int t = faces[i++];
    final int d = (t & 1) == 0 ? 3 : 4; // quad or triangle
    final bool hasMaterial = (t & 2) != 0;
    final bool hasFaceVertexUv = (t & 8) != 0;
    final bool hasFaceNormal = (t & 16) != 0;
    final bool hasFaceVertexNormal = (t & 32) != 0;
    final bool hasFaceColor = (t & 64) != 0;
    final bool hasFaceVertexColor = (t & 128) != 0;
    List<String> tokens = [];
    tokens.add(t.toString());

    tokens.add("  v: ");
    for (int j = 0; j < d; j++) {
      int x = faces[i++];
      if (x > mVertex) mVertex = x;
      tokens.add(x.toString());
      tokens.add(" ");
    }

    if (hasMaterial) {
      tokens.add("  m: ");
      int x = faces[i++];
      if (x > mMat) mMat = x;
      tokens.add(x.toString());
      tokens.add(" ");
    }

    if (hasFaceVertexUv) {
      tokens.add("  uv: ");
      for (int j = 0; j < d; j++) {
        int x = faces[i++];
        if (x > mUv) mUv = x;
        tokens.add(x.toString());
        tokens.add(" ");
      }
    }

    if (hasFaceNormal) {
      tokens.add("  fn: ");
      int x = faces[i++];
      if (x > mNormal) mNormal = x;
      tokens.add(x.toString());
      tokens.add(" ");
    }

    if (hasFaceVertexNormal) {
      tokens.add("  n: ");
      for (int j = 0; j < d; j++) {
        int x = faces[i++];
        if (x > mNormal) mNormal = x;
        tokens.add(x.toString());
        tokens.add(" ");
      }
    }

    if (hasFaceColor) {
      tokens.add("  fc: ");
      int x = faces[i++];
      tokens.add(x.toString());
      tokens.add(" ");
    }

    if (hasFaceVertexColor) {
      tokens.add("  c: ");
      for (int j = 0; j < d; j++) {
        int x = faces[i++];
        tokens.add(x.toString());
        tokens.add(" ");
      }
    }
    if (verbose) {
      print(tokens.join(""));
    }
  }

  print("processed faces: ${count}");
  print("max Material: ${mMat}");
  print("max Vertex: ${mVertex}");
  print("max UV: ${mUv}");
  print("max Normal: ${mNormal}");
}

void ShowInfo(Map json) {
  List materials = json["materials"];
  List<double> vertices = json["vertices"];
  List<double> normals = json["normals"];
  List<double> colors = json["colors"];
  List<double> uvs = [];
  assert(json["uvs"].length <= 1);
  if (json["uvs"].length == 1) {
    uvs = json["uvs"][0];
  }
  List<int> faces = json["faces"];
  List bones = json["bones"];
  List<Map> morphTargets = json["morphTargets"];
  if (morphTargets == null) morphTargets = [];

  List<int> skinIndices = json["skinIndices"];
  List<double> skinWeights = json["skinWeights"];
  Map animation = json["animation"];
  var metadata = json["metadata"];

  print("meta: ${metadata}");
  print("materials: ${materials.length}");
  print("vertices: ${vertices.length}  ${vertices.length ~/ 3}");
  print("normals: ${normals.length} ${normals.length ~/3}");
  print("colors: ${colors.length}");
  print("uvs: ${uvs.length}  ${uvs.length ~/ 2}");
  print("faces: ${faces.length} ${faces.length ~/ 3}");
  print("bones: ${bones.length}");
  print("skinIndices: ${skinIndices.length} ${skinIndices.length ~/ 2}");
  print("skinWeigths: ${skinWeights.length}");
  print("animation: ${animation['name']}");
  for (Map m in morphTargets) {
    print("morphTarget: ${m['name']} ${m['vertices'].length}");
  }
}

void main(List<String> arguments) {
  final parser = new ArgParser()..addFlag("faces", negatable: false, abbr: 'f');

  ArgResults argResults = parser.parse(arguments);
  List<String> paths = argResults.rest;
  for (var p in paths) {
    print("reading  ${p}");

    print("reading mesh from: ${p}");
    var meshData = new File(p).readAsStringSync();
    var json = JSON.decode(meshData);
    ShowInfo(json);
    DumpFaces(json, argResults['faces']);

    List<GeometryBuilder> gb = ReadThreeJsMeshes(json);
    print(gb);
    List<Bone> skeleton = ReadThreeJsBones(json);

    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    print(">>>>>>>>>> Bones");
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    for (Bone b in skeleton) {
      print(b);
    }
    SkeletalAnimation anim = ReadThreeJsAnimation(json, skeleton);

    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    print(">>>>>>>>>> BoneAnims");
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    for (BoneAnimation ba in anim.animList) {
      print(ba);
    }

    VM.Matrix4 globalOffsetTransform = new VM.Matrix4.identity();

    AnimatedSkeleton animatedSkeleton = new AnimatedSkeleton(skeleton.length);
    UpdateAnimatedSkeleton(
        skeleton, globalOffsetTransform, anim, animatedSkeleton, 0.0);

    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    print(">>>>>>>>>> Animated");
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    for (int i = 0; i < skeleton.length; i++) {
      print(skeleton[i].boneName);
      print("global");
      print(animatedSkeleton.globalTransforms[i]);
      print("skinning");
      print(animatedSkeleton.skinningTransforms[i]);
    }
  }
  return;
}
