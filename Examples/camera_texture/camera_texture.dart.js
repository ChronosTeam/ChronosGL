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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cA(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",lF:{"^":"b;a"}}],["","",,J,{"^":"",
cE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c0:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cD==null){H.kD()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cu("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cH()]
if(v!=null)return v
v=H.kI(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.B
if(y===Object.prototype)return C.B
if(typeof w=="function"){Object.defineProperty(w,$.cH(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
h:{"^":"b;",
E:function(a,b){return a===b},
gA:function(a){return H.b5(a)},
k:["ck",function(a){return"Instance of '"+H.b6(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|NavigatorAutomationInformation|NavigatorCookies|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h9:{"^":"h;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isR:1},
dj:{"^":"h;",
E:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isz:1},
ck:{"^":"h;",
gA:function(a){return 0},
k:["cm",function(a){return String(a)}]},
hO:{"^":"ck;"},
b8:{"^":"ck;"},
bq:{"^":"ck;",
k:function(a){var z=a[$.et()]
if(z==null)return this.cm(a)
return"JavaScript function for "+H.d(J.bi(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbl:1},
bn:{"^":"h;$ti",
l:function(a,b){H.y(b,H.m(a,0))
if(!!a.fixed$length)H.X(P.A("add"))
a.push(b)},
I:function(a,b){var z,y
H.x(b,"$isk",[H.m(a,0)],"$ask")
if(!!a.fixed$length)H.X(P.A("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.a0)(b),++y)a.push(b[y])},
a0:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.d(a[y]))
return z.join(b)},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
bh:function(a,b){var z,y
H.i(b,{func:1,ret:P.R,args:[H.m(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aH(a))}return!1},
ce:function(a,b){if(!!a.immutable$list)H.X(P.A("sort"))
H.ib(a,J.ke(),H.m(a,0))},
af:function(a){return this.ce(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.aF(a[z],b))return!0
return!1},
k:function(a){return P.ci(a,"[","]")},
gB:function(a){return new J.fr(a,a.length,0,[H.m(a,0)])},
gA:function(a){return H.b5(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bc(a,b))
return a[b]},
i:function(a,b,c){H.y(c,H.m(a,0))
if(!!a.immutable$list)H.X(P.A("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bc(a,b))
a[b]=c},
$isv:1,
$asv:I.bd,
$isk:1,
$isa:1,
p:{
h8:function(a,b){return J.cj(H.p(a,[b]))},
cj:function(a){H.bA(a)
a.fixed$length=Array
return a},
lD:[function(a,b){return J.eR(H.em(a,"$isW"),H.em(b,"$isW"))},"$2","ke",8,0,30]}},
lE:{"^":"bn;$ti"},
fr:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.y(a,H.m(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.a0(z))
x=this.c
if(x>=y){this.sb4(null)
return!1}this.sb4(z[x]);++this.c
return!0},
$isb0:1},
bo:{"^":"h;",
K:function(a,b){var z
H.cF(b)
if(typeof b!=="number")throw H.c(H.bb(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gac(b)
if(this.gac(a)===z)return 0
if(this.gac(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gac:function(a){return a===0?1/a<0:a<0},
bS:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.A(""+a+".toInt()"))},
dt:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.A(""+a+".ceil()"))},
du:function(a,b,c){if(this.K(b,c)>0)throw H.c(H.bb(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
dZ:function(a,b){var z
if(b>20)throw H.c(P.bP(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gac(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
co:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bd(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.bd(a,b)},
bd:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.A("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
bb:function(a,b){var z
if(a>0)z=this.dd(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dd:function(a,b){return b>31?0:a>>>b},
R:function(a,b){if(typeof b!=="number")throw H.c(H.bb(b))
return a>b},
$isW:1,
$asW:function(){return[P.G]},
$isak:1,
$isG:1},
di:{"^":"bo;",$isF:1},
dh:{"^":"bo;"},
bp:{"^":"h;",
aj:function(a,b){if(b>=a.length)throw H.c(H.bc(a,b))
return a.charCodeAt(b)},
H:function(a,b){H.u(b)
if(typeof b!=="string")throw H.c(P.cW(b,null,null))
return a+b},
cg:function(a,b,c){var z
if(c>a.length)throw H.c(P.bP(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cf:function(a,b){return this.cg(a,b,0)},
cj:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bQ(b,null,null))
if(b>c)throw H.c(P.bQ(b,null,null))
if(c>a.length)throw H.c(P.bQ(c,null,null))
return a.substring(b,c)},
ci:function(a,b){return this.cj(a,b,null)},
dY:function(a){return a.toLowerCase()},
dz:function(a,b,c){if(c>a.length)throw H.c(P.bP(c,0,a.length,null,null))
return H.kP(a,b,c)},
K:function(a,b){var z
H.u(b)
if(typeof b!=="string")throw H.c(H.bb(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bc(a,b))
return a[b]},
$isv:1,
$asv:I.bd,
$isW:1,
$asW:function(){return[P.e]},
$ishL:1,
$ise:1}}],["","",,H,{"^":"",
dg:function(){return new P.cr("No element")},
h7:function(){return new P.cr("Too many elements")},
ib:function(a,b,c){H.x(a,"$isa",[c],"$asa")
H.i(b,{func:1,ret:P.F,args:[c,c]})
H.bs(a,0,J.aX(a)-1,b,c)},
bs:function(a,b,c,d,e){H.x(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.F,args:[e,e]})
if(c-b<=32)H.ia(a,b,c,d,e)
else H.i9(a,b,c,d,e)},
ia:function(a,b,c,d,e){var z,y,x,w,v
H.x(a,"$isa",[e],"$asa")
H.i(d,{func:1,ret:P.F,args:[e,e]})
for(z=b+1,y=J.aS(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.a6(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
i9:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.x(a,"$isa",[a2],"$asa")
H.i(a1,{func:1,ret:P.F,args:[a2,a2]})
z=C.e.U(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.U(b+a0,2)
v=w-z
u=w+z
t=J.aS(a)
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
if(J.aF(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a3()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.R()
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
if(typeof e!=="number")return e.a3()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.R()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.R()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a3()
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
if(m<y&&l>x){for(;J.aF(a1.$2(t.h(a,m),r),0);)++m
for(;J.aF(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.a3()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.bs(a,m,l,a1,a2)}else H.bs(a,m,l,a1,a2)},
d6:{"^":"k;"},
bN:{"^":"d6;$ti",
gB:function(a){return new H.dm(this,this.gj(this),0,[H.cC(this,"bN",0)])},
aD:function(a,b){return this.cl(0,H.i(b,{func:1,ret:P.R,args:[H.cC(this,"bN",0)]}))}},
dm:{"^":"b;a,b,c,0d,$ti",
saZ:function(a){this.d=H.y(a,H.m(this,0))},
gC:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aS(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aH(z))
w=this.c
if(w>=x){this.saZ(null)
return!1}this.saZ(y.t(z,w));++this.c
return!0},
$isb0:1},
ho:{"^":"bN;a,b,$ti",
gj:function(a){return J.aX(this.a)},
t:function(a,b){return this.b.$1(J.f_(this.a,b))},
$asbN:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dH:{"^":"k;a,b,$ti",
gB:function(a){return new H.iA(J.bG(this.a),this.b,this.$ti)}},
iA:{"^":"b0;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gC(z)))return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bM:{"^":"b;$ti"}}],["","",,H,{"^":"",
aE:function(a){var z,y
z=H.u(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kv:function(a){return init.types[H.M(a)]},
kG:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isw},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bi(a)
if(typeof z!=="string")throw H.c(H.bb(a))
return z},
b5:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b6:function(a){return H.hP(a)+H.bW(H.al(a),0,null)},
hP:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.L||!!z.$isb8){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aE(w.length>1&&C.h.aj(w,0)===36?C.h.ci(w,1):w)},
aK:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hW:function(a){var z=H.aK(a).getFullYear()+0
return z},
hU:function(a){var z=H.aK(a).getMonth()+1
return z},
hQ:function(a){var z=H.aK(a).getDate()+0
return z},
hR:function(a){var z=H.aK(a).getHours()+0
return z},
hT:function(a){var z=H.aK(a).getMinutes()+0
return z},
hV:function(a){var z=H.aK(a).getSeconds()+0
return z},
hS:function(a){var z=H.aK(a).getMilliseconds()+0
return z},
aD:function(a){throw H.c(H.bb(a))},
n:function(a,b){if(a==null)J.aX(a)
throw H.c(H.bc(a,b))},
bc:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.M(J.aX(a))
if(!(b<0)){if(typeof z!=="number")return H.aD(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bQ(b,"index",null)},
bb:function(a){return new P.aG(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.cq()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ep})
z.name=""}else z.toString=H.ep
return z},
ep:function(){return J.bi(this.dartException)},
X:function(a){throw H.c(a)},
a0:function(a){throw H.c(P.aH(a))},
Y:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kR(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bb(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cl(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dt(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.ew()
u=$.ex()
t=$.ey()
s=$.ez()
r=$.eC()
q=$.eD()
p=$.eB()
$.eA()
o=$.eF()
n=$.eE()
m=v.J(y)
if(m!=null)return z.$1(H.cl(H.u(y),m))
else{m=u.J(y)
if(m!=null){m.method="call"
return z.$1(H.cl(H.u(y),m))}else{m=t.J(y)
if(m==null){m=s.J(y)
if(m==null){m=r.J(y)
if(m==null){m=q.J(y)
if(m==null){m=p.J(y)
if(m==null){m=s.J(y)
if(m==null){m=o.J(y)
if(m==null){m=n.J(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dt(H.u(y),m))}}return z.$1(new H.ix(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dx()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dx()
return a},
aT:function(a){var z
if(a==null)return new H.dZ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dZ(a)},
kr:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kF:function(a,b,c,d,e,f){H.f(a,"$isbl")
switch(H.M(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.da("Unsupported number of arguments for wrapped closure"))},
aj:function(a,b){var z
H.M(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kF)
a.$identity=z
return z},
fB:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.C(d).$isa){z.$reflectionInfo=d
x=H.i_(z).r}else x=d
w=e?Object.create(new H.id().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a7
if(typeof u!=="number")return u.H()
$.a7=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d0(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kv,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cZ:H.ce
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d0(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fy:function(a,b,c,d){var z=H.ce
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d0:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fA(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fy(y,!w,z,b)
if(y===0){w=$.a7
if(typeof w!=="number")return w.H()
$.a7=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aY
if(v==null){v=H.bK("self")
$.aY=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a7
if(typeof w!=="number")return w.H()
$.a7=w+1
t+=w
w="return function("+t+"){return this."
v=$.aY
if(v==null){v=H.bK("self")
$.aY=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fz:function(a,b,c,d){var z,y
z=H.ce
y=H.cZ
switch(b?-1:a){case 0:throw H.c(H.i4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fA:function(a,b){var z,y,x,w,v,u,t,s
z=$.aY
if(z==null){z=H.bK("self")
$.aY=z}y=$.cY
if(y==null){y=H.bK("receiver")
$.cY=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fz(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a7
if(typeof y!=="number")return y.H()
$.a7=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a7
if(typeof y!=="number")return y.H()
$.a7=y+1
return new Function(z+y+"}")()},
cA:function(a,b,c,d,e,f,g){return H.fB(a,b,H.M(c),d,!!e,!!f,g)},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a3(a,"String"))},
ee:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"double"))},
cF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a3(a,"num"))},
bY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a3(a,"bool"))},
M:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a3(a,"int"))},
cG:function(a,b){throw H.c(H.a3(a,H.aE(H.u(b).substring(3))))},
kN:function(a,b){throw H.c(H.d_(a,H.aE(H.u(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.cG(a,b)},
am:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.kN(a,b)},
em:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.C(a)[b])return a
H.cG(a,b)},
bA:function(a){if(a==null)return a
if(!!J.C(a).$isa)return a
throw H.c(H.a3(a,"List<dynamic>"))},
kH:function(a,b){var z
if(a==null)return a
z=J.C(a)
if(!!z.$isa)return a
if(z[b])return a
H.cG(a,b)},
cB:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.M(z)]
else return a.$S()}return},
bz:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cB(J.C(a))
if(z==null)return!1
return H.e4(z,null,b,null)},
i:function(a,b){var z,y
if(a==null)return a
if($.cw)return a
$.cw=!0
try{if(H.bz(a,b))return a
z=H.bB(b)
y=H.a3(a,z)
throw H.c(y)}finally{$.cw=!1}},
be:function(a,b){if(a!=null&&!H.cz(a,b))H.X(H.a3(a,H.bB(b)))
return a},
e9:function(a){var z,y
z=J.C(a)
if(!!z.$isl){y=H.cB(z)
if(y!=null)return H.bB(y)
return"Closure"}return H.b6(a)},
kQ:function(a){throw H.c(new P.fI(H.u(a)))},
ei:function(a){return init.getIsolateTag(a)},
p:function(a,b){a.$ti=b
return a},
al:function(a){if(a==null)return
return a.$ti},
n3:function(a,b,c){return H.aV(a["$as"+H.d(c)],H.al(b))},
bf:function(a,b,c,d){var z
H.u(c)
H.M(d)
z=H.aV(a["$as"+H.d(c)],H.al(b))
return z==null?null:z[d]},
cC:function(a,b,c){var z
H.u(b)
H.M(c)
z=H.aV(a["$as"+H.d(b)],H.al(a))
return z==null?null:z[c]},
m:function(a,b){var z
H.M(b)
z=H.al(a)
return z==null?null:z[b]},
bB:function(a){return H.aC(a,null)},
aC:function(a,b){var z,y
H.x(b,"$isa",[P.e],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aE(a[0].builtin$cls)+H.bW(a,1,b)
if(typeof a=="function")return H.aE(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.M(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.n(b,y)
return H.d(b[y])}if('func' in a)return H.kd(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.x(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.p([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.n(b,r)
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
for(z=H.kq(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.u(z[l])
n=n+m+H.aC(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bW:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isa",[P.e],"$asa")
if(a==null)return""
z=new P.cs("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return"<"+z.k(0)+">"},
ku:function(a){var z,y,x,w
z=J.C(a)
if(!!z.$isl){y=H.cB(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.al(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aV:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ai:function(a,b,c,d){var z,y
H.u(b)
H.bA(c)
H.u(d)
if(a==null)return!1
z=H.al(a)
y=J.C(a)
if(y[b]==null)return!1
return H.ec(H.aV(y[d],z),null,c,null)},
bC:function(a,b,c,d){H.u(b)
H.bA(c)
H.u(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.d_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
x:function(a,b,c,d){H.u(b)
H.bA(c)
H.u(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.a3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aE(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
ec:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.Z(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b,c[y],d))return!1
return!0},
n1:function(a,b,c){return a.apply(b,H.aV(J.C(b)["$as"+H.d(c)],H.al(b)))},
ek:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.ek(z)}return!1},
cz:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.ek(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cz(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bz(a,b)}z=J.C(a).constructor
y=H.al(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.Z(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cz(a,b))throw H.c(H.a3(a,H.bB(b)))
return a},
Z:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.Z(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.e4(a,b,c,d)
if('func' in a)return c.builtin$cls==="bl"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.Z("type" in a?a.type:null,b,x,d)
else if(H.Z(a,b,x,d))return!0
else{if(!('$is'+"a8" in y.prototype))return!1
w=y.prototype["$as"+"a8"]
v=H.aV(w,z?a.slice(1):null)
return H.Z(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ec(H.aV(r,z),b,u,d)},
e4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kM(m,b,l,d)},
kM:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.Z(c[w],d,a[w],b))return!1}return!0},
n2:function(a,b,c){Object.defineProperty(a,H.u(b),{value:c,enumerable:false,writable:true,configurable:true})},
kI:function(a){var z,y,x,w,v,u
z=H.u($.ej.$1(a))
y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.u($.eb.$2(a,z))
if(z!=null){y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.bZ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.en(a,x)
if(v==="*")throw H.c(P.cu(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.en(a,x)},
en:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cE(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cE(a,!1,null,!!a.$isw)},
kL:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cE(z,c,null,null)},
kD:function(){if(!0===$.cD)return
$.cD=!0
H.kE()},
kE:function(){var z,y,x,w,v,u,t,s
$.bZ=Object.create(null)
$.c2=Object.create(null)
H.kz()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eo.$1(v)
if(u!=null){t=H.kL(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kz:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.aR(C.N,H.aR(C.S,H.aR(C.z,H.aR(C.z,H.aR(C.R,H.aR(C.O,H.aR(C.P(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ej=new H.kA(v)
$.eb=new H.kB(u)
$.eo=new H.kC(t)},
aR:function(a,b){return a(b)||b},
kP:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hZ:{"^":"b;a,b,c,d,e,f,r,0x",p:{
i_:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cj(z)
y=z[0]
x=z[1]
return new H.hZ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
is:{"^":"b;a,b,c,d,e,f",
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
if(z==null)z=H.p([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.is(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hJ:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dt:function(a,b){return new H.hJ(a,b==null?null:b.method)}}},
ha:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
p:{
cl:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ha(a,y,z?null:b.receiver)}}},
ix:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kR:{"^":"l:9;a",
$1:function(a){if(!!J.C(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dZ:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa2:1},
l:{"^":"b;",
k:function(a){return"Closure '"+H.b6(this).trim()+"'"},
gc6:function(){return this},
$isbl:1,
gc6:function(){return this}},
dz:{"^":"l;"},
id:{"^":"dz;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aE(z)+"'"}},
cd:{"^":"dz;a,b,c,d",
E:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.b5(this.a)
else y=typeof z!=="object"?J.an(z):H.b5(z)
return(y^H.b5(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.b6(z)+"'")},
p:{
ce:function(a){return a.a},
cZ:function(a){return a.c},
bK:function(a){var z,y,x,w,v
z=new H.cd("self","target","receiver","name")
y=J.cj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
it:{"^":"N;a",
k:function(a){return this.a},
p:{
a3:function(a,b){return new H.it("TypeError: "+H.d(P.bL(a))+": type '"+H.e9(a)+"' is not a subtype of type '"+b+"'")}}},
fw:{"^":"N;a",
k:function(a){return this.a},
p:{
d_:function(a,b){return new H.fw("CastError: "+H.d(P.bL(a))+": type '"+H.e9(a)+"' is not a subtype of type '"+b+"'")}}},
i3:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
p:{
i4:function(a){return new H.i3(a)}}},
dF:{"^":"b;a,0b,0c,0d",
gaa:function(){var z=this.b
if(z==null){z=H.bB(this.a)
this.b=z}return z},
k:function(a){return this.gaa()},
gA:function(a){var z=this.d
if(z==null){z=C.h.gA(this.gaa())
this.d=z}return z},
E:function(a,b){if(b==null)return!1
return b instanceof H.dF&&this.gaa()===b.gaa()}},
dk:{"^":"dn;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gF:function(a){return new H.aq(this,[H.m(this,0)])},
ab:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cU(z,b)}else{y=this.dM(b)
return y}},
dM:function(a){var z=this.d
if(z==null)return!1
return this.ax(this.aq(z,J.an(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a7(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a7(w,b)
x=y==null?null:y.b
return x}else return this.dN(b)},
dN:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aq(z,J.an(a)&0x3ffffff)
x=this.ax(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.m(this,0))
H.y(c,H.m(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ar()
this.b=z}this.b0(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ar()
this.c=y}this.b0(y,b,c)}else{x=this.d
if(x==null){x=this.ar()
this.d=x}w=J.an(b)&0x3ffffff
v=this.aq(x,w)
if(v==null)this.at(x,w,[this.as(b,c)])
else{u=this.ax(v,b)
if(u>=0)v[u].b=c
else v.push(this.as(b,c))}}},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.m(this,0),H.m(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aH(this))
z=z.c}},
b0:function(a,b,c){var z
H.y(b,H.m(this,0))
H.y(c,H.m(this,1))
z=this.a7(a,b)
if(z==null)this.at(a,b,this.as(b,c))
else z.b=c},
b8:function(){this.r=this.r+1&67108863},
as:function(a,b){var z,y
z=new H.hf(H.y(a,H.m(this,0)),H.y(b,H.m(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b8()
return z},
ax:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
k:function(a){return P.dp(this)},
a7:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
at:function(a,b,c){a[b]=c},
cV:function(a,b){delete a[b]},
cU:function(a,b){return this.a7(a,b)!=null},
ar:function(){var z=Object.create(null)
this.at(z,"<non-identifier-key>",z)
this.cV(z,"<non-identifier-key>")
return z},
$isdl:1},
hf:{"^":"b;a,b,0c,0d"},
aq:{"^":"d6;a,$ti",
gj:function(a){return this.a.a},
gB:function(a){var z,y
z=this.a
y=new H.hg(z,z.r,this.$ti)
y.c=z.e
return y}},
hg:{"^":"b;a,b,0c,0d,$ti",
sb_:function(a){this.d=H.y(a,H.m(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aH(z))
else{z=this.c
if(z==null){this.sb_(null)
return!1}else{this.sb_(z.a)
this.c=this.c.c
return!0}}},
$isb0:1},
kA:{"^":"l:9;a",
$1:function(a){return this.a(a)}},
kB:{"^":"l:22;a",
$2:function(a,b){return this.a(a,b)}},
kC:{"^":"l:19;a",
$1:function(a){return this.a(H.u(a))}}}],["","",,H,{"^":"",
kq:function(a){return J.h8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
c4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bV:function(a){var z,y
if(!!J.C(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bc(b,a))},
dq:{"^":"h;",$isdq:1,"%":"ArrayBuffer"},
cp:{"^":"h;",$iscp:1,$isiu:1,"%":"DataView;ArrayBufferView;co|dT|dU|dr|dV|dW|as"},
co:{"^":"cp;",
gj:function(a){return a.length},
$isv:1,
$asv:I.bd,
$isw:1,
$asw:I.bd},
dr:{"^":"dU;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ee(c)
H.ac(b,a,a.length)
a[b]=c},
$asbM:function(){return[P.ak]},
$aso:function(){return[P.ak]},
$isk:1,
$ask:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
"%":"Float64Array"},
as:{"^":"dW;",
i:function(a,b,c){H.M(c)
H.ac(b,a,a.length)
a[b]=c},
$asbM:function(){return[P.F]},
$aso:function(){return[P.F]},
$isk:1,
$ask:function(){return[P.F]},
$isa:1,
$asa:function(){return[P.F]}},
hA:{"^":"dr;",$isag:1,"%":"Float32Array"},
lO:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lP:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ish5:1,
"%":"Int32Array"},
lQ:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lR:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hB:{"^":"as;",
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$ismC:1,
"%":"Uint32Array"},
lS:{"^":"as;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lT:{"^":"as;",
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dT:{"^":"co+o;"},
dU:{"^":"dT+bM;"},
dV:{"^":"co+o;"},
dW:{"^":"dV+bM;"}}],["","",,P,{"^":"",
iE:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aj(new P.iG(z),1)).observe(y,{childList:true})
return new P.iF(z,y,x)}else if(self.setImmediate!=null)return P.kl()
return P.km()},
mL:[function(a){self.scheduleImmediate(H.aj(new P.iH(H.i(a,{func:1,ret:-1})),0))},"$1","kk",4,0,5],
mM:[function(a){self.setImmediate(H.aj(new P.iI(H.i(a,{func:1,ret:-1})),0))},"$1","kl",4,0,5],
mN:[function(a){H.i(a,{func:1,ret:-1})
P.jV(0,a)},"$1","km",4,0,5],
e5:function(a,b){if(H.bz(a,{func:1,args:[P.b,P.a2]})){b.toString
return H.i(a,{func:1,ret:null,args:[P.b,P.a2]})}if(H.bz(a,{func:1,args:[P.b]})){b.toString
return H.i(a,{func:1,ret:null,args:[P.b]})}throw H.c(P.cW(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kg:function(){var z,y
for(;z=$.aP,z!=null;){$.ba=null
y=z.b
$.aP=y
if(y==null)$.b9=null
z.a.$0()}},
n_:[function(){$.cx=!0
try{P.kg()}finally{$.ba=null
$.cx=!1
if($.aP!=null)$.cI().$1(P.ed())}},"$0","ed",0,0,1],
e8:function(a){var z=new P.dJ(H.i(a,{func:1,ret:-1}))
if($.aP==null){$.b9=z
$.aP=z
if(!$.cx)$.cI().$1(P.ed())}else{$.b9.b=z
$.b9=z}},
kj:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.aP
if(z==null){P.e8(a)
$.ba=$.b9
return}y=new P.dJ(a)
x=$.ba
if(x==null){y.b=z
$.ba=y
$.aP=y}else{y.b=x.b
x.b=y
$.ba=y
if(y.b==null)$.b9=y}},
kO:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.D
if(C.d===y){P.aQ(null,null,C.d,a)
return}y.toString
P.aQ(null,null,y,H.i(y.bk(a),z))},
kc:function(a,b,c){a.dr(0)
b.a6(c)},
bX:function(a,b,c,d,e){var z={}
z.a=d
P.kj(new P.kh(z,e))},
e6:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
e7:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
ki:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aQ:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bk(d):c.dm(d,-1)
P.e8(d)},
iG:{"^":"l:7;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iF:{"^":"l:18;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iH:{"^":"l:0;a",
$0:function(){this.a.$0()}},
iI:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jU:{"^":"b;a,0b,c",
cN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aj(new P.jW(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
p:{
jV:function(a,b){var z=new P.jU(!0,0)
z.cN(a,b)
return z}}},
jW:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
dN:{"^":"b;$ti",
dw:function(a,b){if(a==null)a=new P.cq()
if(this.a.a!==0)throw H.c(P.bt("Future already completed"))
$.D.toString
this.M(a,b)},
dv:function(a){return this.dw(a,null)}},
dK:{"^":"dN;a,$ti",
av:function(a,b){var z
H.be(b,{futureOr:1,type:H.m(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bt("Future already completed"))
z.cQ(b)},
M:function(a,b){this.a.cR(a,b)}},
jP:{"^":"dN;a,$ti",
M:function(a,b){this.a.M(a,b)}},
aB:{"^":"b;0a,b,c,d,e,$ti",
dO:function(a){if(this.c!==6)return!0
return this.b.b.aA(H.i(this.d,{func:1,ret:P.R,args:[P.b]}),a.a,P.R,P.b)},
dL:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.m(this,1)}
w=this.b.b
if(H.bz(z,{func:1,args:[P.b,P.a2]}))return H.be(w.dU(z,a.a,a.b,null,y,P.a2),x)
else return H.be(w.aA(H.i(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
Q:{"^":"b;bc:a<,b,0d9:c<,$ti",
bR:function(a,b,c){var z,y,x,w
z=H.m(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.d){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.e5(b,y)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.Q(0,$.D,[c])
w=b==null?1:3
this.ah(new P.aB(x,w,a,b,[z,c]))
return x},
a1:function(a,b){return this.bR(a,null,b)},
ds:function(a,b){var z,y
z=$.D
y=new P.Q(0,z,this.$ti)
if(z!==C.d)a=P.e5(a,z)
z=H.m(this,0)
this.ah(new P.aB(y,2,b,a,[z,z]))
return y},
bp:function(a){return this.ds(a,null)},
ah:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaB")
this.c=a}else{if(z===2){y=H.f(this.c,"$isQ")
z=y.a
if(z<4){y.ah(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aQ(null,null,z,H.i(new P.iZ(this,a),{func:1,ret:-1}))}},
b9:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaB")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isQ")
y=u.a
if(y<4){u.b9(a)
return}this.a=y
this.c=u.c}z.a=this.a9(a)
y=this.b
y.toString
P.aQ(null,null,y,H.i(new P.j5(z,this),{func:1,ret:-1}))}},
a8:function(){var z=H.f(this.c,"$isaB")
this.c=null
return this.a9(z)},
a9:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
a6:function(a){var z,y,x
z=H.m(this,0)
H.be(a,{futureOr:1,type:z})
y=this.$ti
if(H.ai(a,"$isa8",y,"$asa8"))if(H.ai(a,"$isQ",y,null))P.bT(a,this)
else P.dO(a,this)
else{x=this.a8()
H.y(a,z)
this.a=4
this.c=a
P.aO(this,x)}},
M:function(a,b){var z
H.f(b,"$isa2")
z=this.a8()
this.a=8
this.c=new P.P(a,b)
P.aO(this,z)},
cQ:function(a){var z
H.be(a,{futureOr:1,type:H.m(this,0)})
if(H.ai(a,"$isa8",this.$ti,"$asa8")){this.cS(a)
return}this.a=1
z=this.b
z.toString
P.aQ(null,null,z,H.i(new P.j0(this,a),{func:1,ret:-1}))},
cS:function(a){var z=this.$ti
H.x(a,"$isa8",z,"$asa8")
if(H.ai(a,"$isQ",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aQ(null,null,z,H.i(new P.j4(this,a),{func:1,ret:-1}))}else P.bT(a,this)
return}P.dO(a,this)},
cR:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aQ(null,null,z,H.i(new P.j_(this,a,b),{func:1,ret:-1}))},
$isa8:1,
p:{
dO:function(a,b){var z,y,x
b.a=1
try{a.bR(new P.j1(b),new P.j2(b),null)}catch(x){z=H.Y(x)
y=H.aT(x)
P.kO(new P.j3(b,z,y))}},
bT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isQ")
if(z>=4){y=b.a8()
b.a=a.a
b.c=a.c
P.aO(b,y)}else{y=H.f(b.c,"$isaB")
b.a=2
b.c=a
a.b9(y)}},
aO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isP")
y=y.b
u=v.a
t=v.b
y.toString
P.bX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aO(z.a,b)}y=z.a
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
if(p){H.f(r,"$isP")
y=y.b
u=r.a
t=r.b
y.toString
P.bX(null,null,y,u,t)
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.j8(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j7(x,b,r).$0()}else if((y&2)!==0)new P.j6(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.C(y).$isa8){if(y.a>=4){n=H.f(t.c,"$isaB")
t.c=null
b=t.a9(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bT(y,t)
return}}m=b.b
n=H.f(m.c,"$isaB")
m.c=null
b=m.a9(n)
y=x.a
u=x.b
if(!y){H.y(u,H.m(m,0))
m.a=4
m.c=u}else{H.f(u,"$isP")
m.a=8
m.c=u}z.a=m
y=m}}}},
iZ:{"^":"l:0;a,b",
$0:function(){P.aO(this.a,this.b)}},
j5:{"^":"l:0;a,b",
$0:function(){P.aO(this.b,this.a.a)}},
j1:{"^":"l:7;a",
$1:function(a){var z=this.a
z.a=0
z.a6(a)}},
j2:{"^":"l:23;a",
$2:function(a,b){H.f(b,"$isa2")
this.a.M(a,b)},
$1:function(a){return this.$2(a,null)}},
j3:{"^":"l:0;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
j0:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=H.y(this.b,H.m(z,0))
x=z.a8()
z.a=4
z.c=y
P.aO(z,x)}},
j4:{"^":"l:0;a,b",
$0:function(){P.bT(this.b,this.a)}},
j_:{"^":"l:0;a,b,c",
$0:function(){this.a.M(this.b,this.c)}},
j8:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bN(H.i(w.d,{func:1}),null)}catch(v){y=H.Y(v)
x=H.aT(v)
if(this.d){w=H.f(this.a.a.c,"$isP").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isP")
else u.b=new P.P(y,x)
u.a=!0
return}if(!!J.C(z).$isa8){if(z instanceof P.Q&&z.gbc()>=4){if(z.gbc()===8){w=this.b
w.b=H.f(z.gd9(),"$isP")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.a1(new P.j9(t),null)
w.a=!1}}},
j9:{"^":"l:24;a",
$1:function(a){return this.a}},
j7:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.m(x,0)
v=H.y(this.c,w)
u=H.m(x,1)
this.a.b=x.b.b.aA(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Y(t)
y=H.aT(t)
x=this.a
x.b=new P.P(z,y)
x.a=!0}}},
j6:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isP")
w=this.c
if(w.dO(z)&&w.e!=null){v=this.b
v.b=w.dL(z)
v.a=!1}}catch(u){y=H.Y(u)
x=H.aT(u)
w=H.f(this.a.a.c,"$isP")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.P(y,x)
s.a=!0}}},
dJ:{"^":"b;a,0b"},
ii:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.D,[P.F])
z.a=0
x=H.m(this,0)
w=H.i(new P.im(z,this),{func:1,ret:-1,args:[x]})
H.i(new P.io(z,y),{func:1,ret:-1})
W.ah(this.a,this.b,w,!1,x)
return y},
gdJ:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.D,this.$ti)
z.a=null
x=H.m(this,0)
w=H.i(new P.ik(z,this,y),{func:1,ret:-1,args:[x]})
H.i(new P.il(y),{func:1,ret:-1})
z.a=W.ah(this.a,this.b,w,!1,x)
return y}},
im:{"^":"l;a,b",
$1:function(a){H.y(a,H.m(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.m(this.b,0)]}}},
io:{"^":"l:0;a,b",
$0:function(){this.b.a6(this.a.a)}},
ik:{"^":"l;a,b,c",
$1:function(a){H.y(a,H.m(this.b,0))
P.kc(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.z,args:[H.m(this.b,0)]}}},
il:{"^":"l:0;a",
$0:function(){var z,y,x,w
try{x=H.dg()
throw H.c(x)}catch(w){z=H.Y(w)
y=H.aT(w)
$.D.toString
this.a.M(z,y)}}},
ij:{"^":"b;"},
P:{"^":"b;a,b",
k:function(a){return H.d(this.a)},
$isN:1},
k1:{"^":"b;",$ismJ:1},
kh:{"^":"l:0;a,b",
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
jv:{"^":"k1;",
dV:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.d===$.D){a.$0()
return}P.e6(null,null,this,a,-1)}catch(x){z=H.Y(x)
y=H.aT(x)
P.bX(null,null,this,z,H.f(y,"$isa2"))}},
dW:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.d===$.D){a.$1(b)
return}P.e7(null,null,this,a,b,-1,c)}catch(x){z=H.Y(x)
y=H.aT(x)
P.bX(null,null,this,z,H.f(y,"$isa2"))}},
dm:function(a,b){return new P.jx(this,H.i(a,{func:1,ret:b}),b)},
bk:function(a){return new P.jw(this,H.i(a,{func:1,ret:-1}))},
dn:function(a,b){return new P.jy(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bN:function(a,b){H.i(a,{func:1,ret:b})
if($.D===C.d)return a.$0()
return P.e6(null,null,this,a,b)},
aA:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.D===C.d)return a.$1(b)
return P.e7(null,null,this,a,b,c,d)},
dU:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.D===C.d)return a.$2(b,c)
return P.ki(null,null,this,a,b,c,d,e,f)}},
jx:{"^":"l;a,b,c",
$0:function(){return this.a.bN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jw:{"^":"l:1;a,b",
$0:function(){return this.a.dV(this.b)}},
jy:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dW(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cm:function(a,b,c){H.bA(a)
return H.x(H.kr(a,new H.dk(0,0,[b,c])),"$isdl",[b,c],"$asdl")},
a9:function(a,b){return new H.dk(0,0,[a,b])},
a1:function(a,b,c,d){return new P.jg(0,0,[d])},
h6:function(a,b,c){var z,y
if(P.cy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.p([],[P.e])
y=$.bg()
C.a.l(y,a)
try{P.kf(a,z)}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=P.dy(b,H.kH(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
ci:function(a,b,c){var z,y,x
if(P.cy(a))return b+"..."+c
z=new P.cs(b)
y=$.bg()
C.a.l(y,a)
try{x=z
x.a=P.dy(x.gT(),a,", ")}finally{if(0>=y.length)return H.n(y,-1)
y.pop()}y=z
y.a=y.gT()+c
y=z.gT()
return y.charCodeAt(0)==0?y:y},
cy:function(a){var z,y
for(z=0;y=$.bg(),z<y.length;++z)if(a===y[z])return!0
return!1},
kf:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[P.e],"$asa")
z=a.gB(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.d(z.gC(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.n(b,-1)
v=b.pop()
if(0>=b.length)return H.n(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.u()){if(x<=4){C.a.l(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.n(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.u();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.n(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.n(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
cn:function(a,b){var z,y,x
z=P.a1(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.a0)(a),++x)z.l(0,H.y(a[x],b))
return z},
dp:function(a){var z,y,x
z={}
if(P.cy(a))return"{...}"
y=new P.cs("")
try{C.a.l($.bg(),a)
x=y
x.a=x.gT()+"{"
z.a=!0
J.f2(a,new P.hn(z,y))
z=y
z.a=z.gT()+"}"}finally{z=$.bg()
if(0>=z.length)return H.n(z,-1)
z.pop()}z=y.gT()
return z.charCodeAt(0)==0?z:z},
jg:{"^":"jb;a,0b,0c,0d,0e,0f,r,$ti",
gB:function(a){var z=new P.dS(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isby")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isby")!=null}else return this.cT(b)},
cT:function(a){var z=this.d
if(z==null)return!1
return this.ap(this.b5(z,a),a)>=0},
l:function(a,b){var z,y
H.y(b,H.m(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cv()
this.b=z}return this.b1(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cv()
this.c=y}return this.b1(y,b)}else return this.cO(0,b)},
cO:function(a,b){var z,y,x
H.y(b,H.m(this,0))
z=this.d
if(z==null){z=P.cv()
this.d=z}y=this.b3(b)
x=z[y]
if(x==null)z[y]=[this.al(b)]
else{if(this.ap(x,b)>=0)return!1
x.push(this.al(b))}return!0},
bM:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.ba(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ba(this.c,b)
else return this.d3(0,b)},
d3:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b5(z,b)
x=this.ap(y,b)
if(x<0)return!1
this.be(y.splice(x,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ak()}},
b1:function(a,b){H.y(b,H.m(this,0))
if(H.f(a[b],"$isby")!=null)return!1
a[b]=this.al(b)
return!0},
ba:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isby")
if(z==null)return!1
this.be(z)
delete a[b]
return!0},
ak:function(){this.r=this.r+1&67108863},
al:function(a){var z,y
z=new P.by(H.y(a,H.m(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ak()
return z},
be:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ak()},
b3:function(a){return J.an(a)&0x3ffffff},
b5:function(a,b){return a[this.b3(b)]},
ap:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.aF(a[y].a,b))return y
return-1},
p:{
cv:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
by:{"^":"b;a,0b,0c"},
dS:{"^":"b;a,b,0c,0d,$ti",
sb2:function(a){this.d=H.y(a,H.m(this,0))},
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aH(z))
else{z=this.c
if(z==null){this.sb2(null)
return!1}else{this.sb2(H.y(z.a,H.m(this,0)))
this.c=this.c.b
return!0}}},
$isb0:1,
p:{
jh:function(a,b,c){var z=new P.dS(a,b,[c])
z.c=a.e
return z}}},
jb:{"^":"i5;"},
hh:{"^":"ji;",$isk:1,$isa:1},
o:{"^":"b;$ti",
gB:function(a){return new H.dm(a,this.gj(a),0,[H.bf(this,a,"o",0)])},
t:function(a,b){return this.h(a,b)},
dK:function(a,b,c,d){var z,y,x
H.y(b,d)
H.i(c,{func:1,ret:d,args:[d,H.bf(this,a,"o",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.aH(a))}return y},
k:function(a){return P.ci(a,"[","]")}},
dn:{"^":"T;"},
hn:{"^":"l:3;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
T:{"^":"b;$ti",
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.bf(this,a,"T",0),H.bf(this,a,"T",1)]})
for(z=J.bG(this.gF(a));z.u();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aX(this.gF(a))},
k:function(a){return P.dp(a)},
$isJ:1},
i6:{"^":"b;$ti",
I:function(a,b){var z
for(z=J.bG(H.x(b,"$isk",this.$ti,"$ask"));z.u();)this.l(0,z.gC(z))},
k:function(a){return P.ci(this,"{","}")},
$isk:1,
$isma:1},
i5:{"^":"i6;"},
ji:{"^":"b+o;"}}],["","",,P,{"^":"",
fV:function(a){if(a instanceof H.l)return a.k(0)
return"Instance of '"+H.b6(a)+"'"},
bL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bi(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fV(a)},
da:function(a){return new P.iW(a)},
ad:function(a){H.c4(H.d(a))},
R:{"^":"b;"},
"+bool":0,
bj:{"^":"b;a,b",
E:function(a,b){if(b==null)return!1
return b instanceof P.bj&&this.a===b.a&&!0},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isbj").a)},
gA:function(a){var z=this.a
return(z^C.e.bb(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.fJ(H.hW(this))
y=P.bk(H.hU(this))
x=P.bk(H.hQ(this))
w=P.bk(H.hR(this))
v=P.bk(H.hT(this))
u=P.bk(H.hV(this))
t=P.fK(H.hS(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isW:1,
$asW:function(){return[P.bj]},
p:{
fJ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bk:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"G;"},
"+double":0,
aZ:{"^":"b;a",
R:function(a,b){return C.e.R(this.a,H.f(b,"$isaZ").a)},
E:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
K:function(a,b){return C.e.K(this.a,H.f(b,"$isaZ").a)},
k:function(a){var z,y,x,w,v
z=new P.fS()
y=this.a
if(y<0)return"-"+new P.aZ(0-y).k(0)
x=z.$1(C.e.U(y,6e7)%60)
w=z.$1(C.e.U(y,1e6)%60)
v=new P.fR().$1(y%1e6)
return""+C.e.U(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
$isW:1,
$asW:function(){return[P.aZ]},
p:{
fQ:function(a,b,c,d,e,f){return new P.aZ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fR:{"^":"l:8;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fS:{"^":"l:8;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"b;"},
cq:{"^":"N;",
k:function(a){return"Throw of null."}},
aG:{"^":"N;a,b,c,d",
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
u=P.bL(this.b)
return w+v+": "+H.d(u)},
p:{
cW:function(a,b,c){return new P.aG(!0,a,b,c)}}},
du:{"^":"aG;e,f,a,b,c,d",
gan:function(){return"RangeError"},
gam:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
p:{
bQ:function(a,b,c){return new P.du(null,null,!0,a,b,"Value not in range")},
bP:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")}}},
h4:{"^":"aG;e,j:f>,a,b,c,d",
gan:function(){return"RangeError"},
gam:function(){var z,y
z=H.M(this.b)
if(typeof z!=="number")return z.a3()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.d(y)},
p:{
H:function(a,b,c,d,e){var z=H.M(e==null?J.aX(b):e)
return new P.h4(b,z,!0,a,c,"Index out of range")}}},
iy:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.iy(a)}}},
iw:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cu:function(a){return new P.iw(a)}}},
cr:{"^":"N;a",
k:function(a){return"Bad state: "+this.a},
p:{
bt:function(a){return new P.cr(a)}}},
fC:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bL(z))+"."},
p:{
aH:function(a){return new P.fC(a)}}},
dx:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isN:1},
fI:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iW:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
bl:{"^":"b;"},
F:{"^":"G;"},
"+int":0,
k:{"^":"b;$ti",
aD:["cl",function(a,b){var z=H.cC(this,"k",0)
return new H.dH(this,H.i(b,{func:1,ret:P.R,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gB(this)
for(y=0;z.u();)++y
return y},
t:function(a,b){var z,y,x
if(b<0)H.X(P.bP(b,0,null,"index",null))
for(z=this.gB(this),y=0;z.u();){x=z.gC(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
k:function(a){return P.h6(this,"(",")")}},
b0:{"^":"b;$ti"},
a:{"^":"b;$ti",$isk:1},
"+List":0,
J:{"^":"b;$ti"},
z:{"^":"b;",
gA:function(a){return P.b.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isW:1,
$asW:function(){return[P.G]}},
"+num":0,
b:{"^":";",
E:function(a,b){return this===b},
gA:function(a){return H.b5(this)},
k:function(a){return"Instance of '"+H.b6(this)+"'"},
toString:function(){return this.k(this)}},
a2:{"^":"b;"},
e:{"^":"b;",$isW:1,
$asW:function(){return[P.e]},
$ishL:1},
"+String":0,
cs:{"^":"b;T:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dy:function(a,b,c){var z=J.bG(b)
if(!z.u())return a
if(c.length===0){do a+=H.d(z.gC(z))
while(z.u())}else{a+=H.d(z.gC(z))
for(;z.u();)a=a+c+H.d(z.gC(z))}return a}}}}],["","",,W,{"^":"",
fT:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).L(z,a,b,c)
y.toString
z=W.t
z=new H.dH(new W.a4(y),H.i(new W.fU(),{func:1,ret:P.R,args:[z]}),[z])
x=z.gB(z)
if(!x.u())H.X(H.dg())
w=x.gC(x)
if(x.u())H.X(H.h7())
return H.f(w,"$isS")},
d9:function(a){H.f(a,"$isK")
return"wheel"},
b_:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f5(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Y(x)}return z},
iT:function(a,b){return document.createElement(a)},
bU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dR:function(a,b,c,d){var z,y
z=W.bU(W.bU(W.bU(W.bU(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e3:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iN(a)
if(!!J.C(z).$isK)return z
return}else return H.f(a,"$isK")},
ea:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.d)return a
return z.dn(a,b)},
L:{"^":"S;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kS:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fp:{"^":"L;",
k:function(a){return String(a)},
$isfp:1,
"%":"HTMLAnchorElement"},
kT:{"^":"L;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cX:{"^":"L;",$iscX:1,"%":"HTMLBaseElement"},
cc:{"^":"h;",$iscc:1,"%":";Blob"},
bJ:{"^":"L;",$isbJ:1,"%":"HTMLBodyElement"},
cf:{"^":"L;0n:height=,0m:width=",
c7:function(a,b,c){var z=this.cY(a,b,P.ko(c,null))
return z},
cY:function(a,b,c){return a.getContext(b,c)},
$iscf:1,
"%":"HTMLCanvasElement"},
kY:{"^":"h;",
ae:function(a){return P.a_(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kZ:{"^":"t;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fD:{"^":"cg;",$isfD:1,"%":"CSSNumericValue|CSSUnitValue"},
l0:{"^":"fG;0j:length=","%":"CSSPerspective"},
ao:{"^":"h;",$isao:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fE:{"^":"iL;0j:length=",
aH:function(a,b){var z=this.cZ(a,this.ai(a,b))
return z==null?"":z},
ai:function(a,b){var z,y
z=$.es()
y=z[b]
if(typeof y==="string")return y
y=this.de(a,b)
z[b]=y
return y},
de:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fL()+b
if(z in a)return z
return b},
cZ:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fF:{"^":"b;",
gn:function(a){return this.aH(a,"height")},
gm:function(a){return this.aH(a,"width")}},
cg:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fG:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l2:{"^":"cg;0j:length=","%":"CSSTransformValue"},
l3:{"^":"cg;0j:length=","%":"CSSUnparsedValue"},
l5:{"^":"h;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fM:{"^":"L;","%":"HTMLDivElement"},
fN:{"^":"t;",
dh:function(a,b){return a.adoptNode(b)},
c8:function(a,b){return a.getElementById(b)},
dQ:function(a,b){return a.querySelector(b)},
gbH:function(a){return new W.bw(a,"mousedown",!1,[W.U])},
gbI:function(a){return new W.bw(a,"mousemove",!1,[W.U])},
gbJ:function(a){return new W.bw(a,"mouseup",!1,[W.U])},
gbK:function(a){return new W.bw(a,H.u(W.d9(a)),!1,[W.aN])},
"%":"XMLDocument;Document"},
l6:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fO:{"^":"h;",
dD:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
l7:{"^":"iP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(c,"$isV",[P.G],"$asV")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.V,P.G]]},
$isw:1,
$asw:function(){return[[P.V,P.G]]},
$aso:function(){return[[P.V,P.G]]},
$isk:1,
$ask:function(){return[[P.V,P.G]]},
$isa:1,
$asa:function(){return[[P.V,P.G]]},
$asq:function(){return[[P.V,P.G]]},
"%":"ClientRectList|DOMRectList"},
fP:{"^":"h;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gm(a))+" x "+H.d(this.gn(a))},
E:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isV",[P.G],"$asV"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isV:1,
$asV:function(){return[P.G]},
"%":";DOMRectReadOnly"},
l8:{"^":"iR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.e]},
$isw:1,
$asw:function(){return[P.e]},
$aso:function(){return[P.e]},
$isk:1,
$ask:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asq:function(){return[P.e]},
"%":"DOMStringList"},
l9:{"^":"h;0j:length=","%":"DOMTokenList"},
S:{"^":"t;0dX:tagName=",
gdk:function(a){return new W.iS(a)},
k:function(a){return a.localName},
L:["ag",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d8
if(z==null){z=H.p([],[W.aa])
y=new W.ds(z)
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
$.d8=y
d=y}else d=z
z=$.d7
if(z==null){z=new W.e2(d)
$.d7=z
c=z}else{z.a=d
c=z}}if($.ae==null){z=document
y=z.implementation
y=(y&&C.J).dD(y,"")
$.ae=y
$.ch=y.createRange()
y=$.ae
y.toString
y=y.createElement("base")
H.f(y,"$iscX")
y.href=z.baseURI
z=$.ae.head;(z&&C.K).G(z,y)}z=$.ae
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbJ")}z=$.ae
if(!!this.$isbJ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ae.body;(z&&C.o).G(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.V,a.tagName)){z=$.ch;(z&&C.C).cb(z,x)
z=$.ch
w=(z&&C.C).dB(z,b)}else{x.innerHTML=b
w=$.ae.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.G(w,y)}z=$.ae.body
if(x==null?z!=null:x!==z)J.cQ(x)
c.aM(w)
C.q.dh(document,w)
return w},function(a,b,c){return this.L(a,b,c,null)},"dC",null,null,"ge6",5,5,null],
cd:function(a,b,c,d){a.textContent=null
this.G(a,this.L(a,b,c,d))},
cc:function(a,b){return this.cd(a,b,null,null)},
X:function(a,b){return a.getAttribute(b)},
d4:function(a,b){return a.removeAttribute(b)},
gbH:function(a){return new W.bv(a,"mousedown",!1,[W.U])},
gbI:function(a){return new W.bv(a,"mousemove",!1,[W.U])},
gbJ:function(a){return new W.bv(a,"mouseup",!1,[W.U])},
gbK:function(a){return new W.bv(a,H.u(W.d9(a)),!1,[W.aN])},
$isS:1,
"%":";Element"},
fU:{"^":"l:15;",
$1:function(a){return!!J.C(H.f(a,"$ist")).$isS}},
lb:{"^":"L;0n:height=,0m:width=","%":"HTMLEmbedElement"},
O:{"^":"h;",$isO:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
K:{"^":"h;",
dg:function(a,b,c,d){H.i(c,{func:1,args:[W.O]})
if(c!=null)this.cP(a,b,c,!1)},
cP:function(a,b,c,d){return a.addEventListener(b,H.aj(H.i(c,{func:1,args:[W.O]}),1),!1)},
d6:function(a,b,c,d){return a.removeEventListener(b,H.aj(H.i(c,{func:1,args:[W.O]}),1),!1)},
$isK:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dX|dY|e0|e1"},
af:{"^":"cc;",$isaf:1,"%":"File"},
dc:{"^":"iY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaf")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.af]},
$isw:1,
$asw:function(){return[W.af]},
$aso:function(){return[W.af]},
$isk:1,
$ask:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$isdc:1,
$asq:function(){return[W.af]},
"%":"FileList"},
ls:{"^":"K;0j:length=","%":"FileWriter"},
lv:{"^":"L;0j:length=","%":"HTMLFormElement"},
ap:{"^":"h;",$isap:1,"%":"Gamepad"},
h1:{"^":"L;","%":"HTMLHeadElement"},
lw:{"^":"h;0j:length=","%":"History"},
lx:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isw:1,
$asw:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h2:{"^":"fN;","%":"HTMLDocument"},
ly:{"^":"L;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lz:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
df:{"^":"h;0n:height=,0m:width=",$isdf:1,"%":"ImageData"},
lA:{"^":"L;0n:height=,0m:width=","%":"HTMLImageElement"},
lC:{"^":"L;0n:height=,0m:width=","%":"HTMLInputElement"},
b1:{"^":"dG;",$isb1:1,"%":"KeyboardEvent"},
hi:{"^":"h;",
k:function(a){return String(a)},
$ishi:1,
"%":"Location"},
hq:{"^":"L;","%":"HTMLAudioElement;HTMLMediaElement"},
lK:{"^":"h;0j:length=","%":"MediaList"},
aJ:{"^":"K;",$isaJ:1,"%":"MediaStream"},
lL:{"^":"jk;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.p([],[P.e])
this.D(a,new W.hs(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hs:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lM:{"^":"jl;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.p([],[P.e])
this.D(a,new W.ht(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
ht:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ar:{"^":"h;",$isar:1,"%":"MimeType"},
lN:{"^":"jn;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isar")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ar]},
$isw:1,
$asw:function(){return[W.ar]},
$aso:function(){return[W.ar]},
$isk:1,
$ask:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"MimeTypeArray"},
U:{"^":"dG;",
gbG:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b4(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.C(W.e3(z)).$isS)throw H.c(P.A("offsetX is only supported on elements"))
y=H.f(W.e3(z),"$isS")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.x(new P.b4(u,v,w),"$isb4",w,"$asb4")
if(typeof z!=="number")return z.aP()
if(typeof x!=="number")return x.aP()
return new P.b4(C.r.bS(z-u),C.r.bS(x-v),w)}},
$isU:1,
"%":";DragEvent|MouseEvent"},
hC:{"^":"hD;",
ca:function(a,b,c){var z,y,x,w
z=W.aJ
y=new P.Q(0,$.D,[z])
x=new P.dK(y,[z])
w=P.cm(["audio",!1,"video",!0],P.e,null)
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.d_(a,new P.jM([],[]).aC(w),new W.hE(x),new W.hF(x))
return y},
c9:function(a,b){return this.ca(a,!1,b)},
d_:function(a,b,c,d){H.i(c,{func:1,ret:-1,args:[W.aJ]})
H.i(d,{func:1,ret:-1,args:[W.br]})
return a.getUserMedia(b,H.aj(c,1),H.aj(d,1))},
"%":"Navigator"},
hE:{"^":"l:10;a",
$1:function(a){this.a.av(0,H.f(a,"$isaJ"))}},
hF:{"^":"l:31;a",
$1:function(a){this.a.dv(H.f(a,"$isbr"))}},
hD:{"^":"h;","%":"WorkerNavigator;NavigatorConcurrentHardware"},
br:{"^":"h;",$isbr:1,"%":"NavigatorUserMediaError"},
a4:{"^":"hh;a",
ga5:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bt("No elements"))
if(y>1)throw H.c(P.bt("More than one element"))
return z.firstChild},
I:function(a,b){var z,y,x,w,v
H.x(b,"$isk",[W.t],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.G(y,z.firstChild)
return},
i:function(a,b,c){var z,y
H.f(c,"$ist")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.n(y,b)
J.eL(z,c,y[b])},
gB:function(a){var z=this.a.childNodes
return new W.dd(z,z.length,-1,[H.bf(C.Y,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.n(z,b)
return z[b]},
$aso:function(){return[W.t]},
$ask:function(){return[W.t]},
$asa:function(){return[W.t]}},
t:{"^":"K;0dP:previousSibling=",
dR:function(a){var z=a.parentNode
if(z!=null)J.bD(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.ck(a):z},
G:function(a,b){return a.appendChild(b)},
d5:function(a,b){return a.removeChild(b)},
d7:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hG:{"^":"jp;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isw:1,
$asw:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
lW:{"^":"L;0n:height=,0m:width=","%":"HTMLObjectElement"},
lY:{"^":"K;0n:height=,0m:width=","%":"OffscreenCanvas"},
lZ:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
at:{"^":"h;0j:length=",$isat:1,"%":"Plugin"},
m0:{"^":"jt;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isat")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.at]},
$isw:1,
$asw:function(){return[W.at]},
$aso:function(){return[W.at]},
$isk:1,
$ask:function(){return[W.at]},
$isa:1,
$asa:function(){return[W.at]},
$asq:function(){return[W.at]},
"%":"PluginArray"},
m2:{"^":"U;0n:height=,0m:width=","%":"PointerEvent"},
hY:{"^":"h;",
dB:function(a,b){return a.createContextualFragment(b)},
cb:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
m7:{"^":"jz;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.p([],[P.e])
this.D(a,new W.i2(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"RTCStatsReport"},
i2:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
m8:{"^":"h;0n:height=,0m:width=","%":"Screen"},
m9:{"^":"L;0j:length=","%":"HTMLSelectElement"},
au:{"^":"K;",$isau:1,"%":"SourceBuffer"},
mb:{"^":"dY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isau")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.au]},
$isw:1,
$asw:function(){return[W.au]},
$aso:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"SourceBufferList"},
av:{"^":"h;",$isav:1,"%":"SpeechGrammar"},
mc:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isav")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.av]},
$isw:1,
$asw:function(){return[W.av]},
$aso:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"SpeechGrammarList"},
aw:{"^":"h;0j:length=",$isaw:1,"%":"SpeechRecognitionResult"},
mf:{"^":"jI;",
h:function(a,b){return this.b6(a,H.u(b))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=this.d1(a,z)
if(y==null)return
b.$2(y,this.b6(a,y))}},
gF:function(a){var z=H.p([],[P.e])
this.D(a,new W.ih(z))
return z},
gj:function(a){return a.length},
b6:function(a,b){return a.getItem(b)},
d1:function(a,b){return a.key(b)},
$asT:function(){return[P.e,P.e]},
$isJ:1,
$asJ:function(){return[P.e,P.e]},
"%":"Storage"},
ih:{"^":"l:32;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ax:{"^":"h;",$isax:1,"%":"CSSStyleSheet|StyleSheet"},
ip:{"^":"L;",
L:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=W.fT("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a4(y).I(0,new W.a4(z))
return y},
"%":"HTMLTableElement"},
mi:{"^":"L;",
L:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga5(z)
x.toString
z=new W.a4(x)
w=z.ga5(z)
y.toString
w.toString
new W.a4(y).I(0,new W.a4(w))
return y},
"%":"HTMLTableRowElement"},
mj:{"^":"L;",
L:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.H.L(z.createElement("table"),b,c,d)
z.toString
z=new W.a4(z)
x=z.ga5(z)
y.toString
x.toString
new W.a4(y).I(0,new W.a4(x))
return y},
"%":"HTMLTableSectionElement"},
dA:{"^":"L;",$isdA:1,"%":"HTMLTemplateElement"},
mk:{"^":"h;0m:width=","%":"TextMetrics"},
ay:{"^":"K;",$isay:1,"%":"TextTrack"},
az:{"^":"K;",$isaz:1,"%":"TextTrackCue|VTTCue"},
ml:{"^":"jT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaz")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.az]},
$isw:1,
$asw:function(){return[W.az]},
$aso:function(){return[W.az]},
$isk:1,
$ask:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"TextTrackCueList"},
mm:{"^":"e1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isay")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ay]},
$isw:1,
$asw:function(){return[W.ay]},
$aso:function(){return[W.ay]},
$isk:1,
$ask:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"TextTrackList"},
mo:{"^":"h;0j:length=","%":"TimeRanges"},
aA:{"^":"h;",$isaA:1,"%":"Touch"},
mp:{"^":"jY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaA")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aA]},
$isw:1,
$asw:function(){return[W.aA]},
$aso:function(){return[W.aA]},
$isk:1,
$ask:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"TouchList"},
mq:{"^":"h;0j:length=","%":"TrackDefaultList"},
dG:{"^":"O;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mE:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
bu:{"^":"hq;0n:height=,0m:width=",$isbu:1,"%":"HTMLVideoElement"},
mG:{"^":"K;0j:length=","%":"VideoTrackList"},
mH:{"^":"K;0n:height=,0m:width=","%":"VisualViewport"},
mI:{"^":"h;0m:width=","%":"VTTRegion"},
aN:{"^":"U;",
gdF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.A("deltaY is not supported"))},
$isaN:1,
"%":"WheelEvent"},
iB:{"^":"K;",
gdj:function(a){var z,y,x
z=P.G
y=new P.Q(0,$.D,[z])
x=H.i(new W.iC(new P.jP(y,[z])),{func:1,ret:-1,args:[P.G]})
this.cX(a)
this.d8(a,W.ea(x,z))
return y},
d8:function(a,b){return a.requestAnimationFrame(H.aj(H.i(b,{func:1,ret:-1,args:[P.G]}),1))},
cX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
bg:function(a,b){return a.alert(b)},
$isdI:1,
"%":"DOMWindow|Window"},
iC:{"^":"l:16;a",
$1:function(a){var z=this.a
a=H.be(H.cF(a),{futureOr:1,type:H.m(z,0)})
z=z.a
if(z.a!==0)H.X(P.bt("Future already completed"))
z.a6(a)}},
dL:{"^":"t;",$isdL:1,"%":"Attr"},
mO:{"^":"k3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isao")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ao]},
$isw:1,
$asw:function(){return[W.ao]},
$aso:function(){return[W.ao]},
$isk:1,
$ask:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"CSSRuleList"},
mQ:{"^":"fP;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
E:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isV",[P.G],"$asV"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gA:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mR:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isap")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ap]},
$isw:1,
$asw:function(){return[W.ap]},
$aso:function(){return[W.ap]},
$isk:1,
$ask:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"GamepadList"},
mW:{"^":"k7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$ist")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.t]},
$isw:1,
$asw:function(){return[W.t]},
$aso:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isa:1,
$asa:function(){return[W.t]},
$asq:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mX:{"^":"k9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isaw")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aw]},
$isw:1,
$asw:function(){return[W.aw]},
$aso:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"SpeechRecognitionResultList"},
mY:{"^":"kb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.f(c,"$isax")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ax]},
$isw:1,
$asw:function(){return[W.ax]},
$aso:function(){return[W.ax]},
$isk:1,
$ask:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"StyleSheetList"},
iJ:{"^":"dn;cW:a<",
D:function(a,b){var z,y,x,w,v,u
H.i(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gF(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.a0)(z),++v){u=z[v]
b.$2(u,w.X(x,u))}},
gF:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.p([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.n(z,w)
v=H.f(z[w],"$isdL")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asT:function(){return[P.e,P.e]},
$asJ:function(){return[P.e,P.e]}},
iS:{"^":"iJ;a",
h:function(a,b){return J.ca(this.a,H.u(b))},
gj:function(a){return this.gF(this).length}},
bw:{"^":"ii;a,b,c,$ti"},
bv:{"^":"bw;a,b,c,$ti"},
iU:{"^":"ij;a,b,c,d,e,$ti",
sd2:function(a){this.d=H.i(a,{func:1,args:[W.O]})},
dr:function(a){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.i(y,{func:1,args:[W.O]})
if(x)J.eK(z,this.c,y,!1)}this.b=null
this.sd2(null)
return},
p:{
ah:function(a,b,c,d,e){var z=W.ea(new W.iV(c),W.O)
if(z!=null&&!0)J.eM(a,b,z,!1)
return new W.iU(0,a,b,z,!1,[e])}}},
iV:{"^":"l:17;a",
$1:function(a){return this.a.$1(H.f(a,"$isO"))}},
bx:{"^":"b;a",
cL:function(a){var z,y
z=$.cJ()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.U[y],W.kx())
for(y=0;y<12;++y)z.i(0,C.u[y],W.ky())}},
V:function(a){return $.eH().w(0,W.b_(a))},
O:function(a,b,c){var z,y,x
z=W.b_(a)
y=$.cJ()
x=y.h(0,H.d(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.bY(x.$4(a,b,c,this))},
$isaa:1,
p:{
dP:function(a){var z,y
z=document.createElement("a")
y=new W.jA(z,window.location)
y=new W.bx(y)
y.cL(a)
return y},
mU:[function(a,b,c,d){H.f(a,"$isS")
H.u(b)
H.u(c)
H.f(d,"$isbx")
return!0},"$4","kx",16,0,6],
mV:[function(a,b,c,d){var z,y,x
H.f(a,"$isS")
H.u(b)
H.u(c)
z=H.f(d,"$isbx").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ky",16,0,6]}},
q:{"^":"b;$ti",
gB:function(a){return new W.dd(a,this.gj(a),-1,[H.bf(this,a,"q",0)])}},
ds:{"^":"b;a",
V:function(a){return C.a.bh(this.a,new W.hI(a))},
O:function(a,b,c){return C.a.bh(this.a,new W.hH(a,b,c))},
$isaa:1},
hI:{"^":"l:11;a",
$1:function(a){return H.f(a,"$isaa").V(this.a)}},
hH:{"^":"l:11;a,b,c",
$1:function(a){return H.f(a,"$isaa").O(this.a,this.b,this.c)}},
jB:{"^":"b;",
cM:function(a,b,c,d){var z,y,x
this.a.I(0,c)
z=b.aD(0,new W.jC())
y=b.aD(0,new W.jD())
this.b.I(0,z)
x=this.c
x.I(0,C.W)
x.I(0,y)},
V:function(a){return this.a.w(0,W.b_(a))},
O:["cn",function(a,b,c){var z,y
z=W.b_(a)
y=this.c
if(y.w(0,H.d(z)+"::"+b))return this.d.di(c)
else if(y.w(0,"*::"+b))return this.d.di(c)
else{y=this.b
if(y.w(0,H.d(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.d(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}],
$isaa:1},
jC:{"^":"l:12;",
$1:function(a){return!C.a.w(C.u,H.u(a))}},
jD:{"^":"l:12;",
$1:function(a){return C.a.w(C.u,H.u(a))}},
jQ:{"^":"jB;e,a,b,c,d",
O:function(a,b,c){if(this.cn(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ca(a,"template")==="")return this.e.w(0,b)
return!1},
p:{
e_:function(){var z,y,x,w,v
z=P.e
y=P.cn(C.t,z)
x=H.m(C.t,0)
w=H.i(new W.jR(),{func:1,ret:z,args:[x]})
v=H.p(["TEMPLATE"],[z])
y=new W.jQ(y,P.a1(null,null,null,z),P.a1(null,null,null,z),P.a1(null,null,null,z),null)
y.cM(null,new H.ho(C.t,w,[x,z]),v,null)
return y}}},
jR:{"^":"l:20;",
$1:function(a){return"TEMPLATE::"+H.d(H.u(a))}},
jO:{"^":"b;",
V:function(a){var z=J.C(a)
if(!!z.$isdv)return!1
z=!!z.$isI
if(z&&W.b_(a)==="foreignObject")return!1
if(z)return!0
return!1},
O:function(a,b,c){if(b==="is"||C.h.cf(b,"on"))return!1
return this.V(a)},
$isaa:1},
dd:{"^":"b;a,b,c,0d,$ti",
sb7:function(a){this.d=H.y(a,H.m(this,0))},
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb7(J.bh(this.a,z))
this.c=z
return!0}this.sb7(null)
this.c=y
return!1},
gC:function(a){return this.d},
$isb0:1},
iM:{"^":"b;a",$isK:1,$isdI:1,p:{
iN:function(a){if(a===window)return H.f(a,"$isdI")
else return new W.iM(a)}}},
aa:{"^":"b;"},
jA:{"^":"b;a,b",$ismD:1},
e2:{"^":"b;a",
aM:function(a){new W.k0(this).$2(a,null)},
Z:function(a,b){if(b==null)J.cQ(a)
else J.bD(b,a)},
dc:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f3(a)
x=J.ca(y.gcW(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Y(t)}v="element unprintable"
try{v=J.bi(a)}catch(t){H.Y(t)}try{u=W.b_(a)
this.da(H.f(a,"$isS"),b,z,v,u,H.f(y,"$isJ"),H.u(x))}catch(t){if(H.Y(t) instanceof P.aG)throw t
else{this.Z(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
da:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.Z(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.V(a)){this.Z(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.O(a,"is",g)){this.Z(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gF(f)
y=H.p(z.slice(0),[H.m(z,0)])
for(x=f.gF(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.n(y,x)
v=y[x]
if(!this.a.O(a,J.fg(v),w.X(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.X(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.X(z,v)
w.d4(z,v)}}if(!!J.C(a).$isdA)this.aM(a.content)},
$islU:1},
k0:{"^":"l:33;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dc(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.Z(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f4(z)}catch(w){H.Y(w)
v=H.f(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bD(u,v)}else J.bD(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$ist")}}},
iL:{"^":"h+fF;"},
iO:{"^":"h+o;"},
iP:{"^":"iO+q;"},
iQ:{"^":"h+o;"},
iR:{"^":"iQ+q;"},
iX:{"^":"h+o;"},
iY:{"^":"iX+q;"},
jc:{"^":"h+o;"},
jd:{"^":"jc+q;"},
jk:{"^":"h+T;"},
jl:{"^":"h+T;"},
jm:{"^":"h+o;"},
jn:{"^":"jm+q;"},
jo:{"^":"h+o;"},
jp:{"^":"jo+q;"},
js:{"^":"h+o;"},
jt:{"^":"js+q;"},
jz:{"^":"h+T;"},
dX:{"^":"K+o;"},
dY:{"^":"dX+q;"},
jE:{"^":"h+o;"},
jF:{"^":"jE+q;"},
jI:{"^":"h+T;"},
jS:{"^":"h+o;"},
jT:{"^":"jS+q;"},
e0:{"^":"K+o;"},
e1:{"^":"e0+q;"},
jX:{"^":"h+o;"},
jY:{"^":"jX+q;"},
k2:{"^":"h+o;"},
k3:{"^":"k2+q;"},
k4:{"^":"h+o;"},
k5:{"^":"k4+q;"},
k6:{"^":"h+o;"},
k7:{"^":"k6+q;"},
k8:{"^":"h+o;"},
k9:{"^":"k8+q;"},
ka:{"^":"h+o;"},
kb:{"^":"ka+q;"}}],["","",,P,{"^":"",
a_:function(a){var z,y,x,w,v
if(a==null)return
z=P.a9(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.a0)(y),++w){v=H.u(y[w])
z.i(0,v,a[v])}return z},
ko:function(a,b){var z={}
a.D(0,new P.kp(z))
return z},
d5:function(){var z=$.d4
if(z==null){z=J.c6(window.navigator.userAgent,"Opera",0)
$.d4=z}return z},
fL:function(){var z,y
z=$.d1
if(z!=null)return z
y=$.d2
if(y==null){y=J.c6(window.navigator.userAgent,"Firefox",0)
$.d2=y}if(y)z="-moz-"
else{y=$.d3
if(y==null){y=!P.d5()&&J.c6(window.navigator.userAgent,"Trident/",0)
$.d3=y}if(y)z="-ms-"
else z=P.d5()?"-o-":"-webkit-"}$.d1=z
return z},
jL:{"^":"b;",
bE:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.l(z,a)
C.a.l(this.b,null)
return y},
aC:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.C(a)
if(!!y.$isbj)return new Date(a.a)
if(!!y.$isaf)return a
if(!!y.$iscc)return a
if(!!y.$isdc)return a
if(!!y.$isdf)return a
if(!!y.$isdq||!!y.$iscp)return a
if(!!y.$isJ){x=this.bE(a)
w=this.b
if(x>=w.length)return H.n(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.i(w,x,v)
y.D(a,new P.jN(z,this))
return z.a}if(!!y.$isa){x=this.bE(a)
z=this.b
if(x>=z.length)return H.n(z,x)
v=z[x]
if(v!=null)return v
return this.dA(a,x)}throw H.c(P.cu("structured clone of other type"))},
dA:function(a,b){var z,y,x,w
z=J.aS(a)
y=z.gj(a)
x=new Array(y)
C.a.i(this.b,b,x)
for(w=0;w<y;++w)C.a.i(x,w,this.aC(z.h(a,w)))
return x}},
jN:{"^":"l:3;a,b",
$2:function(a,b){this.a.a[a]=this.b.aC(b)}},
kp:{"^":"l:3;a",
$2:function(a,b){this.a[a]=b}},
jM:{"^":"jL;a,b"}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b4:{"^":"b;W:a>,P:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
E:function(a,b){if(b==null)return!1
return H.ai(b,"$isb4",[P.G],null)&&this.a==J.bH(b)&&this.b==b.gP(b)},
gA:function(a){var z,y,x
z=J.an(this.a)
y=J.an(this.b)
y=P.dQ(P.dQ(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
ju:{"^":"b;"},
V:{"^":"ju;$ti"}}],["","",,P,{"^":"",fq:{"^":"h;",$isfq:1,"%":"SVGAnimatedLength"},lc:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},ld:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},le:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lf:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},lg:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lh:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},li:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lj:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lk:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},ll:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},lm:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},ln:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lo:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lp:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lq:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lr:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lt:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lu:{"^":"bm;0n:height=,0m:width=","%":"SVGForeignObjectElement"},h0:{"^":"bm;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bm:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lB:{"^":"bm;0n:height=,0m:width=","%":"SVGImageElement"},b2:{"^":"h;",$isb2:1,"%":"SVGLength"},lH:{"^":"jf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb2")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b2]},
$isk:1,
$ask:function(){return[P.b2]},
$isa:1,
$asa:function(){return[P.b2]},
$asq:function(){return[P.b2]},
"%":"SVGLengthList"},lI:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b3:{"^":"h;",$isb3:1,"%":"SVGNumber"},lV:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb3")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b3]},
$isk:1,
$ask:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asq:function(){return[P.b3]},
"%":"SVGNumberList"},m_:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},m1:{"^":"h;0j:length=","%":"SVGPointList"},m3:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},m4:{"^":"h0;0n:height=,0m:width=","%":"SVGRectElement"},dv:{"^":"I;",$isdv:1,"%":"SVGScriptElement"},mg:{"^":"jK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.u(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$aso:function(){return[P.e]},
$isk:1,
$ask:function(){return[P.e]},
$isa:1,
$asa:function(){return[P.e]},
$asq:function(){return[P.e]},
"%":"SVGStringList"},I:{"^":"S;",
L:function(a,b,c,d){var z,y,x,w,v,u
z=H.p([],[W.aa])
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
C.a.l(z,new W.jO())
c=new W.e2(new W.ds(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dC(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a4(w)
u=z.ga5(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.G(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mh:{"^":"bm;0n:height=,0m:width=","%":"SVGSVGElement"},b7:{"^":"h;",$isb7:1,"%":"SVGTransform"},mr:{"^":"k_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.N(a,b)},
i:function(a,b,c){H.f(c,"$isb7")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
N:function(a,b){return a.getItem(b)},
$aso:function(){return[P.b7]},
$isk:1,
$ask:function(){return[P.b7]},
$isa:1,
$asa:function(){return[P.b7]},
$asq:function(){return[P.b7]},
"%":"SVGTransformList"},mF:{"^":"bm;0n:height=,0m:width=","%":"SVGUseElement"},je:{"^":"h+o;"},jf:{"^":"je+q;"},jq:{"^":"h+o;"},jr:{"^":"jq+q;"},jJ:{"^":"h+o;"},jK:{"^":"jJ+q;"},jZ:{"^":"h+o;"},k_:{"^":"jZ+q;"}}],["","",,P,{"^":"",ag:{"^":"b;",$isk:1,
$ask:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
$isiu:1}}],["","",,P,{"^":"",kU:{"^":"h;0j:length=","%":"AudioBuffer"},kV:{"^":"iK;",
h:function(a,b){return P.a_(a.get(H.u(b)))},
D:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a_(y.value[1]))}},
gF:function(a){var z=H.p([],[P.e])
this.D(a,new P.fs(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.e,null]},
$isJ:1,
$asJ:function(){return[P.e,null]},
"%":"AudioParamMap"},fs:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},kW:{"^":"K;0j:length=","%":"AudioTrackList"},ft:{"^":"K;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lX:{"^":"ft;0j:length=","%":"OfflineAudioContext"},iK:{"^":"h+T;"}}],["","",,P,{"^":"",fu:{"^":"h;",$isfu:1,"%":"WebGLBuffer"},hX:{"^":"h;",$ishX:1,"%":"WebGLProgram"},m5:{"^":"h;",
bf:function(a,b){return a.activeTexture(b)},
bi:function(a,b,c){return a.attachShader(b,c)},
bj:function(a,b,c){return a.bindBuffer(b,c)},
bl:function(a,b,c){return a.bindTexture(b,c)},
bm:function(a,b){return a.blendEquation(b)},
bn:function(a,b,c){return a.blendFunc(b,c)},
bo:function(a,b,c,d){return a.bufferData(b,c,d)},
bq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
br:function(a,b){return a.compileShader(b)},
bs:function(a){return a.createBuffer()},
bt:function(a){return a.createProgram()},
bu:function(a,b){return a.createShader(b)},
bv:function(a){return a.createTexture()},
bx:function(a,b){return a.depthMask(b)},
by:function(a,b){return a.disable(b)},
bz:function(a,b,c,d){return a.drawArrays(b,c,d)},
bA:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bB:function(a,b){return a.enable(b)},
bC:function(a,b){return a.enableVertexAttribArray(b)},
ae:function(a){return P.a_(a.getContextAttributes())},
aE:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aI:function(a,b){return a.getShaderInfoLog(b)},
aJ:function(a,b,c){return a.getShaderParameter(b,c)},
aK:function(a,b,c){return a.getUniformLocation(b,c)},
bF:function(a,b){return a.linkProgram(b)},
bL:function(a,b,c){return a.pixelStorei(b,c)},
aN:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aB:function(a,b,c,d,e,f,g,h,i,j){this.au(a,b,c,d,e,f,g)
return},
bO:function(a,b,c,d,e,f,g){return this.aB(a,b,c,d,e,f,g,null,null,null)},
au:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bP:function(a,b,c,d){return a.texParameterf(b,c,d)},
bQ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bT:function(a,b,c){return a.uniform1f(b,c)},
bU:function(a,b,c){return a.uniform1fv(b,c)},
bV:function(a,b,c){return a.uniform1i(b,c)},
bW:function(a,b,c){return a.uniform1iv(b,c)},
bX:function(a,b,c){return a.uniform2fv(b,c)},
bY:function(a,b,c){return a.uniform3fv(b,c)},
bZ:function(a,b,c){return a.uniform4fv(b,c)},
c_:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c0:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c1:function(a,b){return a.useProgram(b)},
c2:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c4:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},m6:{"^":"h;",
dl:function(a,b){return a.beginTransformFeedback(b)},
dq:function(a,b){return a.bindVertexArray(b)},
dE:function(a){return a.createVertexArray()},
dG:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dH:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dI:function(a){return a.endTransformFeedback()},
e_:function(a,b,c,d){this.df(a,b,H.x(c,"$isa",[P.e],"$asa"),d)
return},
df:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e0:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bf:function(a,b){return a.activeTexture(b)},
bi:function(a,b,c){return a.attachShader(b,c)},
bj:function(a,b,c){return a.bindBuffer(b,c)},
bl:function(a,b,c){return a.bindTexture(b,c)},
bm:function(a,b){return a.blendEquation(b)},
bn:function(a,b,c){return a.blendFunc(b,c)},
bo:function(a,b,c,d){return a.bufferData(b,c,d)},
bq:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
br:function(a,b){return a.compileShader(b)},
bs:function(a){return a.createBuffer()},
bt:function(a){return a.createProgram()},
bu:function(a,b){return a.createShader(b)},
bv:function(a){return a.createTexture()},
bx:function(a,b){return a.depthMask(b)},
by:function(a,b){return a.disable(b)},
bz:function(a,b,c,d){return a.drawArrays(b,c,d)},
bA:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bB:function(a,b){return a.enable(b)},
bC:function(a,b){return a.enableVertexAttribArray(b)},
ae:function(a){return P.a_(a.getContextAttributes())},
aE:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aI:function(a,b){return a.getShaderInfoLog(b)},
aJ:function(a,b,c){return a.getShaderParameter(b,c)},
aK:function(a,b,c){return a.getUniformLocation(b,c)},
bF:function(a,b){return a.linkProgram(b)},
bL:function(a,b,c){return a.pixelStorei(b,c)},
aN:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aB:function(a,b,c,d,e,f,g,h,i,j){this.au(a,b,c,d,e,f,g)
return},
bO:function(a,b,c,d,e,f,g){return this.aB(a,b,c,d,e,f,g,null,null,null)},
au:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bP:function(a,b,c,d){return a.texParameterf(b,c,d)},
bQ:function(a,b,c,d){return a.texParameteri(b,c,d)},
bT:function(a,b,c){return a.uniform1f(b,c)},
bU:function(a,b,c){return a.uniform1fv(b,c)},
bV:function(a,b,c){return a.uniform1i(b,c)},
bW:function(a,b,c){return a.uniform1iv(b,c)},
bX:function(a,b,c){return a.uniform2fv(b,c)},
bY:function(a,b,c){return a.uniform3fv(b,c)},
bZ:function(a,b,c){return a.uniform4fv(b,c)},
c_:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c0:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c1:function(a,b){return a.useProgram(b)},
c2:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c4:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i7:{"^":"h;",$isi7:1,"%":"WebGLShader"},iq:{"^":"h;",$isiq:1,"%":"WebGLTexture"},iv:{"^":"h;",$isiv:1,"%":"WebGLUniformLocation"},iz:{"^":"h;",$isiz:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",md:{"^":"jH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a_(this.d0(a,b))},
i:function(a,b,c){H.f(c,"$isJ")
throw H.c(P.A("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
d0:function(a,b){return a.item(b)},
$aso:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jG:{"^":"h+o;"},jH:{"^":"jG+q;"}}],["","",,G,{"^":"",
iD:function(a){var z,y,x,w
z=H.p(a.split("\n"),[P.e])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.n(z,y)
C.a.i(z,y,w+H.d(z[y]))}return C.a.a0(z,"\n")},
dM:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bu(a,b)
z.aN(a,y,c)
z.br(a,y)
x=H.bY(z.aJ(a,y,35713))
if(x!=null&&!x){w=z.aI(a,y)
P.ad("E:Compilation failed:")
P.ad("E:"+G.iD(c))
P.ad("E:Failure:")
P.ad(C.h.H("E:",w))
throw H.c(w)}return y},
de:function(a,b){var z,y,x
H.x(a,"$isa",[T.r],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.i.i(b,z,J.bH(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.i(b,z+1,J.c9(a[y]))
z+=2
if(y>=a.length)return H.n(a,y)
x=J.cO(a[y])
if(z>=b.length)return H.n(b,z)
b[z]=x}return b},
fY:function(a,b){var z,y
H.x(a,"$isa",[T.B],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.i.i(b,z,J.bH(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.i(b,z+1,J.c9(a[y]))}return b},
fZ:function(a,b){var z,y,x,w,v
H.x(a,"$isa",[T.aM],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.i.i(b,z,J.bH(a[y]))
if(y>=a.length)return H.n(a,y)
C.i.i(b,z+1,J.c9(a[y]))
x=z+2
if(y>=a.length)return H.n(a,y)
w=J.cO(a[y])
v=b.length
if(x>=v)return H.n(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.n(a,y)
w=J.f6(a[y])
if(z>=v)return H.n(b,z)
b[z]=w}return b},
fX:function(a,b){var z,y
H.x(a,"$isa",[[P.a,P.F]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.bh(a[y],0))
if(y>=a.length)return H.n(a,y)
C.m.i(b,z+1,J.bh(a[y],1))
if(y>=a.length)return H.n(a,y)
C.m.i(b,z+2,J.bh(a[y],2))
if(y>=a.length)return H.n(a,y)
C.m.i(b,z+3,J.bh(a[y],3))}return b},
ja:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.aq(z,[H.m(z,0)]),y=y.gB(y),x=b.x,w=[[P.a,P.F]],v=[P.ak],u=[T.aM],t=[T.r],s=[T.B];y.u();){r=y.d
if(!x.ab(0,r)){r="Dropping unnecessary attribute: "+H.d(r)
if($.ef>0)H.c4("I: "+r)
continue}q=z.h(0,r)
switch($.a5().h(0,r).a){case"vec2":b.Y(r,G.fY(H.bC(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.Y(r,G.de(H.bC(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.Y(r,G.fZ(H.bC(q,"$isa",u,"$asa"),null),4)
break
case"float":b.Y(r,new Float32Array(H.bV(H.bC(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.Y(r,G.fX(H.bC(q,"$isa",w,"$asa"),null),4)
break}}},
bO:{"^":"b;"},
bS:{"^":"bO;",
aV:function(){return this.d},
k:function(a){var z,y,x,w
z=H.p(["{"+new H.dF(H.ku(this)).k(0)+"}["+this.a+"]"],[P.e])
for(y=this.d,x=new H.aq(y,[H.m(y,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(z,H.d(w)+": "+H.d(y.h(0,w)))}return C.a.a0(z,"\n")}},
fv:{"^":"ic;"},
fx:{"^":"b;0a,b",
bD:function(a,b,c){J.f0(this.a,b)
if(c>0)J.fm(this.a,b,c)},
c3:function(a,b,c,d,e,f,g,h){J.c5(this.a,34962,b)
J.fn(this.a,c,d,e,!1,g,h)}},
fW:{"^":"b;"},
db:{"^":"b;a,b,c,d"},
h_:{"^":"b;a,b,c,d,e",
aT:function(a){switch($.a5().h(0,a).a){case"vec2":this.e.i(0,a,H.p([],[T.B]))
break
case"vec3":this.e.i(0,a,H.p([],[T.r]))
break
case"vec4":this.e.i(0,a,H.p([],[T.aM]))
break
case"float":this.e.i(0,a,H.p([],[P.ak]))
break
case"uvec4":this.e.i(0,a,H.p([],[[P.a,P.F]]))
break}},
cs:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)C.a.l(y,new G.db(z,z+1,z+2,z+3))},
ct:function(a){var z,y,x,w
H.x(a,"$isa",[T.r],"$asa")
for(z=this.d,y=0;y<24;++y){x=a[y]
w=new T.r(new Float32Array(3))
w.S(x)
C.a.l(z,w)}},
cq:function(a,b){var z,y,x,w,v,u
z=[T.B]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<24;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.l(y,new T.B(v))}},
cr:function(a,b){var z,y,x,w,v
z=[T.r]
H.x(b,"$isa",z,"$asa")
y=H.x(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.r(new Float32Array(3))
v.S(w)
z.l(y,v)}},
cz:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.p(y,[P.F])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.n(y,v)
u=y[v]
C.a.i(x,w,u.ge3(u))
C.a.i(x,w+1,u.ge4(u))
C.a.i(x,w+2,u.ge5(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.a0)(z),++v){t=z[v]
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
z=H.p(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.e])
for(y=this.e,x=new H.aq(y,[H.m(y,0)]),x=x.gB(x);x.u();){w=x.d
v=$.a5().h(0,w).a
C.a.l(z,H.d(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.a0(z," ")}},
dD:{"^":"b;a,b,c"},
dC:{"^":"b;a,b,c"},
hp:{"^":"bS;d,a,b,c"},
hr:{"^":"bO;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sao:function(a){this.cx=H.x(a,"$isa",[P.F],"$asa")},
aS:function(a,b,c){var z,y
C.h.aj(a,0)
H.f(b,"$isag")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.c5(z.a,34962,y)
J.cN(z.a,34962,b,35048)},
cA:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
Y:function(a,b,c){var z,y,x,w,v
z=J.cK(a,0)===105
if(z&&this.z===0)this.z=C.e.co(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.c7(x.a))
this.aS(a,b,c)
w=$.a5().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bE(x.a,this.e)
x.bD(0,v,z?1:0)
x.c3(0,y.h(0,a),v,w.aU(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.p(["Faces:"+(z==null?0:z.length)],[P.e])
for(z=this.cy,x=new H.aq(z,[H.m(z,0)]),x=x.gB(x);x.u();){w=x.d
C.a.l(y,H.d(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.a0(y,"  ")}},
hM:{"^":"bS;",
cu:function(a,b){var z
if(typeof a!=="number")return a.e1()
if(typeof b!=="number")return H.aD(b)
z=a/b
if(this.z===z)return
this.z=z
this.aY()},
aY:function(){var z,y,x,w,v,u
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
aV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.r(new Float32Array(3))
u.q(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.S(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.C(t)
y=!!z.$isaM
q=y?t.gc5(t):1
if(!!z.$isr){p=t.gW(t)
s=t.gP(t)
r=t.gad(t)
t=p}else if(y){p=t.gW(t)
s=t.gP(t)
r=t.gad(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.aD(t)
y=u[4]
if(typeof s!=="number")return H.aD(s)
x=u[8]
if(typeof r!=="number")return H.aD(r)
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
d.S(this.db)
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
la:{"^":"b;"},
i0:{"^":"bO;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cD:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.a0)(z),++u){t=z[u]
x.i(0,t,J.cP(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a0)(z),++u){t=z[u]
x.i(0,t,J.cP(w.a,v,t))}},
cG:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.p([],[P.e])
x=H.p([],[P.e])
for(y=new H.aq(y,[H.m(y,0)]),y=y.gB(y);y.u();){w=y.d
if(!z.ab(0,w))C.a.l(x,w)}for(z=this.x,z=P.jh(z,z.r,H.m(z,0)),y=this.Q;z.u();){w=z.d
if(!y.w(0,w))C.a.l(x,w)}return x},
cJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(b,"$isJ",[P.e,P.b],"$asJ")
z=Date.now()
for(y=new H.aq(b,[H.m(b,0)]),y=y.gB(y),x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cK(t,0)){case 117:if(w.ab(0,t)){s=b.h(0,t)
if(v.ab(0,t))H.c4("E:"+(t+" : group ["+a+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.a5().h(0,t)
if(r==null)H.X("unknown "+t)
q=w.h(0,t)
t=r.a
switch(t){case"int":if(r.c===0){H.M(s)
J.cb(x.a,q,s)}else if(!!J.C(s).$ish5)J.fk(x.a,q,s)
break
case"float":if(r.c===0){H.ee(s)
J.fi(x.a,q,s)}else if(!!J.C(s).$isag)J.fj(x.a,q,s)
break
case"mat4":if(r.c===0){t=H.am(s,"$isaI").a
J.cV(x.a,q,!1,t)}else if(!!J.C(s).$isag)J.cV(x.a,q,!1,s)
break
case"mat3":if(r.c===0){t=C.M.ge2(H.am(s,"$islJ"))
J.cU(x.a,q,!1,t)}else if(!!J.C(s).$isag)J.cU(x.a,q,!1,s)
break
case"vec4":t=r.c
p=x.a
if(t===0)J.cT(p,q,H.am(s,"$isaM").a)
else J.cT(p,q,H.f(s,"$isag"))
break
case"vec3":t=r.c
p=x.a
if(t===0)J.cS(p,q,H.am(s,"$isr").a)
else J.cS(p,q,H.f(s,"$isag"))
break
case"vec2":t=r.c
p=x.a
if(t===0)J.cR(p,q,H.am(s,"$isB").a)
else J.cR(p,q,H.f(s,"$isag"))
break
case"sampler2D":case"sampler2DShadow":t=this.ch
if(typeof t!=="number")return H.aD(t)
J.cL(x.a,33984+t)
t=H.am(s,"$isct").b
J.aW(x.a,3553,t)
t=this.ch
J.cb(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.H()
this.ch=t+1
break
case"samplerCube":t=this.ch
if(typeof t!=="number")return H.aD(t)
J.cL(x.a,33984+t)
t=H.am(s,"$isct").b
J.aW(x.a,34067,t)
t=this.ch
J.cb(x.a,q,t)
t=this.ch
if(typeof t!=="number")return t.H()
this.ch=t+1
break
default:H.c4("Error: unknow uniform type: "+t)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":t=J.aF(s,!0)
p=x.a
if(t)J.bF(p,2929)
else J.c8(p,2929)
break
case"cStencilFunc":H.am(s,"$isdD")
t=s.a
p=x.a
if(t===1281)J.c8(p,2960)
else{J.bF(p,2960)
p=s.b
o=s.c
J.fd(x.a,t,p,o)}break
case"cDepthWrite":H.bY(s)
J.eV(x.a,s)
break
case"cBlendEquation":H.am(s,"$isdC")
t=s.a
p=x.a
if(t===1281)J.c8(p,3042)
else{J.bF(p,3042)
p=s.b
o=s.c
J.eP(x.a,p,o)
J.eO(x.a,t)}break}++u
break}}n=P.fQ(0,0,0,Date.now()-new P.bj(z,!1).a,0,0)
""+u
n.k(0)},
cw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.x(b,"$isa",[G.bS],"$asa")
Date.now()
z=this.d
J.fl(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b8()}for(x=0;x<2;++x){w=b[x]
this.cJ(w.a,w.aV())}y=this.Q
y.a_(0)
for(v=a.cy,v=new H.aq(v,[H.m(v,0)]),v=v.gB(v);v.u();)y.l(0,v.d)
u=this.cG()
if(u.length!==0)P.ad("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(u)))
J.bE(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cA()
s=a.Q
r=a.z
if(t)J.eN(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eZ(q,y,v,s,0,r)
else J.eY(q,y,v,s,0)}else{s=z.a
if(r>1)J.eX(s,y,0,v,r)
else J.eW(s,y,0,v)}if(t)J.f1(z.a)},
cv:function(a,b){return this.cw(a,b,null)},
p:{
i1:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.e
y=P.a1(null,null,null,z)
x=c.b
w=d.b
v=H.x(c.f,"$isa",[z],"$asa")
u=J.eS(b.a)
t=G.dM(b.a,35633,x)
J.cM(b.a,u,t)
s=G.dM(b.a,35632,w)
J.cM(b.a,u,s)
if(v.length>0)J.fh(b.a,u,v,35980)
J.fb(b.a,u)
if(!H.bY(J.fa(b.a,u,35714)))H.X(J.f9(b.a,u))
z=new G.i0(b,c,d,u,P.cn(c.c,z),P.a9(z,P.b),P.a9(z,z),y,a,!1,!0)
z.cD(a,b,c,d)
return z}}},
E:{"^":"b;a,b,c",
aU:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i8:{"^":"b;a,0b,c,d,e,f,r,x",
cp:function(a){var z,y,x,w
H.x(a,"$isa",[P.e],"$asa")
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
C.a.l(z,w)
y.i(0,w,this.r);++this.r}C.a.af(z)},
aQ:function(a){var z,y
H.x(a,"$isa",[P.e],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.l(z,a[y])
C.a.af(z)},
aR:function(a){var z,y
H.x(a,"$isa",[P.e],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.af(z)},
cE:function(a,b){this.b=this.cK(!0,H.x(a,"$isa",[P.e],"$asa"),b)},
aW:function(a){return this.cE(a,null)},
cK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.e]
H.x(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.p(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.a0)(y),++u){t=y[u]
s=$.a5().h(0,t)
C.a.l(w,"layout (location="+H.d(v.h(0,t))+") in "+s.a+" "+H.d(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.a0)(z),++u){q=z[u]
s=$.a5().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.a0)(z),++u){q=z[u]
s=$.a5().h(0,q)
C.a.l(w,r+" "+s.a+" "+H.d(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a0)(z),++u){q=z[u]
s=$.a5().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.d(q)+p+";")}C.a.l(w,"")
C.a.l(w,"void main(void) {")
C.a.I(w,b)
C.a.l(w,"}")
return C.a.a0(w,"\n")},
p:{
dw:function(a){var z,y
z=P.e
y=[z]
return new G.i8(a,H.p([],y),H.p([],y),H.p([],y),H.p([],y),0,P.a9(z,P.F))}}},
ic:{"^":"bO;"},
dB:{"^":"b;a,b,c,d,e,f,r",p:{
ir:function(){return new G.dB(!1,!1,!1,!0,1,9729,9729)}}},
ct:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
h3:{"^":"ct;f,a,b,c,d,e",
aX:function(a){var z,y
z=this.d
y=this.c
J.aW(z.a,y,this.b)
J.fe(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
jj:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iT("span",null),"$isS")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).ai(y,"float")
y.setProperty(x,"left","")
x=C.x.ai(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.G(z,v)}return z},
hN:{"^":"hM;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dT:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.ad("size change "+H.d(y)+" "+H.d(x))
this.cu(y,x)
J.fo(this.go.a,0,0,y,x)},"$1","gdS",4,0,13]},
ie:{"^":"b;",
cF:function(a,b,c){var z,y
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
y=J.j(z)
y.G(z,this.b)
y.G(z,this.d)
y.G(z,this.c)}},
ig:{"^":"ie;e,f,a,b,c,d",
cI:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.dZ(y,2)+" fps"
C.p.cc(this.c,b)
x=C.e.U(30*C.y.dt(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isS")
v=w.style
u=""+x+"px"
v.height=u
C.p.G(z,w)},
cH:function(a){return this.cI(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
fH:function(a5,a6,a7,a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
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
a0=H.p([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a],t)
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
a1=H.p([z,y,x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b],[T.B])
a2=new G.h_(!1,H.p([],[G.fW]),H.p([],[G.db]),H.p([],t),P.a9(P.e,[P.a,,]))
a2.aT("aTexUV")
a2.aT("aNormal")
a2.cs(6)
a2.ct(a0)
a2.cq("aTexUV",a1)
for(a3=0;z=$.eG(),a3<6;++a3){a4=z[a3]
a2.cr("aNormal",H.p([a4,a4,a4,a4],t))}return a2}}],["","",,D,{"^":"",
hj:function(){var z,y,x
z=W.bu
y=new P.Q(0,$.D,[z])
x=new P.dK(y,[z])
z=window.navigator;(z&&C.X).c9(z,!0).a1(new D.hl(x),null).bp(new D.hm(x))
return y},
hb:{"^":"b;a,b,c",
cB:function(a){var z,y
a=document
z=W.b1
y={func:1,ret:-1,args:[z]}
W.ah(a,"keydown",H.i(new D.hd(this),y),!1,z)
W.ah(a,"keyup",H.i(new D.he(this),y),!1,z)},
p:{
hc:function(a){var z=P.F
z=new D.hb(P.a1(null,null,null,z),P.a1(null,null,null,z),P.a1(null,null,null,z))
z.cB(a)
return z}}},
hd:{"^":"l:14;a",
$1:function(a){var z
H.f(a,"$isb1")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
he:{"^":"l:14;a",
$1:function(a){var z
H.f(a,"$isb1")
z=this.a
z.a.bM(0,a.which)
z.c.l(0,a.which)}},
hu:{"^":"b;a,b,c,d,e,f,r,x",
cC:function(a){var z,y,x
if(a==null)a=document
z=J.j(a)
y=z.gbI(a)
x=H.m(y,0)
W.ah(y.a,y.b,H.i(new D.hw(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbH(a)
y=H.m(x,0)
W.ah(x.a,x.b,H.i(new D.hx(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbJ(a)
x=H.m(y,0)
W.ah(y.a,y.b,H.i(new D.hy(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbK(a)
x=H.m(z,0)
W.ah(z.a,z.b,H.i(new D.hz(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hv:function(a){var z=P.F
z=new D.hu(P.a1(null,null,null,z),P.a1(null,null,null,z),P.a1(null,null,null,z),0,0,0,0,0)
z.cC(a)
return z}}},
hw:{"^":"l:4;a",
$1:function(a){var z,y
H.f(a,"$isU")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.M(y.gbG(a).a)
z.x=H.M(y.gbG(a).b)
z.d=a.movementX
z.e=a.movementY}},
hx:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isU")
a.preventDefault()
P.ad("BUTTON "+H.d(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hy:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isU")
a.preventDefault()
z=this.a
z.a.bM(0,a.button)
z.c.l(0,a.button)}},
hz:{"^":"l:25;a",
$1:function(a){H.f(a,"$isaN")
a.preventDefault()
this.a.f=H.M(C.ae.gdF(a))}},
hK:{"^":"fv;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"},
hl:{"^":"l:10;a",
$1:function(a){var z,y
H.f(a,"$isaJ")
z=document.createElement("video")
z.autoplay=!0
y=new W.bv(z,"playing",!1,[W.O])
y.gdJ(y).a1(new D.hk(this.a,z),-1)
z.srcObject=a}},
hk:{"^":"l:13;a,b",
$1:function(a){H.f(a,"$isO")
return this.a.av(0,this.b)}},
hm:{"^":"l:26;a",
$1:function(a){P.ad("E:"+("Camera open error "+H.d(a)))
this.a.av(0,null)}}}],["","",,A,{"^":"",
c1:function(a){var z,y
z=C.i.dK(H.x(a,"$isk",[P.b],"$ask"),0,new A.kw(),P.F)
if(typeof z!=="number")return H.aD(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kw:{"^":"l:27;",
$2:function(a,b){var z,y
H.M(a)
z=J.an(b)
if(typeof a!=="number")return a.H()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aI:{"^":"b;a",
S:function(a){var z,y
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
k:function(a){return"[0] "+this.a2(0).k(0)+"\n[1] "+this.a2(1).k(0)+"\n[2] "+this.a2(2).k(0)+"\n[3] "+this.a2(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.n(z,b)
return z[b]},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aI){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
a2:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.n(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.n(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.n(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.n(y,x)
z[3]=y[x]
return new T.aM(z)},
a4:function(){var z=this.a
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
z[15]=1}},B:{"^":"b;a",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.B){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.n(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gW:function(a){return this.a[0]},
gP:function(a){return this.a[1]}},r:{"^":"b;a",
q:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
S:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.n(z,b)
return z[b]},
gj:function(a){return Math.sqrt(this.gay())},
gay:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
az:function(a){var z,y,x
z=Math.sqrt(this.gay())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aw:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bw:function(a){var z,y,x,w,v,u,t,s
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
gW:function(a){return this.a[0]},
gP:function(a){return this.a[1]},
gad:function(a){return this.a[2]},
p:{
aL:function(a,b,c){var z=new T.r(new Float32Array(3))
z.q(a,b,c)
return z}}},aM:{"^":"b;a",
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
E:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aM){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.c1(this.a)},
h:function(a,b){var z=this.a
if(b>=4)return H.n(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gW:function(a){return this.a[0]},
gP:function(a){return this.a[1]},
gad:function(a){return this.a[2]},
gc5:function(a){return this.a[3]}}}],["","",,U,{"^":"",
n4:[function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
H.f(a,"$isbu")
if(a==null){C.w.bg(window,"Could not access camera - do you have a camera installed?")
return}y=document
x=C.q.c8(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.ig(0,0,x,w,y.createElement("div"),R.jj("blue","gray",90,30))
u.cF(x,"blue","gray")
t=H.f(C.q.dQ(y,"#webgl-canvas"),"$iscf")
s=new G.fx(t)
y=P.e
x=P.b
v=(t&&C.I).c7(t,"webgl2",P.cm(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.X(P.da('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.d(J.f7(v))
if($.ef>0)P.ad("I: "+r)
J.eQ(v,0,0,0,1)
J.bF(v,2929)
v=new Float32Array(3)
r=D.hc(null)
q=D.hv(t)
p=new T.aI(new Float32Array(16))
p.a4()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hK(15,10,0,0,new T.r(v),-0.02,r,q,p,new T.r(o),new T.r(n),new T.r(m),new T.r(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.aI(new Float32Array(16))
v.a4()
r=new T.aI(new Float32Array(16))
r.a4()
k=new R.hN(t,s,l,50,1,0.1,1000,v,r,new T.aI(new Float32Array(16)),P.a9(y,x),"perspective",!1,!0)
k.aY()
k.dT(null)
v=W.O
W.ah(window,"resize",H.i(k.gdS(),{func:1,ret:-1,args:[v]}),!1,v)
j=G.i1("solid",s,$.eJ(),$.eI())
i=B.fH(!0,1,0,1,0,1,1,1)
v=j.d
r=j.e.x
q=P.a9(y,x)
p=J.eU(v.a)
h=new G.hr(v,p,4,q,r,0,-1,P.a9(y,P.ag),"meshdata:cube",!1,!0)
o=G.de(i.d,null)
q.i(0,"aPosition",J.c7(v.a))
h.ch=o
h.aS("aPosition",o,3)
g=$.a5().h(0,"aPosition")
if(g==null)H.X("Unknown canonical aPosition")
f=r.h(0,"aPosition")
J.bE(v.a,p)
v.bD(0,f,0)
v.c3(0,q.h(0,"aPosition"),f,g.aU(),5126,!1,0,0)
r=H.x(i.cz(),"$isa",[P.F],"$asa")
h.y=J.c7(v.a)
q=h.ch.length
if(q<768){h.sao(new Uint8Array(H.bV(r)))
h.Q=5121}else if(q<196608){h.sao(new Uint16Array(H.bV(r)))
h.Q=5123}else{h.sao(new Uint32Array(H.bV(r)))
h.Q=5125}J.bE(v.a,p)
r=h.y
q=h.cx
J.c5(v.a,34963,r)
J.cN(v.a,34963,q,35048)
G.ja(i,h)
v=$.ev()
if(v==null)v=new G.dB(!1,!1,!1,!0,1,9729,9729)
r=J.eT(s.a)
e=new G.h3(a,"video",r,3553,s,v)
J.aW(s.a,3553,r)
J.fc(s.a,37440,1)
e.aX(a)
r=v.e
if(r!==1)J.ff(s.a,3553,34046,r)
J.bI(s.a,3553,10240,v.r)
J.bI(s.a,3553,10241,v.f)
if(v.b){J.bI(s.a,3553,10242,33071)
J.bI(s.a,3553,10243,33071)}J.f8(s.a)
J.aW(s.a,3553,null)
y=P.a9(y,x)
y.i(0,"cDepthTest",!0)
y.i(0,"cDepthWrite",!0)
y.i(0,"cBlendEquation",$.eq())
y.i(0,"cStencilFunc",$.eu())
y.i(0,"uColor",$.er())
x=new T.aI(new Float32Array(16))
x.a4()
y.i(0,"uModelMatrix",x)
y.i(0,"uTexture",e)
z.a=0
new U.kJ(z,l,e,j,h,k,new G.hp(y,"cube",!1,!0),u).$1(0)},"$1","kn",4,0,21],
el:function(){D.hj().a1(U.kn(),-1).bp(new U.kK())},
kJ:{"^":"l:28;a,b,c,d,e,f,r,x",
$1:function(b4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
H.cF(b4)
if(typeof b4!=="number")return b4.aP()
y=this.a
y.a=b4+0
x=this.b
x.go+=0.001
w=x.r1
v=w.a
if(v.w(0,0)||v.w(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.aL()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.aL()
x.id=u+v*0.01}v=x.k4
u=v.a
if(u.w(0,37))x.go+=0.03
else if(u.w(0,39))x.go-=0.03
if(u.w(0,38))x.id+=0.03
else if(u.w(0,40))x.id-=0.03
if(u.w(0,33))x.fy*=0.99
else if(u.w(0,34))x.fy*=1.01
if(u.w(0,32)){x.go=0
x.id=0}u=w.f
if(typeof u!=="number")return u.aL()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.r.du(x.id,-1.4707963267948965,1.4707963267948965)
x.id=u
t=x.fy
s=x.go
r=t*Math.cos(u)
q=Math.cos(s)
u=Math.sin(u)
s=Math.sin(s)
p=x.d.a
p[12]=r*q
p[13]=t*u
p[14]=r*s
s=x.k2.a
p[12]=p[12]+s[0]
p[13]=p[13]+s[1]
p[14]=p[14]+s[2]
o=p[12]
n=p[13]
m=p[14]
l=new T.r(new Float32Array(3))
l.q(0,1,0)
u=x.e
t=u.a
t[0]=p[12]
t[1]=p[13]
t[2]=p[14]
t=new Float32Array(3)
k=new T.r(t)
k.S(u)
t[0]=t[0]-s[0]
t[1]=t[1]-s[1]
t[2]=t[2]-s[2]
k.az(0)
j=l.bw(k)
j.az(0)
i=k.bw(j)
i.az(0)
s=j.aw(u)
q=i.aw(u)
u=k.aw(u)
h=j.a
g=h[0]
f=i.a
e=f[0]
d=t[0]
c=h[1]
b=f[1]
a=t[1]
h=h[2]
f=f[2]
t=t[2]
p[15]=1
p[14]=-u
p[13]=-q
p[12]=-s
p[11]=0
p[10]=t
p[9]=f
p[8]=h
p[7]=0
p[6]=a
p[5]=b
p[4]=c
p[3]=0
p[2]=d
p[1]=e
p[0]=g
p[12]=o
p[13]=n
p[14]=m
g=x.f
e=g.a
e[0]=p[2]
e[1]=p[6]
e[2]=p[10]
x=-x.k1
a0=Math.sqrt(g.gay())
o=e[0]/a0
n=e[1]/a0
m=e[2]/a0
a1=Math.cos(x)
a2=Math.sin(x)
a3=1-a1
a4=o*o*a3+a1
x=m*a2
a5=o*n*a3-x
e=n*a2
a6=o*m*a3+e
a7=n*o*a3+x
a8=n*n*a3+a1
x=o*a2
a9=n*m*a3-x
b0=m*o*a3-e
b1=m*n*a3+x
b2=m*m*a3+a1
x=p[0]
e=p[4]
g=p[8]
d=p[1]
c=p[5]
b=p[9]
a=p[2]
h=p[6]
f=p[10]
t=p[3]
s=p[7]
q=p[11]
p[0]=x*a4+e*a7+g*b0
p[1]=d*a4+c*a7+b*b0
p[2]=a*a4+h*a7+f*b0
p[3]=t*a4+s*a7+q*b0
p[4]=x*a5+e*a8+g*b1
p[5]=d*a5+c*a8+b*b1
p[6]=a*a5+h*a8+f*b1
p[7]=t*a5+s*a8+q*b1
p[8]=x*a6+e*a9+g*b2
p[9]=d*a6+c*a9+b*b2
p[10]=a*a6+h*a9+f*b2
p[11]=t*a6+s*a9+q*b2
v.c.a_(0)
v.b.a_(0)
w.e=0
w.d=0
w.f=0
w.c.a_(0)
w.b.a_(0)
try{x=this.c
x.aX(x.f)
J.aW(x.d.a,x.c,null)}catch(b3){z=H.Y(b3)
P.ad(z)}this.d.cv(this.e,H.p([this.f,this.r],[G.bS]))
this.x.cH(y.a)
C.w.gdj(window).a1(this,-1)}},
kK:{"^":"l:29;",
$1:function(a){H.f(a,"$isP")
C.w.bg(window,"Camera error "+H.d(a)+": - do you have a camera installed?")}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.di.prototype
return J.dh.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dj.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.aS=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.eg=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.ks=function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.kt=function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.eh=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.c_=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b8.prototype
return a}
J.aF=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).E(a,b)}
J.a6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ks(a).R(a,b)}
J.bh=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kG(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aS(a).h(a,b)}
J.cK=function(a,b){return J.eh(a).aj(a,b)}
J.bD=function(a,b){return J.j(a).d5(a,b)}
J.eK=function(a,b,c,d){return J.j(a).d6(a,b,c,d)}
J.eL=function(a,b,c){return J.j(a).d7(a,b,c)}
J.cL=function(a,b){return J.j(a).bf(a,b)}
J.eM=function(a,b,c,d){return J.j(a).dg(a,b,c,d)}
J.cM=function(a,b,c){return J.j(a).bi(a,b,c)}
J.eN=function(a,b){return J.j(a).dl(a,b)}
J.c5=function(a,b,c){return J.j(a).bj(a,b,c)}
J.aW=function(a,b,c){return J.j(a).bl(a,b,c)}
J.bE=function(a,b){return J.j(a).dq(a,b)}
J.eO=function(a,b){return J.j(a).bm(a,b)}
J.eP=function(a,b,c){return J.j(a).bn(a,b,c)}
J.cN=function(a,b,c,d){return J.j(a).bo(a,b,c,d)}
J.eQ=function(a,b,c,d,e){return J.j(a).bq(a,b,c,d,e)}
J.eR=function(a,b){return J.kt(a).K(a,b)}
J.c6=function(a,b,c){return J.aS(a).dz(a,b,c)}
J.c7=function(a){return J.j(a).bs(a)}
J.eS=function(a){return J.j(a).bt(a)}
J.eT=function(a){return J.j(a).bv(a)}
J.eU=function(a){return J.j(a).dE(a)}
J.eV=function(a,b){return J.j(a).bx(a,b)}
J.c8=function(a,b){return J.j(a).by(a,b)}
J.eW=function(a,b,c,d){return J.j(a).bz(a,b,c,d)}
J.eX=function(a,b,c,d,e){return J.j(a).dG(a,b,c,d,e)}
J.eY=function(a,b,c,d,e){return J.j(a).bA(a,b,c,d,e)}
J.eZ=function(a,b,c,d,e,f){return J.j(a).dH(a,b,c,d,e,f)}
J.f_=function(a,b){return J.eg(a).t(a,b)}
J.bF=function(a,b){return J.j(a).bB(a,b)}
J.f0=function(a,b){return J.j(a).bC(a,b)}
J.f1=function(a){return J.j(a).dI(a)}
J.f2=function(a,b){return J.j(a).D(a,b)}
J.f3=function(a){return J.j(a).gdk(a)}
J.an=function(a){return J.C(a).gA(a)}
J.bG=function(a){return J.eg(a).gB(a)}
J.aX=function(a){return J.aS(a).gj(a)}
J.f4=function(a){return J.j(a).gdP(a)}
J.f5=function(a){return J.j(a).gdX(a)}
J.f6=function(a){return J.c_(a).gc5(a)}
J.bH=function(a){return J.c_(a).gW(a)}
J.c9=function(a){return J.c_(a).gP(a)}
J.cO=function(a){return J.c_(a).gad(a)}
J.ca=function(a,b){return J.j(a).X(a,b)}
J.f7=function(a){return J.j(a).ae(a)}
J.f8=function(a){return J.j(a).aE(a)}
J.f9=function(a,b){return J.j(a).aF(a,b)}
J.fa=function(a,b,c){return J.j(a).aG(a,b,c)}
J.cP=function(a,b,c){return J.j(a).aK(a,b,c)}
J.fb=function(a,b){return J.j(a).bF(a,b)}
J.fc=function(a,b,c){return J.j(a).bL(a,b,c)}
J.cQ=function(a){return J.j(a).dR(a)}
J.fd=function(a,b,c,d){return J.j(a).aO(a,b,c,d)}
J.fe=function(a,b,c,d,e,f,g){return J.j(a).bO(a,b,c,d,e,f,g)}
J.ff=function(a,b,c,d){return J.j(a).bP(a,b,c,d)}
J.bI=function(a,b,c,d){return J.j(a).bQ(a,b,c,d)}
J.fg=function(a){return J.eh(a).dY(a)}
J.bi=function(a){return J.C(a).k(a)}
J.fh=function(a,b,c,d){return J.j(a).e_(a,b,c,d)}
J.fi=function(a,b,c){return J.j(a).bT(a,b,c)}
J.fj=function(a,b,c){return J.j(a).bU(a,b,c)}
J.cb=function(a,b,c){return J.j(a).bV(a,b,c)}
J.fk=function(a,b,c){return J.j(a).bW(a,b,c)}
J.cR=function(a,b,c){return J.j(a).bX(a,b,c)}
J.cS=function(a,b,c){return J.j(a).bY(a,b,c)}
J.cT=function(a,b,c){return J.j(a).bZ(a,b,c)}
J.cU=function(a,b,c,d){return J.j(a).c_(a,b,c,d)}
J.cV=function(a,b,c,d){return J.j(a).c0(a,b,c,d)}
J.fl=function(a,b){return J.j(a).c1(a,b)}
J.fm=function(a,b,c){return J.j(a).e0(a,b,c)}
J.fn=function(a,b,c,d,e,f,g){return J.j(a).c2(a,b,c,d,e,f,g)}
J.fo=function(a,b,c,d,e){return J.j(a).c4(a,b,c,d,e)}
I.aU=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bJ.prototype
C.I=W.cf.prototype
C.x=W.fE.prototype
C.p=W.fM.prototype
C.J=W.fO.prototype
C.K=W.h1.prototype
C.q=W.h2.prototype
C.L=J.h.prototype
C.a=J.bn.prototype
C.y=J.dh.prototype
C.e=J.di.prototype
C.M=J.dj.prototype
C.r=J.bo.prototype
C.h=J.bp.prototype
C.T=J.bq.prototype
C.i=H.hA.prototype
C.m=H.hB.prototype
C.X=W.hC.prototype
C.Y=W.hG.prototype
C.B=J.hO.prototype
C.C=W.hY.prototype
C.H=W.ip.prototype
C.v=J.b8.prototype
C.ae=W.aN.prototype
C.w=W.iB.prototype
C.d=new P.jv()
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.U=H.p(I.aU(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.V=H.p(I.aU(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.W=H.p(I.aU([]),[P.e])
C.t=H.p(I.aU(["bind","if","ref","repeat","syntax"]),[P.e])
C.u=H.p(I.aU(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.Z=new G.E("vec3","vertex btangents",0)
C.c=new G.E("vec3","",0)
C.a_=new G.E("vec4","delta from light",0)
C.n=new G.E("","",0)
C.D=new G.E("vec3","vertex coordinates",0)
C.a0=new G.E("vec3","vertex binormals",0)
C.E=new G.E("vec4","for wireframe",0)
C.a1=new G.E("vec4","per vertex color",0)
C.a2=new G.E("float","for normal maps",0)
C.j=new G.E("mat4","",0)
C.a4=new G.E("mat4","",4)
C.a3=new G.E("mat4","",128)
C.b=new G.E("float","",0)
C.a5=new G.E("float","",4)
C.a6=new G.E("float","depth for shadowmaps",0)
C.f=new G.E("sampler2D","",0)
C.a7=new G.E("float","for bump maps",0)
C.a8=new G.E("vec2","texture uvs",0)
C.a9=new G.E("float","time since program start in sec",0)
C.k=new G.E("vec2","",0)
C.aa=new G.E("samplerCube","",0)
C.l=new G.E("vec4","",0)
C.ab=new G.E("vec3","vertex normals",0)
C.ac=new G.E("sampler2DShadow","",0)
C.F=new G.E("vec3","per vertex color",0)
C.G=new G.E("mat3","",0)
C.ad=new G.E("vec3","vertex tangents",0)
$.a7=0
$.aY=null
$.cY=null
$.cw=!1
$.ej=null
$.eb=null
$.eo=null
$.bZ=null
$.c2=null
$.cD=null
$.aP=null
$.b9=null
$.ba=null
$.cx=!1
$.D=C.d
$.ae=null
$.ch=null
$.d8=null
$.d7=null
$.d4=null
$.d3=null
$.d2=null
$.d1=null
$.ef=0
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
I.$lazy(y,x,w)}})(["l4","et",function(){return H.ei("_$dart_dartClosure")},"lG","cH",function(){return H.ei("_$dart_js")},"ms","ew",function(){return H.ab(H.bR({
toString:function(){return"$receiver$"}}))},"mt","ex",function(){return H.ab(H.bR({$method$:null,
toString:function(){return"$receiver$"}}))},"mu","ey",function(){return H.ab(H.bR(null))},"mv","ez",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"my","eC",function(){return H.ab(H.bR(void 0))},"mz","eD",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mx","eB",function(){return H.ab(H.dE(null))},"mw","eA",function(){return H.ab(function(){try{null.$method$}catch(z){return z.message}}())},"mB","eF",function(){return H.ab(H.dE(void 0))},"mA","eE",function(){return H.ab(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mK","cI",function(){return P.iE()},"n0","bg",function(){return[]},"l1","es",function(){return{}},"mS","eH",function(){return P.cn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"mT","cJ",function(){return P.a9(P.e,P.bl)},"me","eu",function(){return new G.dD(1281,0,4294967295)},"kX","eq",function(){return new G.dC(1281,1281,1281)},"mZ","a5",function(){return P.cm(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.F,"aColorAlpha",C.a1,"aPosition",C.D,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.E,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.F,"vTexUV",C.k,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.D,"vPositionFromLight",C.a_,"vCenter",C.E,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.aa,"uAnimationTable",C.f,"uTime",C.a9,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.c,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.b,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.e,G.E)},"mn","ev",function(){var z=G.ir()
z.b=!0
return z},"l_","er",function(){return T.aL(0,0,0)},"n6","eJ",function(){var z,y
z=G.dw("Textured")
y=[P.e]
z.cp(H.p(["aPosition","aTexUV"],y))
z.aQ(H.p(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aR(H.p(["vTexUV"],y))
z.aW(H.p(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"],y))
return z},"n5","eI",function(){var z,y
z=G.dw("TexturedF")
y=[P.e]
z.aR(H.p(["vTexUV"],y))
z.aQ(H.p(["uColor","uTexture"],y))
z.aW(H.p(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"],y))
return z},"mP","eG",function(){return H.p([T.aL(0,0,1),T.aL(0,0,-1),T.aL(0,1,0),T.aL(0,-1,0),T.aL(1,0,0),T.aL(-1,0,0)],[T.r])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.z,args:[W.U]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.R,args:[W.S,P.e,P.e,W.bx]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.e,args:[P.F]},{func:1,args:[,]},{func:1,ret:P.z,args:[W.aJ]},{func:1,ret:P.R,args:[W.aa]},{func:1,ret:P.R,args:[P.e]},{func:1,ret:-1,args:[W.O]},{func:1,ret:P.z,args:[W.b1]},{func:1,ret:P.R,args:[W.t]},{func:1,ret:P.z,args:[P.G]},{func:1,args:[W.O]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.bu]},{func:1,args:[,P.e]},{func:1,ret:P.z,args:[,],opt:[P.a2]},{func:1,ret:[P.Q,,],args:[,]},{func:1,ret:P.z,args:[W.aN]},{func:1,ret:P.z,args:[P.b]},{func:1,ret:P.F,args:[P.F,P.b]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.z,args:[P.P]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.z,args:[W.br]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:-1,args:[W.t,W.t]}]
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
if(x==y)H.kQ(d||a)
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
Isolate.aU=a.aU
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
if(typeof dartMainRunner==="function")dartMainRunner(U.el,[])
else U.el([])})})()
//# sourceMappingURL=camera_texture.dart.js.map
