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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.ci"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ci"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.ci(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b0=function(){}
var dart=[["","",,H,{"^":"",l8:{"^":"b;a"}}],["","",,J,{"^":"",
cn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bg:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cm==null){H.k6()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dm("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cq()]
if(v!=null)return v
v=H.kb(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cq(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
f:{"^":"b;",
E:function(a,b){return a===b},
gu:function(a){return H.aR(a)},
k:["bY",function(a){return"Instance of '"+H.aS(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fV:{"^":"f;",
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$isN:1},
d_:{"^":"f;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
$isI:1},
c1:{"^":"f;",
gu:function(a){return 0},
k:["c_",function(a){return String(a)}]},
hi:{"^":"c1;"},
aU:{"^":"c1;"},
aO:{"^":"c1;",
k:function(a){var z=a[$.e5()]
if(z==null)return this.c_(a)
return"JavaScript function for "+H.e(J.b7(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isb9:1},
aM:{"^":"f;$ti",
n:function(a,b){H.x(b,H.p(a,0))
if(!!a.fixed$length)H.L(P.y("add"))
a.push(b)},
G:function(a,b){var z,y
H.w(b,"$isj",[H.p(a,0)],"$asj")
if(!!a.fixed$length)H.L(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.S)(b),++y)a.push(b[y])},
X:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
b1:function(a,b){var z,y
H.k(b,{func:1,ret:P.N,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aw(a))}return!1},
bU:function(a,b){if(!!a.immutable$list)H.L(P.y("sort"))
H.hH(a,J.jG(),H.p(a,0))},
aA:function(a){return this.bU(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aD(a[z],b))return!0
return!1},
k:function(a){return P.c_(a,"[","]")},
gv:function(a){return new J.fb(a,a.length,0,[H.p(a,0)])},
gu:function(a){return H.aR(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.at(a,b))
return a[b]},
i:function(a,b,c){H.x(c,H.p(a,0))
if(!!a.immutable$list)H.L(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.at(a,b))
a[b]=c},
$ist:1,
$ast:I.b0,
$isj:1,
$isa:1,
p:{
fU:function(a,b){return J.c0(H.n(a,[b]))},
c0:function(a){H.bh(a)
a.fixed$length=Array
return a},
l6:[function(a,b){return J.ev(H.e0(a,"$isT"),H.e0(b,"$isT"))},"$2","jG",8,0,25]}},
l7:{"^":"aM;$ti"},
fb:{"^":"b;a,b,c,0d,$ti",
saS:function(a){this.d=H.x(a,H.p(this,0))},
gw:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.S(z))
x=this.c
if(x>=y){this.saS(null)
return!1}this.saS(z[x]);++this.c
return!0},
$isaL:1},
bb:{"^":"f;",
R:function(a,b){var z
H.co(b)
if(typeof b!=="number")throw H.c(H.aY(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.ga6(b)
if(this.ga6(a)===z)return 0
if(this.ga6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga6:function(a){return a===0?1/a<0:a<0},
cS:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.y(""+a+".ceil()"))},
dh:function(a,b){var z
if(b>20)throw H.c(P.bw(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ga6(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
bQ:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
c1:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b_(a,b)},
O:function(a,b){return(a|0)===a?a/b|0:this.b_(a,b)},
b_:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
aY:function(a,b){var z
if(a>0)z=this.cG(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cG:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.c(H.aY(b))
return a>b},
$isT:1,
$asT:function(){return[P.F]},
$isac:1,
$isF:1},
cZ:{"^":"bb;",$isA:1},
cY:{"^":"bb;"},
aN:{"^":"f;",
bd:function(a,b){if(b<0)throw H.c(H.at(a,b))
if(b>=a.length)H.L(H.at(a,b))
return a.charCodeAt(b)},
V:function(a,b){if(b>=a.length)throw H.c(H.at(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.cD(b,null,null))
return a+b},
bW:function(a,b,c){var z
if(c>a.length)throw H.c(P.bw(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bV:function(a,b){return this.bW(a,b,0)},
aC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bx(b,null,null))
if(b>c)throw H.c(P.bx(b,null,null))
if(c>a.length)throw H.c(P.bx(c,null,null))
return a.substring(b,c)},
bX:function(a,b){return this.aC(a,b,null)},
dg:function(a){return a.toLowerCase()},
dj:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.V(z,0)===133){x=J.fW(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bd(z,w)===133?J.fX(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
cT:function(a,b,c){if(c>a.length)throw H.c(P.bw(c,0,a.length,null,null))
return H.ki(a,b,c)},
R:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.c(H.aY(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gu:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.at(a,b))
return a[b]},
$ist:1,
$ast:I.b0,
$isT:1,
$asT:function(){return[P.d]},
$ishh:1,
$isd:1,
p:{
d0:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fW:function(a,b){var z,y
for(z=a.length;b<z;){y=C.f.V(a,b)
if(y!==32&&y!==13&&!J.d0(y))break;++b}return b},
fX:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.f.bd(a,z)
if(y!==32&&y!==13&&!J.d0(y))break}return b}}}}],["","",,H,{"^":"",
fS:function(){return new P.c7("No element")},
fT:function(){return new P.c7("Too many elements")},
hH:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.A,args:[c,c]})
H.bd(a,0,J.aF(a)-1,b,c)},
bd:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.A,args:[e,e]})
if(c-b<=32)H.hG(a,b,c,d,e)
else H.hF(a,b,c,d,e)},
hG:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.A,args:[e,e]})
for(z=b+1,y=J.b1(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a3(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hF:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.A,args:[a2,a2]})
z=C.c.O(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.O(b+a0,2)
v=w-z
u=w+z
t=J.b1(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
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
if(typeof i!=="number")return i.Y()
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
if(typeof e!=="number")return e.Y()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.L()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.L()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.Y()
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
H.bd(a,b,m-2,a1,a2)
H.bd(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aD(a1.$2(t.h(a,m),r),0);)++m
for(;J.aD(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.Y()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bd(a,m,l,a1,a2)}else H.bd(a,m,l,a1,a2)},
cO:{"^":"j;"},
bv:{"^":"cO;$ti",
gv:function(a){return new H.d4(this,this.gj(this),0,[H.cl(this,"bv",0)])},
an:function(a,b){return this.bZ(0,H.k(b,{func:1,ret:P.N,args:[H.cl(this,"bv",0)]}))}},
d4:{"^":"b;a,b,c,0d,$ti",
saJ:function(a){this.d=H.x(a,H.p(this,0))},
gw:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.b1(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aw(z))
w=this.c
if(w>=x){this.saJ(null)
return!1}this.saJ(y.q(z,w));++this.c
return!0},
$isaL:1},
h3:{"^":"bv;a,b,$ti",
gj:function(a){return J.aF(this.a)},
q:function(a,b){return this.b.$1(J.eH(this.a,b))},
$asbv:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dn:{"^":"j;a,b,$ti",
gv:function(a){return new H.i2(J.bo(this.a),this.b,this.$ti)}},
i2:{"^":"aL;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gw(z)))return!0
return!1},
gw:function(a){var z=this.a
return z.gw(z)}},
bu:{"^":"b;$ti"}}],["","",,H,{"^":"",
au:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jZ:function(a){return init.types[H.O(a)]},
k9:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isv},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.b7(a)
if(typeof z!=="string")throw H.c(H.aY(a))
return z},
aR:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hr:function(a){var z,y
if(typeof a!=="string")H.L(H.aY(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.f1(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aS:function(a){return H.hj(a)+H.bC(H.ad(a),0,null)},
hj:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isaU){u=C.y(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.au(w.length>1&&C.f.V(w,0)===36?C.f.bX(w,1):w)},
ax:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hq:function(a){var z=H.ax(a).getFullYear()+0
return z},
ho:function(a){var z=H.ax(a).getMonth()+1
return z},
hk:function(a){var z=H.ax(a).getDate()+0
return z},
hl:function(a){var z=H.ax(a).getHours()+0
return z},
hn:function(a){var z=H.ax(a).getMinutes()+0
return z},
hp:function(a){var z=H.ax(a).getSeconds()+0
return z},
hm:function(a){var z=H.ax(a).getMilliseconds()+0
return z},
bJ:function(a){throw H.c(H.aY(a))},
l:function(a,b){if(a==null)J.aF(a)
throw H.c(H.at(a,b))},
at:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.av(!0,b,"index",null)
z=H.O(J.aF(a))
if(!(b<0)){if(typeof z!=="number")return H.bJ(z)
y=b>=z}else y=!0
if(y)return P.C(b,a,"index",null,z)
return P.bx(b,"index",null)},
aY:function(a){return new P.av(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.da()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e3})
z.name=""}else z.toString=H.e3
return z},
e3:function(){return J.b7(this.dartException)},
L:function(a){throw H.c(a)},
S:function(a){throw H.c(P.aw(a))},
a1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kk(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aY(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c2(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.d9(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.e7()
u=$.e8()
t=$.e9()
s=$.ea()
r=$.ed()
q=$.ee()
p=$.ec()
$.eb()
o=$.eg()
n=$.ef()
m=v.H(y)
if(m!=null)return z.$1(H.c2(H.u(y),m))
else{m=u.H(y)
if(m!=null){m.method="call"
return z.$1(H.c2(H.u(y),m))}else{m=t.H(y)
if(m==null){m=s.H(y)
if(m==null){m=r.H(y)
if(m==null){m=q.H(y)
if(m==null){m=p.H(y)
if(m==null){m=s.H(y)
if(m==null){m=o.H(y)
if(m==null){m=n.H(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.d9(H.u(y),m))}}return z.$1(new H.i_(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.df()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.av(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.df()
return a},
b3:function(a){var z
if(a==null)return new H.dF(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dF(a)},
jU:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
k8:function(a,b,c,d,e,f){H.h(a,"$isb9")
switch(H.O(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.cR("Unsupported number of arguments for wrapped closure"))},
b_:function(a,b){var z
H.O(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k8)
a.$identity=z
return z},
fl:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.hv(z).r}else x=d
w=e?Object.create(new H.hI().constructor.prototype):Object.create(new H.bV(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a4
if(typeof u!=="number")return u.C()
$.a4=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cI(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jZ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cG:H.bW
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
fi:function(a,b,c,d){var z=H.bW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cI:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fk(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fi(y,!w,z,b)
if(y===0){w=$.a4
if(typeof w!=="number")return w.C()
$.a4=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aG
if(v==null){v=H.br("self")
$.aG=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a4
if(typeof w!=="number")return w.C()
$.a4=w+1
t+=w
w="return function("+t+"){return this."
v=$.aG
if(v==null){v=H.br("self")
$.aG=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fj:function(a,b,c,d){var z,y
z=H.bW
y=H.cG
switch(b?-1:a){case 0:throw H.c(H.hA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fk:function(a,b){var z,y,x,w,v,u,t,s
z=$.aG
if(z==null){z=H.br("self")
$.aG=z}y=$.cF
if(y==null){y=H.br("receiver")
$.cF=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fj(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a4
if(typeof y!=="number")return y.C()
$.a4=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a4
if(typeof y!=="number")return y.C()
$.a4=y+1
return new Function(z+y+"}")()},
ci:function(a,b,c,d,e,f,g){return H.fl(a,b,H.O(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a_(a,"String"))},
dT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a_(a,"double"))},
co:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a_(a,"num"))},
bF:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a_(a,"bool"))},
O:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a_(a,"int"))},
cp:function(a,b){throw H.c(H.a_(a,H.au(H.u(b).substring(3))))},
kg:function(a,b){throw H.c(H.cH(a,H.au(H.u(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cp(a,b)},
a9:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kg(a,b)},
e0:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cp(a,b)},
bh:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a_(a,"List<dynamic>"))},
ka:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cp(a,b)},
cj:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.O(z)]
else return a.$S()}return},
bf:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cj(J.B(a))
if(z==null)return!1
return H.dK(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.ce)return a
$.ce=!0
try{if(H.bf(a,b))return a
z=H.bi(b)
y=H.a_(a,z)
throw H.c(y)}finally{$.ce=!1}},
bH:function(a,b){if(a!=null&&!H.ch(a,b))H.L(H.a_(a,H.bi(b)))
return a},
dO:function(a){var z,y
z=J.B(a)
if(!!z.$iso){y=H.cj(z)
if(y!=null)return H.bi(y)
return"Closure"}return H.aS(a)},
kj:function(a){throw H.c(new P.fs(H.u(a)))},
dW:function(a){return init.getIsolateTag(a)},
n:function(a,b){a.$ti=b
return a},
ad:function(a){if(a==null)return
return a.$ti},
mC:function(a,b,c){return H.aC(a["$as"+H.e(c)],H.ad(b))},
b2:function(a,b,c,d){var z
H.u(c)
H.O(d)
z=H.aC(a["$as"+H.e(c)],H.ad(b))
return z==null?null:z[d]},
cl:function(a,b,c){var z
H.u(b)
H.O(c)
z=H.aC(a["$as"+H.e(b)],H.ad(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.O(b)
z=H.ad(a)
return z==null?null:z[b]},
bi:function(a){return H.as(a,null)},
as:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.au(a[0].builtin$cls)+H.bC(a,1,b)
if(typeof a=="function")return H.au(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.O(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.e(b[y])}if('func' in a)return H.jF(a,b)
if('futureOr' in a)return"FutureOr<"+H.as("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.n([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.n(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.l(b,r)
t=C.f.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.as(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.as(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.as(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.as(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jT(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.as(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bC:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.c9("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.as(u,c)}return"<"+z.k(0)+">"},
jY:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$iso){y=H.cj(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ad(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aC:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aZ:function(a,b,c,d){var z,y
H.u(b)
H.bh(c)
H.u(d)
if(a==null)return!1
z=H.ad(a)
y=J.B(a)
if(y[b]==null)return!1
return H.dR(H.aC(y[d],z),null,c,null)},
bj:function(a,b,c,d){H.u(b)
H.bh(c)
H.u(d)
if(a==null)return a
if(H.aZ(a,b,c,d))return a
throw H.c(H.cH(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.au(b.substring(3))+H.bC(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.u(b)
H.bh(c)
H.u(d)
if(a==null)return a
if(H.aZ(a,b,c,d))return a
throw H.c(H.a_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.au(b.substring(3))+H.bC(c,0,null),init.mangledGlobalNames)))},
dR:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.X(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.X(a[y],b,c[y],d))return!1
return!0},
mz:function(a,b,c){return a.apply(b,H.aC(J.B(b)["$as"+H.e(c)],H.ad(b)))},
dZ:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="I"||a===-1||a===-2||H.dZ(z)}return!1},
ch:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="I"||b===-1||b===-2||H.dZ(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ch(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bf(a,b)}z=J.B(a).constructor
y=H.ad(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.X(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.ch(a,b))throw H.c(H.a_(a,H.bi(b)))
return a},
X:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.X(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.dK(a,b,c,d)
if('func' in a)return c.builtin$cls==="b9"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.X("type" in a?a.type:null,b,x,d)
else if(H.X(a,b,x,d))return!0
else{if(!('$is'+"aK" in y.prototype))return!1
w=y.prototype["$as"+"aK"]
v=H.aC(w,z?a.slice(1):null)
return H.X(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.dR(H.aC(r,z),b,u,d)},
dK:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kf(m,b,l,d)},
kf:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.X(c[w],d,a[w],b))return!1}return!0},
mA:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
kb:function(a){var z,y,x,w,v,u
z=H.u($.dX.$1(a))
y=$.bG[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.dQ.$2(a,z))
if(z!=null){y=$.bG[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bL(x)
$.bG[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bK[z]=x
return x}if(v==="-"){u=H.bL(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e1(a,x)
if(v==="*")throw H.c(P.dm(z))
if(init.leafTags[z]===true){u=H.bL(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e1(a,x)},
e1:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cn(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bL:function(a){return J.cn(a,!1,null,!!a.$isv)},
ke:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bL(z)
else return J.cn(z,c,null,null)},
k6:function(){if(!0===$.cm)return
$.cm=!0
H.k7()},
k7:function(){var z,y,x,w,v,u,t,s
$.bG=Object.create(null)
$.bK=Object.create(null)
H.k2()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e2.$1(v)
if(u!=null){t=H.ke(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k2:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.aA(C.L,H.aA(C.Q,H.aA(C.x,H.aA(C.x,H.aA(C.P,H.aA(C.M,H.aA(C.N(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dX=new H.k3(v)
$.dQ=new H.k4(u)
$.e2=new H.k5(t)},
aA:function(a,b){return a(b)||b},
ki:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hu:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hv:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c0(z)
y=z[0]
x=z[1]
return new H.hu(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hT:{"^":"b;a,b,c,d,e,f",
H:function(a){var z,y,x
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
a6:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.n([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
by:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dj:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hf:{"^":"K;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
d9:function(a,b){return new H.hf(a,b==null?null:b.method)}}},
fY:{"^":"K;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
c2:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fY(a,y,z?null:b.receiver)}}},
i_:{"^":"K;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kk:{"^":"o:4;a",
$1:function(a){if(!!J.B(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dF:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isZ:1},
o:{"^":"b;",
k:function(a){return"Closure '"+H.aS(this).trim()+"'"},
gbO:function(){return this},
$isb9:1,
gbO:function(){return this}},
dh:{"^":"o;"},
hI:{"^":"dh;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.au(z)+"'"}},
bV:{"^":"dh;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bV))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var z,y
z=this.c
if(z==null)y=H.aR(this.a)
else y=typeof z!=="object"?J.aE(z):H.aR(z)
return(y^H.aR(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aS(z)+"'")},
p:{
bW:function(a){return a.a},
cG:function(a){return a.c},
br:function(a){var z,y,x,w,v
z=new H.bV("self","target","receiver","name")
y=J.c0(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hU:{"^":"K;a",
k:function(a){return this.a},
p:{
a_:function(a,b){return new H.hU("TypeError: "+P.bt(a)+": type '"+H.dO(a)+"' is not a subtype of type '"+b+"'")}}},
fg:{"^":"K;a",
k:function(a){return this.a},
p:{
cH:function(a,b){return new H.fg("CastError: "+P.bt(a)+": type '"+H.dO(a)+"' is not a subtype of type '"+b+"'")}}},
hz:{"^":"K;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hA:function(a){return new H.hz(a)}}},
dk:{"^":"b;a,0b,0c,0d",
ga4:function(){var z=this.b
if(z==null){z=H.bi(this.a)
this.b=z}return z},
k:function(a){return this.ga4()},
gu:function(a){var z=this.d
if(z==null){z=C.f.gu(this.ga4())
this.d=z}return z},
E:function(a,b){if(b==null)return!1
return b instanceof H.dk&&this.ga4()===b.ga4()}},
d1:{"^":"d5;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.ah(this,[H.p(this,0)])},
a5:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cm(z,b)}else{y=this.d5(b)
return y}},
d5:function(a){var z=this.d
if(z==null)return!1
return this.al(this.af(z,J.aE(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a2(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a2(w,b)
x=y==null?null:y.b
return x}else return this.d6(b)},
d6:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.af(z,J.aE(a)&0x3ffffff)
x=this.al(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.p(this,0))
H.x(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ag()
this.b=z}this.aK(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ag()
this.c=y}this.aK(y,b,c)}else{x=this.d
if(x==null){x=this.ag()
this.d=x}w=J.aE(b)&0x3ffffff
v=this.af(x,w)
if(v==null)this.aj(x,w,[this.a9(b,c)])
else{u=this.al(v,b)
if(u>=0)v[u].b=c
else v.push(this.a9(b,c))}}},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aw(this))
z=z.c}},
aK:function(a,b,c){var z
H.x(b,H.p(this,0))
H.x(c,H.p(this,1))
z=this.a2(a,b)
if(z==null)this.aj(a,b,this.a9(b,c))
else z.b=c},
aW:function(){this.r=this.r+1&67108863},
a9:function(a,b){var z,y
z=new H.fZ(H.x(a,H.p(this,0)),H.x(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aW()
return z},
al:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aD(a[y].a,b))return y
return-1},
k:function(a){return P.d6(this)},
a2:function(a,b){return a[b]},
af:function(a,b){return a[b]},
aj:function(a,b,c){a[b]=c},
co:function(a,b){delete a[b]},
cm:function(a,b){return this.a2(a,b)!=null},
ag:function(){var z=Object.create(null)
this.aj(z,"<non-identifier-key>",z)
this.co(z,"<non-identifier-key>")
return z},
$isd2:1},
fZ:{"^":"b;a,b,0c,0d"},
ah:{"^":"cO;a,$ti",
gj:function(a){return this.a.a},
gv:function(a){var z,y
z=this.a
y=new H.h_(z,z.r,this.$ti)
y.c=z.e
return y}},
h_:{"^":"b;a,b,0c,0d,$ti",
saL:function(a){this.d=H.x(a,H.p(this,0))},
gw:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aw(z))
else{z=this.c
if(z==null){this.saL(null)
return!1}else{this.saL(z.a)
this.c=this.c.c
return!0}}},
$isaL:1},
k3:{"^":"o:4;a",
$1:function(a){return this.a(a)}},
k4:{"^":"o:11;a",
$2:function(a,b){return this.a(a,b)}},
k5:{"^":"o:12;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
jT:function(a){return J.fU(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bB:function(a){var z,y
if(!!J.B(a).$ist)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
a8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.at(b,a))},
ha:{"^":"f;",$ishV:1,"%":"DataView;ArrayBufferView;c5|dz|dA|d7|dB|dC|aj"},
c5:{"^":"ha;",
gj:function(a){return a.length},
$ist:1,
$ast:I.b0,
$isv:1,
$asv:I.b0},
d7:{"^":"dA;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
i:function(a,b,c){H.dT(c)
H.a8(b,a,a.length)
a[b]=c},
$asbu:function(){return[P.ac]},
$asm:function(){return[P.ac]},
$isj:1,
$asj:function(){return[P.ac]},
$isa:1,
$asa:function(){return[P.ac]},
"%":"Float64Array"},
aj:{"^":"dC;",
i:function(a,b,c){H.O(c)
H.a8(b,a,a.length)
a[b]=c},
$asbu:function(){return[P.A]},
$asm:function(){return[P.A]},
$isj:1,
$asj:function(){return[P.A]},
$isa:1,
$asa:function(){return[P.A]}},
h9:{"^":"d7;",$isaJ:1,"%":"Float32Array"},
li:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lj:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$isl5:1,
"%":"Int32Array"},
lk:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ll:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hb:{"^":"aj;",
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
$ism7:1,
"%":"Uint32Array"},
lm:{"^":"aj;",
gj:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ln:{"^":"aj;",
gj:function(a){return a.length},
h:function(a,b){H.a8(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dz:{"^":"c5+m;"},
dA:{"^":"dz+bu;"},
dB:{"^":"c5+m;"},
dC:{"^":"dB+bu;"}}],["","",,P,{"^":"",
i6:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jN()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b_(new P.i8(z),1)).observe(y,{childList:true})
return new P.i7(z,y,x)}else if(self.setImmediate!=null)return P.jO()
return P.jP()},
mi:[function(a){self.scheduleImmediate(H.b_(new P.i9(H.k(a,{func:1,ret:-1})),0))},"$1","jN",4,0,3],
mj:[function(a){self.setImmediate(H.b_(new P.ia(H.k(a,{func:1,ret:-1})),0))},"$1","jO",4,0,3],
mk:[function(a){H.k(a,{func:1,ret:-1})
P.jm(0,a)},"$1","jP",4,0,3],
jJ:function(a,b){if(H.bf(a,{func:1,args:[P.b,P.Z]}))return H.k(a,{func:1,ret:null,args:[P.b,P.Z]})
if(H.bf(a,{func:1,args:[P.b]}))return H.k(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cD(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jI:function(){var z,y
for(;z=$.az,z!=null;){$.aX=null
y=z.b
$.az=y
if(y==null)$.aW=null
z.a.$0()}},
mw:[function(){$.cf=!0
try{P.jI()}finally{$.aX=null
$.cf=!1
if($.az!=null)$.cr().$1(P.dS())}},"$0","dS",0,0,1],
dN:function(a){var z=new P.dq(H.k(a,{func:1,ret:-1}))
if($.az==null){$.aW=z
$.az=z
if(!$.cf)$.cr().$1(P.dS())}else{$.aW.b=z
$.aW=z}},
jM:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.az
if(z==null){P.dN(a)
$.aX=$.aW
return}y=new P.dq(a)
x=$.aX
if(x==null){y.b=z
$.aX=y
$.az=y}else{y.b=x.b
x.b=y
$.aX=y
if(y.b==null)$.aW=y}},
kh:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.E
if(C.e===y){P.bE(null,null,C.e,a)
return}y.toString
P.bE(null,null,y,H.k(y.b4(a),z))},
bD:function(a,b,c,d,e){var z={}
z.a=d
P.jM(new P.jK(z,e))},
dL:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.E
if(y===c)return d.$0()
$.E=c
z=y
try{y=d.$0()
return y}finally{$.E=z}},
dM:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.E
if(y===c)return d.$1(e)
$.E=c
z=y
try{y=d.$1(e)
return y}finally{$.E=z}},
jL:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.E
if(y===c)return d.$2(e,f)
$.E=c
z=y
try{y=d.$2(e,f)
return y}finally{$.E=z}},
bE:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.b4(d):c.cP(d,-1)
P.dN(d)},
i8:{"^":"o:5;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
i7:{"^":"o:13;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i9:{"^":"o:0;a",
$0:function(){this.a.$0()}},
ia:{"^":"o:0;a",
$0:function(){this.a.$0()}},
jl:{"^":"b;a,0b,c",
ci:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b_(new P.jn(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
p:{
jm:function(a,b){var z=new P.jl(!0,0)
z.ci(a,b)
return z}}},
jn:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
id:{"^":"b;$ti"},
jg:{"^":"id;a,$ti"},
ay:{"^":"b;0a,b,c,d,e,$ti",
d7:function(a){if(this.c!==6)return!0
return this.b.b.am(H.k(this.d,{func:1,ret:P.N,args:[P.b]}),a.a,P.N,P.b)},
d4:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bf(z,{func:1,args:[P.b,P.Z]}))return H.bH(w.dc(z,a.a,a.b,null,y,P.Z),x)
else return H.bH(w.am(H.k(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
a7:{"^":"b;aZ:a<,b,0cD:c<,$ti",
bA:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.E
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jJ(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a7(0,$.E,[c])
w=b==null?1:3
this.aN(new P.ay(x,w,a,b,[z,c]))
return x},
bz:function(a,b){return this.bA(a,null,b)},
aN:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isay")
this.c=a}else{if(z===2){y=H.h(this.c,"$isa7")
z=y.a
if(z<4){y.aN(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bE(null,null,z,H.k(new P.iv(this,a),{func:1,ret:-1}))}},
aX:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isay")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isa7")
y=u.a
if(y<4){u.aX(a)
return}this.a=y
this.c=u.c}z.a=this.a3(a)
y=this.b
y.toString
P.bE(null,null,y,H.k(new P.iA(z,this),{func:1,ret:-1}))}},
ai:function(){var z=H.h(this.c,"$isay")
this.c=null
return this.a3(z)},
a3:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ab:function(a){var z,y,x
z=H.p(this,0)
H.bH(a,{futureOr:1,type:z})
y=this.$ti
if(H.aZ(a,"$isaK",y,"$asaK"))if(H.aZ(a,"$isa7",y,null))P.dv(a,this)
else P.iw(a,this)
else{x=this.ai()
H.x(a,z)
this.a=4
this.c=a
P.aV(this,x)}},
aQ:function(a,b){var z
H.h(b,"$isZ")
z=this.ai()
this.a=8
this.c=new P.V(a,b)
P.aV(this,z)},
$isaK:1,
p:{
iw:function(a,b){var z,y,x
b.a=1
try{a.bA(new P.ix(b),new P.iy(b),null)}catch(x){z=H.a1(x)
y=H.b3(x)
P.kh(new P.iz(b,z,y))}},
dv:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isa7")
if(z>=4){y=b.ai()
b.a=a.a
b.c=a.c
P.aV(b,y)}else{y=H.h(b.c,"$isay")
b.a=2
b.c=a
a.aX(y)}},
aV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isV")
y=y.b
u=v.a
t=v.b
y.toString
P.bD(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aV(z.a,b)}y=z.a
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
if(p){H.h(r,"$isV")
y=y.b
u=r.a
t=r.b
y.toString
P.bD(null,null,y,u,t)
return}o=$.E
if(o!=q)$.E=q
else o=null
y=b.c
if(y===8)new P.iD(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iC(x,b,r).$0()}else if((y&2)!==0)new P.iB(z,x,b).$0()
if(o!=null)$.E=o
y=x.b
if(!!J.B(y).$isaK){if(y.a>=4){n=H.h(t.c,"$isay")
t.c=null
b=t.a3(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dv(y,t)
return}}m=b.b
n=H.h(m.c,"$isay")
m.c=null
b=m.a3(n)
y=x.a
u=x.b
if(!y){H.x(u,H.p(m,0))
m.a=4
m.c=u}else{H.h(u,"$isV")
m.a=8
m.c=u}z.a=m
y=m}}}},
iv:{"^":"o:0;a,b",
$0:function(){P.aV(this.a,this.b)}},
iA:{"^":"o:0;a,b",
$0:function(){P.aV(this.b,this.a.a)}},
ix:{"^":"o:5;a",
$1:function(a){var z=this.a
z.a=0
z.ab(a)}},
iy:{"^":"o:14;a",
$2:function(a,b){H.h(b,"$isZ")
this.a.aQ(a,b)},
$1:function(a){return this.$2(a,null)}},
iz:{"^":"o:0;a,b,c",
$0:function(){this.a.aQ(this.b,this.c)}},
iD:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bu(H.k(w.d,{func:1}),null)}catch(v){y=H.a1(v)
x=H.b3(v)
if(this.d){w=H.h(this.a.a.c,"$isV").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isV")
else u.b=new P.V(y,x)
u.a=!0
return}if(!!J.B(z).$isaK){if(z instanceof P.a7&&z.gaZ()>=4){if(z.gaZ()===8){w=this.b
w.b=H.h(z.gcD(),"$isV")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bz(new P.iE(t),null)
w.a=!1}}},
iE:{"^":"o:15;a",
$1:function(a){return this.a}},
iC:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.x(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.am(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a1(t)
y=H.b3(t)
x=this.a
x.b=new P.V(z,y)
x.a=!0}}},
iB:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isV")
w=this.c
if(w.d7(z)&&w.e!=null){v=this.b
v.b=w.d4(z)
v.a=!1}}catch(u){y=H.a1(u)
x=H.b3(u)
w=H.h(this.a.a.c,"$isV")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.V(y,x)
s.a=!0}}},
dq:{"^":"b;a,0b"},
hM:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.a7(0,$.E,[P.A])
z.a=0
x=H.p(this,0)
w=H.k(new P.hO(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.hP(z,y),{func:1,ret:-1})
W.du(this.a,this.b,w,!1,x)
return y}},
hO:{"^":"o;a,b",
$1:function(a){H.x(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.p(this.b,0)]}}},
hP:{"^":"o:0;a,b",
$0:function(){this.b.ab(this.a.a)}},
hN:{"^":"b;"},
V:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isK:1},
jt:{"^":"b;",$ismg:1},
jK:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.da()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
j_:{"^":"jt;",
dd:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.E){a.$0()
return}P.dL(null,null,this,a,-1)}catch(x){z=H.a1(x)
y=H.b3(x)
P.bD(null,null,this,z,H.h(y,"$isZ"))}},
de:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.e===$.E){a.$1(b)
return}P.dM(null,null,this,a,b,-1,c)}catch(x){z=H.a1(x)
y=H.b3(x)
P.bD(null,null,this,z,H.h(y,"$isZ"))}},
cP:function(a,b){return new P.j1(this,H.k(a,{func:1,ret:b}),b)},
b4:function(a){return new P.j0(this,H.k(a,{func:1,ret:-1}))},
cQ:function(a,b){return new P.j2(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bu:function(a,b){H.k(a,{func:1,ret:b})
if($.E===C.e)return a.$0()
return P.dL(null,null,this,a,b)},
am:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.E===C.e)return a.$1(b)
return P.dM(null,null,this,a,b,c,d)},
dc:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.E===C.e)return a.$2(b,c)
return P.jL(null,null,this,a,b,c,d,e,f)}},
j1:{"^":"o;a,b,c",
$0:function(){return this.a.bu(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j0:{"^":"o:1;a,b",
$0:function(){return this.a.dd(this.b)}},
j2:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.de(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
d3:function(a,b,c){H.bh(a)
return H.w(H.jU(a,new H.d1(0,0,[b,c])),"$isd2",[b,c],"$asd2")},
ab:function(a,b){return new H.d1(0,0,[a,b])},
bc:function(a,b,c,d){return new P.iL(0,0,[d])},
fR:function(a,b,c){var z,y
if(P.cg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.n([],[P.d])
y=$.b5()
C.a.n(y,a)
try{P.jH(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.dg(b,H.ka(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
c_:function(a,b,c){var z,y,x
if(P.cg(a))return b+"..."+c
z=new P.c9(b)
y=$.b5()
C.a.n(y,a)
try{x=z
x.a=P.dg(x.gN(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gN()+c
y=z.gN()
return y.charCodeAt(0)==0?y:y},
cg:function(a){var z,y
for(z=0;y=$.b5(),z<y.length;++z)if(a===y[z])return!0
return!1},
jH:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
z=a.gv(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gw(z))
C.a.n(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.l(b,-1)
v=b.pop()
if(0>=b.length)return H.l(b,-1)
u=b.pop()}else{t=z.gw(z);++x
if(!z.t()){if(x<=4){C.a.n(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.l(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw(z);++x
for(;z.t();t=s,s=r){r=z.gw(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2;--x}C.a.n(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.n(b,q)
C.a.n(b,u)
C.a.n(b,v)},
c3:function(a,b){var z,y,x
z=P.bc(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.S)(a),++x)z.n(0,H.x(a[x],b))
return z},
d6:function(a){var z,y,x
z={}
if(P.cg(a))return"{...}"
y=new P.c9("")
try{C.a.n($.b5(),a)
x=y
x.a=x.gN()+"{"
z.a=!0
J.eK(a,new P.h2(z,y))
z=y
z.a=z.gN()+"}"}finally{z=$.b5()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gN()
return z.charCodeAt(0)==0?z:z},
iL:{"^":"iG;a,0b,0c,0d,0e,0f,r,$ti",
gv:function(a){return P.dy(this,this.r,H.p(this,0))},
gj:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$iscc")!=null}else{y=this.cl(b)
return y}},
cl:function(a){var z=this.d
if(z==null)return!1
return this.aT(this.cr(z,a),a)>=0},
n:function(a,b){var z,y
H.x(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cd()
this.b=z}return this.aM(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cd()
this.c=y}return this.aM(y,b)}else return this.cj(0,b)},
cj:function(a,b){var z,y,x
H.x(b,H.p(this,0))
z=this.d
if(z==null){z=P.cd()
this.d=z}y=this.aR(b)
x=z[y]
if(x==null)z[y]=[this.ah(b)]
else{if(this.aT(x,b)>=0)return!1
x.push(this.ah(b))}return!0},
aM:function(a,b){H.x(b,H.p(this,0))
if(H.h(a[b],"$iscc")!=null)return!1
a[b]=this.ah(b)
return!0},
aP:function(){this.r=this.r+1&67108863},
ah:function(a){var z,y
z=new P.cc(H.x(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aP()
return z},
aR:function(a){return J.aE(a)&0x3ffffff},
cr:function(a,b){return a[this.aR(b)]},
aT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aD(a[y].a,b))return y
return-1},
p:{
cd:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cc:{"^":"b;a,0b,0c"},
iM:{"^":"b;a,b,0c,0d,$ti",
saO:function(a){this.d=H.x(a,H.p(this,0))},
gw:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aw(z))
else{z=this.c
if(z==null){this.saO(null)
return!1}else{this.saO(H.x(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaL:1,
p:{
dy:function(a,b,c){var z=new P.iM(a,b,[c])
z.c=a.e
return z}}},
iG:{"^":"hB;"},
h0:{"^":"iN;",$isj:1,$isa:1},
m:{"^":"b;$ti",
gv:function(a){return new H.d4(a,this.gj(a),0,[H.b2(this,a,"m",0)])},
q:function(a,b){return this.h(a,b)},
d2:function(a,b,c,d){var z,y,x
H.x(b,d)
H.k(c,{func:1,ret:d,args:[d,H.b2(this,a,"m",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aw(a))}return y},
k:function(a){return P.c_(a,"[","]")}},
d5:{"^":"Q;"},
h2:{"^":"o:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
Q:{"^":"b;$ti",
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.b2(this,a,"Q",0),H.b2(this,a,"Q",1)]})
for(z=J.bo(this.gD(a));z.t();){y=z.gw(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aF(this.gD(a))},
k:function(a){return P.d6(a)},
$isH:1},
hC:{"^":"b;$ti",
G:function(a,b){var z
for(z=J.bo(H.w(b,"$isj",this.$ti,"$asj"));z.t();)this.n(0,z.gw(z))},
k:function(a){return P.c_(this,"{","}")},
$isj:1,
$islF:1},
hB:{"^":"hC;"},
iN:{"^":"b+m;"}}],["","",,P,{"^":"",
jS:function(a,b){var z=H.hr(a)
if(z!=null)return z
throw H.c(new P.fK("Invalid double",a,null))},
fF:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.aS(a)+"'"},
bt:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fF(a)},
cR:function(a){return new P.is(a)},
b4:function(a){H.bM(H.e(a))},
N:{"^":"b;"},
"+bool":0,
bs:{"^":"b;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bs&&this.a===b.a&&!0},
R:function(a,b){return C.c.R(this.a,H.h(b,"$isbs").a)},
gu:function(a){var z=this.a
return(z^C.c.aY(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.ft(H.hq(this))
y=P.b8(H.ho(this))
x=P.b8(H.hk(this))
w=P.b8(H.hl(this))
v=P.b8(H.hn(this))
u=P.b8(H.hp(this))
t=P.fu(H.hm(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isT:1,
$asT:function(){return[P.bs]},
p:{
ft:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fu:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b8:function(a){if(a>=10)return""+a
return"0"+a}}},
ac:{"^":"F;"},
"+double":0,
aH:{"^":"b;a",
L:function(a,b){return C.c.L(this.a,H.h(b,"$isaH").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.c.R(this.a,H.h(b,"$isaH").a)},
k:function(a){var z,y,x,w,v
z=new P.fC()
y=this.a
if(y<0)return"-"+new P.aH(0-y).k(0)
x=z.$1(C.c.O(y,6e7)%60)
w=z.$1(C.c.O(y,1e6)%60)
v=new P.fB().$1(y%1e6)
return""+C.c.O(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isT:1,
$asT:function(){return[P.aH]},
p:{
fA:function(a,b,c,d,e,f){return new P.aH(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fB:{"^":"o:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fC:{"^":"o:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"b;"},
da:{"^":"K;",
k:function(a){return"Throw of null."}},
av:{"^":"K;a,b,c,d",
gad:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gac:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gad()+y+x
if(!this.a)return w
v=this.gac()
u=P.bt(this.b)
return w+v+": "+u},
p:{
cD:function(a,b,c){return new P.av(!0,a,b,c)}}},
dc:{"^":"av;e,f,a,b,c,d",
gad:function(){return"RangeError"},
gac:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bx:function(a,b,c){return new P.dc(null,null,!0,a,b,"Value not in range")},
bw:function(a,b,c,d,e){return new P.dc(b,c,!0,a,d,"Invalid value")}}},
fQ:{"^":"av;e,j:f>,a,b,c,d",
gad:function(){return"RangeError"},
gac:function(){var z,y
z=H.O(this.b)
if(typeof z!=="number")return z.Y()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
C:function(a,b,c,d,e){var z=H.O(e==null?J.aF(b):e)
return new P.fQ(b,z,!0,a,c,"Index out of range")}}},
i0:{"^":"K;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.i0(a)}}},
hZ:{"^":"K;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dm:function(a){return new P.hZ(a)}}},
c7:{"^":"K;a",
k:function(a){return"Bad state: "+this.a},
p:{
c8:function(a){return new P.c7(a)}}},
fn:{"^":"K;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bt(z)+"."},
p:{
aw:function(a){return new P.fn(a)}}},
df:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isK:1},
fs:{"^":"K;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
is:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
fK:{"^":"b;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.f.aC(x,0,75)+"...":x
return y+"\n"+w}else return y}},
b9:{"^":"b;"},
A:{"^":"F;"},
"+int":0,
j:{"^":"b;$ti",
an:["bZ",function(a,b){var z=H.cl(this,"j",0)
return new H.dn(this,H.k(b,{func:1,ret:P.N,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gv(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.L(P.bw(b,0,null,"index",null))
for(z=this.gv(this),y=0;z.t();){x=z.gw(z)
if(b===y)return x;++y}throw H.c(P.C(b,this,"index",null,y))},
k:function(a){return P.fR(this,"(",")")}},
aL:{"^":"b;$ti"},
a:{"^":"b;$ti",$isj:1},
"+List":0,
H:{"^":"b;$ti"},
I:{"^":"b;",
gu:function(a){return P.b.prototype.gu.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
F:{"^":"b;",$isT:1,
$asT:function(){return[P.F]}},
"+num":0,
b:{"^":";",
E:function(a,b){return this===b},
gu:function(a){return H.aR(this)},
k:function(a){return"Instance of '"+H.aS(this)+"'"},
toString:function(){return this.k(this)}},
Z:{"^":"b;"},
d:{"^":"b;",$isT:1,
$asT:function(){return[P.d]},
$ishh:1},
"+String":0,
c9:{"^":"b;N:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dg:function(a,b,c){var z=J.bo(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gw(z))
while(z.t())}else{a+=H.e(z.gw(z))
for(;z.t();)a=a+c+H.e(z.gw(z))}return a}}}}],["","",,W,{"^":"",
fD:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).I(z,a,b,c)
y.toString
z=W.r
z=new H.dn(new W.a0(y),H.k(new W.fE(),{func:1,ret:P.N,args:[z]}),[z])
x=z.gv(z)
if(!x.t())H.L(H.fS())
w=x.gw(x)
if(x.t())H.L(H.fT())
return H.h(w,"$isP")},
aI:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eP(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a1(x)}return z},
io:function(a,b){return document.createElement(a)},
bA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dx:function(a,b,c,d){var z,y
z=W.bA(W.bA(W.bA(W.bA(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jE:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.ih(a)
if(!!J.B(z).$isJ)return z
return}else return H.h(a,"$isJ")},
dP:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.E
if(z===C.e)return a
return z.cQ(a,b)},
G:{"^":"P;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kl:{"^":"f;0j:length=","%":"AccessibleNodeList"},
f9:{"^":"G;",
k:function(a){return String(a)},
$isf9:1,
"%":"HTMLAnchorElement"},
km:{"^":"G;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cE:{"^":"G;",$iscE:1,"%":"HTMLBaseElement"},
fe:{"^":"f;","%":";Blob"},
bq:{"^":"G;",$isbq:1,"%":"HTMLBodyElement"},
bX:{"^":"G;0m:height=,0l:width=",
bP:function(a,b,c){var z=this.cs(a,b,P.jQ(c,null))
return z},
cs:function(a,b,c){return a.getContext(b,c)},
$isbX:1,
"%":"HTMLCanvasElement"},
kq:{"^":"f;",
a7:function(a){return P.Y(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kr:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fo:{"^":"bY;",$isfo:1,"%":"CSSNumericValue|CSSUnitValue"},
ks:{"^":"fr;0j:length=","%":"CSSPerspective"},
ae:{"^":"f;",$isae:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fp:{"^":"ie;0j:length=",
at:function(a,b){var z=this.ct(a,this.aa(a,b))
return z==null?"":z},
aa:function(a,b){var z,y
z=$.e4()
y=z[b]
if(typeof y==="string")return y
y=this.cH(a,b)
z[b]=y
return y},
cH:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fv()+b
if(z in a)return z
return b},
ct:function(a,b){return a.getPropertyValue(b)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fq:{"^":"b;",
gm:function(a){return this.at(a,"height")},
gl:function(a){return this.at(a,"width")}},
bY:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fr:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ku:{"^":"bY;0j:length=","%":"CSSTransformValue"},
kv:{"^":"bY;0j:length=","%":"CSSUnparsedValue"},
kx:{"^":"f;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fw:{"^":"G;","%":"HTMLDivElement"},
fx:{"^":"r;",
cK:function(a,b){return a.adoptNode(b)},
cn:function(a,b){return a.createEvent(b)},
ap:function(a,b){return a.getElementsByTagName(b)},
ao:function(a,b){return a.getElementById(b)},
d9:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
ky:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
fy:{"^":"f;",
cW:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kz:{"^":"ij;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c,"$isR",[P.F],"$asR")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[[P.R,P.F]]},
$isv:1,
$asv:function(){return[[P.R,P.F]]},
$asm:function(){return[[P.R,P.F]]},
$isj:1,
$asj:function(){return[[P.R,P.F]]},
$isa:1,
$asa:function(){return[[P.R,P.F]]},
$asq:function(){return[[P.R,P.F]]},
"%":"ClientRectList|DOMRectList"},
fz:{"^":"f;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gl(a))+" x "+H.e(this.gm(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.aZ(b,"$isR",[P.F],"$asR"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.i(b)
z=this.gl(a)===z.gl(b)&&this.gm(a)===z.gm(b)}else z=!1
else z=!1
return z},
gu:function(a){return W.dx(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gl(a)&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
$isR:1,
$asR:function(){return[P.F]},
"%":";DOMRectReadOnly"},
kA:{"^":"il;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[P.d]},
$isv:1,
$asv:function(){return[P.d]},
$asm:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
kB:{"^":"f;0j:length=","%":"DOMTokenList"},
P:{"^":"r;0df:tagName=",
gcN:function(a){return new W.im(a)},
k:function(a){return a.localName},
I:["a8",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.cQ
if(z==null){z=H.n([],[W.a5])
y=new W.d8(z)
C.a.n(z,W.dw(null))
C.a.n(z,W.dG())
$.cQ=y
d=y}else d=z
z=$.cP
if(z==null){z=new W.dJ(d)
$.cP=z
c=z}else{z.a=d
c=z}}if($.aa==null){z=document
y=z.implementation
y=(y&&C.I).cW(y,"")
$.aa=y
$.bZ=y.createRange()
y=$.aa
y.toString
y=y.createElement("base")
H.h(y,"$iscE")
y.href=z.baseURI
z=$.aa.head;(z&&C.J).F(z,y)}z=$.aa
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbq")}z=$.aa
if(!!this.$isbq)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aa.body;(z&&C.p).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.T,a.tagName)){z=$.bZ;(z&&C.B).bR(z,x)
z=$.bZ
w=(z&&C.B).cU(z,b)}else{x.innerHTML=b
w=$.aa.createDocumentFragment()
for(z=J.i(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.aa.body
if(x==null?z!=null:x!==z)J.cz(x)
c.ax(w)
C.i.cK(document,w)
return w},function(a,b,c){return this.I(a,b,c,null)},"cV",null,null,"gds",5,5,null],
bT:function(a,b,c,d){a.textContent=null
this.F(a,this.I(a,b,c,d))},
bS:function(a,b){return this.bT(a,b,null,null)},
S:function(a,b){return a.getAttribute(b)},
cz:function(a,b){return a.removeAttribute(b)},
gbt:function(a){return new W.dt(a,"change",!1,[W.U])},
$isP:1,
"%":";Element"},
fE:{"^":"o:16;",
$1:function(a){return!!J.B(H.h(a,"$isr")).$isP}},
kD:{"^":"G;0m:height=,0l:width=","%":"HTMLEmbedElement"},
U:{"^":"f;",
gbv:function(a){return W.jE(a.target)},
cu:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isU:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
J:{"^":"f;",
cJ:function(a,b,c,d){H.k(c,{func:1,args:[W.U]})
if(c!=null)this.ck(a,b,c,!1)},
ck:function(a,b,c,d){return a.addEventListener(b,H.b_(H.k(c,{func:1,args:[W.U]}),1),!1)},
cY:function(a,b){return a.dispatchEvent(b)},
$isJ:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBTransaction|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dD|dE|dH|dI"},
af:{"^":"fe;",$isaf:1,"%":"File"},
kU:{"^":"iu;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaf")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.af]},
$isv:1,
$asv:function(){return[W.af]},
$asm:function(){return[W.af]},
$isj:1,
$asj:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$asq:function(){return[W.af]},
"%":"FileList"},
kV:{"^":"J;0j:length=","%":"FileWriter"},
kY:{"^":"G;0j:length=","%":"HTMLFormElement"},
ag:{"^":"f;",$isag:1,"%":"Gamepad"},
fO:{"^":"G;","%":"HTMLHeadElement"},
kZ:{"^":"f;0j:length=","%":"History"},
l_:{"^":"iI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isr")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asm:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fP:{"^":"fx;","%":"HTMLDocument"},
l0:{"^":"G;0m:height=,0l:width=","%":"HTMLIFrameElement"},
l1:{"^":"f;0m:height=,0l:width=","%":"ImageBitmap"},
l2:{"^":"f;0m:height=,0l:width=","%":"ImageData"},
l3:{"^":"G;0m:height=,0l:width=","%":"HTMLImageElement"},
cX:{"^":"G;0m:height=,0l:width=",$iscX:1,"%":"HTMLInputElement"},
h1:{"^":"f;",
k:function(a){return String(a)},
$ish1:1,
"%":"Location"},
h4:{"^":"G;","%":"HTMLAudioElement;HTMLMediaElement"},
le:{"^":"f;0j:length=","%":"MediaList"},
lf:{"^":"iP;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.B(a,new W.h6(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"MIDIInputMap"},
h6:{"^":"o:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
lg:{"^":"iQ;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.B(a,new W.h7(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
h7:{"^":"o:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
ai:{"^":"f;",$isai:1,"%":"MimeType"},
lh:{"^":"iS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isai")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ai]},
$isv:1,
$asv:function(){return[W.ai]},
$asm:function(){return[W.ai]},
$isj:1,
$asj:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$asq:function(){return[W.ai]},
"%":"MimeTypeArray"},
h8:{"^":"hX;","%":"WheelEvent;DragEvent|MouseEvent"},
a0:{"^":"h0;a",
ga_:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.c8("No elements"))
if(y>1)throw H.c(P.c8("More than one element"))
return z.firstChild},
G:function(a,b){var z,y,x,w,v
H.w(b,"$isj",[W.r],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.i(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.h(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.l(y,b)
J.en(z,c,y[b])},
gv:function(a){var z=this.a.childNodes
return new W.cT(z,z.length,-1,[H.b2(C.V,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
$asm:function(){return[W.r]},
$asj:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"J;0d8:previousSibling=",
da:function(a){var z=a.parentNode
if(z!=null)J.bk(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.bY(a):z},
F:function(a,b){return a.appendChild(b)},
cA:function(a,b){return a.removeChild(b)},
cB:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hc:{"^":"iU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isr")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asm:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lq:{"^":"G;0m:height=,0l:width=","%":"HTMLObjectElement"},
ls:{"^":"J;0m:height=,0l:width=","%":"OffscreenCanvas"},
db:{"^":"G;",$isdb:1,"%":"HTMLOutputElement"},
lt:{"^":"f;0m:height=,0l:width=","%":"PaintSize"},
ak:{"^":"f;0j:length=",$isak:1,"%":"Plugin"},
lv:{"^":"iY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isak")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ak]},
$isv:1,
$asv:function(){return[W.ak]},
$asm:function(){return[W.ak]},
$isj:1,
$asj:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"PluginArray"},
lx:{"^":"h8;0m:height=,0l:width=","%":"PointerEvent"},
ht:{"^":"f;",
cU:function(a,b){return a.createContextualFragment(b)},
bR:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lC:{"^":"j3;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.B(a,new W.hy(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hy:{"^":"o:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
lD:{"^":"f;0m:height=,0l:width=","%":"Screen"},
lE:{"^":"G;0j:length=","%":"HTMLSelectElement"},
al:{"^":"J;",$isal:1,"%":"SourceBuffer"},
lG:{"^":"dE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isal")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.al]},
$isv:1,
$asv:function(){return[W.al]},
$asm:function(){return[W.al]},
$isj:1,
$asj:function(){return[W.al]},
$isa:1,
$asa:function(){return[W.al]},
$asq:function(){return[W.al]},
"%":"SourceBufferList"},
am:{"^":"f;",$isam:1,"%":"SpeechGrammar"},
lH:{"^":"j9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isam")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.am]},
$isv:1,
$asv:function(){return[W.am]},
$asm:function(){return[W.am]},
$isj:1,
$asj:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asq:function(){return[W.am]},
"%":"SpeechGrammarList"},
an:{"^":"f;0j:length=",$isan:1,"%":"SpeechRecognitionResult"},
lJ:{"^":"jc;",
h:function(a,b){return this.aU(a,H.u(b))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cw(a,z)
if(y==null)return
b.$2(y,this.aU(a,y))}},
gD:function(a){var z=H.n([],[P.d])
this.B(a,new W.hL(z))
return z},
gj:function(a){return a.length},
aU:function(a,b){return a.getItem(b)},
cw:function(a,b){return a.key(b)},
$asQ:function(){return[P.d,P.d]},
$isH:1,
$asH:function(){return[P.d,P.d]},
"%":"Storage"},
hL:{"^":"o:17;a",
$2:function(a,b){return C.a.n(this.a,a)}},
ao:{"^":"f;",$isao:1,"%":"CSSStyleSheet|StyleSheet"},
hQ:{"^":"G;",
I:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.a8(a,b,c,d)
z=W.fD("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a0(y).G(0,new W.a0(z))
return y},
"%":"HTMLTableElement"},
lM:{"^":"G;",
I:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.a8(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.I(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.ga_(z)
x.toString
z=new W.a0(x)
w=z.ga_(z)
y.toString
w.toString
new W.a0(y).G(0,new W.a0(w))
return y},
"%":"HTMLTableRowElement"},
lN:{"^":"G;",
I:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.a8(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.I(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.ga_(z)
y.toString
x.toString
new W.a0(y).G(0,new W.a0(x))
return y},
"%":"HTMLTableSectionElement"},
di:{"^":"G;",$isdi:1,"%":"HTMLTemplateElement"},
lO:{"^":"f;0l:width=","%":"TextMetrics"},
ap:{"^":"J;",$isap:1,"%":"TextTrack"},
aq:{"^":"J;",$isaq:1,"%":"TextTrackCue|VTTCue"},
lP:{"^":"jk;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaq")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aq]},
$isv:1,
$asv:function(){return[W.aq]},
$asm:function(){return[W.aq]},
$isj:1,
$asj:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"TextTrackCueList"},
lQ:{"^":"dI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isap")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ap]},
$isv:1,
$asv:function(){return[W.ap]},
$asm:function(){return[W.ap]},
$isj:1,
$asj:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"TextTrackList"},
lU:{"^":"f;0j:length=","%":"TimeRanges"},
ar:{"^":"f;",$isar:1,"%":"Touch"},
lV:{"^":"jp;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isar")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ar]},
$isv:1,
$asv:function(){return[W.ar]},
$asm:function(){return[W.ar]},
$isj:1,
$asj:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"TouchList"},
lW:{"^":"f;0j:length=","%":"TrackDefaultList"},
hX:{"^":"U;","%":"CompositionEvent|FocusEvent|KeyboardEvent|TextEvent|TouchEvent;UIEvent"},
m9:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mc:{"^":"h4;0m:height=,0l:width=","%":"HTMLVideoElement"},
md:{"^":"J;0j:length=","%":"VideoTrackList"},
me:{"^":"J;0m:height=,0l:width=","%":"VisualViewport"},
mf:{"^":"f;0l:width=","%":"VTTRegion"},
i3:{"^":"J;",
gcM:function(a){var z,y,x
z=P.F
y=new P.a7(0,$.E,[z])
x=H.k(new W.i4(new P.jg(y,[z])),{func:1,ret:-1,args:[P.F]})
this.cq(a)
this.cC(a,W.dP(x,z))
return y},
cC:function(a,b){return a.requestAnimationFrame(H.b_(H.k(b,{func:1,ret:-1,args:[P.F]}),1))},
cq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdp:1,
"%":"DOMWindow|Window"},
i4:{"^":"o:18;a",
$1:function(a){var z=this.a
a=H.bH(H.co(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.L(P.c8("Future already completed"))
z.ab(a)}},
dr:{"^":"r;",$isdr:1,"%":"Attr"},
ml:{"^":"jv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isae")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ae]},
$isv:1,
$asv:function(){return[W.ae]},
$asm:function(){return[W.ae]},
$isj:1,
$asj:function(){return[W.ae]},
$isa:1,
$asa:function(){return[W.ae]},
$asq:function(){return[W.ae]},
"%":"CSSRuleList"},
mm:{"^":"fz;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.aZ(b,"$isR",[P.F],"$asR"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.i(b)
z=a.width===z.gl(b)&&a.height===z.gm(b)}else z=!1
else z=!1
return z},
gu:function(a){return W.dx(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mn:{"^":"jx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isag")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ag]},
$isv:1,
$asv:function(){return[W.ag]},
$asm:function(){return[W.ag]},
$isj:1,
$asj:function(){return[W.ag]},
$isa:1,
$asa:function(){return[W.ag]},
$asq:function(){return[W.ag]},
"%":"GamepadList"},
ms:{"^":"jz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isr")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isv:1,
$asv:function(){return[W.r]},
$asm:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mt:{"^":"jB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isan")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.an]},
$isv:1,
$asv:function(){return[W.an]},
$asm:function(){return[W.an]},
$isj:1,
$asj:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"SpeechRecognitionResultList"},
mu:{"^":"jD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isao")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ao]},
$isv:1,
$asv:function(){return[W.ao]},
$asm:function(){return[W.ao]},
$isj:1,
$asj:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"StyleSheetList"},
ib:{"^":"d5;cp:a<",
B:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.i(x),v=0;v<z.length;z.length===y||(0,H.S)(z),++v){u=z[v]
b.$2(u,w.S(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.n([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.l(z,w)
v=H.h(z[w],"$isdr")
if(v.namespaceURI==null)C.a.n(y,v.name)}return y},
$asQ:function(){return[P.d,P.d]},
$asH:function(){return[P.d,P.d]}},
im:{"^":"ib;a",
h:function(a,b){return J.bT(this.a,H.u(b))},
gj:function(a){return this.gD(this).length}},
ip:{"^":"hM;$ti"},
dt:{"^":"ip;a,b,c,$ti"},
iq:{"^":"hN;a,b,c,d,e,$ti",p:{
du:function(a,b,c,d,e){var z=W.dP(new W.ir(c),W.U)
if(z!=null&&!0)J.eo(a,b,z,!1)
return new W.iq(0,a,b,z,!1,[e])}}},
ir:{"^":"o:19;a",
$1:function(a){return this.a.$1(H.h(a,"$isU"))}},
be:{"^":"b;a",
cf:function(a){var z,y
z=$.cs()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.S[y],W.k0())
for(y=0;y<12;++y)z.i(0,C.t[y],W.k1())}},
P:function(a){return $.eh().A(0,W.aI(a))},
K:function(a,b,c){var z,y,x
z=W.aI(a)
y=$.cs()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bF(x.$4(a,b,c,this))},
$isa5:1,
p:{
dw:function(a){var z,y
z=document.createElement("a")
y=new W.j4(z,window.location)
y=new W.be(y)
y.cf(a)
return y},
mq:[function(a,b,c,d){H.h(a,"$isP")
H.u(b)
H.u(c)
H.h(d,"$isbe")
return!0},"$4","k0",16,0,10],
mr:[function(a,b,c,d){var z,y,x
H.h(a,"$isP")
H.u(b)
H.u(c)
z=H.h(d,"$isbe").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","k1",16,0,10]}},
q:{"^":"b;$ti",
gv:function(a){return new W.cT(a,this.gj(a),-1,[H.b2(this,a,"q",0)])}},
d8:{"^":"b;a",
P:function(a){return C.a.b1(this.a,new W.he(a))},
K:function(a,b,c){return C.a.b1(this.a,new W.hd(a,b,c))},
$isa5:1},
he:{"^":"o:8;a",
$1:function(a){return H.h(a,"$isa5").P(this.a)}},
hd:{"^":"o:8;a,b,c",
$1:function(a){return H.h(a,"$isa5").K(this.a,this.b,this.c)}},
j5:{"^":"b;",
cg:function(a,b,c,d){var z,y,x
this.a.G(0,c)
z=b.an(0,new W.j6())
y=b.an(0,new W.j7())
this.b.G(0,z)
x=this.c
x.G(0,C.U)
x.G(0,y)},
P:function(a){return this.a.A(0,W.aI(a))},
K:["c0",function(a,b,c){var z,y
z=W.aI(a)
y=this.c
if(y.A(0,H.e(z)+"::"+b))return this.d.cL(c)
else if(y.A(0,"*::"+b))return this.d.cL(c)
else{y=this.b
if(y.A(0,H.e(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.e(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}],
$isa5:1},
j6:{"^":"o:9;",
$1:function(a){return!C.a.A(C.t,H.u(a))}},
j7:{"^":"o:9;",
$1:function(a){return C.a.A(C.t,H.u(a))}},
jh:{"^":"j5;e,a,b,c,d",
K:function(a,b,c){if(this.c0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bT(a,"template")==="")return this.e.A(0,b)
return!1},
p:{
dG:function(){var z,y,x,w,v
z=P.d
y=P.c3(C.r,z)
x=H.p(C.r,0)
w=H.k(new W.ji(),{func:1,ret:z,args:[x]})
v=H.n(["TEMPLATE"],[z])
y=new W.jh(y,P.bc(null,null,null,z),P.bc(null,null,null,z),P.bc(null,null,null,z),null)
y.cg(null,new H.h3(C.r,w,[x,z]),v,null)
return y}}},
ji:{"^":"o:20;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
jf:{"^":"b;",
P:function(a){var z=J.B(a)
if(!!z.$isde)return!1
z=!!z.$isD
if(z&&W.aI(a)==="foreignObject")return!1
if(z)return!0
return!1},
K:function(a,b,c){if(b==="is"||C.f.bV(b,"on"))return!1
return this.P(a)},
$isa5:1},
cT:{"^":"b;a,b,c,0d,$ti",
saV:function(a){this.d=H.x(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.saV(J.b6(this.a,z))
this.c=z
return!0}this.saV(null)
this.c=y
return!1},
gw:function(a){return this.d},
$isaL:1},
ig:{"^":"b;a",$isJ:1,$isdp:1,p:{
ih:function(a){if(a===window)return H.h(a,"$isdp")
else return new W.ig(a)}}},
a5:{"^":"b;"},
j4:{"^":"b;a,b",$ism8:1},
dJ:{"^":"b;a",
ax:function(a){new W.js(this).$2(a,null)},
W:function(a,b){if(b==null)J.cz(a)
else J.bk(b,a)},
cF:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eM(a)
x=J.bT(y.gcp(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a1(t)}v="element unprintable"
try{v=J.b7(a)}catch(t){H.a1(t)}try{u=W.aI(a)
this.cE(H.h(a,"$isP"),b,z,v,u,H.h(y,"$isH"),H.u(x))}catch(t){if(H.a1(t) instanceof P.av)throw t
else{this.W(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cE:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.W(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.P(a)){this.W(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.K(a,"is",g)){this.W(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.n(z.slice(0),[H.p(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.i(z);x>=0;--x){if(x>=y.length)return H.l(y,x)
v=y[x]
if(!this.a.K(a,J.f_(v),w.S(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.S(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.S(z,v)
w.cz(z,v)}}if(!!J.B(a).$isdi)this.ax(a.content)},
$islo:1},
js:{"^":"o:21;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cF(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.W(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eO(z)}catch(w){H.a1(w)
v=H.h(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bk(u,v)}else J.bk(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isr")}}},
ie:{"^":"f+fq;"},
ii:{"^":"f+m;"},
ij:{"^":"ii+q;"},
ik:{"^":"f+m;"},
il:{"^":"ik+q;"},
it:{"^":"f+m;"},
iu:{"^":"it+q;"},
iH:{"^":"f+m;"},
iI:{"^":"iH+q;"},
iP:{"^":"f+Q;"},
iQ:{"^":"f+Q;"},
iR:{"^":"f+m;"},
iS:{"^":"iR+q;"},
iT:{"^":"f+m;"},
iU:{"^":"iT+q;"},
iX:{"^":"f+m;"},
iY:{"^":"iX+q;"},
j3:{"^":"f+Q;"},
dD:{"^":"J+m;"},
dE:{"^":"dD+q;"},
j8:{"^":"f+m;"},
j9:{"^":"j8+q;"},
jc:{"^":"f+Q;"},
jj:{"^":"f+m;"},
jk:{"^":"jj+q;"},
dH:{"^":"J+m;"},
dI:{"^":"dH+q;"},
jo:{"^":"f+m;"},
jp:{"^":"jo+q;"},
ju:{"^":"f+m;"},
jv:{"^":"ju+q;"},
jw:{"^":"f+m;"},
jx:{"^":"jw+q;"},
jy:{"^":"f+m;"},
jz:{"^":"jy+q;"},
jA:{"^":"f+m;"},
jB:{"^":"jA+q;"},
jC:{"^":"f+m;"},
jD:{"^":"jC+q;"}}],["","",,P,{"^":"",
Y:function(a){var z,y,x,w,v
if(a==null)return
z=P.ab(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.S)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
jQ:function(a,b){var z={}
a.B(0,new P.jR(z))
return z},
cN:function(){var z=$.cM
if(z==null){z=J.bP(window.navigator.userAgent,"Opera",0)
$.cM=z}return z},
fv:function(){var z,y
z=$.cJ
if(z!=null)return z
y=$.cK
if(y==null){y=J.bP(window.navigator.userAgent,"Firefox",0)
$.cK=y}if(y)z="-moz-"
else{y=$.cL
if(y==null){y=!P.cN()&&J.bP(window.navigator.userAgent,"Trident/",0)
$.cL=y}if(y)z="-ms-"
else z=P.cN()?"-o-":"-webkit-"}$.cJ=z
return z},
jR:{"^":"o:6;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",hg:{"^":"hx;",$ishg:1,"%":"IDBOpenDBRequest|IDBVersionChangeRequest"},hx:{"^":"J;","%":";IDBRequest"},mb:{"^":"U;0bv:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",iZ:{"^":"b;"},R:{"^":"iZ;$ti"}}],["","",,P,{"^":"",fa:{"^":"f;",$isfa:1,"%":"SVGAnimatedLength"},kE:{"^":"D;0m:height=,0l:width=","%":"SVGFEBlendElement"},kF:{"^":"D;0m:height=,0l:width=","%":"SVGFEColorMatrixElement"},kG:{"^":"D;0m:height=,0l:width=","%":"SVGFEComponentTransferElement"},kH:{"^":"D;0m:height=,0l:width=","%":"SVGFECompositeElement"},kI:{"^":"D;0m:height=,0l:width=","%":"SVGFEConvolveMatrixElement"},kJ:{"^":"D;0m:height=,0l:width=","%":"SVGFEDiffuseLightingElement"},kK:{"^":"D;0m:height=,0l:width=","%":"SVGFEDisplacementMapElement"},kL:{"^":"D;0m:height=,0l:width=","%":"SVGFEFloodElement"},kM:{"^":"D;0m:height=,0l:width=","%":"SVGFEGaussianBlurElement"},kN:{"^":"D;0m:height=,0l:width=","%":"SVGFEImageElement"},kO:{"^":"D;0m:height=,0l:width=","%":"SVGFEMergeElement"},kP:{"^":"D;0m:height=,0l:width=","%":"SVGFEMorphologyElement"},kQ:{"^":"D;0m:height=,0l:width=","%":"SVGFEOffsetElement"},kR:{"^":"D;0m:height=,0l:width=","%":"SVGFESpecularLightingElement"},kS:{"^":"D;0m:height=,0l:width=","%":"SVGFETileElement"},kT:{"^":"D;0m:height=,0l:width=","%":"SVGFETurbulenceElement"},kW:{"^":"D;0m:height=,0l:width=","%":"SVGFilterElement"},kX:{"^":"ba;0m:height=,0l:width=","%":"SVGForeignObjectElement"},fN:{"^":"ba;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ba:{"^":"D;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},l4:{"^":"ba;0m:height=,0l:width=","%":"SVGImageElement"},aP:{"^":"f;",$isaP:1,"%":"SVGLength"},la:{"^":"iK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.h(c,"$isaP")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aP]},
$isj:1,
$asj:function(){return[P.aP]},
$isa:1,
$asa:function(){return[P.aP]},
$asq:function(){return[P.aP]},
"%":"SVGLengthList"},lb:{"^":"D;0m:height=,0l:width=","%":"SVGMaskElement"},aQ:{"^":"f;",$isaQ:1,"%":"SVGNumber"},lp:{"^":"iW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.h(c,"$isaQ")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aQ]},
$isj:1,
$asj:function(){return[P.aQ]},
$isa:1,
$asa:function(){return[P.aQ]},
$asq:function(){return[P.aQ]},
"%":"SVGNumberList"},lu:{"^":"D;0m:height=,0l:width=","%":"SVGPatternElement"},lw:{"^":"f;0j:length=","%":"SVGPointList"},ly:{"^":"f;0m:height=,0l:width=","%":"SVGRect"},lz:{"^":"fN;0m:height=,0l:width=","%":"SVGRectElement"},de:{"^":"D;",$isde:1,"%":"SVGScriptElement"},lK:{"^":"je;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.u(c)
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},D:{"^":"P;",
I:function(a,b,c,d){var z,y,x,w,v,u
z=H.n([],[W.a5])
C.a.n(z,W.dw(null))
C.a.n(z,W.dG())
C.a.n(z,new W.jf())
c=new W.dJ(new W.d8(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).cV(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a0(w)
u=z.ga_(z)
for(z=J.i(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
gbt:function(a){return new W.dt(a,"change",!1,[W.U])},
$isD:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lL:{"^":"ba;0m:height=,0l:width=","%":"SVGSVGElement"},aT:{"^":"f;",$isaT:1,"%":"SVGTransform"},lX:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return this.J(a,b)},
i:function(a,b,c){H.h(c,"$isaT")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
J:function(a,b){return a.getItem(b)},
$asm:function(){return[P.aT]},
$isj:1,
$asj:function(){return[P.aT]},
$isa:1,
$asa:function(){return[P.aT]},
$asq:function(){return[P.aT]},
"%":"SVGTransformList"},ma:{"^":"ba;0m:height=,0l:width=","%":"SVGUseElement"},iJ:{"^":"f+m;"},iK:{"^":"iJ+q;"},iV:{"^":"f+m;"},iW:{"^":"iV+q;"},jd:{"^":"f+m;"},je:{"^":"jd+q;"},jq:{"^":"f+m;"},jr:{"^":"jq+q;"}}],["","",,P,{"^":"",aJ:{"^":"b;",$isj:1,
$asj:function(){return[P.ac]},
$isa:1,
$asa:function(){return[P.ac]},
$ishV:1}}],["","",,P,{"^":"",kn:{"^":"f;0j:length=","%":"AudioBuffer"},ko:{"^":"ic;",
h:function(a,b){return P.Y(a.get(H.u(b)))},
B:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.B(a,new P.fc(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isH:1,
$asH:function(){return[P.d,null]},
"%":"AudioParamMap"},fc:{"^":"o:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},kp:{"^":"J;0j:length=","%":"AudioTrackList"},fd:{"^":"J;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lr:{"^":"fd;0j:length=","%":"OfflineAudioContext"},ic:{"^":"f+Q;"}}],["","",,P,{"^":"",ff:{"^":"f;",$isff:1,"%":"WebGLBuffer"},fL:{"^":"f;",$isfL:1,"%":"WebGLFramebuffer"},hs:{"^":"f;",$ishs:1,"%":"WebGLProgram"},lA:{"^":"f;",
b0:function(a,b){return a.activeTexture(b)},
b2:function(a,b,c){return a.attachShader(b,c)},
b3:function(a,b,c){return a.bindBuffer(b,c)},
b5:function(a,b,c){return a.bindFramebuffer(b,c)},
b6:function(a,b,c){return a.bindTexture(b,c)},
b7:function(a,b){return a.blendEquation(b)},
b8:function(a,b,c){return a.blendFunc(b,c)},
b9:function(a,b,c,d){return a.bufferData(b,c,d)},
ba:function(a,b){return a.checkFramebufferStatus(b)},
bb:function(a,b){return a.clear(b)},
bc:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
be:function(a,b){return a.compileShader(b)},
bf:function(a){return a.createBuffer()},
bg:function(a){return a.createFramebuffer()},
bh:function(a){return a.createProgram()},
bi:function(a,b){return a.createShader(b)},
bj:function(a){return a.createTexture()},
bk:function(a,b){return a.depthMask(b)},
bl:function(a,b){return a.disable(b)},
bm:function(a,b,c,d){return a.drawArrays(b,c,d)},
bn:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bo:function(a,b){return a.enable(b)},
bp:function(a,b){return a.enableVertexAttribArray(b)},
br:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
a7:function(a){return P.Y(a.getContextAttributes())},
aq:function(a){return a.getError()},
ar:function(a,b){return a.getProgramInfoLog(b)},
as:function(a,b,c){return a.getProgramParameter(b,c)},
au:function(a,b){return a.getShaderInfoLog(b)},
av:function(a,b,c){return a.getShaderParameter(b,c)},
aw:function(a,b,c){return a.getUniformLocation(b,c)},
bs:function(a,b){return a.linkProgram(b)},
az:function(a,b,c){return a.shaderSource(b,c)},
aB:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bw:function(a,b,c,d,e,f,g,h,i,j){this.ak(a,b,c,d,e,f,g,h,i,j)
return},
ak:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
bx:function(a,b,c,d){return a.texParameterf(b,c,d)},
by:function(a,b,c,d){return a.texParameteri(b,c,d)},
bB:function(a,b,c){return a.uniform1f(b,c)},
bC:function(a,b,c){return a.uniform1i(b,c)},
bD:function(a,b,c){return a.uniform2fv(b,c)},
bE:function(a,b,c){return a.uniform3fv(b,c)},
bF:function(a,b,c){return a.uniform4fv(b,c)},
bG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bI:function(a,b){return a.useProgram(b)},
bJ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bL:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lB:{"^":"f;",
cO:function(a,b){return a.beginTransformFeedback(b)},
cR:function(a,b){return a.bindVertexArray(b)},
cX:function(a){return a.createVertexArray()},
cZ:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
d_:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
d0:function(a){return a.endTransformFeedback()},
di:function(a,b,c,d){this.cI(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
cI:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dk:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b0:function(a,b){return a.activeTexture(b)},
b2:function(a,b,c){return a.attachShader(b,c)},
b3:function(a,b,c){return a.bindBuffer(b,c)},
b5:function(a,b,c){return a.bindFramebuffer(b,c)},
b6:function(a,b,c){return a.bindTexture(b,c)},
b7:function(a,b){return a.blendEquation(b)},
b8:function(a,b,c){return a.blendFunc(b,c)},
b9:function(a,b,c,d){return a.bufferData(b,c,d)},
ba:function(a,b){return a.checkFramebufferStatus(b)},
bb:function(a,b){return a.clear(b)},
bc:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
be:function(a,b){return a.compileShader(b)},
bf:function(a){return a.createBuffer()},
bg:function(a){return a.createFramebuffer()},
bh:function(a){return a.createProgram()},
bi:function(a,b){return a.createShader(b)},
bj:function(a){return a.createTexture()},
bk:function(a,b){return a.depthMask(b)},
bl:function(a,b){return a.disable(b)},
bm:function(a,b,c,d){return a.drawArrays(b,c,d)},
bn:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bo:function(a,b){return a.enable(b)},
bp:function(a,b){return a.enableVertexAttribArray(b)},
br:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
a7:function(a){return P.Y(a.getContextAttributes())},
aq:function(a){return a.getError()},
ar:function(a,b){return a.getProgramInfoLog(b)},
as:function(a,b,c){return a.getProgramParameter(b,c)},
au:function(a,b){return a.getShaderInfoLog(b)},
av:function(a,b,c){return a.getShaderParameter(b,c)},
aw:function(a,b,c){return a.getUniformLocation(b,c)},
bs:function(a,b){return a.linkProgram(b)},
az:function(a,b,c){return a.shaderSource(b,c)},
aB:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bw:function(a,b,c,d,e,f,g,h,i,j){this.ak(a,b,c,d,e,f,g,h,i,j)
return},
ak:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
bx:function(a,b,c,d){return a.texParameterf(b,c,d)},
by:function(a,b,c,d){return a.texParameteri(b,c,d)},
bB:function(a,b,c){return a.uniform1f(b,c)},
bC:function(a,b,c){return a.uniform1i(b,c)},
bD:function(a,b,c){return a.uniform2fv(b,c)},
bE:function(a,b,c){return a.uniform3fv(b,c)},
bF:function(a,b,c){return a.uniform4fv(b,c)},
bG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bI:function(a,b){return a.useProgram(b)},
bJ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bL:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},hD:{"^":"f;",$ishD:1,"%":"WebGLShader"},hR:{"^":"f;",$ishR:1,"%":"WebGLTexture"},hY:{"^":"f;",$ishY:1,"%":"WebGLUniformLocation"},i1:{"^":"f;",$isi1:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",lI:{"^":"jb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return P.Y(this.cv(a,b))},
i:function(a,b,c){H.h(c,"$isH")
throw H.c(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
cv:function(a,b){return a.item(b)},
$asm:function(){return[[P.H,,,]]},
$isj:1,
$asj:function(){return[[P.H,,,]]},
$isa:1,
$asa:function(){return[[P.H,,,]]},
$asq:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},ja:{"^":"f+m;"},jb:{"^":"ja+q;"}}],["","",,G,{"^":"",
i5:function(a){var z,y,x,w
z=H.n(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.l(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.X(z,"\n")},
ds:function(a,b,c){var z,y,x,w
z=J.i(a)
y=z.bi(a,b)
z.az(a,y,c)
z.be(a,y)
x=H.bF(z.av(a,y,35713))
if(x!=null&&!x){w=z.au(a,y)
P.b4("E:Compilation failed:")
P.b4("E:"+G.i5(c))
P.b4("E:Failure:")
P.b4(C.f.C("E:",w))
throw H.c(w)}return y},
cU:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.M],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bR(a[y])
w=b.length
if(z>=w)return H.l(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.l(a,y)
v=J.bS(a[y])
if(x>=w)return H.l(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.l(a,y)
v=J.cx(a[y])
if(z>=w)return H.l(b,z)
b[z]=v}return b},
fI:function(a,b){var z,y,x,w
H.w(a,"$isa",[T.W],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bR(a[y])
w=b.length
if(z>=w)return H.l(b,z)
b[z]=x;++z
if(y>=a.length)return H.l(a,y)
x=J.bS(a[y])
if(z>=w)return H.l(b,z)
b[z]=x}return b},
fJ:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.bz],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bR(a[y])
w=b.length
if(z>=w)return H.l(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.l(a,y)
v=J.bS(a[y])
if(x>=w)return H.l(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.l(a,y)
x=J.cx(a[y])
if(v>=w)return H.l(b,v)
b[v]=x
if(y>=a.length)return H.l(a,y)
C.z.i(b,z+3,J.eR(a[y]))}return b},
fH:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.A]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.b6(a[y],0))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+1,J.b6(a[y],1))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+2,J.b6(a[y],2))
if(y>=a.length)return H.l(a,y)
C.n.i(b,z+3,J.b6(a[y],3))}return b},
iF:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ah(z,[H.p(z,0)]),y=y.gv(y),x=b.x,w=[[P.a,P.A]],v=[P.ac],u=[T.bz],t=[T.M],s=[T.W];y.t();){r=y.d
if(!x.a5(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.dU>0)H.bM("I: "+r)
continue}q=z.h(0,r)
switch($.a2().h(0,r).a){case"vec2":b.U(r,G.fI(H.bj(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.U(r,G.cU(H.bj(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.U(r,G.fJ(H.bj(q,"$isa",u,"$asa"),null),4)
break
case"float":b.U(r,new Float32Array(H.bB(H.bj(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.U(r,G.fH(H.bj(q,"$isa",w,"$asa"),null),4)
break}}},
c4:{"^":"b;"},
cb:{"^":"c4;d,a,b,c",
k:function(a){var z,y,x,w
z=H.n(["{"+new H.dk(H.jY(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ah(y,[H.p(y,0)]),x=x.gv(x);x.t();){w=x.d
C.a.n(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.X(z,"\n")}},
fh:{"^":"b;0a,b",
bq:function(a,b,c){J.eI(this.a,b)
if(c>0)J.f6(this.a,b,c)},
bK:function(a,b,c,d,e,f,g,h){J.bN(this.a,34962,b)
J.f7(this.a,c,d,e,!1,g,h)}},
cV:{"^":"b;a,b,c,d,e",
a0:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.bO(z.a,36160,y)
J.f8(z.a,b,c,d,e)
if(a!==0)J.et(z.a,a)},
p:{
cW:function(a,b,c,d,e){var z,y,x
z=new G.cV(a,null,b,c,d)
y=J.ew(a.a)
z.b=y
J.bO(a.a,36160,y)
J.eL(a.a,36160,36064,3553,b.b,0)
x=J.es(a.a,36160)
if(x!==36053)H.L("Error Incomplete Framebuffer: "+H.e(x))
J.bO(a.a,36160,null)
return z}}},
fG:{"^":"b;"},
cS:{"^":"b;a,b,c,d"},
fM:{"^":"b;a,b,c,d,e",
aF:function(a){switch($.a2().h(0,a).a){case"vec2":this.e.i(0,a,H.n([],[T.W]))
break
case"vec3":this.e.i(0,a,H.n([],[T.M]))
break
case"vec4":this.e.i(0,a,H.n([],[T.bz]))
break
case"float":this.e.i(0,a,H.n([],[P.ac]))
break
case"uvec4":this.e.i(0,a,H.n([],[[P.a,P.A]]))
break}},
c3:function(a,b){var z,y,x,w,v,u
z=[T.W]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.n(y,new T.W(v))}},
c4:function(a,b){var z,y,x,w,v
z=[T.M]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.M(new Float32Array(3))
v.ay(w)
z.n(y,v)}},
c5:function(a){var z,y,x,w,v
H.w(a,"$isa",[T.M],"$asa")
z=this.d
y=z.length
C.a.n(this.c,new G.cS(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.M(new Float32Array(3))
v.ay(w)
C.a.n(z,v)}},
c7:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.n(y,[P.A])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.l(y,v)
u=y[v]
C.a.i(x,w,u.gdn(u))
C.a.i(x,w+1,u.gdq(u))
C.a.i(x,w+2,u.gdr(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.S)(z),++v){t=z[v]
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
z=H.n(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ah(y,[H.p(y,0)]),x=x.gv(x);x.t();){w=x.d
v=$.a2().h(0,w).a
C.a.n(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.X(z," ")}},
h5:{"^":"c4;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sae:function(a){this.cx=H.w(a,"$isa",[P.A],"$asa")},
aE:function(a,b,c){var z,y
C.f.V(a,0)
H.h(b,"$isaJ")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bN(z.a,34962,y)
J.cw(z.a,34962,b,35048)},
c8:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
U:function(a,b,c){var z,y,x,w,v
z=J.ct(a,0)===105
if(z&&this.z===0)this.z=C.c.c1(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bQ(x.a))
this.aE(a,b,c)
w=$.a2().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bm(x.a,this.e)
x.bq(0,v,z?1:0)
x.bK(0,y.h(0,a),v,w.aG(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.n(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ah(z,[H.p(z,0)]),x=x.gv(x);x.t();){w=x.d
C.a.n(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.X(y,"  ")}},
kC:{"^":"b;"},
hw:{"^":"c4;d,e,f,r,x,y,z,Q,0ch,a,b,c",
c9:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.S)(z),++u){t=z[u]
x.i(0,t,J.cy(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.S)(z),++u){t=z[u]
x.i(0,t,J.cy(w.a,v,t))}},
cc:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.n([],[P.d])
x=H.n([],[P.d])
for(y=new H.ah(y,[H.p(y,0)]),y=y.gv(y);y.t();){w=y.d
if(!z.a5(0,w))C.a.n(x,w)}for(z=this.x,z=P.dy(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.A(0,w))C.a.n(x,w)}return x},
ce:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isH",[P.d,P.b],"$asH")
z=Date.now()
for(y=new H.ah(b,[H.p(b,0)]),y=y.gv(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.ct(s,0)){case 117:if(w.a5(0,s)){r=b.h(0,s)
if(v.a5(0,s))H.bM("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a2().h(0,s)
if(q==null)H.L("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.O(r)
J.bU(x.a,p,r)}break
case"float":if(q.c===0){H.dT(r)
J.f2(x.a,p,r)}break
case"mat4":if(q.c===0){s=C.j.gM(H.a9(r,"$isld"))
J.f4(x.a,p,!1,s)}break
case"mat3":if(q.c===0){s=C.j.gM(H.a9(r,"$islc"))
J.f3(x.a,p,!1,s)}break
case"vec4":if(q.c===0){s=C.j.gM(H.a9(r,"$isbz"))
J.cC(x.a,p,s)}else{H.h(r,"$isaJ")
J.cC(x.a,p,r)}break
case"vec3":if(q.c===0){s=C.j.gM(H.a9(r,"$isM"))
J.cB(x.a,p,s)}else{H.h(r,"$isaJ")
J.cB(x.a,p,r)}break
case"vec2":if(q.c===0){s=C.j.gM(H.a9(r,"$isW"))
J.cA(x.a,p,s)}else{H.h(r,"$isaJ")
J.cA(x.a,p,r)}break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bJ(s)
J.cu(x.a,33984+s)
s=H.a9(r,"$isca").b
J.bl(x.a,3553,s)
s=this.ch
J.bU(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bJ(s)
J.cu(x.a,33984+s)
s=H.a9(r,"$isca").b
J.bl(x.a,34067,s)
s=this.ch
J.bU(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
default:H.bM("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":J.eB(x.a,2929)
break
case"cStencilFunc":H.a9(r,"$islT")
r.gd3()
J.bn(x.a,2960)
s=r.gd3()
o=r.gdv(r)
n=r.gdu(r)
J.eX(x.a,s,o,n)
break
case"cDepthWrite":H.bF(r)
J.eA(x.a,r)
break
case"cBlendEquation":H.a9(r,"$islS")
r.gd1()
J.bn(x.a,3042)
s=r.gdm()
o=r.gdt()
J.er(x.a,s,o)
o=r.gd1()
J.eq(x.a,o)
break}++t
break}}m=P.fA(0,0,0,Date.now()-new P.bs(z,!1).a,0,0)
""+t
m.k(0)},
c6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.cb],"$asa")
Date.now()
z=this.d
J.f5(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aW()}for(x=0;x<1;++x){w=b[x]
this.ce(w.a,w.d)}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aP()}for(v=a.cy,v=new H.ah(v,[H.p(v,0)]),v=v.gv(v);v.t();)y.n(0,v.d)
u=this.cc()
if(u.length!==0)P.b4("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bm(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.c8()
s=a.Q
r=a.z
if(t)J.ep(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eG(q,y,v,s,0,r)
else J.eF(q,y,v,s,0)}else{s=z.a
if(r>1)J.eE(s,y,0,v,r)
else J.eD(s,y,0,v)}if(t)J.eJ(z.a)},
a1:function(a,b){return this.c6(a,b,null)},
p:{
dd:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.bc(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.ex(b.a)
t=G.ds(b.a,35633,x)
J.cv(b.a,u,t)
s=G.ds(b.a,35632,w)
J.cv(b.a,u,s)
if(v.length>0)J.f0(b.a,u,v,35980)
J.eW(b.a,u)
if(!H.bF(J.eV(b.a,u,35714)))H.L(J.eU(b.a,u))
z=new G.hw(b,c,d,u,P.c3(c.c,z),P.ab(z,P.b),P.ab(z,z),y,a,!1,!0)
z.c9(a,b,c,d)
return z}}},
z:{"^":"b;a,b,c",
aG:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hE:{"^":"b;a,0b,c,d,e,f,r,x",
c2:function(a){var z,y,x,w
H.w(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.n(z,w)
y.i(0,w,this.r);++this.r}C.a.aA(z)},
aD:function(a){var z,y,x
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.S)(a),++x)C.a.n(y,a[x])
C.a.aA(y)},
ca:function(a,b){this.b=this.aI(!1,H.w(a,"$isa",[P.d],"$asa"),b)},
aH:function(a){return this.ca(a,null)},
aI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.n(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.S)(y),++u){t=y[u]
s=$.a2().h(0,t)
C.a.n(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.n(w,"")
r=x?"in":"out"
if(x)C.a.n(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.l(z,u)
q=z[u]
s=$.a2().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.S)(z),++u){q=z[u]
s=$.a2().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}C.a.n(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.S)(z),++u){q=z[u]
s=$.a2().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.n(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.n(w,"")
if(a)C.a.n(w,"void main(void) {")
C.a.G(w,b)
if(a)C.a.n(w,"}")
return C.a.X(w,"\n")},
p:{
c6:function(a){var z,y
z=P.d
y=[z]
return new G.hE(a,H.n([],y),H.n([],y),H.n([],y),H.n([],y),0,P.ab(z,P.A))}}},
hS:{"^":"b;a,b,c,d,e,f,r"},
ca:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hW:{"^":"ca;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"},
p:{
dl:function(a,b,c,d,e,f,g,h,i){var z,y
z=J.ey(a.a)
J.bl(a.a,3553,z)
J.eY(a.a,3553,0,e,c,d,0,g,h,i)
y=f.e
if(y!==1)J.eZ(a.a,3553,34046,y)
y=f.r
J.bp(a.a,3553,10240,y)
y=f.f
J.bp(a.a,3553,10241,y)
if(f.b){J.bp(a.a,3553,10242,33071)
J.bp(a.a,3553,10243,33071)}f.c
J.eT(a.a)
J.bl(a.a,3553,null)
return new G.hW(c,d,e,b,z,3553,a,f)}}}}],["","",,R,{"^":"",
iO:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.io("span",null),"$isP")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.v).aa(y,"float")
y.setProperty(x,"left","")
x=C.v.aa(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.F(z,v)}return z},
hJ:{"^":"b;",
cb:function(a,b,c){var z,y
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
y=J.i(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
hK:{"^":"hJ;e,f,a,b,c,d",
cd:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.dh(y,2)+" fps"
C.q.bS(this.c,b)
x=C.c.O(30*C.w.cS(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isP")
v=w.style
u=""+x+"px"
v.height=u
C.q.F(z,w)}}}],["","",,A,{"^":"",
dY:function(a){var z,y
z=C.z.d2(H.w(a,"$isj",[P.b],"$asj"),0,new A.k_(),P.A)
if(typeof z!=="number")return H.bJ(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k_:{"^":"o:22;",
$2:function(a,b){var z,y
H.O(a)
z=J.aE(b)
if(typeof a!=="number")return a.C()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",W:{"^":"b;a",
gM:function(a){return this.a},
Z:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.W){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gu:function(a){return A.dY(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.l(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gbM:function(a){return this.a[0]},
gbN:function(a){return this.a[1]}},M:{"^":"b;a",
gM:function(a){return this.a},
T:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
ay:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.M){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gu:function(a){return A.dY(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.l(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbM:function(a){return this.a[0]},
gbN:function(a){return this.a[1]},
gdl:function(a){return this.a[2]}},bz:{"^":"b;"}}],["","",,X,{"^":"",
e_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=$.a2()
y.i(0,"uFlameHeight",C.b)
y.i(0,"uFlameWidth",C.b)
y.i(0,"uFlameTurbulence",C.b)
y.i(0,"uFlameThrottle",C.b)
y.i(0,"uRandomSeed",C.b)
x=document
w=C.i.ao(x,"stats")
v=x.createElement("div")
u=v.style
u.fontWeight="bold"
v.textContent="@@@@"
t=new R.hK(0,0,w,v,x.createElement("div"),R.iO("blue","gray",90,30))
t.cb(w,"blue","gray")
s=H.h(C.i.d9(x,"#webgl-canvas"),"$isbX")
r=s.clientWidth
q=s.clientHeight
s.width=r
s.height=q
p=new G.fh(s)
w=P.d
u=P.b
o=(s&&C.H).bP(s,"webgl2",P.d3(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],w,u))
p.a=o
if(o==null)H.L(P.cR('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.eS(o))
if($.dU>0)P.b4("I: "+n)
J.eu(o,0,0,0,1)
J.bn(o,2929)
J.bn(o,2884)
o=$.e6()
m=G.dl(p,"t1",r,q,6408,o,6408,5121,null)
l=G.dl(p,"t2",r,q,6408,o,6408,5121,null)
o=$.ek()
k=G.dd("fire",p,o,$.ej())
j=G.dd("color",p,o,$.ei())
o=new T.M(new Float32Array(3))
o.T(-1,-1,0)
n=new T.M(new Float32Array(3))
n.T(1,-1,0)
i=new T.M(new Float32Array(3))
i.T(1,1,0)
h=new T.M(new Float32Array(3))
h.T(-1,1,0)
g=[T.M]
f=H.n([o,n,i,h],g)
o=new T.W(new Float32Array(2))
o.Z(0,0)
n=new T.W(new Float32Array(2))
n.Z(1,0)
i=new T.W(new Float32Array(2))
i.Z(1,1)
h=new T.W(new Float32Array(2))
h.Z(0,1)
e=H.n([o,n,i,h],[T.W])
d=new T.M(new Float32Array(3))
d.T(0,0,1)
c=H.n([d,d,d,d],g)
o=H.n([],[G.fG])
n=H.n([],[G.cS])
g=H.n([],g)
b=new G.fM(!1,o,n,g,P.ab(w,[P.a,,]))
b.aF("aTexUV")
b.c5(f)
b.c3("aTexUV",e)
b.aF("aNormal")
b.c4("aNormal",c)
o=k.d
n=k.e.x
i=P.ab(w,u)
h=J.ez(o.a)
a=new G.h5(o,h,4,i,n,0,-1,P.ab(w,P.aJ),"meshdata:quad",!1,!0)
g=G.cU(g,null)
i.i(0,"aPosition",J.bQ(o.a))
a.ch=g
a.aE("aPosition",g,3)
a0=y.h(0,"aPosition")
if(a0==null)H.L("Unknown canonical aPosition")
a1=n.h(0,"aPosition")
J.bm(o.a,h)
o.bq(0,a1,0)
o.bK(0,i.h(0,"aPosition"),a1,a0.aG(),5126,!1,0,0)
y=H.w(b.c7(),"$isa",[P.A],"$asa")
a.y=J.bQ(o.a)
n=a.ch.length
if(n<768){a.sae(new Uint8Array(H.bB(y)))
a.Q=5121}else if(n<196608){a.sae(new Uint16Array(H.bB(y)))
a.Q=5123}else{a.sae(new Uint32Array(H.bB(y)))
a.Q=5125}J.bm(o.a,h)
y=a.y
n=a.cx
J.bN(o.a,34963,y)
J.cw(o.a,34963,n,35048)
G.iF(b,a)
a2=G.cW(p,m,null,null,!1)
a3=G.cW(p,l,null,null,!1)
y=P.ab(w,u)
a4=new G.cb(y,"ug",!1,!0)
y.i(0,"uRandomSeed",0)
y.i(0,"uFlameTurbulence",0.2)
y.i(0,"uFlameHeight",3.5)
y.i(0,"uFlameWidth",1.2)
y.i(0,"uFlameThrottle",0.248)
for(y=C.i.ap(x,"input"),w=y.length,a5=0;a5<y.length;y.length===w||(0,H.S)(y),++a5){u=J.eN(H.h(y[a5],"$isP"))
o=H.p(u,0)
W.du(u.a,u.b,H.k(new X.kd(a4),{func:1,ret:-1,args:[o]}),!1,o)}for(y=C.i.ap(x,"input"),w=y.length,a5=0;a5<y.length;y.length===w||(0,H.S)(y),++a5){u=H.h(y[a5],"$isP")
a6=C.i.cn(x,"Event")
J.em(a6,"change",!0,!0)
J.eC(u,a6)}z.a=0
z.b=0
new X.kc(z,a4,a2,r,q,l,k,a,new G.cV(p,null,null,null,null),m,j,a3,t).$1(0)},
kd:{"^":"o:23;a",
$1:function(a){var z,y
z=H.a9(J.eQ(a),"$iscX")
if(z.type==="range"){y=H.h(C.i.ao(document,J.el(z.id,"2")),"$isdb")
this.a.d.i(0,z.id,P.jS(z.value,null))
y.value=z.value}}},
kc:{"^":"o:24;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.co(a)
if(typeof a!=="number")return a.C()
z=a+0
y=this.a
y.a=z;++y.b
x=this.b
w=x.d
w.i(0,"uRandomSeed",z)
v=this.d
u=this.e
t=this.f
s=this.r
r=this.x
q=this.y
p=this.z
o=this.Q
n=[G.cb]
if(C.c.bQ(y.b,2)===0){this.c.a0(17664,0,0,v,u)
w.i(0,"uTexture",t)
s.a1(r,H.n([x],n))
q.a0(17664,0,0,v,u)
w.i(0,"uTexture",p)
o.a1(r,H.n([x],n))}else{this.ch.a0(17664,0,0,v,u)
w.i(0,"uTexture",p)
s.a1(r,H.n([x],n))
q.a0(17664,0,0,v,u)
w.i(0,"uTexture",t)
o.a1(r,H.n([x],n))}C.ab.gcM(window).bz(this,-1)
this.cx.cd(y.a,""+y.b)}}},1],["","",,V,{"^":""}]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cZ.prototype
return J.cY.prototype}if(typeof a=="string")return J.aN.prototype
if(a==null)return J.d_.prototype
if(typeof a=="boolean")return J.fV.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.jV=function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.b1=function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.dV=function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.jW=function(a){if(typeof a=="number")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aU.prototype
return a}
J.jX=function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aU.prototype
return a}
J.ck=function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.aU.prototype
return a}
J.i=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.b)return a
return J.bg(a)}
J.bI=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.aU.prototype
return a}
J.el=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jV(a).C(a,b)}
J.aD=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).E(a,b)}
J.a3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jW(a).L(a,b)}
J.b6=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k9(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b1(a).h(a,b)}
J.ct=function(a,b){return J.ck(a).V(a,b)}
J.em=function(a,b,c,d){return J.i(a).cu(a,b,c,d)}
J.bk=function(a,b){return J.i(a).cA(a,b)}
J.en=function(a,b,c){return J.i(a).cB(a,b,c)}
J.cu=function(a,b){return J.i(a).b0(a,b)}
J.eo=function(a,b,c,d){return J.i(a).cJ(a,b,c,d)}
J.cv=function(a,b,c){return J.i(a).b2(a,b,c)}
J.ep=function(a,b){return J.i(a).cO(a,b)}
J.bN=function(a,b,c){return J.i(a).b3(a,b,c)}
J.bO=function(a,b,c){return J.i(a).b5(a,b,c)}
J.bl=function(a,b,c){return J.i(a).b6(a,b,c)}
J.bm=function(a,b){return J.i(a).cR(a,b)}
J.eq=function(a,b){return J.i(a).b7(a,b)}
J.er=function(a,b,c){return J.i(a).b8(a,b,c)}
J.cw=function(a,b,c,d){return J.i(a).b9(a,b,c,d)}
J.es=function(a,b){return J.i(a).ba(a,b)}
J.et=function(a,b){return J.i(a).bb(a,b)}
J.eu=function(a,b,c,d,e){return J.i(a).bc(a,b,c,d,e)}
J.ev=function(a,b){return J.jX(a).R(a,b)}
J.bP=function(a,b,c){return J.b1(a).cT(a,b,c)}
J.bQ=function(a){return J.i(a).bf(a)}
J.ew=function(a){return J.i(a).bg(a)}
J.ex=function(a){return J.i(a).bh(a)}
J.ey=function(a){return J.i(a).bj(a)}
J.ez=function(a){return J.i(a).cX(a)}
J.eA=function(a,b){return J.i(a).bk(a,b)}
J.eB=function(a,b){return J.i(a).bl(a,b)}
J.eC=function(a,b){return J.i(a).cY(a,b)}
J.eD=function(a,b,c,d){return J.i(a).bm(a,b,c,d)}
J.eE=function(a,b,c,d,e){return J.i(a).cZ(a,b,c,d,e)}
J.eF=function(a,b,c,d,e){return J.i(a).bn(a,b,c,d,e)}
J.eG=function(a,b,c,d,e,f){return J.i(a).d_(a,b,c,d,e,f)}
J.eH=function(a,b){return J.dV(a).q(a,b)}
J.bn=function(a,b){return J.i(a).bo(a,b)}
J.eI=function(a,b){return J.i(a).bp(a,b)}
J.eJ=function(a){return J.i(a).d0(a)}
J.eK=function(a,b){return J.i(a).B(a,b)}
J.eL=function(a,b,c,d,e,f){return J.i(a).br(a,b,c,d,e,f)}
J.eM=function(a){return J.i(a).gcN(a)}
J.aE=function(a){return J.B(a).gu(a)}
J.bo=function(a){return J.dV(a).gv(a)}
J.aF=function(a){return J.b1(a).gj(a)}
J.eN=function(a){return J.i(a).gbt(a)}
J.eO=function(a){return J.i(a).gd8(a)}
J.eP=function(a){return J.i(a).gdf(a)}
J.eQ=function(a){return J.i(a).gbv(a)}
J.eR=function(a){return J.bI(a).gdw(a)}
J.bR=function(a){return J.bI(a).gbM(a)}
J.bS=function(a){return J.bI(a).gbN(a)}
J.cx=function(a){return J.bI(a).gdl(a)}
J.bT=function(a,b){return J.i(a).S(a,b)}
J.eS=function(a){return J.i(a).a7(a)}
J.eT=function(a){return J.i(a).aq(a)}
J.eU=function(a,b){return J.i(a).ar(a,b)}
J.eV=function(a,b,c){return J.i(a).as(a,b,c)}
J.cy=function(a,b,c){return J.i(a).aw(a,b,c)}
J.eW=function(a,b){return J.i(a).bs(a,b)}
J.cz=function(a){return J.i(a).da(a)}
J.eX=function(a,b,c,d){return J.i(a).aB(a,b,c,d)}
J.eY=function(a,b,c,d,e,f,g,h,i,j){return J.i(a).bw(a,b,c,d,e,f,g,h,i,j)}
J.eZ=function(a,b,c,d){return J.i(a).bx(a,b,c,d)}
J.bp=function(a,b,c,d){return J.i(a).by(a,b,c,d)}
J.f_=function(a){return J.ck(a).dg(a)}
J.b7=function(a){return J.B(a).k(a)}
J.f0=function(a,b,c,d){return J.i(a).di(a,b,c,d)}
J.f1=function(a){return J.ck(a).dj(a)}
J.f2=function(a,b,c){return J.i(a).bB(a,b,c)}
J.bU=function(a,b,c){return J.i(a).bC(a,b,c)}
J.cA=function(a,b,c){return J.i(a).bD(a,b,c)}
J.cB=function(a,b,c){return J.i(a).bE(a,b,c)}
J.cC=function(a,b,c){return J.i(a).bF(a,b,c)}
J.f3=function(a,b,c,d){return J.i(a).bG(a,b,c,d)}
J.f4=function(a,b,c,d){return J.i(a).bH(a,b,c,d)}
J.f5=function(a,b){return J.i(a).bI(a,b)}
J.f6=function(a,b,c){return J.i(a).dk(a,b,c)}
J.f7=function(a,b,c,d,e,f,g){return J.i(a).bJ(a,b,c,d,e,f,g)}
J.f8=function(a,b,c,d,e){return J.i(a).bL(a,b,c,d,e)}
I.aB=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bq.prototype
C.H=W.bX.prototype
C.v=W.fp.prototype
C.q=W.fw.prototype
C.I=W.fy.prototype
C.J=W.fO.prototype
C.i=W.fP.prototype
C.K=J.f.prototype
C.a=J.aM.prototype
C.w=J.cY.prototype
C.c=J.cZ.prototype
C.j=J.d_.prototype
C.f=J.aN.prototype
C.R=J.aO.prototype
C.z=H.h9.prototype
C.n=H.hb.prototype
C.V=W.hc.prototype
C.A=J.hi.prototype
C.B=W.ht.prototype
C.G=W.hQ.prototype
C.u=J.aU.prototype
C.ab=W.i3.prototype
C.e=new P.j_()
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
C.x=function(hooks) { return hooks; }

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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.S=H.n(I.aB(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.T=H.n(I.aB(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.U=H.n(I.aB([]),[P.d])
C.r=H.n(I.aB(["bind","if","ref","repeat","syntax"]),[P.d])
C.t=H.n(I.aB(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.W=new G.z("vec3","vertex btangents",0)
C.d=new G.z("vec3","",0)
C.X=new G.z("vec4","delta from light",0)
C.o=new G.z("","",0)
C.C=new G.z("vec3","vertex coordinates",0)
C.Y=new G.z("vec3","vertex binormals",0)
C.D=new G.z("vec4","for wireframe",0)
C.Z=new G.z("vec4","per vertex color",0)
C.a_=new G.z("float","for normal maps",0)
C.k=new G.z("mat4","",0)
C.a1=new G.z("mat4","",4)
C.a0=new G.z("mat4","",128)
C.b=new G.z("float","",0)
C.a2=new G.z("float","",4)
C.a3=new G.z("float","depth for shadowmaps",0)
C.h=new G.z("sampler2D","",0)
C.a4=new G.z("float","for bump maps",0)
C.a5=new G.z("vec2","texture uvs",0)
C.a6=new G.z("float","time since program start in sec",0)
C.l=new G.z("vec2","",0)
C.a7=new G.z("samplerCube","",0)
C.m=new G.z("vec4","",0)
C.a8=new G.z("vec3","vertex normals",0)
C.a9=new G.z("sampler2DShadow","",0)
C.E=new G.z("vec3","per vertex color",0)
C.F=new G.z("mat3","",0)
C.aa=new G.z("vec3","vertex tangents",0)
$.a4=0
$.aG=null
$.cF=null
$.ce=!1
$.dX=null
$.dQ=null
$.e2=null
$.bG=null
$.bK=null
$.cm=null
$.az=null
$.aW=null
$.aX=null
$.cf=!1
$.E=C.e
$.aa=null
$.bZ=null
$.cQ=null
$.cP=null
$.cM=null
$.cL=null
$.cK=null
$.cJ=null
$.dU=0
$.fm=" // range is [0, 1] \n vec3 HUEtoRGB(float hue) {\n    float r = clamp(abs(hue * 6.0 - 3.0) - 1.0, 0.0, 1.0);\n    float g = clamp(2.0 - abs(hue * 6.0 - 2.0), 0.0, 1.0);\n    float b = clamp(2.0 - abs(hue * 6.0 - 4.0), 0.0, 1.0);\n    return vec3(r, g, b);\n }\n \n vec3 HSLtoRGB(vec3 HSL) {\n     vec3 RGB = HUEtoRGB(HSL.x);\n     float C = (1.0 - abs(2.0 * HSL.z - 1.0)) * HSL.y;\n     return (RGB - 0.5) * C + HSL.z;\n  }\n"
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
I.$lazy(y,x,w)}})(["kw","e5",function(){return H.dW("_$dart_dartClosure")},"l9","cq",function(){return H.dW("_$dart_js")},"lY","e7",function(){return H.a6(H.by({
toString:function(){return"$receiver$"}}))},"lZ","e8",function(){return H.a6(H.by({$method$:null,
toString:function(){return"$receiver$"}}))},"m_","e9",function(){return H.a6(H.by(null))},"m0","ea",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"m3","ed",function(){return H.a6(H.by(void 0))},"m4","ee",function(){return H.a6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"m2","ec",function(){return H.a6(H.dj(null))},"m1","eb",function(){return H.a6(function(){try{null.$method$}catch(z){return z.message}}())},"m6","eg",function(){return H.a6(H.dj(void 0))},"m5","ef",function(){return H.a6(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mh","cr",function(){return P.i6()},"mx","b5",function(){return[]},"kt","e4",function(){return{}},"mo","eh",function(){return P.c3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mp","cs",function(){return P.ab(P.d,P.b9)},"mv","a2",function(){return P.d3(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.b,"iaColor",C.d,"vColor",C.E,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.b,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_],P.d,G.z)},"lR","e6",function(){var z=new G.hS(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"mD","ek",function(){var z,y
z=G.c6("nullShaderV")
y=[P.d]
z.c2(H.n(["aPosition"],y))
z.b=z.aI(!0,H.w(H.n(["gl_Position = vec4(aPosition, 1.0);"],y),"$isa",y,"$asa"),null)
return z},"mB","ej",function(){var z,y
z=G.c6("fireShaderF")
y=[P.d]
z.aD(H.n(["uTexture","uFlameThrottle","uRandomSeed","uFlameWidth","uFlameHeight","uFlameTurbulence"],y))
z.aH(H.n(["float rand(vec2 xy){\n    return fract(sin(dot(xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n    \nfloat get(vec2 xy) {\n    vec2 DIM = vec2(textureSize(uTexture, 0));  \n    return texture(uTexture, xy / DIM).r;\n}\n\nfloat NextValue(vec2 xy) {\n    if (xy.y < 1.0) {\n        float r = rand(vec2(uRandomSeed, xy.x));\n        return get(xy) + (r - 0.5) * uFlameTurbulence; \n    }\n    \n    float height = uFlameHeight;\n    float width =  uFlameWidth;\n    return (4.0 * get(xy) +\n            get(xy + vec2(0.0, -height)) +\n            get(xy + vec2(-width,  -height)) +\n            get(xy + vec2(width,  -height)) +\n            get(xy + vec2(0.0, -2.0 * height))) * uFlameThrottle * 0.5;\n}\n\nvoid main() {\n    float v = NextValue(gl_FragCoord.xy);\n    oFragColor.r = v;\n}\n"],y))
return z},"my","ei",function(){var z,y
z=G.c6("colorShaderF")
y=[P.d]
z.aD(H.n(["uTexture"],y))
z.aH(H.n([$.fm,"float get(vec2 xy) {\n    vec2 DIM = vec2(textureSize(uTexture, 0));  \n    return texture(uTexture, xy / DIM).r;\n}\n\nvoid main() {\n    float v  = get(gl_FragCoord.xy);\n    vec3 hsl = vec3(v / 3.0, 1.0, clamp(2.0 * v, 0.0, 1.0));\n    oFragColor.rgb = HSLtoRGB(hsl);\n}\n"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.d,args:[P.A]},{func:1,ret:P.N,args:[W.a5]},{func:1,ret:P.N,args:[P.d]},{func:1,ret:P.N,args:[W.P,P.d,P.d,W.be]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,],opt:[P.Z]},{func:1,ret:[P.a7,,],args:[,]},{func:1,ret:P.N,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.I,args:[P.F]},{func:1,args:[W.U]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:P.A,args:[P.A,P.b]},{func:1,ret:P.I,args:[W.U]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.A,args:[,,]}]
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
if(x==y)H.kj(d||a)
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
Isolate.aB=a.aB
Isolate.b0=a.b0
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
if(typeof dartMainRunner==="function")dartMainRunner(X.e_,[])
else X.e_([])})})()
//# sourceMappingURL=fire.dart.js.map
