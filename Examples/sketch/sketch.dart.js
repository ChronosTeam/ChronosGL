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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bc=function(){}
var dart=[["","",,H,{"^":"",lS:{"^":"c;a"}}],["","",,J,{"^":"",
cD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c0:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cC==null){H.kQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.dN("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cG()]
if(v!=null)return v
v=H.kV(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cG(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
f:{"^":"c;",
D:function(a,b){return a===b},
gA:function(a){return H.b0(a)},
k:["cD",function(a){return"Instance of '"+H.b1(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hu:{"^":"f;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isO:1},
dl:{"^":"f;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isG:1},
cl:{"^":"f;",
gA:function(a){return 0},
k:["cF",function(a){return String(a)}]},
i1:{"^":"cl;"},
b4:{"^":"cl;"},
bp:{"^":"cl;",
k:function(a){var z=a[$.ey()]
if(z==null)return this.cF(a)
return"JavaScript function for "+H.d(J.bi(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbk:1},
bm:{"^":"f;$ti",
l:function(a,b){H.z(b,H.q(a,0))
if(!!a.fixed$length)H.U(P.y("add"))
a.push(b)},
G:function(a,b){var z,y
H.t(b,"$isi",[H.q(a,0)],"$asi")
if(!!a.fixed$length)H.U(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.P)(b),++y)a.push(b[y])},
a3:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.d(a[y]))
return z.join(b)},
aZ:function(a,b){return H.dD(a,b,null,H.q(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
bt:function(a,b){var z,y
H.m(b,{func:1,ret:P.O,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.al(a))}return!1},
cv:function(a,b){if(!!a.immutable$list)H.U(P.y("sort"))
H.is(a,J.kp(),H.q(a,0))},
ak:function(a){return this.cv(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aG(a[z],b))return!0
return!1},
k:function(a){return P.cj(a,"[","]")},
gB:function(a){return new J.fF(a,a.length,0,[H.q(a,0)])},
gA:function(a){return H.b0(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.bb(a,b))
return a[b]},
i:function(a,b,c){H.z(c,H.q(a,0))
if(!!a.immutable$list)H.U(P.y("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bb(a,b))
a[b]=c},
$isw:1,
$asw:I.bc,
$isi:1,
$isa:1,
p:{
ht:function(a,b){return J.ck(H.l(a,[b]))},
ck:function(a){H.bx(a)
a.fixed$length=Array
return a},
lQ:[function(a,b){return J.f0(H.eq(a,"$isV"),H.eq(b,"$isV"))},"$2","kp",8,0,27]}},
lR:{"^":"bm;$ti"},
fF:{"^":"c;a,b,c,0d,$ti",
sb8:function(a){this.d=H.z(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.P(z))
x=this.c
if(x>=y){this.sb8(null)
return!1}this.sb8(z[x]);++this.c
return!0},
$isaW:1},
bn:{"^":"f;",
N:function(a,b){var z
H.cE(b)
if(typeof b!=="number")throw H.b(H.b9(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaf(b)
if(this.gaf(a)===z)return 0
if(this.gaf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaf:function(a){return a===0?1/a<0:a<0},
c8:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.y(""+a+".toInt()"))},
dK:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.y(""+a+".ceil()"))},
dL:function(a,b,c){if(this.N(b,c)>0)throw H.b(H.b9(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
ec:function(a,b){var z
if(b>20)throw H.b(P.au(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaf(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
cH:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bq(a,b)},
E:function(a,b){return(a|0)===a?a/b|0:this.bq(a,b)},
bq:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.y("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
bo:function(a,b){var z
if(a>0)z=this.du(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
du:function(a,b){return b>31?0:a>>>b},
W:function(a,b){if(typeof b!=="number")throw H.b(H.b9(b))
return a>b},
$isV:1,
$asV:function(){return[P.F]},
$isa3:1,
$isF:1},
dk:{"^":"bn;",$isC:1},
dj:{"^":"bn;"},
bo:{"^":"f;",
ar:function(a,b){if(b>=a.length)throw H.b(H.bb(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.v(b)
if(typeof b!=="string")throw H.b(P.d_(b,null,null))
return a+b},
cz:function(a,b,c){var z
if(c>a.length)throw H.b(P.au(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cw:function(a,b){return this.cz(a,b,0)},
cC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bL(b,null,null))
if(b>c)throw H.b(P.bL(b,null,null))
if(c>a.length)throw H.b(P.bL(c,null,null))
return a.substring(b,c)},
cB:function(a,b){return this.cC(a,b,null)},
eb:function(a){return a.toLowerCase()},
dM:function(a,b,c){if(c>a.length)throw H.b(P.au(c,0,a.length,null,null))
return H.l0(a,b,c)},
N:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.b(H.b9(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gA:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.b(H.bb(a,b))
return a[b]},
$isw:1,
$asw:I.bc,
$isV:1,
$asV:function(){return[P.e]},
$isi_:1,
$ise:1}}],["","",,H,{"^":"",
hq:function(){return new P.bN("No element")},
hs:function(){return new P.bN("Too many elements")},
hr:function(){return new P.bN("Too few elements")},
is:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.C,args:[c,c]})
H.bs(a,0,J.ae(a)-1,b,c)},
bs:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.ir(a,b,c,d,e)
else H.iq(a,b,c,d,e)},
ir:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.C,args:[e,e]})
for(z=b+1,y=J.aP(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a7(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
iq:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.C,args:[a2,a2]})
z=C.b.E(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.E(b+a0,2)
v=w-z
u=w+z
t=J.aP(a)
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
if(J.aG(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a6()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.W()
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
if(typeof e!=="number")return e.a6()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.W()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.W()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a6()
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
H.bs(a,b,m-2,a1,a2)
H.bs(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aG(a1.$2(t.h(a,m),r),0);)++m
for(;J.aG(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a6()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bs(a,m,l,a1,a2)}else H.bs(a,m,l,a1,a2)},
da:{"^":"i;"},
bq:{"^":"da;$ti",
gB:function(a){return new H.dq(this,this.gj(this),0,[H.cB(this,"bq",0)])},
aK:function(a,b){return this.cE(0,H.m(b,{func:1,ret:P.O,args:[H.cB(this,"bq",0)]}))}},
iC:{"^":"bq;a,b,c,$ti",
gd9:function(){var z=J.ae(this.a)
return z},
gdv:function(){var z,y
z=J.ae(this.a)
y=this.b
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.ae(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdv()+b
if(b>=0){y=this.gd9()
if(typeof y!=="number")return H.be(y)
y=z>=y}else y=!0
if(y)throw H.b(P.E(b,this,"index",null,null))
return J.cP(this.a,z)},
ea:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.aP(y)
w=x.gj(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.l(u,this.$ti)
for(s=0;s<v;++s){C.a.i(t,s,x.q(y,z+s))
if(x.gj(y)<w)throw H.b(P.al(this))}return t},
p:{
dD:function(a,b,c,d){return new H.iC(a,b,c,[d])}}},
dq:{"^":"c;a,b,c,0d,$ti",
sb9:function(a){this.d=H.z(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aP(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.al(z))
w=this.c
if(w>=x){this.sb9(null)
return!1}this.sb9(y.q(z,w));++this.c
return!0},
$isaW:1},
hG:{"^":"bq;a,b,$ti",
gj:function(a){return J.ae(this.a)},
q:function(a,b){return this.b.$1(J.cP(this.a,b))},
$asbq:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dO:{"^":"i;a,b,$ti",
gB:function(a){return new H.iO(J.bD(this.a),this.b,this.$ti)}},
iO:{"^":"aW;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gC(z)))return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bJ:{"^":"c;$ti"}}],["","",,H,{"^":"",
aF:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kI:function(a){return init.types[H.M(a)]},
kT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isx},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bi(a)
if(typeof z!=="string")throw H.b(H.b9(a))
return z},
b0:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b1:function(a){return H.i2(a)+H.bU(H.ai(a),0,null)},
i2:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isb4){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aF(w.length>1&&C.i.ar(w,0)===36?C.i.cB(w,1):w)},
aJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i9:function(a){var z=H.aJ(a).getFullYear()+0
return z},
i7:function(a){var z=H.aJ(a).getMonth()+1
return z},
i3:function(a){var z=H.aJ(a).getDate()+0
return z},
i4:function(a){var z=H.aJ(a).getHours()+0
return z},
i6:function(a){var z=H.aJ(a).getMinutes()+0
return z},
i8:function(a){var z=H.aJ(a).getSeconds()+0
return z},
i5:function(a){var z=H.aJ(a).getMilliseconds()+0
return z},
be:function(a){throw H.b(H.b9(a))},
k:function(a,b){if(a==null)J.ae(a)
throw H.b(H.bb(a,b))},
bb:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.M(J.ae(a))
if(!(b<0)){if(typeof z!=="number")return H.be(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bL(b,"index",null)},
b9:function(a){return new P.aI(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.dw()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.et})
z.name=""}else z.toString=H.et
return z},
et:function(){return J.bi(this.dartException)},
U:function(a){throw H.b(a)},
P:function(a){throw H.b(P.al(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bo(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cm(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dv(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eD()
u=$.eE()
t=$.eF()
s=$.eG()
r=$.eJ()
q=$.eK()
p=$.eI()
$.eH()
o=$.eM()
n=$.eL()
m=v.L(y)
if(m!=null)return z.$1(H.cm(H.v(y),m))
else{m=u.L(y)
if(m!=null){m.method="call"
return z.$1(H.cm(H.v(y),m))}else{m=t.L(y)
if(m==null){m=s.L(y)
if(m==null){m=r.L(y)
if(m==null){m=q.L(y)
if(m==null){m=p.L(y)
if(m==null){m=s.L(y)
if(m==null){m=o.L(y)
if(m==null){m=n.L(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dv(H.v(y),m))}}return z.$1(new H.iL(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dB()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dB()
return a},
bd:function(a){var z
if(a==null)return new H.e3(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e3(a)},
kE:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kS:function(a,b,c,d,e,f){H.h(a,"$isbk")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.de("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kS)
a.$identity=z
return z},
fQ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.ig(z).r}else x=d
w=e?Object.create(new H.iu().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a8
if(typeof u!=="number")return u.J()
$.a8=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d4(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kI,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d2:H.ce
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d4(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fN:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d4:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fP(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fN(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.J()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aS
if(v==null){v=H.bG("self")
$.aS=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.J()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aS
if(v==null){v=H.bG("self")
$.aS=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fO:function(a,b,c,d){var z,y
z=H.ce
y=H.d2
switch(b?-1:a){case 0:throw H.b(H.ik("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fP:function(a,b){var z,y,x,w,v,u,t,s
z=$.aS
if(z==null){z=H.bG("self")
$.aS=z}y=$.d1
if(y==null){y=H.bG("receiver")
$.d1=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fO(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a8
if(typeof y!=="number")return y.J()
$.a8=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a8
if(typeof y!=="number")return y.J()
$.a8=y+1
return new Function(z+y+"}")()},
cy:function(a,b,c,d,e,f,g){return H.fQ(a,b,H.M(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a1(a,"String"))},
ej:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a1(a,"double"))},
cE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a1(a,"num"))},
bX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a1(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a1(a,"int"))},
cF:function(a,b){throw H.b(H.a1(a,H.aF(H.v(b).substring(3))))},
kZ:function(a,b){throw H.b(H.d3(a,H.aF(H.v(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cF(a,b)},
aj:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kZ(a,b)},
eq:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cF(a,b)},
bx:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.b(H.a1(a,"List<dynamic>"))},
kU:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cF(a,b)},
cz:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
bw:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cz(J.B(a))
if(z==null)return!1
return H.ea(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.cu)return a
$.cu=!0
try{if(H.bw(a,b))return a
z=H.by(b)
y=H.a1(a,z)
throw H.b(y)}finally{$.cu=!1}},
bZ:function(a,b){if(a!=null&&!H.cx(a,b))H.U(H.a1(a,H.by(b)))
return a},
ee:function(a){var z,y
z=J.B(a)
if(!!z.$iso){y=H.cz(z)
if(y!=null)return H.by(y)
return"Closure"}return H.b1(a)},
l1:function(a){throw H.b(new P.fX(H.v(a)))},
em:function(a){return init.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
ai:function(a){if(a==null)return
return a.$ti},
nm:function(a,b,c){return H.aR(a["$as"+H.d(c)],H.ai(b))},
a4:function(a,b,c,d){var z
H.v(c)
H.M(d)
z=H.aR(a["$as"+H.d(c)],H.ai(b))
return z==null?null:z[d]},
cB:function(a,b,c){var z
H.v(b)
H.M(c)
z=H.aR(a["$as"+H.d(b)],H.ai(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.M(b)
z=H.ai(a)
return z==null?null:z[b]},
by:function(a){return H.aC(a,null)},
aC:function(a,b){var z,y
H.t(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aF(a[0].builtin$cls)+H.bU(a,1,b)
if(typeof a=="function")return H.aF(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.d(b[y])}if('func' in a)return H.ko(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ko:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.t(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.l([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.J(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aC(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aC(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aC(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kD(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aC(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bU:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cr("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return"<"+z.k(0)+">"},
kH:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$iso){y=H.cz(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ai(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aD:function(a,b,c,d){var z,y
H.v(b)
H.bx(c)
H.v(d)
if(a==null)return!1
z=H.ai(a)
y=J.B(a)
if(y[b]==null)return!1
return H.eh(H.aR(y[d],z),null,c,null)},
bz:function(a,b,c,d){H.v(b)
H.bx(c)
H.v(d)
if(a==null)return a
if(H.aD(a,b,c,d))return a
throw H.b(H.d3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.v(b)
H.bx(c)
H.v(d)
if(a==null)return a
if(H.aD(a,b,c,d))return a
throw H.b(H.a1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
eh:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.X(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.X(a[y],b,c[y],d))return!1
return!0},
nj:function(a,b,c){return a.apply(b,H.aR(J.B(b)["$as"+H.d(c)],H.ai(b)))},
eo:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="G"||a===-1||a===-2||H.eo(z)}return!1},
cx:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="G"||b===-1||b===-2||H.eo(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bw(a,b)}z=J.B(a).constructor
y=H.ai(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.X(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cx(a,b))throw H.b(H.a1(a,H.by(b)))
return a},
X:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.X(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.ea(a,b,c,d)
if('func' in a)return c.builtin$cls==="bk"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.X("type" in a?a.type:null,b,x,d)
else if(H.X(a,b,x,d))return!0
else{if(!('$is'+"aV" in y.prototype))return!1
w=y.prototype["$as"+"aV"]
v=H.aR(w,z?a.slice(1):null)
return H.X(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eh(H.aR(r,z),b,u,d)},
ea:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.X(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.X(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.X(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.X(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kY(m,b,l,d)},
kY:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.X(c[w],d,a[w],b))return!1}return!0},
nk:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
kV:function(a){var z,y,x,w,v,u
z=H.v($.en.$1(a))
y=$.bY[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.eg.$2(a,z))
if(z!=null){y=$.bY[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.bY[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.er(a,x)
if(v==="*")throw H.b(P.dN(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.er(a,x)},
er:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cD(a,!1,null,!!a.$isx)},
kX:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cD(z,c,null,null)},
kQ:function(){if(!0===$.cC)return
$.cC=!0
H.kR()},
kR:function(){var z,y,x,w,v,u,t,s
$.bY=Object.create(null)
$.c2=Object.create(null)
H.kM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.es.$1(v)
if(u!=null){t=H.kX(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kM:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aO(C.O,H.aO(C.T,H.aO(C.z,H.aO(C.z,H.aO(C.S,H.aO(C.P,H.aO(C.Q(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.en=new H.kN(v)
$.eg=new H.kO(u)
$.es=new H.kP(t)},
aO:function(a,b){return a(b)||b},
l0:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ie:{"^":"c;a,b,c,d,e,f,r,0x",p:{
ig:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ck(z)
y=z[0]
x=z[1]
return new H.ie(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iF:{"^":"c;a,b,c,d,e,f",
L:function(a){var z,y,x
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
ab:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.l([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hY:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dv:function(a,b){return new H.hY(a,b==null?null:b.method)}}},
hv:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
cm:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hv(a,y,z?null:b.receiver)}}},
iL:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l2:{"^":"o:5;a",
$1:function(a){if(!!J.B(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e3:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa0:1},
o:{"^":"c;",
k:function(a){return"Closure '"+H.b1(this).trim()+"'"},
gco:function(){return this},
$isbk:1,
gco:function(){return this}},
dE:{"^":"o;"},
iu:{"^":"dE;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aF(z)+"'"}},
cd:{"^":"dE;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b0(this.a)
else y=typeof z!=="object"?J.ak(z):H.b0(z)
return(y^H.b0(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.b1(z)+"'")},
p:{
ce:function(a){return a.a},
d2:function(a){return a.c},
bG:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.ck(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iG:{"^":"N;a",
k:function(a){return this.a},
p:{
a1:function(a,b){return new H.iG("TypeError: "+P.bI(a)+": type '"+H.ee(a)+"' is not a subtype of type '"+b+"'")}}},
fL:{"^":"N;a",
k:function(a){return this.a},
p:{
d3:function(a,b){return new H.fL("CastError: "+P.bI(a)+": type '"+H.ee(a)+"' is not a subtype of type '"+b+"'")}}},
ij:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
ik:function(a){return new H.ij(a)}}},
dK:{"^":"c;a,0b,0c,0d",
gad:function(){var z=this.b
if(z==null){z=H.by(this.a)
this.b=z}return z},
k:function(a){return this.gad()},
gA:function(a){var z=this.d
if(z==null){z=C.i.gA(this.gad())
this.d=z}return z},
D:function(a,b){if(b==null)return!1
return b instanceof H.dK&&this.gad()===b.gad()}},
dm:{"^":"dr;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gH:function(a){return new H.aq(this,[H.q(this,0)])},
ae:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d6(z,b)}else{y=this.dX(b)
return y}},
dX:function(a){var z=this.d
if(z==null)return!1
return this.aF(this.ax(z,J.ak(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ab(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ab(w,b)
x=y==null?null:y.b
return x}else return this.dY(b)},
dY:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ax(z,J.ak(a)&0x3ffffff)
x=this.aF(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.az()
this.b=z}this.ba(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.az()
this.c=y}this.ba(y,b,c)}else{x=this.d
if(x==null){x=this.az()
this.d=x}w=J.ak(b)&0x3ffffff
v=this.ax(x,w)
if(v==null)this.aC(x,w,[this.ap(b,c)])
else{u=this.aF(v,b)
if(u>=0)v[u].b=c
else v.push(this.ap(b,c))}}},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.al(this))
z=z.c}},
ba:function(a,b,c){var z
H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
z=this.ab(a,b)
if(z==null)this.aC(a,b,this.ap(b,c))
else z.b=c},
bc:function(){this.r=this.r+1&67108863},
ap:function(a,b){var z,y
z=new H.hA(H.z(a,H.q(this,0)),H.z(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bc()
return z},
aF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
k:function(a){return P.ds(this)},
ab:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aC:function(a,b,c){a[b]=c},
d7:function(a,b){delete a[b]},
d6:function(a,b){return this.ab(a,b)!=null},
az:function(){var z=Object.create(null)
this.aC(z,"<non-identifier-key>",z)
this.d7(z,"<non-identifier-key>")
return z},
$isdn:1},
hA:{"^":"c;a,b,0c,0d"},
aq:{"^":"da;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.hB(z,z.r,this.$ti)
y.c=z.e
return y}},
hB:{"^":"c;a,b,0c,0d,$ti",
sbb:function(a){this.d=H.z(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.al(z))
else{z=this.c
if(z==null){this.sbb(null)
return!1}else{this.sbb(z.a)
this.c=this.c.c
return!0}}},
$isaW:1},
kN:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
kO:{"^":"o:13;a",
$2:function(a,b){return this.a(a,b)}},
kP:{"^":"o:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
kD:function(a){return J.ht(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bT:function(a){var z,y
if(!!J.B(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bb(b,a))},
hT:{"^":"f;",
df:function(a,b,c,d){var z=P.au(b,0,c,d,null)
throw H.b(z)},
bf:function(a,b,c,d){if(b>>>0!==b||b>c)this.df(a,b,c,d)},
$isiH:1,
"%":"DataView;ArrayBufferView;bK|dY|dZ|cp|e_|e0|as"},
bK:{"^":"hT;",
gj:function(a){return a.length},
dt:function(a,b,c,d,e){var z,y,x
H.h(d,"$isbK")
z=a.length
this.bf(a,b,z,"start")
this.bf(a,c,z,"end")
if(b>c)throw H.b(P.au(b,0,c,null,null))
y=c-b
x=d.length
if(x-e<y)throw H.b(P.bO("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$isw:1,
$asw:I.bc,
$isx:1,
$asx:I.bc},
cp:{"^":"dZ;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ej(c)
H.ad(b,a,a.length)
a[b]=c},
M:function(a,b,c,d,e){H.t(d,"$isi",[P.a3],"$asi")
if(!!J.B(d).$iscp){this.dt(a,b,c,d,e)
return}this.b0(a,b,c,d,e)},
a0:function(a,b,c,d){return this.M(a,b,c,d,0)},
$asbJ:function(){return[P.a3]},
$asn:function(){return[P.a3]},
$isi:1,
$asi:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
"%":"Float64Array"},
as:{"^":"e0;",
i:function(a,b,c){H.M(c)
H.ad(b,a,a.length)
a[b]=c},
M:function(a,b,c,d,e){H.t(d,"$isi",[P.C],"$asi")
this.b0(a,b,c,d,e)},
a0:function(a,b,c,d){return this.M(a,b,c,d,0)},
$asbJ:function(){return[P.C]},
$asn:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isa:1,
$asa:function(){return[P.C]}},
hS:{"^":"cp;",$isag:1,"%":"Float32Array"},
m0:{"^":"as;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m1:{"^":"as;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isho:1,
"%":"Int32Array"},
m2:{"^":"as;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m3:{"^":"as;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hU:{"^":"as;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ismS:1,
"%":"Uint32Array"},
m4:{"^":"as;",
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ismT:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
m5:{"^":"as;",
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dY:{"^":"bK+n;"},
dZ:{"^":"dY+bJ;"},
e_:{"^":"bK+n;"},
e0:{"^":"e_+bJ;"}}],["","",,P,{"^":"",
iS:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kw()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ba(new P.iU(z),1)).observe(y,{childList:true})
return new P.iT(z,y,x)}else if(self.setImmediate!=null)return P.kx()
return P.ky()},
n2:[function(a){self.scheduleImmediate(H.ba(new P.iV(H.m(a,{func:1,ret:-1})),0))},"$1","kw",4,0,4],
n3:[function(a){self.setImmediate(H.ba(new P.iW(H.m(a,{func:1,ret:-1})),0))},"$1","kx",4,0,4],
n4:[function(a){H.m(a,{func:1,ret:-1})
P.k6(0,a)},"$1","ky",4,0,4],
ks:function(a,b){if(H.bw(a,{func:1,args:[P.c,P.a0]}))return H.m(a,{func:1,ret:null,args:[P.c,P.a0]})
if(H.bw(a,{func:1,args:[P.c]}))return H.m(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.d_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kr:function(){var z,y
for(;z=$.aN,z!=null;){$.b8=null
y=z.b
$.aN=y
if(y==null)$.b7=null
z.a.$0()}},
nh:[function(){$.cv=!0
try{P.kr()}finally{$.b8=null
$.cv=!1
if($.aN!=null)$.cH().$1(P.ei())}},"$0","ei",0,0,1],
ed:function(a){var z=new P.dQ(H.m(a,{func:1,ret:-1}))
if($.aN==null){$.b7=z
$.aN=z
if(!$.cv)$.cH().$1(P.ei())}else{$.b7.b=z
$.b7=z}},
kv:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.ed(a)
$.b8=$.b7
return}y=new P.dQ(a)
x=$.b8
if(x==null){y.b=z
$.b8=y
$.aN=y}else{y.b=x.b
x.b=y
$.b8=y
if(y.b==null)$.b7=y}},
l_:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.I
if(C.f===y){P.bW(null,null,C.f,a)
return}y.toString
P.bW(null,null,y,H.m(y.bw(a),z))},
bV:function(a,b,c,d,e){var z={}
z.a=d
P.kv(new P.kt(z,e))},
eb:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.I
if(y===c)return d.$0()
$.I=c
z=y
try{y=d.$0()
return y}finally{$.I=z}},
ec:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.I
if(y===c)return d.$1(e)
$.I=c
z=y
try{y=d.$1(e)
return y}finally{$.I=z}},
ku:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.I
if(y===c)return d.$2(e,f)
$.I=c
z=y
try{y=d.$2(e,f)
return y}finally{$.I=z}},
bW:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bw(d):c.dH(d,-1)
P.ed(d)},
iU:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iT:{"^":"o:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iV:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iW:{"^":"o:0;a",
$0:function(){this.a.$0()}},
k5:{"^":"c;a,0b,c",
d2:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ba(new P.k7(this,b),0),a)
else throw H.b(P.y("`setTimeout()` not found."))},
p:{
k6:function(a,b){var z=new P.k5(!0,0)
z.d2(a,b)
return z}}},
k7:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iZ:{"^":"c;$ti"},
k0:{"^":"iZ;a,$ti"},
aM:{"^":"c;0a,b,c,d,e,$ti",
dZ:function(a){if(this.c!==6)return!0
return this.b.b.aI(H.m(this.d,{func:1,ret:P.O,args:[P.c]}),a.a,P.O,P.c)},
dW:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bw(z,{func:1,args:[P.c,P.a0]}))return H.bZ(w.e5(z,a.a,a.b,null,y,P.a0),x)
else return H.bZ(w.aI(H.m(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
ac:{"^":"c;bp:a<,b,0dq:c<,$ti",
c7:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.I
if(y!==C.f){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ks(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ac(0,$.I,[c])
w=b==null?1:3
this.be(new P.aM(x,w,a,b,[z,c]))
return x},
c6:function(a,b){return this.c7(a,null,b)},
be:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaM")
this.c=a}else{if(z===2){y=H.h(this.c,"$isac")
z=y.a
if(z<4){y.be(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bW(null,null,z,H.m(new P.jd(this,a),{func:1,ret:-1}))}},
bm:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaM")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isac")
y=u.a
if(y<4){u.bm(a)
return}this.a=y
this.c=u.c}z.a=this.ac(a)
y=this.b
y.toString
P.bW(null,null,y,H.m(new P.ji(z,this),{func:1,ret:-1}))}},
aB:function(){var z=H.h(this.c,"$isaM")
this.c=null
return this.ac(z)},
ac:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
as:function(a){var z,y,x
z=H.q(this,0)
H.bZ(a,{futureOr:1,type:z})
y=this.$ti
if(H.aD(a,"$isaV",y,"$asaV"))if(H.aD(a,"$isac",y,null))P.dT(a,this)
else P.je(a,this)
else{x=this.aB()
H.z(a,z)
this.a=4
this.c=a
P.b6(this,x)}},
bh:function(a,b){var z
H.h(b,"$isa0")
z=this.aB()
this.a=8
this.c=new P.W(a,b)
P.b6(this,z)},
$isaV:1,
p:{
je:function(a,b){var z,y,x
b.a=1
try{a.c7(new P.jf(b),new P.jg(b),null)}catch(x){z=H.a5(x)
y=H.bd(x)
P.l_(new P.jh(b,z,y))}},
dT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isac")
if(z>=4){y=b.aB()
b.a=a.a
b.c=a.c
P.b6(b,y)}else{y=H.h(b.c,"$isaM")
b.a=2
b.c=a
a.bm(y)}},
b6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isW")
y=y.b
u=v.a
t=v.b
y.toString
P.bV(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b6(z.a,b)}y=z.a
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
if(p){H.h(r,"$isW")
y=y.b
u=r.a
t=r.b
y.toString
P.bV(null,null,y,u,t)
return}o=$.I
if(o!=q)$.I=q
else o=null
y=b.c
if(y===8)new P.jl(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jk(x,b,r).$0()}else if((y&2)!==0)new P.jj(z,x,b).$0()
if(o!=null)$.I=o
y=x.b
if(!!J.B(y).$isaV){if(y.a>=4){n=H.h(t.c,"$isaM")
t.c=null
b=t.ac(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dT(y,t)
return}}m=b.b
n=H.h(m.c,"$isaM")
m.c=null
b=m.ac(n)
y=x.a
u=x.b
if(!y){H.z(u,H.q(m,0))
m.a=4
m.c=u}else{H.h(u,"$isW")
m.a=8
m.c=u}z.a=m
y=m}}}},
jd:{"^":"o:0;a,b",
$0:function(){P.b6(this.a,this.b)}},
ji:{"^":"o:0;a,b",
$0:function(){P.b6(this.b,this.a.a)}},
jf:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.as(a)}},
jg:{"^":"o:16;a",
$2:function(a,b){H.h(b,"$isa0")
this.a.bh(a,b)},
$1:function(a){return this.$2(a,null)}},
jh:{"^":"o:0;a,b,c",
$0:function(){this.a.bh(this.b,this.c)}},
jl:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c2(H.m(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.bd(v)
if(this.d){w=H.h(this.a.a.c,"$isW").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isW")
else u.b=new P.W(y,x)
u.a=!0
return}if(!!J.B(z).$isaV){if(z instanceof P.ac&&z.gbp()>=4){if(z.gbp()===8){w=this.b
w.b=H.h(z.gdq(),"$isW")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.c6(new P.jm(t),null)
w.a=!1}}},
jm:{"^":"o:17;a",
$1:function(a){return this.a}},
jk:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.z(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.aI(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.bd(t)
x=this.a
x.b=new P.W(z,y)
x.a=!0}}},
jj:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isW")
w=this.c
if(w.dZ(z)&&w.e!=null){v=this.b
v.b=w.dW(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.bd(u)
w=H.h(this.a.a.c,"$isW")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.W(y,x)
s.a=!0}}},
dQ:{"^":"c;a,0b"},
iy:{"^":"c;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.ac(0,$.I,[P.C])
z.a=0
x=H.q(this,0)
w=H.m(new P.iA(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.iB(z,y),{func:1,ret:-1})
W.aL(this.a,this.b,w,!1,x)
return y}},
iA:{"^":"o;a,b",
$1:function(a){H.z(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.q(this.b,0)]}}},
iB:{"^":"o:0;a,b",
$0:function(){this.b.as(this.a.a)}},
iz:{"^":"c;"},
W:{"^":"c;a,b",
k:function(a){return H.d(this.a)},
$isN:1},
kd:{"^":"c;",$isn0:1},
kt:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dw()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
jK:{"^":"kd;",
e6:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.f===$.I){a.$0()
return}P.eb(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.bd(x)
P.bV(null,null,this,z,H.h(y,"$isa0"))}},
e7:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.f===$.I){a.$1(b)
return}P.ec(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.bd(x)
P.bV(null,null,this,z,H.h(y,"$isa0"))}},
dH:function(a,b){return new P.jM(this,H.m(a,{func:1,ret:b}),b)},
bw:function(a){return new P.jL(this,H.m(a,{func:1,ret:-1}))},
dI:function(a,b){return new P.jN(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
c2:function(a,b){H.m(a,{func:1,ret:b})
if($.I===C.f)return a.$0()
return P.eb(null,null,this,a,b)},
aI:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.I===C.f)return a.$1(b)
return P.ec(null,null,this,a,b,c,d)},
e5:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.I===C.f)return a.$2(b,c)
return P.ku(null,null,this,a,b,c,d,e,f)}},
jM:{"^":"o;a,b,c",
$0:function(){return this.a.c2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jL:{"^":"o:1;a,b",
$0:function(){return this.a.e6(this.b)}},
jN:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.e7(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dp:function(a,b,c){H.bx(a)
return H.t(H.kE(a,new H.dm(0,0,[b,c])),"$isdn",[b,c],"$asdn")},
Z:function(a,b){return new H.dm(0,0,[a,b])},
a_:function(a,b,c,d){return new P.jt(0,0,[d])},
hp:function(a,b,c){var z,y
if(P.cw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.l([],[P.e])
y=$.bf()
C.a.l(y,a)
try{P.kq(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dC(b,H.kU(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cj:function(a,b,c){var z,y,x
if(P.cw(a))return b+"..."+c
z=new P.cr(b)
y=$.bf()
C.a.l(y,a)
try{x=z
x.a=P.dC(x.gX(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gX()+c
y=z.gX()
return y.charCodeAt(0)==0?y:y},
cw:function(a){var z,y
for(z=0;y=$.bf(),z<y.length;++z)if(a===y[z])return!0
return!1},
kq:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[P.e],"$asa")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.d(z.gC(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.u();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
co:function(a,b){var z,y,x
z=P.a_(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.P)(a),++x)z.l(0,H.z(a[x],b))
return z},
ds:function(a){var z,y,x
z={}
if(P.cw(a))return"{...}"
y=new P.cr("")
try{C.a.l($.bf(),a)
x=y
x.a=x.gX()+"{"
z.a=!0
J.fb(a,new P.hF(z,y))
z=y
z.a=z.gX()+"}"}finally{z=$.bf()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gX()
return z.charCodeAt(0)==0?z:z},
jt:{"^":"jo;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){var z=new P.dX(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbv")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbv")!=null}else return this.d5(b)},
d5:function(a){var z=this.d
if(z==null)return!1
return this.aw(this.bk(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ct()
this.b=z}return this.bd(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ct()
this.c=y}return this.bd(y,b)}else return this.d3(0,b)},
d3:function(a,b){var z,y,x
H.z(b,H.q(this,0))
z=this.d
if(z==null){z=P.ct()
this.d=z}y=this.bi(b)
x=z[y]
if(x==null)z[y]=[this.aA(b)]
else{if(this.aw(x,b)>=0)return!1
x.push(this.aA(b))}return!0},
c1:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bn(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bn(this.c,b)
else return this.dj(0,b)},
dj:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bk(z,b)
x=this.aw(y,b)
if(x<0)return!1
this.br(y.splice(x,1)[0])
return!0},
a2:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ay()}},
bd:function(a,b){H.z(b,H.q(this,0))
if(H.h(a[b],"$isbv")!=null)return!1
a[b]=this.aA(b)
return!0},
bn:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbv")
if(z==null)return!1
this.br(z)
delete a[b]
return!0},
ay:function(){this.r=this.r+1&67108863},
aA:function(a){var z,y
z=new P.bv(H.z(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ay()
return z},
br:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ay()},
bi:function(a){return J.ak(a)&0x3ffffff},
bk:function(a,b){return a[this.bi(b)]},
aw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
p:{
ct:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bv:{"^":"c;a,0b,0c"},
dX:{"^":"c;a,b,0c,0d,$ti",
sbg:function(a){this.d=H.z(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.al(z))
else{z=this.c
if(z==null){this.sbg(null)
return!1}else{this.sbg(H.z(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaW:1,
p:{
ju:function(a,b,c){var z=new P.dX(a,b,[c])
z.c=a.e
return z}}},
jo:{"^":"il;"},
hC:{"^":"jv;",$isi:1,$isa:1},
n:{"^":"c;$ti",
gB:function(a){return new H.dq(a,this.gj(a),0,[H.a4(this,a,"n",0)])},
q:function(a,b){return this.h(a,b)},
dV:function(a,b,c,d){var z,y,x
H.z(b,d)
H.m(c,{func:1,ret:d,args:[d,H.a4(this,a,"n",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.al(a))}return y},
aZ:function(a,b){return H.dD(a,b,null,H.a4(this,a,"n",0))},
bT:function(a,b,c,d){var z
H.z(d,H.a4(this,a,"n",0))
P.dy(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.i(a,z,d)},
M:["b0",function(a,b,c,d,e){var z,y,x,w,v
z=H.a4(this,a,"n",0)
H.t(d,"$isi",[z],"$asi")
P.dy(b,c,this.gj(a),null,null,null)
y=c-b
if(y===0)return
if(H.aD(d,"$isa",[z],"$asa")){x=e
w=d}else{w=J.fo(d,e).ea(0,!1)
x=0}if(x+y>w.length)throw H.b(H.hr())
if(x<b)for(v=y-1;v>=0;--v){z=x+v
if(z>=w.length)return H.k(w,z)
this.i(a,b+v,w[z])}else for(v=0;v<y;++v){z=x+v
if(z>=w.length)return H.k(w,z)
this.i(a,b+v,w[z])}},function(a,b,c,d){return this.M(a,b,c,d,0)},"a0",null,null,"geh",13,2,null],
aj:function(a,b,c){H.t(c,"$isi",[H.a4(this,a,"n",0)],"$asi")
this.a0(a,b,b+c.length,c)},
k:function(a){return P.cj(a,"[","]")}},
dr:{"^":"R;"},
hF:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
R:{"^":"c;$ti",
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.a4(this,a,"R",0),H.a4(this,a,"R",1)]})
for(z=J.bD(this.gH(a));z.u();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.ae(this.gH(a))},
k:function(a){return P.ds(a)},
$isJ:1},
im:{"^":"c;$ti",
G:function(a,b){var z
for(z=J.bD(H.t(b,"$isi",this.$ti,"$asi"));z.u();)this.l(0,z.gC(z))},
k:function(a){return P.cj(this,"{","}")},
$isi:1,
$ismo:1},
il:{"^":"im;"},
jv:{"^":"c+n;"}}],["","",,P,{"^":"",
ha:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.b1(a)+"'"},
bI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bi(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ha(a)},
de:function(a){return new P.ja(a)},
aE:function(a){H.c4(H.d(a))},
O:{"^":"c;"},
"+bool":0,
bH:{"^":"c;a,b",
D:function(a,b){if(b==null)return!1
return b instanceof P.bH&&this.a===b.a&&!0},
N:function(a,b){return C.b.N(this.a,H.h(b,"$isbH").a)},
gA:function(a){var z=this.a
return(z^C.b.bo(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fY(H.i9(this))
y=P.bj(H.i7(this))
x=P.bj(H.i3(this))
w=P.bj(H.i4(this))
v=P.bj(H.i6(this))
u=P.bj(H.i8(this))
t=P.fZ(H.i5(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isV:1,
$asV:function(){return[P.bH]},
p:{
fY:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bj:function(a){if(a>=10)return""+a
return"0"+a}}},
a3:{"^":"F;"},
"+double":0,
aT:{"^":"c;a",
W:function(a,b){return C.b.W(this.a,H.h(b,"$isaT").a)},
D:function(a,b){if(b==null)return!1
return b instanceof P.aT&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.b.N(this.a,H.h(b,"$isaT").a)},
k:function(a){var z,y,x,w,v
z=new P.h7()
y=this.a
if(y<0)return"-"+new P.aT(0-y).k(0)
x=z.$1(C.b.E(y,6e7)%60)
w=z.$1(C.b.E(y,1e6)%60)
v=new P.h6().$1(y%1e6)
return""+C.b.E(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isV:1,
$asV:function(){return[P.aT]},
p:{
h5:function(a,b,c,d,e,f){return new P.aT(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h6:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h7:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"c;"},
dw:{"^":"N;",
k:function(a){return"Throw of null."}},
aI:{"^":"N;a,b,ag:c>,d",
gau:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gat:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gau()+y+x
if(!this.a)return w
v=this.gat()
u=P.bI(this.b)
return w+v+": "+u},
p:{
d_:function(a,b,c){return new P.aI(!0,a,b,c)}}},
cq:{"^":"aI;e,f,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
id:function(a){return new P.cq(null,null,!1,null,null,a)},
bL:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
dy:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.au(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.au(b,a,c,"end",f))
return b}}},
hn:{"^":"aI;e,j:f>,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a6()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
E:function(a,b,c,d,e){var z=H.M(e==null?J.ae(b):e)
return new P.hn(b,z,!0,a,c,"Index out of range")}}},
iM:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.iM(a)}}},
iK:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dN:function(a){return new P.iK(a)}}},
bN:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
bO:function(a){return new P.bN(a)}}},
fR:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bI(z)+"."},
p:{
al:function(a){return new P.fR(a)}}},
dB:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isN:1},
fX:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ja:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
bk:{"^":"c;"},
C:{"^":"F;"},
"+int":0,
i:{"^":"c;$ti",
aK:["cE",function(a,b){var z=H.cB(this,"i",0)
return new H.dO(this,H.m(b,{func:1,ret:P.O,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.u();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.U(P.au(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.u();){x=z.gC(z)
if(b===y)return x;++y}throw H.b(P.E(b,this,"index",null,y))},
k:function(a){return P.hp(this,"(",")")}},
aW:{"^":"c;$ti"},
a:{"^":"c;$ti",$isi:1},
"+List":0,
J:{"^":"c;$ti"},
G:{"^":"c;",
gA:function(a){return P.c.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
F:{"^":"c;",$isV:1,
$asV:function(){return[P.F]}},
"+num":0,
c:{"^":";",
D:function(a,b){return this===b},
gA:function(a){return H.b0(this)},
k:function(a){return"Instance of '"+H.b1(this)+"'"},
toString:function(){return this.k(this)}},
a0:{"^":"c;"},
e:{"^":"c;",$isV:1,
$asV:function(){return[P.e]},
$isi_:1},
"+String":0,
cr:{"^":"c;X:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dC:function(a,b,c){var z=J.bD(b)
if(!z.u())return a
if(c.length===0){do a+=H.d(z.gC(z))
while(z.u())}else{a+=H.d(z.gC(z))
for(;z.u();)a=a+c+H.d(z.gC(z))}return a}}}}],["","",,W,{"^":"",
h8:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).O(z,a,b,c)
y.toString
z=W.u
z=new H.dO(new W.a2(y),H.m(new W.h9(),{func:1,ret:P.O,args:[z]}),[z])
x=z.gB(z)
if(!x.u())H.U(H.hq())
w=x.gC(x)
if(x.u())H.U(H.hs())
return H.h(w,"$isQ")},
dd:function(a){H.h(a,"$isL")
return"wheel"},
aU:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fg(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
j7:function(a,b){return document.createElement(a)},
bS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dW:function(a,b,c,d){var z,y
z=W.bS(W.bS(W.bS(W.bS(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e9:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j1(a)
if(!!J.B(z).$isL)return z
return}else return H.h(a,"$isL")},
ef:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.I
if(z===C.f)return a
return z.dI(a,b)},
K:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
l3:{"^":"f;0j:length=","%":"AccessibleNodeList"},
fD:{"^":"K;",
k:function(a){return String(a)},
$isfD:1,
"%":"HTMLAnchorElement"},
l4:{"^":"K;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d0:{"^":"K;",$isd0:1,"%":"HTMLBaseElement"},
fI:{"^":"f;","%":";Blob"},
bF:{"^":"K;",$isbF:1,"%":"HTMLBodyElement"},
cf:{"^":"K;0n:height=,0m:width=",
cp:function(a,b,c){var z=this.dc(a,b,P.kz(c,null))
return z},
dc:function(a,b,c){return a.getContext(b,c)},
$iscf:1,
"%":"HTMLCanvasElement"},
fK:{"^":"f;",
ai:function(a){return P.Y(a.getContextAttributes())},
dd:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
e2:function(a,b,c,d,e,f,g,h){this.di(a,P.kB(b),c,d)
return},
e1:function(a,b,c,d){return this.e2(a,b,c,d,null,null,null,null)},
di:function(a,b,c,d){return a.putImageData(b,c,d)},
"%":"CanvasRenderingContext2D"},
l9:{"^":"u;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fS:{"^":"cg;",$isfS:1,"%":"CSSNumericValue|CSSUnitValue"},
lc:{"^":"fV;0j:length=","%":"CSSPerspective"},
am:{"^":"f;",$isam:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fT:{"^":"j_;0j:length=",
aR:function(a,b){var z=this.de(a,this.aq(a,b))
return z==null?"":z},
aq:function(a,b){var z,y
z=$.ex()
y=z[b]
if(typeof y==="string")return y
y=this.dw(a,b)
z[b]=y
return y},
dw:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h_()+b
if(z in a)return z
return b},
de:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fU:{"^":"c;",
gn:function(a){return this.aR(a,"height")},
gm:function(a){return this.aR(a,"width")}},
cg:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fV:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
le:{"^":"cg;0j:length=","%":"CSSTransformValue"},
lf:{"^":"cg;0j:length=","%":"CSSUnparsedValue"},
lh:{"^":"f;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
h1:{"^":"K;","%":"HTMLDivElement"},
h2:{"^":"u;",
dB:function(a,b){return a.adoptNode(b)},
cq:function(a,b){return a.getElementById(b)},
e3:function(a,b){return a.querySelector(b)},
gbX:function(a){return new W.bt(a,"mousedown",!1,[W.S])},
gbY:function(a){return new W.bt(a,"mousemove",!1,[W.S])},
gbZ:function(a){return new W.bt(a,"mouseup",!1,[W.S])},
gc_:function(a){return new W.bt(a,H.v(W.dd(a)),!1,[W.aK])},
"%":"XMLDocument;Document"},
li:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
h3:{"^":"f;",
dP:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lj:{"^":"j3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c,"$isT",[P.F],"$asT")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.T,P.F]]},
$isx:1,
$asx:function(){return[[P.T,P.F]]},
$asn:function(){return[[P.T,P.F]]},
$isi:1,
$asi:function(){return[[P.T,P.F]]},
$isa:1,
$asa:function(){return[[P.T,P.F]]},
$asr:function(){return[[P.T,P.F]]},
"%":"ClientRectList|DOMRectList"},
h4:{"^":"f;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
D:function(a,b){var z
if(b==null)return!1
if(!H.aD(b,"$isT",[P.F],"$asT"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isT:1,
$asT:function(){return[P.F]},
"%":";DOMRectReadOnly"},
lk:{"^":"j5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.e]},
$isx:1,
$asx:function(){return[P.e]},
$asn:function(){return[P.e]},
$isi:1,
$asi:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"DOMStringList"},
ll:{"^":"f;0j:length=","%":"DOMTokenList"},
Q:{"^":"u;0e8:tagName=",
gdF:function(a){return new W.j6(a)},
k:function(a){return a.localName},
O:["al",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dc
if(z==null){z=H.l([],[W.aa])
y=new W.du(z)
C.a.l(z,W.dU(null))
C.a.l(z,W.e4())
$.dc=y
d=y}else d=z
z=$.db
if(z==null){z=new W.e8(d)
$.db=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.K).dP(y,"")
$.af=y
$.ch=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.h(y,"$isd0")
y.href=z.baseURI
z=$.af.head;(z&&C.L).I(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbF")}z=$.af
if(!!this.$isbF)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.o).I(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.W,a.tagName)){z=$.ch;(z&&C.C).cr(z,x)
z=$.ch
w=(z&&C.C).dN(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.I(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cU(x)
c.aW(w)
C.q.dB(document,w)
return w},function(a,b,c){return this.O(a,b,c,null)},"dO",null,null,"gem",5,5,null],
cu:function(a,b,c,d){a.textContent=null
this.I(a,this.O(a,b,c,d))},
ct:function(a,b){return this.cu(a,b,null,null)},
Z:function(a,b){return a.getAttribute(b)},
dk:function(a,b){return a.removeAttribute(b)},
gbX:function(a){return new W.bR(a,"mousedown",!1,[W.S])},
gbY:function(a){return new W.bR(a,"mousemove",!1,[W.S])},
gbZ:function(a){return new W.bR(a,"mouseup",!1,[W.S])},
gc_:function(a){return new W.bR(a,H.v(W.dd(a)),!1,[W.aK])},
$isQ:1,
"%":";Element"},
h9:{"^":"o:18;",
$1:function(a){return!!J.B(H.h(a,"$isu")).$isQ}},
ln:{"^":"K;0n:height=,0m:width=","%":"HTMLEmbedElement"},
an:{"^":"f;",$isan:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"f;",
dA:function(a,b,c,d){H.m(c,{func:1,args:[W.an]})
if(c!=null)this.d4(a,b,c,!1)},
d4:function(a,b,c,d){return a.addEventListener(b,H.ba(H.m(c,{func:1,args:[W.an]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e1|e2|e5|e6"},
ao:{"^":"fI;",$isao:1,"%":"File"},
lE:{"^":"jc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isao")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ao]},
$isx:1,
$asx:function(){return[W.ao]},
$asn:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asr:function(){return[W.ao]},
"%":"FileList"},
lF:{"^":"L;0j:length=","%":"FileWriter"},
lI:{"^":"K;0j:length=","%":"HTMLFormElement"},
ap:{"^":"f;",$isap:1,"%":"Gamepad"},
hi:{"^":"K;","%":"HTMLHeadElement"},
lJ:{"^":"f;0j:length=","%":"History"},
lK:{"^":"jq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asn:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hj:{"^":"h2;","%":"HTMLDocument"},
lL:{"^":"K;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lM:{"^":"f;0n:height=,0m:width=","%":"ImageBitmap"},
ci:{"^":"f;0V:data=,0n:height=,0m:width=",$isci:1,"%":"ImageData"},
lN:{"^":"K;0n:height=,0m:width=","%":"HTMLImageElement"},
lP:{"^":"K;0n:height=,0m:width=","%":"HTMLInputElement"},
aX:{"^":"dM;",$isaX:1,"%":"KeyboardEvent"},
hD:{"^":"f;",
k:function(a){return String(a)},
$ishD:1,
"%":"Location"},
hI:{"^":"K;","%":"HTMLAudioElement;HTMLMediaElement"},
lX:{"^":"f;0j:length=","%":"MediaList"},
lY:{"^":"jx;",
h:function(a,b){return P.Y(a.get(H.v(b)))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new W.hK(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hK:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lZ:{"^":"jy;",
h:function(a,b){return P.Y(a.get(H.v(b)))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new W.hL(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hL:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ar:{"^":"f;",$isar:1,"%":"MimeType"},
m_:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isar")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ar]},
$isx:1,
$asx:function(){return[W.ar]},
$asn:function(){return[W.ar]},
$isi:1,
$asi:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asr:function(){return[W.ar]},
"%":"MimeTypeArray"},
S:{"^":"dM;",
gbW:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b_(a.offsetX,a.offsetY,[P.F])
else{z=a.target
if(!J.B(W.e9(z)).$isQ)throw H.b(P.y("offsetX is only supported on elements"))
y=H.h(W.e9(z),"$isQ")
z=a.clientX
x=a.clientY
w=[P.F]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.b_(u,v,w),"$isb_",w,"$asb_")
if(typeof z!=="number")return z.a8()
if(typeof x!=="number")return x.a8()
return new P.b_(C.r.c8(z-u),C.r.c8(x-v),w)}},
$isS:1,
"%":";DragEvent|MouseEvent"},
a2:{"^":"hC;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.bO("No elements"))
if(y>1)throw H.b(P.bO("More than one element"))
return z.firstChild},
G:function(a,b){var z,y,x,w,v
H.t(b,"$isi",[W.u],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.I(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.h(c,"$isu")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.k(y,b)
J.eU(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.dg(z,z.length,-1,[H.a4(C.Y,z,"r",0)])},
M:function(a,b,c,d,e){H.t(d,"$isi",[W.u],"$asi")
throw H.b(P.y("Cannot setRange on Node list"))},
a0:function(a,b,c,d){return this.M(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asn:function(){return[W.u]},
$asi:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"L;0e0:previousSibling=",
e4:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cD(a):z},
I:function(a,b){return a.appendChild(b)},
dl:function(a,b){return a.removeChild(b)},
dm:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hV:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asn:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
m8:{"^":"K;0n:height=,0m:width=","%":"HTMLObjectElement"},
ma:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
mb:{"^":"f;0n:height=,0m:width=","%":"PaintSize"},
at:{"^":"f;0j:length=",$isat:1,"%":"Plugin"},
md:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isat")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$asn:function(){return[W.at]},
$isi:1,
$asi:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asr:function(){return[W.at]},
"%":"PluginArray"},
mf:{"^":"S;0n:height=,0m:width=","%":"PointerEvent"},
ic:{"^":"f;",
dN:function(a,b){return a.createContextualFragment(b)},
cr:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
ml:{"^":"jO;",
h:function(a,b){return P.Y(a.get(H.v(b)))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new W.ii(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"RTCStatsReport"},
ii:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mm:{"^":"f;0n:height=,0m:width=","%":"Screen"},
mn:{"^":"K;0j:length=","%":"HTMLSelectElement"},
av:{"^":"L;",$isav:1,"%":"SourceBuffer"},
mp:{"^":"e2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isav")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$asn:function(){return[W.av]},
$isi:1,
$asi:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asr:function(){return[W.av]},
"%":"SourceBufferList"},
aw:{"^":"f;",$isaw:1,"%":"SpeechGrammar"},
mq:{"^":"jU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaw")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asn:function(){return[W.aw]},
$isi:1,
$asi:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asr:function(){return[W.aw]},
"%":"SpeechGrammarList"},
ax:{"^":"f;0j:length=",$isax:1,"%":"SpeechRecognitionResult"},
mt:{"^":"jX;",
h:function(a,b){return this.bl(a,H.v(b))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.dh(a,z)
if(y==null)return
b.$2(y,this.bl(a,y))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new W.ix(z))
return z},
gj:function(a){return a.length},
bl:function(a,b){return a.getItem(b)},
dh:function(a,b){return a.key(b)},
$asR:function(){return[P.e,P.e]},
$isJ:1,
$asJ:function(){return[P.e,P.e]},
"%":"Storage"},
ix:{"^":"o:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ay:{"^":"f;",$isay:1,"%":"CSSStyleSheet|StyleSheet"},
iD:{"^":"K;",
O:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.al(a,b,c,d)
z=W.h8("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a2(y).G(0,new W.a2(z))
return y},
"%":"HTMLTableElement"},
mw:{"^":"K;",
O:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.al(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.O(z.createElement("table"),b,c,d)
z.toString
z=new W.a2(z)
x=z.ga7(z)
x.toString
z=new W.a2(x)
w=z.ga7(z)
y.toString
w.toString
new W.a2(y).G(0,new W.a2(w))
return y},
"%":"HTMLTableRowElement"},
mx:{"^":"K;",
O:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.al(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.O(z.createElement("table"),b,c,d)
z.toString
z=new W.a2(z)
x=z.ga7(z)
y.toString
x.toString
new W.a2(y).G(0,new W.a2(x))
return y},
"%":"HTMLTableSectionElement"},
dF:{"^":"K;",$isdF:1,"%":"HTMLTemplateElement"},
my:{"^":"f;0m:width=","%":"TextMetrics"},
az:{"^":"L;",$isaz:1,"%":"TextTrack"},
aA:{"^":"L;",$isaA:1,"%":"TextTrackCue|VTTCue"},
mz:{"^":"k4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaA")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aA]},
$isx:1,
$asx:function(){return[W.aA]},
$asn:function(){return[W.aA]},
$isi:1,
$asi:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asr:function(){return[W.aA]},
"%":"TextTrackCueList"},
mA:{"^":"e6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaz")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$asn:function(){return[W.az]},
$isi:1,
$asi:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asr:function(){return[W.az]},
"%":"TextTrackList"},
mE:{"^":"f;0j:length=","%":"TimeRanges"},
aB:{"^":"f;",$isaB:1,"%":"Touch"},
mF:{"^":"k9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaB")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aB]},
$isx:1,
$asx:function(){return[W.aB]},
$asn:function(){return[W.aB]},
$isi:1,
$asi:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asr:function(){return[W.aB]},
"%":"TouchList"},
mG:{"^":"f;0j:length=","%":"TrackDefaultList"},
dM:{"^":"an;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mV:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mX:{"^":"hI;0n:height=,0m:width=","%":"HTMLVideoElement"},
mY:{"^":"L;0j:length=","%":"VideoTrackList"},
mZ:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
n_:{"^":"f;0m:width=","%":"VTTRegion"},
aK:{"^":"S;",
gdR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.y("deltaY is not supported"))},
$isaK:1,
"%":"WheelEvent"},
iP:{"^":"L;",
gdE:function(a){var z,y,x
z=P.F
y=new P.ac(0,$.I,[z])
x=H.m(new W.iQ(new P.k0(y,[z])),{func:1,ret:-1,args:[P.F]})
this.da(a)
this.dn(a,W.ef(x,z))
return y},
dn:function(a,b){return a.requestAnimationFrame(H.ba(H.m(b,{func:1,ret:-1,args:[P.F]}),1))},
da:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
dC:function(a,b){return a.alert(b)},
$isdP:1,
"%":"DOMWindow|Window"},
iQ:{"^":"o:20;a",
$1:function(a){var z=this.a
a=H.bZ(H.cE(a),{futureOr:1,type:H.q(z,0)})
z=z.a
if(z.a!==0)H.U(P.bO("Future already completed"))
z.as(a)}},
dR:{"^":"u;0ag:name=",$isdR:1,"%":"Attr"},
n5:{"^":"kf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isam")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.am]},
$isx:1,
$asx:function(){return[W.am]},
$asn:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asr:function(){return[W.am]},
"%":"CSSRuleList"},
n7:{"^":"h4;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
D:function(a,b){var z
if(b==null)return!1
if(!H.aD(b,"$isT",[P.F],"$asT"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
n8:{"^":"kh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isap")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$asn:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asr:function(){return[W.ap]},
"%":"GamepadList"},
nd:{"^":"kj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asn:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ne:{"^":"kl;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isax")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asn:function(){return[W.ax]},
$isi:1,
$asi:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asr:function(){return[W.ax]},
"%":"SpeechRecognitionResultList"},
nf:{"^":"kn;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isay")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isi:1,
$asi:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asr:function(){return[W.ay]},
"%":"StyleSheetList"},
iX:{"^":"dr;d8:a<",
F:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gH(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.P)(z),++v){u=z[v]
b.$2(u,w.Z(x,u))}},
gH:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.l([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.h(z[w],"$isdR")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asR:function(){return[P.e,P.e]},
$asJ:function(){return[P.e,P.e]}},
j6:{"^":"iX;a",
h:function(a,b){return J.cb(this.a,H.v(b))},
gj:function(a){return this.gH(this).length}},
bt:{"^":"iy;a,b,c,$ti"},
bR:{"^":"bt;a,b,c,$ti"},
j8:{"^":"iz;a,b,c,d,e,$ti",p:{
aL:function(a,b,c,d,e){var z=W.ef(new W.j9(c),W.an)
if(z!=null&&!0)J.eV(a,b,z,!1)
return new W.j8(0,a,b,z,!1,[e])}}},
j9:{"^":"o:21;a",
$1:function(a){return this.a.$1(H.h(a,"$isan"))}},
bu:{"^":"c;a",
d_:function(a){var z,y
z=$.cI()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.V[y],W.kK())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kL())}},
Y:function(a){return $.eO().w(0,W.aU(a))},
U:function(a,b,c){var z,y,x
z=W.aU(a)
y=$.cI()
x=y.h(0,H.d(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bX(x.$4(a,b,c,this))},
$isaa:1,
p:{
dU:function(a){var z,y
z=document.createElement("a")
y=new W.jP(z,window.location)
y=new W.bu(y)
y.d_(a)
return y},
nb:[function(a,b,c,d){H.h(a,"$isQ")
H.v(b)
H.v(c)
H.h(d,"$isbu")
return!0},"$4","kK",16,0,12],
nc:[function(a,b,c,d){var z,y,x
H.h(a,"$isQ")
H.v(b)
H.v(c)
z=H.h(d,"$isbu").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kL",16,0,12]}},
r:{"^":"c;$ti",
gB:function(a){return new W.dg(a,this.gj(a),-1,[H.a4(this,a,"r",0)])},
M:function(a,b,c,d,e){H.t(d,"$isi",[H.a4(this,a,"r",0)],"$asi")
throw H.b(P.y("Cannot setRange on immutable List."))},
a0:function(a,b,c,d){return this.M(a,b,c,d,0)}},
du:{"^":"c;a",
Y:function(a){return C.a.bt(this.a,new W.hX(a))},
U:function(a,b,c){return C.a.bt(this.a,new W.hW(a,b,c))},
$isaa:1},
hX:{"^":"o:9;a",
$1:function(a){return H.h(a,"$isaa").Y(this.a)}},
hW:{"^":"o:9;a,b,c",
$1:function(a){return H.h(a,"$isaa").U(this.a,this.b,this.c)}},
jQ:{"^":"c;",
d1:function(a,b,c,d){var z,y,x
this.a.G(0,c)
z=b.aK(0,new W.jR())
y=b.aK(0,new W.jS())
this.b.G(0,z)
x=this.c
x.G(0,C.X)
x.G(0,y)},
Y:function(a){return this.a.w(0,W.aU(a))},
U:["cG",function(a,b,c){var z,y
z=W.aU(a)
y=this.c
if(y.w(0,H.d(z)+"::"+b))return this.d.dD(c)
else if(y.w(0,"*::"+b))return this.d.dD(c)
else{y=this.b
if(y.w(0,H.d(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.d(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isaa:1},
jR:{"^":"o:10;",
$1:function(a){return!C.a.w(C.u,H.v(a))}},
jS:{"^":"o:10;",
$1:function(a){return C.a.w(C.u,H.v(a))}},
k1:{"^":"jQ;e,a,b,c,d",
U:function(a,b,c){if(this.cG(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cb(a,"template")==="")return this.e.w(0,b)
return!1},
p:{
e4:function(){var z,y,x,w,v
z=P.e
y=P.co(C.t,z)
x=H.q(C.t,0)
w=H.m(new W.k2(),{func:1,ret:z,args:[x]})
v=H.l(["TEMPLATE"],[z])
y=new W.k1(y,P.a_(null,null,null,z),P.a_(null,null,null,z),P.a_(null,null,null,z),null)
y.d1(null,new H.hG(C.t,w,[x,z]),v,null)
return y}}},
k2:{"^":"o:22;",
$1:function(a){return"TEMPLATE::"+H.d(H.v(a))}},
k_:{"^":"c;",
Y:function(a){var z=J.B(a)
if(!!z.$isdA)return!1
z=!!z.$isH
if(z&&W.aU(a)==="foreignObject")return!1
if(z)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.cw(b,"on"))return!1
return this.Y(a)},
$isaa:1},
dg:{"^":"c;a,b,c,0d,$ti",
sbj:function(a){this.d=H.z(a,H.q(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbj(J.bg(this.a,z))
this.c=z
return!0}this.sbj(null)
this.c=y
return!1},
gC:function(a){return this.d},
$isaW:1},
j0:{"^":"c;a",$isL:1,$isdP:1,p:{
j1:function(a){if(a===window)return H.h(a,"$isdP")
else return new W.j0(a)}}},
aa:{"^":"c;"},
jP:{"^":"c;a,b",$ismU:1},
e8:{"^":"c;a",
aW:function(a){new W.kc(this).$2(a,null)},
a1:function(a,b){if(b==null)J.cU(a)
else J.bA(b,a)},
ds:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fd(a)
x=J.cb(y.gd8(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.bi(a)}catch(t){H.a5(t)}try{u=W.aU(a)
this.dr(H.h(a,"$isQ"),b,z,v,u,H.h(y,"$isJ"),H.v(x))}catch(t){if(H.a5(t) instanceof P.aI)throw t
else{this.a1(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dr:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a1(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Y(a)){this.a1(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.a1(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gH(f)
y=H.l(z.slice(0),[H.q(z,0)])
for(x=f.gH(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.U(a,J.ft(v),w.Z(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.Z(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Z(z,v)
w.dk(z,v)}}if(!!J.B(a).$isdF)this.aW(a.content)},
$ism6:1},
kc:{"^":"o:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ds(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a1(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.ff(z)}catch(w){H.a5(w)
v=H.h(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isu")}}},
j_:{"^":"f+fU;"},
j2:{"^":"f+n;"},
j3:{"^":"j2+r;"},
j4:{"^":"f+n;"},
j5:{"^":"j4+r;"},
jb:{"^":"f+n;"},
jc:{"^":"jb+r;"},
jp:{"^":"f+n;"},
jq:{"^":"jp+r;"},
jx:{"^":"f+R;"},
jy:{"^":"f+R;"},
jz:{"^":"f+n;"},
jA:{"^":"jz+r;"},
jB:{"^":"f+n;"},
jC:{"^":"jB+r;"},
jF:{"^":"f+n;"},
jG:{"^":"jF+r;"},
jO:{"^":"f+R;"},
e1:{"^":"L+n;"},
e2:{"^":"e1+r;"},
jT:{"^":"f+n;"},
jU:{"^":"jT+r;"},
jX:{"^":"f+R;"},
k3:{"^":"f+n;"},
k4:{"^":"k3+r;"},
e5:{"^":"L+n;"},
e6:{"^":"e5+r;"},
k8:{"^":"f+n;"},
k9:{"^":"k8+r;"},
ke:{"^":"f+n;"},
kf:{"^":"ke+r;"},
kg:{"^":"f+n;"},
kh:{"^":"kg+r;"},
ki:{"^":"f+n;"},
kj:{"^":"ki+r;"},
kk:{"^":"f+n;"},
kl:{"^":"kk+r;"},
km:{"^":"f+n;"},
kn:{"^":"km+r;"}}],["","",,P,{"^":"",
kC:function(a){var z,y
z=J.B(a)
if(!!z.$isci){y=z.gV(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.e7(a.data,a.height,a.width)},
kB:function(a){if(a instanceof P.e7)return{data:a.a,height:a.b,width:a.c}
return a},
Y:function(a){var z,y,x,w,v
if(a==null)return
z=P.Z(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.P)(y),++w){v=H.v(y[w])
z.i(0,v,a[v])}return z},
kz:function(a,b){var z={}
a.F(0,new P.kA(z))
return z},
d9:function(){var z=$.d8
if(z==null){z=J.c7(window.navigator.userAgent,"Opera",0)
$.d8=z}return z},
h_:function(){var z,y
z=$.d5
if(z!=null)return z
y=$.d6
if(y==null){y=J.c7(window.navigator.userAgent,"Firefox",0)
$.d6=y}if(y)z="-moz-"
else{y=$.d7
if(y==null){y=!P.d9()&&J.c7(window.navigator.userAgent,"Trident/",0)
$.d7=y}if(y)z="-ms-"
else z=P.d9()?"-o-":"-webkit-"}$.d5=z
return z},
e7:{"^":"c;V:a>,n:b>,m:c>",$isci:1},
kA:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jH:{"^":"c;a,b",
d0:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.b.E(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.b.E(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.b.E(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.b.E(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.b.E(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.b.E(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.b.E(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.R()
this.R()
this.R()
this.R()},
R:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.b.E(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
e_:function(a){var z,y,x
if(a<=0||a>4294967296)throw H.b(P.id("max must be in range 0 < max \u2264 2^32, was "+a))
z=a-1
if((a&z)===0){this.R()
return(this.a&z)>>>0}do{this.R()
y=this.a
x=y%a}while(y-x+a>=4294967296)
return x},
S:function(){this.R()
var z=this.a
this.R()
return((z&67108863)*134217728+(this.a&134217727))/9007199254740992},
$ismg:1,
p:{
jI:function(a){var z=new P.jH(0,0)
z.d0(a)
return z}}},
b_:{"^":"c;ah:a>,a4:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
D:function(a,b){if(b==null)return!1
return H.aD(b,"$isb_",[P.F],null)&&this.a==J.bE(b)&&this.b==b.ga4(b)},
gA:function(a){var z,y,x
z=J.ak(this.a)
y=J.ak(this.b)
y=P.dV(P.dV(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jJ:{"^":"c;"},
T:{"^":"jJ;$ti"}}],["","",,P,{"^":"",fE:{"^":"f;",$isfE:1,"%":"SVGAnimatedLength"},lo:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},lp:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lq:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lr:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},ls:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lt:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lu:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lv:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},lw:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lx:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},ly:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},lz:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lA:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lB:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lC:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},lD:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lG:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},lH:{"^":"bl;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hh:{"^":"bl;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bl:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lO:{"^":"bl;0n:height=,0m:width=","%":"SVGImageElement"},aY:{"^":"f;",$isaY:1,"%":"SVGLength"},lU:{"^":"js;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.h(c,"$isaY")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aY]},
$isi:1,
$asi:function(){return[P.aY]},
$isa:1,
$asa:function(){return[P.aY]},
$asr:function(){return[P.aY]},
"%":"SVGLengthList"},lV:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},aZ:{"^":"f;",$isaZ:1,"%":"SVGNumber"},m7:{"^":"jE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.h(c,"$isaZ")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asn:function(){return[P.aZ]},
$isi:1,
$asi:function(){return[P.aZ]},
$isa:1,
$asa:function(){return[P.aZ]},
$asr:function(){return[P.aZ]},
"%":"SVGNumberList"},mc:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},me:{"^":"f;0j:length=","%":"SVGPointList"},mh:{"^":"f;0n:height=,0m:width=","%":"SVGRect"},mi:{"^":"hh;0n:height=,0m:width=","%":"SVGRectElement"},dA:{"^":"H;",$isdA:1,"%":"SVGScriptElement"},mu:{"^":"jZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.v(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asn:function(){return[P.e]},
$isi:1,
$asi:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"SVGStringList"},H:{"^":"Q;",
O:function(a,b,c,d){var z,y,x,w,v,u
z=H.l([],[W.aa])
C.a.l(z,W.dU(null))
C.a.l(z,W.e4())
C.a.l(z,new W.k_())
c=new W.e8(new W.du(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dO(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a2(w)
u=z.ga7(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.I(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mv:{"^":"bl;0n:height=,0m:width=","%":"SVGSVGElement"},b2:{"^":"f;",$isb2:1,"%":"SVGTransform"},mH:{"^":"kb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.h(c,"$isb2")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asn:function(){return[P.b2]},
$isi:1,
$asi:function(){return[P.b2]},
$isa:1,
$asa:function(){return[P.b2]},
$asr:function(){return[P.b2]},
"%":"SVGTransformList"},mW:{"^":"bl;0n:height=,0m:width=","%":"SVGUseElement"},jr:{"^":"f+n;"},js:{"^":"jr+r;"},jD:{"^":"f+n;"},jE:{"^":"jD+r;"},jY:{"^":"f+n;"},jZ:{"^":"jY+r;"},ka:{"^":"f+n;"},kb:{"^":"ka+r;"}}],["","",,P,{"^":"",ag:{"^":"c;",$isi:1,
$asi:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
$isiH:1}}],["","",,P,{"^":"",l5:{"^":"f;0j:length=","%":"AudioBuffer"},l6:{"^":"iY;",
h:function(a,b){return P.Y(a.get(H.v(b)))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new P.fG(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"AudioParamMap"},fG:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},l7:{"^":"L;0j:length=","%":"AudioTrackList"},fH:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m9:{"^":"fH;0j:length=","%":"OfflineAudioContext"},iY:{"^":"f+R;"}}],["","",,P,{"^":"",fJ:{"^":"f;",$isfJ:1,"%":"WebGLBuffer"},hf:{"^":"f;",$ishf:1,"%":"WebGLFramebuffer"},ia:{"^":"f;",$isia:1,"%":"WebGLProgram"},mj:{"^":"f;",
bs:function(a,b){return a.activeTexture(b)},
bu:function(a,b,c){return a.attachShader(b,c)},
bv:function(a,b,c){return a.bindBuffer(b,c)},
bx:function(a,b,c){return a.bindFramebuffer(b,c)},
by:function(a,b,c){return a.bindTexture(b,c)},
bz:function(a,b){return a.blendEquation(b)},
bA:function(a,b,c){return a.blendFunc(b,c)},
bB:function(a,b,c,d){return a.bufferData(b,c,d)},
bC:function(a,b){return a.checkFramebufferStatus(b)},
bD:function(a,b){return a.clear(b)},
bE:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bF:function(a,b){return a.compileShader(b)},
bG:function(a){return a.createBuffer()},
bH:function(a){return a.createFramebuffer()},
bI:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bK:function(a){return a.createTexture()},
bM:function(a,b){return a.depthMask(b)},
bN:function(a,b){return a.disable(b)},
bO:function(a,b,c,d){return a.drawArrays(b,c,d)},
bP:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bQ:function(a,b){return a.enable(b)},
bR:function(a,b){return a.enableVertexAttribArray(b)},
bU:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aL:function(a,b){return a.generateMipmap(b)},
ai:function(a){return P.Y(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getExtension(b)},
aP:function(a,b){return a.getProgramInfoLog(b)},
aQ:function(a,b,c){return a.getProgramParameter(b,c)},
aS:function(a,b){return a.getShaderInfoLog(b)},
aT:function(a,b,c){return a.getShaderParameter(b,c)},
aU:function(a,b,c){return a.getUniformLocation(b,c)},
bV:function(a,b){return a.linkProgram(b)},
c0:function(a,b,c){return a.pixelStorei(b,c)},
aY:function(a,b,c){return a.shaderSource(b,c)},
b_:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aJ:function(a,b,c,d,e,f,g,h,i,j){this.aD(a,b,c,d,e,f,g)
return},
c3:function(a,b,c,d,e,f,g){return this.aJ(a,b,c,d,e,f,g,null,null,null)},
aD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c4:function(a,b,c,d){return a.texParameterf(b,c,d)},
c5:function(a,b,c,d){return a.texParameteri(b,c,d)},
c9:function(a,b,c){return a.uniform1f(b,c)},
ca:function(a,b,c){return a.uniform1fv(b,c)},
cb:function(a,b,c){return a.uniform1i(b,c)},
cc:function(a,b,c){return a.uniform1iv(b,c)},
cd:function(a,b,c){return a.uniform2fv(b,c)},
ce:function(a,b,c){return a.uniform3fv(b,c)},
cf:function(a,b,c){return a.uniform4fv(b,c)},
cg:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ci:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cj:function(a,b){return a.useProgram(b)},
ck:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cm:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mk:{"^":"f;",
dG:function(a,b){return a.beginTransformFeedback(b)},
dJ:function(a,b){return a.bindVertexArray(b)},
dQ:function(a){return a.createVertexArray()},
dS:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dT:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dU:function(a){return a.endTransformFeedback()},
e9:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
ed:function(a,b,c,d){this.dz(a,b,H.t(c,"$isa",[P.e],"$asa"),d)
return},
dz:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ee:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bs:function(a,b){return a.activeTexture(b)},
bu:function(a,b,c){return a.attachShader(b,c)},
bv:function(a,b,c){return a.bindBuffer(b,c)},
bx:function(a,b,c){return a.bindFramebuffer(b,c)},
by:function(a,b,c){return a.bindTexture(b,c)},
bz:function(a,b){return a.blendEquation(b)},
bA:function(a,b,c){return a.blendFunc(b,c)},
bB:function(a,b,c,d){return a.bufferData(b,c,d)},
bC:function(a,b){return a.checkFramebufferStatus(b)},
bD:function(a,b){return a.clear(b)},
bE:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bF:function(a,b){return a.compileShader(b)},
bG:function(a){return a.createBuffer()},
bH:function(a){return a.createFramebuffer()},
bI:function(a){return a.createProgram()},
bJ:function(a,b){return a.createShader(b)},
bK:function(a){return a.createTexture()},
bM:function(a,b){return a.depthMask(b)},
bN:function(a,b){return a.disable(b)},
bO:function(a,b,c,d){return a.drawArrays(b,c,d)},
bP:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bQ:function(a,b){return a.enable(b)},
bR:function(a,b){return a.enableVertexAttribArray(b)},
bU:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aL:function(a,b){return a.generateMipmap(b)},
ai:function(a){return P.Y(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getExtension(b)},
aP:function(a,b){return a.getProgramInfoLog(b)},
aQ:function(a,b,c){return a.getProgramParameter(b,c)},
aS:function(a,b){return a.getShaderInfoLog(b)},
aT:function(a,b,c){return a.getShaderParameter(b,c)},
aU:function(a,b,c){return a.getUniformLocation(b,c)},
bV:function(a,b){return a.linkProgram(b)},
c0:function(a,b,c){return a.pixelStorei(b,c)},
aY:function(a,b,c){return a.shaderSource(b,c)},
b_:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aJ:function(a,b,c,d,e,f,g,h,i,j){this.aD(a,b,c,d,e,f,g)
return},
c3:function(a,b,c,d,e,f,g){return this.aJ(a,b,c,d,e,f,g,null,null,null)},
aD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c4:function(a,b,c,d){return a.texParameterf(b,c,d)},
c5:function(a,b,c,d){return a.texParameteri(b,c,d)},
c9:function(a,b,c){return a.uniform1f(b,c)},
ca:function(a,b,c){return a.uniform1fv(b,c)},
cb:function(a,b,c){return a.uniform1i(b,c)},
cc:function(a,b,c){return a.uniform1iv(b,c)},
cd:function(a,b,c){return a.uniform2fv(b,c)},
ce:function(a,b,c){return a.uniform3fv(b,c)},
cf:function(a,b,c){return a.uniform4fv(b,c)},
cg:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ci:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cj:function(a,b){return a.useProgram(b)},
ck:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cm:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},io:{"^":"f;",$isio:1,"%":"WebGLShader"},iE:{"^":"f;",$isiE:1,"%":"WebGLTexture"},iJ:{"^":"f;",$isiJ:1,"%":"WebGLUniformLocation"},iN:{"^":"f;",$isiN:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mr:{"^":"jW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return P.Y(this.dg(a,b))},
i:function(a,b,c){H.h(c,"$isJ")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
dg:function(a,b){return a.item(b)},
$asn:function(){return[[P.J,,,]]},
$isi:1,
$asi:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asr:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jV:{"^":"f+n;"},jW:{"^":"jV+r;"}}],["","",,G,{"^":"",
iR:function(a){var z,y,x,w
z=H.l(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.i(z,y,w+H.d(z[y]))}return C.a.a3(z,"\n")},
dS:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bJ(a,b)
z.aY(a,y,c)
z.bF(a,y)
x=H.bX(z.aT(a,y,35713))
if(x!=null&&!x){w=z.aS(a,y)
P.aE("E:Compilation failed:")
P.aE("E:"+G.iR(c))
P.aE("E:Failure:")
P.aE(C.i.J("E:",w))
throw H.b(w)}return y},
dh:function(a,b){var z,y,x
H.t(a,"$isa",[T.p],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.e.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.k(a,y)
C.e.i(b,z+1,J.ca(a[y]))
z+=2
if(y>=a.length)return H.k(a,y)
x=J.cR(a[y])
if(z>=b.length)return H.k(b,z)
b[z]=x}return b},
hd:function(a,b){var z,y
H.t(a,"$isa",[T.A],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.e.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.k(a,y)
C.e.i(b,z+1,J.ca(a[y]))}return b},
he:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.b5],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.e.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.k(a,y)
C.e.i(b,z+1,J.ca(a[y]))
x=z+2
if(y>=a.length)return H.k(a,y)
w=J.cR(a[y])
v=b.length
if(x>=v)return H.k(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.k(a,y)
w=J.fh(a[y])
if(z>=v)return H.k(b,z)
b[z]=w}return b},
hc:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.C]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.bg(a[y],0))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+1,J.bg(a[y],1))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+2,J.bg(a[y],2))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+3,J.bg(a[y],3))}return b},
jn:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aq(z,[H.q(z,0)]),y=y.gB(y),x=b.x,w=[[P.a,P.C]],v=[P.a3],u=[T.b5],t=[T.p],s=[T.A];y.u();){r=y.d
if(!x.ae(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.ek>0)H.c4("I: "+r)
continue}q=z.h(0,r)
switch($.a6().h(0,r).a){case"vec2":b.P(r,G.hd(H.bz(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.P(r,G.dh(H.bz(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.P(r,G.he(H.bz(q,"$isa",u,"$asa"),null),4)
break
case"float":b.P(r,new Float32Array(H.bT(H.bz(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.P(r,G.hc(H.bz(q,"$isa",w,"$asa"),null),4)
break}}},
br:{"^":"c;ag:a>"},
b3:{"^":"br;",
an:function(){return this.d},
k:function(a){var z,y,x,w
z=H.l(["{"+new H.dK(H.kH(this)).k(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.aq(y,[H.q(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(z,H.d(w)+": "+H.d(y.h(0,w)))}return C.a.a3(z,"\n")}},
fM:{"^":"c;0a,b",
bS:function(a,b,c){J.f9(this.a,b)
if(c>0)J.fz(this.a,b,c)},
cl:function(a,b,c,d,e,f,g,h){J.c5(this.a,34962,b)
J.fA(this.a,c,d,e,!1,g,h)}},
di:{"^":"c;a,b,c,d,e"},
hb:{"^":"c;"},
df:{"^":"c;a,b,c,d"},
hg:{"^":"c;a,b,c,d,e",
b2:function(a){switch($.a6().h(0,a).a){case"vec2":this.e.i(0,a,H.l([],[T.A]))
break
case"vec3":this.e.i(0,a,H.l([],[T.p]))
break
case"vec4":this.e.i(0,a,H.l([],[T.b5]))
break
case"float":this.e.i(0,a,H.l([],[P.a3]))
break
case"uvec4":this.e.i(0,a,H.l([],[[P.a,P.C]]))
break}},
cK:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.df(z,z+1,z+2,z+3))},
cL:function(a){var z,y,x,w
H.t(a,"$isa",[T.p],"$asa")
for(z=this.d,y=0;y<24;++y){x=a[y]
w=new T.p(new Float32Array(3))
w.K(x)
C.a.l(z,w)}},
cI:function(a,b){var z,y,x,w,v,u
z=[T.A]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<24;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.A(v))}},
cJ:function(a,b){var z,y,x,w,v
z=[T.p]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.p(new Float32Array(3))
v.K(w)
z.l(y,v)}},
cP:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.l(y,[P.C])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.k(y,v)
u=y[v]
C.a.i(x,w,u.gej(u))
C.a.i(x,w+1,u.gek(u))
C.a.i(x,w+2,u.gel(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.P)(z),++v){t=z[v]
s=t.a
C.a.i(x,w,s)
C.a.i(x,w+1,t.b)
r=t.c
C.a.i(x,w+2,r)
C.a.i(x,w+3,s)
C.a.i(x,w+4,r)
C.a.i(x,w+5,t.d)
w+=6}return x},
k:function(a){var z,y,x,w,v
z=H.l(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.aq(y,[H.q(y,0)]),x=x.gB(x);x.u();){w=x.d
v=$.a6().h(0,w).a
C.a.l(z,H.d(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a3(z," ")}},
cn:{"^":"br;"},
h0:{"^":"cn;z,Q,ch,cx,d,e,f,a,b,c",
k:function(a){return"DL: p:"+H.d(this.z)}},
hk:{"^":"b3;x,y,z,d,a,b,c",
an:function(){var z,y,x
z=this.y
y=this.z
G.hl(z,y,this.x)
x=this.d
x.i(0,"uLightDescs",z)
x.i(0,"uLightTypes",y)
return x},
p:{
hl:function(a,b,c){var z,y,x,w,v,u,t,s,r
H.t(c,"$isa",[G.cn],"$asa")
z=a.length
C.e.bT(a,0,z,0)
C.e.bT(b,0,4,0)
for(y=c.length,x=0,w=0;w<y;++w){v=c[w]
u=x*16
t=u+4
s=v.z.a
r=s[0]
if(t>=z)return H.k(a,t)
a[t]=r
t=u+5
r=s[1]
if(t>=z)return H.k(a,t)
a[t]=r
r=u+6
s=s[2]
if(r>=z)return H.k(a,r)
a[r]=s
s=u+8
r=v.e.a
t=r[0]
if(s>=z)return H.k(a,s)
a[s]=t
t=u+9
s=r[1]
if(t>=z)return H.k(a,t)
a[t]=s
s=u+10
r=r[2]
if(s>=z)return H.k(a,s)
a[s]=r
r=u+12
s=v.f.a
t=s[0]
if(r>=z)return H.k(a,r)
a[r]=t
t=u+13
r=s[1]
if(t>=z)return H.k(a,t)
a[t]=r
u+=14
s=s[2]
if(u>=z)return H.k(a,u)
a[u]=s
if(x<0||x>=4)return H.k(b,x)
b[x]=v.d;++x}}}},
dI:{"^":"c;a,b,c"},
dH:{"^":"c;a,b,c"},
hH:{"^":"b3;d,a,b,c",p:{
dt:function(a){var z=P.Z(P.e,P.c)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.eu())
z.i(0,"cStencilFunc",$.ez())
return new G.hH(z,a,!1,!0)}}},
hJ:{"^":"br;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sav:function(a){this.cx=H.t(a,"$isa",[P.C],"$asa")},
b1:function(a,b,c){var z,y
C.i.ar(a,0)
H.h(b,"$isag")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c5(z.a,34962,y)
J.cM(z.a,34962,b,35048)},
cQ:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
P:function(a,b,c){var z,y,x,w,v
z=J.cJ(a,0)===105
if(z&&this.z===0)this.z=C.b.cH(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c8(x.a))
this.b1(a,b,c)
w=$.a6().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.bB(x.a,this.e)
x.bS(0,v,z?1:0)
x.cl(0,y.h(0,a),v,w.b3(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.l(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.aq(z,[H.q(z,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(y,H.d(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a3(y,"  ")}},
i0:{"^":"b3;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cM:function(a,b){var z
if(typeof a!=="number")return a.eg()
if(typeof b!=="number")return H.be(b)
z=a/b
if(this.z===z)return
this.z=z
this.b7()},
b7:function(){var z,y,x,w,v,u
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
an:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aO())
x=this.cy
x.K(z.d)
z=this.cx
z.K(this.db)
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
lm:{"^":"c;"},
ih:{"^":"br;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cT:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){t=z[u]
x.i(0,t,J.cT(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){t=z[u]
x.i(0,t,J.cT(w.a,v,t))}},
cV:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.l([],[P.e])
x=H.l([],[P.e])
for(y=new H.aq(y,[H.q(y,0)]),y=y.gB(y);y.u();){w=y.d
if(!z.ae(0,w))C.a.l(x,w)}for(z=this.x,z=P.ju(z,z.r,H.q(z,0)),y=this.Q;z.u();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(b,"$isJ",[P.e,P.c],"$asJ")
z=Date.now()
for(y=new H.aq(b,[H.q(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cJ(s,0)){case 117:if(w.ae(0,s)){r=b.h(0,s)
if(v.ae(0,s))H.c4("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a6().h(0,s)
if(q==null)H.U("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.M(r)
J.cc(x.a,p,r)}else if(!!J.B(r).$isho)J.fx(x.a,p,r)
break
case"float":if(q.c===0){H.ej(r)
J.fv(x.a,p,r)}else if(!!J.B(r).$isag)J.fw(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.aj(r,"$isa9").a
J.cZ(x.a,p,!1,s)}else if(!!J.B(r).$isag)J.cZ(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.N.gei(H.aj(r,"$islW"))
J.cY(x.a,p,!1,s)}else if(!!J.B(r).$isag)J.cY(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cX(o,p,H.aj(r,"$isb5").a)
else J.cX(o,p,H.h(r,"$isag"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cW(o,p,H.aj(r,"$isp").a)
else J.cW(o,p,H.h(r,"$isag"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cV(o,p,H.aj(r,"$isA").a)
else J.cV(o,p,H.h(r,"$isag"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.be(s)
J.cK(x.a,33984+s)
s=H.aj(r,"$isbP").b
J.aH(x.a,3553,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.be(s)
J.cK(x.a,33984+s)
s=H.aj(r,"$isbP").b
J.aH(x.a,34067,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
default:H.c4("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aG(r,!0)
o=x.a
if(s)J.bC(o,2929)
else J.c9(o,2929)
break
case"cStencilFunc":H.aj(r,"$isdI")
s=r.a
o=x.a
if(s===1281)J.c9(o,2960)
else{J.bC(o,2960)
o=r.b
n=r.c
J.fp(x.a,s,o,n)}break
case"cDepthWrite":H.bX(r)
J.f4(x.a,r)
break
case"cBlendEquation":H.aj(r,"$isdH")
s=r.a
o=x.a
if(s===1281)J.c9(o,3042)
else{J.bC(o,3042)
o=r.b
n=r.c
J.eY(x.a,o,n)
J.eX(x.a,s)}break}++t
break}}m=P.h5(0,0,0,Date.now()-new P.bH(z,!1).a,0,0)
""+t
m.k(0)},
cO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[G.b3],"$asa")
Date.now()
z=this.d
J.fy(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bc()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.P)(b),++x){w=b[x]
this.cY(J.fe(w),w.an())}y=this.Q
y.a2(0)
for(v=a.cy,v=new H.aq(v,[H.q(v,0)]),v=v.gB(v);v.u();)y.l(0,v.d)
u=this.cV()
if(u.length!==0)P.aE("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
J.bB(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cQ()
s=a.Q
r=a.z
if(t)J.eW(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f8(q,y,v,s,0,r)
else J.f7(q,y,v,s,0)}else{s=z.a
if(r>1)J.f6(s,y,0,v,r)
else J.f5(s,y,0,v)}if(t)J.fa(z.a)},
cN:function(a,b){return this.cO(a,b,null)},
p:{
dz:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a_(null,null,null,z)
x=c.b
w=d.b
v=H.t(c.f,"$isa",[z],"$asa")
u=J.f2(b.a)
t=G.dS(b.a,35633,x)
J.cL(b.a,u,t)
s=G.dS(b.a,35632,w)
J.cL(b.a,u,s)
if(v.length>0)J.fu(b.a,u,v,35980)
J.fm(b.a,u)
if(!H.bX(J.fl(b.a,u,35714)))H.U(J.fk(b.a,u))
z=new G.ih(b,c,d,u,P.co(c.c,z),P.Z(z,P.c),P.Z(z,z),y,a,!1,!0)
z.cT(a,b,c,d)
return z}}},
D:{"^":"c;a,b,c",
b3:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ip:{"^":"c;ag:a>,0b,c,d,e,f,r,x",
a9:function(a){var z,y,x,w
H.t(a,"$isa",[P.e],"$asa")
for(z=this.c,y=this.x,x=0;x<3;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.ak(z)},
am:function(a){var z,y,x
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.P)(a),++x)C.a.l(y,a[x])
C.a.ak(y)},
aa:function(a){var z,y,x
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.P)(a),++x)C.a.l(y,a[x])
C.a.ak(y)},
b6:function(a,b){var z=[P.e]
this.b=this.cZ(!1,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
ao:function(a){return this.b6(a,null)},
cZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.t(b,"$isa",z,"$asa")
H.t(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.l(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.P)(y),++u){t=y[u]
s=$.a6().h(0,t)
C.a.l(w,"layout (location="+H.d(v.h(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.a6().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.l(w,"")
if(c!=null)C.a.G(w,c)
C.a.G(w,b)
return C.a.a3(w,"\n")},
p:{
bM:function(a){var z,y
z=P.e
y=[z]
return new G.ip(a,H.l([],y),H.l([],y),H.l([],y),H.l([],y),0,P.Z(z,P.C))}}},
it:{"^":"br;",
aO:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
dG:{"^":"c;a,b,c,d,e,f,r",
b4:function(a,b){var z=this.e
if(z!==1)J.fr(a.a,b,34046,z)
z=this.r
J.bh(a.a,b,10240,z)
z=this.f
J.bh(a.a,b,10241,z)
if(this.b){J.bh(a.a,b,10242,33071)
J.bh(a.a,b,10243,33071)}if(this.a)J.fc(a.a,b)
if(this.c)J.bh(a.a,b,34892,34894)},
p:{
cs:function(){return new G.dG(!1,!1,!1,!0,1,9729,9729)}}},
bP:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
iI:{"^":"bP;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.d(this.f)+" X "+H.d(this.r)+"]"},
p:{
dL:function(a,b,c,d,e,f){var z=J.cO(a.a)
J.aH(a.a,3553,z)
J.fs(a.a,3553,1,e,c,d)
f.b4(a,3553)
J.cS(a.a)
J.aH(a.a,3553,null)
return new G.iI(c,d,e,b,z,3553,a,f)}}},
hm:{"^":"bP;f,a,b,c,d,e"}}],["","",,R,{"^":"",
jw:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.j7("span",null),"$isQ")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).aq(y,"float")
y.setProperty(x,"left","")
x=C.x.aq(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.I(z,v)}return z},
iv:{"^":"c;",
cU:function(a,b,c){var z,y
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
y=J.j(z)
y.I(z,this.b)
y.I(z,this.d)
y.I(z,this.c)}},
iw:{"^":"iv;e,f,a,b,c,d",
cX:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.ec(y,2)+" fps"
C.p.ct(this.c,b)
x=C.b.E(30*C.y.dK(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isQ")
v=w.style
u=""+x+"px"
v.height=u
C.p.I(z,w)},
cW:function(a){return this.cX(a,"")}}}],["","",,B,{"^":"",
fW:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.p(new Float32Array(3))
x.t(z,y,b2)
w=new T.p(new Float32Array(3))
w.t(b0,y,b2)
v=new T.p(new Float32Array(3))
v.t(b0,b1,b2)
u=new T.p(new Float32Array(3))
u.t(z,b1,b2)
t=-b2
s=new T.p(new Float32Array(3))
s.t(z,y,t)
r=new T.p(new Float32Array(3))
r.t(z,b1,t)
q=new T.p(new Float32Array(3))
q.t(b0,b1,t)
p=new T.p(new Float32Array(3))
p.t(b0,y,t)
o=new T.p(new Float32Array(3))
o.t(z,b1,t)
n=new T.p(new Float32Array(3))
n.t(z,b1,b2)
m=new T.p(new Float32Array(3))
m.t(b0,b1,b2)
l=new T.p(new Float32Array(3))
l.t(b0,b1,t)
k=new T.p(new Float32Array(3))
k.t(b0,y,b2)
j=new T.p(new Float32Array(3))
j.t(z,y,b2)
i=new T.p(new Float32Array(3))
i.t(z,y,t)
h=new T.p(new Float32Array(3))
h.t(b0,y,t)
g=new T.p(new Float32Array(3))
g.t(b0,y,t)
f=new T.p(new Float32Array(3))
f.t(b0,b1,t)
e=new T.p(new Float32Array(3))
e.t(b0,b1,b2)
d=new T.p(new Float32Array(3))
d.t(b0,y,b2)
c=new T.p(new Float32Array(3))
c.t(z,y,t)
b=new T.p(new Float32Array(3))
b.t(z,y,b2)
y=new T.p(new Float32Array(3))
y.t(z,b1,b2)
a=new T.p(new Float32Array(3))
a.t(z,b1,t)
t=[T.p]
a0=H.l([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.A(new Float32Array(2))
z.v(a7,a9)
y=new T.A(new Float32Array(2))
y.v(a6,a9)
x=new T.A(new Float32Array(2))
x.v(a6,a8)
w=new T.A(new Float32Array(2))
w.v(a7,a8)
v=new T.A(new Float32Array(2))
v.v(a6,a9)
u=new T.A(new Float32Array(2))
u.v(a6,a8)
s=new T.A(new Float32Array(2))
s.v(a7,a8)
r=new T.A(new Float32Array(2))
r.v(a7,a9)
q=new T.A(new Float32Array(2))
q.v(a7,a8)
p=new T.A(new Float32Array(2))
p.v(a7,a9)
o=new T.A(new Float32Array(2))
o.v(a6,a9)
n=new T.A(new Float32Array(2))
n.v(a6,a8)
m=new T.A(new Float32Array(2))
m.v(a6,a8)
l=new T.A(new Float32Array(2))
l.v(a7,a8)
k=new T.A(new Float32Array(2))
k.v(a7,a9)
j=new T.A(new Float32Array(2))
j.v(a6,a9)
i=new T.A(new Float32Array(2))
i.v(a6,a9)
h=new T.A(new Float32Array(2))
h.v(a6,a8)
g=new T.A(new Float32Array(2))
g.v(a7,a8)
f=new T.A(new Float32Array(2))
f.v(a7,a9)
e=new T.A(new Float32Array(2))
e.v(a7,a9)
d=new T.A(new Float32Array(2))
d.v(a6,a9)
c=new T.A(new Float32Array(2))
c.v(a6,a8)
b=new T.A(new Float32Array(2))
b.v(a7,a8)
a1=H.l([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.A])
a2=new G.hg(!1,H.l([],[G.hb]),H.l([],[G.df]),H.l([],t),P.Z(P.e,[P.a,,]))
a2.b2("aTexUV")
a2.b2("aNormal")
a2.cK(6)
a2.cL(a0)
a2.cI("aTexUV",a1)
for(a3=0;z=$.eN(),a3<6;++a3){a4=z[a3]
a2.cJ("aNormal",H.l([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",hw:{"^":"c;a,b,c",
cR:function(a){var z,y
a=document
z=W.aX
y={func:1,ret:-1,args:[z]}
W.aL(a,"keydown",H.m(new D.hy(this),y),!1,z)
W.aL(a,"keyup",H.m(new D.hz(this),y),!1,z)},
p:{
hx:function(a){var z=P.C
z=new D.hw(P.a_(null,null,null,z),P.a_(null,null,null,z),P.a_(null,null,null,z))
z.cR(a)
return z}}},hy:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaX")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},hz:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaX")
z=this.a
z.a.c1(0,a.which)
z.c.l(0,a.which)}},hM:{"^":"c;a,b,c,d,e,f,r,x",
cS:function(a){var z,y,x
if(a==null)a=document
z=J.j(a)
y=z.gbY(a)
x=H.q(y,0)
W.aL(y.a,y.b,H.m(new D.hO(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbX(a)
y=H.q(x,0)
W.aL(x.a,x.b,H.m(new D.hP(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbZ(a)
x=H.q(y,0)
W.aL(y.a,y.b,H.m(new D.hQ(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc_(a)
x=H.q(z,0)
W.aL(z.a,z.b,H.m(new D.hR(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hN:function(a){var z=P.C
z=new D.hM(P.a_(null,null,null,z),P.a_(null,null,null,z),P.a_(null,null,null,z),0,0,0,0,0)
z.cS(a)
return z}}},hO:{"^":"o:3;a",
$1:function(a){var z,y
H.h(a,"$isS")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.M(y.gbW(a).a)
z.x=H.M(y.gbW(a).b)
z.d=a.movementX
z.e=a.movementY}},hP:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isS")
a.preventDefault()
P.aE("BUTTON "+H.d(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hQ:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isS")
a.preventDefault()
z=this.a
z.a.c1(0,a.button)
z.c.l(0,a.button)}},hR:{"^":"o:24;a",
$1:function(a){H.h(a,"$isaK")
a.preventDefault()
this.a.f=H.M(C.ae.gdR(a))}},hZ:{"^":"it;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c1:function(a){var z,y
z=C.e.dV(H.t(a,"$isi",[P.c],"$asi"),0,new A.kJ(),P.C)
if(typeof z!=="number")return H.be(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kJ:{"^":"o:25;",
$2:function(a,b){var z,y
H.M(a)
z=J.ak(b)
if(typeof a!=="number")return a.J()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",a9:{"^":"c;a",
K:function(a){var z,y
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
k:function(a){return"[0] "+this.a5(0).k(0)+"\n[1] "+this.a5(1).k(0)+"\n[2] "+this.a5(2).k(0)+"\n[3] "+this.a5(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.k(z,b)
return z[b]},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a9){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
a5:function(a){var z,y,x
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
return new T.b5(z)},
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
z[15]=1}},ib:{"^":"c;a",
cs:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gaG())
if(z===0)return
y=b*0.5
x=Math.sin(y)/z
w=a.a
v=this.a
v[0]=w[0]*x
v[1]=w[1]*x
v[2]=w[2]*x
v[3]=Math.cos(y)},
gj:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
h:function(a,b){var z=this.a
if(b>=4)return H.k(z,b)
return z[b]},
k:function(a){var z=this.a
return H.d(z[0])+", "+H.d(z[1])+", "+H.d(z[2])+" @ "+H.d(z[3])}},A:{"^":"c;a",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.A){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gah:function(a){return this.a[0]},
ga4:function(a){return this.a[1]}},p:{"^":"c;a",
t:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
K:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.p){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
a8:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.p(z)
y.K(this)
x=b.a
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gaG:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aH:function(a){var z,y,x
z=Math.sqrt(this.gaG())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aE:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bL:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.p(new Float32Array(3))
z.t(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
cA:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
aX:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
gah:function(a){return this.a[0]},
ga4:function(a){return this.a[1]},
gcn:function(a){return this.a[2]},
p:{
ah:function(a,b,c){var z=new T.p(new Float32Array(3))
z.t(a,b,c)
return z}}},b5:{"^":"c;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b5){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.k(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gah:function(a){return this.a[0]},
ga4:function(a){return this.a[1]},
gcn:function(a){return this.a[2]},
gef:function(a){return this.a[3]}}}],["","",,L,{"^":"",
fC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=new Float32Array(c)
y=new Float32Array(c*3)
x=new Float32Array(c*4)
for(w=[P.a3],v=0;v<c;++v){u=b.S()
t=b.S()
s=b.S()
r=new Float32Array(3)
r[0]=u
r[1]=t
r[2]=s
u=new Float32Array(3)
u[0]=0.5
u[1]=0.5
u[2]=0.5
t=new Float32Array(3)
q=new T.p(t)
q.K(new T.p(r))
q.cA(0,new T.p(u))
q.aX(0,60)
C.e.aj(y,v*3,t)
u=b.S()
t=b.S()
s=b.S()
r=new Float32Array(3)
r[0]=u
r[1]=t
r[2]=s
s=b.S()
u=new Float32Array(4)
new T.ib(u).cs(new T.p(r),2*s*3.141592653589793)
C.e.aj(x,v*4,u)
C.e.aj(z,v,H.l([2+b.S()*4],w))}a.P("iaRotation",x,4)
a.P("iaTranslation",y,3)
a.P("iaScale",z,1)},
hE:function(a,b){var z,y,x,w,v,u,t,s
z=document.createElement("canvas")
z.width=512
z.height=512
y=z.getContext("2d")
x=P.kC((y&&C.w).dd(y,0,0,z.width,z.height))
for(w=J.j(x),v=0;v<w.gV(x).length;v+=4){u=30+b.e_(225)
t=w.gV(x)
if(v>=t.length)return H.k(t,v)
t[v]=u
t=w.gV(x)
s=v+1
if(s>=t.length)return H.k(t,s)
t[s]=u
s=w.gV(x)
t=v+2
if(t>=s.length)return H.k(s,t)
s[t]=u
t=w.gV(x)
s=v+3
if(s>=t.length)return H.k(t,s)
t[s]=255}C.w.e1(y,x,0,0)
w=$.eB()
if(w==null)w=new G.dG(!1,!1,!1,!0,1,9729,9729)
t=J.cO(a.a)
J.aH(a.a,3553,t)
s=w.d?1:0
J.fn(a.a,37440,s)
J.aH(a.a,3553,t)
J.fq(a.a,3553,0,6408,6408,5121,z)
w.b4(a,3553)
J.cS(a.a)
J.aH(a.a,3553,null)
return new G.hm(z,"noise",t,3553,a,w)},
ep:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z={}
y=document
x=C.q.cq(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iw(0,0,x,w,y.createElement("div"),R.jw("blue","gray",90,30))
u.cU(x,"blue","gray")
t=H.h(C.q.e3(y,"#webgl-canvas"),"$iscf")
s=new G.fM(t)
y=P.e
x=P.c
v=(t&&C.J).cp(t,"webgl2",P.dp(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.U(P.de('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.d(J.fi(v))
if($.ek>0)P.aE("I: "+r)
J.cN(v,0,0,0,1)
J.bC(v,2929)
J.cN(v,0.5,0.5,0.5,1)
r=H.l([],[G.cn])
q=new Float32Array(64)
p=new Float32Array(4)
o=$.eP()
n=$.ew()
n.toString
m=new T.p(new Float32Array(3))
m.K(n)
m.aX(0,0.5)
n=$.ev()
l=new Float32Array(16)
k=new Float32Array(16)
j=new T.p(new Float32Array(3))
i=new T.p(new Float32Array(3))
j.K(m)
i.K(n)
C.a.l(r,new G.h0(o,100,new T.a9(l),new T.a9(k),1,j,i,"dir",!1,!0))
if(J.fj(v,"EXT_color_buffer_float")==null)C.I.dC(window,"extension not available: EXT_color_buffer_float")
v=new Float32Array(3)
o=D.hx(null)
n=D.hN(t)
m=new T.a9(new Float32Array(16))
m.a_()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
h=new D.hZ(100,0,0,0,new T.p(v),-0.02,o,n,m,new T.p(l),new T.p(k),new T.p(j),new T.p(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.a9(new Float32Array(16))
v.a_()
o=new T.a9(new Float32Array(16))
o.a_()
g=new G.i0(h,50,1,0.1,1000,v,o,new T.a9(new Float32Array(16)),P.Z(y,x),"perspective",!1,!0)
g.b7()
f=t.clientWidth
e=t.clientHeight
t.width=f
t.height=e
g.cM(f,e)
d=P.jI(1)
c=G.dz("preparation",s,$.eT(),$.eS())
b=G.dz("instanced",s,$.eR(),$.eQ())
a=B.fW(!0,1,0,1,0,1,1,1)
v=b.d
o=b.e.x
n=P.Z(y,x)
m=J.f3(v.a)
a0=new G.hJ(v,m,4,n,o,0,-1,P.Z(y,P.ag),"meshdata:cube",!1,!0)
l=G.dh(a.d,null)
n.i(0,"aPosition",J.c8(v.a))
a0.ch=l
a0.b1("aPosition",l,3)
a1=$.a6().h(0,"aPosition")
if(a1==null)H.U("Unknown canonical aPosition")
a2=o.h(0,"aPosition")
J.bB(v.a,m)
v.bS(0,a2,0)
v.cl(0,n.h(0,"aPosition"),a2,a1.b3(),5126,!1,0,0)
o=H.t(a.cP(),"$isa",[P.C],"$asa")
a0.y=J.c8(v.a)
n=a0.ch.length
if(n<768){a0.sav(new Uint8Array(H.bT(o)))
a0.Q=5121}else if(n<196608){a0.sav(new Uint16Array(H.bT(o)))
a0.Q=5123}else{a0.sav(new Uint32Array(H.bT(o)))
a0.Q=5125}J.bB(v.a,m)
o=a0.y
n=a0.cx
J.c5(v.a,34963,o)
J.cM(v.a,34963,n,35048)
G.jn(a,a0)
L.fC(a0,d,80)
P.aE("instances: "+a0.k(0)+".GetNumInstances()}")
a3=G.dL(s,"float",f,e,34836,$.eA())
a4=G.dL(s,"frame::depth",f,e,33190,$.eC())
v=new G.di(s,null,a3,a4,null)
o=J.f1(s.a)
v.b=o
J.c6(s.a,36160,o)
J.cQ(s.a,36160,36064,3553,a3.b,0)
J.cQ(s.a,36160,36096,3553,a4.b,0)
a5=J.eZ(s.a,36160)
if(a5!==36053)H.U("Error Incomplete Framebuffer: "+H.d(a5))
J.c6(s.a,36160,null)
o=G.dt("mat")
n=new T.a9(new Float32Array(16))
n.a_()
o.d.i(0,"uModelMatrix",n)
n=G.dt("mat")
m=new T.a9(new Float32Array(16))
m.a_()
l=n.d
l.i(0,"uModelMatrix",m)
l.i(0,"uShininess",10)
l.i(0,"uTexture2",L.hE(s,d))
l.i(0,"uTexture",a3)
z.a=0
new L.kW(z,h,new L.dx(v,o,c,a0),f,e,g,new L.dx(new G.di(s,null,null,null,null),n,b,a0),new G.hk(r,q,p,P.Z(y,x),"illumination",!1,!0),u).$1(0)},
dx:{"^":"c;a,b,c,d",
b5:function(a,b,c){var z,y,x,w
z=[G.b3]
H.t(c,"$isa",z,"$asa")
y=this.a
x=y.a
y=y.b
J.c6(x.a,36160,y)
J.fB(x.a,0,0,a,b)
J.f_(x.a,17664)
w=H.l([this.b],z)
C.a.G(w,c)
this.c.cN(this.d,w)}},
kW:{"^":"o:26;a,b,c,d,e,f,r,x,y",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cE(a9)
if(typeof a9!=="number")return a9.a8()
z=this.a
z.a=a9+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.w(0,0)||w.w(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aV()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aV()
y.cy=v+w*0.01}w=y.fr
v=w.a
if(v.w(0,37))y.cx+=0.03
else if(v.w(0,39))y.cx-=0.03
if(v.w(0,38))y.cy+=0.03
else if(v.w(0,40))y.cy-=0.03
if(v.w(0,33))y.ch*=0.99
else if(v.w(0,34))y.ch*=1.01
if(v.w(0,32)){y.cx=0
y.cy=0}v=x.f
if(typeof v!=="number")return v.aV()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.r.dL(y.cy,-1.4707963267948965,1.4707963267948965)
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
p=new T.p(new Float32Array(3))
p.t(0,1,0)
v=y.aO()
o=v.a8(0,t)
o.aH(0)
n=p.bL(o)
n.aH(0)
m=o.bL(n)
m.aH(0)
t=n.aE(v)
u=m.aE(v)
v=o.aE(v)
r=n.a
l=r[0]
k=m.a
j=k[0]
i=o.a
h=i[0]
g=r[1]
f=k[1]
e=i[1]
r=r[2]
k=k[2]
i=i[2]
q[15]=1
q[14]=-v
q[13]=-u
q[12]=-t
q[11]=0
q[10]=i
q[9]=k
q[8]=r
q[7]=0
q[6]=e
q[5]=f
q[4]=g
q[3]=0
q[2]=h
q[1]=j
q[0]=l
l=y.f
j=l.a
j[0]=q[2]
j[1]=q[6]
j[2]=q[10]
y=-y.db
d=Math.sqrt(l.gaG())
n=j[0]/d
m=j[1]/d
o=j[2]/d
c=Math.cos(y)
b=Math.sin(y)
a=1-c
a0=n*n*a+c
y=o*b
a1=n*m*a-y
j=m*b
a2=n*o*a+j
a3=m*n*a+y
a4=m*m*a+c
y=n*b
a5=m*o*a-y
a6=o*n*a-j
a7=o*m*a+y
a8=o*o*a+c
y=q[0]
j=q[4]
l=q[8]
h=q[1]
g=q[5]
f=q[9]
e=q[2]
r=q[6]
k=q[10]
i=q[3]
t=q[7]
u=q[11]
q[0]=y*a0+j*a3+l*a6
q[1]=h*a0+g*a3+f*a6
q[2]=e*a0+r*a3+k*a6
q[3]=i*a0+t*a3+u*a6
q[4]=y*a1+j*a4+l*a7
q[5]=h*a1+g*a4+f*a7
q[6]=e*a1+r*a4+k*a7
q[7]=i*a1+t*a4+u*a7
q[8]=y*a2+j*a5+l*a8
q[9]=h*a2+g*a5+f*a8
q[10]=e*a2+r*a5+k*a8
q[11]=i*a2+t*a5+u*a8
w.c.a2(0)
w.b.a2(0)
x.e=0
x.d=0
x.f=0
x.c.a2(0)
x.b.a2(0)
x=this.c
x.b.d.i(0,"uTime",z.a/2000)
w=this.d
u=this.e
t=this.f
i=[G.b3]
x.b5(w,u,H.l([t],i))
x=this.r
x.b.d.i(0,"uTime",z.a/2000)
x.b5(w,u,H.l([t,this.x],i))
C.I.gdE(window).c6(this,-1)
this.y.cW(z.a)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.bo.prototype
if(a==null)return J.dl.prototype
if(typeof a=="boolean")return J.hu.prototype
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.c)return a
return J.c0(a)}
J.aP=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.c)return a
return J.c0(a)}
J.cA=function(a){if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.c)return a
return J.c0(a)}
J.kF=function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b4.prototype
return a}
J.kG=function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b4.prototype
return a}
J.el=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b4.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.c)return a
return J.c0(a)}
J.c_=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.b4.prototype
return a}
J.aG=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).D(a,b)}
J.a7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kF(a).W(a,b)}
J.bg=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aP(a).h(a,b)}
J.cJ=function(a,b){return J.el(a).ar(a,b)}
J.bA=function(a,b){return J.j(a).dl(a,b)}
J.eU=function(a,b,c){return J.j(a).dm(a,b,c)}
J.cK=function(a,b){return J.j(a).bs(a,b)}
J.eV=function(a,b,c,d){return J.j(a).dA(a,b,c,d)}
J.cL=function(a,b,c){return J.j(a).bu(a,b,c)}
J.eW=function(a,b){return J.j(a).dG(a,b)}
J.c5=function(a,b,c){return J.j(a).bv(a,b,c)}
J.c6=function(a,b,c){return J.j(a).bx(a,b,c)}
J.aH=function(a,b,c){return J.j(a).by(a,b,c)}
J.bB=function(a,b){return J.j(a).dJ(a,b)}
J.eX=function(a,b){return J.j(a).bz(a,b)}
J.eY=function(a,b,c){return J.j(a).bA(a,b,c)}
J.cM=function(a,b,c,d){return J.j(a).bB(a,b,c,d)}
J.eZ=function(a,b){return J.j(a).bC(a,b)}
J.f_=function(a,b){return J.j(a).bD(a,b)}
J.cN=function(a,b,c,d,e){return J.j(a).bE(a,b,c,d,e)}
J.f0=function(a,b){return J.kG(a).N(a,b)}
J.c7=function(a,b,c){return J.aP(a).dM(a,b,c)}
J.c8=function(a){return J.j(a).bG(a)}
J.f1=function(a){return J.j(a).bH(a)}
J.f2=function(a){return J.j(a).bI(a)}
J.cO=function(a){return J.j(a).bK(a)}
J.f3=function(a){return J.j(a).dQ(a)}
J.f4=function(a,b){return J.j(a).bM(a,b)}
J.c9=function(a,b){return J.j(a).bN(a,b)}
J.f5=function(a,b,c,d){return J.j(a).bO(a,b,c,d)}
J.f6=function(a,b,c,d,e){return J.j(a).dS(a,b,c,d,e)}
J.f7=function(a,b,c,d,e){return J.j(a).bP(a,b,c,d,e)}
J.f8=function(a,b,c,d,e,f){return J.j(a).dT(a,b,c,d,e,f)}
J.cP=function(a,b){return J.cA(a).q(a,b)}
J.bC=function(a,b){return J.j(a).bQ(a,b)}
J.f9=function(a,b){return J.j(a).bR(a,b)}
J.fa=function(a){return J.j(a).dU(a)}
J.fb=function(a,b){return J.j(a).F(a,b)}
J.cQ=function(a,b,c,d,e,f){return J.j(a).bU(a,b,c,d,e,f)}
J.fc=function(a,b){return J.j(a).aL(a,b)}
J.fd=function(a){return J.j(a).gdF(a)}
J.ak=function(a){return J.B(a).gA(a)}
J.bD=function(a){return J.cA(a).gB(a)}
J.ae=function(a){return J.aP(a).gj(a)}
J.fe=function(a){return J.j(a).gag(a)}
J.ff=function(a){return J.j(a).ge0(a)}
J.fg=function(a){return J.j(a).ge8(a)}
J.fh=function(a){return J.c_(a).gef(a)}
J.bE=function(a){return J.c_(a).gah(a)}
J.ca=function(a){return J.c_(a).ga4(a)}
J.cR=function(a){return J.c_(a).gcn(a)}
J.cb=function(a,b){return J.j(a).Z(a,b)}
J.fi=function(a){return J.j(a).ai(a)}
J.cS=function(a){return J.j(a).aM(a)}
J.fj=function(a,b){return J.j(a).aN(a,b)}
J.fk=function(a,b){return J.j(a).aP(a,b)}
J.fl=function(a,b,c){return J.j(a).aQ(a,b,c)}
J.cT=function(a,b,c){return J.j(a).aU(a,b,c)}
J.fm=function(a,b){return J.j(a).bV(a,b)}
J.fn=function(a,b,c){return J.j(a).c0(a,b,c)}
J.cU=function(a){return J.j(a).e4(a)}
J.fo=function(a,b){return J.cA(a).aZ(a,b)}
J.fp=function(a,b,c,d){return J.j(a).b_(a,b,c,d)}
J.fq=function(a,b,c,d,e,f,g){return J.j(a).c3(a,b,c,d,e,f,g)}
J.fr=function(a,b,c,d){return J.j(a).c4(a,b,c,d)}
J.bh=function(a,b,c,d){return J.j(a).c5(a,b,c,d)}
J.fs=function(a,b,c,d,e,f){return J.j(a).e9(a,b,c,d,e,f)}
J.ft=function(a){return J.el(a).eb(a)}
J.bi=function(a){return J.B(a).k(a)}
J.fu=function(a,b,c,d){return J.j(a).ed(a,b,c,d)}
J.fv=function(a,b,c){return J.j(a).c9(a,b,c)}
J.fw=function(a,b,c){return J.j(a).ca(a,b,c)}
J.cc=function(a,b,c){return J.j(a).cb(a,b,c)}
J.fx=function(a,b,c){return J.j(a).cc(a,b,c)}
J.cV=function(a,b,c){return J.j(a).cd(a,b,c)}
J.cW=function(a,b,c){return J.j(a).ce(a,b,c)}
J.cX=function(a,b,c){return J.j(a).cf(a,b,c)}
J.cY=function(a,b,c,d){return J.j(a).cg(a,b,c,d)}
J.cZ=function(a,b,c,d){return J.j(a).ci(a,b,c,d)}
J.fy=function(a,b){return J.j(a).cj(a,b)}
J.fz=function(a,b,c){return J.j(a).ee(a,b,c)}
J.fA=function(a,b,c,d,e,f,g){return J.j(a).ck(a,b,c,d,e,f,g)}
J.fB=function(a,b,c,d,e){return J.j(a).cm(a,b,c,d,e)}
I.aQ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bF.prototype
C.J=W.cf.prototype
C.w=W.fK.prototype
C.x=W.fT.prototype
C.p=W.h1.prototype
C.K=W.h3.prototype
C.L=W.hi.prototype
C.q=W.hj.prototype
C.M=J.f.prototype
C.a=J.bm.prototype
C.y=J.dj.prototype
C.b=J.dk.prototype
C.N=J.dl.prototype
C.r=J.bn.prototype
C.i=J.bo.prototype
C.U=J.bp.prototype
C.e=H.hS.prototype
C.m=H.hU.prototype
C.Y=W.hV.prototype
C.B=J.i1.prototype
C.C=W.ic.prototype
C.H=W.iD.prototype
C.v=J.b4.prototype
C.ae=W.aK.prototype
C.I=W.iP.prototype
C.f=new P.jK()
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
C.z=function(hooks) { return hooks; }

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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.l(I.aQ(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.W=H.l(I.aQ(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.X=H.l(I.aQ([]),[P.e])
C.t=H.l(I.aQ(["bind","if","ref","repeat","syntax"]),[P.e])
C.u=H.l(I.aQ(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.Z=new G.D("vec3","vertex btangents",0)
C.d=new G.D("vec3","",0)
C.a_=new G.D("vec4","delta from light",0)
C.n=new G.D("","",0)
C.D=new G.D("vec3","vertex coordinates",0)
C.a0=new G.D("vec3","vertex binormals",0)
C.E=new G.D("vec4","for wireframe",0)
C.a1=new G.D("vec4","per vertex color",0)
C.a2=new G.D("float","for normal maps",0)
C.j=new G.D("mat4","",0)
C.a4=new G.D("mat4","",4)
C.a3=new G.D("mat4","",128)
C.c=new G.D("float","",0)
C.a5=new G.D("float","",4)
C.a6=new G.D("float","depth for shadowmaps",0)
C.h=new G.D("sampler2D","",0)
C.a7=new G.D("float","for bump maps",0)
C.a8=new G.D("vec2","texture uvs",0)
C.a9=new G.D("float","time since program start in sec",0)
C.k=new G.D("vec2","",0)
C.aa=new G.D("samplerCube","",0)
C.l=new G.D("vec4","",0)
C.ab=new G.D("vec3","vertex normals",0)
C.ac=new G.D("sampler2DShadow","",0)
C.F=new G.D("vec3","per vertex color",0)
C.G=new G.D("mat3","",0)
C.ad=new G.D("vec3","vertex tangents",0)
$.a8=0
$.aS=null
$.d1=null
$.cu=!1
$.en=null
$.eg=null
$.es=null
$.bY=null
$.c2=null
$.cC=null
$.aN=null
$.b7=null
$.b8=null
$.cv=!1
$.I=C.f
$.af=null
$.ch=null
$.dc=null
$.db=null
$.d8=null
$.d7=null
$.d6=null
$.d5=null
$.ek=0
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
I.$lazy(y,x,w)}})(["lg","ey",function(){return H.em("_$dart_dartClosure")},"lT","cG",function(){return H.em("_$dart_js")},"mI","eD",function(){return H.ab(H.bQ({
toString:function(){return"$receiver$"}}))},"mJ","eE",function(){return H.ab(H.bQ({$method$:null,
toString:function(){return"$receiver$"}}))},"mK","eF",function(){return H.ab(H.bQ(null))},"mL","eG",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mO","eJ",function(){return H.ab(H.bQ(void 0))},"mP","eK",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mN","eI",function(){return H.ab(H.dJ(null))},"mM","eH",function(){return H.ab(function(){try{null.$method$}catch(z){return z.message}}())},"mR","eM",function(){return H.ab(H.dJ(void 0))},"mQ","eL",function(){return H.ab(function(){try{(void 0).$method$}catch(z){return z.message}}())},"n1","cH",function(){return P.iS()},"ni","bf",function(){return[]},"ld","ex",function(){return{}},"n9","eO",function(){return P.co(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"na","cI",function(){return P.Z(P.e,P.bk)},"ms","ez",function(){return new G.dI(1281,0,4294967295)},"l8","eu",function(){return new G.dH(1281,1281,1281)},"ng","a6",function(){return P.dp(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.F,"aColorAlpha",C.a1,"aPosition",C.D,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.E,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.F,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.D,"vPositionFromLight",C.a_,"vCenter",C.E,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.e,G.D)},"mB","eA",function(){var z=G.cs()
z.d=!1
z.b=!0
z.a=!1
z.f=9728
z.r=9728
return z},"mD","eC",function(){var z=G.cs()
z.d=!1
z.b=!0
z.a=!1
z.c=!0
return z},"mC","eB",function(){var z=G.cs()
z.a=!0
z.f=9987
z.r=9729
return z},"lb","ew",function(){return T.ah(1,1,1)},"la","ev",function(){return T.ah(0,0,0)},"n6","eN",function(){return H.l([T.ah(0,0,1),T.ah(0,0,-1),T.ah(0,1,0),T.ah(0,-1,0),T.ah(1,0,0),T.ah(-1,0,0)],[T.p])},"no","eR",function(){var z,y
z=G.bM("finalV")
y=[P.e]
z.a9(H.l(["aPosition","aNormal","aTexUV"],y))
z.a9(H.l(["iaRotation","iaTranslation","iaScale"],y))
z.aa(H.l(["vColor","vNormal","vTexUV","vPosition"],y))
z.am(H.l(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.ao(H.l(["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    rot.xyz *= sin(0.5 * rot.w * uTime) /  length(rot.xyz);\n    rot.w = cos(0.5 * rot.w * uTime);\n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main() {\n  {\n    vec3 p = aPosition * iaScale;\n    p = rotate_vertex_position(p, iaRotation);\n    p = p + iaTranslation;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(p, 1);\n  }\n  {\n      vec3 n = aNormal;\n      n = rotate_vertex_position(n, iaRotation);\n      vNormal = normalize(n);\n  }\n  vTexUV = aTexUV;\n  vPosition = gl_Position.xyz;\n}\n"],y))
return z},"nn","eQ",function(){var z,y
z=G.bM("finalF")
y=[P.e]
z.aa(H.l(["vColor","vNormal","vTexUV","vPosition"],y))
z.am(H.l(["uTexture","uTexture2","uLightDescs","uLightTypes","uShininess","uEyePosition"],y))
z.b6(H.l(["float Edge(sampler2D t, ivec2 p) {\n\t\tvec4 hEdge = vec4(0.0);\n\t\thEdge -= texelFetch(t, ivec2(p.x - 1, p.y - 1), 0) * 1.0;\n\t\thEdge -= texelFetch(t, ivec2(p.x - 1, p.y    ), 0) * 2.0;\n\t\thEdge -= texelFetch(t, ivec2(p.x - 1, p.y + 1), 0) * 1.0;\n\t\thEdge += texelFetch(t, ivec2(p.x + 1, p.y - 1), 0) * 1.0;\n\t\thEdge += texelFetch(t, ivec2(p.x + 1, p.y    ), 0) * 2.0;\n\t\thEdge += texelFetch(t, ivec2(p.x + 1, p.y + 1), 0) * 1.0;\n\t\tvec4 vEdge = vec4(0.0);\n\t\tvEdge -= texelFetch(t, ivec2(p.x - 1, p.y - 1), 0) * 1.0;\n\t\tvEdge -= texelFetch(t, ivec2(p.x    , p.y - 1), 0) * 2.0;\n\t\tvEdge -= texelFetch(t, ivec2(p.x + 1, p.y - 1), 0) * 1.0;\n\t\tvEdge += texelFetch(t, ivec2(p.x - 1, p.y + 1), 0) * 1.0;\n\t\tvEdge += texelFetch(t, ivec2(p.x    , p.y + 1), 0) * 2.0;\n\t\tvEdge += texelFetch(t, ivec2(p.x + 1, p.y + 1), 0) * 1.0;\n\t\tvec3 edge = sqrt((hEdge.rgb * hEdge.rgb) + (vEdge.rgb * vEdge.rgb));\n\t\treturn length(edge);\n}\n\nvoid main() {\n  ColorComponents acc = CombinedLight(vPosition,\n                                      vNormal,\n                                      uEyePosition,\n                                      uLightDescs,\n                                      uLightTypes,\n                                      uShininess);\n                                    \n  float edge = Edge(uTexture, ivec2(gl_FragCoord.xy));\n  vec4 info = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0);\n  if (edge > 0.3) {\n      //oFragColor.rgb = vec3(0.0); \n      oFragColor.rgb = vec3(0.5 - edge); \n     // oFragColor.rgb = vec3(edge / (100.0 * info.w));\n    return;\n  } \n    \n  oFragColor.rgb = texture(uTexture2, vTexUV).rgb * 0.5 + \n                      acc.diffuse +\n                      acc.specular;\n}\n  "],y),H.l(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"nq","eT",function(){var z,y
z=G.bM("preparationV")
y=[P.e]
z.a9(H.l(["aPosition","aNormal","aTexUV"],y))
z.a9(H.l(["iaRotation","iaTranslation","iaScale"],y))
z.aa(H.l(["vNormal"],y))
z.am(H.l(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.ao(H.l(["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    rot.xyz *= sin(0.5 * rot.w * uTime) /  length(rot.xyz);\n    rot.w = cos(0.5 * rot.w * uTime);\n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main() {\n    {\n      vec3 p = aPosition * iaScale;\n      p = rotate_vertex_position(p, iaRotation);\n      p = p + iaTranslation;\n      gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(p, 1);\n    }\n    {\n      vec3 n = aNormal;\n      n = rotate_vertex_position(n, iaRotation);\n      vNormal = normalize(n);\n    }\n}\n"],y))
return z},"np","eS",function(){var z,y
z=G.bM("preparationF")
y=[P.e]
z.aa(H.l(["vNormal"],y))
z.ao(H.l(["void main() {\n  oFragColor = vec4(vNormal, gl_FragCoord.w);\n}\n  "],y))
return z},"nl","eP",function(){return T.ah(0,-50,0)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.G,args:[W.S]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.e,args:[P.C]},{func:1,ret:P.O,args:[W.aa]},{func:1,ret:P.O,args:[P.e]},{func:1,ret:P.G,args:[W.aX]},{func:1,ret:P.O,args:[W.Q,P.e,P.e,W.bu]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a0]},{func:1,ret:[P.ac,,],args:[,]},{func:1,ret:P.O,args:[W.u]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.G,args:[P.F]},{func:1,args:[W.an]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.G,args:[W.aK]},{func:1,ret:P.C,args:[P.C,P.c]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.l1(d||a)
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
Isolate.aQ=a.aQ
Isolate.bc=a.bc
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
if(typeof dartMainRunner==="function")dartMainRunner(L.ep,[])
else L.ep([])})})()
//# sourceMappingURL=sketch.dart.js.map
