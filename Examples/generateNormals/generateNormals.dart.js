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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cl(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",kV:{"^":"c;a"}}],["","",,J,{"^":"",
cs:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bO:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cp==null){H.jL()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cd("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cu()]
if(v!=null)return v
v=H.jQ(a)
if(v!=null)return v
if(typeof a=="function")return C.I
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.cu(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
h:{"^":"c;",
B:function(a,b){return a===b},
gv:function(a){return H.b1(a)},
k:["bZ",function(a){return"Instance of '"+H.b2(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fz:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isci:1},
fB:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isA:1},
c6:{"^":"h;",
gv:function(a){return 0},
k:["c_",function(a){return String(a)}]},
h9:{"^":"c6;"},
b5:{"^":"c6;"},
bk:{"^":"c6;",
k:function(a){var z=a[$.e1()]
if(z==null)return this.c_(a)
return"JavaScript function for "+H.d(J.by(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc2:1},
bh:{"^":"h;$ti",
j:function(a,b){H.y(b,H.p(a,0))
if(!!a.fixed$length)H.T(P.B("add"))
a.push(b)},
cK:function(a,b){var z,y
H.w(b,"$isl",[H.p(a,0)],"$asl")
if(!!a.fixed$length)H.T(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.I)(b),++y)a.push(b[y])},
Y:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.d(a[y]))
return z.join(b)},
gd7:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.fx())},
bW:function(a,b){if(!!a.immutable$list)H.T(P.B("sort"))
H.hB(a,J.jl(),H.p(a,0))},
a8:function(a){return this.bW(a,null)},
k:function(a){return P.c4(a,"[","]")},
gC:function(a){return new J.eP(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.b1(a)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.b(H.ad(a,b))
return a[b]},
h:function(a,b,c){H.t(b)
H.y(c,H.p(a,0))
if(!!a.immutable$list)H.T(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ad(a,b))
if(b>=a.length||b<0)throw H.b(H.ad(a,b))
a[b]=c},
$isu:1,
$asu:I.b8,
$isl:1,
$isa:1,
p:{
fy:function(a,b){return J.c5(H.m(a,[b]))},
c5:function(a){H.b9(a)
a.fixed$length=Array
return a},
kT:[function(a,b){return J.eo(H.dW(a,"$isV"),H.dW(b,"$isV"))},"$2","jl",8,0,28]}},
kU:{"^":"bh;$ti"},
eP:{"^":"c;a,b,c,0d,$ti",
saL:function(a){this.d=H.y(a,H.p(this,0))},
gE:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.I(z))
x=this.c
if(x>=y){this.saL(null)
return!1}this.saL(z[x]);++this.c
return!0}},
bi:{"^":"h;",
J:function(a,b){var z
H.ct(b)
if(typeof b!=="number")throw H.b(H.ay(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gao(b)
if(this.gao(a)===z)return 0
if(this.gao(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gao:function(a){return a===0?1/a<0:a<0},
bE:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.B(""+a+".toInt()"))},
cR:function(a,b,c){if(this.J(b,c)>0)throw H.b(H.ay(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
c0:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b4(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.b4(a,b)},
b4:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.B("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
b2:function(a,b){var z
if(a>0)z=this.cH(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cH:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.b(H.ay(b))
return a>b},
$isV:1,
$asV:function(){return[P.H]},
$isae:1,
$isH:1},
cZ:{"^":"bi;",$isE:1},
fA:{"^":"bi;"},
bj:{"^":"h;",
bh:function(a,b){if(b<0)throw H.b(H.ad(a,b))
if(b>=a.length)H.T(H.ad(a,b))
return a.charCodeAt(b)},
V:function(a,b){if(b>=a.length)throw H.b(H.ad(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.z(b)
if(typeof b!=="string")throw H.b(P.cL(b,null,null))
return a+b},
bX:function(a,b){var z=H.m(a.split(b),[P.e])
return z},
aD:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bE(b,null,null))
if(b>c)throw H.b(P.bE(b,null,null))
if(c>a.length)throw H.b(P.bE(c,null,null))
return a.substring(b,c)},
bY:function(a,b){return this.aD(a,b,null)},
di:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.V(z,0)===133){x=J.fC(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bh(z,w)===133?J.fD(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
cU:function(a,b,c){if(c>a.length)throw H.b(P.hl(c,0,a.length,null,null))
return H.jY(a,b,c)},
J:function(a,b){var z
H.z(b)
if(typeof b!=="string")throw H.b(H.ay(b))
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
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.b(H.ad(a,b))
return a[b]},
$isu:1,
$asu:I.b8,
$isV:1,
$asV:function(){return[P.e]},
$isd7:1,
$ise:1,
p:{
d_:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fC:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.V(a,b)
if(y!==32&&y!==13&&!J.d_(y))break;++b}return b},
fD:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bh(a,z)
if(y!==32&&y!==13&&!J.d_(y))break}return b}}}}],["","",,H,{"^":"",
fx:function(){return new P.de("No element")},
hB:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.E,args:[c,c]})
H.bm(a,0,J.bd(a)-1,b,c)},
bm:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.hA(a,b,c,d,e)
else H.hz(a,b,c,d,e)},
hA:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.aN(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a5(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
hz:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.f.W(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.W(b+a0,2)
v=w-z
u=w+z
t=J.aN(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
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
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.U(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.Z()
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
if(typeof e!=="number")return e.Z()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.O()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.O()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.Z()
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
H.bm(a,b,m-2,a1,a2)
H.bm(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.U(a1.$2(t.i(a,m),r),0);)++m
for(;J.U(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.Z()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bm(a,m,l,a1,a2)}else H.bm(a,m,l,a1,a2)},
fd:{"^":"l;"},
fO:{"^":"c;a,b,c,0d,$ti",
saM:function(a){this.d=H.y(a,H.p(this,0))},
gE:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.aN(z)
x=y.gl(z)
if(this.b!==x)throw H.b(P.aS(z))
w=this.c
if(w>=x){this.saM(null)
return!1}this.saM(y.u(z,w));++this.c
return!0}},
bB:{"^":"c;$ti"}}],["","",,H,{"^":"",
aD:function(a){var z,y
z=H.z(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jF:function(a){return init.types[H.t(a)]},
jO:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isx},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.by(a)
if(typeof z!=="string")throw H.b(H.ay(a))
return z},
b1:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hj:function(a,b){var z,y
if(typeof a!=="string")H.T(H.ay(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.z(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
hi:function(a){var z,y
if(typeof a!=="string")H.T(H.ay(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.eG(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
b2:function(a){return H.ha(a)+H.bK(H.aB(a),0,null)},
ha:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.B||!!z.$isb5){u=C.t(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aD(w.length>1&&C.h.V(w,0)===36?C.h.bY(w,1):w)},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hh:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
hf:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
hb:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
hc:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
he:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
hg:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
hd:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
aC:function(a){throw H.b(H.ay(a))},
f:function(a,b){if(a==null)J.bd(a)
throw H.b(H.ad(a,b))},
ad:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.t(J.bd(a))
if(!(b<0)){if(typeof z!=="number")return H.aC(z)
y=b>=z}else y=!0
if(y)return P.J(b,a,"index",null,z)
return P.bE(b,"index",null)},
ay:function(a){return new P.aE(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.bD()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dZ})
z.name=""}else z.toString=H.dZ
return z},
dZ:function(){return J.by(this.dartException)},
T:function(a){throw H.b(a)},
I:function(a){throw H.b(P.aS(a))},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.k3(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b2(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c8(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.d6(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.e3()
u=$.e4()
t=$.e5()
s=$.e6()
r=$.e9()
q=$.ea()
p=$.e8()
$.e7()
o=$.ec()
n=$.eb()
m=v.I(y)
if(m!=null)return z.$1(H.c8(H.z(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.c8(H.z(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.d6(H.z(y),m))}}return z.$1(new H.hP(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dd()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dd()
return a},
aO:function(a){var z
if(a==null)return new H.dC(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dC(a)},
jB:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
jN:function(a,b,c,d,e,f){H.j(a,"$isc2")
switch(H.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.cX("Unsupported number of arguments for wrapped closure"))},
az:function(a,b){var z
H.t(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jN)
a.$identity=z
return z},
f_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.hn(z).r}else x=d
w=e?Object.create(new H.hC().constructor.prototype):Object.create(new H.bX(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a6
if(typeof u!=="number")return u.F()
$.a6=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cP(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jF,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cN:H.bY
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cP(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
eX:function(a,b,c,d){var z=H.bY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cP:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eX(y,!w,z,b)
if(y===0){w=$.a6
if(typeof w!=="number")return w.F()
$.a6=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aR
if(v==null){v=H.bz("self")
$.aR=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a6
if(typeof w!=="number")return w.F()
$.a6=w+1
t+=w
w="return function("+t+"){return this."
v=$.aR
if(v==null){v=H.bz("self")
$.aR=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
eY:function(a,b,c,d){var z,y
z=H.bY
y=H.cN
switch(b?-1:a){case 0:throw H.b(H.hu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.aR
if(z==null){z=H.bz("self")
$.aR=z}y=$.cM
if(y==null){y=H.bz("receiver")
$.cM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a6
if(typeof y!=="number")return y.F()
$.a6=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a6
if(typeof y!=="number")return y.F()
$.a6=y+1
return new Function(z+y+"}")()},
cl:function(a,b,c,d,e,f,g){return H.f_(a,b,H.t(c),d,!!e,!!f,g)},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a3(a,"String"))},
dP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a3(a,"double"))},
ct:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a3(a,"num"))},
cj:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a3(a,"bool"))},
t:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a3(a,"int"))},
bR:function(a,b){throw H.b(H.a3(a,H.aD(H.z(b).substring(3))))},
jW:function(a,b){throw H.b(H.cO(a,H.aD(H.z(b).substring(3))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.bR(a,b)},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.jW(a,b)},
dW:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.bR(a,b)},
mf:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.C(a)[b])return a
H.bR(a,b)},
b9:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.b(H.a3(a,"List<dynamic>"))},
jP:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.bR(a,b)},
cm:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.t(z)]
else return a.$S()}return},
bp:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cm(J.C(a))
if(z==null)return!1
return H.dG(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cf)return a
$.cf=!0
try{if(H.bp(a,b))return a
z=H.bs(b)
y=H.a3(a,z)
throw H.b(y)}finally{$.cf=!1}},
aM:function(a,b){if(a!=null&&!H.ck(a,b))H.T(H.a3(a,H.bs(b)))
return a},
dK:function(a){var z,y
z=J.C(a)
if(!!z.$isn){y=H.cm(z)
if(y!=null)return H.bs(y)
return"Closure"}return H.b2(a)},
k2:function(a){throw H.b(new P.f5(H.z(a)))},
dS:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
aB:function(a){if(a==null)return
return a.$ti},
mc:function(a,b,c){return H.ba(a["$as"+H.d(c)],H.aB(b))},
bq:function(a,b,c,d){var z
H.z(c)
H.t(d)
z=H.ba(a["$as"+H.d(c)],H.aB(b))
return z==null?null:z[d]},
p:function(a,b){var z
H.t(b)
z=H.aB(a)
return z==null?null:z[b]},
bs:function(a){return H.ax(a,null)},
ax:function(a,b){var z,y
H.w(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aD(a[0].builtin$cls)+H.bK(a,1,b)
if(typeof a=="function")return H.aD(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.t(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.d(b[y])}if('func' in a)return H.jk(a,b)
if('futureOr' in a)return"FutureOr<"+H.ax("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.m([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.j(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.h.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.ax(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ax(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ax(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ax(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jA(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.z(z[l])
n=n+m+H.ax(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bK:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cc("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}return"<"+z.k(0)+">"},
jE:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$isn){y=H.cm(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.aB(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
ba:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ac:function(a,b,c,d){var z,y
H.z(b)
H.b9(c)
H.z(d)
if(a==null)return!1
z=H.aB(a)
y=J.C(a)
if(y[b]==null)return!1
return H.dN(H.ba(y[d],z),null,c,null)},
bt:function(a,b,c,d){H.z(b)
H.b9(c)
H.z(d)
if(a==null)return a
if(H.ac(a,b,c,d))return a
throw H.b(H.cO(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(3))+H.bK(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.z(b)
H.b9(c)
H.z(d)
if(a==null)return a
if(H.ac(a,b,c,d))return a
throw H.b(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(3))+H.bK(c,0,null),init.mangledGlobalNames)))},
dN:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a0(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a0(a[y],b,c[y],d))return!1
return!0},
m9:function(a,b,c){return a.apply(b,H.ba(J.C(b)["$as"+H.d(c)],H.aB(b)))},
dU:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="A"||a===-1||a===-2||H.dU(z)}return!1},
ck:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="A"||b===-1||b===-2||H.dU(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ck(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bp(a,b)}z=J.C(a).constructor
y=H.aB(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a0(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.ck(a,b))throw H.b(H.a3(a,H.bs(b)))
return a},
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a0(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.dG(a,b,c,d)
if('func' in a)return c.builtin$cls==="c2"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a0("type" in a?a.type:null,b,x,d)
else if(H.a0(a,b,x,d))return!0
else{if(!('$is'+"W" in y.prototype))return!1
w=y.prototype["$as"+"W"]
v=H.ba(w,z?a.slice(1):null)
return H.a0(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dN(H.ba(r,z),b,u,d)},
dG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a0(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a0(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a0(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a0(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jV(m,b,l,d)},
jV:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a0(c[w],d,a[w],b))return!1}return!0},
ma:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
jQ:function(a){var z,y,x,w,v,u
z=H.z($.dT.$1(a))
y=$.bM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.z($.dM.$2(a,z))
if(z!=null){y=$.bM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bQ(x)
$.bM[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bP[z]=x
return x}if(v==="-"){u=H.bQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dX(a,x)
if(v==="*")throw H.b(P.cd(z))
if(init.leafTags[z]===true){u=H.bQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dX(a,x)},
dX:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cs(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bQ:function(a){return J.cs(a,!1,null,!!a.$isx)},
jU:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bQ(z)
else return J.cs(z,c,null,null)},
jL:function(){if(!0===$.cp)return
$.cp=!0
H.jM()},
jM:function(){var z,y,x,w,v,u,t,s
$.bM=Object.create(null)
$.bP=Object.create(null)
H.jH()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dY.$1(v)
if(u!=null){t=H.jU(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jH:function(){var z,y,x,w,v,u,t
z=C.F()
z=H.aL(C.C,H.aL(C.H,H.aL(C.r,H.aL(C.r,H.aL(C.G,H.aL(C.D,H.aL(C.E(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dT=new H.jI(v)
$.dM=new H.jJ(u)
$.dY=new H.jK(t)},
aL:function(a,b){return a(b)||b},
jY:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
k_:function(a,b,c,d){var z=b.cz(a,d)
if(z==null)return a
return H.k1(a,z.b.index,z.gd0(z),c)},
jZ:function(a,b,c){var z,y
z=b.gb_()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
k0:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.k_(a,b,c,d)},
k1:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
hm:{"^":"c;a,b,c,d,e,f,r,0x",p:{
hn:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c5(z)
y=z[0]
x=z[1]
return new H.hm(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hK:{"^":"c;a,b,c,d,e,f",
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
a7:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.m([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dj:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h6:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
d6:function(a,b){return new H.h6(a,b==null?null:b.method)}}},
fF:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
c8:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fF(a,y,z?null:b.receiver)}}},
hP:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
k3:{"^":"n:5;a",
$1:function(a){if(!!J.C(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dC:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isP:1},
n:{"^":"c;",
k:function(a){return"Closure '"+H.b2(this).trim()+"'"},
gbS:function(){return this},
$isc2:1,
gbS:function(){return this}},
dg:{"^":"n;"},
hC:{"^":"dg;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aD(z)+"'"}},
bX:{"^":"dg;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bX))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b1(this.a)
else y=typeof z!=="object"?J.ah(z):H.b1(z)
return(y^H.b1(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.b2(z)+"'")},
p:{
bY:function(a){return a.a},
cN:function(a){return a.c},
bz:function(a){var z,y,x,w,v
z=new H.bX("self","target","receiver","name")
y=J.c5(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hL:{"^":"N;a",
k:function(a){return this.a},
p:{
a3:function(a,b){return new H.hL("TypeError: "+H.d(P.bA(a))+": type '"+H.dK(a)+"' is not a subtype of type '"+b+"'")}}},
eV:{"^":"N;a",
k:function(a){return this.a},
p:{
cO:function(a,b){return new H.eV("CastError: "+H.d(P.bA(a))+": type '"+H.dK(a)+"' is not a subtype of type '"+b+"'")}}},
ht:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
hu:function(a){return new H.ht(a)}}},
dk:{"^":"c;a,0b,0c,0d",
ga3:function(){var z=this.b
if(z==null){z=H.bs(this.a)
this.b=z}return z},
k:function(a){return this.ga3()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.ga3())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dk&&this.ga3()===b.ga3()}},
c7:{"^":"fR;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gM:function(a){return new H.al(this,[H.p(this,0)])},
a4:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cu(z,b)}else{y=this.d5(b)
return y}},
d5:function(a){var z=this.d
if(z==null)return!1
return this.an(this.ai(z,J.ah(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a0(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a0(w,b)
x=y==null?null:y.b
return x}else return this.d6(b)},
d6:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ai(z,J.ah(a)&0x3ffffff)
x=this.an(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.p(this,0))
H.y(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aj()
this.b=z}this.aO(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aj()
this.c=y}this.aO(y,b,c)}else{x=this.d
if(x==null){x=this.aj()
this.d=x}w=J.ah(b)&0x3ffffff
v=this.ai(x,w)
if(v==null)this.al(x,w,[this.ak(b,c)])
else{u=this.an(v,b)
if(u>=0)v[u].b=c
else v.push(this.ak(b,c))}}},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.aS(this))
z=z.c}},
aO:function(a,b,c){var z
H.y(b,H.p(this,0))
H.y(c,H.p(this,1))
z=this.a0(a,b)
if(z==null)this.al(a,b,this.ak(b,c))
else z.b=c},
aZ:function(){this.r=this.r+1&67108863},
ak:function(a,b){var z,y
z=new H.fK(H.y(a,H.p(this,0)),H.y(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aZ()
return z},
an:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
k:function(a){return P.d3(this)},
a0:function(a,b){return a[b]},
ai:function(a,b){return a[b]},
al:function(a,b,c){a[b]=c},
cv:function(a,b){delete a[b]},
cu:function(a,b){return this.a0(a,b)!=null},
aj:function(){var z=Object.create(null)
this.al(z,"<non-identifier-key>",z)
this.cv(z,"<non-identifier-key>")
return z},
$isd1:1},
fK:{"^":"c;a,b,0c,0d"},
al:{"^":"fd;a,$ti",
gl:function(a){return this.a.a},
gC:function(a){var z,y
z=this.a
y=new H.fL(z,z.r,this.$ti)
y.c=z.e
return y}},
fL:{"^":"c;a,b,0c,0d,$ti",
saN:function(a){this.d=H.y(a,H.p(this,0))},
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aS(z))
else{z=this.c
if(z==null){this.saN(null)
return!1}else{this.saN(z.a)
this.c=this.c.c
return!0}}}},
jI:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
jJ:{"^":"n:11;a",
$2:function(a,b){return this.a(a,b)}},
jK:{"^":"n:12;a",
$1:function(a){return this.a(H.z(a))}},
fE:{"^":"c;a,b,0c,0d",
k:function(a){return"RegExp/"+this.a+"/"},
gb_:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.d0(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
cz:function(a,b){var z,y
z=this.gb_()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.iB(this,y)},
$isd7:1,
p:{
d0:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(P.c1("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
iB:{"^":"c;a,b",
gd0:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]}}}],["","",,H,{"^":"",
jA:function(a){return J.fy(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bJ:function(a){var z,y
if(!!J.C(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
a8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ad(b,a))},
h4:{"^":"h;",$ishM:1,"%":"DataView;ArrayBufferView;c9|dw|dx|d4|dy|dz|ao"},
c9:{"^":"h4;",
gl:function(a){return a.length},
$isu:1,
$asu:I.b8,
$isx:1,
$asx:I.b8},
d4:{"^":"dx;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
h:function(a,b,c){H.t(b)
H.dP(c)
H.a8(b,a,a.length)
a[b]=c},
$asbB:function(){return[P.ae]},
$asq:function(){return[P.ae]},
$isl:1,
$asl:function(){return[P.ae]},
$isa:1,
$asa:function(){return[P.ae]},
"%":"Float64Array"},
ao:{"^":"dz;",
h:function(a,b,c){H.t(b)
H.t(c)
H.a8(b,a,a.length)
a[b]=c},
$asbB:function(){return[P.E]},
$asq:function(){return[P.E]},
$isl:1,
$asl:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
h3:{"^":"d4;",$isa9:1,"%":"Float32Array"},
l3:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int16Array"},
l4:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
$isfv:1,
"%":"Int32Array"},
l5:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int8Array"},
l6:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
h5:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
$islP:1,
"%":"Uint32Array"},
l7:{"^":"ao;",
gl:function(a){return a.length},
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
l8:{"^":"ao;",
gl:function(a){return a.length},
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dw:{"^":"c9+q;"},
dx:{"^":"dw+bB;"},
dy:{"^":"c9+q;"},
dz:{"^":"dy+bB;"}}],["","",,P,{"^":"",
hY:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.js()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.az(new P.i_(z),1)).observe(y,{childList:true})
return new P.hZ(z,y,x)}else if(self.setImmediate!=null)return P.jt()
return P.ju()},
lY:[function(a){self.scheduleImmediate(H.az(new P.i0(H.k(a,{func:1,ret:-1})),0))},"$1","js",4,0,4],
lZ:[function(a){self.setImmediate(H.az(new P.i1(H.k(a,{func:1,ret:-1})),0))},"$1","jt",4,0,4],
m_:[function(a){H.k(a,{func:1,ret:-1})
P.j2(0,a)},"$1","ju",4,0,4],
fm:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.w(a,"$isl",[[P.W,d]],"$asl")
s=[[P.a,d]]
y=new P.O(0,$.D,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fo(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.I)(r),++p){w=r[p]
v=o
w.as(new P.fn(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.O(0,$.D,s)
r.aQ(C.J)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.m(r,[d])}catch(n){u=H.aQ(n)
t=H.aO(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bD()
r=$.D
if(r!==C.e)r.toString
s=new P.O(0,r,s)
s.aR(m,t)
return s}else{z.c=u
z.d=t}}return y},
jo:function(a,b){if(H.bp(a,{func:1,args:[P.c,P.P]}))return H.k(a,{func:1,ret:null,args:[P.c,P.P]})
if(H.bp(a,{func:1,args:[P.c]}))return H.k(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.cL(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jn:function(){var z,y
for(;z=$.aJ,z!=null;){$.b7=null
y=z.b
$.aJ=y
if(y==null)$.b6=null
z.a.$0()}},
m7:[function(){$.cg=!0
try{P.jn()}finally{$.b7=null
$.cg=!1
if($.aJ!=null)$.cv().$1(P.dO())}},"$0","dO",0,0,1],
dJ:function(a){var z=new P.dn(H.k(a,{func:1,ret:-1}))
if($.aJ==null){$.b6=z
$.aJ=z
if(!$.cg)$.cv().$1(P.dO())}else{$.b6.b=z
$.b6=z}},
jr:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aJ
if(z==null){P.dJ(a)
$.b7=$.b6
return}y=new P.dn(a)
x=$.b7
if(x==null){y.b=z
$.b7=y
$.aJ=y}else{y.b=x.b
x.b=y
$.b7=y
if(y.b==null)$.b6=y}},
jX:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.D
if(C.e===y){P.aK(null,null,C.e,a)
return}y.toString
P.aK(null,null,y,H.k(y.b9(a),z))},
bL:function(a,b,c,d,e){var z={}
z.a=d
P.jr(new P.jp(z,e))},
dH:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
dI:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
jq:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aK:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.b9(d):c.cO(d,-1)
P.dJ(d)},
i_:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hZ:{"^":"n:13;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i0:{"^":"n:0;a",
$0:function(){this.a.$0()}},
i1:{"^":"n:0;a",
$0:function(){this.a.$0()}},
j1:{"^":"c;a,0b,c",
co:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.az(new P.j3(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
p:{
j2:function(a,b){var z=new P.j1(!0,0)
z.co(a,b)
return z}}},
j3:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
W:{"^":"c;$ti"},
fo:{"^":"n:14;a,b,c,d",
$2:function(a,b){var z,y
H.j(b,"$isP")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.G(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.G(z.c,z.d)}},
fn:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.aU(z.a)}else if(z.b===0&&!this.e)this.c.G(z.c,z.d)},
$S:function(){return{func:1,ret:P.A,args:[this.f]}}},
dr:{"^":"c;$ti",
cT:function(a,b){if(a==null)a=new P.bD()
if(this.a.a!==0)throw H.b(P.cb("Future already completed"))
$.D.toString
this.G(a,b)},
cS:function(a){return this.cT(a,null)}},
dp:{"^":"dr;a,$ti",
bj:function(a,b){var z
H.aM(b,{futureOr:1,type:H.p(this,0)})
z=this.a
if(z.a!==0)throw H.b(P.cb("Future already completed"))
z.aQ(b)},
G:function(a,b){this.a.aR(a,b)}},
iZ:{"^":"dr;a,$ti",
G:function(a,b){this.a.G(a,b)}},
aH:{"^":"c;0a,b,c,d,e,$ti",
d8:function(a){if(this.c!==6)return!0
return this.b.b.ar(H.k(this.d,{func:1,ret:P.ci,args:[P.c]}),a.a,P.ci,P.c)},
d4:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bp(z,{func:1,args:[P.c,P.P]}))return H.aM(w.de(z,a.a,a.b,null,y,P.P),x)
else return H.aM(w.ar(H.k(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
O:{"^":"c;b3:a<,b,0cG:c<,$ti",
as:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jo(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.O(0,$.D,[c])
w=b==null?1:3
this.aP(new P.aH(x,w,a,b,[z,c]))
return x},
a5:function(a,b){return this.as(a,null,b)},
aP:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaH")
this.c=a}else{if(z===2){y=H.j(this.c,"$isO")
z=y.a
if(z<4){y.aP(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aK(null,null,z,H.k(new P.ig(this,a),{func:1,ret:-1}))}},
b0:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaH")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isO")
y=u.a
if(y<4){u.b0(a)
return}this.a=y
this.c=u.c}z.a=this.a2(a)
y=this.b
y.toString
P.aK(null,null,y,H.k(new P.io(z,this),{func:1,ret:-1}))}},
a1:function(){var z=H.j(this.c,"$isaH")
this.c=null
return this.a2(z)},
a2:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ad:function(a){var z,y,x
z=H.p(this,0)
H.aM(a,{futureOr:1,type:z})
y=this.$ti
if(H.ac(a,"$isW",y,"$asW"))if(H.ac(a,"$isO",y,null))P.bH(a,this)
else P.ds(a,this)
else{x=this.a1()
H.y(a,z)
this.a=4
this.c=a
P.aI(this,x)}},
aU:function(a){var z
H.y(a,H.p(this,0))
z=this.a1()
this.a=4
this.c=a
P.aI(this,z)},
G:function(a,b){var z
H.j(b,"$isP")
z=this.a1()
this.a=8
this.c=new P.Z(a,b)
P.aI(this,z)},
aQ:function(a){var z
H.aM(a,{futureOr:1,type:H.p(this,0)})
if(H.ac(a,"$isW",this.$ti,"$asW")){this.cs(a)
return}this.a=1
z=this.b
z.toString
P.aK(null,null,z,H.k(new P.ii(this,a),{func:1,ret:-1}))},
cs:function(a){var z=this.$ti
H.w(a,"$isW",z,"$asW")
if(H.ac(a,"$isO",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aK(null,null,z,H.k(new P.im(this,a),{func:1,ret:-1}))}else P.bH(a,this)
return}P.ds(a,this)},
aR:function(a,b){var z
H.j(b,"$isP")
this.a=1
z=this.b
z.toString
P.aK(null,null,z,H.k(new P.ih(this,a,b),{func:1,ret:-1}))},
$isW:1,
p:{
ds:function(a,b){var z,y,x
b.a=1
try{a.as(new P.ij(b),new P.ik(b),null)}catch(x){z=H.aQ(x)
y=H.aO(x)
P.jX(new P.il(b,z,y))}},
bH:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isO")
if(z>=4){y=b.a1()
b.a=a.a
b.c=a.c
P.aI(b,y)}else{y=H.j(b.c,"$isaH")
b.a=2
b.c=a
a.b0(y)}},
aI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isZ")
y=y.b
u=v.a
t=v.b
y.toString
P.bL(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aI(z.a,b)}y=z.a
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
if(p){H.j(r,"$isZ")
y=y.b
u=r.a
t=r.b
y.toString
P.bL(null,null,y,u,t)
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.ir(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iq(x,b,r).$0()}else if((y&2)!==0)new P.ip(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.C(y).$isW){if(y.a>=4){n=H.j(t.c,"$isaH")
t.c=null
b=t.a2(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bH(y,t)
return}}m=b.b
n=H.j(m.c,"$isaH")
m.c=null
b=m.a2(n)
y=x.a
u=x.b
if(!y){H.y(u,H.p(m,0))
m.a=4
m.c=u}else{H.j(u,"$isZ")
m.a=8
m.c=u}z.a=m
y=m}}}},
ig:{"^":"n:0;a,b",
$0:function(){P.aI(this.a,this.b)}},
io:{"^":"n:0;a,b",
$0:function(){P.aI(this.b,this.a.a)}},
ij:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.ad(a)}},
ik:{"^":"n:15;a",
$2:function(a,b){H.j(b,"$isP")
this.a.G(a,b)},
$1:function(a){return this.$2(a,null)}},
il:{"^":"n:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
ii:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.aU(H.y(this.b,H.p(z,0)))}},
im:{"^":"n:0;a,b",
$0:function(){P.bH(this.b,this.a)}},
ih:{"^":"n:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
ir:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bD(H.k(w.d,{func:1}),null)}catch(v){y=H.aQ(v)
x=H.aO(v)
if(this.d){w=H.j(this.a.a.c,"$isZ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isZ")
else u.b=new P.Z(y,x)
u.a=!0
return}if(!!J.C(z).$isW){if(z instanceof P.O&&z.gb3()>=4){if(z.gb3()===8){w=this.b
w.b=H.j(z.gcG(),"$isZ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a5(new P.is(t),null)
w.a=!1}}},
is:{"^":"n:16;a",
$1:function(a){return this.a}},
iq:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.y(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.ar(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aQ(t)
y=H.aO(t)
x=this.a
x.b=new P.Z(z,y)
x.a=!0}}},
ip:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isZ")
w=this.c
if(w.d8(z)&&w.e!=null){v=this.b
v.b=w.d4(z)
v.a=!1}}catch(u){y=H.aQ(u)
x=H.aO(u)
w=H.j(this.a.a.c,"$isZ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Z(y,x)
s.a=!0}}},
dn:{"^":"c;a,0b"},
hE:{"^":"c;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.O(0,$.D,[P.E])
z.a=0
x=H.p(this,0)
w=H.k(new P.hG(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.hH(z,y),{func:1,ret:-1})
W.ab(this.a,this.b,w,!1,x)
return y}},
hG:{"^":"n;a,b",
$1:function(a){H.y(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.p(this.b,0)]}}},
hH:{"^":"n:0;a,b",
$0:function(){this.b.ad(this.a.a)}},
hF:{"^":"c;"},
Z:{"^":"c;a,b",
k:function(a){return H.d(this.a)},
$isN:1},
j8:{"^":"c;",$islW:1},
jp:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bD()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
iN:{"^":"j8;",
df:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.D){a.$0()
return}P.dH(null,null,this,a,-1)}catch(x){z=H.aQ(x)
y=H.aO(x)
P.bL(null,null,this,z,H.j(y,"$isP"))}},
dg:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.D){a.$1(b)
return}P.dI(null,null,this,a,b,-1,c)}catch(x){z=H.aQ(x)
y=H.aO(x)
P.bL(null,null,this,z,H.j(y,"$isP"))}},
cO:function(a,b){return new P.iP(this,H.k(a,{func:1,ret:b}),b)},
b9:function(a){return new P.iO(this,H.k(a,{func:1,ret:-1}))},
cP:function(a,b){return new P.iQ(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bD:function(a,b){H.k(a,{func:1,ret:b})
if($.D===C.e)return a.$0()
return P.dH(null,null,this,a,b)},
ar:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.D===C.e)return a.$1(b)
return P.dI(null,null,this,a,b,c,d)},
de:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.D===C.e)return a.$2(b,c)
return P.jq(null,null,this,a,b,c,d,e,f)}},
iP:{"^":"n;a,b,c",
$0:function(){return this.a.bD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
iO:{"^":"n:1;a,b",
$0:function(){return this.a.df(this.b)}},
iQ:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dg(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
d2:function(a,b,c){H.b9(a)
return H.w(H.jB(a,new H.c7(0,0,[b,c])),"$isd1",[b,c],"$asd1")},
X:function(a,b){return new H.c7(0,0,[a,b])},
fM:function(){return new H.c7(0,0,[null,null])},
am:function(a,b,c,d){return new P.iz(0,0,[d])},
fw:function(a,b,c){var z,y
if(P.ch(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.e])
y=$.bb()
C.a.j(y,a)
try{P.jm(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.df(b,H.jP(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
c4:function(a,b,c){var z,y,x
if(P.ch(a))return b+"..."+c
z=new P.cc(b)
y=$.bb()
C.a.j(y,a)
try{x=z
x.a=P.df(x.gR(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gR()+c
y=z.gR()
return y.charCodeAt(0)==0?y:y},
ch:function(a){var z,y
for(z=0;y=$.bb(),z<y.length;++z)if(a===y[z])return!0
return!1},
jm:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.e],"$asa")
z=a.gC(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.d(z.gE(z))
C.a.j(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.w()){if(x<=4){C.a.j(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.w();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.j(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.j(b,q)
C.a.j(b,u)
C.a.j(b,v)},
fN:function(a,b){var z,y,x
z=P.am(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.I)(a),++x)z.j(0,H.y(a[x],b))
return z},
d3:function(a){var z,y,x
z={}
if(P.ch(a))return"{...}"
y=new P.cc("")
try{C.a.j($.bb(),a)
x=y
x.a=x.gR()+"{"
z.a=!0
J.ex(a,new P.fS(z,y))
z=y
z.a=z.gR()+"}"}finally{z=$.bb()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gR()
return z.charCodeAt(0)==0?z:z},
iz:{"^":"iu;a,0b,0c,0d,0e,0f,r,$ti",
gC:function(a){return P.dv(this,this.r,H.p(this,0))},
gl:function(a){return this.a},
H:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.j(z[b],"$isbo")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.j(y[b],"$isbo")!=null}else return this.ct(b)},
ct:function(a){var z=this.d
if(z==null)return!1
return this.ah(this.aX(z,a),a)>=0},
j:function(a,b){var z,y
H.y(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ce()
this.b=z}return this.aS(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ce()
this.c=y}return this.aS(y,b)}else return this.cp(0,b)},
cp:function(a,b){var z,y,x
H.y(b,H.p(this,0))
z=this.d
if(z==null){z=P.ce()
this.d=z}y=this.aV(b)
x=z[y]
if(x==null)z[y]=[this.ac(b)]
else{if(this.ah(x,b)>=0)return!1
x.push(this.ac(b))}return!0},
bC:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b1(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b1(this.c,b)
else return this.cE(0,b)},
cE:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.aX(z,b)
x=this.ah(y,b)
if(x<0)return!1
this.b5(y.splice(x,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ab()}},
aS:function(a,b){H.y(b,H.p(this,0))
if(H.j(a[b],"$isbo")!=null)return!1
a[b]=this.ac(b)
return!0},
b1:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isbo")
if(z==null)return!1
this.b5(z)
delete a[b]
return!0},
ab:function(){this.r=this.r+1&67108863},
ac:function(a){var z,y
z=new P.bo(H.y(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ab()
return z},
b5:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ab()},
aV:function(a){return J.ah(a)&0x3ffffff},
aX:function(a,b){return a[this.aV(b)]},
ah:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
p:{
ce:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bo:{"^":"c;a,0b,0c"},
iA:{"^":"c;a,b,0c,0d,$ti",
saT:function(a){this.d=H.y(a,H.p(this,0))},
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aS(z))
else{z=this.c
if(z==null){this.saT(null)
return!1}else{this.saT(H.y(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
p:{
dv:function(a,b,c){var z=new P.iA(a,b,[c])
z.c=a.e
return z}}},
iu:{"^":"hv;"},
q:{"^":"c;$ti",
gC:function(a){return new H.fO(a,this.gl(a),0,[H.bq(this,a,"q",0)])},
u:function(a,b){return this.i(a,b)},
d2:function(a,b,c,d){var z,y,x
H.y(b,d)
H.k(c,{func:1,ret:d,args:[d,H.bq(this,a,"q",0)]})
z=this.gl(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gl(a))throw H.b(P.aS(a))}return y},
k:function(a){return P.c4(a,"[","]")}},
fR:{"^":"Y;"},
fS:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
Y:{"^":"c;$ti",
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bq(this,a,"Y",0),H.bq(this,a,"Y",1)]})
for(z=J.cC(this.gM(a));z.w();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.bd(this.gM(a))},
k:function(a){return P.d3(a)},
$isM:1},
hw:{"^":"c;$ti",
k:function(a){return P.c4(this,"{","}")},
$isl:1,
$islq:1},
hv:{"^":"hw;"}}],["","",,P,{"^":"",
cq:function(a,b,c){var z
H.z(a)
z=H.hj(a,c)
if(z!=null)return z
throw H.b(P.c1(a,null,null))},
aA:function(a,b){var z
H.z(a)
z=H.hi(a)
if(z!=null)return z
throw H.b(P.c1("Invalid double",a,null))},
fe:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.b2(a)+"'"},
d9:function(a,b,c){return new H.fE(a,H.d0(a,!1,!0,!1))},
bA:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.by(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fe(a)},
cX:function(a){return new P.ic(a)},
ag:function(a){H.aP(H.d(a))},
ci:{"^":"c;"},
"+bool":0,
aT:{"^":"c;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.aT&&this.a===b.a&&this.b===b.b},
J:function(a,b){return C.f.J(this.a,H.j(b,"$isaT").a)},
gv:function(a){var z=this.a
return(z^C.f.b2(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.f7(H.hh(this))
y=P.be(H.hf(this))
x=P.be(H.hb(this))
w=P.be(H.hc(this))
v=P.be(H.he(this))
u=P.be(H.hg(this))
t=P.f8(H.hd(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isV:1,
$asV:function(){return[P.aT]},
p:{
f7:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
be:function(a){if(a>=10)return""+a
return"0"+a}}},
ae:{"^":"H;"},
"+double":0,
aU:{"^":"c;a",
O:function(a,b){return C.f.O(this.a,H.j(b,"$isaU").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.f.J(this.a,H.j(b,"$isaU").a)},
k:function(a){var z,y,x,w,v
z=new P.fc()
y=this.a
if(y<0)return"-"+new P.aU(0-y).k(0)
x=z.$1(C.f.W(y,6e7)%60)
w=z.$1(C.f.W(y,1e6)%60)
v=new P.fb().$1(y%1e6)
return""+C.f.W(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isV:1,
$asV:function(){return[P.aU]},
p:{
cV:function(a,b,c,d,e,f){return new P.aU(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fb:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fc:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"c;"},
bD:{"^":"N;",
k:function(a){return"Throw of null."}},
aE:{"^":"N;a,b,c,d",
gaf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gae:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gaf()+y+x
if(!this.a)return w
v=this.gae()
u=P.bA(this.b)
return w+v+": "+H.d(u)},
p:{
eO:function(a){return new P.aE(!1,null,null,a)},
cL:function(a,b,c){return new P.aE(!0,a,b,c)}}},
d8:{"^":"aE;e,f,a,b,c,d",
gaf:function(){return"RangeError"},
gae:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
bE:function(a,b,c){return new P.d8(null,null,!0,a,b,"Value not in range")},
hl:function(a,b,c,d,e){return new P.d8(b,c,!0,a,d,"Invalid value")}}},
fu:{"^":"aE;e,l:f>,a,b,c,d",
gaf:function(){return"RangeError"},
gae:function(){var z,y
z=H.t(this.b)
if(typeof z!=="number")return z.Z()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
J:function(a,b,c,d,e){var z=H.t(e==null?J.bd(b):e)
return new P.fu(b,z,!0,a,c,"Index out of range")}}},
hQ:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.hQ(a)}}},
hO:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cd:function(a){return new P.hO(a)}}},
de:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
cb:function(a){return new P.de(a)}}},
f0:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bA(z))+"."},
p:{
aS:function(a){return new P.f0(a)}}},
dd:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isN:1},
f5:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ic:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
fj:{"^":"c;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.d(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.aD(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
c1:function(a,b,c){return new P.fj(a,b,c)}}},
E:{"^":"H;"},
"+int":0,
l:{"^":"c;$ti",
gl:function(a){var z,y
z=this.gC(this)
for(y=0;z.w();)++y
return y},
k:function(a){return P.fw(this,"(",")")}},
a:{"^":"c;$ti",$isl:1},
"+List":0,
M:{"^":"c;$ti"},
A:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
H:{"^":"c;",$isV:1,
$asV:function(){return[P.H]}},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.b1(this)},
k:function(a){return"Instance of '"+H.b2(this)+"'"},
toString:function(){return this.k(this)}},
P:{"^":"c;"},
e:{"^":"c;",$isV:1,
$asV:function(){return[P.e]},
$isd7:1},
"+String":0,
cc:{"^":"c;R:a<",
gl:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
df:function(a,b,c){var z=J.cC(b)
if(!z.w())return a
if(c.length===0){do a+=H.d(z.gE(z))
while(z.w())}else{a+=H.d(z.gE(z))
for(;z.w();)a=a+c+H.d(z.gE(z))}return a}}}}],["","",,W,{"^":"",
cW:function(a){H.j(a,"$isL")
return"wheel"},
bI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
du:function(a,b,c,d){var z,y
z=W.bI(W.bI(W.bI(W.bI(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
dF:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.i5(a)
if(!!J.C(z).$isL)return z
return}else return H.j(a,"$isL")},
jj:function(a){var z
if(!!J.C(a).$isc0)return a
z=new P.hV([],[],!1)
z.c=!0
return z.at(a)},
dL:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.e)return a
return z.cP(a,b)},
a2:{"^":"bf;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
k4:{"^":"h;0l:length=","%":"AccessibleNodeList"},
k5:{"^":"a2;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
k6:{"^":"a2;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
eS:{"^":"h;","%":";Blob"},
bZ:{"^":"a2;0n:height=,0m:width=",
bT:function(a,b,c){var z=this.cA(a,b,P.jv(c,null))
return z},
cA:function(a,b,c){return a.getContext(b,c)},
$isbZ:1,
"%":"HTMLCanvasElement"},
kb:{"^":"h;",
a7:function(a){return P.a1(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kc:{"^":"G;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
f1:{"^":"c_;",$isf1:1,"%":"CSSNumericValue|CSSUnitValue"},
kd:{"^":"f3;0l:length=","%":"CSSPerspective"},
ai:{"^":"h;",$isai:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ke:{"^":"i3;0l:length=",
aw:function(a,b){var z=this.cB(a,this.cr(a,b))
return z==null?"":z},
cr:function(a,b){var z,y
z=$.e0()
y=z[b]
if(typeof y==="string")return y
y=this.cI(a,b)
z[b]=y
return y},
cI:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f9()+b
if(z in a)return z
return b},
cB:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f2:{"^":"c;",
gn:function(a){return this.aw(a,"height")},
gm:function(a){return this.aw(a,"width")}},
c_:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
f3:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kg:{"^":"c_;0l:length=","%":"CSSTransformValue"},
kh:{"^":"c_;0l:length=","%":"CSSUnparsedValue"},
kj:{"^":"h;0l:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
c0:{"^":"G;",
da:function(a,b){return a.querySelector(b)},
gby:function(a){return new W.bn(a,"mousedown",!1,[W.Q])},
gbz:function(a){return new W.bn(a,"mousemove",!1,[W.Q])},
gbA:function(a){return new W.bn(a,"mouseup",!1,[W.Q])},
gbB:function(a){return new W.bn(a,H.z(W.cW(a)),!1,[W.aG])},
$isc0:1,
"%":"XMLDocument;Document"},
kk:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
kl:{"^":"i7;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.w(c,"$isS",[P.H],"$asS")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.S,P.H]]},
$isx:1,
$asx:function(){return[[P.S,P.H]]},
$asq:function(){return[[P.S,P.H]]},
$isl:1,
$asl:function(){return[[P.S,P.H]]},
$isa:1,
$asa:function(){return[[P.S,P.H]]},
$asr:function(){return[[P.S,P.H]]},
"%":"ClientRectList|DOMRectList"},
fa:{"^":"h;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.ac(b,"$isS",[P.H],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.o(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.du(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isS:1,
$asS:function(){return[P.H]},
"%":";DOMRectReadOnly"},
km:{"^":"i9;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.z(c)
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.e]},
$isx:1,
$asx:function(){return[P.e]},
$asq:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"DOMStringList"},
kn:{"^":"h;0l:length=","%":"DOMTokenList"},
bf:{"^":"G;",
k:function(a){return a.localName},
gby:function(a){return new W.bG(a,"mousedown",!1,[W.Q])},
gbz:function(a){return new W.bG(a,"mousemove",!1,[W.Q])},
gbA:function(a){return new W.bG(a,"mouseup",!1,[W.Q])},
gbB:function(a){return new W.bG(a,H.z(W.cW(a)),!1,[W.aG])},
$isbf:1,
"%":";Element"},
kp:{"^":"a2;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a_:{"^":"h;",$isa_:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
cL:function(a,b,c,d){H.k(c,{func:1,args:[W.a_]})
if(c!=null)this.cq(a,b,c,!1)},
cq:function(a,b,c,d){return a.addEventListener(b,H.az(H.k(c,{func:1,args:[W.a_]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dA|dB|dD|dE"},
aj:{"^":"eS;",$isaj:1,"%":"File"},
kG:{"^":"ie;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isaj")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aj]},
$isx:1,
$asx:function(){return[W.aj]},
$asq:function(){return[W.aj]},
$isl:1,
$asl:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asr:function(){return[W.aj]},
"%":"FileList"},
kH:{"^":"L;0l:length=","%":"FileWriter"},
kK:{"^":"a2;0l:length=","%":"HTMLFormElement"},
ak:{"^":"h;",$isak:1,"%":"Gamepad"},
kL:{"^":"h;0l:length=","%":"History"},
kM:{"^":"iw;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isG")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.G]},
$isx:1,
$asx:function(){return[W.G]},
$asq:function(){return[W.G]},
$isl:1,
$asl:function(){return[W.G]},
$isa:1,
$asa:function(){return[W.G]},
$asr:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fq:{"^":"c0;","%":"HTMLDocument"},
fr:{"^":"fs;",
dm:function(a,b,c,d,e,f){return a.open(b,c)},
d9:function(a,b,c){return a.open(b,c)},
bU:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
fs:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
kN:{"^":"a2;0n:height=,0m:width=","%":"HTMLIFrameElement"},
kO:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
kP:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
kQ:{"^":"a2;0n:height=,0m:width=","%":"HTMLImageElement"},
kS:{"^":"a2;0n:height=,0m:width=","%":"HTMLInputElement"},
aX:{"^":"dl;",$isaX:1,"%":"KeyboardEvent"},
kY:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
fU:{"^":"a2;","%":"HTMLAudioElement;HTMLMediaElement"},
l_:{"^":"h;0l:length=","%":"MediaList"},
l0:{"^":"iC;",
i:function(a,b){return P.a1(a.get(H.z(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.e])
this.D(a,new W.fW(z))
return z},
gl:function(a){return a.size},
$asY:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIInputMap"},
fW:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
l1:{"^":"iD;",
i:function(a,b){return P.a1(a.get(H.z(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.e])
this.D(a,new W.fX(z))
return z},
gl:function(a){return a.size},
$asY:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
fX:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
an:{"^":"h;",$isan:1,"%":"MimeType"},
l2:{"^":"iF;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isan")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.an]},
$isx:1,
$asx:function(){return[W.an]},
$asq:function(){return[W.an]},
$isl:1,
$asl:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asr:function(){return[W.an]},
"%":"MimeTypeArray"},
Q:{"^":"dl;",
gbx:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b0(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.C(W.dF(z)).$isbf)throw H.b(P.B("offsetX is only supported on elements"))
y=H.j(W.dF(z),"$isbf")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.b0(u,v,w),"$isb0",w,"$asb0")
if(typeof z!=="number")return z.T()
if(typeof x!=="number")return x.T()
return new P.b0(C.o.bE(z-u),C.o.bE(x-v),w)}},
$isQ:1,
"%":";DragEvent|MouseEvent"},
G:{"^":"L;",
k:function(a){var z=a.nodeValue
return z==null?this.bZ(a):z},
$isG:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
l9:{"^":"iH;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isG")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.G]},
$isx:1,
$asx:function(){return[W.G]},
$asq:function(){return[W.G]},
$isl:1,
$asl:function(){return[W.G]},
$isa:1,
$asa:function(){return[W.G]},
$asr:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
lb:{"^":"a2;0n:height=,0m:width=","%":"HTMLObjectElement"},
ld:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
le:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ap:{"^":"h;0l:length=",$isap:1,"%":"Plugin"},
lg:{"^":"iL;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isap")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$asq:function(){return[W.ap]},
$isl:1,
$asl:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asr:function(){return[W.ap]},
"%":"PluginArray"},
li:{"^":"Q;0n:height=,0m:width=","%":"PointerEvent"},
bl:{"^":"a_;",$isbl:1,"%":"ProgressEvent|ResourceProgressEvent"},
ln:{"^":"iR;",
i:function(a,b){return P.a1(a.get(H.z(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.e])
this.D(a,new W.hs(z))
return z},
gl:function(a){return a.size},
$asY:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"RTCStatsReport"},
hs:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},
lo:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lp:{"^":"a2;0l:length=","%":"HTMLSelectElement"},
aq:{"^":"L;",$isaq:1,"%":"SourceBuffer"},
lr:{"^":"dB;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isaq")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$asq:function(){return[W.aq]},
$isl:1,
$asl:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asr:function(){return[W.aq]},
"%":"SourceBufferList"},
ar:{"^":"h;",$isar:1,"%":"SpeechGrammar"},
ls:{"^":"iT;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isar")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ar]},
$isx:1,
$asx:function(){return[W.ar]},
$asq:function(){return[W.ar]},
$isl:1,
$asl:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asr:function(){return[W.ar]},
"%":"SpeechGrammarList"},
as:{"^":"h;0l:length=",$isas:1,"%":"SpeechRecognitionResult"},
lv:{"^":"iW;",
i:function(a,b){return this.aY(a,H.z(b))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.cD(a,z)
if(y==null)return
b.$2(y,this.aY(a,y))}},
gM:function(a){var z=H.m([],[P.e])
this.D(a,new W.hD(z))
return z},
gl:function(a){return a.length},
aY:function(a,b){return a.getItem(b)},
cD:function(a,b){return a.key(b)},
$asY:function(){return[P.e,P.e]},
$isM:1,
$asM:function(){return[P.e,P.e]},
"%":"Storage"},
hD:{"^":"n:17;a",
$2:function(a,b){return C.a.j(this.a,a)}},
at:{"^":"h;",$isat:1,"%":"CSSStyleSheet|StyleSheet"},
ly:{"^":"h;0m:width=","%":"TextMetrics"},
au:{"^":"L;",$isau:1,"%":"TextTrack"},
av:{"^":"L;",$isav:1,"%":"TextTrackCue|VTTCue"},
lz:{"^":"j0;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isav")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$asq:function(){return[W.av]},
$isl:1,
$asl:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asr:function(){return[W.av]},
"%":"TextTrackCueList"},
lA:{"^":"dE;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isau")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$asq:function(){return[W.au]},
$isl:1,
$asl:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asr:function(){return[W.au]},
"%":"TextTrackList"},
lB:{"^":"h;0l:length=","%":"TimeRanges"},
aw:{"^":"h;",$isaw:1,"%":"Touch"},
lC:{"^":"j5;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isaw")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asq:function(){return[W.aw]},
$isl:1,
$asl:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asr:function(){return[W.aw]},
"%":"TouchList"},
lD:{"^":"h;0l:length=","%":"TrackDefaultList"},
dl:{"^":"a_;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lQ:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
lS:{"^":"fU;0n:height=,0m:width=","%":"HTMLVideoElement"},
lT:{"^":"L;0l:length=","%":"VideoTrackList"},
lU:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
lV:{"^":"h;0m:width=","%":"VTTRegion"},
aG:{"^":"Q;",
gcX:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
$isaG:1,
"%":"WheelEvent"},
hS:{"^":"L;",
gcM:function(a){var z,y,x
z=P.H
y=new P.O(0,$.D,[z])
x=H.k(new W.hT(new P.iZ(y,[z])),{func:1,ret:-1,args:[P.H]})
this.cw(a)
this.cF(a,W.dL(x,z))
return y},
cF:function(a,b){return a.requestAnimationFrame(H.az(H.k(b,{func:1,ret:-1,args:[P.H]}),1))},
cw:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdm:1,
"%":"DOMWindow|Window"},
hT:{"^":"n:18;a",
$1:function(a){var z=this.a
a=H.aM(H.ct(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.T(P.cb("Future already completed"))
z.ad(a)}},
m0:{"^":"ja;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isai")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ai]},
$isx:1,
$asx:function(){return[W.ai]},
$asq:function(){return[W.ai]},
$isl:1,
$asl:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$asr:function(){return[W.ai]},
"%":"CSSRuleList"},
m1:{"^":"fa;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.ac(b,"$isS",[P.H],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.o(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.du(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
m2:{"^":"jc;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isak")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ak]},
$isx:1,
$asx:function(){return[W.ak]},
$asq:function(){return[W.ak]},
$isl:1,
$asl:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asr:function(){return[W.ak]},
"%":"GamepadList"},
m3:{"^":"je;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isG")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.G]},
$isx:1,
$asx:function(){return[W.G]},
$asq:function(){return[W.G]},
$isl:1,
$asl:function(){return[W.G]},
$isa:1,
$asa:function(){return[W.G]},
$asr:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
m4:{"^":"jg;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isas")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$asq:function(){return[W.as]},
$isl:1,
$asl:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asr:function(){return[W.as]},
"%":"SpeechRecognitionResultList"},
m5:{"^":"ji;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.j(c,"$isat")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$asq:function(){return[W.at]},
$isl:1,
$asl:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asr:function(){return[W.at]},
"%":"StyleSheetList"},
bn:{"^":"hE;a,b,c,$ti"},
bG:{"^":"bn;a,b,c,$ti"},
ia:{"^":"hF;a,b,c,d,e,$ti",p:{
ab:function(a,b,c,d,e){var z=W.dL(new W.ib(c),W.a_)
if(z!=null&&!0)J.eh(a,b,z,!1)
return new W.ia(0,a,b,z,!1,[e])}}},
ib:{"^":"n:19;a",
$1:function(a){return this.a.$1(H.j(a,"$isa_"))}},
r:{"^":"c;$ti",
gC:function(a){return new W.ff(a,this.gl(a),-1,[H.bq(this,a,"r",0)])}},
ff:{"^":"c;a,b,c,0d,$ti",
saW:function(a){this.d=H.y(a,H.p(this,0))},
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saW(J.bc(this.a,z))
this.c=z
return!0}this.saW(null)
this.c=y
return!1},
gE:function(a){return this.d}},
i4:{"^":"c;a",$isL:1,$isdm:1,p:{
i5:function(a){if(a===window)return H.j(a,"$isdm")
else return new W.i4(a)}}},
i3:{"^":"h+f2;"},
i6:{"^":"h+q;"},
i7:{"^":"i6+r;"},
i8:{"^":"h+q;"},
i9:{"^":"i8+r;"},
id:{"^":"h+q;"},
ie:{"^":"id+r;"},
iv:{"^":"h+q;"},
iw:{"^":"iv+r;"},
iC:{"^":"h+Y;"},
iD:{"^":"h+Y;"},
iE:{"^":"h+q;"},
iF:{"^":"iE+r;"},
iG:{"^":"h+q;"},
iH:{"^":"iG+r;"},
iK:{"^":"h+q;"},
iL:{"^":"iK+r;"},
iR:{"^":"h+Y;"},
dA:{"^":"L+q;"},
dB:{"^":"dA+r;"},
iS:{"^":"h+q;"},
iT:{"^":"iS+r;"},
iW:{"^":"h+Y;"},
j_:{"^":"h+q;"},
j0:{"^":"j_+r;"},
dD:{"^":"L+q;"},
dE:{"^":"dD+r;"},
j4:{"^":"h+q;"},
j5:{"^":"j4+r;"},
j9:{"^":"h+q;"},
ja:{"^":"j9+r;"},
jb:{"^":"h+q;"},
jc:{"^":"jb+r;"},
jd:{"^":"h+q;"},
je:{"^":"jd+r;"},
jf:{"^":"h+q;"},
jg:{"^":"jf+r;"},
jh:{"^":"h+q;"},
ji:{"^":"jh+r;"}}],["","",,P,{"^":"",
a1:function(a){var z,y,x,w,v
if(a==null)return
z=P.X(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w){v=H.z(y[w])
z.h(0,v,a[v])}return z},
jv:function(a,b){var z={}
a.D(0,new P.jw(z))
return z},
jx:function(a){var z,y
z=new P.O(0,$.D,[null])
y=new P.dp(z,[null])
a.then(H.az(new P.jy(y),1))["catch"](H.az(new P.jz(y),1))
return z},
cU:function(){var z=$.cT
if(z==null){z=J.bS(window.navigator.userAgent,"Opera",0)
$.cT=z}return z},
f9:function(){var z,y
z=$.cQ
if(z!=null)return z
y=$.cR
if(y==null){y=J.bS(window.navigator.userAgent,"Firefox",0)
$.cR=y}if(y)z="-moz-"
else{y=$.cS
if(y==null){y=!P.cU()&&J.bS(window.navigator.userAgent,"Trident/",0)
$.cS=y}if(y)z="-ms-"
else z=P.cU()?"-o-":"-webkit-"}$.cQ=z
return z},
hU:{"^":"c;",
bu:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.j(z,a)
C.a.j(this.b,null)
return y},
at:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.T(P.eO("DateTime is outside valid range: "+y))
return new P.aT(y,!0)}if(a instanceof RegExp)throw H.b(P.cd("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.jx(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bu(a)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.fM()
z.a=u
C.a.h(x,v,u)
this.d3(a,new P.hW(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bu(t)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
if(u!=null)return u
s=J.aN(t)
r=s.gl(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.cn(u),q=0;q<r;++q)x.h(u,q,this.at(s.i(t,q)))
return u}return a}},
hW:{"^":"n:20;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.at(b)
J.eg(z,a,y)
return y}},
jw:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}},
hV:{"^":"hU;a,b,c",
d3:function(a,b){var z,y,x,w
H.k(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
b.$2(w,a[w])}}},
jy:{"^":"n:9;a",
$1:function(a){return this.a.bj(0,a)}},
jz:{"^":"n:9;a",
$1:function(a){return this.a.cS(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dt:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b0:{"^":"c;S:a>,N:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.ac(b,"$isb0",[P.H],null)&&this.a==J.bx(b)&&this.b==b.gN(b)},
gv:function(a){var z,y,x
z=J.ah(this.a)
y=J.ah(this.b)
y=P.dt(P.dt(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
iM:{"^":"c;"},
S:{"^":"iM;$ti"}}],["","",,P,{"^":"",eN:{"^":"h;",$iseN:1,"%":"SVGAnimatedLength"},kq:{"^":"K;0n:height=,0m:width=","%":"SVGFEBlendElement"},kr:{"^":"K;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},ks:{"^":"K;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},kt:{"^":"K;0n:height=,0m:width=","%":"SVGFECompositeElement"},ku:{"^":"K;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},kv:{"^":"K;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kw:{"^":"K;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kx:{"^":"K;0n:height=,0m:width=","%":"SVGFEFloodElement"},ky:{"^":"K;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},kz:{"^":"K;0n:height=,0m:width=","%":"SVGFEImageElement"},kA:{"^":"K;0n:height=,0m:width=","%":"SVGFEMergeElement"},kB:{"^":"K;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},kC:{"^":"K;0n:height=,0m:width=","%":"SVGFEOffsetElement"},kD:{"^":"K;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},kE:{"^":"K;0n:height=,0m:width=","%":"SVGFETileElement"},kF:{"^":"K;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},kI:{"^":"K;0n:height=,0m:width=","%":"SVGFilterElement"},kJ:{"^":"bg;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fp:{"^":"bg;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bg:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},kR:{"^":"bg;0n:height=,0m:width=","%":"SVGImageElement"},aY:{"^":"h;",$isaY:1,"%":"SVGLength"},kX:{"^":"iy;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.j(c,"$isaY")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asq:function(){return[P.aY]},
$isl:1,
$asl:function(){return[P.aY]},
$isa:1,
$asa:function(){return[P.aY]},
$asr:function(){return[P.aY]},
"%":"SVGLengthList"},kZ:{"^":"K;0n:height=,0m:width=","%":"SVGMaskElement"},b_:{"^":"h;",$isb_:1,"%":"SVGNumber"},la:{"^":"iJ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.j(c,"$isb_")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b_]},
$isl:1,
$asl:function(){return[P.b_]},
$isa:1,
$asa:function(){return[P.b_]},
$asr:function(){return[P.b_]},
"%":"SVGNumberList"},lf:{"^":"K;0n:height=,0m:width=","%":"SVGPatternElement"},lh:{"^":"h;0l:length=","%":"SVGPointList"},lj:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lk:{"^":"fp;0n:height=,0m:width=","%":"SVGRectElement"},lw:{"^":"iY;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.z(c)
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asq:function(){return[P.e]},
$isl:1,
$asl:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"SVGStringList"},K:{"^":"bf;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lx:{"^":"bg;0n:height=,0m:width=","%":"SVGSVGElement"},b3:{"^":"h;",$isb3:1,"%":"SVGTransform"},lE:{"^":"j7;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.j(c,"$isb3")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b3]},
$isl:1,
$asl:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asr:function(){return[P.b3]},
"%":"SVGTransformList"},lR:{"^":"bg;0n:height=,0m:width=","%":"SVGUseElement"},ix:{"^":"h+q;"},iy:{"^":"ix+r;"},iI:{"^":"h+q;"},iJ:{"^":"iI+r;"},iX:{"^":"h+q;"},iY:{"^":"iX+r;"},j6:{"^":"h+q;"},j7:{"^":"j6+r;"}}],["","",,P,{"^":"",a9:{"^":"c;",$isl:1,
$asl:function(){return[P.ae]},
$isa:1,
$asa:function(){return[P.ae]},
$ishM:1}}],["","",,P,{"^":"",k7:{"^":"h;0l:length=","%":"AudioBuffer"},k8:{"^":"i2;",
i:function(a,b){return P.a1(a.get(H.z(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.e])
this.D(a,new P.eQ(z))
return z},
gl:function(a){return a.size},
$asY:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"AudioParamMap"},eQ:{"^":"n:2;a",
$2:function(a,b){return C.a.j(this.a,a)}},k9:{"^":"L;0l:length=","%":"AudioTrackList"},eR:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lc:{"^":"eR;0l:length=","%":"OfflineAudioContext"},i2:{"^":"h+Y;"}}],["","",,P,{"^":"",eT:{"^":"h;",$iseT:1,"%":"WebGLBuffer"},fl:{"^":"h;",$isfl:1,"%":"WebGLFramebuffer"},hk:{"^":"h;",$ishk:1,"%":"WebGLProgram"},ll:{"^":"h;",
b6:function(a,b){return a.activeTexture(b)},
b7:function(a,b,c){return a.attachShader(b,c)},
b8:function(a,b,c){return a.bindBuffer(b,c)},
ba:function(a,b,c){return a.bindFramebuffer(b,c)},
bb:function(a,b,c){return a.bindTexture(b,c)},
bc:function(a,b){return a.blendEquation(b)},
bd:function(a,b,c){return a.blendFunc(b,c)},
be:function(a,b,c,d){return a.bufferData(b,c,d)},
bf:function(a,b){return a.clear(b)},
bg:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bi:function(a,b){return a.compileShader(b)},
bk:function(a){return a.createBuffer()},
bl:function(a){return a.createProgram()},
bm:function(a,b){return a.createShader(b)},
bo:function(a,b){return a.depthMask(b)},
bp:function(a,b){return a.disable(b)},
bq:function(a,b,c,d){return a.drawArrays(b,c,d)},
br:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bs:function(a,b){return a.enable(b)},
bt:function(a,b){return a.enableVertexAttribArray(b)},
a7:function(a){return P.a1(a.getContextAttributes())},
au:function(a,b){return a.getProgramInfoLog(b)},
av:function(a,b,c){return a.getProgramParameter(b,c)},
ax:function(a,b){return a.getShaderInfoLog(b)},
ay:function(a,b,c){return a.getShaderParameter(b,c)},
az:function(a,b,c){return a.getUniformLocation(b,c)},
bv:function(a,b){return a.linkProgram(b)},
aB:function(a,b,c){return a.shaderSource(b,c)},
aC:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bF:function(a,b,c){return a.uniform1f(b,c)},
bG:function(a,b,c){return a.uniform1fv(b,c)},
bH:function(a,b,c){return a.uniform1i(b,c)},
bI:function(a,b,c){return a.uniform1iv(b,c)},
bJ:function(a,b,c){return a.uniform2fv(b,c)},
bK:function(a,b,c){return a.uniform3fv(b,c)},
bL:function(a,b,c){return a.uniform4fv(b,c)},
bM:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bN:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bO:function(a,b){return a.useProgram(b)},
bP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lm:{"^":"h;",
cN:function(a,b){return a.beginTransformFeedback(b)},
cQ:function(a,b){return a.bindVertexArray(b)},
cW:function(a){return a.createVertexArray()},
cY:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cZ:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
d1:function(a){return a.endTransformFeedback()},
dh:function(a,b,c,d){this.cJ(a,b,H.w(c,"$isa",[P.e],"$asa"),d)
return},
cJ:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dj:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b6:function(a,b){return a.activeTexture(b)},
b7:function(a,b,c){return a.attachShader(b,c)},
b8:function(a,b,c){return a.bindBuffer(b,c)},
ba:function(a,b,c){return a.bindFramebuffer(b,c)},
bb:function(a,b,c){return a.bindTexture(b,c)},
bc:function(a,b){return a.blendEquation(b)},
bd:function(a,b,c){return a.blendFunc(b,c)},
be:function(a,b,c,d){return a.bufferData(b,c,d)},
bf:function(a,b){return a.clear(b)},
bg:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bi:function(a,b){return a.compileShader(b)},
bk:function(a){return a.createBuffer()},
bl:function(a){return a.createProgram()},
bm:function(a,b){return a.createShader(b)},
bo:function(a,b){return a.depthMask(b)},
bp:function(a,b){return a.disable(b)},
bq:function(a,b,c,d){return a.drawArrays(b,c,d)},
br:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bs:function(a,b){return a.enable(b)},
bt:function(a,b){return a.enableVertexAttribArray(b)},
a7:function(a){return P.a1(a.getContextAttributes())},
au:function(a,b){return a.getProgramInfoLog(b)},
av:function(a,b,c){return a.getProgramParameter(b,c)},
ax:function(a,b){return a.getShaderInfoLog(b)},
ay:function(a,b,c){return a.getShaderParameter(b,c)},
az:function(a,b,c){return a.getUniformLocation(b,c)},
bv:function(a,b){return a.linkProgram(b)},
aB:function(a,b,c){return a.shaderSource(b,c)},
aC:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bF:function(a,b,c){return a.uniform1f(b,c)},
bG:function(a,b,c){return a.uniform1fv(b,c)},
bH:function(a,b,c){return a.uniform1i(b,c)},
bI:function(a,b,c){return a.uniform1iv(b,c)},
bJ:function(a,b,c){return a.uniform2fv(b,c)},
bK:function(a,b,c){return a.uniform3fv(b,c)},
bL:function(a,b,c){return a.uniform4fv(b,c)},
bM:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bN:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bO:function(a,b){return a.useProgram(b)},
bP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hx:{"^":"h;",$ishx:1,"%":"WebGLShader"},hJ:{"^":"h;",$ishJ:1,"%":"WebGLTexture"},hN:{"^":"h;",$ishN:1,"%":"WebGLUniformLocation"},hR:{"^":"h;",$ishR:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lt:{"^":"iV;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.J(b,a,null,null,null))
return P.a1(this.cC(a,b))},
h:function(a,b,c){H.t(b)
H.j(c,"$isM")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
cC:function(a,b){return a.item(b)},
$asq:function(){return[[P.M,,,]]},
$isl:1,
$asl:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$asr:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},iU:{"^":"h+q;"},iV:{"^":"iU+r;"}}],["","",,G,{"^":"",
hX:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
C.a.h(z,y,w+H.d(z[y]))}return C.a.Y(z,"\n")},
dq:function(a,b,c){var z,y,x,w
z=J.o(a)
y=z.bm(a,b)
z.aB(a,y,c)
z.bi(a,y)
x=H.cj(z.ay(a,y,35713))
if(x!=null&&!x){w=z.ax(a,y)
P.ag("E:Compilation failed:")
P.ag("E:"+G.hX(c))
P.ag("E:Failure:")
P.ag(C.h.F("E:",w))
throw H.b(w)}return y},
d5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q
d.A(b)
d.a9(0,a)
e.A(c)
e.a9(0,a)
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
r=Math.sqrt(e.gap())
if(r===0)return!1
q=-1/r
z[2]=z[2]*q
z[1]=z[1]*q
z[0]=z[0]*q
return!0},
cY:function(a,b){var z,y,x
H.w(a,"$isa",[T.i],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bx(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.bV(a[y]))
z+=2
if(y>=a.length)return H.f(a,y)
x=J.cD(a[y])
if(z>=b.length)return H.f(b,z)
b[z]=x}return b},
fh:function(a,b){var z,y
H.w(a,"$isa",[T.v],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bx(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.bV(a[y]))}return b},
fi:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.aF],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bx(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.bV(a[y]))
x=z+2
if(y>=a.length)return H.f(a,y)
w=J.cD(a[y])
v=b.length
if(x>=v)return H.f(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.f(a,y)
w=J.ey(a[y])
if(z>=v)return H.f(b,z)
b[z]=w}return b},
fg:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.h(b,z,J.bc(a[y],0))
if(y>=a.length)return H.f(a,y)
C.m.h(b,z+1,J.bc(a[y],1))
if(y>=a.length)return H.f(a,y)
C.m.h(b,z+2,J.bc(a[y],2))
if(y>=a.length)return H.f(a,y)
C.m.h(b,z+3,J.bc(a[y],3))}return b},
it:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.al(z,[H.p(z,0)]),y=y.gC(y),x=b.x,w=[[P.a,P.E]],v=[P.ae],u=[T.aF],t=[T.i],s=[T.v];y.w();){r=y.d
if(!x.a4(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.dR>0)H.aP("I: "+r)
continue}q=z.i(0,r)
switch($.a4().i(0,r).a){case"vec2":b.U(r,G.fh(H.bt(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.U(r,G.cY(H.bt(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.U(r,G.fi(H.bt(q,"$isa",u,"$asa"),null),4)
break
case"float":b.U(r,new Float32Array(H.bJ(H.bt(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.U(r,G.fg(H.bt(q,"$isa",w,"$asa"),null),4)
break}}},
aZ:{"^":"c;"},
b4:{"^":"aZ;d,a,b,c",
aI:function(){return this.d},
k:function(a){var z,y,x,w
z=H.m(["{"+new H.dk(H.jE(this)).k(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.al(y,[H.p(y,0)]),x=x.gC(x);x.w();){w=x.d
C.a.j(z,H.d(w)+": "+H.d(y.i(0,w)))}return C.a.Y(z,"\n")}},
eU:{"^":"dc;"},
eW:{"^":"c;0a,b",
d_:function(a,b,c){J.cB(this.a,b)
if(c>0)J.eL(this.a,b,c)},
dk:function(a,b,c,d,e,f,g,h){J.bu(this.a,34962,b)
J.cK(this.a,c,d,e,!1,g,h)}},
fk:{"^":"c;a,b,c,d,e"},
aV:{"^":"c;a,b,c"},
aW:{"^":"c;a,b,c,d"},
c3:{"^":"c;a,b,c,d,e",
a_:function(a){switch($.a4().i(0,a).a){case"vec2":this.e.h(0,a,H.m([],[T.v]))
break
case"vec3":this.e.h(0,a,H.m([],[T.i]))
break
case"vec4":this.e.h(0,a,H.m([],[T.aF]))
break
case"float":this.e.h(0,a,H.m([],[P.ae]))
break
case"uvec4":this.e.h(0,a,H.m([],[[P.a,P.E]]))
break}},
c3:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.j(y,new G.aW(z,z+1,z+2,z+3))},
aF:function(a){var z,y,x,w,v
H.w(a,"$isa",[T.i],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.I)(a),++x){w=a[x]
v=new T.i(new Float32Array(3))
v.A(w)
C.a.j(y,v)}},
c5:function(a){var z,y,x,w,v,u
H.w(a,"$isa",[T.i],"$asa")
z=this.d
y=z.length
C.a.j(this.b,new G.aV(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.I)(a),++w){v=a[w]
u=new T.i(new Float32Array(3))
u.A(v)
C.a.j(z,u)}},
aa:function(a,b){var z,y,x,w,v,u,t
z=[T.v]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.I)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.j(y,new T.v(u))}},
c2:function(a,b){var z,y,x,w,v,u
z=[T.i]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.I)(b),++w){v=b[w]
u=new T.i(new Float32Array(3))
u.A(v)
x.j(y,u)}},
c6:function(a){var z,y,x,w,v,u
H.w(a,"$isa",[T.i],"$asa")
z=this.d
y=z.length
C.a.j(this.c,new G.aW(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.I)(a),++w){v=a[w]
u=new T.i(new Float32Array(3))
u.A(v)
C.a.j(z,u)}},
cb:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.m(x,[P.E])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.I)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.I)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
cc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.d
y=new Array(z.length)
y.fixed$length=Array
x=H.m(y,[T.i])
w=new T.i(new Float32Array(3))
v=new T.i(new Float32Array(3))
for(y=this.b,u=y.length,t=0;t<y.length;y.length===u||(0,H.I)(y),++t){s=y[t]
r=s.a
q=z.length
if(r>=q)return H.f(z,r)
p=z[r]
o=s.b
if(o>=q)return H.f(z,o)
n=z[o]
m=s.c
if(m>=q)return H.f(z,m)
G.d5(p,n,z[m],w,v)
q=new T.i(new Float32Array(3))
q.A(v)
C.a.h(x,r,q)
r=new T.i(new Float32Array(3))
r.A(v)
C.a.h(x,o,r)
r=new T.i(new Float32Array(3))
r.A(v)
C.a.h(x,m,r)}for(y=this.c,u=y.length,t=0;t<y.length;y.length===u||(0,H.I)(y),++t){l=y[t]
r=l.a
q=z.length
if(r>=q)return H.f(z,r)
p=z[r]
o=l.b
if(o>=q)return H.f(z,o)
n=z[o]
m=l.c
if(m>=q)return H.f(z,m)
G.d5(p,n,z[m],w,v)
q=new T.i(new Float32Array(3))
q.A(v)
C.a.h(x,r,q)
r=new T.i(new Float32Array(3))
r.A(v)
C.a.h(x,o,r)
r=new T.i(new Float32Array(3))
r.A(v)
C.a.h(x,m,r)
r=new T.i(new Float32Array(3))
r.A(v)
C.a.h(x,l.d,r)}this.e.h(0,"aNormal",x)},
k:function(a){var z,y,x,w,v
z=H.m(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.al(y,[H.p(y,0)]),x=x.gC(x);x.w();){w=x.d
v=$.a4().i(0,w).a
C.a.j(z,H.d(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.Y(z," ")}},
di:{"^":"c;a,b,c"},
dh:{"^":"c;a,b,c"},
fT:{"^":"b4;d,a,b,c"},
fV:{"^":"aZ;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sag:function(a){this.cx=H.w(a,"$isa",[P.E],"$asa")},
aG:function(a,b,c){var z,y
C.h.V(a,0)
H.j(b,"$isa9")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.bu(z.a,34962,y)
J.cA(z.a,34962,b,35048)},
cd:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
U:function(a,b,c){var z,y,x,w,v
z=J.cw(a,0)===105
if(z&&this.z===0)this.z=C.f.c0(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.bT(x.a))
this.aG(a,b,c)
w=$.a4().i(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.i(0,a)
J.bv(x.a,this.e)
x.d_(0,v,z?1:0)
x.dk(0,y.i(0,a),v,w.aH(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.al(z,[H.p(z,0)]),x=x.gC(x);x.w();){w=x.d
C.a.j(y,H.d(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.Y(y,"  ")}},
h8:{"^":"b4;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
c7:function(a,b){var z
if(typeof a!=="number")return a.dl()
if(typeof b!=="number")return H.aC(b)
z=a/b
if(this.z===z)return
this.z=z
this.aK()},
aK:function(){var z,y,x,w,v,u
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
aI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.i(new Float32Array(3))
u.q(x,w,v)
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
y=J.C(t)
x=!!y.$isaF
q=x?t.gbR(t):1
if(!!y.$isi){p=t.gS(t)
s=t.gN(t)
r=t.ga6(t)
t=p}else if(x){p=t.gS(t)
s=t.gN(t)
r=t.ga6(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.aC(t)
x=z[4]
if(typeof s!=="number")return H.aC(s)
w=z[8]
if(typeof r!=="number")return H.aC(r)
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
c.bw(0,u)
v.h(0,"uPerspectiveViewMatrix",c)
return v}},
ko:{"^":"c;"},
hq:{"^":"aZ;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cj:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){t=z[u]
x.h(0,t,J.cE(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){t=z[u]
x.h(0,t,J.cE(w.a,v,t))}},
cl:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.e])
x=H.m([],[P.e])
for(y=new H.al(y,[H.p(y,0)]),y=y.gC(y);y.w();){w=y.d
if(!z.a4(0,w))C.a.j(x,w)}for(z=this.x,z=P.dv(z,z.r,H.p(z,0)),y=this.Q;z.w();){w=z.d
if(!y.H(0,w))C.a.j(x,w)}return x},
cm:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isM",[P.e,P.c],"$asM")
z=Date.now()
for(y=new H.al(b,[H.p(b,0)]),y=y.gC(y),x=this.d,w=this.y,v=this.z,u=0;y.w();){t=y.d
switch(J.cw(t,0)){case 117:if(w.a4(0,t)){s=b.i(0,t)
if(v.a4(0,t))H.aP("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.h(0,t,a)
r=$.a4().i(0,t)
if(r==null)H.T("unknown "+t)
q=w.i(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.t(s)
J.bW(x.a,q,s)}else if(!!J.C(s).$isfv)J.eJ(x.a,q,s)
break
case"float":if(r.c===0){H.dP(s)
J.eH(x.a,q,s)}else if(!!J.C(s).$isa9)J.eI(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.af(s,"$isaa").a
J.cJ(x.a,q,!1,t)}else if(!!J.C(s).$isa9)J.cJ(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.af(s,"$isbC").a
J.cI(x.a,q,!1,t)}else if(!!J.C(s).$isa9)J.cI(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cH(p,q,H.af(s,"$isaF").a)
else J.cH(p,q,H.j(s,"$isa9"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cG(p,q,H.af(s,"$isi").a)
else J.cG(p,q,H.j(s,"$isa9"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cF(p,q,H.af(s,"$isv").a)
else J.cF(p,q,H.j(s,"$isa9"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.aC(t)
J.cx(x.a,33984+t)
t=H.af(s,"$ishI").ce()
J.cz(x.a,3553,t)
t=this.ch
J.bW(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.F()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.aC(t)
J.cx(x.a,33984+t)
t=H.af(s,"$ishI").ce()
J.cz(x.a,34067,t)
t=this.ch
J.bW(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.F()
this.ch=t+1
break
default:H.aP("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.i(0,t)
switch(t){case"cDepthTest":t=J.U(s,!0)
p=x.a
if(t)J.bw(p,2929)
else J.bU(p,2929)
break
case"cStencilFunc":H.af(s,"$isdi")
t=s.a
p=x.a
if(t===1281)J.bU(p,2960)
else{J.bw(p,2960)
p=s.b
o=s.c
J.eE(x.a,t,p,o)}break
case"cDepthWrite":H.cj(s)
J.er(x.a,s)
break
case"cBlendEquation":H.af(s,"$isdh")
t=s.a
p=x.a
if(t===1281)J.bU(p,3042)
else{J.bw(p,3042)
p=s.b
o=s.c
J.el(x.a,p,o)
J.ek(x.a,t)}break}++u
break}}n=P.cV(0,0,0,Date.now()-new P.aT(z,!1).a,0,0)
""+u
n.k(0)},
ca:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.b4],"$asa")
Date.now()
z=this.d
J.eK(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aZ()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.I)(b),++x){w=b[x]
this.cm(w.a,w.aI())}y=this.Q
y.X(0)
for(v=a.cy,v=new H.al(v,[H.p(v,0)]),v=v.gC(v);v.w();)y.j(0,v.d)
u=this.cl()
if(u.length!==0)P.ag("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
J.bv(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cd()
s=a.Q
r=a.z
if(t)J.ei(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.ev(q,y,v,s,0,r)
else J.eu(q,y,v,s,0)}else{s=z.a
if(r>1)J.et(s,y,0,v,r)
else J.es(s,y,0,v)}if(t)J.ew(z.a)},
p:{
hr:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.am(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.ep(b.a)
t=G.dq(b.a,35633,x)
J.cy(b.a,u,t)
s=G.dq(b.a,35632,w)
J.cy(b.a,u,s)
if(v.length>0)J.eF(b.a,u,v,35980)
J.eC(b.a,u)
if(!H.cj(J.eB(b.a,u,35714)))H.T(J.eA(b.a,u))
z=new G.hq(b,c,d,u,P.fN(c.c,z),P.X(z,P.c),P.X(z,z),y,a,!1,!0)
z.cj(a,b,c,d)
return z}}},
F:{"^":"c;a,b,c",
aH:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hy:{"^":"c;a,0b,c,d,e,f,r,x",
c1:function(a){var z,y,x,w
H.w(a,"$isa",[P.e],"$asa")
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
C.a.j(z,w)
y.h(0,w,this.r);++this.r}C.a.a8(z)},
c4:function(a){var z,y
H.w(a,"$isa",[P.e],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.j(z,a[y])
C.a.a8(z)},
aE:function(a){var z,y
H.w(a,"$isa",[P.e],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.j(z,a[y])
C.a.a8(z)},
ck:function(a,b){this.b=this.cn(!0,H.w(a,"$isa",[P.e],"$asa"),b)},
aJ:function(a){return this.ck(a,null)},
cn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.I)(y),++u){t=y[u]
s=$.a4().i(0,t)
C.a.j(w,"layout (location="+H.d(v.i(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.j(w,"")
r=x?"in":"out"
if(x)C.a.j(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){q=z[u]
s=$.a4().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){q=z[u]
s=$.a4().i(0,q)
C.a.j(w,r+" "+s.a+" "+H.d(q)+";")}C.a.j(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){q=z[u]
s=$.a4().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.j(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.j(w,"")
C.a.j(w,"void main(void) {")
C.a.cK(w,b)
C.a.j(w,"}")
return C.a.Y(w,"\n")},
p:{
db:function(a){var z,y
z=P.e
y=[z]
return new G.hy(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.X(z,P.E))}}},
dc:{"^":"aZ;",
bV:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,Y,{"^":"",
ft:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=[T.i]
y=P.e
x=new G.c3(!1,H.m([],[G.aV]),H.m([],[G.aW]),H.m([],z),P.X(y,[P.a,,]))
x.a_("aTexUV")
x.a_("aNormal")
w=P.X(y,P.E)
v=a2.split("\n")
u=H.m([],z)
t=H.m([],z)
y=[T.v]
s=H.m([],y)
r=Date.now()
q=P.d9("\\s+",!0,!1)
p=P.d9("\\s\\s*\\$",!0,!1)
for(o=v.length,n=0;n<v.length;v.length===o||(0,H.I)(v),++n){m=v[n]
m.toString
l=H.jZ(m,q," ")
k=H.k0(l,p,"",0)
l=k.length
if(l!==0){if(0>=l)return H.f(k,0)
l=k[0]==="#"}else l=!0
if(l)continue
j=k.split(" ")
l=j.length
if(0>=l)return H.f(j,0)
i=j[0]
if(J.U(i,"g")){if(1>=l)return H.f(j,1)
w.h(0,j[1],u.length)}else if(J.U(i,"v")){if(1>=l)return H.f(j,1)
i=P.aA(j[1],null)
if(2>=l)return H.f(j,2)
h=P.aA(j[2],null)
if(3>=l)return H.f(j,3)
l=P.aA(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.j(u,new T.i(g))}else if(J.U(i,"vt")){if(1>=l)return H.f(j,1)
i=P.aA(j[1],null)
if(2>=l)return H.f(j,2)
l=P.aA(j[2],null)
h=new Float32Array(2)
C.b.h(h,0,i)
C.b.h(h,1,l)
C.a.j(s,new T.v(h))}else if(J.U(i,"vn")){if(1>=l)return H.f(j,1)
i=P.aA(j[1],null)
if(2>=l)return H.f(j,2)
h=P.aA(j[2],null)
if(3>=l)return H.f(j,3)
l=P.aA(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.j(t,new T.i(g))}else if(J.U(i,"f")){if(l!==4&&l!==5){H.aP("*** Error: face '"+k+"' not handled")
continue}f=H.m([],z)
e=H.m([],z)
d=H.m([],y)
for(c=1;l=j.length,c<l;++c){b=J.eD(j[c],"/")
for(;b.length<3;)C.a.j(b,"")
l=P.cq(b[0],null,null)
if(typeof l!=="number")return l.T()
a=l-1
if(1>=b.length)return H.f(b,1)
if(J.U(b[1],""))a0=-1
else{if(1>=b.length)return H.f(b,1)
l=P.cq(b[1],null,null)
if(typeof l!=="number")return l.T()
a0=l-1}if(2>=b.length)return H.f(b,2)
if(J.U(b[2],""))a1=-1
else{if(2>=b.length)return H.f(b,2)
l=P.cq(b[2],null,null)
if(typeof l!=="number")return l.T()
a1=l-1}l=u.length
if(a<l){if(a<0)return H.f(u,a)
C.a.j(f,u[a])}else C.a.j(f,new T.i(new Float32Array(3)))
if(a0!==-1&&a0<s.length){if(a0<0||a0>=s.length)return H.f(s,a0)
C.a.j(d,s[a0])}else{H.aP("problem uv "+c+" "+a0)
C.a.j(d,new T.v(new Float32Array(2)))}if(a1!==-1&&a1<t.length){if(a1<0||a1>=t.length)return H.f(t,a1)
C.a.j(e,t[a1])}else{H.aP("problem normals "+c+" "+a1)
C.a.j(e,new T.i(new Float32Array(3)))}}if(l===4)x.c5(f)
else x.c6(f)
x.c2("aNormal",e)
x.aa("aTexUV",d)}}P.ag("loaded ("+P.cV(0,0,0,Date.now()-new P.aT(r,!1).a,0,0).k(0)+") "+x.k(0))
return x}}],["","",,R,{"^":"",hp:{"^":"ho;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
dd:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ag("size change "+H.d(y)+" "+H.d(x))
this.dx.c7(y,x)
this.z=y
this.Q=x},"$1","gdc",4,0,21]}}],["","",,A,{"^":"",
dQ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(e,"$isa",[G.b4],"$asa")
z=b.dx
z.A(c)
y=b.d
z.bw(0,y)
x=b.cx
H.d(b)
w=C.a.gd7(e)
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
v.cV(new T.bC(u))
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
a.ca(x,e,d)
if(0>=e.length)return H.f(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.f(y,r)
A.dQ(a,y[r],z,d,e)}},
ca:{"^":"dc;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
k:function(a){return"NODE["+this.a+"]"}},
da:{"^":"aZ;d,e,f,a,b,c"},
ho:{"^":"aZ;",
ci:function(a,b,c){if(this.d==null)this.d=new G.fk(this.e,null,null,null,null)},
c9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.ej(v.a,36160,z)
J.eM(v.a,this.x,this.y,x,w)
if(y!==0)J.em(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.c,u=0;u<z.length;z.length===y||(0,H.I)(z),++u){t=z[u]
s=t.e
C.a.j(s,new G.b4(P.X(x,w),"transforms",!1,!0))
r=new T.aa(new Float32Array(16))
r.P()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.I)(v),++o)A.dQ(p,v[o],r,a,s)
if(0>=s.length)return H.f(s,-1)
s.pop()}},
c8:function(){return this.c9(null)}}}],["","",,B,{"^":"",
f4:function(a3,a4,a5,a6,a7,a8,a9,b0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=-a8
y=-a9
x=new T.i(new Float32Array(3))
x.q(z,y,b0)
w=new T.i(new Float32Array(3))
w.q(a8,y,b0)
v=new T.i(new Float32Array(3))
v.q(a8,a9,b0)
u=new T.i(new Float32Array(3))
u.q(z,a9,b0)
t=-b0
s=new T.i(new Float32Array(3))
s.q(z,y,t)
r=new T.i(new Float32Array(3))
r.q(z,a9,t)
q=new T.i(new Float32Array(3))
q.q(a8,a9,t)
p=new T.i(new Float32Array(3))
p.q(a8,y,t)
o=new T.i(new Float32Array(3))
o.q(z,a9,t)
n=new T.i(new Float32Array(3))
n.q(z,a9,b0)
m=new T.i(new Float32Array(3))
m.q(a8,a9,b0)
l=new T.i(new Float32Array(3))
l.q(a8,a9,t)
k=new T.i(new Float32Array(3))
k.q(a8,y,b0)
j=new T.i(new Float32Array(3))
j.q(z,y,b0)
i=new T.i(new Float32Array(3))
i.q(z,y,t)
h=new T.i(new Float32Array(3))
h.q(a8,y,t)
g=new T.i(new Float32Array(3))
g.q(a8,y,t)
f=new T.i(new Float32Array(3))
f.q(a8,a9,t)
e=new T.i(new Float32Array(3))
e.q(a8,a9,b0)
d=new T.i(new Float32Array(3))
d.q(a8,y,b0)
c=new T.i(new Float32Array(3))
c.q(z,y,t)
b=new T.i(new Float32Array(3))
b.q(z,y,b0)
y=new T.i(new Float32Array(3))
y.q(z,a9,b0)
a=new T.i(new Float32Array(3))
a.q(z,a9,t)
t=[T.i]
a0=H.m([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.v(new Float32Array(2))
z.t(a5,a7)
y=new T.v(new Float32Array(2))
y.t(a4,a7)
x=new T.v(new Float32Array(2))
x.t(a4,a6)
w=new T.v(new Float32Array(2))
w.t(a5,a6)
v=new T.v(new Float32Array(2))
v.t(a4,a7)
u=new T.v(new Float32Array(2))
u.t(a4,a6)
s=new T.v(new Float32Array(2))
s.t(a5,a6)
r=new T.v(new Float32Array(2))
r.t(a5,a7)
q=new T.v(new Float32Array(2))
q.t(a5,a6)
p=new T.v(new Float32Array(2))
p.t(a5,a7)
o=new T.v(new Float32Array(2))
o.t(a4,a7)
n=new T.v(new Float32Array(2))
n.t(a4,a6)
m=new T.v(new Float32Array(2))
m.t(a4,a6)
l=new T.v(new Float32Array(2))
l.t(a5,a6)
k=new T.v(new Float32Array(2))
k.t(a5,a7)
j=new T.v(new Float32Array(2))
j.t(a4,a7)
i=new T.v(new Float32Array(2))
i.t(a4,a7)
h=new T.v(new Float32Array(2))
h.t(a4,a6)
g=new T.v(new Float32Array(2))
g.t(a5,a6)
f=new T.v(new Float32Array(2))
f.t(a5,a7)
e=new T.v(new Float32Array(2))
e.t(a5,a7)
d=new T.v(new Float32Array(2))
d.t(a4,a7)
c=new T.v(new Float32Array(2))
c.t(a4,a6)
b=new T.v(new Float32Array(2))
b.t(a5,a6)
a1=H.m([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.v])
a2=new G.c3(!1,H.m([],[G.aV]),H.m([],[G.aW]),H.m([],t),P.X(P.e,[P.a,,]))
a2.a_("aTexUV")
a2.c3(6)
a2.aF(a0)
a2.aa("aTexUV",a1)
return a2},
f6:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=c/2
y=[T.i]
x=H.m([],y)
w=H.m([],[T.v])
v=new T.i(new Float32Array(3))
v.q(0,z,0)
C.a.j(x,v)
v=new T.v(new Float32Array(2))
v.t(0,0)
C.a.j(w,v)
v=-z
u=new T.i(new Float32Array(3))
u.q(0,v,0)
C.a.j(x,u)
u=new T.v(new Float32Array(2))
u.t(1,1)
C.a.j(w,u)
for(t=0;t<d;++t){s=t/d
u=s*3.141592653589793*2
r=Math.sin(u)
q=Math.cos(u)
u=new Float32Array(3)
u[0]=r*a
u[1]=z
u[2]=q*a
C.a.j(x,new T.i(u))
u=new Float32Array(2)
u[0]=s
u[1]=1
C.a.j(w,new T.v(u))
u=new Float32Array(3)
u[0]=r*b
u[1]=v
u[2]=q*b
C.a.j(x,new T.i(u))
u=new Float32Array(2)
u[0]=s
u[1]=0
C.a.j(w,new T.v(u))}v=H.m([],[G.aV])
u=H.m([],[G.aW])
p=new G.c3(!1,v,u,H.m([],y),P.X(P.e,[P.a,,]))
p.a_("aTexUV")
p.aF(x)
p.aa("aTexUV",w)
for(t=0;t<d;t=m){o=t*2+2
n=o+1
m=t+1
l=(m===d?0:m)*2+2
k=l+1
C.a.j(v,new G.aV(0,o,l))
C.a.j(v,new G.aV(1,k,n))
C.a.j(u,new G.aW(l,o,n,k))}return p}}],["","",,D,{"^":"",
fP:function(a){var z,y,x,w
z=P.e
y=new P.O(0,$.D,[z])
x=new XMLHttpRequest()
C.q.d9(x,"GET",a)
w=W.bl
W.ab(x,"loadend",H.k(new D.fQ(new P.dp(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.q.bU(x,"")
return y},
fQ:{"^":"n:22;a,b",
$1:function(a){H.j(a,"$isbl")
this.a.bj(0,H.aM(W.jj(this.b.response),{futureOr:1,type:P.e}))}},
fG:{"^":"c;a,b,c",
cf:function(a){var z,y
a=document
z=W.aX
y={func:1,ret:-1,args:[z]}
W.ab(a,"keydown",H.k(new D.fI(this),y),!1,z)
W.ab(a,"keyup",H.k(new D.fJ(this),y),!1,z)},
p:{
fH:function(a){var z=P.E
z=new D.fG(P.am(null,null,null,z),P.am(null,null,null,z),P.am(null,null,null,z))
z.cf(a)
return z}}},
fI:{"^":"n:10;a",
$1:function(a){var z
H.j(a,"$isaX")
z=this.a
z.a.j(0,a.which)
z.b.j(0,a.which)}},
fJ:{"^":"n:10;a",
$1:function(a){var z
H.j(a,"$isaX")
z=this.a
z.a.bC(0,a.which)
z.c.j(0,a.which)}},
fY:{"^":"c;a,b,c,d,e,f,r,x",
cg:function(a){var z,y,x
if(a==null)a=document
z=J.o(a)
y=z.gbz(a)
x=H.p(y,0)
W.ab(y.a,y.b,H.k(new D.h_(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gby(a)
y=H.p(x,0)
W.ab(x.a,x.b,H.k(new D.h0(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbA(a)
x=H.p(y,0)
W.ab(y.a,y.b,H.k(new D.h1(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbB(a)
x=H.p(z,0)
W.ab(z.a,z.b,H.k(new D.h2(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
fZ:function(a){var z=P.E
z=new D.fY(P.am(null,null,null,z),P.am(null,null,null,z),P.am(null,null,null,z),0,0,0,0,0)
z.cg(a)
return z}}},
h_:{"^":"n:3;a",
$1:function(a){var z,y
H.j(a,"$isQ")
a.preventDefault()
z=this.a
y=J.o(a)
z.r=H.t(y.gbx(a).a)
z.x=H.t(y.gbx(a).b)
z.d=a.movementX
z.e=a.movementY}},
h0:{"^":"n:3;a",
$1:function(a){var z
H.j(a,"$isQ")
a.preventDefault()
P.ag("BUTTON "+H.d(a.button))
z=this.a
z.a.j(0,a.button)
z.b.j(0,a.button)}},
h1:{"^":"n:3;a",
$1:function(a){var z
H.j(a,"$isQ")
a.preventDefault()
z=this.a
z.a.bC(0,a.button)
z.c.j(0,a.button)}},
h2:{"^":"n:23;a",
$1:function(a){H.j(a,"$isaG")
a.preventDefault()
this.a.f=H.t(C.a_.gcX(a))}},
h7:{"^":"eU;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
br:function(a){var z,y
z=C.b.d2(H.w(a,"$isl",[P.c],"$asl"),0,new A.jG(),P.E)
if(typeof z!=="number")return H.aC(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jG:{"^":"n:24;",
$2:function(a,b){var z,y
H.t(a)
z=J.ah(b)
if(typeof a!=="number")return a.F()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",bC:{"^":"c;a",
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
k:function(a){return"[0] "+this.K(0).k(0)+"\n[1] "+this.K(1).k(0)+"\n[2] "+this.K(2).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.f(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.bC){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gv:function(a){return A.br(this.a)},
K:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.f(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.f(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.f(y,x)
z[2]=y[x]
return new T.i(z)},
cV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
return m}},aa:{"^":"c;a",
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
k:function(a){return"[0] "+this.K(0).k(0)+"\n[1] "+this.K(1).k(0)+"\n[2] "+this.K(2).k(0)+"\n[3] "+this.K(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.f(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aa){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.br(this.a)},
K:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.f(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.f(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.f(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.f(y,x)
z[3]=y[x]
return new T.aF(z)},
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
bw:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},v:{"^":"c;a",
t:function(a,b){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.v){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.br(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.f(z,b)
return z[b]},
gl:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gS:function(a){return this.a[0]},
gN:function(a){return this.a[1]}},i:{"^":"c;a",
q:function(a,b,c){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)
C.b.h(z,2,c)},
A:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.i){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.br(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.f(z,b)
return z[b]},
gl:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gap:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aq:function(a){var z,y,x
z=Math.sqrt(this.gap())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
am:function(a){var z,y
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
z=new T.i(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a9:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
gS:function(a){return this.a[0]},
gN:function(a){return this.a[1]},
ga6:function(a){return this.a[2]}},aF:{"^":"c;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aF){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.br(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.f(z,b)
return z[b]},
gl:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gS:function(a){return this.a[0]},
gN:function(a){return this.a[1]},
ga6:function(a){return this.a[2]},
gbR:function(a){return this.a[3]}}}],["","",,N,{"^":"",
dV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=H.j(C.A.da(document,"#webgl-canvas"),"$isbZ")
x=new G.eW(y)
w=P.e
v=P.c
u=(y&&C.z).bT(y,"webgl2",P.d2(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],w,v))
x.a=u
if(u==null)H.T(P.cX('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.d(J.ez(u))
if($.dR>0)P.ag("I: "+t)
J.en(u,0,0,0,1)
J.bw(u,2929)
u=new Float32Array(3)
t=D.fH(null)
s=D.fZ(y)
r=new T.aa(new Float32Array(16))
r.P()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.h7(25,-45,0.3,0,new T.i(u),-0.02,t,s,r,new T.i(q),new T.i(p),new T.i(o),new T.i(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.aa(new Float32Array(16))
u.P()
t=new T.aa(new Float32Array(16))
t.P()
m=new G.h8(n,50,1,0.1,2520,u,t,new T.aa(new Float32Array(16)),P.X(w,v),"perspective",!1,!0)
m.aK()
u=H.m([],[A.da])
l=new R.hp(y,m,null,x,u,17664,0,0,0,0,"main",!1,!0)
l.ci("main",x,null)
l.dd(null)
t=W.a_
W.ab(window,"resize",H.k(l.gdc(),{func:1,ret:-1,args:[t]}),!1,t)
t=G.hr("test",x,$.ef(),$.ee())
s=H.m([m],[G.b4])
r=H.m([],[A.ca])
k=new A.da(t,s,r,"objects",!1,!0)
C.a.j(u,k)
w=P.X(w,v)
w.h(0,"cDepthTest",!0)
w.h(0,"cDepthWrite",!0)
w.h(0,"cBlendEquation",$.e_())
w.h(0,"cStencilFunc",$.e2())
j=D.fP("../ct_logo.obj")
j.a5(new N.jS(k,new G.fT(w,"mat",!1,!0)),null)
w=$.ed()
C.a.j(w,j)
z.a=0
P.fm(w,null,!1,v).a5(new N.jT(new N.jR(z,n,l)),null)},
jS:{"^":"n:25;a,b",
$1:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=[Y.ft(H.z(a8)),B.f6(1,1,2,16,!1),B.f4(!1,1,0,1,0,1,1,1)]
for(y=this.a,x=y.f,w=this.b,v=[A.ca],u=[P.E],t=P.e,s=P.c,r=P.a9,y=y.d,q=y.d,y=y.e,p=0;p<3;++p){o=z[p]
o.cc()
n=y.x
m=P.X(t,s)
l=J.eq(q.a)
k=new G.fV(q,l,4,m,n,0,-1,P.X(t,r),"meshdata:",!1,!0)
j=G.cY(o.d,null)
m.h(0,"aPosition",J.bT(q.a))
k.ch=j
k.aG("aPosition",j,3)
i=$.a4().i(0,"aPosition")
if(i==null)H.T("Unknown canonical aPosition")
h=n.i(0,"aPosition")
J.bv(q.a,l)
J.cB(q.a,h)
n=m.i(0,"aPosition")
m=i.aH()
J.bu(q.a,34962,n)
J.cK(q.a,h,m,5126,!1,0,0)
n=H.w(o.cb(),"$isa",u,"$asa")
k.y=J.bT(q.a)
m=k.ch.length
if(m<768){k.sag(new Uint8Array(H.bJ(n)))
k.Q=5121}else if(m<196608){k.sag(new Uint16Array(H.bJ(n)))
k.Q=5123}else{k.sag(new Uint32Array(H.bJ(n)))
k.Q=5125}J.bv(q.a,l)
n=k.y
m=k.cx
J.bu(q.a,34963,n)
J.cA(q.a,34963,m,35048)
G.it(o,k)
o=H.m([],v)
n=new Float32Array(9)
m=new T.aa(new Float32Array(16))
m.P()
l=new Float32Array(16)
j=new T.aa(l)
j.P()
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
l[12]=-5+p*7
l[13]=4
l[14]=0
if(p===0){c=Math.cos(1.57)
b=Math.sin(1.57)
a=l[4]
a0=l[8]
a1=l[5]
a2=l[9]
a3=l[6]
a4=l[10]
a5=l[7]
a6=l[11]
a7=-b
l[4]=a*c+a0*b
l[5]=a1*c+a2*b
l[6]=a3*c+a4*b
l[7]=a5*c+a6*b
l[8]=a*a7+a0*c
l[9]=a1*a7+a2*c
l[10]=a3*a7+a4*c
l[11]=a5*a7+a6*c
c=Math.cos(3.14)
b=Math.sin(3.14)
a6=l[0]
a7=l[4]
a5=l[1]
a4=l[5]
a3=l[2]
a2=l[6]
a1=l[3]
a0=l[7]
a=-b
l[0]=a6*c+a7*b
l[1]=a5*c+a4*b
l[2]=a3*c+a2*b
l[3]=a1*c+a0*b
l[4]=a6*a+a7*c
l[5]=a5*a+a4*c
l[6]=a3*a+a2*c
l[7]=a1*a+a0*c}C.a.j(x,new A.ca(w,k,o,new T.bC(n),m,j,new T.i(g),new T.i(f),new T.i(e),new T.i(d),"meshdata:",!1,!0))}}},
jR:{"^":"n:26;a,b,c",
$1:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
H.ct(b1)
if(typeof b1!=="number")return b1.T()
this.a.a=b1+0
z=this.b
z.go+=0.001
y=z.r1
x=y.a
if(x.H(0,0)||x.H(0,1)){x=z.go
w=y.d
if(typeof w!=="number")return w.aA()
z.go=x+w*0.01
w=z.id
x=y.e
if(typeof x!=="number")return x.aA()
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
if(typeof w!=="number")return w.aA()
w=z.fy-w*z.k3
if(w>0)z.fy=w
w=C.o.cR(z.id,-1.4707963267948965,1.4707963267948965)
z.id=w
v=z.fy
u=z.go
t=v*Math.cos(w)
z.bV(t*Math.cos(u),v*Math.sin(w),t*Math.sin(u))
u=z.k2
w=z.d.a
v=u.a
w[12]=w[12]+v[0]
w[13]=w[13]+v[1]
w[14]=w[14]+v[2]
s=w[12]
r=w[13]
q=w[14]
p=new T.i(new Float32Array(3))
p.q(0,1,0)
v=z.e
o=v.a
o[0]=w[12]
o[1]=w[13]
o[2]=w[14]
o=new Float32Array(3)
n=new T.i(o)
n.A(v)
n.a9(0,u)
n.aq(0)
m=p.bn(n)
m.aq(0)
l=n.bn(m)
l.aq(0)
u=m.am(v)
k=l.am(v)
v=n.am(v)
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
w[15]=1
w[14]=-v
w[13]=-k
w[12]=-u
w[11]=0
w[10]=o
w[9]=h
w[8]=j
w[7]=0
w[6]=c
w[5]=d
w[4]=e
w[3]=0
w[2]=f
w[1]=g
w[0]=i
w[12]=s
w[13]=r
w[14]=q
i=z.f
g=i.a
g[0]=w[2]
g[1]=w[6]
g[2]=w[10]
z=-z.k1
b=Math.sqrt(i.gap())
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
z=w[0]
g=w[4]
i=w[8]
f=w[1]
e=w[5]
d=w[9]
c=w[2]
j=w[6]
h=w[10]
o=w[3]
u=w[7]
k=w[11]
w[0]=z*a2+g*a5+i*a8
w[1]=f*a2+e*a5+d*a8
w[2]=c*a2+j*a5+h*a8
w[3]=o*a2+u*a5+k*a8
w[4]=z*a3+g*a6+i*a9
w[5]=f*a3+e*a6+d*a9
w[6]=c*a3+j*a6+h*a9
w[7]=o*a3+u*a6+k*a9
w[8]=z*a4+g*a7+i*b0
w[9]=f*a4+e*a7+d*b0
w[10]=c*a4+j*a7+h*b0
w[11]=o*a4+u*a7+k*b0
x.c.X(0)
x.b.X(0)
y.e=0
y.d=0
y.f=0
y.c.X(0)
y.b.X(0)
this.c.c8()
C.a0.gcM(window).a5(this,-1)}},
jT:{"^":"n:27;a",
$1:function(a){H.b9(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cZ.prototype
return J.fA.prototype}if(typeof a=="string")return J.bj.prototype
if(a==null)return J.fB.prototype
if(typeof a=="boolean")return J.fz.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.aN=function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.cn=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.jC=function(a){if(typeof a=="number")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.jD=function(a){if(typeof a=="number")return J.bi.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.co=function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.o=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.bN=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.b5.prototype
return a}
J.U=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).B(a,b)}
J.a5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jC(a).O(a,b)}
J.bc=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jO(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).i(a,b)}
J.eg=function(a,b,c){return J.cn(a).h(a,b,c)}
J.cw=function(a,b){return J.co(a).V(a,b)}
J.cx=function(a,b){return J.o(a).b6(a,b)}
J.eh=function(a,b,c,d){return J.o(a).cL(a,b,c,d)}
J.cy=function(a,b,c){return J.o(a).b7(a,b,c)}
J.ei=function(a,b){return J.o(a).cN(a,b)}
J.bu=function(a,b,c){return J.o(a).b8(a,b,c)}
J.ej=function(a,b,c){return J.o(a).ba(a,b,c)}
J.cz=function(a,b,c){return J.o(a).bb(a,b,c)}
J.bv=function(a,b){return J.o(a).cQ(a,b)}
J.ek=function(a,b){return J.o(a).bc(a,b)}
J.el=function(a,b,c){return J.o(a).bd(a,b,c)}
J.cA=function(a,b,c,d){return J.o(a).be(a,b,c,d)}
J.em=function(a,b){return J.o(a).bf(a,b)}
J.en=function(a,b,c,d,e){return J.o(a).bg(a,b,c,d,e)}
J.eo=function(a,b){return J.jD(a).J(a,b)}
J.bS=function(a,b,c){return J.aN(a).cU(a,b,c)}
J.bT=function(a){return J.o(a).bk(a)}
J.ep=function(a){return J.o(a).bl(a)}
J.eq=function(a){return J.o(a).cW(a)}
J.er=function(a,b){return J.o(a).bo(a,b)}
J.bU=function(a,b){return J.o(a).bp(a,b)}
J.es=function(a,b,c,d){return J.o(a).bq(a,b,c,d)}
J.et=function(a,b,c,d,e){return J.o(a).cY(a,b,c,d,e)}
J.eu=function(a,b,c,d,e){return J.o(a).br(a,b,c,d,e)}
J.ev=function(a,b,c,d,e,f){return J.o(a).cZ(a,b,c,d,e,f)}
J.bw=function(a,b){return J.o(a).bs(a,b)}
J.cB=function(a,b){return J.o(a).bt(a,b)}
J.ew=function(a){return J.o(a).d1(a)}
J.ex=function(a,b){return J.o(a).D(a,b)}
J.ah=function(a){return J.C(a).gv(a)}
J.cC=function(a){return J.cn(a).gC(a)}
J.bd=function(a){return J.aN(a).gl(a)}
J.ey=function(a){return J.bN(a).gbR(a)}
J.bx=function(a){return J.bN(a).gS(a)}
J.bV=function(a){return J.bN(a).gN(a)}
J.cD=function(a){return J.bN(a).ga6(a)}
J.ez=function(a){return J.o(a).a7(a)}
J.eA=function(a,b){return J.o(a).au(a,b)}
J.eB=function(a,b,c){return J.o(a).av(a,b,c)}
J.cE=function(a,b,c){return J.o(a).az(a,b,c)}
J.eC=function(a,b){return J.o(a).bv(a,b)}
J.eD=function(a,b){return J.co(a).bX(a,b)}
J.eE=function(a,b,c,d){return J.o(a).aC(a,b,c,d)}
J.by=function(a){return J.C(a).k(a)}
J.eF=function(a,b,c,d){return J.o(a).dh(a,b,c,d)}
J.eG=function(a){return J.co(a).di(a)}
J.eH=function(a,b,c){return J.o(a).bF(a,b,c)}
J.eI=function(a,b,c){return J.o(a).bG(a,b,c)}
J.bW=function(a,b,c){return J.o(a).bH(a,b,c)}
J.eJ=function(a,b,c){return J.o(a).bI(a,b,c)}
J.cF=function(a,b,c){return J.o(a).bJ(a,b,c)}
J.cG=function(a,b,c){return J.o(a).bK(a,b,c)}
J.cH=function(a,b,c){return J.o(a).bL(a,b,c)}
J.cI=function(a,b,c,d){return J.o(a).bM(a,b,c,d)}
J.cJ=function(a,b,c,d){return J.o(a).bN(a,b,c,d)}
J.eK=function(a,b){return J.o(a).bO(a,b)}
J.eL=function(a,b,c){return J.o(a).dj(a,b,c)}
J.cK=function(a,b,c,d,e,f,g){return J.o(a).bP(a,b,c,d,e,f,g)}
J.eM=function(a,b,c,d,e){return J.o(a).bQ(a,b,c,d,e)}
I.cr=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.z=W.bZ.prototype
C.A=W.fq.prototype
C.q=W.fr.prototype
C.B=J.h.prototype
C.a=J.bh.prototype
C.f=J.cZ.prototype
C.o=J.bi.prototype
C.h=J.bj.prototype
C.I=J.bk.prototype
C.b=H.h3.prototype
C.m=H.h5.prototype
C.u=J.h9.prototype
C.p=J.b5.prototype
C.a_=W.aG.prototype
C.a0=W.hS.prototype
C.e=new P.iN()
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.E=function(getTagFallback) {
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
C.F=function() {
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
C.G=function(hooks) {
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
C.H=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.J=H.m(I.cr([]),[P.A])
C.K=new G.F("vec3","vertex btangents",0)
C.d=new G.F("vec3","",0)
C.L=new G.F("vec4","delta from light",0)
C.n=new G.F("","",0)
C.v=new G.F("vec3","vertex coordinates",0)
C.M=new G.F("vec3","vertex binormals",0)
C.w=new G.F("vec4","for wireframe",0)
C.N=new G.F("vec4","per vertex color",0)
C.O=new G.F("float","for normal maps",0)
C.j=new G.F("mat4","",0)
C.Q=new G.F("mat4","",4)
C.P=new G.F("mat4","",128)
C.c=new G.F("float","",0)
C.R=new G.F("float","",4)
C.S=new G.F("float","depth for shadowmaps",0)
C.i=new G.F("sampler2D","",0)
C.T=new G.F("float","for bump maps",0)
C.U=new G.F("vec2","texture uvs",0)
C.V=new G.F("float","time since program start in sec",0)
C.k=new G.F("vec2","",0)
C.W=new G.F("samplerCube","",0)
C.l=new G.F("vec4","",0)
C.X=new G.F("vec3","vertex normals",0)
C.Y=new G.F("sampler2DShadow","",0)
C.x=new G.F("vec3","per vertex color",0)
C.y=new G.F("mat3","",0)
C.Z=new G.F("vec3","vertex tangents",0)
$.a6=0
$.aR=null
$.cM=null
$.cf=!1
$.dT=null
$.dM=null
$.dY=null
$.bM=null
$.bP=null
$.cp=null
$.aJ=null
$.b6=null
$.b7=null
$.cg=!1
$.D=C.e
$.cT=null
$.cS=null
$.cR=null
$.cQ=null
$.dR=0
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
I.$lazy(y,x,w)}})(["ki","e1",function(){return H.dS("_$dart_dartClosure")},"kW","cu",function(){return H.dS("_$dart_js")},"lF","e3",function(){return H.a7(H.bF({
toString:function(){return"$receiver$"}}))},"lG","e4",function(){return H.a7(H.bF({$method$:null,
toString:function(){return"$receiver$"}}))},"lH","e5",function(){return H.a7(H.bF(null))},"lI","e6",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"lL","e9",function(){return H.a7(H.bF(void 0))},"lM","ea",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"lK","e8",function(){return H.a7(H.dj(null))},"lJ","e7",function(){return H.a7(function(){try{null.$method$}catch(z){return z.message}}())},"lO","ec",function(){return H.a7(H.dj(void 0))},"lN","eb",function(){return H.a7(function(){try{(void 0).$method$}catch(z){return z.message}}())},"lX","cv",function(){return P.hY()},"m8","bb",function(){return[]},"kf","e0",function(){return{}},"lu","e2",function(){return new G.di(1281,0,4294967295)},"ka","e_",function(){return new G.dh(1281,1281,1281)},"m6","a4",function(){return P.d2(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.x,"aColorAlpha",C.N,"aPosition",C.v,"aTexUV",C.U,"aNormal",C.X,"aBinormal",C.M,"aCenter",C.w,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.Z,"aBitangent",C.K,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.x,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.v,"vPositionFromLight",C.L,"vCenter",C.w,"vDepth",C.S,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.y,"uConvolutionMatrix",C.y,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.Y,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.W,"uAnimationTable",C.i,"uTime",C.V,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.P,"uLightDescs",C.Q,"uLightCount",C.c,"uLightTypes",C.R,"uBumpScale",C.T,"uNormalScale",C.O],P.e,G.F)},"me","ef",function(){var z,y
z=G.db("Normal2Color")
y=[P.e]
z.c1(H.m(["aPosition","aNormal"],y))
z.aE(H.m(["vColor"],y))
z.c4(H.m(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aJ(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = normalize(aNormal / 2.0 + vec3(0.5) );"],y))
return z},"md","ee",function(){var z,y
z=G.db("Normal2ColorF")
y=[P.e]
z.aE(H.m(["vColor"],y))
z.aJ(H.m(["oFragColor = vec4( vColor, 1.0 );"],y))
return z},"mb","ed",function(){return H.m([],[[P.W,P.c]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.A,args:[W.Q]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.e,args:[P.E]},{func:1,ret:-1,args:[,]},{func:1,ret:P.A,args:[W.aX]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[,P.P]},{func:1,ret:P.A,args:[,],opt:[P.P]},{func:1,ret:[P.O,,],args:[,]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.A,args:[P.H]},{func:1,args:[W.a_]},{func:1,args:[,,]},{func:1,ret:-1,args:[W.a_]},{func:1,ret:P.A,args:[W.bl]},{func:1,ret:P.A,args:[W.aG]},{func:1,ret:P.E,args:[P.E,P.c]},{func:1,ret:P.A,args:[P.e]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.A,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.k2(d||a)
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
Isolate.cr=a.cr
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
if(typeof dartMainRunner==="function")dartMainRunner(N.dV,[])
else N.dV([])})})()
//# sourceMappingURL=generateNormals.dart.js.map
