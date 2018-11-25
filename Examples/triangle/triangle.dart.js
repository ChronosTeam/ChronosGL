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
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bc=function(){}
var dart=[["","",,H,{"^":"",ln:{"^":"b;a"}}],["","",,J,{"^":"",
cy:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bX:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cx==null){H.kh()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dD("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cB()]
if(v!=null)return v
v=H.km(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cB(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
E:function(a,b){return a===b},
gA:function(a){return H.b1(a)},
k:["ca",function(a){return"Instance of '"+H.b2(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h1:{"^":"h;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isQ:1},
h2:{"^":"h;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isG:1},
cg:{"^":"h;",
gA:function(a){return 0},
k:["cc",function(a){return String(a)}]},
hz:{"^":"cg;"},
b5:{"^":"cg;"},
bp:{"^":"cg;",
k:function(a){var z=a[$.eq()]
if(z==null)return this.cc(a)
return"JavaScript function for "+H.d(J.bi(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbk:1},
bm:{"^":"h;$ti",
l:function(a,b){H.A(b,H.r(a,0))
if(!!a.fixed$length)H.W(P.z("add"))
a.push(b)},
K:function(a,b){var z
H.y(b,"$isj",[H.r(a,0)],"$asj")
if(!!a.fixed$length)H.W(P.z("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a2:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.d(a[y]))
return z.join(b)},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gds:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.da())},
bd:function(a,b){var z,y
H.n(b,{func:1,ret:P.Q,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aG(a))}return!1},
c5:function(a,b){if(!!a.immutable$list)H.W(P.z("sort"))
H.hY(a,J.jT(),H.r(a,0))},
aK:function(a){return this.c5(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aE(a[z],b))return!0
return!1},
k:function(a){return P.ce(a,"[","]")},
gB:function(a){return new J.fj(a,a.length,0,[H.r(a,0)])},
gA:function(a){return H.b1(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bb(a,b))
return a[b]},
i:function(a,b,c){H.A(c,H.r(a,0))
if(!!a.immutable$list)H.W(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bb(a,b))
a[b]=c},
$isw:1,
$asw:I.bc,
$isj:1,
$isa:1,
t:{
h0:function(a,b){return J.cf(H.m(a,[b]))},
cf:function(a){H.bw(a)
a.fixed$length=Array
return a},
ll:[function(a,b){return J.eO(H.eh(a,"$isV"),H.eh(b,"$isV"))},"$2","jT",8,0,28]}},
lm:{"^":"bm;$ti"},
fj:{"^":"b;a,b,c,0d,$ti",
saU:function(a){this.d=H.A(a,H.r(this,0))},
gD:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.K(z))
x=this.c
if(x>=y){this.saU(null)
return!1}this.saU(z[x]);++this.c
return!0},
$isaV:1},
bn:{"^":"h;",
M:function(a,b){var z
H.cz(b)
if(typeof b!=="number")throw H.c(H.b9(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaa(b)
if(this.gaa(a)===z)return 0
if(this.gaa(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaa:function(a){return a===0?1/a<0:a<0},
bL:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.z(""+a+".toInt()"))},
d9:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.z(""+a+".ceil()"))},
da:function(a,b,c){if(this.M(b,c)>0)throw H.c(H.b9(b))
if(this.M(a,b)<0)return b
if(this.M(a,c)>0)return c
return a},
dE:function(a,b){var z
if(b>20)throw H.c(P.bK(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaa(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
ce:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.ba(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.ba(a,b)},
ba:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.z("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
b8:function(a,b){var z
if(a>0)z=this.cY(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cY:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.c(H.b9(b))
return a>b},
$isV:1,
$asV:function(){return[P.E]},
$isag:1,
$isE:1},
dc:{"^":"bn;",$isD:1},
db:{"^":"bn;"},
bo:{"^":"h;",
ak:function(a,b){if(b>=a.length)throw H.c(H.bb(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.v(b)
if(typeof b!=="string")throw H.c(P.cR(b,null,null))
return a+b},
c7:function(a,b,c){var z
if(c>a.length)throw H.c(P.bK(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c6:function(a,b){return this.c7(a,b,0)},
c9:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bL(b,null,null))
if(b>c)throw H.c(P.bL(b,null,null))
if(c>a.length)throw H.c(P.bL(c,null,null))
return a.substring(b,c)},
c8:function(a,b){return this.c9(a,b,null)},
dD:function(a){return a.toLowerCase()},
dc:function(a,b,c){if(c>a.length)throw H.c(P.bK(c,0,a.length,null,null))
return H.kt(a,b,c)},
M:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.c(H.b9(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bb(a,b))
return a[b]},
$isw:1,
$asw:I.bc,
$isV:1,
$asV:function(){return[P.e]},
$ishy:1,
$ise:1}}],["","",,H,{"^":"",
da:function(){return new P.cm("No element")},
h_:function(){return new P.cm("Too many elements")},
hY:function(a,b,c){H.y(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.D,args:[c,c]})
H.bq(a,0,J.aQ(a)-1,b,c)},
bq:function(a,b,c,d,e){H.y(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.hX(a,b,c,d,e)
else H.hW(a,b,c,d,e)},
hX:function(a,b,c,d,e){var z,y,x,w,v
H.y(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.bd(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a7(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hW:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.y(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.d.V(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.V(b+a0,2)
v=w-z
u=w+z
t=J.bd(a)
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
if(J.aE(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a3()
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
if(typeof e!=="number")return e.a3()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.T()
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
H.bq(a,b,m-2,a1,a2)
H.bq(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aE(a1.$2(t.h(a,m),r),0);)++m
for(;J.aE(a1.$2(t.h(a,l),p),0);)--l
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
break}}H.bq(a,m,l,a1,a2)}else H.bq(a,m,l,a1,a2)},
d1:{"^":"j;"},
bJ:{"^":"d1;$ti",
gB:function(a){return new H.dg(this,this.gj(this),0,[H.cw(this,"bJ",0)])},
aA:function(a,b){return this.cb(0,H.n(b,{func:1,ret:P.Q,args:[H.cw(this,"bJ",0)]}))}},
dg:{"^":"b;a,b,c,0d,$ti",
saV:function(a){this.d=H.A(a,H.r(this,0))},
gD:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bd(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aG(z))
w=this.c
if(w>=x){this.saV(null)
return!1}this.saV(y.u(z,w));++this.c
return!0},
$isaV:1},
hd:{"^":"bJ;a,b,$ti",
gj:function(a){return J.aQ(this.a)},
u:function(a,b){return this.b.$1(J.eW(this.a,b))},
$asbJ:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dE:{"^":"j;a,b,$ti",
gB:function(a){return new H.ii(J.bC(this.a),this.b,this.$ti)}},
ii:{"^":"aV;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gD(z)))return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bI:{"^":"b;$ti"}}],["","",,H,{"^":"",
aD:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k9:function(a){return init.types[H.N(a)]},
kk:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isx},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bi(a)
if(typeof z!=="string")throw H.c(H.b9(a))
return z},
b1:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b2:function(a){return H.hA(a)+H.bQ(H.ah(a),0,null)},
hA:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb5){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aD(w.length>1&&C.h.ak(w,0)===36?C.h.c8(w,1):w)},
aH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hH:function(a){var z=H.aH(a).getFullYear()+0
return z},
hF:function(a){var z=H.aH(a).getMonth()+1
return z},
hB:function(a){var z=H.aH(a).getDate()+0
return z},
hC:function(a){var z=H.aH(a).getHours()+0
return z},
hE:function(a){var z=H.aH(a).getMinutes()+0
return z},
hG:function(a){var z=H.aH(a).getSeconds()+0
return z},
hD:function(a){var z=H.aH(a).getMilliseconds()+0
return z},
aB:function(a){throw H.c(H.b9(a))},
k:function(a,b){if(a==null)J.aQ(a)
throw H.c(H.bb(a,b))},
bb:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.N(J.aQ(a))
if(!(b<0)){if(typeof z!=="number")return H.aB(z)
y=b>=z}else y=!0
if(y)return P.F(b,a,"index",null,z)
return P.bL(b,"index",null)},
b9:function(a){return new P.aF(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dn()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ek})
z.name=""}else z.toString=H.ek
return z},
ek:function(){return J.bi(this.dartException)},
W:function(a){throw H.c(a)},
K:function(a){throw H.c(P.aG(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.b8(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ch(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dm(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.es()
u=$.et()
t=$.eu()
s=$.ev()
r=$.ey()
q=$.ez()
p=$.ex()
$.ew()
o=$.eB()
n=$.eA()
m=v.L(y)
if(m!=null)return z.$1(H.ch(H.v(y),m))
else{m=u.L(y)
if(m!=null){m.method="call"
return z.$1(H.ch(H.v(y),m))}else{m=t.L(y)
if(m==null){m=s.L(y)
if(m==null){m=r.L(y)
if(m==null){m=q.L(y)
if(m==null){m=p.L(y)
if(m==null){m=s.L(y)
if(m==null){m=o.L(y)
if(m==null){m=n.L(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dm(H.v(y),m))}}return z.$1(new H.ie(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.du()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.du()
return a},
bf:function(a){var z
if(a==null)return new H.dU(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dU(a)},
k5:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kj:function(a,b,c,d,e,f){H.i(a,"$isbk")
switch(H.N(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d5("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var z
H.N(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kj)
a.$identity=z
return z},
fu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hL(z).r}else x=d
w=e?Object.create(new H.hZ().constructor.prototype):Object.create(new H.c7(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a8
if(typeof u!=="number")return u.J()
$.a8=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cW(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.k9,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cU:H.c8
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cW(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fr:function(a,b,c,d){var z=H.c8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cW:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ft(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fr(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.J()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aR
if(v==null){v=H.bF("self")
$.aR=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.J()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aR
if(v==null){v=H.bF("self")
$.aR=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fs:function(a,b,c,d){var z,y
z=H.c8
y=H.cU
switch(b?-1:a){case 0:throw H.c(H.hR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ft:function(a,b){var z,y,x,w,v,u,t,s
z=$.aR
if(z==null){z=H.bF("self")
$.aR=z}y=$.cT
if(y==null){y=H.bF("receiver")
$.cT=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fs(w,!u,x,b)
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
cu:function(a,b,c,d,e,f,g){return H.fu(a,b,H.N(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a3(a,"String"))},
e8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"double"))},
cz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"num"))},
bT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a3(a,"bool"))},
N:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a3(a,"int"))},
cA:function(a,b){throw H.c(H.a3(a,H.aD(H.v(b).substring(3))))},
kr:function(a,b){throw H.c(H.cV(a,H.aD(H.v(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cA(a,b)},
ai:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kr(a,b)},
eh:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cA(a,b)},
bw:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a3(a,"List<dynamic>"))},
kl:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cA(a,b)},
cv:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.N(z)]
else return a.$S()}return},
bu:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cv(J.B(a))
if(z==null)return!1
return H.e_(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cq)return a
$.cq=!0
try{if(H.bu(a,b))return a
z=H.bx(b)
y=H.a3(a,z)
throw H.c(y)}finally{$.cq=!1}},
bV:function(a,b){if(a!=null&&!H.ct(a,b))H.W(H.a3(a,H.bx(b)))
return a},
e3:function(a){var z,y
z=J.B(a)
if(!!z.$iso){y=H.cv(z)
if(y!=null)return H.bx(y)
return"Closure"}return H.b2(a)},
ku:function(a){throw H.c(new P.fB(H.v(a)))},
ed:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
ah:function(a){if(a==null)return
return a.$ti},
mL:function(a,b,c){return H.aP(a["$as"+H.d(c)],H.ah(b))},
be:function(a,b,c,d){var z
H.v(c)
H.N(d)
z=H.aP(a["$as"+H.d(c)],H.ah(b))
return z==null?null:z[d]},
cw:function(a,b,c){var z
H.v(b)
H.N(c)
z=H.aP(a["$as"+H.d(b)],H.ah(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.N(b)
z=H.ah(a)
return z==null?null:z[b]},
bx:function(a){return H.aA(a,null)},
aA:function(a,b){var z,y
H.y(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aD(a[0].builtin$cls)+H.bQ(a,1,b)
if(typeof a=="function")return H.aD(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.N(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.d(b[y])}if('func' in a)return H.jS(a,b)
if('futureOr' in a)return"FutureOr<"+H.aA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.y(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.m([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.h.J(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aA(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aA(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aA(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aA(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k4(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aA(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bQ:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.co("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aA(u,c)}return"<"+z.k(0)+">"},
k8:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$iso){y=H.cv(z)
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
aN:function(a,b,c,d){var z,y
H.v(b)
H.bw(c)
H.v(d)
if(a==null)return!1
z=H.ah(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e6(H.aP(y[d],z),null,c,null)},
by:function(a,b,c,d){H.v(b)
H.bw(c)
H.v(d)
if(a==null)return a
if(H.aN(a,b,c,d))return a
throw H.c(H.cV(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(3))+H.bQ(c,0,null),init.mangledGlobalNames)))},
y:function(a,b,c,d){H.v(b)
H.bw(c)
H.v(d)
if(a==null)return a
if(H.aN(a,b,c,d))return a
throw H.c(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(3))+H.bQ(c,0,null),init.mangledGlobalNames)))},
e6:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.Z(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b,c[y],d))return!1
return!0},
mJ:function(a,b,c){return a.apply(b,H.aP(J.B(b)["$as"+H.d(c)],H.ah(b)))},
ef:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.ef(z)}return!1},
ct:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.ef(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ct(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bu(a,b)}z=J.B(a).constructor
y=H.ah(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.Z(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.ct(a,b))throw H.c(H.a3(a,H.bx(b)))
return a},
Z:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.Z(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.e_(a,b,c,d)
if('func' in a)return c.builtin$cls==="bk"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.Z("type" in a?a.type:null,b,x,d)
else if(H.Z(a,b,x,d))return!0
else{if(!('$is'+"aU" in y.prototype))return!1
w=y.prototype["$as"+"aU"]
v=H.aP(w,z?a.slice(1):null)
return H.Z(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e6(H.aP(r,z),b,u,d)},
e_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kq(m,b,l,d)},
kq:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.Z(c[w],d,a[w],b))return!1}return!0},
mK:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
km:function(a){var z,y,x,w,v,u
z=H.v($.ee.$1(a))
y=$.bU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bY[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.e5.$2(a,z))
if(z!=null){y=$.bU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bY[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bZ(x)
$.bU[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bY[z]=x
return x}if(v==="-"){u=H.bZ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ei(a,x)
if(v==="*")throw H.c(P.dD(z))
if(init.leafTags[z]===true){u=H.bZ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ei(a,x)},
ei:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cy(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bZ:function(a){return J.cy(a,!1,null,!!a.$isx)},
kp:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bZ(z)
else return J.cy(z,c,null,null)},
kh:function(){if(!0===$.cx)return
$.cx=!0
H.ki()},
ki:function(){var z,y,x,w,v,u,t,s
$.bU=Object.create(null)
$.bY=Object.create(null)
H.kd()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ej.$1(v)
if(u!=null){t=H.kp(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kd:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.aM(C.L,H.aM(C.Q,H.aM(C.y,H.aM(C.y,H.aM(C.P,H.aM(C.M,H.aM(C.N(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ee=new H.ke(v)
$.e5=new H.kf(u)
$.ej=new H.kg(t)},
aM:function(a,b){return a(b)||b},
kt:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hK:{"^":"b;a,b,c,d,e,f,r,0x",t:{
hL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cf(z)
y=z[0]
x=z[1]
return new H.hK(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i9:{"^":"b;a,b,c,d,e,f",
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
t:{
aa:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.m([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dA:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hv:{"^":"P;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
t:{
dm:function(a,b){return new H.hv(a,b==null?null:b.method)}}},
h3:{"^":"P;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
t:{
ch:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h3(a,y,z?null:b.receiver)}}},
ie:{"^":"P;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kv:{"^":"o:5;a",
$1:function(a){if(!!J.B(a).$isP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dU:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa2:1},
o:{"^":"b;",
k:function(a){return"Closure '"+H.b2(this).trim()+"'"},
gc_:function(){return this},
$isbk:1,
gc_:function(){return this}},
dw:{"^":"o;"},
hZ:{"^":"dw;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aD(z)+"'"}},
c7:{"^":"dw;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c7))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b1(this.a)
else y=typeof z!=="object"?J.aj(z):H.b1(z)
return(y^H.b1(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.b2(z)+"'")},
t:{
c8:function(a){return a.a},
cU:function(a){return a.c},
bF:function(a){var z,y,x,w,v
z=new H.c7("self","target","receiver","name")
y=J.cf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ia:{"^":"P;a",
k:function(a){return this.a},
t:{
a3:function(a,b){return new H.ia("TypeError: "+H.d(P.bH(a))+": type '"+H.e3(a)+"' is not a subtype of type '"+b+"'")}}},
fp:{"^":"P;a",
k:function(a){return this.a},
t:{
cV:function(a,b){return new H.fp("CastError: "+H.d(P.bH(a))+": type '"+H.e3(a)+"' is not a subtype of type '"+b+"'")}}},
hQ:{"^":"P;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
t:{
hR:function(a){return new H.hQ(a)}}},
dB:{"^":"b;a,0b,0c,0d",
ga8:function(){var z=this.b
if(z==null){z=H.bx(this.a)
this.b=z}return z},
k:function(a){return this.ga8()},
gA:function(a){var z=this.d
if(z==null){z=C.h.gA(this.ga8())
this.d=z}return z},
E:function(a,b){if(b==null)return!1
return b instanceof H.dB&&this.ga8()===b.ga8()}},
dd:{"^":"dh;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gH:function(a){return new H.an(this,[H.r(this,0)])},
a9:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cI(z,b)}else{y=this.dq(b)
return y}},
dq:function(a){var z=this.d
if(z==null)return!1
return this.ax(this.ar(z,J.aj(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a6(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a6(w,b)
x=y==null?null:y.b
return x}else return this.dr(b)},
dr:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ar(z,J.aj(a)&0x3ffffff)
x=this.ax(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.as()
this.b=z}this.aW(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.as()
this.c=y}this.aW(y,b,c)}else{x=this.d
if(x==null){x=this.as()
this.d=x}w=J.aj(b)&0x3ffffff
v=this.ar(x,w)
if(v==null)this.av(x,w,[this.ai(b,c)])
else{u=this.ax(v,b)
if(u>=0)v[u].b=c
else v.push(this.ai(b,c))}}},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aG(this))
z=z.c}},
aW:function(a,b,c){var z
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
z=this.a6(a,b)
if(z==null)this.av(a,b,this.ai(b,c))
else z.b=c},
b5:function(){this.r=this.r+1&67108863},
ai:function(a,b){var z,y
z=new H.h8(H.A(a,H.r(this,0)),H.A(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b5()
return z},
ax:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aE(a[y].a,b))return y
return-1},
k:function(a){return P.di(this)},
a6:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
av:function(a,b,c){a[b]=c},
cJ:function(a,b){delete a[b]},
cI:function(a,b){return this.a6(a,b)!=null},
as:function(){var z=Object.create(null)
this.av(z,"<non-identifier-key>",z)
this.cJ(z,"<non-identifier-key>")
return z},
$isde:1},
h8:{"^":"b;a,b,0c,0d"},
an:{"^":"d1;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.h9(z,z.r,this.$ti)
y.c=z.e
return y}},
h9:{"^":"b;a,b,0c,0d,$ti",
saX:function(a){this.d=H.A(a,H.r(this,0))},
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.saX(null)
return!1}else{this.saX(z.a)
this.c=this.c.c
return!0}}},
$isaV:1},
ke:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
kf:{"^":"o:13;a",
$2:function(a,b){return this.a(a,b)}},
kg:{"^":"o:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
k4:function(a){return J.h0(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bP:function(a){var z,y
if(!!J.B(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bb(b,a))},
hq:{"^":"h;",$isib:1,"%":"DataView;ArrayBufferView;ck|dO|dP|dj|dQ|dR|aq"},
ck:{"^":"hq;",
gj:function(a){return a.length},
$isw:1,
$asw:I.bc,
$isx:1,
$asx:I.bc},
dj:{"^":"dP;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.e8(c)
H.ac(b,a,a.length)
a[b]=c},
$asbI:function(){return[P.ag]},
$asp:function(){return[P.ag]},
$isj:1,
$asj:function(){return[P.ag]},
$isa:1,
$asa:function(){return[P.ag]},
"%":"Float64Array"},
aq:{"^":"dR;",
i:function(a,b,c){H.N(c)
H.ac(b,a,a.length)
a[b]=c},
$asbI:function(){return[P.D]},
$asp:function(){return[P.D]},
$isj:1,
$asj:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hp:{"^":"dj;",$isae:1,"%":"Float32Array"},
lv:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lw:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$isfY:1,
"%":"Int32Array"},
lx:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ly:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hr:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ismi:1,
"%":"Uint32Array"},
lz:{"^":"aq;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lA:{"^":"aq;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dO:{"^":"ck+p;"},
dP:{"^":"dO+bI;"},
dQ:{"^":"ck+p;"},
dR:{"^":"dQ+bI;"}}],["","",,P,{"^":"",
im:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k_()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ba(new P.ip(z),1)).observe(y,{childList:true})
return new P.io(z,y,x)}else if(self.setImmediate!=null)return P.k0()
return P.k1()},
ms:[function(a){self.scheduleImmediate(H.ba(new P.iq(H.n(a,{func:1,ret:-1})),0))},"$1","k_",4,0,4],
mt:[function(a){self.setImmediate(H.ba(new P.ir(H.n(a,{func:1,ret:-1})),0))},"$1","k0",4,0,4],
mu:[function(a){H.n(a,{func:1,ret:-1})
P.jA(0,a)},"$1","k1",4,0,4],
jW:function(a,b){if(H.bu(a,{func:1,args:[P.b,P.a2]}))return H.n(a,{func:1,ret:null,args:[P.b,P.a2]})
if(H.bu(a,{func:1,args:[P.b]}))return H.n(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cR(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jV:function(){var z,y
for(;z=$.aL,z!=null;){$.b8=null
y=z.b
$.aL=y
if(y==null)$.b7=null
z.a.$0()}},
mH:[function(){$.cr=!0
try{P.jV()}finally{$.b8=null
$.cr=!1
if($.aL!=null)$.cC().$1(P.e7())}},"$0","e7",0,0,1],
e2:function(a){var z=new P.dG(H.n(a,{func:1,ret:-1}))
if($.aL==null){$.b7=z
$.aL=z
if(!$.cr)$.cC().$1(P.e7())}else{$.b7.b=z
$.b7=z}},
jZ:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.aL
if(z==null){P.e2(a)
$.b8=$.b7
return}y=new P.dG(a)
x=$.b8
if(x==null){y.b=z
$.b8=y
$.aL=y}else{y.b=x.b
x.b=y
$.b8=y
if(y.b==null)$.b7=y}},
ks:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.I
if(C.e===y){P.bS(null,null,C.e,a)
return}y.toString
P.bS(null,null,y,H.n(y.bg(a),z))},
bR:function(a,b,c,d,e){var z={}
z.a=d
P.jZ(new P.jX(z,e))},
e0:function(a,b,c,d,e){var z,y
H.n(d,{func:1,ret:e})
y=$.I
if(y===c)return d.$0()
$.I=c
z=y
try{y=d.$0()
return y}finally{$.I=z}},
e1:function(a,b,c,d,e,f,g){var z,y
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.I
if(y===c)return d.$1(e)
$.I=c
z=y
try{y=d.$1(e)
return y}finally{$.I=z}},
jY:function(a,b,c,d,e,f,g,h,i){var z,y
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.I
if(y===c)return d.$2(e,f)
$.I=c
z=y
try{y=d.$2(e,f)
return y}finally{$.I=z}},
bS:function(a,b,c,d){var z
H.n(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bg(d):c.d6(d,-1)
P.e2(d)},
ip:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
io:{"^":"o:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iq:{"^":"o:0;a",
$0:function(){this.a.$0()}},
ir:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jz:{"^":"b;a,0b,c",
cE:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ba(new P.jB(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
t:{
jA:function(a,b){var z=new P.jz(!0,0)
z.cE(a,b)
return z}}},
jB:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iu:{"^":"b;$ti"},
ju:{"^":"iu;a,$ti"},
aK:{"^":"b;0a,b,c,d,e,$ti",
dt:function(a){if(this.c!==6)return!0
return this.b.b.az(H.n(this.d,{func:1,ret:P.Q,args:[P.b]}),a.a,P.Q,P.b)},
dn:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bu(z,{func:1,args:[P.b,P.a2]}))return H.bV(w.dz(z,a.a,a.b,null,y,P.a2),x)
else return H.bV(w.az(H.n(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ab:{"^":"b;b9:a<,b,0cV:c<,$ti",
bK:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.I
if(y!==C.e){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jW(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ab(0,$.I,[c])
w=b==null?1:3
this.aZ(new P.aK(x,w,a,b,[z,c]))
return x},
bJ:function(a,b){return this.bK(a,null,b)},
aZ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaK")
this.c=a}else{if(z===2){y=H.i(this.c,"$isab")
z=y.a
if(z<4){y.aZ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bS(null,null,z,H.n(new P.iJ(this,a),{func:1,ret:-1}))}},
b6:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaK")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isab")
y=u.a
if(y<4){u.b6(a)
return}this.a=y
this.c=u.c}z.a=this.a7(a)
y=this.b
y.toString
P.bS(null,null,y,H.n(new P.iO(z,this),{func:1,ret:-1}))}},
au:function(){var z=H.i(this.c,"$isaK")
this.c=null
return this.a7(z)},
a7:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
am:function(a){var z,y,x
z=H.r(this,0)
H.bV(a,{futureOr:1,type:z})
y=this.$ti
if(H.aN(a,"$isaU",y,"$asaU"))if(H.aN(a,"$isab",y,null))P.dJ(a,this)
else P.iK(a,this)
else{x=this.au()
H.A(a,z)
this.a=4
this.c=a
P.b6(this,x)}},
b0:function(a,b){var z
H.i(b,"$isa2")
z=this.au()
this.a=8
this.c=new P.X(a,b)
P.b6(this,z)},
$isaU:1,
t:{
iK:function(a,b){var z,y,x
b.a=1
try{a.bK(new P.iL(b),new P.iM(b),null)}catch(x){z=H.a5(x)
y=H.bf(x)
P.ks(new P.iN(b,z,y))}},
dJ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isab")
if(z>=4){y=b.au()
b.a=a.a
b.c=a.c
P.b6(b,y)}else{y=H.i(b.c,"$isaK")
b.a=2
b.c=a
a.b6(y)}},
b6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isX")
y=y.b
u=v.a
t=v.b
y.toString
P.bR(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.i(r,"$isX")
y=y.b
u=r.a
t=r.b
y.toString
P.bR(null,null,y,u,t)
return}o=$.I
if(o!=q)$.I=q
else o=null
y=b.c
if(y===8)new P.iR(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iQ(x,b,r).$0()}else if((y&2)!==0)new P.iP(z,x,b).$0()
if(o!=null)$.I=o
y=x.b
if(!!J.B(y).$isaU){if(y.a>=4){n=H.i(t.c,"$isaK")
t.c=null
b=t.a7(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dJ(y,t)
return}}m=b.b
n=H.i(m.c,"$isaK")
m.c=null
b=m.a7(n)
y=x.a
u=x.b
if(!y){H.A(u,H.r(m,0))
m.a=4
m.c=u}else{H.i(u,"$isX")
m.a=8
m.c=u}z.a=m
y=m}}}},
iJ:{"^":"o:0;a,b",
$0:function(){P.b6(this.a,this.b)}},
iO:{"^":"o:0;a,b",
$0:function(){P.b6(this.b,this.a.a)}},
iL:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.am(a)}},
iM:{"^":"o:16;a",
$2:function(a,b){H.i(b,"$isa2")
this.a.b0(a,b)},
$1:function(a){return this.$2(a,null)}},
iN:{"^":"o:0;a,b,c",
$0:function(){this.a.b0(this.b,this.c)}},
iR:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bI(H.n(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.bf(v)
if(this.d){w=H.i(this.a.a.c,"$isX").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isX")
else u.b=new P.X(y,x)
u.a=!0
return}if(!!J.B(z).$isaU){if(z instanceof P.ab&&z.gb9()>=4){if(z.gb9()===8){w=this.b
w.b=H.i(z.gcV(),"$isX")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bJ(new P.iS(t),null)
w.a=!1}}},
iS:{"^":"o:17;a",
$1:function(a){return this.a}},
iQ:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.A(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.az(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.bf(t)
x=this.a
x.b=new P.X(z,y)
x.a=!0}}},
iP:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isX")
w=this.c
if(w.dt(z)&&w.e!=null){v=this.b
v.b=w.dn(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.bf(u)
w=H.i(this.a.a.c,"$isX")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.X(y,x)
s.a=!0}}},
dG:{"^":"b;a,0b"},
i2:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.ab(0,$.I,[P.D])
z.a=0
x=H.r(this,0)
w=H.n(new P.i4(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.i5(z,y),{func:1,ret:-1})
W.az(this.a,this.b,w,!1,x)
return y}},
i4:{"^":"o;a,b",
$1:function(a){H.A(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.r(this.b,0)]}}},
i5:{"^":"o:0;a,b",
$0:function(){this.b.am(this.a.a)}},
i3:{"^":"b;"},
X:{"^":"b;a,b",
k:function(a){return H.d(this.a)},
$isP:1},
jH:{"^":"b;",$ismq:1},
jX:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dn()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jd:{"^":"jH;",
dA:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.e===$.I){a.$0()
return}P.e0(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.bf(x)
P.bR(null,null,this,z,H.i(y,"$isa2"))}},
dB:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.I){a.$1(b)
return}P.e1(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.bf(x)
P.bR(null,null,this,z,H.i(y,"$isa2"))}},
d6:function(a,b){return new P.jf(this,H.n(a,{func:1,ret:b}),b)},
bg:function(a){return new P.je(this,H.n(a,{func:1,ret:-1}))},
d7:function(a,b){return new P.jg(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bI:function(a,b){H.n(a,{func:1,ret:b})
if($.I===C.e)return a.$0()
return P.e0(null,null,this,a,b)},
az:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.I===C.e)return a.$1(b)
return P.e1(null,null,this,a,b,c,d)},
dz:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.I===C.e)return a.$2(b,c)
return P.jY(null,null,this,a,b,c,d,e,f)}},
jf:{"^":"o;a,b,c",
$0:function(){return this.a.bI(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
je:{"^":"o:1;a,b",
$0:function(){return this.a.dA(this.b)}},
jg:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dB(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
df:function(a,b,c){H.bw(a)
return H.y(H.k5(a,new H.dd(0,0,[b,c])),"$isde",[b,c],"$asde")},
Y:function(a,b){return new H.dd(0,0,[a,b])},
a1:function(a,b,c,d){return new P.iZ(0,0,[d])},
fZ:function(a,b,c){var z,y
if(P.cs(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.e])
y=$.bg()
C.a.l(y,a)
try{P.jU(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dv(b,H.kl(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
ce:function(a,b,c){var z,y,x
if(P.cs(a))return b+"..."+c
z=new P.co(b)
y=$.bg()
C.a.l(y,a)
try{x=z
x.a=P.dv(x.gU(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gU()+c
y=z.gU()
return y.charCodeAt(0)==0?y:y},
cs:function(a){var z,y
for(z=0;y=$.bg(),z<y.length;++z)if(a===y[z])return!0
return!1},
jU:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.y(b,"$isa",[P.e],"$asa")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.d(z.gD(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.v()){if(x<=4){C.a.l(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.v();t=s,s=r){r=z.gD(z);++x
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
ci:function(a,b){var z,y,x
z=P.a1(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.K)(a),++x)z.l(0,H.A(a[x],b))
return z},
di:function(a){var z,y,x
z={}
if(P.cs(a))return"{...}"
y=new P.co("")
try{C.a.l($.bg(),a)
x=y
x.a=x.gU()+"{"
z.a=!0
J.eZ(a,new P.hc(z,y))
z=y
z.a=z.gU()+"}"}finally{z=$.bg()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gU()
return z.charCodeAt(0)==0?z:z},
iZ:{"^":"iU;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){return P.dN(this,this.r,H.r(this,0))},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbt")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbt")!=null}else return this.cH(b)},
cH:function(a){var z=this.d
if(z==null)return!1
return this.aq(this.b3(z,a),a)>=0},
l:function(a,b){var z,y
H.A(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cp()
this.b=z}return this.aY(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cp()
this.c=y}return this.aY(y,b)}else return this.cF(0,b)},
cF:function(a,b){var z,y,x
H.A(b,H.r(this,0))
z=this.d
if(z==null){z=P.cp()
this.d=z}y=this.b1(b)
x=z[y]
if(x==null)z[y]=[this.at(b)]
else{if(this.aq(x,b)>=0)return!1
x.push(this.at(b))}return!0},
bH:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b7(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b7(this.c,b)
else return this.cQ(0,b)},
cQ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b3(z,b)
x=this.aq(y,b)
if(x<0)return!1
this.bb(y.splice(x,1)[0])
return!0},
a1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.al()}},
aY:function(a,b){H.A(b,H.r(this,0))
if(H.i(a[b],"$isbt")!=null)return!1
a[b]=this.at(b)
return!0},
b7:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbt")
if(z==null)return!1
this.bb(z)
delete a[b]
return!0},
al:function(){this.r=this.r+1&67108863},
at:function(a){var z,y
z=new P.bt(H.A(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.al()
return z},
bb:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.al()},
b1:function(a){return J.aj(a)&0x3ffffff},
b3:function(a,b){return a[this.b1(b)]},
aq:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aE(a[y].a,b))return y
return-1},
t:{
cp:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bt:{"^":"b;a,0b,0c"},
j_:{"^":"b;a,b,0c,0d,$ti",
sb_:function(a){this.d=H.A(a,H.r(this,0))},
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aG(z))
else{z=this.c
if(z==null){this.sb_(null)
return!1}else{this.sb_(H.A(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaV:1,
t:{
dN:function(a,b,c){var z=new P.j_(a,b,[c])
z.c=a.e
return z}}},
iU:{"^":"hS;"},
ha:{"^":"j0;",$isj:1,$isa:1},
p:{"^":"b;$ti",
gB:function(a){return new H.dg(a,this.gj(a),0,[H.be(this,a,"p",0)])},
u:function(a,b){return this.h(a,b)},
dm:function(a,b,c,d){var z,y,x
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.be(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aG(a))}return y},
k:function(a){return P.ce(a,"[","]")}},
dh:{"^":"S;"},
hc:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
S:{"^":"b;$ti",
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.be(this,a,"S",0),H.be(this,a,"S",1)]})
for(z=J.bC(this.gH(a));z.v();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aQ(this.gH(a))},
k:function(a){return P.di(a)},
$isJ:1},
hT:{"^":"b;$ti",
K:function(a,b){var z
for(z=J.bC(H.y(b,"$isj",this.$ti,"$asj"));z.v();)this.l(0,z.gD(z))},
k:function(a){return P.ce(this,"{","}")},
$isj:1,
$islS:1},
hS:{"^":"hT;"},
j0:{"^":"b+p;"}}],["","",,P,{"^":"",
fO:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.b2(a)+"'"},
bH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bi(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fO(a)},
d5:function(a){return new P.iG(a)},
aC:function(a){H.c_(H.d(a))},
Q:{"^":"b;"},
"+bool":0,
bG:{"^":"b;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bG&&this.a===b.a&&!0},
M:function(a,b){return C.d.M(this.a,H.i(b,"$isbG").a)},
gA:function(a){var z=this.a
return(z^C.d.b8(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fC(H.hH(this))
y=P.bj(H.hF(this))
x=P.bj(H.hB(this))
w=P.bj(H.hC(this))
v=P.bj(H.hE(this))
u=P.bj(H.hG(this))
t=P.fD(H.hD(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isV:1,
$asV:function(){return[P.bG]},
t:{
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
ag:{"^":"E;"},
"+double":0,
aS:{"^":"b;a",
T:function(a,b){return C.d.T(this.a,H.i(b,"$isaS").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
M:function(a,b){return C.d.M(this.a,H.i(b,"$isaS").a)},
k:function(a){var z,y,x,w,v
z=new P.fL()
y=this.a
if(y<0)return"-"+new P.aS(0-y).k(0)
x=z.$1(C.d.V(y,6e7)%60)
w=z.$1(C.d.V(y,1e6)%60)
v=new P.fK().$1(y%1e6)
return""+C.d.V(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isV:1,
$asV:function(){return[P.aS]},
t:{
fJ:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fK:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fL:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
P:{"^":"b;"},
dn:{"^":"P;",
k:function(a){return"Throw of null."}},
aF:{"^":"P;a,b,c,d",
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
u=P.bH(this.b)
return w+v+": "+H.d(u)},
t:{
cR:function(a,b,c){return new P.aF(!0,a,b,c)}}},
dp:{"^":"aF;e,f,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
t:{
bL:function(a,b,c){return new P.dp(null,null,!0,a,b,"Value not in range")},
bK:function(a,b,c,d,e){return new P.dp(b,c,!0,a,d,"Invalid value")}}},
fX:{"^":"aF;e,j:f>,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y
z=H.N(this.b)
if(typeof z!=="number")return z.a3()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
t:{
F:function(a,b,c,d,e){var z=H.N(e==null?J.aQ(b):e)
return new P.fX(b,z,!0,a,c,"Index out of range")}}},
ig:{"^":"P;a",
k:function(a){return"Unsupported operation: "+this.a},
t:{
z:function(a){return new P.ig(a)}}},
id:{"^":"P;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
dD:function(a){return new P.id(a)}}},
cm:{"^":"P;a",
k:function(a){return"Bad state: "+this.a},
t:{
cn:function(a){return new P.cm(a)}}},
fv:{"^":"P;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bH(z))+"."},
t:{
aG:function(a){return new P.fv(a)}}},
du:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isP:1},
fB:{"^":"P;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iG:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bk:{"^":"b;"},
D:{"^":"E;"},
"+int":0,
j:{"^":"b;$ti",
aA:["cb",function(a,b){var z=H.cw(this,"j",0)
return new H.dE(this,H.n(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.v();)++y
return y},
u:function(a,b){var z,y,x
if(b<0)H.W(P.bK(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.v();){x=z.gD(z)
if(b===y)return x;++y}throw H.c(P.F(b,this,"index",null,y))},
k:function(a){return P.fZ(this,"(",")")}},
aV:{"^":"b;$ti"},
a:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
G:{"^":"b;",
gA:function(a){return P.b.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
E:{"^":"b;",$isV:1,
$asV:function(){return[P.E]}},
"+num":0,
b:{"^":";",
E:function(a,b){return this===b},
gA:function(a){return H.b1(this)},
k:function(a){return"Instance of '"+H.b2(this)+"'"},
toString:function(){return this.k(this)}},
a2:{"^":"b;"},
e:{"^":"b;",$isV:1,
$asV:function(){return[P.e]},
$ishy:1},
"+String":0,
co:{"^":"b;U:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dv:function(a,b,c){var z=J.bC(b)
if(!z.v())return a
if(c.length===0){do a+=H.d(z.gD(z))
while(z.v())}else{a+=H.d(z.gD(z))
for(;z.v();)a=a+c+H.d(z.gD(z))}return a}}}}],["","",,W,{"^":"",
fM:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).N(z,a,b,c)
y.toString
z=W.u
z=new H.dE(new W.a4(y),H.n(new W.fN(),{func:1,ret:P.Q,args:[z]}),[z])
x=z.gB(z)
if(!x.v())H.W(H.da())
w=x.gD(x)
if(x.v())H.W(H.h_())
return H.i(w,"$isR")},
d4:function(a){H.i(a,"$isM")
return"wheel"},
aT:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f1(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
iD:function(a,b){return document.createElement(a)},
bO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dM:function(a,b,c,d){var z,y
z=W.bO(W.bO(W.bO(W.bO(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dZ:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.ix(a)
if(!!J.B(z).$isM)return z
return}else return H.i(a,"$isM")},
e4:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.I
if(z===C.e)return a
return z.d7(a,b)},
L:{"^":"R;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kw:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fh:{"^":"L;",
k:function(a){return String(a)},
$isfh:1,
"%":"HTMLAnchorElement"},
kx:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cS:{"^":"L;",$iscS:1,"%":"HTMLBaseElement"},
fm:{"^":"h;","%":";Blob"},
bE:{"^":"L;",$isbE:1,"%":"HTMLBodyElement"},
c9:{"^":"L;0n:height=,0m:width=",
c0:function(a,b,c){var z=this.cM(a,b,P.k2(c,null))
return z},
cM:function(a,b,c){return a.getContext(b,c)},
$isc9:1,
"%":"HTMLCanvasElement"},
kC:{"^":"h;",
ad:function(a){return P.a_(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kD:{"^":"u;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fw:{"^":"ca;",$isfw:1,"%":"CSSNumericValue|CSSUnitValue"},
kH:{"^":"fz;0j:length=","%":"CSSPerspective"},
ak:{"^":"h;",$isak:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fx:{"^":"iv;0j:length=",
aD:function(a,b){var z=this.cN(a,this.aj(a,b))
return z==null?"":z},
aj:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.cZ(a,b)
z[b]=y
return y},
cZ:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fE()+b
if(z in a)return z
return b},
cN:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fy:{"^":"b;",
gn:function(a){return this.aD(a,"height")},
gm:function(a){return this.aD(a,"width")}},
ca:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fz:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kJ:{"^":"ca;0j:length=","%":"CSSTransformValue"},
kK:{"^":"ca;0j:length=","%":"CSSUnparsedValue"},
kM:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fF:{"^":"L;","%":"HTMLDivElement"},
fG:{"^":"u;",
d1:function(a,b){return a.adoptNode(b)},
c1:function(a,b){return a.getElementById(b)},
dv:function(a,b){return a.querySelector(b)},
gbD:function(a){return new W.br(a,"mousedown",!1,[W.T])},
gbE:function(a){return new W.br(a,"mousemove",!1,[W.T])},
gbF:function(a){return new W.br(a,"mouseup",!1,[W.T])},
gbG:function(a){return new W.br(a,H.v(W.d4(a)),!1,[W.aJ])},
"%":"XMLDocument;Document"},
kN:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fH:{"^":"h;",
dg:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kO:{"^":"iz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.y(c,"$isU",[P.E],"$asU")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.U,P.E]]},
$isx:1,
$asx:function(){return[[P.U,P.E]]},
$asp:function(){return[[P.U,P.E]]},
$isj:1,
$asj:function(){return[[P.U,P.E]]},
$isa:1,
$asa:function(){return[[P.U,P.E]]},
$ast:function(){return[[P.U,P.E]]},
"%":"ClientRectList|DOMRectList"},
fI:{"^":"h;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.aN(b,"$isU",[P.E],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dM(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isU:1,
$asU:function(){return[P.E]},
"%":";DOMRectReadOnly"},
kP:{"^":"iB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.e]},
$isx:1,
$asx:function(){return[P.e]},
$asp:function(){return[P.e]},
$isj:1,
$asj:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"DOMStringList"},
kQ:{"^":"h;0j:length=","%":"DOMTokenList"},
R:{"^":"u;0dC:tagName=",
gd4:function(a){return new W.iC(a)},
k:function(a){return a.localName},
N:["af",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d3
if(z==null){z=H.m([],[W.a9])
y=new W.dk(z)
C.a.l(z,W.dK(null))
C.a.l(z,W.dV())
$.d3=y
d=y}else d=z
z=$.d2
if(z==null){z=new W.dY(d)
$.d2=z
c=z}else{z.a=d
c=z}}if($.ad==null){z=document
y=z.implementation
y=(y&&C.I).dg(y,"")
$.ad=y
$.cb=y.createRange()
y=$.ad
y.toString
y=y.createElement("base")
H.i(y,"$iscS")
y.href=z.baseURI
z=$.ad.head;(z&&C.J).I(z,y)}z=$.ad
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbE")}z=$.ad
if(!!this.$isbE)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ad.body;(z&&C.o).I(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.T,a.tagName)){z=$.cb;(z&&C.B).c2(z,x)
z=$.cb
w=(z&&C.B).de(z,b)}else{x.innerHTML=b
w=$.ad.createDocumentFragment()
for(z=J.l(w);y=x.firstChild,y!=null;)z.I(w,y)}z=$.ad.body
if(x==null?z!=null:x!==z)J.cL(x)
c.aI(w)
C.q.d1(document,w)
return w},function(a,b,c){return this.N(a,b,c,null)},"df",null,null,"gdI",5,5,null],
c4:function(a,b,c,d){a.textContent=null
this.I(a,this.N(a,b,c,d))},
c3:function(a,b){return this.c4(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
cR:function(a,b){return a.removeAttribute(b)},
gbD:function(a){return new W.bN(a,"mousedown",!1,[W.T])},
gbE:function(a){return new W.bN(a,"mousemove",!1,[W.T])},
gbF:function(a){return new W.bN(a,"mouseup",!1,[W.T])},
gbG:function(a){return new W.bN(a,H.v(W.d4(a)),!1,[W.aJ])},
$isR:1,
"%":";Element"},
fN:{"^":"o:18;",
$1:function(a){return!!J.B(H.i(a,"$isu")).$isR}},
kS:{"^":"L;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a0:{"^":"h;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
M:{"^":"h;",
d0:function(a,b,c,d){H.n(c,{func:1,args:[W.a0]})
if(c!=null)this.cG(a,b,c,!1)},
cG:function(a,b,c,d){return a.addEventListener(b,H.ba(H.n(c,{func:1,args:[W.a0]}),1),!1)},
$isM:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dS|dT|dW|dX"},
al:{"^":"fm;",$isal:1,"%":"File"},
l8:{"^":"iI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isal")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.al]},
$isx:1,
$asx:function(){return[W.al]},
$asp:function(){return[W.al]},
$isj:1,
$asj:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$ast:function(){return[W.al]},
"%":"FileList"},
l9:{"^":"M;0j:length=","%":"FileWriter"},
lc:{"^":"L;0j:length=","%":"HTMLFormElement"},
am:{"^":"h;",$isam:1,"%":"Gamepad"},
fV:{"^":"L;","%":"HTMLHeadElement"},
ld:{"^":"h;0j:length=","%":"History"},
le:{"^":"iW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isu")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fW:{"^":"fG;","%":"HTMLDocument"},
lf:{"^":"L;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lg:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lh:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
li:{"^":"L;0n:height=,0m:width=","%":"HTMLImageElement"},
lk:{"^":"L;0n:height=,0m:width=","%":"HTMLInputElement"},
aW:{"^":"dC;",$isaW:1,"%":"KeyboardEvent"},
hb:{"^":"h;",
k:function(a){return String(a)},
$ishb:1,
"%":"Location"},
hf:{"^":"L;","%":"HTMLAudioElement;HTMLMediaElement"},
lr:{"^":"h;0j:length=","%":"MediaList"},
ls:{"^":"j2;",
h:function(a,b){return P.a_(a.get(H.v(b)))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gH:function(a){var z=H.m([],[P.e])
this.F(a,new W.hh(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hh:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lt:{"^":"j3;",
h:function(a,b){return P.a_(a.get(H.v(b)))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gH:function(a){var z=H.m([],[P.e])
this.F(a,new W.hi(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hi:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ap:{"^":"h;",$isap:1,"%":"MimeType"},
lu:{"^":"j5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isap")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$asp:function(){return[W.ap]},
$isj:1,
$asj:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$ast:function(){return[W.ap]},
"%":"MimeTypeArray"},
T:{"^":"dC;",
gbC:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b0(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.B(W.dZ(z)).$isR)throw H.c(P.z("offsetX is only supported on elements"))
y=H.i(W.dZ(z),"$isR")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.y(new P.b0(u,v,w),"$isb0",w,"$asb0")
if(typeof z!=="number")return z.aM()
if(typeof x!=="number")return x.aM()
return new P.b0(C.r.bL(z-u),C.r.bL(x-v),w)}},
$isT:1,
"%":";DragEvent|MouseEvent"},
a4:{"^":"ha;a",
ga4:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cn("No elements"))
if(y>1)throw H.c(P.cn("More than one element"))
return z.firstChild},
K:function(a,b){var z,y,x,w,v
H.y(b,"$isj",[W.u],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.l(y),v=0;v<x;++v)w.I(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.i(c,"$isu")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.k(y,b)
J.eG(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.d6(z,z.length,-1,[H.be(C.V,z,"t",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asp:function(){return[W.u]},
$asj:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"M;0du:previousSibling=",
dw:function(a){var z=a.parentNode
if(z!=null)J.bz(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.ca(a):z},
I:function(a,b){return a.appendChild(b)},
cS:function(a,b){return a.removeChild(b)},
cT:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hs:{"^":"j7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isu")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
lD:{"^":"L;0n:height=,0m:width=","%":"HTMLObjectElement"},
lF:{"^":"M;0n:height=,0m:width=","%":"OffscreenCanvas"},
lG:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ar:{"^":"h;0j:length=",$isar:1,"%":"Plugin"},
lI:{"^":"jb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isar")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[W.ar]},
"%":"PluginArray"},
lK:{"^":"T;0n:height=,0m:width=","%":"PointerEvent"},
hJ:{"^":"h;",
de:function(a,b){return a.createContextualFragment(b)},
c2:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lP:{"^":"jh;",
h:function(a,b){return P.a_(a.get(H.v(b)))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gH:function(a){var z=H.m([],[P.e])
this.F(a,new W.hP(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"RTCStatsReport"},
hP:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lQ:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lR:{"^":"L;0j:length=","%":"HTMLSelectElement"},
as:{"^":"M;",$isas:1,"%":"SourceBuffer"},
lT:{"^":"dT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isas")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[W.as]},
"%":"SourceBufferList"},
at:{"^":"h;",$isat:1,"%":"SpeechGrammar"},
lU:{"^":"jn;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isat")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$asp:function(){return[W.at]},
$isj:1,
$asj:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$ast:function(){return[W.at]},
"%":"SpeechGrammarList"},
au:{"^":"h;0j:length=",$isau:1,"%":"SpeechRecognitionResult"},
lX:{"^":"jq;",
h:function(a,b){return this.b4(a,H.v(b))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.cP(a,z)
if(y==null)return
b.$2(y,this.b4(a,y))}},
gH:function(a){var z=H.m([],[P.e])
this.F(a,new W.i1(z))
return z},
gj:function(a){return a.length},
b4:function(a,b){return a.getItem(b)},
cP:function(a,b){return a.key(b)},
$asS:function(){return[P.e,P.e]},
$isJ:1,
$asJ:function(){return[P.e,P.e]},
"%":"Storage"},
i1:{"^":"o:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
av:{"^":"h;",$isav:1,"%":"CSSStyleSheet|StyleSheet"},
i6:{"^":"L;",
N:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.af(a,b,c,d)
z=W.fM("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a4(y).K(0,new W.a4(z))
return y},
"%":"HTMLTableElement"},
m_:{"^":"L;",
N:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.af(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.N(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga4(z)
x.toString
z=new W.a4(x)
w=z.ga4(z)
y.toString
w.toString
new W.a4(y).K(0,new W.a4(w))
return y},
"%":"HTMLTableRowElement"},
m0:{"^":"L;",
N:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.af(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.N(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga4(z)
y.toString
x.toString
new W.a4(y).K(0,new W.a4(x))
return y},
"%":"HTMLTableSectionElement"},
dx:{"^":"L;",$isdx:1,"%":"HTMLTemplateElement"},
m1:{"^":"h;0m:width=","%":"TextMetrics"},
aw:{"^":"M;",$isaw:1,"%":"TextTrack"},
ax:{"^":"M;",$isax:1,"%":"TextTrackCue|VTTCue"},
m2:{"^":"jy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isax")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[W.ax]},
"%":"TextTrackCueList"},
m3:{"^":"dX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isaw")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[W.aw]},
"%":"TextTrackList"},
m4:{"^":"h;0j:length=","%":"TimeRanges"},
ay:{"^":"h;",$isay:1,"%":"Touch"},
m5:{"^":"jD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isay")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[W.ay]},
"%":"TouchList"},
m6:{"^":"h;0j:length=","%":"TrackDefaultList"},
dC:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mk:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mm:{"^":"hf;0n:height=,0m:width=","%":"HTMLVideoElement"},
mn:{"^":"M;0j:length=","%":"VideoTrackList"},
mo:{"^":"M;0n:height=,0m:width=","%":"VisualViewport"},
mp:{"^":"h;0m:width=","%":"VTTRegion"},
aJ:{"^":"T;",
gdi:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
$isaJ:1,
"%":"WheelEvent"},
ij:{"^":"M;",
gd3:function(a){var z,y,x
z=P.E
y=new P.ab(0,$.I,[z])
x=H.n(new W.ik(new P.ju(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cL(a)
this.cU(a,W.e4(x,z))
return y},
cU:function(a,b){return a.requestAnimationFrame(H.ba(H.n(b,{func:1,ret:-1,args:[P.E]}),1))},
cL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdF:1,
"%":"DOMWindow|Window"},
ik:{"^":"o:20;a",
$1:function(a){var z=this.a
a=H.bV(H.cz(a),{futureOr:1,type:H.r(z,0)})
z=z.a
if(z.a!==0)H.W(P.cn("Future already completed"))
z.am(a)}},
dH:{"^":"u;",$isdH:1,"%":"Attr"},
mv:{"^":"jJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isak")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ak]},
$isx:1,
$asx:function(){return[W.ak]},
$asp:function(){return[W.ak]},
$isj:1,
$asj:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$ast:function(){return[W.ak]},
"%":"CSSRuleList"},
mx:{"^":"fI;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.aN(b,"$isU",[P.E],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dM(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
my:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isam")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.am]},
$isx:1,
$asx:function(){return[W.am]},
$asp:function(){return[W.am]},
$isj:1,
$asj:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$ast:function(){return[W.am]},
"%":"GamepadList"},
mD:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isu")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mE:{"^":"jP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isau")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[W.au]},
"%":"SpeechRecognitionResultList"},
mF:{"^":"jR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isav")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$asp:function(){return[W.av]},
$isj:1,
$asj:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$ast:function(){return[W.av]},
"%":"StyleSheetList"},
is:{"^":"dh;cK:a<",
F:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gH(this),y=z.length,x=this.a,w=J.l(x),v=0;v<z.length;z.length===y||(0,H.K)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gH:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.m([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.i(z[w],"$isdH")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asS:function(){return[P.e,P.e]},
$asJ:function(){return[P.e,P.e]}},
iC:{"^":"is;a",
h:function(a,b){return J.c5(this.a,H.v(b))},
gj:function(a){return this.gH(this).length}},
br:{"^":"i2;a,b,c,$ti"},
bN:{"^":"br;a,b,c,$ti"},
iE:{"^":"i3;a,b,c,d,e,$ti",t:{
az:function(a,b,c,d,e){var z=W.e4(new W.iF(c),W.a0)
if(z!=null&&!0)J.eH(a,b,z,!1)
return new W.iE(0,a,b,z,!1,[e])}}},
iF:{"^":"o:21;a",
$1:function(a){return this.a.$1(H.i(a,"$isa0"))}},
bs:{"^":"b;a",
cC:function(a){var z,y
z=$.cD()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.S[y],W.kb())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kc())}},
W:function(a){return $.eD().w(0,W.aT(a))},
R:function(a,b,c){var z,y,x
z=W.aT(a)
y=$.cD()
x=y.h(0,H.d(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bT(x.$4(a,b,c,this))},
$isa9:1,
t:{
dK:function(a){var z,y
z=document.createElement("a")
y=new W.ji(z,window.location)
y=new W.bs(y)
y.cC(a)
return y},
mB:[function(a,b,c,d){H.i(a,"$isR")
H.v(b)
H.v(c)
H.i(d,"$isbs")
return!0},"$4","kb",16,0,12],
mC:[function(a,b,c,d){var z,y,x
H.i(a,"$isR")
H.v(b)
H.v(c)
z=H.i(d,"$isbs").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kc",16,0,12]}},
t:{"^":"b;$ti",
gB:function(a){return new W.d6(a,this.gj(a),-1,[H.be(this,a,"t",0)])}},
dk:{"^":"b;a",
W:function(a){return C.a.bd(this.a,new W.hu(a))},
R:function(a,b,c){return C.a.bd(this.a,new W.ht(a,b,c))},
$isa9:1},
hu:{"^":"o:9;a",
$1:function(a){return H.i(a,"$isa9").W(this.a)}},
ht:{"^":"o:9;a,b,c",
$1:function(a){return H.i(a,"$isa9").R(this.a,this.b,this.c)}},
jj:{"^":"b;",
cD:function(a,b,c,d){var z,y,x
this.a.K(0,c)
z=b.aA(0,new W.jk())
y=b.aA(0,new W.jl())
this.b.K(0,z)
x=this.c
x.K(0,C.U)
x.K(0,y)},
W:function(a){return this.a.w(0,W.aT(a))},
R:["cd",function(a,b,c){var z,y
z=W.aT(a)
y=this.c
if(y.w(0,H.d(z)+"::"+b))return this.d.d2(c)
else if(y.w(0,"*::"+b))return this.d.d2(c)
else{y=this.b
if(y.w(0,H.d(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.d(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isa9:1},
jk:{"^":"o:10;",
$1:function(a){return!C.a.w(C.u,H.v(a))}},
jl:{"^":"o:10;",
$1:function(a){return C.a.w(C.u,H.v(a))}},
jv:{"^":"jj;e,a,b,c,d",
R:function(a,b,c){if(this.cd(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c5(a,"template")==="")return this.e.w(0,b)
return!1},
t:{
dV:function(){var z,y,x,w,v
z=P.e
y=P.ci(C.t,z)
x=H.r(C.t,0)
w=H.n(new W.jw(),{func:1,ret:z,args:[x]})
v=H.m(["TEMPLATE"],[z])
y=new W.jv(y,P.a1(null,null,null,z),P.a1(null,null,null,z),P.a1(null,null,null,z),null)
y.cD(null,new H.hd(C.t,w,[x,z]),v,null)
return y}}},
jw:{"^":"o:22;",
$1:function(a){return"TEMPLATE::"+H.d(H.v(a))}},
jt:{"^":"b;",
W:function(a){var z=J.B(a)
if(!!z.$isdr)return!1
z=!!z.$isH
if(z&&W.aT(a)==="foreignObject")return!1
if(z)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.h.c6(b,"on"))return!1
return this.W(a)},
$isa9:1},
d6:{"^":"b;a,b,c,0d,$ti",
sb2:function(a){this.d=H.A(a,H.r(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb2(J.bh(this.a,z))
this.c=z
return!0}this.sb2(null)
this.c=y
return!1},
gD:function(a){return this.d},
$isaV:1},
iw:{"^":"b;a",$isM:1,$isdF:1,t:{
ix:function(a){if(a===window)return H.i(a,"$isdF")
else return new W.iw(a)}}},
a9:{"^":"b;"},
ji:{"^":"b;a,b",$ismj:1},
dY:{"^":"b;a",
aI:function(a){new W.jG(this).$2(a,null)},
a0:function(a,b){if(b==null)J.cL(a)
else J.bz(b,a)},
cX:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f_(a)
x=J.c5(y.gcK(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.bi(a)}catch(t){H.a5(t)}try{u=W.aT(a)
this.cW(H.i(a,"$isR"),b,z,v,u,H.i(y,"$isJ"),H.v(x))}catch(t){if(H.a5(t) instanceof P.aF)throw t
else{this.a0(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cW:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a0(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.W(a)){this.a0(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.a0(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gH(f)
y=H.m(z.slice(0),[H.r(z,0)])
for(x=f.gH(f).length-1,z=f.a,w=J.l(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.R(a,J.f8(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.cR(z,v)}}if(!!J.B(a).$isdx)this.aI(a.content)},
$islB:1},
jG:{"^":"o:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cX(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a0(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f0(z)}catch(w){H.a5(w)
v=H.i(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bz(u,v)}else J.bz(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isu")}}},
iv:{"^":"h+fy;"},
iy:{"^":"h+p;"},
iz:{"^":"iy+t;"},
iA:{"^":"h+p;"},
iB:{"^":"iA+t;"},
iH:{"^":"h+p;"},
iI:{"^":"iH+t;"},
iV:{"^":"h+p;"},
iW:{"^":"iV+t;"},
j2:{"^":"h+S;"},
j3:{"^":"h+S;"},
j4:{"^":"h+p;"},
j5:{"^":"j4+t;"},
j6:{"^":"h+p;"},
j7:{"^":"j6+t;"},
ja:{"^":"h+p;"},
jb:{"^":"ja+t;"},
jh:{"^":"h+S;"},
dS:{"^":"M+p;"},
dT:{"^":"dS+t;"},
jm:{"^":"h+p;"},
jn:{"^":"jm+t;"},
jq:{"^":"h+S;"},
jx:{"^":"h+p;"},
jy:{"^":"jx+t;"},
dW:{"^":"M+p;"},
dX:{"^":"dW+t;"},
jC:{"^":"h+p;"},
jD:{"^":"jC+t;"},
jI:{"^":"h+p;"},
jJ:{"^":"jI+t;"},
jK:{"^":"h+p;"},
jL:{"^":"jK+t;"},
jM:{"^":"h+p;"},
jN:{"^":"jM+t;"},
jO:{"^":"h+p;"},
jP:{"^":"jO+t;"},
jQ:{"^":"h+p;"},
jR:{"^":"jQ+t;"}}],["","",,P,{"^":"",
a_:function(a){var z,y,x,w,v
if(a==null)return
z=P.Y(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.K)(y),++w){v=H.v(y[w])
z.i(0,v,a[v])}return z},
k2:function(a,b){var z={}
a.F(0,new P.k3(z))
return z},
d0:function(){var z=$.d_
if(z==null){z=J.c1(window.navigator.userAgent,"Opera",0)
$.d_=z}return z},
fE:function(){var z,y
z=$.cX
if(z!=null)return z
y=$.cY
if(y==null){y=J.c1(window.navigator.userAgent,"Firefox",0)
$.cY=y}if(y)z="-moz-"
else{y=$.cZ
if(y==null){y=!P.d0()&&J.c1(window.navigator.userAgent,"Trident/",0)
$.cZ=y}if(y)z="-ms-"
else z=P.d0()?"-o-":"-webkit-"}$.cX=z
return z},
k3:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b0:{"^":"b;X:a>,S:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
E:function(a,b){if(b==null)return!1
return H.aN(b,"$isb0",[P.E],null)&&this.a==J.bD(b)&&this.b==b.gS(b)},
gA:function(a){var z,y,x
z=J.aj(this.a)
y=J.aj(this.b)
y=P.dL(P.dL(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jc:{"^":"b;"},
U:{"^":"jc;$ti"}}],["","",,P,{"^":"",fi:{"^":"h;",$isfi:1,"%":"SVGAnimatedLength"},kT:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},kU:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kV:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kW:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},kX:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},kY:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kZ:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},l_:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},l0:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},l1:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},l2:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},l3:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},l4:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},l5:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},l6:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},l7:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},la:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},lb:{"^":"bl;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fU:{"^":"bl;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bl:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lj:{"^":"bl;0n:height=,0m:width=","%":"SVGImageElement"},aX:{"^":"h;",$isaX:1,"%":"SVGLength"},lp:{"^":"iY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.i(c,"$isaX")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aX]},
$isj:1,
$asj:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$ast:function(){return[P.aX]},
"%":"SVGLengthList"},lq:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},b_:{"^":"h;",$isb_:1,"%":"SVGNumber"},lC:{"^":"j9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.i(c,"$isb_")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b_]},
$isj:1,
$asj:function(){return[P.b_]},
$isa:1,
$asa:function(){return[P.b_]},
$ast:function(){return[P.b_]},
"%":"SVGNumberList"},lH:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},lJ:{"^":"h;0j:length=","%":"SVGPointList"},lL:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lM:{"^":"fU;0n:height=,0m:width=","%":"SVGRectElement"},dr:{"^":"H;",$isdr:1,"%":"SVGScriptElement"},lY:{"^":"js;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.v(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.e]},
$isj:1,
$asj:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"SVGStringList"},H:{"^":"R;",
N:function(a,b,c,d){var z,y,x,w,v,u
z=H.m([],[W.a9])
C.a.l(z,W.dK(null))
C.a.l(z,W.dV())
C.a.l(z,new W.jt())
c=new W.dY(new W.dk(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).df(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a4(w)
u=z.ga4(z)
for(z=J.l(v);x=u.firstChild,x!=null;)z.I(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lZ:{"^":"bl;0n:height=,0m:width=","%":"SVGSVGElement"},b3:{"^":"h;",$isb3:1,"%":"SVGTransform"},m7:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.i(c,"$isb3")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b3]},
$isj:1,
$asj:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$ast:function(){return[P.b3]},
"%":"SVGTransformList"},ml:{"^":"bl;0n:height=,0m:width=","%":"SVGUseElement"},iX:{"^":"h+p;"},iY:{"^":"iX+t;"},j8:{"^":"h+p;"},j9:{"^":"j8+t;"},jr:{"^":"h+p;"},js:{"^":"jr+t;"},jE:{"^":"h+p;"},jF:{"^":"jE+t;"}}],["","",,P,{"^":"",ae:{"^":"b;",$isj:1,
$asj:function(){return[P.ag]},
$isa:1,
$asa:function(){return[P.ag]},
$isib:1}}],["","",,P,{"^":"",ky:{"^":"h;0j:length=","%":"AudioBuffer"},kz:{"^":"it;",
h:function(a,b){return P.a_(a.get(H.v(b)))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gH:function(a){var z=H.m([],[P.e])
this.F(a,new P.fk(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"AudioParamMap"},fk:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kA:{"^":"M;0j:length=","%":"AudioTrackList"},fl:{"^":"M;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lE:{"^":"fl;0j:length=","%":"OfflineAudioContext"},it:{"^":"h+S;"}}],["","",,P,{"^":"",fn:{"^":"h;",$isfn:1,"%":"WebGLBuffer"},fT:{"^":"h;",$isfT:1,"%":"WebGLFramebuffer"},hI:{"^":"h;",$ishI:1,"%":"WebGLProgram"},lN:{"^":"h;",
bc:function(a,b){return a.activeTexture(b)},
be:function(a,b,c){return a.attachShader(b,c)},
bf:function(a,b,c){return a.bindBuffer(b,c)},
bh:function(a,b,c){return a.bindFramebuffer(b,c)},
bi:function(a,b,c){return a.bindTexture(b,c)},
bj:function(a,b){return a.blendEquation(b)},
bk:function(a,b,c){return a.blendFunc(b,c)},
bl:function(a,b,c,d){return a.bufferData(b,c,d)},
bm:function(a,b){return a.clear(b)},
bn:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bo:function(a,b){return a.compileShader(b)},
bp:function(a){return a.createBuffer()},
bq:function(a){return a.createProgram()},
br:function(a,b){return a.createShader(b)},
bt:function(a,b){return a.depthMask(b)},
bu:function(a,b){return a.disable(b)},
bv:function(a,b,c,d){return a.drawArrays(b,c,d)},
bw:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bx:function(a,b){return a.enable(b)},
by:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.a_(a.getContextAttributes())},
aB:function(a,b){return a.getProgramInfoLog(b)},
aC:function(a,b,c){return a.getProgramParameter(b,c)},
aE:function(a,b){return a.getShaderInfoLog(b)},
aF:function(a,b,c){return a.getShaderParameter(b,c)},
aG:function(a,b,c){return a.getUniformLocation(b,c)},
bA:function(a,b){return a.linkProgram(b)},
aJ:function(a,b,c){return a.shaderSource(b,c)},
aL:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bM:function(a,b,c){return a.uniform1f(b,c)},
bN:function(a,b,c){return a.uniform1fv(b,c)},
bO:function(a,b,c){return a.uniform1i(b,c)},
bP:function(a,b,c){return a.uniform1iv(b,c)},
bQ:function(a,b,c){return a.uniform2fv(b,c)},
bR:function(a,b,c){return a.uniform3fv(b,c)},
bS:function(a,b,c){return a.uniform4fv(b,c)},
bT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bV:function(a,b){return a.useProgram(b)},
bW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bY:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lO:{"^":"h;",
d5:function(a,b){return a.beginTransformFeedback(b)},
d8:function(a,b){return a.bindVertexArray(b)},
dh:function(a){return a.createVertexArray()},
dj:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dk:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dl:function(a){return a.endTransformFeedback()},
dF:function(a,b,c,d){this.d_(a,b,H.y(c,"$isa",[P.e],"$asa"),d)
return},
d_:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dG:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bc:function(a,b){return a.activeTexture(b)},
be:function(a,b,c){return a.attachShader(b,c)},
bf:function(a,b,c){return a.bindBuffer(b,c)},
bh:function(a,b,c){return a.bindFramebuffer(b,c)},
bi:function(a,b,c){return a.bindTexture(b,c)},
bj:function(a,b){return a.blendEquation(b)},
bk:function(a,b,c){return a.blendFunc(b,c)},
bl:function(a,b,c,d){return a.bufferData(b,c,d)},
bm:function(a,b){return a.clear(b)},
bn:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bo:function(a,b){return a.compileShader(b)},
bp:function(a){return a.createBuffer()},
bq:function(a){return a.createProgram()},
br:function(a,b){return a.createShader(b)},
bt:function(a,b){return a.depthMask(b)},
bu:function(a,b){return a.disable(b)},
bv:function(a,b,c,d){return a.drawArrays(b,c,d)},
bw:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bx:function(a,b){return a.enable(b)},
by:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.a_(a.getContextAttributes())},
aB:function(a,b){return a.getProgramInfoLog(b)},
aC:function(a,b,c){return a.getProgramParameter(b,c)},
aE:function(a,b){return a.getShaderInfoLog(b)},
aF:function(a,b,c){return a.getShaderParameter(b,c)},
aG:function(a,b,c){return a.getUniformLocation(b,c)},
bA:function(a,b){return a.linkProgram(b)},
aJ:function(a,b,c){return a.shaderSource(b,c)},
aL:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bM:function(a,b,c){return a.uniform1f(b,c)},
bN:function(a,b,c){return a.uniform1fv(b,c)},
bO:function(a,b,c){return a.uniform1i(b,c)},
bP:function(a,b,c){return a.uniform1iv(b,c)},
bQ:function(a,b,c){return a.uniform2fv(b,c)},
bR:function(a,b,c){return a.uniform3fv(b,c)},
bS:function(a,b,c){return a.uniform4fv(b,c)},
bT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bV:function(a,b){return a.useProgram(b)},
bW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bY:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hU:{"^":"h;",$ishU:1,"%":"WebGLShader"},i8:{"^":"h;",$isi8:1,"%":"WebGLTexture"},ic:{"^":"h;",$isic:1,"%":"WebGLUniformLocation"},ih:{"^":"h;",$isih:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lV:{"^":"jp;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return P.a_(this.cO(a,b))},
i:function(a,b,c){H.i(c,"$isJ")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
cO:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$ast:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jo:{"^":"h+p;"},jp:{"^":"jo+t;"}}],["","",,G,{"^":"",
il:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.i(z,y,w+H.d(z[y]))}return C.a.a2(z,"\n")},
dI:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.br(a,b)
z.aJ(a,y,c)
z.bo(a,y)
x=H.bT(z.aF(a,y,35713))
if(x!=null&&!x){w=z.aE(a,y)
P.aC("E:Compilation failed:")
P.aC("E:"+G.il(c))
P.aC("E:Failure:")
P.aC(C.h.J("E:",w))
throw H.c(w)}return y},
dl:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q
d.C(b)
d.ae(0,a)
e.C(c)
e.ae(0,a)
z=e.a
y=z[0]
x=z[1]
w=z[2]
v=d.a
u=v[0]
t=v[1]
s=v[2]
z[0]=x*s-w*t
z[1]=w*u-y*s
z[2]=y*t-x*u
r=Math.sqrt(e.gab())
if(r===0)return!1
q=-1/r
z[2]=z[2]*q
z[1]=z[1]*q
z[0]=z[0]*q
return!0},
d7:function(a,b){var z,y,x
H.y(a,"$isa",[T.f],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.i.i(b,z,J.bD(a[y]))
if(y>=a.length)return H.k(a,y)
C.i.i(b,z+1,J.c4(a[y]))
z+=2
if(y>=a.length)return H.k(a,y)
x=J.cJ(a[y])
if(z>=b.length)return H.k(b,z)
b[z]=x}return b},
fQ:function(a,b){var z,y
H.y(a,"$isa",[T.q],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.i(b,z,J.bD(a[y]))
if(y>=a.length)return H.k(a,y)
C.i.i(b,z+1,J.c4(a[y]))}return b},
fR:function(a,b){var z,y,x,w,v
H.y(a,"$isa",[T.aI],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.i.i(b,z,J.bD(a[y]))
if(y>=a.length)return H.k(a,y)
C.i.i(b,z+1,J.c4(a[y]))
x=z+2
if(y>=a.length)return H.k(a,y)
w=J.cJ(a[y])
v=b.length
if(x>=v)return H.k(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.k(a,y)
w=J.f2(a[y])
if(z>=v)return H.k(b,z)
b[z]=w}return b},
fP:function(a,b){var z,y
H.y(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.bh(a[y],0))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+1,J.bh(a[y],1))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+2,J.bh(a[y],2))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+3,J.bh(a[y],3))}return b},
iT:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.an(z,[H.r(z,0)]),y=y.gB(y),x=b.x,w=[[P.a,P.D]],v=[P.ag],u=[T.aI],t=[T.f],s=[T.q];y.v();){r=y.d
if(!x.a9(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.ea>0)H.c_("I: "+r)
continue}q=z.h(0,r)
switch($.a6().h(0,r).a){case"vec2":b.a_(r,G.fQ(H.by(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a_(r,G.d7(H.by(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a_(r,G.fR(H.by(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a_(r,new Float32Array(H.bP(H.by(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a_(r,G.fP(H.by(q,"$isa",w,"$asa"),null),4)
break}}},
d9:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.e
w=P.Y(x,P.b)
v=J.eQ(z.a)
u=new G.hg(z,v,4,w,y,0,-1,P.Y(x,P.ae),"meshdata:"+a,!1,!0)
x=G.d7(c.d,null)
w.i(0,"aPosition",J.c2(z.a))
u.ch=x
u.aP("aPosition",x,3)
t=$.a6().h(0,"aPosition")
if(t==null)H.W("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bA(z.a,v)
z.bz(0,s,0)
z.bX(0,w.h(0,"aPosition"),s,t.aQ(),5126,!1,0,0)
y=H.y(c.cn(),"$isa",[P.D],"$asa")
u.y=J.c2(z.a)
x=u.ch.length
if(x<768){u.sap(new Uint8Array(H.bP(y)))
u.Q=5121}else if(x<196608){u.sap(new Uint16Array(H.bP(y)))
u.Q=5123}else{u.sap(new Uint32Array(H.bP(y)))
u.Q=5125}J.bA(z.a,v)
y=u.y
x=u.cx
J.c0(z.a,34963,y)
J.cI(z.a,34963,x,35048)
G.iT(c,u)
return u},
aY:{"^":"b;"},
b4:{"^":"aY;d,a,b,c",
aR:function(){return this.d},
k:function(a){var z,y,x,w
z=H.m(["{"+new H.dB(H.k8(this)).k(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.an(y,[H.r(y,0)]),x=x.gB(x);x.v();){w=x.d
C.a.l(z,H.d(w)+": "+H.d(y.h(0,w)))}return C.a.a2(z,"\n")}},
fo:{"^":"dt;"},
fq:{"^":"b;0a,b",
bz:function(a,b,c){J.eX(this.a,b)
if(c>0)J.fe(this.a,b,c)},
bX:function(a,b,c,d,e,f,g,h){J.c0(this.a,34962,b)
J.ff(this.a,c,d,e,!1,g,h)}},
fS:{"^":"b;a,b,c,d,e"},
cc:{"^":"b;a,b,c"},
cd:{"^":"b;a,b,c,d"},
d8:{"^":"b;a,b,c,d,e",
a5:function(a){switch($.a6().h(0,a).a){case"vec2":this.e.i(0,a,H.m([],[T.q]))
break
case"vec3":this.e.i(0,a,H.m([],[T.f]))
break
case"vec4":this.e.i(0,a,H.m([],[T.aI]))
break
case"float":this.e.i(0,a,H.m([],[P.ag]))
break
case"uvec4":this.e.i(0,a,H.m([],[[P.a,P.D]]))
break}},
ci:function(a){var z,y,x
z=this.d.length
for(y=this.b,x=0;x<a;++x,z+=3)C.a.l(y,new G.cc(z,z+1,z+2))},
aN:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.cd(z,z+1,z+2,z+3))},
ah:function(a){var z,y,x,w,v
H.y(a,"$isa",[T.f],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.K)(a),++x){w=a[x]
v=new T.f(new Float32Array(3))
v.C(w)
C.a.l(y,v)}},
ag:function(a,b){var z,y,x,w,v,u,t
z=[T.q]
H.y(b,"$isa",z,"$asa")
y=H.y(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.K)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.q(u))}},
cg:function(a,b){var z,y,x,w,v
z=[T.f]
H.y(b,"$isa",z,"$asa")
y=H.y(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.f(new Float32Array(3))
v.C(w)
z.l(y,v)}},
cn:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.m(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.K)(z),++u){t=z[u]
C.a.i(w,v,t.a)
C.a.i(w,v+1,t.b)
C.a.i(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.K)(y),++u){s=y[u]
x=s.a
C.a.i(w,v,x)
C.a.i(w,v+1,s.b)
r=s.c
C.a.i(w,v+2,r)
C.a.i(w,v+3,x)
C.a.i(w,v+4,r)
C.a.i(w,v+5,s.d)
v+=6}return w},
co:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.d
y=new Array(z.length)
y.fixed$length=Array
x=H.m(y,[T.f])
w=new T.f(new Float32Array(3))
v=new T.f(new Float32Array(3))
for(y=this.b,u=y.length,t=0;t<y.length;y.length===u||(0,H.K)(y),++t){s=y[t]
r=s.a
q=z.length
if(r>=q)return H.k(z,r)
p=z[r]
o=s.b
if(o>=q)return H.k(z,o)
n=z[o]
m=s.c
if(m>=q)return H.k(z,m)
G.dl(p,n,z[m],w,v)
q=new T.f(new Float32Array(3))
q.C(v)
C.a.i(x,r,q)
r=new T.f(new Float32Array(3))
r.C(v)
C.a.i(x,o,r)
r=new T.f(new Float32Array(3))
r.C(v)
C.a.i(x,m,r)}for(y=this.c,u=y.length,t=0;t<y.length;y.length===u||(0,H.K)(y),++t){l=y[t]
r=l.a
q=z.length
if(r>=q)return H.k(z,r)
p=z[r]
o=l.b
if(o>=q)return H.k(z,o)
n=z[o]
m=l.c
if(m>=q)return H.k(z,m)
G.dl(p,n,z[m],w,v)
q=new T.f(new Float32Array(3))
q.C(v)
C.a.i(x,r,q)
r=new T.f(new Float32Array(3))
r.C(v)
C.a.i(x,o,r)
r=new T.f(new Float32Array(3))
r.C(v)
C.a.i(x,m,r)
r=new T.f(new Float32Array(3))
r.C(v)
C.a.i(x,l.d,r)}this.e.i(0,"aNormal",x)},
k:function(a){var z,y,x,w,v
z=H.m(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.an(y,[H.r(y,0)]),x=x.gB(x);x.v();){w=x.d
v=$.a6().h(0,w).a
C.a.l(z,H.d(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a2(z," ")}},
dz:{"^":"b;a,b,c"},
dy:{"^":"b;a,b,c"},
he:{"^":"b4;d,a,b,c",t:{
cj:function(a){var z=P.Y(P.e,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.el())
z.i(0,"cStencilFunc",$.er())
return new G.he(z,a,!1,!0)}}},
hg:{"^":"aY;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sap:function(a){this.cx=H.y(a,"$isa",[P.D],"$asa")},
aP:function(a,b,c){var z,y
C.h.ak(a,0)
H.i(b,"$isae")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c0(z.a,34962,y)
J.cI(z.a,34962,b,35048)},
cp:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.cE(a,0)===105
if(z&&this.z===0)this.z=C.d.ce(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c2(x.a))
this.aP(a,b,c)
w=$.a6().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bA(x.a,this.e)
x.bz(0,v,z?1:0)
x.bX(0,y.h(0,a),v,w.aQ(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.an(z,[H.r(z,0)]),x=x.gB(x);x.v();){w=x.d
C.a.l(y,H.d(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a2(y,"  ")}},
hx:{"^":"b4;x,y,z,Q,ch,cx,cy,db,dx,dy,d,a,b,c",
aR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.z
y=this.x.d
z.C(y)
x=z.a
x[12]=0
x[13]=0
x[14]=0
x[15]=1
y=y.a
w=-y[12]
v=-y[13]
u=-y[14]
y=J.B(w)
t=!!y.$isaI
s=t?w.gbZ(w):1
if(!!y.$isf){r=w.gX(w)
v=w.gS(w)
u=w.gac(w)
w=r}else if(t){r=w.gX(w)
v=w.gS(w)
u=w.gac(w)
w=r}else if(!(typeof w==="number")){w=null
v=null
u=null}y=x[0]
if(typeof w!=="number")return H.aB(w)
t=x[4]
if(typeof v!=="number")return H.aB(v)
q=x[8]
if(typeof u!=="number")return H.aB(u)
p=x[12]
o=x[1]
n=x[5]
m=x[9]
l=x[13]
k=x[2]
j=x[6]
i=x[10]
h=x[14]
g=x[3]
f=x[7]
e=x[11]
d=x[15]
x[12]=y*w+t*v+q*u+p*s
x[13]=o*w+n*v+m*u+l*s
x[14]=k*w+j*v+i*u+h*s
x[15]=g*w+f*v+e*u+d*s
d=this.Q
d.C(this.y)
d.bB(0,z)
z=this.d
z.i(0,"uPerspectiveViewMatrix",d)
return z},
aT:function(){var z,y,x,w,v,u,t,s,r,q
z=this.cy
y=this.cx
x=z-y
w=this.db
v=w+x/this.ch
u=this.dx
t=this.dy
s=v-w
r=t-u
q=this.y.a
q[0]=0
q[1]=0
q[2]=0
q[3]=0
q[4]=0
q[5]=0
q[6]=0
q[7]=0
q[8]=0
q[9]=0
q[10]=0
q[11]=0
q[12]=0
q[13]=0
q[14]=0
q[15]=0
q[0]=2/x
q[5]=2/s
q[10]=-2/r
q[12]=-(z+y)/x
q[13]=-(v+w)/s
q[14]=-(t+u)/r
q[15]=1},
cj:function(a,b){var z
if(typeof a!=="number")return a.dH()
if(typeof b!=="number")return H.aB(b)
z=a/b
if(this.ch===z)return
this.ch=z
this.aT()}},
kR:{"^":"b;"},
hN:{"^":"aY;d,e,f,r,x,y,z,Q,0ch,a,b,c",
ct:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.cK(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.cK(w.a,v,t))}},
cw:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.e])
x=H.m([],[P.e])
for(y=new H.an(y,[H.r(y,0)]),y=y.gB(y);y.v();){w=y.d
if(!z.a9(0,w))C.a.l(x,w)}for(z=this.x,z=P.dN(z,z.r,H.r(z,0)),y=this.Q;z.v();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(b,"$isJ",[P.e,P.b],"$asJ")
z=Date.now()
for(y=new H.an(b,[H.r(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=0;y.v();){t=y.d
switch(J.cE(t,0)){case 117:if(w.a9(0,t)){s=b.h(0,t)
if(v.a9(0,t))H.c_("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.a6().h(0,t)
if(r==null)H.W("unknown "+t)
q=w.h(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.N(s)
J.c6(x.a,q,s)}else if(!!J.B(s).$isfY)J.fc(x.a,q,s)
break
case"float":if(r.c===0){H.e8(s)
J.fa(x.a,q,s)}else if(!!J.B(s).$isae)J.fb(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.ai(s,"$isO").a
J.cQ(x.a,q,!1,t)}else if(!!J.B(s).$isae)J.cQ(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.ai(s,"$isao").a
J.cP(x.a,q,!1,t)}else if(!!J.B(s).$isae)J.cP(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cO(p,q,H.ai(s,"$isaI").a)
else J.cO(p,q,H.i(s,"$isae"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cN(p,q,H.ai(s,"$isf").a)
else J.cN(p,q,H.i(s,"$isae"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cM(p,q,H.ai(s,"$isq").a)
else J.cM(p,q,H.i(s,"$isae"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.aB(t)
J.cF(x.a,33984+t)
t=H.ai(s,"$isi7").cq()
J.cH(x.a,3553,t)
t=this.ch
J.c6(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.J()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.aB(t)
J.cF(x.a,33984+t)
t=H.ai(s,"$isi7").cq()
J.cH(x.a,34067,t)
t=this.ch
J.c6(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.J()
this.ch=t+1
break
default:H.c_("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":t=J.aE(s,!0)
p=x.a
if(t)J.bB(p,2929)
else J.c3(p,2929)
break
case"cStencilFunc":H.ai(s,"$isdz")
t=s.a
p=x.a
if(t===1281)J.c3(p,2960)
else{J.bB(p,2960)
p=s.b
o=s.c
J.f7(x.a,t,p,o)}break
case"cDepthWrite":H.bT(s)
J.eR(x.a,s)
break
case"cBlendEquation":H.ai(s,"$isdy")
t=s.a
p=x.a
if(t===1281)J.c3(p,3042)
else{J.bB(p,3042)
p=s.b
o=s.c
J.eL(x.a,p,o)
J.eK(x.a,t)}break}++u
break}}n=P.fJ(0,0,0,Date.now()-new P.bG(z,!1).a,0,0)
""+u
n.k(0)},
cm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.y(b,"$isa",[G.b4],"$asa")
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
y.b5()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.K)(b),++x){w=b[x]
this.cA(w.a,w.aR())}y=this.Q
y.a1(0)
for(v=a.cy,v=new H.an(v,[H.r(v,0)]),v=v.gB(v);v.v();)y.l(0,v.d)
u=this.cw()
if(u.length!==0)P.aC("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
y=a.d
v=a.e
J.bA(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cp()
s=a.Q
r=a.z
if(t)J.eI(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.eV(q,v,y,s,0,r)
else J.eU(q,v,y,s,0)}else{s=z.a
if(r>1)J.eT(s,v,0,y,r)
else J.eS(s,v,0,y)}if(t)J.eY(z.a)},
t:{
hO:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a1(null,null,null,z)
x=c.b
w=d.b
v=H.y(c.f,"$isa",[z],"$asa")
u=J.eP(b.a)
t=G.dI(b.a,35633,x)
J.cG(b.a,u,t)
s=G.dI(b.a,35632,w)
J.cG(b.a,u,s)
if(v.length>0)J.f9(b.a,u,v,35980)
J.f6(b.a,u)
if(!H.bT(J.f5(b.a,u,35714)))H.W(J.f4(b.a,u))
z=new G.hN(b,c,d,u,P.ci(c.c,z),P.Y(z,P.b),P.Y(z,z),y,a,!1,!0)
z.ct(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
aQ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hV:{"^":"b;a,0b,c,d,e,f,r,x",
cf:function(a){var z,y,x,w
H.y(a,"$isa",[P.e],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.aK(z)},
aO:function(a){var z,y,x
H.y(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.K)(a),++x)C.a.l(y,a[x])
C.a.aK(y)},
cu:function(a,b){this.b=this.cB(!0,H.y(a,"$isa",[P.e],"$asa"),b)},
aS:function(a){return this.cu(a,null)},
cB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.y(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.K)(y),++u){t=y[u]
s=$.a6().h(0,t)
C.a.l(w,"layout (location="+H.d(v.h(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.k(z,u)
q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.a6().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.K(w,b)
C.a.l(w,"}")
return C.a.a2(w,"\n")},
t:{
ds:function(a){var z,y
z=P.e
y=[z]
return new G.hV(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.Y(z,P.D))}}},
dt:{"^":"aY;",
Z:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
cl:function(a,b,c,d,e,f,g,h,i){return G.d9("cube",a,B.fA(!0,c,d,e,f,g,h,i))},
j1:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.iD("span",null),"$isR")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).aj(y,"float")
y.setProperty(x,"left","")
x=C.w.aj(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.I(z,v)}return z},
i_:{"^":"b;",
cv:function(a,b,c){var z,y
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
y=J.l(z)
y.I(z,this.b)
y.I(z,this.d)
y.I(z,this.c)}},
i0:{"^":"i_;e,f,a,b,c,d",
cz:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dE(y,2)+" fps"
C.p.c3(this.c,b)
x=C.d.V(30*C.x.d9(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isR")
v=w.style
u=""+x+"px"
v.height=u
C.p.I(z,w)}}}],["","",,A,{"^":"",
e9:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.y(e,"$isa",[G.b4],"$asa")
z=b.dx
z.C(c)
y=b.d
z.bB(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.d(b)
w=C.a.gds(e)
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
v.dd(new T.ao(u))
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
C.a.l(e,x)
a.cm(b.cx,e,d)
if(0>=e.length)return H.k(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.K)(y),++r)A.e9(a,y[r],z,d,e)},
aZ:{"^":"dt;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
dq:{"^":"aY;d,e,f,a,b,c"},
hM:{"^":"aY;d,e,f,r,x,y,z,Q,a,b,c",
cl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eJ(v.a,36160,z)
J.fg(v.a,this.x,this.y,x,w)
if(y!==0)J.eM(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.b,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.b4(P.Y(x,w),"transforms",!1,!0))
r=new T.O(new Float32Array(16))
r.G()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.K)(v),++o)A.e9(p,v[o],r,a,s)
if(0>=s.length)return H.k(s,-1)
s.pop()}},
ck:function(){return this.cl(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fA:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.f(new Float32Array(3))
x.p(z,y,b2)
w=new T.f(new Float32Array(3))
w.p(b0,y,b2)
v=new T.f(new Float32Array(3))
v.p(b0,b1,b2)
u=new T.f(new Float32Array(3))
u.p(z,b1,b2)
t=-b2
s=new T.f(new Float32Array(3))
s.p(z,y,t)
r=new T.f(new Float32Array(3))
r.p(z,b1,t)
q=new T.f(new Float32Array(3))
q.p(b0,b1,t)
p=new T.f(new Float32Array(3))
p.p(b0,y,t)
o=new T.f(new Float32Array(3))
o.p(z,b1,t)
n=new T.f(new Float32Array(3))
n.p(z,b1,b2)
m=new T.f(new Float32Array(3))
m.p(b0,b1,b2)
l=new T.f(new Float32Array(3))
l.p(b0,b1,t)
k=new T.f(new Float32Array(3))
k.p(b0,y,b2)
j=new T.f(new Float32Array(3))
j.p(z,y,b2)
i=new T.f(new Float32Array(3))
i.p(z,y,t)
h=new T.f(new Float32Array(3))
h.p(b0,y,t)
g=new T.f(new Float32Array(3))
g.p(b0,y,t)
f=new T.f(new Float32Array(3))
f.p(b0,b1,t)
e=new T.f(new Float32Array(3))
e.p(b0,b1,b2)
d=new T.f(new Float32Array(3))
d.p(b0,y,b2)
c=new T.f(new Float32Array(3))
c.p(z,y,t)
b=new T.f(new Float32Array(3))
b.p(z,y,b2)
y=new T.f(new Float32Array(3))
y.p(z,b1,b2)
a=new T.f(new Float32Array(3))
a.p(z,b1,t)
t=[T.f]
a0=H.m([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.q(new Float32Array(2))
z.q(a7,a9)
y=new T.q(new Float32Array(2))
y.q(a6,a9)
x=new T.q(new Float32Array(2))
x.q(a6,a8)
w=new T.q(new Float32Array(2))
w.q(a7,a8)
v=new T.q(new Float32Array(2))
v.q(a6,a9)
u=new T.q(new Float32Array(2))
u.q(a6,a8)
s=new T.q(new Float32Array(2))
s.q(a7,a8)
r=new T.q(new Float32Array(2))
r.q(a7,a9)
q=new T.q(new Float32Array(2))
q.q(a7,a8)
p=new T.q(new Float32Array(2))
p.q(a7,a9)
o=new T.q(new Float32Array(2))
o.q(a6,a9)
n=new T.q(new Float32Array(2))
n.q(a6,a8)
m=new T.q(new Float32Array(2))
m.q(a6,a8)
l=new T.q(new Float32Array(2))
l.q(a7,a8)
k=new T.q(new Float32Array(2))
k.q(a7,a9)
j=new T.q(new Float32Array(2))
j.q(a6,a9)
i=new T.q(new Float32Array(2))
i.q(a6,a9)
h=new T.q(new Float32Array(2))
h.q(a6,a8)
g=new T.q(new Float32Array(2))
g.q(a7,a8)
f=new T.q(new Float32Array(2))
f.q(a7,a9)
e=new T.q(new Float32Array(2))
e.q(a7,a9)
d=new T.q(new Float32Array(2))
d.q(a6,a9)
c=new T.q(new Float32Array(2))
c.q(a6,a8)
b=new T.q(new Float32Array(2))
b.q(a7,a8)
a1=H.m([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.q])
a2=new G.d8(!1,H.m([],[G.cc]),H.m([],[G.cd]),H.m([],t),P.Y(P.e,[P.a,,]))
a2.a5("aTexUV")
a2.a5("aNormal")
a2.aN(6)
a2.ah(a0)
a2.ag("aTexUV",a1)
for(a3=0;z=$.eC(),a3<6;++a3){a4=z[a3]
a2.cg("aNormal",H.m([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",h4:{"^":"b;a,b,c",
cr:function(a){var z,y
a=document
z=W.aW
y={func:1,ret:-1,args:[z]}
W.az(a,"keydown",H.n(new D.h6(this),y),!1,z)
W.az(a,"keyup",H.n(new D.h7(this),y),!1,z)},
t:{
h5:function(a){var z=P.D
z=new D.h4(P.a1(null,null,null,z),P.a1(null,null,null,z),P.a1(null,null,null,z))
z.cr(a)
return z}}},h6:{"^":"o:11;a",
$1:function(a){var z
H.i(a,"$isaW")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},h7:{"^":"o:11;a",
$1:function(a){var z
H.i(a,"$isaW")
z=this.a
z.a.bH(0,a.which)
z.c.l(0,a.which)}},hj:{"^":"b;a,b,c,d,e,f,r,x",
cs:function(a){var z,y,x
if(a==null)a=document
z=J.l(a)
y=z.gbE(a)
x=H.r(y,0)
W.az(y.a,y.b,H.n(new D.hl(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbD(a)
y=H.r(x,0)
W.az(x.a,x.b,H.n(new D.hm(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbF(a)
x=H.r(y,0)
W.az(y.a,y.b,H.n(new D.hn(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbG(a)
x=H.r(z,0)
W.az(z.a,z.b,H.n(new D.ho(this),{func:1,ret:-1,args:[x]}),!1,x)},
t:{
hk:function(a){var z=P.D
z=new D.hj(P.a1(null,null,null,z),P.a1(null,null,null,z),P.a1(null,null,null,z),0,0,0,0,0)
z.cs(a)
return z}}},hl:{"^":"o:3;a",
$1:function(a){var z,y
H.i(a,"$isT")
a.preventDefault()
z=this.a
y=J.l(a)
z.r=H.N(y.gbC(a).a)
z.x=H.N(y.gbC(a).b)
z.d=a.movementX
z.e=a.movementY}},hm:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isT")
a.preventDefault()
P.aC("BUTTON "+H.d(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hn:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isT")
a.preventDefault()
z=this.a
z.a.bH(0,a.button)
z.c.l(0,a.button)}},ho:{"^":"o:24;a",
$1:function(a){H.i(a,"$isaJ")
a.preventDefault()
this.a.f=H.N(C.ab.gdi(a))}},hw:{"^":"fo;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bv:function(a){var z,y
z=C.i.dm(H.y(a,"$isj",[P.b],"$asj"),0,new A.ka(),P.D)
if(typeof z!=="number")return H.aB(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ka:{"^":"o:25;",
$2:function(a,b){var z,y
H.N(a)
z=J.aj(b)
if(typeof a!=="number")return a.J()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ao:{"^":"b;a",
C:function(a){var z,y
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
k:function(a){return"[0] "+this.O(0).k(0)+"\n[1] "+this.O(1).k(0)+"\n[2] "+this.O(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.k(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ao){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gA:function(a){return A.bv(this.a)},
O:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.k(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.k(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.k(y,x)
z[2]=y[x]
return new T.f(z)},
dd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},O:{"^":"b;a",
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
k:function(a){return"[0] "+this.O(0).k(0)+"\n[1] "+this.O(1).k(0)+"\n[2] "+this.O(2).k(0)+"\n[3] "+this.O(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.k(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.O){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.bv(this.a)},
O:function(a){var z,y,x
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
return new T.aI(z)},
G:function(){var z=this.a
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
bB:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},q:{"^":"b;a",
q:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.bv(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gX:function(a){return this.a[0]},
gS:function(a){return this.a[1]}},f:{"^":"b;a",
p:function(a,b,c){var z=this.a
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
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.f){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.bv(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gab())},
gab:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
ay:function(a){var z,y,x
z=Math.sqrt(this.gab())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aw:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bs:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.f(new Float32Array(3))
z.p(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
ae:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
gX:function(a){return this.a[0]},
gS:function(a){return this.a[1]},
gac:function(a){return this.a[2]},
t:{
af:function(a,b,c){var z=new T.f(new Float32Array(3))
z.p(a,b,c)
return z}}},aI:{"^":"b;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aI){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.bv(this.a)},
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
gX:function(a){return this.a[0]},
gS:function(a){return this.a[1]},
gac:function(a){return this.a[2]},
gbZ:function(a){return this.a[3]}}}],["","",,F,{"^":"",
eg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
z={}
y=document
x=C.q.c1(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.i0(0,0,x,w,y.createElement("div"),R.j1("blue","gray",90,30))
u.cv(x,"blue","gray")
t=H.i(C.q.dv(y,"#webgl-canvas"),"$isc9")
s=new G.fq(t)
y=P.e
x=P.b
v=(t&&C.H).c0(t,"webgl2",P.df(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.W(P.d5('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.d(J.f3(v))
if($.ea>0)P.aC("I: "+r)
J.eN(v,0,0,0,1)
J.bB(v,2929)
v=new Float32Array(3)
r=D.h5(null)
q=D.hk(t)
p=new T.O(new Float32Array(16))
p.G()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hw(20,0,0,0,new T.f(v),-0.02,r,q,p,new T.f(o),new T.f(n),new T.f(m),new T.f(new Float32Array(3)),"camera:orbit",!1,!0)
v=new Float32Array(16)
r=new Float32Array(16)
q=new T.O(new Float32Array(16))
q.G()
k=new G.hx(l,new T.O(v),new T.O(r),q,1,-40,40,-40,-40,100,P.Y(y,x),"othrogrpahic",!1,!0)
k.aT()
x=H.m([],[A.dq])
j=new A.hM(null,s,x,17664,0,0,0,0,"shadow",!1,!0)
j.d=new G.fS(s,null,null,null,null)
v=G.hO("textured",s,$.eF(),$.eE())
r=H.m([k],[G.b4])
q=[A.aZ]
p=H.m([],q)
C.a.l(x,new A.dq(v,r,p,"objects",!1,!0))
i=G.cj("mat1")
i.d.i(0,"uColor",$.em())
h=G.cj("mat2")
h.d.i(0,"uColor",$.eo())
g=G.cj("mat3")
g.d.i(0,"uColor",$.en())
x=R.cl(v,!0,1,0,1,0,15,3,3)
r=H.m([],q)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.G()
m=new T.O(new Float32Array(16))
m.G()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new A.aZ(i,x,r,new T.ao(o),n,m,new T.f(f),new T.f(e),new T.f(d),new T.f(new Float32Array(3)),"side1",!1,!0)
c.Z(-3,0,0)
x=R.cl(v,!0,1,0,1,0,3,3,15)
r=H.m([],q)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.G()
m=new T.O(new Float32Array(16))
m.G()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
b=new A.aZ(h,x,r,new T.ao(o),n,m,new T.f(f),new T.f(e),new T.f(d),new T.f(new Float32Array(3)),"side2",!1,!0)
b.Z(-15,0,18)
x=R.cl(v,!0,1,0,1,0,3,12,3)
r=H.m([],q)
o=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.G()
m=new T.O(new Float32Array(16))
m.G()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
a=new A.aZ(g,x,r,new T.ao(o),n,m,new T.f(f),new T.f(e),new T.f(d),new T.f(new Float32Array(3)),"side3a",!1,!0)
a.Z(15,9,0)
x=new T.f(new Float32Array(3))
x.p(-3,-3,3)
r=new T.f(new Float32Array(3))
r.p(3,-3,3)
o=new T.f(new Float32Array(3))
o.p(-3,3,3)
n=new T.f(new Float32Array(3))
n.p(-3,-3,-3)
m=new T.f(new Float32Array(3))
m.p(-3,3,-3)
f=new T.f(new Float32Array(3))
f.p(3,-3,-3)
e=[T.f]
a0=H.m([x,r,o,n,m,f],e)
x=new T.f(new Float32Array(3))
x.p(-3,3,-3)
r=new T.f(new Float32Array(3))
r.p(-3,3,3)
o=new T.f(new Float32Array(3))
o.p(3,-3,3)
n=new T.f(new Float32Array(3))
n.p(3,-3,-3)
m=new T.f(new Float32Array(3))
m.p(3,-3,3)
f=new T.f(new Float32Array(3))
f.p(-3,-3,3)
d=new T.f(new Float32Array(3))
d.p(-3,-3,-3)
a1=new T.f(new Float32Array(3))
a1.p(3,-3,-3)
a2=new T.f(new Float32Array(3))
a2.p(-3,-3,-3)
a3=new T.f(new Float32Array(3))
a3.p(-3,-3,3)
a4=new T.f(new Float32Array(3))
a4.p(-3,3,3)
a5=new T.f(new Float32Array(3))
a5.p(-3,3,-3)
a6=H.m([x,r,o,n,m,f,d,a1,a2,a3,a4,a5],e)
x=new T.q(new Float32Array(2))
x.q(0,0)
r=new T.q(new Float32Array(2))
r.q(1,0)
o=new T.q(new Float32Array(2))
o.q(1,1)
n=new T.q(new Float32Array(2))
n.q(1,0)
m=new T.q(new Float32Array(2))
m.q(1,1)
f=new T.q(new Float32Array(2))
f.q(0,1)
d=[T.q]
a7=H.m([x,r,o,n,m,f],d)
x=new T.q(new Float32Array(2))
x.q(0,1)
r=new T.q(new Float32Array(2))
r.q(0,0)
o=new T.q(new Float32Array(2))
o.q(1,0)
n=new T.q(new Float32Array(2))
n.q(1,1)
m=new T.q(new Float32Array(2))
m.q(1,1)
f=new T.q(new Float32Array(2))
f.q(0,1)
a1=new T.q(new Float32Array(2))
a1.q(0,0)
a2=new T.q(new Float32Array(2))
a2.q(1,0)
a3=new T.q(new Float32Array(2))
a3.q(0,0)
a4=new T.q(new Float32Array(2))
a4.q(1,0)
a5=new T.q(new Float32Array(2))
a5.q(1,1)
a8=new T.q(new Float32Array(2))
a8.q(0,1)
a9=H.m([x,r,o,n,m,f,a1,a2,a3,a4,a5,a8],d)
b0=new G.d8(!1,H.m([],[G.cc]),H.m([],[G.cd]),H.m([],e),P.Y(y,[P.a,,]))
b0.a5("aTexUV")
b0.a5("aNormal")
b0.ci(2)
b0.ah(a0)
b0.ag("aTexUV",a7)
b0.aN(3)
b0.ah(a6)
b0.ag("aTexUV",a9)
b0.co()
y=G.d9("wedge",v,b0)
x=H.m([],q)
v=new Float32Array(9)
r=new T.O(new Float32Array(16))
r.G()
o=new Float32Array(16)
n=new T.O(o)
n.G()
m=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
b1=new A.aZ(g,y,x,new T.ao(v),r,n,new T.f(m),new T.f(f),new T.f(e),new T.f(new Float32Array(3)),"side3b",!1,!0)
b2=Math.cos(3.141592653589793)
b3=Math.sin(3.141592653589793)
y=o[0]
x=o[8]
v=-b3
r=o[1]
n=o[9]
m=o[2]
f=o[10]
e=o[3]
d=o[11]
o[0]=y*b2+x*v
o[1]=r*b2+n*v
o[2]=m*b2+f*v
o[3]=e*b2+d*v
o[8]=y*b3+x*b2
o[9]=r*b3+n*b2
o[10]=m*b3+f*b2
o[11]=e*b3+d*b2
b1.Z(15,24,0)
q=H.m([],q)
y=new Float32Array(9)
x=new T.O(new Float32Array(16))
x.G()
v=new Float32Array(16)
r=new T.O(v)
r.G()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
f=new Float32Array(3)
C.a.l(q,c)
C.a.l(q,b)
C.a.l(q,a)
C.a.l(q,b1)
v[12]=v[12]+v[1]*-20
v[13]=v[13]+v[5]*-20
v[14]=v[14]+v[9]*-20
C.a.l(p,new A.aZ(null,null,q,new T.ao(y),x,r,new T.f(o),new T.f(n),new T.f(m),new T.f(f),"triangle",!1,!0))
y=new F.ko(t,k,j)
y.$1(null)
x=W.a0
W.az(window,"resize",H.n(y,{func:1,ret:-1,args:[x]}),!1,x)
l.id=0.6108652381980153
l.go=-0.7853981633974483
z.a=0
new F.kn(z,l,j,u).$1(0)},
ko:{"^":"o:26;a,b,c",
$1:function(a){var z,y,x
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aC("size change "+H.d(y)+" "+H.d(x))
this.b.cj(y,x)
z=this.c
z.z=y
z.Q=x}},
kn:{"^":"o:27;a,b,c,d",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cz(b2)
if(typeof b2!=="number")return b2.aM()
z=this.a
z.a=b2+0
y=this.b
x=y.r1
w=x.a
if(w.w(0,0)||w.w(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aH()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aH()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.w(0,37))y.go+=0.03
else if(v.w(0,39))y.go-=0.03
if(v.w(0,38))y.id+=0.03
else if(v.w(0,40))y.id-=0.03
if(v.w(0,33))y.fy*=0.99
else if(v.w(0,34))y.fy*=1.01
if(v.w(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aH()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.da(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.Z(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.f(new Float32Array(3))
o.p(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
n=new Float32Array(3)
m=new T.f(n)
m.C(u)
m.ae(0,t)
m.ay(0)
l=o.bs(m)
l.ay(0)
k=m.bs(l)
k.ay(0)
t=l.aw(u)
j=k.aw(u)
u=m.aw(u)
i=l.a
h=i[0]
g=k.a
f=g[0]
e=n[0]
d=i[1]
c=g[1]
b=n[1]
i=i[2]
g=g[2]
n=n[2]
v[15]=1
v[14]=-u
v[13]=-j
v[12]=-t
v[11]=0
v[10]=n
v[9]=g
v[8]=i
v[7]=0
v[6]=b
v[5]=c
v[4]=d
v[3]=0
v[2]=e
v[1]=f
v[0]=h
v[12]=r
v[13]=q
v[14]=p
h=y.k1
f=y.f
e=f.a
e[0]=v[2]
e[1]=v[6]
e[2]=v[10]
h=-h
a=Math.sqrt(f.gab())
r=e[0]/a
q=e[1]/a
p=e[2]/a
a0=Math.cos(h)
a1=Math.sin(h)
a2=1-a0
a3=r*r*a2+a0
h=p*a1
a4=r*q*a2-h
e=q*a1
a5=r*p*a2+e
a6=q*r*a2+h
a7=q*q*a2+a0
h=r*a1
a8=q*p*a2-h
a9=p*r*a2-e
b0=p*q*a2+h
b1=p*p*a2+a0
h=v[0]
e=v[4]
f=v[8]
d=v[1]
c=v[5]
b=v[9]
i=v[2]
g=v[6]
n=v[10]
t=v[3]
j=v[7]
u=v[11]
v[0]=h*a3+e*a6+f*a9
v[1]=d*a3+c*a6+b*a9
v[2]=i*a3+g*a6+n*a9
v[3]=t*a3+j*a6+u*a9
v[4]=h*a4+e*a7+f*b0
v[5]=d*a4+c*a7+b*b0
v[6]=i*a4+g*a7+n*b0
v[7]=t*a4+j*a7+u*b0
v[8]=h*a5+e*a8+f*b1
v[9]=d*a5+c*a8+b*b1
v[10]=i*a5+g*a8+n*b1
v[11]=t*a5+j*a8+u*b1
w.c.a1(0)
w.b.a1(0)
x.e=0
x.d=0
x.f=0
x.c.a1(0)
x.b.a1(0)
y.k1+=0.01
x=y.id
y=y.go
this.c.ck()
C.ac.gd3(window).bJ(this,-1)
this.d.cz(z.a,H.d(x*180/3.141592653589793)+"<br>"+H.d(y*180/3.141592653589793))}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dc.prototype
return J.db.prototype}if(typeof a=="string")return J.bo.prototype
if(a==null)return J.h2.prototype
if(typeof a=="boolean")return J.h1.prototype
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.bX(a)}
J.bd=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.bX(a)}
J.eb=function(a){if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.bX(a)}
J.k6=function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.k7=function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.ec=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.b)return a
return J.bX(a)}
J.bW=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b5.prototype
return a}
J.aE=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).E(a,b)}
J.a7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k6(a).T(a,b)}
J.bh=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kk(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).h(a,b)}
J.cE=function(a,b){return J.ec(a).ak(a,b)}
J.bz=function(a,b){return J.l(a).cS(a,b)}
J.eG=function(a,b,c){return J.l(a).cT(a,b,c)}
J.cF=function(a,b){return J.l(a).bc(a,b)}
J.eH=function(a,b,c,d){return J.l(a).d0(a,b,c,d)}
J.cG=function(a,b,c){return J.l(a).be(a,b,c)}
J.eI=function(a,b){return J.l(a).d5(a,b)}
J.c0=function(a,b,c){return J.l(a).bf(a,b,c)}
J.eJ=function(a,b,c){return J.l(a).bh(a,b,c)}
J.cH=function(a,b,c){return J.l(a).bi(a,b,c)}
J.bA=function(a,b){return J.l(a).d8(a,b)}
J.eK=function(a,b){return J.l(a).bj(a,b)}
J.eL=function(a,b,c){return J.l(a).bk(a,b,c)}
J.cI=function(a,b,c,d){return J.l(a).bl(a,b,c,d)}
J.eM=function(a,b){return J.l(a).bm(a,b)}
J.eN=function(a,b,c,d,e){return J.l(a).bn(a,b,c,d,e)}
J.eO=function(a,b){return J.k7(a).M(a,b)}
J.c1=function(a,b,c){return J.bd(a).dc(a,b,c)}
J.c2=function(a){return J.l(a).bp(a)}
J.eP=function(a){return J.l(a).bq(a)}
J.eQ=function(a){return J.l(a).dh(a)}
J.eR=function(a,b){return J.l(a).bt(a,b)}
J.c3=function(a,b){return J.l(a).bu(a,b)}
J.eS=function(a,b,c,d){return J.l(a).bv(a,b,c,d)}
J.eT=function(a,b,c,d,e){return J.l(a).dj(a,b,c,d,e)}
J.eU=function(a,b,c,d,e){return J.l(a).bw(a,b,c,d,e)}
J.eV=function(a,b,c,d,e,f){return J.l(a).dk(a,b,c,d,e,f)}
J.eW=function(a,b){return J.eb(a).u(a,b)}
J.bB=function(a,b){return J.l(a).bx(a,b)}
J.eX=function(a,b){return J.l(a).by(a,b)}
J.eY=function(a){return J.l(a).dl(a)}
J.eZ=function(a,b){return J.l(a).F(a,b)}
J.f_=function(a){return J.l(a).gd4(a)}
J.aj=function(a){return J.B(a).gA(a)}
J.bC=function(a){return J.eb(a).gB(a)}
J.aQ=function(a){return J.bd(a).gj(a)}
J.f0=function(a){return J.l(a).gdu(a)}
J.f1=function(a){return J.l(a).gdC(a)}
J.f2=function(a){return J.bW(a).gbZ(a)}
J.bD=function(a){return J.bW(a).gX(a)}
J.c4=function(a){return J.bW(a).gS(a)}
J.cJ=function(a){return J.bW(a).gac(a)}
J.c5=function(a,b){return J.l(a).Y(a,b)}
J.f3=function(a){return J.l(a).ad(a)}
J.f4=function(a,b){return J.l(a).aB(a,b)}
J.f5=function(a,b,c){return J.l(a).aC(a,b,c)}
J.cK=function(a,b,c){return J.l(a).aG(a,b,c)}
J.f6=function(a,b){return J.l(a).bA(a,b)}
J.cL=function(a){return J.l(a).dw(a)}
J.f7=function(a,b,c,d){return J.l(a).aL(a,b,c,d)}
J.f8=function(a){return J.ec(a).dD(a)}
J.bi=function(a){return J.B(a).k(a)}
J.f9=function(a,b,c,d){return J.l(a).dF(a,b,c,d)}
J.fa=function(a,b,c){return J.l(a).bM(a,b,c)}
J.fb=function(a,b,c){return J.l(a).bN(a,b,c)}
J.c6=function(a,b,c){return J.l(a).bO(a,b,c)}
J.fc=function(a,b,c){return J.l(a).bP(a,b,c)}
J.cM=function(a,b,c){return J.l(a).bQ(a,b,c)}
J.cN=function(a,b,c){return J.l(a).bR(a,b,c)}
J.cO=function(a,b,c){return J.l(a).bS(a,b,c)}
J.cP=function(a,b,c,d){return J.l(a).bT(a,b,c,d)}
J.cQ=function(a,b,c,d){return J.l(a).bU(a,b,c,d)}
J.fd=function(a,b){return J.l(a).bV(a,b)}
J.fe=function(a,b,c){return J.l(a).dG(a,b,c)}
J.ff=function(a,b,c,d,e,f,g){return J.l(a).bW(a,b,c,d,e,f,g)}
J.fg=function(a,b,c,d,e){return J.l(a).bY(a,b,c,d,e)}
I.aO=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bE.prototype
C.H=W.c9.prototype
C.w=W.fx.prototype
C.p=W.fF.prototype
C.I=W.fH.prototype
C.J=W.fV.prototype
C.q=W.fW.prototype
C.K=J.h.prototype
C.a=J.bm.prototype
C.x=J.db.prototype
C.d=J.dc.prototype
C.r=J.bn.prototype
C.h=J.bo.prototype
C.R=J.bp.prototype
C.i=H.hp.prototype
C.m=H.hr.prototype
C.V=W.hs.prototype
C.A=J.hz.prototype
C.B=W.hJ.prototype
C.G=W.i6.prototype
C.v=J.b5.prototype
C.ab=W.aJ.prototype
C.ac=W.ij.prototype
C.e=new P.jd()
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
C.y=function(hooks) { return hooks; }

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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.S=H.m(I.aO(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.T=H.m(I.aO(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.U=H.m(I.aO([]),[P.e])
C.t=H.m(I.aO(["bind","if","ref","repeat","syntax"]),[P.e])
C.u=H.m(I.aO(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.W=new G.C("vec3","vertex btangents",0)
C.c=new G.C("vec3","",0)
C.X=new G.C("vec4","delta from light",0)
C.n=new G.C("","",0)
C.C=new G.C("vec3","vertex coordinates",0)
C.Y=new G.C("vec3","vertex binormals",0)
C.D=new G.C("vec4","for wireframe",0)
C.Z=new G.C("vec4","per vertex color",0)
C.a_=new G.C("float","for normal maps",0)
C.j=new G.C("mat4","",0)
C.a1=new G.C("mat4","",4)
C.a0=new G.C("mat4","",128)
C.b=new G.C("float","",0)
C.a2=new G.C("float","",4)
C.a3=new G.C("float","depth for shadowmaps",0)
C.f=new G.C("sampler2D","",0)
C.a4=new G.C("float","for bump maps",0)
C.a5=new G.C("vec2","texture uvs",0)
C.a6=new G.C("float","time since program start in sec",0)
C.k=new G.C("vec2","",0)
C.a7=new G.C("samplerCube","",0)
C.l=new G.C("vec4","",0)
C.a8=new G.C("vec3","vertex normals",0)
C.a9=new G.C("sampler2DShadow","",0)
C.E=new G.C("vec3","per vertex color",0)
C.F=new G.C("mat3","",0)
C.aa=new G.C("vec3","vertex tangents",0)
$.a8=0
$.aR=null
$.cT=null
$.cq=!1
$.ee=null
$.e5=null
$.ej=null
$.bU=null
$.bY=null
$.cx=null
$.aL=null
$.b7=null
$.b8=null
$.cr=!1
$.I=C.e
$.ad=null
$.cb=null
$.d3=null
$.d2=null
$.d_=null
$.cZ=null
$.cY=null
$.cX=null
$.ea=0
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
I.$lazy(y,x,w)}})(["kL","eq",function(){return H.ed("_$dart_dartClosure")},"lo","cB",function(){return H.ed("_$dart_js")},"m8","es",function(){return H.aa(H.bM({
toString:function(){return"$receiver$"}}))},"m9","et",function(){return H.aa(H.bM({$method$:null,
toString:function(){return"$receiver$"}}))},"ma","eu",function(){return H.aa(H.bM(null))},"mb","ev",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"me","ey",function(){return H.aa(H.bM(void 0))},"mf","ez",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"md","ex",function(){return H.aa(H.dA(null))},"mc","ew",function(){return H.aa(function(){try{null.$method$}catch(z){return z.message}}())},"mh","eB",function(){return H.aa(H.dA(void 0))},"mg","eA",function(){return H.aa(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mr","cC",function(){return P.im()},"mI","bg",function(){return[]},"kI","ep",function(){return{}},"mz","eD",function(){return P.ci(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"mA","cD",function(){return P.Y(P.e,P.bk)},"lW","er",function(){return new G.dz(1281,0,4294967295)},"kB","el",function(){return new G.dy(1281,1281,1281)},"mG","a6",function(){return P.df(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a7,"uAnimationTable",C.f,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.e,G.C)},"kE","em",function(){return T.af(0,0,1)},"kG","eo",function(){return T.af(1,0,0)},"kF","en",function(){return T.af(0,1,0)},"mN","eF",function(){var z,y
z=G.ds("SolidColor")
y=[P.e]
z.cf(H.m(["aPosition"],y))
z.aO(H.m(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aS(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"mM","eE",function(){var z,y
z=G.ds("SolidColorF")
y=[P.e]
z.aO(H.m(["uColor"],y))
z.aS(H.m(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"mw","eC",function(){return H.m([T.af(0,0,1),T.af(0,0,-1),T.af(0,1,0),T.af(0,-1,0),T.af(1,0,0),T.af(-1,0,0)],[T.f])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.G,args:[W.T]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.e,args:[P.D]},{func:1,ret:P.Q,args:[W.a9]},{func:1,ret:P.Q,args:[P.e]},{func:1,ret:P.G,args:[W.aW]},{func:1,ret:P.Q,args:[W.R,P.e,P.e,W.bs]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a2]},{func:1,ret:[P.ab,,],args:[,]},{func:1,ret:P.Q,args:[W.u]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.G,args:[P.E]},{func:1,args:[W.a0]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.G,args:[W.aJ]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.ku(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(F.eg,[])
else F.eg([])})})()
//# sourceMappingURL=triangle.dart.js.map
