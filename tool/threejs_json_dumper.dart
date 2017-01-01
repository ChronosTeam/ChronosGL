// cf.: https://github.com/mrdoob/three.js/blob/dev/src/loaders/JSONLoader.js
//      https://github.com/mrdoob/three.js/wiki/JSON-Model-format-3

import 'dart:io';
import 'dart:convert';
import 'package:args/args.dart';

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
  final parser = new ArgParser()
    ..addFlag("verbose", negatable: false, abbr: 'v');

  ArgResults argResults = parser.parse(arguments);
  List<String> paths = argResults.rest;
  for (var p in paths) {
    print("reading  ${p}");

    print("reading mesh from: ${p}");
    var meshData = new File(p).readAsStringSync();
    var json = JSON.decode(meshData);
    ShowInfo(json);
    DumpFaces(json, argResults['verbose']);
  }
  return;
}
