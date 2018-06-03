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
b6.$isd=b5
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
var d=supportsDirectProtoAccess&&b2!="d"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cA(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.az=function(){}
var dart=[["","",,H,{"^":"",mr:{"^":"d;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
cE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bn:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cD==null){H.l1()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.ei("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ca()]
if(v!=null)return v
v=H.l5(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$ca(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
h:{"^":"d;",
J:function(a,b){return a===b},
gE:function(a){return H.aP(a)},
k:["d3",function(a){return"Instance of '"+H.aQ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hI:{"^":"h;",
k:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iscy:1},
hJ:{"^":"h;",
J:function(a,b){return null==b},
k:function(a){return"null"},
gE:function(a){return 0},
$isbf:1},
cb:{"^":"h;",
gE:function(a){return 0},
k:["d5",function(a){return String(a)}]},
ie:{"^":"cb;"},
aV:{"^":"cb;"},
aN:{"^":"cb;",
k:function(a){var z=a[$.$get$dj()]
return z==null?this.d5(a):J.aF(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aK:{"^":"h;$ti",
P:function(a,b){var z,y
if(!!a.fixed$length)H.a3(P.u("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.C)(b),++y)a.push(b[y])},
D:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.Q(a))}},
an:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.a(y,x)
y[x]=w}return y.join(b)},
br:function(a,b){return H.e0(a,b,null,H.x(a,0))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
geB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.dB())},
cY:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.a3(P.u("setRange"))
P.dR(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.H()
if(typeof b!=="number")return H.y(b)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$isi){x=e
w=d}else{w=y.br(d,e).eL(0,!1)
x=0}y=J.ai(w)
v=y.gj(w)
if(typeof v!=="number")return H.y(v)
if(x+z>v)throw H.c(H.hG())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
aq:function(a,b,c,d){return this.cY(a,b,c,d,0)},
bU:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.c(P.Q(a))}return!1},
cZ:function(a,b){if(!!a.immutable$list)H.a3(P.u("sort"))
H.iA(a,J.kA())},
aE:function(a){return this.cZ(a,null)},
B:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
k:function(a){return P.c7(a,"[","]")},
gM:function(a){return new J.fW(a,a.length,0,null,[H.x(a,0)])},
gE:function(a){return H.aP(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.a3(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.d3(b,"newLength",null))
if(b<0)throw H.c(P.av(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ah(a,b))
if(b>=a.length||b<0)throw H.c(H.ah(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.a3(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ah(a,b))
if(b>=a.length||b<0)throw H.c(H.ah(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.c.l(a.length,C.c.gj(b))
y=H.w([],[H.x(a,0)])
this.sj(y,z)
this.aq(y,0,a.length,a)
this.aq(y,a.length,z,b)
return y},
$isp:1,
$asp:I.az,
$isk:1,
$isi:1,
t:{
aL:function(a){a.fixed$length=Array
return a},
mp:[function(a,b){return J.fh(a,b)},"$2","kA",8,0,23]}},
mq:{"^":"aK;$ti"},
fW:{"^":"d;a,b,c,d,$ti",
gC:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
as:{"^":"h;",
a0:function(a,b){var z
if(typeof b!=="number")throw H.c(H.X(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gay(b)
if(this.gay(a)===z)return 0
if(this.gay(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gay:function(a){return a===0?1/a<0:a<0},
eK:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.u(""+a+".toInt()"))},
ec:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.c(P.u(""+a+".ceil()"))},
eq:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.u(""+a+".floor()"))},
aB:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
ed:function(a,b,c){if(this.a0(b,c)>0)throw H.c(H.X(b))
if(this.a0(a,b)<0)return b
if(this.a0(a,c)>0)return c
return a},
eN:function(a,b){var z
if(b>20)throw H.c(P.av(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gay(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){return a&0x1FFFFFFF},
X:function(a){return-a},
l:function(a,b){if(typeof b!=="number")throw H.c(H.X(b))
return a+b},
H:function(a,b){if(typeof b!=="number")throw H.c(H.X(b))
return a-b},
m:function(a,b){if(typeof b!=="number")throw H.c(H.X(b))
return a*b},
d7:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bO(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.bO(a,b)},
bO:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.u("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bM:function(a,b){var z
if(a>0)z=this.dY(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dY:function(a,b){return b>31?0:a>>>b},
a8:function(a,b){if(typeof b!=="number")throw H.c(H.X(b))
return a<b},
ap:function(a,b){if(typeof b!=="number")throw H.c(H.X(b))
return a>b},
$isay:1,
$isb2:1},
c9:{"^":"as;",
X:function(a){return-a},
$isF:1},
dC:{"^":"as;"},
aM:{"^":"h;",
ee:function(a,b){if(b>=a.length)H.a3(H.ah(a,b))
return a.charCodeAt(b)},
bF:function(a,b){if(b>=a.length)throw H.c(H.ah(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.c(P.d3(b,null,null))
return a+b},
d0:function(a,b,c){var z
if(c>a.length)throw H.c(P.av(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
d_:function(a,b){return this.d0(a,b,0)},
bu:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.a3(H.X(c))
if(b<0)throw H.c(P.bE(b,null,null))
if(typeof c!=="number")return H.y(c)
if(b>c)throw H.c(P.bE(b,null,null))
if(c>a.length)throw H.c(P.bE(c,null,null))
return a.substring(b,c)},
d1:function(a,b){return this.bu(a,b,null)},
eM:function(a){return a.toLowerCase()},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.D)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
eg:function(a,b,c){if(c>a.length)throw H.c(P.av(c,0,a.length,null,null))
return H.ld(a,b,c)},
a0:function(a,b){var z
if(typeof b!=="string")throw H.c(H.X(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gE:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.ah(a,b))
return a[b]},
$isp:1,
$asp:I.az,
$isn:1}}],["","",,H,{"^":"",
dB:function(){return new P.bG("No element")},
hH:function(){return new P.bG("Too many elements")},
hG:function(){return new P.bG("Too few elements")},
iA:function(a,b){var z=J.a4(a)
if(typeof z!=="number")return z.H()
H.bg(a,0,z-1,b)},
bg:function(a,b,c,d){if(c-b<=32)H.iz(a,b,c,d)
else H.iy(a,b,c,d)},
iz:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.ai(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.U(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
iy:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.c.ac(c-b+1,6)
y=b+z
x=c-z
w=C.c.ac(b+c,2)
v=w-z
u=w+z
t=J.ai(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.U(d.$2(s,r),0)){n=r
r=s
s=n}if(J.U(d.$2(p,o),0)){n=o
o=p
p=n}if(J.U(d.$2(s,q),0)){n=q
q=s
s=n}if(J.U(d.$2(r,q),0)){n=q
q=r
r=n}if(J.U(d.$2(s,p),0)){n=p
p=s
s=n}if(J.U(d.$2(q,p),0)){n=p
p=q
q=n}if(J.U(d.$2(r,o),0)){n=o
o=r
r=n}if(J.U(d.$2(r,q),0)){n=q
q=r
r=n}if(J.U(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.M(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.J(i,0))continue
if(h.a8(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.b1(i)
if(h.ap(i,0)){--l
continue}else{g=l-1
if(h.a8(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.b4(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.U(d.$2(j,p),0))for(;!0;)if(J.U(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b4(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}e=!1}h=m-1
t.i(a,b,t.h(a,h))
t.i(a,h,r)
h=l+1
t.i(a,c,t.h(a,h))
t.i(a,h,p)
H.bg(a,b,m-2,d)
H.bg(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.M(d.$2(t.h(a,m),r),0);)++m
for(;J.M(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.M(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.M(d.$2(j,p),0))for(;!0;)if(J.M(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b4(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.bg(a,m,l,d)}else H.bg(a,m,l,d)},
k:{"^":"aJ;$ti"},
bz:{"^":"k;$ti",
gM:function(a){return new H.dG(this,this.gj(this),0,null,[H.cC(this,"bz",0)])},
D:function(a,b){var z,y
z=this.gj(this)
if(typeof z!=="number")return H.y(z)
y=0
for(;y<z;++y){b.$1(this.w(0,y))
if(z!==this.gj(this))throw H.c(P.Q(this))}},
be:function(a,b){return this.d4(0,b)}},
iM:{"^":"bz;a,b,c,$ti",
dt:function(a,b,c,d){},
gdM:function(){var z=J.a4(this.a)
return z},
gdZ:function(){var z,y
z=J.a4(this.a)
y=this.b
if(typeof z!=="number")return H.y(z)
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a4(this.a)
y=this.b
if(typeof z!=="number")return H.y(z)
if(y>=z)return 0
return z-y},
w:function(a,b){var z,y
z=this.gdZ()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.y(b)
y=z+b
if(!(b<0)){z=this.gdM()
if(typeof z!=="number")return H.y(z)
z=y>=z}else z=!0
if(z)throw H.c(P.D(b,this,"index",null,null))
return J.cN(this.a,y)},
eL:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.ai(y)
w=x.gj(y)
if(typeof w!=="number")return w.H()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.w(u,this.$ti)
for(s=0;s<v;++s){u=x.w(y,z+s)
if(s>=t.length)return H.a(t,s)
t[s]=u
u=x.gj(y)
if(typeof u!=="number")return u.a8()
if(u<w)throw H.c(P.Q(this))}return t},
t:{
e0:function(a,b,c,d){var z=new H.iM(a,b,c,[d])
z.dt(a,b,c,d)
return z}}},
dG:{"^":"d;a,b,c,d,$ti",
gC:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.ai(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.Q(z))
w=this.c
if(typeof x!=="number")return H.y(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
dI:{"^":"aJ;a,b,$ti",
gM:function(a){return new H.ci(null,J.ak(this.a),this.b,this.$ti)},
gj:function(a){return J.a4(this.a)},
$asaJ:function(a,b){return[b]},
t:{
hT:function(a,b,c,d){if(!!a.$isk)return new H.hn(a,b,[c,d])
return new H.dI(a,b,[c,d])}}},
hn:{"^":"dI;a,b,$ti",$isk:1,
$ask:function(a,b){return[b]}},
ci:{"^":"c8;a,b,c,$ti",
u:function(){var z=this.b
if(z.u()){this.a=this.c.$1(z.gC(z))
return!0}this.a=null
return!1},
gC:function(a){return this.a},
$asc8:function(a,b){return[b]}},
hU:{"^":"bz;a,b,$ti",
gj:function(a){return J.a4(this.a)},
w:function(a,b){return this.b.$1(J.cN(this.a,b))},
$ask:function(a,b){return[b]},
$asbz:function(a,b){return[b]},
$asaJ:function(a,b){return[b]}},
ej:{"^":"aJ;a,b,$ti",
gM:function(a){return new H.iX(J.ak(this.a),this.b,this.$ti)}},
iX:{"^":"c8;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gC(z))===!0)return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bx:{"^":"d;$ti"}}],["","",,H,{"^":"",
kU:function(a){return init.types[a]},
l4:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isr},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aF(a)
if(typeof z!=="string")throw H.c(H.X(a))
return z},
aP:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aQ:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.o(a).$isaV){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bF(w,0)===36)w=C.i.d1(w,1)
r=H.bQ(H.aA(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
P:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
im:function(a){return a.b?H.P(a).getUTCFullYear()+0:H.P(a).getFullYear()+0},
ik:function(a){return a.b?H.P(a).getUTCMonth()+1:H.P(a).getMonth()+1},
ig:function(a){return a.b?H.P(a).getUTCDate()+0:H.P(a).getDate()+0},
ih:function(a){return a.b?H.P(a).getUTCHours()+0:H.P(a).getHours()+0},
ij:function(a){return a.b?H.P(a).getUTCMinutes()+0:H.P(a).getMinutes()+0},
il:function(a){return a.b?H.P(a).getUTCSeconds()+0:H.P(a).getSeconds()+0},
ii:function(a){return a.b?H.P(a).getUTCMilliseconds()+0:H.P(a).getMilliseconds()+0},
y:function(a){throw H.c(H.X(a))},
a:function(a,b){if(a==null)J.a4(a)
throw H.c(H.ah(a,b))},
ah:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ab(!0,b,"index",null)
z=J.a4(a)
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.D(b,a,"index",null,z)
return P.bE(b,"index",null)},
X:function(a){return new P.ab(!0,a,null,null)},
S:function(a){if(typeof a!=="number")throw H.c(H.X(a))
return a},
c:function(a){var z
if(a==null)a=new P.dO()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f7})
z.name=""}else z.toString=H.f7
return z},
f7:function(){return J.aF(this.dartException)},
a3:function(a){throw H.c(a)},
C:function(a){throw H.c(P.Q(a))},
Z:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bM(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cc(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dN(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e5()
u=$.$get$e6()
t=$.$get$e7()
s=$.$get$e8()
r=$.$get$ec()
q=$.$get$ed()
p=$.$get$ea()
$.$get$e9()
o=$.$get$ef()
n=$.$get$ee()
m=v.Z(y)
if(m!=null)return z.$1(H.cc(y,m))
else{m=u.Z(y)
if(m!=null){m.method="call"
return z.$1(H.cc(y,m))}else{m=t.Z(y)
if(m==null){m=s.Z(y)
if(m==null){m=r.Z(y)
if(m==null){m=q.Z(y)
if(m==null){m=p.Z(y)
if(m==null){m=s.Z(y)
if(m==null){m=o.Z(y)
if(m==null){m=n.Z(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dN(y,m))}}return z.$1(new H.iS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dX()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ab(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dX()
return a},
ao:function(a){var z
if(a==null)return new H.eA(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eA(a,null)},
kQ:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
l3:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.dv("Unsupported number of arguments for wrapped closure"))},
ag:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l3)
a.$identity=z
return z},
h7:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$isi){z.$reflectionInfo=c
x=H.ip(z).r}else x=c
w=d?Object.create(new H.iB().constructor.prototype):Object.create(new H.bZ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a5
$.a5=J.aD(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.d8(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kU,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.d6:H.c_
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.d8(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
h4:function(a,b,c,d){var z=H.c_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d8:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h6(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h4(y,!w,z,b)
if(y===0){w=$.a5
$.a5=J.aD(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aG
if(v==null){v=H.bv("self")
$.aG=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a5
$.a5=J.aD(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aG
if(v==null){v=H.bv("self")
$.aG=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
h5:function(a,b,c,d){var z,y
z=H.c_
y=H.d6
switch(b?-1:a){case 0:throw H.c(H.iu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h6:function(a,b){var z,y,x,w,v,u,t,s
z=$.aG
if(z==null){z=H.bv("self")
$.aG=z}y=$.d5
if(y==null){y=H.bv("receiver")
$.d5=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h5(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.a5
$.a5=J.aD(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.a5
$.a5=J.aD(y,1)
return new Function(z+H.b(y)+"}")()},
cA:function(a,b,c,d,e,f){var z,y
z=J.aL(b)
y=!!J.o(c).$isi?J.aL(c):c
return H.h7(a,z,y,!!d,e,f)},
la:function(a,b){var z=J.ai(b)
throw H.c(H.d7(a,z.bu(b,3,z.gj(b))))},
a2:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.la(a,b)},
cB:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eP:function(a,b){var z,y
if(a==null)return!1
z=H.cB(J.o(a))
if(z==null)y=!1
else y=H.eV(z,b)
return y},
kI:function(a){var z
if(a instanceof H.j){z=H.cB(J.o(a))
if(z!=null)return H.cF(z,null)
return"Closure"}return H.aQ(a)},
le:function(a){throw H.c(new P.hc(a))},
eT:function(a){return init.getIsolateTag(a)},
w:function(a,b){a.$ti=b
return a},
aA:function(a){if(a==null)return
return a.$ti},
nS:function(a,b,c){return H.b3(a["$as"+H.b(c)],H.aA(b))},
bo:function(a,b,c,d){var z=H.b3(a["$as"+H.b(c)],H.aA(b))
return z==null?null:z[d]},
cC:function(a,b,c){var z=H.b3(a["$as"+H.b(b)],H.aA(a))
return z==null?null:z[c]},
x:function(a,b){var z=H.aA(a)
return z==null?null:z[b]},
cF:function(a,b){var z=H.aC(a,b)
return z},
aC:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bQ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aC(z,b)
return H.kz(a,b)}return"unknown-reified-type"},
kz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aC(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aC(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kP(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aC(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bQ:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.co("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}return w?"":"<"+z.k(0)+">"},
kT:function(a){var z,y,x
if(a instanceof H.j){z=H.cB(J.o(a))
if(z!=null)return H.cF(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bQ(a.$ti,0,null)
return y+x},
b3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cz:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aA(a)
y=J.o(a)
if(y[b]==null)return!1
return H.eL(H.b3(y[d],z),c)},
br:function(a,b,c,d){var z,y
if(a==null)return a
z=H.cz(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bQ(c,0,null)
throw H.c(H.d7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eL:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.T(a[y],b[y]))return!1
return!0},
nQ:function(a,b,c){return a.apply(b,H.b3(J.o(b)["$as"+H.b(c)],H.aA(b)))},
T:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="bf")return!0
if('func' in b)return H.eV(a,b)
if('func' in a)return b.builtin$cls==="mh"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cF(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eL(H.b3(u,z),x)},
eK:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.T(z,v)||H.T(v,z)))return!1}return!0},
kJ:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aL(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.T(v,u)||H.T(u,v)))return!1}return!0},
eV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.T(z,y)||H.T(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eK(x,w,!1))return!1
if(!H.eK(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.T(o,n)||H.T(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.T(o,n)||H.T(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.T(o,n)||H.T(n,o)))return!1}}return H.kJ(a.named,b.named)},
nR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
l5:function(a){var z,y,x,w,v,u
z=$.eU.$1(a)
y=$.bN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eJ.$2(a,z)
if(z!=null){y=$.bN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bR(x)
$.bN[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bP[z]=x
return x}if(v==="-"){u=H.bR(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f0(a,x)
if(v==="*")throw H.c(P.ei(z))
if(init.leafTags[z]===true){u=H.bR(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f0(a,x)},
f0:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cE(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bR:function(a){return J.cE(a,!1,null,!!a.$isr)},
l9:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bR(z)
else return J.cE(z,c,null,null)},
l1:function(){if(!0===$.cD)return
$.cD=!0
H.l2()},
l2:function(){var z,y,x,w,v,u,t,s
$.bN=Object.create(null)
$.bP=Object.create(null)
H.kY()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f2.$1(v)
if(u!=null){t=H.l9(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kY:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.ax(C.H,H.ax(C.M,H.ax(C.v,H.ax(C.v,H.ax(C.L,H.ax(C.I,H.ax(C.J(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eU=new H.kZ(v)
$.eJ=new H.l_(u)
$.f2=new H.l0(t)},
ax:function(a,b){return a(b)||b},
ld:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
io:{"^":"d;a,b,c,d,e,f,r,x",t:{
ip:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aL(z)
y=z[0]
x=z[1]
return new H.io(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
iQ:{"^":"d;a,b,c,d,e,f",
Z:function(a){var z,y,x
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
t:{
a7:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eb:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ia:{"^":"K;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
t:{
dN:function(a,b){return new H.ia(a,b==null?null:b.method)}}},
hL:{"^":"K;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
t:{
cc:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hL(a,y,z?null:b.receiver)}}},
iS:{"^":"K;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lf:{"^":"j:0;a",
$1:function(a){if(!!J.o(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eA:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaT:1},
j:{"^":"d;",
k:function(a){return"Closure '"+H.aQ(this).trim()+"'"},
gcS:function(){return this},
gcS:function(){return this}},
e1:{"^":"j;"},
iB:{"^":"e1;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bZ:{"^":"e1;a,b,c,d",
J:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gE:function(a){var z,y
z=this.c
if(z==null)y=H.aP(this.a)
else y=typeof z!=="object"?J.aa(z):H.aP(z)
return(y^H.aP(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aQ(z)+"'")},
t:{
c_:function(a){return a.a},
d6:function(a){return a.c},
bv:function(a){var z,y,x,w,v
z=new H.bZ("self","target","receiver","name")
y=J.aL(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
h1:{"^":"K;a",
k:function(a){return this.a},
t:{
d7:function(a,b){return new H.h1("CastError: "+H.b(P.c2(a))+": type '"+H.kI(a)+"' is not a subtype of type '"+b+"'")}}},
it:{"^":"K;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
t:{
iu:function(a){return new H.it(a)}}},
eg:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gE:function(a){return J.aa(this.a)},
J:function(a,b){if(b==null)return!1
return b instanceof H.eg&&J.M(this.a,b.a)}},
dD:{"^":"ch;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gS:function(a){return new H.dE(this,[H.x(this,0)])},
gcO:function(a){var z=H.x(this,0)
return H.hT(new H.dE(this,[z]),new H.hK(this),z,H.x(this,1))},
aw:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bH(y,b)}else return this.ez(b)},
ez:function(a){var z=this.d
if(z==null)return!1
return this.b4(this.aS(z,J.aa(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.au(z,b)
x=y==null?null:y.gam()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.au(w,b)
x=y==null?null:y.gam()
return x}else return this.eA(b)},
eA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aS(z,J.aa(a)&0x3ffffff)
x=this.b4(y,a)
if(x<0)return
return y[x].gam()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aW()
this.b=z}this.bB(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aW()
this.c=y}this.bB(y,b,c)}else{x=this.d
if(x==null){x=this.aW()
this.d=x}w=J.aa(b)&0x3ffffff
v=this.aS(x,w)
if(v==null)this.b0(x,w,[this.aM(b,c)])
else{u=this.b4(v,b)
if(u>=0)v[u].sam(c)
else v.push(this.aM(b,c))}}},
D:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.Q(this))
z=z.c}},
bB:function(a,b,c){var z=this.au(a,b)
if(z==null)this.b0(a,b,this.aM(b,c))
else z.sam(c)},
bC:function(){this.r=this.r+1&67108863},
aM:function(a,b){var z,y
z=new H.hQ(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bC()
return z},
b4:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].gex(),b))return y
return-1},
k:function(a){return P.dH(this)},
au:function(a,b){return a[b]},
aS:function(a,b){return a[b]},
b0:function(a,b,c){a[b]=c},
dK:function(a,b){delete a[b]},
bH:function(a,b){return this.au(a,b)!=null},
aW:function(){var z=Object.create(null)
this.b0(z,"<non-identifier-key>",z)
this.dK(z,"<non-identifier-key>")
return z}},
hK:{"^":"j:0;a",
$1:function(a){return this.a.h(0,a)}},
hQ:{"^":"d;ex:a<,am:b@,c,d"},
dE:{"^":"k;a,$ti",
gj:function(a){return this.a.a},
gM:function(a){var z,y
z=this.a
y=new H.ad(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
D:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.c(P.Q(z))
y=y.c}}},
ad:{"^":"d;a,b,c,d,$ti",
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.Q(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kZ:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
l_:{"^":"j:10;a",
$2:function(a,b){return this.a(a,b)}},
l0:{"^":"j:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
kP:function(a){return J.aL(H.w(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bK:function(a){var z,y,x
if(!!J.o(a).$isp)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a9:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ah(b,a))},
i6:{"^":"h;","%":"DataView;ArrayBufferView;cj|eu|ev|dK|ew|ex|al"},
cj:{"^":"i6;",
gj:function(a){return a.length},
$isp:1,
$asp:I.az,
$isr:1,
$asr:I.az},
dK:{"^":"ev;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a9(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.ay]},
$asbx:function(){return[P.ay]},
$asl:function(){return[P.ay]},
$isi:1,
$asi:function(){return[P.ay]},
"%":"Float64Array"},
al:{"^":"ex;",
i:function(a,b,c){H.a9(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.F]},
$asbx:function(){return[P.F]},
$asl:function(){return[P.F]},
$isi:1,
$asi:function(){return[P.F]}},
i5:{"^":"dK;",$isc3:1,"%":"Float32Array"},
mJ:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mK:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
$ishE:1,
"%":"Int32Array"},
mL:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mM:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mN:{"^":"al;",
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mO:{"^":"al;",
gj:function(a){return a.length},
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mP:{"^":"al;",
gj:function(a){return a.length},
h:function(a,b){H.a9(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eu:{"^":"cj+l;"},
ev:{"^":"eu+bx;"},
ew:{"^":"cj+l;"},
ex:{"^":"ew+bx;"}}],["","",,P,{"^":"",
j1:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kK()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ag(new P.j3(z),1)).observe(y,{childList:true})
return new P.j2(z,y,x)}else if(self.setImmediate!=null)return P.kL()
return P.kM()},
nC:[function(a){self.scheduleImmediate(H.ag(new P.j4(a),0))},"$1","kK",4,0,6],
nD:[function(a){self.setImmediate(H.ag(new P.j5(a),0))},"$1","kL",4,0,6],
nE:[function(a){P.kd(0,a)},"$1","kM",4,0,6],
kD:function(a,b){if(H.eP(a,{func:1,args:[P.bf,P.bf]})){b.toString
return a}else{b.toString
return a}},
kC:function(){var z,y
for(;z=$.aw,z!=null;){$.b_=null
y=z.b
$.aw=y
if(y==null)$.aZ=null
z.a.$0()}},
nP:[function(){$.cw=!0
try{P.kC()}finally{$.b_=null
$.cw=!1
if($.aw!=null)$.$get$cr().$1(P.eM())}},"$0","eM",0,0,3],
eH:function(a){var z=new P.ek(a,null)
if($.aw==null){$.aZ=z
$.aw=z
if(!$.cw)$.$get$cr().$1(P.eM())}else{$.aZ.b=z
$.aZ=z}},
kH:function(a){var z,y,x
z=$.aw
if(z==null){P.eH(a)
$.b_=$.aZ
return}y=new P.ek(a,null)
x=$.b_
if(x==null){y.b=z
$.b_=y
$.aw=y}else{y.b=x.b
x.b=y
$.b_=y
if(y.b==null)$.aZ=y}},
lb:function(a){var z=$.B
if(C.f===z){P.bM(null,null,C.f,a)
return}z.toString
P.bM(null,null,z,z.bX(a))},
kG:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.Z(u)
y=H.ao(u)
$.B.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aE(x)
w=t
v=x.ga5()
c.$2(w,v)}}},
kv:function(a,b,c,d){var z=a.eb(0)
if(!!J.o(z).$isbb&&z!==$.$get$dy())z.eQ(new P.ky(b,c,d))
else b.ai(c,d)},
kw:function(a,b){return new P.kx(a,b)},
j_:function(){return $.B},
bL:function(a,b,c,d,e){var z={}
z.a=d
P.kH(new P.kE(z,e))},
eF:function(a,b,c,d){var z,y
y=$.B
if(y===c)return d.$0()
$.B=c
z=y
try{y=d.$0()
return y}finally{$.B=z}},
eG:function(a,b,c,d,e){var z,y
y=$.B
if(y===c)return d.$1(e)
$.B=c
z=y
try{y=d.$1(e)
return y}finally{$.B=z}},
kF:function(a,b,c,d,e,f){var z,y
y=$.B
if(y===c)return d.$2(e,f)
$.B=c
z=y
try{y=d.$2(e,f)
return y}finally{$.B=z}},
bM:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bX(d):c.e8(d)
P.eH(d)},
j3:{"^":"j:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j2:{"^":"j:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j4:{"^":"j:1;a",
$0:function(){this.a.$0()}},
j5:{"^":"j:1;a",
$0:function(){this.a.$0()}},
kc:{"^":"d;a,b,c",
dG:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ag(new P.ke(this,b),0),a)
else throw H.c(P.u("`setTimeout()` not found."))},
t:{
kd:function(a,b){var z=new P.kc(!0,null,0)
z.dG(a,b)
return z}}},
ke:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ls:{"^":"d;$ti"},
j8:{"^":"d;$ti"},
k7:{"^":"j8;a,$ti",
ef:function(a,b){var z=this.a
if(z.a!==0)throw H.c(P.cn("Future already completed"))
z.at(b)}},
en:{"^":"d;aY:a<,b,c,d,e,$ti",
ge3:function(){return this.b.b},
gcl:function(){return(this.c&1)!==0},
gew:function(){return(this.c&2)!==0},
gck:function(){return this.c===8},
eu:function(a){return this.b.b.bc(this.d,a)},
eC:function(a){if(this.c!==6)return!0
return this.b.b.bc(this.d,J.aE(a))},
es:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eP(z,{func:1,args:[P.d,P.aT]}))return x.eG(z,y.gW(a),a.ga5())
else return x.bc(z,y.gW(a))},
ev:function(){return this.b.b.ct(this.d)}},
am:{"^":"d;bN:a<,b,dU:c<,$ti",
dC:function(a,b){this.a=4
this.c=a},
gdP:function(){return this.a===2},
gaT:function(){return this.a>=4},
cA:function(a,b){var z,y,x
z=$.B
if(z!==C.f){z.toString
if(b!=null)b=P.kD(b,z)}y=new P.am(0,z,null,[null])
x=b==null?1:3
this.aN(new P.en(null,y,x,a,b,[H.x(this,0),null]))
return y},
cz:function(a){return this.cA(a,null)},
eQ:function(a){var z,y
z=$.B
y=new P.am(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.x(this,0)
this.aN(new P.en(null,y,8,a,null,[z,z]))
return y},
aN:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaT()){y.aN(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bM(null,null,z,new P.jn(this,a))}},
bK:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaY()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaT()){v.bK(a)
return}this.a=v.a
this.c=v.c}z.a=this.b_(a)
y=this.b
y.toString
P.bM(null,null,y,new P.js(z,this))}},
av:function(){var z=this.c
this.c=null
return this.b_(z)},
b_:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaY()
z.a=y}return y},
at:function(a){var z,y,x
z=this.$ti
y=H.cz(a,"$isbb",z,"$asbb")
if(y){z=H.cz(a,"$isam",z,null)
if(z)P.eo(a,this)
else P.jo(a,this)}else{x=this.av()
this.a=4
this.c=a
P.aY(this,x)}},
ai:[function(a,b){var z=this.av()
this.a=8
this.c=new P.bu(a,b)
P.aY(this,z)},function(a){return this.ai(a,null)},"eT","$2","$1","gbG",4,2,13],
$isbb:1,
t:{
jo:function(a,b){var z,y,x
b.a=1
try{a.cA(new P.jp(b),new P.jq(b))}catch(x){z=H.Z(x)
y=H.ao(x)
P.lb(new P.jr(b,z,y))}},
eo:function(a,b){var z
for(;a.gdP();)a=a.c
if(a.gaT()){z=b.av()
b.a=a.a
b.c=a.c
P.aY(b,z)}else{z=b.c
b.a=2
b.c=a
a.bK(z)}},
aY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aE(v)
t=v.ga5()
y.toString
P.bL(null,null,y,u,t)}return}for(;b.gaY()!=null;b=s){s=b.a
b.a=null
P.aY(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gcl()||b.gck()){q=b.ge3()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aE(v)
t=v.ga5()
y.toString
P.bL(null,null,y,u,t)
return}p=$.B
if(p==null?q!=null:p!==q)$.B=q
else p=null
if(b.gck())new P.jv(z,x,b,w).$0()
else if(y){if(b.gcl())new P.ju(x,b,r).$0()}else if(b.gew())new P.jt(z,x,b).$0()
if(p!=null)$.B=p
y=x.b
if(!!J.o(y).$isbb){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.b_(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.eo(y,o)
return}}o=b.b
b=o.av()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
jn:{"^":"j:1;a,b",
$0:function(){P.aY(this.a,this.b)}},
js:{"^":"j:1;a,b",
$0:function(){P.aY(this.b,this.a.a)}},
jp:{"^":"j:0;a",
$1:function(a){var z=this.a
z.a=0
z.at(a)}},
jq:{"^":"j:14;a",
$2:function(a,b){this.a.ai(a,b)},
$1:function(a){return this.$2(a,null)}},
jr:{"^":"j:1;a,b,c",
$0:function(){this.a.ai(this.b,this.c)}},
jv:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ev()}catch(w){y=H.Z(w)
x=H.ao(w)
if(this.d){v=J.aE(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bu(y,x)
u.a=!0
return}if(!!J.o(z).$isbb){if(z instanceof P.am&&z.gbN()>=4){if(z.gbN()===8){v=this.b
v.b=z.gdU()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.cz(new P.jw(t))
v.a=!1}}},
jw:{"^":"j:0;a",
$1:function(a){return this.a}},
ju:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.eu(this.c)}catch(x){z=H.Z(x)
y=H.ao(x)
w=this.a
w.b=new P.bu(z,y)
w.a=!0}}},
jt:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.eC(z)===!0&&w.e!=null){v=this.b
v.b=w.es(z)
v.a=!1}}catch(u){y=H.Z(u)
x=H.ao(u)
w=this.a
v=J.aE(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bu(y,x)
s.a=!0}}},
ek:{"^":"d;a,b"},
dZ:{"^":"d;$ti",
D:function(a,b){var z,y
z={}
y=new P.am(0,$.B,null,[null])
z.a=null
z.a=this.co(new P.iI(z,this,b,y),!0,new P.iJ(y),y.gbG())
return y},
gj:function(a){var z,y
z={}
y=new P.am(0,$.B,null,[P.F])
z.a=0
this.co(new P.iK(z),!0,new P.iL(z,y),y.gbG())
return y}},
iI:{"^":"j;a,b,c,d",
$1:function(a){P.kG(new P.iG(this.c,a),new P.iH(),P.kw(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cC(this.b,"dZ",0)]}}},
iG:{"^":"j:1;a,b",
$0:function(){return this.a.$1(this.b)}},
iH:{"^":"j:0;",
$1:function(a){}},
iJ:{"^":"j:1;a",
$0:function(){this.a.at(null)}},
iK:{"^":"j:0;a",
$1:function(a){++this.a.a}},
iL:{"^":"j:1;a,b",
$0:function(){this.b.at(this.a.a)}},
iF:{"^":"d;$ti"},
ky:{"^":"j:1;a,b,c",
$0:function(){return this.a.ai(this.b,this.c)}},
kx:{"^":"j:15;a,b",
$2:function(a,b){P.kv(this.a,this.b,a,b)}},
bu:{"^":"d;W:a>,a5:b<",
k:function(a){return H.b(this.a)},
$isK:1},
kk:{"^":"d;"},
kE:{"^":"j:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dO()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=J.aF(y)
throw x}},
jR:{"^":"kk;",
eH:function(a){var z,y,x
try{if(C.f===$.B){a.$0()
return}P.eF(null,null,this,a)}catch(x){z=H.Z(x)
y=H.ao(x)
P.bL(null,null,this,z,y)}},
eI:function(a,b){var z,y,x
try{if(C.f===$.B){a.$1(b)
return}P.eG(null,null,this,a,b)}catch(x){z=H.Z(x)
y=H.ao(x)
P.bL(null,null,this,z,y)}},
e8:function(a){return new P.jT(this,a)},
bX:function(a){return new P.jS(this,a)},
e9:function(a){return new P.jU(this,a)},
h:function(a,b){return},
ct:function(a){if($.B===C.f)return a.$0()
return P.eF(null,null,this,a)},
bc:function(a,b){if($.B===C.f)return a.$1(b)
return P.eG(null,null,this,a,b)},
eG:function(a,b,c){if($.B===C.f)return a.$2(b,c)
return P.kF(null,null,this,a,b,c)}},
jT:{"^":"j:1;a,b",
$0:function(){return this.a.ct(this.b)}},
jS:{"^":"j:1;a,b",
$0:function(){return this.a.eH(this.b)}},
jU:{"^":"j:0;a,b",
$1:function(a){return this.a.eI(this.b,a)}}}],["","",,P,{"^":"",
J:function(){return new H.dD(0,null,null,null,null,null,0,[null,null])},
cf:function(a){return H.kQ(a,new H.dD(0,null,null,null,null,null,0,[null,null]))},
a0:function(a,b,c,d){return new P.jE(0,null,null,null,null,null,0,[d])},
hF:function(a,b,c){var z,y
if(P.cx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$b0()
y.push(a)
try{P.kB(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.e_(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c7:function(a,b,c){var z,y,x
if(P.cx(a))return b+"..."+c
z=new P.co(b)
y=$.$get$b0()
y.push(a)
try{x=z
x.a=P.e_(x.gab(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.gab()+c
y=z.gab()
return y.charCodeAt(0)==0?y:y},
cx:function(a){var z,y
for(z=0;y=$.$get$b0(),z<y.length;++z)if(a===y[z])return!0
return!1},
kB:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gM(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.b(z.gC(z))
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.u()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.u();t=s,s=r){r=z.gC(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
cg:function(a,b){var z,y
z=P.a0(null,null,null,b)
for(y=J.ak(a);y.u();)z.I(0,y.gC(y))
return z},
dH:function(a){var z,y,x
z={}
if(P.cx(a))return"{...}"
y=new P.co("")
try{$.$get$b0().push(a)
x=y
x.a=x.gab()+"{"
z.a=!0
J.cO(a,new P.hS(z,y))
z=y
z.a=z.gab()+"}"}finally{z=$.$get$b0()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gab()
return z.charCodeAt(0)==0?z:z},
jE:{"^":"jy;a,b,c,d,e,f,r,$ti",
gM:function(a){var z=new P.cu(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
B:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dJ(b)},
dJ:function(a){var z=this.d
if(z==null)return!1
return this.aR(z[this.aO(a)],a)>=0},
D:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.c(P.Q(this))
z=z.b}},
I:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cv()
this.b=z}return this.bD(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cv()
this.c=y}return this.bD(y,b)}else return this.dH(0,b)},
dH:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cv()
this.d=z}y=this.aO(b)
x=z[y]
if(x==null)z[y]=[this.aX(b)]
else{if(this.aR(x,b)>=0)return!1
x.push(this.aX(b))}return!0},
cs:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bL(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bL(this.c,b)
else return this.dR(0,b)},
dR:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aO(b)]
x=this.aR(y,b)
if(x<0)return!1
this.bP(y.splice(x,1)[0])
return!0},
al:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aV()}},
bD:function(a,b){if(a[b]!=null)return!1
a[b]=this.aX(b)
return!0},
bL:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bP(z)
delete a[b]
return!0},
aV:function(){this.r=this.r+1&67108863},
aX:function(a){var z,y
z=new P.jF(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aV()
return z},
bP:function(a){var z,y
z=a.gdQ()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aV()},
aO:function(a){return J.aa(a)&0x3ffffff},
aR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].gdL(),b))return y
return-1},
t:{
cv:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jF:{"^":"d;dL:a<,b,dQ:c<"},
cu:{"^":"d;a,b,c,d,$ti",
gC:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.Q(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
jy:{"^":"iv;$ti"},
mu:{"^":"d;$ti",$isk:1},
dF:{"^":"et;$ti",$isk:1,$isi:1},
l:{"^":"d;$ti",
gM:function(a){return new H.dG(a,this.gj(a),0,null,[H.bo(this,a,"l",0)])},
w:function(a,b){return this.h(a,b)},
D:function(a,b){var z,y
z=this.gj(a)
if(typeof z!=="number")return H.y(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.c(P.Q(a))}},
er:function(a,b,c){var z,y,x
z=this.gj(a)
if(typeof z!=="number")return H.y(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.c(P.Q(a))}return y},
br:function(a,b){return H.e0(a,b,null,H.bo(this,a,"l",0))},
l:function(a,b){var z,y,x
z=H.w([],[H.bo(this,a,"l",0)])
y=this.gj(a)
x=C.c.gj(b)
if(typeof y!=="number")return y.l()
C.b.sj(z,C.c.l(y,x))
C.b.aq(z,0,this.gj(a),a)
C.b.aq(z,this.gj(a),z.length,b)
return z},
cj:function(a,b,c,d){var z
P.dR(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.i(a,z,d)},
k:function(a){return P.c7(a,"[","]")}},
ch:{"^":"V;$ti"},
hS:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
V:{"^":"d;$ti",
D:function(a,b){var z,y
for(z=J.ak(this.gS(a));z.u();){y=z.gC(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a4(this.gS(a))},
k:function(a){return P.dH(a)}},
iw:{"^":"d;$ti",
P:function(a,b){var z
for(z=J.ak(b);z.u();)this.I(0,z.gC(z))},
k:function(a){return P.c7(this,"{","}")},
D:function(a,b){var z
for(z=new P.cu(this,this.r,null,null,[null]),z.c=this.e;z.u();)b.$1(z.d)},
$isk:1},
iv:{"^":"iw;$ti"},
et:{"^":"d+l;$ti"}}],["","",,P,{"^":"",
hq:function(a){var z=J.o(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.aQ(a)+"'"},
c2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aF(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hq(a)},
dv:function(a){return new P.jk(a)},
aj:function(a){H.bq(H.b(a))},
cy:{"^":"d;"},
"+bool":0,
dk:{"^":"d;e2:a<,b",
J:function(a,b){if(b==null)return!1
if(!(b instanceof P.dk))return!1
return this.a===b.a&&this.b===b.b},
a0:function(a,b){return C.c.a0(this.a,b.ge2())},
gE:function(a){var z=this.a
return(z^C.c.bM(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.hd(H.im(this))
y=P.b8(H.ik(this))
x=P.b8(H.ig(this))
w=P.b8(H.ih(this))
v=P.b8(H.ij(this))
u=P.b8(H.il(this))
t=P.he(H.ii(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
hd:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
he:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b8:function(a){if(a>=10)return""+a
return"0"+a}}},
ay:{"^":"b2;"},
"+double":0,
ap:{"^":"d;aj:a<",
l:function(a,b){return new P.ap(C.c.l(this.a,b.gaj()))},
H:function(a,b){return new P.ap(this.a-b.gaj())},
m:function(a,b){return new P.ap(C.a.aB(this.a*b))},
a8:function(a,b){return C.c.a8(this.a,b.gaj())},
ap:function(a,b){return C.c.ap(this.a,b.gaj())},
J:function(a,b){if(b==null)return!1
if(!(b instanceof P.ap))return!1
return this.a===b.a},
gE:function(a){return this.a&0x1FFFFFFF},
a0:function(a,b){return C.c.a0(this.a,b.gaj())},
k:function(a){var z,y,x,w,v
z=new P.hm()
y=this.a
if(y<0)return"-"+new P.ap(0-y).k(0)
x=z.$1(C.c.ac(y,6e7)%60)
w=z.$1(C.c.ac(y,1e6)%60)
v=new P.hl().$1(y%1e6)
return""+C.c.ac(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
X:function(a){return new P.ap(0-this.a)},
t:{
hk:function(a,b,c,d,e,f){return new P.ap(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hl:{"^":"j:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hm:{"^":"j:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"d;",
ga5:function(){return H.ao(this.$thrownJsError)}},
dO:{"^":"K;",
k:function(a){return"Throw of null."}},
ab:{"^":"K;a,b,c,d",
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaQ()+y+x
if(!this.a)return w
v=this.gaP()
u=P.c2(this.b)
return w+v+": "+H.b(u)},
t:{
d2:function(a){return new P.ab(!1,null,null,a)},
d3:function(a,b,c){return new P.ab(!0,a,b,c)},
fV:function(a){return new P.ab(!1,null,a,"Must not be null")}}},
dQ:{"^":"ab;e,f,a,b,c,d",
gaQ:function(){return"RangeError"},
gaP:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
t:{
bE:function(a,b,c){return new P.dQ(null,null,!0,a,b,"Value not in range")},
av:function(a,b,c,d,e){return new P.dQ(b,c,!0,a,d,"Invalid value")},
dR:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.y(a)
if(0<=a){if(typeof c!=="number")return H.y(c)
z=a>c}else z=!0
if(z)throw H.c(P.av(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
z=b>c}else z=!0
if(z)throw H.c(P.av(b,a,c,"end",f))
return b}return c}}},
hD:{"^":"ab;e,j:f>,a,b,c,d",
gaQ:function(){return"RangeError"},
gaP:function(){if(J.b4(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
t:{
D:function(a,b,c,d,e){var z=e!=null?e:J.a4(b)
return new P.hD(b,z,!0,a,c,"Index out of range")}}},
iT:{"^":"K;a",
k:function(a){return"Unsupported operation: "+this.a},
t:{
u:function(a){return new P.iT(a)}}},
iR:{"^":"K;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
t:{
ei:function(a){return new P.iR(a)}}},
bG:{"^":"K;a",
k:function(a){return"Bad state: "+this.a},
t:{
cn:function(a){return new P.bG(a)}}},
h8:{"^":"K;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.c2(z))+"."},
t:{
Q:function(a){return new P.h8(a)}}},
ic:{"^":"d;",
k:function(a){return"Out of Memory"},
ga5:function(){return},
$isK:1},
dX:{"^":"d;",
k:function(a){return"Stack Overflow"},
ga5:function(){return},
$isK:1},
hc:{"^":"K;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
lQ:{"^":"d;"},
jk:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
F:{"^":"b2;"},
"+int":0,
aJ:{"^":"d;$ti",
be:["d4",function(a,b){return new H.ej(this,b,[H.cC(this,"aJ",0)])}],
D:function(a,b){var z
for(z=this.gM(this);z.u();)b.$1(z.gC(z))},
gj:function(a){var z,y
z=this.gM(this)
for(y=0;z.u();)++y
return y},
ga9:function(a){var z,y
z=this.gM(this)
if(!z.u())throw H.c(H.dB())
y=z.gC(z)
if(z.u())throw H.c(H.hH())
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.fV("index"))
if(b<0)H.a3(P.av(b,0,null,"index",null))
for(z=this.gM(this),y=0;z.u();){x=z.gC(z)
if(b===y)return x;++y}throw H.c(P.D(b,this,"index",null,y))},
k:function(a){return P.hF(this,"(",")")}},
c8:{"^":"d;$ti"},
i:{"^":"d;$ti",$isk:1},
"+List":0,
bB:{"^":"d;$ti"},
bf:{"^":"d;",
gE:function(a){return P.d.prototype.gE.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
b2:{"^":"d;"},
"+num":0,
d:{"^":";",
J:function(a,b){return this===b},
gE:function(a){return H.aP(this)},
k:function(a){return"Instance of '"+H.aQ(this)+"'"},
toString:function(){return this.k(this)}},
aT:{"^":"d;"},
n:{"^":"d;"},
"+String":0,
co:{"^":"d;ab:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
e_:function(a,b,c){var z=J.ak(b)
if(!z.u())return a
if(c.length===0){do a+=H.b(z.gC(z))
while(z.u())}else{a+=H.b(z.gC(z))
for(;z.u();)a=a+c+H.b(z.gC(z))}return a}}}}],["","",,W,{"^":"",
ho:function(a,b,c){var z,y
z=document.body
y=(z&&C.u).a1(z,a,b,c)
y.toString
z=new H.ej(new W.W(y),new W.hp(),[W.t])
return z.ga9(z)},
du:function(a){return"wheel"},
aH:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fv(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Z(x)}return z},
jh:function(a,b){return document.createElement(a)},
an:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
es:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bJ:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jb(a)
if(!!J.o(z).$isH)return z
return}else return a},
eI:function(a){var z=$.B
if(z===C.f)return a
return z.e9(a)},
z:{"^":"aq;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lh:{"^":"cm;n:x=,p:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
li:{"^":"h;j:length=","%":"AccessibleNodeList"},
lj:{"^":"z;T:target=,ax:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lk:{"^":"z;T:target=,ax:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
lp:{"^":"z;ax:href},T:target=","%":"HTMLBaseElement"},
fZ:{"^":"h;","%":"Response;Body"},
bY:{"^":"z;",$isbY:1,"%":"HTMLBodyElement"},
lq:{"^":"z;N:name=","%":"HTMLButtonElement"},
h0:{"^":"z;K:height},L:width}",
bh:function(a,b,c){if(c!=null)return a.getContext(b,P.kN(c,null))
return a.getContext(b)},
cT:function(a,b){return this.bh(a,b,null)},
"%":"HTMLCanvasElement"},
lr:{"^":"h;eo:fillStyle}",
aC:function(a){return P.Y(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
h2:{"^":"t;j:length=","%":"CDATASection|Comment|Text;CharacterData"},
lt:{"^":"a_;a6:style=","%":"CSSFontFaceRule"},
lu:{"^":"a_;a6:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
lv:{"^":"a_;a6:style=","%":"CSSPageRule"},
lw:{"^":"bw;j:length=","%":"CSSPerspective"},
lx:{"^":"c0;n:x=,p:y=","%":"CSSPositionValue"},
ly:{"^":"bw;n:x=,p:y=,F:z=","%":"CSSRotation"},
a_:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
lz:{"^":"bw;n:x=,p:y=,F:z=","%":"CSSScale"},
h9:{"^":"j9;j:length=",
bE:function(a,b){var z,y
z=$.$get$di()
y=z[b]
if(typeof y==="string")return y
y=this.e_(a,b)
z[b]=y
return y},
e_:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hf()+b
if(z in a)return z
return b},
dX:function(a,b,c,d){a.setProperty(b,c,d)},
sK:function(a,b){a.height=b},
sL:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ha:{"^":"d;",
sep:function(a,b){this.dX(a,this.bE(a,"float"),b,"")}},
lA:{"^":"a_;a6:style=","%":"CSSStyleRule"},
c0:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bw:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lB:{"^":"c0;j:length=","%":"CSSTransformValue"},
lC:{"^":"bw;n:x=,p:y=,F:z=","%":"CSSTranslation"},
lD:{"^":"c0;j:length=","%":"CSSUnparsedValue"},
lE:{"^":"a_;a6:style=","%":"CSSViewportRule"},
lF:{"^":"h;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lG:{"^":"h;n:x=,p:y=,F:z=","%":"DeviceAcceleration"},
hg:{"^":"z;","%":"HTMLDivElement"},
lH:{"^":"t;",
gb6:function(a){return new W.aX(a,"change",!1,[W.N])},
gb7:function(a){return new W.aX(a,"mousedown",!1,[W.R])},
gb8:function(a){return new W.aX(a,"mousemove",!1,[W.R])},
gb9:function(a){return new W.aX(a,"mouseup",!1,[W.R])},
gba:function(a){return new W.aX(a,W.du(a),!1,[W.aW])},
"%":"Document|HTMLDocument|XMLDocument"},
lI:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
lJ:{"^":"hh;",
ga_:function(a){return a.a},
gY:function(a){return a.b},
ga4:function(a){return a.c},
"%":"DOMMatrix"},
hh:{"^":"h;",
ga_:function(a){return a.a},
gY:function(a){return a.b},
ga4:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
lK:{"^":"hi;",
gae:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
hi:{"^":"h;",
gae:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
lL:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.a6]},
$isk:1,
$ask:function(){return[P.a6]},
$isr:1,
$asr:function(){return[P.a6]},
$asl:function(){return[P.a6]},
$isi:1,
$asi:function(){return[P.a6]},
$asm:function(){return[P.a6]},
"%":"ClientRectList|DOMRectList"},
hj:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gL(a))+" x "+H.b(this.gK(a))},
J:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa6)return!1
return a.left===z.gcm(b)&&a.top===z.gcB(b)&&this.gL(a)===z.gL(b)&&this.gK(a)===z.gK(b)},
gE:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gL(a)
w=this.gK(a)
return W.es(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcC:function(a){return new P.ae(a.left,a.top,[null])},
gK:function(a){return a.height},
gcm:function(a){return a.left},
gcB:function(a){return a.top},
gL:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa6:1,
$asa6:I.az,
"%":";DOMRectReadOnly"},
lM:{"^":"jf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[P.n]},
$isk:1,
$ask:function(){return[P.n]},
$isr:1,
$asr:function(){return[P.n]},
$asl:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asm:function(){return[P.n]},
"%":"DOMStringList"},
lN:{"^":"h;j:length=","%":"DOMTokenList"},
aq:{"^":"t;a6:style=,ey:id=,bJ:namespaceURI=,eJ:tagName=",
ge6:function(a){return new W.jg(a)},
k:function(a){return a.localName},
a1:["aF",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dt
if(z==null){z=H.w([],[W.dL])
y=new W.dM(z)
z.push(W.ep(null))
z.push(W.eB())
$.dt=y
d=y}else d=z
z=$.ds
if(z==null){z=new W.eE(d)
$.ds=z
c=z}else{z.a=d
c=z}}if($.ac==null){z=document
y=z.implementation.createHTMLDocument("")
$.ac=y
$.c1=y.createRange()
y=$.ac
y.toString
x=y.createElement("base")
J.fI(x,z.baseURI)
$.ac.head.appendChild(x)}z=$.ac
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.ac
if(!!this.$isbY)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.ac.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.B(C.P,a.tagName)){$.c1.selectNodeContents(w)
v=$.c1.createContextualFragment(b)}else{w.innerHTML=b
v=$.ac.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.ac.body
if(w==null?z!=null:w!==z)J.cV(w)
c.bp(v)
document.adoptNode(v)
return v},function(a,b,c){return this.a1(a,b,c,null)},"ei",null,null,"geU",5,5,null],
cX:function(a,b,c,d){a.textContent=null
a.appendChild(this.a1(a,b,c,d))},
cW:function(a,b){return this.cX(a,b,null,null)},
bg:function(a){return a.getBoundingClientRect()},
gb6:function(a){return new W.a8(a,"change",!1,[W.N])},
gb7:function(a){return new W.a8(a,"mousedown",!1,[W.R])},
gb8:function(a){return new W.a8(a,"mousemove",!1,[W.R])},
gb9:function(a){return new W.a8(a,"mouseup",!1,[W.R])},
gba:function(a){return new W.a8(a,W.du(a),!1,[W.aW])},
$isaq:1,
"%":";Element"},
hp:{"^":"j:0;",
$1:function(a){return!!J.o(a).$isaq}},
lO:{"^":"z;K:height},N:name=,L:width}","%":"HTMLEmbedElement"},
lP:{"^":"N;W:error=","%":"ErrorEvent"},
N:{"^":"h;",
gT:function(a){return W.bJ(a.target)},
aA:function(a){return a.preventDefault()},
$isN:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
H:{"^":"h;",
bT:["d2",function(a,b,c,d){if(c!=null)this.dI(a,b,c,!1)}],
dI:function(a,b,c,d){return a.addEventListener(b,H.ag(c,1),!1)},
dS:function(a,b,c,d){return a.removeEventListener(b,H.ag(c,1),!1)},
$isH:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ey|ez|eC|eD"},
m8:{"^":"z;N:name=","%":"HTMLFieldSetElement"},
m9:{"^":"jm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.b9]},
$isk:1,
$ask:function(){return[W.b9]},
$isr:1,
$asr:function(){return[W.b9]},
$asl:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$asm:function(){return[W.b9]},
"%":"FileList"},
ma:{"^":"H;W:error=","%":"FileReader"},
mb:{"^":"H;W:error=,j:length=","%":"FileWriter"},
md:{"^":"h;a6:style=","%":"FontFace"},
me:{"^":"H;",
eV:function(a,b,c){return a.forEach(H.ag(b,3),c)},
D:function(a,b){b=H.ag(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
mg:{"^":"z;j:length=,N:name=,T:target=","%":"HTMLFormElement"},
mi:{"^":"cm;n:x=,p:y=,F:z=","%":"Gyroscope"},
mj:{"^":"h;j:length=","%":"History"},
mk:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$asl:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ml:{"^":"z;K:height},N:name=,L:width}","%":"HTMLIFrameElement"},
mm:{"^":"z;K:height},L:width}","%":"HTMLImageElement"},
dA:{"^":"z;K:height},N:name=,L:width}",$isdA:1,"%":"HTMLInputElement"},
mo:{"^":"h;T:target=","%":"IntersectionObserverEntry"},
by:{"^":"eh;",
geR:function(a){return a.which},
$isby:1,
"%":"KeyboardEvent"},
mt:{"^":"z;ax:href}","%":"HTMLLinkElement"},
mv:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
mw:{"^":"cm;n:x=,p:y=,F:z=","%":"Magnetometer"},
mx:{"^":"z;N:name=","%":"HTMLMapElement"},
hW:{"^":"z;W:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mA:{"^":"h;j:length=","%":"MediaList"},
mB:{"^":"H;",
V:function(a){return a.clone()},
"%":"MediaStream"},
mC:{"^":"H;b3:enabled=",
V:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
mD:{"^":"H;",
bT:function(a,b,c,d){if(J.M(b,"message"))a.start()
this.d2(a,b,c,!1)},
"%":"MessagePort"},
mE:{"^":"z;N:name=","%":"HTMLMetaElement"},
mF:{"^":"jG;",
h:function(a,b){return P.Y(a.get(b))},
D:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gS:function(a){var z=H.w([],[P.n])
this.D(a,new W.hY(z))
return z},
gj:function(a){return a.size},
$asV:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hY:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
mG:{"^":"jH;",
h:function(a,b){return P.Y(a.get(b))},
D:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gS:function(a){var z=H.w([],[P.n])
this.D(a,new W.hZ(z))
return z},
gj:function(a){return a.size},
$asV:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hZ:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
mH:{"^":"jJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isr:1,
$asr:function(){return[W.be]},
$asl:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$asm:function(){return[W.be]},
"%":"MimeTypeArray"},
R:{"^":"eh;c2:button=",
gcq:function(a){var z,y,x
if(!!a.offsetX)return new P.ae(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.o(W.bJ(z)).$isaq)throw H.c(P.u("offsetX is only supported on elements"))
y=W.bJ(z)
z=[null]
x=new P.ae(a.clientX,a.clientY,z).H(0,J.fx(J.fz(y)))
return new P.ae(J.cX(x.a),J.cX(x.b),z)}},
$isR:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
mI:{"^":"h;T:target=","%":"MutationRecord"},
W:{"^":"dF;a",
ga9:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.cn("No elements"))
if(y>1)throw H.c(P.cn("More than one element"))
return z.firstChild},
P:function(a,b){var z,y,x,w
z=J.o(b)
if(!!z.$isW){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gM(b),y=this.a;z.u();)y.appendChild(z.gC(z))},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.a(y,b)
z.replaceChild(c,y[b])},
gM:function(a){var z=this.a.childNodes
return new W.dx(z,z.length,-1,null,[H.bo(C.R,z,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
$ask:function(){return[W.t]},
$asdF:function(){return[W.t]},
$asl:function(){return[W.t]},
$asi:function(){return[W.t]},
$aset:function(){return[W.t]}},
t:{"^":"H;az:parentNode=,bb:previousSibling=",
gcp:function(a){return new W.W(a)},
eE:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.d3(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mQ:{"^":"h;",
eD:[function(a){return a.previousNode()},"$0","gbb",1,0,4],
"%":"NodeIterator"},
i7:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$asl:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
mT:{"^":"z;K:height},N:name=,L:width}","%":"HTMLObjectElement"},
mV:{"^":"z;N:name=","%":"HTMLOutputElement"},
mW:{"^":"z;N:name=","%":"HTMLParamElement"},
aO:{"^":"h;j:length=","%":"Plugin"},
mY:{"^":"jP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aO]},
$isk:1,
$ask:function(){return[W.aO]},
$isr:1,
$asr:function(){return[W.aO]},
$asl:function(){return[W.aO]},
$isi:1,
$asi:function(){return[W.aO]},
$asm:function(){return[W.aO]},
"%":"PluginArray"},
n0:{"^":"h2;T:target=","%":"ProcessingInstruction"},
n1:{"^":"h;",
bg:function(a){return a.getBoundingClientRect()},
"%":"Range"},
n7:{"^":"h;T:target=","%":"ResizeObserverEntry"},
n8:{"^":"jV;",
h:function(a,b){return P.Y(a.get(b))},
D:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gS:function(a){var z=H.w([],[P.n])
this.D(a,new W.is(z))
return z},
gj:function(a){return a.size},
$asV:function(){return[P.n,null]},
"%":"RTCStatsReport"},
is:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
dU:{"^":"z;j:length=,N:name=",$isdU:1,"%":"HTMLSelectElement"},
cm:{"^":"H;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
n9:{"^":"N;W:error=","%":"SensorErrorEvent"},
na:{"^":"z;N:name=","%":"HTMLSlotElement"},
nb:{"^":"ez;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isr:1,
$asr:function(){return[W.bh]},
$asl:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$asm:function(){return[W.bh]},
"%":"SourceBufferList"},
nc:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$isr:1,
$asr:function(){return[W.bi]},
$asl:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$asm:function(){return[W.bi]},
"%":"SpeechGrammarList"},
nd:{"^":"N;W:error=","%":"SpeechRecognitionError"},
aS:{"^":"h;j:length=","%":"SpeechRecognitionResult"},
nf:{"^":"k3;",
h:function(a,b){return a.getItem(b)},
D:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gS:function(a){var z=H.w([],[P.n])
this.D(a,new W.iE(z))
return z},
gj:function(a){return a.length},
$asV:function(){return[P.n,P.n]},
"%":"Storage"},
iE:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
iN:{"^":"z;",
a1:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
z=W.ho("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.W(y).P(0,J.fs(z))
return y},
"%":"HTMLTableElement"},
ni:{"^":"z;",
a1:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.a1(z.createElement("table"),b,c,d)
z.toString
z=new W.W(z)
x=z.ga9(z)
x.toString
z=new W.W(x)
w=z.ga9(z)
y.toString
w.toString
new W.W(y).P(0,new W.W(w))
return y},
"%":"HTMLTableRowElement"},
nj:{"^":"z;",
a1:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.a1(z.createElement("table"),b,c,d)
z.toString
z=new W.W(z)
x=z.ga9(z)
y.toString
x.toString
new W.W(y).P(0,new W.W(x))
return y},
"%":"HTMLTableSectionElement"},
e2:{"^":"z;",$ise2:1,"%":"HTMLTemplateElement"},
nk:{"^":"z;N:name=","%":"HTMLTextAreaElement"},
nm:{"^":"kb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bl]},
$isk:1,
$ask:function(){return[W.bl]},
$isr:1,
$asr:function(){return[W.bl]},
$asl:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$asm:function(){return[W.bl]},
"%":"TextTrackCueList"},
nn:{"^":"eD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bk]},
$isk:1,
$ask:function(){return[W.bk]},
$isr:1,
$asr:function(){return[W.bk]},
$asl:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$asm:function(){return[W.bk]},
"%":"TextTrackList"},
no:{"^":"h;j:length=","%":"TimeRanges"},
aU:{"^":"h;",
gT:function(a){return W.bJ(a.target)},
"%":"Touch"},
np:{"^":"kg;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aU]},
$isk:1,
$ask:function(){return[W.aU]},
$isr:1,
$asr:function(){return[W.aU]},
$asl:function(){return[W.aU]},
$isi:1,
$asi:function(){return[W.aU]},
$asm:function(){return[W.aU]},
"%":"TouchList"},
nq:{"^":"h;j:length=","%":"TrackDefaultList"},
nt:{"^":"h;",
eW:[function(a){return a.parentNode()},"$0","gaz",1,0,4],
eD:[function(a){return a.previousNode()},"$0","gbb",1,0,4],
"%":"TreeWalker"},
eh:{"^":"N;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nv:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
nx:{"^":"h;n:x=,F:z=","%":"VRStageBoundsPoint"},
nz:{"^":"hW;K:height},L:width}","%":"HTMLVideoElement"},
nA:{"^":"H;j:length=","%":"VideoTrackList"},
aW:{"^":"R;",
gek:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaW:1,
"%":"WheelEvent"},
iY:{"^":"H;",
ge5:function(a){var z,y
z=P.b2
y=new P.am(0,$.B,null,[z])
this.dN(a)
this.dT(a,W.eI(new W.iZ(new P.k7(y,[z]))))
return y},
dT:function(a,b){return a.requestAnimationFrame(H.ag(b,1))},
dN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
iZ:{"^":"j:0;a",
$1:function(a){this.a.ef(0,a)}},
nB:{"^":"H;"},
nF:{"^":"t;N:name=,bJ:namespaceURI=","%":"Attr"},
nG:{"^":"km;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.a_]},
$isk:1,
$ask:function(){return[W.a_]},
$isr:1,
$asr:function(){return[W.a_]},
$asl:function(){return[W.a_]},
$isi:1,
$asi:function(){return[W.a_]},
$asm:function(){return[W.a_]},
"%":"CSSRuleList"},
nH:{"^":"hj;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
J:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa6)return!1
return a.left===z.gcm(b)&&a.top===z.gcB(b)&&a.width===z.gL(b)&&a.height===z.gK(b)},
gE:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.es(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcC:function(a){return new P.ae(a.left,a.top,[null])},
gK:function(a){return a.height},
gL:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nI:{"^":"ko;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isr:1,
$asr:function(){return[W.bc]},
$asl:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$asm:function(){return[W.bc]},
"%":"GamepadList"},
nL:{"^":"kq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.t]},
$isk:1,
$ask:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$asl:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asm:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nM:{"^":"fZ;",
V:function(a){return a.clone()},
"%":"Request"},
nN:{"^":"ks;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.aS]},
$isk:1,
$ask:function(){return[W.aS]},
$isr:1,
$asr:function(){return[W.aS]},
$asl:function(){return[W.aS]},
$isi:1,
$asi:function(){return[W.aS]},
$asm:function(){return[W.aS]},
"%":"SpeechRecognitionResultList"},
nO:{"^":"ku;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$isr:1,
$asr:function(){return[W.bj]},
$asl:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$asm:function(){return[W.bj]},
"%":"StyleSheetList"},
j6:{"^":"ch;dO:a<",
D:function(a,b){var z,y,x,w,v
for(z=this.gS(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gS:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.w([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=z[w]
u=J.e(v)
if(u.gbJ(v)==null)y.push(u.gN(v))}return y},
$asch:function(){return[P.n,P.n]},
$asV:function(){return[P.n,P.n]}},
jg:{"^":"j6;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gS(this).length}},
aX:{"^":"dZ;a,b,c,$ti",
co:function(a,b,c,d){return W.af(this.a,this.b,a,!1,H.x(this,0))}},
a8:{"^":"aX;a,b,c,$ti"},
ji:{"^":"iF;a,b,c,d,e,$ti",
dB:function(a,b,c,d,e){this.e0()},
eb:function(a){if(this.b==null)return
this.e1()
this.b=null
this.d=null
return},
e0:function(){var z=this.d
if(z!=null&&this.a<=0)J.fa(this.b,this.c,z,!1)},
e1:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.f9(x,this.c,z,!1)}},
t:{
af:function(a,b,c,d,e){var z=c==null?null:W.eI(new W.jj(c))
z=new W.ji(0,a,b,z,!1,[e])
z.dB(a,b,c,!1,e)
return z}}},
jj:{"^":"j:0;a",
$1:function(a){return this.a.$1(a)}},
cs:{"^":"d;cM:a<",
dD:function(a){var z,y
z=$.$get$ct()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.O[y],W.kW())
for(y=0;y<12;++y)z.i(0,C.q[y],W.kX())}},
ad:function(a){return $.$get$eq().B(0,W.aH(a))},
a7:function(a,b,c){var z,y,x
z=W.aH(a)
y=$.$get$ct()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
t:{
ep:function(a){var z,y
z=document.createElement("a")
y=new W.jW(z,window.location)
y=new W.cs(y)
y.dD(a)
return y},
nJ:[function(a,b,c,d){return!0},"$4","kW",16,0,9],
nK:[function(a,b,c,d){var z,y,x,w,v
z=d.gcM()
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
return z},"$4","kX",16,0,9]}},
m:{"^":"d;$ti",
gM:function(a){return new W.dx(a,this.gj(a),-1,null,[H.bo(this,a,"m",0)])}},
dM:{"^":"d;a",
ad:function(a){return C.b.bU(this.a,new W.i9(a))},
a7:function(a,b,c){return C.b.bU(this.a,new W.i8(a,b,c))}},
i9:{"^":"j:0;a",
$1:function(a){return a.ad(this.a)}},
i8:{"^":"j:0;a,b,c",
$1:function(a){return a.a7(this.a,this.b,this.c)}},
jX:{"^":"d;cM:d<",
dF:function(a,b,c,d){var z,y,x
this.a.P(0,c)
z=b.be(0,new W.jY())
y=b.be(0,new W.jZ())
this.b.P(0,z)
x=this.c
x.P(0,C.Q)
x.P(0,y)},
ad:function(a){return this.a.B(0,W.aH(a))},
a7:["d6",function(a,b,c){var z,y
z=W.aH(a)
y=this.c
if(y.B(0,H.b(z)+"::"+b))return this.d.e4(c)
else if(y.B(0,"*::"+b))return this.d.e4(c)
else{y=this.b
if(y.B(0,H.b(z)+"::"+b))return!0
else if(y.B(0,"*::"+b))return!0
else if(y.B(0,H.b(z)+"::*"))return!0
else if(y.B(0,"*::*"))return!0}return!1}]},
jY:{"^":"j:0;",
$1:function(a){return!C.b.B(C.q,a)}},
jZ:{"^":"j:0;",
$1:function(a){return C.b.B(C.q,a)}},
k8:{"^":"jX;e,a,b,c,d",
a7:function(a,b,c){if(this.d6(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cP(a).a.getAttribute("template")==="")return this.e.B(0,b)
return!1},
t:{
eB:function(){var z=P.n
z=new W.k8(P.cg(C.p,z),P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
z.dF(null,new H.hU(C.p,new W.k9(),[H.x(C.p,0),null]),["TEMPLATE"],null)
return z}}},
k9:{"^":"j:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
k6:{"^":"d;",
ad:function(a){var z=J.o(a)
if(!!z.$isdT)return!1
z=!!z.$isE
if(z&&W.aH(a)==="foreignObject")return!1
if(z)return!0
return!1},
a7:function(a,b,c){if(b==="is"||C.i.d_(b,"on"))return!1
return this.ad(a)}},
dx:{"^":"d;a,b,c,d,$ti",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.b5(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
ja:{"^":"d;a",$isH:1,t:{
jb:function(a){if(a===window)return a
else return new W.ja(a)}}},
dL:{"^":"d;"},
mR:{"^":"d;"},
nu:{"^":"d;"},
jW:{"^":"d;a,b"},
eE:{"^":"d;a",
bp:function(a){new W.kj(this).$2(a,null)},
ak:function(a,b){if(b==null)J.cV(a)
else b.removeChild(a)},
dW:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cP(a)
x=y.gdO().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Z(t)}v="element unprintable"
try{v=J.aF(a)}catch(t){H.Z(t)}try{u=W.aH(a)
this.dV(a,b,z,v,u,y,x)}catch(t){if(H.Z(t) instanceof P.ab)throw t
else{this.ak(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dV:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ak(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ad(a)){this.ak(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a7(a,"is",g)){this.ak(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gS(f)
y=H.w(z.slice(0),[H.x(z,0)])
for(x=f.gS(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.a(y,x)
w=y[x]
if(!this.a.a7(a,J.fM(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$ise2)this.bp(a.content)}},
kj:{"^":"j:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dW(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ak(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fu(z)}catch(w){H.Z(w)
v=z
if(x){u=J.e(v)
if(u.gaz(v)!=null){u.gaz(v)
u.gaz(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
j9:{"^":"h+ha;"},
jc:{"^":"h+l;"},
jd:{"^":"jc+m;"},
je:{"^":"h+l;"},
jf:{"^":"je+m;"},
jl:{"^":"h+l;"},
jm:{"^":"jl+m;"},
jz:{"^":"h+l;"},
jA:{"^":"jz+m;"},
jG:{"^":"h+V;"},
jH:{"^":"h+V;"},
jI:{"^":"h+l;"},
jJ:{"^":"jI+m;"},
jK:{"^":"h+l;"},
jL:{"^":"jK+m;"},
jO:{"^":"h+l;"},
jP:{"^":"jO+m;"},
jV:{"^":"h+V;"},
ey:{"^":"H+l;"},
ez:{"^":"ey+m;"},
k_:{"^":"h+l;"},
k0:{"^":"k_+m;"},
k3:{"^":"h+V;"},
ka:{"^":"h+l;"},
kb:{"^":"ka+m;"},
eC:{"^":"H+l;"},
eD:{"^":"eC+m;"},
kf:{"^":"h+l;"},
kg:{"^":"kf+m;"},
kl:{"^":"h+l;"},
km:{"^":"kl+m;"},
kn:{"^":"h+l;"},
ko:{"^":"kn+m;"},
kp:{"^":"h+l;"},
kq:{"^":"kp+m;"},
kr:{"^":"h+l;"},
ks:{"^":"kr+m;"},
kt:{"^":"h+l;"},
ku:{"^":"kt+m;"}}],["","",,P,{"^":"",
Y:function(a){var z,y,x,w,v
if(a==null)return
z=P.J()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
kN:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cO(a,new P.kO(z))
return z},
dq:function(){var z=$.dp
if(z==null){z=J.bT(window.navigator.userAgent,"Opera",0)
$.dp=z}return z},
hf:function(){var z,y
z=$.dl
if(z!=null)return z
y=$.dm
if(y==null){y=J.bT(window.navigator.userAgent,"Firefox",0)
$.dm=y}if(y)z="-moz-"
else{y=$.dn
if(y==null){y=P.dq()!==!0&&J.bT(window.navigator.userAgent,"Trident/",0)
$.dn=y}if(y)z="-ms-"
else z=P.dq()===!0?"-o-":"-webkit-"}$.dl=z
return z},
kO:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",n6:{"^":"H;W:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nr:{"^":"H;W:error=","%":"IDBTransaction"},ny:{"^":"N;T:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
lc:function(a){return Math.sqrt(a)},
er:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ae:{"^":"d;n:a>,p:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
J:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ae))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gE:function(a){var z,y
z=J.aa(this.a)
y=J.aa(this.b)
return P.jB(P.er(P.er(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.c.gn(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.c.gp(b)
if(typeof z!=="number")return z.l()
return new P.ae(y,C.a.l(z,x),this.$ti)},
H:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gn(b)
if(typeof z!=="number")return z.H()
if(typeof x!=="number")return H.y(x)
w=this.b
y=y.gp(b)
if(typeof w!=="number")return w.H()
if(typeof y!=="number")return H.y(y)
return new P.ae(z-x,w-y,this.$ti)},
m:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return new P.ae(z*b,y*b,this.$ti)}},
jQ:{"^":"d;$ti"},
a6:{"^":"jQ;$ti"}}],["","",,P,{"^":"",lg:{"^":"ar;T:target=","%":"SVGAElement"},lR:{"^":"E;n:x=,p:y=","%":"SVGFEBlendElement"},lS:{"^":"E;n:x=,p:y=","%":"SVGFEColorMatrixElement"},lT:{"^":"E;n:x=,p:y=","%":"SVGFEComponentTransferElement"},lU:{"^":"E;n:x=,p:y=","%":"SVGFECompositeElement"},lV:{"^":"E;n:x=,p:y=","%":"SVGFEConvolveMatrixElement"},lW:{"^":"E;n:x=,p:y=","%":"SVGFEDiffuseLightingElement"},lX:{"^":"E;n:x=,p:y=","%":"SVGFEDisplacementMapElement"},lY:{"^":"E;n:x=,p:y=","%":"SVGFEFloodElement"},lZ:{"^":"E;n:x=,p:y=","%":"SVGFEGaussianBlurElement"},m_:{"^":"E;n:x=,p:y=","%":"SVGFEImageElement"},m0:{"^":"E;n:x=,p:y=","%":"SVGFEMergeElement"},m1:{"^":"E;n:x=,p:y=","%":"SVGFEMorphologyElement"},m2:{"^":"E;n:x=,p:y=","%":"SVGFEOffsetElement"},m3:{"^":"E;n:x=,p:y=,F:z=","%":"SVGFEPointLightElement"},m4:{"^":"E;n:x=,p:y=","%":"SVGFESpecularLightingElement"},m5:{"^":"E;n:x=,p:y=,F:z=","%":"SVGFESpotLightElement"},m6:{"^":"E;n:x=,p:y=","%":"SVGFETileElement"},m7:{"^":"E;n:x=,p:y=","%":"SVGFETurbulenceElement"},mc:{"^":"E;n:x=,p:y=","%":"SVGFilterElement"},mf:{"^":"ar;n:x=,p:y=","%":"SVGForeignObjectElement"},hv:{"^":"ar;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},ar:{"^":"E;","%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},mn:{"^":"ar;n:x=,p:y=","%":"SVGImageElement"},ms:{"^":"jD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.cd]},
$asl:function(){return[P.cd]},
$isi:1,
$asi:function(){return[P.cd]},
$asm:function(){return[P.cd]},
"%":"SVGLengthList"},my:{"^":"E;n:x=,p:y=","%":"SVGMaskElement"},mz:{"^":"h;a_:a=,Y:b=,a4:c=","%":"SVGMatrix"},mS:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.ck]},
$asl:function(){return[P.ck]},
$isi:1,
$asi:function(){return[P.ck]},
$asm:function(){return[P.ck]},
"%":"SVGNumberList"},mX:{"^":"E;n:x=,p:y=","%":"SVGPatternElement"},mZ:{"^":"h;n:x=,p:y=","%":"SVGPoint"},n_:{"^":"h;j:length=","%":"SVGPointList"},n2:{"^":"h;n:x=,p:y=","%":"SVGRect"},n3:{"^":"hv;n:x=,p:y=","%":"SVGRectElement"},dT:{"^":"E;",$isdT:1,"%":"SVGScriptElement"},ng:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.n]},
$asl:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$asm:function(){return[P.n]},
"%":"SVGStringList"},E:{"^":"aq;",
a1:function(a,b,c,d){var z,y,x,w,v,u
z=H.w([],[W.dL])
z.push(W.ep(null))
z.push(W.eB())
z.push(new W.k6())
c=new W.eE(new W.dM(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.u).ei(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.W(w)
u=z.ga9(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gb6:function(a){return new W.a8(a,"change",!1,[W.N])},
gb7:function(a){return new W.a8(a,"mousedown",!1,[W.R])},
gb8:function(a){return new W.a8(a,"mousemove",!1,[W.R])},
gb9:function(a){return new W.a8(a,"mouseup",!1,[W.R])},
gba:function(a){return new W.a8(a,"mousewheel",!1,[W.aW])},
$isE:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nh:{"^":"ar;n:x=,p:y=","%":"SVGSVGElement"},iO:{"^":"ar;","%":"SVGTextPathElement;SVGTextContentElement"},nl:{"^":"iO;n:x=,p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},ns:{"^":"ki;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.cq]},
$asl:function(){return[P.cq]},
$isi:1,
$asi:function(){return[P.cq]},
$asm:function(){return[P.cq]},
"%":"SVGTransformList"},nw:{"^":"ar;n:x=,p:y=","%":"SVGUseElement"},jC:{"^":"h+l;"},jD:{"^":"jC+m;"},jM:{"^":"h+l;"},jN:{"^":"jM+m;"},k4:{"^":"h+l;"},k5:{"^":"k4+m;"},kh:{"^":"h+l;"},ki:{"^":"kh+m;"}}],["","",,P,{"^":"",ll:{"^":"h;j:length=","%":"AudioBuffer"},lm:{"^":"j7;",
h:function(a,b){return P.Y(a.get(b))},
D:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Y(y.value[1]))}},
gS:function(a){var z=H.w([],[P.n])
this.D(a,new P.fX(z))
return z},
gj:function(a){return a.size},
$asV:function(){return[P.n,null]},
"%":"AudioParamMap"},fX:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},ln:{"^":"h;b3:enabled=","%":"AudioTrack"},lo:{"^":"H;j:length=","%":"AudioTrackList"},fY:{"^":"H;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mU:{"^":"fY;j:length=","%":"OfflineAudioContext"},j7:{"^":"h+V;"}}],["","",,P,{"^":"",n4:{"^":"h;",
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bY:function(a,b,c){return a.bindFramebuffer(b,c)},
bZ:function(a,b,c){return a.bindTexture(b,c)},
c_:function(a,b){return a.blendEquation(b)},
c0:function(a,b,c){return a.blendFunc(b,c)},
c1:function(a,b,c,d){return a.bufferData(b,c,d)},
c3:function(a,b){return a.clear(b)},
c4:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c5:function(a,b){return a.compileShader(b)},
c6:function(a){return a.createBuffer()},
c7:function(a){return a.createProgram()},
c8:function(a,b){return a.createShader(b)},
c9:function(a){return a.createTexture()},
cb:function(a,b){return a.depthMask(b)},
cc:function(a,b){return a.disable(b)},
cd:function(a,b,c,d){return a.drawArrays(b,c,d)},
ce:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cf:function(a,b){return a.enable(b)},
cg:function(a,b){return a.enableVertexAttribArray(b)},
aC:function(a){return P.Y(a.getContextAttributes())},
bi:function(a){return a.getError()},
bj:function(a,b){return a.getProgramInfoLog(b)},
bk:function(a,b,c){return a.getProgramParameter(b,c)},
bl:function(a,b){return a.getShaderInfoLog(b)},
bm:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cr:function(a,b,c){return a.pixelStorei(b,c)},
bq:function(a,b,c){return a.shaderSource(b,c)},
bs:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bd:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
cu:function(a,b,c,d,e,f,g){return this.bd(a,b,c,d,e,f,g,null,null,null)},
cv:function(a,b,c,d){return a.texParameterf(b,c,d)},
cw:function(a,b,c,d){return a.texParameteri(b,c,d)},
cD:function(a,b,c){return a.uniform1f(b,c)},
cE:function(a,b,c){return a.uniform1fv(b,c)},
cF:function(a,b,c){return a.uniform1i(b,c)},
cG:function(a,b,c){return a.uniform1iv(b,c)},
cH:function(a,b,c){return a.uniform2fv(b,c)},
cI:function(a,b,c){return a.uniform3fv(b,c)},
cJ:function(a,b,c){return a.uniform4fv(b,c)},
cK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
cP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cR:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},n5:{"^":"h;",
e7:function(a,b){return a.beginTransformFeedback(b)},
ea:function(a,b){return a.bindVertexArray(b)},
ej:function(a){return a.createVertexArray()},
el:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
em:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
en:function(a){return a.endTransformFeedback()},
eO:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eP:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bY:function(a,b,c){return a.bindFramebuffer(b,c)},
bZ:function(a,b,c){return a.bindTexture(b,c)},
c_:function(a,b){return a.blendEquation(b)},
c0:function(a,b,c){return a.blendFunc(b,c)},
c1:function(a,b,c,d){return a.bufferData(b,c,d)},
c3:function(a,b){return a.clear(b)},
c4:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c5:function(a,b){return a.compileShader(b)},
c6:function(a){return a.createBuffer()},
c7:function(a){return a.createProgram()},
c8:function(a,b){return a.createShader(b)},
c9:function(a){return a.createTexture()},
cb:function(a,b){return a.depthMask(b)},
cc:function(a,b){return a.disable(b)},
cd:function(a,b,c,d){return a.drawArrays(b,c,d)},
ce:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cf:function(a,b){return a.enable(b)},
cg:function(a,b){return a.enableVertexAttribArray(b)},
aC:function(a){return P.Y(a.getContextAttributes())},
bi:function(a){return a.getError()},
bj:function(a,b){return a.getProgramInfoLog(b)},
bk:function(a,b,c){return a.getProgramParameter(b,c)},
bl:function(a,b){return a.getShaderInfoLog(b)},
bm:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
cr:function(a,b,c){return a.pixelStorei(b,c)},
bq:function(a,b,c){return a.shaderSource(b,c)},
bs:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bd:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g)
return},
cu:function(a,b,c,d,e,f,g){return this.bd(a,b,c,d,e,f,g,null,null,null)},
cv:function(a,b,c,d){return a.texParameterf(b,c,d)},
cw:function(a,b,c,d){return a.texParameteri(b,c,d)},
cD:function(a,b,c){return a.uniform1f(b,c)},
cE:function(a,b,c){return a.uniform1fv(b,c)},
cF:function(a,b,c){return a.uniform1i(b,c)},
cG:function(a,b,c){return a.uniform1iv(b,c)},
cH:function(a,b,c){return a.uniform2fv(b,c)},
cI:function(a,b,c){return a.uniform3fv(b,c)},
cJ:function(a,b,c){return a.uniform4fv(b,c)},
cK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
cP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cR:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",ne:{"^":"k2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.D(b,a,null,null,null))
return P.Y(a.item(b))},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$isk:1,
$ask:function(){return[P.bB]},
$asl:function(){return[P.bB]},
$isi:1,
$asi:function(){return[P.bB]},
$asm:function(){return[P.bB]},
"%":"SQLResultSetRowList"},k1:{"^":"h+l;"},k2:{"^":"k1+m;"}}],["","",,G,{"^":"",
j0:function(a){var z,y,x,w
z=H.w(a.split("\n"),[P.n])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.a(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.a(z,y)
z[y]=w}return C.b.an(z,"\n")},
el:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.c8(a,b)
z.bq(a,y,c)
z.c5(a,y)
x=z.bm(a,y,35713)
if(x!=null&&J.M(x,!1)){w=z.bl(a,y)
P.aj("E:Compilation failed:")
P.aj("E:"+G.j0(c))
P.aj("E:Failure:")
P.aj(C.i.l("E:",w))
throw H.c(w)}return y},
ba:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bV(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bW(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.a(a,y)
v=J.cT(a[y])
if(z>=w)return H.a(b,z)
b[z]=v}return b},
hs:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bV(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x;++z
if(y>=a.length)return H.a(a,y)
x=J.bW(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
ht:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bV(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.bW(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.cT(a[y])
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.fy(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hr:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.b5(a[y],0)
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.b5(a[y],1)
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.b5(a[y],2)
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.b5(a[y],3)
if(z>=w)return H.a(b,z)
b[z]=x}return b},
jx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ad(z,z.r,null,null,[H.x(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.F]],v=[P.ay],u=[T.L],t=[T.f],s=[T.q];y.u();){r=y.d
if(!x.aw(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eQ>0)H.bq("I: "+q)
continue}p=z.h(0,r)
switch($.$get$a1().h(0,r).a){case"vec2":b.af(r,G.hs(H.br(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.af(r,G.ba(H.br(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.af(r,G.ht(H.br(p,"$isi",u,"$asi"),null),4)
break
case"float":b.af(r,new Float32Array(H.bK(H.br(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.af(r,G.hr(H.br(p,"$isi",w,"$asi"),null),4)
break}}},
c5:function(a,b,c){var z=G.hX(a,b.d,4,b.e.x)
z.ag(G.ba(c.d,null))
z.d8(c.dg())
G.jx(c,z)
return z},
at:{"^":"d;b3:c>"},
bI:{"^":"at;d,a,b,c",
aK:function(){return this.d},
k:function(a){var z,y,x,w
z=H.w(["{"+H.b(new H.eg(H.kT(this),null))+"}["+H.b(this.a)+"]"],[P.n])
for(y=this.d,x=new H.ad(y,y.r,null,null,[H.x(y,0)]),x.c=y.e;x.u();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.b.an(z,"\n")}},
h_:{"^":"dV;"},
h3:{"^":"d;a,b",
ci:function(a,b,c){J.fp(this.a,b)
if(c>0)J.fS(this.a,b,c)},
cQ:function(a,b,c,d,e,f,g,h){J.bS(this.a,34962,b)
J.fT(this.a,c,d,e,!1,g,h)}},
hu:{"^":"d;a,b,c,d,e"},
aI:{"^":"d;a_:a>,Y:b>,a4:c>",t:{
I:function(a,b,c){return new G.aI(a,b,c)}}},
dw:{"^":"d;a_:a>,Y:b>,a4:c>,d"},
c4:{"^":"d;a,b,c,d,e",
aa:function(a){switch($.$get$a1().h(0,a).a){case"vec2":this.e.i(0,a,H.w([],[T.q]))
break
case"vec3":this.e.i(0,a,H.w([],[T.f]))
break
case"vec4":this.e.i(0,a,H.w([],[T.L]))
break
case"float":this.e.i(0,a,H.w([],[P.ay]))
break
case"uvec4":this.e.i(0,a,H.w([],[[P.i,P.F]]))
break}},
d9:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.dw(z,z+1,z+2,z+3))},
ag:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.C)(a),++x)y.push(a[x].V(0))},
da:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.aI(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.cK(a[x]))},
aH:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.C)(b),++x)z.push(b[x].V(0))},
aI:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.C)(b),++x)z.push(J.cK(b[x]))},
dg:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.w(x,[P.F])
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
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ad(y,y.r,null,null,[H.x(y,0)]),x.c=y.e;x.u();){w=x.d
v=$.$get$a1().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.an(z," ")}},
ce:{"^":"at;"},
dP:{"^":"ce;x,y,z,Q,d,a,b,c",
aJ:function(a,b){var z,y,x,w
z=this.x.a
y=z[0]
x=a.length
if(b>=x)return H.a(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+8
w=this.y.a
y=w[0]
if(z>=x)return H.a(a,z)
a[z]=y
y=b+9
z=w[1]
if(y>=x)return H.a(a,y)
a[y]=z
z=b+10
w=w[2]
if(z>=x)return H.a(a,z)
a[z]=w
w=b+12
z=this.z.a
y=z[0]
if(w>=x)return H.a(a,w)
a[w]=y
y=b+13
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+14
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+7
if(z>=x)return H.a(a,z)
a[z]=this.Q},
k:function(a){return"PL: p:"+H.b(this.x)+"  r:"+this.Q}},
dr:{"^":"ce;x,y,z,Q,ch,cx,d,a,b,c",
aJ:function(a,b){var z,y,x,w
z=b+4
y=this.x.a
x=y[0]
w=a.length
if(z>=w)return H.a(a,z)
a[z]=x
x=b+5
z=y[1]
if(x>=w)return H.a(a,x)
a[x]=z
z=b+6
y=y[2]
if(z>=w)return H.a(a,z)
a[z]=y
y=b+8
z=this.y.a
x=z[0]
if(y>=w)return H.a(a,y)
a[y]=x
x=b+9
y=z[1]
if(x>=w)return H.a(a,x)
a[x]=y
y=b+10
z=z[2]
if(y>=w)return H.a(a,y)
a[y]=z
z=b+12
y=this.z.a
x=y[0]
if(z>=w)return H.a(a,z)
a[z]=x
x=b+13
z=y[1]
if(x>=w)return H.a(a,x)
a[x]=z
z=b+14
y=y[2]
if(z>=w)return H.a(a,z)
a[z]=y},
k:function(a){return"DL: p:"+H.b(this.x)}},
dW:{"^":"ce;x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,d,a,b,c",
aJ:function(a,b){var z,y,x,w
z=this.x.a
y=z[0]
x=a.length
if(b>=x)return H.a(a,b)
a[b]=y
y=b+1
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+2
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+4
w=this.y.a
y=w[0]
if(z>=x)return H.a(a,z)
a[z]=y
y=b+5
z=w[1]
if(y>=x)return H.a(a,y)
a[y]=z
z=b+6
w=w[2]
if(z>=x)return H.a(a,z)
a[z]=w
w=b+8
z=this.z.a
y=z[0]
if(w>=x)return H.a(a,w)
a[w]=y
y=b+9
w=z[1]
if(y>=x)return H.a(a,y)
a[y]=w
w=b+10
z=z[2]
if(w>=x)return H.a(a,w)
a[w]=z
z=b+12
w=this.Q.a
y=w[0]
if(z>=x)return H.a(a,z)
a[z]=y
y=b+13
z=w[1]
if(y>=x)return H.a(a,y)
a[y]=z
z=b+14
w=w[2]
if(z>=x)return H.a(a,z)
a[z]=w
w=b+7
if(w>=x)return H.a(a,w)
a[w]=this.ch
w=b+11
z=Math.cos(H.S(this.cx))
if(w>=x)return H.a(a,w)
a[w]=z
z=b+15
if(z>=x)return H.a(a,z)
a[z]=this.cy},
k:function(a){return"SL: p:"+H.b(this.x)+"  d:"+H.b(this.y)+"  r:"+this.ch+"  a:"+H.b(this.cx)}},
hA:{"^":"bI;x,y,z,d,a,b,c",
aK:function(){var z,y,x
z=this.y
y=this.z
G.hB(z,y,this.x)
x=this.d
x.i(0,"uLightDescs",z)
x.i(0,"uLightTypes",y)
return x},
t:{
hB:function(a,b,c){var z,y,x,w,v
C.r.cj(a,0,a.length,0)
C.r.cj(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.C)(c),++x){w=c[x]
if(J.cQ(w)===!0){w.aJ(a,y*16)
v=w.d
if(y>=4)return H.a(b,y)
b[y]=v;++y}}}}},
e4:{"^":"d;a,b,c"},
e3:{"^":"d;a,b,c"},
hV:{"^":"bI;d,a,b,c",
dk:function(a){var z=this.d
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.$get$d4())
z.i(0,"cStencilFunc",$.$get$dY())},
t:{
bd:function(a){var z=new G.hV(P.J(),a,!1,!0)
z.dk(a)
return z}}},
dJ:{"^":"at;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bv:function(a,b,c){var z,y
C.i.bF(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bS(z.a,34962,y)
J.cJ(z.a,34962,b,35048)},
as:function(a){this.ch=a
this.bv("aPosition",a,3)},
dh:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
af:function(a,b,c){var z,y,x,w,v
z=J.cL(a,0)===105
if(z&&this.z===0)this.z=C.c.d7(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bt(x.a))
this.bv(a,b,c)
w=$.$get$a1().h(0,a)
if(w==null)throw H.c("Unknown canonical "+a)
v=this.x.h(0,a)
J.bs(x.a,this.e)
x.ci(0,v,z?1:0)
x.cQ(0,y.h(0,a),v,w.bw(),5126,!1,0,0)},
ag:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.bt(y.a))
this.as(a)
x=$.$get$a1().h(0,"aPosition")
if(x==null)throw H.c("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bs(y.a,this.e)
y.ci(0,w,0)
y.cQ(0,z.h(0,"aPosition"),w,x.bw(),5126,!1,0,0)},
ah:function(a){var z,y,x
z=this.ch.length
if(z<768){this.cx=new Uint8Array(H.bK(a))
this.Q=5121}else if(z<196608){this.cx=new Uint16Array(H.bK(a))
this.Q=5123}else{this.cx=new Uint32Array(H.bK(a))
this.Q=5125}z=this.d
J.bs(z.a,this.e)
y=this.y
x=this.cx
J.bS(z.a,34963,y)
J.cJ(z.a,34963,x,35048)},
d8:function(a){this.y=J.bt(this.d.a)
this.ah(a)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ad(z,z.r,null,null,[H.x(z,0)]),x.c=z.e;x.u();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+H.b(this.a)+"] "+C.b.an(y,"  ")},
t:{
hX:function(a,b,c,d){return new G.dJ(b,J.cM(b.a),c,P.J(),d,null,0,-1,null,null,P.J(),"meshdata:"+a,!1,!0)}}},
id:{"^":"bI;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dc:function(a,b){var z
if(typeof a!=="number")return a.eS()
if(typeof b!=="number")return H.y(b)
z=a/b
if(this.z===z)return
this.z=z
this.bz()},
bz:function(){var z,y,x,w,v,u
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
aK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.f(new Float32Array(3))
u.v(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
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
y=J.o(t)
x=!!y.$isL
q=x?y.gae(t):1
if(!!y.$isf){p=y.gn(t)
s=y.gp(t)
r=y.gF(t)
t=p}else if(x){p=y.gn(t)
s=y.gp(t)
r=y.gF(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.y(t)
x=z[4]
if(typeof s!=="number")return H.y(s)
w=z[8]
if(typeof r!=="number")return H.y(r)
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
c.b5(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
ir:{"^":"at;d,e,f,r,x,y,z,Q,ch,a,b,c",
dn:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
x.i(0,t,J.cU(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
x.i(0,t,J.cU(w.a,v,t))}},
du:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ad(y,y.r,null,null,[H.x(y,0)]),w.c=y.e;w.u();){v=w.d
if(!z.aw(0,v))x.push(v)}for(z=this.x,y=new P.cu(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.u();){v=y.d
if(!z.B(0,v))x.push(v)}return x},
dA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ad(b,b.r,null,null,[H.x(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cL(t,0)){case 117:if(w.aw(0,t)){s=b.h(0,t)
if(v.aw(0,t))H.bq("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$a1().h(0,t)
if(r==null)H.a3("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bX(x.a,q,s)
else if(!!J.o(s).$ishE)J.fQ(x.a,q,s)
break
case"float":if(r.c===0)J.fO(x.a,q,s)
else if(!!J.o(s).$isc3)J.fP(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a2(s,"$isG").a
J.d1(x.a,q,!1,p)}else if(!!J.o(s).$isc3)J.d1(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.a2(s,"$isO").a
J.d0(x.a,q,!1,p)}else if(!!J.o(s).$isc3)J.d0(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.d_(o,q,H.a2(s,"$isL").a)
else J.d_(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cZ(o,q,H.a2(s,"$isf").a)
else J.cZ(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cY(o,q,H.a2(s,"$isq").a)
else J.cY(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.y(p)
J.cH(x.a,33984+p)
p=H.a2(s,"$iscp").b
J.b6(x.a,3553,p)
p=this.ch
J.bX(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.y(p)
J.cH(x.a,33984+p)
p=H.a2(s,"$iscp").b
J.b6(x.a,34067,p)
p=this.ch
J.bX(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bq("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.M(s,!0)
o=x.a
if(p)J.b7(o,2929)
else J.bU(o,2929)
break
case"cStencilFunc":H.a2(s,"$ise4")
p=s.a
o=x.a
if(p===1281)J.bU(o,2960)
else{J.b7(o,2960)
o=s.b
n=s.c
J.fJ(x.a,p,o,n)}break
case"cDepthWrite":J.fk(x.a,s)
break
case"cBlendEquation":H.a2(s,"$ise3")
p=s.a
o=x.a
if(p===1281)J.bU(o,3042)
else{J.b7(o,3042)
o=s.b
n=s.c
J.fe(x.a,o,n)
J.fd(x.a,p)}break}++u
break}}m=P.hk(0,0,0,Date.now()-new P.dk(z,!1).a,0,0)
""+u
m.k(0)},
df:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fR(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bC()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.C)(b),++x){w=b[x]
this.dA(w.a,w.aK())}y=this.Q
y.al(0)
for(v=a.cy,u=new H.ad(v,v.r,null,null,[H.x(v,0)]),u.c=v.e;u.u();)y.I(0,u.d)
t=this.du()
if(t.length!==0)P.aj("E:"+(H.b(this.a)+" "+a.f+": uninitialized inputs: "+H.b(t)))
y=a.d
v=a.e
J.bs(y.a,v)
s=this.e.f.length>0
v=a.f
y=a.dh()
u=a.Q
r=a.z
if(s)J.fb(z.a,v)
if(u!==-1){q=z.a
if(r>1)J.fo(q,v,y,u,0,r)
else J.fn(q,v,y,u,0)}else{u=z.a
if(r>1)J.fm(u,v,0,y,r)
else J.fl(u,v,0,y)}if(s)J.fq(z.a)},
t:{
cl:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.a0(null,null,null,P.n)
y=c.b
x=d.b
w=c.f
v=J.fi(b.a)
u=G.el(b.a,35633,y)
J.cI(b.a,v,u)
t=G.el(b.a,35632,x)
J.cI(b.a,v,t)
if(w.length>0)J.fN(b.a,v,w,35980)
J.fF(b.a,v)
if(J.fE(b.a,v,35714)!==!0)H.a3(J.fD(b.a,v))
z=new G.ir(b,c,d,v,P.cg(c.c,null),P.J(),P.J(),z,null,a,!1,!0)
z.dn(a,b,c,d)
return z}}},
A:{"^":"d;a,b,c",
bw:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ix:{"^":"d;a,b,c,d,e,f,r,x",
aG:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.C)(a),++w){v=a[w]
y.push(v)
x.i(0,v,this.r);++this.r}C.b.aE(y)},
a3:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.C)(a),++x)y.push(a[x])
C.b.aE(y)},
ar:function(a){var z,y,x
for(z=a.length,y=this.e,x=0;x<a.length;a.length===z||(0,H.C)(a),++x)y.push(a[x])
C.b.aE(y)},
by:function(a,b){this.b=this.bA(!0,a,b)},
aL:function(a){return this.by(a,null)},
bx:function(a,b){this.b=this.bA(!1,a,b)},
dq:function(a){return this.bx(a,null)},
bA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
s=$.$get$a1().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){q=z[u]
s=$.$get$a1().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){q=z[u]
s=$.$get$a1().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){q=z[u]
s=$.$get$a1().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(c!=null)C.b.P(w,c)
if(a)w.push("void main(void) {")
C.b.P(w,b)
if(a)w.push("}")
return C.b.an(w,"\n")},
t:{
aR:function(a){return new G.ix(a,null,[],[],[],[],0,P.J())}}},
dV:{"^":"at;",
bf:function(){var z,y,x
z=this.f
y=this.d.a
x=z.a
x[0]=y[2]
x[1]=y[6]
x[2]=y[10]
return z},
bo:function(){var z,y,x
z=this.r
y=this.d.a
x=z.a
x[0]=y[1]
x[1]=y[5]
x[2]=y[9]
return z},
aD:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c},
eF:function(a){this.d.ao(0,this.bf(),J.cG(a))}},
iP:{"^":"d;a,b,c,d,e,f,r",
di:function(a,b){var z=this.e
if(z!==1)J.fL(a.a,b,34046,z)
J.cW(a.a,b,10240,this.r)
J.cW(a.a,b,10241,this.f)}},
cp:{"^":"d;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hC:{"^":"cp;f,a,b,c,d,e",
dr:function(a){var z,y
z=this.d
y=this.c
J.b6(z.a,y,this.b)
J.fK(z.a,y,0,6408,6408,5121,a)}}}],["","",,R,{"^":"",
iU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.o.eq(y/c)
w=-x
v=d.O(y).O(1/z[1])
u=[]
for(t=w;t<=x;t+=c)for(s=w;s<=x;s+=c){z=new Float32Array(3)
r=new T.f(z)
z[0]=t
z[1]=0
z[2]=s
r.I(0,v)
u.push(r)
z=new Float32Array(3)
r=new T.f(z)
z[0]=t
z[1]=0
z[2]=s
r.bt(0,v)
u.push(r)}for(q=0;q<8;++q){t=(q&1)===1?1:-1
p=(q&2)===2?1:-1
s=(q&4)===4?1:-1
if(t>0){z=p*y
r=s*y
o=new Float32Array(3)
o[0]=t*y
o[1]=z
o[2]=r
u.push(new T.f(o))
o=new Float32Array(3)
o[0]=-t*y
o[1]=z
o[2]=r
u.push(new T.f(o))}if(p>0){z=t*y
r=s*y
o=new Float32Array(3)
o[0]=z
o[1]=p*y
o[2]=r
u.push(new T.f(o))
o=new Float32Array(3)
o[0]=z
o[1]=-p*y
o[2]=r
u.push(new T.f(o))}if(s>0){z=t*y
r=p*y
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=s*y
u.push(new T.f(o))
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=-s*y
u.push(new T.f(o))}}a.as(G.ba(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.w(z,[P.F])
for(z=u.length,r=n.length,q=0;q<z;++q){if(q>=r)return H.a(n,q)
n[q]=q}a.ah(n)},
hw:function(a){var z,y,x
z=a.a
y=z[0]
if(y!==0){x=z[1]
if(x!==0){z=new T.f(new Float32Array(3))
z.v(-x,y,0)
return z}z=z[2]
if(z!==0){x=new T.f(new Float32Array(3))
x.v(-z,0,y)
return x}z=new T.f(new Float32Array(3))
z.v(0,1,1)
return z}else{y=z[1]
if(y===0){z=new T.f(new Float32Array(3))
z.v(1,1,0)
return z}z=z[2]
if(z===0){z=new T.f(new Float32Array(3))
z.v(1,0,1)
return z}x=new T.f(new Float32Array(3))
x.v(0,-z,y)
return x}},
iW:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
c.toString
z=new T.f(new Float32Array(3))
z.q(c)
z.G(0)
y=b.l(0,z.O(d))
x=[b,y]
w=R.hw(c)
w.G(0)
w.U(0,Math.tan(H.S(e))*d)
for(v=0;v<8;++v){z=new Float32Array(3)
u=new T.f(z)
u.q(w)
t=new Float32Array(4)
new T.au(t).cV(c,v*2*3.141592653589793/8)
s=z[0]
r=z[1]
q=z[2]
p=t[0]
o=t[1]
n=t[2]
m=t[3]
l=m*s+o*q-n*r
k=m*r+n*s-p*q
j=m*q+p*r-o*s
t=-p
i=t*s-o*r-n*q
h=-n
g=-o
z[0]=l*m+i*t+k*h-j*g
z[1]=k*m+i*g+j*t-l*h
z[2]=j*m+i*h+l*g-k*t
u.I(0,y)
x.push(u)}f=[]
for(v=1;v<x.length;++v){f.push(0)
f.push(v)}for(v=3;z=x.length,v<z;++v){f.push(v-1)
f.push(v)}f.push(z-1)
f.push(2)
for(v=2;v<x.length;++v)if(v%2===0){f.push(1)
f.push(v)}a.as(G.ba(x,null))
a.ah(f)},
iV:function(a,b,c){var z,y,x,w,v,u,t
z=[]
y=[]
for(x=$.$get$c6(),w=0;w<12;++w){v=x[w]
y.push(z.length)
y.push(12)
u=v.m(0,c)
b.toString
t=new T.f(new Float32Array(3))
t.q(b)
t.I(0,u)
z.push(t)}z.push(b)
a.as(G.ba(z,null))
a.ah(y)},
iC:{"^":"d;",
ds:function(a,b,c){var z,y,x
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
x=this.dE(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dE:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.jh("span",null)
y=J.cR(v)
J.e(y).sL(y,"1px")
C.n.sK(y,""+d+"px")
C.n.sep(y,"left")
x=C.n.bE(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
iD:{"^":"iC;e,f,a,b,c,d",
dw:function(a,b){var z,y,x,w,v;++this.e
if(J.b4(J.f8(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.o.eN(z,2)+" fps"
y=this.c;(y&&C.F).cW(y,b)
x=C.c.ac(30*C.o.ec(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cR(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
dv:function(a){return this.dw(a,"")}}}],["","",,A,{"^":"",
eO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.cQ(b)!==!0)return
z=b.dz(c)
y=b.ch
if(y!=null&&b.cx!=null){b.k(0)
x=C.b.geB(e)
w=b.db
v=b.dx
u=new Float32Array(9)
t=v.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[4]
u[4]=t[5]
u[5]=t[6]
u[6]=t[8]
u[7]=t[9]
u[8]=t[10]
w.eh(new T.O(u))
u=w.a
s=u[3]
u[3]=u[1]
u[1]=s
s=u[6]
u[6]=u[2]
u[2]=s
s=u[7]
u[7]=u[5]
u[5]=s
u=b.d
x=x.d
x.i(0,"uTransformationMatrix",u)
x.i(0,"uModelMatrix",v)
x.i(0,"uNormalMatrix",w)
e.push(y)
a.df(b.cx,e,d)
if(0>=e.length)return H.a(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.C)(y),++r)A.eO(a,y[r],z,d,e)},
bD:{"^":"dV;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dz:function(a){var z=this.dx
z.q(a)
z.b5(0,this.d)
return z},
k:function(a){return"NODE["+H.b(this.a)+"]"}},
bF:{"^":"at;d,e,cp:f>,a,b,c"},
iq:{"^":"at;d,e,f,r,x,y,z,Q,a,b,c",
dm:function(a,b,c){if(this.d==null)this.d=new G.hu(this.e,null,null,null,null)},
de:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.fc(v.a,36160,z)
J.fU(v.a,this.x,this.y,x,w)
if(y!==0)J.ff(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
if(t.c!==!0)continue
x=t.d
if(x.c!==!0)continue
s=t.e
s.push(new G.bI(P.J(),"transforms",!1,!0))
r=new T.G(new Float32Array(16))
r.R()
for(w=t.f,v=w.length,q=0;q<w.length;w.length===v||(0,H.C)(w),++q)A.eO(x,w[q],r,a,s)
if(0>=s.length)return H.a(s,-1)
s.pop()}},
dd:function(){return this.de(null)},
t:{
dS:function(a,b,c){var z=new A.iq(c,b,H.w([],[A.bF]),17664,0,0,0,0,a,!1,!0)
z.dm(a,b,c)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
hb:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.f(new Float32Array(3))
x.v(z,y,d2)
w=new T.f(new Float32Array(3))
w.v(d0,y,d2)
v=new T.f(new Float32Array(3))
v.v(d0,d1,d2)
u=new T.f(new Float32Array(3))
u.v(z,d1,d2)
t=-d2
s=new T.f(new Float32Array(3))
s.v(z,y,t)
r=new T.f(new Float32Array(3))
r.v(z,d1,t)
q=new T.f(new Float32Array(3))
q.v(d0,d1,t)
p=new T.f(new Float32Array(3))
p.v(d0,y,t)
o=new T.f(new Float32Array(3))
o.v(z,d1,t)
n=new T.f(new Float32Array(3))
n.v(z,d1,d2)
m=new T.f(new Float32Array(3))
m.v(d0,d1,d2)
l=new T.f(new Float32Array(3))
l.v(d0,d1,t)
k=new T.f(new Float32Array(3))
k.v(d0,y,d2)
j=new T.f(new Float32Array(3))
j.v(z,y,d2)
i=new T.f(new Float32Array(3))
i.v(z,y,t)
h=new T.f(new Float32Array(3))
h.v(d0,y,t)
g=new T.f(new Float32Array(3))
g.v(d0,y,t)
f=new T.f(new Float32Array(3))
f.v(d0,d1,t)
e=new T.f(new Float32Array(3))
e.v(d0,d1,d2)
d=new T.f(new Float32Array(3))
d.v(d0,y,d2)
c=new T.f(new Float32Array(3))
c.v(z,y,t)
b=new T.f(new Float32Array(3))
b.v(z,y,d2)
y=new T.f(new Float32Array(3))
y.v(z,d1,d2)
a=new T.f(new Float32Array(3))
a.v(z,d1,t)
z=new T.q(new Float32Array(2))
z.A(c7,c9)
t=new T.q(new Float32Array(2))
t.A(c6,c9)
a0=new T.q(new Float32Array(2))
a0.A(c6,c8)
a1=new T.q(new Float32Array(2))
a1.A(c7,c8)
a2=new T.q(new Float32Array(2))
a2.A(c6,c9)
a3=new T.q(new Float32Array(2))
a3.A(c6,c8)
a4=new T.q(new Float32Array(2))
a4.A(c7,c8)
a5=new T.q(new Float32Array(2))
a5.A(c7,c9)
a6=new T.q(new Float32Array(2))
a6.A(c7,c8)
a7=new T.q(new Float32Array(2))
a7.A(c7,c9)
a8=new T.q(new Float32Array(2))
a8.A(c6,c9)
a9=new T.q(new Float32Array(2))
a9.A(c6,c8)
b0=new T.q(new Float32Array(2))
b0.A(c6,c8)
b1=new T.q(new Float32Array(2))
b1.A(c7,c8)
b2=new T.q(new Float32Array(2))
b2.A(c7,c9)
b3=new T.q(new Float32Array(2))
b3.A(c6,c9)
b4=new T.q(new Float32Array(2))
b4.A(c6,c9)
b5=new T.q(new Float32Array(2))
b5.A(c6,c8)
b6=new T.q(new Float32Array(2))
b6.A(c7,c8)
b7=new T.q(new Float32Array(2))
b7.A(c7,c9)
b8=new T.q(new Float32Array(2))
b8.A(c7,c9)
b9=new T.q(new Float32Array(2))
b9.A(c6,c9)
c0=new T.q(new Float32Array(2))
c0.A(c6,c8)
c1=new T.q(new Float32Array(2))
c1.A(c7,c8)
c2=new G.c4(!1,[],[],[],P.J())
c2.aa("aTexUV")
c2.aa("aNormal")
c2.d9(6)
c2.ag([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.aH("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$em(),c3<6;++c3){c4=z[c3]
c2.aI("aNormal",[c4,c4,c4,c4])}return c2},
hz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.b.P(z,$.$get$dz())
C.b.P(y,$.$get$c6())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.C)(z),++u){t=z[u]
s=J.e(t)
r=s.ga_(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
q=new T.f(new Float32Array(3))
q.q(r)
r=s.gY(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
q.I(0,y[r])
q.U(0,0.5)
q.G(0)
r=s.gY(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
p=new T.f(new Float32Array(3))
p.q(r)
r=s.ga4(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
p.I(0,y[r])
p.U(0,0.5)
p.G(0)
r=s.ga4(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
r=y[r]
o=new T.f(new Float32Array(3))
o.q(r)
r=s.ga_(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
o.I(0,y[r])
o.U(0,0.5)
o.G(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.aI(s.ga_(t),n,l))
w.push(new G.aI(s.gY(t),m,n))
w.push(new G.aI(s.ga4(t),l,m))
w.push(new G.aI(n,m,l))}}k=new G.c4(!1,[],[],[],P.J())
k.aa("aTexUV")
k.aa("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.C)(z),++u){t=z[u]
s=J.e(t)
r=s.ga_(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
j=y[r]
r=s.gY(t)
if(r>>>0!==r||r>=y.length)return H.a(y,r)
i=y[r]
s=s.ga4(t)
if(s>>>0!==s||s>=y.length)return H.a(y,s)
h=y[s]
s=J.e(j)
r=s.gF(j)
g=s.gn(j)
g=Math.atan2(H.S(r),H.S(g))
s=Math.acos(H.S(s.gp(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.e(i)
g=s.gF(i)
f=s.gn(i)
f=Math.atan2(H.S(g),H.S(f))
s=Math.acos(H.S(s.gp(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.e(h)
f=s.gF(h)
e=s.gn(h)
e=Math.atan2(H.S(f),H.S(e))
s=Math.acos(H.S(s.gp(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.aI("aNormal",[j,i,h])
k.da([j.O(b),i.O(b),h.O(b)])
k.aH("aTexUV",[new T.q(r),new T.q(g),new T.q(f)])}return k},
hx:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=c*0.5
y=d*0.5
x=c/a
w=c/b
v=new T.f(new Float32Array(3))
v.v(0,0,1)
u=(a+1)*(b+1)
t=new Array(u)
t.fixed$length=Array
s=[T.f]
r=H.w(t,s)
t=new Array(u)
t.fixed$length=Array
q=H.w(t,s)
u=new Array(u)
u.fixed$length=Array
p=H.w(u,[T.q])
o=new B.hy(a)
for(u=p.length,t=r.length,s=q.length,n=0;n<=a;++n)for(m=n/a,l=n*x-z,k=0;k<=b;++k){j=o.$2(n,k)
i=new Float32Array(3)
i[0]=l
i[1]=k*w-y
i[2]=0
if(j>>>0!==j||j>=t)return H.a(r,j)
r[j]=new T.f(i)
if(j>=s)return H.a(q,j)
q[j]=v
i=new Float32Array(2)
i[0]=m
i[1]=k/b
if(j>=u)return H.a(p,j)
p[j]=new T.q(i)}u=[]
h=new G.c4(!1,[],u,[],P.J())
h.ag(r)
for(n=0;n<a;n=g)for(g=n+1,k=0;k<b;k=f){f=k+1
u.push(new G.dw(o.$2(n,k),o.$2(g,k),o.$2(g,f),o.$2(n,f)))}h.aa("aTexUV")
h.aH("aTexUV",p)
h.aa("aNormal")
h.aI("aNormal",q)
return h},
hy:{"^":"j:17;a",
$2:function(a,b){return a*(this.a+1)+b}}}],["","",,D,{"^":"",
bA:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.a
y=C.a.aB(255*z[0])
x=C.a.aB(255*z[1])
w=C.a.aB(255*z[2])
z="rgb("+y+", "+x+", "+w+")"
v=document.createElement("canvas")
v.width=2
v.height=2
u=C.E.cT(v,"2d")
J.fH(u,z)
u.fillRect(0,0,v.width,v.height)
z=new G.iP(!1,!1,!1,!0,1,9729,9729)
t=J.fj(a.a)
s=new G.hC(v,b,t,3553,a,z)
J.b6(a.a,3553,t)
J.fG(a.a,37440,1)
s.dr(v)
z.di(a,3553)
J.fC(a.a)
J.b6(a.a,3553,null)
return s},
hM:{"^":"d;a,b,c",
dj:function(a){var z
a=document
z=W.by
W.af(a,"keydown",new D.hO(this),!1,z)
W.af(a,"keyup",new D.hP(this),!1,z)},
t:{
hN:function(a){var z=P.F
z=new D.hM(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.dj(a)
return z}}},
hO:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.I(0,J.cS(a))
z.b.I(0,a.which)}},
hP:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.cs(0,J.cS(a))
z.c.I(0,a.which)}},
i_:{"^":"d;a,b,c,d,e,f,r,x",
dl:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gb8(a)
W.af(y.a,y.b,new D.i1(this),!1,H.x(y,0))
y=z.gb7(a)
W.af(y.a,y.b,new D.i2(this),!1,H.x(y,0))
y=z.gb9(a)
W.af(y.a,y.b,new D.i3(this),!1,H.x(y,0))
z=z.gba(a)
W.af(z.a,z.b,new D.i4(this),!1,H.x(z,0))},
t:{
i0:function(a){var z=P.F
z=new D.i_(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.dl(a)
return z}}},
i1:{"^":"j:5;a",
$1:function(a){var z,y
z=J.e(a)
z.aA(a)
y=this.a
y.r=z.gcq(a).a
y.x=z.gcq(a).b
y.d=a.movementX
y.e=a.movementY}},
i2:{"^":"j:5;a",
$1:function(a){var z=J.e(a)
z.aA(a)
P.aj("BUTTON "+H.b(z.gc2(a)))
z=this.a
z.a.I(0,a.button)
z.b.I(0,a.button)}},
i3:{"^":"j:5;a",
$1:function(a){var z,y
z=J.e(a)
z.aA(a)
y=this.a
y.a.cs(0,z.gc2(a))
y.c.I(0,a.button)}},
i4:{"^":"j:18;a",
$1:function(a){var z=J.e(a)
z.aA(a)
this.a.f=z.gek(a)}},
ib:{"^":"h_;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bp:function(a){var z,y
z=C.r.er(a,0,new A.kV())
if(typeof z!=="number")return H.y(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kV:{"^":"j:19;",
$2:function(a,b){var z,y
z=J.aD(a,J.aa(b))
if(typeof z!=="number")return H.y(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",O:{"^":"d;aU:a<",
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
k:function(a){return"[0] "+this.a2(0).k(0)+"\n[1] "+this.a2(1).k(0)+"\n[2] "+this.a2(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.a(z,b)
return z[b]},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.O){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gE:function(a){return A.bp(this.a)},
a2:function(a){var z,y,x
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
return new T.f(z)},
V:function(a){var z=new T.O(new Float32Array(9))
z.q(this)
return z},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(typeof a7==="number")return this.O(a7)
z=J.o(a7)
if(!!z.$isf){y=new T.f(new Float32Array(3))
y.q(a7)
x=y.a
z=this.a
w=z[0]
v=x[0]
u=z[3]
t=x[1]
s=z[6]
r=x[2]
q=z[1]
p=z[4]
o=z[7]
n=z[2]
m=z[5]
z=z[8]
x[0]=w*v+u*t+s*r
x[1]=q*v+p*t+o*r
x[2]=n*v+m*t+z*r
return y}if(!!z.$isO){z=new Float32Array(9)
w=new T.O(z)
w.q(this)
l=z[0]
k=z[3]
j=z[6]
i=z[1]
h=z[4]
g=z[7]
f=z[2]
e=z[5]
d=z[8]
x=a7.gaU()
c=x.h(0,0)
b=x.h(0,3)
a=x.h(0,6)
a0=x.h(0,1)
a1=x.h(0,4)
a2=x.h(0,7)
a3=x.h(0,2)
a4=x.h(0,5)
a5=x.h(0,8)
z[0]=C.a.m(l,c)+C.a.m(k,a0)+C.a.m(j,a3)
z[3]=C.a.m(l,b)+C.a.m(k,a1)+C.a.m(j,a4)
z[6]=C.a.m(l,a)+C.a.m(k,a2)+C.a.m(j,a5)
z[1]=C.a.m(i,c)+C.a.m(h,a0)+C.a.m(g,a3)
z[4]=C.a.m(i,b)+C.a.m(h,a1)+C.a.m(g,a4)
z[7]=C.a.m(i,a)+C.a.m(h,a2)+C.a.m(g,a5)
z[2]=C.a.m(f,c)+C.a.m(e,a0)+C.a.m(d,a3)
z[5]=C.a.m(f,b)+C.a.m(e,a1)+C.a.m(d,a4)
z[8]=C.a.m(f,a)+C.a.m(e,a2)+C.a.m(d,a5)
return w}throw H.c(P.d2(a7))},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.O(z)
y.q(this)
x=b.gaU()
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
H:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.O(z)
y.q(this)
x=b.gaU()
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
X:function(a){var z,y
z=new Float32Array(9)
y=new T.O(z)
y.q(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
z[4]=-z[4]
z[5]=-z[5]
z[6]=-z[6]
z[7]=-z[7]
z[8]=-z[8]
return y},
eh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
O:function(a){var z,y
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
return y}},G:{"^":"d;bI:a<",
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
k:function(a){return"[0] "+this.a2(0).k(0)+"\n[1] "+this.a2(1).k(0)+"\n[2] "+this.a2(2).k(0)+"\n[3] "+this.a2(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.a(z,b)
return z[b]},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.G){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gE:function(a){return A.bp(this.a)},
a2:function(a){var z,y,x
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
return new T.L(z)},
V:function(a){var z=new T.G(new Float32Array(16))
z.q(this)
return z},
X:function(a){var z,y
z=new Float32Array(16)
y=new T.G(z)
y.q(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
z[4]=-z[4]
z[5]=-z[5]
z[6]=-z[6]
z[7]=-z[7]
z[8]=-z[8]
z[9]=-z[9]
z[10]=-z[10]
z[11]=-z[11]
z[12]=-z[12]
z[13]=-z[13]
z[14]=-z[14]
z[15]=-z[15]
return y},
m:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(typeof b==="number")return this.O(b)
z=J.o(b)
if(!!z.$isL){y=new T.L(new Float32Array(4))
y.q(b)
x=y.a
z=this.a
w=z[0]
v=x[0]
u=z[4]
t=x[1]
s=z[8]
r=x[2]
q=z[12]
p=x[3]
o=z[1]
n=z[5]
m=z[9]
l=z[13]
k=z[2]
j=z[6]
i=z[10]
h=z[14]
g=z[3]
f=z[7]
e=z[11]
z=z[15]
x[0]=w*v+u*t+s*r+q*p
x[1]=o*v+n*t+m*r+l*p
x[2]=k*v+j*t+i*r+h*p
x[3]=g*v+f*t+e*r+z*p
return y}if(!!z.$isf){y=new T.f(new Float32Array(3))
y.q(b)
x=y.a
z=this.a
w=z[0]
v=x[0]
u=z[4]
t=x[1]
s=z[8]
r=x[2]
q=z[12]
p=z[1]
o=z[5]
n=z[9]
m=z[13]
l=z[2]
k=z[6]
j=z[10]
z=z[14]
x[0]=w*v+u*t+s*r+q
x[1]=p*v+o*t+n*r+m
x[2]=l*v+k*t+j*r+z
return y}if(!!z.$isG){z=new T.G(new Float32Array(16))
z.q(this)
z.b5(0,b)
return z}throw H.c(P.d2(b))},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.G(z)
y.q(this)
x=b.gbI()
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
H:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.G(z)
y.q(this)
x=b.gbI()
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
ao:function(a3,a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=a4.a
y=z[0]
x=z[1]
w=z[2]
v=Math.sqrt(y*y+x*x+w*w)
u=z[0]/v
t=z[1]/v
s=z[2]/v
r=Math.cos(H.S(a5))
q=Math.sin(H.S(a5))
p=1-r
o=u*u*p+r
z=s*q
n=u*t*p-z
w=t*q
m=u*s*p+w
l=t*u*p+z
k=t*t*p+r
z=u*q
j=t*s*p-z
i=s*u*p-w
h=s*t*p+z
g=s*s*p+r
z=this.a
w=z[0]
x=z[4]
y=z[8]
f=z[1]
e=z[5]
d=z[9]
c=z[2]
b=z[6]
a=z[10]
a0=z[3]
a1=z[7]
a2=z[11]
z[0]=w*o+x*l+y*i
z[1]=f*o+e*l+d*i
z[2]=c*o+b*l+a*i
z[3]=a0*o+a1*l+a2*i
z[4]=w*n+x*k+y*h
z[5]=f*n+e*k+d*h
z[6]=c*n+b*k+a*h
z[7]=a0*n+a1*k+a2*h
z[8]=w*m+x*j+y*g
z[9]=f*m+e*j+d*g
z[10]=c*m+b*j+a*g
z[11]=a0*m+a1*j+a2*g},
cU:function(a,b,c){var z,y,x,w,v,u,t,s
z=new Float32Array(16)
y=new T.G(z)
y.q(this)
x=J.o(a)
w=!!x.$isL
v=w?x.gae(a):1
if(!!x.$isf){u=x.gn(a)
t=x.gp(a)
s=x.gF(a)}else if(w){u=x.gn(a)
t=x.gp(a)
s=x.gF(a)}else if(typeof a==="number"){s=a
t=s
u=t}else{u=null
t=null
s=null}x=z[0]
if(typeof u!=="number")return H.y(u)
z[0]=x*u
z[1]=z[1]*u
z[2]=z[2]*u
z[3]=z[3]*u
x=z[4]
if(typeof t!=="number")return H.y(t)
z[4]=x*t
z[5]=z[5]*t
z[6]=z[6]*t
z[7]=z[7]*t
x=z[8]
if(typeof s!=="number")return H.y(s)
z[8]=x*s
z[9]=z[9]*s
z[10]=z[10]*s
z[11]=z[11]*s
z[12]=z[12]*v
z[13]=z[13]*v
z[14]=z[14]*v
z[15]=z[15]*v
return y},
O:function(a){return this.cU(a,null,null)},
R:function(){var z=this.a
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
b5:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7},
t:{
bC:function(){return new T.G(new Float32Array(16))}}},au:{"^":"d;aZ:a<",
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gae:function(a){return this.a[3]},
V:function(a){var z=new T.au(new Float32Array(4))
z.q(this)
return z},
q:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
cV:function(a,b){var z,y,x,w,v,u
z=a.a
y=z[0]
x=z[1]
w=z[2]
v=Math.sqrt(y*y+x*x+w*w)
if(v===0)return
y=b*0.5
u=Math.sin(y)/v
x=this.a
x[0]=z[0]*u
x[1]=z[1]*u
x[2]=z[2]*u
x[3]=Math.cos(y)},
gj:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
O:function(a){var z,y
z=new Float32Array(4)
y=new T.au(z)
y.q(this)
z[3]=z[3]*a
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
m:function(a0,a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=this.a
y=z[3]
x=z[2]
w=z[1]
v=z[0]
u=a1.gaZ()
t=u.h(0,3)
s=u.h(0,2)
r=u.h(0,1)
q=u.h(0,0)
z=C.a.m(y,q)
p=C.a.m(v,t)
o=C.a.m(w,s)
n=C.a.m(x,r)
m=C.a.m(y,r)
l=C.a.m(w,t)
k=C.a.m(x,q)
j=C.a.m(v,s)
i=C.a.m(y,s)
h=C.a.m(x,t)
g=C.a.m(v,r)
f=C.a.m(w,q)
e=C.a.m(y,t)
d=C.a.m(v,q)
c=C.a.m(w,r)
b=C.a.m(x,s)
a=new Float32Array(4)
a[0]=z+p+o-n
a[1]=m+l+k-j
a[2]=i+h+g-f
a[3]=e-d-c-b
return new T.au(a)},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.au(z)
y.q(this)
x=b.gaZ()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
H:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.au(z)
y.q(this)
x=b.gaZ()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
X:function(a){var z,y
z=new Float32Array(4)
y=new T.au(z)
y.q(this)
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.a(z,b)
return z[b]},
k:function(a){var z=this.a
return H.b(z[0])+", "+H.b(z[1])+", "+H.b(z[2])+" @ "+H.b(z[3])}},q:{"^":"d;bQ:a<",
A:function(a,b){var z=this.a
z[0]=a
z[1]=b},
q:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gE:function(a){return A.bp(this.a)},
X:function(a){var z,y
z=new Float32Array(2)
y=new T.q(z)
y.q(this)
z[1]=-z[1]
z[0]=-z[0]
return y},
H:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.q(z)
y.q(this)
x=b.gbQ()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.q(z)
y.q(this)
x=b.gbQ()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
m:function(a,b){var z=new T.q(new Float32Array(2))
z.q(this)
z.U(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=2)return H.a(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
U:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
O:function(a){var z=new T.q(new Float32Array(2))
z.q(this)
z.U(0,a)
return z},
V:function(a){var z=new T.q(new Float32Array(2))
z.q(this)
return z},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]}},f:{"^":"d;b1:a<",
v:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
q:function(a){var z,y
z=a.gb1()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.f){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gE:function(a){return A.bp(this.a)},
X:function(a){var z,y
z=new Float32Array(3)
y=new T.f(z)
y.q(this)
z[2]=-z[2]
z[1]=-z[1]
z[0]=-z[0]
return y},
H:function(a,b){var z=new T.f(new Float32Array(3))
z.q(this)
z.bt(0,b)
return z},
l:function(a,b){var z=new T.f(new Float32Array(3))
z.q(this)
z.I(0,b)
return z},
m:function(a,b){return this.O(b)},
h:function(a,b){var z=this.a
if(b>=3)return H.a(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
G:function(a){var z,y,x,w,v,u
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=Math.sqrt(y*y+x*x+w*w)
if(v===0)return 0
u=1/v
z[0]=z[0]*u
z[1]=z[1]*u
z[2]=z[2]*u
return v},
b2:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
ca:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.f(new Float32Array(3))
z.v(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
I:function(a,b){var z,y
z=b.gb1()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
bt:function(a,b){var z,y
z=b.gb1()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
U:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
O:function(a){var z=new T.f(new Float32Array(3))
z.q(this)
z.U(0,a)
return z},
V:function(a){var z=new T.f(new Float32Array(3))
z.q(this)
return z},
gY:function(a){return this.a[2]},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
t:{
v:function(a,b,c){var z=new T.f(new Float32Array(3))
z.v(a,b,c)
return z}}},L:{"^":"d;bR:a<",
q:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
J:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.L){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gE:function(a){return A.bp(this.a)},
X:function(a){var z,y
z=new Float32Array(4)
y=new T.L(z)
y.q(this)
z[0]=-z[0]
z[1]=-z[1]
z[2]=-z[2]
z[3]=-z[3]
return y},
H:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.L(z)
y.q(this)
x=b.gbR()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.L(z)
y.q(this)
x=b.gbR()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
m:function(a,b){var z=new T.L(new Float32Array(4))
z.q(this)
z.U(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=4)return H.a(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
U:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
O:function(a){var z=new T.L(new Float32Array(4))
z.q(this)
z.U(0,a)
return z},
V:function(a){var z=new T.L(new Float32Array(4))
z.q(this)
return z},
gY:function(a){return this.a[2]},
ga_:function(a){return this.a[3]},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gae:function(a){return this.a[3]}}}],["","",,K,{"^":"",
hR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=G.c5("cube",b,B.hb(!0,1,0,1,0,2,2,2))
y=G.c5("icosahedron-4",b,B.hz(4,1,!0))
x=G.bd("mat0")
w=x.d
w.i(0,"uTexture",D.bA(a,"gray",$.$get$db()))
w.i(0,"uShininess",10)
w=G.bd("mat1")
v=w.d
v.i(0,"uTexture",D.bA(a,"red",$.$get$df()))
v.i(0,"uShininess",10)
v=G.bd("mat2")
u=v.d
u.i(0,"uTexture",D.bA(a,"red",$.$get$da()))
u.i(0,"uShininess",10)
u=G.bd("mat3")
t=u.d
t.i(0,"uTexture",D.bA(a,"red",$.$get$dc()))
t.i(0,"uShininess",10)
s=[x,w,v,u]
for(x=c.cy,r=0;r<8;++r){q=(r&1)===0?-10:10
p=(r&2)===0?-10:10
o=(r&4)===0?-10:10
w=r%2===0?z:y
v=s[r%4]
u=new Float32Array(9)
t=new T.G(new Float32Array(16))
t.R()
n=new Float32Array(16)
m=new T.G(n)
m.R()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
h=new T.f(i)
j=new A.bD(v,w,[],new T.O(u),t,m,new T.f(l),new T.f(k),new T.f(j),h,"mesh",!1,!0)
n[12]=q
n[13]=p
n[14]=o
i[0]=n[0]
i[1]=n[4]
i[2]=n[8]
m.ao(0,h,-1)
m.ao(0,j.bo(),-0.7)
x.push(j)}w=G.c5("strips",b,B.hx(20,20,80,80))
v=s[0]
u=new Float32Array(9)
t=new T.G(new Float32Array(16))
t.R()
n=new Float32Array(16)
m=new T.G(n)
m.R()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
g=new A.bD(v,w,[],new T.O(u),t,m,new T.f(l),new T.f(k),new T.f(j),new T.f(new Float32Array(3)),"grid",!1,!0)
f=Math.cos(-1.5079644737231006)
e=Math.sin(-1.5079644737231006)
w=n[4]
v=n[8]
u=n[5]
t=n[9]
m=n[6]
l=n[10]
k=n[7]
j=n[11]
i=-e
n[4]=w*f+v*e
n[5]=u*f+t*e
n[6]=m*f+l*e
n[7]=k*f+j*e
n[8]=w*i+v*f
n[9]=u*i+t*f
n[10]=m*i+l*f
n[11]=k*i+j*f
g.aD(0,-20,20)
x.push(g)},
f_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=document
x=new R.iD(0,0,null,null,null,null)
x.ds(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.h3(null,w)
u=J.fA(w,"webgl2",P.cf(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.a3(P.dv('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.fB(u))
if($.eQ>0)P.aj("I: "+t)
J.fg(u,0,0,0,1)
J.b7(u,2929)
J.b7(u,2884)
u=new Float32Array(3)
t=D.hN(null)
s=D.i0(w)
r=new T.G(new Float32Array(16))
r.R()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.ib(50,10,0,0,new T.f(u),-0.02,t,s,r,new T.f(q),new T.f(p),new T.f(o),new T.f(new Float32Array(3)),"camera:orbit",!1,!0)
n.aD(0,0,56)
u=new T.G(new Float32Array(16))
u.R()
t=new T.G(new Float32Array(16))
t.R()
m=new G.id(n,50,1,0.1,1e4,u,t,new T.G(new Float32Array(16)),P.J(),"perspective",!1,!0)
m.bz()
u=[]
t=new Float32Array(64)
l=new G.hA(u,t,new Float32Array(4),P.J(),"illumination",!1,!0)
for(t=$.$get$bO(),t=t.gcO(t),t=new H.ci(null,J.ak(t.a),t.b,[H.x(t,0),H.x(t,1)]);t.u();)u.push(t.a)
u=G.cl("BlinnPhong",v,$.$get$eY(),$.$get$eW())
k=new A.bF(u,[m,l],[],"BlinnPhong",!1,!0)
u=G.cl("Gourad",v,$.$get$eZ(),$.$get$eX())
j=new A.bF(u,[m,l],[],"Gourad",!1,!0)
u=G.cl("Fixed",v,$.$get$f4(),$.$get$f3())
i=new A.bF(u,[m],[],"Fixed",!1,!0)
h=A.dS("BlinnPhong",v,null)
t=h.f
t.push(k)
t.push(i)
g=A.dS("Gourad",v,null)
t=g.f
t.push(j)
t.push(i)
f=G.bd("light")
f.d.i(0,"uColor",$.$get$dh())
e=P.J()
for(t=$.$get$bO(),s=new H.ad(t,t.r,null,null,[H.x(t,0)]),s.c=t.e,r=u.d,u=u.e;s.u();){d=s.d
c=t.h(0,d)
q=u.x
b=new G.dJ(r,J.cM(r.a),1,P.J(),q,null,0,-1,null,null,P.J(),"meshdata:dirLightViz",!1,!0)
b.ag(new Float32Array(3))
b.y=J.bt(r.a)
b.ah([0,0])
q=J.o(c)
if(!!q.$isdr){q=c.Q
R.iU(b,q,q/4,c.x)}else if(!!q.$isdW)R.iW(b,c.x,c.y,c.ch,c.cx)
else if(!!q.$isdP)R.iV(b,c.x,c.Q)
q=new Float32Array(9)
p=new T.G(new Float32Array(16))
p.R()
o=new T.G(new Float32Array(16))
o.R()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
e.i(0,d,new A.bD(f,b,[],new T.O(q),p,o,new T.f(a),new T.f(a0),new T.f(a1),new T.f(new Float32Array(3)),d,!1,!0))}for(u=e.gcO(e),u=new H.ci(null,J.ak(u.a),u.b,[H.x(u,0),H.x(u,1)]),t=i.f;u.u();)t.push(u.a)
u=new Float32Array(9)
t=new T.G(new Float32Array(16))
t.R()
s=new T.G(new Float32Array(16))
s.R()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
a2=new A.bD(null,null,[],new T.O(u),t,s,new T.f(r),new T.f(q),new T.f(p),new T.f(new Float32Array(3)),"scene",!1,!0)
K.hR(v,k.d,a2)
j.f.push(a2)
k.f.push(a2)
a3=H.a2(y.querySelector("#phase"),"$isdU")
a3.selectedIndex=0
for(u=y.getElementsByTagName("input"),t=u.length,a4=0;a4<u.length;u.length===t||(0,H.C)(u),++a4){s=J.ft(u[a4])
W.af(s.a,s.b,new K.l7(e),!1,H.x(s,0))}for(u=y.getElementsByTagName("input"),t=u.length,a4=0;a4<u.length;u.length===t||(0,H.C)(u),++a4){a5=u[a4]
H.bq("initialize inputs "+H.b(J.fr(a5)))
a6=y.createEvent("Event")
a6.initEvent("change",!0,!0)
a5.dispatchEvent(a6)}y=new K.l8(w,m,g,h)
y.$1(null)
W.af(window,"resize",y,!1,W.N)
z.a=0
new K.l6(z,n,a2,a3,h,g,x).$1(0)},
l7:{"^":"j:20;a",
$1:function(a){var z=H.a2(J.fw(a),"$isdA")
P.aj(H.b(z.id)+" toggle "+H.b(z.checked))
$.$get$bO().h(0,z.id).c=z.checked
this.a.h(0,z.id).c=z.checked}},
l8:{"^":"j:21;a,b,c,d",
$1:function(a){var z,y,x,w
z=this.a
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sL(z,y)
w.sK(z,x)
P.aj("size change "+H.b(y)+" "+H.b(x))
this.b.dc(y,x)
z=this.c
z.z=y
z.Q=x
z=this.d
z.z=y
z.Q=x}},
l6:{"^":"j:22;a,b,c,d,e,f,r",
$1:function(a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.a
y=J.b1(a3)
x=y.H(a3,z.a)
z.a=y.l(a3,0)
y=this.b
y.go+=0.001
w=y.r1
v=w.a
if(v.B(0,0)||v.B(0,1)){v=y.go
u=w.d
if(typeof u!=="number")return u.m()
y.go=v+u*0.01
u=y.id
v=w.e
if(typeof v!=="number")return v.m()
y.id=u+v*0.01}v=y.k4
u=v.a
if(u.B(0,37))y.go+=0.03
else if(u.B(0,39))y.go-=0.03
if(u.B(0,38))y.id+=0.03
else if(u.B(0,40))y.id-=0.03
if(u.B(0,33))y.fy*=0.99
else if(u.B(0,34))y.fy*=1.01
if(u.B(0,32)){y.go=0
y.id=0}u=w.f
if(typeof u!=="number")return u.m()
u=y.fy-u*y.k3
if(u>0)y.fy=u
u=C.a.ed(y.id,-1.4707963267948965,1.4707963267948965)
y.id=u
t=y.fy
s=y.go
r=t*Math.cos(u)
y.aD(r*Math.cos(s),t*Math.sin(u),r*Math.sin(s))
s=y.k2
u=y.d
t=u.a
q=s.a
t[12]=t[12]+q[0]
t[13]=t[13]+q[1]
t[14]=t[14]+q[2]
p=t[12]
o=t[13]
n=t[14]
m=new T.f(new Float32Array(3))
m.v(0,1,0)
q=y.e
l=q.a
l[0]=t[12]
l[1]=t[13]
l[2]=t[14]
k=q.H(0,s)
k.G(0)
j=m.ca(k)
j.G(0)
i=k.ca(j)
i.G(0)
s=j.b2(q)
l=i.b2(q)
q=k.b2(q)
h=j.a
g=h[0]
f=i.a
e=f[0]
d=k.a
c=d[0]
b=h[1]
a=f[1]
a0=d[1]
h=h[2]
f=f[2]
d=d[2]
t[15]=1
t[14]=-q
t[13]=-l
t[12]=-s
t[11]=0
t[10]=d
t[9]=f
t[8]=h
t[7]=0
t[6]=a0
t[5]=a
t[4]=b
t[3]=0
t[2]=c
t[1]=e
t[0]=g
t[12]=p
t[13]=o
t[14]=n
u.ao(0,y.bf(),-y.k1)
v.c.al(0)
v.b.al(0)
w.e=0
w.d=0
w.f=0
w.c.al(0)
w.b.al(0)
for(y=this.c.cy,w=y.length,v=J.eR(x),a1=0;a1<y.length;y.length===w||(0,H.C)(y),++a1){a2=y[a1]
if(!J.M(a2.a,"grid")){a2.eF(v.m(x,0.0003))
u=v.m(x,0.0003)
a2.d.ao(0,a2.bo(),J.cG(u))}}(this.d.selectedIndex===0?this.e:this.f).dd()
C.a7.ge5(window).cz(this)
this.r.dv(z.a)}}},1]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c9.prototype
return J.dC.prototype}if(typeof a=="string")return J.aM.prototype
if(a==null)return J.hJ.prototype
if(typeof a=="boolean")return J.hI.prototype
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bn(a)}
J.kR=function(a){if(typeof a=="number")return J.as.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bn(a)}
J.ai=function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bn(a)}
J.bm=function(a){if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bn(a)}
J.kS=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c9.prototype
return J.as.prototype}if(a==null)return a
if(!(a instanceof P.d))return J.aV.prototype
return a}
J.b1=function(a){if(typeof a=="number")return J.as.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aV.prototype
return a}
J.eR=function(a){if(typeof a=="number")return J.as.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aV.prototype
return a}
J.eS=function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.aV.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.bn(a)}
J.aD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kR(a).l(a,b)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).J(a,b)}
J.U=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.b1(a).ap(a,b)}
J.b4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.b1(a).a8(a,b)}
J.cG=function(a){if(typeof a=="number")return-a
return J.kS(a).X(a)}
J.f8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.b1(a).H(a,b)}
J.b5=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l4(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ai(a).h(a,b)}
J.f9=function(a,b,c,d){return J.e(a).dS(a,b,c,d)}
J.cH=function(a,b){return J.e(a).bS(a,b)}
J.fa=function(a,b,c,d){return J.e(a).bT(a,b,c,d)}
J.cI=function(a,b,c){return J.e(a).bV(a,b,c)}
J.fb=function(a,b){return J.e(a).e7(a,b)}
J.bS=function(a,b,c){return J.e(a).bW(a,b,c)}
J.fc=function(a,b,c){return J.e(a).bY(a,b,c)}
J.b6=function(a,b,c){return J.e(a).bZ(a,b,c)}
J.bs=function(a,b){return J.e(a).ea(a,b)}
J.fd=function(a,b){return J.e(a).c_(a,b)}
J.fe=function(a,b,c){return J.e(a).c0(a,b,c)}
J.cJ=function(a,b,c,d){return J.e(a).c1(a,b,c,d)}
J.ff=function(a,b){return J.bm(a).c3(a,b)}
J.fg=function(a,b,c,d,e){return J.e(a).c4(a,b,c,d,e)}
J.cK=function(a){return J.e(a).V(a)}
J.cL=function(a,b){return J.eS(a).ee(a,b)}
J.fh=function(a,b){return J.eR(a).a0(a,b)}
J.bT=function(a,b,c){return J.ai(a).eg(a,b,c)}
J.bt=function(a){return J.e(a).c6(a)}
J.fi=function(a){return J.e(a).c7(a)}
J.fj=function(a){return J.e(a).c9(a)}
J.cM=function(a){return J.e(a).ej(a)}
J.fk=function(a,b){return J.e(a).cb(a,b)}
J.bU=function(a,b){return J.e(a).cc(a,b)}
J.fl=function(a,b,c,d){return J.e(a).cd(a,b,c,d)}
J.fm=function(a,b,c,d,e){return J.e(a).el(a,b,c,d,e)}
J.fn=function(a,b,c,d,e){return J.e(a).ce(a,b,c,d,e)}
J.fo=function(a,b,c,d,e,f){return J.e(a).em(a,b,c,d,e,f)}
J.cN=function(a,b){return J.bm(a).w(a,b)}
J.b7=function(a,b){return J.e(a).cf(a,b)}
J.fp=function(a,b){return J.e(a).cg(a,b)}
J.fq=function(a){return J.e(a).en(a)}
J.cO=function(a,b){return J.bm(a).D(a,b)}
J.cP=function(a){return J.e(a).ge6(a)}
J.cQ=function(a){return J.e(a).gb3(a)}
J.aE=function(a){return J.e(a).gW(a)}
J.aa=function(a){return J.o(a).gE(a)}
J.fr=function(a){return J.e(a).gey(a)}
J.ak=function(a){return J.bm(a).gM(a)}
J.a4=function(a){return J.ai(a).gj(a)}
J.fs=function(a){return J.e(a).gcp(a)}
J.ft=function(a){return J.e(a).gb6(a)}
J.fu=function(a){return J.e(a).gbb(a)}
J.cR=function(a){return J.e(a).ga6(a)}
J.fv=function(a){return J.e(a).geJ(a)}
J.fw=function(a){return J.e(a).gT(a)}
J.fx=function(a){return J.e(a).gcC(a)}
J.fy=function(a){return J.e(a).gae(a)}
J.cS=function(a){return J.e(a).geR(a)}
J.bV=function(a){return J.e(a).gn(a)}
J.bW=function(a){return J.e(a).gp(a)}
J.cT=function(a){return J.e(a).gF(a)}
J.fz=function(a){return J.e(a).bg(a)}
J.fA=function(a,b,c){return J.e(a).bh(a,b,c)}
J.fB=function(a){return J.e(a).aC(a)}
J.fC=function(a){return J.e(a).bi(a)}
J.fD=function(a,b){return J.e(a).bj(a,b)}
J.fE=function(a,b,c){return J.e(a).bk(a,b,c)}
J.cU=function(a,b,c){return J.e(a).bn(a,b,c)}
J.fF=function(a,b){return J.e(a).cn(a,b)}
J.fG=function(a,b,c){return J.e(a).cr(a,b,c)}
J.cV=function(a){return J.bm(a).eE(a)}
J.fH=function(a,b){return J.e(a).seo(a,b)}
J.fI=function(a,b){return J.e(a).sax(a,b)}
J.fJ=function(a,b,c,d){return J.e(a).bs(a,b,c,d)}
J.fK=function(a,b,c,d,e,f,g){return J.e(a).cu(a,b,c,d,e,f,g)}
J.fL=function(a,b,c,d){return J.e(a).cv(a,b,c,d)}
J.cW=function(a,b,c,d){return J.e(a).cw(a,b,c,d)}
J.cX=function(a){return J.b1(a).eK(a)}
J.fM=function(a){return J.eS(a).eM(a)}
J.aF=function(a){return J.o(a).k(a)}
J.fN=function(a,b,c,d){return J.e(a).eO(a,b,c,d)}
J.fO=function(a,b,c){return J.e(a).cD(a,b,c)}
J.fP=function(a,b,c){return J.e(a).cE(a,b,c)}
J.bX=function(a,b,c){return J.e(a).cF(a,b,c)}
J.fQ=function(a,b,c){return J.e(a).cG(a,b,c)}
J.cY=function(a,b,c){return J.e(a).cH(a,b,c)}
J.cZ=function(a,b,c){return J.e(a).cI(a,b,c)}
J.d_=function(a,b,c){return J.e(a).cJ(a,b,c)}
J.d0=function(a,b,c,d){return J.e(a).cK(a,b,c,d)}
J.d1=function(a,b,c,d){return J.e(a).cL(a,b,c,d)}
J.fR=function(a,b){return J.e(a).cN(a,b)}
J.fS=function(a,b,c){return J.e(a).eP(a,b,c)}
J.fT=function(a,b,c,d,e,f,g){return J.e(a).cP(a,b,c,d,e,f,g)}
J.fU=function(a,b,c,d,e){return J.e(a).cR(a,b,c,d,e)}
I.aB=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.u=W.bY.prototype
C.E=W.h0.prototype
C.n=W.h9.prototype
C.F=W.hg.prototype
C.G=J.h.prototype
C.b=J.aK.prototype
C.o=J.dC.prototype
C.c=J.c9.prototype
C.a=J.as.prototype
C.i=J.aM.prototype
C.N=J.aN.prototype
C.r=H.i5.prototype
C.R=W.i7.prototype
C.x=J.ie.prototype
C.C=W.iN.prototype
C.t=J.aV.prototype
C.a7=W.iY.prototype
C.D=new P.ic()
C.f=new P.jR()
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
C.O=H.w(I.aB(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.P=I.aB(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=I.aB([])
C.p=H.w(I.aB(["bind","if","ref","repeat","syntax"]),[P.n])
C.q=H.w(I.aB(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.S=new G.A("vec3","vertex btangents",0)
C.d=new G.A("vec3","",0)
C.T=new G.A("vec4","delta from light",0)
C.m=new G.A("","",0)
C.y=new G.A("vec3","vertex coordinates",0)
C.U=new G.A("vec3","vertex binormals",0)
C.z=new G.A("vec4","for wireframe",0)
C.V=new G.A("vec4","per vertex color",0)
C.W=new G.A("float","for normal maps",0)
C.j=new G.A("mat4","",0)
C.Y=new G.A("mat4","",4)
C.X=new G.A("mat4","",128)
C.e=new G.A("float","",0)
C.Z=new G.A("float","",4)
C.a_=new G.A("float","depth for shadowmaps",0)
C.h=new G.A("sampler2D","",0)
C.a0=new G.A("float","for bump maps",0)
C.a1=new G.A("vec2","texture uvs",0)
C.a2=new G.A("float","time since program start in sec",0)
C.k=new G.A("vec2","",0)
C.a3=new G.A("samplerCube","",0)
C.l=new G.A("vec4","",0)
C.a4=new G.A("vec3","vertex normals",0)
C.a5=new G.A("sampler2DShadow","",0)
C.A=new G.A("vec3","per vertex color",0)
C.B=new G.A("mat3","",0)
C.a6=new G.A("vec3","vertex tangents",0)
$.a5=0
$.aG=null
$.d5=null
$.eU=null
$.eJ=null
$.f2=null
$.bN=null
$.bP=null
$.cD=null
$.aw=null
$.aZ=null
$.b_=null
$.cw=!1
$.B=C.f
$.ac=null
$.c1=null
$.dt=null
$.ds=null
$.dp=null
$.dn=null
$.dm=null
$.dl=null
$.eQ=0
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
I.$lazy(y,x,w)}})(["dj","$get$dj",function(){return H.eT("_$dart_dartClosure")},"ca","$get$ca",function(){return H.eT("_$dart_js")},"e5","$get$e5",function(){return H.a7(H.bH({
toString:function(){return"$receiver$"}}))},"e6","$get$e6",function(){return H.a7(H.bH({$method$:null,
toString:function(){return"$receiver$"}}))},"e7","$get$e7",function(){return H.a7(H.bH(null))},"e8","$get$e8",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ec","$get$ec",function(){return H.a7(H.bH(void 0))},"ed","$get$ed",function(){return H.a7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ea","$get$ea",function(){return H.a7(H.eb(null))},"e9","$get$e9",function(){return H.a7(function(){try{null.$method$}catch(z){return z.message}}())},"ef","$get$ef",function(){return H.a7(H.eb(void 0))},"ee","$get$ee",function(){return H.a7(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cr","$get$cr",function(){return P.j1()},"dy","$get$dy",function(){var z,y
z=P.bf
y=new P.am(0,P.j_(),null,[z])
y.dC(null,z)
return y},"b0","$get$b0",function(){return[]},"di","$get$di",function(){return{}},"eq","$get$eq",function(){return P.cg(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"ct","$get$ct",function(){return P.J()},"dY","$get$dY",function(){return new G.e4(1281,0,4294967295)},"d4","$get$d4",function(){return new G.e3(1281,1281,1281)},"a1","$get$a1",function(){return P.cf(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a5,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a3,"uAnimationTable",C.h,"uTime",C.a2,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.e,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"dg","$get$dg",function(){return T.v(1,1,1)},"db","$get$db",function(){return T.v(0.4,0.4,0.4)},"d9","$get$d9",function(){return T.v(0,0,0)},"da","$get$da",function(){return T.v(0,0,1)},"dd","$get$dd",function(){return T.v(0,0,0.5)},"df","$get$df",function(){return T.v(1,0,0)},"dc","$get$dc",function(){return T.v(0,1,0)},"de","$get$de",function(){return T.v(0,0.5,0)},"dh","$get$dh",function(){return T.v(1,1,0)},"eZ","$get$eZ",function(){var z=G.aR("LightGouradV")
z.aG(["aPosition","aNormal","aTexUV"])
z.ar(["vColor"])
z.a3(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
z.a3(["uLightDescs","uLightTypes","uShininess"])
z.a3(["uEyePosition","uTexture"])
z.bx(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"eX","$get$eX",function(){var z=G.aR("LightGrouradV")
z.ar(["vColor"])
z.aL(["oFragColor = vec4(vColor, 1.0 );"])
return z},"eY","$get$eY",function(){var z=G.aR("LightBlinnPhongV")
z.aG(["aPosition","aNormal","aTexUV"])
z.ar(["vPosition","vNormal","vTexUV"])
z.a3(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
z.dq(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"])
return z},"eW","$get$eW",function(){var z=G.aR("LightBlinnPhongF")
z.ar(["vPosition","vNormal","vTexUV"])
z.a3(["uLightDescs","uLightTypes","uShininess"])
z.a3(["uEyePosition","uTexture"])
z.by(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"f4","$get$f4",function(){var z=G.aR("SolidColor")
z.aG(["aPosition"])
z.a3(["uPerspectiveViewMatrix","uModelMatrix"])
z.aL(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"f3","$get$f3",function(){var z=G.aR("SolidColorF")
z.a3(["uColor"])
z.aL(["oFragColor = vec4( uColor, 1.0 );"])
return z},"em","$get$em",function(){return[T.v(0,0,1),T.v(0,0,-1),T.v(0,1,0),T.v(0,-1,0),T.v(1,0,0),T.v(-1,0,0)]},"dz","$get$dz",function(){return[G.I(0,11,5),G.I(0,5,1),G.I(0,1,7),G.I(0,7,10),G.I(0,10,11),G.I(1,5,9),G.I(5,11,4),G.I(11,10,2),G.I(10,7,6),G.I(7,1,8),G.I(3,9,4),G.I(3,4,2),G.I(3,2,6),G.I(3,6,8),G.I(3,8,9),G.I(4,9,5),G.I(2,4,11),G.I(6,2,10),G.I(8,6,7),G.I(9,8,1)]},"f6","$get$f6",function(){return(1+P.lc(5))/2},"c6","$get$c6",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$f6()
y=T.v(-1,z,0)
y.G(0)
x=T.v(1,z,0)
x.G(0)
if(typeof z!=="number")return z.X()
w=T.v(-1,-z,0)
w.G(0)
v=T.v(1,-z,0)
v.G(0)
u=T.v(0,-1,z)
u.G(0)
t=T.v(0,1,z)
t.G(0)
s=T.v(0,-1,-z)
s.G(0)
r=T.v(0,1,-z)
r.G(0)
q=T.v(z,0,-1)
q.G(0)
p=T.v(z,0,1)
p.G(0)
o=T.v(-z,0,-1)
o.G(0)
z=T.v(-z,0,1)
z.G(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]},"f1","$get$f1",function(){return T.v(11,20,0)},"eN","$get$eN",function(){return T.v(0,-50,0)},"f5","$get$f5",function(){return T.v(-11,-30,0)},"bO","$get$bO",function(){var z,y,x,w,v,u
z=$.$get$eN()
y=$.$get$d9()
x=$.$get$dg()
w=T.bC()
v=T.bC()
u=$.$get$f1()
return P.cf(["idDirectional",new G.dr(z,y,x,40,w,v,1,"dir",!1,!0),"idPoint",new G.dP(u,$.$get$dd(),x,50,3,"point",!1,!0),"idSpot",new G.dW(u,$.$get$f5(),$.$get$de(),x,50,0.4487989505128276,2,1,1,40,T.bC(),T.bC(),2,"spot",!1,!0)])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.R]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.n,args:[P.F]},{func:1,args:[W.by]},{func:1,ret:P.cy,args:[W.aq,P.n,P.n,W.cs]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aT]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aT]},{func:1,v:true,args:[W.t,W.t]},{func:1,ret:P.F,args:[P.F,P.F]},{func:1,args:[W.aW]},{func:1,args:[P.F,P.d]},{func:1,args:[W.N]},{func:1,v:true,args:[W.N]},{func:1,v:true,args:[P.b2]},{func:1,ret:P.F,args:[,,]}]
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
if(x==y)H.le(d||a)
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
Isolate.aB=a.aB
Isolate.az=a.az
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
if(typeof dartMainRunner==="function")dartMainRunner(K.f_,[])
else K.f_([])})})()
//# sourceMappingURL=light.dart.js.map
