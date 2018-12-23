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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.ca(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aX=function(){}
var dart=[["","",,H,{"^":"",kj:{"^":"b;a"}}],["","",,J,{"^":"",
ce:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bG:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cd==null){H.jf()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.d5("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.ch()]
if(v!=null)return v
v=H.jk(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.ch(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
e:{"^":"b;",
v:function(a,b){return a===b},
gt:function(a){return H.aN(a)},
k:["bZ",function(a){return"Instance of '"+H.aO(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fc:{"^":"e;",
k:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$isc7:1},
cL:{"^":"e;",
v:function(a,b){return null==b},
k:function(a){return"null"},
gt:function(a){return 0},
$isF:1},
bZ:{"^":"e;",
gt:function(a){return 0},
k:["c_",function(a){return String(a)}]},
fI:{"^":"bZ;"},
aQ:{"^":"bZ;"},
bb:{"^":"bZ;",
k:function(a){var z=a[$.dJ()]
if(z==null)return this.c_(a)
return"JavaScript function for "+H.d(J.bn(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbW:1},
b8:{"^":"e;$ti",
l:function(a,b){H.v(b,H.o(a,0))
if(!!a.fixed$length)H.a7(P.w("add"))
a.push(b)},
cz:function(a,b){var z,y
H.x(b,"$isi",[H.o(a,0)],"$asi")
if(!!a.fixed$length)H.a7(P.w("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.O)(b),++y)a.push(b[y])},
U:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.d(a[y]))
return z.join(b)},
bW:function(a,b){if(!!a.immutable$list)H.a7(P.w("sort"))
H.h6(a,J.iR(),H.o(a,0))},
a4:function(a){return this.bW(a,null)},
k:function(a){return P.bX(a,"[","]")},
gw:function(a){return new J.ey(a,a.length,0,[H.o(a,0)])},
gt:function(a){return H.aN(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.aW(a,b))
return a[b]},
i:function(a,b,c){H.v(c,H.o(a,0))
if(!!a.immutable$list)H.a7(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.aW(a,b))
a[b]=c},
$isr:1,
$asr:I.aX,
$isi:1,
$isa:1,
p:{
fb:function(a,b){return J.bY(H.p(a,[b]))},
bY:function(a){H.bh(a)
a.fixed$length=Array
return a},
kh:[function(a,b){return J.e4(H.dC(a,"$isP"),H.dC(b,"$isP"))},"$2","iR",8,0,23]}},
ki:{"^":"b8;$ti"},
ey:{"^":"b;a,b,c,0d,$ti",
saN:function(a){this.d=H.v(a,H.o(this,0))},
gB:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.O(z))
x=this.c
if(x>=y){this.saN(null)
return!1}this.saN(z[x]);++this.c
return!0}},
b9:{"^":"e;",
G:function(a,b){var z
H.cf(b)
if(typeof b!=="number")throw H.c(H.aU(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gan(b)
if(this.gan(a)===z)return 0
if(this.gan(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gan:function(a){return a===0?1/a<0:a<0},
bF:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.w(""+a+".toInt()"))},
cG:function(a,b,c){if(this.G(b,c)>0)throw H.c(H.aU(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){return a&0x1FFFFFFF},
c0:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b3(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.b3(a,b)},
b3:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.w("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
b1:function(a,b){var z
if(a>0)z=this.cu(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cu:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.c(H.aU(b))
return a>b},
$isP:1,
$asP:function(){return[P.D]},
$isU:1,
$isD:1},
cK:{"^":"b9;",$isB:1},
fd:{"^":"b9;"},
ba:{"^":"e;",
a7:function(a,b){if(b>=a.length)throw H.c(H.aW(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.y(b)
if(typeof b!=="string")throw H.c(P.cw(b,null,null))
return a+b},
bY:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bt(b,null,null))
if(b>c)throw H.c(P.bt(b,null,null))
if(c>a.length)throw H.c(P.bt(c,null,null))
return a.substring(b,c)},
bX:function(a,b){return this.bY(a,b,null)},
cH:function(a,b,c){if(c>a.length)throw H.c(P.fS(c,0,a.length,null,null))
return H.jq(a,b,c)},
G:function(a,b){var z
H.y(b)
if(typeof b!=="string")throw H.c(H.aU(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gt:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aW(a,b))
return a[b]},
$isr:1,
$asr:I.aX,
$isP:1,
$asP:function(){return[P.f]},
$isfF:1,
$isf:1}}],["","",,H,{"^":"",
h6:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.j(b,{func:1,ret:P.B,args:[c,c]})
H.bc(a,0,J.b4(a)-1,b,c)},
bc:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.h5(a,b,c,d,e)
else H.h4(a,b,c,d,e)},
h5:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.j(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.aY(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a_(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
h4:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.j(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.e.S(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.S(b+a0,2)
v=w-z
u=w+z
t=J.aY(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.a_(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a_(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a_(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a_(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a_(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a_(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a_(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a_(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a_(a1.$2(p,o),0)){n=o
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
if(typeof i!=="number")return i.W()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.L()
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
if(typeof e!=="number")return e.W()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.L()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.L()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.W()
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
H.bc(a,b,m-2,a1,a2)
H.bc(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aD(a1.$2(t.h(a,m),r),0);)++m
for(;J.aD(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.W()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bc(a,m,l,a1,a2)}else H.bc(a,m,l,a1,a2)},
eY:{"^":"i;"},
fm:{"^":"b;a,b,c,0d,$ti",
saO:function(a){this.d=H.v(a,H.o(this,0))},
gB:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aY(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aG(z))
w=this.c
if(w>=x){this.saO(null)
return!1}this.saO(y.q(z,w));++this.c
return!0}},
br:{"^":"b;$ti"}}],["","",,H,{"^":"",
au:function(a){var z,y
z=H.y(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
j9:function(a){return init.types[H.K(a)]},
ji:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$ist},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bn(a)
if(typeof z!=="string")throw H.c(H.aU(a))
return z},
aN:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aO:function(a){return H.fJ(a)+H.bA(H.ar(a),0,null)},
fJ:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.D||!!z.$isaQ){u=C.v(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.au(w.length>1&&C.i.a7(w,0)===36?C.i.bX(w,1):w)},
av:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fQ:function(a){var z=H.av(a).getFullYear()+0
return z},
fO:function(a){var z=H.av(a).getMonth()+1
return z},
fK:function(a){var z=H.av(a).getDate()+0
return z},
fL:function(a){var z=H.av(a).getHours()+0
return z},
fN:function(a){var z=H.av(a).getMinutes()+0
return z},
fP:function(a){var z=H.av(a).getSeconds()+0
return z},
fM:function(a){var z=H.av(a).getMilliseconds()+0
return z},
as:function(a){throw H.c(H.aU(a))},
l:function(a,b){if(a==null)J.b4(a)
throw H.c(H.aW(a,b))},
aW:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.K(J.b4(a))
if(!(b<0)){if(typeof z!=="number")return H.as(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bt(b,"index",null)},
aU:function(a){return new P.aE(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dF})
z.name=""}else z.toString=H.dF
return z},
dF:function(){return J.bn(this.dartException)},
a7:function(a){throw H.c(a)},
O:function(a){throw H.c(P.aG(a))},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.js(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.b1(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c_(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cT(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.dL()
u=$.dM()
t=$.dN()
s=$.dO()
r=$.dR()
q=$.dS()
p=$.dQ()
$.dP()
o=$.dU()
n=$.dT()
m=v.F(y)
if(m!=null)return z.$1(H.c_(H.y(y),m))
else{m=u.F(y)
if(m!=null){m.method="call"
return z.$1(H.c_(H.y(y),m))}else{m=t.F(y)
if(m==null){m=s.F(y)
if(m==null){m=r.F(y)
if(m==null){m=q.F(y)
if(m==null){m=p.F(y)
if(m==null){m=s.F(y)
if(m==null){m=o.F(y)
if(m==null){m=n.F(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cT(H.y(y),m))}}return z.$1(new H.ho(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cX()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cX()
return a},
aZ:function(a){var z
if(a==null)return new H.dj(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dj(a)},
j3:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
jh:function(a,b,c,d,e,f){H.h(a,"$isbW")
switch(H.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.cH("Unsupported number of arguments for wrapped closure"))},
aV:function(a,b){var z
H.K(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jh)
a.$identity=z
return z},
eK:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.fU(z).r}else x=d
w=e?Object.create(new H.ha().constructor.prototype):Object.create(new H.bR(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a0
if(typeof u!=="number")return u.D()
$.a0=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cA(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.j9,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cy:H.bS
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cA(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
eH:function(a,b,c,d){var z=H.bS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cA:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eJ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eH(y,!w,z,b)
if(y===0){w=$.a0
if(typeof w!=="number")return w.D()
$.a0=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aF
if(v==null){v=H.bo("self")
$.aF=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a0
if(typeof w!=="number")return w.D()
$.a0=w+1
t+=w
w="return function("+t+"){return this."
v=$.aF
if(v==null){v=H.bo("self")
$.aF=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
eI:function(a,b,c,d){var z,y
z=H.bS
y=H.cy
switch(b?-1:a){case 0:throw H.c(H.fY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eJ:function(a,b){var z,y,x,w,v,u,t,s
z=$.aF
if(z==null){z=H.bo("self")
$.aF=z}y=$.cx
if(y==null){y=H.bo("receiver")
$.cx=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eI(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a0
if(typeof y!=="number")return y.D()
$.a0=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a0
if(typeof y!=="number")return y.D()
$.a0=y+1
return new Function(z+y+"}")()},
ca:function(a,b,c,d,e,f,g){return H.eK(a,b,H.K(c),d,!!e,!!f,g)},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.Y(a,"String"))},
dx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.Y(a,"double"))},
cf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.Y(a,"num"))},
c8:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.Y(a,"bool"))},
K:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.Y(a,"int"))},
cg:function(a,b){throw H.c(H.Y(a,H.au(H.y(b).substring(3))))},
jo:function(a,b){throw H.c(H.cz(a,H.au(H.y(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cg(a,b)},
a6:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.jo(a,b)},
dC:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cg(a,b)},
bh:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.Y(a,"List<dynamic>"))},
jj:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cg(a,b)},
cb:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.K(z)]
else return a.$S()}return},
bf:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cb(J.A(a))
if(z==null)return!1
return H.dn(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.c4)return a
$.c4=!0
try{if(H.bf(a,b))return a
z=H.bi(b)
y=H.Y(a,z)
throw H.c(y)}finally{$.c4=!1}},
bE:function(a,b){if(a!=null&&!H.c9(a,b))H.a7(H.Y(a,H.bi(b)))
return a},
ds:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cb(z)
if(y!=null)return H.bi(y)
return"Closure"}return H.aO(a)},
jr:function(a){throw H.c(new P.eP(H.y(a)))},
dy:function(a){return init.getIsolateTag(a)},
p:function(a,b){a.$ti=b
return a},
ar:function(a){if(a==null)return
return a.$ti},
lE:function(a,b,c){return H.b_(a["$as"+H.d(c)],H.ar(b))},
bg:function(a,b,c,d){var z
H.y(c)
H.K(d)
z=H.b_(a["$as"+H.d(c)],H.ar(b))
return z==null?null:z[d]},
o:function(a,b){var z
H.K(b)
z=H.ar(a)
return z==null?null:z[b]},
bi:function(a){return H.aq(a,null)},
aq:function(a,b){var z,y
H.x(b,"$isa",[P.f],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.au(a[0].builtin$cls)+H.bA(a,1,b)
if(typeof a=="function")return H.au(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.K(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.d(b[y])}if('func' in a)return H.iQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.aq("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.p([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.l(b,r)
t=C.i.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aq(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aq(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aq(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aq(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.j2(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.y(z[l])
n=n+m+H.aq(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bA:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.f],"$asa")
if(a==null)return""
z=new P.c1("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aq(u,c)}return"<"+z.k(0)+">"},
j8:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cb(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ar(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aC:function(a,b,c,d){var z,y
H.y(b)
H.bh(c)
H.y(d)
if(a==null)return!1
z=H.ar(a)
y=J.A(a)
if(y[b]==null)return!1
return H.dv(H.b_(y[d],z),null,c,null)},
bj:function(a,b,c,d){H.y(b)
H.bh(c)
H.y(d)
if(a==null)return a
if(H.aC(a,b,c,d))return a
throw H.c(H.cz(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.au(b.substring(3))+H.bA(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.y(b)
H.bh(c)
H.y(d)
if(a==null)return a
if(H.aC(a,b,c,d))return a
throw H.c(H.Y(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.au(b.substring(3))+H.bA(c,0,null),init.mangledGlobalNames)))},
dv:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.S(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.S(a[y],b,c[y],d))return!1
return!0},
lA:function(a,b,c){return a.apply(b,H.b_(J.A(b)["$as"+H.d(c)],H.ar(b)))},
dA:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.dA(z)}return!1},
c9:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.dA(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.c9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bf(a,b)}z=J.A(a).constructor
y=H.ar(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.S(z,null,b,null)},
v:function(a,b){if(a!=null&&!H.c9(a,b))throw H.c(H.Y(a,H.bi(b)))
return a},
S:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.S(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.dn(a,b,c,d)
if('func' in a)return c.builtin$cls==="bW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.S("type" in a?a.type:null,b,x,d)
else if(H.S(a,b,x,d))return!0
else{if(!('$is'+"aI" in y.prototype))return!1
w=y.prototype["$as"+"aI"]
v=H.b_(w,z?a.slice(1):null)
return H.S(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dv(H.b_(r,z),b,u,d)},
dn:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.S(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.S(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.S(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.S(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jn(m,b,l,d)},
jn:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.S(c[w],d,a[w],b))return!1}return!0},
lB:function(a,b,c){Object.defineProperty(a,H.y(b),{value:c,enumerable:false,writable:true,configurable:true})},
jk:function(a){var z,y,x,w,v,u
z=H.y($.dz.$1(a))
y=$.bD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.y($.du.$2(a,z))
if(z!=null){y=$.bD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bJ(x)
$.bD[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bI[z]=x
return x}if(v==="-"){u=H.bJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dD(a,x)
if(v==="*")throw H.c(P.d5(z))
if(init.leafTags[z]===true){u=H.bJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dD(a,x)},
dD:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ce(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bJ:function(a){return J.ce(a,!1,null,!!a.$ist)},
jm:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bJ(z)
else return J.ce(z,c,null,null)},
jf:function(){if(!0===$.cd)return
$.cd=!0
H.jg()},
jg:function(){var z,y,x,w,v,u,t,s
$.bD=Object.create(null)
$.bI=Object.create(null)
H.jb()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dE.$1(v)
if(u!=null){t=H.jm(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jb:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.aB(C.F,H.aB(C.K,H.aB(C.u,H.aB(C.u,H.aB(C.J,H.aB(C.G,H.aB(C.H(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dz=new H.jc(v)
$.du=new H.jd(u)
$.dE=new H.je(t)},
aB:function(a,b){return a(b)||b},
jq:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fT:{"^":"b;a,b,c,d,e,f,r,0x",p:{
fU:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bY(z)
y=z[0]
x=z[1]
return new H.fT(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hj:{"^":"b;a,b,c,d,e,f",
F:function(a){var z,y,x
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
a2:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.p([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hj(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
d2:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fC:{"^":"L;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
cT:function(a,b){return new H.fC(a,b==null?null:b.method)}}},
fe:{"^":"L;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
c_:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fe(a,y,z?null:b.receiver)}}},
ho:{"^":"L;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
js:{"^":"n:5;a",
$1:function(a){if(!!J.A(a).$isL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dj:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isX:1},
n:{"^":"b;",
k:function(a){return"Closure '"+H.aO(this).trim()+"'"},
gbU:function(){return this},
$isbW:1,
gbU:function(){return this}},
cZ:{"^":"n;"},
ha:{"^":"cZ;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.au(z)+"'"}},
bR:{"^":"cZ;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gt:function(a){var z,y
z=this.c
if(z==null)y=H.aN(this.a)
else y=typeof z!=="object"?J.a8(z):H.aN(z)
return(y^H.aN(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aO(z)+"'")},
p:{
bS:function(a){return a.a},
cy:function(a){return a.c},
bo:function(a){var z,y,x,w,v
z=new H.bR("self","target","receiver","name")
y=J.bY(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hk:{"^":"L;a",
k:function(a){return this.a},
p:{
Y:function(a,b){return new H.hk("TypeError: "+P.bq(a)+": type '"+H.ds(a)+"' is not a subtype of type '"+b+"'")}}},
eF:{"^":"L;a",
k:function(a){return this.a},
p:{
cz:function(a,b){return new H.eF("CastError: "+P.bq(a)+": type '"+H.ds(a)+"' is not a subtype of type '"+b+"'")}}},
fX:{"^":"L;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
fY:function(a){return new H.fX(a)}}},
d3:{"^":"b;a,0b,0c,0d",
gZ:function(){var z=this.b
if(z==null){z=H.bi(this.a)
this.b=z}return z},
k:function(a){return this.gZ()},
gt:function(a){var z=this.d
if(z==null){z=C.i.gt(this.gZ())
this.d=z}return z},
v:function(a,b){if(b==null)return!1
return b instanceof H.d3&&this.gZ()===b.gZ()}},
cM:{"^":"fn;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gK:function(a){return new H.ac(this,[H.o(this,0)])},
a1:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cj(z,b)}else{y=this.cQ(b)
return y}},
cQ:function(a){var z=this.d
if(z==null)return!1
return this.am(this.af(z,J.a8(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.X(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.X(w,b)
x=y==null?null:y.b
return x}else return this.cR(b)},
cR:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.af(z,J.a8(a)&0x3ffffff)
x=this.am(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.o(this,0))
H.v(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ag()
this.b=z}this.aQ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ag()
this.c=y}this.aQ(y,b,c)}else{x=this.d
if(x==null){x=this.ag()
this.d=x}w=J.a8(b)&0x3ffffff
v=this.af(x,w)
if(v==null)this.aj(x,w,[this.ah(b,c)])
else{u=this.am(v,b)
if(u>=0)v[u].b=c
else v.push(this.ah(b,c))}}},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aG(this))
z=z.c}},
aQ:function(a,b,c){var z
H.v(b,H.o(this,0))
H.v(c,H.o(this,1))
z=this.X(a,b)
if(z==null)this.aj(a,b,this.ah(b,c))
else z.b=c},
aZ:function(){this.r=this.r+1&67108863},
ah:function(a,b){var z,y
z=new H.fj(H.v(a,H.o(this,0)),H.v(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aZ()
return z},
am:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aD(a[y].a,b))return y
return-1},
k:function(a){return P.cP(this)},
X:function(a,b){return a[b]},
af:function(a,b){return a[b]},
aj:function(a,b,c){a[b]=c},
ck:function(a,b){delete a[b]},
cj:function(a,b){return this.X(a,b)!=null},
ag:function(){var z=Object.create(null)
this.aj(z,"<non-identifier-key>",z)
this.ck(z,"<non-identifier-key>")
return z},
$iscN:1},
fj:{"^":"b;a,b,0c,0d"},
ac:{"^":"eY;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.fk(z,z.r,this.$ti)
y.c=z.e
return y}},
fk:{"^":"b;a,b,0c,0d,$ti",
saP:function(a){this.d=H.v(a,H.o(this,0))},
gB:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.saP(null)
return!1}else{this.saP(z.a)
this.c=this.c.c
return!0}}}},
jc:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
jd:{"^":"n:10;a",
$2:function(a,b){return this.a(a,b)}},
je:{"^":"n:11;a",
$1:function(a){return this.a(H.y(a))}}}],["","",,H,{"^":"",
j2:function(a){return J.fb(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bz:function(a){var z,y
if(!!J.A(a).$isr)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
a4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aW(b,a))},
fA:{"^":"e;",$ishl:1,"%":"DataView;ArrayBufferView;c0|dd|de|cS|df|dg|ag"},
c0:{"^":"fA;",
gj:function(a){return a.length},
$isr:1,
$asr:I.aX,
$ist:1,
$ast:I.aX},
cS:{"^":"de;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
i:function(a,b,c){H.dx(c)
H.a4(b,a,a.length)
a[b]=c},
$asbr:function(){return[P.U]},
$asm:function(){return[P.U]},
$isi:1,
$asi:function(){return[P.U]},
$isa:1,
$asa:function(){return[P.U]},
"%":"Float64Array"},
ag:{"^":"dg;",
i:function(a,b,c){H.K(c)
H.a4(b,a,a.length)
a[b]=c},
$asbr:function(){return[P.B]},
$asm:function(){return[P.B]},
$isi:1,
$asi:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
fz:{"^":"cS;",$isa5:1,"%":"Float32Array"},
kt:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ku:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
$isf9:1,
"%":"Int32Array"},
kv:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kw:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
fB:{"^":"ag;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
$isle:1,
"%":"Uint32Array"},
kx:{"^":"ag;",
gj:function(a){return a.length},
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ky:{"^":"ag;",
gj:function(a){return a.length},
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dd:{"^":"c0+m;"},
de:{"^":"dd+br;"},
df:{"^":"c0+m;"},
dg:{"^":"df+br;"}}],["","",,P,{"^":"",
hv:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.iY()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aV(new P.hx(z),1)).observe(y,{childList:true})
return new P.hw(z,y,x)}else if(self.setImmediate!=null)return P.iZ()
return P.j_()},
lo:[function(a){self.scheduleImmediate(H.aV(new P.hy(H.j(a,{func:1,ret:-1})),0))},"$1","iY",4,0,4],
lp:[function(a){self.setImmediate(H.aV(new P.hz(H.j(a,{func:1,ret:-1})),0))},"$1","iZ",4,0,4],
lq:[function(a){H.j(a,{func:1,ret:-1})
P.iz(0,a)},"$1","j_",4,0,4],
iU:function(a,b){if(H.bf(a,{func:1,args:[P.b,P.X]}))return H.j(a,{func:1,ret:null,args:[P.b,P.X]})
if(H.bf(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iT:function(){var z,y
for(;z=$.aA,z!=null;){$.aT=null
y=z.b
$.aA=y
if(y==null)$.aS=null
z.a.$0()}},
ly:[function(){$.c5=!0
try{P.iT()}finally{$.aT=null
$.c5=!1
if($.aA!=null)$.ci().$1(P.dw())}},"$0","dw",0,0,1],
dr:function(a){var z=new P.d7(H.j(a,{func:1,ret:-1}))
if($.aA==null){$.aS=z
$.aA=z
if(!$.c5)$.ci().$1(P.dw())}else{$.aS.b=z
$.aS=z}},
iX:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.aA
if(z==null){P.dr(a)
$.aT=$.aS
return}y=new P.d7(a)
x=$.aT
if(x==null){y.b=z
$.aT=y
$.aA=y}else{y.b=x.b
x.b=y
$.aT=y
if(y.b==null)$.aS=y}},
jp:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.G
if(C.d===y){P.bC(null,null,C.d,a)
return}y.toString
P.bC(null,null,y,H.j(y.b8(a),z))},
bB:function(a,b,c,d,e){var z={}
z.a=d
P.iX(new P.iV(z,e))},
dp:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.G
if(y===c)return d.$0()
$.G=c
z=y
try{y=d.$0()
return y}finally{$.G=z}},
dq:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.G
if(y===c)return d.$1(e)
$.G=c
z=y
try{y=d.$1(e)
return y}finally{$.G=z}},
iW:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.G
if(y===c)return d.$2(e,f)
$.G=c
z=y
try{y=d.$2(e,f)
return y}finally{$.G=z}},
bC:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b8(d):c.cD(d,-1)
P.dr(d)},
hx:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hw:{"^":"n:12;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hy:{"^":"n:0;a",
$0:function(){this.a.$0()}},
hz:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iy:{"^":"b;a,0b,c",
cd:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aV(new P.iA(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
p:{
iz:function(a,b){var z=new P.iy(!0,0)
z.cd(a,b)
return z}}},
iA:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
hB:{"^":"b;$ti"},
iv:{"^":"hB;a,$ti"},
az:{"^":"b;0a,b,c,d,e,$ti",
cS:function(a){if(this.c!==6)return!0
return this.b.b.ap(H.j(this.d,{func:1,ret:P.c7,args:[P.b]}),a.a,P.c7,P.b)},
cP:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bf(z,{func:1,args:[P.b,P.X]}))return H.bE(w.cX(z,a.a,a.b,null,y,P.X),x)
else return H.bE(w.ap(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
a3:{"^":"b;b2:a<,b,0ct:c<,$ti",
bE:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.G
if(y!==C.d){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.iU(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a3(0,$.G,[c])
w=b==null?1:3
this.aR(new P.az(x,w,a,b,[z,c]))
return x},
bD:function(a,b){return this.bE(a,null,b)},
aR:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaz")
this.c=a}else{if(z===2){y=H.h(this.c,"$isa3")
z=y.a
if(z<4){y.aR(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bC(null,null,z,H.j(new P.hO(this,a),{func:1,ret:-1}))}},
b_:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaz")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isa3")
y=u.a
if(y<4){u.b_(a)
return}this.a=y
this.c=u.c}z.a=this.Y(a)
y=this.b
y.toString
P.bC(null,null,y,H.j(new P.hT(z,this),{func:1,ret:-1}))}},
ai:function(){var z=H.h(this.c,"$isaz")
this.c=null
return this.Y(z)},
Y:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aa:function(a){var z,y,x
z=H.o(this,0)
H.bE(a,{futureOr:1,type:z})
y=this.$ti
if(H.aC(a,"$isaI",y,"$asaI"))if(H.aC(a,"$isa3",y,null))P.d9(a,this)
else P.hP(a,this)
else{x=this.ai()
H.v(a,z)
this.a=4
this.c=a
P.aR(this,x)}},
aU:function(a,b){var z
H.h(b,"$isX")
z=this.ai()
this.a=8
this.c=new P.R(a,b)
P.aR(this,z)},
$isaI:1,
p:{
hP:function(a,b){var z,y,x
b.a=1
try{a.bE(new P.hQ(b),new P.hR(b),null)}catch(x){z=H.b0(x)
y=H.aZ(x)
P.jp(new P.hS(b,z,y))}},
d9:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isa3")
if(z>=4){y=b.ai()
b.a=a.a
b.c=a.c
P.aR(b,y)}else{y=H.h(b.c,"$isaz")
b.a=2
b.c=a
a.b_(y)}},
aR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isR")
y=y.b
u=v.a
t=v.b
y.toString
P.bB(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aR(z.a,b)}y=z.a
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
if(p){H.h(r,"$isR")
y=y.b
u=r.a
t=r.b
y.toString
P.bB(null,null,y,u,t)
return}o=$.G
if(o!=q)$.G=q
else o=null
y=b.c
if(y===8)new P.hW(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.hV(x,b,r).$0()}else if((y&2)!==0)new P.hU(z,x,b).$0()
if(o!=null)$.G=o
y=x.b
if(!!J.A(y).$isaI){if(y.a>=4){n=H.h(t.c,"$isaz")
t.c=null
b=t.Y(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.d9(y,t)
return}}m=b.b
n=H.h(m.c,"$isaz")
m.c=null
b=m.Y(n)
y=x.a
u=x.b
if(!y){H.v(u,H.o(m,0))
m.a=4
m.c=u}else{H.h(u,"$isR")
m.a=8
m.c=u}z.a=m
y=m}}}},
hO:{"^":"n:0;a,b",
$0:function(){P.aR(this.a,this.b)}},
hT:{"^":"n:0;a,b",
$0:function(){P.aR(this.b,this.a.a)}},
hQ:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.aa(a)}},
hR:{"^":"n:13;a",
$2:function(a,b){H.h(b,"$isX")
this.a.aU(a,b)},
$1:function(a){return this.$2(a,null)}},
hS:{"^":"n:0;a,b,c",
$0:function(){this.a.aU(this.b,this.c)}},
hW:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bA(H.j(w.d,{func:1}),null)}catch(v){y=H.b0(v)
x=H.aZ(v)
if(this.d){w=H.h(this.a.a.c,"$isR").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isR")
else u.b=new P.R(y,x)
u.a=!0
return}if(!!J.A(z).$isaI){if(z instanceof P.a3&&z.gb2()>=4){if(z.gb2()===8){w=this.b
w.b=H.h(z.gct(),"$isR")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bD(new P.hX(t),null)
w.a=!1}}},
hX:{"^":"n:14;a",
$1:function(a){return this.a}},
hV:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.v(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.ap(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.b0(t)
y=H.aZ(t)
x=this.a
x.b=new P.R(z,y)
x.a=!0}}},
hU:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isR")
w=this.c
if(w.cS(z)&&w.e!=null){v=this.b
v.b=w.cP(z)
v.a=!1}}catch(u){y=H.b0(u)
x=H.aZ(u)
w=H.h(this.a.a.c,"$isR")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.R(y,x)
s.a=!0}}},
d7:{"^":"b;a,0b"},
hc:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.a3(0,$.G,[P.B])
z.a=0
x=H.o(this,0)
w=H.j(new P.he(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.hf(z,y),{func:1,ret:-1})
W.ap(this.a,this.b,w,!1,x)
return y}},
he:{"^":"n;a,b",
$1:function(a){H.v(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.o(this.b,0)]}}},
hf:{"^":"n:0;a,b",
$0:function(){this.b.aa(this.a.a)}},
hd:{"^":"b;"},
R:{"^":"b;a,b",
k:function(a){return H.d(this.a)},
$isL:1},
iF:{"^":"b;",$islm:1},
iV:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
ii:{"^":"iF;",
cY:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.d===$.G){a.$0()
return}P.dp(null,null,this,a,-1)}catch(x){z=H.b0(x)
y=H.aZ(x)
P.bB(null,null,this,z,H.h(y,"$isX"))}},
cZ:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.d===$.G){a.$1(b)
return}P.dq(null,null,this,a,b,-1,c)}catch(x){z=H.b0(x)
y=H.aZ(x)
P.bB(null,null,this,z,H.h(y,"$isX"))}},
cD:function(a,b){return new P.ik(this,H.j(a,{func:1,ret:b}),b)},
b8:function(a){return new P.ij(this,H.j(a,{func:1,ret:-1}))},
cE:function(a,b){return new P.il(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bA:function(a,b){H.j(a,{func:1,ret:b})
if($.G===C.d)return a.$0()
return P.dp(null,null,this,a,b)},
ap:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.G===C.d)return a.$1(b)
return P.dq(null,null,this,a,b,c,d)},
cX:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.G===C.d)return a.$2(b,c)
return P.iW(null,null,this,a,b,c,d,e,f)}},
ik:{"^":"n;a,b,c",
$0:function(){return this.a.bA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ij:{"^":"n:1;a,b",
$0:function(){return this.a.cY(this.b)}},
il:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.cZ(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cO:function(a,b,c){H.bh(a)
return H.x(H.j3(a,new H.cM(0,0,[b,c])),"$iscN",[b,c],"$ascN")},
a1:function(a,b){return new H.cM(0,0,[a,b])},
ad:function(a,b,c,d){return new P.i4(0,0,[d])},
fa:function(a,b,c){var z,y
if(P.c6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.p([],[P.f])
y=$.b1()
C.a.l(y,a)
try{P.iS(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.cY(b,H.jj(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
bX:function(a,b,c){var z,y,x
if(P.c6(a))return b+"..."+c
z=new P.c1(b)
y=$.b1()
C.a.l(y,a)
try{x=z
x.a=P.cY(x.gM(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gM()+c
y=z.gM()
return y.charCodeAt(0)==0?y:y},
c6:function(a){var z,y
for(z=0;y=$.b1(),z<y.length;++z)if(a===y[z])return!0
return!1},
iS:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.f],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.d(z.gB(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.l(b,-1)
v=b.pop()
if(0>=b.length)return H.l(b,-1)
u=b.pop()}else{t=z.gB(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.l(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB(z);++x
for(;z.u();t=s,s=r){r=z.gB(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
fl:function(a,b){var z,y,x
z=P.ad(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.O)(a),++x)z.l(0,H.v(a[x],b))
return z},
cP:function(a){var z,y,x
z={}
if(P.c6(a))return"{...}"
y=new P.c1("")
try{C.a.l($.b1(),a)
x=y
x.a=x.gM()+"{"
z.a=!0
J.ef(a,new P.fo(z,y))
z=y
z.a=z.gM()+"}"}finally{z=$.b1()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gM()
return z.charCodeAt(0)==0?z:z},
i4:{"^":"hZ;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){return P.dc(this,this.r,H.o(this,0))},
gj:function(a){return this.a},
E:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbe")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbe")!=null}else return this.ci(b)},
ci:function(a){var z=this.d
if(z==null)return!1
return this.ae(this.aX(z,a),a)>=0},
l:function(a,b){var z,y
H.v(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c3()
this.b=z}return this.aS(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c3()
this.c=y}return this.aS(y,b)}else return this.ce(0,b)},
ce:function(a,b){var z,y,x
H.v(b,H.o(this,0))
z=this.d
if(z==null){z=P.c3()
this.d=z}y=this.aV(b)
x=z[y]
if(x==null)z[y]=[this.a9(b)]
else{if(this.ae(x,b)>=0)return!1
x.push(this.a9(b))}return!0},
bz:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b0(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b0(this.c,b)
else return this.cr(0,b)},
cr:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.aX(z,b)
x=this.ae(y,b)
if(x<0)return!1
this.b4(y.splice(x,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.a8()}},
aS:function(a,b){H.v(b,H.o(this,0))
if(H.h(a[b],"$isbe")!=null)return!1
a[b]=this.a9(b)
return!0},
b0:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbe")
if(z==null)return!1
this.b4(z)
delete a[b]
return!0},
a8:function(){this.r=this.r+1&67108863},
a9:function(a){var z,y
z=new P.be(H.v(a,H.o(this,0)))
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
aV:function(a){return J.a8(a)&0x3ffffff},
aX:function(a,b){return a[this.aV(b)]},
ae:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aD(a[y].a,b))return y
return-1},
p:{
c3:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
be:{"^":"b;a,0b,0c"},
i5:{"^":"b;a,b,0c,0d,$ti",
saT:function(a){this.d=H.v(a,H.o(this,0))},
gB:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.saT(null)
return!1}else{this.saT(H.v(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
p:{
dc:function(a,b,c){var z=new P.i5(a,b,[c])
z.c=a.e
return z}}},
hZ:{"^":"fZ;"},
m:{"^":"b;$ti",
gw:function(a){return new H.fm(a,this.gj(a),0,[H.bg(this,a,"m",0)])},
q:function(a,b){return this.h(a,b)},
cO:function(a,b,c,d){var z,y,x
H.v(b,d)
H.j(c,{func:1,ret:d,args:[d,H.bg(this,a,"m",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aG(a))}return y},
k:function(a){return P.bX(a,"[","]")}},
fn:{"^":"Q;"},
fo:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
Q:{"^":"b;$ti",
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.bg(this,a,"Q",0),H.bg(this,a,"Q",1)]})
for(z=J.cn(this.gK(a));z.u();){y=z.gB(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.b4(this.gK(a))},
k:function(a){return P.cP(a)},
$isJ:1},
h_:{"^":"b;$ti",
k:function(a){return P.bX(this,"{","}")},
$isi:1,
$iskQ:1},
fZ:{"^":"h_;"}}],["","",,P,{"^":"",
eZ:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.aO(a)+"'"},
bq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bn(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eZ(a)},
cH:function(a){return new P.hL(a)},
at:function(a){H.bK(H.d(a))},
c7:{"^":"b;"},
"+bool":0,
bp:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a&&!0},
G:function(a,b){return C.e.G(this.a,H.h(b,"$isbp").a)},
gt:function(a){var z=this.a
return(z^C.e.b1(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.eQ(H.fQ(this))
y=P.b5(H.fO(this))
x=P.b5(H.fK(this))
w=P.b5(H.fL(this))
v=P.b5(H.fN(this))
u=P.b5(H.fP(this))
t=P.eR(H.fM(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isP:1,
$asP:function(){return[P.bp]},
p:{
eQ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b5:function(a){if(a>=10)return""+a
return"0"+a}}},
U:{"^":"D;"},
"+double":0,
aH:{"^":"b;a",
L:function(a,b){return C.e.L(this.a,H.h(b,"$isaH").a)},
v:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a},
gt:function(a){return this.a&0x1FFFFFFF},
G:function(a,b){return C.e.G(this.a,H.h(b,"$isaH").a)},
k:function(a){var z,y,x,w,v
z=new P.eX()
y=this.a
if(y<0)return"-"+new P.aH(0-y).k(0)
x=z.$1(C.e.S(y,6e7)%60)
w=z.$1(C.e.S(y,1e6)%60)
v=new P.eW().$1(y%1e6)
return""+C.e.S(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isP:1,
$asP:function(){return[P.aH]},
p:{
eV:function(a,b,c,d,e,f){return new P.aH(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eW:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eX:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
L:{"^":"b;"},
cU:{"^":"L;",
k:function(a){return"Throw of null."}},
aE:{"^":"L;a,b,c,d",
gac:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gab:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gac()+y+x
if(!this.a)return w
v=this.gab()
u=P.bq(this.b)
return w+v+": "+u},
p:{
cw:function(a,b,c){return new P.aE(!0,a,b,c)}}},
cV:{"^":"aE;e,f,a,b,c,d",
gac:function(){return"RangeError"},
gab:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
bt:function(a,b,c){return new P.cV(null,null,!0,a,b,"Value not in range")},
fS:function(a,b,c,d,e){return new P.cV(b,c,!0,a,d,"Invalid value")}}},
f8:{"^":"aE;e,j:f>,a,b,c,d",
gac:function(){return"RangeError"},
gab:function(){var z,y
z=H.K(this.b)
if(typeof z!=="number")return z.W()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
E:function(a,b,c,d,e){var z=H.K(e==null?J.b4(b):e)
return new P.f8(b,z,!0,a,c,"Index out of range")}}},
hp:{"^":"L;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
w:function(a){return new P.hp(a)}}},
hn:{"^":"L;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
d5:function(a){return new P.hn(a)}}},
h8:{"^":"L;a",
k:function(a){return"Bad state: "+this.a},
p:{
h9:function(a){return new P.h8(a)}}},
eL:{"^":"L;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bq(z)+"."},
p:{
aG:function(a){return new P.eL(a)}}},
cX:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isL:1},
eP:{"^":"L;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
hL:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
B:{"^":"D;"},
"+int":0,
i:{"^":"b;$ti",
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.u();)++y
return y},
k:function(a){return P.fa(this,"(",")")}},
a:{"^":"b;$ti",$isi:1},
"+List":0,
J:{"^":"b;$ti"},
F:{"^":"b;",
gt:function(a){return P.b.prototype.gt.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isP:1,
$asP:function(){return[P.D]}},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gt:function(a){return H.aN(this)},
k:function(a){return"Instance of '"+H.aO(this)+"'"},
toString:function(){return this.k(this)}},
X:{"^":"b;"},
f:{"^":"b;",$isP:1,
$asP:function(){return[P.f]},
$isfF:1},
"+String":0,
c1:{"^":"b;M:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cY:function(a,b,c){var z=J.cn(b)
if(!z.u())return a
if(c.length===0){do a+=H.d(z.gB(z))
while(z.u())}else{a+=H.d(z.gB(z))
for(;z.u();)a=a+c+H.d(z.gB(z))}return a}}}}],["","",,W,{"^":"",
cG:function(a){H.h(a,"$isI")
return"wheel"},
by:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
db:function(a,b,c,d){var z,y
z=W.by(W.by(W.by(W.by(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dm:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hE(a)
if(!!J.A(z).$isI)return z
return}else return H.h(a,"$isI")},
dt:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.G
if(z===C.d)return a
return z.cE(a,b)},
W:{"^":"b6;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jt:{"^":"e;0j:length=","%":"AccessibleNodeList"},
ju:{"^":"W;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jv:{"^":"W;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
eB:{"^":"e;","%":";Blob"},
bT:{"^":"W;0n:height=,0m:width=",
ar:function(a,b,c){if(c!=null)return this.cm(a,b,P.j0(c,null))
return this.cn(a,b)},
bV:function(a,b){return this.ar(a,b,null)},
cm:function(a,b,c){return a.getContext(b,c)},
cn:function(a,b){return a.getContext(b)},
$isbT:1,
"%":"HTMLCanvasElement"},
eE:{"^":"e;",
a_:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
bU:{"^":"e;",
bh:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
cN:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
a2:function(a){return P.T(a.getContextAttributes())},
$isbU:1,
"%":"CanvasRenderingContext2D"},
jB:{"^":"C;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
eM:{"^":"bV;",$iseM:1,"%":"CSSNumericValue|CSSUnitValue"},
jC:{"^":"eO;0j:length=","%":"CSSPerspective"},
a9:{"^":"e;",$isa9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
jD:{"^":"hC;0j:length=",
av:function(a,b){var z=this.co(a,this.cg(a,b))
return z==null?"":z},
cg:function(a,b){var z,y
z=$.dI()
y=z[b]
if(typeof y==="string")return y
y=this.cv(a,b)
z[b]=y
return y},
cv:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eS()+b
if(z in a)return z
return b},
co:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eN:{"^":"b;",
gn:function(a){return this.av(a,"height")},
gm:function(a){return this.av(a,"width")}},
bV:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
eO:{"^":"e;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
jF:{"^":"bV;0j:length=","%":"CSSTransformValue"},
jG:{"^":"bV;0j:length=","%":"CSSUnparsedValue"},
jI:{"^":"e;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
eT:{"^":"C;",
cU:function(a,b){return a.querySelector(b)},
gbu:function(a){return new W.bd(a,"mousedown",!1,[W.M])},
gbv:function(a){return new W.bd(a,"mousemove",!1,[W.M])},
gbw:function(a){return new W.bd(a,"mouseup",!1,[W.M])},
gbx:function(a){return new W.bd(a,H.y(W.cG(a)),!1,[W.ay])},
"%":"XMLDocument;Document"},
jJ:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
jK:{"^":"hG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isN",[P.D],"$asN")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[[P.N,P.D]]},
$ist:1,
$ast:function(){return[[P.N,P.D]]},
$asm:function(){return[[P.N,P.D]]},
$isi:1,
$asi:function(){return[[P.N,P.D]]},
$isa:1,
$asa:function(){return[[P.N,P.D]]},
$asq:function(){return[[P.N,P.D]]},
"%":"ClientRectList|DOMRectList"},
eU:{"^":"e;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
v:function(a,b){var z
if(b==null)return!1
if(!H.aC(b,"$isN",[P.D],"$asN"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.db(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isN:1,
$asN:function(){return[P.D]},
"%":";DOMRectReadOnly"},
jL:{"^":"hI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.y(c)
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[P.f]},
$ist:1,
$ast:function(){return[P.f]},
$asm:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asq:function(){return[P.f]},
"%":"DOMStringList"},
jM:{"^":"e;0j:length=","%":"DOMTokenList"},
b6:{"^":"C;",
k:function(a){return a.localName},
gbu:function(a){return new W.bx(a,"mousedown",!1,[W.M])},
gbv:function(a){return new W.bx(a,"mousemove",!1,[W.M])},
gbw:function(a){return new W.bx(a,"mouseup",!1,[W.M])},
gbx:function(a){return new W.bx(a,H.y(W.cG(a)),!1,[W.ay])},
$isb6:1,
"%":";Element"},
jO:{"^":"W;0n:height=,0m:width=","%":"HTMLEmbedElement"},
V:{"^":"e;",$isV:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
I:{"^":"e;",
cA:function(a,b,c,d){H.j(c,{func:1,args:[W.V]})
if(c!=null)this.cf(a,b,c,!1)},
cf:function(a,b,c,d){return a.addEventListener(b,H.aV(H.j(c,{func:1,args:[W.V]}),1),!1)},
$isI:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dh|di|dk|dl"},
aa:{"^":"eB;",$isaa:1,"%":"File"},
k4:{"^":"hN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaa")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.aa]},
$ist:1,
$ast:function(){return[W.aa]},
$asm:function(){return[W.aa]},
$isi:1,
$asi:function(){return[W.aa]},
$isa:1,
$asa:function(){return[W.aa]},
$asq:function(){return[W.aa]},
"%":"FileList"},
k5:{"^":"I;0j:length=","%":"FileWriter"},
k8:{"^":"W;0j:length=","%":"HTMLFormElement"},
ab:{"^":"e;",$isab:1,"%":"Gamepad"},
k9:{"^":"e;0j:length=","%":"History"},
ka:{"^":"i0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isC")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.C]},
$ist:1,
$ast:function(){return[W.C]},
$asm:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asq:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
f6:{"^":"eT;","%":"HTMLDocument"},
kb:{"^":"W;0n:height=,0m:width=","%":"HTMLIFrameElement"},
kc:{"^":"e;0n:height=,0m:width=","%":"ImageBitmap"},
kd:{"^":"e;0n:height=,0m:width=","%":"ImageData"},
ke:{"^":"W;0n:height=,0m:width=","%":"HTMLImageElement"},
kg:{"^":"W;0n:height=,0m:width=","%":"HTMLInputElement"},
aJ:{"^":"d4;",$isaJ:1,"%":"KeyboardEvent"},
km:{"^":"e;",
k:function(a){return String(a)},
"%":"Location"},
fp:{"^":"W;","%":"HTMLAudioElement;HTMLMediaElement"},
kp:{"^":"e;0j:length=","%":"MediaList"},
kq:{"^":"i6;",
h:function(a,b){return P.T(a.get(H.y(b)))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gK:function(a){var z=H.p([],[P.f])
this.A(a,new W.fr(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.f,null]},
$isJ:1,
$asJ:function(){return[P.f,null]},
"%":"MIDIInputMap"},
fr:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
kr:{"^":"i7;",
h:function(a,b){return P.T(a.get(H.y(b)))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gK:function(a){var z=H.p([],[P.f])
this.A(a,new W.fs(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.f,null]},
$isJ:1,
$asJ:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
fs:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
af:{"^":"e;",$isaf:1,"%":"MimeType"},
ks:{"^":"i9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaf")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$asm:function(){return[W.af]},
$isi:1,
$asi:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$asq:function(){return[W.af]},
"%":"MimeTypeArray"},
M:{"^":"d4;",
gbt:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aM(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.A(W.dm(z)).$isb6)throw H.c(P.w("offsetX is only supported on elements"))
y=H.h(W.dm(z),"$isb6")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.aM(u,v,w),"$isaM",w,"$asaM")
if(typeof z!=="number")return z.aC()
if(typeof x!=="number")return x.aC()
return new P.aM(C.q.bF(z-u),C.q.bF(x-v),w)}},
$isM:1,
"%":";DragEvent|MouseEvent"},
C:{"^":"I;",
k:function(a){var z=a.nodeValue
return z==null?this.bZ(a):z},
$isC:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
kz:{"^":"ib;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isC")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.C]},
$ist:1,
$ast:function(){return[W.C]},
$asm:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asq:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
kB:{"^":"W;0n:height=,0m:width=","%":"HTMLObjectElement"},
kD:{"^":"I;0n:height=,0m:width=","%":"OffscreenCanvas"},
kE:{"^":"e;0n:height=,0m:width=","%":"PaintSize"},
ah:{"^":"e;0j:length=",$isah:1,"%":"Plugin"},
kG:{"^":"ig;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isah")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ah]},
$ist:1,
$ast:function(){return[W.ah]},
$asm:function(){return[W.ah]},
$isi:1,
$asi:function(){return[W.ah]},
$isa:1,
$asa:function(){return[W.ah]},
$asq:function(){return[W.ah]},
"%":"PluginArray"},
kI:{"^":"M;0n:height=,0m:width=","%":"PointerEvent"},
kN:{"^":"im;",
h:function(a,b){return P.T(a.get(H.y(b)))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gK:function(a){var z=H.p([],[P.f])
this.A(a,new W.fW(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.f,null]},
$isJ:1,
$asJ:function(){return[P.f,null]},
"%":"RTCStatsReport"},
fW:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
kO:{"^":"e;0n:height=,0m:width=","%":"Screen"},
kP:{"^":"W;0j:length=","%":"HTMLSelectElement"},
ai:{"^":"I;",$isai:1,"%":"SourceBuffer"},
kR:{"^":"di;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isai")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ai]},
$ist:1,
$ast:function(){return[W.ai]},
$asm:function(){return[W.ai]},
$isi:1,
$asi:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$asq:function(){return[W.ai]},
"%":"SourceBufferList"},
aj:{"^":"e;",$isaj:1,"%":"SpeechGrammar"},
kS:{"^":"ip;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaj")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.aj]},
$ist:1,
$ast:function(){return[W.aj]},
$asm:function(){return[W.aj]},
$isi:1,
$asi:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"SpeechGrammarList"},
ak:{"^":"e;0j:length=",$isak:1,"%":"SpeechRecognitionResult"},
kV:{"^":"is;",
h:function(a,b){return this.aY(a,H.y(b))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=this.cq(a,z)
if(y==null)return
b.$2(y,this.aY(a,y))}},
gK:function(a){var z=H.p([],[P.f])
this.A(a,new W.hb(z))
return z},
gj:function(a){return a.length},
aY:function(a,b){return a.getItem(b)},
cq:function(a,b){return a.key(b)},
$asQ:function(){return[P.f,P.f]},
$isJ:1,
$asJ:function(){return[P.f,P.f]},
"%":"Storage"},
hb:{"^":"n:15;a",
$2:function(a,b){return C.a.l(this.a,a)}},
al:{"^":"e;",$isal:1,"%":"CSSStyleSheet|StyleSheet"},
kY:{"^":"e;0m:width=","%":"TextMetrics"},
am:{"^":"I;",$isam:1,"%":"TextTrack"},
an:{"^":"I;",$isan:1,"%":"TextTrackCue|VTTCue"},
kZ:{"^":"ix;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isan")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.an]},
$ist:1,
$ast:function(){return[W.an]},
$asm:function(){return[W.an]},
$isi:1,
$asi:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"TextTrackCueList"},
l_:{"^":"dl;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isam")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.am]},
$ist:1,
$ast:function(){return[W.am]},
$asm:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asq:function(){return[W.am]},
"%":"TextTrackList"},
l0:{"^":"e;0j:length=","%":"TimeRanges"},
ao:{"^":"e;",$isao:1,"%":"Touch"},
l1:{"^":"iC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isao")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ao]},
$ist:1,
$ast:function(){return[W.ao]},
$asm:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"TouchList"},
l2:{"^":"e;0j:length=","%":"TrackDefaultList"},
d4:{"^":"V;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lf:{"^":"e;",
k:function(a){return String(a)},
"%":"URL"},
li:{"^":"fp;0n:height=,0m:width=","%":"HTMLVideoElement"},
lj:{"^":"I;0j:length=","%":"VideoTrackList"},
lk:{"^":"I;0n:height=,0m:width=","%":"VisualViewport"},
ll:{"^":"e;0m:width=","%":"VTTRegion"},
ay:{"^":"M;",
gcJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
$isay:1,
"%":"WheelEvent"},
hs:{"^":"I;",
gcB:function(a){var z,y,x
z=P.D
y=new P.a3(0,$.G,[z])
x=H.j(new W.ht(new P.iv(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cl(a)
this.cs(a,W.dt(x,z))
return y},
cs:function(a,b){return a.requestAnimationFrame(H.aV(H.j(b,{func:1,ret:-1,args:[P.D]}),1))},
cl:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isd6:1,
"%":"DOMWindow|Window"},
ht:{"^":"n:16;a",
$1:function(a){var z=this.a
a=H.bE(H.cf(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.a7(P.h9("Future already completed"))
z.aa(a)}},
lr:{"^":"iH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isa9")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.a9]},
$ist:1,
$ast:function(){return[W.a9]},
$asm:function(){return[W.a9]},
$isi:1,
$asi:function(){return[W.a9]},
$isa:1,
$asa:function(){return[W.a9]},
$asq:function(){return[W.a9]},
"%":"CSSRuleList"},
ls:{"^":"eU;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.aC(b,"$isN",[P.D],"$asN"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gt:function(a){return W.db(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lt:{"^":"iJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isab")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ab]},
$ist:1,
$ast:function(){return[W.ab]},
$asm:function(){return[W.ab]},
$isi:1,
$asi:function(){return[W.ab]},
$isa:1,
$asa:function(){return[W.ab]},
$asq:function(){return[W.ab]},
"%":"GamepadList"},
lu:{"^":"iL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isC")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.C]},
$ist:1,
$ast:function(){return[W.C]},
$asm:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asq:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lv:{"^":"iN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isak")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.ak]},
$ist:1,
$ast:function(){return[W.ak]},
$asm:function(){return[W.ak]},
$isi:1,
$asi:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"SpeechRecognitionResultList"},
lw:{"^":"iP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isal")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.al]},
$ist:1,
$ast:function(){return[W.al]},
$asm:function(){return[W.al]},
$isi:1,
$asi:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$asq:function(){return[W.al]},
"%":"StyleSheetList"},
bd:{"^":"hc;a,b,c,$ti"},
bx:{"^":"bd;a,b,c,$ti"},
hJ:{"^":"hd;a,b,c,d,e,$ti",p:{
ap:function(a,b,c,d,e){var z=W.dt(new W.hK(c),W.V)
if(z!=null&&!0)J.e_(a,b,z,!1)
return new W.hJ(0,a,b,z,!1,[e])}}},
hK:{"^":"n:17;a",
$1:function(a){return this.a.$1(H.h(a,"$isV"))}},
q:{"^":"b;$ti",
gw:function(a){return new W.f0(a,this.gj(a),-1,[H.bg(this,a,"q",0)])}},
f0:{"^":"b;a,b,c,0d,$ti",
saW:function(a){this.d=H.v(a,H.o(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saW(J.b2(this.a,z))
this.c=z
return!0}this.saW(null)
this.c=y
return!1},
gB:function(a){return this.d}},
hD:{"^":"b;a",$isI:1,$isd6:1,p:{
hE:function(a){if(a===window)return H.h(a,"$isd6")
else return new W.hD(a)}}},
hC:{"^":"e+eN;"},
hF:{"^":"e+m;"},
hG:{"^":"hF+q;"},
hH:{"^":"e+m;"},
hI:{"^":"hH+q;"},
hM:{"^":"e+m;"},
hN:{"^":"hM+q;"},
i_:{"^":"e+m;"},
i0:{"^":"i_+q;"},
i6:{"^":"e+Q;"},
i7:{"^":"e+Q;"},
i8:{"^":"e+m;"},
i9:{"^":"i8+q;"},
ia:{"^":"e+m;"},
ib:{"^":"ia+q;"},
ie:{"^":"e+m;"},
ig:{"^":"ie+q;"},
im:{"^":"e+Q;"},
dh:{"^":"I+m;"},
di:{"^":"dh+q;"},
io:{"^":"e+m;"},
ip:{"^":"io+q;"},
is:{"^":"e+Q;"},
iw:{"^":"e+m;"},
ix:{"^":"iw+q;"},
dk:{"^":"I+m;"},
dl:{"^":"dk+q;"},
iB:{"^":"e+m;"},
iC:{"^":"iB+q;"},
iG:{"^":"e+m;"},
iH:{"^":"iG+q;"},
iI:{"^":"e+m;"},
iJ:{"^":"iI+q;"},
iK:{"^":"e+m;"},
iL:{"^":"iK+q;"},
iM:{"^":"e+m;"},
iN:{"^":"iM+q;"},
iO:{"^":"e+m;"},
iP:{"^":"iO+q;"}}],["","",,P,{"^":"",
T:function(a){var z,y,x,w,v
if(a==null)return
z=P.a1(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.O)(y),++w){v=H.y(y[w])
z.i(0,v,a[v])}return z},
j0:function(a,b){var z={}
a.A(0,new P.j1(z))
return z},
cF:function(){var z=$.cE
if(z==null){z=J.bM(window.navigator.userAgent,"Opera",0)
$.cE=z}return z},
eS:function(){var z,y
z=$.cB
if(z!=null)return z
y=$.cC
if(y==null){y=J.bM(window.navigator.userAgent,"Firefox",0)
$.cC=y}if(y)z="-moz-"
else{y=$.cD
if(y==null){y=!P.cF()&&J.bM(window.navigator.userAgent,"Trident/",0)
$.cD=y}if(y)z="-ms-"
else z=P.cF()?"-o-":"-webkit-"}$.cB=z
return z},
j1:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
da:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
i1:{"^":"b;",
cT:function(){return Math.random()}},
aM:{"^":"b;I:a>,H:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
v:function(a,b){if(b==null)return!1
return H.aC(b,"$isaM",[P.D],null)&&this.a==J.bm(b)&&this.b==b.gH(b)},
gt:function(a){var z,y,x
z=J.a8(this.a)
y=J.a8(this.b)
y=P.da(P.da(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
ih:{"^":"b;"},
N:{"^":"ih;$ti"}}],["","",,P,{"^":"",ex:{"^":"e;",$isex:1,"%":"SVGAnimatedLength"},jP:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},jQ:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},jR:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},jS:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},jT:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},jU:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},jV:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},jW:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},jX:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},jY:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},jZ:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},k_:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},k0:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},k1:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},k2:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},k3:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},k6:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},k7:{"^":"b7;0n:height=,0m:width=","%":"SVGForeignObjectElement"},f5:{"^":"b7;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b7:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},kf:{"^":"b7;0n:height=,0m:width=","%":"SVGImageElement"},aK:{"^":"e;",$isaK:1,"%":"SVGLength"},kl:{"^":"i3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.h(c,"$isaK")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aK]},
$isi:1,
$asi:function(){return[P.aK]},
$isa:1,
$asa:function(){return[P.aK]},
$asq:function(){return[P.aK]},
"%":"SVGLengthList"},kn:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},aL:{"^":"e;",$isaL:1,"%":"SVGNumber"},kA:{"^":"id;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.h(c,"$isaL")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aL]},
$isi:1,
$asi:function(){return[P.aL]},
$isa:1,
$asa:function(){return[P.aL]},
$asq:function(){return[P.aL]},
"%":"SVGNumberList"},kF:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},kH:{"^":"e;0j:length=","%":"SVGPointList"},kJ:{"^":"e;0n:height=,0m:width=","%":"SVGRect"},kK:{"^":"f5;0n:height=,0m:width=","%":"SVGRectElement"},kW:{"^":"iu;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.y(c)
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asq:function(){return[P.f]},
"%":"SVGStringList"},H:{"^":"b6;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},kX:{"^":"b7;0n:height=,0m:width=","%":"SVGSVGElement"},aP:{"^":"e;",$isaP:1,"%":"SVGTransform"},l3:{"^":"iE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.h(c,"$isaP")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aP]},
$isi:1,
$asi:function(){return[P.aP]},
$isa:1,
$asa:function(){return[P.aP]},
$asq:function(){return[P.aP]},
"%":"SVGTransformList"},lg:{"^":"b7;0n:height=,0m:width=","%":"SVGUseElement"},i2:{"^":"e+m;"},i3:{"^":"i2+q;"},ic:{"^":"e+m;"},id:{"^":"ic+q;"},it:{"^":"e+m;"},iu:{"^":"it+q;"},iD:{"^":"e+m;"},iE:{"^":"iD+q;"}}],["","",,P,{"^":"",a5:{"^":"b;",$isi:1,
$asi:function(){return[P.U]},
$isa:1,
$asa:function(){return[P.U]},
$ishl:1}}],["","",,P,{"^":"",jw:{"^":"e;0j:length=","%":"AudioBuffer"},jx:{"^":"hA;",
h:function(a,b){return P.T(a.get(H.y(b)))},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gK:function(a){var z=H.p([],[P.f])
this.A(a,new P.ez(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.f,null]},
$isJ:1,
$asJ:function(){return[P.f,null]},
"%":"AudioParamMap"},ez:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},jy:{"^":"I;0j:length=","%":"AudioTrackList"},eA:{"^":"I;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kC:{"^":"eA;0j:length=","%":"OfflineAudioContext"},hA:{"^":"e+Q;"}}],["","",,P,{"^":"",eC:{"^":"e;",$iseC:1,"%":"WebGLBuffer"},fR:{"^":"e;",$isfR:1,"%":"WebGLProgram"},kL:{"^":"e;",
b5:function(a,b){return a.activeTexture(b)},
b6:function(a,b,c){return a.attachShader(b,c)},
b7:function(a,b,c){return a.bindBuffer(b,c)},
b9:function(a,b,c){return a.bindTexture(b,c)},
ba:function(a,b){return a.blendEquation(b)},
bb:function(a,b,c){return a.blendFunc(b,c)},
bc:function(a,b,c,d){return a.bufferData(b,c,d)},
bd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
be:function(a,b){return a.compileShader(b)},
bf:function(a){return a.createBuffer()},
bg:function(a){return a.createProgram()},
bi:function(a,b){return a.createShader(b)},
bj:function(a){return a.createTexture()},
bl:function(a,b){return a.depthMask(b)},
bm:function(a,b){return a.disable(b)},
bn:function(a,b,c,d){return a.drawArrays(b,c,d)},
bo:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bp:function(a,b){return a.enable(b)},
bq:function(a,b){return a.enableVertexAttribArray(b)},
a2:function(a){return P.T(a.getContextAttributes())},
as:function(a){return a.getError()},
at:function(a,b){return a.getProgramInfoLog(b)},
au:function(a,b,c){return a.getProgramParameter(b,c)},
aw:function(a,b){return a.getShaderInfoLog(b)},
ax:function(a,b,c){return a.getShaderParameter(b,c)},
ay:function(a,b,c){return a.getUniformLocation(b,c)},
bs:function(a,b){return a.linkProgram(b)},
by:function(a,b,c){return a.pixelStorei(b,c)},
aA:function(a,b,c){return a.shaderSource(b,c)},
aB:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aq:function(a,b,c,d,e,f,g,h,i,j){this.ak(a,b,c,d,e,f,g)
return},
bB:function(a,b,c,d,e,f,g){return this.aq(a,b,c,d,e,f,g,null,null,null)},
ak:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bC:function(a,b,c,d){return a.texParameteri(b,c,d)},
bG:function(a,b,c){return a.uniform1f(b,c)},
bH:function(a,b,c){return a.uniform1fv(b,c)},
bI:function(a,b,c){return a.uniform1i(b,c)},
bJ:function(a,b,c){return a.uniform1iv(b,c)},
bK:function(a,b,c){return a.uniform2fv(b,c)},
bL:function(a,b,c){return a.uniform3fv(b,c)},
bM:function(a,b,c){return a.uniform4fv(b,c)},
bN:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bO:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bP:function(a,b){return a.useProgram(b)},
bQ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bS:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},kM:{"^":"e;",
cC:function(a,b){return a.beginTransformFeedback(b)},
cF:function(a,b){return a.bindVertexArray(b)},
cI:function(a){return a.createVertexArray()},
cK:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cL:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cM:function(a){return a.endTransformFeedback()},
d_:function(a,b,c,d){this.cw(a,b,H.x(c,"$isa",[P.f],"$asa"),d)
return},
cw:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
d0:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b5:function(a,b){return a.activeTexture(b)},
b6:function(a,b,c){return a.attachShader(b,c)},
b7:function(a,b,c){return a.bindBuffer(b,c)},
b9:function(a,b,c){return a.bindTexture(b,c)},
ba:function(a,b){return a.blendEquation(b)},
bb:function(a,b,c){return a.blendFunc(b,c)},
bc:function(a,b,c,d){return a.bufferData(b,c,d)},
bd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
be:function(a,b){return a.compileShader(b)},
bf:function(a){return a.createBuffer()},
bg:function(a){return a.createProgram()},
bi:function(a,b){return a.createShader(b)},
bj:function(a){return a.createTexture()},
bl:function(a,b){return a.depthMask(b)},
bm:function(a,b){return a.disable(b)},
bn:function(a,b,c,d){return a.drawArrays(b,c,d)},
bo:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bp:function(a,b){return a.enable(b)},
bq:function(a,b){return a.enableVertexAttribArray(b)},
a2:function(a){return P.T(a.getContextAttributes())},
as:function(a){return a.getError()},
at:function(a,b){return a.getProgramInfoLog(b)},
au:function(a,b,c){return a.getProgramParameter(b,c)},
aw:function(a,b){return a.getShaderInfoLog(b)},
ax:function(a,b,c){return a.getShaderParameter(b,c)},
ay:function(a,b,c){return a.getUniformLocation(b,c)},
bs:function(a,b){return a.linkProgram(b)},
by:function(a,b,c){return a.pixelStorei(b,c)},
aA:function(a,b,c){return a.shaderSource(b,c)},
aB:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aq:function(a,b,c,d,e,f,g,h,i,j){this.ak(a,b,c,d,e,f,g)
return},
bB:function(a,b,c,d,e,f,g){return this.aq(a,b,c,d,e,f,g,null,null,null)},
ak:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bC:function(a,b,c,d){return a.texParameteri(b,c,d)},
bG:function(a,b,c){return a.uniform1f(b,c)},
bH:function(a,b,c){return a.uniform1fv(b,c)},
bI:function(a,b,c){return a.uniform1i(b,c)},
bJ:function(a,b,c){return a.uniform1iv(b,c)},
bK:function(a,b,c){return a.uniform2fv(b,c)},
bL:function(a,b,c){return a.uniform3fv(b,c)},
bM:function(a,b,c){return a.uniform4fv(b,c)},
bN:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bO:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bP:function(a,b){return a.useProgram(b)},
bQ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bS:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},h0:{"^":"e;",$ish0:1,"%":"WebGLShader"},hg:{"^":"e;",$ishg:1,"%":"WebGLTexture"},hm:{"^":"e;",$ishm:1,"%":"WebGLUniformLocation"},hr:{"^":"e;",$ishr:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",kT:{"^":"ir;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.E(b,a,null,null,null))
return P.T(this.cp(a,b))},
i:function(a,b,c){H.h(c,"$isJ")
throw H.c(P.w("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cp:function(a,b){return a.item(b)},
$asm:function(){return[[P.J,,,]]},
$isi:1,
$asi:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},iq:{"^":"e+m;"},ir:{"^":"iq+q;"}}],["","",,G,{"^":"",
hu:function(a){var z,y,x,w
z=H.p(a.split("\n"),[P.f])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.l(z,y)
C.a.i(z,y,w+H.d(z[y]))}return C.a.U(z,"\n")},
d8:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bi(a,b)
z.aA(a,y,c)
z.be(a,y)
x=H.c8(z.ax(a,y,35713))
if(x!=null&&!x){w=z.aw(a,y)
P.at("E:Compilation failed:")
P.at("E:"+G.hu(c))
P.at("E:Failure:")
P.at(C.i.D("E:",w))
throw H.c(w)}return y},
cJ:function(a,b){var z,y,x
H.x(a,"$isa",[T.u],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.h.i(b,z,J.bm(a[y]))
if(y>=a.length)return H.l(a,y)
C.h.i(b,z+1,J.bP(a[y]))
z+=2
if(y>=a.length)return H.l(a,y)
x=J.co(a[y])
if(z>=b.length)return H.l(b,z)
b[z]=x}return b},
f2:function(a,b){var z,y
H.x(a,"$isa",[T.aw],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.h.i(b,z,J.bm(a[y]))
if(y>=a.length)return H.l(a,y)
C.h.i(b,z+1,J.bP(a[y]))}return b},
f3:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.ax],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.h.i(b,z,J.bm(a[y]))
if(y>=a.length)return H.l(a,y)
C.h.i(b,z+1,J.bP(a[y]))
x=z+2
if(y>=a.length)return H.l(a,y)
w=J.co(a[y])
v=b.length
if(x>=v)return H.l(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.l(a,y)
w=J.eg(a[y])
if(z>=v)return H.l(b,z)
b[z]=w}return b},
f1:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.B]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.b2(a[y],0))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+1,J.b2(a[y],1))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+2,J.b2(a[y],2))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+3,J.b2(a[y],3))}return b},
hY:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ac(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.B]],v=[P.U],u=[T.ax],t=[T.u],s=[T.aw];y.u();){r=y.d
if(!x.a1(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.cc>0)H.bK("I: "+r)
continue}q=z.h(0,r)
switch($.Z().h(0,r).a){case"vec2":b.R(r,G.f2(H.bj(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.R(r,G.cJ(H.bj(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.R(r,G.f3(H.bj(q,"$isa",u,"$asa"),null),4)
break
case"float":b.R(r,new Float32Array(H.bz(H.bj(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.R(r,G.f1(H.bj(q,"$isa",w,"$asa"),null),4)
break}}},
bs:{"^":"b;"},
bw:{"^":"bs;",
aK:function(){return this.d},
k:function(a){var z,y,x,w
z=H.p(["{"+new H.d3(H.j8(this)).k(0)+"}["+this.a+"]"],[P.f])
for(y=this.d,x=new H.ac(y,[H.o(y,0)]),x=x.gw(x);x.u();){w=x.d
C.a.l(z,H.d(w)+": "+H.d(y.h(0,w)))}return C.a.U(z,"\n")}},
eD:{"^":"h7;"},
eG:{"^":"b;0a,b",
br:function(a,b,c){J.ed(this.a,b)
if(c>0)J.eu(this.a,b,c)},
bR:function(a,b,c,d,e,f,g,h){J.bL(this.a,34962,b)
J.ev(this.a,c,d,e,!1,g,h)}},
f_:{"^":"b;"},
cI:{"^":"b;a,b,c,d"},
f4:{"^":"b;a,b,c,d,e",
c3:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.p(y,[P.B])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.l(y,v)
u=y[v]
C.a.i(x,w,u.gd3(u))
C.a.i(x,w+1,u.gd4(u))
C.a.i(x,w+2,u.gd5(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.O)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
c5:function(a,b){var z,y,x,w,v,u,t
z=H.p([],[T.aw])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.aw(t))}},
c4:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.l(z,new G.cI(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.p(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.f])
for(y=this.e,x=new H.ac(y,[H.o(y,0)]),x=x.gw(x);x.u();){w=x.d
v=$.Z().h(0,w).a
C.a.l(z,H.d(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.U(z," ")}},
d1:{"^":"b;a,b,c"},
d_:{"^":"b;a,b,c",p:{
d0:function(a,b,c){return new G.d_(a,b,c)}}},
cQ:{"^":"bw;d,a,b,c"},
fq:{"^":"bs;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sad:function(a){this.cx=H.x(a,"$isa",[P.B],"$asa")},
aH:function(a,b,c){var z,y
C.i.a7(a,0)
H.h(b,"$isa5")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bL(z.a,34962,y)
J.cm(z.a,34962,b,35048)},
c6:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
R:function(a,b,c){var z,y,x,w,v
z=J.cj(a,0)===105
if(z&&this.z===0)this.z=C.e.c0(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bN(x.a))
this.aH(a,b,c)
w=$.Z().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bk(x.a,this.e)
x.br(0,v,z?1:0)
x.bR(0,y.h(0,a),v,w.aJ(),5126,!1,0,0)},
aG:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.bN(y.a))
this.ch=a
this.aH("aPosition",a,3)
x=$.Z().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bk(y.a,this.e)
y.br(0,w,0)
y.bR(0,z.h(0,"aPosition"),w,x.aJ(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.p(["Faces:"+(z==null?0:z.length)],[P.f])
for(z=this.cy,x=new H.ac(z,[H.o(z,0)]),x=x.gw(x);x.u();){w=x.d
C.a.l(y,H.d(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.U(y,"  ")},
p:{
cR:function(a,b,c,d){var z=P.f
return new G.fq(b,J.e7(b.a),c,P.a1(z,P.b),d,0,-1,P.a1(z,P.a5),"meshdata:"+a,!1,!0)}}},
fG:{"^":"bw;",
c1:function(a,b){var z
if(typeof a!=="number")return a.d1()
if(typeof b!=="number")return H.as(b)
z=a/b
if(this.z===z)return
this.z=z
this.aL()},
aL:function(){var z,y,x,w,v,u
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
aK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.u(new Float32Array(3))
u.a3(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.C(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.A(t)
y=!!z.$isax
q=y?t.gbT(t):1
if(!!z.$isu){p=t.gI(t)
s=t.gH(t)
r=t.gO(t)
t=p}else if(y){p=t.gI(t)
s=t.gH(t)
r=t.gO(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.as(t)
y=u[4]
if(typeof s!=="number")return H.as(s)
x=u[8]
if(typeof r!=="number")return H.as(r)
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
d.C(this.db)
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
v.i(0,"uPerspectiveViewMatrix",d)
return v}},
jN:{"^":"b;"},
fV:{"^":"bs;d,e,f,r,x,y,z,Q,0ch,a,b,c",
c9:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){t=z[u]
x.i(0,t,J.cp(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){t=z[u]
x.i(0,t,J.cp(w.a,v,t))}},
cb:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.p([],[P.f])
x=H.p([],[P.f])
for(y=new H.ac(y,[H.o(y,0)]),y=y.gw(y);y.u();){w=y.d
if(!z.a1(0,w))C.a.l(x,w)}for(z=this.x,z=P.dc(z,z.r,H.o(z,0)),y=this.Q;z.u();){w=z.d
if(!y.E(0,w))C.a.l(x,w)}return x},
cc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isJ",[P.f,P.b],"$asJ")
z=Date.now()
for(y=new H.ac(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cj(s,0)){case 117:if(w.a1(0,s)){r=b.h(0,s)
if(v.a1(0,s))H.bK("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.Z().h(0,s)
if(q==null)H.a7("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.K(r)
J.bQ(x.a,p,r)}else if(!!J.A(r).$isf9)J.es(x.a,p,r)
break
case"float":if(q.c===0){H.dx(r)
J.eq(x.a,p,r)}else if(!!J.A(r).$isa5)J.er(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.a6(r,"$isae").a
J.cv(x.a,p,!1,s)}else if(!!J.A(r).$isa5)J.cv(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.E.gd2(H.a6(r,"$isko"))
J.cu(x.a,p,!1,s)}else if(!!J.A(r).$isa5)J.cu(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.ct(o,p,H.a6(r,"$isax").a)
else J.ct(o,p,H.h(r,"$isa5"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cs(o,p,H.a6(r,"$isu").a)
else J.cs(o,p,H.h(r,"$isa5"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cr(o,p,H.a6(r,"$isaw").a)
else J.cr(o,p,H.h(r,"$isa5"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.as(s)
J.ck(x.a,33984+s)
s=H.a6(r,"$isc2").b
J.b3(x.a,3553,s)
s=this.ch
J.bQ(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.D()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.as(s)
J.ck(x.a,33984+s)
s=H.a6(r,"$isc2").b
J.b3(x.a,34067,s)
s=this.ch
J.bQ(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.D()
this.ch=s+1
break
default:H.bK("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aD(r,!0)
o=x.a
if(s)J.bl(o,2929)
else J.bO(o,2929)
break
case"cStencilFunc":H.a6(r,"$isd1")
s=r.a
o=x.a
if(s===1281)J.bO(o,2960)
else{J.bl(o,2960)
o=r.b
n=r.c
J.en(x.a,s,o,n)}break
case"cDepthWrite":H.c8(r)
J.e8(x.a,r)
break
case"cBlendEquation":H.a6(r,"$isd_")
s=r.a
o=x.a
if(s===1281)J.bO(o,3042)
else{J.bl(o,3042)
o=r.b
n=r.c
J.e2(x.a,o,n)
J.e1(x.a,s)}break}++t
break}}m=P.eV(0,0,0,Date.now()-new P.bp(z,!1).a,0,0)
""+t
m.k(0)},
c2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.bw],"$asa")
Date.now()
z=this.d
J.et(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aZ()}for(x=0;x<2;++x){w=b[x]
this.cc(w.a,w.aK())}y=this.Q
y.T(0)
for(v=a.cy,v=new H.ac(v,[H.o(v,0)]),v=v.gw(v);v.u();)y.l(0,v.d)
u=this.cb()
if(u.length!==0)P.at("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
J.bk(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.c6()
s=a.Q
r=a.z
if(t)J.e0(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.ec(q,y,v,s,0,r)
else J.eb(q,y,v,s,0)}else{s=z.a
if(r>1)J.ea(s,y,0,v,r)
else J.e9(s,y,0,v)}if(t)J.ee(z.a)},
aI:function(a,b){return this.c2(a,b,null)},
p:{
cW:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.f
y=P.ad(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.e5(b.a)
t=G.d8(b.a,35633,x)
J.cl(b.a,u,t)
s=G.d8(b.a,35632,w)
J.cl(b.a,u,s)
if(v.length>0)J.ep(b.a,u,v,35980)
J.el(b.a,u)
if(!H.c8(J.ek(b.a,u,35714)))H.a7(J.ej(b.a,u))
z=new G.fV(b,c,d,u,P.fl(c.c,z),P.a1(z,P.b),P.a1(z,z),y,a,!1,!0)
z.c9(a,b,c,d)
return z}}},
z:{"^":"b;a,b,c",
aJ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
h1:{"^":"b;a,0b,c,d,e,f,r,x",
aE:function(a){var z,y,x,w
H.x(a,"$isa",[P.f],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.a4(z)},
a5:function(a){var z,y,x
H.x(a,"$isa",[P.f],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.O)(a),++x)C.a.l(y,a[x])
C.a.a4(y)},
aF:function(a){var z,y
H.x(a,"$isa",[P.f],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.a4(z)},
ca:function(a,b){this.b=this.aM(!0,H.x(a,"$isa",[P.f],"$asa"),b)},
a6:function(a){return this.ca(a,null)},
aM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.f]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.p(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.O)(y),++u){t=y[u]
s=$.Z().h(0,t)
C.a.l(w,"layout (location="+H.d(v.h(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){q=z[u]
s=$.Z().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){q=z[u]
s=$.Z().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.cz(w,b)
if(a)C.a.l(w,"}")
return C.a.U(w,"\n")},
p:{
bu:function(a){var z,y
z=P.f
y=[z]
return new G.h1(a,H.p([],y),H.p([],y),H.p([],y),H.p([],y),0,P.a1(z,P.B))}}},
h7:{"^":"bs;"},
hh:{"^":"b;a,b,c,d,e,f,r"},
c2:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
f7:{"^":"c2;f,a,b,c,d,e"}}],["","",,R,{"^":"",
hq:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.dV().cT()
if(v>=w)return H.l(x,v)
x[v]=(u-0.5)*c}y=G.cR(z,a.d,0,a.e.x)
y.aG(x)
return y},
fH:{"^":"fG;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cW:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.at("size change "+H.d(y)+" "+H.d(x))
this.c1(y,x)
J.ew(this.go.a,0,0,y,x)},"$1","gcV",4,0,18]}}],["","",,V,{}],["","",,B,{"^":"",
h2:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=h+1
y=g+1
x=B.hi(B.fE(new B.h3(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.p([],[G.f_])
v=H.p([],[G.cI])
u=[T.u]
t=H.p([],u)
s=new G.f4(!1,w,v,t,P.a1(P.f,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.O)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.h(q[p],"$isu")
v.toString
o=new T.u(new Float32Array(3))
o.C(v)
C.a.l(t,o)}}s.c4(z,y,!1)
s.c5(z,y)
n=$.Z().h(0,"aNormal")
switch(n.a){case"vec2":s.e.i(0,"aNormal",H.p([],[T.aw]))
break
case"vec3":s.e.i(0,"aNormal",H.p([],u))
break
case"vec4":s.e.i(0,"aNormal",H.p([],[T.ax]))
break
case"float":s.e.i(0,"aNormal",H.p([],[P.U]))
break
case"uvec4":s.e.i(0,"aNormal",H.p([],[[P.a,P.B]]))
break}for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.O)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.l(q,o)
o=H.h(q[o],"$isu")
m=H.x(v.h(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.u(new Float32Array(3))
t.C(o);(m&&C.a).l(m,t)}}return s},
hi:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.u]
H.x(a,"$isa",z,"$asa")
y=H.p([],[[P.a,T.u]])
x=new Float32Array(3)
w=new T.u(x)
v=new Float32Array(3)
u=new T.u(v)
t=new Float32Array(3)
s=new T.u(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.l(a,n)
m=a[n]
l=H.p([],z)
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
t[2]=j*i}u.N(0)
s.N(0)
for(h=0;h<r;++h){g=h/b*2*3.141592653589793
f=c*Math.cos(g)
e=c*Math.sin(g)
w.C(o)
w.a0(u,f)
w.a0(s,e)
p=new T.u(new Float32Array(3))
p.C(w)
C.a.l(l,p)
x[2]=0
x[1]=0
x[0]=0
w.a0(u,f)
w.a0(s,e)
w.N(0)
p=new T.u(new Float32Array(3))
p.C(w)
C.a.l(l,p)}}return y},
fE:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.j(a,{func:1,ret:-1,args:[P.U,T.u]})
z=H.p([],[T.u])
y=new T.u(new Float32Array(3))
x=new T.u(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.aD(0,y)
t=new T.u(new Float32Array(3))
t.C(y)
C.a.l(z,t)
t=new T.u(new Float32Array(3))
t.C(x)
C.a.l(z,t)}return z},
h3:{"^":"n:19;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sI(0,y*v)
b.sH(0,y*u)
b.sO(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",ff:{"^":"b;a,b,c",
c7:function(a){var z,y
a=document
z=W.aJ
y={func:1,ret:-1,args:[z]}
W.ap(a,"keydown",H.j(new D.fh(this),y),!1,z)
W.ap(a,"keyup",H.j(new D.fi(this),y),!1,z)},
p:{
fg:function(a){var z=P.B
z=new D.ff(P.ad(null,null,null,z),P.ad(null,null,null,z),P.ad(null,null,null,z))
z.c7(a)
return z}}},fh:{"^":"n:9;a",
$1:function(a){var z
H.h(a,"$isaJ")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},fi:{"^":"n:9;a",
$1:function(a){var z
H.h(a,"$isaJ")
z=this.a
z.a.bz(0,a.which)
z.c.l(0,a.which)}},ft:{"^":"b;a,b,c,d,e,f,r,x",
c8:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbv(a)
x=H.o(y,0)
W.ap(y.a,y.b,H.j(new D.fv(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbu(a)
y=H.o(x,0)
W.ap(x.a,x.b,H.j(new D.fw(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbw(a)
x=H.o(y,0)
W.ap(y.a,y.b,H.j(new D.fx(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbx(a)
x=H.o(z,0)
W.ap(z.a,z.b,H.j(new D.fy(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
fu:function(a){var z=P.B
z=new D.ft(P.ad(null,null,null,z),P.ad(null,null,null,z),P.ad(null,null,null,z),0,0,0,0,0)
z.c8(a)
return z}}},fv:{"^":"n:3;a",
$1:function(a){var z,y
H.h(a,"$isM")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.K(y.gbt(a).a)
z.x=H.K(y.gbt(a).b)
z.d=a.movementX
z.e=a.movementY}},fw:{"^":"n:3;a",
$1:function(a){var z
H.h(a,"$isM")
a.preventDefault()
P.at("BUTTON "+H.d(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},fx:{"^":"n:3;a",
$1:function(a){var z
H.h(a,"$isM")
a.preventDefault()
z=this.a
z.a.bz(0,a.button)
z.c.l(0,a.button)}},fy:{"^":"n:20;a",
$1:function(a){H.h(a,"$isay")
a.preventDefault()
this.a.f=H.K(C.a1.gcJ(a))}},fD:{"^":"eD;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bH:function(a){var z,y
z=C.h.cO(H.x(a,"$isi",[P.b],"$asi"),0,new A.ja(),P.B)
if(typeof z!=="number")return H.as(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ja:{"^":"n:21;",
$2:function(a,b){var z,y
H.K(a)
z=J.a8(b)
if(typeof a!=="number")return a.D()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ae:{"^":"b;a",
C:function(a){var z,y
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
k:function(a){return"[0] "+this.V(0).k(0)+"\n[1] "+this.V(1).k(0)+"\n[2] "+this.V(2).k(0)+"\n[3] "+this.V(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.l(z,b)
return z[b]},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ae){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gt:function(a){return A.bH(this.a)},
V:function(a){var z,y,x
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
P:function(){var z=this.a
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
z[15]=1}},aw:{"^":"b;a",
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aw){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gt:function(a){return A.bH(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.l(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gI:function(a){return this.a[0]},
gH:function(a){return this.a[1]}},u:{"^":"b;a",
a3:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
C:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.u){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gt:function(a){return A.bH(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.l(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gao())},
gao:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
N:function(a){var z,y,x
z=Math.sqrt(this.gao())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
al:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bk:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.u(new Float32Array(3))
z.a3(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a0:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aD:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
sI:function(a,b){this.a[0]=b
return b},
sH:function(a,b){this.a[1]=b
return b},
sO:function(a,b){this.a[2]=b
return b},
gI:function(a){return this.a[0]},
gH:function(a){return this.a[1]},
gO:function(a){return this.a[2]}},ax:{"^":"b;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
v:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ax){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gt:function(a){return A.bH(this.a)},
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
gI:function(a){return this.a[0]},
gH:function(a){return this.a[1]},
gO:function(a){return this.a[2]},
gbT:function(a){return this.a[3]}}}],["","",,M,{"^":"",
dB:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z={}
y=document
x=H.h(C.C.cU(y,"#webgl-canvas"),"$isbT")
$.cc=1
w=new G.eG(x)
v=P.f
u=P.b
t=(x&&C.t).ar(x,"webgl2",P.cO(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],v,u))
w.a=t
if(t==null)H.a7(P.cH('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.d(J.eh(t))
if($.cc>0)P.at("I: "+s)
J.e3(t,0,0,0,1)
J.bl(t,2929)
t=y.body
s=new Float32Array(3)
r=D.fg(null)
t=D.fu(t)
q=new T.ae(new Float32Array(16))
q.P()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new D.fD(5,0,0,0,new T.u(s),-0.02,r,t,q,new T.u(p),new T.u(o),new T.u(n),new T.u(new Float32Array(3)),"camera:orbit",!1,!0)
t=new T.ae(new Float32Array(16))
t.P()
s=new T.ae(new Float32Array(16))
s.P()
l=new R.fH(x,w,m,50,1,0.1,1000,t,s,new T.ae(new Float32Array(16)),P.a1(v,u),"perspective",!1,!0)
l.aL()
l.cW(null)
t=W.V
W.ap(window,"resize",H.j(l.gcV(),{func:1,ret:-1,args:[t]}),!1,t)
k=G.cW("basic",w,$.dX(),$.dW())
t=P.a1(v,u)
t.i(0,"cDepthTest",!0)
t.i(0,"cDepthWrite",!0)
t.i(0,"cBlendEquation",$.dH())
s=$.dK()
t.i(0,"cStencilFunc",s)
r=new T.ae(new Float32Array(16))
r.P()
t.i(0,"uModelMatrix",r)
j=B.h2(!0,!0,1,2,3,1,128,16,0.4,!1)
i=G.cR("torusknot",k.d,4,k.e.x)
i.aG(G.cJ(j.d,null))
r=H.x(j.c3(),"$isa",[P.B],"$asa")
q=i.d
i.y=J.bN(q.a)
p=i.ch.length
if(p<768){i.sad(new Uint8Array(H.bz(r)))
i.Q=5121}else if(p<196608){i.sad(new Uint16Array(H.bz(r)))
i.Q=5123}else{i.sad(new Uint32Array(H.bz(r)))
i.Q=5125}J.bk(q.a,i.e)
r=i.y
p=i.cx
J.bL(q.a,34963,r)
J.cm(q.a,34963,p,35048)
G.hY(j,i)
h=G.cW("basic",w,$.dZ(),$.dY())
r=$.dG()
u=P.a1(v,u)
u.i(0,"cDepthTest",!0)
u.i(0,"cDepthWrite",!1)
u.i(0,"cBlendEquation",r)
u.i(0,"cStencilFunc",s)
g=y.createElement("canvas")
g.width=64
g.height=64
f=H.h(C.t.bV(g,"2d"),"$isbU")
e=(f&&C.p).bh(f,32,32,1,32,32,22);(e&&C.m).a_(e,0,"gray")
C.m.a_(e,1,"black")
f.fillStyle=e
C.p.cN(f,0,0,64,64)
e=C.p.bh(f,32,32,1,32,32,6);(e&&C.m).a_(e,0,"white")
C.m.a_(e,1,"gray")
f.globalAlpha=0.9
f.fillStyle=e
f.arc(32,32,4,0,6.283185307179586,!1)
f.fill()
y=J.e6(w.a)
J.b3(w.a,3553,y)
J.em(w.a,37440,1)
J.b3(w.a,3553,y)
J.eo(w.a,3553,0,6408,6408,5121,g)
J.cq(w.a,3553,10240,9729)
J.cq(w.a,3553,10241,9729)
J.ei(w.a)
J.b3(w.a,3553,null)
u.i(0,"uTexture",new G.f7(g,"Utils::Particles",y,3553,w,new G.hh(!1,!1,!1,!0,1,9729,9729)))
u.i(0,"uPointSize",1000)
y=new T.ae(new Float32Array(16))
y.P()
u.i(0,"uModelMatrix",y)
d=R.hq(h,2000,100)
z.a=0
new M.jl(z,m,k,i,l,new G.cQ(t,"torus-mat",!1,!0),h,d,new G.cQ(u,"stars",!1,!0)).$1(0)},
jl:{"^":"n:22;a,b,c,d,e,f,r,x,y",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
H.cf(b1)
if(typeof b1!=="number")return b1.aC()
this.a.a=b1+0
z=this.b
z.go+=0.003
y=z.r1
x=y.a
if(x.E(0,0)||x.E(0,1)){x=z.go
w=y.d
if(typeof w!=="number")return w.az()
z.go=x+w*0.01
w=z.id
x=y.e
if(typeof x!=="number")return x.az()
z.id=w+x*0.01}x=z.k4
w=x.a
if(w.E(0,37))z.go+=0.03
else if(w.E(0,39))z.go-=0.03
if(w.E(0,38))z.id+=0.03
else if(w.E(0,40))z.id-=0.03
if(w.E(0,33))z.fy*=0.99
else if(w.E(0,34))z.fy*=1.01
if(w.E(0,32)){z.go=0
z.id=0}w=y.f
if(typeof w!=="number")return w.az()
w=z.fy-w*z.k3
if(w>0)z.fy=w
w=C.q.cG(z.id,-1.4707963267948965,1.4707963267948965)
z.id=w
v=z.fy
u=z.go
t=v*Math.cos(w)
s=Math.cos(u)
w=Math.sin(w)
u=Math.sin(u)
r=z.d.a
r[12]=t*s
r[13]=v*w
r[14]=t*u
u=z.k2
w=u.a
r[12]=r[12]+w[0]
r[13]=r[13]+w[1]
r[14]=r[14]+w[2]
q=r[12]
p=r[13]
o=r[14]
n=new T.u(new Float32Array(3))
n.a3(0,1,0)
w=z.e
v=w.a
v[0]=r[12]
v[1]=r[13]
v[2]=r[14]
v=new Float32Array(3)
m=new T.u(v)
m.C(w)
m.aD(0,u)
m.N(0)
l=n.bk(m)
l.N(0)
k=m.bk(l)
k.N(0)
u=l.al(w)
s=k.al(w)
w=m.al(w)
j=l.a
i=j[0]
h=k.a
g=h[0]
f=v[0]
e=j[1]
d=h[1]
c=v[1]
j=j[2]
h=h[2]
v=v[2]
r[15]=1
r[14]=-w
r[13]=-s
r[12]=-u
r[11]=0
r[10]=v
r[9]=h
r[8]=j
r[7]=0
r[6]=c
r[5]=d
r[4]=e
r[3]=0
r[2]=f
r[1]=g
r[0]=i
r[12]=q
r[13]=p
r[14]=o
i=z.f
g=i.a
g[0]=r[2]
g[1]=r[6]
g[2]=r[10]
z=-z.k1
b=Math.sqrt(i.gao())
q=g[0]/b
p=g[1]/b
o=g[2]/b
a=Math.cos(z)
a0=Math.sin(z)
a1=1-a
a2=q*q*a1+a
z=o*a0
a3=q*p*a1-z
g=p*a0
a4=q*o*a1+g
a5=p*q*a1+z
a6=p*p*a1+a
z=q*a0
a7=p*o*a1-z
a8=o*q*a1-g
a9=o*p*a1+z
b0=o*o*a1+a
z=r[0]
g=r[4]
i=r[8]
f=r[1]
e=r[5]
d=r[9]
c=r[2]
j=r[6]
h=r[10]
v=r[3]
u=r[7]
s=r[11]
r[0]=z*a2+g*a5+i*a8
r[1]=f*a2+e*a5+d*a8
r[2]=c*a2+j*a5+h*a8
r[3]=v*a2+u*a5+s*a8
r[4]=z*a3+g*a6+i*a9
r[5]=f*a3+e*a6+d*a9
r[6]=c*a3+j*a6+h*a9
r[7]=v*a3+u*a6+s*a9
r[8]=z*a4+g*a7+i*b0
r[9]=f*a4+e*a7+d*b0
r[10]=c*a4+j*a7+h*b0
r[11]=v*a4+u*a7+s*b0
x.c.T(0)
x.b.T(0)
y.e=0
y.d=0
y.f=0
y.c.T(0)
y.b.T(0)
y=this.e
x=[G.bw]
this.c.aI(this.d,H.p([y,this.f],x))
this.r.aI(this.x,H.p([y,this.y],x))
C.a2.gcB(window).bD(this,-1)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cK.prototype
return J.fd.prototype}if(typeof a=="string")return J.ba.prototype
if(a==null)return J.cL.prototype
if(typeof a=="boolean")return J.fc.prototype
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.b)return a
return J.bG(a)}
J.aY=function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.b)return a
return J.bG(a)}
J.j4=function(a){if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.b)return a
return J.bG(a)}
J.j5=function(a){if(typeof a=="number")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aQ.prototype
return a}
J.j6=function(a){if(typeof a=="number")return J.b9.prototype
if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aQ.prototype
return a}
J.j7=function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aQ.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.b)return a
return J.bG(a)}
J.bF=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.aQ.prototype
return a}
J.aD=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).v(a,b)}
J.a_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.j5(a).L(a,b)}
J.b2=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ji(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aY(a).h(a,b)}
J.cj=function(a,b){return J.j7(a).a7(a,b)}
J.ck=function(a,b){return J.k(a).b5(a,b)}
J.e_=function(a,b,c,d){return J.k(a).cA(a,b,c,d)}
J.cl=function(a,b,c){return J.k(a).b6(a,b,c)}
J.e0=function(a,b){return J.k(a).cC(a,b)}
J.bL=function(a,b,c){return J.k(a).b7(a,b,c)}
J.b3=function(a,b,c){return J.k(a).b9(a,b,c)}
J.bk=function(a,b){return J.k(a).cF(a,b)}
J.e1=function(a,b){return J.k(a).ba(a,b)}
J.e2=function(a,b,c){return J.k(a).bb(a,b,c)}
J.cm=function(a,b,c,d){return J.k(a).bc(a,b,c,d)}
J.e3=function(a,b,c,d,e){return J.k(a).bd(a,b,c,d,e)}
J.e4=function(a,b){return J.j6(a).G(a,b)}
J.bM=function(a,b,c){return J.aY(a).cH(a,b,c)}
J.bN=function(a){return J.k(a).bf(a)}
J.e5=function(a){return J.k(a).bg(a)}
J.e6=function(a){return J.k(a).bj(a)}
J.e7=function(a){return J.k(a).cI(a)}
J.e8=function(a,b){return J.k(a).bl(a,b)}
J.bO=function(a,b){return J.k(a).bm(a,b)}
J.e9=function(a,b,c,d){return J.k(a).bn(a,b,c,d)}
J.ea=function(a,b,c,d,e){return J.k(a).cK(a,b,c,d,e)}
J.eb=function(a,b,c,d,e){return J.k(a).bo(a,b,c,d,e)}
J.ec=function(a,b,c,d,e,f){return J.k(a).cL(a,b,c,d,e,f)}
J.bl=function(a,b){return J.k(a).bp(a,b)}
J.ed=function(a,b){return J.k(a).bq(a,b)}
J.ee=function(a){return J.k(a).cM(a)}
J.ef=function(a,b){return J.k(a).A(a,b)}
J.a8=function(a){return J.A(a).gt(a)}
J.cn=function(a){return J.j4(a).gw(a)}
J.b4=function(a){return J.aY(a).gj(a)}
J.eg=function(a){return J.bF(a).gbT(a)}
J.bm=function(a){return J.bF(a).gI(a)}
J.bP=function(a){return J.bF(a).gH(a)}
J.co=function(a){return J.bF(a).gO(a)}
J.eh=function(a){return J.k(a).a2(a)}
J.ei=function(a){return J.k(a).as(a)}
J.ej=function(a,b){return J.k(a).at(a,b)}
J.ek=function(a,b,c){return J.k(a).au(a,b,c)}
J.cp=function(a,b,c){return J.k(a).ay(a,b,c)}
J.el=function(a,b){return J.k(a).bs(a,b)}
J.em=function(a,b,c){return J.k(a).by(a,b,c)}
J.en=function(a,b,c,d){return J.k(a).aB(a,b,c,d)}
J.eo=function(a,b,c,d,e,f,g){return J.k(a).bB(a,b,c,d,e,f,g)}
J.cq=function(a,b,c,d){return J.k(a).bC(a,b,c,d)}
J.bn=function(a){return J.A(a).k(a)}
J.ep=function(a,b,c,d){return J.k(a).d_(a,b,c,d)}
J.eq=function(a,b,c){return J.k(a).bG(a,b,c)}
J.er=function(a,b,c){return J.k(a).bH(a,b,c)}
J.bQ=function(a,b,c){return J.k(a).bI(a,b,c)}
J.es=function(a,b,c){return J.k(a).bJ(a,b,c)}
J.cr=function(a,b,c){return J.k(a).bK(a,b,c)}
J.cs=function(a,b,c){return J.k(a).bL(a,b,c)}
J.ct=function(a,b,c){return J.k(a).bM(a,b,c)}
J.cu=function(a,b,c,d){return J.k(a).bN(a,b,c,d)}
J.cv=function(a,b,c,d){return J.k(a).bO(a,b,c,d)}
J.et=function(a,b){return J.k(a).bP(a,b)}
J.eu=function(a,b,c){return J.k(a).d0(a,b,c)}
J.ev=function(a,b,c,d,e,f,g){return J.k(a).bQ(a,b,c,d,e,f,g)}
J.ew=function(a,b,c,d,e){return J.k(a).bS(a,b,c,d,e)}
var $=I.p
C.t=W.bT.prototype
C.m=W.eE.prototype
C.p=W.bU.prototype
C.C=W.f6.prototype
C.D=J.e.prototype
C.a=J.b8.prototype
C.e=J.cK.prototype
C.E=J.cL.prototype
C.q=J.b9.prototype
C.i=J.ba.prototype
C.L=J.bb.prototype
C.h=H.fz.prototype
C.n=H.fB.prototype
C.w=J.fI.prototype
C.r=J.aQ.prototype
C.a1=W.ay.prototype
C.a2=W.hs.prototype
C.B=new P.i1()
C.d=new P.ii()
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.M=new G.z("vec3","vertex btangents",0)
C.c=new G.z("vec3","",0)
C.N=new G.z("vec4","delta from light",0)
C.o=new G.z("","",0)
C.x=new G.z("vec3","vertex coordinates",0)
C.O=new G.z("vec3","vertex binormals",0)
C.y=new G.z("vec4","for wireframe",0)
C.P=new G.z("vec4","per vertex color",0)
C.Q=new G.z("float","for normal maps",0)
C.j=new G.z("mat4","",0)
C.S=new G.z("mat4","",4)
C.R=new G.z("mat4","",128)
C.b=new G.z("float","",0)
C.T=new G.z("float","",4)
C.U=new G.z("float","depth for shadowmaps",0)
C.f=new G.z("sampler2D","",0)
C.V=new G.z("float","for bump maps",0)
C.W=new G.z("vec2","texture uvs",0)
C.X=new G.z("float","time since program start in sec",0)
C.k=new G.z("vec2","",0)
C.Y=new G.z("samplerCube","",0)
C.l=new G.z("vec4","",0)
C.Z=new G.z("vec3","vertex normals",0)
C.a_=new G.z("sampler2DShadow","",0)
C.z=new G.z("vec3","per vertex color",0)
C.A=new G.z("mat3","",0)
C.a0=new G.z("vec3","vertex tangents",0)
$.a0=0
$.aF=null
$.cx=null
$.c4=!1
$.dz=null
$.du=null
$.dE=null
$.bD=null
$.bI=null
$.cd=null
$.aA=null
$.aS=null
$.aT=null
$.c5=!1
$.G=C.d
$.cE=null
$.cD=null
$.cC=null
$.cB=null
$.cc=0
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
I.$lazy(y,x,w)}})(["jH","dJ",function(){return H.dy("_$dart_dartClosure")},"kk","ch",function(){return H.dy("_$dart_js")},"l4","dL",function(){return H.a2(H.bv({
toString:function(){return"$receiver$"}}))},"l5","dM",function(){return H.a2(H.bv({$method$:null,
toString:function(){return"$receiver$"}}))},"l6","dN",function(){return H.a2(H.bv(null))},"l7","dO",function(){return H.a2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"la","dR",function(){return H.a2(H.bv(void 0))},"lb","dS",function(){return H.a2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"l9","dQ",function(){return H.a2(H.d2(null))},"l8","dP",function(){return H.a2(function(){try{null.$method$}catch(z){return z.message}}())},"ld","dU",function(){return H.a2(H.d2(void 0))},"lc","dT",function(){return H.a2(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ln","ci",function(){return P.hv()},"lz","b1",function(){return[]},"jE","dI",function(){return{}},"kU","dK",function(){return new G.d1(1281,0,4294967295)},"jA","dH",function(){return G.d0(1281,1281,1281)},"jz","dG",function(){return G.d0(32774,770,769)},"lx","Z",function(){return P.cO(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.z,"aColorAlpha",C.P,"aPosition",C.x,"aTexUV",C.W,"aNormal",C.Z,"aBinormal",C.O,"aCenter",C.y,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a0,"aBitangent",C.M,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.x,"vPositionFromLight",C.N,"vCenter",C.y,"vDepth",C.U,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a_,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.Y,"uAnimationTable",C.f,"uTime",C.X,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.R,"uLightDescs",C.S,"uLightCount",C.b,"uLightTypes",C.T,"uBumpScale",C.V,"uNormalScale",C.Q],P.f,G.z)},"lh","dV",function(){return C.B},"lG","dZ",function(){var z,y
z=G.bu("PointSpritesV")
y=[P.f]
z.aE(H.p(["aPosition"],y))
z.a5(H.p(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.a6(H.p(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"lF","dY",function(){var z,y
z=G.bu("PointSpritesF")
y=[P.f]
z.a5(H.p(["uTexture"],y))
z.a6(H.p(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"lD","dX",function(){var z,y
z=G.bu("demoVertexShader")
y=[P.f]
z.aE(H.p(["aPosition"],y))
z.aF(H.p(["vColor"],y))
z.a5(H.p(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b=z.aM(!1,H.x(H.p(["void main(void) {\n    gl_Position = uPerspectiveViewMatrix *\n                  uModelMatrix *\n                  vec4(aPosition, 1.0);\n    vColor.r = sin(aPosition.x)/2.0+0.5;\n    vColor.g = cos(aPosition.y)/2.0+0.5;\n    vColor.b = sin(aPosition.z)/2.0+0.5;\n}\n"],y),"$isa",y,"$asa"),null)
return z},"lC","dW",function(){var z,y
z=G.bu("demoFragmentShader")
y=[P.f]
z.aF(H.p(["vColor"],y))
z.a6(H.p(["oFragColor.rgb = vColor;"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.F,args:[W.M]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.f,args:[P.B]},{func:1,ret:P.F,args:[W.aJ]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.X]},{func:1,ret:[P.a3,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.V]},{func:1,ret:-1,args:[W.V]},{func:1,ret:-1,args:[P.U,T.u]},{func:1,ret:P.F,args:[W.ay]},{func:1,ret:P.B,args:[P.B,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.jr(d||a)
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
Isolate.aX=a.aX
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
if(typeof dartMainRunner==="function")dartMainRunner(M.dB,[])
else M.dB([])})})()
//# sourceMappingURL=simple.dart.js.map
