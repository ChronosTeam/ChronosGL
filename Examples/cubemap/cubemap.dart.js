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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cz(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",lG:{"^":"b;a"}}],["","",,J,{"^":"",
cD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cC==null){H.kG()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dN("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cG()]
if(v!=null)return v
v=H.kL(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cG(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
h:{"^":"b;",
D:function(a,b){return a===b},
gA:function(a){return H.b1(a)},
k:["cp",function(a){return"Instance of '"+H.b2(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hk:{"^":"h;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isR:1},
dl:{"^":"h;",
D:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isC:1},
cm:{"^":"h;",
gA:function(a){return 0},
k:["cr",function(a){return String(a)}]},
hT:{"^":"cm;"},
b4:{"^":"cm;"},
bq:{"^":"cm;",
k:function(a){var z=a[$.ez()]
if(z==null)return this.cr(a)
return"JavaScript function for "+H.e(J.bh(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbk:1},
bn:{"^":"h;$ti",
l:function(a,b){H.y(b,H.n(a,0))
if(!!a.fixed$length)H.a2(P.z("add"))
a.push(b)},
I:function(a,b){var z,y
H.x(b,"$isj",[H.n(a,0)],"$asj")
if(!!a.fixed$length)H.a2(P.z("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.W)(b),++y)a.push(b[y])},
a_:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
bp:function(a,b){var z,y
H.i(b,{func:1,ret:P.R,args:[H.n(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aI(a))}return!1},
ck:function(a,b){if(!!a.immutable$list)H.a2(P.z("sort"))
H.ig(a,J.kh(),H.n(a,0))},
ai:function(a){return this.ck(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aG(a[z],b))return!0
return!1},
k:function(a){return P.ck(a,"[","]")},
gB:function(a){return new J.fw(a,a.length,0,[H.n(a,0)])},
gA:function(a){return H.b1(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.ba(a,b))
return a[b]},
i:function(a,b,c){H.y(c,H.n(a,0))
if(!!a.immutable$list)H.a2(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ba(a,b))
a[b]=c},
$isv:1,
$asv:I.bb,
$isj:1,
$isa:1,
p:{
hj:function(a,b){return J.cl(H.m(a,[b]))},
cl:function(a){H.be(a)
a.fixed$length=Array
return a},
lE:[function(a,b){return J.f_(H.es(a,"$isX"),H.es(b,"$isX"))},"$2","kh",8,0,30]}},
lF:{"^":"bn;$ti"},
fw:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.y(a,H.n(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.W(z))
x=this.c
if(x>=y){this.sb4(null)
return!1}this.sb4(z[x]);++this.c
return!0},
$isaX:1},
bo:{"^":"h;",
K:function(a,b){var z
H.cE(b)
if(typeof b!=="number")throw H.c(H.b9(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gae(b)
if(this.gae(a)===z)return 0
if(this.gae(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gae:function(a){return a===0?1/a<0:a<0},
bZ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.z(""+a+".toInt()"))},
du:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.z(""+a+".ceil()"))},
dv:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.b9(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
e_:function(a,b){var z
if(b>20)throw H.c(P.bN(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gae(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
ct:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bm(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.bm(a,b)},
bm:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.z("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bk:function(a,b){var z
if(a>0)z=this.df(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
df:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.c(H.b9(b))
return a>b},
$isX:1,
$asX:function(){return[P.G]},
$isah:1,
$isG:1},
dk:{"^":"bo;",$isE:1},
dj:{"^":"bo;"},
bp:{"^":"h;",
an:function(a,b){if(b>=a.length)throw H.c(H.ba(a,b))
return a.charCodeAt(b)},
H:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.d_(b,null,null))
return a+b},
cm:function(a,b,c){var z
if(c>a.length)throw H.c(P.bN(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cl:function(a,b){return this.cm(a,b,0)},
co:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bO(b,null,null))
if(b>c)throw H.c(P.bO(b,null,null))
if(c>a.length)throw H.c(P.bO(c,null,null))
return a.substring(b,c)},
cn:function(a,b){return this.co(a,b,null)},
dZ:function(a){return a.toLowerCase()},
dz:function(a,b,c){if(c>a.length)throw H.c(P.bN(c,0,a.length,null,null))
return H.kS(a,b,c)},
K:function(a,b){var z
H.u(b)
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.ba(a,b))
return a[b]},
$isv:1,
$asv:I.bb,
$isX:1,
$asX:function(){return[P.d]},
$ishQ:1,
$isd:1}}],["","",,H,{"^":"",
di:function(){return new P.cr("No element")},
hi:function(){return new P.cr("Too many elements")},
ig:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.i(b,{func:1,ret:P.E,args:[c,c]})
H.br(a,0,J.aT(a)-1,b,c)},
br:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.ie(a,b,c,d,e)
else H.id(a,b,c,d,e)},
ie:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.aR(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a8(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
id:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.i(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.e.T(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.T(b+a0,2)
v=w-z
u=w+z
t=J.aR(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
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
if(typeof i!=="number")return i.a2()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.P()
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
if(typeof d!=="number")return d.P()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.P()
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
H.br(a,b,m-2,a1,a2)
H.br(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.aG(a1.$2(t.h(a,m),r),0);)++m
for(;J.aG(a1.$2(t.h(a,l),p),0);)--l
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
break}}H.br(a,m,l,a1,a2)}else H.br(a,m,l,a1,a2)},
da:{"^":"j;"},
bL:{"^":"da;$ti",
gB:function(a){return new H.dq(this,this.gj(this),0,[H.cB(this,"bL",0)])},
aI:function(a,b){return this.cq(0,H.i(b,{func:1,ret:P.R,args:[H.cB(this,"bL",0)]}))}},
dq:{"^":"b;a,b,c,0d,$ti",
sb5:function(a){this.d=H.y(a,H.n(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aR(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aI(z))
w=this.c
if(w>=x){this.sb5(null)
return!1}this.sb5(y.t(z,w));++this.c
return!0},
$isaX:1},
hx:{"^":"bL;a,b,$ti",
gj:function(a){return J.aT(this.a)},
t:function(a,b){return this.b.$1(J.f7(this.a,b))},
$asbL:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dO:{"^":"j;a,b,$ti",
gB:function(a){return new H.iE(J.bD(this.a),this.b,this.$ti)}},
iE:{"^":"aX;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gC(z)))return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bK:{"^":"b;$ti"}}],["","",,H,{"^":"",
aF:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ky:function(a){return init.types[H.M(a)]},
kJ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isw},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bh(a)
if(typeof z!=="string")throw H.c(H.b9(a))
return z},
b1:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b2:function(a){return H.hU(a)+H.bX(H.ai(a),0,null)},
hU:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isb4){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aF(w.length>1&&C.h.an(w,0)===36?C.h.cn(w,1):w)},
aJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i0:function(a){var z=H.aJ(a).getFullYear()+0
return z},
hZ:function(a){var z=H.aJ(a).getMonth()+1
return z},
hV:function(a){var z=H.aJ(a).getDate()+0
return z},
hW:function(a){var z=H.aJ(a).getHours()+0
return z},
hY:function(a){var z=H.aJ(a).getMinutes()+0
return z},
i_:function(a){var z=H.aJ(a).getSeconds()+0
return z},
hX:function(a){var z=H.aJ(a).getMilliseconds()+0
return z},
bx:function(a){throw H.c(H.b9(a))},
o:function(a,b){if(a==null)J.aT(a)
throw H.c(H.ba(a,b))},
ba:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
z=H.M(J.aT(a))
if(!(b<0)){if(typeof z!=="number")return H.bx(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bO(b,"index",null)},
b9:function(a){return new P.am(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cq()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ev})
z.name=""}else z.toString=H.ev
return z},
ev:function(){return J.bh(this.dartException)},
a2:function(a){throw H.c(a)},
W:function(a){throw H.c(P.aI(a))},
Z:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bk(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cn(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dx(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eB()
u=$.eC()
t=$.eD()
s=$.eE()
r=$.eH()
q=$.eI()
p=$.eG()
$.eF()
o=$.eK()
n=$.eJ()
m=v.J(y)
if(m!=null)return z.$1(H.cn(H.u(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.cn(H.u(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dx(H.u(y),m))}}return z.$1(new H.iA(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.am(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dC()
return a},
aD:function(a){var z
if(a==null)return new H.e4(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e4(a)},
ku:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kI:function(a,b,c,d,e,f){H.f(a,"$isbk")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.de("Unsupported number of arguments for wrapped closure"))},
aQ:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kI)
a.$identity=z
return z},
fH:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.i4(z).r}else x=d
w=e?Object.create(new H.ii().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
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
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ky,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d2:H.ce
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
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
fE:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d4:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fG(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fE(y,!w,z,b)
if(y===0){w=$.a9
if(typeof w!=="number")return w.H()
$.a9=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aU
if(v==null){v=H.bH("self")
$.aU=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a9
if(typeof w!=="number")return w.H()
$.a9=w+1
t+=w
w="return function("+t+"){return this."
v=$.aU
if(v==null){v=H.bH("self")
$.aU=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fF:function(a,b,c,d){var z,y
z=H.ce
y=H.d2
switch(b?-1:a){case 0:throw H.c(H.i8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fG:function(a,b){var z,y,x,w,v,u,t,s
z=$.aU
if(z==null){z=H.bH("self")
$.aU=z}y=$.d1
if(y==null){y=H.bH("receiver")
$.d1=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fF(w,!u,x,b)
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
cz:function(a,b,c,d,e,f,g){return H.fH(a,b,H.M(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a5(a,"String"))},
ek:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"double"))},
cE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a5(a,"num"))},
bZ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a5(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a5(a,"int"))},
cF:function(a,b){throw H.c(H.a5(a,H.aF(H.u(b).substring(3))))},
kQ:function(a,b){throw H.c(H.d3(a,H.aF(H.u(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.cF(a,b)},
aj:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.kQ(a,b)},
es:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.cF(a,b)},
be:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a5(a,"List<dynamic>"))},
kK:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.cF(a,b)},
cA:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
bw:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cA(J.B(a))
if(z==null)return!1
return H.ea(z,null,b,null)},
i:function(a,b){var z,y
if(a==null)return a
if($.cv)return a
$.cv=!0
try{if(H.bw(a,b))return a
z=H.by(b)
y=H.a5(a,z)
throw H.c(y)}finally{$.cv=!1}},
bc:function(a,b){if(a!=null&&!H.cy(a,b))H.a2(H.a5(a,H.by(b)))
return a},
ee:function(a){var z,y
z=J.B(a)
if(!!z.$isl){y=H.cA(z)
if(y!=null)return H.by(y)
return"Closure"}return H.b2(a)},
kT:function(a){throw H.c(new P.fQ(H.u(a)))},
eo:function(a){return init.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
ai:function(a){if(a==null)return
return a.$ti},
n7:function(a,b,c){return H.aS(a["$as"+H.e(c)],H.ai(b))},
bd:function(a,b,c,d){var z
H.u(c)
H.M(d)
z=H.aS(a["$as"+H.e(c)],H.ai(b))
return z==null?null:z[d]},
cB:function(a,b,c){var z
H.u(b)
H.M(c)
z=H.aS(a["$as"+H.e(b)],H.ai(a))
return z==null?null:z[c]},
n:function(a,b){var z
H.M(b)
z=H.ai(a)
return z==null?null:z[b]},
by:function(a){return H.aC(a,null)},
aC:function(a,b){var z,y
H.x(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aF(a[0].builtin$cls)+H.bX(a,1,b)
if(typeof a=="function")return H.aF(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.o(b,y)
return H.e(b[y])}if('func' in a)return H.kg(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.m([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.o(b,r)
t=C.h.H(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aC(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aC(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aC(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kt(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.aC(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bX:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cs("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return"<"+z.k(0)+">"},
kx:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isl){y=H.cA(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.ai(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ag:function(a,b,c,d){var z,y
H.u(b)
H.be(c)
H.u(d)
if(a==null)return!1
z=H.ai(a)
y=J.B(a)
if(y[b]==null)return!1
return H.eh(H.aS(y[d],z),null,c,null)},
bz:function(a,b,c,d){H.u(b)
H.be(c)
H.u(d)
if(a==null)return a
if(H.ag(a,b,c,d))return a
throw H.c(H.d3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bX(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.u(b)
H.be(c)
H.u(d)
if(a==null)return a
if(H.ag(a,b,c,d))return a
throw H.c(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aF(b.substring(3))+H.bX(c,0,null),init.mangledGlobalNames)))},
eh:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a0(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a0(a[y],b,c[y],d))return!1
return!0},
n3:function(a,b,c){return a.apply(b,H.aS(J.B(b)["$as"+H.e(c)],H.ai(b)))},
eq:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="C"||a===-1||a===-2||H.eq(z)}return!1},
cy:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="C"||b===-1||b===-2||H.eq(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cy(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bw(a,b)}z=J.B(a).constructor
y=H.ai(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a0(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cy(a,b))throw H.c(H.a5(a,H.by(b)))
return a},
a0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a0(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="C")return!0
if('func' in c)return H.ea(a,b,c,d)
if('func' in a)return c.builtin$cls==="bk"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a0("type" in a?a.type:null,b,x,d)
else if(H.a0(a,b,x,d))return!0
else{if(!('$is'+"Y" in y.prototype))return!1
w=y.prototype["$as"+"Y"]
v=H.aS(w,z?a.slice(1):null)
return H.a0(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eh(H.aS(r,z),b,u,d)},
ea:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kP(m,b,l,d)},
kP:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a0(c[w],d,a[w],b))return!1}return!0},
n6:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
kL:function(a){var z,y,x,w,v,u
z=H.u($.ep.$1(a))
y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.eg.$2(a,z))
if(z!=null){y=$.c_[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c4(x)
$.c_[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c3[z]=x
return x}if(v==="-"){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.et(a,x)
if(v==="*")throw H.c(P.dN(z))
if(init.leafTags[z]===true){u=H.c4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.et(a,x)},
et:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4:function(a){return J.cD(a,!1,null,!!a.$isw)},
kO:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c4(z)
else return J.cD(z,c,null,null)},
kG:function(){if(!0===$.cC)return
$.cC=!0
H.kH()},
kH:function(){var z,y,x,w,v,u,t,s
$.c_=Object.create(null)
$.c3=Object.create(null)
H.kC()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eu.$1(v)
if(u!=null){t=H.kO(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kC:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.aP(C.P,H.aP(C.U,H.aP(C.B,H.aP(C.B,H.aP(C.T,H.aP(C.Q,H.aP(C.R(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ep=new H.kD(v)
$.eg=new H.kE(u)
$.eu=new H.kF(t)},
aP:function(a,b){return a(b)||b},
kS:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
i3:{"^":"b;a,b,c,d,e,f,r,0x",p:{
i4:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cl(z)
y=z[0]
x=z[1]
return new H.i3(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iv:{"^":"b;a,b,c,d,e,f",
J:function(a){var z,y,x
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
if(z==null)z=H.m([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bS:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dK:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hO:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dx:function(a,b){return new H.hO(a,b==null?null:b.method)}}},
hl:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cn:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hl(a,y,z?null:b.receiver)}}},
iA:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kU:{"^":"l:5;a",
$1:function(a){if(!!J.B(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e4:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isQ:1},
l:{"^":"b;",
k:function(a){return"Closure '"+H.b2(this).trim()+"'"},
gcd:function(){return this},
$isbk:1,
gcd:function(){return this}},
dE:{"^":"l;"},
ii:{"^":"dE;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aF(z)+"'"}},
cd:{"^":"dE;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b1(this.a)
else y=typeof z!=="object"?J.al(z):H.b1(z)
return(y^H.b1(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b2(z)+"'")},
p:{
ce:function(a){return a.a},
d2:function(a){return a.c},
bH:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.cl(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iw:{"^":"N;a",
k:function(a){return this.a},
p:{
a5:function(a,b){return new H.iw("TypeError: "+P.bJ(a)+": type '"+H.ee(a)+"' is not a subtype of type '"+b+"'")}}},
fC:{"^":"N;a",
k:function(a){return this.a},
p:{
d3:function(a,b){return new H.fC("CastError: "+P.bJ(a)+": type '"+H.ee(a)+"' is not a subtype of type '"+b+"'")}}},
i7:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
i8:function(a){return new H.i7(a)}}},
dL:{"^":"b;a,0b,0c,0d",
gab:function(){var z=this.b
if(z==null){z=H.by(this.a)
this.b=z}return z},
k:function(a){return this.gab()},
gA:function(a){var z=this.d
if(z==null){z=C.h.gA(this.gab())
this.d=z}return z},
D:function(a,b){if(b==null)return!1
return b instanceof H.dL&&this.gab()===b.gab()}},
dm:{"^":"dr;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gF:function(a){return new H.aq(this,[H.n(this,0)])},
ad:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cW(z,b)}else{y=this.dM(b)
return y}},
dM:function(a){var z=this.d
if(z==null)return!1
return this.aD(this.as(z,J.al(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a8(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a8(w,b)
x=y==null?null:y.b
return x}else return this.dN(b)},
dN:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.as(z,J.al(a)&0x3ffffff)
x=this.aD(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.n(this,0))
H.y(c,H.n(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.au()
this.b=z}this.b6(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.au()
this.c=y}this.b6(y,b,c)}else{x=this.d
if(x==null){x=this.au()
this.d=x}w=J.al(b)&0x3ffffff
v=this.as(x,w)
if(v==null)this.aw(x,w,[this.al(b,c)])
else{u=this.aD(v,b)
if(u>=0)v[u].b=c
else v.push(this.al(b,c))}}},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.n(this,0),H.n(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aI(this))
z=z.c}},
b6:function(a,b,c){var z
H.y(b,H.n(this,0))
H.y(c,H.n(this,1))
z=this.a8(a,b)
if(z==null)this.aw(a,b,this.al(b,c))
else z.b=c},
b8:function(){this.r=this.r+1&67108863},
al:function(a,b){var z,y
z=new H.hq(H.y(a,H.n(this,0)),H.y(b,H.n(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b8()
return z},
aD:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
k:function(a){return P.ds(this)},
a8:function(a,b){return a[b]},
as:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
cX:function(a,b){delete a[b]},
cW:function(a,b){return this.a8(a,b)!=null},
au:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.cX(z,"<non-identifier-key>")
return z},
$isdn:1},
hq:{"^":"b;a,b,0c,0d"},
aq:{"^":"da;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.hr(z,z.r,this.$ti)
y.c=z.e
return y}},
hr:{"^":"b;a,b,0c,0d,$ti",
sb7:function(a){this.d=H.y(a,H.n(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aI(z))
else{z=this.c
if(z==null){this.sb7(null)
return!1}else{this.sb7(z.a)
this.c=this.c.c
return!0}}},
$isaX:1},
kD:{"^":"l:5;a",
$1:function(a){return this.a(a)}},
kE:{"^":"l:14;a",
$2:function(a,b){return this.a(a,b)}},
kF:{"^":"l:15;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
kt:function(a){return J.hj(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bW:function(a){var z,y
if(!!J.B(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ba(b,a))},
hJ:{"^":"h;",$isix:1,"%":"DataView;ArrayBufferView;cp|dZ|e_|dv|e0|e1|at"},
cp:{"^":"hJ;",
gj:function(a){return a.length},
$isv:1,
$asv:I.bb,
$isw:1,
$asw:I.bb},
dv:{"^":"e_;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ek(c)
H.ac(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.ah]},
$asp:function(){return[P.ah]},
$isj:1,
$asj:function(){return[P.ah]},
$isa:1,
$asa:function(){return[P.ah]},
"%":"Float64Array"},
at:{"^":"e1;",
i:function(a,b,c){H.M(c)
H.ac(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.E]},
$asp:function(){return[P.E]},
$isj:1,
$asj:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
hI:{"^":"dv;",$isae:1,"%":"Float32Array"},
lP:{"^":"at;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lQ:{"^":"at;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ishg:1,
"%":"Int32Array"},
lR:{"^":"at;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lS:{"^":"at;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hK:{"^":"at;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ismC:1,
"%":"Uint32Array"},
lT:{"^":"at;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lU:{"^":"at;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dZ:{"^":"cp+p;"},
e_:{"^":"dZ+bK;"},
e0:{"^":"cp+p;"},
e1:{"^":"e0+bK;"}}],["","",,P,{"^":"",
iJ:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ko()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aQ(new P.iL(z),1)).observe(y,{childList:true})
return new P.iK(z,y,x)}else if(self.setImmediate!=null)return P.kp()
return P.kq()},
mM:[function(a){self.scheduleImmediate(H.aQ(new P.iM(H.i(a,{func:1,ret:-1})),0))},"$1","ko",4,0,4],
mN:[function(a){self.setImmediate(H.aQ(new P.iN(H.i(a,{func:1,ret:-1})),0))},"$1","kp",4,0,4],
mO:[function(a){H.i(a,{func:1,ret:-1})
P.jY(0,a)},"$1","kq",4,0,4],
h7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.x(a,"$isj",[[P.Y,d]],"$asj")
s=[[P.a,d]]
y=new P.P(0,$.D,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.h9(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.W)(r),++p){w=r[p]
v=o
w.aH(new P.h8(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.P(0,$.D,s)
r.bb(C.a_)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.m(r,[d])}catch(n){u=H.Z(n)
t=H.aD(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.cq()
r=$.D
if(r!==C.d)r.toString
s=new P.P(0,r,s)
s.cT(m,t)
return s}else{z.c=u
z.d=t}}return y},
kk:function(a,b){if(H.bw(a,{func:1,args:[P.b,P.Q]}))return H.i(a,{func:1,ret:null,args:[P.b,P.Q]})
if(H.bw(a,{func:1,args:[P.b]}))return H.i(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.d_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kj:function(){var z,y
for(;z=$.aN,z!=null;){$.b8=null
y=z.b
$.aN=y
if(y==null)$.b7=null
z.a.$0()}},
n1:[function(){$.cw=!0
try{P.kj()}finally{$.b8=null
$.cw=!1
if($.aN!=null)$.cH().$1(P.ei())}},"$0","ei",0,0,1],
ed:function(a){var z=new P.dQ(H.i(a,{func:1,ret:-1}))
if($.aN==null){$.b7=z
$.aN=z
if(!$.cw)$.cH().$1(P.ei())}else{$.b7.b=z
$.b7=z}},
kn:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.ed(a)
$.b8=$.b7
return}y=new P.dQ(a)
x=$.b8
if(x==null){y.b=z
$.b8=y
$.aN=y}else{y.b=x.b
x.b=y
$.b8=y
if(y.b==null)$.b7=y}},
kR:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.D
if(C.d===y){P.aO(null,null,C.d,a)
return}y.toString
P.aO(null,null,y,H.i(y.bs(a),z))},
kf:function(a,b,c){a.dt(0)
b.a7(c)},
bY:function(a,b,c,d,e){var z={}
z.a=d
P.kn(new P.kl(z,e))},
eb:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
ec:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
km:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aO:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bs(d):c.dq(d,-1)
P.ed(d)},
iL:{"^":"l:6;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iK:{"^":"l:16;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iM:{"^":"l:0;a",
$0:function(){this.a.$0()}},
iN:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jX:{"^":"b;a,0b,c",
cQ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aQ(new P.jZ(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
p:{
jY:function(a,b){var z=new P.jX(!0,0)
z.cQ(a,b)
return z}}},
jZ:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
Y:{"^":"b;$ti"},
h9:{"^":"l:17;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isQ")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.N(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.N(z.c,z.d)}},
h8:{"^":"l;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.i(y,this.b,a)
if(z.b===0)this.c.bd(z.a)}else if(z.b===0&&!this.e)this.c.N(z.c,z.d)},
$S:function(){return{func:1,ret:P.C,args:[this.f]}}},
dT:{"^":"b;$ti"},
iI:{"^":"dT;a,$ti",
dw:function(a,b){var z
H.bc(b,{futureOr:1,type:H.n(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bQ("Future already completed"))
z.bb(b)}},
jS:{"^":"dT;a,$ti"},
aL:{"^":"b;0a,b,c,d,e,$ti",
dO:function(a){if(this.c!==6)return!0
return this.b.b.aF(H.i(this.d,{func:1,ret:P.R,args:[P.b]}),a.a,P.R,P.b)},
dL:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.n(this,1)}
w=this.b.b
if(H.bw(z,{func:1,args:[P.b,P.Q]}))return H.bc(w.dV(z,a.a,a.b,null,y,P.Q),x)
else return H.bc(w.aF(H.i(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
P:{"^":"b;bl:a<,b,0dc:c<,$ti",
aH:function(a,b,c){var z,y,x,w
z=H.n(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.d){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kk(b,y)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.P(0,$.D,[c])
w=b==null?1:3
this.ba(new P.aL(x,w,a,b,[z,c]))
return x},
af:function(a,b){return this.aH(a,null,b)},
ba:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaL")
this.c=a}else{if(z===2){y=H.f(this.c,"$isP")
z=y.a
if(z<4){y.ba(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j3(this,a),{func:1,ret:-1}))}},
bi:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaL")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isP")
y=u.a
if(y<4){u.bi(a)
return}this.a=y
this.c=u.c}z.a=this.aa(a)
y=this.b
y.toString
P.aO(null,null,y,H.i(new P.ja(z,this),{func:1,ret:-1}))}},
a9:function(){var z=H.f(this.c,"$isaL")
this.c=null
return this.aa(z)},
aa:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a7:function(a){var z,y,x
z=H.n(this,0)
H.bc(a,{futureOr:1,type:z})
y=this.$ti
if(H.ag(a,"$isY",y,"$asY"))if(H.ag(a,"$isP",y,null))P.bU(a,this)
else P.dU(a,this)
else{x=this.a9()
H.y(a,z)
this.a=4
this.c=a
P.aM(this,x)}},
bd:function(a){var z
H.y(a,H.n(this,0))
z=this.a9()
this.a=4
this.c=a
P.aM(this,z)},
N:function(a,b){var z
H.f(b,"$isQ")
z=this.a9()
this.a=8
this.c=new P.a_(a,b)
P.aM(this,z)},
bb:function(a){var z
H.bc(a,{futureOr:1,type:H.n(this,0)})
if(H.ag(a,"$isY",this.$ti,"$asY")){this.cU(a)
return}this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j5(this,a),{func:1,ret:-1}))},
cU:function(a){var z=this.$ti
H.x(a,"$isY",z,"$asY")
if(H.ag(a,"$isP",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j9(this,a),{func:1,ret:-1}))}else P.bU(a,this)
return}P.dU(a,this)},
cT:function(a,b){var z
H.f(b,"$isQ")
this.a=1
z=this.b
z.toString
P.aO(null,null,z,H.i(new P.j4(this,a,b),{func:1,ret:-1}))},
$isY:1,
p:{
dU:function(a,b){var z,y,x
b.a=1
try{a.aH(new P.j6(b),new P.j7(b),null)}catch(x){z=H.Z(x)
y=H.aD(x)
P.kR(new P.j8(b,z,y))}},
bU:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isP")
if(z>=4){y=b.a9()
b.a=a.a
b.c=a.c
P.aM(b,y)}else{y=H.f(b.c,"$isaL")
b.a=2
b.c=a
a.bi(y)}},
aM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isa_")
y=y.b
u=v.a
t=v.b
y.toString
P.bY(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aM(z.a,b)}y=z.a
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
if(p){H.f(r,"$isa_")
y=y.b
u=r.a
t=r.b
y.toString
P.bY(null,null,y,u,t)
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.jd(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jc(x,b,r).$0()}else if((y&2)!==0)new P.jb(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.B(y).$isY){if(y.a>=4){n=H.f(t.c,"$isaL")
t.c=null
b=t.aa(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bU(y,t)
return}}m=b.b
n=H.f(m.c,"$isaL")
m.c=null
b=m.aa(n)
y=x.a
u=x.b
if(!y){H.y(u,H.n(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa_")
m.a=8
m.c=u}z.a=m
y=m}}}},
j3:{"^":"l:0;a,b",
$0:function(){P.aM(this.a,this.b)}},
ja:{"^":"l:0;a,b",
$0:function(){P.aM(this.b,this.a.a)}},
j6:{"^":"l:6;a",
$1:function(a){var z=this.a
z.a=0
z.a7(a)}},
j7:{"^":"l:18;a",
$2:function(a,b){H.f(b,"$isQ")
this.a.N(a,b)},
$1:function(a){return this.$2(a,null)}},
j8:{"^":"l:0;a,b,c",
$0:function(){this.a.N(this.b,this.c)}},
j5:{"^":"l:0;a,b",
$0:function(){var z=this.a
z.bd(H.y(this.b,H.n(z,0)))}},
j9:{"^":"l:0;a,b",
$0:function(){P.bU(this.b,this.a)}},
j4:{"^":"l:0;a,b,c",
$0:function(){this.a.N(this.b,this.c)}},
jd:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bV(H.i(w.d,{func:1}),null)}catch(v){y=H.Z(v)
x=H.aD(v)
if(this.d){w=H.f(this.a.a.c,"$isa_").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa_")
else u.b=new P.a_(y,x)
u.a=!0
return}if(!!J.B(z).$isY){if(z instanceof P.P&&z.gbl()>=4){if(z.gbl()===8){w=this.b
w.b=H.f(z.gdc(),"$isa_")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.af(new P.je(t),null)
w.a=!1}}},
je:{"^":"l:19;a",
$1:function(a){return this.a}},
jc:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.n(x,0)
v=H.y(this.c,w)
u=H.n(x,1)
this.a.b=x.b.b.aF(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Z(t)
y=H.aD(t)
x=this.a
x.b=new P.a_(z,y)
x.a=!0}}},
jb:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa_")
w=this.c
if(w.dO(z)&&w.e!=null){v=this.b
v.b=w.dL(z)
v.a=!1}}catch(u){y=H.Z(u)
x=H.aD(u)
w=H.f(this.a.a.c,"$isa_")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a_(y,x)
s.a=!0}}},
dQ:{"^":"b;a,0b"},
im:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.P(0,$.D,[P.E])
z.a=0
x=H.n(this,0)
w=H.i(new P.ir(z,this),{func:1,ret:-1,args:[x]})
H.i(new P.is(z,y),{func:1,ret:-1})
W.af(this.a,this.b,w,!1,x)
return y},
gdJ:function(a){var z,y,x,w
z={}
y=new P.P(0,$.D,this.$ti)
z.a=null
x=H.n(this,0)
w=H.i(new P.ip(z,this,y),{func:1,ret:-1,args:[x]})
H.i(new P.iq(y),{func:1,ret:-1})
z.a=W.af(this.a,this.b,w,!1,x)
return y}},
ir:{"^":"l;a,b",
$1:function(a){H.y(a,H.n(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.n(this.b,0)]}}},
is:{"^":"l:0;a,b",
$0:function(){this.b.a7(this.a.a)}},
ip:{"^":"l;a,b,c",
$1:function(a){H.y(a,H.n(this.b,0))
P.kf(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.C,args:[H.n(this.b,0)]}}},
iq:{"^":"l:0;a",
$0:function(){var z,y,x,w
try{x=H.di()
throw H.c(x)}catch(w){z=H.Z(w)
y=H.aD(w)
$.D.toString
this.a.N(z,y)}}},
io:{"^":"b;"},
a_:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isN:1},
k4:{"^":"b;",$ismK:1},
kl:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cq()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jB:{"^":"k4;",
dW:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.d===$.D){a.$0()
return}P.eb(null,null,this,a,-1)}catch(x){z=H.Z(x)
y=H.aD(x)
P.bY(null,null,this,z,H.f(y,"$isQ"))}},
dX:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.d===$.D){a.$1(b)
return}P.ec(null,null,this,a,b,-1,c)}catch(x){z=H.Z(x)
y=H.aD(x)
P.bY(null,null,this,z,H.f(y,"$isQ"))}},
dq:function(a,b){return new P.jD(this,H.i(a,{func:1,ret:b}),b)},
bs:function(a){return new P.jC(this,H.i(a,{func:1,ret:-1}))},
dr:function(a,b){return new P.jE(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bV:function(a,b){H.i(a,{func:1,ret:b})
if($.D===C.d)return a.$0()
return P.eb(null,null,this,a,b)},
aF:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.D===C.d)return a.$1(b)
return P.ec(null,null,this,a,b,c,d)},
dV:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.D===C.d)return a.$2(b,c)
return P.km(null,null,this,a,b,c,d,e,f)}},
jD:{"^":"l;a,b,c",
$0:function(){return this.a.bV(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jC:{"^":"l:1;a,b",
$0:function(){return this.a.dW(this.b)}},
jE:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dX(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dp:function(a,b,c){H.be(a)
return H.x(H.ku(a,new H.dm(0,0,[b,c])),"$isdn",[b,c],"$asdn")},
a3:function(a,b){return new H.dm(0,0,[a,b])},
a4:function(a,b,c,d){return new P.jm(0,0,[d])},
hh:function(a,b,c){var z,y
if(P.cx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.m([],[P.d])
y=$.bf()
C.a.l(y,a)
try{P.ki(a,z)}finally{if(0>=y.length)return H.o(y,-1)
y.pop()}y=P.dD(b,H.kK(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
ck:function(a,b,c){var z,y,x
if(P.cx(a))return b+"..."+c
z=new P.cs(b)
y=$.bf()
C.a.l(y,a)
try{x=z
x.a=P.dD(x.gS(),a,", ")}finally{if(0>=y.length)return H.o(y,-1)
y.pop()}y=z
y.a=y.gS()+c
y=z.gS()
return y.charCodeAt(0)==0?y:y},
cx:function(a){var z,y
for(z=0;y=$.bf(),z<y.length;++z)if(a===y[z])return!0
return!1},
ki:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.d],"$asa")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.e(z.gC(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.o(b,-1)
v=b.pop()
if(0>=b.length)return H.o(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.o(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.u();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.o(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.o(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
co:function(a,b){var z,y,x
z=P.a4(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.W)(a),++x)z.l(0,H.y(a[x],b))
return z},
ds:function(a){var z,y,x
z={}
if(P.cx(a))return"{...}"
y=new P.cs("")
try{C.a.l($.bf(),a)
x=y
x.a=x.gS()+"{"
z.a=!0
J.fa(a,new P.hw(z,y))
z=y
z.a=z.gS()+"}"}finally{z=$.bf()
if(0>=z.length)return H.o(z,-1)
z.pop()}z=y.gS()
return z.charCodeAt(0)==0?z:z},
jm:{"^":"jg;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){var z=new P.dY(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbv")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbv")!=null}else return this.cV(b)},
cV:function(a){var z=this.d
if(z==null)return!1
return this.ar(this.bg(z,a),a)>=0},
l:function(a,b){var z,y
H.y(b,H.n(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cu()
this.b=z}return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cu()
this.c=y}return this.b9(y,b)}else return this.cR(0,b)},
cR:function(a,b){var z,y,x
H.y(b,H.n(this,0))
z=this.d
if(z==null){z=P.cu()
this.d=z}y=this.be(b)
x=z[y]
if(x==null)z[y]=[this.av(b)]
else{if(this.ar(x,b)>=0)return!1
x.push(this.av(b))}return!0},
bU:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.d5(0,b)},
d5:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bg(z,b)
x=this.ar(y,b)
if(x<0)return!1
this.bn(y.splice(x,1)[0])
return!0},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.at()}},
b9:function(a,b){H.y(b,H.n(this,0))
if(H.f(a[b],"$isbv")!=null)return!1
a[b]=this.av(b)
return!0},
bj:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbv")
if(z==null)return!1
this.bn(z)
delete a[b]
return!0},
at:function(){this.r=this.r+1&67108863},
av:function(a){var z,y
z=new P.bv(H.y(a,H.n(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.at()
return z},
bn:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.at()},
be:function(a){return J.al(a)&0x3ffffff},
bg:function(a,b){return a[this.be(b)]},
ar:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aG(a[y].a,b))return y
return-1},
p:{
cu:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bv:{"^":"b;a,0b,0c"},
dY:{"^":"b;a,b,0c,0d,$ti",
sbc:function(a){this.d=H.y(a,H.n(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aI(z))
else{z=this.c
if(z==null){this.sbc(null)
return!1}else{this.sbc(H.y(z.a,H.n(this,0)))
this.c=this.c.b
return!0}}},
$isaX:1,
p:{
jn:function(a,b,c){var z=new P.dY(a,b,[c])
z.c=a.e
return z}}},
jg:{"^":"i9;"},
hs:{"^":"jo;",$isj:1,$isa:1},
p:{"^":"b;$ti",
gB:function(a){return new H.dq(a,this.gj(a),0,[H.bd(this,a,"p",0)])},
t:function(a,b){return this.h(a,b)},
dK:function(a,b,c,d){var z,y,x
H.y(b,d)
H.i(c,{func:1,ret:d,args:[d,H.bd(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aI(a))}return y},
k:function(a){return P.ck(a,"[","]")}},
dr:{"^":"T;"},
hw:{"^":"l:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
T:{"^":"b;$ti",
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.bd(this,a,"T",0),H.bd(this,a,"T",1)]})
for(z=J.bD(this.gF(a));z.u();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aT(this.gF(a))},
k:function(a){return P.ds(a)},
$isJ:1},
ia:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.bD(H.x(b,"$isj",this.$ti,"$asj"));z.u();)this.l(0,z.gC(z))},
k:function(a){return P.ck(this,"{","}")},
$isj:1,
$ismb:1},
i9:{"^":"ia;"},
jo:{"^":"b+p;"}}],["","",,P,{"^":"",
h2:function(a){if(a instanceof H.l)return a.k(0)
return"Instance of '"+H.b2(a)+"'"},
bJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bh(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h2(a)},
de:function(a){return new P.j0(a)},
aE:function(a){H.c5(H.e(a))},
R:{"^":"b;"},
"+bool":0,
bI:{"^":"b;a,b",
D:function(a,b){if(b==null)return!1
return b instanceof P.bI&&this.a===b.a&&!0},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isbI").a)},
gA:function(a){var z=this.a
return(z^C.e.bk(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fR(H.i0(this))
y=P.bj(H.hZ(this))
x=P.bj(H.hV(this))
w=P.bj(H.hW(this))
v=P.bj(H.hY(this))
u=P.bj(H.i_(this))
t=P.fS(H.hX(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isX:1,
$asX:function(){return[P.bI]},
p:{
fR:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bj:function(a){if(a>=10)return""+a
return"0"+a}}},
ah:{"^":"G;"},
"+double":0,
aV:{"^":"b;a",
P:function(a,b){return C.e.P(this.a,H.f(b,"$isaV").a)},
D:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isaV").a)},
k:function(a){var z,y,x,w,v
z=new P.h_()
y=this.a
if(y<0)return"-"+new P.aV(0-y).k(0)
x=z.$1(C.e.T(y,6e7)%60)
w=z.$1(C.e.T(y,1e6)%60)
v=new P.fZ().$1(y%1e6)
return""+C.e.T(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isX:1,
$asX:function(){return[P.aV]},
p:{
fY:function(a,b,c,d,e,f){return new P.aV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fZ:{"^":"l:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h_:{"^":"l:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"b;"},
cq:{"^":"N;",
k:function(a){return"Throw of null."}},
am:{"^":"N;a,b,c,d",
gap:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gao:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gap()+y+x
if(!this.a)return w
v=this.gao()
u=P.bJ(this.b)
return w+v+": "+u},
p:{
cZ:function(a){return new P.am(!1,null,null,a)},
d_:function(a,b,c){return new P.am(!0,a,b,c)}}},
dy:{"^":"am;e,f,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bO:function(a,b,c){return new P.dy(null,null,!0,a,b,"Value not in range")},
bN:function(a,b,c,d,e){return new P.dy(b,c,!0,a,d,"Invalid value")}}},
hf:{"^":"am;e,j:f>,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a2()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
H:function(a,b,c,d,e){var z=H.M(e==null?J.aT(b):e)
return new P.hf(b,z,!0,a,c,"Index out of range")}}},
iB:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
z:function(a){return new P.iB(a)}}},
iz:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
dN:function(a){return new P.iz(a)}}},
cr:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
bQ:function(a){return new P.cr(a)}}},
fI:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bJ(z)+"."},
p:{
aI:function(a){return new P.fI(a)}}},
dC:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isN:1},
fQ:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
j0:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bk:{"^":"b;"},
E:{"^":"G;"},
"+int":0,
j:{"^":"b;$ti",
aI:["cq",function(a,b){var z=H.cB(this,"j",0)
return new H.dO(this,H.i(b,{func:1,ret:P.R,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.u();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.a2(P.bN(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.u();){x=z.gC(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
k:function(a){return P.hh(this,"(",")")}},
aX:{"^":"b;$ti"},
a:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
C:{"^":"b;",
gA:function(a){return P.b.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isX:1,
$asX:function(){return[P.G]}},
"+num":0,
b:{"^":";",
D:function(a,b){return this===b},
gA:function(a){return H.b1(this)},
k:function(a){return"Instance of '"+H.b2(this)+"'"},
toString:function(){return this.k(this)}},
Q:{"^":"b;"},
d:{"^":"b;",$isX:1,
$asX:function(){return[P.d]},
$ishQ:1},
"+String":0,
cs:{"^":"b;S:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dD:function(a,b,c){var z=J.bD(b)
if(!z.u())return a
if(c.length===0){do a+=H.e(z.gC(z))
while(z.u())}else{a+=H.e(z.gC(z))
for(;z.u();)a=a+c+H.e(z.gC(z))}return a}}}}],["","",,W,{"^":"",
h0:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.p).L(z,a,b,c)
y.toString
z=W.t
z=new H.dO(new W.a6(y),H.i(new W.h1(),{func:1,ret:P.R,args:[z]}),[z])
x=z.gB(z)
if(!x.u())H.a2(H.di())
w=x.gC(x)
if(x.u())H.a2(H.hi())
return H.f(w,"$isS")},
dd:function(a){H.f(a,"$isL")
return"wheel"},
aW:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fd(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Z(x)}return z},
iY:function(a,b){return document.createElement(a)},
bV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dX:function(a,b,c,d){var z,y
z=W.bV(W.bV(W.bV(W.bV(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e9:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iS(a)
if(!!J.B(z).$isL)return z
return}else return H.f(a,"$isL")},
ef:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.d)return a
return z.dr(a,b)},
K:{"^":"S;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kV:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fu:{"^":"K;",
k:function(a){return String(a)},
$isfu:1,
"%":"HTMLAnchorElement"},
kW:{"^":"K;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d0:{"^":"K;",$isd0:1,"%":"HTMLBaseElement"},
fz:{"^":"h;","%":";Blob"},
bG:{"^":"K;",$isbG:1,"%":"HTMLBodyElement"},
bi:{"^":"K;0n:height=,0m:width=",
aJ:function(a,b,c){if(c!=null)return this.d_(a,b,P.kr(c,null))
return this.d0(a,b)},
ce:function(a,b){return this.aJ(a,b,null)},
d_:function(a,b,c){return a.getContext(b,c)},
d0:function(a,b){return a.getContext(b)},
$isbi:1,
"%":"HTMLCanvasElement"},
fB:{"^":"h;",
ac:function(a,b,c){return a.addColorStop(b,c)},
"%":"CanvasGradient"},
cf:{"^":"h;",
bB:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dI:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
ah:function(a){return P.a1(a.getContextAttributes())},
$iscf:1,
"%":"CanvasRenderingContext2D"},
l1:{"^":"t;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fJ:{"^":"cg;",$isfJ:1,"%":"CSSNumericValue|CSSUnitValue"},
l2:{"^":"fM;0j:length=","%":"CSSPerspective"},
an:{"^":"h;",$isan:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fK:{"^":"iQ;0j:length=",
aO:function(a,b){var z=this.d1(a,this.am(a,b))
return z==null?"":z},
am:function(a,b){var z,y
z=$.ey()
y=z[b]
if(typeof y==="string")return y
y=this.dg(a,b)
z[b]=y
return y},
dg:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fT()+b
if(z in a)return z
return b},
d1:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fL:{"^":"b;",
gn:function(a){return this.aO(a,"height")},
gm:function(a){return this.aO(a,"width")}},
cg:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fM:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l4:{"^":"cg;0j:length=","%":"CSSTransformValue"},
l5:{"^":"cg;0j:length=","%":"CSSUnparsedValue"},
l7:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fU:{"^":"K;","%":"HTMLDivElement"},
fV:{"^":"t;",
dj:function(a,b){return a.adoptNode(b)},
cf:function(a,b){return a.getElementById(b)},
dR:function(a,b){return a.querySelector(b)},
gbP:function(a){return new W.bt(a,"mousedown",!1,[W.U])},
gbQ:function(a){return new W.bt(a,"mousemove",!1,[W.U])},
gbR:function(a){return new W.bt(a,"mouseup",!1,[W.U])},
gbS:function(a){return new W.bt(a,H.u(W.dd(a)),!1,[W.aK])},
"%":"XMLDocument;Document"},
l8:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fW:{"^":"h;",
dC:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l9:{"^":"iU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isV",[P.G],"$asV")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.V,P.G]]},
$isw:1,
$asw:function(){return[[P.V,P.G]]},
$asp:function(){return[[P.V,P.G]]},
$isj:1,
$asj:function(){return[[P.V,P.G]]},
$isa:1,
$asa:function(){return[[P.V,P.G]]},
$asq:function(){return[[P.V,P.G]]},
"%":"ClientRectList|DOMRectList"},
fX:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
D:function(a,b){var z
if(b==null)return!1
if(!H.ag(b,"$isV",[P.G],"$asV"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dX(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isV:1,
$asV:function(){return[P.G]},
"%":";DOMRectReadOnly"},
la:{"^":"iW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.d]},
$isw:1,
$asw:function(){return[P.d]},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
lb:{"^":"h;0j:length=","%":"DOMTokenList"},
S:{"^":"t;0dY:tagName=",
gdm:function(a){return new W.iX(a)},
k:function(a){return a.localName},
L:["aj",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dc
if(z==null){z=H.m([],[W.aa])
y=new W.dw(z)
C.a.l(z,W.dV(null))
C.a.l(z,W.e5())
$.dc=y
d=y}else d=z
z=$.db
if(z==null){z=new W.e8(d)
$.db=z
c=z}else{z.a=d
c=z}}if($.ad==null){z=document
y=z.implementation
y=(y&&C.L).dC(y,"")
$.ad=y
$.ch=y.createRange()
y=$.ad
y.toString
y=y.createElement("base")
H.f(y,"$isd0")
y.href=z.baseURI
z=$.ad.head;(z&&C.M).G(z,y)}z=$.ad
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbG")}z=$.ad
if(!!this.$isbG)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ad.body;(z&&C.p).G(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.Y,a.tagName)){z=$.ch;(z&&C.E).cg(z,x)
z=$.ch
w=(z&&C.E).dA(z,b)}else{x.innerHTML=b
w=$.ad.createDocumentFragment()
for(z=J.k(w);y=x.firstChild,y!=null;)z.G(w,y)}z=$.ad.body
if(x==null?z!=null:x!==z)J.cS(x)
c.aT(w)
C.t.dj(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dB",null,null,"ge8",5,5,null],
cj:function(a,b,c,d){a.textContent=null
this.G(a,this.L(a,b,c,d))},
ci:function(a,b){return this.cj(a,b,null,null)},
V:function(a,b){return a.getAttribute(b)},
d6:function(a,b){return a.removeAttribute(b)},
gbP:function(a){return new W.bs(a,"mousedown",!1,[W.U])},
gbQ:function(a){return new W.bs(a,"mousemove",!1,[W.U])},
gbR:function(a){return new W.bs(a,"mouseup",!1,[W.U])},
gbS:function(a){return new W.bs(a,H.u(W.dd(a)),!1,[W.aK])},
$isS:1,
"%":";Element"},
h1:{"^":"l:20;",
$1:function(a){return!!J.B(H.f(a,"$ist")).$isS}},
ld:{"^":"K;0n:height=,0m:width=","%":"HTMLEmbedElement"},
O:{"^":"h;",$isO:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
di:function(a,b,c,d){H.i(c,{func:1,args:[W.O]})
if(c!=null)this.cS(a,b,c,!1)},
cS:function(a,b,c,d){return a.addEventListener(b,H.aQ(H.i(c,{func:1,args:[W.O]}),1),!1)},
d8:function(a,b,c,d){return a.removeEventListener(b,H.aQ(H.i(c,{func:1,args:[W.O]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e2|e3|e6|e7"},
ao:{"^":"fz;",$isao:1,"%":"File"},
lu:{"^":"j2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isao")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ao]},
$isw:1,
$asw:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$isj:1,
$asj:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"FileList"},
lv:{"^":"L;0j:length=","%":"FileWriter"},
ly:{"^":"K;0j:length=","%":"HTMLFormElement"},
ap:{"^":"h;",$isap:1,"%":"Gamepad"},
hc:{"^":"K;","%":"HTMLHeadElement"},
lz:{"^":"h;0j:length=","%":"History"},
lA:{"^":"ji;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isw:1,
$asw:function(){return[W.t]},
$asp:function(){return[W.t]},
$isj:1,
$asj:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hd:{"^":"fV;","%":"HTMLDocument"},
lB:{"^":"K;0n:height=,0m:width=","%":"HTMLIFrameElement"},
ci:{"^":"h;0n:height=,0m:width=",$isci:1,"%":"ImageBitmap"},
cj:{"^":"h;0n:height=,0m:width=",$iscj:1,"%":"ImageData"},
bm:{"^":"K;0n:height=,0m:width=",$isbm:1,"%":"HTMLImageElement"},
lD:{"^":"K;0n:height=,0m:width=","%":"HTMLInputElement"},
aY:{"^":"dM;",$isaY:1,"%":"KeyboardEvent"},
hv:{"^":"h;",
k:function(a){return String(a)},
$ishv:1,
"%":"Location"},
hy:{"^":"K;","%":"HTMLAudioElement;HTMLMediaElement"},
lL:{"^":"h;0j:length=","%":"MediaList"},
lM:{"^":"jq;",
h:function(a,b){return P.a1(a.get(H.u(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gF:function(a){var z=H.m([],[P.d])
this.E(a,new W.hA(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hA:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lN:{"^":"jr;",
h:function(a,b){return P.a1(a.get(H.u(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gF:function(a){var z=H.m([],[P.d])
this.E(a,new W.hB(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hB:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
as:{"^":"h;",$isas:1,"%":"MimeType"},
lO:{"^":"jt;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isas")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.as]},
$isw:1,
$asw:function(){return[W.as]},
$asp:function(){return[W.as]},
$isj:1,
$asj:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"MimeTypeArray"},
U:{"^":"dM;",
gbO:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b0(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.B(W.e9(z)).$isS)throw H.c(P.z("offsetX is only supported on elements"))
y=H.f(W.e9(z),"$isS")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.b0(u,v,w),"$isb0",w,"$asb0")
if(typeof z!=="number")return z.aW()
if(typeof x!=="number")return x.aW()
return new P.b0(C.u.bZ(z-u),C.u.bZ(x-v),w)}},
$isU:1,
"%":";DragEvent|MouseEvent"},
a6:{"^":"hs;a",
ga3:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bQ("No elements"))
if(y>1)throw H.c(P.bQ("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.x(b,"$isj",[W.t],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.k(y),v=0;v<x;++v)w.G(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$ist")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.o(y,b)
J.eU(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.dg(z,z.length,-1,[H.bd(C.a0,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.o(z,b)
return z[b]},
$asp:function(){return[W.t]},
$asj:function(){return[W.t]},
$asa:function(){return[W.t]}},
t:{"^":"L;0dQ:previousSibling=",
dS:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cp(a):z},
G:function(a,b){return a.appendChild(b)},
d7:function(a,b){return a.removeChild(b)},
d9:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hL:{"^":"jv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isw:1,
$asw:function(){return[W.t]},
$asp:function(){return[W.t]},
$isj:1,
$asj:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lX:{"^":"K;0n:height=,0m:width=","%":"HTMLObjectElement"},
lZ:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
m_:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
au:{"^":"h;0j:length=",$isau:1,"%":"Plugin"},
m1:{"^":"jz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.au]},
$isw:1,
$asw:function(){return[W.au]},
$asp:function(){return[W.au]},
$isj:1,
$asj:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"PluginArray"},
m3:{"^":"U;0n:height=,0m:width=","%":"PointerEvent"},
i2:{"^":"h;",
dA:function(a,b){return a.createContextualFragment(b)},
cg:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m8:{"^":"jF;",
h:function(a,b){return P.a1(a.get(H.u(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gF:function(a){var z=H.m([],[P.d])
this.E(a,new W.i6(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i6:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m9:{"^":"h;0n:height=,0m:width=","%":"Screen"},
ma:{"^":"K;0j:length=","%":"HTMLSelectElement"},
av:{"^":"L;",$isav:1,"%":"SourceBuffer"},
mc:{"^":"e3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.av]},
$isw:1,
$asw:function(){return[W.av]},
$asp:function(){return[W.av]},
$isj:1,
$asj:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"SourceBufferList"},
aw:{"^":"h;",$isaw:1,"%":"SpeechGrammar"},
md:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aw]},
$isw:1,
$asw:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isj:1,
$asj:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"SpeechGrammarList"},
ax:{"^":"h;0j:length=",$isax:1,"%":"SpeechRecognitionResult"},
mg:{"^":"jO;",
h:function(a,b){return this.bh(a,H.u(b))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d3(a,z)
if(y==null)return
b.$2(y,this.bh(a,y))}},
gF:function(a){var z=H.m([],[P.d])
this.E(a,new W.il(z))
return z},
gj:function(a){return a.length},
bh:function(a,b){return a.getItem(b)},
d3:function(a,b){return a.key(b)},
$asT:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
il:{"^":"l:21;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ay:{"^":"h;",$isay:1,"%":"CSSStyleSheet|StyleSheet"},
it:{"^":"K;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=W.h0("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a6(y).I(0,new W.a6(z))
return y},
"%":"HTMLTableElement"},
mj:{"^":"K;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga3(z)
x.toString
z=new W.a6(x)
w=z.ga3(z)
y.toString
w.toString
new W.a6(y).I(0,new W.a6(w))
return y},
"%":"HTMLTableRowElement"},
mk:{"^":"K;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aj(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a6(z)
x=z.ga3(z)
y.toString
x.toString
new W.a6(y).I(0,new W.a6(x))
return y},
"%":"HTMLTableSectionElement"},
dF:{"^":"K;",$isdF:1,"%":"HTMLTemplateElement"},
ml:{"^":"h;0m:width=","%":"TextMetrics"},
az:{"^":"L;",$isaz:1,"%":"TextTrack"},
aA:{"^":"L;",$isaA:1,"%":"TextTrackCue|VTTCue"},
mm:{"^":"jW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaA")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aA]},
$isw:1,
$asw:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isj:1,
$asj:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"TextTrackCueList"},
mn:{"^":"e7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaz")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.az]},
$isw:1,
$asw:function(){return[W.az]},
$asp:function(){return[W.az]},
$isj:1,
$asj:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"TextTrackList"},
mo:{"^":"h;0j:length=","%":"TimeRanges"},
aB:{"^":"h;",$isaB:1,"%":"Touch"},
mp:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaB")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aB]},
$isw:1,
$asw:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isj:1,
$asj:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"TouchList"},
mq:{"^":"h;0j:length=","%":"TrackDefaultList"},
dM:{"^":"O;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mE:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
ct:{"^":"hy;0n:height=,0m:width=",$isct:1,"%":"HTMLVideoElement"},
mH:{"^":"L;0j:length=","%":"VideoTrackList"},
mI:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
mJ:{"^":"h;0m:width=","%":"VTTRegion"},
aK:{"^":"U;",
gdE:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
$isaK:1,
"%":"WheelEvent"},
iF:{"^":"L;",
gdl:function(a){var z,y,x
z=P.G
y=new P.P(0,$.D,[z])
x=H.i(new W.iG(new P.jS(y,[z])),{func:1,ret:-1,args:[P.G]})
this.cZ(a)
this.da(a,W.ef(x,z))
return y},
da:function(a,b){return a.requestAnimationFrame(H.aQ(H.i(b,{func:1,ret:-1,args:[P.G]}),1))},
cZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdP:1,
"%":"DOMWindow|Window"},
iG:{"^":"l:22;a",
$1:function(a){var z=this.a
a=H.bc(H.cE(a),{futureOr:1,type:H.n(z,0)})
z=z.a
if(z.a!==0)H.a2(P.bQ("Future already completed"))
z.a7(a)}},
dR:{"^":"t;",$isdR:1,"%":"Attr"},
mP:{"^":"k6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isan")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.an]},
$isw:1,
$asw:function(){return[W.an]},
$asp:function(){return[W.an]},
$isj:1,
$asj:function(){return[W.an]},
$isa:1,
$asa:function(){return[W.an]},
$asq:function(){return[W.an]},
"%":"CSSRuleList"},
mR:{"^":"fX;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
D:function(a,b){var z
if(b==null)return!1
if(!H.ag(b,"$isV",[P.G],"$asV"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.k(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dX(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mS:{"^":"k8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isap")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ap]},
$isw:1,
$asw:function(){return[W.ap]},
$asp:function(){return[W.ap]},
$isj:1,
$asj:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"GamepadList"},
mX:{"^":"ka;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isw:1,
$asw:function(){return[W.t]},
$asp:function(){return[W.t]},
$isj:1,
$asj:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mY:{"^":"kc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isax")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ax]},
$isw:1,
$asw:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isj:1,
$asj:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"SpeechRecognitionResultList"},
mZ:{"^":"ke;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isay")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ay]},
$isw:1,
$asw:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isj:1,
$asj:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"StyleSheetList"},
iO:{"^":"dr;cY:a<",
E:function(a,b){var z,y,x,w,v,u
H.i(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gF(this),y=z.length,x=this.a,w=J.k(x),v=0;v<z.length;z.length===y||(0,H.W)(z),++v){u=z[v]
b.$2(u,w.V(x,u))}},
gF:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.m([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.o(z,w)
v=H.f(z[w],"$isdR")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asT:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
iX:{"^":"iO;a",
h:function(a,b){return J.cb(this.a,H.u(b))},
gj:function(a){return this.gF(this).length}},
bt:{"^":"im;a,b,c,$ti"},
bs:{"^":"bt;a,b,c,$ti"},
iZ:{"^":"io;a,b,c,d,e,$ti",
sd4:function(a){this.d=H.i(a,{func:1,args:[W.O]})},
dt:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.i(y,{func:1,args:[W.O]})
if(x)J.eT(z,this.c,y,!1)}this.b=null
this.sd4(null)
return},
p:{
af:function(a,b,c,d,e){var z=W.ef(new W.j_(c),W.O)
if(z!=null&&!0)J.eV(a,b,z,!1)
return new W.iZ(0,a,b,z,!1,[e])}}},
j_:{"^":"l:23;a",
$1:function(a){return this.a.$1(H.f(a,"$isO"))}},
bu:{"^":"b;a",
cO:function(a){var z,y
z=$.cI()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.W[y],W.kA())
for(y=0;y<12;++y)z.i(0,C.w[y],W.kB())}},
U:function(a){return $.eN().w(0,W.aW(a))},
O:function(a,b,c){var z,y,x
z=W.aW(a)
y=$.cI()
x=y.h(0,H.e(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bZ(x.$4(a,b,c,this))},
$isaa:1,
p:{
dV:function(a){var z,y
z=document.createElement("a")
y=new W.jG(z,window.location)
y=new W.bu(y)
y.cO(a)
return y},
mV:[function(a,b,c,d){H.f(a,"$isS")
H.u(b)
H.u(c)
H.f(d,"$isbu")
return!0},"$4","kA",16,0,13],
mW:[function(a,b,c,d){var z,y,x
H.f(a,"$isS")
H.u(b)
H.u(c)
z=H.f(d,"$isbu").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kB",16,0,13]}},
q:{"^":"b;$ti",
gB:function(a){return new W.dg(a,this.gj(a),-1,[H.bd(this,a,"q",0)])}},
dw:{"^":"b;a",
U:function(a){return C.a.bp(this.a,new W.hN(a))},
O:function(a,b,c){return C.a.bp(this.a,new W.hM(a,b,c))},
$isaa:1},
hN:{"^":"l:9;a",
$1:function(a){return H.f(a,"$isaa").U(this.a)}},
hM:{"^":"l:9;a,b,c",
$1:function(a){return H.f(a,"$isaa").O(this.a,this.b,this.c)}},
jH:{"^":"b;",
cP:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aI(0,new W.jI())
y=b.aI(0,new W.jJ())
this.b.I(0,z)
x=this.c
x.I(0,C.Z)
x.I(0,y)},
U:function(a){return this.a.w(0,W.aW(a))},
O:["cs",function(a,b,c){var z,y
z=W.aW(a)
y=this.c
if(y.w(0,H.e(z)+"::"+b))return this.d.dk(c)
else if(y.w(0,"*::"+b))return this.d.dk(c)
else{y=this.b
if(y.w(0,H.e(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.e(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isaa:1},
jI:{"^":"l:10;",
$1:function(a){return!C.a.w(C.w,H.u(a))}},
jJ:{"^":"l:10;",
$1:function(a){return C.a.w(C.w,H.u(a))}},
jT:{"^":"jH;e,a,b,c,d",
O:function(a,b,c){if(this.cs(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cb(a,"template")==="")return this.e.w(0,b)
return!1},
p:{
e5:function(){var z,y,x,w,v
z=P.d
y=P.co(C.v,z)
x=H.n(C.v,0)
w=H.i(new W.jU(),{func:1,ret:z,args:[x]})
v=H.m(["TEMPLATE"],[z])
y=new W.jT(y,P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),null)
y.cP(null,new H.hx(C.v,w,[x,z]),v,null)
return y}}},
jU:{"^":"l:24;",
$1:function(a){return"TEMPLATE::"+H.e(H.u(a))}},
jR:{"^":"b;",
U:function(a){var z=J.B(a)
if(!!z.$isdA)return!1
z=!!z.$isI
if(z&&W.aW(a)==="foreignObject")return!1
if(z)return!0
return!1},
O:function(a,b,c){if(b==="is"||C.h.cl(b,"on"))return!1
return this.U(a)},
$isaa:1},
dg:{"^":"b;a,b,c,0d,$ti",
sbf:function(a){this.d=H.y(a,H.n(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbf(J.bg(this.a,z))
this.c=z
return!0}this.sbf(null)
this.c=y
return!1},
gC:function(a){return this.d},
$isaX:1},
iR:{"^":"b;a",$isL:1,$isdP:1,p:{
iS:function(a){if(a===window)return H.f(a,"$isdP")
else return new W.iR(a)}}},
aa:{"^":"b;"},
jG:{"^":"b;a,b",$ismD:1},
e8:{"^":"b;a",
aT:function(a){new W.k3(this).$2(a,null)},
Y:function(a,b){if(b==null)J.cS(a)
else J.bA(b,a)},
de:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fb(a)
x=J.cb(y.gcY(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Z(t)}v="element unprintable"
try{v=J.bh(a)}catch(t){H.Z(t)}try{u=W.aW(a)
this.dd(H.f(a,"$isS"),b,z,v,u,H.f(y,"$isJ"),H.u(x))}catch(t){if(H.Z(t) instanceof P.am)throw t
else{this.Y(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dd:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
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
return}z=f.gF(f)
y=H.m(z.slice(0),[H.n(z,0)])
for(x=f.gF(f).length-1,z=f.a,w=J.k(z);x>=0;--x){if(x>=y.length)return H.o(y,x)
v=y[x]
if(!this.a.O(a,J.fl(v),w.V(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.V(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.V(z,v)
w.d6(z,v)}}if(!!J.B(a).$isdF)this.aT(a.content)},
$islV:1},
k3:{"^":"l:25;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.de(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.Y(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fc(z)}catch(w){H.Z(w)
v=H.f(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$ist")}}},
iQ:{"^":"h+fL;"},
iT:{"^":"h+p;"},
iU:{"^":"iT+q;"},
iV:{"^":"h+p;"},
iW:{"^":"iV+q;"},
j1:{"^":"h+p;"},
j2:{"^":"j1+q;"},
jh:{"^":"h+p;"},
ji:{"^":"jh+q;"},
jq:{"^":"h+T;"},
jr:{"^":"h+T;"},
js:{"^":"h+p;"},
jt:{"^":"js+q;"},
ju:{"^":"h+p;"},
jv:{"^":"ju+q;"},
jy:{"^":"h+p;"},
jz:{"^":"jy+q;"},
jF:{"^":"h+T;"},
e2:{"^":"L+p;"},
e3:{"^":"e2+q;"},
jK:{"^":"h+p;"},
jL:{"^":"jK+q;"},
jO:{"^":"h+T;"},
jV:{"^":"h+p;"},
jW:{"^":"jV+q;"},
e6:{"^":"L+p;"},
e7:{"^":"e6+q;"},
k_:{"^":"h+p;"},
k0:{"^":"k_+q;"},
k5:{"^":"h+p;"},
k6:{"^":"k5+q;"},
k7:{"^":"h+p;"},
k8:{"^":"k7+q;"},
k9:{"^":"h+p;"},
ka:{"^":"k9+q;"},
kb:{"^":"h+p;"},
kc:{"^":"kb+q;"},
kd:{"^":"h+p;"},
ke:{"^":"kd+q;"}}],["","",,P,{"^":"",
ej:function(a){return a},
a1:function(a){var z,y,x,w,v
if(a==null)return
z=P.a3(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.W)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
kr:function(a,b){var z={}
a.E(0,new P.ks(z))
return z},
d9:function(){var z=$.d8
if(z==null){z=J.c7(window.navigator.userAgent,"Opera",0)
$.d8=z}return z},
fT:function(){var z,y
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
ks:{"^":"l:7;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jj:{"^":"b;",
dP:function(){return Math.random()}},
b0:{"^":"b;ag:a>,a0:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
D:function(a,b){if(b==null)return!1
return H.ag(b,"$isb0",[P.G],null)&&this.a==J.bE(b)&&this.b==b.ga0(b)},
gA:function(a){var z,y,x
z=J.al(this.a)
y=J.al(this.b)
y=P.dW(P.dW(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jA:{"^":"b;"},
V:{"^":"jA;$ti"}}],["","",,P,{"^":"",fv:{"^":"h;",$isfv:1,"%":"SVGAnimatedLength"},le:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},lf:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lg:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lh:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},li:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lj:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lk:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},ll:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lm:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},ln:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},lo:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lp:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lq:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lr:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},ls:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lt:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lw:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lx:{"^":"bl;0n:height=,0m:width=","%":"SVGForeignObjectElement"},hb:{"^":"bl;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bl:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lC:{"^":"bl;0n:height=,0m:width=","%":"SVGImageElement"},aZ:{"^":"h;",$isaZ:1,"%":"SVGLength"},lI:{"^":"jl;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
i:function(a,b,c){H.f(c,"$isaZ")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.aZ]},
$isj:1,
$asj:function(){return[P.aZ]},
$isa:1,
$asa:function(){return[P.aZ]},
$asq:function(){return[P.aZ]},
"%":"SVGLengthList"},lJ:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b_:{"^":"h;",$isb_:1,"%":"SVGNumber"},lW:{"^":"jx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
i:function(a,b,c){H.f(c,"$isb_")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b_]},
$isj:1,
$asj:function(){return[P.b_]},
$isa:1,
$asa:function(){return[P.b_]},
$asq:function(){return[P.b_]},
"%":"SVGNumberList"},m0:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},m2:{"^":"h;0j:length=","%":"SVGPointList"},m4:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},m5:{"^":"hb;0n:height=,0m:width=","%":"SVGRectElement"},dA:{"^":"I;",$isdA:1,"%":"SVGScriptElement"},mh:{"^":"jQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
i:function(a,b,c){H.u(c)
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"S;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.m([],[W.aa])
C.a.l(z,W.dV(null))
C.a.l(z,W.e5())
C.a.l(z,new W.jR())
c=new W.e8(new W.dw(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).dB(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a6(w)
u=z.ga3(z)
for(z=J.k(v);x=u.firstChild,x!=null;)z.G(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mi:{"^":"bl;0n:height=,0m:width=","%":"SVGSVGElement"},b3:{"^":"h;",$isb3:1,"%":"SVGTransform"},mr:{"^":"k2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
i:function(a,b,c){H.f(c,"$isb3")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b3]},
$isj:1,
$asj:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asq:function(){return[P.b3]},
"%":"SVGTransformList"},mF:{"^":"bl;0n:height=,0m:width=","%":"SVGUseElement"},jk:{"^":"h+p;"},jl:{"^":"jk+q;"},jw:{"^":"h+p;"},jx:{"^":"jw+q;"},jP:{"^":"h+p;"},jQ:{"^":"jP+q;"},k1:{"^":"h+p;"},k2:{"^":"k1+q;"}}],["","",,P,{"^":"",ae:{"^":"b;",$isj:1,
$asj:function(){return[P.ah]},
$isa:1,
$asa:function(){return[P.ah]},
$isix:1}}],["","",,P,{"^":"",kX:{"^":"h;0j:length=","%":"AudioBuffer"},kY:{"^":"iP;",
h:function(a,b){return P.a1(a.get(H.u(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a1(y.value[1]))}},
gF:function(a){var z=H.m([],[P.d])
this.E(a,new P.fx(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fx:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kZ:{"^":"L;0j:length=","%":"AudioTrackList"},fy:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lY:{"^":"fy;0j:length=","%":"OfflineAudioContext"},iP:{"^":"h+T;"}}],["","",,P,{"^":"",fA:{"^":"h;",$isfA:1,"%":"WebGLBuffer"},i1:{"^":"h;",$isi1:1,"%":"WebGLProgram"},m6:{"^":"h;",
bo:function(a,b){return a.activeTexture(b)},
bq:function(a,b,c){return a.attachShader(b,c)},
br:function(a,b,c){return a.bindBuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
by:function(a,b){return a.compileShader(b)},
bz:function(a){return a.createBuffer()},
bA:function(a){return a.createProgram()},
bC:function(a,b){return a.createShader(b)},
bD:function(a){return a.createTexture()},
bF:function(a,b){return a.depthMask(b)},
bG:function(a,b){return a.disable(b)},
bH:function(a,b,c,d){return a.drawArrays(b,c,d)},
bI:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bJ:function(a,b){return a.enable(b)},
bK:function(a,b){return a.enableVertexAttribArray(b)},
ah:function(a){return P.a1(a.getContextAttributes())},
aK:function(a){return a.getError()},
aM:function(a,b){return a.getProgramInfoLog(b)},
aN:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
bT:function(a,b,c){return a.pixelStorei(b,c)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aG:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.B(g)
if(!!z.$iscj)y=!0
else y=!1
if(y){this.ax(a,b,c,d,e,f,P.ej(g))
return}if(!!z.$isbm)y=!0
else y=!1
if(y){this.ay(a,b,c,d,e,f,g)
return}if(!!z.$isbi)y=!0
else y=!1
if(y){this.az(a,b,c,d,e,f,g)
return}if(!!z.$isct)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$isci)z=!0
else z=!1
if(z){this.aB(a,b,c,d,e,f,g)
return}throw H.c(P.cZ("Incorrect number or type of arguments"))},
bW:function(a,b,c,d,e,f,g){return this.aG(a,b,c,d,e,f,g,null,null,null)},
ax:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bX:function(a,b,c,d){return a.texParameterf(b,c,d)},
bY:function(a,b,c,d){return a.texParameteri(b,c,d)},
c_:function(a,b,c){return a.uniform1f(b,c)},
c0:function(a,b,c){return a.uniform1fv(b,c)},
c1:function(a,b,c){return a.uniform1i(b,c)},
c2:function(a,b,c){return a.uniform1iv(b,c)},
c3:function(a,b,c){return a.uniform2fv(b,c)},
c4:function(a,b,c){return a.uniform3fv(b,c)},
c5:function(a,b,c){return a.uniform4fv(b,c)},
c6:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c7:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c8:function(a,b){return a.useProgram(b)},
c9:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cb:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},m7:{"^":"h;",
dn:function(a,b){return a.beginTransformFeedback(b)},
ds:function(a,b){return a.bindVertexArray(b)},
dD:function(a){return a.createVertexArray()},
dF:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dG:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dH:function(a){return a.endTransformFeedback()},
e0:function(a,b,c,d){this.dh(a,b,H.x(c,"$isa",[P.d],"$asa"),d)
return},
dh:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e1:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bo:function(a,b){return a.activeTexture(b)},
bq:function(a,b,c){return a.attachShader(b,c)},
br:function(a,b,c){return a.bindBuffer(b,c)},
bt:function(a,b,c){return a.bindTexture(b,c)},
bu:function(a,b){return a.blendEquation(b)},
bv:function(a,b,c){return a.blendFunc(b,c)},
bw:function(a,b,c,d){return a.bufferData(b,c,d)},
bx:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
by:function(a,b){return a.compileShader(b)},
bz:function(a){return a.createBuffer()},
bA:function(a){return a.createProgram()},
bC:function(a,b){return a.createShader(b)},
bD:function(a){return a.createTexture()},
bF:function(a,b){return a.depthMask(b)},
bG:function(a,b){return a.disable(b)},
bH:function(a,b,c,d){return a.drawArrays(b,c,d)},
bI:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bJ:function(a,b){return a.enable(b)},
bK:function(a,b){return a.enableVertexAttribArray(b)},
ah:function(a){return P.a1(a.getContextAttributes())},
aK:function(a){return a.getError()},
aM:function(a,b){return a.getProgramInfoLog(b)},
aN:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bN:function(a,b){return a.linkProgram(b)},
bT:function(a,b,c){return a.pixelStorei(b,c)},
aU:function(a,b,c){return a.shaderSource(b,c)},
aV:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aG:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.B(g)
if(!!z.$iscj)y=!0
else y=!1
if(y){this.ax(a,b,c,d,e,f,P.ej(g))
return}if(!!z.$isbm)y=!0
else y=!1
if(y){this.ay(a,b,c,d,e,f,g)
return}if(!!z.$isbi)y=!0
else y=!1
if(y){this.az(a,b,c,d,e,f,g)
return}if(!!z.$isct)y=!0
else y=!1
if(y){this.aA(a,b,c,d,e,f,g)
return}if(!!z.$isci)z=!0
else z=!1
if(z){this.aB(a,b,c,d,e,f,g)
return}throw H.c(P.cZ("Incorrect number or type of arguments"))},
bW:function(a,b,c,d,e,f,g){return this.aG(a,b,c,d,e,f,g,null,null,null)},
ax:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ay:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
az:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aA:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bX:function(a,b,c,d){return a.texParameterf(b,c,d)},
bY:function(a,b,c,d){return a.texParameteri(b,c,d)},
c_:function(a,b,c){return a.uniform1f(b,c)},
c0:function(a,b,c){return a.uniform1fv(b,c)},
c1:function(a,b,c){return a.uniform1i(b,c)},
c2:function(a,b,c){return a.uniform1iv(b,c)},
c3:function(a,b,c){return a.uniform2fv(b,c)},
c4:function(a,b,c){return a.uniform3fv(b,c)},
c5:function(a,b,c){return a.uniform4fv(b,c)},
c6:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c7:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c8:function(a,b){return a.useProgram(b)},
c9:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cb:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},ib:{"^":"h;",$isib:1,"%":"WebGLShader"},iu:{"^":"h;",$isiu:1,"%":"WebGLTexture"},iy:{"^":"h;",$isiy:1,"%":"WebGLUniformLocation"},iD:{"^":"h;",$isiD:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",me:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a1(this.d2(a,b))},
i:function(a,b,c){H.f(c,"$isJ")
throw H.c(P.z("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
d2:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jM:{"^":"h+p;"},jN:{"^":"jM+q;"}}],["","",,G,{"^":"",
iH:function(a){var z,y,x,w
z=H.m(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.o(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.a_(z,"\n")},
dS:function(a,b,c){var z,y,x,w
z=J.k(a)
y=z.bC(a,b)
z.aU(a,y,c)
z.by(a,y)
x=H.bZ(z.aQ(a,y,35713))
if(x!=null&&!x){w=z.aP(a,y)
P.aE("E:Compilation failed:")
P.aE("E:"+G.iH(c))
P.aE("E:Failure:")
P.aE(C.h.H("E:",w))
throw H.c(w)}return y},
dh:function(a,b){var z,y,x
H.x(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.i.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.o(a,y)
C.i.i(b,z+1,J.ca(a[y]))
z+=2
if(y>=a.length)return H.o(a,y)
x=J.cO(a[y])
if(z>=b.length)return H.o(b,z)
b[z]=x}return b},
h5:function(a,b){var z,y
H.x(a,"$isa",[T.A],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.o(a,y)
C.i.i(b,z+1,J.ca(a[y]))}return b},
h6:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.b6],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.i.i(b,z,J.bE(a[y]))
if(y>=a.length)return H.o(a,y)
C.i.i(b,z+1,J.ca(a[y]))
x=z+2
if(y>=a.length)return H.o(a,y)
w=J.cO(a[y])
v=b.length
if(x>=v)return H.o(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.o(a,y)
w=J.fe(a[y])
if(z>=v)return H.o(b,z)
b[z]=w}return b},
h4:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.n.i(b,z,J.bg(a[y],0))
if(y>=a.length)return H.o(a,y)
C.n.i(b,z+1,J.bg(a[y],1))
if(y>=a.length)return H.o(a,y)
C.n.i(b,z+2,J.bg(a[y],2))
if(y>=a.length)return H.o(a,y)
C.n.i(b,z+3,J.bg(a[y],3))}return b},
jf:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aq(z,[H.n(z,0)]),y=y.gB(y),x=b.x,w=[[P.a,P.E]],v=[P.ah],u=[T.b6],t=[T.r],s=[T.A];y.u();){r=y.d
if(!x.ad(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.el>0)H.c5("I: "+r)
continue}q=z.h(0,r)
switch($.a7().h(0,r).a){case"vec2":b.X(r,G.h5(H.bz(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.X(r,G.dh(H.bz(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.X(r,G.h6(H.bz(q,"$isa",u,"$asa"),null),4)
break
case"float":b.X(r,new Float32Array(H.bW(H.bz(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.X(r,G.h4(H.bz(q,"$isa",w,"$asa"),null),4)
break}}},
bM:{"^":"b;"},
bT:{"^":"bM;",
b1:function(){return this.d},
k:function(a){var z,y,x,w
z=H.m(["{"+new H.dL(H.kx(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.aq(y,[H.n(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.a_(z,"\n")}},
fD:{"^":"b;0a,b",
bL:function(a,b,c){J.f8(this.a,b)
if(c>0)J.fr(this.a,b,c)},
ca:function(a,b,c,d,e,f,g,h){J.c6(this.a,34962,b)
J.fs(this.a,c,d,e,!1,g,h)}},
h3:{"^":"b;"},
df:{"^":"b;a,b,c,d"},
ha:{"^":"b;a,b,c,d,e",
b_:function(a){switch($.a7().h(0,a).a){case"vec2":this.e.i(0,a,H.m([],[T.A]))
break
case"vec3":this.e.i(0,a,H.m([],[T.r]))
break
case"vec4":this.e.i(0,a,H.m([],[T.b6]))
break
case"float":this.e.i(0,a,H.m([],[P.ah]))
break
case"uvec4":this.e.i(0,a,H.m([],[[P.a,P.E]]))
break}},
cw:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.df(z,z+1,z+2,z+3))},
a5:function(a){var z,y,x,w
H.x(a,"$isa",[T.r],"$asa")
for(z=this.d,y=0;y<24;++y){x=a[y]
w=new T.r(new Float32Array(3))
w.R(x)
C.a.l(z,w)}},
cu:function(a,b){var z,y,x,w,v,u
z=[T.A]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<24;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.A(v))}},
cv:function(a,b){var z,y,x,w,v
z=[T.r]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.r(new Float32Array(3))
v.R(w)
z.l(y,v)}},
cC:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.m(y,[P.E])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.o(y,v)
u=y[v]
C.a.i(x,w,u.ge5(u))
C.a.i(x,w+1,u.ge6(u))
C.a.i(x,w+2,u.ge7(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.W)(z),++v){t=z[v]
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
z=H.m(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.aq(y,[H.n(y,0)]),x=x.gB(x);x.u();){w=x.d
v=$.a7().h(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a_(z," ")}},
dJ:{"^":"b;a,b,c"},
dH:{"^":"b;a,b,c",p:{
dI:function(a,b,c){return new G.dH(a,b,c)}}},
dt:{"^":"bT;d,a,b,c"},
hz:{"^":"bM;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
saq:function(a){this.cx=H.x(a,"$isa",[P.E],"$asa")},
aZ:function(a,b,c){var z,y
C.h.an(a,0)
H.f(b,"$isae")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c6(z.a,34962,y)
J.cM(z.a,34962,b,35048)},
cD:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
X:function(a,b,c){var z,y,x,w,v
z=J.cJ(a,0)===105
if(z&&this.z===0)this.z=C.e.ct(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c8(x.a))
this.aZ(a,b,c)
w=$.a7().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bB(x.a,this.e)
x.bL(0,v,z?1:0)
x.ca(0,y.h(0,a),v,w.b0(),5126,!1,0,0)},
a5:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.c8(y.a))
this.ch=a
this.aZ("aPosition",a,3)
x=$.a7().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bB(y.a,this.e)
y.bL(0,w,0)
y.ca(0,z.h(0,"aPosition"),w,x.b0(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.m(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.aq(z,[H.n(z,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a_(y,"  ")},
p:{
du:function(a,b,c,d){var z=P.d
return new G.hz(b,J.f1(b.a),c,P.a3(z,P.b),d,0,-1,P.a3(z,P.ae),"meshdata:"+a,!1,!0)}}},
hR:{"^":"bT;",
cz:function(a,b){var z
if(typeof a!=="number")return a.e3()
if(typeof b!=="number")return H.bx(b)
z=a/b
if(this.z===z)return
this.z=z
this.b3()},
b3:function(){var z,y,x,w,v,u
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
b1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.i(0,"uEyePosition",z.aL())
x=this.cy
x.R(z.d)
z=this.cx
z.R(this.db)
w=z.a
v=w[0]
u=w[4]
t=w[8]
s=w[12]
r=w[1]
q=w[5]
p=w[9]
o=w[13]
n=w[2]
m=w[6]
l=w[10]
k=w[14]
j=w[3]
i=w[7]
h=w[11]
g=w[15]
f=x.a
e=f[0]
d=f[4]
c=f[8]
b=f[12]
a=f[1]
a0=f[5]
a1=f[9]
a2=f[13]
a3=f[2]
a4=f[6]
a5=f[10]
a6=f[14]
a7=f[3]
a8=f[7]
a9=f[11]
b0=f[15]
w[0]=v*e+u*a+t*a3+s*a7
w[4]=v*d+u*a0+t*a4+s*a8
w[8]=v*c+u*a1+t*a5+s*a9
w[12]=v*b+u*a2+t*a6+s*b0
w[1]=r*e+q*a+p*a3+o*a7
w[5]=r*d+q*a0+p*a4+o*a8
w[9]=r*c+q*a1+p*a5+o*a9
w[13]=r*b+q*a2+p*a6+o*b0
w[2]=n*e+m*a+l*a3+k*a7
w[6]=n*d+m*a0+l*a4+k*a8
w[10]=n*c+m*a1+l*a5+k*a9
w[14]=n*b+m*a2+l*a6+k*b0
w[3]=j*e+i*a+h*a3+g*a7
w[7]=j*d+i*a0+h*a4+g*a8
w[11]=j*c+i*a1+h*a5+g*a9
w[15]=j*b+i*a2+h*a6+g*b0
y.i(0,"uPerspectiveViewMatrix",z)
return y}},
lc:{"^":"b;"},
i5:{"^":"bM;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cG:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.W)(z),++u){t=z[u]
x.i(0,t,J.cQ(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.W)(z),++u){t=z[u]
x.i(0,t,J.cQ(w.a,v,t))}},
cJ:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.m([],[P.d])
x=H.m([],[P.d])
for(y=new H.aq(y,[H.n(y,0)]),y=y.gB(y);y.u();){w=y.d
if(!z.ad(0,w))C.a.l(x,w)}for(z=this.x,z=P.jn(z,z.r,H.n(z,0)),y=this.Q;z.u();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.x(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.aq(b,[H.n(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.u();){s=y.d
switch(J.cJ(s,0)){case 117:if(w.ad(0,s)){r=b.h(0,s)
if(v.ad(0,s))H.c5("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.a7().h(0,s)
if(q==null)H.a2("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.M(r)
J.cc(x.a,p,r)}else if(!!J.B(r).$ishg)J.fp(x.a,p,r)
break
case"float":if(q.c===0){H.ek(r)
J.fn(x.a,p,r)}else if(!!J.B(r).$isae)J.fo(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.aj(r,"$isar").a
J.cY(x.a,p,!1,s)}else if(!!J.B(r).$isae)J.cY(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.O.ge4(H.aj(r,"$islK"))
J.cX(x.a,p,!1,s)}else if(!!J.B(r).$isae)J.cX(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cW(o,p,H.aj(r,"$isb6").a)
else J.cW(o,p,H.f(r,"$isae"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cV(o,p,H.aj(r,"$isr").a)
else J.cV(o,p,H.f(r,"$isae"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cU(o,p,H.aj(r,"$isA").a)
else J.cU(o,p,H.f(r,"$isae"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.bx(s)
J.cK(x.a,33984+s)
s=H.aj(r,"$isbR").b
J.aH(x.a,3553,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.bx(s)
J.cK(x.a,33984+s)
s=H.aj(r,"$isbR").b
J.aH(x.a,34067,s)
s=this.ch
J.cc(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.H()
this.ch=s+1
break
default:H.c5("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.aG(r,!0)
o=x.a
if(s)J.bC(o,2929)
else J.c9(o,2929)
break
case"cStencilFunc":H.aj(r,"$isdJ")
s=r.a
o=x.a
if(s===1281)J.c9(o,2960)
else{J.bC(o,2960)
o=r.b
n=r.c
J.fj(x.a,s,o,n)}break
case"cDepthWrite":H.bZ(r)
J.f2(x.a,r)
break
case"cBlendEquation":H.aj(r,"$isdH")
s=r.a
o=x.a
if(s===1281)J.c9(o,3042)
else{J.bC(o,3042)
o=r.b
n=r.c
J.eY(x.a,o,n)
J.eX(x.a,s)}break}++t
break}}m=P.fY(0,0,0,Date.now()-new P.bI(z,!1).a,0,0)
""+t
m.k(0)},
cB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.bT],"$asa")
Date.now()
z=this.d
J.fq(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b8()}for(x=0;x<2;++x){w=b[x]
this.cM(w.a,w.b1())}y=this.Q
y.Z(0)
for(v=a.cy,v=new H.aq(v,[H.n(v,0)]),v=v.gB(v);v.u();)y.l(0,v.d)
u=this.cJ()
if(u.length!==0)P.aE("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.bB(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cD()
s=a.Q
r=a.z
if(t)J.eW(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.f6(q,y,v,s,0,r)
else J.f5(q,y,v,s,0)}else{s=z.a
if(r>1)J.f4(s,y,0,v,r)
else J.f3(s,y,0,v)}if(t)J.f9(z.a)},
ak:function(a,b){return this.cB(a,b,null)},
p:{
dz:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a4(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.f0(b.a)
t=G.dS(b.a,35633,x)
J.cL(b.a,u,t)
s=G.dS(b.a,35632,w)
J.cL(b.a,u,s)
if(v.length>0)J.fm(b.a,u,v,35980)
J.fi(b.a,u)
if(!H.bZ(J.fh(b.a,u,35714)))H.a2(J.fg(b.a,u))
z=new G.i5(b,c,d,u,P.co(c.c,z),P.a3(z,P.b),P.a3(z,z),y,a,!1,!0)
z.cG(a,b,c,d)
return z}}},
F:{"^":"b;a,b,c",
b0:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ic:{"^":"b;a,0b,c,d,e,f,r,x",
aX:function(a){var z,y,x,w
H.x(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.ai(z)},
a4:function(a){var z,y,x
H.x(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.W)(a),++x)C.a.l(y,a[x])
C.a.ai(y)},
aY:function(a){var z,y
H.x(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ai(z)},
cH:function(a,b){this.b=this.cN(!0,H.x(a,"$isa",[P.d],"$asa"),b)},
a6:function(a){return this.cH(a,null)},
cN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.W)(y),++u){t=y[u]
s=$.a7().h(0,t)
C.a.l(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.W)(z),++u){q=z[u]
s=$.a7().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.W)(z),++u){q=z[u]
s=$.a7().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.W)(z),++u){q=z[u]
s=$.a7().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.I(w,b)
C.a.l(w,"}")
return C.a.a_(w,"\n")},
p:{
bP:function(a){var z,y
z=P.d
y=[z]
return new G.ic(a,H.m([],y),H.m([],y),H.m([],y),H.m([],y),0,P.a3(z,P.E))}}},
ih:{"^":"bM;",
aL:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
dG:{"^":"b;a,b,c,d,e,f,r",
b2:function(a,b){var z=this.e
if(z!==1)J.fk(a.a,b,34046,z)
J.bF(a.a,b,10240,this.r)
J.bF(a.a,b,10241,this.f)
if(this.b){J.bF(a.a,b,10242,33071)
J.bF(a.a,b,10243,33071)}}},
bR:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
he:{"^":"bR;f,a,b,c,d,e"},
fO:{"^":"bR;a,b,c,d,e",
cA:function(a,b,c){var z,y,x,w,v,u
z=this.d
J.cR(z.a,37440,1)
y=this.c
J.aH(z.a,y,this.b)
for(x=J.aR(c),w=0;w<6;++w){v=C.X[w]
u=x.h(c,w)
J.cT(z.a,v,0,6408,6408,5121,u)}x=this.e
x.b2(z,y)
J.cP(z.a)
J.aH(z.a,y,null)
x.b=!0},
p:{
fP:function(a,b,c){var z=new G.dG(!1,!1,!1,!0,1,9729,9729)
z.b=!0
z=new G.fO(b,J.cN(a.a),34067,a,z)
z.cA(a,b,c)
return z}}}}],["","",,R,{"^":"",
iC:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.eL().dP()
if(v>=w)return H.o(x,v)
x[v]=(u-0.5)*c}y=G.du(z,a.d,0,a.e.x)
y.a5(x)
return y},
dB:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v
z=B.fN(!0,c,d,e,f,g,h,i)
y=G.du("cube",a.d,4,a.e.x)
y.a5(G.dh(z.d,null))
x=H.x(z.cC(),"$isa",[P.E],"$asa")
w=y.d
y.y=J.c8(w.a)
v=y.ch.length
if(v<768){y.saq(new Uint8Array(H.bW(x)))
y.Q=5121}else if(v<196608){y.saq(new Uint16Array(H.bW(x)))
y.Q=5123}else{y.saq(new Uint32Array(H.bW(x)))
y.Q=5125}J.bB(w.a,y.e)
x=y.y
v=y.cx
J.c6(w.a,34963,x)
J.cM(w.a,34963,v,35048)
G.jf(z,y)
return y},
jp:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iY("span",null),"$isS")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.z).am(y,"float")
y.setProperty(x,"left","")
x=C.z.am(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.G(z,v)}return z},
hS:{"^":"hR;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dU:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.aE("size change "+H.e(y)+" "+H.e(x))
this.cz(y,x)
J.ft(this.go.a,0,0,y,x)},"$1","gdT",4,0,11]},
ij:{"^":"b;",
cI:function(a,b,c){var z,y
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
y=J.k(z)
y.G(z,this.b)
y.G(z,this.d)
y.G(z,this.c)}},
ik:{"^":"ij;e,f,a,b,c,d",
cL:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.e_(y,2)+" fps"
C.r.ci(this.c,b)
x=C.e.T(30*C.A.du(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isS")
v=w.style
u=""+x+"px"
v.height=u
C.r.G(z,w)},
cK:function(a){return this.cL(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
fN:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=-b0
y=-b1
x=new T.r(new Float32Array(3))
x.q(z,y,b2)
w=new T.r(new Float32Array(3))
w.q(b0,y,b2)
v=new T.r(new Float32Array(3))
v.q(b0,b1,b2)
u=new T.r(new Float32Array(3))
u.q(z,b1,b2)
t=-b2
s=new T.r(new Float32Array(3))
s.q(z,y,t)
r=new T.r(new Float32Array(3))
r.q(z,b1,t)
q=new T.r(new Float32Array(3))
q.q(b0,b1,t)
p=new T.r(new Float32Array(3))
p.q(b0,y,t)
o=new T.r(new Float32Array(3))
o.q(z,b1,t)
n=new T.r(new Float32Array(3))
n.q(z,b1,b2)
m=new T.r(new Float32Array(3))
m.q(b0,b1,b2)
l=new T.r(new Float32Array(3))
l.q(b0,b1,t)
k=new T.r(new Float32Array(3))
k.q(b0,y,b2)
j=new T.r(new Float32Array(3))
j.q(z,y,b2)
i=new T.r(new Float32Array(3))
i.q(z,y,t)
h=new T.r(new Float32Array(3))
h.q(b0,y,t)
g=new T.r(new Float32Array(3))
g.q(b0,y,t)
f=new T.r(new Float32Array(3))
f.q(b0,b1,t)
e=new T.r(new Float32Array(3))
e.q(b0,b1,b2)
d=new T.r(new Float32Array(3))
d.q(b0,y,b2)
c=new T.r(new Float32Array(3))
c.q(z,y,t)
b=new T.r(new Float32Array(3))
b.q(z,y,b2)
y=new T.r(new Float32Array(3))
y.q(z,b1,b2)
a=new T.r(new Float32Array(3))
a.q(z,b1,t)
t=[T.r]
a0=H.m([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
z=new T.A(new Float32Array(2))
z.v(a7,a9)
y=new T.A(new Float32Array(2))
y.v(a6,a9)
x=new T.A(new Float32Array(2))
x.v(a6,a8)
w=new T.A(new Float32Array(2))
w.v(a7,a8)
v=new T.A(new Float32Array(2))
v.v(a6,a9)
u=new T.A(new Float32Array(2))
u.v(a6,a8)
s=new T.A(new Float32Array(2))
s.v(a7,a8)
r=new T.A(new Float32Array(2))
r.v(a7,a9)
q=new T.A(new Float32Array(2))
q.v(a7,a8)
p=new T.A(new Float32Array(2))
p.v(a7,a9)
o=new T.A(new Float32Array(2))
o.v(a6,a9)
n=new T.A(new Float32Array(2))
n.v(a6,a8)
m=new T.A(new Float32Array(2))
m.v(a6,a8)
l=new T.A(new Float32Array(2))
l.v(a7,a8)
k=new T.A(new Float32Array(2))
k.v(a7,a9)
j=new T.A(new Float32Array(2))
j.v(a6,a9)
i=new T.A(new Float32Array(2))
i.v(a6,a9)
h=new T.A(new Float32Array(2))
h.v(a6,a8)
g=new T.A(new Float32Array(2))
g.v(a7,a8)
f=new T.A(new Float32Array(2))
f.v(a7,a9)
e=new T.A(new Float32Array(2))
e.v(a7,a9)
d=new T.A(new Float32Array(2))
d.v(a6,a9)
c=new T.A(new Float32Array(2))
c.v(a6,a8)
b=new T.A(new Float32Array(2))
b.v(a7,a8)
a1=H.m([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.A])
a2=new G.ha(!1,H.m([],[G.h3]),H.m([],[G.df]),H.m([],t),P.a3(P.d,[P.a,,]))
a2.b_("aTexUV")
a2.b_("aNormal")
a2.cw(6)
a2.a5(a0)
a2.cu("aTexUV",a1)
for(a3=0;z=$.eM(),a3<6;++a3){a4=z[a3]
a2.cv("aNormal",H.m([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",
ht:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=new Array(6)
z.fixed$length=Array
y=H.m(z,[[P.Y,W.bm]])
for(z=[W.O],x=-1,w=W.bm,v=[w],w=[w],u=0;t=$.eO(),u<6;++u){s=new P.P(0,$.D,v)
r=document.createElement("img")
q=new W.bs(r,"load",!1,z)
q.gdJ(q).af(new D.hu(new P.iI(s,w),r),x)
r.src=a+t[u]+b
C.a.i(y,u,s)}return y},
hu:{"^":"l:11;a,b",
$1:function(a){H.f(a,"$isO")
return this.a.dw(0,this.b)}},
hm:{"^":"b;a,b,c",
cE:function(a){var z,y
a=document
z=W.aY
y={func:1,ret:-1,args:[z]}
W.af(a,"keydown",H.i(new D.ho(this),y),!1,z)
W.af(a,"keyup",H.i(new D.hp(this),y),!1,z)},
p:{
hn:function(a){var z=P.E
z=new D.hm(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z))
z.cE(a)
return z}}},
ho:{"^":"l:12;a",
$1:function(a){var z
H.f(a,"$isaY")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hp:{"^":"l:12;a",
$1:function(a){var z
H.f(a,"$isaY")
z=this.a
z.a.bU(0,a.which)
z.c.l(0,a.which)}},
hC:{"^":"b;a,b,c,d,e,f,r,x",
cF:function(a){var z,y,x
if(a==null)a=document
z=J.k(a)
y=z.gbQ(a)
x=H.n(y,0)
W.af(y.a,y.b,H.i(new D.hE(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbP(a)
y=H.n(x,0)
W.af(x.a,x.b,H.i(new D.hF(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbR(a)
x=H.n(y,0)
W.af(y.a,y.b,H.i(new D.hG(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbS(a)
x=H.n(z,0)
W.af(z.a,z.b,H.i(new D.hH(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hD:function(a){var z=P.E
z=new D.hC(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),0,0,0,0,0)
z.cF(a)
return z}}},
hE:{"^":"l:3;a",
$1:function(a){var z,y
H.f(a,"$isU")
a.preventDefault()
z=this.a
y=J.k(a)
z.r=H.M(y.gbO(a).a)
z.x=H.M(y.gbO(a).b)
z.d=a.movementX
z.e=a.movementY}},
hF:{"^":"l:3;a",
$1:function(a){var z
H.f(a,"$isU")
a.preventDefault()
P.aE("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hG:{"^":"l:3;a",
$1:function(a){var z
H.f(a,"$isU")
a.preventDefault()
z=this.a
z.a.bU(0,a.button)
z.c.l(0,a.button)}},
hH:{"^":"l:26;a",
$1:function(a){H.f(a,"$isaK")
a.preventDefault()
this.a.f=H.M(C.ah.gdE(a))}},
hP:{"^":"ih;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c2:function(a){var z,y
z=C.i.dK(H.x(a,"$isj",[P.b],"$asj"),0,new A.kz(),P.E)
if(typeof z!=="number")return H.bx(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kz:{"^":"l:27;",
$2:function(a,b){var z,y
H.M(a)
z=J.al(b)
if(typeof a!=="number")return a.H()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ar:{"^":"b;a",
R:function(a){var z,y
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
k:function(a){return"[0] "+this.a1(0).k(0)+"\n[1] "+this.a1(1).k(0)+"\n[2] "+this.a1(2).k(0)+"\n[3] "+this.a1(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.o(z,b)
return z[b]},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ar){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.c2(this.a)},
a1:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.o(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.o(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.o(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.o(y,x)
z[3]=y[x]
return new T.b6(z)},
W:function(){var z=this.a
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
z[15]=1}},A:{"^":"b;a",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.A){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.c2(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.o(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gag:function(a){return this.a[0]},
ga0:function(a){return this.a[1]}},r:{"^":"b;a",
q:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
R:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.c2(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.o(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbM:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aE:function(a){var z,y,x
z=Math.sqrt(this.gbM())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aC:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bE:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.r(new Float32Array(3))
z.q(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gag:function(a){return this.a[0]},
ga0:function(a){return this.a[1]},
gcc:function(a){return this.a[2]},
p:{
b5:function(a,b,c){var z=new T.r(new Float32Array(3))
z.q(a,b,c)
return z}}},b6:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
D:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b6){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.c2(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.o(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gag:function(a){return this.a[0]},
ga0:function(a){return this.a[1]},
gcc:function(a){return this.a[2]},
ge2:function(a){return this.a[3]}}}],["","",,M,{"^":"",
er:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z={}
y=document
x=C.t.cf(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ik(0,0,x,w,y.createElement("div"),R.jp("blue","gray",90,30))
u.cI(x,"blue","gray")
t=H.f(C.t.dR(y,"#webgl-canvas"),"$isbi")
s=new G.fD(t)
x=P.d
v=P.b
r=(t&&C.y).aJ(t,"webgl2",P.dp(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],x,v))
s.a=r
if(r==null)H.a2(P.de('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.e(J.ff(r))
if($.el>0)P.aE("I: "+q)
J.eZ(r,0,0,0,1)
J.bC(r,2929)
r=new Float32Array(3)
q=D.hn(null)
p=D.hD(t)
o=new T.ar(new Float32Array(16))
o.W()
n=new Float32Array(3)
m=new Float32Array(3)
l=new Float32Array(3)
k=new D.hP(15,0,0,0,new T.r(r),-0.02,q,p,o,new T.r(n),new T.r(m),new T.r(l),new T.r(new Float32Array(3)),"camera:orbit",!1,!0)
r=new T.ar(new Float32Array(16))
r.W()
q=new T.ar(new Float32Array(16))
q.W()
j=new R.hS(t,s,k,50,1,0.1,1000,r,q,new T.ar(new Float32Array(16)),P.a3(x,v),"perspective",!1,!0)
j.b3()
j.dU(null)
r=W.O
W.af(window,"resize",H.i(j.gdT(),{func:1,ret:-1,args:[r]}),!1,r)
i=G.dz("solid",s,$.eQ(),$.eP())
r=P.a3(x,v)
h=new G.dt(r,"cubemap",!1,!0)
r.i(0,"cDepthTest",!0)
r.i(0,"cDepthWrite",!0)
r.i(0,"cBlendEquation",$.ex())
q=$.eA()
r.i(0,"cStencilFunc",q)
p=new T.ar(new Float32Array(16))
p.W()
r.i(0,"uModelMatrix",p)
g=R.dB(i,!0,1,0,1,0,2,2,2)
f=R.dB(i,!0,1,0,1,0,512,512,512)
e=G.dz("stars",s,$.eS(),$.eR())
p=$.ew()
x=P.a3(x,v)
x.i(0,"cDepthTest",!0)
x.i(0,"cDepthWrite",!1)
x.i(0,"cBlendEquation",p)
x.i(0,"cStencilFunc",q)
d=y.createElement("canvas")
d.width=64
d.height=64
c=H.f(C.y.ce(d,"2d"),"$iscf")
b=(c&&C.q).bB(c,32,32,1,32,32,22);(b&&C.m).ac(b,0,"gray")
C.m.ac(b,1,"black")
c.fillStyle=b
C.q.dI(c,0,0,64,64)
b=C.q.bB(c,32,32,1,32,32,6);(b&&C.m).ac(b,0,"white")
C.m.ac(b,1,"gray")
c.globalAlpha=0.9
c.fillStyle=b
c.arc(32,32,4,0,6.283185307179586,!1)
c.fill()
y=new G.dG(!1,!1,!1,!0,1,9729,9729)
r=J.cN(s.a)
J.aH(s.a,3553,r)
J.cR(s.a,37440,1)
J.aH(s.a,3553,r)
J.cT(s.a,3553,0,6408,6408,5121,d)
y.b2(s,3553)
J.cP(s.a)
J.aH(s.a,3553,null)
x.i(0,"uTexture",new G.he(d,"Utils::Particles",r,3553,s,y))
x.i(0,"uPointSize",1000)
y=new T.ar(new Float32Array(16))
y.W()
x.i(0,"uModelMatrix",y)
a=R.iC(e,2000,100)
z.a=0
P.h7(D.ht("skybox_",".png"),null,!1,v).af(new M.kN(s,h,new M.kM(z,k,i,g,h,j,f,e,a,new G.dt(x,"stars",!1,!0),u)),null)},
kM:{"^":"l:28;a,b,c,d,e,f,r,x,y,z,Q",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cE(a9)
if(typeof a9!=="number")return a9.aW()
z=this.a
z.a=a9+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.w(0,0)||w.w(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aS()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aS()
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
if(typeof v!=="number")return v.aS()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.u.dv(y.cy,-1.4707963267948965,1.4707963267948965)
y.cy=v
u=y.ch
t=y.cx
s=u*Math.cos(v)
r=Math.cos(t)
v=Math.sin(v)
t=Math.sin(t)
q=y.d.a
q[12]=s*r
q[13]=u*v
q[14]=s*t
t=y.dx.a
q[12]=q[12]+t[0]
q[13]=q[13]+t[1]
q[14]=q[14]+t[2]
p=new T.r(new Float32Array(3))
p.q(0,1,0)
v=y.aL()
u=new Float32Array(3)
o=new T.r(u)
o.R(v)
u[0]=u[0]-t[0]
u[1]=u[1]-t[1]
u[2]=u[2]-t[2]
o.aE(0)
n=p.bE(o)
n.aE(0)
m=o.bE(n)
m.aE(0)
t=n.aC(v)
r=m.aC(v)
v=o.aC(v)
l=n.a
k=l[0]
j=m.a
i=j[0]
h=u[0]
g=l[1]
f=j[1]
e=u[1]
l=l[2]
j=j[2]
u=u[2]
q[15]=1
q[14]=-v
q[13]=-r
q[12]=-t
q[11]=0
q[10]=u
q[9]=j
q[8]=l
q[7]=0
q[6]=e
q[5]=f
q[4]=g
q[3]=0
q[2]=h
q[1]=i
q[0]=k
k=y.f
i=k.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
y=-y.db
d=Math.sqrt(k.gbM())
n=i[0]/d
m=i[1]/d
o=i[2]/d
c=Math.cos(y)
b=Math.sin(y)
a=1-c
a0=n*n*a+c
y=o*b
a1=n*m*a-y
i=m*b
a2=n*o*a+i
a3=m*n*a+y
a4=m*m*a+c
y=n*b
a5=m*o*a-y
a6=o*n*a-i
a7=o*m*a+y
a8=o*o*a+c
y=q[0]
i=q[4]
k=q[8]
h=q[1]
g=q[5]
f=q[9]
e=q[2]
l=q[6]
j=q[10]
u=q[3]
t=q[7]
r=q[11]
q[0]=y*a0+i*a3+k*a6
q[1]=h*a0+g*a3+f*a6
q[2]=e*a0+l*a3+j*a6
q[3]=u*a0+t*a3+r*a6
q[4]=y*a1+i*a4+k*a7
q[5]=h*a1+g*a4+f*a7
q[6]=e*a1+l*a4+j*a7
q[7]=u*a1+t*a4+r*a7
q[8]=y*a2+i*a5+k*a8
q[9]=h*a2+g*a5+f*a8
q[10]=e*a2+l*a5+j*a8
q[11]=u*a2+t*a5+r*a8
w.c.Z(0)
w.b.Z(0)
x.e=0
x.d=0
x.f=0
x.c.Z(0)
x.b.Z(0)
x=this.c
w=this.e
r=this.f
t=[G.bT]
x.ak(this.d,H.m([w,r],t))
x.ak(this.r,H.m([w,r],t))
this.x.ak(this.y,H.m([this.z,r],t))
C.ai.gdl(window).af(this,-1)
this.Q.cK(z.a)}},
kN:{"^":"l:29;a,b,c",
$1:function(a){this.b.d.i(0,"uCubeTexture",G.fP(this.a,"stars",H.be(a)))
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dl.prototype
if(typeof a=="boolean")return J.hk.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c1(a)}
J.aR=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c1(a)}
J.em=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c1(a)}
J.kv=function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b4.prototype
return a}
J.kw=function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b4.prototype
return a}
J.en=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b4.prototype
return a}
J.k=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c1(a)}
J.c0=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b4.prototype
return a}
J.aG=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).D(a,b)}
J.a8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kv(a).P(a,b)}
J.bg=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kJ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aR(a).h(a,b)}
J.cJ=function(a,b){return J.en(a).an(a,b)}
J.bA=function(a,b){return J.k(a).d7(a,b)}
J.eT=function(a,b,c,d){return J.k(a).d8(a,b,c,d)}
J.eU=function(a,b,c){return J.k(a).d9(a,b,c)}
J.cK=function(a,b){return J.k(a).bo(a,b)}
J.eV=function(a,b,c,d){return J.k(a).di(a,b,c,d)}
J.cL=function(a,b,c){return J.k(a).bq(a,b,c)}
J.eW=function(a,b){return J.k(a).dn(a,b)}
J.c6=function(a,b,c){return J.k(a).br(a,b,c)}
J.aH=function(a,b,c){return J.k(a).bt(a,b,c)}
J.bB=function(a,b){return J.k(a).ds(a,b)}
J.eX=function(a,b){return J.k(a).bu(a,b)}
J.eY=function(a,b,c){return J.k(a).bv(a,b,c)}
J.cM=function(a,b,c,d){return J.k(a).bw(a,b,c,d)}
J.eZ=function(a,b,c,d,e){return J.k(a).bx(a,b,c,d,e)}
J.f_=function(a,b){return J.kw(a).K(a,b)}
J.c7=function(a,b,c){return J.aR(a).dz(a,b,c)}
J.c8=function(a){return J.k(a).bz(a)}
J.f0=function(a){return J.k(a).bA(a)}
J.cN=function(a){return J.k(a).bD(a)}
J.f1=function(a){return J.k(a).dD(a)}
J.f2=function(a,b){return J.k(a).bF(a,b)}
J.c9=function(a,b){return J.k(a).bG(a,b)}
J.f3=function(a,b,c,d){return J.k(a).bH(a,b,c,d)}
J.f4=function(a,b,c,d,e){return J.k(a).dF(a,b,c,d,e)}
J.f5=function(a,b,c,d,e){return J.k(a).bI(a,b,c,d,e)}
J.f6=function(a,b,c,d,e,f){return J.k(a).dG(a,b,c,d,e,f)}
J.f7=function(a,b){return J.em(a).t(a,b)}
J.bC=function(a,b){return J.k(a).bJ(a,b)}
J.f8=function(a,b){return J.k(a).bK(a,b)}
J.f9=function(a){return J.k(a).dH(a)}
J.fa=function(a,b){return J.k(a).E(a,b)}
J.fb=function(a){return J.k(a).gdm(a)}
J.al=function(a){return J.B(a).gA(a)}
J.bD=function(a){return J.em(a).gB(a)}
J.aT=function(a){return J.aR(a).gj(a)}
J.fc=function(a){return J.k(a).gdQ(a)}
J.fd=function(a){return J.k(a).gdY(a)}
J.fe=function(a){return J.c0(a).ge2(a)}
J.bE=function(a){return J.c0(a).gag(a)}
J.ca=function(a){return J.c0(a).ga0(a)}
J.cO=function(a){return J.c0(a).gcc(a)}
J.cb=function(a,b){return J.k(a).V(a,b)}
J.ff=function(a){return J.k(a).ah(a)}
J.cP=function(a){return J.k(a).aK(a)}
J.fg=function(a,b){return J.k(a).aM(a,b)}
J.fh=function(a,b,c){return J.k(a).aN(a,b,c)}
J.cQ=function(a,b,c){return J.k(a).aR(a,b,c)}
J.fi=function(a,b){return J.k(a).bN(a,b)}
J.cR=function(a,b,c){return J.k(a).bT(a,b,c)}
J.cS=function(a){return J.k(a).dS(a)}
J.fj=function(a,b,c,d){return J.k(a).aV(a,b,c,d)}
J.cT=function(a,b,c,d,e,f,g){return J.k(a).bW(a,b,c,d,e,f,g)}
J.fk=function(a,b,c,d){return J.k(a).bX(a,b,c,d)}
J.bF=function(a,b,c,d){return J.k(a).bY(a,b,c,d)}
J.fl=function(a){return J.en(a).dZ(a)}
J.bh=function(a){return J.B(a).k(a)}
J.fm=function(a,b,c,d){return J.k(a).e0(a,b,c,d)}
J.fn=function(a,b,c){return J.k(a).c_(a,b,c)}
J.fo=function(a,b,c){return J.k(a).c0(a,b,c)}
J.cc=function(a,b,c){return J.k(a).c1(a,b,c)}
J.fp=function(a,b,c){return J.k(a).c2(a,b,c)}
J.cU=function(a,b,c){return J.k(a).c3(a,b,c)}
J.cV=function(a,b,c){return J.k(a).c4(a,b,c)}
J.cW=function(a,b,c){return J.k(a).c5(a,b,c)}
J.cX=function(a,b,c,d){return J.k(a).c6(a,b,c,d)}
J.cY=function(a,b,c,d){return J.k(a).c7(a,b,c,d)}
J.fq=function(a,b){return J.k(a).c8(a,b)}
J.fr=function(a,b,c){return J.k(a).e1(a,b,c)}
J.fs=function(a,b,c,d,e,f,g){return J.k(a).c9(a,b,c,d,e,f,g)}
J.ft=function(a,b,c,d,e){return J.k(a).cb(a,b,c,d,e)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.bG.prototype
C.y=W.bi.prototype
C.m=W.fB.prototype
C.q=W.cf.prototype
C.z=W.fK.prototype
C.r=W.fU.prototype
C.L=W.fW.prototype
C.M=W.hc.prototype
C.t=W.hd.prototype
C.N=J.h.prototype
C.a=J.bn.prototype
C.A=J.dj.prototype
C.e=J.dk.prototype
C.O=J.dl.prototype
C.u=J.bo.prototype
C.h=J.bp.prototype
C.V=J.bq.prototype
C.i=H.hI.prototype
C.n=H.hK.prototype
C.a0=W.hL.prototype
C.D=J.hT.prototype
C.E=W.i2.prototype
C.J=W.it.prototype
C.x=J.b4.prototype
C.ah=W.aK.prototype
C.ai=W.iF.prototype
C.K=new P.jj()
C.d=new P.jB()
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.W=H.m(I.ak(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.X=H.m(I.ak([34070,34069,34072,34071,34074,34073]),[P.E])
C.Y=H.m(I.ak(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.a_=H.m(I.ak([]),[P.C])
C.Z=H.m(I.ak([]),[P.d])
C.v=H.m(I.ak(["bind","if","ref","repeat","syntax"]),[P.d])
C.w=H.m(I.ak(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.a1=new G.F("vec3","vertex btangents",0)
C.c=new G.F("vec3","",0)
C.a2=new G.F("vec4","delta from light",0)
C.o=new G.F("","",0)
C.F=new G.F("vec3","vertex coordinates",0)
C.a3=new G.F("vec3","vertex binormals",0)
C.G=new G.F("vec4","for wireframe",0)
C.a4=new G.F("vec4","per vertex color",0)
C.a5=new G.F("float","for normal maps",0)
C.j=new G.F("mat4","",0)
C.a7=new G.F("mat4","",4)
C.a6=new G.F("mat4","",128)
C.b=new G.F("float","",0)
C.a8=new G.F("float","",4)
C.a9=new G.F("float","depth for shadowmaps",0)
C.f=new G.F("sampler2D","",0)
C.aa=new G.F("float","for bump maps",0)
C.ab=new G.F("vec2","texture uvs",0)
C.ac=new G.F("float","time since program start in sec",0)
C.k=new G.F("vec2","",0)
C.ad=new G.F("samplerCube","",0)
C.l=new G.F("vec4","",0)
C.ae=new G.F("vec3","vertex normals",0)
C.af=new G.F("sampler2DShadow","",0)
C.H=new G.F("vec3","per vertex color",0)
C.I=new G.F("mat3","",0)
C.ag=new G.F("vec3","vertex tangents",0)
$.a9=0
$.aU=null
$.d1=null
$.cv=!1
$.ep=null
$.eg=null
$.eu=null
$.c_=null
$.c3=null
$.cC=null
$.aN=null
$.b7=null
$.b8=null
$.cw=!1
$.D=C.d
$.ad=null
$.ch=null
$.dc=null
$.db=null
$.d8=null
$.d7=null
$.d6=null
$.d5=null
$.el=0
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
I.$lazy(y,x,w)}})(["l6","ez",function(){return H.eo("_$dart_dartClosure")},"lH","cG",function(){return H.eo("_$dart_js")},"ms","eB",function(){return H.ab(H.bS({
toString:function(){return"$receiver$"}}))},"mt","eC",function(){return H.ab(H.bS({$method$:null,
toString:function(){return"$receiver$"}}))},"mu","eD",function(){return H.ab(H.bS(null))},"mv","eE",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"my","eH",function(){return H.ab(H.bS(void 0))},"mz","eI",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mx","eG",function(){return H.ab(H.dK(null))},"mw","eF",function(){return H.ab(function(){try{null.$method$}catch(z){return z.message}}())},"mB","eK",function(){return H.ab(H.dK(void 0))},"mA","eJ",function(){return H.ab(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mL","cH",function(){return P.iJ()},"n2","bf",function(){return[]},"l3","ey",function(){return{}},"mT","eN",function(){return P.co(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"mU","cI",function(){return P.a3(P.d,P.bk)},"mf","eA",function(){return new G.dJ(1281,0,4294967295)},"l0","ex",function(){return G.dI(1281,1281,1281)},"l_","ew",function(){return G.dI(32774,770,769)},"n_","a7",function(){return P.dp(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.H,"aColorAlpha",C.a4,"aPosition",C.F,"aTexUV",C.ab,"aNormal",C.ae,"aBinormal",C.a3,"aCenter",C.G,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ag,"aBitangent",C.a1,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.F,"vPositionFromLight",C.a2,"vCenter",C.G,"vDepth",C.a9,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.af,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.ad,"uAnimationTable",C.f,"uTime",C.ac,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a6,"uLightDescs",C.a7,"uLightCount",C.b,"uLightTypes",C.a8,"uBumpScale",C.aa,"uNormalScale",C.a5],P.d,G.F)},"mG","eL",function(){return C.K},"n5","eQ",function(){var z,y
z=G.bP("CubeMap")
y=[P.d]
z.aX(H.m(["aPosition"],y))
z.aY(H.m(["vPosition"],y))
z.a4(H.m(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.a6(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vPosition = normalize(aPosition);"],y))
return z},"n4","eP",function(){var z,y
z=G.bP("CubeMapF")
y=[P.d]
z.aY(H.m(["vPosition"],y))
z.a4(H.m(["uCubeTexture"],y))
z.a6(H.m(["oFragColor = texture( uCubeTexture, vPosition );"],y))
return z},"n9","eS",function(){var z,y
z=G.bP("PointSpritesV")
y=[P.d]
z.aX(H.m(["aPosition"],y))
z.a4(H.m(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"],y))
z.a6(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"],y))
return z},"n8","eR",function(){var z,y
z=G.bP("PointSpritesF")
y=[P.d]
z.a4(H.m(["uTexture"],y))
z.a6(H.m(["oFragColor = texture( uTexture,  gl_PointCoord);"],y))
return z},"mQ","eM",function(){return H.m([T.b5(0,0,1),T.b5(0,0,-1),T.b5(0,1,0),T.b5(0,-1,0),T.b5(1,0,0),T.b5(-1,0,0)],[T.r])},"n0","eO",function(){return H.m(["nx","px","ny","py","nz","pz"],[P.d])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:P.C,args:[W.U]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.C,args:[,]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.R,args:[W.aa]},{func:1,ret:P.R,args:[P.d]},{func:1,ret:-1,args:[W.O]},{func:1,ret:P.C,args:[W.aY]},{func:1,ret:P.R,args:[W.S,P.d,P.d,W.bu]},{func:1,args:[,P.d]},{func:1,args:[P.d]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[,P.Q]},{func:1,ret:P.C,args:[,],opt:[P.Q]},{func:1,ret:[P.P,,],args:[,]},{func:1,ret:P.R,args:[W.t]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.C,args:[P.G]},{func:1,args:[W.O]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:P.C,args:[W.aK]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.C,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.kT(d||a)
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
Isolate.ak=a.ak
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
if(typeof dartMainRunner==="function")dartMainRunner(M.er,[])
else M.er([])})})()
//# sourceMappingURL=cubemap.dart.js.map
