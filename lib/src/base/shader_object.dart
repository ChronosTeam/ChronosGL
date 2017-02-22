part of base;

const int kMaxLights = 4;
const int kMaxBones = 128;

const int lightTypeInvalid = 0;
const int lightTypeDirectional = 1;
const int lightTypeSpot = 2;
const int lightTypePoint = 3;

const String lightTypeInvalidFloat = "${lightTypeInvalid}.0";
const String lightTypeDirectionalFloat = "${lightTypeDirectional}.0";
const String lightTypeSpotFloat = "${lightTypeSpot}.0";
const String lightTypePointFloat = "${lightTypePoint}.0";

class ShaderVarDesc {
  final String type;
  final String purpose;
  final int arraySize;

  ShaderVarDesc(this.type, this.purpose, {this.arraySize: 0});

  int GetSize() {
    switch (type) {
      case "float":
        return 1;
      case "vec2":
        return 2;
      case "vec3":
        return 3;
      case "vec4":
        return 4;
      default:
        assert(false);
        return -1;
    }
  }

  bool IsScalarTypeFloat() {
    switch (type) {
      case "float":
      case "vec2":
      case "vec3":
      case "vec4":
        return true;
      default:
        return false;
    }
  }
}

// Used both as enum and as string. The latter allows for a limited form
// of syntax checking inside shader programs.
const int prefixElement = 0x65; // 'e';
const String eArray = "eArray"; // element array
const String eArrayType = "eArrayType"; // element array
// ===========================================================
// Misc Controls
// ===========================================================
const int prefixControl = 0x63; // 'c;

const String cDepthTest = "cDepthTest";
const String cDepthWrite = "cDepthWrite";
const String cBlend = "cBlend";
const String cBlendEquation = "cBlendEquation";
const String cNumItems = "cNumItems";
const String cNumInstances = "cNumInstances";
const String cDrawMode = "cDrawMode";
// ===========================================================
// Attributes
// ===========================================================
const int prefixAttribute = 0x61; // 'a';

const String aColor = "aColors";
const String aColorAlpha = "aColorAlpha";
const String aVertexPosition = "aVertexPosition";
const String aTextureCoordinates = "aTextureCoordinates";
const String aNormal = "aNormal";
const String aBinormal = "aBinormal";
const String aTangent = "aTangent";
const String aBitangent = "aBitangent";

//
const String aCenter = "aCenter";
// For point sprites
const String aPointSize = "aPointSize";
// For animations
const String aBoneIndex = "aBoneIndex";
const String aBoneWeight = "aBoneWeight";

// ===========================================================
// Instancer
// ===========================================================
const int prefixInstancer = 0x69; // 'i';

const String iaRotation = "iaRotation";
const String iaTranslation = "iaTranslation";
const String iaScale = "iaScale";

// ===========================================================
// Varying
// ===========================================================
const String vColor = "vColor";
const String vTextureCoordinates = "vTextureCoordinates";
const String vLightWeighting = "vLightWeighting";
const String vNormal = "vNormal";
const String vVertexPosition = "vVertexPosition";
const String vCenter = "vCenter";
const String vPositionFromLight = "vPositionFromLight";

// ===========================================================
// Uniform
// ===========================================================
const int prefixUniform = 0x75; // 'u';

const String uTransformationMatrix = "uTransformationMatrix";
//const String uModelViewMatrix = "uModelViewMatrix";
//const String uViewMatrix = "uViewMatrix";
const String uNormalMatrix = "uNormalMatrix";

const String uPerspectiveViewMatrix = "uPerspectiveViewMatrix";
const String uLightPerspectiveViewMatrix = "uLightPerspectiveViewMatrix";

const String uModelMatrix = "uModelMatrix";

const String uTexture = "uTexture";
const String uCubeTexture = "uCubeTexture";
const String uTexture2 = "uTexture2";
const String uTexture3 = "uTexture3";
const String uTexture4 = "uTexture4";
const String uBumpMap = "uBumpMap";
const String uNormalMap = "uNormalMap";
const String uSpecularMap = "uSpecularMap";

const String uDepthMap = "uDepthMap";
const String uShadowMap = "uShadowMap";

const String uTime = "uTime";
const String uColor = "uColor";
const String uColorAlpha2 = "uColorAlpha2";
const String uColorAlpha = "uColorAlpha";
const String uColorEmissive = "uColorEmissive";
const String uColorDiffuse = "uColorDiffuse";
const String uColorSpecular = "uColorSpecular";
const String uCameraNear = "uCameraNear";
const String uCameraFar = "uCameraFar";
const String uCanvasSize = "uCanvasSize";
const String uPointSize = "uPointSize";
const String uFogNear = "uFogNear";
const String uFogFar = "uFogFar";
const String uEyePosition = "uEyePosition";
const String uBoneMatrices = "uBoneMatrices";
const String uBumpScale = "uBumpScale";
const String uNormalScale = "uNormalScale";
const String uCutOff = "uCutOff";
const String uShininess = "uShininess";
const String uOpacity = "uOpacity";
const String uShadowBias = "uShadowBias";

const String uMaterial = "uMaterial";

const String uLightDescs = "uLightDescs";
const String uLightCount = "uLightCount";
const String uLightTypes = "uLightTypes";

final Map<String, ShaderVarDesc> _VarsDb = {
  eArray: new ShaderVarDesc("index", ""),
  eArrayType: new ShaderVarDesc("int", ""),

  //
  cBlend: new ShaderVarDesc("", ""),
  cBlendEquation: new ShaderVarDesc("", ""),
  cDepthWrite: new ShaderVarDesc("", ""),
  cDepthTest: new ShaderVarDesc("", ""),
  cNumItems: new ShaderVarDesc("", ""),
  cNumInstances: new ShaderVarDesc("", ""),
  cDrawMode: new ShaderVarDesc("", ""),

  // attribute vars
  // This should also contain an alpha channel
  aColor: new ShaderVarDesc("vec3", "per vertex color"),
  aColorAlpha: new ShaderVarDesc("vec4", "per vertex color"),
  aVertexPosition: new ShaderVarDesc("vec3", "vertex coordinates"),
  aTextureCoordinates: new ShaderVarDesc("vec2", "texture uvs"),
  aNormal: new ShaderVarDesc("vec3", "vertex normals"),
  aBinormal: new ShaderVarDesc("vec3", "vertex binormals"),
  aCenter: new ShaderVarDesc("vec4", "for wireframe"),
  aPointSize: new ShaderVarDesc("float", ""),
  aBoneIndex: new ShaderVarDesc("vec4", ""),
  aBoneWeight: new ShaderVarDesc("vec4", ""),
  aTangent: new ShaderVarDesc("vec3", "vertex tangents"),
  aBitangent: new ShaderVarDesc("vec3", "vertex btangents"),
  iaRotation: new ShaderVarDesc("vec4", ""),
  iaTranslation: new ShaderVarDesc("vec3", ""),
  iaScale: new ShaderVarDesc("vec3", ""),

  // Varying
  vColor: new ShaderVarDesc("vec3", "per vertex color"),
  vTextureCoordinates: new ShaderVarDesc("vec2", ""),
  vLightWeighting: new ShaderVarDesc("vec3", ""),
  vNormal: new ShaderVarDesc("vec3", ""),
  vVertexPosition: new ShaderVarDesc("vec3", "vertex coordinates"),
  vPositionFromLight: new ShaderVarDesc("vec4", "delta from light"),
  vCenter: new ShaderVarDesc("vec4", "for wireframe"),

  // uniform vars
  uTransformationMatrix: new ShaderVarDesc("mat4", ""),
  //uModelViewMatrix: new ShaderVarDesc("mat4", ""),
  uModelMatrix: new ShaderVarDesc("mat4", ""),
  //uViewMatrix: new ShaderVarDesc("mat4", ""),
  uNormalMatrix: new ShaderVarDesc("mat3", ""),
  //uPerspectiveMatrix: new ShaderVarDesc("mat4", ""),
  uPerspectiveViewMatrix: new ShaderVarDesc("mat4", ""),
  uLightPerspectiveViewMatrix: new ShaderVarDesc("mat4", ""),

  uShadowMap: new ShaderVarDesc("sampler2D", ""),

  uTexture: new ShaderVarDesc("sampler2D", ""),
  uTexture2: new ShaderVarDesc("sampler2D", ""),
  uTexture3: new ShaderVarDesc("sampler2D", ""),
  uTexture4: new ShaderVarDesc("sampler2D", ""),
  uSpecularMap: new ShaderVarDesc("sampler2D", ""),
  uNormalMap: new ShaderVarDesc("sampler2D", ""),
  uBumpMap: new ShaderVarDesc("sampler2D", ""),
  uDepthMap: new ShaderVarDesc("sampler2D", ""),
  uCubeTexture: new ShaderVarDesc("samplerCube", ""),

  uTime: new ShaderVarDesc("float", "time since program start in sec"),
  uCameraNear: new ShaderVarDesc("float", ""),
  uCameraFar: new ShaderVarDesc("float", ""),
  uFogNear: new ShaderVarDesc("float", ""),
  uFogFar: new ShaderVarDesc("float", ""),
  uPointSize: new ShaderVarDesc("float", ""),
  uCanvasSize: new ShaderVarDesc("vec2", ""),
  uCutOff: new ShaderVarDesc("float", ""),
  uShininess: new ShaderVarDesc("float", ""),
  uShadowBias: new ShaderVarDesc("float", ""),
  uOpacity: new ShaderVarDesc("float", ""),
  uColor: new ShaderVarDesc("vec3", ""),
  uColorEmissive: new ShaderVarDesc("vec3", ""),
  uColorSpecular: new ShaderVarDesc("vec3", ""),
  uColorDiffuse: new ShaderVarDesc("vec3", ""),
  uColorAlpha: new ShaderVarDesc("vec4", ""),
  uColorAlpha2: new ShaderVarDesc("vec4", ""),
  uEyePosition: new ShaderVarDesc("vec3", ""),
  uMaterial: new ShaderVarDesc("mat4", ""),
  uBoneMatrices: new ShaderVarDesc("mat4", "", arraySize: kMaxBones),

  uLightDescs: new ShaderVarDesc("mat4", "", arraySize: kMaxLights),
  uLightCount: new ShaderVarDesc("float", ""),
  uLightTypes: new ShaderVarDesc("float", "", arraySize: kMaxLights),

  uBumpScale: new ShaderVarDesc("float", "for bump maps"),
  uNormalScale: new ShaderVarDesc("float", "for normal maps"),
};

void IntroduceNewShaderVar(String canonical, ShaderVarDesc desc) {
  assert(!_VarsDb.containsKey(canonical));
  _VarsDb[canonical] = desc;
}

ShaderVarDesc RetrieveShaderVarDesc(String canonical) {
  return _VarsDb[canonical];
}

// ShaderObject describes a shader (either fragment or vertex) and its
// interface to the world on a syntactical (uncompiled) level.
// Protocol:
// SetBody(WithMain) must be called last;
class ShaderObject {
  String name;
  String shader;

  Map<String, String> attributeVars = {};
  Map<String, String> uniformVars = {};
  Map<String, String> varyingVars = {};

  ShaderObject(this.name);

  void AddAttributeVar(String canonicalName, [String actualName = null]) {
    assert(shader == null);
    assert(_VarsDb.containsKey(canonicalName));
    assert(!attributeVars.containsKey(canonicalName));
    if (actualName == null) actualName = canonicalName;
    attributeVars[canonicalName] = actualName;
  }

  void AddAttributeVars(List<String> names) {
    assert(shader == null);

    for (String n in names) {
      assert(_VarsDb.containsKey(n));
      assert(!attributeVars.containsKey(n));
      attributeVars[n] = n;
    }
  }

  void AddUniformVar(String canonicalName, [String actualName = null]) {
    assert(shader == null);
    assert(_VarsDb.containsKey(canonicalName));
    assert(!uniformVars.containsKey(canonicalName));
    if (actualName == null) actualName = canonicalName;
    uniformVars[canonicalName] = actualName;
  }

  void AddUniformVars(List<String> names) {
    assert(shader == null);

    for (String n in names) {
      assert(_VarsDb.containsKey(n));
      assert(!uniformVars.containsKey(n));
      uniformVars[n] = n;
    }
  }

  void AddVaryingVar(String canonicalName, [String actualName = null]) {
    assert(shader == null);
    assert(_VarsDb.containsKey(canonicalName));
    assert(!varyingVars.containsKey(canonicalName));
    if (actualName == null) actualName = canonicalName;
    varyingVars[canonicalName] = actualName;
  }

  void AddVaryingVars(List<String> names) {
    assert(shader == null);

    for (String n in names) {
      assert(_VarsDb.containsKey(n));
      assert(!varyingVars.containsKey(n));
      varyingVars[n] = n;
    }
  }

  void SetBodyWithMain(List<String> body, {List<String> prolog = null}) {
    assert(shader == null);
    shader = _CreateShader(true, body, prolog);
  }

  void SetBody(List<String> body, {List<String> prolog = null}) {
    assert(shader == null);
    shader = _CreateShader(false, body, prolog);
  }

  // InitializeShader updates the shader field from header and body.
  // If you have set shader manually do not call this.
  String _CreateShader(bool addWrapperForMain, List<String> body, prolog) {
    assert(shader == null);
    List<String> out = [];
    out.add("precision highp float;");
    out.add("");
    for (String v in attributeVars.keys) {
      ShaderVarDesc d = _VarsDb[v];
      out.add("attribute ${d.type} ${attributeVars[v]};");
    }
    out.add("");
    for (String v in varyingVars.keys) {
      ShaderVarDesc d = _VarsDb[v];
      out.add("varying ${d.type} ${varyingVars[v]};");
    }
    out.add("");
    for (String v in uniformVars.keys) {
      ShaderVarDesc d = _VarsDb[v];
      String suffix = d.arraySize == 0 ? "" : "[${d.arraySize}]";
      out.add("uniform ${d.type} ${uniformVars[v]}${suffix};");
    }
    out.add("");

    if (prolog != null) out.addAll(prolog);

    if (addWrapperForMain) {
      out.add("void main(void) {");
    }
    out.addAll(body);
    if (addWrapperForMain) {
      out.add("}");
    }

    return out.join("\n");
  }
}
