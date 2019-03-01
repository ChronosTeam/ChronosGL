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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ish)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cy(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bd=function(){}
var dart=[["","",,H,{"^":"",lM:{"^":"b;a"}}],["","",,J,{"^":"",
cD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c0:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cB==null){H.kD()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cs("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cF()]
if(v!=null)return v
v=H.kI(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.cF(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.b6(a)},
k:["cc",function(a){return"Instance of '"+H.b7(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h6:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isR:1},
dh:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isz:1},
cl:{"^":"h;",
gv:function(a){return 0},
k:["ce",function(a){return String(a)}]},
hJ:{"^":"cl;"},
b9:{"^":"cl;"},
bp:{"^":"cl;",
k:function(a){var z=a[$.eq()]
if(z==null)return this.ce(a)
return"JavaScript function for "+H.e(J.bi(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbk:1},
bm:{"^":"h;$ti",
l:function(a,b){H.y(b,H.o(a,0))
if(!!a.fixed$length)H.N(P.A("add"))
a.push(b)},
E:function(a,b){var z,y
H.v(b,"$isj",[H.o(a,0)],"$asj")
if(!!a.fixed$length)H.N(P.A("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.M)(b),++y)a.push(b[y])},
Z:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
bf:function(a,b){var z,y
H.k(b,{func:1,ret:P.R,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aK(a))}return!1},
c7:function(a,b){if(!!a.immutable$list)H.N(P.A("sort"))
H.i8(a,J.kb(),H.o(a,0))},
ae:function(a){return this.c7(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
k:function(a){return P.cj(a,"[","]")},
gw:function(a){return new J.fl(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.b6(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.aj(a,b))
return a[b]},
h:function(a,b,c){H.t(b)
H.y(c,H.o(a,0))
if(!!a.immutable$list)H.N(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aj(a,b))
if(b>=a.length||b<0)throw H.c(H.aj(a,b))
a[b]=c},
$isw:1,
$asw:I.bd,
$isj:1,
$isa:1,
p:{
h5:function(a,b){return J.ck(H.n(a,[b]))},
ck:function(a){H.bf(a)
a.fixed$length=Array
return a},
lK:[function(a,b){return J.eN(H.ej(a,"$isY"),H.ej(b,"$isY"))},"$2","kb",8,0,32]}},
lL:{"^":"bm;$ti"},
fl:{"^":"b;a,b,c,0d,$ti",
saT:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.M(z))
x=this.c
if(x>=y){this.saT(null)
return!1}this.saT(z[x]);++this.c
return!0},
$isb1:1},
bn:{"^":"h;",
J:function(a,b){var z
H.cE(b)
if(typeof b!=="number")throw H.c(H.aF(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.ga9(b)
if(this.ga9(a)===z)return 0
if(this.ga9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga9:function(a){return a===0?1/a<0:a<0},
bM:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.A(""+a+".toInt()"))},
de:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.A(""+a+".ceil()"))},
df:function(a,b,c){if(this.J(b,c)>0)throw H.c(H.aF(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
dN:function(a,b){var z
if(b>20)throw H.c(P.bM(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ga9(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cg:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bc(a,b)},
R:function(a,b){return(a|0)===a?a/b|0:this.bc(a,b)},
bc:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.A("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
ba:function(a,b){var z
if(a>0)z=this.d1(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d1:function(a,b){return b>31?0:a>>>b},
N:function(a,b){if(typeof b!=="number")throw H.c(H.aF(b))
return a>b},
$isY:1,
$asY:function(){return[P.F]},
$isak:1,
$isF:1},
dg:{"^":"bn;",$isD:1},
df:{"^":"bn;"},
bo:{"^":"h;",
bo:function(a,b){if(b<0)throw H.c(H.aj(a,b))
if(b>=a.length)H.N(H.aj(a,b))
return a.charCodeAt(b)},
W:function(a,b){if(b>=a.length)throw H.c(H.aj(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.r(b)
if(typeof b!=="string")throw H.c(P.cV(b,null,null))
return a+b},
c8:function(a,b){var z=H.n(a.split(b),[P.d])
return z},
ca:function(a,b,c){var z
if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c9:function(a,b){return this.ca(a,b,0)},
aK:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bN(b,null,null))
if(b>c)throw H.c(P.bN(b,null,null))
if(c>a.length)throw H.c(P.bN(c,null,null))
return a.substring(b,c)},
cb:function(a,b){return this.aK(a,b,null)},
dM:function(a){return a.toLowerCase()},
dP:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.W(z,0)===133){x=J.h7(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bo(z,w)===133?J.h8(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
di:function(a,b,c){if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
return H.kQ(a,b,c)},
J:function(a,b){var z
H.r(b)
if(typeof b!=="string")throw H.c(H.aF(b))
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
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.c(H.aj(a,b))
return a[b]},
$isw:1,
$asw:I.bd,
$isY:1,
$asY:function(){return[P.d]},
$isdt:1,
$isd:1,
p:{
di:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
h7:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.W(a,b)
if(y!==32&&y!==13&&!J.di(y))break;++b}return b},
h8:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bo(a,z)
if(y!==32&&y!==13&&!J.di(y))break}return b}}}}],["","",,H,{"^":"",
h3:function(){return new P.cq("No element")},
h4:function(){return new P.cq("Too many elements")},
i8:function(a,b,c){H.v(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.D,args:[c,c]})
H.br(a,0,J.aX(a)-1,b,c)},
br:function(a,b,c,d,e){H.v(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.i7(a,b,c,d,e)
else H.i6(a,b,c,d,e)},
i7:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.aT(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a9(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
i6:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.f.R(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.R(b+a0,2)
v=w-z
u=w+z
t=J.aT(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.a9(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a9(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a9(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a9(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a9(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a9(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a9(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a9(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a9(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.S(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a1()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.N()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
l=h
m=g
break}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.a1()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.N()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.N()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a1()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.h(a,b,t.i(a,c))
t.h(a,c,r)
c=l+1
t.h(a,a0,t.i(a,c))
t.h(a,c,p)
H.br(a,b,m-2,a1,a2)
H.br(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.S(a1.$2(t.i(a,m),r),0);)++m
for(;J.S(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a1()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.br(a,m,l,a1,a2)}else H.br(a,m,l,a1,a2)},
d6:{"^":"j;"},
bJ:{"^":"d6;$ti",
gw:function(a){return new H.dm(this,this.gj(this),0,[H.cA(this,"bJ",0)])},
ay:function(a,b){return this.cd(0,H.k(b,{func:1,ret:P.R,args:[H.cA(this,"bJ",0)]}))}},
dm:{"^":"b;a,b,c,0d,$ti",
saU:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aT(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aK(z))
w=this.c
if(w>=x){this.saU(null)
return!1}this.saU(y.q(z,w));++this.c
return!0},
$isb1:1},
hn:{"^":"bJ;a,b,$ti",
gj:function(a){return J.aX(this.a)},
q:function(a,b){return this.b.$1(J.eV(this.a,b))},
$asbJ:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dH:{"^":"j;a,b,$ti",
gw:function(a){return new H.iw(J.bD(this.a),this.b,this.$ti)}},
iw:{"^":"b1;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bI:{"^":"b;$ti"}}],["","",,H,{"^":"",
aJ:function(a){var z,y
z=H.r(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kv:function(a){return init.types[H.t(a)]},
kG:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bi(a)
if(typeof z!=="string")throw H.c(H.aF(a))
return z},
b6:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hT:function(a,b){var z,y
if(typeof a!=="string")H.N(H.aF(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.i(z,3)
y=H.r(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
hS:function(a){var z,y
if(typeof a!=="string")H.N(H.aF(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.fa(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
b7:function(a){return H.hK(a)+H.bU(H.al(a),0,null)},
hK:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isb9){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aJ(w.length>1&&C.h.W(w,0)===36?C.h.cb(w,1):w)},
W:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hR:function(a){return a.b?H.W(a).getUTCFullYear()+0:H.W(a).getFullYear()+0},
hP:function(a){return a.b?H.W(a).getUTCMonth()+1:H.W(a).getMonth()+1},
hL:function(a){return a.b?H.W(a).getUTCDate()+0:H.W(a).getDate()+0},
hM:function(a){return a.b?H.W(a).getUTCHours()+0:H.W(a).getHours()+0},
hO:function(a){return a.b?H.W(a).getUTCMinutes()+0:H.W(a).getMinutes()+0},
hQ:function(a){return a.b?H.W(a).getUTCSeconds()+0:H.W(a).getSeconds()+0},
hN:function(a){return a.b?H.W(a).getUTCMilliseconds()+0:H.W(a).getMilliseconds()+0},
bx:function(a){throw H.c(H.aF(a))},
i:function(a,b){if(a==null)J.aX(a)
throw H.c(H.aj(a,b))},
aj:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,"index",null)
z=H.t(J.aX(a))
if(!(b<0)){if(typeof z!=="number")return H.bx(z)
y=b>=z}else y=!0
if(y)return P.G(b,a,"index",null,z)
return P.bN(b,"index",null)},
aF:function(a){return new P.ap(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.bL()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.bi(this.dartException)},
N:function(a){throw H.c(a)},
M:function(a){throw H.c(P.aK(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.ba(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cn(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ds(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.es()
u=$.et()
t=$.eu()
s=$.ev()
r=$.ey()
q=$.ez()
p=$.ex()
$.ew()
o=$.eB()
n=$.eA()
m=v.I(y)
if(m!=null)return z.$1(H.cn(H.r(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.cn(H.r(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ds(H.r(y),m))}}return z.$1(new H.is(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dy()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ap(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dy()
return a},
aU:function(a){var z
if(a==null)return new H.dZ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dZ(a)},
kr:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
kF:function(a,b,c,d,e,f){H.f(a,"$isbk")
switch(H.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.da("Unsupported number of arguments for wrapped closure"))},
aG:function(a,b){var z
H.t(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kF)
a.$identity=z
return z},
fv:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hX(z).r}else x=d
w=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aa
if(typeof u!=="number")return u.G()
$.aa=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d_(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kv,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cY:H.cd
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d_(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fs:function(a,b,c,d){var z=H.cd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d_:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fu(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fs(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.G()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aY
if(v==null){v=H.bG("self")
$.aY=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.G()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aY
if(v==null){v=H.bG("self")
$.aY=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
ft:function(a,b,c,d){var z,y
z=H.cd
y=H.cY
switch(b?-1:a){case 0:throw H.c(H.i1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fu:function(a,b){var z,y,x,w,v,u,t,s
z=$.aY
if(z==null){z=H.bG("self")
$.aY=z}y=$.cX
if(y==null){y=H.bG("receiver")
$.cX=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ft(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.aa
if(typeof y!=="number")return y.G()
$.aa=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.aa
if(typeof y!=="number")return y.G()
$.aa=y+1
return new Function(z+y+"}")()},
cy:function(a,b,c,d,e,f,g){return H.fv(a,b,H.t(c),d,!!e,!!f,g)},
r:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a6(a,"String"))},
ed:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"double"))},
cE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"num"))},
bW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a6(a,"bool"))},
t:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a6(a,"int"))},
c4:function(a,b){throw H.c(H.a6(a,H.aJ(H.r(b).substring(3))))},
kO:function(a,b){throw H.c(H.cZ(a,H.aJ(H.r(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.c4(a,b)},
am:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kO(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.c4(a,b)},
nd:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.B(a)[b])return a
H.c4(a,b)},
bf:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a6(a,"List<dynamic>"))},
kH:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.c4(a,b)},
cz:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.t(z)]
else return a.$S()}return},
bw:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cz(J.B(a))
if(z==null)return!1
return H.e4(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cu)return a
$.cu=!0
try{if(H.bw(a,b))return a
z=H.by(b)
y=H.a6(a,z)
throw H.c(y)}finally{$.cu=!1}},
aS:function(a,b){if(a!=null&&!H.cx(a,b))H.N(H.a6(a,H.by(b)))
return a},
e8:function(a){var z,y
z=J.B(a)
if(!!z.$isl){y=H.cz(z)
if(y!=null)return H.by(y)
return"Closure"}return H.b7(a)},
kV:function(a){throw H.c(new P.fB(H.r(a)))},
ef:function(a){return init.getIsolateTag(a)},
n:function(a,b){a.$ti=b
return a},
al:function(a){if(a==null)return
return a.$ti},
nc:function(a,b,c){return H.aW(a["$as"+H.e(c)],H.al(b))},
be:function(a,b,c,d){var z
H.r(c)
H.t(d)
z=H.aW(a["$as"+H.e(c)],H.al(b))
return z==null?null:z[d]},
cA:function(a,b,c){var z
H.r(b)
H.t(c)
z=H.aW(a["$as"+H.e(b)],H.al(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.t(b)
z=H.al(a)
return z==null?null:z[b]},
by:function(a){return H.aE(a,null)},
aE:function(a,b){var z,y
H.v(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aJ(a[0].builtin$cls)+H.bU(a,1,b)
if(typeof a=="function")return H.aJ(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.t(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.e(b[y])}if('func' in a)return H.ka(a,b)
if('futureOr' in a)return"FutureOr<"+H.aE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ka:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.v(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.n([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.h.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aE(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aE(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aE(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aE(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kq(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.r(z[l])
n=n+m+H.aE(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bU:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cr("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aE(u,c)}return"<"+z.k(0)+">"},
ku:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isl){y=H.cz(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.al(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ai:function(a,b,c,d){var z,y
H.r(b)
H.bf(c)
H.r(d)
if(a==null)return!1
z=H.al(a)
y=J.B(a)
if(y[b]==null)return!1
return H.eb(H.aW(y[d],z),null,c,null)},
bz:function(a,b,c,d){H.r(b)
H.bf(c)
H.r(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.cZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aJ(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
v:function(a,b,c,d){H.r(b)
H.bf(c)
H.r(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.a6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aJ(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
eb:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
n7:function(a,b,c){return a.apply(b,H.aW(J.B(b)["$as"+H.e(c)],H.al(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.eh(z)}return!1},
cx:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bw(a,b)}z=J.B(a).constructor
y=H.al(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cx(a,b))throw H.c(H.a6(a,H.by(b)))
return a},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.e4(a,b,c,d)
if('func' in a)return c.builtin$cls==="bk"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"Z" in y.prototype))return!1
w=y.prototype["$as"+"Z"]
v=H.aW(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eb(H.aW(r,z),b,u,d)},
e4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a1(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a1(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a1(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a1(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kN(m,b,l,d)},
kN:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
n8:function(a,b,c){Object.defineProperty(a,H.r(b),{value:c,enumerable:false,writable:true,configurable:true})},
kI:function(a){var z,y,x,w,v,u
z=H.r($.eg.$1(a))
y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.r($.ea.$2(a,z))
if(z!=null){y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.bX[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ek(a,x)
if(v==="*")throw H.c(P.cs(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cD(a,!1,null,!!a.$isx)},
kM:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cD(z,c,null,null)},
kD:function(){if(!0===$.cB)return
$.cB=!0
H.kE()},
kE:function(){var z,y,x,w,v,u,t,s
$.bX=Object.create(null)
$.c2=Object.create(null)
H.kz()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kM(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kz:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aR(C.O,H.aR(C.T,H.aR(C.A,H.aR(C.A,H.aR(C.S,H.aR(C.P,H.aR(C.Q(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eg=new H.kA(v)
$.ea=new H.kB(u)
$.el=new H.kC(t)},
aR:function(a,b){return a(b)||b},
kQ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
kS:function(a,b,c,d){var z=b.cP(a,d)
if(z==null)return a
return H.kU(a,z.b.index,z.gds(z),c)},
kR:function(a,b,c){var z,y
z=b.gb7()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
kT:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.kS(a,b,c,d)},
kU:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
hW:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hX:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ck(z)
y=z[0]
x=z[1]
return new H.hW(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
im:{"^":"b;a,b,c,d,e,f",
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
ac:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.n([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.im(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hF:{"^":"O;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
ds:function(a,b){return new H.hF(a,b==null?null:b.method)}}},
ha:{"^":"O;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cn:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ha(a,y,z?null:b.receiver)}}},
is:{"^":"O;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kW:{"^":"l:8;a",
$1:function(a){if(!!J.B(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dZ:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isQ:1},
l:{"^":"b;",
k:function(a){return"Closure '"+H.b7(this).trim()+"'"},
gc0:function(){return this},
$isbk:1,
gc0:function(){return this}},
dA:{"^":"l;"},
ia:{"^":"dA;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aJ(z)+"'"}},
cc:{"^":"dA;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b6(this.a)
else y=typeof z!=="object"?J.ao(z):H.b6(z)
return(y^H.b6(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b7(z)+"'")},
p:{
cd:function(a){return a.a},
cY:function(a){return a.c},
bG:function(a){var z,y,x,w,v
z=new H.cc("self","target","receiver","name")
y=J.ck(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
io:{"^":"O;a",
k:function(a){return this.a},
p:{
a6:function(a,b){return new H.io("TypeError: "+P.bH(a)+": type '"+H.e8(a)+"' is not a subtype of type '"+b+"'")}}},
fq:{"^":"O;a",
k:function(a){return this.a},
p:{
cZ:function(a,b){return new H.fq("CastError: "+P.bH(a)+": type '"+H.e8(a)+"' is not a subtype of type '"+b+"'")}}},
i0:{"^":"O;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
i1:function(a){return new H.i0(a)}}},
dF:{"^":"b;a,0b,0c,0d",
ga7:function(){var z=this.b
if(z==null){z=H.by(this.a)
this.b=z}return z},
k:function(a){return this.ga7()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.ga7())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dF&&this.ga7()===b.ga7()}},
cm:{"^":"dn;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.at(this,[H.o(this,0)])},
a8:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cL(z,b)}else{y=this.dz(b)
return y}},
dz:function(a){var z=this.d
if(z==null)return!1
return this.at(this.an(z,J.ao(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a4(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a4(w,b)
x=y==null?null:y.b
return x}else return this.dA(b)},
dA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.an(z,J.ao(a)&0x3ffffff)
x=this.at(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ap()
this.b=z}this.aV(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ap()
this.c=y}this.aV(y,b,c)}else{x=this.d
if(x==null){x=this.ap()
this.d=x}w=J.ao(b)&0x3ffffff
v=this.an(x,w)
if(v==null)this.ar(x,w,[this.ag(b,c)])
else{u=this.at(v,b)
if(u>=0)v[u].b=c
else v.push(this.ag(b,c))}}},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aK(this))
z=z.c}},
aV:function(a,b,c){var z
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
z=this.a4(a,b)
if(z==null)this.ar(a,b,this.ag(b,c))
else z.b=c},
aX:function(){this.r=this.r+1&67108863},
ag:function(a,b){var z,y
z=new H.hf(H.y(a,H.o(this,0)),H.y(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aX()
return z},
at:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
k:function(a){return P.dp(this)},
a4:function(a,b){return a[b]},
an:function(a,b){return a[b]},
ar:function(a,b,c){a[b]=c},
cM:function(a,b){delete a[b]},
cL:function(a,b){return this.a4(a,b)!=null},
ap:function(){var z=Object.create(null)
this.ar(z,"<non-identifier-key>",z)
this.cM(z,"<non-identifier-key>")
return z},
$isdk:1},
hf:{"^":"b;a,b,0c,0d"},
at:{"^":"d6;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hg(z,z.r,this.$ti)
y.c=z.e
return y}},
hg:{"^":"b;a,b,0c,0d,$ti",
saW:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aK(z))
else{z=this.c
if(z==null){this.saW(null)
return!1}else{this.saW(z.a)
this.c=this.c.c
return!0}}},
$isb1:1},
kA:{"^":"l:8;a",
$1:function(a){return this.a(a)}},
kB:{"^":"l:33;a",
$2:function(a,b){return this.a(a,b)}},
kC:{"^":"l:14;a",
$1:function(a){return this.a(H.r(a))}},
h9:{"^":"b;a,b,0c,0d",
k:function(a){return"RegExp/"+this.a+"/"},
gb7:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dj(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
cP:function(a,b){var z,y
z=this.gb7()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.jj(this,y)},
$isdt:1,
p:{
dj:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(P.ci("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
jj:{"^":"b;a,b",
gds:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.i(z,b)
return z[b]}}}],["","",,H,{"^":"",
kq:function(a){return J.h5(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bT:function(a){var z,y
if(!!J.B(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ae:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aj(b,a))},
hA:{"^":"h;",$isip:1,"%":"DataView;ArrayBufferView;cp|dT|dU|dq|dV|dW|av"},
cp:{"^":"hA;",
gj:function(a){return a.length},
$isw:1,
$asw:I.bd,
$isx:1,
$asx:I.bd},
dq:{"^":"dU;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
h:function(a,b,c){H.t(b)
H.ed(c)
H.ae(b,a,a.length)
a[b]=c},
$asbI:function(){return[P.ak]},
$asp:function(){return[P.ak]},
$isj:1,
$asj:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
"%":"Float64Array"},
av:{"^":"dW;",
h:function(a,b,c){H.t(b)
H.t(c)
H.ae(b,a,a.length)
a[b]=c},
$asbI:function(){return[P.D]},
$asp:function(){return[P.D]},
$isj:1,
$asj:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hz:{"^":"dq;",$isag:1,"%":"Float32Array"},
lV:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lW:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
$ish1:1,
"%":"Int32Array"},
lX:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lY:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hB:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
$ismI:1,
"%":"Uint32Array"},
lZ:{"^":"av;",
gj:function(a){return a.length},
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m_:{"^":"av;",
gj:function(a){return a.length},
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dT:{"^":"cp+p;"},
dU:{"^":"dT+bI;"},
dV:{"^":"cp+p;"},
dW:{"^":"dV+bI;"}}],["","",,P,{"^":"",
iD:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ki()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aG(new P.iF(z),1)).observe(y,{childList:true})
return new P.iE(z,y,x)}else if(self.setImmediate!=null)return P.kj()
return P.kk()},
mS:[function(a){self.scheduleImmediate(H.aG(new P.iG(H.k(a,{func:1,ret:-1})),0))},"$1","ki",4,0,3],
mT:[function(a){self.setImmediate(H.aG(new P.iH(H.k(a,{func:1,ret:-1})),0))},"$1","kj",4,0,3],
mU:[function(a){H.k(a,{func:1,ret:-1})
P.jS(0,a)},"$1","kk",4,0,3],
fR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.v(a,"$isj",[[P.Z,d]],"$asj")
s=[[P.a,d]]
y=new P.P(0,$.C,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fT(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.M)(r),++p){w=r[p]
v=o
w.aw(new P.fS(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.P(0,$.C,s)
r.b_(C.Y)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.n(r,[d])}catch(n){u=H.a3(n)
t=H.aU(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bL()
r=$.C
if(r!==C.e)r.toString
s=new P.P(0,r,s)
s.b0(m,t)
return s}else{z.c=u
z.d=t}}return y},
ke:function(a,b){if(H.bw(a,{func:1,args:[P.b,P.Q]}))return H.k(a,{func:1,ret:null,args:[P.b,P.Q]})
if(H.bw(a,{func:1,args:[P.b]}))return H.k(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kd:function(){var z,y
for(;z=$.aP,z!=null;){$.bc=null
y=z.b
$.aP=y
if(y==null)$.bb=null
z.a.$0()}},
n5:[function(){$.cv=!0
try{P.kd()}finally{$.bc=null
$.cv=!1
if($.aP!=null)$.cG().$1(P.ec())}},"$0","ec",0,0,1],
e7:function(a){var z=new P.dJ(H.k(a,{func:1,ret:-1}))
if($.aP==null){$.bb=z
$.aP=z
if(!$.cv)$.cG().$1(P.ec())}else{$.bb.b=z
$.bb=z}},
kh:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aP
if(z==null){P.e7(a)
$.bc=$.bb
return}y=new P.dJ(a)
x=$.bc
if(x==null){y.b=z
$.bc=y
$.aP=y}else{y.b=x.b
x.b=y
$.bc=y
if(y.b==null)$.bb=y}},
kP:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.C
if(C.e===y){P.aQ(null,null,C.e,a)
return}y.toString
P.aQ(null,null,y,H.k(y.bi(a),z))},
bV:function(a,b,c,d,e){var z={}
z.a=d
P.kh(new P.kf(z,e))},
e5:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.C
if(y===c)return d.$0()
$.C=c
z=y
try{y=d.$0()
return y}finally{$.C=z}},
e6:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.C
if(y===c)return d.$1(e)
$.C=c
z=y
try{y=d.$1(e)
return y}finally{$.C=z}},
kg:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.C
if(y===c)return d.$2(e,f)
$.C=c
z=y
try{y=d.$2(e,f)
return y}finally{$.C=z}},
aQ:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bi(d):c.da(d,-1)
P.e7(d)},
iF:{"^":"l:9;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iE:{"^":"l:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iG:{"^":"l:0;a",
$0:function(){this.a.$0()}},
iH:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jR:{"^":"b;a,0b,c",
cG:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aG(new P.jT(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
p:{
jS:function(a,b){var z=new P.jR(!0,0)
z.cG(a,b)
return z}}},
jT:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
Z:{"^":"b;$ti"},
fT:{"^":"l:15;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isQ")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.H(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.H(z.c,z.d)}},
fS:{"^":"l;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.b2(z.a)}else if(z.b===0&&!this.e)this.c.H(z.c,z.d)},
$S:function(){return{func:1,ret:P.z,args:[this.f]}}},
dN:{"^":"b;$ti",
dh:function(a,b){if(a==null)a=new P.bL()
if(this.a.a!==0)throw H.c(P.bs("Future already completed"))
$.C.toString
this.H(a,b)},
dg:function(a){return this.dh(a,null)}},
dK:{"^":"dN;a,$ti",
bq:function(a,b){var z
H.aS(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bs("Future already completed"))
z.b_(b)},
H:function(a,b){this.a.b0(a,b)}},
jM:{"^":"dN;a,$ti",
H:function(a,b){this.a.H(a,b)}},
aN:{"^":"b;0a,b,c,d,e,$ti",
dB:function(a){if(this.c!==6)return!0
return this.b.b.av(H.k(this.d,{func:1,ret:P.R,args:[P.b]}),a.a,P.R,P.b)},
dw:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bw(z,{func:1,args:[P.b,P.Q]}))return H.aS(w.dI(z,a.a,a.b,null,y,P.Q),x)
else return H.aS(w.av(H.k(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
P:{"^":"b;bb:a<,b,0cZ:c<,$ti",
aw:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.C
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ke(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.P(0,$.C,[c])
w=b==null?1:3
this.aZ(new P.aN(x,w,a,b,[z,c]))
return x},
aa:function(a,b){return this.aw(a,null,b)},
aZ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaN")
this.c=a}else{if(z===2){y=H.f(this.c,"$isP")
z=y.a
if(z<4){y.aZ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aQ(null,null,z,H.k(new P.iY(this,a),{func:1,ret:-1}))}},
b8:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaN")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isP")
y=u.a
if(y<4){u.b8(a)
return}this.a=y
this.c=u.c}z.a=this.a6(a)
y=this.b
y.toString
P.aQ(null,null,y,H.k(new P.j4(z,this),{func:1,ret:-1}))}},
a5:function(){var z=H.f(this.c,"$isaN")
this.c=null
return this.a6(z)},
a6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ai:function(a){var z,y,x
z=H.o(this,0)
H.aS(a,{futureOr:1,type:z})
y=this.$ti
if(H.ai(a,"$isZ",y,"$asZ"))if(H.ai(a,"$isP",y,null))P.bR(a,this)
else P.dO(a,this)
else{x=this.a5()
H.y(a,z)
this.a=4
this.c=a
P.aO(this,x)}},
b2:function(a){var z
H.y(a,H.o(this,0))
z=this.a5()
this.a=4
this.c=a
P.aO(this,z)},
H:function(a,b){var z
H.f(b,"$isQ")
z=this.a5()
this.a=8
this.c=new P.a_(a,b)
P.aO(this,z)},
b_:function(a){var z
H.aS(a,{futureOr:1,type:H.o(this,0)})
if(H.ai(a,"$isZ",this.$ti,"$asZ")){this.cJ(a)
return}this.a=1
z=this.b
z.toString
P.aQ(null,null,z,H.k(new P.j_(this,a),{func:1,ret:-1}))},
cJ:function(a){var z=this.$ti
H.v(a,"$isZ",z,"$asZ")
if(H.ai(a,"$isP",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aQ(null,null,z,H.k(new P.j3(this,a),{func:1,ret:-1}))}else P.bR(a,this)
return}P.dO(a,this)},
b0:function(a,b){var z
H.f(b,"$isQ")
this.a=1
z=this.b
z.toString
P.aQ(null,null,z,H.k(new P.iZ(this,a,b),{func:1,ret:-1}))},
$isZ:1,
p:{
dO:function(a,b){var z,y,x
b.a=1
try{a.aw(new P.j0(b),new P.j1(b),null)}catch(x){z=H.a3(x)
y=H.aU(x)
P.kP(new P.j2(b,z,y))}},
bR:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isP")
if(z>=4){y=b.a5()
b.a=a.a
b.c=a.c
P.aO(b,y)}else{y=H.f(b.c,"$isaN")
b.a=2
b.c=a
a.b8(y)}},
aO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isa_")
y=y.b
u=v.a
t=v.b
y.toString
P.bV(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aO(z.a,b)}y=z.a
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
if(p){H.f(r,"$isa_")
y=y.b
u=r.a
t=r.b
y.toString
P.bV(null,null,y,u,t)
return}o=$.C
if(o!=q)$.C=q
else o=null
y=b.c
if(y===8)new P.j7(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j6(x,b,r).$0()}else if((y&2)!==0)new P.j5(z,x,b).$0()
if(o!=null)$.C=o
y=x.b
if(!!J.B(y).$isZ){if(y.a>=4){n=H.f(t.c,"$isaN")
t.c=null
b=t.a6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bR(y,t)
return}}m=b.b
n=H.f(m.c,"$isaN")
m.c=null
b=m.a6(n)
y=x.a
u=x.b
if(!y){H.y(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa_")
m.a=8
m.c=u}z.a=m
y=m}}}},
iY:{"^":"l:0;a,b",
$0:function(){P.aO(this.a,this.b)}},
j4:{"^":"l:0;a,b",
$0:function(){P.aO(this.b,this.a.a)}},
j0:{"^":"l:9;a",
$1:function(a){var z=this.a
z.a=0
z.ai(a)}},
j1:{"^":"l:16;a",
$2:function(a,b){H.f(b,"$isQ")
this.a.H(a,b)},
$1:function(a){return this.$2(a,null)}},
j2:{"^":"l:0;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
j_:{"^":"l:0;a,b",
$0:function(){var z=this.a
z.b2(H.y(this.b,H.o(z,0)))}},
j3:{"^":"l:0;a,b",
$0:function(){P.bR(this.b,this.a)}},
iZ:{"^":"l:0;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
j7:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bL(H.k(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.aU(v)
if(this.d){w=H.f(this.a.a.c,"$isa_").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa_")
else u.b=new P.a_(y,x)
u.a=!0
return}if(!!J.B(z).$isZ){if(z instanceof P.P&&z.gbb()>=4){if(z.gbb()===8){w=this.b
w.b=H.f(z.gcZ(),"$isa_")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.aa(new P.j8(t),null)
w.a=!1}}},
j8:{"^":"l:17;a",
$1:function(a){return this.a}},
j6:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.y(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.av(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.aU(t)
x=this.a
x.b=new P.a_(z,y)
x.a=!0}}},
j5:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa_")
w=this.c
if(w.dB(z)&&w.e!=null){v=this.b
v.b=w.dw(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.aU(u)
w=H.f(this.a.a.c,"$isa_")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a_(y,x)
s.a=!0}}},
dJ:{"^":"b;a,0b"},
ie:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.P(0,$.C,[P.D])
z.a=0
x=H.o(this,0)
w=H.k(new P.ih(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.ii(z,y),{func:1,ret:-1})
W.ah(this.a,this.b,w,!1,x)
return y}},
ih:{"^":"l;a,b",
$1:function(a){H.y(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
ii:{"^":"l:0;a,b",
$0:function(){this.b.ai(this.a.a)}},
ig:{"^":"b;"},
a_:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isO:1},
jZ:{"^":"b;",$ismQ:1},
kf:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bL()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jv:{"^":"jZ;",
dJ:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.C){a.$0()
return}P.e5(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.aU(x)
P.bV(null,null,this,z,H.f(y,"$isQ"))}},
dK:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.C){a.$1(b)
return}P.e6(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.aU(x)
P.bV(null,null,this,z,H.f(y,"$isQ"))}},
da:function(a,b){return new P.jx(this,H.k(a,{func:1,ret:b}),b)},
bi:function(a){return new P.jw(this,H.k(a,{func:1,ret:-1}))},
dc:function(a,b){return new P.jy(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bL:function(a,b){H.k(a,{func:1,ret:b})
if($.C===C.e)return a.$0()
return P.e5(null,null,this,a,b)},
av:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.C===C.e)return a.$1(b)
return P.e6(null,null,this,a,b,c,d)},
dI:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.C===C.e)return a.$2(b,c)
return P.kg(null,null,this,a,b,c,d,e,f)}},
jx:{"^":"l;a,b,c",
$0:function(){return this.a.bL(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jw:{"^":"l:1;a,b",
$0:function(){return this.a.dJ(this.b)}},
jy:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dK(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dl:function(a,b,c){H.bf(a)
return H.v(H.kr(a,new H.cm(0,0,[b,c])),"$isdk",[b,c],"$asdk")},
a4:function(a,b){return new H.cm(0,0,[a,b])},
hh:function(){return new H.cm(0,0,[null,null])},
a5:function(a,b,c,d){return new P.jf(0,0,[d])},
h2:function(a,b,c){var z,y
if(P.cw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.n([],[P.d])
y=$.bg()
C.a.l(y,a)
try{P.kc(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dz(b,H.kH(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cj:function(a,b,c){var z,y,x
if(P.cw(a))return b+"..."+c
z=new P.cr(b)
y=$.bg()
C.a.l(y,a)
try{x=z
x.a=P.dz(x.gP(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gP()+c
y=z.gP()
return y.charCodeAt(0)==0?y:y},
cw:function(a){var z,y
for(z=0;y=$.bg(),z<y.length;++z)if(a===y[z])return!0
return!1},
kc:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
co:function(a,b){var z,y,x
z=P.a5(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.M)(a),++x)z.l(0,H.y(a[x],b))
return z},
dp:function(a){var z,y,x
z={}
if(P.cw(a))return"{...}"
y=new P.cr("")
try{C.a.l($.bg(),a)
x=y
x.a=x.gP()+"{"
z.a=!0
J.eY(a,new P.hm(z,y))
z=y
z.a=z.gP()+"}"}finally{z=$.bg()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gP()
return z.charCodeAt(0)==0?z:z},
jf:{"^":"ja;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dS(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbv")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbv")!=null}else return this.cK(b)},
cK:function(a){var z=this.d
if(z==null)return!1
return this.am(this.b5(z,a),a)>=0},
l:function(a,b){var z,y
H.y(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ct()
this.b=z}return this.aY(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ct()
this.c=y}return this.aY(y,b)}else return this.cH(0,b)},
cH:function(a,b){var z,y,x
H.y(b,H.o(this,0))
z=this.d
if(z==null){z=P.ct()
this.d=z}y=this.b3(b)
x=z[y]
if(x==null)z[y]=[this.aq(b)]
else{if(this.am(x,b)>=0)return!1
x.push(this.aq(b))}return!0},
bK:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b9(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b9(this.c,b)
else return this.cU(0,b)},
cU:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b5(z,b)
x=this.am(y,b)
if(x<0)return!1
this.bd(y.splice(x,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ao()}},
aY:function(a,b){H.y(b,H.o(this,0))
if(H.f(a[b],"$isbv")!=null)return!1
a[b]=this.aq(b)
return!0},
b9:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbv")
if(z==null)return!1
this.bd(z)
delete a[b]
return!0},
ao:function(){this.r=this.r+1&67108863},
aq:function(a){var z,y
z=new P.bv(H.y(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ao()
return z},
bd:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ao()},
b3:function(a){return J.ao(a)&0x3ffffff},
b5:function(a,b){return a[this.b3(b)]},
am:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
p:{
ct:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bv:{"^":"b;a,0b,0c"},
dS:{"^":"b;a,b,0c,0d,$ti",
sb1:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aK(z))
else{z=this.c
if(z==null){this.sb1(null)
return!1}else{this.sb1(H.y(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb1:1,
p:{
jg:function(a,b,c){var z=new P.dS(a,b,[c])
z.c=a.e
return z}}},
ja:{"^":"i2;"},
hi:{"^":"jh;",$isj:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.dm(a,this.gj(a),0,[H.be(this,a,"p",0)])},
q:function(a,b){return this.i(a,b)},
du:function(a,b,c,d){var z,y,x
H.y(b,d)
H.k(c,{func:1,ret:d,args:[d,H.be(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gj(a))throw H.c(P.aK(a))}return y},
k:function(a){return P.cj(a,"[","]")}},
dn:{"^":"U;"},
hm:{"^":"l:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
U:{"^":"b;$ti",
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.be(this,a,"U",0),H.be(this,a,"U",1)]})
for(z=J.bD(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gj:function(a){return J.aX(this.gD(a))},
k:function(a){return P.dp(a)},
$isJ:1},
i3:{"^":"b;$ti",
E:function(a,b){var z
for(z=J.bD(H.v(b,"$isj",this.$ti,"$asj"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.cj(this,"{","}")},
$isj:1,
$ismh:1},
i2:{"^":"i3;"},
jh:{"^":"b+p;"}}],["","",,P,{"^":"",
cC:function(a,b,c){var z
H.r(a)
z=H.hT(a,c)
if(z!=null)return z
throw H.c(P.ci(a,null,null))},
aH:function(a,b){var z
H.r(a)
z=H.hS(a)
if(z!=null)return z
throw H.c(P.ci("Invalid double",a,null))},
fM:function(a){if(a instanceof H.l)return a.k(0)
return"Instance of '"+H.b7(a)+"'"},
dv:function(a,b,c){return new H.h9(a,H.dj(a,!1,!0,!1))},
bH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bi(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fM(a)},
da:function(a){return new P.iV(a)},
an:function(a){H.aV(H.e(a))},
R:{"^":"b;"},
"+bool":0,
aZ:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a&&this.b===b.b},
J:function(a,b){return C.f.J(this.a,H.f(b,"$isaZ").a)},
gv:function(a){var z=this.a
return(z^C.f.ba(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fC(H.hR(this))
y=P.bj(H.hP(this))
x=P.bj(H.hL(this))
w=P.bj(H.hM(this))
v=P.bj(H.hO(this))
u=P.bj(H.hQ(this))
t=P.fD(H.hN(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isY:1,
$asY:function(){return[P.aZ]},
p:{
fC:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bj:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"F;"},
"+double":0,
b_:{"^":"b;a",
N:function(a,b){return C.f.N(this.a,H.f(b,"$isb_").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.b_&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.f.J(this.a,H.f(b,"$isb_").a)},
k:function(a){var z,y,x,w,v
z=new P.fJ()
y=this.a
if(y<0)return"-"+new P.b_(0-y).k(0)
x=z.$1(C.f.R(y,6e7)%60)
w=z.$1(C.f.R(y,1e6)%60)
v=new P.fI().$1(y%1e6)
return""+C.f.R(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isY:1,
$asY:function(){return[P.b_]},
p:{
d5:function(a,b,c,d,e,f){return new P.b_(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fI:{"^":"l:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fJ:{"^":"l:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
bL:{"^":"O;",
k:function(a){return"Throw of null."}},
ap:{"^":"O;a,b,c,d",
gak:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaj:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gak()+y+x
if(!this.a)return w
v=this.gaj()
u=P.bH(this.b)
return w+v+": "+u},
p:{
fk:function(a){return new P.ap(!1,null,null,a)},
cV:function(a,b,c){return new P.ap(!0,a,b,c)}}},
du:{"^":"ap;e,f,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bN:function(a,b,c){return new P.du(null,null,!0,a,b,"Value not in range")},
bM:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")}}},
h0:{"^":"ap;e,j:f>,a,b,c,d",
gak:function(){return"RangeError"},
gaj:function(){var z,y
z=H.t(this.b)
if(typeof z!=="number")return z.a1()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
G:function(a,b,c,d,e){var z=H.t(e==null?J.aX(b):e)
return new P.h0(b,z,!0,a,c,"Index out of range")}}},
it:{"^":"O;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.it(a)}}},
ir:{"^":"O;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cs:function(a){return new P.ir(a)}}},
cq:{"^":"O;a",
k:function(a){return"Bad state: "+this.a},
p:{
bs:function(a){return new P.cq(a)}}},
fw:{"^":"O;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bH(z)+"."},
p:{
aK:function(a){return new P.fw(a)}}},
dy:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isO:1},
fB:{"^":"O;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iV:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
fQ:{"^":"b;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.e(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.aK(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
ci:function(a,b,c){return new P.fQ(a,b,c)}}},
bk:{"^":"b;"},
D:{"^":"F;"},
"+int":0,
j:{"^":"b;$ti",
ay:["cd",function(a,b){var z=H.cA(this,"j",0)
return new H.dH(this,H.k(b,{func:1,ret:P.R,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.N(P.bM(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.G(b,this,"index",null,y))},
k:function(a){return P.h2(this,"(",")")}},
b1:{"^":"b;$ti"},
a:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
z:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
F:{"^":"b;",$isY:1,
$asY:function(){return[P.F]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.b6(this)},
k:function(a){return"Instance of '"+H.b7(this)+"'"},
toString:function(){return this.k(this)}},
Q:{"^":"b;"},
d:{"^":"b;",$isY:1,
$asY:function(){return[P.d]},
$isdt:1},
"+String":0,
cr:{"^":"b;P:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dz:function(a,b,c){var z=J.bD(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fK:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).K(z,a,b,c)
y.toString
z=W.u
z=new H.dH(new W.a7(y),H.k(new W.fL(),{func:1,ret:P.R,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.N(H.h3())
w=x.gA(x)
if(x.t())H.N(H.h4())
return H.f(w,"$isT")},
d9:function(a){H.f(a,"$isK")
return"wheel"},
b0:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f0(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
iS:function(a,b){return document.createElement(a)},
bS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dR:function(a,b,c,d){var z,y
z=W.bS(W.bS(W.bS(W.bS(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e3:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iM(a)
if(!!J.B(z).$isK)return z
return}else return H.f(a,"$isK")},
k9:function(a){var z
if(!!J.B(a).$iscg)return a
z=new P.iA([],[],!1)
z.c=!0
return z.ax(a)},
e9:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.C
if(z===C.e)return a
return z.dc(a,b)},
L:{"^":"T;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kX:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fi:{"^":"L;",
k:function(a){return String(a)},
$isfi:1,
"%":"HTMLAnchorElement"},
kY:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cW:{"^":"L;",$iscW:1,"%":"HTMLBaseElement"},
fo:{"^":"h;","%":";Blob"},
bF:{"^":"L;",$isbF:1,"%":"HTMLBodyElement"},
ce:{"^":"L;0n:height=,0m:width=",
c1:function(a,b,c){var z=this.cQ(a,b,P.kl(c,null))
return z},
cQ:function(a,b,c){return a.getContext(b,c)},
$isce:1,
"%":"HTMLCanvasElement"},
l2:{"^":"h;",
ac:function(a){return P.a2(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
l3:{"^":"u;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fx:{"^":"cf;",$isfx:1,"%":"CSSNumericValue|CSSUnitValue"},
l5:{"^":"fA;0j:length=","%":"CSSPerspective"},
aq:{"^":"h;",$isaq:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fy:{"^":"iK;0j:length=",
aC:function(a,b){var z=this.cR(a,this.ah(a,b))
return z==null?"":z},
ah:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.d2(a,b)
z[b]=y
return y},
d2:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fE()+b
if(z in a)return z
return b},
cR:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fz:{"^":"b;",
gn:function(a){return this.aC(a,"height")},
gm:function(a){return this.aC(a,"width")}},
cf:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fA:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l7:{"^":"cf;0j:length=","%":"CSSTransformValue"},
l8:{"^":"cf;0j:length=","%":"CSSUnparsedValue"},
la:{"^":"h;0j:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fF:{"^":"L;","%":"HTMLDivElement"},
cg:{"^":"u;",
d5:function(a,b){return a.adoptNode(b)},
c2:function(a,b){return a.getElementById(b)},
dE:function(a,b){return a.querySelector(b)},
gbG:function(a){return new W.bt(a,"mousedown",!1,[W.V])},
gbH:function(a){return new W.bt(a,"mousemove",!1,[W.V])},
gbI:function(a){return new W.bt(a,"mouseup",!1,[W.V])},
gbJ:function(a){return new W.bt(a,H.r(W.d9(a)),!1,[W.aM])},
$iscg:1,
"%":"XMLDocument;Document"},
lb:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fG:{"^":"h;",
dl:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lc:{"^":"iO;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.v(c,"$isX",[P.F],"$asX")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.X,P.F]]},
$isx:1,
$asx:function(){return[[P.X,P.F]]},
$asp:function(){return[[P.X,P.F]]},
$isj:1,
$asj:function(){return[[P.X,P.F]]},
$isa:1,
$asa:function(){return[[P.X,P.F]]},
$asq:function(){return[[P.X,P.F]]},
"%":"ClientRectList|DOMRectList"},
fH:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isX",[P.F],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isX:1,
$asX:function(){return[P.F]},
"%":";DOMRectReadOnly"},
ld:{"^":"iQ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.r(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
le:{"^":"h;0j:length=","%":"DOMTokenList"},
T:{"^":"u;0dL:tagName=",
gd8:function(a){return new W.iR(a)},
k:function(a){return a.localName},
K:["af",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d8
if(z==null){z=H.n([],[W.ab])
y=new W.dr(z)
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
$.d8=y
d=y}else d=z
z=$.d7
if(z==null){z=new W.e2(d)
$.d7=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.K).dl(y,"")
$.af=y
$.ch=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.f(y,"$iscW")
y.href=z.baseURI
z=$.af.head;(z&&C.L).F(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbF")}z=$.af
if(!!this.$isbF)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.o).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.ch;(z&&C.D).c3(z,x)
z=$.ch
w=(z&&C.D).dj(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cP(x)
c.aH(w)
C.q.d5(document,w)
return w},function(a,b,c){return this.K(a,b,c,null)},"dk",null,null,"gdU",5,5,null],
c6:function(a,b,c,d){a.textContent=null
this.F(a,this.K(a,b,c,d))},
c5:function(a,b){return this.c6(a,b,null,null)},
T:function(a,b){return a.getAttribute(b)},
cV:function(a,b){return a.removeAttribute(b)},
gbG:function(a){return new W.bQ(a,"mousedown",!1,[W.V])},
gbH:function(a){return new W.bQ(a,"mousemove",!1,[W.V])},
gbI:function(a){return new W.bQ(a,"mouseup",!1,[W.V])},
gbJ:function(a){return new W.bQ(a,H.r(W.d9(a)),!1,[W.aM])},
$isT:1,
"%":";Element"},
fL:{"^":"l:34;",
$1:function(a){return!!J.B(H.f(a,"$isu")).$isT}},
lg:{"^":"L;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a0:{"^":"h;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
d4:function(a,b,c,d){H.k(c,{func:1,args:[W.a0]})
if(c!=null)this.cI(a,b,c,!1)},
cI:function(a,b,c,d){return a.addEventListener(b,H.aG(H.k(c,{func:1,args:[W.a0]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dX|dY|e0|e1"},
ar:{"^":"fo;",$isar:1,"%":"File"},
lx:{"^":"iX;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isar")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ar]},
$isx:1,
$asx:function(){return[W.ar]},
$asp:function(){return[W.ar]},
$isj:1,
$asj:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"FileList"},
ly:{"^":"K;0j:length=","%":"FileWriter"},
lB:{"^":"L;0j:length=","%":"HTMLFormElement"},
as:{"^":"h;",$isas:1,"%":"Gamepad"},
fW:{"^":"L;","%":"HTMLHeadElement"},
lC:{"^":"h;0j:length=","%":"History"},
lD:{"^":"jc;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isu")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fX:{"^":"cg;","%":"HTMLDocument"},
fY:{"^":"fZ;",
dV:function(a,b,c,d,e,f){return a.open(b,c)},
dC:function(a,b,c){return a.open(b,c)},
c4:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
fZ:{"^":"K;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
lE:{"^":"L;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lF:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lG:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
lH:{"^":"L;0n:height=,0m:width=","%":"HTMLImageElement"},
lJ:{"^":"L;0n:height=,0m:width=","%":"HTMLInputElement"},
b2:{"^":"dG;",$isb2:1,"%":"KeyboardEvent"},
hl:{"^":"h;",
k:function(a){return String(a)},
$ishl:1,
"%":"Location"},
hp:{"^":"L;","%":"HTMLAudioElement;HTMLMediaElement"},
lR:{"^":"h;0j:length=","%":"MediaList"},
lS:{"^":"jk;",
i:function(a,b){return P.a2(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.hr(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hr:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lT:{"^":"jl;",
i:function(a,b){return P.a2(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.hs(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hs:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
au:{"^":"h;",$isau:1,"%":"MimeType"},
lU:{"^":"jn;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isau")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$asp:function(){return[W.au]},
$isj:1,
$asj:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"MimeTypeArray"},
V:{"^":"dG;",
gbF:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b5(a.offsetX,a.offsetY,[P.F])
else{z=a.target
if(!J.B(W.e3(z)).$isT)throw H.c(P.A("offsetX is only supported on elements"))
y=H.f(W.e3(z),"$isT")
z=a.clientX
x=a.clientY
w=[P.F]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.v(new P.b5(u,v,w),"$isb5",w,"$asb5")
if(typeof z!=="number")return z.U()
if(typeof x!=="number")return x.U()
return new P.b5(C.r.bM(z-u),C.r.bM(x-v),w)}},
$isV:1,
"%":";DragEvent|MouseEvent"},
a7:{"^":"hi;a",
ga3:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bs("No elements"))
if(y>1)throw H.c(P.bs("More than one element"))
return z.firstChild},
E:function(a,b){var z,y,x,w,v
H.v(b,"$isj",[W.u],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.m(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
h:function(a,b,c){var z
H.t(b)
z=this.a
J.eH(z,H.f(c,"$isu"),C.v.i(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.dd(z,z.length,-1,[H.be(C.v,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){return C.v.i(this.a.childNodes,b)},
$asp:function(){return[W.u]},
$asj:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"K;0dD:previousSibling=",
dF:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cc(a):z},
F:function(a,b){return a.appendChild(b)},
cW:function(a,b){return a.removeChild(b)},
cX:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hC:{"^":"jp;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isu")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
m2:{"^":"L;0n:height=,0m:width=","%":"HTMLObjectElement"},
m4:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
m5:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
aw:{"^":"h;0j:length=",$isaw:1,"%":"Plugin"},
m7:{"^":"jt;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaw")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isj:1,
$asj:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"PluginArray"},
m9:{"^":"V;0n:height=,0m:width=","%":"PointerEvent"},
bq:{"^":"a0;",$isbq:1,"%":"ProgressEvent|ResourceProgressEvent"},
hV:{"^":"h;",
dj:function(a,b){return a.createContextualFragment(b)},
c3:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
me:{"^":"jz;",
i:function(a,b){return P.a2(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.i_(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i_:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mf:{"^":"h;0n:height=,0m:width=","%":"Screen"},
mg:{"^":"L;0j:length=","%":"HTMLSelectElement"},
ax:{"^":"K;",$isax:1,"%":"SourceBuffer"},
mi:{"^":"dY;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isax")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isj:1,
$asj:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"SourceBufferList"},
ay:{"^":"h;",$isay:1,"%":"SpeechGrammar"},
mj:{"^":"jF;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isay")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isj:1,
$asj:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"SpeechGrammarList"},
az:{"^":"h;0j:length=",$isaz:1,"%":"SpeechRecognitionResult"},
mm:{"^":"jI;",
i:function(a,b){return this.b6(a,H.r(b))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cT(a,z)
if(y==null)return
b.$2(y,this.b6(a,y))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.id(z))
return z},
gj:function(a){return a.length},
b6:function(a,b){return a.getItem(b)},
cT:function(a,b){return a.key(b)},
$asU:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
id:{"^":"l:18;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aA:{"^":"h;",$isaA:1,"%":"CSSStyleSheet|StyleSheet"},
ij:{"^":"L;",
K:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.af(a,b,c,d)
z=W.fK("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a7(y).E(0,new W.a7(z))
return y},
"%":"HTMLTableElement"},
mp:{"^":"L;",
K:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.af(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga3(z)
x.toString
z=new W.a7(x)
w=z.ga3(z)
y.toString
w.toString
new W.a7(y).E(0,new W.a7(w))
return y},
"%":"HTMLTableRowElement"},
mq:{"^":"L;",
K:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.af(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga3(z)
y.toString
x.toString
new W.a7(y).E(0,new W.a7(x))
return y},
"%":"HTMLTableSectionElement"},
dB:{"^":"L;",$isdB:1,"%":"HTMLTemplateElement"},
mr:{"^":"h;0m:width=","%":"TextMetrics"},
aB:{"^":"K;",$isaB:1,"%":"TextTrack"},
aC:{"^":"K;",$isaC:1,"%":"TextTrackCue|VTTCue"},
ms:{"^":"jQ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaC")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aC]},
$isx:1,
$asx:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isj:1,
$asj:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asq:function(){return[W.aC]},
"%":"TextTrackCueList"},
mt:{"^":"e1;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaB")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aB]},
$isx:1,
$asx:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isj:1,
$asj:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"TextTrackList"},
mu:{"^":"h;0j:length=","%":"TimeRanges"},
aD:{"^":"h;",$isaD:1,"%":"Touch"},
mv:{"^":"jV;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaD")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aD]},
$isx:1,
$asx:function(){return[W.aD]},
$asp:function(){return[W.aD]},
$isj:1,
$asj:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asq:function(){return[W.aD]},
"%":"TouchList"},
mw:{"^":"h;0j:length=","%":"TrackDefaultList"},
dG:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mK:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mM:{"^":"hp;0n:height=,0m:width=","%":"HTMLVideoElement"},
mN:{"^":"K;0j:length=","%":"VideoTrackList"},
mO:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mP:{"^":"h;0m:width=","%":"VTTRegion"},
aM:{"^":"V;",
gdn:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.A("deltaY is not supported"))},
$isaM:1,
"%":"WheelEvent"},
ix:{"^":"K;",
gd7:function(a){var z,y,x
z=P.F
y=new P.P(0,$.C,[z])
x=H.k(new W.iy(new P.jM(y,[z])),{func:1,ret:-1,args:[P.F]})
this.cO(a)
this.cY(a,W.e9(x,z))
return y},
cY:function(a,b){return a.requestAnimationFrame(H.aG(H.k(b,{func:1,ret:-1,args:[P.F]}),1))},
cO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdI:1,
"%":"DOMWindow|Window"},
iy:{"^":"l:19;a",
$1:function(a){var z=this.a
a=H.aS(H.cE(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.N(P.bs("Future already completed"))
z.ai(a)}},
dL:{"^":"u;",$isdL:1,"%":"Attr"},
mV:{"^":"k0;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaq")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isj:1,
$asj:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"CSSRuleList"},
mW:{"^":"fH;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isX",[P.F],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mX:{"^":"k2;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isas")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$asp:function(){return[W.as]},
$isj:1,
$asj:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"GamepadList"},
n1:{"^":"k4;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isu")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n2:{"^":"k6;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaz")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$asp:function(){return[W.az]},
$isj:1,
$asj:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"SpeechRecognitionResultList"},
n3:{"^":"k8;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaA")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aA]},
$isx:1,
$asx:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isj:1,
$asj:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"StyleSheetList"},
iI:{"^":"dn;cN:a<",
C:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.M)(z),++v){u=z[v]
b.$2(u,w.T(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.n([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.f(z[w],"$isdL")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asU:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
iR:{"^":"iI;a",
i:function(a,b){return J.ca(this.a,H.r(b))},
gj:function(a){return this.gD(this).length}},
bt:{"^":"ie;a,b,c,$ti"},
bQ:{"^":"bt;a,b,c,$ti"},
iT:{"^":"ig;a,b,c,d,e,$ti",p:{
ah:function(a,b,c,d,e){var z=W.e9(new W.iU(c),W.a0)
if(z!=null&&!0)J.eI(a,b,z,!1)
return new W.iT(0,a,b,z,!1,[e])}}},
iU:{"^":"l:20;a",
$1:function(a){return this.a.$1(H.f(a,"$isa0"))}},
bu:{"^":"b;a",
cE:function(a){var z,y
z=$.cH()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.V[y],W.kx())
for(y=0;y<12;++y)z.h(0,C.u[y],W.ky())}},
S:function(a){return $.eC().u(0,W.b0(a))},
M:function(a,b,c){var z,y,x
z=W.b0(a)
y=$.cH()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bW(x.$4(a,b,c,this))},
$isab:1,
p:{
dP:function(a){var z,y
z=document.createElement("a")
y=new W.jA(z,window.location)
y=new W.bu(y)
y.cE(a)
return y},
n_:[function(a,b,c,d){H.f(a,"$isT")
H.r(b)
H.r(c)
H.f(d,"$isbu")
return!0},"$4","kx",16,0,12],
n0:[function(a,b,c,d){var z,y,x
H.f(a,"$isT")
H.r(b)
H.r(c)
z=H.f(d,"$isbu").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ky",16,0,12]}},
q:{"^":"b;$ti",
gw:function(a){return new W.dd(a,this.gj(a),-1,[H.be(this,a,"q",0)])}},
dr:{"^":"b;a",
S:function(a){return C.a.bf(this.a,new W.hE(a))},
M:function(a,b,c){return C.a.bf(this.a,new W.hD(a,b,c))},
$isab:1},
hE:{"^":"l:5;a",
$1:function(a){return H.f(a,"$isab").S(this.a)}},
hD:{"^":"l:5;a,b,c",
$1:function(a){return H.f(a,"$isab").M(this.a,this.b,this.c)}},
jB:{"^":"b;",
cF:function(a,b,c,d){var z,y,x
this.a.E(0,c)
z=b.ay(0,new W.jC())
y=b.ay(0,new W.jD())
this.b.E(0,z)
x=this.c
x.E(0,C.X)
x.E(0,y)},
S:function(a){return this.a.u(0,W.b0(a))},
M:["cf",function(a,b,c){var z,y
z=W.b0(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.d6(c)
else if(y.u(0,"*::"+b))return this.d.d6(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isab:1},
jC:{"^":"l:11;",
$1:function(a){return!C.a.u(C.u,H.r(a))}},
jD:{"^":"l:11;",
$1:function(a){return C.a.u(C.u,H.r(a))}},
jN:{"^":"jB;e,a,b,c,d",
M:function(a,b,c){if(this.cf(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ca(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
e_:function(){var z,y,x,w,v
z=P.d
y=P.co(C.t,z)
x=H.o(C.t,0)
w=H.k(new W.jO(),{func:1,ret:z,args:[x]})
v=H.n(["TEMPLATE"],[z])
y=new W.jN(y,P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),null)
y.cF(null,new H.hn(C.t,w,[x,z]),v,null)
return y}}},
jO:{"^":"l:21;",
$1:function(a){return"TEMPLATE::"+H.e(H.r(a))}},
jL:{"^":"b;",
S:function(a){var z=J.B(a)
if(!!z.$isdw)return!1
z=!!z.$isH
if(z&&W.b0(a)==="foreignObject")return!1
if(z)return!0
return!1},
M:function(a,b,c){if(b==="is"||C.h.c9(b,"on"))return!1
return this.S(a)},
$isab:1},
dd:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.y(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb4(J.bh(this.a,z))
this.c=z
return!0}this.sb4(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb1:1},
iL:{"^":"b;a",$isK:1,$isdI:1,p:{
iM:function(a){if(a===window)return H.f(a,"$isdI")
else return new W.iL(a)}}},
ab:{"^":"b;"},
jA:{"^":"b;a,b",$ismJ:1},
e2:{"^":"b;a",
aH:function(a){new W.jY(this).$2(a,null)},
X:function(a,b){if(b==null)J.cP(a)
else J.bA(b,a)},
d0:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eZ(a)
x=J.ca(y.gcN(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.bi(a)}catch(t){H.a3(t)}try{u=W.b0(a)
this.d_(H.f(a,"$isT"),b,z,v,u,H.f(y,"$isJ"),H.r(x))}catch(t){if(H.a3(t) instanceof P.ap)throw t
else{this.X(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.X(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.S(a)){this.X(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.M(a,"is",g)){this.X(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.n(z.slice(0),[H.o(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.m(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.M(a,J.f8(v),w.T(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.T(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.T(z,v)
w.cV(z,v)}}if(!!J.B(a).$isdB)this.aH(a.content)},
$ism0:1},
jY:{"^":"l:22;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d0(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.X(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f_(z)}catch(w){H.a3(w)
v=H.f(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isu")}}},
iK:{"^":"h+fz;"},
iN:{"^":"h+p;"},
iO:{"^":"iN+q;"},
iP:{"^":"h+p;"},
iQ:{"^":"iP+q;"},
iW:{"^":"h+p;"},
iX:{"^":"iW+q;"},
jb:{"^":"h+p;"},
jc:{"^":"jb+q;"},
jk:{"^":"h+U;"},
jl:{"^":"h+U;"},
jm:{"^":"h+p;"},
jn:{"^":"jm+q;"},
jo:{"^":"h+p;"},
jp:{"^":"jo+q;"},
js:{"^":"h+p;"},
jt:{"^":"js+q;"},
jz:{"^":"h+U;"},
dX:{"^":"K+p;"},
dY:{"^":"dX+q;"},
jE:{"^":"h+p;"},
jF:{"^":"jE+q;"},
jI:{"^":"h+U;"},
jP:{"^":"h+p;"},
jQ:{"^":"jP+q;"},
e0:{"^":"K+p;"},
e1:{"^":"e0+q;"},
jU:{"^":"h+p;"},
jV:{"^":"jU+q;"},
k_:{"^":"h+p;"},
k0:{"^":"k_+q;"},
k1:{"^":"h+p;"},
k2:{"^":"k1+q;"},
k3:{"^":"h+p;"},
k4:{"^":"k3+q;"},
k5:{"^":"h+p;"},
k6:{"^":"k5+q;"},
k7:{"^":"h+p;"},
k8:{"^":"k7+q;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.a4(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.M)(y),++w){v=H.r(y[w])
z.h(0,v,a[v])}return z},
kl:function(a,b){var z={}
a.C(0,new P.km(z))
return z},
kn:function(a){var z,y
z=new P.P(0,$.C,[null])
y=new P.dK(z,[null])
a.then(H.aG(new P.ko(y),1))["catch"](H.aG(new P.kp(y),1))
return z},
d4:function(){var z=$.d3
if(z==null){z=J.c6(window.navigator.userAgent,"Opera",0)
$.d3=z}return z},
fE:function(){var z,y
z=$.d0
if(z!=null)return z
y=$.d1
if(y==null){y=J.c6(window.navigator.userAgent,"Firefox",0)
$.d1=y}if(y)z="-moz-"
else{y=$.d2
if(y==null){y=!P.d4()&&J.c6(window.navigator.userAgent,"Trident/",0)
$.d2=y}if(y)z="-ms-"
else z=P.d4()?"-o-":"-webkit-"}$.d0=z
return z},
iz:{"^":"b;",
bC:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
ax:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.N(P.fk("DateTime is outside valid range: "+y))
return new P.aZ(y,!0)}if(a instanceof RegExp)throw H.c(P.cs("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kn(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bC(a)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.hh()
z.a=u
C.a.h(x,v,u)
this.dv(a,new P.iB(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bC(t)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
if(u!=null)return u
s=J.aT(t)
r=s.gj(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.bY(u),q=0;q<r;++q)x.h(u,q,this.ax(s.i(t,q)))
return u}return a}},
iB:{"^":"l:23;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.ax(b)
J.eG(z,a,y)
return y}},
km:{"^":"l:6;a",
$2:function(a,b){this.a[a]=b}},
iA:{"^":"iz;a,b,c",
dv:function(a,b){var z,y,x,w
H.k(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.M)(z),++x){w=z[x]
b.$2(w,a[w])}}},
ko:{"^":"l:10;a",
$1:function(a){return this.a.bq(0,a)}},
kp:{"^":"l:10;a",
$1:function(a){return this.a.dg(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b5:{"^":"b;ab:a>,a_:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.ai(b,"$isb5",[P.F],null)&&this.a==J.bE(b)&&this.b==b.ga_(b)},
gv:function(a){var z,y,x
z=J.ao(this.a)
y=J.ao(this.b)
y=P.dQ(P.dQ(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
ju:{"^":"b;"},
X:{"^":"ju;$ti"}}],["","",,P,{"^":"",fj:{"^":"h;",$isfj:1,"%":"SVGAnimatedLength"},lh:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},li:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lj:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lk:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},ll:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lm:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},ln:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lo:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},lp:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lq:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},lr:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},ls:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lt:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lu:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lv:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},lw:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lz:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},lA:{"^":"bl;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fV:{"^":"bl;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bl:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lI:{"^":"bl;0n:height=,0m:width=","%":"SVGImageElement"},b3:{"^":"h;",$isb3:1,"%":"SVGLength"},lO:{"^":"je;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.f(c,"$isb3")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b3]},
$isj:1,
$asj:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asq:function(){return[P.b3]},
"%":"SVGLengthList"},lP:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},b4:{"^":"h;",$isb4:1,"%":"SVGNumber"},m1:{"^":"jr;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.f(c,"$isb4")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b4]},
$isj:1,
$asj:function(){return[P.b4]},
$isa:1,
$asa:function(){return[P.b4]},
$asq:function(){return[P.b4]},
"%":"SVGNumberList"},m6:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},m8:{"^":"h;0j:length=","%":"SVGPointList"},ma:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},mb:{"^":"fV;0n:height=,0m:width=","%":"SVGRectElement"},dw:{"^":"H;",$isdw:1,"%":"SVGScriptElement"},mn:{"^":"jK;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.r(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},H:{"^":"T;",
K:function(a,b,c,d){var z,y,x,w,v,u
z=H.n([],[W.ab])
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
C.a.l(z,new W.jL())
c=new W.e2(new W.dr(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dk(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a7(w)
u=z.ga3(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mo:{"^":"bl;0n:height=,0m:width=","%":"SVGSVGElement"},b8:{"^":"h;",$isb8:1,"%":"SVGTransform"},mx:{"^":"jX;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.f(c,"$isb8")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b8]},
$isj:1,
$asj:function(){return[P.b8]},
$isa:1,
$asa:function(){return[P.b8]},
$asq:function(){return[P.b8]},
"%":"SVGTransformList"},mL:{"^":"bl;0n:height=,0m:width=","%":"SVGUseElement"},jd:{"^":"h+p;"},je:{"^":"jd+q;"},jq:{"^":"h+p;"},jr:{"^":"jq+q;"},jJ:{"^":"h+p;"},jK:{"^":"jJ+q;"},jW:{"^":"h+p;"},jX:{"^":"jW+q;"}}],["","",,P,{"^":"",ag:{"^":"b;",$isj:1,
$asj:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
$isip:1}}],["","",,P,{"^":"",kZ:{"^":"h;0j:length=","%":"AudioBuffer"},l_:{"^":"iJ;",
i:function(a,b){return P.a2(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new P.fm(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fm:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},l0:{"^":"K;0j:length=","%":"AudioTrackList"},fn:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m3:{"^":"fn;0j:length=","%":"OfflineAudioContext"},iJ:{"^":"h+U;"}}],["","",,P,{"^":"",fp:{"^":"h;",$isfp:1,"%":"WebGLBuffer"},hU:{"^":"h;",$ishU:1,"%":"WebGLProgram"},mc:{"^":"h;",
be:function(a,b){return a.activeTexture(b)},
bg:function(a,b,c){return a.attachShader(b,c)},
bh:function(a,b,c){return a.bindBuffer(b,c)},
bj:function(a,b,c){return a.bindTexture(b,c)},
bk:function(a,b){return a.blendEquation(b)},
bl:function(a,b,c){return a.blendFunc(b,c)},
bm:function(a,b,c,d){return a.bufferData(b,c,d)},
bn:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bp:function(a,b){return a.compileShader(b)},
br:function(a){return a.createBuffer()},
bs:function(a){return a.createProgram()},
bt:function(a,b){return a.createShader(b)},
bv:function(a,b){return a.depthMask(b)},
bw:function(a,b){return a.disable(b)},
bx:function(a,b,c,d){return a.drawArrays(b,c,d)},
by:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bz:function(a,b){return a.enable(b)},
bA:function(a,b){return a.enableVertexAttribArray(b)},
ac:function(a){return P.a2(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aD:function(a,b){return a.getShaderInfoLog(b)},
aE:function(a,b,c){return a.getShaderParameter(b,c)},
aF:function(a,b,c){return a.getUniformLocation(b,c)},
bE:function(a,b){return a.linkProgram(b)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aJ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bN:function(a,b,c){return a.uniform1f(b,c)},
bO:function(a,b,c){return a.uniform1fv(b,c)},
bP:function(a,b,c){return a.uniform1i(b,c)},
bQ:function(a,b,c){return a.uniform1iv(b,c)},
bR:function(a,b,c){return a.uniform2fv(b,c)},
bS:function(a,b,c){return a.uniform3fv(b,c)},
bT:function(a,b,c){return a.uniform4fv(b,c)},
bU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bW:function(a,b){return a.useProgram(b)},
bX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bZ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},md:{"^":"h;",
d9:function(a,b){return a.beginTransformFeedback(b)},
dd:function(a,b){return a.bindVertexArray(b)},
dm:function(a){return a.createVertexArray()},
dq:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dr:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dt:function(a){return a.endTransformFeedback()},
dO:function(a,b,c,d){this.d3(a,b,H.v(c,"$isa",[P.d],"$asa"),d)
return},
d3:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dQ:function(a,b,c){return a.vertexAttribDivisor(b,c)},
be:function(a,b){return a.activeTexture(b)},
bg:function(a,b,c){return a.attachShader(b,c)},
bh:function(a,b,c){return a.bindBuffer(b,c)},
bj:function(a,b,c){return a.bindTexture(b,c)},
bk:function(a,b){return a.blendEquation(b)},
bl:function(a,b,c){return a.blendFunc(b,c)},
bm:function(a,b,c,d){return a.bufferData(b,c,d)},
bn:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bp:function(a,b){return a.compileShader(b)},
br:function(a){return a.createBuffer()},
bs:function(a){return a.createProgram()},
bt:function(a,b){return a.createShader(b)},
bv:function(a,b){return a.depthMask(b)},
bw:function(a,b){return a.disable(b)},
bx:function(a,b,c,d){return a.drawArrays(b,c,d)},
by:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bz:function(a,b){return a.enable(b)},
bA:function(a,b){return a.enableVertexAttribArray(b)},
ac:function(a){return P.a2(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aD:function(a,b){return a.getShaderInfoLog(b)},
aE:function(a,b,c){return a.getShaderParameter(b,c)},
aF:function(a,b,c){return a.getUniformLocation(b,c)},
bE:function(a,b){return a.linkProgram(b)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aJ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bN:function(a,b,c){return a.uniform1f(b,c)},
bO:function(a,b,c){return a.uniform1fv(b,c)},
bP:function(a,b,c){return a.uniform1i(b,c)},
bQ:function(a,b,c){return a.uniform1iv(b,c)},
bR:function(a,b,c){return a.uniform2fv(b,c)},
bS:function(a,b,c){return a.uniform3fv(b,c)},
bT:function(a,b,c){return a.uniform4fv(b,c)},
bU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bW:function(a,b){return a.useProgram(b)},
bX:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bZ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i4:{"^":"h;",$isi4:1,"%":"WebGLShader"},il:{"^":"h;",$isil:1,"%":"WebGLTexture"},iq:{"^":"h;",$isiq:1,"%":"WebGLUniformLocation"},iv:{"^":"h;",$isiv:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mk:{"^":"jH;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return P.a2(this.cS(a,b))},
h:function(a,b,c){H.t(b)
H.f(c,"$isJ")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
cS:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jG:{"^":"h+p;"},jH:{"^":"jG+q;"}}],["","",,G,{"^":"",
iC:function(a){var z,y,x,w
z=H.n(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.i(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.Z(z,"\n")},
dM:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bt(a,b)
z.aI(a,y,c)
z.bp(a,y)
x=H.bW(z.aE(a,y,35713))
if(x!=null&&!x){w=z.aD(a,y)
P.an("E:Compilation failed:")
P.an("E:"+G.iC(c))
P.an("E:Failure:")
P.an(C.h.G("E:",w))
throw H.c(w)}return y},
de:function(a,b){var z,y,x
H.v(a,"$isa",[T.I],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bE(a[y]))
if(y>=a.length)return H.i(a,y)
C.b.h(b,z+1,J.c9(a[y]))
z+=2
if(y>=a.length)return H.i(a,y)
x=J.cN(a[y])
if(z>=b.length)return H.i(b,z)
b[z]=x}return b},
fO:function(a,b){var z,y
H.v(a,"$isa",[T.ad],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bE(a[y]))
if(y>=a.length)return H.i(a,y)
C.b.h(b,z+1,J.c9(a[y]))}return b},
fP:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.ba],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bE(a[y]))
if(y>=a.length)return H.i(a,y)
C.b.h(b,z+1,J.c9(a[y]))
x=z+2
if(y>=a.length)return H.i(a,y)
w=J.cN(a[y])
v=b.length
if(x>=v)return H.i(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.i(a,y)
w=J.f1(a[y])
if(z>=v)return H.i(b,z)
b[z]=w}return b},
fN:function(a,b){var z,y
H.v(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.h(b,z,J.bh(a[y],0))
if(y>=a.length)return H.i(a,y)
C.m.h(b,z+1,J.bh(a[y],1))
if(y>=a.length)return H.i(a,y)
C.m.h(b,z+2,J.bh(a[y],2))
if(y>=a.length)return H.i(a,y)
C.m.h(b,z+3,J.bh(a[y],3))}return b},
j9:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.at(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.D]],v=[P.ak],u=[T.ba],t=[T.I],s=[T.ad];y.t();){r=y.d
if(!x.a8(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ee>0)H.aV("I: "+r)
continue}q=z.i(0,r)
switch($.a8().i(0,r).a){case"vec2":b.V(r,G.fO(H.bz(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.V(r,G.de(H.bz(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.V(r,G.fP(H.bz(q,"$isa",u,"$asa"),null),4)
break
case"float":b.V(r,new Float32Array(H.bT(H.bz(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.V(r,G.fN(H.bz(q,"$isa",w,"$asa"),null),4)
break}}},
bK:{"^":"b;"},
bP:{"^":"bK;",
aQ:function(){return this.d},
k:function(a){var z,y,x,w
z=H.n(["{"+new H.dF(H.ku(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.at(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.Z(z,"\n")}},
fr:{"^":"b;0a,b",
bB:function(a,b,c){J.eW(this.a,b)
if(c>0)J.ff(this.a,b,c)},
bY:function(a,b,c,d,e,f,g,h){J.c5(this.a,34962,b)
J.fg(this.a,c,d,e,!1,g,h)}},
db:{"^":"b;a,b,c"},
dc:{"^":"b;a,b,c,d"},
fU:{"^":"b;a,b,c,d,e",
aO:function(a){switch($.a8().i(0,a).a){case"vec2":this.e.h(0,a,H.n([],[T.ad]))
break
case"vec3":this.e.h(0,a,H.n([],[T.I]))
break
case"vec4":this.e.h(0,a,H.n([],[T.ba]))
break
case"float":this.e.h(0,a,H.n([],[P.ak]))
break
case"uvec4":this.e.h(0,a,H.n([],[[P.a,P.D]]))
break}},
aM:function(a){var z,y,x,w,v
H.v(a,"$isa",[T.I],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.M)(a),++x){w=a[x]
v=new T.I(new Float32Array(3))
v.O(w)
C.a.l(y,v)}},
cj:function(a,b){var z,y,x,w,v,u,t
z=[T.ad]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.M)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.ad(u))}},
ck:function(a,b){var z,y,x,w,v,u
z=[T.I]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.M)(b),++w){v=b[w]
u=new T.I(new Float32Array(3))
u.O(v)
x.l(y,u)}},
cp:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.n(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.M)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.M)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
k:function(a){var z,y,x,w,v
z=H.n(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.at(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a8().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.Z(z," ")}},
dD:{"^":"b;a,b,c"},
dC:{"^":"b;a,b,c"},
ho:{"^":"bP;d,a,b,c"},
hq:{"^":"bK;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sal:function(a){this.cx=H.v(a,"$isa",[P.D],"$asa")},
aN:function(a,b,c){var z,y
C.h.W(a,0)
H.f(b,"$isag")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c5(z.a,34962,y)
J.cM(z.a,34962,b,35048)},
cq:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
V:function(a,b,c){var z,y,x,w,v
z=J.cI(a,0)===105
if(z&&this.z===0)this.z=C.f.cg(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c7(x.a))
this.aN(a,b,c)
w=$.a8().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bB(x.a,this.e)
x.bB(0,v,z?1:0)
x.bY(0,y.i(0,a),v,w.aP(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.n(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.at(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.Z(y,"  ")}},
hH:{"^":"bP;",
cm:function(a,b){var z
if(typeof a!=="number")return a.dS()
if(typeof b!=="number")return H.bx(b)
z=a/b
if(this.z===z)return
this.z=z
this.aS()},
aS:function(){var z,y,x,w,v,u
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
aQ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.h(0,"uEyePosition",z.az())
x=this.cy
x.O(z.d)
z=this.cx
z.O(this.db)
w=z.a
v=w[0]
u=w[4]
t=w[8]
s=w[12]
r=w[1]
q=w[5]
p=w[9]
o=w[13]
n=w[2]
m=w[6]
l=w[10]
k=w[14]
j=w[3]
i=w[7]
h=w[11]
g=w[15]
f=x.a
e=f[0]
d=f[4]
c=f[8]
b=f[12]
a=f[1]
a0=f[5]
a1=f[9]
a2=f[13]
a3=f[2]
a4=f[6]
a5=f[10]
a6=f[14]
a7=f[3]
a8=f[7]
a9=f[11]
b0=f[15]
w[0]=v*e+u*a+t*a3+s*a7
w[4]=v*d+u*a0+t*a4+s*a8
w[8]=v*c+u*a1+t*a5+s*a9
w[12]=v*b+u*a2+t*a6+s*b0
w[1]=r*e+q*a+p*a3+o*a7
w[5]=r*d+q*a0+p*a4+o*a8
w[9]=r*c+q*a1+p*a5+o*a9
w[13]=r*b+q*a2+p*a6+o*b0
w[2]=n*e+m*a+l*a3+k*a7
w[6]=n*d+m*a0+l*a4+k*a8
w[10]=n*c+m*a1+l*a5+k*a9
w[14]=n*b+m*a2+l*a6+k*b0
w[3]=j*e+i*a+h*a3+g*a7
w[7]=j*d+i*a0+h*a4+g*a8
w[11]=j*c+i*a1+h*a5+g*a9
w[15]=j*b+i*a2+h*a6+g*b0
y.h(0,"uPerspectiveViewMatrix",z)
return y}},
lf:{"^":"b;"},
hY:{"^":"bK;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cu:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.h(0,t,J.cO(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.h(0,t,J.cO(w.a,v,t))}},
cz:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.n([],[P.d])
x=H.n([],[P.d])
for(y=new H.at(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.a8(0,w))C.a.l(x,w)}for(z=this.x,z=P.jg(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.at(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cI(s,0)){case 117:if(w.a8(0,s)){r=b.i(0,s)
if(v.a8(0,s))H.aV("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a8().i(0,s)
if(q==null)H.N("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.t(r)
J.cb(x.a,p,r)}else if(!!J.B(r).$ish1)J.fd(x.a,p,r)
break
case"float":if(q.c===0){H.ed(r)
J.fb(x.a,p,r)}else if(!!J.B(r).$isag)J.fc(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.am(r,"$isaL").a
J.cU(x.a,p,!1,s)}else if(!!J.B(r).$isag)J.cU(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.N.gdT(H.am(r,"$islQ"))
J.cT(x.a,p,!1,s)}else if(!!J.B(r).$isag)J.cT(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cS(o,p,H.am(r,"$isba").a)
else J.cS(o,p,H.f(r,"$isag"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.am(r,"$isI").a)
else J.cR(o,p,H.f(r,"$isag"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cQ(o,p,H.am(r,"$isad").a)
else J.cQ(o,p,H.f(r,"$isag"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bx(s)
J.cJ(x.a,33984+s)
s=H.am(r,"$isik").cr()
J.cL(x.a,3553,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bx(s)
J.cJ(x.a,33984+s)
s=H.am(r,"$isik").cr()
J.cL(x.a,34067,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
default:H.aV("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.S(r,!0)
o=x.a
if(s)J.bC(o,2929)
else J.c8(o,2929)
break
case"cStencilFunc":H.am(r,"$isdD")
s=r.a
o=x.a
if(s===1281)J.c8(o,2960)
else{J.bC(o,2960)
o=r.b
n=r.c
J.f7(x.a,s,o,n)}break
case"cDepthWrite":H.bW(r)
J.eQ(x.a,r)
break
case"cBlendEquation":H.am(r,"$isdC")
s=r.a
o=x.a
if(s===1281)J.c8(o,3042)
else{J.bC(o,3042)
o=r.b
n=r.c
J.eL(x.a,o,n)
J.eK(x.a,s)}break}++t
break}}m=P.d5(0,0,0,Date.now()-new P.aZ(z,!1).a,0,0)
""+t
m.k(0)},
co:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[G.bP],"$asa")
Date.now()
z=this.d
J.fe(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aX()}for(x=0;x<2;++x){w=b[x]
this.cC(w.a,w.aQ())}y=this.Q
y.Y(0)
for(v=a.cy,v=new H.at(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cz()
if(u.length!==0)P.an("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bB(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cq()
s=a.Q
r=a.z
if(t)J.eJ(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.eU(q,v,y,s,0,r)
else J.eT(q,v,y,s,0)}else{s=z.a
if(r>1)J.eS(s,v,0,y,r)
else J.eR(s,v,0,y)}if(t)J.eX(z.a)},
cn:function(a,b){return this.co(a,b,null)},
p:{
hZ:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a5(null,null,null,z)
x=c.b
w=d.b
v=H.v(c.f,"$isa",[z],"$asa")
u=J.eO(b.a)
t=G.dM(b.a,35633,x)
J.cK(b.a,u,t)
s=G.dM(b.a,35632,w)
J.cK(b.a,u,s)
if(v.length>0)J.f9(b.a,u,v,35980)
J.f5(b.a,u)
if(!H.bW(J.f4(b.a,u,35714)))H.N(J.f3(b.a,u))
z=new G.hY(b,c,d,u,P.co(c.c,z),P.a4(z,P.b),P.a4(z,z),y,a,!1,!0)
z.cu(a,b,c,d)
return z}}},
E:{"^":"b;a,b,c",
aP:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i5:{"^":"b;a,0b,c,d,e,f,r,x",
ci:function(a){var z,y,x,w
H.v(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.h(0,w,this.r);++this.r}C.a.ae(z)},
cl:function(a){var z,y
H.v(a,"$isa",[P.d],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.l(z,a[y])
C.a.ae(z)},
aL:function(a){var z,y
H.v(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ae(z)},
aR:function(a,b){var z=[P.d]
this.b=this.cD(!0,H.v(a,"$isa",z,"$asa"),H.v(b,"$isa",z,"$asa"))},
cv:function(a){return this.aR(a,null)},
cD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.v(b,"$isa",z,"$asa")
H.v(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.n(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.M)(y),++u){t=y[u]
s=$.a8().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a8().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(c!=null)C.a.E(w,c)
C.a.l(w,"void main(void) {")
C.a.E(w,b)
C.a.l(w,"}")
return C.a.Z(w,"\n")},
p:{
dx:function(a){var z,y
z=P.d
y=[z]
return new G.i5(a,H.n([],y),H.n([],y),H.n([],y),H.n([],y),0,P.a4(z,P.D))}}},
i9:{"^":"bK;",
az:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}}}],["","",,Y,{"^":"",
h_:function(a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=H.n([],[G.db])
y=H.n([],[G.dc])
x=[T.I]
w=H.n([],x)
v=P.d
u=new G.fU(!1,z,y,w,P.a4(v,[P.a,,]))
u.aO("aTexUV")
u.aO("aNormal")
t=P.a4(v,P.D)
s=a5.split("\n")
r=H.n([],x)
q=H.n([],x)
v=[T.ad]
p=H.n([],v)
o=Date.now()
n=P.dv("\\s+",!0,!1)
m=P.dv("\\s\\s*\\$",!0,!1)
for(l=s.length,k=0;k<s.length;s.length===l||(0,H.M)(s),++k){j=s[k]
j.toString
i=H.kR(j,n," ")
h=H.kT(i,m,"",0)
i=h.length
if(i!==0){if(0>=i)return H.i(h,0)
i=h[0]==="#"}else i=!0
if(i)continue
g=h.split(" ")
i=g.length
if(0>=i)return H.i(g,0)
f=g[0]
if(J.S(f,"g")){if(1>=i)return H.i(g,1)
t.h(0,g[1],r.length)}else if(J.S(f,"v")){if(1>=i)return H.i(g,1)
f=P.aH(g[1],null)
if(2>=i)return H.i(g,2)
e=P.aH(g[2],null)
if(3>=i)return H.i(g,3)
i=P.aH(g[3],null)
d=new Float32Array(3)
C.b.h(d,0,f)
C.b.h(d,1,e)
C.b.h(d,2,i)
C.a.l(r,new T.I(d))}else if(J.S(f,"vt")){if(1>=i)return H.i(g,1)
f=P.aH(g[1],null)
if(2>=i)return H.i(g,2)
i=P.aH(g[2],null)
e=new Float32Array(2)
C.b.h(e,0,f)
C.b.h(e,1,i)
C.a.l(p,new T.ad(e))}else if(J.S(f,"vn")){if(1>=i)return H.i(g,1)
f=P.aH(g[1],null)
if(2>=i)return H.i(g,2)
e=P.aH(g[2],null)
if(3>=i)return H.i(g,3)
i=P.aH(g[3],null)
d=new Float32Array(3)
C.b.h(d,0,f)
C.b.h(d,1,e)
C.b.h(d,2,i)
C.a.l(q,new T.I(d))}else if(J.S(f,"f")){if(i!==4&&i!==5){H.aV("*** Error: face '"+h+"' not handled")
continue}c=H.n([],x)
b=H.n([],x)
a=H.n([],v)
for(a0=1;i=g.length,a0<i;++a0){a1=J.f6(g[a0],"/")
for(;a1.length<3;)C.a.l(a1,"")
i=P.cC(a1[0],null,null)
if(typeof i!=="number")return i.U()
a2=i-1
if(1>=a1.length)return H.i(a1,1)
if(J.S(a1[1],""))a3=-1
else{if(1>=a1.length)return H.i(a1,1)
i=P.cC(a1[1],null,null)
if(typeof i!=="number")return i.U()
a3=i-1}if(2>=a1.length)return H.i(a1,2)
if(J.S(a1[2],""))a4=-1
else{if(2>=a1.length)return H.i(a1,2)
i=P.cC(a1[2],null,null)
if(typeof i!=="number")return i.U()
a4=i-1}i=r.length
if(a2<i){if(a2<0)return H.i(r,a2)
C.a.l(c,r[a2])}else C.a.l(c,new T.I(new Float32Array(3)))
if(a3!==-1&&a3<p.length){if(a3<0||a3>=p.length)return H.i(p,a3)
C.a.l(a,p[a3])}else{H.aV("problem uv "+a0+" "+a3)
C.a.l(a,new T.ad(new Float32Array(2)))}if(a4!==-1&&a4<q.length){if(a4<0||a4>=q.length)return H.i(q,a4)
C.a.l(b,q[a4])}else{H.aV("problem normals "+a0+" "+a4)
C.a.l(b,new T.I(new Float32Array(3)))}}a0=w.length
f=a0+1
e=a0+2
if(i===4){H.v(c,"$isa",x,"$asa")
C.a.l(z,new G.db(a0,f,e))
u.aM(c)}else{H.v(c,"$isa",x,"$asa")
C.a.l(y,new G.dc(a0,f,e,a0+3))
u.aM(c)}u.ck("aNormal",b)
u.cj("aTexUV",a)}}P.an("loaded ("+P.d5(0,0,0,Date.now()-new P.aZ(o,!1).a,0,0).k(0)+") "+u.k(0))
return u}}],["","",,R,{"^":"",
ji:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iS("span",null),"$isT")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).ah(y,"float")
y.setProperty(x,"left","")
x=C.x.ah(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.F(z,v)}return z},
hI:{"^":"hH;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dH:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.an("size change "+H.e(y)+" "+H.e(x))
this.cm(y,x)
J.fh(this.go.a,0,0,y,x)},"$1","gdG",4,0,24]},
ib:{"^":"b;",
cw:function(a,b,c){var z,y
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
y=J.m(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
ic:{"^":"ib;e,f,a,b,c,d",
cB:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.dN(y,2)+" fps"
C.p.c5(this.c,b)
x=C.f.R(30*C.z.de(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isT")
v=w.style
u=""+x+"px"
v.height=u
C.p.F(z,w)},
cA:function(a){return this.cB(a,"")}}}],["","",,V,{}],["","",,D,{"^":"",
hj:function(a){var z,y,x,w
z=P.d
y=new P.P(0,$.C,[z])
x=new XMLHttpRequest()
C.y.dC(x,"GET",a)
w=W.bq
W.ah(x,"loadend",H.k(new D.hk(new P.dK(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.y.c4(x,"")
return y},
hk:{"^":"l:25;a,b",
$1:function(a){H.f(a,"$isbq")
this.a.bq(0,H.aS(W.k9(this.b.response),{futureOr:1,type:P.d}))}},
hb:{"^":"b;a,b,c",
cs:function(a){var z,y
a=document
z=W.b2
y={func:1,ret:-1,args:[z]}
W.ah(a,"keydown",H.k(new D.hd(this),y),!1,z)
W.ah(a,"keyup",H.k(new D.he(this),y),!1,z)},
p:{
hc:function(a){var z=P.D
z=new D.hb(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z))
z.cs(a)
return z}}},
hd:{"^":"l:13;a",
$1:function(a){var z
H.f(a,"$isb2")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
he:{"^":"l:13;a",
$1:function(a){var z
H.f(a,"$isb2")
z=this.a
z.a.bK(0,a.which)
z.c.l(0,a.which)}},
ht:{"^":"b;a,b,c,d,e,f,r,x",
ct:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gbH(a)
x=H.o(y,0)
W.ah(y.a,y.b,H.k(new D.hv(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbG(a)
y=H.o(x,0)
W.ah(x.a,x.b,H.k(new D.hw(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbI(a)
x=H.o(y,0)
W.ah(y.a,y.b,H.k(new D.hx(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbJ(a)
x=H.o(z,0)
W.ah(z.a,z.b,H.k(new D.hy(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hu:function(a){var z=P.D
z=new D.ht(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),0,0,0,0,0)
z.ct(a)
return z}}},
hv:{"^":"l:4;a",
$1:function(a){var z,y
H.f(a,"$isV")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.t(y.gbF(a).a)
z.x=H.t(y.gbF(a).b)
z.d=a.movementX
z.e=a.movementY}},
hw:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
P.an("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hx:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
z=this.a
z.a.bK(0,a.button)
z.c.l(0,a.button)}},
hy:{"^":"l:27;a",
$1:function(a){H.f(a,"$isaM")
a.preventDefault()
this.a.f=H.t(C.ae.gdn(a))}},
hG:{"^":"i9;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c1:function(a){var z,y
z=C.b.du(H.v(a,"$isj",[P.b],"$asj"),0,new A.kw(),P.D)
if(typeof z!=="number")return H.bx(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kw:{"^":"l:28;",
$2:function(a,b){var z,y
H.t(a)
z=J.ao(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aL:{"^":"b;a",
O:function(a){var z,y
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
k:function(a){return"[0] "+this.a0(0).k(0)+"\n[1] "+this.a0(1).k(0)+"\n[2] "+this.a0(2).k(0)+"\n[3] "+this.a0(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.i(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aL){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.c1(this.a)},
a0:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.i(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.i(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.i(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.i(y,x)
z[3]=y[x]
return new T.ba(z)},
a2:function(){var z=this.a
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
z[15]=1}},ad:{"^":"b;a",
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ad){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.c1(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.i(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gab:function(a){return this.a[0]},
ga_:function(a){return this.a[1]}},I:{"^":"b;a",
ad:function(a,b,c){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)
C.b.h(z,2,c)},
O:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.I){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.c1(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.i(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbD:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
au:function(a){var z,y,x
z=Math.sqrt(this.gbD())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
as:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bu:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.I(new Float32Array(3))
z.ad(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gab:function(a){return this.a[0]},
ga_:function(a){return this.a[1]},
gc_:function(a){return this.a[2]},
p:{
iu:function(a,b,c){var z=new T.I(new Float32Array(3))
z.ad(a,b,c)
return z}}},ba:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ba){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.c1(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.i(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gab:function(a){return this.a[0]},
ga_:function(a){return this.a[1]},
gc_:function(a){return this.a[2]},
gdR:function(a){return this.a[3]}}}],["","",,T,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=C.q.c2(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ic(0,0,x,w,y.createElement("div"),R.ji("blue","gray",90,30))
u.cw(x,"blue","gray")
t=H.f(C.q.dE(y,"#webgl-canvas"),"$isce")
s=new G.fr(t)
y=P.d
x=P.b
v=(t&&C.J).c1(t,"webgl2",P.dl(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.N(P.da('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.f2(v))
if($.ee>0)P.an("I: "+r)
J.eM(v,0,0,0,1)
J.bC(v,2929)
v=new Float32Array(3)
r=D.hc(null)
q=D.hu(t)
p=new T.aL(new Float32Array(16))
p.a2()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hG(25,0,0,0,new T.I(v),-0.02,r,q,p,new T.I(o),new T.I(n),new T.I(m),new T.I(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.aL(new Float32Array(16))
v.a2()
r=new T.aL(new Float32Array(16))
r.a2()
k=new R.hI(t,s,l,50,1,0.1,1000,v,r,new T.aL(new Float32Array(16)),P.a4(y,x),"perspective",!1,!0)
k.aS()
k.dH(null)
v=W.a0
W.ah(window,"resize",H.k(k.gdG(),{func:1,ret:-1,args:[v]}),!1,v)
j=G.hZ("demo",s,$.eE(),$.eD())
z.a=null
i=D.hj("../ct_logo.obj")
i.aa(new T.kK(z,j),null)
v=$.eF()
C.a.l(v,i)
y=P.a4(y,x)
y.h(0,"cDepthTest",!0)
y.h(0,"cDepthWrite",!0)
y.h(0,"cBlendEquation",$.en())
y.h(0,"cStencilFunc",$.er())
y.h(0,"uColor",$.eo())
r=new Float32Array(16)
q=new T.aL(r)
q.a2()
h=Math.cos(1.5707963267948966)
g=Math.sin(1.5707963267948966)
p=r[4]
o=r[8]
n=r[5]
m=r[9]
f=r[6]
e=r[10]
d=r[7]
c=r[11]
b=-g
r[4]=p*h+o*g
r[5]=n*h+m*g
r[6]=f*h+e*g
r[7]=d*h+c*g
r[8]=p*b+o*h
r[9]=n*b+m*h
r[10]=f*b+e*h
r[11]=d*b+c*h
y.h(0,"uModelMatrix",q)
z.b=0
P.fR(v,null,!1,x).aa(new T.kL(new T.kJ(z,l,j,k,new G.ho(y,"mat",!1,!0),u)),null)},
kK:{"^":"l:29;a,b",
$1:function(a){var z,y,x,w,v,u,t,s,r
z=Y.h_(H.r(a))
y=this.b
x=y.d
y=y.e.x
w=P.d
v=P.a4(w,P.b)
u=J.eP(x.a)
t=new G.hq(x,u,4,v,y,0,-1,P.a4(w,P.ag),"meshdata:",!1,!0)
w=G.de(z.d,null)
v.h(0,"aPosition",J.c7(x.a))
t.ch=w
t.aN("aPosition",w,3)
s=$.a8().i(0,"aPosition")
if(s==null)H.N("Unknown canonical aPosition")
r=y.i(0,"aPosition")
J.bB(x.a,u)
x.bB(0,r,0)
x.bY(0,v.i(0,"aPosition"),r,s.aP(),5126,!1,0,0)
y=H.v(z.cp(),"$isa",[P.D],"$asa")
t.y=J.c7(x.a)
w=t.ch.length
if(w<768){t.sal(new Uint8Array(H.bT(y)))
t.Q=5121}else if(w<196608){t.sal(new Uint16Array(H.bT(y)))
t.Q=5123}else{t.sal(new Uint32Array(H.bT(y)))
t.Q=5125}J.bB(x.a,u)
y=t.y
w=t.cx
J.c5(x.a,34963,y)
J.cM(x.a,34963,w,35048)
G.j9(z,t)
this.a.a=t}},
kJ:{"^":"l:30;a,b,c,d,e,f",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cE(a9)
if(typeof a9!=="number")return a9.U()
z=this.a
z.b=a9+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aG()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aG()
y.cy=v+w*0.01}w=y.fr
v=w.a
if(v.u(0,37))y.cx+=0.03
else if(v.u(0,39))y.cx-=0.03
if(v.u(0,38))y.cy+=0.03
else if(v.u(0,40))y.cy-=0.03
if(v.u(0,33))y.ch*=0.99
else if(v.u(0,34))y.ch*=1.01
if(v.u(0,32)){y.cx=0
y.cy=0}v=x.f
if(typeof v!=="number")return v.aG()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.r.df(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=y.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=y.dx.a
q[12]=q[12]+t[0]
q[13]=q[13]+t[1]
q[14]=q[14]+t[2]
p=new T.I(new Float32Array(3))
p.ad(0,1,0)
v=y.az()
u=new Float32Array(3)
o=new T.I(u)
o.O(v)
u[0]=u[0]-t[0]
u[1]=u[1]-t[1]
u[2]=u[2]-t[2]
o.au(0)
n=p.bu(o)
n.au(0)
m=o.bu(n)
m.au(0)
t=n.as(v)
r=m.as(v)
v=o.as(v)
l=n.a
k=l[0]
j=m.a
i=j[0]
h=u[0]
g=l[1]
f=j[1]
e=u[1]
l=l[2]
j=j[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=j
q[8]=l
q[7]=0
q[6]=e
q[5]=f
q[4]=g
q[3]=0
q[2]=h
q[1]=i
q[0]=k
k=y.f
i=k.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
y=-y.db
d=Math.sqrt(k.gbD())
n=i[0]/d
m=i[1]/d
o=i[2]/d
c=Math.cos(y)
b=Math.sin(y)
a=1-c
a0=n*n*a+c
y=o*b
a1=n*m*a-y
i=m*b
a2=n*o*a+i
a3=m*n*a+y
a4=m*m*a+c
y=n*b
a5=m*o*a-y
a6=o*n*a-i
a7=o*m*a+y
a8=o*o*a+c
y=q[0]
i=q[4]
k=q[8]
h=q[1]
g=q[5]
f=q[9]
e=q[2]
l=q[6]
j=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a0+i*a3+k*a6
q[1]=h*a0+g*a3+f*a6
q[2]=e*a0+l*a3+j*a6
q[3]=u*a0+t*a3+r*a6
q[4]=y*a1+i*a4+k*a7
q[5]=h*a1+g*a4+f*a7
q[6]=e*a1+l*a4+j*a7
q[7]=u*a1+t*a4+r*a7
q[8]=y*a2+i*a5+k*a8
q[9]=h*a2+g*a5+f*a8
q[10]=e*a2+l*a5+j*a8
q[11]=u*a2+t*a5+r*a8
w.c.Y(0)
w.b.Y(0)
x.e=0
x.d=0
x.f=0
x.c.Y(0)
x.b.Y(0)
this.c.cn(z.a,H.n([this.d,this.e],[G.bP]))
C.af.gd7(window).aa(this,-1)
this.f.cA(z.b)}},
kL:{"^":"l:31;a",
$1:function(a){H.bf(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.df.prototype}if(typeof a=="string")return J.bo.prototype
if(a==null)return J.dh.prototype
if(typeof a=="boolean")return J.h6.prototype
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.aT=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.bY=function(a){if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.ks=function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.kt=function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.bZ=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.c_=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).B(a,b)}
J.a9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ks(a).N(a,b)}
J.bh=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kG(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aT(a).i(a,b)}
J.eG=function(a,b,c){return J.bY(a).h(a,b,c)}
J.cI=function(a,b){return J.bZ(a).W(a,b)}
J.bA=function(a,b){return J.m(a).cW(a,b)}
J.eH=function(a,b,c){return J.m(a).cX(a,b,c)}
J.cJ=function(a,b){return J.m(a).be(a,b)}
J.eI=function(a,b,c,d){return J.m(a).d4(a,b,c,d)}
J.cK=function(a,b,c){return J.m(a).bg(a,b,c)}
J.eJ=function(a,b){return J.m(a).d9(a,b)}
J.c5=function(a,b,c){return J.m(a).bh(a,b,c)}
J.cL=function(a,b,c){return J.m(a).bj(a,b,c)}
J.bB=function(a,b){return J.m(a).dd(a,b)}
J.eK=function(a,b){return J.m(a).bk(a,b)}
J.eL=function(a,b,c){return J.m(a).bl(a,b,c)}
J.cM=function(a,b,c,d){return J.m(a).bm(a,b,c,d)}
J.eM=function(a,b,c,d,e){return J.m(a).bn(a,b,c,d,e)}
J.eN=function(a,b){return J.kt(a).J(a,b)}
J.c6=function(a,b,c){return J.aT(a).di(a,b,c)}
J.c7=function(a){return J.m(a).br(a)}
J.eO=function(a){return J.m(a).bs(a)}
J.eP=function(a){return J.m(a).dm(a)}
J.eQ=function(a,b){return J.m(a).bv(a,b)}
J.c8=function(a,b){return J.m(a).bw(a,b)}
J.eR=function(a,b,c,d){return J.m(a).bx(a,b,c,d)}
J.eS=function(a,b,c,d,e){return J.m(a).dq(a,b,c,d,e)}
J.eT=function(a,b,c,d,e){return J.m(a).by(a,b,c,d,e)}
J.eU=function(a,b,c,d,e,f){return J.m(a).dr(a,b,c,d,e,f)}
J.eV=function(a,b){return J.bY(a).q(a,b)}
J.bC=function(a,b){return J.m(a).bz(a,b)}
J.eW=function(a,b){return J.m(a).bA(a,b)}
J.eX=function(a){return J.m(a).dt(a)}
J.eY=function(a,b){return J.m(a).C(a,b)}
J.eZ=function(a){return J.m(a).gd8(a)}
J.ao=function(a){return J.B(a).gv(a)}
J.bD=function(a){return J.bY(a).gw(a)}
J.aX=function(a){return J.aT(a).gj(a)}
J.f_=function(a){return J.m(a).gdD(a)}
J.f0=function(a){return J.m(a).gdL(a)}
J.f1=function(a){return J.c_(a).gdR(a)}
J.bE=function(a){return J.c_(a).gab(a)}
J.c9=function(a){return J.c_(a).ga_(a)}
J.cN=function(a){return J.c_(a).gc_(a)}
J.ca=function(a,b){return J.m(a).T(a,b)}
J.f2=function(a){return J.m(a).ac(a)}
J.f3=function(a,b){return J.m(a).aA(a,b)}
J.f4=function(a,b,c){return J.m(a).aB(a,b,c)}
J.cO=function(a,b,c){return J.m(a).aF(a,b,c)}
J.f5=function(a,b){return J.m(a).bE(a,b)}
J.cP=function(a){return J.m(a).dF(a)}
J.f6=function(a,b){return J.bZ(a).c8(a,b)}
J.f7=function(a,b,c,d){return J.m(a).aJ(a,b,c,d)}
J.f8=function(a){return J.bZ(a).dM(a)}
J.bi=function(a){return J.B(a).k(a)}
J.f9=function(a,b,c,d){return J.m(a).dO(a,b,c,d)}
J.fa=function(a){return J.bZ(a).dP(a)}
J.fb=function(a,b,c){return J.m(a).bN(a,b,c)}
J.fc=function(a,b,c){return J.m(a).bO(a,b,c)}
J.cb=function(a,b,c){return J.m(a).bP(a,b,c)}
J.fd=function(a,b,c){return J.m(a).bQ(a,b,c)}
J.cQ=function(a,b,c){return J.m(a).bR(a,b,c)}
J.cR=function(a,b,c){return J.m(a).bS(a,b,c)}
J.cS=function(a,b,c){return J.m(a).bT(a,b,c)}
J.cT=function(a,b,c,d){return J.m(a).bU(a,b,c,d)}
J.cU=function(a,b,c,d){return J.m(a).bV(a,b,c,d)}
J.fe=function(a,b){return J.m(a).bW(a,b)}
J.ff=function(a,b,c){return J.m(a).dQ(a,b,c)}
J.fg=function(a,b,c,d,e,f,g){return J.m(a).bX(a,b,c,d,e,f,g)}
J.fh=function(a,b,c,d,e){return J.m(a).bZ(a,b,c,d,e)}
I.aI=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bF.prototype
C.J=W.ce.prototype
C.x=W.fy.prototype
C.p=W.fF.prototype
C.K=W.fG.prototype
C.L=W.fW.prototype
C.q=W.fX.prototype
C.y=W.fY.prototype
C.M=J.h.prototype
C.a=J.bm.prototype
C.z=J.df.prototype
C.f=J.dg.prototype
C.N=J.dh.prototype
C.r=J.bn.prototype
C.h=J.bo.prototype
C.U=J.bp.prototype
C.b=H.hz.prototype
C.m=H.hB.prototype
C.v=W.hC.prototype
C.C=J.hJ.prototype
C.D=W.hV.prototype
C.I=W.ij.prototype
C.w=J.b9.prototype
C.ae=W.aM.prototype
C.af=W.ix.prototype
C.e=new P.jv()
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
C.A=function(hooks) { return hooks; }

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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.n(I.aI(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.W=H.n(I.aI(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Y=H.n(I.aI([]),[P.z])
C.X=H.n(I.aI([]),[P.d])
C.t=H.n(I.aI(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.n(I.aI(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Z=new G.E("vec3","vertex btangents",0)
C.d=new G.E("vec3","",0)
C.a_=new G.E("vec4","delta from light",0)
C.n=new G.E("","",0)
C.E=new G.E("vec3","vertex coordinates",0)
C.a0=new G.E("vec3","vertex binormals",0)
C.F=new G.E("vec4","for wireframe",0)
C.a1=new G.E("vec4","per vertex color",0)
C.a2=new G.E("float","for normal maps",0)
C.j=new G.E("mat4","",0)
C.a4=new G.E("mat4","",4)
C.a3=new G.E("mat4","",128)
C.c=new G.E("float","",0)
C.a5=new G.E("float","",4)
C.a6=new G.E("float","depth for shadowmaps",0)
C.i=new G.E("sampler2D","",0)
C.a7=new G.E("float","for bump maps",0)
C.a8=new G.E("vec2","texture uvs",0)
C.a9=new G.E("float","time since program start in sec",0)
C.k=new G.E("vec2","",0)
C.aa=new G.E("samplerCube","",0)
C.l=new G.E("vec4","",0)
C.ab=new G.E("vec3","vertex normals",0)
C.ac=new G.E("sampler2DShadow","",0)
C.G=new G.E("vec3","per vertex color",0)
C.H=new G.E("mat3","",0)
C.ad=new G.E("vec3","vertex tangents",0)
$.aa=0
$.aY=null
$.cX=null
$.cu=!1
$.eg=null
$.ea=null
$.el=null
$.bX=null
$.c2=null
$.cB=null
$.aP=null
$.bb=null
$.bc=null
$.cv=!1
$.C=C.e
$.af=null
$.ch=null
$.d8=null
$.d7=null
$.d3=null
$.d2=null
$.d1=null
$.d0=null
$.ee=0
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
I.$lazy(y,x,w)}})(["l9","eq",function(){return H.ef("_$dart_dartClosure")},"lN","cF",function(){return H.ef("_$dart_js")},"my","es",function(){return H.ac(H.bO({
toString:function(){return"$receiver$"}}))},"mz","et",function(){return H.ac(H.bO({$method$:null,
toString:function(){return"$receiver$"}}))},"mA","eu",function(){return H.ac(H.bO(null))},"mB","ev",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mE","ey",function(){return H.ac(H.bO(void 0))},"mF","ez",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mD","ex",function(){return H.ac(H.dE(null))},"mC","ew",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"mH","eB",function(){return H.ac(H.dE(void 0))},"mG","eA",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mR","cG",function(){return P.iD()},"n6","bg",function(){return[]},"l6","ep",function(){return{}},"mY","eC",function(){return P.co(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mZ","cH",function(){return P.a4(P.d,P.bk)},"ml","er",function(){return new G.dD(1281,0,4294967295)},"l1","en",function(){return new G.dC(1281,1281,1281)},"n4","a8",function(){return P.dl(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.G,"aColorAlpha",C.a1,"aPosition",C.E,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.F,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.G,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.E,"vPositionFromLight",C.a_,"vCenter",C.F,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.aa,"uAnimationTable",C.i,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.E)},"l4","eo",function(){return T.iu(0.8,0.8,0.8)},"na","eE",function(){var z,y
z=G.dx("FixedVertexColorV")
y=[P.d]
z.ci(H.n(["aPosition"],y))
z.cl(H.n(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aL(H.n(["vColor"],y))
z.aR(H.n(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],y),H.n(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"n9","eD",function(){var z,y
z=G.dx("FixedVertexColorF")
y=[P.d]
z.aL(H.n(["vColor"],y))
z.cv(H.n(["oFragColor = vec4( vColor, 1.0 );"],y))
return z},"nb","eF",function(){return H.n([],[[P.Z,P.b]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.V]},{func:1,ret:P.R,args:[W.ab]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.d,args:[P.D]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.R,args:[P.d]},{func:1,ret:P.R,args:[W.T,P.d,P.d,W.bu]},{func:1,ret:P.z,args:[W.b2]},{func:1,args:[P.d]},{func:1,ret:P.z,args:[,P.Q]},{func:1,ret:P.z,args:[,],opt:[P.Q]},{func:1,ret:[P.P,,],args:[,]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.z,args:[P.F]},{func:1,args:[W.a0]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,args:[,,]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:P.z,args:[W.bq]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.aM]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:P.z,args:[P.d]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.z,args:[[P.a,,]]},{func:1,ret:P.D,args:[,,]},{func:1,args:[,P.d]},{func:1,ret:P.R,args:[W.u]}]
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
if(x==y)H.kV(d||a)
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
Isolate.aI=a.aI
Isolate.bd=a.bd
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
if(typeof dartMainRunner==="function")dartMainRunner(T.ei,[])
else T.ei([])})})()
//# sourceMappingURL=obj.dart.js.map
