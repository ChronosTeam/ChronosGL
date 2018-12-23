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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.be=function(){}
var dart=[["","",,H,{"^":"",lN:{"^":"b;a"}}],["","",,J,{"^":"",
cD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c0:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cB==null){H.kE()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cs("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cF()]
if(v!=null)return v
v=H.kJ(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.cF(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.b8(a)},
k:["cb",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h7:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isR:1},
dh:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isz:1},
cl:{"^":"h;",
gv:function(a){return 0},
k:["cd",function(a){return String(a)}]},
hK:{"^":"cl;"},
bb:{"^":"cl;"},
bq:{"^":"cl;",
k:function(a){var z=a[$.eq()]
if(z==null)return this.cd(a)
return"JavaScript function for "+H.e(J.bj(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbl:1},
bn:{"^":"h;$ti",
l:function(a,b){H.y(b,H.o(a,0))
if(!!a.fixed$length)H.N(P.B("add"))
a.push(b)},
E:function(a,b){var z,y
H.w(b,"$isj",[H.o(a,0)],"$asj")
if(!!a.fixed$length)H.N(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.K)(b),++y)a.push(b[y])},
a0:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
be:function(a,b){var z,y
H.k(b,{func:1,ret:P.R,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aL(a))}return!1},
c6:function(a,b){if(!!a.immutable$list)H.N(P.B("sort"))
H.i9(a,J.kc(),H.o(a,0))},
af:function(a){return this.c6(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
k:function(a){return P.cj(a,"[","]")},
gw:function(a){return new J.fl(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.b8(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.aj(a,b))
return a[b]},
h:function(a,b,c){H.t(b)
H.y(c,H.o(a,0))
if(!!a.immutable$list)H.N(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aj(a,b))
if(b>=a.length||b<0)throw H.c(H.aj(a,b))
a[b]=c},
$isv:1,
$asv:I.be,
$isj:1,
$isa:1,
p:{
h6:function(a,b){return J.ck(H.n(a,[b]))},
ck:function(a){H.bg(a)
a.fixed$length=Array
return a},
lL:[function(a,b){return J.eN(H.ej(a,"$isY"),H.ej(b,"$isY"))},"$2","kc",8,0,32]}},
lM:{"^":"bn;$ti"},
fl:{"^":"b;a,b,c,0d,$ti",
saS:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.K(z))
x=this.c
if(x>=y){this.saS(null)
return!1}this.saS(z[x]);++this.c
return!0},
$isb3:1},
bo:{"^":"h;",
J:function(a,b){var z
H.cE(b)
if(typeof b!=="number")throw H.c(H.aF(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gab(b)
if(this.gab(a)===z)return 0
if(this.gab(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gab:function(a){return a===0?1/a<0:a<0},
bL:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.B(""+a+".toInt()"))},
df:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.B(""+a+".ceil()"))},
dg:function(a,b,c){if(this.J(b,c)>0)throw H.c(H.aF(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
dO:function(a,b){var z
if(b>20)throw H.c(P.bM(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gab(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cf:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bb(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.bb(a,b)},
bb:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.B("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
b9:function(a,b){var z
if(a>0)z=this.d2(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
d2:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.c(H.aF(b))
return a>b},
$isY:1,
$asY:function(){return[P.G]},
$isak:1,
$isG:1},
dg:{"^":"bo;",$isD:1},
df:{"^":"bo;"},
bp:{"^":"h;",
bn:function(a,b){if(b<0)throw H.c(H.aj(a,b))
if(b>=a.length)H.N(H.aj(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(b>=a.length)throw H.c(H.aj(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.r(b)
if(typeof b!=="string")throw H.c(P.cV(b,null,null))
return a+b},
c7:function(a,b){var z=H.n(a.split(b),[P.d])
return z},
c9:function(a,b,c){var z
if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c8:function(a,b){return this.c9(a,b,0)},
aK:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bN(b,null,null))
if(b>c)throw H.c(P.bN(b,null,null))
if(c>a.length)throw H.c(P.bN(c,null,null))
return a.substring(b,c)},
ca:function(a,b){return this.aK(a,b,null)},
dN:function(a){return a.toLowerCase()},
dQ:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.Y(z,0)===133){x=J.h8(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bn(z,w)===133?J.h9(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dj:function(a,b,c){if(c>a.length)throw H.c(P.bM(c,0,a.length,null,null))
return H.kR(a,b,c)},
J:function(a,b){var z
H.r(b)
if(typeof b!=="string")throw H.c(H.aF(b))
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
i:function(a,b){if(b>=a.length||!1)throw H.c(H.aj(a,b))
return a[b]},
$isv:1,
$asv:I.be,
$isY:1,
$asY:function(){return[P.d]},
$isdt:1,
$isd:1,
p:{
di:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
h8:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.Y(a,b)
if(y!==32&&y!==13&&!J.di(y))break;++b}return b},
h9:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bn(a,z)
if(y!==32&&y!==13&&!J.di(y))break}return b}}}}],["","",,H,{"^":"",
h4:function(){return new P.cq("No element")},
h5:function(){return new P.cq("Too many elements")},
i9:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.k(b,{func:1,ret:P.D,args:[c,c]})
H.bs(a,0,J.aZ(a)-1,b,c)},
bs:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.D,args:[e,e]})
if(c-b<=32)H.i8(a,b,c,d,e)
else H.i7(a,b,c,d,e)},
i8:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.k(d,{func:1,ret:P.D,args:[e,e]})
for(z=b+1,y=J.aV(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a9(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
i7:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.k(a1,{func:1,ret:P.D,args:[a2,a2]})
z=C.f.S(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.S(b+a0,2)
v=w-z
u=w+z
t=J.aV(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.a9(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.a9(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.a9(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.a9(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a9(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.a9(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.a9(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.a9(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.a9(a1.$2(p,o),0)){n=o
o=p
p=n}t.h(a,y,s)
t.h(a,w,q)
t.h(a,x,o)
t.h(a,v,t.i(a,b))
t.h(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.S(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a2()
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
if(typeof e!=="number")return e.a2()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.P()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.P()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a2()
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
H.bs(a,b,m-2,a1,a2)
H.bs(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.S(a1.$2(t.i(a,m),r),0);)++m
for(;J.S(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a2()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bs(a,m,l,a1,a2)}else H.bs(a,m,l,a1,a2)},
d6:{"^":"j;"},
bJ:{"^":"d6;$ti",
gw:function(a){return new H.dm(this,this.gj(this),0,[H.cA(this,"bJ",0)])},
az:function(a,b){return this.cc(0,H.k(b,{func:1,ret:P.R,args:[H.cA(this,"bJ",0)]}))}},
dm:{"^":"b;a,b,c,0d,$ti",
saT:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aV(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aL(z))
w=this.c
if(w>=x){this.saT(null)
return!1}this.saT(y.q(z,w));++this.c
return!0},
$isb3:1},
ho:{"^":"bJ;a,b,$ti",
gj:function(a){return J.aZ(this.a)},
q:function(a,b){return this.b.$1(J.eV(this.a,b))},
$asbJ:function(a,b){return[b]},
$asj:function(a,b){return[b]}},
dH:{"^":"j;a,b,$ti",
gw:function(a){return new H.ix(J.bD(this.a),this.b,this.$ti)}},
ix:{"^":"b3;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bI:{"^":"b;$ti"}}],["","",,H,{"^":"",
aK:function(a){var z,y
z=H.r(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kw:function(a){return init.types[H.t(a)]},
kH:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.A(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bj(a)
if(typeof z!=="string")throw H.c(H.aF(a))
return z},
b8:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hU:function(a,b){var z,y
if(typeof a!=="string")H.N(H.aF(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.i(z,3)
y=H.r(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
hT:function(a){var z,y
if(typeof a!=="string")H.N(H.aF(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.fa(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
b9:function(a){return H.hL(a)+H.bU(H.al(a),0,null)},
hL:function(a){var z,y,x,w,v,u,t,s,r
z=J.A(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbb){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aK(w.length>1&&C.h.Y(w,0)===36?C.h.ca(w,1):w)},
W:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hS:function(a){return a.b?H.W(a).getUTCFullYear()+0:H.W(a).getFullYear()+0},
hQ:function(a){return a.b?H.W(a).getUTCMonth()+1:H.W(a).getMonth()+1},
hM:function(a){return a.b?H.W(a).getUTCDate()+0:H.W(a).getDate()+0},
hN:function(a){return a.b?H.W(a).getUTCHours()+0:H.W(a).getHours()+0},
hP:function(a){return a.b?H.W(a).getUTCMinutes()+0:H.W(a).getMinutes()+0},
hR:function(a){return a.b?H.W(a).getUTCSeconds()+0:H.W(a).getSeconds()+0},
hO:function(a){return a.b?H.W(a).getUTCMilliseconds()+0:H.W(a).getMilliseconds()+0},
aI:function(a){throw H.c(H.aF(a))},
i:function(a,b){if(a==null)J.aZ(a)
throw H.c(H.aj(a,b))},
aj:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,"index",null)
z=H.t(J.aZ(a))
if(!(b<0)){if(typeof z!=="number")return H.aI(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bN(b,"index",null)},
aF:function(a){return new P.ap(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.bL()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.em})
z.name=""}else z.toString=H.em
return z},
em:function(){return J.bj(this.dartException)},
N:function(a){throw H.c(a)},
K:function(a){throw H.c(P.aL(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kX(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b9(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cn(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ds(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.es()
u=$.et()
t=$.eu()
s=$.ev()
r=$.ey()
q=$.ez()
p=$.ex()
$.ew()
o=$.eB()
n=$.eA()
m=v.I(y)
if(m!=null)return z.$1(H.cn(H.r(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.cn(H.r(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ds(H.r(y),m))}}return z.$1(new H.it(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dy()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ap(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dy()
return a},
aW:function(a){var z
if(a==null)return new H.dZ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dZ(a)},
ks:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
kG:function(a,b,c,d,e,f){H.f(a,"$isbl")
switch(H.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.da("Unsupported number of arguments for wrapped closure"))},
aG:function(a,b){var z
H.t(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kG)
a.$identity=z
return z},
fw:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.A(d).$isa){z.$reflectionInfo=d
x=H.hY(z).r}else x=d
w=e?Object.create(new H.ib().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aa
if(typeof u!=="number")return u.G()
$.aa=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d_(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kw,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.cY:H.cd
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d_(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
ft:function(a,b,c,d){var z=H.cd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d_:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fv(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ft(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.G()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b_
if(v==null){v=H.bG("self")
$.b_=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.G()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.b_
if(v==null){v=H.bG("self")
$.b_=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fu:function(a,b,c,d){var z,y
z=H.cd
y=H.cY
switch(b?-1:a){case 0:throw H.c(H.i2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fv:function(a,b){var z,y,x,w,v,u,t,s
z=$.b_
if(z==null){z=H.bG("self")
$.b_=z}y=$.cX
if(y==null){y=H.bG("receiver")
$.cX=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fu(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.aa
if(typeof y!=="number")return y.G()
$.aa=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.aa
if(typeof y!=="number")return y.G()
$.aa=y+1
return new Function(z+y+"}")()},
cy:function(a,b,c,d,e,f,g){return H.fw(a,b,H.t(c),d,!!e,!!f,g)},
r:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a6(a,"String"))},
ed:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"double"))},
cE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"num"))},
bW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a6(a,"bool"))},
t:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a6(a,"int"))},
c4:function(a,b){throw H.c(H.a6(a,H.aK(H.r(b).substring(3))))},
kP:function(a,b){throw H.c(H.cZ(a,H.aK(H.r(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.c4(a,b)},
am:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else z=!0
if(z)return a
H.kP(a,b)},
ej:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.A(a)[b])return a
H.c4(a,b)},
ne:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.A(a)[b])return a
H.c4(a,b)},
bg:function(a){if(a==null)return a
if(!!J.A(a).$isa)return a
throw H.c(H.a6(a,"List<dynamic>"))},
kI:function(a,b){var z
if(a==null)return a
z=J.A(a)
if(!!z.$isa)return a
if(z[b])return a
H.c4(a,b)},
cz:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.t(z)]
else return a.$S()}return},
bx:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cz(J.A(a))
if(z==null)return!1
return H.e4(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.cu)return a
$.cu=!0
try{if(H.bx(a,b))return a
z=H.by(b)
y=H.a6(a,z)
throw H.c(y)}finally{$.cu=!1}},
aU:function(a,b){if(a!=null&&!H.cx(a,b))H.N(H.a6(a,H.by(b)))
return a},
e8:function(a){var z,y
z=J.A(a)
if(!!z.$isl){y=H.cz(z)
if(y!=null)return H.by(y)
return"Closure"}return H.b9(a)},
kW:function(a){throw H.c(new P.fC(H.r(a)))},
ef:function(a){return init.getIsolateTag(a)},
n:function(a,b){a.$ti=b
return a},
al:function(a){if(a==null)return
return a.$ti},
nd:function(a,b,c){return H.aY(a["$as"+H.e(c)],H.al(b))},
bf:function(a,b,c,d){var z
H.r(c)
H.t(d)
z=H.aY(a["$as"+H.e(c)],H.al(b))
return z==null?null:z[d]},
cA:function(a,b,c){var z
H.r(b)
H.t(c)
z=H.aY(a["$as"+H.e(b)],H.al(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.t(b)
z=H.al(a)
return z==null?null:z[b]},
by:function(a){return H.aE(a,null)},
aE:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aK(a[0].builtin$cls)+H.bU(a,1,b)
if(typeof a=="function")return H.aK(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.t(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.e(b[y])}if('func' in a)return H.kb(a,b)
if('futureOr' in a)return"FutureOr<"+H.aE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.n([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.h.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aE(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aE(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aE(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aE(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kr(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.r(z[l])
n=n+m+H.aE(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bU:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cr("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aE(u,c)}return"<"+z.k(0)+">"},
kv:function(a){var z,y,x,w
z=J.A(a)
if(!!z.$isl){y=H.cz(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.al(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aY:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ai:function(a,b,c,d){var z,y
H.r(b)
H.bg(c)
H.r(d)
if(a==null)return!1
z=H.al(a)
y=J.A(a)
if(y[b]==null)return!1
return H.eb(H.aY(y[d],z),null,c,null)},
bz:function(a,b,c,d){H.r(b)
H.bg(c)
H.r(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.cZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aK(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.r(b)
H.bg(c)
H.r(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.a6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aK(b.substring(3))+H.bU(c,0,null),init.mangledGlobalNames)))},
eb:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
n8:function(a,b,c){return a.apply(b,H.aY(J.A(b)["$as"+H.e(c)],H.al(b)))},
eh:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.eh(z)}return!1},
cx:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.eh(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bx(a,b)}z=J.A(a).constructor
y=H.al(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cx(a,b))throw H.c(H.a6(a,H.by(b)))
return a},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.e4(a,b,c,d)
if('func' in a)return c.builtin$cls==="bl"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"Z" in y.prototype))return!1
w=y.prototype["$as"+"Z"]
v=H.aY(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eb(H.aY(r,z),b,u,d)},
e4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a1(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a1(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a1(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a1(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kO(m,b,l,d)},
kO:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
n9:function(a,b,c){Object.defineProperty(a,H.r(b),{value:c,enumerable:false,writable:true,configurable:true})},
kJ:function(a){var z,y,x,w,v,u
z=H.r($.eg.$1(a))
y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.r($.ea.$2(a,z))
if(z!=null){y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.bX[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c2[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ek(a,x)
if(v==="*")throw H.c(P.cs(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ek(a,x)},
ek:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cD(a,!1,null,!!a.$isx)},
kN:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cD(z,c,null,null)},
kE:function(){if(!0===$.cB)return
$.cB=!0
H.kF()},
kF:function(){var z,y,x,w,v,u,t,s
$.bX=Object.create(null)
$.c2=Object.create(null)
H.kA()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.el.$1(v)
if(u!=null){t=H.kN(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kA:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aT(C.O,H.aT(C.T,H.aT(C.A,H.aT(C.A,H.aT(C.S,H.aT(C.P,H.aT(C.Q(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eg=new H.kB(v)
$.ea=new H.kC(u)
$.el=new H.kD(t)},
aT:function(a,b){return a(b)||b},
kR:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
kT:function(a,b,c,d){var z=b.cQ(a,d)
if(z==null)return a
return H.kV(a,z.b.index,z.gdt(z),c)},
kS:function(a,b,c){var z,y
z=b.gb6()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
kU:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.kT(a,b,c,d)},
kV:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
hX:{"^":"b;a,b,c,d,e,f,r,0x",p:{
hY:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ck(z)
y=z[0]
x=z[1]
return new H.hX(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
io:{"^":"b;a,b,c,d,e,f",
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
ac:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.n([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.io(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hG:{"^":"O;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
ds:function(a,b){return new H.hG(a,b==null?null:b.method)}}},
hb:{"^":"O;a,b,c",
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
return new H.hb(a,y,z?null:b.receiver)}}},
it:{"^":"O;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kX:{"^":"l:8;a",
$1:function(a){if(!!J.A(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isQ:1},
l:{"^":"b;",
k:function(a){return"Closure '"+H.b9(this).trim()+"'"},
gc_:function(){return this},
$isbl:1,
gc_:function(){return this}},
dA:{"^":"l;"},
ib:{"^":"dA;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aK(z)+"'"}},
cc:{"^":"dA;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b8(this.a)
else y=typeof z!=="object"?J.ao(z):H.b8(z)
return(y^H.b8(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
p:{
cd:function(a){return a.a},
cY:function(a){return a.c},
bG:function(a){var z,y,x,w,v
z=new H.cc("self","target","receiver","name")
y=J.ck(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ip:{"^":"O;a",
k:function(a){return this.a},
p:{
a6:function(a,b){return new H.ip("TypeError: "+P.bH(a)+": type '"+H.e8(a)+"' is not a subtype of type '"+b+"'")}}},
fr:{"^":"O;a",
k:function(a){return this.a},
p:{
cZ:function(a,b){return new H.fr("CastError: "+P.bH(a)+": type '"+H.e8(a)+"' is not a subtype of type '"+b+"'")}}},
i1:{"^":"O;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
i2:function(a){return new H.i1(a)}}},
dF:{"^":"b;a,0b,0c,0d",
ga9:function(){var z=this.b
if(z==null){z=H.by(this.a)
this.b=z}return z},
k:function(a){return this.ga9()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.ga9())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dF&&this.ga9()===b.ga9()}},
cm:{"^":"dn;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.at(this,[H.o(this,0)])},
aa:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cM(z,b)}else{y=this.dA(b)
return y}},
dA:function(a){var z=this.d
if(z==null)return!1
return this.au(this.ao(z,J.ao(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a6(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a6(w,b)
x=y==null?null:y.b
return x}else return this.dB(b)},
dB:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ao(z,J.ao(a)&0x3ffffff)
x=this.au(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aq()
this.b=z}this.aU(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aq()
this.c=y}this.aU(y,b,c)}else{x=this.d
if(x==null){x=this.aq()
this.d=x}w=J.ao(b)&0x3ffffff
v=this.ao(x,w)
if(v==null)this.as(x,w,[this.ah(b,c)])
else{u=this.au(v,b)
if(u>=0)v[u].b=c
else v.push(this.ah(b,c))}}},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aL(this))
z=z.c}},
aU:function(a,b,c){var z
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
z=this.a6(a,b)
if(z==null)this.as(a,b,this.ah(b,c))
else z.b=c},
aW:function(){this.r=this.r+1&67108863},
ah:function(a,b){var z,y
z=new H.hg(H.y(a,H.o(this,0)),H.y(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aW()
return z},
au:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
k:function(a){return P.dp(this)},
a6:function(a,b){return a[b]},
ao:function(a,b){return a[b]},
as:function(a,b,c){a[b]=c},
cN:function(a,b){delete a[b]},
cM:function(a,b){return this.a6(a,b)!=null},
aq:function(){var z=Object.create(null)
this.as(z,"<non-identifier-key>",z)
this.cN(z,"<non-identifier-key>")
return z},
$isdk:1},
hg:{"^":"b;a,b,0c,0d"},
at:{"^":"d6;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hh(z,z.r,this.$ti)
y.c=z.e
return y}},
hh:{"^":"b;a,b,0c,0d,$ti",
saV:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aL(z))
else{z=this.c
if(z==null){this.saV(null)
return!1}else{this.saV(z.a)
this.c=this.c.c
return!0}}},
$isb3:1},
kB:{"^":"l:8;a",
$1:function(a){return this.a(a)}},
kC:{"^":"l:33;a",
$2:function(a,b){return this.a(a,b)}},
kD:{"^":"l:14;a",
$1:function(a){return this.a(H.r(a))}},
ha:{"^":"b;a,b,0c,0d",
k:function(a){return"RegExp/"+this.a+"/"},
gb6:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dj(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
cQ:function(a,b){var z,y
z=this.gb6()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.jk(this,y)},
$isdt:1,
p:{
dj:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(P.ci("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
jk:{"^":"b;a,b",
gdt:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.i(z,b)
return z[b]}}}],["","",,H,{"^":"",
kr:function(a){return J.h6(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bT:function(a){var z,y
if(!!J.A(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ae:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aj(b,a))},
hB:{"^":"h;",$isiq:1,"%":"DataView;ArrayBufferView;cp|dT|dU|dq|dV|dW|av"},
cp:{"^":"hB;",
gj:function(a){return a.length},
$isv:1,
$asv:I.be,
$isx:1,
$asx:I.be},
dq:{"^":"dU;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
h:function(a,b,c){H.t(b)
H.ed(c)
H.ae(b,a,a.length)
a[b]=c},
$asbI:function(){return[P.ak]},
$asp:function(){return[P.ak]},
$isj:1,
$asj:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
"%":"Float64Array"},
av:{"^":"dW;",
h:function(a,b,c){H.t(b)
H.t(c)
H.ae(b,a,a.length)
a[b]=c},
$asbI:function(){return[P.D]},
$asp:function(){return[P.D]},
$isj:1,
$asj:function(){return[P.D]},
$isa:1,
$asa:function(){return[P.D]}},
hA:{"^":"dq;",$isag:1,"%":"Float32Array"},
lW:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lX:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
$ish2:1,
"%":"Int32Array"},
lY:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lZ:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hC:{"^":"av;",
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
$ismJ:1,
"%":"Uint32Array"},
m_:{"^":"av;",
gj:function(a){return a.length},
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m0:{"^":"av;",
gj:function(a){return a.length},
i:function(a,b){H.ae(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dT:{"^":"cp+p;"},
dU:{"^":"dT+bI;"},
dV:{"^":"cp+p;"},
dW:{"^":"dV+bI;"}}],["","",,P,{"^":"",
iE:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kj()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aG(new P.iG(z),1)).observe(y,{childList:true})
return new P.iF(z,y,x)}else if(self.setImmediate!=null)return P.kk()
return P.kl()},
mT:[function(a){self.scheduleImmediate(H.aG(new P.iH(H.k(a,{func:1,ret:-1})),0))},"$1","kj",4,0,3],
mU:[function(a){self.setImmediate(H.aG(new P.iI(H.k(a,{func:1,ret:-1})),0))},"$1","kk",4,0,3],
mV:[function(a){H.k(a,{func:1,ret:-1})
P.jT(0,a)},"$1","kl",4,0,3],
fS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.w(a,"$isj",[[P.Z,d]],"$asj")
s=[[P.a,d]]
y=new P.P(0,$.C,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fU(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.K)(r),++p){w=r[p]
v=o
w.ax(new P.fT(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.P(0,$.C,s)
r.aZ(C.Y)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.n(r,[d])}catch(n){u=H.a3(n)
t=H.aW(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bL()
r=$.C
if(r!==C.e)r.toString
s=new P.P(0,r,s)
s.b_(m,t)
return s}else{z.c=u
z.d=t}}return y},
kf:function(a,b){if(H.bx(a,{func:1,args:[P.b,P.Q]}))return H.k(a,{func:1,ret:null,args:[P.b,P.Q]})
if(H.bx(a,{func:1,args:[P.b]}))return H.k(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.cV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ke:function(){var z,y
for(;z=$.aR,z!=null;){$.bd=null
y=z.b
$.aR=y
if(y==null)$.bc=null
z.a.$0()}},
n6:[function(){$.cv=!0
try{P.ke()}finally{$.bd=null
$.cv=!1
if($.aR!=null)$.cG().$1(P.ec())}},"$0","ec",0,0,1],
e7:function(a){var z=new P.dJ(H.k(a,{func:1,ret:-1}))
if($.aR==null){$.bc=z
$.aR=z
if(!$.cv)$.cG().$1(P.ec())}else{$.bc.b=z
$.bc=z}},
ki:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.aR
if(z==null){P.e7(a)
$.bd=$.bc
return}y=new P.dJ(a)
x=$.bd
if(x==null){y.b=z
$.bd=y
$.aR=y}else{y.b=x.b
x.b=y
$.bd=y
if(y.b==null)$.bc=y}},
kQ:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.C
if(C.e===y){P.aS(null,null,C.e,a)
return}y.toString
P.aS(null,null,y,H.k(y.bh(a),z))},
bV:function(a,b,c,d,e){var z={}
z.a=d
P.ki(new P.kg(z,e))},
e5:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.C
if(y===c)return d.$0()
$.C=c
z=y
try{y=d.$0()
return y}finally{$.C=z}},
e6:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.C
if(y===c)return d.$1(e)
$.C=c
z=y
try{y=d.$1(e)
return y}finally{$.C=z}},
kh:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.C
if(y===c)return d.$2(e,f)
$.C=c
z=y
try{y=d.$2(e,f)
return y}finally{$.C=z}},
aS:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bh(d):c.dc(d,-1)
P.e7(d)},
iG:{"^":"l:9;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iF:{"^":"l:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iH:{"^":"l:0;a",
$0:function(){this.a.$0()}},
iI:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jS:{"^":"b;a,0b,c",
cH:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aG(new P.jU(this,b),0),a)
else throw H.c(P.B("`setTimeout()` not found."))},
p:{
jT:function(a,b){var z=new P.jS(!0,0)
z.cH(a,b)
return z}}},
jU:{"^":"l:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
Z:{"^":"b;$ti"},
fU:{"^":"l:15;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isQ")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.H(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.H(z.c,z.d)}},
fT:{"^":"l;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.b1(z.a)}else if(z.b===0&&!this.e)this.c.H(z.c,z.d)},
$S:function(){return{func:1,ret:P.z,args:[this.f]}}},
dN:{"^":"b;$ti",
di:function(a,b){if(a==null)a=new P.bL()
if(this.a.a!==0)throw H.c(P.bt("Future already completed"))
$.C.toString
this.H(a,b)},
dh:function(a){return this.di(a,null)}},
dK:{"^":"dN;a,$ti",
bp:function(a,b){var z
H.aU(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bt("Future already completed"))
z.aZ(b)},
H:function(a,b){this.a.b_(a,b)}},
jN:{"^":"dN;a,$ti",
H:function(a,b){this.a.H(a,b)}},
aP:{"^":"b;0a,b,c,d,e,$ti",
dC:function(a){if(this.c!==6)return!0
return this.b.b.aw(H.k(this.d,{func:1,ret:P.R,args:[P.b]}),a.a,P.R,P.b)},
dz:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bx(z,{func:1,args:[P.b,P.Q]}))return H.aU(w.dJ(z,a.a,a.b,null,y,P.Q),x)
else return H.aU(w.aw(H.k(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
P:{"^":"b;ba:a<,b,0d_:c<,$ti",
ax:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.C
if(y!==C.e){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kf(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.P(0,$.C,[c])
w=b==null?1:3
this.aY(new P.aP(x,w,a,b,[z,c]))
return x},
ac:function(a,b){return this.ax(a,null,b)},
aY:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaP")
this.c=a}else{if(z===2){y=H.f(this.c,"$isP")
z=y.a
if(z<4){y.aY(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aS(null,null,z,H.k(new P.iZ(this,a),{func:1,ret:-1}))}},
b7:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaP")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isP")
y=u.a
if(y<4){u.b7(a)
return}this.a=y
this.c=u.c}z.a=this.a8(a)
y=this.b
y.toString
P.aS(null,null,y,H.k(new P.j5(z,this),{func:1,ret:-1}))}},
a7:function(){var z=H.f(this.c,"$isaP")
this.c=null
return this.a8(z)},
a8:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
aj:function(a){var z,y,x
z=H.o(this,0)
H.aU(a,{futureOr:1,type:z})
y=this.$ti
if(H.ai(a,"$isZ",y,"$asZ"))if(H.ai(a,"$isP",y,null))P.bR(a,this)
else P.dO(a,this)
else{x=this.a7()
H.y(a,z)
this.a=4
this.c=a
P.aQ(this,x)}},
b1:function(a){var z
H.y(a,H.o(this,0))
z=this.a7()
this.a=4
this.c=a
P.aQ(this,z)},
H:function(a,b){var z
H.f(b,"$isQ")
z=this.a7()
this.a=8
this.c=new P.a_(a,b)
P.aQ(this,z)},
aZ:function(a){var z
H.aU(a,{futureOr:1,type:H.o(this,0)})
if(H.ai(a,"$isZ",this.$ti,"$asZ")){this.cK(a)
return}this.a=1
z=this.b
z.toString
P.aS(null,null,z,H.k(new P.j0(this,a),{func:1,ret:-1}))},
cK:function(a){var z=this.$ti
H.w(a,"$isZ",z,"$asZ")
if(H.ai(a,"$isP",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aS(null,null,z,H.k(new P.j4(this,a),{func:1,ret:-1}))}else P.bR(a,this)
return}P.dO(a,this)},
b_:function(a,b){var z
H.f(b,"$isQ")
this.a=1
z=this.b
z.toString
P.aS(null,null,z,H.k(new P.j_(this,a,b),{func:1,ret:-1}))},
$isZ:1,
p:{
dO:function(a,b){var z,y,x
b.a=1
try{a.ax(new P.j1(b),new P.j2(b),null)}catch(x){z=H.a3(x)
y=H.aW(x)
P.kQ(new P.j3(b,z,y))}},
bR:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isP")
if(z>=4){y=b.a7()
b.a=a.a
b.c=a.c
P.aQ(b,y)}else{y=H.f(b.c,"$isaP")
b.a=2
b.c=a
a.b7(y)}},
aQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isa_")
y=y.b
u=v.a
t=v.b
y.toString
P.bV(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aQ(z.a,b)}y=z.a
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
P.bV(null,null,y,u,t)
return}o=$.C
if(o!=q)$.C=q
else o=null
y=b.c
if(y===8)new P.j8(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j7(x,b,r).$0()}else if((y&2)!==0)new P.j6(z,x,b).$0()
if(o!=null)$.C=o
y=x.b
if(!!J.A(y).$isZ){if(y.a>=4){n=H.f(t.c,"$isaP")
t.c=null
b=t.a8(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bR(y,t)
return}}m=b.b
n=H.f(m.c,"$isaP")
m.c=null
b=m.a8(n)
y=x.a
u=x.b
if(!y){H.y(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa_")
m.a=8
m.c=u}z.a=m
y=m}}}},
iZ:{"^":"l:0;a,b",
$0:function(){P.aQ(this.a,this.b)}},
j5:{"^":"l:0;a,b",
$0:function(){P.aQ(this.b,this.a.a)}},
j1:{"^":"l:9;a",
$1:function(a){var z=this.a
z.a=0
z.aj(a)}},
j2:{"^":"l:16;a",
$2:function(a,b){H.f(b,"$isQ")
this.a.H(a,b)},
$1:function(a){return this.$2(a,null)}},
j3:{"^":"l:0;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
j0:{"^":"l:0;a,b",
$0:function(){var z=this.a
z.b1(H.y(this.b,H.o(z,0)))}},
j4:{"^":"l:0;a,b",
$0:function(){P.bR(this.b,this.a)}},
j_:{"^":"l:0;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
j8:{"^":"l:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bK(H.k(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.aW(v)
if(this.d){w=H.f(this.a.a.c,"$isa_").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa_")
else u.b=new P.a_(y,x)
u.a=!0
return}if(!!J.A(z).$isZ){if(z instanceof P.P&&z.gba()>=4){if(z.gba()===8){w=this.b
w.b=H.f(z.gd_(),"$isa_")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ac(new P.j9(t),null)
w.a=!1}}},
j9:{"^":"l:17;a",
$1:function(a){return this.a}},
j7:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.y(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.aw(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.aW(t)
x=this.a
x.b=new P.a_(z,y)
x.a=!0}}},
j6:{"^":"l:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa_")
w=this.c
if(w.dC(z)&&w.e!=null){v=this.b
v.b=w.dz(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.aW(u)
w=H.f(this.a.a.c,"$isa_")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a_(y,x)
s.a=!0}}},
dJ:{"^":"b;a,0b"},
ig:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.P(0,$.C,[P.D])
z.a=0
x=H.o(this,0)
w=H.k(new P.ii(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.ij(z,y),{func:1,ret:-1})
W.ah(this.a,this.b,w,!1,x)
return y}},
ii:{"^":"l;a,b",
$1:function(a){H.y(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
ij:{"^":"l:0;a,b",
$0:function(){this.b.aj(this.a.a)}},
ih:{"^":"b;"},
a_:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isO:1},
k_:{"^":"b;",$ismR:1},
kg:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bL()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jw:{"^":"k_;",
dK:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.e===$.C){a.$0()
return}P.e5(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.aW(x)
P.bV(null,null,this,z,H.f(y,"$isQ"))}},
dL:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.C){a.$1(b)
return}P.e6(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.aW(x)
P.bV(null,null,this,z,H.f(y,"$isQ"))}},
dc:function(a,b){return new P.jy(this,H.k(a,{func:1,ret:b}),b)},
bh:function(a){return new P.jx(this,H.k(a,{func:1,ret:-1}))},
dd:function(a,b){return new P.jz(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bK:function(a,b){H.k(a,{func:1,ret:b})
if($.C===C.e)return a.$0()
return P.e5(null,null,this,a,b)},
aw:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.C===C.e)return a.$1(b)
return P.e6(null,null,this,a,b,c,d)},
dJ:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.C===C.e)return a.$2(b,c)
return P.kh(null,null,this,a,b,c,d,e,f)}},
jy:{"^":"l;a,b,c",
$0:function(){return this.a.bK(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jx:{"^":"l:1;a,b",
$0:function(){return this.a.dK(this.b)}},
jz:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.dL(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dl:function(a,b,c){H.bg(a)
return H.w(H.ks(a,new H.cm(0,0,[b,c])),"$isdk",[b,c],"$asdk")},
a4:function(a,b){return new H.cm(0,0,[a,b])},
hi:function(){return new H.cm(0,0,[null,null])},
a5:function(a,b,c,d){return new P.jg(0,0,[d])},
h3:function(a,b,c){var z,y
if(P.cw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.n([],[P.d])
y=$.bh()
C.a.l(y,a)
try{P.kd(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dz(b,H.kI(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cj:function(a,b,c){var z,y,x
if(P.cw(a))return b+"..."+c
z=new P.cr(b)
y=$.bh()
C.a.l(y,a)
try{x=z
x.a=P.dz(x.gR(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gR()+c
y=z.gR()
return y.charCodeAt(0)==0?y:y},
cw:function(a){var z,y
for(z=0;y=$.bh(),z<y.length;++z)if(a===y[z])return!0
return!1},
kd:function(a,b){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[P.d],"$asa")
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gA(z))
C.a.l(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){C.a.l(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
co:function(a,b){var z,y,x
z=P.a5(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.K)(a),++x)z.l(0,H.y(a[x],b))
return z},
dp:function(a){var z,y,x
z={}
if(P.cw(a))return"{...}"
y=new P.cr("")
try{C.a.l($.bh(),a)
x=y
x.a=x.gR()+"{"
z.a=!0
J.eY(a,new P.hn(z,y))
z=y
z.a=z.gR()+"}"}finally{z=$.bh()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gR()
return z.charCodeAt(0)==0?z:z},
jg:{"^":"jb;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.dS(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbw")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbw")!=null}else return this.cL(b)},
cL:function(a){var z=this.d
if(z==null)return!1
return this.an(this.b4(z,a),a)>=0},
l:function(a,b){var z,y
H.y(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ct()
this.b=z}return this.aX(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ct()
this.c=y}return this.aX(y,b)}else return this.cI(0,b)},
cI:function(a,b){var z,y,x
H.y(b,H.o(this,0))
z=this.d
if(z==null){z=P.ct()
this.d=z}y=this.b2(b)
x=z[y]
if(x==null)z[y]=[this.ar(b)]
else{if(this.an(x,b)>=0)return!1
x.push(this.ar(b))}return!0},
bJ:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b8(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b8(this.c,b)
else return this.cV(0,b)},
cV:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.b4(z,b)
x=this.an(y,b)
if(x<0)return!1
this.bc(y.splice(x,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ap()}},
aX:function(a,b){H.y(b,H.o(this,0))
if(H.f(a[b],"$isbw")!=null)return!1
a[b]=this.ar(b)
return!0},
b8:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbw")
if(z==null)return!1
this.bc(z)
delete a[b]
return!0},
ap:function(){this.r=this.r+1&67108863},
ar:function(a){var z,y
z=new P.bw(H.y(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ap()
return z},
bc:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ap()},
b2:function(a){return J.ao(a)&0x3ffffff},
b4:function(a,b){return a[this.b2(b)]},
an:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
p:{
ct:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bw:{"^":"b;a,0b,0c"},
dS:{"^":"b;a,b,0c,0d,$ti",
sb0:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aL(z))
else{z=this.c
if(z==null){this.sb0(null)
return!1}else{this.sb0(H.y(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb3:1,
p:{
jh:function(a,b,c){var z=new P.dS(a,b,[c])
z.c=a.e
return z}}},
jb:{"^":"i3;"},
hj:{"^":"ji;",$isj:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.dm(a,this.gj(a),0,[H.bf(this,a,"p",0)])},
q:function(a,b){return this.i(a,b)},
dv:function(a,b,c,d){var z,y,x
H.y(b,d)
H.k(c,{func:1,ret:d,args:[d,H.bf(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gj(a))throw H.c(P.aL(a))}return y},
k:function(a){return P.cj(a,"[","]")}},
dn:{"^":"U;"},
hn:{"^":"l:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
U:{"^":"b;$ti",
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bf(this,a,"U",0),H.bf(this,a,"U",1)]})
for(z=J.bD(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gj:function(a){return J.aZ(this.gD(a))},
k:function(a){return P.dp(a)},
$isJ:1},
i4:{"^":"b;$ti",
E:function(a,b){var z
for(z=J.bD(H.w(b,"$isj",this.$ti,"$asj"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.cj(this,"{","}")},
$isj:1,
$ismi:1},
i3:{"^":"i4;"},
ji:{"^":"b+p;"}}],["","",,P,{"^":"",
cC:function(a,b,c){var z
H.r(a)
z=H.hU(a,c)
if(z!=null)return z
throw H.c(P.ci(a,null,null))},
aH:function(a,b){var z
H.r(a)
z=H.hT(a)
if(z!=null)return z
throw H.c(P.ci("Invalid double",a,null))},
fN:function(a){if(a instanceof H.l)return a.k(0)
return"Instance of '"+H.b9(a)+"'"},
dv:function(a,b,c){return new H.ha(a,H.dj(a,!1,!0,!1))},
bH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fN(a)},
da:function(a){return new P.iW(a)},
an:function(a){H.aX(H.e(a))},
R:{"^":"b;"},
"+bool":0,
b0:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.b0&&this.a===b.a&&this.b===b.b},
J:function(a,b){return C.f.J(this.a,H.f(b,"$isb0").a)},
gv:function(a){var z=this.a
return(z^C.f.b9(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fD(H.hS(this))
y=P.bk(H.hQ(this))
x=P.bk(H.hM(this))
w=P.bk(H.hN(this))
v=P.bk(H.hP(this))
u=P.bk(H.hR(this))
t=P.fE(H.hO(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isY:1,
$asY:function(){return[P.b0]},
p:{
fD:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bk:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"G;"},
"+double":0,
b1:{"^":"b;a",
P:function(a,b){return C.f.P(this.a,H.f(b,"$isb1").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.f.J(this.a,H.f(b,"$isb1").a)},
k:function(a){var z,y,x,w,v
z=new P.fK()
y=this.a
if(y<0)return"-"+new P.b1(0-y).k(0)
x=z.$1(C.f.S(y,6e7)%60)
w=z.$1(C.f.S(y,1e6)%60)
v=new P.fJ().$1(y%1e6)
return""+C.f.S(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isY:1,
$asY:function(){return[P.b1]},
p:{
d5:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fJ:{"^":"l:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fK:{"^":"l:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
bL:{"^":"O;",
k:function(a){return"Throw of null."}},
ap:{"^":"O;a,b,c,d",
gal:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gak:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gal()+y+x
if(!this.a)return w
v=this.gak()
u=P.bH(this.b)
return w+v+": "+u},
p:{
fk:function(a){return new P.ap(!1,null,null,a)},
cV:function(a,b,c){return new P.ap(!0,a,b,c)}}},
du:{"^":"ap;e,f,a,b,c,d",
gal:function(){return"RangeError"},
gak:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bN:function(a,b,c){return new P.du(null,null,!0,a,b,"Value not in range")},
bM:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")}}},
h1:{"^":"ap;e,j:f>,a,b,c,d",
gal:function(){return"RangeError"},
gak:function(){var z,y
z=H.t(this.b)
if(typeof z!=="number")return z.a2()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
H:function(a,b,c,d,e){var z=H.t(e==null?J.aZ(b):e)
return new P.h1(b,z,!0,a,c,"Index out of range")}}},
iu:{"^":"O;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.iu(a)}}},
is:{"^":"O;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cs:function(a){return new P.is(a)}}},
cq:{"^":"O;a",
k:function(a){return"Bad state: "+this.a},
p:{
bt:function(a){return new P.cq(a)}}},
fx:{"^":"O;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bH(z)+"."},
p:{
aL:function(a){return new P.fx(a)}}},
dy:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isO:1},
fC:{"^":"O;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
iW:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
fR:{"^":"b;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.e(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.aK(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
ci:function(a,b,c){return new P.fR(a,b,c)}}},
bl:{"^":"b;"},
D:{"^":"G;"},
"+int":0,
j:{"^":"b;$ti",
az:["cc",function(a,b){var z=H.cA(this,"j",0)
return new H.dH(this,H.k(b,{func:1,ret:P.R,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.N(P.bM(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
k:function(a){return P.h3(this,"(",")")}},
b3:{"^":"b;$ti"},
a:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
z:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isY:1,
$asY:function(){return[P.G]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.b8(this)},
k:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.k(this)}},
Q:{"^":"b;"},
d:{"^":"b;",$isY:1,
$asY:function(){return[P.d]},
$isdt:1},
"+String":0,
cr:{"^":"b;R:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dz:function(a,b,c){var z=J.bD(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fL:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.o).K(z,a,b,c)
y.toString
z=W.u
z=new H.dH(new W.a7(y),H.k(new W.fM(),{func:1,ret:P.R,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.N(H.h4())
w=x.gA(x)
if(x.t())H.N(H.h5())
return H.f(w,"$isT")},
d9:function(a){H.f(a,"$isL")
return"wheel"},
b2:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f0(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
iT:function(a,b){return document.createElement(a)},
bS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dR:function(a,b,c,d){var z,y
z=W.bS(W.bS(W.bS(W.bS(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
e3:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iN(a)
if(!!J.A(z).$isL)return z
return}else return H.f(a,"$isL")},
ka:function(a){var z
if(!!J.A(a).$iscg)return a
z=new P.iB([],[],!1)
z.c=!0
return z.ay(a)},
e9:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.C
if(z===C.e)return a
return z.dd(a,b)},
M:{"^":"T;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kY:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fi:{"^":"M;",
k:function(a){return String(a)},
$isfi:1,
"%":"HTMLAnchorElement"},
kZ:{"^":"M;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
cW:{"^":"M;",$iscW:1,"%":"HTMLBaseElement"},
fo:{"^":"h;","%":";Blob"},
bF:{"^":"M;",$isbF:1,"%":"HTMLBodyElement"},
ce:{"^":"M;0n:height=,0m:width=",
c0:function(a,b,c){var z=this.cR(a,b,P.km(c,null))
return z},
cR:function(a,b,c){return a.getContext(b,c)},
$isce:1,
"%":"HTMLCanvasElement"},
l3:{"^":"h;",
ae:function(a){return P.a2(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
l4:{"^":"u;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fy:{"^":"cf;",$isfy:1,"%":"CSSNumericValue|CSSUnitValue"},
l6:{"^":"fB;0j:length=","%":"CSSPerspective"},
aq:{"^":"h;",$isaq:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fz:{"^":"iL;0j:length=",
aC:function(a,b){var z=this.cS(a,this.ai(a,b))
return z==null?"":z},
ai:function(a,b){var z,y
z=$.ep()
y=z[b]
if(typeof y==="string")return y
y=this.d3(a,b)
z[b]=y
return y},
d3:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fF()+b
if(z in a)return z
return b},
cS:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fA:{"^":"b;",
gn:function(a){return this.aC(a,"height")},
gm:function(a){return this.aC(a,"width")}},
cf:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fB:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l8:{"^":"cf;0j:length=","%":"CSSTransformValue"},
l9:{"^":"cf;0j:length=","%":"CSSUnparsedValue"},
lb:{"^":"h;0j:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fG:{"^":"M;","%":"HTMLDivElement"},
cg:{"^":"u;",
d6:function(a,b){return a.adoptNode(b)},
c1:function(a,b){return a.getElementById(b)},
dF:function(a,b){return a.querySelector(b)},
gbF:function(a){return new W.bu(a,"mousedown",!1,[W.V])},
gbG:function(a){return new W.bu(a,"mousemove",!1,[W.V])},
gbH:function(a){return new W.bu(a,"mouseup",!1,[W.V])},
gbI:function(a){return new W.bu(a,H.r(W.d9(a)),!1,[W.aO])},
$iscg:1,
"%":"XMLDocument;Document"},
lc:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fH:{"^":"h;",
dm:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ld:{"^":"iP;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.w(c,"$isX",[P.G],"$asX")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.X,P.G]]},
$isx:1,
$asx:function(){return[[P.X,P.G]]},
$asp:function(){return[[P.X,P.G]]},
$isj:1,
$asj:function(){return[[P.X,P.G]]},
$isa:1,
$asa:function(){return[[P.X,P.G]]},
$asq:function(){return[[P.X,P.G]]},
"%":"ClientRectList|DOMRectList"},
fI:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isX",[P.G],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isX:1,
$asX:function(){return[P.G]},
"%":";DOMRectReadOnly"},
le:{"^":"iR;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.r(c)
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
lf:{"^":"h;0j:length=","%":"DOMTokenList"},
T:{"^":"u;0dM:tagName=",
gd9:function(a){return new W.iS(a)},
k:function(a){return a.localName},
K:["ag",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.d8
if(z==null){z=H.n([],[W.ab])
y=new W.dr(z)
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
$.d8=y
d=y}else d=z
z=$.d7
if(z==null){z=new W.e2(d)
$.d7=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.K).dm(y,"")
$.af=y
$.ch=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.f(y,"$iscW")
y.href=z.baseURI
z=$.af.head;(z&&C.L).F(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbF")}z=$.af
if(!!this.$isbF)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.o).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.ch;(z&&C.D).c2(z,x)
z=$.ch
w=(z&&C.D).dk(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.m(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cP(x)
c.aH(w)
C.q.d6(document,w)
return w},function(a,b,c){return this.K(a,b,c,null)},"dl",null,null,"gdU",5,5,null],
c5:function(a,b,c,d){a.textContent=null
this.F(a,this.K(a,b,c,d))},
c4:function(a,b){return this.c5(a,b,null,null)},
V:function(a,b){return a.getAttribute(b)},
cW:function(a,b){return a.removeAttribute(b)},
gbF:function(a){return new W.bQ(a,"mousedown",!1,[W.V])},
gbG:function(a){return new W.bQ(a,"mousemove",!1,[W.V])},
gbH:function(a){return new W.bQ(a,"mouseup",!1,[W.V])},
gbI:function(a){return new W.bQ(a,H.r(W.d9(a)),!1,[W.aO])},
$isT:1,
"%":";Element"},
fM:{"^":"l:34;",
$1:function(a){return!!J.A(H.f(a,"$isu")).$isT}},
lh:{"^":"M;0n:height=,0m:width=","%":"HTMLEmbedElement"},
a0:{"^":"h;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
d5:function(a,b,c,d){H.k(c,{func:1,args:[W.a0]})
if(c!=null)this.cJ(a,b,c,!1)},
cJ:function(a,b,c,d){return a.addEventListener(b,H.aG(H.k(c,{func:1,args:[W.a0]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dX|dY|e0|e1"},
ar:{"^":"fo;",$isar:1,"%":"File"},
ly:{"^":"iY;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isar")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ar]},
$isx:1,
$asx:function(){return[W.ar]},
$asp:function(){return[W.ar]},
$isj:1,
$asj:function(){return[W.ar]},
$isa:1,
$asa:function(){return[W.ar]},
$asq:function(){return[W.ar]},
"%":"FileList"},
lz:{"^":"L;0j:length=","%":"FileWriter"},
lC:{"^":"M;0j:length=","%":"HTMLFormElement"},
as:{"^":"h;",$isas:1,"%":"Gamepad"},
fX:{"^":"M;","%":"HTMLHeadElement"},
lD:{"^":"h;0j:length=","%":"History"},
lE:{"^":"jd;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isu")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fY:{"^":"cg;","%":"HTMLDocument"},
fZ:{"^":"h_;",
dV:function(a,b,c,d,e,f){return a.open(b,c)},
dD:function(a,b,c){return a.open(b,c)},
c3:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
h_:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
lF:{"^":"M;0n:height=,0m:width=","%":"HTMLIFrameElement"},
lG:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
lH:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
lI:{"^":"M;0n:height=,0m:width=","%":"HTMLImageElement"},
lK:{"^":"M;0n:height=,0m:width=","%":"HTMLInputElement"},
b4:{"^":"dG;",$isb4:1,"%":"KeyboardEvent"},
hm:{"^":"h;",
k:function(a){return String(a)},
$ishm:1,
"%":"Location"},
hq:{"^":"M;","%":"HTMLAudioElement;HTMLMediaElement"},
lS:{"^":"h;0j:length=","%":"MediaList"},
lT:{"^":"jl;",
i:function(a,b){return P.a2(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.hs(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hs:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
lU:{"^":"jm;",
i:function(a,b){return P.a2(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.ht(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
ht:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
au:{"^":"h;",$isau:1,"%":"MimeType"},
lV:{"^":"jo;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isau")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$asp:function(){return[W.au]},
$isj:1,
$asj:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"MimeTypeArray"},
V:{"^":"dG;",
gbE:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b7(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.A(W.e3(z)).$isT)throw H.c(P.B("offsetX is only supported on elements"))
y=H.f(W.e3(z),"$isT")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.b7(u,v,w),"$isb7",w,"$asb7")
if(typeof z!=="number")return z.W()
if(typeof x!=="number")return x.W()
return new P.b7(C.r.bL(z-u),C.r.bL(x-v),w)}},
$isV:1,
"%":";DragEvent|MouseEvent"},
a7:{"^":"hj;a",
ga5:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bt("No elements"))
if(y>1)throw H.c(P.bt("More than one element"))
return z.firstChild},
E:function(a,b){var z,y,x,w,v
H.w(b,"$isj",[W.u],"$asj")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.m(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
h:function(a,b,c){var z
H.t(b)
z=this.a
J.eH(z,H.f(c,"$isu"),C.v.i(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.dd(z,z.length,-1,[H.bf(C.v,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){return C.v.i(this.a.childNodes,b)},
$asp:function(){return[W.u]},
$asj:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"L;0dE:previousSibling=",
dG:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.cb(a):z},
F:function(a,b){return a.appendChild(b)},
cX:function(a,b){return a.removeChild(b)},
cY:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hD:{"^":"jq;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isu")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
m3:{"^":"M;0n:height=,0m:width=","%":"HTMLObjectElement"},
m5:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
m6:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
aw:{"^":"h;0j:length=",$isaw:1,"%":"Plugin"},
m8:{"^":"ju;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaw")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isj:1,
$asj:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"PluginArray"},
ma:{"^":"V;0n:height=,0m:width=","%":"PointerEvent"},
br:{"^":"a0;",$isbr:1,"%":"ProgressEvent|ResourceProgressEvent"},
hW:{"^":"h;",
dk:function(a,b){return a.createContextualFragment(b)},
c2:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mf:{"^":"jA;",
i:function(a,b){return P.a2(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.i0(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"RTCStatsReport"},
i0:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mg:{"^":"h;0n:height=,0m:width=","%":"Screen"},
mh:{"^":"M;0j:length=","%":"HTMLSelectElement"},
ax:{"^":"L;",$isax:1,"%":"SourceBuffer"},
mj:{"^":"dY;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isax")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isj:1,
$asj:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"SourceBufferList"},
ay:{"^":"h;",$isay:1,"%":"SpeechGrammar"},
mk:{"^":"jG;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isay")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isj:1,
$asj:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"SpeechGrammarList"},
az:{"^":"h;0j:length=",$isaz:1,"%":"SpeechRecognitionResult"},
mn:{"^":"jJ;",
i:function(a,b){return this.b5(a,H.r(b))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.cU(a,z)
if(y==null)return
b.$2(y,this.b5(a,y))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new W.ie(z))
return z},
gj:function(a){return a.length},
b5:function(a,b){return a.getItem(b)},
cU:function(a,b){return a.key(b)},
$asU:function(){return[P.d,P.d]},
$isJ:1,
$asJ:function(){return[P.d,P.d]},
"%":"Storage"},
ie:{"^":"l:18;a",
$2:function(a,b){return C.a.l(this.a,a)}},
aA:{"^":"h;",$isaA:1,"%":"CSSStyleSheet|StyleSheet"},
ik:{"^":"M;",
K:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=W.fL("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a7(y).E(0,new W.a7(z))
return y},
"%":"HTMLTableElement"},
mq:{"^":"M;",
K:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga5(z)
x.toString
z=new W.a7(x)
w=z.ga5(z)
y.toString
w.toString
new W.a7(y).E(0,new W.a7(w))
return y},
"%":"HTMLTableRowElement"},
mr:{"^":"M;",
K:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ag(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.I.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga5(z)
y.toString
x.toString
new W.a7(y).E(0,new W.a7(x))
return y},
"%":"HTMLTableSectionElement"},
dB:{"^":"M;",$isdB:1,"%":"HTMLTemplateElement"},
ms:{"^":"h;0m:width=","%":"TextMetrics"},
aB:{"^":"L;",$isaB:1,"%":"TextTrack"},
aC:{"^":"L;",$isaC:1,"%":"TextTrackCue|VTTCue"},
mt:{"^":"jR;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaC")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aC]},
$isx:1,
$asx:function(){return[W.aC]},
$asp:function(){return[W.aC]},
$isj:1,
$asj:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$asq:function(){return[W.aC]},
"%":"TextTrackCueList"},
mu:{"^":"e1;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaB")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aB]},
$isx:1,
$asx:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isj:1,
$asj:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"TextTrackList"},
mv:{"^":"h;0j:length=","%":"TimeRanges"},
aD:{"^":"h;",$isaD:1,"%":"Touch"},
mw:{"^":"jW;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaD")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aD]},
$isx:1,
$asx:function(){return[W.aD]},
$asp:function(){return[W.aD]},
$isj:1,
$asj:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$asq:function(){return[W.aD]},
"%":"TouchList"},
mx:{"^":"h;0j:length=","%":"TrackDefaultList"},
dG:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mL:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mN:{"^":"hq;0n:height=,0m:width=","%":"HTMLVideoElement"},
mO:{"^":"L;0j:length=","%":"VideoTrackList"},
mP:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
mQ:{"^":"h;0m:width=","%":"VTTRegion"},
aO:{"^":"V;",
gdq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.B("deltaY is not supported"))},
$isaO:1,
"%":"WheelEvent"},
iy:{"^":"L;",
gd8:function(a){var z,y,x
z=P.G
y=new P.P(0,$.C,[z])
x=H.k(new W.iz(new P.jN(y,[z])),{func:1,ret:-1,args:[P.G]})
this.cP(a)
this.cZ(a,W.e9(x,z))
return y},
cZ:function(a,b){return a.requestAnimationFrame(H.aG(H.k(b,{func:1,ret:-1,args:[P.G]}),1))},
cP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdI:1,
"%":"DOMWindow|Window"},
iz:{"^":"l:19;a",
$1:function(a){var z=this.a
a=H.aU(H.cE(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.N(P.bt("Future already completed"))
z.aj(a)}},
dL:{"^":"u;",$isdL:1,"%":"Attr"},
mW:{"^":"k1;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaq")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isj:1,
$asj:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"CSSRuleList"},
mX:{"^":"fI;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isX",[P.G],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.m(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mY:{"^":"k3;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isas")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$asp:function(){return[W.as]},
$isj:1,
$asj:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"GamepadList"},
n2:{"^":"k5;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isu")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n3:{"^":"k7;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaz")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$asp:function(){return[W.az]},
$isj:1,
$asj:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"SpeechRecognitionResultList"},
n4:{"^":"k9;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.t(b)
H.f(c,"$isaA")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aA]},
$isx:1,
$asx:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isj:1,
$asj:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"StyleSheetList"},
iJ:{"^":"dn;cO:a<",
C:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.m(x),v=0;v<z.length;z.length===y||(0,H.K)(z),++v){u=z[v]
b.$2(u,w.V(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.n([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.f(z[w],"$isdL")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asU:function(){return[P.d,P.d]},
$asJ:function(){return[P.d,P.d]}},
iS:{"^":"iJ;a",
i:function(a,b){return J.ca(this.a,H.r(b))},
gj:function(a){return this.gD(this).length}},
bu:{"^":"ig;a,b,c,$ti"},
bQ:{"^":"bu;a,b,c,$ti"},
iU:{"^":"ih;a,b,c,d,e,$ti",p:{
ah:function(a,b,c,d,e){var z=W.e9(new W.iV(c),W.a0)
if(z!=null&&!0)J.eI(a,b,z,!1)
return new W.iU(0,a,b,z,!1,[e])}}},
iV:{"^":"l:20;a",
$1:function(a){return this.a.$1(H.f(a,"$isa0"))}},
bv:{"^":"b;a",
cF:function(a){var z,y
z=$.cH()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.V[y],W.ky())
for(y=0;y<12;++y)z.h(0,C.u[y],W.kz())}},
T:function(a){return $.eC().u(0,W.b2(a))},
N:function(a,b,c){var z,y,x
z=W.b2(a)
y=$.cH()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bW(x.$4(a,b,c,this))},
$isab:1,
p:{
dP:function(a){var z,y
z=document.createElement("a")
y=new W.jB(z,window.location)
y=new W.bv(y)
y.cF(a)
return y},
n0:[function(a,b,c,d){H.f(a,"$isT")
H.r(b)
H.r(c)
H.f(d,"$isbv")
return!0},"$4","ky",16,0,12],
n1:[function(a,b,c,d){var z,y,x
H.f(a,"$isT")
H.r(b)
H.r(c)
z=H.f(d,"$isbv").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kz",16,0,12]}},
q:{"^":"b;$ti",
gw:function(a){return new W.dd(a,this.gj(a),-1,[H.bf(this,a,"q",0)])}},
dr:{"^":"b;a",
T:function(a){return C.a.be(this.a,new W.hF(a))},
N:function(a,b,c){return C.a.be(this.a,new W.hE(a,b,c))},
$isab:1},
hF:{"^":"l:5;a",
$1:function(a){return H.f(a,"$isab").T(this.a)}},
hE:{"^":"l:5;a,b,c",
$1:function(a){return H.f(a,"$isab").N(this.a,this.b,this.c)}},
jC:{"^":"b;",
cG:function(a,b,c,d){var z,y,x
this.a.E(0,c)
z=b.az(0,new W.jD())
y=b.az(0,new W.jE())
this.b.E(0,z)
x=this.c
x.E(0,C.X)
x.E(0,y)},
T:function(a){return this.a.u(0,W.b2(a))},
N:["ce",function(a,b,c){var z,y
z=W.b2(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.d7(c)
else if(y.u(0,"*::"+b))return this.d.d7(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isab:1},
jD:{"^":"l:11;",
$1:function(a){return!C.a.u(C.u,H.r(a))}},
jE:{"^":"l:11;",
$1:function(a){return C.a.u(C.u,H.r(a))}},
jO:{"^":"jC;e,a,b,c,d",
N:function(a,b,c){if(this.ce(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ca(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
e_:function(){var z,y,x,w,v
z=P.d
y=P.co(C.t,z)
x=H.o(C.t,0)
w=H.k(new W.jP(),{func:1,ret:z,args:[x]})
v=H.n(["TEMPLATE"],[z])
y=new W.jO(y,P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),null)
y.cG(null,new H.ho(C.t,w,[x,z]),v,null)
return y}}},
jP:{"^":"l:21;",
$1:function(a){return"TEMPLATE::"+H.e(H.r(a))}},
jM:{"^":"b;",
T:function(a){var z=J.A(a)
if(!!z.$isdw)return!1
z=!!z.$isI
if(z&&W.b2(a)==="foreignObject")return!1
if(z)return!0
return!1},
N:function(a,b,c){if(b==="is"||C.h.c8(b,"on"))return!1
return this.T(a)},
$isab:1},
dd:{"^":"b;a,b,c,0d,$ti",
sb3:function(a){this.d=H.y(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sb3(J.bi(this.a,z))
this.c=z
return!0}this.sb3(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb3:1},
iM:{"^":"b;a",$isL:1,$isdI:1,p:{
iN:function(a){if(a===window)return H.f(a,"$isdI")
else return new W.iM(a)}}},
ab:{"^":"b;"},
jB:{"^":"b;a,b",$ismK:1},
e2:{"^":"b;a",
aH:function(a){new W.jZ(this).$2(a,null)},
Z:function(a,b){if(b==null)J.cP(a)
else J.bA(b,a)},
d1:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.eZ(a)
x=J.ca(y.gcO(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.bj(a)}catch(t){H.a3(t)}try{u=W.b2(a)
this.d0(H.f(a,"$isT"),b,z,v,u,H.f(y,"$isJ"),H.r(x))}catch(t){if(H.a3(t) instanceof P.ap)throw t
else{this.Z(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d0:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.Z(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.T(a)){this.Z(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.N(a,"is",g)){this.Z(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gD(f)
y=H.n(z.slice(0),[H.o(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.m(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.N(a,J.f8(v),w.V(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.V(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.V(z,v)
w.cW(z,v)}}if(!!J.A(a).$isdB)this.aH(a.content)},
$ism1:1},
jZ:{"^":"l:22;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.d1(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.Z(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f_(z)}catch(w){H.a3(w)
v=H.f(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isu")}}},
iL:{"^":"h+fA;"},
iO:{"^":"h+p;"},
iP:{"^":"iO+q;"},
iQ:{"^":"h+p;"},
iR:{"^":"iQ+q;"},
iX:{"^":"h+p;"},
iY:{"^":"iX+q;"},
jc:{"^":"h+p;"},
jd:{"^":"jc+q;"},
jl:{"^":"h+U;"},
jm:{"^":"h+U;"},
jn:{"^":"h+p;"},
jo:{"^":"jn+q;"},
jp:{"^":"h+p;"},
jq:{"^":"jp+q;"},
jt:{"^":"h+p;"},
ju:{"^":"jt+q;"},
jA:{"^":"h+U;"},
dX:{"^":"L+p;"},
dY:{"^":"dX+q;"},
jF:{"^":"h+p;"},
jG:{"^":"jF+q;"},
jJ:{"^":"h+U;"},
jQ:{"^":"h+p;"},
jR:{"^":"jQ+q;"},
e0:{"^":"L+p;"},
e1:{"^":"e0+q;"},
jV:{"^":"h+p;"},
jW:{"^":"jV+q;"},
k0:{"^":"h+p;"},
k1:{"^":"k0+q;"},
k2:{"^":"h+p;"},
k3:{"^":"k2+q;"},
k4:{"^":"h+p;"},
k5:{"^":"k4+q;"},
k6:{"^":"h+p;"},
k7:{"^":"k6+q;"},
k8:{"^":"h+p;"},
k9:{"^":"k8+q;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.a4(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.K)(y),++w){v=H.r(y[w])
z.h(0,v,a[v])}return z},
km:function(a,b){var z={}
a.C(0,new P.kn(z))
return z},
ko:function(a){var z,y
z=new P.P(0,$.C,[null])
y=new P.dK(z,[null])
a.then(H.aG(new P.kp(y),1))["catch"](H.aG(new P.kq(y),1))
return z},
d4:function(){var z=$.d3
if(z==null){z=J.c6(window.navigator.userAgent,"Opera",0)
$.d3=z}return z},
fF:function(){var z,y
z=$.d0
if(z!=null)return z
y=$.d1
if(y==null){y=J.c6(window.navigator.userAgent,"Firefox",0)
$.d1=y}if(y)z="-moz-"
else{y=$.d2
if(y==null){y=!P.d4()&&J.c6(window.navigator.userAgent,"Trident/",0)
$.d2=y}if(y)z="-ms-"
else z=P.d4()?"-o-":"-webkit-"}$.d0=z
return z},
iA:{"^":"b;",
bB:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
ay:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.N(P.fk("DateTime is outside valid range: "+y))
return new P.b0(y,!0)}if(a instanceof RegExp)throw H.c(P.cs("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.ko(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bB(a)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.hi()
z.a=u
C.a.h(x,v,u)
this.dw(a,new P.iC(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bB(t)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
if(u!=null)return u
s=J.aV(t)
r=s.gj(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.bY(u),q=0;q<r;++q)x.h(u,q,this.ay(s.i(t,q)))
return u}return a}},
iC:{"^":"l:23;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.ay(b)
J.eG(z,a,y)
return y}},
kn:{"^":"l:6;a",
$2:function(a,b){this.a[a]=b}},
iB:{"^":"iA;a,b,c",
dw:function(a,b){var z,y,x,w
H.k(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.K)(z),++x){w=z[x]
b.$2(w,a[w])}}},
kp:{"^":"l:10;a",
$1:function(a){return this.a.bp(0,a)}},
kq:{"^":"l:10;a",
$1:function(a){return this.a.dh(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b7:{"^":"b;U:a>,O:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.ai(b,"$isb7",[P.G],null)&&this.a==J.bE(b)&&this.b==b.gO(b)},
gv:function(a){var z,y,x
z=J.ao(this.a)
y=J.ao(this.b)
y=P.dQ(P.dQ(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jv:{"^":"b;"},
X:{"^":"jv;$ti"}}],["","",,P,{"^":"",fj:{"^":"h;",$isfj:1,"%":"SVGAnimatedLength"},li:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},lj:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lk:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},ll:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},lm:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},ln:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lo:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lp:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lq:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lr:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},ls:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lt:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lu:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lv:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lw:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lx:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lA:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lB:{"^":"bm;0n:height=,0m:width=","%":"SVGForeignObjectElement"},fW:{"^":"bm;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bm:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},lJ:{"^":"bm;0n:height=,0m:width=","%":"SVGImageElement"},b5:{"^":"h;",$isb5:1,"%":"SVGLength"},lP:{"^":"jf;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.f(c,"$isb5")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b5]},
$isj:1,
$asj:function(){return[P.b5]},
$isa:1,
$asa:function(){return[P.b5]},
$asq:function(){return[P.b5]},
"%":"SVGLengthList"},lQ:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b6:{"^":"h;",$isb6:1,"%":"SVGNumber"},m2:{"^":"js;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.f(c,"$isb6")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b6]},
$isj:1,
$asj:function(){return[P.b6]},
$isa:1,
$asa:function(){return[P.b6]},
$asq:function(){return[P.b6]},
"%":"SVGNumberList"},m7:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},m9:{"^":"h;0j:length=","%":"SVGPointList"},mb:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},mc:{"^":"fW;0n:height=,0m:width=","%":"SVGRectElement"},dw:{"^":"I;",$isdw:1,"%":"SVGScriptElement"},mo:{"^":"jL;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.r(c)
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isj:1,
$asj:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"T;",
K:function(a,b,c,d){var z,y,x,w,v,u
z=H.n([],[W.ab])
C.a.l(z,W.dP(null))
C.a.l(z,W.e_())
C.a.l(z,new W.jM())
c=new W.e2(new W.dr(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.o).dl(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a7(w)
u=z.ga5(z)
for(z=J.m(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mp:{"^":"bm;0n:height=,0m:width=","%":"SVGSVGElement"},ba:{"^":"h;",$isba:1,"%":"SVGTransform"},my:{"^":"jY;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.L(a,b)},
h:function(a,b,c){H.t(b)
H.f(c,"$isba")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
L:function(a,b){return a.getItem(b)},
$asp:function(){return[P.ba]},
$isj:1,
$asj:function(){return[P.ba]},
$isa:1,
$asa:function(){return[P.ba]},
$asq:function(){return[P.ba]},
"%":"SVGTransformList"},mM:{"^":"bm;0n:height=,0m:width=","%":"SVGUseElement"},je:{"^":"h+p;"},jf:{"^":"je+q;"},jr:{"^":"h+p;"},js:{"^":"jr+q;"},jK:{"^":"h+p;"},jL:{"^":"jK+q;"},jX:{"^":"h+p;"},jY:{"^":"jX+q;"}}],["","",,P,{"^":"",ag:{"^":"b;",$isj:1,
$asj:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
$isiq:1}}],["","",,P,{"^":"",l_:{"^":"h;0j:length=","%":"AudioBuffer"},l0:{"^":"iK;",
i:function(a,b){return P.a2(a.get(H.r(b)))},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.n([],[P.d])
this.C(a,new P.fm(z))
return z},
gj:function(a){return a.size},
$asU:function(){return[P.d,null]},
$isJ:1,
$asJ:function(){return[P.d,null]},
"%":"AudioParamMap"},fm:{"^":"l:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},l1:{"^":"L;0j:length=","%":"AudioTrackList"},fn:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m4:{"^":"fn;0j:length=","%":"OfflineAudioContext"},iK:{"^":"h+U;"}}],["","",,P,{"^":"",fp:{"^":"h;",$isfp:1,"%":"WebGLBuffer"},hV:{"^":"h;",$ishV:1,"%":"WebGLProgram"},md:{"^":"h;",
bd:function(a,b){return a.activeTexture(b)},
bf:function(a,b,c){return a.attachShader(b,c)},
bg:function(a,b,c){return a.bindBuffer(b,c)},
bi:function(a,b,c){return a.bindTexture(b,c)},
bj:function(a,b){return a.blendEquation(b)},
bk:function(a,b,c){return a.blendFunc(b,c)},
bl:function(a,b,c,d){return a.bufferData(b,c,d)},
bm:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bo:function(a,b){return a.compileShader(b)},
bq:function(a){return a.createBuffer()},
br:function(a){return a.createProgram()},
bs:function(a,b){return a.createShader(b)},
bu:function(a,b){return a.depthMask(b)},
bv:function(a,b){return a.disable(b)},
bw:function(a,b,c,d){return a.drawArrays(b,c,d)},
bx:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
by:function(a,b){return a.enable(b)},
bz:function(a,b){return a.enableVertexAttribArray(b)},
ae:function(a){return P.a2(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aD:function(a,b){return a.getShaderInfoLog(b)},
aE:function(a,b,c){return a.getShaderParameter(b,c)},
aF:function(a,b,c){return a.getUniformLocation(b,c)},
bD:function(a,b){return a.linkProgram(b)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aJ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bM:function(a,b,c){return a.uniform1f(b,c)},
bN:function(a,b,c){return a.uniform1fv(b,c)},
bO:function(a,b,c){return a.uniform1i(b,c)},
bP:function(a,b,c){return a.uniform1iv(b,c)},
bQ:function(a,b,c){return a.uniform2fv(b,c)},
bR:function(a,b,c){return a.uniform3fv(b,c)},
bS:function(a,b,c){return a.uniform4fv(b,c)},
bT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bV:function(a,b){return a.useProgram(b)},
bW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bY:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},me:{"^":"h;",
da:function(a,b){return a.beginTransformFeedback(b)},
de:function(a,b){return a.bindVertexArray(b)},
dn:function(a){return a.createVertexArray()},
dr:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ds:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
du:function(a){return a.endTransformFeedback()},
dP:function(a,b,c,d){this.d4(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
d4:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dR:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bd:function(a,b){return a.activeTexture(b)},
bf:function(a,b,c){return a.attachShader(b,c)},
bg:function(a,b,c){return a.bindBuffer(b,c)},
bi:function(a,b,c){return a.bindTexture(b,c)},
bj:function(a,b){return a.blendEquation(b)},
bk:function(a,b,c){return a.blendFunc(b,c)},
bl:function(a,b,c,d){return a.bufferData(b,c,d)},
bm:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bo:function(a,b){return a.compileShader(b)},
bq:function(a){return a.createBuffer()},
br:function(a){return a.createProgram()},
bs:function(a,b){return a.createShader(b)},
bu:function(a,b){return a.depthMask(b)},
bv:function(a,b){return a.disable(b)},
bw:function(a,b,c,d){return a.drawArrays(b,c,d)},
bx:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
by:function(a,b){return a.enable(b)},
bz:function(a,b){return a.enableVertexAttribArray(b)},
ae:function(a){return P.a2(a.getContextAttributes())},
aA:function(a,b){return a.getProgramInfoLog(b)},
aB:function(a,b,c){return a.getProgramParameter(b,c)},
aD:function(a,b){return a.getShaderInfoLog(b)},
aE:function(a,b,c){return a.getShaderParameter(b,c)},
aF:function(a,b,c){return a.getUniformLocation(b,c)},
bD:function(a,b){return a.linkProgram(b)},
aI:function(a,b,c){return a.shaderSource(b,c)},
aJ:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bM:function(a,b,c){return a.uniform1f(b,c)},
bN:function(a,b,c){return a.uniform1fv(b,c)},
bO:function(a,b,c){return a.uniform1i(b,c)},
bP:function(a,b,c){return a.uniform1iv(b,c)},
bQ:function(a,b,c){return a.uniform2fv(b,c)},
bR:function(a,b,c){return a.uniform3fv(b,c)},
bS:function(a,b,c){return a.uniform4fv(b,c)},
bT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bV:function(a,b){return a.useProgram(b)},
bW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bY:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},i5:{"^":"h;",$isi5:1,"%":"WebGLShader"},im:{"^":"h;",$isim:1,"%":"WebGLTexture"},ir:{"^":"h;",$isir:1,"%":"WebGLUniformLocation"},iw:{"^":"h;",$isiw:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",ml:{"^":"jI;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a2(this.cT(a,b))},
h:function(a,b,c){H.t(b)
H.f(c,"$isJ")
throw H.c(P.B("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
cT:function(a,b){return a.item(b)},
$asp:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isa:1,
$asa:function(){return[[P.J,,,]]},
$asq:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},jH:{"^":"h+p;"},jI:{"^":"jH+q;"}}],["","",,G,{"^":"",
iD:function(a){var z,y,x,w
z=H.n(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.i(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.a0(z,"\n")},
dM:function(a,b,c){var z,y,x,w
z=J.m(a)
y=z.bs(a,b)
z.aI(a,y,c)
z.bo(a,y)
x=H.bW(z.aE(a,y,35713))
if(x!=null&&!x){w=z.aD(a,y)
P.an("E:Compilation failed:")
P.an("E:"+G.iD(c))
P.an("E:Failure:")
P.an(C.h.G("E:",w))
throw H.c(w)}return y},
de:function(a,b){var z,y,x
H.w(a,"$isa",[T.F],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bE(a[y]))
if(y>=a.length)return H.i(a,y)
C.b.h(b,z+1,J.c9(a[y]))
z+=2
if(y>=a.length)return H.i(a,y)
x=J.cN(a[y])
if(z>=b.length)return H.i(b,z)
b[z]=x}return b},
fP:function(a,b){var z,y
H.w(a,"$isa",[T.ad],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bE(a[y]))
if(y>=a.length)return H.i(a,y)
C.b.h(b,z+1,J.c9(a[y]))}return b},
fQ:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.aN],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bE(a[y]))
if(y>=a.length)return H.i(a,y)
C.b.h(b,z+1,J.c9(a[y]))
x=z+2
if(y>=a.length)return H.i(a,y)
w=J.cN(a[y])
v=b.length
if(x>=v)return H.i(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.i(a,y)
w=J.f1(a[y])
if(z>=v)return H.i(b,z)
b[z]=w}return b},
fO:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.D]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.m.h(b,z,J.bi(a[y],0))
if(y>=a.length)return H.i(a,y)
C.m.h(b,z+1,J.bi(a[y],1))
if(y>=a.length)return H.i(a,y)
C.m.h(b,z+2,J.bi(a[y],2))
if(y>=a.length)return H.i(a,y)
C.m.h(b,z+3,J.bi(a[y],3))}return b},
ja:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.at(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.D]],v=[P.ak],u=[T.aN],t=[T.F],s=[T.ad];y.t();){r=y.d
if(!x.aa(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.ee>0)H.aX("I: "+r)
continue}q=z.i(0,r)
switch($.a8().i(0,r).a){case"vec2":b.X(r,G.fP(H.bz(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.X(r,G.de(H.bz(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.X(r,G.fQ(H.bz(q,"$isa",u,"$asa"),null),4)
break
case"float":b.X(r,new Float32Array(H.bT(H.bz(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.X(r,G.fO(H.bz(q,"$isa",w,"$asa"),null),4)
break}}},
bK:{"^":"b;"},
bP:{"^":"bK;",
aP:function(){return this.d},
k:function(a){var z,y,x,w
z=H.n(["{"+new H.dF(H.kv(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.at(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.a0(z,"\n")}},
fq:{"^":"ia;"},
fs:{"^":"b;0a,b",
bA:function(a,b,c){J.eW(this.a,b)
if(c>0)J.ff(this.a,b,c)},
bX:function(a,b,c,d,e,f,g,h){J.c5(this.a,34962,b)
J.fg(this.a,c,d,e,!1,g,h)}},
db:{"^":"b;a,b,c"},
dc:{"^":"b;a,b,c,d"},
fV:{"^":"b;a,b,c,d,e",
aN:function(a){switch($.a8().i(0,a).a){case"vec2":this.e.h(0,a,H.n([],[T.ad]))
break
case"vec3":this.e.h(0,a,H.n([],[T.F]))
break
case"vec4":this.e.h(0,a,H.n([],[T.aN]))
break
case"float":this.e.h(0,a,H.n([],[P.ak]))
break
case"uvec4":this.e.h(0,a,H.n([],[[P.a,P.D]]))
break}},
cl:function(a){var z,y,x,w,v,u
H.w(a,"$isa",[T.F],"$asa")
z=this.d
y=z.length
C.a.l(this.b,new G.db(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.K)(a),++w){v=a[w]
u=new T.F(new Float32Array(3))
u.M(v)
C.a.l(z,u)}},
ci:function(a,b){var z,y,x,w,v,u,t
z=[T.ad]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.K)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.ad(u))}},
cj:function(a,b){var z,y,x,w,v,u
z=[T.F]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.K)(b),++w){v=b[w]
u=new T.F(new Float32Array(3))
u.M(v)
x.l(y,u)}},
cm:function(a){var z,y,x,w,v,u
H.w(a,"$isa",[T.F],"$asa")
z=this.d
y=z.length
C.a.l(this.c,new G.dc(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.K)(a),++w){v=a[w]
u=new T.F(new Float32Array(3))
u.M(v)
C.a.l(z,u)}},
cq:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.n(x,[P.D])
for(x=z.length,v=0,u=0;u<z.length;z.length===x||(0,H.K)(z),++u){t=z[u]
C.a.h(w,v,t.a)
C.a.h(w,v+1,t.b)
C.a.h(w,v+2,t.c)
v+=3}for(z=y.length,u=0;u<y.length;y.length===z||(0,H.K)(y),++u){s=y[u]
x=s.a
C.a.h(w,v,x)
C.a.h(w,v+1,s.b)
r=s.c
C.a.h(w,v+2,r)
C.a.h(w,v+3,x)
C.a.h(w,v+4,r)
C.a.h(w,v+5,s.d)
v+=6}return w},
k:function(a){var z,y,x,w,v
z=H.n(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.at(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a8().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a0(z," ")}},
dD:{"^":"b;a,b,c"},
dC:{"^":"b;a,b,c"},
hp:{"^":"bP;d,a,b,c"},
hr:{"^":"bK;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sam:function(a){this.cx=H.w(a,"$isa",[P.D],"$asa")},
aM:function(a,b,c){var z,y
C.h.Y(a,0)
H.f(b,"$isag")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c5(z.a,34962,y)
J.cM(z.a,34962,b,35048)},
cr:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
X:function(a,b,c){var z,y,x,w,v
z=J.cI(a,0)===105
if(z&&this.z===0)this.z=C.f.cf(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.c7(x.a))
this.aM(a,b,c)
w=$.a8().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bB(x.a,this.e)
x.bA(0,v,z?1:0)
x.bX(0,y.i(0,a),v,w.aO(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.n(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.at(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a0(y,"  ")}},
hI:{"^":"bP;",
cn:function(a,b){var z
if(typeof a!=="number")return a.dS()
if(typeof b!=="number")return H.aI(b)
z=a/b
if(this.z===z)return
this.z=z
this.aR()},
aR:function(){var z,y,x,w,v,u
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
aP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.F(new Float32Array(3))
u.a4(x,w,v)
v=this.d
v.h(0,"uEyePosition",u)
u=this.cy
u.M(z)
u=u.a
u[12]=0
u[13]=0
u[14]=0
u[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
z=J.A(t)
y=!!z.$isaN
q=y?t.gbZ(t):1
if(!!z.$isF){p=t.gU(t)
s=t.gO(t)
r=t.gad(t)
t=p}else if(y){p=t.gU(t)
s=t.gO(t)
r=t.gad(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}z=u[0]
if(typeof t!=="number")return H.aI(t)
y=u[4]
if(typeof s!=="number")return H.aI(s)
x=u[8]
if(typeof r!=="number")return H.aI(r)
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
d.M(this.db)
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
lg:{"^":"b;"},
hZ:{"^":"bK;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cv:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.h(0,t,J.cO(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.h(0,t,J.cO(w.a,v,t))}},
cA:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.n([],[P.d])
x=H.n([],[P.d])
for(y=new H.at(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.aa(0,w))C.a.l(x,w)}for(z=this.x,z=P.jh(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isJ",[P.d,P.b],"$asJ")
z=Date.now()
for(y=new H.at(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cI(s,0)){case 117:if(w.aa(0,s)){r=b.i(0,s)
if(v.aa(0,s))H.aX("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a8().i(0,s)
if(q==null)H.N("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.t(r)
J.cb(x.a,p,r)}else if(!!J.A(r).$ish2)J.fd(x.a,p,r)
break
case"float":if(q.c===0){H.ed(r)
J.fb(x.a,p,r)}else if(!!J.A(r).$isag)J.fc(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.am(r,"$isaM").a
J.cU(x.a,p,!1,s)}else if(!!J.A(r).$isag)J.cU(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.N.gdT(H.am(r,"$islR"))
J.cT(x.a,p,!1,s)}else if(!!J.A(r).$isag)J.cT(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cS(o,p,H.am(r,"$isaN").a)
else J.cS(o,p,H.f(r,"$isag"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cR(o,p,H.am(r,"$isF").a)
else J.cR(o,p,H.f(r,"$isag"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cQ(o,p,H.am(r,"$isad").a)
else J.cQ(o,p,H.f(r,"$isag"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aI(s)
J.cJ(x.a,33984+s)
s=H.am(r,"$isil").cs()
J.cL(x.a,3553,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aI(s)
J.cJ(x.a,33984+s)
s=H.am(r,"$isil").cs()
J.cL(x.a,34067,s)
s=this.ch
J.cb(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.G()
this.ch=s+1
break
default:H.aX("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.S(r,!0)
o=x.a
if(s)J.bC(o,2929)
else J.c8(o,2929)
break
case"cStencilFunc":H.am(r,"$isdD")
s=r.a
o=x.a
if(s===1281)J.c8(o,2960)
else{J.bC(o,2960)
o=r.b
n=r.c
J.f7(x.a,s,o,n)}break
case"cDepthWrite":H.bW(r)
J.eQ(x.a,r)
break
case"cBlendEquation":H.am(r,"$isdC")
s=r.a
o=x.a
if(s===1281)J.c8(o,3042)
else{J.bC(o,3042)
o=r.b
n=r.c
J.eL(x.a,o,n)
J.eK(x.a,s)}break}++t
break}}m=P.d5(0,0,0,Date.now()-new P.b0(z,!1).a,0,0)
""+t
m.k(0)},
cp:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.bP],"$asa")
Date.now()
z=this.d
J.fe(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aW()}for(x=0;x<2;++x){w=b[x]
this.cD(w.a,w.aP())}y=this.Q
y.a_(0)
for(v=a.cy,v=new H.at(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cA()
if(u.length!==0)P.an("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bB(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cr()
s=a.Q
r=a.z
if(t)J.eJ(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.eU(q,v,y,s,0,r)
else J.eT(q,v,y,s,0)}else{s=z.a
if(r>1)J.eS(s,v,0,y,r)
else J.eR(s,v,0,y)}if(t)J.eX(z.a)},
co:function(a,b){return this.cp(a,b,null)},
p:{
i_:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a5(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.eO(b.a)
t=G.dM(b.a,35633,x)
J.cK(b.a,u,t)
s=G.dM(b.a,35632,w)
J.cK(b.a,u,s)
if(v.length>0)J.f9(b.a,u,v,35980)
J.f5(b.a,u)
if(!H.bW(J.f4(b.a,u,35714)))H.N(J.f3(b.a,u))
z=new G.hZ(b,c,d,u,P.co(c.c,z),P.a4(z,P.b),P.a4(z,z),y,a,!1,!0)
z.cv(a,b,c,d)
return z}}},
E:{"^":"b;a,b,c",
aO:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i6:{"^":"b;a,0b,c,d,e,f,r,x",
cg:function(a){var z,y,x,w
H.w(a,"$isa",[P.d],"$asa")
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
C.a.l(z,w)
y.h(0,w,this.r);++this.r}C.a.af(z)},
ck:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.d,y=0;y<2;++y)C.a.l(z,a[y])
C.a.af(z)},
aL:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.af(z)},
aQ:function(a,b){var z=[P.d]
this.b=this.cE(!0,H.w(a,"$isa",z,"$asa"),H.w(b,"$isa",z,"$asa"))},
cw:function(a){return this.aQ(a,null)},
cE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
H.w(c,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.n(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.K)(y),++u){t=y[u]
s=$.a8().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.a8().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(c!=null)C.a.E(w,c)
C.a.l(w,"void main(void) {")
C.a.E(w,b)
C.a.l(w,"}")
return C.a.a0(w,"\n")},
p:{
dx:function(a){var z,y
z=P.d
y=[z]
return new G.i6(a,H.n([],y),H.n([],y),H.n([],y),H.n([],y),0,P.a4(z,P.D))}}},
ia:{"^":"bK;"}}],["","",,Y,{"^":"",
h0:function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=[T.F]
y=P.d
x=new G.fV(!1,H.n([],[G.db]),H.n([],[G.dc]),H.n([],z),P.a4(y,[P.a,,]))
x.aN("aTexUV")
x.aN("aNormal")
w=P.a4(y,P.D)
v=a2.split("\n")
u=H.n([],z)
t=H.n([],z)
y=[T.ad]
s=H.n([],y)
r=Date.now()
q=P.dv("\\s+",!0,!1)
p=P.dv("\\s\\s*\\$",!0,!1)
for(o=v.length,n=0;n<v.length;v.length===o||(0,H.K)(v),++n){m=v[n]
m.toString
l=H.kS(m,q," ")
k=H.kU(l,p,"",0)
l=k.length
if(l!==0){if(0>=l)return H.i(k,0)
l=k[0]==="#"}else l=!0
if(l)continue
j=k.split(" ")
l=j.length
if(0>=l)return H.i(j,0)
i=j[0]
if(J.S(i,"g")){if(1>=l)return H.i(j,1)
w.h(0,j[1],u.length)}else if(J.S(i,"v")){if(1>=l)return H.i(j,1)
i=P.aH(j[1],null)
if(2>=l)return H.i(j,2)
h=P.aH(j[2],null)
if(3>=l)return H.i(j,3)
l=P.aH(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.l(u,new T.F(g))}else if(J.S(i,"vt")){if(1>=l)return H.i(j,1)
i=P.aH(j[1],null)
if(2>=l)return H.i(j,2)
l=P.aH(j[2],null)
h=new Float32Array(2)
C.b.h(h,0,i)
C.b.h(h,1,l)
C.a.l(s,new T.ad(h))}else if(J.S(i,"vn")){if(1>=l)return H.i(j,1)
i=P.aH(j[1],null)
if(2>=l)return H.i(j,2)
h=P.aH(j[2],null)
if(3>=l)return H.i(j,3)
l=P.aH(j[3],null)
g=new Float32Array(3)
C.b.h(g,0,i)
C.b.h(g,1,h)
C.b.h(g,2,l)
C.a.l(t,new T.F(g))}else if(J.S(i,"f")){if(l!==4&&l!==5){H.aX("*** Error: face '"+k+"' not handled")
continue}f=H.n([],z)
e=H.n([],z)
d=H.n([],y)
for(c=1;l=j.length,c<l;++c){b=J.f6(j[c],"/")
for(;b.length<3;)C.a.l(b,"")
l=P.cC(b[0],null,null)
if(typeof l!=="number")return l.W()
a=l-1
if(1>=b.length)return H.i(b,1)
if(J.S(b[1],""))a0=-1
else{if(1>=b.length)return H.i(b,1)
l=P.cC(b[1],null,null)
if(typeof l!=="number")return l.W()
a0=l-1}if(2>=b.length)return H.i(b,2)
if(J.S(b[2],""))a1=-1
else{if(2>=b.length)return H.i(b,2)
l=P.cC(b[2],null,null)
if(typeof l!=="number")return l.W()
a1=l-1}l=u.length
if(a<l){if(a<0)return H.i(u,a)
C.a.l(f,u[a])}else C.a.l(f,new T.F(new Float32Array(3)))
if(a0!==-1&&a0<s.length){if(a0<0||a0>=s.length)return H.i(s,a0)
C.a.l(d,s[a0])}else{H.aX("problem uv "+c+" "+a0)
C.a.l(d,new T.ad(new Float32Array(2)))}if(a1!==-1&&a1<t.length){if(a1<0||a1>=t.length)return H.i(t,a1)
C.a.l(e,t[a1])}else{H.aX("problem normals "+c+" "+a1)
C.a.l(e,new T.F(new Float32Array(3)))}}if(l===4)x.cl(f)
else x.cm(f)
x.cj("aNormal",e)
x.ci("aTexUV",d)}}P.an("loaded ("+P.d5(0,0,0,Date.now()-new P.b0(r,!1).a,0,0).k(0)+") "+x.k(0))
return x}}],["","",,R,{"^":"",
jj:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.iT("span",null),"$isT")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.x).ai(y,"float")
y.setProperty(x,"left","")
x=C.x.ai(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.p.F(z,v)}return z},
hJ:{"^":"hI;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dI:[function(a){var z,y,x
z=this.fy
y=z.clientWidth
x=z.clientHeight
z.width=y
z.height=x
P.an("size change "+H.e(y)+" "+H.e(x))
this.cn(y,x)
J.fh(this.go.a,0,0,y,x)},"$1","gdH",4,0,24]},
ic:{"^":"b;",
cz:function(a,b,c){var z,y
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
y=J.m(z)
y.F(z,this.b)
y.F(z,this.d)
y.F(z,this.c)}},
id:{"^":"ic;e,f,a,b,c,d",
cC:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.dO(y,2)+" fps"
C.p.c4(this.c,b)
x=C.f.S(30*C.z.df(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isT")
v=w.style
u=""+x+"px"
v.height=u
C.p.F(z,w)},
cB:function(a){return this.cC(a,"")}}}],["","",,V,{}],["","",,D,{"^":"",
hk:function(a){var z,y,x,w
z=P.d
y=new P.P(0,$.C,[z])
x=new XMLHttpRequest()
C.y.dD(x,"GET",a)
w=W.br
W.ah(x,"loadend",H.k(new D.hl(new P.dK(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.y.c3(x,"")
return y},
hl:{"^":"l:25;a,b",
$1:function(a){H.f(a,"$isbr")
this.a.bp(0,H.aU(W.ka(this.b.response),{futureOr:1,type:P.d}))}},
hc:{"^":"b;a,b,c",
ct:function(a){var z,y
a=document
z=W.b4
y={func:1,ret:-1,args:[z]}
W.ah(a,"keydown",H.k(new D.he(this),y),!1,z)
W.ah(a,"keyup",H.k(new D.hf(this),y),!1,z)},
p:{
hd:function(a){var z=P.D
z=new D.hc(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z))
z.ct(a)
return z}}},
he:{"^":"l:13;a",
$1:function(a){var z
H.f(a,"$isb4")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hf:{"^":"l:13;a",
$1:function(a){var z
H.f(a,"$isb4")
z=this.a
z.a.bJ(0,a.which)
z.c.l(0,a.which)}},
hu:{"^":"b;a,b,c,d,e,f,r,x",
cu:function(a){var z,y,x
if(a==null)a=document
z=J.m(a)
y=z.gbG(a)
x=H.o(y,0)
W.ah(y.a,y.b,H.k(new D.hw(this),{func:1,ret:-1,args:[x]}),!1,x)
x=z.gbF(a)
y=H.o(x,0)
W.ah(x.a,x.b,H.k(new D.hx(this),{func:1,ret:-1,args:[y]}),!1,y)
y=z.gbH(a)
x=H.o(y,0)
W.ah(y.a,y.b,H.k(new D.hy(this),{func:1,ret:-1,args:[x]}),!1,x)
z=z.gbI(a)
x=H.o(z,0)
W.ah(z.a,z.b,H.k(new D.hz(this),{func:1,ret:-1,args:[x]}),!1,x)},
p:{
hv:function(a){var z=P.D
z=new D.hu(P.a5(null,null,null,z),P.a5(null,null,null,z),P.a5(null,null,null,z),0,0,0,0,0)
z.cu(a)
return z}}},
hw:{"^":"l:4;a",
$1:function(a){var z,y
H.f(a,"$isV")
a.preventDefault()
z=this.a
y=J.m(a)
z.r=H.t(y.gbE(a).a)
z.x=H.t(y.gbE(a).b)
z.d=a.movementX
z.e=a.movementY}},
hx:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
P.an("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hy:{"^":"l:4;a",
$1:function(a){var z
H.f(a,"$isV")
a.preventDefault()
z=this.a
z.a.bJ(0,a.button)
z.c.l(0,a.button)}},
hz:{"^":"l:27;a",
$1:function(a){H.f(a,"$isaO")
a.preventDefault()
this.a.f=H.t(C.ae.gdq(a))}},
hH:{"^":"fq;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c1:function(a){var z,y
z=C.b.dv(H.w(a,"$isj",[P.b],"$asj"),0,new A.kx(),P.D)
if(typeof z!=="number")return H.aI(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kx:{"^":"l:28;",
$2:function(a,b){var z,y
H.t(a)
z=J.ao(b)
if(typeof a!=="number")return a.G()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aM:{"^":"b;a",
M:function(a){var z,y
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
i:function(a,b){var z=this.a
if(b>=16)return H.i(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aM){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.c1(this.a)},
a1:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.i(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.i(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.i(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.i(y,x)
z[3]=y[x]
return new T.aN(z)},
a3:function(){var z=this.a
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
z[15]=1}},ad:{"^":"b;a",
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ad){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.c1(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.i(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gU:function(a){return this.a[0]},
gO:function(a){return this.a[1]}},F:{"^":"b;a",
a4:function(a,b,c){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)
C.b.h(z,2,c)},
M:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.F){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.c1(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.i(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbC:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
av:function(a){var z,y,x
z=Math.sqrt(this.gbC())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
at:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bt:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.F(new Float32Array(3))
z.a4(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gU:function(a){return this.a[0]},
gO:function(a){return this.a[1]},
gad:function(a){return this.a[2]},
p:{
iv:function(a,b,c){var z=new T.F(new Float32Array(3))
z.a4(a,b,c)
return z}}},aN:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aN){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.c1(this.a)},
i:function(a,b){var z=this.a
if(b>=4)return H.i(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gU:function(a){return this.a[0]},
gO:function(a){return this.a[1]},
gad:function(a){return this.a[2]},
gbZ:function(a){return this.a[3]}}}],["","",,T,{"^":"",
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=C.q.c1(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.id(0,0,x,w,y.createElement("div"),R.jj("blue","gray",90,30))
u.cz(x,"blue","gray")
t=H.f(C.q.dF(y,"#webgl-canvas"),"$isce")
s=new G.fs(t)
y=P.d
x=P.b
v=(t&&C.J).c0(t,"webgl2",P.dl(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
s.a=v
if(v==null)H.N(P.da('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
r="ChronosGL Config: "+H.e(J.f2(v))
if($.ee>0)P.an("I: "+r)
J.eM(v,0,0,0,1)
J.bC(v,2929)
v=new Float32Array(3)
r=D.hd(null)
q=D.hv(t)
p=new T.aM(new Float32Array(16))
p.a3()
o=new Float32Array(3)
n=new Float32Array(3)
m=new Float32Array(3)
l=new D.hH(25,0,0,0,new T.F(v),-0.02,r,q,p,new T.F(o),new T.F(n),new T.F(m),new T.F(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.aM(new Float32Array(16))
v.a3()
r=new T.aM(new Float32Array(16))
r.a3()
k=new R.hJ(t,s,l,50,1,0.1,1000,v,r,new T.aM(new Float32Array(16)),P.a4(y,x),"perspective",!1,!0)
k.aR()
k.dI(null)
v=W.a0
W.ah(window,"resize",H.k(k.gdH(),{func:1,ret:-1,args:[v]}),!1,v)
j=G.i_("demo",s,$.eE(),$.eD())
z.a=null
i=D.hk("../ct_logo.obj")
i.ac(new T.kL(z,j),null)
v=$.eF()
C.a.l(v,i)
y=P.a4(y,x)
y.h(0,"cDepthTest",!0)
y.h(0,"cDepthWrite",!0)
y.h(0,"cBlendEquation",$.en())
y.h(0,"cStencilFunc",$.er())
y.h(0,"uColor",$.eo())
r=new Float32Array(16)
q=new T.aM(r)
q.a3()
h=Math.cos(1.5707963267948966)
g=Math.sin(1.5707963267948966)
p=r[4]
o=r[8]
n=r[5]
m=r[9]
f=r[6]
e=r[10]
d=r[7]
c=r[11]
b=-g
r[4]=p*h+o*g
r[5]=n*h+m*g
r[6]=f*h+e*g
r[7]=d*h+c*g
r[8]=p*b+o*h
r[9]=n*b+m*h
r[10]=f*b+e*h
r[11]=d*b+c*h
y.h(0,"uModelMatrix",q)
z.b=0
P.fS(v,null,!1,x).ac(new T.kM(new T.kK(z,l,j,k,new G.hp(y,"mat",!1,!0),u)),null)},
kL:{"^":"l:29;a,b",
$1:function(a){var z,y,x,w,v,u,t,s,r
z=Y.h0(H.r(a))
y=this.b
x=y.d
y=y.e.x
w=P.d
v=P.a4(w,P.b)
u=J.eP(x.a)
t=new G.hr(x,u,4,v,y,0,-1,P.a4(w,P.ag),"meshdata:",!1,!0)
w=G.de(z.d,null)
v.h(0,"aPosition",J.c7(x.a))
t.ch=w
t.aM("aPosition",w,3)
s=$.a8().i(0,"aPosition")
if(s==null)H.N("Unknown canonical aPosition")
r=y.i(0,"aPosition")
J.bB(x.a,u)
x.bA(0,r,0)
x.bX(0,v.i(0,"aPosition"),r,s.aO(),5126,!1,0,0)
y=H.w(z.cq(),"$isa",[P.D],"$asa")
t.y=J.c7(x.a)
w=t.ch.length
if(w<768){t.sam(new Uint8Array(H.bT(y)))
t.Q=5121}else if(w<196608){t.sam(new Uint16Array(H.bT(y)))
t.Q=5123}else{t.sam(new Uint32Array(H.bT(y)))
t.Q=5125}J.bB(x.a,u)
y=t.y
w=t.cx
J.c5(x.a,34963,y)
J.cM(x.a,34963,w,35048)
G.ja(z,t)
this.a.a=t}},
kK:{"^":"l:30;a,b,c,d,e,f",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
H.cE(b2)
if(typeof b2!=="number")return b2.W()
z=this.a
z.b=b2+0
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aG()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aG()
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
if(typeof v!=="number")return v.aG()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.r.dg(y.id,-1.4707963267948965,1.4707963267948965)
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
t=y.k2.a
q[12]=q[12]+t[0]
q[13]=q[13]+t[1]
q[14]=q[14]+t[2]
p=q[12]
o=q[13]
n=q[14]
m=new T.F(new Float32Array(3))
m.a4(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
u=new Float32Array(3)
l=new T.F(u)
l.M(v)
u[0]=u[0]-t[0]
u[1]=u[1]-t[1]
u[2]=u[2]-t[2]
l.av(0)
k=m.bt(l)
k.av(0)
j=l.bt(k)
j.av(0)
t=k.at(v)
r=j.at(v)
v=l.at(v)
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
a=Math.sqrt(h.gbC())
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
w.c.a_(0)
w.b.a_(0)
x.e=0
x.d=0
x.f=0
x.c.a_(0)
x.b.a_(0)
this.c.co(z.a,H.n([this.d,this.e],[G.bP]))
C.af.gd8(window).ac(this,-1)
this.f.cB(z.b)}},
kM:{"^":"l:31;a",
$1:function(a){H.bg(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.A=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.df.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dh.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.aV=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.bY=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.kt=function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bb.prototype
return a}
J.ku=function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bb.prototype
return a}
J.bZ=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.bb.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c0(a)}
J.c_=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.bb.prototype
return a}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).B(a,b)}
J.a9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kt(a).P(a,b)}
J.bi=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kH(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aV(a).i(a,b)}
J.eG=function(a,b,c){return J.bY(a).h(a,b,c)}
J.cI=function(a,b){return J.bZ(a).Y(a,b)}
J.bA=function(a,b){return J.m(a).cX(a,b)}
J.eH=function(a,b,c){return J.m(a).cY(a,b,c)}
J.cJ=function(a,b){return J.m(a).bd(a,b)}
J.eI=function(a,b,c,d){return J.m(a).d5(a,b,c,d)}
J.cK=function(a,b,c){return J.m(a).bf(a,b,c)}
J.eJ=function(a,b){return J.m(a).da(a,b)}
J.c5=function(a,b,c){return J.m(a).bg(a,b,c)}
J.cL=function(a,b,c){return J.m(a).bi(a,b,c)}
J.bB=function(a,b){return J.m(a).de(a,b)}
J.eK=function(a,b){return J.m(a).bj(a,b)}
J.eL=function(a,b,c){return J.m(a).bk(a,b,c)}
J.cM=function(a,b,c,d){return J.m(a).bl(a,b,c,d)}
J.eM=function(a,b,c,d,e){return J.m(a).bm(a,b,c,d,e)}
J.eN=function(a,b){return J.ku(a).J(a,b)}
J.c6=function(a,b,c){return J.aV(a).dj(a,b,c)}
J.c7=function(a){return J.m(a).bq(a)}
J.eO=function(a){return J.m(a).br(a)}
J.eP=function(a){return J.m(a).dn(a)}
J.eQ=function(a,b){return J.m(a).bu(a,b)}
J.c8=function(a,b){return J.m(a).bv(a,b)}
J.eR=function(a,b,c,d){return J.m(a).bw(a,b,c,d)}
J.eS=function(a,b,c,d,e){return J.m(a).dr(a,b,c,d,e)}
J.eT=function(a,b,c,d,e){return J.m(a).bx(a,b,c,d,e)}
J.eU=function(a,b,c,d,e,f){return J.m(a).ds(a,b,c,d,e,f)}
J.eV=function(a,b){return J.bY(a).q(a,b)}
J.bC=function(a,b){return J.m(a).by(a,b)}
J.eW=function(a,b){return J.m(a).bz(a,b)}
J.eX=function(a){return J.m(a).du(a)}
J.eY=function(a,b){return J.m(a).C(a,b)}
J.eZ=function(a){return J.m(a).gd9(a)}
J.ao=function(a){return J.A(a).gv(a)}
J.bD=function(a){return J.bY(a).gw(a)}
J.aZ=function(a){return J.aV(a).gj(a)}
J.f_=function(a){return J.m(a).gdE(a)}
J.f0=function(a){return J.m(a).gdM(a)}
J.f1=function(a){return J.c_(a).gbZ(a)}
J.bE=function(a){return J.c_(a).gU(a)}
J.c9=function(a){return J.c_(a).gO(a)}
J.cN=function(a){return J.c_(a).gad(a)}
J.ca=function(a,b){return J.m(a).V(a,b)}
J.f2=function(a){return J.m(a).ae(a)}
J.f3=function(a,b){return J.m(a).aA(a,b)}
J.f4=function(a,b,c){return J.m(a).aB(a,b,c)}
J.cO=function(a,b,c){return J.m(a).aF(a,b,c)}
J.f5=function(a,b){return J.m(a).bD(a,b)}
J.cP=function(a){return J.m(a).dG(a)}
J.f6=function(a,b){return J.bZ(a).c7(a,b)}
J.f7=function(a,b,c,d){return J.m(a).aJ(a,b,c,d)}
J.f8=function(a){return J.bZ(a).dN(a)}
J.bj=function(a){return J.A(a).k(a)}
J.f9=function(a,b,c,d){return J.m(a).dP(a,b,c,d)}
J.fa=function(a){return J.bZ(a).dQ(a)}
J.fb=function(a,b,c){return J.m(a).bM(a,b,c)}
J.fc=function(a,b,c){return J.m(a).bN(a,b,c)}
J.cb=function(a,b,c){return J.m(a).bO(a,b,c)}
J.fd=function(a,b,c){return J.m(a).bP(a,b,c)}
J.cQ=function(a,b,c){return J.m(a).bQ(a,b,c)}
J.cR=function(a,b,c){return J.m(a).bR(a,b,c)}
J.cS=function(a,b,c){return J.m(a).bS(a,b,c)}
J.cT=function(a,b,c,d){return J.m(a).bT(a,b,c,d)}
J.cU=function(a,b,c,d){return J.m(a).bU(a,b,c,d)}
J.fe=function(a,b){return J.m(a).bV(a,b)}
J.ff=function(a,b,c){return J.m(a).dR(a,b,c)}
J.fg=function(a,b,c,d,e,f,g){return J.m(a).bW(a,b,c,d,e,f,g)}
J.fh=function(a,b,c,d,e){return J.m(a).bY(a,b,c,d,e)}
I.aJ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.bF.prototype
C.J=W.ce.prototype
C.x=W.fz.prototype
C.p=W.fG.prototype
C.K=W.fH.prototype
C.L=W.fX.prototype
C.q=W.fY.prototype
C.y=W.fZ.prototype
C.M=J.h.prototype
C.a=J.bn.prototype
C.z=J.df.prototype
C.f=J.dg.prototype
C.N=J.dh.prototype
C.r=J.bo.prototype
C.h=J.bp.prototype
C.U=J.bq.prototype
C.b=H.hA.prototype
C.m=H.hC.prototype
C.v=W.hD.prototype
C.C=J.hK.prototype
C.D=W.hW.prototype
C.I=W.ik.prototype
C.w=J.bb.prototype
C.ae=W.aO.prototype
C.af=W.iy.prototype
C.e=new P.jw()
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
C.A=function(hooks) { return hooks; }

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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.n(I.aJ(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.W=H.n(I.aJ(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Y=H.n(I.aJ([]),[P.z])
C.X=H.n(I.aJ([]),[P.d])
C.t=H.n(I.aJ(["bind","if","ref","repeat","syntax"]),[P.d])
C.u=H.n(I.aJ(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Z=new G.E("vec3","vertex btangents",0)
C.d=new G.E("vec3","",0)
C.a_=new G.E("vec4","delta from light",0)
C.n=new G.E("","",0)
C.E=new G.E("vec3","vertex coordinates",0)
C.a0=new G.E("vec3","vertex binormals",0)
C.F=new G.E("vec4","for wireframe",0)
C.a1=new G.E("vec4","per vertex color",0)
C.a2=new G.E("float","for normal maps",0)
C.j=new G.E("mat4","",0)
C.a4=new G.E("mat4","",4)
C.a3=new G.E("mat4","",128)
C.c=new G.E("float","",0)
C.a5=new G.E("float","",4)
C.a6=new G.E("float","depth for shadowmaps",0)
C.i=new G.E("sampler2D","",0)
C.a7=new G.E("float","for bump maps",0)
C.a8=new G.E("vec2","texture uvs",0)
C.a9=new G.E("float","time since program start in sec",0)
C.k=new G.E("vec2","",0)
C.aa=new G.E("samplerCube","",0)
C.l=new G.E("vec4","",0)
C.ab=new G.E("vec3","vertex normals",0)
C.ac=new G.E("sampler2DShadow","",0)
C.G=new G.E("vec3","per vertex color",0)
C.H=new G.E("mat3","",0)
C.ad=new G.E("vec3","vertex tangents",0)
$.aa=0
$.b_=null
$.cX=null
$.cu=!1
$.eg=null
$.ea=null
$.el=null
$.bX=null
$.c2=null
$.cB=null
$.aR=null
$.bc=null
$.bd=null
$.cv=!1
$.C=C.e
$.af=null
$.ch=null
$.d8=null
$.d7=null
$.d3=null
$.d2=null
$.d1=null
$.d0=null
$.ee=0
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
I.$lazy(y,x,w)}})(["la","eq",function(){return H.ef("_$dart_dartClosure")},"lO","cF",function(){return H.ef("_$dart_js")},"mz","es",function(){return H.ac(H.bO({
toString:function(){return"$receiver$"}}))},"mA","et",function(){return H.ac(H.bO({$method$:null,
toString:function(){return"$receiver$"}}))},"mB","eu",function(){return H.ac(H.bO(null))},"mC","ev",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mF","ey",function(){return H.ac(H.bO(void 0))},"mG","ez",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mE","ex",function(){return H.ac(H.dE(null))},"mD","ew",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"mI","eB",function(){return H.ac(H.dE(void 0))},"mH","eA",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"mS","cG",function(){return P.iE()},"n7","bh",function(){return[]},"l7","ep",function(){return{}},"mZ","eC",function(){return P.co(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"n_","cH",function(){return P.a4(P.d,P.bl)},"mm","er",function(){return new G.dD(1281,0,4294967295)},"l2","en",function(){return new G.dC(1281,1281,1281)},"n5","a8",function(){return P.dl(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.G,"aColorAlpha",C.a1,"aPosition",C.E,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.F,"aPointSize",C.c,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.G,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.E,"vPositionFromLight",C.a_,"vCenter",C.F,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.aa,"uAnimationTable",C.i,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.E)},"l5","eo",function(){return T.iv(0.8,0.8,0.8)},"nb","eE",function(){var z,y
z=G.dx("FixedVertexColorV")
y=[P.d]
z.cg(H.n(["aPosition"],y))
z.ck(H.n(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.aL(H.n(["vColor"],y))
z.aQ(H.n(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],y),H.n(["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    // float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    // float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    // info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"],y))
return z},"na","eD",function(){var z,y
z=G.dx("FixedVertexColorF")
y=[P.d]
z.aL(H.n(["vColor"],y))
z.cw(H.n(["oFragColor = vec4( vColor, 1.0 );"],y))
return z},"nc","eF",function(){return H.n([],[[P.Z,P.b]])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.V]},{func:1,ret:P.R,args:[W.ab]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.d,args:[P.D]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.R,args:[P.d]},{func:1,ret:P.R,args:[W.T,P.d,P.d,W.bv]},{func:1,ret:P.z,args:[W.b4]},{func:1,args:[P.d]},{func:1,ret:P.z,args:[,P.Q]},{func:1,ret:P.z,args:[,],opt:[P.Q]},{func:1,ret:[P.P,,],args:[,]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.z,args:[P.G]},{func:1,args:[W.a0]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,args:[,,]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:P.z,args:[W.br]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.aO]},{func:1,ret:P.D,args:[P.D,P.b]},{func:1,ret:P.z,args:[P.d]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.z,args:[[P.a,,]]},{func:1,ret:P.D,args:[,,]},{func:1,args:[,P.d]},{func:1,ret:P.R,args:[W.u]}]
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
if(x==y)H.kW(d||a)
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
Isolate.aJ=a.aJ
Isolate.be=a.be
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
if(typeof dartMainRunner==="function")dartMainRunner(T.ei,[])
else T.ei([])})})()
//# sourceMappingURL=obj.dart.js.map
