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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.co"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.co"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.co(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b7=function(){}
var dart=[["","",,H,{"^":"",l7:{"^":"b;a"}}],["","",,J,{"^":"",
cs:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bU:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cr==null){H.k5()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.du("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cv()]
if(v!=null)return v
v=H.ka(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cv(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.aX(a)},
k:["c4",function(a){return"Instance of '"+H.aY(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fM:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isN:1},
d6:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isF:1},
cb:{"^":"h;",
gv:function(a){return 0},
k:["c6",function(a){return String(a)}]},
hk:{"^":"cb;"},
b_:{"^":"cb;"},
bk:{"^":"cb;",
k:function(a){var z=a[$.ed()]
if(z==null)return this.c6(a)
return"JavaScript function for "+H.e(J.bd(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbf:1},
bh:{"^":"h;$ti",
l:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.Y(P.x("add"))
a.push(b)},
H:function(a,b){var z
H.w(b,"$isi",[H.p(a,0)],"$asi")
if(!!a.fixed$length)H.Y(P.x("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
Z:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
ba:function(a,b){var z,y
H.j(b,{func:1,ret:P.N,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aB(a))}return!1},
c_:function(a,b){if(!!a.immutable$list)H.Y(P.x("sort"))
H.hI(a,J.jH(),H.p(a,0))},
a3:function(a){return this.c_(a,null)},
dk:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.ag(a[z],b))return z
return-1},
dj:function(a,b){return this.dk(a,b,0)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.ag(a[z],b))return!0
return!1},
k:function(a){return P.c9(a,"[","]")},
gw:function(a){return new J.f4(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.aX(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.b6(a,b))
return a[b]},
i:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.Y(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b6(a,b))
a[b]=c},
$isu:1,
$asu:I.b7,
$isi:1,
$isa:1,
p:{
fL:function(a,b){return J.ca(H.o(a,[b]))},
ca:function(a){H.br(a)
a.fixed$length=Array
return a},
l5:[function(a,b){return J.ey(H.e7(a,"$isT"),H.e7(b,"$isT"))},"$2","jH",8,0,29]}},
l6:{"^":"bh;$ti"},
f4:{"^":"b;a,b,c,0d,$ti",
saR:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.S(z))
x=this.c
if(x>=y){this.saR(null)
return!1}this.saR(z[x]);++this.c
return!0},
$isaS:1},
bi:{"^":"h;",
J:function(a,b){var z
H.ct(b)
if(typeof b!=="number")throw H.c(H.b4(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.ga9(b)
if(this.ga9(a)===z)return 0
if(this.ga9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga9:function(a){return a===0?1/a<0:a<0},
bG:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.x(""+a+".toInt()"))},
d4:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.x(""+a+".ceil()"))},
d5:function(a,b,c){if(this.J(b,c)>0)throw H.c(H.b4(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
dC:function(a,b){var z
if(b>20)throw H.c(P.bG(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ga9(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
c8:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b7(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.b7(a,b)},
b7:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.x("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
b5:function(a,b){var z
if(a>0)z=this.cS(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cS:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.c(H.b4(b))
return a>b},
$isT:1,
$asT:function(){return[P.D]},
$isX:1,
$isD:1},
d5:{"^":"bi;",$isC:1},
d4:{"^":"bi;"},
bj:{"^":"h;",
ag:function(a,b){if(b>=a.length)throw H.c(H.b6(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.t(b)
if(typeof b!=="string")throw H.c(P.cM(b,null,null))
return a+b},
c1:function(a,b,c){var z
if(c>a.length)throw H.c(P.bG(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c0:function(a,b){return this.c1(a,b,0)},
c3:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bH(b,null,null))
if(b>c)throw H.c(P.bH(b,null,null))
if(c>a.length)throw H.c(P.bH(c,null,null))
return a.substring(b,c)},
c2:function(a,b){return this.c3(a,b,null)},
dB:function(a){return a.toLowerCase()},
d6:function(a,b,c){if(c>a.length)throw H.c(P.bG(c,0,a.length,null,null))
return H.kg(a,b,c)},
J:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.c(H.b4(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b6(a,b))
return a[b]},
$isu:1,
$asu:I.b7,
$isT:1,
$asT:function(){return[P.d]},
$ishh:1,
$isd:1}}],["","",,H,{"^":"",
fJ:function(){return new P.cg("No element")},
fK:function(){return new P.cg("Too many elements")},
hI:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.j(b,{func:1,ret:P.C,args:[c,c]})
H.bl(a,0,J.aN(a)-1,b,c)},
bl:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.hH(a,b,c,d,e)
else H.hG(a,b,c,d,e)},
hH:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.C,args:[e,e]})
for(z=b+1,y=J.b8(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a5(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hG:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.j(a1,{func:1,ret:P.C,args:[a2,a2]})
z=C.d.S(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.S(b+a0,2)
v=w-z
u=w+z
t=J.b8(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a5(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a5(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a5(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a5(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a5(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a5(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a5(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a5(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a5(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.ag(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a0()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.P()
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
if(typeof e!=="number")return e.a0()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.P()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.P()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a0()
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
H.bl(a,b,m-2,a1,a2)
H.bl(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.ag(a1.$2(t.h(a,m),r),0);)++m
for(;J.ag(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a0()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bl(a,m,l,a1,a2)}else H.bl(a,m,l,a1,a2)},
cX:{"^":"i;"},
bE:{"^":"cX;$ti",
gw:function(a){return new H.da(this,this.gj(this),0,[H.cq(this,"bE",0)])},
av:function(a,b){return this.c5(0,H.j(b,{func:1,ret:P.N,args:[H.cq(this,"bE",0)]}))}},
da:{"^":"b;a,b,c,0d,$ti",
saS:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.b8(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aB(z))
w=this.c
if(w>=x){this.saS(null)
return!1}this.saS(y.q(z,w));++this.c
return!0},
$isaS:1},
fX:{"^":"bE;a,b,$ti",
gj:function(a){return J.aN(this.a)},
q:function(a,b){return this.b.$1(J.eH(this.a,b))},
$asbE:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dv:{"^":"i;a,b,$ti",
gw:function(a){return new H.i5(J.bx(this.a),this.b,this.$ti)}},
i5:{"^":"aS;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bD:{"^":"b;$ti"}}],["","",,H,{"^":"",
az:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jY:function(a){return init.types[H.L(a)]},
k8:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isv},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bd(a)
if(typeof z!=="string")throw H.c(H.b4(a))
return z},
aX:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aY:function(a){return H.hl(a)+H.bN(H.ae(a),0,null)},
hl:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb_){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.az(w.length>1&&C.h.ag(w,0)===36?C.h.c2(w,1):w)},
aD:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hs:function(a){var z=H.aD(a).getFullYear()+0
return z},
hq:function(a){var z=H.aD(a).getMonth()+1
return z},
hm:function(a){var z=H.aD(a).getDate()+0
return z},
hn:function(a){var z=H.aD(a).getHours()+0
return z},
hp:function(a){var z=H.aD(a).getMinutes()+0
return z},
hr:function(a){var z=H.aD(a).getSeconds()+0
return z},
ho:function(a){var z=H.aD(a).getMilliseconds()+0
return z},
bq:function(a){throw H.c(H.b4(a))},
l:function(a,b){if(a==null)J.aN(a)
throw H.c(H.b6(a,b))},
b6:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aA(!0,b,"index",null)
z=H.L(J.aN(a))
if(!(b<0)){if(typeof z!=="number")return H.bq(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bH(b,"index",null)},
b4:function(a){return new P.aA(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dg()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ea})
z.name=""}else z.toString=H.ea
return z},
ea:function(){return J.bd(this.dartException)},
Y:function(a){throw H.c(a)},
S:function(a){throw H.c(P.aB(a))},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ki(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.b5(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cc(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.df(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ef()
u=$.eg()
t=$.eh()
s=$.ei()
r=$.el()
q=$.em()
p=$.ek()
$.ej()
o=$.eo()
n=$.en()
m=v.I(y)
if(m!=null)return z.$1(H.cc(H.t(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.cc(H.t(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.df(H.t(y),m))}}return z.$1(new H.i2(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dk()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aA(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dk()
return a},
ba:function(a){var z
if(a==null)return new H.dL(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dL(a)},
jU:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
k7:function(a,b,c,d,e,f){H.f(a,"$isbf")
switch(H.L(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d0("Unsupported number of arguments for wrapped closure"))},
b5:function(a,b){var z
H.L(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k7)
a.$identity=z
return z},
fe:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hw(z).r}else x=d
w=e?Object.create(new H.hK().constructor.prototype):Object.create(new H.c4(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a6
if(typeof u!=="number")return u.G()
$.a6=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cR(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jY,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cP:H.c5
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cR(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fb:function(a,b,c,d){var z=H.c5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cR:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fd(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fb(y,!w,z,b)
if(y===0){w=$.a6
if(typeof w!=="number")return w.G()
$.a6=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aO
if(v==null){v=H.bA("self")
$.aO=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a6
if(typeof w!=="number")return w.G()
$.a6=w+1
t+=w
w="return function("+t+"){return this."
v=$.aO
if(v==null){v=H.bA("self")
$.aO=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fc:function(a,b,c,d){var z,y
z=H.c5
y=H.cP
switch(b?-1:a){case 0:throw H.c(H.hB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fd:function(a,b){var z,y,x,w,v,u,t,s
z=$.aO
if(z==null){z=H.bA("self")
$.aO=z}y=$.cO
if(y==null){y=H.bA("receiver")
$.cO=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fc(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a6
if(typeof y!=="number")return y.G()
$.a6=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a6
if(typeof y!=="number")return y.G()
$.a6=y+1
return new Function(z+y+"}")()},
co:function(a,b,c,d,e,f,g){return H.fe(a,b,H.L(c),d,!!e,!!f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a2(a,"String"))},
e_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"double"))},
ct:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a2(a,"num"))},
bQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a2(a,"bool"))},
L:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a2(a,"int"))},
cu:function(a,b){throw H.c(H.a2(a,H.az(H.t(b).substring(3))))},
ke:function(a,b){throw H.c(H.cQ(a,H.az(H.t(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cu(a,b)},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.ke(a,b)},
e7:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cu(a,b)},
br:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a2(a,"List<dynamic>"))},
k9:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cu(a,b)},
cp:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.L(z)]
else return a.$S()}return},
bp:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cp(J.A(a))
if(z==null)return!1
return H.dR(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.ck)return a
$.ck=!0
try{if(H.bp(a,b))return a
z=H.bs(b)
y=H.a2(a,z)
throw H.c(y)}finally{$.ck=!1}},
bS:function(a,b){if(a!=null&&!H.cn(a,b))H.Y(H.a2(a,H.bs(b)))
return a},
dV:function(a){var z,y
z=J.A(a)
if(!!z.$ism){y=H.cp(z)
if(y!=null)return H.bs(y)
return"Closure"}return H.aY(a)},
kh:function(a){throw H.c(new P.fk(H.t(a)))},
e3:function(a){return init.getIsolateTag(a)},
o:function(a,b){a.$ti=b
return a},
ae:function(a){if(a==null)return
return a.$ti},
mx:function(a,b,c){return H.aL(a["$as"+H.e(c)],H.ae(b))},
b9:function(a,b,c,d){var z
H.t(c)
H.L(d)
z=H.aL(a["$as"+H.e(c)],H.ae(b))
return z==null?null:z[d]},
cq:function(a,b,c){var z
H.t(b)
H.L(c)
z=H.aL(a["$as"+H.e(b)],H.ae(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.L(b)
z=H.ae(a)
return z==null?null:z[b]},
bs:function(a){return H.ax(a,null)},
ax:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.az(a[0].builtin$cls)+H.bN(a,1,b)
if(typeof a=="function")return H.az(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.L(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.e(b[y])}if('func' in a)return H.jG(a,b)
if('futureOr' in a)return"FutureOr<"+H.ax("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.o([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.l(b,r)
t=C.h.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.ax(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ax(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ax(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ax(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jT(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.ax(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bN:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.ci("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}return"<"+z.k(0)+">"},
jX:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$ism){y=H.cp(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ae(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aJ:function(a,b,c,d){var z,y
H.t(b)
H.br(c)
H.t(d)
if(a==null)return!1
z=H.ae(a)
y=J.A(a)
if(y[b]==null)return!1
return H.dY(H.aL(y[d],z),null,c,null)},
bt:function(a,b,c,d){H.t(b)
H.br(c)
H.t(d)
if(a==null)return a
if(H.aJ(a,b,c,d))return a
throw H.c(H.cQ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.az(b.substring(3))+H.bN(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.t(b)
H.br(c)
H.t(d)
if(a==null)return a
if(H.aJ(a,b,c,d))return a
throw H.c(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.az(b.substring(3))+H.bN(c,0,null),init.mangledGlobalNames)))},
dY:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.V(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.V(a[y],b,c[y],d))return!1
return!0},
mt:function(a,b,c){return a.apply(b,H.aL(J.A(b)["$as"+H.e(c)],H.ae(b)))},
e5:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.e5(z)}return!1},
cn:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.e5(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cn(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bp(a,b)}z=J.A(a).constructor
y=H.ae(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.V(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cn(a,b))throw H.c(H.a2(a,H.bs(b)))
return a},
V:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.V(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.dR(a,b,c,d)
if('func' in a)return c.builtin$cls==="bf"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.V("type" in a?a.type:null,b,x,d)
else if(H.V(a,b,x,d))return!0
else{if(!('$is'+"aR" in y.prototype))return!1
w=y.prototype["$as"+"aR"]
v=H.aL(w,z?a.slice(1):null)
return H.V(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dY(H.aL(r,z),b,u,d)},
dR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.V(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.V(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.V(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.V(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kd(m,b,l,d)},
kd:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.V(c[w],d,a[w],b))return!1}return!0},
mu:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
ka:function(a){var z,y,x,w,v,u
z=H.t($.e4.$1(a))
y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.dX.$2(a,z))
if(z!=null){y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bX(x)
$.bR[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bW[z]=x
return x}if(v==="-"){u=H.bX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e8(a,x)
if(v==="*")throw H.c(P.du(z))
if(init.leafTags[z]===true){u=H.bX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e8(a,x)},
e8:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cs(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bX:function(a){return J.cs(a,!1,null,!!a.$isv)},
kc:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bX(z)
else return J.cs(z,c,null,null)},
k5:function(){if(!0===$.cr)return
$.cr=!0
H.k6()},
k6:function(){var z,y,x,w,v,u,t,s
$.bR=Object.create(null)
$.bW=Object.create(null)
H.k1()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e9.$1(v)
if(u!=null){t=H.kc(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k1:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aI(C.M,H.aI(C.R,H.aI(C.y,H.aI(C.y,H.aI(C.Q,H.aI(C.N,H.aI(C.O(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.e4=new H.k2(v)
$.dX=new H.k3(u)
$.e9=new H.k4(t)},
aI:function(a,b){return a(b)||b},
kg:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hv:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hw:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ca(z)
y=z[0]
x=z[1]
return new H.hv(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hY:{"^":"b;a,b,c,d,e,f",
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
if(z==null)z=H.o([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dr:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
he:{"^":"M;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
df:function(a,b){return new H.he(a,b==null?null:b.method)}}},
fN:{"^":"M;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cc:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fN(a,y,z?null:b.receiver)}}},
i2:{"^":"M;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ki:{"^":"m:5;a",
$1:function(a){if(!!J.A(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dL:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa1:1},
m:{"^":"b;",
k:function(a){return"Closure '"+H.aY(this).trim()+"'"},
gbU:function(){return this},
$isbf:1,
gbU:function(){return this}},
dm:{"^":"m;"},
hK:{"^":"dm;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.az(z)+"'"}},
c4:{"^":"dm;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aX(this.a)
else y=typeof z!=="object"?J.ah(z):H.aX(z)
return(y^H.aX(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aY(z)+"'")},
p:{
c5:function(a){return a.a},
cP:function(a){return a.c},
bA:function(a){var z,y,x,w,v
z=new H.c4("self","target","receiver","name")
y=J.ca(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hZ:{"^":"M;a",
k:function(a){return this.a},
p:{
a2:function(a,b){return new H.hZ("TypeError: "+P.bC(a)+": type '"+H.dV(a)+"' is not a subtype of type '"+b+"'")}}},
f9:{"^":"M;a",
k:function(a){return this.a},
p:{
cQ:function(a,b){return new H.f9("CastError: "+P.bC(a)+": type '"+H.dV(a)+"' is not a subtype of type '"+b+"'")}}},
hA:{"^":"M;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hB:function(a){return new H.hA(a)}}},
ds:{"^":"b;a,0b,0c,0d",
ga6:function(){var z=this.b
if(z==null){z=H.bs(this.a)
this.b=z}return z},
k:function(a){return this.ga6()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.ga6())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.ds&&this.ga6()===b.ga6()}},
d7:{"^":"db;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.al(this,[H.p(this,0)])},
a8:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cC(z,b)}else{y=this.dl(b)
return y}},
dl:function(a){var z=this.d
if(z==null)return!1
return this.at(this.am(z,J.ah(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a4(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a4(w,b)
x=y==null?null:y.b
return x}else return this.dm(b)},
dm:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.am(z,J.ah(a)&0x3ffffff)
x=this.at(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ao()
this.b=z}this.aT(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ao()
this.c=y}this.aT(y,b,c)}else{x=this.d
if(x==null){x=this.ao()
this.d=x}w=J.ah(b)&0x3ffffff
v=this.am(x,w)
if(v==null)this.ar(x,w,[this.ae(b,c)])
else{u=this.at(v,b)
if(u>=0)v[u].b=c
else v.push(this.ae(b,c))}}},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aB(this))
z=z.c}},
aT:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.a4(a,b)
if(z==null)this.ar(a,b,this.ae(b,c))
else z.b=c},
aV:function(){this.r=this.r+1&67108863},
ae:function(a,b){var z,y
z=new H.fS(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aV()
return z},
at:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ag(a[y].a,b))return y
return-1},
k:function(a){return P.dc(this)},
a4:function(a,b){return a[b]},
am:function(a,b){return a[b]},
ar:function(a,b,c){a[b]=c},
cD:function(a,b){delete a[b]},
cC:function(a,b){return this.a4(a,b)!=null},
ao:function(){var z=Object.create(null)
this.ar(z,"<non-identifier-key>",z)
this.cD(z,"<non-identifier-key>")
return z},
$isd8:1},
fS:{"^":"b;a,b,0c,0d"},
al:{"^":"cX;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.fT(z,z.r,this.$ti)
y.c=z.e
return y}},
fT:{"^":"b;a,b,0c,0d,$ti",
saU:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aB(z))
else{z=this.c
if(z==null){this.saU(null)
return!1}else{this.saU(z.a)
this.c=this.c.c
return!0}}},
$isaS:1},
k2:{"^":"m:5;a",
$1:function(a){return this.a(a)}},
k3:{"^":"m:13;a",
$2:function(a,b){return this.a(a,b)}},
k4:{"^":"m:14;a",
$1:function(a){return this.a(H.t(a))}}}],["","",,H,{"^":"",
jT:function(a){return J.fL(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bM:function(a){var z,y
if(!!J.A(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b6(b,a))},
h9:{"^":"h;",$isi_:1,"%":"DataView;ArrayBufferView;cf|dF|dG|dd|dH|dI|an"},
cf:{"^":"h9;",
gj:function(a){return a.length},
$isu:1,
$asu:I.b7,
$isv:1,
$asv:I.b7},
dd:{"^":"dG;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
i:function(a,b,c){H.e_(c)
H.ab(b,a,a.length)
a[b]=c},
$asbD:function(){return[P.X]},
$asn:function(){return[P.X]},
$isi:1,
$asi:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
"%":"Float64Array"},
an:{"^":"dI;",
i:function(a,b,c){H.L(c)
H.ab(b,a,a.length)
a[b]=c},
$asbD:function(){return[P.C]},
$asn:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isa:1,
$asa:function(){return[P.C]}},
h8:{"^":"dd;",$isad:1,"%":"Float32Array"},
lg:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lh:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isfH:1,
"%":"Int32Array"},
li:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lj:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ha:{"^":"an;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ism3:1,
"%":"Uint32Array"},
lk:{"^":"an;",
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ll:{"^":"an;",
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dF:{"^":"cf+n;"},
dG:{"^":"dF+bD;"},
dH:{"^":"cf+n;"},
dI:{"^":"dH+bD;"}}],["","",,P,{"^":"",
i9:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jO()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b5(new P.ib(z),1)).observe(y,{childList:true})
return new P.ia(z,y,x)}else if(self.setImmediate!=null)return P.jP()
return P.jQ()},
md:[function(a){self.scheduleImmediate(H.b5(new P.ic(H.j(a,{func:1,ret:-1})),0))},"$1","jO",4,0,4],
me:[function(a){self.setImmediate(H.b5(new P.id(H.j(a,{func:1,ret:-1})),0))},"$1","jP",4,0,4],
mf:[function(a){H.j(a,{func:1,ret:-1})
P.jo(0,a)},"$1","jQ",4,0,4],
jK:function(a,b){if(H.bp(a,{func:1,args:[P.b,P.a1]}))return H.j(a,{func:1,ret:null,args:[P.b,P.a1]})
if(H.bp(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cM(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jJ:function(){var z,y
for(;z=$.aH,z!=null;){$.b3=null
y=z.b
$.aH=y
if(y==null)$.b2=null
z.a.$0()}},
mr:[function(){$.cl=!0
try{P.jJ()}finally{$.b3=null
$.cl=!1
if($.aH!=null)$.cw().$1(P.dZ())}},"$0","dZ",0,0,1],
dU:function(a){var z=new P.dx(H.j(a,{func:1,ret:-1}))
if($.aH==null){$.b2=z
$.aH=z
if(!$.cl)$.cw().$1(P.dZ())}else{$.b2.b=z
$.b2=z}},
jN:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.aH
if(z==null){P.dU(a)
$.b3=$.b2
return}y=new P.dx(a)
x=$.b3
if(x==null){y.b=z
$.b3=y
$.aH=y}else{y.b=x.b
x.b=y
$.b3=y
if(y.b==null)$.b2=y}},
kf:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.H
if(C.e===y){P.bP(null,null,C.e,a)
return}y.toString
P.bP(null,null,y,H.j(y.bd(a),z))},
bO:function(a,b,c,d,e){var z={}
z.a=d
P.jN(new P.jL(z,e))},
dS:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.H
if(y===c)return d.$0()
$.H=c
z=y
try{y=d.$0()
return y}finally{$.H=z}},
dT:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.H
if(y===c)return d.$1(e)
$.H=c
z=y
try{y=d.$1(e)
return y}finally{$.H=z}},
jM:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.H
if(y===c)return d.$2(e,f)
$.H=c
z=y
try{y=d.$2(e,f)
return y}finally{$.H=z}},
bP:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bd(d):c.d1(d,-1)
P.dU(d)},
ib:{"^":"m:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ia:{"^":"m:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ic:{"^":"m:0;a",
$0:function(){this.a.$0()}},
id:{"^":"m:0;a",
$0:function(){this.a.$0()}},
jn:{"^":"b;a,0b,c",
cw:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b5(new P.jp(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
p:{
jo:function(a,b){var z=new P.jn(!0,0)
z.cw(a,b)
return z}}},
jp:{"^":"m:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ih:{"^":"b;$ti"},
ji:{"^":"ih;a,$ti"},
aG:{"^":"b;0a,b,c,d,e,$ti",
dn:function(a){if(this.c!==6)return!0
return this.b.b.au(H.j(this.d,{func:1,ret:P.N,args:[P.b]}),a.a,P.N,P.b)},
di:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bp(z,{func:1,args:[P.b,P.a1]}))return H.bS(w.dv(z,a.a,a.b,null,y,P.a1),x)
else return H.bS(w.au(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aa:{"^":"b;b6:a<,b,0cP:c<,$ti",
bF:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.e){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jK(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aa(0,$.H,[c])
w=b==null?1:3
this.aX(new P.aG(x,w,a,b,[z,c]))
return x},
bE:function(a,b){return this.bF(a,null,b)},
aX:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaG")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaa")
z=y.a
if(z<4){y.aX(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bP(null,null,z,H.j(new P.ix(this,a),{func:1,ret:-1}))}},
b3:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaG")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaa")
y=u.a
if(y<4){u.b3(a)
return}this.a=y
this.c=u.c}z.a=this.a5(a)
y=this.b
y.toString
P.bP(null,null,y,H.j(new P.iC(z,this),{func:1,ret:-1}))}},
aq:function(){var z=H.f(this.c,"$isaG")
this.c=null
return this.a5(z)},
a5:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ah:function(a){var z,y,x
z=H.p(this,0)
H.bS(a,{futureOr:1,type:z})
y=this.$ti
if(H.aJ(a,"$isaR",y,"$asaR"))if(H.aJ(a,"$isaa",y,null))P.dA(a,this)
else P.iy(a,this)
else{x=this.aq()
H.z(a,z)
this.a=4
this.c=a
P.b1(this,x)}},
aZ:function(a,b){var z
H.f(b,"$isa1")
z=this.aq()
this.a=8
this.c=new P.U(a,b)
P.b1(this,z)},
$isaR:1,
p:{
iy:function(a,b){var z,y,x
b.a=1
try{a.bF(new P.iz(b),new P.iA(b),null)}catch(x){z=H.a4(x)
y=H.ba(x)
P.kf(new P.iB(b,z,y))}},
dA:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaa")
if(z>=4){y=b.aq()
b.a=a.a
b.c=a.c
P.b1(b,y)}else{y=H.f(b.c,"$isaG")
b.a=2
b.c=a
a.b3(y)}},
b1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isU")
y=y.b
u=v.a
t=v.b
y.toString
P.bO(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b1(z.a,b)}y=z.a
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
if(p){H.f(r,"$isU")
y=y.b
u=r.a
t=r.b
y.toString
P.bO(null,null,y,u,t)
return}o=$.H
if(o!=q)$.H=q
else o=null
y=b.c
if(y===8)new P.iF(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iE(x,b,r).$0()}else if((y&2)!==0)new P.iD(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.A(y).$isaR){if(y.a>=4){n=H.f(t.c,"$isaG")
t.c=null
b=t.a5(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dA(y,t)
return}}m=b.b
n=H.f(m.c,"$isaG")
m.c=null
b=m.a5(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.f(u,"$isU")
m.a=8
m.c=u}z.a=m
y=m}}}},
ix:{"^":"m:0;a,b",
$0:function(){P.b1(this.a,this.b)}},
iC:{"^":"m:0;a,b",
$0:function(){P.b1(this.b,this.a.a)}},
iz:{"^":"m:6;a",
$1:function(a){var z=this.a
z.a=0
z.ah(a)}},
iA:{"^":"m:16;a",
$2:function(a,b){H.f(b,"$isa1")
this.a.aZ(a,b)},
$1:function(a){return this.$2(a,null)}},
iB:{"^":"m:0;a,b,c",
$0:function(){this.a.aZ(this.b,this.c)}},
iF:{"^":"m:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bD(H.j(w.d,{func:1}),null)}catch(v){y=H.a4(v)
x=H.ba(v)
if(this.d){w=H.f(this.a.a.c,"$isU").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isU")
else u.b=new P.U(y,x)
u.a=!0
return}if(!!J.A(z).$isaR){if(z instanceof P.aa&&z.gb6()>=4){if(z.gb6()===8){w=this.b
w.b=H.f(z.gcP(),"$isU")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bE(new P.iG(t),null)
w.a=!1}}},
iG:{"^":"m:17;a",
$1:function(a){return this.a}},
iE:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.au(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a4(t)
y=H.ba(t)
x=this.a
x.b=new P.U(z,y)
x.a=!0}}},
iD:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isU")
w=this.c
if(w.dn(z)&&w.e!=null){v=this.b
v.b=w.di(z)
v.a=!1}}catch(u){y=H.a4(u)
x=H.ba(u)
w=H.f(this.a.a.c,"$isU")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.U(y,x)
s.a=!0}}},
dx:{"^":"b;a,0b"},
hO:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.aa(0,$.H,[P.C])
z.a=0
x=H.p(this,0)
w=H.j(new P.hQ(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.hR(z,y),{func:1,ret:-1})
W.aw(this.a,this.b,w,!1,x)
return y}},
hQ:{"^":"m;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.p(this.b,0)]}}},
hR:{"^":"m:0;a,b",
$0:function(){this.b.ah(this.a.a)}},
hP:{"^":"b;"},
U:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isM:1},
jv:{"^":"b;",$ismb:1},
jL:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dg()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
j1:{"^":"jv;",
dw:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.dS(null,null,this,a,-1)}catch(x){z=H.a4(x)
y=H.ba(x)
P.bO(null,null,this,z,H.f(y,"$isa1"))}},
dz:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.dT(null,null,this,a,b,-1,c)}catch(x){z=H.a4(x)
y=H.ba(x)
P.bO(null,null,this,z,H.f(y,"$isa1"))}},
d1:function(a,b){return new P.j3(this,H.j(a,{func:1,ret:b}),b)},
bd:function(a){return new P.j2(this,H.j(a,{func:1,ret:-1}))},
d2:function(a,b){return new P.j4(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bD:function(a,b){H.j(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.dS(null,null,this,a,b)},
au:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.H===C.e)return a.$1(b)
return P.dT(null,null,this,a,b,c,d)},
dv:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.H===C.e)return a.$2(b,c)
return P.jM(null,null,this,a,b,c,d,e,f)}},
j3:{"^":"m;a,b,c",
$0:function(){return this.a.bD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j2:{"^":"m:1;a,b",
$0:function(){return this.a.dw(this.b)}},
j4:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.dz(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
d9:function(a,b,c){H.br(a)
return H.w(H.jU(a,new H.d7(0,0,[b,c])),"$isd8",[b,c],"$asd8")},
a7:function(a,b){return new H.d7(0,0,[a,b])},
a0:function(a,b,c,d){return new P.iN(0,0,[d])},
fI:function(a,b,c){var z,y
if(P.cm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.o([],[P.d])
y=$.bb()
C.a.l(y,a)
try{P.jI(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.dl(b,H.k9(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
c9:function(a,b,c){var z,y,x
if(P.cm(a))return b+"..."+c
z=new P.ci(b)
y=$.bb()
C.a.l(y,a)
try{x=z
x.a=P.dl(x.gR(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gR()+c
y=z.gR()
return y.charCodeAt(0)==0?y:y},
cm:function(a){var z,y
for(z=0;y=$.bb(),z<y.length;++z)if(a===y[z])return!0
return!1},
jI:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
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
cd:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.S)(a),++x)z.l(0,H.z(a[x],b))
return z},
dc:function(a){var z,y,x
z={}
if(P.cm(a))return"{...}"
y=new P.ci("")
try{C.a.l($.bb(),a)
x=y
x.a=x.gR()+"{"
z.a=!0
J.eK(a,new P.fW(z,y))
z=y
z.a=z.gR()+"}"}finally{z=$.bb()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gR()
return z.charCodeAt(0)==0?z:z},
iN:{"^":"iI;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dE(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbo")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbo")!=null}else return this.cB(b)},
cB:function(a){var z=this.d
if(z==null)return!1
return this.al(this.b1(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cj()
this.b=z}return this.aW(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cj()
this.c=y}return this.aW(y,b)}else return this.cz(0,b)},
cz:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cj()
this.d=z}y=this.b_(b)
x=z[y]
if(x==null)z[y]=[this.ap(b)]
else{if(this.al(x,b)>=0)return!1
x.push(this.ap(b))}return!0},
bC:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b4(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b4(this.c,b)
else return this.cK(0,b)},
cK:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b1(z,b)
x=this.al(y,b)
if(x<0)return!1
this.b8(y.splice(x,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.an()}},
aW:function(a,b){H.z(b,H.p(this,0))
if(H.f(a[b],"$isbo")!=null)return!1
a[b]=this.ap(b)
return!0},
b4:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbo")
if(z==null)return!1
this.b8(z)
delete a[b]
return!0},
an:function(){this.r=this.r+1&67108863},
ap:function(a){var z,y
z=new P.bo(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.an()
return z},
b8:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.an()},
b_:function(a){return J.ah(a)&0x3ffffff},
b1:function(a,b){return a[this.b_(b)]},
al:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ag(a[y].a,b))return y
return-1},
p:{
cj:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bo:{"^":"b;a,0b,0c"},
dE:{"^":"b;a,b,0c,0d,$ti",
saY:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aB(z))
else{z=this.c
if(z==null){this.saY(null)
return!1}else{this.saY(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaS:1,
p:{
iO:function(a,b,c){var z=new P.dE(a,b,[c])
z.c=a.e
return z}}},
iI:{"^":"hC;"},
fU:{"^":"iP;",$isi:1,$isa:1},
n:{"^":"b;$ti",
gw:function(a){return new H.da(a,this.gj(a),0,[H.b9(this,a,"n",0)])},
q:function(a,b){return this.h(a,b)},
dh:function(a,b,c,d){var z,y,x
H.z(b,d)
H.j(c,{func:1,ret:d,args:[d,H.b9(this,a,"n",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aB(a))}return y},
k:function(a){return P.c9(a,"[","]")}},
db:{"^":"P;"},
fW:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
P:{"^":"b;$ti",
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.b9(this,a,"P",0),H.b9(this,a,"P",1)]})
for(z=J.bx(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aN(this.gD(a))},
k:function(a){return P.dc(a)},
$isI:1},
hD:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bx(H.w(b,"$isi",this.$ti,"$asi"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.c9(this,"{","}")},
$isi:1,
$islD:1},
hC:{"^":"hD;"},
iP:{"^":"b+n;"}}],["","",,P,{"^":"",
fx:function(a){if(a instanceof H.m)return a.k(0)
return"Instance of '"+H.aY(a)+"'"},
bC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bd(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fx(a)},
d0:function(a){return new P.iu(a)},
ay:function(a){H.bY(H.e(a))},
N:{"^":"b;"},
"+bool":0,
bB:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a&&!0},
J:function(a,b){return C.d.J(this.a,H.f(b,"$isbB").a)},
gv:function(a){var z=this.a
return(z^C.d.b5(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fl(H.hs(this))
y=P.be(H.hq(this))
x=P.be(H.hm(this))
w=P.be(H.hn(this))
v=P.be(H.hp(this))
u=P.be(H.hr(this))
t=P.fm(H.ho(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isT:1,
$asT:function(){return[P.bB]},
p:{
fl:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
be:function(a){if(a>=10)return""+a
return"0"+a}}},
X:{"^":"D;"},
"+double":0,
aP:{"^":"b;a",
P:function(a,b){return C.d.P(this.a,H.f(b,"$isaP").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.d.J(this.a,H.f(b,"$isaP").a)},
k:function(a){var z,y,x,w,v
z=new P.fu()
y=this.a
if(y<0)return"-"+new P.aP(0-y).k(0)
x=z.$1(C.d.S(y,6e7)%60)
w=z.$1(C.d.S(y,1e6)%60)
v=new P.ft().$1(y%1e6)
return""+C.d.S(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isT:1,
$asT:function(){return[P.aP]},
p:{
fs:function(a,b,c,d,e,f){return new P.aP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ft:{"^":"m:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fu:{"^":"m:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"b;"},
dg:{"^":"M;",
k:function(a){return"Throw of null."}},
aA:{"^":"M;a,b,c,d",
gaj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gai:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaj()+y+x
if(!this.a)return w
v=this.gai()
u=P.bC(this.b)
return w+v+": "+u},
p:{
cM:function(a,b,c){return new P.aA(!0,a,b,c)}}},
dh:{"^":"aA;e,f,a,b,c,d",
gaj:function(){return"RangeError"},
gai:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bH:function(a,b,c){return new P.dh(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.dh(b,c,!0,a,d,"Invalid value")}}},
fG:{"^":"aA;e,j:f>,a,b,c,d",
gaj:function(){return"RangeError"},
gai:function(){var z,y
z=H.L(this.b)
if(typeof z!=="number")return z.a0()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
E:function(a,b,c,d,e){var z=H.L(e==null?J.aN(b):e)
return new P.fG(b,z,!0,a,c,"Index out of range")}}},
i3:{"^":"M;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
x:function(a){return new P.i3(a)}}},
i1:{"^":"M;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
du:function(a){return new P.i1(a)}}},
cg:{"^":"M;a",
k:function(a){return"Bad state: "+this.a},
p:{
ch:function(a){return new P.cg(a)}}},
ff:{"^":"M;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bC(z)+"."},
p:{
aB:function(a){return new P.ff(a)}}},
dk:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isM:1},
fk:{"^":"M;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iu:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bf:{"^":"b;"},
C:{"^":"D;"},
"+int":0,
i:{"^":"b;$ti",
av:["c5",function(a,b){var z=H.cq(this,"i",0)
return new H.dv(this,H.j(b,{func:1,ret:P.N,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.Y(P.bG(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.E(b,this,"index",null,y))},
k:function(a){return P.fI(this,"(",")")}},
aS:{"^":"b;$ti"},
a:{"^":"b;$ti",$isi:1},
"+List":0,
I:{"^":"b;$ti"},
F:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isT:1,
$asT:function(){return[P.D]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.aX(this)},
k:function(a){return"Instance of '"+H.aY(this)+"'"},
toString:function(){return this.k(this)}},
a1:{"^":"b;"},
d:{"^":"b;",$isT:1,
$asT:function(){return[P.d]},
$ishh:1},
"+String":0,
ci:{"^":"b;R:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dl:function(a,b,c){var z=J.bx(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fv:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).K(z,a,b,c)
y.toString
z=W.r
z=new H.dv(new W.a3(y),H.j(new W.fw(),{func:1,ret:P.N,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.Y(H.fJ())
w=x.gA(x)
if(x.t())H.Y(H.fK())
return H.f(w,"$isO")},
d_:function(a){H.f(a,"$isK")
return"wheel"},
aQ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eN(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a4(x)}return z},
ir:function(a,b){return document.createElement(a)},
bL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dD:function(a,b,c,d){var z,y
z=W.bL(W.bL(W.bL(W.bL(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dQ:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.ik(a)
if(!!J.A(z).$isK)return z
return}else return H.f(a,"$isK")},
dW:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.e)return a
return z.d2(a,b)},
J:{"^":"O;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kj:{"^":"h;0j:length=","%":"AccessibleNodeList"},
f2:{"^":"J;",
k:function(a){return String(a)},
$isf2:1,
"%":"HTMLAnchorElement"},
kk:{"^":"J;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cN:{"^":"J;",$iscN:1,"%":"HTMLBaseElement"},
f7:{"^":"h;","%":";Blob"},
bz:{"^":"J;",$isbz:1,"%":"HTMLBodyElement"},
c6:{"^":"J;0n:height=,0m:width=",
bV:function(a,b,c){var z=this.cG(a,b,P.jR(c,null))
return z},
cG:function(a,b,c){return a.getContext(b,c)},
$isc6:1,
"%":"HTMLCanvasElement"},
kp:{"^":"h;",
ab:function(a){return P.W(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kq:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fg:{"^":"c7;",$isfg:1,"%":"CSSNumericValue|CSSUnitValue"},
kr:{"^":"fj;0j:length=","%":"CSSPerspective"},
ai:{"^":"h;",$isai:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fh:{"^":"ii;0j:length=",
az:function(a,b){var z=this.cH(a,this.af(a,b))
return z==null?"":z},
af:function(a,b){var z,y
z=$.ec()
y=z[b]
if(typeof y==="string")return y
y=this.cT(a,b)
z[b]=y
return y},
cT:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fn()+b
if(z in a)return z
return b},
cH:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fi:{"^":"b;",
gn:function(a){return this.az(a,"height")},
gm:function(a){return this.az(a,"width")}},
c7:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fj:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kt:{"^":"c7;0j:length=","%":"CSSTransformValue"},
ku:{"^":"c7;0j:length=","%":"CSSUnparsedValue"},
kw:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fo:{"^":"J;","%":"HTMLDivElement"},
fp:{"^":"r;",
cW:function(a,b){return a.adoptNode(b)},
bW:function(a,b){return a.getElementById(b)},
dr:function(a,b){return a.querySelector(b)},
gby:function(a){return new W.bm(a,"mousedown",!1,[W.Q])},
gbz:function(a){return new W.bm(a,"mousemove",!1,[W.Q])},
gbA:function(a){return new W.bm(a,"mouseup",!1,[W.Q])},
gbB:function(a){return new W.bm(a,H.t(W.d_(a)),!1,[W.aF])},
"%":"XMLDocument;Document"},
kx:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fq:{"^":"h;",
da:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ky:{"^":"im;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c,"$isR",[P.D],"$asR")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.R,P.D]]},
$isv:1,
$asv:function(){return[[P.R,P.D]]},
$asn:function(){return[[P.R,P.D]]},
$isi:1,
$asi:function(){return[[P.R,P.D]]},
$isa:1,
$asa:function(){return[[P.R,P.D]]},
$asq:function(){return[[P.R,P.D]]},
"%":"ClientRectList|DOMRectList"},
fr:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aJ(b,"$isR",[P.D],"$asR"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dD(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isR:1,
$asR:function(){return[P.D]},
"%":";DOMRectReadOnly"},
kz:{"^":"ip;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c)
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.d]},
$isv:1,
$asv:function(){return[P.d]},
$asn:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
kA:{"^":"h;0j:length=","%":"DOMTokenList"},
O:{"^":"r;0dA:tagName=",
gcZ:function(a){return new W.iq(a)},
k:function(a){return a.localName},
K:["ac",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.cZ
if(z==null){z=H.o([],[W.a8])
y=new W.de(z)
C.a.l(z,W.dB(null))
C.a.l(z,W.dM())
$.cZ=y
d=y}else d=z
z=$.cY
if(z==null){z=new W.dP(d)
$.cY=z
c=z}else{z.a=d
c=z}}if($.ac==null){z=document
y=z.implementation
y=(y&&C.I).da(y,"")
$.ac=y
$.c8=y.createRange()
y=$.ac
y.toString
y=y.createElement("base")
H.f(y,"$iscN")
y.href=z.baseURI
z=$.ac.head;(z&&C.J).F(z,y)}z=$.ac
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbz")}z=$.ac
if(!!this.$isbz)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ac.body;(z&&C.o).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.U,a.tagName)){z=$.c8;(z&&C.B).bX(z,x)
z=$.c8
w=(z&&C.B).d8(z,b)}else{x.innerHTML=b
w=$.ac.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.ac.body
if(x==null?z!=null:x!==z)J.cG(x)
c.aE(w)
C.q.cW(document,w)
return w},function(a,b,c){return this.K(a,b,c,null)},"d9",null,null,"gdL",5,5,null],
bZ:function(a,b,c,d){a.textContent=null
this.F(a,this.K(a,b,c,d))},
bY:function(a,b){return this.bZ(a,b,null,null)},
W:function(a,b){return a.getAttribute(b)},
cL:function(a,b){return a.removeAttribute(b)},
gby:function(a){return new W.bK(a,"mousedown",!1,[W.Q])},
gbz:function(a){return new W.bK(a,"mousemove",!1,[W.Q])},
gbA:function(a){return new W.bK(a,"mouseup",!1,[W.Q])},
gbB:function(a){return new W.bK(a,H.t(W.d_(a)),!1,[W.aF])},
$isO:1,
"%":";Element"},
fw:{"^":"m:18;",
$1:function(a){return!!J.A(H.f(a,"$isr")).$isO}},
kC:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a_:{"^":"h;",$isa_:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
cV:function(a,b,c,d){H.j(c,{func:1,args:[W.a_]})
if(c!=null)this.cA(a,b,c,!1)},
cA:function(a,b,c,d){return a.addEventListener(b,H.b5(H.j(c,{func:1,args:[W.a_]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dJ|dK|dN|dO"},
aj:{"^":"f7;",$isaj:1,"%":"File"},
kT:{"^":"iw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaj")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aj]},
$isv:1,
$asv:function(){return[W.aj]},
$asn:function(){return[W.aj]},
$isi:1,
$asi:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"FileList"},
kU:{"^":"K;0j:length=","%":"FileWriter"},
kX:{"^":"J;0j:length=","%":"HTMLFormElement"},
ak:{"^":"h;",$isak:1,"%":"Gamepad"},
fE:{"^":"J;","%":"HTMLHeadElement"},
kY:{"^":"h;0j:length=","%":"History"},
kZ:{"^":"iK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fF:{"^":"fp;","%":"HTMLDocument"},
l_:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
l0:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
l1:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
l2:{"^":"J;0n:height=,0m:width=","%":"HTMLImageElement"},
l4:{"^":"J;0n:height=,0m:width=","%":"HTMLInputElement"},
aT:{"^":"dt;",$isaT:1,"%":"KeyboardEvent"},
fV:{"^":"h;",
k:function(a){return String(a)},
$isfV:1,
"%":"Location"},
fZ:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
lc:{"^":"h;0j:length=","%":"MediaList"},
ld:{"^":"iR;",
h:function(a,b){return P.W(a.get(H.t(b)))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new W.h0(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIInputMap"},
h0:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
le:{"^":"iS;",
h:function(a,b){return P.W(a.get(H.t(b)))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new W.h1(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
h1:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
am:{"^":"h;",$isam:1,"%":"MimeType"},
lf:{"^":"iU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isam")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.am]},
$isv:1,
$asv:function(){return[W.am]},
$asn:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asq:function(){return[W.am]},
"%":"MimeTypeArray"},
Q:{"^":"dt;",
gbx:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aW(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.A(W.dQ(z)).$isO)throw H.c(P.x("offsetX is only supported on elements"))
y=H.f(W.dQ(z),"$isO")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.aW(u,v,w),"$isaW",w,"$asaW")
if(typeof z!=="number")return z.aI()
if(typeof x!=="number")return x.aI()
return new P.aW(C.r.bG(z-u),C.r.bG(x-v),w)}},
$isQ:1,
"%":";DragEvent|MouseEvent"},
a3:{"^":"fU;a",
ga2:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.ch("No elements"))
if(y>1)throw H.c(P.ch("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.w(b,"$isi",[W.r],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.l(y,b)
J.es(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.d2(z,z.length,-1,[H.b9(C.W,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
$asn:function(){return[W.r]},
$asi:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"K;0dq:previousSibling=",
ds:function(a){var z=a.parentNode
if(z!=null)J.bu(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.c4(a):z},
F:function(a,b){return a.appendChild(b)},
cM:function(a,b){return a.removeChild(b)},
cN:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hb:{"^":"iW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lo:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lq:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lr:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ao:{"^":"h;0j:length=",$isao:1,"%":"Plugin"},
lt:{"^":"j_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isao")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ao]},
$isv:1,
$asv:function(){return[W.ao]},
$asn:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"PluginArray"},
lv:{"^":"Q;0n:height=,0m:width=","%":"PointerEvent"},
hu:{"^":"h;",
d8:function(a,b){return a.createContextualFragment(b)},
bX:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lA:{"^":"j5;",
h:function(a,b){return P.W(a.get(H.t(b)))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new W.hz(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hz:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lB:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lC:{"^":"J;0j:length=","%":"HTMLSelectElement"},
ap:{"^":"K;",$isap:1,"%":"SourceBuffer"},
lE:{"^":"dK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isap")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ap]},
$isv:1,
$asv:function(){return[W.ap]},
$asn:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"SourceBufferList"},
aq:{"^":"h;",$isaq:1,"%":"SpeechGrammar"},
lF:{"^":"jb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaq")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isv:1,
$asv:function(){return[W.aq]},
$asn:function(){return[W.aq]},
$isi:1,
$asi:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"SpeechGrammarList"},
ar:{"^":"h;0j:length=",$isar:1,"%":"SpeechRecognitionResult"},
lI:{"^":"je;",
h:function(a,b){return this.b2(a,H.t(b))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cJ(a,z)
if(y==null)return
b.$2(y,this.b2(a,y))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new W.hN(z))
return z},
gj:function(a){return a.length},
b2:function(a,b){return a.getItem(b)},
cJ:function(a,b){return a.key(b)},
$asP:function(){return[P.d,P.d]},
$isI:1,
$asI:function(){return[P.d,P.d]},
"%":"Storage"},
hN:{"^":"m:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
as:{"^":"h;",$isas:1,"%":"CSSStyleSheet|StyleSheet"},
hS:{"^":"J;",
K:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ac(a,b,c,d)
z=W.fv("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a3(y).H(0,new W.a3(z))
return y},
"%":"HTMLTableElement"},
lL:{"^":"J;",
K:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ac(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga2(z)
x.toString
z=new W.a3(x)
w=z.ga2(z)
y.toString
w.toString
new W.a3(y).H(0,new W.a3(w))
return y},
"%":"HTMLTableRowElement"},
lM:{"^":"J;",
K:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ac(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga2(z)
y.toString
x.toString
new W.a3(y).H(0,new W.a3(x))
return y},
"%":"HTMLTableSectionElement"},
dn:{"^":"J;",$isdn:1,"%":"HTMLTemplateElement"},
lN:{"^":"h;0m:width=","%":"TextMetrics"},
at:{"^":"K;",$isat:1,"%":"TextTrack"},
au:{"^":"K;",$isau:1,"%":"TextTrackCue|VTTCue"},
lO:{"^":"jm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isv:1,
$asv:function(){return[W.au]},
$asn:function(){return[W.au]},
$isi:1,
$asi:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"TextTrackCueList"},
lP:{"^":"dO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isat")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.at]},
$isv:1,
$asv:function(){return[W.at]},
$asn:function(){return[W.at]},
$isi:1,
$asi:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"TextTrackList"},
lQ:{"^":"h;0j:length=","%":"TimeRanges"},
av:{"^":"h;",$isav:1,"%":"Touch"},
lR:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$isv:1,
$asv:function(){return[W.av]},
$asn:function(){return[W.av]},
$isi:1,
$asi:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"TouchList"},
lS:{"^":"h;0j:length=","%":"TrackDefaultList"},
dt:{"^":"a_;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
m5:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
m7:{"^":"fZ;0n:height=,0m:width=","%":"HTMLVideoElement"},
m8:{"^":"K;0j:length=","%":"VideoTrackList"},
m9:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
ma:{"^":"h;0m:width=","%":"VTTRegion"},
aF:{"^":"Q;",
gdd:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
$isaF:1,
"%":"WheelEvent"},
i6:{"^":"K;",
gcY:function(a){var z,y,x
z=P.D
y=new P.aa(0,$.H,[z])
x=H.j(new W.i7(new P.ji(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cF(a)
this.cO(a,W.dW(x,z))
return y},
cO:function(a,b){return a.requestAnimationFrame(H.b5(H.j(b,{func:1,ret:-1,args:[P.D]}),1))},
cF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdw:1,
"%":"DOMWindow|Window"},
i7:{"^":"m:20;a",
$1:function(a){var z=this.a
a=H.bS(H.ct(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.Y(P.ch("Future already completed"))
z.ah(a)}},
dy:{"^":"r;",$isdy:1,"%":"Attr"},
mg:{"^":"jx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isai")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ai]},
$isv:1,
$asv:function(){return[W.ai]},
$asn:function(){return[W.ai]},
$isi:1,
$asi:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$asq:function(){return[W.ai]},
"%":"CSSRuleList"},
mh:{"^":"fr;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aJ(b,"$isR",[P.D],"$asR"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dD(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mi:{"^":"jz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isak")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ak]},
$isv:1,
$asv:function(){return[W.ak]},
$asn:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"GamepadList"},
mn:{"^":"jB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asn:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mo:{"^":"jD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isar")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ar]},
$isv:1,
$asv:function(){return[W.ar]},
$asn:function(){return[W.ar]},
$isi:1,
$asi:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"SpeechRecognitionResultList"},
mp:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isas")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.as]},
$isv:1,
$asv:function(){return[W.as]},
$asn:function(){return[W.as]},
$isi:1,
$asi:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"StyleSheetList"},
ie:{"^":"db;cE:a<",
C:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.S)(z),++v){u=z[v]
b.$2(u,w.W(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.o([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.l(z,w)
v=H.f(z[w],"$isdy")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asP:function(){return[P.d,P.d]},
$asI:function(){return[P.d,P.d]}},
iq:{"^":"ie;a",
h:function(a,b){return J.c2(this.a,H.t(b))},
gj:function(a){return this.gD(this).length}},
bm:{"^":"hO;a,b,c,$ti"},
bK:{"^":"bm;a,b,c,$ti"},
is:{"^":"hP;a,b,c,d,e,$ti",p:{
aw:function(a,b,c,d,e){var z=W.dW(new W.it(c),W.a_)
if(z!=null&&!0)J.et(a,b,z,!1)
return new W.is(0,a,b,z,!1,[e])}}},
it:{"^":"m:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isa_"))}},
bn:{"^":"b;a",
cu:function(a){var z,y
z=$.cx()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.T[y],W.k_())
for(y=0;y<12;++y)z.i(0,C.u[y],W.k0())}},
T:function(a){return $.ep().u(0,W.aQ(a))},
N:function(a,b,c){var z,y,x
z=W.aQ(a)
y=$.cx()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bQ(x.$4(a,b,c,this))},
$isa8:1,
p:{
dB:function(a){var z,y
z=document.createElement("a")
y=new W.j6(z,window.location)
y=new W.bn(y)
y.cu(a)
return y},
ml:[function(a,b,c,d){H.f(a,"$isO")
H.t(b)
H.t(c)
H.f(d,"$isbn")
return!0},"$4","k_",16,0,12],
mm:[function(a,b,c,d){var z,y,x
H.f(a,"$isO")
H.t(b)
H.t(c)
z=H.f(d,"$isbn").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","k0",16,0,12]}},
q:{"^":"b;$ti",
gw:function(a){return new W.d2(a,this.gj(a),-1,[H.b9(this,a,"q",0)])}},
de:{"^":"b;a",
T:function(a){return C.a.ba(this.a,new W.hd(a))},
N:function(a,b,c){return C.a.ba(this.a,new W.hc(a,b,c))},
$isa8:1},
hd:{"^":"m:9;a",
$1:function(a){return H.f(a,"$isa8").T(this.a)}},
hc:{"^":"m:9;a,b,c",
$1:function(a){return H.f(a,"$isa8").N(this.a,this.b,this.c)}},
j7:{"^":"b;",
cv:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.av(0,new W.j8())
y=b.av(0,new W.j9())
this.b.H(0,z)
x=this.c
x.H(0,C.V)
x.H(0,y)},
T:function(a){return this.a.u(0,W.aQ(a))},
N:["c7",function(a,b,c){var z,y
z=W.aQ(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.cX(c)
else if(y.u(0,"*::"+b))return this.d.cX(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa8:1},
j8:{"^":"m:10;",
$1:function(a){return!C.a.u(C.u,H.t(a))}},
j9:{"^":"m:10;",
$1:function(a){return C.a.u(C.u,H.t(a))}},
jj:{"^":"j7;e,a,b,c,d",
N:function(a,b,c){if(this.c7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c2(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dM:function(){var z,y,x,w,v
z=P.d
y=P.cd(C.t,z)
x=H.p(C.t,0)
w=H.j(new W.jk(),{func:1,ret:z,args:[x]})
v=H.o(["TEMPLATE"],[z])
y=new W.jj(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cv(null,new H.fX(C.t,w,[x,z]),v,null)
return y}}},
jk:{"^":"m:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
jh:{"^":"b;",
T:function(a){var z=J.A(a)
if(!!z.$isdi)return!1
z=!!z.$isG
if(z&&W.aQ(a)==="foreignObject")return!1
if(z)return!0
return!1},
N:function(a,b,c){if(b==="is"||C.h.c0(b,"on"))return!1
return this.T(a)},
$isa8:1},
d2:{"^":"b;a,b,c,0d,$ti",
sb0:function(a){this.d=H.z(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb0(J.bc(this.a,z))
this.c=z
return!0}this.sb0(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaS:1},
ij:{"^":"b;a",$isK:1,$isdw:1,p:{
ik:function(a){if(a===window)return H.f(a,"$isdw")
else return new W.ij(a)}}},
a8:{"^":"b;"},
j6:{"^":"b;a,b",$ism4:1},
dP:{"^":"b;a",
aE:function(a){new W.ju(this).$2(a,null)},
X:function(a,b){if(b==null)J.cG(a)
else J.bu(b,a)},
cR:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eL(a)
x=J.c2(y.gcE(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a4(t)}v="element unprintable"
try{v=J.bd(a)}catch(t){H.a4(t)}try{u=W.aQ(a)
this.cQ(H.f(a,"$isO"),b,z,v,u,H.f(y,"$isI"),H.t(x))}catch(t){if(H.a4(t) instanceof P.aA)throw t
else{this.X(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cQ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.X(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.T(a)){this.X(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.N(a,"is",g)){this.X(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.o(z.slice(0),[H.p(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.l(y,x)
v=y[x]
if(!this.a.N(a,J.eU(v),w.W(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.W(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.W(z,v)
w.cL(z,v)}}if(!!J.A(a).$isdn)this.aE(a.content)},
$islm:1},
ju:{"^":"m:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cR(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.X(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eM(z)}catch(w){H.a4(w)
v=H.f(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bu(u,v)}else J.bu(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isr")}}},
ii:{"^":"h+fi;"},
il:{"^":"h+n;"},
im:{"^":"il+q;"},
io:{"^":"h+n;"},
ip:{"^":"io+q;"},
iv:{"^":"h+n;"},
iw:{"^":"iv+q;"},
iJ:{"^":"h+n;"},
iK:{"^":"iJ+q;"},
iR:{"^":"h+P;"},
iS:{"^":"h+P;"},
iT:{"^":"h+n;"},
iU:{"^":"iT+q;"},
iV:{"^":"h+n;"},
iW:{"^":"iV+q;"},
iZ:{"^":"h+n;"},
j_:{"^":"iZ+q;"},
j5:{"^":"h+P;"},
dJ:{"^":"K+n;"},
dK:{"^":"dJ+q;"},
ja:{"^":"h+n;"},
jb:{"^":"ja+q;"},
je:{"^":"h+P;"},
jl:{"^":"h+n;"},
jm:{"^":"jl+q;"},
dN:{"^":"K+n;"},
dO:{"^":"dN+q;"},
jq:{"^":"h+n;"},
jr:{"^":"jq+q;"},
jw:{"^":"h+n;"},
jx:{"^":"jw+q;"},
jy:{"^":"h+n;"},
jz:{"^":"jy+q;"},
jA:{"^":"h+n;"},
jB:{"^":"jA+q;"},
jC:{"^":"h+n;"},
jD:{"^":"jC+q;"},
jE:{"^":"h+n;"},
jF:{"^":"jE+q;"}}],["","",,P,{"^":"",
W:function(a){var z,y,x,w,v
if(a==null)return
z=P.a7(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.S)(y),++w){v=H.t(y[w])
z.i(0,v,a[v])}return z},
jR:function(a,b){var z={}
a.C(0,new P.jS(z))
return z},
cW:function(){var z=$.cV
if(z==null){z=J.bZ(window.navigator.userAgent,"Opera",0)
$.cV=z}return z},
fn:function(){var z,y
z=$.cS
if(z!=null)return z
y=$.cT
if(y==null){y=J.bZ(window.navigator.userAgent,"Firefox",0)
$.cT=y}if(y)z="-moz-"
else{y=$.cU
if(y==null){y=!P.cW()&&J.bZ(window.navigator.userAgent,"Trident/",0)
$.cU=y}if(y)z="-ms-"
else z=P.cW()?"-o-":"-webkit-"}$.cS=z
return z},
jS:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aW:{"^":"b;V:a>,O:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.aJ(b,"$isaW",[P.D],null)&&this.a==J.by(b)&&this.b==b.gO(b)},
gv:function(a){var z,y,x
z=J.ah(this.a)
y=J.ah(this.b)
y=P.dC(P.dC(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
j0:{"^":"b;"},
R:{"^":"j0;$ti"}}],["","",,P,{"^":"",f3:{"^":"h;",$isf3:1,"%":"SVGAnimatedLength"},kD:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},kE:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kF:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kG:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},kH:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},kI:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kJ:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kK:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},kL:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},kM:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},kN:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},kO:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},kP:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},kQ:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},kR:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},kS:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},kV:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},kW:{"^":"bg;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fD:{"^":"bg;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bg:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},l3:{"^":"bg;0n:height=,0m:width=","%":"SVGImageElement"},aU:{"^":"h;",$isaU:1,"%":"SVGLength"},l9:{"^":"iM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.L(a,b)},
i:function(a,b,c){H.f(c,"$isaU")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
L:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aU]},
$isi:1,
$asi:function(){return[P.aU]},
$isa:1,
$asa:function(){return[P.aU]},
$asq:function(){return[P.aU]},
"%":"SVGLengthList"},la:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aV:{"^":"h;",$isaV:1,"%":"SVGNumber"},ln:{"^":"iY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.L(a,b)},
i:function(a,b,c){H.f(c,"$isaV")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
L:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aV]},
$isi:1,
$asi:function(){return[P.aV]},
$isa:1,
$asa:function(){return[P.aV]},
$asq:function(){return[P.aV]},
"%":"SVGNumberList"},ls:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},lu:{"^":"h;0j:length=","%":"SVGPointList"},lw:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lx:{"^":"fD;0n:height=,0m:width=","%":"SVGRectElement"},di:{"^":"G;",$isdi:1,"%":"SVGScriptElement"},lJ:{"^":"jg;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.L(a,b)},
i:function(a,b,c){H.t(c)
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
L:function(a,b){return a.getItem(b)},
$asn:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},G:{"^":"O;",
K:function(a,b,c,d){var z,y,x,w,v,u
z=H.o([],[W.a8])
C.a.l(z,W.dB(null))
C.a.l(z,W.dM())
C.a.l(z,new W.jh())
c=new W.dP(new W.de(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).d9(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a3(w)
u=z.ga2(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lK:{"^":"bg;0n:height=,0m:width=","%":"SVGSVGElement"},aZ:{"^":"h;",$isaZ:1,"%":"SVGTransform"},lT:{"^":"jt;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.L(a,b)},
i:function(a,b,c){H.f(c,"$isaZ")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
L:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aZ]},
$isi:1,
$asi:function(){return[P.aZ]},
$isa:1,
$asa:function(){return[P.aZ]},
$asq:function(){return[P.aZ]},
"%":"SVGTransformList"},m6:{"^":"bg;0n:height=,0m:width=","%":"SVGUseElement"},iL:{"^":"h+n;"},iM:{"^":"iL+q;"},iX:{"^":"h+n;"},iY:{"^":"iX+q;"},jf:{"^":"h+n;"},jg:{"^":"jf+q;"},js:{"^":"h+n;"},jt:{"^":"js+q;"}}],["","",,P,{"^":"",ad:{"^":"b;",$isi:1,
$asi:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
$isi_:1}}],["","",,P,{"^":"",kl:{"^":"h;0j:length=","%":"AudioBuffer"},km:{"^":"ig;",
h:function(a,b){return P.W(a.get(H.t(b)))},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gD:function(a){var z=H.o([],[P.d])
this.C(a,new P.f5(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"AudioParamMap"},f5:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kn:{"^":"K;0j:length=","%":"AudioTrackList"},f6:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lp:{"^":"f6;0j:length=","%":"OfflineAudioContext"},ig:{"^":"h+P;"}}],["","",,P,{"^":"",f8:{"^":"h;",$isf8:1,"%":"WebGLBuffer"},ht:{"^":"h;",$isht:1,"%":"WebGLProgram"},ly:{"^":"h;",
b9:function(a,b){return a.activeTexture(b)},
bb:function(a,b,c){return a.attachShader(b,c)},
bc:function(a,b,c){return a.bindBuffer(b,c)},
be:function(a,b,c){return a.bindTexture(b,c)},
bf:function(a,b){return a.blendEquation(b)},
bg:function(a,b,c){return a.blendFunc(b,c)},
bh:function(a,b,c,d){return a.bufferData(b,c,d)},
bi:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bj:function(a,b){return a.compileShader(b)},
bk:function(a){return a.createBuffer()},
bl:function(a){return a.createProgram()},
bm:function(a,b){return a.createShader(b)},
bo:function(a,b){return a.depthMask(b)},
bp:function(a,b){return a.disable(b)},
bq:function(a,b,c,d){return a.drawArrays(b,c,d)},
br:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bs:function(a,b){return a.enable(b)},
bt:function(a,b){return a.enableVertexAttribArray(b)},
ab:function(a){return P.W(a.getContextAttributes())},
ax:function(a,b){return a.getProgramInfoLog(b)},
ay:function(a,b,c){return a.getProgramParameter(b,c)},
aA:function(a,b){return a.getShaderInfoLog(b)},
aB:function(a,b,c){return a.getShaderParameter(b,c)},
aC:function(a,b,c){return a.getUniformLocation(b,c)},
bw:function(a,b){return a.linkProgram(b)},
aG:function(a,b,c){return a.shaderSource(b,c)},
aH:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bH:function(a,b,c){return a.uniform1f(b,c)},
bI:function(a,b,c){return a.uniform1fv(b,c)},
bJ:function(a,b,c){return a.uniform1i(b,c)},
bK:function(a,b,c){return a.uniform1iv(b,c)},
bL:function(a,b,c){return a.uniform2fv(b,c)},
bM:function(a,b,c){return a.uniform3fv(b,c)},
bN:function(a,b,c){return a.uniform4fv(b,c)},
bO:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bP:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bQ:function(a,b){return a.useProgram(b)},
bR:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lz:{"^":"h;",
d_:function(a,b){return a.beginTransformFeedback(b)},
d0:function(a,b,c,d){return a.bindBufferBase(b,c,d)},
d3:function(a,b){return a.bindVertexArray(b)},
d7:function(a,b,c,d,e,f){return a.copyBufferSubData(b,c,d,e,f)},
dc:function(a){return a.createVertexArray()},
de:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
df:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dg:function(a){return a.endTransformFeedback()},
dD:function(a,b,c,d){this.cU(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
cU:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dE:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b9:function(a,b){return a.activeTexture(b)},
bb:function(a,b,c){return a.attachShader(b,c)},
bc:function(a,b,c){return a.bindBuffer(b,c)},
be:function(a,b,c){return a.bindTexture(b,c)},
bf:function(a,b){return a.blendEquation(b)},
bg:function(a,b,c){return a.blendFunc(b,c)},
bh:function(a,b,c,d){return a.bufferData(b,c,d)},
bi:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bj:function(a,b){return a.compileShader(b)},
bk:function(a){return a.createBuffer()},
bl:function(a){return a.createProgram()},
bm:function(a,b){return a.createShader(b)},
bo:function(a,b){return a.depthMask(b)},
bp:function(a,b){return a.disable(b)},
bq:function(a,b,c,d){return a.drawArrays(b,c,d)},
br:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bs:function(a,b){return a.enable(b)},
bt:function(a,b){return a.enableVertexAttribArray(b)},
ab:function(a){return P.W(a.getContextAttributes())},
ax:function(a,b){return a.getProgramInfoLog(b)},
ay:function(a,b,c){return a.getProgramParameter(b,c)},
aA:function(a,b){return a.getShaderInfoLog(b)},
aB:function(a,b,c){return a.getShaderParameter(b,c)},
aC:function(a,b,c){return a.getUniformLocation(b,c)},
bw:function(a,b){return a.linkProgram(b)},
aG:function(a,b,c){return a.shaderSource(b,c)},
aH:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bH:function(a,b,c){return a.uniform1f(b,c)},
bI:function(a,b,c){return a.uniform1fv(b,c)},
bJ:function(a,b,c){return a.uniform1i(b,c)},
bK:function(a,b,c){return a.uniform1iv(b,c)},
bL:function(a,b,c){return a.uniform2fv(b,c)},
bM:function(a,b,c){return a.uniform3fv(b,c)},
bN:function(a,b,c){return a.uniform4fv(b,c)},
bO:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bP:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bQ:function(a,b){return a.useProgram(b)},
bR:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hE:{"^":"h;",$ishE:1,"%":"WebGLShader"},hU:{"^":"h;",$ishU:1,"%":"WebGLTexture"},i0:{"^":"h;",$isi0:1,"%":"WebGLUniformLocation"},i4:{"^":"h;",$isi4:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lG:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.W(this.cI(a,b))},
i:function(a,b,c){H.f(c,"$isI")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cI:function(a,b){return a.item(b)},
$asn:function(){return[[P.I,,,]]},
$isi:1,
$asi:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jc:{"^":"h+n;"},jd:{"^":"jc+q;"}}],["","",,G,{"^":"",
i8:function(a){var z,y,x,w
z=H.o(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.l(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.Z(z,"\n")},
dz:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bm(a,b)
z.aG(a,y,c)
z.bj(a,y)
x=H.bQ(z.aB(a,y,35713))
if(x!=null&&!x){w=z.aA(a,y)
P.ay("E:Compilation failed:")
P.ay("E:"+G.i8(c))
P.ay("E:Failure:")
P.ay(C.h.G("E:",w))
throw H.c(w)}return y},
d3:function(a,b){var z,y,x
H.w(a,"$isa",[T.y],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.i.i(b,z,J.by(a[y]))
if(y>=a.length)return H.l(a,y)
C.i.i(b,z+1,J.c1(a[y]))
z+=2
if(y>=a.length)return H.l(a,y)
x=J.cE(a[y])
if(z>=b.length)return H.l(b,z)
b[z]=x}return b},
fA:function(a,b){var z,y
H.w(a,"$isa",[T.aE],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.i(b,z,J.by(a[y]))
if(y>=a.length)return H.l(a,y)
C.i.i(b,z+1,J.c1(a[y]))}return b},
fB:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.b0],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.i.i(b,z,J.by(a[y]))
if(y>=a.length)return H.l(a,y)
C.i.i(b,z+1,J.c1(a[y]))
x=z+2
if(y>=a.length)return H.l(a,y)
w=J.cE(a[y])
v=b.length
if(x>=v)return H.l(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.l(a,y)
w=J.eO(a[y])
if(z>=v)return H.l(b,z)
b[z]=w}return b},
fz:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.C]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.bc(a[y],0))
if(y>=a.length)return H.l(a,y)
C.m.i(b,z+1,J.bc(a[y],1))
if(y>=a.length)return H.l(a,y)
C.m.i(b,z+2,J.bc(a[y],2))
if(y>=a.length)return H.l(a,y)
C.m.i(b,z+3,J.bc(a[y],3))}return b},
iH:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.al(z,[H.p(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.C]],v=[P.X],u=[T.b0],t=[T.y],s=[T.aE];y.t();){r=y.d
if(!x.a8(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.e0>0)H.bY("I: "+r)
continue}q=z.h(0,r)
switch($.Z().h(0,r).a){case"vec2":b.M(r,G.fA(H.bt(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.M(r,G.d3(H.bt(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.M(r,G.fB(H.bt(q,"$isa",u,"$asa"),null),4)
break
case"float":b.M(r,new Float32Array(H.bM(H.bt(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.M(r,G.fz(H.bt(q,"$isa",w,"$asa"),null),4)
break}}},
bF:{"^":"b;"},
bJ:{"^":"bF;",
aO:function(){return this.d},
k:function(a){var z,y,x,w
z=H.o(["{"+new H.ds(H.jX(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.Z(z,"\n")}},
fa:{"^":"b;0a,b",
bu:function(a,b,c){J.eI(this.a,b)
if(c>0)J.f_(this.a,b,c)},
bS:function(a,b,c,d,e,f,g,h){J.aM(this.a,34962,b)
J.f0(this.a,c,d,e,!1,g,h)}},
fy:{"^":"b;"},
d1:{"^":"b;a,b,c,d"},
fC:{"^":"b;a,b,c,d,e",
cf:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.o(y,[P.C])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.l(y,v)
u=y[v]
C.a.i(x,w,u.gdI(u))
C.a.i(x,w+1,u.gdJ(u))
C.a.i(x,w+2,u.gdK(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.S)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
ci:function(a,b){var z,y,x,w,v,u,t
z=H.o([],[T.aE])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.aE(t))}},
cg:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.l(z,new G.d1(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.o(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.Z().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.Z(z," ")}},
dq:{"^":"b;a,b,c"},
dp:{"^":"b;a,b,c"},
fY:{"^":"bJ;d,a,b,c"},
h_:{"^":"bF;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sak:function(a){this.cx=H.w(a,"$isa",[P.C],"$asa")},
aL:function(a,b,c){var z,y
C.h.ag(a,0)
H.f(b,"$isad")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.aM(z.a,34962,y)
J.cD(z.a,34962,b,35048)},
aM:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
M:function(a,b,c){var z,y,x,w,v
z=J.cy(a,0)===105
if(z&&this.z===0)this.z=C.d.c8(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c_(x.a))
this.aL(a,b,c)
w=$.Z().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bv(x.a,this.e)
x.bu(0,v,z?1:0)
x.bS(0,y.h(0,a),v,w.aN(),5126,!1,0,0)},
ad:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c_(y.a))
this.ch=a
this.aL("aPosition",a,3)
x=$.Z().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bv(y.a,this.e)
y.bu(0,w,0)
y.bS(0,z.h(0,"aPosition"),w,x.aN(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.o(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.al(z,[H.p(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.Z(y,"  ")},
p:{
ce:function(a,b,c,d){var z=P.d
return new G.h_(b,J.eB(b.a),c,P.a7(z,P.b),d,0,-1,P.a7(z,P.ad),"meshdata:"+a,!1,!0)}}},
hi:{"^":"bJ;",
cc:function(a,b){var z
if(typeof a!=="number")return a.dG()
if(typeof b!=="number")return H.bq(b)
z=a/b
if(this.z===z)return
this.z=z
this.aQ()},
aQ:function(){var z,y,x,w,v,u
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
aO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aw())
x=this.cy
x.E(z.d)
z=this.cx
z.E(this.db)
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
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
kB:{"^":"b;"},
hx:{"^":"bF;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cm:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.S)(z),++u){t=z[u]
x.i(0,t,J.cF(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.S)(z),++u){t=z[u]
x.i(0,t,J.cF(w.a,v,t))}},
cp:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.o([],[P.d])
x=H.o([],[P.d])
for(y=new H.al(y,[H.p(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.a8(0,w))C.a.l(x,w)}for(z=this.x,z=P.iO(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cs:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isI",[P.d,P.b],"$asI")
z=Date.now()
for(y=new H.al(b,[H.p(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cy(s,0)){case 117:if(w.a8(0,s)){r=b.h(0,s)
if(v.a8(0,s))H.bY("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.Z().h(0,s)
if(q==null)H.Y("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.L(r)
J.c3(x.a,p,r)}else if(!!J.A(r).$isfH)J.eY(x.a,p,r)
break
case"float":if(q.c===0){H.e_(r)
J.eW(x.a,p,r)}else if(!!J.A(r).$isad)J.eX(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.af(r,"$isaC").a
J.cL(x.a,p,!1,s)}else if(!!J.A(r).$isad)J.cL(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.L.gdH(H.af(r,"$islb"))
J.cK(x.a,p,!1,s)}else if(!!J.A(r).$isad)J.cK(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cJ(o,p,H.af(r,"$isb0").a)
else J.cJ(o,p,H.f(r,"$isad"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cI(o,p,H.af(r,"$isy").a)
else J.cI(o,p,H.f(r,"$isad"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cH(o,p,H.af(r,"$isaE").a)
else J.cH(o,p,H.f(r,"$isad"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bq(s)
J.cz(x.a,33984+s)
s=H.af(r,"$ishT").cj()
J.cC(x.a,3553,s)
s=this.ch
J.c3(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bq(s)
J.cz(x.a,33984+s)
s=H.af(r,"$ishT").cj()
J.cC(x.a,34067,s)
s=this.ch
J.c3(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
default:H.bY("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.ag(r,!0)
o=x.a
if(s)J.bw(o,2929)
else J.c0(o,2929)
break
case"cStencilFunc":H.af(r,"$isdq")
s=r.a
o=x.a
if(s===1281)J.c0(o,2960)
else{J.bw(o,2960)
o=r.b
n=r.c
J.eT(x.a,s,o,n)}break
case"cDepthWrite":H.bQ(r)
J.eC(x.a,r)
break
case"cBlendEquation":H.af(r,"$isdp")
s=r.a
o=x.a
if(s===1281)J.c0(o,3042)
else{J.bw(o,3042)
o=r.b
n=r.c
J.ew(x.a,o,n)
J.ev(x.a,s)}break}++t
break}}m=P.fs(0,0,0,Date.now()-new P.bB(z,!1).a,0,0)
""+t
m.k(0)},
ce:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.bJ],"$asa")
Date.now()
z=this.d
J.eZ(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aV()}for(x=0;x<2;++x){w=b[x]
this.cs(w.a,w.aO())}y=this.Q
y.Y(0)
for(v=a.cy,v=new H.al(v,[H.p(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cp()
if(u.length!==0)P.ay("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bv(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.aM()
s=a.Q
r=a.z
if(t)J.eu(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eG(q,y,v,s,0,r)
else J.eF(q,y,v,s,0)}else{s=z.a
if(r>1)J.eE(s,y,0,v,r)
else J.eD(s,y,0,v)}if(t)J.eJ(z.a)},
cd:function(a,b){return this.ce(a,b,null)},
p:{
hy:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.eA(b.a)
t=G.dz(b.a,35633,x)
J.cA(b.a,u,t)
s=G.dz(b.a,35632,w)
J.cA(b.a,u,s)
if(v.length>0)J.eV(b.a,u,v,35980)
J.eS(b.a,u)
if(!H.bQ(J.eR(b.a,u,35714)))H.Y(J.eQ(b.a,u))
z=new G.hx(b,c,d,u,P.cd(c.c,z),P.a7(z,P.b),P.a7(z,z),y,a,!1,!0)
z.cm(a,b,c,d)
return z}}},
B:{"^":"b;a,b,c",
aN:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hF:{"^":"b;a,0b,c,d,e,f,r,x",
c9:function(a){var z,y,x,w
H.w(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<3;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.a3(z)},
cb:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.d,y=0;y<4;++y)C.a.l(z,a[y])
C.a.a3(z)},
aK:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.a3(z)},
ca:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.f,y=0;y<1;++y)C.a.l(z,a[y])
C.a.a3(z)},
cn:function(a,b){this.b=this.ct(!1,H.w(a,"$isa",[P.d],"$asa"),b)},
aP:function(a){return this.cn(a,null)},
ct:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.o(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.S)(y),++u){t=y[u]
s=$.Z().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.S)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.S)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.S)(z),++u){q=z[u]
s=$.Z().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
C.a.H(w,b)
return C.a.Z(w,"\n")},
p:{
dj:function(a){var z,y
z=P.d
y=[z]
return new G.hF(a,H.o([],y),H.o([],y),H.o([],y),H.o([],y),0,P.a7(z,P.C))}}},
hJ:{"^":"bF;",
aw:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}}}],["","",,R,{"^":"",
iQ:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.ir("span",null),"$isO")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).af(y,"float")
y.setProperty(x,"left","")
x=C.w.af(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.F(z,v)}return z},
hj:{"^":"hi;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
du:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ay("size change "+H.e(y)+" "+H.e(x))
this.cc(y,x)
J.f1(this.go.a,0,0,y,x)},"$1","gdt",4,0,24]},
hL:{"^":"b;",
co:function(a,b,c){var z,y
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
y=J.k(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
hM:{"^":"hL;e,f,a,b,c,d",
cr:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dC(y,2)+" fps"
C.p.bY(this.c,b)
x=C.d.S(30*C.x.d4(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isO")
v=w.style
u=""+x+"px"
v.height=u
C.p.F(z,w)},
cq:function(a){return this.cr(a,"")}}}],["","",,B,{"^":"",
hV:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=B.hg(new B.hW(e,d,f,c),0,6.283185307179586,g,0.001,!0)
y=z.length
if(0>=y)return H.l(z,0)
C.a.l(z,z[0])
if(1>=z.length)return H.l(z,1)
C.a.l(z,z[1])
x=g+1
w=B.hX(z,h,i)
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.S)(w),++v){u=w[v]
if(0>=u.length)return H.l(u,0)
C.a.l(u,u[0])
if(1>=u.length)return H.l(u,1)
C.a.l(u,u[1])}t=h+1
y=H.o([],[G.fy])
s=H.o([],[G.d1])
r=[T.y]
q=H.o([],r)
p=new G.fC(!1,y,s,q,P.a7(P.d,[P.a,,]))
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.S)(w),++v){o=w[v]
for(n=0;n<o.length;n+=2){s=H.f(o[n],"$isy")
s.toString
m=new T.y(new Float32Array(3))
m.E(s)
C.a.l(q,m)}}p.cg(t,x,!1)
p.ci(t,x)
l=$.Z().h(0,"aNormal")
switch(l.a){case"vec2":p.e.i(0,"aNormal",H.o([],[T.aE]))
break
case"vec3":p.e.i(0,"aNormal",H.o([],r))
break
case"vec4":p.e.i(0,"aNormal",H.o([],[T.b0]))
break
case"float":p.e.i(0,"aNormal",H.o([],[P.X]))
break
case"uvec4":p.e.i(0,"aNormal",H.o([],[[P.a,P.C]]))
break}for(y=w.length,s=p.e,v=0;v<w.length;w.length===y||(0,H.S)(w),++v){o=w[v]
for(n=0;q=o.length,n<q;n+=2){m=n+1
if(m>=q)return H.l(o,m)
m=H.f(o[m],"$isy")
k=H.w(s.h(0,"aNormal"),"$isa",r,"$asa")
m.toString
q=new T.y(new Float32Array(3))
q.E(m);(k&&C.a).l(k,q)}}return p},
hX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.y]
H.w(a,"$isa",z,"$asa")
y=H.o([],[[P.a,T.y]])
x=new Float32Array(3)
w=new T.y(x)
v=new Float32Array(3)
u=new T.y(v)
t=new Float32Array(3)
s=new T.y(t)
for(r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.l(a,o)
n=a[o]
m=H.o([],z)
C.a.l(y,m)
q=n.a
o=q[2]
if(Math.abs(o)>0.7071067811865476){l=q[1]
k=l*l+o*o
j=1/Math.sqrt(k)
v[0]=0
v[1]=-q[2]*j
v[2]=q[1]*j
t[0]=k*j
t[1]=-q[0]*(q[1]*j)
t[2]=q[0]*(-q[2]*j)}else{o=q[0]
l=q[1]
k=o*o+l*l
j=1/Math.sqrt(k)
v[0]=-q[1]*j
v[1]=q[0]*j
v[2]=0
t[0]=-q[2]*(q[0]*j)
t[1]=q[2]*(-q[1]*j)
t[2]=k*j}u.U(0)
s.U(0)
for(i=0;i<b;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
w.E(p)
w.a7(u,g)
w.a7(s,f)
q=new T.y(new Float32Array(3))
q.E(w)
C.a.l(m,q)
x[2]=0
x[1]=0
x[0]=0
w.a7(u,g)
w.a7(s,f)
w.U(0)
q=new T.y(new Float32Array(3))
q.E(w)
C.a.l(m,q)}}return y},
hg:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.j(a,{func:1,ret:-1,args:[P.X,T.y]})
z=H.o([],[T.y])
y=new T.y(new Float32Array(3))
x=new T.y(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+e,x)
x.aJ(0,y)
t=new T.y(new Float32Array(3))
t.E(y)
C.a.l(z,t)
t=new T.y(new Float32Array(3))
t.E(x)
C.a.l(z,t)}return z},
hW:{"^":"m:25;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sV(0,y*v)
b.sO(0,y*u)
b.saa(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",fO:{"^":"b;a,b,c",
ck:function(a){var z,y
a=document
z=W.aT
y={func:1,ret:-1,args:[z]}
W.aw(a,"keydown",H.j(new D.fQ(this),y),!1,z)
W.aw(a,"keyup",H.j(new D.fR(this),y),!1,z)},
p:{
fP:function(a){var z=P.C
z=new D.fO(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.ck(a)
return z}}},fQ:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$isaT")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},fR:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$isaT")
z=this.a
z.a.bC(0,a.which)
z.c.l(0,a.which)}},h2:{"^":"b;a,b,c,d,e,f,r,x",
cl:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbz(a)
x=H.p(y,0)
W.aw(y.a,y.b,H.j(new D.h4(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gby(a)
y=H.p(x,0)
W.aw(x.a,x.b,H.j(new D.h5(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbA(a)
x=H.p(y,0)
W.aw(y.a,y.b,H.j(new D.h6(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbB(a)
x=H.p(z,0)
W.aw(z.a,z.b,H.j(new D.h7(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
h3:function(a){var z=P.C
z=new D.h2(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cl(a)
return z}}},h4:{"^":"m:3;a",
$1:function(a){var z,y
H.f(a,"$isQ")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.L(y.gbx(a).a)
z.x=H.L(y.gbx(a).b)
z.d=a.movementX
z.e=a.movementY}},h5:{"^":"m:3;a",
$1:function(a){var z
H.f(a,"$isQ")
a.preventDefault()
P.ay("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},h6:{"^":"m:3;a",
$1:function(a){var z
H.f(a,"$isQ")
a.preventDefault()
z=this.a
z.a.bC(0,a.button)
z.c.l(0,a.button)}},h7:{"^":"m:26;a",
$1:function(a){H.f(a,"$isaF")
a.preventDefault()
this.a.f=H.L(C.ac.gdd(a))}},hf:{"^":"hJ;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bV:function(a){var z,y
z=C.i.dh(H.w(a,"$isi",[P.b],"$asi"),0,new A.jZ(),P.C)
if(typeof z!=="number")return H.bq(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jZ:{"^":"m:27;",
$2:function(a,b){var z,y
H.L(a)
z=J.ah(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aC:{"^":"b;a",
E:function(a){var z,y
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
k:function(a){return"[0] "+this.a_(0).k(0)+"\n[1] "+this.a_(1).k(0)+"\n[2] "+this.a_(2).k(0)+"\n[3] "+this.a_(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.l(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aC){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bV(this.a)},
a_:function(a){var z,y,x
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
return new T.b0(z)},
a1:function(){var z=this.a
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
z[15]=1}},aE:{"^":"b;a",
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aE){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bV(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.l(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gV:function(a){return this.a[0]},
gO:function(a){return this.a[1]}},y:{"^":"b;a",
aF:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
E:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bV(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.l(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbv:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
U:function(a){var z,y,x
z=Math.sqrt(this.gbv())
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
bn:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.y(new Float32Array(3))
z.aF(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a7:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aJ:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
sV:function(a,b){this.a[0]=b
return b},
sO:function(a,b){this.a[1]=b
return b},
saa:function(a,b){this.a[2]=b
return b},
gV:function(a){return this.a[0]},
gO:function(a){return this.a[1]},
gaa:function(a){return this.a[2]}},b0:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b0){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bV(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.l(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gV:function(a){return this.a[0]},
gO:function(a){return this.a[1]},
gaa:function(a){return this.a[2]},
gdF:function(a){return this.a[3]}}}],["","",,R,{"^":"",
e6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
$.Z().i(0,"aCurrentPosition",C.b)
y=document
x=C.q.bW(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.hM(0,0,x,w,y.createElement("div"),R.iQ("blue","gray",90,30))
u.co(x,"blue","gray")
t=H.f(C.q.dr(y,"#webgl-canvas"),"$isc6")
s=new G.fa(t)
x=P.d
v=P.b
r=(t&&C.H).bV(t,"webgl2",P.d9(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.Y(P.d0('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.eP(r))
if($.e0>0)P.ay("I: "+q)
J.ex(r,0,0,0,1)
J.bw(r,2929)
y=y.body
r=new Float32Array(3)
q=D.fP(null)
y=D.h3(y)
p=new T.aC(new Float32Array(16))
p.a1()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hf(7,0,0,0,new T.y(r),-0.02,q,y,p,new T.y(o),new T.y(n),new T.y(m),new T.y(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.aC(new Float32Array(16))
y.a1()
r=new T.aC(new Float32Array(16))
r.a1()
k=new R.hj(t,s,l,50,1,0.1,1000,y,r,new T.aC(new Float32Array(16)),P.a7(x,v),"perspective",!1,!0)
k.aQ()
k.du(null)
y=W.a_
W.aw(window,"resize",H.j(k.gdt(),{func:1,ret:-1,args:[y]}),!1,y)
j=G.hy("fireworks",s,$.er(),$.eq())
y=j.e
i=C.a.dj(y.f,"tPosition")
v=P.a7(x,v)
v.i(0,"cDepthTest",!0)
v.i(0,"cDepthWrite",!0)
v.i(0,"cBlendEquation",$.eb())
v.i(0,"cStencilFunc",$.ee())
v.i(0,"uPointSize",10)
x=new T.aC(new Float32Array(16))
x.a1()
v.i(0,"uModelMatrix",x)
h=B.hV(!0,!0,1,2,3,1,2048,128,0.2,!1)
x=j.d
y=y.x
g=G.ce("torusknot",x,4,y)
g.ad(G.d3(h.d,null))
r=H.w(h.cf(),"$isa",[P.C],"$asa")
q=g.d
g.y=J.c_(q.a)
p=g.ch.length
if(p<768){g.sak(new Uint8Array(H.bM(r)))
g.Q=5121}else if(p<196608){g.sak(new Uint16Array(H.bM(r)))
g.Q=5123}else{g.sak(new Uint32Array(H.bM(r)))
g.Q=5125}J.bv(q.a,g.e)
r=g.y
p=g.cx
J.aM(q.a,34963,r)
J.cD(q.a,34963,p,35048)
G.iH(h,g)
f=G.ce(g.a,x,0,y)
f.ad(g.ch)
f.M("aNormal",g.cy.h(0,"aNormal"),3)
r=f.cy
f.M("aCurrentPosition",r.h(0,"aPosition"),3)
e=G.ce("out",x,0,y)
e.ad(r.h(0,"aPosition"))
J.aM(s.a,34962,null)
J.cB(s.a,35982,i,null)
r=e.r.h(0,"aPosition")
J.cB(s.a,35982,i,r)
z.a=0
new R.kb(z,l,new G.fY(v,"torus-mat",!1,!0),j,f,k,s,e,u).$1(0)},
kb:{"^":"m:28;a,b,c,d,e,f,r,x,y",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.ct(a9)
if(typeof a9!=="number")return a9.aI()
z=a9+0
this.a.a=z
y=this.b
y.cx+=0.003
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aD()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aD()
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
if(typeof v!=="number")return v.aD()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.r.d5(y.cy,-1.4707963267948965,1.4707963267948965)
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
t=y.dx
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
p=new T.y(new Float32Array(3))
p.aF(0,1,0)
v=y.aw()
u=new Float32Array(3)
o=new T.y(u)
o.E(v)
o.aJ(0,t)
o.U(0)
n=p.bn(o)
n.U(0)
m=o.bn(n)
m.U(0)
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
d=Math.sqrt(k.gbv())
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
x=this.c
x.d.i(0,"uTime",a9/1000)
w=this.e
this.d.cd(w,H.o([this.f,x],[G.bJ]))
x=this.r
r=w.r.h(0,"aCurrentPosition")
J.aM(x.a,34962,r)
r=this.x.r.h(0,"aPosition")
J.aM(x.a,35982,r)
w=w.aM()
J.ez(x.a,35982,34962,0,0,w*3*4)
C.ad.gcY(window).bE(this,-1)
this.y.cq(z)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d5.prototype
return J.d4.prototype}if(typeof a=="string")return J.bj.prototype
if(a==null)return J.d6.prototype
if(typeof a=="boolean")return J.fM.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.b)return a
return J.bU(a)}
J.b8=function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.b)return a
return J.bU(a)}
J.e1=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.b)return a
return J.bU(a)}
J.jV=function(a){if(typeof a=="number")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.jW=function(a){if(typeof a=="number")return J.bi.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.e2=function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.b)return a
return J.bU(a)}
J.bT=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b_.prototype
return a}
J.ag=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.a5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jV(a).P(a,b)}
J.bc=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k8(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b8(a).h(a,b)}
J.cy=function(a,b){return J.e2(a).ag(a,b)}
J.bu=function(a,b){return J.k(a).cM(a,b)}
J.es=function(a,b,c){return J.k(a).cN(a,b,c)}
J.cz=function(a,b){return J.k(a).b9(a,b)}
J.et=function(a,b,c,d){return J.k(a).cV(a,b,c,d)}
J.cA=function(a,b,c){return J.k(a).bb(a,b,c)}
J.eu=function(a,b){return J.k(a).d_(a,b)}
J.aM=function(a,b,c){return J.k(a).bc(a,b,c)}
J.cB=function(a,b,c,d){return J.k(a).d0(a,b,c,d)}
J.cC=function(a,b,c){return J.k(a).be(a,b,c)}
J.bv=function(a,b){return J.k(a).d3(a,b)}
J.ev=function(a,b){return J.k(a).bf(a,b)}
J.ew=function(a,b,c){return J.k(a).bg(a,b,c)}
J.cD=function(a,b,c,d){return J.k(a).bh(a,b,c,d)}
J.ex=function(a,b,c,d,e){return J.k(a).bi(a,b,c,d,e)}
J.ey=function(a,b){return J.jW(a).J(a,b)}
J.bZ=function(a,b,c){return J.b8(a).d6(a,b,c)}
J.ez=function(a,b,c,d,e,f){return J.k(a).d7(a,b,c,d,e,f)}
J.c_=function(a){return J.k(a).bk(a)}
J.eA=function(a){return J.k(a).bl(a)}
J.eB=function(a){return J.k(a).dc(a)}
J.eC=function(a,b){return J.k(a).bo(a,b)}
J.c0=function(a,b){return J.k(a).bp(a,b)}
J.eD=function(a,b,c,d){return J.k(a).bq(a,b,c,d)}
J.eE=function(a,b,c,d,e){return J.k(a).de(a,b,c,d,e)}
J.eF=function(a,b,c,d,e){return J.k(a).br(a,b,c,d,e)}
J.eG=function(a,b,c,d,e,f){return J.k(a).df(a,b,c,d,e,f)}
J.eH=function(a,b){return J.e1(a).q(a,b)}
J.bw=function(a,b){return J.k(a).bs(a,b)}
J.eI=function(a,b){return J.k(a).bt(a,b)}
J.eJ=function(a){return J.k(a).dg(a)}
J.eK=function(a,b){return J.k(a).C(a,b)}
J.eL=function(a){return J.k(a).gcZ(a)}
J.ah=function(a){return J.A(a).gv(a)}
J.bx=function(a){return J.e1(a).gw(a)}
J.aN=function(a){return J.b8(a).gj(a)}
J.eM=function(a){return J.k(a).gdq(a)}
J.eN=function(a){return J.k(a).gdA(a)}
J.eO=function(a){return J.bT(a).gdF(a)}
J.by=function(a){return J.bT(a).gV(a)}
J.c1=function(a){return J.bT(a).gO(a)}
J.cE=function(a){return J.bT(a).gaa(a)}
J.c2=function(a,b){return J.k(a).W(a,b)}
J.eP=function(a){return J.k(a).ab(a)}
J.eQ=function(a,b){return J.k(a).ax(a,b)}
J.eR=function(a,b,c){return J.k(a).ay(a,b,c)}
J.cF=function(a,b,c){return J.k(a).aC(a,b,c)}
J.eS=function(a,b){return J.k(a).bw(a,b)}
J.cG=function(a){return J.k(a).ds(a)}
J.eT=function(a,b,c,d){return J.k(a).aH(a,b,c,d)}
J.eU=function(a){return J.e2(a).dB(a)}
J.bd=function(a){return J.A(a).k(a)}
J.eV=function(a,b,c,d){return J.k(a).dD(a,b,c,d)}
J.eW=function(a,b,c){return J.k(a).bH(a,b,c)}
J.eX=function(a,b,c){return J.k(a).bI(a,b,c)}
J.c3=function(a,b,c){return J.k(a).bJ(a,b,c)}
J.eY=function(a,b,c){return J.k(a).bK(a,b,c)}
J.cH=function(a,b,c){return J.k(a).bL(a,b,c)}
J.cI=function(a,b,c){return J.k(a).bM(a,b,c)}
J.cJ=function(a,b,c){return J.k(a).bN(a,b,c)}
J.cK=function(a,b,c,d){return J.k(a).bO(a,b,c,d)}
J.cL=function(a,b,c,d){return J.k(a).bP(a,b,c,d)}
J.eZ=function(a,b){return J.k(a).bQ(a,b)}
J.f_=function(a,b,c){return J.k(a).dE(a,b,c)}
J.f0=function(a,b,c,d,e,f,g){return J.k(a).bR(a,b,c,d,e,f,g)}
J.f1=function(a,b,c,d,e){return J.k(a).bT(a,b,c,d,e)}
I.aK=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bz.prototype
C.H=W.c6.prototype
C.w=W.fh.prototype
C.p=W.fo.prototype
C.I=W.fq.prototype
C.J=W.fE.prototype
C.q=W.fF.prototype
C.K=J.h.prototype
C.a=J.bh.prototype
C.x=J.d4.prototype
C.d=J.d5.prototype
C.L=J.d6.prototype
C.r=J.bi.prototype
C.h=J.bj.prototype
C.S=J.bk.prototype
C.i=H.h8.prototype
C.m=H.ha.prototype
C.W=W.hb.prototype
C.A=J.hk.prototype
C.B=W.hu.prototype
C.G=W.hS.prototype
C.v=J.b_.prototype
C.ac=W.aF.prototype
C.ad=W.i6.prototype
C.e=new P.j1()
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
C.T=H.o(I.aK(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.U=H.o(I.aK(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.V=H.o(I.aK([]),[P.d])
C.t=H.o(I.aK(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.o(I.aK(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.X=new G.B("vec3","vertex btangents",0)
C.b=new G.B("vec3","",0)
C.Y=new G.B("vec4","delta from light",0)
C.n=new G.B("","",0)
C.C=new G.B("vec3","vertex coordinates",0)
C.Z=new G.B("vec3","vertex binormals",0)
C.D=new G.B("vec4","for wireframe",0)
C.a_=new G.B("vec4","per vertex color",0)
C.a0=new G.B("float","for normal maps",0)
C.j=new G.B("mat4","",0)
C.a2=new G.B("mat4","",4)
C.a1=new G.B("mat4","",128)
C.c=new G.B("float","",0)
C.a3=new G.B("float","",4)
C.a4=new G.B("float","depth for shadowmaps",0)
C.f=new G.B("sampler2D","",0)
C.a5=new G.B("float","for bump maps",0)
C.a6=new G.B("vec2","texture uvs",0)
C.a7=new G.B("float","time since program start in sec",0)
C.k=new G.B("vec2","",0)
C.a8=new G.B("samplerCube","",0)
C.l=new G.B("vec4","",0)
C.a9=new G.B("vec3","vertex normals",0)
C.aa=new G.B("sampler2DShadow","",0)
C.E=new G.B("vec3","per vertex color",0)
C.F=new G.B("mat3","",0)
C.ab=new G.B("vec3","vertex tangents",0)
$.a6=0
$.aO=null
$.cO=null
$.ck=!1
$.e4=null
$.dX=null
$.e9=null
$.bR=null
$.bW=null
$.cr=null
$.aH=null
$.b2=null
$.b3=null
$.cl=!1
$.H=C.e
$.ac=null
$.c8=null
$.cZ=null
$.cY=null
$.cV=null
$.cU=null
$.cT=null
$.cS=null
$.e0=0
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
I.$lazy(y,x,w)}})(["kv","ed",function(){return H.e3("_$dart_dartClosure")},"l8","cv",function(){return H.e3("_$dart_js")},"lU","ef",function(){return H.a9(H.bI({
toString:function(){return"$receiver$"}}))},"lV","eg",function(){return H.a9(H.bI({$method$:null,
toString:function(){return"$receiver$"}}))},"lW","eh",function(){return H.a9(H.bI(null))},"lX","ei",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"m_","el",function(){return H.a9(H.bI(void 0))},"m0","em",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"lZ","ek",function(){return H.a9(H.dr(null))},"lY","ej",function(){return H.a9(function(){try{null.$method$}catch(z){return z.message}}())},"m2","eo",function(){return H.a9(H.dr(void 0))},"m1","en",function(){return H.a9(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mc","cw",function(){return P.i9()},"ms","bb",function(){return[]},"ks","ec",function(){return{}},"mj","ep",function(){return P.cd(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mk","cx",function(){return P.a7(P.d,P.bf)},"lH","ee",function(){return new G.dq(1281,0,4294967295)},"ko","eb",function(){return new G.dp(1281,1281,1281)},"mq","Z",function(){return P.d9(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.b,"tSpeed",C.b,"tForce",C.b,"aColor",C.E,"aColorAlpha",C.a_,"aPosition",C.C,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.D,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.l,"iaTranslation",C.b,"iaScale",C.c,"iaColor",C.b,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.b,"vNormal",C.b,"vPosition",C.C,"vPositionFromLight",C.Y,"vCenter",C.D,"vDepth",C.a4,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.aa,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a8,"uAnimationTable",C.f,"uTime",C.a7,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.b,"uAmbientDiffuse",C.b,"uColorEmissive",C.b,"uColorSpecular",C.b,"uColorDiffuse",C.b,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.b,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.c,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0],P.d,G.B)},"mw","er",function(){var z,y
z=G.dj("FireWorksV")
y=[P.d]
z.c9(H.o(["aPosition","aCurrentPosition","aNormal"],y))
z.aK(H.o(["vColor"],y))
z.ca(H.o(["tPosition"],y))
z.cb(H.o(["uPerspectiveViewMatrix","uModelMatrix","uTime","uPointSize"],y))
z.aP(H.o(["float rand(vec2 xy){\n     return fract(sin(dot(xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n     \nvec3 NewPos(vec3 orig, vec3 last, float t) {\n    float bottom = - 2.0;\n   \n    t = mod(t, 14.0);\n    if (t < 2.0) {            // normal\n        return last;\n    } else if ( t < 6.0) {    // shrinking\n        float speed = 0.1;\n        t = t - 2.0;\n        // statistically \n        // * x just floats around orig.x\n        // * y moves down by -0.25 (middle of  [0.25, -0.75])\n        // * z just floats around orig.z\n        vec3 delta = vec3(0.5 - rand(vec2(t, last.x)),\n                          0.25 - rand(vec2(t, last.y)),\n                          0.5 - rand(vec2(t, last.z)));\n                          \n        if (last.y < bottom + 0.3) {\n           speed *= (last.y - bottom);\n        }\n        vec3 next = last + delta * speed;\n        if (next.y < bottom) next.y = bottom;\n        return next;  \n    } else if ( t < 8.0) {    // flat \n        return last;      \n    } else {\n       t = t - 8.0;\n       vec3 speed = clamp(orig - last, vec3(-1.0), vec3(1.0));\n       \n       vec3 delta = vec3(0.85 - rand(vec2(t, last.x)),\n                         1.0 + rand(vec2(t, last.y)),\n                         0.85 - rand(vec2(t, last.z)));\n    \n      \n       return last + delta * 0.05 * speed;\n    }\n}\n\nvoid main() {\n    vec3 pos = NewPos(aPosition, aCurrentPosition, uTime);\n    // new current pos for next run\n    tPosition = pos;\n\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(pos, 1.0);\n                  \n    gl_PointSize = uPointSize / gl_Position.z;\n    vColor.r = sin(aPosition.x)/2.0+0.5;\n    vColor.g = cos(aPosition.y)/2.0+0.5;\n    vColor.b = sin(aPosition.z)/2.0+0.5;\n}\n"],y))
return z},"mv","eq",function(){var z,y
z=G.dj("FireWorksF")
y=[P.d]
z.aK(H.o(["vColor"],y))
z.aP(H.o(["void main() {  \n    oFragColor.rgb = vColor;\n}\n    "],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.Q]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.C]},{func:1,ret:P.N,args:[W.a8]},{func:1,ret:P.N,args:[P.d]},{func:1,ret:P.F,args:[W.aT]},{func:1,ret:P.N,args:[W.O,P.d,P.d,W.bn]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a1]},{func:1,ret:[P.aa,,],args:[,]},{func:1,ret:P.N,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.a_]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:-1,args:[W.a_]},{func:1,ret:-1,args:[P.X,T.y]},{func:1,ret:P.F,args:[W.aF]},{func:1,ret:P.C,args:[P.C,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.kh(d||a)
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
Isolate.aK=a.aK
Isolate.b7=a.b7
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
if(typeof dartMainRunner==="function")dartMainRunner(R.e6,[])
else R.e6([])})})()
//# sourceMappingURL=pointcloud.dart.js.map
