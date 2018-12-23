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
else b1.push(a8+a9+";\n")}}return f}function defineClass(a4,a5){var g=[]
var f="function "+a4+"("
var e="",d=""
for(var a0=0;a0<a5.length;a0++){var a1=a5[a0]
if(a1.charCodeAt(0)==48){a1=a1.substring(1)
var a2=generateAccessor(a1,g,a4)
d+="this."+a2+" = null;\n"}else{var a2=generateAccessor(a1,g,a4)
var a3="p_"+a2
f+=e
e=", "
f+=a3
d+="this."+a2+" = "+a3+";\n"}}if(supportsDirectProtoAccess)d+="this."+"$deferredAction"+"();"
f+=") {\n"+d+"}\n"
f+=a4+".builtin$cls=\""+a4+"\";\n"
f+="$desc=$collectedClasses."+a4+"[1];\n"
f+=a4+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a4+".name=\""+a4+"\";\n"
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
b6.$isb=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isf)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="b"
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
processClassData(e,d,a5)}}}function addStubs(b6,b7,b8,b9,c0){var g=0,f=g,e=b7[g],d
if(typeof e=="string")d=b7[++g]
else{d=e
e=b8}if(typeof d=="number"){f=d
d=b7[++g]}b6[b8]=b6[e]=d
var a0=[d]
d.$stubName=b8
c0.push(b8)
for(g++;g<b7.length;g++){d=b7[g]
if(typeof d!="function")break
if(!b9)d.$stubName=b7[++g]
a0.push(d)
if(d.$stubName){b6[d.$stubName]=d
c0.push(d.$stubName)}}for(var a1=0;a1<a0.length;g++,a1++)a0[a1].$callName=b7[g]
var a2=b7[g]
b7=b7.slice(++g)
var a3=b7[0]
var a4=(a3&1)===1
a3=a3>>1
var a5=a3>>1
var a6=(a3&1)===1
var a7=a3===3
var a8=a3===1
var a9=b7[1]
var b0=a9>>1
var b1=(a9&1)===1
var b2=a5+b0
var b3=b7[2]
if(typeof b3=="number")b7[2]=b3+c
if(b>0){var b4=3
for(var a1=0;a1<b0;a1++){if(typeof b7[b4]=="number")b7[b4]=b7[b4]+b
b4++}for(var a1=0;a1<b2;a1++){b7[b4]=b7[b4]+b
b4++}}var b5=2*b0+a5+3
if(a2){d=tearOff(a0,f,b7,b9,b8,a4)
b6[b8].$getter=d
d.$getterStub=true
if(b9)c0.push(a2)
b6[a2]=d
a0.push(d)
d.$stubName=a2
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cv(this,d,e,f,true,false,a1).prototype
return g}:tearOffGetter(d,e,f,a1,a2)}var y=0
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b9=function(){}
var dart=[["","",,H,{"^":"",ls:{"^":"b;a"}}],["","",,J,{"^":"",
cz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bY:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cy==null){H.kr()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dF("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cC()]
if(v!=null)return v
v=H.kw(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cC(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
f:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.aZ(a)},
j:["cj",function(a){return"Instance of '"+H.b_(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h9:{"^":"f;",
j:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isO:1},
ha:{"^":"f;",
B:function(a,b){return null==b},
j:function(a){return"null"},
gv:function(a){return 0},
$isF:1},
cg:{"^":"f;",
gv:function(a){return 0},
j:["cl",function(a){return String(a)}]},
hH:{"^":"cg;"},
b2:{"^":"cg;"},
bp:{"^":"cg;",
j:function(a){var z=a[$.eq()]
if(z==null)return this.cl(a)
return"JavaScript function for "+H.e(J.bg(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbk:1},
bm:{"^":"f;$ti",
l:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.Y(P.y("add"))
a.push(b)},
G:function(a,b){var z,y
H.v(b,"$isj",[H.p(a,0)],"$asj")
if(!!a.fixed$length)H.Y(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
W:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
gdB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.db())},
bg:function(a,b){var z,y
H.k(b,{func:1,ret:P.O,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aF(a))}return!1},
cd:function(a,b){if(!!a.immutable$list)H.Y(P.y("sort"))
H.i5(a,J.k2(),H.p(a,0))},
aM:function(a){return this.cd(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aD(a[z],b))return!0
return!1},
j:function(a){return P.ce(a,"[","]")},
gw:function(a){return new J.fp(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.aZ(a)},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.b8(a,b))
return a[b]},
i:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.Y(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b8(a,b))
a[b]=c},
$isu:1,
$asu:I.b9,
$isj:1,
$isa:1,
p:{
h8:function(a,b){return J.cf(H.m(a,[b]))},
cf:function(a){H.bx(a)
a.fixed$length=Array
return a},
lq:[function(a,b){return J.eQ(H.ej(a,"$isT"),H.ej(b,"$isT"))},"$2","k2",8,0,28]}},
lr:{"^":"bm;$ti"},
fp:{"^":"b;a,b,c,0d,$ti",
saX:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.N(z))
x=this.c
if(x>=y){this.saX(null)
return!1}this.saX(z[x]);++this.c
return!0},
$isaT:1},
bn:{"^":"f;",
J:function(a,b){var z
H.cA(b)
if(typeof b!=="number")throw H.c(H.b6(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaa(b)
if(this.gaa(a)===z)return 0
if(this.gaa(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaa:function(a){return a===0?1/a<0:a<0},
bT:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.y(""+a+".toInt()"))},
dg:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.y(""+a+".ceil()"))},
dh:function(a,b,c){if(this.J(b,c)>0)throw H.c(H.b6(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
dO:function(a,b){var z
if(b>20)throw H.c(P.bK(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaa(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cn:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bd(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.bd(a,b)},
bd:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bb:function(a,b){var z
if(a>0)z=this.d3(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d3:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.c(H.b6(b))
return a>b},
$isT:1,
$asT:function(){return[P.D]},
$isaf:1,
$isD:1},
dd:{"^":"bn;",$isC:1},
dc:{"^":"bn;"},
bo:{"^":"f;",
ah:function(a,b){if(b>=a.length)throw H.c(H.b8(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.t(b)
if(typeof b!=="string")throw H.c(P.cS(b,null,null))
return a+b},
cf:function(a,b,c){var z
if(c>a.length)throw H.c(P.bK(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ce:function(a,b){return this.cf(a,b,0)},
ci:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bL(b,null,null))
if(b>c)throw H.c(P.bL(b,null,null))
if(c>a.length)throw H.c(P.bL(c,null,null))
return a.substring(b,c)},
cg:function(a,b){return this.ci(a,b,null)},
dN:function(a){return a.toLowerCase()},
di:function(a,b,c){if(c>a.length)throw H.c(P.bK(c,0,a.length,null,null))
return H.kC(a,b,c)},
J:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.c(H.b6(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gv:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b8(a,b))
return a[b]},
$isu:1,
$asu:I.b9,
$isT:1,
$asT:function(){return[P.d]},
$ishF:1,
$isd:1}}],["","",,H,{"^":"",
db:function(){return new P.cm("No element")},
h7:function(){return new P.cm("Too many elements")},
i5:function(a,b,c){H.v(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.C,args:[c,c]})
H.br(a,0,J.aO(a)-1,b,c)},
br:function(a,b,c,d,e){H.v(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.i4(a,b,c,d,e)
else H.i3(a,b,c,d,e)},
i4:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.C,args:[e,e]})
for(z=b+1,y=J.ba(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a7(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
i3:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.C,args:[a2,a2]})
z=C.d.U(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.U(b+a0,2)
v=w-z
u=w+z
t=J.ba(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a7(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a7(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a7(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a7(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a7(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a7(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a7(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a7(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a7(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aD(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a1()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.S()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=h
m=g
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.a1()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.S()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.S()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a1()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.i(a,b,t.h(a,c))
t.i(a,c,r)
c=l+1
t.i(a,a0,t.h(a,c))
t.i(a,c,p)
H.br(a,b,m-2,a1,a2)
H.br(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aD(a1.$2(t.h(a,m),r),0);)++m
for(;J.aD(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a1()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.br(a,m,l,a1,a2)}else H.br(a,m,l,a1,a2)},
d3:{"^":"j;"},
bJ:{"^":"d3;$ti",
gw:function(a){return new H.dh(this,this.gk(this),0,[H.cx(this,"bJ",0)])},
aA:function(a,b){return this.ck(0,H.k(b,{func:1,ret:P.O,args:[H.cx(this,"bJ",0)]}))}},
dh:{"^":"b;a,b,c,0d,$ti",
saY:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.ba(z)
x=y.gk(z)
if(this.b!==x)throw H.c(P.aF(z))
w=this.c
if(w>=x){this.saY(null)
return!1}this.saY(y.q(z,w));++this.c
return!0},
$isaT:1},
hl:{"^":"bJ;a,b,$ti",
gk:function(a){return J.aO(this.a)},
q:function(a,b){return this.b.$1(J.eZ(this.a,b))},
$asbJ:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dG:{"^":"j;a,b,$ti",
gw:function(a){return new H.is(J.bD(this.a),this.b,this.$ti)}},
is:{"^":"aT;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bI:{"^":"b;$ti"}}],["","",,H,{"^":"",
aC:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kj:function(a){return init.types[H.L(a)]},
ku:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isw},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bg(a)
if(typeof z!=="string")throw H.c(H.b6(a))
return z},
aZ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b_:function(a){return H.hI(a)+H.bR(H.ag(a),0,null)},
hI:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isb2){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aC(w.length>1&&C.h.ah(w,0)===36?C.h.cg(w,1):w)},
aG:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hP:function(a){var z=H.aG(a).getFullYear()+0
return z},
hN:function(a){var z=H.aG(a).getMonth()+1
return z},
hJ:function(a){var z=H.aG(a).getDate()+0
return z},
hK:function(a){var z=H.aG(a).getHours()+0
return z},
hM:function(a){var z=H.aG(a).getMinutes()+0
return z},
hO:function(a){var z=H.aG(a).getSeconds()+0
return z},
hL:function(a){var z=H.aG(a).getMilliseconds()+0
return z},
aA:function(a){throw H.c(H.b6(a))},
l:function(a,b){if(a==null)J.aO(a)
throw H.c(H.b8(a,b))},
b8:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.L(J.aO(a))
if(!(b<0)){if(typeof z!=="number")return H.aA(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bL(b,"index",null)},
b6:function(a){return new P.aE(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dq()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.bg(this.dartException)},
Y:function(a){throw H.c(a)},
N:function(a){throw H.c(P.aF(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kE(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bb(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ch(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dp(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.es()
u=$.et()
t=$.eu()
s=$.ev()
r=$.ey()
q=$.ez()
p=$.ex()
$.ew()
o=$.eB()
n=$.eA()
m=v.H(y)
if(m!=null)return z.$1(H.ch(H.t(y),m))
else{m=u.H(y)
if(m!=null){m.method="call"
return z.$1(H.ch(H.t(y),m))}else{m=t.H(y)
if(m==null){m=s.H(y)
if(m==null){m=r.H(y)
if(m==null){m=q.H(y)
if(m==null){m=p.H(y)
if(m==null){m=s.H(y)
if(m==null){m=o.H(y)
if(m==null){m=n.H(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dp(H.t(y),m))}}return z.$1(new H.io(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dv()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dv()
return a},
bc:function(a){var z
if(a==null)return new H.dW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dW(a)},
kf:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kt:function(a,b,c,d,e,f){H.h(a,"$isbk")
switch(H.L(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d7("Unsupported number of arguments for wrapped closure"))},
b7:function(a,b){var z
H.L(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kt)
a.$identity=z
return z},
fB:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hT(z).r}else x=d
w=e?Object.create(new H.i6().constructor.prototype):Object.create(new H.c8(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a8
if(typeof u!=="number")return u.F()
$.a8=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cX(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kj,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cV:H.c9
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cX(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fy:function(a,b,c,d){var z=H.c9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cX:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fA(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fy(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.F()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aP
if(v==null){v=H.bG("self")
$.aP=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.F()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aP
if(v==null){v=H.bG("self")
$.aP=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fz:function(a,b,c,d){var z,y
z=H.c9
y=H.cV
switch(b?-1:a){case 0:throw H.c(H.hZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fA:function(a,b){var z,y,x,w,v,u,t,s
z=$.aP
if(z==null){z=H.bG("self")
$.aP=z}y=$.cU
if(y==null){y=H.bG("receiver")
$.cU=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fz(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a8
if(typeof y!=="number")return y.F()
$.a8=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a8
if(typeof y!=="number")return y.F()
$.a8=y+1
return new Function(z+y+"}")()},
cv:function(a,b,c,d,e,f,g){return H.fB(a,b,H.L(c),d,!!e,!!f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a3(a,"String"))},
ea:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"double"))},
cA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"num"))},
bU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a3(a,"bool"))},
L:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a3(a,"int"))},
cB:function(a,b){throw H.c(H.a3(a,H.aC(H.t(b).substring(3))))},
kA:function(a,b){throw H.c(H.cW(a,H.aC(H.t(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cB(a,b)},
ah:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.kA(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cB(a,b)},
bx:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a3(a,"List<dynamic>"))},
kv:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cB(a,b)},
cw:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.L(z)]
else return a.$S()}return},
bv:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cw(J.A(a))
if(z==null)return!1
return H.e1(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cr)return a
$.cr=!0
try{if(H.bv(a,b))return a
z=H.by(b)
y=H.a3(a,z)
throw H.c(y)}finally{$.cr=!1}},
bW:function(a,b){if(a!=null&&!H.cu(a,b))H.Y(H.a3(a,H.by(b)))
return a},
e5:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cw(z)
if(y!=null)return H.by(y)
return"Closure"}return H.b_(a)},
kD:function(a){throw H.c(new P.fH(H.t(a)))},
ef:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
ag:function(a){if(a==null)return
return a.$ti},
mS:function(a,b,c){return H.aN(a["$as"+H.e(c)],H.ag(b))},
bb:function(a,b,c,d){var z
H.t(c)
H.L(d)
z=H.aN(a["$as"+H.e(c)],H.ag(b))
return z==null?null:z[d]},
cx:function(a,b,c){var z
H.t(b)
H.L(c)
z=H.aN(a["$as"+H.e(b)],H.ag(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.L(b)
z=H.ag(a)
return z==null?null:z[b]},
by:function(a){return H.az(a,null)},
az:function(a,b){var z,y
H.v(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aC(a[0].builtin$cls)+H.bR(a,1,b)
if(typeof a=="function")return H.aC(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.L(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.e(b[y])}if('func' in a)return H.k1(a,b)
if('futureOr' in a)return"FutureOr<"+H.az("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.v(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.m([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.l(b,r)
t=C.h.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.az(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.az(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.az(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.az(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ke(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.az(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bR:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.co("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.az(u,c)}return"<"+z.j(0)+">"},
ki:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cw(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ag(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aL:function(a,b,c,d){var z,y
H.t(b)
H.bx(c)
H.t(d)
if(a==null)return!1
z=H.ag(a)
y=J.A(a)
if(y[b]==null)return!1
return H.e8(H.aN(y[d],z),null,c,null)},
bz:function(a,b,c,d){H.t(b)
H.bx(c)
H.t(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.cW(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aC(b.substring(3))+H.bR(c,0,null),init.mangledGlobalNames)))},
v:function(a,b,c,d){H.t(b)
H.bx(c)
H.t(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aC(b.substring(3))+H.bR(c,0,null),init.mangledGlobalNames)))},
e8:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.W(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.W(a[y],b,c[y],d))return!1
return!0},
mQ:function(a,b,c){return a.apply(b,H.aN(J.A(b)["$as"+H.e(c)],H.ag(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.eh(z)}return!1},
cu:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bv(a,b)}z=J.A(a).constructor
y=H.ag(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.W(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cu(a,b))throw H.c(H.a3(a,H.by(b)))
return a},
W:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.W(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.e1(a,b,c,d)
if('func' in a)return c.builtin$cls==="bk"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.W("type" in a?a.type:null,b,x,d)
else if(H.W(a,b,x,d))return!0
else{if(!('$is'+"aS" in y.prototype))return!1
w=y.prototype["$as"+"aS"]
v=H.aN(w,z?a.slice(1):null)
return H.W(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e8(H.aN(r,z),b,u,d)},
e1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.W(a.ret,b,c.ret,d))return!1
x=a.args
w=c.args
v=a.opt
u=c.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
for(p=0;p<t;++p)if(!H.W(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.W(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.W(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kz(m,b,l,d)},
kz:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.W(c[w],d,a[w],b))return!1}return!0},
mR:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
kw:function(a){var z,y,x,w,v,u
z=H.t($.eg.$1(a))
y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.e7.$2(a,z))
if(z!=null){y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c_(x)
$.bV[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bZ[z]=x
return x}if(v==="-"){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ek(a,x)
if(v==="*")throw H.c(P.dF(z))
if(init.leafTags[z]===true){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cz(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c_:function(a){return J.cz(a,!1,null,!!a.$isw)},
ky:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c_(z)
else return J.cz(z,c,null,null)},
kr:function(){if(!0===$.cy)return
$.cy=!0
H.ks()},
ks:function(){var z,y,x,w,v,u,t,s
$.bV=Object.create(null)
$.bZ=Object.create(null)
H.kn()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.ky(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kn:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aK(C.O,H.aK(C.T,H.aK(C.B,H.aK(C.B,H.aK(C.S,H.aK(C.P,H.aK(C.Q(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eg=new H.ko(v)
$.e7=new H.kp(u)
$.el=new H.kq(t)},
aK:function(a,b){return a(b)||b},
kC:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hS:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hT:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cf(z)
y=z[0]
x=z[1]
return new H.hS(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ii:{"^":"b;a,b,c,d,e,f",
H:function(a){var z,y,x
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
aa:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.m([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ii(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dC:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hD:{"^":"M;a,b",
j:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dp:function(a,b){return new H.hD(a,b==null?null:b.method)}}},
hb:{"^":"M;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
ch:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hb(a,y,z?null:b.receiver)}}},
io:{"^":"M;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kE:{"^":"n:5;a",
$1:function(a){if(!!J.A(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dW:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa2:1},
n:{"^":"b;",
j:function(a){return"Closure '"+H.b_(this).trim()+"'"},
gc7:function(){return this},
$isbk:1,
gc7:function(){return this}},
dx:{"^":"n;"},
i6:{"^":"dx;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aC(z)+"'"}},
c8:{"^":"dx;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aZ(this.a)
else y=typeof z!=="object"?J.ai(z):H.aZ(z)
return(y^H.aZ(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b_(z)+"'")},
p:{
c9:function(a){return a.a},
cV:function(a){return a.c},
bG:function(a){var z,y,x,w,v
z=new H.c8("self","target","receiver","name")
y=J.cf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ij:{"^":"M;a",
j:function(a){return this.a},
p:{
a3:function(a,b){return new H.ij("TypeError: "+P.bH(a)+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
fw:{"^":"M;a",
j:function(a){return this.a},
p:{
cW:function(a,b){return new H.fw("CastError: "+P.bH(a)+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
hY:{"^":"M;a",
j:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hZ:function(a){return new H.hY(a)}}},
dD:{"^":"b;a,0b,0c,0d",
ga7:function(){var z=this.b
if(z==null){z=H.by(this.a)
this.b=z}return z},
j:function(a){return this.ga7()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.ga7())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dD&&this.ga7()===b.ga7()}},
de:{"^":"di;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gD:function(a){return new H.am(this,[H.p(this,0)])},
a9:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cN(z,b)}else{y=this.dz(b)
return y}},
dz:function(a){var z=this.d
if(z==null)return!1
return this.av(this.an(z,J.ai(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a5(w,b)
x=y==null?null:y.b
return x}else return this.dA(b)},
dA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.an(z,J.ai(a)&0x3ffffff)
x=this.av(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ap()
this.b=z}this.aZ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ap()
this.c=y}this.aZ(y,b,c)}else{x=this.d
if(x==null){x=this.ap()
this.d=x}w=J.ai(b)&0x3ffffff
v=this.an(x,w)
if(v==null)this.as(x,w,[this.af(b,c)])
else{u=this.av(v,b)
if(u>=0)v[u].b=c
else v.push(this.af(b,c))}}},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aF(this))
z=z.c}},
aZ:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.a5(a,b)
if(z==null)this.as(a,b,this.af(b,c))
else z.b=c},
b0:function(){this.r=this.r+1&67108863},
af:function(a,b){var z,y
z=new H.hg(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b0()
return z},
av:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aD(a[y].a,b))return y
return-1},
j:function(a){return P.dj(this)},
a5:function(a,b){return a[b]},
an:function(a,b){return a[b]},
as:function(a,b,c){a[b]=c},
cO:function(a,b){delete a[b]},
cN:function(a,b){return this.a5(a,b)!=null},
ap:function(){var z=Object.create(null)
this.as(z,"<non-identifier-key>",z)
this.cO(z,"<non-identifier-key>")
return z},
$isdf:1},
hg:{"^":"b;a,b,0c,0d"},
am:{"^":"d3;a,$ti",
gk:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hh(z,z.r,this.$ti)
y.c=z.e
return y}},
hh:{"^":"b;a,b,0c,0d,$ti",
sb_:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aF(z))
else{z=this.c
if(z==null){this.sb_(null)
return!1}else{this.sb_(z.a)
this.c=this.c.c
return!0}}},
$isaT:1},
ko:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
kp:{"^":"n:13;a",
$2:function(a,b){return this.a(a,b)}},
kq:{"^":"n:14;a",
$1:function(a){return this.a(H.t(a))}}}],["","",,H,{"^":"",
ke:function(a){return J.h8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bQ:function(a){var z,y
if(!!J.A(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b8(b,a))},
hy:{"^":"f;",$isik:1,"%":"DataView;ArrayBufferView;cj|dQ|dR|dm|dS|dT|ao"},
cj:{"^":"hy;",
gk:function(a){return a.length},
$isu:1,
$asu:I.b9,
$isw:1,
$asw:I.b9},
dm:{"^":"dR;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ea(c)
H.ac(b,a,a.length)
a[b]=c},
$asbI:function(){return[P.af]},
$aso:function(){return[P.af]},
$isj:1,
$asj:function(){return[P.af]},
$isa:1,
$asa:function(){return[P.af]},
"%":"Float64Array"},
ao:{"^":"dT;",
i:function(a,b,c){H.L(c)
H.ac(b,a,a.length)
a[b]=c},
$asbI:function(){return[P.C]},
$aso:function(){return[P.C]},
$isj:1,
$asj:function(){return[P.C]},
$isa:1,
$asa:function(){return[P.C]}},
hx:{"^":"dm;",$isae:1,"%":"Float32Array"},
lA:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lB:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ish5:1,
"%":"Int32Array"},
lC:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lD:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hz:{"^":"ao;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ismn:1,
"%":"Uint32Array"},
lE:{"^":"ao;",
gk:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lF:{"^":"ao;",
gk:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dQ:{"^":"cj+o;"},
dR:{"^":"dQ+bI;"},
dS:{"^":"cj+o;"},
dT:{"^":"dS+bI;"}}],["","",,P,{"^":"",
iw:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k9()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b7(new P.iy(z),1)).observe(y,{childList:true})
return new P.ix(z,y,x)}else if(self.setImmediate!=null)return P.ka()
return P.kb()},
my:[function(a){self.scheduleImmediate(H.b7(new P.iz(H.k(a,{func:1,ret:-1})),0))},"$1","k9",4,0,4],
mz:[function(a){self.setImmediate(H.b7(new P.iA(H.k(a,{func:1,ret:-1})),0))},"$1","ka",4,0,4],
mA:[function(a){H.k(a,{func:1,ret:-1})
P.jK(0,a)},"$1","kb",4,0,4],
k5:function(a,b){if(H.bv(a,{func:1,args:[P.b,P.a2]}))return H.k(a,{func:1,ret:null,args:[P.b,P.a2]})
if(H.bv(a,{func:1,args:[P.b]}))return H.k(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k4:function(){var z,y
for(;z=$.aJ,z!=null;){$.b5=null
y=z.b
$.aJ=y
if(y==null)$.b4=null
z.a.$0()}},
mM:[function(){$.cs=!0
try{P.k4()}finally{$.b5=null
$.cs=!1
if($.aJ!=null)$.cD().$1(P.e9())}},"$0","e9",0,0,1],
e4:function(a){var z=new P.dI(H.k(a,{func:1,ret:-1}))
if($.aJ==null){$.b4=z
$.aJ=z
if(!$.cs)$.cD().$1(P.e9())}else{$.b4.b=z
$.b4=z}},
k8:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aJ
if(z==null){P.e4(a)
$.b5=$.b4
return}y=new P.dI(a)
x=$.b5
if(x==null){y.b=z
$.b5=y
$.aJ=y}else{y.b=x.b
x.b=y
$.b5=y
if(y.b==null)$.b4=y}},
kB:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.H
if(C.e===y){P.bT(null,null,C.e,a)
return}y.toString
P.bT(null,null,y,H.k(y.bj(a),z))},
bS:function(a,b,c,d,e){var z={}
z.a=d
P.k8(new P.k6(z,e))},
e2:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.H
if(y===c)return d.$0()
$.H=c
z=y
try{y=d.$0()
return y}finally{$.H=z}},
e3:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.H
if(y===c)return d.$1(e)
$.H=c
z=y
try{y=d.$1(e)
return y}finally{$.H=z}},
k7:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.H
if(y===c)return d.$2(e,f)
$.H=c
z=y
try{y=d.$2(e,f)
return y}finally{$.H=z}},
bT:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bj(d):c.dd(d,-1)
P.e4(d)},
iy:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ix:{"^":"n:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iz:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iA:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jJ:{"^":"b;a,0b,c",
cJ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b7(new P.jL(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
p:{
jK:function(a,b){var z=new P.jJ(!0,0)
z.cJ(a,b)
return z}}},
jL:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iD:{"^":"b;$ti"},
jE:{"^":"iD;a,$ti"},
aI:{"^":"b;0a,b,c,d,e,$ti",
dC:function(a){if(this.c!==6)return!0
return this.b.b.ay(H.k(this.d,{func:1,ret:P.O,args:[P.b]}),a.a,P.O,P.b)},
dw:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bv(z,{func:1,args:[P.b,P.a2]}))return H.bW(w.dJ(z,a.a,a.b,null,y,P.a2),x)
else return H.bW(w.ay(H.k(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ab:{"^":"b;bc:a<,b,0d0:c<,$ti",
bS:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k5(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ab(0,$.H,[c])
w=b==null?1:3
this.b2(new P.aI(x,w,a,b,[z,c]))
return x},
bR:function(a,b){return this.bS(a,null,b)},
b2:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaI")
this.c=a}else{if(z===2){y=H.h(this.c,"$isab")
z=y.a
if(z<4){y.b2(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bT(null,null,z,H.k(new P.iS(this,a),{func:1,ret:-1}))}},
b9:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaI")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isab")
y=u.a
if(y<4){u.b9(a)
return}this.a=y
this.c=u.c}z.a=this.a6(a)
y=this.b
y.toString
P.bT(null,null,y,H.k(new P.iX(z,this),{func:1,ret:-1}))}},
ar:function(){var z=H.h(this.c,"$isaI")
this.c=null
return this.a6(z)},
a6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ai:function(a){var z,y,x
z=H.p(this,0)
H.bW(a,{futureOr:1,type:z})
y=this.$ti
if(H.aL(a,"$isaS",y,"$asaS"))if(H.aL(a,"$isab",y,null))P.dL(a,this)
else P.iT(a,this)
else{x=this.ar()
H.z(a,z)
this.a=4
this.c=a
P.b3(this,x)}},
b4:function(a,b){var z
H.h(b,"$isa2")
z=this.ar()
this.a=8
this.c=new P.U(a,b)
P.b3(this,z)},
$isaS:1,
p:{
iT:function(a,b){var z,y,x
b.a=1
try{a.bS(new P.iU(b),new P.iV(b),null)}catch(x){z=H.a5(x)
y=H.bc(x)
P.kB(new P.iW(b,z,y))}},
dL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isab")
if(z>=4){y=b.ar()
b.a=a.a
b.c=a.c
P.b3(b,y)}else{y=H.h(b.c,"$isaI")
b.a=2
b.c=a
a.b9(y)}},
b3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isU")
y=y.b
u=v.a
t=v.b
y.toString
P.bS(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b3(z.a,b)}y=z.a
r=y.c
x.a=w
x.b=r
u=!w
if(u){t=b.c
t=(t&1)!==0||t===8}else t=!0
if(t){t=b.b
q=t.b
if(w){p=y.b
p.toString
p=p==q
if(!p)q.toString
else p=!0
p=!p}else p=!1
if(p){H.h(r,"$isU")
y=y.b
u=r.a
t=r.b
y.toString
P.bS(null,null,y,u,t)
return}o=$.H
if(o!=q)$.H=q
else o=null
y=b.c
if(y===8)new P.j_(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iZ(x,b,r).$0()}else if((y&2)!==0)new P.iY(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.A(y).$isaS){if(y.a>=4){n=H.h(t.c,"$isaI")
t.c=null
b=t.a6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dL(y,t)
return}}m=b.b
n=H.h(m.c,"$isaI")
m.c=null
b=m.a6(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.h(u,"$isU")
m.a=8
m.c=u}z.a=m
y=m}}}},
iS:{"^":"n:0;a,b",
$0:function(){P.b3(this.a,this.b)}},
iX:{"^":"n:0;a,b",
$0:function(){P.b3(this.b,this.a.a)}},
iU:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.ai(a)}},
iV:{"^":"n:16;a",
$2:function(a,b){H.h(b,"$isa2")
this.a.b4(a,b)},
$1:function(a){return this.$2(a,null)}},
iW:{"^":"n:0;a,b,c",
$0:function(){this.a.b4(this.b,this.c)}},
j_:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bO(H.k(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.bc(v)
if(this.d){w=H.h(this.a.a.c,"$isU").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isU")
else u.b=new P.U(y,x)
u.a=!0
return}if(!!J.A(z).$isaS){if(z instanceof P.ab&&z.gbc()>=4){if(z.gbc()===8){w=this.b
w.b=H.h(z.gd0(),"$isU")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bR(new P.j0(t),null)
w.a=!1}}},
j0:{"^":"n:17;a",
$1:function(a){return this.a}},
iZ:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.ay(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.bc(t)
x=this.a
x.b=new P.U(z,y)
x.a=!0}}},
iY:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isU")
w=this.c
if(w.dC(z)&&w.e!=null){v=this.b
v.b=w.dw(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.bc(u)
w=H.h(this.a.a.c,"$isU")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.U(y,x)
s.a=!0}}},
dI:{"^":"b;a,0b"},
ia:{"^":"b;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.ab(0,$.H,[P.C])
z.a=0
x=H.p(this,0)
w=H.k(new P.ic(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.id(z,y),{func:1,ret:-1})
W.ay(this.a,this.b,w,!1,x)
return y}},
ic:{"^":"n;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.p(this.b,0)]}}},
id:{"^":"n:0;a,b",
$0:function(){this.b.ai(this.a.a)}},
ib:{"^":"b;"},
U:{"^":"b;a,b",
j:function(a){return H.e(this.a)},
$isM:1},
jR:{"^":"b;",$ismw:1},
k6:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dq()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.j(0)
throw x}},
jn:{"^":"jR;",
dK:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.e2(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.bc(x)
P.bS(null,null,this,z,H.h(y,"$isa2"))}},
dL:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.e3(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.bc(x)
P.bS(null,null,this,z,H.h(y,"$isa2"))}},
dd:function(a,b){return new P.jp(this,H.k(a,{func:1,ret:b}),b)},
bj:function(a){return new P.jo(this,H.k(a,{func:1,ret:-1}))},
de:function(a,b){return new P.jq(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bO:function(a,b){H.k(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.e2(null,null,this,a,b)},
ay:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.H===C.e)return a.$1(b)
return P.e3(null,null,this,a,b,c,d)},
dJ:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.H===C.e)return a.$2(b,c)
return P.k7(null,null,this,a,b,c,d,e,f)}},
jp:{"^":"n;a,b,c",
$0:function(){return this.a.bO(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jo:{"^":"n:1;a,b",
$0:function(){return this.a.dK(this.b)}},
jq:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dL(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dg:function(a,b,c){H.bx(a)
return H.v(H.kf(a,new H.de(0,0,[b,c])),"$isdf",[b,c],"$asdf")},
a_:function(a,b){return new H.de(0,0,[a,b])},
a0:function(a,b,c,d){return new P.j8(0,0,[d])},
h6:function(a,b,c){var z,y
if(P.ct(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.d])
y=$.bd()
C.a.l(y,a)
try{P.k3(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.dw(b,H.kv(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
ce:function(a,b,c){var z,y,x
if(P.ct(a))return b+"..."+c
z=new P.co(b)
y=$.bd()
C.a.l(y,a)
try{x=z
x.a=P.dw(x.gT(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gT()+c
y=z.gT()
return y.charCodeAt(0)==0?y:y},
ct:function(a){var z,y
for(z=0;y=$.bd(),z<y.length;++z)if(a===y[z])return!0
return!1},
k3:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.l(b,-1)
v=b.pop()
if(0>=b.length)return H.l(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.l(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
ci:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.N)(a),++x)z.l(0,H.z(a[x],b))
return z},
dj:function(a){var z,y,x
z={}
if(P.ct(a))return"{...}"
y=new P.co("")
try{C.a.l($.bd(),a)
x=y
x.a=x.gT()+"{"
z.a=!0
J.f1(a,new P.hk(z,y))
z=y
z.a=z.gT()+"}"}finally{z=$.bd()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gT()
return z.charCodeAt(0)==0?z:z},
j8:{"^":"j2;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dP(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbu")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbu")!=null}else return this.cM(b)},
cM:function(a){var z=this.d
if(z==null)return!1
return this.am(this.b7(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cq()
this.b=z}return this.b1(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cq()
this.c=y}return this.b1(y,b)}else return this.cK(0,b)},
cK:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cq()
this.d=z}y=this.b5(b)
x=z[y]
if(x==null)z[y]=[this.aq(b)]
else{if(this.am(x,b)>=0)return!1
x.push(this.aq(b))}return!0},
bN:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.ba(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ba(this.c,b)
else return this.cW(0,b)},
cW:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b7(z,b)
x=this.am(y,b)
if(x<0)return!1
this.be(y.splice(x,1)[0])
return!0},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ao()}},
b1:function(a,b){H.z(b,H.p(this,0))
if(H.h(a[b],"$isbu")!=null)return!1
a[b]=this.aq(b)
return!0},
ba:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbu")
if(z==null)return!1
this.be(z)
delete a[b]
return!0},
ao:function(){this.r=this.r+1&67108863},
aq:function(a){var z,y
z=new P.bu(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ao()
return z},
be:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ao()},
b5:function(a){return J.ai(a)&0x3ffffff},
b7:function(a,b){return a[this.b5(b)]},
am:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aD(a[y].a,b))return y
return-1},
p:{
cq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bu:{"^":"b;a,0b,0c"},
dP:{"^":"b;a,b,0c,0d,$ti",
sb3:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aF(z))
else{z=this.c
if(z==null){this.sb3(null)
return!1}else{this.sb3(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaT:1,
p:{
j9:function(a,b,c){var z=new P.dP(a,b,[c])
z.c=a.e
return z}}},
j2:{"^":"i_;"},
hi:{"^":"ja;",$isj:1,$isa:1},
o:{"^":"b;$ti",
gw:function(a){return new H.dh(a,this.gk(a),0,[H.bb(this,a,"o",0)])},
q:function(a,b){return this.h(a,b)},
dv:function(a,b,c,d){var z,y,x
H.z(b,d)
H.k(c,{func:1,ret:d,args:[d,H.bb(this,a,"o",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gk(a))throw H.c(P.aF(a))}return y},
j:function(a){return P.ce(a,"[","]")}},
di:{"^":"Q;"},
hk:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
Q:{"^":"b;$ti",
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bb(this,a,"Q",0),H.bb(this,a,"Q",1)]})
for(z=J.bD(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gk:function(a){return J.aO(this.gD(a))},
j:function(a){return P.dj(a)},
$isI:1},
i0:{"^":"b;$ti",
G:function(a,b){var z
for(z=J.bD(H.v(b,"$isj",this.$ti,"$asj"));z.t();)this.l(0,z.gA(z))},
j:function(a){return P.ce(this,"{","}")},
$isj:1,
$islX:1},
i_:{"^":"i0;"},
ja:{"^":"b+o;"}}],["","",,P,{"^":"",
fT:function(a){if(a instanceof H.n)return a.j(0)
return"Instance of '"+H.b_(a)+"'"},
bH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bg(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fT(a)},
d7:function(a){return new P.iP(a)},
aB:function(a){H.c0(H.e(a))},
O:{"^":"b;"},
"+bool":0,
bh:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bh&&this.a===b.a&&!0},
J:function(a,b){return C.d.J(this.a,H.h(b,"$isbh").a)},
gv:function(a){var z=this.a
return(z^C.d.bb(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t,s
z=P.fI(H.hP(this))
y=P.bi(H.hN(this))
x=P.bi(H.hJ(this))
w=P.bi(H.hK(this))
v=P.bi(H.hM(this))
u=P.bi(H.hO(this))
t=P.fJ(H.hL(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isT:1,
$asT:function(){return[P.bh]},
p:{
fI:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bi:function(a){if(a>=10)return""+a
return"0"+a}}},
af:{"^":"D;"},
"+double":0,
aQ:{"^":"b;a",
S:function(a,b){return C.d.S(this.a,H.h(b,"$isaQ").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.d.J(this.a,H.h(b,"$isaQ").a)},
j:function(a){var z,y,x,w,v
z=new P.fQ()
y=this.a
if(y<0)return"-"+new P.aQ(0-y).j(0)
x=z.$1(C.d.U(y,6e7)%60)
w=z.$1(C.d.U(y,1e6)%60)
v=new P.fP().$1(y%1e6)
return""+C.d.U(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isT:1,
$asT:function(){return[P.aQ]},
p:{
d2:function(a,b,c,d,e,f){return new P.aQ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fP:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fQ:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"b;"},
dq:{"^":"M;",
j:function(a){return"Throw of null."}},
aE:{"^":"M;a,b,c,d",
gak:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaj:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gak()+y+x
if(!this.a)return w
v=this.gaj()
u=P.bH(this.b)
return w+v+": "+u},
p:{
cS:function(a,b,c){return new P.aE(!0,a,b,c)}}},
dr:{"^":"aE;e,f,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bL:function(a,b,c){return new P.dr(null,null,!0,a,b,"Value not in range")},
bK:function(a,b,c,d,e){return new P.dr(b,c,!0,a,d,"Invalid value")}}},
h4:{"^":"aE;e,k:f>,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y
z=H.L(this.b)
if(typeof z!=="number")return z.a1()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
E:function(a,b,c,d,e){var z=H.L(e==null?J.aO(b):e)
return new P.h4(b,z,!0,a,c,"Index out of range")}}},
ip:{"^":"M;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.ip(a)}}},
im:{"^":"M;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dF:function(a){return new P.im(a)}}},
cm:{"^":"M;a",
j:function(a){return"Bad state: "+this.a},
p:{
cn:function(a){return new P.cm(a)}}},
fC:{"^":"M;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bH(z)+"."},
p:{
aF:function(a){return new P.fC(a)}}},
dv:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isM:1},
fH:{"^":"M;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iP:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
bk:{"^":"b;"},
C:{"^":"D;"},
"+int":0,
j:{"^":"b;$ti",
aA:["ck",function(a,b){var z=H.cx(this,"j",0)
return new H.dG(this,H.k(b,{func:1,ret:P.O,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.Y(P.bK(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
j:function(a){return P.h6(this,"(",")")}},
aT:{"^":"b;$ti"},
a:{"^":"b;$ti",$isj:1},
"+List":0,
I:{"^":"b;$ti"},
F:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isT:1,
$asT:function(){return[P.D]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.aZ(this)},
j:function(a){return"Instance of '"+H.b_(this)+"'"},
toString:function(){return this.j(this)}},
a2:{"^":"b;"},
d:{"^":"b;",$isT:1,
$asT:function(){return[P.d]},
$ishF:1},
"+String":0,
co:{"^":"b;T:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dw:function(a,b,c){var z=J.bD(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fR:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).K(z,a,b,c)
y.toString
z=W.r
z=new H.dG(new W.a4(y),H.k(new W.fS(),{func:1,ret:P.O,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.Y(H.db())
w=x.gA(x)
if(x.t())H.Y(H.h7())
return H.h(w,"$isP")},
d6:function(a){H.h(a,"$isK")
return"wheel"},
aR:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f4(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
iM:function(a,b){return document.createElement(a)},
bP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dO:function(a,b,c,d){var z,y
z=W.bP(W.bP(W.bP(W.bP(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e0:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iG(a)
if(!!J.A(z).$isK)return z
return}else return H.h(a,"$isK")},
e6:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.e)return a
return z.de(a,b)},
J:{"^":"P;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kF:{"^":"f;0k:length=","%":"AccessibleNodeList"},
fn:{"^":"J;",
j:function(a){return String(a)},
$isfn:1,
"%":"HTMLAnchorElement"},
kG:{"^":"J;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cT:{"^":"J;",$iscT:1,"%":"HTMLBaseElement"},
fs:{"^":"f;","%":";Blob"},
bF:{"^":"J;",$isbF:1,"%":"HTMLBodyElement"},
ca:{"^":"J;0n:height=,0m:width=",
aB:function(a,b,c){if(c!=null)return this.cR(a,b,P.kc(c,null))
return this.cS(a,b)},
c8:function(a,b){return this.aB(a,b,null)},
cR:function(a,b,c){return a.getContext(b,c)},
cS:function(a,b){return a.getContext(b)},
$isca:1,
"%":"HTMLCanvasElement"},
fv:{"^":"f;",
a8:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
cb:{"^":"f;",
bu:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
du:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ac:function(a){return P.X(a.getContextAttributes())},
$iscb:1,
"%":"CanvasRenderingContext2D"},
kM:{"^":"r;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fD:{"^":"cc;",$isfD:1,"%":"CSSNumericValue|CSSUnitValue"},
kN:{"^":"fG;0k:length=","%":"CSSPerspective"},
aj:{"^":"f;",$isaj:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fE:{"^":"iE;0k:length=",
aF:function(a,b){var z=this.cT(a,this.ag(a,b))
return z==null?"":z},
ag:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.d4(a,b)
z[b]=y
return y},
d4:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fK()+b
if(z in a)return z
return b},
cT:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fF:{"^":"b;",
gn:function(a){return this.aF(a,"height")},
gm:function(a){return this.aF(a,"width")}},
cc:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fG:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kP:{"^":"cc;0k:length=","%":"CSSTransformValue"},
kQ:{"^":"cc;0k:length=","%":"CSSUnparsedValue"},
kS:{"^":"f;0k:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fL:{"^":"J;","%":"HTMLDivElement"},
fM:{"^":"r;",
d7:function(a,b){return a.adoptNode(b)},
c9:function(a,b){return a.getElementById(b)},
dF:function(a,b){return a.querySelector(b)},
gbI:function(a){return new W.bs(a,"mousedown",!1,[W.R])},
gbJ:function(a){return new W.bs(a,"mousemove",!1,[W.R])},
gbK:function(a){return new W.bs(a,"mouseup",!1,[W.R])},
gbL:function(a){return new W.bs(a,H.t(W.d6(a)),!1,[W.aH])},
"%":"XMLDocument;Document"},
kT:{"^":"f;",
j:function(a){return String(a)},
"%":"DOMException"},
fN:{"^":"f;",
dm:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kU:{"^":"iI;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c,"$isS",[P.D],"$asS")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.S,P.D]]},
$isw:1,
$asw:function(){return[[P.S,P.D]]},
$aso:function(){return[[P.S,P.D]]},
$isj:1,
$asj:function(){return[[P.S,P.D]]},
$isa:1,
$asa:function(){return[[P.S,P.D]]},
$asq:function(){return[[P.S,P.D]]},
"%":"ClientRectList|DOMRectList"},
fO:{"^":"f;",
j:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isS",[P.D],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.i(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isS:1,
$asS:function(){return[P.D]},
"%":";DOMRectReadOnly"},
kV:{"^":"iK;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.d]},
$isw:1,
$asw:function(){return[P.d]},
$aso:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
kW:{"^":"f;0k:length=","%":"DOMTokenList"},
P:{"^":"r;0dM:tagName=",
gda:function(a){return new W.iL(a)},
j:function(a){return a.localName},
K:["ad",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d5
if(z==null){z=H.m([],[W.a9])
y=new W.dn(z)
C.a.l(z,W.dM(null))
C.a.l(z,W.dX())
$.d5=y
d=y}else d=z
z=$.d4
if(z==null){z=new W.e_(d)
$.d4=z
c=z}else{z.a=d
c=z}}if($.ad==null){z=document
y=z.implementation
y=(y&&C.L).dm(y,"")
$.ad=y
$.cd=y.createRange()
y=$.ad
y.toString
y=y.createElement("base")
H.h(y,"$iscT")
y.href=z.baseURI
z=$.ad.head;(z&&C.M).E(z,y)}z=$.ad
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbF")}z=$.ad
if(!!this.$isbF)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ad.body;(z&&C.p).E(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.cd;(z&&C.E).ca(z,x)
z=$.cd
w=(z&&C.E).dk(z,b)}else{x.innerHTML=b
w=$.ad.createDocumentFragment()
for(z=J.i(w);y=x.firstChild,y!=null;)z.E(w,y)}z=$.ad.body
if(x==null?z!=null:x!==z)J.cL(x)
c.aK(w)
C.t.d7(document,w)
return w},function(a,b,c){return this.K(a,b,c,null)},"dl",null,null,"gdV",5,5,null],
cc:function(a,b,c,d){a.textContent=null
this.E(a,this.K(a,b,c,d))},
cb:function(a,b){return this.cc(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
cX:function(a,b){return a.removeAttribute(b)},
gbI:function(a){return new W.bO(a,"mousedown",!1,[W.R])},
gbJ:function(a){return new W.bO(a,"mousemove",!1,[W.R])},
gbK:function(a){return new W.bO(a,"mouseup",!1,[W.R])},
gbL:function(a){return new W.bO(a,H.t(W.d6(a)),!1,[W.aH])},
$isP:1,
"%":";Element"},
fS:{"^":"n:18;",
$1:function(a){return!!J.A(H.h(a,"$isr")).$isP}},
kX:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
Z:{"^":"f;",$isZ:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"f;",
d6:function(a,b,c,d){H.k(c,{func:1,args:[W.Z]})
if(c!=null)this.cL(a,b,c,!1)},
cL:function(a,b,c,d){return a.addEventListener(b,H.b7(H.k(c,{func:1,args:[W.Z]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dU|dV|dY|dZ"},
ak:{"^":"fs;",$isak:1,"%":"File"},
ld:{"^":"iR;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isak")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ak]},
$isw:1,
$asw:function(){return[W.ak]},
$aso:function(){return[W.ak]},
$isj:1,
$asj:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"FileList"},
le:{"^":"K;0k:length=","%":"FileWriter"},
lh:{"^":"J;0k:length=","%":"HTMLFormElement"},
al:{"^":"f;",$isal:1,"%":"Gamepad"},
h1:{"^":"J;","%":"HTMLHeadElement"},
li:{"^":"f;0k:length=","%":"History"},
lj:{"^":"j4;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isr")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$aso:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h2:{"^":"fM;","%":"HTMLDocument"},
lk:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
ll:{"^":"f;0n:height=,0m:width=","%":"ImageBitmap"},
lm:{"^":"f;0n:height=,0m:width=","%":"ImageData"},
ln:{"^":"J;0n:height=,0m:width=","%":"HTMLImageElement"},
lp:{"^":"J;0n:height=,0m:width=","%":"HTMLInputElement"},
aU:{"^":"dE;",$isaU:1,"%":"KeyboardEvent"},
hj:{"^":"f;",
j:function(a){return String(a)},
$ishj:1,
"%":"Location"},
hn:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
lw:{"^":"f;0k:length=","%":"MediaList"},
lx:{"^":"jc;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.hp(z))
return z},
gk:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hp:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ly:{"^":"jd;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.hq(z))
return z},
gk:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hq:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
an:{"^":"f;",$isan:1,"%":"MimeType"},
lz:{"^":"jf;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isan")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.an]},
$isw:1,
$asw:function(){return[W.an]},
$aso:function(){return[W.an]},
$isj:1,
$asj:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"MimeTypeArray"},
R:{"^":"dE;",
gbH:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aY(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.A(W.e0(z)).$isP)throw H.c(P.y("offsetX is only supported on elements"))
y=H.h(W.e0(z),"$isP")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.v(new P.aY(u,v,w),"$isaY",w,"$asaY")
if(typeof z!=="number")return z.aO()
if(typeof x!=="number")return x.aO()
return new P.aY(C.u.bT(z-u),C.u.bT(x-v),w)}},
$isR:1,
"%":";DragEvent|MouseEvent"},
a4:{"^":"hi;a",
ga3:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cn("No elements"))
if(y>1)throw H.c(P.cn("More than one element"))
return z.firstChild},
G:function(a,b){var z,y,x,w,v
H.v(b,"$isj",[W.r],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.i(y),v=0;v<x;++v)w.E(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.h(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.l(y,b)
J.eI(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.d9(z,z.length,-1,[H.bb(C.Y,z,"q",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"K;0dE:previousSibling=",
dG:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
j:function(a){var z=a.nodeValue
return z==null?this.cj(a):z},
E:function(a,b){return a.appendChild(b)},
cY:function(a,b){return a.removeChild(b)},
cZ:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hA:{"^":"jh;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isr")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$aso:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lI:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lK:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lL:{"^":"f;0n:height=,0m:width=","%":"PaintSize"},
ap:{"^":"f;0k:length=",$isap:1,"%":"Plugin"},
lN:{"^":"jl;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isap")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ap]},
$isw:1,
$asw:function(){return[W.ap]},
$aso:function(){return[W.ap]},
$isj:1,
$asj:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"PluginArray"},
lP:{"^":"R;0n:height=,0m:width=","%":"PointerEvent"},
hR:{"^":"f;",
dk:function(a,b){return a.createContextualFragment(b)},
ca:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lU:{"^":"jr;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.hX(z))
return z},
gk:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hX:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lV:{"^":"f;0n:height=,0m:width=","%":"Screen"},
lW:{"^":"J;0k:length=","%":"HTMLSelectElement"},
aq:{"^":"K;",$isaq:1,"%":"SourceBuffer"},
lY:{"^":"dV;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaq")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isw:1,
$asw:function(){return[W.aq]},
$aso:function(){return[W.aq]},
$isj:1,
$asj:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"SourceBufferList"},
ar:{"^":"f;",$isar:1,"%":"SpeechGrammar"},
lZ:{"^":"jx;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isar")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ar]},
$isw:1,
$asw:function(){return[W.ar]},
$aso:function(){return[W.ar]},
$isj:1,
$asj:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"SpeechGrammarList"},
as:{"^":"f;0k:length=",$isas:1,"%":"SpeechRecognitionResult"},
m1:{"^":"jA;",
h:function(a,b){return this.b8(a,H.t(b))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cV(a,z)
if(y==null)return
b.$2(y,this.b8(a,y))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.i9(z))
return z},
gk:function(a){return a.length},
b8:function(a,b){return a.getItem(b)},
cV:function(a,b){return a.key(b)},
$asQ:function(){return[P.d,P.d]},
$isI:1,
$asI:function(){return[P.d,P.d]},
"%":"Storage"},
i9:{"^":"n:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
at:{"^":"f;",$isat:1,"%":"CSSStyleSheet|StyleSheet"},
ie:{"^":"J;",
K:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ad(a,b,c,d)
z=W.fR("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a4(y).G(0,new W.a4(z))
return y},
"%":"HTMLTableElement"},
m4:{"^":"J;",
K:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ad(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga3(z)
x.toString
z=new W.a4(x)
w=z.ga3(z)
y.toString
w.toString
new W.a4(y).G(0,new W.a4(w))
return y},
"%":"HTMLTableRowElement"},
m5:{"^":"J;",
K:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ad(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga3(z)
y.toString
x.toString
new W.a4(y).G(0,new W.a4(x))
return y},
"%":"HTMLTableSectionElement"},
dy:{"^":"J;",$isdy:1,"%":"HTMLTemplateElement"},
m6:{"^":"f;0m:width=","%":"TextMetrics"},
au:{"^":"K;",$isau:1,"%":"TextTrack"},
av:{"^":"K;",$isav:1,"%":"TextTrackCue|VTTCue"},
m7:{"^":"jI;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isav")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$isw:1,
$asw:function(){return[W.av]},
$aso:function(){return[W.av]},
$isj:1,
$asj:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"TextTrackCueList"},
m8:{"^":"dZ;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isau")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isw:1,
$asw:function(){return[W.au]},
$aso:function(){return[W.au]},
$isj:1,
$asj:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"TextTrackList"},
m9:{"^":"f;0k:length=","%":"TimeRanges"},
aw:{"^":"f;",$isaw:1,"%":"Touch"},
ma:{"^":"jN;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaw")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$isw:1,
$asw:function(){return[W.aw]},
$aso:function(){return[W.aw]},
$isj:1,
$asj:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"TouchList"},
mb:{"^":"f;0k:length=","%":"TrackDefaultList"},
dE:{"^":"Z;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mp:{"^":"f;",
j:function(a){return String(a)},
"%":"URL"},
ms:{"^":"hn;0n:height=,0m:width=","%":"HTMLVideoElement"},
mt:{"^":"K;0k:length=","%":"VideoTrackList"},
mu:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mv:{"^":"f;0m:width=","%":"VTTRegion"},
aH:{"^":"R;",
gdq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
$isaH:1,
"%":"WheelEvent"},
it:{"^":"K;",
gd9:function(a){var z,y,x
z=P.D
y=new P.ab(0,$.H,[z])
x=H.k(new W.iu(new P.jE(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cQ(a)
this.d_(a,W.e6(x,z))
return y},
d_:function(a,b){return a.requestAnimationFrame(H.b7(H.k(b,{func:1,ret:-1,args:[P.D]}),1))},
cQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdH:1,
"%":"DOMWindow|Window"},
iu:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.bW(H.cA(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.Y(P.cn("Future already completed"))
z.ai(a)}},
dJ:{"^":"r;",$isdJ:1,"%":"Attr"},
mB:{"^":"jT;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaj")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aj]},
$isw:1,
$asw:function(){return[W.aj]},
$aso:function(){return[W.aj]},
$isj:1,
$asj:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"CSSRuleList"},
mC:{"^":"fO;",
j:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isS",[P.D],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.i(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mD:{"^":"jV;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isal")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.al]},
$isw:1,
$asw:function(){return[W.al]},
$aso:function(){return[W.al]},
$isj:1,
$asj:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$asq:function(){return[W.al]},
"%":"GamepadList"},
mI:{"^":"jX;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isr")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$aso:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mJ:{"^":"jZ;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isas")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.as]},
$isw:1,
$asw:function(){return[W.as]},
$aso:function(){return[W.as]},
$isj:1,
$asj:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"SpeechRecognitionResultList"},
mK:{"^":"k0;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isat")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.at]},
$isw:1,
$asw:function(){return[W.at]},
$aso:function(){return[W.at]},
$isj:1,
$asj:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"StyleSheetList"},
iB:{"^":"di;cP:a<",
C:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.i(x),v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.m([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.l(z,w)
v=H.h(z[w],"$isdJ")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asQ:function(){return[P.d,P.d]},
$asI:function(){return[P.d,P.d]}},
iL:{"^":"iB;a",
h:function(a,b){return J.c6(this.a,H.t(b))},
gk:function(a){return this.gD(this).length}},
bs:{"^":"ia;a,b,c,$ti"},
bO:{"^":"bs;a,b,c,$ti"},
iN:{"^":"ib;a,b,c,d,e,$ti",p:{
ay:function(a,b,c,d,e){var z=W.e6(new W.iO(c),W.Z)
if(z!=null&&!0)J.eJ(a,b,z,!1)
return new W.iN(0,a,b,z,!1,[e])}}},
iO:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.h(a,"$isZ"))}},
bt:{"^":"b;a",
cH:function(a){var z,y
z=$.cE()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.V[y],W.kl())
for(y=0;y<12;++y)z.i(0,C.w[y],W.km())}},
V:function(a){return $.eD().u(0,W.aR(a))},
P:function(a,b,c){var z,y,x
z=W.aR(a)
y=$.cE()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bU(x.$4(a,b,c,this))},
$isa9:1,
p:{
dM:function(a){var z,y
z=document.createElement("a")
y=new W.js(z,window.location)
y=new W.bt(y)
y.cH(a)
return y},
mG:[function(a,b,c,d){H.h(a,"$isP")
H.t(b)
H.t(c)
H.h(d,"$isbt")
return!0},"$4","kl",16,0,12],
mH:[function(a,b,c,d){var z,y,x
H.h(a,"$isP")
H.t(b)
H.t(c)
z=H.h(d,"$isbt").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","km",16,0,12]}},
q:{"^":"b;$ti",
gw:function(a){return new W.d9(a,this.gk(a),-1,[H.bb(this,a,"q",0)])}},
dn:{"^":"b;a",
V:function(a){return C.a.bg(this.a,new W.hC(a))},
P:function(a,b,c){return C.a.bg(this.a,new W.hB(a,b,c))},
$isa9:1},
hC:{"^":"n:9;a",
$1:function(a){return H.h(a,"$isa9").V(this.a)}},
hB:{"^":"n:9;a,b,c",
$1:function(a){return H.h(a,"$isa9").P(this.a,this.b,this.c)}},
jt:{"^":"b;",
cI:function(a,b,c,d){var z,y,x
this.a.G(0,c)
z=b.aA(0,new W.ju())
y=b.aA(0,new W.jv())
this.b.G(0,z)
x=this.c
x.G(0,C.X)
x.G(0,y)},
V:function(a){return this.a.u(0,W.aR(a))},
P:["cm",function(a,b,c){var z,y
z=W.aR(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.d8(c)
else if(y.u(0,"*::"+b))return this.d.d8(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa9:1},
ju:{"^":"n:10;",
$1:function(a){return!C.a.u(C.w,H.t(a))}},
jv:{"^":"n:10;",
$1:function(a){return C.a.u(C.w,H.t(a))}},
jF:{"^":"jt;e,a,b,c,d",
P:function(a,b,c){if(this.cm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c6(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dX:function(){var z,y,x,w,v
z=P.d
y=P.ci(C.v,z)
x=H.p(C.v,0)
w=H.k(new W.jG(),{func:1,ret:z,args:[x]})
v=H.m(["TEMPLATE"],[z])
y=new W.jF(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cI(null,new H.hl(C.v,w,[x,z]),v,null)
return y}}},
jG:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
jD:{"^":"b;",
V:function(a){var z=J.A(a)
if(!!z.$isdt)return!1
z=!!z.$isG
if(z&&W.aR(a)==="foreignObject")return!1
if(z)return!0
return!1},
P:function(a,b,c){if(b==="is"||C.h.ce(b,"on"))return!1
return this.V(a)},
$isa9:1},
d9:{"^":"b;a,b,c,0d,$ti",
sb6:function(a){this.d=H.z(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb6(J.be(this.a,z))
this.c=z
return!0}this.sb6(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaT:1},
iF:{"^":"b;a",$isK:1,$isdH:1,p:{
iG:function(a){if(a===window)return H.h(a,"$isdH")
else return new W.iF(a)}}},
a9:{"^":"b;"},
js:{"^":"b;a,b",$ismo:1},
e_:{"^":"b;a",
aK:function(a){new W.jQ(this).$2(a,null)},
a_:function(a,b){if(b==null)J.cL(a)
else J.bA(b,a)},
d2:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f2(a)
x=J.c6(y.gcP(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.bg(a)}catch(t){H.a5(t)}try{u=W.aR(a)
this.d1(H.h(a,"$isP"),b,z,v,u,H.h(y,"$isI"),H.t(x))}catch(t){if(H.a5(t) instanceof P.aE)throw t
else{this.a_(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d1:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a_(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.V(a)){this.a_(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.P(a,"is",g)){this.a_(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.m(z.slice(0),[H.p(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.i(z);x>=0;--x){if(x>=y.length)return H.l(y,x)
v=y[x]
if(!this.a.P(a,J.fe(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.cX(z,v)}}if(!!J.A(a).$isdy)this.aK(a.content)},
$islG:1},
jQ:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d2(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a_(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f3(z)}catch(w){H.a5(w)
v=H.h(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isr")}}},
iE:{"^":"f+fF;"},
iH:{"^":"f+o;"},
iI:{"^":"iH+q;"},
iJ:{"^":"f+o;"},
iK:{"^":"iJ+q;"},
iQ:{"^":"f+o;"},
iR:{"^":"iQ+q;"},
j3:{"^":"f+o;"},
j4:{"^":"j3+q;"},
jc:{"^":"f+Q;"},
jd:{"^":"f+Q;"},
je:{"^":"f+o;"},
jf:{"^":"je+q;"},
jg:{"^":"f+o;"},
jh:{"^":"jg+q;"},
jk:{"^":"f+o;"},
jl:{"^":"jk+q;"},
jr:{"^":"f+Q;"},
dU:{"^":"K+o;"},
dV:{"^":"dU+q;"},
jw:{"^":"f+o;"},
jx:{"^":"jw+q;"},
jA:{"^":"f+Q;"},
jH:{"^":"f+o;"},
jI:{"^":"jH+q;"},
dY:{"^":"K+o;"},
dZ:{"^":"dY+q;"},
jM:{"^":"f+o;"},
jN:{"^":"jM+q;"},
jS:{"^":"f+o;"},
jT:{"^":"jS+q;"},
jU:{"^":"f+o;"},
jV:{"^":"jU+q;"},
jW:{"^":"f+o;"},
jX:{"^":"jW+q;"},
jY:{"^":"f+o;"},
jZ:{"^":"jY+q;"},
k_:{"^":"f+o;"},
k0:{"^":"k_+q;"}}],["","",,P,{"^":"",
X:function(a){var z,y,x,w,v
if(a==null)return
z=P.a_(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.t(y[w])
z.i(0,v,a[v])}return z},
kc:function(a,b){var z={}
a.C(0,new P.kd(z))
return z},
d1:function(){var z=$.d0
if(z==null){z=J.c2(window.navigator.userAgent,"Opera",0)
$.d0=z}return z},
fK:function(){var z,y
z=$.cY
if(z!=null)return z
y=$.cZ
if(y==null){y=J.c2(window.navigator.userAgent,"Firefox",0)
$.cZ=y}if(y)z="-moz-"
else{y=$.d_
if(y==null){y=!P.d1()&&J.c2(window.navigator.userAgent,"Trident/",0)
$.d_=y}if(y)z="-ms-"
else z=P.d1()?"-o-":"-webkit-"}$.cY=z
return z},
kd:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j5:{"^":"b;",
dD:function(){return Math.random()}},
aY:{"^":"b;X:a>,R:b>,$ti",
j:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.aL(b,"$isaY",[P.D],null)&&this.a==J.bE(b)&&this.b==b.gR(b)},
gv:function(a){var z,y,x
z=J.ai(this.a)
y=J.ai(this.b)
y=P.dN(P.dN(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jm:{"^":"b;"},
S:{"^":"jm;$ti"}}],["","",,P,{"^":"",fo:{"^":"f;",$isfo:1,"%":"SVGAnimatedLength"},kY:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},kZ:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},l_:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},l0:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},l1:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},l2:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},l3:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},l4:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},l5:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},l6:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},l7:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},l8:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},l9:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},la:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lb:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},lc:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lf:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},lg:{"^":"bl;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h0:{"^":"bl;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bl:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lo:{"^":"bl;0n:height=,0m:width=","%":"SVGImageElement"},aV:{"^":"f;",$isaV:1,"%":"SVGLength"},lu:{"^":"j7;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.O(a,b)},
i:function(a,b,c){H.h(c,"$isaV")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aV]},
$isj:1,
$asj:function(){return[P.aV]},
$isa:1,
$asa:function(){return[P.aV]},
$asq:function(){return[P.aV]},
"%":"SVGLengthList"},lv:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aX:{"^":"f;",$isaX:1,"%":"SVGNumber"},lH:{"^":"jj;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.O(a,b)},
i:function(a,b,c){H.h(c,"$isaX")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aX]},
$isj:1,
$asj:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$asq:function(){return[P.aX]},
"%":"SVGNumberList"},lM:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},lO:{"^":"f;0k:length=","%":"SVGPointList"},lQ:{"^":"f;0n:height=,0m:width=","%":"SVGRect"},lR:{"^":"h0;0n:height=,0m:width=","%":"SVGRectElement"},dt:{"^":"G;",$isdt:1,"%":"SVGScriptElement"},m2:{"^":"jC;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.O(a,b)},
i:function(a,b,c){H.t(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},G:{"^":"P;",
K:function(a,b,c,d){var z,y,x,w,v,u
z=H.m([],[W.a9])
C.a.l(z,W.dM(null))
C.a.l(z,W.dX())
C.a.l(z,new W.jD())
c=new W.e_(new W.dn(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dl(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a4(w)
u=z.ga3(z)
for(z=J.i(v);x=u.firstChild,x!=null;)z.E(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m3:{"^":"bl;0n:height=,0m:width=","%":"SVGSVGElement"},b0:{"^":"f;",$isb0:1,"%":"SVGTransform"},mc:{"^":"jP;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.O(a,b)},
i:function(a,b,c){H.h(c,"$isb0")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b0]},
$isj:1,
$asj:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$asq:function(){return[P.b0]},
"%":"SVGTransformList"},mq:{"^":"bl;0n:height=,0m:width=","%":"SVGUseElement"},j6:{"^":"f+o;"},j7:{"^":"j6+q;"},ji:{"^":"f+o;"},jj:{"^":"ji+q;"},jB:{"^":"f+o;"},jC:{"^":"jB+q;"},jO:{"^":"f+o;"},jP:{"^":"jO+q;"}}],["","",,P,{"^":"",ae:{"^":"b;",$isj:1,
$asj:function(){return[P.af]},
$isa:1,
$asa:function(){return[P.af]},
$isik:1}}],["","",,P,{"^":"",kH:{"^":"f;0k:length=","%":"AudioBuffer"},kI:{"^":"iC;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new P.fq(z))
return z},
gk:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"AudioParamMap"},fq:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kJ:{"^":"K;0k:length=","%":"AudioTrackList"},fr:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lJ:{"^":"fr;0k:length=","%":"OfflineAudioContext"},iC:{"^":"f+Q;"}}],["","",,P,{"^":"",ft:{"^":"f;",$isft:1,"%":"WebGLBuffer"},fZ:{"^":"f;",$isfZ:1,"%":"WebGLFramebuffer"},hQ:{"^":"f;",$ishQ:1,"%":"WebGLProgram"},lS:{"^":"f;",
bf:function(a,b){return a.activeTexture(b)},
bh:function(a,b,c){return a.attachShader(b,c)},
bi:function(a,b,c){return a.bindBuffer(b,c)},
bk:function(a,b,c){return a.bindFramebuffer(b,c)},
bl:function(a,b,c){return a.bindTexture(b,c)},
bm:function(a,b){return a.blendEquation(b)},
bn:function(a,b,c){return a.blendFunc(b,c)},
bo:function(a,b,c,d){return a.bufferData(b,c,d)},
bp:function(a,b){return a.clear(b)},
bq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
br:function(a,b){return a.compileShader(b)},
bs:function(a){return a.createBuffer()},
bt:function(a){return a.createProgram()},
bv:function(a,b){return a.createShader(b)},
bw:function(a){return a.createTexture()},
by:function(a,b){return a.depthMask(b)},
bz:function(a,b){return a.disable(b)},
bA:function(a,b,c,d){return a.drawArrays(b,c,d)},
bB:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bC:function(a,b){return a.enable(b)},
bD:function(a,b){return a.enableVertexAttribArray(b)},
ac:function(a){return P.X(a.getContextAttributes())},
aC:function(a){return a.getError()},
aD:function(a,b){return a.getProgramInfoLog(b)},
aE:function(a,b,c){return a.getProgramParameter(b,c)},
aG:function(a,b){return a.getShaderInfoLog(b)},
aH:function(a,b,c){return a.getShaderParameter(b,c)},
aI:function(a,b,c){return a.getUniformLocation(b,c)},
bF:function(a,b){return a.linkProgram(b)},
bM:function(a,b,c){return a.pixelStorei(b,c)},
aL:function(a,b,c){return a.shaderSource(b,c)},
aN:function(a,b,c,d){return a.stencilFunc(b,c,d)},
az:function(a,b,c,d,e,f,g,h,i,j){this.at(a,b,c,d,e,f,g)
return},
bP:function(a,b,c,d,e,f,g){return this.az(a,b,c,d,e,f,g,null,null,null)},
at:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bQ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bU:function(a,b,c){return a.uniform1f(b,c)},
bV:function(a,b,c){return a.uniform1fv(b,c)},
bW:function(a,b,c){return a.uniform1i(b,c)},
bX:function(a,b,c){return a.uniform1iv(b,c)},
bY:function(a,b,c){return a.uniform2fv(b,c)},
bZ:function(a,b,c){return a.uniform3fv(b,c)},
c_:function(a,b,c){return a.uniform4fv(b,c)},
c0:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c1:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c2:function(a,b){return a.useProgram(b)},
c3:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c5:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lT:{"^":"f;",
dc:function(a,b){return a.beginTransformFeedback(b)},
df:function(a,b){return a.bindVertexArray(b)},
dn:function(a){return a.createVertexArray()},
dr:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ds:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dt:function(a){return a.endTransformFeedback()},
dP:function(a,b,c,d){this.d5(a,b,H.v(c,"$isa",[P.d],"$asa"),d)
return},
d5:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dQ:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bf:function(a,b){return a.activeTexture(b)},
bh:function(a,b,c){return a.attachShader(b,c)},
bi:function(a,b,c){return a.bindBuffer(b,c)},
bk:function(a,b,c){return a.bindFramebuffer(b,c)},
bl:function(a,b,c){return a.bindTexture(b,c)},
bm:function(a,b){return a.blendEquation(b)},
bn:function(a,b,c){return a.blendFunc(b,c)},
bo:function(a,b,c,d){return a.bufferData(b,c,d)},
bp:function(a,b){return a.clear(b)},
bq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
br:function(a,b){return a.compileShader(b)},
bs:function(a){return a.createBuffer()},
bt:function(a){return a.createProgram()},
bv:function(a,b){return a.createShader(b)},
bw:function(a){return a.createTexture()},
by:function(a,b){return a.depthMask(b)},
bz:function(a,b){return a.disable(b)},
bA:function(a,b,c,d){return a.drawArrays(b,c,d)},
bB:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bC:function(a,b){return a.enable(b)},
bD:function(a,b){return a.enableVertexAttribArray(b)},
ac:function(a){return P.X(a.getContextAttributes())},
aC:function(a){return a.getError()},
aD:function(a,b){return a.getProgramInfoLog(b)},
aE:function(a,b,c){return a.getProgramParameter(b,c)},
aG:function(a,b){return a.getShaderInfoLog(b)},
aH:function(a,b,c){return a.getShaderParameter(b,c)},
aI:function(a,b,c){return a.getUniformLocation(b,c)},
bF:function(a,b){return a.linkProgram(b)},
bM:function(a,b,c){return a.pixelStorei(b,c)},
aL:function(a,b,c){return a.shaderSource(b,c)},
aN:function(a,b,c,d){return a.stencilFunc(b,c,d)},
az:function(a,b,c,d,e,f,g,h,i,j){this.at(a,b,c,d,e,f,g)
return},
bP:function(a,b,c,d,e,f,g){return this.az(a,b,c,d,e,f,g,null,null,null)},
at:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bQ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bU:function(a,b,c){return a.uniform1f(b,c)},
bV:function(a,b,c){return a.uniform1fv(b,c)},
bW:function(a,b,c){return a.uniform1i(b,c)},
bX:function(a,b,c){return a.uniform1iv(b,c)},
bY:function(a,b,c){return a.uniform2fv(b,c)},
bZ:function(a,b,c){return a.uniform3fv(b,c)},
c_:function(a,b,c){return a.uniform4fv(b,c)},
c0:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c1:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c2:function(a,b){return a.useProgram(b)},
c3:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c5:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i1:{"^":"f;",$isi1:1,"%":"WebGLShader"},ig:{"^":"f;",$isig:1,"%":"WebGLTexture"},il:{"^":"f;",$isil:1,"%":"WebGLUniformLocation"},ir:{"^":"f;",$isir:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",m_:{"^":"jz;",
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.X(this.cU(a,b))},
i:function(a,b,c){H.h(c,"$isI")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cU:function(a,b){return a.item(b)},
$aso:function(){return[[P.I,,,]]},
$isj:1,
$asj:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jy:{"^":"f+o;"},jz:{"^":"jy+q;"}}],["","",,G,{"^":"",
iv:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.l(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.W(z,"\n")},
dK:function(a,b,c){var z,y,x,w
z=J.i(a)
y=z.bv(a,b)
z.aL(a,y,c)
z.br(a,y)
x=H.bU(z.aH(a,y,35713))
if(x!=null&&!x){w=z.aG(a,y)
P.aB("E:Compilation failed:")
P.aB("E:"+G.iv(c))
P.aB("E:Failure:")
P.aB(C.h.F("E:",w))
throw H.c(w)}return y},
da:function(a,b){var z,y,x
H.v(a,"$isa",[T.x],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.i.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.l(a,y)
C.i.i(b,z+1,J.c5(a[y]))
z+=2
if(y>=a.length)return H.l(a,y)
x=J.cJ(a[y])
if(z>=b.length)return H.l(b,z)
b[z]=x}return b},
fW:function(a,b){var z,y
H.v(a,"$isa",[T.V],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.l(a,y)
C.i.i(b,z+1,J.c5(a[y]))}return b},
fX:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.ax],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.i.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.l(a,y)
C.i.i(b,z+1,J.c5(a[y]))
x=z+2
if(y>=a.length)return H.l(a,y)
w=J.cJ(a[y])
v=b.length
if(x>=v)return H.l(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.l(a,y)
w=J.f5(a[y])
if(z>=v)return H.l(b,z)
b[z]=w}return b},
fV:function(a,b){var z,y
H.v(a,"$isa",[[P.a,P.C]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.be(a[y],0))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+1,J.be(a[y],1))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+2,J.be(a[y],2))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+3,J.be(a[y],3))}return b},
j1:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.am(z,[H.p(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.C]],v=[P.af],u=[T.ax],t=[T.x],s=[T.V];y.t();){r=y.d
if(!x.a9(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ec>0)H.c0("I: "+r)
continue}q=z.h(0,r)
switch($.a6().h(0,r).a){case"vec2":b.Z(r,G.fW(H.bz(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.Z(r,G.da(H.bz(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.Z(r,G.fX(H.bz(q,"$isa",u,"$asa"),null),4)
break
case"float":b.Z(r,new Float32Array(H.bQ(H.bz(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.Z(r,G.fV(H.bz(q,"$isa",w,"$asa"),null),4)
break}}},
aW:{"^":"b;"},
b1:{"^":"aW;d,a,b,c",
aV:function(){return this.d},
j:function(a){var z,y,x,w
z=H.m(["{"+new H.dD(H.ki(this)).j(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.am(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.W(z,"\n")}},
fu:{"^":"du;"},
fx:{"^":"b;0a,b",
bE:function(a,b,c){J.f_(this.a,b)
if(c>0)J.fk(this.a,b,c)},
c4:function(a,b,c,d,e,f,g,h){J.c1(this.a,34962,b)
J.fl(this.a,c,d,e,!1,g,h)}},
fY:{"^":"b;a,b,c,d,e"},
fU:{"^":"b;"},
d8:{"^":"b;a,b,c,d"},
h_:{"^":"b;a,b,c,d,e",
aS:function(a){switch($.a6().h(0,a).a){case"vec2":this.e.i(0,a,H.m([],[T.V]))
break
case"vec3":this.e.i(0,a,H.m([],[T.x]))
break
case"vec4":this.e.i(0,a,H.m([],[T.ax]))
break
case"float":this.e.i(0,a,H.m([],[P.af]))
break
case"uvec4":this.e.i(0,a,H.m([],[[P.a,P.C]]))
break}},
co:function(a,b){var z,y,x,w,v,u
z=[T.V]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.V(v))}},
cp:function(a,b){var z,y,x,w,v
z=[T.x]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.x(new Float32Array(3))
v.I(w)
z.l(y,v)}},
cq:function(a){var z,y,x,w,v
H.v(a,"$isa",[T.x],"$asa")
z=this.d
y=z.length
C.a.l(this.c,new G.d8(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.x(new Float32Array(3))
v.I(w)
C.a.l(z,v)}},
cu:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.m(y,[P.C])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.l(y,v)
u=y[v]
C.a.i(x,w,u.gdS(u))
C.a.i(x,w+1,u.gdT(u))
C.a.i(x,w+2,u.gdU(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.N)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
j:function(a){var z,y,x,w,v
z=H.m(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.am(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a6().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.W(z," ")}},
dB:{"^":"b;a,b,c"},
dz:{"^":"b;a,b,c",p:{
dA:function(a,b,c){return new G.dz(a,b,c)}}},
hm:{"^":"b1;d,a,b,c",p:{
dk:function(a,b){var z=P.a_(P.d,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!1)
z.i(0,"cBlendEquation",b)
z.i(0,"cStencilFunc",$.er())
return new G.hm(z,a,!1,!0)}}},
ho:{"^":"aW;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sal:function(a){this.cx=H.v(a,"$isa",[P.C],"$asa")},
aR:function(a,b,c){var z,y
C.h.ah(a,0)
H.h(b,"$isae")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c1(z.a,34962,y)
J.cI(z.a,34962,b,35048)},
aT:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
Z:function(a,b,c){var z,y,x,w,v
z=J.cF(a,0)===105
if(z&&this.z===0)this.z=C.d.cn(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c3(x.a))
this.aR(a,b,c)
w=$.a6().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bB(x.a,this.e)
x.bE(0,v,z?1:0)
x.c4(0,y.h(0,a),v,w.aU(),5126,!1,0,0)},
aQ:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c3(y.a))
this.ch=a
this.aR("aPosition",a,3)
x=$.a6().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bB(y.a,this.e)
y.bE(0,w,0)
y.c4(0,z.h(0,"aPosition"),w,x.aU(),5126,!1,0,0)},
j:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.am(z,[H.p(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.W(y,"  ")},
p:{
dl:function(a,b,c,d){var z=P.d
return new G.ho(b,J.eT(b.a),c,P.a_(z,P.b),d,0,-1,P.a_(z,P.ae),"meshdata:"+a,!1,!0)}}},
hG:{"^":"b1;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cr:function(a,b){var z
if(typeof a!=="number")return a.dR()
if(typeof b!=="number")return H.aA(b)
z=a/b
if(this.z===z)return
this.z=z
this.aW()},
aW:function(){var z,y,x,w,v,u
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
aV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.x(new Float32Array(3))
u.N(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.I(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.A(t)
x=!!y.$isax
q=x?t.gc6(t):1
if(!!y.$isx){p=t.gX(t)
s=t.gR(t)
r=t.gab(t)
t=p}else if(x){p=t.gX(t)
s=t.gR(t)
r=t.gab(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.aA(t)
x=z[4]
if(typeof s!=="number")return H.aA(s)
w=z[8]
if(typeof r!=="number")return H.aA(r)
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
c.I(this.db)
c.bG(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
bj:{"^":"b;a,b,c,d,e",
j:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
hW:{"^":"aW;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cA:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cK(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cK(w.a,v,t))}},
cD:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.d])
x=H.m([],[P.d])
for(y=new H.am(y,[H.p(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.a9(0,w))C.a.l(x,w)}for(z=this.x,z=P.j9(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(b,"$isI",[P.d,P.b],"$asI")
z=Date.now()
for(y=new H.am(b,[H.p(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cF(s,0)){case 117:if(w.a9(0,s)){r=b.h(0,s)
if(v.a9(0,s))H.c0("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a6().h(0,s)
if(q==null)H.Y("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.L(r)
J.c7(x.a,p,r)}else if(!!J.A(r).$ish5)J.fi(x.a,p,r)
break
case"float":if(q.c===0){H.ea(r)
J.fg(x.a,p,r)}else if(!!J.A(r).$isae)J.fh(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ah(r,"$isa1").a
J.cR(x.a,p,!1,s)}else if(!!J.A(r).$isae)J.cR(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ah(r,"$isbq").a
J.cQ(x.a,p,!1,s)}else if(!!J.A(r).$isae)J.cQ(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cP(o,p,H.ah(r,"$isax").a)
else J.cP(o,p,H.h(r,"$isae"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cO(o,p,H.ah(r,"$isx").a)
else J.cO(o,p,H.h(r,"$isae"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cN(o,p,H.ah(r,"$isV").a)
else J.cN(o,p,H.h(r,"$isae"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aA(s)
J.cG(x.a,33984+s)
s=H.ah(r,"$iscp").b
J.bf(x.a,3553,s)
s=this.ch
J.c7(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aA(s)
J.cG(x.a,33984+s)
s=H.ah(r,"$iscp").b
J.bf(x.a,34067,s)
s=this.ch
J.c7(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
default:H.c0("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aD(r,!0)
o=x.a
if(s)J.bC(o,2929)
else J.c4(o,2929)
break
case"cStencilFunc":H.ah(r,"$isdB")
s=r.a
o=x.a
if(s===1281)J.c4(o,2960)
else{J.bC(o,2960)
o=r.b
n=r.c
J.fc(x.a,s,o,n)}break
case"cDepthWrite":H.bU(r)
J.eU(x.a,r)
break
case"cBlendEquation":H.ah(r,"$isdz")
s=r.a
o=x.a
if(s===1281)J.c4(o,3042)
else{J.bC(o,3042)
o=r.b
n=r.c
J.eN(x.a,o,n)
J.eM(x.a,s)}break}++t
break}}m=P.d2(0,0,0,Date.now()-new P.bh(z,!1).a,0,0)
""+t
m.j(0)},
ct:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
H.v(b,"$isa",[G.b1],"$asa")
H.v(c,"$isa",[G.bj],"$asa")
z=Date.now()
y=this.d
J.fj(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.b0()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.N)(b),++w){v=b[w]
this.cF(v.a,v.aV())}x=this.Q
x.a0(0)
for(u=a.cy,u=new H.am(u,[H.p(u,0)]),u=u.gw(u);u.t();)x.l(0,u.d)
t=this.cD()
if(t.length!==0)P.aB("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(t)))
J.bB(a.d.a,a.e)
s=this.e.f.length>0
x=a.f
u=a.aT()
r=a.Q
q=a.z
if(s)J.eK(y.a,x)
if(r!==-1){p=y.a
if(q>1)J.eY(p,x,u,r,0,q)
else J.eX(p,x,u,r,0)}else{r=y.a
if(q>1)J.eW(r,x,0,u,q)
else J.eV(r,x,0,u)}if(s)J.f0(y.a)
C.a.l(c,new G.bj(this.a,a.z,a.aT(),x,P.d2(0,0,0,Date.now()-new P.bh(z,!1).a,0,0)))},
p:{
ds:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.v(c.f,"$isa",[z],"$asa")
u=J.eR(b.a)
t=G.dK(b.a,35633,x)
J.cH(b.a,u,t)
s=G.dK(b.a,35632,w)
J.cH(b.a,u,s)
if(v.length>0)J.ff(b.a,u,v,35980)
J.fa(b.a,u)
if(!H.bU(J.f9(b.a,u,35714)))H.Y(J.f8(b.a,u))
z=new G.hW(b,c,d,u,P.ci(c.c,z),P.a_(z,P.b),P.a_(z,z),y,a,!1,!0)
z.cA(a,b,c,d)
return z}}},
B:{"^":"b;a,b,c",
aU:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i2:{"^":"b;a,0b,c,d,e,f,r,x",
aP:function(a){var z,y,x,w
H.v(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.aM(z)},
ae:function(a){var z,y,x
H.v(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.aM(y)},
cB:function(a,b){this.b=this.cG(!0,H.v(a,"$isa",[P.d],"$asa"),b)},
a4:function(a){return this.cB(a,null)},
cG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.v(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){t=y[u]
s=$.a6().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.l(z,u)
q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a6().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.G(w,b)
C.a.l(w,"}")
return C.a.W(w,"\n")},
p:{
bM:function(a){var z,y
z=P.d
y=[z]
return new G.i2(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.a_(z,P.C))}}},
du:{"^":"aW;"},
ih:{"^":"b;a,b,c,d,e,f,r"},
cp:{"^":"b;",
j:function(a){return"Texture["+this.a+", "+this.c+"]"}},
h3:{"^":"cp;f,a,b,c,d,e"}}],["","",,R,{"^":"",
iq:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.eC().dD()
if(v>=w)return H.l(x,v)
x[v]=(u-0.5)*c}y=G.dl(z,a.d,0,a.e.x)
y.aQ(x)
return y},
jb:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.iM("span",null),"$isP")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).ag(y,"float")
y.setProperty(x,"left","")
x=C.z.ag(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.E(z,v)}return z},
hV:{"^":"hU;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dI:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aB("size change "+H.e(y)+" "+H.e(x))
this.dx.cr(y,x)
this.z=y
this.Q=x},"$1","gdH",4,0,24]},
i7:{"^":"b;",
cC:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.c("no element provided")
y=z.style
y.color=b
y.fontFamily="Helvetica,Arial,sans-serif"
y.fontSize="9px"
y.lineHeight="15px"
y.padding="0 0 3px 3px"
y.textAlign="left"
y.background=c
y=J.i(z)
y.E(z,this.b)
y.E(z,this.d)
y.E(z,this.c)}},
i8:{"^":"i7;e,f,a,b,c,d",
cE:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.dO(y,2)+" fps"
C.r.cb(this.c,b)
x=C.d.U(30*C.A.dg(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isP")
v=w.style
u=""+x+"px"
v.height=u
C.r.E(z,w)}}}],["","",,A,{"^":"",
eb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isa",[G.bj],"$asa")
H.v(e,"$isa",[G.b1],"$asa")
z=b.dx
z.I(c)
y=b.d
z.bG(0,y)
x=b.cx
H.e(b)
w=C.a.gdB(e)
v=b.db
u=new Float32Array(9)
t=z.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[4]
u[4]=t[5]
u[5]=t[6]
u[6]=t[8]
u[7]=t[9]
u[8]=t[10]
v.dj(new T.bq(u))
u=v.a
s=u[3]
u[3]=u[1]
u[1]=s
s=u[6]
u[6]=u[2]
u[2]=s
s=u[7]
u[7]=u[5]
u[5]=s
w=w.d
w.i(0,"uTransformationMatrix",y)
w.i(0,"uModelMatrix",z)
w.i(0,"uNormalMatrix",v)
C.a.l(e,b.ch)
a.ct(x,e,d)
if(0>=e.length)return H.l(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.l(y,r)
A.eb(a,y[r],z,d,e)}},
ck:{"^":"du;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
j:function(a){return"NODE["+this.a+"]"}},
cl:{"^":"aW;d,e,f,a,b,c"},
hU:{"^":"aW;",
cz:function(a,b,c){if(this.d==null)this.d=new G.fY(this.e,null,null,null,null)},
cs:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
H.v(a,"$isa",[G.bj],"$asa")
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eL(v.a,36160,z)
J.fm(v.a,this.x,this.y,x,w)
if(y!==0)J.eO(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.b1(P.a_(x,w),"transforms",!1,!0))
r=new T.a1(new Float32Array(16))
r.M()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.N)(v),++o)A.eb(p,v[o],r,a,s)
if(0>=s.length)return H.l(s,-1)
s.pop()}}}}],["","",,V,{}],["","",,D,{"^":"",hc:{"^":"b;a,b,c",
cv:function(a){var z,y
a=document
z=W.aU
y={func:1,ret:-1,args:[z]}
W.ay(a,"keydown",H.k(new D.he(this),y),!1,z)
W.ay(a,"keyup",H.k(new D.hf(this),y),!1,z)},
p:{
hd:function(a){var z=P.C
z=new D.hc(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.cv(a)
return z}}},he:{"^":"n:11;a",
$1:function(a){var z
H.h(a,"$isaU")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},hf:{"^":"n:11;a",
$1:function(a){var z
H.h(a,"$isaU")
z=this.a
z.a.bN(0,a.which)
z.c.l(0,a.which)}},hr:{"^":"b;a,b,c,d,e,f,r,x",
cw:function(a){var z,y,x
if(a==null)a=document
z=J.i(a)
y=z.gbJ(a)
x=H.p(y,0)
W.ay(y.a,y.b,H.k(new D.ht(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbI(a)
y=H.p(x,0)
W.ay(x.a,x.b,H.k(new D.hu(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbK(a)
x=H.p(y,0)
W.ay(y.a,y.b,H.k(new D.hv(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbL(a)
x=H.p(z,0)
W.ay(z.a,z.b,H.k(new D.hw(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hs:function(a){var z=P.C
z=new D.hr(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cw(a)
return z}}},ht:{"^":"n:3;a",
$1:function(a){var z,y
H.h(a,"$isR")
a.preventDefault()
z=this.a
y=J.i(a)
z.r=H.L(y.gbH(a).a)
z.x=H.L(y.gbH(a).b)
z.d=a.movementX
z.e=a.movementY}},hu:{"^":"n:3;a",
$1:function(a){var z
H.h(a,"$isR")
a.preventDefault()
P.aB("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hv:{"^":"n:3;a",
$1:function(a){var z
H.h(a,"$isR")
a.preventDefault()
z=this.a
z.a.bN(0,a.button)
z.c.l(0,a.button)}},hw:{"^":"n:25;a",
$1:function(a){H.h(a,"$isaH")
a.preventDefault()
this.a.f=H.L(C.ae.gdq(a))}},hE:{"^":"fu;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bw:function(a){var z,y
z=C.i.dv(H.v(a,"$isj",[P.b],"$asj"),0,new A.kk(),P.C)
if(typeof z!=="number")return H.aA(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kk:{"^":"n:26;",
$2:function(a,b){var z,y
H.L(a)
z=J.ai(b)
if(typeof a!=="number")return a.F()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",bq:{"^":"b;a",
I:function(a){var z,y
z=a.a
y=this.a
y[8]=z[8]
y[7]=z[7]
y[6]=z[6]
y[5]=z[5]
y[4]=z[4]
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
j:function(a){return"[0] "+this.L(0).j(0)+"\n[1] "+this.L(1).j(0)+"\n[2] "+this.L(2).j(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.l(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bq){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.bw(this.a)},
L:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.l(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.l(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.l(y,x)
z[2]=y[x]
return new T.x(z)},
dj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.a
y=z[0]
x=z[4]
w=z[8]
v=z[5]
u=z[7]
t=x*w-v*u
s=z[1]
r=z[3]
q=r*w
p=z[6]
o=v*p
z=z[2]
n=r*u-x*p
m=y*t-s*(q-o)+z*n
if(m===0){this.I(a)
return 0}l=1/m
k=this.a
k[0]=l*t
k[1]=l*(z*u-s*w)
k[2]=l*(s*v-z*x)
k[3]=l*(o-q)
k[4]=l*(y*w-z*p)
k[5]=l*(z*r-y*v)
k[6]=l*n
k[7]=l*(s*p-y*u)
k[8]=l*(y*x-s*r)
return m}},a1:{"^":"b;a",
I:function(a){var z,y
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
j:function(a){return"[0] "+this.L(0).j(0)+"\n[1] "+this.L(1).j(0)+"\n[2] "+this.L(2).j(0)+"\n[3] "+this.L(3).j(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.l(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bw(this.a)},
L:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.l(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.l(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.l(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.l(y,x)
z[3]=y[x]
return new T.ax(z)},
M:function(){var z=this.a
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
bG:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},V:{"^":"b;a",
a2:function(a,b){var z=this.a
z[0]=a
z[1]=b},
j:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.V){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bw(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.l(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gX:function(a){return this.a[0]},
gR:function(a){return this.a[1]}},x:{"^":"b;a",
N:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
I:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
j:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.x){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bw(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.l(z,b)
return z[b]},
gk:function(a){return Math.sqrt(this.gaw())},
gaw:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
ax:function(a){var z,y,x
z=Math.sqrt(this.gaw())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
au:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bx:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.x(new Float32Array(3))
z.N(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gX:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
gab:function(a){return this.a[2]}},ax:{"^":"b;a",
j:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ax){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bw(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.l(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gX:function(a){return this.a[0]},
gR:function(a){return this.a[1]},
gab:function(a){return this.a[2]},
gc6:function(a){return this.a[3]}}}],["","",,Y,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z={}
y=document
x=C.t.c9(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.i8(0,0,x,w,y.createElement("div"),R.jb("blue","gray",90,30))
u.cC(x,"blue","gray")
t=H.h(C.t.dF(y,"#webgl-canvas"),"$isca")
s=new G.fx(t)
x=P.d
v=P.b
r=(t&&C.y).aB(t,"webgl2",P.dg(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!0,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.Y(P.d7('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.f6(r))
if($.ec>0)P.aB("I: "+q)
J.eP(r,0,0,0,1)
J.bC(r,2929)
r=new Float32Array(3)
q=D.hd(null)
p=D.hs(t)
o=new T.a1(new Float32Array(16))
o.M()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hE(25,10,0,0,new T.x(r),-0.02,q,p,o,new T.x(n),new T.x(m),new T.x(l),new T.x(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.a1(new Float32Array(16))
r.M()
q=new T.a1(new Float32Array(16))
q.M()
j=new G.hG(k,50,1,0.1,1000,r,q,new T.a1(new Float32Array(16)),P.a_(x,v),"perspective",!1,!0)
j.aW()
v=H.m([],[A.cl])
i=new R.hV(t,j,null,s,v,17664,0,0,0,0,"main",!1,!0)
i.cz("main",s,null)
i.dI(null)
r=W.Z
W.ay(window,"resize",H.k(i.gdH(),{func:1,ret:-1,args:[r]}),!1,r)
r=i.r|=256
i.r=r&4294950911
r=G.ds("blur",s,$.eE(),$.eF())
q=[G.b1]
p=H.m([j],q)
o=[A.ck]
n=H.m([],o)
C.a.l(v,new A.cl(r,p,n,"blur",!1,!0))
h=G.dk("blur",$.eo())
p=new Float32Array(4)
p[3]=0.04
p[2]=0
p[1]=0
p[0]=0
h.d.i(0,"uColorAlpha",new T.ax(p))
p=new T.x(new Float32Array(3))
p.N(-1,-1,0)
m=new T.x(new Float32Array(3))
m.N(1,-1,0)
l=new T.x(new Float32Array(3))
l.N(1,1,0)
g=new T.x(new Float32Array(3))
g.N(-1,1,0)
f=[T.x]
e=H.m([p,m,l,g],f)
p=new T.V(new Float32Array(2))
p.a2(0,0)
m=new T.V(new Float32Array(2))
m.a2(1,0)
l=new T.V(new Float32Array(2))
l.a2(1,1)
g=new T.V(new Float32Array(2))
g.a2(0,1)
d=H.m([p,m,l,g],[T.V])
c=new T.x(new Float32Array(3))
c.N(0,0,1)
b=H.m([c,c,c,c],f)
p=H.m([],[G.fU])
m=H.m([],[G.d8])
f=H.m([],f)
a=new G.h_(!1,p,m,f,P.a_(x,[P.a,,]))
a.aS("aTexUV")
a.cq(e)
a.co("aTexUV",d)
a.aS("aNormal")
a.cp("aNormal",b)
a0=G.dl("quad",r.d,4,r.e.x)
a0.aQ(G.da(f,null))
x=H.v(a.cu(),"$isa",[P.C],"$asa")
r=a0.d
a0.y=J.c3(r.a)
p=a0.ch.length
if(p<768){a0.sal(new Uint8Array(H.bQ(x)))
a0.Q=5121}else if(p<196608){a0.sal(new Uint16Array(H.bQ(x)))
a0.Q=5123}else{a0.sal(new Uint32Array(H.bQ(x)))
a0.Q=5125}J.bB(r.a,a0.e)
x=a0.y
p=a0.cx
J.c1(r.a,34963,x)
J.cI(r.a,34963,p,35048)
G.j1(a,a0)
x=H.m([],o)
r=new Float32Array(9)
p=new T.a1(new Float32Array(16))
p.M()
m=new T.a1(new Float32Array(16))
m.M()
l=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
C.a.l(n,new A.ck(h,a0,x,new T.bq(r),p,m,new T.x(l),new T.x(g),new T.x(f),new T.x(new Float32Array(3)),"",!1,!0))
x=G.ds("stars",s,$.eH(),$.eG())
q=H.m([j],q)
r=H.m([],o)
p=x.d
a1=G.dk("stars",$.en())
a2=y.createElement("canvas")
a2.width=64
a2.height=64
a3=H.h(C.y.c8(a2,"2d"),"$iscb")
a4=(a3&&C.q).bu(a3,32,32,1,32,32,22);(a4&&C.m).a8(a4,0,"gray")
C.m.a8(a4,1,"black")
a3.fillStyle=a4
C.q.du(a3,0,0,64,64)
a4=C.q.bu(a3,32,32,1,32,32,6);(a4&&C.m).a8(a4,0,"white")
C.m.a8(a4,1,"gray")
a3.globalAlpha=0.9
a3.fillStyle=a4
a3.arc(32,32,4,0,6.283185307179586,!1)
a3.fill()
y=J.eS(p.a)
J.bf(p.a,3553,y)
J.fb(p.a,37440,1)
J.bf(p.a,3553,y)
J.fd(p.a,3553,0,6408,6408,5121,a2)
J.cM(p.a,3553,10240,9729)
J.cM(p.a,3553,10241,9729)
J.f7(p.a)
J.bf(p.a,3553,null)
n=a1.d
n.i(0,"uTexture",new G.h3(a2,"Utils::Particles",y,3553,p,new G.ih(!1,!1,!1,!0,1,9729,9729)))
n.i(0,"uPointSize",1000)
a0=R.iq(x,2000,100)
o=H.m([],o)
y=new Float32Array(9)
p=new T.a1(new Float32Array(16))
p.M()
n=new T.a1(new Float32Array(16))
n.M()
m=new Float32Array(3)
l=new Float32Array(3)
g=new Float32Array(3)
C.a.l(r,new A.ck(a1,a0,o,new T.bq(y),p,n,new T.x(m),new T.x(l),new T.x(g),new T.x(new Float32Array(3)),a0.a,!1,!0))
C.a.l(v,new A.cl(x,q,r,"stars",!1,!0))
z.a=0
new Y.kx(z,k,i,u).$1(0)},
kx:{"^":"n:27;a,b,c,d",
$1:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
H.cA(b5)
if(typeof b5!=="number")return b5.aO()
z=this.a
z.a=b5+0
y=this.b
y.go+=0.005
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aJ()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aJ()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.u(0,37))y.go+=0.03
else if(v.u(0,39))y.go-=0.03
if(v.u(0,38))y.id+=0.03
else if(v.u(0,40))y.id-=0.03
if(v.u(0,33))y.fy*=0.99
else if(v.u(0,34))y.fy*=1.01
if(v.u(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aJ()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.u.dh(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=y.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=y.k2.a
q[12]=q[12]+t[0]
q[13]=q[13]+t[1]
q[14]=q[14]+t[2]
p=q[12]
o=q[13]
n=q[14]
m=new T.x(new Float32Array(3))
m.N(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
u=new Float32Array(3)
l=new T.x(u)
l.I(v)
u[0]=u[0]-t[0]
u[1]=u[1]-t[1]
u[2]=u[2]-t[2]
l.ax(0)
k=m.bx(l)
k.ax(0)
j=l.bx(k)
j.ax(0)
t=k.au(v)
r=j.au(v)
v=l.au(v)
i=k.a
h=i[0]
g=j.a
f=g[0]
e=u[0]
d=i[1]
c=g[1]
b=u[1]
i=i[2]
g=g[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=g
q[8]=i
q[7]=0
q[6]=b
q[5]=c
q[4]=d
q[3]=0
q[2]=e
q[1]=f
q[0]=h
q[12]=p
q[13]=o
q[14]=n
h=y.f
f=h.a
f[0]=q[2]
f[1]=q[6]
f[2]=q[10]
y=-y.k1
a=Math.sqrt(h.gaw())
p=f[0]/a
o=f[1]/a
n=f[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=p*p*a2+a0
y=n*a1
a4=p*o*a2-y
f=o*a1
a5=p*n*a2+f
a6=o*p*a2+y
a7=o*o*a2+a0
y=p*a1
a8=o*n*a2-y
a9=n*p*a2-f
b0=n*o*a2+y
b1=n*n*a2+a0
y=q[0]
f=q[4]
h=q[8]
e=q[1]
d=q[5]
c=q[9]
b=q[2]
i=q[6]
g=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a3+f*a6+h*a9
q[1]=e*a3+d*a6+c*a9
q[2]=b*a3+i*a6+g*a9
q[3]=u*a3+t*a6+r*a9
q[4]=y*a4+f*a7+h*b0
q[5]=e*a4+d*a7+c*b0
q[6]=b*a4+i*a7+g*b0
q[7]=u*a4+t*a7+r*b0
q[8]=y*a5+f*a8+h*b1
q[9]=e*a5+d*a8+c*b1
q[10]=b*a5+i*a8+g*b1
q[11]=u*a5+t*a8+r*b1
w.c.a0(0)
w.b.a0(0)
x.e=0
x.d=0
x.f=0
x.c.a0(0)
x.b.a0(0)
b2=H.m([],[G.bj])
this.c.cs(b2)
b3=H.m([],[P.d])
for(y=b2.length,b4=0;b4<b2.length;b2.length===y||(0,H.N)(b2),++b4)C.a.l(b3,b2[b4].j(0))
C.af.gd9(window).bR(this,-1)
this.d.cE(z.a,C.a.W(b3,"<br>"))}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dd.prototype
return J.dc.prototype}if(typeof a=="string")return J.bo.prototype
if(a==null)return J.ha.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.ba=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.ed=function(a){if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.kg=function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b2.prototype
return a}
J.kh=function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b2.prototype
return a}
J.ee=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b2.prototype
return a}
J.i=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.bX=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b2.prototype
return a}
J.aD=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.a7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kg(a).S(a,b)}
J.be=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ku(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ba(a).h(a,b)}
J.cF=function(a,b){return J.ee(a).ah(a,b)}
J.bA=function(a,b){return J.i(a).cY(a,b)}
J.eI=function(a,b,c){return J.i(a).cZ(a,b,c)}
J.cG=function(a,b){return J.i(a).bf(a,b)}
J.eJ=function(a,b,c,d){return J.i(a).d6(a,b,c,d)}
J.cH=function(a,b,c){return J.i(a).bh(a,b,c)}
J.eK=function(a,b){return J.i(a).dc(a,b)}
J.c1=function(a,b,c){return J.i(a).bi(a,b,c)}
J.eL=function(a,b,c){return J.i(a).bk(a,b,c)}
J.bf=function(a,b,c){return J.i(a).bl(a,b,c)}
J.bB=function(a,b){return J.i(a).df(a,b)}
J.eM=function(a,b){return J.i(a).bm(a,b)}
J.eN=function(a,b,c){return J.i(a).bn(a,b,c)}
J.cI=function(a,b,c,d){return J.i(a).bo(a,b,c,d)}
J.eO=function(a,b){return J.i(a).bp(a,b)}
J.eP=function(a,b,c,d,e){return J.i(a).bq(a,b,c,d,e)}
J.eQ=function(a,b){return J.kh(a).J(a,b)}
J.c2=function(a,b,c){return J.ba(a).di(a,b,c)}
J.c3=function(a){return J.i(a).bs(a)}
J.eR=function(a){return J.i(a).bt(a)}
J.eS=function(a){return J.i(a).bw(a)}
J.eT=function(a){return J.i(a).dn(a)}
J.eU=function(a,b){return J.i(a).by(a,b)}
J.c4=function(a,b){return J.i(a).bz(a,b)}
J.eV=function(a,b,c,d){return J.i(a).bA(a,b,c,d)}
J.eW=function(a,b,c,d,e){return J.i(a).dr(a,b,c,d,e)}
J.eX=function(a,b,c,d,e){return J.i(a).bB(a,b,c,d,e)}
J.eY=function(a,b,c,d,e,f){return J.i(a).ds(a,b,c,d,e,f)}
J.eZ=function(a,b){return J.ed(a).q(a,b)}
J.bC=function(a,b){return J.i(a).bC(a,b)}
J.f_=function(a,b){return J.i(a).bD(a,b)}
J.f0=function(a){return J.i(a).dt(a)}
J.f1=function(a,b){return J.i(a).C(a,b)}
J.f2=function(a){return J.i(a).gda(a)}
J.ai=function(a){return J.A(a).gv(a)}
J.bD=function(a){return J.ed(a).gw(a)}
J.aO=function(a){return J.ba(a).gk(a)}
J.f3=function(a){return J.i(a).gdE(a)}
J.f4=function(a){return J.i(a).gdM(a)}
J.f5=function(a){return J.bX(a).gc6(a)}
J.bE=function(a){return J.bX(a).gX(a)}
J.c5=function(a){return J.bX(a).gR(a)}
J.cJ=function(a){return J.bX(a).gab(a)}
J.c6=function(a,b){return J.i(a).Y(a,b)}
J.f6=function(a){return J.i(a).ac(a)}
J.f7=function(a){return J.i(a).aC(a)}
J.f8=function(a,b){return J.i(a).aD(a,b)}
J.f9=function(a,b,c){return J.i(a).aE(a,b,c)}
J.cK=function(a,b,c){return J.i(a).aI(a,b,c)}
J.fa=function(a,b){return J.i(a).bF(a,b)}
J.fb=function(a,b,c){return J.i(a).bM(a,b,c)}
J.cL=function(a){return J.i(a).dG(a)}
J.fc=function(a,b,c,d){return J.i(a).aN(a,b,c,d)}
J.fd=function(a,b,c,d,e,f,g){return J.i(a).bP(a,b,c,d,e,f,g)}
J.cM=function(a,b,c,d){return J.i(a).bQ(a,b,c,d)}
J.fe=function(a){return J.ee(a).dN(a)}
J.bg=function(a){return J.A(a).j(a)}
J.ff=function(a,b,c,d){return J.i(a).dP(a,b,c,d)}
J.fg=function(a,b,c){return J.i(a).bU(a,b,c)}
J.fh=function(a,b,c){return J.i(a).bV(a,b,c)}
J.c7=function(a,b,c){return J.i(a).bW(a,b,c)}
J.fi=function(a,b,c){return J.i(a).bX(a,b,c)}
J.cN=function(a,b,c){return J.i(a).bY(a,b,c)}
J.cO=function(a,b,c){return J.i(a).bZ(a,b,c)}
J.cP=function(a,b,c){return J.i(a).c_(a,b,c)}
J.cQ=function(a,b,c,d){return J.i(a).c0(a,b,c,d)}
J.cR=function(a,b,c,d){return J.i(a).c1(a,b,c,d)}
J.fj=function(a,b){return J.i(a).c2(a,b)}
J.fk=function(a,b,c){return J.i(a).dQ(a,b,c)}
J.fl=function(a,b,c,d,e,f,g){return J.i(a).c3(a,b,c,d,e,f,g)}
J.fm=function(a,b,c,d,e){return J.i(a).c5(a,b,c,d,e)}
I.aM=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bF.prototype
C.y=W.ca.prototype
C.m=W.fv.prototype
C.q=W.cb.prototype
C.z=W.fE.prototype
C.r=W.fL.prototype
C.L=W.fN.prototype
C.M=W.h1.prototype
C.t=W.h2.prototype
C.N=J.f.prototype
C.a=J.bm.prototype
C.A=J.dc.prototype
C.d=J.dd.prototype
C.u=J.bn.prototype
C.h=J.bo.prototype
C.U=J.bp.prototype
C.i=H.hx.prototype
C.n=H.hz.prototype
C.Y=W.hA.prototype
C.D=J.hH.prototype
C.E=W.hR.prototype
C.J=W.ie.prototype
C.x=J.b2.prototype
C.ae=W.aH.prototype
C.af=W.it.prototype
C.K=new P.j5()
C.e=new P.jn()
C.O=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.P=function(hooks) {
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
C.B=function(hooks) { return hooks; }

C.Q=function(getTagFallback) {
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
C.R=function() {
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
C.S=function(hooks) {
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
C.T=function(hooks) {
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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.m(I.aM(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.W=H.m(I.aM(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.X=H.m(I.aM([]),[P.d])
C.v=H.m(I.aM(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.m(I.aM(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Z=new G.B("vec3","vertex btangents",0)
C.c=new G.B("vec3","",0)
C.a_=new G.B("vec4","delta from light",0)
C.o=new G.B("","",0)
C.F=new G.B("vec3","vertex coordinates",0)
C.a0=new G.B("vec3","vertex binormals",0)
C.G=new G.B("vec4","for wireframe",0)
C.a1=new G.B("vec4","per vertex color",0)
C.a2=new G.B("float","for normal maps",0)
C.j=new G.B("mat4","",0)
C.a4=new G.B("mat4","",4)
C.a3=new G.B("mat4","",128)
C.b=new G.B("float","",0)
C.a5=new G.B("float","",4)
C.a6=new G.B("float","depth for shadowmaps",0)
C.f=new G.B("sampler2D","",0)
C.a7=new G.B("float","for bump maps",0)
C.a8=new G.B("vec2","texture uvs",0)
C.a9=new G.B("float","time since program start in sec",0)
C.k=new G.B("vec2","",0)
C.aa=new G.B("samplerCube","",0)
C.l=new G.B("vec4","",0)
C.ab=new G.B("vec3","vertex normals",0)
C.ac=new G.B("sampler2DShadow","",0)
C.H=new G.B("vec3","per vertex color",0)
C.I=new G.B("mat3","",0)
C.ad=new G.B("vec3","vertex tangents",0)
$.a8=0
$.aP=null
$.cU=null
$.cr=!1
$.eg=null
$.e7=null
$.el=null
$.bV=null
$.bZ=null
$.cy=null
$.aJ=null
$.b4=null
$.b5=null
$.cs=!1
$.H=C.e
$.ad=null
$.cd=null
$.d5=null
$.d4=null
$.d0=null
$.d_=null
$.cZ=null
$.cY=null
$.ec=0
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
I.$lazy(y,x,w)}})(["kR","eq",function(){return H.ef("_$dart_dartClosure")},"lt","cC",function(){return H.ef("_$dart_js")},"md","es",function(){return H.aa(H.bN({
toString:function(){return"$receiver$"}}))},"me","et",function(){return H.aa(H.bN({$method$:null,
toString:function(){return"$receiver$"}}))},"mf","eu",function(){return H.aa(H.bN(null))},"mg","ev",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mj","ey",function(){return H.aa(H.bN(void 0))},"mk","ez",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mi","ex",function(){return H.aa(H.dC(null))},"mh","ew",function(){return H.aa(function(){try{null.$method$}catch(z){return z.message}}())},"mm","eB",function(){return H.aa(H.dC(void 0))},"ml","eA",function(){return H.aa(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mx","cD",function(){return P.iw()},"mN","bd",function(){return[]},"kO","ep",function(){return{}},"mE","eD",function(){return P.ci(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mF","cE",function(){return P.a_(P.d,P.bk)},"m0","er",function(){return new G.dB(1281,0,4294967295)},"kL","eo",function(){return G.dA(32774,770,771)},"kK","en",function(){return G.dA(32774,770,769)},"mL","a6",function(){return P.dg(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.aa,"uAnimationTable",C.f,"uTime",C.a9,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.b,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.B)},"mr","eC",function(){return C.K},"mU","eH",function(){var z,y
z=G.bM("PointSpritesV")
y=[P.d]
z.aP(H.m(["aPosition"],y))
z.ae(H.m(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.a4(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"mT","eG",function(){var z,y
z=G.bM("PointSpritesF")
y=[P.d]
z.ae(H.m(["uTexture"],y))
z.a4(H.m(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"mO","eE",function(){var z,y
z=G.bM("bluredV")
y=[P.d]
z.aP(H.m(["aPosition"],y))
z.a4(H.m(["gl_Position = vec4(aPosition, 1.0);"],y))
return z},"mP","eF",function(){var z,y
z=G.bM("bluredF")
y=[P.d]
z.ae(H.m(["uColorAlpha"],y))
z.a4(H.m(["oFragColor = uColorAlpha;"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.R]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.C]},{func:1,ret:P.O,args:[W.a9]},{func:1,ret:P.O,args:[P.d]},{func:1,ret:P.F,args:[W.aU]},{func:1,ret:P.O,args:[W.P,P.d,P.d,W.bt]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a2]},{func:1,ret:[P.ab,,],args:[,]},{func:1,ret:P.O,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.Z]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:-1,args:[W.Z]},{func:1,ret:P.F,args:[W.aH]},{func:1,ret:P.C,args:[P.C,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.kD(d||a)
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
Isolate.aM=a.aM
Isolate.b9=a.b9
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
if(typeof dartMainRunner==="function")dartMainRunner(Y.ei,[])
else Y.ei([])})})()
//# sourceMappingURL=tracers.dart.js.map
