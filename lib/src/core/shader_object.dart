part of core;

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
  const ShaderVarDesc(this.type, this.purpose, {this.arraySize = 0});

  final String type;
  final String purpose;
  final int arraySize;

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
const String oFragColor = "oFragColor";
// ===========================================================
// Misc Controls
// ===========================================================
const int prefixControl = 0x63; // 'c;

const String cDepthFunc = "cDepthFunc";
const String cDepthTest = "cDepthTest";
const String cDepthWrite = "cDepthWrite";
const String cBlendEquation = "cBlendEquation";
const String cStencilFunc = "cStencilFunc";
const String cStencilOp = "cStencilOp";
const String cNumItems = "cNumItems";
const String cNumInstances = "cNumInstances";
const String cDrawMode = "cDrawMode";
const String cColorWrite = "cColorWrite";
const String cStencilWrite = "cStencilWrite";

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

const String aColor = "aColor";
const String aColorAlpha = "aColorAlpha";
const String aPosition = "aPosition";
const String aTexUV = "aTexUV";
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
const String iaColor = "iaColor";

// ===========================================================
// Varying
// ===========================================================
const String vColor = "vColor";
const String vTexUV = "vTexUV";
const String vLightWeighting = "vLightWeighting";
const String vNormal = "vNormal";
const String vPosition = "vPosition";
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
const String uConvolutionMatrix = "uConvolutionMatrix";

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
const String uColorAmbient = "uAmbientDiffuse";
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

/// This map can be augmented with custom entries via
/// IntroduceNewShaderVar()
/// All shaders-vars associated with shaders must be in this map.
final Map<String, ShaderVarDesc> _VarsDb = {
  // controls
  cBlendEquation: const ShaderVarDesc("", ""),
  cDepthWrite: const ShaderVarDesc("", ""),
  cDepthTest: const ShaderVarDesc("", ""),
  cStencilFunc: const ShaderVarDesc("", ""),

  // transform vars
  tPosition: const ShaderVarDesc(VarTypeVec3, ""),
  tSpeed: const ShaderVarDesc(VarTypeVec3, ""),
  tForce: const ShaderVarDesc(VarTypeVec3, ""),

  // attribute vars
  // This should also contain an alpha channel
  aColor: const ShaderVarDesc(VarTypeVec3, "per vertex color"),
  aColorAlpha: const ShaderVarDesc(VarTypeVec4, "per vertex color"),
  aPosition: const ShaderVarDesc(VarTypeVec3, "vertex coordinates"),
  aTexUV: const ShaderVarDesc(VarTypeVec2, "texture uvs"),
  aNormal: const ShaderVarDesc(VarTypeVec3, "vertex normals"),
  aBinormal: const ShaderVarDesc(VarTypeVec3, "vertex binormals"),
  aCenter: const ShaderVarDesc(VarTypeVec4, "for wireframe"),
  aPointSize: const ShaderVarDesc(VarTypeFloat, ""),
  aBoneIndex: const ShaderVarDesc(VarTypeVec4, ""),
  aBoneWeight: const ShaderVarDesc(VarTypeVec4, ""),
  aTangent: const ShaderVarDesc(VarTypeVec3, "vertex tangents"),
  aBitangent: const ShaderVarDesc(VarTypeVec3, "vertex btangents"),
  iaRotation: const ShaderVarDesc(VarTypeVec4, ""),
  iaTranslation: const ShaderVarDesc(VarTypeVec3, ""),
  iaScale: const ShaderVarDesc(VarTypeFloat, ""),
  iaColor: const ShaderVarDesc(VarTypeVec3, ""),

  // Varying
  vColor: const ShaderVarDesc(VarTypeVec3, "per vertex color"),
  vTexUV: const ShaderVarDesc(VarTypeVec2, ""),
  vLightWeighting: const ShaderVarDesc(VarTypeVec3, ""),
  vNormal: const ShaderVarDesc(VarTypeVec3, ""),
  vPosition: const ShaderVarDesc(VarTypeVec3, "vertex coordinates"),
  vPositionFromLight: const ShaderVarDesc(VarTypeVec4, "delta from light"),
  vCenter: const ShaderVarDesc(VarTypeVec4, "for wireframe"),
  vDepth: const ShaderVarDesc(VarTypeFloat, "depth for shadowmaps"),

  // uniform vars
  uTransformationMatrix: const ShaderVarDesc(VarTypeMat4, ""),
  //uModelViewMatrix: const ShaderVarDesc(VarTypeMat4, ""),
  uModelMatrix: const ShaderVarDesc(VarTypeMat4, ""),
  //uViewMatrix: const ShaderVarDesc(VarTypeMat4, ""),
  uNormalMatrix: const ShaderVarDesc(VarTypeMat3, ""),
  uConvolutionMatrix: const ShaderVarDesc(VarTypeMat3, ""),

  //uPerspectiveMatrix: const ShaderVarDesc(VarTypeMat4, ""),
  uPerspectiveViewMatrix: const ShaderVarDesc(VarTypeMat4, ""),
  uLightPerspectiveViewMatrix: const ShaderVarDesc(VarTypeMat4, ""),

  uShadowMap: const ShaderVarDesc(VarTypeSampler2DShadow, ""),

  uTexture: const ShaderVarDesc(VarTypeSampler2D, ""),
  uTexture2: const ShaderVarDesc(VarTypeSampler2D, ""),
  uTexture3: const ShaderVarDesc(VarTypeSampler2D, ""),
  uTexture4: const ShaderVarDesc(VarTypeSampler2D, ""),
  uSpecularMap: const ShaderVarDesc(VarTypeSampler2D, ""),
  uNormalMap: const ShaderVarDesc(VarTypeSampler2D, ""),
  uBumpMap: const ShaderVarDesc(VarTypeSampler2D, ""),
  uDepthMap: const ShaderVarDesc(VarTypeSampler2D, ""),
  uCubeTexture: const ShaderVarDesc(VarTypeSamplerCube, ""),
  uAnimationTable: const ShaderVarDesc(VarTypeSampler2D, ""),

  uTime: const ShaderVarDesc(VarTypeFloat, "time since program start in sec"),
  uCameraNear: const ShaderVarDesc(VarTypeFloat, ""),
  uCameraFar: const ShaderVarDesc(VarTypeFloat, ""),
  uFogNear: const ShaderVarDesc(VarTypeFloat, ""),
  uFogFar: const ShaderVarDesc(VarTypeFloat, ""),
  uPointSize: const ShaderVarDesc(VarTypeFloat, ""),
  uScale: const ShaderVarDesc(VarTypeFloat, ""),
  uAngle: const ShaderVarDesc(VarTypeFloat, ""),
  uCanvasSize: const ShaderVarDesc(VarTypeVec2, ""),
  uCenter2: const ShaderVarDesc(VarTypeVec2, ""),
  uCutOff: const ShaderVarDesc(VarTypeFloat, ""),
  uShininess: const ShaderVarDesc(VarTypeFloat, ""),
  uShadowBias: const ShaderVarDesc(VarTypeFloat, ""),
  uOpacity: const ShaderVarDesc(VarTypeFloat, ""),
  uColor: const ShaderVarDesc(VarTypeVec3, ""),
  uColorAmbient: const ShaderVarDesc(VarTypeVec3, ""),
  uColorEmissive: const ShaderVarDesc(VarTypeVec3, ""),
  uColorSpecular: const ShaderVarDesc(VarTypeVec3, ""),
  uColorDiffuse: const ShaderVarDesc(VarTypeVec3, ""),
  uColorAlpha: const ShaderVarDesc(VarTypeVec4, ""),
  uColorAlpha2: const ShaderVarDesc(VarTypeVec4, ""),
  uEyePosition: const ShaderVarDesc(VarTypeVec3, ""),
  uMaterial: const ShaderVarDesc(VarTypeMat4, ""),
  uRange: const ShaderVarDesc(VarTypeVec2, ""),
  uDirection: const ShaderVarDesc(VarTypeVec2, ""),

  uBoneMatrices: const ShaderVarDesc(VarTypeMat4, "", arraySize: kMaxBones),

  uLightDescs: const ShaderVarDesc(VarTypeMat4, "", arraySize: kMaxLights),
  uLightCount: const ShaderVarDesc(VarTypeFloat, ""),
  uLightTypes: const ShaderVarDesc(VarTypeFloat, "", arraySize: kMaxLights),

  uBumpScale: const ShaderVarDesc(VarTypeFloat, "for bump maps"),
  uNormalScale: const ShaderVarDesc(VarTypeFloat, "for normal maps"),
};

void IntroduceNewShaderVar(String canonical, ShaderVarDesc desc) {
  assert(!_VarsDb.containsKey(canonical),
      "duplicate shader variable ${canonical}");
  _VarsDb[canonical] = desc;
}

ShaderVarDesc RetrieveShaderVarDesc(String canonical) {
  return _VarsDb[canonical];
}

// Describes a shader (either fragment or vertex) and its
// interface to the world on a syntactical (uncompiled) level.
// Protocol:
// SetBody(WithMain) must be called last;
class ShaderObject {
  ShaderObject(this.name);

  final String name;
  String shader;

  final List<String> attributeVars = [];
  final List<String> uniformVars = [];
  final List<String> varyingVars = [];
  final List<String> transformVars = []; // "transformFeedbackVaryings"
  // start with one to deliberately exercise corner cases
  int _nextLayoutPos = 0;
  Map<String, int> _canonicalToLayoutPos = {};

  int GetAttributeLayoutPos(String canonical) =>
      _canonicalToLayoutPos[canonical];

  int GetTransformBindingIndex(String canonical) =>
      transformVars.indexOf(canonical);

  Map<String, int> GetAttributeLayoutMap() => _canonicalToLayoutPos;

  void AddAttributeVars(List<String> names) {
    assert(shader == null);

    for (String n in names) {
      assert(_VarsDb.containsKey(n));
      assert(!attributeVars.contains(n));
      attributeVars.add(n);
      _canonicalToLayoutPos[n] = _nextLayoutPos;
      ++_nextLayoutPos;
    }
    attributeVars.sort();
  }

  void AddUniformVars(List<String> names) {
    assert(shader == null);

    for (String n in names) {
      assert(_VarsDb.containsKey(n), "missing uniform $n");
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

  void SetBodyWithMain(List<String> body, {List<String> prolog}) {
    assert(shader == null);
    shader = _CreateShader(true, body, prolog);
  }

  void SetBody(List<String> body, {List<String> prolog}) {
    assert(shader == null);
    shader = _CreateShader(false, body, prolog);
  }

  /// _CreateShader updates the shader field from header and body.
  /// If you have set shader manually do not call this.
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
      int pos = GetAttributeLayoutPos(a);
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

    // print (out.join("\n"));
    return out.join("\n");
  }
}
