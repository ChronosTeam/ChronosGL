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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ba=function(){}
var dart=[["","",,H,{"^":"",lr:{"^":"c;a"}}],["","",,J,{"^":"",
cv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bX:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cu==null){H.kp()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.dA("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cy()]
if(v!=null)return v
v=H.ku(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cy(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
h:{"^":"c;",
B:function(a,b){return a===b},
gv:function(a){return H.b0(a)},
k:["co",function(a){return"Instance of '"+H.b1(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h2:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isO:1},
h3:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isF:1},
cg:{"^":"h;",
gv:function(a){return 0},
k:["cq",function(a){return String(a)}]},
hB:{"^":"cg;"},
b3:{"^":"cg;"},
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
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
a2:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
bn:function(a,b){var z,y
H.l(b,{func:1,ret:P.O,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.al(a))}return!1},
cj:function(a,b){if(!!a.immutable$list)H.Y(P.y("sort"))
H.i0(a,J.k0(),H.p(a,0))},
af:function(a){return this.cj(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aG(a[z],b))return!0
return!1},
k:function(a){return P.ce(a,"[","]")},
gw:function(a){return new J.fh(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.b0(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.b9(a,b))
return a[b]},
i:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.Y(P.y("indexed set"))
if(b>=a.length||b<0)throw H.b(H.b9(a,b))
a[b]=c},
$isu:1,
$asu:I.ba,
$isi:1,
$isa:1,
p:{
h1:function(a,b){return J.cf(H.m(a,[b]))},
cf:function(a){H.bu(a)
a.fixed$length=Array
return a},
lp:[function(a,b){return J.eI(H.ed(a,"$isT"),H.ed(b,"$isT"))},"$2","k0",8,0,29]}},
lq:{"^":"bk;$ti"},
fh:{"^":"c;a,b,c,0d,$ti",
sb2:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.N(z))
x=this.c
if(x>=y){this.sb2(null)
return!1}this.sb2(z[x]);++this.c
return!0},
$isaW:1},
bl:{"^":"h;",
K:function(a,b){var z
H.cw(b)
if(typeof b!=="number")throw H.b(H.b7(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gac(b)
if(this.gac(a)===z)return 0
if(this.gac(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gac:function(a){return a===0?1/a<0:a<0},
bX:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.y(""+a+".toInt()"))},
dq:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.y(""+a+".ceil()"))},
dr:function(a,b,c){if(this.K(b,c)>0)throw H.b(H.b7(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dV:function(a,b){var z
if(b>20)throw H.b(P.at(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gac(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
ct:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bk(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.bk(a,b)},
bk:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bi:function(a,b){var z
if(a>0)z=this.da(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
da:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.b(H.b7(b))
return a>b},
$isT:1,
$asT:function(){return[P.E]},
$isU:1,
$isE:1},
d8:{"^":"bl;",$isB:1},
d7:{"^":"bl;"},
bm:{"^":"h;",
am:function(a,b){if(b>=a.length)throw H.b(H.b9(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.t(b)
if(typeof b!=="string")throw H.b(P.cP(b,null,null))
return a+b},
cl:function(a,b,c){var z
if(c>a.length)throw H.b(P.at(c,0,a.length,null,null))
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
dU:function(a){return a.toLowerCase()},
ds:function(a,b,c){if(c>a.length)throw H.b(P.at(c,0,a.length,null,null))
return H.kA(a,b,c)},
K:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.b(H.b7(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.b(H.b9(a,b))
return a[b]},
$isu:1,
$asu:I.ba,
$isT:1,
$asT:function(){return[P.d]},
$ishy:1,
$isd:1}}],["","",,H,{"^":"",
fZ:function(){return new P.bJ("No element")},
h0:function(){return new P.bJ("Too many elements")},
h_:function(){return new P.bJ("Too few elements")},
i0:function(a,b,c){H.v(a,"$isa",[c],"$asa")
H.l(b,{func:1,ret:P.B,args:[c,c]})
H.bp(a,0,J.ad(a)-1,b,c)},
bp:function(a,b,c,d,e){H.v(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.i_(a,b,c,d,e)
else H.hZ(a,b,c,d,e)},
i_:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.aP(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a6(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hZ:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isa",[a2],"$asa")
H.l(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.d.V(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.V(b+a0,2)
v=w-z
u=w+z
t=J.aP(a)
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
if(J.aG(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a4()
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
if(typeof e!=="number")return e.a4()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.S()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.S()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a4()
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
if(m<y&&l>x){for(;J.aG(a1.$2(t.h(a,m),r),0);)++m
for(;J.aG(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a4()
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
aE:function(a,b){return this.cp(0,H.l(b,{func:1,ret:P.O,args:[H.ct(this,"bo",0)]}))}},
i9:{"^":"bo;a,b,c,$ti",
gcU:function(){var z=J.ad(this.a)
return z},
gdc:function(){var z,y
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
z=this.gdc()+b
if(b>=0){y=this.gcU()
if(typeof y!=="number")return H.ai(y)
y=z>=y}else y=!0
if(y)throw H.b(P.D(b,this,"index",null,null))
return J.cF(this.a,z)},
dT:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.aP(y)
w=x.gj(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.m(u,this.$ti)
for(s=0;s<v;++s){C.a.i(t,s,x.q(y,z+s))
if(x.gj(y)<w)throw H.b(P.al(this))}return t},
p:{
ia:function(a,b,c,d){return new H.i9(a,b,c,[d])}}},
dc:{"^":"c;a,b,c,0d,$ti",
sb3:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aP(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.al(z))
w=this.c
if(w>=x){this.sb3(null)
return!1}this.sb3(y.q(z,w));++this.c
return!0},
$isaW:1},
he:{"^":"bo;a,b,$ti",
gj:function(a){return J.ad(this.a)},
q:function(a,b){return this.b.$1(J.cF(this.a,b))},
$asbo:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dB:{"^":"i;a,b,$ti",
gw:function(a){return new H.iq(J.bz(this.a),this.b,this.$ti)}},
iq:{"^":"aW;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bF:{"^":"c;$ti"}}],["","",,H,{"^":"",
aF:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kh:function(a){return init.types[H.L(a)]},
ks:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bg(a)
if(typeof z!=="string")throw H.b(H.b7(a))
return z},
b0:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b1:function(a){return H.hC(a)+H.bQ(H.ah(a),0,null)},
hC:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isb3){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aF(w.length>1&&C.i.am(w,0)===36?C.i.cm(w,1):w)},
aI:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hJ:function(a){var z=H.aI(a).getFullYear()+0
return z},
hH:function(a){var z=H.aI(a).getMonth()+1
return z},
hD:function(a){var z=H.aI(a).getDate()+0
return z},
hE:function(a){var z=H.aI(a).getHours()+0
return z},
hG:function(a){var z=H.aI(a).getMinutes()+0
return z},
hI:function(a){var z=H.aI(a).getSeconds()+0
return z},
hF:function(a){var z=H.aI(a).getMilliseconds()+0
return z},
ai:function(a){throw H.b(H.b7(a))},
j:function(a,b){if(a==null)J.ad(a)
throw H.b(H.b9(a,b))},
b9:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.L(J.ad(a))
if(!(b<0)){if(typeof z!=="number")return H.ai(z)
y=b>=z}else y=!0
if(y)return P.D(b,a,"index",null,z)
return P.bH(b,"index",null)},
b7:function(a){return new P.aH(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.dk()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eg})
z.name=""}else z.toString=H.eg
return z},
eg:function(){return J.bg(this.dartException)},
Y:function(a){throw H.b(a)},
N:function(a){throw H.b(P.al(a))},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.bi(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ch(H.e(y)+" (Error "+w+")",null))
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
if(l)return z.$1(H.dj(H.t(y),m))}}return z.$1(new H.il(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dq()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dq()
return a},
bb:function(a){var z
if(a==null)return new H.dR(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dR(a)},
kd:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kr:function(a,b,c,d,e,f){H.f(a,"$isbi")
switch(H.L(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.d3("Unsupported number of arguments for wrapped closure"))},
b8:function(a,b){var z
H.L(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kr)
a.$identity=z
return z},
ft:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hO(z).r}else x=d
w=e?Object.create(new H.i1().constructor.prototype):Object.create(new H.c8(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kh,x)
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
fq:function(a,b,c,d){var z=H.c9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cU:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fs(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fq(y,!w,z,b)
if(y===0){w=$.a7
if(typeof w!=="number")return w.G()
$.a7=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aS
if(v==null){v=H.bC("self")
$.aS=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a7
if(typeof w!=="number")return w.G()
$.a7=w+1
t+=w
w="return function("+t+"){return this."
v=$.aS
if(v==null){v=H.bC("self")
$.aS=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fr:function(a,b,c,d){var z,y
z=H.c9
y=H.cS
switch(b?-1:a){case 0:throw H.b(H.hS("Intercepted function with no arguments."))
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
z=$.aS
if(z==null){z=H.bC("self")
$.aS=z}y=$.cR
if(y==null){y=H.bC("receiver")
$.cR=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fr(w,!u,x,b)
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
cr:function(a,b,c,d,e,f,g){return H.ft(a,b,H.L(c),d,!!e,!!f,g)},
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
cx:function(a,b){throw H.b(H.a2(a,H.aF(H.t(b).substring(3))))},
ky:function(a,b){throw H.b(H.cT(a,H.aF(H.t(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cx(a,b)},
aj:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.ky(a,b)},
ed:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cx(a,b)},
bu:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.b(H.a2(a,"List<dynamic>"))},
kt:function(a,b){var z
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
return"Closure"}return H.b1(a)},
kB:function(a){throw H.b(new P.fz(H.t(a)))},
e9:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
ah:function(a){if(a==null)return
return a.$ti},
mQ:function(a,b,c){return H.aR(a["$as"+H.e(c)],H.ah(b))},
ac:function(a,b,c,d){var z
H.t(c)
H.L(d)
z=H.aR(a["$as"+H.e(c)],H.ah(b))
return z==null?null:z[d]},
ct:function(a,b,c){var z
H.t(b)
H.L(c)
z=H.aR(a["$as"+H.e(b)],H.ah(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.L(b)
z=H.ah(a)
return z==null?null:z[b]},
bv:function(a){return H.aC(a,null)},
aC:function(a,b){var z,y
H.v(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aF(a[0].builtin$cls)+H.bQ(a,1,b)
if(typeof a=="function")return H.aF(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.L(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.e(b[y])}if('func' in a)return H.k_(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(z=H.kc(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.aC(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bQ:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.ck("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return"<"+z.k(0)+">"},
kg:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cs(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ah(a)
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
H.t(b)
H.bu(c)
H.t(d)
if(a==null)return!1
z=H.ah(a)
y=J.A(a)
if(y[b]==null)return!1
return H.e3(H.aR(y[d],z),null,c,null)},
bw:function(a,b,c,d){H.t(b)
H.bu(c)
H.t(d)
if(a==null)return a
if(H.aD(a,b,c,d))return a
throw H.b(H.cT(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bQ(c,0,null),init.mangledGlobalNames)))},
v:function(a,b,c,d){H.t(b)
H.bu(c)
H.t(d)
if(a==null)return a
if(H.aD(a,b,c,d))return a
throw H.b(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bQ(c,0,null),init.mangledGlobalNames)))},
e3:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.W(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.W(a[y],b,c[y],d))return!1
return!0},
mO:function(a,b,c){return a.apply(b,H.aR(J.A(b)["$as"+H.e(c)],H.ah(b)))},
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
else{if(!('$is'+"aV" in y.prototype))return!1
w=y.prototype["$as"+"aV"]
v=H.aR(w,z?a.slice(1):null)
return H.W(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e3(H.aR(r,z),b,u,d)},
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
return H.kx(m,b,l,d)},
kx:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.W(c[w],d,a[w],b))return!1}return!0},
mP:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
ku:function(a){var z,y,x,w,v,u
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
c_:function(a){return J.cv(a,!1,null,!!a.$isx)},
kw:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c_(z)
else return J.cv(z,c,null,null)},
kp:function(){if(!0===$.cu)return
$.cu=!0
H.kq()},
kq:function(){var z,y,x,w,v,u,t,s
$.bU=Object.create(null)
$.bZ=Object.create(null)
H.kl()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ef.$1(v)
if(u!=null){t=H.kw(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kl:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aO(C.O,H.aO(C.T,H.aO(C.B,H.aO(C.B,H.aO(C.S,H.aO(C.P,H.aO(C.Q(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ea=new H.km(v)
$.e2=new H.kn(u)
$.ef=new H.ko(t)},
aO:function(a,b){return a(b)||b},
kA:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hN:{"^":"c;a,b,c,d,e,f,r,0x",p:{
hO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cf(z)
y=z[0]
x=z[1]
return new H.hN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ig:{"^":"c;a,b,c,d,e,f",
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
return new H.ig(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dx:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hv:{"^":"M;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dj:function(a,b){return new H.hv(a,b==null?null:b.method)}}},
h4:{"^":"M;a,b,c",
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
il:{"^":"M;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kC:{"^":"n:5;a",
$1:function(a){if(!!J.A(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
k:function(a){return"Closure '"+H.b1(this).trim()+"'"},
gcb:function(){return this},
$isbi:1,
gcb:function(){return this}},
ds:{"^":"n;"},
i1:{"^":"ds;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aF(z)+"'"}},
c8:{"^":"ds;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b0(this.a)
else y=typeof z!=="object"?J.ak(z):H.b0(z)
return(y^H.b0(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b1(z)+"'")},
p:{
c9:function(a){return a.a},
cS:function(a){return a.c},
bC:function(a){var z,y,x,w,v
z=new H.c8("self","target","receiver","name")
y=J.cf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ih:{"^":"M;a",
k:function(a){return this.a},
p:{
a2:function(a,b){return new H.ih("TypeError: "+H.e(P.bE(a))+": type '"+H.e0(a)+"' is not a subtype of type '"+b+"'")}}},
fo:{"^":"M;a",
k:function(a){return this.a},
p:{
cT:function(a,b){return new H.fo("CastError: "+H.e(P.bE(a))+": type '"+H.e0(a)+"' is not a subtype of type '"+b+"'")}}},
hR:{"^":"M;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hS:function(a){return new H.hR(a)}}},
dy:{"^":"c;a,0b,0c,0d",
ga8:function(){var z=this.b
if(z==null){z=H.bv(this.a)
this.b=z}return z},
k:function(a){return this.ga8()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.ga8())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dy&&this.ga8()===b.ga8()}},
d9:{"^":"dd;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.ap(this,[H.p(this,0)])},
ab:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cR(z,b)}else{y=this.dG(b)
return y}},
dG:function(a){var z=this.d
if(z==null)return!1
return this.aA(this.as(z,J.ak(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a6(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a6(w,b)
x=y==null?null:y.b
return x}else return this.dH(b)},
dH:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.as(z,J.ak(a)&0x3ffffff)
x=this.aA(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.au()
this.b=z}this.b4(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.au()
this.c=y}this.b4(y,b,c)}else{x=this.d
if(x==null){x=this.au()
this.d=x}w=J.ak(b)&0x3ffffff
v=this.as(x,w)
if(v==null)this.ax(x,w,[this.ak(b,c)])
else{u=this.aA(v,b)
if(u>=0)v[u].b=c
else v.push(this.ak(b,c))}}},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.al(this))
z=z.c}},
b4:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.a6(a,b)
if(z==null)this.ax(a,b,this.ak(b,c))
else z.b=c},
b6:function(){this.r=this.r+1&67108863},
ak:function(a,b){var z,y
z=new H.h9(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b6()
return z},
aA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
k:function(a){return P.de(this)},
a6:function(a,b){return a[b]},
as:function(a,b){return a[b]},
ax:function(a,b,c){a[b]=c},
cS:function(a,b){delete a[b]},
cR:function(a,b){return this.a6(a,b)!=null},
au:function(){var z=Object.create(null)
this.ax(z,"<non-identifier-key>",z)
this.cS(z,"<non-identifier-key>")
return z},
$isda:1},
h9:{"^":"c;a,b,0c,0d"},
ap:{"^":"d_;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.ha(z,z.r,this.$ti)
y.c=z.e
return y}},
ha:{"^":"c;a,b,0c,0d,$ti",
sb5:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.al(z))
else{z=this.c
if(z==null){this.sb5(null)
return!1}else{this.sb5(z.a)
this.c=this.c.c
return!0}}},
$isaW:1},
km:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
kn:{"^":"n:13;a",
$2:function(a,b){return this.a(a,b)}},
ko:{"^":"n:14;a",
$1:function(a){return this.a(H.t(a))}}}],["","",,H,{"^":"",
kc:function(a){return J.h1(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
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
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.b9(b,a))},
hq:{"^":"h;",
cZ:function(a,b,c,d){var z=P.at(b,0,c,d,null)
throw H.b(z)},
b9:function(a,b,c,d){if(b>>>0!==b||b>c)this.cZ(a,b,c,d)},
$isii:1,
"%":"DataView;ArrayBufferView;cj|dL|dM|dh|dN|dO|ar"},
cj:{"^":"hq;",
gj:function(a){return a.length},
d9:function(a,b,c,d,e){var z,y,x
z=a.length
this.b9(a,b,z,"start")
this.b9(a,c,z,"end")
if(b>c)throw H.b(P.at(b,0,c,null,null))
y=c-b
x=d.length
if(x-e<y)throw H.b(P.bK("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$isu:1,
$asu:I.ba,
$isx:1,
$asx:I.ba},
dh:{"^":"dM;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
i:function(a,b,c){H.e5(c)
H.ab(b,a,a.length)
a[b]=c},
J:function(a,b,c,d,e){this.d9(a,b,c,H.v(d,"$isi",[P.U],"$asi"),e)
return},
a_:function(a,b,c,d){return this.J(a,b,c,d,0)},
$asbF:function(){return[P.U]},
$aso:function(){return[P.U]},
$isi:1,
$asi:function(){return[P.U]},
$isa:1,
$asa:function(){return[P.U]},
"%":"Float64Array"},
ar:{"^":"dO;",
i:function(a,b,c){H.L(c)
H.ab(b,a,a.length)
a[b]=c},
J:function(a,b,c,d,e){H.v(d,"$isi",[P.B],"$asi")
this.cr(a,b,c,d,e)},
a_:function(a,b,c,d){return this.J(a,b,c,d,0)},
$asbF:function(){return[P.B]},
$aso:function(){return[P.B]},
$isi:1,
$asi:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
hp:{"^":"dh;",$isaf:1,"%":"Float32Array"},
lA:{"^":"ar;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lB:{"^":"ar;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$isfX:1,
"%":"Int32Array"},
lC:{"^":"ar;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lD:{"^":"ar;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hr:{"^":"ar;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ismn:1,
"%":"Uint32Array"},
lE:{"^":"ar;",
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lF:{"^":"ar;",
gj:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dL:{"^":"cj+o;"},
dM:{"^":"dL+bF;"},
dN:{"^":"cj+o;"},
dO:{"^":"dN+bF;"}}],["","",,P,{"^":"",
iu:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k7()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b8(new P.iw(z),1)).observe(y,{childList:true})
return new P.iv(z,y,x)}else if(self.setImmediate!=null)return P.k8()
return P.k9()},
my:[function(a){self.scheduleImmediate(H.b8(new P.ix(H.l(a,{func:1,ret:-1})),0))},"$1","k7",4,0,4],
mz:[function(a){self.setImmediate(H.b8(new P.iy(H.l(a,{func:1,ret:-1})),0))},"$1","k8",4,0,4],
mA:[function(a){H.l(a,{func:1,ret:-1})
P.jI(0,a)},"$1","k9",4,0,4],
k3:function(a,b){if(H.bt(a,{func:1,args:[P.c,P.a1]}))return H.l(a,{func:1,ret:null,args:[P.c,P.a1]})
if(H.bt(a,{func:1,args:[P.c]}))return H.l(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.cP(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k2:function(){var z,y
for(;z=$.aN,z!=null;){$.b6=null
y=z.b
$.aN=y
if(y==null)$.b5=null
z.a.$0()}},
mM:[function(){$.co=!0
try{P.k2()}finally{$.b6=null
$.co=!1
if($.aN!=null)$.cz().$1(P.e4())}},"$0","e4",0,0,1],
e_:function(a){var z=new P.dD(H.l(a,{func:1,ret:-1}))
if($.aN==null){$.b5=z
$.aN=z
if(!$.co)$.cz().$1(P.e4())}else{$.b5.b=z
$.b5=z}},
k6:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.e_(a)
$.b6=$.b5
return}y=new P.dD(a)
x=$.b6
if(x==null){y.b=z
$.b6=y
$.aN=y}else{y.b=x.b
x.b=y
$.b6=y
if(y.b==null)$.b5=y}},
kz:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.H
if(C.e===y){P.bS(null,null,C.e,a)
return}y.toString
P.bS(null,null,y,H.l(y.bq(a),z))},
bR:function(a,b,c,d,e){var z={}
z.a=d
P.k6(new P.k4(z,e))},
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
k5:function(a,b,c,d,e,f,g,h,i){var z,y
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
if(z)d=!(!z||!1)?c.bq(d):c.dl(d,-1)
P.e_(d)},
iw:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iv:{"^":"n:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ix:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iy:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jH:{"^":"c;a,0b,c",
cN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b8(new P.jJ(this,b),0),a)
else throw H.b(P.y("`setTimeout()` not found."))},
p:{
jI:function(a,b){var z=new P.jH(!0,0)
z.cN(a,b)
return z}}},
jJ:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iB:{"^":"c;$ti"},
jC:{"^":"iB;a,$ti"},
aM:{"^":"c;0a,b,c,d,e,$ti",
dI:function(a){if(this.c!==6)return!0
return this.b.b.aC(H.l(this.d,{func:1,ret:P.O,args:[P.c]}),a.a,P.O,P.c)},
dF:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bt(z,{func:1,args:[P.c,P.a1]}))return H.bV(w.dP(z,a.a,a.b,null,y,P.a1),x)
else return H.bV(w.aC(H.l(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
aa:{"^":"c;bj:a<,b,0d6:c<,$ti",
bW:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.e){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k3(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aa(0,$.H,[c])
w=b==null?1:3
this.b8(new P.aM(x,w,a,b,[z,c]))
return x},
bV:function(a,b){return this.bW(a,null,b)},
b8:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaM")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaa")
z=y.a
if(z<4){y.b8(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bS(null,null,z,H.l(new P.iQ(this,a),{func:1,ret:-1}))}},
bg:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaM")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaa")
y=u.a
if(y<4){u.bg(a)
return}this.a=y
this.c=u.c}z.a=this.a7(a)
y=this.b
y.toString
P.bS(null,null,y,H.l(new P.iV(z,this),{func:1,ret:-1}))}},
aw:function(){var z=H.f(this.c,"$isaM")
this.c=null
return this.a7(z)},
a7:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
an:function(a){var z,y,x
z=H.p(this,0)
H.bV(a,{futureOr:1,type:z})
y=this.$ti
if(H.aD(a,"$isaV",y,"$asaV"))if(H.aD(a,"$isaa",y,null))P.dG(a,this)
else P.iR(a,this)
else{x=this.aw()
H.z(a,z)
this.a=4
this.c=a
P.b4(this,x)}},
bb:function(a,b){var z
H.f(b,"$isa1")
z=this.aw()
this.a=8
this.c=new P.V(a,b)
P.b4(this,z)},
$isaV:1,
p:{
iR:function(a,b){var z,y,x
b.a=1
try{a.bW(new P.iS(b),new P.iT(b),null)}catch(x){z=H.a4(x)
y=H.bb(x)
P.kz(new P.iU(b,z,y))}},
dG:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaa")
if(z>=4){y=b.aw()
b.a=a.a
b.c=a.c
P.b4(b,y)}else{y=H.f(b.c,"$isaM")
b.a=2
b.c=a
a.bg(y)}},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.b4(z.a,b)}y=z.a
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
if(y===8)new P.iY(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iX(x,b,r).$0()}else if((y&2)!==0)new P.iW(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.A(y).$isaV){if(y.a>=4){n=H.f(t.c,"$isaM")
t.c=null
b=t.a7(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dG(y,t)
return}}m=b.b
n=H.f(m.c,"$isaM")
m.c=null
b=m.a7(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.f(u,"$isV")
m.a=8
m.c=u}z.a=m
y=m}}}},
iQ:{"^":"n:0;a,b",
$0:function(){P.b4(this.a,this.b)}},
iV:{"^":"n:0;a,b",
$0:function(){P.b4(this.b,this.a.a)}},
iS:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.an(a)}},
iT:{"^":"n:16;a",
$2:function(a,b){H.f(b,"$isa1")
this.a.bb(a,b)},
$1:function(a){return this.$2(a,null)}},
iU:{"^":"n:0;a,b,c",
$0:function(){this.a.bb(this.b,this.c)}},
iY:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bS(H.l(w.d,{func:1}),null)}catch(v){y=H.a4(v)
x=H.bb(v)
if(this.d){w=H.f(this.a.a.c,"$isV").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isV")
else u.b=new P.V(y,x)
u.a=!0
return}if(!!J.A(z).$isaV){if(z instanceof P.aa&&z.gbj()>=4){if(z.gbj()===8){w=this.b
w.b=H.f(z.gd6(),"$isV")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bV(new P.iZ(t),null)
w.a=!1}}},
iZ:{"^":"n:17;a",
$1:function(a){return this.a}},
iX:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.aC(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a4(t)
y=H.bb(t)
x=this.a
x.b=new P.V(z,y)
x.a=!0}}},
iW:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isV")
w=this.c
if(w.dI(z)&&w.e!=null){v=this.b
v.b=w.dF(z)
v.a=!1}}catch(u){y=H.a4(u)
x=H.bb(u)
w=H.f(this.a.a.c,"$isV")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.V(y,x)
s.a=!0}}},
dD:{"^":"c;a,0b"},
i5:{"^":"c;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.aa(0,$.H,[P.B])
z.a=0
x=H.p(this,0)
w=H.l(new P.i7(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.i8(z,y),{func:1,ret:-1})
W.aB(this.a,this.b,w,!1,x)
return y}},
i7:{"^":"n;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.p(this.b,0)]}}},
i8:{"^":"n:0;a,b",
$0:function(){this.b.an(this.a.a)}},
i6:{"^":"c;"},
V:{"^":"c;a,b",
k:function(a){return H.e(this.a)},
$isM:1},
jP:{"^":"c;",$ismw:1},
k4:{"^":"n:0;a,b",
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
jl:{"^":"jP;",
dQ:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.dY(null,null,this,a,-1)}catch(x){z=H.a4(x)
y=H.bb(x)
P.bR(null,null,this,z,H.f(y,"$isa1"))}},
dR:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.dZ(null,null,this,a,b,-1,c)}catch(x){z=H.a4(x)
y=H.bb(x)
P.bR(null,null,this,z,H.f(y,"$isa1"))}},
dl:function(a,b){return new P.jn(this,H.l(a,{func:1,ret:b}),b)},
bq:function(a){return new P.jm(this,H.l(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.jo(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bS:function(a,b){H.l(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.dY(null,null,this,a,b)},
aC:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.H===C.e)return a.$1(b)
return P.dZ(null,null,this,a,b,c,d)},
dP:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.H===C.e)return a.$2(b,c)
return P.k5(null,null,this,a,b,c,d,e,f)}},
jn:{"^":"n;a,b,c",
$0:function(){return this.a.bS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jm:{"^":"n:1;a,b",
$0:function(){return this.a.dQ(this.b)}},
jo:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dR(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
db:function(a,b,c){H.bu(a)
return H.v(H.kd(a,new H.d9(0,0,[b,c])),"$isda",[b,c],"$asda")},
a_:function(a,b){return new H.d9(0,0,[a,b])},
a0:function(a,b,c,d){return new P.j6(0,0,[d])},
fY:function(a,b,c){var z,y
if(P.cp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.d])
y=$.bc()
C.a.l(y,a)
try{P.k1(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.dr(b,H.kt(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
ce:function(a,b,c){var z,y,x
if(P.cp(a))return b+"..."+c
z=new P.ck(b)
y=$.bc()
C.a.l(y,a)
try{x=z
x.a=P.dr(x.gU(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gU()+c
y=z.gU()
return y.charCodeAt(0)==0?y:y},
cp:function(a){var z,y
for(z=0;y=$.bc(),z<y.length;++z)if(a===y[z])return!0
return!1},
k1:function(a,b){var z,y,x,w,v,u,t,s,r,q
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
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.N)(a),++x)z.l(0,H.z(a[x],b))
return z},
de:function(a){var z,y,x
z={}
if(P.cp(a))return"{...}"
y=new P.ck("")
try{C.a.l($.bc(),a)
x=y
x.a=x.gU()+"{"
z.a=!0
J.eT(a,new P.hd(z,y))
z=y
z.a=z.gU()+"}"}finally{z=$.bc()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gU()
return z.charCodeAt(0)==0?z:z},
j6:{"^":"j0;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dK(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbs")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbs")!=null}else return this.cQ(b)},
cQ:function(a){var z=this.d
if(z==null)return!1
return this.ar(this.be(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cm()
this.b=z}return this.b7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cm()
this.c=y}return this.b7(y,b)}else return this.cO(0,b)},
cO:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cm()
this.d=z}y=this.bc(b)
x=z[y]
if(x==null)z[y]=[this.av(b)]
else{if(this.ar(x,b)>=0)return!1
x.push(this.av(b))}return!0},
bR:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bh(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bh(this.c,b)
else return this.d1(0,b)},
d1:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.be(z,b)
x=this.ar(y,b)
if(x<0)return!1
this.bl(y.splice(x,1)[0])
return!0},
a1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.at()}},
b7:function(a,b){H.z(b,H.p(this,0))
if(H.f(a[b],"$isbs")!=null)return!1
a[b]=this.av(b)
return!0},
bh:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbs")
if(z==null)return!1
this.bl(z)
delete a[b]
return!0},
at:function(){this.r=this.r+1&67108863},
av:function(a){var z,y
z=new P.bs(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.at()
return z},
bl:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.at()},
bc:function(a){return J.ak(a)&0x3ffffff},
be:function(a,b){return a[this.bc(b)]},
ar:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
p:{
cm:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bs:{"^":"c;a,0b,0c"},
dK:{"^":"c;a,b,0c,0d,$ti",
sba:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.al(z))
else{z=this.c
if(z==null){this.sba(null)
return!1}else{this.sba(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaW:1,
p:{
j7:function(a,b,c){var z=new P.dK(a,b,[c])
z.c=a.e
return z}}},
j0:{"^":"hT;"},
hb:{"^":"j8;",$isi:1,$isa:1},
o:{"^":"c;$ti",
gw:function(a){return new H.dc(a,this.gj(a),0,[H.ac(this,a,"o",0)])},
q:function(a,b){return this.h(a,b)},
dE:function(a,b,c,d){var z,y,x
H.z(b,d)
H.l(c,{func:1,ret:d,args:[d,H.ac(this,a,"o",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.al(a))}return y},
J:["cr",function(a,b,c,d,e){var z,y,x,w,v
z=H.ac(this,a,"o",0)
H.v(d,"$isi",[z],"$asi")
P.hM(b,c,this.gj(a),null,null,null)
y=c-b
if(y===0)return
if(H.aD(d,"$isa",[z],"$asa")){x=e
w=d}else{w=H.ia(d,e,null,H.ac(C.f,d,"o",0)).dT(0,!1)
x=0}if(x+y>w.length)throw H.b(H.h_())
if(x<b)for(v=y-1;v>=0;--v){z=x+v
if(z>=w.length)return H.j(w,z)
this.i(a,b+v,w[z])}else for(v=0;v<y;++v){z=x+v
if(z>=w.length)return H.j(w,z)
this.i(a,b+v,w[z])}},function(a,b,c,d){return this.J(a,b,c,d,0)},"a_",null,null,"gdZ",13,2,null],
aQ:function(a,b,c){H.v(c,"$isi",[H.ac(this,a,"o",0)],"$asi")
this.a_(a,b,b+c.length,c)},
k:function(a){return P.ce(a,"[","]")}},
dd:{"^":"Q;"},
hd:{"^":"n:7;a,b",
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
hU:{"^":"c;$ti",
H:function(a,b){var z
for(z=J.bz(H.v(b,"$isi",this.$ti,"$asi"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.ce(this,"{","}")},
$isi:1,
$islX:1},
hT:{"^":"hU;"},
j8:{"^":"c+o;"}}],["","",,P,{"^":"",
fM:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.b1(a)+"'"},
bE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bg(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fM(a)},
d3:function(a){return new P.iN(a)},
aE:function(a){H.c0(H.e(a))},
O:{"^":"c;"},
"+bool":0,
bD:{"^":"c;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bD&&this.a===b.a&&!0},
K:function(a,b){return C.d.K(this.a,H.f(b,"$isbD").a)},
gv:function(a){var z=this.a
return(z^C.d.bi(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fA(H.hJ(this))
y=P.bh(H.hH(this))
x=P.bh(H.hD(this))
w=P.bh(H.hE(this))
v=P.bh(H.hG(this))
u=P.bh(H.hI(this))
t=P.fB(H.hF(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isT:1,
$asT:function(){return[P.bD]},
p:{
fA:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bh:function(a){if(a>=10)return""+a
return"0"+a}}},
U:{"^":"E;"},
"+double":0,
aT:{"^":"c;a",
S:function(a,b){return C.d.S(this.a,H.f(b,"$isaT").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aT&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.d.K(this.a,H.f(b,"$isaT").a)},
k:function(a){var z,y,x,w,v
z=new P.fJ()
y=this.a
if(y<0)return"-"+new P.aT(0-y).k(0)
x=z.$1(C.d.V(y,6e7)%60)
w=z.$1(C.d.V(y,1e6)%60)
v=new P.fI().$1(y%1e6)
return""+C.d.V(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isT:1,
$asT:function(){return[P.aT]},
p:{
fH:function(a,b,c,d,e,f){return new P.aT(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fI:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fJ:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"c;"},
dk:{"^":"M;",
k:function(a){return"Throw of null."}},
aH:{"^":"M;a,b,c,d",
gap:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gao:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gap()+y+x
if(!this.a)return w
v=this.gao()
u=P.bE(this.b)
return w+v+": "+H.e(u)},
p:{
cP:function(a,b,c){return new P.aH(!0,a,b,c)}}},
dl:{"^":"aH;e,f,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bH:function(a,b,c){return new P.dl(null,null,!0,a,b,"Value not in range")},
at:function(a,b,c,d,e){return new P.dl(b,c,!0,a,d,"Invalid value")},
hM:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.at(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.at(b,a,c,"end",f))
return b}}},
fW:{"^":"aH;e,j:f>,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y
z=H.L(this.b)
if(typeof z!=="number")return z.a4()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
D:function(a,b,c,d,e){var z=H.L(e==null?J.ad(b):e)
return new P.fW(b,z,!0,a,c,"Index out of range")}}},
im:{"^":"M;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.im(a)}}},
ik:{"^":"M;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dA:function(a){return new P.ik(a)}}},
bJ:{"^":"M;a",
k:function(a){return"Bad state: "+this.a},
p:{
bK:function(a){return new P.bJ(a)}}},
fu:{"^":"M;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bE(z))+"."},
p:{
al:function(a){return new P.fu(a)}}},
dq:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isM:1},
fz:{"^":"M;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iN:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
bi:{"^":"c;"},
B:{"^":"E;"},
"+int":0,
i:{"^":"c;$ti",
aE:["cp",function(a,b){var z=H.ct(this,"i",0)
return new H.dB(this,H.l(b,{func:1,ret:P.O,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.Y(P.at(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.b(P.D(b,this,"index",null,y))},
k:function(a){return P.fY(this,"(",")")}},
aW:{"^":"c;$ti"},
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
gv:function(a){return H.b0(this)},
k:function(a){return"Instance of '"+H.b1(this)+"'"},
toString:function(){return this.k(this)}},
a1:{"^":"c;"},
d:{"^":"c;",$isT:1,
$asT:function(){return[P.d]},
$ishy:1},
"+String":0,
ck:{"^":"c;U:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dr:function(a,b,c){var z=J.bz(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fK:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.r
z=new H.dB(new W.a3(y),H.l(new W.fL(),{func:1,ret:P.O,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.Y(H.fZ())
w=x.gA(x)
if(x.t())H.Y(H.h0())
return H.f(w,"$isP")},
d2:function(a){H.f(a,"$isK")
return"wheel"},
aU:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eW(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a4(x)}return z},
iK:function(a,b){return document.createElement(a)},
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
if("postMessage" in a){z=W.iE(a)
if(!!J.A(z).$isK)return z
return}else return H.f(a,"$isK")},
e1:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.e)return a
return z.dm(a,b)},
J:{"^":"P;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kD:{"^":"h;0j:length=","%":"AccessibleNodeList"},
ff:{"^":"J;",
k:function(a){return String(a)},
$isff:1,
"%":"HTMLAnchorElement"},
kE:{"^":"J;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cQ:{"^":"J;",$iscQ:1,"%":"HTMLBaseElement"},
fk:{"^":"h;","%":";Blob"},
bB:{"^":"J;",$isbB:1,"%":"HTMLBodyElement"},
ca:{"^":"J;0n:height=,0m:width=",
aF:function(a,b,c){if(c!=null)return this.cW(a,b,P.ka(c,null))
return this.cX(a,b)},
cc:function(a,b){return this.aF(a,b,null)},
cW:function(a,b,c){return a.getContext(b,c)},
cX:function(a,b){return a.getContext(b)},
$isca:1,
"%":"HTMLCanvasElement"},
fn:{"^":"h;",
a9:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
cb:{"^":"h;",
bz:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dD:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ad:function(a){return P.X(a.getContextAttributes())},
$iscb:1,
"%":"CanvasRenderingContext2D"},
kK:{"^":"r;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fv:{"^":"cc;",$isfv:1,"%":"CSSNumericValue|CSSUnitValue"},
kL:{"^":"fy;0j:length=","%":"CSSPerspective"},
am:{"^":"h;",$isam:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fw:{"^":"iC;0j:length=",
aK:function(a,b){var z=this.cY(a,this.al(a,b))
return z==null?"":z},
al:function(a,b){var z,y
z=$.ej()
y=z[b]
if(typeof y==="string")return y
y=this.dd(a,b)
z[b]=y
return y},
dd:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fC()+b
if(z in a)return z
return b},
cY:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fx:{"^":"c;",
gn:function(a){return this.aK(a,"height")},
gm:function(a){return this.aK(a,"width")}},
cc:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fy:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kN:{"^":"cc;0j:length=","%":"CSSTransformValue"},
kO:{"^":"cc;0j:length=","%":"CSSUnparsedValue"},
kQ:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fD:{"^":"J;","%":"HTMLDivElement"},
fE:{"^":"r;",
dg:function(a,b){return a.adoptNode(b)},
cd:function(a,b){return a.getElementById(b)},
dL:function(a,b){return a.querySelector(b)},
gbM:function(a){return new W.bq(a,"mousedown",!1,[W.R])},
gbN:function(a){return new W.bq(a,"mousemove",!1,[W.R])},
gbO:function(a){return new W.bq(a,"mouseup",!1,[W.R])},
gbP:function(a){return new W.bq(a,H.t(W.d2(a)),!1,[W.aL])},
"%":"XMLDocument;Document"},
kR:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fF:{"^":"h;",
dv:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kS:{"^":"iG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c,"$isS",[P.E],"$asS")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.S,P.E]]},
$isx:1,
$asx:function(){return[[P.S,P.E]]},
$aso:function(){return[[P.S,P.E]]},
$isi:1,
$asi:function(){return[[P.S,P.E]]},
$isa:1,
$asa:function(){return[[P.S,P.E]]},
$asq:function(){return[[P.S,P.E]]},
"%":"ClientRectList|DOMRectList"},
fG:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aD(b,"$isS",[P.E],"$asS"))return!1
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
kT:{"^":"iI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$aso:function(){return[P.d]},
$isi:1,
$asi:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
kU:{"^":"h;0j:length=","%":"DOMTokenList"},
P:{"^":"r;0dS:tagName=",
gdj:function(a){return new W.iJ(a)},
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
y=(y&&C.L).dv(y,"")
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
w=(z&&C.E).dt(z,b)}else{x.innerHTML=b
w=$.ae.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.ae.body
if(x==null?z!=null:x!==z)J.cI(x)
c.aP(w)
C.t.dg(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"du",null,null,"ge2",5,5,null],
cg:function(a,b,c,d){a.textContent=null
this.F(a,this.L(a,b,c,d))},
cf:function(a,b){return this.cg(a,b,null,null)},
Z:function(a,b){return a.getAttribute(b)},
d2:function(a,b){return a.removeAttribute(b)},
gbM:function(a){return new W.bN(a,"mousedown",!1,[W.R])},
gbN:function(a){return new W.bN(a,"mousemove",!1,[W.R])},
gbO:function(a){return new W.bN(a,"mouseup",!1,[W.R])},
gbP:function(a){return new W.bN(a,H.t(W.d2(a)),!1,[W.aL])},
$isP:1,
"%":";Element"},
fL:{"^":"n:18;",
$1:function(a){return!!J.A(H.f(a,"$isr")).$isP}},
kW:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
Z:{"^":"h;",$isZ:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
df:function(a,b,c,d){H.l(c,{func:1,args:[W.Z]})
if(c!=null)this.cP(a,b,c,!1)},
cP:function(a,b,c,d){return a.addEventListener(b,H.b8(H.l(c,{func:1,args:[W.Z]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dP|dQ|dT|dU"},
an:{"^":"fk;",$isan:1,"%":"File"},
lc:{"^":"iP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isan")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.an]},
$isx:1,
$asx:function(){return[W.an]},
$aso:function(){return[W.an]},
$isi:1,
$asi:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"FileList"},
ld:{"^":"K;0j:length=","%":"FileWriter"},
lg:{"^":"J;0j:length=","%":"HTMLFormElement"},
ao:{"^":"h;",$isao:1,"%":"Gamepad"},
fT:{"^":"J;","%":"HTMLHeadElement"},
lh:{"^":"h;0j:length=","%":"History"},
li:{"^":"j2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isx:1,
$asx:function(){return[W.r]},
$aso:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fU:{"^":"fE;","%":"HTMLDocument"},
lj:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lk:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
ll:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
lm:{"^":"J;0n:height=,0m:width=","%":"HTMLImageElement"},
lo:{"^":"J;0n:height=,0m:width=","%":"HTMLInputElement"},
aX:{"^":"dz;",$isaX:1,"%":"KeyboardEvent"},
hc:{"^":"h;",
k:function(a){return String(a)},
$ishc:1,
"%":"Location"},
hf:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
lw:{"^":"h;0j:length=","%":"MediaList"},
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
"%":"MIDIInputMap"},
hh:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ly:{"^":"jb;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.hi(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hi:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aq:{"^":"h;",$isaq:1,"%":"MimeType"},
lz:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaq")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$aso:function(){return[W.aq]},
$isi:1,
$asi:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"MimeTypeArray"},
R:{"^":"dz;",
gbL:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b_(a.offsetX,a.offsetY,[P.E])
else{z=a.target
if(!J.A(W.dW(z)).$isP)throw H.b(P.y("offsetX is only supported on elements"))
y=H.f(W.dW(z),"$isP")
z=a.clientX
x=a.clientY
w=[P.E]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.v(new P.b_(u,v,w),"$isb_",w,"$asb_")
if(typeof z!=="number")return z.aT()
if(typeof x!=="number")return x.aT()
return new P.b_(C.u.bX(z-u),C.u.bX(x-v),w)}},
$isR:1,
"%":";DragEvent|MouseEvent"},
a3:{"^":"hb;a",
ga5:function(a){var z,y
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
a_:function(a,b,c,d){return this.J(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$aso:function(){return[W.r]},
$asi:function(){return[W.r]},
$asa:function(){return[W.r]}},
r:{"^":"K;0dK:previousSibling=",
dM:function(a){var z=a.parentNode
if(z!=null)J.bx(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.co(a):z},
F:function(a,b){return a.appendChild(b)},
d3:function(a,b){return a.removeChild(b)},
d4:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hs:{"^":"jf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isx:1,
$asx:function(){return[W.r]},
$aso:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
lI:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lK:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lL:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
as:{"^":"h;0j:length=",$isas:1,"%":"Plugin"},
lN:{"^":"jj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isas")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$aso:function(){return[W.as]},
$isi:1,
$asi:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"PluginArray"},
lP:{"^":"R;0n:height=,0m:width=","%":"PointerEvent"},
hL:{"^":"h;",
dt:function(a,b){return a.createContextualFragment(b)},
ce:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lU:{"^":"jp;",
h:function(a,b){return P.X(a.get(H.t(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.X(y.value[1]))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.hQ(z))
return z},
gj:function(a){return a.size},
$asQ:function(){return[P.d,null]},
$isI:1,
$asI:function(){return[P.d,null]},
"%":"RTCStatsReport"},
hQ:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lV:{"^":"h;0n:height=,0m:width=","%":"Screen"},
lW:{"^":"J;0j:length=","%":"HTMLSelectElement"},
au:{"^":"K;",$isau:1,"%":"SourceBuffer"},
lY:{"^":"dQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$aso:function(){return[W.au]},
$isi:1,
$asi:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"SourceBufferList"},
av:{"^":"h;",$isav:1,"%":"SpeechGrammar"},
lZ:{"^":"jv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$aso:function(){return[W.av]},
$isi:1,
$asi:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"SpeechGrammarList"},
aw:{"^":"h;0j:length=",$isaw:1,"%":"SpeechRecognitionResult"},
m1:{"^":"jy;",
h:function(a,b){return this.bf(a,H.t(b))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d0(a,z)
if(y==null)return
b.$2(y,this.bf(a,y))}},
gD:function(a){var z=H.m([],[P.d])
this.C(a,new W.i4(z))
return z},
gj:function(a){return a.length},
bf:function(a,b){return a.getItem(b)},
d0:function(a,b){return a.key(b)},
$asQ:function(){return[P.d,P.d]},
$isI:1,
$asI:function(){return[P.d,P.d]},
"%":"Storage"},
i4:{"^":"n:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ax:{"^":"h;",$isax:1,"%":"CSSStyleSheet|StyleSheet"},
ib:{"^":"J;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=W.fK("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a3(y).H(0,new W.a3(z))
return y},
"%":"HTMLTableElement"},
m4:{"^":"J;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga5(z)
x.toString
z=new W.a3(x)
w=z.ga5(z)
y.toString
w.toString
new W.a3(y).H(0,new W.a3(w))
return y},
"%":"HTMLTableRowElement"},
m5:{"^":"J;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.ga5(z)
y.toString
x.toString
new W.a3(y).H(0,new W.a3(x))
return y},
"%":"HTMLTableSectionElement"},
dt:{"^":"J;",$isdt:1,"%":"HTMLTemplateElement"},
m6:{"^":"h;0m:width=","%":"TextMetrics"},
ay:{"^":"K;",$isay:1,"%":"TextTrack"},
az:{"^":"K;",$isaz:1,"%":"TextTrackCue|VTTCue"},
m7:{"^":"jG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaz")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$aso:function(){return[W.az]},
$isi:1,
$asi:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"TextTrackCueList"},
m8:{"^":"dU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isay")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isi:1,
$asi:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"TextTrackList"},
m9:{"^":"h;0j:length=","%":"TimeRanges"},
aA:{"^":"h;",$isaA:1,"%":"Touch"},
ma:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaA")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aA]},
$isx:1,
$asx:function(){return[W.aA]},
$aso:function(){return[W.aA]},
$isi:1,
$asi:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"TouchList"},
mb:{"^":"h;0j:length=","%":"TrackDefaultList"},
dz:{"^":"Z;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mp:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
ms:{"^":"hf;0n:height=,0m:width=","%":"HTMLVideoElement"},
mt:{"^":"K;0j:length=","%":"VideoTrackList"},
mu:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mv:{"^":"h;0m:width=","%":"VTTRegion"},
aL:{"^":"R;",
gdz:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.y("deltaY is not supported"))},
$isaL:1,
"%":"WheelEvent"},
ir:{"^":"K;",
gdi:function(a){var z,y,x
z=P.E
y=new P.aa(0,$.H,[z])
x=H.l(new W.is(new P.jC(y,[z])),{func:1,ret:-1,args:[P.E]})
this.cV(a)
this.d5(a,W.e1(x,z))
return y},
d5:function(a,b){return a.requestAnimationFrame(H.b8(H.l(b,{func:1,ret:-1,args:[P.E]}),1))},
cV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdC:1,
"%":"DOMWindow|Window"},
is:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.bV(H.cw(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.Y(P.bK("Future already completed"))
z.an(a)}},
dE:{"^":"r;",$isdE:1,"%":"Attr"},
mB:{"^":"jR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isam")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.am]},
$isx:1,
$asx:function(){return[W.am]},
$aso:function(){return[W.am]},
$isi:1,
$asi:function(){return[W.am]},
$isa:1,
$asa:function(){return[W.am]},
$asq:function(){return[W.am]},
"%":"CSSRuleList"},
mC:{"^":"fG;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aD(b,"$isS",[P.E],"$asS"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dJ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mD:{"^":"jT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isao")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ao]},
$isx:1,
$asx:function(){return[W.ao]},
$aso:function(){return[W.ao]},
$isi:1,
$asi:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"GamepadList"},
mI:{"^":"jV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isr")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.r]},
$isx:1,
$asx:function(){return[W.r]},
$aso:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$isa:1,
$asa:function(){return[W.r]},
$asq:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mJ:{"^":"jX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$aso:function(){return[W.aw]},
$isi:1,
$asi:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"SpeechRecognitionResultList"},
mK:{"^":"jZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isax")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isi:1,
$asi:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"StyleSheetList"},
iz:{"^":"dd;cT:a<",
C:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.N)(z),++v){u=z[v]
b.$2(u,w.Z(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.m([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.f(z[w],"$isdE")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asQ:function(){return[P.d,P.d]},
$asI:function(){return[P.d,P.d]}},
iJ:{"^":"iz;a",
h:function(a,b){return J.c6(this.a,H.t(b))},
gj:function(a){return this.gD(this).length}},
bq:{"^":"i5;a,b,c,$ti"},
bN:{"^":"bq;a,b,c,$ti"},
iL:{"^":"i6;a,b,c,d,e,$ti",p:{
aB:function(a,b,c,d,e){var z=W.e1(new W.iM(c),W.Z)
if(z!=null&&!0)J.eD(a,b,z,!1)
return new W.iL(0,a,b,z,!1,[e])}}},
iM:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isZ"))}},
br:{"^":"c;a",
cL:function(a){var z,y
z=$.cA()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.V[y],W.kj())
for(y=0;y<12;++y)z.i(0,C.w[y],W.kk())}},
W:function(a){return $.ex().u(0,W.aU(a))},
R:function(a,b,c){var z,y,x
z=W.aU(a)
y=$.cA()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bT(x.$4(a,b,c,this))},
$isa8:1,
p:{
dH:function(a){var z,y
z=document.createElement("a")
y=new W.jq(z,window.location)
y=new W.br(y)
y.cL(a)
return y},
mG:[function(a,b,c,d){H.f(a,"$isP")
H.t(b)
H.t(c)
H.f(d,"$isbr")
return!0},"$4","kj",16,0,12],
mH:[function(a,b,c,d){var z,y,x
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
return z},"$4","kk",16,0,12]}},
q:{"^":"c;$ti",
gw:function(a){return new W.d5(a,this.gj(a),-1,[H.ac(this,a,"q",0)])},
J:function(a,b,c,d,e){H.v(d,"$isi",[H.ac(this,a,"q",0)],"$asi")
throw H.b(P.y("Cannot setRange on immutable List."))},
a_:function(a,b,c,d){return this.J(a,b,c,d,0)}},
di:{"^":"c;a",
W:function(a){return C.a.bn(this.a,new W.hu(a))},
R:function(a,b,c){return C.a.bn(this.a,new W.ht(a,b,c))},
$isa8:1},
hu:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isa8").W(this.a)}},
ht:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isa8").R(this.a,this.b,this.c)}},
jr:{"^":"c;",
cM:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aE(0,new W.js())
y=b.aE(0,new W.jt())
this.b.H(0,z)
x=this.c
x.H(0,C.X)
x.H(0,y)},
W:function(a){return this.a.u(0,W.aU(a))},
R:["cs",function(a,b,c){var z,y
z=W.aU(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dh(c)
else if(y.u(0,"*::"+b))return this.d.dh(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa8:1},
js:{"^":"n:10;",
$1:function(a){return!C.a.u(C.w,H.t(a))}},
jt:{"^":"n:10;",
$1:function(a){return C.a.u(C.w,H.t(a))}},
jD:{"^":"jr;e,a,b,c,d",
R:function(a,b,c){if(this.cs(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c6(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dS:function(){var z,y,x,w,v
z=P.d
y=P.ci(C.v,z)
x=H.p(C.v,0)
w=H.l(new W.jE(),{func:1,ret:z,args:[x]})
v=H.m(["TEMPLATE"],[z])
y=new W.jD(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cM(null,new H.he(C.v,w,[x,z]),v,null)
return y}}},
jE:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
jB:{"^":"c;",
W:function(a){var z=J.A(a)
if(!!z.$isdn)return!1
z=!!z.$isG
if(z&&W.aU(a)==="foreignObject")return!1
if(z)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.i.ck(b,"on"))return!1
return this.W(a)},
$isa8:1},
d5:{"^":"c;a,b,c,0d,$ti",
sbd:function(a){this.d=H.z(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbd(J.bd(this.a,z))
this.c=z
return!0}this.sbd(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaW:1},
iD:{"^":"c;a",$isK:1,$isdC:1,p:{
iE:function(a){if(a===window)return H.f(a,"$isdC")
else return new W.iD(a)}}},
a8:{"^":"c;"},
jq:{"^":"c;a,b",$ismo:1},
dV:{"^":"c;a",
aP:function(a){new W.jO(this).$2(a,null)},
a0:function(a,b){if(b==null)J.cI(a)
else J.bx(b,a)},
d8:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eU(a)
x=J.c6(y.gcT(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a4(t)}v="element unprintable"
try{v=J.bg(a)}catch(t){H.a4(t)}try{u=W.aU(a)
this.d7(H.f(a,"$isP"),b,z,v,u,H.f(y,"$isI"),H.t(x))}catch(t){if(H.a4(t) instanceof P.aH)throw t
else{this.a0(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d7:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a0(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.W(a)){this.a0(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.a0(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.m(z.slice(0),[H.p(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.R(a,J.f5(v),w.Z(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Z(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Z(z,v)
w.d2(z,v)}}if(!!J.A(a).$isdt)this.aP(a.content)},
$islG:1},
jO:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d8(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a0(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eV(z)}catch(w){H.a4(w)
v=H.f(z,"$isr")
if(x){u=v.parentNode
if(u!=null)J.bx(u,v)}else J.bx(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isr")}}},
iC:{"^":"h+fx;"},
iF:{"^":"h+o;"},
iG:{"^":"iF+q;"},
iH:{"^":"h+o;"},
iI:{"^":"iH+q;"},
iO:{"^":"h+o;"},
iP:{"^":"iO+q;"},
j1:{"^":"h+o;"},
j2:{"^":"j1+q;"},
ja:{"^":"h+Q;"},
jb:{"^":"h+Q;"},
jc:{"^":"h+o;"},
jd:{"^":"jc+q;"},
je:{"^":"h+o;"},
jf:{"^":"je+q;"},
ji:{"^":"h+o;"},
jj:{"^":"ji+q;"},
jp:{"^":"h+Q;"},
dP:{"^":"K+o;"},
dQ:{"^":"dP+q;"},
ju:{"^":"h+o;"},
jv:{"^":"ju+q;"},
jy:{"^":"h+Q;"},
jF:{"^":"h+o;"},
jG:{"^":"jF+q;"},
dT:{"^":"K+o;"},
dU:{"^":"dT+q;"},
jK:{"^":"h+o;"},
jL:{"^":"jK+q;"},
jQ:{"^":"h+o;"},
jR:{"^":"jQ+q;"},
jS:{"^":"h+o;"},
jT:{"^":"jS+q;"},
jU:{"^":"h+o;"},
jV:{"^":"jU+q;"},
jW:{"^":"h+o;"},
jX:{"^":"jW+q;"},
jY:{"^":"h+o;"},
jZ:{"^":"jY+q;"}}],["","",,P,{"^":"",
X:function(a){var z,y,x,w,v
if(a==null)return
z=P.a_(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=H.t(y[w])
z.i(0,v,a[v])}return z},
ka:function(a,b){var z={}
a.C(0,new P.kb(z))
return z},
cZ:function(){var z=$.cY
if(z==null){z=J.c2(window.navigator.userAgent,"Opera",0)
$.cY=z}return z},
fC:function(){var z,y
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
kb:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dI:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j3:{"^":"c;",
dJ:function(){return Math.random()}},
b_:{"^":"c;N:a>,M:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.aD(b,"$isb_",[P.E],null)&&this.a==J.bA(b)&&this.b==b.gM(b)},
gv:function(a){var z,y,x
z=J.ak(this.a)
y=J.ak(this.b)
y=P.dI(P.dI(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jk:{"^":"c;"},
S:{"^":"jk;$ti"}}],["","",,P,{"^":"",fg:{"^":"h;",$isfg:1,"%":"SVGAnimatedLength"},kX:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},kY:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},kZ:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},l_:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},l0:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},l1:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},l2:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},l3:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},l4:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},l5:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},l6:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},l7:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},l8:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},l9:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},la:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},lb:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},le:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},lf:{"^":"bj;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fS:{"^":"bj;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bj:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},ln:{"^":"bj;0n:height=,0m:width=","%":"SVGImageElement"},aY:{"^":"h;",$isaY:1,"%":"SVGLength"},lt:{"^":"j5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return this.O(a,b)},
i:function(a,b,c){H.f(c,"$isaY")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aY]},
$isi:1,
$asi:function(){return[P.aY]},
$isa:1,
$asa:function(){return[P.aY]},
$asq:function(){return[P.aY]},
"%":"SVGLengthList"},lu:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aZ:{"^":"h;",$isaZ:1,"%":"SVGNumber"},lH:{"^":"jh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return this.O(a,b)},
i:function(a,b,c){H.f(c,"$isaZ")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aZ]},
$isi:1,
$asi:function(){return[P.aZ]},
$isa:1,
$asa:function(){return[P.aZ]},
$asq:function(){return[P.aZ]},
"%":"SVGNumberList"},lM:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},lO:{"^":"h;0j:length=","%":"SVGPointList"},lQ:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lR:{"^":"fS;0n:height=,0m:width=","%":"SVGRectElement"},dn:{"^":"G;",$isdn:1,"%":"SVGScriptElement"},m2:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return this.O(a,b)},
i:function(a,b,c){H.t(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
O:function(a,b){return a.getItem(b)},
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
C.a.l(z,new W.jB())
c=new W.dV(new W.di(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).du(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a3(w)
u=z.ga5(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m3:{"^":"bj;0n:height=,0m:width=","%":"SVGSVGElement"},b2:{"^":"h;",$isb2:1,"%":"SVGTransform"},mc:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return this.O(a,b)},
i:function(a,b,c){H.f(c,"$isb2")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
O:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b2]},
$isi:1,
$asi:function(){return[P.b2]},
$isa:1,
$asa:function(){return[P.b2]},
$asq:function(){return[P.b2]},
"%":"SVGTransformList"},mq:{"^":"bj;0n:height=,0m:width=","%":"SVGUseElement"},j4:{"^":"h+o;"},j5:{"^":"j4+q;"},jg:{"^":"h+o;"},jh:{"^":"jg+q;"},jz:{"^":"h+o;"},jA:{"^":"jz+q;"},jM:{"^":"h+o;"},jN:{"^":"jM+q;"}}],["","",,P,{"^":"",af:{"^":"c;",$isi:1,
$asi:function(){return[P.U]},
$isa:1,
$asa:function(){return[P.U]},
$isii:1}}],["","",,P,{"^":"",kF:{"^":"h;0j:length=","%":"AudioBuffer"},kG:{"^":"iA;",
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
$2:function(a,b){return C.a.l(this.a,a)}},kH:{"^":"K;0j:length=","%":"AudioTrackList"},fj:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lJ:{"^":"fj;0j:length=","%":"OfflineAudioContext"},iA:{"^":"h+Q;"}}],["","",,P,{"^":"",fl:{"^":"h;",$isfl:1,"%":"WebGLBuffer"},hK:{"^":"h;",$ishK:1,"%":"WebGLProgram"},lS:{"^":"h;",
bm:function(a,b){return a.activeTexture(b)},
bo:function(a,b,c){return a.attachShader(b,c)},
bp:function(a,b,c){return a.bindBuffer(b,c)},
br:function(a,b,c){return a.bindTexture(b,c)},
bs:function(a,b){return a.blendEquation(b)},
bt:function(a,b,c){return a.blendFunc(b,c)},
bu:function(a,b,c,d){return a.bufferData(b,c,d)},
bv:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bw:function(a,b){return a.compileShader(b)},
bx:function(a){return a.createBuffer()},
by:function(a){return a.createProgram()},
bA:function(a,b){return a.createShader(b)},
bB:function(a){return a.createTexture()},
bD:function(a,b){return a.depthMask(b)},
bE:function(a,b){return a.disable(b)},
bF:function(a,b,c,d){return a.drawArrays(b,c,d)},
bG:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bH:function(a,b){return a.enable(b)},
bI:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.X(a.getContextAttributes())},
aG:function(a){return a.getError()},
aI:function(a,b){return a.getProgramInfoLog(b)},
aJ:function(a,b,c){return a.getProgramParameter(b,c)},
aL:function(a,b){return a.getShaderInfoLog(b)},
aM:function(a,b,c){return a.getShaderParameter(b,c)},
aN:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
bQ:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aD:function(a,b,c,d,e,f,g,h,i,j){this.ay(a,b,c,d,e,f,g)
return},
bT:function(a,b,c,d,e,f,g){return this.aD(a,b,c,d,e,f,g,null,null,null)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bU:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGLRenderingContext"},lT:{"^":"h;",
dk:function(a,b){return a.beginTransformFeedback(b)},
dn:function(a,b){return a.bindVertexArray(b)},
dw:function(a){return a.createVertexArray()},
dA:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dB:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dC:function(a){return a.endTransformFeedback()},
dW:function(a,b,c,d){this.de(a,b,H.v(c,"$isa",[P.d],"$asa"),d)
return},
de:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dX:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bm:function(a,b){return a.activeTexture(b)},
bo:function(a,b,c){return a.attachShader(b,c)},
bp:function(a,b,c){return a.bindBuffer(b,c)},
br:function(a,b,c){return a.bindTexture(b,c)},
bs:function(a,b){return a.blendEquation(b)},
bt:function(a,b,c){return a.blendFunc(b,c)},
bu:function(a,b,c,d){return a.bufferData(b,c,d)},
bv:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bw:function(a,b){return a.compileShader(b)},
bx:function(a){return a.createBuffer()},
by:function(a){return a.createProgram()},
bA:function(a,b){return a.createShader(b)},
bB:function(a){return a.createTexture()},
bD:function(a,b){return a.depthMask(b)},
bE:function(a,b){return a.disable(b)},
bF:function(a,b,c,d){return a.drawArrays(b,c,d)},
bG:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bH:function(a,b){return a.enable(b)},
bI:function(a,b){return a.enableVertexAttribArray(b)},
ad:function(a){return P.X(a.getContextAttributes())},
aG:function(a){return a.getError()},
aI:function(a,b){return a.getProgramInfoLog(b)},
aJ:function(a,b,c){return a.getProgramParameter(b,c)},
aL:function(a,b){return a.getShaderInfoLog(b)},
aM:function(a,b,c){return a.getShaderParameter(b,c)},
aN:function(a,b,c){return a.getUniformLocation(b,c)},
bK:function(a,b){return a.linkProgram(b)},
bQ:function(a,b,c){return a.pixelStorei(b,c)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aD:function(a,b,c,d,e,f,g,h,i,j){this.ay(a,b,c,d,e,f,g)
return},
bT:function(a,b,c,d,e,f,g){return this.aD(a,b,c,d,e,f,g,null,null,null)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bU:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGL2RenderingContext"},hV:{"^":"h;",$ishV:1,"%":"WebGLShader"},ic:{"^":"h;",$isic:1,"%":"WebGLTexture"},ij:{"^":"h;",$isij:1,"%":"WebGLUniformLocation"},ip:{"^":"h;",$isip:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",m_:{"^":"jx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return P.X(this.d_(a,b))},
i:function(a,b,c){H.f(c,"$isI")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
d_:function(a,b){return a.item(b)},
$aso:function(){return[[P.I,,,]]},
$isi:1,
$asi:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jw:{"^":"h+o;"},jx:{"^":"jw+q;"}}],["","",,G,{"^":"",
it:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.j(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a2(z,"\n")},
dF:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bA(a,b)
z.aR(a,y,c)
z.bw(a,y)
x=H.bT(z.aM(a,y,35713))
if(x!=null&&!x){w=z.aL(a,y)
P.aE("E:Compilation failed:")
P.aE("E:"+G.it(c))
P.aE("E:Failure:")
P.aE(C.i.G("E:",w))
throw H.b(w)}return y},
d6:function(a,b){var z,y,x
H.v(a,"$isa",[T.w],"$asa")
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
fP:function(a,b){var z,y
H.v(a,"$isa",[T.aJ],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.f.i(b,z,J.bA(a[y]))
if(y>=a.length)return H.j(a,y)
C.f.i(b,z+1,J.c5(a[y]))}return b},
fQ:function(a,b){var z,y,x,w,v
H.v(a,"$isa",[T.aK],"$asa")
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
fO:function(a,b){var z,y
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
j_:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ap(z,[H.p(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.B]],v=[P.U],u=[T.aK],t=[T.w],s=[T.aJ];y.t();){r=y.d
if(!x.ab(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.e6>0)H.c0("I: "+r)
continue}q=z.h(0,r)
switch($.a5().h(0,r).a){case"vec2":b.P(r,G.fP(H.bw(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.P(r,G.d6(H.bw(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.P(r,G.fQ(H.bw(q,"$isa",u,"$asa"),null),4)
break
case"float":b.P(r,new Float32Array(H.bP(H.bw(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.P(r,G.fO(H.bw(q,"$isa",w,"$asa"),null),4)
break}}},
bG:{"^":"c;"},
bM:{"^":"bG;",
b_:function(){return this.d},
k:function(a){var z,y,x,w
z=H.m(["{"+new H.dy(H.kg(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ap(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a2(z,"\n")}},
fm:{"^":"dp;"},
fp:{"^":"c;0a,b",
bJ:function(a,b,c){J.eR(this.a,b)
if(c>0)J.fb(this.a,b,c)},
c8:function(a,b,c,d,e,f,g,h){J.c1(this.a,34962,b)
J.fc(this.a,c,d,e,!1,g,h)}},
fN:{"^":"c;"},
d4:{"^":"c;a,b,c,d"},
fR:{"^":"c;a,b,c,d,e",
cw:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.m(y,[P.B])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.j(y,v)
u=y[v]
C.a.i(x,w,u.ge_(u))
C.a.i(x,w+1,u.ge0(u))
C.a.i(x,w+2,u.ge1(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.N)(z),++v){t=z[v]
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
z=H.m([],[T.aJ])
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.aJ(t))}},
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
for(y=this.e,x=new H.ap(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a5().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a2(z," ")}},
dw:{"^":"c;a,b,c"},
du:{"^":"c;a,b,c",p:{
dv:function(a,b,c){return new G.du(a,b,c)}}},
df:{"^":"bM;d,a,b,c"},
hg:{"^":"bG;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saq:function(a){this.cx=H.v(a,"$isa",[P.B],"$asa")},
aX:function(a,b,c){var z,y
C.i.am(a,0)
H.f(b,"$isaf")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c1(z.a,34962,y)
J.cE(z.a,34962,b,35048)},
cB:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
P:function(a,b,c){var z,y,x,w,v
z=J.cB(a,0)===105
if(z&&this.z===0)this.z=C.d.ct(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c3(x.a))
this.aX(a,b,c)
w=$.a5().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.by(x.a,this.e)
x.bJ(0,v,z?1:0)
x.c8(0,y.h(0,a),v,w.aZ(),5126,!1,0,0)},
aW:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c3(y.a))
this.ch=a
this.aX("aPosition",a,3)
x=$.a5().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.by(y.a,this.e)
y.bJ(0,w,0)
y.c8(0,z.h(0,"aPosition"),w,x.aZ(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ap(z,[H.p(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a2(y,"  ")},
p:{
dg:function(a,b,c,d){var z=P.d
return new G.hg(b,J.eL(b.a),c,P.a_(z,P.c),d,0,-1,P.a_(z,P.af),"meshdata:"+a,!1,!0)}}},
hz:{"^":"bM;",
cu:function(a,b){var z
if(typeof a!=="number")return a.dY()
if(typeof b!=="number")return H.ai(b)
z=a/b
if(this.z===z)return
this.z=z
this.b0()},
b0:function(){var z,y,x,w,v,u
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
b_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.w(new Float32Array(3))
u.ae(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.E(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.A(t)
y=!!z.$isaK
q=y?t.gca(t):1
if(!!z.$isw){p=t.gN(t)
s=t.gM(t)
r=t.gY(t)
t=p}else if(y){p=t.gN(t)
s=t.gM(t)
r=t.gY(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.ai(t)
y=u[4]
if(typeof s!=="number")return H.ai(s)
x=u[8]
if(typeof r!=="number")return H.ai(r)
w=u[12]
o=u[1]
n=u[5]
m=u[9]
l=u[13]
k=u[2]
j=u[6]
i=u[10]
h=u[14]
g=u[3]
f=u[7]
e=u[11]
d=u[15]
u[12]=z*t+y*s+x*r+w*q
u[13]=o*t+n*s+m*r+l*q
u[14]=k*t+j*s+i*r+h*q
u[15]=g*t+f*s+e*r+d*q
d=this.cx
d.E(this.db)
e=d.a
c=e[0]
b=e[4]
a=e[8]
a0=e[12]
a1=e[1]
a2=e[5]
a3=e[9]
a4=e[13]
a5=e[2]
a6=e[6]
a7=e[10]
a8=e[14]
a9=e[3]
b0=e[7]
b1=e[11]
b2=e[15]
b3=u[0]
b4=u[4]
b5=u[8]
b6=u[12]
b7=u[1]
b8=u[5]
b9=u[9]
c0=u[13]
c1=u[2]
c2=u[6]
c3=u[10]
c4=u[14]
c5=u[3]
c6=u[7]
c7=u[11]
c8=u[15]
e[0]=c*b3+b*b7+a*c1+a0*c5
e[4]=c*b4+b*b8+a*c2+a0*c6
e[8]=c*b5+b*b9+a*c3+a0*c7
e[12]=c*b6+b*c0+a*c4+a0*c8
e[1]=a1*b3+a2*b7+a3*c1+a4*c5
e[5]=a1*b4+a2*b8+a3*c2+a4*c6
e[9]=a1*b5+a2*b9+a3*c3+a4*c7
e[13]=a1*b6+a2*c0+a3*c4+a4*c8
e[2]=a5*b3+a6*b7+a7*c1+a8*c5
e[6]=a5*b4+a6*b8+a7*c2+a8*c6
e[10]=a5*b5+a6*b9+a7*c3+a8*c7
e[14]=a5*b6+a6*c0+a7*c4+a8*c8
e[3]=a9*b3+b0*b7+b1*c1+b2*c5
e[7]=a9*b4+b0*b8+b1*c2+b2*c6
e[11]=a9*b5+b0*b9+b1*c3+b2*c7
e[15]=a9*b6+b0*c0+b1*c4+b2*c8
v.i(0,"uPerspectiveViewMatrix",d)
return v}},
kV:{"^":"c;"},
hP:{"^":"bG;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cE:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cH(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.cH(w.a,v,t))}},
cH:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.d])
x=H.m([],[P.d])
for(y=new H.ap(y,[H.p(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ab(0,w))C.a.l(x,w)}for(z=this.x,z=P.j7(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(b,"$isI",[P.d,P.c],"$asI")
z=Date.now()
for(y=new H.ap(b,[H.p(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cB(t,0)){case 117:if(w.ab(0,t)){s=b.h(0,t)
if(v.ab(0,t))H.c0("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.a5().h(0,t)
if(r==null)H.Y("unknown "+t)
q=w.h(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.L(s)
J.c7(x.a,q,s)}else if(!!J.A(s).$isfX)J.f9(x.a,q,s)
break
case"float":if(r.c===0){H.e5(s)
J.f7(x.a,q,s)}else if(!!J.A(s).$isaf)J.f8(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.aj(s,"$isag").a
J.cO(x.a,q,!1,t)}else if(!!J.A(s).$isaf)J.cO(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=H.aj(s,"$islv").a
J.cN(x.a,q,!1,t)}else if(!!J.A(s).$isaf)J.cN(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cM(p,q,H.aj(s,"$isaK").a)
else J.cM(p,q,H.f(s,"$isaf"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cL(p,q,H.aj(s,"$isw").a)
else J.cL(p,q,H.f(s,"$isaf"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cK(p,q,H.aj(s,"$isaJ").a)
else J.cK(p,q,H.f(s,"$isaf"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.ai(t)
J.cC(x.a,33984+t)
t=H.aj(s,"$iscl").b
J.be(x.a,3553,t)
t=this.ch
J.c7(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.G()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.ai(t)
J.cC(x.a,33984+t)
t=H.aj(s,"$iscl").b
J.be(x.a,34067,t)
t=this.ch
J.c7(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.G()
this.ch=t+1
break
default:H.c0("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":t=J.aG(s,!0)
p=x.a
if(t)J.bf(p,2929)
else J.c4(p,2929)
break
case"cStencilFunc":H.aj(s,"$isdw")
t=s.a
p=x.a
if(t===1281)J.c4(p,2960)
else{J.bf(p,2960)
p=s.b
o=s.c
J.f3(x.a,t,p,o)}break
case"cDepthWrite":H.bT(s)
J.eM(x.a,s)
break
case"cBlendEquation":H.aj(s,"$isdu")
t=s.a
p=x.a
if(t===1281)J.c4(p,3042)
else{J.bf(p,3042)
p=s.b
o=s.c
J.eG(x.a,p,o)
J.eF(x.a,t)}break}++u
break}}n=P.fH(0,0,0,Date.now()-new P.bD(z,!1).a,0,0)
""+u
n.k(0)},
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
y.b6()}for(x=0;x<2;++x){w=b[x]
this.cK(w.a,w.b_())}y=this.Q
y.a1(0)
for(v=a.cy,v=new H.ap(v,[H.p(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cH()
if(u.length!==0)P.aE("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
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
aY:function(a,b){return this.cv(a,b,null)},
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
z=new G.hP(b,c,d,u,P.ci(c.c,z),P.a_(z,P.c),P.a_(z,z),y,a,!1,!0)
z.cE(a,b,c,d)
return z}}},
C:{"^":"c;a,b,c",
aZ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hW:{"^":"c;a,0b,c,d,e,f,r,x",
ah:function(a){var z,y,x,w,v
H.v(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.N)(a),++w){v=a[w]
C.a.l(y,v)
x.i(0,v,this.r);++this.r}C.a.af(y)},
ai:function(a){var z,y,x
H.v(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.N)(a),++x)C.a.l(y,a[x])
C.a.af(y)},
aV:function(a){var z,y
H.v(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.af(z)},
cF:function(a,b){this.b=this.b1(!0,H.v(a,"$isa",[P.d],"$asa"),b)},
aj:function(a){return this.cF(a,null)},
b1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.v(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.N)(y),++u){t=y[u]
s=$.a5().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a5().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a5().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.a5().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.l(w,"}")
return C.a.a2(w,"\n")},
p:{
bI:function(a){var z,y
z=P.d
y=[z]
return new G.hW(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.a_(z,P.B))}}},
dp:{"^":"bG;d,e,f,r,x,a,b,c",
aH:function(){var z,y,x
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
id:{"^":"c;a,b,c,d,e,f,r"},
cl:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fV:{"^":"cl;f,a,b,c,d,e"}}],["","",,R,{"^":"",
io:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.ew().dJ()
if(v>=w)return H.j(x,v)
x[v]=(u-0.5)*c}y=G.dg(z,a.d,0,a.e.x)
y.aW(x)
return y},
j9:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iK("span",null),"$isP")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).al(y,"float")
y.setProperty(x,"left","")
x=C.z.al(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.F(z,v)}return z},
hA:{"^":"hz;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dO:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aE("size change "+H.e(y)+" "+H.e(x))
this.cu(y,x)
J.fd(this.go.a,0,0,y,x)},"$1","gdN",4,0,24]},
i2:{"^":"c;",
cG:function(a,b,c){var z,y
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
i3:{"^":"i2;e,f,a,b,c,d",
cJ:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.dV(y,2)+" fps"
C.r.cf(this.c,b)
x=C.d.V(30*C.A.dq(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isP")
v=w.style
u=""+x+"px"
v.height=u
C.r.F(z,w)},
cI:function(a){return this.cJ(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
hX:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=h+1
y=g+1
x=B.ie(B.hx(new B.hY(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.m([],[G.fN])
v=H.m([],[G.d4])
u=[T.w]
t=H.m([],u)
s=new G.fR(!1,w,v,t,P.a_(P.d,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.N)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.f(q[p],"$isw")
v.toString
o=new T.w(new Float32Array(3))
o.E(v)
C.a.l(t,o)}}s.cz(z,y,!1)
s.cA(z,y)
n=$.a5().h(0,"aNormal")
switch(n.a){case"vec2":s.e.i(0,"aNormal",H.m([],[T.aJ]))
break
case"vec3":s.e.i(0,"aNormal",H.m([],u))
break
case"vec4":s.e.i(0,"aNormal",H.m([],[T.aK]))
break
case"float":s.e.i(0,"aNormal",H.m([],[P.U]))
break
case"uvec4":s.e.i(0,"aNormal",H.m([],[[P.a,P.B]]))
break}for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.N)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.j(q,o)
o=H.f(q[o],"$isw")
m=H.v(v.h(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.w(new Float32Array(3))
t.E(o);(m&&C.a).l(m,t)}}return s},
ie:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.w]
H.v(a,"$isa",z,"$asa")
y=H.m([],[[P.a,T.w]])
x=new Float32Array(3)
w=new T.w(x)
v=new Float32Array(3)
u=new T.w(v)
t=new Float32Array(3)
s=new T.w(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.j(a,n)
m=a[n]
l=H.m([],z)
C.a.l(y,l)
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
t[2]=j*i}u.X(0)
s.X(0)
for(h=0;h<r;++h){g=h/b*2*3.141592653589793
f=c*Math.cos(g)
e=c*Math.sin(g)
w.E(o)
w.aa(u,f)
w.aa(s,e)
p=new T.w(new Float32Array(3))
p.E(w)
C.a.l(l,p)
x[2]=0
x[1]=0
x[0]=0
w.aa(u,f)
w.aa(s,e)
w.X(0)
p=new T.w(new Float32Array(3))
p.E(w)
C.a.l(l,p)}}return y},
hx:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.l(a,{func:1,ret:-1,args:[P.U,T.w]})
z=H.m([],[T.w])
y=new T.w(new Float32Array(3))
x=new T.w(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.aU(0,y)
t=new T.w(new Float32Array(3))
t.E(y)
C.a.l(z,t)
t=new T.w(new Float32Array(3))
t.E(x)
C.a.l(z,t)}return z},
hY:{"^":"n:25;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sN(0,y*v)
b.sM(0,y*u)
b.sY(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",h5:{"^":"c;a,b,c",
cC:function(a){var z,y
a=document
z=W.aX
y={func:1,ret:-1,args:[z]}
W.aB(a,"keydown",H.l(new D.h7(this),y),!1,z)
W.aB(a,"keyup",H.l(new D.h8(this),y),!1,z)},
p:{
h6:function(a){var z=P.B
z=new D.h5(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.cC(a)
return z}}},h7:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaX")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},h8:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaX")
z=this.a
z.a.bR(0,a.which)
z.c.l(0,a.which)}},hj:{"^":"c;a,b,c,d,e,f,r,x",
cD:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbN(a)
x=H.p(y,0)
W.aB(y.a,y.b,H.l(new D.hl(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbM(a)
y=H.p(x,0)
W.aB(x.a,x.b,H.l(new D.hm(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbO(a)
x=H.p(y,0)
W.aB(y.a,y.b,H.l(new D.hn(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbP(a)
x=H.p(z,0)
W.aB(z.a,z.b,H.l(new D.ho(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hk:function(a){var z=P.B
z=new D.hj(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cD(a)
return z}}},hl:{"^":"n:3;a",
$1:function(a){var z,y
H.f(a,"$isR")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.L(y.gbL(a).a)
z.x=H.L(y.gbL(a).b)
z.d=a.movementX
z.e=a.movementY}},hm:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isR")
a.preventDefault()
P.aE("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hn:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isR")
a.preventDefault()
z=this.a
z.a.bR(0,a.button)
z.c.l(0,a.button)}},ho:{"^":"n:26;a",
$1:function(a){H.f(a,"$isaL")
a.preventDefault()
this.a.f=H.L(C.ae.gdz(a))}},hw:{"^":"fm;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bY:function(a){var z,y
z=C.f.dE(H.v(a,"$isi",[P.c],"$asi"),0,new A.ki(),P.B)
if(typeof z!=="number")return H.ai(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ki:{"^":"n:27;",
$2:function(a,b){var z,y
H.L(a)
z=J.ak(b)
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
k:function(a){return"[0] "+this.a3(0).k(0)+"\n[1] "+this.a3(1).k(0)+"\n[2] "+this.a3(2).k(0)+"\n[3] "+this.a3(3).k(0)+"\n"},
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
a3:function(a){var z,y,x
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
return new T.aK(z)},
T:function(){var z=this.a
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
z[15]=1}},aJ:{"^":"c;a",
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aJ){z=this.a
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
gN:function(a){return this.a[0]},
gM:function(a){return this.a[1]}},w:{"^":"c;a",
ae:function(a,b,c){var z=this.a
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
if(b instanceof T.w){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bY(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.j(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gaB())},
gaB:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
X:function(a){var z,y,x
z=Math.sqrt(this.gaB())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
az:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bC:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.w(new Float32Array(3))
z.ae(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
aa:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
aU:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
sN:function(a,b){this.a[0]=b
return b},
sM:function(a,b){this.a[1]=b
return b},
sY:function(a,b){this.a[2]=b
return b},
gN:function(a){return this.a[0]},
gM:function(a){return this.a[1]},
gY:function(a){return this.a[2]}},aK:{"^":"c;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aK){z=this.a
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
gN:function(a){return this.a[0]},
gM:function(a){return this.a[1]},
gY:function(a){return this.a[2]},
gca:function(a){return this.a[3]}}}],["","",,U,{"^":"",
fe:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=new Float32Array(3000)
y=new Float32Array(4000)
x=new Float32Array(16)
w=new T.ag(x)
w.T()
v=new Float32Array(3)
u=new Float32Array(3)
t=new Float32Array(3)
s=new G.dp(w,new T.w(v),new T.w(u),new T.w(t),new T.w(new Float32Array(3)),"dummy",!1,!0)
for(r=0,q=-5;q<5;++q)for(w=q*40,p=-5;p<5;++p)for(v=p*40,o=-5;o<5;++o){x[12]=w
x[13]=v
x[14]=o*30
u=r*3
C.f.aQ(z,u,s.aH().a)
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
n[f]=(m+t[d])*i}C.f.aQ(y,u,n);++r}a.P("iaRotation",y,4)
a.P("iaTranslation",z,3)},
ec:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=C.t.cd(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.i3(0,0,x,w,y.createElement("div"),R.j9("blue","gray",90,30))
u.cG(x,"blue","gray")
t=H.f(C.t.dL(y,"#webgl-canvas"),"$isca")
s=new G.fp(t)
x=P.d
v=P.c
r=(t&&C.y).aF(t,"webgl2",P.db(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.Y(P.d3('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.eY(r))
if($.e6>0)P.aE("I: "+q)
J.eH(r,0,0,0,1)
J.bf(r,2929)
J.bf(r,2884)
r=new Float32Array(3)
q=D.h6(null)
p=D.hk(t)
o=new T.ag(new Float32Array(16))
o.T()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hw(265,0,0,0,new T.w(r),-0.02,q,p,o,new T.w(n),new T.w(m),new T.w(l),new T.w(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.ag(new Float32Array(16))
r.T()
q=new T.ag(new Float32Array(16))
q.T()
j=new R.hA(t,s,k,50,1,0.1,1000,r,q,new T.ag(new Float32Array(16)),P.a_(x,v),"perspective",!1,!0)
j.b0()
j.dO(null)
r=W.Z
W.aB(window,"resize",H.l(j.gdN(),{func:1,ret:-1,args:[r]}),!1,r)
i=G.dm("instanced",s,$.ez(),$.ey())
r=P.a_(x,v)
r.i(0,"cDepthTest",!0)
r.i(0,"cDepthWrite",!0)
r.i(0,"cBlendEquation",$.ei())
q=$.el()
r.i(0,"cStencilFunc",q)
p=new T.ag(new Float32Array(16))
p.T()
r.i(0,"uModelMatrix",p)
h=B.hX(!0,!0,1,2,3,12,128,16,4,!1)
g=G.dg("torusknot",i.d,4,i.e.x)
g.aW(G.d6(h.d,null))
p=H.v(h.cw(),"$isa",[P.B],"$asa")
o=g.d
g.y=J.c3(o.a)
n=g.ch.length
if(n<768){g.saq(new Uint8Array(H.bP(p)))
g.Q=5121}else if(n<196608){g.saq(new Uint16Array(H.bP(p)))
g.Q=5123}else{g.saq(new Uint32Array(H.bP(p)))
g.Q=5125}J.by(o.a,g.e)
p=g.y
n=g.cx
J.c1(o.a,34963,p)
J.cE(o.a,34963,n,35048)
G.j_(h,g)
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
c=(d&&C.q).bz(d,32,32,1,32,32,22);(c&&C.m).a9(c,0,"gray")
C.m.a9(c,1,"black")
d.fillStyle=c
C.q.dD(d,0,0,64,64)
c=C.q.bz(d,32,32,1,32,32,6);(c&&C.m).a9(c,0,"white")
C.m.a9(c,1,"gray")
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
v.i(0,"uTexture",new G.fV(e,"Utils::Particles",y,3553,s,new G.id(!1,!1,!1,!0,1,9729,9729)))
v.i(0,"uPointSize",1000)
y=new T.ag(new Float32Array(16))
y.T()
v.i(0,"uModelMatrix",y)
b=R.io(f,2000,100)
z.a=0
new U.kv(z,k,i,g,new G.df(r,"mat",!1,!0),j,f,b,new G.df(v,"stars",!1,!0),u).$1(0)},
kv:{"^":"n:28;a,b,c,d,e,f,r,x,y,z",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cw(b2)
if(typeof b2!=="number")return b2.aT()
z=this.a
z.a=b2+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aO()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aO()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.u(0,37))y.go+=0.03
else if(v.u(0,39))y.go-=0.03
if(v.u(0,38))y.id+=0.03
else if(v.u(0,40))y.id-=0.03
if(v.u(0,33))y.fy*=0.99
else if(v.u(0,34))y.fy*=1.01
if(v.u(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.aO()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.u.dr(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.ci(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.w(new Float32Array(3))
o.ae(0,1,0)
u=y.aH()
n=new Float32Array(3)
m=new T.w(n)
m.E(u)
m.aU(0,t)
m.X(0)
l=o.bC(m)
l.X(0)
k=m.bC(l)
k.X(0)
t=l.az(u)
j=k.az(u)
u=m.az(u)
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
a=Math.sqrt(h.gaB())
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
w.c.a1(0)
w.b.a1(0)
x.e=0
x.d=0
x.f=0
x.c.a1(0)
x.b.a1(0)
x=this.f
w=[G.bM]
this.c.aY(this.d,H.m([this.e,x],w))
this.r.aY(this.x,H.m([this.y,x],w))
C.af.gdi(window).bV(this,-1)
this.z.cI(z.a)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.bm.prototype
if(a==null)return J.h3.prototype
if(typeof a=="boolean")return J.h2.prototype
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.c)return a
return J.bX(a)}
J.aP=function(a){if(typeof a=="string")return J.bm.prototype
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
J.ke=function(a){if(typeof a=="number")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.kf=function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.e8=function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.c)return a
return J.bX(a)}
J.bW=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.b3.prototype
return a}
J.aG=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.a6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ke(a).S(a,b)}
J.bd=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ks(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aP(a).h(a,b)}
J.cB=function(a,b){return J.e8(a).am(a,b)}
J.bx=function(a,b){return J.k(a).d3(a,b)}
J.eC=function(a,b,c){return J.k(a).d4(a,b,c)}
J.cC=function(a,b){return J.k(a).bm(a,b)}
J.eD=function(a,b,c,d){return J.k(a).df(a,b,c,d)}
J.cD=function(a,b,c){return J.k(a).bo(a,b,c)}
J.eE=function(a,b){return J.k(a).dk(a,b)}
J.c1=function(a,b,c){return J.k(a).bp(a,b,c)}
J.be=function(a,b,c){return J.k(a).br(a,b,c)}
J.by=function(a,b){return J.k(a).dn(a,b)}
J.eF=function(a,b){return J.k(a).bs(a,b)}
J.eG=function(a,b,c){return J.k(a).bt(a,b,c)}
J.cE=function(a,b,c,d){return J.k(a).bu(a,b,c,d)}
J.eH=function(a,b,c,d,e){return J.k(a).bv(a,b,c,d,e)}
J.eI=function(a,b){return J.kf(a).K(a,b)}
J.c2=function(a,b,c){return J.aP(a).ds(a,b,c)}
J.c3=function(a){return J.k(a).bx(a)}
J.eJ=function(a){return J.k(a).by(a)}
J.eK=function(a){return J.k(a).bB(a)}
J.eL=function(a){return J.k(a).dw(a)}
J.eM=function(a,b){return J.k(a).bD(a,b)}
J.c4=function(a,b){return J.k(a).bE(a,b)}
J.eN=function(a,b,c,d){return J.k(a).bF(a,b,c,d)}
J.eO=function(a,b,c,d,e){return J.k(a).dA(a,b,c,d,e)}
J.eP=function(a,b,c,d,e){return J.k(a).bG(a,b,c,d,e)}
J.eQ=function(a,b,c,d,e,f){return J.k(a).dB(a,b,c,d,e,f)}
J.cF=function(a,b){return J.e7(a).q(a,b)}
J.bf=function(a,b){return J.k(a).bH(a,b)}
J.eR=function(a,b){return J.k(a).bI(a,b)}
J.eS=function(a){return J.k(a).dC(a)}
J.eT=function(a,b){return J.k(a).C(a,b)}
J.eU=function(a){return J.k(a).gdj(a)}
J.ak=function(a){return J.A(a).gv(a)}
J.bz=function(a){return J.e7(a).gw(a)}
J.ad=function(a){return J.aP(a).gj(a)}
J.eV=function(a){return J.k(a).gdK(a)}
J.eW=function(a){return J.k(a).gdS(a)}
J.eX=function(a){return J.bW(a).gca(a)}
J.bA=function(a){return J.bW(a).gN(a)}
J.c5=function(a){return J.bW(a).gM(a)}
J.cG=function(a){return J.bW(a).gY(a)}
J.c6=function(a,b){return J.k(a).Z(a,b)}
J.eY=function(a){return J.k(a).ad(a)}
J.eZ=function(a){return J.k(a).aG(a)}
J.f_=function(a,b){return J.k(a).aI(a,b)}
J.f0=function(a,b,c){return J.k(a).aJ(a,b,c)}
J.cH=function(a,b,c){return J.k(a).aN(a,b,c)}
J.f1=function(a,b){return J.k(a).bK(a,b)}
J.f2=function(a,b,c){return J.k(a).bQ(a,b,c)}
J.cI=function(a){return J.k(a).dM(a)}
J.f3=function(a,b,c,d){return J.k(a).aS(a,b,c,d)}
J.f4=function(a,b,c,d,e,f,g){return J.k(a).bT(a,b,c,d,e,f,g)}
J.cJ=function(a,b,c,d){return J.k(a).bU(a,b,c,d)}
J.f5=function(a){return J.e8(a).dU(a)}
J.bg=function(a){return J.A(a).k(a)}
J.f6=function(a,b,c,d){return J.k(a).dW(a,b,c,d)}
J.f7=function(a,b,c){return J.k(a).bY(a,b,c)}
J.f8=function(a,b,c){return J.k(a).bZ(a,b,c)}
J.c7=function(a,b,c){return J.k(a).c_(a,b,c)}
J.f9=function(a,b,c){return J.k(a).c0(a,b,c)}
J.cK=function(a,b,c){return J.k(a).c1(a,b,c)}
J.cL=function(a,b,c){return J.k(a).c2(a,b,c)}
J.cM=function(a,b,c){return J.k(a).c3(a,b,c)}
J.cN=function(a,b,c,d){return J.k(a).c4(a,b,c,d)}
J.cO=function(a,b,c,d){return J.k(a).c5(a,b,c,d)}
J.fa=function(a,b){return J.k(a).c6(a,b)}
J.fb=function(a,b,c){return J.k(a).dX(a,b,c)}
J.fc=function(a,b,c,d,e,f,g){return J.k(a).c7(a,b,c,d,e,f,g)}
J.fd=function(a,b,c,d,e){return J.k(a).c9(a,b,c,d,e)}
I.aQ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bB.prototype
C.y=W.ca.prototype
C.m=W.fn.prototype
C.q=W.cb.prototype
C.z=W.fw.prototype
C.r=W.fD.prototype
C.L=W.fF.prototype
C.M=W.fT.prototype
C.t=W.fU.prototype
C.N=J.h.prototype
C.a=J.bk.prototype
C.A=J.d7.prototype
C.d=J.d8.prototype
C.u=J.bl.prototype
C.i=J.bm.prototype
C.U=J.bn.prototype
C.f=H.hp.prototype
C.n=H.hr.prototype
C.Y=W.hs.prototype
C.D=J.hB.prototype
C.E=W.hL.prototype
C.J=W.ib.prototype
C.x=J.b3.prototype
C.ae=W.aL.prototype
C.af=W.ir.prototype
C.K=new P.j3()
C.e=new P.jl()
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
C.V=H.m(I.aQ(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.W=H.m(I.aQ(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.X=H.m(I.aQ([]),[P.d])
C.v=H.m(I.aQ(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.m(I.aQ(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
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
$.aS=null
$.cR=null
$.cn=!1
$.ea=null
$.e2=null
$.ef=null
$.bU=null
$.bZ=null
$.cu=null
$.aN=null
$.b5=null
$.b6=null
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
I.$lazy(y,x,w)}})(["kP","ek",function(){return H.e9("_$dart_dartClosure")},"ls","cy",function(){return H.e9("_$dart_js")},"md","em",function(){return H.a9(H.bL({
toString:function(){return"$receiver$"}}))},"me","en",function(){return H.a9(H.bL({$method$:null,
toString:function(){return"$receiver$"}}))},"mf","eo",function(){return H.a9(H.bL(null))},"mg","ep",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mj","es",function(){return H.a9(H.bL(void 0))},"mk","et",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mi","er",function(){return H.a9(H.dx(null))},"mh","eq",function(){return H.a9(function(){try{null.$method$}catch(z){return z.message}}())},"mm","ev",function(){return H.a9(H.dx(void 0))},"ml","eu",function(){return H.a9(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mx","cz",function(){return P.iu()},"mN","bc",function(){return[]},"kM","ej",function(){return{}},"mE","ex",function(){return P.ci(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mF","cA",function(){return P.a_(P.d,P.bi)},"m0","el",function(){return new G.dw(1281,0,4294967295)},"kJ","ei",function(){return G.dv(1281,1281,1281)},"kI","eh",function(){return G.dv(32774,770,769)},"mL","a5",function(){return P.db(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.b,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.C)},"mr","ew",function(){return C.K},"mU","eB",function(){var z,y
z=G.bI("PointSpritesV")
y=[P.d]
z.ah(H.m(["aPosition"],y))
z.ai(H.m(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.aj(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"mT","eA",function(){var z,y
z=G.bI("PointSpritesF")
y=[P.d]
z.ai(H.m(["uTexture"],y))
z.aj(H.m(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"mS","ez",function(){var z,y
z=G.bI("InstancedV")
y=[P.d]
z.ah(H.m(["aPosition"],y))
z.ah(H.m(["iaRotation","iaTranslation"],y))
z.aV(H.m(["vColor"],y))
z.ai(H.m(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b=z.b1(!1,H.v(H.m(["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main(void) {\n    vec3 P = rotate_vertex_position(aPosition, iaRotation) +\n             iaTranslation;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(P, 1);\n    vColor = vec3(sin(aPosition.x)/2.0+0.5,\n                     cos(aPosition.y)/2.0+0.5, \n                     sin(aPosition.z)/2.0+0.5);\n}\n"],y),"$isa",y,"$asa"),null)
return z},"mR","ey",function(){var z,y
z=G.bI("InstancedF")
y=[P.d]
z.aV(H.m(["vColor"],y))
z.aj(H.m(["oFragColor = vec4( vColor, 1. );"],y))
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.F,args:[W.R]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.d,args:[P.B]},{func:1,ret:P.O,args:[W.a8]},{func:1,ret:P.O,args:[P.d]},{func:1,ret:P.F,args:[W.aX]},{func:1,ret:P.O,args:[W.P,P.d,P.d,W.br]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a1]},{func:1,ret:[P.aa,,],args:[,]},{func:1,ret:P.O,args:[W.r]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.F,args:[P.E]},{func:1,args:[W.Z]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:-1,args:[W.Z]},{func:1,ret:-1,args:[P.U,T.w]},{func:1,ret:P.F,args:[W.aL]},{func:1,ret:P.B,args:[P.B,P.c]},{func:1,ret:-1,args:[P.E]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.kB(d||a)
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
Isolate.ba=a.ba
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
