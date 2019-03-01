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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cE(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",m5:{"^":"b;a"}}],["","",,J,{"^":"",
cJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c2:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cH==null){H.kY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.cy("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.cL()]
if(v!=null)return v
v=H.l2(a)
if(v!=null)return v
if(typeof a=="function")return C.U
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.cL(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
h:{"^":"b;",
B:function(a,b){return a===b},
gv:function(a){return H.b6(a)},
k:["ct",function(a){return"Instance of '"+H.b7(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hq:{"^":"h;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isS:1},
dp:{"^":"h;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isz:1},
cq:{"^":"h;",
gv:function(a){return 0},
k:["cv",function(a){return String(a)}]},
i1:{"^":"cq;"},
b9:{"^":"cq;"},
bq:{"^":"cq;",
k:function(a){var z=a[$.ey()]
if(z==null)return this.cv(a)
return"JavaScript function for "+H.e(J.bj(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbl:1},
bn:{"^":"h;$ti",
l:function(a,b){H.y(b,H.o(a,0))
if(!!a.fixed$length)H.N(P.A("add"))
a.push(b)},
H:function(a,b){var z
H.w(b,"$isk",[H.o(a,0)],"$ask")
if(!!a.fixed$length)H.N(P.A("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
a0:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.h(z,y,H.e(a[y]))
return z.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
bq:function(a,b){var z,y
H.m(b,{func:1,ret:P.S,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aK(a))}return!1},
co:function(a,b){if(!!a.immutable$list)H.N(P.A("sort"))
H.is(a,J.kv(),H.o(a,0))},
ag:function(a){return this.co(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.T(a[z],b))return!0
return!1},
k:function(a){return P.co(a,"[","]")},
gw:function(a){return new J.fE(a,a.length,0,[H.o(a,0)])},
gv:function(a){return H.b6(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.aj(a,b))
return a[b]},
h:function(a,b,c){H.r(b)
H.y(c,H.o(a,0))
if(!!a.immutable$list)H.N(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aj(a,b))
if(b>=a.length||b<0)throw H.c(H.aj(a,b))
a[b]=c},
$isv:1,
$asv:I.be,
$isk:1,
$isa:1,
p:{
hp:function(a,b){return J.cp(H.l(a,[b]))},
cp:function(a){H.bg(a)
a.fixed$length=Array
return a},
m3:[function(a,b){return J.f0(H.er(a,"$isY"),H.er(b,"$isY"))},"$2","kv",8,0,31]}},
m4:{"^":"bn;$ti"},
fE:{"^":"b;a,b,c,0d,$ti",
sb3:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.J(z))
x=this.c
if(x>=y){this.sb3(null)
return!1}this.sb3(z[x]);++this.c
return!0},
$isb1:1},
bo:{"^":"h;",
J:function(a,b){var z
H.cK(b)
if(typeof b!=="number")throw H.c(H.aE(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gac(b)
if(this.gac(a)===z)return 0
if(this.gac(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gac:function(a){return a===0?1/a<0:a<0},
c1:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.A(""+a+".toInt()"))},
dq:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.A(""+a+".ceil()"))},
dr:function(a,b,c){if(this.J(b,c)>0)throw H.c(H.aE(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
dZ:function(a,b){var z
if(b>20)throw H.c(P.bO(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gac(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
cz:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bn(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.bn(a,b)},
bn:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.A("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bl:function(a,b){var z
if(a>0)z=this.dc(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dc:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.c(H.aE(b))
return a>b},
$isY:1,
$asY:function(){return[P.G]},
$isak:1,
$isG:1},
dn:{"^":"bo;",$isE:1},
dm:{"^":"bo;"},
bp:{"^":"h;",
bC:function(a,b){if(b<0)throw H.c(H.aj(a,b))
if(b>=a.length)H.N(H.aj(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(b>=a.length)throw H.c(H.aj(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.t(b)
if(typeof b!=="string")throw H.c(P.d0(b,null,null))
return a+b},
cp:function(a,b){var z=H.l(a.split(b),[P.d])
return z},
cr:function(a,b,c){var z
if(c>a.length)throw H.c(P.bO(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cq:function(a,b){return this.cr(a,b,0)},
aP:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.bP(b,null,null))
if(b>c)throw H.c(P.bP(b,null,null))
if(c>a.length)throw H.c(P.bP(c,null,null))
return a.substring(b,c)},
cs:function(a,b){return this.aP(a,b,null)},
dY:function(a){return a.toLowerCase()},
e0:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.Y(z,0)===133){x=J.hr(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.bC(z,w)===133?J.hs(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
du:function(a,b,c){if(c>a.length)throw H.c(P.bO(c,0,a.length,null,null))
return H.la(a,b,c)},
J:function(a,b){var z
H.t(b)
if(typeof b!=="string")throw H.c(H.aE(b))
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
$isdA:1,
$isd:1,
p:{
dq:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hr:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.Y(a,b)
if(y!==32&&y!==13&&!J.dq(y))break;++b}return b},
hs:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.bC(a,z)
if(y!==32&&y!==13&&!J.dq(y))break}return b}}}}],["","",,H,{"^":"",
hn:function(){return new P.cv("No element")},
ho:function(){return new P.cv("Too many elements")},
is:function(a,b,c){H.w(a,"$isa",[c],"$asa")
H.m(b,{func:1,ret:P.E,args:[c,c]})
H.bs(a,0,J.aX(a)-1,b,c)},
bs:function(a,b,c,d,e){H.w(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.E,args:[e,e]})
if(c-b<=32)H.ir(a,b,c,d,e)
else H.iq(a,b,c,d,e)},
ir:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isa",[e],"$asa")
H.m(d,{func:1,ret:P.E,args:[e,e]})
for(z=b+1,y=J.aS(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.a9(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.h(a,w,y.i(a,v))
w=v}y.h(a,w,x)}},
iq:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isa",[a2],"$asa")
H.m(a1,{func:1,ret:P.E,args:[a2,a2]})
z=C.f.S(a0-b+1,6)
y=b+z
x=a0-z
w=C.f.S(b+a0,2)
v=w-z
u=w+z
t=J.aS(a)
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
if(J.T(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.a3()
if(i<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.O()
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
if(typeof e!=="number")return e.a3()
if(e<0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.O()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.O()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a3()
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
if(m<y&&l>x){for(;J.T(a1.$2(t.i(a,m),r),0);)++m
for(;J.T(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.h(a,k,t.i(a,m))
t.h(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.a3()
h=l-1
if(i<0){t.h(a,k,t.i(a,m))
g=m+1
t.h(a,m,t.i(a,l))
t.h(a,l,j)
m=g}else{t.h(a,k,t.i(a,l))
t.h(a,l,j)}l=h
break}}H.bs(a,m,l,a1,a2)}else H.bs(a,m,l,a1,a2)},
dc:{"^":"k;"},
bL:{"^":"dc;$ti",
gw:function(a){return new H.du(this,this.gj(this),0,[H.cG(this,"bL",0)])},
aC:function(a,b){return this.cu(0,H.m(b,{func:1,ret:P.S,args:[H.cG(this,"bL",0)]}))}},
du:{"^":"b;a,b,c,0d,$ti",
sb4:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.aS(z)
x=y.gj(z)
if(this.b!==x)throw H.c(P.aK(z))
w=this.c
if(w>=x){this.sb4(null)
return!1}this.sb4(y.q(z,w));++this.c
return!0},
$isb1:1},
hH:{"^":"bL;a,b,$ti",
gj:function(a){return J.aX(this.a)},
q:function(a,b){return this.b.$1(J.fa(this.a,b))},
$asbL:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dP:{"^":"k;a,b,$ti",
gw:function(a){return new H.iP(J.bE(this.a),this.b,this.$ti)}},
iP:{"^":"b1;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z)))return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bK:{"^":"b;$ti"}}],["","",,H,{"^":"",
aJ:function(a){var z,y
z=H.t(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kQ:function(a){return init.types[H.r(a)]},
l0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.B(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.bj(a)
if(typeof z!=="string")throw H.c(H.aE(a))
return z},
b6:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ib:function(a,b){var z,y
if(typeof a!=="string")H.N(H.aE(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.i(z,3)
y=H.t(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
ia:function(a){var z,y
if(typeof a!=="string")H.N(H.aE(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.ft(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
b7:function(a){return H.i2(a)+H.bW(H.al(a),0,null)},
i2:function(a){var z,y,x,w,v,u,t,s,r
z=J.B(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isb9){u=C.C(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aJ(w.length>1&&C.h.Y(w,0)===36?C.h.cs(w,1):w)},
W:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i9:function(a){return a.b?H.W(a).getUTCFullYear()+0:H.W(a).getFullYear()+0},
i7:function(a){return a.b?H.W(a).getUTCMonth()+1:H.W(a).getMonth()+1},
i3:function(a){return a.b?H.W(a).getUTCDate()+0:H.W(a).getDate()+0},
i4:function(a){return a.b?H.W(a).getUTCHours()+0:H.W(a).getHours()+0},
i6:function(a){return a.b?H.W(a).getUTCMinutes()+0:H.W(a).getMinutes()+0},
i8:function(a){return a.b?H.W(a).getUTCSeconds()+0:H.W(a).getSeconds()+0},
i5:function(a){return a.b?H.W(a).getUTCMilliseconds()+0:H.W(a).getMilliseconds()+0},
aU:function(a){throw H.c(H.aE(a))},
i:function(a,b){if(a==null)J.aX(a)
throw H.c(H.aj(a,b))},
aj:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
z=H.r(J.aX(a))
if(!(b<0)){if(typeof z!=="number")return H.aU(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bP(b,"index",null)},
aE:function(a){return new P.an(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.bN()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eu})
z.name=""}else z.toString=H.eu
return z},
eu:function(){return J.bj(this.dartException)},
N:function(a){throw H.c(a)},
J:function(a){throw H.c(P.aK(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bl(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cs(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dz(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.eB()
u=$.eC()
t=$.eD()
s=$.eE()
r=$.eH()
q=$.eI()
p=$.eG()
$.eF()
o=$.eK()
n=$.eJ()
m=v.I(y)
if(m!=null)return z.$1(H.cs(H.t(y),m))
else{m=u.I(y)
if(m!=null){m.method="call"
return z.$1(H.cs(H.t(y),m))}else{m=t.I(y)
if(m==null){m=s.I(y)
if(m==null){m=r.I(y)
if(m==null){m=q.I(y)
if(m==null){m=p.I(y)
if(m==null){m=s.I(y)
if(m==null){m=o.I(y)
if(m==null){m=n.I(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dz(H.t(y),m))}}return z.$1(new H.iL(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dF()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.an(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dF()
return a},
aT:function(a){var z
if(a==null)return new H.e6(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e6(a)},
kM:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.h(0,a[y],a[x])}return b},
l_:function(a,b,c,d,e,f){H.f(a,"$isbl")
switch(H.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.df("Unsupported number of arguments for wrapped closure"))},
aF:function(a,b){var z
H.r(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l_)
a.$identity=z
return z},
fO:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.B(d).$isa){z.$reflectionInfo=d
x=H.ig(z).r}else x=d
w=e?Object.create(new H.iu().constructor.prototype):Object.create(new H.cf(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aa
if(typeof u!=="number")return u.F()
$.aa=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.d5(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kQ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d3:H.cg
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.c("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.d5(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w.$C=q
w.$R=z.$R
w.$D=z.$D
return v},
fL:function(a,b,c,d){var z=H.cg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d5:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fN(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fL(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.F()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aY
if(v==null){v=H.bI("self")
$.aY=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.F()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aY
if(v==null){v=H.bI("self")
$.aY=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fM:function(a,b,c,d){var z,y
z=H.cg
y=H.d3
switch(b?-1:a){case 0:throw H.c(H.ik("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fN:function(a,b){var z,y,x,w,v,u,t,s
z=$.aY
if(z==null){z=H.bI("self")
$.aY=z}y=$.d2
if(y==null){y=H.bI("receiver")
$.d2=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fM(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.aa
if(typeof y!=="number")return y.F()
$.aa=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.aa
if(typeof y!=="number")return y.F()
$.aa=y+1
return new Function(z+y+"}")()},
cE:function(a,b,c,d,e,f,g){return H.fO(a,b,H.r(c),d,!!e,!!f,g)},
t:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.a6(a,"String"))},
el:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"double"))},
cK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.a6(a,"num"))},
bY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.a6(a,"bool"))},
r:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.a6(a,"int"))},
c6:function(a,b){throw H.c(H.a6(a,H.aJ(H.t(b).substring(3))))},
l8:function(a,b){throw H.c(H.d4(a,H.aJ(H.t(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.B(a)[b])return a
H.c6(a,b)},
ae:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.B(a)[b]
else z=!0
if(z)return a
H.l8(a,b)},
er:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.B(a)[b])return a
H.c6(a,b)},
nB:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.B(a)[b])return a
H.c6(a,b)},
bg:function(a){if(a==null)return a
if(!!J.B(a).$isa)return a
throw H.c(H.a6(a,"List<dynamic>"))},
l1:function(a,b){var z
if(a==null)return a
z=J.B(a)
if(!!z.$isa)return a
if(z[b])return a
H.c6(a,b)},
cF:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.r(z)]
else return a.$S()}return},
bx:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.cF(J.B(a))
if(z==null)return!1
return H.ec(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.cA)return a
$.cA=!0
try{if(H.bx(a,b))return a
z=H.by(b)
y=H.a6(a,z)
throw H.c(y)}finally{$.cA=!1}},
aR:function(a,b){if(a!=null&&!H.cD(a,b))H.N(H.a6(a,H.by(b)))
return a},
eg:function(a){var z,y
z=J.B(a)
if(!!z.$isn){y=H.cF(z)
if(y!=null)return H.by(y)
return"Closure"}return H.b7(a)},
lf:function(a){throw H.c(new P.fU(H.t(a)))},
en:function(a){return init.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
al:function(a){if(a==null)return
return a.$ti},
nw:function(a,b,c){return H.aW(a["$as"+H.e(c)],H.al(b))},
bf:function(a,b,c,d){var z
H.t(c)
H.r(d)
z=H.aW(a["$as"+H.e(c)],H.al(b))
return z==null?null:z[d]},
cG:function(a,b,c){var z
H.t(b)
H.r(c)
z=H.aW(a["$as"+H.e(b)],H.al(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.r(b)
z=H.al(a)
return z==null?null:z[b]},
by:function(a){return H.aD(a,null)},
aD:function(a,b){var z,y
H.w(b,"$isa",[P.d],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aJ(a[0].builtin$cls)+H.bW(a,1,b)
if(typeof a=="function")return H.aJ(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.r(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.e(b[y])}if('func' in a)return H.ku(a,b)
if('futureOr' in a)return"FutureOr<"+H.aD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ku:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.d]
H.w(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.l([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.h.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aD(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aD(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aD(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aD(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kL(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.t(z[l])
n=n+m+H.aD(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
bW:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isa",[P.d],"$asa")
if(a==null)return""
z=new P.cw("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aD(u,c)}return"<"+z.k(0)+">"},
kP:function(a){var z,y,x,w
z=J.B(a)
if(!!z.$isn){y=H.cF(z)
if(y!=null)return y}x=z.constructor
if(a==null)return x
if(typeof a!="object")return x
w=H.al(a)
if(w!=null){w=w.slice()
w.splice(0,0,x)
x=w}return x},
aW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ai:function(a,b,c,d){var z,y
H.t(b)
H.bg(c)
H.t(d)
if(a==null)return!1
z=H.al(a)
y=J.B(a)
if(y[b]==null)return!1
return H.ej(H.aW(y[d],z),null,c,null)},
bz:function(a,b,c,d){H.t(b)
H.bg(c)
H.t(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.d4(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aJ(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
w:function(a,b,c,d){H.t(b)
H.bg(c)
H.t(d)
if(a==null)return a
if(H.ai(a,b,c,d))return a
throw H.c(H.a6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aJ(b.substring(3))+H.bW(c,0,null),init.mangledGlobalNames)))},
ej:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
ns:function(a,b,c){return a.apply(b,H.aW(J.B(b)["$as"+H.e(c)],H.al(b)))},
ep:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.ep(z)}return!1},
cD:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.ep(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bx(a,b)}z=J.B(a).constructor
y=H.al(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.cD(a,b))throw H.c(H.a6(a,H.by(b)))
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
if('func' in c)return H.ec(a,b,c,d)
if('func' in a)return c.builtin$cls==="bl"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"Z" in y.prototype))return!1
w=y.prototype["$as"+"Z"]
v=H.aW(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ej(H.aW(r,z),b,u,d)},
ec:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.l7(m,b,l,d)},
l7:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
nt:function(a,b,c){Object.defineProperty(a,H.t(b),{value:c,enumerable:false,writable:true,configurable:true})},
l2:function(a){var z,y,x,w,v,u
z=H.t($.eo.$1(a))
y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c4[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.t($.ei.$2(a,z))
if(z!=null){y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c4[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c5(x)
$.bZ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c4[z]=x
return x}if(v==="-"){u=H.c5(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.es(a,x)
if(v==="*")throw H.c(P.cy(z))
if(init.leafTags[z]===true){u=H.c5(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.es(a,x)},
es:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cJ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c5:function(a){return J.cJ(a,!1,null,!!a.$isx)},
l6:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c5(z)
else return J.cJ(z,c,null,null)},
kY:function(){if(!0===$.cH)return
$.cH=!0
H.kZ()},
kZ:function(){var z,y,x,w,v,u,t,s
$.bZ=Object.create(null)
$.c4=Object.create(null)
H.kU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.et.$1(v)
if(u!=null){t=H.l6(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kU:function(){var z,y,x,w,v,u,t
z=C.R()
z=H.aQ(C.O,H.aQ(C.T,H.aQ(C.B,H.aQ(C.B,H.aQ(C.S,H.aQ(C.P,H.aQ(C.Q(C.C),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eo=new H.kV(v)
$.ei=new H.kW(u)
$.et=new H.kX(t)},
aQ:function(a,b){return a(b)||b},
la:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
lc:function(a,b,c,d){var z=b.cZ(a,d)
if(z==null)return a
return H.le(a,z.b.index,z.gdE(z),c)},
lb:function(a,b,c){var z,y
z=b.gbi()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
ld:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.lc(a,b,c,d)},
le:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ie:{"^":"b;a,b,c,d,e,f,r,0x",p:{
ig:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cp(z)
y=z[0]
x=z[1]
return new H.ie(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iF:{"^":"b;a,b,c,d,e,f",
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
if(z==null)z=H.l([],[P.d])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dL:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"O;a,b",
k:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
dz:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
hu:{"^":"O;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cs:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hu(a,y,z?null:b.receiver)}}},
iL:{"^":"O;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lg:{"^":"n:7;a",
$1:function(a){if(!!J.B(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e6:{"^":"b;a,0b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isR:1},
n:{"^":"b;",
k:function(a){return"Closure '"+H.b7(this).trim()+"'"},
gcg:function(){return this},
$isbl:1,
gcg:function(){return this}},
dH:{"^":"n;"},
iu:{"^":"dH;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aJ(z)+"'"}},
cf:{"^":"dH;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.b6(this.a)
else y=typeof z!=="object"?J.am(z):H.b6(z)
return(y^H.b6(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b7(z)+"'")},
p:{
cg:function(a){return a.a},
d3:function(a){return a.c},
bI:function(a){var z,y,x,w,v
z=new H.cf("self","target","receiver","name")
y=J.cp(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iG:{"^":"O;a",
k:function(a){return this.a},
p:{
a6:function(a,b){return new H.iG("TypeError: "+P.bJ(a)+": type '"+H.eg(a)+"' is not a subtype of type '"+b+"'")}}},
fJ:{"^":"O;a",
k:function(a){return this.a},
p:{
d4:function(a,b){return new H.fJ("CastError: "+P.bJ(a)+": type '"+H.eg(a)+"' is not a subtype of type '"+b+"'")}}},
ij:{"^":"O;a",
k:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
ik:function(a){return new H.ij(a)}}},
dM:{"^":"b;a,0b,0c,0d",
gaa:function(){var z=this.b
if(z==null){z=H.by(this.a)
this.b=z}return z},
k:function(a){return this.gaa()},
gv:function(a){var z=this.d
if(z==null){z=C.h.gv(this.gaa())
this.d=z}return z},
B:function(a,b){if(b==null)return!1
return b instanceof H.dM&&this.gaa()===b.gaa()}},
cr:{"^":"dv;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gD:function(a){return new H.ar(this,[H.o(this,0)])},
ab:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cV(z,b)}else{y=this.dJ(b)
return y}},
dJ:function(a){var z=this.d
if(z==null)return!1
return this.ax(this.ar(z,J.am(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a7(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.a7(w,b)
x=y==null?null:y.b
return x}else return this.dK(b)},
dK:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ar(z,J.am(a)&0x3ffffff)
x=this.ax(y,a)
if(x<0)return
return y[x].b},
h:function(a,b,c){var z,y,x,w,v,u
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.at()
this.b=z}this.b5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.at()
this.c=y}this.b5(y,b,c)}else{x=this.d
if(x==null){x=this.at()
this.d=x}w=J.am(b)&0x3ffffff
v=this.ar(x,w)
if(v==null)this.av(x,w,[this.ak(b,c)])
else{u=this.ax(v,b)
if(u>=0)v[u].b=c
else v.push(this.ak(b,c))}}},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aK(this))
z=z.c}},
b5:function(a,b,c){var z
H.y(b,H.o(this,0))
H.y(c,H.o(this,1))
z=this.a7(a,b)
if(z==null)this.av(a,b,this.ak(b,c))
else z.b=c},
b7:function(){this.r=this.r+1&67108863},
ak:function(a,b){var z,y
z=new H.hz(H.y(a,H.o(this,0)),H.y(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b7()
return z},
ax:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
k:function(a){return P.dw(this)},
a7:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
av:function(a,b,c){a[b]=c},
cW:function(a,b){delete a[b]},
cV:function(a,b){return this.a7(a,b)!=null},
at:function(){var z=Object.create(null)
this.av(z,"<non-identifier-key>",z)
this.cW(z,"<non-identifier-key>")
return z},
$isds:1},
hz:{"^":"b;a,b,0c,0d"},
ar:{"^":"dc;a,$ti",
gj:function(a){return this.a.a},
gw:function(a){var z,y
z=this.a
y=new H.hA(z,z.r,this.$ti)
y.c=z.e
return y}},
hA:{"^":"b;a,b,0c,0d,$ti",
sb6:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aK(z))
else{z=this.c
if(z==null){this.sb6(null)
return!1}else{this.sb6(z.a)
this.c=this.c.c
return!0}}},
$isb1:1},
kV:{"^":"n:7;a",
$1:function(a){return this.a(a)}},
kW:{"^":"n:32;a",
$2:function(a,b){return this.a(a,b)}},
kX:{"^":"n:14;a",
$1:function(a){return this.a(H.t(a))}},
ht:{"^":"b;a,b,0c,0d",
k:function(a){return"RegExp/"+this.a+"/"},
gbi:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.dr(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
cZ:function(a,b){var z,y
z=this.gbi()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.jD(this,y)},
$isdA:1,
p:{
dr:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(P.cn("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
jD:{"^":"b;a,b",
gdE:function(a){var z=this.b
return z.index+z[0].length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.i(z,b)
return z[b]}}}],["","",,H,{"^":"",
kL:function(a){return J.hp(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
aV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bV:function(a){var z,y
if(!!J.B(a).$isv)return a
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)C.a.h(z,y,a[y])
return z},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aj(b,a))},
hU:{"^":"h;",$isiH:1,"%":"DataView;ArrayBufferView;cu|e0|e1|dx|e2|e3|at"},
cu:{"^":"hU;",
gj:function(a){return a.length},
$isv:1,
$asv:I.be,
$isx:1,
$asx:I.be},
dx:{"^":"e1;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
h:function(a,b,c){H.r(b)
H.el(c)
H.ad(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.ak]},
$asp:function(){return[P.ak]},
$isk:1,
$ask:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
"%":"Float64Array"},
at:{"^":"e3;",
h:function(a,b,c){H.r(b)
H.r(c)
H.ad(b,a,a.length)
a[b]=c},
$asbK:function(){return[P.E]},
$asp:function(){return[P.E]},
$isk:1,
$ask:function(){return[P.E]},
$isa:1,
$asa:function(){return[P.E]}},
hT:{"^":"dx;",$isah:1,"%":"Float32Array"},
me:{"^":"at;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mf:{"^":"at;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
$ishl:1,
"%":"Int32Array"},
mg:{"^":"at;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mh:{"^":"at;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
hV:{"^":"at;",
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isn2:1,
"%":"Uint32Array"},
mi:{"^":"at;",
gj:function(a){return a.length},
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mj:{"^":"at;",
gj:function(a){return a.length},
i:function(a,b){H.ad(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e0:{"^":"cu+p;"},
e1:{"^":"e0+bK;"},
e2:{"^":"cu+p;"},
e3:{"^":"e2+bK;"}}],["","",,P,{"^":"",
iW:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kC()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aF(new P.iY(z),1)).observe(y,{childList:true})
return new P.iX(z,y,x)}else if(self.setImmediate!=null)return P.kD()
return P.kE()},
nc:[function(a){self.scheduleImmediate(H.aF(new P.iZ(H.m(a,{func:1,ret:-1})),0))},"$1","kC",4,0,3],
nd:[function(a){self.setImmediate(H.aF(new P.j_(H.m(a,{func:1,ret:-1})),0))},"$1","kD",4,0,3],
ne:[function(a){H.m(a,{func:1,ret:-1})
P.kb(0,a)},"$1","kE",4,0,3],
hb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
H.w(a,"$isk",[[P.Z,d]],"$ask")
s=[[P.a,d]]
y=new P.Q(0,$.D,s)
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hd(z,b,!1,y)
try{for(r=a,q=r.length,p=0,o=0;p<r.length;r.length===q||(0,H.J)(r),++p){w=r[p]
v=o
w.aA(new P.hc(z,v,y,b,!1,d),x,null)
o=++z.b}if(o===0){r=new P.Q(0,$.D,s)
r.ba(C.Y)
return r}r=new Array(o)
r.fixed$length=Array
z.a=H.l(r,[d])}catch(n){u=H.a3(n)
t=H.aT(n)
if(z.b===0||!1){m=u
if(m==null)m=new P.bN()
r=$.D
if(r!==C.e)r.toString
s=new P.Q(0,r,s)
s.bb(m,t)
return s}else{z.c=u
z.d=t}}return y},
ky:function(a,b){if(H.bx(a,{func:1,args:[P.b,P.R]}))return H.m(a,{func:1,ret:null,args:[P.b,P.R]})
if(H.bx(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.c(P.d0(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kx:function(){var z,y
for(;z=$.aO,z!=null;){$.bd=null
y=z.b
$.aO=y
if(y==null)$.bc=null
z.a.$0()}},
nq:[function(){$.cB=!0
try{P.kx()}finally{$.bd=null
$.cB=!1
if($.aO!=null)$.cM().$1(P.ek())}},"$0","ek",0,0,1],
ef:function(a){var z=new P.dR(H.m(a,{func:1,ret:-1}))
if($.aO==null){$.bc=z
$.aO=z
if(!$.cB)$.cM().$1(P.ek())}else{$.bc.b=z
$.bc=z}},
kB:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.aO
if(z==null){P.ef(a)
$.bd=$.bc
return}y=new P.dR(a)
x=$.bd
if(x==null){y.b=z
$.bd=y
$.aO=y}else{y.b=x.b
x.b=y
$.bd=y
if(y.b==null)$.bc=y}},
l9:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.D
if(C.e===y){P.aP(null,null,C.e,a)
return}y.toString
P.aP(null,null,y,H.m(y.bt(a),z))},
bX:function(a,b,c,d,e){var z={}
z.a=d
P.kB(new P.kz(z,e))},
ed:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
ee:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
kA:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
aP:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bt(d):c.dl(d,-1)
P.ef(d)},
iY:{"^":"n:8;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iX:{"^":"n:25;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iZ:{"^":"n:0;a",
$0:function(){this.a.$0()}},
j_:{"^":"n:0;a",
$0:function(){this.a.$0()}},
ka:{"^":"b;a,0b,c",
cQ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aF(new P.kc(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
p:{
kb:function(a,b){var z=new P.ka(!0,0)
z.cQ(a,b)
return z}}},
kc:{"^":"n:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
Z:{"^":"b;$ti"},
hd:{"^":"n:15;a,b,c,d",
$2:function(a,b){var z,y
H.f(b,"$isR")
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.G(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.G(z.c,z.d)}},
hc:{"^":"n;a,b,c,d,e,f",
$1:function(a){var z,y
H.y(a,this.f)
z=this.a;--z.b
y=z.a
if(y!=null){C.a.h(y,this.b,a)
if(z.b===0)this.c.bd(z.a)}else if(z.b===0&&!this.e)this.c.G(z.c,z.d)},
$S:function(){return{func:1,ret:P.z,args:[this.f]}}},
dV:{"^":"b;$ti",
dt:function(a,b){if(a==null)a=new P.bN()
if(this.a.a!==0)throw H.c(P.bt("Future already completed"))
$.D.toString
this.G(a,b)},
ds:function(a){return this.dt(a,null)}},
dS:{"^":"dV;a,$ti",
bE:function(a,b){var z
H.aR(b,{futureOr:1,type:H.o(this,0)})
z=this.a
if(z.a!==0)throw H.c(P.bt("Future already completed"))
z.ba(b)},
G:function(a,b){this.a.bb(a,b)}},
k5:{"^":"dV;a,$ti",
G:function(a,b){this.a.G(a,b)}},
aM:{"^":"b;0a,b,c,d,e,$ti",
dL:function(a){if(this.c!==6)return!0
return this.b.b.az(H.m(this.d,{func:1,ret:P.S,args:[P.b]}),a.a,P.S,P.b)},
dI:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bx(z,{func:1,args:[P.b,P.R]}))return H.aR(w.dT(z,a.a,a.b,null,y,P.R),x)
else return H.aR(w.az(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
Q:{"^":"b;bm:a<,b,0d8:c<,$ti",
aA:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.e){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ky(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.Q(0,$.D,[c])
w=b==null?1:3
this.b9(new P.aM(x,w,a,b,[z,c]))
return x},
ad:function(a,b){return this.aA(a,null,b)},
b9:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaM")
this.c=a}else{if(z===2){y=H.f(this.c,"$isQ")
z=y.a
if(z<4){y.b9(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.aP(null,null,z,H.m(new P.jh(this,a),{func:1,ret:-1}))}},
bj:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaM")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isQ")
y=u.a
if(y<4){u.bj(a)
return}this.a=y
this.c=u.c}z.a=this.a9(a)
y=this.b
y.toString
P.aP(null,null,y,H.m(new P.jo(z,this),{func:1,ret:-1}))}},
a8:function(){var z=H.f(this.c,"$isaM")
this.c=null
return this.a9(z)},
a9:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
am:function(a){var z,y,x
z=H.o(this,0)
H.aR(a,{futureOr:1,type:z})
y=this.$ti
if(H.ai(a,"$isZ",y,"$asZ"))if(H.ai(a,"$isQ",y,null))P.bT(a,this)
else P.dW(a,this)
else{x=this.a8()
H.y(a,z)
this.a=4
this.c=a
P.aN(this,x)}},
bd:function(a){var z
H.y(a,H.o(this,0))
z=this.a8()
this.a=4
this.c=a
P.aN(this,z)},
G:function(a,b){var z
H.f(b,"$isR")
z=this.a8()
this.a=8
this.c=new P.a0(a,b)
P.aN(this,z)},
ba:function(a){var z
H.aR(a,{futureOr:1,type:H.o(this,0)})
if(H.ai(a,"$isZ",this.$ti,"$asZ")){this.cT(a)
return}this.a=1
z=this.b
z.toString
P.aP(null,null,z,H.m(new P.jj(this,a),{func:1,ret:-1}))},
cT:function(a){var z=this.$ti
H.w(a,"$isZ",z,"$asZ")
if(H.ai(a,"$isQ",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aP(null,null,z,H.m(new P.jn(this,a),{func:1,ret:-1}))}else P.bT(a,this)
return}P.dW(a,this)},
bb:function(a,b){var z
H.f(b,"$isR")
this.a=1
z=this.b
z.toString
P.aP(null,null,z,H.m(new P.ji(this,a,b),{func:1,ret:-1}))},
$isZ:1,
p:{
dW:function(a,b){var z,y,x
b.a=1
try{a.aA(new P.jk(b),new P.jl(b),null)}catch(x){z=H.a3(x)
y=H.aT(x)
P.l9(new P.jm(b,z,y))}},
bT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isQ")
if(z>=4){y=b.a8()
b.a=a.a
b.c=a.c
P.aN(b,y)}else{y=H.f(b.c,"$isaM")
b.a=2
b.c=a
a.bj(y)}},
aN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isa0")
y=y.b
u=v.a
t=v.b
y.toString
P.bX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.aN(z.a,b)}y=z.a
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
if(p){H.f(r,"$isa0")
y=y.b
u=r.a
t=r.b
y.toString
P.bX(null,null,y,u,t)
return}o=$.D
if(o!=q)$.D=q
else o=null
y=b.c
if(y===8)new P.jr(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jq(x,b,r).$0()}else if((y&2)!==0)new P.jp(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.B(y).$isZ){if(y.a>=4){n=H.f(t.c,"$isaM")
t.c=null
b=t.a9(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.bT(y,t)
return}}m=b.b
n=H.f(m.c,"$isaM")
m.c=null
b=m.a9(n)
y=x.a
u=x.b
if(!y){H.y(u,H.o(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa0")
m.a=8
m.c=u}z.a=m
y=m}}}},
jh:{"^":"n:0;a,b",
$0:function(){P.aN(this.a,this.b)}},
jo:{"^":"n:0;a,b",
$0:function(){P.aN(this.b,this.a.a)}},
jk:{"^":"n:8;a",
$1:function(a){var z=this.a
z.a=0
z.am(a)}},
jl:{"^":"n:16;a",
$2:function(a,b){H.f(b,"$isR")
this.a.G(a,b)},
$1:function(a){return this.$2(a,null)}},
jm:{"^":"n:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
jj:{"^":"n:0;a,b",
$0:function(){var z=this.a
z.bd(H.y(this.b,H.o(z,0)))}},
jn:{"^":"n:0;a,b",
$0:function(){P.bT(this.b,this.a)}},
ji:{"^":"n:0;a,b,c",
$0:function(){this.a.G(this.b,this.c)}},
jr:{"^":"n:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bZ(H.m(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.aT(v)
if(this.d){w=H.f(this.a.a.c,"$isa0").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa0")
else u.b=new P.a0(y,x)
u.a=!0
return}if(!!J.B(z).$isZ){if(z instanceof P.Q&&z.gbm()>=4){if(z.gbm()===8){w=this.b
w.b=H.f(z.gd8(),"$isa0")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ad(new P.js(t),null)
w.a=!1}}},
js:{"^":"n:17;a",
$1:function(a){return this.a}},
jq:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.y(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.az(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.aT(t)
x=this.a
x.b=new P.a0(z,y)
x.a=!0}}},
jp:{"^":"n:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa0")
w=this.c
if(w.dL(z)&&w.e!=null){v=this.b
v.b=w.dI(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.aT(u)
w=H.f(this.a.a.c,"$isa0")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a0(y,x)
s.a=!0}}},
dR:{"^":"b;a,0b"},
iy:{"^":"b;$ti",
gj:function(a){var z,y,x,w
z={}
y=new P.Q(0,$.D,[P.E])
z.a=0
x=H.o(this,0)
w=H.m(new P.iA(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.iB(z,y),{func:1,ret:-1})
W.aC(this.a,this.b,w,!1,x)
return y}},
iA:{"^":"n;a,b",
$1:function(a){H.y(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.o(this.b,0)]}}},
iB:{"^":"n:0;a,b",
$0:function(){this.b.am(this.a.a)}},
iz:{"^":"b;"},
a0:{"^":"b;a,b",
k:function(a){return H.e(this.a)},
$isO:1},
ki:{"^":"b;",$isna:1},
kz:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bN()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.k(0)
throw x}},
jP:{"^":"ki;",
dU:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.e===$.D){a.$0()
return}P.ed(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.aT(x)
P.bX(null,null,this,z,H.f(y,"$isR"))}},
dV:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.e===$.D){a.$1(b)
return}P.ee(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.aT(x)
P.bX(null,null,this,z,H.f(y,"$isR"))}},
dl:function(a,b){return new P.jR(this,H.m(a,{func:1,ret:b}),b)},
bt:function(a){return new P.jQ(this,H.m(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.jS(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bZ:function(a,b){H.m(a,{func:1,ret:b})
if($.D===C.e)return a.$0()
return P.ed(null,null,this,a,b)},
az:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.D===C.e)return a.$1(b)
return P.ee(null,null,this,a,b,c,d)},
dT:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.D===C.e)return a.$2(b,c)
return P.kA(null,null,this,a,b,c,d,e,f)}},
jR:{"^":"n;a,b,c",
$0:function(){return this.a.bZ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jQ:{"^":"n:1;a,b",
$0:function(){return this.a.dU(this.b)}},
jS:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.dV(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dt:function(a,b,c){H.bg(a)
return H.w(H.kM(a,new H.cr(0,0,[b,c])),"$isds",[b,c],"$asds")},
a_:function(a,b){return new H.cr(0,0,[a,b])},
hB:function(){return new H.cr(0,0,[null,null])},
a4:function(a,b,c,d){return new P.jz(0,0,[d])},
hm:function(a,b,c){var z,y
if(P.cC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=H.l([],[P.d])
y=$.bh()
C.a.l(y,a)
try{P.kw(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dG(b,H.l1(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
co:function(a,b,c){var z,y,x
if(P.cC(a))return b+"..."+c
z=new P.cw(b)
y=$.bh()
C.a.l(y,a)
try{x=z
x.a=P.dG(x.gR(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gR()+c
y=z.gR()
return y.charCodeAt(0)==0?y:y},
cC:function(a){var z,y
for(z=0;y=$.bh(),z<y.length;++z)if(a===y[z])return!0
return!1},
kw:function(a,b){var z,y,x,w,v,u,t,s,r,q
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
ct:function(a,b){var z,y,x
z=P.a4(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.J)(a),++x)z.l(0,H.y(a[x],b))
return z},
dw:function(a){var z,y,x
z={}
if(P.cC(a))return"{...}"
y=new P.cw("")
try{C.a.l($.bh(),a)
x=y
x.a=x.gR()+"{"
z.a=!0
J.fd(a,new P.hG(z,y))
z=y
z.a=z.gR()+"}"}finally{z=$.bh()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gR()
return z.charCodeAt(0)==0?z:z},
jz:{"^":"ju;a,0b,0c,0d,0e,0f,r,$ti",
gw:function(a){var z=new P.e_(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.f(z[b],"$isbw")!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return H.f(y[b],"$isbw")!=null}else return this.cU(b)},
cU:function(a){var z=this.d
if(z==null)return!1
return this.aq(this.bg(z,a),a)>=0},
l:function(a,b){var z,y
H.y(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cz()
this.b=z}return this.b8(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cz()
this.c=y}return this.b8(y,b)}else return this.cR(0,b)},
cR:function(a,b){var z,y,x
H.y(b,H.o(this,0))
z=this.d
if(z==null){z=P.cz()
this.d=z}y=this.be(b)
x=z[y]
if(x==null)z[y]=[this.au(b)]
else{if(this.aq(x,b)>=0)return!1
x.push(this.au(b))}return!0},
bY:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bk(this.c,b)
else return this.d3(0,b)},
d3:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bg(z,b)
x=this.aq(y,b)
if(x<0)return!1
this.bo(y.splice(x,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.as()}},
b8:function(a,b){H.y(b,H.o(this,0))
if(H.f(a[b],"$isbw")!=null)return!1
a[b]=this.au(b)
return!0},
bk:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isbw")
if(z==null)return!1
this.bo(z)
delete a[b]
return!0},
as:function(){this.r=this.r+1&67108863},
au:function(a){var z,y
z=new P.bw(H.y(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.as()
return z},
bo:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.as()},
be:function(a){return J.am(a)&0x3ffffff},
bg:function(a,b){return a[this.be(b)]},
aq:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
p:{
cz:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bw:{"^":"b;a,0b,0c"},
e_:{"^":"b;a,b,0c,0d,$ti",
sbc:function(a){this.d=H.y(a,H.o(this,0))},
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aK(z))
else{z=this.c
if(z==null){this.sbc(null)
return!1}else{this.sbc(H.y(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isb1:1,
p:{
jA:function(a,b,c){var z=new P.e_(a,b,[c])
z.c=a.e
return z}}},
ju:{"^":"il;"},
hC:{"^":"jB;",$isk:1,$isa:1},
p:{"^":"b;$ti",
gw:function(a){return new H.du(a,this.gj(a),0,[H.bf(this,a,"p",0)])},
q:function(a,b){return this.i(a,b)},
dG:function(a,b,c,d){var z,y,x
H.y(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bf(this,a,"p",0)]})
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.i(a,x))
if(z!==this.gj(a))throw H.c(P.aK(a))}return y},
k:function(a){return P.co(a,"[","]")}},
dv:{"^":"V;"},
hG:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
V:{"^":"b;$ti",
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bf(this,a,"V",0),H.bf(this,a,"V",1)]})
for(z=J.bE(this.gD(a));z.t();){y=z.gA(z)
b.$2(y,this.i(a,y))}},
gj:function(a){return J.aX(this.gD(a))},
k:function(a){return P.dw(a)},
$isK:1},
im:{"^":"b;$ti",
H:function(a,b){var z
for(z=J.bE(H.w(b,"$isk",this.$ti,"$ask"));z.t();)this.l(0,z.gA(z))},
k:function(a){return P.co(this,"{","}")},
$isk:1,
$ismB:1},
il:{"^":"im;"},
jB:{"^":"b+p;"}}],["","",,P,{"^":"",
cI:function(a,b,c){var z
H.t(a)
z=H.ib(a,c)
if(z!=null)return z
throw H.c(P.cn(a,null,null))},
aG:function(a,b){var z
H.t(a)
z=H.ia(a)
if(z!=null)return z
throw H.c(P.cn("Invalid double",a,null))},
h5:function(a){if(a instanceof H.n)return a.k(0)
return"Instance of '"+H.b7(a)+"'"},
dC:function(a,b,c){return new H.ht(a,H.dr(a,!1,!0,!1))},
bJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h5(a)},
df:function(a){return new P.je(a)},
aI:function(a){H.aV(H.e(a))},
S:{"^":"b;"},
"+bool":0,
aZ:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a&&this.b===b.b},
J:function(a,b){return C.f.J(this.a,H.f(b,"$isaZ").a)},
gv:function(a){var z=this.a
return(z^C.f.bl(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fV(H.i9(this))
y=P.bk(H.i7(this))
x=P.bk(H.i3(this))
w=P.bk(H.i4(this))
v=P.bk(H.i6(this))
u=P.bk(H.i8(this))
t=P.fW(H.i5(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isY:1,
$asY:function(){return[P.aZ]},
p:{
fV:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bk:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"G;"},
"+double":0,
b_:{"^":"b;a",
O:function(a,b){return C.f.O(this.a,H.f(b,"$isb_").a)},
B:function(a,b){if(b==null)return!1
return b instanceof P.b_&&this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
J:function(a,b){return C.f.J(this.a,H.f(b,"$isb_").a)},
k:function(a){var z,y,x,w,v
z=new P.h1()
y=this.a
if(y<0)return"-"+new P.b_(0-y).k(0)
x=z.$1(C.f.S(y,6e7)%60)
w=z.$1(C.f.S(y,1e6)%60)
v=new P.h0().$1(y%1e6)
return""+C.f.S(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
$isY:1,
$asY:function(){return[P.b_]},
p:{
db:function(a,b,c,d,e,f){return new P.b_(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h0:{"^":"n:5;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h1:{"^":"n:5;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"b;"},
bN:{"^":"O;",
k:function(a){return"Throw of null."}},
an:{"^":"O;a,b,c,d",
gao:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gan:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gao()+y+x
if(!this.a)return w
v=this.gan()
u=P.bJ(this.b)
return w+v+": "+u},
p:{
fD:function(a){return new P.an(!1,null,null,a)},
d0:function(a,b,c){return new P.an(!0,a,b,c)}}},
dB:{"^":"an;e,f,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bP:function(a,b,c){return new P.dB(null,null,!0,a,b,"Value not in range")},
bO:function(a,b,c,d,e){return new P.dB(b,c,!0,a,d,"Invalid value")}}},
hk:{"^":"an;e,j:f>,a,b,c,d",
gao:function(){return"RangeError"},
gan:function(){var z,y
z=H.r(this.b)
if(typeof z!=="number")return z.a3()
if(z<0)return": index must not be negative"
y=this.f
if(y===0)return": no indices are valid"
return": index should be less than "+H.e(y)},
p:{
H:function(a,b,c,d,e){var z=H.r(e==null?J.aX(b):e)
return new P.hk(b,z,!0,a,c,"Index out of range")}}},
iM:{"^":"O;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.iM(a)}}},
iK:{"^":"O;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cy:function(a){return new P.iK(a)}}},
cv:{"^":"O;a",
k:function(a){return"Bad state: "+this.a},
p:{
bt:function(a){return new P.cv(a)}}},
fP:{"^":"O;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bJ(z)+"."},
p:{
aK:function(a){return new P.fP(a)}}},
dF:{"^":"b;",
k:function(a){return"Stack Overflow"},
$isO:1},
fU:{"^":"O;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
je:{"^":"b;a",
k:function(a){return"Exception: "+this.a}},
h9:{"^":"b;a,b,c",
k:function(a){var z,y,x,w
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.e(z):"FormatException"
x=this.b
if(typeof x==="string"){w=x.length>78?C.h.aP(x,0,75)+"...":x
return y+"\n"+w}else return y},
p:{
cn:function(a,b,c){return new P.h9(a,b,c)}}},
bl:{"^":"b;"},
E:{"^":"G;"},
"+int":0,
k:{"^":"b;$ti",
aC:["cu",function(a,b){var z=H.cG(this,"k",0)
return new H.dP(this,H.m(b,{func:1,ret:P.S,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.t();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.N(P.bO(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
k:function(a){return P.hm(this,"(",")")}},
b1:{"^":"b;$ti"},
a:{"^":"b;$ti",$isk:1},
"+List":0,
K:{"^":"b;$ti"},
z:{"^":"b;",
gv:function(a){return P.b.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
G:{"^":"b;",$isY:1,
$asY:function(){return[P.G]}},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gv:function(a){return H.b6(this)},
k:function(a){return"Instance of '"+H.b7(this)+"'"},
toString:function(){return this.k(this)}},
R:{"^":"b;"},
d:{"^":"b;",$isY:1,
$asY:function(){return[P.d]},
$isdA:1},
"+String":0,
cw:{"^":"b;R:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dG:function(a,b,c){var z=J.bE(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gA(z))
while(z.t())}else{a+=H.e(z.gA(z))
for(;z.t();)a=a+c+H.e(z.gA(z))}return a}}}}],["","",,W,{"^":"",
kK:function(){return document},
h2:function(a,b,c){var z,y,x,w
z=document.body
y=(z&&C.q).K(z,a,b,c)
y.toString
z=W.u
z=new H.dP(new W.a7(y),H.m(new W.h3(),{func:1,ret:P.S,args:[z]}),[z])
x=z.gw(z)
if(!x.t())H.N(H.hn())
w=x.gA(x)
if(x.t())H.N(H.ho())
return H.f(w,"$isU")},
h4:function(a){H.f(a,"$isL")
return"wheel"},
b0:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fg(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
ja:function(a,b){return document.createElement(a)},
bU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dZ:function(a,b,c,d){var z,y
z=W.bU(W.bU(W.bU(W.bU(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eb:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j4(a)
if(!!J.B(z).$isL)return z
return}else return H.f(a,"$isL")},
kt:function(a){var z
if(!!J.B(a).$iscj)return a
z=new P.iT([],[],!1)
z.c=!0
return z.aB(a)},
eh:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.e)return a
return z.dm(a,b)},
M:{"^":"U;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lh:{"^":"h;0j:length=","%":"AccessibleNodeList"},
fB:{"^":"M;",
k:function(a){return String(a)},
$isfB:1,
"%":"HTMLAnchorElement"},
li:{"^":"M;",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
d1:{"^":"M;",$isd1:1,"%":"HTMLBaseElement"},
fH:{"^":"h;","%":";Blob"},
bH:{"^":"M;",$isbH:1,"%":"HTMLBodyElement"},
ch:{"^":"M;0n:height=,0m:width=",
ci:function(a,b,c){var z=this.d_(a,b,P.kF(c,null))
return z},
d_:function(a,b,c){return a.getContext(b,c)},
$isch:1,
"%":"HTMLCanvasElement"},
ln:{"^":"h;",
af:function(a){return P.a2(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lo:{"^":"u;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fQ:{"^":"ci;",$isfQ:1,"%":"CSSNumericValue|CSSUnitValue"},
lq:{"^":"fT;0j:length=","%":"CSSPerspective"},
ao:{"^":"h;",$isao:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fR:{"^":"j2;0j:length=",
aH:function(a,b){var z=this.d0(a,this.al(a,b))
return z==null?"":z},
al:function(a,b){var z,y
z=$.ex()
y=z[b]
if(typeof y==="string")return y
y=this.dd(a,b)
z[b]=y
return y},
dd:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fX()+b
if(z in a)return z
return b},
d0:function(a,b){return a.getPropertyValue(b)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fS:{"^":"b;",
gn:function(a){return this.aH(a,"height")},
gm:function(a){return this.aH(a,"width")}},
ci:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue;CSSStyleValue"},
fT:{"^":"h;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ls:{"^":"ci;0j:length=","%":"CSSTransformValue"},
lt:{"^":"ci;0j:length=","%":"CSSUnparsedValue"},
lv:{"^":"h;0j:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
fY:{"^":"M;","%":"HTMLDivElement"},
cj:{"^":"u;",
dg:function(a,b){return a.adoptNode(b)},
cj:function(a,b){return a.getElementById(b)},
bX:function(a,b){return a.querySelector(b)},
$iscj:1,
"%":"XMLDocument;Document"},
lw:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
fZ:{"^":"h;",
dz:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
lx:{"^":"j6;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.w(c,"$isX",[P.G],"$asX")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[[P.X,P.G]]},
$isx:1,
$asx:function(){return[[P.X,P.G]]},
$asp:function(){return[[P.X,P.G]]},
$isk:1,
$ask:function(){return[[P.X,P.G]]},
$isa:1,
$asa:function(){return[[P.X,P.G]]},
$asq:function(){return[[P.X,P.G]]},
"%":"ClientRectList|DOMRectList"},
h_:{"^":"h;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gm(a))+" x "+H.e(this.gn(a))},
B:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isX",[P.G],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=this.gm(a)===z.gm(b)&&this.gn(a)===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gm(a)&0x1FFFFFFF,this.gn(a)&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
$isX:1,
$asX:function(){return[P.G]},
"%":";DOMRectReadOnly"},
ly:{"^":"j8;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.t(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[P.d]},
$isx:1,
$asx:function(){return[P.d]},
$asp:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"DOMStringList"},
lz:{"^":"h;0j:length=","%":"DOMTokenList"},
U:{"^":"u;0dW:tagName=",
gdj:function(a){return new W.j9(a)},
k:function(a){return a.localName},
K:["ah",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.de
if(z==null){z=H.l([],[W.ab])
y=new W.dy(z)
C.a.l(z,W.dX(null))
C.a.l(z,W.e7())
$.de=y
d=y}else d=z
z=$.dd
if(z==null){z=new W.ea(d)
$.dd=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.K).dz(y,"")
$.af=y
$.ck=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.f(y,"$isd1")
y.href=z.baseURI
z=$.af.head;(z&&C.L).E(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.f(y,"$isbH")}z=$.af
if(!!this.$isbH)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.q).E(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.W,a.tagName)){z=$.ck;(z&&C.E).ck(z,x)
z=$.ck
w=(z&&C.E).dv(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.j(w);y=x.firstChild,y!=null;)z.E(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.cV(x)
c.aM(w)
C.n.dg(document,w)
return w},function(a,b,c){return this.K(a,b,c,null)},"dw",null,null,"ge5",5,5,null],
cn:function(a,b,c,d){a.textContent=null
this.E(a,this.K(a,b,c,d))},
cm:function(a,b){return this.cn(a,b,null,null)},
U:function(a,b){return a.getAttribute(b)},
d4:function(a,b){return a.removeAttribute(b)},
gdM:function(a){return new W.bS(a,"mousedown",!1,[W.a5])},
gdN:function(a){return new W.bS(a,"mousemove",!1,[W.a5])},
gdO:function(a){return new W.bS(a,"mouseup",!1,[W.a5])},
gdP:function(a){return new W.bS(a,H.t(W.h4(a)),!1,[W.bb])},
$isU:1,
"%":";Element"},
h3:{"^":"n:18;",
$1:function(a){return!!J.B(H.f(a,"$isu")).$isU}},
lB:{"^":"M;0n:height=,0m:width=","%":"HTMLEmbedElement"},
ag:{"^":"h;",$isag:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
L:{"^":"h;",
df:function(a,b,c,d){H.m(c,{func:1,args:[W.ag]})
if(c!=null)this.cS(a,b,c,!1)},
cS:function(a,b,c,d){return a.addEventListener(b,H.aF(H.m(c,{func:1,args:[W.ag]}),1),!1)},
$isL:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MessagePort|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e4|e5|e8|e9"},
ap:{"^":"fH;",$isap:1,"%":"File"},
lS:{"^":"jg;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isap")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ap]},
$isx:1,
$asx:function(){return[W.ap]},
$asp:function(){return[W.ap]},
$isk:1,
$ask:function(){return[W.ap]},
$isa:1,
$asa:function(){return[W.ap]},
$asq:function(){return[W.ap]},
"%":"FileList"},
lT:{"^":"L;0j:length=","%":"FileWriter"},
lW:{"^":"M;0j:length=","%":"HTMLFormElement"},
aq:{"^":"h;",$isaq:1,"%":"Gamepad"},
hf:{"^":"M;","%":"HTMLHeadElement"},
lX:{"^":"h;0j:length=","%":"History"},
lY:{"^":"jw;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isu")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isk:1,
$ask:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hg:{"^":"cj;","%":"HTMLDocument"},
hh:{"^":"hi;",
e6:function(a,b,c,d,e,f){return a.open(b,c)},
dQ:function(a,b,c){return a.open(b,c)},
cl:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hi:{"^":"L;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
lZ:{"^":"M;0n:height=,0m:width=","%":"HTMLIFrameElement"},
m_:{"^":"h;0n:height=,0m:width=","%":"ImageBitmap"},
m0:{"^":"h;0n:height=,0m:width=","%":"ImageData"},
m1:{"^":"M;0n:height=,0m:width=","%":"HTMLImageElement"},
dl:{"^":"M;0n:height=,0m:width=",$isdl:1,"%":"HTMLInputElement"},
b2:{"^":"dO;",$isb2:1,"%":"KeyboardEvent"},
hF:{"^":"h;",
k:function(a){return String(a)},
$ishF:1,
"%":"Location"},
hJ:{"^":"M;","%":"HTMLAudioElement;HTMLMediaElement"},
ma:{"^":"h;0j:length=","%":"MediaList"},
mb:{"^":"jE;",
i:function(a,b){return P.a2(a.get(H.t(b)))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.l([],[P.d])
this.C(a,new W.hL(z))
return z},
gj:function(a){return a.size},
$asV:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIInputMap"},
hL:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mc:{"^":"jF;",
i:function(a,b){return P.a2(a.get(H.t(b)))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.l([],[P.d])
this.C(a,new W.hM(z))
return z},
gj:function(a){return a.size},
$asV:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"MIDIOutputMap"},
hM:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
as:{"^":"h;",$isas:1,"%":"MimeType"},
md:{"^":"jH;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isas")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.as]},
$isx:1,
$asx:function(){return[W.as]},
$asp:function(){return[W.as]},
$isk:1,
$ask:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$asq:function(){return[W.as]},
"%":"MimeTypeArray"},
a5:{"^":"dO;",
gbW:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.b5(a.offsetX,a.offsetY,[P.G])
else{z=a.target
if(!J.B(W.eb(z)).$isU)throw H.c(P.A("offsetX is only supported on elements"))
y=H.f(W.eb(z),"$isU")
z=a.clientX
x=a.clientY
w=[P.G]
v=y.getBoundingClientRect()
u=v.left
v=v.top
H.w(new P.b5(u,v,w),"$isb5",w,"$asb5")
if(typeof z!=="number")return z.W()
if(typeof x!=="number")return x.W()
return new P.b5(C.t.c1(z-u),C.t.c1(x-v),w)}},
$isa5:1,
"%":";DragEvent|MouseEvent"},
a7:{"^":"hC;a",
ga5:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.bt("No elements"))
if(y>1)throw H.c(P.bt("More than one element"))
return z.firstChild},
H:function(a,b){var z,y,x,w,v
H.w(b,"$isk",[W.u],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.j(y),v=0;v<x;++v)w.E(y,z.firstChild)
return},
h:function(a,b,c){var z
H.r(b)
z=this.a
J.eT(z,H.f(c,"$isu"),C.w.i(z.childNodes,b))},
gw:function(a){var z=this.a.childNodes
return new W.dg(z,z.length,-1,[H.bf(C.w,z,"q",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){return C.w.i(this.a.childNodes,b)},
$asp:function(){return[W.u]},
$ask:function(){return[W.u]},
$asa:function(){return[W.u]}},
u:{"^":"L;0dR:previousSibling=",
dS:function(a){var z=a.parentNode
if(z!=null)J.bA(z,a)},
k:function(a){var z=a.nodeValue
return z==null?this.ct(a):z},
E:function(a,b){return a.appendChild(b)},
d5:function(a,b){return a.removeChild(b)},
d6:function(a,b,c){return a.replaceChild(b,c)},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hW:{"^":"jJ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isu")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isk:1,
$ask:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
mm:{"^":"M;0n:height=,0m:width=","%":"HTMLObjectElement"},
mo:{"^":"L;0n:height=,0m:width=","%":"OffscreenCanvas"},
mp:{"^":"h;0n:height=,0m:width=","%":"PaintSize"},
au:{"^":"h;0j:length=",$isau:1,"%":"Plugin"},
mr:{"^":"jN;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isau")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.au]},
$isx:1,
$asx:function(){return[W.au]},
$asp:function(){return[W.au]},
$isk:1,
$ask:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$asq:function(){return[W.au]},
"%":"PluginArray"},
mt:{"^":"a5;0n:height=,0m:width=","%":"PointerEvent"},
br:{"^":"ag;",$isbr:1,"%":"ProgressEvent|ResourceProgressEvent"},
id:{"^":"h;",
dv:function(a,b){return a.createContextualFragment(b)},
ck:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
my:{"^":"jT;",
i:function(a,b){return P.a2(a.get(H.t(b)))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.l([],[P.d])
this.C(a,new W.ii(z))
return z},
gj:function(a){return a.size},
$asV:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"RTCStatsReport"},
ii:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},
mz:{"^":"h;0n:height=,0m:width=","%":"Screen"},
mA:{"^":"M;0j:length=","%":"HTMLSelectElement"},
av:{"^":"L;",$isav:1,"%":"SourceBuffer"},
mC:{"^":"e5;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isav")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.av]},
$isx:1,
$asx:function(){return[W.av]},
$asp:function(){return[W.av]},
$isk:1,
$ask:function(){return[W.av]},
$isa:1,
$asa:function(){return[W.av]},
$asq:function(){return[W.av]},
"%":"SourceBufferList"},
aw:{"^":"h;",$isaw:1,"%":"SpeechGrammar"},
mD:{"^":"jZ;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaw")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aw]},
$isx:1,
$asx:function(){return[W.aw]},
$asp:function(){return[W.aw]},
$isk:1,
$ask:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$asq:function(){return[W.aw]},
"%":"SpeechGrammarList"},
ax:{"^":"h;0j:length=",$isax:1,"%":"SpeechRecognitionResult"},
mG:{"^":"k1;",
i:function(a,b){return this.bh(a,H.t(b))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=0;!0;++z){y=this.d2(a,z)
if(y==null)return
b.$2(y,this.bh(a,y))}},
gD:function(a){var z=H.l([],[P.d])
this.C(a,new W.ix(z))
return z},
gj:function(a){return a.length},
bh:function(a,b){return a.getItem(b)},
d2:function(a,b){return a.key(b)},
$asV:function(){return[P.d,P.d]},
$isK:1,
$asK:function(){return[P.d,P.d]},
"%":"Storage"},
ix:{"^":"n:19;a",
$2:function(a,b){return C.a.l(this.a,a)}},
ay:{"^":"h;",$isay:1,"%":"CSSStyleSheet|StyleSheet"},
iC:{"^":"M;",
K:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ah(a,b,c,d)
z=W.h2("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a7(y).H(0,new W.a7(z))
return y},
"%":"HTMLTableElement"},
mJ:{"^":"M;",
K:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ah(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga5(z)
x.toString
z=new W.a7(x)
w=z.ga5(z)
y.toString
w.toString
new W.a7(y).H(0,new W.a7(w))
return y},
"%":"HTMLTableRowElement"},
mK:{"^":"M;",
K:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ah(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.J.K(z.createElement("table"),b,c,d)
z.toString
z=new W.a7(z)
x=z.ga5(z)
y.toString
x.toString
new W.a7(y).H(0,new W.a7(x))
return y},
"%":"HTMLTableSectionElement"},
dI:{"^":"M;",$isdI:1,"%":"HTMLTemplateElement"},
mL:{"^":"h;0m:width=","%":"TextMetrics"},
az:{"^":"L;",$isaz:1,"%":"TextTrack"},
aA:{"^":"L;",$isaA:1,"%":"TextTrackCue|VTTCue"},
mM:{"^":"k9;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaA")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aA]},
$isx:1,
$asx:function(){return[W.aA]},
$asp:function(){return[W.aA]},
$isk:1,
$ask:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$asq:function(){return[W.aA]},
"%":"TextTrackCueList"},
mN:{"^":"e9;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaz")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.az]},
$isx:1,
$asx:function(){return[W.az]},
$asp:function(){return[W.az]},
$isk:1,
$ask:function(){return[W.az]},
$isa:1,
$asa:function(){return[W.az]},
$asq:function(){return[W.az]},
"%":"TextTrackList"},
mP:{"^":"h;0j:length=","%":"TimeRanges"},
aB:{"^":"h;",$isaB:1,"%":"Touch"},
mQ:{"^":"ke;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaB")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aB]},
$isx:1,
$asx:function(){return[W.aB]},
$asp:function(){return[W.aB]},
$isk:1,
$ask:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$asq:function(){return[W.aB]},
"%":"TouchList"},
mR:{"^":"h;0j:length=","%":"TrackDefaultList"},
dO:{"^":"ag;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
n4:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
n6:{"^":"hJ;0n:height=,0m:width=","%":"HTMLVideoElement"},
n7:{"^":"L;0j:length=","%":"VideoTrackList"},
n8:{"^":"L;0n:height=,0m:width=","%":"VisualViewport"},
n9:{"^":"h;0m:width=","%":"VTTRegion"},
bb:{"^":"a5;",
gdB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.A("deltaY is not supported"))},
$isbb:1,
"%":"WheelEvent"},
iQ:{"^":"L;",
gdi:function(a){var z,y,x
z=P.G
y=new P.Q(0,$.D,[z])
x=H.m(new W.iR(new P.k5(y,[z])),{func:1,ret:-1,args:[P.G]})
this.cY(a)
this.d7(a,W.eh(x,z))
return y},
d7:function(a,b){return a.requestAnimationFrame(H.aF(H.m(b,{func:1,ret:-1,args:[P.G]}),1))},
cY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isdQ:1,
"%":"DOMWindow|Window"},
iR:{"^":"n:20;a",
$1:function(a){var z=this.a
a=H.aR(H.cK(a),{futureOr:1,type:H.o(z,0)})
z=z.a
if(z.a!==0)H.N(P.bt("Future already completed"))
z.am(a)}},
dT:{"^":"u;",$isdT:1,"%":"Attr"},
nf:{"^":"kk;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isao")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ao]},
$isx:1,
$asx:function(){return[W.ao]},
$asp:function(){return[W.ao]},
$isk:1,
$ask:function(){return[W.ao]},
$isa:1,
$asa:function(){return[W.ao]},
$asq:function(){return[W.ao]},
"%":"CSSRuleList"},
ng:{"^":"h_;",
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var z
if(b==null)return!1
if(!H.ai(b,"$isX",[P.G],"$asX"))return!1
if(a.left===b.left)if(a.top===b.top){z=J.j(b)
z=a.width===z.gm(b)&&a.height===z.gn(b)}else z=!1
else z=!1
return z},
gv:function(a){return W.dZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gn:function(a){return a.height},
gm:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nh:{"^":"km;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isaq")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.aq]},
$isx:1,
$asx:function(){return[W.aq]},
$asp:function(){return[W.aq]},
$isk:1,
$ask:function(){return[W.aq]},
$isa:1,
$asa:function(){return[W.aq]},
$asq:function(){return[W.aq]},
"%":"GamepadList"},
nm:{"^":"ko;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isu")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.u]},
$isx:1,
$asx:function(){return[W.u]},
$asp:function(){return[W.u]},
$isk:1,
$ask:function(){return[W.u]},
$isa:1,
$asa:function(){return[W.u]},
$asq:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nn:{"^":"kq;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isax")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ax]},
$isx:1,
$asx:function(){return[W.ax]},
$asp:function(){return[W.ax]},
$isk:1,
$ask:function(){return[W.ax]},
$isa:1,
$asa:function(){return[W.ax]},
$asq:function(){return[W.ax]},
"%":"SpeechRecognitionResultList"},
no:{"^":"ks;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.r(b)
H.f(c,"$isay")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isv:1,
$asv:function(){return[W.ay]},
$isx:1,
$asx:function(){return[W.ay]},
$asp:function(){return[W.ay]},
$isk:1,
$ask:function(){return[W.ay]},
$isa:1,
$asa:function(){return[W.ay]},
$asq:function(){return[W.ay]},
"%":"StyleSheetList"},
j0:{"^":"dv;cX:a<",
C:function(a,b){var z,y,x,w,v,u
H.m(b,{func:1,ret:-1,args:[P.d,P.d]})
for(z=this.gD(this),y=z.length,x=this.a,w=J.j(x),v=0;v<z.length;z.length===y||(0,H.J)(z),++v){u=z[v]
b.$2(u,w.U(x,u))}},
gD:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.l([],[P.d])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.f(z[w],"$isdT")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
$asV:function(){return[P.d,P.d]},
$asK:function(){return[P.d,P.d]}},
j9:{"^":"j0;a",
i:function(a,b){return J.cd(this.a,H.t(b))},
gj:function(a){return this.gD(this).length}},
jb:{"^":"iy;a,b,c,$ti"},
bS:{"^":"jb;a,b,c,$ti"},
jc:{"^":"iz;a,b,c,d,e,$ti",p:{
aC:function(a,b,c,d,e){var z=W.eh(new W.jd(c),W.ag)
if(z!=null&&!0)J.eU(a,b,z,!1)
return new W.jc(0,a,b,z,!1,[e])}}},
jd:{"^":"n:21;a",
$1:function(a){return this.a.$1(H.f(a,"$isag"))}},
bv:{"^":"b;a",
cO:function(a){var z,y
z=$.cN()
if(z.a===0){for(y=0;y<262;++y)z.h(0,C.V[y],W.kS())
for(y=0;y<12;++y)z.h(0,C.v[y],W.kT())}},
T:function(a){return $.eL().u(0,W.b0(a))},
N:function(a,b,c){var z,y,x
z=W.b0(a)
y=$.cN()
x=y.i(0,H.e(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.bY(x.$4(a,b,c,this))},
$isab:1,
p:{
dX:function(a){var z,y
z=document.createElement("a")
y=new W.jU(z,window.location)
y=new W.bv(y)
y.cO(a)
return y},
nk:[function(a,b,c,d){H.f(a,"$isU")
H.t(b)
H.t(c)
H.f(d,"$isbv")
return!0},"$4","kS",16,0,11],
nl:[function(a,b,c,d){var z,y,x
H.f(a,"$isU")
H.t(b)
H.t(c)
z=H.f(d,"$isbv").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kT",16,0,11]}},
q:{"^":"b;$ti",
gw:function(a){return new W.dg(a,this.gj(a),-1,[H.bf(this,a,"q",0)])}},
dy:{"^":"b;a",
T:function(a){return C.a.bq(this.a,new W.hY(a))},
N:function(a,b,c){return C.a.bq(this.a,new W.hX(a,b,c))},
$isab:1},
hY:{"^":"n:9;a",
$1:function(a){return H.f(a,"$isab").T(this.a)}},
hX:{"^":"n:9;a,b,c",
$1:function(a){return H.f(a,"$isab").N(this.a,this.b,this.c)}},
jV:{"^":"b;",
cP:function(a,b,c,d){var z,y,x
this.a.H(0,c)
z=b.aC(0,new W.jW())
y=b.aC(0,new W.jX())
this.b.H(0,z)
x=this.c
x.H(0,C.X)
x.H(0,y)},
T:function(a){return this.a.u(0,W.b0(a))},
N:["cw",function(a,b,c){var z,y
z=W.b0(a)
y=this.c
if(y.u(0,H.e(z)+"::"+b))return this.d.dh(c)
else if(y.u(0,"*::"+b))return this.d.dh(c)
else{y=this.b
if(y.u(0,H.e(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.e(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}],
$isab:1},
jW:{"^":"n:10;",
$1:function(a){return!C.a.u(C.v,H.t(a))}},
jX:{"^":"n:10;",
$1:function(a){return C.a.u(C.v,H.t(a))}},
k6:{"^":"jV;e,a,b,c,d",
N:function(a,b,c){if(this.cw(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cd(a,"template")==="")return this.e.u(0,b)
return!1},
p:{
e7:function(){var z,y,x,w,v
z=P.d
y=P.ct(C.u,z)
x=H.o(C.u,0)
w=H.m(new W.k7(),{func:1,ret:z,args:[x]})
v=H.l(["TEMPLATE"],[z])
y=new W.k6(y,P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),null)
y.cP(null,new H.hH(C.u,w,[x,z]),v,null)
return y}}},
k7:{"^":"n:22;",
$1:function(a){return"TEMPLATE::"+H.e(H.t(a))}},
k4:{"^":"b;",
T:function(a){var z=J.B(a)
if(!!z.$isdE)return!1
z=!!z.$isI
if(z&&W.b0(a)==="foreignObject")return!1
if(z)return!0
return!1},
N:function(a,b,c){if(b==="is"||C.h.cq(b,"on"))return!1
return this.T(a)},
$isab:1},
dg:{"^":"b;a,b,c,0d,$ti",
sbf:function(a){this.d=H.y(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbf(J.bi(this.a,z))
this.c=z
return!0}this.sbf(null)
this.c=y
return!1},
gA:function(a){return this.d},
$isb1:1},
j3:{"^":"b;a",$isL:1,$isdQ:1,p:{
j4:function(a){if(a===window)return H.f(a,"$isdQ")
else return new W.j3(a)}}},
ab:{"^":"b;"},
jU:{"^":"b;a,b",$isn3:1},
ea:{"^":"b;a",
aM:function(a){new W.kh(this).$2(a,null)},
Z:function(a,b){if(b==null)J.cV(a)
else J.bA(b,a)},
da:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fe(a)
x=J.cd(y.gcX(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.bj(a)}catch(t){H.a3(t)}try{u=W.b0(a)
this.d9(H.f(a,"$isU"),b,z,v,u,H.f(y,"$isK"),H.t(x))}catch(t){if(H.a3(t) instanceof P.an)throw t
else{this.Z(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d9:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
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
y=H.l(z.slice(0),[H.o(z,0)])
for(x=f.gD(f).length-1,z=f.a,w=J.j(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.N(a,J.fr(v),w.U(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.U(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.U(z,v)
w.d4(z,v)}}if(!!J.B(a).$isdI)this.aM(a.content)},
$ismk:1},
kh:{"^":"n:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.da(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.Z(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.ff(z)}catch(w){H.a3(w)
v=H.f(z,"$isu")
if(x){u=v.parentNode
if(u!=null)J.bA(u,v)}else J.bA(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.f(y,"$isu")}}},
j2:{"^":"h+fS;"},
j5:{"^":"h+p;"},
j6:{"^":"j5+q;"},
j7:{"^":"h+p;"},
j8:{"^":"j7+q;"},
jf:{"^":"h+p;"},
jg:{"^":"jf+q;"},
jv:{"^":"h+p;"},
jw:{"^":"jv+q;"},
jE:{"^":"h+V;"},
jF:{"^":"h+V;"},
jG:{"^":"h+p;"},
jH:{"^":"jG+q;"},
jI:{"^":"h+p;"},
jJ:{"^":"jI+q;"},
jM:{"^":"h+p;"},
jN:{"^":"jM+q;"},
jT:{"^":"h+V;"},
e4:{"^":"L+p;"},
e5:{"^":"e4+q;"},
jY:{"^":"h+p;"},
jZ:{"^":"jY+q;"},
k1:{"^":"h+V;"},
k8:{"^":"h+p;"},
k9:{"^":"k8+q;"},
e8:{"^":"L+p;"},
e9:{"^":"e8+q;"},
kd:{"^":"h+p;"},
ke:{"^":"kd+q;"},
kj:{"^":"h+p;"},
kk:{"^":"kj+q;"},
kl:{"^":"h+p;"},
km:{"^":"kl+q;"},
kn:{"^":"h+p;"},
ko:{"^":"kn+q;"},
kp:{"^":"h+p;"},
kq:{"^":"kp+q;"},
kr:{"^":"h+p;"},
ks:{"^":"kr+q;"}}],["","",,P,{"^":"",
a2:function(a){var z,y,x,w,v
if(a==null)return
z=P.a_(P.d,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=H.t(y[w])
z.h(0,v,a[v])}return z},
kF:function(a,b){var z={}
a.C(0,new P.kG(z))
return z},
kH:function(a){var z,y
z=new P.Q(0,$.D,[null])
y=new P.dS(z,[null])
a.then(H.aF(new P.kI(y),1))["catch"](H.aF(new P.kJ(y),1))
return z},
da:function(){var z=$.d9
if(z==null){z=J.c9(window.navigator.userAgent,"Opera",0)
$.d9=z}return z},
fX:function(){var z,y
z=$.d6
if(z!=null)return z
y=$.d7
if(y==null){y=J.c9(window.navigator.userAgent,"Firefox",0)
$.d7=y}if(y)z="-moz-"
else{y=$.d8
if(y==null){y=!P.da()&&J.c9(window.navigator.userAgent,"Trident/",0)
$.d8=y}if(y)z="-ms-"
else z=P.da()?"-o-":"-webkit-"}$.d6=z
return z},
iS:{"^":"b;",
bS:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}C.a.l(z,a)
C.a.l(this.b,null)
return y},
aB:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
if(Math.abs(y)<=864e13)x=!1
else x=!0
if(x)H.N(P.fD("DateTime is outside valid range: "+y))
return new P.aZ(y,!0)}if(a instanceof RegExp)throw H.c(P.cy("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kH(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.bS(a)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
z.a=u
if(u!=null)return u
u=P.hB()
z.a=u
C.a.h(x,v,u)
this.dH(a,new P.iU(z,this))
return z.a}if(a instanceof Array){t=a
v=this.bS(t)
x=this.b
if(v>=x.length)return H.i(x,v)
u=x[v]
if(u!=null)return u
s=J.aS(t)
r=s.gj(t)
u=this.c?new Array(r):t
C.a.h(x,v,u)
for(x=J.c_(u),q=0;q<r;++q)x.h(u,q,this.aB(s.i(t,q)))
return u}return a}},
iU:{"^":"n:33;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aB(b)
J.eS(z,a,y)
return y}},
kG:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
iT:{"^":"iS;a,b,c",
dH:function(a,b){var z,y,x,w
H.m(b,{func:1,args:[,,]})
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.J)(z),++x){w=z[x]
b.$2(w,a[w])}}},
kI:{"^":"n:12;a",
$1:function(a){return this.a.bE(0,a)}},
kJ:{"^":"n:12;a",
$1:function(a){return this.a.ds(a)}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
dY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b5:{"^":"b;ae:a>,a1:b>,$ti",
k:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
B:function(a,b){if(b==null)return!1
return H.ai(b,"$isb5",[P.G],null)&&this.a==J.bF(b)&&this.b==b.ga1(b)},
gv:function(a){var z,y,x
z=J.am(this.a)
y=J.am(this.b)
y=P.dY(P.dY(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)}},
jO:{"^":"b;"},
X:{"^":"jO;$ti"}}],["","",,P,{"^":"",fC:{"^":"h;",$isfC:1,"%":"SVGAnimatedLength"},lC:{"^":"I;0n:height=,0m:width=","%":"SVGFEBlendElement"},lD:{"^":"I;0n:height=,0m:width=","%":"SVGFEColorMatrixElement"},lE:{"^":"I;0n:height=,0m:width=","%":"SVGFEComponentTransferElement"},lF:{"^":"I;0n:height=,0m:width=","%":"SVGFECompositeElement"},lG:{"^":"I;0n:height=,0m:width=","%":"SVGFEConvolveMatrixElement"},lH:{"^":"I;0n:height=,0m:width=","%":"SVGFEDiffuseLightingElement"},lI:{"^":"I;0n:height=,0m:width=","%":"SVGFEDisplacementMapElement"},lJ:{"^":"I;0n:height=,0m:width=","%":"SVGFEFloodElement"},lK:{"^":"I;0n:height=,0m:width=","%":"SVGFEGaussianBlurElement"},lL:{"^":"I;0n:height=,0m:width=","%":"SVGFEImageElement"},lM:{"^":"I;0n:height=,0m:width=","%":"SVGFEMergeElement"},lN:{"^":"I;0n:height=,0m:width=","%":"SVGFEMorphologyElement"},lO:{"^":"I;0n:height=,0m:width=","%":"SVGFEOffsetElement"},lP:{"^":"I;0n:height=,0m:width=","%":"SVGFESpecularLightingElement"},lQ:{"^":"I;0n:height=,0m:width=","%":"SVGFETileElement"},lR:{"^":"I;0n:height=,0m:width=","%":"SVGFETurbulenceElement"},lU:{"^":"I;0n:height=,0m:width=","%":"SVGFilterElement"},lV:{"^":"bm;0n:height=,0m:width=","%":"SVGForeignObjectElement"},he:{"^":"bm;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bm:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement;SVGGraphicsElement"},m2:{"^":"bm;0n:height=,0m:width=","%":"SVGImageElement"},b3:{"^":"h;",$isb3:1,"%":"SVGLength"},m7:{"^":"jy;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
h:function(a,b,c){H.r(b)
H.f(c,"$isb3")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b3]},
$isk:1,
$ask:function(){return[P.b3]},
$isa:1,
$asa:function(){return[P.b3]},
$asq:function(){return[P.b3]},
"%":"SVGLengthList"},m8:{"^":"I;0n:height=,0m:width=","%":"SVGMaskElement"},b4:{"^":"h;",$isb4:1,"%":"SVGNumber"},ml:{"^":"jL;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
h:function(a,b,c){H.r(b)
H.f(c,"$isb4")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b4]},
$isk:1,
$ask:function(){return[P.b4]},
$isa:1,
$asa:function(){return[P.b4]},
$asq:function(){return[P.b4]},
"%":"SVGNumberList"},mq:{"^":"I;0n:height=,0m:width=","%":"SVGPatternElement"},ms:{"^":"h;0j:length=","%":"SVGPointList"},mu:{"^":"h;0n:height=,0m:width=","%":"SVGRect"},mv:{"^":"he;0n:height=,0m:width=","%":"SVGRectElement"},dE:{"^":"I;",$isdE:1,"%":"SVGScriptElement"},mH:{"^":"k3;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
h:function(a,b,c){H.r(b)
H.t(c)
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.d]},
$isk:1,
$ask:function(){return[P.d]},
$isa:1,
$asa:function(){return[P.d]},
$asq:function(){return[P.d]},
"%":"SVGStringList"},I:{"^":"U;",
K:function(a,b,c,d){var z,y,x,w,v,u
z=H.l([],[W.ab])
C.a.l(z,W.dX(null))
C.a.l(z,W.e7())
C.a.l(z,new W.k4())
c=new W.ea(new W.dy(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).dw(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a7(w)
u=z.ga5(z)
for(z=J.j(v);x=u.firstChild,x!=null;)z.E(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mI:{"^":"bm;0n:height=,0m:width=","%":"SVGSVGElement"},b8:{"^":"h;",$isb8:1,"%":"SVGTransform"},mS:{"^":"kg;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return this.M(a,b)},
h:function(a,b,c){H.r(b)
H.f(c,"$isb8")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
M:function(a,b){return a.getItem(b)},
$asp:function(){return[P.b8]},
$isk:1,
$ask:function(){return[P.b8]},
$isa:1,
$asa:function(){return[P.b8]},
$asq:function(){return[P.b8]},
"%":"SVGTransformList"},n5:{"^":"bm;0n:height=,0m:width=","%":"SVGUseElement"},jx:{"^":"h+p;"},jy:{"^":"jx+q;"},jK:{"^":"h+p;"},jL:{"^":"jK+q;"},k2:{"^":"h+p;"},k3:{"^":"k2+q;"},kf:{"^":"h+p;"},kg:{"^":"kf+q;"}}],["","",,P,{"^":"",ah:{"^":"b;",$isk:1,
$ask:function(){return[P.ak]},
$isa:1,
$asa:function(){return[P.ak]},
$isiH:1}}],["","",,P,{"^":"",lj:{"^":"h;0j:length=","%":"AudioBuffer"},lk:{"^":"j1;",
i:function(a,b){return P.a2(a.get(H.t(b)))},
C:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.d,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.a2(y.value[1]))}},
gD:function(a){var z=H.l([],[P.d])
this.C(a,new P.fF(z))
return z},
gj:function(a){return a.size},
$asV:function(){return[P.d,null]},
$isK:1,
$asK:function(){return[P.d,null]},
"%":"AudioParamMap"},fF:{"^":"n:2;a",
$2:function(a,b){return C.a.l(this.a,a)}},ll:{"^":"L;0j:length=","%":"AudioTrackList"},fG:{"^":"L;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mn:{"^":"fG;0j:length=","%":"OfflineAudioContext"},j1:{"^":"h+V;"}}],["","",,P,{"^":"",fI:{"^":"h;",$isfI:1,"%":"WebGLBuffer"},ha:{"^":"h;",$isha:1,"%":"WebGLFramebuffer"},ic:{"^":"h;",$isic:1,"%":"WebGLProgram"},mw:{"^":"h;",
bp:function(a,b){return a.activeTexture(b)},
br:function(a,b,c){return a.attachShader(b,c)},
bs:function(a,b,c){return a.bindBuffer(b,c)},
bu:function(a,b,c){return a.bindFramebuffer(b,c)},
bv:function(a,b,c){return a.bindTexture(b,c)},
bw:function(a,b){return a.blendEquation(b)},
bx:function(a,b,c){return a.blendFunc(b,c)},
by:function(a,b,c,d){return a.bufferData(b,c,d)},
bz:function(a,b){return a.checkFramebufferStatus(b)},
bA:function(a,b){return a.clear(b)},
bB:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bD:function(a,b){return a.compileShader(b)},
bF:function(a){return a.createBuffer()},
bG:function(a){return a.createFramebuffer()},
bH:function(a){return a.createProgram()},
bI:function(a,b){return a.createShader(b)},
bJ:function(a){return a.createTexture()},
bL:function(a,b){return a.depthMask(b)},
bM:function(a,b){return a.disable(b)},
bN:function(a,b,c,d){return a.drawArrays(b,c,d)},
bO:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bP:function(a,b){return a.enable(b)},
bQ:function(a,b){return a.enableVertexAttribArray(b)},
bT:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
af:function(a){return P.a2(a.getContextAttributes())},
aD:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aI:function(a,b){return a.getShaderInfoLog(b)},
aJ:function(a,b,c){return a.getShaderParameter(b,c)},
aK:function(a,b,c){return a.getUniformLocation(b,c)},
bV:function(a,b){return a.linkProgram(b)},
aN:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c_:function(a,b,c,d){return a.texParameterf(b,c,d)},
c0:function(a,b,c,d){return a.texParameteri(b,c,d)},
c2:function(a,b,c){return a.uniform1f(b,c)},
c3:function(a,b,c){return a.uniform1fv(b,c)},
c4:function(a,b,c){return a.uniform1i(b,c)},
c5:function(a,b,c){return a.uniform1iv(b,c)},
c6:function(a,b,c){return a.uniform2fv(b,c)},
c7:function(a,b,c){return a.uniform3fv(b,c)},
c8:function(a,b,c){return a.uniform4fv(b,c)},
c9:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ca:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cb:function(a,b){return a.useProgram(b)},
cc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ce:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mx:{"^":"h;",
dk:function(a,b){return a.beginTransformFeedback(b)},
dn:function(a,b){return a.bindVertexArray(b)},
dA:function(a){return a.createVertexArray()},
dC:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dD:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dF:function(a){return a.endTransformFeedback()},
dX:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
e_:function(a,b,c,d){this.de(a,b,H.w(c,"$isa",[P.d],"$asa"),d)
return},
de:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
e1:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bp:function(a,b){return a.activeTexture(b)},
br:function(a,b,c){return a.attachShader(b,c)},
bs:function(a,b,c){return a.bindBuffer(b,c)},
bu:function(a,b,c){return a.bindFramebuffer(b,c)},
bv:function(a,b,c){return a.bindTexture(b,c)},
bw:function(a,b){return a.blendEquation(b)},
bx:function(a,b,c){return a.blendFunc(b,c)},
by:function(a,b,c,d){return a.bufferData(b,c,d)},
bz:function(a,b){return a.checkFramebufferStatus(b)},
bA:function(a,b){return a.clear(b)},
bB:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bD:function(a,b){return a.compileShader(b)},
bF:function(a){return a.createBuffer()},
bG:function(a){return a.createFramebuffer()},
bH:function(a){return a.createProgram()},
bI:function(a,b){return a.createShader(b)},
bJ:function(a){return a.createTexture()},
bL:function(a,b){return a.depthMask(b)},
bM:function(a,b){return a.disable(b)},
bN:function(a,b,c,d){return a.drawArrays(b,c,d)},
bO:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bP:function(a,b){return a.enable(b)},
bQ:function(a,b){return a.enableVertexAttribArray(b)},
bT:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
af:function(a){return P.a2(a.getContextAttributes())},
aD:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aI:function(a,b){return a.getShaderInfoLog(b)},
aJ:function(a,b,c){return a.getShaderParameter(b,c)},
aK:function(a,b,c){return a.getUniformLocation(b,c)},
bV:function(a,b){return a.linkProgram(b)},
aN:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
c_:function(a,b,c,d){return a.texParameterf(b,c,d)},
c0:function(a,b,c,d){return a.texParameteri(b,c,d)},
c2:function(a,b,c){return a.uniform1f(b,c)},
c3:function(a,b,c){return a.uniform1fv(b,c)},
c4:function(a,b,c){return a.uniform1i(b,c)},
c5:function(a,b,c){return a.uniform1iv(b,c)},
c6:function(a,b,c){return a.uniform2fv(b,c)},
c7:function(a,b,c){return a.uniform3fv(b,c)},
c8:function(a,b,c){return a.uniform4fv(b,c)},
c9:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ca:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cb:function(a,b){return a.useProgram(b)},
cc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ce:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"},io:{"^":"h;",$isio:1,"%":"WebGLShader"},iD:{"^":"h;",$isiD:1,"%":"WebGLTexture"},iJ:{"^":"h;",$isiJ:1,"%":"WebGLUniformLocation"},iO:{"^":"h;",$isiO:1,"%":"WebGLVertexArrayObject"}}],["","",,P,{"^":"",mE:{"^":"k0;",
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.a2(this.d1(a,b))},
h:function(a,b,c){H.r(b)
H.f(c,"$isK")
throw H.c(P.A("Cannot assign element of immutable List."))},
q:function(a,b){return this.i(a,b)},
d1:function(a,b){return a.item(b)},
$asp:function(){return[[P.K,,,]]},
$isk:1,
$ask:function(){return[[P.K,,,]]},
$isa:1,
$asa:function(){return[[P.K,,,]]},
$asq:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},k_:{"^":"h+p;"},k0:{"^":"k_+q;"}}],["","",,G,{"^":"",
iV:function(a){var z,y,x,w
z=H.l(a.split("\n"),[P.d])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.i(z,y)
C.a.h(z,y,w+H.e(z[y]))}return C.a.a0(z,"\n")},
dU:function(a,b,c){var z,y,x,w
z=J.j(a)
y=z.bI(a,b)
z.aN(a,y,c)
z.bD(a,y)
x=H.bY(z.aJ(a,y,35713))
if(x!=null&&!x){w=z.aI(a,y)
P.aI("E:Compilation failed:")
P.aI("E:"+G.iV(c))
P.aI("E:Failure:")
P.aI(C.h.F("E:",w))
throw H.c(w)}return y},
dh:function(a,b){var z,y,x
H.w(a,"$isa",[T.C],"$asa")
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
C.b.h(b,z,J.bF(a[y]))
if(y>=a.length)return H.i(a,y)
C.b.h(b,z+1,J.cc(a[y]))
z+=2
if(y>=a.length)return H.i(a,y)
x=J.cT(a[y])
if(z>=b.length)return H.i(b,z)
b[z]=x}return b},
h7:function(a,b){var z,y
H.w(a,"$isa",[T.P],"$asa")
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
C.b.h(b,z,J.bF(a[y]))
if(y>=a.length)return H.i(a,y)
C.b.h(b,z+1,J.cc(a[y]))}return b},
h8:function(a,b){var z,y,x,w,v
H.w(a,"$isa",[T.ba],"$asa")
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.b.h(b,z,J.bF(a[y]))
if(y>=a.length)return H.i(a,y)
C.b.h(b,z+1,J.cc(a[y]))
x=z+2
if(y>=a.length)return H.i(a,y)
w=J.cT(a[y])
v=b.length
if(x>=v)return H.i(b,x)
b[x]=w
z+=3
if(y>=a.length)return H.i(a,y)
w=J.fh(a[y])
if(z>=v)return H.i(b,z)
b[z]=w}return b},
h6:function(a,b){var z,y
H.w(a,"$isa",[[P.a,P.E]],"$asa")
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
C.o.h(b,z,J.bi(a[y],0))
if(y>=a.length)return H.i(a,y)
C.o.h(b,z+1,J.bi(a[y],1))
if(y>=a.length)return H.i(a,y)
C.o.h(b,z+2,J.bi(a[y],2))
if(y>=a.length)return H.i(a,y)
C.o.h(b,z+3,J.bi(a[y],3))}return b},
jt:function(a,b){var z,y,x,w,v,u,t,s,r,q
for(z=a.e,y=new H.ar(z,[H.o(z,0)]),y=y.gw(y),x=b.x,w=[[P.a,P.E]],v=[P.ak],u=[T.ba],t=[T.C],s=[T.P];y.t();){r=y.d
if(!x.ab(0,r)){r="Dropping unnecessary attribute: "+H.e(r)
if($.em>0)H.aV("I: "+r)
continue}q=z.i(0,r)
switch($.a8().i(0,r).a){case"vec2":b.X(r,G.h7(H.bz(q,"$isa",s,"$asa"),null),2)
break
case"vec3":b.X(r,G.dh(H.bz(q,"$isa",t,"$asa"),null),3)
break
case"vec4":b.X(r,G.h8(H.bz(q,"$isa",u,"$asa"),null),4)
break
case"float":b.X(r,new Float32Array(H.bV(H.bz(q,"$isa",v,"$asa"))),1)
break
case"uvec4":b.X(r,G.h6(H.bz(q,"$isa",w,"$asa"),null),4)
break}}},
dk:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.d
w=P.a_(x,P.b)
v=J.f4(z.a)
u=new G.hK(z,v,4,w,y,0,-1,P.a_(x,P.ah),"meshdata:"+a,!1,!0)
x=G.dh(c.d,null)
w.h(0,"aPosition",J.ca(z.a))
u.ch=x
u.aX("aPosition",x,3)
t=$.a8().i(0,"aPosition")
if(t==null)H.N("Unknown canonical aPosition")
s=y.i(0,"aPosition")
J.bC(z.a,v)
z.bR(0,s,0)
z.cd(0,w.i(0,"aPosition"),s,t.aY(),5126,!1,0,0)
y=H.w(c.cC(),"$isa",[P.E],"$asa")
u.y=J.ca(z.a)
x=u.ch.length
if(x<768){u.sap(new Uint8Array(H.bV(y)))
u.Q=5121}else if(x<196608){u.sap(new Uint16Array(H.bV(y)))
u.Q=5123}else{u.sap(new Uint32Array(H.bV(y)))
u.Q=5125}J.bC(z.a,v)
y=u.y
x=u.cx
J.c7(z.a,34963,y)
J.cR(z.a,34963,x,35048)
G.jt(c,u)
return u},
bM:{"^":"b;"},
bu:{"^":"bM;d,a,b,c",
aZ:function(){return this.d},
k:function(a){var z,y,x,w
z=H.l(["{"+new H.dM(H.kP(this)).k(0)+"}["+this.a+"]"],[P.d])
for(y=this.d,x=new H.ar(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(z,H.e(w)+": "+H.e(y.i(0,w)))}return C.a.a0(z,"\n")}},
fK:{"^":"b;0a,b",
bR:function(a,b,c){J.fb(this.a,b)
if(c>0)J.fy(this.a,b,c)},
cd:function(a,b,c,d,e,f,g,h){J.c7(this.a,34962,b)
J.fz(this.a,c,d,e,!1,g,h)}},
di:{"^":"b;a,b,c,d,e",
aQ:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.c8(z.a,36160,y)
J.fA(z.a,b,c,d,e)
if(a!==0)J.eZ(z.a,a)}},
cl:{"^":"b;a,b,c"},
cm:{"^":"b;a,b,c,d"},
dj:{"^":"b;a,b,c,d,e",
a6:function(a){switch($.a8().i(0,a).a){case"vec2":this.e.h(0,a,H.l([],[T.P]))
break
case"vec3":this.e.h(0,a,H.l([],[T.C]))
break
case"vec4":this.e.h(0,a,H.l([],[T.ba]))
break
case"float":this.e.h(0,a,H.l([],[P.ak]))
break
case"uvec4":this.e.h(0,a,H.l([],[[P.a,P.E]]))
break}},
aV:function(a){var z,y,x,w,v
H.w(a,"$isa",[T.C],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.J)(a),++x){w=a[x]
v=new T.C(new Float32Array(3))
v.P(w)
C.a.l(y,v)}},
aS:function(a,b){var z,y,x,w,v,u,t
z=[T.P]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new Float32Array(2)
t=v.a
u[1]=t[1]
u[0]=t[0]
x.l(y,new T.P(u))}},
aT:function(a,b){var z,y,x,w,v,u
z=[T.C]
H.w(b,"$isa",z,"$asa")
y=H.w(this.e.i(0,a),"$isa",z,"$asa")
for(z=b.length,x=y&&C.a,w=0;w<b.length;b.length===z||(0,H.J)(b),++w){v=b[w]
u=new T.C(new Float32Array(3))
u.P(v)
x.l(y,u)}},
aW:function(a){var z
H.w(a,"$isa",[T.C],"$asa")
z=this.d.length
C.a.l(this.c,new G.cm(z,z+1,z+2,z+3))
this.aV(a)},
cC:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.l(x,[P.E])
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
k:function(a){var z,y,x,w,v
z=H.l(["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"],[P.d])
for(y=this.e,x=new H.ar(y,[H.o(y,0)]),x=x.gw(x);x.t();){w=x.d
v=$.a8().i(0,w).a
C.a.l(z,H.e(w)+"["+v+","+y.i(0,w).length+"]")}return C.a.a0(z," ")}},
dK:{"^":"b;a,b,c"},
dJ:{"^":"b;a,b,c"},
hI:{"^":"bu;d,a,b,c"},
hK:{"^":"bM;d,e,f,r,x,0y,z,Q,0ch,0cx,cy,a,b,c",
sap:function(a){this.cx=H.w(a,"$isa",[P.E],"$asa")},
aX:function(a,b,c){var z,y
C.h.Y(a,0)
H.f(b,"$isah")
this.cy.h(0,a,b)
z=this.d
y=this.r.i(0,a)
J.c7(z.a,34962,y)
J.cR(z.a,34962,b,35048)},
cD:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
X:function(a,b,c){var z,y,x,w,v
z=J.cO(a,0)===105
if(z&&this.z===0)this.z=C.f.cz(b.length,c)
y=this.r
x=this.d
y.h(0,a,J.ca(x.a))
this.aX(a,b,c)
w=$.a8().i(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.i(0,a)
J.bC(x.a,this.e)
x.bR(0,v,z?1:0)
x.cd(0,y.i(0,a),v,w.aY(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=H.l(["Faces:"+(z==null?0:z.length)],[P.d])
for(z=this.cy,x=new H.ar(z,[H.o(z,0)]),x=x.gw(x);x.t();){w=x.d
C.a.l(y,H.e(w)+":"+z.i(0,w).length)}return"MESH["+this.a+"] "+C.a.a0(y,"  ")}},
i0:{"^":"bu;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cA:function(a,b){var z
if(typeof a!=="number")return a.e3()
if(typeof b!=="number")return H.aU(b)
z=a/b
if(this.z===z)return
this.z=z
this.b1()},
b1:function(){var z,y,x,w,v,u
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
aZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z=this.x
y=this.d
y.h(0,"uEyePosition",z.aE())
x=this.cy
x.P(z.d)
z=this.cx
z.P(this.db)
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
y.h(0,"uPerspectiveViewMatrix",z)
return y}},
lA:{"^":"b;"},
ih:{"^":"bM;d,e,f,r,x,y,z,Q,0ch,a,b,c",
cG:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.h(0,t,J.cU(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
x.h(0,t,J.cU(w.a,v,t))}},
cK:function(){var z,y,x,w
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return H.l([],[P.d])
x=H.l([],[P.d])
for(y=new H.ar(y,[H.o(y,0)]),y=y.gw(y);y.t();){w=y.d
if(!z.ab(0,w))C.a.l(x,w)}for(z=this.x,z=P.jA(z,z.r,H.o(z,0)),y=this.Q;z.t();){w=z.d
if(!y.u(0,w))C.a.l(x,w)}return x},
cN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(b,"$isK",[P.d,P.b],"$asK")
z=Date.now()
for(y=new H.ar(b,[H.o(b,0)]),y=y.gw(y),x=this.d,w=this.y,v=this.z,u=this.a,t=0;y.t();){s=y.d
switch(J.cO(s,0)){case 117:if(w.ab(0,s)){r=b.i(0,s)
if(v.ab(0,s))H.aV("E:"+(u+":  "+s+" : group ["+a+"] overwrites ["+s+"]"))
v.h(0,s,a)
q=$.a8().i(0,s)
if(q==null)H.N("unknown "+s)
p=w.i(0,s)
s=q.a
switch(s){case"int":if(q.c===0){H.r(r)
J.ce(x.a,p,r)}else if(!!J.B(r).$ishl)J.fw(x.a,p,r)
break
case"float":if(q.c===0){H.el(r)
J.fu(x.a,p,r)}else if(!!J.B(r).$isah)J.fv(x.a,p,r)
break
case"mat4":if(q.c===0){s=H.ae(r,"$isaL").a
J.d_(x.a,p,!1,s)}else if(!!J.B(r).$isah)J.d_(x.a,p,!1,r)
break
case"mat3":if(q.c===0){s=C.N.ge4(H.ae(r,"$ism9"))
J.cZ(x.a,p,!1,s)}else if(!!J.B(r).$isah)J.cZ(x.a,p,!1,r)
break
case"vec4":s=q.c
o=x.a
if(s===0)J.cY(o,p,H.ae(r,"$isba").a)
else J.cY(o,p,H.f(r,"$isah"))
break
case"vec3":s=q.c
o=x.a
if(s===0)J.cX(o,p,H.ae(r,"$isC").a)
else J.cX(o,p,H.f(r,"$isah"))
break
case"vec2":s=q.c
o=x.a
if(s===0)J.cW(o,p,H.ae(r,"$isP").a)
else J.cW(o,p,H.f(r,"$isah"))
break
case"sampler2D":case"sampler2DShadow":s=this.ch
if(typeof s!=="number")return H.aU(s)
J.cP(x.a,33984+s)
s=H.ae(r,"$iscx").b
J.bB(x.a,3553,s)
s=this.ch
J.ce(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
case"samplerCube":s=this.ch
if(typeof s!=="number")return H.aU(s)
J.cP(x.a,33984+s)
s=H.ae(r,"$iscx").b
J.bB(x.a,34067,s)
s=this.ch
J.ce(x.a,p,s)
s=this.ch
if(typeof s!=="number")return s.F()
this.ch=s+1
break
default:H.aV("Error: unknow uniform type: "+s)}++t}break
case 99:r=b.i(0,s)
switch(s){case"cDepthTest":s=J.T(r,!0)
o=x.a
if(s)J.bD(o,2929)
else J.cb(o,2929)
break
case"cStencilFunc":H.ae(r,"$isdK")
s=r.a
o=x.a
if(s===1281)J.cb(o,2960)
else{J.bD(o,2960)
o=r.b
n=r.c
J.fo(x.a,s,o,n)}break
case"cDepthWrite":H.bY(r)
J.f5(x.a,r)
break
case"cBlendEquation":H.ae(r,"$isdJ")
s=r.a
o=x.a
if(s===1281)J.cb(o,3042)
else{J.bD(o,3042)
o=r.b
n=r.c
J.eX(x.a,o,n)
J.eW(x.a,s)}break}++t
break}}m=P.db(0,0,0,Date.now()-new P.aZ(z,!1).a,0,0)
""+t
m.k(0)},
cB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
H.w(b,"$isa",[G.bu],"$asa")
Date.now()
z=this.d
J.fx(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b7()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.J)(b),++x){w=b[x]
this.cN(w.a,w.aZ())}y=this.Q
y.a_(0)
for(v=a.cy,v=new H.ar(v,[H.o(v,0)]),v=v.gw(v);v.t();)y.l(0,v.d)
u=this.cK()
if(u.length!==0)P.aI("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(u)))
y=a.d
v=a.e
J.bC(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.cD()
s=a.Q
r=a.z
if(t)J.eV(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.f9(q,v,y,s,0,r)
else J.f8(q,v,y,s,0)}else{s=z.a
if(r>1)J.f7(s,v,0,y,r)
else J.f6(s,v,0,y)}if(t)J.fc(z.a)},
aj:function(a,b){return this.cB(a,b,null)},
p:{
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s
z=P.d
y=P.a4(null,null,null,z)
x=c.b
w=d.b
v=H.w(c.f,"$isa",[z],"$asa")
u=J.f2(b.a)
t=G.dU(b.a,35633,x)
J.cQ(b.a,u,t)
s=G.dU(b.a,35632,w)
J.cQ(b.a,u,s)
if(v.length>0)J.fs(b.a,u,v,35980)
J.fm(b.a,u)
if(!H.bY(J.fl(b.a,u,35714)))H.N(J.fk(b.a,u))
z=new G.ih(b,c,d,u,P.ct(c.c,z),P.a_(z,P.b),P.a_(z,z),y,a,!1,!0)
z.cG(a,b,c,d)
return z}}},
F:{"^":"b;a,b,c",
aY:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ip:{"^":"b;a,0b,c,d,e,f,r,x",
aR:function(a){var z,y,x,w,v
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.J)(a),++w){v=a[w]
C.a.l(y,v)
x.h(0,v,this.r);++this.r}C.a.ag(y)},
ai:function(a){var z,y,x
H.w(a,"$isa",[P.d],"$asa")
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.J)(a),++x)C.a.l(y,a[x])
C.a.ag(y)},
aU:function(a){var z,y
H.w(a,"$isa",[P.d],"$asa")
for(z=this.e,y=0;y<1;++y)C.a.l(z,a[y])
C.a.ag(z)},
cI:function(a,b){this.b=this.b2(!0,H.w(a,"$isa",[P.d],"$asa"),b)},
b0:function(a){return this.cI(a,null)},
cH:function(a,b){this.b=this.b2(!1,H.w(a,"$isa",[P.d],"$asa"),b)},
b_:function(a){return this.cH(a,null)},
b2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=[P.d]
H.w(b,"$isa",z,"$asa")
y=this.c
x=y.length===0
w=H.l(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],z)
for(z=y.length,v=this.x,u=0;u<y.length;y.length===z||(0,H.J)(y),++u){t=y[u]
s=$.a8().i(0,t)
C.a.l(w,"layout (location="+H.e(v.i(0,t))+") in "+s.a+" "+H.e(t)+";")}C.a.l(w,"")
r=x?"in":"out"
if(x)C.a.l(w,"out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a8().i(0,q)
C.a.l(w,r+" "+s.a+" "+H.e(q)+";")}C.a.l(w,"")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){q=z[u]
s=$.a8().i(0,q)
v=s.c
p=v===0?"":"["+v+"]"
C.a.l(w,"uniform "+s.a+" "+H.e(q)+p+";")}C.a.l(w,"")
if(a)C.a.l(w,"void main(void) {")
C.a.H(w,b)
if(a)C.a.l(w,"}")
return C.a.a0(w,"\n")},
p:{
bQ:function(a){var z,y
z=P.d
y=[z]
return new G.ip(a,H.l([],y),H.l([],y),H.l([],y),H.l([],y),0,P.a_(z,P.E))}}},
it:{"^":"bM;",
aE:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z}},
iE:{"^":"b;a,b,c,d,e,f,r"},
cx:{"^":"b;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
iI:{"^":"cx;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"},
p:{
dN:function(a,b,c,d,e,f){var z,y
z=J.f3(a.a)
J.bB(a.a,3553,z)
J.fq(a.a,3553,1,e,c,d)
y=f.e
if(y!==1)J.fp(a.a,3553,34046,y)
y=f.r
J.bG(a.a,3553,10240,y)
y=f.f
J.bG(a.a,3553,10241,y)
if(f.b){J.bG(a.a,3553,10242,33071)
J.bG(a.a,3553,10243,33071)}f.c
J.fj(a.a)
J.bB(a.a,3553,null)
return new G.iI(c,d,e,b,z,3553,a,f)}}}}],["","",,Y,{"^":"",
hj:function(a4){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
z=H.l([],[G.cl])
y=H.l([],[G.cm])
x=[T.C]
w=H.l([],x)
v=P.d
u=new G.dj(!1,z,y,w,P.a_(v,[P.a,,]))
u.a6("aTexUV")
u.a6("aNormal")
t=P.a_(v,P.E)
s=a4.split("\n")
r=H.l([],x)
q=H.l([],x)
v=[T.P]
p=H.l([],v)
y=Date.now()
o=P.dC("\\s+",!0,!1)
n=P.dC("\\s\\s*\\$",!0,!1)
for(m=s.length,l=0;l<s.length;s.length===m||(0,H.J)(s),++l){k=s[l]
k.toString
j=H.lb(k,o," ")
i=H.ld(j,n,"",0)
j=i.length
if(j!==0){if(0>=j)return H.i(i,0)
j=i[0]==="#"}else j=!0
if(j)continue
h=i.split(" ")
j=h.length
if(0>=j)return H.i(h,0)
g=h[0]
if(J.T(g,"g")){if(1>=j)return H.i(h,1)
t.h(0,h[1],r.length)}else if(J.T(g,"v")){if(1>=j)return H.i(h,1)
g=P.aG(h[1],null)
if(2>=j)return H.i(h,2)
f=P.aG(h[2],null)
if(3>=j)return H.i(h,3)
j=P.aG(h[3],null)
e=new Float32Array(3)
C.b.h(e,0,g)
C.b.h(e,1,f)
C.b.h(e,2,j)
C.a.l(r,new T.C(e))}else if(J.T(g,"vt")){if(1>=j)return H.i(h,1)
g=P.aG(h[1],null)
if(2>=j)return H.i(h,2)
j=P.aG(h[2],null)
f=new Float32Array(2)
C.b.h(f,0,g)
C.b.h(f,1,j)
C.a.l(p,new T.P(f))}else if(J.T(g,"vn")){if(1>=j)return H.i(h,1)
g=P.aG(h[1],null)
if(2>=j)return H.i(h,2)
f=P.aG(h[2],null)
if(3>=j)return H.i(h,3)
j=P.aG(h[3],null)
e=new Float32Array(3)
C.b.h(e,0,g)
C.b.h(e,1,f)
C.b.h(e,2,j)
C.a.l(q,new T.C(e))}else if(J.T(g,"f")){if(j!==4&&j!==5){H.aV("*** Error: face '"+i+"' not handled")
continue}d=H.l([],x)
c=H.l([],x)
b=H.l([],v)
for(a=1;j=h.length,a<j;++a){a0=J.fn(h[a],"/")
for(;a0.length<3;)C.a.l(a0,"")
j=P.cI(a0[0],null,null)
if(typeof j!=="number")return j.W()
a1=j-1
if(1>=a0.length)return H.i(a0,1)
if(J.T(a0[1],""))a2=-1
else{if(1>=a0.length)return H.i(a0,1)
j=P.cI(a0[1],null,null)
if(typeof j!=="number")return j.W()
a2=j-1}if(2>=a0.length)return H.i(a0,2)
if(J.T(a0[2],""))a3=-1
else{if(2>=a0.length)return H.i(a0,2)
j=P.cI(a0[2],null,null)
if(typeof j!=="number")return j.W()
a3=j-1}j=r.length
if(a1<j){if(a1<0)return H.i(r,a1)
C.a.l(d,r[a1])}else C.a.l(d,new T.C(new Float32Array(3)))
if(a2!==-1&&a2<p.length){if(a2<0||a2>=p.length)return H.i(p,a2)
C.a.l(b,p[a2])}else{H.aV("problem uv "+a+" "+a2)
C.a.l(b,new T.P(new Float32Array(2)))}if(a3!==-1&&a3<q.length){if(a3<0||a3>=q.length)return H.i(q,a3)
C.a.l(c,q[a3])}else{H.aV("problem normals "+a+" "+a3)
C.a.l(c,new T.C(new Float32Array(3)))}}if(j===4){H.w(d,"$isa",x,"$asa")
a=w.length
C.a.l(z,new G.cl(a,a+1,a+2))
u.aV(d)}else u.aW(d)
u.aT("aNormal",c)
u.aS("aTexUV",b)}}P.aI("loaded ("+P.db(0,0,0,Date.now()-new P.aZ(y,!1).a,0,0).k(0)+") "+u.k(0))
return u}}],["","",,R,{"^":"",
jC:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=H.f(W.ja("span",null),"$isU")
y=v.style
y.width="1px"
x=""+d+"px"
y.height=x
x=(y&&C.y).al(y,"float")
y.setProperty(x,"left","")
x=C.y.al(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
C.r.E(z,v)}return z},
iv:{"^":"b;",
cJ:function(a,b,c){var z,y
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
y.E(z,this.b)
y.E(z,this.d)
y.E(z,this.c)}},
iw:{"^":"iv;e,f,a,b,c,d",
cM:function(a,b){var z,y,x,w,v,u
z=++this.e
if(a-this.f<1000)return
y=z*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.dZ(y,2)+" fps"
C.r.cm(this.c,b)
x=C.f.S(30*C.A.dq(y),90)
if(x<0)x=0
if(x>30)x=30
z=this.d
w=H.f(z.firstChild,"$isU")
v=w.style
u=""+x+"px"
v.height=u
C.r.E(z,w)},
cL:function(a){return this.cM(a,"")}}}],["","",,V,{}],["","",,D,{"^":"",
hD:function(a){var z,y,x,w
z=P.d
y=new P.Q(0,$.D,[z])
x=new XMLHttpRequest()
C.z.dQ(x,"GET",a)
w=W.br
W.aC(x,"loadend",H.m(new D.hE(new P.dS(y,[z]),x),{func:1,ret:-1,args:[w]}),!1,w)
C.z.cl(x,"")
return y},
hE:{"^":"n:24;a,b",
$1:function(a){H.f(a,"$isbr")
this.a.bE(0,H.aR(W.kt(this.b.response),{futureOr:1,type:P.d}))}},
hv:{"^":"b;a,b,c",
cE:function(a){var z,y
a=document
z=W.b2
y={func:1,ret:-1,args:[z]}
W.aC(a,"keydown",H.m(new D.hx(this),y),!1,z)
W.aC(a,"keyup",H.m(new D.hy(this),y),!1,z)},
p:{
hw:function(a){var z=P.E
z=new D.hv(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z))
z.cE(a)
return z}}},
hx:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isb2")
z=this.a
z.a.l(0,a.which)
z.b.l(0,a.which)}},
hy:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isb2")
z=this.a
z.a.bY(0,a.which)
z.c.l(0,a.which)}},
hN:{"^":"b;a,b,c,d,e,f,r,x",
cF:function(a){var z,y
z=C.j.gdN(a)
y=H.o(z,0)
W.aC(z.a,z.b,H.m(new D.hP(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.j.gdM(a)
z=H.o(y,0)
W.aC(y.a,y.b,H.m(new D.hQ(this),{func:1,ret:-1,args:[z]}),!1,z)
z=C.j.gdO(a)
y=H.o(z,0)
W.aC(z.a,z.b,H.m(new D.hR(this),{func:1,ret:-1,args:[y]}),!1,y)
y=C.j.gdP(a)
z=H.o(y,0)
W.aC(y.a,y.b,H.m(new D.hS(this),{func:1,ret:-1,args:[z]}),!1,z)},
p:{
hO:function(a){var z=P.E
z=new D.hN(P.a4(null,null,null,z),P.a4(null,null,null,z),P.a4(null,null,null,z),0,0,0,0,0)
z.cF(a)
return z}}},
hP:{"^":"n:4;a",
$1:function(a){var z,y
H.f(a,"$isa5")
a.preventDefault()
z=this.a
y=J.j(a)
z.r=H.r(y.gbW(a).a)
z.x=H.r(y.gbW(a).b)
z.d=a.movementX
z.e=a.movementY}},
hQ:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isa5")
a.preventDefault()
P.aI("BUTTON "+H.e(a.button))
z=this.a
z.a.l(0,a.button)
z.b.l(0,a.button)}},
hR:{"^":"n:4;a",
$1:function(a){var z
H.f(a,"$isa5")
a.preventDefault()
z=this.a
z.a.bY(0,a.button)
z.c.l(0,a.button)}},
hS:{"^":"n:26;a",
$1:function(a){H.f(a,"$isbb")
a.preventDefault()
this.a.f=H.r(C.ae.gdB(a))}},
i_:{"^":"it;ch,cx,cy,db,dx,dy,fr,fx,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
c3:function(a){var z,y
z=C.b.dG(H.w(a,"$isk",[P.b],"$ask"),0,new A.kR(),P.E)
if(typeof z!=="number")return H.aU(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kR:{"^":"n:27;",
$2:function(a,b){var z,y
H.r(a)
z=J.am(b)
if(typeof a!=="number")return a.F()
y=536870911&a+z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",aL:{"^":"b;a",
P:function(a){var z,y
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
i:function(a,b){var z=this.a
if(b>=16)return H.i(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.aL){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gv:function(a){return A.c3(this.a)},
a2:function(a){var z,y,x
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
return new T.ba(z)},
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
z[15]=1}},P:{"^":"b;a",
V:function(a,b){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.P){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.c3(this.a)},
i:function(a,b){var z=this.a
if(b>=2)return H.i(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
gae:function(a){return this.a[0]},
ga1:function(a){return this.a[1]}},C:{"^":"b;a",
L:function(a,b,c){var z=this.a
C.b.h(z,0,a)
C.b.h(z,1,b)
C.b.h(z,2,c)},
P:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.C){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.c3(this.a)},
i:function(a,b){var z=this.a
if(b>=3)return H.i(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
gbU:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
ay:function(a){var z,y,x
z=Math.sqrt(this.gbU())
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
bK:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.C(new Float32Array(3))
z.L(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
gae:function(a){return this.a[0]},
ga1:function(a){return this.a[1]},
gcf:function(a){return this.a[2]},
p:{
iN:function(a,b,c){var z=new T.C(new Float32Array(3))
z.L(a,b,c)
return z}}},ba:{"^":"b;a",
k:function(a){var z=this.a
return H.e(z[0])+","+H.e(z[1])+","+H.e(z[2])+","+H.e(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ba){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gv:function(a){return A.c3(this.a)},
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
gae:function(a){return this.a[0]},
ga1:function(a){return this.a[1]},
gcf:function(a){return this.a[2]},
ge2:function(a){return this.a[3]}}}],["","",,B,{"^":"",
eq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z={}
y=document
x=C.n.cj(y,"stats")
w=y.createElement("div")
v=w.style
v.fontWeight="bold"
w.textContent="@@@@"
u=new R.iw(0,0,x,w,y.createElement("div"),R.jC("blue","gray",90,30))
u.cJ(x,"blue","gray")
t=H.f(C.n.bX(y,"#webgl-canvas"),"$isch")
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
q=new G.fK(t)
y=P.d
x=P.b
v=(t&&C.j).ci(t,"webgl2",P.dt(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],y,x))
q.a=v
if(v==null)H.N(P.df('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+H.e(J.fi(v))
if($.em>0)P.aI("I: "+p)
J.f_(v,0,0,0,1)
J.bD(v,2929)
v=new Float32Array(3)
p=D.hw(null)
o=D.hO(t)
n=new T.aL(new Float32Array(16))
n.a4()
m=new Float32Array(3)
l=new Float32Array(3)
k=new Float32Array(3)
j=new D.i_(15,-45,0.3,0,new T.C(v),-0.02,p,o,n,new T.C(m),new T.C(l),new T.C(k),new T.C(new Float32Array(3)),"camera:orbit",!1,!0)
v=new T.aL(new Float32Array(16))
v.a4()
p=new T.aL(new Float32Array(16))
p.a4()
i=new G.i0(j,50,1,0.1,2520,v,p,new T.aL(new Float32Array(16)),P.a_(y,x),"perspective",!1,!0)
i.b1()
i.cA(s,r)
v=$.eA()
p=G.dN(q,"frame::color",s,r,32856,v)
v=G.dN(q,"frame::depth",s,r,33190,v)
h=new G.di(q,null,p,v,null)
o=J.f1(q.a)
h.b=o
J.c8(q.a,36160,o)
J.cS(q.a,36160,36064,3553,p.b,0)
J.cS(q.a,36160,36096,3553,v.b,0)
g=J.eY(q.a,36160)
if(g!==36053)H.N("Error Incomplete Framebuffer: "+H.e(g))
J.c8(q.a,36160,null)
f=G.dD("solid",q,$.eP(),$.eO())
e=G.dD("ssao",q,$.eR(),$.eQ())
o=P.a_(y,x)
o.h(0,"uCameraNear",0.1)
o.h(0,"uCameraFar",2529)
if(typeof s!=="number")return H.aU(s)
if(typeof r!=="number")return H.aU(r)
n=new T.P(new Float32Array(2))
n.V(s,r)
o.h(0,"uCanvasSize",n)
o.h(0,"uDepthMap",v)
o.h(0,"uTexture",p)
v=new T.C(new Float32Array(3))
v.L(-1,-1,0)
p=new T.C(new Float32Array(3))
p.L(1,-1,0)
n=new T.C(new Float32Array(3))
n.L(1,1,0)
m=new T.C(new Float32Array(3))
m.L(-1,1,0)
l=[T.C]
d=H.l([v,p,n,m],l)
v=new T.P(new Float32Array(2))
v.V(0,0)
p=new T.P(new Float32Array(2))
p.V(1,0)
n=new T.P(new Float32Array(2))
n.V(1,1)
m=new T.P(new Float32Array(2))
m.V(0,1)
c=H.l([v,p,n,m],[T.P])
b=new T.C(new Float32Array(3))
b.L(0,0,1)
a=H.l([b,b,b,b],l)
a0=new G.dj(!1,H.l([],[G.cl]),H.l([],[G.cm]),H.l([],l),P.a_(y,[P.a,,]))
a0.a6("aTexUV")
a0.aW(d)
a0.aS("aTexUV",c)
a0.a6("aNormal")
a0.aT("aNormal",a)
a1=G.dk("quad",e,a0)
z.a=null
a2=D.hD("../ct_logo.obj")
a2.ad(new B.l4(z,f),null)
v=$.eM()
C.a.l(v,a2)
y=P.a_(y,x)
y.h(0,"cDepthTest",!0)
y.h(0,"cDepthWrite",!0)
y.h(0,"cBlendEquation",$.ev())
y.h(0,"cStencilFunc",$.ez())
y.h(0,"uColor",$.ew())
p=new Float32Array(16)
n=new T.aL(p)
n.a4()
a3=Math.cos(1.5707963267948966)
a4=Math.sin(1.5707963267948966)
m=p[4]
l=p[8]
k=p[5]
a5=p[9]
a6=p[6]
a7=p[10]
a8=p[7]
a9=p[11]
b0=-a4
p[4]=m*a3+l*a4
p[5]=k*a3+a5*a4
p[6]=a6*a3+a7*a4
p[7]=a8*a3+a9*a4
p[8]=m*b0+l*a3
p[9]=k*b0+a5*a3
p[10]=a6*b0+a7*a3
p[11]=a8*b0+a9*a3
y.h(0,"uModelMatrix",n)
z.b=0
P.hb(v,null,!1,x).ad(new B.l5(new B.l3(z,j,h,s,r,f,i,new G.hI(y,"mat",!1,!0),new G.di(q,null,null,null,null),e,a1,new G.bu(o,"plain",!1,!0),u)),null)},
l4:{"^":"n:28;a,b",
$1:function(a){this.a.a=G.dk("",this.b,Y.hj(H.t(a)))}},
l3:{"^":"n:29;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
H.cK(a9)
if(typeof a9!=="number")return a9.W()
z=this.a
z.b=a9+0
y=this.b
y.cx+=0.001
x=y.fx
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.cx
v=x.d
if(typeof v!=="number")return v.aL()
y.cx=w+v*0.01
v=y.cy
w=x.e
if(typeof w!=="number")return w.aL()
y.cy=v+w*0.01}w=y.fr
v=w.a
if(v.u(0,37))y.cx+=0.03
else if(v.u(0,39))y.cx-=0.03
if(v.u(0,38))y.cy+=0.03
else if(v.u(0,40))y.cy-=0.03
if(v.u(0,33))y.ch*=0.99
else if(v.u(0,34))y.ch*=1.01
if(v.u(0,32)){y.cx=0
y.cy=0}v=x.f
if(typeof v!=="number")return v.aL()
v=y.ch-v*y.dy
if(v>0)y.ch=v
v=C.t.dr(y.cy,-1.4707963267948965,1.4707963267948965)
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
p=new T.C(new Float32Array(3))
p.L(0,1,0)
v=y.aE()
u=new Float32Array(3)
o=new T.C(u)
o.P(v)
u[0]=u[0]-t[0]
u[1]=u[1]-t[1]
u[2]=u[2]-t[2]
o.ay(0)
n=p.bK(o)
n.ay(0)
m=o.bK(n)
m.ay(0)
t=n.aw(v)
r=m.aw(v)
v=o.aw(v)
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
d=Math.sqrt(k.gbU())
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
w.c.a_(0)
w.b.a_(0)
x.e=0
x.d=0
x.f=0
x.c.a_(0)
x.b.a_(0)
y=this.f
x=this.r
w=this.x
v=[G.bu]
if($.eN().checked){u=this.d
t=this.e
this.c.aQ(17664,0,0,u,t)
y.aj(z.a,H.l([x,w],v))
this.y.aQ(17664,0,0,u,t)
this.z.aj(this.Q,H.l([this.ch],v))}else y.aj(z.a,H.l([x,w],v))
C.af.gdi(window).ad(this,-1)
this.cx.cL(z.b)}},
l5:{"^":"n:30;a",
$1:function(a){H.bg(a)
this.a.$1(0)}}},1]]
setupProgram(dart,0,0)
J.B=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dn.prototype
return J.dm.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dp.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.aS=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.c_=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.kN=function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.kO=function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.c0=function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.j=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.b)return a
return J.c2(a)}
J.c1=function(a){if(a==null)return a
if(!(a instanceof P.b))return J.b9.prototype
return a}
J.T=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.B(a).B(a,b)}
J.a9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kN(a).O(a,b)}
J.bi=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aS(a).i(a,b)}
J.eS=function(a,b,c){return J.c_(a).h(a,b,c)}
J.cO=function(a,b){return J.c0(a).Y(a,b)}
J.bA=function(a,b){return J.j(a).d5(a,b)}
J.eT=function(a,b,c){return J.j(a).d6(a,b,c)}
J.cP=function(a,b){return J.j(a).bp(a,b)}
J.eU=function(a,b,c,d){return J.j(a).df(a,b,c,d)}
J.cQ=function(a,b,c){return J.j(a).br(a,b,c)}
J.eV=function(a,b){return J.j(a).dk(a,b)}
J.c7=function(a,b,c){return J.j(a).bs(a,b,c)}
J.c8=function(a,b,c){return J.j(a).bu(a,b,c)}
J.bB=function(a,b,c){return J.j(a).bv(a,b,c)}
J.bC=function(a,b){return J.j(a).dn(a,b)}
J.eW=function(a,b){return J.j(a).bw(a,b)}
J.eX=function(a,b,c){return J.j(a).bx(a,b,c)}
J.cR=function(a,b,c,d){return J.j(a).by(a,b,c,d)}
J.eY=function(a,b){return J.j(a).bz(a,b)}
J.eZ=function(a,b){return J.j(a).bA(a,b)}
J.f_=function(a,b,c,d,e){return J.j(a).bB(a,b,c,d,e)}
J.f0=function(a,b){return J.kO(a).J(a,b)}
J.c9=function(a,b,c){return J.aS(a).du(a,b,c)}
J.ca=function(a){return J.j(a).bF(a)}
J.f1=function(a){return J.j(a).bG(a)}
J.f2=function(a){return J.j(a).bH(a)}
J.f3=function(a){return J.j(a).bJ(a)}
J.f4=function(a){return J.j(a).dA(a)}
J.f5=function(a,b){return J.j(a).bL(a,b)}
J.cb=function(a,b){return J.j(a).bM(a,b)}
J.f6=function(a,b,c,d){return J.j(a).bN(a,b,c,d)}
J.f7=function(a,b,c,d,e){return J.j(a).dC(a,b,c,d,e)}
J.f8=function(a,b,c,d,e){return J.j(a).bO(a,b,c,d,e)}
J.f9=function(a,b,c,d,e,f){return J.j(a).dD(a,b,c,d,e,f)}
J.fa=function(a,b){return J.c_(a).q(a,b)}
J.bD=function(a,b){return J.j(a).bP(a,b)}
J.fb=function(a,b){return J.j(a).bQ(a,b)}
J.fc=function(a){return J.j(a).dF(a)}
J.fd=function(a,b){return J.j(a).C(a,b)}
J.cS=function(a,b,c,d,e,f){return J.j(a).bT(a,b,c,d,e,f)}
J.fe=function(a){return J.j(a).gdj(a)}
J.am=function(a){return J.B(a).gv(a)}
J.bE=function(a){return J.c_(a).gw(a)}
J.aX=function(a){return J.aS(a).gj(a)}
J.ff=function(a){return J.j(a).gdR(a)}
J.fg=function(a){return J.j(a).gdW(a)}
J.fh=function(a){return J.c1(a).ge2(a)}
J.bF=function(a){return J.c1(a).gae(a)}
J.cc=function(a){return J.c1(a).ga1(a)}
J.cT=function(a){return J.c1(a).gcf(a)}
J.cd=function(a,b){return J.j(a).U(a,b)}
J.fi=function(a){return J.j(a).af(a)}
J.fj=function(a){return J.j(a).aD(a)}
J.fk=function(a,b){return J.j(a).aF(a,b)}
J.fl=function(a,b,c){return J.j(a).aG(a,b,c)}
J.cU=function(a,b,c){return J.j(a).aK(a,b,c)}
J.fm=function(a,b){return J.j(a).bV(a,b)}
J.cV=function(a){return J.j(a).dS(a)}
J.fn=function(a,b){return J.c0(a).cp(a,b)}
J.fo=function(a,b,c,d){return J.j(a).aO(a,b,c,d)}
J.fp=function(a,b,c,d){return J.j(a).c_(a,b,c,d)}
J.bG=function(a,b,c,d){return J.j(a).c0(a,b,c,d)}
J.fq=function(a,b,c,d,e,f){return J.j(a).dX(a,b,c,d,e,f)}
J.fr=function(a){return J.c0(a).dY(a)}
J.bj=function(a){return J.B(a).k(a)}
J.fs=function(a,b,c,d){return J.j(a).e_(a,b,c,d)}
J.ft=function(a){return J.c0(a).e0(a)}
J.fu=function(a,b,c){return J.j(a).c2(a,b,c)}
J.fv=function(a,b,c){return J.j(a).c3(a,b,c)}
J.ce=function(a,b,c){return J.j(a).c4(a,b,c)}
J.fw=function(a,b,c){return J.j(a).c5(a,b,c)}
J.cW=function(a,b,c){return J.j(a).c6(a,b,c)}
J.cX=function(a,b,c){return J.j(a).c7(a,b,c)}
J.cY=function(a,b,c){return J.j(a).c8(a,b,c)}
J.cZ=function(a,b,c,d){return J.j(a).c9(a,b,c,d)}
J.d_=function(a,b,c,d){return J.j(a).ca(a,b,c,d)}
J.fx=function(a,b){return J.j(a).cb(a,b)}
J.fy=function(a,b,c){return J.j(a).e1(a,b,c)}
J.fz=function(a,b,c,d,e,f,g){return J.j(a).cc(a,b,c,d,e,f,g)}
J.fA=function(a,b,c,d,e){return J.j(a).ce(a,b,c,d,e)}
I.aH=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bH.prototype
C.j=W.ch.prototype
C.y=W.fR.prototype
C.r=W.fY.prototype
C.K=W.fZ.prototype
C.L=W.hf.prototype
C.n=W.hg.prototype
C.z=W.hh.prototype
C.M=J.h.prototype
C.a=J.bn.prototype
C.A=J.dm.prototype
C.f=J.dn.prototype
C.N=J.dp.prototype
C.t=J.bo.prototype
C.h=J.bp.prototype
C.U=J.bq.prototype
C.b=H.hT.prototype
C.o=H.hV.prototype
C.w=W.hW.prototype
C.D=J.i1.prototype
C.E=W.id.prototype
C.J=W.iC.prototype
C.x=J.b9.prototype
C.ae=W.bb.prototype
C.af=W.iQ.prototype
C.e=new P.jP()
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
C.V=H.l(I.aH(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.W=H.l(I.aH(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Y=H.l(I.aH([]),[P.z])
C.X=H.l(I.aH([]),[P.d])
C.u=H.l(I.aH(["bind","if","ref","repeat","syntax"]),[P.d])
C.v=H.l(I.aH(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.Z=new G.F("vec3","vertex btangents",0)
C.d=new G.F("vec3","",0)
C.a_=new G.F("vec4","delta from light",0)
C.p=new G.F("","",0)
C.F=new G.F("vec3","vertex coordinates",0)
C.a0=new G.F("vec3","vertex binormals",0)
C.G=new G.F("vec4","for wireframe",0)
C.a1=new G.F("vec4","per vertex color",0)
C.a2=new G.F("float","for normal maps",0)
C.k=new G.F("mat4","",0)
C.a4=new G.F("mat4","",4)
C.a3=new G.F("mat4","",128)
C.c=new G.F("float","",0)
C.a5=new G.F("float","",4)
C.a6=new G.F("float","depth for shadowmaps",0)
C.i=new G.F("sampler2D","",0)
C.a7=new G.F("float","for bump maps",0)
C.a8=new G.F("vec2","texture uvs",0)
C.a9=new G.F("float","time since program start in sec",0)
C.l=new G.F("vec2","",0)
C.aa=new G.F("samplerCube","",0)
C.m=new G.F("vec4","",0)
C.ab=new G.F("vec3","vertex normals",0)
C.ac=new G.F("sampler2DShadow","",0)
C.H=new G.F("vec3","per vertex color",0)
C.I=new G.F("mat3","",0)
C.ad=new G.F("vec3","vertex tangents",0)
$.aa=0
$.aY=null
$.d2=null
$.cA=!1
$.eo=null
$.ei=null
$.et=null
$.bZ=null
$.c4=null
$.cH=null
$.aO=null
$.bc=null
$.bd=null
$.cB=!1
$.D=C.e
$.af=null
$.ck=null
$.de=null
$.dd=null
$.d9=null
$.d8=null
$.d7=null
$.d6=null
$.em=0
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
I.$lazy(y,x,w)}})(["lu","ey",function(){return H.en("_$dart_dartClosure")},"m6","cL",function(){return H.en("_$dart_js")},"mT","eB",function(){return H.ac(H.bR({
toString:function(){return"$receiver$"}}))},"mU","eC",function(){return H.ac(H.bR({$method$:null,
toString:function(){return"$receiver$"}}))},"mV","eD",function(){return H.ac(H.bR(null))},"mW","eE",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"mZ","eH",function(){return H.ac(H.bR(void 0))},"n_","eI",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"mY","eG",function(){return H.ac(H.dL(null))},"mX","eF",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"n1","eK",function(){return H.ac(H.dL(void 0))},"n0","eJ",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"nb","cM",function(){return P.iW()},"nr","bh",function(){return[]},"lr","ex",function(){return{}},"ni","eL",function(){return P.ct(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)},"nj","cN",function(){return P.a_(P.d,P.bl)},"mF","ez",function(){return new G.dK(1281,0,4294967295)},"lm","ev",function(){return new G.dJ(1281,1281,1281)},"np","a8",function(){return P.dt(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.c,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.c,"iaColor",C.d,"vColor",C.H,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.ac,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.aa,"uAnimationTable",C.i,"uTime",C.a9,"uCameraNear",C.c,"uCameraFar",C.c,"uFogNear",C.c,"uFogFar",C.c,"uPointSize",C.c,"uScale",C.c,"uAngle",C.c,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.c,"uShininess",C.c,"uShadowBias",C.c,"uOpacity",C.c,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.c,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2],P.d,G.F)},"mO","eA",function(){var z=new G.iE(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"lp","ew",function(){return T.iN(0.8,0.8,0.8)},"ny","eP",function(){var z,y
z=G.bQ("SolidColor")
y=[P.d]
z.aR(H.l(["aPosition"],y))
z.ai(H.l(["uPerspectiveViewMatrix","uModelMatrix"],y))
z.b0(H.l(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],y))
return z},"nx","eO",function(){var z,y
z=G.bQ("SolidColorF")
y=[P.d]
z.ai(H.l(["uColor"],y))
z.b0(H.l(["oFragColor = vec4( uColor, 1.0 );"],y))
return z},"nA","eR",function(){var z,y
z=G.bQ("SSAOV")
y=[P.d]
z.aR(H.l(["aPosition","aTexUV"],y))
z.aU(H.l(["vTexUV"],y))
z.b_(H.l(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],y))
return z},"nz","eQ",function(){var z,y
z=G.bQ("SSAOF")
y=[P.d]
z.aU(H.l(["vTexUV"],y))
z.ai(H.l(["uCanvasSize","uCameraNear","uCameraFar","uTexture","uDepthMap"],y))
z.b_(H.l(["\n    //uniform bool fogEnabled;\n    const bool fogEnabled=false;\n\n    //uniform bool onlyAO;\n    const bool onlyAO=false;\n\n\n    //uniform float aoClamp;\n    const float aoClamp = 0.45;\n\n    //uniform float lumInfluence;\n    const float lumInfluence = 0.4;\n\n    //varying vec2 vUv;\n    \n    #define DL 2.399963229728653\n    #define EULER 2.718281828459045\n    \n\n\n    const int samples = 8;\n    const float radius = 5.0;\n    const bool useNoise = false;\n    const float noiseAmount = 0.0003;\n    const float diffArea = 0.4;\n    const float gDisplace = 0.4;\n    const vec3 onlyAOColor = vec3( 1.0, 0.7, 0.5 );\n    \n    float unpackDepth( const in vec4 rgba_depth ) {\n      return rgba_depth.r;\n    }\n\n    float unpackDepth2(vec4 rgba_depth) {\n      const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n      float depth = dot( rgba_depth, bit_shift );\n      return depth;\n    }\n    \n    vec2 rand( const vec2 coord ) {\n      vec2 noise;\n      if ( useNoise ) {\n        float nx = dot ( coord, vec2( 12.9898, 78.233 ) );\n        float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );\n        noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );\n      } else {\n        float width = uCanvasSize.x;\n        float height = uCanvasSize.y;\n        float ff = fract( 1.0 - coord.s * ( width / 2.0 ) );\n        float gg = fract( coord.t * ( height / 2.0 ) );\n        noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;\n      }\n      return ( noise * 2.0  - 1.0 ) * noiseAmount;\n    }\n    \n/*\n    float doFog() {\n      float zdepth = unpackDepth( texture(uDepthMap, vTexUV ) );\n      float depth = -cameraFar * cameraNear / ( zdepth * cameraFarMinusNear - cameraFar );\n      return smoothstep( fogNear, fogFar, depth );\n    }\n*/  \n\n    float readDepth(vec2 coord) {\n      float cameraFarPlusNear = uCameraFar + uCameraNear;\n      float cameraFarMinusNear = uCameraFar - uCameraNear;\n      float cameraCoef = 2.0 * uCameraNear;\n      return cameraCoef / ( cameraFarPlusNear - unpackDepth( texture(uDepthMap, coord ) ) * cameraFarMinusNear );\n    }\n    \n    float compareDepths( const in float depth1, const in float depth2, inout int far ) {\n      float garea = 2.0;\n      float diff = ( depth1 - depth2 ) * 100.0;\n      if ( diff < gDisplace ) {\n        garea = diffArea;\n      } else {\n        far = 1;\n      }\n    \n      float dd = diff - gDisplace;\n      float gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );\n      return gauss;\n    }\n    \n    float calcAO( float depth, float dw, float dh ) {\n      float dd = radius - depth * radius;\n      vec2 vv = vec2( dw, dh );\n      vec2 coord1 = vTexUV + dd * vv;\n      vec2 coord2 = vTexUV - dd * vv;\n      float temp1 = 0.0;\n      float temp2 = 0.0;\n      int far = 0;\n      temp1 = compareDepths( depth, readDepth( coord1 ), far );\n      if ( far > 0 ) {\n        temp2 = compareDepths( readDepth( coord2 ), depth, far );\n        temp1 += ( 1.0 - temp1 ) * temp2;\n      }\n      return temp1;\n    }\n    \n    void main() {\n      float width = uCanvasSize.x;\n      float height = uCanvasSize.y;\n\n      vec2 noise = rand( vTexUV );\n      float depth = readDepth( vTexUV );\n      float tt = clamp( depth, aoClamp, 1.0 );\n      float w = ( 1.0 / width )  / tt + ( noise.x * ( 1.0 - noise.x ) );\n      float h = ( 1.0 / height ) / tt + ( noise.y * ( 1.0 - noise.y ) );\n      float pw;\n      float ph;\n      float ao;\n      float dz = 1.0 / float( samples );\n      float z = 1.0 - dz / 2.0;\n      float l = 0.0;\n      for ( int i = 0; i <= samples; i ++ ) {\n        float r = sqrt( 1.0 - z );\n        pw = cos( l ) * r;\n        ph = sin( l ) * r;\n        ao += calcAO( depth, pw * w, ph * h );\n        z = z - dz;\n        l = l + DL;\n      }\n    \n      ao /= float( samples );\n      ao = 1.0 - ao;\n\n/*\n      if ( fogEnabled ) {\n        ao = mix( ao, 1.0, doFog() );\n      }\n*/\n\n      // Diffuse\n      vec3 color = texture(uTexture, vTexUV ).rgb;\n      vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );\n      float lum = dot( color.rgb, lumcoeff );\n      vec3 luminance = vec3( lum );\n      vec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n    \n      if ( onlyAO ) {\n        final = onlyAOColor * vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n      }\n      oFragColor = vec4( final, 1.0 );\n      //oFragColor = vec4( color, 1.0 );\n    }\n    \n    "],y))
return z},"nu","eM",function(){return H.l([],[[P.Z,P.b]])},"nv","eN",function(){return H.ae(C.n.bX(W.kK(),"#activate"),"$isdl")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.a5]},{func:1,ret:P.d,args:[P.E]},{func:1,ret:P.z,args:[,,]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.S,args:[W.ab]},{func:1,ret:P.S,args:[P.d]},{func:1,ret:P.S,args:[W.U,P.d,P.d,W.bv]},{func:1,ret:-1,args:[,]},{func:1,ret:P.z,args:[W.b2]},{func:1,args:[P.d]},{func:1,ret:P.z,args:[,P.R]},{func:1,ret:P.z,args:[,],opt:[P.R]},{func:1,ret:[P.Q,,],args:[,]},{func:1,ret:P.S,args:[W.u]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.z,args:[P.G]},{func:1,args:[W.ag]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.z,args:[W.br]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.bb]},{func:1,ret:P.E,args:[P.E,P.b]},{func:1,ret:P.z,args:[P.d]},{func:1,ret:-1,args:[P.G]},{func:1,ret:P.z,args:[[P.a,,]]},{func:1,ret:P.E,args:[,,]},{func:1,args:[,P.d]},{func:1,args:[,,]}]
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
if(x==y)H.lf(d||a)
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
Isolate.aH=a.aH
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
if(typeof dartMainRunner==="function")dartMainRunner(B.eq,[])
else B.eq([])})})()
//# sourceMappingURL=ssao.dart.js.map
