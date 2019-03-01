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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cu(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",lo:{"^":"b;a"}}],["","",,J,{"^":"",
cy:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bY:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cx==null){H.kj()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.dB("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cB()]
if(v!=null)return v
v=H.ko(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cB(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
h:{"^":"b;",
F:function(a,b){return a===b},
gA:function(a){return H.b1(a)},
k:["cd",function(a){return"Instance of '"+H.b2(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h2:{"^":"h;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isR:1},
h3:{"^":"h;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isG:1},
cg:{"^":"h;",
gA:function(a){return 0},
k:["cf",function(a){return String(a)}]},
hA:{"^":"cg;"},
b5:{"^":"cg;"},
bq:{"^":"cg;",
k:function(a){var z=a[$.el()]
if(z==null)return this.cf(a)
return"JavaScript function for "+H.e(J.bj(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbl:1},
bn:{"^":"h;$ti",
l:function(a,b){H.A(b,H.q(a,0))
if(!!a.fixed$length)H.W(P.z("add"))
a.push(b)},
H:function(a,b){var z,y
H.v(b,"$isk",[H.q(a,0)],"$ask")
if(!!a.fixed$length)H.W(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.J)(b),++y)a.push(b[y])},
a3:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
gdu:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.da())},
bj:function(a,b){var z,y
H.m(b,{func:1,ret:P.R,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aH(a))}return!1},
c8:function(a,b){if(!!a.immutable$list)H.W(P.z("sort"))
H.hZ(a,J.jV(),H.q(a,0))},
ah:function(a){return this.c8(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aF(a[z],b))return!0
return!1},
k:function(a){return P.ce(a,"[","]")},
gB:function(a){return new J.fj(a,a.length,0,[H.q(a,0)])},
gA:function(a){return H.b1(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.d(H.bc(a,b))
return a[b]},
i:function(a,b,c){H.A(c,H.q(a,0))
if(!!a.immutable$list)H.W(P.z("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bc(a,b))
a[b]=c},
$isu:1,
$asu:I.bd,
$isk:1,
$isa:1,
p:{
h1:function(a,b){return J.cf(H.i(a,[b]))},
cf:function(a){H.bx(a)
a.fixed$length=Array
return a},
lm:[function(a,b){return J.eO(H.ef(a,"$isV"),H.ef(b,"$isV"))},"$2","jV",8,0,28]}},
ln:{"^":"bn;$ti"},
fj:{"^":"b;a,b,c,0d,$ti",
sb_:function(a){this.d=H.A(a,H.q(this,0))},
gD:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.J(z))
x=this.c
if(x>=y){this.sb_(null)
return!1}this.sb_(z[x]);++this.c
return!0},
$isaV:1},
bo:{"^":"h;",
M:function(a,b){var z
H.cz(b)
if(typeof b!=="number")throw H.d(H.ba(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gae(b)
if(this.gae(a)===z)return 0
if(this.gae(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gae:function(a){return a===0?1/a<0:a<0},
bN:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.z(""+a+".toInt()"))},
dc:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.z(""+a+".ceil()"))},
dd:function(a,b,c){if(this.M(b,c)>0)throw H.d(H.ba(b))
if(this.M(a,b)<0)return b
if(this.M(a,c)>0)return c
return a},
dM:function(a,b){var z
if(b>20)throw H.d(P.bL(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gae(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
ci:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bg(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.bg(a,b)},
bg:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.z("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
be:function(a,b){var z
if(a>0)z=this.d_(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d_:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.d(H.ba(b))
return a>b},
$isV:1,
$asV:function(){return[P.E]},
$isai:1,
$isE:1},
dc:{"^":"bo;",$isD:1},
db:{"^":"bo;"},
bp:{"^":"h;",
al:function(a,b){if(b>=a.length)throw H.d(H.bc(a,b))
return a.charCodeAt(b)},
K:function(a,b){H.w(b)
if(typeof b!=="string")throw H.d(P.cS(b,null,null))
return a+b},
ca:function(a,b,c){var z
if(c>a.length)throw H.d(P.bL(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c9:function(a,b){return this.ca(a,b,0)},
cc:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bM(b,null,null))
if(b>c)throw H.d(P.bM(b,null,null))
if(c>a.length)throw H.d(P.bM(c,null,null))
return a.substring(b,c)},
cb:function(a,b){return this.cc(a,b,null)},
dL:function(a){return a.toLowerCase()},
de:function(a,b,c){if(c>a.length)throw H.d(P.bL(c,0,a.length,null,null))
return H.kv(a,b,c)},
M:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.d(H.ba(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.d(H.bc(a,b))
return a[b]},
$isu:1,
$asu:I.bd,
$isV:1,
$asV:function(){return[P.c]},
$ishy:1,
$isc:1}}],["","",,H,{"^":"",
da:function(){return new P.cm("No element")},
h0:function(){return new P.cm("Too many elements")},
hZ:function(a,b,c){H.v(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.D,args:[c,c]})
H.br(a,0,J.aQ(a)-1,b,c)},
br:function(a,b,c,d,e){H.v(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.hY(a,b,c,d,e)
else H.hX(a,b,c,d,e)},
hY:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.be(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a9(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hX:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.d.W(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.W(b+a0,2)
v=w-z
u=w+z
t=J.be(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
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
if(typeof i!=="number")return i.a5()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.T()
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
if(typeof e!=="number")return e.a5()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.T()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a5()
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
if(m<y&&l>x){for(;J.aF(a1.$2(t.h(a,m),r),0);)++m
for(;J.aF(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a5()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.br(a,m,l,a1,a2)}else H.br(a,m,l,a1,a2)},
d2:{"^":"k;"},
bK:{"^":"d2;$ti",
gB:function(a){return new H.dg(this,this.gj(this),0,[H.cw(this,"bK",0)])},
aB:function(a,b){return this.ce(0,H.m(b,{func:1,ret:P.R,args:[H.cw(this,"bK",0)]}))}},
dg:{"^":"b;a,b,c,0d,$ti",
sb0:function(a){this.d=H.A(a,H.q(this,0))},
gD:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.be(z)
x=y.gj(z)
if(this.b!==x)throw H.d(P.aH(z))
w=this.c
if(w>=x){this.sb0(null)
return!1}this.sb0(y.t(z,w));++this.c
return!0},
$isaV:1},
he:{"^":"bK;a,b,$ti",
gj:function(a){return J.aQ(this.a)},
t:function(a,b){return this.b.$1(J.eW(this.a,b))},
$asbK:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dC:{"^":"k;a,b,$ti",
gB:function(a){return new H.ij(J.bD(this.a),this.b,this.$ti)}},
ij:{"^":"aV;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gD(z)))return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bJ:{"^":"b;$ti"}}],["","",,H,{"^":"",
aE:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kb:function(a){return init.types[H.P(a)]},
km:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bj(a)
if(typeof z!=="string")throw H.d(H.ba(a))
return z},
b1:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b2:function(a){return H.hB(a)+H.bS(H.aj(a),0,null)},
hB:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb5){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aE(w.length>1&&C.i.al(w,0)===36?C.i.cb(w,1):w)},
aI:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hI:function(a){var z=H.aI(a).getFullYear()+0
return z},
hG:function(a){var z=H.aI(a).getMonth()+1
return z},
hC:function(a){var z=H.aI(a).getDate()+0
return z},
hD:function(a){var z=H.aI(a).getHours()+0
return z},
hF:function(a){var z=H.aI(a).getMinutes()+0
return z},
hH:function(a){var z=H.aI(a).getSeconds()+0
return z},
hE:function(a){var z=H.aI(a).getMilliseconds()+0
return z},
aC:function(a){throw H.d(H.ba(a))},
j:function(a,b){if(a==null)J.aQ(a)
throw H.d(H.bc(a,b))},
bc:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.P(J.aQ(a))
if(!(b<0)){if(typeof z!=="number")return H.aC(z)
y=b>=z}else y=!0
if(y)return P.F(b,a,"index",null,z)
return P.bM(b,"index",null)},
ba:function(a){return new P.aG(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.dm()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ei})
z.name=""}else z.toString=H.ei
return z},
ei:function(){return J.bj(this.dartException)},
W:function(a){throw H.d(a)},
J:function(a){throw H.d(P.aH(a))},
a7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kx(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.be(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ch(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dl(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ep()
u=$.eq()
t=$.er()
s=$.es()
r=$.ev()
q=$.ew()
p=$.eu()
$.et()
o=$.ey()
n=$.ex()
m=v.L(y)
if(m!=null)return z.$1(H.ch(H.w(y),m))
else{m=u.L(y)
if(m!=null){m.method="call"
return z.$1(H.ch(H.w(y),m))}else{m=t.L(y)
if(m==null){m=s.L(y)
if(m==null){m=r.L(y)
if(m==null){m=q.L(y)
if(m==null){m=p.L(y)
if(m==null){m=s.L(y)
if(m==null){m=o.L(y)
if(m==null){m=n.L(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dl(H.w(y),m))}}return z.$1(new H.ig(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ds()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ds()
return a},
bg:function(a){var z
if(a==null)return new H.dS(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dS(a)},
k7:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kl:function(a,b,c,d,e,f){H.f(a,"$isbl")
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.d5("Unsupported number of arguments for wrapped closure"))},
bb:function(a,b){var z
H.P(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kl)
a.$identity=z
return z},
ft:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hM(z).r}else x=d
w=e?Object.create(new H.i_().constructor.prototype):Object.create(new H.c8(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aa
if(typeof u!=="number")return u.K()
$.aa=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cX(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kb,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cV:H.c9
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
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
fq:function(a,b,c,d){var z=H.c9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cX:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fs(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fq(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.K()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aR
if(v==null){v=H.bG("self")
$.aR=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.K()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aR
if(v==null){v=H.bG("self")
$.aR=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fr:function(a,b,c,d){var z,y
z=H.c9
y=H.cV
switch(b?-1:a){case 0:throw H.d(H.hS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fs:function(a,b){var z,y,x,w,v,u,t,s
z=$.aR
if(z==null){z=H.bG("self")
$.aR=z}y=$.cU
if(y==null){y=H.bG("receiver")
$.cU=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fr(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.aa
if(typeof y!=="number")return y.K()
$.aa=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.aa
if(typeof y!=="number")return y.K()
$.aa=y+1
return new Function(z+y+"}")()},
cu:function(a,b,c,d,e,f,g){return H.ft(a,b,H.P(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a5(a,"String"))},
e6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a5(a,"double"))},
cz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a5(a,"num"))},
bV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a5(a,"bool"))},
P:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a5(a,"int"))},
cA:function(a,b){throw H.d(H.a5(a,H.aE(H.w(b).substring(3))))},
ks:function(a,b){throw H.d(H.cW(a,H.aE(H.w(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cA(a,b)},
ak:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.ks(a,b)},
ef:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cA(a,b)},
bx:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.d(H.a5(a,"List<dynamic>"))},
kn:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cA(a,b)},
cv:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.P(z)]
else return a.$S()}return},
bu:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cv(J.B(a))
if(z==null)return!1
return H.dY(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.cq)return a
$.cq=!0
try{if(H.bu(a,b))return a
z=H.by(b)
y=H.a5(a,z)
throw H.d(y)}finally{$.cq=!1}},
bX:function(a,b){if(a!=null&&!H.ct(a,b))H.W(H.a5(a,H.by(b)))
return a},
e1:function(a){var z,y
z=J.B(a)
if(!!z.$iso){y=H.cv(z)
if(y!=null)return H.by(y)
return"Closure"}return H.b2(a)},
kw:function(a){throw H.d(new P.fA(H.w(a)))},
eb:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
aj:function(a){if(a==null)return
return a.$ti},
mO:function(a,b,c){return H.aP(a["$as"+H.e(c)],H.aj(b))},
bf:function(a,b,c,d){var z
H.w(c)
H.P(d)
z=H.aP(a["$as"+H.e(c)],H.aj(b))
return z==null?null:z[d]},
cw:function(a,b,c){var z
H.w(b)
H.P(c)
z=H.aP(a["$as"+H.e(b)],H.aj(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.P(b)
z=H.aj(a)
return z==null?null:z[b]},
by:function(a){return H.aB(a,null)},
aB:function(a,b){var z,y
H.v(b,"$isa",[P.c],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aE(a[0].builtin$cls)+H.bS(a,1,b)
if(typeof a=="function")return H.aE(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.P(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.e(b[y])}if('func' in a)return H.jU(a,b)
if('futureOr' in a)return"FutureOr<"+H.aB("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.c]
H.v(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.i.K(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aB(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aB(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aB(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aB(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k6(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.aB(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bS:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isa",[P.c],"$asa")
if(a==null)return""
z=new P.co("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aB(u,c)}return"<"+z.k(0)+">"},
ka:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$iso){y=H.cv(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.aj(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aP:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aN:function(a,b,c,d){var z,y
H.w(b)
H.bx(c)
H.w(d)
if(a==null)return!1
z=H.aj(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e4(H.aP(y[d],z),null,c,null)},
bz:function(a,b,c,d){H.w(b)
H.bx(c)
H.w(d)
if(a==null)return a
if(H.aN(a,b,c,d))return a
throw H.d(H.cW(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bS(c,0,null),init.mangledGlobalNames)))},
v:function(a,b,c,d){H.w(b)
H.bx(c)
H.w(d)
if(a==null)return a
if(H.aN(a,b,c,d))return a
throw H.d(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bS(c,0,null),init.mangledGlobalNames)))},
e4:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a_(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a_(a[y],b,c[y],d))return!1
return!0},
mK:function(a,b,c){return a.apply(b,H.aP(J.B(b)["$as"+H.e(c)],H.aj(b)))},
ed:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.ed(z)}return!1},
ct:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.ed(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ct(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bu(a,b)}z=J.B(a).constructor
y=H.aj(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a_(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.ct(a,b))throw H.d(H.a5(a,H.by(b)))
return a},
a_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a_(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.dY(a,b,c,d)
if('func' in a)return c.builtin$cls==="bl"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a_("type" in a?a.type:null,b,x,d)
else if(H.a_(a,b,x,d))return!0
else{if(!('$is'+"aU" in y.prototype))return!1
w=y.prototype["$as"+"aU"]
v=H.aP(w,z?a.slice(1):null)
return H.a_(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e4(H.aP(r,z),b,u,d)},
dY:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a_(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a_(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a_(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a_(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kr(m,b,l,d)},
kr:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a_(c[w],d,a[w],b))return!1}return!0},
mL:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
ko:function(a){var z,y,x,w,v,u
z=H.w($.ec.$1(a))
y=$.bW[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.e3.$2(a,z))
if(z!=null){y=$.bW[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c_(x)
$.bW[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bZ[z]=x
return x}if(v==="-"){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eg(a,x)
if(v==="*")throw H.d(P.dB(z))
if(init.leafTags[z]===true){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eg(a,x)},
eg:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cy(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c_:function(a){return J.cy(a,!1,null,!!a.$isx)},
kq:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c_(z)
else return J.cy(z,c,null,null)},
kj:function(){if(!0===$.cx)return
$.cx=!0
H.kk()},
kk:function(){var z,y,x,w,v,u,t,s
$.bW=Object.create(null)
$.bZ=Object.create(null)
H.kf()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eh.$1(v)
if(u!=null){t=H.kq(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kf:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.aM(C.L,H.aM(C.Q,H.aM(C.z,H.aM(C.z,H.aM(C.P,H.aM(C.M,H.aM(C.N(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ec=new H.kg(v)
$.e3=new H.kh(u)
$.eh=new H.ki(t)},
aM:function(a,b){return a(b)||b},
kv:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hL:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hM:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cf(z)
y=z[0]
x=z[1]
return new H.hL(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ia:{"^":"b;a,b,c,d,e,f",
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
ac:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.i([],[P.c])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ia(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dy:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hw:{"^":"Q;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dl:function(a,b){return new H.hw(a,b==null?null:b.method)}}},
h4:{"^":"Q;a,b,c",
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
return new H.h4(a,y,z?null:b.receiver)}}},
ig:{"^":"Q;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kx:{"^":"o:5;a",
$1:function(a){if(!!J.B(a).$isQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dS:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa4:1},
o:{"^":"b;",
k:function(a){return"Closure '"+H.b2(this).trim()+"'"},
gc1:function(){return this},
$isbl:1,
gc1:function(){return this}},
du:{"^":"o;"},
i_:{"^":"du;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aE(z)+"'"}},
c8:{"^":"du;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b1(this.a)
else y=typeof z!=="object"?J.al(z):H.b1(z)
return(y^H.b1(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b2(z)+"'")},
p:{
c9:function(a){return a.a},
cV:function(a){return a.c},
bG:function(a){var z,y,x,w,v
z=new H.c8("self","target","receiver","name")
y=J.cf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ib:{"^":"Q;a",
k:function(a){return this.a},
p:{
a5:function(a,b){return new H.ib("TypeError: "+P.bI(a)+": type '"+H.e1(a)+"' is not a subtype of type '"+b+"'")}}},
fo:{"^":"Q;a",
k:function(a){return this.a},
p:{
cW:function(a,b){return new H.fo("CastError: "+P.bI(a)+": type '"+H.e1(a)+"' is not a subtype of type '"+b+"'")}}},
hR:{"^":"Q;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hS:function(a){return new H.hR(a)}}},
dz:{"^":"b;a,0b,0c,0d",
gab:function(){var z=this.b
if(z==null){z=H.by(this.a)
this.b=z}return z},
k:function(a){return this.gab()},
gA:function(a){var z=this.d
if(z==null){z=C.i.gA(this.gab())
this.d=z}return z},
F:function(a,b){if(b==null)return!1
return b instanceof H.dz&&this.gab()===b.gab()}},
dd:{"^":"dh;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gI:function(a){return new H.ap(this,[H.q(this,0)])},
ad:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cK(z,b)}else{y=this.ds(b)
return y}},
ds:function(a){var z=this.d
if(z==null)return!1
return this.ay(this.ar(z,J.al(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a9(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a9(w,b)
x=y==null?null:y.b
return x}else return this.dt(b)},
dt:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ar(z,J.al(a)&0x3ffffff)
x=this.ay(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.at()
this.b=z}this.b1(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.at()
this.c=y}this.b1(y,b,c)}else{x=this.d
if(x==null){x=this.at()
this.d=x}w=J.al(b)&0x3ffffff
v=this.ar(x,w)
if(v==null)this.aw(x,w,[this.aj(b,c)])
else{u=this.ay(v,b)
if(u>=0)v[u].b=c
else v.push(this.aj(b,c))}}},
G:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aH(this))
z=z.c}},
b1:function(a,b,c){var z
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
z=this.a9(a,b)
if(z==null)this.aw(a,b,this.aj(b,c))
else z.b=c},
b3:function(){this.r=this.r+1&67108863},
aj:function(a,b){var z,y
z=new H.h9(H.A(a,H.q(this,0)),H.A(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b3()
return z},
ay:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
k:function(a){return P.di(this)},
a9:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
cL:function(a,b){delete a[b]},
cK:function(a,b){return this.a9(a,b)!=null},
at:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.cL(z,"<non-identifier-key>")
return z},
$isde:1},
h9:{"^":"b;a,b,0c,0d"},
ap:{"^":"d2;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.ha(z,z.r,this.$ti)
y.c=z.e
return y}},
ha:{"^":"b;a,b,0c,0d,$ti",
sb2:function(a){this.d=H.A(a,H.q(this,0))},
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aH(z))
else{z=this.c
if(z==null){this.sb2(null)
return!1}else{this.sb2(z.a)
this.c=this.c.c
return!0}}},
$isaV:1},
kg:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
kh:{"^":"o:13;a",
$2:function(a,b){return this.a(a,b)}},
ki:{"^":"o:14;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
k6:function(a){return J.h1(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bR:function(a){var z,y
if(!!J.B(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ae:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bc(b,a))},
hr:{"^":"h;",$isic:1,"%":"DataView;ArrayBufferView;cj|dM|dN|dj|dO|dP|ar"},
cj:{"^":"hr;",
gj:function(a){return a.length},
$isu:1,
$asu:I.bd,
$isx:1,
$asx:I.bd},
dj:{"^":"dN;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
i:function(a,b,c){H.e6(c)
H.ae(b,a,a.length)
a[b]=c},
$asbJ:function(){return[P.ai]},
$asp:function(){return[P.ai]},
$isk:1,
$ask:function(){return[P.ai]},
$isa:1,
$asa:function(){return[P.ai]},
"%":"Float64Array"},
ar:{"^":"dP;",
i:function(a,b,c){H.P(c)
H.ae(b,a,a.length)
a[b]=c},
$asbJ:function(){return[P.D]},
$asp:function(){return[P.D]},
$isk:1,
$ask:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hq:{"^":"dj;",$isah:1,"%":"Float32Array"},
lw:{"^":"ar;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lx:{"^":"ar;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$isfZ:1,
"%":"Int32Array"},
ly:{"^":"ar;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lz:{"^":"ar;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hs:{"^":"ar;",
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$ismj:1,
"%":"Uint32Array"},
lA:{"^":"ar;",
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lB:{"^":"ar;",
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dM:{"^":"cj+p;"},
dN:{"^":"dM+bJ;"},
dO:{"^":"cj+p;"},
dP:{"^":"dO+bJ;"}}],["","",,P,{"^":"",
io:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k1()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bb(new P.iq(z),1)).observe(y,{childList:true})
return new P.ip(z,y,x)}else if(self.setImmediate!=null)return P.k2()
return P.k3()},
mt:[function(a){self.scheduleImmediate(H.bb(new P.ir(H.m(a,{func:1,ret:-1})),0))},"$1","k1",4,0,4],
mu:[function(a){self.setImmediate(H.bb(new P.is(H.m(a,{func:1,ret:-1})),0))},"$1","k2",4,0,4],
mv:[function(a){H.m(a,{func:1,ret:-1})
P.jC(0,a)},"$1","k3",4,0,4],
jY:function(a,b){if(H.bu(a,{func:1,args:[P.b,P.a4]}))return H.m(a,{func:1,ret:null,args:[P.b,P.a4]})
if(H.bu(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jX:function(){var z,y
for(;z=$.aL,z!=null;){$.b9=null
y=z.b
$.aL=y
if(y==null)$.b8=null
z.a.$0()}},
mI:[function(){$.cr=!0
try{P.jX()}finally{$.b9=null
$.cr=!1
if($.aL!=null)$.cC().$1(P.e5())}},"$0","e5",0,0,1],
e0:function(a){var z=new P.dE(H.m(a,{func:1,ret:-1}))
if($.aL==null){$.b8=z
$.aL=z
if(!$.cr)$.cC().$1(P.e5())}else{$.b8.b=z
$.b8=z}},
k0:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aL
if(z==null){P.e0(a)
$.b9=$.b8
return}y=new P.dE(a)
x=$.b9
if(x==null){y.b=z
$.b9=y
$.aL=y}else{y.b=x.b
x.b=y
$.b9=y
if(y.b==null)$.b8=y}},
kt:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.I
if(C.e===y){P.bU(null,null,C.e,a)
return}y.toString
P.bU(null,null,y,H.m(y.bm(a),z))},
bT:function(a,b,c,d,e){var z={}
z.a=d
P.k0(new P.jZ(z,e))},
dZ:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.I
if(y===c)return d.$0()
$.I=c
z=y
try{y=d.$0()
return y}finally{$.I=z}},
e_:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.I
if(y===c)return d.$1(e)
$.I=c
z=y
try{y=d.$1(e)
return y}finally{$.I=z}},
k_:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.I
if(y===c)return d.$2(e,f)
$.I=c
z=y
try{y=d.$2(e,f)
return y}finally{$.I=z}},
bU:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bm(d):c.d8(d,-1)
P.e0(d)},
iq:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ip:{"^":"o:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ir:{"^":"o:0;a",
$0:function(){this.a.$0()}},
is:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jB:{"^":"b;a,0b,c",
cG:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bb(new P.jD(this,b),0),a)
else throw H.d(P.z("`setTimeout()` not found."))},
p:{
jC:function(a,b){var z=new P.jB(!0,0)
z.cG(a,b)
return z}}},
jD:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iv:{"^":"b;$ti"},
jw:{"^":"iv;a,$ti"},
aK:{"^":"b;0a,b,c,d,e,$ti",
dv:function(a){if(this.c!==6)return!0
return this.b.b.aA(H.m(this.d,{func:1,ret:P.R,args:[P.b]}),a.a,P.R,P.b)},
dr:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bu(z,{func:1,args:[P.b,P.a4]}))return H.bX(w.dH(z,a.a,a.b,null,y,P.a4),x)
else return H.bX(w.aA(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ad:{"^":"b;bf:a<,b,0cX:c<,$ti",
bM:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.I
if(y!==C.e){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jY(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ad(0,$.I,[c])
w=b==null?1:3
this.b5(new P.aK(x,w,a,b,[z,c]))
return x},
bL:function(a,b){return this.bM(a,null,b)},
b5:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaK")
this.c=a}else{if(z===2){y=H.f(this.c,"$isad")
z=y.a
if(z<4){y.b5(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bU(null,null,z,H.m(new P.iL(this,a),{func:1,ret:-1}))}},
bc:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaK")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isad")
y=u.a
if(y<4){u.bc(a)
return}this.a=y
this.c=u.c}z.a=this.aa(a)
y=this.b
y.toString
P.bU(null,null,y,H.m(new P.iQ(z,this),{func:1,ret:-1}))}},
av:function(){var z=H.f(this.c,"$isaK")
this.c=null
return this.aa(z)},
aa:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
am:function(a){var z,y,x
z=H.q(this,0)
H.bX(a,{futureOr:1,type:z})
y=this.$ti
if(H.aN(a,"$isaU",y,"$asaU"))if(H.aN(a,"$isad",y,null))P.dH(a,this)
else P.iM(a,this)
else{x=this.av()
H.A(a,z)
this.a=4
this.c=a
P.b7(this,x)}},
b7:function(a,b){var z
H.f(b,"$isa4")
z=this.av()
this.a=8
this.c=new P.X(a,b)
P.b7(this,z)},
$isaU:1,
p:{
iM:function(a,b){var z,y,x
b.a=1
try{a.bM(new P.iN(b),new P.iO(b),null)}catch(x){z=H.a7(x)
y=H.bg(x)
P.kt(new P.iP(b,z,y))}},
dH:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isad")
if(z>=4){y=b.av()
b.a=a.a
b.c=a.c
P.b7(b,y)}else{y=H.f(b.c,"$isaK")
b.a=2
b.c=a
a.bc(y)}},
b7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isX")
y=y.b
u=v.a
t=v.b
y.toString
P.bT(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b7(z.a,b)}y=z.a
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
if(p){H.f(r,"$isX")
y=y.b
u=r.a
t=r.b
y.toString
P.bT(null,null,y,u,t)
return}o=$.I
if(o!=q)$.I=q
else o=null
y=b.c
if(y===8)new P.iT(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iS(x,b,r).$0()}else if((y&2)!==0)new P.iR(z,x,b).$0()
if(o!=null)$.I=o
y=x.b
if(!!J.B(y).$isaU){if(y.a>=4){n=H.f(t.c,"$isaK")
t.c=null
b=t.aa(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dH(y,t)
return}}m=b.b
n=H.f(m.c,"$isaK")
m.c=null
b=m.aa(n)
y=x.a
u=x.b
if(!y){H.A(u,H.q(m,0))
m.a=4
m.c=u}else{H.f(u,"$isX")
m.a=8
m.c=u}z.a=m
y=m}}}},
iL:{"^":"o:0;a,b",
$0:function(){P.b7(this.a,this.b)}},
iQ:{"^":"o:0;a,b",
$0:function(){P.b7(this.b,this.a.a)}},
iN:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.am(a)}},
iO:{"^":"o:16;a",
$2:function(a,b){H.f(b,"$isa4")
this.a.b7(a,b)},
$1:function(a){return this.$2(a,null)}},
iP:{"^":"o:0;a,b,c",
$0:function(){this.a.b7(this.b,this.c)}},
iT:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bK(H.m(w.d,{func:1}),null)}catch(v){y=H.a7(v)
x=H.bg(v)
if(this.d){w=H.f(this.a.a.c,"$isX").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isX")
else u.b=new P.X(y,x)
u.a=!0
return}if(!!J.B(z).$isaU){if(z instanceof P.ad&&z.gbf()>=4){if(z.gbf()===8){w=this.b
w.b=H.f(z.gcX(),"$isX")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bL(new P.iU(t),null)
w.a=!1}}},
iU:{"^":"o:17;a",
$1:function(a){return this.a}},
iS:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.A(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.aA(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a7(t)
y=H.bg(t)
x=this.a
x.b=new P.X(z,y)
x.a=!0}}},
iR:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isX")
w=this.c
if(w.dv(z)&&w.e!=null){v=this.b
v.b=w.dr(z)
v.a=!1}}catch(u){y=H.a7(u)
x=H.bg(u)
w=H.f(this.a.a.c,"$isX")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.X(y,x)
s.a=!0}}},
dE:{"^":"b;a,0b"},
i3:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.ad(0,$.I,[P.D])
z.a=0
x=H.q(this,0)
w=H.m(new P.i5(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.i6(z,y),{func:1,ret:-1})
W.aA(this.a,this.b,w,!1,x)
return y}},
i5:{"^":"o;a,b",
$1:function(a){H.A(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.q(this.b,0)]}}},
i6:{"^":"o:0;a,b",
$0:function(){this.b.am(this.a.a)}},
i4:{"^":"b;"},
X:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isQ:1},
jJ:{"^":"b;",$ismr:1},
jZ:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dm()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.k(0)
throw x}},
jf:{"^":"jJ;",
dI:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.e===$.I){a.$0()
return}P.dZ(null,null,this,a,-1)}catch(x){z=H.a7(x)
y=H.bg(x)
P.bT(null,null,this,z,H.f(y,"$isa4"))}},
dJ:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.I){a.$1(b)
return}P.e_(null,null,this,a,b,-1,c)}catch(x){z=H.a7(x)
y=H.bg(x)
P.bT(null,null,this,z,H.f(y,"$isa4"))}},
d8:function(a,b){return new P.jh(this,H.m(a,{func:1,ret:b}),b)},
bm:function(a){return new P.jg(this,H.m(a,{func:1,ret:-1}))},
d9:function(a,b){return new P.ji(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bK:function(a,b){H.m(a,{func:1,ret:b})
if($.I===C.e)return a.$0()
return P.dZ(null,null,this,a,b)},
aA:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.I===C.e)return a.$1(b)
return P.e_(null,null,this,a,b,c,d)},
dH:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.I===C.e)return a.$2(b,c)
return P.k_(null,null,this,a,b,c,d,e,f)}},
jh:{"^":"o;a,b,c",
$0:function(){return this.a.bK(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jg:{"^":"o:1;a,b",
$0:function(){return this.a.dI(this.b)}},
ji:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dJ(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
df:function(a,b,c){H.bx(a)
return H.v(H.k7(a,new H.dd(0,0,[b,c])),"$isde",[b,c],"$asde")},
Y:function(a,b){return new H.dd(0,0,[a,b])},
a2:function(a,b,c,d){return new P.j0(0,0,[d])},
h_:function(a,b,c){var z,y
if(P.cs(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.i([],[P.c])
y=$.bh()
C.a.l(y,a)
try{P.jW(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.dt(b,H.kn(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
ce:function(a,b,c){var z,y,x
if(P.cs(a))return b+"..."+c
z=new P.co(b)
y=$.bh()
C.a.l(y,a)
try{x=z
x.a=P.dt(x.gV(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gV()+c
y=z.gV()
return y.charCodeAt(0)==0?y:y},
cs:function(a){var z,y
for(z=0;y=$.bh(),z<y.length;++z)if(a===y[z])return!0
return!1},
jW:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[P.c],"$asa")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.e(z.gD(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.u();t=s,s=r){r=z.gD(z);++x
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
z=P.a2(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.J)(a),++x)z.l(0,H.A(a[x],b))
return z},
di:function(a){var z,y,x
z={}
if(P.cs(a))return"{...}"
y=new P.co("")
try{C.a.l($.bh(),a)
x=y
x.a=x.gV()+"{"
z.a=!0
J.eZ(a,new P.hd(z,y))
z=y
z.a=z.gV()+"}"}finally{z=$.bh()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gV()
return z.charCodeAt(0)==0?z:z},
j0:{"^":"iW;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){var z=new P.dL(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbt")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbt")!=null}else return this.cJ(b)},
cJ:function(a){var z=this.d
if(z==null)return!1
return this.aq(this.ba(z,a),a)>=0},
l:function(a,b){var z,y
H.A(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cp()
this.b=z}return this.b4(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cp()
this.c=y}return this.b4(y,b)}else return this.cH(0,b)},
cH:function(a,b){var z,y,x
H.A(b,H.q(this,0))
z=this.d
if(z==null){z=P.cp()
this.d=z}y=this.b8(b)
x=z[y]
if(x==null)z[y]=[this.au(b)]
else{if(this.aq(x,b)>=0)return!1
x.push(this.au(b))}return!0},
bJ:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bd(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bd(this.c,b)
else return this.cS(0,b)},
cS:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ba(z,b)
x=this.aq(y,b)
if(x<0)return!1
this.bh(y.splice(x,1)[0])
return!0},
a2:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.as()}},
b4:function(a,b){H.A(b,H.q(this,0))
if(H.f(a[b],"$isbt")!=null)return!1
a[b]=this.au(b)
return!0},
bd:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbt")
if(z==null)return!1
this.bh(z)
delete a[b]
return!0},
as:function(){this.r=this.r+1&67108863},
au:function(a){var z,y
z=new P.bt(H.A(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.as()
return z},
bh:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.as()},
b8:function(a){return J.al(a)&0x3ffffff},
ba:function(a,b){return a[this.b8(b)]},
aq:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
p:{
cp:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bt:{"^":"b;a,0b,0c"},
dL:{"^":"b;a,b,0c,0d,$ti",
sb6:function(a){this.d=H.A(a,H.q(this,0))},
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aH(z))
else{z=this.c
if(z==null){this.sb6(null)
return!1}else{this.sb6(H.A(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaV:1,
p:{
j1:function(a,b,c){var z=new P.dL(a,b,[c])
z.c=a.e
return z}}},
iW:{"^":"hT;"},
hb:{"^":"j2;",$isk:1,$isa:1},
p:{"^":"b;$ti",
gB:function(a){return new H.dg(a,this.gj(a),0,[H.bf(this,a,"p",0)])},
t:function(a,b){return this.h(a,b)},
dq:function(a,b,c,d){var z,y,x
H.A(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bf(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.d(P.aH(a))}return y},
k:function(a){return P.ce(a,"[","]")}},
dh:{"^":"T;"},
hd:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
T:{"^":"b;$ti",
G:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bf(this,a,"T",0),H.bf(this,a,"T",1)]})
for(z=J.bD(this.gI(a));z.u();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aQ(this.gI(a))},
k:function(a){return P.di(a)},
$isL:1},
hU:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bD(H.v(b,"$isk",this.$ti,"$ask"));z.u();)this.l(0,z.gD(z))},
k:function(a){return P.ce(this,"{","}")},
$isk:1,
$islT:1},
hT:{"^":"hU;"},
j2:{"^":"b+p;"}}],["","",,P,{"^":"",
fO:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.b2(a)+"'"},
bI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fO(a)},
d5:function(a){return new P.iI(a)},
aD:function(a){H.c0(H.e(a))},
R:{"^":"b;"},
"+bool":0,
bH:{"^":"b;a,b",
F:function(a,b){if(b==null)return!1
return b instanceof P.bH&&this.a===b.a&&!0},
M:function(a,b){return C.d.M(this.a,H.f(b,"$isbH").a)},
gA:function(a){var z=this.a
return(z^C.d.be(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fB(H.hI(this))
y=P.bk(H.hG(this))
x=P.bk(H.hC(this))
w=P.bk(H.hD(this))
v=P.bk(H.hF(this))
u=P.bk(H.hH(this))
t=P.fC(H.hE(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isV:1,
$asV:function(){return[P.bH]},
p:{
fB:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bk:function(a){if(a>=10)return""+a
return"0"+a}}},
ai:{"^":"E;"},
"+double":0,
aS:{"^":"b;a",
T:function(a,b){return C.d.T(this.a,H.f(b,"$isaS").a)},
F:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
M:function(a,b){return C.d.M(this.a,H.f(b,"$isaS").a)},
k:function(a){var z,y,x,w,v
z=new P.fK()
y=this.a
if(y<0)return"-"+new P.aS(0-y).k(0)
x=z.$1(C.d.W(y,6e7)%60)
w=z.$1(C.d.W(y,1e6)%60)
v=new P.fJ().$1(y%1e6)
return""+C.d.W(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isV:1,
$asV:function(){return[P.aS]},
p:{
fI:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fJ:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fK:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Q:{"^":"b;"},
dm:{"^":"Q;",
k:function(a){return"Throw of null."}},
aG:{"^":"Q;a,b,c,d",
gao:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gan:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gao()+y+x
if(!this.a)return w
v=this.gan()
u=P.bI(this.b)
return w+v+": "+u},
p:{
cS:function(a,b,c){return new P.aG(!0,a,b,c)}}},
dn:{"^":"aG;e,f,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bM:function(a,b,c){return new P.dn(null,null,!0,a,b,"Value not in range")},
bL:function(a,b,c,d,e){return new P.dn(b,c,!0,a,d,"Invalid value")}}},
fY:{"^":"aG;e,j:f>,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y
z=H.P(this.b)
if(typeof z!=="number")return z.a5()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
F:function(a,b,c,d,e){var z=H.P(e==null?J.aQ(b):e)
return new P.fY(b,z,!0,a,c,"Index out of range")}}},
ih:{"^":"Q;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
z:function(a){return new P.ih(a)}}},
ie:{"^":"Q;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dB:function(a){return new P.ie(a)}}},
cm:{"^":"Q;a",
k:function(a){return"Bad state: "+this.a},
p:{
cn:function(a){return new P.cm(a)}}},
fu:{"^":"Q;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bI(z)+"."},
p:{
aH:function(a){return new P.fu(a)}}},
ds:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isQ:1},
fA:{"^":"Q;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iI:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bl:{"^":"b;"},
D:{"^":"E;"},
"+int":0,
k:{"^":"b;$ti",
aB:["ce",function(a,b){var z=H.cw(this,"k",0)
return new H.dC(this,H.m(b,{func:1,ret:P.R,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.u();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.W(P.bL(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.u();){x=z.gD(z)
if(b===y)return x;++y}throw H.d(P.F(b,this,"index",null,y))},
k:function(a){return P.h_(this,"(",")")}},
aV:{"^":"b;$ti"},
a:{"^":"b;$ti",$isk:1},
"+List":0,
L:{"^":"b;$ti"},
G:{"^":"b;",
gA:function(a){return P.b.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
E:{"^":"b;",$isV:1,
$asV:function(){return[P.E]}},
"+num":0,
b:{"^":";",
F:function(a,b){return this===b},
gA:function(a){return H.b1(this)},
k:function(a){return"Instance of '"+H.b2(this)+"'"},
toString:function(){return this.k(this)}},
a4:{"^":"b;"},
c:{"^":"b;",$isV:1,
$asV:function(){return[P.c]},
$ishy:1},
"+String":0,
co:{"^":"b;V:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dt:function(a,b,c){var z=J.bD(b)
if(!z.u())return a
if(c.length===0){do a+=H.e(z.gD(z))
while(z.u())}else{a+=H.e(z.gD(z))
for(;z.u();)a=a+c+H.e(z.gD(z))}return a}}}}],["","",,W,{"^":"",
fL:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).N(z,a,b,c)
y.toString
z=W.t
z=new H.dC(new W.a6(y),H.m(new W.fM(),{func:1,ret:P.R,args:[z]}),[z])
x=z.gB(z)
if(!x.u())H.W(H.da())
w=x.gD(x)
if(x.u())H.W(H.h0())
return H.f(w,"$isS")},
fN:function(a){H.f(a,"$isN")
return"wheel"},
aT:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f1(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a7(x)}return z},
iE:function(a,b){return document.createElement(a)},
bQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dK:function(a,b,c,d){var z,y
z=W.bQ(W.bQ(W.bQ(W.bQ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dX:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iy(a)
if(!!J.B(z).$isN)return z
return}else return H.f(a,"$isN")},
e2:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.I
if(z===C.e)return a
return z.d9(a,b)},
M:{"^":"S;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ky:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fh:{"^":"M;",
k:function(a){return String(a)},
$isfh:1,
"%":"HTMLAnchorElement"},
kz:{"^":"M;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cT:{"^":"M;",$iscT:1,"%":"HTMLBaseElement"},
fm:{"^":"h;","%":";Blob"},
bF:{"^":"M;",$isbF:1,"%":"HTMLBodyElement"},
ca:{"^":"M;0n:height=,0m:width=",
c2:function(a,b,c){var z=this.cO(a,b,P.k4(c,null))
return z},
cO:function(a,b,c){return a.getContext(b,c)},
$isca:1,
"%":"HTMLCanvasElement"},
kE:{"^":"h;",
ag:function(a){return P.a0(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kF:{"^":"t;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fv:{"^":"cb;",$isfv:1,"%":"CSSNumericValue|CSSUnitValue"},
kG:{"^":"fy;0j:length=","%":"CSSPerspective"},
am:{"^":"h;",$isam:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fw:{"^":"iw;0j:length=",
aF:function(a,b){var z=this.cP(a,this.ak(a,b))
return z==null?"":z},
ak:function(a,b){var z,y
z=$.ek()
y=z[b]
if(typeof y==="string")return y
y=this.d0(a,b)
z[b]=y
return y},
d0:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fD()+b
if(z in a)return z
return b},
cP:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fx:{"^":"b;",
gn:function(a){return this.aF(a,"height")},
gm:function(a){return this.aF(a,"width")}},
cb:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fy:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kI:{"^":"cb;0j:length=","%":"CSSTransformValue"},
kJ:{"^":"cb;0j:length=","%":"CSSUnparsedValue"},
kL:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fE:{"^":"M;","%":"HTMLDivElement"},
fF:{"^":"t;",
d3:function(a,b){return a.adoptNode(b)},
c3:function(a,b){return a.getElementById(b)},
dD:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
kM:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fG:{"^":"h;",
di:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kN:{"^":"iA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c,"$isU",[P.E],"$asU")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.U,P.E]]},
$isx:1,
$asx:function(){return[[P.U,P.E]]},
$asp:function(){return[[P.U,P.E]]},
$isk:1,
$ask:function(){return[[P.U,P.E]]},
$isa:1,
$asa:function(){return[[P.U,P.E]]},
$asr:function(){return[[P.U,P.E]]},
"%":"ClientRectList|DOMRectList"},
fH:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
F:function(a,b){var z
if(b==null)return!1
if(!H.aN(b,"$isU",[P.E],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dK(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isU:1,
$asU:function(){return[P.E]},
"%":";DOMRectReadOnly"},
kO:{"^":"iC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.c]},
$isx:1,
$asx:function(){return[P.c]},
$asp:function(){return[P.c]},
$isk:1,
$ask:function(){return[P.c]},
$isa:1,
$asa:function(){return[P.c]},
$asr:function(){return[P.c]},
"%":"DOMStringList"},
kP:{"^":"h;0j:length=","%":"DOMTokenList"},
S:{"^":"t;0dK:tagName=",
gd6:function(a){return new W.iD(a)},
k:function(a){return a.localName},
N:["ai",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d4
if(z==null){z=H.i([],[W.ab])
y=new W.dk(z)
C.a.l(z,W.dI(null))
C.a.l(z,W.dT())
$.d4=y
d=y}else d=z
z=$.d3
if(z==null){z=new W.dW(d)
$.d3=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.I).di(y,"")
$.af=y
$.cc=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.f(y,"$iscT")
y.href=z.baseURI
z=$.af.head;(z&&C.J).J(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbF")}z=$.af
if(!!this.$isbF)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.p).J(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.T,a.tagName)){z=$.cc;(z&&C.C).c4(z,x)
z=$.cc
w=(z&&C.C).dg(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.n(w);y=x.firstChild,y!=null;)z.J(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cM(x)
c.aK(w)
C.r.d3(document,w)
return w},function(a,b,c){return this.N(a,b,c,null)},"dh",null,null,"gdS",5,5,null],
c6:function(a,b,c,d){a.textContent=null
this.J(a,this.N(a,b,c,d))},
c5:function(a,b){return this.c6(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
cT:function(a,b){return a.removeAttribute(b)},
gdw:function(a){return new W.bP(a,"mousedown",!1,[W.a3])},
gdz:function(a){return new W.bP(a,"mousemove",!1,[W.a3])},
gdA:function(a){return new W.bP(a,"mouseup",!1,[W.a3])},
gdB:function(a){return new W.bP(a,H.w(W.fN(a)),!1,[W.b6])},
$isS:1,
"%":";Element"},
fM:{"^":"o:18;",
$1:function(a){return!!J.B(H.f(a,"$ist")).$isS}},
kR:{"^":"M;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a1:{"^":"h;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
N:{"^":"h;",
d2:function(a,b,c,d){H.m(c,{func:1,args:[W.a1]})
if(c!=null)this.cI(a,b,c,!1)},
cI:function(a,b,c,d){return a.addEventListener(b,H.bb(H.m(c,{func:1,args:[W.a1]}),1),!1)},
$isN:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dQ|dR|dU|dV"},
an:{"^":"fm;",$isan:1,"%":"File"},
l7:{"^":"iK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isan")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.an]},
$isx:1,
$asx:function(){return[W.an]},
$asp:function(){return[W.an]},
$isk:1,
$ask:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asr:function(){return[W.an]},
"%":"FileList"},
l8:{"^":"N;0j:length=","%":"FileWriter"},
lb:{"^":"M;0j:length=","%":"HTMLFormElement"},
ao:{"^":"h;",$isao:1,"%":"Gamepad"},
fV:{"^":"M;","%":"HTMLHeadElement"},
lc:{"^":"h;0j:length=","%":"History"},
ld:{"^":"iY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$asp:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asr:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fW:{"^":"fF;","%":"HTMLDocument"},
le:{"^":"M;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lh:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
li:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
lj:{"^":"M;0n:height=,0m:width=","%":"HTMLImageElement"},
ll:{"^":"M;0n:height=,0m:width=","%":"HTMLInputElement"},
aW:{"^":"dA;",$isaW:1,"%":"KeyboardEvent"},
hc:{"^":"h;",
k:function(a){return String(a)},
$ishc:1,
"%":"Location"},
hg:{"^":"M;","%":"HTMLAudioElement;HTMLMediaElement"},
ls:{"^":"h;0j:length=","%":"MediaList"},
lt:{"^":"j4;",
h:function(a,b){return P.a0(a.get(H.w(b)))},
G:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a0(y.value[1]))}},
gI:function(a){var z=H.i([],[P.c])
this.G(a,new W.hi(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.c,null]},
$isL:1,
$asL:function(){return[P.c,null]},
"%":"MIDIInputMap"},
hi:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lu:{"^":"j5;",
h:function(a,b){return P.a0(a.get(H.w(b)))},
G:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a0(y.value[1]))}},
gI:function(a){var z=H.i([],[P.c])
this.G(a,new W.hj(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.c,null]},
$isL:1,
$asL:function(){return[P.c,null]},
"%":"MIDIOutputMap"},
hj:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aq:{"^":"h;",$isaq:1,"%":"MimeType"},
lv:{"^":"j7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaq")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isk:1,
$ask:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asr:function(){return[W.aq]},
"%":"MimeTypeArray"},
a3:{"^":"dA;",
gbI:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b0(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.B(W.dX(z)).$isS)throw H.d(P.z("offsetX is only supported on elements"))
y=H.f(W.dX(z),"$isS")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.v(new P.b0(u,v,w),"$isb0",w,"$asb0")
if(typeof z!=="number")return z.aN()
if(typeof x!=="number")return x.aN()
return new P.b0(C.t.bN(z-u),C.t.bN(x-v),w)}},
$isa3:1,
"%":";DragEvent|MouseEvent"},
a6:{"^":"hb;a",
ga6:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.cn("No elements"))
if(y>1)throw H.d(P.cn("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.v(b,"$isk",[W.t],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.n(y),v=0;v<x;++v)w.J(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$ist")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.j(y,b)
J.eG(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.d6(z,z.length,-1,[H.bf(C.V,z,"r",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$asa:function(){return[W.t]}},
t:{"^":"N;0dC:previousSibling=",
dE:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cd(a):z},
J:function(a,b){return a.appendChild(b)},
cU:function(a,b){return a.removeChild(b)},
cV:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
ht:{"^":"j9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$asp:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asr:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lE:{"^":"M;0n:height=,0m:width=","%":"HTMLObjectElement"},
lG:{"^":"N;0n:height=,0m:width=","%":"OffscreenCanvas"},
lH:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
as:{"^":"h;0j:length=",$isas:1,"%":"Plugin"},
lJ:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isas")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$asp:function(){return[W.as]},
$isk:1,
$ask:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asr:function(){return[W.as]},
"%":"PluginArray"},
lL:{"^":"a3;0n:height=,0m:width=","%":"PointerEvent"},
hK:{"^":"h;",
dg:function(a,b){return a.createContextualFragment(b)},
c4:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lQ:{"^":"jj;",
h:function(a,b){return P.a0(a.get(H.w(b)))},
G:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a0(y.value[1]))}},
gI:function(a){var z=H.i([],[P.c])
this.G(a,new W.hQ(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.c,null]},
$isL:1,
$asL:function(){return[P.c,null]},
"%":"RTCStatsReport"},
hQ:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lR:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lS:{"^":"M;0j:length=","%":"HTMLSelectElement"},
at:{"^":"N;",$isat:1,"%":"SourceBuffer"},
lU:{"^":"dR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isat")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$asp:function(){return[W.at]},
$isk:1,
$ask:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asr:function(){return[W.at]},
"%":"SourceBufferList"},
au:{"^":"h;",$isau:1,"%":"SpeechGrammar"},
lV:{"^":"jp;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$asp:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asr:function(){return[W.au]},
"%":"SpeechGrammarList"},
av:{"^":"h;0j:length=",$isav:1,"%":"SpeechRecognitionResult"},
lY:{"^":"js;",
h:function(a,b){return this.bb(a,H.w(b))},
G:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=0;!0;++z){y=this.cR(a,z)
if(y==null)return
b.$2(y,this.bb(a,y))}},
gI:function(a){var z=H.i([],[P.c])
this.G(a,new W.i2(z))
return z},
gj:function(a){return a.length},
bb:function(a,b){return a.getItem(b)},
cR:function(a,b){return a.key(b)},
$asT:function(){return[P.c,P.c]},
$isL:1,
$asL:function(){return[P.c,P.c]},
"%":"Storage"},
i2:{"^":"o:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aw:{"^":"h;",$isaw:1,"%":"CSSStyleSheet|StyleSheet"},
i7:{"^":"M;",
N:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ai(a,b,c,d)
z=W.fL("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a6(y).H(0,new W.a6(z))
return y},
"%":"HTMLTableElement"},
m0:{"^":"M;",
N:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ai(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.N(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga6(z)
x.toString
z=new W.a6(x)
w=z.ga6(z)
y.toString
w.toString
new W.a6(y).H(0,new W.a6(w))
return y},
"%":"HTMLTableRowElement"},
m1:{"^":"M;",
N:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ai(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.N(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga6(z)
y.toString
x.toString
new W.a6(y).H(0,new W.a6(x))
return y},
"%":"HTMLTableSectionElement"},
dv:{"^":"M;",$isdv:1,"%":"HTMLTemplateElement"},
m2:{"^":"h;0m:width=","%":"TextMetrics"},
ax:{"^":"N;",$isax:1,"%":"TextTrack"},
ay:{"^":"N;",$isay:1,"%":"TextTrackCue|VTTCue"},
m3:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isay")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isk:1,
$ask:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asr:function(){return[W.ay]},
"%":"TextTrackCueList"},
m4:{"^":"dV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isax")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isk:1,
$ask:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asr:function(){return[W.ax]},
"%":"TextTrackList"},
m5:{"^":"h;0j:length=","%":"TimeRanges"},
az:{"^":"h;",$isaz:1,"%":"Touch"},
m6:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaz")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$asp:function(){return[W.az]},
$isk:1,
$ask:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asr:function(){return[W.az]},
"%":"TouchList"},
m7:{"^":"h;0j:length=","%":"TrackDefaultList"},
dA:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
ml:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mn:{"^":"hg;0n:height=,0m:width=","%":"HTMLVideoElement"},
mo:{"^":"N;0j:length=","%":"VideoTrackList"},
mp:{"^":"N;0n:height=,0m:width=","%":"VisualViewport"},
mq:{"^":"h;0m:width=","%":"VTTRegion"},
b6:{"^":"a3;",
gdk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.z("deltaY is not supported"))},
$isb6:1,
"%":"WheelEvent"},
ik:{"^":"N;",
gd5:function(a){var z,y,x
z=P.E
y=new P.ad(0,$.I,[z])
x=H.m(new W.il(new P.jw(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cN(a)
this.cW(a,W.e2(x,z))
return y},
cW:function(a,b){return a.requestAnimationFrame(H.bb(H.m(b,{func:1,ret:-1,args:[P.E]}),1))},
cN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdD:1,
"%":"DOMWindow|Window"},
il:{"^":"o:20;a",
$1:function(a){var z=this.a
a=H.bX(H.cz(a),{futureOr:1,type:H.q(z,0)})
z=z.a
if(z.a!==0)H.W(P.cn("Future already completed"))
z.am(a)}},
dF:{"^":"t;",$isdF:1,"%":"Attr"},
mw:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isam")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.am]},
$isx:1,
$asx:function(){return[W.am]},
$asp:function(){return[W.am]},
$isk:1,
$ask:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asr:function(){return[W.am]},
"%":"CSSRuleList"},
my:{"^":"fH;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
F:function(a,b){var z
if(b==null)return!1
if(!H.aN(b,"$isU",[P.E],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dK(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mz:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isao")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ao]},
$isx:1,
$asx:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$isk:1,
$ask:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asr:function(){return[W.ao]},
"%":"GamepadList"},
mE:{"^":"jP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$asp:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asr:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mF:{"^":"jR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$asp:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asr:function(){return[W.av]},
"%":"SpeechRecognitionResultList"},
mG:{"^":"jT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asr:function(){return[W.aw]},
"%":"StyleSheetList"},
it:{"^":"dh;cM:a<",
G:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=this.gI(this),y=z.length,x=this.a,w=J.n(x),v=0;v<z.length;z.length===y||(0,H.J)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gI:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.i([],[P.c])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.f(z[w],"$isdF")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asT:function(){return[P.c,P.c]},
$asL:function(){return[P.c,P.c]}},
iD:{"^":"it;a",
h:function(a,b){return J.c6(this.a,H.w(b))},
gj:function(a){return this.gI(this).length}},
iF:{"^":"i3;a,b,c,$ti"},
bP:{"^":"iF;a,b,c,$ti"},
iG:{"^":"i4;a,b,c,d,e,$ti",p:{
aA:function(a,b,c,d,e){var z=W.e2(new W.iH(c),W.a1)
if(z!=null&&!0)J.eH(a,b,z,!1)
return new W.iG(0,a,b,z,!1,[e])}}},
iH:{"^":"o:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isa1"))}},
bs:{"^":"b;a",
cE:function(a){var z,y
z=$.cD()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.S[y],W.kd())
for(y=0;y<12;++y)z.i(0,C.v[y],W.ke())}},
X:function(a){return $.eA().w(0,W.aT(a))},
S:function(a,b,c){var z,y,x
z=W.aT(a)
y=$.cD()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bV(x.$4(a,b,c,this))},
$isab:1,
p:{
dI:function(a){var z,y
z=document.createElement("a")
y=new W.jk(z,window.location)
y=new W.bs(y)
y.cE(a)
return y},
mC:[function(a,b,c,d){H.f(a,"$isS")
H.w(b)
H.w(c)
H.f(d,"$isbs")
return!0},"$4","kd",16,0,12],
mD:[function(a,b,c,d){var z,y,x
H.f(a,"$isS")
H.w(b)
H.w(c)
z=H.f(d,"$isbs").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ke",16,0,12]}},
r:{"^":"b;$ti",
gB:function(a){return new W.d6(a,this.gj(a),-1,[H.bf(this,a,"r",0)])}},
dk:{"^":"b;a",
X:function(a){return C.a.bj(this.a,new W.hv(a))},
S:function(a,b,c){return C.a.bj(this.a,new W.hu(a,b,c))},
$isab:1},
hv:{"^":"o:9;a",
$1:function(a){return H.f(a,"$isab").X(this.a)}},
hu:{"^":"o:9;a,b,c",
$1:function(a){return H.f(a,"$isab").S(this.a,this.b,this.c)}},
jl:{"^":"b;",
cF:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aB(0,new W.jm())
y=b.aB(0,new W.jn())
this.b.H(0,z)
x=this.c
x.H(0,C.U)
x.H(0,y)},
X:function(a){return this.a.w(0,W.aT(a))},
S:["cg",function(a,b,c){var z,y
z=W.aT(a)
y=this.c
if(y.w(0,H.e(z)+"::"+b))return this.d.d4(c)
else if(y.w(0,"*::"+b))return this.d.d4(c)
else{y=this.b
if(y.w(0,H.e(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.e(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isab:1},
jm:{"^":"o:10;",
$1:function(a){return!C.a.w(C.v,H.w(a))}},
jn:{"^":"o:10;",
$1:function(a){return C.a.w(C.v,H.w(a))}},
jx:{"^":"jl;e,a,b,c,d",
S:function(a,b,c){if(this.cg(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c6(a,"template")==="")return this.e.w(0,b)
return!1},
p:{
dT:function(){var z,y,x,w,v
z=P.c
y=P.ci(C.u,z)
x=H.q(C.u,0)
w=H.m(new W.jy(),{func:1,ret:z,args:[x]})
v=H.i(["TEMPLATE"],[z])
y=new W.jx(y,P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z),null)
y.cF(null,new H.he(C.u,w,[x,z]),v,null)
return y}}},
jy:{"^":"o:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.w(a))}},
jv:{"^":"b;",
X:function(a){var z=J.B(a)
if(!!z.$isdq)return!1
z=!!z.$isH
if(z&&W.aT(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.i.c9(b,"on"))return!1
return this.X(a)},
$isab:1},
d6:{"^":"b;a,b,c,0d,$ti",
sb9:function(a){this.d=H.A(a,H.q(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb9(J.bi(this.a,z))
this.c=z
return!0}this.sb9(null)
this.c=y
return!1},
gD:function(a){return this.d},
$isaV:1},
ix:{"^":"b;a",$isN:1,$isdD:1,p:{
iy:function(a){if(a===window)return H.f(a,"$isdD")
else return new W.ix(a)}}},
ab:{"^":"b;"},
jk:{"^":"b;a,b",$ismk:1},
dW:{"^":"b;a",
aK:function(a){new W.jI(this).$2(a,null)},
a_:function(a,b){if(b==null)J.cM(a)
else J.bA(b,a)},
cZ:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f_(a)
x=J.c6(y.gcM(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a7(t)}v="element unprintable"
try{v=J.bj(a)}catch(t){H.a7(t)}try{u=W.aT(a)
this.cY(H.f(a,"$isS"),b,z,v,u,H.f(y,"$isL"),H.w(x))}catch(t){if(H.a7(t) instanceof P.aG)throw t
else{this.a_(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cY:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a_(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.X(a)){this.a_(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a_(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gI(f)
y=H.i(z.slice(0),[H.q(z,0)])
for(x=f.gI(f).length-1,z=f.a,w=J.n(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.S(a,J.f8(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.cT(z,v)}}if(!!J.B(a).$isdv)this.aK(a.content)},
$islC:1},
jI:{"^":"o:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cZ(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a_(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f0(z)}catch(w){H.a7(w)
v=H.f(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$ist")}}},
iw:{"^":"h+fx;"},
iz:{"^":"h+p;"},
iA:{"^":"iz+r;"},
iB:{"^":"h+p;"},
iC:{"^":"iB+r;"},
iJ:{"^":"h+p;"},
iK:{"^":"iJ+r;"},
iX:{"^":"h+p;"},
iY:{"^":"iX+r;"},
j4:{"^":"h+T;"},
j5:{"^":"h+T;"},
j6:{"^":"h+p;"},
j7:{"^":"j6+r;"},
j8:{"^":"h+p;"},
j9:{"^":"j8+r;"},
jc:{"^":"h+p;"},
jd:{"^":"jc+r;"},
jj:{"^":"h+T;"},
dQ:{"^":"N+p;"},
dR:{"^":"dQ+r;"},
jo:{"^":"h+p;"},
jp:{"^":"jo+r;"},
js:{"^":"h+T;"},
jz:{"^":"h+p;"},
jA:{"^":"jz+r;"},
dU:{"^":"N+p;"},
dV:{"^":"dU+r;"},
jE:{"^":"h+p;"},
jF:{"^":"jE+r;"},
jK:{"^":"h+p;"},
jL:{"^":"jK+r;"},
jM:{"^":"h+p;"},
jN:{"^":"jM+r;"},
jO:{"^":"h+p;"},
jP:{"^":"jO+r;"},
jQ:{"^":"h+p;"},
jR:{"^":"jQ+r;"},
jS:{"^":"h+p;"},
jT:{"^":"jS+r;"}}],["","",,P,{"^":"",
a0:function(a){var z,y,x,w,v
if(a==null)return
z=P.Y(P.c,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=H.w(y[w])
z.i(0,v,a[v])}return z},
k4:function(a,b){var z={}
a.G(0,new P.k5(z))
return z},
d1:function(){var z=$.d0
if(z==null){z=J.c2(window.navigator.userAgent,"Opera",0)
$.d0=z}return z},
fD:function(){var z,y
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
k5:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ku:function(a){return Math.sqrt(a)},
dJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b0:{"^":"b;af:a>,a4:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
F:function(a,b){if(b==null)return!1
return H.aN(b,"$isb0",[P.E],null)&&this.a==J.bE(b)&&this.b==b.ga4(b)},
gA:function(a){var z,y,x
z=J.al(this.a)
y=J.al(this.b)
y=P.dJ(P.dJ(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
je:{"^":"b;"},
U:{"^":"je;$ti"}}],["","",,P,{"^":"",fi:{"^":"h;",$isfi:1,"%":"SVGAnimatedLength"},kS:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},kT:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kU:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kV:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},kW:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},kX:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kY:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kZ:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},l_:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},l0:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},l1:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},l2:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},l3:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},l4:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},l5:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},l6:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},l9:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},la:{"^":"bm;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fU:{"^":"bm;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bm:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lk:{"^":"bm;0n:height=,0m:width=","%":"SVGImageElement"},aX:{"^":"h;",$isaX:1,"%":"SVGLength"},lq:{"^":"j_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.f(c,"$isaX")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aX]},
$isk:1,
$ask:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$asr:function(){return[P.aX]},
"%":"SVGLengthList"},lr:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},b_:{"^":"h;",$isb_:1,"%":"SVGNumber"},lD:{"^":"jb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.f(c,"$isb_")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b_]},
$isk:1,
$ask:function(){return[P.b_]},
$isa:1,
$asa:function(){return[P.b_]},
$asr:function(){return[P.b_]},
"%":"SVGNumberList"},lI:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},lK:{"^":"h;0j:length=","%":"SVGPointList"},lM:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lN:{"^":"fU;0n:height=,0m:width=","%":"SVGRectElement"},dq:{"^":"H;",$isdq:1,"%":"SVGScriptElement"},lZ:{"^":"ju;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.w(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.c]},
$isk:1,
$ask:function(){return[P.c]},
$isa:1,
$asa:function(){return[P.c]},
$asr:function(){return[P.c]},
"%":"SVGStringList"},H:{"^":"S;",
N:function(a,b,c,d){var z,y,x,w,v,u
z=H.i([],[W.ab])
C.a.l(z,W.dI(null))
C.a.l(z,W.dT())
C.a.l(z,new W.jv())
c=new W.dW(new W.dk(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dh(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a6(w)
u=z.ga6(z)
for(z=J.n(v);x=u.firstChild,x!=null;)z.J(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m_:{"^":"bm;0n:height=,0m:width=","%":"SVGSVGElement"},b3:{"^":"h;",$isb3:1,"%":"SVGTransform"},m8:{"^":"jH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.R(a,b)},
i:function(a,b,c){H.f(c,"$isb3")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
R:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b3]},
$isk:1,
$ask:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asr:function(){return[P.b3]},
"%":"SVGTransformList"},mm:{"^":"bm;0n:height=,0m:width=","%":"SVGUseElement"},iZ:{"^":"h+p;"},j_:{"^":"iZ+r;"},ja:{"^":"h+p;"},jb:{"^":"ja+r;"},jt:{"^":"h+p;"},ju:{"^":"jt+r;"},jG:{"^":"h+p;"},jH:{"^":"jG+r;"}}],["","",,P,{"^":"",ah:{"^":"b;",$isk:1,
$ask:function(){return[P.ai]},
$isa:1,
$asa:function(){return[P.ai]},
$isic:1}}],["","",,P,{"^":"",kA:{"^":"h;0j:length=","%":"AudioBuffer"},kB:{"^":"iu;",
h:function(a,b){return P.a0(a.get(H.w(b)))},
G:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a0(y.value[1]))}},
gI:function(a){var z=H.i([],[P.c])
this.G(a,new P.fk(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.c,null]},
$isL:1,
$asL:function(){return[P.c,null]},
"%":"AudioParamMap"},fk:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kC:{"^":"N;0j:length=","%":"AudioTrackList"},fl:{"^":"N;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lF:{"^":"fl;0j:length=","%":"OfflineAudioContext"},iu:{"^":"h+T;"}}],["","",,P,{"^":"",fn:{"^":"h;",$isfn:1,"%":"WebGLBuffer"},fT:{"^":"h;",$isfT:1,"%":"WebGLFramebuffer"},hJ:{"^":"h;",$ishJ:1,"%":"WebGLProgram"},lO:{"^":"h;",
bi:function(a,b){return a.activeTexture(b)},
bk:function(a,b,c){return a.attachShader(b,c)},
bl:function(a,b,c){return a.bindBuffer(b,c)},
bn:function(a,b,c){return a.bindFramebuffer(b,c)},
bo:function(a,b,c){return a.bindTexture(b,c)},
bp:function(a,b){return a.blendEquation(b)},
bq:function(a,b,c){return a.blendFunc(b,c)},
br:function(a,b,c,d){return a.bufferData(b,c,d)},
bs:function(a,b){return a.clear(b)},
bt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bv:function(a){return a.createBuffer()},
bw:function(a){return a.createProgram()},
bx:function(a,b){return a.createShader(b)},
bz:function(a,b){return a.depthMask(b)},
bA:function(a,b){return a.disable(b)},
bB:function(a,b,c,d){return a.drawArrays(b,c,d)},
bC:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bD:function(a,b){return a.enable(b)},
bE:function(a,b){return a.enableVertexAttribArray(b)},
ag:function(a){return P.a0(a.getContextAttributes())},
aD:function(a,b){return a.getProgramInfoLog(b)},
aE:function(a,b,c){return a.getProgramParameter(b,c)},
aG:function(a,b){return a.getShaderInfoLog(b)},
aH:function(a,b,c){return a.getShaderParameter(b,c)},
aI:function(a,b,c){return a.getUniformLocation(b,c)},
bG:function(a,b){return a.linkProgram(b)},
aL:function(a,b,c){return a.shaderSource(b,c)},
aM:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bO:function(a,b,c){return a.uniform1f(b,c)},
bP:function(a,b,c){return a.uniform1fv(b,c)},
bQ:function(a,b,c){return a.uniform1i(b,c)},
bR:function(a,b,c){return a.uniform1iv(b,c)},
bS:function(a,b,c){return a.uniform2fv(b,c)},
bT:function(a,b,c){return a.uniform3fv(b,c)},
bU:function(a,b,c){return a.uniform4fv(b,c)},
bV:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bW:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bX:function(a,b){return a.useProgram(b)},
bY:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c_:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lP:{"^":"h;",
d7:function(a,b){return a.beginTransformFeedback(b)},
da:function(a,b){return a.bindVertexArray(b)},
dj:function(a){return a.createVertexArray()},
dl:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dm:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dn:function(a){return a.endTransformFeedback()},
dN:function(a,b,c,d){this.d1(a,b,H.v(c,"$isa",[P.c],"$asa"),d)
return},
d1:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dO:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bi:function(a,b){return a.activeTexture(b)},
bk:function(a,b,c){return a.attachShader(b,c)},
bl:function(a,b,c){return a.bindBuffer(b,c)},
bn:function(a,b,c){return a.bindFramebuffer(b,c)},
bo:function(a,b,c){return a.bindTexture(b,c)},
bp:function(a,b){return a.blendEquation(b)},
bq:function(a,b,c){return a.blendFunc(b,c)},
br:function(a,b,c,d){return a.bufferData(b,c,d)},
bs:function(a,b){return a.clear(b)},
bt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bu:function(a,b){return a.compileShader(b)},
bv:function(a){return a.createBuffer()},
bw:function(a){return a.createProgram()},
bx:function(a,b){return a.createShader(b)},
bz:function(a,b){return a.depthMask(b)},
bA:function(a,b){return a.disable(b)},
bB:function(a,b,c,d){return a.drawArrays(b,c,d)},
bC:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bD:function(a,b){return a.enable(b)},
bE:function(a,b){return a.enableVertexAttribArray(b)},
ag:function(a){return P.a0(a.getContextAttributes())},
aD:function(a,b){return a.getProgramInfoLog(b)},
aE:function(a,b,c){return a.getProgramParameter(b,c)},
aG:function(a,b){return a.getShaderInfoLog(b)},
aH:function(a,b,c){return a.getShaderParameter(b,c)},
aI:function(a,b,c){return a.getUniformLocation(b,c)},
bG:function(a,b){return a.linkProgram(b)},
aL:function(a,b,c){return a.shaderSource(b,c)},
aM:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bO:function(a,b,c){return a.uniform1f(b,c)},
bP:function(a,b,c){return a.uniform1fv(b,c)},
bQ:function(a,b,c){return a.uniform1i(b,c)},
bR:function(a,b,c){return a.uniform1iv(b,c)},
bS:function(a,b,c){return a.uniform2fv(b,c)},
bT:function(a,b,c){return a.uniform3fv(b,c)},
bU:function(a,b,c){return a.uniform4fv(b,c)},
bV:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bW:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bX:function(a,b){return a.useProgram(b)},
bY:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c_:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hV:{"^":"h;",$ishV:1,"%":"WebGLShader"},i9:{"^":"h;",$isi9:1,"%":"WebGLTexture"},id:{"^":"h;",$isid:1,"%":"WebGLUniformLocation"},ii:{"^":"h;",$isii:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lW:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return P.a0(this.cQ(a,b))},
i:function(a,b,c){H.f(c,"$isL")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
cQ:function(a,b){return a.item(b)},
$asp:function(){return[[P.L,,,]]},
$isk:1,
$ask:function(){return[[P.L,,,]]},
$isa:1,
$asa:function(){return[[P.L,,,]]},
$asr:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},jq:{"^":"h+p;"},jr:{"^":"jq+r;"}}],["","",,G,{"^":"",
im:function(a){var z,y,x,w
z=H.i(a.split("\n"),[P.c])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.j(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a3(z,"\n")},
dG:function(a,b,c){var z,y,x,w
z=J.n(a)
y=z.bx(a,b)
z.aL(a,y,c)
z.bu(a,y)
x=H.bV(z.aH(a,y,35713))
if(x!=null&&!x){w=z.aG(a,y)
P.aD("E:Compilation failed:")
P.aD("E:"+G.im(c))
P.aD("E:Failure:")
P.aD(C.i.K("E:",w))
throw H.d(w)}return y},
d7:function(a,b){var z,y,x
H.v(a,"$isa",[T.l],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.c5(a[y]))
z+=2
if(y>=a.length)return H.j(a,y)
x=J.cK(a[y])
if(z>=b.length)return H.j(b,z)
b[z]=x}return b},
fQ:function(a,b){var z,y
H.v(a,"$isa",[T.y],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.c5(a[y]))}return b},
fR:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.aJ],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.c5(a[y]))
x=z+2
if(y>=a.length)return H.j(a,y)
w=J.cK(a[y])
v=b.length
if(x>=v)return H.j(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.j(a,y)
w=J.f2(a[y])
if(z>=v)return H.j(b,z)
b[z]=w}return b},
fP:function(a,b){var z,y
H.v(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.bi(a[y],0))
if(y>=a.length)return H.j(a,y)
C.n.i(b,z+1,J.bi(a[y],1))
if(y>=a.length)return H.j(a,y)
C.n.i(b,z+2,J.bi(a[y],2))
if(y>=a.length)return H.j(a,y)
C.n.i(b,z+3,J.bi(a[y],3))}return b},
iV:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ap(z,[H.q(z,0)]),y=y.gB(y),x=b.x,w=[[P.a,P.D]],v=[P.ai],u=[T.aJ],t=[T.l],s=[T.y];y.u();){r=y.d
if(!x.ad(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.e8>0)H.c0("I: "+r)
continue}q=z.h(0,r)
switch($.a8().h(0,r).a){case"vec2":b.Z(r,G.fQ(H.bz(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.Z(r,G.d7(H.bz(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.Z(r,G.fR(H.bz(q,"$isa",u,"$asa"),null),4)
break
case"float":b.Z(r,new Float32Array(H.bR(H.bz(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.Z(r,G.fP(H.bz(q,"$isa",w,"$asa"),null),4)
break}}},
d9:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.c
w=P.Y(x,P.b)
v=J.eQ(z.a)
u=new G.hh(z,v,4,w,y,0,-1,P.Y(x,P.ah),"meshdata:"+a,!1,!0)
x=G.d7(c.d,null)
w.i(0,"aPosition",J.c3(z.a))
u.ch=x
u.aT("aPosition",x,3)
t=$.a8().h(0,"aPosition")
if(t==null)H.W("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bB(z.a,v)
z.bF(0,s,0)
z.bZ(0,w.h(0,"aPosition"),s,t.aU(),5126,!1,0,0)
y=H.v(c.co(),"$isa",[P.D],"$asa")
u.y=J.c3(z.a)
x=u.ch.length
if(x<768){u.sap(new Uint8Array(H.bR(y)))
u.Q=5121}else if(x<196608){u.sap(new Uint16Array(H.bR(y)))
u.Q=5123}else{u.sap(new Uint32Array(H.bR(y)))
u.Q=5125}J.bB(z.a,v)
y=u.y
x=u.cx
J.c1(z.a,34963,y)
J.cI(z.a,34963,x,35048)
G.iV(c,u)
return u},
aZ:{"^":"b;"},
b4:{"^":"aZ;d,a,b,c",
aV:function(){return this.d},
k:function(a){var z,y,x,w
z=H.i(["{"+new H.dz(H.ka(this)).k(0)+"}["+this.a+"]"],[P.c])
for(y=this.d,x=new H.ap(y,[H.q(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a3(z,"\n")}},
fp:{"^":"b;0a,b",
bF:function(a,b,c){J.eX(this.a,b)
if(c>0)J.fe(this.a,b,c)},
bZ:function(a,b,c,d,e,f,g,h){J.c1(this.a,34962,b)
J.ff(this.a,c,d,e,!1,g,h)}},
fS:{"^":"b;a,b,c,d,e"},
ag:{"^":"b;ac:a>,a0:b>,a1:c>",p:{
K:function(a,b,c){return new G.ag(a,b,c)}}},
cd:{"^":"b;ac:a>,a0:b>,a1:c>,d"},
d8:{"^":"b;a,b,c,d,e",
a8:function(a){switch($.a8().h(0,a).a){case"vec2":this.e.i(0,a,H.i([],[T.y]))
break
case"vec3":this.e.i(0,a,H.i([],[T.l]))
break
case"vec4":this.e.i(0,a,H.i([],[T.aJ]))
break
case"float":this.e.i(0,a,H.i([],[P.ai]))
break
case"uvec4":this.e.i(0,a,H.i([],[[P.a,P.D]]))
break}},
cj:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.cd(z,z+1,z+2,z+3))},
aS:function(a){var z,y,x,w,v
H.v(a,"$isa",[T.l],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.J)(a),++x){w=a[x]
v=new T.l(new Float32Array(3))
v.C(w)
C.a.l(y,v)}},
aP:function(a,b){var z,y,x,w,v,u,t
z=[T.y]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.y(u))}},
aQ:function(a,b){var z,y,x,w,v,u
z=[T.l]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new T.l(new Float32Array(3))
u.C(v)
x.l(y,u)}},
co:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.i(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.J)(z),++u){t=z[u]
C.a.i(w,v,t.a)
C.a.i(w,v+1,t.b)
C.a.i(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.J)(y),++u){s=y[u]
x=s.a
C.a.i(w,v,x)
C.a.i(w,v+1,s.b)
r=s.c
C.a.i(w,v+2,r)
C.a.i(w,v+3,x)
C.a.i(w,v+4,r)
C.a.i(w,v+5,s.d)
v+=6}return w},
k:function(a){var z,y,x,w,v
z=H.i(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.c])
for(y=this.e,x=new H.ap(y,[H.q(y,0)]),x=x.gB(x);x.u();){w=x.d
v=$.a8().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a3(z," ")}},
dx:{"^":"b;a,b,c"},
dw:{"^":"b;a,b,c"},
hf:{"^":"b4;d,a,b,c"},
hh:{"^":"aZ;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sap:function(a){this.cx=H.v(a,"$isa",[P.D],"$asa")},
aT:function(a,b,c){var z,y
C.i.al(a,0)
H.f(b,"$isah")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c1(z.a,34962,y)
J.cI(z.a,34962,b,35048)},
cp:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
Z:function(a,b,c){var z,y,x,w,v
z=J.cE(a,0)===105
if(z&&this.z===0)this.z=C.d.ci(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c3(x.a))
this.aT(a,b,c)
w=$.a8().h(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.h(0,a)
J.bB(x.a,this.e)
x.bF(0,v,z?1:0)
x.bZ(0,y.h(0,a),v,w.aU(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.i(["Faces:"+(z==null?0:z.length)],[P.c])
for(z=this.cy,x=new H.ap(z,[H.q(z,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a3(y,"  ")}},
hz:{"^":"b4;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ck:function(a,b){var z
if(typeof a!=="number")return a.dQ()
if(typeof b!=="number")return H.aC(b)
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
aV:function(){var z,y,x
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aC())
x=this.cy
x.C(z.d)
z=this.cx
z.C(this.db)
z.bH(0,x)
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
kQ:{"^":"b;"},
hP:{"^":"aZ;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cu:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.i(0,t,J.cL(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.i(0,t,J.cL(w.a,v,t))}},
cA:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.i([],[P.c])
x=H.i([],[P.c])
for(y=new H.ap(y,[H.q(y,0)]),y=y.gB(y);y.u();){w=y.d
if(!z.ad(0,w))C.a.l(x,w)}for(z=this.x,z=P.j1(z,z.r,H.q(z,0)),y=this.Q;z.u();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(b,"$isL",[P.c,P.b],"$asL")
z=Date.now()
for(y=new H.ap(b,[H.q(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cE(s,0)){case 117:if(w.ad(0,s)){r=b.h(0,s)
if(v.ad(0,s))H.c0("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a8().h(0,s)
if(q==null)H.W("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.P(r)
J.c7(x.a,p,r)}else if(!!J.B(r).$isfZ)J.fc(x.a,p,r)
break
case"float":if(q.c===0){H.e6(r)
J.fa(x.a,p,r)}else if(!!J.B(r).$isah)J.fb(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ak(r,"$isZ").a
J.cR(x.a,p,!1,s)}else if(!!J.B(r).$isah)J.cR(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ak(r,"$isaY").a
J.cQ(x.a,p,!1,s)}else if(!!J.B(r).$isah)J.cQ(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cP(o,p,H.ak(r,"$isaJ").a)
else J.cP(o,p,H.f(r,"$isah"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cO(o,p,H.ak(r,"$isl").a)
else J.cO(o,p,H.f(r,"$isah"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cN(o,p,H.ak(r,"$isy").a)
else J.cN(o,p,H.f(r,"$isah"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aC(s)
J.cF(x.a,33984+s)
s=H.ak(r,"$isi8").cq()
J.cH(x.a,3553,s)
s=this.ch
J.c7(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.K()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aC(s)
J.cF(x.a,33984+s)
s=H.ak(r,"$isi8").cq()
J.cH(x.a,34067,s)
s=this.ch
J.c7(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.K()
this.ch=s+1
break
default:H.c0("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aF(r,!0)
o=x.a
if(s)J.bC(o,2929)
else J.c4(o,2929)
break
case"cStencilFunc":H.ak(r,"$isdx")
s=r.a
o=x.a
if(s===1281)J.c4(o,2960)
else{J.bC(o,2960)
o=r.b
n=r.c
J.f7(x.a,s,o,n)}break
case"cDepthWrite":H.bV(r)
J.eR(x.a,r)
break
case"cBlendEquation":H.ak(r,"$isdw")
s=r.a
o=x.a
if(s===1281)J.c4(o,3042)
else{J.bC(o,3042)
o=r.b
n=r.c
J.eL(x.a,o,n)
J.eK(x.a,s)}break}++t
break}}m=P.fI(0,0,0,Date.now()-new P.bH(z,!1).a,0,0)
""+t
m.k(0)},
cn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[G.b4],"$asa")
Date.now()
z=this.d
J.fd(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b3()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.J)(b),++x){w=b[x]
this.cD(w.a,w.aV())}y=this.Q
y.a2(0)
for(v=a.cy,v=new H.ap(v,[H.q(v,0)]),v=v.gB(v);v.u();)y.l(0,v.d)
u=this.cA()
if(u.length!==0)P.aD("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bB(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cp()
s=a.Q
r=a.z
if(t)J.eI(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eV(q,y,v,s,0,r)
else J.eU(q,y,v,s,0)}else{s=z.a
if(r>1)J.eT(s,y,0,v,r)
else J.eS(s,y,0,v)}if(t)J.eY(z.a)},
p:{
dp:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.c
y=P.a2(null,null,null,z)
x=c.b
w=d.b
v=H.v(c.f,"$isa",[z],"$asa")
u=J.eP(b.a)
t=G.dG(b.a,35633,x)
J.cG(b.a,u,t)
s=G.dG(b.a,35632,w)
J.cG(b.a,u,s)
if(v.length>0)J.f9(b.a,u,v,35980)
J.f6(b.a,u)
if(!H.bV(J.f5(b.a,u,35714)))H.W(J.f4(b.a,u))
z=new G.hP(b,c,d,u,P.ci(c.c,z),P.Y(z,P.b),P.Y(z,z),y,a,!1,!0)
z.cu(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
aU:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hW:{"^":"b;a,0b,c,d,e,f,r,x",
aO:function(a){var z,y,x,w,v
H.v(a,"$isa",[P.c],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.J)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.ah(y)},
aR:function(a){var z,y
H.v(a,"$isa",[P.c],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.l(z,a[y])
C.a.ah(z)},
a7:function(a){var z,y,x
H.v(a,"$isa",[P.c],"$asa")
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.J)(a),++x)C.a.l(y,a[x])
C.a.ah(y)},
aX:function(a,b){var z=[P.c]
this.b=this.aZ(!0,H.v(a,"$isa",z,"$asa"),H.v(b,"$isa",z,"$asa"))},
cw:function(a){return this.aX(a,null)},
cv:function(a,b){this.b=this.aZ(!1,H.v(a,"$isa",[P.c],"$asa"),b)},
aW:function(a){return this.cv(a,null)},
aZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.c]
H.v(b,"$isa",z,"$asa")
H.v(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.i(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.J)(y),++u){t=y[u]
s=$.a8().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a8().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a8().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a8().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(c!=null)C.a.H(w,c)
if(a)C.a.l(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.l(w,"}")
return C.a.a3(w,"\n")},
p:{
bN:function(a){var z,y
z=P.c
y=[z]
return new G.hW(a,H.i([],y),H.i([],y),H.i([],y),H.i([],y),0,P.Y(z,P.D))}}},
dr:{"^":"aZ;",
aC:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
c7:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
j3:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iE("span",null),"$isS")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).ak(y,"float")
y.setProperty(x,"left","")
x=C.x.ak(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.J(z,v)}return z},
hO:{"^":"hN;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dG:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aD("size change "+H.e(y)+" "+H.e(x))
this.dx.ck(y,x)
this.z=y
this.Q=x},"$1","gdF",4,0,24]},
i0:{"^":"b;",
cz:function(a,b,c){var z,y
z=this.a
if(z==null)throw H.d("no element provided")
y=z.style
y.color=b
y.fontFamily="Helvetica,Arial,sans-serif"
y.fontSize="9px"
y.lineHeight="15px"
y.padding="0 0 3px 3px"
y.textAlign="left"
y.background=c
y=J.n(z)
y.J(z,this.b)
y.J(z,this.d)
y.J(z,this.c)}},
i1:{"^":"i0;e,f,a,b,c,d",
cC:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.dM(y,2)+" fps"
C.q.c5(this.c,b)
x=C.d.W(30*C.y.dc(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isS")
v=w.style
u=""+x+"px"
v.height=u
C.q.J(z,w)},
cB:function(a){return this.cC(a,"")}}}],["","",,A,{"^":"",
e7:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(e,"$isa",[G.b4],"$asa")
z=b.dx
z.C(c)
y=b.d
z.bH(0,y)
x=b.cx
H.e(b)
w=C.a.gdu(e)
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
v.df(new T.aY(u))
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
a.cn(x,e,d)
if(0>=e.length)return H.j(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.j(y,r)
A.e7(a,y[r],z,d,e)}},
ck:{"^":"dr;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
cl:{"^":"aZ;d,e,f,a,b,c"},
hN:{"^":"aZ;",
ct:function(a,b,c){if(this.d==null)this.d=new G.fS(this.e,null,null,null,null)},
cm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eJ(v.a,36160,z)
J.fg(v.a,this.x,this.y,x,w)
if(y!==0)J.eM(v.a,y)
for(z=this.f,y=z.length,x=P.c,w=P.b,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.b4(P.Y(x,w),"transforms",!1,!0))
r=new T.Z(new Float32Array(16))
r.P()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.J)(v),++o)A.e7(p,v[o],r,a,s)
if(0>=s.length)return H.j(s,-1)
s.pop()}},
cl:function(){return this.cm(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fz:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.l(new Float32Array(3))
x.q(z,y,b2)
w=new T.l(new Float32Array(3))
w.q(b0,y,b2)
v=new T.l(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.l(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.l(new Float32Array(3))
s.q(z,y,t)
r=new T.l(new Float32Array(3))
r.q(z,b1,t)
q=new T.l(new Float32Array(3))
q.q(b0,b1,t)
p=new T.l(new Float32Array(3))
p.q(b0,y,t)
o=new T.l(new Float32Array(3))
o.q(z,b1,t)
n=new T.l(new Float32Array(3))
n.q(z,b1,b2)
m=new T.l(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.l(new Float32Array(3))
l.q(b0,b1,t)
k=new T.l(new Float32Array(3))
k.q(b0,y,b2)
j=new T.l(new Float32Array(3))
j.q(z,y,b2)
i=new T.l(new Float32Array(3))
i.q(z,y,t)
h=new T.l(new Float32Array(3))
h.q(b0,y,t)
g=new T.l(new Float32Array(3))
g.q(b0,y,t)
f=new T.l(new Float32Array(3))
f.q(b0,b1,t)
e=new T.l(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.l(new Float32Array(3))
d.q(b0,y,b2)
c=new T.l(new Float32Array(3))
c.q(z,y,t)
b=new T.l(new Float32Array(3))
b.q(z,y,b2)
y=new T.l(new Float32Array(3))
y.q(z,b1,b2)
a=new T.l(new Float32Array(3))
a.q(z,b1,t)
t=[T.l]
a0=H.i([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.y(new Float32Array(2))
z.v(a7,a9)
y=new T.y(new Float32Array(2))
y.v(a6,a9)
x=new T.y(new Float32Array(2))
x.v(a6,a8)
w=new T.y(new Float32Array(2))
w.v(a7,a8)
v=new T.y(new Float32Array(2))
v.v(a6,a9)
u=new T.y(new Float32Array(2))
u.v(a6,a8)
s=new T.y(new Float32Array(2))
s.v(a7,a8)
r=new T.y(new Float32Array(2))
r.v(a7,a9)
q=new T.y(new Float32Array(2))
q.v(a7,a8)
p=new T.y(new Float32Array(2))
p.v(a7,a9)
o=new T.y(new Float32Array(2))
o.v(a6,a9)
n=new T.y(new Float32Array(2))
n.v(a6,a8)
m=new T.y(new Float32Array(2))
m.v(a6,a8)
l=new T.y(new Float32Array(2))
l.v(a7,a8)
k=new T.y(new Float32Array(2))
k.v(a7,a9)
j=new T.y(new Float32Array(2))
j.v(a6,a9)
i=new T.y(new Float32Array(2))
i.v(a6,a9)
h=new T.y(new Float32Array(2))
h.v(a6,a8)
g=new T.y(new Float32Array(2))
g.v(a7,a8)
f=new T.y(new Float32Array(2))
f.v(a7,a9)
e=new T.y(new Float32Array(2))
e.v(a7,a9)
d=new T.y(new Float32Array(2))
d.v(a6,a9)
c=new T.y(new Float32Array(2))
c.v(a6,a8)
b=new T.y(new Float32Array(2))
b.v(a7,a8)
a1=H.i([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.y])
a2=new G.d8(!1,H.i([],[G.ag]),H.i([],[G.cd]),H.i([],t),P.Y(P.c,[P.a,,]))
a2.a8("aTexUV")
a2.a8("aNormal")
a2.cj(6)
a2.aS(a0)
a2.aP("aTexUV",a1)
for(a3=0;z=$.ez(),a3<6;++a3){a4=z[a3]
a2.aQ("aNormal",H.i([a4,a4,a4,a4],t))}return a2},
fX:function(a1,a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=[G.ag]
y=H.i([],z)
x=[T.l]
w=H.i([],x)
C.a.H(y,$.em())
C.a.H(w,$.en())
for(v=0;v<a3;++v,y=u){u=H.i([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.J)(y),++s){r=y[s]
q=J.cJ(r)
if(q>=w.length)return H.j(w,q)
q=w[q]
p=new T.l(new Float32Array(3))
p.C(q)
q=r.ga0(r)
if(q>=w.length)return H.j(w,q)
p.l(0,w[q])
p.U(0,0.5)
p.E(0)
q=r.ga0(r)
if(q>=w.length)return H.j(w,q)
q=w[q]
o=new T.l(new Float32Array(3))
o.C(q)
q=r.ga1(r)
if(q>=w.length)return H.j(w,q)
o.l(0,w[q])
o.U(0,0.5)
o.E(0)
q=r.ga1(r)
if(q>=w.length)return H.j(w,q)
q=w[q]
n=new T.l(new Float32Array(3))
n.C(q)
q=r.gac(r)
if(q>=w.length)return H.j(w,q)
n.l(0,w[q])
n.U(0,0.5)
n.E(0)
m=w.length
C.a.l(w,p)
l=w.length
C.a.l(w,o)
k=w.length
C.a.l(w,n)
C.a.l(u,new G.ag(r.gac(r),m,k))
C.a.l(u,new G.ag(r.ga0(r),l,m))
C.a.l(u,new G.ag(r.ga1(r),k,l))
C.a.l(u,new G.ag(m,l,k))}}z=H.i([],z)
t=H.i([],[G.cd])
q=H.i([],x)
j=new G.d8(!1,z,t,q,P.Y(P.c,[P.a,,]))
j.a8("aTexUV")
j.a8("aNormal")
for(t=y.length,i=[T.y],s=0;s<y.length;y.length===t||(0,H.J)(y),++s){r=y[s]
h=J.cJ(r)
if(h>=w.length)return H.j(w,h)
g=w[h]
h=r.ga0(r)
if(h>=w.length)return H.j(w,h)
f=w[h]
h=r.ga1(r)
if(h>=w.length)return H.j(w,h)
e=w[h]
h=g.a
d=Math.atan2(h[2],h[0])
h=Math.acos(h[1])
c=new Float32Array(2)
c[0]=0.5*(1+d*0.3183098861837907)
c[1]=h*0.3183098861837907
h=f.a
d=Math.atan2(h[2],h[0])
h=Math.acos(h[1])
b=new Float32Array(2)
b[0]=0.5*(1+d*0.3183098861837907)
b[1]=h*0.3183098861837907
h=e.a
d=Math.atan2(h[2],h[0])
h=Math.acos(h[1])
a=new Float32Array(2)
a[0]=0.5*(1+d*0.3183098861837907)
a[1]=h*0.3183098861837907
j.aQ("aNormal",H.i([g,f,e],x))
h=new T.l(new Float32Array(3))
h.C(g)
h.U(0,a2)
d=new T.l(new Float32Array(3))
d.C(f)
d.U(0,a2)
a0=new T.l(new Float32Array(3))
a0.C(e)
a0.U(0,a2)
a0=H.v(H.i([h,d,a0],x),"$isa",x,"$asa")
v=q.length
C.a.l(z,new G.ag(v,v+1,v+2))
j.aS(a0)
j.aP("aTexUV",H.i([new T.y(c),new T.y(b),new T.y(a)],i))}return j}}],["","",,D,{"^":"",h5:{"^":"b;a,b,c",
cr:function(a){var z,y
a=document
z=W.aW
y={func:1,ret:-1,args:[z]}
W.aA(a,"keydown",H.m(new D.h7(this),y),!1,z)
W.aA(a,"keyup",H.m(new D.h8(this),y),!1,z)},
p:{
h6:function(a){var z=P.D
z=new D.h5(P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z))
z.cr(a)
return z}}},h7:{"^":"o:11;a",
$1:function(a){var z
H.f(a,"$isaW")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},h8:{"^":"o:11;a",
$1:function(a){var z
H.f(a,"$isaW")
z=this.a
z.a.bJ(0,a.which)
z.c.l(0,a.which)}},hk:{"^":"b;a,b,c,d,e,f,r,x",
cs:function(a){var z,y
z=C.j.gdz(a)
y=H.q(z,0)
W.aA(z.a,z.b,H.m(new D.hm(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.j.gdw(a)
z=H.q(y,0)
W.aA(y.a,y.b,H.m(new D.hn(this),{func:1,ret:-1,args:[z]}),!1,z)
z=C.j.gdA(a)
y=H.q(z,0)
W.aA(z.a,z.b,H.m(new D.ho(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.j.gdB(a)
z=H.q(y,0)
W.aA(y.a,y.b,H.m(new D.hp(this),{func:1,ret:-1,args:[z]}),!1,z)},
p:{
hl:function(a){var z=P.D
z=new D.hk(P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z),0,0,0,0,0)
z.cs(a)
return z}}},hm:{"^":"o:3;a",
$1:function(a){var z,y
H.f(a,"$isa3")
a.preventDefault()
z=this.a
y=J.n(a)
z.r=H.P(y.gbI(a).a)
z.x=H.P(y.gbI(a).b)
z.d=a.movementX
z.e=a.movementY}},hn:{"^":"o:3;a",
$1:function(a){var z
H.f(a,"$isa3")
a.preventDefault()
P.aD("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},ho:{"^":"o:3;a",
$1:function(a){var z
H.f(a,"$isa3")
a.preventDefault()
z=this.a
z.a.bJ(0,a.button)
z.c.l(0,a.button)}},hp:{"^":"o:25;a",
$1:function(a){H.f(a,"$isb6")
a.preventDefault()
this.a.f=H.P(C.ab.gdk(a))}},hx:{"^":"dr;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bw:function(a){var z,y
z=C.f.dq(H.v(a,"$isk",[P.b],"$ask"),0,new A.kc(),P.D)
if(typeof z!=="number")return H.aC(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kc:{"^":"o:26;",
$2:function(a,b){var z,y
H.P(a)
z=J.al(b)
if(typeof a!=="number")return a.K()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aY:{"^":"b;a",
C:function(a){var z,y
z=H.f(a,"$isaY").a
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
k:function(a){return"[0] "+this.O(0).k(0)+"\n[1] "+this.O(1).k(0)+"\n[2] "+this.O(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.j(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aY){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gA:function(a){return A.bw(this.a)},
O:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.j(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.j(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.j(y,x)
z[2]=y[x]
return new T.l(z)},
df:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.C(a)
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
return m}},Z:{"^":"b;a",
C:function(a){var z,y
z=H.f(a,"$isZ").a
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
k:function(a){return"[0] "+this.O(0).k(0)+"\n[1] "+this.O(1).k(0)+"\n[2] "+this.O(2).k(0)+"\n[3] "+this.O(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.j(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.Z){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.bw(this.a)},
O:function(a){var z,y,x
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
return new T.aJ(z)},
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
z[15]=1},
bH:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},y:{"^":"b;a",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
C:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.bw(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.j(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gaf:function(a){return this.a[0]},
ga4:function(a){return this.a[1]}},l:{"^":"b;a",
q:function(a,b,c){var z=this.a
C.f.i(z,0,a)
C.f.i(z,1,b)
C.f.i(z,2,c)},
C:function(a){var z,y
z=H.f(a,"$isl").a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.l){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.bw(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.j(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gaz())},
gaz:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
E:function(a){var z,y,x
z=Math.sqrt(this.gaz())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
ax:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
by:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.l(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
l:function(a,b){var z,y
z=H.f(b,"$isl").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
U:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
gaf:function(a){return this.a[0]},
ga4:function(a){return this.a[1]},
gc0:function(a){return this.a[2]},
p:{
O:function(a,b,c){var z=new T.l(new Float32Array(3))
z.q(a,b,c)
return z}}},aJ:{"^":"b;a",
C:function(a){var z,y
z=H.f(a,"$isaJ").a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aJ){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.bw(this.a)},
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
gaf:function(a){return this.a[0]},
ga4:function(a){return this.a[1]},
gc0:function(a){return this.a[2]},
gdP:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
ee:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
z={}
y=document
x=C.r.c3(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.i1(0,0,x,w,y.createElement("div"),R.j3("blue","gray",90,30))
u.cz(x,"blue","gray")
t=H.f(C.r.dD(y,"#webgl-canvas"),"$isca")
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
q=new G.fp(t)
y=P.c
x=P.b
v=(t&&C.j).c2(t,"webgl2",P.df(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
q.a=v
if(v==null)H.W(P.d5('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+H.e(J.f3(v))
if($.e8>0)P.aD("I: "+p)
J.eN(v,0,0,0,1)
J.bC(v,2929)
v=new Float32Array(3)
p=D.h6(null)
o=D.hl(t)
n=new T.Z(new Float32Array(16))
n.P()
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
j=new D.hx(25,0,0,0,new T.l(v),-0.02,p,o,n,new T.l(m),new T.l(l),new T.l(k),new T.l(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.Z(new Float32Array(16))
v.P()
p=new T.Z(new Float32Array(16))
p.P()
i=new G.hz(j,50,1,0.1,1000,v,p,new T.Z(new Float32Array(16)),P.Y(y,x),"perspective",!1,!0)
i.aY()
v=H.i([],[A.cl])
h=new R.hO(t,i,null,q,v,17664,0,0,0,0,"main",!1,!0)
h.ct("main",q,null)
h.dG(null)
p=W.a1
W.aA(window,"resize",H.m(h.gdF(),{func:1,ret:-1,args:[p]}),!1,p)
p=G.dp("building",q,$.eE(),$.eD())
o=[G.b4]
n=H.i([i],o)
m=[A.ck]
l=H.i([],m)
g=new A.cl(p,n,l,"building",!1,!0)
C.a.l(v,g)
p=G.dp("sky",q,$.eC(),$.eB())
o=H.i([i],o)
n=H.i([],m)
C.a.l(v,new A.cl(p,o,n,"sky",!1,!0))
y=P.Y(y,x)
f=new G.hf(y,"mat",!1,!0)
y.i(0,"cDepthTest",!0)
y.i(0,"cDepthWrite",!0)
y.i(0,"cBlendEquation",$.ej())
y.i(0,"cStencilFunc",$.eo())
e=G.d9("icosahedron-3",p,B.fX(!0,1,3))
p=H.i([],m)
y=new Float32Array(9)
x=new T.Z(new Float32Array(16))
x.P()
v=new Float32Array(16)
o=new T.Z(v)
o.P()
l=new Float32Array(3)
k=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
if(typeof 100==="number"){b=100
a=100
a0=100}else{b=null
a=null
a0=null}a1=v[0]
if(typeof b!=="number")return H.aC(b)
v[0]=a1*b
v[1]=v[1]*b
v[2]=v[2]*b
v[3]=v[3]*b
a1=v[4]
if(typeof a!=="number")return H.aC(a)
v[4]=a1*a
v[5]=v[5]*a
v[6]=v[6]*a
v[7]=v[7]*a
a1=v[8]
if(typeof a0!=="number")return H.aC(a0)
v[8]=a1*a0
v[9]=v[9]*a0
v[10]=v[10]*a0
v[11]=v[11]*a0
v[12]=v[12]
v[13]=v[13]
v[14]=v[14]
v[15]=v[15]
C.a.l(n,new A.ck(f,e,p,new T.aY(y),x,o,new T.l(l),new T.l(k),new T.l(d),new T.l(c),e.a,!1,!0))
a2=new T.y(new Float32Array(2))
a2.v(0.01,0.01)
a3=B.fz(!0,0.99,0.01,0.99,0.01,1,2,1)
a4=a3.e.h(0,"aTexUV")
for(a5=8;a5<16;++a5){if(a5>=a4.length)return H.j(a4,a5)
a4[a5].C(a2)}a6=G.d9("house",g.d,a3)
for(y=g.f,x=a6.a,a7=-10;a7<10;a7+=4)for(a8=-10;a8<10;a8+=4){v=H.i([],m)
p=new Float32Array(9)
o=new T.Z(new Float32Array(16))
o.P()
n=new Float32Array(16)
l=new T.Z(n)
l.P()
k=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
a1=new Float32Array(3)
n[12]=a7
n[13]=0
n[14]=a8
C.a.l(y,new A.ck(f,a6,v,new T.aY(p),o,l,new T.l(k),new T.l(d),new T.l(c),new T.l(a1),x,!1,!0))}z.a=0
new Q.kp(z,j,h,u).$1(0)},
kp:{"^":"o:27;a,b,c,d",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cz(a9)
if(typeof a9!=="number")return a9.aN()
z=this.a
z.a=a9+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.w(0,0)||w.w(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aJ()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aJ()
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
if(typeof v!=="number")return v.aJ()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.t.dd(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
y.c7(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.d.a
v=y.dx.a
t[12]=t[12]+v[0]
t[13]=t[13]+v[1]
t[14]=t[14]+v[2]
r=new T.l(new Float32Array(3))
r.q(0,1,0)
u=y.aC()
q=new Float32Array(3)
p=new T.l(q)
p.C(u)
q[0]=q[0]-v[0]
q[1]=q[1]-v[1]
q[2]=q[2]-v[2]
p.E(0)
o=r.by(p)
o.E(0)
n=p.by(o)
n.E(0)
v=o.ax(u)
m=n.ax(u)
u=p.ax(u)
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
t[15]=1
t[14]=-u
t[13]=-m
t[12]=-v
t[11]=0
t[10]=q
t[9]=j
t[8]=l
t[7]=0
t[6]=e
t[5]=f
t[4]=g
t[3]=0
t[2]=h
t[1]=i
t[0]=k
k=y.f
i=k.a
i[0]=t[2]
i[1]=t[6]
i[2]=t[10]
y=-y.db
d=Math.sqrt(k.gaz())
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
y=t[0]
i=t[4]
k=t[8]
h=t[1]
g=t[5]
f=t[9]
e=t[2]
l=t[6]
j=t[10]
q=t[3]
v=t[7]
m=t[11]
t[0]=y*a0+i*a3+k*a6
t[1]=h*a0+g*a3+f*a6
t[2]=e*a0+l*a3+j*a6
t[3]=q*a0+v*a3+m*a6
t[4]=y*a1+i*a4+k*a7
t[5]=h*a1+g*a4+f*a7
t[6]=e*a1+l*a4+j*a7
t[7]=q*a1+v*a4+m*a7
t[8]=y*a2+i*a5+k*a8
t[9]=h*a2+g*a5+f*a8
t[10]=e*a2+l*a5+j*a8
t[11]=q*a2+v*a5+m*a8
w.c.a2(0)
w.b.a2(0)
x.e=0
x.d=0
x.f=0
x.c.a2(0)
x.b.a2(0)
this.c.cl()
C.ac.gd5(window).bL(this,-1)
this.d.cB(z.a)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dc.prototype
return J.db.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.h3.prototype
if(typeof a=="boolean")return J.h2.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.be=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.e9=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.k8=function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.k9=function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.ea=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.n=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.bv=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.aF=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).F(a,b)}
J.a9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k8(a).T(a,b)}
J.bi=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.km(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).h(a,b)}
J.cE=function(a,b){return J.ea(a).al(a,b)}
J.bA=function(a,b){return J.n(a).cU(a,b)}
J.eG=function(a,b,c){return J.n(a).cV(a,b,c)}
J.cF=function(a,b){return J.n(a).bi(a,b)}
J.eH=function(a,b,c,d){return J.n(a).d2(a,b,c,d)}
J.cG=function(a,b,c){return J.n(a).bk(a,b,c)}
J.eI=function(a,b){return J.n(a).d7(a,b)}
J.c1=function(a,b,c){return J.n(a).bl(a,b,c)}
J.eJ=function(a,b,c){return J.n(a).bn(a,b,c)}
J.cH=function(a,b,c){return J.n(a).bo(a,b,c)}
J.bB=function(a,b){return J.n(a).da(a,b)}
J.eK=function(a,b){return J.n(a).bp(a,b)}
J.eL=function(a,b,c){return J.n(a).bq(a,b,c)}
J.cI=function(a,b,c,d){return J.n(a).br(a,b,c,d)}
J.eM=function(a,b){return J.n(a).bs(a,b)}
J.eN=function(a,b,c,d,e){return J.n(a).bt(a,b,c,d,e)}
J.eO=function(a,b){return J.k9(a).M(a,b)}
J.c2=function(a,b,c){return J.be(a).de(a,b,c)}
J.c3=function(a){return J.n(a).bv(a)}
J.eP=function(a){return J.n(a).bw(a)}
J.eQ=function(a){return J.n(a).dj(a)}
J.eR=function(a,b){return J.n(a).bz(a,b)}
J.c4=function(a,b){return J.n(a).bA(a,b)}
J.eS=function(a,b,c,d){return J.n(a).bB(a,b,c,d)}
J.eT=function(a,b,c,d,e){return J.n(a).dl(a,b,c,d,e)}
J.eU=function(a,b,c,d,e){return J.n(a).bC(a,b,c,d,e)}
J.eV=function(a,b,c,d,e,f){return J.n(a).dm(a,b,c,d,e,f)}
J.eW=function(a,b){return J.e9(a).t(a,b)}
J.bC=function(a,b){return J.n(a).bD(a,b)}
J.eX=function(a,b){return J.n(a).bE(a,b)}
J.eY=function(a){return J.n(a).dn(a)}
J.eZ=function(a,b){return J.n(a).G(a,b)}
J.cJ=function(a){return J.bv(a).gac(a)}
J.f_=function(a){return J.n(a).gd6(a)}
J.al=function(a){return J.B(a).gA(a)}
J.bD=function(a){return J.e9(a).gB(a)}
J.aQ=function(a){return J.be(a).gj(a)}
J.f0=function(a){return J.n(a).gdC(a)}
J.f1=function(a){return J.n(a).gdK(a)}
J.f2=function(a){return J.bv(a).gdP(a)}
J.bE=function(a){return J.bv(a).gaf(a)}
J.c5=function(a){return J.bv(a).ga4(a)}
J.cK=function(a){return J.bv(a).gc0(a)}
J.c6=function(a,b){return J.n(a).Y(a,b)}
J.f3=function(a){return J.n(a).ag(a)}
J.f4=function(a,b){return J.n(a).aD(a,b)}
J.f5=function(a,b,c){return J.n(a).aE(a,b,c)}
J.cL=function(a,b,c){return J.n(a).aI(a,b,c)}
J.f6=function(a,b){return J.n(a).bG(a,b)}
J.cM=function(a){return J.n(a).dE(a)}
J.f7=function(a,b,c,d){return J.n(a).aM(a,b,c,d)}
J.f8=function(a){return J.ea(a).dL(a)}
J.bj=function(a){return J.B(a).k(a)}
J.f9=function(a,b,c,d){return J.n(a).dN(a,b,c,d)}
J.fa=function(a,b,c){return J.n(a).bO(a,b,c)}
J.fb=function(a,b,c){return J.n(a).bP(a,b,c)}
J.c7=function(a,b,c){return J.n(a).bQ(a,b,c)}
J.fc=function(a,b,c){return J.n(a).bR(a,b,c)}
J.cN=function(a,b,c){return J.n(a).bS(a,b,c)}
J.cO=function(a,b,c){return J.n(a).bT(a,b,c)}
J.cP=function(a,b,c){return J.n(a).bU(a,b,c)}
J.cQ=function(a,b,c,d){return J.n(a).bV(a,b,c,d)}
J.cR=function(a,b,c,d){return J.n(a).bW(a,b,c,d)}
J.fd=function(a,b){return J.n(a).bX(a,b)}
J.fe=function(a,b,c){return J.n(a).dO(a,b,c)}
J.ff=function(a,b,c,d,e,f,g){return J.n(a).bY(a,b,c,d,e,f,g)}
J.fg=function(a,b,c,d,e){return J.n(a).c_(a,b,c,d,e)}
I.aO=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bF.prototype
C.j=W.ca.prototype
C.x=W.fw.prototype
C.q=W.fE.prototype
C.I=W.fG.prototype
C.J=W.fV.prototype
C.r=W.fW.prototype
C.K=J.h.prototype
C.a=J.bn.prototype
C.y=J.db.prototype
C.d=J.dc.prototype
C.t=J.bo.prototype
C.i=J.bp.prototype
C.R=J.bq.prototype
C.f=H.hq.prototype
C.n=H.hs.prototype
C.V=W.ht.prototype
C.B=J.hA.prototype
C.C=W.hK.prototype
C.H=W.i7.prototype
C.w=J.b5.prototype
C.ab=W.b6.prototype
C.ac=W.ik.prototype
C.e=new P.jf()
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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

C.N=function(getTagFallback) {
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
C.O=function() {
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
C.P=function(hooks) {
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
C.Q=function(hooks) {
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
C.S=H.i(I.aO(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.c])
C.T=H.i(I.aO(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.c])
C.U=H.i(I.aO([]),[P.c])
C.u=H.i(I.aO(["bind","if","ref","repeat","syntax"]),[P.c])
C.v=H.i(I.aO(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.c])
C.W=new G.C("vec3","vertex btangents",0)
C.c=new G.C("vec3","",0)
C.X=new G.C("vec4","delta from light",0)
C.o=new G.C("","",0)
C.D=new G.C("vec3","vertex coordinates",0)
C.Y=new G.C("vec3","vertex binormals",0)
C.E=new G.C("vec4","for wireframe",0)
C.Z=new G.C("vec4","per vertex color",0)
C.a_=new G.C("float","for normal maps",0)
C.k=new G.C("mat4","",0)
C.a1=new G.C("mat4","",4)
C.a0=new G.C("mat4","",128)
C.b=new G.C("float","",0)
C.a2=new G.C("float","",4)
C.a3=new G.C("float","depth for shadowmaps",0)
C.h=new G.C("sampler2D","",0)
C.a4=new G.C("float","for bump maps",0)
C.a5=new G.C("vec2","texture uvs",0)
C.a6=new G.C("float","time since program start in sec",0)
C.l=new G.C("vec2","",0)
C.a7=new G.C("samplerCube","",0)
C.m=new G.C("vec4","",0)
C.a8=new G.C("vec3","vertex normals",0)
C.a9=new G.C("sampler2DShadow","",0)
C.F=new G.C("vec3","per vertex color",0)
C.G=new G.C("mat3","",0)
C.aa=new G.C("vec3","vertex tangents",0)
$.aa=0
$.aR=null
$.cU=null
$.cq=!1
$.ec=null
$.e3=null
$.eh=null
$.bW=null
$.bZ=null
$.cx=null
$.aL=null
$.b8=null
$.b9=null
$.cr=!1
$.I=C.e
$.af=null
$.cc=null
$.d4=null
$.d3=null
$.d0=null
$.d_=null
$.cZ=null
$.cY=null
$.e8=0
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
I.$lazy(y,x,w)}})(["kK","el",function(){return H.eb("_$dart_dartClosure")},"lp","cB",function(){return H.eb("_$dart_js")},"m9","ep",function(){return H.ac(H.bO({
toString:function(){return"$receiver$"}}))},"ma","eq",function(){return H.ac(H.bO({$method$:null,
toString:function(){return"$receiver$"}}))},"mb","er",function(){return H.ac(H.bO(null))},"mc","es",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mf","ev",function(){return H.ac(H.bO(void 0))},"mg","ew",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"me","eu",function(){return H.ac(H.dy(null))},"md","et",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"mi","ey",function(){return H.ac(H.dy(void 0))},"mh","ex",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ms","cC",function(){return P.io()},"mJ","bh",function(){return[]},"kH","ek",function(){return{}},"mA","eA",function(){return P.ci(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.c)},"mB","cD",function(){return P.Y(P.c,P.bl)},"lX","eo",function(){return new G.dx(1281,0,4294967295)},"kD","ej",function(){return new G.dw(1281,1281,1281)},"mH","a8",function(){return P.df(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.F,"aColorAlpha",C.Z,"aPosition",C.D,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.E,"aPointSize",C.b,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.m,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.F,"vTexUV",C.l,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.D,"vPositionFromLight",C.X,"vCenter",C.E,"vDepth",C.a3,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.c,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.c,G.C)},"mN","eC",function(){var z,y
z=G.bN("FixedVertexColorV")
y=[P.c]
z.aO(H.i(["aPosition"],y))
z.aR(H.i(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.a7(H.i(["vColor"],y))
z.aX(H.i(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],y),H.i(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"mM","eB",function(){var z,y
z=G.bN("FixedVertexColorF")
y=[P.c]
z.a7(H.i(["vColor"],y))
z.cw(H.i(["oFragColor = vec4( vColor, 1.0 );"],y))
return z},"mx","ez",function(){return H.i([T.O(0,0,1),T.O(0,0,-1),T.O(0,1,0),T.O(0,-1,0),T.O(1,0,0),T.O(-1,0,0)],[T.l])},"lf","em",function(){return H.i([G.K(0,11,5),G.K(0,5,1),G.K(0,1,7),G.K(0,7,10),G.K(0,10,11),G.K(1,5,9),G.K(5,11,4),G.K(11,10,2),G.K(10,7,6),G.K(7,1,8),G.K(3,9,4),G.K(3,4,2),G.K(3,2,6),G.K(3,6,8),G.K(3,8,9),G.K(4,9,5),G.K(2,4,11),G.K(6,2,10),G.K(8,6,7),G.K(9,8,1)],[G.ag])},"mR","eF",function(){return(1+P.ku(5))/2},"lg","en",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eF()
y=T.O(-1,z,0)
y.E(0)
x=T.O(1,z,0)
x.E(0)
if(typeof z!=="number")return z.dR()
w=T.O(-1,-z,0)
w.E(0)
v=T.O(1,-z,0)
v.E(0)
u=T.O(0,-1,z)
u.E(0)
t=T.O(0,1,z)
t.E(0)
s=T.O(0,-1,-z)
s.E(0)
r=T.O(0,1,-z)
r.E(0)
q=T.O(z,0,-1)
q.E(0)
p=T.O(z,0,1)
p.E(0)
o=T.O(-z,0,-1)
o.E(0)
z=T.O(-z,0,1)
z.E(0)
return H.i([y,x,w,v,u,t,s,r,q,p,o,z],[T.l])},"mQ","eE",function(){var z,y
z=G.bN("SkyScraperV")
y=[P.c]
z.aO(H.i(["aPosition","aTexUV"],y))
z.a7(H.i(["vPosition","vTexUV"],y))
z.aR(H.i(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aW(H.i(["void main() {     \n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n    vPosition = aPosition;\n    vTexUV = aTexUV;\n}\n"],y))
return z},"mP","eD",function(){var z,y
z=G.bN("SkyScraperF")
y=[P.c]
z.a7(H.i(["vPosition","vTexUV"],y))
z.aW(H.i(["void main() {      \n      // the step finds the windows\n      // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts\n      // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the\n      // artifacts on the right side\n      float s1 = step(mod(vTexUV.x*11.+1., 2.), 1.);\n      float s2 = step(mod(vTexUV.y*21.+1., 2.), 1.);\n      float s3 = step( s1+s2, 1.1);\n\n      oFragColor = vec4( 1.-s3, 1.-s3, 1.-s3, 1. );\n\n      //gl_FragColor = vec4( mod(vPosition.x*10.0,2.0) ,\n      //                       mod(vPosition.y*20.0,2.0),\n      //                       mod(vPosition.z*10.0,2.0), 1. );\n}\n"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.c,,]},{func:1,ret:P.G,args:[W.a3]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.c,args:[P.D]},{func:1,ret:P.R,args:[W.ab]},{func:1,ret:P.R,args:[P.c]},{func:1,ret:P.G,args:[W.aW]},{func:1,ret:P.R,args:[W.S,P.c,P.c,W.bs]},{func:1,args:[,P.c]},{func:1,args:[P.c]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a4]},{func:1,ret:[P.ad,,],args:[,]},{func:1,ret:P.R,args:[W.t]},{func:1,ret:-1,args:[P.c,P.c]},{func:1,ret:P.G,args:[P.E]},{func:1,args:[W.a1]},{func:1,ret:P.c,args:[P.c]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:P.G,args:[W.b6]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.kw(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.ee,[])
else Q.ee([])})})()
//# sourceMappingURL=skyscraper.dart.js.map
