import 'package:chronosgl/chronosshader.dart';

void main(List<String> args) {
  if (args.length != 1) {
    throw "no args give";
  }
  switch (args[0]) {
  }

  List<ShaderObject> shaders = createStandardShader(true, [
    new LightConfig(typeLightDir, typeShadowNone),
    new LightConfig(typeLightSpot, typeShadowNone),
    new LightConfig(typeLightPoint, typeShadowNone),
    new LightConfig(typeLightHemi, typeShadowNone),
  ]);

  print (shaders[1].shader);
}
