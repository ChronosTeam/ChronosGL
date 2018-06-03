(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b,c){"use strict"
function generateAccessor(b0,b1,b2){var g=b0.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var a0
if(g.length>1)a0=true
else a0=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a1=d&3
var a2=d>>2
var a3=f=f.substring(0,e-1)
var a4=f.indexOf(":")
if(a4>0){a3=f.substring(0,a4)
f=f.substring(a4+1)}if(a1){var a5=a1&2?"r":""
var a6=a1&1?"this":"r"
var a7="return "+a6+"."+f
var a8=b2+".prototype.g"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}if(a2){var a5=a2&2?"r,v":"v"
var a6=a2&1?"this":"r"
var a7=a6+"."+f+"=v"
var a8=b2+".prototype.s"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}}return f}function defineClass(a2,a3){var g=[]
var f="function "+a2+"("
var e=""
for(var d=0;d<a3.length;d++){if(d!=0)f+=", "
var a0=generateAccessor(a3[d],g,a2)
var a1="p_"+a0
f+=a1
e+="this."+a0+" = "+a1+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a2+".builtin$cls=\""+a2+"\";\n"
f+="$desc=$collectedClasses."+a2+"[1];\n"
f+=a2+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a2+".name=\""+a2+"\";\n"
f+=g.join("")
return f}var z=supportsDirectProtoAccess?function(d,e){var g=d.prototype
g.__proto__=e.prototype
g.constructor=d
g["$is"+d.name]=d
return convertToFastObject(g)}:function(){function tmp(){}return function(a1,a2){tmp.prototype=a2.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a1.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var a0=e[d]
g[a0]=f[a0]}g["$is"+a1.name]=a1
g.constructor=a1
a1.prototype=g
return g}}()
function finishClasses(a5){var g=init.allClasses
a5.combinedConstructorFunction+="return [\n"+a5.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a5.combinedConstructorFunction)(a5.collected)
a5.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.name
var a1=a5.collected[a0]
var a2=a1[0]
a1=a1[1]
g[a0]=d
a2[a0]=d}f=null
var a3=init.finishedClasses
function finishClass(c2){if(a3[c2])return
a3[c2]=true
var a6=a5.pending[c2]
if(a6&&a6.indexOf("+")>0){var a7=a6.split("+")
a6=a7[0]
var a8=a7[1]
finishClass(a8)
var a9=g[a8]
var b0=a9.prototype
var b1=g[c2].prototype
var b2=Object.keys(b0)
for(var b3=0;b3<b2.length;b3++){var b4=b2[b3]
if(!u.call(b1,b4))b1[b4]=b0[b4]}}if(!a6||typeof a6!="string"){var b5=g[c2]
var b6=b5.prototype
b6.constructor=b5
b6.$isc=b5
b6.$deferredAction=function(){}
return}finishClass(a6)
var b7=g[a6]
if(!b7)b7=existingIsolateProperties[a6]
var b5=g[c2]
var b6=z(b5,b7)
if(b0)b6.$deferredAction=mixinDeferredActionHelper(b0,b6)
if(Object.prototype.hasOwnProperty.call(b6,"%")){var b8=b6["%"].split(";")
if(b8[0]){var b9=b8[0].split("|")
for(var b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=true}}if(b8[1]){b9=b8[1].split("|")
if(b8[2]){var c0=b8[2].split("|")
for(var b3=0;b3<c0.length;b3++){var c1=g[c0[b3]]
c1.$nativeSuperclassTag=b9[0]}}for(b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ise)b6.$deferredAction()}var a4=Object.keys(a5.pending)
for(var e=0;e<a4.length;e++)finishClass(a4[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.charCodeAt(0)
var a1
if(d!=="^"&&d!=="$reflectable"&&a0!==43&&a0!==42&&(a1=g[d])!=null&&a1.constructor===Array&&d!=="<>")addStubs(g,a1,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(d,e){var g
if(e.hasOwnProperty("$deferredAction"))g=e.$deferredAction
return function foo(){if(!supportsDirectProtoAccess)return
var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}d.$deferredAction()
f.$deferredAction()}}function processClassData(b2,b3,b4){b3=convertToSlowObject(b3)
var g
var f=Object.keys(b3)
var e=false
var d=supportsDirectProtoAccess&&b2!="c"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="p"){processStatics(init.statics[b2]=b3.p,b4)
delete b3.p}else if(a2===43){w[g]=a1.substring(1)
var a3=b3[a1]
if(a3>0)b3[g].$reflectable=a3}else if(a2===42){b3[g].$D=b3[a1]
var a4=b3.$methodsWithOptionalArguments
if(!a4)b3.$methodsWithOptionalArguments=a4={}
a4[a1]=g}else{var a5=b3[a1]
if(a1!=="^"&&a5!=null&&a5.constructor===Array&&a1!=="<>")if(d)e=true
else addStubs(b3,a5,a1,false,[])
else g=a1}}if(e)b3.$deferredAction=finishAddStubsHelper
var a6=b3["^"],a7,a8,a9=a6
var b0=a9.split(";")
a9=b0[1]?b0[1].split(","):[]
a8=b0[0]
a7=a8.split(":")
if(a7.length==2){a8=a7[0]
var b1=a7[1]
if(b1)b3.$S=function(b5){return function(){return init.types[b5]}}(b1)}if(a8)b4.pending[b2]=a8
b4.combinedConstructorFunction+=defineClass(b2,a9)
b4.constructorsList.push(b2)
b4.collected[b2]=[m,b3]
i.push(b2)}function processStatics(a4,a5){var g=Object.keys(a4)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a4[e]
var a0=e.charCodeAt(0)
var a1
if(a0===43){v[a1]=e.substring(1)
var a2=a4[e]
if(a2>0)a4[a1].$reflectable=a2
if(d&&d.length)init.typeInformation[a1]=d}else if(a0===42){m[a1].$D=d
var a3=a4.$methodsWithOptionalArguments
if(!a3)a4.$methodsWithOptionalArguments=a3={}
a3[e]=a1}else if(typeof d==="function"){m[a1=e]=d
h.push(e)}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a1=e
processClassData(e,d,a5)}}}function addStubs(b5,b6,b7,b8,b9){var g=0,f=b6[g],e
if(typeof f=="string")e=b6[++g]
else{e=f
f=b7}var d=[b5[b7]=b5[f]=e]
e.$stubName=b7
b9.push(b7)
for(g++;g<b6.length;g++){e=b6[g]
if(typeof e!="function")break
if(!b8)e.$stubName=b6[++g]
d.push(e)
if(e.$stubName){b5[e.$stubName]=e
b9.push(e.$stubName)}}for(var a0=0;a0<d.length;g++,a0++)d[a0].$callName=b6[g]
var a1=b6[g]
b6=b6.slice(++g)
var a2=b6[0]
var a3=(a2&1)===1
a2=a2>>1
var a4=a2>>1
var a5=(a2&1)===1
var a6=a2===3
var a7=a2===1
var a8=b6[1]
var a9=a8>>1
var b0=(a8&1)===1
var b1=a4+a9
var b2=b6[2]
if(typeof b2=="number")b6[2]=b2+c
if(b>0){var b3=3
for(var a0=0;a0<a9;a0++){if(typeof b6[b3]=="number")b6[b3]=b6[b3]+b
b3++}for(var a0=0;a0<b1;a0++){b6[b3]=b6[b3]+b
b3++}}var b4=2*a9+a4+3
if(a1){e=tearOff(d,b6,b8,b7,a3)
b5[b7].$getter=e
e.$getterStub=true
if(b8)b9.push(a1)
b5[a1]=e
d.push(e)
e.$stubName=a1
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.bE"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.bE"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.bE(this,d,e,true,[],a0).prototype
return g}:tearOffGetter(d,e,a0,a1)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b3=function(){}
var dart=[["","",,H,{"^":"",jT:{"^":"c;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
bK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aJ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.bI==null){H.iI()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cO("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bk()]
if(v!=null)return v
v=H.iM(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.t
if(y===Object.prototype)return C.t
if(typeof w=="function"){Object.defineProperty(w,$.$get$bk(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
e:{"^":"c;",
A:function(a,b){return a===b},
gv:function(a){return H.aq(a)},
k:["c4",function(a){return"Instance of '"+H.ar(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSVariableReferenceValue|CSSViewportRule|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MozCSSKeyframeRule|MozCSSKeyframesRule|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
eD:{"^":"e;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isir:1},
cc:{"^":"e;",
A:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isaE:1},
bl:{"^":"e;",
gv:function(a){return 0},
k:["c5",function(a){return String(a)}]},
f4:{"^":"bl;"},
aG:{"^":"bl;"},
ao:{"^":"bl;",
k:function(a){var z=a[$.$get$c5()]
return z==null?this.c5(a):J.aA(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
ak:{"^":"e;$ti",
cJ:function(a,b){var z,y
if(!!a.fixed$length)H.H(P.m("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.Q)(b),++y)a.push(b[y])},
u:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.F(a))}},
a5:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.k(y,x)
y[x]=w}return y.join(b)},
aE:function(a,b){return H.cv(a,b,null,H.w(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
c_:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.H(P.m("setRange"))
P.fd(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$ish){x=e
w=d}else{w=y.aE(d,e).dd(0,!1)
x=0}y=J.a5(w)
if(x+z>y.gi(w))throw H.a(H.eC())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
Z:function(a,b,c,d){return this.c_(a,b,c,d,0)},
c0:function(a,b){if(!!a.immutable$list)H.H(P.m("sort"))
H.fp(a,J.ic())},
aF:function(a){return this.c0(a,null)},
k:function(a){return P.bj(a,"[","]")},
gH:function(a){return new J.e7(a,a.length,0,null,[H.w(a,0)])},
gv:function(a){return H.aq(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.H(P.m("set length"))
if(b<0)throw H.a(P.aV(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a4(a,b))
if(b>=a.length||b<0)throw H.a(H.a4(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.H(P.m("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a4(a,b))
if(b>=a.length||b<0)throw H.a(H.a4(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.b.n(a.length,C.b.gi(b))
y=H.L([],[H.w(a,0)])
this.si(y,z)
this.Z(y,0,a.length,a)
this.Z(y,a.length,z,b)
return y},
$ish:1,
p:{
al:function(a){a.fixed$length=Array
return a},
jR:[function(a,b){return J.dB(a,b)},"$2","ic",8,0,17]}},
jS:{"^":"ak;$ti"},
e7:{"^":"c;a,b,c,d,$ti",
gw:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.Q(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
am:{"^":"e;",
J:function(a,b){var z
if(typeof b!=="number")throw H.a(H.K(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaq(b)
if(this.gaq(a)===z)return 0
if(this.gaq(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaq:function(a){return a===0?1/a<0:a<0},
dc:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.m(""+a+".toInt()"))},
cQ:function(a,b,c){if(this.J(b,c)>0)throw H.a(H.K(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.K(b))
return a+b},
F:function(a,b){if(typeof b!=="number")throw H.a(H.K(b))
return a-b},
V:function(a,b){if(typeof b!=="number")throw H.a(H.K(b))
return a/b},
S:function(a,b){return(a|0)===a?a/b|0:this.cE(a,b)},
cE:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.m("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
aY:function(a,b){var z
if(a>0)z=this.cC(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cC:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.K(b))
return a<b},
X:function(a,b){if(typeof b!=="number")throw H.a(H.K(b))
return a>b},
$isb2:1,
$isax:1},
cb:{"^":"am;",$isB:1},
eE:{"^":"am;"},
an:{"^":"e;",
cR:function(a,b){if(b>=a.length)H.H(H.a4(a,b))
return a.charCodeAt(b)},
aQ:function(a,b){if(b>=a.length)throw H.a(H.a4(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.e6(b,null,null))
return a+b},
aH:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.H(H.K(c))
if(b<0)throw H.a(P.aW(b,null,null))
if(typeof c!=="number")return H.A(c)
if(b>c)throw H.a(P.aW(b,null,null))
if(c>a.length)throw H.a(P.aW(c,null,null))
return a.substring(b,c)},
c2:function(a,b){return this.aH(a,b,null)},
J:function(a,b){var z
if(typeof b!=="string")throw H.a(H.K(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gv:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
$iso:1}}],["","",,H,{"^":"",
eC:function(){return new P.cr("Too few elements")},
fp:function(a,b){H.aF(a,0,J.V(a)-1,b)},
aF:function(a,b,c,d){if(c-b<=32)H.fo(a,b,c,d)
else H.fn(a,b,c,d)},
fo:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a5(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.E(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
fn:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.S(c-b+1,6)
y=b+z
x=c-z
w=C.b.S(b+c,2)
v=w-z
u=w+z
t=J.a5(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.E(d.$2(s,r),0)){n=r
r=s
s=n}if(J.E(d.$2(p,o),0)){n=o
o=p
p=n}if(J.E(d.$2(s,q),0)){n=q
q=s
s=n}if(J.E(d.$2(r,q),0)){n=q
q=r
r=n}if(J.E(d.$2(s,p),0)){n=p
p=s
s=n}if(J.E(d.$2(q,p),0)){n=p
p=q
q=n}if(J.E(d.$2(r,o),0)){n=o
o=r
r=n}if(J.E(d.$2(r,q),0)){n=q
q=r
r=n}if(J.E(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.D(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.A(i,0))continue
if(h.O(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aI(i)
if(h.X(i,0)){--l
continue}else{g=l-1
if(h.O(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aK(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.E(d.$2(j,p),0))for(;!0;)if(J.E(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aK(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}e=!1}h=m-1
t.j(a,b,t.h(a,h))
t.j(a,h,r)
h=l+1
t.j(a,c,t.h(a,h))
t.j(a,h,p)
H.aF(a,b,m-2,d)
H.aF(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.D(d.$2(t.h(a,m),r),0);)++m
for(;J.D(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.D(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.D(d.$2(j,p),0))for(;!0;)if(J.D(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aK(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aF(a,m,l,d)}else H.aF(a,m,l,d)},
c7:{"^":"eA;$ti"},
cg:{"^":"c7;$ti",
gH:function(a){return new H.ch(this,this.gi(this),0,null,[H.di(this,"cg",0)])},
u:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.F(this))}}},
fB:{"^":"cg;a,b,c,$ti",
cf:function(a,b,c,d){},
gcs:function(){var z=J.V(this.a)
return z},
gcD:function(){var z,y
z=J.V(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.V(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gcD()+b
if(b>=0){y=this.gcs()
if(typeof y!=="number")return H.A(y)
y=z>=y}else y=!0
if(y)throw H.a(P.r(b,this,"index",null,null))
return J.dL(this.a,z)},
dd:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a5(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.L(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.k(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.F(this))}return t},
p:{
cv:function(a,b,c,d){var z=new H.fB(a,b,c,[d])
z.cf(a,b,c,d)
return z}}},
ch:{"^":"c;a,b,c,d,$ti",
gw:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a5(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.F(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
aR:{"^":"c;$ti"}}],["","",,H,{"^":"",
iC:function(a){return init.types[a]},
iL:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$isl},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aA(a)
if(typeof z!=="string")throw H.a(H.K(a))
return z},
aq:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ar:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.z||!!J.n(a).$isaG){v=C.r(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.m.aQ(w,0)===36)w=C.m.c2(w,1)
r=H.bJ(H.ab(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
z:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fb:function(a){return a.b?H.z(a).getUTCFullYear()+0:H.z(a).getFullYear()+0},
f9:function(a){return a.b?H.z(a).getUTCMonth()+1:H.z(a).getMonth()+1},
f5:function(a){return a.b?H.z(a).getUTCDate()+0:H.z(a).getDate()+0},
f6:function(a){return a.b?H.z(a).getUTCHours()+0:H.z(a).getHours()+0},
f8:function(a){return a.b?H.z(a).getUTCMinutes()+0:H.z(a).getMinutes()+0},
fa:function(a){return a.b?H.z(a).getUTCSeconds()+0:H.z(a).getSeconds()+0},
f7:function(a){return a.b?H.z(a).getUTCMilliseconds()+0:H.z(a).getMilliseconds()+0},
A:function(a){throw H.a(H.K(a))},
k:function(a,b){if(a==null)J.V(a)
throw H.a(H.a4(a,b))},
a4:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
z=J.V(a)
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.r(b,a,"index",null,z)
return P.aW(b,"index",null)},
K:function(a){return new P.ah(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.cm()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dr})
z.name=""}else z.toString=H.dr
return z},
dr:function(){return J.aA(this.dartException)},
H:function(a){throw H.a(a)},
Q:function(a){throw H.a(P.F(a))},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.iS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.aY(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bm(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cl(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$cA()
u=$.$get$cB()
t=$.$get$cC()
s=$.$get$cD()
r=$.$get$cH()
q=$.$get$cI()
p=$.$get$cF()
$.$get$cE()
o=$.$get$cK()
n=$.$get$cJ()
m=v.I(y)
if(m!=null)return z.$1(H.bm(y,m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.bm(y,m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cl(y,m))}}return z.$1(new H.fG(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cq()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ah(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cq()
return a},
a6:function(a){var z
if(a==null)return new H.d1(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.d1(a,null)},
iv:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
iK:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.c8("Unsupported number of arguments for wrapped closure"))},
T:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.iK)
a.$identity=z
return z},
ei:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$ish){z.$reflectionInfo=c
x=H.ff(z).r}else x=c
w=d?Object.create(new H.fs().constructor.prototype):Object.create(new H.bb(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.M
$.M=J.af(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.c3(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.iC,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.c2:H.bc
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.c3(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
ef:function(a,b,c,d){var z=H.bc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
c3:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eh(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ef(y,!w,z,b)
if(y===0){w=$.M
$.M=J.af(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.ai
if(v==null){v=H.aN("self")
$.ai=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.M
$.M=J.af(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.ai
if(v==null){v=H.aN("self")
$.ai=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
eg:function(a,b,c,d){var z,y
z=H.bc
y=H.c2
switch(b?-1:a){case 0:throw H.a(H.fj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eh:function(a,b){var z,y,x,w,v,u,t,s
z=$.ai
if(z==null){z=H.aN("self")
$.ai=z}y=$.c1
if(y==null){y=H.aN("receiver")
$.c1=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eg(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.M
$.M=J.af(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.M
$.M=J.af(y,1)
return new Function(z+H.b(y)+"}")()},
bE:function(a,b,c,d,e,f){var z,y
z=J.al(b)
y=!!J.n(c).$ish?J.al(c):c
return H.ei(a,z,y,!!d,e,f)},
iP:function(a,b){var z=J.a5(b)
throw H.a(H.ed(a,z.aH(b,3,z.gi(b))))},
U:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.iP(a,b)},
bF:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
dg:function(a,b){var z,y
if(a==null)return!1
z=H.bF(J.n(a))
if(z==null)y=!1
else y=H.dk(z,b)
return y},
il:function(a){var z
if(a instanceof H.f){z=H.bF(J.n(a))
if(z!=null)return H.bM(z,null)
return"Closure"}return H.ar(a)},
iR:function(a){throw H.a(new P.el(a))},
dh:function(a){return init.getIsolateTag(a)},
L:function(a,b){a.$ti=b
return a},
ab:function(a){if(a==null)return
return a.$ti},
l0:function(a,b,c){return H.ay(a["$as"+H.b(c)],H.ab(b))},
b4:function(a,b,c,d){var z=H.ay(a["$as"+H.b(c)],H.ab(b))
return z==null?null:z[d]},
di:function(a,b,c){var z=H.ay(a["$as"+H.b(b)],H.ab(a))
return z==null?null:z[c]},
w:function(a,b){var z=H.ab(a)
return z==null?null:z[b]},
bM:function(a,b){var z=H.ad(a,b)
return z},
ad:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bJ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ad(z,b)
return H.ib(a,b)}return"unknown-reified-type"},
ib:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ad(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ad(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ad(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.iu(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ad(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bJ:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bt("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ad(u,c)}return w?"":"<"+z.k(0)+">"},
iB:function(a){var z,y,x
if(a instanceof H.f){z=H.bF(J.n(a))
if(z!=null)return H.bM(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bJ(a.$ti,0,null)
return y+x},
ay:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dd:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ab(a)
y=J.n(a)
if(y[b]==null)return!1
return H.db(H.ay(y[d],z),c)},
db:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.C(a[y],b[y]))return!1
return!0},
kZ:function(a,b,c){return a.apply(b,H.ay(J.n(b)["$as"+H.b(c)],H.ab(b)))},
C:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aE")return!0
if('func' in b)return H.dk(a,b)
if('func' in a)return b.builtin$cls==="jJ"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.bM(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.db(H.ay(u,z),x)},
da:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.C(z,v)||H.C(v,z)))return!1}return!0},
im:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.al(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.C(v,u)||H.C(u,v)))return!1}return!0},
dk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.C(z,y)||H.C(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.da(x,w,!1))return!1
if(!H.da(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.C(o,n)||H.C(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.C(o,n)||H.C(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.C(o,n)||H.C(n,o)))return!1}}return H.im(a.named,b.named)},
l_:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
iM:function(a){var z,y,x,w,v,u
z=$.dj.$1(a)
y=$.b1[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.b5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.d9.$2(a,z)
if(z!=null){y=$.b1[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.b5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.b6(x)
$.b1[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.b5[z]=x
return x}if(v==="-"){u=H.b6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dm(a,x)
if(v==="*")throw H.a(P.cO(z))
if(init.leafTags[z]===true){u=H.b6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dm(a,x)},
dm:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bK(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
b6:function(a){return J.bK(a,!1,null,!!a.$isl)},
iO:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.b6(z)
else return J.bK(z,c,null,null)},
iI:function(){if(!0===$.bI)return
$.bI=!0
H.iJ()},
iJ:function(){var z,y,x,w,v,u,t,s
$.b1=Object.create(null)
$.b5=Object.create(null)
H.iE()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dq.$1(v)
if(u!=null){t=H.iO(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
iE:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.aa(C.A,H.aa(C.F,H.aa(C.q,H.aa(C.q,H.aa(C.E,H.aa(C.B,H.aa(C.C(C.r),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dj=new H.iF(v)
$.d9=new H.iG(u)
$.dq=new H.iH(t)},
aa:function(a,b){return a(b)||b},
fe:{"^":"c;a,b,c,d,e,f,r,x",p:{
ff:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.al(z)
y=z[0]
x=z[1]
return new H.fe(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
fE:{"^":"c;a,b,c,d,e,f",
I:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
p:{
O:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.fE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
aZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cG:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
f1:{"^":"x;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
cl:function(a,b){return new H.f1(a,b==null?null:b.method)}}},
eF:{"^":"x;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bm:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.eF(a,y,z?null:b.receiver)}}},
fG:{"^":"x;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
iS:{"^":"f:1;a",
$1:function(a){if(!!J.n(a).$isx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
d1:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isas:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.ar(this).trim()+"'"},
gbW:function(){return this},
gbW:function(){return this}},
cw:{"^":"f;"},
fs:{"^":"cw;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bb:{"^":"cw;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bb))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aq(this.a)
else y=typeof z!=="object"?J.R(z):H.aq(z)
return(y^H.aq(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.ar(z)+"'")},
p:{
bc:function(a){return a.a},
c2:function(a){return a.c},
aN:function(a){var z,y,x,w,v
z=new H.bb("self","target","receiver","name")
y=J.al(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ec:{"^":"x;a",
k:function(a){return this.a},
p:{
ed:function(a,b){return new H.ec("CastError: "+H.b(P.bf(a))+": type '"+H.il(a)+"' is not a subtype of type '"+b+"'")}}},
fi:{"^":"x;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
fj:function(a){return new H.fi(a)}}},
cL:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gv:function(a){return J.R(this.a)},
A:function(a,b){if(b==null)return!1
return b instanceof H.cL&&J.D(this.a,b.a)}},
cd:{"^":"eN;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gL:function(a){return new H.eL(this,[H.w(this,0)])},
an:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.aT(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.aT(y,b)}else return this.d4(b)},
d4:function(a){var z=this.d
if(z==null)return!1
return this.ap(this.ag(z,J.R(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a3(z,b)
x=y==null?null:y.gU()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a3(w,b)
x=y==null?null:y.gU()
return x}else return this.d5(b)},
d5:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ag(z,J.R(a)&0x3ffffff)
x=this.ap(y,a)
if(x<0)return
return y[x].gU()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.ai()
this.b=z}this.aP(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ai()
this.c=y}this.aP(y,b,c)}else{x=this.d
if(x==null){x=this.ai()
this.d=x}w=J.R(b)&0x3ffffff
v=this.ag(x,w)
if(v==null)this.am(x,w,[this.aj(b,c)])
else{u=this.ap(v,b)
if(u>=0)v[u].sU(c)
else v.push(this.aj(b,c))}}},
u:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.F(this))
z=z.c}},
aP:function(a,b,c){var z=this.a3(a,b)
if(z==null)this.am(a,b,this.aj(b,c))
else z.sU(c)},
aV:function(){this.r=this.r+1&67108863},
aj:function(a,b){var z,y
z=new H.eK(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aV()
return z},
ap:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.D(a[y].gd3(),b))return y
return-1},
k:function(a){return P.ci(this)},
a3:function(a,b){return a[b]},
ag:function(a,b){return a[b]},
am:function(a,b,c){a[b]=c},
cq:function(a,b){delete a[b]},
aT:function(a,b){return this.a3(a,b)!=null},
ai:function(){var z=Object.create(null)
this.am(z,"<non-identifier-key>",z)
this.cq(z,"<non-identifier-key>")
return z}},
eK:{"^":"c;d3:a<,U:b@,c,d"},
eL:{"^":"c7;a,$ti",
gi:function(a){return this.a.a},
gH:function(a){var z,y
z=this.a
y=new H.ap(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
u:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.F(z))
y=y.c}}},
ap:{"^":"c;a,b,c,d,$ti",
gw:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.F(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
iF:{"^":"f:1;a",
$1:function(a){return this.a(a)}},
iG:{"^":"f:8;a",
$2:function(a,b){return this.a(a,b)}},
iH:{"^":"f:9;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
iu:function(a){return J.al(H.L(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
P:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a4(b,a))},
f0:{"^":"e;","%":"DataView;ArrayBufferView;bp|cW|cX|ck|cY|cZ|Y"},
bp:{"^":"f0;",
gi:function(a){return a.length},
$isl:1,
$asl:I.b3},
ck:{"^":"cX;",
h:function(a,b){H.P(b,a,a.length)
return a[b]},
j:function(a,b,c){H.P(b,a,a.length)
a[b]=c},
$asaR:function(){return[P.b2]},
$asi:function(){return[P.b2]},
$ish:1,
$ash:function(){return[P.b2]},
"%":"Float64Array"},
Y:{"^":"cZ;",
j:function(a,b,c){H.P(b,a,a.length)
a[b]=c},
$asaR:function(){return[P.B]},
$asi:function(){return[P.B]},
$ish:1,
$ash:function(){return[P.B]}},
f_:{"^":"ck;",$isbh:1,"%":"Float32Array"},
k4:{"^":"Y;",
h:function(a,b){H.P(b,a,a.length)
return a[b]},
"%":"Int16Array"},
k5:{"^":"Y;",
h:function(a,b){H.P(b,a,a.length)
return a[b]},
$isez:1,
"%":"Int32Array"},
k6:{"^":"Y;",
h:function(a,b){H.P(b,a,a.length)
return a[b]},
"%":"Int8Array"},
k7:{"^":"Y;",
h:function(a,b){H.P(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
k8:{"^":"Y;",
h:function(a,b){H.P(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
k9:{"^":"Y;",
gi:function(a){return a.length},
h:function(a,b){H.P(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ka:{"^":"Y;",
gi:function(a){return a.length},
h:function(a,b){H.P(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
cW:{"^":"bp+i;"},
cX:{"^":"cW+aR;"},
cY:{"^":"bp+i;"},
cZ:{"^":"cY+aR;"}}],["","",,P,{"^":"",
fO:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.io()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.T(new P.fQ(z),1)).observe(y,{childList:true})
return new P.fP(z,y,x)}else if(self.setImmediate!=null)return P.ip()
return P.iq()},
kP:[function(a){self.scheduleImmediate(H.T(new P.fR(a),0))},"$1","io",4,0,5],
kQ:[function(a){self.setImmediate(H.T(new P.fS(a),0))},"$1","ip",4,0,5],
kR:[function(a){P.hR(0,a)},"$1","iq",4,0,5],
ig:function(a,b){if(H.dg(a,{func:1,args:[P.aE,P.aE]})){b.toString
return a}else{b.toString
return a}},
ie:function(){var z,y
for(;z=$.a9,z!=null;){$.av=null
y=z.b
$.a9=y
if(y==null)$.au=null
z.a.$0()}},
kY:[function(){$.bC=!0
try{P.ie()}finally{$.av=null
$.bC=!1
if($.a9!=null)$.$get$bz().$1(P.dc())}},"$0","dc",0,0,3],
d7:function(a){var z=new P.cQ(a,null)
if($.a9==null){$.au=z
$.a9=z
if(!$.bC)$.$get$bz().$1(P.dc())}else{$.au.b=z
$.au=z}},
ik:function(a){var z,y,x
z=$.a9
if(z==null){P.d7(a)
$.av=$.au
return}y=new P.cQ(a,null)
x=$.av
if(x==null){y.b=z
$.av=y
$.a9=y}else{y.b=x.b
x.b=y
$.av=y
if(y.b==null)$.au=y}},
iQ:function(a){var z=$.q
if(C.e===z){P.b0(null,null,C.e,a)
return}z.toString
P.b0(null,null,z,z.b6(a))},
ij:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.ae(u)
y=H.a6(u)
$.q.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.ag(x)
w=t
v=x.gM()
c.$2(w,v)}}},
i7:function(a,b,c,d){var z=a.cP(0)
if(!!J.n(z).$isaD&&z!==$.$get$ca())z.dg(new P.ia(b,c,d))
else b.P(c,d)},
i8:function(a,b){return new P.i9(a,b)},
fM:function(){return $.q},
b_:function(a,b,c,d,e){var z={}
z.a=d
P.ik(new P.ih(z,e))},
d5:function(a,b,c,d){var z,y
y=$.q
if(y===c)return d.$0()
$.q=c
z=y
try{y=d.$0()
return y}finally{$.q=z}},
d6:function(a,b,c,d,e){var z,y
y=$.q
if(y===c)return d.$1(e)
$.q=c
z=y
try{y=d.$1(e)
return y}finally{$.q=z}},
ii:function(a,b,c,d,e,f){var z,y
y=$.q
if(y===c)return d.$2(e,f)
$.q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.q=z}},
b0:function(a,b,c,d){var z=C.e!==c
if(z)d=!(!z||!1)?c.b6(d):c.cM(d)
P.d7(d)},
fQ:{"^":"f:1;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
fP:{"^":"f:10;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
fR:{"^":"f:0;a",
$0:function(){this.a.$0()}},
fS:{"^":"f:0;a",
$0:function(){this.a.$0()}},
hQ:{"^":"c;a,b,c",
cm:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.T(new P.hS(this,b),0),a)
else throw H.a(P.m("`setTimeout()` not found."))},
p:{
hR:function(a,b){var z=new P.hQ(!0,null,0)
z.cm(a,b)
return z}}},
hS:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
j1:{"^":"c;$ti"},
fU:{"^":"c;$ti"},
hN:{"^":"fU;a,$ti",
cS:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.fr("Future already completed"))
z.a2(b)}},
cS:{"^":"c;ak:a<,b,c,d,e,$ti",
gcI:function(){return this.b.b},
gbr:function(){return(this.c&1)!==0},
gd2:function(){return(this.c&2)!==0},
gbq:function(){return this.c===8},
d0:function(a){return this.b.b.as(this.d,a)},
d6:function(a){if(this.c!==6)return!0
return this.b.b.as(this.d,J.ag(a))},
d_:function(a){var z,y,x
z=this.e
y=J.d(a)
x=this.b.b
if(H.dg(z,{func:1,args:[P.c,P.as]}))return x.d8(z,y.gE(a),a.gM())
else return x.as(z,y.gE(a))},
d1:function(){return this.b.b.bC(this.d)}},
a1:{"^":"c;aZ:a<,b,cB:c<,$ti",
cl:function(a,b){this.a=4
this.c=a},
gcu:function(){return this.a===2},
gah:function(){return this.a>=4},
bH:function(a,b){var z,y,x
z=$.q
if(z!==C.e){z.toString
if(b!=null)b=P.ig(b,z)}y=new P.a1(0,z,null,[null])
x=b==null?1:3
this.a9(new P.cS(null,y,x,a,b,[H.w(this,0),null]))
return y},
bG:function(a){return this.bH(a,null)},
dg:function(a){var z,y
z=$.q
y=new P.a1(0,z,null,this.$ti)
if(z!==C.e)z.toString
z=H.w(this,0)
this.a9(new P.cS(null,y,8,a,null,[z,z]))
return y},
a9:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gah()){y.a9(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.b0(null,null,z,new P.h7(this,a))}},
aW:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gak()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gah()){v.aW(a)
return}this.a=v.a
this.c=v.c}z.a=this.al(a)
y=this.b
y.toString
P.b0(null,null,y,new P.hc(z,this))}},
a4:function(){var z=this.c
this.c=null
return this.al(z)},
al:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gak()
z.a=y}return y},
a2:function(a){var z,y,x
z=this.$ti
y=H.dd(a,"$isaD",z,"$asaD")
if(y){z=H.dd(a,"$isa1",z,null)
if(z)P.cT(a,this)
else P.h8(a,this)}else{x=this.a4()
this.a=4
this.c=a
P.at(this,x)}},
P:[function(a,b){var z=this.a4()
this.a=8
this.c=new P.aM(a,b)
P.at(this,z)},function(a){return this.P(a,null)},"dj","$2","$1","gaS",4,2,11],
$isaD:1,
p:{
h8:function(a,b){var z,y,x
b.a=1
try{a.bH(new P.h9(b),new P.ha(b))}catch(x){z=H.ae(x)
y=H.a6(x)
P.iQ(new P.hb(b,z,y))}},
cT:function(a,b){var z
for(;a.gcu();)a=a.c
if(a.gah()){z=b.a4()
b.a=a.a
b.c=a.c
P.at(b,z)}else{z=b.c
b.a=2
b.c=a
a.aW(z)}},
at:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.ag(v)
t=v.gM()
y.toString
P.b_(null,null,y,u,t)}return}for(;b.gak()!=null;b=s){s=b.a
b.a=null
P.at(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbr()||b.gbq()){q=b.gcI()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.ag(v)
t=v.gM()
y.toString
P.b_(null,null,y,u,t)
return}p=$.q
if(p==null?q!=null:p!==q)$.q=q
else p=null
if(b.gbq())new P.hf(z,x,b,w).$0()
else if(y){if(b.gbr())new P.he(x,b,r).$0()}else if(b.gd2())new P.hd(z,x,b).$0()
if(p!=null)$.q=p
y=x.b
if(!!J.n(y).$isaD){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.al(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.cT(y,o)
return}}o=b.b
b=o.a4()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
h7:{"^":"f:0;a,b",
$0:function(){P.at(this.a,this.b)}},
hc:{"^":"f:0;a,b",
$0:function(){P.at(this.b,this.a.a)}},
h9:{"^":"f:1;a",
$1:function(a){var z=this.a
z.a=0
z.a2(a)}},
ha:{"^":"f:12;a",
$2:function(a,b){this.a.P(a,b)},
$1:function(a){return this.$2(a,null)}},
hb:{"^":"f:0;a,b,c",
$0:function(){this.a.P(this.b,this.c)}},
hf:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.d1()}catch(w){y=H.ae(w)
x=H.a6(w)
if(this.d){v=J.ag(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.aM(y,x)
u.a=!0
return}if(!!J.n(z).$isaD){if(z instanceof P.a1&&z.gaZ()>=4){if(z.gaZ()===8){v=this.b
v.b=z.gcB()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.bG(new P.hg(t))
v.a=!1}}},
hg:{"^":"f:1;a",
$1:function(a){return this.a}},
he:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.d0(this.c)}catch(x){z=H.ae(x)
y=H.a6(x)
w=this.a
w.b=new P.aM(z,y)
w.a=!0}}},
hd:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.d6(z)===!0&&w.e!=null){v=this.b
v.b=w.d_(z)
v.a=!1}}catch(u){y=H.ae(u)
x=H.a6(u)
w=this.a
v=J.ag(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.aM(y,x)
s.a=!0}}},
cQ:{"^":"c;a,b"},
ct:{"^":"c;$ti",
u:function(a,b){var z,y
z={}
y=new P.a1(0,$.q,null,[null])
z.a=null
z.a=this.bu(new P.fx(z,this,b,y),!0,new P.fy(y),y.gaS())
return y},
gi:function(a){var z,y
z={}
y=new P.a1(0,$.q,null,[P.B])
z.a=0
this.bu(new P.fz(z),!0,new P.fA(z,y),y.gaS())
return y}},
fx:{"^":"f;a,b,c,d",
$1:function(a){P.ij(new P.fv(this.c,a),new P.fw(),P.i8(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.di(this.b,"ct",0)]}}},
fv:{"^":"f:0;a,b",
$0:function(){return this.a.$1(this.b)}},
fw:{"^":"f:1;",
$1:function(a){}},
fy:{"^":"f:0;a",
$0:function(){this.a.a2(null)}},
fz:{"^":"f:1;a",
$1:function(a){++this.a.a}},
fA:{"^":"f:0;a,b",
$0:function(){this.b.a2(this.a.a)}},
fu:{"^":"c;$ti"},
ia:{"^":"f:0;a,b,c",
$0:function(){return this.a.P(this.b,this.c)}},
i9:{"^":"f:13;a,b",
$2:function(a,b){P.i7(this.a,this.b,a,b)}},
aM:{"^":"c;E:a>,M:b<",
k:function(a){return H.b(this.a)},
$isx:1},
hX:{"^":"c;"},
ih:{"^":"f:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cm()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aA(y)
throw x}},
hB:{"^":"hX;",
d9:function(a){var z,y,x
try{if(C.e===$.q){a.$0()
return}P.d5(null,null,this,a)}catch(x){z=H.ae(x)
y=H.a6(x)
P.b_(null,null,this,z,y)}},
da:function(a,b){var z,y,x
try{if(C.e===$.q){a.$1(b)
return}P.d6(null,null,this,a,b)}catch(x){z=H.ae(x)
y=H.a6(x)
P.b_(null,null,this,z,y)}},
cM:function(a){return new P.hD(this,a)},
b6:function(a){return new P.hC(this,a)},
cN:function(a){return new P.hE(this,a)},
bC:function(a){if($.q===C.e)return a.$0()
return P.d5(null,null,this,a)},
as:function(a,b){if($.q===C.e)return a.$1(b)
return P.d6(null,null,this,a,b)},
d8:function(a,b,c){if($.q===C.e)return a.$2(b,c)
return P.ii(null,null,this,a,b,c)}},
hD:{"^":"f:0;a,b",
$0:function(){return this.a.bC(this.b)}},
hC:{"^":"f:0;a,b",
$0:function(){return this.a.d9(this.b)}},
hE:{"^":"f:1;a,b",
$1:function(a){return this.a.da(this.b,a)}}}],["","",,P,{"^":"",
W:function(){return new H.cd(0,null,null,null,null,null,0,[null,null])},
cf:function(a){return H.iv(a,new H.cd(0,null,null,null,null,null,0,[null,null]))},
X:function(a,b,c,d){return new P.ho(0,null,null,null,null,null,0,[d])},
eB:function(a,b,c){var z,y
if(P.bD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aw()
y.push(a)
try{P.id(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.cu(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bj:function(a,b,c){var z,y,x
if(P.bD(a))return b+"..."+c
z=new P.bt(b)
y=$.$get$aw()
y.push(a)
try{x=z
x.a=P.cu(x.gN(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gN()+c
y=z.gN()
return y.charCodeAt(0)==0?y:y},
bD:function(a){var z,y
for(z=0;y=$.$get$aw(),z<y.length;++z)if(a===y[z])return!0
return!1},
id:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gH(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gw(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gw(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw(z);++x
for(;z.t();t=s,s=r){r=z.gw(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
eM:function(a,b){var z,y
z=P.X(null,null,null,b)
for(y=J.b9(a);y.t();)z.K(0,y.gw(y))
return z},
ci:function(a){var z,y,x
z={}
if(P.bD(a))return"{...}"
y=new P.bt("")
try{$.$get$aw().push(a)
x=y
x.a=x.gN()+"{"
z.a=!0
J.bR(a,new P.eO(z,y))
z=y
z.a=z.gN()+"}"}finally{z=$.$get$aw()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gN()
return z.charCodeAt(0)==0?z:z},
ho:{"^":"hh;a,b,c,d,e,f,r,$ti",
gH:function(a){var z=new P.bA(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
G:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cp(b)},
cp:function(a){var z=this.d
if(z==null)return!1
return this.af(z[this.ac(a)],a)>=0},
u:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.F(this))
z=z.b}},
K:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bB()
this.b=z}return this.aR(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bB()
this.c=y}return this.aR(y,b)}else return this.cn(0,b)},
cn:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bB()
this.d=z}y=this.ac(b)
x=z[y]
if(x==null)z[y]=[this.ab(b)]
else{if(this.af(x,b)>=0)return!1
x.push(this.ab(b))}return!0},
bB:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aX(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aX(this.c,b)
else return this.cw(0,b)},
cw:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.ac(b)]
x=this.af(y,b)
if(x<0)return!1
this.b_(y.splice(x,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aa()}},
aR:function(a,b){if(a[b]!=null)return!1
a[b]=this.ab(b)
return!0},
aX:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.b_(z)
delete a[b]
return!0},
aa:function(){this.r=this.r+1&67108863},
ab:function(a){var z,y
z=new P.hp(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aa()
return z},
b_:function(a){var z,y
z=a.gcv()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aa()},
ac:function(a){return J.R(a)&0x3ffffff},
af:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.D(a[y].gcr(),b))return y
return-1},
p:{
bB:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
hp:{"^":"c;cr:a<,b,cv:c<"},
bA:{"^":"c;a,b,c,d,$ti",
gw:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.F(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
hh:{"^":"fk;$ti"},
jV:{"^":"c;$ti"},
i:{"^":"c;$ti",
gH:function(a){return new H.ch(a,this.gi(a),0,null,[H.b4(this,a,"i",0)])},
q:function(a,b){return this.h(a,b)},
u:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.F(a))}},
cZ:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.F(a))}return y},
aE:function(a,b){return H.cv(a,b,null,H.b4(this,a,"i",0))},
n:function(a,b){var z=H.L([],[H.b4(this,a,"i",0)])
C.f.si(z,C.b.n(this.gi(a),C.b.gi(b)))
C.f.Z(z,0,this.gi(a),a)
C.f.Z(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bj(a,"[","]")}},
eN:{"^":"J;$ti"},
eO:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
J:{"^":"c;$ti",
u:function(a,b){var z,y
for(z=J.b9(this.gL(a));z.t();){y=z.gw(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.V(this.gL(a))},
k:function(a){return P.ci(a)}},
fl:{"^":"c;$ti",
k:function(a){return P.bj(this,"{","}")},
u:function(a,b){var z
for(z=new P.bA(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
fk:{"^":"fl;$ti"}}],["","",,P,{"^":"",
eu:function(a){var z=J.n(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.ar(a)+"'"},
bf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aA(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eu(a)},
c8:function(a){return new P.h4(a)},
ac:function(a){H.bL(H.b(a))},
ir:{"^":"c;"},
"+bool":0,
c6:{"^":"c;cH:a<,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.c6))return!1
return this.a===b.a&&this.b===b.b},
J:function(a,b){return C.b.J(this.a,b.gcH())},
gv:function(a){var z=this.a
return(z^C.b.aY(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.em(H.fb(this))
y=P.aB(H.f9(this))
x=P.aB(H.f5(this))
w=P.aB(H.f6(this))
v=P.aB(H.f8(this))
u=P.aB(H.fa(this))
t=P.en(H.f7(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
em:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
en:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aB:function(a){if(a>=10)return""+a
return"0"+a}}},
b2:{"^":"ax;"},
"+double":0,
aC:{"^":"c;R:a<",
n:function(a,b){return new P.aC(C.b.n(this.a,b.gR()))},
F:function(a,b){return new P.aC(this.a-b.gR())},
O:function(a,b){return C.b.O(this.a,b.gR())},
X:function(a,b){return C.b.X(this.a,b.gR())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aC))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.b.J(this.a,b.gR())},
k:function(a){var z,y,x,w,v
z=new P.es()
y=this.a
if(y<0)return"-"+new P.aC(0-y).k(0)
x=z.$1(C.b.S(y,6e7)%60)
w=z.$1(C.b.S(y,1e6)%60)
v=new P.er().$1(y%1e6)
return""+C.b.S(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
eq:function(a,b,c,d,e,f){return new P.aC(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
er:{"^":"f:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
es:{"^":"f:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
x:{"^":"c;",
gM:function(){return H.a6(this.$thrownJsError)}},
cm:{"^":"x;",
k:function(a){return"Throw of null."}},
ah:{"^":"x;a,b,c,d",
gae:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gad:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gae()+y+x
if(!this.a)return w
v=this.gad()
u=P.bf(this.b)
return w+v+": "+H.b(u)},
p:{
e6:function(a,b,c){return new P.ah(!0,a,b,c)}}},
co:{"^":"ah;e,f,a,b,c,d",
gae:function(){return"RangeError"},
gad:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
aW:function(a,b,c){return new P.co(null,null,!0,a,b,"Value not in range")},
aV:function(a,b,c,d,e){return new P.co(b,c,!0,a,d,"Invalid value")},
fd:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.aV(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.aV(b,a,c,"end",f))
return b}}},
ey:{"^":"ah;e,i:f>,a,b,c,d",
gae:function(){return"RangeError"},
gad:function(){if(J.aK(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
r:function(a,b,c,d,e){var z=e!=null?e:J.V(b)
return new P.ey(b,z,!0,a,c,"Index out of range")}}},
fH:{"^":"x;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
m:function(a){return new P.fH(a)}}},
fF:{"^":"x;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
cO:function(a){return new P.fF(a)}}},
cr:{"^":"x;a",
k:function(a){return"Bad state: "+this.a},
p:{
fr:function(a){return new P.cr(a)}}},
ej:{"^":"x;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bf(z))+"."},
p:{
F:function(a){return new P.ej(a)}}},
cq:{"^":"c;",
k:function(a){return"Stack Overflow"},
gM:function(){return},
$isx:1},
el:{"^":"x;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
jj:{"^":"c;"},
h4:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
B:{"^":"ax;"},
"+int":0,
eA:{"^":"c;$ti",
u:function(a,b){var z
for(z=this.gH(this);z.t();)b.$1(z.gw(z))},
gi:function(a){var z,y
z=this.gH(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.H(P.aV(b,0,null,"index",null))
for(z=this.gH(this),y=0;z.t();){x=z.gw(z)
if(b===y)return x;++y}throw H.a(P.r(b,this,"index",null,y))},
k:function(a){return P.eB(this,"(",")")}},
h:{"^":"c;$ti"},
"+List":0,
bn:{"^":"c;$ti"},
aE:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
ax:{"^":"c;"},
"+num":0,
c:{"^":";",
A:function(a,b){return this===b},
gv:function(a){return H.aq(this)},
k:function(a){return"Instance of '"+H.ar(this)+"'"},
toString:function(){return this.k(this)}},
as:{"^":"c;"},
o:{"^":"c;"},
"+String":0,
bt:{"^":"c;N:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cu:function(a,b,c){var z=J.b9(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gw(z))
while(z.t())}else{a+=H.b(z.gw(z))
for(;z.t();)a=a+c+H.b(z.gw(z))}return a}}}}],["","",,W,{"^":"",
et:function(a){return"wheel"},
a2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
cV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
d4:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.fX(a)
if(!!J.n(z).$isu)return z
return}else return a},
d8:function(a){var z=$.q
if(z===C.e)return a
return z.cN(a)},
I:{"^":"aP;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
iT:{"^":"bq;l:x=,m:y=","%":"Accelerometer|LinearAccelerationSensor"},
iU:{"^":"e;i:length=","%":"AccessibleNodeList"},
iV:{"^":"I;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
iW:{"^":"I;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
eb:{"^":"I;B:height},C:width}",
av:function(a,b,c){if(c!=null)return a.getContext(b,P.is(c,null))
return a.getContext(b)},
bX:function(a,b){return this.av(a,b,null)},
"%":"HTMLCanvasElement"},
j_:{"^":"e;",
cT:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
a8:function(a){return P.G(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
j0:{"^":"y;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
j2:{"^":"aO;i:length=","%":"CSSPerspective"},
j3:{"^":"be;l:x=,m:y=","%":"CSSPositionValue"},
j4:{"^":"aO;l:x=,m:y=","%":"CSSRotation"},
j5:{"^":"aO;l:x=,m:y=","%":"CSSScale"},
j6:{"^":"fV;i:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ek:{"^":"c;"},
be:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
aO:{"^":"e;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
j7:{"^":"be;i:length=","%":"CSSTransformValue"},
j8:{"^":"aO;l:x=,m:y=","%":"CSSTranslation"},
j9:{"^":"be;i:length=","%":"CSSUnparsedValue"},
ja:{"^":"e;i:length=","%":"DataTransferItemList"},
jb:{"^":"e;l:x=,m:y=","%":"DeviceAcceleration"},
jc:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
jd:{"^":"eo;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"DOMPoint"},
eo:{"^":"e;",
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":";DOMPointReadOnly"},
je:{"^":"fZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.a_]},
$asi:function(){return[P.a_]},
$ish:1,
$ash:function(){return[P.a_]},
$asj:function(){return[P.a_]},
"%":"ClientRectList|DOMRectList"},
ep:{"^":"e;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gC(a))+" x "+H.b(this.gB(a))},
A:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa_)return!1
return a.left===z.gbs(b)&&a.top===z.gbI(b)&&this.gC(a)===z.gC(b)&&this.gB(a)===z.gB(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gC(a)
w=this.gB(a)
return W.cV(W.a2(W.a2(W.a2(W.a2(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gbJ:function(a){return new P.Z(a.left,a.top,[null])},
gB:function(a){return a.height},
gbs:function(a){return a.left},
gbI:function(a){return a.top},
gC:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa_:1,
$asa_:I.b3,
"%":";DOMRectReadOnly"},
jf:{"^":"h0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[P.o]},
$asi:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asj:function(){return[P.o]},
"%":"DOMStringList"},
jg:{"^":"e;i:length=","%":"DOMTokenList"},
aP:{"^":"y;",
k:function(a){return a.localName},
au:function(a){return a.getBoundingClientRect()},
gbw:function(a){return new W.a0(a,"mousedown",!1,[W.N])},
gbx:function(a){return new W.a0(a,"mousemove",!1,[W.N])},
gby:function(a){return new W.a0(a,"mouseup",!1,[W.N])},
gbz:function(a){return new W.a0(a,W.et(a),!1,[W.aH])},
$isaP:1,
"%":";Element"},
jh:{"^":"I;B:height},C:width}","%":"HTMLEmbedElement"},
ji:{"^":"aQ;E:error=","%":"ErrorEvent"},
aQ:{"^":"e;",
a7:function(a){return a.preventDefault()},
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
u:{"^":"e;",
b3:["c3",function(a,b,c,d){if(c!=null)this.co(a,b,c,!1)}],
co:function(a,b,c,d){return a.addEventListener(b,H.T(c,1),!1)},
cz:function(a,b,c,d){return a.removeEventListener(b,H.T(c,1),!1)},
$isu:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;d_|d0|d2|d3"},
jC:{"^":"h6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bg]},
$asi:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$asj:function(){return[W.bg]},
"%":"FileList"},
jD:{"^":"u;E:error=","%":"FileReader"},
jE:{"^":"u;E:error=,i:length=","%":"FileWriter"},
jG:{"^":"u;",
dk:function(a,b,c){return a.forEach(H.T(b,3),c)},
u:function(a,b){b=H.T(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
jI:{"^":"I;i:length=","%":"HTMLFormElement"},
jK:{"^":"bq;l:x=,m:y=","%":"Gyroscope"},
jL:{"^":"e;i:length=","%":"History"},
jM:{"^":"hj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.y]},
$asi:function(){return[W.y]},
$ish:1,
$ash:function(){return[W.y]},
$asj:function(){return[W.y]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
jN:{"^":"I;B:height},C:width}","%":"HTMLIFrameElement"},
jO:{"^":"I;B:height},C:width}","%":"HTMLImageElement"},
jQ:{"^":"I;B:height},C:width}","%":"HTMLInputElement"},
aS:{"^":"cM;",
gdh:function(a){return a.which},
$isaS:1,
"%":"KeyboardEvent"},
jW:{"^":"e;",
k:function(a){return String(a)},
"%":"Location"},
jX:{"^":"bq;l:x=,m:y=","%":"Magnetometer"},
eQ:{"^":"I;E:error=","%":"HTMLAudioElement;HTMLMediaElement"},
k_:{"^":"e;i:length=","%":"MediaList"},
k0:{"^":"u;",
b3:function(a,b,c,d){if(J.D(b,"message"))a.start()
this.c3(a,b,c,!1)},
"%":"MessagePort"},
k1:{"^":"hq;",
h:function(a,b){return P.G(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gL:function(a){var z=H.L([],[P.o])
this.u(a,new W.eS(z))
return z},
gi:function(a){return a.size},
$asJ:function(){return[P.o,null]},
"%":"MIDIInputMap"},
eS:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
k2:{"^":"hr;",
h:function(a,b){return P.G(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gL:function(a){var z=H.L([],[P.o])
this.u(a,new W.eT(z))
return z},
gi:function(a){return a.size},
$asJ:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
eT:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
k3:{"^":"ht;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bo]},
$asi:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$asj:function(){return[W.bo]},
"%":"MimeTypeArray"},
N:{"^":"cM;bb:button=",
gbv:function(a){var z,y,x
if(!!a.offsetX)return new P.Z(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.d4(z)).$isaP)throw H.a(P.m("offsetX is only supported on elements"))
y=W.d4(z)
z=[null]
x=new P.Z(a.clientX,a.clientY,z).F(0,J.dO(J.dP(y)))
return new P.Z(J.bV(x.a),J.bV(x.b),z)}},
$isN:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
y:{"^":"u;",
k:function(a){var z=a.nodeValue
return z==null?this.c4(a):z},
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
kb:{"^":"hv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.y]},
$asi:function(){return[W.y]},
$ish:1,
$ash:function(){return[W.y]},
$asj:function(){return[W.y]},
"%":"NodeList|RadioNodeList"},
kd:{"^":"I;B:height},C:width}","%":"HTMLObjectElement"},
aU:{"^":"e;i:length=","%":"Plugin"},
kg:{"^":"hz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aU]},
$asi:function(){return[W.aU]},
$ish:1,
$ash:function(){return[W.aU]},
$asj:function(){return[W.aU]},
"%":"PluginArray"},
kk:{"^":"e;",
au:function(a){return a.getBoundingClientRect()},
"%":"Range"},
kq:{"^":"hF;",
h:function(a,b){return P.G(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gL:function(a){var z=H.L([],[P.o])
this.u(a,new W.fh(z))
return z},
gi:function(a){return a.size},
$asJ:function(){return[P.o,null]},
"%":"RTCStatsReport"},
fh:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
kr:{"^":"I;i:length=","%":"HTMLSelectElement"},
bq:{"^":"u;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ks:{"^":"aQ;E:error=","%":"SensorErrorEvent"},
kt:{"^":"d0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.br]},
$asi:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$asj:function(){return[W.br]},
"%":"SourceBufferList"},
ku:{"^":"hH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bs]},
$asi:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$asj:function(){return[W.bs]},
"%":"SpeechGrammarList"},
kv:{"^":"aQ;E:error=","%":"SpeechRecognitionError"},
aY:{"^":"e;i:length=","%":"SpeechRecognitionResult"},
kx:{"^":"hK;",
h:function(a,b){return a.getItem(b)},
u:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gL:function(a){var z=H.L([],[P.o])
this.u(a,new W.ft(z))
return z},
gi:function(a){return a.length},
$asJ:function(){return[P.o,P.o]},
"%":"Storage"},
ft:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
kB:{"^":"hP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bw]},
$asi:function(){return[W.bw]},
$ish:1,
$ash:function(){return[W.bw]},
$asj:function(){return[W.bw]},
"%":"TextTrackCueList"},
kC:{"^":"d3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bv]},
$asi:function(){return[W.bv]},
$ish:1,
$ash:function(){return[W.bv]},
$asj:function(){return[W.bv]},
"%":"TextTrackList"},
kD:{"^":"e;i:length=","%":"TimeRanges"},
kE:{"^":"hU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.by]},
$asi:function(){return[W.by]},
$ish:1,
$ash:function(){return[W.by]},
$asj:function(){return[W.by]},
"%":"TouchList"},
kF:{"^":"e;i:length=","%":"TrackDefaultList"},
cM:{"^":"aQ;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
kI:{"^":"e;",
k:function(a){return String(a)},
"%":"URL"},
kK:{"^":"e;l:x=","%":"VRStageBoundsPoint"},
kM:{"^":"eQ;B:height},C:width}","%":"HTMLVideoElement"},
kN:{"^":"u;i:length=","%":"VideoTrackList"},
aH:{"^":"N;",
gcV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.m("deltaY is not supported"))},
$isaH:1,
"%":"WheelEvent"},
fK:{"^":"u;",
gcK:function(a){var z,y
z=P.ax
y=new P.a1(0,$.q,null,[z])
this.ct(a)
this.cA(a,W.d8(new W.fL(new P.hN(y,[z]))))
return y},
cA:function(a,b){return a.requestAnimationFrame(H.T(b,1))},
ct:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fL:{"^":"f:1;a",
$1:function(a){this.a.cS(0,a)}},
kO:{"^":"u;"},
kS:{"^":"hZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bd]},
$asi:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$asj:function(){return[W.bd]},
"%":"CSSRuleList"},
kT:{"^":"ep;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa_)return!1
return a.left===z.gbs(b)&&a.top===z.gbI(b)&&a.width===z.gC(b)&&a.height===z.gB(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.cV(W.a2(W.a2(W.a2(W.a2(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gbJ:function(a){return new P.Z(a.left,a.top,[null])},
gB:function(a){return a.height},
gC:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
kU:{"^":"i0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bi]},
$asi:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$asj:function(){return[W.bi]},
"%":"GamepadList"},
kV:{"^":"i2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.y]},
$asi:function(){return[W.y]},
$ish:1,
$ash:function(){return[W.y]},
$asj:function(){return[W.y]},
"%":"MozNamedAttrMap|NamedNodeMap"},
kW:{"^":"i4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.aY]},
$asi:function(){return[W.aY]},
$ish:1,
$ash:function(){return[W.aY]},
$asj:function(){return[W.aY]},
"%":"SpeechRecognitionResultList"},
kX:{"^":"i6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isl:1,
$asl:function(){return[W.bu]},
$asi:function(){return[W.bu]},
$ish:1,
$ash:function(){return[W.bu]},
$asj:function(){return[W.bu]},
"%":"StyleSheetList"},
h1:{"^":"ct;a,b,c,$ti",
bu:function(a,b,c,d){return W.a8(this.a,this.b,a,!1,H.w(this,0))}},
a0:{"^":"h1;a,b,c,$ti"},
h2:{"^":"fu;a,b,c,d,e,$ti",
ck:function(a,b,c,d,e){this.cF()},
cP:function(a){if(this.b==null)return
this.cG()
this.b=null
this.d=null
return},
cF:function(){var z=this.d
if(z!=null&&this.a<=0)J.du(this.b,this.c,z,!1)},
cG:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.dt(x,this.c,z,!1)}},
p:{
a8:function(a,b,c,d,e){var z=W.d8(new W.h3(c))
z=new W.h2(0,a,b,z,!1,[e])
z.ck(a,b,c,!1,e)
return z}}},
h3:{"^":"f:1;a",
$1:function(a){return this.a.$1(a)}},
j:{"^":"c;$ti",
gH:function(a){return new W.ev(a,this.gi(a),-1,null,[H.b4(this,a,"j",0)])}},
ev:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ds(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gw:function(a){return this.d}},
fW:{"^":"c;a",$isu:1,p:{
fX:function(a){if(a===window)return a
else return new W.fW(a)}}},
fV:{"^":"e+ek;"},
fY:{"^":"e+i;"},
fZ:{"^":"fY+j;"},
h_:{"^":"e+i;"},
h0:{"^":"h_+j;"},
h5:{"^":"e+i;"},
h6:{"^":"h5+j;"},
hi:{"^":"e+i;"},
hj:{"^":"hi+j;"},
hq:{"^":"e+J;"},
hr:{"^":"e+J;"},
hs:{"^":"e+i;"},
ht:{"^":"hs+j;"},
hu:{"^":"e+i;"},
hv:{"^":"hu+j;"},
hy:{"^":"e+i;"},
hz:{"^":"hy+j;"},
hF:{"^":"e+J;"},
d_:{"^":"u+i;"},
d0:{"^":"d_+j;"},
hG:{"^":"e+i;"},
hH:{"^":"hG+j;"},
hK:{"^":"e+J;"},
hO:{"^":"e+i;"},
hP:{"^":"hO+j;"},
d2:{"^":"u+i;"},
d3:{"^":"d2+j;"},
hT:{"^":"e+i;"},
hU:{"^":"hT+j;"},
hY:{"^":"e+i;"},
hZ:{"^":"hY+j;"},
i_:{"^":"e+i;"},
i0:{"^":"i_+j;"},
i1:{"^":"e+i;"},
i2:{"^":"i1+j;"},
i3:{"^":"e+i;"},
i4:{"^":"i3+j;"},
i5:{"^":"e+i;"},
i6:{"^":"i5+j;"}}],["","",,P,{"^":"",
G:function(a){var z,y,x,w,v
if(a==null)return
z=P.W()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.Q)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
is:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.bR(a,new P.it(z))
return z},
it:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",kp:{"^":"u;E:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},kG:{"^":"u;E:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
fc:function(a){return C.l},
cU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hl:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hk:{"^":"c;",
a6:function(){return Math.random()}},
Z:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
A:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.Z))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gv:function(a){var z,y
z=J.R(this.a)
y=J.R(this.b)
return P.hl(P.cU(P.cU(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.b.gl(b)
if(typeof z!=="number")return z.n()
y=C.a.n(z,y)
z=this.b
x=C.b.gm(b)
if(typeof z!=="number")return z.n()
return new P.Z(y,C.a.n(z,x),this.$ti)},
F:function(a,b){var z,y,x,w
z=this.a
y=J.d(b)
x=y.gl(b)
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.A(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.F()
if(typeof y!=="number")return H.A(y)
return new P.Z(z-x,w-y,this.$ti)}},
kj:{"^":"c;"},
hA:{"^":"c;$ti"},
a_:{"^":"hA;$ti"}}],["","",,P,{"^":"",jk:{"^":"t;l:x=,m:y=","%":"SVGFEBlendElement"},jl:{"^":"t;l:x=,m:y=","%":"SVGFEColorMatrixElement"},jm:{"^":"t;l:x=,m:y=","%":"SVGFEComponentTransferElement"},jn:{"^":"t;l:x=,m:y=","%":"SVGFECompositeElement"},jo:{"^":"t;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},jp:{"^":"t;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},jq:{"^":"t;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},jr:{"^":"t;l:x=,m:y=","%":"SVGFEFloodElement"},js:{"^":"t;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},jt:{"^":"t;l:x=,m:y=","%":"SVGFEImageElement"},ju:{"^":"t;l:x=,m:y=","%":"SVGFEMergeElement"},jv:{"^":"t;l:x=,m:y=","%":"SVGFEMorphologyElement"},jw:{"^":"t;l:x=,m:y=","%":"SVGFEOffsetElement"},jx:{"^":"t;l:x=,m:y=","%":"SVGFEPointLightElement"},jy:{"^":"t;l:x=,m:y=","%":"SVGFESpecularLightingElement"},jz:{"^":"t;l:x=,m:y=","%":"SVGFESpotLightElement"},jA:{"^":"t;l:x=,m:y=","%":"SVGFETileElement"},jB:{"^":"t;l:x=,m:y=","%":"SVGFETurbulenceElement"},jF:{"^":"t;l:x=,m:y=","%":"SVGFilterElement"},jH:{"^":"aj;l:x=,m:y=","%":"SVGForeignObjectElement"},ew:{"^":"aj;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aj:{"^":"t;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},jP:{"^":"aj;l:x=,m:y=","%":"SVGImageElement"},jU:{"^":"hn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.ce]},
$ish:1,
$ash:function(){return[P.ce]},
$asj:function(){return[P.ce]},
"%":"SVGLengthList"},jY:{"^":"t;l:x=,m:y=","%":"SVGMaskElement"},kc:{"^":"hx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cn]},
$ish:1,
$ash:function(){return[P.cn]},
$asj:function(){return[P.cn]},
"%":"SVGNumberList"},kf:{"^":"t;l:x=,m:y=","%":"SVGPatternElement"},kh:{"^":"e;l:x=,m:y=","%":"SVGPoint"},ki:{"^":"e;i:length=","%":"SVGPointList"},kl:{"^":"e;l:x=,m:y=","%":"SVGRect"},km:{"^":"ew;l:x=,m:y=","%":"SVGRectElement"},ky:{"^":"hM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asj:function(){return[P.o]},
"%":"SVGStringList"},t:{"^":"aP;",
gbw:function(a){return new W.a0(a,"mousedown",!1,[W.N])},
gbx:function(a){return new W.a0(a,"mousemove",!1,[W.N])},
gby:function(a){return new W.a0(a,"mouseup",!1,[W.N])},
gbz:function(a){return new W.a0(a,"mousewheel",!1,[W.aH])},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kz:{"^":"aj;l:x=,m:y=","%":"SVGSVGElement"},fC:{"^":"aj;","%":"SVGTextPathElement;SVGTextContentElement"},kA:{"^":"fC;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},kH:{"^":"hW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cz]},
$ish:1,
$ash:function(){return[P.cz]},
$asj:function(){return[P.cz]},
"%":"SVGTransformList"},kJ:{"^":"aj;l:x=,m:y=","%":"SVGUseElement"},hm:{"^":"e+i;"},hn:{"^":"hm+j;"},hw:{"^":"e+i;"},hx:{"^":"hw+j;"},hL:{"^":"e+i;"},hM:{"^":"hL+j;"},hV:{"^":"e+i;"},hW:{"^":"hV+j;"}}],["","",,P,{"^":"",iX:{"^":"e;i:length=","%":"AudioBuffer"},iY:{"^":"fT;",
h:function(a,b){return P.G(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.G(y.value[1]))}},
gL:function(a){var z=H.L([],[P.o])
this.u(a,new P.e8(z))
return z},
gi:function(a){return a.size},
$asJ:function(){return[P.o,null]},
"%":"AudioParamMap"},e8:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},iZ:{"^":"u;i:length=","%":"AudioTrackList"},e9:{"^":"u;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ke:{"^":"e9;i:length=","%":"OfflineAudioContext"},fT:{"^":"e+J;"}}],["","",,P,{"^":"",kn:{"^":"e;",
b2:function(a,b){return a.activeTexture(b)},
b4:function(a,b,c){return a.attachShader(b,c)},
b5:function(a,b,c){return a.bindBuffer(b,c)},
b7:function(a,b,c){return a.bindTexture(b,c)},
b8:function(a,b){return a.blendEquation(b)},
b9:function(a,b,c){return a.blendFunc(b,c)},
ba:function(a,b,c,d){return a.bufferData(b,c,d)},
bc:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bd:function(a,b){return a.compileShader(b)},
be:function(a){return a.createBuffer()},
bf:function(a){return a.createProgram()},
bg:function(a,b){return a.createShader(b)},
bh:function(a){return a.createTexture()},
bj:function(a,b){return a.depthMask(b)},
bk:function(a,b){return a.disable(b)},
bl:function(a,b,c,d){return a.drawArrays(b,c,d)},
bm:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bn:function(a,b){return a.enable(b)},
bo:function(a,b){return a.enableVertexAttribArray(b)},
a8:function(a){return P.G(a.getContextAttributes())},
aw:function(a){return a.getError()},
ax:function(a,b){return a.getProgramInfoLog(b)},
ay:function(a,b,c){return a.getProgramParameter(b,c)},
az:function(a,b){return a.getShaderInfoLog(b)},
aA:function(a,b,c){return a.getShaderParameter(b,c)},
aB:function(a,b,c){return a.getUniformLocation(b,c)},
bt:function(a,b){return a.linkProgram(b)},
bA:function(a,b,c){return a.pixelStorei(b,c)},
aD:function(a,b,c){return a.shaderSource(b,c)},
aG:function(a,b,c,d){return a.stencilFunc(b,c,d)},
at:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bD:function(a,b,c,d,e,f,g){return this.at(a,b,c,d,e,f,g,null,null,null)},
bE:function(a,b,c,d){return a.texParameterf(b,c,d)},
bF:function(a,b,c,d){return a.texParameteri(b,c,d)},
bK:function(a,b,c){return a.uniform1f(b,c)},
bL:function(a,b,c){return a.uniform1fv(b,c)},
bM:function(a,b,c){return a.uniform1i(b,c)},
bN:function(a,b,c){return a.uniform1iv(b,c)},
bO:function(a,b,c){return a.uniform2fv(b,c)},
bP:function(a,b,c){return a.uniform3fv(b,c)},
bQ:function(a,b,c){return a.uniform4fv(b,c)},
bR:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bS:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bT:function(a,b){return a.useProgram(b)},
bU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},ko:{"^":"e;",
cL:function(a,b){return a.beginTransformFeedback(b)},
cO:function(a,b){return a.bindVertexArray(b)},
cU:function(a){return a.createVertexArray()},
cW:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cX:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cY:function(a){return a.endTransformFeedback()},
de:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
df:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b2:function(a,b){return a.activeTexture(b)},
b4:function(a,b,c){return a.attachShader(b,c)},
b5:function(a,b,c){return a.bindBuffer(b,c)},
b7:function(a,b,c){return a.bindTexture(b,c)},
b8:function(a,b){return a.blendEquation(b)},
b9:function(a,b,c){return a.blendFunc(b,c)},
ba:function(a,b,c,d){return a.bufferData(b,c,d)},
bc:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bd:function(a,b){return a.compileShader(b)},
be:function(a){return a.createBuffer()},
bf:function(a){return a.createProgram()},
bg:function(a,b){return a.createShader(b)},
bh:function(a){return a.createTexture()},
bj:function(a,b){return a.depthMask(b)},
bk:function(a,b){return a.disable(b)},
bl:function(a,b,c,d){return a.drawArrays(b,c,d)},
bm:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bn:function(a,b){return a.enable(b)},
bo:function(a,b){return a.enableVertexAttribArray(b)},
a8:function(a){return P.G(a.getContextAttributes())},
aw:function(a){return a.getError()},
ax:function(a,b){return a.getProgramInfoLog(b)},
ay:function(a,b,c){return a.getProgramParameter(b,c)},
az:function(a,b){return a.getShaderInfoLog(b)},
aA:function(a,b,c){return a.getShaderParameter(b,c)},
aB:function(a,b,c){return a.getUniformLocation(b,c)},
bt:function(a,b){return a.linkProgram(b)},
bA:function(a,b,c){return a.pixelStorei(b,c)},
aD:function(a,b,c){return a.shaderSource(b,c)},
aG:function(a,b,c,d){return a.stencilFunc(b,c,d)},
at:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
bD:function(a,b,c,d,e,f,g){return this.at(a,b,c,d,e,f,g,null,null,null)},
bE:function(a,b,c,d){return a.texParameterf(b,c,d)},
bF:function(a,b,c,d){return a.texParameteri(b,c,d)},
bK:function(a,b,c){return a.uniform1f(b,c)},
bL:function(a,b,c){return a.uniform1fv(b,c)},
bM:function(a,b,c){return a.uniform1i(b,c)},
bN:function(a,b,c){return a.uniform1iv(b,c)},
bO:function(a,b,c){return a.uniform2fv(b,c)},
bP:function(a,b,c){return a.uniform3fv(b,c)},
bQ:function(a,b,c){return a.uniform4fv(b,c)},
bR:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bS:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bT:function(a,b){return a.useProgram(b)},
bU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",kw:{"^":"hJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.r(b,a,null,null,null))
return P.G(a.item(b))},
j:function(a,b,c){throw H.a(P.m("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asi:function(){return[P.bn]},
$ish:1,
$ash:function(){return[P.bn]},
$asj:function(){return[P.bn]},
"%":"SQLResultSetRowList"},hI:{"^":"e+i;"},hJ:{"^":"hI+j;"}}],["","",,G,{"^":"",
fN:function(a){var z,y,x,w
z=H.L(a.split("\n"),[P.o])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.k(z,y)
z[y]=w}return C.f.a5(z,"\n")},
cR:function(a,b,c){var z,y,x,w
z=J.d(a)
y=z.bg(a,b)
z.aD(a,y,c)
z.bd(a,y)
x=z.aA(a,y,35713)
if(x!=null&&J.D(x,!1)){w=z.az(a,y)
P.ac("E:Compilation failed:")
P.ac("E:"+G.fN(c))
P.ac("E:Failure:")
P.ac(C.m.n("E:",w))
throw H.a(w)}return y},
c9:function(a,b){var z,y,x,w,v,u,t
z=a.length
b=new Float32Array(z*3)
for(z=a.length,y=b.length,x=0;x<z;++x){w=x*3
v=a[x].a
u=v[0]
if(w>=y)return H.k(b,w)
b[w]=u
u=w+1
t=v[1]
if(u>=y)return H.k(b,u)
b[u]=t
w+=2
v=v[2]
if(w>=y)return H.k(b,w)
b[w]=v}return b},
aT:{"^":"c;"},
cN:{"^":"aT;",
aN:function(){return this.d},
k:function(a){var z,y,x,w
z=H.L(["{"+H.b(new H.cL(H.iB(this),null))+"}["+this.a+"]"],[P.o])
for(y=this.d,x=new H.ap(y,y.r,null,null,[H.w(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.f.a5(z,"\n")}},
ea:{"^":"fq;"},
ee:{"^":"c;a,b",
bp:function(a,b,c){J.dM(this.a,b)
if(c>0)J.e4(this.a,b,c)},
bV:function(a,b,c,d,e,f,g,h){J.bP(this.a,34962,b)
J.e5(this.a,c,d,e,!1,g,h)}},
cy:{"^":"c;a,b,c"},
cx:{"^":"c;a,b,c"},
eP:{"^":"cN;d,a,b,c"},
eR:{"^":"aT;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aK:function(a,b,c){var z,y
C.m.aQ(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bP(z.a,34962,y)
J.dy(z.a,34962,b,35048)},
c8:function(){return this.ch.length/3|0},
aJ:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bQ(y.a))
this.ch=a
this.aK("aPosition",a,3)
x=$.$get$a3().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.b7(y.a,this.e)
y.bp(0,w,0)
y.bV(0,z.h(0,"aPosition"),w,x.aM(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=["Faces:0"]
for(y=this.cy,x=new H.ap(y,y.r,null,null,[H.w(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+":"+y.h(0,w).length)}return"MESH["+this.a+"] "+C.f.a5(z,"  ")},
p:{
cj:function(a,b,c,d){return new G.eR(b,J.dF(b.a),c,P.W(),d,null,0,-1,null,null,P.W(),"meshdata:"+a,!1,!0)}}},
f3:{"^":"cN;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
c6:function(a,b){var z
if(typeof a!=="number")return a.V()
if(typeof b!=="number")return H.A(b)
z=a/b
if(this.z===z)return
this.z=z
this.aO()},
aO:function(){var z,y,x,w,v,u
z=this.z
y=this.Q
x=this.ch
w=Math.tan(this.y*3.141592653589793/180*0.5)
v=y-x
u=this.db.a
u[0]=0
u[1]=0
u[2]=0
u[3]=0
u[4]=0
u[5]=0
u[6]=0
u[7]=0
u[8]=0
u[9]=0
u[10]=0
u[11]=0
u[12]=0
u[13]=0
u[14]=0
u[15]=0
u[0]=1/(w*z)
u[5]=1/w
u[10]=(x+y)/v
u[11]=-1
u[14]=2*y*x/v},
aN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.v(new Float32Array(3))
u.a_(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.D(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.n(t)
x=!!y.$isa7
q=x?y.gdl(t):1
if(!!y.$isv){p=y.gl(t)
s=y.gm(t)
r=y.gdi(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gdi(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.A(t)
x=z[4]
if(typeof s!=="number")return H.A(s)
w=z[8]
if(typeof r!=="number")return H.A(r)
o=z[12]
n=z[1]
m=z[5]
l=z[9]
k=z[13]
j=z[2]
i=z[6]
h=z[10]
g=z[14]
f=z[3]
e=z[7]
d=z[11]
c=z[15]
z[12]=y*t+x*s+w*r+o*q
z[13]=n*t+m*s+l*r+k*q
z[14]=j*t+i*s+h*r+g*q
z[15]=f*t+e*s+d*r+c*q
c=this.cx
c.D(this.db)
c.d7(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
fg:{"^":"aT;d,e,f,r,x,y,z,Q,ch,a,b,c",
cc:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.Q)(z),++u){t=z[u]
x.j(0,t,J.bT(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.Q)(z),++u){t=z[u]
x.j(0,t,J.bT(w.a,v,t))}},
cg:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ap(y,y.r,null,null,[H.w(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.an(0,v))x.push(v)}for(z=this.x,y=new P.bA(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.G(0,v))x.push(v)}return x},
ci:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ap(b,b.r,null,null,[H.w(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.dA(t,0)){case 117:if(w.an(0,t)){s=b.h(0,t)
if(v.an(0,t))H.bL("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$a3().h(0,t)
if(r==null)H.H("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.ba(x.a,q,s)
else if(!!J.n(s).$isez)J.e2(x.a,q,s)
break
case"float":if(r.c===0)J.e0(x.a,q,s)
else if(!!J.n(s).$isbh)J.e1(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.U(s,"$isS").a
J.c_(x.a,q,!1,p)}else if(!!J.n(s).$isbh)J.c_(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.p.gc1(H.U(s,"$isjZ"))
J.bZ(x.a,q,!1,p)}else if(!!J.n(s).$isbh)J.bZ(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.bY(o,q,H.U(s,"$isa7").a)
else J.bY(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.bX(o,q,H.U(s,"$isv").a)
else J.bX(o,q,s)
break
case"vec2":if(r.c===0){p=C.p.gc1(H.U(s,"$iskL"))
J.bW(x.a,q,p)}else J.bW(x.a,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.A(p)
J.bN(x.a,33984+p)
p=H.U(s,"$isbx").b
J.az(x.a,3553,p)
p=this.ch
J.ba(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.A(p)
J.bN(x.a,33984+p)
p=H.U(s,"$isbx").b
J.az(x.a,34067,p)
p=this.ch
J.ba(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.bL("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.D(s,!0)
o=x.a
if(p)J.aL(o,2929)
else J.b8(o,2929)
break
case"cStencilFunc":H.U(s,"$iscy")
p=s.a
o=x.a
if(p===1281)J.b8(o,2960)
else{J.aL(o,2960)
o=s.b
n=s.c
J.dX(x.a,p,o,n)}break
case"cDepthWrite":J.dG(x.a,s)
break
case"cBlendEquation":H.U(s,"$iscx")
p=s.a
o=x.a
if(p===1281)J.b8(o,3042)
else{J.aL(o,3042)
o=s.b
n=s.c
J.dx(x.a,o,n)
J.dw(x.a,p)}break}++u
break}}m=P.eq(0,0,0,Date.now()-new P.c6(z,!1).a,0,0)
""+u
m.k(0)},
c7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.e3(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aV()}for(x=0;x<2;++x){w=b[x]
this.ci(w.a,w.aN())}y=this.Q
y.T(0)
for(v=a.cy,u=new H.ap(v,v.r,null,null,[H.w(v,0)]),u.c=v.e;u.t();)y.K(0,u.d)
t=this.cg()
if(t.length!==0)P.ac("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.b7(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.c8()
u=a.Q
r=a.z
if(s)J.dv(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.dK(q,y,v,u,0,r)
else J.dJ(q,y,v,u,0)}else{u=z.a
if(r>1)J.dI(u,y,0,v,r)
else J.dH(u,y,0,v)}if(s)J.dN(z.a)},
aL:function(a,b){return this.c7(a,b,null)},
p:{
cp:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.X(null,null,null,P.o)
y=c.b
x=d.b
w=c.f
v=J.dC(b.a)
u=G.cR(b.a,35633,y)
J.bO(b.a,v,u)
t=G.cR(b.a,35632,x)
J.bO(b.a,v,t)
if(w.length>0)J.e_(b.a,v,w,35980)
J.dV(b.a,v)
if(J.dU(b.a,v,35714)!==!0)H.H(J.dT(b.a,v))
z=new G.fg(b,c,d,v,P.eM(c.c,null),P.W(),P.W(),z,null,a,!1,!0)
z.cc(a,b,c,d)
return z}}},
p:{"^":"c;a,b,c",
aM:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fm:{"^":"c;a,b,c,d,e,f,r,x",
aI:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.Q)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.f.aF(y)},
a0:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.Q)(a),++x)y.push(a[x])
C.f.aF(y)},
cd:function(a,b){this.b=this.cj(!0,a,b)},
a1:function(a){return this.cd(a,null)},
cj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.Q)(z),++u){t=z[u]
s=$.$get$a3().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.k(z,u)
q=z[u]
s=$.$get$a3().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.Q)(z),++u){q=z[u]
s=$.$get$a3().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.Q)(z),++u){q=z[u]
s=$.$get$a3().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.f.cJ(w,b)
w.push("}")
return C.f.a5(w,"\n")},
p:{
aX:function(a){return new G.fm(a,null,[],[],[],[],0,P.W())}}},
fq:{"^":"aT;"},
fD:{"^":"c;a,b,c,d,e,f,r",
c9:function(a,b){var z=this.e
if(z!==1)J.dZ(a.a,b,34046,z)
J.bU(a.a,b,10240,this.r)
J.bU(a.a,b,10241,this.f)}},
bx:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
ex:{"^":"bx;f,a,b,c,d,e",
ce:function(a){var z,y
z=this.d
y=this.c
J.az(z.a,y,this.b)
J.dY(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
fI:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$cP().a6()
if(v>=w)return H.k(x,v)
x[v]=(u-0.5)*c}y=G.cj(z,a.d,0,a.e.x)
y.aJ(x)
return y}}],["","",,V,{}],["","",,D,{"^":"",eG:{"^":"c;a,b,c",
ca:function(a){var z
a=document
z=W.aS
W.a8(a,"keydown",new D.eI(this),!1,z)
W.a8(a,"keyup",new D.eJ(this),!1,z)},
p:{
eH:function(a){var z=P.B
z=new D.eG(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z))
z.ca(a)
return z}}},eI:{"^":"f:7;a",
$1:function(a){var z=this.a
z.a.K(0,J.bS(a))
z.b.K(0,a.which)}},eJ:{"^":"f:7;a",
$1:function(a){var z=this.a
z.a.bB(0,J.bS(a))
z.c.K(0,a.which)}},eU:{"^":"c;a,b,c,d,e,f,r,x",
cb:function(a){var z,y
z=J.d(a)
y=z.gbx(a)
W.a8(y.a,y.b,new D.eW(this),!1,H.w(y,0))
y=z.gbw(a)
W.a8(y.a,y.b,new D.eX(this),!1,H.w(y,0))
y=z.gby(a)
W.a8(y.a,y.b,new D.eY(this),!1,H.w(y,0))
z=z.gbz(a)
W.a8(z.a,z.b,new D.eZ(this),!1,H.w(z,0))},
p:{
eV:function(a){var z=P.B
z=new D.eU(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z),0,0,0,0,0)
z.cb(a)
return z}}},eW:{"^":"f:4;a",
$1:function(a){var z,y
z=J.d(a)
z.a7(a)
y=this.a
y.r=z.gbv(a).a
y.x=z.gbv(a).b
y.d=a.movementX
y.e=a.movementY}},eX:{"^":"f:4;a",
$1:function(a){var z=J.d(a)
z.a7(a)
P.ac("BUTTON "+H.b(z.gbb(a)))
z=this.a
z.a.K(0,a.button)
z.b.K(0,a.button)}},eY:{"^":"f:4;a",
$1:function(a){var z,y
z=J.d(a)
z.a7(a)
y=this.a
y.a.bB(0,z.gbb(a))
y.c.K(0,a.button)}},eZ:{"^":"f:14;a",
$1:function(a){var z=J.d(a)
z.a7(a)
this.a.f=z.gcV(a)}},f2:{"^":"ea;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bH:function(a){var z,y
z=C.H.cZ(a,0,new A.iD())
if(typeof z!=="number")return H.A(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
iD:{"^":"f:15;",
$2:function(a,b){var z,y
z=J.af(a,J.R(b))
if(typeof z!=="number")return H.A(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",S:{"^":"c;aU:a<",
D:function(a){var z,y
z=a.a
y=this.a
y[15]=z[15]
y[14]=z[14]
y[13]=z[13]
y[12]=z[12]
y[11]=z[11]
y[10]=z[10]
y[9]=z[9]
y[8]=z[8]
y[7]=z[7]
y[6]=z[6]
y[5]=z[5]
y[4]=z[4]
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){return"[0] "+this.W(0).k(0)+"\n[1] "+this.W(1).k(0)+"\n[2] "+this.W(2).k(0)+"\n[3] "+this.W(3).k(0)+"\n"},
A:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.S){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bH(this.a)},
W:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.k(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.k(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.k(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.k(y,x)
z[3]=y[x]
return new T.a7(z)},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.S(z)
y.D(this)
x=b.gaU()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
z[4]=C.a.n(z[4],x.h(0,4))
z[5]=C.a.n(z[5],x.h(0,5))
z[6]=C.a.n(z[6],x.h(0,6))
z[7]=C.a.n(z[7],x.h(0,7))
z[8]=C.a.n(z[8],x.h(0,8))
z[9]=C.a.n(z[9],x.h(0,9))
z[10]=C.a.n(z[10],x.h(0,10))
z[11]=C.a.n(z[11],x.h(0,11))
z[12]=C.a.n(z[12],x.h(0,12))
z[13]=C.a.n(z[13],x.h(0,13))
z[14]=C.a.n(z[14],x.h(0,14))
z[15]=C.a.n(z[15],x.h(0,15))
return y},
F:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.S(z)
y.D(this)
x=b.gaU()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
z[4]=z[4]-x[4]
z[5]=z[5]-x[5]
z[6]=z[6]-x[6]
z[7]=z[7]-x[7]
z[8]=z[8]-x[8]
z[9]=z[9]-x[9]
z[10]=z[10]-x[10]
z[11]=z[11]-x[11]
z[12]=z[12]-x[12]
z[13]=z[13]-x[13]
z[14]=z[14]-x[14]
z[15]=z[15]-x[15]
return y},
Y:function(){var z=this.a
z[0]=1
z[1]=0
z[2]=0
z[3]=0
z[4]=0
z[5]=1
z[6]=0
z[7]=0
z[8]=0
z[9]=0
z[10]=1
z[11]=0
z[12]=0
z[13]=0
z[14]=0
z[15]=1},
d7:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=this.a
y=z[0]
x=z[4]
w=z[8]
v=z[12]
u=z[1]
t=z[5]
s=z[9]
r=z[13]
q=z[2]
p=z[6]
o=z[10]
n=z[14]
m=z[3]
l=z[7]
k=z[11]
j=z[15]
i=a9.a
h=i[0]
g=i[4]
f=i[8]
e=i[12]
d=i[1]
c=i[5]
b=i[9]
a=i[13]
a0=i[2]
a1=i[6]
a2=i[10]
a3=i[14]
a4=i[3]
a5=i[7]
a6=i[11]
a7=i[15]
z[0]=y*h+x*d+w*a0+v*a4
z[4]=y*g+x*c+w*a1+v*a5
z[8]=y*f+x*b+w*a2+v*a6
z[12]=y*e+x*a+w*a3+v*a7
z[1]=u*h+t*d+s*a0+r*a4
z[5]=u*g+t*c+s*a1+r*a5
z[9]=u*f+t*b+s*a2+r*a6
z[13]=u*e+t*a+s*a3+r*a7
z[2]=q*h+p*d+o*a0+n*a4
z[6]=q*g+p*c+o*a1+n*a5
z[10]=q*f+p*b+o*a2+n*a6
z[14]=q*e+p*a+o*a3+n*a7
z[3]=m*h+l*d+k*a0+j*a4
z[7]=m*g+l*c+k*a1+j*a5
z[11]=m*f+l*b+k*a2+j*a6
z[15]=m*e+l*a+k*a3+j*a7}},v:{"^":"c;b0:a<",
a_:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
D:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
A:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.v){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bH(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.v(z)
y.D(this)
x=b.gb0()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.v(z)
y.D(this)
x=b.gb0()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
return y},
V:function(a,b){return this.bZ(1/b)},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
ar:function(a){var z,y,x,w,v,u
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=Math.sqrt(y*y+x*x+w*w)
if(v===0)return 0
u=1/v
z[0]=z[0]*u
z[1]=z[1]*u
z[2]=z[2]*u
return v},
ao:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bi:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.v(new Float32Array(3))
z.a_(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
bZ:function(a){var z,y
z=new Float32Array(3)
y=new T.v(z)
y.D(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
p:{
fJ:function(a,b,c){var z=new T.v(new Float32Array(3))
z.a_(a,b,c)
return z}}},a7:{"^":"c;b1:a<",
D:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
A:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a7){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bH(this.a)},
F:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a7(z)
y.D(this)
x=b.gb1()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a7(z)
y.D(this)
x=b.gb1()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
return y},
V:function(a,b){var z=new T.a7(new Float32Array(4))
z.D(this)
z.bY(0,1/b)
return z},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
bY:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}}}],["","",,R,{"^":"",
iA:function(a){var z,y,x,w,v,u,t,s,r
z=[]
y=[]
for(x=0;x<200;++x){w=new Float32Array(3)
w[0]=0
w[1]=0
w[2]=0
z.push(new T.v(w))
w=C.l.a6()
v=C.l.a6()
u=C.l.a6()
t=new Float32Array(3)
t[0]=w-0.5
t[1]=v-0.5
t[2]=u-0.5
y.push(new T.v(t))}w=G.cj("firefwork-particles",a.d,0,a.e.x)
w.aJ(G.c9(z,null))
v=G.c9(y,null)
u=w.r
t=w.d
u.j(0,"aNormal",J.bQ(t.a))
w.aK("aNormal",v,3)
s=$.$get$a3().h(0,"aNormal")
if(s==null)H.H("Unknown canonical aNormal")
r=w.x.h(0,"aNormal")
J.b7(t.a,w.e)
t.bp(0,r,0)
t.bV(0,u.h(0,"aNormal"),r,s.aM(),5126,!1,0,0)
return w},
dl:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
y=document
x=y.querySelector("#webgl-canvas")
w=x.clientWidth
v=x.clientHeight
u=J.d(x)
u.sC(x,w)
u.sB(x,v)
t=new G.ee(null,x)
u=J.dQ(x,"webgl2",P.cf(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
t.a=u
if(u==null)H.H(P.c8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.b(J.dR(u))
if($.iw>0)P.ac("I: "+s)
J.dz(u,0,0,0,1)
J.aL(u,2929)
u=new Float32Array(3)
s=D.eH(null)
r=D.eV(x)
q=new T.S(new Float32Array(16))
q.Y()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new D.f2(15,0,0,0,new T.v(u),-0.02,s,r,q,new T.v(p),new T.v(o),new T.v(n),new T.v(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.S(new Float32Array(16))
u.Y()
s=new T.S(new Float32Array(16))
s.Y()
l=new G.f3(m,50,1,0.1,1000,u,s,new T.S(new Float32Array(16)),P.W(),"perspective",!1,!0)
l.aO()
l.c6(w,v)
k=G.cp("basic",t,$.$get$dp(),$.$get$dn())
j=G.cp("fireworks",t,$.$get$df(),$.$get$de())
u=$.$get$c0()
s=P.W()
s.j(0,"cDepthTest",!0)
s.j(0,"cDepthWrite",!1)
s.j(0,"cBlendEquation",u)
s.j(0,"cStencilFunc",$.$get$cs())
i=y.createElement("canvas")
i.width=64
i.height=64
h=C.y.bX(i,"2d")
g=J.dD(h,32,32,1,32,32,22)
g.addColorStop(0,"gray")
g.addColorStop(1,"black")
h.fillStyle=g
h.fillRect(0,0,64,64)
g=h.createRadialGradient(32,32,1,32,32,6)
g.addColorStop(0,"white")
g.addColorStop(1,"gray")
h.globalAlpha=0.9
h.fillStyle=g
h.arc(32,32,4,0,6.283185307179586,!1)
h.fill("nonzero")
y=new G.fD(!1,!1,!1,!0,1,9729,9729)
u=J.dE(t.a)
r=new G.ex(i,"Utils::Particles",u,3553,t,y)
J.az(t.a,3553,u)
J.dW(t.a,37440,1)
r.ce(i)
y.c9(t,3553)
J.dS(t.a)
J.az(t.a,3553,null)
s.j(0,"uTexture",r)
s.j(0,"uPointSize",1000)
y=new T.S(new Float32Array(16))
y.Y()
s.j(0,"uModelMatrix",y)
s.j(0,"uColor",$.$get$c4())
f=R.fI(k,2000,100)
e=R.iA(j)
z.a=0
new R.iN(z,m,new G.eP(s,"stars",!1,!0),k,f,l,j,e).$1(0)},
iN:{"^":"f:16;a,b,c,d,e,f,r,x",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aI(b2)
y.F(b2,z.a)
z.a=y.n(b2,0)
z=this.b
z.go+=0.001
x=z.r1
w=x.a
if(w.G(0,0)||w.G(0,1)){w=z.go
v=x.d
if(typeof v!=="number")return v.aC()
z.go=w+v*0.01
v=z.id
w=x.e
if(typeof w!=="number")return w.aC()
z.id=v+w*0.01}w=z.k4
v=w.a
if(v.G(0,37))z.go+=0.03
else if(v.G(0,39))z.go-=0.03
if(v.G(0,38))z.id+=0.03
else if(v.G(0,40))z.id-=0.03
if(v.G(0,33))z.fy*=0.99
else if(v.G(0,34))z.fy*=1.01
if(v.G(0,32)){z.go=0
z.id=0}v=x.f
if(typeof v!=="number")return v.aC()
v=z.fy-v*z.k3
if(v>0)z.fy=v
v=C.a.cQ(z.id,-1.4707963267948965,1.4707963267948965)
z.id=v
u=z.fy
t=z.go
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=z.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=z.k2
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
p=q[12]
o=q[13]
n=q[14]
m=new T.v(new Float32Array(3))
m.a_(0,1,0)
v=z.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
l=v.F(0,t)
l.ar(0)
k=m.bi(l)
k.ar(0)
j=l.bi(k)
j.ar(0)
t=k.ao(v)
u=j.ao(v)
v=l.ao(v)
r=k.a
i=r[0]
h=j.a
g=h[0]
f=l.a
e=f[0]
d=r[1]
c=h[1]
b=f[1]
r=r[2]
h=h[2]
f=f[2]
q[15]=1
q[14]=-v
q[13]=-u
q[12]=-t
q[11]=0
q[10]=f
q[9]=h
q[8]=r
q[7]=0
q[6]=b
q[5]=c
q[4]=d
q[3]=0
q[2]=e
q[1]=g
q[0]=i
q[12]=p
q[13]=o
q[14]=n
i=z.f.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
z=-z.k1
g=i[0]
e=i[1]
d=i[2]
a=Math.sqrt(g*g+e*e+d*d)
p=i[0]/a
o=i[1]/a
n=i[2]/a
a0=Math.cos(z)
a1=Math.sin(z)
a2=1-a0
a3=p*p*a2+a0
z=n*a1
a4=p*o*a2-z
i=o*a1
a5=p*n*a2+i
a6=o*p*a2+z
a7=o*o*a2+a0
z=p*a1
a8=o*n*a2-z
a9=n*p*a2-i
b0=n*o*a2+z
b1=n*n*a2+a0
z=q[0]
i=q[4]
d=q[8]
e=q[1]
g=q[5]
c=q[9]
b=q[2]
r=q[6]
h=q[10]
f=q[3]
t=q[7]
u=q[11]
q[0]=z*a3+i*a6+d*a9
q[1]=e*a3+g*a6+c*a9
q[2]=b*a3+r*a6+h*a9
q[3]=f*a3+t*a6+u*a9
q[4]=z*a4+i*a7+d*b0
q[5]=e*a4+g*a7+c*b0
q[6]=b*a4+r*a7+h*b0
q[7]=f*a4+t*a7+u*b0
q[8]=z*a5+i*a8+d*b1
q[9]=e*a5+g*a8+c*b1
q[10]=b*a5+r*a8+h*b1
q[11]=f*a5+t*a8+u*b1
w.c.T(0)
w.b.T(0)
x.e=0
x.d=0
x.f=0
x.c.T(0)
x.b.T(0)
x=this.c
x.d.j(0,"uTime",y.V(b2,1000))
y=this.f
this.d.aL(this.e,[y,x])
this.r.aL(this.x,[y,x])
C.Y.gcK(window).bG(this)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cb.prototype
return J.eE.prototype}if(typeof a=="string")return J.an.prototype
if(a==null)return J.cc.prototype
if(typeof a=="boolean")return J.eD.prototype
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.c)return a
return J.aJ(a)}
J.ix=function(a){if(typeof a=="number")return J.am.prototype
if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.c)return a
return J.aJ(a)}
J.a5=function(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.c)return a
return J.aJ(a)}
J.bG=function(a){if(a==null)return a
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.c)return a
return J.aJ(a)}
J.aI=function(a){if(typeof a=="number")return J.am.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aG.prototype
return a}
J.iy=function(a){if(typeof a=="number")return J.am.prototype
if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aG.prototype
return a}
J.iz=function(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aG.prototype
return a}
J.d=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.c)return a
return J.aJ(a)}
J.af=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ix(a).n(a,b)}
J.D=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).A(a,b)}
J.E=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aI(a).X(a,b)}
J.aK=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aI(a).O(a,b)}
J.ds=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.iL(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a5(a).h(a,b)}
J.dt=function(a,b,c,d){return J.d(a).cz(a,b,c,d)}
J.bN=function(a,b){return J.d(a).b2(a,b)}
J.du=function(a,b,c,d){return J.d(a).b3(a,b,c,d)}
J.bO=function(a,b,c){return J.d(a).b4(a,b,c)}
J.dv=function(a,b){return J.d(a).cL(a,b)}
J.bP=function(a,b,c){return J.d(a).b5(a,b,c)}
J.az=function(a,b,c){return J.d(a).b7(a,b,c)}
J.b7=function(a,b){return J.d(a).cO(a,b)}
J.dw=function(a,b){return J.d(a).b8(a,b)}
J.dx=function(a,b,c){return J.d(a).b9(a,b,c)}
J.dy=function(a,b,c,d){return J.d(a).ba(a,b,c,d)}
J.dz=function(a,b,c,d,e){return J.d(a).bc(a,b,c,d,e)}
J.dA=function(a,b){return J.iz(a).cR(a,b)}
J.dB=function(a,b){return J.iy(a).J(a,b)}
J.bQ=function(a){return J.d(a).be(a)}
J.dC=function(a){return J.d(a).bf(a)}
J.dD=function(a,b,c,d,e,f,g){return J.d(a).cT(a,b,c,d,e,f,g)}
J.dE=function(a){return J.d(a).bh(a)}
J.dF=function(a){return J.d(a).cU(a)}
J.dG=function(a,b){return J.d(a).bj(a,b)}
J.b8=function(a,b){return J.d(a).bk(a,b)}
J.dH=function(a,b,c,d){return J.d(a).bl(a,b,c,d)}
J.dI=function(a,b,c,d,e){return J.d(a).cW(a,b,c,d,e)}
J.dJ=function(a,b,c,d,e){return J.d(a).bm(a,b,c,d,e)}
J.dK=function(a,b,c,d,e,f){return J.d(a).cX(a,b,c,d,e,f)}
J.dL=function(a,b){return J.bG(a).q(a,b)}
J.aL=function(a,b){return J.d(a).bn(a,b)}
J.dM=function(a,b){return J.d(a).bo(a,b)}
J.dN=function(a){return J.d(a).cY(a)}
J.bR=function(a,b){return J.bG(a).u(a,b)}
J.ag=function(a){return J.d(a).gE(a)}
J.R=function(a){return J.n(a).gv(a)}
J.b9=function(a){return J.bG(a).gH(a)}
J.V=function(a){return J.a5(a).gi(a)}
J.dO=function(a){return J.d(a).gbJ(a)}
J.bS=function(a){return J.d(a).gdh(a)}
J.dP=function(a){return J.d(a).au(a)}
J.dQ=function(a,b,c){return J.d(a).av(a,b,c)}
J.dR=function(a){return J.d(a).a8(a)}
J.dS=function(a){return J.d(a).aw(a)}
J.dT=function(a,b){return J.d(a).ax(a,b)}
J.dU=function(a,b,c){return J.d(a).ay(a,b,c)}
J.bT=function(a,b,c){return J.d(a).aB(a,b,c)}
J.dV=function(a,b){return J.d(a).bt(a,b)}
J.dW=function(a,b,c){return J.d(a).bA(a,b,c)}
J.dX=function(a,b,c,d){return J.d(a).aG(a,b,c,d)}
J.dY=function(a,b,c,d,e,f,g){return J.d(a).bD(a,b,c,d,e,f,g)}
J.dZ=function(a,b,c,d){return J.d(a).bE(a,b,c,d)}
J.bU=function(a,b,c,d){return J.d(a).bF(a,b,c,d)}
J.bV=function(a){return J.aI(a).dc(a)}
J.aA=function(a){return J.n(a).k(a)}
J.e_=function(a,b,c,d){return J.d(a).de(a,b,c,d)}
J.e0=function(a,b,c){return J.d(a).bK(a,b,c)}
J.e1=function(a,b,c){return J.d(a).bL(a,b,c)}
J.ba=function(a,b,c){return J.d(a).bM(a,b,c)}
J.e2=function(a,b,c){return J.d(a).bN(a,b,c)}
J.bW=function(a,b,c){return J.d(a).bO(a,b,c)}
J.bX=function(a,b,c){return J.d(a).bP(a,b,c)}
J.bY=function(a,b,c){return J.d(a).bQ(a,b,c)}
J.bZ=function(a,b,c,d){return J.d(a).bR(a,b,c,d)}
J.c_=function(a,b,c,d){return J.d(a).bS(a,b,c,d)}
J.e3=function(a,b){return J.d(a).bT(a,b)}
J.e4=function(a,b,c){return J.d(a).df(a,b,c)}
J.e5=function(a,b,c,d,e,f,g){return J.d(a).bU(a,b,c,d,e,f,g)}
var $=I.p
C.y=W.eb.prototype
C.z=J.e.prototype
C.f=J.ak.prototype
C.b=J.cb.prototype
C.p=J.cc.prototype
C.a=J.am.prototype
C.m=J.an.prototype
C.G=J.ao.prototype
C.H=H.f_.prototype
C.t=J.f4.prototype
C.o=J.aG.prototype
C.Y=W.fK.prototype
C.l=new P.hk()
C.e=new P.hB()
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.q=function(hooks) { return hooks; }

C.C=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.D=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.E=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.F=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=new G.p("vec3","vertex btangents",0)
C.c=new G.p("vec3","",0)
C.J=new G.p("vec4","delta from light",0)
C.n=new G.p("","",0)
C.u=new G.p("vec3","vertex coordinates",0)
C.K=new G.p("vec3","vertex binormals",0)
C.v=new G.p("vec4","for wireframe",0)
C.L=new G.p("vec4","per vertex color",0)
C.M=new G.p("float","for normal maps",0)
C.i=new G.p("mat4","",0)
C.O=new G.p("mat4","",4)
C.N=new G.p("mat4","",128)
C.d=new G.p("float","",0)
C.P=new G.p("float","",4)
C.Q=new G.p("float","depth for shadowmaps",0)
C.h=new G.p("sampler2D","",0)
C.R=new G.p("float","for bump maps",0)
C.S=new G.p("vec2","texture uvs",0)
C.T=new G.p("float","time since program start in sec",0)
C.j=new G.p("vec2","",0)
C.U=new G.p("samplerCube","",0)
C.k=new G.p("vec4","",0)
C.V=new G.p("vec3","vertex normals",0)
C.W=new G.p("sampler2DShadow","",0)
C.w=new G.p("vec3","per vertex color",0)
C.x=new G.p("mat3","",0)
C.X=new G.p("vec3","vertex tangents",0)
$.M=0
$.ai=null
$.c1=null
$.dj=null
$.d9=null
$.dq=null
$.b1=null
$.b5=null
$.bI=null
$.a9=null
$.au=null
$.av=null
$.bC=!1
$.q=C.e
$.iw=0
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){var z=$dart_deferred_initializers$[a]
if(z==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
z($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryParts={}
init.deferredPartUris=[]
init.deferredPartHashes=[];(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["c5","$get$c5",function(){return H.dh("_$dart_dartClosure")},"bk","$get$bk",function(){return H.dh("_$dart_js")},"cA","$get$cA",function(){return H.O(H.aZ({
toString:function(){return"$receiver$"}}))},"cB","$get$cB",function(){return H.O(H.aZ({$method$:null,
toString:function(){return"$receiver$"}}))},"cC","$get$cC",function(){return H.O(H.aZ(null))},"cD","$get$cD",function(){return H.O(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"cH","$get$cH",function(){return H.O(H.aZ(void 0))},"cI","$get$cI",function(){return H.O(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"cF","$get$cF",function(){return H.O(H.cG(null))},"cE","$get$cE",function(){return H.O(function(){try{null.$method$}catch(z){return z.message}}())},"cK","$get$cK",function(){return H.O(H.cG(void 0))},"cJ","$get$cJ",function(){return H.O(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bz","$get$bz",function(){return P.fO()},"ca","$get$ca",function(){var z,y
z=P.aE
y=new P.a1(0,P.fM(),null,[z])
y.cl(null,z)
return y},"aw","$get$aw",function(){return[]},"cs","$get$cs",function(){return new G.cy(1281,0,4294967295)},"c0","$get$c0",function(){return new G.cx(32774,770,769)},"a3","$get$a3",function(){return P.cf(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.w,"aColorAlpha",C.L,"aPosition",C.u,"aTexUV",C.S,"aNormal",C.V,"aBinormal",C.K,"aCenter",C.v,"aPointSize",C.d,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.X,"aBitangent",C.I,"iaRotation",C.k,"iaTranslation",C.c,"iaScale",C.c,"vColor",C.w,"vTexUV",C.j,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.u,"vPositionFromLight",C.J,"vCenter",C.v,"vDepth",C.Q,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.x,"uConvolutionMatrix",C.x,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.W,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.U,"uAnimationTable",C.h,"uTime",C.T,"uCameraNear",C.d,"uCameraFar",C.d,"uFogNear",C.d,"uFogFar",C.d,"uPointSize",C.d,"uScale",C.d,"uAngle",C.d,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.d,"uShininess",C.d,"uShadowBias",C.d,"uOpacity",C.d,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.c,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.N,"uLightDescs",C.O,"uLightCount",C.d,"uLightTypes",C.P,"uBumpScale",C.R,"uNormalScale",C.M])},"cP","$get$cP",function(){return P.fc(null)},"c4","$get$c4",function(){return T.fJ(1,0,0)},"dp","$get$dp",function(){var z=G.aX("PointSpritesV")
z.aI(["aPosition"])
z.a0(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.a1(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"dn","$get$dn",function(){var z=G.aX("PointSpritesF")
z.a0(["uTexture"])
z.a1(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"df","$get$df",function(){var z=G.aX("FireWorksV")
z.aI(["aPosition","aNormal"])
z.a0(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
z.a1(["      float t = mod(uTime, 5.0);\n      vec3 vp = aPosition;\n      if( t < 3.0) {\n       vp.y = t;\n      } else {\n       vp.y = 3.0;\n       vp += normalize(aNormal)*(t-3.0);\n      }\n      gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(vp, 1.0);\n      gl_PointSize = 100.0/gl_Position.z;\n"])
return z},"de","$get$de",function(){var z=G.aX("FireWorksF")
z.a0(["uTime","uColor","uTexture"])
z.a1(["      oFragColor = texture(uTexture, gl_PointCoord);\n      float t = mod(uTime, 5.0);\n      if( t < 3.0) {\n         //gl_FragColor.x = 1.0;\n      } else {\n         //gl_FragColor.rgb = uColor;\n         oFragColor.a -= (t-3.0);\n      }\n"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1},{func:1,args:[,]},{func:1,args:[,,]},{func:1,v:true},{func:1,args:[W.N]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.o,args:[P.B]},{func:1,args:[W.aS]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.as]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.as]},{func:1,args:[W.aH]},{func:1,args:[P.B,P.c]},{func:1,v:true,args:[P.ax]},{func:1,ret:P.B,args:[,,]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.iR(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.b3=a.b3
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.dl,[])
else R.dl([])})})()
//# sourceMappingURL=fireworks.dart.js.map
