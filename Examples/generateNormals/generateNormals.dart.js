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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b7=function(){}
var dart=[["","",,H,{"^":"",kU:{"^":"c;a"}}],["","",,J,{"^":"",
cs:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bO:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cp==null){H.jK()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cd("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cu()]
if(v!=null)return v
v=H.jP(a)
if(v!=null)return v
if(typeof a=="function")return C.I
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.cu(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
h:{"^":"c;",
B:function(a,b){return a===b},
gv:function(a){return H.b_(a)},
j:["bZ",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fy:{"^":"h;",
j:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isci:1},
fA:{"^":"h;",
B:function(a,b){return null==b},
j:function(a){return"null"},
gv:function(a){return 0},
$isA:1},
c6:{"^":"h;",
gv:function(a){return 0},
j:["c_",function(a){return String(a)}]},
h8:{"^":"c6;"},
b3:{"^":"c6;"},
bj:{"^":"c6;",
j:function(a){var z=a[$.e1()]
if(z==null)return this.c_(a)
return"JavaScript function for "+H.d(J.by(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc2:1},
bg:{"^":"h;$ti",
k:function(a,b){H.y(b,H.p(a,0))
if(!!a.fixed$length)H.T(P.B("add"))
a.push(b)},
cI:function(a,b){var z
H.w(b,"$isl",[H.p(a,0)],"$asl")
if(!!a.fixed$length)H.T(P.B("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
W:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.d(a[y]))
return z.join(b)},
gd5:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.fw())},
bW:function(a,b){if(!!a.immutable$list)H.T(P.B("sort"))
H.hA(a,J.jk(),H.p(a,0))},
a8:function(a){return this.bW(a,null)},
j:function(a){return P.c4(a,"[","]")},
gC:function(a){return new J.eP(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.b_(a)},
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
$asu:I.b7,
$isl:1,
$isa:1,
p:{
fx:function(a,b){return J.c5(H.m(a,[b]))},
c5:function(a){H.b8(a)
a.fixed$length=Array
return a},
kS:[function(a,b){return J.eo(H.dW(a,"$isV"),H.dW(b,"$isV"))},"$2","jk",8,0,28]}},
kT:{"^":"bg;$ti"},
eP:{"^":"c;a,b,c,0d,$ti",
saL:function(a){this.d=H.y(a,H.p(this,0))},
gE:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.J(z))
x=this.c
if(x>=y){this.saL(null)
return!1}this.saL(z[x]);++this.c
return!0}},
bh:{"^":"h;",
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
cP:function(a,b,c){if(this.J(b,c)>0)throw H.b(H.ay(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
c0:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b4(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.b4(a,b)},
b4:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.B("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
b2:function(a,b){var z
if(a>0)z=this.cF(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cF:function(a,b){return b>31?0:a>>>b},
N:function(a,b){if(typeof b!=="number")throw H.b(H.ay(b))
return a>b},
$isV:1,
$asV:function(){return[P.H]},
$isae:1,
$isH:1},
cZ:{"^":"bh;",$isE:1},
fz:{"^":"bh;"},
bi:{"^":"h;",
bh:function(a,b){if(b<0)throw H.b(H.ad(a,b))
if(b>=a.length)H.T(H.ad(a,b))
return a.charCodeAt(b)},
T:function(a,b){if(b>=a.length)throw H.b(H.ad(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.z(b)
if(typeof b!=="string")throw H.b(P.cL(b,null,null))
return a+b},
bX:function(a,b){var z=H.m(a.split(b),[P.e])
return z},
aE:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bE(b,null,null))
if(b>c)throw H.b(P.bE(b,null,null))
if(c>a.length)throw H.b(P.bE(c,null,null))
return a.substring(b,c)},
bY:function(a,b){return this.aE(a,b,null)},
dg:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.T(z,0)===133){x=J.fB(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bh(z,w)===133?J.fC(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
cS:function(a,b,c){if(c>a.length)throw H.b(P.hk(c,0,a.length,null,null))
return H.jX(a,b,c)},
J:function(a,b){var z
H.z(b)
if(typeof b!=="string")throw H.b(H.ay(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
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
$asu:I.b7,
$isV:1,
$asV:function(){return[P.e]},
$isd7:1,
$ise:1,
p:{
d_:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fB:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.T(a,b)
if(y!==32&&y!==13&&!J.d_(y))break;++b}return b},
fC:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bh(a,z)
if(y!==32&&y!==13&&!J.d_(y))break}return b}}}}],["","",,H,{"^":"",
fw:function(){return new P.de("No element")},
hA:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.E,args:[c,c]})
H.bl(a,0,J.bc(a)-1,b,c)},
bl:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.hz(a,b,c,d,e)
else H.hy(a,b,c,d,e)},
hz:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.aL(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a5(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
hy:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.f.U(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.U(b+a0,2)
v=w-z
u=w+z
t=J.aL(a)
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
if(typeof i!=="number")return i.Y()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.N()
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
if(typeof e!=="number")return e.Y()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.N()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.N()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.Y()
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
H.bl(a,b,m-2,a1,a2)
H.bl(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.U(a1.$2(t.i(a,m),r),0);)++m
for(;J.U(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.Y()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bl(a,m,l,a1,a2)}else H.bl(a,m,l,a1,a2)},
fc:{"^":"l;"},
fN:{"^":"c;a,b,c,0d,$ti",
saM:function(a){this.d=H.y(a,H.p(this,0))},
gE:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.aL(z)
x=y.gl(z)
if(this.b!==x)throw H.b(P.aQ(z))
w=this.c
if(w>=x){this.saM(null)
return!1}this.saM(y.u(z,w));++this.c
return!0}},
bB:{"^":"c;$ti"}}],["","",,H,{"^":"",
aC:function(a){var z,y
z=H.z(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jE:function(a){return init.types[H.t(a)]},
jN:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.D(a).$isx},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.by(a)
if(typeof z!=="string")throw H.b(H.ay(a))
return z},
b_:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hi:function(a,b){var z,y
if(typeof a!=="string")H.T(H.ay(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.z(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
hh:function(a){var z,y
if(typeof a!=="string")H.T(H.ay(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.eG(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
b0:function(a){return H.h9(a)+H.bK(H.aB(a),0,null)},
h9:function(a){var z,y,x,w,v,u,t,s,r
z=J.D(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.B||!!z.$isb3){u=C.t(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aC(w.length>1&&C.h.T(w,0)===36?C.h.bY(w,1):w)},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hg:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
he:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
ha:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
hb:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
hd:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
hf:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
hc:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
br:function(a){throw H.b(H.ay(a))},
f:function(a,b){if(a==null)J.bc(a)
throw H.b(H.ad(a,b))},
ad:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
z=H.t(J.bc(a))
if(!(b<0)){if(typeof z!=="number")return H.br(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.bE(b,"index",null)},
ay:function(a){return new P.aD(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.bD()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dZ})
z.name=""}else z.toString=H.dZ
return z},
dZ:function(){return J.by(this.dartException)},
T:function(a){throw H.b(a)},
J:function(a){throw H.b(P.aQ(a))},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.k2(a)
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
if(l)return z.$1(H.d6(H.z(y),m))}}return z.$1(new H.hO(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dd()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aD(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dd()
return a},
aM:function(a){var z
if(a==null)return new H.dC(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dC(a)},
jA:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
jM:function(a,b,c,d,e,f){H.j(a,"$isc2")
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
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jM)
a.$identity=z
return z},
eZ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.D(d).$isa){z.$reflectionInfo=d
x=H.hm(z).r}else x=d
w=e?Object.create(new H.hB().constructor.prototype):Object.create(new H.bX(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jE,x)
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
eW:function(a,b,c,d){var z=H.bY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cP:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eY(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eW(y,!w,z,b)
if(y===0){w=$.a6
if(typeof w!=="number")return w.F()
$.a6=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aP
if(v==null){v=H.bz("self")
$.aP=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a6
if(typeof w!=="number")return w.F()
$.a6=w+1
t+=w
w="return function("+t+"){return this."
v=$.aP
if(v==null){v=H.bz("self")
$.aP=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
eX:function(a,b,c,d){var z,y
z=H.bY
y=H.cN
switch(b?-1:a){case 0:throw H.b(H.ht("Intercepted function with no arguments."))
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
z=$.aP
if(z==null){z=H.bz("self")
$.aP=z}y=$.cM
if(y==null){y=H.bz("receiver")
$.cM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eX(w,!u,x,b)
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
cl:function(a,b,c,d,e,f,g){return H.eZ(a,b,H.t(c),d,!!e,!!f,g)},
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
bR:function(a,b){throw H.b(H.a3(a,H.aC(H.z(b).substring(3))))},
jV:function(a,b){throw H.b(H.cO(a,H.aC(H.z(b).substring(3))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.D(a)[b])return a
H.bR(a,b)},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.D(a)[b]
else z=!0
if(z)return a
H.jV(a,b)},
dW:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.D(a)[b])return a
H.bR(a,b)},
me:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.D(a)[b])return a
H.bR(a,b)},
b8:function(a){if(a==null)return a
if(!!J.D(a).$isa)return a
throw H.b(H.a3(a,"List<dynamic>"))},
jO:function(a,b){var z
if(a==null)return a
z=J.D(a)
if(!!z.$isa)return a
if(z[b])return a
H.bR(a,b)},
cm:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.t(z)]
else return a.$S()}return},
bo:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cm(J.D(a))
if(z==null)return!1
return H.dG(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cf)return a
$.cf=!0
try{if(H.bo(a,b))return a
z=H.bs(b)
y=H.a3(a,z)
throw H.b(y)}finally{$.cf=!1}},
aK:function(a,b){if(a!=null&&!H.ck(a,b))H.T(H.a3(a,H.bs(b)))
return a},
dK:function(a){var z,y
z=J.D(a)
if(!!z.$isn){y=H.cm(z)
if(y!=null)return H.bs(y)
return"Closure"}return H.b0(a)},
k1:function(a){throw H.b(new P.f4(H.z(a)))},
dS:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
aB:function(a){if(a==null)return
return a.$ti},
mb:function(a,b,c){return H.b9(a["$as"+H.d(c)],H.aB(b))},
bp:function(a,b,c,d){var z
H.z(c)
H.t(d)
z=H.b9(a["$as"+H.d(c)],H.aB(b))
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
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aC(a[0].builtin$cls)+H.bK(a,1,b)
if(typeof a=="function")return H.aC(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.t(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.d(b[y])}if('func' in a)return H.jj(a,b)
if('futureOr' in a)return"FutureOr<"+H.ax("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.m([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.k(b,"T"+(w+u))
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
for(z=H.jz(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.z(z[l])
n=n+m+H.ax(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bK:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cc("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}return"<"+z.j(0)+">"},
jD:function(a){var z,y,x,w
z=J.D(a)
if(!!z.$isn){y=H.cm(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.aB(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
b9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ac:function(a,b,c,d){var z,y
H.z(b)
H.b8(c)
H.z(d)
if(a==null)return!1
z=H.aB(a)
y=J.D(a)
if(y[b]==null)return!1
return H.dN(H.b9(y[d],z),null,c,null)},
bt:function(a,b,c,d){H.z(b)
H.b8(c)
H.z(d)
if(a==null)return a
if(H.ac(a,b,c,d))return a
throw H.b(H.cO(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aC(b.substring(3))+H.bK(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.z(b)
H.b8(c)
H.z(d)
if(a==null)return a
if(H.ac(a,b,c,d))return a
throw H.b(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aC(b.substring(3))+H.bK(c,0,null),init.mangledGlobalNames)))},
dN:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a0(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a0(a[y],b,c[y],d))return!1
return!0},
m8:function(a,b,c){return a.apply(b,H.b9(J.D(b)["$as"+H.d(c)],H.aB(b)))},
dU:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="A"||a===-1||a===-2||H.dU(z)}return!1},
ck:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="A"||b===-1||b===-2||H.dU(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ck(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bo(a,b)}z=J.D(a).constructor
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
v=H.b9(w,z?a.slice(1):null)
return H.a0(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dN(H.b9(r,z),b,u,d)},
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
return H.jU(m,b,l,d)},
jU:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a0(c[w],d,a[w],b))return!1}return!0},
m9:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
jP:function(a){var z,y,x,w,v,u
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
jT:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bQ(z)
else return J.cs(z,c,null,null)},
jK:function(){if(!0===$.cp)return
$.cp=!0
H.jL()},
jL:function(){var z,y,x,w,v,u,t,s
$.bM=Object.create(null)
$.bP=Object.create(null)
H.jG()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dY.$1(v)
if(u!=null){t=H.jT(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jG:function(){var z,y,x,w,v,u,t
z=C.F()
z=H.aJ(C.C,H.aJ(C.H,H.aJ(C.r,H.aJ(C.r,H.aJ(C.G,H.aJ(C.D,H.aJ(C.E(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dT=new H.jH(v)
$.dM=new H.jI(u)
$.dY=new H.jJ(t)},
aJ:function(a,b){return a(b)||b},
jX:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
jZ:function(a,b,c,d){var z=b.cv(a,d)
if(z==null)return a
return H.k0(a,z.b.index,z.gcZ(z),c)},
jY:function(a,b,c){var z,y
z=b.gb_()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
k_:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.jZ(a,b,c,d)},
k0:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
hl:{"^":"c;a,b,c,d,e,f,r,0x",p:{
hm:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c5(z)
y=z[0]
x=z[1]
return new H.hl(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hJ:{"^":"c;a,b,c,d,e,f",
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
return new H.hJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dj:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
h5:{"^":"N;a,b",
j:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
d6:function(a,b){return new H.h5(a,b==null?null:b.method)}}},
fE:{"^":"N;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
c8:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fE(a,y,z?null:b.receiver)}}},
hO:{"^":"N;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
k2:{"^":"n:5;a",
$1:function(a){if(!!J.D(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dC:{"^":"c;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isP:1},
n:{"^":"c;",
j:function(a){return"Closure '"+H.b0(this).trim()+"'"},
gbS:function(){return this},
$isc2:1,
gbS:function(){return this}},
dg:{"^":"n;"},
hB:{"^":"dg;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aC(z)+"'"}},
bX:{"^":"dg;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bX))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b_(this.a)
else y=typeof z!=="object"?J.ah(z):H.b_(z)
return(y^H.b_(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
p:{
bY:function(a){return a.a},
cN:function(a){return a.c},
bz:function(a){var z,y,x,w,v
z=new H.bX("self","target","receiver","name")
y=J.c5(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hK:{"^":"N;a",
j:function(a){return this.a},
p:{
a3:function(a,b){return new H.hK("TypeError: "+P.bA(a)+": type '"+H.dK(a)+"' is not a subtype of type '"+b+"'")}}},
eU:{"^":"N;a",
j:function(a){return this.a},
p:{
cO:function(a,b){return new H.eU("CastError: "+P.bA(a)+": type '"+H.dK(a)+"' is not a subtype of type '"+b+"'")}}},
hs:{"^":"N;a",
j:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
ht:function(a){return new H.hs(a)}}},
dk:{"^":"c;a,0b,0c,0d",
ga3:function(){var z=this.b
if(z==null){z=H.bs(this.a)
this.b=z}return z},
j:function(a){return this.ga3()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.ga3())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dk&&this.ga3()===b.ga3()}},
c7:{"^":"fQ;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gM:function(a){return new H.al(this,[H.p(this,0)])},
a4:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cs(z,b)}else{y=this.d3(b)
return y}},
d3:function(a){var z=this.d
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
return x}else return this.d4(b)},
d4:function(a){var z,y,x
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
if(y!==this.r)throw H.b(P.aQ(this))
z=z.c}},
aO:function(a,b,c){var z
H.y(b,H.p(this,0))
H.y(c,H.p(this,1))
z=this.a0(a,b)
if(z==null)this.al(a,b,this.ak(b,c))
else z.b=c},
aZ:function(){this.r=this.r+1&67108863},
ak:function(a,b){var z,y
z=new H.fJ(H.y(a,H.p(this,0)),H.y(b,H.p(this,1)))
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
j:function(a){return P.d3(this)},
a0:function(a,b){return a[b]},
ai:function(a,b){return a[b]},
al:function(a,b,c){a[b]=c},
ct:function(a,b){delete a[b]},
cs:function(a,b){return this.a0(a,b)!=null},
aj:function(){var z=Object.create(null)
this.al(z,"<non-identifier-key>",z)
this.ct(z,"<non-identifier-key>")
return z},
$isd1:1},
fJ:{"^":"c;a,b,0c,0d"},
al:{"^":"fc;a,$ti",
gl:function(a){return this.a.a},
gC:function(a){var z,y
z=this.a
y=new H.fK(z,z.r,this.$ti)
y.c=z.e
return y}},
fK:{"^":"c;a,b,0c,0d,$ti",
saN:function(a){this.d=H.y(a,H.p(this,0))},
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aQ(z))
else{z=this.c
if(z==null){this.saN(null)
return!1}else{this.saN(z.a)
this.c=this.c.c
return!0}}}},
jH:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
jI:{"^":"n:11;a",
$2:function(a,b){return this.a(a,b)}},
jJ:{"^":"n:12;a",
$1:function(a){return this.a(H.z(a))}},
fD:{"^":"c;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
gb_:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.d0(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
cv:function(a,b){var z,y
z=this.gb_()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.iA(this,y)},
$isd7:1,
p:{
d0:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(P.c1("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
iA:{"^":"c;a,b",
gcZ:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.f(z,b)
return z[b]}}}],["","",,H,{"^":"",
jz:function(a){return J.fx(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bJ:function(a){var z,y
if(!!J.D(a).$isu)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
a8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ad(b,a))},
h3:{"^":"h;",$ishL:1,"%":"DataView;ArrayBufferView;c9|dw|dx|d4|dy|dz|ao"},
c9:{"^":"h3;",
gl:function(a){return a.length},
$isu:1,
$asu:I.b7,
$isx:1,
$asx:I.b7},
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
h2:{"^":"d4;",$isa9:1,"%":"Float32Array"},
l2:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int16Array"},
l3:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
$isfu:1,
"%":"Int32Array"},
l4:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int8Array"},
l5:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
h4:{"^":"ao;",
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
$islO:1,
"%":"Uint32Array"},
l6:{"^":"ao;",
gl:function(a){return a.length},
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
l7:{"^":"ao;",
gl:function(a){return a.length},
i:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dw:{"^":"c9+q;"},
dx:{"^":"dw+bB;"},
dy:{"^":"c9+q;"},
dz:{"^":"dy+bB;"}}],["","",,P,{"^":"",
hX:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jr()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.az(new P.hZ(z),1)).observe(y,{childList:true})
return new P.hY(z,y,x)}else if(self.setImmediate!=null)return P.js()
return P.jt()},
lX:[function(a){self.scheduleImmediate(H.az(new P.i_(H.k(a,{func:1,ret:-1})),0))},"$1","jr",4,0,4],
lY:[function(a){self.setImmediate(H.az(new P.i0(H.k(a,{func:1,ret:-1})),0))},"$1","js",4,0,4],
lZ:[function(a){H.k(a,{func:1,ret:-1})
P.j1(0,a)},"$1","jt",4,0,4],
fl:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.w(a,"$isl",[[P.W,d]],"$asl")
s=[[P.a,d]]
y=new P.O(0,$.C,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fn(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.J)(r),++p){w=r[p]
v=o
w.as(new P.fm(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.O(0,$.C,s)
r.aQ(C.J)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.m(r,[d])}catch(n){u=H.aO(n)
t=H.aM(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bD()
r=$.C
if(r!==C.e)r.toString
s=new P.O(0,r,s)
s.aR(m,t)
return s}else{z.c=u
z.d=t}}return y},
jn:function(a,b){if(H.bo(a,{func:1,args:[P.c,P.P]}))return H.k(a,{func:1,ret:null,args:[P.c,P.P]})
if(H.bo(a,{func:1,args:[P.c]}))return H.k(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.cL(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jm:function(){var z,y
for(;z=$.aH,z!=null;){$.b6=null
y=z.b
$.aH=y
if(y==null)$.b5=null
z.a.$0()}},
m6:[function(){$.cg=!0
try{P.jm()}finally{$.b6=null
$.cg=!1
if($.aH!=null)$.cv().$1(P.dO())}},"$0","dO",0,0,1],
dJ:function(a){var z=new P.dn(H.k(a,{func:1,ret:-1}))
if($.aH==null){$.b5=z
$.aH=z
if(!$.cg)$.cv().$1(P.dO())}else{$.b5.b=z
$.b5=z}},
jq:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aH
if(z==null){P.dJ(a)
$.b6=$.b5
return}y=new P.dn(a)
x=$.b6
if(x==null){y.b=z
$.b6=y
$.aH=y}else{y.b=x.b
x.b=y
$.b6=y
if(y.b==null)$.b5=y}},
jW:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.C
if(C.e===y){P.aI(null,null,C.e,a)
return}y.toString
P.aI(null,null,y,H.k(y.b9(a),z))},
bL:function(a,b,c,d,e){var z={}
z.a=d
P.jq(new P.jo(z,e))},
dH:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.C
if(y===c)return d.$0()
$.C=c
z=y
try{y=d.$0()
return y}finally{$.C=z}},
dI:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.C
if(y===c)return d.$1(e)
$.C=c
z=y
try{y=d.$1(e)
return y}finally{$.C=z}},
jp:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.C
if(y===c)return d.$2(e,f)
$.C=c
z=y
try{y=d.$2(e,f)
return y}finally{$.C=z}},
aI:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.b9(d):c.cM(d,-1)
P.dJ(d)},
hZ:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hY:{"^":"n:13;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i_:{"^":"n:0;a",
$0:function(){this.a.$0()}},
i0:{"^":"n:0;a",
$0:function(){this.a.$0()}},
j0:{"^":"c;a,0b,c",
cm:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.az(new P.j2(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
p:{
j1:function(a,b){var z=new P.j0(!0,0)
z.cm(a,b)
return z}}},
j2:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
W:{"^":"c;$ti"},
fn:{"^":"n:14;a,b,c,d",
$2:function(a,b){var z,y
H.j(b,"$isP")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.G(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.G(z.c,z.d)}},
fm:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.aU(z.a)}else if(z.b===0&&!this.e)this.c.G(z.c,z.d)},
$S:function(){return{func:1,ret:P.A,args:[this.f]}}},
dr:{"^":"c;$ti",
cR:function(a,b){if(a==null)a=new P.bD()
if(this.a.a!==0)throw H.b(P.cb("Future already completed"))
$.C.toString
this.G(a,b)},
cQ:function(a){return this.cR(a,null)}},
dp:{"^":"dr;a,$ti",
bj:function(a,b){var z
H.aK(b,{futureOr:1,type:H.p(this,0)})
z=this.a
if(z.a!==0)throw H.b(P.cb("Future already completed"))
z.aQ(b)},
G:function(a,b){this.a.aR(a,b)}},
iY:{"^":"dr;a,$ti",
G:function(a,b){this.a.G(a,b)}},
aF:{"^":"c;0a,b,c,d,e,$ti",
d6:function(a){if(this.c!==6)return!0
return this.b.b.ar(H.k(this.d,{func:1,ret:P.ci,args:[P.c]}),a.a,P.ci,P.c)},
d2:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bo(z,{func:1,args:[P.c,P.P]}))return H.aK(w.dc(z,a.a,a.b,null,y,P.P),x)
else return H.aK(w.ar(H.k(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
O:{"^":"c;b3:a<,b,0cE:c<,$ti",
as:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.C
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jn(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.O(0,$.C,[c])
w=b==null?1:3
this.aP(new P.aF(x,w,a,b,[z,c]))
return x},
a5:function(a,b){return this.as(a,null,b)},
aP:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaF")
this.c=a}else{if(z===2){y=H.j(this.c,"$isO")
z=y.a
if(z<4){y.aP(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aI(null,null,z,H.k(new P.ie(this,a),{func:1,ret:-1}))}},
b0:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaF")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isO")
y=u.a
if(y<4){u.b0(a)
return}this.a=y
this.c=u.c}z.a=this.a2(a)
y=this.b
y.toString
P.aI(null,null,y,H.k(new P.im(z,this),{func:1,ret:-1}))}},
a1:function(){var z=H.j(this.c,"$isaF")
this.c=null
return this.a2(z)},
a2:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ad:function(a){var z,y,x
z=H.p(this,0)
H.aK(a,{futureOr:1,type:z})
y=this.$ti
if(H.ac(a,"$isW",y,"$asW"))if(H.ac(a,"$isO",y,null))P.bH(a,this)
else P.ds(a,this)
else{x=this.a1()
H.y(a,z)
this.a=4
this.c=a
P.aG(this,x)}},
aU:function(a){var z
H.y(a,H.p(this,0))
z=this.a1()
this.a=4
this.c=a
P.aG(this,z)},
G:function(a,b){var z
H.j(b,"$isP")
z=this.a1()
this.a=8
this.c=new P.Z(a,b)
P.aG(this,z)},
aQ:function(a){var z
H.aK(a,{futureOr:1,type:H.p(this,0)})
if(H.ac(a,"$isW",this.$ti,"$asW")){this.cq(a)
return}this.a=1
z=this.b
z.toString
P.aI(null,null,z,H.k(new P.ih(this,a),{func:1,ret:-1}))},
cq:function(a){var z=this.$ti
H.w(a,"$isW",z,"$asW")
if(H.ac(a,"$isO",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aI(null,null,z,H.k(new P.il(this,a),{func:1,ret:-1}))}else P.bH(a,this)
return}P.ds(a,this)},
aR:function(a,b){var z
H.j(b,"$isP")
this.a=1
z=this.b
z.toString
P.aI(null,null,z,H.k(new P.ig(this,a,b),{func:1,ret:-1}))},
$isW:1,
p:{
ds:function(a,b){var z,y,x
b.a=1
try{a.as(new P.ii(b),new P.ij(b),null)}catch(x){z=H.aO(x)
y=H.aM(x)
P.jW(new P.ik(b,z,y))}},
bH:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isO")
if(z>=4){y=b.a1()
b.a=a.a
b.c=a.c
P.aG(b,y)}else{y=H.j(b.c,"$isaF")
b.a=2
b.c=a
a.b0(y)}},
aG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.aG(z.a,b)}y=z.a
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
return}o=$.C
if(o!=q)$.C=q
else o=null
y=b.c
if(y===8)new P.iq(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ip(x,b,r).$0()}else if((y&2)!==0)new P.io(z,x,b).$0()
if(o!=null)$.C=o
y=x.b
if(!!J.D(y).$isW){if(y.a>=4){n=H.j(t.c,"$isaF")
t.c=null
b=t.a2(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bH(y,t)
return}}m=b.b
n=H.j(m.c,"$isaF")
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
ie:{"^":"n:0;a,b",
$0:function(){P.aG(this.a,this.b)}},
im:{"^":"n:0;a,b",
$0:function(){P.aG(this.b,this.a.a)}},
ii:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.ad(a)}},
ij:{"^":"n:15;a",
$2:function(a,b){H.j(b,"$isP")
this.a.G(a,b)},
$1:function(a){return this.$2(a,null)}},
ik:{"^":"n:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
ih:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.aU(H.y(this.b,H.p(z,0)))}},
il:{"^":"n:0;a,b",
$0:function(){P.bH(this.b,this.a)}},
ig:{"^":"n:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
iq:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bD(H.k(w.d,{func:1}),null)}catch(v){y=H.aO(v)
x=H.aM(v)
if(this.d){w=H.j(this.a.a.c,"$isZ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isZ")
else u.b=new P.Z(y,x)
u.a=!0
return}if(!!J.D(z).$isW){if(z instanceof P.O&&z.gb3()>=4){if(z.gb3()===8){w=this.b
w.b=H.j(z.gcE(),"$isZ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a5(new P.ir(t),null)
w.a=!1}}},
ir:{"^":"n:16;a",
$1:function(a){return this.a}},
ip:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.y(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.ar(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aO(t)
y=H.aM(t)
x=this.a
x.b=new P.Z(z,y)
x.a=!0}}},
io:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isZ")
w=this.c
if(w.d6(z)&&w.e!=null){v=this.b
v.b=w.d2(z)
v.a=!1}}catch(u){y=H.aO(u)
x=H.aM(u)
w=H.j(this.a.a.c,"$isZ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Z(y,x)
s.a=!0}}},
dn:{"^":"c;a,0b"},
hD:{"^":"c;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.O(0,$.C,[P.E])
z.a=0
x=H.p(this,0)
w=H.k(new P.hF(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.hG(z,y),{func:1,ret:-1})
W.ab(this.a,this.b,w,!1,x)
return y}},
hF:{"^":"n;a,b",
$1:function(a){H.y(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.A,args:[H.p(this.b,0)]}}},
hG:{"^":"n:0;a,b",
$0:function(){this.b.ad(this.a.a)}},
hE:{"^":"c;"},
Z:{"^":"c;a,b",
j:function(a){return H.d(this.a)},
$isN:1},
j7:{"^":"c;",$islV:1},
jo:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bD()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.j(0)
throw x}},
iM:{"^":"j7;",
dd:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.C){a.$0()
return}P.dH(null,null,this,a,-1)}catch(x){z=H.aO(x)
y=H.aM(x)
P.bL(null,null,this,z,H.j(y,"$isP"))}},
de:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.C){a.$1(b)
return}P.dI(null,null,this,a,b,-1,c)}catch(x){z=H.aO(x)
y=H.aM(x)
P.bL(null,null,this,z,H.j(y,"$isP"))}},
cM:function(a,b){return new P.iO(this,H.k(a,{func:1,ret:b}),b)},
b9:function(a){return new P.iN(this,H.k(a,{func:1,ret:-1}))},
cN:function(a,b){return new P.iP(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bD:function(a,b){H.k(a,{func:1,ret:b})
if($.C===C.e)return a.$0()
return P.dH(null,null,this,a,b)},
ar:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.C===C.e)return a.$1(b)
return P.dI(null,null,this,a,b,c,d)},
dc:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.C===C.e)return a.$2(b,c)
return P.jp(null,null,this,a,b,c,d,e,f)}},
iO:{"^":"n;a,b,c",
$0:function(){return this.a.bD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
iN:{"^":"n:1;a,b",
$0:function(){return this.a.dd(this.b)}},
iP:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.de(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
d2:function(a,b,c){H.b8(a)
return H.w(H.jA(a,new H.c7(0,0,[b,c])),"$isd1",[b,c],"$asd1")},
X:function(a,b){return new H.c7(0,0,[a,b])},
fL:function(){return new H.c7(0,0,[null,null])},
am:function(a,b,c,d){return new P.iy(0,0,[d])},
fv:function(a,b,c){var z,y
if(P.ch(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.e])
y=$.ba()
C.a.k(y,a)
try{P.jl(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.df(b,H.jO(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
c4:function(a,b,c){var z,y,x
if(P.ch(a))return b+"..."+c
z=new P.cc(b)
y=$.ba()
C.a.k(y,a)
try{x=z
x.a=P.df(x.gP(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gP()+c
y=z.gP()
return y.charCodeAt(0)==0?y:y},
ch:function(a){var z,y
for(z=0;y=$.ba(),z<y.length;++z)if(a===y[z])return!0
return!1},
jl:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.e],"$asa")
z=a.gC(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.d(z.gE(z))
C.a.k(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gE(z);++x
if(!z.w()){if(x<=4){C.a.k(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE(z);++x
for(;z.w();t=s,s=r){r=z.gE(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.k(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.k(b,q)
C.a.k(b,u)
C.a.k(b,v)},
fM:function(a,b){var z,y,x
z=P.am(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.J)(a),++x)z.k(0,H.y(a[x],b))
return z},
d3:function(a){var z,y,x
z={}
if(P.ch(a))return"{...}"
y=new P.cc("")
try{C.a.k($.ba(),a)
x=y
x.a=x.gP()+"{"
z.a=!0
J.ex(a,new P.fR(z,y))
z=y
z.a=z.gP()+"}"}finally{z=$.ba()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gP()
return z.charCodeAt(0)==0?z:z},
iy:{"^":"it;a,0b,0c,0d,0e,0f,r,$ti",
gC:function(a){return P.dv(this,this.r,H.p(this,0))},
gl:function(a){return this.a},
H:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.j(z[b],"$isbn")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.j(y[b],"$isbn")!=null}else return this.cr(b)},
cr:function(a){var z=this.d
if(z==null)return!1
return this.ah(this.aX(z,a),a)>=0},
k:function(a,b){var z,y
H.y(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ce()
this.b=z}return this.aS(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ce()
this.c=y}return this.aS(y,b)}else return this.cn(0,b)},
cn:function(a,b){var z,y,x
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
else return this.cC(0,b)},
cC:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.aX(z,b)
x=this.ah(y,b)
if(x<0)return!1
this.b5(y.splice(x,1)[0])
return!0},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ab()}},
aS:function(a,b){H.y(b,H.p(this,0))
if(H.j(a[b],"$isbn")!=null)return!1
a[b]=this.ac(b)
return!0},
b1:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isbn")
if(z==null)return!1
this.b5(z)
delete a[b]
return!0},
ab:function(){this.r=this.r+1&67108863},
ac:function(a){var z,y
z=new P.bn(H.y(a,H.p(this,0)))
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
bn:{"^":"c;a,0b,0c"},
iz:{"^":"c;a,b,0c,0d,$ti",
saT:function(a){this.d=H.y(a,H.p(this,0))},
gE:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aQ(z))
else{z=this.c
if(z==null){this.saT(null)
return!1}else{this.saT(H.y(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
p:{
dv:function(a,b,c){var z=new P.iz(a,b,[c])
z.c=a.e
return z}}},
it:{"^":"hu;"},
q:{"^":"c;$ti",
gC:function(a){return new H.fN(a,this.gl(a),0,[H.bp(this,a,"q",0)])},
u:function(a,b){return this.i(a,b)},
d0:function(a,b,c,d){var z,y,x
H.y(b,d)
H.k(c,{func:1,ret:d,args:[d,H.bp(this,a,"q",0)]})
z=this.gl(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gl(a))throw H.b(P.aQ(a))}return y},
j:function(a){return P.c4(a,"[","]")}},
fQ:{"^":"Y;"},
fR:{"^":"n:7;a,b",
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
H.k(b,{func:1,ret:-1,args:[H.bp(this,a,"Y",0),H.bp(this,a,"Y",1)]})
for(z=J.cC(this.gM(a));z.w();){y=z.gE(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.bc(this.gM(a))},
j:function(a){return P.d3(a)},
$isM:1},
hv:{"^":"c;$ti",
j:function(a){return P.c4(this,"{","}")},
$isl:1,
$islp:1},
hu:{"^":"hv;"}}],["","",,P,{"^":"",
cq:function(a,b,c){var z
H.z(a)
z=H.hi(a,c)
if(z!=null)return z
throw H.b(P.c1(a,null,null))},
aA:function(a,b){var z
H.z(a)
z=H.hh(a)
if(z!=null)return z
throw H.b(P.c1("Invalid double",a,null))},
fd:function(a){if(a instanceof H.n)return a.j(0)
return"Instance of '"+H.b0(a)+"'"},
d9:function(a,b,c){return new H.fD(a,H.d0(a,!1,!0,!1))},
bA:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.by(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fd(a)},
cX:function(a){return new P.ib(a)},
ag:function(a){H.aN(H.d(a))},
ci:{"^":"c;"},
"+bool":0,
aR:{"^":"c;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a&&this.b===b.b},
J:function(a,b){return C.f.J(this.a,H.j(b,"$isaR").a)},
gv:function(a){var z=this.a
return(z^C.f.b2(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.f6(H.hg(this))
y=P.bd(H.he(this))
x=P.bd(H.ha(this))
w=P.bd(H.hb(this))
v=P.bd(H.hd(this))
u=P.bd(H.hf(this))
t=P.f7(H.hc(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isV:1,
$asV:function(){return[P.aR]},
p:{
f6:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bd:function(a){if(a>=10)return""+a
return"0"+a}}},
ae:{"^":"H;"},
"+double":0,
aS:{"^":"c;a",
N:function(a,b){return C.f.N(this.a,H.j(b,"$isaS").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.f.J(this.a,H.j(b,"$isaS").a)},
j:function(a){var z,y,x,w,v
z=new P.fb()
y=this.a
if(y<0)return"-"+new P.aS(0-y).j(0)
x=z.$1(C.f.U(y,6e7)%60)
w=z.$1(C.f.U(y,1e6)%60)
v=new P.fa().$1(y%1e6)
return""+C.f.U(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isV:1,
$asV:function(){return[P.aS]},
p:{
cV:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fa:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fb:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"c;"},
bD:{"^":"N;",
j:function(a){return"Throw of null."}},
aD:{"^":"N;a,b,c,d",
gaf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gae:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gaf()+y+x
if(!this.a)return w
v=this.gae()
u=P.bA(this.b)
return w+v+": "+u},
p:{
eO:function(a){return new P.aD(!1,null,null,a)},
cL:function(a,b,c){return new P.aD(!0,a,b,c)}}},
d8:{"^":"aD;e,f,a,b,c,d",
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
hk:function(a,b,c,d,e){return new P.d8(b,c,!0,a,d,"Invalid value")}}},
ft:{"^":"aD;e,l:f>,a,b,c,d",
gaf:function(){return"RangeError"},
gae:function(){var z,y
z=H.t(this.b)
if(typeof z!=="number")return z.Y()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
I:function(a,b,c,d,e){var z=H.t(e==null?J.bc(b):e)
return new P.ft(b,z,!0,a,c,"Index out of range")}}},
hP:{"^":"N;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.hP(a)}}},
hN:{"^":"N;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cd:function(a){return new P.hN(a)}}},
de:{"^":"N;a",
j:function(a){return"Bad state: "+this.a},
p:{
cb:function(a){return new P.de(a)}}},
f_:{"^":"N;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bA(z)+"."},
p:{
aQ:function(a){return new P.f_(a)}}},
dd:{"^":"c;",
j:function(a){return"Stack Overflow"},
$isN:1},
f4:{"^":"N;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ib:{"^":"c;a",
j:function(a){return"Exception: "+this.a}},
fi:{"^":"c;a,b,c",
j:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.d(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.aE(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
c1:function(a,b,c){return new P.fi(a,b,c)}}},
E:{"^":"H;"},
"+int":0,
l:{"^":"c;$ti",
gl:function(a){var z,y
z=this.gC(this)
for(y=0;z.w();)++y
return y},
j:function(a){return P.fv(this,"(",")")}},
a:{"^":"c;$ti",$isl:1},
"+List":0,
M:{"^":"c;$ti"},
A:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
H:{"^":"c;",$isV:1,
$asV:function(){return[P.H]}},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.b_(this)},
j:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.j(this)}},
P:{"^":"c;"},
e:{"^":"c;",$isV:1,
$asV:function(){return[P.e]},
$isd7:1},
"+String":0,
cc:{"^":"c;P:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
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
if("postMessage" in a){z=W.i4(a)
if(!!J.D(z).$isL)return z
return}else return H.j(a,"$isL")},
ji:function(a){var z
if(!!J.D(a).$isc0)return a
z=new P.hU([],[],!1)
z.c=!0
return z.at(a)},
dL:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.C
if(z===C.e)return a
return z.cN(a,b)},
a2:{"^":"be;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
k3:{"^":"h;0l:length=","%":"AccessibleNodeList"},
k4:{"^":"a2;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
k5:{"^":"a2;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
eS:{"^":"h;","%":";Blob"},
bZ:{"^":"a2;0n:height=,0m:width=",
bT:function(a,b,c){var z=this.cw(a,b,P.ju(c,null))
return z},
cw:function(a,b,c){return a.getContext(b,c)},
$isbZ:1,
"%":"HTMLCanvasElement"},
ka:{"^":"h;",
a7:function(a){return P.a1(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kb:{"^":"G;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
f0:{"^":"c_;",$isf0:1,"%":"CSSNumericValue|CSSUnitValue"},
kc:{"^":"f2;0l:length=","%":"CSSPerspective"},
ai:{"^":"h;",$isai:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kd:{"^":"i2;0l:length=",
ax:function(a,b){var z=this.cz(a,this.cp(a,b))
return z==null?"":z},
cp:function(a,b){var z,y
z=$.e0()
y=z[b]
if(typeof y==="string")return y
y=this.cG(a,b)
z[b]=y
return y},
cG:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f8()+b
if(z in a)return z
return b},
cz:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f1:{"^":"c;",
gn:function(a){return this.ax(a,"height")},
gm:function(a){return this.ax(a,"width")}},
c_:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
f2:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kf:{"^":"c_;0l:length=","%":"CSSTransformValue"},
kg:{"^":"c_;0l:length=","%":"CSSUnparsedValue"},
ki:{"^":"h;0l:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
c0:{"^":"G;",
d8:function(a,b){return a.querySelector(b)},
gby:function(a){return new W.bm(a,"mousedown",!1,[W.Q])},
gbz:function(a){return new W.bm(a,"mousemove",!1,[W.Q])},
gbA:function(a){return new W.bm(a,"mouseup",!1,[W.Q])},
gbB:function(a){return new W.bm(a,H.z(W.cW(a)),!1,[W.aE])},
$isc0:1,
"%":"XMLDocument;Document"},
kj:{"^":"h;",
j:function(a){return String(a)},
"%":"DOMException"},
kk:{"^":"i6;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
f9:{"^":"h;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
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
kl:{"^":"i8;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
km:{"^":"h;0l:length=","%":"DOMTokenList"},
be:{"^":"G;",
j:function(a){return a.localName},
gby:function(a){return new W.bG(a,"mousedown",!1,[W.Q])},
gbz:function(a){return new W.bG(a,"mousemove",!1,[W.Q])},
gbA:function(a){return new W.bG(a,"mouseup",!1,[W.Q])},
gbB:function(a){return new W.bG(a,H.z(W.cW(a)),!1,[W.aE])},
$isbe:1,
"%":";Element"},
ko:{"^":"a2;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a_:{"^":"h;",$isa_:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
cJ:function(a,b,c,d){H.k(c,{func:1,args:[W.a_]})
if(c!=null)this.co(a,b,c,!1)},
co:function(a,b,c,d){return a.addEventListener(b,H.az(H.k(c,{func:1,args:[W.a_]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dA|dB|dD|dE"},
aj:{"^":"eS;",$isaj:1,"%":"File"},
kF:{"^":"id;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
kG:{"^":"L;0l:length=","%":"FileWriter"},
kJ:{"^":"a2;0l:length=","%":"HTMLFormElement"},
ak:{"^":"h;",$isak:1,"%":"Gamepad"},
kK:{"^":"h;0l:length=","%":"History"},
kL:{"^":"iv;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
fp:{"^":"c0;","%":"HTMLDocument"},
fq:{"^":"fr;",
dl:function(a,b,c,d,e,f){return a.open(b,c)},
d7:function(a,b,c){return a.open(b,c)},
bU:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
fr:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
kM:{"^":"a2;0n:height=,0m:width=","%":"HTMLIFrameElement"},
kN:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
kO:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
kP:{"^":"a2;0n:height=,0m:width=","%":"HTMLImageElement"},
kR:{"^":"a2;0n:height=,0m:width=","%":"HTMLInputElement"},
aV:{"^":"dl;",$isaV:1,"%":"KeyboardEvent"},
kX:{"^":"h;",
j:function(a){return String(a)},
"%":"Location"},
fT:{"^":"a2;","%":"HTMLAudioElement;HTMLMediaElement"},
kZ:{"^":"h;0l:length=","%":"MediaList"},
l_:{"^":"iB;",
i:function(a,b){return P.a1(a.get(H.z(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.e])
this.D(a,new W.fV(z))
return z},
gl:function(a){return a.size},
$asY:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"MIDIInputMap"},
fV:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},
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
"%":"MIDIOutputMap"},
fW:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},
an:{"^":"h;",$isan:1,"%":"MimeType"},
l1:{"^":"iE;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
if(!!a.offsetX)return new P.aZ(a.offsetX,a.offsetY,[P.H])
else{z=a.target
if(!J.D(W.dF(z)).$isbe)throw H.b(P.B("offsetX is only supported on elements"))
y=H.j(W.dF(z),"$isbe")
z=a.clientX
x=a.clientY
w=[P.H]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.aZ(u,v,w),"$isaZ",w,"$asaZ")
if(typeof z!=="number")return z.R()
if(typeof x!=="number")return x.R()
return new P.aZ(C.o.bE(z-u),C.o.bE(x-v),w)}},
$isQ:1,
"%":";DragEvent|MouseEvent"},
G:{"^":"L;",
j:function(a){var z=a.nodeValue
return z==null?this.bZ(a):z},
$isG:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
l8:{"^":"iG;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
la:{"^":"a2;0n:height=,0m:width=","%":"HTMLObjectElement"},
lc:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
ld:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ap:{"^":"h;0l:length=",$isap:1,"%":"Plugin"},
lf:{"^":"iK;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
lh:{"^":"Q;0n:height=,0m:width=","%":"PointerEvent"},
bk:{"^":"a_;",$isbk:1,"%":"ProgressEvent|ResourceProgressEvent"},
lm:{"^":"iQ;",
i:function(a,b){return P.a1(a.get(H.z(b)))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gM:function(a){var z=H.m([],[P.e])
this.D(a,new W.hr(z))
return z},
gl:function(a){return a.size},
$asY:function(){return[P.e,null]},
$isM:1,
$asM:function(){return[P.e,null]},
"%":"RTCStatsReport"},
hr:{"^":"n:2;a",
$2:function(a,b){return C.a.k(this.a,a)}},
ln:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lo:{"^":"a2;0l:length=","%":"HTMLSelectElement"},
aq:{"^":"L;",$isaq:1,"%":"SourceBuffer"},
lq:{"^":"dB;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
lr:{"^":"iS;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
lu:{"^":"iV;",
i:function(a,b){return this.aY(a,H.z(b))},
D:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.cB(a,z)
if(y==null)return
b.$2(y,this.aY(a,y))}},
gM:function(a){var z=H.m([],[P.e])
this.D(a,new W.hC(z))
return z},
gl:function(a){return a.length},
aY:function(a,b){return a.getItem(b)},
cB:function(a,b){return a.key(b)},
$asY:function(){return[P.e,P.e]},
$isM:1,
$asM:function(){return[P.e,P.e]},
"%":"Storage"},
hC:{"^":"n:17;a",
$2:function(a,b){return C.a.k(this.a,a)}},
at:{"^":"h;",$isat:1,"%":"CSSStyleSheet|StyleSheet"},
lx:{"^":"h;0m:width=","%":"TextMetrics"},
au:{"^":"L;",$isau:1,"%":"TextTrack"},
av:{"^":"L;",$isav:1,"%":"TextTrackCue|VTTCue"},
ly:{"^":"j_;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
lz:{"^":"dE;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
lA:{"^":"h;0l:length=","%":"TimeRanges"},
aw:{"^":"h;",$isaw:1,"%":"Touch"},
lB:{"^":"j4;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
lC:{"^":"h;0l:length=","%":"TrackDefaultList"},
dl:{"^":"a_;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
lP:{"^":"h;",
j:function(a){return String(a)},
"%":"URL"},
lR:{"^":"fT;0n:height=,0m:width=","%":"HTMLVideoElement"},
lS:{"^":"L;0l:length=","%":"VideoTrackList"},
lT:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
lU:{"^":"h;0m:width=","%":"VTTRegion"},
aE:{"^":"Q;",
gcV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
$isaE:1,
"%":"WheelEvent"},
hR:{"^":"L;",
gcK:function(a){var z,y,x
z=P.H
y=new P.O(0,$.C,[z])
x=H.k(new W.hS(new P.iY(y,[z])),{func:1,ret:-1,args:[P.H]})
this.cu(a)
this.cD(a,W.dL(x,z))
return y},
cD:function(a,b){return a.requestAnimationFrame(H.az(H.k(b,{func:1,ret:-1,args:[P.H]}),1))},
cu:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdm:1,
"%":"DOMWindow|Window"},
hS:{"^":"n:18;a",
$1:function(a){var z=this.a
a=H.aK(H.ct(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.T(P.cb("Future already completed"))
z.ad(a)}},
m_:{"^":"j9;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
m0:{"^":"f9;",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
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
m1:{"^":"jb;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
m2:{"^":"jd;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
m3:{"^":"jf;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
m4:{"^":"jh;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
bm:{"^":"hD;a,b,c,$ti"},
bG:{"^":"bm;a,b,c,$ti"},
i9:{"^":"hE;a,b,c,d,e,$ti",p:{
ab:function(a,b,c,d,e){var z=W.dL(new W.ia(c),W.a_)
if(z!=null&&!0)J.eh(a,b,z,!1)
return new W.i9(0,a,b,z,!1,[e])}}},
ia:{"^":"n:19;a",
$1:function(a){return this.a.$1(H.j(a,"$isa_"))}},
r:{"^":"c;$ti",
gC:function(a){return new W.fe(a,this.gl(a),-1,[H.bp(this,a,"r",0)])}},
fe:{"^":"c;a,b,c,0d,$ti",
saW:function(a){this.d=H.y(a,H.p(this,0))},
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saW(J.bb(this.a,z))
this.c=z
return!0}this.saW(null)
this.c=y
return!1},
gE:function(a){return this.d}},
i3:{"^":"c;a",$isL:1,$isdm:1,p:{
i4:function(a){if(a===window)return H.j(a,"$isdm")
else return new W.i3(a)}}},
i2:{"^":"h+f1;"},
i5:{"^":"h+q;"},
i6:{"^":"i5+r;"},
i7:{"^":"h+q;"},
i8:{"^":"i7+r;"},
ic:{"^":"h+q;"},
id:{"^":"ic+r;"},
iu:{"^":"h+q;"},
iv:{"^":"iu+r;"},
iB:{"^":"h+Y;"},
iC:{"^":"h+Y;"},
iD:{"^":"h+q;"},
iE:{"^":"iD+r;"},
iF:{"^":"h+q;"},
iG:{"^":"iF+r;"},
iJ:{"^":"h+q;"},
iK:{"^":"iJ+r;"},
iQ:{"^":"h+Y;"},
dA:{"^":"L+q;"},
dB:{"^":"dA+r;"},
iR:{"^":"h+q;"},
iS:{"^":"iR+r;"},
iV:{"^":"h+Y;"},
iZ:{"^":"h+q;"},
j_:{"^":"iZ+r;"},
dD:{"^":"L+q;"},
dE:{"^":"dD+r;"},
j3:{"^":"h+q;"},
j4:{"^":"j3+r;"},
j8:{"^":"h+q;"},
j9:{"^":"j8+r;"},
ja:{"^":"h+q;"},
jb:{"^":"ja+r;"},
jc:{"^":"h+q;"},
jd:{"^":"jc+r;"},
je:{"^":"h+q;"},
jf:{"^":"je+r;"},
jg:{"^":"h+q;"},
jh:{"^":"jg+r;"}}],["","",,P,{"^":"",
a1:function(a){var z,y,x,w,v
if(a==null)return
z=P.X(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=H.z(y[w])
z.h(0,v,a[v])}return z},
ju:function(a,b){var z={}
a.D(0,new P.jv(z))
return z},
jw:function(a){var z,y
z=new P.O(0,$.C,[null])
y=new P.dp(z,[null])
a.then(H.az(new P.jx(y),1))["catch"](H.az(new P.jy(y),1))
return z},
cU:function(){var z=$.cT
if(z==null){z=J.bS(window.navigator.userAgent,"Opera",0)
$.cT=z}return z},
f8:function(){var z,y
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
hT:{"^":"c;",
bu:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.k(z,a)
C.a.k(this.b,null)
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
return new P.aR(y,!0)}if(a instanceof RegExp)throw H.b(P.cd("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.jw(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bu(a)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.fL()
z.a=u
C.a.h(x,v,u)
this.d1(a,new P.hV(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bu(t)
x=this.b
if(v>=x.length)return H.f(x,v)
u=x[v]
if(u!=null)return u
s=J.aL(t)
r=s.gl(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.cn(u),q=0;q<r;++q)x.h(u,q,this.at(s.i(t,q)))
return u}return a}},
hV:{"^":"n:20;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.at(b)
J.eg(z,a,y)
return y}},
jv:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}},
hU:{"^":"hT;a,b,c",
d1:function(a,b){var z,y,x,w
H.k(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.J)(z),++x){w=z[x]
b.$2(w,a[w])}}},
jx:{"^":"n:9;a",
$1:function(a){return this.a.bj(0,a)}},
jy:{"^":"n:9;a",
$1:function(a){return this.a.cQ(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dt:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aZ:{"^":"c;a6:a>,X:b>,$ti",
j:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.ac(b,"$isaZ",[P.H],null)&&this.a==J.bx(b)&&this.b==b.gX(b)},
gv:function(a){var z,y,x
z=J.ah(this.a)
y=J.ah(this.b)
y=P.dt(P.dt(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
iL:{"^":"c;"},
S:{"^":"iL;$ti"}}],["","",,P,{"^":"",eN:{"^":"h;",$iseN:1,"%":"SVGAnimatedLength"},kp:{"^":"K;0n:height=,0m:width=","%":"SVGFEBlendElement"},kq:{"^":"K;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kr:{"^":"K;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},ks:{"^":"K;0n:height=,0m:width=","%":"SVGFECompositeElement"},kt:{"^":"K;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},ku:{"^":"K;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},kv:{"^":"K;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},kw:{"^":"K;0n:height=,0m:width=","%":"SVGFEFloodElement"},kx:{"^":"K;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},ky:{"^":"K;0n:height=,0m:width=","%":"SVGFEImageElement"},kz:{"^":"K;0n:height=,0m:width=","%":"SVGFEMergeElement"},kA:{"^":"K;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},kB:{"^":"K;0n:height=,0m:width=","%":"SVGFEOffsetElement"},kC:{"^":"K;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},kD:{"^":"K;0n:height=,0m:width=","%":"SVGFETileElement"},kE:{"^":"K;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},kH:{"^":"K;0n:height=,0m:width=","%":"SVGFilterElement"},kI:{"^":"bf;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fo:{"^":"bf;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bf:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},kQ:{"^":"bf;0n:height=,0m:width=","%":"SVGImageElement"},aW:{"^":"h;",$isaW:1,"%":"SVGLength"},kW:{"^":"ix;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.j(c,"$isaW")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asq:function(){return[P.aW]},
$isl:1,
$asl:function(){return[P.aW]},
$isa:1,
$asa:function(){return[P.aW]},
$asr:function(){return[P.aW]},
"%":"SVGLengthList"},kY:{"^":"K;0n:height=,0m:width=","%":"SVGMaskElement"},aY:{"^":"h;",$isaY:1,"%":"SVGNumber"},l9:{"^":"iI;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
"%":"SVGNumberList"},le:{"^":"K;0n:height=,0m:width=","%":"SVGPatternElement"},lg:{"^":"h;0l:length=","%":"SVGPointList"},li:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lj:{"^":"fo;0n:height=,0m:width=","%":"SVGRectElement"},lv:{"^":"iX;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
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
"%":"SVGStringList"},K:{"^":"be;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lw:{"^":"bf;0n:height=,0m:width=","%":"SVGSVGElement"},b1:{"^":"h;",$isb1:1,"%":"SVGTransform"},lD:{"^":"j6;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.j(c,"$isb1")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asq:function(){return[P.b1]},
$isl:1,
$asl:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$asr:function(){return[P.b1]},
"%":"SVGTransformList"},lQ:{"^":"bf;0n:height=,0m:width=","%":"SVGUseElement"},iw:{"^":"h+q;"},ix:{"^":"iw+r;"},iH:{"^":"h+q;"},iI:{"^":"iH+r;"},iW:{"^":"h+q;"},iX:{"^":"iW+r;"},j5:{"^":"h+q;"},j6:{"^":"j5+r;"}}],["","",,P,{"^":"",a9:{"^":"c;",$isl:1,
$asl:function(){return[P.ae]},
$isa:1,
$asa:function(){return[P.ae]},
$ishL:1}}],["","",,P,{"^":"",k6:{"^":"h;0l:length=","%":"AudioBuffer"},k7:{"^":"i1;",
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
$2:function(a,b){return C.a.k(this.a,a)}},k8:{"^":"L;0l:length=","%":"AudioTrackList"},eR:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lb:{"^":"eR;0l:length=","%":"OfflineAudioContext"},i1:{"^":"h+Y;"}}],["","",,P,{"^":"",eT:{"^":"h;",$iseT:1,"%":"WebGLBuffer"},fk:{"^":"h;",$isfk:1,"%":"WebGLFramebuffer"},hj:{"^":"h;",$ishj:1,"%":"WebGLProgram"},lk:{"^":"h;",
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
av:function(a,b){return a.getProgramInfoLog(b)},
aw:function(a,b,c){return a.getProgramParameter(b,c)},
ay:function(a,b){return a.getShaderInfoLog(b)},
az:function(a,b,c){return a.getShaderParameter(b,c)},
aA:function(a,b,c){return a.getUniformLocation(b,c)},
bv:function(a,b){return a.linkProgram(b)},
aC:function(a,b,c){return a.shaderSource(b,c)},
aD:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
"%":"WebGLRenderingContext"},ll:{"^":"h;",
cL:function(a,b){return a.beginTransformFeedback(b)},
cO:function(a,b){return a.bindVertexArray(b)},
cU:function(a){return a.createVertexArray()},
cW:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cX:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
d_:function(a){return a.endTransformFeedback()},
df:function(a,b,c,d){this.cH(a,b,H.w(c,"$isa",[P.e],"$asa"),d)
return},
cH:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dh:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
av:function(a,b){return a.getProgramInfoLog(b)},
aw:function(a,b,c){return a.getProgramParameter(b,c)},
ay:function(a,b){return a.getShaderInfoLog(b)},
az:function(a,b,c){return a.getShaderParameter(b,c)},
aA:function(a,b,c){return a.getUniformLocation(b,c)},
bv:function(a,b){return a.linkProgram(b)},
aC:function(a,b,c){return a.shaderSource(b,c)},
aD:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
"%":"WebGL2RenderingContext"},hw:{"^":"h;",$ishw:1,"%":"WebGLShader"},hI:{"^":"h;",$ishI:1,"%":"WebGLTexture"},hM:{"^":"h;",$ishM:1,"%":"WebGLUniformLocation"},hQ:{"^":"h;",$ishQ:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",ls:{"^":"iU;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.I(b,a,null,null,null))
return P.a1(this.cA(a,b))},
h:function(a,b,c){H.t(b)
H.j(c,"$isM")
throw H.b(P.B("Cannot assign element of immutable List."))},
u:function(a,b){return this.i(a,b)},
cA:function(a,b){return a.item(b)},
$asq:function(){return[[P.M,,,]]},
$isl:1,
$asl:function(){return[[P.M,,,]]},
$isa:1,
$asa:function(){return[[P.M,,,]]},
$asr:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},iT:{"^":"h+q;"},iU:{"^":"iT+r;"}}],["","",,G,{"^":"",
hW:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
C.a.h(z,y,w+H.d(z[y]))}return C.a.W(z,"\n")},
dq:function(a,b,c){var z,y,x,w
z=J.o(a)
y=z.bm(a,b)
z.aC(a,y,c)
z.bi(a,y)
x=H.cj(z.az(a,y,35713))
if(x!=null&&!x){w=z.ay(a,y)
P.ag("E:Compilation failed:")
P.ag("E:"+G.hW(c))
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
fg:function(a,b){var z,y
H.w(a,"$isa",[T.v],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bx(a[y]))
if(y>=a.length)return H.f(a,y)
C.b.h(b,z+1,J.bV(a[y]))}return b},
fh:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.b4],"$asa")
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
ff:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.h(b,z,J.bb(a[y],0))
if(y>=a.length)return H.f(a,y)
C.m.h(b,z+1,J.bb(a[y],1))
if(y>=a.length)return H.f(a,y)
C.m.h(b,z+2,J.bb(a[y],2))
if(y>=a.length)return H.f(a,y)
C.m.h(b,z+3,J.bb(a[y],3))}return b},
is:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.al(z,[H.p(z,0)]),y=y.gC(y),x=b.x,w=[[P.a,P.E]],v=[P.ae],u=[T.b4],t=[T.i],s=[T.v];y.w();){r=y.d
if(!x.a4(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.dR>0)H.aN("I: "+r)
continue}q=z.i(0,r)
switch($.a4().i(0,r).a){case"vec2":b.S(r,G.fg(H.bt(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.S(r,G.cY(H.bt(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.S(r,G.fh(H.bt(q,"$isa",u,"$asa"),null),4)
break
case"float":b.S(r,new Float32Array(H.bJ(H.bt(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.S(r,G.ff(H.bt(q,"$isa",w,"$asa"),null),4)
break}}},
aX:{"^":"c;"},
b2:{"^":"aX;d,a,b,c",
aI:function(){return this.d},
j:function(a){var z,y,x,w
z=H.m(["{"+new H.dk(H.jD(this)).j(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.al(y,[H.p(y,0)]),x=x.gC(x);x.w();){w=x.d
C.a.k(z,H.d(w)+": "+H.d(y.i(0,w)))}return C.a.W(z,"\n")}},
eV:{"^":"c;0a,b",
cY:function(a,b,c){J.cB(this.a,b)
if(c>0)J.eL(this.a,b,c)},
di:function(a,b,c,d,e,f,g,h){J.bu(this.a,34962,b)
J.cK(this.a,c,d,e,!1,g,h)}},
fj:{"^":"c;a,b,c,d,e"},
aT:{"^":"c;a,b,c"},
aU:{"^":"c;a,b,c,d"},
c3:{"^":"c;a,b,c,d,e",
a_:function(a){switch($.a4().i(0,a).a){case"vec2":this.e.h(0,a,H.m([],[T.v]))
break
case"vec3":this.e.h(0,a,H.m([],[T.i]))
break
case"vec4":this.e.h(0,a,H.m([],[T.b4]))
break
case"float":this.e.h(0,a,H.m([],[P.ae]))
break
case"uvec4":this.e.h(0,a,H.m([],[[P.a,P.E]]))
break}},
c3:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.k(y,new G.aU(z,z+1,z+2,z+3))},
Z:function(a){var z,y,x,w,v
H.w(a,"$isa",[T.i],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.J)(a),++x){w=a[x]
v=new T.i(new Float32Array(3))
v.A(w)
C.a.k(y,v)}},
aa:function(a,b){var z,y,x,w,v,u,t
z=[T.v]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.k(y,new T.v(u))}},
c2:function(a,b){var z,y,x,w,v,u
z=[T.i]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new T.i(new Float32Array(3))
u.A(v)
x.k(y,u)}},
c9:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.m(x,[P.E])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.J)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.J)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
ca:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.d
y=new Array(z.length)
y.fixed$length=Array
x=H.m(y,[T.i])
w=new T.i(new Float32Array(3))
v=new T.i(new Float32Array(3))
for(y=this.b,u=y.length,t=0;t<y.length;y.length===u||(0,H.J)(y),++t){s=y[t]
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
C.a.h(x,m,r)}for(y=this.c,u=y.length,t=0;t<y.length;y.length===u||(0,H.J)(y),++t){l=y[t]
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
j:function(a){var z,y,x,w,v
z=H.m(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.al(y,[H.p(y,0)]),x=x.gC(x);x.w();){w=x.d
v=$.a4().i(0,w).a
C.a.k(z,H.d(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.W(z," ")}},
di:{"^":"c;a,b,c"},
dh:{"^":"c;a,b,c"},
fS:{"^":"b2;d,a,b,c"},
fU:{"^":"aX;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sag:function(a){this.cx=H.w(a,"$isa",[P.E],"$asa")},
aG:function(a,b,c){var z,y
C.h.T(a,0)
H.j(b,"$isa9")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.bu(z.a,34962,y)
J.cA(z.a,34962,b,35048)},
cb:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
S:function(a,b,c){var z,y,x,w,v
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
x.cY(0,v,z?1:0)
x.di(0,y.i(0,a),v,w.aH(),5126,!1,0,0)},
j:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.al(z,[H.p(z,0)]),x=x.gC(x);x.w();){w=x.d
C.a.k(y,H.d(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.W(y,"  ")}},
h7:{"^":"b2;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
c5:function(a,b){var z
if(typeof a!=="number")return a.dk()
if(typeof b!=="number")return H.br(b)
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
aI:function(){var z,y,x
z=this.x
y=this.d
y.h(0,"uEyePosition",z.au())
x=this.cy
x.A(z.d)
z=this.cx
z.A(this.db)
z.bw(0,x)
y.h(0,"uPerspectiveViewMatrix",z)
return y}},
kn:{"^":"c;"},
hp:{"^":"aX;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cg:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.h(0,t,J.cE(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.h(0,t,J.cE(w.a,v,t))}},
cj:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.e])
x=H.m([],[P.e])
for(y=new H.al(y,[H.p(y,0)]),y=y.gC(y);y.w();){w=y.d
if(!z.a4(0,w))C.a.k(x,w)}for(z=this.x,z=P.dv(z,z.r,H.p(z,0)),y=this.Q;z.w();){w=z.d
if(!y.H(0,w))C.a.k(x,w)}return x},
ck:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isM",[P.e,P.c],"$asM")
z=Date.now()
for(y=new H.al(b,[H.p(b,0)]),y=y.gC(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.w();){s=y.d
switch(J.cw(s,0)){case 117:if(w.a4(0,s)){r=b.i(0,s)
if(v.a4(0,s))H.aN("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a4().i(0,s)
if(q==null)H.T("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.t(r)
J.bW(x.a,p,r)}else if(!!J.D(r).$isfu)J.eJ(x.a,p,r)
break
case"float":if(q.c===0){H.dP(r)
J.eH(x.a,p,r)}else if(!!J.D(r).$isa9)J.eI(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.af(r,"$isaa").a
J.cJ(x.a,p,!1,s)}else if(!!J.D(r).$isa9)J.cJ(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.af(r,"$isbC").a
J.cI(x.a,p,!1,s)}else if(!!J.D(r).$isa9)J.cI(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cH(o,p,H.af(r,"$isb4").a)
else J.cH(o,p,H.j(r,"$isa9"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cG(o,p,H.af(r,"$isi").a)
else J.cG(o,p,H.j(r,"$isa9"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cF(o,p,H.af(r,"$isv").a)
else J.cF(o,p,H.j(r,"$isa9"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.br(s)
J.cx(x.a,33984+s)
s=H.af(r,"$ishH").cc()
J.cz(x.a,3553,s)
s=this.ch
J.bW(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.br(s)
J.cx(x.a,33984+s)
s=H.af(r,"$ishH").cc()
J.cz(x.a,34067,s)
s=this.ch
J.bW(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
default:H.aN("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.U(r,!0)
o=x.a
if(s)J.bw(o,2929)
else J.bU(o,2929)
break
case"cStencilFunc":H.af(r,"$isdi")
s=r.a
o=x.a
if(s===1281)J.bU(o,2960)
else{J.bw(o,2960)
o=r.b
n=r.c
J.eE(x.a,s,o,n)}break
case"cDepthWrite":H.cj(r)
J.er(x.a,r)
break
case"cBlendEquation":H.af(r,"$isdh")
s=r.a
o=x.a
if(s===1281)J.bU(o,3042)
else{J.bw(o,3042)
o=r.b
n=r.c
J.el(x.a,o,n)
J.ek(x.a,s)}break}++t
break}}m=P.cV(0,0,0,Date.now()-new P.aR(z,!1).a,0,0)
""+t
m.j(0)},
c8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.b2],"$asa")
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
y.aZ()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.J)(b),++x){w=b[x]
this.ck(w.a,w.aI())}y=this.Q
y.V(0)
for(v=a.cy,v=new H.al(v,[H.p(v,0)]),v=v.gC(v);v.w();)y.k(0,v.d)
u=this.cj()
if(u.length!==0)P.ag("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
J.bv(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cb()
s=a.Q
r=a.z
if(t)J.ei(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.ev(q,y,v,s,0,r)
else J.eu(q,y,v,s,0)}else{s=z.a
if(r>1)J.et(s,y,0,v,r)
else J.es(s,y,0,v)}if(t)J.ew(z.a)},
p:{
hq:function(a,b,c,d){var z,y,x,w,v,u,t,s
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
z=new G.hp(b,c,d,u,P.fM(c.c,z),P.X(z,P.c),P.X(z,z),y,a,!1,!0)
z.cg(a,b,c,d)
return z}}},
F:{"^":"c;a,b,c",
aH:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hx:{"^":"c;a,0b,c,d,e,f,r,x",
c1:function(a){var z,y,x,w
H.w(a,"$isa",[P.e],"$asa")
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
C.a.k(z,w)
y.h(0,w,this.r);++this.r}C.a.a8(z)},
c4:function(a){var z,y
H.w(a,"$isa",[P.e],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.k(z,a[y])
C.a.a8(z)},
aF:function(a){var z,y
H.w(a,"$isa",[P.e],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.k(z,a[y])
C.a.a8(z)},
ci:function(a,b){this.b=this.cl(!1,H.w(a,"$isa",[P.e],"$asa"),b)},
aJ:function(a){return this.ci(a,null)},
cl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.J)(y),++u){t=y[u]
s=$.a4().i(0,t)
C.a.k(w,"layout (location="+H.d(v.i(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.k(w,"")
r=x?"in":"out"
if(x)C.a.k(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a4().i(0,q)
C.a.k(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a4().i(0,q)
C.a.k(w,r+" "+s.a+" "+H.d(q)+";")}C.a.k(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a4().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.k(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.k(w,"")
C.a.cI(w,b)
return C.a.W(w,"\n")},
p:{
db:function(a){var z,y
z=P.e
y=[z]
return new G.hx(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.X(z,P.E))}}},
dc:{"^":"aX;",
au:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
bV:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,Y,{"^":"",
fs:function(a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=H.m([],[G.aT])
y=H.m([],[G.aU])
x=[T.i]
w=H.m([],x)
v=P.e
u=new G.c3(!1,z,y,w,P.X(v,[P.a,,]))
u.a_("aTexUV")
u.a_("aNormal")
t=P.X(v,P.E)
s=a5.split("\n")
r=H.m([],x)
q=H.m([],x)
v=[T.v]
p=H.m([],v)
o=Date.now()
n=P.d9("\\s+",!0,!1)
m=P.d9("\\s\\s*\\$",!0,!1)
for(l=s.length,k=0;k<s.length;s.length===l||(0,H.J)(s),++k){j=s[k]
j.toString
i=H.jY(j,n," ")
h=H.k_(i,m,"",0)
i=h.length
if(i!==0){if(0>=i)return H.f(h,0)
i=h[0]==="#"}else i=!0
if(i)continue
g=h.split(" ")
i=g.length
if(0>=i)return H.f(g,0)
f=g[0]
if(J.U(f,"g")){if(1>=i)return H.f(g,1)
t.h(0,g[1],r.length)}else if(J.U(f,"v")){if(1>=i)return H.f(g,1)
f=P.aA(g[1],null)
if(2>=i)return H.f(g,2)
e=P.aA(g[2],null)
if(3>=i)return H.f(g,3)
i=P.aA(g[3],null)
d=new Float32Array(3)
C.b.h(d,0,f)
C.b.h(d,1,e)
C.b.h(d,2,i)
C.a.k(r,new T.i(d))}else if(J.U(f,"vt")){if(1>=i)return H.f(g,1)
f=P.aA(g[1],null)
if(2>=i)return H.f(g,2)
i=P.aA(g[2],null)
e=new Float32Array(2)
C.b.h(e,0,f)
C.b.h(e,1,i)
C.a.k(p,new T.v(e))}else if(J.U(f,"vn")){if(1>=i)return H.f(g,1)
f=P.aA(g[1],null)
if(2>=i)return H.f(g,2)
e=P.aA(g[2],null)
if(3>=i)return H.f(g,3)
i=P.aA(g[3],null)
d=new Float32Array(3)
C.b.h(d,0,f)
C.b.h(d,1,e)
C.b.h(d,2,i)
C.a.k(q,new T.i(d))}else if(J.U(f,"f")){if(i!==4&&i!==5){H.aN("*** Error: face '"+h+"' not handled")
continue}c=H.m([],x)
b=H.m([],x)
a=H.m([],v)
for(a0=1;i=g.length,a0<i;++a0){a1=J.eD(g[a0],"/")
for(;a1.length<3;)C.a.k(a1,"")
i=P.cq(a1[0],null,null)
if(typeof i!=="number")return i.R()
a2=i-1
if(1>=a1.length)return H.f(a1,1)
if(J.U(a1[1],""))a3=-1
else{if(1>=a1.length)return H.f(a1,1)
i=P.cq(a1[1],null,null)
if(typeof i!=="number")return i.R()
a3=i-1}if(2>=a1.length)return H.f(a1,2)
if(J.U(a1[2],""))a4=-1
else{if(2>=a1.length)return H.f(a1,2)
i=P.cq(a1[2],null,null)
if(typeof i!=="number")return i.R()
a4=i-1}i=r.length
if(a2<i){if(a2<0)return H.f(r,a2)
C.a.k(c,r[a2])}else C.a.k(c,new T.i(new Float32Array(3)))
if(a3!==-1&&a3<p.length){if(a3<0||a3>=p.length)return H.f(p,a3)
C.a.k(a,p[a3])}else{H.aN("problem uv "+a0+" "+a3)
C.a.k(a,new T.v(new Float32Array(2)))}if(a4!==-1&&a4<q.length){if(a4<0||a4>=q.length)return H.f(q,a4)
C.a.k(b,q[a4])}else{H.aN("problem normals "+a0+" "+a4)
C.a.k(b,new T.i(new Float32Array(3)))}}a0=w.length
f=a0+1
e=a0+2
if(i===4){H.w(c,"$isa",x,"$asa")
C.a.k(z,new G.aT(a0,f,e))
u.Z(c)}else{H.w(c,"$isa",x,"$asa")
C.a.k(y,new G.aU(a0,f,e,a0+3))
u.Z(c)}u.c2("aNormal",b)
u.aa("aTexUV",a)}}P.ag("loaded ("+P.cV(0,0,0,Date.now()-new P.aR(o,!1).a,0,0).j(0)+") "+u.j(0))
return u}}],["","",,R,{"^":"",ho:{"^":"hn;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
da:[function(a){var z,y,x
z=this.db
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ag("size change "+H.d(y)+" "+H.d(x))
this.dx.c5(y,x)
this.z=y
this.Q=x},"$1","gd9",4,0,21]}}],["","",,A,{"^":"",
dQ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(e,"$isa",[G.b2],"$asa")
z=b.dx
z.A(c)
y=b.d
z.bw(0,y)
x=b.cx
H.d(b)
w=C.a.gd5(e)
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
v.cT(new T.bC(u))
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
C.a.k(e,b.ch)
a.c8(x,e,d)
if(0>=e.length)return H.f(e,-1)
e.pop()
for(y=b.cy,r=0;!1;++r){if(r>=0)return H.f(y,r)
A.dQ(a,y[r],z,d,e)}},
ca:{"^":"dc;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
j:function(a){return"NODE["+this.a+"]"}},
da:{"^":"aX;d,e,f,a,b,c"},
hn:{"^":"aX;",
cf:function(a,b,c){if(this.d==null)this.d=new G.fj(this.e,null,null,null,null)},
c7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.ej(v.a,36160,z)
J.eM(v.a,this.x,this.y,x,w)
if(y!==0)J.em(v.a,y)
for(z=this.f,y=z.length,x=P.e,w=P.c,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
s=t.e
C.a.k(s,new G.b2(P.X(x,w),"transforms",!1,!0))
r=new T.aa(new Float32Array(16))
r.O()
for(v=t.f,q=v.length,p=t.d,o=0;o<v.length;v.length===q||(0,H.J)(v),++o)A.dQ(p,v[o],r,a,s)
if(0>=s.length)return H.f(s,-1)
s.pop()}},
c6:function(){return this.c7(null)}}}],["","",,B,{"^":"",
f3:function(a3,a4,a5,a6,a7,a8,a9,b0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
a2=new G.c3(!1,H.m([],[G.aT]),H.m([],[G.aU]),H.m([],t),P.X(P.e,[P.a,,]))
a2.a_("aTexUV")
a2.c3(6)
a2.Z(a0)
a2.aa("aTexUV",a1)
return a2},
f5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=c/2
y=[T.i]
x=H.m([],y)
w=H.m([],[T.v])
v=new T.i(new Float32Array(3))
v.q(0,z,0)
C.a.k(x,v)
v=new T.v(new Float32Array(2))
v.t(0,0)
C.a.k(w,v)
v=-z
u=new T.i(new Float32Array(3))
u.q(0,v,0)
C.a.k(x,u)
u=new T.v(new Float32Array(2))
u.t(1,1)
C.a.k(w,u)
for(t=0;t<d;++t){s=t/d
u=s*3.141592653589793*2
r=Math.sin(u)
q=Math.cos(u)
u=new Float32Array(3)
u[0]=r*a
u[1]=z
u[2]=q*a
C.a.k(x,new T.i(u))
u=new Float32Array(2)
u[0]=s
u[1]=1
C.a.k(w,new T.v(u))
u=new Float32Array(3)
u[0]=r*b
u[1]=v
u[2]=q*b
C.a.k(x,new T.i(u))
u=new Float32Array(2)
u[0]=s
u[1]=0
C.a.k(w,new T.v(u))}v=H.m([],[G.aT])
u=H.m([],[G.aU])
p=new G.c3(!1,v,u,H.m([],y),P.X(P.e,[P.a,,]))
p.a_("aTexUV")
p.Z(x)
p.aa("aTexUV",w)
for(t=0;t<d;t=m){o=t*2+2
n=o+1
m=t+1
l=(m===d?0:m)*2+2
k=l+1
C.a.k(v,new G.aT(0,o,l))
C.a.k(v,new G.aT(1,k,n))
C.a.k(u,new G.aU(l,o,n,k))}return p}}],["","",,D,{"^":"",
fO:function(a){var z,y,x,w
z=P.e
y=new P.O(0,$.C,[z])
x=new XMLHttpRequest()
C.q.d7(x,"GET",a)
w=W.bk
W.ab(x,"loadend",H.k(new D.fP(new P.dp(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.q.bU(x,"")
return y},
fP:{"^":"n:22;a,b",
$1:function(a){H.j(a,"$isbk")
this.a.bj(0,H.aK(W.ji(this.b.response),{futureOr:1,type:P.e}))}},
fF:{"^":"c;a,b,c",
cd:function(a){var z,y
a=document
z=W.aV
y={func:1,ret:-1,args:[z]}
W.ab(a,"keydown",H.k(new D.fH(this),y),!1,z)
W.ab(a,"keyup",H.k(new D.fI(this),y),!1,z)},
p:{
fG:function(a){var z=P.E
z=new D.fF(P.am(null,null,null,z),P.am(null,null,null,z),P.am(null,null,null,z))
z.cd(a)
return z}}},
fH:{"^":"n:10;a",
$1:function(a){var z
H.j(a,"$isaV")
z=this.a
z.a.k(0,a.which)
z.b.k(0,a.which)}},
fI:{"^":"n:10;a",
$1:function(a){var z
H.j(a,"$isaV")
z=this.a
z.a.bC(0,a.which)
z.c.k(0,a.which)}},
fX:{"^":"c;a,b,c,d,e,f,r,x",
ce:function(a){var z,y,x
if(a==null)a=document
z=J.o(a)
y=z.gbz(a)
x=H.p(y,0)
W.ab(y.a,y.b,H.k(new D.fZ(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gby(a)
y=H.p(x,0)
W.ab(x.a,x.b,H.k(new D.h_(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbA(a)
x=H.p(y,0)
W.ab(y.a,y.b,H.k(new D.h0(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbB(a)
x=H.p(z,0)
W.ab(z.a,z.b,H.k(new D.h1(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
fY:function(a){var z=P.E
z=new D.fX(P.am(null,null,null,z),P.am(null,null,null,z),P.am(null,null,null,z),0,0,0,0,0)
z.ce(a)
return z}}},
fZ:{"^":"n:3;a",
$1:function(a){var z,y
H.j(a,"$isQ")
a.preventDefault()
z=this.a
y=J.o(a)
z.r=H.t(y.gbx(a).a)
z.x=H.t(y.gbx(a).b)
z.d=a.movementX
z.e=a.movementY}},
h_:{"^":"n:3;a",
$1:function(a){var z
H.j(a,"$isQ")
a.preventDefault()
P.ag("BUTTON "+H.d(a.button))
z=this.a
z.a.k(0,a.button)
z.b.k(0,a.button)}},
h0:{"^":"n:3;a",
$1:function(a){var z
H.j(a,"$isQ")
a.preventDefault()
z=this.a
z.a.bC(0,a.button)
z.c.k(0,a.button)}},
h1:{"^":"n:23;a",
$1:function(a){H.j(a,"$isaE")
a.preventDefault()
this.a.f=H.t(C.a_.gcV(a))}},
h6:{"^":"dc;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bq:function(a){var z,y
z=C.b.d0(H.w(a,"$isl",[P.c],"$asl"),0,new A.jF(),P.E)
if(typeof z!=="number")return H.br(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jF:{"^":"n:24;",
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
j:function(a){return"[0] "+this.K(0).j(0)+"\n[1] "+this.K(1).j(0)+"\n[2] "+this.K(2).j(0)+"\n"},
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
gv:function(a){return A.bq(this.a)},
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
cT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
j:function(a){return"[0] "+this.K(0).j(0)+"\n[1] "+this.K(1).j(0)+"\n[2] "+this.K(2).j(0)+"\n[3] "+this.K(3).j(0)+"\n"},
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
gv:function(a){return A.bq(this.a)},
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
return new T.b4(z)},
O:function(){var z=this.a
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
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.v){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bq(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.f(z,b)
return z[b]},
gl:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga6:function(a){return this.a[0]},
gX:function(a){return this.a[1]}},i:{"^":"c;a",
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
j:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.i){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bq(this.a)},
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
ga6:function(a){return this.a[0]},
gX:function(a){return this.a[1]},
gbR:function(a){return this.a[2]}},b4:{"^":"c;a",
j:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b4){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bq(this.a)},
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
ga6:function(a){return this.a[0]},
gX:function(a){return this.a[1]},
gbR:function(a){return this.a[2]},
gdj:function(a){return this.a[3]}}}],["","",,N,{"^":"",
dV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=H.j(C.A.d8(document,"#webgl-canvas"),"$isbZ")
x=new G.eV(y)
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
t=D.fG(null)
s=D.fY(y)
r=new T.aa(new Float32Array(16))
r.O()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.h6(25,-45,0.3,0,new T.i(u),-0.02,t,s,r,new T.i(q),new T.i(p),new T.i(o),new T.i(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.aa(new Float32Array(16))
u.O()
t=new T.aa(new Float32Array(16))
t.O()
m=new G.h7(n,50,1,0.1,2520,u,t,new T.aa(new Float32Array(16)),P.X(w,v),"perspective",!1,!0)
m.aK()
u=H.m([],[A.da])
l=new R.ho(y,m,null,x,u,17664,0,0,0,0,"main",!1,!0)
l.cf("main",x,null)
l.da(null)
t=W.a_
W.ab(window,"resize",H.k(l.gd9(),{func:1,ret:-1,args:[t]}),!1,t)
t=G.hq("test",x,$.ef(),$.ee())
s=H.m([m],[G.b2])
r=H.m([],[A.ca])
k=new A.da(t,s,r,"objects",!1,!0)
C.a.k(u,k)
w=P.X(w,v)
w.h(0,"cDepthTest",!0)
w.h(0,"cDepthWrite",!0)
w.h(0,"cBlendEquation",$.e_())
w.h(0,"cStencilFunc",$.e2())
j=D.fO("../ct_logo.obj")
j.a5(new N.jR(k,new G.fS(w,"mat",!1,!0)),null)
w=$.ed()
C.a.k(w,j)
z.a=0
P.fl(w,null,!1,v).a5(new N.jS(new N.jQ(z,n,l)),null)},
jR:{"^":"n:25;a,b",
$1:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=[Y.fs(H.z(a8)),B.f5(1,1,2,16,!1),B.f3(!1,1,0,1,0,1,1,1)]
for(y=this.a,x=y.f,w=this.b,v=[A.ca],u=[P.E],t=P.e,s=P.c,r=P.a9,y=y.d,q=y.d,y=y.e,p=0;p<3;++p){o=z[p]
o.ca()
n=y.x
m=P.X(t,s)
l=J.eq(q.a)
k=new G.fU(q,l,4,m,n,0,-1,P.X(t,r),"meshdata:",!1,!0)
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
n=H.w(o.c9(),"$isa",u,"$asa")
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
G.is(o,k)
o=H.m([],v)
n=new Float32Array(9)
m=new T.aa(new Float32Array(16))
m.O()
l=new Float32Array(16)
j=new T.aa(l)
j.O()
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
l[7]=a1*a+a0*c}C.a.k(x,new A.ca(w,k,o,new T.bC(n),m,j,new T.i(g),new T.i(f),new T.i(e),new T.i(d),"meshdata:",!1,!0))}}},
jQ:{"^":"n:26;a,b,c",
$1:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
H.ct(a8)
if(typeof a8!=="number")return a8.R()
this.a.a=a8+0
z=this.b
z.cx+=0.001
y=z.fx
x=y.a
if(x.H(0,0)||x.H(0,1)){x=z.cx
w=y.d
if(typeof w!=="number")return w.aB()
z.cx=x+w*0.01
w=z.cy
x=y.e
if(typeof x!=="number")return x.aB()
z.cy=w+x*0.01}x=z.fr
w=x.a
if(w.H(0,37))z.cx+=0.03
else if(w.H(0,39))z.cx-=0.03
if(w.H(0,38))z.cy+=0.03
else if(w.H(0,40))z.cy-=0.03
if(w.H(0,33))z.ch*=0.99
else if(w.H(0,34))z.ch*=1.01
if(w.H(0,32)){z.cx=0
z.cy=0}w=y.f
if(typeof w!=="number")return w.aB()
w=z.ch-w*z.dy
if(w>0)z.ch=w
w=C.o.cP(z.cy,-1.4707963267948965,1.4707963267948965)
z.cy=w
v=z.ch
u=z.cx
t=v*Math.cos(w)
z.bV(t*Math.cos(u),v*Math.sin(w),t*Math.sin(u))
u=z.dx
w=z.d.a
v=u.a
w[12]=w[12]+v[0]
w[13]=w[13]+v[1]
w[14]=w[14]+v[2]
s=new T.i(new Float32Array(3))
s.q(0,1,0)
v=z.au()
r=new Float32Array(3)
q=new T.i(r)
q.A(v)
q.a9(0,u)
q.aq(0)
p=s.bn(q)
p.aq(0)
o=q.bn(p)
o.aq(0)
u=p.am(v)
n=o.am(v)
v=q.am(v)
m=p.a
l=m[0]
k=o.a
j=k[0]
i=r[0]
h=m[1]
g=k[1]
f=r[1]
m=m[2]
k=k[2]
r=r[2]
w[15]=1
w[14]=-v
w[13]=-n
w[12]=-u
w[11]=0
w[10]=r
w[9]=k
w[8]=m
w[7]=0
w[6]=f
w[5]=g
w[4]=h
w[3]=0
w[2]=i
w[1]=j
w[0]=l
l=z.f
j=l.a
j[0]=w[2]
j[1]=w[6]
j[2]=w[10]
z=-z.db
e=Math.sqrt(l.gap())
p=j[0]/e
o=j[1]/e
q=j[2]/e
d=Math.cos(z)
c=Math.sin(z)
b=1-d
a=p*p*b+d
z=q*c
a0=p*o*b-z
j=o*c
a1=p*q*b+j
a2=o*p*b+z
a3=o*o*b+d
z=p*c
a4=o*q*b-z
a5=q*p*b-j
a6=q*o*b+z
a7=q*q*b+d
z=w[0]
j=w[4]
l=w[8]
i=w[1]
h=w[5]
g=w[9]
f=w[2]
m=w[6]
k=w[10]
r=w[3]
u=w[7]
n=w[11]
w[0]=z*a+j*a2+l*a5
w[1]=i*a+h*a2+g*a5
w[2]=f*a+m*a2+k*a5
w[3]=r*a+u*a2+n*a5
w[4]=z*a0+j*a3+l*a6
w[5]=i*a0+h*a3+g*a6
w[6]=f*a0+m*a3+k*a6
w[7]=r*a0+u*a3+n*a6
w[8]=z*a1+j*a4+l*a7
w[9]=i*a1+h*a4+g*a7
w[10]=f*a1+m*a4+k*a7
w[11]=r*a1+u*a4+n*a7
x.c.V(0)
x.b.V(0)
y.e=0
y.d=0
y.f=0
y.c.V(0)
y.b.V(0)
this.c.c6()
C.a0.gcK(window).a5(this,-1)}},
jS:{"^":"n:27;a",
$1:function(a){H.b8(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.D=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cZ.prototype
return J.fz.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.fA.prototype
if(typeof a=="boolean")return J.fy.prototype
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.aL=function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.cn=function(a){if(a==null)return a
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.jB=function(a){if(typeof a=="number")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.jC=function(a){if(typeof a=="number")return J.bh.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.co=function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.o=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.bN=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.U=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.D(a).B(a,b)}
J.a5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jB(a).N(a,b)}
J.bb=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jN(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aL(a).i(a,b)}
J.eg=function(a,b,c){return J.cn(a).h(a,b,c)}
J.cw=function(a,b){return J.co(a).T(a,b)}
J.cx=function(a,b){return J.o(a).b6(a,b)}
J.eh=function(a,b,c,d){return J.o(a).cJ(a,b,c,d)}
J.cy=function(a,b,c){return J.o(a).b7(a,b,c)}
J.ei=function(a,b){return J.o(a).cL(a,b)}
J.bu=function(a,b,c){return J.o(a).b8(a,b,c)}
J.ej=function(a,b,c){return J.o(a).ba(a,b,c)}
J.cz=function(a,b,c){return J.o(a).bb(a,b,c)}
J.bv=function(a,b){return J.o(a).cO(a,b)}
J.ek=function(a,b){return J.o(a).bc(a,b)}
J.el=function(a,b,c){return J.o(a).bd(a,b,c)}
J.cA=function(a,b,c,d){return J.o(a).be(a,b,c,d)}
J.em=function(a,b){return J.o(a).bf(a,b)}
J.en=function(a,b,c,d,e){return J.o(a).bg(a,b,c,d,e)}
J.eo=function(a,b){return J.jC(a).J(a,b)}
J.bS=function(a,b,c){return J.aL(a).cS(a,b,c)}
J.bT=function(a){return J.o(a).bk(a)}
J.ep=function(a){return J.o(a).bl(a)}
J.eq=function(a){return J.o(a).cU(a)}
J.er=function(a,b){return J.o(a).bo(a,b)}
J.bU=function(a,b){return J.o(a).bp(a,b)}
J.es=function(a,b,c,d){return J.o(a).bq(a,b,c,d)}
J.et=function(a,b,c,d,e){return J.o(a).cW(a,b,c,d,e)}
J.eu=function(a,b,c,d,e){return J.o(a).br(a,b,c,d,e)}
J.ev=function(a,b,c,d,e,f){return J.o(a).cX(a,b,c,d,e,f)}
J.bw=function(a,b){return J.o(a).bs(a,b)}
J.cB=function(a,b){return J.o(a).bt(a,b)}
J.ew=function(a){return J.o(a).d_(a)}
J.ex=function(a,b){return J.o(a).D(a,b)}
J.ah=function(a){return J.D(a).gv(a)}
J.cC=function(a){return J.cn(a).gC(a)}
J.bc=function(a){return J.aL(a).gl(a)}
J.ey=function(a){return J.bN(a).gdj(a)}
J.bx=function(a){return J.bN(a).ga6(a)}
J.bV=function(a){return J.bN(a).gX(a)}
J.cD=function(a){return J.bN(a).gbR(a)}
J.ez=function(a){return J.o(a).a7(a)}
J.eA=function(a,b){return J.o(a).av(a,b)}
J.eB=function(a,b,c){return J.o(a).aw(a,b,c)}
J.cE=function(a,b,c){return J.o(a).aA(a,b,c)}
J.eC=function(a,b){return J.o(a).bv(a,b)}
J.eD=function(a,b){return J.co(a).bX(a,b)}
J.eE=function(a,b,c,d){return J.o(a).aD(a,b,c,d)}
J.by=function(a){return J.D(a).j(a)}
J.eF=function(a,b,c,d){return J.o(a).df(a,b,c,d)}
J.eG=function(a){return J.co(a).dg(a)}
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
J.eL=function(a,b,c){return J.o(a).dh(a,b,c)}
J.cK=function(a,b,c,d,e,f,g){return J.o(a).bP(a,b,c,d,e,f,g)}
J.eM=function(a,b,c,d,e){return J.o(a).bQ(a,b,c,d,e)}
I.cr=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.z=W.bZ.prototype
C.A=W.fp.prototype
C.q=W.fq.prototype
C.B=J.h.prototype
C.a=J.bg.prototype
C.f=J.cZ.prototype
C.o=J.bh.prototype
C.h=J.bi.prototype
C.I=J.bj.prototype
C.b=H.h2.prototype
C.m=H.h4.prototype
C.u=J.h8.prototype
C.p=J.b3.prototype
C.a_=W.aE.prototype
C.a0=W.hR.prototype
C.e=new P.iM()
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
$.aP=null
$.cM=null
$.cf=!1
$.dT=null
$.dM=null
$.dY=null
$.bM=null
$.bP=null
$.cp=null
$.aH=null
$.b5=null
$.b6=null
$.cg=!1
$.C=C.e
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
I.$lazy(y,x,w)}})(["kh","e1",function(){return H.dS("_$dart_dartClosure")},"kV","cu",function(){return H.dS("_$dart_js")},"lE","e3",function(){return H.a7(H.bF({
toString:function(){return"$receiver$"}}))},"lF","e4",function(){return H.a7(H.bF({$method$:null,
toString:function(){return"$receiver$"}}))},"lG","e5",function(){return H.a7(H.bF(null))},"lH","e6",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"lK","e9",function(){return H.a7(H.bF(void 0))},"lL","ea",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"lJ","e8",function(){return H.a7(H.dj(null))},"lI","e7",function(){return H.a7(function(){try{null.$method$}catch(z){return z.message}}())},"lN","ec",function(){return H.a7(H.dj(void 0))},"lM","eb",function(){return H.a7(function(){try{(void 0).$method$}catch(z){return z.message}}())},"lW","cv",function(){return P.hX()},"m7","ba",function(){return[]},"ke","e0",function(){return{}},"lt","e2",function(){return new G.di(1281,0,4294967295)},"k9","e_",function(){return new G.dh(1281,1281,1281)},"m5","a4",function(){return P.d2(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.x,"aColorAlpha",C.N,"aPosition",C.v,"aTexUV",C.U,"aNormal",C.X,"aBinormal",C.M,"aCenter",C.w,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.Z,"aBitangent",C.K,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.x,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.v,"vPositionFromLight",C.L,"vCenter",C.w,"vDepth",C.S,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.y,"uConvolutionMatrix",C.y,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.Y,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.W,"uAnimationTable",C.i,"uTime",C.V,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.P,"uLightDescs",C.Q,"uLightCount",C.c,"uLightTypes",C.R,"uBumpScale",C.T,"uNormalScale",C.O],P.e,G.F)},"md","ef",function(){var z,y
z=G.db("Normal2Color")
y=[P.e]
z.c1(H.m(["aPosition","aNormal"],y))
z.aF(H.m(["vColor"],y))
z.c4(H.m(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aJ(H.m(["void main() {\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0); \n    vColor = normalize(aNormal / 2.0 + vec3(0.5) );\n}\n      "],y))
return z},"mc","ee",function(){var z,y
z=G.db("Normal2ColorF")
y=[P.e]
z.aF(H.m(["vColor"],y))
z.aJ(H.m(["void main() {  \n    oFragColor = vec4( vColor, 1.0 );\n}\n    "],y))
return z},"ma","ed",function(){return H.m([],[[P.W,P.c]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.A},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.A,args:[W.Q]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.e,args:[P.E]},{func:1,ret:-1,args:[,]},{func:1,ret:P.A,args:[W.aV]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:P.A,args:[,P.P]},{func:1,ret:P.A,args:[,],opt:[P.P]},{func:1,ret:[P.O,,],args:[,]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.A,args:[P.H]},{func:1,args:[W.a_]},{func:1,args:[,,]},{func:1,ret:-1,args:[W.a_]},{func:1,ret:P.A,args:[W.bk]},{func:1,ret:P.A,args:[W.aE]},{func:1,ret:P.E,args:[P.E,P.c]},{func:1,ret:P.A,args:[P.e]},{func:1,ret:-1,args:[P.H]},{func:1,ret:P.A,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.k1(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(N.dV,[])
else N.dV([])})})()
//# sourceMappingURL=generateNormals.dart.js.map
