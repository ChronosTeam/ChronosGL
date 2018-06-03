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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.ca"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.ca(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ao=function(){}
var dart=[["","",,H,{"^":"",lq:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
ce:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b2:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cd==null){H.k5()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dF("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bS()]
if(v!=null)return v
v=H.k9(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$bS(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
f:{"^":"c;",
F:function(a,b){return a===b},
gw:function(a){return H.aE(a)},
k:["cF",function(a){return"Instance of '"+H.aF(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fN:{"^":"f;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isc9:1},
fO:{"^":"f;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isaX:1},
bT:{"^":"f;",
gw:function(a){return 0},
k:["cH",function(a){return String(a)}]},
hh:{"^":"bT;"},
b0:{"^":"bT;"},
aD:{"^":"bT;",
k:function(a){var z=a[$.$get$cH()]
return z==null?this.cH(a):J.av(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
az:{"^":"f;$ti",
N:function(a,b){var z,y
if(!!a.fixed$length)H.T(P.p("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y)a.push(b[y])},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.G(a))}},
a9:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
b4:function(a,b){return H.c0(a,b,null,H.A(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
K:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.T(P.p("setRange"))
P.dc(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$ish){x=e
w=d}else{w=y.b4(d,e).cb(0,!1)
x=0}y=J.a6(w)
if(x+z>y.gi(w))throw H.a(H.cV())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
M:function(a,b,c,d){return this.K(a,b,c,d,0)},
bB:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.G(a))}return!1},
cA:function(a,b){if(!!a.immutable$list)H.T(P.p("sort"))
H.hC(a,J.jE())},
ao:function(a){return this.cA(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
k:function(a){return P.bR(a,"[","]")},
gH:function(a){return new J.f8(a,a.length,0,null,[H.A(a,0)])},
gw:function(a){return H.aE(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.T(P.p("set length"))
if(b<0)throw H.a(P.a1(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a5(a,b))
if(b>=a.length||b<0)throw H.a(H.a5(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.T(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a5(a,b))
if(b>=a.length||b<0)throw H.a(H.a5(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.b.n(a.length,C.b.gi(b))
y=H.y([],[H.A(a,0)])
this.si(y,z)
this.M(y,0,a.length,a)
this.M(y,a.length,z,b)
return y},
$ism:1,
$asm:I.ao,
$ish:1,
p:{
aA:function(a){a.fixed$length=Array
return a},
lo:[function(a,b){return J.ev(a,b)},"$2","jE",8,0,22]}},
lp:{"^":"az;$ti"},
f8:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aB:{"^":"f;",
R:function(a,b){var z
if(typeof b!=="number")throw H.a(H.Y(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gai(b)
if(this.gai(a)===z)return 0
if(this.gai(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gai:function(a){return a===0?1/a<0:a<0},
eh:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
dL:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".ceil()"))},
dM:function(a,b,c){if(this.R(b,c)>0)throw H.a(H.Y(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
ej:function(a,b){var z
if(b>20)throw H.a(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gai(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a+b},
I:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a-b},
cK:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bu(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.bu(a,b)},
bu:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bs:function(a,b){var z
if(a>0)z=this.du(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
du:function(a,b){return b>31?0:a>>>b},
a3:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a<b},
ab:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a>b},
$isah:1,
$isaN:1},
cX:{"^":"aB;",$isB:1},
cW:{"^":"aB;"},
aC:{"^":"f;",
dN:function(a,b){if(b>=a.length)H.T(H.a5(a,b))
return a.charCodeAt(b)},
bl:function(a,b){if(b>=a.length)throw H.a(H.a5(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.f7(b,null,null))
return a+b},
cC:function(a,b,c){var z
if(c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cB:function(a,b){return this.cC(a,b,0)},
b7:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.T(H.Y(c))
if(b<0)throw H.a(P.bg(b,null,null))
if(typeof c!=="number")return H.I(c)
if(b>c)throw H.a(P.bg(b,null,null))
if(c>a.length)throw H.a(P.bg(c,null,null))
return a.substring(b,c)},
cD:function(a,b){return this.b7(a,b,null)},
ei:function(a){return a.toLowerCase()},
dP:function(a,b,c){if(c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
return H.ke(a,b,c)},
R:function(a,b){var z
if(typeof b!=="string")throw H.a(H.Y(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gw:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a5(a,b))
return a[b]},
$ism:1,
$asm:I.ao,
$isl:1}}],["","",,H,{"^":"",
fK:function(){return new P.bk("No element")},
fL:function(){return new P.bk("Too many elements")},
cV:function(){return new P.bk("Too few elements")},
hC:function(a,b){H.aZ(a,0,J.a_(a)-1,b)},
aZ:function(a,b,c,d){if(c-b<=32)H.hB(a,b,c,d)
else H.hA(a,b,c,d)},
hB:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a6(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.K(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a0(c-b+1,6)
y=b+z
x=c-z
w=C.b.a0(b+c,2)
v=w-z
u=w+z
t=J.a6(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.K(d.$2(s,r),0)){n=r
r=s
s=n}if(J.K(d.$2(p,o),0)){n=o
o=p
p=n}if(J.K(d.$2(s,q),0)){n=q
q=s
s=n}if(J.K(d.$2(r,q),0)){n=q
q=r
r=n}if(J.K(d.$2(s,p),0)){n=p
p=s
s=n}if(J.K(d.$2(q,p),0)){n=p
p=q
q=n}if(J.K(d.$2(r,o),0)){n=o
o=r
r=n}if(J.K(d.$2(r,q),0)){n=q
q=r
r=n}if(J.K(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.F(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.F(i,0))continue
if(h.a3(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aM(i)
if(h.ab(i,0)){--l
continue}else{g=l-1
if(h.a3(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aP(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.K(d.$2(j,p),0))for(;!0;)if(J.K(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aP(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aZ(a,b,m-2,d)
H.aZ(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.F(d.$2(t.h(a,m),r),0);)++m
for(;J.F(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.F(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.F(d.$2(j,p),0))for(;!0;)if(J.F(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aP(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aZ(a,m,l,d)}else H.aZ(a,m,l,d)},
bN:{"^":"bb;$ti"},
bd:{"^":"bN;$ti",
gH:function(a){return new H.d1(this,this.gi(this),0,null,[H.cc(this,"bd",0)])},
v:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.G(this))}},
aR:function(a,b){return this.cG(0,b)}},
hO:{"^":"bd;a,b,c,$ti",
cY:function(a,b,c,d){},
gde:function(){var z=J.a_(this.a)
return z},
gdv:function(){var z,y
z=J.a_(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a_(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdv()+b
if(b>=0){y=this.gde()
if(typeof y!=="number")return H.I(y)
y=z>=y}else y=!0
if(y)throw H.a(P.w(b,this,"index",null,null))
return J.cl(this.a,z)},
cb:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a6(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.y(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.G(this))}return t},
p:{
c0:function(a,b,c,d){var z=new H.hO(a,b,c,[d])
z.cY(a,b,c,d)
return z}}},
d1:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a6(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.G(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
fX:{"^":"bd;a,b,$ti",
gi:function(a){return J.a_(this.a)},
q:function(a,b){return this.b.$1(J.cl(this.a,b))},
$asbN:function(a,b){return[b]},
$asbd:function(a,b){return[b]},
$asbb:function(a,b){return[b]}},
dH:{"^":"bb;a,b,$ti",
gH:function(a){return new H.hY(J.aT(this.a),this.b,this.$ti)}},
hY:{"^":"fM;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z))===!0)return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
b9:{"^":"c;$ti"}}],["","",,H,{"^":"",
jY:function(a){return init.types[a]},
k8:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isn},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.av(a)
if(typeof z!=="string")throw H.a(H.Y(a))
return z},
aE:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aF:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.o(a).$isb0){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bl(w,0)===36)w=C.i.cD(w,1)
r=H.bz(H.aq(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
D:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ho:function(a){return a.b?H.D(a).getUTCFullYear()+0:H.D(a).getFullYear()+0},
hm:function(a){return a.b?H.D(a).getUTCMonth()+1:H.D(a).getMonth()+1},
hi:function(a){return a.b?H.D(a).getUTCDate()+0:H.D(a).getDate()+0},
hj:function(a){return a.b?H.D(a).getUTCHours()+0:H.D(a).getHours()+0},
hl:function(a){return a.b?H.D(a).getUTCMinutes()+0:H.D(a).getMinutes()+0},
hn:function(a){return a.b?H.D(a).getUTCSeconds()+0:H.D(a).getSeconds()+0},
hk:function(a){return a.b?H.D(a).getUTCMilliseconds()+0:H.D(a).getMilliseconds()+0},
I:function(a){throw H.a(H.Y(a))},
d:function(a,b){if(a==null)J.a_(a)
throw H.a(H.a5(a,b))},
a5:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ak(!0,b,"index",null)
z=J.a_(a)
if(!(b<0)){if(typeof z!=="number")return H.I(z)
y=b>=z}else y=!0
if(y)return P.w(b,a,"index",null,z)
return P.bg(b,"index",null)},
Y:function(a){return new P.ak(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.d9()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.en})
z.name=""}else z.toString=H.en
return z},
en:function(){return J.av(this.dartException)},
T:function(a){throw H.a(a)},
E:function(a){throw H.a(P.G(a))},
O:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bs(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bU(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.d8(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dr()
u=$.$get$ds()
t=$.$get$dt()
s=$.$get$du()
r=$.$get$dy()
q=$.$get$dz()
p=$.$get$dw()
$.$get$dv()
o=$.$get$dB()
n=$.$get$dA()
m=v.O(y)
if(m!=null)return z.$1(H.bU(y,m))
else{m=u.O(y)
if(m!=null){m.method="call"
return z.$1(H.bU(y,m))}else{m=t.O(y)
if(m==null){m=s.O(y)
if(m==null){m=r.O(y)
if(m==null){m=q.O(y)
if(m==null){m=p.O(y)
if(m==null){m=s.O(y)
if(m==null){m=o.O(y)
if(m==null){m=n.O(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.d8(y,m))}}return z.$1(new H.hV(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dg()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ak(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dg()
return a},
ai:function(a){var z
if(a==null)return new H.dX(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dX(a,null)},
jU:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
k7:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cR("Unsupported number of arguments for wrapped closure"))},
a4:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k7)
a.$identity=z
return z},
fj:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$ish){z.$reflectionInfo=c
x=H.hq(z).r}else x=c
w=d?Object.create(new H.hD().constructor.prototype):Object.create(new H.bK(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.U
$.U=J.at(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cF(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.jY,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cD:H.bL
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cF(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fg:function(a,b,c,d){var z=H.bL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cF:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fi(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fg(y,!w,z,b)
if(y===0){w=$.U
$.U=J.at(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aw
if(v==null){v=H.b6("self")
$.aw=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.U
$.U=J.at(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aw
if(v==null){v=H.b6("self")
$.aw=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fh:function(a,b,c,d){var z,y
z=H.bL
y=H.cD
switch(b?-1:a){case 0:throw H.a(H.hu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fi:function(a,b){var z,y,x,w,v,u,t,s
z=$.aw
if(z==null){z=H.b6("self")
$.aw=z}y=$.cC
if(y==null){y=H.b6("receiver")
$.cC=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fh(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.U
$.U=J.at(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.U
$.U=J.at(y,1)
return new Function(z+H.b(y)+"}")()},
ca:function(a,b,c,d,e,f){var z,y
z=J.aA(b)
y=!!J.o(c).$ish?J.aA(c):c
return H.fj(a,z,y,!!d,e,f)},
kc:function(a,b){var z=J.a6(b)
throw H.a(H.cE(a,z.b7(b,3,z.gi(b))))},
a7:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.kc(a,b)},
cb:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
ea:function(a,b){var z,y
if(a==null)return!1
z=H.cb(J.o(a))
if(z==null)y=!1
else y=H.eh(z,b)
return y},
jM:function(a){var z
if(a instanceof H.i){z=H.cb(J.o(a))
if(z!=null)return H.cf(z,null)
return"Closure"}return H.aF(a)},
kf:function(a){throw H.a(new P.fn(a))},
ed:function(a){return init.getIsolateTag(a)},
y:function(a,b){a.$ti=b
return a},
aq:function(a){if(a==null)return
return a.$ti},
mO:function(a,b,c){return H.aO(a["$as"+H.b(c)],H.aq(b))},
ap:function(a,b,c,d){var z=H.aO(a["$as"+H.b(c)],H.aq(b))
return z==null?null:z[d]},
cc:function(a,b,c){var z=H.aO(a["$as"+H.b(b)],H.aq(a))
return z==null?null:z[c]},
A:function(a,b){var z=H.aq(a)
return z==null?null:z[b]},
cf:function(a,b){var z=H.as(a,b)
return z},
as:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bz(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.as(z,b)
return H.jD(a,b)}return"unknown-reified-type"},
jD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.as(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.as(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.as(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jT(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.as(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bz:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c_("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.as(u,c)}return w?"":"<"+z.k(0)+">"},
jX:function(a){var z,y,x
if(a instanceof H.i){z=H.cb(J.o(a))
if(z!=null)return H.cf(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bz(a.$ti,0,null)
return y+x},
aO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bu:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aq(a)
y=J.o(a)
if(y[b]==null)return!1
return H.e8(H.aO(y[d],z),c)},
b3:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bu(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bz(c,0,null)
throw H.a(H.cE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
e8:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.J(a[y],b[y]))return!1
return!0},
mM:function(a,b,c){return a.apply(b,H.aO(J.o(b)["$as"+H.b(c)],H.aq(b)))},
J:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aX")return!0
if('func' in b)return H.eh(a,b)
if('func' in a)return b.builtin$cls==="lg"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cf(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.e8(H.aO(u,z),x)},
e7:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.J(z,v)||H.J(v,z)))return!1}return!0},
jN:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aA(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.J(v,u)||H.J(u,v)))return!1}return!0},
eh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.J(z,y)||H.J(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.e7(x,w,!1))return!1
if(!H.e7(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.J(o,n)||H.J(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.J(o,n)||H.J(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.J(o,n)||H.J(n,o)))return!1}}return H.jN(a.named,b.named)},
mN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
k9:function(a){var z,y,x,w,v,u
z=$.ee.$1(a)
y=$.bv[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.by[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.e6.$2(a,z)
if(z!=null){y=$.bv[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.by[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bA(x)
$.bv[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.by[z]=x
return x}if(v==="-"){u=H.bA(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ej(a,x)
if(v==="*")throw H.a(P.dF(z))
if(init.leafTags[z]===true){u=H.bA(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ej(a,x)},
ej:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ce(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bA:function(a){return J.ce(a,!1,null,!!a.$isn)},
kb:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bA(z)
else return J.ce(z,c,null,null)},
k5:function(){if(!0===$.cd)return
$.cd=!0
H.k6()},
k6:function(){var z,y,x,w,v,u,t,s
$.bv=Object.create(null)
$.by=Object.create(null)
H.k1()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.em.$1(v)
if(u!=null){t=H.kb(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k1:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.an(C.H,H.an(C.M,H.an(C.v,H.an(C.v,H.an(C.L,H.an(C.I,H.an(C.J(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ee=new H.k2(v)
$.e6=new H.k3(u)
$.em=new H.k4(t)},
an:function(a,b){return a(b)||b},
ke:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hp:{"^":"c;a,b,c,d,e,f,r,x",p:{
hq:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aA(z)
y=z[0]
x=z[1]
return new H.hp(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hT:{"^":"c;a,b,c,d,e,f",
O:function(a){var z,y,x
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
W:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dx:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hc:{"^":"C;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
d8:function(a,b){return new H.hc(a,b==null?null:b.method)}}},
fP:{"^":"C;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
bU:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fP(a,y,z?null:b.receiver)}}},
hV:{"^":"C;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kg:{"^":"i:0;a",
$1:function(a){if(!!J.o(a).$isC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dX:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaG:1},
i:{"^":"c;",
k:function(a){return"Closure '"+H.aF(this).trim()+"'"},
gct:function(){return this},
gct:function(){return this}},
dk:{"^":"i;"},
hD:{"^":"dk;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bK:{"^":"dk;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bK))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.aE(this.a)
else y=typeof z!=="object"?J.Z(z):H.aE(z)
return(y^H.aE(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aF(z)+"'")},
p:{
bL:function(a){return a.a},
cD:function(a){return a.c},
b6:function(a){var z,y,x,w,v
z=new H.bK("self","target","receiver","name")
y=J.aA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fe:{"^":"C;a",
k:function(a){return this.a},
p:{
cE:function(a,b){return new H.fe("CastError: "+H.b(P.bP(a))+": type '"+H.jM(a)+"' is not a subtype of type '"+b+"'")}}},
ht:{"^":"C;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hu:function(a){return new H.ht(a)}}},
dC:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gw:function(a){return J.Z(this.a)},
F:function(a,b){if(b==null)return!1
return b instanceof H.dC&&J.F(this.a,b.a)}},
cY:{"^":"bX;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gJ:function(a){return new H.fV(this,[H.A(this,0)])},
ag:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bn(y,b)}else return this.e3(b)},
e3:function(a){var z=this.d
if(z==null)return!1
return this.aI(this.az(z,J.Z(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ad(z,b)
x=y==null?null:y.ga8()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ad(w,b)
x=y==null?null:y.ga8()
return x}else return this.e4(b)},
e4:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.az(z,J.Z(a)&0x3ffffff)
x=this.aI(y,a)
if(x<0)return
return y[x].ga8()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aC()
this.b=z}this.bg(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aC()
this.c=y}this.bg(y,b,c)}else{x=this.d
if(x==null){x=this.aC()
this.d=x}w=J.Z(b)&0x3ffffff
v=this.az(x,w)
if(v==null)this.aG(x,w,[this.at(b,c)])
else{u=this.aI(v,b)
if(u>=0)v[u].sa8(c)
else v.push(this.at(b,c))}}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.G(this))
z=z.c}},
bg:function(a,b,c){var z=this.ad(a,b)
if(z==null)this.aG(a,b,this.at(b,c))
else z.sa8(c)},
bh:function(){this.r=this.r+1&67108863},
at:function(a,b){var z,y
z=new H.fU(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bh()
return z},
aI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].ge2(),b))return y
return-1},
k:function(a){return P.d2(this)},
ad:function(a,b){return a[b]},
az:function(a,b){return a[b]},
aG:function(a,b,c){a[b]=c},
dc:function(a,b){delete a[b]},
bn:function(a,b){return this.ad(a,b)!=null},
aC:function(){var z=Object.create(null)
this.aG(z,"<non-identifier-key>",z)
this.dc(z,"<non-identifier-key>")
return z}},
fU:{"^":"c;e2:a<,a8:b@,c,d"},
fV:{"^":"bN;a,$ti",
gi:function(a){return this.a.a},
gH:function(a){var z,y
z=this.a
y=new H.a9(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.G(z))
y=y.c}}},
a9:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.G(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
k2:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
k3:{"^":"i:10;a",
$2:function(a,b){return this.a(a,b)}},
k4:{"^":"i:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
jT:function(a){return J.aA(H.y(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
br:function(a){var z,y,x
if(!!J.o(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
X:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a5(b,a))},
h8:{"^":"f;",
dh:function(a,b,c,d){var z=P.a1(b,0,c,d,null)
throw H.a(z)},
bk:function(a,b,c,d){if(b>>>0!==b||b>c)this.dh(a,b,c,d)},
"%":"DataView;ArrayBufferView;bY|dR|dS|d5|dT|dU|aa"},
bY:{"^":"h8;",
gi:function(a){return a.length},
dt:function(a,b,c,d,e){var z,y,x
z=a.length
this.bk(a,b,z,"start")
this.bk(a,c,z,"end")
if(b>c)throw H.a(P.a1(b,0,c,null,null))
y=c-b
x=d.length
if(x-e<y)throw H.a(P.bl("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$ism:1,
$asm:I.ao,
$isn:1,
$asn:I.ao},
d5:{"^":"dS;",
h:function(a,b){H.X(b,a,a.length)
return a[b]},
j:function(a,b,c){H.X(b,a,a.length)
a[b]=c},
K:function(a,b,c,d,e){this.dt(a,b,c,d,e)
return},
M:function(a,b,c,d){return this.K(a,b,c,d,0)},
$asb9:function(){return[P.ah]},
$asj:function(){return[P.ah]},
$ish:1,
$ash:function(){return[P.ah]},
"%":"Float64Array"},
aa:{"^":"dU;",
j:function(a,b,c){H.X(b,a,a.length)
a[b]=c},
K:function(a,b,c,d,e){this.cI(a,b,c,d,e)},
M:function(a,b,c,d){return this.K(a,b,c,d,0)},
$asb9:function(){return[P.B]},
$asj:function(){return[P.B]},
$ish:1,
$ash:function(){return[P.B]}},
h7:{"^":"d5;",$isbQ:1,"%":"Float32Array"},
lH:{"^":"aa;",
h:function(a,b){H.X(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lI:{"^":"aa;",
h:function(a,b){H.X(b,a,a.length)
return a[b]},
$isfI:1,
"%":"Int32Array"},
lJ:{"^":"aa;",
h:function(a,b){H.X(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lK:{"^":"aa;",
h:function(a,b){H.X(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lL:{"^":"aa;",
h:function(a,b){H.X(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lM:{"^":"aa;",
gi:function(a){return a.length},
h:function(a,b){H.X(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lN:{"^":"aa;",
gi:function(a){return a.length},
h:function(a,b){H.X(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dR:{"^":"bY+j;"},
dS:{"^":"dR+b9;"},
dT:{"^":"bY+j;"},
dU:{"^":"dT+b9;"}}],["","",,P,{"^":"",
i2:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jO()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a4(new P.i4(z),1)).observe(y,{childList:true})
return new P.i3(z,y,x)}else if(self.setImmediate!=null)return P.jP()
return P.jQ()},
my:[function(a){self.scheduleImmediate(H.a4(new P.i5(a),0))},"$1","jO",4,0,6],
mz:[function(a){self.setImmediate(H.a4(new P.i6(a),0))},"$1","jP",4,0,6],
mA:[function(a){P.jh(0,a)},"$1","jQ",4,0,6],
jH:function(a,b){if(H.ea(a,{func:1,args:[P.aX,P.aX]})){b.toString
return a}else{b.toString
return a}},
jG:function(){var z,y
for(;z=$.am,z!=null;){$.aK=null
y=z.b
$.am=y
if(y==null)$.aJ=null
z.a.$0()}},
mL:[function(){$.c7=!0
try{P.jG()}finally{$.aK=null
$.c7=!1
if($.am!=null)$.$get$c2().$1(P.e9())}},"$0","e9",0,0,3],
e4:function(a){var z=new P.dI(a,null)
if($.am==null){$.aJ=z
$.am=z
if(!$.c7)$.$get$c2().$1(P.e9())}else{$.aJ.b=z
$.aJ=z}},
jL:function(a){var z,y,x
z=$.am
if(z==null){P.e4(a)
$.aK=$.aJ
return}y=new P.dI(a,null)
x=$.aK
if(x==null){y.b=z
$.aK=y
$.am=y}else{y.b=x.b
x.b=y
$.aK=y
if(y.b==null)$.aJ=y}},
kd:function(a){var z=$.v
if(C.f===z){P.bt(null,null,C.f,a)
return}z.toString
P.bt(null,null,z,z.bE(a))},
jK:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.O(u)
y=H.ai(u)
$.v.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.au(x)
w=t
v=x.gZ()
c.$2(w,v)}}},
jz:function(a,b,c,d){var z=a.dK(0)
if(!!J.o(z).$isaW&&z!==$.$get$cU())z.em(new P.jC(b,c,d))
else b.a4(c,d)},
jA:function(a,b){return new P.jB(a,b)},
i0:function(){return $.v},
bs:function(a,b,c,d,e){var z={}
z.a=d
P.jL(new P.jI(z,e))},
e2:function(a,b,c,d){var z,y
y=$.v
if(y===c)return d.$0()
$.v=c
z=y
try{y=d.$0()
return y}finally{$.v=z}},
e3:function(a,b,c,d,e){var z,y
y=$.v
if(y===c)return d.$1(e)
$.v=c
z=y
try{y=d.$1(e)
return y}finally{$.v=z}},
jJ:function(a,b,c,d,e,f){var z,y
y=$.v
if(y===c)return d.$2(e,f)
$.v=c
z=y
try{y=d.$2(e,f)
return y}finally{$.v=z}},
bt:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bE(d):c.dH(d)
P.e4(d)},
i4:{"^":"i:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
i3:{"^":"i:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i5:{"^":"i:1;a",
$0:function(){this.a.$0()}},
i6:{"^":"i:1;a",
$0:function(){this.a.$0()}},
jg:{"^":"c;a,b,c",
d7:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a4(new P.ji(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
jh:function(a,b){var z=new P.jg(!0,null,0)
z.d7(a,b)
return z}}},
ji:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ks:{"^":"c;$ti"},
i9:{"^":"c;$ti"},
jb:{"^":"i9;a,$ti",
dO:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bl("Future already completed"))
z.ac(b)}},
dK:{"^":"c;aE:a<,b,c,d,e,$ti",
gdC:function(){return this.b.b},
gbZ:function(){return(this.c&1)!==0},
ge1:function(){return(this.c&2)!==0},
gbY:function(){return this.c===8},
e_:function(a){return this.b.b.aP(this.d,a)},
e5:function(a){if(this.c!==6)return!0
return this.b.b.aP(this.d,J.au(a))},
dZ:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.ea(z,{func:1,args:[P.c,P.aG]}))return x.ed(z,y.gL(a),a.gZ())
else return x.aP(z,y.gL(a))},
e0:function(){return this.b.b.c5(this.d)}},
af:{"^":"c;bt:a<,b,dn:c<,$ti",
d3:function(a,b){this.a=4
this.c=a},
gdi:function(){return this.a===2},
gaA:function(){return this.a>=4},
ca:function(a,b){var z,y,x
z=$.v
if(z!==C.f){z.toString
if(b!=null)b=P.jH(b,z)}y=new P.af(0,z,null,[null])
x=b==null?1:3
this.au(new P.dK(null,y,x,a,b,[H.A(this,0),null]))
return y},
c9:function(a){return this.ca(a,null)},
em:function(a){var z,y
z=$.v
y=new P.af(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.A(this,0)
this.au(new P.dK(null,y,8,a,null,[z,z]))
return y},
au:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaA()){y.au(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bt(null,null,z,new P.iq(this,a))}},
bq:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaE()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaA()){v.bq(a)
return}this.a=v.a
this.c=v.c}z.a=this.aF(a)
y=this.b
y.toString
P.bt(null,null,y,new P.iv(z,this))}},
ae:function(){var z=this.c
this.c=null
return this.aF(z)},
aF:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaE()
z.a=y}return y},
ac:function(a){var z,y,x
z=this.$ti
y=H.bu(a,"$isaW",z,"$asaW")
if(y){z=H.bu(a,"$isaf",z,null)
if(z)P.dL(a,this)
else P.ir(a,this)}else{x=this.ae()
this.a=4
this.c=a
P.aI(this,x)}},
a4:[function(a,b){var z=this.ae()
this.a=8
this.c=new P.b5(a,b)
P.aI(this,z)},function(a){return this.a4(a,null)},"eq","$2","$1","gbm",4,2,13],
$isaW:1,
p:{
ir:function(a,b){var z,y,x
b.a=1
try{a.ca(new P.is(b),new P.it(b))}catch(x){z=H.O(x)
y=H.ai(x)
P.kd(new P.iu(b,z,y))}},
dL:function(a,b){var z
for(;a.gdi();)a=a.c
if(a.gaA()){z=b.ae()
b.a=a.a
b.c=a.c
P.aI(b,z)}else{z=b.c
b.a=2
b.c=a
a.bq(z)}},
aI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.au(v)
t=v.gZ()
y.toString
P.bs(null,null,y,u,t)}return}for(;b.gaE()!=null;b=s){s=b.a
b.a=null
P.aI(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbZ()||b.gbY()){q=b.gdC()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.au(v)
t=v.gZ()
y.toString
P.bs(null,null,y,u,t)
return}p=$.v
if(p==null?q!=null:p!==q)$.v=q
else p=null
if(b.gbY())new P.iy(z,x,b,w).$0()
else if(y){if(b.gbZ())new P.ix(x,b,r).$0()}else if(b.ge1())new P.iw(z,x,b).$0()
if(p!=null)$.v=p
y=x.b
if(!!J.o(y).$isaW){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aF(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dL(y,o)
return}}o=b.b
b=o.ae()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iq:{"^":"i:1;a,b",
$0:function(){P.aI(this.a,this.b)}},
iv:{"^":"i:1;a,b",
$0:function(){P.aI(this.b,this.a.a)}},
is:{"^":"i:0;a",
$1:function(a){var z=this.a
z.a=0
z.ac(a)}},
it:{"^":"i:14;a",
$2:function(a,b){this.a.a4(a,b)},
$1:function(a){return this.$2(a,null)}},
iu:{"^":"i:1;a,b,c",
$0:function(){this.a.a4(this.b,this.c)}},
iy:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e0()}catch(w){y=H.O(w)
x=H.ai(w)
if(this.d){v=J.au(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b5(y,x)
u.a=!0
return}if(!!J.o(z).$isaW){if(z instanceof P.af&&z.gbt()>=4){if(z.gbt()===8){v=this.b
v.b=z.gdn()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.c9(new P.iz(t))
v.a=!1}}},
iz:{"^":"i:0;a",
$1:function(a){return this.a}},
ix:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e_(this.c)}catch(x){z=H.O(x)
y=H.ai(x)
w=this.a
w.b=new P.b5(z,y)
w.a=!0}}},
iw:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e5(z)===!0&&w.e!=null){v=this.b
v.b=w.dZ(z)
v.a=!1}}catch(u){y=H.O(u)
x=H.ai(u)
w=this.a
v=J.au(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b5(y,x)
s.a=!0}}},
dI:{"^":"c;a,b"},
di:{"^":"c;$ti",
v:function(a,b){var z,y
z={}
y=new P.af(0,$.v,null,[null])
z.a=null
z.a=this.c1(new P.hK(z,this,b,y),!0,new P.hL(y),y.gbm())
return y},
gi:function(a){var z,y
z={}
y=new P.af(0,$.v,null,[P.B])
z.a=0
this.c1(new P.hM(z),!0,new P.hN(z,y),y.gbm())
return y}},
hK:{"^":"i;a,b,c,d",
$1:function(a){P.jK(new P.hI(this.c,a),new P.hJ(),P.jA(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cc(this.b,"di",0)]}}},
hI:{"^":"i:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hJ:{"^":"i:0;",
$1:function(a){}},
hL:{"^":"i:1;a",
$0:function(){this.a.ac(null)}},
hM:{"^":"i:0;a",
$1:function(a){++this.a.a}},
hN:{"^":"i:1;a,b",
$0:function(){this.b.ac(this.a.a)}},
hH:{"^":"c;$ti"},
jC:{"^":"i:1;a,b,c",
$0:function(){return this.a.a4(this.b,this.c)}},
jB:{"^":"i:15;a,b",
$2:function(a,b){P.jz(this.a,this.b,a,b)}},
b5:{"^":"c;L:a>,Z:b<",
k:function(a){return H.b(this.a)},
$isC:1},
jo:{"^":"c;"},
jI:{"^":"i:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.d9()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.av(y)
throw x}},
iV:{"^":"jo;",
ee:function(a){var z,y,x
try{if(C.f===$.v){a.$0()
return}P.e2(null,null,this,a)}catch(x){z=H.O(x)
y=H.ai(x)
P.bs(null,null,this,z,y)}},
ef:function(a,b){var z,y,x
try{if(C.f===$.v){a.$1(b)
return}P.e3(null,null,this,a,b)}catch(x){z=H.O(x)
y=H.ai(x)
P.bs(null,null,this,z,y)}},
dH:function(a){return new P.iX(this,a)},
bE:function(a){return new P.iW(this,a)},
dI:function(a){return new P.iY(this,a)},
h:function(a,b){return},
c5:function(a){if($.v===C.f)return a.$0()
return P.e2(null,null,this,a)},
aP:function(a,b){if($.v===C.f)return a.$1(b)
return P.e3(null,null,this,a,b)},
ed:function(a,b,c){if($.v===C.f)return a.$2(b,c)
return P.jJ(null,null,this,a,b,c)}},
iX:{"^":"i:1;a,b",
$0:function(){return this.a.c5(this.b)}},
iW:{"^":"i:1;a,b",
$0:function(){return this.a.ee(this.b)}},
iY:{"^":"i:0;a,b",
$1:function(a){return this.a.ef(this.b,a)}}}],["","",,P,{"^":"",
P:function(){return new H.cY(0,null,null,null,null,null,0,[null,null])},
d_:function(a){return H.jU(a,new H.cY(0,null,null,null,null,null,0,[null,null]))},
Q:function(a,b,c,d){return new P.iI(0,null,null,null,null,null,0,[d])},
fJ:function(a,b,c){var z,y
if(P.c8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aL()
y.push(a)
try{P.jF(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dj(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bR:function(a,b,c){var z,y,x
if(P.c8(a))return b+"..."+c
z=new P.c_(b)
y=$.$get$aL()
y.push(a)
try{x=z
x.a=P.dj(x.ga_(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.ga_()+c
y=z.ga_()
return y.charCodeAt(0)==0?y:y},
c8:function(a){var z,y
for(z=0;y=$.$get$aL(),z<y.length;++z)if(a===y[z])return!0
return!1},
jF:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gH(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gA(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gA(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA(z);++x
for(;z.t();t=s,s=r){r=z.gA(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
bV:function(a,b){var z,y
z=P.Q(null,null,null,b)
for(y=J.aT(a);y.t();)z.P(0,y.gA(y))
return z},
d2:function(a){var z,y,x
z={}
if(P.c8(a))return"{...}"
y=new P.c_("")
try{$.$get$aL().push(a)
x=y
x.a=x.ga_()+"{"
z.a=!0
J.cm(a,new P.fW(z,y))
z=y
z.a=z.ga_()+"}"}finally{z=$.$get$aL()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.ga_()
return z.charCodeAt(0)==0?z:z},
iI:{"^":"iB;a,b,c,d,e,f,r,$ti",
gH:function(a){var z=new P.c5(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.da(b)},
da:function(a){var z=this.d
if(z==null)return!1
return this.ay(z[this.av(a)],a)>=0},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.G(this))
z=z.b}},
P:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.c6()
this.b=z}return this.bi(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.c6()
this.c=y}return this.bi(y,b)}else return this.d8(0,b)},
d8:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.c6()
this.d=z}y=this.av(b)
x=z[y]
if(x==null)z[y]=[this.aD(b)]
else{if(this.ay(x,b)>=0)return!1
x.push(this.aD(b))}return!0},
c4:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.br(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.br(this.c,b)
else return this.dk(0,b)},
dk:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.av(b)]
x=this.ay(y,b)
if(x<0)return!1
this.bv(y.splice(x,1)[0])
return!0},
a7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aB()}},
bi:function(a,b){if(a[b]!=null)return!1
a[b]=this.aD(b)
return!0},
br:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bv(z)
delete a[b]
return!0},
aB:function(){this.r=this.r+1&67108863},
aD:function(a){var z,y
z=new P.iJ(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aB()
return z},
bv:function(a){var z,y
z=a.gdj()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aB()},
av:function(a){return J.Z(a)&0x3ffffff},
ay:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].gdd(),b))return y
return-1},
p:{
c6:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iJ:{"^":"c;dd:a<,b,dj:c<"},
c5:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.G(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iB:{"^":"hv;$ti"},
lt:{"^":"c;$ti"},
d0:{"^":"dQ;$ti",$ish:1},
j:{"^":"c;$ti",
gH:function(a){return new H.d1(a,this.gi(a),0,null,[H.ap(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.G(a))}},
dY:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.G(a))}return y},
b4:function(a,b){return H.c0(a,b,null,H.ap(this,a,"j",0))},
n:function(a,b){var z=H.y([],[H.ap(this,a,"j",0)])
C.c.si(z,C.b.n(this.gi(a),C.b.gi(b)))
C.c.M(z,0,this.gi(a),a)
C.c.M(z,this.gi(a),z.length,b)
return z},
K:["cI",function(a,b,c,d,e){var z,y,x,w,v
P.dc(b,c,this.gi(a),null,null,null)
z=c-b
if(z===0)return
y=H.bu(d,"$ish",[H.ap(this,a,"j",0)],"$ash")
if(y){x=e
w=d}else{w=H.c0(d,e,null,H.ap(C.m,d,"j",0)).cb(0,!1)
x=0}if(x+z>w.length)throw H.a(H.cV())
if(x<b)for(v=z-1;v>=0;--v){y=x+v
if(y>=w.length)return H.d(w,y)
this.j(a,b+v,w[y])}else for(v=0;v<z;++v){y=x+v
if(y>=w.length)return H.d(w,y)
this.j(a,b+v,w[y])}},function(a,b,c,d){return this.K(a,b,c,d,0)},"M",null,null,"gep",13,2,null],
b2:function(a,b,c){this.M(a,b,b+c.length,c)},
k:function(a){return P.bR(a,"[","]")}},
bX:{"^":"L;$ti"},
fW:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
L:{"^":"c;$ti",
v:function(a,b){var z,y
for(z=J.aT(this.gJ(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a_(this.gJ(a))},
k:function(a){return P.d2(a)}},
hw:{"^":"c;$ti",
N:function(a,b){var z
for(z=J.aT(b);z.t();)this.P(0,z.gA(z))},
k:function(a){return P.bR(this,"{","}")},
v:function(a,b){var z
for(z=new P.c5(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hv:{"^":"hw;$ti"},
dQ:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fz:function(a){var z=J.o(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.aF(a)+"'"},
bP:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fz(a)},
cR:function(a){return new P.im(a)},
aj:function(a){H.bB(H.b(a))},
c9:{"^":"c;"},
"+bool":0,
cI:{"^":"c;dB:a<,b",
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.cI))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.gdB())},
gw:function(a){var z=this.a
return(z^C.b.bs(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fo(H.ho(this))
y=P.aU(H.hm(this))
x=P.aU(H.hi(this))
w=P.aU(H.hj(this))
v=P.aU(H.hl(this))
u=P.aU(H.hn(this))
t=P.fp(H.hk(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fo:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fp:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aU:function(a){if(a>=10)return""+a
return"0"+a}}},
ah:{"^":"aN;"},
"+double":0,
aV:{"^":"c;a5:a<",
n:function(a,b){return new P.aV(C.b.n(this.a,b.ga5()))},
I:function(a,b){return new P.aV(this.a-b.ga5())},
a3:function(a,b){return C.b.a3(this.a,b.ga5())},
ab:function(a,b){return C.b.ab(this.a,b.ga5())},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.aV))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.ga5())},
k:function(a){var z,y,x,w,v
z=new P.fw()
y=this.a
if(y<0)return"-"+new P.aV(0-y).k(0)
x=z.$1(C.b.a0(y,6e7)%60)
w=z.$1(C.b.a0(y,1e6)%60)
v=new P.fv().$1(y%1e6)
return""+C.b.a0(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fu:function(a,b,c,d,e,f){return new P.aV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fv:{"^":"i:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fw:{"^":"i:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
C:{"^":"c;",
gZ:function(){return H.ai(this.$thrownJsError)}},
d9:{"^":"C;",
k:function(a){return"Throw of null."}},
ak:{"^":"C;a,b,c,d",
gax:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaw:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gax()+y+x
if(!this.a)return w
v=this.gaw()
u=P.bP(this.b)
return w+v+": "+H.b(u)},
p:{
f7:function(a,b,c){return new P.ak(!0,a,b,c)}}},
db:{"^":"ak;e,f,a,b,c,d",
gax:function(){return"RangeError"},
gaw:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bg:function(a,b,c){return new P.db(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.db(b,c,!0,a,d,"Invalid value")},
dc:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.a1(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.a1(b,a,c,"end",f))
return b}}},
fH:{"^":"ak;e,i:f>,a,b,c,d",
gax:function(){return"RangeError"},
gaw:function(){if(J.aP(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
w:function(a,b,c,d,e){var z=e!=null?e:J.a_(b)
return new P.fH(b,z,!0,a,c,"Index out of range")}}},
hW:{"^":"C;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.hW(a)}}},
hU:{"^":"C;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dF:function(a){return new P.hU(a)}}},
bk:{"^":"C;a",
k:function(a){return"Bad state: "+this.a},
p:{
bl:function(a){return new P.bk(a)}}},
fk:{"^":"C;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bP(z))+"."},
p:{
G:function(a){return new P.fk(a)}}},
dg:{"^":"c;",
k:function(a){return"Stack Overflow"},
gZ:function(){return},
$isC:1},
fn:{"^":"C;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
kP:{"^":"c;"},
im:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
B:{"^":"aN;"},
"+int":0,
bb:{"^":"c;$ti",
aR:["cG",function(a,b){return new H.dH(this,b,[H.cc(this,"bb",0)])}],
v:function(a,b){var z
for(z=this.gH(this);z.t();)b.$1(z.gA(z))},
gi:function(a){var z,y
z=this.gH(this)
for(y=0;z.t();)++y
return y},
gY:function(a){var z,y
z=this.gH(this)
if(!z.t())throw H.a(H.fK())
y=z.gA(z)
if(z.t())throw H.a(H.fL())
return y},
q:function(a,b){var z,y,x
if(b<0)H.T(P.a1(b,0,null,"index",null))
for(z=this.gH(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.a(P.w(b,this,"index",null,y))},
k:function(a){return P.fJ(this,"(",")")}},
fM:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
bW:{"^":"c;$ti"},
aX:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aN:{"^":"c;"},
"+num":0,
c:{"^":";",
F:function(a,b){return this===b},
gw:function(a){return H.aE(this)},
k:function(a){return"Instance of '"+H.aF(this)+"'"},
toString:function(){return this.k(this)}},
aG:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
c_:{"^":"c;a_:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dj:function(a,b,c){var z=J.aT(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gA(z))
while(z.t())}else{a+=H.b(z.gA(z))
for(;z.t();)a=a+c+H.b(z.gA(z))}return a}}}}],["","",,W,{"^":"",
fx:function(a,b,c){var z,y
z=document.body
y=(z&&C.t).S(z,a,b,c)
y.toString
z=new H.dH(new W.R(y),new W.fy(),[W.q])
return z.gY(z)},
cQ:function(a){return"wheel"},
ax:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eJ(a)
if(typeof y==="string")z=a.tagName}catch(x){H.O(x)}return z},
ij:function(a,b){return document.createElement(a)},
ag:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e1:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.ic(a)
if(!!J.o(z).$isz)return z
return}else return a},
e5:function(a){var z=$.v
if(z===C.f)return a
return z.dI(a)},
t:{"^":"al;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kh:{"^":"bZ;l:x=,m:y=,C:z=","%":"Accelerometer|LinearAccelerationSensor"},
ki:{"^":"f;i:length=","%":"AccessibleNodeList"},
kj:{"^":"t;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kk:{"^":"t;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
ko:{"^":"t;ah:href}","%":"HTMLBaseElement"},
fb:{"^":"f;","%":"Response;Body"},
bJ:{"^":"t;",$isbJ:1,"%":"HTMLBodyElement"},
kp:{"^":"t;G:name=","%":"HTMLButtonElement"},
fd:{"^":"t;D:height},E:width}",
aT:function(a,b,c){if(c!=null)return a.getContext(b,P.jR(c,null))
return a.getContext(b)},
cu:function(a,b){return this.aT(a,b,null)},
"%":"HTMLCanvasElement"},
kq:{"^":"f;",
dR:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
am:function(a){return P.N(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kr:{"^":"q;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kt:{"^":"V;T:style=","%":"CSSFontFaceRule"},
ku:{"^":"V;T:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kv:{"^":"V;T:style=","%":"CSSPageRule"},
kw:{"^":"b7;i:length=","%":"CSSPerspective"},
kx:{"^":"bM;l:x=,m:y=","%":"CSSPositionValue"},
ky:{"^":"b7;l:x=,m:y=,C:z=","%":"CSSRotation"},
V:{"^":"f;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kz:{"^":"b7;l:x=,m:y=,C:z=","%":"CSSScale"},
fl:{"^":"ia;i:length=",
bj:function(a,b){var z,y
z=$.$get$cG()
y=z[b]
if(typeof y==="string")return y
y=this.dw(a,b)
z[b]=y
return y},
dw:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fq()+b
if(z in a)return z
return b},
ds:function(a,b,c,d){a.setProperty(b,c,d)},
sD:function(a,b){a.height=b},
sE:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fm:{"^":"c;",
sdX:function(a,b){this.ds(a,this.bj(a,"float"),b,"")}},
kA:{"^":"V;T:style=","%":"CSSStyleRule"},
bM:{"^":"f;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
b7:{"^":"f;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kB:{"^":"bM;i:length=","%":"CSSTransformValue"},
kC:{"^":"b7;l:x=,m:y=,C:z=","%":"CSSTranslation"},
kD:{"^":"bM;i:length=","%":"CSSUnparsedValue"},
kE:{"^":"V;T:style=","%":"CSSViewportRule"},
kF:{"^":"f;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kG:{"^":"f;l:x=,m:y=,C:z=","%":"DeviceAcceleration"},
fr:{"^":"t;","%":"HTMLDivElement"},
kH:{"^":"q;",
gaK:function(a){return new W.b1(a,"mousedown",!1,[W.H])},
gaL:function(a){return new W.b1(a,"mousemove",!1,[W.H])},
gaM:function(a){return new W.b1(a,"mouseup",!1,[W.H])},
gaN:function(a){return new W.b1(a,W.cQ(a),!1,[W.aH])},
"%":"Document|HTMLDocument|XMLDocument"},
kI:{"^":"f;",
k:function(a){return String(a)},
"%":"DOMException"},
kJ:{"^":"fs;",
gal:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gC:function(a){return a.z},
"%":"DOMPoint"},
fs:{"^":"f;",
gal:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gC:function(a){return a.z},
"%":";DOMPointReadOnly"},
kK:{"^":"ie;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a2]},
$isn:1,
$asn:function(){return[P.a2]},
$asj:function(){return[P.a2]},
$ish:1,
$ash:function(){return[P.a2]},
$ask:function(){return[P.a2]},
"%":"ClientRectList|DOMRectList"},
ft:{"^":"f;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gE(a))+" x "+H.b(this.gD(a))},
F:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa2)return!1
return a.left===z.gc_(b)&&a.top===z.gcc(b)&&this.gE(a)===z.gE(b)&&this.gD(a)===z.gD(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gE(a)
w=this.gD(a)
return W.dP(W.ag(W.ag(W.ag(W.ag(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcd:function(a){return new P.ab(a.left,a.top,[null])},
gD:function(a){return a.height},
gc_:function(a){return a.left},
gcc:function(a){return a.top},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa2:1,
$asa2:I.ao,
"%":";DOMRectReadOnly"},
kL:{"^":"ih;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$isn:1,
$asn:function(){return[P.l]},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
kM:{"^":"f;i:length=","%":"DOMTokenList"},
al:{"^":"q;T:style=,bp:namespaceURI=,eg:tagName=",
gdF:function(a){return new W.ii(a)},
k:function(a){return a.localName},
S:["ap",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cP
if(z==null){z=H.y([],[W.d6])
y=new W.d7(z)
z.push(W.dM(null))
z.push(W.dY())
$.cP=y
d=y}else d=z
z=$.cO
if(z==null){z=new W.e0(d)
$.cO=z
c=z}else{z.a=d
c=z}}if($.a0==null){z=document
y=z.implementation.createHTMLDocument("")
$.a0=y
$.bO=y.createRange()
y=$.a0
y.toString
x=y.createElement("base")
J.eU(x,z.baseURI)
$.a0.head.appendChild(x)}z=$.a0
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a0
if(!!this.$isbJ)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a0.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.u(C.P,a.tagName)){$.bO.selectNodeContents(w)
v=$.bO.createContextualFragment(b)}else{w.innerHTML=b
v=$.a0.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a0.body
if(w==null?z!=null:w!==z)J.cs(w)
c.b1(v)
document.adoptNode(v)
return v},function(a,b,c){return this.S(a,b,c,null)},"dQ",null,null,"gev",5,5,null],
cw:function(a,b,c,d){a.textContent=null
a.appendChild(this.S(a,b,c,d))},
cv:function(a,b){return this.cw(a,b,null,null)},
aS:function(a){return a.getBoundingClientRect()},
gaK:function(a){return new W.ad(a,"mousedown",!1,[W.H])},
gaL:function(a){return new W.ad(a,"mousemove",!1,[W.H])},
gaM:function(a){return new W.ad(a,"mouseup",!1,[W.H])},
gaN:function(a){return new W.ad(a,W.cQ(a),!1,[W.aH])},
$isal:1,
"%":";Element"},
fy:{"^":"i:0;",
$1:function(a){return!!J.o(a).$isal}},
kN:{"^":"t;D:height},G:name=,E:width}","%":"HTMLEmbedElement"},
kO:{"^":"a8;L:error=","%":"ErrorEvent"},
a8:{"^":"f;",
ak:function(a){return a.preventDefault()},
$isa8:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
z:{"^":"f;",
bA:["cE",function(a,b,c,d){if(c!=null)this.d9(a,b,c,!1)}],
d9:function(a,b,c,d){return a.addEventListener(b,H.a4(c,1),!1)},
dl:function(a,b,c,d){return a.removeEventListener(b,H.a4(c,1),!1)},
$isz:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dV|dW|dZ|e_"},
l7:{"^":"t;G:name=","%":"HTMLFieldSetElement"},
l8:{"^":"ip;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b8]},
$isn:1,
$asn:function(){return[W.b8]},
$asj:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$ask:function(){return[W.b8]},
"%":"FileList"},
l9:{"^":"z;L:error=","%":"FileReader"},
la:{"^":"z;L:error=,i:length=","%":"FileWriter"},
lc:{"^":"f;T:style=","%":"FontFace"},
ld:{"^":"z;",
ew:function(a,b,c){return a.forEach(H.a4(b,3),c)},
v:function(a,b){b=H.a4(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lf:{"^":"t;i:length=,G:name=","%":"HTMLFormElement"},
lh:{"^":"bZ;l:x=,m:y=,C:z=","%":"Gyroscope"},
li:{"^":"f;i:length=","%":"History"},
lj:{"^":"iD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asj:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lk:{"^":"t;D:height},G:name=,E:width}","%":"HTMLIFrameElement"},
ll:{"^":"t;D:height},E:width}","%":"HTMLImageElement"},
ln:{"^":"t;D:height},G:name=,E:width}","%":"HTMLInputElement"},
bc:{"^":"dD;",
gen:function(a){return a.which},
$isbc:1,
"%":"KeyboardEvent"},
ls:{"^":"t;ah:href}","%":"HTMLLinkElement"},
lu:{"^":"f;",
k:function(a){return String(a)},
"%":"Location"},
lv:{"^":"bZ;l:x=,m:y=,C:z=","%":"Magnetometer"},
lw:{"^":"t;G:name=","%":"HTMLMapElement"},
fY:{"^":"t;L:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lz:{"^":"f;i:length=","%":"MediaList"},
lA:{"^":"z;",
W:function(a){return a.clone()},
"%":"MediaStream"},
lB:{"^":"z;",
W:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
lC:{"^":"z;",
bA:function(a,b,c,d){if(J.F(b,"message"))a.start()
this.cE(a,b,c,!1)},
"%":"MessagePort"},
lD:{"^":"t;G:name=","%":"HTMLMetaElement"},
lE:{"^":"iK;",
h:function(a,b){return P.N(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.N(y.value[1]))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new W.h_(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.l,null]},
"%":"MIDIInputMap"},
h_:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lF:{"^":"iL;",
h:function(a,b){return P.N(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.N(y.value[1]))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new W.h0(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
h0:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
lG:{"^":"iN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.be]},
$isn:1,
$asn:function(){return[W.be]},
$asj:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$ask:function(){return[W.be]},
"%":"MimeTypeArray"},
H:{"^":"dD;bJ:button=",
gc2:function(a){var z,y,x
if(!!a.offsetX)return new P.ab(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.e1(z)).$isal)throw H.a(P.p("offsetX is only supported on elements"))
y=W.e1(z)
z=[null]
x=new P.ab(a.clientX,a.clientY,z).I(0,J.eK(J.eM(y)))
return new P.ab(J.cu(x.a),J.cu(x.b),z)}},
$isH:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
R:{"^":"d0;a",
gY:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.bl("No elements"))
if(y>1)throw H.a(P.bl("More than one element"))
return z.firstChild},
N:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gH:function(a){var z=this.a.childNodes
return new W.cS(z,z.length,-1,null,[H.ap(C.R,z,"k",0)])},
K:function(a,b,c,d,e){throw H.a(P.p("Cannot setRange on Node list"))},
M:function(a,b,c,d){return this.K(a,b,c,d,0)},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asd0:function(){return[W.q]},
$asj:function(){return[W.q]},
$ash:function(){return[W.q]},
$asdQ:function(){return[W.q]}},
q:{"^":"z;aj:parentNode=,aO:previousSibling=",
ge8:function(a){return new W.R(a)},
ea:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cF(a):z},
$isq:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
lO:{"^":"f;",
e9:[function(a){return a.previousNode()},"$0","gaO",1,0,4],
"%":"NodeIterator"},
h9:{"^":"iP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asj:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"NodeList|RadioNodeList"},
lR:{"^":"t;D:height},G:name=,E:width}","%":"HTMLObjectElement"},
lT:{"^":"t;G:name=","%":"HTMLOutputElement"},
lU:{"^":"t;G:name=","%":"HTMLParamElement"},
aY:{"^":"f;i:length=","%":"Plugin"},
lW:{"^":"iT;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aY]},
$isn:1,
$asn:function(){return[W.aY]},
$asj:function(){return[W.aY]},
$ish:1,
$ash:function(){return[W.aY]},
$ask:function(){return[W.aY]},
"%":"PluginArray"},
lZ:{"^":"f;",
aS:function(a){return a.getBoundingClientRect()},
"%":"Range"},
m4:{"^":"iZ;",
h:function(a,b){return P.N(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.N(y.value[1]))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new W.hs(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hs:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
m5:{"^":"t;i:length=,G:name=","%":"HTMLSelectElement"},
bZ:{"^":"z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
m6:{"^":"a8;L:error=","%":"SensorErrorEvent"},
m7:{"^":"t;G:name=","%":"HTMLSlotElement"},
m8:{"^":"dW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bi]},
$isn:1,
$asn:function(){return[W.bi]},
$asj:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$ask:function(){return[W.bi]},
"%":"SourceBufferList"},
m9:{"^":"j4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bj]},
$isn:1,
$asn:function(){return[W.bj]},
$asj:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$ask:function(){return[W.bj]},
"%":"SpeechGrammarList"},
ma:{"^":"a8;L:error=","%":"SpeechRecognitionError"},
b_:{"^":"f;i:length=","%":"SpeechRecognitionResult"},
mc:{"^":"j7;",
h:function(a,b){return a.getItem(b)},
v:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new W.hG(z))
return z},
gi:function(a){return a.length},
$asL:function(){return[P.l,P.l]},
"%":"Storage"},
hG:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
hP:{"^":"t;",
S:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=W.fx("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.R(y).N(0,J.eH(z))
return y},
"%":"HTMLTableElement"},
mf:{"^":"t;",
S:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.S(z.createElement("table"),b,c,d)
z.toString
z=new W.R(z)
x=z.gY(z)
x.toString
z=new W.R(x)
w=z.gY(z)
y.toString
w.toString
new W.R(y).N(0,new W.R(w))
return y},
"%":"HTMLTableRowElement"},
mg:{"^":"t;",
S:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ap(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.S(z.createElement("table"),b,c,d)
z.toString
z=new W.R(z)
x=z.gY(z)
y.toString
x.toString
new W.R(y).N(0,new W.R(x))
return y},
"%":"HTMLTableSectionElement"},
dl:{"^":"t;",$isdl:1,"%":"HTMLTemplateElement"},
mh:{"^":"t;G:name=","%":"HTMLTextAreaElement"},
mj:{"^":"jf;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bo]},
$isn:1,
$asn:function(){return[W.bo]},
$asj:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$ask:function(){return[W.bo]},
"%":"TextTrackCueList"},
mk:{"^":"e_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bn]},
$isn:1,
$asn:function(){return[W.bn]},
$asj:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$ask:function(){return[W.bn]},
"%":"TextTrackList"},
ml:{"^":"f;i:length=","%":"TimeRanges"},
mm:{"^":"jk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bp]},
$isn:1,
$asn:function(){return[W.bp]},
$asj:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$ask:function(){return[W.bp]},
"%":"TouchList"},
mn:{"^":"f;i:length=","%":"TrackDefaultList"},
mq:{"^":"f;",
ex:[function(a){return a.parentNode()},"$0","gaj",1,0,4],
e9:[function(a){return a.previousNode()},"$0","gaO",1,0,4],
"%":"TreeWalker"},
dD:{"^":"a8;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
ms:{"^":"f;",
k:function(a){return String(a)},
"%":"URL"},
mu:{"^":"f;l:x=,C:z=","%":"VRStageBoundsPoint"},
mv:{"^":"fY;D:height},E:width}","%":"HTMLVideoElement"},
mw:{"^":"z;i:length=","%":"VideoTrackList"},
aH:{"^":"H;",
gdT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaH:1,
"%":"WheelEvent"},
hZ:{"^":"z;",
gdE:function(a){var z,y
z=P.aN
y=new P.af(0,$.v,null,[z])
this.df(a)
this.dm(a,W.e5(new W.i_(new P.jb(y,[z]))))
return y},
dm:function(a,b){return a.requestAnimationFrame(H.a4(b,1))},
df:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
i_:{"^":"i:0;a",
$1:function(a){this.a.dO(0,a)}},
mx:{"^":"z;"},
mB:{"^":"q;G:name=,bp:namespaceURI=","%":"Attr"},
mC:{"^":"jq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.V]},
$isn:1,
$asn:function(){return[W.V]},
$asj:function(){return[W.V]},
$ish:1,
$ash:function(){return[W.V]},
$ask:function(){return[W.V]},
"%":"CSSRuleList"},
mD:{"^":"ft;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
F:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa2)return!1
return a.left===z.gc_(b)&&a.top===z.gcc(b)&&a.width===z.gE(b)&&a.height===z.gD(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dP(W.ag(W.ag(W.ag(W.ag(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcd:function(a){return new P.ab(a.left,a.top,[null])},
gD:function(a){return a.height},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mE:{"^":"js;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.ba]},
$isn:1,
$asn:function(){return[W.ba]},
$asj:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$ask:function(){return[W.ba]},
"%":"GamepadList"},
mH:{"^":"ju;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asj:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mI:{"^":"fb;",
W:function(a){return a.clone()},
"%":"Request"},
mJ:{"^":"jw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b_]},
$isn:1,
$asn:function(){return[W.b_]},
$asj:function(){return[W.b_]},
$ish:1,
$ash:function(){return[W.b_]},
$ask:function(){return[W.b_]},
"%":"SpeechRecognitionResultList"},
mK:{"^":"jy;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$isn:1,
$asn:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$ask:function(){return[W.bm]},
"%":"StyleSheetList"},
i7:{"^":"bX;dg:a<",
v:function(a,b){var z,y,x,w,v
for(z=this.gJ(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.E)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gJ:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.y([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbp(v)==null)y.push(u.gG(v))}return y},
$asbX:function(){return[P.l,P.l]},
$asL:function(){return[P.l,P.l]}},
ii:{"^":"i7;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gJ(this).length}},
b1:{"^":"di;a,b,c,$ti",
c1:function(a,b,c,d){return W.ae(this.a,this.b,a,!1,H.A(this,0))}},
ad:{"^":"b1;a,b,c,$ti"},
ik:{"^":"hH;a,b,c,d,e,$ti",
d2:function(a,b,c,d,e){this.dz()},
dK:function(a){if(this.b==null)return
this.dA()
this.b=null
this.d=null
return},
dz:function(){var z=this.d
if(z!=null&&this.a<=0)J.eq(this.b,this.c,z,!1)},
dA:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.ep(x,this.c,z,!1)}},
p:{
ae:function(a,b,c,d,e){var z=W.e5(new W.il(c))
z=new W.ik(0,a,b,z,!1,[e])
z.d2(a,b,c,!1,e)
return z}}},
il:{"^":"i:0;a",
$1:function(a){return this.a.$1(a)}},
c3:{"^":"c;co:a<",
d4:function(a){var z,y
z=$.$get$c4()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.O[y],W.k_())
for(y=0;y<12;++y)z.j(0,C.q[y],W.k0())}},
a1:function(a){return $.$get$dN().u(0,W.ax(a))},
V:function(a,b,c){var z,y,x
z=W.ax(a)
y=$.$get$c4()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dM:function(a){var z,y
z=document.createElement("a")
y=new W.j_(z,window.location)
y=new W.c3(y)
y.d4(a)
return y},
mF:[function(a,b,c,d){return!0},"$4","k_",16,0,9],
mG:[function(a,b,c,d){var z,y,x,w,v
z=d.gco()
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
return z},"$4","k0",16,0,9]}},
k:{"^":"c;$ti",
gH:function(a){return new W.cS(a,this.gi(a),-1,null,[H.ap(this,a,"k",0)])},
K:function(a,b,c,d,e){throw H.a(P.p("Cannot setRange on immutable List."))},
M:function(a,b,c,d){return this.K(a,b,c,d,0)}},
d7:{"^":"c;a",
a1:function(a){return C.c.bB(this.a,new W.hb(a))},
V:function(a,b,c){return C.c.bB(this.a,new W.ha(a,b,c))}},
hb:{"^":"i:0;a",
$1:function(a){return a.a1(this.a)}},
ha:{"^":"i:0;a,b,c",
$1:function(a){return a.V(this.a,this.b,this.c)}},
j0:{"^":"c;co:d<",
d6:function(a,b,c,d){var z,y,x
this.a.N(0,c)
z=b.aR(0,new W.j1())
y=b.aR(0,new W.j2())
this.b.N(0,z)
x=this.c
x.N(0,C.Q)
x.N(0,y)},
a1:function(a){return this.a.u(0,W.ax(a))},
V:["cJ",function(a,b,c){var z,y
z=W.ax(a)
y=this.c
if(y.u(0,H.b(z)+"::"+b))return this.d.dD(c)
else if(y.u(0,"*::"+b))return this.d.dD(c)
else{y=this.b
if(y.u(0,H.b(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.b(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}]},
j1:{"^":"i:0;",
$1:function(a){return!C.c.u(C.q,a)}},
j2:{"^":"i:0;",
$1:function(a){return C.c.u(C.q,a)}},
jc:{"^":"j0;e,a,b,c,d",
V:function(a,b,c){if(this.cJ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cn(a).a.getAttribute("template")==="")return this.e.u(0,b)
return!1},
p:{
dY:function(){var z=P.l
z=new W.jc(P.bV(C.p,z),P.Q(null,null,null,z),P.Q(null,null,null,z),P.Q(null,null,null,z),null)
z.d6(null,new H.fX(C.p,new W.jd(),[H.A(C.p,0),null]),["TEMPLATE"],null)
return z}}},
jd:{"^":"i:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
ja:{"^":"c;",
a1:function(a){var z=J.o(a)
if(!!z.$isde)return!1
z=!!z.$isx
if(z&&W.ax(a)==="foreignObject")return!1
if(z)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.cB(b,"on"))return!1
return this.a1(a)}},
cS:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aQ(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(a){return this.d}},
ib:{"^":"c;a",$isz:1,p:{
ic:function(a){if(a===window)return a
else return new W.ib(a)}}},
d6:{"^":"c;"},
lP:{"^":"c;"},
mr:{"^":"c;"},
j_:{"^":"c;a,b"},
e0:{"^":"c;a",
b1:function(a){new W.jn(this).$2(a,null)},
a6:function(a,b){if(b==null)J.cs(a)
else b.removeChild(a)},
dr:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cn(a)
x=y.gdg().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.O(t)}v="element unprintable"
try{v=J.av(a)}catch(t){H.O(t)}try{u=W.ax(a)
this.dq(a,b,z,v,u,y,x)}catch(t){if(H.O(t) instanceof P.ak)throw t
else{this.a6(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dq:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a6(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a1(a)){this.a6(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.a6(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.y(z.slice(0),[H.A(z,0)])
for(x=f.gJ(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.V(a,J.eY(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$isdl)this.b1(a.content)}},
jn:{"^":"i:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dr(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a6(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eI(z)}catch(w){H.O(w)
v=z
if(x){u=J.e(v)
if(u.gaj(v)!=null){u.gaj(v)
u.gaj(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
ia:{"^":"f+fm;"},
id:{"^":"f+j;"},
ie:{"^":"id+k;"},
ig:{"^":"f+j;"},
ih:{"^":"ig+k;"},
io:{"^":"f+j;"},
ip:{"^":"io+k;"},
iC:{"^":"f+j;"},
iD:{"^":"iC+k;"},
iK:{"^":"f+L;"},
iL:{"^":"f+L;"},
iM:{"^":"f+j;"},
iN:{"^":"iM+k;"},
iO:{"^":"f+j;"},
iP:{"^":"iO+k;"},
iS:{"^":"f+j;"},
iT:{"^":"iS+k;"},
iZ:{"^":"f+L;"},
dV:{"^":"z+j;"},
dW:{"^":"dV+k;"},
j3:{"^":"f+j;"},
j4:{"^":"j3+k;"},
j7:{"^":"f+L;"},
je:{"^":"f+j;"},
jf:{"^":"je+k;"},
dZ:{"^":"z+j;"},
e_:{"^":"dZ+k;"},
jj:{"^":"f+j;"},
jk:{"^":"jj+k;"},
jp:{"^":"f+j;"},
jq:{"^":"jp+k;"},
jr:{"^":"f+j;"},
js:{"^":"jr+k;"},
jt:{"^":"f+j;"},
ju:{"^":"jt+k;"},
jv:{"^":"f+j;"},
jw:{"^":"jv+k;"},
jx:{"^":"f+j;"},
jy:{"^":"jx+k;"}}],["","",,P,{"^":"",
N:function(a){var z,y,x,w,v
if(a==null)return
z=P.P()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
jR:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cm(a,new P.jS(z))
return z},
cN:function(){var z=$.cM
if(z==null){z=J.bD(window.navigator.userAgent,"Opera",0)
$.cM=z}return z},
fq:function(){var z,y
z=$.cJ
if(z!=null)return z
y=$.cK
if(y==null){y=J.bD(window.navigator.userAgent,"Firefox",0)
$.cK=y}if(y)z="-moz-"
else{y=$.cL
if(y==null){y=P.cN()!==!0&&J.bD(window.navigator.userAgent,"Trident/",0)
$.cL=y}if(y)z="-ms-"
else z=P.cN()===!0?"-o-":"-webkit-"}$.cJ=z
return z},
jS:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",m3:{"^":"z;L:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mo:{"^":"z;L:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iE:{"^":"c;",
e7:function(){return Math.random()}},
ab:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
F:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ab))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gw:function(a){var z,y
z=J.Z(this.a)
y=J.Z(this.b)
return P.iF(P.dO(P.dO(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.b.gl(b)
if(typeof z!=="number")return z.n()
y=C.a.n(z,y)
z=this.b
x=C.b.gm(b)
if(typeof z!=="number")return z.n()
return new P.ab(y,C.a.n(z,x),this.$ti)},
I:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gl(b)
if(typeof z!=="number")return z.I()
if(typeof x!=="number")return H.I(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.I()
if(typeof y!=="number")return H.I(y)
return new P.ab(z-x,w-y,this.$ti)}},
iU:{"^":"c;$ti"},
a2:{"^":"iU;$ti"}}],["","",,P,{"^":"",kQ:{"^":"x;l:x=,m:y=","%":"SVGFEBlendElement"},kR:{"^":"x;l:x=,m:y=","%":"SVGFEColorMatrixElement"},kS:{"^":"x;l:x=,m:y=","%":"SVGFEComponentTransferElement"},kT:{"^":"x;l:x=,m:y=","%":"SVGFECompositeElement"},kU:{"^":"x;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},kV:{"^":"x;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},kW:{"^":"x;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},kX:{"^":"x;l:x=,m:y=","%":"SVGFEFloodElement"},kY:{"^":"x;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},kZ:{"^":"x;l:x=,m:y=","%":"SVGFEImageElement"},l_:{"^":"x;l:x=,m:y=","%":"SVGFEMergeElement"},l0:{"^":"x;l:x=,m:y=","%":"SVGFEMorphologyElement"},l1:{"^":"x;l:x=,m:y=","%":"SVGFEOffsetElement"},l2:{"^":"x;l:x=,m:y=,C:z=","%":"SVGFEPointLightElement"},l3:{"^":"x;l:x=,m:y=","%":"SVGFESpecularLightingElement"},l4:{"^":"x;l:x=,m:y=,C:z=","%":"SVGFESpotLightElement"},l5:{"^":"x;l:x=,m:y=","%":"SVGFETileElement"},l6:{"^":"x;l:x=,m:y=","%":"SVGFETurbulenceElement"},lb:{"^":"x;l:x=,m:y=","%":"SVGFilterElement"},le:{"^":"ay;l:x=,m:y=","%":"SVGForeignObjectElement"},fF:{"^":"ay;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ay:{"^":"x;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lm:{"^":"ay;l:x=,m:y=","%":"SVGImageElement"},lr:{"^":"iH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.cZ]},
$ish:1,
$ash:function(){return[P.cZ]},
$ask:function(){return[P.cZ]},
"%":"SVGLengthList"},lx:{"^":"x;l:x=,m:y=","%":"SVGMaskElement"},lQ:{"^":"iR;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.da]},
$ish:1,
$ash:function(){return[P.da]},
$ask:function(){return[P.da]},
"%":"SVGNumberList"},lV:{"^":"x;l:x=,m:y=","%":"SVGPatternElement"},lX:{"^":"f;l:x=,m:y=","%":"SVGPoint"},lY:{"^":"f;i:length=","%":"SVGPointList"},m_:{"^":"f;l:x=,m:y=","%":"SVGRect"},m0:{"^":"fF;l:x=,m:y=","%":"SVGRectElement"},de:{"^":"x;",$isde:1,"%":"SVGScriptElement"},md:{"^":"j9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},x:{"^":"al;",
S:function(a,b,c,d){var z,y,x,w,v,u
z=H.y([],[W.d6])
z.push(W.dM(null))
z.push(W.dY())
z.push(new W.ja())
c=new W.e0(new W.d7(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.t).dQ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.R(w)
u=z.gY(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaK:function(a){return new W.ad(a,"mousedown",!1,[W.H])},
gaL:function(a){return new W.ad(a,"mousemove",!1,[W.H])},
gaM:function(a){return new W.ad(a,"mouseup",!1,[W.H])},
gaN:function(a){return new W.ad(a,"mousewheel",!1,[W.aH])},
$isx:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},me:{"^":"ay;l:x=,m:y=","%":"SVGSVGElement"},hQ:{"^":"ay;","%":"SVGTextPathElement;SVGTextContentElement"},mi:{"^":"hQ;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mp:{"^":"jm;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dq]},
$ish:1,
$ash:function(){return[P.dq]},
$ask:function(){return[P.dq]},
"%":"SVGTransformList"},mt:{"^":"ay;l:x=,m:y=","%":"SVGUseElement"},iG:{"^":"f+j;"},iH:{"^":"iG+k;"},iQ:{"^":"f+j;"},iR:{"^":"iQ+k;"},j8:{"^":"f+j;"},j9:{"^":"j8+k;"},jl:{"^":"f+j;"},jm:{"^":"jl+k;"}}],["","",,P,{"^":"",kl:{"^":"f;i:length=","%":"AudioBuffer"},km:{"^":"i8;",
h:function(a,b){return P.N(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.N(y.value[1]))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new P.f9(z))
return z},
gi:function(a){return a.size},
$asL:function(){return[P.l,null]},
"%":"AudioParamMap"},f9:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},kn:{"^":"z;i:length=","%":"AudioTrackList"},fa:{"^":"z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lS:{"^":"fa;i:length=","%":"OfflineAudioContext"},i8:{"^":"f+L;"}}],["","",,P,{"^":"",m1:{"^":"f;",
bz:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindTexture(b,c)},
bG:function(a,b){return a.blendEquation(b)},
bH:function(a,b,c){return a.blendFunc(b,c)},
bI:function(a,b,c,d){return a.bufferData(b,c,d)},
bK:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bL:function(a,b){return a.compileShader(b)},
bM:function(a){return a.createBuffer()},
bN:function(a){return a.createProgram()},
bO:function(a,b){return a.createShader(b)},
bP:function(a){return a.createTexture()},
bR:function(a,b){return a.depthMask(b)},
bS:function(a,b){return a.disable(b)},
bT:function(a,b,c,d){return a.drawArrays(b,c,d)},
bU:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bV:function(a,b){return a.enable(b)},
bW:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.N(a.getContextAttributes())},
aU:function(a){return a.getError()},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aY:function(a,b){return a.getShaderInfoLog(b)},
aZ:function(a,b,c){return a.getShaderParameter(b,c)},
b_:function(a,b,c){return a.getUniformLocation(b,c)},
c0:function(a,b){return a.linkProgram(b)},
c3:function(a,b,c){return a.pixelStorei(b,c)},
b3:function(a,b,c){return a.shaderSource(b,c)},
b5:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aQ:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
c6:function(a,b,c,d,e,f,g){return this.aQ(a,b,c,d,e,f,g,null,null,null)},
c7:function(a,b,c,d){return a.texParameterf(b,c,d)},
c8:function(a,b,c,d){return a.texParameteri(b,c,d)},
ce:function(a,b,c){return a.uniform1f(b,c)},
cf:function(a,b,c){return a.uniform1fv(b,c)},
cg:function(a,b,c){return a.uniform1i(b,c)},
ci:function(a,b,c){return a.uniform1iv(b,c)},
cj:function(a,b,c){return a.uniform2fv(b,c)},
ck:function(a,b,c){return a.uniform3fv(b,c)},
cl:function(a,b,c){return a.uniform4fv(b,c)},
cm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},m2:{"^":"f;",
dG:function(a,b){return a.beginTransformFeedback(b)},
dJ:function(a,b){return a.bindVertexArray(b)},
dS:function(a){return a.createVertexArray()},
dU:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dV:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dW:function(a){return a.endTransformFeedback()},
ek:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
el:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bz:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindTexture(b,c)},
bG:function(a,b){return a.blendEquation(b)},
bH:function(a,b,c){return a.blendFunc(b,c)},
bI:function(a,b,c,d){return a.bufferData(b,c,d)},
bK:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bL:function(a,b){return a.compileShader(b)},
bM:function(a){return a.createBuffer()},
bN:function(a){return a.createProgram()},
bO:function(a,b){return a.createShader(b)},
bP:function(a){return a.createTexture()},
bR:function(a,b){return a.depthMask(b)},
bS:function(a,b){return a.disable(b)},
bT:function(a,b,c,d){return a.drawArrays(b,c,d)},
bU:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bV:function(a,b){return a.enable(b)},
bW:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.N(a.getContextAttributes())},
aU:function(a){return a.getError()},
aW:function(a,b){return a.getProgramInfoLog(b)},
aX:function(a,b,c){return a.getProgramParameter(b,c)},
aY:function(a,b){return a.getShaderInfoLog(b)},
aZ:function(a,b,c){return a.getShaderParameter(b,c)},
b_:function(a,b,c){return a.getUniformLocation(b,c)},
c0:function(a,b){return a.linkProgram(b)},
c3:function(a,b,c){return a.pixelStorei(b,c)},
b3:function(a,b,c){return a.shaderSource(b,c)},
b5:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aQ:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
c6:function(a,b,c,d,e,f,g){return this.aQ(a,b,c,d,e,f,g,null,null,null)},
c7:function(a,b,c,d){return a.texParameterf(b,c,d)},
c8:function(a,b,c,d){return a.texParameteri(b,c,d)},
ce:function(a,b,c){return a.uniform1f(b,c)},
cf:function(a,b,c){return a.uniform1fv(b,c)},
cg:function(a,b,c){return a.uniform1i(b,c)},
ci:function(a,b,c){return a.uniform1iv(b,c)},
cj:function(a,b,c){return a.uniform2fv(b,c)},
ck:function(a,b,c){return a.uniform3fv(b,c)},
cl:function(a,b,c){return a.uniform4fv(b,c)},
cm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cp:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mb:{"^":"j6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return P.N(a.item(b))},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.bW]},
$ish:1,
$ash:function(){return[P.bW]},
$ask:function(){return[P.bW]},
"%":"SQLResultSetRowList"},j5:{"^":"f+j;"},j6:{"^":"j5+k;"}}],["","",,G,{"^":"",
i1:function(a){var z,y,x,w
z=H.y(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.a9(z,"\n")},
dJ:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bO(a,b)
z.b3(a,y,c)
z.bL(a,y)
x=z.aZ(a,y,35713)
if(x!=null&&J.F(x,!1)){w=z.aY(a,y)
P.aj("E:Compilation failed:")
P.aj("E:"+G.i1(c))
P.aj("E:Failure:")
P.aj(C.i.n("E:",w))
throw H.a(w)}return y},
cT:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bG(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bH(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cq(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fC:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bG(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bH(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fD:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bG(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bH(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cq(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.eL(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fB:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aQ(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.aQ(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.aQ(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.aQ(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
iA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.a9(z,z.r,null,null,[H.A(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.B]],v=[P.ah],u=[T.a3],t=[T.r],s=[T.ac];y.t();){r=y.d
if(!x.ag(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eb>0)H.bB("I: "+q)
continue}p=z.h(0,r)
switch($.$get$S().h(0,r).a){case"vec2":b.U(r,G.fC(H.b3(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.U(r,G.cT(H.b3(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.U(r,G.fD(H.b3(p,"$ish",u,"$ash"),null),4)
break
case"float":b.U(r,new Float32Array(H.br(H.b3(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.U(r,G.fB(H.b3(p,"$ish",w,"$ash"),null),4)
break}}},
bf:{"^":"c;"},
dE:{"^":"bf;",
bd:function(){return this.d},
k:function(a){var z,y,x,w
z=H.y(["{"+H.b(new H.dC(H.jX(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.a9(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a9(z,"\n")}},
fc:{"^":"df;"},
ff:{"^":"c;a,b",
bX:function(a,b,c){J.eF(this.a,b)
if(c>0)J.f3(this.a,b,c)},
cr:function(a,b,c,d,e,f,g,h){J.bC(this.a,34962,b)
J.f4(this.a,c,d,e,!1,g,h)}},
fA:{"^":"c;a,b,c,d"},
fE:{"^":"c;a,b,c,d,e",
cN:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.y(y,[P.B])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.d(y,u)
t=y[u]
s=t.ger(t)
if(v>=w)return H.d(x,v)
x[v]=s
s=v+1
r=t.ges(t)
if(s>=w)return H.d(x,s)
x[s]=r
r=v+2
s=t.geu(t)
if(r>=w)return H.d(x,r)
x[r]=s
v+=3}for(y=z.length,u=0;u<y;++u){q=z[u]
s=q.a
if(v>=w)return H.d(x,v)
x[v]=s
r=v+1
if(r>=w)return H.d(x,r)
x[r]=q.b
r=v+2
p=q.c
if(r>=w)return H.d(x,r)
x[r]=p
r=v+3
if(r>=w)return H.d(x,r)
x[r]=s
s=v+4
if(s>=w)return H.d(x,s)
x[s]=p
p=v+5
if(p>=w)return H.d(x,p)
x[p]=q.d
v+=6}return x},
cP:function(a,b){var z,y,x,w,v,u,t
z=[]
this.e.j(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
z.push(new T.ac(t))}},
cO:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
z.push(new G.fA(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.a9(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$S().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a9(z," ")}},
dp:{"^":"c;a,b,c"},
dm:{"^":"c;a,b,c",p:{
dn:function(a,b,c){return new G.dm(a,b,c)}}},
d3:{"^":"dE;d,a,b,c"},
fZ:{"^":"bf;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
ba:function(a,b,c){var z,y
C.i.bl(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bC(z.a,34962,y)
J.ci(z.a,34962,b,35048)},
cQ:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
U:function(a,b,c){var z,y,x,w,v
z=J.ck(a,0)===105
if(z&&this.z===0)this.z=C.b.cK(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bE(x.a))
this.ba(a,b,c)
w=$.$get$S().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b4(x.a,this.e)
x.bX(0,v,z?1:0)
x.cr(0,y.h(0,a),v,w.bc(),5126,!1,0,0)},
b9:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bE(y.a))
this.ch=a
this.ba("aPosition",a,3)
x=$.$get$S().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.b4(y.a,this.e)
y.bX(0,w,0)
y.cr(0,z.h(0,"aPosition"),w,x.bc(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a9(z,z.r,null,null,[H.A(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a9(y,"  ")},
p:{
d4:function(a,b,c,d){return new G.fZ(b,J.ez(b.a),c,P.P(),d,null,0,-1,null,null,P.P(),"meshdata:"+a,!1,!0)}}},
hf:{"^":"dE;",
cL:function(a,b){var z
if(typeof a!=="number")return a.eo()
if(typeof b!=="number")return H.I(b)
z=a/b
if(this.z===z)return
this.z=z
this.be()},
be:function(){var z,y,x,w,v,u
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
bd:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.r(new Float32Array(3))
u.an(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.B(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.o(t)
x=!!y.$isa3
q=x?y.gal(t):1
if(!!y.$isr){p=y.gl(t)
s=y.gm(t)
r=y.gC(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gC(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.I(t)
x=z[4]
if(typeof s!=="number")return H.I(s)
w=z[8]
if(typeof r!=="number")return H.I(r)
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
c.B(this.db)
c.e6(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hr:{"^":"bf;d,e,f,r,x,y,z,Q,ch,a,b,c",
cU:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.cr(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
x.j(0,t,J.cr(w.a,v,t))}},
cZ:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a9(y,y.r,null,null,[H.A(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ag(0,v))x.push(v)}for(z=this.x,y=new P.c5(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.u(0,v))x.push(v)}return x},
d1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a9(b,b.r,null,null,[H.A(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.ck(t,0)){case 117:if(w.ag(0,t)){s=b.h(0,t)
if(v.ag(0,t))H.bB("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$S().h(0,t)
if(r==null)H.T("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bI(x.a,q,s)
else if(!!J.o(s).$isfI)J.f1(x.a,q,s)
break
case"float":if(r.c===0)J.f_(x.a,q,s)
else if(!!J.o(s).$isbQ)J.f0(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a7(s,"$isM").a
J.cz(x.a,q,!1,p)}else if(!!J.o(s).$isbQ)J.cz(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a7(s,"$isly").a
J.cy(x.a,q,!1,p)}else if(!!J.o(s).$isbQ)J.cy(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cx(o,q,H.a7(s,"$isa3").a)
else J.cx(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cw(o,q,H.a7(s,"$isr").a)
else J.cw(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cv(o,q,H.a7(s,"$isac").a)
else J.cv(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.I(p)
J.cg(x.a,33984+p)
p=H.a7(s,"$isc1").b
J.aR(x.a,3553,p)
p=this.ch
J.bI(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.I(p)
J.cg(x.a,33984+p)
p=H.a7(s,"$isc1").b
J.aR(x.a,34067,p)
p=this.ch
J.bI(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.bB("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.F(s,!0)
o=x.a
if(p)J.aS(o,2929)
else J.bF(o,2929)
break
case"cStencilFunc":H.a7(s,"$isdp")
p=s.a
o=x.a
if(p===1281)J.bF(o,2960)
else{J.aS(o,2960)
o=s.b
n=s.c
J.eV(x.a,p,o,n)}break
case"cDepthWrite":J.eA(x.a,s)
break
case"cBlendEquation":H.a7(s,"$isdm")
p=s.a
o=x.a
if(p===1281)J.bF(o,3042)
else{J.aS(o,3042)
o=s.b
n=s.c
J.et(x.a,o,n)
J.es(x.a,p)}break}++u
break}}m=P.fu(0,0,0,Date.now()-new P.cI(z,!1).a,0,0)
""+u
m.k(0)},
cM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.f2(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bh()}for(x=0;x<2;++x){w=b[x]
this.d1(w.a,w.bd())}y=this.Q
y.a7(0)
for(v=a.cy,u=new H.a9(v,v.r,null,null,[H.A(v,0)]),u.c=v.e;u.t();)y.P(0,u.d)
t=this.cZ()
if(t.length!==0)P.aj("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.b4(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cQ()
u=a.Q
r=a.z
if(s)J.er(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eE(q,y,v,u,0,r)
else J.eD(q,y,v,u,0)}else{u=z.a
if(r>1)J.eC(u,y,0,v,r)
else J.eB(u,y,0,v)}if(s)J.eG(z.a)},
bb:function(a,b){return this.cM(a,b,null)},
p:{
dd:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.Q(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.ew(b.a)
u=G.dJ(b.a,35633,y)
J.ch(b.a,v,u)
t=G.dJ(b.a,35632,x)
J.ch(b.a,v,t)
if(w.length>0)J.eZ(b.a,v,w,35980)
J.eS(b.a,v)
if(J.eR(b.a,v,35714)!==!0)H.T(J.eQ(b.a,v))
z=new G.hr(b,c,d,v,P.bV(c.c,null),P.P(),P.P(),z,null,a,!1,!0)
z.cU(a,b,c,d)
return z}}},
u:{"^":"c;a,b,c",
bc:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hx:{"^":"c;a,b,c,d,e,f,r,x",
aq:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.E)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.c.ao(y)},
ar:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.E)(a),++x)y.push(a[x])
C.c.ao(y)},
b8:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.ao(z)},
cV:function(a,b){this.b=this.bf(!0,a,b)},
as:function(a){return this.cV(a,null)},
bf:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){t=z[u]
s=$.$get$S().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$S().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$S().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.E)(z),++u){q=z[u]
s=$.$get$S().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.c.N(w,b)
if(a)w.push("}")
return C.c.a9(w,"\n")},
p:{
bh:function(a){return new G.hx(a,null,[],[],[],[],0,P.P())}}},
df:{"^":"bf;d,e,f,r,x,a,b,c",
aV:function(){var z,y,x
z=this.e
y=this.d.a
x=z.a
x[0]=y[12]
x[1]=y[13]
x[2]=y[14]
return z},
cz:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
hR:{"^":"c;a,b,c,d,e,f,r",
cR:function(a,b){var z=this.e
if(z!==1)J.eX(a.a,b,34046,z)
J.ct(a.a,b,10240,this.r)
J.ct(a.a,b,10241,this.f)}},
c1:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fG:{"^":"c1;f,a,b,c,d,e",
cW:function(a){var z,y
z=this.d
y=this.c
J.aR(z.a,y,this.b)
J.eW(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
hX:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$dG().e7()
if(v>=w)return H.d(x,v)
x[v]=(u-0.5)*c}y=G.d4(z,a.d,0,a.e.x)
y.b9(x)
return y},
hg:{"^":"hf;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ec:[function(a){var z,y,x,w
z=this.fy
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sE(z,y)
w.sD(z,x)
P.aj("size change "+H.b(y)+" "+H.b(x))
this.cL(y,x)
J.f5(this.go.a,0,0,y,x)},"$1","geb",4,0,17]},
hE:{"^":"c;",
cX:function(a,b,c){var z,y,x
if(a==null)throw H.a("no element provided")
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
x=this.d5(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
d5:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.ij("span",null)
y=J.co(v)
J.e(y).sE(y,"1px")
C.o.sD(y,""+d+"px")
C.o.sdX(y,"left")
x=C.o.bj(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
hF:{"^":"hE;e,f,a,b,c,d",
d0:function(a,b){var z,y,x,w,v;++this.e
if(J.aP(J.eo(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.u.ej(z,2)+" fps"
y=this.c;(y&&C.F).cv(y,b)
x=C.b.a0(30*C.u.dL(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.co(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d_:function(a){return this.d0(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
hy:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o
z=h+1
y=g+1
x=B.hS(B.he(new B.hz(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=[]
v=new G.fE(!1,[],[],w,P.P())
for(u=x.length,t=0;t<x.length;x.length===u||(0,H.E)(x),++t){s=x[t]
for(r=0;r<s.length;r+=2)w.push(J.cj(s[r]))}v.cO(z,y,!1)
v.cP(z,y)
q=$.$get$S().h(0,"aNormal")
switch(q.a){case"vec2":v.e.j(0,"aNormal",H.y([],[T.ac]))
break
case"vec3":v.e.j(0,"aNormal",H.y([],[T.r]))
break
case"vec4":v.e.j(0,"aNormal",H.y([],[T.a3]))
break
case"float":v.e.j(0,"aNormal",H.y([],[P.ah]))
break
case"uvec4":v.e.j(0,"aNormal",H.y([],[[P.h,P.B]]))
break}for(w=x.length,u=v.e,t=0;t<x.length;x.length===w||(0,H.E)(x),++t){s=x[t]
for(r=0;p=s.length,r<p;r+=2){o=r+1
if(o>=p)return H.d(s,o)
o=s[o]
u.h(0,"aNormal").push(J.cj(o))}}return v},
hS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.r(y)
w=new Float32Array(3)
v=new T.r(w)
u=new Float32Array(3)
t=new T.r(u)
for(s=b+1,r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.d(a,o)
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
u[2]=k*j}v.a2(0)
t.a2(0)
for(i=0;i<s;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
x.B(p)
x.af(v,g)
x.af(t,f)
q=new T.r(new Float32Array(3))
q.B(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.af(v,g)
x.af(t,f)
x.a2(0)
q=new T.r(new Float32Array(3))
q.B(x)
m.push(q)}}return z},
he:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.r(new Float32Array(3))
x=new T.r(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.b6(0,y)
t=new T.r(new Float32Array(3))
t.B(y)
z.push(t)
t=new T.r(new Float32Array(3))
t.B(x)
z.push(t)}return z},
hz:{"^":"i:18;a,b,c,d",
$2:function(a,b){var z,y,x,w,v,u
z=this.c
y=this.a*a
x=Math.cos(y)
w=Math.sin(y)
y=this.b*a
v=Math.cos(y)
u=Math.sin(y)
y=z*(2+x)*0.5
b.sl(0,y*v)
b.sm(0,y*u)
b.sC(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",fQ:{"^":"c;a,b,c",
cS:function(a){var z
a=document
z=W.bc
W.ae(a,"keydown",new D.fS(this),!1,z)
W.ae(a,"keyup",new D.fT(this),!1,z)},
p:{
fR:function(a){var z=P.B
z=new D.fQ(P.Q(null,null,null,z),P.Q(null,null,null,z),P.Q(null,null,null,z))
z.cS(a)
return z}}},fS:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.P(0,J.cp(a))
z.b.P(0,a.which)}},fT:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.c4(0,J.cp(a))
z.c.P(0,a.which)}},h1:{"^":"c;a,b,c,d,e,f,r,x",
cT:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaL(a)
W.ae(y.a,y.b,new D.h3(this),!1,H.A(y,0))
y=z.gaK(a)
W.ae(y.a,y.b,new D.h4(this),!1,H.A(y,0))
y=z.gaM(a)
W.ae(y.a,y.b,new D.h5(this),!1,H.A(y,0))
z=z.gaN(a)
W.ae(z.a,z.b,new D.h6(this),!1,H.A(z,0))},
p:{
h2:function(a){var z=P.B
z=new D.h1(P.Q(null,null,null,z),P.Q(null,null,null,z),P.Q(null,null,null,z),0,0,0,0,0)
z.cT(a)
return z}}},h3:{"^":"i:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ak(a)
y=this.a
y.r=z.gc2(a).a
y.x=z.gc2(a).b
y.d=a.movementX
y.e=a.movementY}},h4:{"^":"i:5;a",
$1:function(a){var z=J.e(a)
z.ak(a)
P.aj("BUTTON "+H.b(z.gbJ(a)))
z=this.a
z.a.P(0,a.button)
z.b.P(0,a.button)}},h5:{"^":"i:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ak(a)
y=this.a
y.a.c4(0,z.gbJ(a))
y.c.P(0,a.button)}},h6:{"^":"i:19;a",
$1:function(a){var z=J.e(a)
z.ak(a)
this.a.f=z.gdT(a)}},hd:{"^":"fc;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bx:function(a){var z,y
z=C.m.dY(a,0,new A.jZ())
if(typeof z!=="number")return H.I(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jZ:{"^":"i:20;",
$2:function(a,b){var z,y
z=J.at(a,J.Z(b))
if(typeof z!=="number")return H.I(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",M:{"^":"c;bo:a<",
B:function(a){var z,y
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
k:function(a){return"[0] "+this.aa(0).k(0)+"\n[1] "+this.aa(1).k(0)+"\n[2] "+this.aa(2).k(0)+"\n[3] "+this.aa(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.M){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.bx(this.a)},
aa:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.d(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.d(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.d(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.d(y,x)
z[3]=y[x]
return new T.a3(z)},
W:function(a){var z=new T.M(new Float32Array(16))
z.B(this)
return z},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.M(z)
y.B(this)
x=b.gbo()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
z[4]=C.a.n(z[4],x.h(0,4))
z[5]=C.a.n(z[5],x.h(0,5))
z[6]=C.a.n(z[6],x.h(0,6))
z[7]=C.a.n(z[7],x.h(0,7))
z[8]=C.a.n(z[8],x.h(0,8))
z[9]=C.a.n(z[9],x.h(0,9))
z[10]=C.a.n(z[10],x.h(0,10))
z[11]=C.a.n(z[11],x.h(0,11))
z[12]=C.a.n(z[12],x.h(0,12))
z[13]=C.a.n(z[13],x.h(0,13))
z[14]=C.a.n(z[14],x.h(0,14))
z[15]=C.a.n(z[15],x.h(0,15))
return y},
I:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.M(z)
y.B(this)
x=b.gbo()
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
X:function(){var z=this.a
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
e6:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},ac:{"^":"c;bw:a<",
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ac){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.bx(this.a)},
I:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbw()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return new T.ac(z)},
n:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbw()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
return new T.ac(z)},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
W:function(a){var z,y
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
return new T.ac(z)},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},r:{"^":"c;bx:a<",
an:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
B:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.r){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.bx(this.a)},
I:function(a,b){var z=new T.r(new Float32Array(3))
z.B(this)
z.b6(0,b)
return z},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.r(z)
y.B(this)
x=b.gbx()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gaJ())},
gaJ:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
a2:function(a){var z,y,x
z=Math.sqrt(this.gaJ())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aH:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bQ:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.r(new Float32Array(3))
z.an(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
af:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
b6:function(a,b){var z,y
z=b.gbx()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
W:function(a){var z=new T.r(new Float32Array(3))
z.B(this)
return z},
sl:function(a,b){this.a[0]=b
return b},
sm:function(a,b){this.a[1]=b
return b},
sC:function(a,b){this.a[2]=b
return b},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gC:function(a){return this.a[2]}},a3:{"^":"c;by:a<",
B:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a3){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.bx(this.a)},
I:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a3(z)
y.B(this)
x=b.gby()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a3(z)
y.B(this)
x=b.gby()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.d(z,b)
return z[b]},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
W:function(a){var z=new T.a3(new Float32Array(4))
z.B(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gC:function(a){return this.a[2]},
gal:function(a){return this.a[3]}}}],["","",,U,{"^":"",
f6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=new Float32Array(3000)
y=new Float32Array(4000)
x=new Float32Array(16)
w=new T.M(x)
w.X()
v=new Float32Array(3)
u=new Float32Array(3)
t=new Float32Array(3)
s=new G.df(w,new T.r(v),new T.r(u),new T.r(t),new T.r(new Float32Array(3)),"dummy",!1,!0)
for(r=0,q=-5;q<5;++q)for(w=q*40,p=-5;p<5;++p)for(v=p*40,o=-5;o<5;++o){x[12]=w
x[13]=v
x[14]=o*30
u=r*3
C.m.b2(z,u,s.aV().a)
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
if(l>=9)return H.d(t,l)
l=t[l]
k=g*3
e=k+g
if(e>=9)return H.d(t,e)
e=t[e]
d=f*3
c=d+f
if(c>=9)return H.d(t,c)
i=Math.sqrt(l-e-t[c]+1)
n[h]=i*0.5
i=0.5/i
c=k+f
if(c>=9)return H.d(t,c)
c=t[c]
e=d+g
if(e>=9)return H.d(t,e)
n[3]=(c-t[e])*i
e=m+g
if(e>=9)return H.d(t,e)
e=t[e]
k+=h
if(k>=9)return H.d(t,k)
n[g]=(e+t[k])*i
m+=f
if(m>=9)return H.d(t,m)
m=t[m]
d+=h
if(d>=9)return H.d(t,d)
n[f]=(m+t[d])*i}C.m.b2(y,u,n);++r}a.U("iaRotation",y,4)
a.U("iaTranslation",z,3)},
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
y=document
x=new R.hF(0,0,null,null,null,null)
x.cX(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.ff(null,w)
u=J.eN(w,"webgl2",P.d_(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.T(P.cR('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.eO(u))
if($.eb>0)P.aj("I: "+t)
J.eu(u,0,0,0,1)
J.aS(u,2929)
J.aS(u,2884)
u=new Float32Array(3)
t=D.fR(null)
s=D.h2(w)
r=new T.M(new Float32Array(16))
r.X()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.hd(265,0,0,0,new T.r(u),-0.02,t,s,r,new T.r(q),new T.r(p),new T.r(o),new T.r(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.M(new Float32Array(16))
u.X()
t=new T.M(new Float32Array(16))
t.X()
m=new R.hg(w,v,n,50,1,0.1,1000,u,t,new T.M(new Float32Array(16)),P.P(),"perspective",!1,!0)
m.be()
m.ec(null)
W.ae(window,"resize",m.geb(),!1,W.a8)
l=G.dd("instanced",v,$.$get$eg(),$.$get$ef())
u=P.P()
u.j(0,"cDepthTest",!0)
u.j(0,"cDepthWrite",!0)
u.j(0,"cBlendEquation",$.$get$cB())
t=$.$get$dh()
u.j(0,"cStencilFunc",t)
s=new T.M(new Float32Array(16))
s.X()
u.j(0,"uModelMatrix",s)
k=B.hy(!0,!0,1,2,3,12,128,16,4,!1)
j=G.d4("torusknot",l.d,4,l.e.x)
j.b9(G.cT(k.d,null))
s=k.cN()
r=j.d
j.y=J.bE(r.a)
q=j.ch.length
if(q<768){j.cx=new Uint8Array(H.br(s))
j.Q=5121}else if(q<196608){j.cx=new Uint16Array(H.br(s))
j.Q=5123}else{j.cx=new Uint32Array(H.br(s))
j.Q=5125}J.b4(r.a,j.e)
s=j.y
q=j.cx
J.bC(r.a,34963,s)
J.ci(r.a,34963,q,35048)
G.iA(k,j)
U.f6(j)
i=G.dd("stars",v,$.$get$el(),$.$get$ek())
s=$.$get$cA()
r=P.P()
r.j(0,"cDepthTest",!0)
r.j(0,"cDepthWrite",!1)
r.j(0,"cBlendEquation",s)
r.j(0,"cStencilFunc",t)
h=y.createElement("canvas")
h.width=64
h.height=64
g=C.E.cu(h,"2d")
f=J.ex(g,32,32,1,32,32,22)
f.addColorStop(0,"gray")
f.addColorStop(1,"black")
g.fillStyle=f
g.fillRect(0,0,64,64)
f=g.createRadialGradient(32,32,1,32,32,6)
f.addColorStop(0,"white")
f.addColorStop(1,"gray")
g.globalAlpha=0.9
g.fillStyle=f
g.arc(32,32,4,0,6.283185307179586,!1)
g.fill("nonzero")
y=new G.hR(!1,!1,!1,!0,1,9729,9729)
t=J.ey(v.a)
s=new G.fG(h,"Utils::Particles",t,3553,v,y)
J.aR(v.a,3553,t)
J.eT(v.a,37440,1)
s.cW(h)
y.cR(v,3553)
J.eP(v.a)
J.aR(v.a,3553,null)
r.j(0,"uTexture",s)
r.j(0,"uPointSize",1000)
y=new T.M(new Float32Array(16))
y.X()
r.j(0,"uModelMatrix",y)
e=R.hX(i,2000,100)
z.a=0
new U.ka(z,n,l,j,new G.d3(u,"mat",!1,!0),m,i,e,new G.d3(r,"stars",!1,!0),x).$1(0)},
ka:{"^":"i:21;a,b,c,d,e,f,r,x,y,z",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aM(b2)
y.I(b2,z.a)
z.a=y.n(b2,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b0()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b0()
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
if(typeof v!=="number")return v.b0()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dM(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.cz(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.r(new Float32Array(3))
o.an(0,1,0)
u=y.aV()
n=u.I(0,t)
n.a2(0)
m=o.bQ(n)
m.a2(0)
l=n.bQ(m)
l.a2(0)
t=m.aH(u)
k=l.aH(u)
u=n.aH(u)
j=m.a
i=j[0]
h=l.a
g=h[0]
f=n.a
e=f[0]
d=j[1]
c=h[1]
b=f[1]
j=j[2]
h=h[2]
f=f[2]
v[15]=1
v[14]=-u
v[13]=-k
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
a=Math.sqrt(i.gaJ())
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
k=v[11]
v[0]=y*a3+g*a6+i*a9
v[1]=e*a3+d*a6+c*a9
v[2]=b*a3+j*a6+h*a9
v[3]=f*a3+t*a6+k*a9
v[4]=y*a4+g*a7+i*b0
v[5]=e*a4+d*a7+c*b0
v[6]=b*a4+j*a7+h*b0
v[7]=f*a4+t*a7+k*b0
v[8]=y*a5+g*a8+i*b1
v[9]=e*a5+d*a8+c*b1
v[10]=b*a5+j*a8+h*b1
v[11]=f*a5+t*a8+k*b1
w.c.a7(0)
w.b.a7(0)
x.e=0
x.d=0
x.f=0
x.c.a7(0)
x.b.a7(0)
x=this.f
this.c.bb(this.d,[this.e,x])
this.r.bb(this.x,[this.y,x])
C.a7.gdE(window).c9(this)
this.z.d_(z.a)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cX.prototype
return J.cW.prototype}if(typeof a=="string")return J.aC.prototype
if(a==null)return J.fO.prototype
if(typeof a=="boolean")return J.fN.prototype
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.jV=function(a){if(typeof a=="number")return J.aB.prototype
if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.a6=function(a){if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.bw=function(a){if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.aM=function(a){if(typeof a=="number")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.jW=function(a){if(typeof a=="number")return J.aB.prototype
if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.ec=function(a){if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.c)return a
return J.b2(a)}
J.at=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jV(a).n(a,b)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).F(a,b)}
J.K=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aM(a).ab(a,b)}
J.aP=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aM(a).a3(a,b)}
J.eo=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aM(a).I(a,b)}
J.aQ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k8(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a6(a).h(a,b)}
J.ep=function(a,b,c,d){return J.e(a).dl(a,b,c,d)}
J.cg=function(a,b){return J.e(a).bz(a,b)}
J.eq=function(a,b,c,d){return J.e(a).bA(a,b,c,d)}
J.ch=function(a,b,c){return J.e(a).bC(a,b,c)}
J.er=function(a,b){return J.e(a).dG(a,b)}
J.bC=function(a,b,c){return J.e(a).bD(a,b,c)}
J.aR=function(a,b,c){return J.e(a).bF(a,b,c)}
J.b4=function(a,b){return J.e(a).dJ(a,b)}
J.es=function(a,b){return J.e(a).bG(a,b)}
J.et=function(a,b,c){return J.e(a).bH(a,b,c)}
J.ci=function(a,b,c,d){return J.e(a).bI(a,b,c,d)}
J.eu=function(a,b,c,d,e){return J.e(a).bK(a,b,c,d,e)}
J.cj=function(a){return J.e(a).W(a)}
J.ck=function(a,b){return J.ec(a).dN(a,b)}
J.ev=function(a,b){return J.jW(a).R(a,b)}
J.bD=function(a,b,c){return J.a6(a).dP(a,b,c)}
J.bE=function(a){return J.e(a).bM(a)}
J.ew=function(a){return J.e(a).bN(a)}
J.ex=function(a,b,c,d,e,f,g){return J.e(a).dR(a,b,c,d,e,f,g)}
J.ey=function(a){return J.e(a).bP(a)}
J.ez=function(a){return J.e(a).dS(a)}
J.eA=function(a,b){return J.e(a).bR(a,b)}
J.bF=function(a,b){return J.e(a).bS(a,b)}
J.eB=function(a,b,c,d){return J.e(a).bT(a,b,c,d)}
J.eC=function(a,b,c,d,e){return J.e(a).dU(a,b,c,d,e)}
J.eD=function(a,b,c,d,e){return J.e(a).bU(a,b,c,d,e)}
J.eE=function(a,b,c,d,e,f){return J.e(a).dV(a,b,c,d,e,f)}
J.cl=function(a,b){return J.bw(a).q(a,b)}
J.aS=function(a,b){return J.e(a).bV(a,b)}
J.eF=function(a,b){return J.e(a).bW(a,b)}
J.eG=function(a){return J.e(a).dW(a)}
J.cm=function(a,b){return J.bw(a).v(a,b)}
J.cn=function(a){return J.e(a).gdF(a)}
J.au=function(a){return J.e(a).gL(a)}
J.Z=function(a){return J.o(a).gw(a)}
J.aT=function(a){return J.bw(a).gH(a)}
J.a_=function(a){return J.a6(a).gi(a)}
J.eH=function(a){return J.e(a).ge8(a)}
J.eI=function(a){return J.e(a).gaO(a)}
J.co=function(a){return J.e(a).gT(a)}
J.eJ=function(a){return J.e(a).geg(a)}
J.eK=function(a){return J.e(a).gcd(a)}
J.eL=function(a){return J.e(a).gal(a)}
J.cp=function(a){return J.e(a).gen(a)}
J.bG=function(a){return J.e(a).gl(a)}
J.bH=function(a){return J.e(a).gm(a)}
J.cq=function(a){return J.e(a).gC(a)}
J.eM=function(a){return J.e(a).aS(a)}
J.eN=function(a,b,c){return J.e(a).aT(a,b,c)}
J.eO=function(a){return J.e(a).am(a)}
J.eP=function(a){return J.e(a).aU(a)}
J.eQ=function(a,b){return J.e(a).aW(a,b)}
J.eR=function(a,b,c){return J.e(a).aX(a,b,c)}
J.cr=function(a,b,c){return J.e(a).b_(a,b,c)}
J.eS=function(a,b){return J.e(a).c0(a,b)}
J.eT=function(a,b,c){return J.e(a).c3(a,b,c)}
J.cs=function(a){return J.bw(a).ea(a)}
J.eU=function(a,b){return J.e(a).sah(a,b)}
J.eV=function(a,b,c,d){return J.e(a).b5(a,b,c,d)}
J.eW=function(a,b,c,d,e,f,g){return J.e(a).c6(a,b,c,d,e,f,g)}
J.eX=function(a,b,c,d){return J.e(a).c7(a,b,c,d)}
J.ct=function(a,b,c,d){return J.e(a).c8(a,b,c,d)}
J.cu=function(a){return J.aM(a).eh(a)}
J.eY=function(a){return J.ec(a).ei(a)}
J.av=function(a){return J.o(a).k(a)}
J.eZ=function(a,b,c,d){return J.e(a).ek(a,b,c,d)}
J.f_=function(a,b,c){return J.e(a).ce(a,b,c)}
J.f0=function(a,b,c){return J.e(a).cf(a,b,c)}
J.bI=function(a,b,c){return J.e(a).cg(a,b,c)}
J.f1=function(a,b,c){return J.e(a).ci(a,b,c)}
J.cv=function(a,b,c){return J.e(a).cj(a,b,c)}
J.cw=function(a,b,c){return J.e(a).ck(a,b,c)}
J.cx=function(a,b,c){return J.e(a).cl(a,b,c)}
J.cy=function(a,b,c,d){return J.e(a).cm(a,b,c,d)}
J.cz=function(a,b,c,d){return J.e(a).cn(a,b,c,d)}
J.f2=function(a,b){return J.e(a).cp(a,b)}
J.f3=function(a,b,c){return J.e(a).el(a,b,c)}
J.f4=function(a,b,c,d,e,f,g){return J.e(a).cq(a,b,c,d,e,f,g)}
J.f5=function(a,b,c,d,e){return J.e(a).cs(a,b,c,d,e)}
I.ar=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.t=W.bJ.prototype
C.E=W.fd.prototype
C.o=W.fl.prototype
C.F=W.fr.prototype
C.G=J.f.prototype
C.c=J.az.prototype
C.u=J.cW.prototype
C.b=J.cX.prototype
C.a=J.aB.prototype
C.i=J.aC.prototype
C.N=J.aD.prototype
C.m=H.h7.prototype
C.R=W.h9.prototype
C.x=J.hh.prototype
C.C=W.hP.prototype
C.r=J.b0.prototype
C.a7=W.hZ.prototype
C.D=new P.iE()
C.f=new P.iV()
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.J=function(getTagFallback) {
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
C.K=function() {
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
C.L=function(hooks) {
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
C.M=function(hooks) {
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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.O=H.y(I.ar(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.P=I.ar(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=I.ar([])
C.p=H.y(I.ar(["bind","if","ref","repeat","syntax"]),[P.l])
C.q=H.y(I.ar(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.S=new G.u("vec3","vertex btangents",0)
C.d=new G.u("vec3","",0)
C.T=new G.u("vec4","delta from light",0)
C.n=new G.u("","",0)
C.y=new G.u("vec3","vertex coordinates",0)
C.U=new G.u("vec3","vertex binormals",0)
C.z=new G.u("vec4","for wireframe",0)
C.V=new G.u("vec4","per vertex color",0)
C.W=new G.u("float","for normal maps",0)
C.j=new G.u("mat4","",0)
C.Y=new G.u("mat4","",4)
C.X=new G.u("mat4","",128)
C.e=new G.u("float","",0)
C.Z=new G.u("float","",4)
C.a_=new G.u("float","depth for shadowmaps",0)
C.h=new G.u("sampler2D","",0)
C.a0=new G.u("float","for bump maps",0)
C.a1=new G.u("vec2","texture uvs",0)
C.a2=new G.u("float","time since program start in sec",0)
C.k=new G.u("vec2","",0)
C.a3=new G.u("samplerCube","",0)
C.l=new G.u("vec4","",0)
C.a4=new G.u("vec3","vertex normals",0)
C.a5=new G.u("sampler2DShadow","",0)
C.A=new G.u("vec3","per vertex color",0)
C.B=new G.u("mat3","",0)
C.a6=new G.u("vec3","vertex tangents",0)
$.U=0
$.aw=null
$.cC=null
$.ee=null
$.e6=null
$.em=null
$.bv=null
$.by=null
$.cd=null
$.am=null
$.aJ=null
$.aK=null
$.c7=!1
$.v=C.f
$.a0=null
$.bO=null
$.cP=null
$.cO=null
$.cM=null
$.cL=null
$.cK=null
$.cJ=null
$.eb=0
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
I.$lazy(y,x,w)}})(["cH","$get$cH",function(){return H.ed("_$dart_dartClosure")},"bS","$get$bS",function(){return H.ed("_$dart_js")},"dr","$get$dr",function(){return H.W(H.bq({
toString:function(){return"$receiver$"}}))},"ds","$get$ds",function(){return H.W(H.bq({$method$:null,
toString:function(){return"$receiver$"}}))},"dt","$get$dt",function(){return H.W(H.bq(null))},"du","$get$du",function(){return H.W(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dy","$get$dy",function(){return H.W(H.bq(void 0))},"dz","$get$dz",function(){return H.W(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dw","$get$dw",function(){return H.W(H.dx(null))},"dv","$get$dv",function(){return H.W(function(){try{null.$method$}catch(z){return z.message}}())},"dB","$get$dB",function(){return H.W(H.dx(void 0))},"dA","$get$dA",function(){return H.W(function(){try{(void 0).$method$}catch(z){return z.message}}())},"c2","$get$c2",function(){return P.i2()},"cU","$get$cU",function(){var z,y
z=P.aX
y=new P.af(0,P.i0(),null,[z])
y.d3(null,z)
return y},"aL","$get$aL",function(){return[]},"cG","$get$cG",function(){return{}},"dN","$get$dN",function(){return P.bV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"c4","$get$c4",function(){return P.P()},"dh","$get$dh",function(){return new G.dp(1281,0,4294967295)},"cB","$get$cB",function(){return G.dn(1281,1281,1281)},"cA","$get$cA",function(){return G.dn(32774,770,769)},"S","$get$S",function(){return P.d_(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a5,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a3,"uAnimationTable",C.h,"uTime",C.a2,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.e,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"dG","$get$dG",function(){return C.D},"el","$get$el",function(){var z=G.bh("PointSpritesV")
z.aq(["aPosition"])
z.ar(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.as(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"ek","$get$ek",function(){var z=G.bh("PointSpritesF")
z.ar(["uTexture"])
z.as(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"eg","$get$eg",function(){var z=G.bh("InstancedV")
z.aq(["aPosition"])
z.aq(["iaRotation","iaTranslation"])
z.b8(["vColor"])
z.ar(["uPerspectiveViewMatrix","uModelMatrix"])
z.b=z.bf(!1,["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main(void) {\n    vec3 P = rotate_vertex_position(aPosition, iaRotation) +\n             iaTranslation;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(P, 1);\n    vColor = vec3(sin(aPosition.x)/2.0+0.5,\n                     cos(aPosition.y)/2.0+0.5, \n                     sin(aPosition.z)/2.0+0.5);\n}\n"],null)
return z},"ef","$get$ef",function(){var z=G.bh("InstancedF")
z.b8(["vColor"])
z.as(["oFragColor = vec4( vColor, 1. );"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.q},{func:1,args:[W.H]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.B]},{func:1,args:[W.bc]},{func:1,ret:P.c9,args:[W.al,P.l,P.l,W.c3]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aG]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aG]},{func:1,v:true,args:[W.q,W.q]},{func:1,v:true,args:[W.a8]},{func:1,v:true,args:[P.ah,T.r]},{func:1,args:[W.aH]},{func:1,args:[P.B,P.c]},{func:1,v:true,args:[P.aN]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.kf(d||a)
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
Isolate.ar=a.ar
Isolate.ao=a.ao
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
if(typeof dartMainRunner==="function")dartMainRunner(U.ei,[])
else U.ei([])})})()
//# sourceMappingURL=instancer.dart.js.map
