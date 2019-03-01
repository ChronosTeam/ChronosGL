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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.b7=function(){}
var dart=[["","",,H,{"^":"",mb:{"^":"c;a"}}],["","",,J,{"^":"",
cD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bT:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cC==null){H.kY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cr("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cG()]
if(v!=null)return v
v=H.l2(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cG(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
f:{"^":"c;",
E:function(a,b){return a===b},
gu:function(a){return H.b_(a)},
k:["cc",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|NavigatorAutomationInformation|NavigatorCookies|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hF:{"^":"f;",
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$isU:1},
dp:{"^":"f;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
$isE:1},
cf:{"^":"f;",
gu:function(a){return 0},
k:["ce",function(a){return String(a)}]},
i7:{"^":"cf;"},
b2:{"^":"cf;"},
bj:{"^":"cf;",
k:function(a){var z=a[$.eJ()]
if(z==null)return this.ce(a)
return"JavaScript function for "+H.e(J.bc(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbf:1},
bh:{"^":"f;$ti",
l:function(a,b){H.x(b,H.o(a,0))
if(!!a.fixed$length)H.W(P.z("add"))
a.push(b)},
I:function(a,b){var z,y
H.v(b,"$isk",[H.o(a,0)],"$ask")
if(!!a.fixed$length)H.W(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.Z)(b),++y)a.push(b[y])},
Z:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
b9:function(a,b){var z,y
H.l(b,{func:1,ret:P.U,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aG(a))}return!1},
c6:function(a,b){if(!!a.immutable$list)H.W(P.z("sort"))
H.iw(a,J.kx(),H.o(a,0))},
ab:function(a){return this.c6(a,null)},
D:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aF(a[z],b))return!0
return!1},
k:function(a){return P.cd(a,"[","]")},
gv:function(a){return new J.fY(a,a.length,0,[H.o(a,0)])},
gu:function(a){return H.b_(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.b6(a,b))
return a[b]},
h:function(a,b,c){H.x(c,H.o(a,0))
if(!!a.immutable$list)H.W(P.z("indexed set"))
if(b>=a.length||b<0)throw H.d(H.b6(a,b))
a[b]=c},
$ist:1,
$ast:I.b7,
$isk:1,
$isa:1,
p:{
hE:function(a,b){return J.ce(H.h(a,[b]))},
ce:function(a){H.bs(a)
a.fixed$length=Array
return a},
m9:[function(a,b){return J.fm(H.er(a,"$isa_"),H.er(b,"$isa_"))},"$2","kx",8,0,29]}},
ma:{"^":"bh;$ti"},
fY:{"^":"c;a,b,c,0d,$ti",
saZ:function(a){this.d=H.x(a,H.o(this,0))},
gw:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.Z(z))
x=this.c
if(x>=y){this.saZ(null)
return!1}this.saZ(z[x]);++this.c
return!0},
$isaW:1},
bE:{"^":"f;",
V:function(a,b){var z
H.cE(b)
if(typeof b!=="number")throw H.d(H.bq(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.ga8(b)
if(this.ga8(a)===z)return 0
if(this.ga8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga8:function(a){return a===0?1/a<0:a<0},
de:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.z(""+a+".ceil()"))},
dJ:function(a,b){var z
if(b>20)throw H.d(P.bG(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ga8(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
cg:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b6(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.b6(a,b)},
b6:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.z("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
b4:function(a,b){var z
if(a>0)z=this.d_(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d_:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.d(H.bq(b))
return a>b},
$isa_:1,
$asa_:function(){return[P.I]},
$isak:1,
$isI:1},
dn:{"^":"bE;",$isD:1},
dm:{"^":"bE;"},
bi:{"^":"f;",
ag:function(a,b){if(b>=a.length)throw H.d(H.b6(a,b))
return a.charCodeAt(b)},
H:function(a,b){H.u(b)
if(typeof b!=="string")throw H.d(P.d_(b,null,null))
return a+b},
c8:function(a,b,c){var z
if(c>a.length)throw H.d(P.bG(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c7:function(a,b){return this.c8(a,b,0)},
cb:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bH(b,null,null))
if(b>c)throw H.d(P.bH(b,null,null))
if(c>a.length)throw H.d(P.bH(c,null,null))
return a.substring(b,c)},
ca:function(a,b){return this.cb(a,b,null)},
dI:function(a){return a.toLowerCase()},
dh:function(a,b,c){if(c>a.length)throw H.d(P.bG(c,0,a.length,null,null))
return H.l9(a,b,c)},
V:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.d(H.bq(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.d(H.b6(a,b))
return a[b]},
$ist:1,
$ast:I.b7,
$isa_:1,
$asa_:function(){return[P.b]},
$isi6:1,
$isb:1}}],["","",,H,{"^":"",
dl:function(){return new P.cp("No element")},
hD:function(){return new P.cp("Too many elements")},
iw:function(a,b,c){H.v(a,"$isa",[c],"$asa")
H.l(b,{func:1,ret:P.D,args:[c,c]})
H.bm(a,0,J.aS(a)-1,b,c)},
bm:function(a,b,c,d,e){H.v(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.iv(a,b,c,d,e)
else H.iu(a,b,c,d,e)},
iv:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.aN(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a8(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
iu:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isa",[a2],"$asa")
H.l(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.e.T(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.T(b+a0,2)
v=w-z
u=w+z
t=J.aN(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.a8(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a8(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a8(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a8(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a8(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a8(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a8(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a8(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a8(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aF(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a0()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.P()
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
if(typeof e!=="number")return e.a0()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.P()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.P()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a0()
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
if(m<y&&l>x){for(;J.aF(a1.$2(t.i(a,m),r),0);)++m
for(;J.aF(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a0()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bm(a,m,l,a1,a2)}else H.bm(a,m,l,a1,a2)},
db:{"^":"k;"},
bF:{"^":"db;$ti",
gv:function(a){return new H.ds(this,this.gj(this),0,[H.cA(this,"bF",0)])},
av:function(a,b){return this.cd(0,H.l(b,{func:1,ret:P.U,args:[H.cA(this,"bF",0)]}))}},
ds:{"^":"c;a,b,c,0d,$ti",
saS:function(a){this.d=H.x(a,H.o(this,0))},
gw:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.aN(z)
x=y.gj(z)
if(this.b!==x)throw H.d(P.aG(z))
w=this.c
if(w>=x){this.saS(null)
return!1}this.saS(y.t(z,w));++this.c
return!0},
$isaW:1},
hQ:{"^":"bF;a,b,$ti",
gj:function(a){return J.aS(this.a)},
t:function(a,b){return this.b.$1(J.fv(this.a,b))},
$asbF:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dO:{"^":"k;a,b,$ti",
gv:function(a){return new H.iT(J.by(this.a),this.b,this.$ti)}},
iT:{"^":"aW;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gw(z)))return!0
return!1},
gw:function(a){var z=this.a
return z.gw(z)}},
bD:{"^":"c;$ti"}}],["","",,H,{"^":"",
aE:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kQ:function(a){return init.types[H.V(a)]},
l0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isw},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bc(a)
if(typeof z!=="string")throw H.d(H.bq(a))
return z},
b_:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b0:function(a){return H.i8(a)+H.bO(H.al(a),0,null)},
i8:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.L||!!z.$isb2){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aE(w.length>1&&C.h.ag(w,0)===36?C.h.ca(w,1):w)},
aI:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ig:function(a){var z=H.aI(a).getFullYear()+0
return z},
id:function(a){var z=H.aI(a).getMonth()+1
return z},
i9:function(a){var z=H.aI(a).getDate()+0
return z},
ia:function(a){var z=H.aI(a).getHours()+0
return z},
ic:function(a){var z=H.aI(a).getMinutes()+0
return z},
ie:function(a){var z=H.aI(a).getSeconds()+0
return z},
ib:function(a){var z=H.aI(a).getMilliseconds()+0
return z},
bU:function(a){throw H.d(H.bq(a))},
n:function(a,b){if(a==null)J.aS(a)
throw H.d(H.b6(a,b))},
b6:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
z=H.V(J.aS(a))
if(!(b<0)){if(typeof z!=="number")return H.bU(z)
y=b>=z}else y=!0
if(y)return P.F(b,a,"index",null,z)
return P.bH(b,"index",null)},
bq:function(a){return new P.an(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.cn()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eu})
z.name=""}else z.toString=H.eu
return z},
eu:function(){return J.bc(this.dartException)},
W:function(a){throw H.d(a)},
Z:function(a){throw H.d(P.aG(a))},
a0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.b4(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cg(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dy(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eN()
u=$.eO()
t=$.eP()
s=$.eQ()
r=$.eT()
q=$.eU()
p=$.eS()
$.eR()
o=$.eW()
n=$.eV()
m=v.K(y)
if(m!=null)return z.$1(H.cg(H.u(y),m))
else{m=u.K(y)
if(m!=null){m.method="call"
return z.$1(H.cg(H.u(y),m))}else{m=t.K(y)
if(m==null){m=s.K(y)
if(m==null){m=r.K(y)
if(m==null){m=q.K(y)
if(m==null){m=p.K(y)
if(m==null){m=s.K(y)
if(m==null){m=o.K(y)
if(m==null){m=n.K(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dy(H.u(y),m))}}return z.$1(new H.iQ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dD()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.an(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dD()
return a},
aO:function(a){var z
if(a==null)return new H.e4(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e4(a)},
kM:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
l_:function(a,b,c,d,e,f){H.i(a,"$isbf")
switch(H.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.de("Unsupported number of arguments for wrapped closure"))},
aj:function(a,b){var z
H.V(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l_)
a.$identity=z
return z},
h6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.ik(z).r}else x=d
w=e?Object.create(new H.ix().constructor.prototype):Object.create(new H.c8(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a9
if(typeof u!=="number")return u.H()
$.a9=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d4(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kQ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d2:H.c9
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
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
h3:function(a,b,c,d){var z=H.c9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d4:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h5(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h3(y,!w,z,b)
if(y===0){w=$.a9
if(typeof w!=="number")return w.H()
$.a9=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aT
if(v==null){v=H.bB("self")
$.aT=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a9
if(typeof w!=="number")return w.H()
$.a9=w+1
t+=w
w="return function("+t+"){return this."
v=$.aT
if(v==null){v=H.bB("self")
$.aT=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
h4:function(a,b,c,d){var z,y
z=H.c9
y=H.d2
switch(b?-1:a){case 0:throw H.d(H.iq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h5:function(a,b){var z,y,x,w,v,u,t,s
z=$.aT
if(z==null){z=H.bB("self")
$.aT=z}y=$.d1
if(y==null){y=H.bB("receiver")
$.d1=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h4(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.a9
if(typeof y!=="number")return y.H()
$.a9=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.a9
if(typeof y!=="number")return y.H()
$.a9=y+1
return new Function(z+y+"}")()},
cy:function(a,b,c,d,e,f,g){return H.h6(a,b,H.V(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a5(a,"String"))},
ej:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a5(a,"double"))},
cE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a5(a,"num"))},
bQ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a5(a,"bool"))},
V:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a5(a,"int"))},
cF:function(a,b){throw H.d(H.a5(a,H.aE(H.u(b).substring(3))))},
l7:function(a,b){throw H.d(H.d3(a,H.aE(H.u(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cF(a,b)},
ae:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.l7(a,b)},
er:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cF(a,b)},
bs:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.d(H.a5(a,"List<dynamic>"))},
l1:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cF(a,b)},
cz:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.V(z)]
else return a.$S()}return},
br:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cz(J.B(a))
if(z==null)return!1
return H.e9(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.cu)return a
$.cu=!0
try{if(H.br(a,b))return a
z=H.bt(b)
y=H.a5(a,z)
throw H.d(y)}finally{$.cu=!1}},
b8:function(a,b){if(a!=null&&!H.cx(a,b))H.W(H.a5(a,H.bt(b)))
return a},
ee:function(a){var z,y
z=J.B(a)
if(!!z.$ism){y=H.cz(z)
if(y!=null)return H.bt(y)
return"Closure"}return H.b0(a)},
la:function(a){throw H.d(new P.hc(H.u(a)))},
en:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
al:function(a){if(a==null)return
return a.$ti},
nE:function(a,b,c){return H.aQ(a["$as"+H.e(c)],H.al(b))},
b9:function(a,b,c,d){var z
H.u(c)
H.V(d)
z=H.aQ(a["$as"+H.e(c)],H.al(b))
return z==null?null:z[d]},
cA:function(a,b,c){var z
H.u(b)
H.V(c)
z=H.aQ(a["$as"+H.e(b)],H.al(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.V(b)
z=H.al(a)
return z==null?null:z[b]},
bt:function(a){return H.aB(a,null)},
aB:function(a,b){var z,y
H.v(b,"$isa",[P.b],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aE(a[0].builtin$cls)+H.bO(a,1,b)
if(typeof a=="function")return H.aE(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.V(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.n(b,y)
return H.e(b[y])}if('func' in a)return H.kw(a,b)
if('futureOr' in a)return"FutureOr<"+H.aB("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kw:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.b]
H.v(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.n(b,r)
t=C.h.H(t,b[r])
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
for(z=H.kL(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.aB(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bO:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isa",[P.b],"$asa")
if(a==null)return""
z=new P.cq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aB(u,c)}return"<"+z.k(0)+">"},
kP:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$ism){y=H.cz(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.al(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aQ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aC:function(a,b,c,d){var z,y
H.u(b)
H.bs(c)
H.u(d)
if(a==null)return!1
z=H.al(a)
y=J.B(a)
if(y[b]==null)return!1
return H.eh(H.aQ(y[d],z),null,c,null)},
bu:function(a,b,c,d){H.u(b)
H.bs(c)
H.u(d)
if(a==null)return a
if(H.aC(a,b,c,d))return a
throw H.d(H.d3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bO(c,0,null),init.mangledGlobalNames)))},
v:function(a,b,c,d){H.u(b)
H.bs(c)
H.u(d)
if(a==null)return a
if(H.aC(a,b,c,d))return a
throw H.d(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bO(c,0,null),init.mangledGlobalNames)))},
eh:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a2(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a2(a[y],b,c[y],d))return!1
return!0},
nx:function(a,b,c){return a.apply(b,H.aQ(J.B(b)["$as"+H.e(c)],H.al(b)))},
ep:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="E"||a===-1||a===-2||H.ep(z)}return!1},
cx:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="E"||b===-1||b===-2||H.ep(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.br(a,b)}z=J.B(a).constructor
y=H.al(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a2(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.cx(a,b))throw H.d(H.a5(a,H.bt(b)))
return a},
a2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a2(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.e9(a,b,c,d)
if('func' in a)return c.builtin$cls==="bf"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a2("type" in a?a.type:null,b,x,d)
else if(H.a2(a,b,x,d))return!0
else{if(!('$is'+"aa" in y.prototype))return!1
w=y.prototype["$as"+"aa"]
v=H.aQ(w,z?a.slice(1):null)
return H.a2(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eh(H.aQ(r,z),b,u,d)},
e9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.l6(m,b,l,d)},
l6:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a2(c[w],d,a[w],b))return!1}return!0},
nA:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
l2:function(a){var z,y,x,w,v,u
z=H.u($.eo.$1(a))
y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bV[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.eg.$2(a,z))
if(z!=null){y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bV[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bW(x)
$.bR[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bV[z]=x
return x}if(v==="-"){u=H.bW(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.es(a,x)
if(v==="*")throw H.d(P.cr(z))
if(init.leafTags[z]===true){u=H.bW(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.es(a,x)},
es:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bW:function(a){return J.cD(a,!1,null,!!a.$isw)},
l5:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bW(z)
else return J.cD(z,c,null,null)},
kY:function(){if(!0===$.cC)return
$.cC=!0
H.kZ()},
kZ:function(){var z,y,x,w,v,u,t,s
$.bR=Object.create(null)
$.bV=Object.create(null)
H.kU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.et.$1(v)
if(u!=null){t=H.l5(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kU:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aM(C.M,H.aM(C.R,H.aM(C.y,H.aM(C.y,H.aM(C.Q,H.aM(C.N,H.aM(C.O(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eo=new H.kV(v)
$.eg=new H.kW(u)
$.et=new H.kX(t)},
aM:function(a,b){return a(b)||b},
l9:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ij:{"^":"c;a,b,c,d,e,f,r,0x",p:{
ik:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ce(z)
y=z[0]
x=z[1]
return new H.ij(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iJ:{"^":"c;a,b,c,d,e,f",
K:function(a){var z,y,x
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
if(z==null)z=H.h([],[P.b])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bJ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dL:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i5:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dy:function(a,b){return new H.i5(a,b==null?null:b.method)}}},
hG:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cg:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hG(a,y,z?null:b.receiver)}}},
iQ:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lb:{"^":"m:5;a",
$1:function(a){if(!!J.B(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e4:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa4:1},
m:{"^":"c;",
k:function(a){return"Closure '"+H.b0(this).trim()+"'"},
gbZ:function(){return this},
$isbf:1,
gbZ:function(){return this}},
dF:{"^":"m;"},
ix:{"^":"dF;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aE(z)+"'"}},
c8:{"^":"dF;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var z,y
z=this.c
if(z==null)y=H.b_(this.a)
else y=typeof z!=="object"?J.aR(z):H.b_(z)
return(y^H.b_(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
p:{
c9:function(a){return a.a},
d2:function(a){return a.c},
bB:function(a){var z,y,x,w,v
z=new H.c8("self","target","receiver","name")
y=J.ce(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iK:{"^":"N;a",
k:function(a){return this.a},
p:{
a5:function(a,b){return new H.iK("TypeError: "+P.bC(a)+": type '"+H.ee(a)+"' is not a subtype of type '"+b+"'")}}},
h1:{"^":"N;a",
k:function(a){return this.a},
p:{
d3:function(a,b){return new H.h1("CastError: "+P.bC(a)+": type '"+H.ee(a)+"' is not a subtype of type '"+b+"'")}}},
ip:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
iq:function(a){return new H.ip(a)}}},
dM:{"^":"c;a,0b,0c,0d",
ga6:function(){var z=this.b
if(z==null){z=H.bt(this.a)
this.b=z}return z},
k:function(a){return this.ga6()},
gu:function(a){var z=this.d
if(z==null){z=C.h.gu(this.ga6())
this.d=z}return z},
E:function(a,b){if(b==null)return!1
return b instanceof H.dM&&this.ga6()===b.ga6()}},
dq:{"^":"dt;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gG:function(a){return new H.ai(this,[H.o(this,0)])},
a7:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cH(z,b)}else{y=this.dw(b)
return y}},
dw:function(a){var z=this.d
if(z==null)return!1
return this.ar(this.al(z,J.aR(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a3(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a3(w,b)
x=y==null?null:y.b
return x}else return this.dz(b)},
dz:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.al(z,J.aR(a)&0x3ffffff)
x=this.ar(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.am()
this.b=z}this.aU(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.am()
this.c=y}this.aU(y,b,c)}else{x=this.d
if(x==null){x=this.am()
this.d=x}w=J.aR(b)&0x3ffffff
v=this.al(x,w)
if(v==null)this.ao(x,w,[this.an(b,c)])
else{u=this.ar(v,b)
if(u>=0)v[u].b=c
else v.push(this.an(b,c))}}},
B:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aG(this))
z=z.c}},
aU:function(a,b,c){var z
H.x(b,H.o(this,0))
H.x(c,H.o(this,1))
z=this.a3(a,b)
if(z==null)this.ao(a,b,this.an(b,c))
else z.b=c},
b2:function(){this.r=this.r+1&67108863},
an:function(a,b){var z,y
z=new H.hH(H.x(a,H.o(this,0)),H.x(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b2()
return z},
ar:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
k:function(a){return P.du(this)},
a3:function(a,b){return a[b]},
al:function(a,b){return a[b]},
ao:function(a,b,c){a[b]=c},
cI:function(a,b){delete a[b]},
cH:function(a,b){return this.a3(a,b)!=null},
am:function(){var z=Object.create(null)
this.ao(z,"<non-identifier-key>",z)
this.cI(z,"<non-identifier-key>")
return z},
$isdr:1},
hH:{"^":"c;a,b,0c,0d"},
ai:{"^":"db;a,$ti",
gj:function(a){return this.a.a},
gv:function(a){var z,y
z=this.a
y=new H.hI(z,z.r,this.$ti)
y.c=z.e
return y}},
hI:{"^":"c;a,b,0c,0d,$ti",
saT:function(a){this.d=H.x(a,H.o(this,0))},
gw:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aG(z))
else{z=this.c
if(z==null){this.saT(null)
return!1}else{this.saT(z.a)
this.c=this.c.c
return!0}}},
$isaW:1},
kV:{"^":"m:5;a",
$1:function(a){return this.a(a)}},
kW:{"^":"m:12;a",
$2:function(a,b){return this.a(a,b)}},
kX:{"^":"m:13;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
kL:function(a){return J.hE(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bN:function(a){var z,y
if(!!J.B(a).$ist)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.b6(b,a))},
dv:{"^":"f;",$isdv:1,"%":"ArrayBuffer"},
cm:{"^":"f;",$iscm:1,$isiL:1,"%":"DataView;ArrayBufferView;cl|dZ|e_|dw|e0|e1|ar"},
cl:{"^":"cm;",
gj:function(a){return a.length},
$ist:1,
$ast:I.b7,
$isw:1,
$asw:I.b7},
dw:{"^":"e_;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
h:function(a,b,c){H.ej(c)
H.ad(b,a,a.length)
a[b]=c},
$asbD:function(){return[P.ak]},
$asp:function(){return[P.ak]},
$isk:1,
$ask:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
"%":"Float64Array"},
ar:{"^":"e1;",
h:function(a,b,c){H.V(c)
H.ad(b,a,a.length)
a[b]=c},
$asbD:function(){return[P.D]},
$asp:function(){return[P.D]},
$isk:1,
$ask:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hX:{"^":"dw;",$isah:1,"%":"Float32Array"},
mk:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ml:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ishB:1,
"%":"Int32Array"},
mm:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mn:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hY:{"^":"ar;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isn8:1,
"%":"Uint32Array"},
mo:{"^":"ar;",
gj:function(a){return a.length},
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mp:{"^":"ar;",
gj:function(a){return a.length},
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dZ:{"^":"cl+p;"},
e_:{"^":"dZ+bD;"},
e0:{"^":"cl+p;"},
e1:{"^":"e0+bD;"}}],["","",,P,{"^":"",
iX:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kE()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aj(new P.iZ(z),1)).observe(y,{childList:true})
return new P.iY(z,y,x)}else if(self.setImmediate!=null)return P.kF()
return P.kG()},
nh:[function(a){self.scheduleImmediate(H.aj(new P.j_(H.l(a,{func:1,ret:-1})),0))},"$1","kE",4,0,4],
ni:[function(a){self.setImmediate(H.aj(new P.j0(H.l(a,{func:1,ret:-1})),0))},"$1","kF",4,0,4],
nj:[function(a){H.l(a,{func:1,ret:-1})
P.kd(0,a)},"$1","kG",4,0,4],
ea:function(a,b){if(H.br(a,{func:1,args:[P.c,P.a4]})){b.toString
return H.l(a,{func:1,ret:null,args:[P.c,P.a4]})}if(H.br(a,{func:1,args:[P.c]})){b.toString
return H.l(a,{func:1,ret:null,args:[P.c]})}throw H.d(P.d_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kz:function(){var z,y
for(;z=$.aK,z!=null;){$.b5=null
y=z.b
$.aK=y
if(y==null)$.b4=null
z.a.$0()}},
nv:[function(){$.cv=!0
try{P.kz()}finally{$.b5=null
$.cv=!1
if($.aK!=null)$.cH().$1(P.ei())}},"$0","ei",0,0,1],
ed:function(a){var z=new P.dP(H.l(a,{func:1,ret:-1}))
if($.aK==null){$.b4=z
$.aK=z
if(!$.cv)$.cH().$1(P.ei())}else{$.b4.b=z
$.b4=z}},
kC:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aK
if(z==null){P.ed(a)
$.b5=$.b4
return}y=new P.dP(a)
x=$.b5
if(x==null){y.b=z
$.b5=y
$.aK=y}else{y.b=x.b
x.b=y
$.b5=y
if(y.b==null)$.b4=y}},
l8:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.A
if(C.d===y){P.aL(null,null,C.d,a)
return}y.toString
P.aL(null,null,y,H.l(y.bc(a),z))},
kv:function(a,b,c){a.dc(0)
b.a2(c)},
bP:function(a,b,c,d,e){var z={}
z.a=d
P.kC(new P.kA(z,e))},
eb:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.A
if(y===c)return d.$0()
$.A=c
z=y
try{y=d.$0()
return y}finally{$.A=z}},
ec:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.A
if(y===c)return d.$1(e)
$.A=c
z=y
try{y=d.$1(e)
return y}finally{$.A=z}},
kB:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.A
if(y===c)return d.$2(e,f)
$.A=c
z=y
try{y=d.$2(e,f)
return y}finally{$.A=z}},
aL:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bc(d):c.d8(d,-1)
P.ed(d)},
iZ:{"^":"m:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iY:{"^":"m:14;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j_:{"^":"m:0;a",
$0:function(){this.a.$0()}},
j0:{"^":"m:0;a",
$0:function(){this.a.$0()}},
kc:{"^":"c;a,0b,c",
cA:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aj(new P.ke(this,b),0),a)
else throw H.d(P.z("`setTimeout()` not found."))},
p:{
kd:function(a,b){var z=new P.kc(!0,0)
z.cA(a,b)
return z}}},
ke:{"^":"m:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
dT:{"^":"c;$ti",
dg:function(a,b){if(a==null)a=new P.cn()
if(this.a.a!==0)throw H.d(P.bn("Future already completed"))
$.A.toString
this.M(a,b)},
df:function(a){return this.dg(a,null)}},
dQ:{"^":"dT;a,$ti",
aq:function(a,b){var z
H.b8(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.d(P.bn("Future already completed"))
z.cD(b)},
M:function(a,b){this.a.cE(a,b)}},
k7:{"^":"dT;a,$ti",
M:function(a,b){this.a.M(a,b)}},
aA:{"^":"c;0a,b,c,d,e,$ti",
dA:function(a){if(this.c!==6)return!0
return this.b.b.as(H.l(this.d,{func:1,ret:P.U,args:[P.c]}),a.a,P.U,P.c)},
du:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.br(z,{func:1,args:[P.c,P.a4]}))return H.b8(w.dD(z,a.a,a.b,null,y,P.a4),x)
else return H.b8(w.as(H.l(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
T:{"^":"c;b5:a<,b,0cX:c<,$ti",
bJ:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.A
if(y!==C.d){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ea(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.T(0,$.A,[c])
w=b==null?1:3
this.ae(new P.aA(x,w,a,b,[z,c]))
return x},
a_:function(a,b){return this.bJ(a,null,b)},
dd:function(a,b){var z,y
z=$.A
y=new P.T(0,z,this.$ti)
if(z!==C.d)a=P.ea(a,z)
z=H.o(this,0)
this.ae(new P.aA(y,2,b,a,[z,z]))
return y},
bi:function(a){return this.dd(a,null)},
ae:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaA")
this.c=a}else{if(z===2){y=H.i(this.c,"$isT")
z=y.a
if(z<4){y.ae(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aL(null,null,z,H.l(new P.jh(this,a),{func:1,ret:-1}))}},
b3:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaA")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isT")
y=u.a
if(y<4){u.b3(a)
return}this.a=y
this.c=u.c}z.a=this.a5(a)
y=this.b
y.toString
P.aL(null,null,y,H.l(new P.jo(z,this),{func:1,ret:-1}))}},
a4:function(){var z=H.i(this.c,"$isaA")
this.c=null
return this.a5(z)},
a5:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a2:function(a){var z,y,x
z=H.o(this,0)
H.b8(a,{futureOr:1,type:z})
y=this.$ti
if(H.aC(a,"$isaa",y,"$asaa"))if(H.aC(a,"$isT",y,null))P.bL(a,this)
else P.dV(a,this)
else{x=this.a4()
H.x(a,z)
this.a=4
this.c=a
P.aJ(this,x)}},
M:function(a,b){var z
H.i(b,"$isa4")
z=this.a4()
this.a=8
this.c=new P.Q(a,b)
P.aJ(this,z)},
cD:function(a){var z
H.b8(a,{futureOr:1,type:H.o(this,0)})
if(H.aC(a,"$isaa",this.$ti,"$asaa")){this.cF(a)
return}this.a=1
z=this.b
z.toString
P.aL(null,null,z,H.l(new P.jj(this,a),{func:1,ret:-1}))},
cF:function(a){var z=this.$ti
H.v(a,"$isaa",z,"$asaa")
if(H.aC(a,"$isT",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aL(null,null,z,H.l(new P.jn(this,a),{func:1,ret:-1}))}else P.bL(a,this)
return}P.dV(a,this)},
cE:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aL(null,null,z,H.l(new P.ji(this,a,b),{func:1,ret:-1}))},
$isaa:1,
p:{
dV:function(a,b){var z,y,x
b.a=1
try{a.bJ(new P.jk(b),new P.jl(b),null)}catch(x){z=H.a0(x)
y=H.aO(x)
P.l8(new P.jm(b,z,y))}},
bL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isT")
if(z>=4){y=b.a4()
b.a=a.a
b.c=a.c
P.aJ(b,y)}else{y=H.i(b.c,"$isaA")
b.a=2
b.c=a
a.b3(y)}},
aJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isQ")
y=y.b
u=v.a
t=v.b
y.toString
P.bP(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aJ(z.a,b)}y=z.a
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
if(p){H.i(r,"$isQ")
y=y.b
u=r.a
t=r.b
y.toString
P.bP(null,null,y,u,t)
return}o=$.A
if(o!=q)$.A=q
else o=null
y=b.c
if(y===8)new P.jr(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jq(x,b,r).$0()}else if((y&2)!==0)new P.jp(z,x,b).$0()
if(o!=null)$.A=o
y=x.b
if(!!J.B(y).$isaa){if(y.a>=4){n=H.i(t.c,"$isaA")
t.c=null
b=t.a5(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bL(y,t)
return}}m=b.b
n=H.i(m.c,"$isaA")
m.c=null
b=m.a5(n)
y=x.a
u=x.b
if(!y){H.x(u,H.o(m,0))
m.a=4
m.c=u}else{H.i(u,"$isQ")
m.a=8
m.c=u}z.a=m
y=m}}}},
jh:{"^":"m:0;a,b",
$0:function(){P.aJ(this.a,this.b)}},
jo:{"^":"m:0;a,b",
$0:function(){P.aJ(this.b,this.a.a)}},
jk:{"^":"m:6;a",
$1:function(a){var z=this.a
z.a=0
z.a2(a)}},
jl:{"^":"m:15;a",
$2:function(a,b){H.i(b,"$isa4")
this.a.M(a,b)},
$1:function(a){return this.$2(a,null)}},
jm:{"^":"m:0;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
jj:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=H.x(this.b,H.o(z,0))
x=z.a4()
z.a=4
z.c=y
P.aJ(z,x)}},
jn:{"^":"m:0;a,b",
$0:function(){P.bL(this.b,this.a)}},
ji:{"^":"m:0;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
jr:{"^":"m:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bF(H.l(w.d,{func:1}),null)}catch(v){y=H.a0(v)
x=H.aO(v)
if(this.d){w=H.i(this.a.a.c,"$isQ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isQ")
else u.b=new P.Q(y,x)
u.a=!0
return}if(!!J.B(z).$isaa){if(z instanceof P.T&&z.gb5()>=4){if(z.gb5()===8){w=this.b
w.b=H.i(z.gcX(),"$isQ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a_(new P.js(t),null)
w.a=!1}}},
js:{"^":"m:16;a",
$1:function(a){return this.a}},
jq:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.x(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.as(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a0(t)
y=H.aO(t)
x=this.a
x.b=new P.Q(z,y)
x.a=!0}}},
jp:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isQ")
w=this.c
if(w.dA(z)&&w.e!=null){v=this.b
v.b=w.du(z)
v.a=!1}}catch(u){y=H.a0(u)
x=H.aO(u)
w=H.i(this.a.a.c,"$isQ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Q(y,x)
s.a=!0}}},
dP:{"^":"c;a,0b"},
iB:{"^":"c;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.T(0,$.A,[P.D])
z.a=0
x=H.o(this,0)
w=H.l(new P.iF(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.iG(z,y),{func:1,ret:-1})
W.dU(this.a,this.b,w,!1,x)
return y},
gds:function(a){var z,y,x,w
z={}
y=new P.T(0,$.A,this.$ti)
z.a=null
x=H.o(this,0)
w=H.l(new P.iD(z,this,y),{func:1,ret:-1,args:[x]})
H.l(new P.iE(y),{func:1,ret:-1})
z.a=W.dU(this.a,this.b,w,!1,x)
return y}},
iF:{"^":"m;a,b",
$1:function(a){H.x(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.o(this.b,0)]}}},
iG:{"^":"m:0;a,b",
$0:function(){this.b.a2(this.a.a)}},
iD:{"^":"m;a,b,c",
$1:function(a){H.x(a,H.o(this.b,0))
P.kv(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.E,args:[H.o(this.b,0)]}}},
iE:{"^":"m:0;a",
$0:function(){var z,y,x,w
try{x=H.dl()
throw H.d(x)}catch(w){z=H.a0(w)
y=H.aO(w)
$.A.toString
this.a.M(z,y)}}},
iC:{"^":"c;"},
Q:{"^":"c;a,b",
k:function(a){return H.e(this.a)},
$isN:1},
kk:{"^":"c;",$isnf:1},
kA:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cn()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.k(0)
throw x}},
jO:{"^":"kk;",
dE:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.d===$.A){a.$0()
return}P.eb(null,null,this,a,-1)}catch(x){z=H.a0(x)
y=H.aO(x)
P.bP(null,null,this,z,H.i(y,"$isa4"))}},
dF:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.d===$.A){a.$1(b)
return}P.ec(null,null,this,a,b,-1,c)}catch(x){z=H.a0(x)
y=H.aO(x)
P.bP(null,null,this,z,H.i(y,"$isa4"))}},
d8:function(a,b){return new P.jQ(this,H.l(a,{func:1,ret:b}),b)},
bc:function(a){return new P.jP(this,H.l(a,{func:1,ret:-1}))},
d9:function(a,b){return new P.jR(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bF:function(a,b){H.l(a,{func:1,ret:b})
if($.A===C.d)return a.$0()
return P.eb(null,null,this,a,b)},
as:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.A===C.d)return a.$1(b)
return P.ec(null,null,this,a,b,c,d)},
dD:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.A===C.d)return a.$2(b,c)
return P.kB(null,null,this,a,b,c,d,e,f)}},
jQ:{"^":"m;a,b,c",
$0:function(){return this.a.bF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jP:{"^":"m:1;a,b",
$0:function(){return this.a.dE(this.b)}},
jR:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.dF(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ch:function(a,b,c){H.bs(a)
return H.v(H.kM(a,new H.dq(0,0,[b,c])),"$isdr",[b,c],"$asdr")},
y:function(a,b){return new H.dq(0,0,[a,b])},
bk:function(a,b,c,d){return new P.jz(0,0,[d])},
hC:function(a,b,c){var z,y
if(P.cw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.h([],[P.b])
y=$.ba()
C.a.l(y,a)
try{P.ky(a,z)}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=P.dE(b,H.l1(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cd:function(a,b,c){var z,y,x
if(P.cw(a))return b+"..."+c
z=new P.cq(b)
y=$.ba()
C.a.l(y,a)
try{x=z
x.a=P.dE(x.gS(),a,", ")}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=z
y.a=y.gS()+c
y=z.gS()
return y.charCodeAt(0)==0?y:y},
cw:function(a){var z,y
for(z=0;y=$.ba(),z<y.length;++z)if(a===y[z])return!0
return!1},
ky:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[P.b],"$asa")
z=a.gv(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.e(z.gw(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.n(b,-1)
v=b.pop()
if(0>=b.length)return H.n(b,-1)
u=b.pop()}else{t=z.gw(z);++x
if(!z.q()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.n(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw(z);++x
for(;z.q();t=s,s=r){r=z.gw(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.n(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.n(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
ci:function(a,b){var z,y,x
z=P.bk(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.Z)(a),++x)z.l(0,H.x(a[x],b))
return z},
du:function(a){var z,y,x
z={}
if(P.cw(a))return"{...}"
y=new P.cq("")
try{C.a.l($.ba(),a)
x=y
x.a=x.gS()+"{"
z.a=!0
J.fy(a,new P.hP(z,y))
z=y
z.a=z.gS()+"}"}finally{z=$.ba()
if(0>=z.length)return H.n(z,-1)
z.pop()}z=y.gS()
return z.charCodeAt(0)==0?z:z},
jz:{"^":"ju;a,0b,0c,0d,0e,0f,r,$ti",
gv:function(a){var z=new P.dY(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
D:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$iscs")!=null}else{y=this.cG(b)
return y}},
cG:function(a){var z=this.d
if(z==null)return!1
return this.b_(this.cL(z,a),a)>=0},
l:function(a,b){var z,y
H.x(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ct()
this.b=z}return this.aV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ct()
this.c=y}return this.aV(y,b)}else return this.cB(0,b)},
cB:function(a,b){var z,y,x
H.x(b,H.o(this,0))
z=this.d
if(z==null){z=P.ct()
this.d=z}y=this.aY(b)
x=z[y]
if(x==null)z[y]=[this.ah(b)]
else{if(this.b_(x,b)>=0)return!1
x.push(this.ah(b))}return!0},
aV:function(a,b){H.x(b,H.o(this,0))
if(H.i(a[b],"$iscs")!=null)return!1
a[b]=this.ah(b)
return!0},
aX:function(){this.r=this.r+1&67108863},
ah:function(a){var z,y
z=new P.cs(H.x(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aX()
return z},
aY:function(a){return J.aR(a)&0x3ffffff},
cL:function(a,b){return a[this.aY(b)]},
b_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
p:{
ct:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cs:{"^":"c;a,0b,0c"},
dY:{"^":"c;a,b,0c,0d,$ti",
saW:function(a){this.d=H.x(a,H.o(this,0))},
gw:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aG(z))
else{z=this.c
if(z==null){this.saW(null)
return!1}else{this.saW(H.x(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isaW:1,
p:{
jA:function(a,b,c){var z=new P.dY(a,b,[c])
z.c=a.e
return z}}},
ju:{"^":"ir;"},
hJ:{"^":"jB;",$isk:1,$isa:1},
p:{"^":"c;$ti",
gv:function(a){return new H.ds(a,this.gj(a),0,[H.b9(this,a,"p",0)])},
t:function(a,b){return this.i(a,b)},
dt:function(a,b,c,d){var z,y,x
H.x(b,d)
H.l(c,{func:1,ret:d,args:[d,H.b9(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gj(a))throw H.d(P.aG(a))}return y},
k:function(a){return P.cd(a,"[","]")}},
dt:{"^":"X;"},
hP:{"^":"m:3;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
X:{"^":"c;$ti",
B:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b9(this,a,"X",0),H.b9(this,a,"X",1)]})
for(z=J.by(this.gG(a));z.q();){y=z.gw(z)
b.$2(y,this.i(a,y))}},
gj:function(a){return J.aS(this.gG(a))},
k:function(a){return P.du(a)},
$isJ:1},
is:{"^":"c;$ti",
I:function(a,b){var z
for(z=J.by(H.v(b,"$isk",this.$ti,"$ask"));z.q();)this.l(0,z.gw(z))},
k:function(a){return P.cd(this,"{","}")},
$isk:1,
$ismG:1},
ir:{"^":"is;"},
jB:{"^":"c+p;"}}],["","",,P,{"^":"",
hp:function(a){if(a instanceof H.m)return a.k(0)
return"Instance of '"+H.b0(a)+"'"},
bC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bc(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hp(a)},
de:function(a){return new P.je(a)},
aD:function(a){H.bX(H.e(a))},
U:{"^":"c;"},
"+bool":0,
bd:{"^":"c;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bd&&this.a===b.a&&!0},
V:function(a,b){return C.e.V(this.a,H.i(b,"$isbd").a)},
gu:function(a){var z=this.a
return(z^C.e.b4(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.hd(H.ig(this))
y=P.be(H.id(this))
x=P.be(H.i9(this))
w=P.be(H.ia(this))
v=P.be(H.ic(this))
u=P.be(H.ie(this))
t=P.he(H.ib(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isa_:1,
$asa_:function(){return[P.bd]},
p:{
hd:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
he:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
be:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"I;"},
"+double":0,
aU:{"^":"c;a",
P:function(a,b){return C.e.P(this.a,H.i(b,"$isaU").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
V:function(a,b){return C.e.V(this.a,H.i(b,"$isaU").a)},
k:function(a){var z,y,x,w,v
z=new P.hm()
y=this.a
if(y<0)return"-"+new P.aU(0-y).k(0)
x=z.$1(C.e.T(y,6e7)%60)
w=z.$1(C.e.T(y,1e6)%60)
v=new P.hl().$1(y%1e6)
return""+C.e.T(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isa_:1,
$asa_:function(){return[P.aU]},
p:{
hk:function(a,b,c,d,e,f){return new P.aU(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hl:{"^":"m:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hm:{"^":"m:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"c;"},
cn:{"^":"N;",
k:function(a){return"Throw of null."}},
an:{"^":"N;a,b,c,d",
gaj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gai:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaj()+y+x
if(!this.a)return w
v=this.gai()
u=P.bC(this.b)
return w+v+": "+u},
p:{
fX:function(a){return new P.an(!1,null,null,a)},
d_:function(a,b,c){return new P.an(!0,a,b,c)}}},
dz:{"^":"an;e,f,a,b,c,d",
gaj:function(){return"RangeError"},
gai:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bH:function(a,b,c){return new P.dz(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.dz(b,c,!0,a,d,"Invalid value")}}},
hA:{"^":"an;e,j:f>,a,b,c,d",
gaj:function(){return"RangeError"},
gai:function(){var z,y
z=H.V(this.b)
if(typeof z!=="number")return z.a0()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
F:function(a,b,c,d,e){var z=H.V(e==null?J.aS(b):e)
return new P.hA(b,z,!0,a,c,"Index out of range")}}},
iR:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
z:function(a){return new P.iR(a)}}},
iP:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cr:function(a){return new P.iP(a)}}},
cp:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
bn:function(a){return new P.cp(a)}}},
h7:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bC(z)+"."},
p:{
aG:function(a){return new P.h7(a)}}},
dD:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isN:1},
hc:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
je:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
bf:{"^":"c;"},
D:{"^":"I;"},
"+int":0,
k:{"^":"c;$ti",
av:["cd",function(a,b){var z=H.cA(this,"k",0)
return new H.dO(this,H.l(b,{func:1,ret:P.U,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gv(this)
for(y=0;z.q();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.W(P.bG(b,0,null,"index",null))
for(z=this.gv(this),y=0;z.q();){x=z.gw(z)
if(b===y)return x;++y}throw H.d(P.F(b,this,"index",null,y))},
k:function(a){return P.hC(this,"(",")")}},
aW:{"^":"c;$ti"},
a:{"^":"c;$ti",$isk:1},
"+List":0,
J:{"^":"c;$ti"},
E:{"^":"c;",
gu:function(a){return P.c.prototype.gu.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
I:{"^":"c;",$isa_:1,
$asa_:function(){return[P.I]}},
"+num":0,
c:{"^":";",
E:function(a,b){return this===b},
gu:function(a){return H.b_(this)},
k:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.k(this)}},
a4:{"^":"c;"},
b:{"^":"c;",$isa_:1,
$asa_:function(){return[P.b]},
$isi6:1},
"+String":0,
cq:{"^":"c;S:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dE:function(a,b,c){var z=J.by(b)
if(!z.q())return a
if(c.length===0){do a+=H.e(z.gw(z))
while(z.q())}else{a+=H.e(z.gw(z))
for(;z.q();)a=a+c+H.e(z.gw(z))}return a}}}}],["","",,W,{"^":"",
kK:function(){return document},
hn:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).J(z,a,b,c)
y.toString
z=W.r
z=new H.dO(new W.a6(y),H.l(new W.ho(),{func:1,ret:P.U,args:[z]}),[z])
x=z.gv(z)
if(!x.q())H.W(H.dl())
w=x.gw(x)
if(x.q())H.W(H.hD())
return H.i(w,"$isa1")},
aV:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fB(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a0(x)}return z},
ja:function(a,b){return document.createElement(a)},
bM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dX:function(a,b,c,d){var z,y
z=W.bM(W.bM(W.bM(W.bM(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ef:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.A
if(z===C.d)return a
return z.d9(a,b)},
L:{"^":"a1;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lc:{"^":"f;0j:length=","%":"AccessibleNodeList"},
fV:{"^":"L;",
k:function(a){return String(a)},
$isfV:1,
"%":"HTMLAnchorElement"},
ld:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d0:{"^":"L;",$isd0:1,"%":"HTMLBaseElement"},
c7:{"^":"f;",$isc7:1,"%":";Blob"},
bA:{"^":"L;",$isbA:1,"%":"HTMLBodyElement"},
ca:{"^":"L;0n:height=,0m:width=",
c_:function(a,b,c){var z=this.cM(a,b,P.kI(c,null))
return z},
cM:function(a,b,c){return a.getContext(b,c)},
$isca:1,
"%":"HTMLCanvasElement"},
li:{"^":"f;",
a9:function(a){return P.a3(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lj:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
h8:{"^":"cb;",$ish8:1,"%":"CSSNumericValue|CSSUnitValue"},
lw:{"^":"hb;0j:length=","%":"CSSPerspective"},
ao:{"^":"f;",$isao:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
h9:{"^":"j3;0j:length=",
az:function(a,b){var z=this.cN(a,this.af(a,b))
return z==null?"":z},
af:function(a,b){var z,y
z=$.eI()
y=z[b]
if(typeof y==="string")return y
y=this.d0(a,b)
z[b]=y
return y},
d0:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hf()+b
if(z in a)return z
return b},
cN:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ha:{"^":"c;",
gn:function(a){return this.az(a,"height")},
gm:function(a){return this.az(a,"width")}},
cb:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
hb:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ly:{"^":"cb;0j:length=","%":"CSSTransformValue"},
lz:{"^":"cb;0j:length=","%":"CSSUnparsedValue"},
lB:{"^":"f;0j:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
hg:{"^":"L;","%":"HTMLDivElement"},
hh:{"^":"r;",
d3:function(a,b){return a.adoptNode(b)},
c0:function(a,b){return a.getElementById(b)},
bE:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
lC:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
hi:{"^":"f;",
dl:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lD:{"^":"j5;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.v(c,"$isY",[P.I],"$asY")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[[P.Y,P.I]]},
$isw:1,
$asw:function(){return[[P.Y,P.I]]},
$asp:function(){return[[P.Y,P.I]]},
$isk:1,
$ask:function(){return[[P.Y,P.I]]},
$isa:1,
$asa:function(){return[[P.Y,P.I]]},
$asq:function(){return[[P.Y,P.I]]},
"%":"ClientRectList|DOMRectList"},
hj:{"^":"f;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.aC(b,"$isY",[P.I],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gu:function(a){return W.dX(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isY:1,
$asY:function(){return[P.I]},
"%":";DOMRectReadOnly"},
lE:{"^":"j7;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.u(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[P.b]},
$isw:1,
$asw:function(){return[P.b]},
$asp:function(){return[P.b]},
$isk:1,
$ask:function(){return[P.b]},
$isa:1,
$asa:function(){return[P.b]},
$asq:function(){return[P.b]},
"%":"DOMStringList"},
lF:{"^":"f;0j:length=","%":"DOMTokenList"},
a1:{"^":"r;0dG:tagName=",
gd6:function(a){return new W.j8(a)},
k:function(a){return a.localName},
dv:function(a,b,c,d,e){var z,y
z=this.J(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":J.cT(a.parentNode,z,a)
break
case"afterbegin":y=a.childNodes
this.bB(a,z,y.length>0?y[0]:null)
break
case"beforeend":this.F(a,z)
break
case"afterend":J.cT(a.parentNode,z,a.nextSibling)
break
default:H.W(P.fX("Invalid position "+b))}},
J:["ac",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dd
if(z==null){z=H.h([],[W.ab])
y=new W.dx(z)
C.a.l(z,W.dW(null))
C.a.l(z,W.e5())
$.dd=y
d=y}else d=z
z=$.dc
if(z==null){z=new W.e8(d)
$.dc=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.J).dl(y,"")
$.af=y
$.cc=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.i(y,"$isd0")
y.href=z.baseURI
z=$.af.head;(z&&C.K).F(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbA")}z=$.af
if(!!this.$isbA)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.o).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.U,a.tagName)){z=$.cc;(z&&C.C).c3(z,x)
z=$.cc
w=(z&&C.C).dj(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cU(x)
c.aD(w)
C.l.d3(document,w)
return w},function(a,b,c){return this.J(a,b,c,null)},"dk",null,null,"gdR",5,5,null],
c5:function(a,b,c,d){a.textContent=null
this.F(a,this.J(a,b,c,d))},
c4:function(a,b){return this.c5(a,b,null,null)},
W:function(a,b){return a.getAttribute(b)},
cS:function(a,b){return a.removeAttribute(b)},
$isa1:1,
"%":";Element"},
ho:{"^":"m:17;",
$1:function(a){return!!J.B(H.i(a,"$isr")).$isa1}},
lI:{"^":"L;0n:height=,0m:width=","%":"HTMLEmbedElement"},
R:{"^":"f;",$isR:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
S:{"^":"f;",
d2:function(a,b,c,d){H.l(c,{func:1,args:[W.R]})
if(c!=null)this.cC(a,b,c,!1)},
cC:function(a,b,c,d){return a.addEventListener(b,H.aj(H.l(c,{func:1,args:[W.R]}),1),!1)},
cU:function(a,b,c,d){return a.removeEventListener(b,H.aj(H.l(c,{func:1,args:[W.R]}),1),!1)},
$isS:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e2|e3|e6|e7"},
ag:{"^":"c7;",$isag:1,"%":"File"},
dg:{"^":"jg;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isag")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ag]},
$isw:1,
$asw:function(){return[W.ag]},
$asp:function(){return[W.ag]},
$isk:1,
$ask:function(){return[W.ag]},
$isa:1,
$asa:function(){return[W.ag]},
$isdg:1,
$asq:function(){return[W.ag]},
"%":"FileList"},
lZ:{"^":"S;0j:length=","%":"FileWriter"},
m1:{"^":"L;0j:length=","%":"HTMLFormElement"},
ap:{"^":"f;",$isap:1,"%":"Gamepad"},
hx:{"^":"L;","%":"HTMLHeadElement"},
m2:{"^":"f;0j:length=","%":"History"},
m3:{"^":"jw;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isr")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hy:{"^":"hh;","%":"HTMLDocument"},
m4:{"^":"L;0n:height=,0m:width=","%":"HTMLIFrameElement"},
m5:{"^":"f;0n:height=,0m:width=","%":"ImageBitmap"},
dk:{"^":"f;0n:height=,0m:width=",$isdk:1,"%":"ImageData"},
m6:{"^":"L;0n:height=,0m:width=","%":"HTMLImageElement"},
m8:{"^":"L;0n:height=,0m:width=","%":"HTMLInputElement"},
hK:{"^":"f;",
k:function(a){return String(a)},
$ishK:1,
"%":"Location"},
hS:{"^":"L;","%":"HTMLAudioElement;HTMLMediaElement"},
mg:{"^":"f;0j:length=","%":"MediaList"},
aH:{"^":"S;",$isaH:1,"%":"MediaStream"},
mh:{"^":"jD;",
i:function(a,b){return P.a3(a.get(H.u(b)))},
B:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.b,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gG:function(a){var z=H.h([],[P.b])
this.B(a,new W.hU(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.b,null]},
$isJ:1,
$asJ:function(){return[P.b,null]},
"%":"MIDIInputMap"},
hU:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mi:{"^":"jE;",
i:function(a,b){return P.a3(a.get(H.u(b)))},
B:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.b,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gG:function(a){var z=H.h([],[P.b])
this.B(a,new W.hV(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.b,null]},
$isJ:1,
$asJ:function(){return[P.b,null]},
"%":"MIDIOutputMap"},
hV:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aq:{"^":"f;",$isaq:1,"%":"MimeType"},
mj:{"^":"jG;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaq")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aq]},
$isw:1,
$asw:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isk:1,
$ask:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"MimeTypeArray"},
hW:{"^":"iN;","%":"WheelEvent;DragEvent|MouseEvent"},
hZ:{"^":"i_;",
c2:function(a,b,c){var z,y,x,w
z=W.aH
y=new P.T(0,$.A,[z])
x=new P.dQ(y,[z])
w=P.ch(["audio",!1,"video",!0],P.b,null)
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.cO(a,new P.k4([],[]).au(w),new W.i0(x),new W.i1(x))
return y},
c1:function(a,b){return this.c2(a,!1,b)},
cO:function(a,b,c,d){H.l(c,{func:1,ret:-1,args:[W.aH]})
H.l(d,{func:1,ret:-1,args:[W.bl]})
return a.getUserMedia(b,H.aj(c,1),H.aj(d,1))},
"%":"Navigator"},
i0:{"^":"m:8;a",
$1:function(a){this.a.aq(0,H.i(a,"$isaH"))}},
i1:{"^":"m:18;a",
$1:function(a){this.a.df(H.i(a,"$isbl"))}},
i_:{"^":"f;","%":"WorkerNavigator;NavigatorConcurrentHardware"},
bl:{"^":"f;",$isbl:1,"%":"NavigatorUserMediaError"},
a6:{"^":"hJ;a",
ga1:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.bn("No elements"))
if(y>1)throw H.d(P.bn("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.v(b,"$isk",[W.r],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.i(c,"$isr")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.n(y,b)
J.fe(z,c,y[b])},
gv:function(a){var z=this.a.childNodes
return new W.dh(z,z.length,-1,[H.b9(C.X,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.n(z,b)
return z[b]},
$asp:function(){return[W.r]},
$ask:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"S;0dB:previousSibling=",
dC:function(a){var z=a.parentNode
if(z!=null)J.bv(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cc(a):z},
F:function(a,b){return a.appendChild(b)},
bB:function(a,b,c){return a.insertBefore(b,c)},
cT:function(a,b){return a.removeChild(b)},
cV:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
i2:{"^":"jI;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isr")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
ms:{"^":"L;0n:height=,0m:width=","%":"HTMLObjectElement"},
mu:{"^":"S;0n:height=,0m:width=","%":"OffscreenCanvas"},
mv:{"^":"f;0n:height=,0m:width=","%":"PaintSize"},
as:{"^":"f;0j:length=",$isas:1,"%":"Plugin"},
mx:{"^":"jM;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isas")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.as]},
$isw:1,
$asw:function(){return[W.as]},
$asp:function(){return[W.as]},
$isk:1,
$ask:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"PluginArray"},
mz:{"^":"hW;0n:height=,0m:width=","%":"PointerEvent"},
ii:{"^":"f;",
dj:function(a,b){return a.createContextualFragment(b)},
c3:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mE:{"^":"jS;",
i:function(a,b){return P.a3(a.get(H.u(b)))},
B:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.b,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gG:function(a){var z=H.h([],[P.b])
this.B(a,new W.io(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.b,null]},
$isJ:1,
$asJ:function(){return[P.b,null]},
"%":"RTCStatsReport"},
io:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mF:{"^":"f;0n:height=,0m:width=","%":"Screen"},
co:{"^":"L;0j:length=",$isco:1,"%":"HTMLSelectElement"},
at:{"^":"S;",$isat:1,"%":"SourceBuffer"},
mH:{"^":"e3;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isat")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.at]},
$isw:1,
$asw:function(){return[W.at]},
$asp:function(){return[W.at]},
$isk:1,
$ask:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"SourceBufferList"},
au:{"^":"f;",$isau:1,"%":"SpeechGrammar"},
mI:{"^":"jY;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isau")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.au]},
$isw:1,
$asw:function(){return[W.au]},
$asp:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"SpeechGrammarList"},
av:{"^":"f;0j:length=",$isav:1,"%":"SpeechRecognitionResult"},
mL:{"^":"k0;",
i:function(a,b){return this.b0(a,H.u(b))},
B:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.b,P.b]})
for(z=0;!0;++z){y=this.cQ(a,z)
if(y==null)return
b.$2(y,this.b0(a,y))}},
gG:function(a){var z=H.h([],[P.b])
this.B(a,new W.iA(z))
return z},
gj:function(a){return a.length},
b0:function(a,b){return a.getItem(b)},
cQ:function(a,b){return a.key(b)},
$asX:function(){return[P.b,P.b]},
$isJ:1,
$asJ:function(){return[P.b,P.b]},
"%":"Storage"},
iA:{"^":"m:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aw:{"^":"f;",$isaw:1,"%":"CSSStyleSheet|StyleSheet"},
iH:{"^":"L;",
J:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ac(a,b,c,d)
z=W.hn("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a6(y).I(0,new W.a6(z))
return y},
"%":"HTMLTableElement"},
mO:{"^":"L;",
J:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ac(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.J(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga1(z)
x.toString
z=new W.a6(x)
w=z.ga1(z)
y.toString
w.toString
new W.a6(y).I(0,new W.a6(w))
return y},
"%":"HTMLTableRowElement"},
mP:{"^":"L;",
J:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ac(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.J(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga1(z)
y.toString
x.toString
new W.a6(y).I(0,new W.a6(x))
return y},
"%":"HTMLTableSectionElement"},
dG:{"^":"L;",$isdG:1,"%":"HTMLTemplateElement"},
mQ:{"^":"f;0m:width=","%":"TextMetrics"},
ax:{"^":"S;",$isax:1,"%":"TextTrack"},
ay:{"^":"S;",$isay:1,"%":"TextTrackCue|VTTCue"},
mR:{"^":"kb;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isay")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ay]},
$isw:1,
$asw:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isk:1,
$ask:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"TextTrackCueList"},
mS:{"^":"e7;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isax")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ax]},
$isw:1,
$asw:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isk:1,
$ask:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"TextTrackList"},
mV:{"^":"f;0j:length=","%":"TimeRanges"},
az:{"^":"f;",$isaz:1,"%":"Touch"},
mW:{"^":"kg;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaz")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.az]},
$isw:1,
$asw:function(){return[W.az]},
$asp:function(){return[W.az]},
$isk:1,
$ask:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"TouchList"},
mX:{"^":"f;0j:length=","%":"TrackDefaultList"},
iN:{"^":"R;","%":"CompositionEvent|FocusEvent|KeyboardEvent|TextEvent|TouchEvent;UIEvent"},
na:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
bo:{"^":"hS;0n:height=,0m:width=",$isbo:1,"%":"HTMLVideoElement"},
nc:{"^":"S;0j:length=","%":"VideoTrackList"},
nd:{"^":"S;0n:height=,0m:width=","%":"VisualViewport"},
ne:{"^":"f;0m:width=","%":"VTTRegion"},
iU:{"^":"S;",
gd5:function(a){var z,y,x
z=P.I
y=new P.T(0,$.A,[z])
x=H.l(new W.iV(new P.k7(y,[z])),{func:1,ret:-1,args:[P.I]})
this.cK(a)
this.cW(a,W.ef(x,z))
return y},
cW:function(a,b){return a.requestAnimationFrame(H.aj(H.l(b,{func:1,ret:-1,args:[P.I]}),1))},
cK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
b8:function(a,b){return a.alert(b)},
"%":"DOMWindow|Window"},
iV:{"^":"m:20;a",
$1:function(a){var z=this.a
a=H.b8(H.cE(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.W(P.bn("Future already completed"))
z.a2(a)}},
dR:{"^":"r;",$isdR:1,"%":"Attr"},
nk:{"^":"km;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isao")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ao]},
$isw:1,
$asw:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$isk:1,
$ask:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"CSSRuleList"},
nl:{"^":"hj;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.aC(b,"$isY",[P.I],"$asY"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gu:function(a){return W.dX(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nm:{"^":"ko;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isap")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.ap]},
$isw:1,
$asw:function(){return[W.ap]},
$asp:function(){return[W.ap]},
$isk:1,
$ask:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"GamepadList"},
nr:{"^":"kq;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isr")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.r]},
$isw:1,
$asw:function(){return[W.r]},
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ns:{"^":"ks;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isav")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.av]},
$isw:1,
$asw:function(){return[W.av]},
$asp:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"SpeechRecognitionResultList"},
nt:{"^":"ku;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.i(c,"$isaw")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$ist:1,
$ast:function(){return[W.aw]},
$isw:1,
$asw:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"StyleSheetList"},
j1:{"^":"dt;cJ:a<",
B:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.b,P.b]})
for(z=this.gG(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.Z)(z),++v){u=z[v]
b.$2(u,w.W(x,u))}},
gG:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.h([],[P.b])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.n(z,w)
v=H.i(z[w],"$isdR")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asX:function(){return[P.b,P.b]},
$asJ:function(){return[P.b,P.b]}},
j8:{"^":"j1;a",
i:function(a,b){return J.c5(this.a,H.u(b))},
gj:function(a){return this.gG(this).length}},
jb:{"^":"iB;$ti"},
j9:{"^":"jb;a,b,c,$ti"},
jc:{"^":"iC;a,b,c,d,e,$ti",
scR:function(a){this.d=H.l(a,{func:1,args:[W.R]})},
dc:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.l(y,{func:1,args:[W.R]})
if(x)J.fd(z,this.c,y,!1)}this.b=null
this.scR(null)
return},
p:{
dU:function(a,b,c,d,e){var z=W.ef(new W.jd(c),W.R)
if(z!=null&&!0)J.ff(a,b,z,!1)
return new W.jc(0,a,b,z,!1,[e])}}},
jd:{"^":"m:21;a",
$1:function(a){return this.a.$1(H.i(a,"$isR"))}},
bp:{"^":"c;a",
cw:function(a){var z,y
z=$.cI()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.T[y],W.kS())
for(y=0;y<12;++y)z.h(0,C.r[y],W.kT())}},
U:function(a){return $.eX().D(0,W.aV(a))},
O:function(a,b,c){var z,y,x
z=W.aV(a)
y=$.cI()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bQ(x.$4(a,b,c,this))},
$isab:1,
p:{
dW:function(a){var z,y
z=document.createElement("a")
y=new W.jT(z,window.location)
y=new W.bp(y)
y.cw(a)
return y},
np:[function(a,b,c,d){H.i(a,"$isa1")
H.u(b)
H.u(c)
H.i(d,"$isbp")
return!0},"$4","kS",16,0,11],
nq:[function(a,b,c,d){var z,y,x
H.i(a,"$isa1")
H.u(b)
H.u(c)
z=H.i(d,"$isbp").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kT",16,0,11]}},
q:{"^":"c;$ti",
gv:function(a){return new W.dh(a,this.gj(a),-1,[H.b9(this,a,"q",0)])}},
dx:{"^":"c;a",
U:function(a){return C.a.b9(this.a,new W.i4(a))},
O:function(a,b,c){return C.a.b9(this.a,new W.i3(a,b,c))},
$isab:1},
i4:{"^":"m:9;a",
$1:function(a){return H.i(a,"$isab").U(this.a)}},
i3:{"^":"m:9;a,b,c",
$1:function(a){return H.i(a,"$isab").O(this.a,this.b,this.c)}},
jU:{"^":"c;",
cz:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.av(0,new W.jV())
y=b.av(0,new W.jW())
this.b.I(0,z)
x=this.c
x.I(0,C.V)
x.I(0,y)},
U:function(a){return this.a.D(0,W.aV(a))},
O:["cf",function(a,b,c){var z,y
z=W.aV(a)
y=this.c
if(y.D(0,H.e(z)+"::"+b))return this.d.d4(c)
else if(y.D(0,"*::"+b))return this.d.d4(c)
else{y=this.b
if(y.D(0,H.e(z)+"::"+b))return!0
else if(y.D(0,"*::"+b))return!0
else if(y.D(0,H.e(z)+"::*"))return!0
else if(y.D(0,"*::*"))return!0}return!1}],
$isab:1},
jV:{"^":"m:10;",
$1:function(a){return!C.a.D(C.r,H.u(a))}},
jW:{"^":"m:10;",
$1:function(a){return C.a.D(C.r,H.u(a))}},
k8:{"^":"jU;e,a,b,c,d",
O:function(a,b,c){if(this.cf(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c5(a,"template")==="")return this.e.D(0,b)
return!1},
p:{
e5:function(){var z,y,x,w,v
z=P.b
y=P.ci(C.q,z)
x=H.o(C.q,0)
w=H.l(new W.k9(),{func:1,ret:z,args:[x]})
v=H.h(["TEMPLATE"],[z])
y=new W.k8(y,P.bk(null,null,null,z),P.bk(null,null,null,z),P.bk(null,null,null,z),null)
y.cz(null,new H.hQ(C.q,w,[x,z]),v,null)
return y}}},
k9:{"^":"m:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
k6:{"^":"c;",
U:function(a){var z=J.B(a)
if(!!z.$isdB)return!1
z=!!z.$isG
if(z&&W.aV(a)==="foreignObject")return!1
if(z)return!0
return!1},
O:function(a,b,c){if(b==="is"||C.h.c7(b,"on"))return!1
return this.U(a)},
$isab:1},
dh:{"^":"c;a,b,c,0d,$ti",
sb1:function(a){this.d=H.x(a,H.o(this,0))},
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb1(J.bb(this.a,z))
this.c=z
return!0}this.sb1(null)
this.c=y
return!1},
gw:function(a){return this.d},
$isaW:1},
ab:{"^":"c;"},
jT:{"^":"c;a,b",$isn9:1},
e8:{"^":"c;a",
aD:function(a){new W.kj(this).$2(a,null)},
Y:function(a,b){if(b==null)J.cU(a)
else J.bv(b,a)},
cZ:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fz(a)
x=J.c5(y.gcJ(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a0(t)}v="element unprintable"
try{v=J.bc(a)}catch(t){H.a0(t)}try{u=W.aV(a)
this.cY(H.i(a,"$isa1"),b,z,v,u,H.i(y,"$isJ"),H.u(x))}catch(t){if(H.a0(t) instanceof P.an)throw t
else{this.Y(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cY:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.Y(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.U(a)){this.Y(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.O(a,"is",g)){this.Y(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gG(f)
y=H.h(z.slice(0),[H.o(z,0)])
for(x=f.gG(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.n(y,x)
v=y[x]
if(!this.a.O(a,J.fM(v),w.W(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.W(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.W(z,v)
w.cS(z,v)}}if(!!J.B(a).$isdG)this.aD(a.content)},
$ismq:1},
kj:{"^":"m:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cZ(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.Y(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fA(z)}catch(w){H.a0(w)
v=H.i(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bv(u,v)}else J.bv(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isr")}}},
j3:{"^":"f+ha;"},
j4:{"^":"f+p;"},
j5:{"^":"j4+q;"},
j6:{"^":"f+p;"},
j7:{"^":"j6+q;"},
jf:{"^":"f+p;"},
jg:{"^":"jf+q;"},
jv:{"^":"f+p;"},
jw:{"^":"jv+q;"},
jD:{"^":"f+X;"},
jE:{"^":"f+X;"},
jF:{"^":"f+p;"},
jG:{"^":"jF+q;"},
jH:{"^":"f+p;"},
jI:{"^":"jH+q;"},
jL:{"^":"f+p;"},
jM:{"^":"jL+q;"},
jS:{"^":"f+X;"},
e2:{"^":"S+p;"},
e3:{"^":"e2+q;"},
jX:{"^":"f+p;"},
jY:{"^":"jX+q;"},
k0:{"^":"f+X;"},
ka:{"^":"f+p;"},
kb:{"^":"ka+q;"},
e6:{"^":"S+p;"},
e7:{"^":"e6+q;"},
kf:{"^":"f+p;"},
kg:{"^":"kf+q;"},
kl:{"^":"f+p;"},
km:{"^":"kl+q;"},
kn:{"^":"f+p;"},
ko:{"^":"kn+q;"},
kp:{"^":"f+p;"},
kq:{"^":"kp+q;"},
kr:{"^":"f+p;"},
ks:{"^":"kr+q;"},
kt:{"^":"f+p;"},
ku:{"^":"kt+q;"}}],["","",,P,{"^":"",
a3:function(a){var z,y,x,w,v
if(a==null)return
z=P.y(P.b,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.Z)(y),++w){v=H.u(y[w])
z.h(0,v,a[v])}return z},
kI:function(a,b){var z={}
a.B(0,new P.kJ(z))
return z},
d9:function(){var z=$.d8
if(z==null){z=J.c0(window.navigator.userAgent,"Opera",0)
$.d8=z}return z},
hf:function(){var z,y
z=$.d5
if(z!=null)return z
y=$.d6
if(y==null){y=J.c0(window.navigator.userAgent,"Firefox",0)
$.d6=y}if(y)z="-moz-"
else{y=$.d7
if(y==null){y=!P.d9()&&J.c0(window.navigator.userAgent,"Trident/",0)
$.d7=y}if(y)z="-ms-"
else z=P.d9()?"-o-":"-webkit-"}$.d5=z
return z},
k3:{"^":"c;",
bz:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.l(z,a)
C.a.l(this.b,null)
return y},
au:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.B(a)
if(!!y.$isbd)return new Date(a.a)
if(!!y.$isag)return a
if(!!y.$isc7)return a
if(!!y.$isdg)return a
if(!!y.$isdk)return a
if(!!y.$isdv||!!y.$iscm)return a
if(!!y.$isJ){x=this.bz(a)
w=this.b
if(x>=w.length)return H.n(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.h(w,x,v)
y.B(a,new P.k5(z,this))
return z.a}if(!!y.$isa){x=this.bz(a)
z=this.b
if(x>=z.length)return H.n(z,x)
v=z[x]
if(v!=null)return v
return this.di(a,x)}throw H.d(P.cr("structured clone of other type"))},
di:function(a,b){var z,y,x,w
z=J.aN(a)
y=z.gj(a)
x=new Array(y)
C.a.h(this.b,b,x)
for(w=0;w<y;++w)C.a.h(x,w,this.au(z.i(a,w)))
return x}},
k5:{"^":"m:3;a,b",
$2:function(a,b){this.a.a[a]=this.b.au(b)}},
kJ:{"^":"m:3;a",
$2:function(a,b){this.a[a]=b}},
k4:{"^":"k3;a,b"}}],["","",,P,{"^":""}],["","",,P,{"^":"",jN:{"^":"c;"},Y:{"^":"jN;$ti"}}],["","",,P,{"^":"",fW:{"^":"f;",$isfW:1,"%":"SVGAnimatedLength"},lJ:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},lK:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lL:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lM:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},lN:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lO:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lP:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lQ:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},lR:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lS:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},lT:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},lU:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lV:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lW:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lX:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},lY:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},m_:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},m0:{"^":"bg;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hw:{"^":"bg;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bg:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},m7:{"^":"bg;0n:height=,0m:width=","%":"SVGImageElement"},aX:{"^":"f;",$isaX:1,"%":"SVGLength"},md:{"^":"jy;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.N(a,b)},
h:function(a,b,c){H.i(c,"$isaX")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aX]},
$isk:1,
$ask:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$asq:function(){return[P.aX]},
"%":"SVGLengthList"},me:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aZ:{"^":"f;",$isaZ:1,"%":"SVGNumber"},mr:{"^":"jK;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.N(a,b)},
h:function(a,b,c){H.i(c,"$isaZ")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aZ]},
$isk:1,
$ask:function(){return[P.aZ]},
$isa:1,
$asa:function(){return[P.aZ]},
$asq:function(){return[P.aZ]},
"%":"SVGNumberList"},mw:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},my:{"^":"f;0j:length=","%":"SVGPointList"},mA:{"^":"f;0n:height=,0m:width=","%":"SVGRect"},mB:{"^":"hw;0n:height=,0m:width=","%":"SVGRectElement"},dB:{"^":"G;",$isdB:1,"%":"SVGScriptElement"},mM:{"^":"k2;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.N(a,b)},
h:function(a,b,c){H.u(c)
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b]},
$isk:1,
$ask:function(){return[P.b]},
$isa:1,
$asa:function(){return[P.b]},
$asq:function(){return[P.b]},
"%":"SVGStringList"},G:{"^":"a1;",
J:function(a,b,c,d){var z,y,x,w,v,u
z=H.h([],[W.ab])
C.a.l(z,W.dW(null))
C.a.l(z,W.e5())
C.a.l(z,new W.k6())
c=new W.e8(new W.dx(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dk(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a6(w)
u=z.ga1(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mN:{"^":"bg;0n:height=,0m:width=","%":"SVGSVGElement"},b1:{"^":"f;",$isb1:1,"%":"SVGTransform"},mY:{"^":"ki;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return this.N(a,b)},
h:function(a,b,c){H.i(c,"$isb1")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
N:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b1]},
$isk:1,
$ask:function(){return[P.b1]},
$isa:1,
$asa:function(){return[P.b1]},
$asq:function(){return[P.b1]},
"%":"SVGTransformList"},nb:{"^":"bg;0n:height=,0m:width=","%":"SVGUseElement"},jx:{"^":"f+p;"},jy:{"^":"jx+q;"},jJ:{"^":"f+p;"},jK:{"^":"jJ+q;"},k1:{"^":"f+p;"},k2:{"^":"k1+q;"},kh:{"^":"f+p;"},ki:{"^":"kh+q;"}}],["","",,P,{"^":"",ah:{"^":"c;",$isk:1,
$ask:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
$isiL:1}}],["","",,P,{"^":"",le:{"^":"f;0j:length=","%":"AudioBuffer"},lf:{"^":"j2;",
i:function(a,b){return P.a3(a.get(H.u(b)))},
B:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.b,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a3(y.value[1]))}},
gG:function(a){var z=H.h([],[P.b])
this.B(a,new P.fZ(z))
return z},
gj:function(a){return a.size},
$asX:function(){return[P.b,null]},
$isJ:1,
$asJ:function(){return[P.b,null]},
"%":"AudioParamMap"},fZ:{"^":"m:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},lg:{"^":"S;0j:length=","%":"AudioTrackList"},h_:{"^":"S;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mt:{"^":"h_;0j:length=","%":"OfflineAudioContext"},j2:{"^":"f+X;"}}],["","",,P,{"^":"",h0:{"^":"f;",$ish0:1,"%":"WebGLBuffer"},hu:{"^":"f;",$ishu:1,"%":"WebGLFramebuffer"},ih:{"^":"f;",$isih:1,"%":"WebGLProgram"},mC:{"^":"f;",
b7:function(a,b){return a.activeTexture(b)},
ba:function(a,b,c){return a.attachShader(b,c)},
bb:function(a,b,c){return a.bindBuffer(b,c)},
bd:function(a,b,c){return a.bindFramebuffer(b,c)},
be:function(a,b,c){return a.bindTexture(b,c)},
bf:function(a,b){return a.blendEquation(b)},
bg:function(a,b,c){return a.blendFunc(b,c)},
bh:function(a,b,c,d){return a.bufferData(b,c,d)},
bj:function(a,b){return a.checkFramebufferStatus(b)},
bk:function(a,b){return a.clear(b)},
bl:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bm:function(a,b){return a.compileShader(b)},
bn:function(a){return a.createBuffer()},
bo:function(a){return a.createFramebuffer()},
bp:function(a){return a.createProgram()},
bq:function(a,b){return a.createShader(b)},
br:function(a){return a.createTexture()},
bs:function(a,b){return a.depthMask(b)},
bt:function(a,b){return a.disable(b)},
bu:function(a,b,c,d){return a.drawArrays(b,c,d)},
bv:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bw:function(a,b){return a.enable(b)},
bx:function(a,b){return a.enableVertexAttribArray(b)},
bA:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
a9:function(a){return P.a3(a.getContextAttributes())},
aw:function(a){return a.getError()},
ax:function(a,b){return a.getProgramInfoLog(b)},
ay:function(a,b,c){return a.getProgramParameter(b,c)},
aA:function(a,b){return a.getShaderInfoLog(b)},
aB:function(a,b,c){return a.getShaderParameter(b,c)},
aC:function(a,b,c){return a.getUniformLocation(b,c)},
bC:function(a,b){return a.linkProgram(b)},
bD:function(a,b,c){return a.pixelStorei(b,c)},
aG:function(a,b,c){return a.shaderSource(b,c)},
aH:function(a,b,c,d){return a.stencilFunc(b,c,d)},
at:function(a,b,c,d,e,f,g,h,i,j){this.ap(a,b,c,d,e,f,g)
return},
bG:function(a,b,c,d,e,f,g){return this.at(a,b,c,d,e,f,g,null,null,null)},
ap:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bH:function(a,b,c,d){return a.texParameterf(b,c,d)},
bI:function(a,b,c,d){return a.texParameteri(b,c,d)},
bK:function(a,b,c){return a.uniform1f(b,c)},
bL:function(a,b,c){return a.uniform1fv(b,c)},
bM:function(a,b,c){return a.uniform1i(b,c)},
bN:function(a,b,c){return a.uniform1iv(b,c)},
bO:function(a,b,c){return a.uniform2fv(b,c)},
bP:function(a,b,c){return a.uniform3fv(b,c)},
bQ:function(a,b,c){return a.uniform4fv(b,c)},
bR:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bS:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bT:function(a,b){return a.useProgram(b)},
bU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bW:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mD:{"^":"f;",
d7:function(a,b){return a.beginTransformFeedback(b)},
da:function(a,b){return a.bindVertexArray(b)},
dm:function(a){return a.createVertexArray()},
dn:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dq:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dr:function(a){return a.endTransformFeedback()},
dH:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
dK:function(a,b,c,d){this.d1(a,b,H.v(c,"$isa",[P.b],"$asa"),d)
return},
d1:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dL:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b7:function(a,b){return a.activeTexture(b)},
ba:function(a,b,c){return a.attachShader(b,c)},
bb:function(a,b,c){return a.bindBuffer(b,c)},
bd:function(a,b,c){return a.bindFramebuffer(b,c)},
be:function(a,b,c){return a.bindTexture(b,c)},
bf:function(a,b){return a.blendEquation(b)},
bg:function(a,b,c){return a.blendFunc(b,c)},
bh:function(a,b,c,d){return a.bufferData(b,c,d)},
bj:function(a,b){return a.checkFramebufferStatus(b)},
bk:function(a,b){return a.clear(b)},
bl:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bm:function(a,b){return a.compileShader(b)},
bn:function(a){return a.createBuffer()},
bo:function(a){return a.createFramebuffer()},
bp:function(a){return a.createProgram()},
bq:function(a,b){return a.createShader(b)},
br:function(a){return a.createTexture()},
bs:function(a,b){return a.depthMask(b)},
bt:function(a,b){return a.disable(b)},
bu:function(a,b,c,d){return a.drawArrays(b,c,d)},
bv:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bw:function(a,b){return a.enable(b)},
bx:function(a,b){return a.enableVertexAttribArray(b)},
bA:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
a9:function(a){return P.a3(a.getContextAttributes())},
aw:function(a){return a.getError()},
ax:function(a,b){return a.getProgramInfoLog(b)},
ay:function(a,b,c){return a.getProgramParameter(b,c)},
aA:function(a,b){return a.getShaderInfoLog(b)},
aB:function(a,b,c){return a.getShaderParameter(b,c)},
aC:function(a,b,c){return a.getUniformLocation(b,c)},
bC:function(a,b){return a.linkProgram(b)},
bD:function(a,b,c){return a.pixelStorei(b,c)},
aG:function(a,b,c){return a.shaderSource(b,c)},
aH:function(a,b,c,d){return a.stencilFunc(b,c,d)},
at:function(a,b,c,d,e,f,g,h,i,j){this.ap(a,b,c,d,e,f,g)
return},
bG:function(a,b,c,d,e,f,g){return this.at(a,b,c,d,e,f,g,null,null,null)},
ap:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bH:function(a,b,c,d){return a.texParameterf(b,c,d)},
bI:function(a,b,c,d){return a.texParameteri(b,c,d)},
bK:function(a,b,c){return a.uniform1f(b,c)},
bL:function(a,b,c){return a.uniform1fv(b,c)},
bM:function(a,b,c){return a.uniform1i(b,c)},
bN:function(a,b,c){return a.uniform1iv(b,c)},
bO:function(a,b,c){return a.uniform2fv(b,c)},
bP:function(a,b,c){return a.uniform3fv(b,c)},
bQ:function(a,b,c){return a.uniform4fv(b,c)},
bR:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bS:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bT:function(a,b){return a.useProgram(b)},
bU:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bW:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},it:{"^":"f;",$isit:1,"%":"WebGLShader"},iI:{"^":"f;",$isiI:1,"%":"WebGLTexture"},iO:{"^":"f;",$isiO:1,"%":"WebGLUniformLocation"},iS:{"^":"f;",$isiS:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mJ:{"^":"k_;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.F(b,a,null,null,null))
return P.a3(this.cP(a,b))},
h:function(a,b,c){H.i(c,"$isJ")
throw H.d(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.i(a,b)},
cP:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jZ:{"^":"f+p;"},k_:{"^":"jZ+q;"}}],["","",,G,{"^":"",
iW:function(a){var z,y,x,w
z=H.h(a.split("\n"),[P.b])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.n(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.Z(z,"\n")},
dS:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bq(a,b)
z.aG(a,y,c)
z.bm(a,y)
x=H.bQ(z.aB(a,y,35713))
if(x!=null&&!x){w=z.aA(a,y)
P.aD("E:Compilation failed:")
P.aD("E:"+G.iW(c))
P.aD("E:Failure:")
P.aD(C.h.H("E:",w))
throw H.d(w)}return y},
di:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.M],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.c3(a[y])
w=b.length
if(z>=w)return H.n(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.n(a,y)
v=J.c4(a[y])
if(x>=w)return H.n(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.n(a,y)
v=J.cQ(a[y])
if(z>=w)return H.n(b,z)
b[z]=v}return b},
hs:function(a,b){var z,y,x,w
H.v(a,"$isa",[T.P],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.c3(a[y])
w=b.length
if(z>=w)return H.n(b,z)
b[z]=x;++z
if(y>=a.length)return H.n(a,y)
x=J.c4(a[y])
if(z>=w)return H.n(b,z)
b[z]=x}return b},
ht:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.bK],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.c3(a[y])
w=b.length
if(z>=w)return H.n(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.n(a,y)
v=J.c4(a[y])
if(x>=w)return H.n(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.n(a,y)
x=J.cQ(a[y])
if(v>=w)return H.n(b,v)
b[v]=x
if(y>=a.length)return H.n(a,y)
C.A.h(b,z+3,J.fC(a[y]))}return b},
hr:function(a,b){var z,y
H.v(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.h(b,z,J.bb(a[y],0))
if(y>=a.length)return H.n(a,y)
C.m.h(b,z+1,J.bb(a[y],1))
if(y>=a.length)return H.n(a,y)
C.m.h(b,z+2,J.bb(a[y],2))
if(y>=a.length)return H.n(a,y)
C.m.h(b,z+3,J.bb(a[y],3))}return b},
jt:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ai(z,[H.o(z,0)]),y=y.gv(y),x=b.x,w=[[P.a,P.D]],v=[P.ak],u=[T.bK],t=[T.M],s=[T.P];y.q();){r=y.d
if(!x.a7(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ek>0)H.bX("I: "+r)
continue}q=z.i(0,r)
switch($.a7().i(0,r).a){case"vec2":b.X(r,G.hs(H.bu(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.X(r,G.di(H.bu(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.X(r,G.ht(H.bu(q,"$isa",u,"$asa"),null),4)
break
case"float":b.X(r,new Float32Array(H.bN(H.bu(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.X(r,G.hr(H.bu(q,"$isa",w,"$asa"),null),4)
break}}},
ck:{"^":"c;"},
H:{"^":"ck;d,a,b,c",
k:function(a){var z,y,x,w
z=H.h(["{"+new H.dM(H.kP(this)).k(0)+"}["+this.a+"]"],[P.b])
for(y=this.d,x=new H.ai(y,[H.o(y,0)]),x=x.gv(x);x.q();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.Z(z,"\n")}},
h2:{"^":"c;0a,b",
by:function(a,b,c){J.fw(this.a,b)
if(c>0)J.fS(this.a,b,c)},
bV:function(a,b,c,d,e,f,g,h){J.bZ(this.a,34962,b)
J.fT(this.a,c,d,e,!1,g,h)}},
dj:{"^":"c;a,b,c,d,e",
aI:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.c_(z.a,36160,y)
J.fU(z.a,b,c,d,e)
if(a!==0)J.fk(z.a,a)}},
hq:{"^":"c;"},
df:{"^":"c;a,b,c,d"},
hv:{"^":"c;a,b,c,d,e",
aN:function(a){switch($.a7().i(0,a).a){case"vec2":this.e.h(0,a,H.h([],[T.P]))
break
case"vec3":this.e.h(0,a,H.h([],[T.M]))
break
case"vec4":this.e.h(0,a,H.h([],[T.bK]))
break
case"float":this.e.h(0,a,H.h([],[P.ak]))
break
case"uvec4":this.e.h(0,a,H.h([],[[P.a,P.D]]))
break}},
ck:function(a){var z,y,x,w
H.v(a,"$isa",[T.M],"$asa")
for(z=this.d,y=0;y<4;++y){x=a[y]
w=new T.M(new Float32Array(3))
w.aF(x)
C.a.l(z,w)}},
ci:function(a,b){var z,y,x,w,v,u
z=[T.P]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.P(v))}},
cj:function(a,b){var z,y,x,w,v
z=[T.M]
H.v(b,"$isa",z,"$asa")
y=H.v(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.M(new Float32Array(3))
v.aF(w)
z.l(y,v)}},
cm:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.h(y,[P.D])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.n(y,v)
u=y[v]
C.a.h(x,w,u.gdO(u))
C.a.h(x,w+1,u.gdP(u))
C.a.h(x,w+2,u.gdQ(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.Z)(z),++v){t=z[v]
s=t.a
C.a.h(x,w,s)
C.a.h(x,w+1,t.b)
r=t.c
C.a.h(x,w+2,r)
C.a.h(x,w+3,s)
C.a.h(x,w+4,r)
C.a.h(x,w+5,t.d)
w+=6}return x},
k:function(a){var z,y,x,w,v
z=H.h(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.b])
for(y=this.e,x=new H.ai(y,[H.o(y,0)]),x=x.gv(x);x.q();){w=x.d
v=$.a7().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.Z(z," ")}},
dK:{"^":"c;a,b,c"},
dJ:{"^":"c;a,b,c"},
hR:{"^":"H;d,a,b,c"},
hT:{"^":"ck;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sak:function(a){this.cx=H.v(a,"$isa",[P.D],"$asa")},
aL:function(a,b,c){var z,y
C.h.ag(a,0)
H.i(b,"$isah")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.bZ(z.a,34962,y)
J.cN(z.a,34962,b,35048)},
cn:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
X:function(a,b,c){var z,y,x,w,v
z=J.cK(a,0)===105
if(z&&this.z===0)this.z=C.e.cg(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c1(x.a))
this.aL(a,b,c)
w=$.a7().i(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.i(0,a)
J.bw(x.a,this.e)
x.by(0,v,z?1:0)
x.bV(0,y.i(0,a),v,w.aO(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.h(["Faces:"+(z==null?0:z.length)],[P.b])
for(z=this.cy,x=new H.ai(z,[H.o(z,0)]),x=x.gv(x);x.q();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.Z(y,"  ")}},
lG:{"^":"c;"},
im:{"^":"ck;d,e,f,r,x,y,z,Q,0ch,a,b,c",
co:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.Z)(z),++u){t=z[u]
x.h(0,t,J.cS(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.Z)(z),++u){t=z[u]
x.h(0,t,J.cS(w.a,v,t))}},
cs:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.h([],[P.b])
x=H.h([],[P.b])
for(y=new H.ai(y,[H.o(y,0)]),y=y.gv(y);y.q();){w=y.d
if(!z.a7(0,w))C.a.l(x,w)}for(z=this.x,z=P.jA(z,z.r,H.o(z,0)),y=this.Q;z.q();){w=z.d
if(!y.D(0,w))C.a.l(x,w)}return x},
cv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(b,"$isJ",[P.b,P.c],"$asJ")
z=Date.now()
for(y=new H.ai(b,[H.o(b,0)]),y=y.gv(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.q();){s=y.d
switch(J.cK(s,0)){case 117:if(w.a7(0,s)){r=b.i(0,s)
if(v.a7(0,s))H.bX("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a7().i(0,s)
if(q==null)H.W("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.V(r)
J.c6(x.a,p,r)}else if(!!J.B(r).$ishB)J.fQ(x.a,p,r)
break
case"float":if(q.c===0){H.ej(r)
J.fO(x.a,p,r)}else if(!!J.B(r).$isah)J.fP(x.a,p,r)
break
case"mat4":if(q.c===0){s=C.x.gc9(H.ae(r,"$ismf"))
J.cZ(x.a,p,!1,s)}else if(!!J.B(r).$isah)J.cZ(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=H.ae(r,"$iscj").a
J.cY(x.a,p,!1,s)}else if(!!J.B(r).$isah)J.cY(x.a,p,!1,r)
break
case"vec4":if(q.c===0){s=C.x.gc9(H.ae(r,"$isbK"))
J.cX(x.a,p,s)}else{H.i(r,"$isah")
J.cX(x.a,p,r)}break
case"vec3":s=q.c
o=x.a
if(s===0)J.cW(o,p,H.ae(r,"$isM").a)
else J.cW(o,p,H.i(r,"$isah"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cV(o,p,H.ae(r,"$isP").a)
else J.cV(o,p,H.i(r,"$isah"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bU(s)
J.cL(x.a,33984+s)
s=H.ae(r,"$isbI").b
J.am(x.a,3553,s)
s=this.ch
J.c6(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bU(s)
J.cL(x.a,33984+s)
s=H.ae(r,"$isbI").b
J.am(x.a,34067,s)
s=this.ch
J.c6(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
default:H.bX("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.aF(r,!0)
o=x.a
if(s)J.bx(o,2929)
else J.c2(o,2929)
break
case"cStencilFunc":H.ae(r,"$isdK")
s=r.a
o=x.a
if(s===1281)J.c2(o,2960)
else{J.bx(o,2960)
o=r.b
n=r.c
J.fI(x.a,s,o,n)}break
case"cDepthWrite":H.bQ(r)
J.fq(x.a,r)
break
case"cBlendEquation":H.ae(r,"$isdJ")
s=r.a
o=x.a
if(s===1281)J.c2(o,3042)
else{J.bx(o,3042)
o=r.b
n=r.c
J.fi(x.a,o,n)
J.fh(x.a,s)}break}++t
break}}m=P.hk(0,0,0,Date.now()-new P.bd(z,!1).a,0,0)
""+t
m.k(0)},
cl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.v(b,"$isa",[G.H],"$asa")
Date.now()
z=this.d
J.fR(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b2()}for(x=0;x<1;++x){w=b[x]
this.cv(w.a,w.d)}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aX()}for(v=a.cy,v=new H.ai(v,[H.o(v,0)]),v=v.gv(v);v.q();)y.l(0,v.d)
u=this.cs()
if(u.length!==0)P.aD("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bw(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cn()
s=a.Q
r=a.z
if(t)J.fg(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.fu(q,y,v,s,0,r)
else J.ft(q,y,v,s,0)}else{s=z.a
if(r>1)J.fs(s,y,0,v,r)
else J.fr(s,y,0,v)}if(t)J.fx(z.a)},
aM:function(a,b){return this.cl(a,b,null)},
p:{
dA:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.b
y=P.bk(null,null,null,z)
x=c.b
w=d.b
v=H.v(c.f,"$isa",[z],"$asa")
u=J.fo(b.a)
t=G.dS(b.a,35633,x)
J.cM(b.a,u,t)
s=G.dS(b.a,35632,w)
J.cM(b.a,u,s)
if(v.length>0)J.fN(b.a,u,v,35980)
J.fG(b.a,u)
if(!H.bQ(J.fF(b.a,u,35714)))H.W(J.fE(b.a,u))
z=new G.im(b,c,d,u,P.ci(c.c,z),P.y(z,P.c),P.y(z,z),y,a,!1,!0)
z.co(a,b,c,d)
return z}}},
C:{"^":"c;a,b,c",
aO:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
dC:{"^":"c;a,0b,c,d,e,f,r,x",
aJ:function(a){var z,y,x,w,v
H.v(a,"$isa",[P.b],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.Z)(a),++w){v=a[w]
C.a.l(y,v)
x.h(0,v,this.r);++this.r}C.a.ab(y)},
A:function(a){var z,y,x
H.v(a,"$isa",[P.b],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.Z)(a),++x)C.a.l(y,a[x])
C.a.ab(y)},
aK:function(a){var z,y
H.v(a,"$isa",[P.b],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ab(z)},
cq:function(a,b){this.b=this.ad(!0,H.v(a,"$isa",[P.b],"$asa"),b)},
aQ:function(a){return this.cq(a,null)},
cp:function(a,b){this.b=this.ad(!1,H.v(a,"$isa",[P.b],"$asa"),b)},
C:function(a){return this.cp(a,null)},
ad:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.b]
H.v(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.h(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.Z)(y),++u){t=y[u]
s=$.a7().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.Z)(z),++u){q=z[u]
s=$.a7().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.Z)(z),++u){q=z[u]
s=$.a7().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.Z)(z),++u){q=z[u]
s=$.a7().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.I(w,b)
if(a)C.a.l(w,"}")
return C.a.Z(w,"\n")},
p:{
O:function(a){var z,y
z=P.b
y=[z]
return new G.dC(a,H.h([],y),H.h([],y),H.h([],y),H.h([],y),0,P.y(z,P.D))}}},
dH:{"^":"c;a,b,c,d,e,f,r",
aP:function(a,b){var z=this.e
if(z!==1)J.fK(a.a,b,34046,z)
z=this.r
J.bz(a.a,b,10240,z)
z=this.f
J.bz(a.a,b,10241,z)
if(this.b){J.bz(a.a,b,10242,33071)
J.bz(a.a,b,10243,33071)}},
p:{
dI:function(){return new G.dH(!1,!1,!1,!0,1,9729,9729)}}},
bI:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
iM:{"^":"bI;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"},
p:{
dN:function(a,b,c,d,e,f){var z=J.cO(a.a)
J.am(a.a,3553,z)
J.fL(a.a,3553,1,e,c,d)
f.aP(a,3553)
J.cR(a.a)
J.am(a.a,3553,null)
return new G.iM(c,d,e,b,z,3553,a,f)}}},
hz:{"^":"bI;f,a,b,c,d,e",
aR:function(a){var z,y
z=this.d
y=this.c
J.am(z.a,y,this.b)
J.fJ(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
jC:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.i(W.ja("span",null),"$isa1")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.v).af(y,"float")
y.setProperty(x,"left","")
x=C.v.af(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.F(z,v)}return z},
iy:{"^":"c;",
cr:function(a,b,c){var z,y
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
y=J.j(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
iz:{"^":"iy;e,f,a,b,c,d",
cu:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.dJ(y,2)+" fps"
C.p.c4(this.c,b)
x=C.e.T(30*C.w.de(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.i(z.firstChild,"$isa1")
v=w.style
u=""+x+"px"
v.height=u
C.p.F(z,w)},
ct:function(a){return this.cu(a,"")}}}],["","",,V,{"^":""}],["","",,D,{"^":"",
hL:function(){var z,y,x
z=W.bo
y=new P.T(0,$.A,[z])
x=new P.dQ(y,[z])
z=window.navigator;(z&&C.W).c1(z,!0).a_(new D.hN(x),null).bi(new D.hO(x))
return y},
hN:{"^":"m:8;a",
$1:function(a){var z,y
H.i(a,"$isaH")
z=document.createElement("video")
z.autoplay=!0
y=new W.j9(z,"playing",!1,[W.R])
y.gds(y).a_(new D.hM(this.a,z),-1)
z.srcObject=a}},
hM:{"^":"m:24;a,b",
$1:function(a){H.i(a,"$isR")
return this.a.aq(0,this.b)}},
hO:{"^":"m:25;a",
$1:function(a){P.aD("E:"+("Camera open error "+H.e(a)))
this.a.aq(0,null)}}}],["","",,A,{"^":"",
cB:function(a){var z,y
z=C.A.dt(H.v(a,"$isk",[P.c],"$ask"),0,new A.kR(),P.D)
if(typeof z!=="number")return H.bU(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kR:{"^":"m:26;",
$2:function(a,b){var z,y
H.V(a)
z=J.aR(b)
if(typeof a!=="number")return a.H()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",cj:{"^":"c;a",
k:function(a){return"[0] "+this.aa(0).k(0)+"\n[1] "+this.aa(1).k(0)+"\n[2] "+this.aa(2).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=9)return H.n(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.cj){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gu:function(a){return A.cB(this.a)},
aa:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.n(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.n(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.n(y,x)
z[2]=y[x]
return new T.M(z)},
aE:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b
z[4]=z[4]*b
z[5]=z[5]*b
z[6]=z[6]*b
z[7]=z[7]*b
z[8]=z[8]*b},
p:{
aY:function(a,b,c,d,e,f,g,h,i){var z=new Float32Array(9)
z[8]=i
z[7]=h
z[6]=g
z[5]=f
z[4]=e
z[3]=d
z[2]=c
z[1]=b
z[0]=a
return new T.cj(z)}}},P:{"^":"c;a",
L:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.P){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gu:function(a){return A.cB(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.n(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gbX:function(a){return this.a[0]},
gbY:function(a){return this.a[1]}},M:{"^":"c;a",
R:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
aF:function(a){var z,y
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
gu:function(a){return A.cB(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.n(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbX:function(a){return this.a[0]},
gbY:function(a){return this.a[1]},
gdM:function(a){return this.a[2]},
p:{
b3:function(a,b,c){var z=new T.M(new Float32Array(3))
z.R(a,b,c)
return z}}},bK:{"^":"c;"}}],["","",,T,{"^":"",
il:function(a){var z,y,x,w,v
z=P.b
y=P.c
T.K(a,$.eZ(),new G.H(P.y(z,y),"none",!1,!0))
T.K(a,$.f9(),new G.H(P.y(z,y),"toon",!1,!0))
x=$.f1()
w=P.y(z,y)
v=new T.P(new Float32Array(2))
v.L(0.5,0.5)
w.h(0,"uCenter2",v)
w.h(0,"uPointSize",6)
T.K(a,x,new G.H(w,"hexalate-6",!1,!0))
w=$.f_()
x=P.y(z,y)
v=new T.P(new Float32Array(2))
v.L(0,0)
x.h(0,"uCenter2",v)
x.h(0,"uScale",0.8)
x.h(0,"uAngle",0.5)
T.K(a,w,new G.H(x,"dot",!1,!0))
x=$.fa()
w=P.y(z,y)
w.h(0,"uScale",0.0009)
w.h(0,"uTime",0)
T.K(a,x,new G.H(w,"tv-distortion",!1,!0))
w=$.f2()
x=P.y(z,y)
x.h(0,"uPointSize",4)
T.K(a,w,new G.H(x,"lumidots-4",!1,!0))
x=$.f7()
w=P.y(z,y)
w.h(0,"uPointSize",4)
T.K(a,x,new G.H(w,"square-4",!1,!0))
w=$.f5()
x=P.y(z,y)
v=new T.P(new Float32Array(2))
v.L(120,240)
x.h(0,"uRange",v)
T.K(a,w,new G.H(x,"scanline",!1,!0))
T.K(a,$.fc(),new G.H(P.y(z,y),"water",!1,!0))
x=[z]
w=new G.dC("crosshatchPixelateF",H.h([],x),H.h([],x),H.h([],x),H.h([],x),0,P.y(z,P.D))
w.A(H.h(["uTexture"],x))
w.b=w.ad(!1,H.v(H.h(["#define MODE 0","float level1 = 1.0;\nfloat level2 = 0.7;\nfloat level3 = 0.5;\nfloat level4 = 0.3;\n\nfloat dist = 10.0;\nfloat thickness = 0.5;\n\n#if MODE == 0\n// diagonal crosshach\nvec2 slope = vec2(1.0, 1.0);\n#elif MODE == 1\n// regular crosshatch\nvec2 slope = vec2(1.0, 0.0);\n#else\nERROR\n#endif\n\nfloat PixelColor(vec2 pixel, float lum) {\n    if (lum < level1) {\n        // main anti diagonal\n        if (mod(pixel.x * slope.x + pixel.y * slope.y, dist) <= thickness) return 0.0; \n    }  \n  \n    if (lum < level2) { \n        // main diagonal\n        if (mod(pixel.x * slope.y - pixel.y * slope.x, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level3) {\n        // inbetween anti diagonals\n        if (mod(pixel.x * slope.x + pixel.y * slope.y - dist * 0.5, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level4) {\n        // inbetween main diagonals\n        if (mod(pixel.x * slope.y - pixel.y * slope.x - dist * 0.5, dist) <= thickness) return 0.0;\n    } \n    \n    return 1.0;\n}       \n       \nvoid main()  { \n    vec2 pixel = gl_FragCoord.xy;  // this is really pixel + 0.5\n   \n    float lum = dot(vec3(0.2126, 0.7152, 0.0723), \n                    texelFetch(uTexture, ivec2(pixel), 0).rgb);\n    \n    float color = PixelColor(pixel, lum);\n    oFragColor = vec4(vec3(color), 1.0);  \n}      \n\n"],x),"$isa",x,"$asa"),null)
T.K(a,w,new G.H(P.y(z,y),"crosshatch",!1,!0))
w=$.f6()
x=P.y(z,y)
x.h(0,"uScale",0.5)
T.K(a,w,new G.H(x,"sepia",!1,!0))
T.K(a,$.f8(),new G.H(P.y(z,y),"technicolor",!1,!0))
x=$.fb()
w=P.y(z,y)
v=new T.P(new Float32Array(2))
v.L(0.4,0.7)
w.h(0,"uRange",v)
T.K(a,x,new G.H(w,"vigenetting",!1,!0))
w=$.eY()
x=P.y(z,y)
x.h(0,"uConvolutionMatrix",$.ey())
x.h(0,"uColor",$.eE())
T.K(a,w,new G.H(x,"emboss",!1,!0))
x=P.y(z,y)
x.h(0,"uConvolutionMatrix",$.ez())
x.h(0,"uColor",$.eF())
T.K(a,w,new G.H(x,"emboss2",!1,!0))
x=P.y(z,y)
x.h(0,"uConvolutionMatrix",$.eA())
x.h(0,"uColor",$.eG())
T.K(a,w,new G.H(x,"engrave",!1,!0))
x=P.y(z,y)
x.h(0,"uConvolutionMatrix",$.eB())
x.h(0,"uColor",$.eH())
T.K(a,w,new G.H(x,"sharpen",!1,!0))
x=P.y(z,y)
x.h(0,"uConvolutionMatrix",$.ex())
x.h(0,"uColor",$.eD())
T.K(a,w,new G.H(x,"edges",!1,!0))
y=P.y(z,y)
y.h(0,"uConvolutionMatrix",$.ew())
y.h(0,"uColor",$.eC())
T.K(a,w,new G.H(y,"blur",!1,!0))
for(z=$.bY(),z=new H.ai(z,[H.o(z,0)]),z=z.gv(z);z.q();){y=z.d
x=$.cJ();(x&&C.Y).dv(x,"beforeend","<option>"+H.e(y)+"</option>",null,null)}},
nH:[function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
H.i(a1,"$isbo")
if(a1==null){C.u.b8(window,"Could not access camera - do you have a camera installed?")
return}z=document
y=C.l.c0(z,"stats")
x=z.createElement("div")
w=x.style
w.fontWeight="bold"
x.textContent="@@@@"
v=new R.iz(0,0,y,x,z.createElement("div"),R.jC("blue","gray",90,30))
v.cr(y,"blue","gray")
u=H.i(C.l.bE(z,"#webgl-canvas"),"$isca")
t=u.clientWidth
s=u.clientHeight
u.width=t
u.height=s
r=new G.h2(u)
z=P.b
y=P.c
w=(u&&C.I).c_(u,"webgl2",P.ch(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],z,y))
r.a=w
if(w==null)H.W(P.de('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.fD(w))
if($.ek>0)P.aD("I: "+q)
J.fl(w,0,0,0,1)
J.bx(w,2929)
q=$.eM()
if(q==null)q=new G.dH(!1,!1,!1,!0,1,9729,9729)
p=J.cO(w)
o=new G.hz(a1,"video",p,3553,r,q)
J.am(w,3553,p)
w=q.d?1:0
J.fH(r.a,37440,w)
o.aR(a1)
q.aP(r,3553)
J.cR(r.a)
J.am(r.a,3553,null)
n=G.dA("bg",r,$.f4(),$.f3())
q=P.y(z,y)
q.h(0,"cDepthTest",!0)
q.h(0,"cDepthWrite",!0)
q.h(0,"cBlendEquation",$.ev())
q.h(0,"cStencilFunc",$.eK())
q.h(0,"uTexture",o)
w=new T.M(new Float32Array(3))
w.R(-1,-1,0)
p=new T.M(new Float32Array(3))
p.R(1,-1,0)
m=new T.M(new Float32Array(3))
m.R(1,1,0)
l=new T.M(new Float32Array(3))
l.R(-1,1,0)
k=[T.M]
j=H.h([w,p,m,l],k)
w=new T.P(new Float32Array(2))
w.L(0,0)
p=new T.P(new Float32Array(2))
p.L(1,0)
m=new T.P(new Float32Array(2))
m.L(1,1)
l=new T.P(new Float32Array(2))
l.L(0,1)
i=H.h([w,p,m,l],[T.P])
h=new T.M(new Float32Array(3))
h.R(0,0,1)
g=H.h([h,h,h,h],k)
w=H.h([],[G.hq])
p=H.h([],[G.df])
m=H.h([],k)
f=new G.hv(!1,w,p,m,P.y(z,[P.a,,]))
f.aN("aTexUV")
H.v(j,"$isa",k,"$asa")
e=m.length
C.a.l(p,new G.df(e,e+1,e+2,e+3))
f.ck(j)
f.ci("aTexUV",i)
f.aN("aNormal")
f.cj("aNormal",g)
w=n.d
p=n.e.x
y=P.y(z,y)
l=J.fp(w.a)
d=new G.hT(w,l,4,y,p,0,-1,P.y(z,P.ah),"meshdata:quad",!1,!0)
m=G.di(m,null)
y.h(0,"aPosition",J.c1(w.a))
d.ch=m
d.aL("aPosition",m,3)
c=$.a7().i(0,"aPosition")
if(c==null)H.W("Unknown canonical aPosition")
b=p.i(0,"aPosition")
J.bw(w.a,l)
w.by(0,b,0)
w.bV(0,y.i(0,"aPosition"),b,c.aO(),5126,!1,0,0)
z=H.v(f.cm(),"$isa",[P.D],"$asa")
d.y=J.c1(w.a)
y=d.ch.length
if(y<768){d.sak(new Uint8Array(H.bN(z)))
d.Q=5121}else if(y<196608){d.sak(new Uint16Array(H.bN(z)))
d.Q=5123}else{d.sak(new Uint32Array(H.bN(z)))
d.Q=5125}J.bw(w.a,l)
z=d.y
y=d.cx
J.bZ(w.a,34963,z)
J.cN(w.a,34963,y,35048)
G.jt(f,d)
z=$.eL()
y=G.dN(r,"frame::color",t,s,32856,z)
z=G.dN(r,"frame::depth",t,s,33190,z)
a=new G.dj(r,null,y,z,null)
w=J.fn(r.a)
a.b=w
J.c_(r.a,36160,w)
J.cP(r.a,36160,36064,3553,y.b,0)
J.cP(r.a,36160,36096,3553,z.b,0)
a0=J.fj(r.a,36160)
if(a0!==36053)H.W("Error Incomplete Framebuffer: "+H.e(a0))
J.c_(r.a,36160,null)
T.il(r)
new T.l3(o,a,t,s,n,d,new G.hR(q,"mat",!1,!0),new G.dj(r,null,null,null,null),v).$1(0)},"$1","kH",4,0,30],
eq:function(){D.hL().a_(T.kH(),-1).bi(new T.l4())},
da:{"^":"c;a,b,c",p:{
K:function(a,b,c){var z,y
z=c.a
y=new T.da(z,G.dA(z,a,$.f0(),b),c)
$.bY().h(0,z,y)
return y}}},
l3:{"^":"m:27;a,b,c,d,e,f,r,x,y",
$1:function(a){var z,y,x,w,v,u,t,s
H.cE(a)
try{y=this.a
y.aR(y.f)
J.am(y.d.a,y.c,null)}catch(x){z=H.a0(x)
P.aD(z)}y=this.b
w=this.c
v=this.d
y.aI(17664,0,0,w,v)
u=this.f
t=[G.H]
this.e.aM(u,H.h([this.r],t))
this.x.aI(17664,0,0,w,v)
s=$.bY().i(0,$.cJ().value)
v=s.c
if(typeof a!=="number")return a.dN()
w=v.d
w.h(0,"uTime",a/1000)
w.h(0,"uTexture",y.c)
s.b.aM(u,H.h([v],t))
C.u.gd5(window).a_(this,-1)
this.y.ct(a+0)}},
l4:{"^":"m:28;",
$1:function(a){H.i(a,"$isQ")
C.u.b8(window,"Camera error "+H.e(a)+": - do you have a camera installed?")}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dn.prototype
return J.dm.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.dp.prototype
if(typeof a=="boolean")return J.hF.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.c)return a
return J.bT(a)}
J.aN=function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.c)return a
return J.bT(a)}
J.el=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.c)return a
return J.bT(a)}
J.kN=function(a){if(typeof a=="number")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.kO=function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.em=function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.c)return a
return J.bT(a)}
J.bS=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.b2.prototype
return a}
J.aF=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).E(a,b)}
J.a8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kN(a).P(a,b)}
J.bb=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).i(a,b)}
J.cK=function(a,b){return J.em(a).ag(a,b)}
J.bv=function(a,b){return J.j(a).cT(a,b)}
J.fd=function(a,b,c,d){return J.j(a).cU(a,b,c,d)}
J.fe=function(a,b,c){return J.j(a).cV(a,b,c)}
J.cL=function(a,b){return J.j(a).b7(a,b)}
J.ff=function(a,b,c,d){return J.j(a).d2(a,b,c,d)}
J.cM=function(a,b,c){return J.j(a).ba(a,b,c)}
J.fg=function(a,b){return J.j(a).d7(a,b)}
J.bZ=function(a,b,c){return J.j(a).bb(a,b,c)}
J.c_=function(a,b,c){return J.j(a).bd(a,b,c)}
J.am=function(a,b,c){return J.j(a).be(a,b,c)}
J.bw=function(a,b){return J.j(a).da(a,b)}
J.fh=function(a,b){return J.j(a).bf(a,b)}
J.fi=function(a,b,c){return J.j(a).bg(a,b,c)}
J.cN=function(a,b,c,d){return J.j(a).bh(a,b,c,d)}
J.fj=function(a,b){return J.j(a).bj(a,b)}
J.fk=function(a,b){return J.j(a).bk(a,b)}
J.fl=function(a,b,c,d,e){return J.j(a).bl(a,b,c,d,e)}
J.fm=function(a,b){return J.kO(a).V(a,b)}
J.c0=function(a,b,c){return J.aN(a).dh(a,b,c)}
J.c1=function(a){return J.j(a).bn(a)}
J.fn=function(a){return J.j(a).bo(a)}
J.fo=function(a){return J.j(a).bp(a)}
J.cO=function(a){return J.j(a).br(a)}
J.fp=function(a){return J.j(a).dm(a)}
J.fq=function(a,b){return J.j(a).bs(a,b)}
J.c2=function(a,b){return J.j(a).bt(a,b)}
J.fr=function(a,b,c,d){return J.j(a).bu(a,b,c,d)}
J.fs=function(a,b,c,d,e){return J.j(a).dn(a,b,c,d,e)}
J.ft=function(a,b,c,d,e){return J.j(a).bv(a,b,c,d,e)}
J.fu=function(a,b,c,d,e,f){return J.j(a).dq(a,b,c,d,e,f)}
J.fv=function(a,b){return J.el(a).t(a,b)}
J.bx=function(a,b){return J.j(a).bw(a,b)}
J.fw=function(a,b){return J.j(a).bx(a,b)}
J.fx=function(a){return J.j(a).dr(a)}
J.fy=function(a,b){return J.j(a).B(a,b)}
J.cP=function(a,b,c,d,e,f){return J.j(a).bA(a,b,c,d,e,f)}
J.fz=function(a){return J.j(a).gd6(a)}
J.aR=function(a){return J.B(a).gu(a)}
J.by=function(a){return J.el(a).gv(a)}
J.aS=function(a){return J.aN(a).gj(a)}
J.fA=function(a){return J.j(a).gdB(a)}
J.fB=function(a){return J.j(a).gdG(a)}
J.fC=function(a){return J.bS(a).gdS(a)}
J.c3=function(a){return J.bS(a).gbX(a)}
J.c4=function(a){return J.bS(a).gbY(a)}
J.cQ=function(a){return J.bS(a).gdM(a)}
J.c5=function(a,b){return J.j(a).W(a,b)}
J.fD=function(a){return J.j(a).a9(a)}
J.cR=function(a){return J.j(a).aw(a)}
J.fE=function(a,b){return J.j(a).ax(a,b)}
J.fF=function(a,b,c){return J.j(a).ay(a,b,c)}
J.cS=function(a,b,c){return J.j(a).aC(a,b,c)}
J.cT=function(a,b,c){return J.j(a).bB(a,b,c)}
J.fG=function(a,b){return J.j(a).bC(a,b)}
J.fH=function(a,b,c){return J.j(a).bD(a,b,c)}
J.cU=function(a){return J.j(a).dC(a)}
J.fI=function(a,b,c,d){return J.j(a).aH(a,b,c,d)}
J.fJ=function(a,b,c,d,e,f,g){return J.j(a).bG(a,b,c,d,e,f,g)}
J.fK=function(a,b,c,d){return J.j(a).bH(a,b,c,d)}
J.bz=function(a,b,c,d){return J.j(a).bI(a,b,c,d)}
J.fL=function(a,b,c,d,e,f){return J.j(a).dH(a,b,c,d,e,f)}
J.fM=function(a){return J.em(a).dI(a)}
J.bc=function(a){return J.B(a).k(a)}
J.fN=function(a,b,c,d){return J.j(a).dK(a,b,c,d)}
J.fO=function(a,b,c){return J.j(a).bK(a,b,c)}
J.fP=function(a,b,c){return J.j(a).bL(a,b,c)}
J.c6=function(a,b,c){return J.j(a).bM(a,b,c)}
J.fQ=function(a,b,c){return J.j(a).bN(a,b,c)}
J.cV=function(a,b,c){return J.j(a).bO(a,b,c)}
J.cW=function(a,b,c){return J.j(a).bP(a,b,c)}
J.cX=function(a,b,c){return J.j(a).bQ(a,b,c)}
J.cY=function(a,b,c,d){return J.j(a).bR(a,b,c,d)}
J.cZ=function(a,b,c,d){return J.j(a).bS(a,b,c,d)}
J.fR=function(a,b){return J.j(a).bT(a,b)}
J.fS=function(a,b,c){return J.j(a).dL(a,b,c)}
J.fT=function(a,b,c,d,e,f,g){return J.j(a).bU(a,b,c,d,e,f,g)}
J.fU=function(a,b,c,d,e){return J.j(a).bW(a,b,c,d,e)}
I.aP=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bA.prototype
C.I=W.ca.prototype
C.v=W.h9.prototype
C.p=W.hg.prototype
C.J=W.hi.prototype
C.K=W.hx.prototype
C.l=W.hy.prototype
C.L=J.f.prototype
C.a=J.bh.prototype
C.w=J.dm.prototype
C.e=J.dn.prototype
C.x=J.dp.prototype
C.h=J.bi.prototype
C.S=J.bj.prototype
C.A=H.hX.prototype
C.m=H.hY.prototype
C.W=W.hZ.prototype
C.X=W.i2.prototype
C.B=J.i7.prototype
C.C=W.ii.prototype
C.Y=W.co.prototype
C.H=W.iH.prototype
C.t=J.b2.prototype
C.u=W.iU.prototype
C.d=new P.jO()
C.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.N=function(hooks) {
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

C.O=function(getTagFallback) {
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
C.P=function() {
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
C.Q=function(hooks) {
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
C.R=function(hooks) {
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
C.T=H.h(I.aP(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.b])
C.U=H.h(I.aP(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.b])
C.V=H.h(I.aP([]),[P.b])
C.q=H.h(I.aP(["bind","if","ref","repeat","syntax"]),[P.b])
C.r=H.h(I.aP(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.b])
C.Z=new G.C("vec3","vertex btangents",0)
C.c=new G.C("vec3","",0)
C.a_=new G.C("vec4","delta from light",0)
C.n=new G.C("","",0)
C.D=new G.C("vec3","vertex coordinates",0)
C.a0=new G.C("vec3","vertex binormals",0)
C.E=new G.C("vec4","for wireframe",0)
C.a1=new G.C("vec4","per vertex color",0)
C.a2=new G.C("float","for normal maps",0)
C.i=new G.C("mat4","",0)
C.a4=new G.C("mat4","",4)
C.a3=new G.C("mat4","",128)
C.b=new G.C("float","",0)
C.a5=new G.C("float","",4)
C.a6=new G.C("float","depth for shadowmaps",0)
C.f=new G.C("sampler2D","",0)
C.a7=new G.C("float","for bump maps",0)
C.a8=new G.C("vec2","texture uvs",0)
C.a9=new G.C("float","time since program start in sec",0)
C.j=new G.C("vec2","",0)
C.aa=new G.C("samplerCube","",0)
C.k=new G.C("vec4","",0)
C.ab=new G.C("vec3","vertex normals",0)
C.ac=new G.C("sampler2DShadow","",0)
C.F=new G.C("vec3","per vertex color",0)
C.G=new G.C("mat3","",0)
C.ad=new G.C("vec3","vertex tangents",0)
$.a9=0
$.aT=null
$.d1=null
$.cu=!1
$.eo=null
$.eg=null
$.et=null
$.bR=null
$.bV=null
$.cC=null
$.aK=null
$.b4=null
$.b5=null
$.cv=!1
$.A=C.d
$.af=null
$.cc=null
$.dd=null
$.dc=null
$.d8=null
$.d7=null
$.d6=null
$.d5=null
$.ek=0
$.kD="\nvec3 config = vec3(1.0 / 80.0, 6.0, 3.0);\n// vec3 config = vec3(0.2, 2.0, 2.0);\n\n\n// averaged pixel intensity from 3 color channels\nfloat avg3(vec3 pix) {\n return (pix.r + pix.g + pix.b)/3.0;\n}\n\nvec3 get_pixel(ivec2 center, int dx, int dy) {\n return texelFetch(uTexture, center + ivec2(dx, dy), 0).rgb;\n}\n\n// returns pixel color using a strange kernel\n\nfloat IsEdge(ivec2 center) {\n  // read neighboring pixel intensities\n  float pix0 = avg3(get_pixel(center, -1, -1));\n  float pix1 = avg3(get_pixel(center, -1, 0));\n  float pix2 = avg3(get_pixel(center, -1, 1));\n  float pix3 = avg3(get_pixel(center, 0, -1));\n\n  float pix5 = avg3(get_pixel(center, 0, 1));\n  float pix6 = avg3(get_pixel(center, 1, -1));\n  float pix7 = avg3(get_pixel(center, 1, 0));\n  float pix8 = avg3(get_pixel(center, 1, 1));\n\n\n  // average color differences around neighboring pixels\n  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +\n                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;\n  return clamp(5.5*delta, 0.0, 1.0);\n}\n\nvoid main() {\n    ivec2 center = ivec2(gl_FragCoord.xy);\n\n    vec4 colorOrg = texelFetch(uTexture, center, 0);\n    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);\n    // find nearest level\n    vHSV =  ceil(vHSV * config) / config;\n    float edg = IsEdge(center);\n    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);\n    //vec3 vRGB = (edg >= 0.3) ? vec3(1.0, 1.0, 1.0) : vec3(0.0, 0.0, 0.0);\n    //vec3 vRGB = HSVtoRGB(vHSV);\n    oFragColor = vec4(vRGB, 1.0);\n}\n"
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
I.$lazy(y,x,w)}})(["lA","eJ",function(){return H.en("_$dart_dartClosure")},"mc","cG",function(){return H.en("_$dart_js")},"mZ","eN",function(){return H.ac(H.bJ({
toString:function(){return"$receiver$"}}))},"n_","eO",function(){return H.ac(H.bJ({$method$:null,
toString:function(){return"$receiver$"}}))},"n0","eP",function(){return H.ac(H.bJ(null))},"n1","eQ",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"n4","eT",function(){return H.ac(H.bJ(void 0))},"n5","eU",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"n3","eS",function(){return H.ac(H.dL(null))},"n2","eR",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"n7","eW",function(){return H.ac(H.dL(void 0))},"n6","eV",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ng","cH",function(){return P.iX()},"nw","ba",function(){return[]},"lx","eI",function(){return{}},"nn","eX",function(){return P.ci(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.b)},"no","cI",function(){return P.y(P.b,P.bf)},"mK","eK",function(){return new G.dK(1281,0,4294967295)},"lh","ev",function(){return new G.dJ(1281,1281,1281)},"nu","a7",function(){return P.ch(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.F,"aColorAlpha",C.a1,"aPosition",C.D,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.E,"aPointSize",C.b,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.k,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.F,"vTexUV",C.j,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.D,"vPositionFromLight",C.a_,"vCenter",C.E,"vDepth",C.a6,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.ac,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.aa,"uAnimationTable",C.f,"uTime",C.a9,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.c,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.b,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.b,G.C)},"mT","eL",function(){var z=G.dI()
z.d=!1
z.b=!0
z.a=!1
z.f=9728
z.r=9728
return z},"mU","eM",function(){var z=G.dI()
z.b=!0
return z},"nC","f0",function(){var z,y
z=G.O("null")
y=[P.b]
z.aJ(H.h(["aPosition"],y))
z.C(H.h(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n}\n"],y))
return z},"nz","eZ",function(){var z,y
z=G.O("copyF")
y=[P.b]
z.A(H.h(["uTexture"],y))
z.aQ(H.h(["oFragColor = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0);"],y))
return z},"nJ","f4",function(){var z,y
z=G.O("nullUV")
y=[P.b]
z.aJ(H.h(["aPosition","aTexUV"],y))
z.aK(H.h(["vTexUV"],y))
z.C(H.h(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y))
return z},"nI","f3",function(){var z,y
z=G.O("copyF")
y=[P.b]
z.A(H.h(["uTexture"],y))
z.aK(H.h(["vTexUV"],y))
z.aQ(H.h(["oFragColor = texture(uTexture, vTexUV);"],y))
return z},"nO","f9",function(){var z,y
z=G.O("ToonF")
y=[P.b]
z.A(H.h(["uTexture"],y))
z.C(H.h(["vec3 RGBtoHSV(vec3 rgb) {\n   float r = rgb.r;\n   float g = rgb.g;\n   float b = rgb.b;\n\n\n   float minv = min(min(r, g), b);\n   float maxv = max(max(r, g), b);\n   float delta = maxv - minv;\n\n   vec3 res;\n   res.z = maxv;            // v\n   if( maxv == 0.0 ) {\n      // r = g = b = 0      // s = 0, v is undefined\n      res.y = 0.0;\n      res.x = -1.0;\n      return res;\n   }\n\n   res.y = delta / maxv;      // s\n   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta\n   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow\n   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan\n\n   res.x = res.x * 60.0;            // degrees\n   if( res.x < 0.0 ) res.x = res.x + 360.0;\n\n   return res;\n}\n\nvec3 HSVtoRGB(vec3 hsv) {\n   float h = hsv.x / 60.0;  // sector 0 to 5\n   float s = hsv.y;\n   float v = hsv.z;\n\n   if( s == 0.0 ) {\n      // achromatic (grey)\n      return vec3(v, v, v);\n   }\n\n   int i = int(floor( h ));\n   float f = h - float(i);         // fractional part of h\n   float p = v * ( 1.0 - s );\n   float q = v * ( 1.0 - s * f );\n   float t = v * ( 1.0 - s * ( 1.0 - f ) );\n\n   if (i == 0) return vec3(v, t, p);\n   else if (i == 1) return vec3(q, v , p);\n   else if (i == 2) return vec3(p, v, t);\n   else if (i == 3) return vec3(p, q, v);\n   else if (i == 4) return vec3(t, p, v);\n   return vec3(v, p, q);\n}\n",$.kD],y))
return z},"nF","f1",function(){var z,y
z=G.O("HexPixelateF")
y=[P.b]
z.A(H.h(["uCenter2","uPointSize","uTexture"],y))
z.C(H.h(["\nfloat S = 0.86602540378;\n\nvec2 GetHexCenter(vec2 p) {\n vec2 a;\n    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));\n    else a = vec2(ceil(p.x), ceil(p.y));\n    vec2 b = vec2(ceil(p.x), floor(p.y));\n    vec2 c = vec2(floor(p.x), ceil(p.y));\n\n    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);\n    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n    float alen = length(P - A);\n    float blen = length(P - B);\n    float clen = length(P - C);\n\n    if (alen < blen) {\n        return (alen < clen) ? a : c;\n    } else {\n        return (blen < clen) ? b : c;\n    }\n}\n\nvec2 ToPixelSpace(vec2 v) {\n    vec2 p = (v - uCenter2) / uPointSize;\n    float t = p.y / S;\n    return vec2(p.x - 0.5 * t, t);\n}\n\nvec2 ToNormalizedSpace(vec2 v, vec2 texdim) {\n   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);\n   return p * uPointSize + uCenter2 / texdim;\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec2 p = ToPixelSpace(gl_FragCoord.xy);\n    vec2 c = GetHexCenter(p);\n    vec2 q = ToNormalizedSpace(c, texdim);\n    oFragColor = texelFetch(uTexture, ivec2(q), 0);\n}\n"],y))
return z},"nB","f_",function(){var z,y
z=G.O("DotF")
y=[P.b]
z.A(H.h(["uCenter2","uScale","uAngle","uTexture"],y))
z.C(H.h(["// Inspired by three.js\n\nfloat pattern(vec2 tex) {\n\t\tfloat s = sin( uAngle );\n\t\tfloat c = cos( uAngle );\n\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * uScale;\n\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n    vec2 center = gl_FragCoord.xy;\n\t\tvec2 texdim = vec2(textureSize(uTexture, 0));\n\t\tvec4 color = texelFetch(uTexture, ivec2(center), 0);\n\t\tfloat average = ( color.r + color.g + color.b ) / 3.0;\n    vec2 tex = center - uCenter2;\n\t\toFragColor = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );\n}\n"],y))
return z},"nP","fa",function(){var z,y
z=G.O("DotF")
y=[P.b]
z.A(H.h(["uScale","uTime","uTexture"],y))
z.C(H.h(["float rand(vec2 co)  {\n    float a = 12.9898;\n    float b = 78.233;\n    float c = 43758.5453;\n    float dt = dot(co.xy, vec2(a,b));\n    float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec3 rgbDistortion(vec2 uv, float magnitude, float time) {\n    // x offset for the three color channels\n    // we do not change the y\n\t  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +\n\t             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;\n\t  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +\n               sin(time * 9.0) * magnitude;\n\t  float dB = 0.0;\n    return vec3(dR, dG, dB);\n}\n\nvoid main() {\n      vec2 dim = vec2(textureSize(uTexture, 0));\n      vec2 center = gl_FragCoord.xy / dim;\n      vec3 d = rgbDistortion(center, uScale, uTime);\n      float x = center.x;\n      float y = center.y;\n\n\t\t\tfloat r = texelFetch(uTexture, ivec2(dim * vec2(x + d.r, y)), 0).r;\n\t\t\tfloat g = texelFetch(uTexture, ivec2(dim * vec2(x + d.g, y)), 0).g;\n\t\t\tfloat b = texelFetch(uTexture, ivec2(dim * vec2(x + d.b, y)), 0).b;\n\t\t\toFragColor = vec4( r, g, b, 1.0 );\n}\n"],y))
return z},"nG","f2",function(){var z,y
z=G.O("LumidotsF")
y=[P.b]
z.A(H.h(["uPointSize","uTexture"],y))
z.C(H.h(["// Inspired by https://www.shadertoy.com/view/MtcXRB\n\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\n\nvoid main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = gl_FragCoord.xy;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    vec3 col = texelFetch(uTexture, ivec2(center), 0).rgb;\n    float lum = max(0.1, RGB2Luma(col));\n    float alpha =  smoothstep(1.0, 0.5,\n                              distance(center, uv) / lum / r);\n    oFragColor.rgb = col.rgb * alpha;\n}\n"],y))
return z},"nM","f7",function(){var z,y
z=G.O("SquarePixelateF")
y=[P.b]
z.A(H.h(["uPointSize","uTexture"],y))
z.C(H.h(["void main() {\n    float r = uPointSize;\n    vec2 center = floor(gl_FragCoord.xy / r / 2.0) * 2.0 * r + r;\n    oFragColor = texelFetch(uTexture, ivec2(center), 0);\n}\n"],y))
return z},"lm","ey",function(){return T.aY(-1,0,-1,0,4,0,-1,0,-1)},"ls","eE",function(){return T.b3(0.5,0.5,0.5)},"ln","ez",function(){return T.aY(2,0,0,0,-1,0,0,0,-1)},"lt","eF",function(){return T.b3(0.5,0.5,0.5)},"lo","eA",function(){return T.aY(-2,0,0,0,2,0,0,0,0)},"lu","eG",function(){return T.b3(0.37,0.37,0.37)},"lp","eB",function(){var z=T.aY(0,-2,0,-2,11,-2,0,-2,0)
z.aE(0,0.333)
return z},"lv","eH",function(){return T.b3(0,0,0)},"ll","ex",function(){return T.aY(-1,-1,-1,-1,8,-1,-1,-1,-1)},"lr","eD",function(){return T.b3(0,0,0)},"lk","ew",function(){var z=T.aY(1,2,1,2,4,2,1,2,1)
z.aE(0,0.0625)
return z},"lq","eC",function(){return T.b3(0,0,0)},"ny","eY",function(){var z,y
z=G.O("Convolution3x3F")
y=[P.b]
z.A(H.h(["uTexture","uColor","uConvolutionMatrix"],y))
z.C(H.h(["void main() {\n    mat3 m = uConvolutionMatrix;\n    ivec2 center = ivec2(gl_FragCoord.xy);\n    vec3 sum = vec3(0.0, 0.0, 0.0);\n    for (int x = -1; x <= 1; x++) {\n      for (int y = -1; y <= 1; y++) {\n        sum += m[x+1][y+1] * texelFetch(uTexture, center + ivec2(x, y), 0).rgb;     \n      }\n    }\n    oFragColor.rgb = uColor + sum;\n}\n\n"],y))
return z},"nK","f5",function(){var z,y
z=G.O("ScanlinePixelateF")
y=[P.b]
z.A(H.h(["uTexture","uRange"],y))
z.C(H.h(["      \n// const vec3 comp = vec3(0.05, 0.15, 0.95);\nconst vec3 comp = vec3(0.1, 0.30, 0.85);\n\nvoid main() {\n    // number scan lines: texture height * \n    vec2 sine_coord = uRange * 2.0 * 3.1415;\n                        \n    sine_coord.x = 0.0;\n    vec2 dim = vec2(textureSize(uTexture, 0));\n    vec2 pixel = gl_FragCoord.xy;\n    vec3 color =  texelFetch(uTexture, ivec2(pixel), 0).xyz;\n    float m = comp.z + \n              dot(comp.xy * sin(pixel / dim * sine_coord), vec2(1.0, 1.0));\n    oFragColor = vec4(color * m, 1.0);\n}\n"],y))
return z},"nR","fc",function(){var z,y
z=G.O("WaterPixelateF")
y=[P.b]
z.A(H.h(["uTexture","uTime"],y))
z.C(H.h(["float wave(vec2 pos, float srcX, float srcY, float t) {\n   float dist = 300.0 * length(pos - vec2(srcX, srcY));\n   return sin(dist - 0.15 * t);\n}\n\nvoid main() {\n    vec2 center = gl_FragCoord.xy;\n    vec3 color = texelFetch(uTexture, ivec2(center), 0).rgb;\n    vec2 uv = center /  vec2(textureSize(uTexture, 0)); \n    float t =  uTime * 50.0;\n    float res = 0.0;\n    res += wave(uv, 0.6, 0.7, t);\n    res += wave(uv, 0.9, 0.9, t);\n    res += wave(uv, -0.6, 0.3, t);\n    res += wave(uv, 0.1, 0.4, t);\n    // res += wave(uv, 0.1, 0.4, t);\n    res += wave(uv, 0.5, 0.5, t);\n    res += wave(uv, -1.0, 1.4, t);\n    oFragColor = vec4(color * (0.9 + 0.012 * res), 1.0);\n}\n"],y))
return z},"nL","f6",function(){var z,y
z=G.O("sepiaPixelateF")
y=[P.b]
z.A(H.h(["uTexture","uScale"],y))
z.C(H.h(["\nvec3 SepiaColor(float gray, float sepiaFactor) {\n    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n    vec3 one3 = vec3(1.0);\n    vec3 color = gray <= 0.5 ?\n                 sepiaColor * 2.0 * gray :\n                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);\n\n    return vec3(gray) + sepiaFactor * (color - vec3(gray));\n}\n\n// additive blend of red and blue channels\nvec3 Technicolor1(vec3 inColor, float amount) {\t\n     vec2 bgFilter = vec2(1.0, 0.7);\n     float bg = dot(inColor.bg, bgFilter) * 0.5;\n     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);\n}\n\n// multiplicative blend of red and blue channels\nvec3 Technicolor2(vec3 inColor, float amount) {\t\n    // TODO: simply this mess\n    vec3 redfilter       = vec3(1.0, 0.0, 0.0);\n    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);\n    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);\n\n\t  vec3 redrecord       = inColor * redfilter;\n\t  vec3 bluegreenrecord = inColor * bluegreenfilter;\n\t\n\t  vec3 rednegative = vec3(redrecord.r);\n\t  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);\n\t\n\t  vec3 redoutput = rednegative + cyanfilter;\n\t  vec3 bluegreenoutput = bluegreennegative + magentafilter;\n\t\n\t  vec3 result = redoutput * bluegreenoutput;\n\t\n\t  return mix(inColor, result, amount);\n}\n\n//  matting between all channels.\nvec3 Technicolor3(vec3 inColor, float amount) {\t\t\n  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;\n \treturn mix(inColor, inColor * matte.gbr * matte.brg, amount);\n}\n\n// cyan, magenta, yellow and red/orange filters\nvec3 Technicolor4(vec3 inColor, float amount) {\t\t\n    // TODO: simply this mess\n    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);\n    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);\n    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);\n    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);\n    \n    vec3 greenrecord = inColor * greenfilter;\n\t  vec3 bluerecord  = inColor * magentafilter;\n    vec3 redrecord   = inColor * redorangefilter;\n    \n    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);\n\t  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);\n\t  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);\n\t\n\t  vec3 redoutput   = rednegative + cyanfilter;\n\t  vec3 greenoutput = greennegative + magentafilter;\n\t  vec3 blueoutput  =  bluenegative + yellowfilter;\n\t\n\t  vec3 result = redoutput * greenoutput * blueoutput;\n    return mix(inColor, result, amount);\n}\n\nfloat VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {\t\t\n\tfloat d = distance(vec2(0.5, 0.5), uv) * 1.414213;\n\treturn clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);\n}\n","void main() { \n    vec3 color = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0).rgb;\n    float gray = dot(color, vec3(0.3333));\n    // float gray = dot(color, vec3(0.2126, 0.7152, 0.0723));\n    oFragColor = vec4(SepiaColor(gray, uScale), 1.0);\n}\n"],y))
return z},"nN","f8",function(){var z,y
z=G.O("technicolorPixelateF")
y=[P.b]
z.A(H.h(["uTexture"],y))
z.C(H.h(["\nvec3 SepiaColor(float gray, float sepiaFactor) {\n    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n    vec3 one3 = vec3(1.0);\n    vec3 color = gray <= 0.5 ?\n                 sepiaColor * 2.0 * gray :\n                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);\n\n    return vec3(gray) + sepiaFactor * (color - vec3(gray));\n}\n\n// additive blend of red and blue channels\nvec3 Technicolor1(vec3 inColor, float amount) {\t\n     vec2 bgFilter = vec2(1.0, 0.7);\n     float bg = dot(inColor.bg, bgFilter) * 0.5;\n     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);\n}\n\n// multiplicative blend of red and blue channels\nvec3 Technicolor2(vec3 inColor, float amount) {\t\n    // TODO: simply this mess\n    vec3 redfilter       = vec3(1.0, 0.0, 0.0);\n    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);\n    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);\n\n\t  vec3 redrecord       = inColor * redfilter;\n\t  vec3 bluegreenrecord = inColor * bluegreenfilter;\n\t\n\t  vec3 rednegative = vec3(redrecord.r);\n\t  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);\n\t\n\t  vec3 redoutput = rednegative + cyanfilter;\n\t  vec3 bluegreenoutput = bluegreennegative + magentafilter;\n\t\n\t  vec3 result = redoutput * bluegreenoutput;\n\t\n\t  return mix(inColor, result, amount);\n}\n\n//  matting between all channels.\nvec3 Technicolor3(vec3 inColor, float amount) {\t\t\n  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;\n \treturn mix(inColor, inColor * matte.gbr * matte.brg, amount);\n}\n\n// cyan, magenta, yellow and red/orange filters\nvec3 Technicolor4(vec3 inColor, float amount) {\t\t\n    // TODO: simply this mess\n    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);\n    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);\n    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);\n    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);\n    \n    vec3 greenrecord = inColor * greenfilter;\n\t  vec3 bluerecord  = inColor * magentafilter;\n    vec3 redrecord   = inColor * redorangefilter;\n    \n    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);\n\t  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);\n\t  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);\n\t\n\t  vec3 redoutput   = rednegative + cyanfilter;\n\t  vec3 greenoutput = greennegative + magentafilter;\n\t  vec3 blueoutput  =  bluenegative + yellowfilter;\n\t\n\t  vec3 result = redoutput * greenoutput * blueoutput;\n    return mix(inColor, result, amount);\n}\n\nfloat VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {\t\t\n\tfloat d = distance(vec2(0.5, 0.5), uv) * 1.414213;\n\treturn clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);\n}\n","void main() { \n    vec3 color = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0).rgb;\n    oFragColor = vec4(Technicolor3(color, 0.5), 1.0);\n}\n"],y))
return z},"nQ","fb",function(){var z,y
z=G.O("vignettingPixelateF")
y=[P.b]
z.A(H.h(["uTexture","uRange"],y))
z.C(H.h(["\nvec3 SepiaColor(float gray, float sepiaFactor) {\n    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n    vec3 one3 = vec3(1.0);\n    vec3 color = gray <= 0.5 ?\n                 sepiaColor * 2.0 * gray :\n                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);\n\n    return vec3(gray) + sepiaFactor * (color - vec3(gray));\n}\n\n// additive blend of red and blue channels\nvec3 Technicolor1(vec3 inColor, float amount) {\t\n     vec2 bgFilter = vec2(1.0, 0.7);\n     float bg = dot(inColor.bg, bgFilter) * 0.5;\n     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);\n}\n\n// multiplicative blend of red and blue channels\nvec3 Technicolor2(vec3 inColor, float amount) {\t\n    // TODO: simply this mess\n    vec3 redfilter       = vec3(1.0, 0.0, 0.0);\n    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);\n    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);\n\n\t  vec3 redrecord       = inColor * redfilter;\n\t  vec3 bluegreenrecord = inColor * bluegreenfilter;\n\t\n\t  vec3 rednegative = vec3(redrecord.r);\n\t  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);\n\t\n\t  vec3 redoutput = rednegative + cyanfilter;\n\t  vec3 bluegreenoutput = bluegreennegative + magentafilter;\n\t\n\t  vec3 result = redoutput * bluegreenoutput;\n\t\n\t  return mix(inColor, result, amount);\n}\n\n//  matting between all channels.\nvec3 Technicolor3(vec3 inColor, float amount) {\t\t\n  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;\n \treturn mix(inColor, inColor * matte.gbr * matte.brg, amount);\n}\n\n// cyan, magenta, yellow and red/orange filters\nvec3 Technicolor4(vec3 inColor, float amount) {\t\t\n    // TODO: simply this mess\n    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);\n    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);\n    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);\n    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);\n    \n    vec3 greenrecord = inColor * greenfilter;\n\t  vec3 bluerecord  = inColor * magentafilter;\n    vec3 redrecord   = inColor * redorangefilter;\n    \n    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);\n\t  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);\n\t  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);\n\t\n\t  vec3 redoutput   = rednegative + cyanfilter;\n\t  vec3 greenoutput = greennegative + magentafilter;\n\t  vec3 blueoutput  =  bluenegative + yellowfilter;\n\t\n\t  vec3 result = redoutput * greenoutput * blueoutput;\n    return mix(inColor, result, amount);\n}\n\nfloat VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {\t\t\n\tfloat d = distance(vec2(0.5, 0.5), uv) * 1.414213;\n\treturn clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);\n}\n","void main() { \n    vec2 dim = vec2(textureSize(uTexture, 0));\n    vec3 color = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0).rgb;\n    float v = VignettingFactor(gl_FragCoord.xy / dim, uRange.x, uRange.y);\n    oFragColor = vec4(color * v, 1.0);\n}\n"],y))
return z},"nD","cJ",function(){return H.ae(C.l.bE(W.kK(),"#effect"),"$isco")},"lH","bY",function(){return P.y(P.b,T.da)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[P.b,,]},{func:1,ret:P.E,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.b,args:[P.D]},{func:1,ret:P.E,args:[W.aH]},{func:1,ret:P.U,args:[W.ab]},{func:1,ret:P.U,args:[P.b]},{func:1,ret:P.U,args:[W.a1,P.b,P.b,W.bp]},{func:1,args:[,P.b]},{func:1,args:[P.b]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[,],opt:[P.a4]},{func:1,ret:[P.T,,],args:[,]},{func:1,ret:P.U,args:[W.r]},{func:1,ret:P.E,args:[W.bl]},{func:1,ret:-1,args:[P.b,P.b]},{func:1,ret:P.E,args:[P.I]},{func:1,args:[W.R]},{func:1,ret:P.b,args:[P.b]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:-1,args:[W.R]},{func:1,ret:P.E,args:[P.c]},{func:1,ret:P.D,args:[P.D,P.c]},{func:1,ret:-1,args:[P.I]},{func:1,ret:P.E,args:[P.Q]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[W.bo]}]
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
if(x==y)H.la(d||a)
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
Isolate.aP=a.aP
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
if(typeof dartMainRunner==="function")dartMainRunner(T.eq,[])
else T.eq([])})})()
//# sourceMappingURL=camera_effects.dart.js.map
