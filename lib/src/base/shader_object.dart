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

const String VarTypeFloat = "float";
const String VarTypeVec2 = "vec2";
const String VarTypeVec3 = "vec3";
const String VarTypeVec4 = "vec4";

const String VarTypeMat3 = "mat3";
const String VarTypeMat4 = "mat4";
const String VarTypeUvec4 = "uvec4";
const String VarTypeUvec3 = "uvec3";
const String VarTypeUvec2 = "uvec2";
const String VarTypeSampler2D = "sampler2D";
const String VarTypeSampler2DShadow = "sampler2DShadow";
const String VarTypeSamplerCube = "samplerCube";
const String VarTypeInt = "int";
const String VarTypeIndex = "index";

class ShaderVarDesc {
  final String type;
  final String purpose;
  final int arraySize;

  ShaderVarDesc(this.type, this.purpose, {this.arraySize: 0});

  int GetSize() {
    switch (type) {
      case VarTypeFloat:
        return 1;
      case VarTypeVec2:
        return 2;
      case VarTypeVec3:
      case VarTypeUvec3:
        return 3;
      case VarTypeVec4:
      case VarTypeUvec4:
        return 4;
      default:
        assert(false);
        return -1;
    }
  }

  bool IsScalarTypeFloat() {
    switch (type) {
      case VarTypeFloat:
      case VarTypeVec2:
      case VarTypeVec3:
      case VarTypeVec4:
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
const String oFragColor = "oFragColor";
// ===========================================================
// Misc Controls
// ===========================================================
const int prefixControl = 0x63; // 'c;

const String cDepthTest = "cDepthTest";
const String cDepthWrite = "cDepthWrite";
const String cBlendEquation = "cBlendEquation";
const String cStencilFunc = "cStencilFunc";
const String cNumItems = "cNumItems";
const String cNumInstances = "cNumInstances";
const String cDrawMode = "cDrawMode";

// ===========================================================
// TransformFeedback
// ===========================================================

const int prefixTransform = 0x74; // 't';

const String tPosition = "tPosition";
const String tSpeed = "tSpeed";
const String tForce = "tForce";
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
const String vDepth = "vDepth";

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
const String uAnimationTable = "uAnimationTable";

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
const String uCenter2 = "uCenter2";
const String uPointSize = "uPointSize";
const String uScale = "uScale";
const String uAngle = "uAngle";
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
const String uRange = "uRange";
const String uDirection = "uDirection";

const String uMaterial = "uMaterial";

const String uLightDescs = "uLightDescs";
const String uLightCount = "uLightCount";
const String uLightTypes = "uLightTypes";

final Map<String, ShaderVarDesc> _VarsDb = {
  eArray: new ShaderVarDesc(VarTypeIndex, ""),
  eArrayType: new ShaderVarDesc(VarTypeInt, ""),

  //
  cBlendEquation: new ShaderVarDesc("", ""),
  cDepthWrite: new ShaderVarDesc("", ""),
  cDepthTest: new ShaderVarDesc("", ""),
  cNumItems: new ShaderVarDesc("", ""),
  cNumInstances: new ShaderVarDesc("", ""),
  cDrawMode: new ShaderVarDesc("", ""),
  cStencilFunc: new ShaderVarDesc("", ""),

  // transform vars
  tPosition: new ShaderVarDesc(VarTypeVec3, ""),
  tSpeed: new ShaderVarDesc(VarTypeVec3, ""),
  tForce: new ShaderVarDesc(VarTypeVec3, ""),

  // attribute vars
  // This should also contain an alpha channel
  aColor: new ShaderVarDesc(VarTypeVec3, "per vertex color"),
  aColorAlpha: new ShaderVarDesc(VarTypeVec4, "per vertex color"),
  aVertexPosition: new ShaderVarDesc(VarTypeVec3, "vertex coordinates"),
  aTextureCoordinates: new ShaderVarDesc(VarTypeVec2, "texture uvs"),
  aNormal: new ShaderVarDesc(VarTypeVec3, "vertex normals"),
  aBinormal: new ShaderVarDesc(VarTypeVec3, "vertex binormals"),
  aCenter: new ShaderVarDesc(VarTypeVec4, "for wireframe"),
  aPointSize: new ShaderVarDesc(VarTypeFloat, ""),
  aBoneIndex: new ShaderVarDesc(VarTypeVec4, ""),
  aBoneWeight: new ShaderVarDesc(VarTypeVec4, ""),
  aTangent: new ShaderVarDesc(VarTypeVec3, "vertex tangents"),
  aBitangent: new ShaderVarDesc(VarTypeVec3, "vertex btangents"),
  iaRotation: new ShaderVarDesc(VarTypeVec4, ""),
  iaTranslation: new ShaderVarDesc(VarTypeVec3, ""),
  iaScale: new ShaderVarDesc(VarTypeVec3, ""),

  // Varying
  vColor: new ShaderVarDesc(VarTypeVec3, "per vertex color"),
  vTextureCoordinates: new ShaderVarDesc(VarTypeVec2, ""),
  vLightWeighting: new ShaderVarDesc(VarTypeVec3, ""),
  vNormal: new ShaderVarDesc(VarTypeVec3, ""),
  vVertexPosition: new ShaderVarDesc(VarTypeVec3, "vertex coordinates"),
  vPositionFromLight: new ShaderVarDesc(VarTypeVec4, "delta from light"),
  vCenter: new ShaderVarDesc(VarTypeVec4, "for wireframe"),
  vDepth: new ShaderVarDesc(VarTypeFloat, "depth for shadowmaps"),

  // uniform vars
  uTransformationMatrix: new ShaderVarDesc(VarTypeMat4, ""),
  //uModelViewMatrix: new ShaderVarDesc(VarTypeMat4, ""),
  uModelMatrix: new ShaderVarDesc(VarTypeMat4, ""),
  //uViewMatrix: new ShaderVarDesc(VarTypeMat4, ""),
  uNormalMatrix: new ShaderVarDesc(VarTypeMat3, ""),
  //uPerspectiveMatrix: new ShaderVarDesc(VarTypeMat4, ""),
  uPerspectiveViewMatrix: new ShaderVarDesc(VarTypeMat4, ""),
  uLightPerspectiveViewMatrix: new ShaderVarDesc(VarTypeMat4, ""),

  uShadowMap: new ShaderVarDesc(VarTypeSampler2DShadow, ""),

  uTexture: new ShaderVarDesc(VarTypeSampler2D, ""),
  uTexture2: new ShaderVarDesc(VarTypeSampler2D, ""),
  uTexture3: new ShaderVarDesc(VarTypeSampler2D, ""),
  uTexture4: new ShaderVarDesc(VarTypeSampler2D, ""),
  uSpecularMap: new ShaderVarDesc(VarTypeSampler2D, ""),
  uNormalMap: new ShaderVarDesc(VarTypeSampler2D, ""),
  uBumpMap: new ShaderVarDesc(VarTypeSampler2D, ""),
  uDepthMap: new ShaderVarDesc(VarTypeSampler2D, ""),
  uCubeTexture: new ShaderVarDesc(VarTypeSamplerCube, ""),
  uAnimationTable: new ShaderVarDesc(VarTypeSampler2D, ""),

  uTime: new ShaderVarDesc(VarTypeFloat, "time since program start in sec"),
  uCameraNear: new ShaderVarDesc(VarTypeFloat, ""),
  uCameraFar: new ShaderVarDesc(VarTypeFloat, ""),
  uFogNear: new ShaderVarDesc(VarTypeFloat, ""),
  uFogFar: new ShaderVarDesc(VarTypeFloat, ""),
  uPointSize: new ShaderVarDesc(VarTypeFloat, ""),
  uScale: new ShaderVarDesc(VarTypeFloat, ""),
  uAngle: new ShaderVarDesc(VarTypeFloat, ""),
  uCanvasSize: new ShaderVarDesc(VarTypeVec2, ""),
  uCenter2: new ShaderVarDesc(VarTypeVec2, ""),
  uCutOff: new ShaderVarDesc(VarTypeFloat, ""),
  uShininess: new ShaderVarDesc(VarTypeFloat, ""),
  uShadowBias: new ShaderVarDesc(VarTypeFloat, ""),
  uOpacity: new ShaderVarDesc(VarTypeFloat, ""),
  uColor: new ShaderVarDesc(VarTypeVec3, ""),
  uColorEmissive: new ShaderVarDesc(VarTypeVec3, ""),
  uColorSpecular: new ShaderVarDesc(VarTypeVec3, ""),
  uColorDiffuse: new ShaderVarDesc(VarTypeVec3, ""),
  uColorAlpha: new ShaderVarDesc(VarTypeVec4, ""),
  uColorAlpha2: new ShaderVarDesc(VarTypeVec4, ""),
  uEyePosition: new ShaderVarDesc(VarTypeVec3, ""),
  uMaterial: new ShaderVarDesc(VarTypeMat4, ""),
  uRange: new ShaderVarDesc(VarTypeVec2, ""),
  uDirection: new ShaderVarDesc(VarTypeVec2, ""),

  uBoneMatrices: new ShaderVarDesc(VarTypeMat4, "", arraySize: kMaxBones),

  uLightDescs: new ShaderVarDesc(VarTypeMat4, "", arraySize: kMaxLights),
  uLightCount: new ShaderVarDesc(VarTypeFloat, ""),
  uLightTypes: new ShaderVarDesc(VarTypeFloat, "", arraySize: kMaxLights),

  uBumpScale: new ShaderVarDesc(VarTypeFloat, "for bump maps"),
  uNormalScale: new ShaderVarDesc(VarTypeFloat, "for normal maps"),
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

  List<String> attributeVars = [];
  List<String> uniformVars = [];
  List<String> varyingVars = [];
  List<String> transformVars = []; // "transformFeedbackVaryings"
  // start with one to deliberately exercise corner cases
  int _nextLayoutPos = 0;
  Map<String, int> _canonicalToLayoutPos = {};

  ShaderObject(this.name);

  void AddAttributeVars(List<String> names) {
    assert(shader == null);

    for (String n in names) {
      assert(_VarsDb.containsKey(n));
      assert(!attributeVars.contains(n));
      attributeVars.add(n);
    }
    attributeVars.sort();
  }

  void AddUniformVars(List<String> names) {
    assert(shader == null);

    for (String n in names) {
      assert(_VarsDb.containsKey(n));
      assert(!uniformVars.contains(n));
      uniformVars.add(n);
    }
    uniformVars.sort();
  }

  void AddVaryingVars(List<String> names) {
    assert(shader == null);

    for (String n in names) {
      assert(_VarsDb.containsKey(n));
      assert(!varyingVars.contains(n));
      varyingVars.add(n);
    }
    varyingVars.sort();
  }

  void AddTransformVars(List<String> names) {
    assert(shader == null);

    for (String n in names) {
      assert(_VarsDb.containsKey(n));
      assert(!transformVars.contains(n));
      transformVars.add(n);
    }
    transformVars.sort();
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
  String _CreateShader(
      bool addWrapperForMain, List<String> body, List<String> prolog) {
    assert(shader == null);
    // Hack
    bool isFragmentShader = attributeVars.isEmpty;
    List<String> out = [
      "#version 300 es",
      "precision highp float;",
      "precision highp sampler2DShadow;",
      ""
    ];
    for (String a in attributeVars) {
      ShaderVarDesc d = _VarsDb[a];
      int pos = GetLayoutPos(a);
      out.add("layout (location=${pos}) in ${d.type} ${a};");
    }
    out.add("");

    String modifier = isFragmentShader ? "in" : "out";
    if (isFragmentShader) {
      out.add("out vec4 ${oFragColor};");
    }

    for (String v in varyingVars) {
      ShaderVarDesc d = _VarsDb[v];
      out.add("${modifier} ${d.type} ${v};");
    }
    for (String v in transformVars) {
      ShaderVarDesc d = _VarsDb[v];
      out.add("${modifier} ${d.type} ${v};");
    }
    out.add("");
    for (String v in uniformVars) {
      ShaderVarDesc d = _VarsDb[v];
      String suffix = d.arraySize == 0 ? "" : "[${d.arraySize}]";
      out.add("uniform ${d.type} ${v}${suffix};");
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

  int GetLayoutPos(String canonical) {
    int pos = _canonicalToLayoutPos[canonical];
    if (pos == null) {
      pos = _nextLayoutPos;
      ++_nextLayoutPos;
      _canonicalToLayoutPos[canonical] = pos;
    }
    return pos;
  }

   Map<String, int> GetLayoutMap() => _canonicalToLayoutPos;
}
