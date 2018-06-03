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
else b1.push(a8+a9+";\n")}}return f}function defineClass(a2,a3){var g=[]
var f="function "+a2+"("
var e=""
for(var d=0;d<a3.length;d++){if(d!=0)f+=", "
var a0=generateAccessor(a3[d],g,a2)
var a1="p_"+a0
f+=a1
e+="this."+a0+" = "+a1+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a2+".builtin$cls=\""+a2+"\";\n"
f+="$desc=$collectedClasses."+a2+"[1];\n"
f+=a2+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a2+".name=\""+a2+"\";\n"
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
b6.$ise=b5
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
var d=supportsDirectProtoAccess&&b2!="e"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="u"){processStatics(init.statics[b2]=b3.u,b4)
delete b3.u}else if(a2===43){w[g]=a1.substring(1)
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
processClassData(e,d,a5)}}}function addStubs(b5,b6,b7,b8,b9){var g=0,f=b6[g],e
if(typeof f=="string")e=b6[++g]
else{e=f
f=b7}var d=[b5[b7]=b5[f]=e]
e.$stubName=b7
b9.push(b7)
for(g++;g<b6.length;g++){e=b6[g]
if(typeof e!="function")break
if(!b8)e.$stubName=b6[++g]
d.push(e)
if(e.$stubName){b5[e.$stubName]=e
b9.push(e.$stubName)}}for(var a0=0;a0<d.length;g++,a0++)d[a0].$callName=b6[g]
var a1=b6[g]
b6=b6.slice(++g)
var a2=b6[0]
var a3=(a2&1)===1
a2=a2>>1
var a4=a2>>1
var a5=(a2&1)===1
var a6=a2===3
var a7=a2===1
var a8=b6[1]
var a9=a8>>1
var b0=(a8&1)===1
var b1=a4+a9
var b2=b6[2]
if(typeof b2=="number")b6[2]=b2+c
if(b>0){var b3=3
for(var a0=0;a0<a9;a0++){if(typeof b6[b3]=="number")b6[b3]=b6[b3]+b
b3++}for(var a0=0;a0<b1;a0++){b6[b3]=b6[b3]+b
b3++}}var b4=2*a9+a4+3
if(a1){e=tearOff(d,b6,b8,b7,a3)
b5[b7].$getter=e
e.$getterStub=true
if(b8)b9.push(a1)
b5[a1]=e
d.push(e)
e.$stubName=a1
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cg"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cg"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cg(this,d,e,true,[],a0).prototype
return g}:tearOffGetter(d,e,a0,a1)}var y=0
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.at=function(){}
var dart=[["","",,H,{"^":"",lD:{"^":"e;a"}}],["","",,J,{"^":"",
q:function(a){return void 0},
ck:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ba:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cj==null){H.kf()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.dO("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bX()]
if(v!=null)return v
v=H.kj(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$bX(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"e;",
H:function(a,b){return a===b},
gC:function(a){return H.aM(a)},
k:["cL",function(a){return"Instance of '"+H.aN(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fU:{"^":"h;",
k:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$isce:1},
fV:{"^":"h;",
H:function(a,b){return null==b},
k:function(a){return"null"},
gC:function(a){return 0},
$isb3:1},
bY:{"^":"h;",
gC:function(a){return 0},
k:["cN",function(a){return String(a)}]},
ho:{"^":"bY;"},
b7:{"^":"bY;"},
aJ:{"^":"bY;",
k:function(a){var z=a[$.$get$cN()]
return z==null?this.cN(a):J.az(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aF:{"^":"h;$ti",
G:function(a,b){if(!!a.fixed$length)H.R(P.r("add"))
a.push(b)},
O:function(a,b){var z,y
if(!!a.fixed$length)H.R(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
B:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.N(a))}},
al:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.d(a[x])
if(x>=z)return H.a(y,x)
y[x]=w}return y.join(b)},
bc:function(a,b){return H.du(a,b,null,H.G(a,0))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
geb:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.d4())},
cF:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.R(P.r("setRange"))
P.hw(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.J()
if(typeof b!=="number")return H.u(b)
z=c-b
if(z===0)return
y=J.q(d)
if(!!y.$isi){x=e
w=d}else{w=y.bc(d,e).em(0,!1)
x=0}y=J.ab(w)
v=y.gi(w)
if(typeof v!=="number")return H.u(v)
if(x+z>v)throw H.c(H.fR())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
an:function(a,b,c,d){return this.cF(a,b,c,d,0)},
bI:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.c(P.N(a))}return!1},
cG:function(a,b){if(!!a.immutable$list)H.R(P.r("sort"))
H.hN(a,J.jN())},
aC:function(a){return this.cG(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
k:function(a){return P.bW(a,"[","]")},
gN:function(a){return new J.fe(a,a.length,0,null,[H.G(a,0)])},
gC:function(a){return H.aM(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.R(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.cG(b,"newLength",null))
if(b<0)throw H.c(P.aq(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aa(a,b))
if(b>=a.length||b<0)throw H.c(H.aa(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.R(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aa(a,b))
if(b>=a.length||b<0)throw H.c(H.aa(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.c.l(a.length,C.c.gi(b))
y=H.y([],[H.G(a,0)])
this.si(y,z)
this.an(y,0,a.length,a)
this.an(y,a.length,z,b)
return y},
$iso:1,
$aso:I.at,
$isi:1,
u:{
aG:function(a){a.fixed$length=Array
return a},
lB:[function(a,b){return J.eH(a,b)},"$2","jN",8,0,22]}},
lC:{"^":"aF;$ti"},
fe:{"^":"e;a,b,c,d,$ti",
gD:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aH:{"^":"h;",
a_:function(a,b){var z
if(typeof b!=="number")throw H.c(H.Z(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaw(b)
if(this.gaw(a)===z)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw:function(a){return a===0?1/a<0:a<0},
el:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.r(""+a+".toInt()"))},
dR:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.r(""+a+".ceil()"))},
dS:function(a,b,c){if(this.a_(b,c)>0)throw H.c(H.Z(b))
if(this.a_(a,b)<0)return b
if(this.a_(a,c)>0)return c
return a},
eo:function(a,b){var z
if(b>20)throw H.c(P.aq(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaw(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.c(H.Z(b))
return a+b},
J:function(a,b){if(typeof b!=="number")throw H.c(H.Z(b))
return a-b},
cP:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bC(a,b)},
ad:function(a,b){return(a|0)===a?a/b|0:this.bC(a,b)},
bC:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.r("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
bA:function(a,b){var z
if(a>0)z=this.dC(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dC:function(a,b){return b>31?0:a>>>b},
a8:function(a,b){if(typeof b!=="number")throw H.c(H.Z(b))
return a<b},
am:function(a,b){if(typeof b!=="number")throw H.c(H.Z(b))
return a>b},
$isal:1,
$isaV:1},
d6:{"^":"aH;",$isJ:1},
d5:{"^":"aH;"},
aI:{"^":"h;",
dT:function(a,b){if(b>=a.length)H.R(H.aa(a,b))
return a.charCodeAt(b)},
bs:function(a,b){if(b>=a.length)throw H.c(H.aa(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.c(P.cG(b,null,null))
return a+b},
cI:function(a,b,c){var z
if(c>a.length)throw H.c(P.aq(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cH:function(a,b){return this.cI(a,b,0)},
be:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.R(H.Z(c))
if(b<0)throw H.c(P.bp(b,null,null))
if(typeof c!=="number")return H.u(c)
if(b>c)throw H.c(P.bp(b,null,null))
if(c>a.length)throw H.c(P.bp(c,null,null))
return a.substring(b,c)},
cJ:function(a,b){return this.be(a,b,null)},
en:function(a){return a.toLowerCase()},
dV:function(a,b,c){if(c>a.length)throw H.c(P.aq(c,0,a.length,null,null))
return H.kp(a,b,c)},
a_:function(a,b){var z
if(typeof b!=="string")throw H.c(H.Z(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gC:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.aa(a,b))
return a[b]},
$iso:1,
$aso:I.at,
$isn:1}}],["","",,H,{"^":"",
d4:function(){return new P.bs("No element")},
fS:function(){return new P.bs("Too many elements")},
fR:function(){return new P.bs("Too few elements")},
hN:function(a,b){var z=J.a5(a)
if(typeof z!=="number")return z.J()
H.b5(a,0,z-1,b)},
b5:function(a,b,c,d){if(c-b<=32)H.hM(a,b,c,d)
else H.hL(a,b,c,d)},
hM:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.ab(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.S(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hL:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.c.ad(c-b+1,6)
y=b+z
x=c-z
w=C.c.ad(b+c,2)
v=w-z
u=w+z
t=J.ab(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.S(d.$2(s,r),0)){n=r
r=s
s=n}if(J.S(d.$2(p,o),0)){n=o
o=p
p=n}if(J.S(d.$2(s,q),0)){n=q
q=s
s=n}if(J.S(d.$2(r,q),0)){n=q
q=r
r=n}if(J.S(d.$2(s,p),0)){n=p
p=s
s=n}if(J.S(d.$2(q,p),0)){n=p
p=q
q=n}if(J.S(d.$2(r,o),0)){n=o
o=r
r=n}if(J.S(d.$2(r,q),0)){n=q
q=r
r=n}if(J.S(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.M(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.q(i)
if(h.H(i,0))continue
if(h.a8(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aU(i)
if(h.am(i,0)){--l
continue}else{g=l-1
if(h.a8(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aX(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.S(d.$2(j,p),0))for(;!0;)if(J.S(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aX(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}e=!1}h=m-1
t.j(a,b,t.h(a,h))
t.j(a,h,r)
h=l+1
t.j(a,c,t.h(a,h))
t.j(a,h,p)
H.b5(a,b,m-2,d)
H.b5(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.M(d.$2(t.h(a,m),r),0);)++m
for(;J.M(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.M(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.M(d.$2(j,p),0))for(;!0;)if(J.M(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aX(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b5(a,m,l,d)}else H.b5(a,m,l,d)},
bS:{"^":"bl;$ti"},
bn:{"^":"bS;$ti",
gN:function(a){return new H.db(this,this.gi(this),0,null,[H.ci(this,"bn",0)])},
B:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.w(0,y))
if(z!==this.gi(this))throw H.c(P.N(this))}},
b2:function(a,b){return this.cM(0,b)}},
hZ:{"^":"bn;a,b,c,$ti",
d4:function(a,b,c,d){},
gdm:function(){var z=J.a5(this.a)
return z},
gdD:function(){var z,y
z=J.a5(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a5(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>=z)return 0
return z-y},
w:function(a,b){var z,y
z=this.gdD()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.u(b)
y=z+b
if(!(b<0)){z=this.gdm()
if(typeof z!=="number")return H.u(z)
z=y>=z}else z=!0
if(z)throw H.c(P.A(b,this,"index",null,null))
return J.cs(this.a,y)},
em:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.ab(y)
w=x.gi(y)
if(typeof w!=="number")return w.J()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.y(u,this.$ti)
for(s=0;s<v;++s){u=x.w(y,z+s)
if(s>=t.length)return H.a(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.a8()
if(u<w)throw H.c(P.N(this))}return t},
u:{
du:function(a,b,c,d){var z=new H.hZ(a,b,c,[d])
z.d4(a,b,c,d)
return z}}},
db:{"^":"e;a,b,c,d,$ti",
gD:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.ab(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.N(z))
w=this.c
if(typeof x!=="number")return H.u(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
h3:{"^":"bn;a,b,$ti",
gi:function(a){return J.a5(this.a)},
w:function(a,b){return this.b.$1(J.cs(this.a,b))},
$asbS:function(a,b){return[b]},
$asbn:function(a,b){return[b]},
$asbl:function(a,b){return[b]}},
dP:{"^":"bl;a,b,$ti",
gN:function(a){return new H.i7(J.b_(this.a),this.b,this.$ti)}},
i7:{"^":"fT;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gD(z))===!0)return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bj:{"^":"e;$ti"}}],["","",,H,{"^":"",
k7:function(a){return init.types[a]},
ki:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.q(a).$isp},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.az(a)
if(typeof z!=="string")throw H.c(H.Z(a))
return z},
aM:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aN:function(a){var z,y,x,w,v,u,t,s,r
z=J.q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.D||!!J.q(a).$isb7){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bs(w,0)===36)w=C.i.cJ(w,1)
r=H.bD(H.au(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
L:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hv:function(a){return a.b?H.L(a).getUTCFullYear()+0:H.L(a).getFullYear()+0},
ht:function(a){return a.b?H.L(a).getUTCMonth()+1:H.L(a).getMonth()+1},
hp:function(a){return a.b?H.L(a).getUTCDate()+0:H.L(a).getDate()+0},
hq:function(a){return a.b?H.L(a).getUTCHours()+0:H.L(a).getHours()+0},
hs:function(a){return a.b?H.L(a).getUTCMinutes()+0:H.L(a).getMinutes()+0},
hu:function(a){return a.b?H.L(a).getUTCSeconds()+0:H.L(a).getSeconds()+0},
hr:function(a){return a.b?H.L(a).getUTCMilliseconds()+0:H.L(a).getMilliseconds()+0},
u:function(a){throw H.c(H.Z(a))},
a:function(a,b){if(a==null)J.a5(a)
throw H.c(H.aa(a,b))},
aa:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,"index",null)
z=J.a5(a)
if(!(b<0)){if(typeof z!=="number")return H.u(z)
y=b>=z}else y=!0
if(y)return P.A(b,a,"index",null,z)
return P.bp(b,"index",null)},
Z:function(a){return new P.ac(!0,a,null,null)},
a8:function(a){if(typeof a!=="number")throw H.c(H.Z(a))
return a},
c:function(a){var z
if(a==null)a=new P.di()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ev})
z.name=""}else z.toString=H.ev
return z},
ev:function(){return J.az(this.dartException)},
R:function(a){throw H.c(a)},
D:function(a){throw H.c(P.N(a))},
W:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kr(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bA(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bZ(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dh(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dB()
u=$.$get$dC()
t=$.$get$dD()
s=$.$get$dE()
r=$.$get$dI()
q=$.$get$dJ()
p=$.$get$dG()
$.$get$dF()
o=$.$get$dL()
n=$.$get$dK()
m=v.V(y)
if(m!=null)return z.$1(H.bZ(y,m))
else{m=u.V(y)
if(m!=null){m.method="call"
return z.$1(H.bZ(y,m))}else{m=t.V(y)
if(m==null){m=s.V(y)
if(m==null){m=r.V(y)
if(m==null){m=q.V(y)
if(m==null){m=p.V(y)
if(m==null){m=s.V(y)
if(m==null){m=o.V(y)
if(m==null){m=n.V(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dh(y,m))}}return z.$1(new H.i5(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dq()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ac(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dq()
return a},
am:function(a){var z
if(a==null)return new H.e5(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e5(a,null)},
k3:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
kh:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.cX("Unsupported number of arguments for wrapped closure"))},
a9:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kh)
a.$identity=z
return z},
fo:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.q(c).$isi){z.$reflectionInfo=c
x=H.hy(z).r}else x=c
w=d?Object.create(new H.hO().constructor.prototype):Object.create(new H.bP(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a_
$.a_=J.ax(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cL(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.k7,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cJ:H.bQ
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cL(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fl:function(a,b,c,d){var z=H.bQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cL:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fn(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fl(y,!w,z,b)
if(y===0){w=$.a_
$.a_=J.ax(w,1)
u="self"+H.d(w)
w="return function(){var "+u+" = this."
v=$.aA
if(v==null){v=H.bg("self")
$.aA=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a_
$.a_=J.ax(w,1)
t+=H.d(w)
w="return function("+t+"){return this."
v=$.aA
if(v==null){v=H.bg("self")
$.aA=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fm:function(a,b,c,d){var z,y
z=H.bQ
y=H.cJ
switch(b?-1:a){case 0:throw H.c(H.hF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fn:function(a,b){var z,y,x,w,v,u,t,s
z=$.aA
if(z==null){z=H.bg("self")
$.aA=z}y=$.cI
if(y==null){y=H.bg("receiver")
$.cI=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fm(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a_
$.a_=J.ax(y,1)
return new Function(z+H.d(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a_
$.a_=J.ax(y,1)
return new Function(z+H.d(y)+"}")()},
cg:function(a,b,c,d,e,f){var z,y
z=J.aG(b)
y=!!J.q(c).$isi?J.aG(c):c
return H.fo(a,z,y,!!d,e,f)},
km:function(a,b){var z=J.ab(b)
throw H.c(H.cK(a,z.be(b,3,z.gi(b))))},
a3:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else z=!0
if(z)return a
H.km(a,b)},
ch:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
ek:function(a,b){var z,y
if(a==null)return!1
z=H.ch(J.q(a))
if(z==null)y=!1
else y=H.eq(z,b)
return y},
jV:function(a){var z
if(a instanceof H.k){z=H.ch(J.q(a))
if(z!=null)return H.cl(z,null)
return"Closure"}return H.aN(a)},
kq:function(a){throw H.c(new P.ft(a))},
eo:function(a){return init.getIsolateTag(a)},
y:function(a,b){a.$ti=b
return a},
au:function(a){if(a==null)return
return a.$ti},
n0:function(a,b,c){return H.aW(a["$as"+H.d(c)],H.au(b))},
bb:function(a,b,c,d){var z=H.aW(a["$as"+H.d(c)],H.au(b))
return z==null?null:z[d]},
ci:function(a,b,c){var z=H.aW(a["$as"+H.d(b)],H.au(a))
return z==null?null:z[c]},
G:function(a,b){var z=H.au(a)
return z==null?null:z[b]},
cl:function(a,b){var z=H.aw(a,b)
return z},
aw:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bD(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.d(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aw(z,b)
return H.jM(a,b)}return"unknown-reified-type"},
jM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aw(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aw(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aw(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.k2(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aw(r[p],b)+(" "+H.d(p))}w+="}"}return"("+w+") => "+z},
bD:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c5("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aw(u,c)}return w?"":"<"+z.k(0)+">"},
k6:function(a){var z,y,x
if(a instanceof H.k){z=H.ch(J.q(a))
if(z!=null)return H.cl(z,null)}y=J.q(a).constructor.builtin$cls
if(a==null)return y
x=H.bD(a.$ti,0,null)
return y+x},
aW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cf:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.au(a)
y=J.q(a)
if(y[b]==null)return!1
return H.eh(H.aW(y[d],z),c)},
bd:function(a,b,c,d){var z,y
if(a==null)return a
z=H.cf(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bD(c,0,null)
throw H.c(H.cK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eh:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.Q(a[y],b[y]))return!1
return!0},
mZ:function(a,b,c){return a.apply(b,H.aW(J.q(b)["$as"+H.d(c)],H.au(b)))},
Q:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b3")return!0
if('func' in b)return H.eq(a,b)
if('func' in a)return b.builtin$cls==="lu"||b.builtin$cls==="e"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cl(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eh(H.aW(u,z),x)},
eg:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.Q(z,v)||H.Q(v,z)))return!1}return!0},
jW:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aG(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.Q(v,u)||H.Q(u,v)))return!1}return!0},
eq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.Q(z,y)||H.Q(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eg(x,w,!1))return!1
if(!H.eg(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.Q(o,n)||H.Q(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.Q(o,n)||H.Q(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.Q(o,n)||H.Q(n,o)))return!1}}return H.jW(a.named,b.named)},
n_:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kj:function(a){var z,y,x,w,v,u
z=$.ep.$1(a)
y=$.bB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ef.$2(a,z)
if(z!=null){y=$.bB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bE(x)
$.bB[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bC[z]=x
return x}if(v==="-"){u=H.bE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.es(a,x)
if(v==="*")throw H.c(P.dO(z))
if(init.leafTags[z]===true){u=H.bE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.es(a,x)},
es:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ck(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bE:function(a){return J.ck(a,!1,null,!!a.$isp)},
kl:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bE(z)
else return J.ck(z,c,null,null)},
kf:function(){if(!0===$.cj)return
$.cj=!0
H.kg()},
kg:function(){var z,y,x,w,v,u,t,s
$.bB=Object.create(null)
$.bC=Object.create(null)
H.kb()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.et.$1(v)
if(u!=null){t=H.kl(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kb:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.as(C.E,H.as(C.J,H.as(C.u,H.as(C.u,H.as(C.I,H.as(C.F,H.as(C.G(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ep=new H.kc(v)
$.ef=new H.kd(u)
$.et=new H.ke(t)},
as:function(a,b){return a(b)||b},
kp:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hx:{"^":"e;a,b,c,d,e,f,r,x",u:{
hy:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aG(z)
y=z[0]
x=z[1]
return new H.hx(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
i3:{"^":"e;a,b,c,d,e,f",
V:function(a){var z,y,x
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
u:{
a1:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bx:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dH:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hk:{"^":"K;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+H.d(z)+"' on null"},
u:{
dh:function(a,b){return new H.hk(a,b==null?null:b.method)}}},
fW:{"^":"K;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
u:{
bZ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fW(a,y,z?null:b.receiver)}}},
i5:{"^":"K;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kr:{"^":"k:0;a",
$1:function(a){if(!!J.q(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e5:{"^":"e;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaO:1},
k:{"^":"e;",
k:function(a){return"Closure '"+H.aN(this).trim()+"'"},
gcA:function(){return this},
gcA:function(){return this}},
dv:{"^":"k;"},
hO:{"^":"dv;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bP:{"^":"dv;a,b,c,d",
H:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.aM(this.a)
else y=typeof z!=="object"?J.a4(z):H.aM(z)
return(y^H.aM(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aN(z)+"'")},
u:{
bQ:function(a){return a.a},
cJ:function(a){return a.c},
bg:function(a){var z,y,x,w,v
z=new H.bP("self","target","receiver","name")
y=J.aG(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fj:{"^":"K;a",
k:function(a){return this.a},
u:{
cK:function(a,b){return new H.fj("CastError: "+H.d(P.bU(a))+": type '"+H.jV(a)+"' is not a subtype of type '"+b+"'")}}},
hE:{"^":"K;a",
k:function(a){return"RuntimeError: "+H.d(this.a)},
u:{
hF:function(a){return new H.hE(a)}}},
dM:{"^":"e;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gC:function(a){return J.a4(this.a)},
H:function(a,b){if(b==null)return!1
return b instanceof H.dM&&J.M(this.a,b.a)}},
d7:{"^":"c1;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gP:function(a){return new H.h1(this,[H.G(this,0)])},
au:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bu(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bu(y,b)}else return this.e9(b)},
e9:function(a){var z=this.d
if(z==null)return!1
return this.aW(this.aL(z,J.a4(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ar(z,b)
x=y==null?null:y.gak()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ar(w,b)
x=y==null?null:y.gak()
return x}else return this.ea(b)},
ea:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aL(z,J.a4(a)&0x3ffffff)
x=this.aW(y,a)
if(x<0)return
return y[x].gak()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aO()
this.b=z}this.bo(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aO()
this.c=y}this.bo(y,b,c)}else{x=this.d
if(x==null){x=this.aO()
this.d=x}w=J.a4(b)&0x3ffffff
v=this.aL(x,w)
if(v==null)this.aS(x,w,[this.aF(b,c)])
else{u=this.aW(v,b)
if(u>=0)v[u].sak(c)
else v.push(this.aF(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.N(this))
z=z.c}},
bo:function(a,b,c){var z=this.ar(a,b)
if(z==null)this.aS(a,b,this.aF(b,c))
else z.sak(c)},
bp:function(){this.r=this.r+1&67108863},
aF:function(a,b){var z,y
z=new H.h0(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bp()
return z},
aW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].ge8(),b))return y
return-1},
k:function(a){return P.dc(this)},
ar:function(a,b){return a[b]},
aL:function(a,b){return a[b]},
aS:function(a,b,c){a[b]=c},
dk:function(a,b){delete a[b]},
bu:function(a,b){return this.ar(a,b)!=null},
aO:function(){var z=Object.create(null)
this.aS(z,"<non-identifier-key>",z)
this.dk(z,"<non-identifier-key>")
return z}},
h0:{"^":"e;e8:a<,ak:b@,c,d"},
h1:{"^":"bS;a,$ti",
gi:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.ae(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
B:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.c(P.N(z))
y=y.c}}},
ae:{"^":"e;a,b,c,d,$ti",
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.N(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kc:{"^":"k:0;a",
$1:function(a){return this.a(a)}},
kd:{"^":"k:10;a",
$2:function(a,b){return this.a(a,b)}},
ke:{"^":"k:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
k2:function(a){return J.aG(H.y(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
by:function(a){var z,y,x
if(!!J.q(a).$iso)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aa(b,a))},
hg:{"^":"h;","%":"DataView;ArrayBufferView;c2|e_|e0|dd|e1|e2|af"},
c2:{"^":"hg;",
gi:function(a){return a.length},
$iso:1,
$aso:I.at,
$isp:1,
$asp:I.at},
dd:{"^":"e0;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbj:function(){return[P.al]},
$asl:function(){return[P.al]},
$isi:1,
$asi:function(){return[P.al]},
"%":"Float64Array"},
af:{"^":"e2;",
j:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbj:function(){return[P.J]},
$asl:function(){return[P.J]},
$isi:1,
$asi:function(){return[P.J]}},
hf:{"^":"dd;",$isbV:1,"%":"Float32Array"},
lU:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lV:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
$isfP:1,
"%":"Int32Array"},
lW:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lX:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lY:{"^":"af;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lZ:{"^":"af;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m_:{"^":"af;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e_:{"^":"c2+l;"},
e0:{"^":"e_+bj;"},
e1:{"^":"c2+l;"},
e2:{"^":"e1+bj;"}}],["","",,P,{"^":"",
ic:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jX()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a9(new P.ie(z),1)).observe(y,{childList:true})
return new P.id(z,y,x)}else if(self.setImmediate!=null)return P.jY()
return P.jZ()},
mL:[function(a){self.scheduleImmediate(H.a9(new P.ig(a),0))},"$1","jX",4,0,6],
mM:[function(a){self.setImmediate(H.a9(new P.ih(a),0))},"$1","jY",4,0,6],
mN:[function(a){P.jq(0,a)},"$1","jZ",4,0,6],
jQ:function(a,b){if(H.ek(a,{func:1,args:[P.b3,P.b3]})){b.toString
return a}else{b.toString
return a}},
jP:function(){var z,y
for(;z=$.ar,z!=null;){$.aS=null
y=z.b
$.ar=y
if(y==null)$.aR=null
z.a.$0()}},
mY:[function(){$.cc=!0
try{P.jP()}finally{$.aS=null
$.cc=!1
if($.ar!=null)$.$get$c7().$1(P.ei())}},"$0","ei",0,0,3],
ed:function(a){var z=new P.dQ(a,null)
if($.ar==null){$.aR=z
$.ar=z
if(!$.cc)$.$get$c7().$1(P.ei())}else{$.aR.b=z
$.aR=z}},
jU:function(a){var z,y,x
z=$.ar
if(z==null){P.ed(a)
$.aS=$.aR
return}y=new P.dQ(a,null)
x=$.aS
if(x==null){y.b=z
$.aS=y
$.ar=y}else{y.b=x.b
x.b=y
$.aS=y
if(y.b==null)$.aR=y}},
kn:function(a){var z=$.z
if(C.f===z){P.bA(null,null,C.f,a)
return}z.toString
P.bA(null,null,z,z.bL(a))},
jT:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.W(u)
y=H.am(u)
$.z.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.ay(x)
w=t
v=x.gaa()
c.$2(w,v)}}},
jI:function(a,b,c,d){var z=a.dQ(0)
if(!!J.q(z).$isb2&&z!==$.$get$d0())z.er(new P.jL(b,c,d))
else b.ag(c,d)},
jJ:function(a,b){return new P.jK(a,b)},
ia:function(){return $.z},
bz:function(a,b,c,d,e){var z={}
z.a=d
P.jU(new P.jR(z,e))},
eb:function(a,b,c,d){var z,y
y=$.z
if(y===c)return d.$0()
$.z=c
z=y
try{y=d.$0()
return y}finally{$.z=z}},
ec:function(a,b,c,d,e){var z,y
y=$.z
if(y===c)return d.$1(e)
$.z=c
z=y
try{y=d.$1(e)
return y}finally{$.z=z}},
jS:function(a,b,c,d,e,f){var z,y
y=$.z
if(y===c)return d.$2(e,f)
$.z=c
z=y
try{y=d.$2(e,f)
return y}finally{$.z=z}},
bA:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bL(d):c.dN(d)
P.ed(d)},
ie:{"^":"k:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
id:{"^":"k:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ig:{"^":"k:1;a",
$0:function(){this.a.$0()}},
ih:{"^":"k:1;a",
$0:function(){this.a.$0()}},
jp:{"^":"e;a,b,c",
dg:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a9(new P.jr(this,b),0),a)
else throw H.c(P.r("`setTimeout()` not found."))},
u:{
jq:function(a,b){var z=new P.jp(!0,null,0)
z.dg(a,b)
return z}}},
jr:{"^":"k:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kF:{"^":"e;$ti"},
ik:{"^":"e;$ti"},
jk:{"^":"ik;a,$ti",
dU:function(a,b){var z=this.a
if(z.a!==0)throw H.c(P.c4("Future already completed"))
z.aq(b)}},
dT:{"^":"e;aQ:a<,b,c,d,e,$ti",
gdI:function(){return this.b.b},
gc6:function(){return(this.c&1)!==0},
ge7:function(){return(this.c&2)!==0},
gc5:function(){return this.c===8},
e5:function(a){return this.b.b.b1(this.d,a)},
ec:function(a){if(this.c!==6)return!0
return this.b.b.b1(this.d,J.ay(a))},
e4:function(a){var z,y,x
z=this.e
y=J.f(a)
x=this.b.b
if(H.ek(z,{func:1,args:[P.e,P.aO]}))return x.eh(z,y.gS(a),a.gaa())
else return x.b1(z,y.gS(a))},
e6:function(){return this.b.b.ce(this.d)}},
aj:{"^":"e;bB:a<,b,dw:c<,$ti",
dc:function(a,b){this.a=4
this.c=a},
gdr:function(){return this.a===2},
gaM:function(){return this.a>=4},
cg:function(a,b){var z,y,x
z=$.z
if(z!==C.f){z.toString
if(b!=null)b=P.jQ(b,z)}y=new P.aj(0,z,null,[null])
x=b==null?1:3
this.aG(new P.dT(null,y,x,a,b,[H.G(this,0),null]))
return y},
cf:function(a){return this.cg(a,null)},
er:function(a){var z,y
z=$.z
y=new P.aj(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.G(this,0)
this.aG(new P.dT(null,y,8,a,null,[z,z]))
return y},
aG:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaM()){y.aG(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bA(null,null,z,new P.iA(this,a))}},
by:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaQ()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaM()){v.by(a)
return}this.a=v.a
this.c=v.c}z.a=this.aR(a)
y=this.b
y.toString
P.bA(null,null,y,new P.iF(z,this))}},
as:function(){var z=this.c
this.c=null
return this.aR(z)},
aR:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaQ()
z.a=y}return y},
aq:function(a){var z,y,x
z=this.$ti
y=H.cf(a,"$isb2",z,"$asb2")
if(y){z=H.cf(a,"$isaj",z,null)
if(z)P.dU(a,this)
else P.iB(a,this)}else{x=this.as()
this.a=4
this.c=a
P.aQ(this,x)}},
ag:[function(a,b){var z=this.as()
this.a=8
this.c=new P.bf(a,b)
P.aQ(this,z)},function(a){return this.ag(a,null)},"ew","$2","$1","gbt",4,2,13],
$isb2:1,
u:{
iB:function(a,b){var z,y,x
b.a=1
try{a.cg(new P.iC(b),new P.iD(b))}catch(x){z=H.W(x)
y=H.am(x)
P.kn(new P.iE(b,z,y))}},
dU:function(a,b){var z
for(;a.gdr();)a=a.c
if(a.gaM()){z=b.as()
b.a=a.a
b.c=a.c
P.aQ(b,z)}else{z=b.c
b.a=2
b.c=a
a.by(z)}},
aQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.ay(v)
t=v.gaa()
y.toString
P.bz(null,null,y,u,t)}return}for(;b.gaQ()!=null;b=s){s=b.a
b.a=null
P.aQ(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc6()||b.gc5()){q=b.gdI()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.ay(v)
t=v.gaa()
y.toString
P.bz(null,null,y,u,t)
return}p=$.z
if(p==null?q!=null:p!==q)$.z=q
else p=null
if(b.gc5())new P.iI(z,x,b,w).$0()
else if(y){if(b.gc6())new P.iH(x,b,r).$0()}else if(b.ge7())new P.iG(z,x,b).$0()
if(p!=null)$.z=p
y=x.b
if(!!J.q(y).$isb2){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aR(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dU(y,o)
return}}o=b.b
b=o.as()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iA:{"^":"k:1;a,b",
$0:function(){P.aQ(this.a,this.b)}},
iF:{"^":"k:1;a,b",
$0:function(){P.aQ(this.b,this.a.a)}},
iC:{"^":"k:0;a",
$1:function(a){var z=this.a
z.a=0
z.aq(a)}},
iD:{"^":"k:14;a",
$2:function(a,b){this.a.ag(a,b)},
$1:function(a){return this.$2(a,null)}},
iE:{"^":"k:1;a,b,c",
$0:function(){this.a.ag(this.b,this.c)}},
iI:{"^":"k:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e6()}catch(w){y=H.W(w)
x=H.am(w)
if(this.d){v=J.ay(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bf(y,x)
u.a=!0
return}if(!!J.q(z).$isb2){if(z instanceof P.aj&&z.gbB()>=4){if(z.gbB()===8){v=this.b
v.b=z.gdw()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.cf(new P.iJ(t))
v.a=!1}}},
iJ:{"^":"k:0;a",
$1:function(a){return this.a}},
iH:{"^":"k:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e5(this.c)}catch(x){z=H.W(x)
y=H.am(x)
w=this.a
w.b=new P.bf(z,y)
w.a=!0}}},
iG:{"^":"k:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ec(z)===!0&&w.e!=null){v=this.b
v.b=w.e4(z)
v.a=!1}}catch(u){y=H.W(u)
x=H.am(u)
w=this.a
v=J.ay(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bf(y,x)
s.a=!0}}},
dQ:{"^":"e;a,b"},
ds:{"^":"e;$ti",
B:function(a,b){var z,y
z={}
y=new P.aj(0,$.z,null,[null])
z.a=null
z.a=this.c9(new P.hV(z,this,b,y),!0,new P.hW(y),y.gbt())
return y},
gi:function(a){var z,y
z={}
y=new P.aj(0,$.z,null,[P.J])
z.a=0
this.c9(new P.hX(z),!0,new P.hY(z,y),y.gbt())
return y}},
hV:{"^":"k;a,b,c,d",
$1:function(a){P.jT(new P.hT(this.c,a),new P.hU(),P.jJ(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.ci(this.b,"ds",0)]}}},
hT:{"^":"k:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hU:{"^":"k:0;",
$1:function(a){}},
hW:{"^":"k:1;a",
$0:function(){this.a.aq(null)}},
hX:{"^":"k:0;a",
$1:function(a){++this.a.a}},
hY:{"^":"k:1;a,b",
$0:function(){this.b.aq(this.a.a)}},
hS:{"^":"e;$ti"},
jL:{"^":"k:1;a,b,c",
$0:function(){return this.a.ag(this.b,this.c)}},
jK:{"^":"k:15;a,b",
$2:function(a,b){P.jI(this.a,this.b,a,b)}},
bf:{"^":"e;S:a>,aa:b<",
k:function(a){return H.d(this.a)},
$isK:1},
jx:{"^":"e;"},
jR:{"^":"k:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.di()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=J.az(y)
throw x}},
j3:{"^":"jx;",
ei:function(a){var z,y,x
try{if(C.f===$.z){a.$0()
return}P.eb(null,null,this,a)}catch(x){z=H.W(x)
y=H.am(x)
P.bz(null,null,this,z,y)}},
ej:function(a,b){var z,y,x
try{if(C.f===$.z){a.$1(b)
return}P.ec(null,null,this,a,b)}catch(x){z=H.W(x)
y=H.am(x)
P.bz(null,null,this,z,y)}},
dN:function(a){return new P.j5(this,a)},
bL:function(a){return new P.j4(this,a)},
dO:function(a){return new P.j6(this,a)},
h:function(a,b){return},
ce:function(a){if($.z===C.f)return a.$0()
return P.eb(null,null,this,a)},
b1:function(a,b){if($.z===C.f)return a.$1(b)
return P.ec(null,null,this,a,b)},
eh:function(a,b,c){if($.z===C.f)return a.$2(b,c)
return P.jS(null,null,this,a,b,c)}},
j5:{"^":"k:1;a,b",
$0:function(){return this.a.ce(this.b)}},
j4:{"^":"k:1;a,b",
$0:function(){return this.a.ei(this.b)}},
j6:{"^":"k:0;a,b",
$1:function(a){return this.a.ej(this.b,a)}}}],["","",,P,{"^":"",
I:function(){return new H.d7(0,null,null,null,null,null,0,[null,null])},
d9:function(a){return H.k3(a,new H.d7(0,null,null,null,null,null,0,[null,null]))},
X:function(a,b,c,d){return new P.iR(0,null,null,null,null,null,0,[d])},
fQ:function(a,b,c){var z,y
if(P.cd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aT()
y.push(a)
try{P.jO(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.dt(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bW:function(a,b,c){var z,y,x
if(P.cd(a))return b+"..."+c
z=new P.c5(b)
y=$.$get$aT()
y.push(a)
try{x=z
x.a=P.dt(x.gac(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.gac()+c
y=z.gac()
return y.charCodeAt(0)==0?y:y},
cd:function(a){var z,y
for(z=0;y=$.$get$aT(),z<y.length;++z)if(a===y[z])return!0
return!1},
jO:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.d(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.v()){if(x<=4){b.push(H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.v();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
c_:function(a,b){var z,y
z=P.X(null,null,null,b)
for(y=J.b_(a);y.v();)z.G(0,y.gD(y))
return z},
dc:function(a){var z,y,x
z={}
if(P.cd(a))return"{...}"
y=new P.c5("")
try{$.$get$aT().push(a)
x=y
x.a=x.gac()+"{"
z.a=!0
J.ct(a,new P.h2(z,y))
z=y
z.a=z.gac()+"}"}finally{z=$.$get$aT()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gac()
return z.charCodeAt(0)==0?z:z},
iR:{"^":"iL;a,b,c,d,e,f,r,$ti",
gN:function(a){var z=new P.ca(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dj(b)},
dj:function(a){var z=this.d
if(z==null)return!1
return this.aK(z[this.aH(a)],a)>=0},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.c(P.N(this))
z=z.b}},
G:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cb()
this.b=z}return this.bq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cb()
this.c=y}return this.bq(y,b)}else return this.dh(0,b)},
dh:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cb()
this.d=z}y=this.aH(b)
x=z[y]
if(x==null)z[y]=[this.aP(b)]
else{if(this.aK(x,b)>=0)return!1
x.push(this.aP(b))}return!0},
cd:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bz(this.c,b)
else return this.dt(0,b)},
dt:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aH(b)]
x=this.aK(y,b)
if(x<0)return!1
this.bD(y.splice(x,1)[0])
return!0},
aj:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aN()}},
bq:function(a,b){if(a[b]!=null)return!1
a[b]=this.aP(b)
return!0},
bz:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bD(z)
delete a[b]
return!0},
aN:function(){this.r=this.r+1&67108863},
aP:function(a){var z,y
z=new P.iS(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aN()
return z},
bD:function(a){var z,y
z=a.gds()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aN()},
aH:function(a){return J.a4(a)&0x3ffffff},
aK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].gdl(),b))return y
return-1},
u:{
cb:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iS:{"^":"e;dl:a<,b,ds:c<"},
ca:{"^":"e;a,b,c,d,$ti",
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.N(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iL:{"^":"hG;$ti"},
lG:{"^":"e;$ti"},
da:{"^":"dZ;$ti",$isi:1},
l:{"^":"e;$ti",
gN:function(a){return new H.db(a,this.gi(a),0,null,[H.bb(this,a,"l",0)])},
w:function(a,b){return this.h(a,b)},
B:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.c(P.N(a))}},
e3:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.c(P.N(a))}return y},
bc:function(a,b){return H.du(a,b,null,H.bb(this,a,"l",0))},
l:function(a,b){var z,y,x
z=H.y([],[H.bb(this,a,"l",0)])
y=this.gi(a)
x=C.c.gi(b)
if(typeof y!=="number")return y.l()
C.b.si(z,C.c.l(y,x))
C.b.an(z,0,this.gi(a),a)
C.b.an(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bW(a,"[","]")}},
c1:{"^":"T;$ti"},
h2:{"^":"k:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
T:{"^":"e;$ti",
B:function(a,b){var z,y
for(z=J.b_(this.gP(a));z.v();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a5(this.gP(a))},
k:function(a){return P.dc(a)}},
hH:{"^":"e;$ti",
O:function(a,b){var z
for(z=J.b_(b);z.v();)this.G(0,z.gD(z))},
k:function(a){return P.bW(this,"{","}")},
B:function(a,b){var z
for(z=new P.ca(this,this.r,null,null,[null]),z.c=this.e;z.v();)b.$1(z.d)}},
hG:{"^":"hH;$ti"},
dZ:{"^":"e+l;$ti"}}],["","",,P,{"^":"",
fH:function(a){var z=J.q(a)
if(!!z.$isk)return z.k(a)
return"Instance of '"+H.aN(a)+"'"},
bU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.az(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fH(a)},
cX:function(a){return new P.ix(a)},
an:function(a){H.bF(H.d(a))},
ce:{"^":"e;"},
"+bool":0,
cO:{"^":"e;dH:a<,b",
H:function(a,b){if(b==null)return!1
if(!(b instanceof P.cO))return!1
return this.a===b.a&&this.b===b.b},
a_:function(a,b){return C.c.a_(this.a,b.gdH())},
gC:function(a){var z=this.a
return(z^C.c.bA(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fv(H.hv(this))
y=P.b0(H.ht(this))
x=P.b0(H.hp(this))
w=P.b0(H.hq(this))
v=P.b0(H.hs(this))
u=P.b0(H.hu(this))
t=P.fw(H.hr(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
u:{
fv:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b0:function(a){if(a>=10)return""+a
return"0"+a}}},
al:{"^":"aV;"},
"+double":0,
b1:{"^":"e;ah:a<",
l:function(a,b){return new P.b1(C.c.l(this.a,b.gah()))},
J:function(a,b){return new P.b1(this.a-b.gah())},
a8:function(a,b){return C.c.a8(this.a,b.gah())},
am:function(a,b){return C.c.am(this.a,b.gah())},
H:function(a,b){if(b==null)return!1
if(!(b instanceof P.b1))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
a_:function(a,b){return C.c.a_(this.a,b.gah())},
k:function(a){var z,y,x,w,v
z=new P.fE()
y=this.a
if(y<0)return"-"+new P.b1(0-y).k(0)
x=z.$1(C.c.ad(y,6e7)%60)
w=z.$1(C.c.ad(y,1e6)%60)
v=new P.fD().$1(y%1e6)
return""+C.c.ad(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
u:{
fC:function(a,b,c,d,e,f){return new P.b1(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fD:{"^":"k:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fE:{"^":"k:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"e;",
gaa:function(){return H.am(this.$thrownJsError)}},
di:{"^":"K;",
k:function(a){return"Throw of null."}},
ac:{"^":"K;a,b,c,d",
gaJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gaJ()+y+x
if(!this.a)return w
v=this.gaI()
u=P.bU(this.b)
return w+v+": "+H.d(u)},
u:{
cG:function(a,b,c){return new P.ac(!0,a,b,c)},
fd:function(a){return new P.ac(!1,null,a,"Must not be null")}}},
dk:{"^":"ac;e,f,a,b,c,d",
gaJ:function(){return"RangeError"},
gaI:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
u:{
bp:function(a,b,c){return new P.dk(null,null,!0,a,b,"Value not in range")},
aq:function(a,b,c,d,e){return new P.dk(b,c,!0,a,d,"Invalid value")},
hw:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
z=a>c}else z=!0
if(z)throw H.c(P.aq(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
z=b>c}else z=!0
if(z)throw H.c(P.aq(b,a,c,"end",f))
return b}return c}}},
fO:{"^":"ac;e,i:f>,a,b,c,d",
gaJ:function(){return"RangeError"},
gaI:function(){if(J.aX(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
u:{
A:function(a,b,c,d,e){var z=e!=null?e:J.a5(b)
return new P.fO(b,z,!0,a,c,"Index out of range")}}},
i6:{"^":"K;a",
k:function(a){return"Unsupported operation: "+this.a},
u:{
r:function(a){return new P.i6(a)}}},
i4:{"^":"K;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.d(z):"UnimplementedError"},
u:{
dO:function(a){return new P.i4(a)}}},
bs:{"^":"K;a",
k:function(a){return"Bad state: "+this.a},
u:{
c4:function(a){return new P.bs(a)}}},
fp:{"^":"K;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bU(z))+"."},
u:{
N:function(a){return new P.fp(a)}}},
dq:{"^":"e;",
k:function(a){return"Stack Overflow"},
gaa:function(){return},
$isK:1},
ft:{"^":"K;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.d(z)+"' during its initialization"}},
l2:{"^":"e;"},
ix:{"^":"e;a",
k:function(a){return"Exception: "+this.a}},
J:{"^":"aV;"},
"+int":0,
bl:{"^":"e;$ti",
b2:["cM",function(a,b){return new H.dP(this,b,[H.ci(this,"bl",0)])}],
B:function(a,b){var z
for(z=this.gN(this);z.v();)b.$1(z.gD(z))},
gi:function(a){var z,y
z=this.gN(this)
for(y=0;z.v();)++y
return y},
ga9:function(a){var z,y
z=this.gN(this)
if(!z.v())throw H.c(H.d4())
y=z.gD(z)
if(z.v())throw H.c(H.fS())
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.fd("index"))
if(b<0)H.R(P.aq(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.v();){x=z.gD(z)
if(b===y)return x;++y}throw H.c(P.A(b,this,"index",null,y))},
k:function(a){return P.fQ(this,"(",")")}},
fT:{"^":"e;$ti"},
i:{"^":"e;$ti"},
"+List":0,
c0:{"^":"e;$ti"},
b3:{"^":"e;",
gC:function(a){return P.e.prototype.gC.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aV:{"^":"e;"},
"+num":0,
e:{"^":";",
H:function(a,b){return this===b},
gC:function(a){return H.aM(this)},
k:function(a){return"Instance of '"+H.aN(this)+"'"},
toString:function(){return this.k(this)}},
aO:{"^":"e;"},
n:{"^":"e;"},
"+String":0,
c5:{"^":"e;ac:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
u:{
dt:function(a,b,c){var z=J.b_(b)
if(!z.v())return a
if(c.length===0){do a+=H.d(z.gD(z))
while(z.v())}else{a+=H.d(z.gD(z))
for(;z.v();)a=a+c+H.d(z.gD(z))}return a}}}}],["","",,W,{"^":"",
k1:function(){return document},
fF:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).a0(z,a,b,c)
y.toString
z=new H.dP(new W.U(y),new W.fG(),[W.t])
return z.ga9(z)},
cW:function(a){return"wheel"},
aB:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eU(a)
if(typeof y==="string")z=a.tagName}catch(x){H.W(x)}return z},
iu:function(a,b){return document.createElement(a)},
ak:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ea:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.io(a)
if(!!J.q(z).$isE)return z
return}else return a},
ee:function(a){var z=$.z
if(z===C.f)return a
return z.dO(a)},
v:{"^":"ao;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ks:{"^":"c3;m:x=,n:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
kt:{"^":"h;i:length=","%":"AccessibleNodeList"},
ku:{"^":"v;av:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kv:{"^":"v;av:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kA:{"^":"v;av:href}","%":"HTMLBaseElement"},
fh:{"^":"h;","%":"Response;Body"},
bO:{"^":"v;",$isbO:1,"%":"HTMLBodyElement"},
kB:{"^":"v;M:name=","%":"HTMLButtonElement"},
kC:{"^":"v;K:height},L:width}",
cB:function(a,b,c){var z=a.getContext(b,P.k_(c,null))
return z},
"%":"HTMLCanvasElement"},
kD:{"^":"h;",
aB:function(a){return P.V(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kE:{"^":"t;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kG:{"^":"a0;a5:style=","%":"CSSFontFaceRule"},
kH:{"^":"a0;a5:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kI:{"^":"a0;a5:style=","%":"CSSPageRule"},
kJ:{"^":"bh;i:length=","%":"CSSPerspective"},
kK:{"^":"bR;m:x=,n:y=","%":"CSSPositionValue"},
kL:{"^":"bh;m:x=,n:y=,F:z=","%":"CSSRotation"},
a0:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kM:{"^":"bh;m:x=,n:y=,F:z=","%":"CSSScale"},
fq:{"^":"il;i:length=",
br:function(a,b){var z,y
z=$.$get$cM()
y=z[b]
if(typeof y==="string")return y
y=this.dE(a,b)
z[b]=y
return y},
dE:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fx()+b
if(z in a)return z
return b},
dB:function(a,b,c,d){a.setProperty(b,c,d)},
sK:function(a,b){a.height=b},
sL:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fr:{"^":"e;",
se2:function(a,b){this.dB(a,this.br(a,"float"),b,"")}},
kN:{"^":"a0;a5:style=","%":"CSSStyleRule"},
bR:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bh:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kO:{"^":"bR;i:length=","%":"CSSTransformValue"},
kP:{"^":"bh;m:x=,n:y=,F:z=","%":"CSSTranslation"},
kQ:{"^":"bR;i:length=","%":"CSSUnparsedValue"},
kR:{"^":"a0;a5:style=","%":"CSSViewportRule"},
kS:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kT:{"^":"h;m:x=,n:y=,F:z=","%":"DeviceAcceleration"},
fy:{"^":"v;","%":"HTMLDivElement"},
kU:{"^":"t;",
gaX:function(a){return new W.b8(a,"mousedown",!1,[W.P])},
gaY:function(a){return new W.b8(a,"mousemove",!1,[W.P])},
gaZ:function(a){return new W.b8(a,"mouseup",!1,[W.P])},
gb_:function(a){return new W.b8(a,W.cW(a),!1,[W.aP])},
"%":"Document|HTMLDocument|XMLDocument"},
kV:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
kW:{"^":"fz;",
gZ:function(a){return a.a},
gU:function(a){return a.b},
ga2:function(a){return a.c},
"%":"DOMMatrix"},
fz:{"^":"h;",
gZ:function(a){return a.a},
gU:function(a){return a.b},
ga2:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
kX:{"^":"fA;",
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
fA:{"^":"h;",
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
kY:{"^":"iq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.a7]},
$isp:1,
$asp:function(){return[P.a7]},
$asl:function(){return[P.a7]},
$isi:1,
$asi:function(){return[P.a7]},
$asm:function(){return[P.a7]},
"%":"ClientRectList|DOMRectList"},
fB:{"^":"h;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gL(a))+" x "+H.d(this.gK(a))},
H:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa7)return!1
return a.left===z.gc7(b)&&a.top===z.gci(b)&&this.gL(a)===z.gL(b)&&this.gK(a)===z.gK(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gL(a)
w=this.gK(a)
return W.dY(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcj:function(a){return new P.ag(a.left,a.top,[null])},
gK:function(a){return a.height},
gc7:function(a){return a.left},
gci:function(a){return a.top},
gL:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa7:1,
$asa7:I.at,
"%":";DOMRectReadOnly"},
kZ:{"^":"is;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.n]},
$isp:1,
$asp:function(){return[P.n]},
$asl:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asm:function(){return[P.n]},
"%":"DOMStringList"},
l_:{"^":"h;i:length=","%":"DOMTokenList"},
ao:{"^":"t;a5:style=,bx:namespaceURI=,ek:tagName=",
gdL:function(a){return new W.it(a)},
k:function(a){return a.localName},
a0:["aD",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cV
if(z==null){z=H.y([],[W.de])
y=new W.df(z)
z.push(W.dV(null))
z.push(W.e6())
$.cV=y
d=y}else d=z
z=$.cU
if(z==null){z=new W.e9(d)
$.cU=z
c=z}else{z.a=d
c=z}}if($.a6==null){z=document
y=z.implementation.createHTMLDocument("")
$.a6=y
$.bT=y.createRange()
y=$.a6
y.toString
x=y.createElement("base")
J.f2(x,z.baseURI)
$.a6.head.appendChild(x)}z=$.a6
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a6
if(!!this.$isbO)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a6.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.A(C.M,a.tagName)){$.bT.selectNodeContents(w)
v=$.bT.createContextualFragment(b)}else{w.innerHTML=b
v=$.a6.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a6.body
if(w==null?z!=null:w!==z)J.cz(w)
c.ba(v)
document.adoptNode(v)
return v},function(a,b,c){return this.a0(a,b,c,null)},"dX",null,null,"gex",5,5,null],
cE:function(a,b,c,d){a.textContent=null
a.appendChild(this.a0(a,b,c,d))},
cD:function(a,b){return this.cE(a,b,null,null)},
b3:function(a){return a.getBoundingClientRect()},
gaX:function(a){return new W.ah(a,"mousedown",!1,[W.P])},
gaY:function(a){return new W.ah(a,"mousemove",!1,[W.P])},
gaZ:function(a){return new W.ah(a,"mouseup",!1,[W.P])},
gb_:function(a){return new W.ah(a,W.cW(a),!1,[W.aP])},
$isao:1,
"%":";Element"},
fG:{"^":"k:0;",
$1:function(a){return!!J.q(a).$isao}},
l0:{"^":"v;K:height},M:name=,L:width}","%":"HTMLEmbedElement"},
l1:{"^":"ad;S:error=","%":"ErrorEvent"},
ad:{"^":"h;",
az:function(a){return a.preventDefault()},
$isad:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
E:{"^":"h;",
bH:["cK",function(a,b,c,d){if(c!=null)this.di(a,b,c,!1)}],
di:function(a,b,c,d){return a.addEventListener(b,H.a9(c,1),!1)},
du:function(a,b,c,d){return a.removeEventListener(b,H.a9(c,1),!1)},
$isE:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e3|e4|e7|e8"},
ll:{"^":"v;M:name=","%":"HTMLFieldSetElement"},
lm:{"^":"iz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bi]},
$isp:1,
$asp:function(){return[W.bi]},
$asl:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$asm:function(){return[W.bi]},
"%":"FileList"},
ln:{"^":"E;S:error=","%":"FileReader"},
lo:{"^":"E;S:error=,i:length=","%":"FileWriter"},
lq:{"^":"h;a5:style=","%":"FontFace"},
lr:{"^":"E;",
ey:function(a,b,c){return a.forEach(H.a9(b,3),c)},
B:function(a,b){b=H.a9(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lt:{"^":"v;i:length=,M:name=","%":"HTMLFormElement"},
lv:{"^":"c3;m:x=,n:y=,F:z=","%":"Gyroscope"},
lw:{"^":"h;i:length=","%":"History"},
lx:{"^":"iN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asl:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ly:{"^":"v;K:height},M:name=,L:width}","%":"HTMLIFrameElement"},
lz:{"^":"v;K:height},L:width}","%":"HTMLImageElement"},
d3:{"^":"v;K:height},M:name=,L:width}",$isd3:1,"%":"HTMLInputElement"},
bm:{"^":"dN;",
ges:function(a){return a.which},
$isbm:1,
"%":"KeyboardEvent"},
lF:{"^":"v;av:href}","%":"HTMLLinkElement"},
lH:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
lI:{"^":"c3;m:x=,n:y=,F:z=","%":"Magnetometer"},
lJ:{"^":"v;M:name=","%":"HTMLMapElement"},
h5:{"^":"v;S:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lM:{"^":"h;i:length=","%":"MediaList"},
lN:{"^":"E;",
R:function(a){return a.clone()},
"%":"MediaStream"},
lO:{"^":"E;aV:enabled=",
R:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
lP:{"^":"E;",
bH:function(a,b,c,d){if(J.M(b,"message"))a.start()
this.cK(a,b,c,!1)},
"%":"MessagePort"},
lQ:{"^":"v;M:name=","%":"HTMLMetaElement"},
lR:{"^":"iT;",
h:function(a,b){return P.V(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gP:function(a){var z=H.y([],[P.n])
this.B(a,new W.h7(z))
return z},
gi:function(a){return a.size},
$asT:function(){return[P.n,null]},
"%":"MIDIInputMap"},
h7:{"^":"k:2;a",
$2:function(a,b){return this.a.push(a)}},
lS:{"^":"iU;",
h:function(a,b){return P.V(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gP:function(a){var z=H.y([],[P.n])
this.B(a,new W.h8(z))
return z},
gi:function(a){return a.size},
$asT:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
h8:{"^":"k:2;a",
$2:function(a,b){return this.a.push(a)}},
lT:{"^":"iW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bo]},
$isp:1,
$asp:function(){return[W.bo]},
$asl:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$asm:function(){return[W.bo]},
"%":"MimeTypeArray"},
P:{"^":"dN;bR:button=",
gcc:function(a){var z,y,x
if(!!a.offsetX)return new P.ag(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.q(W.ea(z)).$isao)throw H.c(P.r("offsetX is only supported on elements"))
y=W.ea(z)
z=[null]
x=new P.ag(a.clientX,a.clientY,z).J(0,J.eV(J.eX(y)))
return new P.ag(J.cA(x.a),J.cA(x.b),z)}},
$isP:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
U:{"^":"da;a",
ga9:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.c4("No elements"))
if(y>1)throw H.c(P.c4("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=J.q(b)
if(!!z.$isU){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gN(b),y=this.a;z.v();)y.appendChild(z.gD(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.a(y,b)
z.replaceChild(c,y[b])},
gN:function(a){var z=this.a.childNodes
return new W.cZ(z,z.length,-1,null,[H.bb(C.P,z,"m",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
$asda:function(){return[W.t]},
$asl:function(){return[W.t]},
$asi:function(){return[W.t]},
$asdZ:function(){return[W.t]}},
t:{"^":"E;ay:parentNode=,b0:previousSibling=",
gcb:function(a){return new W.U(a)},
ee:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cL(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
m0:{"^":"h;",
ed:[function(a){return a.previousNode()},"$0","gb0",1,0,4],
"%":"NodeIterator"},
hh:{"^":"iY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asl:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
m3:{"^":"v;K:height},M:name=,L:width}","%":"HTMLObjectElement"},
m5:{"^":"v;M:name=","%":"HTMLOutputElement"},
m6:{"^":"v;M:name=","%":"HTMLParamElement"},
b4:{"^":"h;i:length=","%":"Plugin"},
m8:{"^":"j1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b4]},
$isp:1,
$asp:function(){return[W.b4]},
$asl:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$asm:function(){return[W.b4]},
"%":"PluginArray"},
mb:{"^":"h;",
b3:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mh:{"^":"j7;",
h:function(a,b){return P.V(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gP:function(a){var z=H.y([],[P.n])
this.B(a,new W.hD(z))
return z},
gi:function(a){return a.size},
$asT:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hD:{"^":"k:2;a",
$2:function(a,b){return this.a.push(a)}},
mi:{"^":"v;i:length=,M:name=","%":"HTMLSelectElement"},
c3:{"^":"E;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mj:{"^":"ad;S:error=","%":"SensorErrorEvent"},
mk:{"^":"v;M:name=","%":"HTMLSlotElement"},
ml:{"^":"e4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bq]},
$isp:1,
$asp:function(){return[W.bq]},
$asl:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$asm:function(){return[W.bq]},
"%":"SourceBufferList"},
mm:{"^":"jd;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.br]},
$isp:1,
$asp:function(){return[W.br]},
$asl:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$asm:function(){return[W.br]},
"%":"SpeechGrammarList"},
mn:{"^":"ad;S:error=","%":"SpeechRecognitionError"},
b6:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
mp:{"^":"jg;",
h:function(a,b){return a.getItem(b)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gP:function(a){var z=H.y([],[P.n])
this.B(a,new W.hR(z))
return z},
gi:function(a){return a.length},
$asT:function(){return[P.n,P.n]},
"%":"Storage"},
hR:{"^":"k:2;a",
$2:function(a,b){return this.a.push(a)}},
i_:{"^":"v;",
a0:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
z=W.fF("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.U(y).O(0,J.eS(z))
return y},
"%":"HTMLTableElement"},
ms:{"^":"v;",
a0:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.a0(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.ga9(z)
x.toString
z=new W.U(x)
w=z.ga9(z)
y.toString
w.toString
new W.U(y).O(0,new W.U(w))
return y},
"%":"HTMLTableRowElement"},
mt:{"^":"v;",
a0:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.a0(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.ga9(z)
y.toString
x.toString
new W.U(y).O(0,new W.U(x))
return y},
"%":"HTMLTableSectionElement"},
dw:{"^":"v;",$isdw:1,"%":"HTMLTemplateElement"},
mu:{"^":"v;M:name=","%":"HTMLTextAreaElement"},
mw:{"^":"jo;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bv]},
$isp:1,
$asp:function(){return[W.bv]},
$asl:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$asm:function(){return[W.bv]},
"%":"TextTrackCueList"},
mx:{"^":"e8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bu]},
$isp:1,
$asp:function(){return[W.bu]},
$asl:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$asm:function(){return[W.bu]},
"%":"TextTrackList"},
my:{"^":"h;i:length=","%":"TimeRanges"},
mz:{"^":"jt;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bw]},
$isp:1,
$asp:function(){return[W.bw]},
$asl:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$asm:function(){return[W.bw]},
"%":"TouchList"},
mA:{"^":"h;i:length=","%":"TrackDefaultList"},
mD:{"^":"h;",
ez:[function(a){return a.parentNode()},"$0","gay",1,0,4],
ed:[function(a){return a.previousNode()},"$0","gb0",1,0,4],
"%":"TreeWalker"},
dN:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mF:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mH:{"^":"h;m:x=,F:z=","%":"VRStageBoundsPoint"},
mI:{"^":"h5;K:height},L:width}","%":"HTMLVideoElement"},
mJ:{"^":"E;i:length=","%":"VideoTrackList"},
aP:{"^":"P;",
gdZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
$isaP:1,
"%":"WheelEvent"},
i8:{"^":"E;",
gdK:function(a){var z,y
z=P.aV
y=new P.aj(0,$.z,null,[z])
this.dn(a)
this.dv(a,W.ee(new W.i9(new P.jk(y,[z]))))
return y},
dv:function(a,b){return a.requestAnimationFrame(H.a9(b,1))},
dn:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
i9:{"^":"k:0;a",
$1:function(a){this.a.dU(0,a)}},
mK:{"^":"E;"},
mO:{"^":"t;M:name=,bx:namespaceURI=","%":"Attr"},
mP:{"^":"jz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a0]},
$isp:1,
$asp:function(){return[W.a0]},
$asl:function(){return[W.a0]},
$isi:1,
$asi:function(){return[W.a0]},
$asm:function(){return[W.a0]},
"%":"CSSRuleList"},
mQ:{"^":"fB;",
k:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
H:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa7)return!1
return a.left===z.gc7(b)&&a.top===z.gci(b)&&a.width===z.gL(b)&&a.height===z.gK(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dY(W.ak(W.ak(W.ak(W.ak(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcj:function(a){return new P.ag(a.left,a.top,[null])},
gK:function(a){return a.height},
gL:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mR:{"^":"jB;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bk]},
$isp:1,
$asp:function(){return[W.bk]},
$asl:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$asm:function(){return[W.bk]},
"%":"GamepadList"},
mU:{"^":"jD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$asl:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mV:{"^":"fh;",
R:function(a){return a.clone()},
"%":"Request"},
mW:{"^":"jF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b6]},
$isp:1,
$asp:function(){return[W.b6]},
$asl:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$asm:function(){return[W.b6]},
"%":"SpeechRecognitionResultList"},
mX:{"^":"jH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bt]},
$isp:1,
$asp:function(){return[W.bt]},
$asl:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$asm:function(){return[W.bt]},
"%":"StyleSheetList"},
ii:{"^":"c1;dq:a<",
B:function(a,b){var z,y,x,w,v
for(z=this.gP(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gP:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.y([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=z[w]
u=J.f(v)
if(u.gbx(v)==null)y.push(u.gM(v))}return y},
$asc1:function(){return[P.n,P.n]},
$asT:function(){return[P.n,P.n]}},
it:{"^":"ii;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gP(this).length}},
b8:{"^":"ds;a,b,c,$ti",
c9:function(a,b,c,d){return W.ai(this.a,this.b,a,!1,H.G(this,0))}},
ah:{"^":"b8;a,b,c,$ti"},
iv:{"^":"hS;a,b,c,d,e,$ti",
da:function(a,b,c,d,e){this.dF()},
dQ:function(a){if(this.b==null)return
this.dG()
this.b=null
this.d=null
return},
dF:function(){var z=this.d
if(z!=null&&this.a<=0)J.eA(this.b,this.c,z,!1)},
dG:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.ez(x,this.c,z,!1)}},
u:{
ai:function(a,b,c,d,e){var z=c==null?null:W.ee(new W.iw(c))
z=new W.iv(0,a,b,z,!1,[e])
z.da(a,b,c,!1,e)
return z}}},
iw:{"^":"k:0;a",
$1:function(a){return this.a.$1(a)}},
c8:{"^":"e;ct:a<",
dd:function(a){var z,y
z=$.$get$c9()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.L[y],W.k9())
for(y=0;y<12;++y)z.j(0,C.p[y],W.ka())}},
ae:function(a){return $.$get$dW().A(0,W.aB(a))},
a7:function(a,b,c){var z,y,x
z=W.aB(a)
y=$.$get$c9()
x=y.h(0,H.d(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
u:{
dV:function(a){var z,y
z=document.createElement("a")
y=new W.j8(z,window.location)
y=new W.c8(y)
y.dd(a)
return y},
mS:[function(a,b,c,d){return!0},"$4","k9",16,0,9],
mT:[function(a,b,c,d){var z,y,x,w,v
z=d.gct()
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ka",16,0,9]}},
m:{"^":"e;$ti",
gN:function(a){return new W.cZ(a,this.gi(a),-1,null,[H.bb(this,a,"m",0)])}},
df:{"^":"e;a",
ae:function(a){return C.b.bI(this.a,new W.hj(a))},
a7:function(a,b,c){return C.b.bI(this.a,new W.hi(a,b,c))}},
hj:{"^":"k:0;a",
$1:function(a){return a.ae(this.a)}},
hi:{"^":"k:0;a,b,c",
$1:function(a){return a.a7(this.a,this.b,this.c)}},
j9:{"^":"e;ct:d<",
df:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.b2(0,new W.ja())
y=b.b2(0,new W.jb())
this.b.O(0,z)
x=this.c
x.O(0,C.N)
x.O(0,y)},
ae:function(a){return this.a.A(0,W.aB(a))},
a7:["cO",function(a,b,c){var z,y
z=W.aB(a)
y=this.c
if(y.A(0,H.d(z)+"::"+b))return this.d.dJ(c)
else if(y.A(0,"*::"+b))return this.d.dJ(c)
else{y=this.b
if(y.A(0,H.d(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.d(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}]},
ja:{"^":"k:0;",
$1:function(a){return!C.b.A(C.p,a)}},
jb:{"^":"k:0;",
$1:function(a){return C.b.A(C.p,a)}},
jl:{"^":"j9;e,a,b,c,d",
a7:function(a,b,c){if(this.cO(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cu(a).a.getAttribute("template")==="")return this.e.A(0,b)
return!1},
u:{
e6:function(){var z=P.n
z=new W.jl(P.c_(C.o,z),P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z),null)
z.df(null,new H.h3(C.o,new W.jm(),[H.G(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jm:{"^":"k:0;",
$1:function(a){return"TEMPLATE::"+H.d(a)}},
jj:{"^":"e;",
ae:function(a){var z=J.q(a)
if(!!z.$isdm)return!1
z=!!z.$isB
if(z&&W.aB(a)==="foreignObject")return!1
if(z)return!0
return!1},
a7:function(a,b,c){if(b==="is"||C.i.cH(b,"on"))return!1
return this.ae(a)}},
cZ:{"^":"e;a,b,c,d,$ti",
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aY(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
im:{"^":"e;a",$isE:1,u:{
io:function(a){if(a===window)return a
else return new W.im(a)}}},
de:{"^":"e;"},
m1:{"^":"e;"},
mE:{"^":"e;"},
j8:{"^":"e;a,b"},
e9:{"^":"e;a",
ba:function(a){new W.jw(this).$2(a,null)},
ai:function(a,b){if(b==null)J.cz(a)
else b.removeChild(a)},
dA:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cu(a)
x=y.gdq().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.W(t)}v="element unprintable"
try{v=J.az(a)}catch(t){H.W(t)}try{u=W.aB(a)
this.dz(a,b,z,v,u,y,x)}catch(t){if(H.W(t) instanceof P.ac)throw t
else{this.ai(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dz:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ai(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ae(a)){this.ai(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a7(a,"is",g)){this.ai(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gP(f)
y=H.y(z.slice(0),[H.G(z,0)])
for(x=f.gP(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.a(y,x)
w=y[x]
if(!this.a.a7(a,J.f4(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.d(e)+" "+w+'="'+H.d(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.q(a).$isdw)this.ba(a.content)}},
jw:{"^":"k:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dA(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ai(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eT(z)}catch(w){H.W(w)
v=z
if(x){u=J.f(v)
if(u.gay(v)!=null){u.gay(v)
u.gay(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
il:{"^":"h+fr;"},
ip:{"^":"h+l;"},
iq:{"^":"ip+m;"},
ir:{"^":"h+l;"},
is:{"^":"ir+m;"},
iy:{"^":"h+l;"},
iz:{"^":"iy+m;"},
iM:{"^":"h+l;"},
iN:{"^":"iM+m;"},
iT:{"^":"h+T;"},
iU:{"^":"h+T;"},
iV:{"^":"h+l;"},
iW:{"^":"iV+m;"},
iX:{"^":"h+l;"},
iY:{"^":"iX+m;"},
j0:{"^":"h+l;"},
j1:{"^":"j0+m;"},
j7:{"^":"h+T;"},
e3:{"^":"E+l;"},
e4:{"^":"e3+m;"},
jc:{"^":"h+l;"},
jd:{"^":"jc+m;"},
jg:{"^":"h+T;"},
jn:{"^":"h+l;"},
jo:{"^":"jn+m;"},
e7:{"^":"E+l;"},
e8:{"^":"e7+m;"},
js:{"^":"h+l;"},
jt:{"^":"js+m;"},
jy:{"^":"h+l;"},
jz:{"^":"jy+m;"},
jA:{"^":"h+l;"},
jB:{"^":"jA+m;"},
jC:{"^":"h+l;"},
jD:{"^":"jC+m;"},
jE:{"^":"h+l;"},
jF:{"^":"jE+m;"},
jG:{"^":"h+l;"},
jH:{"^":"jG+m;"}}],["","",,P,{"^":"",
V:function(a){var z,y,x,w,v
if(a==null)return
z=P.I()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
k_:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.ct(a,new P.k0(z))
return z},
cT:function(){var z=$.cS
if(z==null){z=J.bH(window.navigator.userAgent,"Opera",0)
$.cS=z}return z},
fx:function(){var z,y
z=$.cP
if(z!=null)return z
y=$.cQ
if(y==null){y=J.bH(window.navigator.userAgent,"Firefox",0)
$.cQ=y}if(y)z="-moz-"
else{y=$.cR
if(y==null){y=P.cT()!==!0&&J.bH(window.navigator.userAgent,"Trident/",0)
$.cR=y}if(y)z="-ms-"
else z=P.cT()===!0?"-o-":"-webkit-"}$.cP=z
return z},
k0:{"^":"k:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",mg:{"^":"E;S:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mB:{"^":"E;S:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
ko:function(a){return Math.sqrt(a)},
dX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ag:{"^":"e;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.d(this.a)+", "+H.d(this.b)+")"},
H:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ag))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y
z=J.a4(this.a)
y=J.a4(this.b)
return P.iO(P.dX(P.dX(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.c.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.c.gn(b)
if(typeof z!=="number")return z.l()
return new P.ag(y,C.a.l(z,x),this.$ti)},
J:function(a,b){var z,y,x,w
z=this.a
y=J.f(b)
x=y.gm(b)
if(typeof z!=="number")return z.J()
if(typeof x!=="number")return H.u(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.J()
if(typeof y!=="number")return H.u(y)
return new P.ag(z-x,w-y,this.$ti)}},
j2:{"^":"e;$ti"},
a7:{"^":"j2;$ti"}}],["","",,P,{"^":"",l3:{"^":"B;m:x=,n:y=","%":"SVGFEBlendElement"},l4:{"^":"B;m:x=,n:y=","%":"SVGFEColorMatrixElement"},l5:{"^":"B;m:x=,n:y=","%":"SVGFEComponentTransferElement"},l6:{"^":"B;m:x=,n:y=","%":"SVGFECompositeElement"},l7:{"^":"B;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},l8:{"^":"B;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},l9:{"^":"B;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},la:{"^":"B;m:x=,n:y=","%":"SVGFEFloodElement"},lb:{"^":"B;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},lc:{"^":"B;m:x=,n:y=","%":"SVGFEImageElement"},ld:{"^":"B;m:x=,n:y=","%":"SVGFEMergeElement"},le:{"^":"B;m:x=,n:y=","%":"SVGFEMorphologyElement"},lf:{"^":"B;m:x=,n:y=","%":"SVGFEOffsetElement"},lg:{"^":"B;m:x=,n:y=,F:z=","%":"SVGFEPointLightElement"},lh:{"^":"B;m:x=,n:y=","%":"SVGFESpecularLightingElement"},li:{"^":"B;m:x=,n:y=,F:z=","%":"SVGFESpotLightElement"},lj:{"^":"B;m:x=,n:y=","%":"SVGFETileElement"},lk:{"^":"B;m:x=,n:y=","%":"SVGFETurbulenceElement"},lp:{"^":"B;m:x=,n:y=","%":"SVGFilterElement"},ls:{"^":"aE;m:x=,n:y=","%":"SVGForeignObjectElement"},fM:{"^":"aE;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aE:{"^":"B;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lA:{"^":"aE;m:x=,n:y=","%":"SVGImageElement"},lE:{"^":"iQ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$asl:function(){return[P.d8]},
$isi:1,
$asi:function(){return[P.d8]},
$asm:function(){return[P.d8]},
"%":"SVGLengthList"},lK:{"^":"B;m:x=,n:y=","%":"SVGMaskElement"},lL:{"^":"h;Z:a=,U:b=,a2:c=","%":"SVGMatrix"},m2:{"^":"j_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$asl:function(){return[P.dj]},
$isi:1,
$asi:function(){return[P.dj]},
$asm:function(){return[P.dj]},
"%":"SVGNumberList"},m7:{"^":"B;m:x=,n:y=","%":"SVGPatternElement"},m9:{"^":"h;m:x=,n:y=","%":"SVGPoint"},ma:{"^":"h;i:length=","%":"SVGPointList"},mc:{"^":"h;m:x=,n:y=","%":"SVGRect"},md:{"^":"fM;m:x=,n:y=","%":"SVGRectElement"},dm:{"^":"B;",$isdm:1,"%":"SVGScriptElement"},mq:{"^":"ji;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$asl:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asm:function(){return[P.n]},
"%":"SVGStringList"},B:{"^":"ao;",
a0:function(a,b,c,d){var z,y,x,w,v,u
z=H.y([],[W.de])
z.push(W.dV(null))
z.push(W.e6())
z.push(new W.jj())
c=new W.e9(new W.df(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dX(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.U(w)
u=z.ga9(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaX:function(a){return new W.ah(a,"mousedown",!1,[W.P])},
gaY:function(a){return new W.ah(a,"mousemove",!1,[W.P])},
gaZ:function(a){return new W.ah(a,"mouseup",!1,[W.P])},
gb_:function(a){return new W.ah(a,"mousewheel",!1,[W.aP])},
$isB:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mr:{"^":"aE;m:x=,n:y=","%":"SVGSVGElement"},i0:{"^":"aE;","%":"SVGTextPathElement;SVGTextContentElement"},mv:{"^":"i0;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mC:{"^":"jv;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$asl:function(){return[P.dA]},
$isi:1,
$asi:function(){return[P.dA]},
$asm:function(){return[P.dA]},
"%":"SVGTransformList"},mG:{"^":"aE;m:x=,n:y=","%":"SVGUseElement"},iP:{"^":"h+l;"},iQ:{"^":"iP+m;"},iZ:{"^":"h+l;"},j_:{"^":"iZ+m;"},jh:{"^":"h+l;"},ji:{"^":"jh+m;"},ju:{"^":"h+l;"},jv:{"^":"ju+m;"}}],["","",,P,{"^":"",kw:{"^":"h;i:length=","%":"AudioBuffer"},kx:{"^":"ij;",
h:function(a,b){return P.V(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gP:function(a){var z=H.y([],[P.n])
this.B(a,new P.ff(z))
return z},
gi:function(a){return a.size},
$asT:function(){return[P.n,null]},
"%":"AudioParamMap"},ff:{"^":"k:2;a",
$2:function(a,b){return this.a.push(a)}},ky:{"^":"h;aV:enabled=","%":"AudioTrack"},kz:{"^":"E;i:length=","%":"AudioTrackList"},fg:{"^":"E;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m4:{"^":"fg;i:length=","%":"OfflineAudioContext"},ij:{"^":"h+T;"}}],["","",,P,{"^":"",me:{"^":"h;",
bG:function(a,b){return a.activeTexture(b)},
bJ:function(a,b,c){return a.attachShader(b,c)},
bK:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindFramebuffer(b,c)},
bN:function(a,b,c){return a.bindTexture(b,c)},
bO:function(a,b){return a.blendEquation(b)},
bP:function(a,b,c){return a.blendFunc(b,c)},
bQ:function(a,b,c,d){return a.bufferData(b,c,d)},
bS:function(a,b){return a.clear(b)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bZ:function(a,b){return a.depthMask(b)},
c_:function(a,b){return a.disable(b)},
c0:function(a,b,c,d){return a.drawArrays(b,c,d)},
c1:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c2:function(a,b){return a.enable(b)},
c3:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.V(a.getContextAttributes())},
b4:function(a,b){return a.getProgramInfoLog(b)},
b5:function(a,b,c){return a.getProgramParameter(b,c)},
b6:function(a,b){return a.getShaderInfoLog(b)},
b7:function(a,b,c){return a.getShaderParameter(b,c)},
b8:function(a,b,c){return a.getUniformLocation(b,c)},
c8:function(a,b){return a.linkProgram(b)},
bb:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ck:function(a,b,c){return a.uniform1f(b,c)},
cl:function(a,b,c){return a.uniform1fv(b,c)},
cm:function(a,b,c){return a.uniform1i(b,c)},
cn:function(a,b,c){return a.uniform1iv(b,c)},
co:function(a,b,c){return a.uniform2fv(b,c)},
cp:function(a,b,c){return a.uniform3fv(b,c)},
cq:function(a,b,c){return a.uniform4fv(b,c)},
cr:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cs:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cu:function(a,b){return a.useProgram(b)},
cv:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cz:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mf:{"^":"h;",
dM:function(a,b){return a.beginTransformFeedback(b)},
dP:function(a,b){return a.bindVertexArray(b)},
dY:function(a){return a.createVertexArray()},
e_:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e0:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e1:function(a){return a.endTransformFeedback()},
ep:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eq:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bG:function(a,b){return a.activeTexture(b)},
bJ:function(a,b,c){return a.attachShader(b,c)},
bK:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindFramebuffer(b,c)},
bN:function(a,b,c){return a.bindTexture(b,c)},
bO:function(a,b){return a.blendEquation(b)},
bP:function(a,b,c){return a.blendFunc(b,c)},
bQ:function(a,b,c,d){return a.bufferData(b,c,d)},
bS:function(a,b){return a.clear(b)},
bT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bU:function(a,b){return a.compileShader(b)},
bV:function(a){return a.createBuffer()},
bW:function(a){return a.createProgram()},
bX:function(a,b){return a.createShader(b)},
bZ:function(a,b){return a.depthMask(b)},
c_:function(a,b){return a.disable(b)},
c0:function(a,b,c,d){return a.drawArrays(b,c,d)},
c1:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c2:function(a,b){return a.enable(b)},
c3:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.V(a.getContextAttributes())},
b4:function(a,b){return a.getProgramInfoLog(b)},
b5:function(a,b,c){return a.getProgramParameter(b,c)},
b6:function(a,b){return a.getShaderInfoLog(b)},
b7:function(a,b,c){return a.getShaderParameter(b,c)},
b8:function(a,b,c){return a.getUniformLocation(b,c)},
c8:function(a,b){return a.linkProgram(b)},
bb:function(a,b,c){return a.shaderSource(b,c)},
bd:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ck:function(a,b,c){return a.uniform1f(b,c)},
cl:function(a,b,c){return a.uniform1fv(b,c)},
cm:function(a,b,c){return a.uniform1i(b,c)},
cn:function(a,b,c){return a.uniform1iv(b,c)},
co:function(a,b,c){return a.uniform2fv(b,c)},
cp:function(a,b,c){return a.uniform3fv(b,c)},
cq:function(a,b,c){return a.uniform4fv(b,c)},
cr:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cs:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cu:function(a,b){return a.useProgram(b)},
cv:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cz:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mo:{"^":"jf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return P.V(a.item(b))},
j:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$asl:function(){return[P.c0]},
$isi:1,
$asi:function(){return[P.c0]},
$asm:function(){return[P.c0]},
"%":"SQLResultSetRowList"},je:{"^":"h+l;"},jf:{"^":"je+m;"}}],["","",,G,{"^":"",
ib:function(a){var z,y,x,w
z=H.y(a.split("\n"),[P.n])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.a(z,y)
w+=H.d(z[y])
if(y>=z.length)return H.a(z,y)
z[y]=w}return C.b.al(z,"\n")},
dR:function(a,b,c){var z,y,x,w
z=J.f(a)
y=z.bX(a,b)
z.bb(a,y,c)
z.bU(a,y)
x=z.b7(a,y,35713)
if(x!=null&&J.M(x,!1)){w=z.b6(a,y)
P.an("E:Compilation failed:")
P.an("E:"+G.ib(c))
P.an("E:Failure:")
P.an(C.i.l("E:",w))
throw H.c(w)}return y},
dg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.q(b)
d.ao(0,a)
e.q(c)
e.ao(0,a)
z=e.a
y=z[0]
x=z[1]
w=z[2]
v=d.a
u=v[0]
t=v[1]
s=v[2]
z[0]=x*s-w*t
z[1]=w*u-y*s
z[2]=y*t-x*u
r=Math.sqrt(e.gax())
if(r===0)return!1
e.W(0,-1/r)
return!0},
d_:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bK(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bL(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.a(a,y)
v=J.cx(a[y])
if(z>=w)return H.a(b,z)
b[z]=v}return b},
fJ:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bK(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x;++z
if(y>=a.length)return H.a(a,y)
x=J.bL(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
fK:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bK(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bL(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.cx(a[y])
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.eW(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
fI:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aY(a[y],0)
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.aY(a[y],1)
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.aY(a[y],2)
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.aY(a[y],3)
if(z>=w)return H.a(b,z)
b[z]=x}return b},
iK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ae(z,z.r,null,null,[H.G(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.J]],v=[P.al],u=[T.x],t=[T.b],s=[T.j];y.v();){r=y.d
if(!x.au(0,r)){q="Dropping unnecessary attribute: "+H.d(r)
if($.el>0)H.bF("I: "+q)
continue}p=z.h(0,r)
switch($.$get$Y().h(0,r).a){case"vec2":b.af(r,G.fJ(H.bd(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.af(r,G.d_(H.bd(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.af(r,G.fK(H.bd(p,"$isi",u,"$asi"),null),4)
break
case"float":b.af(r,new Float32Array(H.by(H.bd(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.af(r,G.fI(H.bd(p,"$isi",w,"$asi"),null),4)
break}}},
aD:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.I()
w=J.eJ(z.a)
v=new G.h6(z,w,4,x,y,null,0,-1,null,null,P.I(),"meshdata:"+a,!1,!0)
u=G.d_(c.d,null)
x.j(0,"aPosition",J.bI(z.a))
v.ch=u
v.bi("aPosition",u,3)
t=$.$get$Y().h(0,"aPosition")
if(t==null)H.R("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.be(z.a,w)
z.c4(0,s,0)
z.cw(0,x.h(0,"aPosition"),s,t.bk(),5126,!1,0,0)
y=c.cX()
v.y=J.bI(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.by(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.by(y))
v.Q=5123}else{v.cx=new Uint32Array(H.by(y))
v.Q=5125}J.be(z.a,w)
y=v.y
x=v.cx
J.bG(z.a,34963,y)
J.cp(z.a,34963,x,35048)
G.iK(c,v)
return v},
aK:{"^":"e;aV:c>"},
c6:{"^":"aK;d,a,b,c",
bl:function(){return this.d},
k:function(a){var z,y,x,w
z=H.y(["{"+H.d(new H.dM(H.k6(this),null))+"}["+this.a+"]"],[P.n])
for(y=this.d,x=new H.ae(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.v();){w=x.d
z.push(H.d(w)+": "+H.d(y.h(0,w)))}return C.b.al(z,"\n")}},
fi:{"^":"dp;"},
fk:{"^":"e;a,b",
c4:function(a,b,c){J.eP(this.a,b)
if(c>0)J.fa(this.a,b,c)},
cw:function(a,b,c,d,e,f,g,h){J.bG(this.a,34962,b)
J.fb(this.a,c,d,e,!1,g,h)}},
fL:{"^":"e;a,b,c,d,e"},
ap:{"^":"e;Z:a>,U:b>,a2:c>",u:{
F:function(a,b,c){return new G.ap(a,b,c)}}},
cY:{"^":"e;Z:a>,U:b>,a2:c>,d"},
aC:{"^":"e;a,b,c,d,e",
T:function(a){switch($.$get$Y().h(0,a).a){case"vec2":this.e.j(0,a,H.y([],[T.j]))
break
case"vec3":this.e.j(0,a,H.y([],[T.b]))
break
case"vec4":this.e.j(0,a,H.y([],[T.x]))
break
case"float":this.e.j(0,a,H.y([],[P.al]))
break
case"uvec4":this.e.j(0,a,H.y([],[[P.i,P.J]]))
break}},
bf:function(a){var z,y,x
z=this.d.length
for(y=this.b,x=0;x<a;++x,z+=3)y.push(new G.ap(z,z+1,z+2))},
ap:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.cY(z,z+1,z+2,z+3))},
a6:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)y.push(a[x].R(0))},
cR:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.ap(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.cq(a[x]))},
Y:function(a,b){var z,y,x,w
z=this.e.h(0,a)
for(y=b.length,x=z&&C.b,w=0;w<b.length;b.length===y||(0,H.D)(b),++w)x.G(z,b[w].R(0))},
aE:function(a,b){var z,y,x,w
z=this.e.h(0,a)
for(y=b.length,x=z&&C.b,w=0;w<b.length;b.length===y||(0,H.D)(b),++w)x.G(z,J.cq(b[w]))},
cS:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.cY(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].R(0))},
cX:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.y(x,[P.J])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.a(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.a(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.a(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.a(w,u)
w[u]=x
r=u+1
if(r>=v)return H.a(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.a(w,r)
w[r]=p
r=u+3
if(r>=v)return H.a(w,r)
w[r]=x
x=u+4
if(x>=v)return H.a(w,x)
w[x]=p
p=u+5
if(p>=v)return H.a(w,p)
w[p]=q.d
u+=6}return w},
bj:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.d
y=new Array(z.length)
y.fixed$length=Array
x=H.y(y,[T.b])
w=new T.b(new Float32Array(3))
v=new T.b(new Float32Array(3))
for(y=this.b,u=y.length,t=x.length,s=0;s<y.length;y.length===u||(0,H.D)(y),++s){r=y[s]
q=r.a
p=z.length
if(q>>>0!==q||q>=p)return H.a(z,q)
o=z[q]
n=r.b
if(n>=p)return H.a(z,n)
m=z[n]
l=r.c
if(l>=p)return H.a(z,l)
G.dg(o,m,z[l],w,v)
p=new T.b(new Float32Array(3))
p.q(v)
if(q>=t)return H.a(x,q)
x[q]=p
q=new T.b(new Float32Array(3))
q.q(v)
if(n>=t)return H.a(x,n)
x[n]=q
q=new T.b(new Float32Array(3))
q.q(v)
if(l>=t)return H.a(x,l)
x[l]=q}for(y=this.c,u=y.length,s=0;s<y.length;y.length===u||(0,H.D)(y),++s){k=y[s]
q=k.a
p=z.length
if(q>=p)return H.a(z,q)
o=z[q]
n=k.b
if(n>=p)return H.a(z,n)
m=z[n]
l=k.c
if(l>=p)return H.a(z,l)
G.dg(o,m,z[l],w,v)
p=new T.b(new Float32Array(3))
p.q(v)
if(q>=t)return H.a(x,q)
x[q]=p
q=new T.b(new Float32Array(3))
q.q(v)
if(n>=t)return H.a(x,n)
x[n]=q
q=new T.b(new Float32Array(3))
q.q(v)
if(l>=t)return H.a(x,l)
x[l]=q
q=k.d
p=new T.b(new Float32Array(3))
p.q(v)
if(q>=t)return H.a(x,q)
x[q]=p}this.e.j(0,"aNormal",x)},
ab:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new Array(this.d.length)
z.fixed$length=Array
y=H.y(z,[T.x])
x=new T.x(new Float32Array(4))
x.X(1,0,0,0)
w=new T.x(new Float32Array(4))
w.X(0,1,0,0)
v=new T.x(new Float32Array(4))
v.X(0,0,1,0)
for(z=this.b,u=z.length,t=y.length,s=0;s<z.length;z.length===u||(0,H.D)(z),++s){r=z[s]
q=r.a
p=new T.x(new Float32Array(4))
p.q(x)
if(q>>>0!==q||q>=t)return H.a(y,q)
y[q]=p
p=r.b
q=new T.x(new Float32Array(4))
q.q(w)
if(p>=t)return H.a(y,p)
y[p]=q
q=r.c
p=new T.x(new Float32Array(4))
p.q(v)
if(q>=t)return H.a(y,q)
y[q]=p}o=new T.x(new Float32Array(4))
o.X(1,0,0,1)
n=new T.x(new Float32Array(4))
n.X(1,1,0,1)
m=new T.x(new Float32Array(4))
m.X(0,1,0,1)
l=new T.x(new Float32Array(4))
l.X(0,0,0,1)
for(z=this.c,u=z.length,s=0;s<z.length;z.length===u||(0,H.D)(z),++s){r=z[s]
q=r.a
p=new T.x(new Float32Array(4))
p.q(o)
if(q>=t)return H.a(y,q)
y[q]=p
p=r.b
q=new T.x(new Float32Array(4))
q.q(n)
if(p>=t)return H.a(y,p)
y[p]=q
q=r.c
p=new T.x(new Float32Array(4))
p.q(m)
if(q>=t)return H.a(y,q)
y[q]=p
p=r.d
q=new T.x(new Float32Array(4))
q.q(l)
if(p>=t)return H.a(y,p)
y[p]=q}this.e.j(0,"aCenter",y)},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ae(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.v();){w=x.d
v=$.$get$Y().h(0,w).a
z.push(H.d(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.al(z," ")}},
dz:{"^":"e;a,b,c"},
dx:{"^":"e;a,b,c",u:{
dy:function(a,b,c){return new G.dx(a,b,c)}}},
h4:{"^":"c6;d,a,b,c"},
h6:{"^":"aK;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bi:function(a,b,c){var z,y
C.i.bs(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bG(z.a,34962,y)
J.cp(z.a,34962,b,35048)},
cY:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
af:function(a,b,c){var z,y,x,w,v
z=J.cr(a,0)===105
if(z&&this.z===0)this.z=C.c.cP(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bI(x.a))
this.bi(a,b,c)
w=$.$get$Y().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.be(x.a,this.e)
x.c4(0,v,z?1:0)
x.cw(0,y.h(0,a),v,w.bk(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ae(z,z.r,null,null,[H.G(z,0)]),x.c=z.e;x.v();){w=x.d
y.push(H.d(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.b.al(y,"  ")}},
hn:{"^":"c6;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cT:function(a,b){var z
if(typeof a!=="number")return a.eu()
if(typeof b!=="number")return H.u(b)
z=a/b
if(this.z===z)return
this.z=z
this.bm()},
bm:function(){var z,y,x,w,v,u
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
bl:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.b(new Float32Array(3))
u.p(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.q(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.q(t)
x=!!y.$isx
q=x?y.gaA(t):1
if(!!y.$isb){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.u(t)
x=z[4]
if(typeof s!=="number")return H.u(s)
w=z[8]
if(typeof r!=="number")return H.u(r)
o=z[12]
n=z[1]
m=z[5]
l=z[9]
k=z[13]
j=z[2]
i=z[6]
h=z[10]
g=z[14]
f=z[3]
e=z[7]
d=z[11]
c=z[15]
z[12]=y*t+x*s+w*r+o*q
z[13]=n*t+m*s+l*r+k*q
z[14]=j*t+i*s+h*r+g*q
z[15]=f*t+e*s+d*r+c*q
c=this.cx
c.q(this.db)
c.ca(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hB:{"^":"aK;d,e,f,r,x,y,z,Q,ch,a,b,c",
d2:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cy(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cy(w.a,v,t))}},
d5:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ae(y,y.r,null,null,[H.G(y,0)]),w.c=y.e;w.v();){v=w.d
if(!z.au(0,v))x.push(v)}for(z=this.x,y=new P.ca(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.v();){v=y.d
if(!z.A(0,v))x.push(v)}return x},
d9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ae(b,b.r,null,null,[H.G(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.v();){t=y.d
switch(J.cr(t,0)){case 117:if(w.au(0,t)){s=b.h(0,t)
if(v.au(0,t))H.bF("E:"+(t+" : group ["+H.d(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$Y().h(0,t)
if(r==null)H.R("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bM(x.a,q,s)
else if(!!J.q(s).$isfP)J.f8(x.a,q,s)
break
case"float":if(r.c===0)J.f6(x.a,q,s)
else if(!!J.q(s).$isbV)J.f7(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a3(s,"$isC").a
J.cF(x.a,q,!1,p)}else if(!!J.q(s).$isbV)J.cF(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a3(s,"$isO").a
J.cE(x.a,q,!1,p)}else if(!!J.q(s).$isbV)J.cE(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cD(o,q,H.a3(s,"$isx").a)
else J.cD(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cC(o,q,H.a3(s,"$isb").a)
else J.cC(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cB(o,q,H.a3(s,"$isj").a)
else J.cB(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cm(x.a,33984+p)
p=H.a3(s,"$isi1").cZ()
J.co(x.a,3553,p)
p=this.ch
J.bM(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cm(x.a,33984+p)
p=H.a3(s,"$isi1").cZ()
J.co(x.a,34067,p)
p=this.ch
J.bM(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bF("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.M(s,!0)
o=x.a
if(p)J.aZ(o,2929)
else J.bJ(o,2929)
break
case"cStencilFunc":H.a3(s,"$isdz")
p=s.a
o=x.a
if(p===1281)J.bJ(o,2960)
else{J.aZ(o,2960)
o=s.b
n=s.c
J.f3(x.a,p,o,n)}break
case"cDepthWrite":J.eK(x.a,s)
break
case"cBlendEquation":H.a3(s,"$isdx")
p=s.a
o=x.a
if(p===1281)J.bJ(o,3042)
else{J.aZ(o,3042)
o=s.b
n=s.c
J.eE(x.a,o,n)
J.eD(x.a,p)}break}++u
break}}m=P.fC(0,0,0,Date.now()-new P.cO(z,!1).a,0,0)
""+u
m.k(0)},
cW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.f9(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bp()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x){w=b[x]
this.d9(w.a,w.bl())}y=this.Q
y.aj(0)
for(v=a.cy,u=new H.ae(v,v.r,null,null,[H.G(v,0)]),u.c=v.e;u.v();)y.G(0,u.d)
t=this.d5()
if(t.length!==0)P.an("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.d(t)))
J.be(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cY()
u=a.Q
r=a.z
if(s)J.eB(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eO(q,y,v,u,0,r)
else J.eN(q,y,v,u,0)}else{u=z.a
if(r>1)J.eM(u,y,0,v,r)
else J.eL(u,y,0,v)}if(s)J.eQ(z.a)},
u:{
hC:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.X(null,null,null,P.n)
y=c.b
x=d.b
w=c.f
v=J.eI(b.a)
u=G.dR(b.a,35633,y)
J.cn(b.a,v,u)
t=G.dR(b.a,35632,x)
J.cn(b.a,v,t)
if(w.length>0)J.f5(b.a,v,w,35980)
J.f1(b.a,v)
if(J.f0(b.a,v,35714)!==!0)H.R(J.f_(b.a,v))
z=new G.hB(b,c,d,v,P.c_(c.c,null),P.I(),P.I(),z,null,a,!1,!0)
z.d2(a,b,c,d)
return z}}},
w:{"^":"e;a,b,c",
bk:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hI:{"^":"e;a,b,c,d,e,f,r,x",
cQ:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.b.aC(z)},
bg:function(a){var z,y
for(z=this.d,y=0;y<2;++y)z.push(a[y])
C.b.aC(z)},
bh:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.b.aC(z)},
bn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
s=$.$get$Y().h(0,t)
w.push("layout (location="+H.d(v.h(0,t))+") in "+s.a+" "+H.d(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$Y().h(0,q)
w.push(r+" "+s.a+" "+H.d(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$Y().h(0,q)
w.push(r+" "+s.a+" "+H.d(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$Y().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.d(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.b.O(w,b)
if(a)w.push("}")
return C.b.al(w,"\n")},
u:{
dn:function(a){return new G.hI(a,null,[],[],[],[],0,P.I())}}},
dp:{"^":"aK;",
a4:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",hA:{"^":"hz;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
eg:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.f(z)
w.sL(z,y)
w.sK(z,x)
P.an("size change "+H.d(y)+" "+H.d(x))
this.dx.cT(y,x)
this.z=y
this.Q=x},"$1","gef",4,0,17]},hP:{"^":"e;",
d3:function(a,b,c){var z,y,x
if(a==null)throw H.c("no element provided")
this.a=a
z=a.style
z.color=b
z.fontFamily="Helvetica,Arial,sans-serif"
z.fontSize="9px"
z.lineHeight="15px"
z.padding="0 0 3px 3px"
z.textAlign="left"
z.background=c
z=document
y=z.createElement("div")
x=y.style
x.fontWeight="bold"
y.textContent="@@@@"
this.b=y
this.a.appendChild(y)
x=this.de(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
de:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iu("span",null)
y=J.cv(v)
J.f(y).sL(y,"1px")
C.n.sK(y,""+d+"px")
C.n.se2(y,"left")
x=C.n.br(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},hQ:{"^":"hP;e,f,a,b,c,d",
d7:function(a,b){var z,y,x,w,v;++this.e
if(J.aX(J.ey(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.eo(z,2)+" fps"
y=this.c;(y&&C.C).cD(y,b)
x=C.c.ad(30*C.t.dR(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cv(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d6:function(a){return this.d7(a,"")}}}],["","",,A,{"^":"",
ej:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.eR(b)!==!0)return
z=b.d8(c)
b.k(0)
y=C.b.geb(e)
x=b.db
w=b.dx
v=new Float32Array(9)
u=w.a
v[0]=u[0]
v[1]=u[1]
v[2]=u[2]
v[3]=u[4]
v[4]=u[5]
v[5]=u[6]
v[6]=u[8]
v[7]=u[9]
v[8]=u[10]
x.dW(new T.O(v))
v=x.a
t=v[3]
v[3]=v[1]
v[1]=t
t=v[6]
v[6]=v[2]
v[2]=t
t=v[7]
v[7]=v[5]
v[5]=t
y=y.d
y.j(0,"uTransformationMatrix",b.d)
y.j(0,"uModelMatrix",w)
y.j(0,"uNormalMatrix",x)
e.push(b.ch)
a.cW(b.cx,e,d)
if(0>=e.length)return H.a(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.D)(y),++s)A.ej(a,y[s],z,d,e)},
aL:{"^":"dp;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
d8:function(a){var z=this.dx
z.q(a)
z.ca(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
dl:{"^":"aK;d,e,cb:f>,a,b,c"},
hz:{"^":"aK;",
d1:function(a,b,c){if(this.d==null)this.d=new G.fL(this.e,null,null,null,null)},
cV:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eC(v.a,36160,z)
J.fc(v.a,this.x,this.y,x,w)
if(y!==0)J.eF(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.c6(P.I(),"transforms",!1,!0))
r=new T.C(new Float32Array(16))
r.I()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.D)(x),++q)A.ej(v,x[q],r,a,s)
if(0>=s.length)return H.a(s,-1)
s.pop()}},
cU:function(){return this.cV(null)}}}],["","",,V,{}],["","",,B,{"^":"",
fs:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.b(new Float32Array(3))
x.p(z,y,d2)
w=new T.b(new Float32Array(3))
w.p(d0,y,d2)
v=new T.b(new Float32Array(3))
v.p(d0,d1,d2)
u=new T.b(new Float32Array(3))
u.p(z,d1,d2)
t=-d2
s=new T.b(new Float32Array(3))
s.p(z,y,t)
r=new T.b(new Float32Array(3))
r.p(z,d1,t)
q=new T.b(new Float32Array(3))
q.p(d0,d1,t)
p=new T.b(new Float32Array(3))
p.p(d0,y,t)
o=new T.b(new Float32Array(3))
o.p(z,d1,t)
n=new T.b(new Float32Array(3))
n.p(z,d1,d2)
m=new T.b(new Float32Array(3))
m.p(d0,d1,d2)
l=new T.b(new Float32Array(3))
l.p(d0,d1,t)
k=new T.b(new Float32Array(3))
k.p(d0,y,d2)
j=new T.b(new Float32Array(3))
j.p(z,y,d2)
i=new T.b(new Float32Array(3))
i.p(z,y,t)
h=new T.b(new Float32Array(3))
h.p(d0,y,t)
g=new T.b(new Float32Array(3))
g.p(d0,y,t)
f=new T.b(new Float32Array(3))
f.p(d0,d1,t)
e=new T.b(new Float32Array(3))
e.p(d0,d1,d2)
d=new T.b(new Float32Array(3))
d.p(d0,y,d2)
c=new T.b(new Float32Array(3))
c.p(z,y,t)
b=new T.b(new Float32Array(3))
b.p(z,y,d2)
y=new T.b(new Float32Array(3))
y.p(z,d1,d2)
a=new T.b(new Float32Array(3))
a.p(z,d1,t)
z=new T.j(new Float32Array(2))
z.t(c7,c9)
t=new T.j(new Float32Array(2))
t.t(c6,c9)
a0=new T.j(new Float32Array(2))
a0.t(c6,c8)
a1=new T.j(new Float32Array(2))
a1.t(c7,c8)
a2=new T.j(new Float32Array(2))
a2.t(c6,c9)
a3=new T.j(new Float32Array(2))
a3.t(c6,c8)
a4=new T.j(new Float32Array(2))
a4.t(c7,c8)
a5=new T.j(new Float32Array(2))
a5.t(c7,c9)
a6=new T.j(new Float32Array(2))
a6.t(c7,c8)
a7=new T.j(new Float32Array(2))
a7.t(c7,c9)
a8=new T.j(new Float32Array(2))
a8.t(c6,c9)
a9=new T.j(new Float32Array(2))
a9.t(c6,c8)
b0=new T.j(new Float32Array(2))
b0.t(c6,c8)
b1=new T.j(new Float32Array(2))
b1.t(c7,c8)
b2=new T.j(new Float32Array(2))
b2.t(c7,c9)
b3=new T.j(new Float32Array(2))
b3.t(c6,c9)
b4=new T.j(new Float32Array(2))
b4.t(c6,c9)
b5=new T.j(new Float32Array(2))
b5.t(c6,c8)
b6=new T.j(new Float32Array(2))
b6.t(c7,c8)
b7=new T.j(new Float32Array(2))
b7.t(c7,c9)
b8=new T.j(new Float32Array(2))
b8.t(c7,c9)
b9=new T.j(new Float32Array(2))
b9.t(c6,c9)
c0=new T.j(new Float32Array(2))
c0.t(c6,c8)
c1=new T.j(new Float32Array(2))
c1.t(c7,c8)
c2=new G.aC(!1,[],[],[],P.I())
c2.T("aTexUV")
c2.T("aNormal")
c2.ap(6)
c2.a6([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.Y("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$dS(),c3<6;++c3){c4=z[c3]
c2.aE("aNormal",[c4,c4,c4,c4])}return c2},
fu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=c/2
y=[]
x=[]
for(w=-z,v=0;v<d;++v){u=v/d*3.141592653589793*2
t=Math.sin(u)
s=Math.cos(u)
r=new Float32Array(3)
r[0]=a*t
r[1]=z
r[2]=a*s
y.push(new T.b(r))
r=new Float32Array(3)
r[0]=b*t
r[1]=w
r[2]=b*s
x.push(new T.b(r))}if(0>=y.length)return H.a(y,0)
y.push(y[0])
if(0>=x.length)return H.a(x,0)
x.push(x[0])
q=new T.j(new Float32Array(2))
q.t(0,0)
p=new T.b(new Float32Array(3))
p.p(0,z,0)
o=new T.b(new Float32Array(3))
o.p(0,w,0)
n=new G.aC(!1,[],[],[],P.I())
n.T("aTexUV")
n.bf(2*d)
for(v=0;v<d;v=m){w=y.length
if(v>=w)return H.a(y,v)
r=y[v]
m=v+1
if(m>=w)return H.a(y,m)
n.a6([p,r,y[m]])
r=x.length
if(m>=r)return H.a(x,m)
w=x[m]
if(v>=r)return H.a(x,v)
n.a6([o,w,x[v]])
n.Y("aTexUV",[q,q,q])
n.Y("aTexUV",[q,q,q])}n.ap(d)
for(v=0;v<d;v=m){m=v+1
w=y.length
if(m>=w)return H.a(y,m)
r=y[m]
if(v>=w)return H.a(y,v)
w=y[v]
l=x.length
if(v>=l)return H.a(x,v)
k=x[v]
if(m>=l)return H.a(x,m)
n.a6([r,w,k,x[m]])
n.Y("aTexUV",[q,q,q,q])}return n},
fN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.b.O(z,$.$get$d1())
C.b.O(y,$.$get$d2())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.D)(z),++u){t=z[u]
s=J.f(t)
r=s.gZ(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
q=new T.b(new Float32Array(3))
q.q(r)
r=s.gU(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
q.G(0,y[r])
q.W(0,0.5)
q.E(0)
r=s.gU(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
p=new T.b(new Float32Array(3))
p.q(r)
r=s.ga2(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
p.G(0,y[r])
p.W(0,0.5)
p.E(0)
r=s.ga2(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
o=new T.b(new Float32Array(3))
o.q(r)
r=s.gZ(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
o.G(0,y[r])
o.W(0,0.5)
o.E(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.ap(s.gZ(t),n,l))
w.push(new G.ap(s.gU(t),m,n))
w.push(new G.ap(s.ga2(t),l,m))
w.push(new G.ap(n,m,l))}}k=new G.aC(!1,[],[],[],P.I())
k.T("aTexUV")
k.T("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.D)(z),++u){t=z[u]
s=J.f(t)
r=s.gZ(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
j=y[r]
r=s.gU(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
i=y[r]
s=s.ga2(t)
if(s>>>0!==s||s>=y.length)return H.a(y,s)
h=y[s]
s=J.f(j)
r=s.gF(j)
g=s.gm(j)
g=Math.atan2(H.a8(r),H.a8(g))
s=Math.acos(H.a8(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.f(i)
g=s.gF(i)
f=s.gm(i)
f=Math.atan2(H.a8(g),H.a8(f))
s=Math.acos(H.a8(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.f(h)
f=s.gF(h)
e=s.gm(h)
e=Math.atan2(H.a8(f),H.a8(e))
s=Math.acos(H.a8(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.aE("aNormal",[j,i,h])
k.cR([j.a3(b),i.a3(b),h.a3(b)])
k.Y("aTexUV",[new T.j(r),new T.j(g),new T.j(f)])}return k},
hJ:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=B.i2(B.hm(new B.hK(e,d,f,c),0,6.283185307179586,g+1,!1,0.001),h,i,!1)
y=new G.aC(!1,[],[],[],P.I())
for(x=0;x<g;x=w)for(w=x+1,v=0;v<h;v=u){u=v+1
y.ap(1)
t=z.length
if(x>=t)return H.a(z,x)
s=z[x]
r=u*2
q=s.length
if(r>=q)return H.a(s,r)
p=s[r]
if(w>=t)return H.a(z,w)
t=z[w]
o=t.length
if(r>=o)return H.a(t,r)
r=t[r]
n=v*2
if(n>=o)return H.a(t,n)
t=t[n]
if(n>=q)return H.a(s,n)
y.a6([p,r,t,s[n]])}y.T("aTexUV")
for(x=0;x<g;x=w)for(t=x/g,w=x+1,v=0;v<h;v=u){u=v+1
s=u/h
r=new Float32Array(2)
r[0]=t
r[1]=s
q=w/g
p=new Float32Array(2)
p[0]=q
p[1]=s
s=v/h
o=new Float32Array(2)
o[0]=q
o[1]=s
q=new Float32Array(2)
q[0]=t
q[1]=s
y.Y("aTexUV",[new T.j(r),new T.j(p),new T.j(o),new T.j(q)])}y.bj()
return y},
i2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.b(y)
w=new Float32Array(3)
v=new T.b(w)
u=new Float32Array(3)
t=new T.b(u)
for(s=b+1,r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.a(a,o)
n=a[o]
m=[]
z.push(m)
q=n.a
o=q[2]
if(Math.abs(o)>0.7071067811865476){l=q[1]
k=l*l+o*o
j=1/Math.sqrt(k)
w[0]=0
w[1]=-q[2]*j
w[2]=q[1]*j
u[0]=k*j
u[1]=-q[0]*(q[1]*j)
u[2]=q[0]*(-q[2]*j)}else{o=q[0]
l=q[1]
k=o*o+l*l
j=1/Math.sqrt(k)
w[0]=-q[1]*j
w[1]=q[0]*j
w[2]=0
u[0]=-q[2]*(q[0]*j)
u[1]=q[2]*(-q[1]*j)
u[2]=k*j}v.E(0)
t.E(0)
for(i=0;i<s;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
x.q(p)
x.at(v,g)
x.at(t,f)
q=new T.b(new Float32Array(3))
q.q(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.at(v,g)
x.at(t,f)
x.E(0)
q=new T.b(new Float32Array(3))
q.q(x)
m.push(q)}}return z},
hm:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.b(new Float32Array(3))
x=new T.b(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.ao(0,y)
t=new T.b(new Float32Array(3))
t.q(y)
z.push(t)
t=new T.b(new Float32Array(3))
t.q(x)
z.push(t)}return z},
hK:{"^":"k:18;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sm(0,y*v)
b.sn(0,y*u)
b.sF(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",fX:{"^":"e;a,b,c",
d_:function(a){var z
a=document
z=W.bm
W.ai(a,"keydown",new D.fZ(this),!1,z)
W.ai(a,"keyup",new D.h_(this),!1,z)},
u:{
fY:function(a){var z=P.J
z=new D.fX(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z))
z.d_(a)
return z}}},fZ:{"^":"k:8;a",
$1:function(a){var z=this.a
z.a.G(0,J.cw(a))
z.b.G(0,a.which)}},h_:{"^":"k:8;a",
$1:function(a){var z=this.a
z.a.cd(0,J.cw(a))
z.c.G(0,a.which)}},h9:{"^":"e;a,b,c,d,e,f,r,x",
d0:function(a){var z,y
if(a==null)a=document
z=J.f(a)
y=z.gaY(a)
W.ai(y.a,y.b,new D.hb(this),!1,H.G(y,0))
y=z.gaX(a)
W.ai(y.a,y.b,new D.hc(this),!1,H.G(y,0))
y=z.gaZ(a)
W.ai(y.a,y.b,new D.hd(this),!1,H.G(y,0))
z=z.gb_(a)
W.ai(z.a,z.b,new D.he(this),!1,H.G(z,0))},
u:{
ha:function(a){var z=P.J
z=new D.h9(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z),0,0,0,0,0)
z.d0(a)
return z}}},hb:{"^":"k:5;a",
$1:function(a){var z,y
z=J.f(a)
z.az(a)
y=this.a
y.r=z.gcc(a).a
y.x=z.gcc(a).b
y.d=a.movementX
y.e=a.movementY}},hc:{"^":"k:5;a",
$1:function(a){var z=J.f(a)
z.az(a)
P.an("BUTTON "+H.d(z.gbR(a)))
z=this.a
z.a.G(0,a.button)
z.b.G(0,a.button)}},hd:{"^":"k:5;a",
$1:function(a){var z,y
z=J.f(a)
z.az(a)
y=this.a
y.a.cd(0,z.gbR(a))
y.c.G(0,a.button)}},he:{"^":"k:19;a",
$1:function(a){var z=J.f(a)
z.az(a)
this.a.f=z.gdZ(a)}},hl:{"^":"fi;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bc:function(a){var z,y
z=C.O.e3(a,0,new A.k8())
if(typeof z!=="number")return H.u(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
k8:{"^":"k:20;",
$2:function(a,b){var z,y
z=J.ax(a,J.a4(b))
if(typeof z!=="number")return H.u(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",O:{"^":"e;bv:a<",
q:function(a){var z,y
z=a.a
y=this.a
y[8]=z[8]
y[7]=z[7]
y[6]=z[6]
y[5]=z[5]
y[4]=z[4]
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){return"[0] "+this.a1(0).k(0)+"\n[1] "+this.a1(1).k(0)+"\n[2] "+this.a1(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.a(z,b)
return z[b]},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.O){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
a1:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.a(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.a(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.a(y,x)
z[2]=y[x]
return new T.b(z)},
R:function(a){var z=new T.O(new Float32Array(9))
z.q(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.O(z)
y.q(this)
x=b.gbv()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
z[4]=C.a.l(z[4],x.h(0,4))
z[5]=C.a.l(z[5],x.h(0,5))
z[6]=C.a.l(z[6],x.h(0,6))
z[7]=C.a.l(z[7],x.h(0,7))
z[8]=C.a.l(z[8],x.h(0,8))
return y},
J:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.O(z)
y.q(this)
x=b.gbv()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
z[4]=z[4]-x[4]
z[5]=z[5]-x[5]
z[6]=z[6]-x[6]
z[7]=z[7]-x[7]
z[8]=z[8]-x[8]
return y},
dW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.a
y=z[0]
x=z[4]
w=z[8]
v=z[5]
u=z[7]
t=x*w-v*u
s=z[1]
r=z[3]
q=r*w
p=z[6]
o=v*p
z=z[2]
n=r*u-x*p
m=y*t-s*(q-o)+z*n
if(m===0){this.q(a)
return 0}l=1/m
k=this.a
k[0]=l*t
k[1]=l*(z*u-s*w)
k[2]=l*(s*v-z*x)
k[3]=l*(o-q)
k[4]=l*(y*w-z*p)
k[5]=l*(z*r-y*v)
k[6]=l*n
k[7]=l*(s*p-y*u)
k[8]=l*(y*x-s*r)
return m},
a3:function(a){var z,y
z=new Float32Array(9)
y=new T.O(z)
y.q(this)
z[0]=z[0]*a
z[1]=z[1]*a
z[2]=z[2]*a
z[3]=z[3]*a
z[4]=z[4]*a
z[5]=z[5]*a
z[6]=z[6]*a
z[7]=z[7]*a
z[8]=z[8]*a
return y}},C:{"^":"e;bw:a<",
q:function(a){var z,y
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
if(b>=16)return H.a(z,b)
return z[b]},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.C){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
a1:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.a(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.a(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.a(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.a(y,x)
z[3]=y[x]
return new T.x(z)},
R:function(a){var z=new T.C(new Float32Array(16))
z.q(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.C(z)
y.q(this)
x=b.gbw()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
z[4]=C.a.l(z[4],x.h(0,4))
z[5]=C.a.l(z[5],x.h(0,5))
z[6]=C.a.l(z[6],x.h(0,6))
z[7]=C.a.l(z[7],x.h(0,7))
z[8]=C.a.l(z[8],x.h(0,8))
z[9]=C.a.l(z[9],x.h(0,9))
z[10]=C.a.l(z[10],x.h(0,10))
z[11]=C.a.l(z[11],x.h(0,11))
z[12]=C.a.l(z[12],x.h(0,12))
z[13]=C.a.l(z[13],x.h(0,13))
z[14]=C.a.l(z[14],x.h(0,14))
z[15]=C.a.l(z[15],x.h(0,15))
return y},
J:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.C(z)
y.q(this)
x=b.gbw()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
z[4]=z[4]-x[4]
z[5]=z[5]-x[5]
z[6]=z[6]-x[6]
z[7]=z[7]-x[7]
z[8]=z[8]-x[8]
z[9]=z[9]-x[9]
z[10]=z[10]-x[10]
z[11]=z[11]-x[11]
z[12]=z[12]-x[12]
z[13]=z[13]-x[13]
z[14]=z[14]-x[14]
z[15]=z[15]-x[15]
return y},
cC:function(a,b,c){var z,y,x,w,v,u
z=new Float32Array(16)
y=new T.C(z)
y.q(this)
if(typeof a==="number"){x=a
w=x
v=w}else{v=null
w=null
x=null}u=z[0]
if(typeof v!=="number")return H.u(v)
z[0]=u*v
z[1]=z[1]*v
z[2]=z[2]*v
z[3]=z[3]*v
u=z[4]
if(typeof w!=="number")return H.u(w)
z[4]=u*w
z[5]=z[5]*w
z[6]=z[6]*w
z[7]=z[7]*w
u=z[8]
if(typeof x!=="number")return H.u(x)
z[8]=u*x
z[9]=z[9]*x
z[10]=z[10]*x
z[11]=z[11]*x
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]
return y},
a3:function(a){return this.cC(a,null,null)},
I:function(){var z=this.a
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
z[15]=1},
ca:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=this.a
y=z[0]
x=z[4]
w=z[8]
v=z[12]
u=z[1]
t=z[5]
s=z[9]
r=z[13]
q=z[2]
p=z[6]
o=z[10]
n=z[14]
m=z[3]
l=z[7]
k=z[11]
j=z[15]
i=a9.a
h=i[0]
g=i[4]
f=i[8]
e=i[12]
d=i[1]
c=i[5]
b=i[9]
a=i[13]
a0=i[2]
a1=i[6]
a2=i[10]
a3=i[14]
a4=i[3]
a5=i[7]
a6=i[11]
a7=i[15]
z[0]=y*h+x*d+w*a0+v*a4
z[4]=y*g+x*c+w*a1+v*a5
z[8]=y*f+x*b+w*a2+v*a6
z[12]=y*e+x*a+w*a3+v*a7
z[1]=u*h+t*d+s*a0+r*a4
z[5]=u*g+t*c+s*a1+r*a5
z[9]=u*f+t*b+s*a2+r*a6
z[13]=u*e+t*a+s*a3+r*a7
z[2]=q*h+p*d+o*a0+n*a4
z[6]=q*g+p*c+o*a1+n*a5
z[10]=q*f+p*b+o*a2+n*a6
z[14]=q*e+p*a+o*a3+n*a7
z[3]=m*h+l*d+k*a0+j*a4
z[7]=m*g+l*c+k*a1+j*a5
z[11]=m*f+l*b+k*a2+j*a6
z[15]=m*e+l*a+k*a3+j*a7}},j:{"^":"e;bE:a<",
t:function(a,b){var z=this.a
z[0]=a
z[1]=b},
q:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+"]"},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.j){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.j(z)
y.q(this)
x=b.gbE()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.j(z)
y.q(this)
x=b.gbE()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.a(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
W:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
a3:function(a){var z=new T.j(new Float32Array(2))
z.q(this)
z.W(0,a)
return z},
R:function(a){var z=new T.j(new Float32Array(2))
z.q(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},b:{"^":"e;aT:a<",
p:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
q:function(a){var z,y
z=a.gaT()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+"]"},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.b){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
J:function(a,b){var z=new T.b(new Float32Array(3))
z.q(this)
z.ao(0,b)
return z},
l:function(a,b){var z=new T.b(new Float32Array(3))
z.q(this)
z.G(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=3)return H.a(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gax())},
gax:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
E:function(a){var z,y,x
z=Math.sqrt(this.gax())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aU:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bY:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.b(new Float32Array(3))
z.p(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
G:function(a,b){var z,y
z=b.gaT()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
at:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
ao:function(a,b){var z,y
z=b.gaT()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
W:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
a3:function(a){var z=new T.b(new Float32Array(3))
z.q(this)
z.W(0,a)
return z},
R:function(a){var z=new T.b(new Float32Array(3))
z.q(this)
return z},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sF:function(a,b){this.a[2]=b
return b},
gU:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
u:{
H:function(a,b,c){var z=new T.b(new Float32Array(3))
z.p(a,b,c)
return z}}},x:{"^":"e;bF:a<",
X:function(a,b,c,d){var z=this.a
z[3]=d
z[2]=c
z[1]=b
z[0]=a},
q:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.d(z[0])+","+H.d(z[1])+","+H.d(z[2])+","+H.d(z[3])},
H:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.x){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.bc(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.x(z)
y.q(this)
x=b.gbF()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.x(z)
y.q(this)
x=b.gbF()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.a(z,b)
return z[b]},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
W:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
a3:function(a){var z=new T.x(new Float32Array(4))
z.q(this)
z.W(0,a)
return z},
R:function(a){var z=new T.x(new Float32Array(4))
z.q(this)
return z},
gU:function(a){return this.a[2]},
gZ:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gaA:function(a){return this.a[3]}}}],["","",,O,{"^":"",
er:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
z={}
y=document
x=new R.hQ(0,0,null,null,null,null)
x.d3(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fk(null,w)
y=J.eY(w,"webgl2",P.d9(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.R(P.cX('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.d(J.eZ(y))
if($.el>0)P.an("I: "+u)
J.eG(y,0,0,0,1)
J.aZ(y,2929)
J.aZ(y,2884)
y=new Float32Array(3)
u=D.fY(null)
t=D.ha(w)
s=new T.C(new Float32Array(16))
s.I()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.hl(25,10,0,0,new T.b(y),-0.02,u,t,s,new T.b(r),new T.b(q),new T.b(p),new T.b(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.C(new Float32Array(16))
y.I()
u=new T.C(new Float32Array(16))
u.I()
n=new G.hn(o,50,1,0.1,1000,y,u,new T.C(new Float32Array(16)),P.I(),"perspective",!1,!0)
n.bm()
y=H.y([],[A.dl])
m=new R.hA(w,n,null,v,y,17664,0,0,0,0,"main",!1,!0)
m.d1("main",v,null)
m.eg(null)
W.ai(window,"resize",m.gef(),!1,W.ad)
u=G.hC("main",v,$.$get$ex(),$.$get$ew())
t=[]
y.push(new A.dl(u,[n],t,"wireframe",!1,!0))
y=P.I()
l=new G.h4(y,"wire",!1,!0)
y.j(0,"cDepthTest",!0)
y.j(0,"cDepthWrite",!0)
y.j(0,"cBlendEquation",$.$get$bN())
y.j(0,"cStencilFunc",$.$get$dr())
s=new T.x(new Float32Array(4))
s.X(1,1,0,1)
y.j(0,"uColorAlpha",s)
s=new T.x(new Float32Array(4))
s.X(0,0,0,0.5)
y.j(0,"uColorAlpha2",s)
k=B.fN(2,1,!0)
k.ab()
s=G.aD("icosahedron",u,k)
y=new Float32Array(9)
r=new T.C(new Float32Array(16))
r.I()
q=new T.C(new Float32Array(16))
q.I()
p=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
h=new A.aL(l,s,[],new T.O(y),r,q,new T.b(p),new T.b(j),new T.b(i),new T.b(new Float32Array(3)),"sphere",!1,!0)
h.a4(0,0,0)
t.push(h)
k=B.fs(!0,1,0,1,0,1,1,1)
k.ab()
y=G.aD("cube",u,k)
s=new Float32Array(9)
r=new T.C(new Float32Array(16))
r.I()
q=new T.C(new Float32Array(16))
q.I()
p=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
g=new A.aL(l,y,[],new T.O(s),r,q,new T.b(p),new T.b(j),new T.b(i),new T.b(new Float32Array(3)),"cube",!1,!0)
g.a4(-5,0,-5)
t.push(g)
y=new T.b(new Float32Array(3))
y.p(-1,-1,1)
s=new T.b(new Float32Array(3))
s.p(1,-1,1)
r=new T.b(new Float32Array(3))
r.p(-1,1,1)
q=new T.b(new Float32Array(3))
q.p(-1,-1,-1)
p=new T.b(new Float32Array(3))
p.p(-1,1,-1)
j=new T.b(new Float32Array(3))
j.p(1,-1,-1)
i=new T.b(new Float32Array(3))
i.p(-1,1,-1)
f=new T.b(new Float32Array(3))
f.p(-1,1,1)
e=new T.b(new Float32Array(3))
e.p(1,-1,1)
d=new T.b(new Float32Array(3))
d.p(1,-1,-1)
c=new T.b(new Float32Array(3))
c.p(1,-1,1)
b=new T.b(new Float32Array(3))
b.p(-1,-1,1)
a=new T.b(new Float32Array(3))
a.p(-1,-1,-1)
a0=new T.b(new Float32Array(3))
a0.p(1,-1,-1)
a1=new T.b(new Float32Array(3))
a1.p(-1,-1,-1)
a2=new T.b(new Float32Array(3))
a2.p(-1,-1,1)
a3=new T.b(new Float32Array(3))
a3.p(-1,1,1)
a4=new T.b(new Float32Array(3))
a4.p(-1,1,-1)
a5=new T.j(new Float32Array(2))
a5.t(0,0)
a6=new T.j(new Float32Array(2))
a6.t(1,0)
a7=new T.j(new Float32Array(2))
a7.t(1,1)
a8=new T.j(new Float32Array(2))
a8.t(1,0)
a9=new T.j(new Float32Array(2))
a9.t(1,1)
b0=new T.j(new Float32Array(2))
b0.t(0,1)
b1=new T.j(new Float32Array(2))
b1.t(0,1)
b2=new T.j(new Float32Array(2))
b2.t(0,0)
b3=new T.j(new Float32Array(2))
b3.t(1,0)
b4=new T.j(new Float32Array(2))
b4.t(1,1)
b5=new T.j(new Float32Array(2))
b5.t(1,1)
b6=new T.j(new Float32Array(2))
b6.t(0,1)
b7=new T.j(new Float32Array(2))
b7.t(0,0)
b8=new T.j(new Float32Array(2))
b8.t(1,0)
b9=new T.j(new Float32Array(2))
b9.t(0,0)
c0=new T.j(new Float32Array(2))
c0.t(1,0)
c1=new T.j(new Float32Array(2))
c1.t(1,1)
c2=new T.j(new Float32Array(2))
c2.t(0,1)
k=new G.aC(!1,[],[],[],P.I())
k.T("aTexUV")
k.T("aNormal")
k.bf(2)
k.a6([y,s,r,q,p,j])
k.Y("aTexUV",[a5,a6,a7,a8,a9,b0])
k.ap(3)
k.a6([i,f,e,d,c,b,a,a0,a1,a2,a3,a4])
k.Y("aTexUV",[b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2])
k.bj()
k.ab()
y=G.aD("wedge",u,k)
s=new Float32Array(9)
r=new T.C(new Float32Array(16))
r.I()
q=new T.C(new Float32Array(16))
q.I()
p=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
c3=new A.aL(l,y,[],new T.O(s),r,q,new T.b(p),new T.b(j),new T.b(i),new T.b(new Float32Array(3)),"wedge",!1,!0)
c3.a4(0,-5,0)
t.push(c3)
k=B.fu(3,4,2,16)
k.ab()
y=G.aD("cylinder",u,k)
s=new Float32Array(9)
r=new T.C(new Float32Array(16))
r.I()
q=new T.C(new Float32Array(16))
q.I()
p=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
c4=new A.aL(l,y,[],new T.O(s),r,q,new T.b(p),new T.b(j),new T.b(i),new T.b(new Float32Array(3)),"cylinder",!1,!0)
c4.a4(5,0,-5)
t.push(c4)
y=new T.b(new Float32Array(3))
y.p(-2,-2,0)
s=new T.b(new Float32Array(3))
s.p(2,-2,0)
r=new T.b(new Float32Array(3))
r.p(2,2,0)
q=new T.b(new Float32Array(3))
q.p(-2,2,0)
p=new T.j(new Float32Array(2))
p.t(0,0)
j=new T.j(new Float32Array(2))
j.t(1,0)
i=new T.j(new Float32Array(2))
i.t(1,1)
f=new T.j(new Float32Array(2))
f.t(0,1)
c5=new T.b(new Float32Array(3))
c5.p(0,0,1)
k=new G.aC(!1,[],[],[],P.I())
k.T("aTexUV")
k.cS([y,s,r,q])
k.Y("aTexUV",[p,j,i,f])
k.T("aNormal")
k.aE("aNormal",[c5,c5,c5,c5])
k.ab()
y=G.aD("quad",u,k)
s=new Float32Array(9)
r=new T.C(new Float32Array(16))
r.I()
q=new T.C(new Float32Array(16))
q.I()
p=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
c6=new A.aL(l,y,[],new T.O(s),r,q,new T.b(p),new T.b(j),new T.b(i),new T.b(new Float32Array(3)),"quad",!1,!0)
c6.a4(-5,0,5)
t.push(c6)
k=B.hJ(!0,!0,1,2,3,1,128,16,0.4)
k.ab()
y=G.aD("torus",u,k)
u=new Float32Array(9)
s=new T.C(new Float32Array(16))
s.I()
r=new T.C(new Float32Array(16))
r.I()
q=new Float32Array(3)
p=new Float32Array(3)
j=new Float32Array(3)
c7=new A.aL(l,y,[],new T.O(u),s,r,new T.b(q),new T.b(p),new T.b(j),new T.b(new Float32Array(3)),"torus",!1,!0)
c7.a4(5,0,5)
t.push(c7)
z.a=0
new O.kk(z,o,l,m,x).$1(0)},
kk:{"^":"k:21;a,b,c,d,e",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aU(b2)
y.J(b2,z.a)
z.a=y.l(b2,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b9()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b9()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.A(0,37))y.go+=0.03
else if(v.A(0,39))y.go-=0.03
if(v.A(0,38))y.id+=0.03
else if(v.A(0,40))y.id-=0.03
if(v.A(0,33))y.fy*=0.99
else if(v.A(0,34))y.fy*=1.01
if(v.A(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.b9()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dS(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.a4(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.b(new Float32Array(3))
o.p(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
m=u.J(0,t)
m.E(0)
l=o.bY(m)
l.E(0)
k=m.bY(l)
k.E(0)
t=l.aU(u)
n=k.aU(u)
u=m.aU(u)
j=l.a
i=j[0]
h=k.a
g=h[0]
f=m.a
e=f[0]
d=j[1]
c=h[1]
b=f[1]
j=j[2]
h=h[2]
f=f[2]
v[15]=1
v[14]=-u
v[13]=-n
v[12]=-t
v[11]=0
v[10]=f
v[9]=h
v[8]=j
v[7]=0
v[6]=b
v[5]=c
v[4]=d
v[3]=0
v[2]=e
v[1]=g
v[0]=i
v[12]=r
v[13]=q
v[14]=p
i=y.f
g=i.a
g[0]=v[2]
g[1]=v[6]
g[2]=v[10]
y=-y.k1
a=Math.sqrt(i.gax())
r=g[0]/a
q=g[1]/a
p=g[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=r*r*a2+a0
y=p*a1
a4=r*q*a2-y
g=q*a1
a5=r*p*a2+g
a6=q*r*a2+y
a7=q*q*a2+a0
y=r*a1
a8=q*p*a2-y
a9=p*r*a2-g
b0=p*q*a2+y
b1=p*p*a2+a0
y=v[0]
g=v[4]
i=v[8]
e=v[1]
d=v[5]
c=v[9]
b=v[2]
j=v[6]
h=v[10]
f=v[3]
t=v[7]
n=v[11]
v[0]=y*a3+g*a6+i*a9
v[1]=e*a3+d*a6+c*a9
v[2]=b*a3+j*a6+h*a9
v[3]=f*a3+t*a6+n*a9
v[4]=y*a4+g*a7+i*b0
v[5]=e*a4+d*a7+c*b0
v[6]=b*a4+j*a7+h*b0
v[7]=f*a4+t*a7+n*b0
v[8]=y*a5+g*a8+i*b1
v[9]=e*a5+d*a8+c*b1
v[10]=b*a5+j*a8+h*b1
v[11]=f*a5+t*a8+n*b1
w.c.aj(0)
w.b.aj(0)
x.e=0
x.d=0
x.f=0
x.c.aj(0)
x.b.aj(0)
y=$.$get$em().checked===!0?$.$get$bN():$.$get$cH()
this.c.d.j(0,"cBlendEquation",y)
this.d.cU()
C.a5.gdK(window).cf(this)
this.e.d6(z.a)}}},1]]
setupProgram(dart,0,0)
J.q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d6.prototype
return J.d5.prototype}if(typeof a=="string")return J.aI.prototype
if(a==null)return J.fV.prototype
if(typeof a=="boolean")return J.fU.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.e)return a
return J.ba(a)}
J.k4=function(a){if(typeof a=="number")return J.aH.prototype
if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.e)return a
return J.ba(a)}
J.ab=function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.e)return a
return J.ba(a)}
J.b9=function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.e)return a
return J.ba(a)}
J.aU=function(a){if(typeof a=="number")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.b7.prototype
return a}
J.k5=function(a){if(typeof a=="number")return J.aH.prototype
if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.b7.prototype
return a}
J.en=function(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.b7.prototype
return a}
J.f=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.e)return a
return J.ba(a)}
J.ax=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.k4(a).l(a,b)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).H(a,b)}
J.S=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aU(a).am(a,b)}
J.aX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aU(a).a8(a,b)}
J.ey=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aU(a).J(a,b)}
J.aY=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ki(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ab(a).h(a,b)}
J.ez=function(a,b,c,d){return J.f(a).du(a,b,c,d)}
J.cm=function(a,b){return J.f(a).bG(a,b)}
J.eA=function(a,b,c,d){return J.f(a).bH(a,b,c,d)}
J.cn=function(a,b,c){return J.f(a).bJ(a,b,c)}
J.eB=function(a,b){return J.f(a).dM(a,b)}
J.bG=function(a,b,c){return J.f(a).bK(a,b,c)}
J.eC=function(a,b,c){return J.f(a).bM(a,b,c)}
J.co=function(a,b,c){return J.f(a).bN(a,b,c)}
J.be=function(a,b){return J.f(a).dP(a,b)}
J.eD=function(a,b){return J.f(a).bO(a,b)}
J.eE=function(a,b,c){return J.f(a).bP(a,b,c)}
J.cp=function(a,b,c,d){return J.f(a).bQ(a,b,c,d)}
J.eF=function(a,b){return J.b9(a).bS(a,b)}
J.eG=function(a,b,c,d,e){return J.f(a).bT(a,b,c,d,e)}
J.cq=function(a){return J.f(a).R(a)}
J.cr=function(a,b){return J.en(a).dT(a,b)}
J.eH=function(a,b){return J.k5(a).a_(a,b)}
J.bH=function(a,b,c){return J.ab(a).dV(a,b,c)}
J.bI=function(a){return J.f(a).bV(a)}
J.eI=function(a){return J.f(a).bW(a)}
J.eJ=function(a){return J.f(a).dY(a)}
J.eK=function(a,b){return J.f(a).bZ(a,b)}
J.bJ=function(a,b){return J.f(a).c_(a,b)}
J.eL=function(a,b,c,d){return J.f(a).c0(a,b,c,d)}
J.eM=function(a,b,c,d,e){return J.f(a).e_(a,b,c,d,e)}
J.eN=function(a,b,c,d,e){return J.f(a).c1(a,b,c,d,e)}
J.eO=function(a,b,c,d,e,f){return J.f(a).e0(a,b,c,d,e,f)}
J.cs=function(a,b){return J.b9(a).w(a,b)}
J.aZ=function(a,b){return J.f(a).c2(a,b)}
J.eP=function(a,b){return J.f(a).c3(a,b)}
J.eQ=function(a){return J.f(a).e1(a)}
J.ct=function(a,b){return J.b9(a).B(a,b)}
J.cu=function(a){return J.f(a).gdL(a)}
J.eR=function(a){return J.f(a).gaV(a)}
J.ay=function(a){return J.f(a).gS(a)}
J.a4=function(a){return J.q(a).gC(a)}
J.b_=function(a){return J.b9(a).gN(a)}
J.a5=function(a){return J.ab(a).gi(a)}
J.eS=function(a){return J.f(a).gcb(a)}
J.eT=function(a){return J.f(a).gb0(a)}
J.cv=function(a){return J.f(a).ga5(a)}
J.eU=function(a){return J.f(a).gek(a)}
J.eV=function(a){return J.f(a).gcj(a)}
J.eW=function(a){return J.f(a).gaA(a)}
J.cw=function(a){return J.f(a).ges(a)}
J.bK=function(a){return J.f(a).gm(a)}
J.bL=function(a){return J.f(a).gn(a)}
J.cx=function(a){return J.f(a).gF(a)}
J.eX=function(a){return J.f(a).b3(a)}
J.eY=function(a,b,c){return J.f(a).cB(a,b,c)}
J.eZ=function(a){return J.f(a).aB(a)}
J.f_=function(a,b){return J.f(a).b4(a,b)}
J.f0=function(a,b,c){return J.f(a).b5(a,b,c)}
J.cy=function(a,b,c){return J.f(a).b8(a,b,c)}
J.f1=function(a,b){return J.f(a).c8(a,b)}
J.cz=function(a){return J.b9(a).ee(a)}
J.f2=function(a,b){return J.f(a).sav(a,b)}
J.f3=function(a,b,c,d){return J.f(a).bd(a,b,c,d)}
J.cA=function(a){return J.aU(a).el(a)}
J.f4=function(a){return J.en(a).en(a)}
J.az=function(a){return J.q(a).k(a)}
J.f5=function(a,b,c,d){return J.f(a).ep(a,b,c,d)}
J.f6=function(a,b,c){return J.f(a).ck(a,b,c)}
J.f7=function(a,b,c){return J.f(a).cl(a,b,c)}
J.bM=function(a,b,c){return J.f(a).cm(a,b,c)}
J.f8=function(a,b,c){return J.f(a).cn(a,b,c)}
J.cB=function(a,b,c){return J.f(a).co(a,b,c)}
J.cC=function(a,b,c){return J.f(a).cp(a,b,c)}
J.cD=function(a,b,c){return J.f(a).cq(a,b,c)}
J.cE=function(a,b,c,d){return J.f(a).cr(a,b,c,d)}
J.cF=function(a,b,c,d){return J.f(a).cs(a,b,c,d)}
J.f9=function(a,b){return J.f(a).cu(a,b)}
J.fa=function(a,b,c){return J.f(a).eq(a,b,c)}
J.fb=function(a,b,c,d,e,f,g){return J.f(a).cv(a,b,c,d,e,f,g)}
J.fc=function(a,b,c,d,e){return J.f(a).cz(a,b,c,d,e)}
I.av=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bO.prototype
C.n=W.fq.prototype
C.C=W.fy.prototype
C.D=J.h.prototype
C.b=J.aF.prototype
C.t=J.d5.prototype
C.c=J.d6.prototype
C.a=J.aH.prototype
C.i=J.aI.prototype
C.K=J.aJ.prototype
C.O=H.hf.prototype
C.P=W.hh.prototype
C.w=J.ho.prototype
C.B=W.i_.prototype
C.q=J.b7.prototype
C.a5=W.i8.prototype
C.f=new P.j3()
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=H.y(I.av(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.M=I.av(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.N=I.av([])
C.o=H.y(I.av(["bind","if","ref","repeat","syntax"]),[P.n])
C.p=H.y(I.av(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.Q=new G.w("vec3","vertex btangents",0)
C.d=new G.w("vec3","",0)
C.R=new G.w("vec4","delta from light",0)
C.m=new G.w("","",0)
C.x=new G.w("vec3","vertex coordinates",0)
C.S=new G.w("vec3","vertex binormals",0)
C.y=new G.w("vec4","for wireframe",0)
C.T=new G.w("vec4","per vertex color",0)
C.U=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.W=new G.w("mat4","",4)
C.V=new G.w("mat4","",128)
C.e=new G.w("float","",0)
C.X=new G.w("float","",4)
C.Y=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.Z=new G.w("float","for bump maps",0)
C.a_=new G.w("vec2","texture uvs",0)
C.a0=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.a1=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.a2=new G.w("vec3","vertex normals",0)
C.a3=new G.w("sampler2DShadow","",0)
C.z=new G.w("vec3","per vertex color",0)
C.A=new G.w("mat3","",0)
C.a4=new G.w("vec3","vertex tangents",0)
$.a_=0
$.aA=null
$.cI=null
$.ep=null
$.ef=null
$.et=null
$.bB=null
$.bC=null
$.cj=null
$.ar=null
$.aR=null
$.aS=null
$.cc=!1
$.z=C.f
$.a6=null
$.bT=null
$.cV=null
$.cU=null
$.cS=null
$.cR=null
$.cQ=null
$.cP=null
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
I.$lazy(y,x,w)}})(["cN","$get$cN",function(){return H.eo("_$dart_dartClosure")},"bX","$get$bX",function(){return H.eo("_$dart_js")},"dB","$get$dB",function(){return H.a1(H.bx({
toString:function(){return"$receiver$"}}))},"dC","$get$dC",function(){return H.a1(H.bx({$method$:null,
toString:function(){return"$receiver$"}}))},"dD","$get$dD",function(){return H.a1(H.bx(null))},"dE","$get$dE",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dI","$get$dI",function(){return H.a1(H.bx(void 0))},"dJ","$get$dJ",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dG","$get$dG",function(){return H.a1(H.dH(null))},"dF","$get$dF",function(){return H.a1(function(){try{null.$method$}catch(z){return z.message}}())},"dL","$get$dL",function(){return H.a1(H.dH(void 0))},"dK","$get$dK",function(){return H.a1(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c7","$get$c7",function(){return P.ic()},"d0","$get$d0",function(){var z,y
z=P.b3
y=new P.aj(0,P.ia(),null,[z])
y.dc(null,z)
return y},"aT","$get$aT",function(){return[]},"cM","$get$cM",function(){return{}},"dW","$get$dW",function(){return P.c_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"c9","$get$c9",function(){return P.I()},"dr","$get$dr",function(){return new G.dz(1281,0,4294967295)},"bN","$get$bN",function(){return G.dy(1281,1281,1281)},"cH","$get$cH",function(){return G.dy(32774,770,771)},"Y","$get$Y",function(){return P.d9(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.T,"aPosition",C.x,"aTexUV",C.a_,"aNormal",C.a2,"aBinormal",C.S,"aCenter",C.y,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a4,"aBitangent",C.Q,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.R,"vCenter",C.y,"vDepth",C.Y,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a3,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a1,"uAnimationTable",C.h,"uTime",C.a0,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.V,"uLightDescs",C.W,"uLightCount",C.e,"uLightTypes",C.X,"uBumpScale",C.Z,"uNormalScale",C.U])},"ex","$get$ex",function(){var z=G.dn("WireframeV")
z.cQ(["aPosition","aCenter"])
z.bh(["vCenter"])
z.bg(["uPerspectiveViewMatrix","uModelMatrix"])
z.b=z.bn(!0,["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vCenter = aCenter;"],null)
return z},"ew","$get$ew",function(){var z=G.dn("WireframeF")
z.bh(["vCenter"])
z.bg(["uColorAlpha","uColorAlpha2"])
z.b=z.bn(!1,["// the 3 vertices of a Face3 (w == 0) have the centers:\n// (1, 0, 0, 0)) \n// (0, 1, 0, 0)\n// (0, 0, 1, 0)\nfloat edgeFactorFace3(vec3 center) {\n    vec3 d = fwidth(center);\n    vec3 a3 = smoothstep(vec3(0.0), d * 1.5, center);\n    return min(min(a3.x, a3.y), a3.z);\n}\n\n// the 4 vertices of a Face4 (w == 1) have the centers:\n// (1, 0, 0, 1) \n// (1, 1, 0, 1)\n// (0, 1, 0, 1)\n// (0, 0, 0, 1)\nfloat edgeFactorFace4(vec2 center) {\n    vec2 d = fwidth(center);\n    vec2 a2 = smoothstep(vec2(0.0), d * 1.5, center);\n    return min(a2.x, a2.y);\n}\n\nvoid main() {\n    float q;\n    if (vCenter.w == 0.0) {\n        q = edgeFactorFace3(vCenter.xyz);\n    } else {\n        q = min(edgeFactorFace4(vCenter.xy),\n                edgeFactorFace4(1.0 - vCenter.xy));\n    }\n    oFragColor = mix(uColorAlpha, uColorAlpha2, q);\n}\n"],null)
return z},"dS","$get$dS",function(){return[T.H(0,0,1),T.H(0,0,-1),T.H(0,1,0),T.H(0,-1,0),T.H(1,0,0),T.H(-1,0,0)]},"d1","$get$d1",function(){return[G.F(0,11,5),G.F(0,5,1),G.F(0,1,7),G.F(0,7,10),G.F(0,10,11),G.F(1,5,9),G.F(5,11,4),G.F(11,10,2),G.F(10,7,6),G.F(7,1,8),G.F(3,9,4),G.F(3,4,2),G.F(3,2,6),G.F(3,6,8),G.F(3,8,9),G.F(4,9,5),G.F(2,4,11),G.F(6,2,10),G.F(8,6,7),G.F(9,8,1)]},"eu","$get$eu",function(){return(1+P.ko(5))/2},"d2","$get$d2",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$eu()
y=T.H(-1,z,0)
y.E(0)
x=T.H(1,z,0)
x.E(0)
if(typeof z!=="number")return z.ev()
w=T.H(-1,-z,0)
w.E(0)
v=T.H(1,-z,0)
v.E(0)
u=T.H(0,-1,z)
u.E(0)
t=T.H(0,1,z)
t.E(0)
s=T.H(0,-1,-z)
s.E(0)
r=T.H(0,1,-z)
r.E(0)
q=T.H(z,0,-1)
q.E(0)
p=T.H(z,0,1)
p.E(0)
o=T.H(-z,0,-1)
o.E(0)
z=T.H(-z,0,1)
z.E(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]},"em","$get$em",function(){return H.a3(W.k1().querySelector("#opaque"),"$isd3")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.P]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.n,args:[P.J]},{func:1,args:[W.bm]},{func:1,ret:P.ce,args:[W.ao,P.n,P.n,W.c8]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.e],opt:[P.aO]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aO]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[W.ad]},{func:1,v:true,args:[P.al,T.b]},{func:1,args:[W.aP]},{func:1,args:[P.J,P.e]},{func:1,v:true,args:[P.aV]},{func:1,ret:P.J,args:[,,]}]
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
if(x==y)H.kq(d||a)
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
Isolate.av=a.av
Isolate.at=a.at
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
if(typeof dartMainRunner==="function")dartMainRunner(O.er,[])
else O.er([])})})()
//# sourceMappingURL=wireframe.dart.js.map
