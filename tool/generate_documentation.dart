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

Set<String> gAlreadyProcessed = new Set<String>();

void ExtractDoc(File file) {
  if (gAlreadyProcessed.contains(file.path)) return;
  gAlreadyProcessed.add(file.path);
  int consecutive = 0;
  for (String line in file.readAsLinesSync()) {
    if (!line.startsWith("///")) {
      if (consecutive > 0) {
        print("");
        consecutive = 0;
      }
      continue;
    }
    consecutive++;
    if (line.length < 4)
      print("");
    else
      print(line.substring(4));
  }

  if (consecutive > 0) print("");
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
