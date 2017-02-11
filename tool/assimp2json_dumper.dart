//https://github.com/acgessler/assimp2json

import 'dart:io';
import 'dart:convert';
import 'package:args/args.dart';

import '../lib/src/base/lib.dart';
import '../lib/src/importer/lib.dart';
import '../lib/src/animation/lib.dart';

void ShowInfo(Map json) {
  for (String k in json.keys) {
    var val = json[k];
    if (val is List || val is Map) {
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
    var meshData = new File(p).readAsStringSync();
    Map json = JSON.decode(meshData);
    List<GeometryBuilder> meshes = ReadAssimp2JsonMeshes(json);
  }
  return;
}
