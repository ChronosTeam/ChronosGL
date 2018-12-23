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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bd=function(){}
var dart=[["","",,H,{"^":"",lT:{"^":"c;a"}}],["","",,J,{"^":"",
cD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c0:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cC==null){H.kR()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.dN("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cG()]
if(v!=null)return v
v=H.kW(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cG(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
f:{"^":"c;",
D:function(a,b){return a===b},
gA:function(a){return H.b2(a)},
k:["cE",function(a){return"Instance of '"+H.b3(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hv:{"^":"f;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isO:1},
dl:{"^":"f;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isG:1},
cl:{"^":"f;",
gA:function(a){return 0},
k:["cG",function(a){return String(a)}]},
i2:{"^":"cl;"},
b6:{"^":"cl;"},
bp:{"^":"cl;",
k:function(a){var z=a[$.ey()]
if(z==null)return this.cG(a)
return"JavaScript function for "+H.d(J.bi(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbk:1},
bm:{"^":"f;$ti",
l:function(a,b){H.z(b,H.q(a,0))
if(!!a.fixed$length)H.U(P.y("add"))
a.push(b)},
G:function(a,b){var z,y
H.t(b,"$isi",[H.q(a,0)],"$asi")
if(!!a.fixed$length)H.U(P.y("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.P)(b),++y)a.push(b[y])},
a5:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.d(a[y]))
return z.join(b)},
aY:function(a,b){return H.dD(a,b,null,H.q(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
bu:function(a,b){var z,y
H.m(b,{func:1,ret:P.O,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.b(P.am(a))}return!1},
cw:function(a,b){if(!!a.immutable$list)H.U(P.y("sort"))
H.it(a,J.kq(),H.q(a,0))},
al:function(a){return this.cw(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aH(a[z],b))return!0
return!1},
k:function(a){return P.cj(a,"[","]")},
gB:function(a){return new J.fF(a,a.length,0,[H.q(a,0)])},
gA:function(a){return H.b2(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.bc(a,b))
return a[b]},
i:function(a,b,c){H.z(c,H.q(a,0))
if(!!a.immutable$list)H.U(P.y("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bc(a,b))
a[b]=c},
$isw:1,
$asw:I.bd,
$isi:1,
$isa:1,
p:{
hu:function(a,b){return J.ck(H.l(a,[b]))},
ck:function(a){H.bx(a)
a.fixed$length=Array
return a},
lR:[function(a,b){return J.f0(H.eq(a,"$isV"),H.eq(b,"$isV"))},"$2","kq",8,0,27]}},
lS:{"^":"bm;$ti"},
fF:{"^":"c;a,b,c,0d,$ti",
sb9:function(a){this.d=H.z(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.P(z))
x=this.c
if(x>=y){this.sb9(null)
return!1}this.sb9(z[x]);++this.c
return!0},
$isaY:1},
bn:{"^":"f;",
N:function(a,b){var z
H.cE(b)
if(typeof b!=="number")throw H.b(H.ba(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gag(b)
if(this.gag(a)===z)return 0
if(this.gag(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gag:function(a){return a===0?1/a<0:a<0},
c9:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.y(""+a+".toInt()"))},
dK:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.y(""+a+".ceil()"))},
dL:function(a,b,c){if(this.N(b,c)>0)throw H.b(H.ba(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
ec:function(a,b){var z
if(b>20)throw H.b(P.av(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gag(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
cI:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.br(a,b)},
E:function(a,b){return(a|0)===a?a/b|0:this.br(a,b)},
br:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.y("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
bp:function(a,b){var z
if(a>0)z=this.du(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
du:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.b(H.ba(b))
return a>b},
$isV:1,
$asV:function(){return[P.F]},
$isa3:1,
$isF:1},
dk:{"^":"bn;",$isC:1},
dj:{"^":"bn;"},
bo:{"^":"f;",
ar:function(a,b){if(b>=a.length)throw H.b(H.bc(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.v(b)
if(typeof b!=="string")throw H.b(P.d_(b,null,null))
return a+b},
cA:function(a,b,c){var z
if(c>a.length)throw H.b(P.av(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cz:function(a,b){return this.cA(a,b,0)},
cD:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.bL(b,null,null))
if(b>c)throw H.b(P.bL(b,null,null))
if(c>a.length)throw H.b(P.bL(c,null,null))
return a.substring(b,c)},
cC:function(a,b){return this.cD(a,b,null)},
eb:function(a){return a.toLowerCase()},
dM:function(a,b,c){if(c>a.length)throw H.b(P.av(c,0,a.length,null,null))
return H.l1(a,b,c)},
N:function(a,b){var z
H.v(b)
if(typeof b!=="string")throw H.b(H.ba(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.b(H.bc(a,b))
return a[b]},
$isw:1,
$asw:I.bd,
$isV:1,
$asV:function(){return[P.e]},
$isi0:1,
$ise:1}}],["","",,H,{"^":"",
hr:function(){return new P.bN("No element")},
ht:function(){return new P.bN("Too many elements")},
hs:function(){return new P.bN("Too few elements")},
it:function(a,b,c){H.t(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.C,args:[c,c]})
H.bs(a,0,J.ae(a)-1,b,c)},
bs:function(a,b,c,d,e){H.t(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.is(a,b,c,d,e)
else H.ir(a,b,c,d,e)},
is:function(a,b,c,d,e){var z,y,x,w,v
H.t(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.C,args:[e,e]})
for(z=b+1,y=J.aR(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a7(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
ir:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.t(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.C,args:[a2,a2]})
z=C.b.E(a0-b+1,6)
y=b+z
x=a0-z
w=C.b.E(b+a0,2)
v=w-z
u=w+z
t=J.aR(a)
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
if(J.aH(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a7()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.X()
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
if(typeof e!=="number")return e.a7()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.X()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.X()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a7()
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
H.bs(a,b,m-2,a1,a2)
H.bs(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aH(a1.$2(t.h(a,m),r),0);)++m
for(;J.aH(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a7()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bs(a,m,l,a1,a2)}else H.bs(a,m,l,a1,a2)},
da:{"^":"i;"},
bq:{"^":"da;$ti",
gB:function(a){return new H.dq(this,this.gj(this),0,[H.cB(this,"bq",0)])},
aK:function(a,b){return this.cF(0,H.m(b,{func:1,ret:P.O,args:[H.cB(this,"bq",0)]}))}},
iD:{"^":"bq;a,b,c,$ti",
gd9:function(){var z=J.ae(this.a)
return z},
gdv:function(){var z,y
z=J.ae(this.a)
y=this.b
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.ae(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdv()+b
if(b>=0){y=this.gd9()
if(typeof y!=="number")return H.aj(y)
y=z>=y}else y=!0
if(y)throw H.b(P.E(b,this,"index",null,null))
return J.cP(this.a,z)},
ea:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.aR(y)
w=x.gj(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.l(u,this.$ti)
for(s=0;s<v;++s){C.a.i(t,s,x.q(y,z+s))
if(x.gj(y)<w)throw H.b(P.am(this))}return t},
p:{
dD:function(a,b,c,d){return new H.iD(a,b,c,[d])}}},
dq:{"^":"c;a,b,c,0d,$ti",
sba:function(a){this.d=H.z(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aR(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.am(z))
w=this.c
if(w>=x){this.sba(null)
return!1}this.sba(y.q(z,w));++this.c
return!0},
$isaY:1},
hH:{"^":"bq;a,b,$ti",
gj:function(a){return J.ae(this.a)},
q:function(a,b){return this.b.$1(J.cP(this.a,b))},
$asbq:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dO:{"^":"i;a,b,$ti",
gB:function(a){return new H.iP(J.bD(this.a),this.b,this.$ti)}},
iP:{"^":"aY;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gC(z)))return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bJ:{"^":"c;$ti"}}],["","",,H,{"^":"",
aG:function(a){var z,y
z=H.v(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kJ:function(a){return init.types[H.M(a)]},
kU:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isx},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bi(a)
if(typeof z!=="string")throw H.b(H.ba(a))
return z},
b2:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b3:function(a){return H.i3(a)+H.bU(H.ai(a),0,null)},
i3:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isb6){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aG(w.length>1&&C.i.ar(w,0)===36?C.i.cC(w,1):w)},
aK:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ia:function(a){var z=H.aK(a).getFullYear()+0
return z},
i8:function(a){var z=H.aK(a).getMonth()+1
return z},
i4:function(a){var z=H.aK(a).getDate()+0
return z},
i5:function(a){var z=H.aK(a).getHours()+0
return z},
i7:function(a){var z=H.aK(a).getMinutes()+0
return z},
i9:function(a){var z=H.aK(a).getSeconds()+0
return z},
i6:function(a){var z=H.aK(a).getMilliseconds()+0
return z},
aj:function(a){throw H.b(H.ba(a))},
k:function(a,b){if(a==null)J.ae(a)
throw H.b(H.bc(a,b))},
bc:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.M(J.ae(a))
if(!(b<0)){if(typeof z!=="number")return H.aj(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bL(b,"index",null)},
ba:function(a){return new P.aJ(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.dw()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.et})
z.name=""}else z.toString=H.et
return z},
et:function(){return J.bi(this.dartException)},
U:function(a){throw H.b(a)},
P:function(a){throw H.b(P.am(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l3(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bp(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cm(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dv(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eD()
u=$.eE()
t=$.eF()
s=$.eG()
r=$.eJ()
q=$.eK()
p=$.eI()
$.eH()
o=$.eM()
n=$.eL()
m=v.L(y)
if(m!=null)return z.$1(H.cm(H.v(y),m))
else{m=u.L(y)
if(m!=null){m.method="call"
return z.$1(H.cm(H.v(y),m))}else{m=t.L(y)
if(m==null){m=s.L(y)
if(m==null){m=r.L(y)
if(m==null){m=q.L(y)
if(m==null){m=p.L(y)
if(m==null){m=s.L(y)
if(m==null){m=o.L(y)
if(m==null){m=n.L(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dv(H.v(y),m))}}return z.$1(new H.iM(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dB()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dB()
return a},
be:function(a){var z
if(a==null)return new H.e3(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e3(a)},
kF:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kT:function(a,b,c,d,e,f){H.h(a,"$isbk")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.de("Unsupported number of arguments for wrapped closure"))},
bb:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kT)
a.$identity=z
return z},
fR:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.ih(z).r}else x=d
w=e?Object.create(new H.iv().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a8
if(typeof u!=="number")return u.J()
$.a8=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d4(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kJ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d2:H.ce
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
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
fO:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d4:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fQ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fO(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.J()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aU
if(v==null){v=H.bG("self")
$.aU=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.J()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aU
if(v==null){v=H.bG("self")
$.aU=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fP:function(a,b,c,d){var z,y
z=H.ce
y=H.d2
switch(b?-1:a){case 0:throw H.b(H.il("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fQ:function(a,b){var z,y,x,w,v,u,t,s
z=$.aU
if(z==null){z=H.bG("self")
$.aU=z}y=$.d1
if(y==null){y=H.bG("receiver")
$.d1=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fP(w,!u,x,b)
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
cy:function(a,b,c,d,e,f,g){return H.fR(a,b,H.M(c),d,!!e,!!f,g)},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a1(a,"String"))},
ej:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a1(a,"double"))},
cE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a1(a,"num"))},
bX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a1(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a1(a,"int"))},
cF:function(a,b){throw H.b(H.a1(a,H.aG(H.v(b).substring(3))))},
l_:function(a,b){throw H.b(H.d3(a,H.aG(H.v(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.cF(a,b)},
ak:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.l_(a,b)},
eq:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.cF(a,b)},
bx:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.b(H.a1(a,"List<dynamic>"))},
kV:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.cF(a,b)},
cz:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
bw:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cz(J.A(a))
if(z==null)return!1
return H.ea(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.cu)return a
$.cu=!0
try{if(H.bw(a,b))return a
z=H.by(b)
y=H.a1(a,z)
throw H.b(y)}finally{$.cu=!1}},
bZ:function(a,b){if(a!=null&&!H.cx(a,b))H.U(H.a1(a,H.by(b)))
return a},
ee:function(a){var z,y
z=J.A(a)
if(!!z.$iso){y=H.cz(z)
if(y!=null)return H.by(y)
return"Closure"}return H.b3(a)},
l2:function(a){throw H.b(new P.fY(H.v(a)))},
em:function(a){return init.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
ai:function(a){if(a==null)return
return a.$ti},
nn:function(a,b,c){return H.aT(a["$as"+H.d(c)],H.ai(b))},
a4:function(a,b,c,d){var z
H.v(c)
H.M(d)
z=H.aT(a["$as"+H.d(c)],H.ai(b))
return z==null?null:z[d]},
cB:function(a,b,c){var z
H.v(b)
H.M(c)
z=H.aT(a["$as"+H.d(b)],H.ai(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.M(b)
z=H.ai(a)
return z==null?null:z[b]},
by:function(a){return H.aD(a,null)},
aD:function(a,b){var z,y
H.t(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aG(a[0].builtin$cls)+H.bU(a,1,b)
if(typeof a=="function")return H.aG(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.d(b[y])}if('func' in a)return H.kp(a,b)
if('futureOr' in a)return"FutureOr<"+H.aD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.t(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.l([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.J(t,b[r])
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
for(z=H.kE(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.v(z[l])
n=n+m+H.aD(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bU:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cr("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aD(u,c)}return"<"+z.k(0)+">"},
kI:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$iso){y=H.cz(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ai(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aE:function(a,b,c,d){var z,y
H.v(b)
H.bx(c)
H.v(d)
if(a==null)return!1
z=H.ai(a)
y=J.A(a)
if(y[b]==null)return!1
return H.eh(H.aT(y[d],z),null,c,null)},
bz:function(a,b,c,d){H.v(b)
H.bx(c)
H.v(d)
if(a==null)return a
if(H.aE(a,b,c,d))return a
throw H.b(H.d3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
t:function(a,b,c,d){H.v(b)
H.bx(c)
H.v(d)
if(a==null)return a
if(H.aE(a,b,c,d))return a
throw H.b(H.a1(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
eh:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.X(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.X(a[y],b,c[y],d))return!1
return!0},
nk:function(a,b,c){return a.apply(b,H.aT(J.A(b)["$as"+H.d(c)],H.ai(b)))},
eo:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="G"||a===-1||a===-2||H.eo(z)}return!1},
cx:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="G"||b===-1||b===-2||H.eo(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bw(a,b)}z=J.A(a).constructor
y=H.ai(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.X(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.cx(a,b))throw H.b(H.a1(a,H.by(b)))
return a},
X:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.X(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.ea(a,b,c,d)
if('func' in a)return c.builtin$cls==="bk"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.X("type" in a?a.type:null,b,x,d)
else if(H.X(a,b,x,d))return!0
else{if(!('$is'+"aX" in y.prototype))return!1
w=y.prototype["$as"+"aX"]
v=H.aT(w,z?a.slice(1):null)
return H.X(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eh(H.aT(r,z),b,u,d)},
ea:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kZ(m,b,l,d)},
kZ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.X(c[w],d,a[w],b))return!1}return!0},
nl:function(a,b,c){Object.defineProperty(a,H.v(b),{value:c,enumerable:false,writable:true,configurable:true})},
kW:function(a){var z,y,x,w,v,u
z=H.v($.en.$1(a))
y=$.bY[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.v($.eg.$2(a,z))
if(z!=null){y=$.bY[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.bY[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.er(a,x)
if(v==="*")throw H.b(P.dN(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.er(a,x)},
er:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cD(a,!1,null,!!a.$isx)},
kY:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cD(z,c,null,null)},
kR:function(){if(!0===$.cC)return
$.cC=!0
H.kS()},
kS:function(){var z,y,x,w,v,u,t,s
$.bY=Object.create(null)
$.c2=Object.create(null)
H.kN()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.es.$1(v)
if(u!=null){t=H.kY(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kN:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aQ(C.O,H.aQ(C.T,H.aQ(C.z,H.aQ(C.z,H.aQ(C.S,H.aQ(C.P,H.aQ(C.Q(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.en=new H.kO(v)
$.eg=new H.kP(u)
$.es=new H.kQ(t)},
aQ:function(a,b){return a(b)||b},
l1:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ig:{"^":"c;a,b,c,d,e,f,r,0x",p:{
ih:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ck(z)
y=z[0]
x=z[1]
return new H.ig(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iG:{"^":"c;a,b,c,d,e,f",
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
ab:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.l([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dv:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
hw:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
cm:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hw(a,y,z?null:b.receiver)}}},
iM:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l3:{"^":"o:5;a",
$1:function(a){if(!!J.A(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e3:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa0:1},
o:{"^":"c;",
k:function(a){return"Closure '"+H.b3(this).trim()+"'"},
gcp:function(){return this},
$isbk:1,
gcp:function(){return this}},
dE:{"^":"o;"},
iv:{"^":"dE;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aG(z)+"'"}},
cd:{"^":"dE;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b2(this.a)
else y=typeof z!=="object"?J.al(z):H.b2(z)
return(y^H.b2(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.b3(z)+"'")},
p:{
ce:function(a){return a.a},
d2:function(a){return a.c},
bG:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.ck(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iH:{"^":"N;a",
k:function(a){return this.a},
p:{
a1:function(a,b){return new H.iH("TypeError: "+P.bI(a)+": type '"+H.ee(a)+"' is not a subtype of type '"+b+"'")}}},
fM:{"^":"N;a",
k:function(a){return this.a},
p:{
d3:function(a,b){return new H.fM("CastError: "+P.bI(a)+": type '"+H.ee(a)+"' is not a subtype of type '"+b+"'")}}},
ik:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
il:function(a){return new H.ik(a)}}},
dK:{"^":"c;a,0b,0c,0d",
gae:function(){var z=this.b
if(z==null){z=H.by(this.a)
this.b=z}return z},
k:function(a){return this.gae()},
gA:function(a){var z=this.d
if(z==null){z=C.i.gA(this.gae())
this.d=z}return z},
D:function(a,b){if(b==null)return!1
return b instanceof H.dK&&this.gae()===b.gae()}},
dm:{"^":"dr;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gH:function(a){return new H.ar(this,[H.q(this,0)])},
af:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d6(z,b)}else{y=this.dX(b)
return y}},
dX:function(a){var z=this.d
if(z==null)return!1
return this.aF(this.ax(z,J.al(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ac(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ac(w,b)
x=y==null?null:y.b
return x}else return this.dY(b)},
dY:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ax(z,J.al(a)&0x3ffffff)
x=this.aF(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.az()
this.b=z}this.bb(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.az()
this.c=y}this.bb(y,b,c)}else{x=this.d
if(x==null){x=this.az()
this.d=x}w=J.al(b)&0x3ffffff
v=this.ax(x,w)
if(v==null)this.aC(x,w,[this.ap(b,c)])
else{u=this.aF(v,b)
if(u>=0)v[u].b=c
else v.push(this.ap(b,c))}}},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.am(this))
z=z.c}},
bb:function(a,b,c){var z
H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
z=this.ac(a,b)
if(z==null)this.aC(a,b,this.ap(b,c))
else z.b=c},
bd:function(){this.r=this.r+1&67108863},
ap:function(a,b){var z,y
z=new H.hB(H.z(a,H.q(this,0)),H.z(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bd()
return z},
aF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aH(a[y].a,b))return y
return-1},
k:function(a){return P.ds(this)},
ac:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aC:function(a,b,c){a[b]=c},
d7:function(a,b){delete a[b]},
d6:function(a,b){return this.ac(a,b)!=null},
az:function(){var z=Object.create(null)
this.aC(z,"<non-identifier-key>",z)
this.d7(z,"<non-identifier-key>")
return z},
$isdn:1},
hB:{"^":"c;a,b,0c,0d"},
ar:{"^":"da;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.hC(z,z.r,this.$ti)
y.c=z.e
return y}},
hC:{"^":"c;a,b,0c,0d,$ti",
sbc:function(a){this.d=H.z(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.am(z))
else{z=this.c
if(z==null){this.sbc(null)
return!1}else{this.sbc(z.a)
this.c=this.c.c
return!0}}},
$isaY:1},
kO:{"^":"o:5;a",
$1:function(a){return this.a(a)}},
kP:{"^":"o:13;a",
$2:function(a,b){return this.a(a,b)}},
kQ:{"^":"o:14;a",
$1:function(a){return this.a(H.v(a))}}}],["","",,H,{"^":"",
kE:function(a){return J.hu(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bT:function(a){var z,y
if(!!J.A(a).$isw)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bc(b,a))},
hU:{"^":"f;",
df:function(a,b,c,d){var z=P.av(b,0,c,d,null)
throw H.b(z)},
bg:function(a,b,c,d){if(b>>>0!==b||b>c)this.df(a,b,c,d)},
$isiI:1,
"%":"DataView;ArrayBufferView;bK|dY|dZ|cp|e_|e0|at"},
bK:{"^":"hU;",
gj:function(a){return a.length},
dt:function(a,b,c,d,e){var z,y,x
H.h(d,"$isbK")
z=a.length
this.bg(a,b,z,"start")
this.bg(a,c,z,"end")
if(b>c)throw H.b(P.av(b,0,c,null,null))
y=c-b
x=d.length
if(x-e<y)throw H.b(P.bO("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$isw:1,
$asw:I.bd,
$isx:1,
$asx:I.bd},
cp:{"^":"dZ;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ej(c)
H.ad(b,a,a.length)
a[b]=c},
M:function(a,b,c,d,e){H.t(d,"$isi",[P.a3],"$asi")
if(!!J.A(d).$iscp){this.dt(a,b,c,d,e)
return}this.b_(a,b,c,d,e)},
a2:function(a,b,c,d){return this.M(a,b,c,d,0)},
$asbJ:function(){return[P.a3]},
$asn:function(){return[P.a3]},
$isi:1,
$asi:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
"%":"Float64Array"},
at:{"^":"e0;",
i:function(a,b,c){H.M(c)
H.ad(b,a,a.length)
a[b]=c},
M:function(a,b,c,d,e){H.t(d,"$isi",[P.C],"$asi")
this.b_(a,b,c,d,e)},
a2:function(a,b,c,d){return this.M(a,b,c,d,0)},
$asbJ:function(){return[P.C]},
$asn:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isa:1,
$asa:function(){return[P.C]}},
hT:{"^":"cp;",$isag:1,"%":"Float32Array"},
m1:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m2:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ishp:1,
"%":"Int32Array"},
m3:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m4:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hV:{"^":"at;",
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ismT:1,
"%":"Uint32Array"},
m5:{"^":"at;",
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ismU:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
m6:{"^":"at;",
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dY:{"^":"bK+n;"},
dZ:{"^":"dY+bJ;"},
e_:{"^":"bK+n;"},
e0:{"^":"e_+bJ;"}}],["","",,P,{"^":"",
iT:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kx()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bb(new P.iV(z),1)).observe(y,{childList:true})
return new P.iU(z,y,x)}else if(self.setImmediate!=null)return P.ky()
return P.kz()},
n3:[function(a){self.scheduleImmediate(H.bb(new P.iW(H.m(a,{func:1,ret:-1})),0))},"$1","kx",4,0,4],
n4:[function(a){self.setImmediate(H.bb(new P.iX(H.m(a,{func:1,ret:-1})),0))},"$1","ky",4,0,4],
n5:[function(a){H.m(a,{func:1,ret:-1})
P.k7(0,a)},"$1","kz",4,0,4],
kt:function(a,b){if(H.bw(a,{func:1,args:[P.c,P.a0]}))return H.m(a,{func:1,ret:null,args:[P.c,P.a0]})
if(H.bw(a,{func:1,args:[P.c]}))return H.m(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.d_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ks:function(){var z,y
for(;z=$.aP,z!=null;){$.b9=null
y=z.b
$.aP=y
if(y==null)$.b8=null
z.a.$0()}},
ni:[function(){$.cv=!0
try{P.ks()}finally{$.b9=null
$.cv=!1
if($.aP!=null)$.cH().$1(P.ei())}},"$0","ei",0,0,1],
ed:function(a){var z=new P.dQ(H.m(a,{func:1,ret:-1}))
if($.aP==null){$.b8=z
$.aP=z
if(!$.cv)$.cH().$1(P.ei())}else{$.b8.b=z
$.b8=z}},
kw:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aP
if(z==null){P.ed(a)
$.b9=$.b8
return}y=new P.dQ(a)
x=$.b9
if(x==null){y.b=z
$.b9=y
$.aP=y}else{y.b=x.b
x.b=y
$.b9=y
if(y.b==null)$.b8=y}},
l0:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.I
if(C.f===y){P.bW(null,null,C.f,a)
return}y.toString
P.bW(null,null,y,H.m(y.bx(a),z))},
bV:function(a,b,c,d,e){var z={}
z.a=d
P.kw(new P.ku(z,e))},
eb:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.I
if(y===c)return d.$0()
$.I=c
z=y
try{y=d.$0()
return y}finally{$.I=z}},
ec:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.I
if(y===c)return d.$1(e)
$.I=c
z=y
try{y=d.$1(e)
return y}finally{$.I=z}},
kv:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.I
if(y===c)return d.$2(e,f)
$.I=c
z=y
try{y=d.$2(e,f)
return y}finally{$.I=z}},
bW:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bx(d):c.dH(d,-1)
P.ed(d)},
iV:{"^":"o:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iU:{"^":"o:15;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iW:{"^":"o:0;a",
$0:function(){this.a.$0()}},
iX:{"^":"o:0;a",
$0:function(){this.a.$0()}},
k6:{"^":"c;a,0b,c",
d2:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bb(new P.k8(this,b),0),a)
else throw H.b(P.y("`setTimeout()` not found."))},
p:{
k7:function(a,b){var z=new P.k6(!0,0)
z.d2(a,b)
return z}}},
k8:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
j_:{"^":"c;$ti"},
k1:{"^":"j_;a,$ti"},
aO:{"^":"c;0a,b,c,d,e,$ti",
dZ:function(a){if(this.c!==6)return!0
return this.b.b.aI(H.m(this.d,{func:1,ret:P.O,args:[P.c]}),a.a,P.O,P.c)},
dW:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bw(z,{func:1,args:[P.c,P.a0]}))return H.bZ(w.e5(z,a.a,a.b,null,y,P.a0),x)
else return H.bZ(w.aI(H.m(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
ac:{"^":"c;bq:a<,b,0dq:c<,$ti",
c8:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.I
if(y!==C.f){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kt(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ac(0,$.I,[c])
w=b==null?1:3
this.bf(new P.aO(x,w,a,b,[z,c]))
return x},
c7:function(a,b){return this.c8(a,null,b)},
bf:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaO")
this.c=a}else{if(z===2){y=H.h(this.c,"$isac")
z=y.a
if(z<4){y.bf(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bW(null,null,z,H.m(new P.je(this,a),{func:1,ret:-1}))}},
bn:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaO")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isac")
y=u.a
if(y<4){u.bn(a)
return}this.a=y
this.c=u.c}z.a=this.ad(a)
y=this.b
y.toString
P.bW(null,null,y,H.m(new P.jj(z,this),{func:1,ret:-1}))}},
aB:function(){var z=H.h(this.c,"$isaO")
this.c=null
return this.ad(z)},
ad:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
as:function(a){var z,y,x
z=H.q(this,0)
H.bZ(a,{futureOr:1,type:z})
y=this.$ti
if(H.aE(a,"$isaX",y,"$asaX"))if(H.aE(a,"$isac",y,null))P.dT(a,this)
else P.jf(a,this)
else{x=this.aB()
H.z(a,z)
this.a=4
this.c=a
P.b7(this,x)}},
bi:function(a,b){var z
H.h(b,"$isa0")
z=this.aB()
this.a=8
this.c=new P.W(a,b)
P.b7(this,z)},
$isaX:1,
p:{
jf:function(a,b){var z,y,x
b.a=1
try{a.c8(new P.jg(b),new P.jh(b),null)}catch(x){z=H.a5(x)
y=H.be(x)
P.l0(new P.ji(b,z,y))}},
dT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isac")
if(z>=4){y=b.aB()
b.a=a.a
b.c=a.c
P.b7(b,y)}else{y=H.h(b.c,"$isaO")
b.a=2
b.c=a
a.bn(y)}},
b7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isW")
y=y.b
u=v.a
t=v.b
y.toString
P.bV(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.h(r,"$isW")
y=y.b
u=r.a
t=r.b
y.toString
P.bV(null,null,y,u,t)
return}o=$.I
if(o!=q)$.I=q
else o=null
y=b.c
if(y===8)new P.jm(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jl(x,b,r).$0()}else if((y&2)!==0)new P.jk(z,x,b).$0()
if(o!=null)$.I=o
y=x.b
if(!!J.A(y).$isaX){if(y.a>=4){n=H.h(t.c,"$isaO")
t.c=null
b=t.ad(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.dT(y,t)
return}}m=b.b
n=H.h(m.c,"$isaO")
m.c=null
b=m.ad(n)
y=x.a
u=x.b
if(!y){H.z(u,H.q(m,0))
m.a=4
m.c=u}else{H.h(u,"$isW")
m.a=8
m.c=u}z.a=m
y=m}}}},
je:{"^":"o:0;a,b",
$0:function(){P.b7(this.a,this.b)}},
jj:{"^":"o:0;a,b",
$0:function(){P.b7(this.b,this.a.a)}},
jg:{"^":"o:6;a",
$1:function(a){var z=this.a
z.a=0
z.as(a)}},
jh:{"^":"o:16;a",
$2:function(a,b){H.h(b,"$isa0")
this.a.bi(a,b)},
$1:function(a){return this.$2(a,null)}},
ji:{"^":"o:0;a,b,c",
$0:function(){this.a.bi(this.b,this.c)}},
jm:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c3(H.m(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.be(v)
if(this.d){w=H.h(this.a.a.c,"$isW").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isW")
else u.b=new P.W(y,x)
u.a=!0
return}if(!!J.A(z).$isaX){if(z instanceof P.ac&&z.gbq()>=4){if(z.gbq()===8){w=this.b
w.b=H.h(z.gdq(),"$isW")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.c7(new P.jn(t),null)
w.a=!1}}},
jn:{"^":"o:17;a",
$1:function(a){return this.a}},
jl:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.z(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.aI(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.be(t)
x=this.a
x.b=new P.W(z,y)
x.a=!0}}},
jk:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isW")
w=this.c
if(w.dZ(z)&&w.e!=null){v=this.b
v.b=w.dW(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.be(u)
w=H.h(this.a.a.c,"$isW")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.W(y,x)
s.a=!0}}},
dQ:{"^":"c;a,0b"},
iz:{"^":"c;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.ac(0,$.I,[P.C])
z.a=0
x=H.q(this,0)
w=H.m(new P.iB(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.iC(z,y),{func:1,ret:-1})
W.aN(this.a,this.b,w,!1,x)
return y}},
iB:{"^":"o;a,b",
$1:function(a){H.z(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.q(this.b,0)]}}},
iC:{"^":"o:0;a,b",
$0:function(){this.b.as(this.a.a)}},
iA:{"^":"c;"},
W:{"^":"c;a,b",
k:function(a){return H.d(this.a)},
$isN:1},
ke:{"^":"c;",$isn1:1},
ku:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dw()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
jL:{"^":"ke;",
e6:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.f===$.I){a.$0()
return}P.eb(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.be(x)
P.bV(null,null,this,z,H.h(y,"$isa0"))}},
e7:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.f===$.I){a.$1(b)
return}P.ec(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.be(x)
P.bV(null,null,this,z,H.h(y,"$isa0"))}},
dH:function(a,b){return new P.jN(this,H.m(a,{func:1,ret:b}),b)},
bx:function(a){return new P.jM(this,H.m(a,{func:1,ret:-1}))},
dI:function(a,b){return new P.jO(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
c3:function(a,b){H.m(a,{func:1,ret:b})
if($.I===C.f)return a.$0()
return P.eb(null,null,this,a,b)},
aI:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.I===C.f)return a.$1(b)
return P.ec(null,null,this,a,b,c,d)},
e5:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.I===C.f)return a.$2(b,c)
return P.kv(null,null,this,a,b,c,d,e,f)}},
jN:{"^":"o;a,b,c",
$0:function(){return this.a.c3(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jM:{"^":"o:1;a,b",
$0:function(){return this.a.e6(this.b)}},
jO:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.e7(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dp:function(a,b,c){H.bx(a)
return H.t(H.kF(a,new H.dm(0,0,[b,c])),"$isdn",[b,c],"$asdn")},
Z:function(a,b){return new H.dm(0,0,[a,b])},
a_:function(a,b,c,d){return new P.ju(0,0,[d])},
hq:function(a,b,c){var z,y
if(P.cw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.l([],[P.e])
y=$.bf()
C.a.l(y,a)
try{P.kr(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dC(b,H.kV(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cj:function(a,b,c){var z,y,x
if(P.cw(a))return b+"..."+c
z=new P.cr(b)
y=$.bf()
C.a.l(y,a)
try{x=z
x.a=P.dC(x.gY(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gY()+c
y=z.gY()
return y.charCodeAt(0)==0?y:y},
cw:function(a){var z,y
for(z=0;y=$.bf(),z<y.length;++z)if(a===y[z])return!0
return!1},
kr:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[P.e],"$asa")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.d(z.gC(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.u();t=s,s=r){r=z.gC(z);++x
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
co:function(a,b){var z,y,x
z=P.a_(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.P)(a),++x)z.l(0,H.z(a[x],b))
return z},
ds:function(a){var z,y,x
z={}
if(P.cw(a))return"{...}"
y=new P.cr("")
try{C.a.l($.bf(),a)
x=y
x.a=x.gY()+"{"
z.a=!0
J.fb(a,new P.hG(z,y))
z=y
z.a=z.gY()+"}"}finally{z=$.bf()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gY()
return z.charCodeAt(0)==0?z:z},
ju:{"^":"jp;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){var z=new P.dX(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbv")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.h(y[b],"$isbv")!=null}else return this.d5(b)},
d5:function(a){var z=this.d
if(z==null)return!1
return this.aw(this.bl(z,a),a)>=0},
l:function(a,b){var z,y
H.z(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ct()
this.b=z}return this.be(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ct()
this.c=y}return this.be(y,b)}else return this.d3(0,b)},
d3:function(a,b){var z,y,x
H.z(b,H.q(this,0))
z=this.d
if(z==null){z=P.ct()
this.d=z}y=this.bj(b)
x=z[y]
if(x==null)z[y]=[this.aA(b)]
else{if(this.aw(x,b)>=0)return!1
x.push(this.aA(b))}return!0},
c2:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bo(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bo(this.c,b)
else return this.dj(0,b)},
dj:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bl(z,b)
x=this.aw(y,b)
if(x<0)return!1
this.bs(y.splice(x,1)[0])
return!0},
a4:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ay()}},
be:function(a,b){H.z(b,H.q(this,0))
if(H.h(a[b],"$isbv")!=null)return!1
a[b]=this.aA(b)
return!0},
bo:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbv")
if(z==null)return!1
this.bs(z)
delete a[b]
return!0},
ay:function(){this.r=this.r+1&67108863},
aA:function(a){var z,y
z=new P.bv(H.z(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ay()
return z},
bs:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ay()},
bj:function(a){return J.al(a)&0x3ffffff},
bl:function(a,b){return a[this.bj(b)]},
aw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aH(a[y].a,b))return y
return-1},
p:{
ct:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bv:{"^":"c;a,0b,0c"},
dX:{"^":"c;a,b,0c,0d,$ti",
sbh:function(a){this.d=H.z(a,H.q(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.am(z))
else{z=this.c
if(z==null){this.sbh(null)
return!1}else{this.sbh(H.z(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaY:1,
p:{
jv:function(a,b,c){var z=new P.dX(a,b,[c])
z.c=a.e
return z}}},
jp:{"^":"im;"},
hD:{"^":"jw;",$isi:1,$isa:1},
n:{"^":"c;$ti",
gB:function(a){return new H.dq(a,this.gj(a),0,[H.a4(this,a,"n",0)])},
q:function(a,b){return this.h(a,b)},
dV:function(a,b,c,d){var z,y,x
H.z(b,d)
H.m(c,{func:1,ret:d,args:[d,H.a4(this,a,"n",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.am(a))}return y},
aY:function(a,b){return H.dD(a,b,null,H.a4(this,a,"n",0))},
bU:function(a,b,c,d){var z
H.z(d,H.a4(this,a,"n",0))
P.dy(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.i(a,z,d)},
M:["b_",function(a,b,c,d,e){var z,y,x,w,v
z=H.a4(this,a,"n",0)
H.t(d,"$isi",[z],"$asi")
P.dy(b,c,this.gj(a),null,null,null)
y=c-b
if(y===0)return
if(H.aE(d,"$isa",[z],"$asa")){x=e
w=d}else{w=J.fo(d,e).ea(0,!1)
x=0}if(x+y>w.length)throw H.b(H.hs())
if(x<b)for(v=y-1;v>=0;--v){z=x+v
if(z>=w.length)return H.k(w,z)
this.i(a,b+v,w[z])}else for(v=0;v<y;++v){z=x+v
if(z>=w.length)return H.k(w,z)
this.i(a,b+v,w[z])}},function(a,b,c,d){return this.M(a,b,c,d,0)},"a2",null,null,"geg",13,2,null],
ak:function(a,b,c){H.t(c,"$isi",[H.a4(this,a,"n",0)],"$asi")
this.a2(a,b,b+c.length,c)},
k:function(a){return P.cj(a,"[","]")}},
dr:{"^":"R;"},
hG:{"^":"o:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
R:{"^":"c;$ti",
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.a4(this,a,"R",0),H.a4(this,a,"R",1)]})
for(z=J.bD(this.gH(a));z.u();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.ae(this.gH(a))},
k:function(a){return P.ds(a)},
$isJ:1},
io:{"^":"c;$ti",
G:function(a,b){var z
for(z=J.bD(H.t(b,"$isi",this.$ti,"$asi"));z.u();)this.l(0,z.gC(z))},
k:function(a){return P.cj(this,"{","}")},
$isi:1,
$ismp:1},
im:{"^":"io;"},
jw:{"^":"c+n;"}}],["","",,P,{"^":"",
hb:function(a){if(a instanceof H.o)return a.k(0)
return"Instance of '"+H.b3(a)+"'"},
bI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bi(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hb(a)},
de:function(a){return new P.jb(a)},
aF:function(a){H.c4(H.d(a))},
O:{"^":"c;"},
"+bool":0,
bH:{"^":"c;a,b",
D:function(a,b){if(b==null)return!1
return b instanceof P.bH&&this.a===b.a&&!0},
N:function(a,b){return C.b.N(this.a,H.h(b,"$isbH").a)},
gA:function(a){var z=this.a
return(z^C.b.bp(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fZ(H.ia(this))
y=P.bj(H.i8(this))
x=P.bj(H.i4(this))
w=P.bj(H.i5(this))
v=P.bj(H.i7(this))
u=P.bj(H.i9(this))
t=P.h_(H.i6(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isV:1,
$asV:function(){return[P.bH]},
p:{
fZ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bj:function(a){if(a>=10)return""+a
return"0"+a}}},
a3:{"^":"F;"},
"+double":0,
aV:{"^":"c;a",
X:function(a,b){return C.b.X(this.a,H.h(b,"$isaV").a)},
D:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.b.N(this.a,H.h(b,"$isaV").a)},
k:function(a){var z,y,x,w,v
z=new P.h8()
y=this.a
if(y<0)return"-"+new P.aV(0-y).k(0)
x=z.$1(C.b.E(y,6e7)%60)
w=z.$1(C.b.E(y,1e6)%60)
v=new P.h7().$1(y%1e6)
return""+C.b.E(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isV:1,
$asV:function(){return[P.aV]},
p:{
h6:function(a,b,c,d,e,f){return new P.aV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h7:{"^":"o:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h8:{"^":"o:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"c;"},
dw:{"^":"N;",
k:function(a){return"Throw of null."}},
aJ:{"^":"N;a,b,ah:c>,d",
gau:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gat:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gau()+y+x
if(!this.a)return w
v=this.gat()
u=P.bI(this.b)
return w+v+": "+u},
p:{
d_:function(a,b,c){return new P.aJ(!0,a,b,c)}}},
cq:{"^":"aJ;e,f,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
ie:function(a){return new P.cq(null,null,!1,null,null,a)},
bL:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
av:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
dy:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.av(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.av(b,a,c,"end",f))
return b}}},
ho:{"^":"aJ;e,j:f>,a,b,c,d",
gau:function(){return"RangeError"},
gat:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a7()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
E:function(a,b,c,d,e){var z=H.M(e==null?J.ae(b):e)
return new P.ho(b,z,!0,a,c,"Index out of range")}}},
iN:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.iN(a)}}},
iL:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dN:function(a){return new P.iL(a)}}},
bN:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
bO:function(a){return new P.bN(a)}}},
fS:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bI(z)+"."},
p:{
am:function(a){return new P.fS(a)}}},
dB:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isN:1},
fY:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jb:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
bk:{"^":"c;"},
C:{"^":"F;"},
"+int":0,
i:{"^":"c;$ti",
aK:["cF",function(a,b){var z=H.cB(this,"i",0)
return new H.dO(this,H.m(b,{func:1,ret:P.O,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.u();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.U(P.av(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.u();){x=z.gC(z)
if(b===y)return x;++y}throw H.b(P.E(b,this,"index",null,y))},
k:function(a){return P.hq(this,"(",")")}},
aY:{"^":"c;$ti"},
a:{"^":"c;$ti",$isi:1},
"+List":0,
J:{"^":"c;$ti"},
G:{"^":"c;",
gA:function(a){return P.c.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
F:{"^":"c;",$isV:1,
$asV:function(){return[P.F]}},
"+num":0,
c:{"^":";",
D:function(a,b){return this===b},
gA:function(a){return H.b2(this)},
k:function(a){return"Instance of '"+H.b3(this)+"'"},
toString:function(){return this.k(this)}},
a0:{"^":"c;"},
e:{"^":"c;",$isV:1,
$asV:function(){return[P.e]},
$isi0:1},
"+String":0,
cr:{"^":"c;Y:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dC:function(a,b,c){var z=J.bD(b)
if(!z.u())return a
if(c.length===0){do a+=H.d(z.gC(z))
while(z.u())}else{a+=H.d(z.gC(z))
for(;z.u();)a=a+c+H.d(z.gC(z))}return a}}}}],["","",,W,{"^":"",
h9:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).O(z,a,b,c)
y.toString
z=W.u
z=new H.dO(new W.a2(y),H.m(new W.ha(),{func:1,ret:P.O,args:[z]}),[z])
x=z.gB(z)
if(!x.u())H.U(H.hr())
w=x.gC(x)
if(x.u())H.U(H.ht())
return H.h(w,"$isQ")},
dd:function(a){H.h(a,"$isL")
return"wheel"},
aW:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fg(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
j8:function(a,b){return document.createElement(a)},
bS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dW:function(a,b,c,d){var z,y
z=W.bS(W.bS(W.bS(W.bS(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e9:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j2(a)
if(!!J.A(z).$isL)return z
return}else return H.h(a,"$isL")},
ef:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.I
if(z===C.f)return a
return z.dI(a,b)},
K:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
l4:{"^":"f;0j:length=","%":"AccessibleNodeList"},
fD:{"^":"K;",
k:function(a){return String(a)},
$isfD:1,
"%":"HTMLAnchorElement"},
l5:{"^":"K;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d0:{"^":"K;",$isd0:1,"%":"HTMLBaseElement"},
fI:{"^":"f;","%":";Blob"},
bF:{"^":"K;",$isbF:1,"%":"HTMLBodyElement"},
cf:{"^":"K;0n:height=,0m:width=",
cq:function(a,b,c){var z=this.dc(a,b,P.kA(c,null))
return z},
dc:function(a,b,c){return a.getContext(b,c)},
$iscf:1,
"%":"HTMLCanvasElement"},
fL:{"^":"f;",
aj:function(a){return P.Y(a.getContextAttributes())},
dd:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
e2:function(a,b,c,d,e,f,g,h){this.di(a,P.kC(b),c,d)
return},
e1:function(a,b,c,d){return this.e2(a,b,c,d,null,null,null,null)},
di:function(a,b,c,d){return a.putImageData(b,c,d)},
"%":"CanvasRenderingContext2D"},
la:{"^":"u;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fT:{"^":"cg;",$isfT:1,"%":"CSSNumericValue|CSSUnitValue"},
ld:{"^":"fW;0j:length=","%":"CSSPerspective"},
an:{"^":"f;",$isan:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fU:{"^":"j0;0j:length=",
aQ:function(a,b){var z=this.de(a,this.aq(a,b))
return z==null?"":z},
aq:function(a,b){var z,y
z=$.ex()
y=z[b]
if(typeof y==="string")return y
y=this.dw(a,b)
z[b]=y
return y},
dw:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h0()+b
if(z in a)return z
return b},
de:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fV:{"^":"c;",
gn:function(a){return this.aQ(a,"height")},
gm:function(a){return this.aQ(a,"width")}},
cg:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fW:{"^":"f;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lf:{"^":"cg;0j:length=","%":"CSSTransformValue"},
lg:{"^":"cg;0j:length=","%":"CSSUnparsedValue"},
li:{"^":"f;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
h2:{"^":"K;","%":"HTMLDivElement"},
h3:{"^":"u;",
dB:function(a,b){return a.adoptNode(b)},
cr:function(a,b){return a.getElementById(b)},
e3:function(a,b){return a.querySelector(b)},
gbY:function(a){return new W.bt(a,"mousedown",!1,[W.S])},
gbZ:function(a){return new W.bt(a,"mousemove",!1,[W.S])},
gc_:function(a){return new W.bt(a,"mouseup",!1,[W.S])},
gc0:function(a){return new W.bt(a,H.v(W.dd(a)),!1,[W.aM])},
"%":"XMLDocument;Document"},
lj:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
h4:{"^":"f;",
dP:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lk:{"^":"j4;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.t(c,"$isT",[P.F],"$asT")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[[P.T,P.F]]},
$isx:1,
$asx:function(){return[[P.T,P.F]]},
$asn:function(){return[[P.T,P.F]]},
$isi:1,
$asi:function(){return[[P.T,P.F]]},
$isa:1,
$asa:function(){return[[P.T,P.F]]},
$asr:function(){return[[P.T,P.F]]},
"%":"ClientRectList|DOMRectList"},
h5:{"^":"f;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
D:function(a,b){var z
if(b==null)return!1
if(!H.aE(b,"$isT",[P.F],"$asT"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isT:1,
$asT:function(){return[P.F]},
"%":";DOMRectReadOnly"},
ll:{"^":"j6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.v(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[P.e]},
$isx:1,
$asx:function(){return[P.e]},
$asn:function(){return[P.e]},
$isi:1,
$asi:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"DOMStringList"},
lm:{"^":"f;0j:length=","%":"DOMTokenList"},
Q:{"^":"u;0e8:tagName=",
gdF:function(a){return new W.j7(a)},
k:function(a){return a.localName},
O:["am",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dc
if(z==null){z=H.l([],[W.aa])
y=new W.du(z)
C.a.l(z,W.dU(null))
C.a.l(z,W.e4())
$.dc=y
d=y}else d=z
z=$.db
if(z==null){z=new W.e8(d)
$.db=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.K).dP(y,"")
$.af=y
$.ch=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.h(y,"$isd0")
y.href=z.baseURI
z=$.af.head;(z&&C.L).I(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbF")}z=$.af
if(!!this.$isbF)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.o).I(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.W,a.tagName)){z=$.ch;(z&&C.C).cs(z,x)
z=$.ch
w=(z&&C.C).dN(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.I(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cU(x)
c.aV(w)
C.q.dB(document,w)
return w},function(a,b,c){return this.O(a,b,c,null)},"dO",null,null,"gel",5,5,null],
cv:function(a,b,c,d){a.textContent=null
this.I(a,this.O(a,b,c,d))},
cu:function(a,b){return this.cv(a,b,null,null)},
a0:function(a,b){return a.getAttribute(b)},
dk:function(a,b){return a.removeAttribute(b)},
gbY:function(a){return new W.bR(a,"mousedown",!1,[W.S])},
gbZ:function(a){return new W.bR(a,"mousemove",!1,[W.S])},
gc_:function(a){return new W.bR(a,"mouseup",!1,[W.S])},
gc0:function(a){return new W.bR(a,H.v(W.dd(a)),!1,[W.aM])},
$isQ:1,
"%":";Element"},
ha:{"^":"o:18;",
$1:function(a){return!!J.A(H.h(a,"$isu")).$isQ}},
lo:{"^":"K;0n:height=,0m:width=","%":"HTMLEmbedElement"},
ao:{"^":"f;",$isao:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"f;",
dA:function(a,b,c,d){H.m(c,{func:1,args:[W.ao]})
if(c!=null)this.d4(a,b,c,!1)},
d4:function(a,b,c,d){return a.addEventListener(b,H.bb(H.m(c,{func:1,args:[W.ao]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e1|e2|e5|e6"},
ap:{"^":"fI;",$isap:1,"%":"File"},
lF:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isap")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$asn:function(){return[W.ap]},
$isi:1,
$asi:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asr:function(){return[W.ap]},
"%":"FileList"},
lG:{"^":"L;0j:length=","%":"FileWriter"},
lJ:{"^":"K;0j:length=","%":"HTMLFormElement"},
aq:{"^":"f;",$isaq:1,"%":"Gamepad"},
hj:{"^":"K;","%":"HTMLHeadElement"},
lK:{"^":"f;0j:length=","%":"History"},
lL:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asn:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hk:{"^":"h3;","%":"HTMLDocument"},
lM:{"^":"K;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lN:{"^":"f;0n:height=,0m:width=","%":"ImageBitmap"},
ci:{"^":"f;0V:data=,0n:height=,0m:width=",$isci:1,"%":"ImageData"},
lO:{"^":"K;0n:height=,0m:width=","%":"HTMLImageElement"},
lQ:{"^":"K;0n:height=,0m:width=","%":"HTMLInputElement"},
aZ:{"^":"dM;",$isaZ:1,"%":"KeyboardEvent"},
hE:{"^":"f;",
k:function(a){return String(a)},
$ishE:1,
"%":"Location"},
hJ:{"^":"K;","%":"HTMLAudioElement;HTMLMediaElement"},
lY:{"^":"f;0j:length=","%":"MediaList"},
lZ:{"^":"jy;",
h:function(a,b){return P.Y(a.get(H.v(b)))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new W.hL(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hL:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m_:{"^":"jz;",
h:function(a,b){return P.Y(a.get(H.v(b)))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new W.hM(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hM:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
as:{"^":"f;",$isas:1,"%":"MimeType"},
m0:{"^":"jB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isas")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$asn:function(){return[W.as]},
$isi:1,
$asi:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asr:function(){return[W.as]},
"%":"MimeTypeArray"},
S:{"^":"dM;",
gbX:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b1(a.offsetX,a.offsetY,[P.F])
else{z=a.target
if(!J.A(W.e9(z)).$isQ)throw H.b(P.y("offsetX is only supported on elements"))
y=H.h(W.e9(z),"$isQ")
z=a.clientX
x=a.clientY
w=[P.F]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.t(new P.b1(u,v,w),"$isb1",w,"$asb1")
if(typeof z!=="number")return z.a9()
if(typeof x!=="number")return x.a9()
return new P.b1(C.r.c9(z-u),C.r.c9(x-v),w)}},
$isS:1,
"%":";DragEvent|MouseEvent"},
a2:{"^":"hD;a",
ga8:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.bO("No elements"))
if(y>1)throw H.b(P.bO("More than one element"))
return z.firstChild},
G:function(a,b){var z,y,x,w,v
H.t(b,"$isi",[W.u],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.I(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.h(c,"$isu")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.k(y,b)
J.eU(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.dg(z,z.length,-1,[H.a4(C.Y,z,"r",0)])},
M:function(a,b,c,d,e){H.t(d,"$isi",[W.u],"$asi")
throw H.b(P.y("Cannot setRange on Node list"))},
a2:function(a,b,c,d){return this.M(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asn:function(){return[W.u]},
$asi:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"L;0e0:previousSibling=",
e4:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cE(a):z},
I:function(a,b){return a.appendChild(b)},
dl:function(a,b){return a.removeChild(b)},
dm:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hW:{"^":"jD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asn:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
m9:{"^":"K;0n:height=,0m:width=","%":"HTMLObjectElement"},
mb:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
mc:{"^":"f;0n:height=,0m:width=","%":"PaintSize"},
au:{"^":"f;0j:length=",$isau:1,"%":"Plugin"},
me:{"^":"jH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isau")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$asn:function(){return[W.au]},
$isi:1,
$asi:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asr:function(){return[W.au]},
"%":"PluginArray"},
mg:{"^":"S;0n:height=,0m:width=","%":"PointerEvent"},
id:{"^":"f;",
dN:function(a,b){return a.createContextualFragment(b)},
cs:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mm:{"^":"jP;",
h:function(a,b){return P.Y(a.get(H.v(b)))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new W.ij(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"RTCStatsReport"},
ij:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mn:{"^":"f;0n:height=,0m:width=","%":"Screen"},
mo:{"^":"K;0j:length=","%":"HTMLSelectElement"},
aw:{"^":"L;",$isaw:1,"%":"SourceBuffer"},
mq:{"^":"e2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaw")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asn:function(){return[W.aw]},
$isi:1,
$asi:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asr:function(){return[W.aw]},
"%":"SourceBufferList"},
ax:{"^":"f;",$isax:1,"%":"SpeechGrammar"},
mr:{"^":"jV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isax")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asn:function(){return[W.ax]},
$isi:1,
$asi:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asr:function(){return[W.ax]},
"%":"SpeechGrammarList"},
ay:{"^":"f;0j:length=",$isay:1,"%":"SpeechRecognitionResult"},
mu:{"^":"jY;",
h:function(a,b){return this.bm(a,H.v(b))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.dh(a,z)
if(y==null)return
b.$2(y,this.bm(a,y))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new W.iy(z))
return z},
gj:function(a){return a.length},
bm:function(a,b){return a.getItem(b)},
dh:function(a,b){return a.key(b)},
$asR:function(){return[P.e,P.e]},
$isJ:1,
$asJ:function(){return[P.e,P.e]},
"%":"Storage"},
iy:{"^":"o:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
az:{"^":"f;",$isaz:1,"%":"CSSStyleSheet|StyleSheet"},
iE:{"^":"K;",
O:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=W.h9("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a2(y).G(0,new W.a2(z))
return y},
"%":"HTMLTableElement"},
mx:{"^":"K;",
O:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.O(z.createElement("table"),b,c,d)
z.toString
z=new W.a2(z)
x=z.ga8(z)
x.toString
z=new W.a2(x)
w=z.ga8(z)
y.toString
w.toString
new W.a2(y).G(0,new W.a2(w))
return y},
"%":"HTMLTableRowElement"},
my:{"^":"K;",
O:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.am(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.O(z.createElement("table"),b,c,d)
z.toString
z=new W.a2(z)
x=z.ga8(z)
y.toString
x.toString
new W.a2(y).G(0,new W.a2(x))
return y},
"%":"HTMLTableSectionElement"},
dF:{"^":"K;",$isdF:1,"%":"HTMLTemplateElement"},
mz:{"^":"f;0m:width=","%":"TextMetrics"},
aA:{"^":"L;",$isaA:1,"%":"TextTrack"},
aB:{"^":"L;",$isaB:1,"%":"TextTrackCue|VTTCue"},
mA:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaB")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aB]},
$isx:1,
$asx:function(){return[W.aB]},
$asn:function(){return[W.aB]},
$isi:1,
$asi:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asr:function(){return[W.aB]},
"%":"TextTrackCueList"},
mB:{"^":"e6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaA")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aA]},
$isx:1,
$asx:function(){return[W.aA]},
$asn:function(){return[W.aA]},
$isi:1,
$asi:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asr:function(){return[W.aA]},
"%":"TextTrackList"},
mF:{"^":"f;0j:length=","%":"TimeRanges"},
aC:{"^":"f;",$isaC:1,"%":"Touch"},
mG:{"^":"ka;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaC")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aC]},
$isx:1,
$asx:function(){return[W.aC]},
$asn:function(){return[W.aC]},
$isi:1,
$asi:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asr:function(){return[W.aC]},
"%":"TouchList"},
mH:{"^":"f;0j:length=","%":"TrackDefaultList"},
dM:{"^":"ao;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mW:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mY:{"^":"hJ;0n:height=,0m:width=","%":"HTMLVideoElement"},
mZ:{"^":"L;0j:length=","%":"VideoTrackList"},
n_:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
n0:{"^":"f;0m:width=","%":"VTTRegion"},
aM:{"^":"S;",
gdR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.y("deltaY is not supported"))},
$isaM:1,
"%":"WheelEvent"},
iQ:{"^":"L;",
gdE:function(a){var z,y,x
z=P.F
y=new P.ac(0,$.I,[z])
x=H.m(new W.iR(new P.k1(y,[z])),{func:1,ret:-1,args:[P.F]})
this.da(a)
this.dn(a,W.ef(x,z))
return y},
dn:function(a,b){return a.requestAnimationFrame(H.bb(H.m(b,{func:1,ret:-1,args:[P.F]}),1))},
da:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
dC:function(a,b){return a.alert(b)},
$isdP:1,
"%":"DOMWindow|Window"},
iR:{"^":"o:20;a",
$1:function(a){var z=this.a
a=H.bZ(H.cE(a),{futureOr:1,type:H.q(z,0)})
z=z.a
if(z.a!==0)H.U(P.bO("Future already completed"))
z.as(a)}},
dR:{"^":"u;0ah:name=",$isdR:1,"%":"Attr"},
n6:{"^":"kg;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isan")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.an]},
$isx:1,
$asx:function(){return[W.an]},
$asn:function(){return[W.an]},
$isi:1,
$asi:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asr:function(){return[W.an]},
"%":"CSSRuleList"},
n8:{"^":"h5;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
D:function(a,b){var z
if(b==null)return!1
if(!H.aE(b,"$isT",[P.F],"$asT"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
n9:{"^":"ki;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaq")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$asn:function(){return[W.aq]},
$isi:1,
$asi:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asr:function(){return[W.aq]},
"%":"GamepadList"},
ne:{"^":"kk;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isu")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asn:function(){return[W.u]},
$isi:1,
$asi:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asr:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nf:{"^":"km;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isay")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asn:function(){return[W.ay]},
$isi:1,
$asi:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asr:function(){return[W.ay]},
"%":"SpeechRecognitionResultList"},
ng:{"^":"ko;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.h(c,"$isaz")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isw:1,
$asw:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$asn:function(){return[W.az]},
$isi:1,
$asi:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asr:function(){return[W.az]},
"%":"StyleSheetList"},
iY:{"^":"dr;d8:a<",
F:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gH(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.P)(z),++v){u=z[v]
b.$2(u,w.a0(x,u))}},
gH:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.l([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.h(z[w],"$isdR")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asR:function(){return[P.e,P.e]},
$asJ:function(){return[P.e,P.e]}},
j7:{"^":"iY;a",
h:function(a,b){return J.cb(this.a,H.v(b))},
gj:function(a){return this.gH(this).length}},
bt:{"^":"iz;a,b,c,$ti"},
bR:{"^":"bt;a,b,c,$ti"},
j9:{"^":"iA;a,b,c,d,e,$ti",p:{
aN:function(a,b,c,d,e){var z=W.ef(new W.ja(c),W.ao)
if(z!=null&&!0)J.eV(a,b,z,!1)
return new W.j9(0,a,b,z,!1,[e])}}},
ja:{"^":"o:21;a",
$1:function(a){return this.a.$1(H.h(a,"$isao"))}},
bu:{"^":"c;a",
d_:function(a){var z,y
z=$.cI()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.V[y],W.kL())
for(y=0;y<12;++y)z.i(0,C.u[y],W.kM())}},
Z:function(a){return $.eO().w(0,W.aW(a))},
U:function(a,b,c){var z,y,x
z=W.aW(a)
y=$.cI()
x=y.h(0,H.d(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bX(x.$4(a,b,c,this))},
$isaa:1,
p:{
dU:function(a){var z,y
z=document.createElement("a")
y=new W.jQ(z,window.location)
y=new W.bu(y)
y.d_(a)
return y},
nc:[function(a,b,c,d){H.h(a,"$isQ")
H.v(b)
H.v(c)
H.h(d,"$isbu")
return!0},"$4","kL",16,0,12],
nd:[function(a,b,c,d){var z,y,x
H.h(a,"$isQ")
H.v(b)
H.v(c)
z=H.h(d,"$isbu").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kM",16,0,12]}},
r:{"^":"c;$ti",
gB:function(a){return new W.dg(a,this.gj(a),-1,[H.a4(this,a,"r",0)])},
M:function(a,b,c,d,e){H.t(d,"$isi",[H.a4(this,a,"r",0)],"$asi")
throw H.b(P.y("Cannot setRange on immutable List."))},
a2:function(a,b,c,d){return this.M(a,b,c,d,0)}},
du:{"^":"c;a",
Z:function(a){return C.a.bu(this.a,new W.hY(a))},
U:function(a,b,c){return C.a.bu(this.a,new W.hX(a,b,c))},
$isaa:1},
hY:{"^":"o:9;a",
$1:function(a){return H.h(a,"$isaa").Z(this.a)}},
hX:{"^":"o:9;a,b,c",
$1:function(a){return H.h(a,"$isaa").U(this.a,this.b,this.c)}},
jR:{"^":"c;",
d1:function(a,b,c,d){var z,y,x
this.a.G(0,c)
z=b.aK(0,new W.jS())
y=b.aK(0,new W.jT())
this.b.G(0,z)
x=this.c
x.G(0,C.X)
x.G(0,y)},
Z:function(a){return this.a.w(0,W.aW(a))},
U:["cH",function(a,b,c){var z,y
z=W.aW(a)
y=this.c
if(y.w(0,H.d(z)+"::"+b))return this.d.dD(c)
else if(y.w(0,"*::"+b))return this.d.dD(c)
else{y=this.b
if(y.w(0,H.d(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.d(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isaa:1},
jS:{"^":"o:10;",
$1:function(a){return!C.a.w(C.u,H.v(a))}},
jT:{"^":"o:10;",
$1:function(a){return C.a.w(C.u,H.v(a))}},
k2:{"^":"jR;e,a,b,c,d",
U:function(a,b,c){if(this.cH(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cb(a,"template")==="")return this.e.w(0,b)
return!1},
p:{
e4:function(){var z,y,x,w,v
z=P.e
y=P.co(C.t,z)
x=H.q(C.t,0)
w=H.m(new W.k3(),{func:1,ret:z,args:[x]})
v=H.l(["TEMPLATE"],[z])
y=new W.k2(y,P.a_(null,null,null,z),P.a_(null,null,null,z),P.a_(null,null,null,z),null)
y.d1(null,new H.hH(C.t,w,[x,z]),v,null)
return y}}},
k3:{"^":"o:22;",
$1:function(a){return"TEMPLATE::"+H.d(H.v(a))}},
k0:{"^":"c;",
Z:function(a){var z=J.A(a)
if(!!z.$isdA)return!1
z=!!z.$isH
if(z&&W.aW(a)==="foreignObject")return!1
if(z)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.i.cz(b,"on"))return!1
return this.Z(a)},
$isaa:1},
dg:{"^":"c;a,b,c,0d,$ti",
sbk:function(a){this.d=H.z(a,H.q(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbk(J.bg(this.a,z))
this.c=z
return!0}this.sbk(null)
this.c=y
return!1},
gC:function(a){return this.d},
$isaY:1},
j1:{"^":"c;a",$isL:1,$isdP:1,p:{
j2:function(a){if(a===window)return H.h(a,"$isdP")
else return new W.j1(a)}}},
aa:{"^":"c;"},
jQ:{"^":"c;a,b",$ismV:1},
e8:{"^":"c;a",
aV:function(a){new W.kd(this).$2(a,null)},
a3:function(a,b){if(b==null)J.cU(a)
else J.bA(b,a)},
ds:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fd(a)
x=J.cb(y.gd8(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.bi(a)}catch(t){H.a5(t)}try{u=W.aW(a)
this.dr(H.h(a,"$isQ"),b,z,v,u,H.h(y,"$isJ"),H.v(x))}catch(t){if(H.a5(t) instanceof P.aJ)throw t
else{this.a3(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dr:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.a3(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.Z(a)){this.a3(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.a3(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gH(f)
y=H.l(z.slice(0),[H.q(z,0)])
for(x=f.gH(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.U(a,J.ft(v),w.a0(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.a0(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.a0(z,v)
w.dk(z,v)}}if(!!J.A(a).$isdF)this.aV(a.content)},
$ism7:1},
kd:{"^":"o:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ds(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a3(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.ff(z)}catch(w){H.a5(w)
v=H.h(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isu")}}},
j0:{"^":"f+fV;"},
j3:{"^":"f+n;"},
j4:{"^":"j3+r;"},
j5:{"^":"f+n;"},
j6:{"^":"j5+r;"},
jc:{"^":"f+n;"},
jd:{"^":"jc+r;"},
jq:{"^":"f+n;"},
jr:{"^":"jq+r;"},
jy:{"^":"f+R;"},
jz:{"^":"f+R;"},
jA:{"^":"f+n;"},
jB:{"^":"jA+r;"},
jC:{"^":"f+n;"},
jD:{"^":"jC+r;"},
jG:{"^":"f+n;"},
jH:{"^":"jG+r;"},
jP:{"^":"f+R;"},
e1:{"^":"L+n;"},
e2:{"^":"e1+r;"},
jU:{"^":"f+n;"},
jV:{"^":"jU+r;"},
jY:{"^":"f+R;"},
k4:{"^":"f+n;"},
k5:{"^":"k4+r;"},
e5:{"^":"L+n;"},
e6:{"^":"e5+r;"},
k9:{"^":"f+n;"},
ka:{"^":"k9+r;"},
kf:{"^":"f+n;"},
kg:{"^":"kf+r;"},
kh:{"^":"f+n;"},
ki:{"^":"kh+r;"},
kj:{"^":"f+n;"},
kk:{"^":"kj+r;"},
kl:{"^":"f+n;"},
km:{"^":"kl+r;"},
kn:{"^":"f+n;"},
ko:{"^":"kn+r;"}}],["","",,P,{"^":"",
kD:function(a){var z,y
z=J.A(a)
if(!!z.$isci){y=z.gV(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.e7(a.data,a.height,a.width)},
kC:function(a){if(a instanceof P.e7)return{data:a.a,height:a.b,width:a.c}
return a},
Y:function(a){var z,y,x,w,v
if(a==null)return
z=P.Z(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.P)(y),++w){v=H.v(y[w])
z.i(0,v,a[v])}return z},
kA:function(a,b){var z={}
a.F(0,new P.kB(z))
return z},
d9:function(){var z=$.d8
if(z==null){z=J.c7(window.navigator.userAgent,"Opera",0)
$.d8=z}return z},
h0:function(){var z,y
z=$.d5
if(z!=null)return z
y=$.d6
if(y==null){y=J.c7(window.navigator.userAgent,"Firefox",0)
$.d6=y}if(y)z="-moz-"
else{y=$.d7
if(y==null){y=!P.d9()&&J.c7(window.navigator.userAgent,"Trident/",0)
$.d7=y}if(y)z="-ms-"
else z=P.d9()?"-o-":"-webkit-"}$.d5=z
return z},
e7:{"^":"c;V:a>,n:b>,m:c>",$isci:1},
kB:{"^":"o:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jI:{"^":"c;a,b",
d0:function(a){var z,y,x,w,v,u,t
do{z=(a&4294967295)>>>0
a=C.b.E(a-z,4294967296)
y=(a&4294967295)>>>0
a=C.b.E(a-y,4294967296)
x=((~z&4294967295)>>>0)+(z<<21>>>0)
w=(x&4294967295)>>>0
y=(~y>>>0)+((y<<21|z>>>11)>>>0)+C.b.E(x-w,4294967296)&4294967295
x=((w^(w>>>24|y<<8))>>>0)*265
z=(x&4294967295)>>>0
y=((y^y>>>24)>>>0)*265+C.b.E(x-z,4294967296)&4294967295
x=((z^(z>>>14|y<<18))>>>0)*21
z=(x&4294967295)>>>0
y=((y^y>>>14)>>>0)*21+C.b.E(x-z,4294967296)&4294967295
z=(z^(z>>>28|y<<4))>>>0
y=(y^y>>>28)>>>0
x=(z<<31>>>0)+z
w=(x&4294967295)>>>0
v=C.b.E(x-w,4294967296)
x=this.a*1037
u=(x&4294967295)>>>0
this.a=u
t=(this.b*1037+C.b.E(x-u,4294967296)&4294967295)>>>0
this.b=t
u=(u^w)>>>0
this.a=u
v=(t^y+((y<<31|z>>>1)>>>0)+v&4294967295)>>>0
this.b=v}while(a!==0)
if(v===0&&u===0)this.a=23063
this.R()
this.R()
this.R()
this.R()},
R:function(){var z,y,x,w,v,u
z=this.a
y=4294901760*z
x=(y&4294967295)>>>0
w=55905*z
v=(w&4294967295)>>>0
u=v+x+this.b
z=(u&4294967295)>>>0
this.a=z
this.b=(C.b.E(w-v+(y-x)+(u-z),4294967296)&4294967295)>>>0},
e_:function(a){var z,y,x
if(a<=0||a>4294967296)throw H.b(P.ie("max must be in range 0 < max \u2264 2^32, was "+a))
z=a-1
if((a&z)===0){this.R()
return(this.a&z)>>>0}do{this.R()
y=this.a
x=y%a}while(y-x+a>=4294967296)
return x},
S:function(){this.R()
var z=this.a
this.R()
return((z&67108863)*134217728+(this.a&134217727))/9007199254740992},
$ismh:1,
p:{
jJ:function(a){var z=new P.jI(0,0)
z.d0(a)
return z}}},
b1:{"^":"c;a_:a>,W:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
D:function(a,b){if(b==null)return!1
return H.aE(b,"$isb1",[P.F],null)&&this.a==J.bE(b)&&this.b==b.gW(b)},
gA:function(a){var z,y,x
z=J.al(this.a)
y=J.al(this.b)
y=P.dV(P.dV(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jK:{"^":"c;"},
T:{"^":"jK;$ti"}}],["","",,P,{"^":"",fE:{"^":"f;",$isfE:1,"%":"SVGAnimatedLength"},lp:{"^":"H;0n:height=,0m:width=","%":"SVGFEBlendElement"},lq:{"^":"H;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lr:{"^":"H;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},ls:{"^":"H;0n:height=,0m:width=","%":"SVGFECompositeElement"},lt:{"^":"H;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lu:{"^":"H;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lv:{"^":"H;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lw:{"^":"H;0n:height=,0m:width=","%":"SVGFEFloodElement"},lx:{"^":"H;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},ly:{"^":"H;0n:height=,0m:width=","%":"SVGFEImageElement"},lz:{"^":"H;0n:height=,0m:width=","%":"SVGFEMergeElement"},lA:{"^":"H;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lB:{"^":"H;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lC:{"^":"H;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lD:{"^":"H;0n:height=,0m:width=","%":"SVGFETileElement"},lE:{"^":"H;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lH:{"^":"H;0n:height=,0m:width=","%":"SVGFilterElement"},lI:{"^":"bl;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hi:{"^":"bl;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bl:{"^":"H;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lP:{"^":"bl;0n:height=,0m:width=","%":"SVGImageElement"},b_:{"^":"f;",$isb_:1,"%":"SVGLength"},lV:{"^":"jt;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.h(c,"$isb_")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asn:function(){return[P.b_]},
$isi:1,
$asi:function(){return[P.b_]},
$isa:1,
$asa:function(){return[P.b_]},
$asr:function(){return[P.b_]},
"%":"SVGLengthList"},lW:{"^":"H;0n:height=,0m:width=","%":"SVGMaskElement"},b0:{"^":"f;",$isb0:1,"%":"SVGNumber"},m8:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.h(c,"$isb0")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asn:function(){return[P.b0]},
$isi:1,
$asi:function(){return[P.b0]},
$isa:1,
$asa:function(){return[P.b0]},
$asr:function(){return[P.b0]},
"%":"SVGNumberList"},md:{"^":"H;0n:height=,0m:width=","%":"SVGPatternElement"},mf:{"^":"f;0j:length=","%":"SVGPointList"},mi:{"^":"f;0n:height=,0m:width=","%":"SVGRect"},mj:{"^":"hi;0n:height=,0m:width=","%":"SVGRectElement"},dA:{"^":"H;",$isdA:1,"%":"SVGScriptElement"},mv:{"^":"k_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.v(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asn:function(){return[P.e]},
$isi:1,
$asi:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"SVGStringList"},H:{"^":"Q;",
O:function(a,b,c,d){var z,y,x,w,v,u
z=H.l([],[W.aa])
C.a.l(z,W.dU(null))
C.a.l(z,W.e4())
C.a.l(z,new W.k0())
c=new W.e8(new W.du(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dO(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a2(w)
u=z.ga8(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.I(v,x)
return v},
$isH:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mw:{"^":"bl;0n:height=,0m:width=","%":"SVGSVGElement"},b4:{"^":"f;",$isb4:1,"%":"SVGTransform"},mI:{"^":"kc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return this.T(a,b)},
i:function(a,b,c){H.h(c,"$isb4")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
T:function(a,b){return a.getItem(b)},
$asn:function(){return[P.b4]},
$isi:1,
$asi:function(){return[P.b4]},
$isa:1,
$asa:function(){return[P.b4]},
$asr:function(){return[P.b4]},
"%":"SVGTransformList"},mX:{"^":"bl;0n:height=,0m:width=","%":"SVGUseElement"},js:{"^":"f+n;"},jt:{"^":"js+r;"},jE:{"^":"f+n;"},jF:{"^":"jE+r;"},jZ:{"^":"f+n;"},k_:{"^":"jZ+r;"},kb:{"^":"f+n;"},kc:{"^":"kb+r;"}}],["","",,P,{"^":"",ag:{"^":"c;",$isi:1,
$asi:function(){return[P.a3]},
$isa:1,
$asa:function(){return[P.a3]},
$isiI:1}}],["","",,P,{"^":"",l6:{"^":"f;0j:length=","%":"AudioBuffer"},l7:{"^":"iZ;",
h:function(a,b){return P.Y(a.get(H.v(b)))},
F:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gH:function(a){var z=H.l([],[P.e])
this.F(a,new P.fG(z))
return z},
gj:function(a){return a.size},
$asR:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"AudioParamMap"},fG:{"^":"o:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},l8:{"^":"L;0j:length=","%":"AudioTrackList"},fH:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ma:{"^":"fH;0j:length=","%":"OfflineAudioContext"},iZ:{"^":"f+R;"}}],["","",,P,{"^":"",fJ:{"^":"f;",$isfJ:1,"%":"WebGLBuffer"},hg:{"^":"f;",$ishg:1,"%":"WebGLFramebuffer"},ib:{"^":"f;",$isib:1,"%":"WebGLProgram"},mk:{"^":"f;",
bt:function(a,b){return a.activeTexture(b)},
bv:function(a,b,c){return a.attachShader(b,c)},
bw:function(a,b,c){return a.bindBuffer(b,c)},
by:function(a,b,c){return a.bindFramebuffer(b,c)},
bz:function(a,b,c){return a.bindTexture(b,c)},
bA:function(a,b){return a.blendEquation(b)},
bB:function(a,b,c){return a.blendFunc(b,c)},
bC:function(a,b,c,d){return a.bufferData(b,c,d)},
bD:function(a,b){return a.checkFramebufferStatus(b)},
bE:function(a,b){return a.clear(b)},
bF:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bG:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createFramebuffer()},
bJ:function(a){return a.createProgram()},
bK:function(a,b){return a.createShader(b)},
bL:function(a){return a.createTexture()},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
bV:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aL:function(a,b){return a.generateMipmap(b)},
aj:function(a){return P.Y(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getExtension(b)},
aO:function(a,b){return a.getProgramInfoLog(b)},
aP:function(a,b,c){return a.getProgramParameter(b,c)},
aR:function(a,b){return a.getShaderInfoLog(b)},
aS:function(a,b,c){return a.getShaderParameter(b,c)},
aT:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
c1:function(a,b,c){return a.pixelStorei(b,c)},
aX:function(a,b,c){return a.shaderSource(b,c)},
aZ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aJ:function(a,b,c,d,e,f,g,h,i,j){this.aD(a,b,c,d,e,f,g)
return},
c4:function(a,b,c,d,e,f,g){return this.aJ(a,b,c,d,e,f,g,null,null,null)},
aD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c5:function(a,b,c,d){return a.texParameterf(b,c,d)},
c6:function(a,b,c,d){return a.texParameteri(b,c,d)},
ca:function(a,b,c){return a.uniform1f(b,c)},
cb:function(a,b,c){return a.uniform1fv(b,c)},
cc:function(a,b,c){return a.uniform1i(b,c)},
cd:function(a,b,c){return a.uniform1iv(b,c)},
ce:function(a,b,c){return a.uniform2fv(b,c)},
cf:function(a,b,c){return a.uniform3fv(b,c)},
cg:function(a,b,c){return a.uniform4fv(b,c)},
ci:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cj:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ck:function(a,b){return a.useProgram(b)},
cl:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cn:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},ml:{"^":"f;",
dG:function(a,b){return a.beginTransformFeedback(b)},
dJ:function(a,b){return a.bindVertexArray(b)},
dQ:function(a){return a.createVertexArray()},
dS:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dT:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dU:function(a){return a.endTransformFeedback()},
e9:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
ed:function(a,b,c,d){this.dz(a,b,H.t(c,"$isa",[P.e],"$asa"),d)
return},
dz:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ee:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bt:function(a,b){return a.activeTexture(b)},
bv:function(a,b,c){return a.attachShader(b,c)},
bw:function(a,b,c){return a.bindBuffer(b,c)},
by:function(a,b,c){return a.bindFramebuffer(b,c)},
bz:function(a,b,c){return a.bindTexture(b,c)},
bA:function(a,b){return a.blendEquation(b)},
bB:function(a,b,c){return a.blendFunc(b,c)},
bC:function(a,b,c,d){return a.bufferData(b,c,d)},
bD:function(a,b){return a.checkFramebufferStatus(b)},
bE:function(a,b){return a.clear(b)},
bF:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bG:function(a,b){return a.compileShader(b)},
bH:function(a){return a.createBuffer()},
bI:function(a){return a.createFramebuffer()},
bJ:function(a){return a.createProgram()},
bK:function(a,b){return a.createShader(b)},
bL:function(a){return a.createTexture()},
bN:function(a,b){return a.depthMask(b)},
bO:function(a,b){return a.disable(b)},
bP:function(a,b,c,d){return a.drawArrays(b,c,d)},
bQ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bR:function(a,b){return a.enable(b)},
bS:function(a,b){return a.enableVertexAttribArray(b)},
bV:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aL:function(a,b){return a.generateMipmap(b)},
aj:function(a){return P.Y(a.getContextAttributes())},
aM:function(a){return a.getError()},
aN:function(a,b){return a.getExtension(b)},
aO:function(a,b){return a.getProgramInfoLog(b)},
aP:function(a,b,c){return a.getProgramParameter(b,c)},
aR:function(a,b){return a.getShaderInfoLog(b)},
aS:function(a,b,c){return a.getShaderParameter(b,c)},
aT:function(a,b,c){return a.getUniformLocation(b,c)},
bW:function(a,b){return a.linkProgram(b)},
c1:function(a,b,c){return a.pixelStorei(b,c)},
aX:function(a,b,c){return a.shaderSource(b,c)},
aZ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aJ:function(a,b,c,d,e,f,g,h,i,j){this.aD(a,b,c,d,e,f,g)
return},
c4:function(a,b,c,d,e,f,g){return this.aJ(a,b,c,d,e,f,g,null,null,null)},
aD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c5:function(a,b,c,d){return a.texParameterf(b,c,d)},
c6:function(a,b,c,d){return a.texParameteri(b,c,d)},
ca:function(a,b,c){return a.uniform1f(b,c)},
cb:function(a,b,c){return a.uniform1fv(b,c)},
cc:function(a,b,c){return a.uniform1i(b,c)},
cd:function(a,b,c){return a.uniform1iv(b,c)},
ce:function(a,b,c){return a.uniform2fv(b,c)},
cf:function(a,b,c){return a.uniform3fv(b,c)},
cg:function(a,b,c){return a.uniform4fv(b,c)},
ci:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cj:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ck:function(a,b){return a.useProgram(b)},
cl:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cn:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},ip:{"^":"f;",$isip:1,"%":"WebGLShader"},iF:{"^":"f;",$isiF:1,"%":"WebGLTexture"},iK:{"^":"f;",$isiK:1,"%":"WebGLUniformLocation"},iO:{"^":"f;",$isiO:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",ms:{"^":"jX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return P.Y(this.dg(a,b))},
i:function(a,b,c){H.h(c,"$isJ")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
dg:function(a,b){return a.item(b)},
$asn:function(){return[[P.J,,,]]},
$isi:1,
$asi:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asr:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jW:{"^":"f+n;"},jX:{"^":"jW+r;"}}],["","",,G,{"^":"",
iS:function(a){var z,y,x,w
z=H.l(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.i(z,y,w+H.d(z[y]))}return C.a.a5(z,"\n")},
dS:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bK(a,b)
z.aX(a,y,c)
z.bG(a,y)
x=H.bX(z.aS(a,y,35713))
if(x!=null&&!x){w=z.aR(a,y)
P.aF("E:Compilation failed:")
P.aF("E:"+G.iS(c))
P.aF("E:Failure:")
P.aF(C.i.J("E:",w))
throw H.b(w)}return y},
dh:function(a,b){var z,y,x
H.t(a,"$isa",[T.p],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.e.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.k(a,y)
C.e.i(b,z+1,J.ca(a[y]))
z+=2
if(y>=a.length)return H.k(a,y)
x=J.cR(a[y])
if(z>=b.length)return H.k(b,z)
b[z]=x}return b},
he:function(a,b){var z,y
H.t(a,"$isa",[T.B],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.e.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.k(a,y)
C.e.i(b,z+1,J.ca(a[y]))}return b},
hf:function(a,b){var z,y,x,w,v
H.t(a,"$isa",[T.aL],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.e.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.k(a,y)
C.e.i(b,z+1,J.ca(a[y]))
x=z+2
if(y>=a.length)return H.k(a,y)
w=J.cR(a[y])
v=b.length
if(x>=v)return H.k(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.k(a,y)
w=J.fh(a[y])
if(z>=v)return H.k(b,z)
b[z]=w}return b},
hd:function(a,b){var z,y
H.t(a,"$isa",[[P.a,P.C]],"$asa")
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
jo:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ar(z,[H.q(z,0)]),y=y.gB(y),x=b.x,w=[[P.a,P.C]],v=[P.a3],u=[T.aL],t=[T.p],s=[T.B];y.u();){r=y.d
if(!x.af(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.ek>0)H.c4("I: "+r)
continue}q=z.h(0,r)
switch($.a6().h(0,r).a){case"vec2":b.P(r,G.he(H.bz(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.P(r,G.dh(H.bz(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.P(r,G.hf(H.bz(q,"$isa",u,"$asa"),null),4)
break
case"float":b.P(r,new Float32Array(H.bT(H.bz(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.P(r,G.hd(H.bz(q,"$isa",w,"$asa"),null),4)
break}}},
br:{"^":"c;ah:a>"},
b5:{"^":"br;",
ao:function(){return this.d},
k:function(a){var z,y,x,w
z=H.l(["{"+new H.dK(H.kI(this)).k(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.ar(y,[H.q(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(z,H.d(w)+": "+H.d(y.h(0,w)))}return C.a.a5(z,"\n")}},
fK:{"^":"iu;"},
fN:{"^":"c;0a,b",
bT:function(a,b,c){J.f9(this.a,b)
if(c>0)J.fz(this.a,b,c)},
cm:function(a,b,c,d,e,f,g,h){J.c5(this.a,34962,b)
J.fA(this.a,c,d,e,!1,g,h)}},
di:{"^":"c;a,b,c,d,e"},
hc:{"^":"c;"},
df:{"^":"c;a,b,c,d"},
hh:{"^":"c;a,b,c,d,e",
b1:function(a){switch($.a6().h(0,a).a){case"vec2":this.e.i(0,a,H.l([],[T.B]))
break
case"vec3":this.e.i(0,a,H.l([],[T.p]))
break
case"vec4":this.e.i(0,a,H.l([],[T.aL]))
break
case"float":this.e.i(0,a,H.l([],[P.a3]))
break
case"uvec4":this.e.i(0,a,H.l([],[[P.a,P.C]]))
break}},
cL:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.df(z,z+1,z+2,z+3))},
cM:function(a){var z,y,x,w
H.t(a,"$isa",[T.p],"$asa")
for(z=this.d,y=0;y<24;++y){x=a[y]
w=new T.p(new Float32Array(3))
w.K(x)
C.a.l(z,w)}},
cJ:function(a,b){var z,y,x,w,v,u
z=[T.B]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<24;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.B(v))}},
cK:function(a,b){var z,y,x,w,v
z=[T.p]
H.t(b,"$isa",z,"$asa")
y=H.t(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.p(new Float32Array(3))
v.K(w)
z.l(y,v)}},
cQ:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.l(y,[P.C])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.k(y,v)
u=y[v]
C.a.i(x,w,u.gei(u))
C.a.i(x,w+1,u.gej(u))
C.a.i(x,w+2,u.gek(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.P)(z),++v){t=z[v]
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
z=H.l(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.ar(y,[H.q(y,0)]),x=x.gB(x);x.u();){w=x.d
v=$.a6().h(0,w).a
C.a.l(z,H.d(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a5(z," ")}},
cn:{"^":"br;"},
h1:{"^":"cn;z,Q,ch,cx,d,e,f,a,b,c",
k:function(a){return"DL: p:"+H.d(this.z)}},
hl:{"^":"b5;x,y,z,d,a,b,c",
ao:function(){var z,y,x
z=this.y
y=this.z
G.hm(z,y,this.x)
x=this.d
x.i(0,"uLightDescs",z)
x.i(0,"uLightTypes",y)
return x},
p:{
hm:function(a,b,c){var z,y,x,w,v,u,t,s,r
H.t(c,"$isa",[G.cn],"$asa")
z=a.length
C.e.bU(a,0,z,0)
C.e.bU(b,0,4,0)
for(y=c.length,x=0,w=0;w<y;++w){v=c[w]
u=x*16
t=u+4
s=v.z.a
r=s[0]
if(t>=z)return H.k(a,t)
a[t]=r
t=u+5
r=s[1]
if(t>=z)return H.k(a,t)
a[t]=r
r=u+6
s=s[2]
if(r>=z)return H.k(a,r)
a[r]=s
s=u+8
r=v.e.a
t=r[0]
if(s>=z)return H.k(a,s)
a[s]=t
t=u+9
s=r[1]
if(t>=z)return H.k(a,t)
a[t]=s
s=u+10
r=r[2]
if(s>=z)return H.k(a,s)
a[s]=r
r=u+12
s=v.f.a
t=s[0]
if(r>=z)return H.k(a,r)
a[r]=t
t=u+13
r=s[1]
if(t>=z)return H.k(a,t)
a[t]=r
u+=14
s=s[2]
if(u>=z)return H.k(a,u)
a[u]=s
if(x<0||x>=4)return H.k(b,x)
b[x]=v.d;++x}}}},
dI:{"^":"c;a,b,c"},
dH:{"^":"c;a,b,c"},
hI:{"^":"b5;d,a,b,c",p:{
dt:function(a){var z=P.Z(P.e,P.c)
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.eu())
z.i(0,"cStencilFunc",$.ez())
return new G.hI(z,a,!1,!0)}}},
hK:{"^":"br;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sav:function(a){this.cx=H.t(a,"$isa",[P.C],"$asa")},
b0:function(a,b,c){var z,y
C.i.ar(a,0)
H.h(b,"$isag")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c5(z.a,34962,y)
J.cM(z.a,34962,b,35048)},
cR:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
P:function(a,b,c){var z,y,x,w,v
z=J.cJ(a,0)===105
if(z&&this.z===0)this.z=C.b.cI(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c8(x.a))
this.b0(a,b,c)
w=$.a6().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.bB(x.a,this.e)
x.bT(0,v,z?1:0)
x.cm(0,y.h(0,a),v,w.b2(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.l(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.ar(z,[H.q(z,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(y,H.d(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a5(y,"  ")}},
i1:{"^":"b5;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cN:function(a,b){var z
if(typeof a!=="number")return a.ef()
if(typeof b!=="number")return H.aj(b)
z=a/b
if(this.z===z)return
this.z=z
this.b7()},
b7:function(){var z,y,x,w,v,u
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
ao:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.p(new Float32Array(3))
u.t(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.K(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.A(t)
y=!!z.$isaL
q=y?t.gco(t):1
if(!!z.$isp){p=t.ga_(t)
s=t.gW(t)
r=t.gai(t)
t=p}else if(y){p=t.ga_(t)
s=t.gW(t)
r=t.gai(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.aj(t)
y=u[4]
if(typeof s!=="number")return H.aj(s)
x=u[8]
if(typeof r!=="number")return H.aj(r)
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
d.K(this.db)
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
ln:{"^":"c;"},
ii:{"^":"br;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cU:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){t=z[u]
x.i(0,t,J.cT(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){t=z[u]
x.i(0,t,J.cT(w.a,v,t))}},
cW:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.l([],[P.e])
x=H.l([],[P.e])
for(y=new H.ar(y,[H.q(y,0)]),y=y.gB(y);y.u();){w=y.d
if(!z.af(0,w))C.a.l(x,w)}for(z=this.x,z=P.jv(z,z.r,H.q(z,0)),y=this.Q;z.u();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(b,"$isJ",[P.e,P.c],"$asJ")
z=Date.now()
for(y=new H.ar(b,[H.q(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cJ(s,0)){case 117:if(w.af(0,s)){r=b.h(0,s)
if(v.af(0,s))H.c4("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a6().h(0,s)
if(q==null)H.U("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.M(r)
J.cc(x.a,p,r)}else if(!!J.A(r).$ishp)J.fx(x.a,p,r)
break
case"float":if(q.c===0){H.ej(r)
J.fv(x.a,p,r)}else if(!!J.A(r).$isag)J.fw(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ak(r,"$isa9").a
J.cZ(x.a,p,!1,s)}else if(!!J.A(r).$isag)J.cZ(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.N.geh(H.ak(r,"$islX"))
J.cY(x.a,p,!1,s)}else if(!!J.A(r).$isag)J.cY(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cX(o,p,H.ak(r,"$isaL").a)
else J.cX(o,p,H.h(r,"$isag"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cW(o,p,H.ak(r,"$isp").a)
else J.cW(o,p,H.h(r,"$isag"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cV(o,p,H.ak(r,"$isB").a)
else J.cV(o,p,H.h(r,"$isag"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aj(s)
J.cK(x.a,33984+s)
s=H.ak(r,"$isbP").b
J.aI(x.a,3553,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aj(s)
J.cK(x.a,33984+s)
s=H.ak(r,"$isbP").b
J.aI(x.a,34067,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.J()
this.ch=s+1
break
default:H.c4("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aH(r,!0)
o=x.a
if(s)J.bC(o,2929)
else J.c9(o,2929)
break
case"cStencilFunc":H.ak(r,"$isdI")
s=r.a
o=x.a
if(s===1281)J.c9(o,2960)
else{J.bC(o,2960)
o=r.b
n=r.c
J.fp(x.a,s,o,n)}break
case"cDepthWrite":H.bX(r)
J.f4(x.a,r)
break
case"cBlendEquation":H.ak(r,"$isdH")
s=r.a
o=x.a
if(s===1281)J.c9(o,3042)
else{J.bC(o,3042)
o=r.b
n=r.c
J.eY(x.a,o,n)
J.eX(x.a,s)}break}++t
break}}m=P.h6(0,0,0,Date.now()-new P.bH(z,!1).a,0,0)
""+t
m.k(0)},
cP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.t(b,"$isa",[G.b5],"$asa")
Date.now()
z=this.d
J.fy(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bd()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.P)(b),++x){w=b[x]
this.cZ(J.fe(w),w.ao())}y=this.Q
y.a4(0)
for(v=a.cy,v=new H.ar(v,[H.q(v,0)]),v=v.gB(v);v.u();)y.l(0,v.d)
u=this.cW()
if(u.length!==0)P.aF("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
J.bB(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cR()
s=a.Q
r=a.z
if(t)J.eW(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f8(q,y,v,s,0,r)
else J.f7(q,y,v,s,0)}else{s=z.a
if(r>1)J.f6(s,y,0,v,r)
else J.f5(s,y,0,v)}if(t)J.fa(z.a)},
cO:function(a,b){return this.cP(a,b,null)},
p:{
dz:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a_(null,null,null,z)
x=c.b
w=d.b
v=H.t(c.f,"$isa",[z],"$asa")
u=J.f2(b.a)
t=G.dS(b.a,35633,x)
J.cL(b.a,u,t)
s=G.dS(b.a,35632,w)
J.cL(b.a,u,s)
if(v.length>0)J.fu(b.a,u,v,35980)
J.fm(b.a,u)
if(!H.bX(J.fl(b.a,u,35714)))H.U(J.fk(b.a,u))
z=new G.ii(b,c,d,u,P.co(c.c,z),P.Z(z,P.c),P.Z(z,z),y,a,!1,!0)
z.cU(a,b,c,d)
return z}}},
D:{"^":"c;a,b,c",
b2:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iq:{"^":"c;ah:a>,0b,c,d,e,f,r,x",
aa:function(a){var z,y,x,w
H.t(a,"$isa",[P.e],"$asa")
for(z=this.c,y=this.x,x=0;x<3;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.al(z)},
an:function(a){var z,y,x
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.P)(a),++x)C.a.l(y,a[x])
C.a.al(y)},
ab:function(a){var z,y,x
H.t(a,"$isa",[P.e],"$asa")
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.P)(a),++x)C.a.l(y,a[x])
C.a.al(y)},
b6:function(a,b){var z=[P.e]
this.b=this.b8(!1,H.t(a,"$isa",z,"$asa"),H.t(b,"$isa",z,"$asa"))},
b5:function(a){return this.b6(a,null)},
b8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.t(b,"$isa",z,"$asa")
H.t(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.l(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.P)(y),++u){t=y[u]
s=$.a6().h(0,t)
C.a.l(w,"layout (location="+H.d(v.h(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.a6().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.P)(z),++u){q=z[u]
s=$.a6().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.l(w,"")
if(c!=null)C.a.G(w,c)
if(a)C.a.l(w,"void main(void) {")
C.a.G(w,b)
if(a)C.a.l(w,"}")
return C.a.a5(w,"\n")},
p:{
bM:function(a){var z,y
z=P.e
y=[z]
return new G.iq(a,H.l([],y),H.l([],y),H.l([],y),H.l([],y),0,P.Z(z,P.C))}}},
iu:{"^":"br;"},
dG:{"^":"c;a,b,c,d,e,f,r",
b3:function(a,b){var z=this.e
if(z!==1)J.fr(a.a,b,34046,z)
z=this.r
J.bh(a.a,b,10240,z)
z=this.f
J.bh(a.a,b,10241,z)
if(this.b){J.bh(a.a,b,10242,33071)
J.bh(a.a,b,10243,33071)}if(this.a)J.fc(a.a,b)
if(this.c)J.bh(a.a,b,34892,34894)},
p:{
cs:function(){return new G.dG(!1,!1,!1,!0,1,9729,9729)}}},
bP:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
iJ:{"^":"bP;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.d(this.f)+" X "+H.d(this.r)+"]"},
p:{
dL:function(a,b,c,d,e,f){var z=J.cO(a.a)
J.aI(a.a,3553,z)
J.fs(a.a,3553,1,e,c,d)
f.b3(a,3553)
J.cS(a.a)
J.aI(a.a,3553,null)
return new G.iJ(c,d,e,b,z,3553,a,f)}}},
hn:{"^":"bP;f,a,b,c,d,e"}}],["","",,R,{"^":"",
jx:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.h(W.j8("span",null),"$isQ")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).aq(y,"float")
y.setProperty(x,"left","")
x=C.x.aq(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.I(z,v)}return z},
iw:{"^":"c;",
cV:function(a,b,c){var z,y
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
y=J.j(z)
y.I(z,this.b)
y.I(z,this.d)
y.I(z,this.c)}},
ix:{"^":"iw;e,f,a,b,c,d",
cY:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.ec(y,2)+" fps"
C.p.cu(this.c,b)
x=C.b.E(30*C.y.dK(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.h(z.firstChild,"$isQ")
v=w.style
u=""+x+"px"
v.height=u
C.p.I(z,w)},
cX:function(a){return this.cY(a,"")}}}],["","",,B,{"^":"",
fX:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.p(new Float32Array(3))
x.t(z,y,b2)
w=new T.p(new Float32Array(3))
w.t(b0,y,b2)
v=new T.p(new Float32Array(3))
v.t(b0,b1,b2)
u=new T.p(new Float32Array(3))
u.t(z,b1,b2)
t=-b2
s=new T.p(new Float32Array(3))
s.t(z,y,t)
r=new T.p(new Float32Array(3))
r.t(z,b1,t)
q=new T.p(new Float32Array(3))
q.t(b0,b1,t)
p=new T.p(new Float32Array(3))
p.t(b0,y,t)
o=new T.p(new Float32Array(3))
o.t(z,b1,t)
n=new T.p(new Float32Array(3))
n.t(z,b1,b2)
m=new T.p(new Float32Array(3))
m.t(b0,b1,b2)
l=new T.p(new Float32Array(3))
l.t(b0,b1,t)
k=new T.p(new Float32Array(3))
k.t(b0,y,b2)
j=new T.p(new Float32Array(3))
j.t(z,y,b2)
i=new T.p(new Float32Array(3))
i.t(z,y,t)
h=new T.p(new Float32Array(3))
h.t(b0,y,t)
g=new T.p(new Float32Array(3))
g.t(b0,y,t)
f=new T.p(new Float32Array(3))
f.t(b0,b1,t)
e=new T.p(new Float32Array(3))
e.t(b0,b1,b2)
d=new T.p(new Float32Array(3))
d.t(b0,y,b2)
c=new T.p(new Float32Array(3))
c.t(z,y,t)
b=new T.p(new Float32Array(3))
b.t(z,y,b2)
y=new T.p(new Float32Array(3))
y.t(z,b1,b2)
a=new T.p(new Float32Array(3))
a.t(z,b1,t)
t=[T.p]
a0=H.l([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.B(new Float32Array(2))
z.v(a7,a9)
y=new T.B(new Float32Array(2))
y.v(a6,a9)
x=new T.B(new Float32Array(2))
x.v(a6,a8)
w=new T.B(new Float32Array(2))
w.v(a7,a8)
v=new T.B(new Float32Array(2))
v.v(a6,a9)
u=new T.B(new Float32Array(2))
u.v(a6,a8)
s=new T.B(new Float32Array(2))
s.v(a7,a8)
r=new T.B(new Float32Array(2))
r.v(a7,a9)
q=new T.B(new Float32Array(2))
q.v(a7,a8)
p=new T.B(new Float32Array(2))
p.v(a7,a9)
o=new T.B(new Float32Array(2))
o.v(a6,a9)
n=new T.B(new Float32Array(2))
n.v(a6,a8)
m=new T.B(new Float32Array(2))
m.v(a6,a8)
l=new T.B(new Float32Array(2))
l.v(a7,a8)
k=new T.B(new Float32Array(2))
k.v(a7,a9)
j=new T.B(new Float32Array(2))
j.v(a6,a9)
i=new T.B(new Float32Array(2))
i.v(a6,a9)
h=new T.B(new Float32Array(2))
h.v(a6,a8)
g=new T.B(new Float32Array(2))
g.v(a7,a8)
f=new T.B(new Float32Array(2))
f.v(a7,a9)
e=new T.B(new Float32Array(2))
e.v(a7,a9)
d=new T.B(new Float32Array(2))
d.v(a6,a9)
c=new T.B(new Float32Array(2))
c.v(a6,a8)
b=new T.B(new Float32Array(2))
b.v(a7,a8)
a1=H.l([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.B])
a2=new G.hh(!1,H.l([],[G.hc]),H.l([],[G.df]),H.l([],t),P.Z(P.e,[P.a,,]))
a2.b1("aTexUV")
a2.b1("aNormal")
a2.cL(6)
a2.cM(a0)
a2.cJ("aTexUV",a1)
for(a3=0;z=$.eN(),a3<6;++a3){a4=z[a3]
a2.cK("aNormal",H.l([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",hx:{"^":"c;a,b,c",
cS:function(a){var z,y
a=document
z=W.aZ
y={func:1,ret:-1,args:[z]}
W.aN(a,"keydown",H.m(new D.hz(this),y),!1,z)
W.aN(a,"keyup",H.m(new D.hA(this),y),!1,z)},
p:{
hy:function(a){var z=P.C
z=new D.hx(P.a_(null,null,null,z),P.a_(null,null,null,z),P.a_(null,null,null,z))
z.cS(a)
return z}}},hz:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaZ")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},hA:{"^":"o:11;a",
$1:function(a){var z
H.h(a,"$isaZ")
z=this.a
z.a.c2(0,a.which)
z.c.l(0,a.which)}},hN:{"^":"c;a,b,c,d,e,f,r,x",
cT:function(a){var z,y,x
if(a==null)a=document
z=J.j(a)
y=z.gbZ(a)
x=H.q(y,0)
W.aN(y.a,y.b,H.m(new D.hP(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbY(a)
y=H.q(x,0)
W.aN(x.a,x.b,H.m(new D.hQ(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gc_(a)
x=H.q(y,0)
W.aN(y.a,y.b,H.m(new D.hR(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gc0(a)
x=H.q(z,0)
W.aN(z.a,z.b,H.m(new D.hS(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hO:function(a){var z=P.C
z=new D.hN(P.a_(null,null,null,z),P.a_(null,null,null,z),P.a_(null,null,null,z),0,0,0,0,0)
z.cT(a)
return z}}},hP:{"^":"o:3;a",
$1:function(a){var z,y
H.h(a,"$isS")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.M(y.gbX(a).a)
z.x=H.M(y.gbX(a).b)
z.d=a.movementX
z.e=a.movementY}},hQ:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isS")
a.preventDefault()
P.aF("BUTTON "+H.d(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},hR:{"^":"o:3;a",
$1:function(a){var z
H.h(a,"$isS")
a.preventDefault()
z=this.a
z.a.c2(0,a.button)
z.c.l(0,a.button)}},hS:{"^":"o:24;a",
$1:function(a){H.h(a,"$isaM")
a.preventDefault()
this.a.f=H.M(C.ae.gdR(a))}},i_:{"^":"fK;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c1:function(a){var z,y
z=C.e.dV(H.t(a,"$isi",[P.c],"$asi"),0,new A.kK(),P.C)
if(typeof z!=="number")return H.aj(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kK:{"^":"o:25;",
$2:function(a,b){var z,y
H.M(a)
z=J.al(b)
if(typeof a!=="number")return a.J()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",a9:{"^":"c;a",
K:function(a){var z,y
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
k:function(a){return"[0] "+this.a6(0).k(0)+"\n[1] "+this.a6(1).k(0)+"\n[2] "+this.a6(2).k(0)+"\n[3] "+this.a6(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.k(z,b)
return z[b]},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a9){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
a6:function(a){var z,y,x
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
return new T.aL(z)},
a1:function(){var z=this.a
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
z[15]=1}},ic:{"^":"c;a",
ct:function(a,b){var z,y,x,w,v
z=Math.sqrt(a.gaG())
if(z===0)return
y=b*0.5
x=Math.sin(y)/z
w=a.a
v=this.a
v[0]=w[0]*x
v[1]=w[1]*x
v[2]=w[2]*x
v[3]=Math.cos(y)},
gj:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
h:function(a,b){var z=this.a
if(b>=4)return H.k(z,b)
return z[b]},
k:function(a){var z=this.a
return H.d(z[0])+", "+H.d(z[1])+", "+H.d(z[2])+" @ "+H.d(z[3])}},B:{"^":"c;a",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.B){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ga_:function(a){return this.a[0]},
gW:function(a){return this.a[1]}},p:{"^":"c;a",
t:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
K:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.p){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
a9:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.p(z)
y.K(this)
x=b.a
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gaG:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aH:function(a){var z,y,x
z=Math.sqrt(this.gaG())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aE:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bM:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.p(new Float32Array(3))
z.t(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
cB:function(a,b){var z,y
z=b.a
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
aW:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
ga_:function(a){return this.a[0]},
gW:function(a){return this.a[1]},
gai:function(a){return this.a[2]},
p:{
ah:function(a,b,c){var z=new T.p(new Float32Array(3))
z.t(a,b,c)
return z}}},aL:{"^":"c;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aL){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
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
ga_:function(a){return this.a[0]},
gW:function(a){return this.a[1]},
gai:function(a){return this.a[2]},
gco:function(a){return this.a[3]}}}],["","",,L,{"^":"",
fC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=new Float32Array(c)
y=new Float32Array(c*3)
x=new Float32Array(c*4)
for(w=[P.a3],v=0;v<c;++v){u=b.S()
t=b.S()
s=b.S()
r=new Float32Array(3)
r[0]=u
r[1]=t
r[2]=s
u=new Float32Array(3)
u[0]=0.5
u[1]=0.5
u[2]=0.5
t=new Float32Array(3)
q=new T.p(t)
q.K(new T.p(r))
q.cB(0,new T.p(u))
q.aW(0,60)
C.e.ak(y,v*3,t)
u=b.S()
t=b.S()
s=b.S()
r=new Float32Array(3)
r[0]=u
r[1]=t
r[2]=s
s=b.S()
u=new Float32Array(4)
new T.ic(u).ct(new T.p(r),2*s*3.141592653589793)
C.e.ak(x,v*4,u)
C.e.ak(z,v,H.l([2+b.S()*4],w))}a.P("iaRotation",x,4)
a.P("iaTranslation",y,3)
a.P("iaScale",z,1)},
hF:function(a,b){var z,y,x,w,v,u,t,s
z=document.createElement("canvas")
z.width=512
z.height=512
y=z.getContext("2d")
x=P.kD((y&&C.w).dd(y,0,0,z.width,z.height))
for(w=J.j(x),v=0;v<w.gV(x).length;v+=4){u=30+b.e_(225)
t=w.gV(x)
if(v>=t.length)return H.k(t,v)
t[v]=u
t=w.gV(x)
s=v+1
if(s>=t.length)return H.k(t,s)
t[s]=u
s=w.gV(x)
t=v+2
if(t>=s.length)return H.k(s,t)
s[t]=u
t=w.gV(x)
s=v+3
if(s>=t.length)return H.k(t,s)
t[s]=255}C.w.e1(y,x,0,0)
w=$.eB()
if(w==null)w=new G.dG(!1,!1,!1,!0,1,9729,9729)
t=J.cO(a.a)
J.aI(a.a,3553,t)
s=w.d?1:0
J.fn(a.a,37440,s)
J.aI(a.a,3553,t)
J.fq(a.a,3553,0,6408,6408,5121,z)
w.b3(a,3553)
J.cS(a.a)
J.aI(a.a,3553,null)
return new G.hn(z,"noise",t,3553,a,w)},
ep:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z={}
y=document
x=C.q.cr(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ix(0,0,x,w,y.createElement("div"),R.jx("blue","gray",90,30))
u.cV(x,"blue","gray")
t=H.h(C.q.e3(y,"#webgl-canvas"),"$iscf")
s=new G.fN(t)
y=P.e
x=P.c
v=(t&&C.J).cq(t,"webgl2",P.dp(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.U(P.de('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.d(J.fi(v))
if($.ek>0)P.aF("I: "+r)
J.cN(v,0,0,0,1)
J.bC(v,2929)
J.cN(v,0.5,0.5,0.5,1)
r=H.l([],[G.cn])
q=new Float32Array(64)
p=new Float32Array(4)
o=$.eP()
n=$.ew()
n.toString
m=new T.p(new Float32Array(3))
m.K(n)
m.aW(0,0.5)
n=$.ev()
l=new Float32Array(16)
k=new Float32Array(16)
j=new T.p(new Float32Array(3))
i=new T.p(new Float32Array(3))
j.K(m)
i.K(n)
C.a.l(r,new G.h1(o,100,new T.a9(l),new T.a9(k),1,j,i,"dir",!1,!0))
if(J.fj(v,"EXT_color_buffer_float")==null)C.I.dC(window,"extension not available: EXT_color_buffer_float")
v=new Float32Array(3)
o=D.hy(null)
n=D.hO(t)
m=new T.a9(new Float32Array(16))
m.a1()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
h=new D.i_(100,0,0,0,new T.p(v),-0.02,o,n,m,new T.p(l),new T.p(k),new T.p(j),new T.p(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.a9(new Float32Array(16))
v.a1()
o=new T.a9(new Float32Array(16))
o.a1()
g=new G.i1(h,50,1,0.1,1000,v,o,new T.a9(new Float32Array(16)),P.Z(y,x),"perspective",!1,!0)
g.b7()
f=t.clientWidth
e=t.clientHeight
t.width=f
t.height=e
g.cN(f,e)
d=P.jJ(1)
c=G.dz("preparation",s,$.eT(),$.eS())
b=G.dz("instanced",s,$.eR(),$.eQ())
a=B.fX(!0,1,0,1,0,1,1,1)
v=b.d
o=b.e.x
n=P.Z(y,x)
m=J.f3(v.a)
a0=new G.hK(v,m,4,n,o,0,-1,P.Z(y,P.ag),"meshdata:cube",!1,!0)
l=G.dh(a.d,null)
n.i(0,"aPosition",J.c8(v.a))
a0.ch=l
a0.b0("aPosition",l,3)
a1=$.a6().h(0,"aPosition")
if(a1==null)H.U("Unknown canonical aPosition")
a2=o.h(0,"aPosition")
J.bB(v.a,m)
v.bT(0,a2,0)
v.cm(0,n.h(0,"aPosition"),a2,a1.b2(),5126,!1,0,0)
o=H.t(a.cQ(),"$isa",[P.C],"$asa")
a0.y=J.c8(v.a)
n=a0.ch.length
if(n<768){a0.sav(new Uint8Array(H.bT(o)))
a0.Q=5121}else if(n<196608){a0.sav(new Uint16Array(H.bT(o)))
a0.Q=5123}else{a0.sav(new Uint32Array(H.bT(o)))
a0.Q=5125}J.bB(v.a,m)
o=a0.y
n=a0.cx
J.c5(v.a,34963,o)
J.cM(v.a,34963,n,35048)
G.jo(a,a0)
L.fC(a0,d,80)
P.aF("instances: "+a0.k(0)+".GetNumInstances()}")
a3=G.dL(s,"float",f,e,34836,$.eA())
a4=G.dL(s,"frame::depth",f,e,33190,$.eC())
v=new G.di(s,null,a3,a4,null)
o=J.f1(s.a)
v.b=o
J.c6(s.a,36160,o)
J.cQ(s.a,36160,36064,3553,a3.b,0)
J.cQ(s.a,36160,36096,3553,a4.b,0)
a5=J.eZ(s.a,36160)
if(a5!==36053)H.U("Error Incomplete Framebuffer: "+H.d(a5))
J.c6(s.a,36160,null)
o=G.dt("mat")
n=new T.a9(new Float32Array(16))
n.a1()
o.d.i(0,"uModelMatrix",n)
n=G.dt("mat")
m=new T.a9(new Float32Array(16))
m.a1()
l=n.d
l.i(0,"uModelMatrix",m)
l.i(0,"uShininess",10)
l.i(0,"uTexture2",L.hF(s,d))
l.i(0,"uTexture",a3)
z.a=0
new L.kX(z,h,new L.dx(v,o,c,a0),f,e,g,new L.dx(new G.di(s,null,null,null,null),n,b,a0),new G.hl(r,q,p,P.Z(y,x),"illumination",!1,!0),u).$1(0)},
dx:{"^":"c;a,b,c,d",
b4:function(a,b,c){var z,y,x,w
z=[G.b5]
H.t(c,"$isa",z,"$asa")
y=this.a
x=y.a
y=y.b
J.c6(x.a,36160,y)
J.fB(x.a,0,0,a,b)
J.f_(x.a,17664)
w=H.l([this.b],z)
C.a.G(w,c)
this.c.cO(this.d,w)}},
kX:{"^":"o:26;a,b,c,d,e,f,r,x,y",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cE(b2)
if(typeof b2!=="number")return b2.a9()
z=this.a
z.a=b2+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.w(0,0)||w.w(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aU()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aU()
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
if(typeof v!=="number")return v.aU()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.dL(y.id,-1.4707963267948965,1.4707963267948965)
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
m=new T.p(new Float32Array(3))
m.t(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
l=v.a9(0,t)
l.aH(0)
k=m.bM(l)
k.aH(0)
j=l.bM(k)
j.aH(0)
t=k.aE(v)
u=j.aE(v)
v=l.aE(v)
r=k.a
i=r[0]
h=j.a
g=h[0]
f=l.a
e=f[0]
d=r[1]
c=h[1]
b=f[1]
r=r[2]
h=h[2]
f=f[2]
q[15]=1
q[14]=-v
q[13]=-u
q[12]=-t
q[11]=0
q[10]=f
q[9]=h
q[8]=r
q[7]=0
q[6]=b
q[5]=c
q[4]=d
q[3]=0
q[2]=e
q[1]=g
q[0]=i
q[12]=p
q[13]=o
q[14]=n
i=y.f
g=i.a
g[0]=q[2]
g[1]=q[6]
g[2]=q[10]
y=-y.k1
a=Math.sqrt(i.gaG())
p=g[0]/a
o=g[1]/a
n=g[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=p*p*a2+a0
y=n*a1
a4=p*o*a2-y
g=o*a1
a5=p*n*a2+g
a6=o*p*a2+y
a7=o*o*a2+a0
y=p*a1
a8=o*n*a2-y
a9=n*p*a2-g
b0=n*o*a2+y
b1=n*n*a2+a0
y=q[0]
g=q[4]
i=q[8]
e=q[1]
d=q[5]
c=q[9]
b=q[2]
r=q[6]
h=q[10]
f=q[3]
t=q[7]
u=q[11]
q[0]=y*a3+g*a6+i*a9
q[1]=e*a3+d*a6+c*a9
q[2]=b*a3+r*a6+h*a9
q[3]=f*a3+t*a6+u*a9
q[4]=y*a4+g*a7+i*b0
q[5]=e*a4+d*a7+c*b0
q[6]=b*a4+r*a7+h*b0
q[7]=f*a4+t*a7+u*b0
q[8]=y*a5+g*a8+i*b1
q[9]=e*a5+d*a8+c*b1
q[10]=b*a5+r*a8+h*b1
q[11]=f*a5+t*a8+u*b1
w.c.a4(0)
w.b.a4(0)
x.e=0
x.d=0
x.f=0
x.c.a4(0)
x.b.a4(0)
x=this.c
x.b.d.i(0,"uTime",z.a/2000)
w=this.d
u=this.e
t=this.f
f=[G.b5]
x.b4(w,u,H.l([t],f))
x=this.r
x.b.d.i(0,"uTime",z.a/2000)
x.b4(w,u,H.l([t,this.x],f))
C.I.gdE(window).c7(this,-1)
this.y.cX(z.a)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.bo.prototype
if(a==null)return J.dl.prototype
if(typeof a=="boolean")return J.hv.prototype
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.c)return a
return J.c0(a)}
J.aR=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.c)return a
return J.c0(a)}
J.cA=function(a){if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.c)return a
return J.c0(a)}
J.kG=function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b6.prototype
return a}
J.kH=function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b6.prototype
return a}
J.el=function(a){if(typeof a=="string")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b6.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bp.prototype
return a}if(a instanceof P.c)return a
return J.c0(a)}
J.c_=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.b6.prototype
return a}
J.aH=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).D(a,b)}
J.a7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kG(a).X(a,b)}
J.bg=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kU(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aR(a).h(a,b)}
J.cJ=function(a,b){return J.el(a).ar(a,b)}
J.bA=function(a,b){return J.j(a).dl(a,b)}
J.eU=function(a,b,c){return J.j(a).dm(a,b,c)}
J.cK=function(a,b){return J.j(a).bt(a,b)}
J.eV=function(a,b,c,d){return J.j(a).dA(a,b,c,d)}
J.cL=function(a,b,c){return J.j(a).bv(a,b,c)}
J.eW=function(a,b){return J.j(a).dG(a,b)}
J.c5=function(a,b,c){return J.j(a).bw(a,b,c)}
J.c6=function(a,b,c){return J.j(a).by(a,b,c)}
J.aI=function(a,b,c){return J.j(a).bz(a,b,c)}
J.bB=function(a,b){return J.j(a).dJ(a,b)}
J.eX=function(a,b){return J.j(a).bA(a,b)}
J.eY=function(a,b,c){return J.j(a).bB(a,b,c)}
J.cM=function(a,b,c,d){return J.j(a).bC(a,b,c,d)}
J.eZ=function(a,b){return J.j(a).bD(a,b)}
J.f_=function(a,b){return J.j(a).bE(a,b)}
J.cN=function(a,b,c,d,e){return J.j(a).bF(a,b,c,d,e)}
J.f0=function(a,b){return J.kH(a).N(a,b)}
J.c7=function(a,b,c){return J.aR(a).dM(a,b,c)}
J.c8=function(a){return J.j(a).bH(a)}
J.f1=function(a){return J.j(a).bI(a)}
J.f2=function(a){return J.j(a).bJ(a)}
J.cO=function(a){return J.j(a).bL(a)}
J.f3=function(a){return J.j(a).dQ(a)}
J.f4=function(a,b){return J.j(a).bN(a,b)}
J.c9=function(a,b){return J.j(a).bO(a,b)}
J.f5=function(a,b,c,d){return J.j(a).bP(a,b,c,d)}
J.f6=function(a,b,c,d,e){return J.j(a).dS(a,b,c,d,e)}
J.f7=function(a,b,c,d,e){return J.j(a).bQ(a,b,c,d,e)}
J.f8=function(a,b,c,d,e,f){return J.j(a).dT(a,b,c,d,e,f)}
J.cP=function(a,b){return J.cA(a).q(a,b)}
J.bC=function(a,b){return J.j(a).bR(a,b)}
J.f9=function(a,b){return J.j(a).bS(a,b)}
J.fa=function(a){return J.j(a).dU(a)}
J.fb=function(a,b){return J.j(a).F(a,b)}
J.cQ=function(a,b,c,d,e,f){return J.j(a).bV(a,b,c,d,e,f)}
J.fc=function(a,b){return J.j(a).aL(a,b)}
J.fd=function(a){return J.j(a).gdF(a)}
J.al=function(a){return J.A(a).gA(a)}
J.bD=function(a){return J.cA(a).gB(a)}
J.ae=function(a){return J.aR(a).gj(a)}
J.fe=function(a){return J.j(a).gah(a)}
J.ff=function(a){return J.j(a).ge0(a)}
J.fg=function(a){return J.j(a).ge8(a)}
J.fh=function(a){return J.c_(a).gco(a)}
J.bE=function(a){return J.c_(a).ga_(a)}
J.ca=function(a){return J.c_(a).gW(a)}
J.cR=function(a){return J.c_(a).gai(a)}
J.cb=function(a,b){return J.j(a).a0(a,b)}
J.fi=function(a){return J.j(a).aj(a)}
J.cS=function(a){return J.j(a).aM(a)}
J.fj=function(a,b){return J.j(a).aN(a,b)}
J.fk=function(a,b){return J.j(a).aO(a,b)}
J.fl=function(a,b,c){return J.j(a).aP(a,b,c)}
J.cT=function(a,b,c){return J.j(a).aT(a,b,c)}
J.fm=function(a,b){return J.j(a).bW(a,b)}
J.fn=function(a,b,c){return J.j(a).c1(a,b,c)}
J.cU=function(a){return J.j(a).e4(a)}
J.fo=function(a,b){return J.cA(a).aY(a,b)}
J.fp=function(a,b,c,d){return J.j(a).aZ(a,b,c,d)}
J.fq=function(a,b,c,d,e,f,g){return J.j(a).c4(a,b,c,d,e,f,g)}
J.fr=function(a,b,c,d){return J.j(a).c5(a,b,c,d)}
J.bh=function(a,b,c,d){return J.j(a).c6(a,b,c,d)}
J.fs=function(a,b,c,d,e,f){return J.j(a).e9(a,b,c,d,e,f)}
J.ft=function(a){return J.el(a).eb(a)}
J.bi=function(a){return J.A(a).k(a)}
J.fu=function(a,b,c,d){return J.j(a).ed(a,b,c,d)}
J.fv=function(a,b,c){return J.j(a).ca(a,b,c)}
J.fw=function(a,b,c){return J.j(a).cb(a,b,c)}
J.cc=function(a,b,c){return J.j(a).cc(a,b,c)}
J.fx=function(a,b,c){return J.j(a).cd(a,b,c)}
J.cV=function(a,b,c){return J.j(a).ce(a,b,c)}
J.cW=function(a,b,c){return J.j(a).cf(a,b,c)}
J.cX=function(a,b,c){return J.j(a).cg(a,b,c)}
J.cY=function(a,b,c,d){return J.j(a).ci(a,b,c,d)}
J.cZ=function(a,b,c,d){return J.j(a).cj(a,b,c,d)}
J.fy=function(a,b){return J.j(a).ck(a,b)}
J.fz=function(a,b,c){return J.j(a).ee(a,b,c)}
J.fA=function(a,b,c,d,e,f,g){return J.j(a).cl(a,b,c,d,e,f,g)}
J.fB=function(a,b,c,d,e){return J.j(a).cn(a,b,c,d,e)}
I.aS=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bF.prototype
C.J=W.cf.prototype
C.w=W.fL.prototype
C.x=W.fU.prototype
C.p=W.h2.prototype
C.K=W.h4.prototype
C.L=W.hj.prototype
C.q=W.hk.prototype
C.M=J.f.prototype
C.a=J.bm.prototype
C.y=J.dj.prototype
C.b=J.dk.prototype
C.N=J.dl.prototype
C.r=J.bn.prototype
C.i=J.bo.prototype
C.U=J.bp.prototype
C.e=H.hT.prototype
C.m=H.hV.prototype
C.Y=W.hW.prototype
C.B=J.i2.prototype
C.C=W.id.prototype
C.H=W.iE.prototype
C.v=J.b6.prototype
C.ae=W.aM.prototype
C.I=W.iQ.prototype
C.f=new P.jL()
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
C.z=function(hooks) { return hooks; }

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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.l(I.aS(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.W=H.l(I.aS(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.X=H.l(I.aS([]),[P.e])
C.t=H.l(I.aS(["bind","if","ref","repeat","syntax"]),[P.e])
C.u=H.l(I.aS(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.Z=new G.D("vec3","vertex btangents",0)
C.d=new G.D("vec3","",0)
C.a_=new G.D("vec4","delta from light",0)
C.n=new G.D("","",0)
C.D=new G.D("vec3","vertex coordinates",0)
C.a0=new G.D("vec3","vertex binormals",0)
C.E=new G.D("vec4","for wireframe",0)
C.a1=new G.D("vec4","per vertex color",0)
C.a2=new G.D("float","for normal maps",0)
C.j=new G.D("mat4","",0)
C.a4=new G.D("mat4","",4)
C.a3=new G.D("mat4","",128)
C.c=new G.D("float","",0)
C.a5=new G.D("float","",4)
C.a6=new G.D("float","depth for shadowmaps",0)
C.h=new G.D("sampler2D","",0)
C.a7=new G.D("float","for bump maps",0)
C.a8=new G.D("vec2","texture uvs",0)
C.a9=new G.D("float","time since program start in sec",0)
C.k=new G.D("vec2","",0)
C.aa=new G.D("samplerCube","",0)
C.l=new G.D("vec4","",0)
C.ab=new G.D("vec3","vertex normals",0)
C.ac=new G.D("sampler2DShadow","",0)
C.F=new G.D("vec3","per vertex color",0)
C.G=new G.D("mat3","",0)
C.ad=new G.D("vec3","vertex tangents",0)
$.a8=0
$.aU=null
$.d1=null
$.cu=!1
$.en=null
$.eg=null
$.es=null
$.bY=null
$.c2=null
$.cC=null
$.aP=null
$.b8=null
$.b9=null
$.cv=!1
$.I=C.f
$.af=null
$.ch=null
$.dc=null
$.db=null
$.d8=null
$.d7=null
$.d6=null
$.d5=null
$.ek=0
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
I.$lazy(y,x,w)}})(["lh","ey",function(){return H.em("_$dart_dartClosure")},"lU","cG",function(){return H.em("_$dart_js")},"mJ","eD",function(){return H.ab(H.bQ({
toString:function(){return"$receiver$"}}))},"mK","eE",function(){return H.ab(H.bQ({$method$:null,
toString:function(){return"$receiver$"}}))},"mL","eF",function(){return H.ab(H.bQ(null))},"mM","eG",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mP","eJ",function(){return H.ab(H.bQ(void 0))},"mQ","eK",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mO","eI",function(){return H.ab(H.dJ(null))},"mN","eH",function(){return H.ab(function(){try{null.$method$}catch(z){return z.message}}())},"mS","eM",function(){return H.ab(H.dJ(void 0))},"mR","eL",function(){return H.ab(function(){try{(void 0).$method$}catch(z){return z.message}}())},"n2","cH",function(){return P.iT()},"nj","bf",function(){return[]},"le","ex",function(){return{}},"na","eO",function(){return P.co(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"nb","cI",function(){return P.Z(P.e,P.bk)},"mt","ez",function(){return new G.dI(1281,0,4294967295)},"l9","eu",function(){return new G.dH(1281,1281,1281)},"nh","a6",function(){return P.dp(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.F,"aColorAlpha",C.a1,"aPosition",C.D,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.E,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.F,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.D,"vPositionFromLight",C.a_,"vCenter",C.E,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.e,G.D)},"mC","eA",function(){var z=G.cs()
z.d=!1
z.b=!0
z.a=!1
z.f=9728
z.r=9728
return z},"mE","eC",function(){var z=G.cs()
z.d=!1
z.b=!0
z.a=!1
z.c=!0
return z},"mD","eB",function(){var z=G.cs()
z.a=!0
z.f=9987
z.r=9729
return z},"lc","ew",function(){return T.ah(1,1,1)},"lb","ev",function(){return T.ah(0,0,0)},"n7","eN",function(){return H.l([T.ah(0,0,1),T.ah(0,0,-1),T.ah(0,1,0),T.ah(0,-1,0),T.ah(1,0,0),T.ah(-1,0,0)],[T.p])},"np","eR",function(){var z,y
z=G.bM("finalV")
y=[P.e]
z.aa(H.l(["aPosition","aNormal","aTexUV"],y))
z.aa(H.l(["iaRotation","iaTranslation","iaScale"],y))
z.ab(H.l(["vColor","vNormal","vTexUV","vPosition"],y))
z.an(H.l(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.b5(H.l(["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    rot.xyz *= sin(0.5 * rot.w * uTime) /  length(rot.xyz);\n    rot.w = cos(0.5 * rot.w * uTime);\n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main(void) {\n  {\n    vec3 p = aPosition * iaScale;\n    p = rotate_vertex_position(p, iaRotation);\n    p = p + iaTranslation;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(p, 1);\n  }\n  {\n      vec3 n = aNormal;\n      n = rotate_vertex_position(n, iaRotation);\n      vNormal = normalize(n);\n  }\n  vTexUV = aTexUV;\n  vPosition = gl_Position.xyz;\n}\n"],y))
return z},"no","eQ",function(){var z,y
z=G.bM("finalF")
y=[P.e]
z.ab(H.l(["vColor","vNormal","vTexUV","vPosition"],y))
z.an(H.l(["uTexture","uTexture2","uLightDescs","uLightTypes","uShininess","uEyePosition"],y))
z.b6(H.l(["float Edge(sampler2D t, ivec2 p) {\n\t\tvec4 hEdge = vec4(0.0);\n\t\thEdge -= texelFetch(t, ivec2(p.x - 1, p.y - 1), 0) * 1.0;\n\t\thEdge -= texelFetch(t, ivec2(p.x - 1, p.y    ), 0) * 2.0;\n\t\thEdge -= texelFetch(t, ivec2(p.x - 1, p.y + 1), 0) * 1.0;\n\t\thEdge += texelFetch(t, ivec2(p.x + 1, p.y - 1), 0) * 1.0;\n\t\thEdge += texelFetch(t, ivec2(p.x + 1, p.y    ), 0) * 2.0;\n\t\thEdge += texelFetch(t, ivec2(p.x + 1, p.y + 1), 0) * 1.0;\n\t\tvec4 vEdge = vec4(0.0);\n\t\tvEdge -= texelFetch(t, ivec2(p.x - 1, p.y - 1), 0) * 1.0;\n\t\tvEdge -= texelFetch(t, ivec2(p.x    , p.y - 1), 0) * 2.0;\n\t\tvEdge -= texelFetch(t, ivec2(p.x + 1, p.y - 1), 0) * 1.0;\n\t\tvEdge += texelFetch(t, ivec2(p.x - 1, p.y + 1), 0) * 1.0;\n\t\tvEdge += texelFetch(t, ivec2(p.x    , p.y + 1), 0) * 2.0;\n\t\tvEdge += texelFetch(t, ivec2(p.x + 1, p.y + 1), 0) * 1.0;\n\t\tvec3 edge = sqrt((hEdge.rgb * hEdge.rgb) + (vEdge.rgb * vEdge.rgb));\n\t\treturn length(edge);\n}\n\nvoid main(void) {\n  ColorComponents acc = CombinedLight(vPosition,\n                                      vNormal,\n                                      uEyePosition,\n                                      uLightDescs,\n                                      uLightTypes,\n                                      uShininess);\n                                    \n  float edge = Edge(uTexture, ivec2(gl_FragCoord.xy));\n  vec4 info = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0);\n  if (edge > 0.3) {\n      //oFragColor.rgb = vec3(0.0); \n      oFragColor.rgb = vec3(0.5 - edge); \n     // oFragColor.rgb = vec3(edge / (100.0 * info.w));\n    return;\n  } \n    \n  oFragColor.rgb = texture(uTexture2, vTexUV).rgb * 0.5 + \n                      acc.diffuse +\n                      acc.specular;\n}\n  "],y),H.l(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"nr","eT",function(){var z,y
z=G.bM("preparationV")
y=[P.e]
z.aa(H.l(["aPosition","aNormal","aTexUV"],y))
z.aa(H.l(["iaRotation","iaTranslation","iaScale"],y))
z.ab(H.l(["vNormal"],y))
z.an(H.l(["uPerspectiveViewMatrix","uModelMatrix","uTime"],y))
z.b5(H.l(["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    rot.xyz *= sin(0.5 * rot.w * uTime) /  length(rot.xyz);\n    rot.w = cos(0.5 * rot.w * uTime);\n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main(void) {\n    {\n      vec3 p = aPosition * iaScale;\n      p = rotate_vertex_position(p, iaRotation);\n      p = p + iaTranslation;\n      gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(p, 1);\n    }\n    {\n      vec3 n = aNormal;\n      n = rotate_vertex_position(n, iaRotation);\n      vNormal = normalize(n);\n    }\n}\n"],y))
return z},"nq","eS",function(){var z,y
z=G.bM("preparationF")
y=[P.e]
z.ab(H.l(["vNormal"],y))
z.b=z.b8(!0,H.t(H.l(["  oFragColor = vec4(vNormal, gl_FragCoord.w);\n  "],y),"$isa",y,"$asa"),null)
return z},"nm","eP",function(){return T.ah(0,-50,0)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.G,args:[W.S]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.e,args:[P.C]},{func:1,ret:P.O,args:[W.aa]},{func:1,ret:P.O,args:[P.e]},{func:1,ret:P.G,args:[W.aZ]},{func:1,ret:P.O,args:[W.Q,P.e,P.e,W.bu]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,],opt:[P.a0]},{func:1,ret:[P.ac,,],args:[,]},{func:1,ret:P.O,args:[W.u]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.G,args:[P.F]},{func:1,args:[W.ao]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.G,args:[W.aM]},{func:1,ret:P.C,args:[P.C,P.c]},{func:1,ret:-1,args:[P.F]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.l2(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(L.ep,[])
else L.ep([])})})()
//# sourceMappingURL=sketch.dart.js.map
