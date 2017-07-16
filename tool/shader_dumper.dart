// This tool is very much incomplete.
// The idea is to dump a shader in text form so it can then be
// processed by other tools, e.g.
// * glslangValidator
// Note, that for simple verification we also have
// test/shader_syntax.dart

import 'package:chronosgl/src/shader/lib.dart';

void main(List<String> args) {
  if (args.length != 1) {
    throw "no args give";
  }
  switch (args[0]) {
  }

  print(lightFragmentShaderBlinnPhong);
}
