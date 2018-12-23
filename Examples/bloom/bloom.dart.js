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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cx(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b8=function(){}
var dart=[["","",,H,{"^":"",lw:{"^":"b;a"}}],["","",,J,{"^":"",
cB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bY:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cA==null){H.kt()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dF("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cE()]
if(v!=null)return v
v=H.ky(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cE(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.aZ(a)},
k:["cl",function(a){return"Instance of '"+H.b_(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ha:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isQ:1},
dh:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isF:1},
cj:{"^":"h;",
gv:function(a){return 0},
k:["cn",function(a){return String(a)}]},
hI:{"^":"cj;"},
b1:{"^":"cj;"},
bm:{"^":"cj;",
k:function(a){var z=a[$.eq()]
if(z==null)return this.cn(a)
return"JavaScript function for "+H.e(J.bf(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbh:1},
bj:{"^":"h;$ti",
l:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.V(P.y("add"))
a.push(b)},
H:function(a,b){var z,y
H.w(b,"$isk",[H.p(a,0)],"$ask")
if(!!a.fixed$length)H.V(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.O)(b),++y)a.push(b[y])},
a6:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
bi:function(a,b){var z,y
H.l(b,{func:1,ret:P.Q,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aE(a))}return!1},
cf:function(a,b){if(!!a.immutable$list)H.V(P.y("sort"))
H.i5(a,J.k4(),H.p(a,0))},
aj:function(a){return this.cf(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aC(a[z],b))return!0
return!1},
k:function(a){return P.ch(a,"[","]")},
gw:function(a){return new J.fs(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.aZ(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.b7(a,b))
return a[b]},
h:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.V(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b7(a,b))
a[b]=c},
$isv:1,
$asv:I.b8,
$isk:1,
$isa:1,
p:{
h9:function(a,b){return J.ci(H.i(a,[b]))},
ci:function(a){H.bs(a)
a.fixed$length=Array
return a},
lu:[function(a,b){return J.eS(H.ej(a,"$isW"),H.ej(b,"$isW"))},"$2","k4",8,0,28]}},
lv:{"^":"bj;$ti"},
fs:{"^":"b;a,b,c,0d,$ti",
saZ:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.O(z))
x=this.c
if(x>=y){this.saZ(null)
return!1}this.saZ(z[x]);++this.c
return!0},
$isaU:1},
bk:{"^":"h;",
K:function(a,b){var z
H.cC(b)
if(typeof b!=="number")throw H.c(H.b5(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gah(b)
if(this.gah(a)===z)return 0
if(this.gah(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gah:function(a){return a===0?1/a<0:a<0},
bW:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.y(""+a+".toInt()"))},
dh:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.y(""+a+".ceil()"))},
di:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.b5(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dJ:function(a,b){var z
if(b>20)throw H.c(P.bJ(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gah(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
al:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bf(a,b)},
O:function(a,b){return(a|0)===a?a/b|0:this.bf(a,b)},
bf:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bd:function(a,b){var z
if(a>0)z=this.d4(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d4:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.c(H.b5(b))
return a>b},
$isW:1,
$asW:function(){return[P.D]},
$isX:1,
$isD:1},
dg:{"^":"bk;",$isB:1},
df:{"^":"bk;"},
bl:{"^":"h;",
aq:function(a,b){if(b>=a.length)throw H.c(H.b7(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.cU(b,null,null))
return a+b},
ci:function(a,b,c){var z
if(c>a.length)throw H.c(P.bJ(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cg:function(a,b){return this.ci(a,b,0)},
ck:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bK(b,null,null))
if(b>c)throw H.c(P.bK(b,null,null))
if(c>a.length)throw H.c(P.bK(c,null,null))
return a.substring(b,c)},
cj:function(a,b){return this.ck(a,b,null)},
dI:function(a){return a.toLowerCase()},
dj:function(a,b,c){if(c>a.length)throw H.c(P.bJ(c,0,a.length,null,null))
return H.kF(a,b,c)},
K:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.c(H.b5(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.c(H.b7(a,b))
return a[b]},
$isv:1,
$asv:I.b8,
$isW:1,
$asW:function(){return[P.d]},
$ishG:1,
$isd:1}}],["","",,H,{"^":"",
h7:function(){return new P.co("No element")},
h8:function(){return new P.co("Too many elements")},
i5:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.l(b,{func:1,ret:P.B,args:[c,c]})
H.bn(a,0,J.aP(a)-1,b,c)},
bn:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.i4(a,b,c,d,e)
else H.i3(a,b,c,d,e)},
i4:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.b9(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a6(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
i3:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.l(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.b.O(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.O(b+a0,2)
v=w-z
u=w+z
t=J.b9(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.a6(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a6(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a6(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a6(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a6(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a6(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a6(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a6(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a6(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aC(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a8()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.T()
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
if(typeof e!=="number")return e.a8()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.T()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a8()
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
H.bn(a,b,m-2,a1,a2)
H.bn(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aC(a1.$2(t.i(a,m),r),0);)++m
for(;J.aC(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a8()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bn(a,m,l,a1,a2)}else H.bn(a,m,l,a1,a2)},
d4:{"^":"k;"},
bH:{"^":"d4;$ti",
gw:function(a){return new H.dl(this,this.gj(this),0,[H.cz(this,"bH",0)])},
aH:function(a,b){return this.cm(0,H.l(b,{func:1,ret:P.Q,args:[H.cz(this,"bH",0)]}))}},
dl:{"^":"b;a,b,c,0d,$ti",
sb_:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.b9(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aE(z))
w=this.c
if(w>=x){this.sb_(null)
return!1}this.sb_(y.q(z,w));++this.c
return!0},
$isaU:1},
hl:{"^":"bH;a,b,$ti",
gj:function(a){return J.aP(this.a)},
q:function(a,b){return this.b.$1(J.f1(this.a,b))},
$asbH:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dG:{"^":"k;a,b,$ti",
gw:function(a){return new H.iv(J.by(this.a),this.b,this.$ti)}},
iv:{"^":"aU;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bG:{"^":"b;$ti"}}],["","",,H,{"^":"",
aB:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kl:function(a){return init.types[H.M(a)]},
kw:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bf(a)
if(typeof z!=="string")throw H.c(H.b5(a))
return z},
aZ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b_:function(a){return H.hJ(a)+H.bR(H.ae(a),0,null)},
hJ:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb1){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aB(w.length>1&&C.i.aq(w,0)===36?C.i.cj(w,1):w)},
aF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hQ:function(a){var z=H.aF(a).getFullYear()+0
return z},
hO:function(a){var z=H.aF(a).getMonth()+1
return z},
hK:function(a){var z=H.aF(a).getDate()+0
return z},
hL:function(a){var z=H.aF(a).getHours()+0
return z},
hN:function(a){var z=H.aF(a).getMinutes()+0
return z},
hP:function(a){var z=H.aF(a).getSeconds()+0
return z},
hM:function(a){var z=H.aF(a).getMilliseconds()+0
return z},
aA:function(a){throw H.c(H.b5(a))},
m:function(a,b){if(a==null)J.aP(a)
throw H.c(H.b7(a,b))},
b7:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
z=H.M(J.aP(a))
if(!(b<0)){if(typeof z!=="number")return H.aA(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bK(b,"index",null)},
b5:function(a){return new P.aD(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.ds()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.bf(this.dartException)},
V:function(a){throw H.c(a)},
O:function(a){throw H.c(P.aE(a))},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bd(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ck(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dr(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.et()
u=$.eu()
t=$.ev()
s=$.ew()
r=$.ez()
q=$.eA()
p=$.ey()
$.ex()
o=$.eC()
n=$.eB()
m=v.I(y)
if(m!=null)return z.$1(H.ck(H.u(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.ck(H.u(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dr(H.u(y),m))}}return z.$1(new H.ir(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dv()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aD(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dv()
return a},
bb:function(a){var z
if(a==null)return new H.dW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dW(a)},
kh:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
kv:function(a,b,c,d,e,f){H.f(a,"$isbh")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d8("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kv)
a.$identity=z
return z},
fE:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hU(z).r}else x=d
w=e?Object.create(new H.i7().constructor.prototype):Object.create(new H.ca(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a7
if(typeof u!=="number")return u.G()
$.a7=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cZ(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kl,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cX:H.cb
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cZ(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fB:function(a,b,c,d){var z=H.cb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fD(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fB(y,!w,z,b)
if(y===0){w=$.a7
if(typeof w!=="number")return w.G()
$.a7=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aQ
if(v==null){v=H.bC("self")
$.aQ=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a7
if(typeof w!=="number")return w.G()
$.a7=w+1
t+=w
w="return function("+t+"){return this."
v=$.aQ
if(v==null){v=H.bC("self")
$.aQ=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fC:function(a,b,c,d){var z,y
z=H.cb
y=H.cX
switch(b?-1:a){case 0:throw H.c(H.hY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fD:function(a,b){var z,y,x,w,v,u,t,s
z=$.aQ
if(z==null){z=H.bC("self")
$.aQ=z}y=$.cW
if(y==null){y=H.bC("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fC(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a7
if(typeof y!=="number")return y.G()
$.a7=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a7
if(typeof y!=="number")return y.G()
$.a7=y+1
return new Function(z+y+"}")()},
cx:function(a,b,c,d,e,f,g){return H.fE(a,b,H.M(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a2(a,"String"))},
eb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"double"))},
cC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"num"))},
bU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a2(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a2(a,"int"))},
cD:function(a,b){throw H.c(H.a2(a,H.aB(H.u(b).substring(3))))},
kD:function(a,b){throw H.c(H.cY(a,H.aB(H.u(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cD(a,b)},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.kD(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cD(a,b)},
bs:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a2(a,"List<dynamic>"))},
kx:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cD(a,b)},
cy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
br:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cy(J.A(a))
if(z==null)return!1
return H.e1(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.ct)return a
$.ct=!0
try{if(H.br(a,b))return a
z=H.bt(b)
y=H.a2(a,z)
throw H.c(y)}finally{$.ct=!1}},
bW:function(a,b){if(a!=null&&!H.cw(a,b))H.V(H.a2(a,H.bt(b)))
return a},
e5:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cy(z)
if(y!=null)return H.bt(y)
return"Closure"}return H.b_(a)},
kG:function(a){throw H.c(new P.fK(H.u(a)))},
ef:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
ae:function(a){if(a==null)return
return a.$ti},
mY:function(a,b,c){return H.aO(a["$as"+H.e(c)],H.ae(b))},
ba:function(a,b,c,d){var z
H.u(c)
H.M(d)
z=H.aO(a["$as"+H.e(c)],H.ae(b))
return z==null?null:z[d]},
cz:function(a,b,c){var z
H.u(b)
H.M(c)
z=H.aO(a["$as"+H.e(b)],H.ae(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.M(b)
z=H.ae(a)
return z==null?null:z[b]},
bt:function(a){return H.az(a,null)},
az:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aB(a[0].builtin$cls)+H.bR(a,1,b)
if(typeof a=="function")return H.aB(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.m(b,y)
return H.e(b[y])}if('func' in a)return H.k3(a,b)
if('futureOr' in a)return"FutureOr<"+H.az("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.m(b,r)
t=C.i.G(t,b[r])
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
for(z=H.kg(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.az(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bR:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.az(u,c)}return"<"+z.k(0)+">"},
kk:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cy(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ae(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aL:function(a,b,c,d){var z,y
H.u(b)
H.bs(c)
H.u(d)
if(a==null)return!1
z=H.ae(a)
y=J.A(a)
if(y[b]==null)return!1
return H.e8(H.aO(y[d],z),null,c,null)},
bu:function(a,b,c,d){H.u(b)
H.bs(c)
H.u(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aB(b.substring(3))+H.bR(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.u(b)
H.bs(c)
H.u(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aB(b.substring(3))+H.bR(c,0,null),init.mangledGlobalNames)))},
e8:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.Z(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b,c[y],d))return!1
return!0},
mU:function(a,b,c){return a.apply(b,H.aO(J.A(b)["$as"+H.e(c)],H.ae(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.eh(z)}return!1},
cw:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.br(a,b)}z=J.A(a).constructor
y=H.ae(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.Z(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cw(a,b))throw H.c(H.a2(a,H.bt(b)))
return a},
Z:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.Z(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.e1(a,b,c,d)
if('func' in a)return c.builtin$cls==="bh"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.Z("type" in a?a.type:null,b,x,d)
else if(H.Z(a,b,x,d))return!0
else{if(!('$is'+"aT" in y.prototype))return!1
w=y.prototype["$as"+"aT"]
v=H.aO(w,z?a.slice(1):null)
return H.Z(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e8(H.aO(r,z),b,u,d)},
e1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.Z(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.Z(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.Z(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.Z(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kC(m,b,l,d)},
kC:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.Z(c[w],d,a[w],b))return!1}return!0},
mV:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
ky:function(a){var z,y,x,w,v,u
z=H.u($.eg.$1(a))
y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.e7.$2(a,z))
if(z!=null){y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c0(x)
$.bV[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c_[z]=x
return x}if(v==="-"){u=H.c0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ek(a,x)
if(v==="*")throw H.c(P.dF(z))
if(init.leafTags[z]===true){u=H.c0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c0:function(a){return J.cB(a,!1,null,!!a.$isx)},
kA:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c0(z)
else return J.cB(z,c,null,null)},
kt:function(){if(!0===$.cA)return
$.cA=!0
H.ku()},
ku:function(){var z,y,x,w,v,u,t,s
$.bV=Object.create(null)
$.c_=Object.create(null)
H.kp()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kA(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kp:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aK(C.M,H.aK(C.R,H.aK(C.y,H.aK(C.y,H.aK(C.Q,H.aK(C.N,H.aK(C.O(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eg=new H.kq(v)
$.e7=new H.kr(u)
$.el=new H.ks(t)},
aK:function(a,b){return a(b)||b},
kF:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hT:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hU:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ci(z)
y=z[0]
x=z[1]
return new H.hT(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ik:{"^":"b;a,b,c,d,e,f",
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
a9:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.i([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ik(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dB:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hD:{"^":"P;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dr:function(a,b){return new H.hD(a,b==null?null:b.method)}}},
hb:{"^":"P;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
ck:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hb(a,y,z?null:b.receiver)}}},
ir:{"^":"P;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kH:{"^":"n:5;a",
$1:function(a){if(!!J.A(a).$isP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dW:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa1:1},
n:{"^":"b;",
k:function(a){return"Closure '"+H.b_(this).trim()+"'"},
gc9:function(){return this},
$isbh:1,
gc9:function(){return this}},
dx:{"^":"n;"},
i7:{"^":"dx;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aB(z)+"'"}},
ca:{"^":"dx;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ca))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aZ(this.a)
else y=typeof z!=="object"?J.ag(z):H.aZ(z)
return(y^H.aZ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b_(z)+"'")},
p:{
cb:function(a){return a.a},
cX:function(a){return a.c},
bC:function(a){var z,y,x,w,v
z=new H.ca("self","target","receiver","name")
y=J.ci(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
il:{"^":"P;a",
k:function(a){return this.a},
p:{
a2:function(a,b){return new H.il("TypeError: "+P.bE(a)+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
fz:{"^":"P;a",
k:function(a){return this.a},
p:{
cY:function(a,b){return new H.fz("CastError: "+P.bE(a)+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
hX:{"^":"P;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hY:function(a){return new H.hX(a)}}},
dC:{"^":"b;a,0b,0c,0d",
gae:function(){var z=this.b
if(z==null){z=H.bt(this.a)
this.b=z}return z},
k:function(a){return this.gae()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gae())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dC&&this.gae()===b.gae()}},
di:{"^":"dm;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gE:function(a){return new H.al(this,[H.p(this,0)])},
ag:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cP(z,b)}else{y=this.dw(b)
return y}},
dw:function(a){var z=this.d
if(z==null)return!1
return this.aD(this.aw(z,J.ag(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ac(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ac(w,b)
x=y==null?null:y.b
return x}else return this.dz(b)},
dz:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aw(z,J.ag(a)&0x3ffffff)
x=this.aD(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ay()
this.b=z}this.b0(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ay()
this.c=y}this.b0(y,b,c)}else{x=this.d
if(x==null){x=this.ay()
this.d=x}w=J.ag(b)&0x3ffffff
v=this.aw(x,w)
if(v==null)this.aB(x,w,[this.ao(b,c)])
else{u=this.aD(v,b)
if(u>=0)v[u].b=c
else v.push(this.ao(b,c))}}},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aE(this))
z=z.c}},
b0:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.ac(a,b)
if(z==null)this.aB(a,b,this.ao(b,c))
else z.b=c},
b2:function(){this.r=this.r+1&67108863},
ao:function(a,b){var z,y
z=new H.hg(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b2()
return z},
aD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aC(a[y].a,b))return y
return-1},
k:function(a){return P.dn(this)},
ac:function(a,b){return a[b]},
aw:function(a,b){return a[b]},
aB:function(a,b,c){a[b]=c},
cQ:function(a,b){delete a[b]},
cP:function(a,b){return this.ac(a,b)!=null},
ay:function(){var z=Object.create(null)
this.aB(z,"<non-identifier-key>",z)
this.cQ(z,"<non-identifier-key>")
return z},
$isdj:1},
hg:{"^":"b;a,b,0c,0d"},
al:{"^":"d4;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hh(z,z.r,this.$ti)
y.c=z.e
return y}},
hh:{"^":"b;a,b,0c,0d,$ti",
sb1:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aE(z))
else{z=this.c
if(z==null){this.sb1(null)
return!1}else{this.sb1(z.a)
this.c=this.c.c
return!0}}},
$isaU:1},
kq:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
kr:{"^":"n:13;a",
$2:function(a,b){return this.a(a,b)}},
ks:{"^":"n:14;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
kg:function(a){return J.h9(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c1:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bQ:function(a){var z,y
if(!!J.A(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b7(b,a))},
hy:{"^":"h;",$isim:1,"%":"DataView;ArrayBufferView;cm|dQ|dR|dp|dS|dT|ao"},
cm:{"^":"hy;",
gj:function(a){return a.length},
$isv:1,
$asv:I.b8,
$isx:1,
$asx:I.b8},
dp:{"^":"dR;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
h:function(a,b,c){H.eb(c)
H.ab(b,a,a.length)
a[b]=c},
$asbG:function(){return[P.X]},
$aso:function(){return[P.X]},
$isk:1,
$ask:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
"%":"Float64Array"},
ao:{"^":"dT;",
h:function(a,b,c){H.M(c)
H.ab(b,a,a.length)
a[b]=c},
$asbG:function(){return[P.B]},
$aso:function(){return[P.B]},
$isk:1,
$ask:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
hx:{"^":"dp;",$isad:1,"%":"Float32Array"},
lF:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lG:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ish5:1,
"%":"Int32Array"},
lH:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lI:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hz:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ismt:1,
"%":"Uint32Array"},
lJ:{"^":"ao;",
gj:function(a){return a.length},
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lK:{"^":"ao;",
gj:function(a){return a.length},
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dQ:{"^":"cm+o;"},
dR:{"^":"dQ+bG;"},
dS:{"^":"cm+o;"},
dT:{"^":"dS+bG;"}}],["","",,P,{"^":"",
iz:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b6(new P.iB(z),1)).observe(y,{childList:true})
return new P.iA(z,y,x)}else if(self.setImmediate!=null)return P.kc()
return P.kd()},
mD:[function(a){self.scheduleImmediate(H.b6(new P.iC(H.l(a,{func:1,ret:-1})),0))},"$1","kb",4,0,4],
mE:[function(a){self.setImmediate(H.b6(new P.iD(H.l(a,{func:1,ret:-1})),0))},"$1","kc",4,0,4],
mF:[function(a){H.l(a,{func:1,ret:-1})
P.jM(0,a)},"$1","kd",4,0,4],
k7:function(a,b){if(H.br(a,{func:1,args:[P.b,P.a1]}))return H.l(a,{func:1,ret:null,args:[P.b,P.a1]})
if(H.br(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k6:function(){var z,y
for(;z=$.aJ,z!=null;){$.b4=null
y=z.b
$.aJ=y
if(y==null)$.b3=null
z.a.$0()}},
mR:[function(){$.cu=!0
try{P.k6()}finally{$.b4=null
$.cu=!1
if($.aJ!=null)$.cF().$1(P.e9())}},"$0","e9",0,0,1],
e4:function(a){var z=new P.dI(H.l(a,{func:1,ret:-1}))
if($.aJ==null){$.b3=z
$.aJ=z
if(!$.cu)$.cF().$1(P.e9())}else{$.b3.b=z
$.b3=z}},
ka:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aJ
if(z==null){P.e4(a)
$.b4=$.b3
return}y=new P.dI(a)
x=$.b4
if(x==null){y.b=z
$.b4=y
$.aJ=y}else{y.b=x.b
x.b=y
$.b4=y
if(y.b==null)$.b3=y}},
kE:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.H
if(C.e===y){P.bT(null,null,C.e,a)
return}y.toString
P.bT(null,null,y,H.l(y.bl(a),z))},
bS:function(a,b,c,d,e){var z={}
z.a=d
P.ka(new P.k8(z,e))},
e2:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.H
if(y===c)return d.$0()
$.H=c
z=y
try{y=d.$0()
return y}finally{$.H=z}},
e3:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.H
if(y===c)return d.$1(e)
$.H=c
z=y
try{y=d.$1(e)
return y}finally{$.H=z}},
k9:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.H
if(y===c)return d.$2(e,f)
$.H=c
z=y
try{y=d.$2(e,f)
return y}finally{$.H=z}},
bT:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bl(d):c.de(d,-1)
P.e4(d)},
iB:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iA:{"^":"n:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iC:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iD:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jL:{"^":"b;a,0b,c",
cL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b6(new P.jN(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
p:{
jM:function(a,b){var z=new P.jL(!0,0)
z.cL(a,b)
return z}}},
jN:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iG:{"^":"b;$ti"},
jG:{"^":"iG;a,$ti"},
aI:{"^":"b;0a,b,c,d,e,$ti",
dA:function(a){if(this.c!==6)return!0
return this.b.b.aF(H.l(this.d,{func:1,ret:P.Q,args:[P.b]}),a.a,P.Q,P.b)},
dv:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.br(z,{func:1,args:[P.b,P.a1]}))return H.bW(w.dD(z,a.a,a.b,null,y,P.a1),x)
else return H.bW(w.aF(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aa:{"^":"b;be:a<,b,0d1:c<,$ti",
bV:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.e){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k7(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aa(0,$.H,[c])
w=b==null?1:3
this.b4(new P.aI(x,w,a,b,[z,c]))
return x},
bU:function(a,b){return this.bV(a,null,b)},
b4:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaI")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaa")
z=y.a
if(z<4){y.b4(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bT(null,null,z,H.l(new P.iV(this,a),{func:1,ret:-1}))}},
bb:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaI")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaa")
y=u.a
if(y<4){u.bb(a)
return}this.a=y
this.c=u.c}z.a=this.ad(a)
y=this.b
y.toString
P.bT(null,null,y,H.l(new P.j_(z,this),{func:1,ret:-1}))}},
aA:function(){var z=H.f(this.c,"$isaI")
this.c=null
return this.ad(z)},
ad:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ar:function(a){var z,y,x
z=H.p(this,0)
H.bW(a,{futureOr:1,type:z})
y=this.$ti
if(H.aL(a,"$isaT",y,"$asaT"))if(H.aL(a,"$isaa",y,null))P.dL(a,this)
else P.iW(a,this)
else{x=this.aA()
H.z(a,z)
this.a=4
this.c=a
P.b2(this,x)}},
b6:function(a,b){var z
H.f(b,"$isa1")
z=this.aA()
this.a=8
this.c=new P.Y(a,b)
P.b2(this,z)},
$isaT:1,
p:{
iW:function(a,b){var z,y,x
b.a=1
try{a.bV(new P.iX(b),new P.iY(b),null)}catch(x){z=H.a4(x)
y=H.bb(x)
P.kE(new P.iZ(b,z,y))}},
dL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaa")
if(z>=4){y=b.aA()
b.a=a.a
b.c=a.c
P.b2(b,y)}else{y=H.f(b.c,"$isaI")
b.a=2
b.c=a
a.bb(y)}},
b2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isY")
y=y.b
u=v.a
t=v.b
y.toString
P.bS(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b2(z.a,b)}y=z.a
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
if(p){H.f(r,"$isY")
y=y.b
u=r.a
t=r.b
y.toString
P.bS(null,null,y,u,t)
return}o=$.H
if(o!=q)$.H=q
else o=null
y=b.c
if(y===8)new P.j2(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j1(x,b,r).$0()}else if((y&2)!==0)new P.j0(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.A(y).$isaT){if(y.a>=4){n=H.f(t.c,"$isaI")
t.c=null
b=t.ad(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dL(y,t)
return}}m=b.b
n=H.f(m.c,"$isaI")
m.c=null
b=m.ad(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.f(u,"$isY")
m.a=8
m.c=u}z.a=m
y=m}}}},
iV:{"^":"n:0;a,b",
$0:function(){P.b2(this.a,this.b)}},
j_:{"^":"n:0;a,b",
$0:function(){P.b2(this.b,this.a.a)}},
iX:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.ar(a)}},
iY:{"^":"n:16;a",
$2:function(a,b){H.f(b,"$isa1")
this.a.b6(a,b)},
$1:function(a){return this.$2(a,null)}},
iZ:{"^":"n:0;a,b,c",
$0:function(){this.a.b6(this.b,this.c)}},
j2:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bR(H.l(w.d,{func:1}),null)}catch(v){y=H.a4(v)
x=H.bb(v)
if(this.d){w=H.f(this.a.a.c,"$isY").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isY")
else u.b=new P.Y(y,x)
u.a=!0
return}if(!!J.A(z).$isaT){if(z instanceof P.aa&&z.gbe()>=4){if(z.gbe()===8){w=this.b
w.b=H.f(z.gd1(),"$isY")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bU(new P.j3(t),null)
w.a=!1}}},
j3:{"^":"n:17;a",
$1:function(a){return this.a}},
j1:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.aF(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a4(t)
y=H.bb(t)
x=this.a
x.b=new P.Y(z,y)
x.a=!0}}},
j0:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isY")
w=this.c
if(w.dA(z)&&w.e!=null){v=this.b
v.b=w.dv(z)
v.a=!1}}catch(u){y=H.a4(u)
x=H.bb(u)
w=H.f(this.a.a.c,"$isY")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Y(y,x)
s.a=!0}}},
dI:{"^":"b;a,0b"},
ib:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.aa(0,$.H,[P.B])
z.a=0
x=H.p(this,0)
w=H.l(new P.id(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.ie(z,y),{func:1,ret:-1})
W.aH(this.a,this.b,w,!1,x)
return y}},
id:{"^":"n;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.p(this.b,0)]}}},
ie:{"^":"n:0;a,b",
$0:function(){this.b.ar(this.a.a)}},
ic:{"^":"b;"},
Y:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isP:1},
jT:{"^":"b;",$ismB:1},
k8:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ds()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jp:{"^":"jT;",
dE:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.e2(null,null,this,a,-1)}catch(x){z=H.a4(x)
y=H.bb(x)
P.bS(null,null,this,z,H.f(y,"$isa1"))}},
dF:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.e3(null,null,this,a,b,-1,c)}catch(x){z=H.a4(x)
y=H.bb(x)
P.bS(null,null,this,z,H.f(y,"$isa1"))}},
de:function(a,b){return new P.jr(this,H.l(a,{func:1,ret:b}),b)},
bl:function(a){return new P.jq(this,H.l(a,{func:1,ret:-1}))},
df:function(a,b){return new P.js(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bR:function(a,b){H.l(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.e2(null,null,this,a,b)},
aF:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.H===C.e)return a.$1(b)
return P.e3(null,null,this,a,b,c,d)},
dD:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.H===C.e)return a.$2(b,c)
return P.k9(null,null,this,a,b,c,d,e,f)}},
jr:{"^":"n;a,b,c",
$0:function(){return this.a.bR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jq:{"^":"n:1;a,b",
$0:function(){return this.a.dE(this.b)}},
js:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dF(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dk:function(a,b,c){H.bs(a)
return H.w(H.kh(a,new H.di(0,0,[b,c])),"$isdj",[b,c],"$asdj")},
N:function(a,b){return new H.di(0,0,[a,b])},
a0:function(a,b,c,d){return new P.ja(0,0,[d])},
h6:function(a,b,c){var z,y
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.i([],[P.d])
y=$.bc()
C.a.l(y,a)
try{P.k5(a,z)}finally{if(0>=y.length)return H.m(y,-1)
y.pop()}y=P.dw(b,H.kx(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
ch:function(a,b,c){var z,y,x
if(P.cv(a))return b+"..."+c
z=new P.cq(b)
y=$.bc()
C.a.l(y,a)
try{x=z
x.a=P.dw(x.gV(),a,", ")}finally{if(0>=y.length)return H.m(y,-1)
y.pop()}y=z
y.a=y.gV()+c
y=z.gV()
return y.charCodeAt(0)==0?y:y},
cv:function(a){var z,y
for(z=0;y=$.bc(),z<y.length;++z)if(a===y[z])return!0
return!1},
k5:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.m(b,-1)
v=b.pop()
if(0>=b.length)return H.m(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.m(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.m(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cl:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.O)(a),++x)z.l(0,H.z(a[x],b))
return z},
dn:function(a){var z,y,x
z={}
if(P.cv(a))return"{...}"
y=new P.cq("")
try{C.a.l($.bc(),a)
x=y
x.a=x.gV()+"{"
z.a=!0
J.f4(a,new P.hk(z,y))
z=y
z.a=z.gV()+"}"}finally{z=$.bc()
if(0>=z.length)return H.m(z,-1)
z.pop()}z=y.gV()
return z.charCodeAt(0)==0?z:z},
ja:{"^":"j5;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dP(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbq")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbq")!=null}else return this.cO(b)},
cO:function(a){var z=this.d
if(z==null)return!1
return this.av(this.b9(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cs()
this.b=z}return this.b3(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cs()
this.c=y}return this.b3(y,b)}else return this.cM(0,b)},
cM:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cs()
this.d=z}y=this.b7(b)
x=z[y]
if(x==null)z[y]=[this.az(b)]
else{if(this.av(x,b)>=0)return!1
x.push(this.az(b))}return!0},
bQ:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bc(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bc(this.c,b)
else return this.cX(0,b)},
cX:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b9(z,b)
x=this.av(y,b)
if(x<0)return!1
this.bg(y.splice(x,1)[0])
return!0},
a5:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ax()}},
b3:function(a,b){H.z(b,H.p(this,0))
if(H.f(a[b],"$isbq")!=null)return!1
a[b]=this.az(b)
return!0},
bc:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbq")
if(z==null)return!1
this.bg(z)
delete a[b]
return!0},
ax:function(){this.r=this.r+1&67108863},
az:function(a){var z,y
z=new P.bq(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ax()
return z},
bg:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ax()},
b7:function(a){return J.ag(a)&0x3ffffff},
b9:function(a,b){return a[this.b7(b)]},
av:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aC(a[y].a,b))return y
return-1},
p:{
cs:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bq:{"^":"b;a,0b,0c"},
dP:{"^":"b;a,b,0c,0d,$ti",
sb5:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aE(z))
else{z=this.c
if(z==null){this.sb5(null)
return!1}else{this.sb5(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaU:1,
p:{
jb:function(a,b,c){var z=new P.dP(a,b,[c])
z.c=a.e
return z}}},
j5:{"^":"hZ;"},
hi:{"^":"jc;",$isk:1,$isa:1},
o:{"^":"b;$ti",
gw:function(a){return new H.dl(a,this.gj(a),0,[H.ba(this,a,"o",0)])},
q:function(a,b){return this.i(a,b)},
du:function(a,b,c,d){var z,y,x
H.z(b,d)
H.l(c,{func:1,ret:d,args:[d,H.ba(this,a,"o",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gj(a))throw H.c(P.aE(a))}return y},
k:function(a){return P.ch(a,"[","]")}},
dm:{"^":"S;"},
hk:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
S:{"^":"b;$ti",
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.ba(this,a,"S",0),H.ba(this,a,"S",1)]})
for(z=J.by(this.gE(a));z.t();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gj:function(a){return J.aP(this.gE(a))},
k:function(a){return P.dn(a)},
$isI:1},
i_:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.by(H.w(b,"$isk",this.$ti,"$ask"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.ch(this,"{","}")},
$isk:1,
$ism1:1},
hZ:{"^":"i_;"},
jc:{"^":"b+o;"}}],["","",,P,{"^":"",
fX:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.b_(a)+"'"},
bE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bf(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fX(a)},
d8:function(a){return new P.iS(a)},
aN:function(a){H.c1(H.e(a))},
Q:{"^":"b;"},
"+bool":0,
bD:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bD&&this.a===b.a&&!0},
K:function(a,b){return C.b.K(this.a,H.f(b,"$isbD").a)},
gv:function(a){var z=this.a
return(z^C.b.bd(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fL(H.hQ(this))
y=P.bg(H.hO(this))
x=P.bg(H.hK(this))
w=P.bg(H.hL(this))
v=P.bg(H.hN(this))
u=P.bg(H.hP(this))
t=P.fM(H.hM(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isW:1,
$asW:function(){return[P.bD]},
p:{
fL:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bg:function(a){if(a>=10)return""+a
return"0"+a}}},
X:{"^":"D;"},
"+double":0,
aR:{"^":"b;a",
T:function(a,b){return C.b.T(this.a,H.f(b,"$isaR").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,H.f(b,"$isaR").a)},
k:function(a){var z,y,x,w,v
z=new P.fU()
y=this.a
if(y<0)return"-"+new P.aR(0-y).k(0)
x=z.$1(C.b.O(y,6e7)%60)
w=z.$1(C.b.O(y,1e6)%60)
v=new P.fT().$1(y%1e6)
return""+C.b.O(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isW:1,
$asW:function(){return[P.aR]},
p:{
fS:function(a,b,c,d,e,f){return new P.aR(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fT:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fU:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
P:{"^":"b;"},
ds:{"^":"P;",
k:function(a){return"Throw of null."}},
aD:{"^":"P;a,b,c,d",
gat:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gas:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gat()+y+x
if(!this.a)return w
v=this.gas()
u=P.bE(this.b)
return w+v+": "+u},
p:{
cU:function(a,b,c){return new P.aD(!0,a,b,c)}}},
dt:{"^":"aD;e,f,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bK:function(a,b,c){return new P.dt(null,null,!0,a,b,"Value not in range")},
bJ:function(a,b,c,d,e){return new P.dt(b,c,!0,a,d,"Invalid value")}}},
h4:{"^":"aD;e,j:f>,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a8()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
E:function(a,b,c,d,e){var z=H.M(e==null?J.aP(b):e)
return new P.h4(b,z,!0,a,c,"Index out of range")}}},
is:{"^":"P;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.is(a)}}},
iq:{"^":"P;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dF:function(a){return new P.iq(a)}}},
co:{"^":"P;a",
k:function(a){return"Bad state: "+this.a},
p:{
cp:function(a){return new P.co(a)}}},
fF:{"^":"P;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bE(z)+"."},
p:{
aE:function(a){return new P.fF(a)}}},
dv:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isP:1},
fK:{"^":"P;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iS:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bh:{"^":"b;"},
B:{"^":"D;"},
"+int":0,
k:{"^":"b;$ti",
aH:["cm",function(a,b){var z=H.cz(this,"k",0)
return new H.dG(this,H.l(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.V(P.bJ(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
k:function(a){return P.h6(this,"(",")")}},
aU:{"^":"b;$ti"},
a:{"^":"b;$ti",$isk:1},
"+List":0,
I:{"^":"b;$ti"},
F:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isW:1,
$asW:function(){return[P.D]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.aZ(this)},
k:function(a){return"Instance of '"+H.b_(this)+"'"},
toString:function(){return this.k(this)}},
a1:{"^":"b;"},
d:{"^":"b;",$isW:1,
$asW:function(){return[P.d]},
$ishG:1},
"+String":0,
cq:{"^":"b;V:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dw:function(a,b,c){var z=J.by(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
ea:function(){return document},
fV:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.t
z=new H.dG(new W.a3(y),H.l(new W.fW(),{func:1,ret:P.Q,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.V(H.h7())
w=x.gA(x)
if(x.t())H.V(H.h8())
return H.f(w,"$isR")},
d7:function(a){H.f(a,"$isK")
return"wheel"},
aS:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f7(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a4(x)}return z},
iP:function(a,b){return document.createElement(a)},
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
if("postMessage" in a){z=W.iJ(a)
if(!!J.A(z).$isK)return z
return}else return H.f(a,"$isK")},
e6:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.e)return a
return z.df(a,b)},
J:{"^":"R;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kI:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fq:{"^":"J;",
k:function(a){return String(a)},
$isfq:1,
"%":"HTMLAnchorElement"},
kJ:{"^":"J;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"J;",$iscV:1,"%":"HTMLBaseElement"},
fv:{"^":"h;","%":";Blob"},
bB:{"^":"J;",$isbB:1,"%":"HTMLBodyElement"},
cc:{"^":"J;0n:height=,0m:width=",
ca:function(a,b,c){var z=this.cT(a,b,P.ke(c,null))
return z},
cT:function(a,b,c){return a.getContext(b,c)},
$iscc:1,
"%":"HTMLCanvasElement"},
kO:{"^":"h;",
ai:function(a){return P.a_(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kP:{"^":"t;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fG:{"^":"cd;",$isfG:1,"%":"CSSNumericValue|CSSUnitValue"},
kR:{"^":"fJ;0j:length=","%":"CSSPerspective"},
ah:{"^":"h;",$isah:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fH:{"^":"iH;0j:length=",
aL:function(a,b){var z=this.cU(a,this.ap(a,b))
return z==null?"":z},
ap:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.d5(a,b)
z[b]=y
return y},
d5:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fN()+b
if(z in a)return z
return b},
cU:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fI:{"^":"b;",
gn:function(a){return this.aL(a,"height")},
gm:function(a){return this.aL(a,"width")}},
cd:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fJ:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kT:{"^":"cd;0j:length=","%":"CSSTransformValue"},
kU:{"^":"cd;0j:length=","%":"CSSUnparsedValue"},
kW:{"^":"h;0j:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fO:{"^":"J;","%":"HTMLDivElement"},
fP:{"^":"t;",
d8:function(a,b){return a.adoptNode(b)},
cb:function(a,b){return a.getElementById(b)},
aE:function(a,b){return a.querySelector(b)},
gbM:function(a){return new W.bo(a,"mousedown",!1,[W.T])},
gbN:function(a){return new W.bo(a,"mousemove",!1,[W.T])},
gbO:function(a){return new W.bo(a,"mouseup",!1,[W.T])},
gbP:function(a){return new W.bo(a,H.u(W.d7(a)),!1,[W.aG])},
"%":"XMLDocument;Document"},
kX:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fQ:{"^":"h;",
dm:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kY:{"^":"iL;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.w(c,"$isU",[P.D],"$asU")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.U,P.D]]},
$isx:1,
$asx:function(){return[[P.U,P.D]]},
$aso:function(){return[[P.U,P.D]]},
$isk:1,
$ask:function(){return[[P.U,P.D]]},
$isa:1,
$asa:function(){return[[P.U,P.D]]},
$asq:function(){return[[P.U,P.D]]},
"%":"ClientRectList|DOMRectList"},
fR:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isU",[P.D],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isU:1,
$asU:function(){return[P.D]},
"%":";DOMRectReadOnly"},
kZ:{"^":"iN;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$aso:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
l_:{"^":"h;0j:length=","%":"DOMTokenList"},
R:{"^":"t;0dG:tagName=",
gdc:function(a){return new W.iO(a)},
k:function(a){return a.localName},
L:["ak",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d6
if(z==null){z=H.i([],[W.a8])
y=new W.dq(z)
C.a.l(z,W.dM(null))
C.a.l(z,W.dX())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.e_(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.ac==null){z=document
y=z.implementation
y=(y&&C.I).dm(y,"")
$.ac=y
$.ce=y.createRange()
y=$.ac
y.toString
y=y.createElement("base")
H.f(y,"$iscV")
y.href=z.baseURI
z=$.ac.head;(z&&C.J).F(z,y)}z=$.ac
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbB")}z=$.ac
if(!!this.$isbB)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ac.body;(z&&C.p).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.U,a.tagName)){z=$.ce;(z&&C.B).cc(z,x)
z=$.ce
w=(z&&C.B).dk(z,b)}else{x.innerHTML=b
w=$.ac.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.ac.body
if(x==null?z!=null:x!==z)J.cO(x)
c.aP(w)
C.j.d8(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dl",null,null,"gdR",5,5,null],
ce:function(a,b,c,d){a.textContent=null
this.F(a,this.L(a,b,c,d))},
cd:function(a,b){return this.ce(a,b,null,null)},
Z:function(a,b){return a.getAttribute(b)},
cY:function(a,b){return a.removeAttribute(b)},
gbM:function(a){return new W.bO(a,"mousedown",!1,[W.T])},
gbN:function(a){return new W.bO(a,"mousemove",!1,[W.T])},
gbO:function(a){return new W.bO(a,"mouseup",!1,[W.T])},
gbP:function(a){return new W.bO(a,H.u(W.d7(a)),!1,[W.aG])},
$isR:1,
"%":";Element"},
fW:{"^":"n:18;",
$1:function(a){return!!J.A(H.f(a,"$ist")).$isR}},
l1:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
ai:{"^":"h;",$isai:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
d7:function(a,b,c,d){H.l(c,{func:1,args:[W.ai]})
if(c!=null)this.cN(a,b,c,!1)},
cN:function(a,b,c,d){return a.addEventListener(b,H.b6(H.l(c,{func:1,args:[W.ai]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dU|dV|dY|dZ"},
aj:{"^":"fv;",$isaj:1,"%":"File"},
li:{"^":"iU;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaj")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aj]},
$isx:1,
$asx:function(){return[W.aj]},
$aso:function(){return[W.aj]},
$isk:1,
$ask:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"FileList"},
lj:{"^":"K;0j:length=","%":"FileWriter"},
lm:{"^":"J;0j:length=","%":"HTMLFormElement"},
ak:{"^":"h;",$isak:1,"%":"Gamepad"},
h2:{"^":"J;","%":"HTMLHeadElement"},
ln:{"^":"h;0j:length=","%":"History"},
lo:{"^":"j7;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$ist")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h3:{"^":"fP;","%":"HTMLDocument"},
lp:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lq:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lr:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
ls:{"^":"J;0n:height=,0m:width=","%":"HTMLImageElement"},
cg:{"^":"J;0n:height=,0m:width=",$iscg:1,"%":"HTMLInputElement"},
aV:{"^":"dE;",$isaV:1,"%":"KeyboardEvent"},
hj:{"^":"h;",
k:function(a){return String(a)},
$ishj:1,
"%":"Location"},
hn:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
lB:{"^":"h;0j:length=","%":"MediaList"},
lC:{"^":"je;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new W.hp(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hp:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lD:{"^":"jf;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new W.hq(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hq:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
an:{"^":"h;",$isan:1,"%":"MimeType"},
lE:{"^":"jh;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isan")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.an]},
$isx:1,
$asx:function(){return[W.an]},
$aso:function(){return[W.an]},
$isk:1,
$ask:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"MimeTypeArray"},
T:{"^":"dE;",
gbL:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aY(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.A(W.e0(z)).$isR)throw H.c(P.y("offsetX is only supported on elements"))
y=H.f(W.e0(z),"$isR")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.aY(u,v,w),"$isaY",w,"$asaY")
if(typeof z!=="number")return z.aS()
if(typeof x!=="number")return x.aS()
return new P.aY(C.r.bW(z-u),C.r.bW(x-v),w)}},
$isT:1,
"%":";DragEvent|MouseEvent"},
a3:{"^":"hi;a",
gaa:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cp("No elements"))
if(y>1)throw H.c(P.cp("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.w(b,"$isk",[W.t],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.f(c,"$ist")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.m(y,b)
J.eK(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.da(z,z.length,-1,[H.ba(C.W,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.m(z,b)
return z[b]},
$aso:function(){return[W.t]},
$ask:function(){return[W.t]},
$asa:function(){return[W.t]}},
t:{"^":"K;0dB:previousSibling=",
dC:function(a){var z=a.parentNode
if(z!=null)J.bv(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cl(a):z},
F:function(a,b){return a.appendChild(b)},
cZ:function(a,b){return a.removeChild(b)},
d_:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hA:{"^":"jj;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$ist")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lN:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lP:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lQ:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ap:{"^":"h;0j:length=",$isap:1,"%":"Plugin"},
lS:{"^":"jn;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isap")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$aso:function(){return[W.ap]},
$isk:1,
$ask:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"PluginArray"},
lU:{"^":"T;0n:height=,0m:width=","%":"PointerEvent"},
hS:{"^":"h;",
dk:function(a,b){return a.createContextualFragment(b)},
cc:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lZ:{"^":"jt;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new W.hW(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hW:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m_:{"^":"h;0n:height=,0m:width=","%":"Screen"},
m0:{"^":"J;0j:length=","%":"HTMLSelectElement"},
aq:{"^":"K;",$isaq:1,"%":"SourceBuffer"},
m2:{"^":"dV;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaq")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$aso:function(){return[W.aq]},
$isk:1,
$ask:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"SourceBufferList"},
ar:{"^":"h;",$isar:1,"%":"SpeechGrammar"},
m3:{"^":"jz;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isar")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ar]},
$isx:1,
$asx:function(){return[W.ar]},
$aso:function(){return[W.ar]},
$isk:1,
$ask:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"SpeechGrammarList"},
as:{"^":"h;0j:length=",$isas:1,"%":"SpeechRecognitionResult"},
m6:{"^":"jC;",
i:function(a,b){return this.ba(a,H.u(b))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cW(a,z)
if(y==null)return
b.$2(y,this.ba(a,y))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new W.ia(z))
return z},
gj:function(a){return a.length},
ba:function(a,b){return a.getItem(b)},
cW:function(a,b){return a.key(b)},
$asS:function(){return[P.d,P.d]},
$isI:1,
$asI:function(){return[P.d,P.d]},
"%":"Storage"},
ia:{"^":"n:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
at:{"^":"h;",$isat:1,"%":"CSSStyleSheet|StyleSheet"},
ig:{"^":"J;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=W.fV("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a3(y).H(0,new W.a3(z))
return y},
"%":"HTMLTableElement"},
m9:{"^":"J;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.gaa(z)
x.toString
z=new W.a3(x)
w=z.gaa(z)
y.toString
w.toString
new W.a3(y).H(0,new W.a3(w))
return y},
"%":"HTMLTableRowElement"},
ma:{"^":"J;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.gaa(z)
y.toString
x.toString
new W.a3(y).H(0,new W.a3(x))
return y},
"%":"HTMLTableSectionElement"},
dy:{"^":"J;",$isdy:1,"%":"HTMLTemplateElement"},
mb:{"^":"h;0m:width=","%":"TextMetrics"},
au:{"^":"K;",$isau:1,"%":"TextTrack"},
av:{"^":"K;",$isav:1,"%":"TextTrackCue|VTTCue"},
mc:{"^":"jK;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isav")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$aso:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"TextTrackCueList"},
md:{"^":"dZ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isau")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$aso:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"TextTrackList"},
mf:{"^":"h;0j:length=","%":"TimeRanges"},
aw:{"^":"h;",$isaw:1,"%":"Touch"},
mg:{"^":"jP;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$aso:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"TouchList"},
mh:{"^":"h;0j:length=","%":"TrackDefaultList"},
dE:{"^":"ai;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mv:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mx:{"^":"hn;0n:height=,0m:width=","%":"HTMLVideoElement"},
my:{"^":"K;0j:length=","%":"VideoTrackList"},
mz:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mA:{"^":"h;0m:width=","%":"VTTRegion"},
aG:{"^":"T;",
gdq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
$isaG:1,
"%":"WheelEvent"},
iw:{"^":"K;",
gda:function(a){var z,y,x
z=P.D
y=new P.aa(0,$.H,[z])
x=H.l(new W.ix(new P.jG(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cS(a)
this.d0(a,W.e6(x,z))
return y},
d0:function(a,b){return a.requestAnimationFrame(H.b6(H.l(b,{func:1,ret:-1,args:[P.D]}),1))},
cS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdH:1,
"%":"DOMWindow|Window"},
ix:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.bW(H.cC(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.V(P.cp("Future already completed"))
z.ar(a)}},
dJ:{"^":"t;",$isdJ:1,"%":"Attr"},
mG:{"^":"jV;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isah")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ah]},
$isx:1,
$asx:function(){return[W.ah]},
$aso:function(){return[W.ah]},
$isk:1,
$ask:function(){return[W.ah]},
$isa:1,
$asa:function(){return[W.ah]},
$asq:function(){return[W.ah]},
"%":"CSSRuleList"},
mH:{"^":"fR;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isU",[P.D],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mI:{"^":"jX;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isak")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ak]},
$isx:1,
$asx:function(){return[W.ak]},
$aso:function(){return[W.ak]},
$isk:1,
$ask:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"GamepadList"},
mN:{"^":"jZ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$ist")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mO:{"^":"k0;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isas")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$aso:function(){return[W.as]},
$isk:1,
$ask:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"SpeechRecognitionResultList"},
mP:{"^":"k2;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isat")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$aso:function(){return[W.at]},
$isk:1,
$ask:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"StyleSheetList"},
iE:{"^":"dm;cR:a<",
C:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gE(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.O)(z),++v){u=z[v]
b.$2(u,w.Z(x,u))}},
gE:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.i([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.m(z,w)
v=H.f(z[w],"$isdJ")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asS:function(){return[P.d,P.d]},
$asI:function(){return[P.d,P.d]}},
iO:{"^":"iE;a",
i:function(a,b){return J.c8(this.a,H.u(b))},
gj:function(a){return this.gE(this).length}},
bo:{"^":"ib;a,b,c,$ti"},
bO:{"^":"bo;a,b,c,$ti"},
iQ:{"^":"ic;a,b,c,d,e,$ti",p:{
aH:function(a,b,c,d,e){var z=W.e6(new W.iR(c),W.ai)
if(z!=null&&!0)J.eL(a,b,z,!1)
return new W.iQ(0,a,b,z,!1,[e])}}},
iR:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isai"))}},
bp:{"^":"b;a",
cJ:function(a){var z,y
z=$.cG()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.T[y],W.kn())
for(y=0;y<12;++y)z.h(0,C.u[y],W.ko())}},
W:function(a){return $.eD().u(0,W.aS(a))},
S:function(a,b,c){var z,y,x
z=W.aS(a)
y=$.cG()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bU(x.$4(a,b,c,this))},
$isa8:1,
p:{
dM:function(a){var z,y
z=document.createElement("a")
y=new W.ju(z,window.location)
y=new W.bp(y)
y.cJ(a)
return y},
mL:[function(a,b,c,d){H.f(a,"$isR")
H.u(b)
H.u(c)
H.f(d,"$isbp")
return!0},"$4","kn",16,0,12],
mM:[function(a,b,c,d){var z,y,x
H.f(a,"$isR")
H.u(b)
H.u(c)
z=H.f(d,"$isbp").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ko",16,0,12]}},
q:{"^":"b;$ti",
gw:function(a){return new W.da(a,this.gj(a),-1,[H.ba(this,a,"q",0)])}},
dq:{"^":"b;a",
W:function(a){return C.a.bi(this.a,new W.hC(a))},
S:function(a,b,c){return C.a.bi(this.a,new W.hB(a,b,c))},
$isa8:1},
hC:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isa8").W(this.a)}},
hB:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isa8").S(this.a,this.b,this.c)}},
jv:{"^":"b;",
cK:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aH(0,new W.jw())
y=b.aH(0,new W.jx())
this.b.H(0,z)
x=this.c
x.H(0,C.V)
x.H(0,y)},
W:function(a){return this.a.u(0,W.aS(a))},
S:["co",function(a,b,c){var z,y
z=W.aS(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.d9(c)
else if(y.u(0,"*::"+b))return this.d.d9(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa8:1},
jw:{"^":"n:10;",
$1:function(a){return!C.a.u(C.u,H.u(a))}},
jx:{"^":"n:10;",
$1:function(a){return C.a.u(C.u,H.u(a))}},
jH:{"^":"jv;e,a,b,c,d",
S:function(a,b,c){if(this.co(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c8(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dX:function(){var z,y,x,w,v
z=P.d
y=P.cl(C.t,z)
x=H.p(C.t,0)
w=H.l(new W.jI(),{func:1,ret:z,args:[x]})
v=H.i(["TEMPLATE"],[z])
y=new W.jH(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cK(null,new H.hl(C.t,w,[x,z]),v,null)
return y}}},
jI:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
jF:{"^":"b;",
W:function(a){var z=J.A(a)
if(!!z.$isdu)return!1
z=!!z.$isG
if(z&&W.aS(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.i.cg(b,"on"))return!1
return this.W(a)},
$isa8:1},
da:{"^":"b;a,b,c,0d,$ti",
sb8:function(a){this.d=H.z(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb8(J.bd(this.a,z))
this.c=z
return!0}this.sb8(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaU:1},
iI:{"^":"b;a",$isK:1,$isdH:1,p:{
iJ:function(a){if(a===window)return H.f(a,"$isdH")
else return new W.iI(a)}}},
a8:{"^":"b;"},
ju:{"^":"b;a,b",$ismu:1},
e_:{"^":"b;a",
aP:function(a){new W.jS(this).$2(a,null)},
a4:function(a,b){if(b==null)J.cO(a)
else J.bv(b,a)},
d3:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f5(a)
x=J.c8(y.gcR(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a4(t)}v="element unprintable"
try{v=J.bf(a)}catch(t){H.a4(t)}try{u=W.aS(a)
this.d2(H.f(a,"$isR"),b,z,v,u,H.f(y,"$isI"),H.u(x))}catch(t){if(H.a4(t) instanceof P.aD)throw t
else{this.a4(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.W(a)){this.a4(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a4(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gE(f)
y=H.i(z.slice(0),[H.p(z,0)])
for(x=f.gE(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.m(y,x)
v=y[x]
if(!this.a.S(a,J.fh(v),w.Z(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Z(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Z(z,v)
w.cY(z,v)}}if(!!J.A(a).$isdy)this.aP(a.content)},
$islL:1},
jS:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d3(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f6(z)}catch(w){H.a4(w)
v=H.f(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bv(u,v)}else J.bv(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$ist")}}},
iH:{"^":"h+fI;"},
iK:{"^":"h+o;"},
iL:{"^":"iK+q;"},
iM:{"^":"h+o;"},
iN:{"^":"iM+q;"},
iT:{"^":"h+o;"},
iU:{"^":"iT+q;"},
j6:{"^":"h+o;"},
j7:{"^":"j6+q;"},
je:{"^":"h+S;"},
jf:{"^":"h+S;"},
jg:{"^":"h+o;"},
jh:{"^":"jg+q;"},
ji:{"^":"h+o;"},
jj:{"^":"ji+q;"},
jm:{"^":"h+o;"},
jn:{"^":"jm+q;"},
jt:{"^":"h+S;"},
dU:{"^":"K+o;"},
dV:{"^":"dU+q;"},
jy:{"^":"h+o;"},
jz:{"^":"jy+q;"},
jC:{"^":"h+S;"},
jJ:{"^":"h+o;"},
jK:{"^":"jJ+q;"},
dY:{"^":"K+o;"},
dZ:{"^":"dY+q;"},
jO:{"^":"h+o;"},
jP:{"^":"jO+q;"},
jU:{"^":"h+o;"},
jV:{"^":"jU+q;"},
jW:{"^":"h+o;"},
jX:{"^":"jW+q;"},
jY:{"^":"h+o;"},
jZ:{"^":"jY+q;"},
k_:{"^":"h+o;"},
k0:{"^":"k_+q;"},
k1:{"^":"h+o;"},
k2:{"^":"k1+q;"}}],["","",,P,{"^":"",
a_:function(a){var z,y,x,w,v
if(a==null)return
z=P.N(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.O)(y),++w){v=H.u(y[w])
z.h(0,v,a[v])}return z},
ke:function(a,b){var z={}
a.C(0,new P.kf(z))
return z},
d3:function(){var z=$.d2
if(z==null){z=J.c4(window.navigator.userAgent,"Opera",0)
$.d2=z}return z},
fN:function(){var z,y
z=$.d_
if(z!=null)return z
y=$.d0
if(y==null){y=J.c4(window.navigator.userAgent,"Firefox",0)
$.d0=y}if(y)z="-moz-"
else{y=$.d1
if(y==null){y=!P.d3()&&J.c4(window.navigator.userAgent,"Trident/",0)
$.d1=y}if(y)z="-ms-"
else z=P.d3()?"-o-":"-webkit-"}$.d_=z
return z},
kf:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aY:{"^":"b;P:a>,M:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.aL(b,"$isaY",[P.D],null)&&this.a==J.bz(b)&&this.b==b.gM(b)},
gv:function(a){var z,y,x
z=J.ag(this.a)
y=J.ag(this.b)
y=P.dN(P.dN(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jo:{"^":"b;"},
U:{"^":"jo;$ti"}}],["","",,P,{"^":"",fr:{"^":"h;",$isfr:1,"%":"SVGAnimatedLength"},l2:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},l3:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},l4:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},l5:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},l6:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},l7:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},l8:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},l9:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},la:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lb:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},lc:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},ld:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},le:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lf:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lg:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},lh:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lk:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},ll:{"^":"bi;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h1:{"^":"bi;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bi:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lt:{"^":"bi;0n:height=,0m:width=","%":"SVGImageElement"},aW:{"^":"h;",$isaW:1,"%":"SVGLength"},ly:{"^":"j9;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.f(c,"$isaW")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aW]},
$isk:1,
$ask:function(){return[P.aW]},
$isa:1,
$asa:function(){return[P.aW]},
$asq:function(){return[P.aW]},
"%":"SVGLengthList"},lz:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aX:{"^":"h;",$isaX:1,"%":"SVGNumber"},lM:{"^":"jl;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.f(c,"$isaX")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aX]},
$isk:1,
$ask:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$asq:function(){return[P.aX]},
"%":"SVGNumberList"},lR:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},lT:{"^":"h;0j:length=","%":"SVGPointList"},lV:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lW:{"^":"h1;0n:height=,0m:width=","%":"SVGRectElement"},du:{"^":"G;",$isdu:1,"%":"SVGScriptElement"},m7:{"^":"jE;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$aso:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},G:{"^":"R;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.i([],[W.a8])
C.a.l(z,W.dM(null))
C.a.l(z,W.dX())
C.a.l(z,new W.jF())
c=new W.e_(new W.dq(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dl(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a3(w)
u=z.gaa(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m8:{"^":"bi;0n:height=,0m:width=","%":"SVGSVGElement"},b0:{"^":"h;",$isb0:1,"%":"SVGTransform"},mi:{"^":"jR;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.f(c,"$isb0")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b0]},
$isk:1,
$ask:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$asq:function(){return[P.b0]},
"%":"SVGTransformList"},mw:{"^":"bi;0n:height=,0m:width=","%":"SVGUseElement"},j8:{"^":"h+o;"},j9:{"^":"j8+q;"},jk:{"^":"h+o;"},jl:{"^":"jk+q;"},jD:{"^":"h+o;"},jE:{"^":"jD+q;"},jQ:{"^":"h+o;"},jR:{"^":"jQ+q;"}}],["","",,P,{"^":"",ad:{"^":"b;",$isk:1,
$ask:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
$isim:1}}],["","",,P,{"^":"",kK:{"^":"h;0j:length=","%":"AudioBuffer"},kL:{"^":"iF;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.d])
this.C(a,new P.ft(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"AudioParamMap"},ft:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kM:{"^":"K;0j:length=","%":"AudioTrackList"},fu:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lO:{"^":"fu;0j:length=","%":"OfflineAudioContext"},iF:{"^":"h+S;"}}],["","",,P,{"^":"",fx:{"^":"h;",$isfx:1,"%":"WebGLBuffer"},h0:{"^":"h;",$ish0:1,"%":"WebGLFramebuffer"},hR:{"^":"h;",$ishR:1,"%":"WebGLProgram"},lX:{"^":"h;",
bh:function(a,b){return a.activeTexture(b)},
bj:function(a,b,c){return a.attachShader(b,c)},
bk:function(a,b,c){return a.bindBuffer(b,c)},
bm:function(a,b,c){return a.bindFramebuffer(b,c)},
bn:function(a,b,c){return a.bindTexture(b,c)},
bo:function(a,b){return a.blendEquation(b)},
bp:function(a,b,c){return a.blendFunc(b,c)},
bq:function(a,b,c,d){return a.bufferData(b,c,d)},
br:function(a,b){return a.checkFramebufferStatus(b)},
bs:function(a,b){return a.clear(b)},
bt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bv:function(a){return a.createBuffer()},
bw:function(a){return a.createFramebuffer()},
bx:function(a){return a.createProgram()},
by:function(a,b){return a.createShader(b)},
bz:function(a){return a.createTexture()},
bB:function(a,b){return a.depthMask(b)},
bC:function(a,b){return a.disable(b)},
bD:function(a,b,c,d){return a.drawArrays(b,c,d)},
bE:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bF:function(a,b){return a.enable(b)},
bG:function(a,b){return a.enableVertexAttribArray(b)},
bI:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ai:function(a){return P.a_(a.getContextAttributes())},
aI:function(a){return a.getError()},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
aQ:function(a,b,c){return a.shaderSource(b,c)},
aR:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bS:function(a,b,c,d){return a.texParameterf(b,c,d)},
bT:function(a,b,c,d){return a.texParameteri(b,c,d)},
bX:function(a,b,c){return a.uniform1f(b,c)},
bY:function(a,b,c){return a.uniform1fv(b,c)},
bZ:function(a,b,c){return a.uniform1i(b,c)},
c_:function(a,b,c){return a.uniform1iv(b,c)},
c0:function(a,b,c){return a.uniform2fv(b,c)},
c1:function(a,b,c){return a.uniform3fv(b,c)},
c2:function(a,b,c){return a.uniform4fv(b,c)},
c3:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c4:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c5:function(a,b){return a.useProgram(b)},
c6:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lY:{"^":"h;",
dd:function(a,b){return a.beginTransformFeedback(b)},
dg:function(a,b){return a.bindVertexArray(b)},
dn:function(a){return a.createVertexArray()},
dr:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ds:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dt:function(a){return a.endTransformFeedback()},
dH:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
dK:function(a,b,c,d){this.d6(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
d6:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dL:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bh:function(a,b){return a.activeTexture(b)},
bj:function(a,b,c){return a.attachShader(b,c)},
bk:function(a,b,c){return a.bindBuffer(b,c)},
bm:function(a,b,c){return a.bindFramebuffer(b,c)},
bn:function(a,b,c){return a.bindTexture(b,c)},
bo:function(a,b){return a.blendEquation(b)},
bp:function(a,b,c){return a.blendFunc(b,c)},
bq:function(a,b,c,d){return a.bufferData(b,c,d)},
br:function(a,b){return a.checkFramebufferStatus(b)},
bs:function(a,b){return a.clear(b)},
bt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bv:function(a){return a.createBuffer()},
bw:function(a){return a.createFramebuffer()},
bx:function(a){return a.createProgram()},
by:function(a,b){return a.createShader(b)},
bz:function(a){return a.createTexture()},
bB:function(a,b){return a.depthMask(b)},
bC:function(a,b){return a.disable(b)},
bD:function(a,b,c,d){return a.drawArrays(b,c,d)},
bE:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bF:function(a,b){return a.enable(b)},
bG:function(a,b){return a.enableVertexAttribArray(b)},
bI:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ai:function(a){return P.a_(a.getContextAttributes())},
aI:function(a){return a.getError()},
aJ:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
aM:function(a,b){return a.getShaderInfoLog(b)},
aN:function(a,b,c){return a.getShaderParameter(b,c)},
aO:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
aQ:function(a,b,c){return a.shaderSource(b,c)},
aR:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bS:function(a,b,c,d){return a.texParameterf(b,c,d)},
bT:function(a,b,c,d){return a.texParameteri(b,c,d)},
bX:function(a,b,c){return a.uniform1f(b,c)},
bY:function(a,b,c){return a.uniform1fv(b,c)},
bZ:function(a,b,c){return a.uniform1i(b,c)},
c_:function(a,b,c){return a.uniform1iv(b,c)},
c0:function(a,b,c){return a.uniform2fv(b,c)},
c1:function(a,b,c){return a.uniform3fv(b,c)},
c2:function(a,b,c){return a.uniform4fv(b,c)},
c3:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c4:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c5:function(a,b){return a.useProgram(b)},
c6:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i0:{"^":"h;",$isi0:1,"%":"WebGLShader"},ih:{"^":"h;",$isih:1,"%":"WebGLTexture"},ip:{"^":"h;",$isip:1,"%":"WebGLUniformLocation"},iu:{"^":"h;",$isiu:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",m4:{"^":"jB;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.a_(this.cV(a,b))},
h:function(a,b,c){H.f(c,"$isI")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
cV:function(a,b){return a.item(b)},
$aso:function(){return[[P.I,,,]]},
$isk:1,
$ask:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jA:{"^":"h+o;"},jB:{"^":"jA+q;"}}],["","",,G,{"^":"",
iy:function(a){var z,y,x,w
z=H.i(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.m(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.a6(z,"\n")},
dK:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.by(a,b)
z.aQ(a,y,c)
z.bu(a,y)
x=H.bU(z.aN(a,y,35713))
if(x!=null&&!x){w=z.aM(a,y)
P.aN("E:Compilation failed:")
P.aN("E:"+G.iy(c))
P.aN("E:Failure:")
P.aN(C.i.G("E:",w))
throw H.c(w)}return y},
db:function(a,b){var z,y,x
H.w(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.h.h(b,z,J.bz(a[y]))
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+1,J.c7(a[y]))
z+=2
if(y>=a.length)return H.m(a,y)
x=J.cM(a[y])
if(z>=b.length)return H.m(b,z)
b[z]=x}return b},
fZ:function(a,b){var z,y
H.w(a,"$isa",[T.L],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.h.h(b,z,J.bz(a[y]))
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+1,J.c7(a[y]))}return b},
h_:function(a,b){var z,y,x,w
H.w(a,"$isa",[T.ay],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.h.h(b,z,J.bz(a[y]))
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+1,J.c7(a[y]))
x=z+2
if(y>=a.length)return H.m(a,y)
w=J.cM(a[y])
if(x>=b.length)return H.m(b,x)
b[x]=w
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+3,J.f8(a[y]))}return b},
fY:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.B]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bd(a[y],0))
if(y>=a.length)return H.m(a,y)
C.n.h(b,z+1,J.bd(a[y],1))
if(y>=a.length)return H.m(a,y)
C.n.h(b,z+2,J.bd(a[y],2))
if(y>=a.length)return H.m(a,y)
C.n.h(b,z+3,J.bd(a[y],3))}return b},
j4:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.al(z,[H.p(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.B]],v=[P.X],u=[T.ay],t=[T.r],s=[T.L];y.t();){r=y.d
if(!x.ag(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ec>0)H.c1("I: "+r)
continue}q=z.i(0,r)
switch($.a5().i(0,r).a){case"vec2":b.a1(r,G.fZ(H.bu(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a1(r,G.db(H.bu(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a1(r,G.h_(H.bu(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a1(r,new Float32Array(H.bQ(H.bu(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a1(r,G.fY(H.bu(q,"$isa",w,"$asa"),null),4)
break}}},
de:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.N(x,P.b)
v=J.eW(z.a)
u=new G.ho(z,v,4,w,y,0,-1,P.N(x,P.ad),"meshdata:"+a,!1,!0)
x=G.db(c.d,null)
w.h(0,"aPosition",J.c5(z.a))
u.ch=x
u.aV("aPosition",x,3)
t=$.a5().i(0,"aPosition")
if(t==null)H.V("Unknown canonical aPosition")
s=y.i(0,"aPosition")
J.bx(z.a,v)
z.bH(0,s,0)
z.c7(0,w.i(0,"aPosition"),s,t.aW(),5126,!1,0,0)
y=H.w(c.cu(),"$isa",[P.B],"$asa")
u.y=J.c5(z.a)
x=u.ch.length
if(x<768){u.sau(new Uint8Array(H.bQ(y)))
u.Q=5121}else if(x<196608){u.sau(new Uint16Array(H.bQ(y)))
u.Q=5123}else{u.sau(new Uint32Array(H.bQ(y)))
u.Q=5125}J.bx(z.a,v)
y=u.y
x=u.cx
J.c2(z.a,34963,y)
J.cK(z.a,34963,x,35048)
G.j4(c,u)
return u},
bI:{"^":"b;"},
ax:{"^":"bI;d,a,b,c",
aX:function(){return this.d},
k:function(a){var z,y,x,w
z=H.i(["{"+new H.dC(H.kk(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.a6(z,"\n")}},
fy:{"^":"i6;"},
fA:{"^":"b;0a,b",
bH:function(a,b,c){J.f2(this.a,b)
if(c>0)J.fn(this.a,b,c)},
c7:function(a,b,c,d,e,f,g,h){J.c2(this.a,34962,b)
J.fo(this.a,c,d,e,!1,g,h)}},
dc:{"^":"b;a,b,c,d,e",
a0:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.c3(z.a,36160,y)
J.fp(z.a,b,c,d,e)
if(a!==0)J.eQ(z.a,a)},
p:{
cf:function(a,b,c){var z,y,x,w,v
z=$.es()
y=G.dD(a,"frame::color",b,c,32856,z)
z=G.dD(a,"frame::depth",b,c,33190,z)
x=new G.dc(a,null,y,z,null)
w=J.eT(a.a)
x.b=w
J.c3(a.a,36160,w)
J.cL(a.a,36160,36064,3553,y.b,0)
J.cL(a.a,36160,36096,3553,z.b,0)
v=J.eP(a.a,36160)
if(v!==36053)H.V("Error Incomplete Framebuffer: "+H.e(v))
J.c3(a.a,36160,null)
return x}}},
d9:{"^":"b;"},
bF:{"^":"b;a,b,c,d"},
dd:{"^":"b;a,b,c,d,e",
am:function(a){switch($.a5().i(0,a).a){case"vec2":this.e.h(0,a,H.i([],[T.L]))
break
case"vec3":this.e.h(0,a,H.i([],[T.r]))
break
case"vec4":this.e.h(0,a,H.i([],[T.ay]))
break
case"float":this.e.h(0,a,H.i([],[P.X]))
break
case"uvec4":this.e.h(0,a,H.i([],[[P.a,P.B]]))
break}},
cp:function(a,b){var z,y,x,w,v,u
z=[T.L]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.L(v))}},
cq:function(a,b){var z,y,x,w,v
z=[T.r]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.r(new Float32Array(3))
v.D(w)
z.l(y,v)}},
cr:function(a){var z,y,x,w,v
H.w(a,"$isa",[T.r],"$asa")
z=this.d
y=z.length
C.a.l(this.c,new G.bF(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.r(new Float32Array(3))
v.D(w)
C.a.l(z,v)}},
cu:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.i(y,[P.B])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.m(y,v)
u=y[v]
C.a.h(x,w,u.gdO(u))
C.a.h(x,w+1,u.gdP(u))
C.a.h(x,w+2,u.gdQ(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.O)(z),++v){t=z[v]
s=t.a
C.a.h(x,w,s)
C.a.h(x,w+1,t.b)
r=t.c
C.a.h(x,w+2,r)
C.a.h(x,w+3,s)
C.a.h(x,w+4,r)
C.a.h(x,w+5,t.d)
w+=6}return x},
cw:function(a,b){var z,y,x,w,v,u,t
z=H.i([],[T.L])
this.e.h(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.L(t))}},
cv:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=this.c
y=a-1
x=b-1
w=0
while(!0){if(!(w<x))break
v=w*a
u=w+1
t=0
while(!0){if(!(t<y))break
s=t+1
r=u*a
C.a.l(z,new G.bF(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.i(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a5().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a6(z," ")}},
dA:{"^":"b;a,b,c"},
dz:{"^":"b;a,b,c"},
hm:{"^":"ax;d,a,b,c"},
ho:{"^":"bI;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sau:function(a){this.cx=H.w(a,"$isa",[P.B],"$asa")},
aV:function(a,b,c){var z,y
C.i.aq(a,0)
H.f(b,"$isad")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c2(z.a,34962,y)
J.cK(z.a,34962,b,35048)},
cz:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a1:function(a,b,c){var z,y,x,w,v
z=J.cH(a,0)===105
if(z&&this.z===0)this.z=C.b.al(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c5(x.a))
this.aV(a,b,c)
w=$.a5().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bx(x.a,this.e)
x.bH(0,v,z?1:0)
x.c7(0,y.i(0,a),v,w.aW(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.i(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.al(z,[H.p(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a6(y,"  ")}},
hH:{"^":"ax;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cs:function(a,b){var z
if(typeof a!=="number")return a.dM()
if(typeof b!=="number")return H.aA(b)
z=a/b
if(this.z===z)return
this.z=z
this.aY()},
aY:function(){var z,y,x,w,v,u
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
aX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.r(new Float32Array(3))
u.J(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.D(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.A(t)
y=!!z.$isay
q=y?t.gaG(t):1
if(!!z.$isr){p=t.gP(t)
s=t.gM(t)
r=t.gY(t)
t=p}else if(y){p=t.gP(t)
s=t.gM(t)
r=t.gY(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.aA(t)
y=u[4]
if(typeof s!=="number")return H.aA(s)
x=u[8]
if(typeof r!=="number")return H.aA(r)
w=u[12]
o=u[1]
n=u[5]
m=u[9]
l=u[13]
k=u[2]
j=u[6]
i=u[10]
h=u[14]
g=u[3]
f=u[7]
e=u[11]
d=u[15]
u[12]=z*t+y*s+x*r+w*q
u[13]=o*t+n*s+m*r+l*q
u[14]=k*t+j*s+i*r+h*q
u[15]=g*t+f*s+e*r+d*q
d=this.cx
d.D(this.db)
e=d.a
c=e[0]
b=e[4]
a=e[8]
a0=e[12]
a1=e[1]
a2=e[5]
a3=e[9]
a4=e[13]
a5=e[2]
a6=e[6]
a7=e[10]
a8=e[14]
a9=e[3]
b0=e[7]
b1=e[11]
b2=e[15]
b3=u[0]
b4=u[4]
b5=u[8]
b6=u[12]
b7=u[1]
b8=u[5]
b9=u[9]
c0=u[13]
c1=u[2]
c2=u[6]
c3=u[10]
c4=u[14]
c5=u[3]
c6=u[7]
c7=u[11]
c8=u[15]
e[0]=c*b3+b*b7+a*c1+a0*c5
e[4]=c*b4+b*b8+a*c2+a0*c6
e[8]=c*b5+b*b9+a*c3+a0*c7
e[12]=c*b6+b*c0+a*c4+a0*c8
e[1]=a1*b3+a2*b7+a3*c1+a4*c5
e[5]=a1*b4+a2*b8+a3*c2+a4*c6
e[9]=a1*b5+a2*b9+a3*c3+a4*c7
e[13]=a1*b6+a2*c0+a3*c4+a4*c8
e[2]=a5*b3+a6*b7+a7*c1+a8*c5
e[6]=a5*b4+a6*b8+a7*c2+a8*c6
e[10]=a5*b5+a6*b9+a7*c3+a8*c7
e[14]=a5*b6+a6*c0+a7*c4+a8*c8
e[3]=a9*b3+b0*b7+b1*c1+b2*c5
e[7]=a9*b4+b0*b8+b1*c2+b2*c6
e[11]=a9*b5+b0*b9+b1*c3+b2*c7
e[15]=a9*b6+b0*c0+b1*c4+b2*c8
v.h(0,"uPerspectiveViewMatrix",d)
return v}},
l0:{"^":"b;"},
hV:{"^":"bI;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cC:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}},
cF:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.i([],[P.d])
x=H.i([],[P.d])
for(y=new H.al(y,[H.p(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ag(0,w))C.a.l(x,w)}for(z=this.x,z=P.jb(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isI",[P.d,P.b],"$asI")
z=Date.now()
for(y=new H.al(b,[H.p(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cH(s,0)){case 117:if(w.ag(0,s)){r=b.i(0,s)
if(v.ag(0,s))H.c1("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a5().i(0,s)
if(q==null)H.V("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.M(r)
J.c9(x.a,p,r)}else if(!!J.A(r).$ish5)J.fl(x.a,p,r)
break
case"float":if(q.c===0){H.eb(r)
J.fj(x.a,p,r)}else if(!!J.A(r).$isad)J.fk(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.af(r,"$isam").a
J.cT(x.a,p,!1,s)}else if(!!J.A(r).$isad)J.cT(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.L.gdN(H.af(r,"$islA"))
J.cS(x.a,p,!1,s)}else if(!!J.A(r).$isad)J.cS(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.af(r,"$isay").a)
else J.cR(o,p,H.f(r,"$isad"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cQ(o,p,H.af(r,"$isr").a)
else J.cQ(o,p,H.f(r,"$isad"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cP(o,p,H.af(r,"$isL").a)
else J.cP(o,p,H.f(r,"$isad"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aA(s)
J.cI(x.a,33984+s)
s=H.af(r,"$iscr").b
J.bw(x.a,3553,s)
s=this.ch
J.c9(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aA(s)
J.cI(x.a,33984+s)
s=H.af(r,"$iscr").b
J.bw(x.a,34067,s)
s=this.ch
J.c9(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
default:H.c1("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aC(r,!0)
o=x.a
if(s)J.be(o,2929)
else J.c6(o,2929)
break
case"cStencilFunc":H.af(r,"$isdA")
s=r.a
o=x.a
if(s===1281)J.c6(o,2960)
else{J.be(o,2960)
o=r.b
n=r.c
J.fe(x.a,s,o,n)}break
case"cDepthWrite":H.bU(r)
J.eX(x.a,r)
break
case"cBlendEquation":H.af(r,"$isdz")
s=r.a
o=x.a
if(s===1281)J.c6(o,3042)
else{J.be(o,3042)
o=r.b
n=r.c
J.eO(x.a,o,n)
J.eN(x.a,s)}break}++t
break}}m=P.fS(0,0,0,Date.now()-new P.bD(z,!1).a,0,0)
""+t
m.k(0)},
ct:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.ax],"$asa")
Date.now()
z=this.d
J.fm(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b2()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.O)(b),++x){w=b[x]
this.cI(w.a,w.aX())}y=this.Q
y.a5(0)
for(v=a.cy,v=new H.al(v,[H.p(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cF()
if(u.length!==0)P.aN("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bx(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cz()
s=a.Q
r=a.z
if(t)J.eM(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f0(q,y,v,s,0,r)
else J.f_(q,y,v,s,0)}else{s=z.a
if(r>1)J.eZ(s,y,0,v,r)
else J.eY(s,y,0,v)}if(t)J.f3(z.a)},
a3:function(a,b){return this.ct(a,b,null)},
p:{
bL:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.eU(b.a)
t=G.dK(b.a,35633,x)
J.cJ(b.a,u,t)
s=G.dK(b.a,35632,w)
J.cJ(b.a,u,s)
if(v.length>0)J.fi(b.a,u,v,35980)
J.fd(b.a,u)
if(!H.bU(J.fc(b.a,u,35714)))H.V(J.fb(b.a,u))
z=new G.hV(b,c,d,u,P.cl(c.c,z),P.N(z,P.b),P.N(z,z),y,a,!1,!0)
z.cC(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
aW:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
cn:{"^":"b;a,0b,c,d,e,f,r,x",
aU:function(a){var z,y,x,w,v
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.O)(a),++w){v=a[w]
C.a.l(y,v)
x.h(0,v,this.r);++this.r}C.a.aj(y)},
a2:function(a){var z,y,x
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.O)(a),++x)C.a.l(y,a[x])
C.a.aj(y)},
U:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.aj(z)},
cD:function(a,b){this.b=this.ab(!1,H.w(a,"$isa",[P.d],"$asa"),b)},
an:function(a){return this.cD(a,null)},
ab:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.i(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.O)(y),++u){t=y[u]
s=$.a5().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){q=z[u]
s=$.a5().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){q=z[u]
s=$.a5().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){q=z[u]
s=$.a5().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.l(w,"}")
return C.a.a6(w,"\n")},
p:{
bM:function(a){var z,y
z=P.d
y=[z]
return new G.cn(a,H.i([],y),H.i([],y),H.i([],y),H.i([],y),0,P.N(z,P.B))}}},
i6:{"^":"bI;"},
ii:{"^":"b;a,b,c,d,e,f,r"},
cr:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
io:{"^":"cr;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"},
p:{
dD:function(a,b,c,d,e,f){var z,y
z=J.eV(a.a)
J.bw(a.a,3553,z)
J.fg(a.a,3553,1,e,c,d)
y=f.e
if(y!==1)J.ff(a.a,3553,34046,y)
y=f.r
J.bA(a.a,3553,10240,y)
y=f.f
J.bA(a.a,3553,10241,y)
if(f.b){J.bA(a.a,3553,10242,33071)
J.bA(a.a,3553,10243,33071)}f.c
J.fa(a.a)
J.bw(a.a,3553,null)
return new G.io(c,d,e,b,z,3553,a,f)}}}}],["","",,R,{"^":"",
jd:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iP("span",null),"$isR")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).ap(y,"float")
y.setProperty(x,"left","")
x=C.w.ap(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.F(z,v)}return z},
i8:{"^":"b;",
cE:function(a,b,c){var z,y
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
y=J.j(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
i9:{"^":"i8;e,f,a,b,c,d",
cH:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dJ(y,2)+" fps"
C.q.cd(this.c,b)
x=C.b.O(30*C.x.dh(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isR")
v=w.style
u=""+x+"px"
v.height=u
C.q.F(z,w)},
cG:function(a){return this.cH(a,"")}}}],["","",,V,{"^":"",
kB:function(a,b){var z,y,x,w,v,u
z=H.i([],[P.X])
for(y=b*b,x=0,w=0;w<a;++w){v=0.39894*Math.exp(-0.5*w*w/y)/b
C.a.l(z,v)
x+=v
if(w>0)x+=v}for(u="",w=0,y="";w<a;++w,u=", "){y+=u
if(w>=z.length)return H.m(z,w)
y+=H.e(z[w]/x)}return"float kernel["+a+"] = float["+a+"]("+(y.charCodeAt(0)==0?y:y)+");"}}],["","",,B,{"^":"",
i1:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=h+1
y=g+1
x=B.ij(B.hF(new B.i2(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.i([],[G.d9])
v=H.i([],[G.bF])
u=[T.r]
t=H.i([],u)
s=new G.dd(!1,w,v,t,P.N(P.d,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.O)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.f(q[p],"$isr")
v.toString
o=new T.r(new Float32Array(3))
o.D(v)
C.a.l(t,o)}}s.cv(z,y,!1)
s.cw(z,y)
s.am("aNormal")
for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.O)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.m(q,o)
o=H.f(q[o],"$isr")
n=H.w(v.i(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.r(new Float32Array(3))
t.D(o);(n&&C.a).l(n,t)}}return s},
ij:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.r]
H.w(a,"$isa",z,"$asa")
y=H.i([],[[P.a,T.r]])
x=new Float32Array(3)
w=new T.r(x)
v=new Float32Array(3)
u=new T.r(v)
t=new Float32Array(3)
s=new T.r(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.m(a,n)
m=a[n]
l=H.i([],z)
C.a.l(y,l)
p=m.a
n=p[2]
if(Math.abs(n)>0.7071067811865476){k=p[1]
j=k*k+n*n
i=1/Math.sqrt(j)
v[0]=0
v[1]=-p[2]*i
v[2]=p[1]*i
t[0]=j*i
t[1]=-p[0]*(p[1]*i)
t[2]=p[0]*(-p[2]*i)}else{n=p[0]
k=p[1]
j=n*n+k*k
i=1/Math.sqrt(j)
v[0]=-p[1]*i
v[1]=p[0]*i
v[2]=0
t[0]=-p[2]*(p[0]*i)
t[1]=p[2]*(-p[1]*i)
t[2]=j*i}u.X(0)
s.X(0)
for(h=0;h<r;++h){g=h/b*2*3.141592653589793
f=c*Math.cos(g)
e=c*Math.sin(g)
w.D(o)
w.af(u,f)
w.af(s,e)
p=new T.r(new Float32Array(3))
p.D(w)
C.a.l(l,p)
x[2]=0
x[1]=0
x[0]=0
w.af(u,f)
w.af(s,e)
w.X(0)
p=new T.r(new Float32Array(3))
p.D(w)
C.a.l(l,p)}}return y},
hF:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.l(a,{func:1,ret:-1,args:[P.X,T.r]})
z=H.i([],[T.r])
y=new T.r(new Float32Array(3))
x=new T.r(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.aT(0,y)
t=new T.r(new Float32Array(3))
t.D(y)
C.a.l(z,t)
t=new T.r(new Float32Array(3))
t.D(x)
C.a.l(z,t)}return z},
i2:{"^":"n:24;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sP(0,y*v)
b.sM(0,y*u)
b.sY(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",hc:{"^":"b;a,b,c",
cA:function(a){var z,y
a=document
z=W.aV
y={func:1,ret:-1,args:[z]}
W.aH(a,"keydown",H.l(new D.he(this),y),!1,z)
W.aH(a,"keyup",H.l(new D.hf(this),y),!1,z)},
p:{
hd:function(a){var z=P.B
z=new D.hc(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.cA(a)
return z}}},he:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaV")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},hf:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaV")
z=this.a
z.a.bQ(0,a.which)
z.c.l(0,a.which)}},hr:{"^":"b;a,b,c,d,e,f,r,x",
cB:function(a){var z,y,x
if(a==null)a=document
z=J.j(a)
y=z.gbN(a)
x=H.p(y,0)
W.aH(y.a,y.b,H.l(new D.ht(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbM(a)
y=H.p(x,0)
W.aH(x.a,x.b,H.l(new D.hu(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbO(a)
x=H.p(y,0)
W.aH(y.a,y.b,H.l(new D.hv(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbP(a)
x=H.p(z,0)
W.aH(z.a,z.b,H.l(new D.hw(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hs:function(a){var z=P.B
z=new D.hr(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cB(a)
return z}}},ht:{"^":"n:3;a",
$1:function(a){var z,y
H.f(a,"$isT")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.M(y.gbL(a).a)
z.x=H.M(y.gbL(a).b)
z.d=a.movementX
z.e=a.movementY}},hu:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isT")
a.preventDefault()
P.aN("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hv:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isT")
a.preventDefault()
z=this.a
z.a.bQ(0,a.button)
z.c.l(0,a.button)}},hw:{"^":"n:25;a",
$1:function(a){H.f(a,"$isaG")
a.preventDefault()
this.a.f=H.M(C.ac.gdq(a))}},hE:{"^":"fy;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bZ:function(a){var z,y
z=C.h.du(H.w(a,"$isk",[P.b],"$ask"),0,new A.km(),P.B)
if(typeof z!=="number")return H.aA(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
km:{"^":"n:26;",
$2:function(a,b){var z,y
H.M(a)
z=J.ag(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",am:{"^":"b;a",
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
k:function(a){return"[0] "+this.a7(0).k(0)+"\n[1] "+this.a7(1).k(0)+"\n[2] "+this.a7(2).k(0)+"\n[3] "+this.a7(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.m(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.am){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
a7:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.m(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.m(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.m(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.m(y,x)
z[3]=y[x]
return new T.ay(z)},
a_:function(){var z=this.a
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
z[15]=1}},L:{"^":"b;a",
N:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.L){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.m(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gP:function(a){return this.a[0]},
gM:function(a){return this.a[1]}},r:{"^":"b;a",
J:function(a,b,c){var z=this.a
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
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.m(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbJ:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
X:function(a){var z,y,x
z=Math.sqrt(this.gbJ())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aC:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bA:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.r(new Float32Array(3))
z.J(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
af:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aT:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
sP:function(a,b){this.a[0]=b
return b},
sM:function(a,b){this.a[1]=b
return b},
sY:function(a,b){this.a[2]=b
return b},
gP:function(a){return this.a[0]},
gM:function(a){return this.a[1]},
gY:function(a){return this.a[2]},
p:{
it:function(a,b,c){var z=new T.r(new Float32Array(3))
z.J(a,b,c)
return z}}},ay:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ay){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.m(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gP:function(a){return this.a[0]},
gM:function(a){return this.a[1]},
gY:function(a){return this.a[2]},
gaG:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z={}
y=document
x=C.j.cb(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.i9(0,0,x,w,y.createElement("div"),R.jd("blue","gray",90,30))
u.cE(x,"blue","gray")
t=H.f(C.j.aE(y,"#webgl-canvas"),"$iscc")
s=new G.fA(t)
y=P.d
x=P.b
v=(t&&C.H).ca(t,"webgl2",P.dk(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.V(P.d8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.f9(v))
if($.ec>0)P.aN("I: "+r)
J.eR(v,0,0,0,1)
J.be(v,2929)
J.be(v,2884)
v=new Float32Array(3)
r=D.hd(null)
q=D.hs(t)
p=new T.am(new Float32Array(16))
p.a_()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hE(165,0,0,0,new T.r(v),-0.02,r,q,p,new T.r(o),new T.r(n),new T.r(m),new T.r(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.am(new Float32Array(16))
v.a_()
r=new T.am(new Float32Array(16))
r.a_()
k=new G.hH(l,50,1,0.1,1000,v,r,new T.am(new Float32Array(16)),P.N(y,x),"perspective",!1,!0)
k.aY()
j=t.clientWidth
i=t.clientHeight
t.width=j
t.height=i
k.cs(j,i)
h=G.cf(s,j,i)
v=$.eH()
r=[y]
q=P.B
p=new G.cn("BlackPerlinNoiseColor F",H.i([],r),H.i([],r),H.i([],r),H.i([],r),0,P.N(y,q))
p.U(H.i(["vNormal"],r))
p.a2(H.i(["uTime","uTransformationMatrix"],r))
p.b=p.ab(!1,H.w(H.i(["#define BLACK 1","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],r),"$isa",r,"$asa"),null)
g=G.bL("perlin",s,v,p)
p=P.N(y,x)
p.h(0,"cDepthTest",!0)
p.h(0,"cDepthWrite",!0)
p.h(0,"cBlendEquation",$.en())
p.h(0,"cStencilFunc",$.er())
v=new T.am(new Float32Array(16))
v.a_()
p.h(0,"uTransformationMatrix",v)
v=new T.am(new Float32Array(16))
v.a_()
p.h(0,"uModelMatrix",v)
f=G.de("torusknot",g,B.i1(!0,!0,1,2,3,20,128,16,4,!1))
if(typeof j!=="number")return j.al()
v=C.b.O(j,4)
if(typeof i!=="number")return i.al()
o=C.b.O(i,4)
n=G.cf(s,v,o)
m=G.cf(s,v,o)
e=new Q.fw(6,j,i,v,o,h,n,m,new G.dc(s,null,null,null,null))
o=$.eJ()
e.z=G.bL("highpass",s,o,$.eI())
d=V.kB(6,6)
q=new G.cn("BloomPassF",H.i([],r),H.i([],r),H.i([],r),H.i([],r),0,P.N(y,q))
q.U(H.i(["vTexUV"],r))
q.a2(H.i(["uDirection","uTexture"],r))
q.b=q.ab(!1,H.w(H.i([d,"void main() {\n    vec2 invSize = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = texture(uTexture, vTexUV).rgb * kernel[0];\n    for (int i = 1; i < kernel.length(); i++) {\n        vec2 offset = uDirection * invSize * float(i);\n        sum += texture(uTexture, vTexUV + offset).rgb * kernel[i];\n        sum += texture(uTexture, vTexUV - offset).rgb * kernel[i];\n    }\n    oFragColor = vec4(sum, 1.0);\n}\n"],r),"$isa",r,"$asa"),null)
e.Q=G.bL("bloom",s,o,q)
o=G.bL("bloom",s,o,$.eE())
e.ch=o
v=new T.r(new Float32Array(3))
v.J(-1,-1,0)
r=new T.r(new Float32Array(3))
r.J(1,-1,0)
q=new T.r(new Float32Array(3))
q.J(1,1,0)
c=new T.r(new Float32Array(3))
c.J(-1,1,0)
b=[T.r]
a=H.i([v,r,q,c],b)
v=new T.L(new Float32Array(2))
v.N(0,0)
r=new T.L(new Float32Array(2))
r.N(1,0)
q=new T.L(new Float32Array(2))
q.N(1,1)
c=new T.L(new Float32Array(2))
c.N(0,1)
a0=H.i([v,r,q,c],[T.L])
a1=new T.r(new Float32Array(3))
a1.J(0,0,1)
a2=H.i([a1,a1,a1,a1],b)
a3=new G.dd(!1,H.i([],[G.d9]),H.i([],[G.bF]),H.i([],b),P.N(y,[P.a,,]))
a3.am("aTexUV")
a3.cr(a)
a3.cp("aTexUV",a0)
a3.am("aNormal")
a3.cq("aNormal",a2)
e.dy=G.de("quad",o,a3)
v=P.N(y,x)
r=new T.L(new Float32Array(2))
r.N(0.65,0.66)
v.h(0,"uRange",r)
v.h(0,"uColorAlpha",new T.ay(new Float32Array(4)))
r=h.c
v.h(0,"uTexture",r)
e.cx=new G.ax(v,"uniformsHighPass",!1,!0)
v=P.N(y,x)
q=new T.L(new Float32Array(2))
q.N(1.5,0)
v.h(0,"uDirection",q)
m=m.c
v.h(0,"uTexture",m)
e.cy=new G.ax(v,"Bloom Horizontal",!1,!0)
v=P.N(y,x)
q=new T.L(new Float32Array(2))
q.N(0,1.5)
v.h(0,"uDirection",q)
v.h(0,"uTexture",n.c)
e.db=new G.ax(v,"Bloom Vertical",!1,!0)
x=P.N(y,x)
x.h(0,"uTexture",r)
x.h(0,"uScale",0.6)
x.h(0,"uColor",$.eo())
x.h(0,"uTexture2",m)
e.dx=new G.ax(x,"uniformApply",!1,!0)
z.a=0
new Q.kz(z,l,new G.hm(p,"mat",!1,!0),h,j,i,g,f,k,e,u).$1(0)},
fw:{"^":"b;a,aG:b>,c,d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy"},
kz:{"^":"n:27;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cC(b2)
if(typeof b2!=="number")return b2.aS()
z=this.a
z.a=b2+0
y=this.b
y.go+=0.01
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.a9()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.a9()
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
if(typeof v!=="number")return v.a9()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.di(y.id,-1.4707963267948965,1.4707963267948965)
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
t=y.k2
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
p=q[12]
o=q[13]
n=q[14]
m=new T.r(new Float32Array(3))
m.J(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
u=new Float32Array(3)
l=new T.r(u)
l.D(v)
l.aT(0,t)
l.X(0)
k=m.bA(l)
k.X(0)
j=l.bA(k)
j.X(0)
t=k.aC(v)
r=j.aC(v)
v=l.aC(v)
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
a=Math.sqrt(h.gbJ())
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
w.c.a5(0)
w.b.a5(0)
x.e=0
x.d=0
x.f=0
x.c.a5(0)
x.b.a5(0)
x=this.c
x.d.h(0,"uTime",b2/1000)
this.d.a0(17664,0,0,this.e,this.f)
w=[G.ax]
this.r.a3(this.x,H.i([this.y,x],w))
x=this.z
r=$.eG().valueAsNumber
if(typeof r!=="number")return r.a9()
t=$.eF().valueAsNumber
if(typeof t!=="number")return t.a9()
u=x.x
q=x.d
g=x.e
u.a0(17664,0,0,q,g)
i=x.cx
y=new T.L(new Float32Array(2))
y.N(r,r+0.01)
i.d.h(0,"uRange",y)
x.z.a3(x.dy,H.i([x.cx],w))
x.r.a0(17664,0,0,q,g)
x.Q.a3(x.dy,H.i([x.cy],w))
u.a0(17664,0,0,q,g)
x.Q.a3(x.dy,H.i([x.db],w))
x.y.a0(17664,0,0,x.b,x.c)
x.dx.d.h(0,"uScale",t)
x.ch.a3(x.dy,H.i([x.dx],w))
C.ad.gda(window).bU(this,-1)
this.Q.cG(z.a)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.df.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.dh.prototype
if(typeof a=="boolean")return J.ha.prototype
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.b9=function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.ed=function(a){if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.ki=function(a){if(typeof a=="number")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.kj=function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.ee=function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.bX=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.aC=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.a6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ki(a).T(a,b)}
J.bd=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kw(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b9(a).i(a,b)}
J.cH=function(a,b){return J.ee(a).aq(a,b)}
J.bv=function(a,b){return J.j(a).cZ(a,b)}
J.eK=function(a,b,c){return J.j(a).d_(a,b,c)}
J.cI=function(a,b){return J.j(a).bh(a,b)}
J.eL=function(a,b,c,d){return J.j(a).d7(a,b,c,d)}
J.cJ=function(a,b,c){return J.j(a).bj(a,b,c)}
J.eM=function(a,b){return J.j(a).dd(a,b)}
J.c2=function(a,b,c){return J.j(a).bk(a,b,c)}
J.c3=function(a,b,c){return J.j(a).bm(a,b,c)}
J.bw=function(a,b,c){return J.j(a).bn(a,b,c)}
J.bx=function(a,b){return J.j(a).dg(a,b)}
J.eN=function(a,b){return J.j(a).bo(a,b)}
J.eO=function(a,b,c){return J.j(a).bp(a,b,c)}
J.cK=function(a,b,c,d){return J.j(a).bq(a,b,c,d)}
J.eP=function(a,b){return J.j(a).br(a,b)}
J.eQ=function(a,b){return J.j(a).bs(a,b)}
J.eR=function(a,b,c,d,e){return J.j(a).bt(a,b,c,d,e)}
J.eS=function(a,b){return J.kj(a).K(a,b)}
J.c4=function(a,b,c){return J.b9(a).dj(a,b,c)}
J.c5=function(a){return J.j(a).bv(a)}
J.eT=function(a){return J.j(a).bw(a)}
J.eU=function(a){return J.j(a).bx(a)}
J.eV=function(a){return J.j(a).bz(a)}
J.eW=function(a){return J.j(a).dn(a)}
J.eX=function(a,b){return J.j(a).bB(a,b)}
J.c6=function(a,b){return J.j(a).bC(a,b)}
J.eY=function(a,b,c,d){return J.j(a).bD(a,b,c,d)}
J.eZ=function(a,b,c,d,e){return J.j(a).dr(a,b,c,d,e)}
J.f_=function(a,b,c,d,e){return J.j(a).bE(a,b,c,d,e)}
J.f0=function(a,b,c,d,e,f){return J.j(a).ds(a,b,c,d,e,f)}
J.f1=function(a,b){return J.ed(a).q(a,b)}
J.be=function(a,b){return J.j(a).bF(a,b)}
J.f2=function(a,b){return J.j(a).bG(a,b)}
J.f3=function(a){return J.j(a).dt(a)}
J.f4=function(a,b){return J.j(a).C(a,b)}
J.cL=function(a,b,c,d,e,f){return J.j(a).bI(a,b,c,d,e,f)}
J.f5=function(a){return J.j(a).gdc(a)}
J.ag=function(a){return J.A(a).gv(a)}
J.by=function(a){return J.ed(a).gw(a)}
J.aP=function(a){return J.b9(a).gj(a)}
J.f6=function(a){return J.j(a).gdB(a)}
J.f7=function(a){return J.j(a).gdG(a)}
J.f8=function(a){return J.bX(a).gaG(a)}
J.bz=function(a){return J.bX(a).gP(a)}
J.c7=function(a){return J.bX(a).gM(a)}
J.cM=function(a){return J.bX(a).gY(a)}
J.c8=function(a,b){return J.j(a).Z(a,b)}
J.f9=function(a){return J.j(a).ai(a)}
J.fa=function(a){return J.j(a).aI(a)}
J.fb=function(a,b){return J.j(a).aJ(a,b)}
J.fc=function(a,b,c){return J.j(a).aK(a,b,c)}
J.cN=function(a,b,c){return J.j(a).aO(a,b,c)}
J.fd=function(a,b){return J.j(a).bK(a,b)}
J.cO=function(a){return J.j(a).dC(a)}
J.fe=function(a,b,c,d){return J.j(a).aR(a,b,c,d)}
J.ff=function(a,b,c,d){return J.j(a).bS(a,b,c,d)}
J.bA=function(a,b,c,d){return J.j(a).bT(a,b,c,d)}
J.fg=function(a,b,c,d,e,f){return J.j(a).dH(a,b,c,d,e,f)}
J.fh=function(a){return J.ee(a).dI(a)}
J.bf=function(a){return J.A(a).k(a)}
J.fi=function(a,b,c,d){return J.j(a).dK(a,b,c,d)}
J.fj=function(a,b,c){return J.j(a).bX(a,b,c)}
J.fk=function(a,b,c){return J.j(a).bY(a,b,c)}
J.c9=function(a,b,c){return J.j(a).bZ(a,b,c)}
J.fl=function(a,b,c){return J.j(a).c_(a,b,c)}
J.cP=function(a,b,c){return J.j(a).c0(a,b,c)}
J.cQ=function(a,b,c){return J.j(a).c1(a,b,c)}
J.cR=function(a,b,c){return J.j(a).c2(a,b,c)}
J.cS=function(a,b,c,d){return J.j(a).c3(a,b,c,d)}
J.cT=function(a,b,c,d){return J.j(a).c4(a,b,c,d)}
J.fm=function(a,b){return J.j(a).c5(a,b)}
J.fn=function(a,b,c){return J.j(a).dL(a,b,c)}
J.fo=function(a,b,c,d,e,f,g){return J.j(a).c6(a,b,c,d,e,f,g)}
J.fp=function(a,b,c,d,e){return J.j(a).c8(a,b,c,d,e)}
I.aM=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bB.prototype
C.H=W.cc.prototype
C.w=W.fH.prototype
C.q=W.fO.prototype
C.I=W.fQ.prototype
C.J=W.h2.prototype
C.j=W.h3.prototype
C.K=J.h.prototype
C.a=J.bj.prototype
C.x=J.df.prototype
C.b=J.dg.prototype
C.L=J.dh.prototype
C.r=J.bk.prototype
C.i=J.bl.prototype
C.S=J.bm.prototype
C.h=H.hx.prototype
C.n=H.hz.prototype
C.W=W.hA.prototype
C.A=J.hI.prototype
C.B=W.hS.prototype
C.G=W.ig.prototype
C.v=J.b1.prototype
C.ac=W.aG.prototype
C.ad=W.iw.prototype
C.e=new P.jp()
C.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.N=function(hooks) {
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
C.y=function(hooks) { return hooks; }

C.O=function(getTagFallback) {
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
C.P=function() {
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
C.Q=function(hooks) {
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
C.R=function(hooks) {
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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.T=H.i(I.aM(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.U=H.i(I.aM(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.V=H.i(I.aM([]),[P.d])
C.t=H.i(I.aM(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.i(I.aM(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.X=new G.C("vec3","vertex btangents",0)
C.d=new G.C("vec3","",0)
C.Y=new G.C("vec4","delta from light",0)
C.o=new G.C("","",0)
C.C=new G.C("vec3","vertex coordinates",0)
C.Z=new G.C("vec3","vertex binormals",0)
C.D=new G.C("vec4","for wireframe",0)
C.a_=new G.C("vec4","per vertex color",0)
C.a0=new G.C("float","for normal maps",0)
C.k=new G.C("mat4","",0)
C.a2=new G.C("mat4","",4)
C.a1=new G.C("mat4","",128)
C.c=new G.C("float","",0)
C.a3=new G.C("float","",4)
C.a4=new G.C("float","depth for shadowmaps",0)
C.f=new G.C("sampler2D","",0)
C.a5=new G.C("float","for bump maps",0)
C.a6=new G.C("vec2","texture uvs",0)
C.a7=new G.C("float","time since program start in sec",0)
C.l=new G.C("vec2","",0)
C.a8=new G.C("samplerCube","",0)
C.m=new G.C("vec4","",0)
C.a9=new G.C("vec3","vertex normals",0)
C.aa=new G.C("sampler2DShadow","",0)
C.E=new G.C("vec3","per vertex color",0)
C.F=new G.C("mat3","",0)
C.ab=new G.C("vec3","vertex tangents",0)
$.a7=0
$.aQ=null
$.cW=null
$.ct=!1
$.eg=null
$.e7=null
$.el=null
$.bV=null
$.c_=null
$.cA=null
$.aJ=null
$.b3=null
$.b4=null
$.cu=!1
$.H=C.e
$.ac=null
$.ce=null
$.d6=null
$.d5=null
$.d2=null
$.d1=null
$.d0=null
$.d_=null
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
I.$lazy(y,x,w)}})(["kV","eq",function(){return H.ef("_$dart_dartClosure")},"lx","cE",function(){return H.ef("_$dart_js")},"mj","et",function(){return H.a9(H.bN({
toString:function(){return"$receiver$"}}))},"mk","eu",function(){return H.a9(H.bN({$method$:null,
toString:function(){return"$receiver$"}}))},"ml","ev",function(){return H.a9(H.bN(null))},"mm","ew",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mp","ez",function(){return H.a9(H.bN(void 0))},"mq","eA",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mo","ey",function(){return H.a9(H.dB(null))},"mn","ex",function(){return H.a9(function(){try{null.$method$}catch(z){return z.message}}())},"ms","eC",function(){return H.a9(H.dB(void 0))},"mr","eB",function(){return H.a9(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mC","cF",function(){return P.iz()},"mS","bc",function(){return[]},"kS","ep",function(){return{}},"mJ","eD",function(){return P.cl(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mK","cG",function(){return P.N(P.d,P.bh)},"m5","er",function(){return new G.dA(1281,0,4294967295)},"kN","en",function(){return new G.dz(1281,1281,1281)},"mQ","a5",function(){return P.dk(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.E,"aColorAlpha",C.a_,"aPosition",C.C,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.D,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.E,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.Y,"vCenter",C.D,"vDepth",C.a4,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.aa,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a8,"uAnimationTable",C.f,"uTime",C.a7,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.c,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0],P.d,G.C)},"me","es",function(){var z=new G.ii(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"kQ","eo",function(){return T.it(1,1,1)},"n0","eJ",function(){var z,y
z=G.bM("uv-passthru")
y=[P.d]
z.aU(H.i(["aPosition","aTexUV"],y))
z.U(H.i(["vTexUV"],y))
z.b=z.ab(!0,H.w(H.i(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y),"$isa",y,"$asa"),null)
return z},"mT","eE",function(){var z,y
z=G.bM("BloomPassF")
y=[P.d]
z.U(H.i(["vTexUV"],y))
z.a2(H.i(["uTexture","uTexture2","uScale","uColor"],y))
z.an(H.i(["void main() {\n\toFragColor = texture(uTexture, vTexUV) +\n\t                uScale *\n\t                vec4(uColor, 1.0) *\n\t                texture(uTexture2, vTexUV);\n}\n"],y))
return z},"n_","eI",function(){var z,y
z=G.bM("ScaledLuminosityHighPassF")
y=[P.d]
z.U(H.i(["vTexUV"],y))
z.a2(H.i(["uRange","uColorAlpha","uTexture"],y))
z.an(H.i(["// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texture(uTexture, vTexUV);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n "],y))
return z},"mZ","eH",function(){var z,y
z=G.bM("PerlinNoiseV")
y=[P.d]
z.aU(H.i(["aPosition"],y))
z.U(H.i(["vNormal"],y))
z.a2(H.i(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.an(H.i(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"],y))
return z},"mX","eG",function(){return H.f(C.j.aE(W.ea(),"#luminance"),"$iscg")},"mW","eF",function(){return H.f(C.j.aE(W.ea(),"#intensity"),"$iscg")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.T]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.B]},{func:1,ret:P.Q,args:[W.a8]},{func:1,ret:P.Q,args:[P.d]},{func:1,ret:P.F,args:[W.aV]},{func:1,ret:P.Q,args:[W.R,P.d,P.d,W.bp]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a1]},{func:1,ret:[P.aa,,],args:[,]},{func:1,ret:P.Q,args:[W.t]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.ai]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:-1,args:[P.X,T.r]},{func:1,ret:P.F,args:[W.aG]},{func:1,ret:P.B,args:[P.B,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.kG(d||a)
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
Isolate.b8=a.b8
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.ei,[])
else Q.ei([])})})()
//# sourceMappingURL=bloom.dart.js.map
