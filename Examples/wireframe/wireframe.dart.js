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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isj)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="u"){processStatics(init.statics[b2]=b3.u,b4)
delete b3.u}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cv(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bh=function(){}
var dart=[["","",,H,{"^":"",ly:{"^":"c;a"}}],["","",,J,{"^":"",
cz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cy==null){H.kt()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.dG("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cD()]
if(v!=null)return v
v=H.ky(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cD(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
j:{"^":"c;",
G:function(a,b){return a===b},
gB:function(a){return H.b6(a)},
l:["cn",function(a){return"Instance of '"+H.b7(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h7:{"^":"j;",
l:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$isU:1},
h8:{"^":"j;",
G:function(a,b){return null==b},
l:function(a){return"null"},
gB:function(a){return 0},
$isI:1},
cj:{"^":"j;",
gB:function(a){return 0},
l:["cp",function(a){return String(a)}]},
hG:{"^":"cj;"},
ba:{"^":"cj;"},
bv:{"^":"cj;",
l:function(a){var z=a[$.eq()]
if(z==null)return this.cp(a)
return"JavaScript function for "+H.h(J.bo(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbq:1},
bs:{"^":"j;$ti",
j:function(a,b){H.A(b,H.r(a,0))
if(!!a.fixed$length)H.a0(P.z("add"))
a.push(b)},
I:function(a,b){var z,y
H.x(b,"$isl",[H.r(a,0)],"$asl")
if(!!a.fixed$length)H.a0(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.F)(b),++y)a.push(b[y])},
ac:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.h(a[y]))
return z.join(b)},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
gdF:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.dc())},
bo:function(a,b){var z,y
H.n(b,{func:1,ret:P.U,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aJ(a))}return!1},
ci:function(a,b){if(!!a.immutable$list)H.a0(P.z("sort"))
H.i7(a,J.k3(),H.r(a,0))},
aq:function(a){return this.ci(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aH(a[z],b))return!0
return!1},
l:function(a){return P.ch(a,"[","]")},
gD:function(a){return new J.fn(a,a.length,0,[H.r(a,0)])},
gB:function(a){return H.b6(a)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bg(a,b))
return a[b]},
h:function(a,b,c){H.A(c,H.r(a,0))
if(!!a.immutable$list)H.a0(P.z("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bg(a,b))
a[b]=c},
$isw:1,
$asw:I.bh,
$isl:1,
$isa:1,
u:{
h6:function(a,b){return J.ci(H.f(a,[b]))},
ci:function(a){H.bD(a)
a.fixed$length=Array
return a},
lw:[function(a,b){return J.eS(H.ek(a,"$isZ"),H.ek(b,"$isZ"))},"$2","k3",8,0,29]}},
lx:{"^":"bs;$ti"},
fn:{"^":"c;a,b,c,0d,$ti",
sb4:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.F(z))
x=this.c
if(x>=y){this.sb4(null)
return!1}this.sb4(z[x]);++this.c
return!0},
$isb0:1},
bt:{"^":"j;",
R:function(a,b){var z
H.cA(b)
if(typeof b!=="number")throw H.d(H.be(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gan(b)
if(this.gan(a)===z)return 0
if(this.gan(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gan:function(a){return a===0?1/a<0:a<0},
bX:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.z(""+a+".toInt()"))},
dl:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.z(""+a+".ceil()"))},
dm:function(a,b,c){if(this.R(b,c)>0)throw H.d(H.be(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
dQ:function(a,b){var z
if(b>20)throw H.d(P.bQ(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gan(a))return"-"+z
return z},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
cr:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bl(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.bl(a,b)},
bl:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.z("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
bj:function(a,b){var z
if(a>0)z=this.d8(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d8:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.d(H.be(b))
return a>b},
$isZ:1,
$asZ:function(){return[P.E]},
$isa4:1,
$isE:1},
de:{"^":"bt;",$isD:1},
dd:{"^":"bt;"},
bu:{"^":"j;",
av:function(a,b){if(b>=a.length)throw H.d(H.bg(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.v(b)
if(typeof b!=="string")throw H.d(P.cU(b,null,null))
return a+b},
ck:function(a,b,c){var z
if(c>a.length)throw H.d(P.bQ(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cj:function(a,b){return this.ck(a,b,0)},
cm:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bR(b,null,null))
if(b>c)throw H.d(P.bR(b,null,null))
if(c>a.length)throw H.d(P.bR(c,null,null))
return a.substring(b,c)},
cl:function(a,b){return this.cm(a,b,null)},
dP:function(a){return a.toLowerCase()},
dn:function(a,b,c){if(c>a.length)throw H.d(P.bQ(c,0,a.length,null,null))
return H.kF(a,b,c)},
R:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.d(H.be(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
l:function(a){return a},
gB:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.d(H.bg(a,b))
return a[b]},
$isw:1,
$asw:I.bh,
$isZ:1,
$asZ:function(){return[P.e]},
$ishE:1,
$ise:1}}],["","",,H,{"^":"",
dc:function(){return new P.cn("No element")},
h5:function(){return new P.cn("Too many elements")},
i7:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.n(b,{func:1,ret:P.D,args:[c,c]})
H.bw(a,0,J.aU(a)-1,b,c)},
bw:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.i6(a,b,c,d,e)
else H.i5(a,b,c,d,e)},
i6:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.n(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.bi(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.ac(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
i5:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.n(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.d.a3(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a3(b+a0,2)
v=w-z
u=w+z
t=J.bi(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.ac(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ac(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ac(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ac(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ac(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ac(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ac(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ac(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ac(a1.$2(p,o),0)){n=o
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
if(typeof i!=="number")return i.ad()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a0()
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
if(typeof e!=="number")return e.ad()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.a0()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.a0()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ad()
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
H.bw(a,b,m-2,a1,a2)
H.bw(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aH(a1.$2(t.i(a,m),r),0);)++m
for(;J.aH(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ad()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bw(a,m,l,a1,a2)}else H.bw(a,m,l,a1,a2)},
d4:{"^":"l;"},
bP:{"^":"d4;$ti",
gD:function(a){return new H.di(this,this.gk(this),0,[H.cx(this,"bP",0)])},
aK:function(a,b){return this.co(0,H.n(b,{func:1,ret:P.U,args:[H.cx(this,"bP",0)]}))}},
di:{"^":"c;a,b,c,0d,$ti",
sb5:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.bi(z)
x=y.gk(z)
if(this.b!==x)throw H.d(P.aJ(z))
w=this.c
if(w>=x){this.sb5(null)
return!1}this.sb5(y.v(z,w));++this.c
return!0},
$isb0:1},
hj:{"^":"bP;a,b,$ti",
gk:function(a){return J.aU(this.a)},
v:function(a,b){return this.b.$1(J.f_(this.a,b))},
$asbP:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
dH:{"^":"l;a,b,$ti",
gD:function(a){return new H.iu(J.bI(this.a),this.b,this.$ti)}},
iu:{"^":"b0;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gE(z)))return!0
return!1},
gE:function(a){var z=this.a
return z.gE(z)}},
bO:{"^":"c;$ti"}}],["","",,H,{"^":"",
aG:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kl:function(a){return init.types[H.R(a)]},
kw:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isy},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bo(a)
if(typeof z!=="string")throw H.d(H.be(a))
return z},
b6:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b7:function(a){return H.hH(a)+H.bW(H.am(a),0,null)},
hH:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isba){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aG(w.length>1&&C.i.av(w,0)===36?C.i.cl(w,1):w)},
aM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hO:function(a){var z=H.aM(a).getFullYear()+0
return z},
hM:function(a){var z=H.aM(a).getMonth()+1
return z},
hI:function(a){var z=H.aM(a).getDate()+0
return z},
hJ:function(a){var z=H.aM(a).getHours()+0
return z},
hL:function(a){var z=H.aM(a).getMinutes()+0
return z},
hN:function(a){var z=H.aM(a).getSeconds()+0
return z},
hK:function(a){var z=H.aM(a).getMilliseconds()+0
return z},
aE:function(a){throw H.d(H.be(a))},
i:function(a,b){if(a==null)J.aU(a)
throw H.d(H.bg(a,b))},
bg:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.R(J.aU(a))
if(!(b<0)){if(typeof z!=="number")return H.aE(z)
y=b>=z}else y=!0
if(y)return P.G(b,a,"index",null,z)
return P.bR(b,"index",null)},
be:function(a){return new P.aI(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.dq()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.en})
z.name=""}else z.toString=H.en
return z},
en:function(){return J.bo(this.dartException)},
a0:function(a){throw H.d(a)},
F:function(a){throw H.d(P.aJ(a))},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bj(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ck(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dp(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eu()
u=$.ev()
t=$.ew()
s=$.ex()
r=$.eA()
q=$.eB()
p=$.ez()
$.ey()
o=$.eD()
n=$.eC()
m=v.N(y)
if(m!=null)return z.$1(H.ck(H.v(y),m))
else{m=u.N(y)
if(m!=null){m.method="call"
return z.$1(H.ck(H.v(y),m))}else{m=t.N(y)
if(m==null){m=s.N(y)
if(m==null){m=r.N(y)
if(m==null){m=q.N(y)
if(m==null){m=p.N(y)
if(m==null){m=s.N(y)
if(m==null){m=o.N(y)
if(m==null){m=n.N(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dp(H.v(y),m))}}return z.$1(new H.ir(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dw()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dw()
return a},
bk:function(a){var z
if(a==null)return new H.dX(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dX(a)},
kh:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
kv:function(a,b,c,d,e,f){H.k(a,"$isbq")
switch(H.R(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.d8("Unsupported number of arguments for wrapped closure"))},
bf:function(a,b){var z
H.R(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kv)
a.$identity=z
return z},
fy:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hS(z).r}else x=d
w=e?Object.create(new H.i8().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ad
if(typeof u!=="number")return u.L()
$.ad=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cZ(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kl,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cX:H.cd
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
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
fv:function(a,b,c,d){var z=H.cd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fx(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fv(y,!w,z,b)
if(y===0){w=$.ad
if(typeof w!=="number")return w.L()
$.ad=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aV
if(v==null){v=H.bL("self")
$.aV=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ad
if(typeof w!=="number")return w.L()
$.ad=w+1
t+=w
w="return function("+t+"){return this."
v=$.aV
if(v==null){v=H.bL("self")
$.aV=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
fw:function(a,b,c,d){var z,y
z=H.cd
y=H.cX
switch(b?-1:a){case 0:throw H.d(H.hZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fx:function(a,b){var z,y,x,w,v,u,t,s
z=$.aV
if(z==null){z=H.bL("self")
$.aV=z}y=$.cW
if(y==null){y=H.bL("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fw(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ad
if(typeof y!=="number")return y.L()
$.ad=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ad
if(typeof y!=="number")return y.L()
$.ad=y+1
return new Function(z+y+"}")()},
cv:function(a,b,c,d,e,f,g){return H.fy(a,b,H.R(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a8(a,"String"))},
eb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a8(a,"double"))},
cA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a8(a,"num"))},
bZ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a8(a,"bool"))},
R:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a8(a,"int"))},
cB:function(a,b){throw H.d(H.a8(a,H.aG(H.v(b).substring(3))))},
kC:function(a,b){throw H.d(H.cY(a,H.aG(H.v(b).substring(3))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cB(a,b)},
ai:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kC(a,b)},
ek:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cB(a,b)},
bD:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.d(H.a8(a,"List<dynamic>"))},
kx:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cB(a,b)},
cw:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.R(z)]
else return a.$S()}return},
bA:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cw(J.B(a))
if(z==null)return!1
return H.e2(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.cr)return a
$.cr=!0
try{if(H.bA(a,b))return a
z=H.bE(b)
y=H.a8(a,z)
throw H.d(y)}finally{$.cr=!1}},
c0:function(a,b){if(a!=null&&!H.cu(a,b))H.a0(H.a8(a,H.bE(b)))
return a},
e6:function(a){var z,y
z=J.B(a)
if(!!z.$isp){y=H.cw(z)
if(y!=null)return H.bE(y)
return"Closure"}return H.b7(a)},
kG:function(a){throw H.d(new P.fF(H.v(a)))},
eg:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
am:function(a){if(a==null)return
return a.$ti},
mX:function(a,b,c){return H.aT(a["$as"+H.h(c)],H.am(b))},
bj:function(a,b,c,d){var z
H.v(c)
H.R(d)
z=H.aT(a["$as"+H.h(c)],H.am(b))
return z==null?null:z[d]},
cx:function(a,b,c){var z
H.v(b)
H.R(c)
z=H.aT(a["$as"+H.h(b)],H.am(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.R(b)
z=H.am(a)
return z==null?null:z[b]},
bE:function(a){return H.aD(a,null)},
aD:function(a,b){var z,y
H.x(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aG(a[0].builtin$cls)+H.bW(a,1,b)
if(typeof a=="function")return H.aG(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.R(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.h(b[y])}if('func' in a)return H.k2(a,b)
if('futureOr' in a)return"FutureOr<"+H.aD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.L(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aD(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aD(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aD(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aD(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kg(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aD(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bW:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cp("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aD(u,c)}return"<"+z.l(0)+">"},
kk:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isp){y=H.cw(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.am(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aR:function(a,b,c,d){var z,y
H.v(b)
H.bD(c)
H.v(d)
if(a==null)return!1
z=H.am(a)
y=J.B(a)
if(y[b]==null)return!1
return H.e9(H.aT(y[d],z),null,c,null)},
bF:function(a,b,c,d){H.v(b)
H.bD(c)
H.v(d)
if(a==null)return a
if(H.aR(a,b,c,d))return a
throw H.d(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.v(b)
H.bD(c)
H.v(d)
if(a==null)return a
if(H.aR(a,b,c,d))return a
throw H.d(H.a8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
e9:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a2(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a2(a[y],b,c[y],d))return!1
return!0},
mU:function(a,b,c){return a.apply(b,H.aT(J.B(b)["$as"+H.h(c)],H.am(b)))},
ei:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="I"||a===-1||a===-2||H.ei(z)}return!1},
cu:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="I"||b===-1||b===-2||H.ei(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bA(a,b)}z=J.B(a).constructor
y=H.am(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a2(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.cu(a,b))throw H.d(H.a8(a,H.bE(b)))
return a},
a2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a2(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.e2(a,b,c,d)
if('func' in a)return c.builtin$cls==="bq"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a2("type" in a?a.type:null,b,x,d)
else if(H.a2(a,b,x,d))return!0
else{if(!('$is'+"aY" in y.prototype))return!1
w=y.prototype["$as"+"aY"]
v=H.aT(w,z?a.slice(1):null)
return H.a2(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e9(H.aT(r,z),b,u,d)},
e2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a2(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a2(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a2(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a2(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kB(m,b,l,d)},
kB:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a2(c[w],d,a[w],b))return!1}return!0},
mV:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
ky:function(a){var z,y,x,w,v,u
z=H.v($.eh.$1(a))
y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.e8.$2(a,z))
if(z!=null){y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.c_[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.el(a,x)
if(v==="*")throw H.d(P.dG(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.el(a,x)},
el:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cz(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cz(a,!1,null,!!a.$isy)},
kA:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cz(z,c,null,null)},
kt:function(){if(!0===$.cy)return
$.cy=!0
H.ku()},
ku:function(){var z,y,x,w,v,u,t,s
$.c_=Object.create(null)
$.c2=Object.create(null)
H.kp()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.em.$1(v)
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
z=C.O()
z=H.aQ(C.L,H.aQ(C.Q,H.aQ(C.y,H.aQ(C.y,H.aQ(C.P,H.aQ(C.M,H.aQ(C.N(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eh=new H.kq(v)
$.e8=new H.kr(u)
$.em=new H.ks(t)},
aQ:function(a,b){return a(b)||b},
kF:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hR:{"^":"c;a,b,c,d,e,f,r,0x",u:{
hS:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ci(z)
y=z[0]
x=z[1]
return new H.hR(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
il:{"^":"c;a,b,c,d,e,f",
N:function(a){var z,y,x
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
u:{
af:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.il(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bS:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dD:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hB:{"^":"S;a,b",
l:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
u:{
dp:function(a,b){return new H.hB(a,b==null?null:b.method)}}},
h9:{"^":"S;a,b,c",
l:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
u:{
ck:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h9(a,y,z?null:b.receiver)}}},
ir:{"^":"S;a",
l:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kH:{"^":"p:5;a",
$1:function(a){if(!!J.B(a).$isS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dX:{"^":"c;a,0b",
l:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa7:1},
p:{"^":"c;",
l:function(a){return"Closure '"+H.b7(this).trim()+"'"},
gcb:function(){return this},
$isbq:1,
gcb:function(){return this}},
dy:{"^":"p;"},
i8:{"^":"dy;",
l:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aG(z)+"'"}},
cc:{"^":"dy;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.b6(this.a)
else y=typeof z!=="object"?J.an(z):H.b6(z)
return(y^H.b6(this.b))>>>0},
l:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.b7(z)+"'")},
u:{
cd:function(a){return a.a},
cX:function(a){return a.c},
bL:function(a){var z,y,x,w,v
z=new H.cc("self","target","receiver","name")
y=J.ci(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
im:{"^":"S;a",
l:function(a){return this.a},
u:{
a8:function(a,b){return new H.im("TypeError: "+P.bN(a)+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
ft:{"^":"S;a",
l:function(a){return this.a},
u:{
cY:function(a,b){return new H.ft("CastError: "+P.bN(a)+": type '"+H.e6(a)+"' is not a subtype of type '"+b+"'")}}},
hY:{"^":"S;a",
l:function(a){return"RuntimeError: "+H.h(this.a)},
u:{
hZ:function(a){return new H.hY(a)}}},
dE:{"^":"c;a,0b,0c,0d",
gaj:function(){var z=this.b
if(z==null){z=H.bE(this.a)
this.b=z}return z},
l:function(a){return this.gaj()},
gB:function(a){var z=this.d
if(z==null){z=C.i.gB(this.gaj())
this.d=z}return z},
G:function(a,b){if(b==null)return!1
return b instanceof H.dE&&this.gaj()===b.gaj()}},
df:{"^":"dj;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gJ:function(a){return new H.ar(this,[H.r(this,0)])},
am:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cT(z,b)}else{y=this.dD(b)
return y}},
dD:function(a){var z=this.d
if(z==null)return!1
return this.aI(this.aB(z,J.an(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ah(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ah(w,b)
x=y==null?null:y.b
return x}else return this.dE(b)},
dE:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aB(z,J.an(a)&0x3ffffff)
x=this.aI(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aD()
this.b=z}this.b6(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aD()
this.c=y}this.b6(y,b,c)}else{x=this.d
if(x==null){x=this.aD()
this.d=x}w=J.an(b)&0x3ffffff
v=this.aB(x,w)
if(v==null)this.aG(x,w,[this.at(b,c)])
else{u=this.aI(v,b)
if(u>=0)v[u].b=c
else v.push(this.at(b,c))}}},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aJ(this))
z=z.c}},
b6:function(a,b,c){var z
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
z=this.ah(a,b)
if(z==null)this.aG(a,b,this.at(b,c))
else z.b=c},
b8:function(){this.r=this.r+1&67108863},
at:function(a,b){var z,y
z=new H.he(H.A(a,H.r(this,0)),H.A(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b8()
return z},
aI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aH(a[y].a,b))return y
return-1},
l:function(a){return P.dk(this)},
ah:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
aG:function(a,b,c){a[b]=c},
cU:function(a,b){delete a[b]},
cT:function(a,b){return this.ah(a,b)!=null},
aD:function(){var z=Object.create(null)
this.aG(z,"<non-identifier-key>",z)
this.cU(z,"<non-identifier-key>")
return z},
$isdg:1},
he:{"^":"c;a,b,0c,0d"},
ar:{"^":"d4;a,$ti",
gk:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.hf(z,z.r,this.$ti)
y.c=z.e
return y}},
hf:{"^":"c;a,b,0c,0d,$ti",
sb7:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aJ(z))
else{z=this.c
if(z==null){this.sb7(null)
return!1}else{this.sb7(z.a)
this.c=this.c.c
return!0}}},
$isb0:1},
kq:{"^":"p:5;a",
$1:function(a){return this.a(a)}},
kr:{"^":"p:13;a",
$2:function(a,b){return this.a(a,b)}},
ks:{"^":"p:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
kg:function(a){return J.h6(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bV:function(a){var z,y
if(!!J.B(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bg(b,a))},
hw:{"^":"j;",$isio:1,"%":"DataView;ArrayBufferView;cm|dR|dS|dl|dT|dU|at"},
cm:{"^":"hw;",
gk:function(a){return a.length},
$isw:1,
$asw:I.bh,
$isy:1,
$asy:I.bh},
dl:{"^":"dS;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
h:function(a,b,c){H.eb(c)
H.ah(b,a,a.length)
a[b]=c},
$asbO:function(){return[P.a4]},
$asq:function(){return[P.a4]},
$isl:1,
$asl:function(){return[P.a4]},
$isa:1,
$asa:function(){return[P.a4]},
"%":"Float64Array"},
at:{"^":"dU;",
h:function(a,b,c){H.R(c)
H.ah(b,a,a.length)
a[b]=c},
$asbO:function(){return[P.D]},
$asq:function(){return[P.D]},
$isl:1,
$asl:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hv:{"^":"dl;",$isak:1,"%":"Float32Array"},
lG:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lH:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ish3:1,
"%":"Int32Array"},
lI:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lJ:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hx:{"^":"at;",
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ismt:1,
"%":"Uint32Array"},
lK:{"^":"at;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lL:{"^":"at;",
gk:function(a){return a.length},
i:function(a,b){H.ah(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dR:{"^":"cm+q;"},
dS:{"^":"dR+bO;"},
dT:{"^":"cm+q;"},
dU:{"^":"dT+bO;"}}],["","",,P,{"^":"",
iy:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ka()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bf(new P.iA(z),1)).observe(y,{childList:true})
return new P.iz(z,y,x)}else if(self.setImmediate!=null)return P.kb()
return P.kc()},
mD:[function(a){self.scheduleImmediate(H.bf(new P.iB(H.n(a,{func:1,ret:-1})),0))},"$1","ka",4,0,4],
mE:[function(a){self.setImmediate(H.bf(new P.iC(H.n(a,{func:1,ret:-1})),0))},"$1","kb",4,0,4],
mF:[function(a){H.n(a,{func:1,ret:-1})
P.jL(0,a)},"$1","kc",4,0,4],
k6:function(a,b){if(H.bA(a,{func:1,args:[P.c,P.a7]}))return H.n(a,{func:1,ret:null,args:[P.c,P.a7]})
if(H.bA(a,{func:1,args:[P.c]}))return H.n(a,{func:1,ret:null,args:[P.c]})
throw H.d(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k5:function(){var z,y
for(;z=$.aP,z!=null;){$.bd=null
y=z.b
$.aP=y
if(y==null)$.bc=null
z.a.$0()}},
mS:[function(){$.cs=!0
try{P.k5()}finally{$.bd=null
$.cs=!1
if($.aP!=null)$.cE().$1(P.ea())}},"$0","ea",0,0,1],
e5:function(a){var z=new P.dJ(H.n(a,{func:1,ret:-1}))
if($.aP==null){$.bc=z
$.aP=z
if(!$.cs)$.cE().$1(P.ea())}else{$.bc.b=z
$.bc=z}},
k9:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.aP
if(z==null){P.e5(a)
$.bd=$.bc
return}y=new P.dJ(a)
x=$.bd
if(x==null){y.b=z
$.bd=y
$.aP=y}else{y.b=x.b
x.b=y
$.bd=y
if(y.b==null)$.bc=y}},
kD:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.K
if(C.e===y){P.bY(null,null,C.e,a)
return}y.toString
P.bY(null,null,y,H.n(y.br(a),z))},
bX:function(a,b,c,d,e){var z={}
z.a=d
P.k9(new P.k7(z,e))},
e3:function(a,b,c,d,e){var z,y
H.n(d,{func:1,ret:e})
y=$.K
if(y===c)return d.$0()
$.K=c
z=y
try{y=d.$0()
return y}finally{$.K=z}},
e4:function(a,b,c,d,e,f,g){var z,y
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.K
if(y===c)return d.$1(e)
$.K=c
z=y
try{y=d.$1(e)
return y}finally{$.K=z}},
k8:function(a,b,c,d,e,f,g,h,i){var z,y
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.K
if(y===c)return d.$2(e,f)
$.K=c
z=y
try{y=d.$2(e,f)
return y}finally{$.K=z}},
bY:function(a,b,c,d){var z
H.n(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.br(d):c.di(d,-1)
P.e5(d)},
iA:{"^":"p:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iz:{"^":"p:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iB:{"^":"p:0;a",
$0:function(){this.a.$0()}},
iC:{"^":"p:0;a",
$0:function(){this.a.$0()}},
jK:{"^":"c;a,0b,c",
cP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bf(new P.jM(this,b),0),a)
else throw H.d(P.z("`setTimeout()` not found."))},
u:{
jL:function(a,b){var z=new P.jK(!0,0)
z.cP(a,b)
return z}}},
jM:{"^":"p:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iF:{"^":"c;$ti"},
jF:{"^":"iF;a,$ti"},
aO:{"^":"c;0a,b,c,d,e,$ti",
dG:function(a){if(this.c!==6)return!0
return this.b.b.aJ(H.n(this.d,{func:1,ret:P.U,args:[P.c]}),a.a,P.U,P.c)},
dC:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bA(z,{func:1,args:[P.c,P.a7]}))return H.c0(w.dL(z,a.a,a.b,null,y,P.a7),x)
else return H.c0(w.aJ(H.n(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
ag:{"^":"c;bk:a<,b,0d5:c<,$ti",
bW:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.e){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k6(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ag(0,$.K,[c])
w=b==null?1:3
this.ba(new P.aO(x,w,a,b,[z,c]))
return x},
bV:function(a,b){return this.bW(a,null,b)},
ba:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isaO")
this.c=a}else{if(z===2){y=H.k(this.c,"$isag")
z=y.a
if(z<4){y.ba(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bY(null,null,z,H.n(new P.iU(this,a),{func:1,ret:-1}))}},
bh:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isaO")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isag")
y=u.a
if(y<4){u.bh(a)
return}this.a=y
this.c=u.c}z.a=this.ai(a)
y=this.b
y.toString
P.bY(null,null,y,H.n(new P.iZ(z,this),{func:1,ret:-1}))}},
aF:function(){var z=H.k(this.c,"$isaO")
this.c=null
return this.ai(z)},
ai:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aw:function(a){var z,y,x
z=H.r(this,0)
H.c0(a,{futureOr:1,type:z})
y=this.$ti
if(H.aR(a,"$isaY",y,"$asaY"))if(H.aR(a,"$isag",y,null))P.dM(a,this)
else P.iV(a,this)
else{x=this.aF()
H.A(a,z)
this.a=4
this.c=a
P.bb(this,x)}},
bc:function(a,b){var z
H.k(b,"$isa7")
z=this.aF()
this.a=8
this.c=new P.a1(a,b)
P.bb(this,z)},
$isaY:1,
u:{
iV:function(a,b){var z,y,x
b.a=1
try{a.bW(new P.iW(b),new P.iX(b),null)}catch(x){z=H.aa(x)
y=H.bk(x)
P.kD(new P.iY(b,z,y))}},
dM:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isag")
if(z>=4){y=b.aF()
b.a=a.a
b.c=a.c
P.bb(b,y)}else{y=H.k(b.c,"$isaO")
b.a=2
b.c=a
a.bh(y)}},
bb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isa1")
y=y.b
u=v.a
t=v.b
y.toString
P.bX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bb(z.a,b)}y=z.a
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
if(p){H.k(r,"$isa1")
y=y.b
u=r.a
t=r.b
y.toString
P.bX(null,null,y,u,t)
return}o=$.K
if(o!=q)$.K=q
else o=null
y=b.c
if(y===8)new P.j1(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j0(x,b,r).$0()}else if((y&2)!==0)new P.j_(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.B(y).$isaY){if(y.a>=4){n=H.k(t.c,"$isaO")
t.c=null
b=t.ai(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dM(y,t)
return}}m=b.b
n=H.k(m.c,"$isaO")
m.c=null
b=m.ai(n)
y=x.a
u=x.b
if(!y){H.A(u,H.r(m,0))
m.a=4
m.c=u}else{H.k(u,"$isa1")
m.a=8
m.c=u}z.a=m
y=m}}}},
iU:{"^":"p:0;a,b",
$0:function(){P.bb(this.a,this.b)}},
iZ:{"^":"p:0;a,b",
$0:function(){P.bb(this.b,this.a.a)}},
iW:{"^":"p:6;a",
$1:function(a){var z=this.a
z.a=0
z.aw(a)}},
iX:{"^":"p:16;a",
$2:function(a,b){H.k(b,"$isa7")
this.a.bc(a,b)},
$1:function(a){return this.$2(a,null)}},
iY:{"^":"p:0;a,b,c",
$0:function(){this.a.bc(this.b,this.c)}},
j1:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bU(H.n(w.d,{func:1}),null)}catch(v){y=H.aa(v)
x=H.bk(v)
if(this.d){w=H.k(this.a.a.c,"$isa1").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isa1")
else u.b=new P.a1(y,x)
u.a=!0
return}if(!!J.B(z).$isaY){if(z instanceof P.ag&&z.gbk()>=4){if(z.gbk()===8){w=this.b
w.b=H.k(z.gd5(),"$isa1")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bV(new P.j2(t),null)
w.a=!1}}},
j2:{"^":"p:17;a",
$1:function(a){return this.a}},
j0:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.A(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.aJ(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aa(t)
y=H.bk(t)
x=this.a
x.b=new P.a1(z,y)
x.a=!0}}},
j_:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isa1")
w=this.c
if(w.dG(z)&&w.e!=null){v=this.b
v.b=w.dC(z)
v.a=!1}}catch(u){y=H.aa(u)
x=H.bk(u)
w=H.k(this.a.a.c,"$isa1")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a1(y,x)
s.a=!0}}},
dJ:{"^":"c;a,0b"},
ic:{"^":"c;$ti",
gk:function(a){var z,y,x,w
z={}
y=new P.ag(0,$.K,[P.D])
z.a=0
x=H.r(this,0)
w=H.n(new P.ie(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.ig(z,y),{func:1,ret:-1})
W.aC(this.a,this.b,w,!1,x)
return y}},
ie:{"^":"p;a,b",
$1:function(a){H.A(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.r(this.b,0)]}}},
ig:{"^":"p:0;a,b",
$0:function(){this.b.aw(this.a.a)}},
id:{"^":"c;"},
a1:{"^":"c;a,b",
l:function(a){return H.h(this.a)},
$isS:1},
jS:{"^":"c;",$ismB:1},
k7:{"^":"p:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dq()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.l(0)
throw x}},
jo:{"^":"jS;",
dM:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.e===$.K){a.$0()
return}P.e3(null,null,this,a,-1)}catch(x){z=H.aa(x)
y=H.bk(x)
P.bX(null,null,this,z,H.k(y,"$isa7"))}},
dN:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.K){a.$1(b)
return}P.e4(null,null,this,a,b,-1,c)}catch(x){z=H.aa(x)
y=H.bk(x)
P.bX(null,null,this,z,H.k(y,"$isa7"))}},
di:function(a,b){return new P.jq(this,H.n(a,{func:1,ret:b}),b)},
br:function(a){return new P.jp(this,H.n(a,{func:1,ret:-1}))},
dj:function(a,b){return new P.jr(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bU:function(a,b){H.n(a,{func:1,ret:b})
if($.K===C.e)return a.$0()
return P.e3(null,null,this,a,b)},
aJ:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.K===C.e)return a.$1(b)
return P.e4(null,null,this,a,b,c,d)},
dL:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.K===C.e)return a.$2(b,c)
return P.k8(null,null,this,a,b,c,d,e,f)}},
jq:{"^":"p;a,b,c",
$0:function(){return this.a.bU(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jp:{"^":"p:1;a,b",
$0:function(){return this.a.dM(this.b)}},
jr:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.dN(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dh:function(a,b,c){H.bD(a)
return H.x(H.kh(a,new H.df(0,0,[b,c])),"$isdg",[b,c],"$asdg")},
T:function(a,b){return new H.df(0,0,[a,b])},
a6:function(a,b,c,d){return new P.j9(0,0,[d])},
h4:function(a,b,c){var z,y
if(P.ct(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.f([],[P.e])
y=$.bl()
C.a.j(y,a)
try{P.k4(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dx(b,H.kx(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
ch:function(a,b,c){var z,y,x
if(P.ct(a))return b+"..."+c
z=new P.cp(b)
y=$.bl()
C.a.j(y,a)
try{x=z
x.a=P.dx(x.ga2(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.ga2()+c
y=z.ga2()
return y.charCodeAt(0)==0?y:y},
ct:function(a){var z,y
for(z=0;y=$.bl(),z<y.length;++z)if(a===y[z])return!0
return!1},
k4:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.e],"$asa")
z=a.gD(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.h(z.gE(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.w()){if(x<=4){C.a.j(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.w();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.j(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.j(b,q)
C.a.j(b,u)
C.a.j(b,v)},
cl:function(a,b){var z,y,x
z=P.a6(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.F)(a),++x)z.j(0,H.A(a[x],b))
return z},
dk:function(a){var z,y,x
z={}
if(P.ct(a))return"{...}"
y=new P.cp("")
try{C.a.j($.bl(),a)
x=y
x.a=x.ga2()+"{"
z.a=!0
J.f2(a,new P.hi(z,y))
z=y
z.a=z.ga2()+"}"}finally{z=$.bl()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.ga2()
return z.charCodeAt(0)==0?z:z},
j9:{"^":"j4;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){var z=new P.dQ(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.k(z[b],"$isbz")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.k(y[b],"$isbz")!=null}else return this.cS(b)},
cS:function(a){var z=this.d
if(z==null)return!1
return this.aA(this.bf(z,a),a)>=0},
j:function(a,b){var z,y
H.A(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cq()
this.b=z}return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cq()
this.c=y}return this.b9(y,b)}else return this.cQ(0,b)},
cQ:function(a,b){var z,y,x
H.A(b,H.r(this,0))
z=this.d
if(z==null){z=P.cq()
this.d=z}y=this.bd(b)
x=z[y]
if(x==null)z[y]=[this.aE(b)]
else{if(this.aA(x,b)>=0)return!1
x.push(this.aE(b))}return!0},
bT:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bi(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bi(this.c,b)
else return this.d0(0,b)},
d0:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bf(z,b)
x=this.aA(y,b)
if(x<0)return!1
this.bm(y.splice(x,1)[0])
return!0},
ab:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aC()}},
b9:function(a,b){H.A(b,H.r(this,0))
if(H.k(a[b],"$isbz")!=null)return!1
a[b]=this.aE(b)
return!0},
bi:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isbz")
if(z==null)return!1
this.bm(z)
delete a[b]
return!0},
aC:function(){this.r=this.r+1&67108863},
aE:function(a){var z,y
z=new P.bz(H.A(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aC()
return z},
bm:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aC()},
bd:function(a){return J.an(a)&0x3ffffff},
bf:function(a,b){return a[this.bd(b)]},
aA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aH(a[y].a,b))return y
return-1},
u:{
cq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bz:{"^":"c;a,0b,0c"},
dQ:{"^":"c;a,b,0c,0d,$ti",
sbb:function(a){this.d=H.A(a,H.r(this,0))},
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aJ(z))
else{z=this.c
if(z==null){this.sbb(null)
return!1}else{this.sbb(H.A(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isb0:1,
u:{
ja:function(a,b,c){var z=new P.dQ(a,b,[c])
z.c=a.e
return z}}},
j4:{"^":"i_;"},
hg:{"^":"jb;",$isl:1,$isa:1},
q:{"^":"c;$ti",
gD:function(a){return new H.di(a,this.gk(a),0,[H.bj(this,a,"q",0)])},
v:function(a,b){return this.i(a,b)},
dB:function(a,b,c,d){var z,y,x
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.bj(this,a,"q",0)]})
z=this.gk(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gk(a))throw H.d(P.aJ(a))}return y},
l:function(a){return P.ch(a,"[","]")}},
dj:{"^":"W;"},
hi:{"^":"p:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
W:{"^":"c;$ti",
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.bj(this,a,"W",0),H.bj(this,a,"W",1)]})
for(z=J.bI(this.gJ(a));z.w();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.aU(this.gJ(a))},
l:function(a){return P.dk(a)},
$isM:1},
i0:{"^":"c;$ti",
I:function(a,b){var z
for(z=J.bI(H.x(b,"$isl",this.$ti,"$asl"));z.w();)this.j(0,z.gE(z))},
l:function(a){return P.ch(this,"{","}")},
$isl:1,
$ism2:1},
i_:{"^":"i0;"},
jb:{"^":"c+q;"}}],["","",,P,{"^":"",
fT:function(a){if(a instanceof H.p)return a.l(0)
return"Instance of '"+H.b7(a)+"'"},
bN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bo(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fT(a)},
d8:function(a){return new P.iR(a)},
aF:function(a){H.c4(H.h(a))},
U:{"^":"c;"},
"+bool":0,
bM:{"^":"c;a,b",
G:function(a,b){if(b==null)return!1
return b instanceof P.bM&&this.a===b.a&&!0},
R:function(a,b){return C.d.R(this.a,H.k(b,"$isbM").a)},
gB:function(a){var z=this.a
return(z^C.d.bj(z,30))&1073741823},
l:function(a){var z,y,x,w,v,u,t,s
z=P.fH(H.hO(this))
y=P.bp(H.hM(this))
x=P.bp(H.hI(this))
w=P.bp(H.hJ(this))
v=P.bp(H.hL(this))
u=P.bp(H.hN(this))
t=P.fI(H.hK(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isZ:1,
$asZ:function(){return[P.bM]},
u:{
fH:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bp:function(a){if(a>=10)return""+a
return"0"+a}}},
a4:{"^":"E;"},
"+double":0,
aW:{"^":"c;a",
a0:function(a,b){return C.d.a0(this.a,H.k(b,"$isaW").a)},
G:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.d.R(this.a,H.k(b,"$isaW").a)},
l:function(a){var z,y,x,w,v
z=new P.fQ()
y=this.a
if(y<0)return"-"+new P.aW(0-y).l(0)
x=z.$1(C.d.a3(y,6e7)%60)
w=z.$1(C.d.a3(y,1e6)%60)
v=new P.fP().$1(y%1e6)
return""+C.d.a3(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
$isZ:1,
$asZ:function(){return[P.aW]},
u:{
fO:function(a,b,c,d,e,f){return new P.aW(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fP:{"^":"p:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fQ:{"^":"p:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
S:{"^":"c;"},
dq:{"^":"S;",
l:function(a){return"Throw of null."}},
aI:{"^":"S;a,b,c,d",
gay:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gax:function(){return""},
l:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gay()+y+x
if(!this.a)return w
v=this.gax()
u=P.bN(this.b)
return w+v+": "+u},
u:{
cU:function(a,b,c){return new P.aI(!0,a,b,c)}}},
dr:{"^":"aI;e,f,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
u:{
bR:function(a,b,c){return new P.dr(null,null,!0,a,b,"Value not in range")},
bQ:function(a,b,c,d,e){return new P.dr(b,c,!0,a,d,"Invalid value")}}},
h2:{"^":"aI;e,k:f>,a,b,c,d",
gay:function(){return"RangeError"},
gax:function(){var z,y
z=H.R(this.b)
if(typeof z!=="number")return z.ad()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.h(y)},
u:{
G:function(a,b,c,d,e){var z=H.R(e==null?J.aU(b):e)
return new P.h2(b,z,!0,a,c,"Index out of range")}}},
is:{"^":"S;a",
l:function(a){return"Unsupported operation: "+this.a},
u:{
z:function(a){return new P.is(a)}}},
iq:{"^":"S;a",
l:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
dG:function(a){return new P.iq(a)}}},
cn:{"^":"S;a",
l:function(a){return"Bad state: "+this.a},
u:{
co:function(a){return new P.cn(a)}}},
fz:{"^":"S;a",
l:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bN(z)+"."},
u:{
aJ:function(a){return new P.fz(a)}}},
dw:{"^":"c;",
l:function(a){return"Stack Overflow"},
$isS:1},
fF:{"^":"S;a",
l:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iR:{"^":"c;a",
l:function(a){return"Exception: "+this.a}},
bq:{"^":"c;"},
D:{"^":"E;"},
"+int":0,
l:{"^":"c;$ti",
aK:["co",function(a,b){var z=H.cx(this,"l",0)
return new H.dH(this,H.n(b,{func:1,ret:P.U,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gD(this)
for(y=0;z.w();)++y
return y},
v:function(a,b){var z,y,x
if(b<0)H.a0(P.bQ(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.w();){x=z.gE(z)
if(b===y)return x;++y}throw H.d(P.G(b,this,"index",null,y))},
l:function(a){return P.h4(this,"(",")")}},
b0:{"^":"c;$ti"},
a:{"^":"c;$ti",$isl:1},
"+List":0,
M:{"^":"c;$ti"},
I:{"^":"c;",
gB:function(a){return P.c.prototype.gB.call(this,this)},
l:function(a){return"null"}},
"+Null":0,
E:{"^":"c;",$isZ:1,
$asZ:function(){return[P.E]}},
"+num":0,
c:{"^":";",
G:function(a,b){return this===b},
gB:function(a){return H.b6(this)},
l:function(a){return"Instance of '"+H.b7(this)+"'"},
toString:function(){return this.l(this)}},
a7:{"^":"c;"},
e:{"^":"c;",$isZ:1,
$asZ:function(){return[P.e]},
$ishE:1},
"+String":0,
cp:{"^":"c;a2:a<",
gk:function(a){return this.a.length},
l:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
u:{
dx:function(a,b,c){var z=J.bI(b)
if(!z.w())return a
if(c.length===0){do a+=H.h(z.gE(z))
while(z.w())}else{a+=H.h(z.gE(z))
for(;z.w();)a=a+c+H.h(z.gE(z))}return a}}}}],["","",,W,{"^":"",
kf:function(){return document},
fR:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).S(z,a,b,c)
y.toString
z=W.u
z=new H.dH(new W.a9(y),H.n(new W.fS(),{func:1,ret:P.U,args:[z]}),[z])
x=z.gD(z)
if(!x.w())H.a0(H.dc())
w=x.gE(x)
if(x.w())H.a0(H.h5())
return H.k(w,"$isV")},
d7:function(a){H.k(a,"$isP")
return"wheel"},
aX:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f5(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aa(x)}return z},
iO:function(a,b){return document.createElement(a)},
bU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dP:function(a,b,c,d){var z,y
z=W.bU(W.bU(W.bU(W.bU(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e1:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iI(a)
if(!!J.B(z).$isP)return z
return}else return H.k(a,"$isP")},
e7:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.e)return a
return z.dj(a,b)},
N:{"^":"V;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kI:{"^":"j;0k:length=","%":"AccessibleNodeList"},
fl:{"^":"N;",
l:function(a){return String(a)},
$isfl:1,
"%":"HTMLAnchorElement"},
kJ:{"^":"N;",
l:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"N;",$iscV:1,"%":"HTMLBaseElement"},
fq:{"^":"j;","%":";Blob"},
bK:{"^":"N;",$isbK:1,"%":"HTMLBodyElement"},
ce:{"^":"N;0q:height=,0n:width=",
cc:function(a,b,c){var z=this.cX(a,b,P.kd(c,null))
return z},
cX:function(a,b,c){return a.getContext(b,c)},
$isce:1,
"%":"HTMLCanvasElement"},
kP:{"^":"j;",
ap:function(a){return P.a3(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kQ:{"^":"u;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fA:{"^":"cf;",$isfA:1,"%":"CSSNumericValue|CSSUnitValue"},
kR:{"^":"fD;0k:length=","%":"CSSPerspective"},
ao:{"^":"j;",$isao:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fB:{"^":"iG;0k:length=",
aN:function(a,b){var z=this.cY(a,this.au(a,b))
return z==null?"":z},
au:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.d9(a,b)
z[b]=y
return y},
d9:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fJ()+b
if(z in a)return z
return b},
cY:function(a,b){return a.getPropertyValue(b)},
gq:function(a){return a.height},
gn:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fC:{"^":"c;",
gq:function(a){return this.aN(a,"height")},
gn:function(a){return this.aN(a,"width")}},
cf:{"^":"j;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fD:{"^":"j;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kT:{"^":"cf;0k:length=","%":"CSSTransformValue"},
kU:{"^":"cf;0k:length=","%":"CSSUnparsedValue"},
kW:{"^":"j;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fK:{"^":"N;","%":"HTMLDivElement"},
fL:{"^":"u;",
dd:function(a,b){return a.adoptNode(b)},
cd:function(a,b){return a.getElementById(b)},
bS:function(a,b){return a.querySelector(b)},
gbO:function(a){return new W.bx(a,"mousedown",!1,[W.X])},
gbP:function(a){return new W.bx(a,"mousemove",!1,[W.X])},
gbQ:function(a){return new W.bx(a,"mouseup",!1,[W.X])},
gbR:function(a){return new W.bx(a,H.v(W.d7(a)),!1,[W.aN])},
"%":"XMLDocument;Document"},
kX:{"^":"j;",
l:function(a){return String(a)},
"%":"DOMException"},
fM:{"^":"j;",
dt:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kY:{"^":"iK;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.x(c,"$isY",[P.E],"$asY")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.Y,P.E]]},
$isy:1,
$asy:function(){return[[P.Y,P.E]]},
$asq:function(){return[[P.Y,P.E]]},
$isl:1,
$asl:function(){return[[P.Y,P.E]]},
$isa:1,
$asa:function(){return[[P.Y,P.E]]},
$ast:function(){return[[P.Y,P.E]]},
"%":"ClientRectList|DOMRectList"},
fN:{"^":"j;",
l:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gn(a))+" x "+H.h(this.gq(a))},
G:function(a,b){var z
if(b==null)return!1
if(!H.aR(b,"$isY",[P.E],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.o(b)
z=this.gn(a)===z.gn(b)&&this.gq(a)===z.gq(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF,this.gq(a)&0x1FFFFFFF)},
gq:function(a){return a.height},
gn:function(a){return a.width},
$isY:1,
$asY:function(){return[P.E]},
"%":";DOMRectReadOnly"},
kZ:{"^":"iM;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.e]},
$isy:1,
$asy:function(){return[P.e]},
$asq:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"DOMStringList"},
l_:{"^":"j;0k:length=","%":"DOMTokenList"},
V:{"^":"u;0dO:tagName=",
gdg:function(a){return new W.iN(a)},
l:function(a){return a.localName},
S:["ar",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d6
if(z==null){z=H.f([],[W.ae])
y=new W.dm(z)
C.a.j(z,W.dN(null))
C.a.j(z,W.dY())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.e0(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.aj==null){z=document
y=z.implementation
y=(y&&C.I).dt(y,"")
$.aj=y
$.cg=y.createRange()
y=$.aj
y.toString
y=y.createElement("base")
H.k(y,"$iscV")
y.href=z.baseURI
z=$.aj.head;(z&&C.J).K(z,y)}z=$.aj
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.k(y,"$isbK")}z=$.aj
if(!!this.$isbK)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aj.body;(z&&C.p).K(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.T,a.tagName)){z=$.cg;(z&&C.B).ce(z,x)
z=$.cg
w=(z&&C.B).dr(z,b)}else{x.innerHTML=b
w=$.aj.createDocumentFragment()
for(z=J.o(w);y=x.firstChild,y!=null;)z.K(w,y)}z=$.aj.body
if(x==null?z!=null:x!==z)J.cO(x)
c.aS(w)
C.m.dd(document,w)
return w},function(a,b,c){return this.S(a,b,c,null)},"ds",null,null,"gdV",5,5,null],
cg:function(a,b,c,d){a.textContent=null
this.K(a,this.S(a,b,c,d))},
cf:function(a,b){return this.cg(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
d1:function(a,b){return a.removeAttribute(b)},
gbO:function(a){return new W.bT(a,"mousedown",!1,[W.X])},
gbP:function(a){return new W.bT(a,"mousemove",!1,[W.X])},
gbQ:function(a){return new W.bT(a,"mouseup",!1,[W.X])},
gbR:function(a){return new W.bT(a,H.v(W.d7(a)),!1,[W.aN])},
$isV:1,
"%":";Element"},
fS:{"^":"p:18;",
$1:function(a){return!!J.B(H.k(a,"$isu")).$isV}},
l1:{"^":"N;0q:height=,0n:width=","%":"HTMLEmbedElement"},
a5:{"^":"j;",$isa5:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
P:{"^":"j;",
dc:function(a,b,c,d){H.n(c,{func:1,args:[W.a5]})
if(c!=null)this.cR(a,b,c,!1)},
cR:function(a,b,c,d){return a.addEventListener(b,H.bf(H.n(c,{func:1,args:[W.a5]}),1),!1)},
$isP:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dV|dW|dZ|e_"},
ap:{"^":"fq;",$isap:1,"%":"File"},
li:{"^":"iT;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isap")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ap]},
$isy:1,
$asy:function(){return[W.ap]},
$asq:function(){return[W.ap]},
$isl:1,
$asl:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$ast:function(){return[W.ap]},
"%":"FileList"},
lj:{"^":"P;0k:length=","%":"FileWriter"},
lm:{"^":"N;0k:length=","%":"HTMLFormElement"},
aq:{"^":"j;",$isaq:1,"%":"Gamepad"},
h_:{"^":"N;","%":"HTMLHeadElement"},
ln:{"^":"j;0k:length=","%":"History"},
lo:{"^":"j6;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isu")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asq:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$ast:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h0:{"^":"fL;","%":"HTMLDocument"},
lp:{"^":"N;0q:height=,0n:width=","%":"HTMLIFrameElement"},
ls:{"^":"j;0q:height=,0n:width=","%":"ImageBitmap"},
lt:{"^":"j;0q:height=,0n:width=","%":"ImageData"},
lu:{"^":"N;0q:height=,0n:width=","%":"HTMLImageElement"},
db:{"^":"N;0q:height=,0n:width=",$isdb:1,"%":"HTMLInputElement"},
b1:{"^":"dF;",$isb1:1,"%":"KeyboardEvent"},
hh:{"^":"j;",
l:function(a){return String(a)},
$ishh:1,
"%":"Location"},
hl:{"^":"N;","%":"HTMLAudioElement;HTMLMediaElement"},
lC:{"^":"j;0k:length=","%":"MediaList"},
lD:{"^":"jd;",
i:function(a,b){return P.a3(a.get(H.v(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.hn(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hn:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
lE:{"^":"je;",
i:function(a,b){return P.a3(a.get(H.v(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.ho(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
ho:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
as:{"^":"j;",$isas:1,"%":"MimeType"},
lF:{"^":"jg;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isas")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.as]},
$isy:1,
$asy:function(){return[W.as]},
$asq:function(){return[W.as]},
$isl:1,
$asl:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$ast:function(){return[W.as]},
"%":"MimeTypeArray"},
X:{"^":"dF;",
gbN:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b5(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.B(W.e1(z)).$isV)throw H.d(P.z("offsetX is only supported on elements"))
y=H.k(W.e1(z),"$isV")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.b5(u,v,w),"$isb5",w,"$asb5")
if(typeof z!=="number")return z.aV()
if(typeof x!=="number")return x.aV()
return new P.b5(C.r.bX(z-u),C.r.bX(x-v),w)}},
$isX:1,
"%":";DragEvent|MouseEvent"},
a9:{"^":"hg;a",
gae:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.co("No elements"))
if(y>1)throw H.d(P.co("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.x(b,"$isl",[W.u],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.o(y),v=0;v<x;++v)w.K(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.k(c,"$isu")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.i(y,b)
J.eK(z,c,y[b])},
gD:function(a){var z=this.a.childNodes
return new W.d9(z,z.length,-1,[H.bj(C.V,z,"t",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
$asq:function(){return[W.u]},
$asl:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"P;0dH:previousSibling=",
dI:function(a){var z=a.parentNode
if(z!=null)J.bG(z,a)},
l:function(a){var z=a.nodeValue
return z==null?this.cn(a):z},
K:function(a,b){return a.appendChild(b)},
d2:function(a,b){return a.removeChild(b)},
d3:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hy:{"^":"ji;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isu")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asq:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$ast:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
lO:{"^":"N;0q:height=,0n:width=","%":"HTMLObjectElement"},
lQ:{"^":"P;0q:height=,0n:width=","%":"OffscreenCanvas"},
lR:{"^":"j;0q:height=,0n:width=","%":"PaintSize"},
au:{"^":"j;0k:length=",$isau:1,"%":"Plugin"},
lT:{"^":"jm;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isau")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.au]},
$isy:1,
$asy:function(){return[W.au]},
$asq:function(){return[W.au]},
$isl:1,
$asl:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$ast:function(){return[W.au]},
"%":"PluginArray"},
lV:{"^":"X;0q:height=,0n:width=","%":"PointerEvent"},
hQ:{"^":"j;",
dr:function(a,b){return a.createContextualFragment(b)},
ce:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m_:{"^":"js;",
i:function(a,b){return P.a3(a.get(H.v(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.hX(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"RTCStatsReport"},
hX:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
m0:{"^":"j;0q:height=,0n:width=","%":"Screen"},
m1:{"^":"N;0k:length=","%":"HTMLSelectElement"},
av:{"^":"P;",$isav:1,"%":"SourceBuffer"},
m3:{"^":"dW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isav")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.av]},
$isy:1,
$asy:function(){return[W.av]},
$asq:function(){return[W.av]},
$isl:1,
$asl:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$ast:function(){return[W.av]},
"%":"SourceBufferList"},
aw:{"^":"j;",$isaw:1,"%":"SpeechGrammar"},
m4:{"^":"jy;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaw")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isy:1,
$asy:function(){return[W.aw]},
$asq:function(){return[W.aw]},
$isl:1,
$asl:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$ast:function(){return[W.aw]},
"%":"SpeechGrammarList"},
ax:{"^":"j;0k:length=",$isax:1,"%":"SpeechRecognitionResult"},
m7:{"^":"jB;",
i:function(a,b){return this.bg(a,H.v(b))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.d_(a,z)
if(y==null)return
b.$2(y,this.bg(a,y))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new W.ib(z))
return z},
gk:function(a){return a.length},
bg:function(a,b){return a.getItem(b)},
d_:function(a,b){return a.key(b)},
$asW:function(){return[P.e,P.e]},
$isM:1,
$asM:function(){return[P.e,P.e]},
"%":"Storage"},
ib:{"^":"p:19;a",
$2:function(a,b){return C.a.j(this.a,a)}},
ay:{"^":"j;",$isay:1,"%":"CSSStyleSheet|StyleSheet"},
ih:{"^":"N;",
S:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=W.fR("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a9(y).I(0,new W.a9(z))
return y},
"%":"HTMLTableElement"},
ma:{"^":"N;",
S:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.S(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gae(z)
x.toString
z=new W.a9(x)
w=z.gae(z)
y.toString
w.toString
new W.a9(y).I(0,new W.a9(w))
return y},
"%":"HTMLTableRowElement"},
mb:{"^":"N;",
S:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.S(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gae(z)
y.toString
x.toString
new W.a9(y).I(0,new W.a9(x))
return y},
"%":"HTMLTableSectionElement"},
dz:{"^":"N;",$isdz:1,"%":"HTMLTemplateElement"},
mc:{"^":"j;0n:width=","%":"TextMetrics"},
az:{"^":"P;",$isaz:1,"%":"TextTrack"},
aA:{"^":"P;",$isaA:1,"%":"TextTrackCue|VTTCue"},
md:{"^":"jJ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaA")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aA]},
$isy:1,
$asy:function(){return[W.aA]},
$asq:function(){return[W.aA]},
$isl:1,
$asl:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$ast:function(){return[W.aA]},
"%":"TextTrackCueList"},
me:{"^":"e_;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaz")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isy:1,
$asy:function(){return[W.az]},
$asq:function(){return[W.az]},
$isl:1,
$asl:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$ast:function(){return[W.az]},
"%":"TextTrackList"},
mf:{"^":"j;0k:length=","%":"TimeRanges"},
aB:{"^":"j;",$isaB:1,"%":"Touch"},
mg:{"^":"jO;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaB")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aB]},
$isy:1,
$asy:function(){return[W.aB]},
$asq:function(){return[W.aB]},
$isl:1,
$asl:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$ast:function(){return[W.aB]},
"%":"TouchList"},
mh:{"^":"j;0k:length=","%":"TrackDefaultList"},
dF:{"^":"a5;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mv:{"^":"j;",
l:function(a){return String(a)},
"%":"URL"},
mx:{"^":"hl;0q:height=,0n:width=","%":"HTMLVideoElement"},
my:{"^":"P;0k:length=","%":"VideoTrackList"},
mz:{"^":"P;0q:height=,0n:width=","%":"VisualViewport"},
mA:{"^":"j;0n:width=","%":"VTTRegion"},
aN:{"^":"X;",
gdv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.z("deltaY is not supported"))},
$isaN:1,
"%":"WheelEvent"},
iv:{"^":"P;",
gdf:function(a){var z,y,x
z=P.E
y=new P.ag(0,$.K,[z])
x=H.n(new W.iw(new P.jF(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cW(a)
this.d4(a,W.e7(x,z))
return y},
d4:function(a,b){return a.requestAnimationFrame(H.bf(H.n(b,{func:1,ret:-1,args:[P.E]}),1))},
cW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdI:1,
"%":"DOMWindow|Window"},
iw:{"^":"p:20;a",
$1:function(a){var z=this.a
a=H.c0(H.cA(a),{futureOr:1,type:H.r(z,0)})
z=z.a
if(z.a!==0)H.a0(P.co("Future already completed"))
z.aw(a)}},
dK:{"^":"u;",$isdK:1,"%":"Attr"},
mG:{"^":"jU;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isao")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ao]},
$isy:1,
$asy:function(){return[W.ao]},
$asq:function(){return[W.ao]},
$isl:1,
$asl:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$ast:function(){return[W.ao]},
"%":"CSSRuleList"},
mI:{"^":"fN;",
l:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
G:function(a,b){var z
if(b==null)return!1
if(!H.aR(b,"$isY",[P.E],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.o(b)
z=a.width===z.gn(b)&&a.height===z.gq(b)}else z=!1
else z=!1
return z},
gB:function(a){return W.dP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gq:function(a){return a.height},
gn:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mJ:{"^":"jW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isaq")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aq]},
$isy:1,
$asy:function(){return[W.aq]},
$asq:function(){return[W.aq]},
$isl:1,
$asl:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$ast:function(){return[W.aq]},
"%":"GamepadList"},
mO:{"^":"jY;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isu")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isy:1,
$asy:function(){return[W.u]},
$asq:function(){return[W.u]},
$isl:1,
$asl:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$ast:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mP:{"^":"k_;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isax")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isy:1,
$asy:function(){return[W.ax]},
$asq:function(){return[W.ax]},
$isl:1,
$asl:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$ast:function(){return[W.ax]},
"%":"SpeechRecognitionResultList"},
mQ:{"^":"k1;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$isay")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isy:1,
$asy:function(){return[W.ay]},
$asq:function(){return[W.ay]},
$isl:1,
$asl:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$ast:function(){return[W.ay]},
"%":"StyleSheetList"},
iD:{"^":"dj;cV:a<",
H:function(a,b){var z,y,x,w,v,u
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gJ(this),y=z.length,x=this.a,w=J.o(x),v=0;v<z.length;z.length===y||(0,H.F)(z),++v){u=z[v]
b.$2(u,w.a6(x,u))}},
gJ:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.f([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.k(z[w],"$isdK")
if(v.namespaceURI==null)C.a.j(y,v.name)}return y},
$asW:function(){return[P.e,P.e]},
$asM:function(){return[P.e,P.e]}},
iN:{"^":"iD;a",
i:function(a,b){return J.ca(this.a,H.v(b))},
gk:function(a){return this.gJ(this).length}},
bx:{"^":"ic;a,b,c,$ti"},
bT:{"^":"bx;a,b,c,$ti"},
iP:{"^":"id;a,b,c,d,e,$ti",u:{
aC:function(a,b,c,d,e){var z=W.e7(new W.iQ(c),W.a5)
if(z!=null&&!0)J.eL(a,b,z,!1)
return new W.iP(0,a,b,z,!1,[e])}}},
iQ:{"^":"p:21;a",
$1:function(a){return this.a.$1(H.k(a,"$isa5"))}},
by:{"^":"c;a",
cN:function(a){var z,y
z=$.cF()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.S[y],W.kn())
for(y=0;y<12;++y)z.h(0,C.u[y],W.ko())}},
a4:function(a){return $.eF().A(0,W.aX(a))},
a_:function(a,b,c){var z,y,x
z=W.aX(a)
y=$.cF()
x=y.i(0,H.h(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bZ(x.$4(a,b,c,this))},
$isae:1,
u:{
dN:function(a){var z,y
z=document.createElement("a")
y=new W.jt(z,window.location)
y=new W.by(y)
y.cN(a)
return y},
mM:[function(a,b,c,d){H.k(a,"$isV")
H.v(b)
H.v(c)
H.k(d,"$isby")
return!0},"$4","kn",16,0,12],
mN:[function(a,b,c,d){var z,y,x
H.k(a,"$isV")
H.v(b)
H.v(c)
z=H.k(d,"$isby").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ko",16,0,12]}},
t:{"^":"c;$ti",
gD:function(a){return new W.d9(a,this.gk(a),-1,[H.bj(this,a,"t",0)])}},
dm:{"^":"c;a",
a4:function(a){return C.a.bo(this.a,new W.hA(a))},
a_:function(a,b,c){return C.a.bo(this.a,new W.hz(a,b,c))},
$isae:1},
hA:{"^":"p:9;a",
$1:function(a){return H.k(a,"$isae").a4(this.a)}},
hz:{"^":"p:9;a,b,c",
$1:function(a){return H.k(a,"$isae").a_(this.a,this.b,this.c)}},
ju:{"^":"c;",
cO:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aK(0,new W.jv())
y=b.aK(0,new W.jw())
this.b.I(0,z)
x=this.c
x.I(0,C.U)
x.I(0,y)},
a4:function(a){return this.a.A(0,W.aX(a))},
a_:["cq",function(a,b,c){var z,y
z=W.aX(a)
y=this.c
if(y.A(0,H.h(z)+"::"+b))return this.d.de(c)
else if(y.A(0,"*::"+b))return this.d.de(c)
else{y=this.b
if(y.A(0,H.h(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.h(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isae:1},
jv:{"^":"p:10;",
$1:function(a){return!C.a.A(C.u,H.v(a))}},
jw:{"^":"p:10;",
$1:function(a){return C.a.A(C.u,H.v(a))}},
jG:{"^":"ju;e,a,b,c,d",
a_:function(a,b,c){if(this.cq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ca(a,"template")==="")return this.e.A(0,b)
return!1},
u:{
dY:function(){var z,y,x,w,v
z=P.e
y=P.cl(C.t,z)
x=H.r(C.t,0)
w=H.n(new W.jH(),{func:1,ret:z,args:[x]})
v=H.f(["TEMPLATE"],[z])
y=new W.jG(y,P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z),null)
y.cO(null,new H.hj(C.t,w,[x,z]),v,null)
return y}}},
jH:{"^":"p:22;",
$1:function(a){return"TEMPLATE::"+H.h(H.v(a))}},
jE:{"^":"c;",
a4:function(a){var z=J.B(a)
if(!!z.$isdt)return!1
z=!!z.$isJ
if(z&&W.aX(a)==="foreignObject")return!1
if(z)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.i.cj(b,"on"))return!1
return this.a4(a)},
$isae:1},
d9:{"^":"c;a,b,c,0d,$ti",
sbe:function(a){this.d=H.A(a,H.r(this,0))},
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbe(J.bm(this.a,z))
this.c=z
return!0}this.sbe(null)
this.c=y
return!1},
gE:function(a){return this.d},
$isb0:1},
iH:{"^":"c;a",$isP:1,$isdI:1,u:{
iI:function(a){if(a===window)return H.k(a,"$isdI")
else return new W.iH(a)}}},
ae:{"^":"c;"},
jt:{"^":"c;a,b",$ismu:1},
e0:{"^":"c;a",
aS:function(a){new W.jR(this).$2(a,null)},
a8:function(a,b){if(b==null)J.cO(a)
else J.bG(b,a)},
d7:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f3(a)
x=J.ca(y.gcV(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aa(t)}v="element unprintable"
try{v=J.bo(a)}catch(t){H.aa(t)}try{u=W.aX(a)
this.d6(H.k(a,"$isV"),b,z,v,u,H.k(y,"$isM"),H.v(x))}catch(t){if(H.aa(t) instanceof P.aI)throw t
else{this.a8(a,b)
window
s="Removing corrupted element "+H.h(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a8(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a4(a)){this.a8(a,b)
window
z="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.a8(a,b)
window
z="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.f(z.slice(0),[H.r(z,0)])
for(x=f.gJ(f).length-1,z=f.a,w=J.o(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.a_(a,J.fc(v),w.a6(z,v))){window
u="Removing disallowed attribute <"+H.h(e)+" "+v+'="'+H.h(w.a6(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a6(z,v)
w.d1(z,v)}}if(!!J.B(a).$isdz)this.aS(a.content)},
$islM:1},
jR:{"^":"p:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d7(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a8(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f4(z)}catch(w){H.aa(w)
v=H.k(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bG(u,v)}else J.bG(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.k(y,"$isu")}}},
iG:{"^":"j+fC;"},
iJ:{"^":"j+q;"},
iK:{"^":"iJ+t;"},
iL:{"^":"j+q;"},
iM:{"^":"iL+t;"},
iS:{"^":"j+q;"},
iT:{"^":"iS+t;"},
j5:{"^":"j+q;"},
j6:{"^":"j5+t;"},
jd:{"^":"j+W;"},
je:{"^":"j+W;"},
jf:{"^":"j+q;"},
jg:{"^":"jf+t;"},
jh:{"^":"j+q;"},
ji:{"^":"jh+t;"},
jl:{"^":"j+q;"},
jm:{"^":"jl+t;"},
js:{"^":"j+W;"},
dV:{"^":"P+q;"},
dW:{"^":"dV+t;"},
jx:{"^":"j+q;"},
jy:{"^":"jx+t;"},
jB:{"^":"j+W;"},
jI:{"^":"j+q;"},
jJ:{"^":"jI+t;"},
dZ:{"^":"P+q;"},
e_:{"^":"dZ+t;"},
jN:{"^":"j+q;"},
jO:{"^":"jN+t;"},
jT:{"^":"j+q;"},
jU:{"^":"jT+t;"},
jV:{"^":"j+q;"},
jW:{"^":"jV+t;"},
jX:{"^":"j+q;"},
jY:{"^":"jX+t;"},
jZ:{"^":"j+q;"},
k_:{"^":"jZ+t;"},
k0:{"^":"j+q;"},
k1:{"^":"k0+t;"}}],["","",,P,{"^":"",
a3:function(a){var z,y,x,w,v
if(a==null)return
z=P.T(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=H.v(y[w])
z.h(0,v,a[v])}return z},
kd:function(a,b){var z={}
a.H(0,new P.ke(z))
return z},
d3:function(){var z=$.d2
if(z==null){z=J.c6(window.navigator.userAgent,"Opera",0)
$.d2=z}return z},
fJ:function(){var z,y
z=$.d_
if(z!=null)return z
y=$.d0
if(y==null){y=J.c6(window.navigator.userAgent,"Firefox",0)
$.d0=y}if(y)z="-moz-"
else{y=$.d1
if(y==null){y=!P.d3()&&J.c6(window.navigator.userAgent,"Trident/",0)
$.d1=y}if(y)z="-ms-"
else z=P.d3()?"-o-":"-webkit-"}$.d_=z
return z},
ke:{"^":"p:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
kE:function(a){return Math.sqrt(a)},
dO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b5:{"^":"c;V:a>,T:b>,$ti",
l:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
G:function(a,b){if(b==null)return!1
return H.aR(b,"$isb5",[P.E],null)&&this.a==J.bJ(b)&&this.b==b.gT(b)},
gB:function(a){var z,y,x
z=J.an(this.a)
y=J.an(this.b)
y=P.dO(P.dO(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jn:{"^":"c;"},
Y:{"^":"jn;$ti"}}],["","",,P,{"^":"",fm:{"^":"j;",$isfm:1,"%":"SVGAnimatedLength"},l2:{"^":"J;0q:height=,0n:width=","%":"SVGFEBlendElement"},l3:{"^":"J;0q:height=,0n:width=","%":"SVGFEColorMatrixElement"},l4:{"^":"J;0q:height=,0n:width=","%":"SVGFEComponentTransferElement"},l5:{"^":"J;0q:height=,0n:width=","%":"SVGFECompositeElement"},l6:{"^":"J;0q:height=,0n:width=","%":"SVGFEConvolveMatrixElement"},l7:{"^":"J;0q:height=,0n:width=","%":"SVGFEDiffuseLightingElement"},l8:{"^":"J;0q:height=,0n:width=","%":"SVGFEDisplacementMapElement"},l9:{"^":"J;0q:height=,0n:width=","%":"SVGFEFloodElement"},la:{"^":"J;0q:height=,0n:width=","%":"SVGFEGaussianBlurElement"},lb:{"^":"J;0q:height=,0n:width=","%":"SVGFEImageElement"},lc:{"^":"J;0q:height=,0n:width=","%":"SVGFEMergeElement"},ld:{"^":"J;0q:height=,0n:width=","%":"SVGFEMorphologyElement"},le:{"^":"J;0q:height=,0n:width=","%":"SVGFEOffsetElement"},lf:{"^":"J;0q:height=,0n:width=","%":"SVGFESpecularLightingElement"},lg:{"^":"J;0q:height=,0n:width=","%":"SVGFETileElement"},lh:{"^":"J;0q:height=,0n:width=","%":"SVGFETurbulenceElement"},lk:{"^":"J;0q:height=,0n:width=","%":"SVGFilterElement"},ll:{"^":"br;0q:height=,0n:width=","%":"SVGForeignObjectElement"},fZ:{"^":"br;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},br:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lv:{"^":"br;0q:height=,0n:width=","%":"SVGImageElement"},b2:{"^":"j;",$isb2:1,"%":"SVGLength"},lA:{"^":"j8;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return this.W(a,b)},
h:function(a,b,c){H.k(c,"$isb2")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b2]},
$isl:1,
$asl:function(){return[P.b2]},
$isa:1,
$asa:function(){return[P.b2]},
$ast:function(){return[P.b2]},
"%":"SVGLengthList"},lB:{"^":"J;0q:height=,0n:width=","%":"SVGMaskElement"},b4:{"^":"j;",$isb4:1,"%":"SVGNumber"},lN:{"^":"jk;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return this.W(a,b)},
h:function(a,b,c){H.k(c,"$isb4")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b4]},
$isl:1,
$asl:function(){return[P.b4]},
$isa:1,
$asa:function(){return[P.b4]},
$ast:function(){return[P.b4]},
"%":"SVGNumberList"},lS:{"^":"J;0q:height=,0n:width=","%":"SVGPatternElement"},lU:{"^":"j;0k:length=","%":"SVGPointList"},lW:{"^":"j;0q:height=,0n:width=","%":"SVGRect"},lX:{"^":"fZ;0q:height=,0n:width=","%":"SVGRectElement"},dt:{"^":"J;",$isdt:1,"%":"SVGScriptElement"},m8:{"^":"jD;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return this.W(a,b)},
h:function(a,b,c){H.v(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$ast:function(){return[P.e]},
"%":"SVGStringList"},J:{"^":"V;",
S:function(a,b,c,d){var z,y,x,w,v,u
z=H.f([],[W.ae])
C.a.j(z,W.dN(null))
C.a.j(z,W.dY())
C.a.j(z,new W.jE())
c=new W.e0(new W.dm(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).ds(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.gae(z)
for(z=J.o(v);x=u.firstChild,x!=null;)z.K(v,x)
return v},
$isJ:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m9:{"^":"br;0q:height=,0n:width=","%":"SVGSVGElement"},b8:{"^":"j;",$isb8:1,"%":"SVGTransform"},mi:{"^":"jQ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return this.W(a,b)},
h:function(a,b,c){H.k(c,"$isb8")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
W:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b8]},
$isl:1,
$asl:function(){return[P.b8]},
$isa:1,
$asa:function(){return[P.b8]},
$ast:function(){return[P.b8]},
"%":"SVGTransformList"},mw:{"^":"br;0q:height=,0n:width=","%":"SVGUseElement"},j7:{"^":"j+q;"},j8:{"^":"j7+t;"},jj:{"^":"j+q;"},jk:{"^":"jj+t;"},jC:{"^":"j+q;"},jD:{"^":"jC+t;"},jP:{"^":"j+q;"},jQ:{"^":"jP+t;"}}],["","",,P,{"^":"",ak:{"^":"c;",$isl:1,
$asl:function(){return[P.a4]},
$isa:1,
$asa:function(){return[P.a4]},
$isio:1}}],["","",,P,{"^":"",kK:{"^":"j;0k:length=","%":"AudioBuffer"},kL:{"^":"iE;",
i:function(a,b){return P.a3(a.get(H.v(b)))},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gJ:function(a){var z=H.f([],[P.e])
this.H(a,new P.fo(z))
return z},
gk:function(a){return a.size},
$asW:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"AudioParamMap"},fo:{"^":"p:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},kM:{"^":"P;0k:length=","%":"AudioTrackList"},fp:{"^":"P;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lP:{"^":"fp;0k:length=","%":"OfflineAudioContext"},iE:{"^":"j+W;"}}],["","",,P,{"^":"",fr:{"^":"j;",$isfr:1,"%":"WebGLBuffer"},fY:{"^":"j;",$isfY:1,"%":"WebGLFramebuffer"},hP:{"^":"j;",$ishP:1,"%":"WebGLProgram"},lY:{"^":"j;",
bn:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindFramebuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b){return a.clear(b)},
by:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bz:function(a,b){return a.compileShader(b)},
bA:function(a){return a.createBuffer()},
bB:function(a){return a.createProgram()},
bC:function(a,b){return a.createShader(b)},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.a3(a.getContextAttributes())},
aL:function(a,b){return a.getProgramInfoLog(b)},
aM:function(a,b,c){return a.getProgramParameter(b,c)},
aO:function(a,b){return a.getShaderInfoLog(b)},
aP:function(a,b,c){return a.getShaderParameter(b,c)},
aQ:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aT:function(a,b,c){return a.shaderSource(b,c)},
aU:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bY:function(a,b,c){return a.uniform1f(b,c)},
bZ:function(a,b,c){return a.uniform1fv(b,c)},
c_:function(a,b,c){return a.uniform1i(b,c)},
c0:function(a,b,c){return a.uniform1iv(b,c)},
c1:function(a,b,c){return a.uniform2fv(b,c)},
c2:function(a,b,c){return a.uniform3fv(b,c)},
c3:function(a,b,c){return a.uniform4fv(b,c)},
c4:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c5:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c6:function(a,b){return a.useProgram(b)},
c7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c9:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lZ:{"^":"j;",
dh:function(a,b){return a.beginTransformFeedback(b)},
dk:function(a,b){return a.bindVertexArray(b)},
du:function(a){return a.createVertexArray()},
dw:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dz:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dA:function(a){return a.endTransformFeedback()},
dR:function(a,b,c,d){this.da(a,b,H.x(c,"$isa",[P.e],"$asa"),d)
return},
da:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dS:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bn:function(a,b){return a.activeTexture(b)},
bp:function(a,b,c){return a.attachShader(b,c)},
bq:function(a,b,c){return a.bindBuffer(b,c)},
bs:function(a,b,c){return a.bindFramebuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b){return a.clear(b)},
by:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bz:function(a,b){return a.compileShader(b)},
bA:function(a){return a.createBuffer()},
bB:function(a){return a.createProgram()},
bC:function(a,b){return a.createShader(b)},
bE:function(a,b){return a.depthMask(b)},
bF:function(a,b){return a.disable(b)},
bG:function(a,b,c,d){return a.drawArrays(b,c,d)},
bH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bI:function(a,b){return a.enable(b)},
bJ:function(a,b){return a.enableVertexAttribArray(b)},
ap:function(a){return P.a3(a.getContextAttributes())},
aL:function(a,b){return a.getProgramInfoLog(b)},
aM:function(a,b,c){return a.getProgramParameter(b,c)},
aO:function(a,b){return a.getShaderInfoLog(b)},
aP:function(a,b,c){return a.getShaderParameter(b,c)},
aQ:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aT:function(a,b,c){return a.shaderSource(b,c)},
aU:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bY:function(a,b,c){return a.uniform1f(b,c)},
bZ:function(a,b,c){return a.uniform1fv(b,c)},
c_:function(a,b,c){return a.uniform1i(b,c)},
c0:function(a,b,c){return a.uniform1iv(b,c)},
c1:function(a,b,c){return a.uniform2fv(b,c)},
c2:function(a,b,c){return a.uniform3fv(b,c)},
c3:function(a,b,c){return a.uniform4fv(b,c)},
c4:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c5:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c6:function(a,b){return a.useProgram(b)},
c7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c9:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i1:{"^":"j;",$isi1:1,"%":"WebGLShader"},ij:{"^":"j;",$isij:1,"%":"WebGLTexture"},ip:{"^":"j;",$isip:1,"%":"WebGLUniformLocation"},it:{"^":"j;",$isit:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",m5:{"^":"jA;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.G(b,a,null,null,null))
return P.a3(this.cZ(a,b))},
h:function(a,b,c){H.k(c,"$isM")
throw H.d(P.z("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
cZ:function(a,b){return a.item(b)},
$asq:function(){return[[P.M,,,]]},
$isl:1,
$asl:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$ast:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},jz:{"^":"j+q;"},jA:{"^":"jz+t;"}}],["","",,G,{"^":"",
ix:function(a){var z,y,x,w
z=H.f(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.i(z,y)
C.a.h(z,y,w+H.h(z[y]))}return C.a.ac(z,"\n")},
dL:function(a,b,c){var z,y,x,w
z=J.o(a)
y=z.bC(a,b)
z.aT(a,y,c)
z.bz(a,y)
x=H.bZ(z.aP(a,y,35713))
if(x!=null&&!x){w=z.aO(a,y)
P.aF("E:Compilation failed:")
P.aF("E:"+G.ix(c))
P.aF("E:Failure:")
P.aF(C.i.L("E:",w))
throw H.d(w)}return y},
dn:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.t(b)
d.af(0,a)
e.t(c)
e.af(0,a)
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
r=Math.sqrt(e.gao())
if(r===0)return!1
e.X(0,-1/r)
return!0},
da:function(a,b){var z,y,x
H.x(a,"$isa",[T.b],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.f.h(b,z,J.bJ(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.h(b,z+1,J.c9(a[y]))
z+=2
if(y>=a.length)return H.i(a,y)
x=J.cM(a[y])
if(z>=b.length)return H.i(b,z)
b[z]=x}return b},
fV:function(a,b){var z,y
H.x(a,"$isa",[T.m],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.h(b,z,J.bJ(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.h(b,z+1,J.c9(a[y]))}return b},
fW:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.H],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.f.h(b,z,J.bJ(a[y]))
if(y>=a.length)return H.i(a,y)
C.f.h(b,z+1,J.c9(a[y]))
x=z+2
if(y>=a.length)return H.i(a,y)
w=J.cM(a[y])
v=b.length
if(x>=v)return H.i(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.i(a,y)
w=J.f6(a[y])
if(z>=v)return H.i(b,z)
b[z]=w}return b},
fU:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bm(a[y],0))
if(y>=a.length)return H.i(a,y)
C.n.h(b,z+1,J.bm(a[y],1))
if(y>=a.length)return H.i(a,y)
C.n.h(b,z+2,J.bm(a[y],2))
if(y>=a.length)return H.i(a,y)
C.n.h(b,z+3,J.bm(a[y],3))}return b},
j3:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ar(z,[H.r(z,0)]),y=y.gD(y),x=b.x,w=[[P.a,P.D]],v=[P.a4],u=[T.H],t=[T.b],s=[T.m];y.w();){r=y.d
if(!x.am(0,r)){r="Dropping unnecessary attribute: "+H.h(r)
if($.ed>0)H.c4("I: "+r)
continue}q=z.i(0,r)
switch($.ab().i(0,r).a){case"vec2":b.a7(r,G.fV(H.bF(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a7(r,G.da(H.bF(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a7(r,G.fW(H.bF(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a7(r,new Float32Array(H.bV(H.bF(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a7(r,G.fU(H.bF(q,"$isa",w,"$asa"),null),4)
break}}},
b_:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.e
w=P.T(x,P.c)
v=J.eU(z.a)
u=new G.hm(z,v,4,w,y,0,-1,P.T(x,P.ak),"meshdata:"+a,!1,!0)
x=G.da(c.d,null)
w.h(0,"aPosition",J.c7(z.a))
u.ch=x
u.aZ("aPosition",x,3)
t=$.ab().i(0,"aPosition")
if(t==null)H.a0("Unknown canonical aPosition")
s=y.i(0,"aPosition")
J.bH(z.a,v)
z.bK(0,s,0)
z.c8(0,w.i(0,"aPosition"),s,t.b0(),5126,!1,0,0)
y=H.x(c.cB(),"$isa",[P.D],"$asa")
u.y=J.c7(z.a)
x=u.ch.length
if(x<768){u.saz(new Uint8Array(H.bV(y)))
u.Q=5121}else if(x<196608){u.saz(new Uint16Array(H.bV(y)))
u.Q=5123}else{u.saz(new Uint32Array(H.bV(y)))
u.Q=5125}J.bH(z.a,v)
y=u.y
x=u.cx
J.c5(z.a,34963,y)
J.cK(z.a,34963,x,35048)
G.j3(c,u)
return u},
b3:{"^":"c;"},
b9:{"^":"b3;d,a,b,c",
b1:function(){return this.d},
l:function(a){var z,y,x,w
z=H.f(["{"+new H.dE(H.kk(this)).l(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.ar(y,[H.r(y,0)]),x=x.gD(x);x.w();){w=x.d
C.a.j(z,H.h(w)+": "+H.h(y.i(0,w)))}return C.a.ac(z,"\n")}},
fs:{"^":"dv;"},
fu:{"^":"c;0a,b",
bK:function(a,b,c){J.f0(this.a,b)
if(c>0)J.fi(this.a,b,c)},
c8:function(a,b,c,d,e,f,g,h){J.c5(this.a,34962,b)
J.fj(this.a,c,d,e,!1,g,h)}},
fX:{"^":"c;a,b,c,d,e"},
a_:{"^":"c;ak:a>,a9:b>,aa:c>",u:{
L:function(a,b,c){return new G.a_(a,b,c)}}},
aK:{"^":"c;ak:a>,a9:b>,aa:c>,d"},
aZ:{"^":"c;a,b,c,d,e",
M:function(a){switch($.ab().i(0,a).a){case"vec2":this.e.h(0,a,H.f([],[T.m]))
break
case"vec3":this.e.h(0,a,H.f([],[T.b]))
break
case"vec4":this.e.h(0,a,H.f([],[T.H]))
break
case"float":this.e.h(0,a,H.f([],[P.a4]))
break
case"uvec4":this.e.h(0,a,H.f([],[[P.a,P.D]]))
break}},
aW:function(a){var z,y,x
z=this.d.length
for(y=this.b,x=0;x<a;++x,z+=3)C.a.j(y,new G.a_(z,z+1,z+2))},
ag:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.aK(z,z+1,z+2,z+3))},
Z:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.b],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x){w=a[x]
v=new T.b(new Float32Array(3))
v.t(w)
C.a.j(y,v)}},
ct:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.b],"$asa")
z=this.d
y=z.length
C.a.j(this.b,new G.a_(y,y+1,y+2))
for(x=0;x<3;++x){w=a[x]
v=new T.b(new Float32Array(3))
v.t(w)
C.a.j(z,v)}},
P:function(a,b){var z,y,x,w,v,u,t
z=[T.m]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.m(u))}},
as:function(a,b){var z,y,x,w,v,u
z=[T.b]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.F)(b),++w){v=b[w]
u=new T.b(new Float32Array(3))
u.t(v)
x.j(y,u)}},
cu:function(a){var z,y,x,w,v
H.x(a,"$isa",[T.b],"$asa")
z=this.d
y=z.length
C.a.j(this.c,new G.aK(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.b(new Float32Array(3))
v.t(w)
C.a.j(z,v)}},
cB:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.f(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.F)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.F)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
b_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.d
y=new Array(z.length)
y.fixed$length=Array
x=H.f(y,[T.b])
w=new T.b(new Float32Array(3))
v=new T.b(new Float32Array(3))
for(y=this.b,u=y.length,t=0;t<y.length;y.length===u||(0,H.F)(y),++t){s=y[t]
r=s.a
q=z.length
if(r>=q)return H.i(z,r)
p=z[r]
o=s.b
if(o>=q)return H.i(z,o)
n=z[o]
m=s.c
if(m>=q)return H.i(z,m)
G.dn(p,n,z[m],w,v)
q=new T.b(new Float32Array(3))
q.t(v)
C.a.h(x,r,q)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,o,r)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,m,r)}for(y=this.c,u=y.length,t=0;t<y.length;y.length===u||(0,H.F)(y),++t){l=y[t]
r=l.a
q=z.length
if(r>=q)return H.i(z,r)
p=z[r]
o=l.b
if(o>=q)return H.i(z,o)
n=z[o]
m=l.c
if(m>=q)return H.i(z,m)
G.dn(p,n,z[m],w,v)
q=new T.b(new Float32Array(3))
q.t(v)
C.a.h(x,r,q)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,o,r)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,m,r)
r=new T.b(new Float32Array(3))
r.t(v)
C.a.h(x,l.d,r)}this.e.h(0,"aNormal",x)},
a1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new Array(this.d.length)
z.fixed$length=Array
y=H.f(z,[T.H])
x=new T.H(new Float32Array(4))
x.O(1,0,0,0)
w=new T.H(new Float32Array(4))
w.O(0,1,0,0)
v=new T.H(new Float32Array(4))
v.O(0,0,1,0)
for(z=this.b,u=z.length,t=0;t<z.length;z.length===u||(0,H.F)(z),++t){s=z[t]
r=new T.H(new Float32Array(4))
r.t(x)
C.a.h(y,s.a,r)
r=new T.H(new Float32Array(4))
r.t(w)
C.a.h(y,s.b,r)
r=new T.H(new Float32Array(4))
r.t(v)
C.a.h(y,s.c,r)}q=new T.H(new Float32Array(4))
q.O(1,0,0,1)
p=new T.H(new Float32Array(4))
p.O(1,1,0,1)
o=new T.H(new Float32Array(4))
o.O(0,1,0,1)
n=new T.H(new Float32Array(4))
n.O(0,0,0,1)
for(z=this.c,u=z.length,t=0;t<z.length;z.length===u||(0,H.F)(z),++t){s=z[t]
r=new T.H(new Float32Array(4))
r.t(q)
C.a.h(y,s.a,r)
r=new T.H(new Float32Array(4))
r.t(p)
C.a.h(y,s.b,r)
r=new T.H(new Float32Array(4))
r.t(o)
C.a.h(y,s.c,r)
r=new T.H(new Float32Array(4))
r.t(n)
C.a.h(y,s.d,r)}this.e.h(0,"aCenter",y)},
l:function(a){var z,y,x,w,v
z=H.f(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.ar(y,[H.r(y,0)]),x=x.gD(x);x.w();){w=x.d
v=$.ab().i(0,w).a
C.a.j(z,H.h(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.ac(z," ")}},
dC:{"^":"c;a,b,c"},
dA:{"^":"c;a,b,c",u:{
dB:function(a,b,c){return new G.dA(a,b,c)}}},
hk:{"^":"b9;d,a,b,c"},
hm:{"^":"b3;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saz:function(a){this.cx=H.x(a,"$isa",[P.D],"$asa")},
aZ:function(a,b,c){var z,y
C.i.av(a,0)
H.k(b,"$isak")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c5(z.a,34962,y)
J.cK(z.a,34962,b,35048)},
cC:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a7:function(a,b,c){var z,y,x,w,v
z=J.cG(a,0)===105
if(z&&this.z===0)this.z=C.d.cr(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c7(x.a))
this.aZ(a,b,c)
w=$.ab().i(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.i(0,a)
J.bH(x.a,this.e)
x.bK(0,v,z?1:0)
x.c8(0,y.i(0,a),v,w.b0(),5126,!1,0,0)},
l:function(a){var z,y,x,w
z=this.cx
y=H.f(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.ar(z,[H.r(z,0)]),x=x.gD(x);x.w();){w=x.d
C.a.j(y,H.h(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.ac(y,"  ")}},
hF:{"^":"b9;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cv:function(a,b){var z
if(typeof a!=="number")return a.dT()
if(typeof b!=="number")return H.aE(b)
z=a/b
if(this.z===z)return
this.z=z
this.b2()},
b2:function(){var z,y,x,w,v,u
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
b1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.b(new Float32Array(3))
u.m(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.t(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.B(t)
x=!!y.$isH
q=x?t.gca(t):1
if(!!y.$isb){p=t.gV(t)
s=t.gT(t)
r=t.ga5(t)
t=p}else if(x){p=t.gV(t)
s=t.gT(t)
r=t.ga5(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.aE(t)
x=z[4]
if(typeof s!=="number")return H.aE(s)
w=z[8]
if(typeof r!=="number")return H.aE(r)
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
c.t(this.db)
c.bM(0,u)
v.h(0,"uPerspectiveViewMatrix",c)
return v}},
l0:{"^":"c;"},
hV:{"^":"b3;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cH:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}},
cJ:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.f([],[P.e])
x=H.f([],[P.e])
for(y=new H.ar(y,[H.r(y,0)]),y=y.gD(y);y.w();){w=y.d
if(!z.am(0,w))C.a.j(x,w)}for(z=this.x,z=P.ja(z,z.r,H.r(z,0)),y=this.Q;z.w();){w=z.d
if(!y.A(0,w))C.a.j(x,w)}return x},
cM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isM",[P.e,P.c],"$asM")
z=Date.now()
for(y=new H.ar(b,[H.r(b,0)]),y=y.gD(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.w();){s=y.d
switch(J.cG(s,0)){case 117:if(w.am(0,s)){r=b.i(0,s)
if(v.am(0,s))H.c4("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.ab().i(0,s)
if(q==null)H.a0("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.R(r)
J.cb(x.a,p,r)}else if(!!J.B(r).$ish3)J.fg(x.a,p,r)
break
case"float":if(q.c===0){H.eb(r)
J.fe(x.a,p,r)}else if(!!J.B(r).$isak)J.ff(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ai(r,"$isO").a
J.cT(x.a,p,!1,s)}else if(!!J.B(r).$isak)J.cT(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ai(r,"$isal").a
J.cS(x.a,p,!1,s)}else if(!!J.B(r).$isak)J.cS(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.ai(r,"$isH").a)
else J.cR(o,p,H.k(r,"$isak"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cQ(o,p,H.ai(r,"$isb").a)
else J.cQ(o,p,H.k(r,"$isak"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cP(o,p,H.ai(r,"$ism").a)
else J.cP(o,p,H.k(r,"$isak"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aE(s)
J.cH(x.a,33984+s)
s=H.ai(r,"$isii").cD()
J.cJ(x.a,3553,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aE(s)
J.cH(x.a,33984+s)
s=H.ai(r,"$isii").cD()
J.cJ(x.a,34067,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.L()
this.ch=s+1
break
default:H.c4("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aH(r,!0)
o=x.a
if(s)J.bn(o,2929)
else J.c8(o,2929)
break
case"cStencilFunc":H.ai(r,"$isdC")
s=r.a
o=x.a
if(s===1281)J.c8(o,2960)
else{J.bn(o,2960)
o=r.b
n=r.c
J.fb(x.a,s,o,n)}break
case"cDepthWrite":H.bZ(r)
J.eV(x.a,r)
break
case"cBlendEquation":H.ai(r,"$isdA")
s=r.a
o=x.a
if(s===1281)J.c8(o,3042)
else{J.bn(o,3042)
o=r.b
n=r.c
J.eP(x.a,o,n)
J.eO(x.a,s)}break}++t
break}}m=P.fO(0,0,0,Date.now()-new P.bM(z,!1).a,0,0)
""+t
m.l(0)},
cA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.b9],"$asa")
Date.now()
z=this.d
J.fh(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b8()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.F)(b),++x){w=b[x]
this.cM(w.a,w.b1())}y=this.Q
y.ab(0)
for(v=a.cy,v=new H.ar(v,[H.r(v,0)]),v=v.gD(v);v.w();)y.j(0,v.d)
u=this.cJ()
if(u.length!==0)P.aF("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(u)))
J.bH(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cC()
s=a.Q
r=a.z
if(t)J.eM(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eZ(q,y,v,s,0,r)
else J.eY(q,y,v,s,0)}else{s=z.a
if(r>1)J.eX(s,y,0,v,r)
else J.eW(s,y,0,v)}if(t)J.f1(z.a)},
u:{
hW:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a6(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.eT(b.a)
t=G.dL(b.a,35633,x)
J.cI(b.a,u,t)
s=G.dL(b.a,35632,w)
J.cI(b.a,u,s)
if(v.length>0)J.fd(b.a,u,v,35980)
J.fa(b.a,u)
if(!H.bZ(J.f9(b.a,u,35714)))H.a0(J.f8(b.a,u))
z=new G.hV(b,c,d,u,P.cl(c.c,z),P.T(z,P.c),P.T(z,z),y,a,!1,!0)
z.cH(a,b,c,d)
return z}}},
C:{"^":"c;a,b,c",
b0:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i2:{"^":"c;a,0b,c,d,e,f,r,x",
cs:function(a){var z,y,x,w
H.x(a,"$isa",[P.e],"$asa")
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
C.a.j(z,w)
y.h(0,w,this.r);++this.r}C.a.aq(z)},
aX:function(a){var z,y
H.x(a,"$isa",[P.e],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.j(z,a[y])
C.a.aq(z)},
aY:function(a){var z,y
H.x(a,"$isa",[P.e],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.j(z,a[y])
C.a.aq(z)},
b3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.f(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.F)(y),++u){t=y[u]
s=$.ab().i(0,t)
C.a.j(w,"layout (location="+H.h(v.i(0,t))+") in "+s.a+" "+H.h(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.ab().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.h(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.ab().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.h(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.ab().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.h(q)+p+";")}C.a.j(w,"")
if(a)C.a.j(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.j(w,"}")
return C.a.ac(w,"\n")},
u:{
du:function(a){var z,y
z=P.e
y=[z]
return new G.i2(a,H.f([],y),H.f([],y),H.f([],y),H.f([],y),0,P.T(z,P.D))}}},
dv:{"^":"b3;",
Y:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
jc:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.k(W.iO("span",null),"$isV")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).au(y,"float")
y.setProperty(x,"left","")
x=C.w.au(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.K(z,v)}return z},
hU:{"^":"hT;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dK:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aF("size change "+H.h(y)+" "+H.h(x))
this.dx.cv(y,x)
this.z=y
this.Q=x},"$1","gdJ",4,0,24]},
i9:{"^":"c;",
cI:function(a,b,c){var z,y
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
y=J.o(z)
y.K(z,this.b)
y.K(z,this.d)
y.K(z,this.c)}},
ia:{"^":"i9;e,f,a,b,c,d",
cL:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dQ(y,2)+" fps"
C.q.cf(this.c,b)
x=C.d.a3(30*C.x.dl(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.k(z.firstChild,"$isV")
v=w.style
u=""+x+"px"
v.height=u
C.q.K(z,w)},
cK:function(a){return this.cL(a,"")}}}],["","",,A,{"^":"",
ec:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.x(e,"$isa",[G.b9],"$asa")
z=b.dx
z.t(c)
y=b.d
z.bM(0,y)
x=b.cx
H.h(b)
w=C.a.gdF(e)
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
v.dq(new T.al(u))
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
C.a.j(e,b.ch)
a.cA(x,e,d)
if(0>=e.length)return H.i(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.i(y,r)
A.ec(a,y[r],z,d,e)}},
aL:{"^":"dv;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
l:function(a){return"NODE["+this.a+"]"}},
ds:{"^":"b3;d,e,f,a,b,c"},
hT:{"^":"b3;",
cG:function(a,b,c){if(this.d==null)this.d=new G.fX(this.e,null,null,null,null)},
cz:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eN(v.a,36160,z)
J.fk(v.a,this.x,this.y,x,w)
if(y!==0)J.eQ(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.c,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
s=t.e
C.a.j(s,new G.b9(P.T(x,w),"transforms",!1,!0))
r=new T.O(new Float32Array(16))
r.F()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.F)(v),++o)A.ec(p,v[o],r,a,s)
if(0>=s.length)return H.i(s,-1)
s.pop()}},
cw:function(){return this.cz(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fE:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.b(new Float32Array(3))
x.m(z,y,b2)
w=new T.b(new Float32Array(3))
w.m(b0,y,b2)
v=new T.b(new Float32Array(3))
v.m(b0,b1,b2)
u=new T.b(new Float32Array(3))
u.m(z,b1,b2)
t=-b2
s=new T.b(new Float32Array(3))
s.m(z,y,t)
r=new T.b(new Float32Array(3))
r.m(z,b1,t)
q=new T.b(new Float32Array(3))
q.m(b0,b1,t)
p=new T.b(new Float32Array(3))
p.m(b0,y,t)
o=new T.b(new Float32Array(3))
o.m(z,b1,t)
n=new T.b(new Float32Array(3))
n.m(z,b1,b2)
m=new T.b(new Float32Array(3))
m.m(b0,b1,b2)
l=new T.b(new Float32Array(3))
l.m(b0,b1,t)
k=new T.b(new Float32Array(3))
k.m(b0,y,b2)
j=new T.b(new Float32Array(3))
j.m(z,y,b2)
i=new T.b(new Float32Array(3))
i.m(z,y,t)
h=new T.b(new Float32Array(3))
h.m(b0,y,t)
g=new T.b(new Float32Array(3))
g.m(b0,y,t)
f=new T.b(new Float32Array(3))
f.m(b0,b1,t)
e=new T.b(new Float32Array(3))
e.m(b0,b1,b2)
d=new T.b(new Float32Array(3))
d.m(b0,y,b2)
c=new T.b(new Float32Array(3))
c.m(z,y,t)
b=new T.b(new Float32Array(3))
b.m(z,y,b2)
y=new T.b(new Float32Array(3))
y.m(z,b1,b2)
a=new T.b(new Float32Array(3))
a.m(z,b1,t)
t=[T.b]
a0=H.f([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.m(new Float32Array(2))
z.p(a7,a9)
y=new T.m(new Float32Array(2))
y.p(a6,a9)
x=new T.m(new Float32Array(2))
x.p(a6,a8)
w=new T.m(new Float32Array(2))
w.p(a7,a8)
v=new T.m(new Float32Array(2))
v.p(a6,a9)
u=new T.m(new Float32Array(2))
u.p(a6,a8)
s=new T.m(new Float32Array(2))
s.p(a7,a8)
r=new T.m(new Float32Array(2))
r.p(a7,a9)
q=new T.m(new Float32Array(2))
q.p(a7,a8)
p=new T.m(new Float32Array(2))
p.p(a7,a9)
o=new T.m(new Float32Array(2))
o.p(a6,a9)
n=new T.m(new Float32Array(2))
n.p(a6,a8)
m=new T.m(new Float32Array(2))
m.p(a6,a8)
l=new T.m(new Float32Array(2))
l.p(a7,a8)
k=new T.m(new Float32Array(2))
k.p(a7,a9)
j=new T.m(new Float32Array(2))
j.p(a6,a9)
i=new T.m(new Float32Array(2))
i.p(a6,a9)
h=new T.m(new Float32Array(2))
h.p(a6,a8)
g=new T.m(new Float32Array(2))
g.p(a7,a8)
f=new T.m(new Float32Array(2))
f.p(a7,a9)
e=new T.m(new Float32Array(2))
e.p(a7,a9)
d=new T.m(new Float32Array(2))
d.p(a6,a9)
c=new T.m(new Float32Array(2))
c.p(a6,a8)
b=new T.m(new Float32Array(2))
b.p(a7,a8)
a1=H.f([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.m])
a2=new G.aZ(!1,H.f([],[G.a_]),H.f([],[G.aK]),H.f([],t),P.T(P.e,[P.a,,]))
a2.M("aTexUV")
a2.M("aNormal")
a2.ag(6)
a2.Z(a0)
a2.P("aTexUV",a1)
for(a3=0;z=$.eE(),a3<6;++a3){a4=z[a3]
a2.as("aNormal",H.f([a4,a4,a4,a4],t))}return a2},
fG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=c/2
y=[T.b]
x=H.f([],y)
w=H.f([],y)
for(v=-z,u=0;u<d;++u){t=u/d*3.141592653589793*2
s=Math.sin(t)
r=Math.cos(t)
q=new Float32Array(3)
q[0]=a*s
q[1]=z
q[2]=a*r
C.a.j(x,new T.b(q))
q=new Float32Array(3)
q[0]=b*s
q[1]=v
q[2]=b*r
C.a.j(w,new T.b(q))}if(0>=x.length)return H.i(x,0)
C.a.j(x,x[0])
if(0>=w.length)return H.i(w,0)
C.a.j(w,w[0])
p=new T.m(new Float32Array(2))
p.p(0,0)
o=new T.b(new Float32Array(3))
o.m(0,z,0)
n=new T.b(new Float32Array(3))
n.m(0,v,0)
m=new G.aZ(!1,H.f([],[G.a_]),H.f([],[G.aK]),H.f([],y),P.T(P.e,[P.a,,]))
m.M("aTexUV")
m.aW(2*d)
for(v=[T.m],u=0;u<d;u=k){q=x.length
if(u>=q)return H.i(x,u)
l=x[u]
k=u+1
if(k>=q)return H.i(x,k)
m.Z(H.f([o,l,x[k]],y))
l=w.length
if(k>=l)return H.i(w,k)
q=w[k]
if(u>=l)return H.i(w,u)
m.Z(H.f([n,q,w[u]],y))
m.P("aTexUV",H.f([p,p,p],v))
m.P("aTexUV",H.f([p,p,p],v))}m.ag(d)
for(u=0;u<d;u=k){k=u+1
q=x.length
if(k>=q)return H.i(x,k)
l=x[k]
if(u>=q)return H.i(x,u)
q=x[u]
j=w.length
if(u>=j)return H.i(w,u)
i=w[u]
if(k>=j)return H.i(w,k)
m.Z(H.f([l,q,i,w[k]],y))
m.P("aTexUV",H.f([p,p,p,p],v))}return m},
h1:function(a,a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=[G.a_]
y=H.f([],z)
x=[T.b]
w=H.f([],x)
C.a.I(y,$.er())
C.a.I(w,$.es())
for(v=0;v<a;++v,y=u){u=H.f([],z)
for(t=y.length,s=0;s<y.length;y.length===t||(0,H.F)(y),++s){r=y[s]
q=J.cL(r)
if(q>=w.length)return H.i(w,q)
q=w[q]
p=new T.b(new Float32Array(3))
p.t(q)
q=r.ga9(r)
if(q>=w.length)return H.i(w,q)
p.j(0,w[q])
p.X(0,0.5)
p.C(0)
q=r.ga9(r)
if(q>=w.length)return H.i(w,q)
q=w[q]
o=new T.b(new Float32Array(3))
o.t(q)
q=r.gaa(r)
if(q>=w.length)return H.i(w,q)
o.j(0,w[q])
o.X(0,0.5)
o.C(0)
q=r.gaa(r)
if(q>=w.length)return H.i(w,q)
q=w[q]
n=new T.b(new Float32Array(3))
n.t(q)
q=r.gak(r)
if(q>=w.length)return H.i(w,q)
n.j(0,w[q])
n.X(0,0.5)
n.C(0)
m=w.length
C.a.j(w,p)
l=w.length
C.a.j(w,o)
k=w.length
C.a.j(w,n)
C.a.j(u,new G.a_(r.gak(r),m,k))
C.a.j(u,new G.a_(r.ga9(r),l,m))
C.a.j(u,new G.a_(r.gaa(r),k,l))
C.a.j(u,new G.a_(m,l,k))}}j=new G.aZ(!1,H.f([],z),H.f([],[G.aK]),H.f([],x),P.T(P.e,[P.a,,]))
j.M("aTexUV")
j.M("aNormal")
for(z=y.length,t=[T.m],s=0;s<y.length;y.length===z||(0,H.F)(y),++s){r=y[s]
q=J.cL(r)
if(q>=w.length)return H.i(w,q)
i=w[q]
q=r.ga9(r)
if(q>=w.length)return H.i(w,q)
h=w[q]
q=r.gaa(r)
if(q>=w.length)return H.i(w,q)
g=w[q]
q=i.a
f=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
e=new Float32Array(2)
e[0]=0.5*(1+f*0.3183098861837907)
e[1]=q*0.3183098861837907
q=h.a
f=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
d=new Float32Array(2)
d[0]=0.5*(1+f*0.3183098861837907)
d[1]=q*0.3183098861837907
q=g.a
f=Math.atan2(q[2],q[0])
q=Math.acos(q[1])
c=new Float32Array(2)
c[0]=0.5*(1+f*0.3183098861837907)
c[1]=q*0.3183098861837907
j.as("aNormal",H.f([i,h,g],x))
q=new T.b(new Float32Array(3))
q.t(i)
q.X(0,a0)
f=new T.b(new Float32Array(3))
f.t(h)
f.X(0,a0)
b=new T.b(new Float32Array(3))
b.t(g)
b.X(0,a0)
j.ct(H.f([q,f,b],x))
j.P("aTexUV",H.f([new T.m(e),new T.m(d),new T.m(c)],t))}return j},
i3:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=B.ik(B.hD(new B.i4(e,d,f,c),0,6.283185307179586,g+1,!1,0.001),h,i,!1)
y=[T.b]
x=new G.aZ(!1,H.f([],[G.a_]),H.f([],[G.aK]),H.f([],y),P.T(P.e,[P.a,,]))
for(w=0;w<g;w=v)for(v=w+1,u=0;u<h;u=t){t=u+1
x.ag(1)
s=z.length
if(w>=s)return H.i(z,w)
r=z[w]
q=t*2
p=r.length
if(q>=p)return H.i(r,q)
o=r[q]
if(v>=s)return H.i(z,v)
s=z[v]
n=s.length
if(q>=n)return H.i(s,q)
q=s[q]
m=u*2
if(m>=n)return H.i(s,m)
s=s[m]
if(m>=p)return H.i(r,m)
x.Z(H.f([o,q,s,r[m]],y))}x.M("aTexUV")
for(y=[T.m],w=0;w<g;w=v)for(s=w/g,v=w+1,u=0;u<h;u=t){t=u+1
r=t/h
q=new Float32Array(2)
q[0]=s
q[1]=r
p=v/g
o=new Float32Array(2)
o[0]=p
o[1]=r
r=u/h
n=new Float32Array(2)
n[0]=p
n[1]=r
p=new Float32Array(2)
p[0]=s
p[1]=r
x.P("aTexUV",H.f([new T.m(q),new T.m(o),new T.m(n),new T.m(p)],y))}x.b_()
return x},
ik:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.b]
H.x(a,"$isa",z,"$asa")
y=H.f([],[[P.a,T.b]])
x=new Float32Array(3)
w=new T.b(x)
v=new Float32Array(3)
u=new T.b(v)
t=new Float32Array(3)
s=new T.b(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.i(a,n)
m=a[n]
l=H.f([],z)
C.a.j(y,l)
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
t[2]=j*i}u.C(0)
s.C(0)
for(h=0;h<r;++h){g=h/b*2*3.141592653589793
f=c*Math.cos(g)
e=c*Math.sin(g)
w.t(o)
w.al(u,f)
w.al(s,e)
p=new T.b(new Float32Array(3))
p.t(w)
C.a.j(l,p)
x[2]=0
x[1]=0
x[0]=0
w.al(u,f)
w.al(s,e)
w.C(0)
p=new T.b(new Float32Array(3))
p.t(w)
C.a.j(l,p)}}return y},
hD:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.n(a,{func:1,ret:-1,args:[P.a4,T.b]})
z=H.f([],[T.b])
y=new T.b(new Float32Array(3))
x=new T.b(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.af(0,y)
t=new T.b(new Float32Array(3))
t.t(y)
C.a.j(z,t)
t=new T.b(new Float32Array(3))
t.t(x)
C.a.j(z,t)}return z},
i4:{"^":"p:25;a,b,c,d",
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
b.sT(0,y*u)
b.sa5(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",ha:{"^":"c;a,b,c",
cE:function(a){var z,y
a=document
z=W.b1
y={func:1,ret:-1,args:[z]}
W.aC(a,"keydown",H.n(new D.hc(this),y),!1,z)
W.aC(a,"keyup",H.n(new D.hd(this),y),!1,z)},
u:{
hb:function(a){var z=P.D
z=new D.ha(P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z))
z.cE(a)
return z}}},hc:{"^":"p:11;a",
$1:function(a){var z
H.k(a,"$isb1")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},hd:{"^":"p:11;a",
$1:function(a){var z
H.k(a,"$isb1")
z=this.a
z.a.bT(0,a.which)
z.c.j(0,a.which)}},hp:{"^":"c;a,b,c,d,e,f,r,x",
cF:function(a){var z,y,x
if(a==null)a=document
z=J.o(a)
y=z.gbP(a)
x=H.r(y,0)
W.aC(y.a,y.b,H.n(new D.hr(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbO(a)
y=H.r(x,0)
W.aC(x.a,x.b,H.n(new D.hs(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbQ(a)
x=H.r(y,0)
W.aC(y.a,y.b,H.n(new D.ht(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbR(a)
x=H.r(z,0)
W.aC(z.a,z.b,H.n(new D.hu(this),{func:1,ret:-1,args:[x]}),!1,x)},
u:{
hq:function(a){var z=P.D
z=new D.hp(P.a6(null,null,null,z),P.a6(null,null,null,z),P.a6(null,null,null,z),0,0,0,0,0)
z.cF(a)
return z}}},hr:{"^":"p:3;a",
$1:function(a){var z,y
H.k(a,"$isX")
a.preventDefault()
z=this.a
y=J.o(a)
z.r=H.R(y.gbN(a).a)
z.x=H.R(y.gbN(a).b)
z.d=a.movementX
z.e=a.movementY}},hs:{"^":"p:3;a",
$1:function(a){var z
H.k(a,"$isX")
a.preventDefault()
P.aF("BUTTON "+H.h(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},ht:{"^":"p:3;a",
$1:function(a){var z
H.k(a,"$isX")
a.preventDefault()
z=this.a
z.a.bT(0,a.button)
z.c.j(0,a.button)}},hu:{"^":"p:26;a",
$1:function(a){H.k(a,"$isaN")
a.preventDefault()
this.a.f=H.R(C.ab.gdv(a))}},hC:{"^":"fs;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bC:function(a){var z,y
z=C.f.dB(H.x(a,"$isl",[P.c],"$asl"),0,new A.km(),P.D)
if(typeof z!=="number")return H.aE(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
km:{"^":"p:27;",
$2:function(a,b){var z,y
H.R(a)
z=J.an(b)
if(typeof a!=="number")return a.L()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",al:{"^":"c;a",
t:function(a){var z,y
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
l:function(a){return"[0] "+this.U(0).l(0)+"\n[1] "+this.U(1).l(0)+"\n[2] "+this.U(2).l(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.i(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.al){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bC(this.a)},
U:function(a){var z,y,x
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
return new T.b(z)},
dq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.t(a)
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
return m}},O:{"^":"c;a",
t:function(a){var z,y
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
l:function(a){return"[0] "+this.U(0).l(0)+"\n[1] "+this.U(1).l(0)+"\n[2] "+this.U(2).l(0)+"\n[3] "+this.U(3).l(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.i(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.O){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bC(this.a)},
U:function(a){var z,y,x
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
return new T.H(z)},
F:function(){var z=this.a
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
bM:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},m:{"^":"c;a",
p:function(a,b){var z=this.a
z[0]=a
z[1]=b},
l:function(a){var z=this.a
return"["+H.h(z[0])+","+H.h(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.m){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bC(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.i(z,b)
return z[b]},
gk:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gV:function(a){return this.a[0]},
gT:function(a){return this.a[1]}},b:{"^":"c;a",
m:function(a,b,c){var z=this.a
C.f.h(z,0,a)
C.f.h(z,1,b)
C.f.h(z,2,c)},
t:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
l:function(a){var z=this.a
return"["+H.h(z[0])+","+H.h(z[1])+","+H.h(z[2])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bC(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.i(z,b)
return z[b]},
gk:function(a){return Math.sqrt(this.gao())},
gao:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
C:function(a){var z,y,x
z=Math.sqrt(this.gao())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aH:function(a){var z,y
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
z=new T.b(new Float32Array(3))
z.m(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
j:function(a,b){var z,y
z=H.k(b,"$isb").a
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
al:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
af:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
X:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
sV:function(a,b){this.a[0]=b
return b},
sT:function(a,b){this.a[1]=b
return b},
sa5:function(a,b){this.a[2]=b
return b},
gV:function(a){return this.a[0]},
gT:function(a){return this.a[1]},
ga5:function(a){return this.a[2]},
u:{
Q:function(a,b,c){var z=new T.b(new Float32Array(3))
z.m(a,b,c)
return z}}},H:{"^":"c;a",
O:function(a,b,c,d){var z=this.a
z[3]=d
z[2]=c
z[1]=b
z[0]=a},
t:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
l:function(a){var z=this.a
return H.h(z[0])+","+H.h(z[1])+","+H.h(z[2])+","+H.h(z[3])},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.H){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bC(this.a)},
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
gV:function(a){return this.a[0]},
gT:function(a){return this.a[1]},
ga5:function(a){return this.a[2]},
gca:function(a){return this.a[3]}}}],["","",,O,{"^":"",
ej:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
z={}
y=document
x=C.m.cd(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ia(0,0,x,w,y.createElement("div"),R.jc("blue","gray",90,30))
u.cI(x,"blue","gray")
t=H.k(C.m.bS(y,"#webgl-canvas"),"$isce")
s=new G.fu(t)
y=P.e
x=P.c
v=(t&&C.H).cc(t,"webgl2",P.dh(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.a0(P.d8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.h(J.f7(v))
if($.ed>0)P.aF("I: "+r)
J.eR(v,0,0,0,1)
J.bn(v,2929)
J.bn(v,2884)
v=new Float32Array(3)
r=D.hb(null)
q=D.hq(t)
p=new T.O(new Float32Array(16))
p.F()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hC(25,10,0,0,new T.b(v),-0.02,r,q,p,new T.b(o),new T.b(n),new T.b(m),new T.b(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.O(new Float32Array(16))
v.F()
r=new T.O(new Float32Array(16))
r.F()
k=new G.hF(l,50,1,0.1,1000,v,r,new T.O(new Float32Array(16)),P.T(y,x),"perspective",!1,!0)
k.b2()
v=H.f([],[A.ds])
j=new R.hU(t,k,null,s,v,17664,0,0,0,0,"main",!1,!0)
j.cG("main",s,null)
j.dK(null)
r=W.a5
W.aC(window,"resize",H.n(j.gdJ(),{func:1,ret:-1,args:[r]}),!1,r)
r=G.hW("main",s,$.eJ(),$.eI())
q=H.f([k],[G.b9])
p=[A.aL]
o=H.f([],p)
C.a.j(v,new A.ds(r,q,o,"wireframe",!1,!0))
x=P.T(y,x)
i=new G.hk(x,"wire",!1,!0)
x.h(0,"cDepthTest",!0)
x.h(0,"cDepthWrite",!0)
x.h(0,"cBlendEquation",$.cC())
x.h(0,"cStencilFunc",$.et())
v=new T.H(new Float32Array(4))
v.O(1,1,0,1)
x.h(0,"uColorAlpha",v)
v=new T.H(new Float32Array(4))
v.O(0,0,0,0.5)
x.h(0,"uColorAlpha2",v)
h=B.h1(2,1,!0)
h.a1()
v=G.b_("icosahedron",r,h)
x=H.f([],p)
q=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
d=new A.aL(i,v,x,new T.al(q),n,m,new T.b(g),new T.b(f),new T.b(e),new T.b(new Float32Array(3)),"sphere",!1,!0)
d.Y(0,0,0)
C.a.j(o,d)
h=B.fE(!0,1,0,1,0,1,1,1)
h.a1()
x=G.b_("cube",r,h)
v=H.f([],p)
q=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
c=new A.aL(i,x,v,new T.al(q),n,m,new T.b(g),new T.b(f),new T.b(e),new T.b(new Float32Array(3)),"cube",!1,!0)
c.Y(-5,0,-5)
C.a.j(o,c)
x=new T.b(new Float32Array(3))
x.m(-1,-1,1)
v=new T.b(new Float32Array(3))
v.m(1,-1,1)
q=new T.b(new Float32Array(3))
q.m(-1,1,1)
n=new T.b(new Float32Array(3))
n.m(-1,-1,-1)
m=new T.b(new Float32Array(3))
m.m(-1,1,-1)
g=new T.b(new Float32Array(3))
g.m(1,-1,-1)
f=[T.b]
b=H.f([x,v,q,n,m,g],f)
x=new T.b(new Float32Array(3))
x.m(-1,1,-1)
v=new T.b(new Float32Array(3))
v.m(-1,1,1)
q=new T.b(new Float32Array(3))
q.m(1,-1,1)
n=new T.b(new Float32Array(3))
n.m(1,-1,-1)
m=new T.b(new Float32Array(3))
m.m(1,-1,1)
g=new T.b(new Float32Array(3))
g.m(-1,-1,1)
e=new T.b(new Float32Array(3))
e.m(-1,-1,-1)
a=new T.b(new Float32Array(3))
a.m(1,-1,-1)
a0=new T.b(new Float32Array(3))
a0.m(-1,-1,-1)
a1=new T.b(new Float32Array(3))
a1.m(-1,-1,1)
a2=new T.b(new Float32Array(3))
a2.m(-1,1,1)
a3=new T.b(new Float32Array(3))
a3.m(-1,1,-1)
a4=H.f([x,v,q,n,m,g,e,a,a0,a1,a2,a3],f)
x=new T.m(new Float32Array(2))
x.p(0,0)
v=new T.m(new Float32Array(2))
v.p(1,0)
q=new T.m(new Float32Array(2))
q.p(1,1)
n=new T.m(new Float32Array(2))
n.p(1,0)
m=new T.m(new Float32Array(2))
m.p(1,1)
g=new T.m(new Float32Array(2))
g.p(0,1)
e=[T.m]
a5=H.f([x,v,q,n,m,g],e)
x=new T.m(new Float32Array(2))
x.p(0,1)
v=new T.m(new Float32Array(2))
v.p(0,0)
q=new T.m(new Float32Array(2))
q.p(1,0)
n=new T.m(new Float32Array(2))
n.p(1,1)
m=new T.m(new Float32Array(2))
m.p(1,1)
g=new T.m(new Float32Array(2))
g.p(0,1)
a=new T.m(new Float32Array(2))
a.p(0,0)
a0=new T.m(new Float32Array(2))
a0.p(1,0)
a1=new T.m(new Float32Array(2))
a1.p(0,0)
a2=new T.m(new Float32Array(2))
a2.p(1,0)
a3=new T.m(new Float32Array(2))
a3.p(1,1)
a6=new T.m(new Float32Array(2))
a6.p(0,1)
a7=H.f([x,v,q,n,m,g,a,a0,a1,a2,a3,a6],e)
a6=[G.a_]
a3=[G.aK]
a2=[P.a,,]
h=new G.aZ(!1,H.f([],a6),H.f([],a3),H.f([],f),P.T(y,a2))
h.M("aTexUV")
h.M("aNormal")
h.aW(2)
h.Z(b)
h.P("aTexUV",a5)
h.ag(3)
h.Z(a4)
h.P("aTexUV",a7)
h.b_()
h.a1()
x=G.b_("wedge",r,h)
v=H.f([],p)
q=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
g=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
a8=new A.aL(i,x,v,new T.al(q),n,m,new T.b(g),new T.b(a),new T.b(a0),new T.b(new Float32Array(3)),"wedge",!1,!0)
a8.Y(0,-5,0)
C.a.j(o,a8)
h=B.fG(3,4,2,16)
h.a1()
x=G.b_("cylinder",r,h)
v=H.f([],p)
q=new Float32Array(9)
n=new T.O(new Float32Array(16))
n.F()
m=new T.O(new Float32Array(16))
m.F()
g=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
a9=new A.aL(i,x,v,new T.al(q),n,m,new T.b(g),new T.b(a),new T.b(a0),new T.b(new Float32Array(3)),"cylinder",!1,!0)
a9.Y(5,0,-5)
C.a.j(o,a9)
x=new T.b(new Float32Array(3))
x.m(-2,-2,0)
v=new T.b(new Float32Array(3))
v.m(2,-2,0)
q=new T.b(new Float32Array(3))
q.m(2,2,0)
n=new T.b(new Float32Array(3))
n.m(-2,2,0)
b0=H.f([x,v,q,n],f)
x=new T.m(new Float32Array(2))
x.p(0,0)
v=new T.m(new Float32Array(2))
v.p(1,0)
q=new T.m(new Float32Array(2))
q.p(1,1)
n=new T.m(new Float32Array(2))
n.p(0,1)
b1=H.f([x,v,q,n],e)
b2=new T.b(new Float32Array(3))
b2.m(0,0,1)
b3=H.f([b2,b2,b2,b2],f)
h=new G.aZ(!1,H.f([],a6),H.f([],a3),H.f([],f),P.T(y,a2))
h.M("aTexUV")
h.cu(b0)
h.P("aTexUV",b1)
h.M("aNormal")
h.as("aNormal",b3)
h.a1()
y=G.b_("quad",r,h)
x=H.f([],p)
v=new Float32Array(9)
q=new T.O(new Float32Array(16))
q.F()
n=new T.O(new Float32Array(16))
n.F()
m=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
b4=new A.aL(i,y,x,new T.al(v),q,n,new T.b(m),new T.b(g),new T.b(f),new T.b(new Float32Array(3)),"quad",!1,!0)
b4.Y(-5,0,5)
C.a.j(o,b4)
h=B.i3(!0,!0,1,2,3,1,128,16,0.4)
h.a1()
y=G.b_("torus",r,h)
p=H.f([],p)
x=new Float32Array(9)
v=new T.O(new Float32Array(16))
v.F()
r=new T.O(new Float32Array(16))
r.F()
q=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
b5=new A.aL(i,y,p,new T.al(x),v,r,new T.b(q),new T.b(n),new T.b(m),new T.b(new Float32Array(3)),"torus",!1,!0)
b5.Y(5,0,5)
C.a.j(o,b5)
z.a=0
new O.kz(z,l,i,j,u).$1(0)},
kz:{"^":"p:28;a,b,c,d,e",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cA(b2)
if(typeof b2!=="number")return b2.aV()
z=this.a
z.a=b2+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aR()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aR()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.A(0,37))y.go+=0.03
else if(v.A(0,39))y.go-=0.03
if(v.A(0,38))y.id+=0.03
else if(v.A(0,40))y.id-=0.03
if(v.A(0,33))y.fy*=0.99
else if(v.A(0,34))y.fy*=1.01
if(v.A(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aR()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.dm(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.Y(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.b(new Float32Array(3))
o.m(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
n=new Float32Array(3)
m=new T.b(n)
m.t(u)
m.af(0,t)
m.C(0)
l=o.bD(m)
l.C(0)
k=m.bD(l)
k.C(0)
t=l.aH(u)
j=k.aH(u)
u=m.aH(u)
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
h=y.f
f=h.a
f[0]=v[2]
f[1]=v[6]
f[2]=v[10]
y=-y.k1
a=Math.sqrt(h.gao())
r=f[0]/a
q=f[1]/a
p=f[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=r*r*a2+a0
y=p*a1
a4=r*q*a2-y
f=q*a1
a5=r*p*a2+f
a6=q*r*a2+y
a7=q*q*a2+a0
y=r*a1
a8=q*p*a2-y
a9=p*r*a2-f
b0=p*q*a2+y
b1=p*p*a2+a0
y=v[0]
f=v[4]
h=v[8]
e=v[1]
d=v[5]
c=v[9]
b=v[2]
i=v[6]
g=v[10]
n=v[3]
t=v[7]
j=v[11]
v[0]=y*a3+f*a6+h*a9
v[1]=e*a3+d*a6+c*a9
v[2]=b*a3+i*a6+g*a9
v[3]=n*a3+t*a6+j*a9
v[4]=y*a4+f*a7+h*b0
v[5]=e*a4+d*a7+c*b0
v[6]=b*a4+i*a7+g*b0
v[7]=n*a4+t*a7+j*b0
v[8]=y*a5+f*a8+h*b1
v[9]=e*a5+d*a8+c*b1
v[10]=b*a5+i*a8+g*b1
v[11]=n*a5+t*a8+j*b1
w.c.ab(0)
w.b.ab(0)
x.e=0
x.d=0
x.f=0
x.c.ab(0)
x.b.ab(0)
y=$.eG().checked?$.cC():$.eo()
this.c.d.h(0,"cBlendEquation",y)
this.d.cw()
C.ac.gdf(window).bV(this,-1)
this.e.cK(z.a)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.bu.prototype
if(a==null)return J.h8.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.bs.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.c)return a
return J.c1(a)}
J.bi=function(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(a.constructor==Array)return J.bs.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.c)return a
return J.c1(a)}
J.ee=function(a){if(a==null)return a
if(a.constructor==Array)return J.bs.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.c)return a
return J.c1(a)}
J.ki=function(a){if(typeof a=="number")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.kj=function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.ef=function(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.o=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.c)return a
return J.c1(a)}
J.bB=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.ba.prototype
return a}
J.aH=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).G(a,b)}
J.ac=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ki(a).a0(a,b)}
J.bm=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kw(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bi(a).i(a,b)}
J.cG=function(a,b){return J.ef(a).av(a,b)}
J.bG=function(a,b){return J.o(a).d2(a,b)}
J.eK=function(a,b,c){return J.o(a).d3(a,b,c)}
J.cH=function(a,b){return J.o(a).bn(a,b)}
J.eL=function(a,b,c,d){return J.o(a).dc(a,b,c,d)}
J.cI=function(a,b,c){return J.o(a).bp(a,b,c)}
J.eM=function(a,b){return J.o(a).dh(a,b)}
J.c5=function(a,b,c){return J.o(a).bq(a,b,c)}
J.eN=function(a,b,c){return J.o(a).bs(a,b,c)}
J.cJ=function(a,b,c){return J.o(a).bt(a,b,c)}
J.bH=function(a,b){return J.o(a).dk(a,b)}
J.eO=function(a,b){return J.o(a).bu(a,b)}
J.eP=function(a,b,c){return J.o(a).bv(a,b,c)}
J.cK=function(a,b,c,d){return J.o(a).bw(a,b,c,d)}
J.eQ=function(a,b){return J.o(a).bx(a,b)}
J.eR=function(a,b,c,d,e){return J.o(a).by(a,b,c,d,e)}
J.eS=function(a,b){return J.kj(a).R(a,b)}
J.c6=function(a,b,c){return J.bi(a).dn(a,b,c)}
J.c7=function(a){return J.o(a).bA(a)}
J.eT=function(a){return J.o(a).bB(a)}
J.eU=function(a){return J.o(a).du(a)}
J.eV=function(a,b){return J.o(a).bE(a,b)}
J.c8=function(a,b){return J.o(a).bF(a,b)}
J.eW=function(a,b,c,d){return J.o(a).bG(a,b,c,d)}
J.eX=function(a,b,c,d,e){return J.o(a).dw(a,b,c,d,e)}
J.eY=function(a,b,c,d,e){return J.o(a).bH(a,b,c,d,e)}
J.eZ=function(a,b,c,d,e,f){return J.o(a).dz(a,b,c,d,e,f)}
J.f_=function(a,b){return J.ee(a).v(a,b)}
J.bn=function(a,b){return J.o(a).bI(a,b)}
J.f0=function(a,b){return J.o(a).bJ(a,b)}
J.f1=function(a){return J.o(a).dA(a)}
J.f2=function(a,b){return J.o(a).H(a,b)}
J.cL=function(a){return J.bB(a).gak(a)}
J.f3=function(a){return J.o(a).gdg(a)}
J.an=function(a){return J.B(a).gB(a)}
J.bI=function(a){return J.ee(a).gD(a)}
J.aU=function(a){return J.bi(a).gk(a)}
J.f4=function(a){return J.o(a).gdH(a)}
J.f5=function(a){return J.o(a).gdO(a)}
J.f6=function(a){return J.bB(a).gca(a)}
J.bJ=function(a){return J.bB(a).gV(a)}
J.c9=function(a){return J.bB(a).gT(a)}
J.cM=function(a){return J.bB(a).ga5(a)}
J.ca=function(a,b){return J.o(a).a6(a,b)}
J.f7=function(a){return J.o(a).ap(a)}
J.f8=function(a,b){return J.o(a).aL(a,b)}
J.f9=function(a,b,c){return J.o(a).aM(a,b,c)}
J.cN=function(a,b,c){return J.o(a).aQ(a,b,c)}
J.fa=function(a,b){return J.o(a).bL(a,b)}
J.cO=function(a){return J.o(a).dI(a)}
J.fb=function(a,b,c,d){return J.o(a).aU(a,b,c,d)}
J.fc=function(a){return J.ef(a).dP(a)}
J.bo=function(a){return J.B(a).l(a)}
J.fd=function(a,b,c,d){return J.o(a).dR(a,b,c,d)}
J.fe=function(a,b,c){return J.o(a).bY(a,b,c)}
J.ff=function(a,b,c){return J.o(a).bZ(a,b,c)}
J.cb=function(a,b,c){return J.o(a).c_(a,b,c)}
J.fg=function(a,b,c){return J.o(a).c0(a,b,c)}
J.cP=function(a,b,c){return J.o(a).c1(a,b,c)}
J.cQ=function(a,b,c){return J.o(a).c2(a,b,c)}
J.cR=function(a,b,c){return J.o(a).c3(a,b,c)}
J.cS=function(a,b,c,d){return J.o(a).c4(a,b,c,d)}
J.cT=function(a,b,c,d){return J.o(a).c5(a,b,c,d)}
J.fh=function(a,b){return J.o(a).c6(a,b)}
J.fi=function(a,b,c){return J.o(a).dS(a,b,c)}
J.fj=function(a,b,c,d,e,f,g){return J.o(a).c7(a,b,c,d,e,f,g)}
J.fk=function(a,b,c,d,e){return J.o(a).c9(a,b,c,d,e)}
I.aS=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bK.prototype
C.H=W.ce.prototype
C.w=W.fB.prototype
C.q=W.fK.prototype
C.I=W.fM.prototype
C.J=W.h_.prototype
C.m=W.h0.prototype
C.K=J.j.prototype
C.a=J.bs.prototype
C.x=J.dd.prototype
C.d=J.de.prototype
C.r=J.bt.prototype
C.i=J.bu.prototype
C.R=J.bv.prototype
C.f=H.hv.prototype
C.n=H.hx.prototype
C.V=W.hy.prototype
C.A=J.hG.prototype
C.B=W.hQ.prototype
C.G=W.ih.prototype
C.v=J.ba.prototype
C.ab=W.aN.prototype
C.ac=W.iv.prototype
C.e=new P.jo()
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
C.S=H.f(I.aS(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.T=H.f(I.aS(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.U=H.f(I.aS([]),[P.e])
C.t=H.f(I.aS(["bind","if","ref","repeat","syntax"]),[P.e])
C.u=H.f(I.aS(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.W=new G.C("vec3","vertex btangents",0)
C.c=new G.C("vec3","",0)
C.X=new G.C("vec4","delta from light",0)
C.o=new G.C("","",0)
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
C.h=new G.C("sampler2D","",0)
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
$.ad=0
$.aV=null
$.cW=null
$.cr=!1
$.eh=null
$.e8=null
$.em=null
$.c_=null
$.c2=null
$.cy=null
$.aP=null
$.bc=null
$.bd=null
$.cs=!1
$.K=C.e
$.aj=null
$.cg=null
$.d6=null
$.d5=null
$.d2=null
$.d1=null
$.d0=null
$.d_=null
$.ed=0
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
I.$lazy(y,x,w)}})(["kV","eq",function(){return H.eg("_$dart_dartClosure")},"lz","cD",function(){return H.eg("_$dart_js")},"mj","eu",function(){return H.af(H.bS({
toString:function(){return"$receiver$"}}))},"mk","ev",function(){return H.af(H.bS({$method$:null,
toString:function(){return"$receiver$"}}))},"ml","ew",function(){return H.af(H.bS(null))},"mm","ex",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mp","eA",function(){return H.af(H.bS(void 0))},"mq","eB",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mo","ez",function(){return H.af(H.dD(null))},"mn","ey",function(){return H.af(function(){try{null.$method$}catch(z){return z.message}}())},"ms","eD",function(){return H.af(H.dD(void 0))},"mr","eC",function(){return H.af(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mC","cE",function(){return P.iy()},"mT","bl",function(){return[]},"kS","ep",function(){return{}},"mK","eF",function(){return P.cl(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"mL","cF",function(){return P.T(P.e,P.bq)},"m6","et",function(){return new G.dC(1281,0,4294967295)},"kN","cC",function(){return G.dB(1281,1281,1281)},"kO","eo",function(){return G.dB(32774,770,771)},"mR","ab",function(){return P.dh(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.e,G.C)},"n_","eJ",function(){var z,y
z=G.du("WireframeV")
y=[P.e]
z.cs(H.f(["aPosition","aCenter"],y))
z.aY(H.f(["vCenter"],y))
z.aX(H.f(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b=z.b3(!0,H.x(H.f(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vCenter = aCenter;"],y),"$isa",y,"$asa"),null)
return z},"mZ","eI",function(){var z,y
z=G.du("WireframeF")
y=[P.e]
z.aY(H.f(["vCenter"],y))
z.aX(H.f(["uColorAlpha","uColorAlpha2"],y))
z.b=z.b3(!1,H.x(H.f(["// the 3 vertices of a Face3 (w == 0) have the centers:\n// (1, 0, 0, 0)) \n// (0, 1, 0, 0)\n// (0, 0, 1, 0)\nfloat edgeFactorFace3(vec3 center) {\n    vec3 d = fwidth(center);\n    vec3 a3 = smoothstep(vec3(0.0), d * 1.5, center);\n    return min(min(a3.x, a3.y), a3.z);\n}\n\n// the 4 vertices of a Face4 (w == 1) have the centers:\n// (1, 0, 0, 1) \n// (1, 1, 0, 1)\n// (0, 1, 0, 1)\n// (0, 0, 0, 1)\nfloat edgeFactorFace4(vec2 center) {\n    vec2 d = fwidth(center);\n    vec2 a2 = smoothstep(vec2(0.0), d * 1.5, center);\n    return min(a2.x, a2.y);\n}\n\nvoid main() {\n    float q;\n    if (vCenter.w == 0.0) {\n        q = edgeFactorFace3(vCenter.xyz);\n    } else {\n        q = min(edgeFactorFace4(vCenter.xy),\n                edgeFactorFace4(1.0 - vCenter.xy));\n    }\n    oFragColor = mix(uColorAlpha, uColorAlpha2, q);\n}\n"],y),"$isa",y,"$asa"),null)
return z},"mH","eE",function(){return H.f([T.Q(0,0,1),T.Q(0,0,-1),T.Q(0,1,0),T.Q(0,-1,0),T.Q(1,0,0),T.Q(-1,0,0)],[T.b])},"lq","er",function(){return H.f([G.L(0,11,5),G.L(0,5,1),G.L(0,1,7),G.L(0,7,10),G.L(0,10,11),G.L(1,5,9),G.L(5,11,4),G.L(11,10,2),G.L(10,7,6),G.L(7,1,8),G.L(3,9,4),G.L(3,4,2),G.L(3,2,6),G.L(3,6,8),G.L(3,8,9),G.L(4,9,5),G.L(2,4,11),G.L(6,2,10),G.L(8,6,7),G.L(9,8,1)],[G.a_])},"mY","eH",function(){return(1+P.kE(5))/2},"lr","es",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.eH()
y=T.Q(-1,z,0)
y.C(0)
x=T.Q(1,z,0)
x.C(0)
if(typeof z!=="number")return z.dU()
w=T.Q(-1,-z,0)
w.C(0)
v=T.Q(1,-z,0)
v.C(0)
u=T.Q(0,-1,z)
u.C(0)
t=T.Q(0,1,z)
t.C(0)
s=T.Q(0,-1,-z)
s.C(0)
r=T.Q(0,1,-z)
r.C(0)
q=T.Q(z,0,-1)
q.C(0)
p=T.Q(z,0,1)
p.C(0)
o=T.Q(-z,0,-1)
o.C(0)
z=T.Q(-z,0,1)
z.C(0)
return H.f([y,x,w,v,u,t,s,r,q,p,o,z],[T.b])},"mW","eG",function(){return H.ai(C.m.bS(W.kf(),"#opaque"),"$isdb")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.I,args:[W.X]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.e,args:[P.D]},{func:1,ret:P.U,args:[W.ae]},{func:1,ret:P.U,args:[P.e]},{func:1,ret:P.I,args:[W.b1]},{func:1,ret:P.U,args:[W.V,P.e,P.e,W.by]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,],opt:[P.a7]},{func:1,ret:[P.ag,,],args:[,]},{func:1,ret:P.U,args:[W.u]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.I,args:[P.E]},{func:1,args:[W.a5]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.a4,T.b]},{func:1,ret:P.I,args:[W.aN]},{func:1,ret:P.D,args:[P.D,P.c]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.D,args:[,,]}]
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
Isolate.aS=a.aS
Isolate.bh=a.bh
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
if(typeof dartMainRunner==="function")dartMainRunner(O.ej,[])
else O.ej([])})})()
//# sourceMappingURL=wireframe.dart.js.map
