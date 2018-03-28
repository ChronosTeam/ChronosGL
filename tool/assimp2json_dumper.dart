//https://github.com/acgessler/assimp2json

import 'dart:io';
import 'dart:convert';

import 'package:args/args.dart';
import 'package:vector_math/vector_math.dart' as VM;

import 'package:chronosgl/src/core/lib.dart';
import 'package:chronosgl/src/importer/lib.dart';
import 'package:chronosgl/src/animation/lib.dart';

void ShowInfo(Map json) {
  for (String k in json.keys) {
    Object val = json[k];
    if (val is Map) {
      print("$k ${val.length}");
    } else if (val is List) {
      print("$k ${val.length}");
    } else {
      print("$k ${val}");
    }
  }
}

void main(List<String> arguments) {
  final parser = new ArgParser()..addFlag("faces", negatable: false, abbr: 'f');

  ArgResults argResults = parser.parse(arguments);
  List<String> paths = argResults.rest;
  for (var p in paths) {
    print("reading  ${p}");

    print("reading mesh from: ${p}");
    String meshData = new File(p).readAsStringSync();
    Map<String, List> jsonData = json.decode(meshData);

    List<Bone> skeleton = ImportSkeletonFromAssimp2Json(jsonData);

    print("Bones: ${skeleton.length}");
    GeometryBuilder gb = ImportGeometryFromAssimp2JsonMesh(jsonData["meshes"][0], skeleton);
    print(gb);

    SkeletalAnimation anim =
        ImportAnimationFromAssimp2Json(jsonData["animations"][0], skeleton);
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    print(">>>>>>>>>> Bones");
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    for (Bone b in skeleton) {
      print(b);
    }

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
