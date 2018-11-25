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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cx(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",lx:{"^":"b;a"}}],["","",,J,{"^":"",
cB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bY:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cA==null){H.ku()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.dF("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cE()]
if(v!=null)return v
v=H.kz(a)
if(v!=null)return v
if(typeof a=="function")return C.S
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.cE(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.aZ(a)},
k:["cm",function(a){return"Instance of '"+H.b_(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hb:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isQ:1},
dh:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isF:1},
cj:{"^":"h;",
gv:function(a){return 0},
k:["co",function(a){return String(a)}]},
hJ:{"^":"cj;"},
b1:{"^":"cj;"},
bm:{"^":"cj;",
k:function(a){var z=a[$.eq()]
if(z==null)return this.co(a)
return"JavaScript function for "+H.e(J.bf(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbh:1},
bj:{"^":"h;$ti",
l:function(a,b){H.z(b,H.p(a,0))
if(!!a.fixed$length)H.V(P.y("add"))
a.push(b)},
H:function(a,b){var z,y
H.w(b,"$isk",[H.p(a,0)],"$ask")
if(!!a.fixed$length)H.V(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.O)(b),++y)a.push(b[y])},
a6:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
bj:function(a,b){var z,y
H.l(b,{func:1,ret:P.Q,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aE(a))}return!1},
cg:function(a,b){if(!!a.immutable$list)H.V(P.y("sort"))
H.i6(a,J.k5(),H.p(a,0))},
aj:function(a){return this.cg(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aC(a[z],b))return!0
return!1},
k:function(a){return P.ch(a,"[","]")},
gw:function(a){return new J.ft(a,a.length,0,[H.p(a,0)])},
gv:function(a){return H.aZ(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.b7(a,b))
return a[b]},
h:function(a,b,c){H.z(c,H.p(a,0))
if(!!a.immutable$list)H.V(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.b7(a,b))
a[b]=c},
$isv:1,
$asv:I.b8,
$isk:1,
$isa:1,
p:{
ha:function(a,b){return J.ci(H.i(a,[b]))},
ci:function(a){H.bt(a)
a.fixed$length=Array
return a},
lv:[function(a,b){return J.eT(H.ej(a,"$isW"),H.ej(b,"$isW"))},"$2","k5",8,0,28]}},
lw:{"^":"bj;$ti"},
ft:{"^":"b;a,b,c,0d,$ti",
sb_:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.O(z))
x=this.c
if(x>=y){this.sb_(null)
return!1}this.sb_(z[x]);++this.c
return!0},
$isaU:1},
bk:{"^":"h;",
K:function(a,b){var z
H.cC(b)
if(typeof b!=="number")throw H.d(H.b5(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gah(b)
if(this.gah(a)===z)return 0
if(this.gah(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gah:function(a){return a===0?1/a<0:a<0},
bX:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.y(""+a+".toInt()"))},
dj:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.d(P.y(""+a+".ceil()"))},
dk:function(a,b,c){if(this.K(b,c)>0)throw H.d(H.b5(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dL:function(a,b){var z
if(b>20)throw H.d(P.bK(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gah(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
al:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bg(a,b)},
O:function(a,b){return(a|0)===a?a/b|0:this.bg(a,b)},
bg:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
be:function(a,b){var z
if(a>0)z=this.d6(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d6:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.d(H.b5(b))
return a>b},
$isW:1,
$asW:function(){return[P.D]},
$isX:1,
$isD:1},
dg:{"^":"bk;",$isB:1},
df:{"^":"bk;"},
bl:{"^":"h;",
ar:function(a,b){if(b>=a.length)throw H.d(H.b7(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.u(b)
if(typeof b!=="string")throw H.d(P.cU(b,null,null))
return a+b},
cj:function(a,b,c){var z
if(c>a.length)throw H.d(P.bK(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ci:function(a,b){return this.cj(a,b,0)},
cl:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.bL(b,null,null))
if(b>c)throw H.d(P.bL(b,null,null))
if(c>a.length)throw H.d(P.bL(c,null,null))
return a.substring(b,c)},
ck:function(a,b){return this.cl(a,b,null)},
dK:function(a){return a.toLowerCase()},
dl:function(a,b,c){if(c>a.length)throw H.d(P.bK(c,0,a.length,null,null))
return H.kG(a,b,c)},
K:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.d(H.b5(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.d(H.b7(a,b))
return a[b]},
$isv:1,
$asv:I.b8,
$isW:1,
$asW:function(){return[P.c]},
$ishH:1,
$isc:1}}],["","",,H,{"^":"",
h8:function(){return new P.co("No element")},
h9:function(){return new P.co("Too many elements")},
i6:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.l(b,{func:1,ret:P.B,args:[c,c]})
H.bo(a,0,J.aP(a)-1,b,c)},
bo:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
if(c-b<=32)H.i5(a,b,c,d,e)
else H.i4(a,b,c,d,e)},
i5:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.B,args:[e,e]})
for(z=b+1,y=J.b9(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a6(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
i4:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.l(a1,{func:1,ret:P.B,args:[a2,a2]})
z=C.b.O(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.O(b+a0,2)
v=w-z
u=w+z
t=J.b9(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
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
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.aC(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a8()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.T()
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
if(typeof e!=="number")return e.a8()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.T()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.T()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a8()
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
H.bo(a,b,m-2,a1,a2)
H.bo(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aC(a1.$2(t.i(a,m),r),0);)++m
for(;J.aC(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a8()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bo(a,m,l,a1,a2)}else H.bo(a,m,l,a1,a2)},
d4:{"^":"k;"},
bI:{"^":"d4;$ti",
gw:function(a){return new H.dl(this,this.gj(this),0,[H.cz(this,"bI",0)])},
aI:function(a,b){return this.cn(0,H.l(b,{func:1,ret:P.Q,args:[H.cz(this,"bI",0)]}))}},
dl:{"^":"b;a,b,c,0d,$ti",
sb0:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.b9(z)
x=y.gj(z)
if(this.b!==x)throw H.d(P.aE(z))
w=this.c
if(w>=x){this.sb0(null)
return!1}this.sb0(y.q(z,w));++this.c
return!0},
$isaU:1},
hm:{"^":"bI;a,b,$ti",
gj:function(a){return J.aP(this.a)},
q:function(a,b){return this.b.$1(J.f2(this.a,b))},
$asbI:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dG:{"^":"k;a,b,$ti",
gw:function(a){return new H.iw(J.bz(this.a),this.b,this.$ti)}},
iw:{"^":"aU;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bH:{"^":"b;$ti"}}],["","",,H,{"^":"",
aB:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
km:function(a){return init.types[H.M(a)]},
kx:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bf(a)
if(typeof z!=="string")throw H.d(H.b5(a))
return z},
aZ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b_:function(a){return H.hK(a)+H.bR(H.ae(a),0,null)},
hK:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.K||!!z.$isb1){u=C.z(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aB(w.length>1&&C.i.ar(w,0)===36?C.i.ck(w,1):w)},
aF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hR:function(a){var z=H.aF(a).getFullYear()+0
return z},
hP:function(a){var z=H.aF(a).getMonth()+1
return z},
hL:function(a){var z=H.aF(a).getDate()+0
return z},
hM:function(a){var z=H.aF(a).getHours()+0
return z},
hO:function(a){var z=H.aF(a).getMinutes()+0
return z},
hQ:function(a){var z=H.aF(a).getSeconds()+0
return z},
hN:function(a){var z=H.aF(a).getMilliseconds()+0
return z},
aA:function(a){throw H.d(H.b5(a))},
m:function(a,b){if(a==null)J.aP(a)
throw H.d(H.b7(a,b))},
b7:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
z=H.M(J.aP(a))
if(!(b<0)){if(typeof z!=="number")return H.aA(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bL(b,"index",null)},
b5:function(a){return new P.aD(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.ds()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.bf(this.dartException)},
V:function(a){throw H.d(a)},
O:function(a){throw H.d(P.aE(a))},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kI(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.be(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ck(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dr(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.et()
u=$.eu()
t=$.ev()
s=$.ew()
r=$.ez()
q=$.eA()
p=$.ey()
$.ex()
o=$.eC()
n=$.eB()
m=v.I(y)
if(m!=null)return z.$1(H.ck(H.u(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.ck(H.u(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dr(H.u(y),m))}}return z.$1(new H.is(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dv()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aD(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dv()
return a},
bb:function(a){var z
if(a==null)return new H.dW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dW(a)},
ki:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
kw:function(a,b,c,d,e,f){H.f(a,"$isbh")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.d8("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kw)
a.$identity=z
return z},
fF:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hV(z).r}else x=d
w=e?Object.create(new H.i8().constructor.prototype):Object.create(new H.ca(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a7
if(typeof u!=="number")return u.G()
$.a7=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cZ(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.km,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cX:H.cb
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
fC:function(a,b,c,d){var z=H.cb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fE(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fC(y,!w,z,b)
if(y===0){w=$.a7
if(typeof w!=="number")return w.G()
$.a7=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aQ
if(v==null){v=H.bD("self")
$.aQ=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a7
if(typeof w!=="number")return w.G()
$.a7=w+1
t+=w
w="return function("+t+"){return this."
v=$.aQ
if(v==null){v=H.bD("self")
$.aQ=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fD:function(a,b,c,d){var z,y
z=H.cb
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
fE:function(a,b){var z,y,x,w,v,u,t,s
z=$.aQ
if(z==null){z=H.bD("self")
$.aQ=z}y=$.cW
if(y==null){y=H.bD("receiver")
$.cW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fD(w,!u,x,b)
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
cx:function(a,b,c,d,e,f,g){return H.fF(a,b,H.M(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.a2(a,"String"))},
eb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a2(a,"double"))},
cC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.a2(a,"num"))},
bU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.a2(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.a2(a,"int"))},
cD:function(a,b){throw H.d(H.a2(a,H.aB(H.u(b).substring(3))))},
kE:function(a,b){throw H.d(H.cY(a,H.aB(H.u(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cD(a,b)},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.kE(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cD(a,b)},
bt:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.d(H.a2(a,"List<dynamic>"))},
ky:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cD(a,b)},
cy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
bs:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cy(J.A(a))
if(z==null)return!1
return H.e1(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.ct)return a
$.ct=!0
try{if(H.bs(a,b))return a
z=H.bu(b)
y=H.a2(a,z)
throw H.d(y)}finally{$.ct=!1}},
bW:function(a,b){if(a!=null&&!H.cw(a,b))H.V(H.a2(a,H.bu(b)))
return a},
e5:function(a){var z,y
z=J.A(a)
if(!!z.$isn){y=H.cy(z)
if(y!=null)return H.bu(y)
return"Closure"}return H.b_(a)},
kH:function(a){throw H.d(new P.fL(H.u(a)))},
ef:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
ae:function(a){if(a==null)return
return a.$ti},
n_:function(a,b,c){return H.aO(a["$as"+H.e(c)],H.ae(b))},
ba:function(a,b,c,d){var z
H.u(c)
H.M(d)
z=H.aO(a["$as"+H.e(c)],H.ae(b))
return z==null?null:z[d]},
cz:function(a,b,c){var z
H.u(b)
H.M(c)
z=H.aO(a["$as"+H.e(b)],H.ae(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.M(b)
z=H.ae(a)
return z==null?null:z[b]},
bu:function(a){return H.az(a,null)},
az:function(a,b){var z,y
H.w(b,"$isa",[P.c],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aB(a[0].builtin$cls)+H.bR(a,1,b)
if(typeof a=="function")return H.aB(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.m(b,y)
return H.e(b[y])}if('func' in a)return H.k4(a,b)
if('futureOr' in a)return"FutureOr<"+H.az("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.c]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.m(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.az(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.az(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.az(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.az(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kh(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.az(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bR:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.c],"$asa")
if(a==null)return""
z=new P.cq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.az(u,c)}return"<"+z.k(0)+">"},
kl:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isn){y=H.cy(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ae(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aL:function(a,b,c,d){var z,y
H.u(b)
H.bt(c)
H.u(d)
if(a==null)return!1
z=H.ae(a)
y=J.A(a)
if(y[b]==null)return!1
return H.e8(H.aO(y[d],z),null,c,null)},
bv:function(a,b,c,d){H.u(b)
H.bt(c)
H.u(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.d(H.cY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aB(b.substring(3))+H.bR(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.u(b)
H.bt(c)
H.u(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.d(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aB(b.substring(3))+H.bR(c,0,null),init.mangledGlobalNames)))},
e8:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.Z(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b,c[y],d))return!1
return!0},
mV:function(a,b,c){return a.apply(b,H.aO(J.A(b)["$as"+H.e(c)],H.ae(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.eh(z)}return!1},
cw:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bs(a,b)}z=J.A(a).constructor
y=H.ae(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.Z(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cw(a,b))throw H.d(H.a2(a,H.bu(b)))
return a},
Z:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.Z(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.e1(a,b,c,d)
if('func' in a)return c.builtin$cls==="bh"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.Z("type" in a?a.type:null,b,x,d)
else if(H.Z(a,b,x,d))return!0
else{if(!('$is'+"aT" in y.prototype))return!1
w=y.prototype["$as"+"aT"]
v=H.aO(w,z?a.slice(1):null)
return H.Z(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.e8(H.aO(r,z),b,u,d)},
e1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kD(m,b,l,d)},
kD:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.Z(c[w],d,a[w],b))return!1}return!0},
mW:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
kz:function(a){var z,y,x,w,v,u
z=H.u($.eg.$1(a))
y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.e7.$2(a,z))
if(z!=null){y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c0(x)
$.bV[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c_[z]=x
return x}if(v==="-"){u=H.c0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ek(a,x)
if(v==="*")throw H.d(P.dF(z))
if(init.leafTags[z]===true){u=H.c0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c0:function(a){return J.cB(a,!1,null,!!a.$isx)},
kB:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c0(z)
else return J.cB(z,c,null,null)},
ku:function(){if(!0===$.cA)return
$.cA=!0
H.kv()},
kv:function(){var z,y,x,w,v,u,t,s
$.bV=Object.create(null)
$.c_=Object.create(null)
H.kq()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kB(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kq:function(){var z,y,x,w,v,u,t
z=C.P()
z=H.aK(C.M,H.aK(C.R,H.aK(C.y,H.aK(C.y,H.aK(C.Q,H.aK(C.N,H.aK(C.O(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eg=new H.kr(v)
$.e7=new H.ks(u)
$.el=new H.kt(t)},
aK:function(a,b){return a(b)||b},
kG:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hU:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hV:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ci(z)
y=z[0]
x=z[1]
return new H.hU(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
il:{"^":"b;a,b,c,d,e,f",
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
if(z==null)z=H.i([],[P.c])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.il(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dB:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hE:{"^":"P;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dr:function(a,b){return new H.hE(a,b==null?null:b.method)}}},
hc:{"^":"P;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
ck:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hc(a,y,z?null:b.receiver)}}},
is:{"^":"P;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kI:{"^":"n:5;a",
$1:function(a){if(!!J.A(a).$isP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dW:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa1:1},
n:{"^":"b;",
k:function(a){return"Closure '"+H.b_(this).trim()+"'"},
gca:function(){return this},
$isbh:1,
gca:function(){return this}},
dx:{"^":"n;"},
i8:{"^":"dx;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aB(z)+"'"}},
ca:{"^":"dx;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ca))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.aZ(this.a)
else y=typeof z!=="object"?J.ag(z):H.aZ(z)
return(y^H.aZ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b_(z)+"'")},
p:{
cb:function(a){return a.a},
cX:function(a){return a.c},
bD:function(a){var z,y,x,w,v
z=new H.ca("self","target","receiver","name")
y=J.ci(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
im:{"^":"P;a",
k:function(a){return this.a},
p:{
a2:function(a,b){return new H.im("TypeError: "+H.e(P.bF(a))+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
fA:{"^":"P;a",
k:function(a){return this.a},
p:{
cY:function(a,b){return new H.fA("CastError: "+H.e(P.bF(a))+": type '"+H.e5(a)+"' is not a subtype of type '"+b+"'")}}},
hY:{"^":"P;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
hZ:function(a){return new H.hY(a)}}},
dC:{"^":"b;a,0b,0c,0d",
gae:function(){var z=this.b
if(z==null){z=H.bu(this.a)
this.b=z}return z},
k:function(a){return this.gae()},
gv:function(a){var z=this.d
if(z==null){z=C.i.gv(this.gae())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dC&&this.gae()===b.gae()}},
di:{"^":"dm;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gE:function(a){return new H.al(this,[H.p(this,0)])},
ag:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cR(z,b)}else{y=this.dA(b)
return y}},
dA:function(a){var z=this.d
if(z==null)return!1
return this.aE(this.ax(z,J.ag(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ac(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ac(w,b)
x=y==null?null:y.b
return x}else return this.dB(b)},
dB:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ax(z,J.ag(a)&0x3ffffff)
x=this.aE(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.az()
this.b=z}this.b1(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.az()
this.c=y}this.b1(y,b,c)}else{x=this.d
if(x==null){x=this.az()
this.d=x}w=J.ag(b)&0x3ffffff
v=this.ax(x,w)
if(v==null)this.aC(x,w,[this.ap(b,c)])
else{u=this.aE(v,b)
if(u>=0)v[u].b=c
else v.push(this.ap(b,c))}}},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aE(this))
z=z.c}},
b1:function(a,b,c){var z
H.z(b,H.p(this,0))
H.z(c,H.p(this,1))
z=this.ac(a,b)
if(z==null)this.aC(a,b,this.ap(b,c))
else z.b=c},
b3:function(){this.r=this.r+1&67108863},
ap:function(a,b){var z,y
z=new H.hh(H.z(a,H.p(this,0)),H.z(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b3()
return z},
aE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aC(a[y].a,b))return y
return-1},
k:function(a){return P.dn(this)},
ac:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aC:function(a,b,c){a[b]=c},
cS:function(a,b){delete a[b]},
cR:function(a,b){return this.ac(a,b)!=null},
az:function(){var z=Object.create(null)
this.aC(z,"<non-identifier-key>",z)
this.cS(z,"<non-identifier-key>")
return z},
$isdj:1},
hh:{"^":"b;a,b,0c,0d"},
al:{"^":"d4;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hi(z,z.r,this.$ti)
y.c=z.e
return y}},
hi:{"^":"b;a,b,0c,0d,$ti",
sb2:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aE(z))
else{z=this.c
if(z==null){this.sb2(null)
return!1}else{this.sb2(z.a)
this.c=this.c.c
return!0}}},
$isaU:1},
kr:{"^":"n:5;a",
$1:function(a){return this.a(a)}},
ks:{"^":"n:13;a",
$2:function(a,b){return this.a(a,b)}},
kt:{"^":"n:14;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
kh:function(a){return J.ha(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c1:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bQ:function(a){var z,y
if(!!J.A(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.b7(b,a))},
hz:{"^":"h;",$isio:1,"%":"DataView;ArrayBufferView;cm|dQ|dR|dp|dS|dT|ao"},
cm:{"^":"hz;",
gj:function(a){return a.length},
$isv:1,
$asv:I.b8,
$isx:1,
$asx:I.b8},
dp:{"^":"dR;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
h:function(a,b,c){H.eb(c)
H.ab(b,a,a.length)
a[b]=c},
$asbH:function(){return[P.X]},
$aso:function(){return[P.X]},
$isk:1,
$ask:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
"%":"Float64Array"},
ao:{"^":"dT;",
h:function(a,b,c){H.M(c)
H.ab(b,a,a.length)
a[b]=c},
$asbH:function(){return[P.B]},
$aso:function(){return[P.B]},
$isk:1,
$ask:function(){return[P.B]},
$isa:1,
$asa:function(){return[P.B]}},
hy:{"^":"dp;",$isad:1,"%":"Float32Array"},
lG:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lH:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ish6:1,
"%":"Int32Array"},
lI:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lJ:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hA:{"^":"ao;",
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ismu:1,
"%":"Uint32Array"},
lK:{"^":"ao;",
gj:function(a){return a.length},
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lL:{"^":"ao;",
gj:function(a){return a.length},
i:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dQ:{"^":"cm+o;"},
dR:{"^":"dQ+bH;"},
dS:{"^":"cm+o;"},
dT:{"^":"dS+bH;"}}],["","",,P,{"^":"",
iA:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kc()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b6(new P.iC(z),1)).observe(y,{childList:true})
return new P.iB(z,y,x)}else if(self.setImmediate!=null)return P.kd()
return P.ke()},
mE:[function(a){self.scheduleImmediate(H.b6(new P.iD(H.l(a,{func:1,ret:-1})),0))},"$1","kc",4,0,4],
mF:[function(a){self.setImmediate(H.b6(new P.iE(H.l(a,{func:1,ret:-1})),0))},"$1","kd",4,0,4],
mG:[function(a){H.l(a,{func:1,ret:-1})
P.jN(0,a)},"$1","ke",4,0,4],
k8:function(a,b){if(H.bs(a,{func:1,args:[P.b,P.a1]}))return H.l(a,{func:1,ret:null,args:[P.b,P.a1]})
if(H.bs(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k7:function(){var z,y
for(;z=$.aJ,z!=null;){$.b4=null
y=z.b
$.aJ=y
if(y==null)$.b3=null
z.a.$0()}},
mS:[function(){$.cu=!0
try{P.k7()}finally{$.b4=null
$.cu=!1
if($.aJ!=null)$.cF().$1(P.e9())}},"$0","e9",0,0,1],
e4:function(a){var z=new P.dI(H.l(a,{func:1,ret:-1}))
if($.aJ==null){$.b3=z
$.aJ=z
if(!$.cu)$.cF().$1(P.e9())}else{$.b3.b=z
$.b3=z}},
kb:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aJ
if(z==null){P.e4(a)
$.b4=$.b3
return}y=new P.dI(a)
x=$.b4
if(x==null){y.b=z
$.b4=y
$.aJ=y}else{y.b=x.b
x.b=y
$.b4=y
if(y.b==null)$.b3=y}},
kF:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.H
if(C.e===y){P.bT(null,null,C.e,a)
return}y.toString
P.bT(null,null,y,H.l(y.bm(a),z))},
bS:function(a,b,c,d,e){var z={}
z.a=d
P.kb(new P.k9(z,e))},
e2:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.H
if(y===c)return d.$0()
$.H=c
z=y
try{y=d.$0()
return y}finally{$.H=z}},
e3:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.H
if(y===c)return d.$1(e)
$.H=c
z=y
try{y=d.$1(e)
return y}finally{$.H=z}},
ka:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.H
if(y===c)return d.$2(e,f)
$.H=c
z=y
try{y=d.$2(e,f)
return y}finally{$.H=z}},
bT:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bm(d):c.dg(d,-1)
P.e4(d)},
iC:{"^":"n:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iB:{"^":"n:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iD:{"^":"n:0;a",
$0:function(){this.a.$0()}},
iE:{"^":"n:0;a",
$0:function(){this.a.$0()}},
jM:{"^":"b;a,0b,c",
cN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b6(new P.jO(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
p:{
jN:function(a,b){var z=new P.jM(!0,0)
z.cN(a,b)
return z}}},
jO:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
iH:{"^":"b;$ti"},
jH:{"^":"iH;a,$ti"},
aI:{"^":"b;0a,b,c,d,e,$ti",
dC:function(a){if(this.c!==6)return!0
return this.b.b.aG(H.l(this.d,{func:1,ret:P.Q,args:[P.b]}),a.a,P.Q,P.b)},
dz:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bs(z,{func:1,args:[P.b,P.a1]}))return H.bW(w.dF(z,a.a,a.b,null,y,P.a1),x)
else return H.bW(w.aG(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aa:{"^":"b;bf:a<,b,0d3:c<,$ti",
bW:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.e){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k8(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aa(0,$.H,[c])
w=b==null?1:3
this.b5(new P.aI(x,w,a,b,[z,c]))
return x},
bV:function(a,b){return this.bW(a,null,b)},
b5:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaI")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaa")
z=y.a
if(z<4){y.b5(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bT(null,null,z,H.l(new P.iW(this,a),{func:1,ret:-1}))}},
bc:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaI")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaa")
y=u.a
if(y<4){u.bc(a)
return}this.a=y
this.c=u.c}z.a=this.ad(a)
y=this.b
y.toString
P.bT(null,null,y,H.l(new P.j0(z,this),{func:1,ret:-1}))}},
aB:function(){var z=H.f(this.c,"$isaI")
this.c=null
return this.ad(z)},
ad:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
as:function(a){var z,y,x
z=H.p(this,0)
H.bW(a,{futureOr:1,type:z})
y=this.$ti
if(H.aL(a,"$isaT",y,"$asaT"))if(H.aL(a,"$isaa",y,null))P.dL(a,this)
else P.iX(a,this)
else{x=this.aB()
H.z(a,z)
this.a=4
this.c=a
P.b2(this,x)}},
b7:function(a,b){var z
H.f(b,"$isa1")
z=this.aB()
this.a=8
this.c=new P.Y(a,b)
P.b2(this,z)},
$isaT:1,
p:{
iX:function(a,b){var z,y,x
b.a=1
try{a.bW(new P.iY(b),new P.iZ(b),null)}catch(x){z=H.a4(x)
y=H.bb(x)
P.kF(new P.j_(b,z,y))}},
dL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaa")
if(z>=4){y=b.aB()
b.a=a.a
b.c=a.c
P.b2(b,y)}else{y=H.f(b.c,"$isaI")
b.a=2
b.c=a
a.bc(y)}},
b2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isY")
y=y.b
u=v.a
t=v.b
y.toString
P.bS(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b2(z.a,b)}y=z.a
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
if(p){H.f(r,"$isY")
y=y.b
u=r.a
t=r.b
y.toString
P.bS(null,null,y,u,t)
return}o=$.H
if(o!=q)$.H=q
else o=null
y=b.c
if(y===8)new P.j3(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j2(x,b,r).$0()}else if((y&2)!==0)new P.j1(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.A(y).$isaT){if(y.a>=4){n=H.f(t.c,"$isaI")
t.c=null
b=t.ad(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dL(y,t)
return}}m=b.b
n=H.f(m.c,"$isaI")
m.c=null
b=m.ad(n)
y=x.a
u=x.b
if(!y){H.z(u,H.p(m,0))
m.a=4
m.c=u}else{H.f(u,"$isY")
m.a=8
m.c=u}z.a=m
y=m}}}},
iW:{"^":"n:0;a,b",
$0:function(){P.b2(this.a,this.b)}},
j0:{"^":"n:0;a,b",
$0:function(){P.b2(this.b,this.a.a)}},
iY:{"^":"n:6;a",
$1:function(a){var z=this.a
z.a=0
z.as(a)}},
iZ:{"^":"n:16;a",
$2:function(a,b){H.f(b,"$isa1")
this.a.b7(a,b)},
$1:function(a){return this.$2(a,null)}},
j_:{"^":"n:0;a,b,c",
$0:function(){this.a.b7(this.b,this.c)}},
j3:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bS(H.l(w.d,{func:1}),null)}catch(v){y=H.a4(v)
x=H.bb(v)
if(this.d){w=H.f(this.a.a.c,"$isY").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isY")
else u.b=new P.Y(y,x)
u.a=!0
return}if(!!J.A(z).$isaT){if(z instanceof P.aa&&z.gbf()>=4){if(z.gbf()===8){w=this.b
w.b=H.f(z.gd3(),"$isY")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.bV(new P.j4(t),null)
w.a=!1}}},
j4:{"^":"n:17;a",
$1:function(a){return this.a}},
j2:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.z(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.aG(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a4(t)
y=H.bb(t)
x=this.a
x.b=new P.Y(z,y)
x.a=!0}}},
j1:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isY")
w=this.c
if(w.dC(z)&&w.e!=null){v=this.b
v.b=w.dz(z)
v.a=!1}}catch(u){y=H.a4(u)
x=H.bb(u)
w=H.f(this.a.a.c,"$isY")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Y(y,x)
s.a=!0}}},
dI:{"^":"b;a,0b"},
ic:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.aa(0,$.H,[P.B])
z.a=0
x=H.p(this,0)
w=H.l(new P.ie(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.ig(z,y),{func:1,ret:-1})
W.aH(this.a,this.b,w,!1,x)
return y}},
ie:{"^":"n;a,b",
$1:function(a){H.z(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.p(this.b,0)]}}},
ig:{"^":"n:0;a,b",
$0:function(){this.b.as(this.a.a)}},
id:{"^":"b;"},
Y:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isP:1},
jU:{"^":"b;",$ismC:1},
k9:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ds()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.k(0)
throw x}},
jq:{"^":"jU;",
dG:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.e2(null,null,this,a,-1)}catch(x){z=H.a4(x)
y=H.bb(x)
P.bS(null,null,this,z,H.f(y,"$isa1"))}},
dH:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.e3(null,null,this,a,b,-1,c)}catch(x){z=H.a4(x)
y=H.bb(x)
P.bS(null,null,this,z,H.f(y,"$isa1"))}},
dg:function(a,b){return new P.js(this,H.l(a,{func:1,ret:b}),b)},
bm:function(a){return new P.jr(this,H.l(a,{func:1,ret:-1}))},
dh:function(a,b){return new P.jt(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bS:function(a,b){H.l(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.e2(null,null,this,a,b)},
aG:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.H===C.e)return a.$1(b)
return P.e3(null,null,this,a,b,c,d)},
dF:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.H===C.e)return a.$2(b,c)
return P.ka(null,null,this,a,b,c,d,e,f)}},
js:{"^":"n;a,b,c",
$0:function(){return this.a.bS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jr:{"^":"n:1;a,b",
$0:function(){return this.a.dG(this.b)}},
jt:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dH(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dk:function(a,b,c){H.bt(a)
return H.w(H.ki(a,new H.di(0,0,[b,c])),"$isdj",[b,c],"$asdj")},
N:function(a,b){return new H.di(0,0,[a,b])},
a0:function(a,b,c,d){return new P.jb(0,0,[d])},
h7:function(a,b,c){var z,y
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.i([],[P.c])
y=$.bc()
C.a.l(y,a)
try{P.k6(a,z)}finally{if(0>=y.length)return H.m(y,-1)
y.pop()}y=P.dw(b,H.ky(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
ch:function(a,b,c){var z,y,x
if(P.cv(a))return b+"..."+c
z=new P.cq(b)
y=$.bc()
C.a.l(y,a)
try{x=z
x.a=P.dw(x.gU(),a,", ")}finally{if(0>=y.length)return H.m(y,-1)
y.pop()}y=z
y.a=y.gU()+c
y=z.gU()
return y.charCodeAt(0)==0?y:y},
cv:function(a){var z,y
for(z=0;y=$.bc(),z<y.length;++z)if(a===y[z])return!0
return!1},
k6:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.c],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.m(b,-1)
v=b.pop()
if(0>=b.length)return H.m(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.m(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.m(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cl:function(a,b){var z,y,x
z=P.a0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.O)(a),++x)z.l(0,H.z(a[x],b))
return z},
dn:function(a){var z,y,x
z={}
if(P.cv(a))return"{...}"
y=new P.cq("")
try{C.a.l($.bc(),a)
x=y
x.a=x.gU()+"{"
z.a=!0
J.f5(a,new P.hl(z,y))
z=y
z.a=z.gU()+"}"}finally{z=$.bc()
if(0>=z.length)return H.m(z,-1)
z.pop()}z=y.gU()
return z.charCodeAt(0)==0?z:z},
jb:{"^":"j6;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dP(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbr")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbr")!=null}else return this.cQ(b)},
cQ:function(a){var z=this.d
if(z==null)return!1
return this.aw(this.ba(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cs()
this.b=z}return this.b4(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cs()
this.c=y}return this.b4(y,b)}else return this.cO(0,b)},
cO:function(a,b){var z,y,x
H.z(b,H.p(this,0))
z=this.d
if(z==null){z=P.cs()
this.d=z}y=this.b8(b)
x=z[y]
if(x==null)z[y]=[this.aA(b)]
else{if(this.aw(x,b)>=0)return!1
x.push(this.aA(b))}return!0},
bR:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bd(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bd(this.c,b)
else return this.cZ(0,b)},
cZ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ba(z,b)
x=this.aw(y,b)
if(x<0)return!1
this.bh(y.splice(x,1)[0])
return!0},
a5:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ay()}},
b4:function(a,b){H.z(b,H.p(this,0))
if(H.f(a[b],"$isbr")!=null)return!1
a[b]=this.aA(b)
return!0},
bd:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbr")
if(z==null)return!1
this.bh(z)
delete a[b]
return!0},
ay:function(){this.r=this.r+1&67108863},
aA:function(a){var z,y
z=new P.br(H.z(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ay()
return z},
bh:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ay()},
b8:function(a){return J.ag(a)&0x3ffffff},
ba:function(a,b){return a[this.b8(b)]},
aw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aC(a[y].a,b))return y
return-1},
p:{
cs:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
br:{"^":"b;a,0b,0c"},
dP:{"^":"b;a,b,0c,0d,$ti",
sb6:function(a){this.d=H.z(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aE(z))
else{z=this.c
if(z==null){this.sb6(null)
return!1}else{this.sb6(H.z(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaU:1,
p:{
jc:function(a,b,c){var z=new P.dP(a,b,[c])
z.c=a.e
return z}}},
j6:{"^":"i_;"},
hj:{"^":"jd;",$isk:1,$isa:1},
o:{"^":"b;$ti",
gw:function(a){return new H.dl(a,this.gj(a),0,[H.ba(this,a,"o",0)])},
q:function(a,b){return this.i(a,b)},
dw:function(a,b,c,d){var z,y,x
H.z(b,d)
H.l(c,{func:1,ret:d,args:[d,H.ba(this,a,"o",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gj(a))throw H.d(P.aE(a))}return y},
k:function(a){return P.ch(a,"[","]")}},
dm:{"^":"S;"},
hl:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
S:{"^":"b;$ti",
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.ba(this,a,"S",0),H.ba(this,a,"S",1)]})
for(z=J.bz(this.gE(a));z.t();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gj:function(a){return J.aP(this.gE(a))},
k:function(a){return P.dn(a)},
$isI:1},
i0:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bz(H.w(b,"$isk",this.$ti,"$ask"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.ch(this,"{","}")},
$isk:1,
$ism2:1},
i_:{"^":"i0;"},
jd:{"^":"b+o;"}}],["","",,P,{"^":"",
fY:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.b_(a)+"'"},
bF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bf(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fY(a)},
d8:function(a){return new P.iT(a)},
aN:function(a){H.c1(H.e(a))},
Q:{"^":"b;"},
"+bool":0,
bE:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.bE&&this.a===b.a&&!0},
K:function(a,b){return C.b.K(this.a,H.f(b,"$isbE").a)},
gv:function(a){var z=this.a
return(z^C.b.be(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fM(H.hR(this))
y=P.bg(H.hP(this))
x=P.bg(H.hL(this))
w=P.bg(H.hM(this))
v=P.bg(H.hO(this))
u=P.bg(H.hQ(this))
t=P.fN(H.hN(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isW:1,
$asW:function(){return[P.bE]},
p:{
fM:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bg:function(a){if(a>=10)return""+a
return"0"+a}}},
X:{"^":"D;"},
"+double":0,
aR:{"^":"b;a",
T:function(a,b){return C.b.T(this.a,H.f(b,"$isaR").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.b.K(this.a,H.f(b,"$isaR").a)},
k:function(a){var z,y,x,w,v
z=new P.fV()
y=this.a
if(y<0)return"-"+new P.aR(0-y).k(0)
x=z.$1(C.b.O(y,6e7)%60)
w=z.$1(C.b.O(y,1e6)%60)
v=new P.fU().$1(y%1e6)
return""+C.b.O(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isW:1,
$asW:function(){return[P.aR]},
p:{
fT:function(a,b,c,d,e,f){return new P.aR(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fU:{"^":"n:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fV:{"^":"n:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
P:{"^":"b;"},
ds:{"^":"P;",
k:function(a){return"Throw of null."}},
aD:{"^":"P;a,b,c,d",
gau:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gat:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gau()+y+x
if(!this.a)return w
v=this.gat()
u=P.bF(this.b)
return w+v+": "+H.e(u)},
p:{
cU:function(a,b,c){return new P.aD(!0,a,b,c)}}},
dt:{"^":"aD;e,f,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bL:function(a,b,c){return new P.dt(null,null,!0,a,b,"Value not in range")},
bK:function(a,b,c,d,e){return new P.dt(b,c,!0,a,d,"Invalid value")}}},
h5:{"^":"aD;e,j:f>,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a8()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
E:function(a,b,c,d,e){var z=H.M(e==null?J.aP(b):e)
return new P.h5(b,z,!0,a,c,"Index out of range")}}},
it:{"^":"P;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.it(a)}}},
ir:{"^":"P;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dF:function(a){return new P.ir(a)}}},
co:{"^":"P;a",
k:function(a){return"Bad state: "+this.a},
p:{
cp:function(a){return new P.co(a)}}},
fG:{"^":"P;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bF(z))+"."},
p:{
aE:function(a){return new P.fG(a)}}},
dv:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isP:1},
fL:{"^":"P;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iT:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bh:{"^":"b;"},
B:{"^":"D;"},
"+int":0,
k:{"^":"b;$ti",
aI:["cn",function(a,b){var z=H.cz(this,"k",0)
return new H.dG(this,H.l(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.V(P.bK(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.d(P.E(b,this,"index",null,y))},
k:function(a){return P.h7(this,"(",")")}},
aU:{"^":"b;$ti"},
a:{"^":"b;$ti",$isk:1},
"+List":0,
I:{"^":"b;$ti"},
F:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
D:{"^":"b;",$isW:1,
$asW:function(){return[P.D]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.aZ(this)},
k:function(a){return"Instance of '"+H.b_(this)+"'"},
toString:function(){return this.k(this)}},
a1:{"^":"b;"},
c:{"^":"b;",$isW:1,
$asW:function(){return[P.c]},
$ishH:1},
"+String":0,
cq:{"^":"b;U:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dw:function(a,b,c){var z=J.bz(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
ea:function(){return document},
fW:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.t
z=new H.dG(new W.a3(y),H.l(new W.fX(),{func:1,ret:P.Q,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.V(H.h8())
w=x.gA(x)
if(x.t())H.V(H.h9())
return H.f(w,"$isR")},
d7:function(a){H.f(a,"$isK")
return"wheel"},
aS:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f8(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a4(x)}return z},
iQ:function(a,b){return document.createElement(a)},
bP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dO:function(a,b,c,d){var z,y
z=W.bP(W.bP(W.bP(W.bP(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e0:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iK(a)
if(!!J.A(z).$isK)return z
return}else return H.f(a,"$isK")},
e6:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.e)return a
return z.dh(a,b)},
J:{"^":"R;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kJ:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fr:{"^":"J;",
k:function(a){return String(a)},
$isfr:1,
"%":"HTMLAnchorElement"},
kK:{"^":"J;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"J;",$iscV:1,"%":"HTMLBaseElement"},
fw:{"^":"h;","%":";Blob"},
bC:{"^":"J;",$isbC:1,"%":"HTMLBodyElement"},
cc:{"^":"J;0n:height=,0m:width=",
cb:function(a,b,c){var z=this.cV(a,b,P.kf(c,null))
return z},
cV:function(a,b,c){return a.getContext(b,c)},
$iscc:1,
"%":"HTMLCanvasElement"},
kP:{"^":"h;",
ai:function(a){return P.a_(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kQ:{"^":"t;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fH:{"^":"cd;",$isfH:1,"%":"CSSNumericValue|CSSUnitValue"},
kS:{"^":"fK;0j:length=","%":"CSSPerspective"},
ah:{"^":"h;",$isah:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fI:{"^":"iI;0j:length=",
aM:function(a,b){var z=this.cW(a,this.aq(a,b))
return z==null?"":z},
aq:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.d7(a,b)
z[b]=y
return y},
d7:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fO()+b
if(z in a)return z
return b},
cW:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fJ:{"^":"b;",
gn:function(a){return this.aM(a,"height")},
gm:function(a){return this.aM(a,"width")}},
cd:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fK:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kU:{"^":"cd;0j:length=","%":"CSSTransformValue"},
kV:{"^":"cd;0j:length=","%":"CSSUnparsedValue"},
kX:{"^":"h;0j:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fP:{"^":"J;","%":"HTMLDivElement"},
fQ:{"^":"t;",
da:function(a,b){return a.adoptNode(b)},
cc:function(a,b){return a.getElementById(b)},
aF:function(a,b){return a.querySelector(b)},
gbN:function(a){return new W.bp(a,"mousedown",!1,[W.T])},
gbO:function(a){return new W.bp(a,"mousemove",!1,[W.T])},
gbP:function(a){return new W.bp(a,"mouseup",!1,[W.T])},
gbQ:function(a){return new W.bp(a,H.u(W.d7(a)),!1,[W.aG])},
"%":"XMLDocument;Document"},
kY:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fR:{"^":"h;",
dq:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
kZ:{"^":"iM;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.w(c,"$isU",[P.D],"$asU")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.U,P.D]]},
$isx:1,
$asx:function(){return[[P.U,P.D]]},
$aso:function(){return[[P.U,P.D]]},
$isk:1,
$ask:function(){return[[P.U,P.D]]},
$isa:1,
$asa:function(){return[[P.U,P.D]]},
$asq:function(){return[[P.U,P.D]]},
"%":"ClientRectList|DOMRectList"},
fS:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isU",[P.D],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isU:1,
$asU:function(){return[P.D]},
"%":";DOMRectReadOnly"},
l_:{"^":"iO;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.u(c)
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.c]},
$isx:1,
$asx:function(){return[P.c]},
$aso:function(){return[P.c]},
$isk:1,
$ask:function(){return[P.c]},
$isa:1,
$asa:function(){return[P.c]},
$asq:function(){return[P.c]},
"%":"DOMStringList"},
l0:{"^":"h;0j:length=","%":"DOMTokenList"},
R:{"^":"t;0dI:tagName=",
gde:function(a){return new W.iP(a)},
k:function(a){return a.localName},
L:["ak",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d6
if(z==null){z=H.i([],[W.a8])
y=new W.dq(z)
C.a.l(z,W.dM(null))
C.a.l(z,W.dX())
$.d6=y
d=y}else d=z
z=$.d5
if(z==null){z=new W.e_(d)
$.d5=z
c=z}else{z.a=d
c=z}}if($.ac==null){z=document
y=z.implementation
y=(y&&C.I).dq(y,"")
$.ac=y
$.ce=y.createRange()
y=$.ac
y.toString
y=y.createElement("base")
H.f(y,"$iscV")
y.href=z.baseURI
z=$.ac.head;(z&&C.J).F(z,y)}z=$.ac
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbC")}z=$.ac
if(!!this.$isbC)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ac.body;(z&&C.p).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.U,a.tagName)){z=$.ce;(z&&C.B).cd(z,x)
z=$.ce
w=(z&&C.B).dm(z,b)}else{x.innerHTML=b
w=$.ac.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.ac.body
if(x==null?z!=null:x!==z)J.cO(x)
c.aQ(w)
C.j.da(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dn",null,null,"gdT",5,5,null],
cf:function(a,b,c,d){a.textContent=null
this.F(a,this.L(a,b,c,d))},
ce:function(a,b){return this.cf(a,b,null,null)},
Y:function(a,b){return a.getAttribute(b)},
d_:function(a,b){return a.removeAttribute(b)},
gbN:function(a){return new W.bO(a,"mousedown",!1,[W.T])},
gbO:function(a){return new W.bO(a,"mousemove",!1,[W.T])},
gbP:function(a){return new W.bO(a,"mouseup",!1,[W.T])},
gbQ:function(a){return new W.bO(a,H.u(W.d7(a)),!1,[W.aG])},
$isR:1,
"%":";Element"},
fX:{"^":"n:18;",
$1:function(a){return!!J.A(H.f(a,"$ist")).$isR}},
l2:{"^":"J;0n:height=,0m:width=","%":"HTMLEmbedElement"},
ai:{"^":"h;",$isai:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
d9:function(a,b,c,d){H.l(c,{func:1,args:[W.ai]})
if(c!=null)this.cP(a,b,c,!1)},
cP:function(a,b,c,d){return a.addEventListener(b,H.b6(H.l(c,{func:1,args:[W.ai]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dU|dV|dY|dZ"},
aj:{"^":"fw;",$isaj:1,"%":"File"},
lj:{"^":"iV;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaj")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aj]},
$isx:1,
$asx:function(){return[W.aj]},
$aso:function(){return[W.aj]},
$isk:1,
$ask:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asq:function(){return[W.aj]},
"%":"FileList"},
lk:{"^":"K;0j:length=","%":"FileWriter"},
ln:{"^":"J;0j:length=","%":"HTMLFormElement"},
ak:{"^":"h;",$isak:1,"%":"Gamepad"},
h3:{"^":"J;","%":"HTMLHeadElement"},
lo:{"^":"h;0j:length=","%":"History"},
lp:{"^":"j8;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$ist")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h4:{"^":"fQ;","%":"HTMLDocument"},
lq:{"^":"J;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lr:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
ls:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
lt:{"^":"J;0n:height=,0m:width=","%":"HTMLImageElement"},
cg:{"^":"J;0n:height=,0m:width=",$iscg:1,"%":"HTMLInputElement"},
aV:{"^":"dE;",$isaV:1,"%":"KeyboardEvent"},
hk:{"^":"h;",
k:function(a){return String(a)},
$ishk:1,
"%":"Location"},
ho:{"^":"J;","%":"HTMLAudioElement;HTMLMediaElement"},
lC:{"^":"h;0j:length=","%":"MediaList"},
lD:{"^":"jf;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.c])
this.C(a,new W.hq(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.c,null]},
$isI:1,
$asI:function(){return[P.c,null]},
"%":"MIDIInputMap"},
hq:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lE:{"^":"jg;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.c])
this.C(a,new W.hr(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.c,null]},
$isI:1,
$asI:function(){return[P.c,null]},
"%":"MIDIOutputMap"},
hr:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
an:{"^":"h;",$isan:1,"%":"MimeType"},
lF:{"^":"ji;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isan")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.an]},
$isx:1,
$asx:function(){return[W.an]},
$aso:function(){return[W.an]},
$isk:1,
$ask:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"MimeTypeArray"},
T:{"^":"dE;",
gbM:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.aY(a.offsetX,a.offsetY,[P.D])
else{z=a.target
if(!J.A(W.e0(z)).$isR)throw H.d(P.y("offsetX is only supported on elements"))
y=H.f(W.e0(z),"$isR")
z=a.clientX
x=a.clientY
w=[P.D]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.aY(u,v,w),"$isaY",w,"$asaY")
if(typeof z!=="number")return z.aT()
if(typeof x!=="number")return x.aT()
return new P.aY(C.r.bX(z-u),C.r.bX(x-v),w)}},
$isT:1,
"%":";DragEvent|MouseEvent"},
a3:{"^":"hj;a",
gaa:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.cp("No elements"))
if(y>1)throw H.d(P.cp("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.w(b,"$isk",[W.t],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
h:function(a,b,c){var z,y
H.f(c,"$ist")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.m(y,b)
J.eL(z,c,y[b])},
gw:function(a){var z=this.a.childNodes
return new W.da(z,z.length,-1,[H.ba(C.W,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.m(z,b)
return z[b]},
$aso:function(){return[W.t]},
$ask:function(){return[W.t]},
$asa:function(){return[W.t]}},
t:{"^":"K;0dD:previousSibling=",
dE:function(a){var z=a.parentNode
if(z!=null)J.bw(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cm(a):z},
F:function(a,b){return a.appendChild(b)},
d0:function(a,b){return a.removeChild(b)},
d1:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hB:{"^":"jk;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$ist")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lO:{"^":"J;0n:height=,0m:width=","%":"HTMLObjectElement"},
lQ:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lR:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
ap:{"^":"h;0j:length=",$isap:1,"%":"Plugin"},
lT:{"^":"jo;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isap")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$aso:function(){return[W.ap]},
$isk:1,
$ask:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"PluginArray"},
lV:{"^":"T;0n:height=,0m:width=","%":"PointerEvent"},
hT:{"^":"h;",
dm:function(a,b){return a.createContextualFragment(b)},
cd:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m_:{"^":"ju;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.c])
this.C(a,new W.hX(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.c,null]},
$isI:1,
$asI:function(){return[P.c,null]},
"%":"RTCStatsReport"},
hX:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m0:{"^":"h;0n:height=,0m:width=","%":"Screen"},
m1:{"^":"J;0j:length=","%":"HTMLSelectElement"},
aq:{"^":"K;",$isaq:1,"%":"SourceBuffer"},
m3:{"^":"dV;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaq")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$aso:function(){return[W.aq]},
$isk:1,
$ask:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"SourceBufferList"},
ar:{"^":"h;",$isar:1,"%":"SpeechGrammar"},
m4:{"^":"jA;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isar")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ar]},
$isx:1,
$asx:function(){return[W.ar]},
$aso:function(){return[W.ar]},
$isk:1,
$ask:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"SpeechGrammarList"},
as:{"^":"h;0j:length=",$isas:1,"%":"SpeechRecognitionResult"},
m7:{"^":"jD;",
i:function(a,b){return this.bb(a,H.u(b))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=0;!0;++z){y=this.cY(a,z)
if(y==null)return
b.$2(y,this.bb(a,y))}},
gE:function(a){var z=H.i([],[P.c])
this.C(a,new W.ib(z))
return z},
gj:function(a){return a.length},
bb:function(a,b){return a.getItem(b)},
cY:function(a,b){return a.key(b)},
$asS:function(){return[P.c,P.c]},
$isI:1,
$asI:function(){return[P.c,P.c]},
"%":"Storage"},
ib:{"^":"n:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
at:{"^":"h;",$isat:1,"%":"CSSStyleSheet|StyleSheet"},
ih:{"^":"J;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=W.fW("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a3(y).H(0,new W.a3(z))
return y},
"%":"HTMLTableElement"},
ma:{"^":"J;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.gaa(z)
x.toString
z=new W.a3(x)
w=z.gaa(z)
y.toString
w.toString
new W.a3(y).H(0,new W.a3(w))
return y},
"%":"HTMLTableRowElement"},
mb:{"^":"J;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a3(z)
x=z.gaa(z)
y.toString
x.toString
new W.a3(y).H(0,new W.a3(x))
return y},
"%":"HTMLTableSectionElement"},
dy:{"^":"J;",$isdy:1,"%":"HTMLTemplateElement"},
mc:{"^":"h;0m:width=","%":"TextMetrics"},
au:{"^":"K;",$isau:1,"%":"TextTrack"},
av:{"^":"K;",$isav:1,"%":"TextTrackCue|VTTCue"},
md:{"^":"jL;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isav")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$aso:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"TextTrackCueList"},
me:{"^":"dZ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isau")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$aso:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"TextTrackList"},
mg:{"^":"h;0j:length=","%":"TimeRanges"},
aw:{"^":"h;",$isaw:1,"%":"Touch"},
mh:{"^":"jQ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isaw")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$aso:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"TouchList"},
mi:{"^":"h;0j:length=","%":"TrackDefaultList"},
dE:{"^":"ai;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mw:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
my:{"^":"ho;0n:height=,0m:width=","%":"HTMLVideoElement"},
mz:{"^":"K;0j:length=","%":"VideoTrackList"},
mA:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mB:{"^":"h;0m:width=","%":"VTTRegion"},
aG:{"^":"T;",
gds:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
$isaG:1,
"%":"WheelEvent"},
ix:{"^":"K;",
gdd:function(a){var z,y,x
z=P.D
y=new P.aa(0,$.H,[z])
x=H.l(new W.iy(new P.jH(y,[z])),{func:1,ret:-1,args:[P.D]})
this.cU(a)
this.d2(a,W.e6(x,z))
return y},
d2:function(a,b){return a.requestAnimationFrame(H.b6(H.l(b,{func:1,ret:-1,args:[P.D]}),1))},
cU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdH:1,
"%":"DOMWindow|Window"},
iy:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.bW(H.cC(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.V(P.cp("Future already completed"))
z.as(a)}},
dJ:{"^":"t;",$isdJ:1,"%":"Attr"},
mH:{"^":"jW;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isah")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ah]},
$isx:1,
$asx:function(){return[W.ah]},
$aso:function(){return[W.ah]},
$isk:1,
$ask:function(){return[W.ah]},
$isa:1,
$asa:function(){return[W.ah]},
$asq:function(){return[W.ah]},
"%":"CSSRuleList"},
mI:{"^":"fS;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aL(b,"$isU",[P.D],"$asU"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mJ:{"^":"jY;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isak")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ak]},
$isx:1,
$asx:function(){return[W.ak]},
$aso:function(){return[W.ak]},
$isk:1,
$ask:function(){return[W.ak]},
$isa:1,
$asa:function(){return[W.ak]},
$asq:function(){return[W.ak]},
"%":"GamepadList"},
mO:{"^":"k_;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$ist")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isx:1,
$asx:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mP:{"^":"k1;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isas")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$aso:function(){return[W.as]},
$isk:1,
$ask:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"SpeechRecognitionResultList"},
mQ:{"^":"k3;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.f(c,"$isat")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.at]},
$isx:1,
$asx:function(){return[W.at]},
$aso:function(){return[W.at]},
$isk:1,
$ask:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"StyleSheetList"},
iF:{"^":"dm;cT:a<",
C:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.c,P.c]})
for(z=this.gE(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.O)(z),++v){u=z[v]
b.$2(u,w.Y(x,u))}},
gE:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.i([],[P.c])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.m(z,w)
v=H.f(z[w],"$isdJ")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asS:function(){return[P.c,P.c]},
$asI:function(){return[P.c,P.c]}},
iP:{"^":"iF;a",
i:function(a,b){return J.c8(this.a,H.u(b))},
gj:function(a){return this.gE(this).length}},
bp:{"^":"ic;a,b,c,$ti"},
bO:{"^":"bp;a,b,c,$ti"},
iR:{"^":"id;a,b,c,d,e,$ti",p:{
aH:function(a,b,c,d,e){var z=W.e6(new W.iS(c),W.ai)
if(z!=null&&!0)J.eM(a,b,z,!1)
return new W.iR(0,a,b,z,!1,[e])}}},
iS:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isai"))}},
bq:{"^":"b;a",
cL:function(a){var z,y
z=$.cG()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.T[y],W.ko())
for(y=0;y<12;++y)z.h(0,C.u[y],W.kp())}},
V:function(a){return $.eD().u(0,W.aS(a))},
S:function(a,b,c){var z,y,x
z=W.aS(a)
y=$.cG()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bU(x.$4(a,b,c,this))},
$isa8:1,
p:{
dM:function(a){var z,y
z=document.createElement("a")
y=new W.jv(z,window.location)
y=new W.bq(y)
y.cL(a)
return y},
mM:[function(a,b,c,d){H.f(a,"$isR")
H.u(b)
H.u(c)
H.f(d,"$isbq")
return!0},"$4","ko",16,0,12],
mN:[function(a,b,c,d){var z,y,x
H.f(a,"$isR")
H.u(b)
H.u(c)
z=H.f(d,"$isbq").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kp",16,0,12]}},
q:{"^":"b;$ti",
gw:function(a){return new W.da(a,this.gj(a),-1,[H.ba(this,a,"q",0)])}},
dq:{"^":"b;a",
V:function(a){return C.a.bj(this.a,new W.hD(a))},
S:function(a,b,c){return C.a.bj(this.a,new W.hC(a,b,c))},
$isa8:1},
hD:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isa8").V(this.a)}},
hC:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isa8").S(this.a,this.b,this.c)}},
jw:{"^":"b;",
cM:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aI(0,new W.jx())
y=b.aI(0,new W.jy())
this.b.H(0,z)
x=this.c
x.H(0,C.V)
x.H(0,y)},
V:function(a){return this.a.u(0,W.aS(a))},
S:["cp",function(a,b,c){var z,y
z=W.aS(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dc(c)
else if(y.u(0,"*::"+b))return this.d.dc(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isa8:1},
jx:{"^":"n:10;",
$1:function(a){return!C.a.u(C.u,H.u(a))}},
jy:{"^":"n:10;",
$1:function(a){return C.a.u(C.u,H.u(a))}},
jI:{"^":"jw;e,a,b,c,d",
S:function(a,b,c){if(this.cp(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c8(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
dX:function(){var z,y,x,w,v
z=P.c
y=P.cl(C.t,z)
x=H.p(C.t,0)
w=H.l(new W.jJ(),{func:1,ret:z,args:[x]})
v=H.i(["TEMPLATE"],[z])
y=new W.jI(y,P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
y.cM(null,new H.hm(C.t,w,[x,z]),v,null)
return y}}},
jJ:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
jG:{"^":"b;",
V:function(a){var z=J.A(a)
if(!!z.$isdu)return!1
z=!!z.$isG
if(z&&W.aS(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.i.ci(b,"on"))return!1
return this.V(a)},
$isa8:1},
da:{"^":"b;a,b,c,0d,$ti",
sb9:function(a){this.d=H.z(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb9(J.bd(this.a,z))
this.c=z
return!0}this.sb9(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isaU:1},
iJ:{"^":"b;a",$isK:1,$isdH:1,p:{
iK:function(a){if(a===window)return H.f(a,"$isdH")
else return new W.iJ(a)}}},
a8:{"^":"b;"},
jv:{"^":"b;a,b",$ismv:1},
e_:{"^":"b;a",
aQ:function(a){new W.jT(this).$2(a,null)},
a4:function(a,b){if(b==null)J.cO(a)
else J.bw(b,a)},
d5:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f6(a)
x=J.c8(y.gcT(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a4(t)}v="element unprintable"
try{v=J.bf(a)}catch(t){H.a4(t)}try{u=W.aS(a)
this.d4(H.f(a,"$isR"),b,z,v,u,H.f(y,"$isI"),H.u(x))}catch(t){if(H.a4(t) instanceof P.aD)throw t
else{this.a4(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d4:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.V(a)){this.a4(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a4(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gE(f)
y=H.i(z.slice(0),[H.p(z,0)])
for(x=f.gE(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.m(y,x)
v=y[x]
if(!this.a.S(a,J.fi(v),w.Y(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.Y(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.Y(z,v)
w.d_(z,v)}}if(!!J.A(a).$isdy)this.aQ(a.content)},
$islM:1},
jT:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d5(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f7(z)}catch(w){H.a4(w)
v=H.f(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bw(u,v)}else J.bw(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$ist")}}},
iI:{"^":"h+fJ;"},
iL:{"^":"h+o;"},
iM:{"^":"iL+q;"},
iN:{"^":"h+o;"},
iO:{"^":"iN+q;"},
iU:{"^":"h+o;"},
iV:{"^":"iU+q;"},
j7:{"^":"h+o;"},
j8:{"^":"j7+q;"},
jf:{"^":"h+S;"},
jg:{"^":"h+S;"},
jh:{"^":"h+o;"},
ji:{"^":"jh+q;"},
jj:{"^":"h+o;"},
jk:{"^":"jj+q;"},
jn:{"^":"h+o;"},
jo:{"^":"jn+q;"},
ju:{"^":"h+S;"},
dU:{"^":"K+o;"},
dV:{"^":"dU+q;"},
jz:{"^":"h+o;"},
jA:{"^":"jz+q;"},
jD:{"^":"h+S;"},
jK:{"^":"h+o;"},
jL:{"^":"jK+q;"},
dY:{"^":"K+o;"},
dZ:{"^":"dY+q;"},
jP:{"^":"h+o;"},
jQ:{"^":"jP+q;"},
jV:{"^":"h+o;"},
jW:{"^":"jV+q;"},
jX:{"^":"h+o;"},
jY:{"^":"jX+q;"},
jZ:{"^":"h+o;"},
k_:{"^":"jZ+q;"},
k0:{"^":"h+o;"},
k1:{"^":"k0+q;"},
k2:{"^":"h+o;"},
k3:{"^":"k2+q;"}}],["","",,P,{"^":"",
a_:function(a){var z,y,x,w,v
if(a==null)return
z=P.N(P.c,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.O)(y),++w){v=H.u(y[w])
z.h(0,v,a[v])}return z},
kf:function(a,b){var z={}
a.C(0,new P.kg(z))
return z},
d3:function(){var z=$.d2
if(z==null){z=J.c4(window.navigator.userAgent,"Opera",0)
$.d2=z}return z},
fO:function(){var z,y
z=$.d_
if(z!=null)return z
y=$.d0
if(y==null){y=J.c4(window.navigator.userAgent,"Firefox",0)
$.d0=y}if(y)z="-moz-"
else{y=$.d1
if(y==null){y=!P.d3()&&J.c4(window.navigator.userAgent,"Trident/",0)
$.d1=y}if(y)z="-ms-"
else z=P.d3()?"-o-":"-webkit-"}$.d_=z
return z},
kg:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aY:{"^":"b;P:a>,M:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.aL(b,"$isaY",[P.D],null)&&this.a==J.bA(b)&&this.b==b.gM(b)},
gv:function(a){var z,y,x
z=J.ag(this.a)
y=J.ag(this.b)
y=P.dN(P.dN(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jp:{"^":"b;"},
U:{"^":"jp;$ti"}}],["","",,P,{"^":"",fs:{"^":"h;",$isfs:1,"%":"SVGAnimatedLength"},l3:{"^":"G;0n:height=,0m:width=","%":"SVGFEBlendElement"},l4:{"^":"G;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},l5:{"^":"G;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},l6:{"^":"G;0n:height=,0m:width=","%":"SVGFECompositeElement"},l7:{"^":"G;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},l8:{"^":"G;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},l9:{"^":"G;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},la:{"^":"G;0n:height=,0m:width=","%":"SVGFEFloodElement"},lb:{"^":"G;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lc:{"^":"G;0n:height=,0m:width=","%":"SVGFEImageElement"},ld:{"^":"G;0n:height=,0m:width=","%":"SVGFEMergeElement"},le:{"^":"G;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lf:{"^":"G;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lg:{"^":"G;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lh:{"^":"G;0n:height=,0m:width=","%":"SVGFETileElement"},li:{"^":"G;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},ll:{"^":"G;0n:height=,0m:width=","%":"SVGFilterElement"},lm:{"^":"bi;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h2:{"^":"bi;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bi:{"^":"G;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lu:{"^":"bi;0n:height=,0m:width=","%":"SVGImageElement"},aW:{"^":"h;",$isaW:1,"%":"SVGLength"},lz:{"^":"ja;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.f(c,"$isaW")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aW]},
$isk:1,
$ask:function(){return[P.aW]},
$isa:1,
$asa:function(){return[P.aW]},
$asq:function(){return[P.aW]},
"%":"SVGLengthList"},lA:{"^":"G;0n:height=,0m:width=","%":"SVGMaskElement"},aX:{"^":"h;",$isaX:1,"%":"SVGNumber"},lN:{"^":"jm;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.f(c,"$isaX")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$aso:function(){return[P.aX]},
$isk:1,
$ask:function(){return[P.aX]},
$isa:1,
$asa:function(){return[P.aX]},
$asq:function(){return[P.aX]},
"%":"SVGNumberList"},lS:{"^":"G;0n:height=,0m:width=","%":"SVGPatternElement"},lU:{"^":"h;0j:length=","%":"SVGPointList"},lW:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},lX:{"^":"h2;0n:height=,0m:width=","%":"SVGRectElement"},du:{"^":"G;",$isdu:1,"%":"SVGScriptElement"},m8:{"^":"jF;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.u(c)
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$aso:function(){return[P.c]},
$isk:1,
$ask:function(){return[P.c]},
$isa:1,
$asa:function(){return[P.c]},
$asq:function(){return[P.c]},
"%":"SVGStringList"},G:{"^":"R;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.i([],[W.a8])
C.a.l(z,W.dM(null))
C.a.l(z,W.dX())
C.a.l(z,new W.jG())
c=new W.e_(new W.dq(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dn(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a3(w)
u=z.gaa(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isG:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m9:{"^":"bi;0n:height=,0m:width=","%":"SVGSVGElement"},b0:{"^":"h;",$isb0:1,"%":"SVGTransform"},mj:{"^":"jS;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return this.R(a,b)},
h:function(a,b,c){H.f(c,"$isb0")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
R:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b0]},
$isk:1,
$ask:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$asq:function(){return[P.b0]},
"%":"SVGTransformList"},mx:{"^":"bi;0n:height=,0m:width=","%":"SVGUseElement"},j9:{"^":"h+o;"},ja:{"^":"j9+q;"},jl:{"^":"h+o;"},jm:{"^":"jl+q;"},jE:{"^":"h+o;"},jF:{"^":"jE+q;"},jR:{"^":"h+o;"},jS:{"^":"jR+q;"}}],["","",,P,{"^":"",ad:{"^":"b;",$isk:1,
$ask:function(){return[P.X]},
$isa:1,
$asa:function(){return[P.X]},
$isio:1}}],["","",,P,{"^":"",kL:{"^":"h;0j:length=","%":"AudioBuffer"},kM:{"^":"iG;",
i:function(a,b){return P.a_(a.get(H.u(b)))},
C:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.c,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gE:function(a){var z=H.i([],[P.c])
this.C(a,new P.fu(z))
return z},
gj:function(a){return a.size},
$asS:function(){return[P.c,null]},
$isI:1,
$asI:function(){return[P.c,null]},
"%":"AudioParamMap"},fu:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kN:{"^":"K;0j:length=","%":"AudioTrackList"},fv:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lP:{"^":"fv;0j:length=","%":"OfflineAudioContext"},iG:{"^":"h+S;"}}],["","",,P,{"^":"",fy:{"^":"h;",$isfy:1,"%":"WebGLBuffer"},h1:{"^":"h;",$ish1:1,"%":"WebGLFramebuffer"},hS:{"^":"h;",$ishS:1,"%":"WebGLProgram"},lY:{"^":"h;",
bi:function(a,b){return a.activeTexture(b)},
bk:function(a,b,c){return a.attachShader(b,c)},
bl:function(a,b,c){return a.bindBuffer(b,c)},
bn:function(a,b,c){return a.bindFramebuffer(b,c)},
bo:function(a,b,c){return a.bindTexture(b,c)},
bp:function(a,b){return a.blendEquation(b)},
bq:function(a,b,c){return a.blendFunc(b,c)},
br:function(a,b,c,d){return a.bufferData(b,c,d)},
bs:function(a,b){return a.checkFramebufferStatus(b)},
bt:function(a,b){return a.clear(b)},
bu:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bv:function(a,b){return a.compileShader(b)},
bw:function(a){return a.createBuffer()},
bx:function(a){return a.createFramebuffer()},
by:function(a){return a.createProgram()},
bz:function(a,b){return a.createShader(b)},
bA:function(a){return a.createTexture()},
bC:function(a,b){return a.depthMask(b)},
bD:function(a,b){return a.disable(b)},
bE:function(a,b,c,d){return a.drawArrays(b,c,d)},
bF:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bG:function(a,b){return a.enable(b)},
bH:function(a,b){return a.enableVertexAttribArray(b)},
bJ:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ai:function(a){return P.a_(a.getContextAttributes())},
aJ:function(a){return a.getError()},
aK:function(a,b){return a.getProgramInfoLog(b)},
aL:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bT:function(a,b,c,d){return a.texParameterf(b,c,d)},
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
"%":"WebGLRenderingContext"},lZ:{"^":"h;",
df:function(a,b){return a.beginTransformFeedback(b)},
di:function(a,b){return a.bindVertexArray(b)},
dr:function(a){return a.createVertexArray()},
dt:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
du:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dv:function(a){return a.endTransformFeedback()},
dJ:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
dM:function(a,b,c,d){this.d8(a,b,H.w(c,"$isa",[P.c],"$asa"),d)
return},
d8:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dN:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bi:function(a,b){return a.activeTexture(b)},
bk:function(a,b,c){return a.attachShader(b,c)},
bl:function(a,b,c){return a.bindBuffer(b,c)},
bn:function(a,b,c){return a.bindFramebuffer(b,c)},
bo:function(a,b,c){return a.bindTexture(b,c)},
bp:function(a,b){return a.blendEquation(b)},
bq:function(a,b,c){return a.blendFunc(b,c)},
br:function(a,b,c,d){return a.bufferData(b,c,d)},
bs:function(a,b){return a.checkFramebufferStatus(b)},
bt:function(a,b){return a.clear(b)},
bu:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bv:function(a,b){return a.compileShader(b)},
bw:function(a){return a.createBuffer()},
bx:function(a){return a.createFramebuffer()},
by:function(a){return a.createProgram()},
bz:function(a,b){return a.createShader(b)},
bA:function(a){return a.createTexture()},
bC:function(a,b){return a.depthMask(b)},
bD:function(a,b){return a.disable(b)},
bE:function(a,b,c,d){return a.drawArrays(b,c,d)},
bF:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bG:function(a,b){return a.enable(b)},
bH:function(a,b){return a.enableVertexAttribArray(b)},
bJ:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ai:function(a){return P.a_(a.getContextAttributes())},
aJ:function(a){return a.getError()},
aK:function(a,b){return a.getProgramInfoLog(b)},
aL:function(a,b,c){return a.getProgramParameter(b,c)},
aN:function(a,b){return a.getShaderInfoLog(b)},
aO:function(a,b,c){return a.getShaderParameter(b,c)},
aP:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aR:function(a,b,c){return a.shaderSource(b,c)},
aS:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bT:function(a,b,c,d){return a.texParameterf(b,c,d)},
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
"%":"WebGL2RenderingContext"},i1:{"^":"h;",$isi1:1,"%":"WebGLShader"},ii:{"^":"h;",$isii:1,"%":"WebGLTexture"},iq:{"^":"h;",$isiq:1,"%":"WebGLUniformLocation"},iv:{"^":"h;",$isiv:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",m5:{"^":"jC;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.E(b,a,null,null,null))
return P.a_(this.cX(a,b))},
h:function(a,b,c){H.f(c,"$isI")
throw H.d(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
cX:function(a,b){return a.item(b)},
$aso:function(){return[[P.I,,,]]},
$isk:1,
$ask:function(){return[[P.I,,,]]},
$isa:1,
$asa:function(){return[[P.I,,,]]},
$asq:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},jB:{"^":"h+o;"},jC:{"^":"jB+q;"}}],["","",,G,{"^":"",
iz:function(a){var z,y,x,w
z=H.i(a.split("\n"),[P.c])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.m(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.a6(z,"\n")},
dK:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bz(a,b)
z.aR(a,y,c)
z.bv(a,y)
x=H.bU(z.aO(a,y,35713))
if(x!=null&&!x){w=z.aN(a,y)
P.aN("E:Compilation failed:")
P.aN("E:"+G.iz(c))
P.aN("E:Failure:")
P.aN(C.i.G("E:",w))
throw H.d(w)}return y},
db:function(a,b){var z,y,x
H.w(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.h.h(b,z,J.bA(a[y]))
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+1,J.c7(a[y]))
z+=2
if(y>=a.length)return H.m(a,y)
x=J.cM(a[y])
if(z>=b.length)return H.m(b,z)
b[z]=x}return b},
h_:function(a,b){var z,y
H.w(a,"$isa",[T.L],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.h.h(b,z,J.bA(a[y]))
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+1,J.c7(a[y]))}return b},
h0:function(a,b){var z,y,x,w
H.w(a,"$isa",[T.ay],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.h.h(b,z,J.bA(a[y]))
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+1,J.c7(a[y]))
x=z+2
if(y>=a.length)return H.m(a,y)
w=J.cM(a[y])
if(x>=b.length)return H.m(b,x)
b[x]=w
if(y>=a.length)return H.m(a,y)
C.h.h(b,z+3,J.f9(a[y]))}return b},
fZ:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.B]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.h(b,z,J.bd(a[y],0))
if(y>=a.length)return H.m(a,y)
C.n.h(b,z+1,J.bd(a[y],1))
if(y>=a.length)return H.m(a,y)
C.n.h(b,z+2,J.bd(a[y],2))
if(y>=a.length)return H.m(a,y)
C.n.h(b,z+3,J.bd(a[y],3))}return b},
j5:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.al(z,[H.p(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.B]],v=[P.X],u=[T.ay],t=[T.r],s=[T.L];y.t();){r=y.d
if(!x.ag(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ec>0)H.c1("I: "+r)
continue}q=z.i(0,r)
switch($.a5().i(0,r).a){case"vec2":b.a0(r,G.h_(H.bv(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.a0(r,G.db(H.bv(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.a0(r,G.h0(H.bv(q,"$isa",u,"$asa"),null),4)
break
case"float":b.a0(r,new Float32Array(H.bQ(H.bv(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.a0(r,G.fZ(H.bv(q,"$isa",w,"$asa"),null),4)
break}}},
de:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.c
w=P.N(x,P.b)
v=J.eX(z.a)
u=new G.hp(z,v,4,w,y,0,-1,P.N(x,P.ad),"meshdata:"+a,!1,!0)
x=G.db(c.d,null)
w.h(0,"aPosition",J.c5(z.a))
u.ch=x
u.aV("aPosition",x,3)
t=$.a5().i(0,"aPosition")
if(t==null)H.V("Unknown canonical aPosition")
s=y.i(0,"aPosition")
J.by(z.a,v)
z.bI(0,s,0)
z.c8(0,w.i(0,"aPosition"),s,t.aW(),5126,!1,0,0)
y=H.w(c.cv(),"$isa",[P.B],"$asa")
u.y=J.c5(z.a)
x=u.ch.length
if(x<768){u.sav(new Uint8Array(H.bQ(y)))
u.Q=5121}else if(x<196608){u.sav(new Uint16Array(H.bQ(y)))
u.Q=5123}else{u.sav(new Uint32Array(H.bQ(y)))
u.Q=5125}J.by(z.a,v)
y=u.y
x=u.cx
J.c2(z.a,34963,y)
J.cK(z.a,34963,x,35048)
G.j5(c,u)
return u},
bJ:{"^":"b;"},
ax:{"^":"bJ;d,a,b,c",
aX:function(){return this.d},
k:function(a){var z,y,x,w
z=H.i(["{"+new H.dC(H.kl(this)).k(0)+"}["+this.a+"]"],[P.c])
for(y=this.d,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.a6(z,"\n")}},
fz:{"^":"i7;"},
fB:{"^":"b;0a,b",
bI:function(a,b,c){J.f3(this.a,b)
if(c>0)J.fo(this.a,b,c)},
c8:function(a,b,c,d,e,f,g,h){J.c2(this.a,34962,b)
J.fp(this.a,c,d,e,!1,g,h)}},
dc:{"^":"b;a,b,c,d,e",
a_:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.c3(z.a,36160,y)
J.fq(z.a,b,c,d,e)
if(a!==0)J.eR(z.a,a)},
p:{
cf:function(a,b,c){var z,y,x,w,v
z=$.es()
y=G.dD(a,"frame::color",b,c,32856,z)
z=G.dD(a,"frame::depth",b,c,33190,z)
x=new G.dc(a,null,y,z,null)
w=J.eU(a.a)
x.b=w
J.c3(a.a,36160,w)
J.cL(a.a,36160,36064,3553,y.b,0)
J.cL(a.a,36160,36096,3553,z.b,0)
v=J.eQ(a.a,36160)
if(v!==36053)H.V("Error Incomplete Framebuffer: "+H.e(v))
J.c3(a.a,36160,null)
return x}}},
d9:{"^":"b;"},
bG:{"^":"b;a,b,c,d"},
dd:{"^":"b;a,b,c,d,e",
an:function(a){switch($.a5().i(0,a).a){case"vec2":this.e.h(0,a,H.i([],[T.L]))
break
case"vec3":this.e.h(0,a,H.i([],[T.r]))
break
case"vec4":this.e.h(0,a,H.i([],[T.ay]))
break
case"float":this.e.h(0,a,H.i([],[P.X]))
break
case"uvec4":this.e.h(0,a,H.i([],[[P.a,P.B]]))
break}},
cq:function(a,b){var z,y,x,w,v,u
z=[T.L]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.L(v))}},
cr:function(a,b){var z,y,x,w,v
z=[T.r]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.r(new Float32Array(3))
v.D(w)
z.l(y,v)}},
cs:function(a){var z,y,x,w,v
H.w(a,"$isa",[T.r],"$asa")
z=this.d
y=z.length
C.a.l(this.c,new G.bG(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.r(new Float32Array(3))
v.D(w)
C.a.l(z,v)}},
cv:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.i(y,[P.B])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.m(y,v)
u=y[v]
C.a.h(x,w,u.gdQ(u))
C.a.h(x,w+1,u.gdR(u))
C.a.h(x,w+2,u.gdS(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.O)(z),++v){t=z[v]
s=t.a
C.a.h(x,w,s)
C.a.h(x,w+1,t.b)
r=t.c
C.a.h(x,w+2,r)
C.a.h(x,w+3,s)
C.a.h(x,w+4,r)
C.a.h(x,w+5,t.d)
w+=6}return x},
cz:function(a,b){var z,y,x,w,v,u,t
z=H.i([],[T.L])
this.e.h(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
C.a.l(z,new T.L(t))}},
cw:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
C.a.l(z,new G.bG(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=H.i(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.c])
for(y=this.e,x=new H.al(y,[H.p(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a5().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a6(z," ")}},
dA:{"^":"b;a,b,c"},
dz:{"^":"b;a,b,c"},
hn:{"^":"ax;d,a,b,c"},
hp:{"^":"bJ;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sav:function(a){this.cx=H.w(a,"$isa",[P.B],"$asa")},
aV:function(a,b,c){var z,y
C.i.ar(a,0)
H.f(b,"$isad")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c2(z.a,34962,y)
J.cK(z.a,34962,b,35048)},
cA:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a0:function(a,b,c){var z,y,x,w,v
z=J.cH(a,0)===105
if(z&&this.z===0)this.z=C.b.al(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c5(x.a))
this.aV(a,b,c)
w=$.a5().i(0,a)
if(w==null)throw H.d("Unknown canonical "+a)
v=this.x.i(0,a)
J.by(x.a,this.e)
x.bI(0,v,z?1:0)
x.c8(0,y.i(0,a),v,w.aW(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.i(["Faces:"+(z==null?0:z.length)],[P.c])
for(z=this.cy,x=new H.al(z,[H.p(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a6(y,"  ")}},
hI:{"^":"ax;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ct:function(a,b){var z
if(typeof a!=="number")return a.dO()
if(typeof b!=="number")return H.aA(b)
z=a/b
if(this.z===z)return
this.z=z
this.aZ()},
aZ:function(){var z,y,x,w,v,u
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
aX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.r(new Float32Array(3))
u.J(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.D(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.A(t)
y=!!z.$isay
q=y?t.gaH(t):1
if(!!z.$isr){p=t.gP(t)
s=t.gM(t)
r=t.gX(t)
t=p}else if(y){p=t.gP(t)
s=t.gM(t)
r=t.gX(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.aA(t)
y=u[4]
if(typeof s!=="number")return H.aA(s)
x=u[8]
if(typeof r!=="number")return H.aA(r)
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
d.D(this.db)
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
v.h(0,"uPerspectiveViewMatrix",d)
return v}},
l1:{"^":"b;"},
hW:{"^":"bJ;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cD:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){t=z[u]
x.h(0,t,J.cN(w.a,v,t))}},
cH:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.i([],[P.c])
x=H.i([],[P.c])
for(y=new H.al(y,[H.p(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ag(0,w))C.a.l(x,w)}for(z=this.x,z=P.jc(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isI",[P.c,P.b],"$asI")
z=Date.now()
for(y=new H.al(b,[H.p(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cH(t,0)){case 117:if(w.ag(0,t)){s=b.i(0,t)
if(v.ag(0,t))H.c1("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.h(0,t,a)
r=$.a5().i(0,t)
if(r==null)H.V("unknown "+t)
q=w.i(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.M(s)
J.c9(x.a,q,s)}else if(!!J.A(s).$ish6)J.fm(x.a,q,s)
break
case"float":if(r.c===0){H.eb(s)
J.fk(x.a,q,s)}else if(!!J.A(s).$isad)J.fl(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.af(s,"$isam").a
J.cT(x.a,q,!1,t)}else if(!!J.A(s).$isad)J.cT(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=C.L.gdP(H.af(s,"$islB"))
J.cS(x.a,q,!1,t)}else if(!!J.A(s).$isad)J.cS(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cR(p,q,H.af(s,"$isay").a)
else J.cR(p,q,H.f(s,"$isad"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cQ(p,q,H.af(s,"$isr").a)
else J.cQ(p,q,H.f(s,"$isad"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cP(p,q,H.af(s,"$isL").a)
else J.cP(p,q,H.f(s,"$isad"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.aA(t)
J.cI(x.a,33984+t)
t=H.af(s,"$iscr").b
J.bx(x.a,3553,t)
t=this.ch
J.c9(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.G()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.aA(t)
J.cI(x.a,33984+t)
t=H.af(s,"$iscr").b
J.bx(x.a,34067,t)
t=this.ch
J.c9(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.G()
this.ch=t+1
break
default:H.c1("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.i(0,t)
switch(t){case"cDepthTest":t=J.aC(s,!0)
p=x.a
if(t)J.be(p,2929)
else J.c6(p,2929)
break
case"cStencilFunc":H.af(s,"$isdA")
t=s.a
p=x.a
if(t===1281)J.c6(p,2960)
else{J.be(p,2960)
p=s.b
o=s.c
J.ff(x.a,t,p,o)}break
case"cDepthWrite":H.bU(s)
J.eY(x.a,s)
break
case"cBlendEquation":H.af(s,"$isdz")
t=s.a
p=x.a
if(t===1281)J.c6(p,3042)
else{J.be(p,3042)
p=s.b
o=s.c
J.eP(x.a,p,o)
J.eO(x.a,t)}break}++u
break}}n=P.fT(0,0,0,Date.now()-new P.bE(z,!1).a,0,0)
""+u
n.k(0)},
cu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.ax],"$asa")
Date.now()
z=this.d
J.fn(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b3()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.O)(b),++x){w=b[x]
this.cK(w.a,w.aX())}y=this.Q
y.a5(0)
for(v=a.cy,v=new H.al(v,[H.p(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cH()
if(u.length!==0)P.aN("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.by(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cA()
s=a.Q
r=a.z
if(t)J.eN(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f1(q,y,v,s,0,r)
else J.f0(q,y,v,s,0)}else{s=z.a
if(r>1)J.f_(s,y,0,v,r)
else J.eZ(s,y,0,v)}if(t)J.f4(z.a)},
a3:function(a,b){return this.cu(a,b,null)},
p:{
bM:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.c
y=P.a0(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.eV(b.a)
t=G.dK(b.a,35633,x)
J.cJ(b.a,u,t)
s=G.dK(b.a,35632,w)
J.cJ(b.a,u,s)
if(v.length>0)J.fj(b.a,u,v,35980)
J.fe(b.a,u)
if(!H.bU(J.fd(b.a,u,35714)))H.V(J.fc(b.a,u))
z=new G.hW(b,c,d,u,P.cl(c.c,z),P.N(z,P.b),P.N(z,z),y,a,!1,!0)
z.cD(a,b,c,d)
return z}}},
C:{"^":"b;a,b,c",
aW:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
cn:{"^":"b;a,0b,c,d,e,f,r,x",
am:function(a){var z,y,x,w,v
H.w(a,"$isa",[P.c],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.O)(a),++w){v=a[w]
C.a.l(y,v)
x.h(0,v,this.r);++this.r}C.a.aj(y)},
a1:function(a){var z,y,x
H.w(a,"$isa",[P.c],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.O)(a),++x)C.a.l(y,a[x])
C.a.aj(y)},
a2:function(a){var z,y
H.w(a,"$isa",[P.c],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.aj(z)},
cF:function(a,b){this.b=this.ab(!0,H.w(a,"$isa",[P.c],"$asa"),b)},
aY:function(a){return this.cF(a,null)},
cE:function(a,b){this.b=this.ab(!1,H.w(a,"$isa",[P.c],"$asa"),b)},
ao:function(a){return this.cE(a,null)},
ab:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.c]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.i(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.O)(y),++u){t=y[u]
s=$.a5().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){q=z[u]
s=$.a5().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){q=z[u]
s=$.a5().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.O)(z),++u){q=z[u]
s=$.a5().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.l(w,"}")
return C.a.a6(w,"\n")},
p:{
bn:function(a){var z,y
z=P.c
y=[z]
return new G.cn(a,H.i([],y),H.i([],y),H.i([],y),H.i([],y),0,P.N(z,P.B))}}},
i7:{"^":"bJ;"},
ij:{"^":"b;a,b,c,d,e,f,r"},
cr:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
ip:{"^":"cr;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"},
p:{
dD:function(a,b,c,d,e,f){var z,y
z=J.eW(a.a)
J.bx(a.a,3553,z)
J.fh(a.a,3553,1,e,c,d)
y=f.e
if(y!==1)J.fg(a.a,3553,34046,y)
y=f.r
J.bB(a.a,3553,10240,y)
y=f.f
J.bB(a.a,3553,10241,y)
if(f.b){J.bB(a.a,3553,10242,33071)
J.bB(a.a,3553,10243,33071)}f.c
J.fb(a.a)
J.bx(a.a,3553,null)
return new G.ip(c,d,e,b,z,3553,a,f)}}}}],["","",,R,{"^":"",
je:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iQ("span",null),"$isR")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.w).aq(y,"float")
y.setProperty(x,"left","")
x=C.w.aq(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.q.F(z,v)}return z},
i9:{"^":"b;",
cG:function(a,b,c){var z,y
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
ia:{"^":"i9;e,f,a,b,c,d",
cJ:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.dL(y,2)+" fps"
C.q.ce(this.c,b)
x=C.b.O(30*C.x.dj(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isR")
v=w.style
u=""+x+"px"
v.height=u
C.q.F(z,w)},
cI:function(a){return this.cJ(a,"")}}}],["","",,V,{"^":"",
kC:function(a,b){var z,y,x,w,v,u
z=H.i([],[P.X])
for(y=b*b,x=0,w=0;w<a;++w){v=0.39894*Math.exp(-0.5*w*w/y)/b
C.a.l(z,v)
x+=v
if(w>0)x+=v}for(u="",w=0,y="";w<a;++w,u=", "){y+=u
if(w>=z.length)return H.m(z,w)
y+=H.e(z[w]/x)}return"float kernel["+a+"] = float["+a+"]("+(y.charCodeAt(0)==0?y:y)+");"}}],["","",,B,{"^":"",
i2:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=h+1
y=g+1
x=B.ik(B.hG(new B.i3(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=H.i([],[G.d9])
v=H.i([],[G.bG])
u=[T.r]
t=H.i([],u)
s=new G.dd(!1,w,v,t,P.N(P.c,[P.a,,]))
for(w=x.length,r=0;r<x.length;x.length===w||(0,H.O)(x),++r){q=x[r]
for(p=0;p<q.length;p+=2){v=H.f(q[p],"$isr")
v.toString
o=new T.r(new Float32Array(3))
o.D(v)
C.a.l(t,o)}}s.cw(z,y,!1)
s.cz(z,y)
s.an("aNormal")
for(w=x.length,v=s.e,r=0;r<x.length;x.length===w||(0,H.O)(x),++r){q=x[r]
for(p=0;t=q.length,p<t;p+=2){o=p+1
if(o>=t)return H.m(q,o)
o=H.f(q[o],"$isr")
n=H.w(v.i(0,"aNormal"),"$isa",u,"$asa")
o.toString
t=new T.r(new Float32Array(3))
t.D(o);(n&&C.a).l(n,t)}}return s},
ik:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[T.r]
H.w(a,"$isa",z,"$asa")
y=H.i([],[[P.a,T.r]])
x=new Float32Array(3)
w=new T.r(x)
v=new Float32Array(3)
u=new T.r(v)
t=new Float32Array(3)
s=new T.r(t)
for(r=b+1,q=0;p=a.length,q<p;q+=2){o=a[q]
n=q+1
if(n>=p)return H.m(a,n)
m=a[n]
l=H.i([],z)
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
t[2]=j*i}u.W(0)
s.W(0)
for(h=0;h<r;++h){g=h/b*2*3.141592653589793
f=c*Math.cos(g)
e=c*Math.sin(g)
w.D(o)
w.af(u,f)
w.af(s,e)
p=new T.r(new Float32Array(3))
p.D(w)
C.a.l(l,p)
x[2]=0
x[1]=0
x[0]=0
w.af(u,f)
w.af(s,e)
w.W(0)
p=new T.r(new Float32Array(3))
p.D(w)
C.a.l(l,p)}}return y},
hG:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
H.l(a,{func:1,ret:-1,args:[P.X,T.r]})
z=H.i([],[T.r])
y=new T.r(new Float32Array(3))
x=new T.r(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.aU(0,y)
t=new T.r(new Float32Array(3))
t.D(y)
C.a.l(z,t)
t=new T.r(new Float32Array(3))
t.D(x)
C.a.l(z,t)}return z},
i3:{"^":"n:24;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sP(0,y*v)
b.sM(0,y*u)
b.sX(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",hd:{"^":"b;a,b,c",
cB:function(a){var z,y
a=document
z=W.aV
y={func:1,ret:-1,args:[z]}
W.aH(a,"keydown",H.l(new D.hf(this),y),!1,z)
W.aH(a,"keyup",H.l(new D.hg(this),y),!1,z)},
p:{
he:function(a){var z=P.B
z=new D.hd(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.cB(a)
return z}}},hf:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaV")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},hg:{"^":"n:11;a",
$1:function(a){var z
H.f(a,"$isaV")
z=this.a
z.a.bR(0,a.which)
z.c.l(0,a.which)}},hs:{"^":"b;a,b,c,d,e,f,r,x",
cC:function(a){var z,y,x
if(a==null)a=document
z=J.j(a)
y=z.gbO(a)
x=H.p(y,0)
W.aH(y.a,y.b,H.l(new D.hu(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbN(a)
y=H.p(x,0)
W.aH(x.a,x.b,H.l(new D.hv(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbP(a)
x=H.p(y,0)
W.aH(y.a,y.b,H.l(new D.hw(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbQ(a)
x=H.p(z,0)
W.aH(z.a,z.b,H.l(new D.hx(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
ht:function(a){var z=P.B
z=new D.hs(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.cC(a)
return z}}},hu:{"^":"n:3;a",
$1:function(a){var z,y
H.f(a,"$isT")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.M(y.gbM(a).a)
z.x=H.M(y.gbM(a).b)
z.d=a.movementX
z.e=a.movementY}},hv:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isT")
a.preventDefault()
P.aN("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hw:{"^":"n:3;a",
$1:function(a){var z
H.f(a,"$isT")
a.preventDefault()
z=this.a
z.a.bR(0,a.button)
z.c.l(0,a.button)}},hx:{"^":"n:25;a",
$1:function(a){H.f(a,"$isaG")
a.preventDefault()
this.a.f=H.M(C.ac.gds(a))}},hF:{"^":"fz;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bZ:function(a){var z,y
z=C.h.dw(H.w(a,"$isk",[P.b],"$ask"),0,new A.kn(),P.B)
if(typeof z!=="number")return H.aA(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kn:{"^":"n:26;",
$2:function(a,b){var z,y
H.M(a)
z=J.ag(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",am:{"^":"b;a",
D:function(a){var z,y
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
k:function(a){return"[0] "+this.a7(0).k(0)+"\n[1] "+this.a7(1).k(0)+"\n[2] "+this.a7(2).k(0)+"\n[3] "+this.a7(3).k(0)+"\n"},
i:function(a,b){var z=this.a
if(b>=16)return H.m(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.am){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
a7:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.m(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.m(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.m(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.m(y,x)
z[3]=y[x]
return new T.ay(z)},
Z:function(){var z=this.a
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
z[15]=1}},L:{"^":"b;a",
N:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.L){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.m(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gP:function(a){return this.a[0]},
gM:function(a){return this.a[1]}},r:{"^":"b;a",
J:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
D:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.m(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbK:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
W:function(a){var z,y,x
z=Math.sqrt(this.gbK())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aD:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bB:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.r(new Float32Array(3))
z.J(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
af:function(a,b){var z,y
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
sP:function(a,b){this.a[0]=b
return b},
sM:function(a,b){this.a[1]=b
return b},
sX:function(a,b){this.a[2]=b
return b},
gP:function(a){return this.a[0]},
gM:function(a){return this.a[1]},
gX:function(a){return this.a[2]},
p:{
iu:function(a,b,c){var z=new T.r(new Float32Array(3))
z.J(a,b,c)
return z}}},ay:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ay){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.bZ(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.m(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gP:function(a){return this.a[0]},
gM:function(a){return this.a[1]},
gX:function(a){return this.a[2]},
gaH:function(a){return this.a[3]}}}],["","",,Q,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z={}
y=document
x=C.j.cc(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ia(0,0,x,w,y.createElement("div"),R.je("blue","gray",90,30))
u.cG(x,"blue","gray")
t=H.f(C.j.aF(y,"#webgl-canvas"),"$iscc")
s=new G.fB(t)
y=P.c
x=P.b
v=(t&&C.H).cb(t,"webgl2",P.dk(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.V(P.d8('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.fa(v))
if($.ec>0)P.aN("I: "+r)
J.eS(v,0,0,0,1)
J.be(v,2929)
J.be(v,2884)
v=new Float32Array(3)
r=D.he(null)
q=D.ht(t)
p=new T.am(new Float32Array(16))
p.Z()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hF(165,0,0,0,new T.r(v),-0.02,r,q,p,new T.r(o),new T.r(n),new T.r(m),new T.r(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.am(new Float32Array(16))
v.Z()
r=new T.am(new Float32Array(16))
r.Z()
k=new G.hI(l,50,1,0.1,1000,v,r,new T.am(new Float32Array(16)),P.N(y,x),"perspective",!1,!0)
k.aZ()
j=t.clientWidth
i=t.clientHeight
t.width=j
t.height=i
k.ct(j,i)
h=G.cf(s,j,i)
v=$.eJ()
r=[y]
q=P.B
p=new G.cn("BlackPerlinNoiseColor F",H.i([],r),H.i([],r),H.i([],r),H.i([],r),0,P.N(y,q))
p.a2(H.i(["vNormal"],r))
p.a1(H.i(["uTime","uTransformationMatrix"],r))
p.b=p.ab(!1,H.w(H.i(["#define BLACK 1","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],r),"$isa",r,"$asa"),null)
g=G.bM("perlin",s,v,p)
p=P.N(y,x)
p.h(0,"cDepthTest",!0)
p.h(0,"cDepthWrite",!0)
p.h(0,"cBlendEquation",$.en())
p.h(0,"cStencilFunc",$.er())
v=new T.am(new Float32Array(16))
v.Z()
p.h(0,"uTransformationMatrix",v)
v=new T.am(new Float32Array(16))
v.Z()
p.h(0,"uModelMatrix",v)
f=G.de("torusknot",g,B.i2(!0,!0,1,2,3,20,128,16,4,!1))
if(typeof j!=="number")return j.al()
v=C.b.O(j,2)
if(typeof i!=="number")return i.al()
o=C.b.O(i,2)
n=G.cf(s,v,o)
m=G.cf(s,v,o)
e=new Q.fx(6,j,i,v,o,h,n,m,new G.dc(s,null,null,null,null))
e.z=G.bM("highpass",s,$.eF(),$.eI())
o=$.eK()
d=V.kC(6,6)
q=new G.cn("BloomPassF",H.i([],r),H.i([],r),H.i([],r),H.i([],r),0,P.N(y,q))
q.a2(H.i(["vTexUV"],r))
q.a1(H.i(["uDirection","uTexture"],r))
q.b=q.ab(!1,H.w(H.i([d,"void main() {\n    vec2 invSize = 1.0 / vec2(textureSize(uTexture, 0));\n    vec3 sum = texture(uTexture, vTexUV).rgb * kernel[0];\n    for (int i = 1; i < kernel.length(); i++) {\n        vec2 offset = uDirection * invSize * float(i);\n        sum += texture(uTexture, vTexUV + offset).rgb * kernel[i];\n        sum += texture(uTexture, vTexUV - offset).rgb * kernel[i];\n    }\n    oFragColor = vec4(sum, 1.0);\n}\n"],r),"$isa",r,"$asa"),null)
e.Q=G.bM("bloom",s,o,q)
o=G.bM("bloom",s,o,$.eE())
e.ch=o
v=new T.r(new Float32Array(3))
v.J(-1,-1,0)
r=new T.r(new Float32Array(3))
r.J(1,-1,0)
q=new T.r(new Float32Array(3))
q.J(1,1,0)
c=new T.r(new Float32Array(3))
c.J(-1,1,0)
b=[T.r]
a=H.i([v,r,q,c],b)
v=new T.L(new Float32Array(2))
v.N(0,0)
r=new T.L(new Float32Array(2))
r.N(1,0)
q=new T.L(new Float32Array(2))
q.N(1,1)
c=new T.L(new Float32Array(2))
c.N(0,1)
a0=H.i([v,r,q,c],[T.L])
a1=new T.r(new Float32Array(3))
a1.J(0,0,1)
a2=H.i([a1,a1,a1,a1],b)
a3=new G.dd(!1,H.i([],[G.d9]),H.i([],[G.bG]),H.i([],b),P.N(y,[P.a,,]))
a3.an("aTexUV")
a3.cs(a)
a3.cq("aTexUV",a0)
a3.an("aNormal")
a3.cr("aNormal",a2)
e.dy=G.de("quad",o,a3)
v=P.N(y,x)
r=new T.L(new Float32Array(2))
r.N(0.65,0.66)
v.h(0,"uRange",r)
v.h(0,"uColorAlpha",new T.ay(new Float32Array(4)))
r=h.c
v.h(0,"uTexture",r)
e.cx=new G.ax(v,"uniformsHighPass",!1,!0)
v=P.N(y,x)
q=new T.L(new Float32Array(2))
q.N(1.5,0)
v.h(0,"uDirection",q)
m=m.c
v.h(0,"uTexture",m)
e.cy=new G.ax(v,"Bloom Horizontal",!1,!0)
v=P.N(y,x)
q=new T.L(new Float32Array(2))
q.N(0,1.5)
v.h(0,"uDirection",q)
v.h(0,"uTexture",n.c)
e.db=new G.ax(v,"Bloom Vertical",!1,!0)
x=P.N(y,x)
x.h(0,"uTexture",r)
x.h(0,"uScale",0.6)
x.h(0,"uColor",$.eo())
x.h(0,"uTexture2",m)
e.dx=new G.ax(x,"uniformApply",!1,!0)
z.a=0
new Q.kA(z,l,new G.hn(p,"mat",!1,!0),h,j,i,g,f,k,e,u).$1(0)},
fx:{"^":"b;a,aH:b>,c,d,e,f,r,x,y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy"},
kA:{"^":"n:27;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cC(b2)
if(typeof b2!=="number")return b2.aT()
z=this.a
z.a=b2+0
y=this.b
y.go+=0.01
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.a9()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.a9()
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
if(typeof v!=="number")return v.a9()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.dk(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=y.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=y.k2
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
p=q[12]
o=q[13]
n=q[14]
m=new T.r(new Float32Array(3))
m.J(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
u=new Float32Array(3)
l=new T.r(u)
l.D(v)
l.aU(0,t)
l.W(0)
k=m.bB(l)
k.W(0)
j=l.bB(k)
j.W(0)
t=k.aD(v)
r=j.aD(v)
v=l.aD(v)
i=k.a
h=i[0]
g=j.a
f=g[0]
e=u[0]
d=i[1]
c=g[1]
b=u[1]
i=i[2]
g=g[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=g
q[8]=i
q[7]=0
q[6]=b
q[5]=c
q[4]=d
q[3]=0
q[2]=e
q[1]=f
q[0]=h
q[12]=p
q[13]=o
q[14]=n
h=y.f
f=h.a
f[0]=q[2]
f[1]=q[6]
f[2]=q[10]
y=-y.k1
a=Math.sqrt(h.gbK())
p=f[0]/a
o=f[1]/a
n=f[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=p*p*a2+a0
y=n*a1
a4=p*o*a2-y
f=o*a1
a5=p*n*a2+f
a6=o*p*a2+y
a7=o*o*a2+a0
y=p*a1
a8=o*n*a2-y
a9=n*p*a2-f
b0=n*o*a2+y
b1=n*n*a2+a0
y=q[0]
f=q[4]
h=q[8]
e=q[1]
d=q[5]
c=q[9]
b=q[2]
i=q[6]
g=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a3+f*a6+h*a9
q[1]=e*a3+d*a6+c*a9
q[2]=b*a3+i*a6+g*a9
q[3]=u*a3+t*a6+r*a9
q[4]=y*a4+f*a7+h*b0
q[5]=e*a4+d*a7+c*b0
q[6]=b*a4+i*a7+g*b0
q[7]=u*a4+t*a7+r*b0
q[8]=y*a5+f*a8+h*b1
q[9]=e*a5+d*a8+c*b1
q[10]=b*a5+i*a8+g*b1
q[11]=u*a5+t*a8+r*b1
w.c.a5(0)
w.b.a5(0)
x.e=0
x.d=0
x.f=0
x.c.a5(0)
x.b.a5(0)
x=this.c
x.d.h(0,"uTime",b2/1000)
this.d.a_(17664,0,0,this.e,this.f)
w=[G.ax]
this.r.a3(this.x,H.i([this.y,x],w))
x=this.z
r=$.eH().valueAsNumber
if(typeof r!=="number")return r.a9()
t=$.eG().valueAsNumber
if(typeof t!=="number")return t.a9()
u=x.x
q=x.d
g=x.e
u.a_(17664,0,0,q,g)
i=x.cx
y=new T.L(new Float32Array(2))
y.N(r,r+0.01)
i.d.h(0,"uRange",y)
x.z.a3(x.dy,H.i([x.cx],w))
x.r.a_(17664,0,0,q,g)
x.Q.a3(x.dy,H.i([x.cy],w))
u.a_(17664,0,0,q,g)
x.Q.a3(x.dy,H.i([x.db],w))
x.y.a_(17664,0,0,x.b,x.c)
x.dx.d.h(0,"uScale",t)
x.ch.a3(x.dy,H.i([x.dx],w))
C.ad.gdd(window).bV(this,-1)
this.Q.cI(z.a)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.df.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.dh.prototype
if(typeof a=="boolean")return J.hb.prototype
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.b9=function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.ed=function(a){if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.kj=function(a){if(typeof a=="number")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.kk=function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.ee=function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.b)return a
return J.bY(a)}
J.bX=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b1.prototype
return a}
J.aC=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.a6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kj(a).T(a,b)}
J.bd=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kx(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b9(a).i(a,b)}
J.cH=function(a,b){return J.ee(a).ar(a,b)}
J.bw=function(a,b){return J.j(a).d0(a,b)}
J.eL=function(a,b,c){return J.j(a).d1(a,b,c)}
J.cI=function(a,b){return J.j(a).bi(a,b)}
J.eM=function(a,b,c,d){return J.j(a).d9(a,b,c,d)}
J.cJ=function(a,b,c){return J.j(a).bk(a,b,c)}
J.eN=function(a,b){return J.j(a).df(a,b)}
J.c2=function(a,b,c){return J.j(a).bl(a,b,c)}
J.c3=function(a,b,c){return J.j(a).bn(a,b,c)}
J.bx=function(a,b,c){return J.j(a).bo(a,b,c)}
J.by=function(a,b){return J.j(a).di(a,b)}
J.eO=function(a,b){return J.j(a).bp(a,b)}
J.eP=function(a,b,c){return J.j(a).bq(a,b,c)}
J.cK=function(a,b,c,d){return J.j(a).br(a,b,c,d)}
J.eQ=function(a,b){return J.j(a).bs(a,b)}
J.eR=function(a,b){return J.j(a).bt(a,b)}
J.eS=function(a,b,c,d,e){return J.j(a).bu(a,b,c,d,e)}
J.eT=function(a,b){return J.kk(a).K(a,b)}
J.c4=function(a,b,c){return J.b9(a).dl(a,b,c)}
J.c5=function(a){return J.j(a).bw(a)}
J.eU=function(a){return J.j(a).bx(a)}
J.eV=function(a){return J.j(a).by(a)}
J.eW=function(a){return J.j(a).bA(a)}
J.eX=function(a){return J.j(a).dr(a)}
J.eY=function(a,b){return J.j(a).bC(a,b)}
J.c6=function(a,b){return J.j(a).bD(a,b)}
J.eZ=function(a,b,c,d){return J.j(a).bE(a,b,c,d)}
J.f_=function(a,b,c,d,e){return J.j(a).dt(a,b,c,d,e)}
J.f0=function(a,b,c,d,e){return J.j(a).bF(a,b,c,d,e)}
J.f1=function(a,b,c,d,e,f){return J.j(a).du(a,b,c,d,e,f)}
J.f2=function(a,b){return J.ed(a).q(a,b)}
J.be=function(a,b){return J.j(a).bG(a,b)}
J.f3=function(a,b){return J.j(a).bH(a,b)}
J.f4=function(a){return J.j(a).dv(a)}
J.f5=function(a,b){return J.j(a).C(a,b)}
J.cL=function(a,b,c,d,e,f){return J.j(a).bJ(a,b,c,d,e,f)}
J.f6=function(a){return J.j(a).gde(a)}
J.ag=function(a){return J.A(a).gv(a)}
J.bz=function(a){return J.ed(a).gw(a)}
J.aP=function(a){return J.b9(a).gj(a)}
J.f7=function(a){return J.j(a).gdD(a)}
J.f8=function(a){return J.j(a).gdI(a)}
J.f9=function(a){return J.bX(a).gaH(a)}
J.bA=function(a){return J.bX(a).gP(a)}
J.c7=function(a){return J.bX(a).gM(a)}
J.cM=function(a){return J.bX(a).gX(a)}
J.c8=function(a,b){return J.j(a).Y(a,b)}
J.fa=function(a){return J.j(a).ai(a)}
J.fb=function(a){return J.j(a).aJ(a)}
J.fc=function(a,b){return J.j(a).aK(a,b)}
J.fd=function(a,b,c){return J.j(a).aL(a,b,c)}
J.cN=function(a,b,c){return J.j(a).aP(a,b,c)}
J.fe=function(a,b){return J.j(a).bL(a,b)}
J.cO=function(a){return J.j(a).dE(a)}
J.ff=function(a,b,c,d){return J.j(a).aS(a,b,c,d)}
J.fg=function(a,b,c,d){return J.j(a).bT(a,b,c,d)}
J.bB=function(a,b,c,d){return J.j(a).bU(a,b,c,d)}
J.fh=function(a,b,c,d,e,f){return J.j(a).dJ(a,b,c,d,e,f)}
J.fi=function(a){return J.ee(a).dK(a)}
J.bf=function(a){return J.A(a).k(a)}
J.fj=function(a,b,c,d){return J.j(a).dM(a,b,c,d)}
J.fk=function(a,b,c){return J.j(a).bY(a,b,c)}
J.fl=function(a,b,c){return J.j(a).bZ(a,b,c)}
J.c9=function(a,b,c){return J.j(a).c_(a,b,c)}
J.fm=function(a,b,c){return J.j(a).c0(a,b,c)}
J.cP=function(a,b,c){return J.j(a).c1(a,b,c)}
J.cQ=function(a,b,c){return J.j(a).c2(a,b,c)}
J.cR=function(a,b,c){return J.j(a).c3(a,b,c)}
J.cS=function(a,b,c,d){return J.j(a).c4(a,b,c,d)}
J.cT=function(a,b,c,d){return J.j(a).c5(a,b,c,d)}
J.fn=function(a,b){return J.j(a).c6(a,b)}
J.fo=function(a,b,c){return J.j(a).dN(a,b,c)}
J.fp=function(a,b,c,d,e,f,g){return J.j(a).c7(a,b,c,d,e,f,g)}
J.fq=function(a,b,c,d,e){return J.j(a).c9(a,b,c,d,e)}
I.aM=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bC.prototype
C.H=W.cc.prototype
C.w=W.fI.prototype
C.q=W.fP.prototype
C.I=W.fR.prototype
C.J=W.h3.prototype
C.j=W.h4.prototype
C.K=J.h.prototype
C.a=J.bj.prototype
C.x=J.df.prototype
C.b=J.dg.prototype
C.L=J.dh.prototype
C.r=J.bk.prototype
C.i=J.bl.prototype
C.S=J.bm.prototype
C.h=H.hy.prototype
C.n=H.hA.prototype
C.W=W.hB.prototype
C.A=J.hJ.prototype
C.B=W.hT.prototype
C.G=W.ih.prototype
C.v=J.b1.prototype
C.ac=W.aG.prototype
C.ad=W.ix.prototype
C.e=new P.jq()
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
C.T=H.i(I.aM(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.c])
C.U=H.i(I.aM(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.c])
C.V=H.i(I.aM([]),[P.c])
C.t=H.i(I.aM(["bind","if","ref","repeat","syntax"]),[P.c])
C.u=H.i(I.aM(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.c])
C.X=new G.C("vec3","vertex btangents",0)
C.d=new G.C("vec3","",0)
C.Y=new G.C("vec4","delta from light",0)
C.o=new G.C("","",0)
C.C=new G.C("vec3","vertex coordinates",0)
C.Z=new G.C("vec3","vertex binormals",0)
C.D=new G.C("vec4","for wireframe",0)
C.a_=new G.C("vec4","per vertex color",0)
C.a0=new G.C("float","for normal maps",0)
C.k=new G.C("mat4","",0)
C.a2=new G.C("mat4","",4)
C.a1=new G.C("mat4","",128)
C.c=new G.C("float","",0)
C.a3=new G.C("float","",4)
C.a4=new G.C("float","depth for shadowmaps",0)
C.f=new G.C("sampler2D","",0)
C.a5=new G.C("float","for bump maps",0)
C.a6=new G.C("vec2","texture uvs",0)
C.a7=new G.C("float","time since program start in sec",0)
C.l=new G.C("vec2","",0)
C.a8=new G.C("samplerCube","",0)
C.m=new G.C("vec4","",0)
C.a9=new G.C("vec3","vertex normals",0)
C.aa=new G.C("sampler2DShadow","",0)
C.E=new G.C("vec3","per vertex color",0)
C.F=new G.C("mat3","",0)
C.ab=new G.C("vec3","vertex tangents",0)
$.a7=0
$.aQ=null
$.cW=null
$.ct=!1
$.eg=null
$.e7=null
$.el=null
$.bV=null
$.c_=null
$.cA=null
$.aJ=null
$.b3=null
$.b4=null
$.cu=!1
$.H=C.e
$.ac=null
$.ce=null
$.d6=null
$.d5=null
$.d2=null
$.d1=null
$.d0=null
$.d_=null
$.ec=0
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
I.$lazy(y,x,w)}})(["kW","eq",function(){return H.ef("_$dart_dartClosure")},"ly","cE",function(){return H.ef("_$dart_js")},"mk","et",function(){return H.a9(H.bN({
toString:function(){return"$receiver$"}}))},"ml","eu",function(){return H.a9(H.bN({$method$:null,
toString:function(){return"$receiver$"}}))},"mm","ev",function(){return H.a9(H.bN(null))},"mn","ew",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mq","ez",function(){return H.a9(H.bN(void 0))},"mr","eA",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mp","ey",function(){return H.a9(H.dB(null))},"mo","ex",function(){return H.a9(function(){try{null.$method$}catch(z){return z.message}}())},"mt","eC",function(){return H.a9(H.dB(void 0))},"ms","eB",function(){return H.a9(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mD","cF",function(){return P.iA()},"mT","bc",function(){return[]},"kT","ep",function(){return{}},"mK","eD",function(){return P.cl(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.c)},"mL","cG",function(){return P.N(P.c,P.bh)},"m6","er",function(){return new G.dA(1281,0,4294967295)},"kO","en",function(){return new G.dz(1281,1281,1281)},"mR","a5",function(){return P.dk(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.E,"aColorAlpha",C.a_,"aPosition",C.C,"aTexUV",C.a6,"aNormal",C.a9,"aBinormal",C.Z,"aCenter",C.D,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ab,"aBitangent",C.X,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.E,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.Y,"vCenter",C.D,"vDepth",C.a4,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.aa,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a8,"uAnimationTable",C.f,"uTime",C.a7,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a1,"uLightDescs",C.a2,"uLightCount",C.c,"uLightTypes",C.a3,"uBumpScale",C.a5,"uNormalScale",C.a0],P.c,G.C)},"mf","es",function(){var z=new G.ij(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"kR","eo",function(){return T.iu(1,1,1)},"n2","eK",function(){var z,y
z=G.bn("uv-passthru")
y=[P.c]
z.am(H.i(["aPosition","aTexUV"],y))
z.a2(H.i(["vTexUV"],y))
z.aY(H.i(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y))
return z},"mU","eE",function(){var z,y
z=G.bn("BloomPassF")
y=[P.c]
z.a2(H.i(["vTexUV"],y))
z.a1(H.i(["uTexture","uTexture2","uScale","uColor"],y))
z.ao(H.i(["void main() {\n\toFragColor = texture(uTexture, vTexUV) +\n\t                uScale *\n\t                vec4(uColor, 1.0) *\n\t                texture(uTexture2, vTexUV);\n}\n"],y))
return z},"mX","eF",function(){var z,y
z=G.bn("null")
y=[P.c]
z.am(H.i(["aPosition"],y))
z.aY(H.i(["gl_Position = vec4(aPosition, 1.0);"],y))
return z},"n0","eI",function(){var z,y
z=G.bn("LuminosityHighPassF")
y=[P.c]
z.a1(H.i(["uRange","uColorAlpha","uTexture"],y))
z.ao(H.i(["// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\nvoid main() {\n    vec4 color = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0);\n    float luma = RGB2Luma(color.rgb);\n    float alpha = smoothstep(uRange.x, uRange.y, luma);\n    oFragColor = mix(uColorAlpha, color, alpha );\n}\n "],y))
return z},"n1","eJ",function(){var z,y
z=G.bn("PerlinNoiseV")
y=[P.c]
z.am(H.i(["aPosition"],y))
z.a2(H.i(["vNormal"],y))
z.a1(H.i(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.ao(H.i(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"],y))
return z},"mZ","eH",function(){return H.f(C.j.aF(W.ea(),"#luminance"),"$iscg")},"mY","eG",function(){return H.f(C.j.aF(W.ea(),"#intensity"),"$iscg")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[P.c,,]},{func:1,ret:P.F,args:[W.T]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.c,args:[P.B]},{func:1,ret:P.Q,args:[W.a8]},{func:1,ret:P.Q,args:[P.c]},{func:1,ret:P.F,args:[W.aV]},{func:1,ret:P.Q,args:[W.R,P.c,P.c,W.bq]},{func:1,args:[,P.c]},{func:1,args:[P.c]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,],opt:[P.a1]},{func:1,ret:[P.aa,,],args:[,]},{func:1,ret:P.Q,args:[W.t]},{func:1,ret:-1,args:[P.c,P.c]},{func:1,ret:P.F,args:[P.D]},{func:1,args:[W.ai]},{func:1,ret:P.c,args:[P.c]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:-1,args:[P.X,T.r]},{func:1,ret:P.F,args:[W.aG]},{func:1,ret:P.B,args:[P.B,P.b]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.kH(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.ei,[])
else Q.ei([])})})()
//# sourceMappingURL=bloom.dart.js.map
