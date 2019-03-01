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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bb=function(){}
var dart=[["","",,H,{"^":"",lm:{"^":"b;a"}}],["","",,J,{"^":"",
cy:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bX:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cx==null){H.kg()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dD("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cB()]
if(v!=null)return v
v=H.kl(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cB(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
E:function(a,b){return a===b},
gA:function(a){return H.b_(a)},
k:["c9",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h0:{"^":"h;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isQ:1},
h1:{"^":"h;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isG:1},
cg:{"^":"h;",
gA:function(a){return 0},
k:["cb",function(a){return String(a)}]},
hy:{"^":"cg;"},
b3:{"^":"cg;"},
bo:{"^":"cg;",
k:function(a){var z=a[$.eq()]
if(z==null)return this.cb(a)
return"JavaScript function for "+H.e(J.bh(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbj:1},
bl:{"^":"h;$ti",
l:function(a,b){H.A(b,H.r(a,0))
if(!!a.fixed$length)H.W(P.z("add"))
a.push(b)},
K:function(a,b){var z
H.y(b,"$isj",[H.r(a,0)],"$asj")
if(!!a.fixed$length)H.W(P.z("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a0:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gdr:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.da())},
bc:function(a,b){var z,y
H.n(b,{func:1,ret:P.Q,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aF(a))}return!1},
c4:function(a,b){if(!!a.immutable$list)H.W(P.z("sort"))
H.hX(a,J.jS(),H.r(a,0))},
aJ:function(a){return this.c4(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aD(a[z],b))return!0
return!1},
k:function(a){return P.ce(a,"[","]")},
gB:function(a){return new J.fj(a,a.length,0,[H.r(a,0)])},
gA:function(a){return H.b_(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.ba(a,b))
return a[b]},
i:function(a,b,c){H.A(c,H.r(a,0))
if(!!a.immutable$list)H.W(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ba(a,b))
a[b]=c},
$isw:1,
$asw:I.bb,
$isj:1,
$isa:1,
t:{
h_:function(a,b){return J.cf(H.m(a,[b]))},
cf:function(a){H.bw(a)
a.fixed$length=Array
return a},
lk:[function(a,b){return J.eO(H.eh(a,"$isV"),H.eh(b,"$isV"))},"$2","jS",8,0,28]}},
ll:{"^":"bl;$ti"},
fj:{"^":"b;a,b,c,0d,$ti",
saT:function(a){this.d=H.A(a,H.r(this,0))},
gD:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.K(z))
x=this.c
if(x>=y){this.saT(null)
return!1}this.saT(z[x]);++this.c
return!0},
$isaT:1},
bm:{"^":"h;",
M:function(a,b){var z
H.cz(b)
if(typeof b!=="number")throw H.c(H.b8(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.ga9(b)
if(this.ga9(a)===z)return 0
if(this.ga9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga9:function(a){return a===0?1/a<0:a<0},
bK:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.z(""+a+".toInt()"))},
d8:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.z(""+a+".ceil()"))},
d9:function(a,b,c){if(this.M(b,c)>0)throw H.c(H.b8(b))
if(this.M(a,b)<0)return b
if(this.M(a,c)>0)return c
return a},
dD:function(a,b){var z
if(b>20)throw H.c(P.bK(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ga9(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
cd:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b9(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.b9(a,b)},
b9:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.z("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
b7:function(a,b){var z
if(a>0)z=this.cX(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cX:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.c(H.b8(b))
return a>b},
$isV:1,
$asV:function(){return[P.E]},
$isag:1,
$isE:1},
dc:{"^":"bm;",$isD:1},
db:{"^":"bm;"},
bn:{"^":"h;",
aj:function(a,b){if(b>=a.length)throw H.c(H.ba(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.v(b)
if(typeof b!=="string")throw H.c(P.cR(b,null,null))
return a+b},
c6:function(a,b,c){var z
if(c>a.length)throw H.c(P.bK(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c5:function(a,b){return this.c6(a,b,0)},
c8:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bL(b,null,null))
if(b>c)throw H.c(P.bL(b,null,null))
if(c>a.length)throw H.c(P.bL(c,null,null))
return a.substring(b,c)},
c7:function(a,b){return this.c8(a,b,null)},
dC:function(a){return a.toLowerCase()},
da:function(a,b,c){if(c>a.length)throw H.c(P.bK(c,0,a.length,null,null))
return H.ks(a,b,c)},
M:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.c(H.b8(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.ba(a,b))
return a[b]},
$isw:1,
$asw:I.bb,
$isV:1,
$asV:function(){return[P.d]},
$ishx:1,
$isd:1}}],["","",,H,{"^":"",
da:function(){return new P.cm("No element")},
fZ:function(){return new P.cm("Too many elements")},
hX:function(a,b,c){H.y(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.D,args:[c,c]})
H.bp(a,0,J.aO(a)-1,b,c)},
bp:function(a,b,c,d,e){H.y(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.hW(a,b,c,d,e)
else H.hV(a,b,c,d,e)},
hW:function(a,b,c,d,e){var z,y,x,w,v
H.y(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.bc(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a7(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hV:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.y(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.d.U(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.U(b+a0,2)
v=w-z
u=w+z
t=J.bc(a)
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
if(typeof i!=="number")return i.a2()
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
if(typeof e!=="number")return e.a2()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.S()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.S()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a2()
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
if(m<y&&l>x){for(;J.aD(a1.$2(t.h(a,m),r),0);)++m
for(;J.aD(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a2()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bp(a,m,l,a1,a2)}else H.bp(a,m,l,a1,a2)},
d1:{"^":"j;"},
bJ:{"^":"d1;$ti",
gB:function(a){return new H.dg(this,this.gj(this),0,[H.cw(this,"bJ",0)])},
az:function(a,b){return this.ca(0,H.n(b,{func:1,ret:P.Q,args:[H.cw(this,"bJ",0)]}))}},
dg:{"^":"b;a,b,c,0d,$ti",
saU:function(a){this.d=H.A(a,H.r(this,0))},
gD:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bc(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aF(z))
w=this.c
if(w>=x){this.saU(null)
return!1}this.saU(y.u(z,w));++this.c
return!0},
$isaT:1},
hc:{"^":"bJ;a,b,$ti",
gj:function(a){return J.aO(this.a)},
u:function(a,b){return this.b.$1(J.eW(this.a,b))},
$asbJ:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dE:{"^":"j;a,b,$ti",
gB:function(a){return new H.ih(J.bC(this.a),this.b,this.$ti)}},
ih:{"^":"aT;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gD(z)))return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bI:{"^":"b;$ti"}}],["","",,H,{"^":"",
aC:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k8:function(a){return init.types[H.N(a)]},
kj:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bh(a)
if(typeof z!=="string")throw H.c(H.b8(a))
return z},
b_:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b0:function(a){return H.hz(a)+H.bQ(H.ah(a),0,null)},
hz:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb3){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aC(w.length>1&&C.h.aj(w,0)===36?C.h.c7(w,1):w)},
aG:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hG:function(a){var z=H.aG(a).getFullYear()+0
return z},
hE:function(a){var z=H.aG(a).getMonth()+1
return z},
hA:function(a){var z=H.aG(a).getDate()+0
return z},
hB:function(a){var z=H.aG(a).getHours()+0
return z},
hD:function(a){var z=H.aG(a).getMinutes()+0
return z},
hF:function(a){var z=H.aG(a).getSeconds()+0
return z},
hC:function(a){var z=H.aG(a).getMilliseconds()+0
return z},
bv:function(a){throw H.c(H.b8(a))},
k:function(a,b){if(a==null)J.aO(a)
throw H.c(H.ba(a,b))},
ba:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.N(J.aO(a))
if(!(b<0)){if(typeof z!=="number")return H.bv(z)
y=b>=z}else y=!0
if(y)return P.F(b,a,"index",null,z)
return P.bL(b,"index",null)},
b8:function(a){return new P.aE(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dn()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ek})
z.name=""}else z.toString=H.ek
return z},
ek:function(){return J.bh(this.dartException)},
W:function(a){throw H.c(a)},
K:function(a){throw H.c(P.aF(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ku(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.b7(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ch(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dm(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.es()
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
if(l)return z.$1(H.dm(H.v(y),m))}}return z.$1(new H.id(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.du()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.du()
return a},
be:function(a){var z
if(a==null)return new H.dU(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dU(a)},
k4:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
ki:function(a,b,c,d,e,f){H.i(a,"$isbj")
switch(H.N(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d5("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var z
H.N(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ki)
a.$identity=z
return z},
ft:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hK(z).r}else x=d
w=e?Object.create(new H.hY().constructor.prototype):Object.create(new H.c7(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.k8,x)
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
fq:function(a,b,c,d){var z=H.c8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cW:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fs(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fq(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.J()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aP
if(v==null){v=H.bF("self")
$.aP=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.J()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aP
if(v==null){v=H.bF("self")
$.aP=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fr:function(a,b,c,d){var z,y
z=H.c8
y=H.cU
switch(b?-1:a){case 0:throw H.c(H.hQ("Intercepted function with no arguments."))
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
z=$.aP
if(z==null){z=H.bF("self")
$.aP=z}y=$.cT
if(y==null){y=H.bF("receiver")
$.cT=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fr(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a8
if(typeof y!=="number")return y.J()
$.a8=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a8
if(typeof y!=="number")return y.J()
$.a8=y+1
return new Function(z+y+"}")()},
cu:function(a,b,c,d,e,f,g){return H.ft(a,b,H.N(c),d,!!e,!!f,g)},
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
cA:function(a,b){throw H.c(H.a3(a,H.aC(H.v(b).substring(3))))},
kq:function(a,b){throw H.c(H.cV(a,H.aC(H.v(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cA(a,b)},
ai:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kq(a,b)},
eh:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cA(a,b)},
bw:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a3(a,"List<dynamic>"))},
kk:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cA(a,b)},
cv:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.N(z)]
else return a.$S()}return},
bt:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cv(J.B(a))
if(z==null)return!1
return H.e_(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cq)return a
$.cq=!0
try{if(H.bt(a,b))return a
z=H.bx(b)
y=H.a3(a,z)
throw H.c(y)}finally{$.cq=!1}},
bV:function(a,b){if(a!=null&&!H.ct(a,b))H.W(H.a3(a,H.bx(b)))
return a},
e3:function(a){var z,y
z=J.B(a)
if(!!z.$iso){y=H.cv(z)
if(y!=null)return H.bx(y)
return"Closure"}return H.b0(a)},
kt:function(a){throw H.c(new P.fA(H.v(a)))},
ed:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
ah:function(a){if(a==null)return
return a.$ti},
mK:function(a,b,c){return H.aN(a["$as"+H.e(c)],H.ah(b))},
bd:function(a,b,c,d){var z
H.v(c)
H.N(d)
z=H.aN(a["$as"+H.e(c)],H.ah(b))
return z==null?null:z[d]},
cw:function(a,b,c){var z
H.v(b)
H.N(c)
z=H.aN(a["$as"+H.e(b)],H.ah(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.N(b)
z=H.ah(a)
return z==null?null:z[b]},
bx:function(a){return H.aA(a,null)},
aA:function(a,b){var z,y
H.y(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aC(a[0].builtin$cls)+H.bQ(a,1,b)
if(typeof a=="function")return H.aC(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.N(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.e(b[y])}if('func' in a)return H.jR(a,b)
if('futureOr' in a)return"FutureOr<"+H.aA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
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
for(z=H.k3(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aA(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bQ:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.co("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aA(u,c)}return"<"+z.k(0)+">"},
k7:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$iso){y=H.cv(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ah(a)
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
H.v(b)
H.bw(c)
H.v(d)
if(a==null)return!1
z=H.ah(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e6(H.aN(y[d],z),null,c,null)},
by:function(a,b,c,d){H.v(b)
H.bw(c)
H.v(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.cV(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aC(b.substring(3))+H.bQ(c,0,null),init.mangledGlobalNames)))},
y:function(a,b,c,d){H.v(b)
H.bw(c)
H.v(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.c(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aC(b.substring(3))+H.bQ(c,0,null),init.mangledGlobalNames)))},
e6:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.Z(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b,c[y],d))return!1
return!0},
mI:function(a,b,c){return a.apply(b,H.aN(J.B(b)["$as"+H.e(c)],H.ah(b)))},
ef:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.ef(z)}return!1},
ct:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.ef(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ct(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bt(a,b)}z=J.B(a).constructor
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
if('func' in a)return c.builtin$cls==="bj"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.Z("type" in a?a.type:null,b,x,d)
else if(H.Z(a,b,x,d))return!0
else{if(!('$is'+"aS" in y.prototype))return!1
w=y.prototype["$as"+"aS"]
v=H.aN(w,z?a.slice(1):null)
return H.Z(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e6(H.aN(r,z),b,u,d)},
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
return H.kp(m,b,l,d)},
kp:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.Z(c[w],d,a[w],b))return!1}return!0},
mJ:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
kl:function(a){var z,y,x,w,v,u
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
ko:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bZ(z)
else return J.cy(z,c,null,null)},
kg:function(){if(!0===$.cx)return
$.cx=!0
H.kh()},
kh:function(){var z,y,x,w,v,u,t,s
$.bU=Object.create(null)
$.bY=Object.create(null)
H.kc()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ej.$1(v)
if(u!=null){t=H.ko(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kc:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.aK(C.L,H.aK(C.Q,H.aK(C.y,H.aK(C.y,H.aK(C.P,H.aK(C.M,H.aK(C.N(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ee=new H.kd(v)
$.e5=new H.ke(u)
$.ej=new H.kf(t)},
aK:function(a,b){return a(b)||b},
ks:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hJ:{"^":"b;a,b,c,d,e,f,r,0x",t:{
hK:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cf(z)
y=z[0]
x=z[1]
return new H.hJ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i8:{"^":"b;a,b,c,d,e,f",
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
if(z==null)z=H.m([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dA:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hu:{"^":"P;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
t:{
dm:function(a,b){return new H.hu(a,b==null?null:b.method)}}},
h2:{"^":"P;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
t:{
ch:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h2(a,y,z?null:b.receiver)}}},
id:{"^":"P;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ku:{"^":"o:5;a",
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
k:function(a){return"Closure '"+H.b0(this).trim()+"'"},
gbZ:function(){return this},
$isbj:1,
gbZ:function(){return this}},
dw:{"^":"o;"},
hY:{"^":"dw;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aC(z)+"'"}},
c7:{"^":"dw;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c7))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b_(this.a)
else y=typeof z!=="object"?J.aj(z):H.b_(z)
return(y^H.b_(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
t:{
c8:function(a){return a.a},
cU:function(a){return a.c},
bF:function(a){var z,y,x,w,v
z=new H.c7("self","target","receiver","name")
y=J.cf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i9:{"^":"P;a",
k:function(a){return this.a},
t:{
a3:function(a,b){return new H.i9("TypeError: "+P.bH(a)+": type '"+H.e3(a)+"' is not a subtype of type '"+b+"'")}}},
fo:{"^":"P;a",
k:function(a){return this.a},
t:{
cV:function(a,b){return new H.fo("CastError: "+P.bH(a)+": type '"+H.e3(a)+"' is not a subtype of type '"+b+"'")}}},
hP:{"^":"P;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
t:{
hQ:function(a){return new H.hP(a)}}},
dB:{"^":"b;a,0b,0c,0d",
ga7:function(){var z=this.b
if(z==null){z=H.bx(this.a)
this.b=z}return z},
k:function(a){return this.ga7()},
gA:function(a){var z=this.d
if(z==null){z=C.h.gA(this.ga7())
this.d=z}return z},
E:function(a,b){if(b==null)return!1
return b instanceof H.dB&&this.ga7()===b.ga7()}},
dd:{"^":"dh;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gH:function(a){return new H.an(this,[H.r(this,0)])},
a8:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cH(z,b)}else{y=this.dn(b)
return y}},
dn:function(a){var z=this.d
if(z==null)return!1
return this.aw(this.aq(z,J.aj(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a5(w,b)
x=y==null?null:y.b
return x}else return this.dq(b)},
dq:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aq(z,J.aj(a)&0x3ffffff)
x=this.aw(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ar()
this.b=z}this.aV(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ar()
this.c=y}this.aV(y,b,c)}else{x=this.d
if(x==null){x=this.ar()
this.d=x}w=J.aj(b)&0x3ffffff
v=this.aq(x,w)
if(v==null)this.au(x,w,[this.ah(b,c)])
else{u=this.aw(v,b)
if(u>=0)v[u].b=c
else v.push(this.ah(b,c))}}},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aF(this))
z=z.c}},
aV:function(a,b,c){var z
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
z=this.a5(a,b)
if(z==null)this.au(a,b,this.ah(b,c))
else z.b=c},
b4:function(){this.r=this.r+1&67108863},
ah:function(a,b){var z,y
z=new H.h7(H.A(a,H.r(this,0)),H.A(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b4()
return z},
aw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aD(a[y].a,b))return y
return-1},
k:function(a){return P.di(this)},
a5:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
au:function(a,b,c){a[b]=c},
cI:function(a,b){delete a[b]},
cH:function(a,b){return this.a5(a,b)!=null},
ar:function(){var z=Object.create(null)
this.au(z,"<non-identifier-key>",z)
this.cI(z,"<non-identifier-key>")
return z},
$isde:1},
h7:{"^":"b;a,b,0c,0d"},
an:{"^":"d1;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.h8(z,z.r,this.$ti)
y.c=z.e
return y}},
h8:{"^":"b;a,b,0c,0d,$ti",
saW:function(a){this.d=H.A(a,H.r(this,0))},
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aF(z))
else{z=this.c
if(z==null){this.saW(null)
return!1}else{this.saW(z.a)
this.c=this.c.c
return!0}}},
$isaT:1},
kd:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
ke:{"^":"o:13;a",
$2:function(a,b){return this.a(a,b)}},
kf:{"^":"o:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
k3:function(a){return J.h_(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
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
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ba(b,a))},
hp:{"^":"h;",$isia:1,"%":"DataView;ArrayBufferView;ck|dO|dP|dj|dQ|dR|aq"},
ck:{"^":"hp;",
gj:function(a){return a.length},
$isw:1,
$asw:I.bb,
$isx:1,
$asx:I.bb},
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
ho:{"^":"dj;",$isae:1,"%":"Float32Array"},
lu:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lv:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$isfX:1,
"%":"Int32Array"},
lw:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lx:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hq:{"^":"aq;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ismh:1,
"%":"Uint32Array"},
ly:{"^":"aq;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lz:{"^":"aq;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dO:{"^":"ck+p;"},
dP:{"^":"dO+bI;"},
dQ:{"^":"ck+p;"},
dR:{"^":"dQ+bI;"}}],["","",,P,{"^":"",
il:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jZ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b9(new P.io(z),1)).observe(y,{childList:true})
return new P.im(z,y,x)}else if(self.setImmediate!=null)return P.k_()
return P.k0()},
mr:[function(a){self.scheduleImmediate(H.b9(new P.ip(H.n(a,{func:1,ret:-1})),0))},"$1","jZ",4,0,4],
ms:[function(a){self.setImmediate(H.b9(new P.iq(H.n(a,{func:1,ret:-1})),0))},"$1","k_",4,0,4],
mt:[function(a){H.n(a,{func:1,ret:-1})
P.jz(0,a)},"$1","k0",4,0,4],
jV:function(a,b){if(H.bt(a,{func:1,args:[P.b,P.a2]}))return H.n(a,{func:1,ret:null,args:[P.b,P.a2]})
if(H.bt(a,{func:1,args:[P.b]}))return H.n(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cR(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jU:function(){var z,y
for(;z=$.aJ,z!=null;){$.b7=null
y=z.b
$.aJ=y
if(y==null)$.b6=null
z.a.$0()}},
mG:[function(){$.cr=!0
try{P.jU()}finally{$.b7=null
$.cr=!1
if($.aJ!=null)$.cC().$1(P.e7())}},"$0","e7",0,0,1],
e2:function(a){var z=new P.dG(H.n(a,{func:1,ret:-1}))
if($.aJ==null){$.b6=z
$.aJ=z
if(!$.cr)$.cC().$1(P.e7())}else{$.b6.b=z
$.b6=z}},
jY:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.aJ
if(z==null){P.e2(a)
$.b7=$.b6
return}y=new P.dG(a)
x=$.b7
if(x==null){y.b=z
$.b7=y
$.aJ=y}else{y.b=x.b
x.b=y
$.b7=y
if(y.b==null)$.b6=y}},
kr:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.I
if(C.e===y){P.bS(null,null,C.e,a)
return}y.toString
P.bS(null,null,y,H.n(y.bf(a),z))},
bR:function(a,b,c,d,e){var z={}
z.a=d
P.jY(new P.jW(z,e))},
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
jX:function(a,b,c,d,e,f,g,h,i){var z,y
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
if(z)d=!(!z||!1)?c.bf(d):c.d5(d,-1)
P.e2(d)},
io:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
im:{"^":"o:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ip:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iq:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jy:{"^":"b;a,0b,c",
cD:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b9(new P.jA(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
t:{
jz:function(a,b){var z=new P.jy(!0,0)
z.cD(a,b)
return z}}},
jA:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
it:{"^":"b;$ti"},
jt:{"^":"it;a,$ti"},
aI:{"^":"b;0a,b,c,d,e,$ti",
ds:function(a){if(this.c!==6)return!0
return this.b.b.ay(H.n(this.d,{func:1,ret:P.Q,args:[P.b]}),a.a,P.Q,P.b)},
dm:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bt(z,{func:1,args:[P.b,P.a2]}))return H.bV(w.dw(z,a.a,a.b,null,y,P.a2),x)
else return H.bV(w.ay(H.n(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ab:{"^":"b;b8:a<,b,0cU:c<,$ti",
bJ:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.I
if(y!==C.e){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jV(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ab(0,$.I,[c])
w=b==null?1:3
this.aY(new P.aI(x,w,a,b,[z,c]))
return x},
bI:function(a,b){return this.bJ(a,null,b)},
aY:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaI")
this.c=a}else{if(z===2){y=H.i(this.c,"$isab")
z=y.a
if(z<4){y.aY(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bS(null,null,z,H.n(new P.iI(this,a),{func:1,ret:-1}))}},
b5:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaI")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isab")
y=u.a
if(y<4){u.b5(a)
return}this.a=y
this.c=u.c}z.a=this.a6(a)
y=this.b
y.toString
P.bS(null,null,y,H.n(new P.iN(z,this),{func:1,ret:-1}))}},
at:function(){var z=H.i(this.c,"$isaI")
this.c=null
return this.a6(z)},
a6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
al:function(a){var z,y,x
z=H.r(this,0)
H.bV(a,{futureOr:1,type:z})
y=this.$ti
if(H.aL(a,"$isaS",y,"$asaS"))if(H.aL(a,"$isab",y,null))P.dJ(a,this)
else P.iJ(a,this)
else{x=this.at()
H.A(a,z)
this.a=4
this.c=a
P.b5(this,x)}},
b_:function(a,b){var z
H.i(b,"$isa2")
z=this.at()
this.a=8
this.c=new P.X(a,b)
P.b5(this,z)},
$isaS:1,
t:{
iJ:function(a,b){var z,y,x
b.a=1
try{a.bJ(new P.iK(b),new P.iL(b),null)}catch(x){z=H.a5(x)
y=H.be(x)
P.kr(new P.iM(b,z,y))}},
dJ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isab")
if(z>=4){y=b.at()
b.a=a.a
b.c=a.c
P.b5(b,y)}else{y=H.i(b.c,"$isaI")
b.a=2
b.c=a
a.b5(y)}},
b5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.b5(z.a,b)}y=z.a
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
if(y===8)new P.iQ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iP(x,b,r).$0()}else if((y&2)!==0)new P.iO(z,x,b).$0()
if(o!=null)$.I=o
y=x.b
if(!!J.B(y).$isaS){if(y.a>=4){n=H.i(t.c,"$isaI")
t.c=null
b=t.a6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dJ(y,t)
return}}m=b.b
n=H.i(m.c,"$isaI")
m.c=null
b=m.a6(n)
y=x.a
u=x.b
if(!y){H.A(u,H.r(m,0))
m.a=4
m.c=u}else{H.i(u,"$isX")
m.a=8
m.c=u}z.a=m
y=m}}}},
iI:{"^":"o:0;a,b",
$0:function(){P.b5(this.a,this.b)}},
iN:{"^":"o:0;a,b",
$0:function(){P.b5(this.b,this.a.a)}},
iK:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.al(a)}},
iL:{"^":"o:16;a",
$2:function(a,b){H.i(b,"$isa2")
this.a.b_(a,b)},
$1:function(a){return this.$2(a,null)}},
iM:{"^":"o:0;a,b,c",
$0:function(){this.a.b_(this.b,this.c)}},
iQ:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bH(H.n(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.be(v)
if(this.d){w=H.i(this.a.a.c,"$isX").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isX")
else u.b=new P.X(y,x)
u.a=!0
return}if(!!J.B(z).$isaS){if(z instanceof P.ab&&z.gb8()>=4){if(z.gb8()===8){w=this.b
w.b=H.i(z.gcU(),"$isX")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bI(new P.iR(t),null)
w.a=!1}}},
iR:{"^":"o:17;a",
$1:function(a){return this.a}},
iP:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.A(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.ay(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.be(t)
x=this.a
x.b=new P.X(z,y)
x.a=!0}}},
iO:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isX")
w=this.c
if(w.ds(z)&&w.e!=null){v=this.b
v.b=w.dm(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.be(u)
w=H.i(this.a.a.c,"$isX")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.X(y,x)
s.a=!0}}},
dG:{"^":"b;a,0b"},
i1:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.ab(0,$.I,[P.D])
z.a=0
x=H.r(this,0)
w=H.n(new P.i3(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.i4(z,y),{func:1,ret:-1})
W.az(this.a,this.b,w,!1,x)
return y}},
i3:{"^":"o;a,b",
$1:function(a){H.A(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.r(this.b,0)]}}},
i4:{"^":"o:0;a,b",
$0:function(){this.b.al(this.a.a)}},
i2:{"^":"b;"},
X:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isP:1},
jG:{"^":"b;",$ismp:1},
jW:{"^":"o:0;a,b",
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
jc:{"^":"jG;",
dz:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.e===$.I){a.$0()
return}P.e0(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.be(x)
P.bR(null,null,this,z,H.i(y,"$isa2"))}},
dA:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.I){a.$1(b)
return}P.e1(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.be(x)
P.bR(null,null,this,z,H.i(y,"$isa2"))}},
d5:function(a,b){return new P.je(this,H.n(a,{func:1,ret:b}),b)},
bf:function(a){return new P.jd(this,H.n(a,{func:1,ret:-1}))},
d6:function(a,b){return new P.jf(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bH:function(a,b){H.n(a,{func:1,ret:b})
if($.I===C.e)return a.$0()
return P.e0(null,null,this,a,b)},
ay:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.I===C.e)return a.$1(b)
return P.e1(null,null,this,a,b,c,d)},
dw:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.I===C.e)return a.$2(b,c)
return P.jX(null,null,this,a,b,c,d,e,f)}},
je:{"^":"o;a,b,c",
$0:function(){return this.a.bH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jd:{"^":"o:1;a,b",
$0:function(){return this.a.dz(this.b)}},
jf:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dA(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
df:function(a,b,c){H.bw(a)
return H.y(H.k4(a,new H.dd(0,0,[b,c])),"$isde",[b,c],"$asde")},
Y:function(a,b){return new H.dd(0,0,[a,b])},
a1:function(a,b,c,d){return new P.iY(0,0,[d])},
fY:function(a,b,c){var z,y
if(P.cs(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.d])
y=$.bf()
C.a.l(y,a)
try{P.jT(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dv(b,H.kk(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
ce:function(a,b,c){var z,y,x
if(P.cs(a))return b+"..."+c
z=new P.co(b)
y=$.bf()
C.a.l(y,a)
try{x=z
x.a=P.dv(x.gT(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gT()+c
y=z.gT()
return y.charCodeAt(0)==0?y:y},
cs:function(a){var z,y
for(z=0;y=$.bf(),z<y.length;++z)if(a===y[z])return!0
return!1},
jT:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.y(b,"$isa",[P.d],"$asa")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.e(z.gD(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.v()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.v();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
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
try{C.a.l($.bf(),a)
x=y
x.a=x.gT()+"{"
z.a=!0
J.eZ(a,new P.hb(z,y))
z=y
z.a=z.gT()+"}"}finally{z=$.bf()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gT()
return z.charCodeAt(0)==0?z:z},
iY:{"^":"iT;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){return P.dN(this,this.r,H.r(this,0))},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbs")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.i(y[b],"$isbs")!=null}else return this.cG(b)},
cG:function(a){var z=this.d
if(z==null)return!1
return this.ap(this.b2(z,a),a)>=0},
l:function(a,b){var z,y
H.A(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cp()
this.b=z}return this.aX(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cp()
this.c=y}return this.aX(y,b)}else return this.cE(0,b)},
cE:function(a,b){var z,y,x
H.A(b,H.r(this,0))
z=this.d
if(z==null){z=P.cp()
this.d=z}y=this.b0(b)
x=z[y]
if(x==null)z[y]=[this.as(b)]
else{if(this.ap(x,b)>=0)return!1
x.push(this.as(b))}return!0},
bG:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b6(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b6(this.c,b)
else return this.cP(0,b)},
cP:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b2(z,b)
x=this.ap(y,b)
if(x<0)return!1
this.ba(y.splice(x,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ak()}},
aX:function(a,b){H.A(b,H.r(this,0))
if(H.i(a[b],"$isbs")!=null)return!1
a[b]=this.as(b)
return!0},
b6:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isbs")
if(z==null)return!1
this.ba(z)
delete a[b]
return!0},
ak:function(){this.r=this.r+1&67108863},
as:function(a){var z,y
z=new P.bs(H.A(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ak()
return z},
ba:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ak()},
b0:function(a){return J.aj(a)&0x3ffffff},
b2:function(a,b){return a[this.b0(b)]},
ap:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aD(a[y].a,b))return y
return-1},
t:{
cp:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bs:{"^":"b;a,0b,0c"},
iZ:{"^":"b;a,b,0c,0d,$ti",
saZ:function(a){this.d=H.A(a,H.r(this,0))},
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aF(z))
else{z=this.c
if(z==null){this.saZ(null)
return!1}else{this.saZ(H.A(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaT:1,
t:{
dN:function(a,b,c){var z=new P.iZ(a,b,[c])
z.c=a.e
return z}}},
iT:{"^":"hR;"},
h9:{"^":"j_;",$isj:1,$isa:1},
p:{"^":"b;$ti",
gB:function(a){return new H.dg(a,this.gj(a),0,[H.bd(this,a,"p",0)])},
u:function(a,b){return this.h(a,b)},
dl:function(a,b,c,d){var z,y,x
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.bd(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aF(a))}return y},
k:function(a){return P.ce(a,"[","]")}},
dh:{"^":"S;"},
hb:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
S:{"^":"b;$ti",
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.bd(this,a,"S",0),H.bd(this,a,"S",1)]})
for(z=J.bC(this.gH(a));z.v();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aO(this.gH(a))},
k:function(a){return P.di(a)},
$isJ:1},
hS:{"^":"b;$ti",
K:function(a,b){var z
for(z=J.bC(H.y(b,"$isj",this.$ti,"$asj"));z.v();)this.l(0,z.gD(z))},
k:function(a){return P.ce(this,"{","}")},
$isj:1,
$islR:1},
hR:{"^":"hS;"},
j_:{"^":"b+p;"}}],["","",,P,{"^":"",
fN:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.b0(a)+"'"},
bH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bh(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fN(a)},
d5:function(a){return new P.iF(a)},
aB:function(a){H.c_(H.e(a))},
Q:{"^":"b;"},
"+bool":0,
bG:{"^":"b;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bG&&this.a===b.a&&!0},
M:function(a,b){return C.d.M(this.a,H.i(b,"$isbG").a)},
gA:function(a){var z=this.a
return(z^C.d.b7(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fB(H.hG(this))
y=P.bi(H.hE(this))
x=P.bi(H.hA(this))
w=P.bi(H.hB(this))
v=P.bi(H.hD(this))
u=P.bi(H.hF(this))
t=P.fC(H.hC(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isV:1,
$asV:function(){return[P.bG]},
t:{
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
bi:function(a){if(a>=10)return""+a
return"0"+a}}},
ag:{"^":"E;"},
"+double":0,
aQ:{"^":"b;a",
S:function(a,b){return C.d.S(this.a,H.i(b,"$isaQ").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
M:function(a,b){return C.d.M(this.a,H.i(b,"$isaQ").a)},
k:function(a){var z,y,x,w,v
z=new P.fK()
y=this.a
if(y<0)return"-"+new P.aQ(0-y).k(0)
x=z.$1(C.d.U(y,6e7)%60)
w=z.$1(C.d.U(y,1e6)%60)
v=new P.fJ().$1(y%1e6)
return""+C.d.U(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isV:1,
$asV:function(){return[P.aQ]},
t:{
fI:function(a,b,c,d,e,f){return new P.aQ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
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
P:{"^":"b;"},
dn:{"^":"P;",
k:function(a){return"Throw of null."}},
aE:{"^":"P;a,b,c,d",
gan:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gam:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gan()+y+x
if(!this.a)return w
v=this.gam()
u=P.bH(this.b)
return w+v+": "+u},
t:{
cR:function(a,b,c){return new P.aE(!0,a,b,c)}}},
dp:{"^":"aE;e,f,a,b,c,d",
gan:function(){return"RangeError"},
gam:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
t:{
bL:function(a,b,c){return new P.dp(null,null,!0,a,b,"Value not in range")},
bK:function(a,b,c,d,e){return new P.dp(b,c,!0,a,d,"Invalid value")}}},
fW:{"^":"aE;e,j:f>,a,b,c,d",
gan:function(){return"RangeError"},
gam:function(){var z,y
z=H.N(this.b)
if(typeof z!=="number")return z.a2()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
t:{
F:function(a,b,c,d,e){var z=H.N(e==null?J.aO(b):e)
return new P.fW(b,z,!0,a,c,"Index out of range")}}},
ie:{"^":"P;a",
k:function(a){return"Unsupported operation: "+this.a},
t:{
z:function(a){return new P.ie(a)}}},
ic:{"^":"P;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
dD:function(a){return new P.ic(a)}}},
cm:{"^":"P;a",
k:function(a){return"Bad state: "+this.a},
t:{
cn:function(a){return new P.cm(a)}}},
fu:{"^":"P;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bH(z)+"."},
t:{
aF:function(a){return new P.fu(a)}}},
du:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isP:1},
fA:{"^":"P;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iF:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bj:{"^":"b;"},
D:{"^":"E;"},
"+int":0,
j:{"^":"b;$ti",
az:["ca",function(a,b){var z=H.cw(this,"j",0)
return new H.dE(this,H.n(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.v();)++y
return y},
u:function(a,b){var z,y,x
if(b<0)H.W(P.bK(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.v();){x=z.gD(z)
if(b===y)return x;++y}throw H.c(P.F(b,this,"index",null,y))},
k:function(a){return P.fY(this,"(",")")}},
aT:{"^":"b;$ti"},
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
gA:function(a){return H.b_(this)},
k:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.k(this)}},
a2:{"^":"b;"},
d:{"^":"b;",$isV:1,
$asV:function(){return[P.d]},
$ishx:1},
"+String":0,
co:{"^":"b;T:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dv:function(a,b,c){var z=J.bC(b)
if(!z.v())return a
if(c.length===0){do a+=H.e(z.gD(z))
while(z.v())}else{a+=H.e(z.gD(z))
for(;z.v();)a=a+c+H.e(z.gD(z))}return a}}}}],["","",,W,{"^":"",
fL:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).N(z,a,b,c)
y.toString
z=W.u
z=new H.dE(new W.a4(y),H.n(new W.fM(),{func:1,ret:P.Q,args:[z]}),[z])
x=z.gB(z)
if(!x.v())H.W(H.da())
w=x.gD(x)
if(x.v())H.W(H.fZ())
return H.i(w,"$isR")},
d4:function(a){H.i(a,"$isM")
return"wheel"},
aR:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f1(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
iC:function(a,b){return document.createElement(a)},
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
if("postMessage" in a){z=W.iw(a)
if(!!J.B(z).$isM)return z
return}else return H.i(a,"$isM")},
e4:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.I
if(z===C.e)return a
return z.d6(a,b)},
L:{"^":"R;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kv:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fh:{"^":"L;",
k:function(a){return String(a)},
$isfh:1,
"%":"HTMLAnchorElement"},
kw:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cS:{"^":"L;",$iscS:1,"%":"HTMLBaseElement"},
fm:{"^":"h;","%":";Blob"},
bE:{"^":"L;",$isbE:1,"%":"HTMLBodyElement"},
c9:{"^":"L;0n:height=,0m:width=",
c_:function(a,b,c){var z=this.cL(a,b,P.k1(c,null))
return z},
cL:function(a,b,c){return a.getContext(b,c)},
$isc9:1,
"%":"HTMLCanvasElement"},
kB:{"^":"h;",
ac:function(a){return P.a_(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kC:{"^":"u;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fv:{"^":"ca;",$isfv:1,"%":"CSSNumericValue|CSSUnitValue"},
kG:{"^":"fy;0j:length=","%":"CSSPerspective"},
ak:{"^":"h;",$isak:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fw:{"^":"iu;0j:length=",
aC:function(a,b){var z=this.cM(a,this.ai(a,b))
return z==null?"":z},
ai:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.cY(a,b)
z[b]=y
return y},
cY:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fD()+b
if(z in a)return z
return b},
cM:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fx:{"^":"b;",
gn:function(a){return this.aC(a,"height")},
gm:function(a){return this.aC(a,"width")}},
ca:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fy:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kI:{"^":"ca;0j:length=","%":"CSSTransformValue"},
kJ:{"^":"ca;0j:length=","%":"CSSUnparsedValue"},
kL:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fE:{"^":"L;","%":"HTMLDivElement"},
fF:{"^":"u;",
d0:function(a,b){return a.adoptNode(b)},
c0:function(a,b){return a.getElementById(b)},
du:function(a,b){return a.querySelector(b)},
gbC:function(a){return new W.bq(a,"mousedown",!1,[W.T])},
gbD:function(a){return new W.bq(a,"mousemove",!1,[W.T])},
gbE:function(a){return new W.bq(a,"mouseup",!1,[W.T])},
gbF:function(a){return new W.bq(a,H.v(W.d4(a)),!1,[W.aH])},
"%":"XMLDocument;Document"},
kM:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fG:{"^":"h;",
df:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kN:{"^":"iy;",
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
fH:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isU",[P.E],"$asU"))return!1
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
kO:{"^":"iA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
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
$ast:function(){return[P.d]},
"%":"DOMStringList"},
kP:{"^":"h;0j:length=","%":"DOMTokenList"},
R:{"^":"u;0dB:tagName=",
gd3:function(a){return new W.iB(a)},
k:function(a){return a.localName},
N:["ae",function(a,b,c,d){var z,y,x,w
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
y=(y&&C.I).df(y,"")
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
z=$.ad.body;(z&&C.o).I(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.T,a.tagName)){z=$.cb;(z&&C.B).c1(z,x)
z=$.cb
w=(z&&C.B).dd(z,b)}else{x.innerHTML=b
w=$.ad.createDocumentFragment()
for(z=J.l(w);y=x.firstChild,y!=null;)z.I(w,y)}z=$.ad.body
if(x==null?z!=null:x!==z)J.cL(x)
c.aH(w)
C.q.d0(document,w)
return w},function(a,b,c){return this.N(a,b,c,null)},"de",null,null,"gdI",5,5,null],
c3:function(a,b,c,d){a.textContent=null
this.I(a,this.N(a,b,c,d))},
c2:function(a,b){return this.c3(a,b,null,null)},
W:function(a,b){return a.getAttribute(b)},
cQ:function(a,b){return a.removeAttribute(b)},
gbC:function(a){return new W.bN(a,"mousedown",!1,[W.T])},
gbD:function(a){return new W.bN(a,"mousemove",!1,[W.T])},
gbE:function(a){return new W.bN(a,"mouseup",!1,[W.T])},
gbF:function(a){return new W.bN(a,H.v(W.d4(a)),!1,[W.aH])},
$isR:1,
"%":";Element"},
fM:{"^":"o:18;",
$1:function(a){return!!J.B(H.i(a,"$isu")).$isR}},
kR:{"^":"L;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a0:{"^":"h;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
M:{"^":"h;",
d_:function(a,b,c,d){H.n(c,{func:1,args:[W.a0]})
if(c!=null)this.cF(a,b,c,!1)},
cF:function(a,b,c,d){return a.addEventListener(b,H.b9(H.n(c,{func:1,args:[W.a0]}),1),!1)},
$isM:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dS|dT|dW|dX"},
al:{"^":"fm;",$isal:1,"%":"File"},
l7:{"^":"iH;",
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
l8:{"^":"M;0j:length=","%":"FileWriter"},
lb:{"^":"L;0j:length=","%":"HTMLFormElement"},
am:{"^":"h;",$isam:1,"%":"Gamepad"},
fU:{"^":"L;","%":"HTMLHeadElement"},
lc:{"^":"h;0j:length=","%":"History"},
ld:{"^":"iV;",
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
fV:{"^":"fF;","%":"HTMLDocument"},
le:{"^":"L;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lf:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lg:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
lh:{"^":"L;0n:height=,0m:width=","%":"HTMLImageElement"},
lj:{"^":"L;0n:height=,0m:width=","%":"HTMLInputElement"},
aU:{"^":"dC;",$isaU:1,"%":"KeyboardEvent"},
ha:{"^":"h;",
k:function(a){return String(a)},
$isha:1,
"%":"Location"},
he:{"^":"L;","%":"HTMLAudioElement;HTMLMediaElement"},
lq:{"^":"h;0j:length=","%":"MediaList"},
lr:{"^":"j1;",
h:function(a,b){return P.a_(a.get(H.v(b)))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gH:function(a){var z=H.m([],[P.d])
this.F(a,new W.hg(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hg:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ls:{"^":"j2;",
h:function(a,b){return P.a_(a.get(H.v(b)))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gH:function(a){var z=H.m([],[P.d])
this.F(a,new W.hh(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hh:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ap:{"^":"h;",$isap:1,"%":"MimeType"},
lt:{"^":"j4;",
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
gbB:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aZ(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.B(W.dZ(z)).$isR)throw H.c(P.z("offsetX is only supported on elements"))
y=H.i(W.dZ(z),"$isR")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.y(new P.aZ(u,v,w),"$isaZ",w,"$asaZ")
if(typeof z!=="number")return z.aL()
if(typeof x!=="number")return x.aL()
return new P.aZ(C.r.bK(z-u),C.r.bK(x-v),w)}},
$isT:1,
"%":";DragEvent|MouseEvent"},
a4:{"^":"h9;a",
ga3:function(a){var z,y
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
return new W.d6(z,z.length,-1,[H.bd(C.V,z,"t",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asp:function(){return[W.u]},
$asj:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"M;0dt:previousSibling=",
dv:function(a){var z=a.parentNode
if(z!=null)J.bz(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.c9(a):z},
I:function(a,b){return a.appendChild(b)},
cR:function(a,b){return a.removeChild(b)},
cS:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hr:{"^":"j6;",
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
lC:{"^":"L;0n:height=,0m:width=","%":"HTMLObjectElement"},
lE:{"^":"M;0n:height=,0m:width=","%":"OffscreenCanvas"},
lF:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ar:{"^":"h;0j:length=",$isar:1,"%":"Plugin"},
lH:{"^":"ja;",
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
lJ:{"^":"T;0n:height=,0m:width=","%":"PointerEvent"},
hI:{"^":"h;",
dd:function(a,b){return a.createContextualFragment(b)},
c1:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lO:{"^":"jg;",
h:function(a,b){return P.a_(a.get(H.v(b)))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gH:function(a){var z=H.m([],[P.d])
this.F(a,new W.hO(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hO:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lP:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lQ:{"^":"L;0j:length=","%":"HTMLSelectElement"},
as:{"^":"M;",$isas:1,"%":"SourceBuffer"},
lS:{"^":"dT;",
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
lT:{"^":"jm;",
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
lW:{"^":"jp;",
h:function(a,b){return this.b3(a,H.v(b))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cO(a,z)
if(y==null)return
b.$2(y,this.b3(a,y))}},
gH:function(a){var z=H.m([],[P.d])
this.F(a,new W.i0(z))
return z},
gj:function(a){return a.length},
b3:function(a,b){return a.getItem(b)},
cO:function(a,b){return a.key(b)},
$asS:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
i0:{"^":"o:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
av:{"^":"h;",$isav:1,"%":"CSSStyleSheet|StyleSheet"},
i5:{"^":"L;",
N:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ae(a,b,c,d)
z=W.fL("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a4(y).K(0,new W.a4(z))
return y},
"%":"HTMLTableElement"},
lZ:{"^":"L;",
N:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ae(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.N(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga3(z)
x.toString
z=new W.a4(x)
w=z.ga3(z)
y.toString
w.toString
new W.a4(y).K(0,new W.a4(w))
return y},
"%":"HTMLTableRowElement"},
m_:{"^":"L;",
N:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ae(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.N(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga3(z)
y.toString
x.toString
new W.a4(y).K(0,new W.a4(x))
return y},
"%":"HTMLTableSectionElement"},
dx:{"^":"L;",$isdx:1,"%":"HTMLTemplateElement"},
m0:{"^":"h;0m:width=","%":"TextMetrics"},
aw:{"^":"M;",$isaw:1,"%":"TextTrack"},
ax:{"^":"M;",$isax:1,"%":"TextTrackCue|VTTCue"},
m1:{"^":"jx;",
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
m2:{"^":"dX;",
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
m3:{"^":"h;0j:length=","%":"TimeRanges"},
ay:{"^":"h;",$isay:1,"%":"Touch"},
m4:{"^":"jC;",
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
m5:{"^":"h;0j:length=","%":"TrackDefaultList"},
dC:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mj:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
ml:{"^":"he;0n:height=,0m:width=","%":"HTMLVideoElement"},
mm:{"^":"M;0j:length=","%":"VideoTrackList"},
mn:{"^":"M;0n:height=,0m:width=","%":"VisualViewport"},
mo:{"^":"h;0m:width=","%":"VTTRegion"},
aH:{"^":"T;",
gdh:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
$isaH:1,
"%":"WheelEvent"},
ii:{"^":"M;",
gd2:function(a){var z,y,x
z=P.E
y=new P.ab(0,$.I,[z])
x=H.n(new W.ij(new P.jt(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cK(a)
this.cT(a,W.e4(x,z))
return y},
cT:function(a,b){return a.requestAnimationFrame(H.b9(H.n(b,{func:1,ret:-1,args:[P.E]}),1))},
cK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdF:1,
"%":"DOMWindow|Window"},
ij:{"^":"o:20;a",
$1:function(a){var z=this.a
a=H.bV(H.cz(a),{futureOr:1,type:H.r(z,0)})
z=z.a
if(z.a!==0)H.W(P.cn("Future already completed"))
z.al(a)}},
dH:{"^":"u;",$isdH:1,"%":"Attr"},
mu:{"^":"jI;",
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
mw:{"^":"fH;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isU",[P.E],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.l(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dM(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mx:{"^":"jK;",
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
mC:{"^":"jM;",
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
mD:{"^":"jO;",
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
mE:{"^":"jQ;",
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
ir:{"^":"dh;cJ:a<",
F:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gH(this),y=z.length,x=this.a,w=J.l(x),v=0;v<z.length;z.length===y||(0,H.K)(z),++v){u=z[v]
b.$2(u,w.W(x,u))}},
gH:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.m([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.i(z[w],"$isdH")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asS:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
iB:{"^":"ir;a",
h:function(a,b){return J.c5(this.a,H.v(b))},
gj:function(a){return this.gH(this).length}},
bq:{"^":"i1;a,b,c,$ti"},
bN:{"^":"bq;a,b,c,$ti"},
iD:{"^":"i2;a,b,c,d,e,$ti",t:{
az:function(a,b,c,d,e){var z=W.e4(new W.iE(c),W.a0)
if(z!=null&&!0)J.eH(a,b,z,!1)
return new W.iD(0,a,b,z,!1,[e])}}},
iE:{"^":"o:21;a",
$1:function(a){return this.a.$1(H.i(a,"$isa0"))}},
br:{"^":"b;a",
cB:function(a){var z,y
z=$.cD()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.S[y],W.ka())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kb())}},
V:function(a){return $.eD().w(0,W.aR(a))},
R:function(a,b,c){var z,y,x
z=W.aR(a)
y=$.cD()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bT(x.$4(a,b,c,this))},
$isa9:1,
t:{
dK:function(a){var z,y
z=document.createElement("a")
y=new W.jh(z,window.location)
y=new W.br(y)
y.cB(a)
return y},
mA:[function(a,b,c,d){H.i(a,"$isR")
H.v(b)
H.v(c)
H.i(d,"$isbr")
return!0},"$4","ka",16,0,12],
mB:[function(a,b,c,d){var z,y,x
H.i(a,"$isR")
H.v(b)
H.v(c)
z=H.i(d,"$isbr").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kb",16,0,12]}},
t:{"^":"b;$ti",
gB:function(a){return new W.d6(a,this.gj(a),-1,[H.bd(this,a,"t",0)])}},
dk:{"^":"b;a",
V:function(a){return C.a.bc(this.a,new W.ht(a))},
R:function(a,b,c){return C.a.bc(this.a,new W.hs(a,b,c))},
$isa9:1},
ht:{"^":"o:9;a",
$1:function(a){return H.i(a,"$isa9").V(this.a)}},
hs:{"^":"o:9;a,b,c",
$1:function(a){return H.i(a,"$isa9").R(this.a,this.b,this.c)}},
ji:{"^":"b;",
cC:function(a,b,c,d){var z,y,x
this.a.K(0,c)
z=b.az(0,new W.jj())
y=b.az(0,new W.jk())
this.b.K(0,z)
x=this.c
x.K(0,C.U)
x.K(0,y)},
V:function(a){return this.a.w(0,W.aR(a))},
R:["cc",function(a,b,c){var z,y
z=W.aR(a)
y=this.c
if(y.w(0,H.e(z)+"::"+b))return this.d.d1(c)
else if(y.w(0,"*::"+b))return this.d.d1(c)
else{y=this.b
if(y.w(0,H.e(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.e(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isa9:1},
jj:{"^":"o:10;",
$1:function(a){return!C.a.w(C.u,H.v(a))}},
jk:{"^":"o:10;",
$1:function(a){return C.a.w(C.u,H.v(a))}},
ju:{"^":"ji;e,a,b,c,d",
R:function(a,b,c){if(this.cc(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c5(a,"template")==="")return this.e.w(0,b)
return!1},
t:{
dV:function(){var z,y,x,w,v
z=P.d
y=P.ci(C.t,z)
x=H.r(C.t,0)
w=H.n(new W.jv(),{func:1,ret:z,args:[x]})
v=H.m(["TEMPLATE"],[z])
y=new W.ju(y,P.a1(null,null,null,z),P.a1(null,null,null,z),P.a1(null,null,null,z),null)
y.cC(null,new H.hc(C.t,w,[x,z]),v,null)
return y}}},
jv:{"^":"o:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.v(a))}},
js:{"^":"b;",
V:function(a){var z=J.B(a)
if(!!z.$isdr)return!1
z=!!z.$isH
if(z&&W.aR(a)==="foreignObject")return!1
if(z)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.h.c5(b,"on"))return!1
return this.V(a)},
$isa9:1},
d6:{"^":"b;a,b,c,0d,$ti",
sb1:function(a){this.d=H.A(a,H.r(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb1(J.bg(this.a,z))
this.c=z
return!0}this.sb1(null)
this.c=y
return!1},
gD:function(a){return this.d},
$isaT:1},
iv:{"^":"b;a",$isM:1,$isdF:1,t:{
iw:function(a){if(a===window)return H.i(a,"$isdF")
else return new W.iv(a)}}},
a9:{"^":"b;"},
jh:{"^":"b;a,b",$ismi:1},
dY:{"^":"b;a",
aH:function(a){new W.jF(this).$2(a,null)},
Z:function(a,b){if(b==null)J.cL(a)
else J.bz(b,a)},
cW:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f_(a)
x=J.c5(y.gcJ(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.bh(a)}catch(t){H.a5(t)}try{u=W.aR(a)
this.cV(H.i(a,"$isR"),b,z,v,u,H.i(y,"$isJ"),H.v(x))}catch(t){if(H.a5(t) instanceof P.aE)throw t
else{this.Z(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cV:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.Z(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.V(a)){this.Z(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.Z(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gH(f)
y=H.m(z.slice(0),[H.r(z,0)])
for(x=f.gH(f).length-1,z=f.a,w=J.l(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.R(a,J.f8(v),w.W(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.W(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.W(z,v)
w.cQ(z,v)}}if(!!J.B(a).$isdx)this.aH(a.content)},
$islA:1},
jF:{"^":"o:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cW(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.Z(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f0(z)}catch(w){H.a5(w)
v=H.i(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bz(u,v)}else J.bz(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isu")}}},
iu:{"^":"h+fx;"},
ix:{"^":"h+p;"},
iy:{"^":"ix+t;"},
iz:{"^":"h+p;"},
iA:{"^":"iz+t;"},
iG:{"^":"h+p;"},
iH:{"^":"iG+t;"},
iU:{"^":"h+p;"},
iV:{"^":"iU+t;"},
j1:{"^":"h+S;"},
j2:{"^":"h+S;"},
j3:{"^":"h+p;"},
j4:{"^":"j3+t;"},
j5:{"^":"h+p;"},
j6:{"^":"j5+t;"},
j9:{"^":"h+p;"},
ja:{"^":"j9+t;"},
jg:{"^":"h+S;"},
dS:{"^":"M+p;"},
dT:{"^":"dS+t;"},
jl:{"^":"h+p;"},
jm:{"^":"jl+t;"},
jp:{"^":"h+S;"},
jw:{"^":"h+p;"},
jx:{"^":"jw+t;"},
dW:{"^":"M+p;"},
dX:{"^":"dW+t;"},
jB:{"^":"h+p;"},
jC:{"^":"jB+t;"},
jH:{"^":"h+p;"},
jI:{"^":"jH+t;"},
jJ:{"^":"h+p;"},
jK:{"^":"jJ+t;"},
jL:{"^":"h+p;"},
jM:{"^":"jL+t;"},
jN:{"^":"h+p;"},
jO:{"^":"jN+t;"},
jP:{"^":"h+p;"},
jQ:{"^":"jP+t;"}}],["","",,P,{"^":"",
a_:function(a){var z,y,x,w,v
if(a==null)return
z=P.Y(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.K)(y),++w){v=H.v(y[w])
z.i(0,v,a[v])}return z},
k1:function(a,b){var z={}
a.F(0,new P.k2(z))
return z},
d0:function(){var z=$.d_
if(z==null){z=J.c1(window.navigator.userAgent,"Opera",0)
$.d_=z}return z},
fD:function(){var z,y
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
k2:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aZ:{"^":"b;ab:a>,a1:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
E:function(a,b){if(b==null)return!1
return H.aL(b,"$isaZ",[P.E],null)&&this.a==J.bD(b)&&this.b==b.ga1(b)},
gA:function(a){var z,y,x
z=J.aj(this.a)
y=J.aj(this.b)
y=P.dL(P.dL(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jb:{"^":"b;"},
U:{"^":"jb;$ti"}}],["","",,P,{"^":"",fi:{"^":"h;",$isfi:1,"%":"SVGAnimatedLength"},kS:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},kT:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kU:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kV:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},kW:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},kX:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kY:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kZ:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},l_:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},l0:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},l1:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},l2:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},l3:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},l4:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},l5:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},l6:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},l9:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},la:{"^":"bk;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fT:{"^":"bk;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bk:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},li:{"^":"bk;0n:height=,0m:width=","%":"SVGImageElement"},aV:{"^":"h;",$isaV:1,"%":"SVGLength"},lo:{"^":"iX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.i(c,"$isaV")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aV]},
$isj:1,
$asj:function(){return[P.aV]},
$isa:1,
$asa:function(){return[P.aV]},
$ast:function(){return[P.aV]},
"%":"SVGLengthList"},lp:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},aY:{"^":"h;",$isaY:1,"%":"SVGNumber"},lB:{"^":"j8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.i(c,"$isaY")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aY]},
$isj:1,
$asj:function(){return[P.aY]},
$isa:1,
$asa:function(){return[P.aY]},
$ast:function(){return[P.aY]},
"%":"SVGNumberList"},lG:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},lI:{"^":"h;0j:length=","%":"SVGPointList"},lK:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lL:{"^":"fT;0n:height=,0m:width=","%":"SVGRectElement"},dr:{"^":"H;",$isdr:1,"%":"SVGScriptElement"},lX:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.v(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$ast:function(){return[P.d]},
"%":"SVGStringList"},H:{"^":"R;",
N:function(a,b,c,d){var z,y,x,w,v,u
z=H.m([],[W.a9])
C.a.l(z,W.dK(null))
C.a.l(z,W.dV())
C.a.l(z,new W.js())
c=new W.dY(new W.dk(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).de(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a4(w)
u=z.ga3(z)
for(z=J.l(v);x=u.firstChild,x!=null;)z.I(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lY:{"^":"bk;0n:height=,0m:width=","%":"SVGSVGElement"},b1:{"^":"h;",$isb1:1,"%":"SVGTransform"},m6:{"^":"jE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return this.P(a,b)},
i:function(a,b,c){H.i(c,"$isb1")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b1]},
$isj:1,
$asj:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$ast:function(){return[P.b1]},
"%":"SVGTransformList"},mk:{"^":"bk;0n:height=,0m:width=","%":"SVGUseElement"},iW:{"^":"h+p;"},iX:{"^":"iW+t;"},j7:{"^":"h+p;"},j8:{"^":"j7+t;"},jq:{"^":"h+p;"},jr:{"^":"jq+t;"},jD:{"^":"h+p;"},jE:{"^":"jD+t;"}}],["","",,P,{"^":"",ae:{"^":"b;",$isj:1,
$asj:function(){return[P.ag]},
$isa:1,
$asa:function(){return[P.ag]},
$isia:1}}],["","",,P,{"^":"",kx:{"^":"h;0j:length=","%":"AudioBuffer"},ky:{"^":"is;",
h:function(a,b){return P.a_(a.get(H.v(b)))},
F:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gH:function(a){var z=H.m([],[P.d])
this.F(a,new P.fk(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fk:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kz:{"^":"M;0j:length=","%":"AudioTrackList"},fl:{"^":"M;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lD:{"^":"fl;0j:length=","%":"OfflineAudioContext"},is:{"^":"h+S;"}}],["","",,P,{"^":"",fn:{"^":"h;",$isfn:1,"%":"WebGLBuffer"},fS:{"^":"h;",$isfS:1,"%":"WebGLFramebuffer"},hH:{"^":"h;",$ishH:1,"%":"WebGLProgram"},lM:{"^":"h;",
bb:function(a,b){return a.activeTexture(b)},
bd:function(a,b,c){return a.attachShader(b,c)},
be:function(a,b,c){return a.bindBuffer(b,c)},
bg:function(a,b,c){return a.bindFramebuffer(b,c)},
bh:function(a,b,c){return a.bindTexture(b,c)},
bi:function(a,b){return a.blendEquation(b)},
bj:function(a,b,c){return a.blendFunc(b,c)},
bk:function(a,b,c,d){return a.bufferData(b,c,d)},
bl:function(a,b){return a.clear(b)},
bm:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bn:function(a,b){return a.compileShader(b)},
bo:function(a){return a.createBuffer()},
bp:function(a){return a.createProgram()},
bq:function(a,b){return a.createShader(b)},
bs:function(a,b){return a.depthMask(b)},
bt:function(a,b){return a.disable(b)},
bu:function(a,b,c,d){return a.drawArrays(b,c,d)},
bv:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bw:function(a,b){return a.enable(b)},
bx:function(a,b){return a.enableVertexAttribArray(b)},
ac:function(a){return P.a_(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aD:function(a,b){return a.getShaderInfoLog(b)},
aE:function(a,b,c){return a.getShaderParameter(b,c)},
aF:function(a,b,c){return a.getUniformLocation(b,c)},
bz:function(a,b){return a.linkProgram(b)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aK:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bL:function(a,b,c){return a.uniform1f(b,c)},
bM:function(a,b,c){return a.uniform1fv(b,c)},
bN:function(a,b,c){return a.uniform1i(b,c)},
bO:function(a,b,c){return a.uniform1iv(b,c)},
bP:function(a,b,c){return a.uniform2fv(b,c)},
bQ:function(a,b,c){return a.uniform3fv(b,c)},
bR:function(a,b,c){return a.uniform4fv(b,c)},
bS:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bT:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bU:function(a,b){return a.useProgram(b)},
bV:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bX:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lN:{"^":"h;",
d4:function(a,b){return a.beginTransformFeedback(b)},
d7:function(a,b){return a.bindVertexArray(b)},
dg:function(a){return a.createVertexArray()},
di:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dj:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dk:function(a){return a.endTransformFeedback()},
dE:function(a,b,c,d){this.cZ(a,b,H.y(c,"$isa",[P.d],"$asa"),d)
return},
cZ:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dF:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bb:function(a,b){return a.activeTexture(b)},
bd:function(a,b,c){return a.attachShader(b,c)},
be:function(a,b,c){return a.bindBuffer(b,c)},
bg:function(a,b,c){return a.bindFramebuffer(b,c)},
bh:function(a,b,c){return a.bindTexture(b,c)},
bi:function(a,b){return a.blendEquation(b)},
bj:function(a,b,c){return a.blendFunc(b,c)},
bk:function(a,b,c,d){return a.bufferData(b,c,d)},
bl:function(a,b){return a.clear(b)},
bm:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bn:function(a,b){return a.compileShader(b)},
bo:function(a){return a.createBuffer()},
bp:function(a){return a.createProgram()},
bq:function(a,b){return a.createShader(b)},
bs:function(a,b){return a.depthMask(b)},
bt:function(a,b){return a.disable(b)},
bu:function(a,b,c,d){return a.drawArrays(b,c,d)},
bv:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bw:function(a,b){return a.enable(b)},
bx:function(a,b){return a.enableVertexAttribArray(b)},
ac:function(a){return P.a_(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aD:function(a,b){return a.getShaderInfoLog(b)},
aE:function(a,b,c){return a.getShaderParameter(b,c)},
aF:function(a,b,c){return a.getUniformLocation(b,c)},
bz:function(a,b){return a.linkProgram(b)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aK:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bL:function(a,b,c){return a.uniform1f(b,c)},
bM:function(a,b,c){return a.uniform1fv(b,c)},
bN:function(a,b,c){return a.uniform1i(b,c)},
bO:function(a,b,c){return a.uniform1iv(b,c)},
bP:function(a,b,c){return a.uniform2fv(b,c)},
bQ:function(a,b,c){return a.uniform3fv(b,c)},
bR:function(a,b,c){return a.uniform4fv(b,c)},
bS:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bT:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bU:function(a,b){return a.useProgram(b)},
bV:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bX:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hT:{"^":"h;",$ishT:1,"%":"WebGLShader"},i7:{"^":"h;",$isi7:1,"%":"WebGLTexture"},ib:{"^":"h;",$isib:1,"%":"WebGLUniformLocation"},ig:{"^":"h;",$isig:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lU:{"^":"jo;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return P.a_(this.cN(a,b))},
i:function(a,b,c){H.i(c,"$isJ")
throw H.c(P.z("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
cN:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$ast:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jn:{"^":"h+p;"},jo:{"^":"jn+t;"}}],["","",,G,{"^":"",
ik:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a0(z,"\n")},
dI:function(a,b,c){var z,y,x,w
z=J.l(a)
y=z.bq(a,b)
z.aI(a,y,c)
z.bn(a,y)
x=H.bT(z.aE(a,y,35713))
if(x!=null&&!x){w=z.aD(a,y)
P.aB("E:Compilation failed:")
P.aB("E:"+G.ik(c))
P.aB("E:Failure:")
P.aB(C.h.J("E:",w))
throw H.c(w)}return y},
dl:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q
d.C(b)
d.ad(0,a)
e.C(c)
e.ad(0,a)
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
r=Math.sqrt(e.gaa())
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
fP:function(a,b){var z,y
H.y(a,"$isa",[T.q],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.i(b,z,J.bD(a[y]))
if(y>=a.length)return H.k(a,y)
C.i.i(b,z+1,J.c4(a[y]))}return b},
fQ:function(a,b){var z,y,x,w,v
H.y(a,"$isa",[T.b4],"$asa")
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
fO:function(a,b){var z,y
H.y(a,"$isa",[[P.a,P.D]],"$asa")
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
iS:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.an(z,[H.r(z,0)]),y=y.gB(y),x=b.x,w=[[P.a,P.D]],v=[P.ag],u=[T.b4],t=[T.f],s=[T.q];y.v();){r=y.d
if(!x.a8(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ea>0)H.c_("I: "+r)
continue}q=z.h(0,r)
switch($.a6().h(0,r).a){case"vec2":b.Y(r,G.fP(H.by(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.Y(r,G.d7(H.by(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.Y(r,G.fQ(H.by(q,"$isa",u,"$asa"),null),4)
break
case"float":b.Y(r,new Float32Array(H.bP(H.by(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.Y(r,G.fO(H.by(q,"$isa",w,"$asa"),null),4)
break}}},
d9:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.Y(x,P.b)
v=J.eQ(z.a)
u=new G.hf(z,v,4,w,y,0,-1,P.Y(x,P.ae),"meshdata:"+a,!1,!0)
x=G.d7(c.d,null)
w.i(0,"aPosition",J.c2(z.a))
u.ch=x
u.aO("aPosition",x,3)
t=$.a6().h(0,"aPosition")
if(t==null)H.W("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bA(z.a,v)
z.by(0,s,0)
z.bW(0,w.h(0,"aPosition"),s,t.aP(),5126,!1,0,0)
y=H.y(c.cm(),"$isa",[P.D],"$asa")
u.y=J.c2(z.a)
x=u.ch.length
if(x<768){u.sao(new Uint8Array(H.bP(y)))
u.Q=5121}else if(x<196608){u.sao(new Uint16Array(H.bP(y)))
u.Q=5123}else{u.sao(new Uint32Array(H.bP(y)))
u.Q=5125}J.bA(z.a,v)
y=u.y
x=u.cx
J.c0(z.a,34963,y)
J.cI(z.a,34963,x,35048)
G.iS(c,u)
return u},
aW:{"^":"b;"},
b2:{"^":"aW;d,a,b,c",
aQ:function(){return this.d},
k:function(a){var z,y,x,w
z=H.m(["{"+new H.dB(H.k7(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.an(y,[H.r(y,0)]),x=x.gB(x);x.v();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a0(z,"\n")}},
fp:{"^":"b;0a,b",
by:function(a,b,c){J.eX(this.a,b)
if(c>0)J.fe(this.a,b,c)},
bW:function(a,b,c,d,e,f,g,h){J.c0(this.a,34962,b)
J.ff(this.a,c,d,e,!1,g,h)}},
fR:{"^":"b;a,b,c,d,e"},
cc:{"^":"b;a,b,c"},
cd:{"^":"b;a,b,c,d"},
d8:{"^":"b;a,b,c,d,e",
a4:function(a){switch($.a6().h(0,a).a){case"vec2":this.e.i(0,a,H.m([],[T.q]))
break
case"vec3":this.e.i(0,a,H.m([],[T.f]))
break
case"vec4":this.e.i(0,a,H.m([],[T.b4]))
break
case"float":this.e.i(0,a,H.m([],[P.ag]))
break
case"uvec4":this.e.i(0,a,H.m([],[[P.a,P.D]]))
break}},
cg:function(a){var z,y,x
z=this.d.length
for(y=this.b,x=0;x<a;++x,z+=3)C.a.l(y,new G.cc(z,z+1,z+2))},
aM:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.cd(z,z+1,z+2,z+3))},
ag:function(a){var z,y,x,w,v
H.y(a,"$isa",[T.f],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.K)(a),++x){w=a[x]
v=new T.f(new Float32Array(3))
v.C(w)
C.a.l(y,v)}},
af:function(a,b){var z,y,x,w,v,u,t
z=[T.q]
H.y(b,"$isa",z,"$asa")
y=H.y(this.e.h(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.K)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.q(u))}},
cf:function(a,b){var z,y,x,w,v
z=[T.f]
H.y(b,"$isa",z,"$asa")
y=H.y(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.f(new Float32Array(3))
v.C(w)
z.l(y,v)}},
cm:function(){var z,y,x,w,v,u,t,s,r
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
cn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
z=H.m(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.an(y,[H.r(y,0)]),x=x.gB(x);x.v();){w=x.d
v=$.a6().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a0(z," ")}},
dz:{"^":"b;a,b,c"},
dy:{"^":"b;a,b,c"},
hd:{"^":"b2;d,a,b,c",t:{
cj:function(a){var z=P.Y(P.d,P.b)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.el())
z.i(0,"cStencilFunc",$.er())
return new G.hd(z,a,!1,!0)}}},
hf:{"^":"aW;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sao:function(a){this.cx=H.y(a,"$isa",[P.D],"$asa")},
aO:function(a,b,c){var z,y
C.h.aj(a,0)
H.i(b,"$isae")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c0(z.a,34962,y)
J.cI(z.a,34962,b,35048)},
co:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
Y:function(a,b,c){var z,y,x,w,v
z=J.cE(a,0)===105
if(z&&this.z===0)this.z=C.d.cd(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c2(x.a))
this.aO(a,b,c)
w=$.a6().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bA(x.a,this.e)
x.by(0,v,z?1:0)
x.bW(0,y.h(0,a),v,w.aP(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.an(z,[H.r(z,0)]),x=x.gB(x);x.v();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a0(y,"  ")}},
hw:{"^":"b2;x,y,z,Q,ch,cx,cy,db,dx,dy,d,a,b,c",
aQ:function(){var z,y
z=this.z
z.C(this.x.d)
y=this.Q
y.C(this.y)
y.bA(0,z)
z=this.d
z.i(0,"uPerspectiveViewMatrix",y)
return z},
aS:function(){var z,y,x,w,v,u,t,s,r,q
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
ci:function(a,b){var z
if(typeof a!=="number")return a.dH()
if(typeof b!=="number")return H.bv(b)
z=a/b
if(this.ch===z)return
this.ch=z
this.aS()}},
kQ:{"^":"b;"},
hM:{"^":"aW;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cs:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.cK(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.cK(w.a,v,t))}},
cv:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.d])
x=H.m([],[P.d])
for(y=new H.an(y,[H.r(y,0)]),y=y.gB(y);y.v();){w=y.d
if(!z.a8(0,w))C.a.l(x,w)}for(z=this.x,z=P.dN(z,z.r,H.r(z,0)),y=this.Q;z.v();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.y(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.an(b,[H.r(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.v();){s=y.d
switch(J.cE(s,0)){case 117:if(w.a8(0,s)){r=b.h(0,s)
if(v.a8(0,s))H.c_("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a6().h(0,s)
if(q==null)H.W("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.N(r)
J.c6(x.a,p,r)}else if(!!J.B(r).$isfX)J.fc(x.a,p,r)
break
case"float":if(q.c===0){H.e8(r)
J.fa(x.a,p,r)}else if(!!J.B(r).$isae)J.fb(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ai(r,"$isO").a
J.cQ(x.a,p,!1,s)}else if(!!J.B(r).$isae)J.cQ(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ai(r,"$isao").a
J.cP(x.a,p,!1,s)}else if(!!J.B(r).$isae)J.cP(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cO(o,p,H.ai(r,"$isb4").a)
else J.cO(o,p,H.i(r,"$isae"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cN(o,p,H.ai(r,"$isf").a)
else J.cN(o,p,H.i(r,"$isae"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cM(o,p,H.ai(r,"$isq").a)
else J.cM(o,p,H.i(r,"$isae"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bv(s)
J.cF(x.a,33984+s)
s=H.ai(r,"$isi6").cp()
J.cH(x.a,3553,s)
s=this.ch
J.c6(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bv(s)
J.cF(x.a,33984+s)
s=H.ai(r,"$isi6").cp()
J.cH(x.a,34067,s)
s=this.ch
J.c6(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
default:H.c_("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aD(r,!0)
o=x.a
if(s)J.bB(o,2929)
else J.c3(o,2929)
break
case"cStencilFunc":H.ai(r,"$isdz")
s=r.a
o=x.a
if(s===1281)J.c3(o,2960)
else{J.bB(o,2960)
o=r.b
n=r.c
J.f7(x.a,s,o,n)}break
case"cDepthWrite":H.bT(r)
J.eR(x.a,r)
break
case"cBlendEquation":H.ai(r,"$isdy")
s=r.a
o=x.a
if(s===1281)J.c3(o,3042)
else{J.bB(o,3042)
o=r.b
n=r.c
J.eL(x.a,o,n)
J.eK(x.a,s)}break}++t
break}}m=P.fI(0,0,0,Date.now()-new P.bG(z,!1).a,0,0)
""+t
m.k(0)},
cl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.y(b,"$isa",[G.b2],"$asa")
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
y.b4()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.K)(b),++x){w=b[x]
this.cz(w.a,w.aQ())}y=this.Q
y.a_(0)
for(v=a.cy,v=new H.an(v,[H.r(v,0)]),v=v.gB(v);v.v();)y.l(0,v.d)
u=this.cv()
if(u.length!==0)P.aB("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bA(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.co()
s=a.Q
r=a.z
if(t)J.eI(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.eV(q,v,y,s,0,r)
else J.eU(q,v,y,s,0)}else{s=z.a
if(r>1)J.eT(s,v,0,y,r)
else J.eS(s,v,0,y)}if(t)J.eY(z.a)},
t:{
hN:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
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
z=new G.hM(b,c,d,u,P.ci(c.c,z),P.Y(z,P.b),P.Y(z,z),y,a,!1,!0)
z.cs(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
aP:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hU:{"^":"b;a,0b,c,d,e,f,r,x",
ce:function(a){var z,y,x,w
H.y(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.aJ(z)},
aN:function(a){var z,y,x
H.y(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.K)(a),++x)C.a.l(y,a[x])
C.a.aJ(y)},
ct:function(a,b){this.b=this.cA(!0,H.y(a,"$isa",[P.d],"$asa"),b)},
aR:function(a){return this.ct(a,null)},
cA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.y(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.K)(y),++u){t=y[u]
s=$.a6().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.k(z,u)
q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.a6().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.K(w,b)
C.a.l(w,"}")
return C.a.a0(w,"\n")},
t:{
ds:function(a){var z,y
z=P.d
y=[z]
return new G.hU(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.Y(z,P.D))}}},
dt:{"^":"aW;",
X:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
cl:function(a,b,c,d,e,f,g,h,i){return G.d9("cube",a,B.fz(!0,c,d,e,f,g,h,i))},
j0:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.iC("span",null),"$isR")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).ai(y,"float")
y.setProperty(x,"left","")
x=C.w.ai(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.I(z,v)}return z},
hZ:{"^":"b;",
cu:function(a,b,c){var z,y
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
i_:{"^":"hZ;e,f,a,b,c,d",
cw:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dD(y,2)+" fps"
C.p.c2(this.c,b)
x=C.d.U(30*C.x.d8(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isR")
v=w.style
u=""+x+"px"
v.height=u
C.p.I(z,w)}}}],["","",,A,{"^":"",
e9:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.y(e,"$isa",[G.b2],"$asa")
z=b.dx
z.C(c)
y=b.d
z.bA(0,y)
x=b.ch
if(x!=null&&b.cx!=null){H.e(b)
w=C.a.gdr(e)
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
v.dc(new T.ao(u))
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
a.cl(b.cx,e,d)
if(0>=e.length)return H.k(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.K)(y),++r)A.e9(a,y[r],z,d,e)},
aX:{"^":"dt;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
dq:{"^":"aW;d,e,f,a,b,c"},
hL:{"^":"aW;d,e,f,r,x,y,z,Q,a,b,c",
ck:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eJ(v.a,36160,z)
J.fg(v.a,this.x,this.y,x,w)
if(y!==0)J.eM(v.a,y)
for(z=this.f,y=z.length,x=P.d,w=P.b,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
s=t.e
C.a.l(s,new G.b2(P.Y(x,w),"transforms",!1,!0))
r=new T.O(new Float32Array(16))
r.G()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.K)(v),++o)A.e9(p,v[o],r,a,s)
if(0>=s.length)return H.k(s,-1)
s.pop()}},
cj:function(){return this.ck(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fz:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
a2=new G.d8(!1,H.m([],[G.cc]),H.m([],[G.cd]),H.m([],t),P.Y(P.d,[P.a,,]))
a2.a4("aTexUV")
a2.a4("aNormal")
a2.aM(6)
a2.ag(a0)
a2.af("aTexUV",a1)
for(a3=0;z=$.eC(),a3<6;++a3){a4=z[a3]
a2.cf("aNormal",H.m([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",h3:{"^":"b;a,b,c",
cq:function(a){var z,y
a=document
z=W.aU
y={func:1,ret:-1,args:[z]}
W.az(a,"keydown",H.n(new D.h5(this),y),!1,z)
W.az(a,"keyup",H.n(new D.h6(this),y),!1,z)},
t:{
h4:function(a){var z=P.D
z=new D.h3(P.a1(null,null,null,z),P.a1(null,null,null,z),P.a1(null,null,null,z))
z.cq(a)
return z}}},h5:{"^":"o:11;a",
$1:function(a){var z
H.i(a,"$isaU")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},h6:{"^":"o:11;a",
$1:function(a){var z
H.i(a,"$isaU")
z=this.a
z.a.bG(0,a.which)
z.c.l(0,a.which)}},hi:{"^":"b;a,b,c,d,e,f,r,x",
cr:function(a){var z,y,x
if(a==null)a=document
z=J.l(a)
y=z.gbD(a)
x=H.r(y,0)
W.az(y.a,y.b,H.n(new D.hk(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbC(a)
y=H.r(x,0)
W.az(x.a,x.b,H.n(new D.hl(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbE(a)
x=H.r(y,0)
W.az(y.a,y.b,H.n(new D.hm(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbF(a)
x=H.r(z,0)
W.az(z.a,z.b,H.n(new D.hn(this),{func:1,ret:-1,args:[x]}),!1,x)},
t:{
hj:function(a){var z=P.D
z=new D.hi(P.a1(null,null,null,z),P.a1(null,null,null,z),P.a1(null,null,null,z),0,0,0,0,0)
z.cr(a)
return z}}},hk:{"^":"o:3;a",
$1:function(a){var z,y
H.i(a,"$isT")
a.preventDefault()
z=this.a
y=J.l(a)
z.r=H.N(y.gbB(a).a)
z.x=H.N(y.gbB(a).b)
z.d=a.movementX
z.e=a.movementY}},hl:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isT")
a.preventDefault()
P.aB("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hm:{"^":"o:3;a",
$1:function(a){var z
H.i(a,"$isT")
a.preventDefault()
z=this.a
z.a.bG(0,a.button)
z.c.l(0,a.button)}},hn:{"^":"o:24;a",
$1:function(a){H.i(a,"$isaH")
a.preventDefault()
this.a.f=H.N(C.ab.gdh(a))}},hv:{"^":"dt;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bu:function(a){var z,y
z=C.i.dl(H.y(a,"$isj",[P.b],"$asj"),0,new A.k9(),P.D)
if(typeof z!=="number")return H.bv(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k9:{"^":"o:25;",
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
gA:function(a){return A.bu(this.a)},
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
dc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
gA:function(a){return A.bu(this.a)},
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
return new T.b4(z)},
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
bA:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.bu(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gab:function(a){return this.a[0]},
ga1:function(a){return this.a[1]}},f:{"^":"b;a",
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
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.f){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.bu(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gaa())},
gaa:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
ax:function(a){var z,y,x
z=Math.sqrt(this.gaa())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
av:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
br:function(a){var z,y,x,w,v,u,t,s
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
ad:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
gab:function(a){return this.a[0]},
ga1:function(a){return this.a[1]},
gbY:function(a){return this.a[2]},
t:{
af:function(a,b,c){var z=new T.f(new Float32Array(3))
z.p(a,b,c)
return z}}},b4:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b4){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.bu(this.a)},
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
gab:function(a){return this.a[0]},
ga1:function(a){return this.a[1]},
gbY:function(a){return this.a[2]},
gdG:function(a){return this.a[3]}}}],["","",,F,{"^":"",
eg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
z={}
y=document
x=C.q.c0(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.i_(0,0,x,w,y.createElement("div"),R.j0("blue","gray",90,30))
u.cu(x,"blue","gray")
t=H.i(C.q.du(y,"#webgl-canvas"),"$isc9")
s=new G.fp(t)
y=P.d
x=P.b
v=(t&&C.H).c_(t,"webgl2",P.df(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.W(P.d5('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.f3(v))
if($.ea>0)P.aB("I: "+r)
J.eN(v,0,0,0,1)
J.bB(v,2929)
v=new Float32Array(3)
r=D.h4(null)
q=D.hj(t)
p=new T.O(new Float32Array(16))
p.G()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hv(20,0,0,0,new T.f(v),-0.02,r,q,p,new T.f(o),new T.f(n),new T.f(m),new T.f(new Float32Array(3)),"camera:orbit",!1,!0)
v=new Float32Array(16)
r=new Float32Array(16)
q=new T.O(new Float32Array(16))
q.G()
k=new G.hw(l,new T.O(v),new T.O(r),q,1,-40,40,-40,-40,100,P.Y(y,x),"othrogrpahic",!1,!0)
k.aS()
x=H.m([],[A.dq])
j=new A.hL(null,s,x,17664,0,0,0,0,"shadow",!1,!0)
j.d=new G.fR(s,null,null,null,null)
v=G.hN("textured",s,$.eF(),$.eE())
r=H.m([k],[G.b2])
q=[A.aX]
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
c=new A.aX(i,x,r,new T.ao(o),n,m,new T.f(f),new T.f(e),new T.f(d),new T.f(new Float32Array(3)),"side1",!1,!0)
c.X(-3,0,0)
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
b=new A.aX(h,x,r,new T.ao(o),n,m,new T.f(f),new T.f(e),new T.f(d),new T.f(new Float32Array(3)),"side2",!1,!0)
b.X(-15,0,18)
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
a=new A.aX(g,x,r,new T.ao(o),n,m,new T.f(f),new T.f(e),new T.f(d),new T.f(new Float32Array(3)),"side3a",!1,!0)
a.X(15,9,0)
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
b0.a4("aTexUV")
b0.a4("aNormal")
b0.cg(2)
b0.ag(a0)
b0.af("aTexUV",a7)
b0.aM(3)
b0.ag(a6)
b0.af("aTexUV",a9)
b0.cn()
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
b1=new A.aX(g,y,x,new T.ao(v),r,n,new T.f(m),new T.f(f),new T.f(e),new T.f(new Float32Array(3)),"side3b",!1,!0)
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
b1.X(15,24,0)
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
C.a.l(p,new A.aX(null,null,q,new T.ao(y),x,r,new T.f(o),new T.f(n),new T.f(m),new T.f(f),"triangle",!1,!0))
y=new F.kn(t,k,j)
y.$1(null)
x=W.a0
W.az(window,"resize",H.n(y,{func:1,ret:-1,args:[x]}),!1,x)
l.cy=0.6108652381980153
l.cx=-0.7853981633974483
z.a=0
new F.km(z,l,j,u).$1(0)},
kn:{"^":"o:26;a,b,c",
$1:function(a){var z,y,x
z=this.a
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aB("size change "+H.e(y)+" "+H.e(x))
this.b.ci(y,x)
z=this.c
z.z=y
z.Q=x}},
km:{"^":"o:27;a,b,c,d",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cz(a9)
if(typeof a9!=="number")return a9.aL()
z=this.a
z.a=a9+0
y=this.b
x=y.fx
w=x.a
if(w.w(0,0)||w.w(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aG()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aG()
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
if(typeof v!=="number")return v.aG()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.r.d9(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
y.X(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.dx
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=new T.f(new Float32Array(3))
r.p(0,1,0)
u=y.e
q=u.a
q[0]=v[12]
q[1]=v[13]
q[2]=v[14]
q=new Float32Array(3)
p=new T.f(q)
p.C(u)
p.ad(0,t)
p.ax(0)
o=r.br(p)
o.ax(0)
n=p.br(o)
n.ax(0)
t=o.av(u)
m=n.av(u)
u=p.av(u)
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
k=y.db
i=y.f
h=i.a
h[0]=v[2]
h[1]=v[6]
h[2]=v[10]
k=-k
d=Math.sqrt(i.gaa())
o=h[0]/d
n=h[1]/d
p=h[2]/d
c=Math.cos(k)
b=Math.sin(k)
a=1-c
a0=o*o*a+c
k=p*b
a1=o*n*a-k
h=n*b
a2=o*p*a+h
a3=n*o*a+k
a4=n*n*a+c
k=o*b
a5=n*p*a-k
a6=p*o*a-h
a7=p*n*a+k
a8=p*p*a+c
k=v[0]
h=v[4]
i=v[8]
g=v[1]
f=v[5]
e=v[9]
l=v[2]
j=v[6]
q=v[10]
t=v[3]
m=v[7]
u=v[11]
v[0]=k*a0+h*a3+i*a6
v[1]=g*a0+f*a3+e*a6
v[2]=l*a0+j*a3+q*a6
v[3]=t*a0+m*a3+u*a6
v[4]=k*a1+h*a4+i*a7
v[5]=g*a1+f*a4+e*a7
v[6]=l*a1+j*a4+q*a7
v[7]=t*a1+m*a4+u*a7
v[8]=k*a2+h*a5+i*a8
v[9]=g*a2+f*a5+e*a8
v[10]=l*a2+j*a5+q*a8
v[11]=t*a2+m*a5+u*a8
w.c.a_(0)
w.b.a_(0)
x.e=0
x.d=0
x.f=0
x.c.a_(0)
x.b.a_(0)
y.db+=0.01
x=y.cy
y=y.cx
this.c.cj()
C.ac.gd2(window).bI(this,-1)
this.d.cw(z.a,H.e(x*180/3.141592653589793)+"<br>"+H.e(y*180/3.141592653589793))}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dc.prototype
return J.db.prototype}if(typeof a=="string")return J.bn.prototype
if(a==null)return J.h1.prototype
if(typeof a=="boolean")return J.h0.prototype
if(a.constructor==Array)return J.bl.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.b)return a
return J.bX(a)}
J.bc=function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.bl.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.b)return a
return J.bX(a)}
J.eb=function(a){if(a==null)return a
if(a.constructor==Array)return J.bl.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.b)return a
return J.bX(a)}
J.k5=function(a){if(typeof a=="number")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.k6=function(a){if(typeof a=="number")return J.bm.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.ec=function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.b)return a
return J.bX(a)}
J.bW=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b3.prototype
return a}
J.aD=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).E(a,b)}
J.a7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k5(a).S(a,b)}
J.bg=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kj(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bc(a).h(a,b)}
J.cE=function(a,b){return J.ec(a).aj(a,b)}
J.bz=function(a,b){return J.l(a).cR(a,b)}
J.eG=function(a,b,c){return J.l(a).cS(a,b,c)}
J.cF=function(a,b){return J.l(a).bb(a,b)}
J.eH=function(a,b,c,d){return J.l(a).d_(a,b,c,d)}
J.cG=function(a,b,c){return J.l(a).bd(a,b,c)}
J.eI=function(a,b){return J.l(a).d4(a,b)}
J.c0=function(a,b,c){return J.l(a).be(a,b,c)}
J.eJ=function(a,b,c){return J.l(a).bg(a,b,c)}
J.cH=function(a,b,c){return J.l(a).bh(a,b,c)}
J.bA=function(a,b){return J.l(a).d7(a,b)}
J.eK=function(a,b){return J.l(a).bi(a,b)}
J.eL=function(a,b,c){return J.l(a).bj(a,b,c)}
J.cI=function(a,b,c,d){return J.l(a).bk(a,b,c,d)}
J.eM=function(a,b){return J.l(a).bl(a,b)}
J.eN=function(a,b,c,d,e){return J.l(a).bm(a,b,c,d,e)}
J.eO=function(a,b){return J.k6(a).M(a,b)}
J.c1=function(a,b,c){return J.bc(a).da(a,b,c)}
J.c2=function(a){return J.l(a).bo(a)}
J.eP=function(a){return J.l(a).bp(a)}
J.eQ=function(a){return J.l(a).dg(a)}
J.eR=function(a,b){return J.l(a).bs(a,b)}
J.c3=function(a,b){return J.l(a).bt(a,b)}
J.eS=function(a,b,c,d){return J.l(a).bu(a,b,c,d)}
J.eT=function(a,b,c,d,e){return J.l(a).di(a,b,c,d,e)}
J.eU=function(a,b,c,d,e){return J.l(a).bv(a,b,c,d,e)}
J.eV=function(a,b,c,d,e,f){return J.l(a).dj(a,b,c,d,e,f)}
J.eW=function(a,b){return J.eb(a).u(a,b)}
J.bB=function(a,b){return J.l(a).bw(a,b)}
J.eX=function(a,b){return J.l(a).bx(a,b)}
J.eY=function(a){return J.l(a).dk(a)}
J.eZ=function(a,b){return J.l(a).F(a,b)}
J.f_=function(a){return J.l(a).gd3(a)}
J.aj=function(a){return J.B(a).gA(a)}
J.bC=function(a){return J.eb(a).gB(a)}
J.aO=function(a){return J.bc(a).gj(a)}
J.f0=function(a){return J.l(a).gdt(a)}
J.f1=function(a){return J.l(a).gdB(a)}
J.f2=function(a){return J.bW(a).gdG(a)}
J.bD=function(a){return J.bW(a).gab(a)}
J.c4=function(a){return J.bW(a).ga1(a)}
J.cJ=function(a){return J.bW(a).gbY(a)}
J.c5=function(a,b){return J.l(a).W(a,b)}
J.f3=function(a){return J.l(a).ac(a)}
J.f4=function(a,b){return J.l(a).aA(a,b)}
J.f5=function(a,b,c){return J.l(a).aB(a,b,c)}
J.cK=function(a,b,c){return J.l(a).aF(a,b,c)}
J.f6=function(a,b){return J.l(a).bz(a,b)}
J.cL=function(a){return J.l(a).dv(a)}
J.f7=function(a,b,c,d){return J.l(a).aK(a,b,c,d)}
J.f8=function(a){return J.ec(a).dC(a)}
J.bh=function(a){return J.B(a).k(a)}
J.f9=function(a,b,c,d){return J.l(a).dE(a,b,c,d)}
J.fa=function(a,b,c){return J.l(a).bL(a,b,c)}
J.fb=function(a,b,c){return J.l(a).bM(a,b,c)}
J.c6=function(a,b,c){return J.l(a).bN(a,b,c)}
J.fc=function(a,b,c){return J.l(a).bO(a,b,c)}
J.cM=function(a,b,c){return J.l(a).bP(a,b,c)}
J.cN=function(a,b,c){return J.l(a).bQ(a,b,c)}
J.cO=function(a,b,c){return J.l(a).bR(a,b,c)}
J.cP=function(a,b,c,d){return J.l(a).bS(a,b,c,d)}
J.cQ=function(a,b,c,d){return J.l(a).bT(a,b,c,d)}
J.fd=function(a,b){return J.l(a).bU(a,b)}
J.fe=function(a,b,c){return J.l(a).dF(a,b,c)}
J.ff=function(a,b,c,d,e,f,g){return J.l(a).bV(a,b,c,d,e,f,g)}
J.fg=function(a,b,c,d,e){return J.l(a).bX(a,b,c,d,e)}
I.aM=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bE.prototype
C.H=W.c9.prototype
C.w=W.fw.prototype
C.p=W.fE.prototype
C.I=W.fG.prototype
C.J=W.fU.prototype
C.q=W.fV.prototype
C.K=J.h.prototype
C.a=J.bl.prototype
C.x=J.db.prototype
C.d=J.dc.prototype
C.r=J.bm.prototype
C.h=J.bn.prototype
C.R=J.bo.prototype
C.i=H.ho.prototype
C.m=H.hq.prototype
C.V=W.hr.prototype
C.A=J.hy.prototype
C.B=W.hI.prototype
C.G=W.i5.prototype
C.v=J.b3.prototype
C.ab=W.aH.prototype
C.ac=W.ii.prototype
C.e=new P.jc()
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
C.S=H.m(I.aM(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.T=H.m(I.aM(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.U=H.m(I.aM([]),[P.d])
C.t=H.m(I.aM(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.m(I.aM(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
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
$.aP=null
$.cT=null
$.cq=!1
$.ee=null
$.e5=null
$.ej=null
$.bU=null
$.bY=null
$.cx=null
$.aJ=null
$.b6=null
$.b7=null
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
I.$lazy(y,x,w)}})(["kK","eq",function(){return H.ed("_$dart_dartClosure")},"ln","cB",function(){return H.ed("_$dart_js")},"m7","es",function(){return H.aa(H.bM({
toString:function(){return"$receiver$"}}))},"m8","et",function(){return H.aa(H.bM({$method$:null,
toString:function(){return"$receiver$"}}))},"m9","eu",function(){return H.aa(H.bM(null))},"ma","ev",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"md","ey",function(){return H.aa(H.bM(void 0))},"me","ez",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mc","ex",function(){return H.aa(H.dA(null))},"mb","ew",function(){return H.aa(function(){try{null.$method$}catch(z){return z.message}}())},"mg","eB",function(){return H.aa(H.dA(void 0))},"mf","eA",function(){return H.aa(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mq","cC",function(){return P.il()},"mH","bf",function(){return[]},"kH","ep",function(){return{}},"my","eD",function(){return P.ci(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mz","cD",function(){return P.Y(P.d,P.bj)},"lV","er",function(){return new G.dz(1281,0,4294967295)},"kA","el",function(){return new G.dy(1281,1281,1281)},"mF","a6",function(){return P.df(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a7,"uAnimationTable",C.f,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.d,G.C)},"kD","em",function(){return T.af(0,0,1)},"kF","eo",function(){return T.af(1,0,0)},"kE","en",function(){return T.af(0,1,0)},"mM","eF",function(){var z,y
z=G.ds("SolidColor")
y=[P.d]
z.ce(H.m(["aPosition"],y))
z.aN(H.m(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aR(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"mL","eE",function(){var z,y
z=G.ds("SolidColorF")
y=[P.d]
z.aN(H.m(["uColor"],y))
z.aR(H.m(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"mv","eC",function(){return H.m([T.af(0,0,1),T.af(0,0,-1),T.af(0,1,0),T.af(0,-1,0),T.af(1,0,0),T.af(-1,0,0)],[T.f])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.G,args:[W.T]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.d,args:[P.D]},{func:1,ret:P.Q,args:[W.a9]},{func:1,ret:P.Q,args:[P.d]},{func:1,ret:P.G,args:[W.aU]},{func:1,ret:P.Q,args:[W.R,P.d,P.d,W.br]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a2]},{func:1,ret:[P.ab,,],args:[,]},{func:1,ret:P.Q,args:[W.u]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.G,args:[P.E]},{func:1,args:[W.a0]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.G,args:[W.aH]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.kt(d||a)
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
Isolate.bb=a.bb
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
