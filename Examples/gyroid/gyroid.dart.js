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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isd)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.bU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.bU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.bU(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aK=function(){}
var dart=[["","",,H,{"^":"",jh:{"^":"c;a"}}],["","",,J,{"^":"",
bX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bp:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.bW==null){H.ib()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cH("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.c_()]
if(v!=null)return v
v=H.ih(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.t
if(y===Object.prototype)return C.t
if(typeof w=="function"){Object.defineProperty(w,$.c_(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
d:{"^":"c;",
B:function(a,b){return a===b},
gu:function(a){return H.aB(a)},
k:["bj",function(a){return"Instance of '"+H.aC(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ey:{"^":"d;",
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$isbR:1},
cr:{"^":"d;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
$isI:1},
bG:{"^":"d;",
gu:function(a){return 0},
k:["bk",function(a){return String(a)}]},
eR:{"^":"bG;"},
aE:{"^":"bG;"},
aY:{"^":"bG;",
k:function(a){var z=a[$.df()]
if(z==null)return this.bk(a)
return"JavaScript function for "+H.e(J.b8(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbD:1},
aW:{"^":"d;$ti",
n:function(a,b){H.v(b,H.p(a,0))
if(!!a.fixed$length)H.a0(P.y("add"))
a.push(b)},
bQ:function(a,b){var z
H.u(b,"$ish",[H.p(a,0)],"$ash")
if(!!a.fixed$length)H.a0(P.y("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
N:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.i(z,y,H.e(a[y]))
return z.join(b)},
bg:function(a,b){if(!!a.immutable$list)H.a0(P.y("sort"))
H.fe(a,J.hM(),H.p(a,0))},
ag:function(a){return this.bg(a,null)},
k:function(a){return P.bE(a,"[","]")},
gv:function(a){return new J.dX(a,a.length,0,[H.p(a,0)])},
gu:function(a){return H.aB(a)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.aJ(a,b))
return a[b]},
i:function(a,b,c){H.v(c,H.p(a,0))
if(!!a.immutable$list)H.a0(P.y("indexed set"))
if(b>=a.length||b<0)throw H.b(H.aJ(a,b))
a[b]=c},
$iso:1,
$aso:I.aK,
$ish:1,
$isa:1,
p:{
ex:function(a,b){return J.bF(H.t(a,[b]))},
bF:function(a){H.b3(a)
a.fixed$length=Array
return a},
jf:[function(a,b){return J.dx(H.da(a,"$isM"),H.da(b,"$isM"))},"$2","hM",8,0,17]}},
jg:{"^":"aW;$ti"},
dX:{"^":"c;a,b,c,0d,$ti",
sam:function(a){this.d=H.v(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.a4(z))
x=this.c
if(x>=y){this.sam(null)
return!1}this.sam(z[x]);++this.c
return!0}},
bd:{"^":"d;",
I:function(a,b){var z
H.bY(b)
if(typeof b!=="number")throw H.b(H.b_(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.ga6(b)
if(this.ga6(a)===z)return 0
if(this.ga6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga6:function(a){return a===0?1/a<0:a<0},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
bl:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.aE(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.aE(a,b)},
aE:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.y("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
aC:function(a,b){var z
if(a>0)z=this.bN(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
bN:function(a,b){return b>31?0:a>>>b},
G:function(a,b){if(typeof b!=="number")throw H.b(H.b_(b))
return a>b},
$isM:1,
$asM:function(){return[P.D]},
$isa2:1,
$isD:1},
cq:{"^":"bd;",$isA:1},
ez:{"^":"bd;"},
aX:{"^":"d;",
W:function(a,b){if(b>=a.length)throw H.b(H.aJ(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.w(b)
if(typeof b!=="string")throw H.b(P.cc(b,null,null))
return a+b},
bi:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.be(b,null,null))
if(b>c)throw H.b(P.be(b,null,null))
if(c>a.length)throw H.b(P.be(c,null,null))
return a.substring(b,c)},
bh:function(a,b){return this.bi(a,b,null)},
bX:function(a,b,c){if(c>a.length)throw H.b(P.f0(c,0,a.length,null,null))
return H.io(a,b,c)},
I:function(a,b){var z
H.w(b)
if(typeof b!=="string")throw H.b(H.b_(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.b(H.aJ(a,b))
return a[b]},
$iso:1,
$aso:I.aK,
$isM:1,
$asM:function(){return[P.f]},
$iseQ:1,
$isf:1}}],["","",,H,{"^":"",
fe:function(a,b,c){H.u(a,"$isa",[c],"$asa")
H.l(b,{func:1,ret:P.A,args:[c,c]})
H.aZ(a,0,J.aT(a)-1,b,c)},
aZ:function(a,b,c,d,e){H.u(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.A,args:[e,e]})
if(c-b<=32)H.fd(a,b,c,d,e)
else H.fc(a,b,c,d,e)},
fd:function(a,b,c,d,e){var z,y,x,w,v
H.u(a,"$isa",[e],"$asa")
H.l(d,{func:1,ret:P.A,args:[e,e]})
for(z=b+1,y=J.aL(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.X(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
fc:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.u(a,"$isa",[a2],"$asa")
H.l(a1,{func:1,ret:P.A,args:[a2,a2]})
z=C.e.M(a0-b+1,6)
y=b+z
x=a0-z
w=C.e.M(b+a0,2)
v=w-z
u=w+z
t=J.aL(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.X(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.X(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.X(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.X(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.X(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.X(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.X(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.X(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.X(a1.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,a0))
m=b+1
l=a0-1
if(J.ar(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.O()
if(i<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.G()
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
if(typeof e!=="number")return e.O()
if(e<0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.G()
if(d>0)for(;!0;){i=a1.$2(t.h(a,l),p)
if(typeof i!=="number")return i.G()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.O()
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
H.aZ(a,b,m-2,a1,a2)
H.aZ(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.ar(a1.$2(t.h(a,m),r),0);)++m
for(;J.ar(a1.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.h(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.h(a,l),r)
if(typeof i!=="number")return i.O()
h=l-1
if(i<0){t.i(a,k,t.h(a,m))
g=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=g}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=h
break}}H.aZ(a,m,l,a1,a2)}else H.aZ(a,m,l,a1,a2)},
ek:{"^":"h;"},
eE:{"^":"c;a,b,c,0d,$ti",
san:function(a){this.d=H.v(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aL(z)
x=y.gj(z)
if(this.b!==x)throw H.b(P.av(z))
w=this.c
if(w>=x){this.san(null)
return!1}this.san(y.q(z,w));++this.c
return!0}},
bc:{"^":"c;$ti"}}],["","",,H,{"^":"",
am:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
i5:function(a){return init.types[H.L(a)]},
ie:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.E(a).$isr},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.b8(a)
if(typeof z!=="string")throw H.b(H.b_(a))
return z},
aB:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aC:function(a){return H.eS(a)+H.bj(H.al(a),0,null)},
eS:function(a){var z,y,x,w,v,u,t,s,r
z=J.E(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.A||!!z.$isaE){u=C.q(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.am(w.length>1&&C.h.W(w,0)===36?C.h.bh(w,1):w)},
an:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
eZ:function(a){var z=H.an(a).getFullYear()+0
return z},
eX:function(a){var z=H.an(a).getMonth()+1
return z},
eT:function(a){var z=H.an(a).getDate()+0
return z},
eU:function(a){var z=H.an(a).getHours()+0
return z},
eW:function(a){var z=H.an(a).getMinutes()+0
return z},
eY:function(a){var z=H.an(a).getSeconds()+0
return z},
eV:function(a){var z=H.an(a).getMilliseconds()+0
return z},
aN:function(a){throw H.b(H.b_(a))},
k:function(a,b){if(a==null)J.aT(a)
throw H.b(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.at(!0,b,"index",null)
z=H.L(J.aT(a))
if(!(b<0)){if(typeof z!=="number")return H.aN(z)
y=b>=z}else y=!0
if(y)return P.B(b,a,"index",null,z)
return P.be(b,"index",null)},
b_:function(a){return new P.at(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.cz()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dd})
z.name=""}else z.toString=H.dd
return z},
dd:function(){return J.b8(this.dartException)},
a0:function(a){throw H.b(a)},
a4:function(a){throw H.b(P.av(a))},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.iq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aC(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bH(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cy(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.dg()
u=$.dh()
t=$.di()
s=$.dj()
r=$.dm()
q=$.dn()
p=$.dl()
$.dk()
o=$.dq()
n=$.dp()
m=v.D(y)
if(m!=null)return z.$1(H.bH(H.w(y),m))
else{m=u.D(y)
if(m!=null){m.method="call"
return z.$1(H.bH(H.w(y),m))}else{m=t.D(y)
if(m==null){m=s.D(y)
if(m==null){m=r.D(y)
if(m==null){m=q.D(y)
if(m==null){m=p.D(y)
if(m==null){m=s.D(y)
if(m==null){m=o.D(y)
if(m==null){m=n.D(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cy(H.w(y),m))}}return z.$1(new H.fr(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.at(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cC()
return a},
aM:function(a){var z
if(a==null)return new H.cT(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.cT(a)},
i_:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
id:function(a,b,c,d,e,f){H.i(a,"$isbD")
switch(H.L(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.cn("Unsupported number of arguments for wrapped closure"))},
b0:function(a,b){var z
H.L(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.id)
a.$identity=z
return z},
e6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.E(d).$isa){z.$reflectionInfo=d
x=H.f2(z).r}else x=d
w=e?Object.create(new H.fh().constructor.prototype):Object.create(new H.bz(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.Y
if(typeof u!=="number")return u.C()
$.Y=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.cg(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.i5,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.ce:H.bA
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.b("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cg(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
e3:function(a,b,c,d){var z=H.bA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cg:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.e5(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.e3(y,!w,z,b)
if(y===0){w=$.Y
if(typeof w!=="number")return w.C()
$.Y=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.au
if(v==null){v=H.b9("self")
$.au=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Y
if(typeof w!=="number")return w.C()
$.Y=w+1
t+=w
w="return function("+t+"){return this."
v=$.au
if(v==null){v=H.b9("self")
$.au=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
e4:function(a,b,c,d){var z,y
z=H.bA
y=H.ce
switch(b?-1:a){case 0:throw H.b(H.f7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
e5:function(a,b){var z,y,x,w,v,u,t,s
z=$.au
if(z==null){z=H.b9("self")
$.au=z}y=$.cd
if(y==null){y=H.b9("receiver")
$.cd=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.e4(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.Y
if(typeof y!=="number")return y.C()
$.Y=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.Y
if(typeof y!=="number")return y.C()
$.Y=y+1
return new Function(z+y+"}")()},
bU:function(a,b,c,d,e,f,g){return H.e6(a,b,H.L(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.V(a,"String"))},
d3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.V(a,"double"))},
bY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.V(a,"num"))},
bS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.V(a,"bool"))},
L:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.V(a,"int"))},
bZ:function(a,b){throw H.b(H.V(a,H.am(H.w(b).substring(3))))},
il:function(a,b){throw H.b(H.cf(a,H.am(H.w(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.E(a)[b])return a
H.bZ(a,b)},
a3:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.E(a)[b]
else z=!0
if(z)return a
H.il(a,b)},
da:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.E(a)[b])return a
H.bZ(a,b)},
b3:function(a){if(a==null)return a
if(!!J.E(a).$isa)return a
throw H.b(H.V(a,"List<dynamic>"))},
ig:function(a,b){var z
if(a==null)return a
z=J.E(a)
if(!!z.$isa)return a
if(z[b])return a
H.bZ(a,b)},
bV:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.L(z)]
else return a.$S()}return},
b1:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.bV(J.E(a))
if(z==null)return!1
return H.cW(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.bO)return a
$.bO=!0
try{if(H.b1(a,b))return a
z=H.b4(b)
y=H.V(a,z)
throw H.b(y)}finally{$.bO=!1}},
bn:function(a,b){if(a!=null&&!H.bT(a,b))H.a0(H.V(a,H.b4(b)))
return a},
d_:function(a){var z,y
z=J.E(a)
if(!!z.$isq){y=H.bV(z)
if(y!=null)return H.b4(y)
return"Closure"}return H.aC(a)},
ip:function(a){throw H.b(new P.eb(H.w(a)))},
d5:function(a){return init.getIsolateTag(a)},
t:function(a,b){a.$ti=b
return a},
al:function(a){if(a==null)return
return a.$ti},
kB:function(a,b,c){return H.aP(a["$as"+H.e(c)],H.al(b))},
b2:function(a,b,c,d){var z
H.w(c)
H.L(d)
z=H.aP(a["$as"+H.e(c)],H.al(b))
return z==null?null:z[d]},
p:function(a,b){var z
H.L(b)
z=H.al(a)
return z==null?null:z[b]},
b4:function(a){return H.ak(a,null)},
ak:function(a,b){var z,y
H.u(b,"$isa",[P.f],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.am(a[0].builtin$cls)+H.bj(a,1,b)
if(typeof a=="function")return H.am(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.L(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.e(b[y])}if('func' in a)return H.hL(a,b)
if('futureOr' in a)return"FutureOr<"+H.ak("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
hL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.u(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.t([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.n(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.h.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.ak(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ak(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ak(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ak(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.hZ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.ak(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bj:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isa",[P.f],"$asa")
if(a==null)return""
z=new P.bK("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ak(u,c)}return"<"+z.k(0)+">"},
i4:function(a){var z,y,x,w
z=J.E(a)
if(!!z.$isq){y=H.bV(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.al(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aP:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aI:function(a,b,c,d){var z,y
H.w(b)
H.b3(c)
H.w(d)
if(a==null)return!1
z=H.al(a)
y=J.E(a)
if(y[b]==null)return!1
return H.d1(H.aP(y[d],z),null,c,null)},
b5:function(a,b,c,d){H.w(b)
H.b3(c)
H.w(d)
if(a==null)return a
if(H.aI(a,b,c,d))return a
throw H.b(H.cf(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.am(b.substring(3))+H.bj(c,0,null),init.mangledGlobalNames)))},
u:function(a,b,c,d){H.w(b)
H.b3(c)
H.w(d)
if(a==null)return a
if(H.aI(a,b,c,d))return a
throw H.b(H.V(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.am(b.substring(3))+H.bj(c,0,null),init.mangledGlobalNames)))},
d1:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.R(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.R(a[y],b,c[y],d))return!1
return!0},
kz:function(a,b,c){return a.apply(b,H.aP(J.E(b)["$as"+H.e(c)],H.al(b)))},
d8:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="I"||a===-1||a===-2||H.d8(z)}return!1},
bT:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="I"||b===-1||b===-2||H.d8(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.bT(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b1(a,b)}z=J.E(a).constructor
y=H.al(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.R(z,null,b,null)},
v:function(a,b){if(a!=null&&!H.bT(a,b))throw H.b(H.V(a,H.b4(b)))
return a},
R:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.R(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.cW(a,b,c,d)
if('func' in a)return c.builtin$cls==="bD"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.R("type" in a?a.type:null,b,x,d)
else if(H.R(a,b,x,d))return!0
else{if(!('$is'+"ay" in y.prototype))return!1
w=y.prototype["$as"+"ay"]
v=H.aP(w,z?a.slice(1):null)
return H.R(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.d1(H.aP(r,z),b,u,d)},
cW:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.R(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.R(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.R(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.R(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ik(m,b,l,d)},
ik:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.R(c[w],d,a[w],b))return!1}return!0},
kA:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
ih:function(a){var z,y,x,w,v,u
z=H.w($.d6.$1(a))
y=$.bm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bq[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.d0.$2(a,z))
if(z!=null){y=$.bm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bq[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.br(x)
$.bm[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bq[z]=x
return x}if(v==="-"){u=H.br(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.db(a,x)
if(v==="*")throw H.b(P.cH(z))
if(init.leafTags[z]===true){u=H.br(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.db(a,x)},
db:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bX(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
br:function(a){return J.bX(a,!1,null,!!a.$isr)},
ij:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.br(z)
else return J.bX(z,c,null,null)},
ib:function(){if(!0===$.bW)return
$.bW=!0
H.ic()},
ic:function(){var z,y,x,w,v,u,t,s
$.bm=Object.create(null)
$.bq=Object.create(null)
H.i7()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dc.$1(v)
if(u!=null){t=H.ij(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
i7:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.aq(C.B,H.aq(C.G,H.aq(C.p,H.aq(C.p,H.aq(C.F,H.aq(C.C,H.aq(C.D(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.d6=new H.i8(v)
$.d0=new H.i9(u)
$.dc=new H.ia(t)},
aq:function(a,b){return a(b)||b},
io:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f1:{"^":"c;a,b,c,d,e,f,r,0x",p:{
f2:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bF(z)
y=z[0]
x=z[1]
return new H.f1(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
fl:{"^":"c;a,b,c,d,e,f",
D:function(a){var z,y,x
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
Z:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.t([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.fl(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bf:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
cF:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
eP:{"^":"H;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
cy:function(a,b){return new H.eP(a,b==null?null:b.method)}}},
eA:{"^":"H;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
bH:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.eA(a,y,z?null:b.receiver)}}},
fr:{"^":"H;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
iq:{"^":"q:4;a",
$1:function(a){if(!!J.E(a).$isH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
cT:{"^":"c;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isU:1},
q:{"^":"c;",
k:function(a){return"Closure '"+H.aC(this).trim()+"'"},
gbe:function(){return this},
$isbD:1,
gbe:function(){return this}},
cE:{"^":"q;"},
fh:{"^":"cE;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.am(z)+"'"}},
bz:{"^":"cE;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bz))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var z,y
z=this.c
if(z==null)y=H.aB(this.a)
else y=typeof z!=="object"?J.as(z):H.aB(z)
return(y^H.aB(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aC(z)+"'")},
p:{
bA:function(a){return a.a},
ce:function(a){return a.c},
b9:function(a){var z,y,x,w,v
z=new H.bz("self","target","receiver","name")
y=J.bF(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fm:{"^":"H;a",
k:function(a){return this.a},
p:{
V:function(a,b){return new H.fm("TypeError: "+P.bb(a)+": type '"+H.d_(a)+"' is not a subtype of type '"+b+"'")}}},
e1:{"^":"H;a",
k:function(a){return this.a},
p:{
cf:function(a,b){return new H.e1("CastError: "+P.bb(a)+": type '"+H.d_(a)+"' is not a subtype of type '"+b+"'")}}},
f6:{"^":"H;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
f7:function(a){return new H.f6(a)}}},
cG:{"^":"c;a,0b,0c,0d",
gT:function(){var z=this.b
if(z==null){z=H.b4(this.a)
this.b=z}return z},
k:function(a){return this.gT()},
gu:function(a){var z=this.d
if(z==null){z=C.h.gu(this.gT())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.cG&&this.gT()===b.gT()}},
cs:{"^":"eF;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gF:function(a){return new H.a8(this,[H.p(this,0)])},
U:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bD(z,b)}else{y=this.c5(b)
return y}},
c5:function(a){var z=this.d
if(z==null)return!1
return this.a5(this.a0(z,J.as(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.R(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.R(w,b)
x=y==null?null:y.b
return x}else return this.c6(b)},
c6:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.a0(z,J.as(a)&0x3ffffff)
x=this.a5(y,a)
if(x<0)return
return y[x].b},
i:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.p(this,0))
H.v(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.a1()
this.b=z}this.ap(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.a1()
this.c=y}this.ap(y,b,c)}else{x=this.d
if(x==null){x=this.a1()
this.d=x}w=J.as(b)&0x3ffffff
v=this.a0(x,w)
if(v==null)this.a4(x,w,[this.a2(b,c)])
else{u=this.a5(v,b)
if(u>=0)v[u].b=c
else v.push(this.a2(b,c))}}},
w:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.av(this))
z=z.c}},
ap:function(a,b,c){var z
H.v(b,H.p(this,0))
H.v(c,H.p(this,1))
z=this.R(a,b)
if(z==null)this.a4(a,b,this.a2(b,c))
else z.b=c},
aA:function(){this.r=this.r+1&67108863},
a2:function(a,b){var z,y
z=new H.eB(H.v(a,H.p(this,0)),H.v(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aA()
return z},
a5:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ar(a[y].a,b))return y
return-1},
k:function(a){return P.cw(this)},
R:function(a,b){return a[b]},
a0:function(a,b){return a[b]},
a4:function(a,b,c){a[b]=c},
bE:function(a,b){delete a[b]},
bD:function(a,b){return this.R(a,b)!=null},
a1:function(){var z=Object.create(null)
this.a4(z,"<non-identifier-key>",z)
this.bE(z,"<non-identifier-key>")
return z},
$isct:1},
eB:{"^":"c;a,b,0c,0d"},
a8:{"^":"ek;a,$ti",
gj:function(a){return this.a.a},
gv:function(a){var z,y
z=this.a
y=new H.eC(z,z.r,this.$ti)
y.c=z.e
return y}},
eC:{"^":"c;a,b,0c,0d,$ti",
sao:function(a){this.d=H.v(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.av(z))
else{z=this.c
if(z==null){this.sao(null)
return!1}else{this.sao(z.a)
this.c=this.c.c
return!0}}}},
i8:{"^":"q:4;a",
$1:function(a){return this.a(a)}},
i9:{"^":"q:8;a",
$2:function(a,b){return this.a(a,b)}},
ia:{"^":"q:9;a",
$1:function(a){return this.a(H.w(a))}}}],["","",,H,{"^":"",
hZ:function(a){return J.ex(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
bs:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bi:function(a){var z,y
if(!!J.E(a).$iso)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.i(z,y,a[y])
return z},
a_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.aJ(b,a))},
eN:{"^":"d;",$isfn:1,"%":"DataView;ArrayBufferView;bJ|cN|cO|cx|cP|cQ|ab"},
bJ:{"^":"eN;",
gj:function(a){return a.length},
$iso:1,
$aso:I.aK,
$isr:1,
$asr:I.aK},
cx:{"^":"cO;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
i:function(a,b,c){H.d3(c)
H.a_(b,a,a.length)
a[b]=c},
$asbc:function(){return[P.a2]},
$asj:function(){return[P.a2]},
$ish:1,
$ash:function(){return[P.a2]},
$isa:1,
$asa:function(){return[P.a2]},
"%":"Float64Array"},
ab:{"^":"cQ;",
i:function(a,b,c){H.L(c)
H.a_(b,a,a.length)
a[b]=c},
$asbc:function(){return[P.A]},
$asj:function(){return[P.A]},
$ish:1,
$ash:function(){return[P.A]},
$isa:1,
$asa:function(){return[P.A]}},
eM:{"^":"cx;",$isax:1,"%":"Float32Array"},
js:{"^":"ab;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int16Array"},
jt:{"^":"ab;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
$isje:1,
"%":"Int32Array"},
ju:{"^":"ab;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int8Array"},
jv:{"^":"ab;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
eO:{"^":"ab;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
$iske:1,
"%":"Uint32Array"},
jw:{"^":"ab;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
jx:{"^":"ab;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
cN:{"^":"bJ+j;"},
cO:{"^":"cN+bc;"},
cP:{"^":"bJ+j;"},
cQ:{"^":"cP+bc;"}}],["","",,P,{"^":"",
fx:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.hU()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b0(new P.fz(z),1)).observe(y,{childList:true})
return new P.fy(z,y,x)}else if(self.setImmediate!=null)return P.hV()
return P.hW()},
kn:[function(a){self.scheduleImmediate(H.b0(new P.fA(H.l(a,{func:1,ret:-1})),0))},"$1","hU",4,0,3],
ko:[function(a){self.setImmediate(H.b0(new P.fB(H.l(a,{func:1,ret:-1})),0))},"$1","hV",4,0,3],
kp:[function(a){H.l(a,{func:1,ret:-1})
P.hu(0,a)},"$1","hW",4,0,3],
hP:function(a,b){if(H.b1(a,{func:1,args:[P.c,P.U]}))return H.l(a,{func:1,ret:null,args:[P.c,P.U]})
if(H.b1(a,{func:1,args:[P.c]}))return H.l(a,{func:1,ret:null,args:[P.c]})
throw H.b(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
hO:function(){var z,y
for(;z=$.ap,z!=null;){$.aH=null
y=z.b
$.ap=y
if(y==null)$.aG=null
z.a.$0()}},
kx:[function(){$.bP=!0
try{P.hO()}finally{$.aH=null
$.bP=!1
if($.ap!=null)$.c0().$1(P.d2())}},"$0","d2",0,0,1],
cZ:function(a){var z=new P.cI(H.l(a,{func:1,ret:-1}))
if($.ap==null){$.aG=z
$.ap=z
if(!$.bP)$.c0().$1(P.d2())}else{$.aG.b=z
$.aG=z}},
hS:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.ap
if(z==null){P.cZ(a)
$.aH=$.aG
return}y=new P.cI(a)
x=$.aH
if(x==null){y.b=z
$.aH=y
$.ap=y}else{y.b=x.b
x.b=y
$.aH=y
if(y.b==null)$.aG=y}},
im:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.C
if(C.d===y){P.bl(null,null,C.d,a)
return}y.toString
P.bl(null,null,y,H.l(y.aI(a),z))},
bk:function(a,b,c,d,e){var z={}
z.a=d
P.hS(new P.hQ(z,e))},
cX:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.C
if(y===c)return d.$0()
$.C=c
z=y
try{y=d.$0()
return y}finally{$.C=z}},
cY:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.C
if(y===c)return d.$1(e)
$.C=c
z=y
try{y=d.$1(e)
return y}finally{$.C=z}},
hR:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.C
if(y===c)return d.$2(e,f)
$.C=c
z=y
try{y=d.$2(e,f)
return y}finally{$.C=z}},
bl:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.aI(d):c.bT(d,-1)
P.cZ(d)},
fz:{"^":"q:5;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
fy:{"^":"q:10;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
fA:{"^":"q:0;a",
$0:function(){this.a.$0()}},
fB:{"^":"q:0;a",
$0:function(){this.a.$0()}},
ht:{"^":"c;a,0b,c",
bz:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b0(new P.hv(this,b),0),a)
else throw H.b(P.y("`setTimeout()` not found."))},
p:{
hu:function(a,b){var z=new P.ht(!0,0)
z.bz(a,b)
return z}}},
hv:{"^":"q:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
fD:{"^":"c;$ti"},
hq:{"^":"fD;a,$ti"},
ao:{"^":"c;0a,b,c,d,e,$ti",
c7:function(a){if(this.c!==6)return!0
return this.b.b.a7(H.l(this.d,{func:1,ret:P.bR,args:[P.c]}),a.a,P.bR,P.c)},
c4:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.b1(z,{func:1,args:[P.c,P.U]}))return H.bn(w.c9(z,a.a,a.b,null,y,P.U),x)
else return H.bn(w.a7(H.l(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
a1:{"^":"c;aD:a<,b,0bM:c<,$ti",
b1:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.C
if(y!==C.d){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.hP(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a1(0,$.C,[c])
w=b==null?1:3
this.aq(new P.ao(x,w,a,b,[z,c]))
return x},
b0:function(a,b){return this.b1(a,null,b)},
aq:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isao")
this.c=a}else{if(z===2){y=H.i(this.c,"$isa1")
z=y.a
if(z<4){y.aq(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bl(null,null,z,H.l(new P.fM(this,a),{func:1,ret:-1}))}},
aB:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isao")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isa1")
y=u.a
if(y<4){u.aB(a)
return}this.a=y
this.c=u.c}z.a=this.S(a)
y=this.b
y.toString
P.bl(null,null,y,H.l(new P.fR(z,this),{func:1,ret:-1}))}},
a3:function(){var z=H.i(this.c,"$isao")
this.c=null
return this.S(z)},
S:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
au:function(a){var z,y,x
z=H.p(this,0)
H.bn(a,{futureOr:1,type:z})
y=this.$ti
if(H.aI(a,"$isay",y,"$asay"))if(H.aI(a,"$isa1",y,null))P.cK(a,this)
else P.fN(a,this)
else{x=this.a3()
H.v(a,z)
this.a=4
this.c=a
P.aF(this,x)}},
av:function(a,b){var z
H.i(b,"$isU")
z=this.a3()
this.a=8
this.c=new P.Q(a,b)
P.aF(this,z)},
$isay:1,
p:{
fN:function(a,b){var z,y,x
b.a=1
try{a.b1(new P.fO(b),new P.fP(b),null)}catch(x){z=H.aQ(x)
y=H.aM(x)
P.im(new P.fQ(b,z,y))}},
cK:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isa1")
if(z>=4){y=b.a3()
b.a=a.a
b.c=a.c
P.aF(b,y)}else{y=H.i(b.c,"$isao")
b.a=2
b.c=a
a.aB(y)}},
aF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isQ")
y=y.b
u=v.a
t=v.b
y.toString
P.bk(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aF(z.a,b)}y=z.a
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
P.bk(null,null,y,u,t)
return}o=$.C
if(o!=q)$.C=q
else o=null
y=b.c
if(y===8)new P.fU(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.fT(x,b,r).$0()}else if((y&2)!==0)new P.fS(z,x,b).$0()
if(o!=null)$.C=o
y=x.b
if(!!J.E(y).$isay){if(y.a>=4){n=H.i(t.c,"$isao")
t.c=null
b=t.S(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.cK(y,t)
return}}m=b.b
n=H.i(m.c,"$isao")
m.c=null
b=m.S(n)
y=x.a
u=x.b
if(!y){H.v(u,H.p(m,0))
m.a=4
m.c=u}else{H.i(u,"$isQ")
m.a=8
m.c=u}z.a=m
y=m}}}},
fM:{"^":"q:0;a,b",
$0:function(){P.aF(this.a,this.b)}},
fR:{"^":"q:0;a,b",
$0:function(){P.aF(this.b,this.a.a)}},
fO:{"^":"q:5;a",
$1:function(a){var z=this.a
z.a=0
z.au(a)}},
fP:{"^":"q:11;a",
$2:function(a,b){H.i(b,"$isU")
this.a.av(a,b)},
$1:function(a){return this.$2(a,null)}},
fQ:{"^":"q:0;a,b,c",
$0:function(){this.a.av(this.b,this.c)}},
fU:{"^":"q:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.b_(H.l(w.d,{func:1}),null)}catch(v){y=H.aQ(v)
x=H.aM(v)
if(this.d){w=H.i(this.a.a.c,"$isQ").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isQ")
else u.b=new P.Q(y,x)
u.a=!0
return}if(!!J.E(z).$isay){if(z instanceof P.a1&&z.gaD()>=4){if(z.gaD()===8){w=this.b
w.b=H.i(z.gbM(),"$isQ")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.b0(new P.fV(t),null)
w.a=!1}}},
fV:{"^":"q:12;a",
$1:function(a){return this.a}},
fT:{"^":"q:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.v(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.a7(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aQ(t)
y=H.aM(t)
x=this.a
x.b=new P.Q(z,y)
x.a=!0}}},
fS:{"^":"q:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isQ")
w=this.c
if(w.c7(z)&&w.e!=null){v=this.b
v.b=w.c4(z)
v.a=!1}}catch(u){y=H.aQ(u)
x=H.aM(u)
w=H.i(this.a.a.c,"$isQ")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Q(y,x)
s.a=!0}}},
cI:{"^":"c;a,0b"},
Q:{"^":"c;a,b",
k:function(a){return H.e(this.a)},
$isH:1},
hA:{"^":"c;",$iskl:1},
hQ:{"^":"q:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cz()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.k(0)
throw x}},
he:{"^":"hA;",
ca:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.d===$.C){a.$0()
return}P.cX(null,null,this,a,-1)}catch(x){z=H.aQ(x)
y=H.aM(x)
P.bk(null,null,this,z,H.i(y,"$isU"))}},
cb:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.d===$.C){a.$1(b)
return}P.cY(null,null,this,a,b,-1,c)}catch(x){z=H.aQ(x)
y=H.aM(x)
P.bk(null,null,this,z,H.i(y,"$isU"))}},
bT:function(a,b){return new P.hg(this,H.l(a,{func:1,ret:b}),b)},
aI:function(a){return new P.hf(this,H.l(a,{func:1,ret:-1}))},
bU:function(a,b){return new P.hh(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
b_:function(a,b){H.l(a,{func:1,ret:b})
if($.C===C.d)return a.$0()
return P.cX(null,null,this,a,b)},
a7:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.C===C.d)return a.$1(b)
return P.cY(null,null,this,a,b,c,d)},
c9:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.C===C.d)return a.$2(b,c)
return P.hR(null,null,this,a,b,c,d,e,f)}},
hg:{"^":"q;a,b,c",
$0:function(){return this.a.b_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
hf:{"^":"q:1;a,b",
$0:function(){return this.a.ca(this.b)}},
hh:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.cb(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
cu:function(a,b,c){H.b3(a)
return H.u(H.i_(a,new H.cs(0,0,[b,c])),"$isct",[b,c],"$asct")},
a9:function(a,b){return new H.cs(0,0,[a,b])},
cv:function(a,b,c,d){return new P.h1(0,0,[d])},
ew:function(a,b,c){var z,y
if(P.bQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.t([],[P.f])
y=$.aR()
C.a.n(y,a)
try{P.hN(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.cD(b,H.ig(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
bE:function(a,b,c){var z,y,x
if(P.bQ(a))return b+"..."+c
z=new P.bK(b)
y=$.aR()
C.a.n(y,a)
try{x=z
x.a=P.cD(x.gH(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gH()+c
y=z.gH()
return y.charCodeAt(0)==0?y:y},
bQ:function(a){var z,y
for(z=0;y=$.aR(),z<y.length;++z)if(a===y[z])return!0
return!1},
hN:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.u(b,"$isa",[P.f],"$asa")
z=a.gv(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.n(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.n(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.n(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.n(b,q)
C.a.n(b,u)
C.a.n(b,v)},
eD:function(a,b){var z,y,x
z=P.cv(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.a4)(a),++x)z.n(0,H.v(a[x],b))
return z},
cw:function(a){var z,y,x
z={}
if(P.bQ(a))return"{...}"
y=new P.bK("")
try{C.a.n($.aR(),a)
x=y
x.a=x.gH()+"{"
z.a=!0
J.dI(a,new P.eG(z,y))
z=y
z.a=z.gH()+"}"}finally{z=$.aR()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gH()
return z.charCodeAt(0)==0?z:z},
h1:{"^":"fX;a,0b,0c,0d,0e,0f,r,$ti",
gv:function(a){return P.cM(this,this.r,H.p(this,0))},
gj:function(a){return this.a},
bW:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isbM")!=null}else{y=this.bC(b)
return y}},
bC:function(a){var z=this.d
if(z==null)return!1
return this.ay(this.bG(z,a),a)>=0},
n:function(a,b){var z,y
H.v(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bN()
this.b=z}return this.ar(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bN()
this.c=y}return this.ar(y,b)}else return this.bA(0,b)},
bA:function(a,b){var z,y,x
H.v(b,H.p(this,0))
z=this.d
if(z==null){z=P.bN()
this.d=z}y=this.aw(b)
x=z[y]
if(x==null)z[y]=[this.X(b)]
else{if(this.ay(x,b)>=0)return!1
x.push(this.X(b))}return!0},
ar:function(a,b){H.v(b,H.p(this,0))
if(H.i(a[b],"$isbM")!=null)return!1
a[b]=this.X(b)
return!0},
at:function(){this.r=this.r+1&67108863},
X:function(a){var z,y
z=new P.bM(H.v(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.at()
return z},
aw:function(a){return J.as(a)&0x3ffffff},
bG:function(a,b){return a[this.aw(b)]},
ay:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.ar(a[y].a,b))return y
return-1},
p:{
bN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bM:{"^":"c;a,0b,0c"},
h2:{"^":"c;a,b,0c,0d,$ti",
sas:function(a){this.d=H.v(a,H.p(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.av(z))
else{z=this.c
if(z==null){this.sas(null)
return!1}else{this.sas(H.v(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
p:{
cM:function(a,b,c){var z=new P.h2(a,b,[c])
z.c=a.e
return z}}},
fX:{"^":"f8;"},
j:{"^":"c;$ti",
gv:function(a){return new H.eE(a,this.gj(a),0,[H.b2(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
c2:function(a,b,c,d){var z,y,x
H.v(b,d)
H.l(c,{func:1,ret:d,args:[d,H.b2(this,a,"j",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.b(P.av(a))}return y},
k:function(a){return P.bE(a,"[","]")}},
eF:{"^":"O;"},
eG:{"^":"q:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
O:{"^":"c;$ti",
w:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b2(this,a,"O",0),H.b2(this,a,"O",1)]})
for(z=J.c6(this.gF(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.aT(this.gF(a))},
k:function(a){return P.cw(a)},
$isG:1},
f9:{"^":"c;$ti",
k:function(a){return P.bE(this,"{","}")},
$ish:1,
$isjP:1},
f8:{"^":"f9;"}}],["","",,P,{"^":"",
el:function(a){if(a instanceof H.q)return a.k(0)
return"Instance of '"+H.aC(a)+"'"},
bb:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.el(a)},
cn:function(a){return new P.fJ(a)},
aO:function(a){H.bs(H.e(a))},
bR:{"^":"c;"},
"+bool":0,
ba:{"^":"c;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.ba&&this.a===b.a&&!0},
I:function(a,b){return C.e.I(this.a,H.i(b,"$isba").a)},
gu:function(a){var z=this.a
return(z^C.e.aC(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t,s
z=P.ec(H.eZ(this))
y=P.aU(H.eX(this))
x=P.aU(H.eT(this))
w=P.aU(H.eU(this))
v=P.aU(H.eW(this))
u=P.aU(H.eY(this))
t=P.ed(H.eV(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
$isM:1,
$asM:function(){return[P.ba]},
p:{
ec:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ed:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aU:function(a){if(a>=10)return""+a
return"0"+a}}},
a2:{"^":"D;"},
"+double":0,
aw:{"^":"c;a",
G:function(a,b){return C.e.G(this.a,H.i(b,"$isaw").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.aw&&this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
I:function(a,b){return C.e.I(this.a,H.i(b,"$isaw").a)},
k:function(a){var z,y,x,w,v
z=new P.ej()
y=this.a
if(y<0)return"-"+new P.aw(0-y).k(0)
x=z.$1(C.e.M(y,6e7)%60)
w=z.$1(C.e.M(y,1e6)%60)
v=new P.ei().$1(y%1e6)
return""+C.e.M(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isM:1,
$asM:function(){return[P.aw]},
p:{
eh:function(a,b,c,d,e,f){return new P.aw(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ei:{"^":"q:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ej:{"^":"q:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
H:{"^":"c;"},
cz:{"^":"H;",
k:function(a){return"Throw of null."}},
at:{"^":"H;a,b,c,d",
gZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gY:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gZ()+y+x
if(!this.a)return w
v=this.gY()
u=P.bb(this.b)
return w+v+": "+u},
p:{
cc:function(a,b,c){return new P.at(!0,a,b,c)}}},
cA:{"^":"at;e,f,a,b,c,d",
gZ:function(){return"RangeError"},
gY:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
be:function(a,b,c){return new P.cA(null,null,!0,a,b,"Value not in range")},
f0:function(a,b,c,d,e){return new P.cA(b,c,!0,a,d,"Invalid value")}}},
ev:{"^":"at;e,j:f>,a,b,c,d",
gZ:function(){return"RangeError"},
gY:function(){var z,y
z=H.L(this.b)
if(typeof z!=="number")return z.O()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
B:function(a,b,c,d,e){var z=H.L(e==null?J.aT(b):e)
return new P.ev(b,z,!0,a,c,"Index out of range")}}},
fs:{"^":"H;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
y:function(a){return new P.fs(a)}}},
fq:{"^":"H;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cH:function(a){return new P.fq(a)}}},
ff:{"^":"H;a",
k:function(a){return"Bad state: "+this.a},
p:{
fg:function(a){return new P.ff(a)}}},
e7:{"^":"H;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bb(z)+"."},
p:{
av:function(a){return new P.e7(a)}}},
cC:{"^":"c;",
k:function(a){return"Stack Overflow"},
$isH:1},
eb:{"^":"H;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fJ:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
A:{"^":"D;"},
"+int":0,
h:{"^":"c;$ti",
gj:function(a){var z,y
z=this.gv(this)
for(y=0;z.t();)++y
return y},
k:function(a){return P.ew(this,"(",")")}},
a:{"^":"c;$ti",$ish:1},
"+List":0,
G:{"^":"c;$ti"},
I:{"^":"c;",
gu:function(a){return P.c.prototype.gu.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
D:{"^":"c;",$isM:1,
$asM:function(){return[P.D]}},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gu:function(a){return H.aB(this)},
k:function(a){return"Instance of '"+H.aC(this)+"'"},
toString:function(){return this.k(this)}},
U:{"^":"c;"},
f:{"^":"c;",$isM:1,
$asM:function(){return[P.f]},
$iseQ:1},
"+String":0,
bK:{"^":"c;H:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
cD:function(a,b,c){var z=J.c6(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
bh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
cL:function(a,b,c,d){var z,y
z=W.bh(W.bh(W.bh(W.bh(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hT:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.C
if(z===C.d)return a
return z.bU(a,b)},
T:{"^":"cm;","%":"HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ir:{"^":"d;0j:length=","%":"AccessibleNodeList"},
is:{"^":"T;",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
it:{"^":"T;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
e_:{"^":"d;","%":";Blob"},
bB:{"^":"T;0m:height=,0l:width=",
bf:function(a,b,c){var z=this.bH(a,b,P.hX(c,null))
return z},
bH:function(a,b,c){return a.getContext(b,c)},
$isbB:1,
"%":"HTMLCanvasElement"},
ix:{"^":"d;",
V:function(a){return P.S(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
iy:{"^":"z;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
e8:{"^":"bC;",$ise8:1,"%":"CSSNumericValue|CSSUnitValue"},
iz:{"^":"ea;0j:length=","%":"CSSPerspective"},
a5:{"^":"d;",$isa5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
iA:{"^":"fE;0j:length=",
aa:function(a,b){var z=this.bI(a,this.bB(a,b))
return z==null?"":z},
bB:function(a,b){var z,y
z=$.de()
y=z[b]
if(typeof y==="string")return y
y=this.bO(a,b)
z[b]=y
return y},
bO:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ee()+b
if(z in a)return z
return b},
bI:function(a,b){return a.getPropertyValue(b)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
e9:{"^":"c;",
gm:function(a){return this.aa(a,"height")},
gl:function(a){return this.aa(a,"width")}},
bC:{"^":"d;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
ea:{"^":"d;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
iC:{"^":"bC;0j:length=","%":"CSSTransformValue"},
iD:{"^":"bC;0j:length=","%":"CSSUnparsedValue"},
iF:{"^":"d;0j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
ef:{"^":"z;",
c8:function(a,b){return a.querySelector(b)},
"%":"XMLDocument;Document"},
iG:{"^":"d;",
k:function(a){return String(a)},
"%":"DOMException"},
iH:{"^":"fG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.u(c,"$isK",[P.D],"$asK")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[[P.K,P.D]]},
$isr:1,
$asr:function(){return[[P.K,P.D]]},
$asj:function(){return[[P.K,P.D]]},
$ish:1,
$ash:function(){return[[P.K,P.D]]},
$isa:1,
$asa:function(){return[[P.K,P.D]]},
$asm:function(){return[[P.K,P.D]]},
"%":"ClientRectList|DOMRectList"},
eg:{"^":"d;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gl(a))+" x "+H.e(this.gm(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.aI(b,"$isK",[P.D],"$asK"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=this.gl(a)===z.gl(b)&&this.gm(a)===z.gm(b)}else z=!1
else z=!1
return z},
gu:function(a){return W.cL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gl(a)&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
$isK:1,
$asK:function(){return[P.D]},
"%":";DOMRectReadOnly"},
iI:{"^":"fI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.f]},
$isr:1,
$asr:function(){return[P.f]},
$asj:function(){return[P.f]},
$ish:1,
$ash:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asm:function(){return[P.f]},
"%":"DOMStringList"},
iJ:{"^":"d;0j:length=","%":"DOMTokenList"},
cm:{"^":"z;",
k:function(a){return a.localName},
"%":";Element"},
iL:{"^":"T;0m:height=,0l:width=","%":"HTMLEmbedElement"},
em:{"^":"d;","%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
N:{"^":"d;","%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;cR|cS|cU|cV"},
a6:{"^":"e_;",$isa6:1,"%":"File"},
j1:{"^":"fL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isa6")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$asj:function(){return[W.a6]},
$ish:1,
$ash:function(){return[W.a6]},
$isa:1,
$asa:function(){return[W.a6]},
$asm:function(){return[W.a6]},
"%":"FileList"},
j2:{"^":"N;0j:length=","%":"FileWriter"},
j5:{"^":"T;0j:length=","%":"HTMLFormElement"},
a7:{"^":"d;",$isa7:1,"%":"Gamepad"},
j6:{"^":"d;0j:length=","%":"History"},
j7:{"^":"fZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isz")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.z]},
$isr:1,
$asr:function(){return[W.z]},
$asj:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$isa:1,
$asa:function(){return[W.z]},
$asm:function(){return[W.z]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
eu:{"^":"ef;","%":"HTMLDocument"},
j8:{"^":"T;0m:height=,0l:width=","%":"HTMLIFrameElement"},
j9:{"^":"d;0m:height=,0l:width=","%":"ImageBitmap"},
ja:{"^":"d;0m:height=,0l:width=","%":"ImageData"},
jb:{"^":"T;0m:height=,0l:width=","%":"HTMLImageElement"},
jd:{"^":"T;0m:height=,0l:width=","%":"HTMLInputElement"},
jk:{"^":"d;",
k:function(a){return String(a)},
"%":"Location"},
eH:{"^":"T;","%":"HTMLAudioElement;HTMLMediaElement"},
jo:{"^":"d;0j:length=","%":"MediaList"},
jp:{"^":"h3;",
h:function(a,b){return P.S(a.get(H.w(b)))},
w:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gF:function(a){var z=H.t([],[P.f])
this.w(a,new W.eJ(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.f,null]},
$isG:1,
$asG:function(){return[P.f,null]},
"%":"MIDIInputMap"},
eJ:{"^":"q:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
jq:{"^":"h4;",
h:function(a,b){return P.S(a.get(H.w(b)))},
w:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gF:function(a){var z=H.t([],[P.f])
this.w(a,new W.eK(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.f,null]},
$isG:1,
$asG:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
eK:{"^":"q:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
aa:{"^":"d;",$isaa:1,"%":"MimeType"},
jr:{"^":"h6;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isaa")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$asj:function(){return[W.aa]},
$ish:1,
$ash:function(){return[W.aa]},
$isa:1,
$asa:function(){return[W.aa]},
$asm:function(){return[W.aa]},
"%":"MimeTypeArray"},
eL:{"^":"fo;","%":"WheelEvent;DragEvent|MouseEvent"},
z:{"^":"N;",
k:function(a){var z=a.nodeValue
return z==null?this.bj(a):z},
$isz:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
jy:{"^":"h8;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isz")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.z]},
$isr:1,
$asr:function(){return[W.z]},
$asj:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$isa:1,
$asa:function(){return[W.z]},
$asm:function(){return[W.z]},
"%":"NodeList|RadioNodeList"},
jA:{"^":"T;0m:height=,0l:width=","%":"HTMLObjectElement"},
jC:{"^":"N;0m:height=,0l:width=","%":"OffscreenCanvas"},
jD:{"^":"d;0m:height=,0l:width=","%":"PaintSize"},
ac:{"^":"d;0j:length=",$isac:1,"%":"Plugin"},
jF:{"^":"hc;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isac")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$asj:function(){return[W.ac]},
$ish:1,
$ash:function(){return[W.ac]},
$isa:1,
$asa:function(){return[W.ac]},
$asm:function(){return[W.ac]},
"%":"PluginArray"},
jH:{"^":"eL;0m:height=,0l:width=","%":"PointerEvent"},
jM:{"^":"hi;",
h:function(a,b){return P.S(a.get(H.w(b)))},
w:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gF:function(a){var z=H.t([],[P.f])
this.w(a,new W.f5(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.f,null]},
$isG:1,
$asG:function(){return[P.f,null]},
"%":"RTCStatsReport"},
f5:{"^":"q:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},
jN:{"^":"d;0m:height=,0l:width=","%":"Screen"},
jO:{"^":"T;0j:length=","%":"HTMLSelectElement"},
ad:{"^":"N;",$isad:1,"%":"SourceBuffer"},
jQ:{"^":"cS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isad")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.ad]},
$isr:1,
$asr:function(){return[W.ad]},
$asj:function(){return[W.ad]},
$ish:1,
$ash:function(){return[W.ad]},
$isa:1,
$asa:function(){return[W.ad]},
$asm:function(){return[W.ad]},
"%":"SourceBufferList"},
ae:{"^":"d;",$isae:1,"%":"SpeechGrammar"},
jR:{"^":"hk;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isae")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$asj:function(){return[W.ae]},
$ish:1,
$ash:function(){return[W.ae]},
$isa:1,
$asa:function(){return[W.ae]},
$asm:function(){return[W.ae]},
"%":"SpeechGrammarList"},
af:{"^":"d;0j:length=",$isaf:1,"%":"SpeechRecognitionResult"},
jT:{"^":"hn;",
h:function(a,b){return this.az(a,H.w(b))},
w:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=this.bK(a,z)
if(y==null)return
b.$2(y,this.az(a,y))}},
gF:function(a){var z=H.t([],[P.f])
this.w(a,new W.fi(z))
return z},
gj:function(a){return a.length},
az:function(a,b){return a.getItem(b)},
bK:function(a,b){return a.key(b)},
$asO:function(){return[P.f,P.f]},
$isG:1,
$asG:function(){return[P.f,P.f]},
"%":"Storage"},
fi:{"^":"q:13;a",
$2:function(a,b){return C.a.n(this.a,a)}},
ag:{"^":"d;",$isag:1,"%":"CSSStyleSheet|StyleSheet"},
jW:{"^":"d;0l:width=","%":"TextMetrics"},
ah:{"^":"N;",$isah:1,"%":"TextTrack"},
ai:{"^":"N;",$isai:1,"%":"TextTrackCue|VTTCue"},
jX:{"^":"hs;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isai")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.ai]},
$isr:1,
$asr:function(){return[W.ai]},
$asj:function(){return[W.ai]},
$ish:1,
$ash:function(){return[W.ai]},
$isa:1,
$asa:function(){return[W.ai]},
$asm:function(){return[W.ai]},
"%":"TextTrackCueList"},
jY:{"^":"cV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isah")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.ah]},
$isr:1,
$asr:function(){return[W.ah]},
$asj:function(){return[W.ah]},
$ish:1,
$ash:function(){return[W.ah]},
$isa:1,
$asa:function(){return[W.ah]},
$asm:function(){return[W.ah]},
"%":"TextTrackList"},
k0:{"^":"d;0j:length=","%":"TimeRanges"},
aj:{"^":"d;",$isaj:1,"%":"Touch"},
k1:{"^":"hx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isaj")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.aj]},
$isr:1,
$asr:function(){return[W.aj]},
$asj:function(){return[W.aj]},
$ish:1,
$ash:function(){return[W.aj]},
$isa:1,
$asa:function(){return[W.aj]},
$asm:function(){return[W.aj]},
"%":"TouchList"},
k2:{"^":"d;0j:length=","%":"TrackDefaultList"},
fo:{"^":"em;","%":"CompositionEvent|FocusEvent|KeyboardEvent|TextEvent|TouchEvent;UIEvent"},
kf:{"^":"d;",
k:function(a){return String(a)},
"%":"URL"},
kh:{"^":"eH;0m:height=,0l:width=","%":"HTMLVideoElement"},
ki:{"^":"N;0j:length=","%":"VideoTrackList"},
kj:{"^":"N;0m:height=,0l:width=","%":"VisualViewport"},
kk:{"^":"d;0l:width=","%":"VTTRegion"},
fu:{"^":"N;",
gbR:function(a){var z,y,x
z=P.D
y=new P.a1(0,$.C,[z])
x=H.l(new W.fv(new P.hq(y,[z])),{func:1,ret:-1,args:[P.D]})
this.bF(a)
this.bL(a,W.hT(x,z))
return y},
bL:function(a,b){return a.requestAnimationFrame(H.b0(H.l(b,{func:1,ret:-1,args:[P.D]}),1))},
bF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fv:{"^":"q:14;a",
$1:function(a){var z=this.a
a=H.bn(H.bY(a),{futureOr:1,type:H.p(z,0)})
z=z.a
if(z.a!==0)H.a0(P.fg("Future already completed"))
z.au(a)}},
kq:{"^":"hC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isa5")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a5]},
$isr:1,
$asr:function(){return[W.a5]},
$asj:function(){return[W.a5]},
$ish:1,
$ash:function(){return[W.a5]},
$isa:1,
$asa:function(){return[W.a5]},
$asm:function(){return[W.a5]},
"%":"CSSRuleList"},
kr:{"^":"eg;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.aI(b,"$isK",[P.D],"$asK"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.n(b)
z=a.width===z.gl(b)&&a.height===z.gm(b)}else z=!1
else z=!1
return z},
gu:function(a){return W.cL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gm:function(a){return a.height},
gl:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ks:{"^":"hE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isa7")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a7]},
$isr:1,
$asr:function(){return[W.a7]},
$asj:function(){return[W.a7]},
$ish:1,
$ash:function(){return[W.a7]},
$isa:1,
$asa:function(){return[W.a7]},
$asm:function(){return[W.a7]},
"%":"GamepadList"},
kt:{"^":"hG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isz")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.z]},
$isr:1,
$asr:function(){return[W.z]},
$asj:function(){return[W.z]},
$ish:1,
$ash:function(){return[W.z]},
$isa:1,
$asa:function(){return[W.z]},
$asm:function(){return[W.z]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ku:{"^":"hI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isaf")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$asj:function(){return[W.af]},
$ish:1,
$ash:function(){return[W.af]},
$isa:1,
$asa:function(){return[W.af]},
$asm:function(){return[W.af]},
"%":"SpeechRecognitionResultList"},
kv:{"^":"hK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$isag")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.ag]},
$isr:1,
$asr:function(){return[W.ag]},
$asj:function(){return[W.ag]},
$ish:1,
$ash:function(){return[W.ag]},
$isa:1,
$asa:function(){return[W.ag]},
$asm:function(){return[W.ag]},
"%":"StyleSheetList"},
m:{"^":"c;$ti",
gv:function(a){return new W.eo(a,this.gj(a),-1,[H.b2(this,a,"m",0)])}},
eo:{"^":"c;a,b,c,0d,$ti",
sax:function(a){this.d=H.v(a,H.p(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sax(J.aS(this.a,z))
this.c=z
return!0}this.sax(null)
this.c=y
return!1},
gA:function(a){return this.d}},
fE:{"^":"d+e9;"},
fF:{"^":"d+j;"},
fG:{"^":"fF+m;"},
fH:{"^":"d+j;"},
fI:{"^":"fH+m;"},
fK:{"^":"d+j;"},
fL:{"^":"fK+m;"},
fY:{"^":"d+j;"},
fZ:{"^":"fY+m;"},
h3:{"^":"d+O;"},
h4:{"^":"d+O;"},
h5:{"^":"d+j;"},
h6:{"^":"h5+m;"},
h7:{"^":"d+j;"},
h8:{"^":"h7+m;"},
hb:{"^":"d+j;"},
hc:{"^":"hb+m;"},
hi:{"^":"d+O;"},
cR:{"^":"N+j;"},
cS:{"^":"cR+m;"},
hj:{"^":"d+j;"},
hk:{"^":"hj+m;"},
hn:{"^":"d+O;"},
hr:{"^":"d+j;"},
hs:{"^":"hr+m;"},
cU:{"^":"N+j;"},
cV:{"^":"cU+m;"},
hw:{"^":"d+j;"},
hx:{"^":"hw+m;"},
hB:{"^":"d+j;"},
hC:{"^":"hB+m;"},
hD:{"^":"d+j;"},
hE:{"^":"hD+m;"},
hF:{"^":"d+j;"},
hG:{"^":"hF+m;"},
hH:{"^":"d+j;"},
hI:{"^":"hH+m;"},
hJ:{"^":"d+j;"},
hK:{"^":"hJ+m;"}}],["","",,P,{"^":"",
S:function(a){var z,y,x,w,v
if(a==null)return
z=P.a9(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.a4)(y),++w){v=H.w(y[w])
z.i(0,v,a[v])}return z},
hX:function(a,b){var z={}
a.w(0,new P.hY(z))
return z},
cl:function(){var z=$.ck
if(z==null){z=J.bu(window.navigator.userAgent,"Opera",0)
$.ck=z}return z},
ee:function(){var z,y
z=$.ch
if(z!=null)return z
y=$.ci
if(y==null){y=J.bu(window.navigator.userAgent,"Firefox",0)
$.ci=y}if(y)z="-moz-"
else{y=$.cj
if(y==null){y=!P.cl()&&J.bu(window.navigator.userAgent,"Trident/",0)
$.cj=y}if(y)z="-ms-"
else z=P.cl()?"-o-":"-webkit-"}$.ch=z
return z},
hY:{"^":"q:6;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":""}],["","",,P,{"^":"",hd:{"^":"c;"},K:{"^":"hd;$ti"}}],["","",,P,{"^":"",dW:{"^":"d;",$isdW:1,"%":"SVGAnimatedLength"},iM:{"^":"F;0m:height=,0l:width=","%":"SVGFEBlendElement"},iN:{"^":"F;0m:height=,0l:width=","%":"SVGFEColorMatrixElement"},iO:{"^":"F;0m:height=,0l:width=","%":"SVGFEComponentTransferElement"},iP:{"^":"F;0m:height=,0l:width=","%":"SVGFECompositeElement"},iQ:{"^":"F;0m:height=,0l:width=","%":"SVGFEConvolveMatrixElement"},iR:{"^":"F;0m:height=,0l:width=","%":"SVGFEDiffuseLightingElement"},iS:{"^":"F;0m:height=,0l:width=","%":"SVGFEDisplacementMapElement"},iT:{"^":"F;0m:height=,0l:width=","%":"SVGFEFloodElement"},iU:{"^":"F;0m:height=,0l:width=","%":"SVGFEGaussianBlurElement"},iV:{"^":"F;0m:height=,0l:width=","%":"SVGFEImageElement"},iW:{"^":"F;0m:height=,0l:width=","%":"SVGFEMergeElement"},iX:{"^":"F;0m:height=,0l:width=","%":"SVGFEMorphologyElement"},iY:{"^":"F;0m:height=,0l:width=","%":"SVGFEOffsetElement"},iZ:{"^":"F;0m:height=,0l:width=","%":"SVGFESpecularLightingElement"},j_:{"^":"F;0m:height=,0l:width=","%":"SVGFETileElement"},j0:{"^":"F;0m:height=,0l:width=","%":"SVGFETurbulenceElement"},j3:{"^":"F;0m:height=,0l:width=","%":"SVGFilterElement"},j4:{"^":"aV;0m:height=,0l:width=","%":"SVGForeignObjectElement"},et:{"^":"aV;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aV:{"^":"F;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},jc:{"^":"aV;0m:height=,0l:width=","%":"SVGImageElement"},az:{"^":"d;",$isaz:1,"%":"SVGLength"},jj:{"^":"h0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.E(a,b)},
i:function(a,b,c){H.i(c,"$isaz")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
E:function(a,b){return a.getItem(b)},
$asj:function(){return[P.az]},
$ish:1,
$ash:function(){return[P.az]},
$isa:1,
$asa:function(){return[P.az]},
$asm:function(){return[P.az]},
"%":"SVGLengthList"},jl:{"^":"F;0m:height=,0l:width=","%":"SVGMaskElement"},aA:{"^":"d;",$isaA:1,"%":"SVGNumber"},jz:{"^":"ha;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.E(a,b)},
i:function(a,b,c){H.i(c,"$isaA")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
E:function(a,b){return a.getItem(b)},
$asj:function(){return[P.aA]},
$ish:1,
$ash:function(){return[P.aA]},
$isa:1,
$asa:function(){return[P.aA]},
$asm:function(){return[P.aA]},
"%":"SVGNumberList"},jE:{"^":"F;0m:height=,0l:width=","%":"SVGPatternElement"},jG:{"^":"d;0j:length=","%":"SVGPointList"},jI:{"^":"d;0m:height=,0l:width=","%":"SVGRect"},jJ:{"^":"et;0m:height=,0l:width=","%":"SVGRectElement"},jU:{"^":"hp;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.E(a,b)},
i:function(a,b,c){H.w(c)
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
E:function(a,b){return a.getItem(b)},
$asj:function(){return[P.f]},
$ish:1,
$ash:function(){return[P.f]},
$isa:1,
$asa:function(){return[P.f]},
$asm:function(){return[P.f]},
"%":"SVGStringList"},F:{"^":"cm;","%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},jV:{"^":"aV;0m:height=,0l:width=","%":"SVGSVGElement"},aD:{"^":"d;",$isaD:1,"%":"SVGTransform"},k3:{"^":"hz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return this.E(a,b)},
i:function(a,b,c){H.i(c,"$isaD")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
E:function(a,b){return a.getItem(b)},
$asj:function(){return[P.aD]},
$ish:1,
$ash:function(){return[P.aD]},
$isa:1,
$asa:function(){return[P.aD]},
$asm:function(){return[P.aD]},
"%":"SVGTransformList"},kg:{"^":"aV;0m:height=,0l:width=","%":"SVGUseElement"},h_:{"^":"d+j;"},h0:{"^":"h_+m;"},h9:{"^":"d+j;"},ha:{"^":"h9+m;"},ho:{"^":"d+j;"},hp:{"^":"ho+m;"},hy:{"^":"d+j;"},hz:{"^":"hy+m;"}}],["","",,P,{"^":"",ax:{"^":"c;",$ish:1,
$ash:function(){return[P.a2]},
$isa:1,
$asa:function(){return[P.a2]},
$isfn:1}}],["","",,P,{"^":"",iu:{"^":"d;0j:length=","%":"AudioBuffer"},iv:{"^":"fC;",
h:function(a,b){return P.S(a.get(H.w(b)))},
w:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.S(y.value[1]))}},
gF:function(a){var z=H.t([],[P.f])
this.w(a,new P.dY(z))
return z},
gj:function(a){return a.size},
$asO:function(){return[P.f,null]},
$isG:1,
$asG:function(){return[P.f,null]},
"%":"AudioParamMap"},dY:{"^":"q:2;a",
$2:function(a,b){return C.a.n(this.a,a)}},iw:{"^":"N;0j:length=","%":"AudioTrackList"},dZ:{"^":"N;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},jB:{"^":"dZ;0j:length=","%":"OfflineAudioContext"},fC:{"^":"d+O;"}}],["","",,P,{"^":"",e0:{"^":"d;",$ise0:1,"%":"WebGLBuffer"},f_:{"^":"d;",$isf_:1,"%":"WebGLProgram"},jK:{"^":"d;",
aF:function(a,b){return a.activeTexture(b)},
aG:function(a,b,c){return a.attachShader(b,c)},
aH:function(a,b,c){return a.bindBuffer(b,c)},
aJ:function(a,b,c){return a.bindTexture(b,c)},
aK:function(a,b){return a.blendEquation(b)},
aL:function(a,b,c){return a.blendFunc(b,c)},
aM:function(a,b,c,d){return a.bufferData(b,c,d)},
aN:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
aO:function(a,b){return a.compileShader(b)},
aP:function(a){return a.createBuffer()},
aQ:function(a){return a.createProgram()},
aR:function(a,b){return a.createShader(b)},
aS:function(a,b){return a.depthMask(b)},
aT:function(a,b){return a.disable(b)},
aU:function(a,b,c,d){return a.drawArrays(b,c,d)},
aV:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aW:function(a,b){return a.enable(b)},
aX:function(a,b){return a.enableVertexAttribArray(b)},
V:function(a){return P.S(a.getContextAttributes())},
a8:function(a,b){return a.getProgramInfoLog(b)},
a9:function(a,b,c){return a.getProgramParameter(b,c)},
ab:function(a,b){return a.getShaderInfoLog(b)},
ac:function(a,b,c){return a.getShaderParameter(b,c)},
ad:function(a,b,c){return a.getUniformLocation(b,c)},
aZ:function(a,b){return a.linkProgram(b)},
af:function(a,b,c){return a.shaderSource(b,c)},
ah:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b2:function(a,b,c){return a.uniform1f(b,c)},
b3:function(a,b,c){return a.uniform1i(b,c)},
b4:function(a,b,c){return a.uniform2fv(b,c)},
b5:function(a,b,c){return a.uniform3fv(b,c)},
b6:function(a,b,c){return a.uniform4fv(b,c)},
b7:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
b8:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
b9:function(a,b){return a.useProgram(b)},
ba:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},jL:{"^":"d;",
bS:function(a,b){return a.beginTransformFeedback(b)},
bV:function(a,b){return a.bindVertexArray(b)},
bY:function(a){return a.createVertexArray()},
bZ:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
c_:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
c0:function(a){return a.endTransformFeedback()},
cc:function(a,b,c,d){this.bP(a,b,H.u(c,"$isa",[P.f],"$asa"),d)
return},
bP:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
cd:function(a,b,c){return a.vertexAttribDivisor(b,c)},
aF:function(a,b){return a.activeTexture(b)},
aG:function(a,b,c){return a.attachShader(b,c)},
aH:function(a,b,c){return a.bindBuffer(b,c)},
aJ:function(a,b,c){return a.bindTexture(b,c)},
aK:function(a,b){return a.blendEquation(b)},
aL:function(a,b,c){return a.blendFunc(b,c)},
aM:function(a,b,c,d){return a.bufferData(b,c,d)},
aN:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
aO:function(a,b){return a.compileShader(b)},
aP:function(a){return a.createBuffer()},
aQ:function(a){return a.createProgram()},
aR:function(a,b){return a.createShader(b)},
aS:function(a,b){return a.depthMask(b)},
aT:function(a,b){return a.disable(b)},
aU:function(a,b,c,d){return a.drawArrays(b,c,d)},
aV:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aW:function(a,b){return a.enable(b)},
aX:function(a,b){return a.enableVertexAttribArray(b)},
V:function(a){return P.S(a.getContextAttributes())},
a8:function(a,b){return a.getProgramInfoLog(b)},
a9:function(a,b,c){return a.getProgramParameter(b,c)},
ab:function(a,b){return a.getShaderInfoLog(b)},
ac:function(a,b,c){return a.getShaderParameter(b,c)},
ad:function(a,b,c){return a.getUniformLocation(b,c)},
aZ:function(a,b){return a.linkProgram(b)},
af:function(a,b,c){return a.shaderSource(b,c)},
ah:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b2:function(a,b,c){return a.uniform1f(b,c)},
b3:function(a,b,c){return a.uniform1i(b,c)},
b4:function(a,b,c){return a.uniform2fv(b,c)},
b5:function(a,b,c){return a.uniform3fv(b,c)},
b6:function(a,b,c){return a.uniform4fv(b,c)},
b7:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
b8:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
b9:function(a,b){return a.useProgram(b)},
ba:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"},fa:{"^":"d;",$isfa:1,"%":"WebGLShader"},fk:{"^":"d;",$isfk:1,"%":"WebGLTexture"},fp:{"^":"d;",$isfp:1,"%":"WebGLUniformLocation"},ft:{"^":"d;",$isft:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",jS:{"^":"hm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return P.S(this.bJ(a,b))},
i:function(a,b,c){H.i(c,"$isG")
throw H.b(P.y("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
bJ:function(a,b){return a.item(b)},
$asj:function(){return[[P.G,,,]]},
$ish:1,
$ash:function(){return[[P.G,,,]]},
$isa:1,
$asa:function(){return[[P.G,,,]]},
$asm:function(){return[[P.G,,,]]},
"%":"SQLResultSetRowList"},hl:{"^":"d+j;"},hm:{"^":"hl+m;"}}],["","",,G,{"^":"",
fw:function(a){var z,y,x,w
z=H.t(a.split("\n"),[P.f])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.k(z,y)
C.a.i(z,y,w+H.e(z[y]))}return C.a.N(z,"\n")},
cJ:function(a,b,c){var z,y,x,w
z=J.n(a)
y=z.aR(a,b)
z.af(a,y,c)
z.aO(a,y)
x=H.bS(z.ac(a,y,35713))
if(x!=null&&!x){w=z.ab(a,y)
P.aO("E:Compilation failed:")
P.aO("E:"+G.fw(c))
P.aO("E:Failure:")
P.aO(C.h.C("E:",w))
throw H.b(w)}return y},
cp:function(a,b){var z,y,x,w,v
H.u(a,"$isa",[T.J],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bw(a[y])
w=b.length
if(z>=w)return H.k(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.k(a,y)
v=J.bx(a[y])
if(x>=w)return H.k(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.k(a,y)
v=J.c7(a[y])
if(z>=w)return H.k(b,z)
b[z]=v}return b},
eq:function(a,b){var z,y,x,w
H.u(a,"$isa",[T.P],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bw(a[y])
w=b.length
if(z>=w)return H.k(b,z)
b[z]=x;++z
if(y>=a.length)return H.k(a,y)
x=J.bx(a[y])
if(z>=w)return H.k(b,z)
b[z]=x}return b},
er:function(a,b){var z,y,x,w,v
H.u(a,"$isa",[T.bg],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bw(a[y])
w=b.length
if(z>=w)return H.k(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.k(a,y)
v=J.bx(a[y])
if(x>=w)return H.k(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.k(a,y)
x=J.c7(a[y])
if(v>=w)return H.k(b,v)
b[v]=x
if(y>=a.length)return H.k(a,y)
C.r.i(b,z+3,J.dJ(a[y]))}return b},
ep:function(a,b){var z,y
H.u(a,"$isa",[[P.a,P.A]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.i(b,z,J.aS(a[y],0))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+1,J.aS(a[y],1))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+2,J.aS(a[y],2))
if(y>=a.length)return H.k(a,y)
C.m.i(b,z+3,J.aS(a[y],3))}return b},
fW:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.a8(z,[H.p(z,0)]),y=y.gv(y),x=b.x,w=[[P.a,P.A]],v=[P.a2],u=[T.bg],t=[T.J],s=[T.P];y.t();){r=y.d
if(!x.U(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.d4>0)H.bs("I: "+r)
continue}q=z.h(0,r)
switch($.W().h(0,r).a){case"vec2":b.L(r,G.eq(H.b5(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.L(r,G.cp(H.b5(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.L(r,G.er(H.b5(q,"$isa",u,"$asa"),null),4)
break
case"float":b.L(r,new Float32Array(H.bi(H.b5(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.L(r,G.ep(H.b5(q,"$isa",w,"$asa"),null),4)
break}}},
bI:{"^":"c;"},
bL:{"^":"bI;d,a,b,c",
k:function(a){var z,y,x,w
z=H.t(["{"+new H.cG(H.i4(this)).k(0)+"}["+this.a+"]"],[P.f])
for(y=this.d,x=new H.a8(y,[H.p(y,0)]),x=x.gv(x);x.t();){w=x.d
C.a.n(z,H.e(w)+": "+H.e(y.h(0,w)))}return C.a.N(z,"\n")}},
e2:{"^":"c;0a,b",
aY:function(a,b,c){J.dG(this.a,b)
if(c>0)J.dU(this.a,b,c)},
bb:function(a,b,c,d,e,f,g,h){J.bt(this.a,34962,b)
J.dV(this.a,c,d,e,!1,g,h)}},
en:{"^":"c;"},
co:{"^":"c;a,b,c,d"},
es:{"^":"c;a,b,c,d,e",
aj:function(a){switch($.W().h(0,a).a){case"vec2":this.e.i(0,a,H.t([],[T.P]))
break
case"vec3":this.e.i(0,a,H.t([],[T.J]))
break
case"vec4":this.e.i(0,a,H.t([],[T.bg]))
break
case"float":this.e.i(0,a,H.t([],[P.a2]))
break
case"uvec4":this.e.i(0,a,H.t([],[[P.a,P.A]]))
break}},
bn:function(a,b){var z,y,x,w,v,u
z=[T.P]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new Float32Array(2)
u=w.a
v[1]=u[1]
v[0]=u[0]
z.n(y,new T.P(v))}},
bo:function(a,b){var z,y,x,w,v
z=[T.J]
H.u(b,"$isa",z,"$asa")
y=H.u(this.e.h(0,a),"$isa",z,"$asa")
for(z=y&&C.a,x=0;x<4;++x){w=b[x]
v=new T.J(new Float32Array(3))
v.ae(w)
z.n(y,v)}},
bq:function(a){var z,y,x,w,v
H.u(a,"$isa",[T.J],"$asa")
z=this.d
y=z.length
C.a.n(this.c,new G.co(y,y+1,y+2,y+3))
for(x=0;x<4;++x){w=a[x]
v=new T.J(new Float32Array(3))
v.ae(w)
C.a.n(z,v)}},
bt:function(){var z,y,x,w,v,u,t,s,r
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.t(y,[P.A])
for(y=this.b,w=0,v=0;!1;++v){if(v>=0)return H.k(y,v)
u=y[v]
C.a.i(x,w,u.gci(u))
C.a.i(x,w+1,u.gcj(u))
C.a.i(x,w+2,u.gck(u))
w+=3}for(y=z.length,v=0;v<z.length;z.length===y||(0,H.a4)(z),++v){t=z[v]
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
z=H.t(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.f])
for(y=this.e,x=new H.a8(y,[H.p(y,0)]),x=x.gv(x);x.t();){w=x.d
v=$.W().h(0,w).a
C.a.n(z,H.e(w)+"["+v+","+y.h(0,w).length+"]")}return C.a.N(z," ")}},
eI:{"^":"bI;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sa_:function(a){this.cx=H.u(a,"$isa",[P.A],"$asa")},
ai:function(a,b,c){var z,y
C.h.W(a,0)
H.i(b,"$isax")
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bt(z.a,34962,y)
J.c5(z.a,34962,b,35048)},
bu:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
L:function(a,b,c){var z,y,x,w,v
z=J.c1(a,0)===105
if(z&&this.z===0)this.z=C.e.bl(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bv(x.a))
this.ai(a,b,c)
w=$.W().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.b6(x.a,this.e)
x.aY(0,v,z?1:0)
x.bb(0,y.h(0,a),v,w.ak(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.t(["Faces:"+(z==null?0:z.length)],[P.f])
for(z=this.cy,x=new H.a8(z,[H.p(z,0)]),x=x.gv(x);x.t();){w=x.d
C.a.n(y,H.e(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.a.N(y,"  ")}},
iK:{"^":"c;"},
f3:{"^":"bI;d,e,f,r,x,y,z,Q,0ch,a,b,c",
bw:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){t=z[u]
x.i(0,t,J.c8(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){t=z[u]
x.i(0,t,J.c8(w.a,v,t))}},
bx:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.t([],[P.f])
x=H.t([],[P.f])
for(y=new H.a8(y,[H.p(y,0)]),y=y.gv(y);y.t();){w=y.d
if(!z.U(0,w))C.a.n(x,w)}for(z=this.x,z=P.cM(z,z.r,H.p(z,0)),y=this.Q;z.t();){w=z.d
if(!y.bW(0,w))C.a.n(x,w)}return x},
by:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(b,"$isG",[P.f,P.c],"$asG")
z=Date.now()
for(y=new H.a8(b,[H.p(b,0)]),y=y.gv(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.c1(s,0)){case 117:if(w.U(0,s)){r=b.h(0,s)
if(v.U(0,s))H.bs("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.i(0,s,a)
q=$.W().h(0,s)
if(q==null)H.a0("unknown "+s)
p=w.h(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.L(r)
J.by(x.a,p,r)}break
case"float":if(q.c===0){H.d3(r)
J.dQ(x.a,p,r)}break
case"mat4":if(q.c===0){s=C.l.gP(H.a3(r,"$isjn"))
J.dS(x.a,p,!1,s)}break
case"mat3":if(q.c===0){s=C.l.gP(H.a3(r,"$isjm"))
J.dR(x.a,p,!1,s)}break
case"vec4":if(q.c===0){s=C.l.gP(H.a3(r,"$isbg"))
J.cb(x.a,p,s)}else{H.i(r,"$isax")
J.cb(x.a,p,r)}break
case"vec3":if(q.c===0){s=C.l.gP(H.a3(r,"$isJ"))
J.ca(x.a,p,s)}else{H.i(r,"$isax")
J.ca(x.a,p,r)}break
case"vec2":s=q.c
o=x.a
if(s===0)J.c9(o,p,H.a3(r,"$isP").a)
else J.c9(o,p,H.i(r,"$isax"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aN(s)
J.c2(x.a,33984+s)
s=H.a3(r,"$isfj").bv()
J.c4(x.a,3553,s)
s=this.ch
J.by(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aN(s)
J.c2(x.a,33984+s)
s=H.a3(r,"$isfj").bv()
J.c4(x.a,34067,s)
s=this.ch
J.by(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.C()
this.ch=s+1
break
default:H.bs("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.h(0,s)
switch(s){case"cDepthTest":s=J.ar(r,!0)
o=x.a
if(s)J.b7(o,2929)
else J.dB(o,2929)
break
case"cStencilFunc":H.a3(r,"$isk_")
r.gc3()
J.b7(x.a,2960)
s=r.gc3()
o=r.gcn(r)
n=r.gcm(r)
J.dO(x.a,s,o,n)
break
case"cDepthWrite":H.bS(r)
J.dA(x.a,r)
break
case"cBlendEquation":H.a3(r,"$isjZ")
r.gc1()
J.b7(x.a,3042)
s=r.gcg()
o=r.gcl()
J.dv(x.a,s,o)
o=r.gc1()
J.du(x.a,o)
break}++t
break}}m=P.eh(0,0,0,Date.now()-new P.ba(z,!1).a,0,0)
""+t
m.k(0)},
bs:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.u(b,"$isa",[G.bL],"$asa")
Date.now()
z=this.d
J.dT(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aA()}for(x=0;x<1;++x){w=b[x]
this.by(w.a,w.d)}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.at()}for(v=a.cy,v=new H.a8(v,[H.p(v,0)]),v=v.gv(v);v.t();)y.n(0,v.d)
u=this.bx()
if(u.length!==0)P.aO("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
J.b6(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.bu()
s=a.Q
r=a.z
if(t)J.dt(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.dF(q,y,v,s,0,r)
else J.dE(q,y,v,s,0)}else{s=z.a
if(r>1)J.dD(s,y,0,v,r)
else J.dC(s,y,0,v)}if(t)J.dH(z.a)},
br:function(a,b){return this.bs(a,b,null)},
p:{
f4:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.f
y=P.cv(null,null,null,z)
x=c.b
w=d.b
v=H.u(c.f,"$isa",[z],"$asa")
u=J.dy(b.a)
t=G.cJ(b.a,35633,x)
J.c3(b.a,u,t)
s=G.cJ(b.a,35632,w)
J.c3(b.a,u,s)
if(v.length>0)J.dP(b.a,u,v,35980)
J.dN(b.a,u)
if(!H.bS(J.dM(b.a,u,35714)))H.a0(J.dL(b.a,u))
z=new G.f3(b,c,d,u,P.eD(c.c,z),P.a9(z,P.c),P.a9(z,z),y,a,!1,!0)
z.bw(a,b,c,d)
return z}}},
x:{"^":"c;a,b,c",
ak:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fb:{"^":"c;a,0b,c,d,e,f,r,x",
bm:function(a){var z,y,x,w
H.u(a,"$isa",[P.f],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.n(z,w)
y.i(0,w,this.r);++this.r}C.a.ag(z)},
bp:function(a){var z,y
H.u(a,"$isa",[P.f],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.n(z,a[y])
C.a.ag(z)},
al:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.f]
H.u(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.t(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.a4)(y),++u){t=y[u]
s=$.W().h(0,t)
C.a.n(w,"layout (location="+H.e(v.h(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.n(w,"")
r=x?"in":"out"
if(x)C.a.n(w,"out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.k(z,u)
q=z[u]
s=$.W().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){q=z[u]
s=$.W().h(0,q)
C.a.n(w,r+" "+s.a+" "+H.e(q)+";")}C.a.n(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.a4)(z),++u){q=z[u]
s=$.W().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.n(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.n(w,"")
if(a)C.a.n(w,"void main(void) {")
C.a.bQ(w,b)
if(a)C.a.n(w,"}")
return C.a.N(w,"\n")},
p:{
cB:function(a){var z,y
z=P.f
y=[z]
return new G.fb(a,H.t([],y),H.t([],y),H.t([],y),H.t([],y),0,P.a9(z,P.A))}}}}],["","",,A,{"^":"",
d7:function(a){var z,y
z=C.r.c2(H.u(a,"$ish",[P.c],"$ash"),0,new A.i6(),P.A)
if(typeof z!=="number")return H.aN(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
i6:{"^":"q:15;",
$2:function(a,b){var z,y
H.L(a)
z=J.as(b)
if(typeof a!=="number")return a.C()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",P:{"^":"c;a",
J:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.P){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gu:function(a){return A.d7(this.a)},
h:function(a,b){var z=this.a
if(b>=2)return H.k(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gbc:function(a){return this.a[0]},
gbd:function(a){return this.a[1]}},J:{"^":"c;a",
gP:function(a){return this.a},
K:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
ae:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.J){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gu:function(a){return A.d7(this.a)},
h:function(a,b){var z=this.a
if(b>=3)return H.k(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbc:function(a){return this.a[0]},
gbd:function(a){return this.a[1]},
gce:function(a){return this.a[2]}},bg:{"^":"c;"}}],["","",,L,{"^":"",
d9:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=H.i(C.z.c8(document,"#webgl-canvas"),"$isbB")
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
w=new G.e2(z)
v=P.f
u=P.c
t=(z&&C.y).bf(z,"webgl2",P.cu(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],v,u))
w.a=t
if(t==null)H.a0(P.cn('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.e(J.dK(t))
if($.d4>0)P.aO("I: "+s)
J.dw(t,0,0,0,1)
J.b7(t,2929)
r=G.f4("gyroid",w,$.ds(),$.dr())
t=new T.J(new Float32Array(3))
t.K(-1,-1,0)
s=new T.J(new Float32Array(3))
s.K(1,-1,0)
q=new T.J(new Float32Array(3))
q.K(1,1,0)
p=new T.J(new Float32Array(3))
p.K(-1,1,0)
o=[T.J]
n=H.t([t,s,q,p],o)
t=new T.P(new Float32Array(2))
t.J(0,0)
s=new T.P(new Float32Array(2))
s.J(1,0)
q=new T.P(new Float32Array(2))
q.J(1,1)
p=new T.P(new Float32Array(2))
p.J(0,1)
m=H.t([t,s,q,p],[T.P])
l=new T.J(new Float32Array(3))
l.K(0,0,1)
k=H.t([l,l,l,l],o)
t=H.t([],[G.en])
s=H.t([],[G.co])
o=H.t([],o)
j=new G.es(!1,t,s,o,P.a9(v,[P.a,,]))
j.aj("aTexUV")
j.bq(n)
j.bn("aTexUV",m)
j.aj("aNormal")
j.bo("aNormal",k)
t=r.d
s=r.e.x
q=P.a9(v,u)
p=J.dz(t.a)
i=new G.eI(t,p,4,q,s,0,-1,P.a9(v,P.ax),"meshdata:quad",!1,!0)
o=G.cp(o,null)
q.i(0,"aPosition",J.bv(t.a))
i.ch=o
i.ai("aPosition",o,3)
h=$.W().h(0,"aPosition")
if(h==null)H.a0("Unknown canonical aPosition")
g=s.h(0,"aPosition")
J.b6(t.a,p)
t.aY(0,g,0)
t.bb(0,q.h(0,"aPosition"),g,h.ak(),5126,!1,0,0)
s=H.u(j.bt(),"$isa",[P.A],"$asa")
i.y=J.bv(t.a)
q=i.ch.length
if(q<768){i.sa_(new Uint8Array(H.bi(s)))
i.Q=5121}else if(q<196608){i.sa_(new Uint16Array(H.bi(s)))
i.Q=5123}else{i.sa_(new Uint32Array(H.bi(s)))
i.Q=5125}J.b6(t.a,p)
s=i.y
q=i.cx
J.bt(t.a,34963,s)
J.c5(t.a,34963,q,35048)
G.fW(j,i)
new L.ii(new G.bL(P.a9(v,u),"plain",!1,!0),y,x,r,i).$1(0)},
ii:{"^":"q:16;a,b,c,d,e",
$1:function(a){var z,y,x,w,v
H.bY(a)
z=this.a
if(typeof a!=="number")return a.cf()
y=z.d
y.i(0,"uTime",a/1000)
x=this.b
if(typeof x!=="number")return H.aN(x)
w=this.c
if(typeof w!=="number")return H.aN(w)
v=new T.P(new Float32Array(2))
v.J(x,w)
y.i(0,"uCanvasSize",v)
this.d.br(this.e,H.t([z],[G.bL]))
C.Y.gbR(window).b0(this,-1)}}},1]]
setupProgram(dart,0,0)
J.E=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cq.prototype
return J.ez.prototype}if(typeof a=="string")return J.aX.prototype
if(a==null)return J.cr.prototype
if(typeof a=="boolean")return J.ey.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.c)return a
return J.bp(a)}
J.aL=function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.c)return a
return J.bp(a)}
J.i0=function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.c)return a
return J.bp(a)}
J.i1=function(a){if(typeof a=="number")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aE.prototype
return a}
J.i2=function(a){if(typeof a=="number")return J.bd.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aE.prototype
return a}
J.i3=function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aE.prototype
return a}
J.n=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.c)return a
return J.bp(a)}
J.bo=function(a){if(a==null)return a
if(!(a instanceof P.c))return J.aE.prototype
return a}
J.ar=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.E(a).B(a,b)}
J.X=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.i1(a).G(a,b)}
J.aS=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ie(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aL(a).h(a,b)}
J.c1=function(a,b){return J.i3(a).W(a,b)}
J.c2=function(a,b){return J.n(a).aF(a,b)}
J.c3=function(a,b,c){return J.n(a).aG(a,b,c)}
J.dt=function(a,b){return J.n(a).bS(a,b)}
J.bt=function(a,b,c){return J.n(a).aH(a,b,c)}
J.c4=function(a,b,c){return J.n(a).aJ(a,b,c)}
J.b6=function(a,b){return J.n(a).bV(a,b)}
J.du=function(a,b){return J.n(a).aK(a,b)}
J.dv=function(a,b,c){return J.n(a).aL(a,b,c)}
J.c5=function(a,b,c,d){return J.n(a).aM(a,b,c,d)}
J.dw=function(a,b,c,d,e){return J.n(a).aN(a,b,c,d,e)}
J.dx=function(a,b){return J.i2(a).I(a,b)}
J.bu=function(a,b,c){return J.aL(a).bX(a,b,c)}
J.bv=function(a){return J.n(a).aP(a)}
J.dy=function(a){return J.n(a).aQ(a)}
J.dz=function(a){return J.n(a).bY(a)}
J.dA=function(a,b){return J.n(a).aS(a,b)}
J.dB=function(a,b){return J.n(a).aT(a,b)}
J.dC=function(a,b,c,d){return J.n(a).aU(a,b,c,d)}
J.dD=function(a,b,c,d,e){return J.n(a).bZ(a,b,c,d,e)}
J.dE=function(a,b,c,d,e){return J.n(a).aV(a,b,c,d,e)}
J.dF=function(a,b,c,d,e,f){return J.n(a).c_(a,b,c,d,e,f)}
J.b7=function(a,b){return J.n(a).aW(a,b)}
J.dG=function(a,b){return J.n(a).aX(a,b)}
J.dH=function(a){return J.n(a).c0(a)}
J.dI=function(a,b){return J.n(a).w(a,b)}
J.as=function(a){return J.E(a).gu(a)}
J.c6=function(a){return J.i0(a).gv(a)}
J.aT=function(a){return J.aL(a).gj(a)}
J.dJ=function(a){return J.bo(a).gco(a)}
J.bw=function(a){return J.bo(a).gbc(a)}
J.bx=function(a){return J.bo(a).gbd(a)}
J.c7=function(a){return J.bo(a).gce(a)}
J.dK=function(a){return J.n(a).V(a)}
J.dL=function(a,b){return J.n(a).a8(a,b)}
J.dM=function(a,b,c){return J.n(a).a9(a,b,c)}
J.c8=function(a,b,c){return J.n(a).ad(a,b,c)}
J.dN=function(a,b){return J.n(a).aZ(a,b)}
J.dO=function(a,b,c,d){return J.n(a).ah(a,b,c,d)}
J.b8=function(a){return J.E(a).k(a)}
J.dP=function(a,b,c,d){return J.n(a).cc(a,b,c,d)}
J.dQ=function(a,b,c){return J.n(a).b2(a,b,c)}
J.by=function(a,b,c){return J.n(a).b3(a,b,c)}
J.c9=function(a,b,c){return J.n(a).b4(a,b,c)}
J.ca=function(a,b,c){return J.n(a).b5(a,b,c)}
J.cb=function(a,b,c){return J.n(a).b6(a,b,c)}
J.dR=function(a,b,c,d){return J.n(a).b7(a,b,c,d)}
J.dS=function(a,b,c,d){return J.n(a).b8(a,b,c,d)}
J.dT=function(a,b){return J.n(a).b9(a,b)}
J.dU=function(a,b,c){return J.n(a).cd(a,b,c)}
J.dV=function(a,b,c,d,e,f,g){return J.n(a).ba(a,b,c,d,e,f,g)}
var $=I.p
C.y=W.bB.prototype
C.z=W.eu.prototype
C.A=J.d.prototype
C.a=J.aW.prototype
C.e=J.cq.prototype
C.l=J.cr.prototype
C.h=J.aX.prototype
C.H=J.aY.prototype
C.r=H.eM.prototype
C.m=H.eO.prototype
C.t=J.eR.prototype
C.o=J.aE.prototype
C.Y=W.fu.prototype
C.d=new P.he()
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.D=function(getTagFallback) {
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
C.E=function() {
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
C.F=function(hooks) {
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
C.G=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=new G.x("vec3","vertex btangents",0)
C.c=new G.x("vec3","",0)
C.J=new G.x("vec4","delta from light",0)
C.n=new G.x("","",0)
C.u=new G.x("vec3","vertex coordinates",0)
C.K=new G.x("vec3","vertex binormals",0)
C.v=new G.x("vec4","for wireframe",0)
C.L=new G.x("vec4","per vertex color",0)
C.M=new G.x("float","for normal maps",0)
C.i=new G.x("mat4","",0)
C.O=new G.x("mat4","",4)
C.N=new G.x("mat4","",128)
C.b=new G.x("float","",0)
C.P=new G.x("float","",4)
C.Q=new G.x("float","depth for shadowmaps",0)
C.f=new G.x("sampler2D","",0)
C.R=new G.x("float","for bump maps",0)
C.S=new G.x("vec2","texture uvs",0)
C.T=new G.x("float","time since program start in sec",0)
C.j=new G.x("vec2","",0)
C.U=new G.x("samplerCube","",0)
C.k=new G.x("vec4","",0)
C.V=new G.x("vec3","vertex normals",0)
C.W=new G.x("sampler2DShadow","",0)
C.w=new G.x("vec3","per vertex color",0)
C.x=new G.x("mat3","",0)
C.X=new G.x("vec3","vertex tangents",0)
$.Y=0
$.au=null
$.cd=null
$.bO=!1
$.d6=null
$.d0=null
$.dc=null
$.bm=null
$.bq=null
$.bW=null
$.ap=null
$.aG=null
$.aH=null
$.bP=!1
$.C=C.d
$.ck=null
$.cj=null
$.ci=null
$.ch=null
$.d4=0
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
I.$lazy(y,x,w)}})(["iE","df",function(){return H.d5("_$dart_dartClosure")},"ji","c_",function(){return H.d5("_$dart_js")},"k4","dg",function(){return H.Z(H.bf({
toString:function(){return"$receiver$"}}))},"k5","dh",function(){return H.Z(H.bf({$method$:null,
toString:function(){return"$receiver$"}}))},"k6","di",function(){return H.Z(H.bf(null))},"k7","dj",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ka","dm",function(){return H.Z(H.bf(void 0))},"kb","dn",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"k9","dl",function(){return H.Z(H.cF(null))},"k8","dk",function(){return H.Z(function(){try{null.$method$}catch(z){return z.message}}())},"kd","dq",function(){return H.Z(H.cF(void 0))},"kc","dp",function(){return H.Z(function(){try{(void 0).$method$}catch(z){return z.message}}())},"km","c0",function(){return P.fx()},"ky","aR",function(){return[]},"iB","de",function(){return{}},"kw","W",function(){return P.cu(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColor",C.w,"aColorAlpha",C.L,"aPosition",C.u,"aTexUV",C.S,"aNormal",C.V,"aBinormal",C.K,"aCenter",C.v,"aPointSize",C.b,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.X,"aBitangent",C.I,"iaRotation",C.k,"iaTranslation",C.c,"iaScale",C.b,"iaColor",C.c,"vColor",C.w,"vTexUV",C.j,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.u,"vPositionFromLight",C.J,"vCenter",C.v,"vDepth",C.Q,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.x,"uConvolutionMatrix",C.x,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.W,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.U,"uAnimationTable",C.f,"uTime",C.T,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.c,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.N,"uLightDescs",C.O,"uLightCount",C.b,"uLightTypes",C.P,"uBumpScale",C.R,"uNormalScale",C.M],P.f,G.x)},"kD","ds",function(){var z,y
z=G.cB("SphericalGyroid")
y=[P.f]
z.bm(H.t(["aPosition"],y))
z.b=z.al(!0,H.u(H.t(["gl_Position = vec4(aPosition, 1.0);"],y),"$isa",y,"$asa"),null)
return z},"kC","dr",function(){var z,y
z=G.cB("SphericalGyroidF")
y=[P.f]
z.bp(H.t(["uCanvasSize","uTime"],y))
z.b=z.al(!1,H.u(H.t(["#define MaxSteps 60\n#define MinimumDistance 0.01\n#define normalDistance     0.0002\n#define PI 3.141592\n#define FieldOfView 1.0\n#define FudgeFactor 0.8\n\n#define Ambient 0.35\n#define Diffuse 0.4\n#define Specular 0.08\n#define LightDir vec3(1.0,1.0,-0.65048)\n#define LightColor vec3(1.0,0.666667,0.6)\n#define LightDir2 vec3(1.0,-0.62886,1.0)\n#define LightColor2 vec3(0.9,0.8,1.0)\n\n#define time  (uTime + 38.0)\n\nvec2 rotate(vec2 v, float a) {\n  return vec2(cos(a)*v.x + sin(a)*v.y, -sin(a)*v.x + cos(a)*v.y);\n}\n\n// Two light source + env light\nvec3 getLight(in vec3 color, in vec3 normal, in vec3 dir, int mat) {\n  vec3 lightDir = normalize(LightDir);\n  float specular = pow(max(0.0,dot(lightDir,-reflect(lightDir, normal))),20.0); // Phong\n  float diffuse = max(0.0,dot(-normal, lightDir)); // Lambertian\n  \n  vec3 lightDir2 = normalize(LightDir2);\n  float specular2 = pow(max(0.0,dot(lightDir2,-reflect(lightDir2, normal))),20.0); // Phong\n  float diffuse2 = max(0.0,dot(-normal, lightDir2)); // Lambertian\n  \n  float a = pow(abs(dot(normal,dir)),2.0);\n  vec3 l = vec3(0.0);\n    \n  //if (mat < 2) { \n    //l+=(Specular*specular)*LightColor+(diffuse*Diffuse)*(LightColor*color) +\n    //(Specular*specular2)*LightColor2+(diffuse2*Diffuse)*(LightColor2*color);\n    //l+=textureCube(iChannel0, reflect(dir, normal)).xyz*Specular;\n  //} else {\n    l+= \n      //(diffuse*0.8)*(LightColor*color) \n      +(diffuse2*0.7)*(LightColor2*color);\n    \n  //}\n  return l*a*1.7;\n}\n\n\n\n// vec3 offset = vec3(1.0+0.2*(cos(time/5.7)),0.3+0.1*(cos(time/1.7)),1.).xzy;\n\n\nfloat DE2(vec3 z, out int mat, float scale) {\n float sphere = abs(length(z))-15.0;\n z*= scale;\n float base = (cos(z.x) * sin(z.y) + cos(z.y) * sin(z.z) + cos(z.z) * sin(z.x));\n float inverse = -base + (1.0+cos(time/4.0))*4.0;\n if (base>inverse) {\n    mat = (sphere>-0.1) ? 0 : 2;\n } else {\n   mat = (sphere>-0.1) ? 1 : 3;\n }\n return max(min(base,inverse),sphere);\n}\n\nfloat  DE(vec3 z, float scale) {\n  int i = 0;\n  return DE2(z, i, scale);\n}\n\n\n\n// Finite difference normal\nvec3 getNormal(in vec3 pos, float scale) {\n  vec3 e = vec3(0.0,normalDistance,0.0);\n\n  return normalize(vec3(\n      DE(pos+e.yxx, scale)-DE(pos-e.yxx, scale),\n      DE(pos+e.xyx, scale)-DE(pos-e.xyx, scale),\n      DE(pos+e.xxy, scale)-DE(pos-e.xxy, scale)));\n}\n\n// Solid color with a little bit of normal :-)\nvec3 getColor(vec3 normal, vec3 pos, int material) {\n  if (material == 0) {\n    return vec3(0.0,0.1,0.0); \n  } else if (material == 1) {\n    return vec3(1.0,0.0,0.0); \n  } else if (material == 2) {\n    return vec3(1.0)*length(pos)/10.0;\n  } \n  return vec3(1.0)*length(pos)/10.0;\n  \n}\n\n// Filmic tone mapping:\n// http://filmicgames.com/archives/75\nvec3 toneMap(in vec3 c) {\n  c = c*c; // <- So much for proper gamma correction :-)\n  vec3 x = max(vec3(0.),c-vec3(0.004));\n  c = (x*(6.2*x+.5))/(x*(6.2*x+1.7)+0.06);\n  return c;\n}\n\n// Pseudo-random number\n// From: lumina.sourceforge.net/Tutorials/Noise.html\nfloat rand(vec2 co){\n  return fract(cos(dot(co,vec2(4.898,7.23))) * 23421.631);\n}\n\nvec4 rayMarch(in vec3 from, in vec3 dir, float scale) {\n  // Add some noise to prevent banding\n  float totalDistance = rand(gl_FragCoord.xy+vec2(time));\n  \n  float distance;\n  int steps = 0;\n  vec3 pos;\n  for (int i=0; i < MaxSteps; i++) {\n    pos = from + totalDistance * dir;\n    distance = DE(pos, scale)*(0.7*scale);\n    totalDistance += distance;\n    if (distance < MinimumDistance) break;\n    steps = i;\n  }\n  if (steps == MaxSteps-1) {\n    return vec4(0.0);\n  }\n  \n  // 'AO' is based on number of steps.\n  // Try to smooth the count, to combat banding.\n  float smoothStep = float(steps) + distance/MinimumDistance;\n  float ao = 1.0-smoothStep/float(MaxSteps);\n\n  // Since our distance field is not signed,\n    // backstep when calc'ing normal\n  vec3 normal = getNormal(pos-dir*normalDistance*3.0, scale);\n\n  int material = 0;\n  DE2(pos, material, scale);\n  \n  vec3 color = getColor(normal, pos, material); \n  vec3 light = getLight(color, normal, dir, material);\n  return vec4(toneMap((color*Ambient+light)*ao),1.0);\n}\n\nfloat curve(float x) {\n  return cos(x);\n}\n\nvoid main(void)\n{ \n  float angle = time/5.0; \n  float scale = 0.8+(0.1*cos(time/3.0));\n\n  // Camera position (eye), and camera target\n  vec3 camPos =  19.0*vec3(1.0,0.5*curve(time*0.2),0.5*curve(7.0+0.3*time));\n  vec3 target = vec3(0.0);\n  vec3 camUp  = vec3(0.0,0.0,1.0);\n\n  // Calculate orthonormal camera reference system\n  vec3 camDir   = normalize(target-camPos); // direction for center ray\n  camUp = normalize(camUp-dot(camDir,camUp)*camDir); // orthogonalize\n  vec3 camRight = normalize(cross(camDir,camUp));\n  \n  vec2 coord =-1.0+2.0*gl_FragCoord.xy/uCanvasSize.xy;\n  coord.x *= uCanvasSize.x/uCanvasSize.y;\n   \n  // Get direction for this pixel\n  vec3 rayDir = normalize(camDir + (coord.x*camRight + coord.y*camUp)*FieldOfView);\n  \n  oFragColor = rayMarch(camPos, rayDir, scale);\n}\n\n"],y),"$isa",y,"$asa"),null)
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.f,args:[P.A]},{func:1,args:[,P.f]},{func:1,args:[P.f]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,],opt:[P.U]},{func:1,ret:[P.a1,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.I,args:[P.D]},{func:1,ret:P.A,args:[P.A,P.c]},{func:1,ret:-1,args:[P.D]},{func:1,ret:P.A,args:[,,]}]
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
if(x==y)H.ip(d||a)
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
Isolate.aK=a.aK
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
if(typeof dartMainRunner==="function")dartMainRunner(L.d9,[])
else L.d9([])})})()
//# sourceMappingURL=gyroid.dart.js.map
