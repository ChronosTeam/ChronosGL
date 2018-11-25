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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.ch"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ch"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.ch(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b3=function(){}
var dart=[["","",,H,{"^":"",kC:{"^":"b;a"}}],["","",,J,{"^":"",
ck:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bM:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cj==null){H.ju()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dd("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cn()]
if(v!=null)return v
v=H.jz(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.cn(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
e:{"^":"b;",
w:function(a,b){return a===b},
gt:function(a){return H.aT(a)},
j:["c2",function(a){return"Instance of '"+H.aU(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fv:{"^":"e;",
j:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$isce:1},
fx:{"^":"e;",
w:function(a,b){return null==b},
j:function(a){return"null"},
gt:function(a){return 0},
$isF:1},
c3:{"^":"e;",
gt:function(a){return 0},
j:["c3",function(a){return String(a)}]},
h_:{"^":"c3;"},
aX:{"^":"c3;"},
bi:{"^":"c3;",
j:function(a){var z=a[$.dU()]
if(z==null)return this.c3(a)
return"JavaScript function for "+H.d(J.bw(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc0:1},
bf:{"^":"e;$ti",
l:function(a,b){H.w(b,H.q(a,0))
if(!!a.fixed$length)H.ab(P.x("add"))
a.push(b)},
am:function(a,b){var z,y
H.v(b,"$isj",[H.q(a,0)],"$asj")
if(!!a.fixed$length)H.ab(P.x("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
W:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.d(a[y]))
return z.join(b)},
gd1:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.ft())},
c_:function(a,b){if(!!a.immutable$list)H.ab(P.x("sort"))
H.ho(a,J.j5(),H.q(a,0))},
aD:function(a){return this.c_(a,null)},
j:function(a){return P.c1(a,"[","]")},
gC:function(a){return new J.eN(a,a.length,0,[H.q(a,0)])},
gt:function(a){return H.aT(a)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.b2(a,b))
return a[b]},
h:function(a,b,c){H.w(c,H.q(a,0))
if(!!a.immutable$list)H.ab(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b2(a,b))
a[b]=c},
$ist:1,
$ast:I.b3,
$isj:1,
$isa:1,
p:{
fu:function(a,b){return J.c2(H.l(a,[b]))},
c2:function(a){H.bq(a)
a.fixed$length=Array
return a},
kA:[function(a,b){return J.ej(H.dM(a,"$isR"),H.dM(b,"$isR"))},"$2","j5",8,0,22]}},
kB:{"^":"bf;$ti"},
eN:{"^":"b;a,b,c,0d,$ti",
saN:function(a){this.d=H.w(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.N(z))
x=this.c
if(x>=y){this.saN(null)
return!1}this.saN(z[x]);++this.c
return!0}},
bg:{"^":"e;",
J:function(a,b){var z
H.cl(b)
if(typeof b!=="number")throw H.c(H.b0(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gap(b)
if(this.gap(a)===z)return 0
if(this.gap(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gap:function(a){return a===0?1/a<0:a<0},
bI:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.x(""+a+".toInt()"))},
cP:function(a,b,c){if(this.J(b,c)>0)throw H.c(H.b0(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){return a&0x1FFFFFFF},
c4:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b3(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.b3(a,b)},
b3:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.x("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
b1:function(a,b){var z
if(a>0)z=this.cF(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cF:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.c(H.b0(b))
return a>b},
$isR:1,
$asR:function(){return[P.D]},
$isa9:1,
$isD:1},
cR:{"^":"bg;",$isB:1},
fw:{"^":"bg;"},
bh:{"^":"e;",
a7:function(a,b){if(b>=a.length)throw H.c(H.b2(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.y(b)
if(typeof b!=="string")throw H.c(P.cE(b,null,null))
return a+b},
c1:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bB(b,null,null))
if(b>c)throw H.c(P.bB(b,null,null))
if(c>a.length)throw H.c(P.bB(c,null,null))
return a.substring(b,c)},
c0:function(a,b){return this.c1(a,b,null)},
cQ:function(a,b,c){if(c>a.length)throw H.c(P.h9(c,0,a.length,null,null))
return H.jG(a,b,c)},
J:function(a,b){var z
H.y(b)
if(typeof b!=="string")throw H.c(H.b0(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gt:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.c(H.b2(a,b))
return a[b]},
$ist:1,
$ast:I.b3,
$isR:1,
$asR:function(){return[P.f]},
$isfY:1,
$isf:1}}],["","",,H,{"^":"",
ft:function(){return new P.d4("No element")},
ho:function(a,b,c){H.v(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.B,args:[c,c]})
H.bj(a,0,J.bb(a)-1,b,c)},
bj:function(a,b,c,d,e){H.v(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.hn(a,b,c,d,e)
else H.hm(a,b,c,d,e)},
hn:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.b4(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a3(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
hm:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.e.U(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.U(b+a0,2)
v=w-z
u=w+z
t=J.b4(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.a3(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a3(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a3(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a3(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a3(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a3(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a3(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a3(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a3(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aH(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.X()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.O()
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
if(typeof e!=="number")return e.X()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.O()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.O()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.X()
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
H.bj(a,b,m-2,a1,a2)
H.bj(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aH(a1.$2(t.i(a,m),r),0);)++m
for(;J.aH(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.X()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bj(a,m,l,a1,a2)}else H.bj(a,m,l,a1,a2)},
fc:{"^":"j;"},
fG:{"^":"b;a,b,c,0d,$ti",
saO:function(a){this.d=H.w(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.b4(z)
x=y.gk(z)
if(this.b!==x)throw H.c(P.aK(z))
w=this.c
if(w>=x){this.saO(null)
return!1}this.saO(y.q(z,w));++this.c
return!0}},
bA:{"^":"b;$ti"}}],["","",,H,{"^":"",
az:function(a){var z,y
z=H.y(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jo:function(a){return init.types[H.M(a)]},
jx:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isu},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bw(a)
if(typeof z!=="string")throw H.c(H.b0(a))
return z},
aT:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aU:function(a){return H.h0(a)+H.bH(H.aw(a),0,null)},
h0:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.D||!!z.$isaX){u=C.v(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.az(w.length>1&&C.i.a7(w,0)===36?C.i.c0(w,1):w)},
aA:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
h7:function(a){var z=H.aA(a).getFullYear()+0
return z},
h5:function(a){var z=H.aA(a).getMonth()+1
return z},
h1:function(a){var z=H.aA(a).getDate()+0
return z},
h2:function(a){var z=H.aA(a).getHours()+0
return z},
h4:function(a){var z=H.aA(a).getMinutes()+0
return z},
h6:function(a){var z=H.aA(a).getSeconds()+0
return z},
h3:function(a){var z=H.aA(a).getMilliseconds()+0
return z},
ax:function(a){throw H.c(H.b0(a))},
i:function(a,b){if(a==null)J.bb(a)
throw H.c(H.b2(a,b))},
b2:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.M(J.bb(a))
if(!(b<0)){if(typeof z!=="number")return H.ax(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bB(b,"index",null)},
b0:function(a){return new P.aI(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.d_()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dP})
z.name=""}else z.toString=H.dP
return z},
dP:function(){return J.bw(this.dartException)},
ab:function(a){throw H.c(a)},
N:function(a){throw H.c(P.aK(a))},
b7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jI(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.b1(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c4(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cZ(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.dX()
u=$.dY()
t=$.dZ()
s=$.e_()
r=$.e2()
q=$.e3()
p=$.e1()
$.e0()
o=$.e5()
n=$.e4()
m=v.I(y)
if(m!=null)return z.$1(H.c4(H.y(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.c4(H.y(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cZ(H.y(y),m))}}return z.$1(new H.hD(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.d3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.d3()
return a},
b5:function(a){var z
if(a==null)return new H.ds(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ds(a)},
ji:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
jw:function(a,b,c,d,e,f){H.h(a,"$isc0")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.cP("Unsupported number of arguments for wrapped closure"))},
b1:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jw)
a.$identity=z
return z},
eZ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hb(z).r}else x=d
w=e?Object.create(new H.hq().constructor.prototype):Object.create(new H.bW(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a4
if(typeof u!=="number")return u.F()
$.a4=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cI(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jo,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cG:H.bX
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cI(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
eW:function(a,b,c,d){var z=H.bX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cI:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eY(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eW(y,!w,z,b)
if(y===0){w=$.a4
if(typeof w!=="number")return w.F()
$.a4=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aJ
if(v==null){v=H.bx("self")
$.aJ=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a4
if(typeof w!=="number")return w.F()
$.a4=w+1
t+=w
w="return function("+t+"){return this."
v=$.aJ
if(v==null){v=H.bx("self")
$.aJ=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
eX:function(a,b,c,d){var z,y
z=H.bX
y=H.cG
switch(b?-1:a){case 0:throw H.c(H.hh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eY:function(a,b){var z,y,x,w,v,u,t,s
z=$.aJ
if(z==null){z=H.bx("self")
$.aJ=z}y=$.cF
if(y==null){y=H.bx("receiver")
$.cF=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eX(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a4
if(typeof y!=="number")return y.F()
$.a4=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a4
if(typeof y!=="number")return y.F()
$.a4=y+1
return new Function(z+y+"}")()},
ch:function(a,b,c,d,e,f,g){return H.eZ(a,b,H.M(c),d,!!e,!!f,g)},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a0(a,"String"))},
dF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a0(a,"double"))},
cl:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a0(a,"num"))},
cf:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a0(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a0(a,"int"))},
cm:function(a,b){throw H.c(H.a0(a,H.az(H.y(b).substring(3))))},
jD:function(a,b){throw H.c(H.cH(a,H.az(H.y(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cm(a,b)},
aa:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.jD(a,b)},
dM:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cm(a,b)},
bq:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a0(a,"List<dynamic>"))},
jy:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cm(a,b)},
ci:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
bm:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ci(J.A(a))
if(z==null)return!1
return H.dw(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cb)return a
$.cb=!0
try{if(H.bm(a,b))return a
z=H.br(b)
y=H.a0(a,z)
throw H.c(y)}finally{$.cb=!1}},
bL:function(a,b){if(a!=null&&!H.cg(a,b))H.ab(H.a0(a,H.br(b)))
return a},
dA:function(a){var z,y
z=J.A(a)
if(!!z.$isp){y=H.ci(z)
if(y!=null)return H.br(y)
return"Closure"}return H.aU(a)},
jH:function(a){throw H.c(new P.f3(H.y(a)))},
dI:function(a){return init.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
aw:function(a){if(a==null)return
return a.$ti},
lU:function(a,b,c){return H.b6(a["$as"+H.d(c)],H.aw(b))},
bo:function(a,b,c,d){var z
H.y(c)
H.M(d)
z=H.b6(a["$as"+H.d(c)],H.aw(b))
return z==null?null:z[d]},
q:function(a,b){var z
H.M(b)
z=H.aw(a)
return z==null?null:z[b]},
br:function(a){return H.av(a,null)},
av:function(a,b){var z,y
H.v(b,"$isa",[P.f],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.az(a[0].builtin$cls)+H.bH(a,1,b)
if(typeof a=="function")return H.az(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.d(b[y])}if('func' in a)return H.j4(a,b)
if('futureOr' in a)return"FutureOr<"+H.av("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
j4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.v(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.l([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.av(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.av(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.av(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.av(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jh(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.y(z[l])
n=n+m+H.av(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bH:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isa",[P.f],"$asa")
if(a==null)return""
z=new P.c8("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.av(u,c)}return"<"+z.j(0)+">"},
jn:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isp){y=H.ci(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.aw(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aG:function(a,b,c,d){var z,y
H.y(b)
H.bq(c)
H.y(d)
if(a==null)return!1
z=H.aw(a)
y=J.A(a)
if(y[b]==null)return!1
return H.dD(H.b6(y[d],z),null,c,null)},
bs:function(a,b,c,d){H.y(b)
H.bq(c)
H.y(d)
if(a==null)return a
if(H.aG(a,b,c,d))return a
throw H.c(H.cH(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.az(b.substring(3))+H.bH(c,0,null),init.mangledGlobalNames)))},
v:function(a,b,c,d){H.y(b)
H.bq(c)
H.y(d)
if(a==null)return a
if(H.aG(a,b,c,d))return a
throw H.c(H.a0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.az(b.substring(3))+H.bH(c,0,null),init.mangledGlobalNames)))},
dD:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.V(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.V(a[y],b,c[y],d))return!1
return!0},
lS:function(a,b,c){return a.apply(b,H.b6(J.A(b)["$as"+H.d(c)],H.aw(b)))},
dK:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.dK(z)}return!1},
cg:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.dK(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cg(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bm(a,b)}z=J.A(a).constructor
y=H.aw(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.V(z,null,b,null)},
w:function(a,b){if(a!=null&&!H.cg(a,b))throw H.c(H.a0(a,H.br(b)))
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
if('func' in c)return H.dw(a,b,c,d)
if('func' in a)return c.builtin$cls==="c0"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.V("type" in a?a.type:null,b,x,d)
else if(H.V(a,b,x,d))return!0
else{if(!('$is'+"aM" in y.prototype))return!1
w=y.prototype["$as"+"aM"]
v=H.b6(w,z?a.slice(1):null)
return H.V(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dD(H.b6(r,z),b,u,d)},
dw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.jC(m,b,l,d)},
jC:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.V(c[w],d,a[w],b))return!1}return!0},
lT:function(a,b,c){Object.defineProperty(a,H.y(b),{value:c,enumerable:false,writable:true,configurable:true})},
jz:function(a){var z,y,x,w,v,u
z=H.y($.dJ.$1(a))
y=$.bK[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bN[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.y($.dC.$2(a,z))
if(z!=null){y=$.bK[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bN[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bO(x)
$.bK[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bN[z]=x
return x}if(v==="-"){u=H.bO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dN(a,x)
if(v==="*")throw H.c(P.dd(z))
if(init.leafTags[z]===true){u=H.bO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dN(a,x)},
dN:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ck(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bO:function(a){return J.ck(a,!1,null,!!a.$isu)},
jB:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bO(z)
else return J.ck(z,c,null,null)},
ju:function(){if(!0===$.cj)return
$.cj=!0
H.jv()},
jv:function(){var z,y,x,w,v,u,t,s
$.bK=Object.create(null)
$.bN=Object.create(null)
H.jq()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dO.$1(v)
if(u!=null){t=H.jB(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jq:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.aF(C.E,H.aF(C.J,H.aF(C.u,H.aF(C.u,H.aF(C.I,H.aF(C.F,H.aF(C.G(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dJ=new H.jr(v)
$.dC=new H.js(u)
$.dO=new H.jt(t)},
aF:function(a,b){return a(b)||b},
jG:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ha:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hb:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c2(z)
y=z[0]
x=z[1]
return new H.ha(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hy:{"^":"b;a,b,c,d,e,f",
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
a5:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.l([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hy(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
da:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fW:{"^":"O;a,b",
j:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
cZ:function(a,b){return new H.fW(a,b==null?null:b.method)}}},
fy:{"^":"O;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
c4:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fy(a,y,z?null:b.receiver)}}},
hD:{"^":"O;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jI:{"^":"p:5;a",
$1:function(a){if(!!J.A(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ds:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa_:1},
p:{"^":"b;",
j:function(a){return"Closure '"+H.aU(this).trim()+"'"},
gbX:function(){return this},
$isc0:1,
gbX:function(){return this}},
d6:{"^":"p;"},
hq:{"^":"d6;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.az(z)+"'"}},
bW:{"^":"d6;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gt:function(a){var z,y
z=this.c
if(z==null)y=H.aT(this.a)
else y=typeof z!=="object"?J.ac(z):H.aT(z)
return(y^H.aT(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aU(z)+"'")},
p:{
bX:function(a){return a.a},
cG:function(a){return a.c},
bx:function(a){var z,y,x,w,v
z=new H.bW("self","target","receiver","name")
y=J.c2(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hz:{"^":"O;a",
j:function(a){return this.a},
p:{
a0:function(a,b){return new H.hz("TypeError: "+H.d(P.bz(a))+": type '"+H.dA(a)+"' is not a subtype of type '"+b+"'")}}},
eU:{"^":"O;a",
j:function(a){return this.a},
p:{
cH:function(a,b){return new H.eU("CastError: "+H.d(P.bz(a))+": type '"+H.dA(a)+"' is not a subtype of type '"+b+"'")}}},
hg:{"^":"O;a",
j:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
hh:function(a){return new H.hg(a)}}},
db:{"^":"b;a,0b,0c,0d",
ga2:function(){var z=this.b
if(z==null){z=H.br(this.a)
this.b=z}return z},
j:function(a){return this.ga2()},
gt:function(a){var z=this.d
if(z==null){z=C.i.gt(this.ga2())
this.d=z}return z},
w:function(a,b){if(b==null)return!1
return b instanceof H.db&&this.ga2()===b.ga2()}},
cS:{"^":"fH;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gM:function(a){return new H.ah(this,[H.q(this,0)])},
a4:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cs(z,b)}else{y=this.d_(b)
return y}},
d_:function(a){var z=this.d
if(z==null)return!1
return this.ao(this.af(z,J.ac(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a0(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a0(w,b)
x=y==null?null:y.b
return x}else return this.d0(b)},
d0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.af(z,J.ac(a)&0x3ffffff)
x=this.ao(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.q(this,0))
H.w(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ag()
this.b=z}this.aQ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ag()
this.c=y}this.aQ(y,b,c)}else{x=this.d
if(x==null){x=this.ag()
this.d=x}w=J.ac(b)&0x3ffffff
v=this.af(x,w)
if(v==null)this.aj(x,w,[this.ah(b,c)])
else{u=this.ao(v,b)
if(u>=0)v[u].b=c
else v.push(this.ah(b,c))}}},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aK(this))
z=z.c}},
aQ:function(a,b,c){var z
H.w(b,H.q(this,0))
H.w(c,H.q(this,1))
z=this.a0(a,b)
if(z==null)this.aj(a,b,this.ah(b,c))
else z.b=c},
aZ:function(){this.r=this.r+1&67108863},
ah:function(a,b){var z,y
z=new H.fD(H.w(a,H.q(this,0)),H.w(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aZ()
return z},
ao:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aH(a[y].a,b))return y
return-1},
j:function(a){return P.cV(this)},
a0:function(a,b){return a[b]},
af:function(a,b){return a[b]},
aj:function(a,b,c){a[b]=c},
ct:function(a,b){delete a[b]},
cs:function(a,b){return this.a0(a,b)!=null},
ag:function(){var z=Object.create(null)
this.aj(z,"<non-identifier-key>",z)
this.ct(z,"<non-identifier-key>")
return z},
$iscT:1},
fD:{"^":"b;a,b,0c,0d"},
ah:{"^":"fc;a,$ti",
gk:function(a){return this.a.a},
gC:function(a){var z,y
z=this.a
y=new H.fE(z,z.r,this.$ti)
y.c=z.e
return y}},
fE:{"^":"b;a,b,0c,0d,$ti",
saP:function(a){this.d=H.w(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aK(z))
else{z=this.c
if(z==null){this.saP(null)
return!1}else{this.saP(z.a)
this.c=this.c.c
return!0}}}},
jr:{"^":"p:5;a",
$1:function(a){return this.a(a)}},
js:{"^":"p:10;a",
$2:function(a,b){return this.a(a,b)}},
jt:{"^":"p:11;a",
$1:function(a){return this.a(H.y(a))}}}],["","",,H,{"^":"",
jh:function(a){return J.fu(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bG:function(a){var z,y
if(!!J.A(a).$ist)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
a7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b2(b,a))},
fU:{"^":"e;",$ishA:1,"%":"DataView;ArrayBufferView;c6|dl|dm|cY|dn|dp|al"},
c6:{"^":"fU;",
gk:function(a){return a.length},
$ist:1,
$ast:I.b3,
$isu:1,
$asu:I.b3},
cY:{"^":"dm;",
i:function(a,b){H.a7(b,a,a.length)
return a[b]},
h:function(a,b,c){H.dF(c)
H.a7(b,a,a.length)
a[b]=c},
$asbA:function(){return[P.a9]},
$aso:function(){return[P.a9]},
$isj:1,
$asj:function(){return[P.a9]},
$isa:1,
$asa:function(){return[P.a9]},
"%":"Float64Array"},
al:{"^":"dp;",
h:function(a,b,c){H.M(c)
H.a7(b,a,a.length)
a[b]=c},
$asbA:function(){return[P.B]},
$aso:function(){return[P.B]},
$isj:1,
$asj:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
fT:{"^":"cY;",$isa8:1,"%":"Float32Array"},
kL:{"^":"al;",
i:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kM:{"^":"al;",
i:function(a,b){H.a7(b,a,a.length)
return a[b]},
$isfr:1,
"%":"Int32Array"},
kN:{"^":"al;",
i:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kO:{"^":"al;",
i:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
fV:{"^":"al;",
i:function(a,b){H.a7(b,a,a.length)
return a[b]},
$islw:1,
"%":"Uint32Array"},
kP:{"^":"al;",
gk:function(a){return a.length},
i:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kQ:{"^":"al;",
gk:function(a){return a.length},
i:function(a,b){H.a7(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dl:{"^":"c6+o;"},
dm:{"^":"dl+bA;"},
dn:{"^":"c6+o;"},
dp:{"^":"dn+bA;"}}],["","",,P,{"^":"",
hK:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jc()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b1(new P.hM(z),1)).observe(y,{childList:true})
return new P.hL(z,y,x)}else if(self.setImmediate!=null)return P.jd()
return P.je()},
lG:[function(a){self.scheduleImmediate(H.b1(new P.hN(H.k(a,{func:1,ret:-1})),0))},"$1","jc",4,0,4],
lH:[function(a){self.setImmediate(H.b1(new P.hO(H.k(a,{func:1,ret:-1})),0))},"$1","jd",4,0,4],
lI:[function(a){H.k(a,{func:1,ret:-1})
P.iO(0,a)},"$1","je",4,0,4],
j8:function(a,b){if(H.bm(a,{func:1,args:[P.b,P.a_]}))return H.k(a,{func:1,ret:null,args:[P.b,P.a_]})
if(H.bm(a,{func:1,args:[P.b]}))return H.k(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
j7:function(){var z,y
for(;z=$.aE,z!=null;){$.b_=null
y=z.b
$.aE=y
if(y==null)$.aZ=null
z.a.$0()}},
lQ:[function(){$.cc=!0
try{P.j7()}finally{$.b_=null
$.cc=!1
if($.aE!=null)$.cp().$1(P.dE())}},"$0","dE",0,0,1],
dz:function(a){var z=new P.df(H.k(a,{func:1,ret:-1}))
if($.aE==null){$.aZ=z
$.aE=z
if(!$.cc)$.cp().$1(P.dE())}else{$.aZ.b=z
$.aZ=z}},
jb:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aE
if(z==null){P.dz(a)
$.b_=$.aZ
return}y=new P.df(a)
x=$.b_
if(x==null){y.b=z
$.b_=y
$.aE=y}else{y.b=x.b
x.b=y
$.b_=y
if(y.b==null)$.aZ=y}},
jE:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.G
if(C.d===y){P.bJ(null,null,C.d,a)
return}y.toString
P.bJ(null,null,y,H.k(y.b8(a),z))},
bI:function(a,b,c,d,e){var z={}
z.a=d
P.jb(new P.j9(z,e))},
dx:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.G
if(y===c)return d.$0()
$.G=c
z=y
try{y=d.$0()
return y}finally{$.G=z}},
dy:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.G
if(y===c)return d.$1(e)
$.G=c
z=y
try{y=d.$1(e)
return y}finally{$.G=z}},
ja:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.G
if(y===c)return d.$2(e,f)
$.G=c
z=y
try{y=d.$2(e,f)
return y}finally{$.G=z}},
bJ:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b8(d):c.cL(d,-1)
P.dz(d)},
hM:{"^":"p:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hL:{"^":"p:12;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hN:{"^":"p:0;a",
$0:function(){this.a.$0()}},
hO:{"^":"p:0;a",
$0:function(){this.a.$0()}},
iN:{"^":"b;a,0b,c",
cn:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b1(new P.iP(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
p:{
iO:function(a,b){var z=new P.iN(!0,0)
z.cn(a,b)
return z}}},
iP:{"^":"p:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
hQ:{"^":"b;$ti"},
iK:{"^":"hQ;a,$ti"},
aD:{"^":"b;0a,b,c,d,e,$ti",
d2:function(a){if(this.c!==6)return!0
return this.b.b.ar(H.k(this.d,{func:1,ret:P.ce,args:[P.b]}),a.a,P.ce,P.b)},
cZ:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bm(z,{func:1,args:[P.b,P.a_]}))return H.bL(w.d7(z,a.a,a.b,null,y,P.a_),x)
else return H.bL(w.ar(H.k(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
a6:{"^":"b;b2:a<,b,0cE:c<,$ti",
bH:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.G
if(y!==C.d){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.j8(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a6(0,$.G,[c])
w=b==null?1:3
this.aR(new P.aD(x,w,a,b,[z,c]))
return x},
bG:function(a,b){return this.bH(a,null,b)},
aR:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaD")
this.c=a}else{if(z===2){y=H.h(this.c,"$isa6")
z=y.a
if(z<4){y.aR(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bJ(null,null,z,H.k(new P.i2(this,a),{func:1,ret:-1}))}},
b_:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaD")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isa6")
y=u.a
if(y<4){u.b_(a)
return}this.a=y
this.c=u.c}z.a=this.a1(a)
y=this.b
y.toString
P.bJ(null,null,y,H.k(new P.i7(z,this),{func:1,ret:-1}))}},
ai:function(){var z=H.h(this.c,"$isaD")
this.c=null
return this.a1(z)},
a1:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aa:function(a){var z,y,x
z=H.q(this,0)
H.bL(a,{futureOr:1,type:z})
y=this.$ti
if(H.aG(a,"$isaM",y,"$asaM"))if(H.aG(a,"$isa6",y,null))P.dh(a,this)
else P.i3(a,this)
else{x=this.ai()
H.w(a,z)
this.a=4
this.c=a
P.aY(this,x)}},
aU:function(a,b){var z
H.h(b,"$isa_")
z=this.ai()
this.a=8
this.c=new P.U(a,b)
P.aY(this,z)},
$isaM:1,
p:{
i3:function(a,b){var z,y,x
b.a=1
try{a.bH(new P.i4(b),new P.i5(b),null)}catch(x){z=H.b7(x)
y=H.b5(x)
P.jE(new P.i6(b,z,y))}},
dh:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isa6")
if(z>=4){y=b.ai()
b.a=a.a
b.c=a.c
P.aY(b,y)}else{y=H.h(b.c,"$isaD")
b.a=2
b.c=a
a.b_(y)}},
aY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isU")
y=y.b
u=v.a
t=v.b
y.toString
P.bI(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aY(z.a,b)}y=z.a
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
P.bI(null,null,y,u,t)
return}o=$.G
if(o!=q)$.G=q
else o=null
y=b.c
if(y===8)new P.ia(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.i9(x,b,r).$0()}else if((y&2)!==0)new P.i8(z,x,b).$0()
if(o!=null)$.G=o
y=x.b
if(!!J.A(y).$isaM){if(y.a>=4){n=H.h(t.c,"$isaD")
t.c=null
b=t.a1(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dh(y,t)
return}}m=b.b
n=H.h(m.c,"$isaD")
m.c=null
b=m.a1(n)
y=x.a
u=x.b
if(!y){H.w(u,H.q(m,0))
m.a=4
m.c=u}else{H.h(u,"$isU")
m.a=8
m.c=u}z.a=m
y=m}}}},
i2:{"^":"p:0;a,b",
$0:function(){P.aY(this.a,this.b)}},
i7:{"^":"p:0;a,b",
$0:function(){P.aY(this.b,this.a.a)}},
i4:{"^":"p:6;a",
$1:function(a){var z=this.a
z.a=0
z.aa(a)}},
i5:{"^":"p:13;a",
$2:function(a,b){H.h(b,"$isa_")
this.a.aU(a,b)},
$1:function(a){return this.$2(a,null)}},
i6:{"^":"p:0;a,b,c",
$0:function(){this.a.aU(this.b,this.c)}},
ia:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bD(H.k(w.d,{func:1}),null)}catch(v){y=H.b7(v)
x=H.b5(v)
if(this.d){w=H.h(this.a.a.c,"$isU").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isU")
else u.b=new P.U(y,x)
u.a=!0
return}if(!!J.A(z).$isaM){if(z instanceof P.a6&&z.gb2()>=4){if(z.gb2()===8){w=this.b
w.b=H.h(z.gcE(),"$isU")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bG(new P.ib(t),null)
w.a=!1}}},
ib:{"^":"p:14;a",
$1:function(a){return this.a}},
i9:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.w(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.ar(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.b7(t)
y=H.b5(t)
x=this.a
x.b=new P.U(z,y)
x.a=!0}}},
i8:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isU")
w=this.c
if(w.d2(z)&&w.e!=null){v=this.b
v.b=w.cZ(z)
v.a=!1}}catch(u){y=H.b7(u)
x=H.b5(u)
w=H.h(this.a.a.c,"$isU")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.U(y,x)
s.a=!0}}},
df:{"^":"b;a,0b"},
hs:{"^":"b;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.a6(0,$.G,[P.B])
z.a=0
x=H.q(this,0)
w=H.k(new P.hu(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.hv(z,y),{func:1,ret:-1})
W.au(this.a,this.b,w,!1,x)
return y}},
hu:{"^":"p;a,b",
$1:function(a){H.w(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.q(this.b,0)]}}},
hv:{"^":"p:0;a,b",
$0:function(){this.b.aa(this.a.a)}},
ht:{"^":"b;"},
U:{"^":"b;a,b",
j:function(a){return H.d(this.a)},
$isO:1},
iU:{"^":"b;",$islE:1},
j9:{"^":"p:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.d_()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.j(0)
throw x}},
iy:{"^":"iU;",
d8:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.d===$.G){a.$0()
return}P.dx(null,null,this,a,-1)}catch(x){z=H.b7(x)
y=H.b5(x)
P.bI(null,null,this,z,H.h(y,"$isa_"))}},
d9:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.d===$.G){a.$1(b)
return}P.dy(null,null,this,a,b,-1,c)}catch(x){z=H.b7(x)
y=H.b5(x)
P.bI(null,null,this,z,H.h(y,"$isa_"))}},
cL:function(a,b){return new P.iA(this,H.k(a,{func:1,ret:b}),b)},
b8:function(a){return new P.iz(this,H.k(a,{func:1,ret:-1}))},
cM:function(a,b){return new P.iB(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bD:function(a,b){H.k(a,{func:1,ret:b})
if($.G===C.d)return a.$0()
return P.dx(null,null,this,a,b)},
ar:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.G===C.d)return a.$1(b)
return P.dy(null,null,this,a,b,c,d)},
d7:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.G===C.d)return a.$2(b,c)
return P.ja(null,null,this,a,b,c,d,e,f)}},
iA:{"^":"p;a,b,c",
$0:function(){return this.a.bD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
iz:{"^":"p:1;a,b",
$0:function(){return this.a.d8(this.b)}},
iB:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.d9(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cU:function(a,b,c){H.bq(a)
return H.v(H.ji(a,new H.cS(0,0,[b,c])),"$iscT",[b,c],"$ascT")},
Z:function(a,b){return new H.cS(0,0,[a,b])},
ai:function(a,b,c,d){return new P.ik(0,0,[d])},
fs:function(a,b,c){var z,y
if(P.cd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.l([],[P.f])
y=$.b8()
C.a.l(y,a)
try{P.j6(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.d5(b,H.jy(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
c1:function(a,b,c){var z,y,x
if(P.cd(a))return b+"..."+c
z=new P.c8(b)
y=$.b8()
C.a.l(y,a)
try{x=z
x.a=P.d5(x.gR(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gR()+c
y=z.gR()
return y.charCodeAt(0)==0?y:y},
cd:function(a){var z,y
for(z=0;y=$.b8(),z<y.length;++z)if(a===y[z])return!0
return!1},
j6:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[P.f],"$asa")
z=a.gC(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.d(z.gE(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.u();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
fF:function(a,b){var z,y,x
z=P.ai(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.N)(a),++x)z.l(0,H.w(a[x],b))
return z},
cV:function(a){var z,y,x
z={}
if(P.cd(a))return"{...}"
y=new P.c8("")
try{C.a.l($.b8(),a)
x=y
x.a=x.gR()+"{"
z.a=!0
J.eu(a,new P.fI(z,y))
z=y
z.a=z.gR()+"}"}finally{z=$.b8()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gR()
return z.charCodeAt(0)==0?z:z},
ik:{"^":"id;a,0b,0c,0d,0e,0f,r,$ti",
gC:function(a){return P.dk(this,this.r,H.q(this,0))},
gk:function(a){return this.a},
H:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbl")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbl")!=null}else return this.cr(b)},
cr:function(a){var z=this.d
if(z==null)return!1
return this.ae(this.aX(z,a),a)>=0},
l:function(a,b){var z,y
H.w(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ca()
this.b=z}return this.aS(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ca()
this.c=y}return this.aS(y,b)}else return this.co(0,b)},
co:function(a,b){var z,y,x
H.w(b,H.q(this,0))
z=this.d
if(z==null){z=P.ca()
this.d=z}y=this.aV(b)
x=z[y]
if(x==null)z[y]=[this.a9(b)]
else{if(this.ae(x,b)>=0)return!1
x.push(this.a9(b))}return!0},
bC:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b0(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b0(this.c,b)
else return this.cC(0,b)},
cC:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.aX(z,b)
x=this.ae(y,b)
if(x<0)return!1
this.b4(y.splice(x,1)[0])
return!0},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.a8()}},
aS:function(a,b){H.w(b,H.q(this,0))
if(H.h(a[b],"$isbl")!=null)return!1
a[b]=this.a9(b)
return!0},
b0:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbl")
if(z==null)return!1
this.b4(z)
delete a[b]
return!0},
a8:function(){this.r=this.r+1&67108863},
a9:function(a){var z,y
z=new P.bl(H.w(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.a8()
return z},
b4:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.a8()},
aV:function(a){return J.ac(a)&0x3ffffff},
aX:function(a,b){return a[this.aV(b)]},
ae:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aH(a[y].a,b))return y
return-1},
p:{
ca:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bl:{"^":"b;a,0b,0c"},
il:{"^":"b;a,b,0c,0d,$ti",
saT:function(a){this.d=H.w(a,H.q(this,0))},
gE:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aK(z))
else{z=this.c
if(z==null){this.saT(null)
return!1}else{this.saT(H.w(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
p:{
dk:function(a,b,c){var z=new P.il(a,b,[c])
z.c=a.e
return z}}},
id:{"^":"hi;"},
o:{"^":"b;$ti",
gC:function(a){return new H.fG(a,this.gk(a),0,[H.bo(this,a,"o",0)])},
q:function(a,b){return this.i(a,b)},
cY:function(a,b,c,d){var z,y,x
H.w(b,d)
H.k(c,{func:1,ret:d,args:[d,H.bo(this,a,"o",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gk(a))throw H.c(P.aK(a))}return y},
j:function(a){return P.c1(a,"[","]")}},
fH:{"^":"S;"},
fI:{"^":"p:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
S:{"^":"b;$ti",
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bo(this,a,"S",0),H.bo(this,a,"S",1)]})
for(z=J.cv(this.gM(a));z.u();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.bb(this.gM(a))},
j:function(a){return P.cV(a)},
$isK:1},
hj:{"^":"b;$ti",
j:function(a){return P.c1(this,"{","}")},
$isj:1,
$isl7:1},
hi:{"^":"hj;"}}],["","",,P,{"^":"",
fd:function(a){if(a instanceof H.p)return a.j(0)
return"Instance of '"+H.aU(a)+"'"},
bz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fd(a)},
cP:function(a){return new P.i_(a)},
ay:function(a){H.bP(H.d(a))},
ce:{"^":"b;"},
"+bool":0,
by:{"^":"b;a,b",
w:function(a,b){if(b==null)return!1
return b instanceof P.by&&this.a===b.a&&!0},
J:function(a,b){return C.e.J(this.a,H.h(b,"$isby").a)},
gt:function(a){var z=this.a
return(z^C.e.b1(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t,s
z=P.f4(H.h7(this))
y=P.bc(H.h5(this))
x=P.bc(H.h1(this))
w=P.bc(H.h2(this))
v=P.bc(H.h4(this))
u=P.bc(H.h6(this))
t=P.f5(H.h3(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isR:1,
$asR:function(){return[P.by]},
p:{
f4:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f5:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bc:function(a){if(a>=10)return""+a
return"0"+a}}},
a9:{"^":"D;"},
"+double":0,
aL:{"^":"b;a",
O:function(a,b){return C.e.O(this.a,H.h(b,"$isaL").a)},
w:function(a,b){if(b==null)return!1
return b instanceof P.aL&&this.a===b.a},
gt:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.e.J(this.a,H.h(b,"$isaL").a)},
j:function(a){var z,y,x,w,v
z=new P.fb()
y=this.a
if(y<0)return"-"+new P.aL(0-y).j(0)
x=z.$1(C.e.U(y,6e7)%60)
w=z.$1(C.e.U(y,1e6)%60)
v=new P.fa().$1(y%1e6)
return""+C.e.U(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isR:1,
$asR:function(){return[P.aL]},
p:{
f9:function(a,b,c,d,e,f){return new P.aL(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fa:{"^":"p:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fb:{"^":"p:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
d_:{"^":"O;",
j:function(a){return"Throw of null."}},
aI:{"^":"O;a,b,c,d",
gac:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gab:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gac()+y+x
if(!this.a)return w
v=this.gab()
u=P.bz(this.b)
return w+v+": "+H.d(u)},
p:{
cE:function(a,b,c){return new P.aI(!0,a,b,c)}}},
d0:{"^":"aI;e,f,a,b,c,d",
gac:function(){return"RangeError"},
gab:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
bB:function(a,b,c){return new P.d0(null,null,!0,a,b,"Value not in range")},
h9:function(a,b,c,d,e){return new P.d0(b,c,!0,a,d,"Invalid value")}}},
fq:{"^":"aI;e,k:f>,a,b,c,d",
gac:function(){return"RangeError"},
gab:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.X()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
E:function(a,b,c,d,e){var z=H.M(e==null?J.bb(b):e)
return new P.fq(b,z,!0,a,c,"Index out of range")}}},
hE:{"^":"O;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
x:function(a){return new P.hE(a)}}},
hC:{"^":"O;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dd:function(a){return new P.hC(a)}}},
d4:{"^":"O;a",
j:function(a){return"Bad state: "+this.a},
p:{
hp:function(a){return new P.d4(a)}}},
f_:{"^":"O;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bz(z))+"."},
p:{
aK:function(a){return new P.f_(a)}}},
d3:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isO:1},
f3:{"^":"O;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
i_:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
B:{"^":"D;"},
"+int":0,
j:{"^":"b;$ti",
gk:function(a){var z,y
z=this.gC(this)
for(y=0;z.u();)++y
return y},
j:function(a){return P.fs(this,"(",")")}},
a:{"^":"b;$ti",$isj:1},
"+List":0,
K:{"^":"b;$ti"},
F:{"^":"b;",
gt:function(a){return P.b.prototype.gt.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isR:1,
$asR:function(){return[P.D]}},
"+num":0,
b:{"^":";",
w:function(a,b){return this===b},
gt:function(a){return H.aT(this)},
j:function(a){return"Instance of '"+H.aU(this)+"'"},
toString:function(){return this.j(this)}},
a_:{"^":"b;"},
f:{"^":"b;",$isR:1,
$asR:function(){return[P.f]},
$isfY:1},
"+String":0,
c8:{"^":"b;R:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
d5:function(a,b,c){var z=J.cv(b)
if(!z.u())return a
if(c.length===0){do a+=H.d(z.gE(z))
while(z.u())}else{a+=H.d(z.gE(z))
for(;z.u();)a=a+c+H.d(z.gE(z))}return a}}}}],["","",,W,{"^":"",
cO:function(a){H.h(a,"$isJ")
return"wheel"},
bF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dj:function(a,b,c,d){var z,y
z=W.bF(W.bF(W.bF(W.bF(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dv:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hT(a)
if(!!J.A(z).$isJ)return z
return}else return H.h(a,"$isJ")},
dB:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.G
if(z===C.d)return a
return z.cM(a,b)},
Y:{"^":"bd;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jJ:{"^":"e;0k:length=","%":"AccessibleNodeList"},
jK:{"^":"Y;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jL:{"^":"Y;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
eQ:{"^":"e;","%":";Blob"},
bY:{"^":"Y;0n:height=,0m:width=",
at:function(a,b,c){if(c!=null)return this.cv(a,b,P.jf(c,null))
return this.cw(a,b)},
bY:function(a,b){return this.at(a,b,null)},
cv:function(a,b,c){return a.getContext(b,c)},
cw:function(a,b){return a.getContext(b)},
$isbY:1,
"%":"HTMLCanvasElement"},
eT:{"^":"e;",
a3:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
bZ:{"^":"e;",
bj:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
cX:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
a6:function(a){return P.W(a.getContextAttributes())},
$isbZ:1,
"%":"CanvasRenderingContext2D"},
jR:{"^":"C;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
f0:{"^":"c_;",$isf0:1,"%":"CSSNumericValue|CSSUnitValue"},
jT:{"^":"f2;0k:length=","%":"CSSPerspective"},
ad:{"^":"e;",$isad:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
jU:{"^":"hR;0k:length=",
ax:function(a,b){var z=this.cz(a,this.cq(a,b))
return z==null?"":z},
cq:function(a,b){var z,y
z=$.dT()
y=z[b]
if(typeof y==="string")return y
y=this.cG(a,b)
z[b]=y
return y},
cG:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f6()+b
if(z in a)return z
return b},
cz:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f1:{"^":"b;",
gn:function(a){return this.ax(a,"height")},
gm:function(a){return this.ax(a,"width")}},
c_:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
f2:{"^":"e;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
jW:{"^":"c_;0k:length=","%":"CSSTransformValue"},
jX:{"^":"c_;0k:length=","%":"CSSUnparsedValue"},
jZ:{"^":"e;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
f7:{"^":"C;",
d4:function(a,b){return a.querySelector(b)},
gbx:function(a){return new W.bk(a,"mousedown",!1,[W.P])},
gby:function(a){return new W.bk(a,"mousemove",!1,[W.P])},
gbz:function(a){return new W.bk(a,"mouseup",!1,[W.P])},
gbA:function(a){return new W.bk(a,H.y(W.cO(a)),!1,[W.aC])},
"%":"XMLDocument;Document"},
k_:{"^":"e;",
j:function(a){return String(a)},
"%":"DOMException"},
k0:{"^":"hV;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(c,"$isQ",[P.D],"$asQ")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[[P.Q,P.D]]},
$isu:1,
$asu:function(){return[[P.Q,P.D]]},
$aso:function(){return[[P.Q,P.D]]},
$isj:1,
$asj:function(){return[[P.Q,P.D]]},
$isa:1,
$asa:function(){return[[P.Q,P.D]]},
$asr:function(){return[[P.Q,P.D]]},
"%":"ClientRectList|DOMRectList"},
f8:{"^":"e;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
w:function(a,b){var z
if(b==null)return!1
if(!H.aG(b,"$isQ",[P.D],"$asQ"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.dj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isQ:1,
$asQ:function(){return[P.D]},
"%":";DOMRectReadOnly"},
k1:{"^":"hX;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.y(c)
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[P.f]},
$isu:1,
$asu:function(){return[P.f]},
$aso:function(){return[P.f]},
$isj:1,
$asj:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asr:function(){return[P.f]},
"%":"DOMStringList"},
k2:{"^":"e;0k:length=","%":"DOMTokenList"},
bd:{"^":"C;",
j:function(a){return a.localName},
gbx:function(a){return new W.bE(a,"mousedown",!1,[W.P])},
gby:function(a){return new W.bE(a,"mousemove",!1,[W.P])},
gbz:function(a){return new W.bE(a,"mouseup",!1,[W.P])},
gbA:function(a){return new W.bE(a,H.y(W.cO(a)),!1,[W.aC])},
$isbd:1,
"%":";Element"},
k4:{"^":"Y;0n:height=,0m:width=","%":"HTMLEmbedElement"},
X:{"^":"e;",$isX:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
J:{"^":"e;",
cI:function(a,b,c,d){H.k(c,{func:1,args:[W.X]})
if(c!=null)this.cp(a,b,c,!1)},
cp:function(a,b,c,d){return a.addEventListener(b,H.b1(H.k(c,{func:1,args:[W.X]}),1),!1)},
$isJ:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dq|dr|dt|du"},
af:{"^":"eQ;",$isaf:1,"%":"File"},
kl:{"^":"i1;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isaf")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.af]},
$isu:1,
$asu:function(){return[W.af]},
$aso:function(){return[W.af]},
$isj:1,
$asj:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$asr:function(){return[W.af]},
"%":"FileList"},
km:{"^":"J;0k:length=","%":"FileWriter"},
kp:{"^":"Y;0k:length=","%":"HTMLFormElement"},
ag:{"^":"e;",$isag:1,"%":"Gamepad"},
kq:{"^":"e;0k:length=","%":"History"},
kr:{"^":"ig;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isC")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.C]},
$isu:1,
$asu:function(){return[W.C]},
$aso:function(){return[W.C]},
$isj:1,
$asj:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asr:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fn:{"^":"f7;","%":"HTMLDocument"},
ks:{"^":"Y;0n:height=,0m:width=","%":"HTMLIFrameElement"},
kv:{"^":"e;0n:height=,0m:width=","%":"ImageBitmap"},
kw:{"^":"e;0n:height=,0m:width=","%":"ImageData"},
kx:{"^":"Y;0n:height=,0m:width=","%":"HTMLImageElement"},
kz:{"^":"Y;0n:height=,0m:width=","%":"HTMLInputElement"},
aN:{"^":"dc;",$isaN:1,"%":"KeyboardEvent"},
kF:{"^":"e;",
j:function(a){return String(a)},
"%":"Location"},
fJ:{"^":"Y;","%":"HTMLAudioElement;HTMLMediaElement"},
kH:{"^":"e;0k:length=","%":"MediaList"},
kI:{"^":"im;",
i:function(a,b){return P.W(a.get(H.y(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gM:function(a){var z=H.l([],[P.f])
this.D(a,new W.fL(z))
return z},
gk:function(a){return a.size},
$asS:function(){return[P.f,null]},
$isK:1,
$asK:function(){return[P.f,null]},
"%":"MIDIInputMap"},
fL:{"^":"p:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
kJ:{"^":"io;",
i:function(a,b){return P.W(a.get(H.y(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gM:function(a){var z=H.l([],[P.f])
this.D(a,new W.fM(z))
return z},
gk:function(a){return a.size},
$asS:function(){return[P.f,null]},
$isK:1,
$asK:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
fM:{"^":"p:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ak:{"^":"e;",$isak:1,"%":"MimeType"},
kK:{"^":"iq;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isak")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ak]},
$isu:1,
$asu:function(){return[W.ak]},
$aso:function(){return[W.ak]},
$isj:1,
$asj:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asr:function(){return[W.ak]},
"%":"MimeTypeArray"},
P:{"^":"dc;",
gbw:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aS(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.A(W.dv(z)).$isbd)throw H.c(P.x("offsetX is only supported on elements"))
y=H.h(W.dv(z),"$isbd")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.v(new P.aS(u,v,w),"$isaS",w,"$asaS")
if(typeof z!=="number")return z.aF()
if(typeof x!=="number")return x.aF()
return new P.aS(C.q.bI(z-u),C.q.bI(x-v),w)}},
$isP:1,
"%":";DragEvent|MouseEvent"},
C:{"^":"J;",
j:function(a){var z=a.nodeValue
return z==null?this.c2(a):z},
$isC:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
kR:{"^":"is;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isC")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.C]},
$isu:1,
$asu:function(){return[W.C]},
$aso:function(){return[W.C]},
$isj:1,
$asj:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asr:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
kT:{"^":"Y;0n:height=,0m:width=","%":"HTMLObjectElement"},
kV:{"^":"J;0n:height=,0m:width=","%":"OffscreenCanvas"},
kW:{"^":"e;0n:height=,0m:width=","%":"PaintSize"},
am:{"^":"e;0k:length=",$isam:1,"%":"Plugin"},
kY:{"^":"iw;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isam")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.am]},
$isu:1,
$asu:function(){return[W.am]},
$aso:function(){return[W.am]},
$isj:1,
$asj:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asr:function(){return[W.am]},
"%":"PluginArray"},
l_:{"^":"P;0n:height=,0m:width=","%":"PointerEvent"},
l4:{"^":"iC;",
i:function(a,b){return P.W(a.get(H.y(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gM:function(a){var z=H.l([],[P.f])
this.D(a,new W.hf(z))
return z},
gk:function(a){return a.size},
$asS:function(){return[P.f,null]},
$isK:1,
$asK:function(){return[P.f,null]},
"%":"RTCStatsReport"},
hf:{"^":"p:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
l5:{"^":"e;0n:height=,0m:width=","%":"Screen"},
l6:{"^":"Y;0k:length=","%":"HTMLSelectElement"},
an:{"^":"J;",$isan:1,"%":"SourceBuffer"},
l8:{"^":"dr;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isan")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.an]},
$isu:1,
$asu:function(){return[W.an]},
$aso:function(){return[W.an]},
$isj:1,
$asj:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asr:function(){return[W.an]},
"%":"SourceBufferList"},
ao:{"^":"e;",$isao:1,"%":"SpeechGrammar"},
l9:{"^":"iE;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isao")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ao]},
$isu:1,
$asu:function(){return[W.ao]},
$aso:function(){return[W.ao]},
$isj:1,
$asj:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asr:function(){return[W.ao]},
"%":"SpeechGrammarList"},
ap:{"^":"e;0k:length=",$isap:1,"%":"SpeechRecognitionResult"},
lc:{"^":"iH;",
i:function(a,b){return this.aY(a,H.y(b))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=this.cB(a,z)
if(y==null)return
b.$2(y,this.aY(a,y))}},
gM:function(a){var z=H.l([],[P.f])
this.D(a,new W.hr(z))
return z},
gk:function(a){return a.length},
aY:function(a,b){return a.getItem(b)},
cB:function(a,b){return a.key(b)},
$asS:function(){return[P.f,P.f]},
$isK:1,
$asK:function(){return[P.f,P.f]},
"%":"Storage"},
hr:{"^":"p:15;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aq:{"^":"e;",$isaq:1,"%":"CSSStyleSheet|StyleSheet"},
lf:{"^":"e;0m:width=","%":"TextMetrics"},
ar:{"^":"J;",$isar:1,"%":"TextTrack"},
as:{"^":"J;",$isas:1,"%":"TextTrackCue|VTTCue"},
lg:{"^":"iM;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isas")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.as]},
$isu:1,
$asu:function(){return[W.as]},
$aso:function(){return[W.as]},
$isj:1,
$asj:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asr:function(){return[W.as]},
"%":"TextTrackCueList"},
lh:{"^":"du;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isar")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ar]},
$isu:1,
$asu:function(){return[W.ar]},
$aso:function(){return[W.ar]},
$isj:1,
$asj:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asr:function(){return[W.ar]},
"%":"TextTrackList"},
li:{"^":"e;0k:length=","%":"TimeRanges"},
at:{"^":"e;",$isat:1,"%":"Touch"},
lj:{"^":"iR;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isat")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.at]},
$isu:1,
$asu:function(){return[W.at]},
$aso:function(){return[W.at]},
$isj:1,
$asj:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asr:function(){return[W.at]},
"%":"TouchList"},
lk:{"^":"e;0k:length=","%":"TrackDefaultList"},
dc:{"^":"X;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lx:{"^":"e;",
j:function(a){return String(a)},
"%":"URL"},
lA:{"^":"fJ;0n:height=,0m:width=","%":"HTMLVideoElement"},
lB:{"^":"J;0k:length=","%":"VideoTrackList"},
lC:{"^":"J;0n:height=,0m:width=","%":"VisualViewport"},
lD:{"^":"e;0m:width=","%":"VTTRegion"},
aC:{"^":"P;",
gcT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
$isaC:1,
"%":"WheelEvent"},
hH:{"^":"J;",
gcJ:function(a){var z,y,x
z=P.D
y=new P.a6(0,$.G,[z])
x=H.k(new W.hI(new P.iK(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cu(a)
this.cD(a,W.dB(x,z))
return y},
cD:function(a,b){return a.requestAnimationFrame(H.b1(H.k(b,{func:1,ret:-1,args:[P.D]}),1))},
cu:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isde:1,
"%":"DOMWindow|Window"},
hI:{"^":"p:16;a",
$1:function(a){var z=this.a
a=H.bL(H.cl(a),{futureOr:1,type:H.q(z,0)})
z=z.a
if(z.a!==0)H.ab(P.hp("Future already completed"))
z.aa(a)}},
lJ:{"^":"iW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isad")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ad]},
$isu:1,
$asu:function(){return[W.ad]},
$aso:function(){return[W.ad]},
$isj:1,
$asj:function(){return[W.ad]},
$isa:1,
$asa:function(){return[W.ad]},
$asr:function(){return[W.ad]},
"%":"CSSRuleList"},
lK:{"^":"f8;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
w:function(a,b){var z
if(b==null)return!1
if(!H.aG(b,"$isQ",[P.D],"$asQ"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.dj(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lL:{"^":"iY;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isag")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ag]},
$isu:1,
$asu:function(){return[W.ag]},
$aso:function(){return[W.ag]},
$isj:1,
$asj:function(){return[W.ag]},
$isa:1,
$asa:function(){return[W.ag]},
$asr:function(){return[W.ag]},
"%":"GamepadList"},
lM:{"^":"j_;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isC")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.C]},
$isu:1,
$asu:function(){return[W.C]},
$aso:function(){return[W.C]},
$isj:1,
$asj:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asr:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lN:{"^":"j1;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isap")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ap]},
$isu:1,
$asu:function(){return[W.ap]},
$aso:function(){return[W.ap]},
$isj:1,
$asj:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asr:function(){return[W.ap]},
"%":"SpeechRecognitionResultList"},
lO:{"^":"j3;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.h(c,"$isaq")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aq]},
$isu:1,
$asu:function(){return[W.aq]},
$aso:function(){return[W.aq]},
$isj:1,
$asj:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asr:function(){return[W.aq]},
"%":"StyleSheetList"},
bk:{"^":"hs;a,b,c,$ti"},
bE:{"^":"bk;a,b,c,$ti"},
hY:{"^":"ht;a,b,c,d,e,$ti",p:{
au:function(a,b,c,d,e){var z=W.dB(new W.hZ(c),W.X)
if(z!=null&&!0)J.ec(a,b,z,!1)
return new W.hY(0,a,b,z,!1,[e])}}},
hZ:{"^":"p:17;a",
$1:function(a){return this.a.$1(H.h(a,"$isX"))}},
r:{"^":"b;$ti",
gC:function(a){return new W.ff(a,this.gk(a),-1,[H.bo(this,a,"r",0)])}},
ff:{"^":"b;a,b,c,0d,$ti",
saW:function(a){this.d=H.w(a,H.q(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saW(J.b9(this.a,z))
this.c=z
return!0}this.saW(null)
this.c=y
return!1},
gE:function(a){return this.d}},
hS:{"^":"b;a",$isJ:1,$isde:1,p:{
hT:function(a){if(a===window)return H.h(a,"$isde")
else return new W.hS(a)}}},
hR:{"^":"e+f1;"},
hU:{"^":"e+o;"},
hV:{"^":"hU+r;"},
hW:{"^":"e+o;"},
hX:{"^":"hW+r;"},
i0:{"^":"e+o;"},
i1:{"^":"i0+r;"},
ie:{"^":"e+o;"},
ig:{"^":"ie+r;"},
im:{"^":"e+S;"},
io:{"^":"e+S;"},
ip:{"^":"e+o;"},
iq:{"^":"ip+r;"},
ir:{"^":"e+o;"},
is:{"^":"ir+r;"},
iv:{"^":"e+o;"},
iw:{"^":"iv+r;"},
iC:{"^":"e+S;"},
dq:{"^":"J+o;"},
dr:{"^":"dq+r;"},
iD:{"^":"e+o;"},
iE:{"^":"iD+r;"},
iH:{"^":"e+S;"},
iL:{"^":"e+o;"},
iM:{"^":"iL+r;"},
dt:{"^":"J+o;"},
du:{"^":"dt+r;"},
iQ:{"^":"e+o;"},
iR:{"^":"iQ+r;"},
iV:{"^":"e+o;"},
iW:{"^":"iV+r;"},
iX:{"^":"e+o;"},
iY:{"^":"iX+r;"},
iZ:{"^":"e+o;"},
j_:{"^":"iZ+r;"},
j0:{"^":"e+o;"},
j1:{"^":"j0+r;"},
j2:{"^":"e+o;"},
j3:{"^":"j2+r;"}}],["","",,P,{"^":"",
W:function(a){var z,y,x,w,v
if(a==null)return
z=P.Z(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.y(y[w])
z.h(0,v,a[v])}return z},
jf:function(a,b){var z={}
a.D(0,new P.jg(z))
return z},
cN:function(){var z=$.cM
if(z==null){z=J.bR(window.navigator.userAgent,"Opera",0)
$.cM=z}return z},
f6:function(){var z,y
z=$.cJ
if(z!=null)return z
y=$.cK
if(y==null){y=J.bR(window.navigator.userAgent,"Firefox",0)
$.cK=y}if(y)z="-moz-"
else{y=$.cL
if(y==null){y=!P.cN()&&J.bR(window.navigator.userAgent,"Trident/",0)
$.cL=y}if(y)z="-ms-"
else z=P.cN()?"-o-":"-webkit-"}$.cJ=z
return z},
jg:{"^":"p:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
jF:function(a){return Math.sqrt(a)},
di:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ih:{"^":"b;",
d3:function(){return Math.random()}},
aS:{"^":"b;S:a>,N:b>,$ti",
j:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
w:function(a,b){if(b==null)return!1
return H.aG(b,"$isaS",[P.D],null)&&this.a==J.bv(b)&&this.b==b.gN(b)},
gt:function(a){var z,y,x
z=J.ac(this.a)
y=J.ac(this.b)
y=P.di(P.di(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
ix:{"^":"b;"},
Q:{"^":"ix;$ti"}}],["","",,P,{"^":"",eM:{"^":"e;",$iseM:1,"%":"SVGAnimatedLength"},k5:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},k6:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},k7:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},k8:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},k9:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},ka:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kb:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kc:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},kd:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},ke:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},kf:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},kg:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},kh:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},ki:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},kj:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},kk:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},kn:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},ko:{"^":"be;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fm:{"^":"be;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},be:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},ky:{"^":"be;0n:height=,0m:width=","%":"SVGImageElement"},aO:{"^":"e;",$isaO:1,"%":"SVGLength"},kE:{"^":"ij;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.h(c,"$isaO")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aO]},
$isj:1,
$asj:function(){return[P.aO]},
$isa:1,
$asa:function(){return[P.aO]},
$asr:function(){return[P.aO]},
"%":"SVGLengthList"},kG:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},aR:{"^":"e;",$isaR:1,"%":"SVGNumber"},kS:{"^":"iu;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.h(c,"$isaR")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aR]},
$isj:1,
$asj:function(){return[P.aR]},
$isa:1,
$asa:function(){return[P.aR]},
$asr:function(){return[P.aR]},
"%":"SVGNumberList"},kX:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},kZ:{"^":"e;0k:length=","%":"SVGPointList"},l0:{"^":"e;0n:height=,0m:width=","%":"SVGRect"},l1:{"^":"fm;0n:height=,0m:width=","%":"SVGRectElement"},ld:{"^":"iJ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.y(c)
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$aso:function(){return[P.f]},
$isj:1,
$asj:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asr:function(){return[P.f]},
"%":"SVGStringList"},I:{"^":"bd;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},le:{"^":"be;0n:height=,0m:width=","%":"SVGSVGElement"},aV:{"^":"e;",$isaV:1,"%":"SVGTransform"},ll:{"^":"iT;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.h(c,"$isaV")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aV]},
$isj:1,
$asj:function(){return[P.aV]},
$isa:1,
$asa:function(){return[P.aV]},
$asr:function(){return[P.aV]},
"%":"SVGTransformList"},ly:{"^":"be;0n:height=,0m:width=","%":"SVGUseElement"},ii:{"^":"e+o;"},ij:{"^":"ii+r;"},it:{"^":"e+o;"},iu:{"^":"it+r;"},iI:{"^":"e+o;"},iJ:{"^":"iI+r;"},iS:{"^":"e+o;"},iT:{"^":"iS+r;"}}],["","",,P,{"^":"",a8:{"^":"b;",$isj:1,
$asj:function(){return[P.a9]},
$isa:1,
$asa:function(){return[P.a9]},
$ishA:1}}],["","",,P,{"^":"",jM:{"^":"e;0k:length=","%":"AudioBuffer"},jN:{"^":"hP;",
i:function(a,b){return P.W(a.get(H.y(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.W(y.value[1]))}},
gM:function(a){var z=H.l([],[P.f])
this.D(a,new P.eO(z))
return z},
gk:function(a){return a.size},
$asS:function(){return[P.f,null]},
$isK:1,
$asK:function(){return[P.f,null]},
"%":"AudioParamMap"},eO:{"^":"p:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},jO:{"^":"J;0k:length=","%":"AudioTrackList"},eP:{"^":"J;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kU:{"^":"eP;0k:length=","%":"OfflineAudioContext"},hP:{"^":"e+S;"}}],["","",,P,{"^":"",eR:{"^":"e;",$iseR:1,"%":"WebGLBuffer"},fk:{"^":"e;",$isfk:1,"%":"WebGLFramebuffer"},h8:{"^":"e;",$ish8:1,"%":"WebGLProgram"},l2:{"^":"e;",
b5:function(a,b){return a.activeTexture(b)},
b6:function(a,b,c){return a.attachShader(b,c)},
b7:function(a,b,c){return a.bindBuffer(b,c)},
b9:function(a,b,c){return a.bindFramebuffer(b,c)},
ba:function(a,b,c){return a.bindTexture(b,c)},
bb:function(a,b){return a.blendEquation(b)},
bc:function(a,b,c){return a.blendFunc(b,c)},
bd:function(a,b,c,d){return a.bufferData(b,c,d)},
be:function(a,b){return a.clear(b)},
bf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bg:function(a,b){return a.compileShader(b)},
bh:function(a){return a.createBuffer()},
bi:function(a){return a.createProgram()},
bk:function(a,b){return a.createShader(b)},
bl:function(a){return a.createTexture()},
bn:function(a,b){return a.depthMask(b)},
bo:function(a,b){return a.disable(b)},
bp:function(a,b,c,d){return a.drawArrays(b,c,d)},
bq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
br:function(a,b){return a.enable(b)},
bs:function(a,b){return a.enableVertexAttribArray(b)},
a6:function(a){return P.W(a.getContextAttributes())},
au:function(a){return a.getError()},
av:function(a,b){return a.getProgramInfoLog(b)},
aw:function(a,b,c){return a.getProgramParameter(b,c)},
ay:function(a,b){return a.getShaderInfoLog(b)},
az:function(a,b,c){return a.getShaderParameter(b,c)},
aA:function(a,b,c){return a.getUniformLocation(b,c)},
bu:function(a,b){return a.linkProgram(b)},
bB:function(a,b,c){return a.pixelStorei(b,c)},
aC:function(a,b,c){return a.shaderSource(b,c)},
aE:function(a,b,c,d){return a.stencilFunc(b,c,d)},
as:function(a,b,c,d,e,f,g,h,i,j){this.ak(a,b,c,d,e,f,g)
return},
bE:function(a,b,c,d,e,f,g){return this.as(a,b,c,d,e,f,g,null,null,null)},
ak:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bF:function(a,b,c,d){return a.texParameteri(b,c,d)},
bJ:function(a,b,c){return a.uniform1f(b,c)},
bK:function(a,b,c){return a.uniform1fv(b,c)},
bL:function(a,b,c){return a.uniform1i(b,c)},
bM:function(a,b,c){return a.uniform1iv(b,c)},
bN:function(a,b,c){return a.uniform2fv(b,c)},
bO:function(a,b,c){return a.uniform3fv(b,c)},
bP:function(a,b,c){return a.uniform4fv(b,c)},
bQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bS:function(a,b){return a.useProgram(b)},
bT:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bV:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},l3:{"^":"e;",
cK:function(a,b){return a.beginTransformFeedback(b)},
cN:function(a,b){return a.bindVertexArray(b)},
cS:function(a){return a.createVertexArray()},
cU:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cV:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cW:function(a){return a.endTransformFeedback()},
da:function(a,b,c,d){this.cH(a,b,H.v(c,"$isa",[P.f],"$asa"),d)
return},
cH:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dc:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b5:function(a,b){return a.activeTexture(b)},
b6:function(a,b,c){return a.attachShader(b,c)},
b7:function(a,b,c){return a.bindBuffer(b,c)},
b9:function(a,b,c){return a.bindFramebuffer(b,c)},
ba:function(a,b,c){return a.bindTexture(b,c)},
bb:function(a,b){return a.blendEquation(b)},
bc:function(a,b,c){return a.blendFunc(b,c)},
bd:function(a,b,c,d){return a.bufferData(b,c,d)},
be:function(a,b){return a.clear(b)},
bf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bg:function(a,b){return a.compileShader(b)},
bh:function(a){return a.createBuffer()},
bi:function(a){return a.createProgram()},
bk:function(a,b){return a.createShader(b)},
bl:function(a){return a.createTexture()},
bn:function(a,b){return a.depthMask(b)},
bo:function(a,b){return a.disable(b)},
bp:function(a,b,c,d){return a.drawArrays(b,c,d)},
bq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
br:function(a,b){return a.enable(b)},
bs:function(a,b){return a.enableVertexAttribArray(b)},
a6:function(a){return P.W(a.getContextAttributes())},
au:function(a){return a.getError()},
av:function(a,b){return a.getProgramInfoLog(b)},
aw:function(a,b,c){return a.getProgramParameter(b,c)},
ay:function(a,b){return a.getShaderInfoLog(b)},
az:function(a,b,c){return a.getShaderParameter(b,c)},
aA:function(a,b,c){return a.getUniformLocation(b,c)},
bu:function(a,b){return a.linkProgram(b)},
bB:function(a,b,c){return a.pixelStorei(b,c)},
aC:function(a,b,c){return a.shaderSource(b,c)},
aE:function(a,b,c,d){return a.stencilFunc(b,c,d)},
as:function(a,b,c,d,e,f,g,h,i,j){this.ak(a,b,c,d,e,f,g)
return},
bE:function(a,b,c,d,e,f,g){return this.as(a,b,c,d,e,f,g,null,null,null)},
ak:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bF:function(a,b,c,d){return a.texParameteri(b,c,d)},
bJ:function(a,b,c){return a.uniform1f(b,c)},
bK:function(a,b,c){return a.uniform1fv(b,c)},
bL:function(a,b,c){return a.uniform1i(b,c)},
bM:function(a,b,c){return a.uniform1iv(b,c)},
bN:function(a,b,c){return a.uniform2fv(b,c)},
bO:function(a,b,c){return a.uniform3fv(b,c)},
bP:function(a,b,c){return a.uniform4fv(b,c)},
bQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bS:function(a,b){return a.useProgram(b)},
bT:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bV:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hk:{"^":"e;",$ishk:1,"%":"WebGLShader"},hw:{"^":"e;",$ishw:1,"%":"WebGLTexture"},hB:{"^":"e;",$ishB:1,"%":"WebGLUniformLocation"},hG:{"^":"e;",$ishG:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",la:{"^":"iG;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.W(this.cA(a,b))},
h:function(a,b,c){H.h(c,"$isK")
throw H.c(P.x("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
cA:function(a,b){return a.item(b)},
$aso:function(){return[[P.K,,,]]},
$isj:1,
$asj:function(){return[[P.K,,,]]},
$isa:1,
$asa:function(){return[[P.K,,,]]},
$asr:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},iF:{"^":"e+o;"},iG:{"^":"iF+r;"}}],["","",,G,{"^":"",
hJ:function(a){var z,y,x,w
z=H.l(a.split("\n"),[P.f])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.i(z,y)
C.a.h(z,y,w+H.d(z[y]))}return C.a.W(z,"\n")},
dg:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bk(a,b)
z.aC(a,y,c)
z.bg(a,y)
x=H.cf(z.az(a,y,35713))
if(x!=null&&!x){w=z.ay(a,y)
P.ay("E:Compilation failed:")
P.ay("E:"+G.hJ(c))
P.ay("E:Failure:")
P.ay(C.i.F("E:",w))
throw H.c(w)}return y},
cQ:function(a,b){var z,y,x
H.v(a,"$isa",[T.n],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.h(b,z,J.bv(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.h(b,z+1,J.bU(a[y]))
z+=2
if(y>=a.length)return H.i(a,y)
x=J.cw(a[y])
if(z>=b.length)return H.i(b,z)
b[z]=x}return b},
fh:function(a,b){var z,y
H.v(a,"$isa",[T.a1],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.h(b,z,J.bv(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.h(b,z+1,J.bU(a[y]))}return b},
fi:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.aB],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.h(b,z,J.bv(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.h(b,z+1,J.bU(a[y]))
x=z+2
if(y>=a.length)return H.i(a,y)
w=J.cw(a[y])
v=b.length
if(x>=v)return H.i(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.i(a,y)
w=J.ev(a[y])
if(z>=v)return H.i(b,z)
b[z]=w}return b},
fg:function(a,b){var z,y
H.v(a,"$isa",[[P.a,P.B]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.b9(a[y],0))
if(y>=a.length)return H.i(a,y)
C.n.h(b,z+1,J.b9(a[y],1))
if(y>=a.length)return H.i(a,y)
C.n.h(b,z+2,J.b9(a[y],2))
if(y>=a.length)return H.i(a,y)
C.n.h(b,z+3,J.b9(a[y],3))}return b},
ic:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ah(z,[H.q(z,0)]),y=y.gC(y),x=b.x,w=[[P.a,P.B]],v=[P.a9],u=[T.aB],t=[T.n],s=[T.a1];y.u();){r=y.d
if(!x.a4(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.dH>0)H.bP("I: "+r)
continue}q=z.i(0,r)
switch($.a2().i(0,r).a){case"vec2":b.T(r,G.fh(H.bs(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.T(r,G.cQ(H.bs(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.T(r,G.fi(H.bs(q,"$isa",u,"$asa"),null),4)
break
case"float":b.T(r,new Float32Array(H.bG(H.bs(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.T(r,G.fg(H.bs(q,"$isa",w,"$asa"),null),4)
break}}},
aP:{"^":"b;"},
aW:{"^":"aP;d,a,b,c",
aL:function(){return this.d},
j:function(a){var z,y,x,w
z=H.l(["{"+new H.db(H.jn(this)).j(0)+"}["+this.a+"]"],[P.f])
for(y=this.d,x=new H.ah(y,[H.q(y,0)]),x=x.gC(x);x.u();){w=x.d
C.a.l(z,H.d(w)+": "+H.d(y.i(0,w)))}return C.a.W(z,"\n")}},
eS:{"^":"d2;"},
eV:{"^":"b;0a,b",
bt:function(a,b,c){J.es(this.a,b)
if(c>0)J.eJ(this.a,b,c)},
bU:function(a,b,c,d,e,f,g,h){J.bQ(this.a,34962,b)
J.eK(this.a,c,d,e,!1,g,h)}},
fj:{"^":"b;a,b,c,d,e"},
ae:{"^":"b;al:a>,b,c",p:{
H:function(a,b,c){return new G.ae(a,b,c)}}},
fe:{"^":"b;"},
fl:{"^":"b;a,b,c,d,e",
aJ:function(a){switch($.a2().i(0,a).a){case"vec2":this.e.h(0,a,H.l([],[T.a1]))
break
case"vec3":this.e.h(0,a,H.l([],[T.n]))
break
case"vec4":this.e.h(0,a,H.l([],[T.aB]))
break
case"float":this.e.h(0,a,H.l([],[P.a9]))
break
case"uvec4":this.e.h(0,a,H.l([],[[P.a,P.B]]))
break}},
c7:function(a){var z,y,x,w,v
H.v(a,"$isa",[T.n],"$asa")
z=this.d
y=z.length
C.a.l(this.b,new G.ae(y,y+1,y+2))
for(x=0;x<3;++x){w=a[x]
v=new T.n(new Float32Array(3))
v.A(w)
C.a.l(z,v)}},
c5:function(a,b){var z,y,x,w,v,u
z=[T.a1]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<3;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.a1(v))}},
c6:function(a,b){var z,y,x,w,v
z=[T.n]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<3;++x){w=b[x]
v=new T.n(new Float32Array(3))
v.A(w)
z.l(y,v)}},
cc:function(){var z,y,x,w,v,u,t
z=this.b
y=new Array(z.length*3)
y.fixed$length=Array
x=H.l(y,[P.B])
for(y=z.length,w=0,v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
C.a.h(x,w,u.a)
C.a.h(x,w+1,u.b)
C.a.h(x,w+2,u.c)
w+=3}for(z=this.c,v=0;!1;++v){if(v>=0)return H.i(z,v)
t=z[v]
C.a.h(x,w,t.gal(t))
C.a.h(x,w+1,t.gdf(t))
C.a.h(x,w+2,t.gcO(t))
C.a.h(x,w+3,t.gal(t))
C.a.h(x,w+4,t.gcO(t))
C.a.h(x,w+5,t.gdg(t))
w+=6}return x},
j:function(a){var z,y,x,w,v
z=H.l(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"],[P.f])
for(y=this.e,x=new H.ah(y,[H.q(y,0)]),x=x.gC(x);x.u();){w=x.d
v=$.a2().i(0,w).a
C.a.l(z,H.d(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.W(z," ")}},
d9:{"^":"b;a,b,c"},
d7:{"^":"b;a,b,c",p:{
d8:function(a,b,c){return new G.d7(a,b,c)}}},
cW:{"^":"aW;d,a,b,c",p:{
c5:function(a){var z=P.Z(P.f,P.b)
z.h(0,"cDepthTest",!0)
z.h(0,"cDepthWrite",!0)
z.h(0,"cBlendEquation",$.dR())
z.h(0,"cStencilFunc",$.co())
return new G.cW(z,a,!1,!0)}}},
fK:{"^":"aP;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sad:function(a){this.cx=H.v(a,"$isa",[P.B],"$asa")},
aI:function(a,b,c){var z,y
C.i.a7(a,0)
H.h(b,"$isa8")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.bQ(z.a,34962,y)
J.ct(z.a,34962,b,35048)},
cd:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
T:function(a,b,c){var z,y,x,w,v
z=J.cq(a,0)===105
if(z&&this.z===0)this.z=C.e.c4(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.bS(x.a))
this.aI(a,b,c)
w=$.a2().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bt(x.a,this.e)
x.bt(0,v,z?1:0)
x.bU(0,y.i(0,a),v,w.aK(),5126,!1,0,0)},
aH:function(a){var z,y,x,w
z=this.r
y=this.d
z.h(0,"aPosition",J.bS(y.a))
this.ch=a
this.aI("aPosition",a,3)
x=$.a2().i(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.i(0,"aPosition")
J.bt(y.a,this.e)
y.bt(0,w,0)
y.bU(0,z.i(0,"aPosition"),w,x.aK(),5126,!1,0,0)},
j:function(a){var z,y,x,w
z=this.cx
y=H.l(["Faces:"+(z==null?0:z.length)],[P.f])
for(z=this.cy,x=new H.ah(z,[H.q(z,0)]),x=x.gC(x);x.u();){w=x.d
C.a.l(y,H.d(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.W(y,"  ")},
p:{
cX:function(a,b,c,d){var z=P.f
return new G.fK(b,J.em(b.a),c,P.Z(z,P.b),d,0,-1,P.Z(z,P.a8),"meshdata:"+a,!1,!0)}}},
fZ:{"^":"aW;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
c8:function(a,b){var z
if(typeof a!=="number")return a.dd()
if(typeof b!=="number")return H.ax(b)
z=a/b
if(this.z===z)return
this.z=z
this.aM()},
aM:function(){var z,y,x,w,v,u
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
aL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.n(new Float32Array(3))
u.P(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.A(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.A(t)
x=!!y.$isaB
q=x?t.gbW(t):1
if(!!y.$isn){p=t.gS(t)
s=t.gN(t)
r=t.ga5(t)
t=p}else if(x){p=t.gS(t)
s=t.gN(t)
r=t.ga5(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.ax(t)
x=z[4]
if(typeof s!=="number")return H.ax(s)
w=z[8]
if(typeof r!=="number")return H.ax(r)
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
c.A(this.db)
c.bv(0,u)
v.h(0,"uPerspectiveViewMatrix",c)
return v}},
k3:{"^":"b;"},
he:{"^":"aP;d,e,f,r,x,y,z,Q,0ch,a,b,c",
ci:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.h(0,t,J.cx(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.h(0,t,J.cx(w.a,v,t))}},
ck:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.l([],[P.f])
x=H.l([],[P.f])
for(y=new H.ah(y,[H.q(y,0)]),y=y.gC(y);y.u();){w=y.d
if(!z.a4(0,w))C.a.l(x,w)}for(z=this.x,z=P.dk(z,z.r,H.q(z,0)),y=this.Q;z.u();){w=z.d
if(!y.H(0,w))C.a.l(x,w)}return x},
cl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(b,"$isK",[P.f,P.b],"$asK")
z=Date.now()
for(y=new H.ah(b,[H.q(b,0)]),y=y.gC(y),x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cq(t,0)){case 117:if(w.a4(0,t)){s=b.i(0,t)
if(v.a4(0,t))H.bP("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.h(0,t,a)
r=$.a2().i(0,t)
if(r==null)H.ab("unknown "+t)
q=w.i(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.M(s)
J.bV(x.a,q,s)}else if(!!J.A(s).$isfr)J.eH(x.a,q,s)
break
case"float":if(r.c===0){H.dF(s)
J.eF(x.a,q,s)}else if(!!J.A(s).$isa8)J.eG(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.aa(s,"$isL").a
J.cD(x.a,q,!1,t)}else if(!!J.A(s).$isa8)J.cD(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.aa(s,"$isaj").a
J.cC(x.a,q,!1,t)}else if(!!J.A(s).$isa8)J.cC(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cB(p,q,H.aa(s,"$isaB").a)
else J.cB(p,q,H.h(s,"$isa8"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cA(p,q,H.aa(s,"$isn").a)
else J.cA(p,q,H.h(s,"$isa8"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cz(p,q,H.aa(s,"$isa1").a)
else J.cz(p,q,H.h(s,"$isa8"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.ax(t)
J.cr(x.a,33984+t)
t=H.aa(s,"$isc9").b
J.ba(x.a,3553,t)
t=this.ch
J.bV(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.F()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.ax(t)
J.cr(x.a,33984+t)
t=H.aa(s,"$isc9").b
J.ba(x.a,34067,t)
t=this.ch
J.bV(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.F()
this.ch=t+1
break
default:H.bP("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.i(0,t)
switch(t){case"cDepthTest":t=J.aH(s,!0)
p=x.a
if(t)J.bu(p,2929)
else J.bT(p,2929)
break
case"cStencilFunc":H.aa(s,"$isd9")
t=s.a
p=x.a
if(t===1281)J.bT(p,2960)
else{J.bu(p,2960)
p=s.b
o=s.c
J.eC(x.a,t,p,o)}break
case"cDepthWrite":H.cf(s)
J.en(x.a,s)
break
case"cBlendEquation":H.aa(s,"$isd7")
t=s.a
p=x.a
if(t===1281)J.bT(p,3042)
else{J.bu(p,3042)
p=s.b
o=s.c
J.eg(x.a,p,o)
J.ef(x.a,t)}break}++u
break}}n=P.f9(0,0,0,Date.now()-new P.by(z,!1).a,0,0)
""+u
n.j(0)},
cb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[G.aW],"$asa")
Date.now()
z=this.d
J.eI(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aZ()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.N)(b),++x){w=b[x]
this.cl(w.a,w.aL())}y=this.Q
y.V(0)
for(v=a.cy,v=new H.ah(v,[H.q(v,0)]),v=v.gC(v);v.u();)y.l(0,v.d)
u=this.ck()
if(u.length!==0)P.ay("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
J.bt(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cd()
s=a.Q
r=a.z
if(t)J.ed(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.er(q,y,v,s,0,r)
else J.eq(q,y,v,s,0)}else{s=z.a
if(r>1)J.ep(s,y,0,v,r)
else J.eo(s,y,0,v)}if(t)J.et(z.a)},
p:{
d1:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.f
y=P.ai(null,null,null,z)
x=c.b
w=d.b
v=H.v(c.f,"$isa",[z],"$asa")
u=J.ek(b.a)
t=G.dg(b.a,35633,x)
J.cs(b.a,u,t)
s=G.dg(b.a,35632,w)
J.cs(b.a,u,s)
if(v.length>0)J.eE(b.a,u,v,35980)
J.eA(b.a,u)
if(!H.cf(J.ez(b.a,u,35714)))H.ab(J.ey(b.a,u))
z=new G.he(b,c,d,u,P.fF(c.c,z),P.Z(z,P.b),P.Z(z,z),y,a,!1,!0)
z.ci(a,b,c,d)
return z}}},
z:{"^":"b;a,b,c",
aK:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hl:{"^":"b;a,0b,c,d,e,f,r,x",
aG:function(a){var z,y,x,w
H.v(a,"$isa",[P.f],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.h(0,w,this.r);++this.r}C.a.aD(z)},
Z:function(a){var z,y,x
H.v(a,"$isa",[P.f],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.aD(y)},
cj:function(a,b){this.b=this.cm(!0,H.v(a,"$isa",[P.f],"$asa"),b)},
a_:function(a){return this.cj(a,null)},
cm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.f]
H.v(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.l(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){t=y[u]
s=$.a2().i(0,t)
C.a.l(w,"layout (location="+H.d(v.i(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.i(z,u)
q=z[u]
s=$.a2().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a2().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a2().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.am(w,b)
C.a.l(w,"}")
return C.a.W(w,"\n")},
p:{
bC:function(a){var z,y
z=P.f
y=[z]
return new G.hl(a,H.l([],y),H.l([],y),H.l([],y),H.l([],y),0,P.Z(z,P.B))}}},
d2:{"^":"aP;",
Y:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
hx:{"^":"b;a,b,c,d,e,f,r"},
c9:{"^":"b;",
j:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fp:{"^":"c9;f,a,b,c,d,e"}}],["","",,R,{"^":"",
hF:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.e6().d3()
if(v>=w)return H.i(x,v)
x[v]=(u-0.5)*c}y=G.cX(z,a.d,0,a.e.x)
y.aH(x)
return y},
hd:{"^":"hc;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
d6:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ay("size change "+H.d(y)+" "+H.d(x))
this.dx.c8(y,x)
this.z=y
this.Q=x},"$1","gd5",4,0,18]}}],["","",,A,{"^":"",
dG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(e,"$isa",[G.aW],"$asa")
z=b.dx
z.A(c)
y=b.d
z.bv(0,y)
x=b.cx
H.d(b)
w=C.a.gd1(e)
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
v.cR(new T.aj(u))
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
w.h(0,"uTransformationMatrix",y)
w.h(0,"uModelMatrix",z)
w.h(0,"uNormalMatrix",v)
C.a.l(e,b.ch)
a.cb(x,e,d)
if(0>=e.length)return H.i(e,-1)
e.pop()
for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.N)(y),++r)A.dG(a,y[r],z,d,e)},
aQ:{"^":"d2;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
j:function(a){return"NODE["+this.a+"]"}},
c7:{"^":"aP;d,e,f,a,b,c"},
hc:{"^":"aP;",
cg:function(a,b,c){if(this.d==null)this.d=new G.fj(this.e,null,null,null,null)},
ca:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.ee(v.a,36160,z)
J.eL(v.a,this.x,this.y,x,w)
if(y!==0)J.eh(v.a,y)
for(z=this.f,y=z.length,x=P.f,w=P.b,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.aW(P.Z(x,w),"transforms",!1,!0))
r=new T.L(new Float32Array(16))
r.B()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.N)(v),++o)A.dG(p,v[o],r,a,s)
if(0>=s.length)return H.i(s,-1)
s.pop()}},
c9:function(){return this.ca(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fo:function(a,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[G.ae]
y=H.l([],z)
x=[T.n]
w=H.l([],x)
C.a.am(y,$.dV())
C.a.am(w,$.dW())
for(v=0;v<a;++v,y=u){u=H.l([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.N)(y),++s){r=y[s]
q=J.cu(r)
if(q>=w.length)return H.i(w,q)
q=w[q]
p=new T.n(new Float32Array(3))
p.A(q)
q=r.b
if(q>=w.length)return H.i(w,q)
p.l(0,w[q])
p.G(0,0.5)
p.v(0)
if(q>=w.length)return H.i(w,q)
o=w[q]
n=new T.n(new Float32Array(3))
n.A(o)
o=r.c
if(o>=w.length)return H.i(w,o)
n.l(0,w[o])
n.G(0,0.5)
n.v(0)
if(o>=w.length)return H.i(w,o)
m=w[o]
l=new T.n(new Float32Array(3))
l.A(m)
m=r.a
if(m>=w.length)return H.i(w,m)
l.l(0,w[m])
l.G(0,0.5)
l.v(0)
k=w.length
C.a.l(w,p)
j=w.length
C.a.l(w,n)
i=w.length
C.a.l(w,l)
C.a.l(u,new G.ae(m,k,i))
C.a.l(u,new G.ae(q,j,k))
C.a.l(u,new G.ae(o,i,j))
C.a.l(u,new G.ae(k,j,i))}}h=new G.fl(!1,H.l([],z),H.l([],[G.fe]),H.l([],x),P.Z(P.f,[P.a,,]))
h.aJ("aTexUV")
h.aJ("aNormal")
for(z=y.length,t=[T.a1],s=0;s<y.length;y.length===z||(0,H.N)(y),++s){r=y[s]
q=J.cu(r)
o=w.length
if(q>=o)return H.i(w,q)
g=w[q]
q=r.b
if(q>=o)return H.i(w,q)
f=w[q]
q=r.c
if(q>=o)return H.i(w,q)
e=w[q]
q=g.a
o=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
m=new Float32Array(2)
m[0]=0.5*(1+o*0.3183098861837907)
m[1]=q*0.3183098861837907
q=f.a
o=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
d=new Float32Array(2)
d[0]=0.5*(1+o*0.3183098861837907)
d[1]=q*0.3183098861837907
q=e.a
o=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
c=new Float32Array(2)
c[0]=0.5*(1+o*0.3183098861837907)
c[1]=q*0.3183098861837907
h.c6("aNormal",H.l([g,f,e],x))
q=new T.n(new Float32Array(3))
q.A(g)
q.G(0,a0)
o=new T.n(new Float32Array(3))
o.A(f)
o.G(0,a0)
b=new T.n(new Float32Array(3))
b.A(e)
b.G(0,a0)
h.c7(H.l([q,o,b],x))
h.c5("aTexUV",H.l([new T.a1(m),new T.a1(d),new T.a1(c)],t))}return h}}],["","",,D,{"^":"",fz:{"^":"b;a,b,c",
ce:function(a){var z,y
a=document
z=W.aN
y={func:1,ret:-1,args:[z]}
W.au(a,"keydown",H.k(new D.fB(this),y),!1,z)
W.au(a,"keyup",H.k(new D.fC(this),y),!1,z)},
p:{
fA:function(a){var z=P.B
z=new D.fz(P.ai(null,null,null,z),P.ai(null,null,null,z),P.ai(null,null,null,z))
z.ce(a)
return z}}},fB:{"^":"p:9;a",
$1:function(a){var z
H.h(a,"$isaN")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},fC:{"^":"p:9;a",
$1:function(a){var z
H.h(a,"$isaN")
z=this.a
z.a.bC(0,a.which)
z.c.l(0,a.which)}},fN:{"^":"b;a,b,c,d,e,f,r,x",
cf:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gby(a)
x=H.q(y,0)
W.au(y.a,y.b,H.k(new D.fP(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbx(a)
y=H.q(x,0)
W.au(x.a,x.b,H.k(new D.fQ(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbz(a)
x=H.q(y,0)
W.au(y.a,y.b,H.k(new D.fR(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbA(a)
x=H.q(z,0)
W.au(z.a,z.b,H.k(new D.fS(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
fO:function(a){var z=P.B
z=new D.fN(P.ai(null,null,null,z),P.ai(null,null,null,z),P.ai(null,null,null,z),0,0,0,0,0)
z.cf(a)
return z}}},fP:{"^":"p:3;a",
$1:function(a){var z,y
H.h(a,"$isP")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.M(y.gbw(a).a)
z.x=H.M(y.gbw(a).b)
z.d=a.movementX
z.e=a.movementY}},fQ:{"^":"p:3;a",
$1:function(a){var z
H.h(a,"$isP")
a.preventDefault()
P.ay("BUTTON "+H.d(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},fR:{"^":"p:3;a",
$1:function(a){var z
H.h(a,"$isP")
a.preventDefault()
z=this.a
z.a.bC(0,a.button)
z.c.l(0,a.button)}},fS:{"^":"p:19;a",
$1:function(a){H.h(a,"$isaC")
a.preventDefault()
this.a.f=H.M(C.a0.gcT(a))}},fX:{"^":"eS;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bp:function(a){var z,y
z=C.f.cY(H.v(a,"$isj",[P.b],"$asj"),0,new A.jp(),P.B)
if(typeof z!=="number")return H.ax(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jp:{"^":"p:20;",
$2:function(a,b){var z,y
H.M(a)
z=J.ac(b)
if(typeof a!=="number")return a.F()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aj:{"^":"b;a",
A:function(a){var z,y
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
j:function(a){return"[0] "+this.K(0).j(0)+"\n[1] "+this.K(1).j(0)+"\n[2] "+this.K(2).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.i(z,b)
return z[b]},
w:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aj){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gt:function(a){return A.bp(this.a)},
K:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.i(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.i(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.i(y,x)
z[2]=y[x]
return new T.n(z)},
cR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.A(a)
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
return m}},L:{"^":"b;a",
A:function(a){var z,y
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
j:function(a){return"[0] "+this.K(0).j(0)+"\n[1] "+this.K(1).j(0)+"\n[2] "+this.K(2).j(0)+"\n[3] "+this.K(3).j(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.i(z,b)
return z[b]},
w:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.L){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gt:function(a){return A.bp(this.a)},
K:function(a){var z,y,x
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
return new T.aB(z)},
bZ:function(a,b,c,d){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b
z[4]=z[4]*b
z[5]=z[5]*b
z[6]=z[6]*b
z[7]=z[7]*b
z[8]=z[8]*b
z[9]=z[9]*b
z[10]=z[10]*b
z[11]=z[11]*b
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]},
G:function(a,b){return this.bZ(a,b,null,null)},
B:function(){var z=this.a
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
bv:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},a1:{"^":"b;a",
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
w:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gt:function(a){return A.bp(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.i(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gS:function(a){return this.a[0]},
gN:function(a){return this.a[1]}},n:{"^":"b;a",
P:function(a,b,c){var z=this.a
C.f.h(z,0,a)
C.f.h(z,1,b)
C.f.h(z,2,c)},
A:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
w:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.n){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gt:function(a){return A.bp(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.i(z,b)
return z[b]},
gk:function(a){return Math.sqrt(this.gaq())},
gaq:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
v:function(a){var z,y,x
z=Math.sqrt(this.gaq())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
an:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bm:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.n(new Float32Array(3))
z.P(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
l:function(a,b){var z,y
z=H.h(b,"$isn").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
G:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
gS:function(a){return this.a[0]},
gN:function(a){return this.a[1]},
ga5:function(a){return this.a[2]},
p:{
T:function(a,b,c){var z=new T.n(new Float32Array(3))
z.P(a,b,c)
return z}}},aB:{"^":"b;a",
j:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
w:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aB){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gt:function(a){return A.bp(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.i(z,b)
return z[b]},
gk:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gS:function(a){return this.a[0]},
gN:function(a){return this.a[1]},
ga5:function(a){return this.a[2]},
gbW:function(a){return this.a[3]}}}],["","",,V,{"^":"",
dL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
z={}
y=document
x=H.h(C.C.d4(y,"#webgl-canvas"),"$isbY")
w=new G.eV(x)
v=P.f
u=P.b
t=(x&&C.t).at(x,"webgl2",P.cU(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],v,u))
w.a=t
if(t==null)H.ab(P.cP('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.d(J.ew(t))
if($.dH>0)P.ay("I: "+s)
J.ei(t,0,0,0,1)
J.bu(t,2929)
t=new Float32Array(3)
s=D.fA(null)
r=D.fO(x)
q=new T.L(new Float32Array(16))
q.B()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new D.fX(15,0,0,0,new T.n(t),-0.02,s,r,q,new T.n(p),new T.n(o),new T.n(n),new T.n(new Float32Array(3)),"camera:orbit",!1,!0)
t=new T.L(new Float32Array(16))
t.B()
s=new T.L(new Float32Array(16))
s.B()
l=new G.fZ(m,50,1,0.1,1000,t,s,new T.L(new Float32Array(16)),P.Z(v,u),"perspective",!1,!0)
l.aM()
t=G.d1("solid",w,$.ea(),$.e9())
s=[G.aW]
r=H.l([l],s)
q=[A.aQ]
p=H.l([],q)
k=B.fo(4,1,!0)
j=G.cX("icosahedron-4",t.d,4,t.e.x)
j.aH(G.cQ(k.d,null))
o=H.v(k.cc(),"$isa",[P.B],"$asa")
n=j.d
j.y=J.bS(n.a)
i=j.ch.length
if(i<768){j.sad(new Uint8Array(H.bG(o)))
j.Q=5121}else if(i<196608){j.sad(new Uint16Array(H.bG(o)))
j.Q=5123}else{j.sad(new Uint32Array(H.bG(o)))
j.Q=5125}J.bt(n.a,j.e)
o=j.y
i=j.cx
J.bQ(n.a,34963,o)
J.ct(n.a,34963,i,35048)
G.ic(k,j)
h=G.c5("head")
o=new T.n(new Float32Array(3))
o.P(0.94,0.72,0.63)
h.d.h(0,"uColor",o)
o=H.l([],q)
n=new Float32Array(9)
i=new T.L(new Float32Array(16))
i.B()
g=new T.L(new Float32Array(16))
g.B()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
b=G.c5("eye")
b.d.h(0,"uColor",$.dS())
a=H.l([],q)
a0=new Float32Array(9)
a1=new T.L(new Float32Array(16))
a1.B()
a2=new T.L(new Float32Array(16))
a2.B()
a3=new Float32Array(3)
a4=new Float32Array(3)
a5=new Float32Array(3)
a6=new A.aQ(b,j,a,new T.aj(a0),a1,a2,new T.n(a3),new T.n(a4),new T.n(a5),new T.n(new Float32Array(3)),"leftEye",!1,!0)
a6.Y(-0.2,0.4,-0.8)
a2.G(0,0.2)
C.a.l(o,a6)
a=H.l([],q)
a0=new Float32Array(9)
a1=new T.L(new Float32Array(16))
a1.B()
a2=new T.L(new Float32Array(16))
a2.B()
a3=new Float32Array(3)
a4=new Float32Array(3)
a5=new Float32Array(3)
a7=new A.aQ(b,j,a,new T.aj(a0),a1,a2,new T.n(a3),new T.n(a4),new T.n(a5),new T.n(new Float32Array(3)),"rightEye",!1,!0)
a2.G(0,0.2)
a7.Y(0.2,0.4,-0.8)
C.a.l(o,a7)
a8=G.c5("nose")
a=new T.n(new Float32Array(3))
a.P(0.9,0.7,0.6)
a8.d.h(0,"uColor",a)
a=H.l([],q)
a0=new Float32Array(9)
a1=new T.L(new Float32Array(16))
a1.B()
a2=new T.L(new Float32Array(16))
a2.B()
a3=new Float32Array(3)
a4=new Float32Array(3)
a5=new Float32Array(3)
a9=new A.aQ(a8,j,a,new T.aj(a0),a1,a2,new T.n(a3),new T.n(a4),new T.n(a5),new T.n(new Float32Array(3)),"nose",!1,!0)
a2.G(0,0.3)
a9.Y(0,0,-0.9)
C.a.l(o,a9)
C.a.l(p,new A.aQ(h,j,o,new T.aj(n),i,g,new T.n(f),new T.n(e),new T.n(d),new T.n(c),"head",!1,!0))
o=H.l([],[A.c7])
b0=new R.hd(x,l,null,w,o,17664,0,0,0,0,"main",!1,!0)
b0.cg("main",w,null)
b0.d6(null)
n=W.X
W.au(window,"resize",H.k(b0.gd5(),{func:1,ret:-1,args:[n]}),!1,n)
C.a.l(o,new A.c7(t,r,p,"objects",!1,!0))
p=G.d1("stars",w,$.e8(),$.e7())
s=H.l([l],s)
r=H.l([],q)
t=p.d
n=$.dQ()
u=P.Z(v,u)
u.h(0,"cDepthTest",!0)
u.h(0,"cDepthWrite",!1)
u.h(0,"cBlendEquation",n)
u.h(0,"cStencilFunc",$.co())
b1=y.createElement("canvas")
b1.width=64
b1.height=64
b2=H.h(C.t.bY(b1,"2d"),"$isbZ")
b3=(b2&&C.p).bj(b2,32,32,1,32,32,22);(b3&&C.m).a3(b3,0,"gray")
C.m.a3(b3,1,"black")
b2.fillStyle=b3
C.p.cX(b2,0,0,64,64)
b3=C.p.bj(b2,32,32,1,32,32,6);(b3&&C.m).a3(b3,0,"white")
C.m.a3(b3,1,"gray")
b2.globalAlpha=0.9
b2.fillStyle=b3
b2.arc(32,32,4,0,6.283185307179586,!1)
b2.fill()
y=J.el(t.a)
J.ba(t.a,3553,y)
J.eB(t.a,37440,1)
J.ba(t.a,3553,y)
J.eD(t.a,3553,0,6408,6408,5121,b1)
J.cy(t.a,3553,10240,9729)
J.cy(t.a,3553,10241,9729)
J.ex(t.a)
J.ba(t.a,3553,null)
u.h(0,"uTexture",new G.fp(b1,"Utils::Particles",y,3553,t,new G.hx(!1,!1,!1,!0,1,9729,9729)))
u.h(0,"uPointSize",1000)
j=R.hF(p,2000,100)
y=H.l([],q)
v=new Float32Array(9)
t=new T.L(new Float32Array(16))
t.B()
q=new T.L(new Float32Array(16))
q.B()
n=new Float32Array(3)
i=new Float32Array(3)
g=new Float32Array(3)
C.a.l(r,new A.aQ(new G.cW(u,"stars",!1,!0),j,y,new T.aj(v),t,q,new T.n(n),new T.n(i),new T.n(g),new T.n(new Float32Array(3)),j.a,!1,!0))
C.a.l(o,new A.c7(p,s,r,"stars",!1,!0))
z.a=0
new V.jA(z,m,b0).$1(0)},
jA:{"^":"p:21;a,b,c",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
H.cl(b1)
if(typeof b1!=="number")return b1.aF()
this.a.a=b1+0
z=this.b
z.go+=0.001
y=z.r1
x=y.a
if(x.H(0,0)||x.H(0,1)){x=z.go
w=y.d
if(typeof w!=="number")return w.aB()
z.go=x+w*0.01
w=z.id
x=y.e
if(typeof x!=="number")return x.aB()
z.id=w+x*0.01}x=z.k4
w=x.a
if(w.H(0,37))z.go+=0.03
else if(w.H(0,39))z.go-=0.03
if(w.H(0,38))z.id+=0.03
else if(w.H(0,40))z.id-=0.03
if(w.H(0,33))z.fy*=0.99
else if(w.H(0,34))z.fy*=1.01
if(w.H(0,32)){z.go=0
z.id=0}w=y.f
if(typeof w!=="number")return w.aB()
w=z.fy-w*z.k3
if(w>0)z.fy=w
w=C.q.cP(z.id,-1.4707963267948965,1.4707963267948965)
z.id=w
v=z.fy
u=z.go
t=v*Math.cos(w)
z.Y(t*Math.cos(u),v*Math.sin(w),t*Math.sin(u))
u=z.d.a
w=z.k2.a
u[12]=u[12]+w[0]
u[13]=u[13]+w[1]
u[14]=u[14]+w[2]
s=u[12]
r=u[13]
q=u[14]
p=new T.n(new Float32Array(3))
p.P(0,1,0)
v=z.e
o=v.a
o[0]=u[12]
o[1]=u[13]
o[2]=u[14]
o=new Float32Array(3)
n=new T.n(o)
n.A(v)
o[0]=o[0]-w[0]
o[1]=o[1]-w[1]
o[2]=o[2]-w[2]
n.v(0)
m=p.bm(n)
m.v(0)
l=n.bm(m)
l.v(0)
w=m.an(v)
k=l.an(v)
v=n.an(v)
j=m.a
i=j[0]
h=l.a
g=h[0]
f=o[0]
e=j[1]
d=h[1]
c=o[1]
j=j[2]
h=h[2]
o=o[2]
u[15]=1
u[14]=-v
u[13]=-k
u[12]=-w
u[11]=0
u[10]=o
u[9]=h
u[8]=j
u[7]=0
u[6]=c
u[5]=d
u[4]=e
u[3]=0
u[2]=f
u[1]=g
u[0]=i
u[12]=s
u[13]=r
u[14]=q
i=z.f
g=i.a
g[0]=u[2]
g[1]=u[6]
g[2]=u[10]
z=-z.k1
b=Math.sqrt(i.gaq())
s=g[0]/b
r=g[1]/b
q=g[2]/b
a=Math.cos(z)
a0=Math.sin(z)
a1=1-a
a2=s*s*a1+a
z=q*a0
a3=s*r*a1-z
g=r*a0
a4=s*q*a1+g
a5=r*s*a1+z
a6=r*r*a1+a
z=s*a0
a7=r*q*a1-z
a8=q*s*a1-g
a9=q*r*a1+z
b0=q*q*a1+a
z=u[0]
g=u[4]
i=u[8]
f=u[1]
e=u[5]
d=u[9]
c=u[2]
j=u[6]
h=u[10]
o=u[3]
w=u[7]
k=u[11]
u[0]=z*a2+g*a5+i*a8
u[1]=f*a2+e*a5+d*a8
u[2]=c*a2+j*a5+h*a8
u[3]=o*a2+w*a5+k*a8
u[4]=z*a3+g*a6+i*a9
u[5]=f*a3+e*a6+d*a9
u[6]=c*a3+j*a6+h*a9
u[7]=o*a3+w*a6+k*a9
u[8]=z*a4+g*a7+i*b0
u[9]=f*a4+e*a7+d*b0
u[10]=c*a4+j*a7+h*b0
u[11]=o*a4+w*a7+k*b0
x.c.V(0)
x.b.V(0)
y.e=0
y.d=0
y.f=0
y.c.V(0)
y.b.V(0)
this.c.c9()
C.a1.gcJ(window).bG(this,-1)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cR.prototype
return J.fw.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.fx.prototype
if(typeof a=="boolean")return J.fv.prototype
if(a.constructor==Array)return J.bf.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.b)return a
return J.bM(a)}
J.b4=function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.bf.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.b)return a
return J.bM(a)}
J.jj=function(a){if(a==null)return a
if(a.constructor==Array)return J.bf.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.b)return a
return J.bM(a)}
J.jk=function(a){if(typeof a=="number")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aX.prototype
return a}
J.jl=function(a){if(typeof a=="number")return J.bg.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aX.prototype
return a}
J.jm=function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aX.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.b)return a
return J.bM(a)}
J.bn=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.aX.prototype
return a}
J.aH=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).w(a,b)}
J.a3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jk(a).O(a,b)}
J.b9=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jx(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b4(a).i(a,b)}
J.cq=function(a,b){return J.jm(a).a7(a,b)}
J.cr=function(a,b){return J.m(a).b5(a,b)}
J.ec=function(a,b,c,d){return J.m(a).cI(a,b,c,d)}
J.cs=function(a,b,c){return J.m(a).b6(a,b,c)}
J.ed=function(a,b){return J.m(a).cK(a,b)}
J.bQ=function(a,b,c){return J.m(a).b7(a,b,c)}
J.ee=function(a,b,c){return J.m(a).b9(a,b,c)}
J.ba=function(a,b,c){return J.m(a).ba(a,b,c)}
J.bt=function(a,b){return J.m(a).cN(a,b)}
J.ef=function(a,b){return J.m(a).bb(a,b)}
J.eg=function(a,b,c){return J.m(a).bc(a,b,c)}
J.ct=function(a,b,c,d){return J.m(a).bd(a,b,c,d)}
J.eh=function(a,b){return J.m(a).be(a,b)}
J.ei=function(a,b,c,d,e){return J.m(a).bf(a,b,c,d,e)}
J.ej=function(a,b){return J.jl(a).J(a,b)}
J.bR=function(a,b,c){return J.b4(a).cQ(a,b,c)}
J.bS=function(a){return J.m(a).bh(a)}
J.ek=function(a){return J.m(a).bi(a)}
J.el=function(a){return J.m(a).bl(a)}
J.em=function(a){return J.m(a).cS(a)}
J.en=function(a,b){return J.m(a).bn(a,b)}
J.bT=function(a,b){return J.m(a).bo(a,b)}
J.eo=function(a,b,c,d){return J.m(a).bp(a,b,c,d)}
J.ep=function(a,b,c,d,e){return J.m(a).cU(a,b,c,d,e)}
J.eq=function(a,b,c,d,e){return J.m(a).bq(a,b,c,d,e)}
J.er=function(a,b,c,d,e,f){return J.m(a).cV(a,b,c,d,e,f)}
J.bu=function(a,b){return J.m(a).br(a,b)}
J.es=function(a,b){return J.m(a).bs(a,b)}
J.et=function(a){return J.m(a).cW(a)}
J.eu=function(a,b){return J.m(a).D(a,b)}
J.cu=function(a){return J.bn(a).gal(a)}
J.ac=function(a){return J.A(a).gt(a)}
J.cv=function(a){return J.jj(a).gC(a)}
J.bb=function(a){return J.b4(a).gk(a)}
J.ev=function(a){return J.bn(a).gbW(a)}
J.bv=function(a){return J.bn(a).gS(a)}
J.bU=function(a){return J.bn(a).gN(a)}
J.cw=function(a){return J.bn(a).ga5(a)}
J.ew=function(a){return J.m(a).a6(a)}
J.ex=function(a){return J.m(a).au(a)}
J.ey=function(a,b){return J.m(a).av(a,b)}
J.ez=function(a,b,c){return J.m(a).aw(a,b,c)}
J.cx=function(a,b,c){return J.m(a).aA(a,b,c)}
J.eA=function(a,b){return J.m(a).bu(a,b)}
J.eB=function(a,b,c){return J.m(a).bB(a,b,c)}
J.eC=function(a,b,c,d){return J.m(a).aE(a,b,c,d)}
J.eD=function(a,b,c,d,e,f,g){return J.m(a).bE(a,b,c,d,e,f,g)}
J.cy=function(a,b,c,d){return J.m(a).bF(a,b,c,d)}
J.bw=function(a){return J.A(a).j(a)}
J.eE=function(a,b,c,d){return J.m(a).da(a,b,c,d)}
J.eF=function(a,b,c){return J.m(a).bJ(a,b,c)}
J.eG=function(a,b,c){return J.m(a).bK(a,b,c)}
J.bV=function(a,b,c){return J.m(a).bL(a,b,c)}
J.eH=function(a,b,c){return J.m(a).bM(a,b,c)}
J.cz=function(a,b,c){return J.m(a).bN(a,b,c)}
J.cA=function(a,b,c){return J.m(a).bO(a,b,c)}
J.cB=function(a,b,c){return J.m(a).bP(a,b,c)}
J.cC=function(a,b,c,d){return J.m(a).bQ(a,b,c,d)}
J.cD=function(a,b,c,d){return J.m(a).bR(a,b,c,d)}
J.eI=function(a,b){return J.m(a).bS(a,b)}
J.eJ=function(a,b,c){return J.m(a).dc(a,b,c)}
J.eK=function(a,b,c,d,e,f,g){return J.m(a).bT(a,b,c,d,e,f,g)}
J.eL=function(a,b,c,d,e){return J.m(a).bV(a,b,c,d,e)}
var $=I.p
C.t=W.bY.prototype
C.m=W.eT.prototype
C.p=W.bZ.prototype
C.C=W.fn.prototype
C.D=J.e.prototype
C.a=J.bf.prototype
C.e=J.cR.prototype
C.q=J.bg.prototype
C.i=J.bh.prototype
C.K=J.bi.prototype
C.f=H.fT.prototype
C.n=H.fV.prototype
C.w=J.h_.prototype
C.r=J.aX.prototype
C.a0=W.aC.prototype
C.a1=W.hH.prototype
C.B=new P.ih()
C.d=new P.iy()
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=new G.z("vec3","vertex btangents",0)
C.c=new G.z("vec3","",0)
C.M=new G.z("vec4","delta from light",0)
C.o=new G.z("","",0)
C.x=new G.z("vec3","vertex coordinates",0)
C.N=new G.z("vec3","vertex binormals",0)
C.y=new G.z("vec4","for wireframe",0)
C.O=new G.z("vec4","per vertex color",0)
C.P=new G.z("float","for normal maps",0)
C.j=new G.z("mat4","",0)
C.R=new G.z("mat4","",4)
C.Q=new G.z("mat4","",128)
C.b=new G.z("float","",0)
C.S=new G.z("float","",4)
C.T=new G.z("float","depth for shadowmaps",0)
C.h=new G.z("sampler2D","",0)
C.U=new G.z("float","for bump maps",0)
C.V=new G.z("vec2","texture uvs",0)
C.W=new G.z("float","time since program start in sec",0)
C.k=new G.z("vec2","",0)
C.X=new G.z("samplerCube","",0)
C.l=new G.z("vec4","",0)
C.Y=new G.z("vec3","vertex normals",0)
C.Z=new G.z("sampler2DShadow","",0)
C.z=new G.z("vec3","per vertex color",0)
C.A=new G.z("mat3","",0)
C.a_=new G.z("vec3","vertex tangents",0)
$.a4=0
$.aJ=null
$.cF=null
$.cb=!1
$.dJ=null
$.dC=null
$.dO=null
$.bK=null
$.bN=null
$.cj=null
$.aE=null
$.aZ=null
$.b_=null
$.cc=!1
$.G=C.d
$.cM=null
$.cL=null
$.cK=null
$.cJ=null
$.dH=0
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
I.$lazy(y,x,w)}})(["jY","dU",function(){return H.dI("_$dart_dartClosure")},"kD","cn",function(){return H.dI("_$dart_js")},"lm","dX",function(){return H.a5(H.bD({
toString:function(){return"$receiver$"}}))},"ln","dY",function(){return H.a5(H.bD({$method$:null,
toString:function(){return"$receiver$"}}))},"lo","dZ",function(){return H.a5(H.bD(null))},"lp","e_",function(){return H.a5(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ls","e2",function(){return H.a5(H.bD(void 0))},"lt","e3",function(){return H.a5(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"lr","e1",function(){return H.a5(H.da(null))},"lq","e0",function(){return H.a5(function(){try{null.$method$}catch(z){return z.message}}())},"lv","e5",function(){return H.a5(H.da(void 0))},"lu","e4",function(){return H.a5(function(){try{(void 0).$method$}catch(z){return z.message}}())},"lF","cp",function(){return P.hK()},"lR","b8",function(){return[]},"jV","dT",function(){return{}},"lb","co",function(){return new G.d9(1281,0,4294967295)},"jQ","dR",function(){return G.d8(1281,1281,1281)},"jP","dQ",function(){return G.d8(32774,770,769)},"lP","a2",function(){return P.cU(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.z,"aColorAlpha",C.O,"aPosition",C.x,"aTexUV",C.V,"aNormal",C.Y,"aBinormal",C.N,"aCenter",C.y,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a_,"aBitangent",C.L,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.x,"vPositionFromLight",C.M,"vCenter",C.y,"vDepth",C.T,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.Z,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.X,"uAnimationTable",C.h,"uTime",C.W,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Q,"uLightDescs",C.R,"uLightCount",C.b,"uLightTypes",C.S,"uBumpScale",C.U,"uNormalScale",C.P],P.f,G.z)},"lz","e6",function(){return C.B},"jS","dS",function(){return T.T(0,0,1)},"lY","ea",function(){var z,y
z=G.bC("SolidColor")
y=[P.f]
z.aG(H.l(["aPosition"],y))
z.Z(H.l(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.a_(H.l(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"lX","e9",function(){var z,y
z=G.bC("SolidColorF")
y=[P.f]
z.Z(H.l(["uColor"],y))
z.a_(H.l(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"lW","e8",function(){var z,y
z=G.bC("PointSpritesV")
y=[P.f]
z.aG(H.l(["aPosition"],y))
z.Z(H.l(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.a_(H.l(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"lV","e7",function(){var z,y
z=G.bC("PointSpritesF")
y=[P.f]
z.Z(H.l(["uTexture"],y))
z.a_(H.l(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"kt","dV",function(){return H.l([G.H(0,11,5),G.H(0,5,1),G.H(0,1,7),G.H(0,7,10),G.H(0,10,11),G.H(1,5,9),G.H(5,11,4),G.H(11,10,2),G.H(10,7,6),G.H(7,1,8),G.H(3,9,4),G.H(3,4,2),G.H(3,2,6),G.H(3,6,8),G.H(3,8,9),G.H(4,9,5),G.H(2,4,11),G.H(6,2,10),G.H(8,6,7),G.H(9,8,1)],[G.ae])},"lZ","eb",function(){return(1+P.jF(5))/2},"ku","dW",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eb()
y=T.T(-1,z,0)
y.v(0)
x=T.T(1,z,0)
x.v(0)
if(typeof z!=="number")return z.de()
w=T.T(-1,-z,0)
w.v(0)
v=T.T(1,-z,0)
v.v(0)
u=T.T(0,-1,z)
u.v(0)
t=T.T(0,1,z)
t.v(0)
s=T.T(0,-1,-z)
s.v(0)
r=T.T(0,1,-z)
r.v(0)
q=T.T(z,0,-1)
q.v(0)
p=T.T(z,0,1)
p.v(0)
o=T.T(-z,0,-1)
o.v(0)
z=T.T(-z,0,1)
z.v(0)
return H.l([y,x,w,v,u,t,s,r,q,p,o,z],[T.n])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.F,args:[W.P]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.f,args:[P.B]},{func:1,ret:P.F,args:[W.aN]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a_]},{func:1,ret:[P.a6,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.X]},{func:1,ret:-1,args:[W.X]},{func:1,ret:P.F,args:[W.aC]},{func:1,ret:P.B,args:[P.B,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.jH(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(V.dL,[])
else V.dL([])})})()
//# sourceMappingURL=orbit_camera.dart.js.map
