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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cr(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",lq:{"^":"c;a"}}],["","",,J,{"^":"",
cv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bX:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cu==null){H.ko()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.dA("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cy()]
if(v!=null)return v
v=H.kt(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cy(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
h:{"^":"c;",
B:function(a,b){return a===b},
gv:function(a){return H.aZ(a)},
k:["co",function(a){return"Instance of '"+H.b_(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h1:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isO:1},
h2:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isF:1},
cg:{"^":"h;",
gv:function(a){return 0},
k:["cq",function(a){return String(a)}]},
hA:{"^":"cg;"},
b1:{"^":"cg;"},
bn:{"^":"cg;",
k:function(a){var z=a[$.ek()]
if(z==null)return this.cq(a)
return"JavaScript function for "+H.e(J.bg(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbi:1},
bk:{"^":"h;$ti",
l:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.Y(P.y("add"))
a.push(b)},
H:function(a,b){var z,y
H.v(b,"$isi",[H.p(a,0)],"$asi")
if(!!a.fixed$length)H.Y(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.M)(b),++y)a.push(b[y])},
a1:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
bo:function(a,b){var z,y
H.l(b,{func:1,ret:P.O,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.ak(a))}return!1},
cj:function(a,b){if(!!a.immutable$list)H.Y(P.y("sort"))
H.hY(a,J.k_(),H.p(a,0))},
af:function(a){return this.cj(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aF(a[z],b))return!0
return!1},
k:function(a){return P.ce(a,"[","]")},
gw:function(a){return new J.fh(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.aZ(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.b8(a,b))
return a[b]},
i:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.Y(P.y("indexed set"))
if(b>=a.length||b<0)throw H.b(H.b8(a,b))
a[b]=c},
$isu:1,
$asu:I.b9,
$isi:1,
$isa:1,
p:{
h0:function(a,b){return J.cf(H.m(a,[b]))},
cf:function(a){H.bu(a)
a.fixed$length=Array
return a},
lo:[function(a,b){return J.eI(H.ed(a,"$isT"),H.ed(b,"$isT"))},"$2","k_",8,0,29]}},
lp:{"^":"bk;$ti"},
fh:{"^":"c;a,b,c,0d,$ti",
sb3:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.M(z))
x=this.c
if(x>=y){this.sb3(null)
return!1}this.sb3(z[x]);++this.c
return!0},
$isaU:1},
bl:{"^":"h;",
K:function(a,b){var z
H.cw(b)
if(typeof b!=="number")throw H.b(H.b6(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gab(b)
if(this.gab(a)===z)return 0
if(this.gab(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gab:function(a){return a===0?1/a<0:a<0},
bY:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.y(""+a+".toInt()"))},
dr:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.y(""+a+".ceil()"))},
ds:function(a,b,c){if(this.K(b,c)>0)throw H.b(H.b6(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dW:function(a,b){var z
if(b>20)throw H.b(P.as(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gab(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
ct:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bl(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.bl(a,b)},
bl:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bj:function(a,b){var z
if(a>0)z=this.dc(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dc:function(a,b){return b>31?0:a>>>b},
R:function(a,b){if(typeof b!=="number")throw H.b(H.b6(b))
return a>b},
$isT:1,
$asT:function(){return[P.E]},
$isU:1,
$isE:1},
d8:{"^":"bl;",$isB:1},
d7:{"^":"bl;"},
bm:{"^":"h;",
al:function(a,b){if(b>=a.length)throw H.b(H.b8(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.t(b)
if(typeof b!=="string")throw H.b(P.cP(b,null,null))
return a+b},
cl:function(a,b,c){var z
if(c>a.length)throw H.b(P.as(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ck:function(a,b){return this.cl(a,b,0)},
cn:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bH(b,null,null))
if(b>c)throw H.b(P.bH(b,null,null))
if(c>a.length)throw H.b(P.bH(c,null,null))
return a.substring(b,c)},
cm:function(a,b){return this.cn(a,b,null)},
dV:function(a){return a.toLowerCase()},
dt:function(a,b,c){if(c>a.length)throw H.b(P.as(c,0,a.length,null,null))
return H.kz(a,b,c)},
K:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.b(H.b6(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.b(H.b8(a,b))
return a[b]},
$isu:1,
$asu:I.b9,
$isT:1,
$asT:function(){return[P.d]},
$ishx:1,
$isd:1}}],["","",,H,{"^":"",
fY:function(){return new P.bJ("No element")},
h_:function(){return new P.bJ("Too many elements")},
fZ:function(){return new P.bJ("Too few elements")},
hY:function(a,b,c){H.v(a,"$isa",[c],"$asa")
H.l(b,{func:1,ret:P.B,args:[c,c]})
H.bp(a,0,J.ad(a)-1,b,c)},
bp:function(a,b,c,d,e){H.v(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.hX(a,b,c,d,e)
else H.hW(a,b,c,d,e)},
hX:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.aN(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a6(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hW:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isa",[a2],"$asa")
H.l(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.d.U(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.U(b+a0,2)
v=w-z
u=w+z
t=J.aN(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
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
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.aF(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a3()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.R()
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
if(typeof e!=="number")return e.a3()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.R()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.R()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a3()
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
H.bp(a,b,m-2,a1,a2)
H.bp(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aF(a1.$2(t.h(a,m),r),0);)++m
for(;J.aF(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a3()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bp(a,m,l,a1,a2)}else H.bp(a,m,l,a1,a2)},
d_:{"^":"i;"},
bo:{"^":"d_;$ti",
gw:function(a){return new H.dc(this,this.gj(this),0,[H.ct(this,"bo",0)])},
aD:function(a,b){return this.cp(0,H.l(b,{func:1,ret:P.O,args:[H.ct(this,"bo",0)]}))}},
i6:{"^":"bo;a,b,c,$ti",
gcV:function(){var z=J.ad(this.a)
return z},
gdd:function(){var z,y
z=J.ad(this.a)
y=this.b
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.ad(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdd()+b
if(b>=0){y=this.gcV()
if(typeof y!=="number")return H.bb(y)
y=z>=y}else y=!0
if(y)throw H.b(P.D(b,this,"index",null,null))
return J.cF(this.a,z)},
dU:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.aN(y)
w=x.gj(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.m(u,this.$ti)
for(s=0;s<v;++s){C.a.i(t,s,x.q(y,z+s))
if(x.gj(y)<w)throw H.b(P.ak(this))}return t},
p:{
i7:function(a,b,c,d){return new H.i6(a,b,c,[d])}}},
dc:{"^":"c;a,b,c,0d,$ti",
sb4:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aN(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.ak(z))
w=this.c
if(w>=x){this.sb4(null)
return!1}this.sb4(y.q(z,w));++this.c
return!0},
$isaU:1},
hd:{"^":"bo;a,b,$ti",
gj:function(a){return J.ad(this.a)},
q:function(a,b){return this.b.$1(J.cF(this.a,b))},
$asbo:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dB:{"^":"i;a,b,$ti",
gw:function(a){return new H.ip(J.bz(this.a),this.b,this.$ti)}},
ip:{"^":"aU;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bF:{"^":"c;$ti"}}],["","",,H,{"^":"",
aE:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kg:function(a){return init.types[H.L(a)]},
kr:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isw},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bg(a)
if(typeof z!=="string")throw H.b(H.b6(a))
return z},
aZ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b_:function(a){return H.hB(a)+H.bQ(H.ah(a),0,null)},
hB:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isb1){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aE(w.length>1&&C.i.al(w,0)===36?C.i.cm(w,1):w)},
aH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hI:function(a){var z=H.aH(a).getFullYear()+0
return z},
hG:function(a){var z=H.aH(a).getMonth()+1
return z},
hC:function(a){var z=H.aH(a).getDate()+0
return z},
hD:function(a){var z=H.aH(a).getHours()+0
return z},
hF:function(a){var z=H.aH(a).getMinutes()+0
return z},
hH:function(a){var z=H.aH(a).getSeconds()+0
return z},
hE:function(a){var z=H.aH(a).getMilliseconds()+0
return z},
bb:function(a){throw H.b(H.b6(a))},
j:function(a,b){if(a==null)J.ad(a)
throw H.b(H.b8(a,b))},
b8:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.L(J.ad(a))
if(!(b<0)){if(typeof z!=="number")return H.bb(z)
y=b>=z}else y=!0
if(y)return P.D(b,a,"index",null,z)
return P.bH(b,"index",null)},
b6:function(a){return new P.aG(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.dk()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eg})
z.name=""}else z.toString=H.eg
return z},
eg:function(){return J.bg(this.dartException)},
Y:function(a){throw H.b(a)},
M:function(a){throw H.b(P.ak(a))},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kB(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bj(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ch(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dj(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.em()
u=$.en()
t=$.eo()
s=$.ep()
r=$.es()
q=$.et()
p=$.er()
$.eq()
o=$.ev()
n=$.eu()
m=v.I(y)
if(m!=null)return z.$1(H.ch(H.t(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.ch(H.t(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dj(H.t(y),m))}}return z.$1(new H.ik(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dq()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dq()
return a},
ba:function(a){var z
if(a==null)return new H.dR(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dR(a)},
kc:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kq:function(a,b,c,d,e,f){H.f(a,"$isbi")
switch(H.L(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.d3("Unsupported number of arguments for wrapped closure"))},
b7:function(a,b){var z
H.L(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kq)
a.$identity=z
return z},
fs:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hN(z).r}else x=d
w=e?Object.create(new H.hZ().constructor.prototype):Object.create(new H.c8(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a7
if(typeof u!=="number")return u.G()
$.a7=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cU(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kg,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cS:H.c9
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cU(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fp:function(a,b,c,d){var z=H.c9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cU:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fr(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fp(y,!w,z,b)
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
fq:function(a,b,c,d){var z,y
z=H.c9
y=H.cS
switch(b?-1:a){case 0:throw H.b(H.hR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fr:function(a,b){var z,y,x,w,v,u,t,s
z=$.aQ
if(z==null){z=H.bC("self")
$.aQ=z}y=$.cR
if(y==null){y=H.bC("receiver")
$.cR=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fq(w,!u,x,b)
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
cr:function(a,b,c,d,e,f,g){return H.fs(a,b,H.L(c),d,!!e,!!f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a2(a,"String"))},
e5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a2(a,"double"))},
cw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a2(a,"num"))},
bT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a2(a,"bool"))},
L:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a2(a,"int"))},
cx:function(a,b){throw H.b(H.a2(a,H.aE(H.t(b).substring(3))))},
kx:function(a,b){throw H.b(H.cT(a,H.aE(H.t(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cx(a,b)},
ai:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.kx(a,b)},
ed:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cx(a,b)},
bu:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.b(H.a2(a,"List<dynamic>"))},
ks:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cx(a,b)},
cs:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.L(z)]
else return a.$S()}return},
bt:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cs(J.A(a))
if(z==null)return!1
return H.dX(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.cn)return a
$.cn=!0
try{if(H.bt(a,b))return a
z=H.bv(b)
y=H.a2(a,z)
throw H.b(y)}finally{$.cn=!1}},
bV:function(a,b){if(a!=null&&!H.cq(a,b))H.Y(H.a2(a,H.bv(b)))
return a},
e0:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cs(z)
if(y!=null)return H.bv(y)
return"Closure"}return H.b_(a)},
kA:function(a){throw H.b(new P.fy(H.t(a)))},
e9:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
ah:function(a){if(a==null)return
return a.$ti},
mP:function(a,b,c){return H.aP(a["$as"+H.e(c)],H.ah(b))},
ac:function(a,b,c,d){var z
H.t(c)
H.L(d)
z=H.aP(a["$as"+H.e(c)],H.ah(b))
return z==null?null:z[d]},
ct:function(a,b,c){var z
H.t(b)
H.L(c)
z=H.aP(a["$as"+H.e(b)],H.ah(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.L(b)
z=H.ah(a)
return z==null?null:z[b]},
bv:function(a){return H.aB(a,null)},
aB:function(a,b){var z,y
H.v(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aE(a[0].builtin$cls)+H.bQ(a,1,b)
if(typeof a=="function")return H.aE(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.L(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.e(b[y])}if('func' in a)return H.jZ(a,b)
if('futureOr' in a)return"FutureOr<"+H.aB("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(r<0)return H.j(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aB(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aB(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aB(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aB(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kb(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.aB(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bQ:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.ck("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aB(u,c)}return"<"+z.k(0)+">"},
kf:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cs(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ah(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aP:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aC:function(a,b,c,d){var z,y
H.t(b)
H.bu(c)
H.t(d)
if(a==null)return!1
z=H.ah(a)
y=J.A(a)
if(y[b]==null)return!1
return H.e3(H.aP(y[d],z),null,c,null)},
bw:function(a,b,c,d){H.t(b)
H.bu(c)
H.t(d)
if(a==null)return a
if(H.aC(a,b,c,d))return a
throw H.b(H.cT(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bQ(c,0,null),init.mangledGlobalNames)))},
v:function(a,b,c,d){H.t(b)
H.bu(c)
H.t(d)
if(a==null)return a
if(H.aC(a,b,c,d))return a
throw H.b(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bQ(c,0,null),init.mangledGlobalNames)))},
e3:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.W(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.W(a[y],b,c[y],d))return!1
return!0},
mN:function(a,b,c){return a.apply(b,H.aP(J.A(b)["$as"+H.e(c)],H.ah(b)))},
eb:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="F"||a===-1||a===-2||H.eb(z)}return!1},
cq:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="F"||b===-1||b===-2||H.eb(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cq(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bt(a,b)}z=J.A(a).constructor
y=H.ah(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.W(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cq(a,b))throw H.b(H.a2(a,H.bv(b)))
return a},
W:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.W(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.dX(a,b,c,d)
if('func' in a)return c.builtin$cls==="bi"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.W("type" in a?a.type:null,b,x,d)
else if(H.W(a,b,x,d))return!0
else{if(!('$is'+"aT" in y.prototype))return!1
w=y.prototype["$as"+"aT"]
v=H.aP(w,z?a.slice(1):null)
return H.W(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e3(H.aP(r,z),b,u,d)},
dX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kw(m,b,l,d)},
kw:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.W(c[w],d,a[w],b))return!1}return!0},
mO:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
kt:function(a){var z,y,x,w,v,u
z=H.t($.ea.$1(a))
y=$.bU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.e2.$2(a,z))
if(z!=null){y=$.bU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c_(x)
$.bU[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bZ[z]=x
return x}if(v==="-"){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ee(a,x)
if(v==="*")throw H.b(P.dA(z))
if(init.leafTags[z]===true){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ee(a,x)},
ee:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cv(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c_:function(a){return J.cv(a,!1,null,!!a.$isw)},
kv:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c_(z)
else return J.cv(z,c,null,null)},
ko:function(){if(!0===$.cu)return
$.cu=!0
H.kp()},
kp:function(){var z,y,x,w,v,u,t,s
$.bU=Object.create(null)
$.bZ=Object.create(null)
H.kk()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ef.$1(v)
if(u!=null){t=H.kv(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kk:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aM(C.O,H.aM(C.T,H.aM(C.B,H.aM(C.B,H.aM(C.S,H.aM(C.P,H.aM(C.Q(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ea=new H.kl(v)
$.e2=new H.km(u)
$.ef=new H.kn(t)},
aM:function(a,b){return a(b)||b},
kz:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hM:{"^":"c;a,b,c,d,e,f,r,0x",p:{
hN:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cf(z)
y=z[0]
x=z[1]
return new H.hM(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ie:{"^":"c;a,b,c,d,e,f",
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
if(z==null)z=H.m([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ie(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dx:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hu:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dj:function(a,b){return new H.hu(a,b==null?null:b.method)}}},
h3:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
ch:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h3(a,y,z?null:b.receiver)}}},
ik:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kB:{"^":"n:5;a",
$1:function(a){if(!!J.A(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dR:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa1:1},
n:{"^":"c;",
k:function(a){return"Closure '"+H.b_(this).trim()+"'"},
gcb:function(){return this},
$isbi:1,
gcb:function(){return this}},
ds:{"^":"n;"},
hZ:{"^":"ds;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aE(z)+"'"}},
c8:{"^":"ds;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aZ(this.a)
else y=typeof z!=="object"?J.aj(z):H.aZ(z)
return(y^H.aZ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b_(z)+"'")},
p:{
c9:function(a){return a.a},
cS:function(a){return a.c},
bC:function(a){var z,y,x,w,v
z=new H.c8("self","target","receiver","name")
y=J.cf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ig:{"^":"N;a",
k:function(a){return this.a},
p:{
a2:function(a,b){return new H.ig("TypeError: "+P.bE(a)+": type '"+H.e0(a)+"' is not a subtype of type '"+b+"'")}}},
fn:{"^":"N;a",
k:function(a){return this.a},
p:{
cT:function(a,b){return new H.fn("CastError: "+P.bE(a)+": type '"+H.e0(a)+"' is not a subtype of type '"+b+"'")}}},
hQ:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hR:function(a){return new H.hQ(a)}}},
dy:{"^":"c;a,0b,0c,0d",
ga7:function(){var z=this.b
if(z==null){z=H.bv(this.a)
this.b=z}return z},
k:function(a){return this.ga7()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.ga7())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dy&&this.ga7()===b.ga7()}},
d9:{"^":"dd;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.ao(this,[H.p(this,0)])},
aa:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cS(z,b)}else{y=this.dH(b)
return y}},
dH:function(a){var z=this.d
if(z==null)return!1
return this.az(this.ar(z,J.aj(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a5(w,b)
x=y==null?null:y.b
return x}else return this.dI(b)},
dI:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ar(z,J.aj(a)&0x3ffffff)
x=this.az(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.at()
this.b=z}this.b5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.at()
this.c=y}this.b5(y,b,c)}else{x=this.d
if(x==null){x=this.at()
this.d=x}w=J.aj(b)&0x3ffffff
v=this.ar(x,w)
if(v==null)this.aw(x,w,[this.aj(b,c)])
else{u=this.az(v,b)
if(u>=0)v[u].b=c
else v.push(this.aj(b,c))}}},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.ak(this))
z=z.c}},
b5:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.a5(a,b)
if(z==null)this.aw(a,b,this.aj(b,c))
else z.b=c},
b7:function(){this.r=this.r+1&67108863},
aj:function(a,b){var z,y
z=new H.h8(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b7()
return z},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
k:function(a){return P.de(this)},
a5:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
cT:function(a,b){delete a[b]},
cS:function(a,b){return this.a5(a,b)!=null},
at:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.cT(z,"<non-identifier-key>")
return z},
$isda:1},
h8:{"^":"c;a,b,0c,0d"},
ao:{"^":"d_;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.h9(z,z.r,this.$ti)
y.c=z.e
return y}},
h9:{"^":"c;a,b,0c,0d,$ti",
sb6:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.ak(z))
else{z=this.c
if(z==null){this.sb6(null)
return!1}else{this.sb6(z.a)
this.c=this.c.c
return!0}}},
$isaU:1},
kl:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
km:{"^":"n:13;a",
$2:function(a,b){return this.a(a,b)}},
kn:{"^":"n:14;a",
$1:function(a){return this.a(H.t(a))}}}],["","",,H,{"^":"",
kb:function(a){return J.h0(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bP:function(a){var z,y
if(!!J.A(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.b8(b,a))},
hp:{"^":"h;",
d_:function(a,b,c,d){var z=P.as(b,0,c,d,null)
throw H.b(z)},
ba:function(a,b,c,d){if(b>>>0!==b||b>c)this.d_(a,b,c,d)},
$isih:1,
"%":"DataView;ArrayBufferView;cj|dL|dM|dh|dN|dO|aq"},
cj:{"^":"hp;",
gj:function(a){return a.length},
da:function(a,b,c,d,e){var z,y,x
z=a.length
this.ba(a,b,z,"start")
this.ba(a,c,z,"end")
if(b>c)throw H.b(P.as(b,0,c,null,null))
y=c-b
x=d.length
if(x-e<y)throw H.b(P.bK("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$isu:1,
$asu:I.b9,
$isw:1,
$asw:I.b9},
dh:{"^":"dM;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
i:function(a,b,c){H.e5(c)
H.ab(b,a,a.length)
a[b]=c},
J:function(a,b,c,d,e){this.da(a,b,c,H.v(d,"$isi",[P.U],"$asi"),e)
return},
Z:function(a,b,c,d){return this.J(a,b,c,d,0)},
$asbF:function(){return[P.U]},
$aso:function(){return[P.U]},
$isi:1,
$asi:function(){return[P.U]},
$isa:1,
$asa:function(){return[P.U]},
"%":"Float64Array"},
aq:{"^":"dO;",
i:function(a,b,c){H.L(c)
H.ab(b,a,a.length)
a[b]=c},
J:function(a,b,c,d,e){H.v(d,"$isi",[P.B],"$asi")
this.cr(a,b,c,d,e)},
Z:function(a,b,c,d){return this.J(a,b,c,d,0)},
$asbF:function(){return[P.B]},
$aso:function(){return[P.B]},
$isi:1,
$asi:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
ho:{"^":"dh;",$isaf:1,"%":"Float32Array"},
lz:{"^":"aq;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lA:{"^":"aq;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isfW:1,
"%":"Int32Array"},
lB:{"^":"aq;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lC:{"^":"aq;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hq:{"^":"aq;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ismm:1,
"%":"Uint32Array"},
lD:{"^":"aq;",
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lE:{"^":"aq;",
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dL:{"^":"cj+o;"},
dM:{"^":"dL+bF;"},
dN:{"^":"cj+o;"},
dO:{"^":"dN+bF;"}}],["","",,P,{"^":"",
it:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k6()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b7(new P.iv(z),1)).observe(y,{childList:true})
return new P.iu(z,y,x)}else if(self.setImmediate!=null)return P.k7()
return P.k8()},
mx:[function(a){self.scheduleImmediate(H.b7(new P.iw(H.l(a,{func:1,ret:-1})),0))},"$1","k6",4,0,4],
my:[function(a){self.setImmediate(H.b7(new P.ix(H.l(a,{func:1,ret:-1})),0))},"$1","k7",4,0,4],
mz:[function(a){H.l(a,{func:1,ret:-1})
P.jH(0,a)},"$1","k8",4,0,4],
k2:function(a,b){if(H.bt(a,{func:1,args:[P.c,P.a1]}))return H.l(a,{func:1,ret:null,args:[P.c,P.a1]})
if(H.bt(a,{func:1,args:[P.c]}))return H.l(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.cP(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k1:function(){var z,y
for(;z=$.aL,z!=null;){$.b5=null
y=z.b
$.aL=y
if(y==null)$.b4=null
z.a.$0()}},
mL:[function(){$.co=!0
try{P.k1()}finally{$.b5=null
$.co=!1
if($.aL!=null)$.cz().$1(P.e4())}},"$0","e4",0,0,1],
e_:function(a){var z=new P.dD(H.l(a,{func:1,ret:-1}))
if($.aL==null){$.b4=z
$.aL=z
if(!$.co)$.cz().$1(P.e4())}else{$.b4.b=z
$.b4=z}},
k5:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aL
if(z==null){P.e_(a)
$.b5=$.b4
return}y=new P.dD(a)
x=$.b5
if(x==null){y.b=z
$.b5=y
$.aL=y}else{y.b=x.b
x.b=y
$.b5=y
if(y.b==null)$.b4=y}},
ky:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.H
if(C.e===y){P.bS(null,null,C.e,a)
return}y.toString
P.bS(null,null,y,H.l(y.br(a),z))},
bR:function(a,b,c,d,e){var z={}
z.a=d
P.k5(new P.k3(z,e))},
dY:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.H
if(y===c)return d.$0()
$.H=c
z=y
try{y=d.$0()
return y}finally{$.H=z}},
dZ:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.H
if(y===c)return d.$1(e)
$.H=c
z=y
try{y=d.$1(e)
return y}finally{$.H=z}},
k4:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.H
if(y===c)return d.$2(e,f)
$.H=c
z=y
try{y=d.$2(e,f)
return y}finally{$.H=z}},
bS:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.br(d):c.dm(d,-1)
P.e_(d)},
iv:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iu:{"^":"n:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iw:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ix:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jG:{"^":"c;a,0b,c",
cO:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b7(new P.jI(this,b),0),a)
else throw H.b(P.y("`setTimeout()` not found."))},
p:{
jH:function(a,b){var z=new P.jG(!0,0)
z.cO(a,b)
return z}}},
jI:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iA:{"^":"c;$ti"},
jB:{"^":"iA;a,$ti"},
aK:{"^":"c;0a,b,c,d,e,$ti",
dJ:function(a){if(this.c!==6)return!0
return this.b.b.aB(H.l(this.d,{func:1,ret:P.O,args:[P.c]}),a.a,P.O,P.c)},
dG:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bt(z,{func:1,args:[P.c,P.a1]}))return H.bV(w.dQ(z,a.a,a.b,null,y,P.a1),x)
else return H.bV(w.aB(H.l(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
aa:{"^":"c;bk:a<,b,0d7:c<,$ti",
bX:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.e){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k2(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aa(0,$.H,[c])
w=b==null?1:3
this.b9(new P.aK(x,w,a,b,[z,c]))
return x},
bW:function(a,b){return this.bX(a,null,b)},
b9:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaK")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaa")
z=y.a
if(z<4){y.b9(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bS(null,null,z,H.l(new P.iP(this,a),{func:1,ret:-1}))}},
bh:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaK")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaa")
y=u.a
if(y<4){u.bh(a)
return}this.a=y
this.c=u.c}z.a=this.a6(a)
y=this.b
y.toString
P.bS(null,null,y,H.l(new P.iU(z,this),{func:1,ret:-1}))}},
av:function(){var z=H.f(this.c,"$isaK")
this.c=null
return this.a6(z)},
a6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
am:function(a){var z,y,x
z=H.p(this,0)
H.bV(a,{futureOr:1,type:z})
y=this.$ti
if(H.aC(a,"$isaT",y,"$asaT"))if(H.aC(a,"$isaa",y,null))P.dG(a,this)
else P.iQ(a,this)
else{x=this.av()
H.z(a,z)
this.a=4
this.c=a
P.b3(this,x)}},
bc:function(a,b){var z
H.f(b,"$isa1")
z=this.av()
this.a=8
this.c=new P.V(a,b)
P.b3(this,z)},
$isaT:1,
p:{
iQ:function(a,b){var z,y,x
b.a=1
try{a.bX(new P.iR(b),new P.iS(b),null)}catch(x){z=H.a4(x)
y=H.ba(x)
P.ky(new P.iT(b,z,y))}},
dG:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaa")
if(z>=4){y=b.av()
b.a=a.a
b.c=a.c
P.b3(b,y)}else{y=H.f(b.c,"$isaK")
b.a=2
b.c=a
a.bh(y)}},
b3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isV")
y=y.b
u=v.a
t=v.b
y.toString
P.bR(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isV")
y=y.b
u=r.a
t=r.b
y.toString
P.bR(null,null,y,u,t)
return}o=$.H
if(o!=q)$.H=q
else o=null
y=b.c
if(y===8)new P.iX(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iW(x,b,r).$0()}else if((y&2)!==0)new P.iV(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.A(y).$isaT){if(y.a>=4){n=H.f(t.c,"$isaK")
t.c=null
b=t.a6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dG(y,t)
return}}m=b.b
n=H.f(m.c,"$isaK")
m.c=null
b=m.a6(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.f(u,"$isV")
m.a=8
m.c=u}z.a=m
y=m}}}},
iP:{"^":"n:0;a,b",
$0:function(){P.b3(this.a,this.b)}},
iU:{"^":"n:0;a,b",
$0:function(){P.b3(this.b,this.a.a)}},
iR:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.am(a)}},
iS:{"^":"n:16;a",
$2:function(a,b){H.f(b,"$isa1")
this.a.bc(a,b)},
$1:function(a){return this.$2(a,null)}},
iT:{"^":"n:0;a,b,c",
$0:function(){this.a.bc(this.b,this.c)}},
iX:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bT(H.l(w.d,{func:1}),null)}catch(v){y=H.a4(v)
x=H.ba(v)
if(this.d){w=H.f(this.a.a.c,"$isV").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isV")
else u.b=new P.V(y,x)
u.a=!0
return}if(!!J.A(z).$isaT){if(z instanceof P.aa&&z.gbk()>=4){if(z.gbk()===8){w=this.b
w.b=H.f(z.gd7(),"$isV")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bW(new P.iY(t),null)
w.a=!1}}},
iY:{"^":"n:17;a",
$1:function(a){return this.a}},
iW:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.aB(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a4(t)
y=H.ba(t)
x=this.a
x.b=new P.V(z,y)
x.a=!0}}},
iV:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isV")
w=this.c
if(w.dJ(z)&&w.e!=null){v=this.b
v.b=w.dG(z)
v.a=!1}}catch(u){y=H.a4(u)
x=H.ba(u)
w=H.f(this.a.a.c,"$isV")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.V(y,x)
s.a=!0}}},
dD:{"^":"c;a,0b"},
i2:{"^":"c;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.aa(0,$.H,[P.B])
z.a=0
x=H.p(this,0)
w=H.l(new P.i4(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.i5(z,y),{func:1,ret:-1})
W.aA(this.a,this.b,w,!1,x)
return y}},
i4:{"^":"n;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.p(this.b,0)]}}},
i5:{"^":"n:0;a,b",
$0:function(){this.b.am(this.a.a)}},
i3:{"^":"c;"},
V:{"^":"c;a,b",
k:function(a){return H.e(this.a)},
$isN:1},
jO:{"^":"c;",$ismv:1},
k3:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dk()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
jk:{"^":"jO;",
dR:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.dY(null,null,this,a,-1)}catch(x){z=H.a4(x)
y=H.ba(x)
P.bR(null,null,this,z,H.f(y,"$isa1"))}},
dS:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.dZ(null,null,this,a,b,-1,c)}catch(x){z=H.a4(x)
y=H.ba(x)
P.bR(null,null,this,z,H.f(y,"$isa1"))}},
dm:function(a,b){return new P.jm(this,H.l(a,{func:1,ret:b}),b)},
br:function(a){return new P.jl(this,H.l(a,{func:1,ret:-1}))},
dn:function(a,b){return new P.jn(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bT:function(a,b){H.l(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.dY(null,null,this,a,b)},
aB:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.H===C.e)return a.$1(b)
return P.dZ(null,null,this,a,b,c,d)},
dQ:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.H===C.e)return a.$2(b,c)
return P.k4(null,null,this,a,b,c,d,e,f)}},
jm:{"^":"n;a,b,c",
$0:function(){return this.a.bT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jl:{"^":"n:1;a,b",
$0:function(){return this.a.dR(this.b)}},
jn:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dS(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
db:function(a,b,c){H.bu(a)
return H.v(H.kc(a,new H.d9(0,0,[b,c])),"$isda",[b,c],"$asda")},
a_:function(a,b){return new H.d9(0,0,[a,b])},
a0:function(a,b,c,d){return new P.j5(0,0,[d])},
fX:function(a,b,c){var z,y
if(P.cp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.d])
y=$.bc()
C.a.l(y,a)
try{P.k0(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.dr(b,H.ks(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
ce:function(a,b,c){var z,y,x
if(P.cp(a))return b+"..."+c
z=new P.ck(b)
y=$.bc()
C.a.l(y,a)
try{x=z
x.a=P.dr(x.gT(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gT()+c
y=z.gT()
return y.charCodeAt(0)==0?y:y},
cp:function(a){var z,y
for(z=0;y=$.bc(),z<y.length;++z)if(a===y[z])return!0
return!1},
k0:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
ci:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.M)(a),++x)z.l(0,H.z(a[x],b))
return z},
de:function(a){var z,y,x
z={}
if(P.cp(a))return"{...}"
y=new P.ck("")
try{C.a.l($.bc(),a)
x=y
x.a=x.gT()+"{"
z.a=!0
J.eT(a,new P.hc(z,y))
z=y
z.a=z.gT()+"}"}finally{z=$.bc()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gT()
return z.charCodeAt(0)==0?z:z},
j5:{"^":"j_;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dK(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbs")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbs")!=null}else return this.cR(b)},
cR:function(a){var z=this.d
if(z==null)return!1
return this.aq(this.bf(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cm()
this.b=z}return this.b8(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cm()
this.c=y}return this.b8(y,b)}else return this.cP(0,b)},
cP:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cm()
this.d=z}y=this.bd(b)
x=z[y]
if(x==null)z[y]=[this.au(b)]
else{if(this.aq(x,b)>=0)return!1
x.push(this.au(b))}return!0},
bS:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.d2(0,b)},
d2:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bf(z,b)
x=this.aq(y,b)
if(x<0)return!1
this.bm(y.splice(x,1)[0])
return!0},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.as()}},
b8:function(a,b){H.z(b,H.p(this,0))
if(H.f(a[b],"$isbs")!=null)return!1
a[b]=this.au(b)
return!0},
bi:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbs")
if(z==null)return!1
this.bm(z)
delete a[b]
return!0},
as:function(){this.r=this.r+1&67108863},
au:function(a){var z,y
z=new P.bs(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.as()
return z},
bm:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.as()},
bd:function(a){return J.aj(a)&0x3ffffff},
bf:function(a,b){return a[this.bd(b)]},
aq:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
p:{
cm:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bs:{"^":"c;a,0b,0c"},
dK:{"^":"c;a,b,0c,0d,$ti",
sbb:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.ak(z))
else{z=this.c
if(z==null){this.sbb(null)
return!1}else{this.sbb(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaU:1,
p:{
j6:function(a,b,c){var z=new P.dK(a,b,[c])
z.c=a.e
return z}}},
j_:{"^":"hS;"},
ha:{"^":"j7;",$isi:1,$isa:1},
o:{"^":"c;$ti",
gw:function(a){return new H.dc(a,this.gj(a),0,[H.ac(this,a,"o",0)])},
q:function(a,b){return this.h(a,b)},
dF:function(a,b,c,d){var z,y,x
H.z(b,d)
H.l(c,{func:1,ret:d,args:[d,H.ac(this,a,"o",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.ak(a))}return y},
J:["cr",function(a,b,c,d,e){var z,y,x,w,v
z=H.ac(this,a,"o",0)
H.v(d,"$isi",[z],"$asi")
P.hL(b,c,this.gj(a),null,null,null)
y=c-b
if(y===0)return
if(H.aC(d,"$isa",[z],"$asa")){x=e
w=d}else{w=H.i7(d,e,null,H.ac(C.f,d,"o",0)).dU(0,!1)
x=0}if(x+y>w.length)throw H.b(H.fZ())
if(x<b)for(v=y-1;v>=0;--v){z=x+v
if(z>=w.length)return H.j(w,z)
this.i(a,b+v,w[z])}else for(v=0;v<y;++v){z=x+v
if(z>=w.length)return H.j(w,z)
this.i(a,b+v,w[z])}},function(a,b,c,d){return this.J(a,b,c,d,0)},"Z",null,null,"ge0",13,2,null],
aO:function(a,b,c){H.v(c,"$isi",[H.ac(this,a,"o",0)],"$asi")
this.Z(a,b,b+c.length,c)},
k:function(a){return P.ce(a,"[","]")}},
dd:{"^":"Q;"},
hc:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
Q:{"^":"c;$ti",
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.ac(this,a,"Q",0),H.ac(this,a,"Q",1)]})
for(z=J.bz(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.ad(this.gD(a))},
k:function(a){return P.de(a)},
$isI:1},
hT:{"^":"c;$ti",
H:function(a,b){var z
for(z=J.bz(H.v(b,"$isi",this.$ti,"$asi"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.ce(this,"{","}")},
$isi:1,
$islW:1},
hS:{"^":"hT;"},
j7:{"^":"c+o;"}}],["","",,P,{"^":"",
fL:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.b_(a)+"'"},
bE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bg(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fL(a)},
d3:function(a){return new P.iM(a)},
aD:function(a){H.c0(H.e(a))},
O:{"^":"c;"},
"+bool":0,
bD:{"^":"c;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bD&&this.a===b.a&&!0},
K:function(a,b){return C.d.K(this.a,H.f(b,"$isbD").a)},
gv:function(a){var z=this.a
return(z^C.d.bj(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fz(H.hI(this))
y=P.bh(H.hG(this))
x=P.bh(H.hC(this))
w=P.bh(H.hD(this))
v=P.bh(H.hF(this))
u=P.bh(H.hH(this))
t=P.fA(H.hE(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isT:1,
$asT:function(){return[P.bD]},
p:{
fz:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bh:function(a){if(a>=10)return""+a
return"0"+a}}},
U:{"^":"E;"},
"+double":0,
aR:{"^":"c;a",
R:function(a,b){return C.d.R(this.a,H.f(b,"$isaR").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.d.K(this.a,H.f(b,"$isaR").a)},
k:function(a){var z,y,x,w,v
z=new P.fI()
y=this.a
if(y<0)return"-"+new P.aR(0-y).k(0)
x=z.$1(C.d.U(y,6e7)%60)
w=z.$1(C.d.U(y,1e6)%60)
v=new P.fH().$1(y%1e6)
return""+C.d.U(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isT:1,
$asT:function(){return[P.aR]},
p:{
fG:function(a,b,c,d,e,f){return new P.aR(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fH:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fI:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"c;"},
dk:{"^":"N;",
k:function(a){return"Throw of null."}},
aG:{"^":"N;a,b,c,d",
gao:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gan:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gao()+y+x
if(!this.a)return w
v=this.gan()
u=P.bE(this.b)
return w+v+": "+u},
p:{
cP:function(a,b,c){return new P.aG(!0,a,b,c)}}},
dl:{"^":"aG;e,f,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bH:function(a,b,c){return new P.dl(null,null,!0,a,b,"Value not in range")},
as:function(a,b,c,d,e){return new P.dl(b,c,!0,a,d,"Invalid value")},
hL:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.as(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.as(b,a,c,"end",f))
return b}}},
fV:{"^":"aG;e,j:f>,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y
z=H.L(this.b)
if(typeof z!=="number")return z.a3()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
D:function(a,b,c,d,e){var z=H.L(e==null?J.ad(b):e)
return new P.fV(b,z,!0,a,c,"Index out of range")}}},
il:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.il(a)}}},
ij:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dA:function(a){return new P.ij(a)}}},
bJ:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
bK:function(a){return new P.bJ(a)}}},
ft:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bE(z)+"."},
p:{
ak:function(a){return new P.ft(a)}}},
dq:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isN:1},
fy:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iM:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
bi:{"^":"c;"},
B:{"^":"E;"},
"+int":0,
i:{"^":"c;$ti",
aD:["cp",function(a,b){var z=H.ct(this,"i",0)
return new H.dB(this,H.l(b,{func:1,ret:P.O,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.Y(P.as(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.b(P.D(b,this,"index",null,y))},
k:function(a){return P.fX(this,"(",")")}},
aU:{"^":"c;$ti"},
a:{"^":"c;$ti",$isi:1},
"+List":0,
I:{"^":"c;$ti"},
F:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
E:{"^":"c;",$isT:1,
$asT:function(){return[P.E]}},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.aZ(this)},
k:function(a){return"Instance of '"+H.b_(this)+"'"},
toString:function(){return this.k(this)}},
a1:{"^":"c;"},
d:{"^":"c;",$isT:1,
$asT:function(){return[P.d]},
$ishx:1},
"+String":0,
ck:{"^":"c;T:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dr:function(a,b,c){var z=J.bz(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fJ:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.r
z=new H.dB(new W.a3(y),H.l(new W.fK(),{func:1,ret:P.O,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.Y(H.fY())
w=x.gA(x)
if(x.t())H.Y(H.h_())
return H.f(w,"$isP")},
d2:function(a){H.f(a,"$isK")
return"wheel"},
aS:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eW(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a4(x)}return z},
iJ:function(a,b){return document.createElement(a)},
bO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dJ:function(a,b,c,d){var z,y
z=W.bO(W.bO(W.bO(W.bO(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dW:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iD(a)
if(!!J.A(z).$isK)return z
return}else return H.f(a,"$isK")},
e1:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.e)return a
return z.dn(a,b)},
J:{"^":"P;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kC:{"^":"h;0j:length=","%":"AccessibleNodeList"},
ff:{"^":"J;",
k:function(a){return String(a)},
$isff:1,
"%":"HTMLAnchorElement"},
kD:{"^":"J;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cQ:{"^":"J;",$iscQ:1,"%":"HTMLBaseElement"},
fk:{"^":"h;","%":";Blob"},
bB:{"^":"J;",$isbB:1,"%":"HTMLBodyElement"},
ca:{"^":"J;0n:height=,0m:width=",
aE:function(a,b,c){if(c!=null)return this.cX(a,b,P.k9(c,null))
return this.cY(a,b)},
cc:function(a,b){return this.aE(a,b,null)},
cX:function(a,b,c){return a.getContext(b,c)},
cY:function(a,b){return a.getContext(b)},
$isca:1,
"%":"HTMLCanvasElement"},
fm:{"^":"h;",
a8:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
cb:{"^":"h;",
bA:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dE:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ad:function(a){return P.X(a.getContextAttributes())},
$iscb:1,
"%":"CanvasRenderingContext2D"},
kJ:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fu:{"^":"cc;",$isfu:1,"%":"CSSNumericValue|CSSUnitValue"},
kK:{"^":"fx;0j:length=","%":"CSSPerspective"},
al:{"^":"h;",$isal:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fv:{"^":"iB;0j:length=",
aI:function(a,b){var z=this.cZ(a,this.ak(a,b))
return z==null?"":z},
ak:function(a,b){var z,y
z=$.ej()
y=z[b]
if(typeof y==="string")return y
y=this.de(a,b)
z[b]=y
return y},
de:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fB()+b
if(z in a)return z
return b},
cZ:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fw:{"^":"c;",
gn:function(a){return this.aI(a,"height")},
gm:function(a){return this.aI(a,"width")}},
cc:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fx:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kM:{"^":"cc;0j:length=","%":"CSSTransformValue"},
kN:{"^":"cc;0j:length=","%":"CSSUnparsedValue"},
kP:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fC:{"^":"J;","%":"HTMLDivElement"},
fD:{"^":"r;",
dh:function(a,b){return a.adoptNode(b)},
cd:function(a,b){return a.getElementById(b)},
dM:function(a,b){return a.querySelector(b)},
gbN:function(a){return new W.bq(a,"mousedown",!1,[W.R])},
gbO:function(a){return new W.bq(a,"mousemove",!1,[W.R])},
gbP:function(a){return new W.bq(a,"mouseup",!1,[W.R])},
gbQ:function(a){return new W.bq(a,H.t(W.d2(a)),!1,[W.aJ])},
"%":"XMLDocument;Document"},
kQ:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fE:{"^":"h;",
dw:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kR:{"^":"iF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c,"$isS",[P.E],"$asS")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.S,P.E]]},
$isw:1,
$asw:function(){return[[P.S,P.E]]},
$aso:function(){return[[P.S,P.E]]},
$isi:1,
$asi:function(){return[[P.S,P.E]]},
$isa:1,
$asa:function(){return[[P.S,P.E]]},
$asq:function(){return[[P.S,P.E]]},
"%":"ClientRectList|DOMRectList"},
fF:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aC(b,"$isS",[P.E],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dJ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isS:1,
$asS:function(){return[P.E]},
"%":";DOMRectReadOnly"},
kS:{"^":"iH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.d]},
$isw:1,
$asw:function(){return[P.d]},
$aso:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
kT:{"^":"h;0j:length=","%":"DOMTokenList"},
P:{"^":"r;0dT:tagName=",
gdk:function(a){return new W.iI(a)},
k:function(a){return a.localName},
L:["ag",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d1
if(z==null){z=H.m([],[W.a8])
y=new W.di(z)
C.a.l(z,W.dH(null))
C.a.l(z,W.dS())
$.d1=y
d=y}else d=z
z=$.d0
if(z==null){z=new W.dV(d)
$.d0=z
c=z}else{z.a=d
c=z}}if($.ae==null){z=document
y=z.implementation
y=(y&&C.L).dw(y,"")
$.ae=y
$.cd=y.createRange()
y=$.ae
y.toString
y=y.createElement("base")
H.f(y,"$iscQ")
y.href=z.baseURI
z=$.ae.head;(z&&C.M).F(z,y)}z=$.ae
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbB")}z=$.ae
if(!!this.$isbB)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ae.body;(z&&C.p).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.cd;(z&&C.E).ce(z,x)
z=$.cd
w=(z&&C.E).du(z,b)}else{x.innerHTML=b
w=$.ae.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.ae.body
if(x==null?z!=null:x!==z)J.cI(x)
c.aN(w)
C.t.dh(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dv",null,null,"ge4",5,5,null],
cg:function(a,b,c,d){a.textContent=null
this.F(a,this.L(a,b,c,d))},
cf:function(a,b){return this.cg(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
d3:function(a,b){return a.removeAttribute(b)},
gbN:function(a){return new W.bN(a,"mousedown",!1,[W.R])},
gbO:function(a){return new W.bN(a,"mousemove",!1,[W.R])},
gbP:function(a){return new W.bN(a,"mouseup",!1,[W.R])},
gbQ:function(a){return new W.bN(a,H.t(W.d2(a)),!1,[W.aJ])},
$isP:1,
"%":";Element"},
fK:{"^":"n:18;",
$1:function(a){return!!J.A(H.f(a,"$isr")).$isP}},
kV:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
Z:{"^":"h;",$isZ:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
dg:function(a,b,c,d){H.l(c,{func:1,args:[W.Z]})
if(c!=null)this.cQ(a,b,c,!1)},
cQ:function(a,b,c,d){return a.addEventListener(b,H.b7(H.l(c,{func:1,args:[W.Z]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dP|dQ|dT|dU"},
am:{"^":"fk;",$isam:1,"%":"File"},
lb:{"^":"iO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isam")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.am]},
$isw:1,
$asw:function(){return[W.am]},
$aso:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asq:function(){return[W.am]},
"%":"FileList"},
lc:{"^":"K;0j:length=","%":"FileWriter"},
lf:{"^":"J;0j:length=","%":"HTMLFormElement"},
an:{"^":"h;",$isan:1,"%":"Gamepad"},
fS:{"^":"J;","%":"HTMLHeadElement"},
lg:{"^":"h;0j:length=","%":"History"},
lh:{"^":"j1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$aso:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fT:{"^":"fD;","%":"HTMLDocument"},
li:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lj:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lk:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
ll:{"^":"J;0n:height=,0m:width=","%":"HTMLImageElement"},
ln:{"^":"J;0n:height=,0m:width=","%":"HTMLInputElement"},
aV:{"^":"dz;",$isaV:1,"%":"KeyboardEvent"},
hb:{"^":"h;",
k:function(a){return String(a)},
$ishb:1,
"%":"Location"},
he:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
lv:{"^":"h;0j:length=","%":"MediaList"},
lw:{"^":"j9;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.hg(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hg:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lx:{"^":"ja;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.hh(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hh:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ap:{"^":"h;",$isap:1,"%":"MimeType"},
ly:{"^":"jc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isap")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ap]},
$isw:1,
$asw:function(){return[W.ap]},
$aso:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"MimeTypeArray"},
R:{"^":"dz;",
gbM:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aY(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.A(W.dW(z)).$isP)throw H.b(P.y("offsetX is only supported on elements"))
y=H.f(W.dW(z),"$isP")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.v(new P.aY(u,v,w),"$isaY",w,"$asaY")
if(typeof z!=="number")return z.aS()
if(typeof x!=="number")return x.aS()
return new P.aY(C.u.bY(z-u),C.u.bY(x-v),w)}},
$isR:1,
"%":";DragEvent|MouseEvent"},
a3:{"^":"ha;a",
ga4:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.bK("No elements"))
if(y>1)throw H.b(P.bK("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.v(b,"$isi",[W.r],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.j(y,b)
J.eC(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.d5(z,z.length,-1,[H.ac(C.Y,z,"q",0)])},
J:function(a,b,c,d,e){H.v(d,"$isi",[W.r],"$asi")
throw H.b(P.y("Cannot setRange on Node list"))},
Z:function(a,b,c,d){return this.J(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$aso:function(){return[W.r]},
$asi:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"K;0dL:previousSibling=",
dN:function(a){var z=a.parentNode
if(z!=null)J.bx(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.co(a):z},
F:function(a,b){return a.appendChild(b)},
d4:function(a,b){return a.removeChild(b)},
d5:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hr:{"^":"je;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$aso:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lH:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lJ:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lK:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ar:{"^":"h;0j:length=",$isar:1,"%":"Plugin"},
lM:{"^":"ji;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isar")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ar]},
$isw:1,
$asw:function(){return[W.ar]},
$aso:function(){return[W.ar]},
$isi:1,
$asi:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"PluginArray"},
lO:{"^":"R;0n:height=,0m:width=","%":"PointerEvent"},
hK:{"^":"h;",
du:function(a,b){return a.createContextualFragment(b)},
ce:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lT:{"^":"jo;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.hP(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hP:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lU:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lV:{"^":"J;0j:length=","%":"HTMLSelectElement"},
at:{"^":"K;",$isat:1,"%":"SourceBuffer"},
lX:{"^":"dQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isat")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.at]},
$isw:1,
$asw:function(){return[W.at]},
$aso:function(){return[W.at]},
$isi:1,
$asi:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"SourceBufferList"},
au:{"^":"h;",$isau:1,"%":"SpeechGrammar"},
lY:{"^":"ju;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isw:1,
$asw:function(){return[W.au]},
$aso:function(){return[W.au]},
$isi:1,
$asi:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"SpeechGrammarList"},
av:{"^":"h;0j:length=",$isav:1,"%":"SpeechRecognitionResult"},
m0:{"^":"jx;",
h:function(a,b){return this.bg(a,H.t(b))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d1(a,z)
if(y==null)return
b.$2(y,this.bg(a,y))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.i1(z))
return z},
gj:function(a){return a.length},
bg:function(a,b){return a.getItem(b)},
d1:function(a,b){return a.key(b)},
$asQ:function(){return[P.d,P.d]},
$isI:1,
$asI:function(){return[P.d,P.d]},
"%":"Storage"},
i1:{"^":"n:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aw:{"^":"h;",$isaw:1,"%":"CSSStyleSheet|StyleSheet"},
i8:{"^":"J;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=W.fJ("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a3(y).H(0,new W.a3(z))
return y},
"%":"HTMLTableElement"},
m3:{"^":"J;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga4(z)
x.toString
z=new W.a3(x)
w=z.ga4(z)
y.toString
w.toString
new W.a3(y).H(0,new W.a3(w))
return y},
"%":"HTMLTableRowElement"},
m4:{"^":"J;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga4(z)
y.toString
x.toString
new W.a3(y).H(0,new W.a3(x))
return y},
"%":"HTMLTableSectionElement"},
dt:{"^":"J;",$isdt:1,"%":"HTMLTemplateElement"},
m5:{"^":"h;0m:width=","%":"TextMetrics"},
ax:{"^":"K;",$isax:1,"%":"TextTrack"},
ay:{"^":"K;",$isay:1,"%":"TextTrackCue|VTTCue"},
m6:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isay")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ay]},
$isw:1,
$asw:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isi:1,
$asi:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"TextTrackCueList"},
m7:{"^":"dU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isax")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ax]},
$isw:1,
$asw:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isi:1,
$asi:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"TextTrackList"},
m8:{"^":"h;0j:length=","%":"TimeRanges"},
az:{"^":"h;",$isaz:1,"%":"Touch"},
m9:{"^":"jK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaz")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.az]},
$isw:1,
$asw:function(){return[W.az]},
$aso:function(){return[W.az]},
$isi:1,
$asi:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"TouchList"},
ma:{"^":"h;0j:length=","%":"TrackDefaultList"},
dz:{"^":"Z;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mo:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mr:{"^":"he;0n:height=,0m:width=","%":"HTMLVideoElement"},
ms:{"^":"K;0j:length=","%":"VideoTrackList"},
mt:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mu:{"^":"h;0m:width=","%":"VTTRegion"},
aJ:{"^":"R;",
gdA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.y("deltaY is not supported"))},
$isaJ:1,
"%":"WheelEvent"},
iq:{"^":"K;",
gdj:function(a){var z,y,x
z=P.E
y=new P.aa(0,$.H,[z])
x=H.l(new W.ir(new P.jB(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cW(a)
this.d6(a,W.e1(x,z))
return y},
d6:function(a,b){return a.requestAnimationFrame(H.b7(H.l(b,{func:1,ret:-1,args:[P.E]}),1))},
cW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdC:1,
"%":"DOMWindow|Window"},
ir:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.bV(H.cw(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.Y(P.bK("Future already completed"))
z.am(a)}},
dE:{"^":"r;",$isdE:1,"%":"Attr"},
mA:{"^":"jQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isal")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.al]},
$isw:1,
$asw:function(){return[W.al]},
$aso:function(){return[W.al]},
$isi:1,
$asi:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$asq:function(){return[W.al]},
"%":"CSSRuleList"},
mB:{"^":"fF;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aC(b,"$isS",[P.E],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dJ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mC:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isan")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.an]},
$isw:1,
$asw:function(){return[W.an]},
$aso:function(){return[W.an]},
$isi:1,
$asi:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"GamepadList"},
mH:{"^":"jU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$aso:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mI:{"^":"jW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$isw:1,
$asw:function(){return[W.av]},
$aso:function(){return[W.av]},
$isi:1,
$asi:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"SpeechRecognitionResultList"},
mJ:{"^":"jY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$isw:1,
$asw:function(){return[W.aw]},
$aso:function(){return[W.aw]},
$isi:1,
$asi:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"StyleSheetList"},
iy:{"^":"dd;cU:a<",
C:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.M)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.m([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.f(z[w],"$isdE")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asQ:function(){return[P.d,P.d]},
$asI:function(){return[P.d,P.d]}},
iI:{"^":"iy;a",
h:function(a,b){return J.c6(this.a,H.t(b))},
gj:function(a){return this.gD(this).length}},
bq:{"^":"i2;a,b,c,$ti"},
bN:{"^":"bq;a,b,c,$ti"},
iK:{"^":"i3;a,b,c,d,e,$ti",p:{
aA:function(a,b,c,d,e){var z=W.e1(new W.iL(c),W.Z)
if(z!=null&&!0)J.eD(a,b,z,!1)
return new W.iK(0,a,b,z,!1,[e])}}},
iL:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isZ"))}},
br:{"^":"c;a",
cM:function(a){var z,y
z=$.cA()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.V[y],W.ki())
for(y=0;y<12;++y)z.i(0,C.w[y],W.kj())}},
V:function(a){return $.ex().u(0,W.aS(a))},
O:function(a,b,c){var z,y,x
z=W.aS(a)
y=$.cA()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bT(x.$4(a,b,c,this))},
$isa8:1,
p:{
dH:function(a){var z,y
z=document.createElement("a")
y=new W.jp(z,window.location)
y=new W.br(y)
y.cM(a)
return y},
mF:[function(a,b,c,d){H.f(a,"$isP")
H.t(b)
H.t(c)
H.f(d,"$isbr")
return!0},"$4","ki",16,0,12],
mG:[function(a,b,c,d){var z,y,x
H.f(a,"$isP")
H.t(b)
H.t(c)
z=H.f(d,"$isbr").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kj",16,0,12]}},
q:{"^":"c;$ti",
gw:function(a){return new W.d5(a,this.gj(a),-1,[H.ac(this,a,"q",0)])},
J:function(a,b,c,d,e){H.v(d,"$isi",[H.ac(this,a,"q",0)],"$asi")
throw H.b(P.y("Cannot setRange on immutable List."))},
Z:function(a,b,c,d){return this.J(a,b,c,d,0)}},
di:{"^":"c;a",
V:function(a){return C.a.bo(this.a,new W.ht(a))},
O:function(a,b,c){return C.a.bo(this.a,new W.hs(a,b,c))},
$isa8:1},
ht:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isa8").V(this.a)}},
hs:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isa8").O(this.a,this.b,this.c)}},
jq:{"^":"c;",
cN:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aD(0,new W.jr())
y=b.aD(0,new W.js())
this.b.H(0,z)
x=this.c
x.H(0,C.X)
x.H(0,y)},
V:function(a){return this.a.u(0,W.aS(a))},
O:["cs",function(a,b,c){var z,y
z=W.aS(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.di(c)
else if(y.u(0,"*::"+b))return this.d.di(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa8:1},
jr:{"^":"n:10;",
$1:function(a){return!C.a.u(C.w,H.t(a))}},
js:{"^":"n:10;",
$1:function(a){return C.a.u(C.w,H.t(a))}},
jC:{"^":"jq;e,a,b,c,d",
O:function(a,b,c){if(this.cs(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c6(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dS:function(){var z,y,x,w,v
z=P.d
y=P.ci(C.v,z)
x=H.p(C.v,0)
w=H.l(new W.jD(),{func:1,ret:z,args:[x]})
v=H.m(["TEMPLATE"],[z])
y=new W.jC(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cN(null,new H.hd(C.v,w,[x,z]),v,null)
return y}}},
jD:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
jA:{"^":"c;",
V:function(a){var z=J.A(a)
if(!!z.$isdn)return!1
z=!!z.$isG
if(z&&W.aS(a)==="foreignObject")return!1
if(z)return!0
return!1},
O:function(a,b,c){if(b==="is"||C.i.ck(b,"on"))return!1
return this.V(a)},
$isa8:1},
d5:{"^":"c;a,b,c,0d,$ti",
sbe:function(a){this.d=H.z(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbe(J.bd(this.a,z))
this.c=z
return!0}this.sbe(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaU:1},
iC:{"^":"c;a",$isK:1,$isdC:1,p:{
iD:function(a){if(a===window)return H.f(a,"$isdC")
else return new W.iC(a)}}},
a8:{"^":"c;"},
jp:{"^":"c;a,b",$ismn:1},
dV:{"^":"c;a",
aN:function(a){new W.jN(this).$2(a,null)},
a_:function(a,b){if(b==null)J.cI(a)
else J.bx(b,a)},
d9:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eU(a)
x=J.c6(y.gcU(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a4(t)}v="element unprintable"
try{v=J.bg(a)}catch(t){H.a4(t)}try{u=W.aS(a)
this.d8(H.f(a,"$isP"),b,z,v,u,H.f(y,"$isI"),H.t(x))}catch(t){if(H.a4(t) instanceof P.aG)throw t
else{this.a_(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d8:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a_(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.V(a)){this.a_(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.O(a,"is",g)){this.a_(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.m(z.slice(0),[H.p(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.O(a,J.f5(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.d3(z,v)}}if(!!J.A(a).$isdt)this.aN(a.content)},
$islF:1},
jN:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d9(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a_(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eV(z)}catch(w){H.a4(w)
v=H.f(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bx(u,v)}else J.bx(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isr")}}},
iB:{"^":"h+fw;"},
iE:{"^":"h+o;"},
iF:{"^":"iE+q;"},
iG:{"^":"h+o;"},
iH:{"^":"iG+q;"},
iN:{"^":"h+o;"},
iO:{"^":"iN+q;"},
j0:{"^":"h+o;"},
j1:{"^":"j0+q;"},
j9:{"^":"h+Q;"},
ja:{"^":"h+Q;"},
jb:{"^":"h+o;"},
jc:{"^":"jb+q;"},
jd:{"^":"h+o;"},
je:{"^":"jd+q;"},
jh:{"^":"h+o;"},
ji:{"^":"jh+q;"},
jo:{"^":"h+Q;"},
dP:{"^":"K+o;"},
dQ:{"^":"dP+q;"},
jt:{"^":"h+o;"},
ju:{"^":"jt+q;"},
jx:{"^":"h+Q;"},
jE:{"^":"h+o;"},
jF:{"^":"jE+q;"},
dT:{"^":"K+o;"},
dU:{"^":"dT+q;"},
jJ:{"^":"h+o;"},
jK:{"^":"jJ+q;"},
jP:{"^":"h+o;"},
jQ:{"^":"jP+q;"},
jR:{"^":"h+o;"},
jS:{"^":"jR+q;"},
jT:{"^":"h+o;"},
jU:{"^":"jT+q;"},
jV:{"^":"h+o;"},
jW:{"^":"jV+q;"},
jX:{"^":"h+o;"},
jY:{"^":"jX+q;"}}],["","",,P,{"^":"",
X:function(a){var z,y,x,w,v
if(a==null)return
z=P.a_(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.M)(y),++w){v=H.t(y[w])
z.i(0,v,a[v])}return z},
k9:function(a,b){var z={}
a.C(0,new P.ka(z))
return z},
cZ:function(){var z=$.cY
if(z==null){z=J.c2(window.navigator.userAgent,"Opera",0)
$.cY=z}return z},
fB:function(){var z,y
z=$.cV
if(z!=null)return z
y=$.cW
if(y==null){y=J.c2(window.navigator.userAgent,"Firefox",0)
$.cW=y}if(y)z="-moz-"
else{y=$.cX
if(y==null){y=!P.cZ()&&J.c2(window.navigator.userAgent,"Trident/",0)
$.cX=y}if(y)z="-ms-"
else z=P.cZ()?"-o-":"-webkit-"}$.cV=z
return z},
ka:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j2:{"^":"c;",
dK:function(){return Math.random()}},
aY:{"^":"c;X:a>,P:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.aC(b,"$isaY",[P.E],null)&&this.a==J.bA(b)&&this.b==b.gP(b)},
gv:function(a){var z,y,x
z=J.aj(this.a)
y=J.aj(this.b)
y=P.dI(P.dI(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jj:{"^":"c;"},
S:{"^":"jj;$ti"}}],["","",,P,{"^":"",fg:{"^":"h;",$isfg:1,"%":"SVGAnimatedLength"},kW:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},kX:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kY:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kZ:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},l_:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},l0:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},l1:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},l2:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},l3:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},l4:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},l5:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},l6:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},l7:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},l8:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},l9:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},la:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},ld:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},le:{"^":"bj;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fR:{"^":"bj;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bj:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lm:{"^":"bj;0n:height=,0m:width=","%":"SVGImageElement"},aW:{"^":"h;",$isaW:1,"%":"SVGLength"},ls:{"^":"j4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return this.M(a,b)},
i:function(a,b,c){H.f(c,"$isaW")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
M:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aW]},
$isi:1,
$asi:function(){return[P.aW]},
$isa:1,
$asa:function(){return[P.aW]},
$asq:function(){return[P.aW]},
"%":"SVGLengthList"},lt:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aX:{"^":"h;",$isaX:1,"%":"SVGNumber"},lG:{"^":"jg;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return this.M(a,b)},
i:function(a,b,c){H.f(c,"$isaX")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
M:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aX]},
$isi:1,
$asi:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$asq:function(){return[P.aX]},
"%":"SVGNumberList"},lL:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},lN:{"^":"h;0j:length=","%":"SVGPointList"},lP:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lQ:{"^":"fR;0n:height=,0m:width=","%":"SVGRectElement"},dn:{"^":"G;",$isdn:1,"%":"SVGScriptElement"},m1:{"^":"jz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return this.M(a,b)},
i:function(a,b,c){H.t(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
M:function(a,b){return a.getItem(b)},
$aso:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},G:{"^":"P;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.m([],[W.a8])
C.a.l(z,W.dH(null))
C.a.l(z,W.dS())
C.a.l(z,new W.jA())
c=new W.dV(new W.di(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dv(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a3(w)
u=z.ga4(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m2:{"^":"bj;0n:height=,0m:width=","%":"SVGSVGElement"},b0:{"^":"h;",$isb0:1,"%":"SVGTransform"},mb:{"^":"jM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return this.M(a,b)},
i:function(a,b,c){H.f(c,"$isb0")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
M:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b0]},
$isi:1,
$asi:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$asq:function(){return[P.b0]},
"%":"SVGTransformList"},mp:{"^":"bj;0n:height=,0m:width=","%":"SVGUseElement"},j3:{"^":"h+o;"},j4:{"^":"j3+q;"},jf:{"^":"h+o;"},jg:{"^":"jf+q;"},jy:{"^":"h+o;"},jz:{"^":"jy+q;"},jL:{"^":"h+o;"},jM:{"^":"jL+q;"}}],["","",,P,{"^":"",af:{"^":"c;",$isi:1,
$asi:function(){return[P.U]},
$isa:1,
$asa:function(){return[P.U]},
$isih:1}}],["","",,P,{"^":"",kE:{"^":"h;0j:length=","%":"AudioBuffer"},kF:{"^":"iz;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new P.fi(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"AudioParamMap"},fi:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kG:{"^":"K;0j:length=","%":"AudioTrackList"},fj:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lI:{"^":"fj;0j:length=","%":"OfflineAudioContext"},iz:{"^":"h+Q;"}}],["","",,P,{"^":"",fl:{"^":"h;",$isfl:1,"%":"WebGLBuffer"},hJ:{"^":"h;",$ishJ:1,"%":"WebGLProgram"},lR:{"^":"h;",
bn:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindTexture(b,c)},
bt:function(a,b){return a.blendEquation(b)},
bu:function(a,b,c){return a.blendFunc(b,c)},
bv:function(a,b,c,d){return a.bufferData(b,c,d)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.X(a.getContextAttributes())},
aF:function(a){return a.getError()},
aG:function(a,b){return a.getProgramInfoLog(b)},
aH:function(a,b,c){return a.getProgramParameter(b,c)},
aJ:function(a,b){return a.getShaderInfoLog(b)},
aK:function(a,b,c){return a.getShaderParameter(b,c)},
aL:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
bR:function(a,b,c){return a.pixelStorei(b,c)},
aQ:function(a,b,c){return a.shaderSource(b,c)},
aR:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aC:function(a,b,c,d,e,f,g,h,i,j){this.ax(a,b,c,d,e,f,g)
return},
bU:function(a,b,c,d,e,f,g){return this.aC(a,b,c,d,e,f,g,null,null,null)},
ax:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bV:function(a,b,c,d){return a.texParameteri(b,c,d)},
bZ:function(a,b,c){return a.uniform1f(b,c)},
c_:function(a,b,c){return a.uniform1fv(b,c)},
c0:function(a,b,c){return a.uniform1i(b,c)},
c1:function(a,b,c){return a.uniform1iv(b,c)},
c2:function(a,b,c){return a.uniform2fv(b,c)},
c3:function(a,b,c){return a.uniform3fv(b,c)},
c4:function(a,b,c){return a.uniform4fv(b,c)},
c5:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c6:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c7:function(a,b){return a.useProgram(b)},
c8:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ca:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lS:{"^":"h;",
dl:function(a,b){return a.beginTransformFeedback(b)},
dq:function(a,b){return a.bindVertexArray(b)},
dz:function(a){return a.createVertexArray()},
dB:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dC:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dD:function(a){return a.endTransformFeedback()},
dX:function(a,b,c,d){this.df(a,b,H.v(c,"$isa",[P.d],"$asa"),d)
return},
df:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dY:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bn:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindTexture(b,c)},
bt:function(a,b){return a.blendEquation(b)},
bu:function(a,b,c){return a.blendFunc(b,c)},
bv:function(a,b,c,d){return a.bufferData(b,c,d)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.X(a.getContextAttributes())},
aF:function(a){return a.getError()},
aG:function(a,b){return a.getProgramInfoLog(b)},
aH:function(a,b,c){return a.getProgramParameter(b,c)},
aJ:function(a,b){return a.getShaderInfoLog(b)},
aK:function(a,b,c){return a.getShaderParameter(b,c)},
aL:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
bR:function(a,b,c){return a.pixelStorei(b,c)},
aQ:function(a,b,c){return a.shaderSource(b,c)},
aR:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aC:function(a,b,c,d,e,f,g,h,i,j){this.ax(a,b,c,d,e,f,g)
return},
bU:function(a,b,c,d,e,f,g){return this.aC(a,b,c,d,e,f,g,null,null,null)},
ax:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bV:function(a,b,c,d){return a.texParameteri(b,c,d)},
bZ:function(a,b,c){return a.uniform1f(b,c)},
c_:function(a,b,c){return a.uniform1fv(b,c)},
c0:function(a,b,c){return a.uniform1i(b,c)},
c1:function(a,b,c){return a.uniform1iv(b,c)},
c2:function(a,b,c){return a.uniform2fv(b,c)},
c3:function(a,b,c){return a.uniform3fv(b,c)},
c4:function(a,b,c){return a.uniform4fv(b,c)},
c5:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c6:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c7:function(a,b){return a.useProgram(b)},
c8:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ca:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hU:{"^":"h;",$ishU:1,"%":"WebGLShader"},i9:{"^":"h;",$isi9:1,"%":"WebGLTexture"},ii:{"^":"h;",$isii:1,"%":"WebGLUniformLocation"},io:{"^":"h;",$isio:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lZ:{"^":"jw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return P.X(this.d0(a,b))},
i:function(a,b,c){H.f(c,"$isI")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
d0:function(a,b){return a.item(b)},
$aso:function(){return[[P.I,,,]]},
$isi:1,
$asi:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jv:{"^":"h+o;"},jw:{"^":"jv+q;"}}],["","",,G,{"^":"",
is:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.j(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a1(z,"\n")},
dF:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bB(a,b)
z.aQ(a,y,c)
z.bx(a,y)
x=H.bT(z.aK(a,y,35713))
if(x!=null&&!x){w=z.aJ(a,y)
P.aD("E:Compilation failed:")
P.aD("E:"+G.is(c))
P.aD("E:Failure:")
P.aD(C.i.G("E:",w))
throw H.b(w)}return y},
d6:function(a,b){var z,y,x
H.v(a,"$isa",[T.x],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bA(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.c5(a[y]))
z+=2
if(y>=a.length)return H.j(a,y)
x=J.cG(a[y])
if(z>=b.length)return H.j(b,z)
b[z]=x}return b},
fO:function(a,b){var z,y
H.v(a,"$isa",[T.aI],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bA(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.c5(a[y]))}return b},
fP:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.b2],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bA(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.c5(a[y]))
x=z+2
if(y>=a.length)return H.j(a,y)
w=J.cG(a[y])
v=b.length
if(x>=v)return H.j(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.j(a,y)
w=J.eX(a[y])
if(z>=v)return H.j(b,z)
b[z]=w}return b},
fN:function(a,b){var z,y
H.v(a,"$isa",[[P.a,P.B]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.bd(a[y],0))
if(y>=a.length)return H.j(a,y)
C.n.i(b,z+1,J.bd(a[y],1))
if(y>=a.length)return H.j(a,y)
C.n.i(b,z+2,J.bd(a[y],2))
if(y>=a.length)return H.j(a,y)
C.n.i(b,z+3,J.bd(a[y],3))}return b},
iZ:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ao(z,[H.p(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.B]],v=[P.U],u=[T.b2],t=[T.x],s=[T.aI];y.t();){r=y.d
if(!x.aa(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.e6>0)H.c0("I: "+r)
continue}q=z.h(0,r)
switch($.a5().h(0,r).a){case"vec2":b.N(r,G.fO(H.bw(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.N(r,G.d6(H.bw(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.N(r,G.fP(H.bw(q,"$isa",u,"$asa"),null),4)
break
case"float":b.N(r,new Float32Array(H.bP(H.bw(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.N(r,G.fN(H.bw(q,"$isa",w,"$asa"),null),4)
break}}},
bG:{"^":"c;"},
bM:{"^":"bG;",
aZ:function(){return this.d},
k:function(a){var z,y,x,w
z=H.m(["{"+new H.dy(H.kf(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ao(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a1(z,"\n")}},
fo:{"^":"c;0a,b",
bK:function(a,b,c){J.eR(this.a,b)
if(c>0)J.fb(this.a,b,c)},
c9:function(a,b,c,d,e,f,g,h){J.c1(this.a,34962,b)
J.fc(this.a,c,d,e,!1,g,h)}},
fM:{"^":"c;"},
d4:{"^":"c;a,b,c,d"},
fQ:{"^":"c;a,b,c,d,e",
cw:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.m(y,[P.B])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.j(y,v)
u=y[v]
C.a.i(x,w,u.ge1(u))
C.a.i(x,w+1,u.ge2(u))
C.a.i(x,w+2,u.ge3(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.M)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
cA:function(a,b){var z,y,x,w,v,u,t
z=H.m([],[T.aI])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.aI(t))}},
cz:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.l(z,new G.d4(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.m(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ao(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a5().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a1(z," ")}},
dw:{"^":"c;a,b,c"},
du:{"^":"c;a,b,c",p:{
dv:function(a,b,c){return new G.du(a,b,c)}}},
df:{"^":"bM;d,a,b,c"},
hf:{"^":"bG;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sap:function(a){this.cx=H.v(a,"$isa",[P.B],"$asa")},
aW:function(a,b,c){var z,y
C.i.al(a,0)
H.f(b,"$isaf")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c1(z.a,34962,y)
J.cE(z.a,34962,b,35048)},
cB:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
N:function(a,b,c){var z,y,x,w,v
z=J.cB(a,0)===105
if(z&&this.z===0)this.z=C.d.ct(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c3(x.a))
this.aW(a,b,c)
w=$.a5().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.by(x.a,this.e)
x.bK(0,v,z?1:0)
x.c9(0,y.h(0,a),v,w.aY(),5126,!1,0,0)},
aV:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c3(y.a))
this.ch=a
this.aW("aPosition",a,3)
x=$.a5().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.by(y.a,this.e)
y.bK(0,w,0)
y.c9(0,z.h(0,"aPosition"),w,x.aY(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ao(z,[H.p(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a1(y,"  ")},
p:{
dg:function(a,b,c,d){var z=P.d
return new G.hf(b,J.eL(b.a),c,P.a_(z,P.c),d,0,-1,P.a_(z,P.af),"meshdata:"+a,!1,!0)}}},
hy:{"^":"bM;",
cu:function(a,b){var z
if(typeof a!=="number")return a.e_()
if(typeof b!=="number")return H.bb(b)
z=a/b
if(this.z===z)return
this.z=z
this.b1()},
b1:function(){var z,y,x,w,v,u
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
aZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.i(0,"uEyePosition",z.ae())
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
kU:{"^":"c;"},
hO:{"^":"bG;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cE:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.i(0,t,J.cH(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){t=z[u]
x.i(0,t,J.cH(w.a,v,t))}},
cI:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.d])
x=H.m([],[P.d])
for(y=new H.ao(y,[H.p(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.aa(0,w))C.a.l(x,w)}for(z=this.x,z=P.j6(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(b,"$isI",[P.d,P.c],"$asI")
z=Date.now()
for(y=new H.ao(b,[H.p(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cB(s,0)){case 117:if(w.aa(0,s)){r=b.h(0,s)
if(v.aa(0,s))H.c0("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a5().h(0,s)
if(q==null)H.Y("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.L(r)
J.c7(x.a,p,r)}else if(!!J.A(r).$isfW)J.f9(x.a,p,r)
break
case"float":if(q.c===0){H.e5(r)
J.f7(x.a,p,r)}else if(!!J.A(r).$isaf)J.f8(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ai(r,"$isag").a
J.cO(x.a,p,!1,s)}else if(!!J.A(r).$isaf)J.cO(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ai(r,"$islu").a
J.cN(x.a,p,!1,s)}else if(!!J.A(r).$isaf)J.cN(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cM(o,p,H.ai(r,"$isb2").a)
else J.cM(o,p,H.f(r,"$isaf"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cL(o,p,H.ai(r,"$isx").a)
else J.cL(o,p,H.f(r,"$isaf"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cK(o,p,H.ai(r,"$isaI").a)
else J.cK(o,p,H.f(r,"$isaf"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bb(s)
J.cC(x.a,33984+s)
s=H.ai(r,"$iscl").b
J.be(x.a,3553,s)
s=this.ch
J.c7(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bb(s)
J.cC(x.a,33984+s)
s=H.ai(r,"$iscl").b
J.be(x.a,34067,s)
s=this.ch
J.c7(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
default:H.c0("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aF(r,!0)
o=x.a
if(s)J.bf(o,2929)
else J.c4(o,2929)
break
case"cStencilFunc":H.ai(r,"$isdw")
s=r.a
o=x.a
if(s===1281)J.c4(o,2960)
else{J.bf(o,2960)
o=r.b
n=r.c
J.f3(x.a,s,o,n)}break
case"cDepthWrite":H.bT(r)
J.eM(x.a,r)
break
case"cBlendEquation":H.ai(r,"$isdu")
s=r.a
o=x.a
if(s===1281)J.c4(o,3042)
else{J.bf(o,3042)
o=r.b
n=r.c
J.eG(x.a,o,n)
J.eF(x.a,s)}break}++t
break}}m=P.fG(0,0,0,Date.now()-new P.bD(z,!1).a,0,0)
""+t
m.k(0)},
cv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[G.bM],"$asa")
Date.now()
z=this.d
J.fa(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b7()}for(x=0;x<2;++x){w=b[x]
this.cL(w.a,w.aZ())}y=this.Q
y.a0(0)
for(v=a.cy,v=new H.ao(v,[H.p(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cI()
if(u.length!==0)P.aD("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.by(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cB()
s=a.Q
r=a.z
if(t)J.eE(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eQ(q,y,v,s,0,r)
else J.eP(q,y,v,s,0)}else{s=z.a
if(r>1)J.eO(s,y,0,v,r)
else J.eN(s,y,0,v)}if(t)J.eS(z.a)},
aX:function(a,b){return this.cv(a,b,null)},
p:{
dm:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.v(c.f,"$isa",[z],"$asa")
u=J.eJ(b.a)
t=G.dF(b.a,35633,x)
J.cD(b.a,u,t)
s=G.dF(b.a,35632,w)
J.cD(b.a,u,s)
if(v.length>0)J.f6(b.a,u,v,35980)
J.f1(b.a,u)
if(!H.bT(J.f0(b.a,u,35714)))H.Y(J.f_(b.a,u))
z=new G.hO(b,c,d,u,P.ci(c.c,z),P.a_(z,P.c),P.a_(z,z),y,a,!1,!0)
z.cE(a,b,c,d)
return z}}},
C:{"^":"c;a,b,c",
aY:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hV:{"^":"c;a,0b,c,d,e,f,r,x",
ah:function(a){var z,y,x,w,v
H.v(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.M)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.af(y)},
ai:function(a){var z,y,x
H.v(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.M)(a),++x)C.a.l(y,a[x])
C.a.af(y)},
aU:function(a){var z,y
H.v(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.af(z)},
cG:function(a,b){this.b=this.b2(!0,H.v(a,"$isa",[P.d],"$asa"),b)},
b0:function(a){return this.cG(a,null)},
cF:function(a,b){this.b=this.b2(!1,H.v(a,"$isa",[P.d],"$asa"),b)},
b_:function(a){return this.cF(a,null)},
b2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.v(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.M)(y),++u){t=y[u]
s=$.a5().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a5().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a5().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.M)(z),++u){q=z[u]
s=$.a5().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.l(w,"}")
return C.a.a1(w,"\n")},
p:{
bI:function(a){var z,y
z=P.d
y=[z]
return new G.hV(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.a_(z,P.B))}}},
dp:{"^":"bG;d,e,f,r,x,a,b,c",
ae:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
ci:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
ia:{"^":"c;a,b,c,d,e,f,r"},
cl:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fU:{"^":"cl;f,a,b,c,d,e"}}],["","",,R,{"^":"",
im:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.ew().dK()
if(v>=w)return H.j(x,v)
x[v]=(u-0.5)*c}y=G.dg(z,a.d,0,a.e.x)
y.aV(x)
return y},
j8:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iJ("span",null),"$isP")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).ak(y,"float")
y.setProperty(x,"left","")
x=C.z.ak(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.F(z,v)}return z},
hz:{"^":"hy;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dP:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aD("size change "+H.e(y)+" "+H.e(x))
this.cu(y,x)
J.fd(this.go.a,0,0,y,x)},"$1","gdO",4,0,24]},
i_:{"^":"c;",
cH:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.b("no element provided")
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
i0:{"^":"i_;e,f,a,b,c,d",
cK:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.dW(y,2)+" fps"
C.r.cf(this.c,b)
x=C.d.U(30*C.A.dr(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isP")
v=w.style
u=""+x+"px"
v.height=u
C.r.F(z,w)},
cJ:function(a){return this.cK(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
ib:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=B.hw(new B.ic(e,d,f,c),0,6.283185307179586,g,0.001,!0)
y=z.length
if(0>=y)return H.j(z,0)
C.a.l(z,z[0])
if(1>=z.length)return H.j(z,1)
C.a.l(z,z[1])
x=g+1
w=B.id(z,h,i)
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.M)(w),++v){u=w[v]
if(0>=u.length)return H.j(u,0)
C.a.l(u,u[0])
if(1>=u.length)return H.j(u,1)
C.a.l(u,u[1])}t=h+1
y=H.m([],[G.fM])
s=H.m([],[G.d4])
r=[T.x]
q=H.m([],r)
p=new G.fQ(!1,y,s,q,P.a_(P.d,[P.a,,]))
for(y=w.length,v=0;v<w.length;w.length===y||(0,H.M)(w),++v){o=w[v]
for(n=0;n<o.length;n+=2){s=H.f(o[n],"$isx")
s.toString
m=new T.x(new Float32Array(3))
m.E(s)
C.a.l(q,m)}}p.cz(t,x,!1)
p.cA(t,x)
l=$.a5().h(0,"aNormal")
switch(l.a){case"vec2":p.e.i(0,"aNormal",H.m([],[T.aI]))
break
case"vec3":p.e.i(0,"aNormal",H.m([],r))
break
case"vec4":p.e.i(0,"aNormal",H.m([],[T.b2]))
break
case"float":p.e.i(0,"aNormal",H.m([],[P.U]))
break
case"uvec4":p.e.i(0,"aNormal",H.m([],[[P.a,P.B]]))
break}for(y=w.length,s=p.e,v=0;v<w.length;w.length===y||(0,H.M)(w),++v){o=w[v]
for(n=0;q=o.length,n<q;n+=2){m=n+1
if(m>=q)return H.j(o,m)
m=H.f(o[m],"$isx")
k=H.v(s.h(0,"aNormal"),"$isa",r,"$asa")
m.toString
q=new T.x(new Float32Array(3))
q.E(m);(k&&C.a).l(k,q)}}return p},
id:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[T.x]
H.v(a,"$isa",z,"$asa")
y=H.m([],[[P.a,T.x]])
x=new Float32Array(3)
w=new T.x(x)
v=new Float32Array(3)
u=new T.x(v)
t=new Float32Array(3)
s=new T.x(t)
for(r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.j(a,o)
n=a[o]
m=H.m([],z)
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
t[2]=k*j}u.W(0)
s.W(0)
for(i=0;i<b;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
w.E(p)
w.a9(u,g)
w.a9(s,f)
q=new T.x(new Float32Array(3))
q.E(w)
C.a.l(m,q)
x[2]=0
x[1]=0
x[0]=0
w.a9(u,g)
w.a9(s,f)
w.W(0)
q=new T.x(new Float32Array(3))
q.E(w)
C.a.l(m,q)}}return y},
hw:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.l(a,{func:1,ret:-1,args:[P.U,T.x]})
z=H.m([],[T.x])
y=new T.x(new Float32Array(3))
x=new T.x(new Float32Array(3))
for(w=(c-b)/(d-0),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+e,x)
x.aT(0,y)
t=new T.x(new Float32Array(3))
t.E(y)
C.a.l(z,t)
t=new T.x(new Float32Array(3))
t.E(x)
C.a.l(z,t)}return z},
ic:{"^":"n:25;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sX(0,y*v)
b.sP(0,y*u)
b.sac(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",h4:{"^":"c;a,b,c",
cC:function(a){var z,y
a=document
z=W.aV
y={func:1,ret:-1,args:[z]}
W.aA(a,"keydown",H.l(new D.h6(this),y),!1,z)
W.aA(a,"keyup",H.l(new D.h7(this),y),!1,z)},
p:{
h5:function(a){var z=P.B
z=new D.h4(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.cC(a)
return z}}},h6:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaV")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},h7:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaV")
z=this.a
z.a.bS(0,a.which)
z.c.l(0,a.which)}},hi:{"^":"c;a,b,c,d,e,f,r,x",
cD:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbO(a)
x=H.p(y,0)
W.aA(y.a,y.b,H.l(new D.hk(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbN(a)
y=H.p(x,0)
W.aA(x.a,x.b,H.l(new D.hl(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbP(a)
x=H.p(y,0)
W.aA(y.a,y.b,H.l(new D.hm(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbQ(a)
x=H.p(z,0)
W.aA(z.a,z.b,H.l(new D.hn(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hj:function(a){var z=P.B
z=new D.hi(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cD(a)
return z}}},hk:{"^":"n:3;a",
$1:function(a){var z,y
H.f(a,"$isR")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.L(y.gbM(a).a)
z.x=H.L(y.gbM(a).b)
z.d=a.movementX
z.e=a.movementY}},hl:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isR")
a.preventDefault()
P.aD("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hm:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isR")
a.preventDefault()
z=this.a
z.a.bS(0,a.button)
z.c.l(0,a.button)}},hn:{"^":"n:26;a",
$1:function(a){H.f(a,"$isaJ")
a.preventDefault()
this.a.f=H.L(C.ae.gdA(a))}},hv:{"^":"dp;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bY:function(a){var z,y
z=C.f.dF(H.v(a,"$isi",[P.c],"$asi"),0,new A.kh(),P.B)
if(typeof z!=="number")return H.bb(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kh:{"^":"n:27;",
$2:function(a,b){var z,y
H.L(a)
z=J.aj(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ag:{"^":"c;a",
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
k:function(a){return"[0] "+this.a2(0).k(0)+"\n[1] "+this.a2(1).k(0)+"\n[2] "+this.a2(2).k(0)+"\n[3] "+this.a2(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.j(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ag){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bY(this.a)},
a2:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.j(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.j(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.j(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.j(y,x)
z[3]=y[x]
return new T.b2(z)},
S:function(){var z=this.a
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
z[15]=1}},aI:{"^":"c;a",
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aI){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bY(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.j(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gX:function(a){return this.a[0]},
gP:function(a){return this.a[1]}},x:{"^":"c;a",
aP:function(a,b,c){var z=this.a
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
if(b instanceof T.x){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bY(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.j(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gaA())},
gaA:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
W:function(a){var z,y,x
z=Math.sqrt(this.gaA())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
ay:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bD:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.x(new Float32Array(3))
z.aP(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a9:function(a,b){var z,y
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
sX:function(a,b){this.a[0]=b
return b},
sP:function(a,b){this.a[1]=b
return b},
sac:function(a,b){this.a[2]=b
return b},
gX:function(a){return this.a[0]},
gP:function(a){return this.a[1]},
gac:function(a){return this.a[2]}},b2:{"^":"c;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b2){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bY(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.j(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gX:function(a){return this.a[0]},
gP:function(a){return this.a[1]},
gac:function(a){return this.a[2]},
gdZ:function(a){return this.a[3]}}}],["","",,U,{"^":"",
fe:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=new Float32Array(3000)
y=new Float32Array(4000)
x=new Float32Array(16)
w=new T.ag(x)
w.S()
v=new Float32Array(3)
u=new Float32Array(3)
t=new Float32Array(3)
s=new G.dp(w,new T.x(v),new T.x(u),new T.x(t),new T.x(new Float32Array(3)),"dummy",!1,!0)
for(r=0,q=-5;q<5;++q)for(w=q*40,p=-5;p<5;++p)for(v=p*40,o=-5;o<5;++o){x[12]=w
x[13]=v
x[14]=o*30
u=r*3
C.f.aO(z,u,s.ae().a)
t=new Float32Array(9)
t[0]=x[0]
t[1]=x[1]
t[2]=x[2]
t[3]=x[4]
t[4]=x[5]
t[5]=x[6]
t[6]=x[8]
t[7]=x[9]
t[8]=x[10]
n=new Float32Array(4)
m=t[0]
l=t[4]
k=t[8]
j=0+m+l+k
if(j>0){i=Math.sqrt(j+1)
n[3]=i*0.5
i=0.5/i
n[0]=(t[5]-t[7])*i
n[1]=(t[6]-t[2])*i
n[2]=(t[1]-t[3])*i}else{if(m<l)h=l<k?2:1
else h=m<k?2:0
g=(h+1)%3
f=(h+2)%3
m=h*3
l=m+h
if(l>=9)return H.j(t,l)
l=t[l]
k=g*3
e=k+g
if(e>=9)return H.j(t,e)
e=t[e]
d=f*3
c=d+f
if(c>=9)return H.j(t,c)
i=Math.sqrt(l-e-t[c]+1)
n[h]=i*0.5
i=0.5/i
c=k+f
if(c>=9)return H.j(t,c)
c=t[c]
e=d+g
if(e>=9)return H.j(t,e)
n[3]=(c-t[e])*i
e=m+g
if(e>=9)return H.j(t,e)
e=t[e]
k+=h
if(k>=9)return H.j(t,k)
n[g]=(e+t[k])*i
m+=f
if(m>=9)return H.j(t,m)
m=t[m]
d+=h
if(d>=9)return H.j(t,d)
n[f]=(m+t[d])*i}C.f.aO(y,u,n);++r}a.N("iaRotation",y,4)
a.N("iaTranslation",z,3)},
ec:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=C.t.cd(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.i0(0,0,x,w,y.createElement("div"),R.j8("blue","gray",90,30))
u.cH(x,"blue","gray")
t=H.f(C.t.dM(y,"#webgl-canvas"),"$isca")
s=new G.fo(t)
x=P.d
v=P.c
r=(t&&C.y).aE(t,"webgl2",P.db(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.Y(P.d3('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.eY(r))
if($.e6>0)P.aD("I: "+q)
J.eH(r,0,0,0,1)
J.bf(r,2929)
J.bf(r,2884)
r=new Float32Array(3)
q=D.h5(null)
p=D.hj(t)
o=new T.ag(new Float32Array(16))
o.S()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hv(265,0,0,0,new T.x(r),-0.02,q,p,o,new T.x(n),new T.x(m),new T.x(l),new T.x(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.ag(new Float32Array(16))
r.S()
q=new T.ag(new Float32Array(16))
q.S()
j=new R.hz(t,s,k,50,1,0.1,1000,r,q,new T.ag(new Float32Array(16)),P.a_(x,v),"perspective",!1,!0)
j.b1()
j.dP(null)
r=W.Z
W.aA(window,"resize",H.l(j.gdO(),{func:1,ret:-1,args:[r]}),!1,r)
i=G.dm("instanced",s,$.ez(),$.ey())
r=P.a_(x,v)
r.i(0,"cDepthTest",!0)
r.i(0,"cDepthWrite",!0)
r.i(0,"cBlendEquation",$.ei())
q=$.el()
r.i(0,"cStencilFunc",q)
p=new T.ag(new Float32Array(16))
p.S()
r.i(0,"uModelMatrix",p)
h=B.ib(!0,!0,1,2,3,12,128,16,4,!1)
g=G.dg("torusknot",i.d,4,i.e.x)
g.aV(G.d6(h.d,null))
p=H.v(h.cw(),"$isa",[P.B],"$asa")
o=g.d
g.y=J.c3(o.a)
n=g.ch.length
if(n<768){g.sap(new Uint8Array(H.bP(p)))
g.Q=5121}else if(n<196608){g.sap(new Uint16Array(H.bP(p)))
g.Q=5123}else{g.sap(new Uint32Array(H.bP(p)))
g.Q=5125}J.by(o.a,g.e)
p=g.y
n=g.cx
J.c1(o.a,34963,p)
J.cE(o.a,34963,n,35048)
G.iZ(h,g)
U.fe(g)
f=G.dm("stars",s,$.eB(),$.eA())
p=$.eh()
v=P.a_(x,v)
v.i(0,"cDepthTest",!0)
v.i(0,"cDepthWrite",!1)
v.i(0,"cBlendEquation",p)
v.i(0,"cStencilFunc",q)
e=y.createElement("canvas")
e.width=64
e.height=64
d=H.f(C.y.cc(e,"2d"),"$iscb")
c=(d&&C.q).bA(d,32,32,1,32,32,22);(c&&C.m).a8(c,0,"gray")
C.m.a8(c,1,"black")
d.fillStyle=c
C.q.dE(d,0,0,64,64)
c=C.q.bA(d,32,32,1,32,32,6);(c&&C.m).a8(c,0,"white")
C.m.a8(c,1,"gray")
d.globalAlpha=0.9
d.fillStyle=c
d.arc(32,32,4,0,6.283185307179586,!1)
d.fill()
y=J.eK(s.a)
J.be(s.a,3553,y)
J.f2(s.a,37440,1)
J.be(s.a,3553,y)
J.f4(s.a,3553,0,6408,6408,5121,e)
J.cJ(s.a,3553,10240,9729)
J.cJ(s.a,3553,10241,9729)
J.eZ(s.a)
J.be(s.a,3553,null)
v.i(0,"uTexture",new G.fU(e,"Utils::Particles",y,3553,s,new G.ia(!1,!1,!1,!0,1,9729,9729)))
v.i(0,"uPointSize",1000)
y=new T.ag(new Float32Array(16))
y.S()
v.i(0,"uModelMatrix",y)
b=R.im(f,2000,100)
z.a=0
new U.ku(z,k,i,g,new G.df(r,"mat",!1,!0),j,f,b,new G.df(v,"stars",!1,!0),u).$1(0)},
ku:{"^":"n:28;a,b,c,d,e,f,r,x,y,z",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cw(a9)
if(typeof a9!=="number")return a9.aS()
z=this.a
z.a=a9+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aM()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aM()
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
if(typeof v!=="number")return v.aM()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.u.ds(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
y.ci(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.dx
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=new T.x(new Float32Array(3))
r.aP(0,1,0)
u=y.ae()
q=new Float32Array(3)
p=new T.x(q)
p.E(u)
p.aT(0,t)
p.W(0)
o=r.bD(p)
o.W(0)
n=p.bD(o)
n.W(0)
t=o.ay(u)
m=n.ay(u)
u=p.ay(u)
l=o.a
k=l[0]
j=n.a
i=j[0]
h=q[0]
g=l[1]
f=j[1]
e=q[1]
l=l[2]
j=j[2]
q=q[2]
v[15]=1
v[14]=-u
v[13]=-m
v[12]=-t
v[11]=0
v[10]=q
v[9]=j
v[8]=l
v[7]=0
v[6]=e
v[5]=f
v[4]=g
v[3]=0
v[2]=h
v[1]=i
v[0]=k
k=y.f
i=k.a
i[0]=v[2]
i[1]=v[6]
i[2]=v[10]
y=-y.db
d=Math.sqrt(k.gaA())
o=i[0]/d
n=i[1]/d
p=i[2]/d
c=Math.cos(y)
b=Math.sin(y)
a=1-c
a0=o*o*a+c
y=p*b
a1=o*n*a-y
i=n*b
a2=o*p*a+i
a3=n*o*a+y
a4=n*n*a+c
y=o*b
a5=n*p*a-y
a6=p*o*a-i
a7=p*n*a+y
a8=p*p*a+c
y=v[0]
i=v[4]
k=v[8]
h=v[1]
g=v[5]
f=v[9]
e=v[2]
l=v[6]
j=v[10]
q=v[3]
t=v[7]
m=v[11]
v[0]=y*a0+i*a3+k*a6
v[1]=h*a0+g*a3+f*a6
v[2]=e*a0+l*a3+j*a6
v[3]=q*a0+t*a3+m*a6
v[4]=y*a1+i*a4+k*a7
v[5]=h*a1+g*a4+f*a7
v[6]=e*a1+l*a4+j*a7
v[7]=q*a1+t*a4+m*a7
v[8]=y*a2+i*a5+k*a8
v[9]=h*a2+g*a5+f*a8
v[10]=e*a2+l*a5+j*a8
v[11]=q*a2+t*a5+m*a8
w.c.a0(0)
w.b.a0(0)
x.e=0
x.d=0
x.f=0
x.c.a0(0)
x.b.a0(0)
x=this.f
w=[G.bM]
this.c.aX(this.d,H.m([this.e,x],w))
this.r.aX(this.x,H.m([this.y,x],w))
C.af.gdj(window).bW(this,-1)
this.z.cJ(z.a)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.bm.prototype
if(a==null)return J.h2.prototype
if(typeof a=="boolean")return J.h1.prototype
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.c)return a
return J.bX(a)}
J.aN=function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.c)return a
return J.bX(a)}
J.e7=function(a){if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.c)return a
return J.bX(a)}
J.kd=function(a){if(typeof a=="number")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.ke=function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.e8=function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.c)return a
return J.bX(a)}
J.bW=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.aF=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.a6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kd(a).R(a,b)}
J.bd=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kr(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).h(a,b)}
J.cB=function(a,b){return J.e8(a).al(a,b)}
J.bx=function(a,b){return J.k(a).d4(a,b)}
J.eC=function(a,b,c){return J.k(a).d5(a,b,c)}
J.cC=function(a,b){return J.k(a).bn(a,b)}
J.eD=function(a,b,c,d){return J.k(a).dg(a,b,c,d)}
J.cD=function(a,b,c){return J.k(a).bp(a,b,c)}
J.eE=function(a,b){return J.k(a).dl(a,b)}
J.c1=function(a,b,c){return J.k(a).bq(a,b,c)}
J.be=function(a,b,c){return J.k(a).bs(a,b,c)}
J.by=function(a,b){return J.k(a).dq(a,b)}
J.eF=function(a,b){return J.k(a).bt(a,b)}
J.eG=function(a,b,c){return J.k(a).bu(a,b,c)}
J.cE=function(a,b,c,d){return J.k(a).bv(a,b,c,d)}
J.eH=function(a,b,c,d,e){return J.k(a).bw(a,b,c,d,e)}
J.eI=function(a,b){return J.ke(a).K(a,b)}
J.c2=function(a,b,c){return J.aN(a).dt(a,b,c)}
J.c3=function(a){return J.k(a).by(a)}
J.eJ=function(a){return J.k(a).bz(a)}
J.eK=function(a){return J.k(a).bC(a)}
J.eL=function(a){return J.k(a).dz(a)}
J.eM=function(a,b){return J.k(a).bE(a,b)}
J.c4=function(a,b){return J.k(a).bF(a,b)}
J.eN=function(a,b,c,d){return J.k(a).bG(a,b,c,d)}
J.eO=function(a,b,c,d,e){return J.k(a).dB(a,b,c,d,e)}
J.eP=function(a,b,c,d,e){return J.k(a).bH(a,b,c,d,e)}
J.eQ=function(a,b,c,d,e,f){return J.k(a).dC(a,b,c,d,e,f)}
J.cF=function(a,b){return J.e7(a).q(a,b)}
J.bf=function(a,b){return J.k(a).bI(a,b)}
J.eR=function(a,b){return J.k(a).bJ(a,b)}
J.eS=function(a){return J.k(a).dD(a)}
J.eT=function(a,b){return J.k(a).C(a,b)}
J.eU=function(a){return J.k(a).gdk(a)}
J.aj=function(a){return J.A(a).gv(a)}
J.bz=function(a){return J.e7(a).gw(a)}
J.ad=function(a){return J.aN(a).gj(a)}
J.eV=function(a){return J.k(a).gdL(a)}
J.eW=function(a){return J.k(a).gdT(a)}
J.eX=function(a){return J.bW(a).gdZ(a)}
J.bA=function(a){return J.bW(a).gX(a)}
J.c5=function(a){return J.bW(a).gP(a)}
J.cG=function(a){return J.bW(a).gac(a)}
J.c6=function(a,b){return J.k(a).Y(a,b)}
J.eY=function(a){return J.k(a).ad(a)}
J.eZ=function(a){return J.k(a).aF(a)}
J.f_=function(a,b){return J.k(a).aG(a,b)}
J.f0=function(a,b,c){return J.k(a).aH(a,b,c)}
J.cH=function(a,b,c){return J.k(a).aL(a,b,c)}
J.f1=function(a,b){return J.k(a).bL(a,b)}
J.f2=function(a,b,c){return J.k(a).bR(a,b,c)}
J.cI=function(a){return J.k(a).dN(a)}
J.f3=function(a,b,c,d){return J.k(a).aR(a,b,c,d)}
J.f4=function(a,b,c,d,e,f,g){return J.k(a).bU(a,b,c,d,e,f,g)}
J.cJ=function(a,b,c,d){return J.k(a).bV(a,b,c,d)}
J.f5=function(a){return J.e8(a).dV(a)}
J.bg=function(a){return J.A(a).k(a)}
J.f6=function(a,b,c,d){return J.k(a).dX(a,b,c,d)}
J.f7=function(a,b,c){return J.k(a).bZ(a,b,c)}
J.f8=function(a,b,c){return J.k(a).c_(a,b,c)}
J.c7=function(a,b,c){return J.k(a).c0(a,b,c)}
J.f9=function(a,b,c){return J.k(a).c1(a,b,c)}
J.cK=function(a,b,c){return J.k(a).c2(a,b,c)}
J.cL=function(a,b,c){return J.k(a).c3(a,b,c)}
J.cM=function(a,b,c){return J.k(a).c4(a,b,c)}
J.cN=function(a,b,c,d){return J.k(a).c5(a,b,c,d)}
J.cO=function(a,b,c,d){return J.k(a).c6(a,b,c,d)}
J.fa=function(a,b){return J.k(a).c7(a,b)}
J.fb=function(a,b,c){return J.k(a).dY(a,b,c)}
J.fc=function(a,b,c,d,e,f,g){return J.k(a).c8(a,b,c,d,e,f,g)}
J.fd=function(a,b,c,d,e){return J.k(a).ca(a,b,c,d,e)}
I.aO=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bB.prototype
C.y=W.ca.prototype
C.m=W.fm.prototype
C.q=W.cb.prototype
C.z=W.fv.prototype
C.r=W.fC.prototype
C.L=W.fE.prototype
C.M=W.fS.prototype
C.t=W.fT.prototype
C.N=J.h.prototype
C.a=J.bk.prototype
C.A=J.d7.prototype
C.d=J.d8.prototype
C.u=J.bl.prototype
C.i=J.bm.prototype
C.U=J.bn.prototype
C.f=H.ho.prototype
C.n=H.hq.prototype
C.Y=W.hr.prototype
C.D=J.hA.prototype
C.E=W.hK.prototype
C.J=W.i8.prototype
C.x=J.b1.prototype
C.ae=W.aJ.prototype
C.af=W.iq.prototype
C.K=new P.j2()
C.e=new P.jk()
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
C.V=H.m(I.aO(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.W=H.m(I.aO(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.X=H.m(I.aO([]),[P.d])
C.v=H.m(I.aO(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.m(I.aO(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Z=new G.C("vec3","vertex btangents",0)
C.c=new G.C("vec3","",0)
C.a_=new G.C("vec4","delta from light",0)
C.o=new G.C("","",0)
C.F=new G.C("vec3","vertex coordinates",0)
C.a0=new G.C("vec3","vertex binormals",0)
C.G=new G.C("vec4","for wireframe",0)
C.a1=new G.C("vec4","per vertex color",0)
C.a2=new G.C("float","for normal maps",0)
C.j=new G.C("mat4","",0)
C.a4=new G.C("mat4","",4)
C.a3=new G.C("mat4","",128)
C.b=new G.C("float","",0)
C.a5=new G.C("float","",4)
C.a6=new G.C("float","depth for shadowmaps",0)
C.h=new G.C("sampler2D","",0)
C.a7=new G.C("float","for bump maps",0)
C.a8=new G.C("vec2","texture uvs",0)
C.a9=new G.C("float","time since program start in sec",0)
C.k=new G.C("vec2","",0)
C.aa=new G.C("samplerCube","",0)
C.l=new G.C("vec4","",0)
C.ab=new G.C("vec3","vertex normals",0)
C.ac=new G.C("sampler2DShadow","",0)
C.H=new G.C("vec3","per vertex color",0)
C.I=new G.C("mat3","",0)
C.ad=new G.C("vec3","vertex tangents",0)
$.a7=0
$.aQ=null
$.cR=null
$.cn=!1
$.ea=null
$.e2=null
$.ef=null
$.bU=null
$.bZ=null
$.cu=null
$.aL=null
$.b4=null
$.b5=null
$.co=!1
$.H=C.e
$.ae=null
$.cd=null
$.d1=null
$.d0=null
$.cY=null
$.cX=null
$.cW=null
$.cV=null
$.e6=0
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
I.$lazy(y,x,w)}})(["kO","ek",function(){return H.e9("_$dart_dartClosure")},"lr","cy",function(){return H.e9("_$dart_js")},"mc","em",function(){return H.a9(H.bL({
toString:function(){return"$receiver$"}}))},"md","en",function(){return H.a9(H.bL({$method$:null,
toString:function(){return"$receiver$"}}))},"me","eo",function(){return H.a9(H.bL(null))},"mf","ep",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mi","es",function(){return H.a9(H.bL(void 0))},"mj","et",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mh","er",function(){return H.a9(H.dx(null))},"mg","eq",function(){return H.a9(function(){try{null.$method$}catch(z){return z.message}}())},"ml","ev",function(){return H.a9(H.dx(void 0))},"mk","eu",function(){return H.a9(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mw","cz",function(){return P.it()},"mM","bc",function(){return[]},"kL","ej",function(){return{}},"mD","ex",function(){return P.ci(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mE","cA",function(){return P.a_(P.d,P.bi)},"m_","el",function(){return new G.dw(1281,0,4294967295)},"kI","ei",function(){return G.dv(1281,1281,1281)},"kH","eh",function(){return G.dv(32774,770,769)},"mK","a5",function(){return P.db(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.b,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.C)},"mq","ew",function(){return C.K},"mT","eB",function(){var z,y
z=G.bI("PointSpritesV")
y=[P.d]
z.ah(H.m(["aPosition"],y))
z.ai(H.m(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.b0(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"mS","eA",function(){var z,y
z=G.bI("PointSpritesF")
y=[P.d]
z.ai(H.m(["uTexture"],y))
z.b0(H.m(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"mR","ez",function(){var z,y
z=G.bI("InstancedV")
y=[P.d]
z.ah(H.m(["aPosition"],y))
z.ah(H.m(["iaRotation","iaTranslation"],y))
z.aU(H.m(["vColor"],y))
z.ai(H.m(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b_(H.m(["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main() {\n    vec3 P = rotate_vertex_position(aPosition, iaRotation) +\n             iaTranslation;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(P, 1);\n    vColor = vec3(sin(aPosition.x)/2.0+0.5,\n                     cos(aPosition.y)/2.0+0.5, \n                     sin(aPosition.z)/2.0+0.5);\n}\n"],y))
return z},"mQ","ey",function(){var z,y
z=G.bI("InstancedF")
y=[P.d]
z.aU(H.m(["vColor"],y))
z.b_(H.m(["void main() {  \n     oFragColor = vec4( vColor, 1. );\n}\n     "],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.R]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.B]},{func:1,ret:P.O,args:[W.a8]},{func:1,ret:P.O,args:[P.d]},{func:1,ret:P.F,args:[W.aV]},{func:1,ret:P.O,args:[W.P,P.d,P.d,W.br]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a1]},{func:1,ret:[P.aa,,],args:[,]},{func:1,ret:P.O,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.E]},{func:1,args:[W.Z]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:-1,args:[W.Z]},{func:1,ret:-1,args:[P.U,T.x]},{func:1,ret:P.F,args:[W.aJ]},{func:1,ret:P.B,args:[P.B,P.c]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.kA(d||a)
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
Isolate.aO=a.aO
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
if(typeof dartMainRunner==="function")dartMainRunner(U.ec,[])
else U.ec([])})})()
//# sourceMappingURL=instancer.dart.js.map
