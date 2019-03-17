import 'dart:io';

List<String> kDirs = [
  "lib/src/core/lib.dart",
  "lib/src/core",
  "lib/src/scene/lib.dart",
  "lib/src/scene",
  "lib/src/shader/lib.dart",
  "lib/src/shader",
  "lib/src/shape/lib.dart",
  "lib/src/shape",
  "lib/src/animation/lib.dart",
  "lib/src/animation",
  "lib/src/importer/lib.dart",
  "lib/src/importer",
  "lib/src/webhelper/lib.dart",
  "lib/src/webhelper",
  "lib/src/polygon/lib.dart",
  "lib/src/polygon",
  "lib/src/misc/lib.dart",
  "lib/src/misc",
];

final Set<String> gAlreadyProcessed = <String>{};

void MaybeEmitDocumentation(List<String> comment_block, String line) {
  if (comment_block[0].startsWith("#")) {
    for (String line in comment_block) {
      print(line);
    }
    print("");
  } else if (line.startsWith("class") || line.startsWith("abstract")) {
    print ("## ${line.substring(0, line.length-1)}");
    for (String line in comment_block) {
      print(line);
    }
    print("");
  }
}

void ExtractDoc(File file) {
  List<String> comment_block = <String>[];

  if (gAlreadyProcessed.contains(file.path)) return;
  gAlreadyProcessed.add(file.path);
  for (String line in file.readAsLinesSync()) {
    if (!line.startsWith("///")) {
      if (comment_block.isNotEmpty) {
        MaybeEmitDocumentation(comment_block, line);
        comment_block.clear();
      }
      continue;
    }
    if (line.length < 4)
      comment_block.add("");
    else
      comment_block.add(line.substring(4));
  }

  if (comment_block.isNotEmpty) {
    MaybeEmitDocumentation(comment_block, "");
  }
}

void main(List<String> args) {
  if (args.length == 0) {
    args = kDirs;
  }

  for (String d in args) {
    if (FileSystemEntity.isDirectorySync(d)) {
      var dir = new Directory(d);
      List<FileSystemEntity> content =
          dir.listSync(recursive: true, followLinks: false);
      for (FileSystemEntity f in content) {
        if (f is File) {
          ExtractDoc(f);
        }
      }
    } else if (FileSystemEntity.isFileSync(d)) {
      ExtractDoc(new File(d));
    }
  }
}
