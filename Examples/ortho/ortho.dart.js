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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cj"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cj"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cj(this,d,e,true,[],a0).prototype
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
var dart=[["","",,H,{"^":"",lI:{"^":"d;a"}}],["","",,J,{"^":"",
q:function(a){return void 0},
cn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b8:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cm==null){H.ki()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dS("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c_()]
if(v!=null)return v
v=H.km(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$c_(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"d;",
G:function(a,b){return a===b},
gC:function(a){return H.aJ(a)},
k:["cK",function(a){return"Instance of '"+H.aK(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fX:{"^":"h;",
k:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$isch:1},
fY:{"^":"h;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gC:function(a){return 0},
$isb1:1},
c0:{"^":"h;",
gC:function(a){return 0},
k:["cM",function(a){return String(a)}]},
ht:{"^":"c0;"},
b5:{"^":"c0;"},
aH:{"^":"c0;",
k:function(a){var z=a[$.$get$cU()]
return z==null?this.cM(a):J.az(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aD:{"^":"h;$ti",
O:function(a,b){var z,y
if(!!a.fixed$length)H.U(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
B:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.M(a))}},
ai:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.c(y,x)
y[x]=w}return y.join(b)},
bd:function(a,b){return H.dz(a,b,null,H.G(a,0))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
gec:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.d9())},
cE:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.U(P.r("setRange"))
P.hB(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.H()
if(typeof b!=="number")return H.u(b)
z=c-b
if(z===0)return
y=J.q(d)
if(!!y.$isi){x=e
w=d}else{w=y.bd(d,e).el(0,!1)
x=0}y=J.aa(w)
v=y.gi(w)
if(typeof v!=="number")return H.u(v)
if(x+z>v)throw H.a(H.fU())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
ak:function(a,b,c,d){return this.cE(a,b,c,d,0)},
bI:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.M(a))}return!1},
cF:function(a,b){if(!!a.immutable$list)H.U(P.r("sort"))
H.hR(a,J.jR())},
be:function(a){return this.cF(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.L(a[z],b))return!0
return!1},
k:function(a){return P.bZ(a,"[","]")},
gN:function(a){return new J.fh(a,a.length,0,null,[H.G(a,0)])},
gC:function(a){return H.aJ(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.U(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cI(b,"newLength",null))
if(b<0)throw H.a(P.aq(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a9(a,b))
if(b>=a.length||b<0)throw H.a(H.a9(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.U(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a9(a,b))
if(b>=a.length||b<0)throw H.a(H.a9(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.A([],[H.G(a,0)])
this.si(y,z)
this.ak(y,0,a.length,a)
this.ak(y,a.length,z,b)
return y},
$isn:1,
$asn:I.at,
$isi:1,
p:{
aE:function(a){a.fixed$length=Array
return a},
lG:[function(a,b){return J.eK(a,b)},"$2","jR",8,0,22]}},
lH:{"^":"aD;$ti"},
fh:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aF:{"^":"h;",
X:function(a,b){var z
if(typeof b!=="number")throw H.a(H.Y(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gas(b)
if(this.gas(a)===z)return 0
if(this.gas(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gas:function(a){return a===0?1/a<0:a<0},
ek:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.r(""+a+".toInt()"))},
dS:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
dT:function(a,b,c){if(this.X(b,c)>0)throw H.a(H.Y(b))
if(this.X(a,b)<0)return b
if(this.X(a,c)>0)return c
return a},
en:function(a,b){var z
if(b>20)throw H.a(P.aq(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gas(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a+b},
H:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a-b},
bh:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bC(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.bC(a,b)},
bC:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bA:function(a,b){var z
if(a>0)z=this.dD(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dD:function(a,b){return b>31?0:a>>>b},
a5:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a<b},
aj:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a>b},
$isam:1,
$isaS:1},
db:{"^":"aF;",$isH:1},
da:{"^":"aF;"},
aG:{"^":"h;",
dU:function(a,b){if(b>=a.length)H.U(H.a9(a,b))
return a.charCodeAt(b)},
bs:function(a,b){if(b>=a.length)throw H.a(H.a9(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cI(b,null,null))
return a+b},
cH:function(a,b,c){var z
if(c>a.length)throw H.a(P.aq(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cG:function(a,b){return this.cH(a,b,0)},
bg:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.U(H.Y(c))
if(b<0)throw H.a(P.br(b,null,null))
if(typeof c!=="number")return H.u(c)
if(b>c)throw H.a(P.br(b,null,null))
if(c>a.length)throw H.a(P.br(c,null,null))
return a.substring(b,c)},
cI:function(a,b){return this.bg(a,b,null)},
em:function(a){return a.toLowerCase()},
dW:function(a,b,c){if(c>a.length)throw H.a(P.aq(c,0,a.length,null,null))
return H.kt(a,b,c)},
X:function(a,b){var z
if(typeof b!=="string")throw H.a(H.Y(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a9(a,b))
return a[b]},
$isn:1,
$asn:I.at,
$ism:1}}],["","",,H,{"^":"",
d9:function(){return new P.bu("No element")},
fV:function(){return new P.bu("Too many elements")},
fU:function(){return new P.bu("Too few elements")},
hR:function(a,b){var z=J.a4(a)
if(typeof z!=="number")return z.H()
H.b3(a,0,z-1,b)},
b3:function(a,b,c,d){if(c-b<=32)H.hQ(a,b,c,d)
else H.hP(a,b,c,d)},
hQ:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.aa(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.P(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a3(c-b+1,6)
y=b+z
x=c-z
w=C.b.a3(b+c,2)
v=w-z
u=w+z
t=J.aa(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.P(d.$2(s,r),0)){n=r
r=s
s=n}if(J.P(d.$2(p,o),0)){n=o
o=p
p=n}if(J.P(d.$2(s,q),0)){n=q
q=s
s=n}if(J.P(d.$2(r,q),0)){n=q
q=r
r=n}if(J.P(d.$2(s,p),0)){n=p
p=s
s=n}if(J.P(d.$2(q,p),0)){n=p
p=q
q=n}if(J.P(d.$2(r,o),0)){n=o
o=r
r=n}if(J.P(d.$2(r,q),0)){n=q
q=r
r=n}if(J.P(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.L(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.q(i)
if(h.G(i,0))continue
if(h.a5(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aR(i)
if(h.aj(i,0)){--l
continue}else{g=l-1
if(h.a5(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aU(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.P(d.$2(j,p),0))for(;!0;)if(J.P(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aU(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b3(a,b,m-2,d)
H.b3(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.L(d.$2(t.h(a,m),r),0);)++m
for(;J.L(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.L(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.L(d.$2(j,p),0))for(;!0;)if(J.L(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aU(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b3(a,m,l,d)}else H.b3(a,m,l,d)},
bU:{"^":"bn;$ti"},
bp:{"^":"bU;$ti",
gN:function(a){return new H.dg(this,this.gi(this),0,null,[H.cl(this,"bp",0)])},
B:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.v(0,y))
if(z!==this.gi(this))throw H.a(P.M(this))}},
b1:function(a,b){return this.cL(0,b)}},
i2:{"^":"bp;a,b,c,$ti",
d4:function(a,b,c,d){},
gdn:function(){var z=J.a4(this.a)
return z},
gdE:function(){var z,y
z=J.a4(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a4(this.a)
y=this.b
if(typeof z!=="number")return H.u(z)
if(y>=z)return 0
return z-y},
v:function(a,b){var z,y
z=this.gdE()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.u(b)
y=z+b
if(!(b<0)){z=this.gdn()
if(typeof z!=="number")return H.u(z)
z=y>=z}else z=!0
if(z)throw H.a(P.y(b,this,"index",null,null))
return J.cu(this.a,y)},
el:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.aa(y)
w=x.gi(y)
if(typeof w!=="number")return w.H()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.A(u,this.$ti)
for(s=0;s<v;++s){u=x.v(y,z+s)
if(s>=t.length)return H.c(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.a5()
if(u<w)throw H.a(P.M(this))}return t},
p:{
dz:function(a,b,c,d){var z=new H.i2(a,b,c,[d])
z.d4(a,b,c,d)
return z}}},
dg:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.aa(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.M(z))
w=this.c
if(typeof x!=="number")return H.u(x)
if(w>=x){this.d=null
return!1}this.d=y.v(z,w);++this.c
return!0}},
h6:{"^":"bp;a,b,$ti",
gi:function(a){return J.a4(this.a)},
v:function(a,b){return this.b.$1(J.cu(this.a,b))},
$asbU:function(a,b){return[b]},
$asbp:function(a,b){return[b]},
$asbn:function(a,b){return[b]}},
dT:{"^":"bn;a,b,$ti",
gN:function(a){return new H.ib(J.aW(this.a),this.b,this.$ti)}},
ib:{"^":"fW;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gD(z))===!0)return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bj:{"^":"d;$ti"}}],["","",,H,{"^":"",
ka:function(a){return init.types[a]},
kl:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.q(a).$isp},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.az(a)
if(typeof z!=="string")throw H.a(H.Y(a))
return z},
aJ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aK:function(a){var z,y,x,w,v,u,t,s,r
z=J.q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.D||!!J.q(a).$isb5){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bs(w,0)===36)w=C.i.cI(w,1)
r=H.bG(H.au(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
K:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hA:function(a){return a.b?H.K(a).getUTCFullYear()+0:H.K(a).getFullYear()+0},
hy:function(a){return a.b?H.K(a).getUTCMonth()+1:H.K(a).getMonth()+1},
hu:function(a){return a.b?H.K(a).getUTCDate()+0:H.K(a).getDate()+0},
hv:function(a){return a.b?H.K(a).getUTCHours()+0:H.K(a).getHours()+0},
hx:function(a){return a.b?H.K(a).getUTCMinutes()+0:H.K(a).getMinutes()+0},
hz:function(a){return a.b?H.K(a).getUTCSeconds()+0:H.K(a).getSeconds()+0},
hw:function(a){return a.b?H.K(a).getUTCMilliseconds()+0:H.K(a).getMilliseconds()+0},
u:function(a){throw H.a(H.Y(a))},
c:function(a,b){if(a==null)J.a4(a)
throw H.a(H.a9(a,b))},
a9:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,"index",null)
z=J.a4(a)
if(!(b<0)){if(typeof z!=="number")return H.u(z)
y=b>=z}else y=!0
if(y)return P.y(b,a,"index",null,z)
return P.br(b,"index",null)},
Y:function(a){return new P.ac(!0,a,null,null)},
a7:function(a){if(typeof a!=="number")throw H.a(H.Y(a))
return a},
a:function(a){var z
if(a==null)a=new P.dm()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eA})
z.name=""}else z.toString=H.eA
return z},
eA:function(){return J.az(this.dartException)},
U:function(a){throw H.a(a)},
D:function(a){throw H.a(P.M(a))},
V:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bA(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c1(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dl(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dF()
u=$.$get$dG()
t=$.$get$dH()
s=$.$get$dI()
r=$.$get$dM()
q=$.$get$dN()
p=$.$get$dK()
$.$get$dJ()
o=$.$get$dP()
n=$.$get$dO()
m=v.U(y)
if(m!=null)return z.$1(H.c1(y,m))
else{m=u.U(y)
if(m!=null){m.method="call"
return z.$1(H.c1(y,m))}else{m=t.U(y)
if(m==null){m=s.U(y)
if(m==null){m=r.U(y)
if(m==null){m=q.U(y)
if(m==null){m=p.U(y)
if(m==null){m=s.U(y)
if(m==null){m=o.U(y)
if(m==null){m=n.U(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dl(y,m))}}return z.$1(new H.i9(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dv()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ac(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dv()
return a},
an:function(a){var z
if(a==null)return new H.e9(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e9(a,null)},
k6:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
kk:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.d3("Unsupported number of arguments for wrapped closure"))},
a8:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kk)
a.$identity=z
return z},
fr:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.q(c).$isi){z.$reflectionInfo=c
x=H.hD(z).r}else x=c
w=d?Object.create(new H.hS().constructor.prototype):Object.create(new H.bR(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.Z
$.Z=J.ax(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cN(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.ka,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cL:H.bS
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cN(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fo:function(a,b,c,d){var z=H.bS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cN:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fq(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fo(y,!w,z,b)
if(y===0){w=$.Z
$.Z=J.ax(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aA
if(v==null){v=H.bg("self")
$.aA=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.Z
$.Z=J.ax(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aA
if(v==null){v=H.bg("self")
$.aA=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fp:function(a,b,c,d){var z,y
z=H.bS
y=H.cL
switch(b?-1:a){case 0:throw H.a(H.hJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fq:function(a,b){var z,y,x,w,v,u,t,s
z=$.aA
if(z==null){z=H.bg("self")
$.aA=z}y=$.cK
if(y==null){y=H.bg("receiver")
$.cK=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fp(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.Z
$.Z=J.ax(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.Z
$.Z=J.ax(y,1)
return new Function(z+H.b(y)+"}")()},
cj:function(a,b,c,d,e,f){var z,y
z=J.aE(b)
y=!!J.q(c).$isi?J.aE(c):c
return H.fr(a,z,y,!!d,e,f)},
kq:function(a,b){var z=J.aa(b)
throw H.a(H.cM(a,z.bg(b,3,z.gi(b))))},
ab:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else z=!0
if(z)return a
H.kq(a,b)},
ck:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eo:function(a,b){var z,y
if(a==null)return!1
z=H.ck(J.q(a))
if(z==null)y=!1
else y=H.et(z,b)
return y},
jZ:function(a){var z
if(a instanceof H.j){z=H.ck(J.q(a))
if(z!=null)return H.co(z,null)
return"Closure"}return H.aK(a)},
ku:function(a){throw H.a(new P.fw(a))},
er:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
au:function(a){if(a==null)return
return a.$ti},
n5:function(a,b,c){return H.aT(a["$as"+H.b(c)],H.au(b))},
b9:function(a,b,c,d){var z=H.aT(a["$as"+H.b(c)],H.au(b))
return z==null?null:z[d]},
cl:function(a,b,c){var z=H.aT(a["$as"+H.b(b)],H.au(a))
return z==null?null:z[c]},
G:function(a,b){var z=H.au(a)
return z==null?null:z[b]},
co:function(a,b){var z=H.aw(a,b)
return z},
aw:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bG(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aw(z,b)
return H.jQ(a,b)}return"unknown-reified-type"},
jQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aw(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aw(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aw(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.k5(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aw(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bG:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c9("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aw(u,c)}return w?"":"<"+z.k(0)+">"},
k9:function(a){var z,y,x
if(a instanceof H.j){z=H.ck(J.q(a))
if(z!=null)return H.co(z,null)}y=J.q(a).constructor.builtin$cls
if(a==null)return y
x=H.bG(a.$ti,0,null)
return y+x},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ci:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.au(a)
y=J.q(a)
if(y[b]==null)return!1
return H.el(H.aT(y[d],z),c)},
bb:function(a,b,c,d){var z,y
if(a==null)return a
z=H.ci(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bG(c,0,null)
throw H.a(H.cM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
el:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.O(a[y],b[y]))return!1
return!0},
n3:function(a,b,c){return a.apply(b,H.aT(J.q(b)["$as"+H.b(c)],H.au(b)))},
O:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b1")return!0
if('func' in b)return H.et(a,b)
if('func' in a)return b.builtin$cls==="ly"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.co(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.el(H.aT(u,z),x)},
ek:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.O(z,v)||H.O(v,z)))return!1}return!0},
k_:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aE(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.O(v,u)||H.O(u,v)))return!1}return!0},
et:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.O(z,y)||H.O(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.ek(x,w,!1))return!1
if(!H.ek(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.O(o,n)||H.O(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.O(o,n)||H.O(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.O(o,n)||H.O(n,o)))return!1}}return H.k_(a.named,b.named)},
n4:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
km:function(a){var z,y,x,w,v,u
z=$.es.$1(a)
y=$.bE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bF[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ej.$2(a,z)
if(z!=null){y=$.bE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bF[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bH(x)
$.bE[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bF[z]=x
return x}if(v==="-"){u=H.bH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ev(a,x)
if(v==="*")throw H.a(P.dS(z))
if(init.leafTags[z]===true){u=H.bH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ev(a,x)},
ev:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cn(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bH:function(a){return J.cn(a,!1,null,!!a.$isp)},
kp:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bH(z)
else return J.cn(z,c,null,null)},
ki:function(){if(!0===$.cm)return
$.cm=!0
H.kj()},
kj:function(){var z,y,x,w,v,u,t,s
$.bE=Object.create(null)
$.bF=Object.create(null)
H.ke()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ew.$1(v)
if(u!=null){t=H.kp(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ke:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.as(C.E,H.as(C.J,H.as(C.u,H.as(C.u,H.as(C.I,H.as(C.F,H.as(C.G(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.es=new H.kf(v)
$.ej=new H.kg(u)
$.ew=new H.kh(t)},
as:function(a,b){return a(b)||b},
kt:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hC:{"^":"d;a,b,c,d,e,f,r,x",p:{
hD:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aE(z)
y=z[0]
x=z[1]
return new H.hC(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
i7:{"^":"d;a,b,c,d,e,f",
U:function(a){var z,y,x
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
a0:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dL:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ho:{"^":"I;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dl:function(a,b){return new H.ho(a,b==null?null:b.method)}}},
fZ:{"^":"I;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
p:{
c1:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fZ(a,y,z?null:b.receiver)}}},
i9:{"^":"I;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kv:{"^":"j:0;a",
$1:function(a){if(!!J.q(a).$isI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e9:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaL:1},
j:{"^":"d;",
k:function(a){return"Closure '"+H.aK(this).trim()+"'"},
gcz:function(){return this},
gcz:function(){return this}},
dA:{"^":"j;"},
hS:{"^":"dA;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bR:{"^":"dA;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.aJ(this.a)
else y=typeof z!=="object"?J.a3(z):H.aJ(z)
return(y^H.aJ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aK(z)+"'")},
p:{
bS:function(a){return a.a},
cL:function(a){return a.c},
bg:function(a){var z,y,x,w,v
z=new H.bR("self","target","receiver","name")
y=J.aE(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fm:{"^":"I;a",
k:function(a){return this.a},
p:{
cM:function(a,b){return new H.fm("CastError: "+H.b(P.bW(a))+": type '"+H.jZ(a)+"' is not a subtype of type '"+b+"'")}}},
hI:{"^":"I;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hJ:function(a){return new H.hI(a)}}},
dQ:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gC:function(a){return J.a3(this.a)},
G:function(a,b){if(b==null)return!1
return b instanceof H.dQ&&J.L(this.a,b.a)}},
dc:{"^":"c4;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gP:function(a){return new H.h4(this,[H.G(this,0)])},
aq:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bu(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bu(y,b)}else return this.ea(b)},
ea:function(a){var z=this.d
if(z==null)return!1
return this.aU(this.aJ(z,J.a3(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.an(z,b)
x=y==null?null:y.gah()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.an(w,b)
x=y==null?null:y.gah()
return x}else return this.eb(b)},
eb:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aJ(z,J.a3(a)&0x3ffffff)
x=this.aU(y,a)
if(x<0)return
return y[x].gah()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aM()
this.b=z}this.bo(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aM()
this.c=y}this.bo(y,b,c)}else{x=this.d
if(x==null){x=this.aM()
this.d=x}w=J.a3(b)&0x3ffffff
v=this.aJ(x,w)
if(v==null)this.aQ(x,w,[this.aD(b,c)])
else{u=this.aU(v,b)
if(u>=0)v[u].sah(c)
else v.push(this.aD(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.M(this))
z=z.c}},
bo:function(a,b,c){var z=this.an(a,b)
if(z==null)this.aQ(a,b,this.aD(b,c))
else z.sah(c)},
bp:function(){this.r=this.r+1&67108863},
aD:function(a,b){var z,y
z=new H.h3(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bp()
return z},
aU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].ge9(),b))return y
return-1},
k:function(a){return P.dh(this)},
an:function(a,b){return a[b]},
aJ:function(a,b){return a[b]},
aQ:function(a,b,c){a[b]=c},
dl:function(a,b){delete a[b]},
bu:function(a,b){return this.an(a,b)!=null},
aM:function(){var z=Object.create(null)
this.aQ(z,"<non-identifier-key>",z)
this.dl(z,"<non-identifier-key>")
return z}},
h3:{"^":"d;e9:a<,ah:b@,c,d"},
h4:{"^":"bU;a,$ti",
gi:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.af(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
B:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.M(z))
y=y.c}}},
af:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kf:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
kg:{"^":"j:10;a",
$2:function(a,b){return this.a(a,b)}},
kh:{"^":"j:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
k5:function(a){return J.aE(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bB:function(a){var z,y,x
if(!!J.q(a).$isn)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a9(b,a))},
hj:{"^":"h;","%":"DataView;ArrayBufferView;c5|e3|e4|di|e5|e6|ag"},
c5:{"^":"hj;",
gi:function(a){return a.length},
$isn:1,
$asn:I.at,
$isp:1,
$asp:I.at},
di:{"^":"e4;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbj:function(){return[P.am]},
$ask:function(){return[P.am]},
$isi:1,
$asi:function(){return[P.am]},
"%":"Float64Array"},
ag:{"^":"e6;",
j:function(a,b,c){H.a2(b,a,a.length)
a[b]=c},
$asbj:function(){return[P.H]},
$ask:function(){return[P.H]},
$isi:1,
$asi:function(){return[P.H]}},
hi:{"^":"di;",$isbY:1,"%":"Float32Array"},
lZ:{"^":"ag;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m_:{"^":"ag;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
$isfS:1,
"%":"Int32Array"},
m0:{"^":"ag;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m1:{"^":"ag;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m2:{"^":"ag;",
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m3:{"^":"ag;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m4:{"^":"ag;",
gi:function(a){return a.length},
h:function(a,b){H.a2(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e3:{"^":"c5+k;"},
e4:{"^":"e3+bj;"},
e5:{"^":"c5+k;"},
e6:{"^":"e5+bj;"}}],["","",,P,{"^":"",
ih:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k0()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a8(new P.ij(z),1)).observe(y,{childList:true})
return new P.ii(z,y,x)}else if(self.setImmediate!=null)return P.k1()
return P.k2()},
mQ:[function(a){self.scheduleImmediate(H.a8(new P.ik(a),0))},"$1","k0",4,0,6],
mR:[function(a){self.setImmediate(H.a8(new P.il(a),0))},"$1","k1",4,0,6],
mS:[function(a){P.ju(0,a)},"$1","k2",4,0,6],
jU:function(a,b){if(H.eo(a,{func:1,args:[P.b1,P.b1]})){b.toString
return a}else{b.toString
return a}},
jT:function(){var z,y
for(;z=$.ar,z!=null;){$.aP=null
y=z.b
$.ar=y
if(y==null)$.aO=null
z.a.$0()}},
n2:[function(){$.cf=!0
try{P.jT()}finally{$.aP=null
$.cf=!1
if($.ar!=null)$.$get$ca().$1(P.em())}},"$0","em",0,0,3],
eh:function(a){var z=new P.dU(a,null)
if($.ar==null){$.aO=z
$.ar=z
if(!$.cf)$.$get$ca().$1(P.em())}else{$.aO.b=z
$.aO=z}},
jY:function(a){var z,y,x
z=$.ar
if(z==null){P.eh(a)
$.aP=$.aO
return}y=new P.dU(a,null)
x=$.aP
if(x==null){y.b=z
$.aP=y
$.ar=y}else{y.b=x.b
x.b=y
$.aP=y
if(y.b==null)$.aO=y}},
kr:function(a){var z=$.x
if(C.f===z){P.bD(null,null,C.f,a)
return}z.toString
P.bD(null,null,z,z.bL(a))},
jX:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.V(u)
y=H.an(u)
$.x.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.ay(x)
w=t
v=x.ga8()
c.$2(w,v)}}},
jM:function(a,b,c,d){var z=a.dR(0)
if(!!J.q(z).$isaZ&&z!==$.$get$d6())z.eq(new P.jP(b,c,d))
else b.ad(c,d)},
jN:function(a,b){return new P.jO(a,b)},
ie:function(){return $.x},
bC:function(a,b,c,d,e){var z={}
z.a=d
P.jY(new P.jV(z,e))},
ef:function(a,b,c,d){var z,y
y=$.x
if(y===c)return d.$0()
$.x=c
z=y
try{y=d.$0()
return y}finally{$.x=z}},
eg:function(a,b,c,d,e){var z,y
y=$.x
if(y===c)return d.$1(e)
$.x=c
z=y
try{y=d.$1(e)
return y}finally{$.x=z}},
jW:function(a,b,c,d,e,f){var z,y
y=$.x
if(y===c)return d.$2(e,f)
$.x=c
z=y
try{y=d.$2(e,f)
return y}finally{$.x=z}},
bD:function(a,b,c,d){var z=C.f!==c
if(z)d=!(!z||!1)?c.bL(d):c.dO(d)
P.eh(d)},
ij:{"^":"j:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ii:{"^":"j:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ik:{"^":"j:1;a",
$0:function(){this.a.$0()}},
il:{"^":"j:1;a",
$0:function(){this.a.$0()}},
jt:{"^":"d;a,b,c",
dh:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a8(new P.jv(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
p:{
ju:function(a,b){var z=new P.jt(!0,null,0)
z.dh(a,b)
return z}}},
jv:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kJ:{"^":"d;$ti"},
ip:{"^":"d;$ti"},
jo:{"^":"ip;a,$ti",
dV:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.c8("Future already completed"))
z.am(b)}},
dX:{"^":"d;aO:a<,b,c,d,e,$ti",
gdJ:function(){return this.b.b},
gc6:function(){return(this.c&1)!==0},
ge8:function(){return(this.c&2)!==0},
gc5:function(){return this.c===8},
e6:function(a){return this.b.b.b0(this.d,a)},
ed:function(a){if(this.c!==6)return!0
return this.b.b.b0(this.d,J.ay(a))},
e5:function(a){var z,y,x
z=this.e
y=J.f(a)
x=this.b.b
if(H.eo(z,{func:1,args:[P.d,P.aL]}))return x.eg(z,y.gR(a),a.ga8())
else return x.b0(z,y.gR(a))},
e7:function(){return this.b.b.cd(this.d)}},
ak:{"^":"d;bB:a<,b,dz:c<,$ti",
dd:function(a,b){this.a=4
this.c=a},
gds:function(){return this.a===2},
gaK:function(){return this.a>=4},
cf:function(a,b){var z,y,x
z=$.x
if(z!==C.f){z.toString
if(b!=null)b=P.jU(b,z)}y=new P.ak(0,z,null,[null])
x=b==null?1:3
this.aE(new P.dX(null,y,x,a,b,[H.G(this,0),null]))
return y},
ce:function(a){return this.cf(a,null)},
eq:function(a){var z,y
z=$.x
y=new P.ak(0,z,null,this.$ti)
if(z!==C.f)z.toString
z=H.G(this,0)
this.aE(new P.dX(null,y,8,a,null,[z,z]))
return y},
aE:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaK()){y.aE(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bD(null,null,z,new P.iE(this,a))}},
by:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaO()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaK()){v.by(a)
return}this.a=v.a
this.c=v.c}z.a=this.aP(a)
y=this.b
y.toString
P.bD(null,null,y,new P.iJ(z,this))}},
ao:function(){var z=this.c
this.c=null
return this.aP(z)},
aP:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaO()
z.a=y}return y},
am:function(a){var z,y,x
z=this.$ti
y=H.ci(a,"$isaZ",z,"$asaZ")
if(y){z=H.ci(a,"$isak",z,null)
if(z)P.dY(a,this)
else P.iF(a,this)}else{x=this.ao()
this.a=4
this.c=a
P.aN(this,x)}},
ad:[function(a,b){var z=this.ao()
this.a=8
this.c=new P.bf(a,b)
P.aN(this,z)},function(a){return this.ad(a,null)},"eu","$2","$1","gbt",4,2,13],
$isaZ:1,
p:{
iF:function(a,b){var z,y,x
b.a=1
try{a.cf(new P.iG(b),new P.iH(b))}catch(x){z=H.V(x)
y=H.an(x)
P.kr(new P.iI(b,z,y))}},
dY:function(a,b){var z
for(;a.gds();)a=a.c
if(a.gaK()){z=b.ao()
b.a=a.a
b.c=a.c
P.aN(b,z)}else{z=b.c
b.a=2
b.c=a
a.by(z)}},
aN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.ay(v)
t=v.ga8()
y.toString
P.bC(null,null,y,u,t)}return}for(;b.gaO()!=null;b=s){s=b.a
b.a=null
P.aN(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc6()||b.gc5()){q=b.gdJ()
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
t=v.ga8()
y.toString
P.bC(null,null,y,u,t)
return}p=$.x
if(p==null?q!=null:p!==q)$.x=q
else p=null
if(b.gc5())new P.iM(z,x,b,w).$0()
else if(y){if(b.gc6())new P.iL(x,b,r).$0()}else if(b.ge8())new P.iK(z,x,b).$0()
if(p!=null)$.x=p
y=x.b
if(!!J.q(y).$isaZ){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aP(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dY(y,o)
return}}o=b.b
b=o.ao()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iE:{"^":"j:1;a,b",
$0:function(){P.aN(this.a,this.b)}},
iJ:{"^":"j:1;a,b",
$0:function(){P.aN(this.b,this.a.a)}},
iG:{"^":"j:0;a",
$1:function(a){var z=this.a
z.a=0
z.am(a)}},
iH:{"^":"j:14;a",
$2:function(a,b){this.a.ad(a,b)},
$1:function(a){return this.$2(a,null)}},
iI:{"^":"j:1;a,b,c",
$0:function(){this.a.ad(this.b,this.c)}},
iM:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e7()}catch(w){y=H.V(w)
x=H.an(w)
if(this.d){v=J.ay(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bf(y,x)
u.a=!0
return}if(!!J.q(z).$isaZ){if(z instanceof P.ak&&z.gbB()>=4){if(z.gbB()===8){v=this.b
v.b=z.gdz()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.ce(new P.iN(t))
v.a=!1}}},
iN:{"^":"j:0;a",
$1:function(a){return this.a}},
iL:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e6(this.c)}catch(x){z=H.V(x)
y=H.an(x)
w=this.a
w.b=new P.bf(z,y)
w.a=!0}}},
iK:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ed(z)===!0&&w.e!=null){v=this.b
v.b=w.e5(z)
v.a=!1}}catch(u){y=H.V(u)
x=H.an(u)
w=this.a
v=J.ay(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bf(y,x)
s.a=!0}}},
dU:{"^":"d;a,b"},
dx:{"^":"d;$ti",
B:function(a,b){var z,y
z={}
y=new P.ak(0,$.x,null,[null])
z.a=null
z.a=this.c9(new P.hZ(z,this,b,y),!0,new P.i_(y),y.gbt())
return y},
gi:function(a){var z,y
z={}
y=new P.ak(0,$.x,null,[P.H])
z.a=0
this.c9(new P.i0(z),!0,new P.i1(z,y),y.gbt())
return y}},
hZ:{"^":"j;a,b,c,d",
$1:function(a){P.jX(new P.hX(this.c,a),new P.hY(),P.jN(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cl(this.b,"dx",0)]}}},
hX:{"^":"j:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hY:{"^":"j:0;",
$1:function(a){}},
i_:{"^":"j:1;a",
$0:function(){this.a.am(null)}},
i0:{"^":"j:0;a",
$1:function(a){++this.a.a}},
i1:{"^":"j:1;a,b",
$0:function(){this.b.am(this.a.a)}},
hW:{"^":"d;$ti"},
jP:{"^":"j:1;a,b,c",
$0:function(){return this.a.ad(this.b,this.c)}},
jO:{"^":"j:15;a,b",
$2:function(a,b){P.jM(this.a,this.b,a,b)}},
bf:{"^":"d;R:a>,a8:b<",
k:function(a){return H.b(this.a)},
$isI:1},
jB:{"^":"d;"},
jV:{"^":"j:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dm()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.az(y)
throw x}},
j7:{"^":"jB;",
eh:function(a){var z,y,x
try{if(C.f===$.x){a.$0()
return}P.ef(null,null,this,a)}catch(x){z=H.V(x)
y=H.an(x)
P.bC(null,null,this,z,y)}},
ei:function(a,b){var z,y,x
try{if(C.f===$.x){a.$1(b)
return}P.eg(null,null,this,a,b)}catch(x){z=H.V(x)
y=H.an(x)
P.bC(null,null,this,z,y)}},
dO:function(a){return new P.j9(this,a)},
bL:function(a){return new P.j8(this,a)},
dP:function(a){return new P.ja(this,a)},
h:function(a,b){return},
cd:function(a){if($.x===C.f)return a.$0()
return P.ef(null,null,this,a)},
b0:function(a,b){if($.x===C.f)return a.$1(b)
return P.eg(null,null,this,a,b)},
eg:function(a,b,c){if($.x===C.f)return a.$2(b,c)
return P.jW(null,null,this,a,b,c)}},
j9:{"^":"j:1;a,b",
$0:function(){return this.a.cd(this.b)}},
j8:{"^":"j:1;a,b",
$0:function(){return this.a.eh(this.b)}},
ja:{"^":"j:0;a,b",
$1:function(a){return this.a.ei(this.b,a)}}}],["","",,P,{"^":"",
J:function(){return new H.dc(0,null,null,null,null,null,0,[null,null])},
de:function(a){return H.k6(a,new H.dc(0,null,null,null,null,null,0,[null,null]))},
W:function(a,b,c,d){return new P.iV(0,null,null,null,null,null,0,[d])},
fT:function(a,b,c){var z,y
if(P.cg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aQ()
y.push(a)
try{P.jS(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.dy(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bZ:function(a,b,c){var z,y,x
if(P.cg(a))return b+"..."+c
z=new P.c9(b)
y=$.$get$aQ()
y.push(a)
try{x=z
x.a=P.dy(x.ga9(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.ga9()+c
y=z.ga9()
return y.charCodeAt(0)==0?y:y},
cg:function(a){var z,y
for(z=0;y=$.$get$aQ(),z<y.length;++z)if(a===y[z])return!0
return!1},
jS:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.b(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.u()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.u();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
c2:function(a,b){var z,y
z=P.W(null,null,null,b)
for(y=J.aW(a);y.u();)z.M(0,y.gD(y))
return z},
dh:function(a){var z,y,x
z={}
if(P.cg(a))return"{...}"
y=new P.c9("")
try{$.$get$aQ().push(a)
x=y
x.a=x.ga9()+"{"
z.a=!0
J.cv(a,new P.h5(z,y))
z=y
z.a=z.ga9()+"}"}finally{z=$.$get$aQ()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.ga9()
return z.charCodeAt(0)==0?z:z},
iV:{"^":"iP;a,b,c,d,e,f,r,$ti",
gN:function(a){var z=new P.cd(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dk(b)},
dk:function(a){var z=this.d
if(z==null)return!1
return this.aI(z[this.aF(a)],a)>=0},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.M(this))
z=z.b}},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ce()
this.b=z}return this.bq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ce()
this.c=y}return this.bq(y,b)}else return this.di(0,b)},
di:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ce()
this.d=z}y=this.aF(b)
x=z[y]
if(x==null)z[y]=[this.aN(b)]
else{if(this.aI(x,b)>=0)return!1
x.push(this.aN(b))}return!0},
cc:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bz(this.c,b)
else return this.du(0,b)},
du:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aF(b)]
x=this.aI(y,b)
if(x<0)return!1
this.bD(y.splice(x,1)[0])
return!0},
ag:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aL()}},
bq:function(a,b){if(a[b]!=null)return!1
a[b]=this.aN(b)
return!0},
bz:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bD(z)
delete a[b]
return!0},
aL:function(){this.r=this.r+1&67108863},
aN:function(a){var z,y
z=new P.iW(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aL()
return z},
bD:function(a){var z,y
z=a.gdt()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aL()},
aF:function(a){return J.a3(a)&0x3ffffff},
aI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.L(a[y].gdm(),b))return y
return-1},
p:{
ce:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
iW:{"^":"d;dm:a<,b,dt:c<"},
cd:{"^":"d;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iP:{"^":"hK;$ti"},
lL:{"^":"d;$ti"},
df:{"^":"e2;$ti",$isi:1},
k:{"^":"d;$ti",
gN:function(a){return new H.dg(a,this.gi(a),0,null,[H.b9(this,a,"k",0)])},
v:function(a,b){return this.h(a,b)},
B:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.M(a))}},
e4:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.u(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.M(a))}return y},
bd:function(a,b){return H.dz(a,b,null,H.b9(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.A([],[H.b9(this,a,"k",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.ak(z,0,this.gi(a),a)
C.c.ak(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bZ(a,"[","]")}},
c4:{"^":"Q;$ti"},
h5:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
Q:{"^":"d;$ti",
B:function(a,b){var z,y
for(z=J.aW(this.gP(a));z.u();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a4(this.gP(a))},
k:function(a){return P.dh(a)}},
hL:{"^":"d;$ti",
O:function(a,b){var z
for(z=J.aW(b);z.u();)this.M(0,z.gD(z))},
k:function(a){return P.bZ(this,"{","}")},
B:function(a,b){var z
for(z=new P.cd(this,this.r,null,null,[null]),z.c=this.e;z.u();)b.$1(z.d)}},
hK:{"^":"hL;$ti"},
e2:{"^":"d+k;$ti"}}],["","",,P,{"^":"",
fK:function(a){var z=J.q(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.aK(a)+"'"},
bW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.az(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fK(a)},
d3:function(a){return new P.iB(a)},
ao:function(a){H.bI(H.b(a))},
ch:{"^":"d;"},
"+bool":0,
cV:{"^":"d;dI:a<,b",
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.cV))return!1
return this.a===b.a&&this.b===b.b},
X:function(a,b){return C.b.X(this.a,b.gdI())},
gC:function(a){var z=this.a
return(z^C.b.bA(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fy(H.hA(this))
y=P.aX(H.hy(this))
x=P.aX(H.hu(this))
w=P.aX(H.hv(this))
v=P.aX(H.hx(this))
u=P.aX(H.hz(this))
t=P.fz(H.hw(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fy:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aX:function(a){if(a>=10)return""+a
return"0"+a}}},
am:{"^":"aS;"},
"+double":0,
aY:{"^":"d;ae:a<",
l:function(a,b){return new P.aY(C.b.l(this.a,b.gae()))},
H:function(a,b){return new P.aY(this.a-b.gae())},
a5:function(a,b){return C.b.a5(this.a,b.gae())},
aj:function(a,b){return C.b.aj(this.a,b.gae())},
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.aY))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
X:function(a,b){return C.b.X(this.a,b.gae())},
k:function(a){var z,y,x,w,v
z=new P.fH()
y=this.a
if(y<0)return"-"+new P.aY(0-y).k(0)
x=z.$1(C.b.a3(y,6e7)%60)
w=z.$1(C.b.a3(y,1e6)%60)
v=new P.fG().$1(y%1e6)
return""+C.b.a3(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fF:function(a,b,c,d,e,f){return new P.aY(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fG:{"^":"j:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fH:{"^":"j:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
I:{"^":"d;",
ga8:function(){return H.an(this.$thrownJsError)}},
dm:{"^":"I;",
k:function(a){return"Throw of null."}},
ac:{"^":"I;a,b,c,d",
gaH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaG:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaH()+y+x
if(!this.a)return w
v=this.gaG()
u=P.bW(this.b)
return w+v+": "+H.b(u)},
p:{
cI:function(a,b,c){return new P.ac(!0,a,b,c)},
fg:function(a){return new P.ac(!1,null,a,"Must not be null")}}},
dp:{"^":"ac;e,f,a,b,c,d",
gaH:function(){return"RangeError"},
gaG:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
br:function(a,b,c){return new P.dp(null,null,!0,a,b,"Value not in range")},
aq:function(a,b,c,d,e){return new P.dp(b,c,!0,a,d,"Invalid value")},
hB:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
z=a>c}else z=!0
if(z)throw H.a(P.aq(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
z=b>c}else z=!0
if(z)throw H.a(P.aq(b,a,c,"end",f))
return b}return c}}},
fR:{"^":"ac;e,i:f>,a,b,c,d",
gaH:function(){return"RangeError"},
gaG:function(){if(J.aU(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
y:function(a,b,c,d,e){var z=e!=null?e:J.a4(b)
return new P.fR(b,z,!0,a,c,"Index out of range")}}},
ia:{"^":"I;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
r:function(a){return new P.ia(a)}}},
i8:{"^":"I;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dS:function(a){return new P.i8(a)}}},
bu:{"^":"I;a",
k:function(a){return"Bad state: "+this.a},
p:{
c8:function(a){return new P.bu(a)}}},
fs:{"^":"I;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bW(z))+"."},
p:{
M:function(a){return new P.fs(a)}}},
dv:{"^":"d;",
k:function(a){return"Stack Overflow"},
ga8:function(){return},
$isI:1},
fw:{"^":"I;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
l6:{"^":"d;"},
iB:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
H:{"^":"aS;"},
"+int":0,
bn:{"^":"d;$ti",
b1:["cL",function(a,b){return new H.dT(this,b,[H.cl(this,"bn",0)])}],
B:function(a,b){var z
for(z=this.gN(this);z.u();)b.$1(z.gD(z))},
gi:function(a){var z,y
z=this.gN(this)
for(y=0;z.u();)++y
return y},
ga7:function(a){var z,y
z=this.gN(this)
if(!z.u())throw H.a(H.d9())
y=z.gD(z)
if(z.u())throw H.a(H.fV())
return y},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.fg("index"))
if(b<0)H.U(P.aq(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.u();){x=z.gD(z)
if(b===y)return x;++y}throw H.a(P.y(b,this,"index",null,y))},
k:function(a){return P.fT(this,"(",")")}},
fW:{"^":"d;$ti"},
i:{"^":"d;$ti"},
"+List":0,
c3:{"^":"d;$ti"},
b1:{"^":"d;",
gC:function(a){return P.d.prototype.gC.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aS:{"^":"d;"},
"+num":0,
d:{"^":";",
G:function(a,b){return this===b},
gC:function(a){return H.aJ(this)},
k:function(a){return"Instance of '"+H.aK(this)+"'"},
toString:function(){return this.k(this)}},
aL:{"^":"d;"},
m:{"^":"d;"},
"+String":0,
c9:{"^":"d;a9:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dy:function(a,b,c){var z=J.aW(b)
if(!z.u())return a
if(c.length===0){do a+=H.b(z.gD(z))
while(z.u())}else{a+=H.b(z.gD(z))
for(;z.u();)a=a+c+H.b(z.gD(z))}return a}}}}],["","",,W,{"^":"",
fI:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).Y(z,a,b,c)
y.toString
z=new H.dT(new W.S(y),new W.fJ(),[W.t])
return z.ga7(z)},
d2:function(a){return"wheel"},
aB:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eX(a)
if(typeof y==="string")z=a.tagName}catch(x){H.V(x)}return z},
iy:function(a,b){return document.createElement(a)},
al:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ee:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.is(a)
if(!!J.q(z).$isE)return z
return}else return a},
ei:function(a){var z=$.x
if(z===C.f)return a
return z.dP(a)},
v:{"^":"ap;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kw:{"^":"c7;m:x=,n:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
kx:{"^":"h;i:length=","%":"AccessibleNodeList"},
ky:{"^":"v;ar:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kz:{"^":"v;ar:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kE:{"^":"v;ar:href}","%":"HTMLBaseElement"},
fk:{"^":"h;","%":"Response;Body"},
bQ:{"^":"v;",$isbQ:1,"%":"HTMLBodyElement"},
kF:{"^":"v;L:name=","%":"HTMLButtonElement"},
kG:{"^":"v;I:height},J:width}",
cA:function(a,b,c){var z=a.getContext(b,P.k3(c,null))
return z},
"%":"HTMLCanvasElement"},
kH:{"^":"h;",
ax:function(a){return P.T(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kI:{"^":"t;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kK:{"^":"a_;a1:style=","%":"CSSFontFaceRule"},
kL:{"^":"a_;a1:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kM:{"^":"a_;a1:style=","%":"CSSPageRule"},
kN:{"^":"bh;i:length=","%":"CSSPerspective"},
kO:{"^":"bT;m:x=,n:y=","%":"CSSPositionValue"},
kP:{"^":"bh;m:x=,n:y=,F:z=","%":"CSSRotation"},
a_:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kQ:{"^":"bh;m:x=,n:y=,F:z=","%":"CSSScale"},
ft:{"^":"iq;i:length=",
br:function(a,b){var z,y
z=$.$get$cT()
y=z[b]
if(typeof y==="string")return y
y=this.dF(a,b)
z[b]=y
return y},
dF:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fA()+b
if(z in a)return z
return b},
dC:function(a,b,c,d){a.setProperty(b,c,d)},
sI:function(a,b){a.height=b},
sJ:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fu:{"^":"d;",
se3:function(a,b){this.dC(a,this.br(a,"float"),b,"")}},
kR:{"^":"a_;a1:style=","%":"CSSStyleRule"},
bT:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bh:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kS:{"^":"bT;i:length=","%":"CSSTransformValue"},
kT:{"^":"bh;m:x=,n:y=,F:z=","%":"CSSTranslation"},
kU:{"^":"bT;i:length=","%":"CSSUnparsedValue"},
kV:{"^":"a_;a1:style=","%":"CSSViewportRule"},
kW:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
kX:{"^":"h;m:x=,n:y=,F:z=","%":"DeviceAcceleration"},
fB:{"^":"v;","%":"HTMLDivElement"},
kY:{"^":"t;",
gaW:function(a){return new W.b6(a,"mousedown",!1,[W.N])},
gaX:function(a){return new W.b6(a,"mousemove",!1,[W.N])},
gaY:function(a){return new W.b6(a,"mouseup",!1,[W.N])},
gaZ:function(a){return new W.b6(a,W.d2(a),!1,[W.aM])},
"%":"Document|HTMLDocument|XMLDocument"},
kZ:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
l_:{"^":"fC;",
gW:function(a){return a.a},
gS:function(a){return a.b},
ga_:function(a){return a.c},
"%":"DOMMatrix"},
fC:{"^":"h;",
gW:function(a){return a.a},
gS:function(a){return a.b},
ga_:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
l0:{"^":"fD;",
gaw:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
fD:{"^":"h;",
gaw:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
l1:{"^":"iu;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.a6]},
$isp:1,
$asp:function(){return[P.a6]},
$ask:function(){return[P.a6]},
$isi:1,
$asi:function(){return[P.a6]},
$asl:function(){return[P.a6]},
"%":"ClientRectList|DOMRectList"},
fE:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gJ(a))+" x "+H.b(this.gI(a))},
G:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa6)return!1
return a.left===z.gc7(b)&&a.top===z.gcg(b)&&this.gJ(a)===z.gJ(b)&&this.gI(a)===z.gI(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gJ(a)
w=this.gI(a)
return W.e1(W.al(W.al(W.al(W.al(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gci:function(a){return new P.ah(a.left,a.top,[null])},
gI:function(a){return a.height},
gc7:function(a){return a.left},
gcg:function(a){return a.top},
gJ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isa6:1,
$asa6:I.at,
"%":";DOMRectReadOnly"},
l2:{"^":"iw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[P.m]},
$isp:1,
$asp:function(){return[P.m]},
$ask:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$asl:function(){return[P.m]},
"%":"DOMStringList"},
l3:{"^":"h;i:length=","%":"DOMTokenList"},
ap:{"^":"t;a1:style=,bx:namespaceURI=,ej:tagName=",
gdM:function(a){return new W.ix(a)},
k:function(a){return a.localName},
Y:["ay",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d1
if(z==null){z=H.A([],[W.dj])
y=new W.dk(z)
z.push(W.dZ(null))
z.push(W.ea())
$.d1=y
d=y}else d=z
z=$.d0
if(z==null){z=new W.ed(d)
$.d0=z
c=z}else{z.a=d
c=z}}if($.a5==null){z=document
y=z.implementation.createHTMLDocument("")
$.a5=y
$.bV=y.createRange()
y=$.a5
y.toString
x=y.createElement("base")
J.f5(x,z.baseURI)
$.a5.head.appendChild(x)}z=$.a5
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a5
if(!!this.$isbQ)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a5.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.A(C.M,a.tagName)){$.bV.selectNodeContents(w)
v=$.bV.createContextualFragment(b)}else{w.innerHTML=b
v=$.a5.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a5.body
if(w==null?z!=null:w!==z)J.cB(w)
c.ba(v)
document.adoptNode(v)
return v},function(a,b,c){return this.Y(a,b,c,null)},"dY",null,null,"gev",5,5,null],
cD:function(a,b,c,d){a.textContent=null
a.appendChild(this.Y(a,b,c,d))},
cC:function(a,b){return this.cD(a,b,null,null)},
b2:function(a){return a.getBoundingClientRect()},
gaW:function(a){return new W.ai(a,"mousedown",!1,[W.N])},
gaX:function(a){return new W.ai(a,"mousemove",!1,[W.N])},
gaY:function(a){return new W.ai(a,"mouseup",!1,[W.N])},
gaZ:function(a){return new W.ai(a,W.d2(a),!1,[W.aM])},
$isap:1,
"%":";Element"},
fJ:{"^":"j:0;",
$1:function(a){return!!J.q(a).$isap}},
l4:{"^":"v;I:height},L:name=,J:width}","%":"HTMLEmbedElement"},
l5:{"^":"ad;R:error=","%":"ErrorEvent"},
ad:{"^":"h;",
av:function(a){return a.preventDefault()},
$isad:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
E:{"^":"h;",
bH:["cJ",function(a,b,c,d){if(c!=null)this.dj(a,b,c,!1)}],
dj:function(a,b,c,d){return a.addEventListener(b,H.a8(c,1),!1)},
dv:function(a,b,c,d){return a.removeEventListener(b,H.a8(c,1),!1)},
$isE:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e7|e8|eb|ec"},
lp:{"^":"v;L:name=","%":"HTMLFieldSetElement"},
lq:{"^":"iD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bi]},
$isp:1,
$asp:function(){return[W.bi]},
$ask:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$asl:function(){return[W.bi]},
"%":"FileList"},
lr:{"^":"E;R:error=","%":"FileReader"},
ls:{"^":"E;R:error=,i:length=","%":"FileWriter"},
lu:{"^":"h;a1:style=","%":"FontFace"},
lv:{"^":"E;",
ew:function(a,b,c){return a.forEach(H.a8(b,3),c)},
B:function(a,b){b=H.a8(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lx:{"^":"v;i:length=,L:name=","%":"HTMLFormElement"},
lz:{"^":"c7;m:x=,n:y=,F:z=","%":"Gyroscope"},
lA:{"^":"h;i:length=","%":"History"},
lB:{"^":"iR;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lC:{"^":"v;I:height},L:name=,J:width}","%":"HTMLIFrameElement"},
lD:{"^":"v;I:height},J:width}","%":"HTMLImageElement"},
lF:{"^":"v;I:height},L:name=,J:width}","%":"HTMLInputElement"},
bo:{"^":"dR;",
ger:function(a){return a.which},
$isbo:1,
"%":"KeyboardEvent"},
lK:{"^":"v;ar:href}","%":"HTMLLinkElement"},
lM:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
lN:{"^":"c7;m:x=,n:y=,F:z=","%":"Magnetometer"},
lO:{"^":"v;L:name=","%":"HTMLMapElement"},
h8:{"^":"v;R:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lR:{"^":"h;i:length=","%":"MediaList"},
lS:{"^":"E;",
T:function(a){return a.clone()},
"%":"MediaStream"},
lT:{"^":"E;aT:enabled=",
T:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
lU:{"^":"E;",
bH:function(a,b,c,d){if(J.L(b,"message"))a.start()
this.cJ(a,b,c,!1)},
"%":"MessagePort"},
lV:{"^":"v;L:name=","%":"HTMLMetaElement"},
lW:{"^":"iX;",
h:function(a,b){return P.T(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new W.ha(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.m,null]},
"%":"MIDIInputMap"},
ha:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
lX:{"^":"iY;",
h:function(a,b){return P.T(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new W.hb(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hb:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
lY:{"^":"j_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bq]},
$isp:1,
$asp:function(){return[W.bq]},
$ask:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$asl:function(){return[W.bq]},
"%":"MimeTypeArray"},
N:{"^":"dR;bR:button=",
gcb:function(a){var z,y,x
if(!!a.offsetX)return new P.ah(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.q(W.ee(z)).$isap)throw H.a(P.r("offsetX is only supported on elements"))
y=W.ee(z)
z=[null]
x=new P.ah(a.clientX,a.clientY,z).H(0,J.eY(J.f_(y)))
return new P.ah(J.cC(x.a),J.cC(x.b),z)}},
$isN:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
S:{"^":"df;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.c8("No elements"))
if(y>1)throw H.a(P.c8("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=J.q(b)
if(!!z.$isS){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gN(b),y=this.a;z.u();)y.appendChild(z.gD(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.c(y,b)
z.replaceChild(c,y[b])},
gN:function(a){var z=this.a.childNodes
return new W.d4(z,z.length,-1,null,[H.b9(C.P,z,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asdf:function(){return[W.t]},
$ask:function(){return[W.t]},
$asi:function(){return[W.t]},
$ase2:function(){return[W.t]}},
t:{"^":"E;au:parentNode=,b_:previousSibling=",
gca:function(a){return new W.S(a)},
ef:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cK(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
m5:{"^":"h;",
ee:[function(a){return a.previousNode()},"$0","gb_",1,0,4],
"%":"NodeIterator"},
hk:{"^":"j1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
m8:{"^":"v;I:height},L:name=,J:width}","%":"HTMLObjectElement"},
ma:{"^":"v;L:name=","%":"HTMLOutputElement"},
mb:{"^":"v;L:name=","%":"HTMLParamElement"},
b2:{"^":"h;i:length=","%":"Plugin"},
md:{"^":"j5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b2]},
$isp:1,
$asp:function(){return[W.b2]},
$ask:function(){return[W.b2]},
$isi:1,
$asi:function(){return[W.b2]},
$asl:function(){return[W.b2]},
"%":"PluginArray"},
mg:{"^":"h;",
b2:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mm:{"^":"jb;",
h:function(a,b){return P.T(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new W.hH(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hH:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
mn:{"^":"v;i:length=,L:name=","%":"HTMLSelectElement"},
c7:{"^":"E;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mo:{"^":"ad;R:error=","%":"SensorErrorEvent"},
mp:{"^":"v;L:name=","%":"HTMLSlotElement"},
mq:{"^":"e8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bs]},
$isp:1,
$asp:function(){return[W.bs]},
$ask:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$asl:function(){return[W.bs]},
"%":"SourceBufferList"},
mr:{"^":"jh;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bt]},
$isp:1,
$asp:function(){return[W.bt]},
$ask:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$asl:function(){return[W.bt]},
"%":"SpeechGrammarList"},
ms:{"^":"ad;R:error=","%":"SpeechRecognitionError"},
b4:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
mu:{"^":"jk;",
h:function(a,b){return a.getItem(b)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new W.hV(z))
return z},
gi:function(a){return a.length},
$asQ:function(){return[P.m,P.m]},
"%":"Storage"},
hV:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
i3:{"^":"v;",
Y:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ay(a,b,c,d)
z=W.fI("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.S(y).O(0,J.eV(z))
return y},
"%":"HTMLTableElement"},
mx:{"^":"v;",
Y:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ay(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.Y(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.ga7(z)
x.toString
z=new W.S(x)
w=z.ga7(z)
y.toString
w.toString
new W.S(y).O(0,new W.S(w))
return y},
"%":"HTMLTableRowElement"},
my:{"^":"v;",
Y:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ay(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.B.Y(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.ga7(z)
y.toString
x.toString
new W.S(y).O(0,new W.S(x))
return y},
"%":"HTMLTableSectionElement"},
dB:{"^":"v;",$isdB:1,"%":"HTMLTemplateElement"},
mz:{"^":"v;L:name=","%":"HTMLTextAreaElement"},
mB:{"^":"js;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bx]},
$isp:1,
$asp:function(){return[W.bx]},
$ask:function(){return[W.bx]},
$isi:1,
$asi:function(){return[W.bx]},
$asl:function(){return[W.bx]},
"%":"TextTrackCueList"},
mC:{"^":"ec;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bw]},
$isp:1,
$asp:function(){return[W.bw]},
$ask:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$asl:function(){return[W.bw]},
"%":"TextTrackList"},
mD:{"^":"h;i:length=","%":"TimeRanges"},
mE:{"^":"jx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.by]},
$isp:1,
$asp:function(){return[W.by]},
$ask:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$asl:function(){return[W.by]},
"%":"TouchList"},
mF:{"^":"h;i:length=","%":"TrackDefaultList"},
mI:{"^":"h;",
ex:[function(a){return a.parentNode()},"$0","gau",1,0,4],
ee:[function(a){return a.previousNode()},"$0","gb_",1,0,4],
"%":"TreeWalker"},
dR:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mK:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mM:{"^":"h;m:x=,F:z=","%":"VRStageBoundsPoint"},
mN:{"^":"h8;I:height},J:width}","%":"HTMLVideoElement"},
mO:{"^":"E;i:length=","%":"VideoTrackList"},
aM:{"^":"N;",
ge_:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.r("deltaY is not supported"))},
$isaM:1,
"%":"WheelEvent"},
ic:{"^":"E;",
gdL:function(a){var z,y
z=P.aS
y=new P.ak(0,$.x,null,[z])
this.dq(a)
this.dw(a,W.ei(new W.id(new P.jo(y,[z]))))
return y},
dw:function(a,b){return a.requestAnimationFrame(H.a8(b,1))},
dq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
id:{"^":"j:0;a",
$1:function(a){this.a.dV(0,a)}},
mP:{"^":"E;"},
mT:{"^":"t;L:name=,bx:namespaceURI=","%":"Attr"},
mU:{"^":"jD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.a_]},
$isp:1,
$asp:function(){return[W.a_]},
$ask:function(){return[W.a_]},
$isi:1,
$asi:function(){return[W.a_]},
$asl:function(){return[W.a_]},
"%":"CSSRuleList"},
mV:{"^":"fE;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
G:function(a,b){var z
if(b==null)return!1
z=J.q(b)
if(!z.$isa6)return!1
return a.left===z.gc7(b)&&a.top===z.gcg(b)&&a.width===z.gJ(b)&&a.height===z.gI(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.e1(W.al(W.al(W.al(W.al(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gci:function(a){return new P.ah(a.left,a.top,[null])},
gI:function(a){return a.height},
gJ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mW:{"^":"jF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bk]},
$isp:1,
$asp:function(){return[W.bk]},
$ask:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$asl:function(){return[W.bk]},
"%":"GamepadList"},
mZ:{"^":"jH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$ask:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$asl:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n_:{"^":"fk;",
T:function(a){return a.clone()},
"%":"Request"},
n0:{"^":"jJ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.b4]},
$isp:1,
$asp:function(){return[W.b4]},
$ask:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$asl:function(){return[W.b4]},
"%":"SpeechRecognitionResultList"},
n1:{"^":"jL;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.bv]},
$isp:1,
$asp:function(){return[W.bv]},
$ask:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$asl:function(){return[W.bv]},
"%":"StyleSheetList"},
im:{"^":"c4;dr:a<",
B:function(a,b){var z,y,x,w,v
for(z=this.gP(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gP:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.A([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
v=z[w]
u=J.f(v)
if(u.gbx(v)==null)y.push(u.gL(v))}return y},
$asc4:function(){return[P.m,P.m]},
$asQ:function(){return[P.m,P.m]}},
ix:{"^":"im;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gP(this).length}},
b6:{"^":"dx;a,b,c,$ti",
c9:function(a,b,c,d){return W.aj(this.a,this.b,a,!1,H.G(this,0))}},
ai:{"^":"b6;a,b,c,$ti"},
iz:{"^":"hW;a,b,c,d,e,$ti",
dc:function(a,b,c,d,e){this.dG()},
dR:function(a){if(this.b==null)return
this.dH()
this.b=null
this.d=null
return},
dG:function(){var z=this.d
if(z!=null&&this.a<=0)J.eD(this.b,this.c,z,!1)},
dH:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eC(x,this.c,z,!1)}},
p:{
aj:function(a,b,c,d,e){var z=c==null?null:W.ei(new W.iA(c))
z=new W.iz(0,a,b,z,!1,[e])
z.dc(a,b,c,!1,e)
return z}}},
iA:{"^":"j:0;a",
$1:function(a){return this.a.$1(a)}},
cb:{"^":"d;cs:a<",
de:function(a){var z,y
z=$.$get$cc()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.L[y],W.kc())
for(y=0;y<12;++y)z.j(0,C.p[y],W.kd())}},
aa:function(a){return $.$get$e_().A(0,W.aB(a))},
a4:function(a,b,c){var z,y,x
z=W.aB(a)
y=$.$get$cc()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dZ:function(a){var z,y
z=document.createElement("a")
y=new W.jc(z,window.location)
y=new W.cb(y)
y.de(a)
return y},
mX:[function(a,b,c,d){return!0},"$4","kc",16,0,9],
mY:[function(a,b,c,d){var z,y,x,w,v
z=d.gcs()
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
return z},"$4","kd",16,0,9]}},
l:{"^":"d;$ti",
gN:function(a){return new W.d4(a,this.gi(a),-1,null,[H.b9(this,a,"l",0)])}},
dk:{"^":"d;a",
aa:function(a){return C.c.bI(this.a,new W.hm(a))},
a4:function(a,b,c){return C.c.bI(this.a,new W.hl(a,b,c))}},
hm:{"^":"j:0;a",
$1:function(a){return a.aa(this.a)}},
hl:{"^":"j:0;a,b,c",
$1:function(a){return a.a4(this.a,this.b,this.c)}},
jd:{"^":"d;cs:d<",
dg:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.b1(0,new W.je())
y=b.b1(0,new W.jf())
this.b.O(0,z)
x=this.c
x.O(0,C.N)
x.O(0,y)},
aa:function(a){return this.a.A(0,W.aB(a))},
a4:["cN",function(a,b,c){var z,y
z=W.aB(a)
y=this.c
if(y.A(0,H.b(z)+"::"+b))return this.d.dK(c)
else if(y.A(0,"*::"+b))return this.d.dK(c)
else{y=this.b
if(y.A(0,H.b(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.b(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}]},
je:{"^":"j:0;",
$1:function(a){return!C.c.A(C.p,a)}},
jf:{"^":"j:0;",
$1:function(a){return C.c.A(C.p,a)}},
jp:{"^":"jd;e,a,b,c,d",
a4:function(a,b,c){if(this.cN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cw(a).a.getAttribute("template")==="")return this.e.A(0,b)
return!1},
p:{
ea:function(){var z=P.m
z=new W.jp(P.c2(C.o,z),P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),null)
z.dg(null,new H.h6(C.o,new W.jq(),[H.G(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jq:{"^":"j:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jn:{"^":"d;",
aa:function(a){var z=J.q(a)
if(!!z.$isdr)return!1
z=!!z.$isz
if(z&&W.aB(a)==="foreignObject")return!1
if(z)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.i.cG(b,"on"))return!1
return this.aa(a)}},
d4:{"^":"d;a,b,c,d,$ti",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aV(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
ir:{"^":"d;a",$isE:1,p:{
is:function(a){if(a===window)return a
else return new W.ir(a)}}},
dj:{"^":"d;"},
m6:{"^":"d;"},
mJ:{"^":"d;"},
jc:{"^":"d;a,b"},
ed:{"^":"d;a",
ba:function(a){new W.jA(this).$2(a,null)},
af:function(a,b){if(b==null)J.cB(a)
else b.removeChild(a)},
dB:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cw(a)
x=y.gdr().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.V(t)}v="element unprintable"
try{v=J.az(a)}catch(t){H.V(t)}try{u=W.aB(a)
this.dA(a,b,z,v,u,y,x)}catch(t){if(H.V(t) instanceof P.ac)throw t
else{this.af(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dA:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.af(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aa(a)){this.af(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a4(a,"is",g)){this.af(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gP(f)
y=H.A(z.slice(0),[H.G(z,0)])
for(x=f.gP(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.c(y,x)
w=y[x]
if(!this.a.a4(a,J.f7(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.q(a).$isdB)this.ba(a.content)}},
jA:{"^":"j:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dB(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.af(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eW(z)}catch(w){H.V(w)
v=z
if(x){u=J.f(v)
if(u.gau(v)!=null){u.gau(v)
u.gau(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
iq:{"^":"h+fu;"},
it:{"^":"h+k;"},
iu:{"^":"it+l;"},
iv:{"^":"h+k;"},
iw:{"^":"iv+l;"},
iC:{"^":"h+k;"},
iD:{"^":"iC+l;"},
iQ:{"^":"h+k;"},
iR:{"^":"iQ+l;"},
iX:{"^":"h+Q;"},
iY:{"^":"h+Q;"},
iZ:{"^":"h+k;"},
j_:{"^":"iZ+l;"},
j0:{"^":"h+k;"},
j1:{"^":"j0+l;"},
j4:{"^":"h+k;"},
j5:{"^":"j4+l;"},
jb:{"^":"h+Q;"},
e7:{"^":"E+k;"},
e8:{"^":"e7+l;"},
jg:{"^":"h+k;"},
jh:{"^":"jg+l;"},
jk:{"^":"h+Q;"},
jr:{"^":"h+k;"},
js:{"^":"jr+l;"},
eb:{"^":"E+k;"},
ec:{"^":"eb+l;"},
jw:{"^":"h+k;"},
jx:{"^":"jw+l;"},
jC:{"^":"h+k;"},
jD:{"^":"jC+l;"},
jE:{"^":"h+k;"},
jF:{"^":"jE+l;"},
jG:{"^":"h+k;"},
jH:{"^":"jG+l;"},
jI:{"^":"h+k;"},
jJ:{"^":"jI+l;"},
jK:{"^":"h+k;"},
jL:{"^":"jK+l;"}}],["","",,P,{"^":"",
T:function(a){var z,y,x,w,v
if(a==null)return
z=P.J()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
k3:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cv(a,new P.k4(z))
return z},
d_:function(){var z=$.cZ
if(z==null){z=J.bK(window.navigator.userAgent,"Opera",0)
$.cZ=z}return z},
fA:function(){var z,y
z=$.cW
if(z!=null)return z
y=$.cX
if(y==null){y=J.bK(window.navigator.userAgent,"Firefox",0)
$.cX=y}if(y)z="-moz-"
else{y=$.cY
if(y==null){y=P.d_()!==!0&&J.bK(window.navigator.userAgent,"Trident/",0)
$.cY=y}if(y)z="-ms-"
else z=P.d_()===!0?"-o-":"-webkit-"}$.cW=z
return z},
k4:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",ml:{"^":"E;R:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mG:{"^":"E;R:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
ks:function(a){return Math.sqrt(a)},
e0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ah:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
G:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ah))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y
z=J.a3(this.a)
y=J.a3(this.b)
return P.iS(P.e0(P.e0(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.ah(y,C.a.l(z,x),this.$ti)},
H:function(a,b){var z,y,x,w
z=this.a
y=J.f(b)
x=y.gm(b)
if(typeof z!=="number")return z.H()
if(typeof x!=="number")return H.u(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.H()
if(typeof y!=="number")return H.u(y)
return new P.ah(z-x,w-y,this.$ti)}},
j6:{"^":"d;$ti"},
a6:{"^":"j6;$ti"}}],["","",,P,{"^":"",l7:{"^":"z;m:x=,n:y=","%":"SVGFEBlendElement"},l8:{"^":"z;m:x=,n:y=","%":"SVGFEColorMatrixElement"},l9:{"^":"z;m:x=,n:y=","%":"SVGFEComponentTransferElement"},la:{"^":"z;m:x=,n:y=","%":"SVGFECompositeElement"},lb:{"^":"z;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},lc:{"^":"z;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},ld:{"^":"z;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},le:{"^":"z;m:x=,n:y=","%":"SVGFEFloodElement"},lf:{"^":"z;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},lg:{"^":"z;m:x=,n:y=","%":"SVGFEImageElement"},lh:{"^":"z;m:x=,n:y=","%":"SVGFEMergeElement"},li:{"^":"z;m:x=,n:y=","%":"SVGFEMorphologyElement"},lj:{"^":"z;m:x=,n:y=","%":"SVGFEOffsetElement"},lk:{"^":"z;m:x=,n:y=,F:z=","%":"SVGFEPointLightElement"},ll:{"^":"z;m:x=,n:y=","%":"SVGFESpecularLightingElement"},lm:{"^":"z;m:x=,n:y=,F:z=","%":"SVGFESpotLightElement"},ln:{"^":"z;m:x=,n:y=","%":"SVGFETileElement"},lo:{"^":"z;m:x=,n:y=","%":"SVGFETurbulenceElement"},lt:{"^":"z;m:x=,n:y=","%":"SVGFilterElement"},lw:{"^":"aC;m:x=,n:y=","%":"SVGForeignObjectElement"},fP:{"^":"aC;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aC:{"^":"z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lE:{"^":"aC;m:x=,n:y=","%":"SVGImageElement"},lJ:{"^":"iU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dd]},
$isi:1,
$asi:function(){return[P.dd]},
$asl:function(){return[P.dd]},
"%":"SVGLengthList"},lP:{"^":"z;m:x=,n:y=","%":"SVGMaskElement"},lQ:{"^":"h;W:a=,S:b=,a_:c=","%":"SVGMatrix"},m7:{"^":"j3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dn]},
$isi:1,
$asi:function(){return[P.dn]},
$asl:function(){return[P.dn]},
"%":"SVGNumberList"},mc:{"^":"z;m:x=,n:y=","%":"SVGPatternElement"},me:{"^":"h;m:x=,n:y=","%":"SVGPoint"},mf:{"^":"h;i:length=","%":"SVGPointList"},mh:{"^":"h;m:x=,n:y=","%":"SVGRect"},mi:{"^":"fP;m:x=,n:y=","%":"SVGRectElement"},dr:{"^":"z;",$isdr:1,"%":"SVGScriptElement"},mv:{"^":"jm;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$asl:function(){return[P.m]},
"%":"SVGStringList"},z:{"^":"ap;",
Y:function(a,b,c,d){var z,y,x,w,v,u
z=H.A([],[W.dj])
z.push(W.dZ(null))
z.push(W.ea())
z.push(new W.jn())
c=new W.ed(new W.dk(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dY(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.S(w)
u=z.ga7(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaW:function(a){return new W.ai(a,"mousedown",!1,[W.N])},
gaX:function(a){return new W.ai(a,"mousemove",!1,[W.N])},
gaY:function(a){return new W.ai(a,"mouseup",!1,[W.N])},
gaZ:function(a){return new W.ai(a,"mousewheel",!1,[W.aM])},
$isz:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mw:{"^":"aC;m:x=,n:y=","%":"SVGSVGElement"},i4:{"^":"aC;","%":"SVGTextPathElement;SVGTextContentElement"},mA:{"^":"i4;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mH:{"^":"jz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dE]},
$isi:1,
$asi:function(){return[P.dE]},
$asl:function(){return[P.dE]},
"%":"SVGTransformList"},mL:{"^":"aC;m:x=,n:y=","%":"SVGUseElement"},iT:{"^":"h+k;"},iU:{"^":"iT+l;"},j2:{"^":"h+k;"},j3:{"^":"j2+l;"},jl:{"^":"h+k;"},jm:{"^":"jl+l;"},jy:{"^":"h+k;"},jz:{"^":"jy+l;"}}],["","",,P,{"^":"",kA:{"^":"h;i:length=","%":"AudioBuffer"},kB:{"^":"io;",
h:function(a,b){return P.T(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.T(y.value[1]))}},
gP:function(a){var z=H.A([],[P.m])
this.B(a,new P.fi(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.m,null]},
"%":"AudioParamMap"},fi:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},kC:{"^":"h;aT:enabled=","%":"AudioTrack"},kD:{"^":"E;i:length=","%":"AudioTrackList"},fj:{"^":"E;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m9:{"^":"fj;i:length=","%":"OfflineAudioContext"},io:{"^":"h+Q;"}}],["","",,P,{"^":"",mj:{"^":"h;",
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
ax:function(a){return P.T(a.getContextAttributes())},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c8:function(a,b){return a.linkProgram(b)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cj:function(a,b,c){return a.uniform1f(b,c)},
ck:function(a,b,c){return a.uniform1fv(b,c)},
cl:function(a,b,c){return a.uniform1i(b,c)},
cm:function(a,b,c){return a.uniform1iv(b,c)},
cn:function(a,b,c){return a.uniform2fv(b,c)},
co:function(a,b,c){return a.uniform3fv(b,c)},
cp:function(a,b,c){return a.uniform4fv(b,c)},
cq:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cr:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ct:function(a,b){return a.useProgram(b)},
cu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cw:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mk:{"^":"h;",
dN:function(a,b){return a.beginTransformFeedback(b)},
dQ:function(a,b){return a.bindVertexArray(b)},
dZ:function(a){return a.createVertexArray()},
e0:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e1:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e2:function(a){return a.endTransformFeedback()},
eo:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
ep:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
ax:function(a){return P.T(a.getContextAttributes())},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c8:function(a,b){return a.linkProgram(b)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cj:function(a,b,c){return a.uniform1f(b,c)},
ck:function(a,b,c){return a.uniform1fv(b,c)},
cl:function(a,b,c){return a.uniform1i(b,c)},
cm:function(a,b,c){return a.uniform1iv(b,c)},
cn:function(a,b,c){return a.uniform2fv(b,c)},
co:function(a,b,c){return a.uniform3fv(b,c)},
cp:function(a,b,c){return a.uniform4fv(b,c)},
cq:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cr:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ct:function(a,b){return a.useProgram(b)},
cu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cw:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mt:{"^":"jj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return P.T(a.item(b))},
j:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$ask:function(){return[P.c3]},
$isi:1,
$asi:function(){return[P.c3]},
$asl:function(){return[P.c3]},
"%":"SQLResultSetRowList"},ji:{"^":"h+k;"},jj:{"^":"ji+l;"}}],["","",,G,{"^":"",
ig:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.m])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.c(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.c(z,y)
z[y]=w}return C.c.ai(z,"\n")},
dV:function(a,b,c){var z,y,x,w
z=J.f(a)
y=z.bX(a,b)
z.bc(a,y,c)
z.bU(a,y)
x=z.b6(a,y,35713)
if(x!=null&&J.L(x,!1)){w=z.b5(a,y)
P.ao("E:Compilation failed:")
P.ao("E:"+G.ig(c))
P.ao("E:Failure:")
P.ao(C.i.l("E:",w))
throw H.a(w)}return y},
hn:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
d.q(b)
d.al(0,a)
e.q(c)
e.al(0,a)
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
r=Math.sqrt(e.gat())
if(r===0)return!1
e.V(0,-1/r)
return!0},
d5:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bN(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.bO(a[y])
if(x>=w)return H.c(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.c(a,y)
v=J.cz(a[y])
if(z>=w)return H.c(b,z)
b[z]=v}return b},
fM:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bN(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x;++z
if(y>=a.length)return H.c(a,y)
x=J.bO(a[y])
if(z>=w)return H.c(b,z)
b[z]=x}return b},
fN:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bN(a[y])
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.bO(a[y])
if(x>=w)return H.c(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.c(a,y)
x=J.cz(a[y])
if(v>=w)return H.c(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.c(a,y)
x=J.eZ(a[y])
if(z>=w)return H.c(b,z)
b[z]=x}return b},
fL:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aV(a[y],0)
w=b.length
if(z>=w)return H.c(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.c(a,y)
v=J.aV(a[y],1)
if(x>=w)return H.c(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.c(a,y)
x=J.aV(a[y],2)
if(v>=w)return H.c(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.c(a,y)
x=J.aV(a[y],3)
if(z>=w)return H.c(b,z)
b[z]=x}return b},
iO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.af(z,z.r,null,null,[H.G(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.H]],v=[P.am],u=[T.a1],t=[T.e],s=[T.o];y.u();){r=y.d
if(!x.aq(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.ep>0)H.bI("I: "+q)
continue}p=z.h(0,r)
switch($.$get$X().h(0,r).a){case"vec2":b.ab(r,G.fM(H.bb(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.ab(r,G.d5(H.bb(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.ab(r,G.fN(H.bb(p,"$isi",u,"$asi"),null),4)
break
case"float":b.ab(r,new Float32Array(H.bB(H.bb(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.ab(r,G.fL(H.bb(p,"$isi",w,"$asi"),null),4)
break}}},
bm:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.J()
w=J.eM(z.a)
v=new G.h9(z,w,4,x,y,null,0,-1,null,null,P.J(),"meshdata:"+a,!1,!0)
u=G.d5(c.d,null)
x.j(0,"aPosition",J.bL(z.a))
v.ch=u
v.bk("aPosition",u,3)
t=$.$get$X().h(0,"aPosition")
if(t==null)H.U("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.bc(z.a,w)
z.c4(0,s,0)
z.cv(0,x.h(0,"aPosition"),s,t.bm(),5126,!1,0,0)
y=c.cT()
v.y=J.bL(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bB(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bB(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bB(y))
v.Q=5125}J.bc(z.a,w)
y=v.y
x=v.cx
J.bJ(z.a,34963,y)
J.cs(z.a,34963,x,35048)
G.iO(c,v)
return v},
aI:{"^":"d;aT:c>"},
bA:{"^":"aI;d,a,b,c",
aC:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.b(new H.dQ(H.k9(this),null))+"}["+this.a+"]"],[P.m])
for(y=this.d,x=new H.af(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.u();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.ai(z,"\n")}},
fl:{"^":"du;",
b8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=this.d
a.q(z)
y=a.a
y[12]=0
y[13]=0
y[14]=0
y[15]=1
z=z.a
x=-z[12]
w=-z[13]
v=-z[14]
z=J.q(x)
u=!!z.$isa1
t=u?z.gaw(x):1
if(!!z.$ise){s=z.gm(x)
w=z.gn(x)
v=z.gF(x)
x=s}else if(u){s=z.gm(x)
w=z.gn(x)
v=z.gF(x)
x=s}else if(!(typeof x==="number")){x=null
w=null
v=null}z=y[0]
if(typeof x!=="number")return H.u(x)
u=y[4]
if(typeof w!=="number")return H.u(w)
r=y[8]
if(typeof v!=="number")return H.u(v)
q=y[12]
p=y[1]
o=y[5]
n=y[9]
m=y[13]
l=y[2]
k=y[6]
j=y[10]
i=y[14]
h=y[3]
g=y[7]
f=y[11]
e=y[15]
y[12]=z*x+u*w+r*v+q*t
y[13]=p*x+o*w+n*v+m*t
y[14]=l*x+k*w+j*v+i*t
y[15]=h*x+g*w+f*v+e*t}},
fn:{"^":"d;a,b",
c4:function(a,b,c){J.eS(this.a,b)
if(c>0)J.fd(this.a,b,c)},
cv:function(a,b,c,d,e,f,g,h){J.bJ(this.a,34962,b)
J.fe(this.a,c,d,e,!1,g,h)}},
fO:{"^":"d;a,b,c,d,e"},
ae:{"^":"d;W:a>,S:b>,a_:c>",p:{
F:function(a,b,c){return new G.ae(a,b,c)}}},
bX:{"^":"d;W:a>,S:b>,a_:c>,d"},
bl:{"^":"d;a,b,c,d,e",
a2:function(a){switch($.$get$X().h(0,a).a){case"vec2":this.e.j(0,a,H.A([],[T.o]))
break
case"vec3":this.e.j(0,a,H.A([],[T.e]))
break
case"vec4":this.e.j(0,a,H.A([],[T.a1]))
break
case"float":this.e.j(0,a,H.A([],[P.am]))
break
case"uvec4":this.e.j(0,a,H.A([],[[P.i,P.H]]))
break}},
cP:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.bX(z,z+1,z+2,z+3))},
bj:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)y.push(a[x].T(0))},
cQ:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.ae(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.bd(a[x]))},
az:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x)z.push(b[x].T(0))},
aA:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x)z.push(J.bd(b[x]))},
cT:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.A(x,[P.H])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.c(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.c(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.c(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.c(w,u)
w[u]=x
r=u+1
if(r>=v)return H.c(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.c(w,r)
w[r]=p
r=u+3
if(r>=v)return H.c(w,r)
w[r]=x
x=u+4
if(x>=v)return H.c(w,x)
w[x]=p
p=u+5
if(p>=v)return H.c(w,p)
w[p]=q.d
u+=6}return w},
cV:function(a,b){var z,y,x,w,v,u,t
z=[]
this.e.j(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
z.push(new T.o(t))}},
cU:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
z.push(new G.bX(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.af(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.u();){w=x.d
v=$.$get$X().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.ai(z," ")}},
dD:{"^":"d;a,b,c"},
dC:{"^":"d;a,b,c"},
h7:{"^":"bA;d,a,b,c",
cZ:function(a){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.$get$cJ())
z.j(0,"cStencilFunc",$.$get$dw())},
p:{
b_:function(a){var z=new G.h7(P.J(),a,!1,!0)
z.cZ(a)
return z}}},
h9:{"^":"aI;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bk:function(a,b,c){var z,y
C.i.bs(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bJ(z.a,34962,y)
J.cs(z.a,34962,b,35048)},
cW:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
ab:function(a,b,c){var z,y,x,w,v
z=J.ct(a,0)===105
if(z&&this.z===0)this.z=C.b.bh(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bL(x.a))
this.bk(a,b,c)
w=$.$get$X().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.bc(x.a,this.e)
x.c4(0,v,z?1:0)
x.cv(0,y.h(0,a),v,w.bm(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.af(z,z.r,null,null,[H.G(z,0)]),x.c=z.e;x.u();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.ai(y,"  ")}},
hq:{"^":"bA;x,y,z,Q,ch,cx,cy,db,dx,dy,d,a,b,c",
aC:function(){var z,y
z=this.z
this.x.b8(z)
y=this.Q
y.q(this.y)
y.aV(0,z)
z=this.d
z.j(0,"uPerspectiveViewMatrix",y)
return z},
ac:function(){var z,y,x,w,v,u,t,s,r,q
z=this.cy
y=this.cx
x=z-y
w=this.y
v=this.db
u=v+x/this.ch
t=this.dx
s=this.dy
r=u-v
q=s-t
w.bb()
w=w.a
w[0]=2/x
w[5]=2/r
w[10]=-2/q
w[12]=-(z+y)/x
w[13]=-(u+v)/r
w[14]=-(s+t)/q
w[15]=1},
aB:function(a,b){var z
if(typeof b!=="number")return H.u(b)
z=a/b
if(this.ch===z)return
this.ch=z
this.ac()}},
hs:{"^":"bA;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
aB:function(a,b){var z
if(typeof b!=="number")return H.u(b)
z=a/b
if(this.z===z)return
this.z=z
this.ac()},
ac:function(){var z,y,x,w,v,u
z=this.db
y=this.z
x=this.Q
w=this.ch
v=Math.tan(this.y*3.141592653589793/180*0.5)
u=x-w
z.bb()
z=z.a
z[0]=1/(v*y)
z[5]=1/v
z[10]=(w+x)/u
z[11]=-1
z[14]=2*x*w/u},
aC:function(){var z,y,x,w,v
z=this.x
y=z.d.a
x=y[12]
w=y[13]
y=y[14]
v=new T.e(new Float32Array(3))
v.t(x,w,y)
y=this.d
y.j(0,"uEyePosition",v)
v=this.cy
z.b8(v)
z=this.cx
z.q(this.db)
z.aV(0,v)
y.j(0,"uPerspectiveViewMatrix",z)
return y}},
hF:{"^":"aI;d,e,f,r,x,y,z,Q,ch,a,b,c",
d1:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cA(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cA(w.a,v,t))}},
d5:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.af(y,y.r,null,null,[H.G(y,0)]),w.c=y.e;w.u();){v=w.d
if(!z.aq(0,v))x.push(v)}for(z=this.x,y=new P.cd(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.u();){v=y.d
if(!z.A(0,v))x.push(v)}return x},
d9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.af(b,b.r,null,null,[H.G(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.ct(t,0)){case 117:if(w.aq(0,t)){s=b.h(0,t)
if(v.aq(0,t))H.bI("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$X().h(0,t)
if(r==null)H.U("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bP(x.a,q,s)
else if(!!J.q(s).$isfS)J.fb(x.a,q,s)
break
case"float":if(r.c===0)J.f9(x.a,q,s)
else if(!!J.q(s).$isbY)J.fa(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ab(s,"$isB").a
J.cH(x.a,q,!1,p)}else if(!!J.q(s).$isbY)J.cH(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.ab(s,"$isR").a
J.cG(x.a,q,!1,p)}else if(!!J.q(s).$isbY)J.cG(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cF(o,q,H.ab(s,"$isa1").a)
else J.cF(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cE(o,q,H.ab(s,"$ise").a)
else J.cE(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cD(o,q,H.ab(s,"$iso").a)
else J.cD(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cp(x.a,33984+p)
p=H.ab(s,"$isi5").cX()
J.cr(x.a,3553,p)
p=this.ch
J.bP(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.u(p)
J.cp(x.a,33984+p)
p=H.ab(s,"$isi5").cX()
J.cr(x.a,34067,p)
p=this.ch
J.bP(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bI("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.L(s,!0)
o=x.a
if(p)J.be(o,2929)
else J.bM(o,2929)
break
case"cStencilFunc":H.ab(s,"$isdD")
p=s.a
o=x.a
if(p===1281)J.bM(o,2960)
else{J.be(o,2960)
o=s.b
n=s.c
J.f6(x.a,p,o,n)}break
case"cDepthWrite":J.eN(x.a,s)
break
case"cBlendEquation":H.ab(s,"$isdC")
p=s.a
o=x.a
if(p===1281)J.bM(o,3042)
else{J.be(o,3042)
o=s.b
n=s.c
J.eH(x.a,o,n)
J.eG(x.a,p)}break}++u
break}}m=P.fF(0,0,0,Date.now()-new P.cV(z,!1).a,0,0)
""+u
m.k(0)},
cS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fc(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bp()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x){w=b[x]
this.d9(w.a,w.aC())}y=this.Q
y.ag(0)
for(v=a.cy,u=new H.af(v,v.r,null,null,[H.G(v,0)]),u.c=v.e;u.u();)y.M(0,u.d)
t=this.d5()
if(t.length!==0)P.ao("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.bc(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cW()
u=a.Q
r=a.z
if(s)J.eE(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eR(q,y,v,u,0,r)
else J.eQ(q,y,v,u,0)}else{u=z.a
if(r>1)J.eP(u,y,0,v,r)
else J.eO(u,y,0,v)}if(s)J.eT(z.a)},
p:{
hG:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.W(null,null,null,P.m)
y=c.b
x=d.b
w=c.f
v=J.eL(b.a)
u=G.dV(b.a,35633,y)
J.cq(b.a,v,u)
t=G.dV(b.a,35632,x)
J.cq(b.a,v,t)
if(w.length>0)J.f8(b.a,v,w,35980)
J.f4(b.a,v)
if(J.f3(b.a,v,35714)!==!0)H.U(J.f2(b.a,v))
z=new G.hF(b,c,d,v,P.c2(c.c,null),P.J(),P.J(),z,null,a,!1,!0)
z.d1(a,b,c,d)
return z}}},
w:{"^":"d;a,b,c",
bm:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
hM:{"^":"d;a,b,c,d,e,f,r,x",
cO:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.be(z)},
bi:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.D)(a),++x)y.push(a[x])
C.c.be(y)},
d2:function(a,b){this.b=this.da(!0,a,b)},
bn:function(a){return this.d2(a,null)},
da:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
s=$.$get$X().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.c(z,u)
q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.O(w,b)
w.push("}")
return C.c.ai(w,"\n")},
p:{
ds:function(a){return new G.hM(a,null,[],[],[],[],0,P.J())}}},
du:{"^":"aI;",
a6:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}}}],["","",,R,{"^":"",
dt:function(a,b,c,d,e,f,g,h){return G.bm("cube",a,B.fv(!0,b,c,d,e,f,g,h))},
hT:{"^":"d;",
d3:function(a,b,c){var z,y,x
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
x=this.df(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
df:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iy("span",null)
y=J.cx(v)
J.f(y).sJ(y,"1px")
C.n.sI(y,""+d+"px")
C.n.se3(y,"left")
x=C.n.br(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
hU:{"^":"hT;e,f,a,b,c,d",
d7:function(a,b){var z,y,x,w,v;++this.e
if(J.aU(J.eB(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.en(z,2)+" fps"
y=this.c;(y&&C.C).cC(y,b)
x=C.b.a3(30*C.t.dS(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cx(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d6:function(a){return this.d7(a,"")}}}],["","",,A,{"^":"",
en:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.eU(b)!==!0)return
z=b.d8(c)
b.k(0)
y=C.c.gec(e)
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
x.dX(new T.R(v))
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
a.cS(b.cx,e,d)
if(0>=e.length)return H.c(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.D)(y),++s)A.en(a,y[s],z,d,e)},
b0:{"^":"du;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
d8:function(a){var z=this.dx
z.q(a)
z.aV(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
c6:{"^":"aI;d,e,ca:f>,a,b,c"},
hE:{"^":"aI;d,e,f,r,x,y,z,Q,a,b,c",
d0:function(a,b,c){if(this.d==null)this.d=new G.fO(this.e,null,null,null,null)},
cR:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=this.d
y=this.r
x=this.x
w=this.z
v=this.Q
u=z.a
z=z.b
J.eF(u.a,36160,z)
J.ff(u.a,x,this.y,w,v)
if(y!==0)J.eI(u.a,y)
for(z=this.f,y=z.length,t=0;t<z.length;z.length===y||(0,H.D)(z),++t){s=z[t]
if(!s.c)continue
r=s.e
r.push(new G.bA(P.J(),"transforms",!1,!0))
q=new T.B(new Float32Array(16))
q.K()
for(x=s.f,w=x.length,v=s.d,p=0;p<x.length;x.length===w||(0,H.D)(x),++p)A.en(v,x[p],q,a,r)
if(0>=r.length)return H.c(r,-1)
r.pop()}},
bl:function(){return this.cR(null)},
p:{
dq:function(a,b,c){var z=new A.hE(c,b,H.A([],[A.c6]),17664,0,0,0,0,a,!1,!0)
z.d0(a,b,c)
return z}}}}],["","",,V,{}],["","",,B,{"^":"",
fv:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
z=-d0
y=-d1
x=new T.e(new Float32Array(3))
x.t(z,y,d2)
w=new T.e(new Float32Array(3))
w.t(d0,y,d2)
v=new T.e(new Float32Array(3))
v.t(d0,d1,d2)
u=new T.e(new Float32Array(3))
u.t(z,d1,d2)
t=-d2
s=new T.e(new Float32Array(3))
s.t(z,y,t)
r=new T.e(new Float32Array(3))
r.t(z,d1,t)
q=new T.e(new Float32Array(3))
q.t(d0,d1,t)
p=new T.e(new Float32Array(3))
p.t(d0,y,t)
o=new T.e(new Float32Array(3))
o.t(z,d1,t)
n=new T.e(new Float32Array(3))
n.t(z,d1,d2)
m=new T.e(new Float32Array(3))
m.t(d0,d1,d2)
l=new T.e(new Float32Array(3))
l.t(d0,d1,t)
k=new T.e(new Float32Array(3))
k.t(d0,y,d2)
j=new T.e(new Float32Array(3))
j.t(z,y,d2)
i=new T.e(new Float32Array(3))
i.t(z,y,t)
h=new T.e(new Float32Array(3))
h.t(d0,y,t)
g=new T.e(new Float32Array(3))
g.t(d0,y,t)
f=new T.e(new Float32Array(3))
f.t(d0,d1,t)
e=new T.e(new Float32Array(3))
e.t(d0,d1,d2)
d=new T.e(new Float32Array(3))
d.t(d0,y,d2)
c=new T.e(new Float32Array(3))
c.t(z,y,t)
b=new T.e(new Float32Array(3))
b.t(z,y,d2)
y=new T.e(new Float32Array(3))
y.t(z,d1,d2)
a=new T.e(new Float32Array(3))
a.t(z,d1,t)
z=new T.o(new Float32Array(2))
z.w(c7,c9)
t=new T.o(new Float32Array(2))
t.w(c6,c9)
a0=new T.o(new Float32Array(2))
a0.w(c6,c8)
a1=new T.o(new Float32Array(2))
a1.w(c7,c8)
a2=new T.o(new Float32Array(2))
a2.w(c6,c9)
a3=new T.o(new Float32Array(2))
a3.w(c6,c8)
a4=new T.o(new Float32Array(2))
a4.w(c7,c8)
a5=new T.o(new Float32Array(2))
a5.w(c7,c9)
a6=new T.o(new Float32Array(2))
a6.w(c7,c8)
a7=new T.o(new Float32Array(2))
a7.w(c7,c9)
a8=new T.o(new Float32Array(2))
a8.w(c6,c9)
a9=new T.o(new Float32Array(2))
a9.w(c6,c8)
b0=new T.o(new Float32Array(2))
b0.w(c6,c8)
b1=new T.o(new Float32Array(2))
b1.w(c7,c8)
b2=new T.o(new Float32Array(2))
b2.w(c7,c9)
b3=new T.o(new Float32Array(2))
b3.w(c6,c9)
b4=new T.o(new Float32Array(2))
b4.w(c6,c9)
b5=new T.o(new Float32Array(2))
b5.w(c6,c8)
b6=new T.o(new Float32Array(2))
b6.w(c7,c8)
b7=new T.o(new Float32Array(2))
b7.w(c7,c9)
b8=new T.o(new Float32Array(2))
b8.w(c7,c9)
b9=new T.o(new Float32Array(2))
b9.w(c6,c9)
c0=new T.o(new Float32Array(2))
c0.w(c6,c8)
c1=new T.o(new Float32Array(2))
c1.w(c7,c8)
c2=new G.bl(!1,[],[],[],P.J())
c2.a2("aTexUV")
c2.a2("aNormal")
c2.cP(6)
c2.bj([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.az("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$dW(),c3<6;++c3){c4=z[c3]
c2.aA("aNormal",[c4,c4,c4,c4])}return c2},
fx:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=c/2
y=[]
x=[]
w=[]
v=new T.e(new Float32Array(3))
v.t(0,z,0)
y.push(v)
v=new T.o(new Float32Array(2))
v.w(0,0)
x.push(v)
v=new T.e(new Float32Array(3))
v.t(0,1,0)
w.push(v)
v=-z
u=new T.e(new Float32Array(3))
u.t(0,v,0)
y.push(u)
u=new T.o(new Float32Array(2))
u.w(1,1)
x.push(u)
u=new T.e(new Float32Array(3))
u.t(0,-1,0)
w.push(u)
for(t=0;t<d;++t){s=t/d
u=s*3.141592653589793*2
r=Math.sin(u)
q=Math.cos(u)
u=new Float32Array(3)
u[0]=r*a
u[1]=z
u[2]=q*a
y.push(new T.e(u))
u=new Float32Array(2)
u[0]=s
u[1]=1
x.push(new T.o(u))
u=new Float32Array(3)
u[0]=0
u[1]=1
u[2]=0
w.push(new T.e(u))
u=new Float32Array(3)
u[0]=r*b
u[1]=v
u[2]=q*b
y.push(new T.e(u))
u=new Float32Array(2)
u[0]=s
u[1]=0
x.push(new T.o(u))
u=new Float32Array(3)
u[0]=0
u[1]=-1
u[2]=0
w.push(new T.e(u))}for(v=2*d,t=0;t<v;t=p){p=t+2
if(p>=y.length)return H.c(y,p)
y.push(y[p])
u=t+3
if(u>=y.length)return H.c(y,u)
y.push(y[u])
if(p>=x.length)return H.c(x,p)
x.push(x[p])
if(u>=x.length)return H.c(x,u)
x.push(x[u])
o=y.length
if(p>=o)return H.c(y,p)
n=y[p]
if(u>=o)return H.c(y,u)
m=y[u]
u=t+4
if(u>=o)return H.c(y,u)
l=y[u]
u=new Float32Array(3)
k=new T.e(new Float32Array(3))
G.hn(n,m,l,new T.e(u),k)
w.push(k)
w.push(k)}v=[]
u=[]
j=new G.bl(!1,v,u,[],P.J())
j.a2("aTexUV")
j.bj(y)
j.az("aTexUV",x)
j.a2("aNormal")
j.aA("aNormal",w)
for(i=d*2,t=0;t<d;t=g){h=t*2+2
m=h+1
g=t+1
f=(g===d?0:g)*2+2
e=f+1
v.push(new G.ae(0,h,f))
v.push(new G.ae(1,e,m))
u.push(new G.bX(i+f,i+h,i+m,i+e))}return j},
fQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.c.O(z,$.$get$d7())
C.c.O(y,$.$get$d8())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.D)(z),++u){t=z[u]
s=J.f(t)
r=s.gW(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
r=y[r]
q=new T.e(new Float32Array(3))
q.q(r)
r=s.gS(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
q.M(0,y[r])
q.V(0,0.5)
q.E(0)
r=s.gS(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
r=y[r]
p=new T.e(new Float32Array(3))
p.q(r)
r=s.ga_(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
p.M(0,y[r])
p.V(0,0.5)
p.E(0)
r=s.ga_(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
r=y[r]
o=new T.e(new Float32Array(3))
o.q(r)
r=s.gW(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
o.M(0,y[r])
o.V(0,0.5)
o.E(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.ae(s.gW(t),n,l))
w.push(new G.ae(s.gS(t),m,n))
w.push(new G.ae(s.ga_(t),l,m))
w.push(new G.ae(n,m,l))}}k=new G.bl(!1,[],[],[],P.J())
k.a2("aTexUV")
k.a2("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.D)(z),++u){t=z[u]
s=J.f(t)
r=s.gW(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
j=y[r]
r=s.gS(t)
if(r>>>0!==r||r>=y.length)return H.c(y,r)
i=y[r]
s=s.ga_(t)
if(s>>>0!==s||s>=y.length)return H.c(y,s)
h=y[s]
s=J.f(j)
r=s.gF(j)
g=s.gm(j)
g=Math.atan2(H.a7(r),H.a7(g))
s=Math.acos(H.a7(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.f(i)
g=s.gF(i)
f=s.gm(i)
f=Math.atan2(H.a7(g),H.a7(f))
s=Math.acos(H.a7(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.f(h)
f=s.gF(h)
e=s.gm(h)
e=Math.atan2(H.a7(f),H.a7(e))
s=Math.acos(H.a7(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.aA("aNormal",[j,i,h])
k.cQ([j.a0(b),i.a0(b),h.a0(b)])
k.az("aTexUV",[new T.o(r),new T.o(g),new T.o(f)])}return k},
hN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p
z=h+1
y=g+1
x=B.i6(B.hr(new B.hO(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=[]
v=new G.bl(!1,[],[],w,P.J())
for(u=x.length,t=0;t<x.length;x.length===u||(0,H.D)(x),++t){s=x[t]
for(r=0;r<s.length;r+=2)w.push(J.bd(s[r]))}v.cU(z,y,!1)
v.cV(z,y)
v.a2("aNormal")
for(w=x.length,u=v.e,t=0;t<x.length;x.length===w||(0,H.D)(x),++t){s=x[t]
for(r=0;q=s.length,r<q;r+=2){p=r+1
if(p>=q)return H.c(s,p)
p=s[p]
u.h(0,"aNormal").push(J.bd(p))}}return v},
i6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.e(y)
w=new Float32Array(3)
v=new T.e(w)
u=new Float32Array(3)
t=new T.e(u)
for(s=b+1,r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.c(a,o)
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
x.ap(v,g)
x.ap(t,f)
q=new T.e(new Float32Array(3))
q.q(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.ap(v,g)
x.ap(t,f)
x.E(0)
q=new T.e(new Float32Array(3))
q.q(x)
m.push(q)}}return z},
hr:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.e(new Float32Array(3))
x=new T.e(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.al(0,y)
t=new T.e(new Float32Array(3))
t.q(y)
z.push(t)
t=new T.e(new Float32Array(3))
t.q(x)
z.push(t)}return z},
hO:{"^":"j:17;a,b,c,d",
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
b.sF(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",h_:{"^":"d;a,b,c",
cY:function(a){var z
a=document
z=W.bo
W.aj(a,"keydown",new D.h1(this),!1,z)
W.aj(a,"keyup",new D.h2(this),!1,z)},
p:{
h0:function(a){var z=P.H
z=new D.h_(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z))
z.cY(a)
return z}}},h1:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.M(0,J.cy(a))
z.b.M(0,a.which)}},h2:{"^":"j:8;a",
$1:function(a){var z=this.a
z.a.cc(0,J.cy(a))
z.c.M(0,a.which)}},hc:{"^":"d;a,b,c,d,e,f,r,x",
d_:function(a){var z,y
if(a==null)a=document
z=J.f(a)
y=z.gaX(a)
W.aj(y.a,y.b,new D.he(this),!1,H.G(y,0))
y=z.gaW(a)
W.aj(y.a,y.b,new D.hf(this),!1,H.G(y,0))
y=z.gaY(a)
W.aj(y.a,y.b,new D.hg(this),!1,H.G(y,0))
z=z.gaZ(a)
W.aj(z.a,z.b,new D.hh(this),!1,H.G(z,0))},
p:{
hd:function(a){var z=P.H
z=new D.hc(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),0,0,0,0,0)
z.d_(a)
return z}}},he:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.av(a)
y=this.a
y.r=z.gcb(a).a
y.x=z.gcb(a).b
y.d=a.movementX
y.e=a.movementY}},hf:{"^":"j:5;a",
$1:function(a){var z=J.f(a)
z.av(a)
P.ao("BUTTON "+H.b(z.gbR(a)))
z=this.a
z.a.M(0,a.button)
z.b.M(0,a.button)}},hg:{"^":"j:5;a",
$1:function(a){var z,y
z=J.f(a)
z.av(a)
y=this.a
y.a.cc(0,z.gbR(a))
y.c.M(0,a.button)}},hh:{"^":"j:18;a",
$1:function(a){var z=J.f(a)
z.av(a)
this.a.f=z.ge_(a)}},hp:{"^":"fl;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
ba:function(a){var z,y
z=C.O.e4(a,0,new A.kb())
if(typeof z!=="number")return H.u(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kb:{"^":"j:19;",
$2:function(a,b){var z,y
z=J.ax(a,J.a3(b))
if(typeof z!=="number")return H.u(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",R:{"^":"d;bv:a<",
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
k:function(a){return"[0] "+this.Z(0).k(0)+"\n[1] "+this.Z(1).k(0)+"\n[2] "+this.Z(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.c(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.R){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.ba(this.a)},
Z:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.c(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.c(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.c(y,x)
z[2]=y[x]
return new T.e(z)},
T:function(a){var z=new T.R(new Float32Array(9))
z.q(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.R(z)
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
H:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.R(z)
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
dX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
a0:function(a){var z,y
z=new Float32Array(9)
y=new T.R(z)
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
return y}},B:{"^":"d;bw:a<",
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
k:function(a){return"[0] "+this.Z(0).k(0)+"\n[1] "+this.Z(1).k(0)+"\n[2] "+this.Z(2).k(0)+"\n[3] "+this.Z(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.c(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.B){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.ba(this.a)},
Z:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.c(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.c(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.c(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.c(y,x)
z[3]=y[x]
return new T.a1(z)},
T:function(a){var z=new T.B(new Float32Array(16))
z.q(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.B(z)
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
H:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.B(z)
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
cB:function(a,b,c){var z,y,x,w,v,u
z=new Float32Array(16)
y=new T.B(z)
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
a0:function(a){return this.cB(a,null,null)},
bb:function(){var z=this.a
z[0]=0
z[1]=0
z[2]=0
z[3]=0
z[4]=0
z[5]=0
z[6]=0
z[7]=0
z[8]=0
z[9]=0
z[10]=0
z[11]=0
z[12]=0
z[13]=0
z[14]=0
z[15]=0},
K:function(){var z=this.a
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
aV:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},o:{"^":"d;bE:a<",
w:function(a,b){var z=this.a
z[0]=a
z[1]=b},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.o){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gC:function(a){return A.ba(this.a)},
H:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbE()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return new T.o(z)},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbE()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return new T.o(z)},
h:function(a,b){var z=this.a
if(b>=2)return H.c(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
V:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
a0:function(a){var z,y,x
z=new Float32Array(2)
y=new T.o(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.V(0,a)
return y},
T:function(a){var z,y
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
return new T.o(z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},e:{"^":"d;aR:a<",
t:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
q:function(a){var z,y
z=a.gaR()
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.e){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gC:function(a){return A.ba(this.a)},
H:function(a,b){var z=new T.e(new Float32Array(3))
z.q(this)
z.al(0,b)
return z},
l:function(a,b){var z=new T.e(new Float32Array(3))
z.q(this)
z.M(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=3)return H.c(z,b)
return z[b]},
gi:function(a){return Math.sqrt(this.gat())},
gat:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
E:function(a){var z,y,x
z=Math.sqrt(this.gat())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aS:function(a){var z,y
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
z=new T.e(new Float32Array(3))
z.t(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
M:function(a,b){var z,y
z=b.gaR()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
ap:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
al:function(a,b){var z,y
z=b.gaR()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
V:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
a0:function(a){var z=new T.e(new Float32Array(3))
z.q(this)
z.V(0,a)
return z},
T:function(a){var z=new T.e(new Float32Array(3))
z.q(this)
return z},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sF:function(a,b){this.a[2]=b
return b},
gS:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
p:{
C:function(a,b,c){var z=new T.e(new Float32Array(3))
z.t(a,b,c)
return z}}},a1:{"^":"d;bF:a<",
q:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a1){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.ba(this.a)},
H:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a1(z)
y.q(this)
x=b.gbF()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a1(z)
y.q(this)
x=b.gbF()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.c(z,b)
return z[b]},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
V:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
a0:function(a){var z=new T.a1(new Float32Array(4))
z.q(this)
z.V(0,a)
return z},
T:function(a){var z=new T.a1(new Float32Array(4))
z.q(this)
return z},
gS:function(a){return this.a[2]},
gW:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gaw:function(a){return this.a[3]}}}],["","",,K,{"^":"",
eu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z={}
y=document
x=new R.hU(0,0,null,null,null,null)
x.d3(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fn(null,w)
y=J.f0(w,"webgl2",P.de(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.U(P.d3('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.b(J.f1(y))
if($.ep>0)P.ao("I: "+u)
J.eJ(y,0,0,0,1)
J.be(y,2929)
y=new Float32Array(3)
u=D.h0(null)
t=D.hd(w)
s=new T.B(new Float32Array(16))
s.K()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.hp(25,10,0,0,new T.e(y),-0.02,u,t,s,new T.e(r),new T.e(q),new T.e(p),new T.e(new Float32Array(3)),"camera:orbit",!1,!0)
n=G.hG("textured",v,$.$get$ey(),$.$get$ex())
y=new Float32Array(16)
u=new Float32Array(16)
t=new T.B(new Float32Array(16))
t.K()
m=new G.hq(o,new T.B(y),new T.B(u),t,1,-20,20,-20,-20,100,P.J(),"othrogrpahic",!1,!0)
m.ac()
l=A.dq("shadow",v,null)
t=[]
l.f.push(new A.c6(n,[m],t,"objects",!1,!0))
y=new T.B(new Float32Array(16))
y.K()
u=new T.B(new Float32Array(16))
u.K()
k=new G.hs(o,50,1,0.1,1000,y,u,new T.B(new Float32Array(16)),P.J(),"perspective",!1,!0)
k.ac()
j=A.dq("perspective",v,null)
j.r&=4294950911
y=[]
j.f.push(new A.c6(n,[k],y,"objects",!1,!0))
i=G.b_("mat1")
i.d.j(0,"uColor",$.$get$cO())
h=G.b_("mat2")
h.d.j(0,"uColor",$.$get$cS())
g=G.b_("mat3")
g.d.j(0,"uColor",$.$get$cR())
f=G.b_("mat4")
f.d.j(0,"uColor",$.$get$cP())
e=G.b_("plane")
e.d.j(0,"uColor",$.$get$cQ())
u=G.bm("icosahedron-3",n,B.fQ(3,1,!0))
s=new Float32Array(9)
r=new T.B(new Float32Array(16))
r.K()
q=new T.B(new Float32Array(16))
q.K()
p=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
u=new A.b0(i,u,[],new T.R(s),r,q,new T.e(p),new T.e(d),new T.e(c),new T.e(new Float32Array(3)),"sphere",!1,!0)
u.a6(0,0,0)
s=R.dt(n,1,0,1,0,1,1,1)
r=new Float32Array(9)
q=new T.B(new Float32Array(16))
q.K()
p=new T.B(new Float32Array(16))
p.K()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
s=new A.b0(h,s,[],new T.R(r),q,p,new T.e(d),new T.e(c),new T.e(b),new T.e(new Float32Array(3)),"cube",!1,!0)
s.a6(-5,0,-5)
r=G.bm("cylinder-32",n,B.fx(3,6,2,32,!0))
q=new Float32Array(9)
p=new T.B(new Float32Array(16))
p.K()
d=new T.B(new Float32Array(16))
d.K()
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
r=new A.b0(g,r,[],new T.R(q),p,d,new T.e(c),new T.e(b),new T.e(a),new T.e(new Float32Array(3)),"cylinder",!1,!0)
r.a6(5,0,-5)
q=G.bm("torusknot",n,B.hN(!0,!0,1,2,3,1,128,16,0.4,!1))
p=new Float32Array(9)
d=new T.B(new Float32Array(16))
d.K()
c=new T.B(new Float32Array(16))
c.K()
b=new Float32Array(3)
a=new Float32Array(3)
a0=new Float32Array(3)
q=new A.b0(f,q,[],new T.R(p),d,c,new T.e(b),new T.e(a),new T.e(a0),new T.e(new Float32Array(3)),"torus",!1,!0)
q.a6(5,0,5)
p=R.dt(n,1,0,1,0,20,0.1,20)
d=new Float32Array(9)
c=new T.B(new Float32Array(16))
c.K()
b=new T.B(new Float32Array(16))
b.K()
a=new Float32Array(3)
a0=new Float32Array(3)
a1=new Float32Array(3)
p=new A.b0(e,p,[],new T.R(d),c,b,new T.e(a),new T.e(a0),new T.e(a1),new T.e(new Float32Array(3)),"cube",!1,!0)
p.a6(0,-10,0)
a2=[u,s,r,q,p]
for(a3=0;a3<5;++a3){a4=a2[a3]
t.push(a4)
y.push(a4)}y=new K.ko(w,k,m,l,j)
y.$1(null)
W.aj(window,"resize",y,!1,W.ad)
z.a=0
new K.kn(z,o,l,j,x).$1(0)},
ko:{"^":"j:20;a,b,c,d,e",
$1:function(a){var z,y,x,w,v
z=this.a
y=z.clientWidth
x=z.clientHeight
w=J.f(z)
w.sJ(z,y)
w.sI(z,x)
P.ao("size change "+H.b(y)+" "+H.b(x))
if(typeof y!=="number")return y.bh()
z=C.b.a3(y,2)
this.b.aB(z,x)
this.c.aB(z,x)
w=this.d
w.z=z
w.Q=x
v=this.e
v.z=z
v.Q=x
w.x=z}},
kn:{"^":"j:21;a,b,c,d,e",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aR(b2)
y.H(b2,z.a)
z.a=y.l(b2,0)
y=this.b
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
v=C.a.dT(y.id,-1.4707963267948965,1.4707963267948965)
y.id=v
u=y.fy
t=y.go
s=u*Math.cos(v)
y.a6(s*Math.cos(t),u*Math.sin(v),s*Math.sin(t))
t=y.k2
v=y.d.a
u=t.a
v[12]=v[12]+u[0]
v[13]=v[13]+u[1]
v[14]=v[14]+u[2]
r=v[12]
q=v[13]
p=v[14]
o=new T.e(new Float32Array(3))
o.t(0,1,0)
u=y.e
n=u.a
n[0]=v[12]
n[1]=v[13]
n[2]=v[14]
m=u.H(0,t)
m.E(0)
l=o.bY(m)
l.E(0)
k=m.bY(l)
k.E(0)
t=l.aS(u)
n=k.aS(u)
u=m.aS(u)
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
a=Math.sqrt(i.gat())
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
w.c.ag(0)
w.b.ag(0)
x.e=0
x.d=0
x.f=0
x.c.ag(0)
x.b.ag(0)
this.c.bl()
this.d.bl()
C.a5.gdL(window).ce(this)
this.e.d6(z.a)}}},1]]
setupProgram(dart,0,0)
J.q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.da.prototype}if(typeof a=="string")return J.aG.prototype
if(a==null)return J.fY.prototype
if(typeof a=="boolean")return J.fX.prototype
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.d)return a
return J.b8(a)}
J.k7=function(a){if(typeof a=="number")return J.aF.prototype
if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.d)return a
return J.b8(a)}
J.aa=function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.d)return a
return J.b8(a)}
J.b7=function(a){if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.d)return a
return J.b8(a)}
J.aR=function(a){if(typeof a=="number")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.b5.prototype
return a}
J.k8=function(a){if(typeof a=="number")return J.aF.prototype
if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.b5.prototype
return a}
J.eq=function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.b5.prototype
return a}
J.f=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
return a}if(a instanceof P.d)return a
return J.b8(a)}
J.ax=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.k7(a).l(a,b)}
J.L=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).G(a,b)}
J.P=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aR(a).aj(a,b)}
J.aU=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aR(a).a5(a,b)}
J.eB=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aR(a).H(a,b)}
J.aV=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kl(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aa(a).h(a,b)}
J.eC=function(a,b,c,d){return J.f(a).dv(a,b,c,d)}
J.cp=function(a,b){return J.f(a).bG(a,b)}
J.eD=function(a,b,c,d){return J.f(a).bH(a,b,c,d)}
J.cq=function(a,b,c){return J.f(a).bJ(a,b,c)}
J.eE=function(a,b){return J.f(a).dN(a,b)}
J.bJ=function(a,b,c){return J.f(a).bK(a,b,c)}
J.eF=function(a,b,c){return J.f(a).bM(a,b,c)}
J.cr=function(a,b,c){return J.f(a).bN(a,b,c)}
J.bc=function(a,b){return J.f(a).dQ(a,b)}
J.eG=function(a,b){return J.f(a).bO(a,b)}
J.eH=function(a,b,c){return J.f(a).bP(a,b,c)}
J.cs=function(a,b,c,d){return J.f(a).bQ(a,b,c,d)}
J.eI=function(a,b){return J.b7(a).bS(a,b)}
J.eJ=function(a,b,c,d,e){return J.f(a).bT(a,b,c,d,e)}
J.bd=function(a){return J.f(a).T(a)}
J.ct=function(a,b){return J.eq(a).dU(a,b)}
J.eK=function(a,b){return J.k8(a).X(a,b)}
J.bK=function(a,b,c){return J.aa(a).dW(a,b,c)}
J.bL=function(a){return J.f(a).bV(a)}
J.eL=function(a){return J.f(a).bW(a)}
J.eM=function(a){return J.f(a).dZ(a)}
J.eN=function(a,b){return J.f(a).bZ(a,b)}
J.bM=function(a,b){return J.f(a).c_(a,b)}
J.eO=function(a,b,c,d){return J.f(a).c0(a,b,c,d)}
J.eP=function(a,b,c,d,e){return J.f(a).e0(a,b,c,d,e)}
J.eQ=function(a,b,c,d,e){return J.f(a).c1(a,b,c,d,e)}
J.eR=function(a,b,c,d,e,f){return J.f(a).e1(a,b,c,d,e,f)}
J.cu=function(a,b){return J.b7(a).v(a,b)}
J.be=function(a,b){return J.f(a).c2(a,b)}
J.eS=function(a,b){return J.f(a).c3(a,b)}
J.eT=function(a){return J.f(a).e2(a)}
J.cv=function(a,b){return J.b7(a).B(a,b)}
J.cw=function(a){return J.f(a).gdM(a)}
J.eU=function(a){return J.f(a).gaT(a)}
J.ay=function(a){return J.f(a).gR(a)}
J.a3=function(a){return J.q(a).gC(a)}
J.aW=function(a){return J.b7(a).gN(a)}
J.a4=function(a){return J.aa(a).gi(a)}
J.eV=function(a){return J.f(a).gca(a)}
J.eW=function(a){return J.f(a).gb_(a)}
J.cx=function(a){return J.f(a).ga1(a)}
J.eX=function(a){return J.f(a).gej(a)}
J.eY=function(a){return J.f(a).gci(a)}
J.eZ=function(a){return J.f(a).gaw(a)}
J.cy=function(a){return J.f(a).ger(a)}
J.bN=function(a){return J.f(a).gm(a)}
J.bO=function(a){return J.f(a).gn(a)}
J.cz=function(a){return J.f(a).gF(a)}
J.f_=function(a){return J.f(a).b2(a)}
J.f0=function(a,b,c){return J.f(a).cA(a,b,c)}
J.f1=function(a){return J.f(a).ax(a)}
J.f2=function(a,b){return J.f(a).b3(a,b)}
J.f3=function(a,b,c){return J.f(a).b4(a,b,c)}
J.cA=function(a,b,c){return J.f(a).b7(a,b,c)}
J.f4=function(a,b){return J.f(a).c8(a,b)}
J.cB=function(a){return J.b7(a).ef(a)}
J.f5=function(a,b){return J.f(a).sar(a,b)}
J.f6=function(a,b,c,d){return J.f(a).bf(a,b,c,d)}
J.cC=function(a){return J.aR(a).ek(a)}
J.f7=function(a){return J.eq(a).em(a)}
J.az=function(a){return J.q(a).k(a)}
J.f8=function(a,b,c,d){return J.f(a).eo(a,b,c,d)}
J.f9=function(a,b,c){return J.f(a).cj(a,b,c)}
J.fa=function(a,b,c){return J.f(a).ck(a,b,c)}
J.bP=function(a,b,c){return J.f(a).cl(a,b,c)}
J.fb=function(a,b,c){return J.f(a).cm(a,b,c)}
J.cD=function(a,b,c){return J.f(a).cn(a,b,c)}
J.cE=function(a,b,c){return J.f(a).co(a,b,c)}
J.cF=function(a,b,c){return J.f(a).cp(a,b,c)}
J.cG=function(a,b,c,d){return J.f(a).cq(a,b,c,d)}
J.cH=function(a,b,c,d){return J.f(a).cr(a,b,c,d)}
J.fc=function(a,b){return J.f(a).ct(a,b)}
J.fd=function(a,b,c){return J.f(a).ep(a,b,c)}
J.fe=function(a,b,c,d,e,f,g){return J.f(a).cu(a,b,c,d,e,f,g)}
J.ff=function(a,b,c,d,e){return J.f(a).cw(a,b,c,d,e)}
I.av=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bQ.prototype
C.n=W.ft.prototype
C.C=W.fB.prototype
C.D=J.h.prototype
C.c=J.aD.prototype
C.t=J.da.prototype
C.b=J.db.prototype
C.a=J.aF.prototype
C.i=J.aG.prototype
C.K=J.aH.prototype
C.O=H.hi.prototype
C.P=W.hk.prototype
C.w=J.ht.prototype
C.B=W.i3.prototype
C.q=J.b5.prototype
C.a5=W.ic.prototype
C.f=new P.j7()
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
C.L=H.A(I.av(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.M=I.av(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.N=I.av([])
C.o=H.A(I.av(["bind","if","ref","repeat","syntax"]),[P.m])
C.p=H.A(I.av(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
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
$.Z=0
$.aA=null
$.cK=null
$.es=null
$.ej=null
$.ew=null
$.bE=null
$.bF=null
$.cm=null
$.ar=null
$.aO=null
$.aP=null
$.cf=!1
$.x=C.f
$.a5=null
$.bV=null
$.d1=null
$.d0=null
$.cZ=null
$.cY=null
$.cX=null
$.cW=null
$.ep=0
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
I.$lazy(y,x,w)}})(["cU","$get$cU",function(){return H.er("_$dart_dartClosure")},"c_","$get$c_",function(){return H.er("_$dart_js")},"dF","$get$dF",function(){return H.a0(H.bz({
toString:function(){return"$receiver$"}}))},"dG","$get$dG",function(){return H.a0(H.bz({$method$:null,
toString:function(){return"$receiver$"}}))},"dH","$get$dH",function(){return H.a0(H.bz(null))},"dI","$get$dI",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dM","$get$dM",function(){return H.a0(H.bz(void 0))},"dN","$get$dN",function(){return H.a0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dK","$get$dK",function(){return H.a0(H.dL(null))},"dJ","$get$dJ",function(){return H.a0(function(){try{null.$method$}catch(z){return z.message}}())},"dP","$get$dP",function(){return H.a0(H.dL(void 0))},"dO","$get$dO",function(){return H.a0(function(){try{(void 0).$method$}catch(z){return z.message}}())},"ca","$get$ca",function(){return P.ih()},"d6","$get$d6",function(){var z,y
z=P.b1
y=new P.ak(0,P.ie(),null,[z])
y.dd(null,z)
return y},"aQ","$get$aQ",function(){return[]},"cT","$get$cT",function(){return{}},"e_","$get$e_",function(){return P.c2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cc","$get$cc",function(){return P.J()},"dw","$get$dw",function(){return new G.dD(1281,0,4294967295)},"cJ","$get$cJ",function(){return new G.dC(1281,1281,1281)},"X","$get$X",function(){return P.de(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.z,"aColorAlpha",C.T,"aPosition",C.x,"aTexUV",C.a_,"aNormal",C.a2,"aBinormal",C.S,"aCenter",C.y,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a4,"aBitangent",C.Q,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.z,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.x,"vPositionFromLight",C.R,"vCenter",C.y,"vDepth",C.Y,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a3,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a1,"uAnimationTable",C.h,"uTime",C.a0,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.V,"uLightDescs",C.W,"uLightCount",C.e,"uLightTypes",C.X,"uBumpScale",C.Z,"uNormalScale",C.U])},"cQ","$get$cQ",function(){return T.C(0.8,0.8,0.8)},"cO","$get$cO",function(){return T.C(0,0,1)},"cS","$get$cS",function(){return T.C(1,0,0)},"cR","$get$cR",function(){return T.C(0,1,0)},"cP","$get$cP",function(){return T.C(0,1,1)},"ey","$get$ey",function(){var z=G.ds("SolidColor")
z.cO(["aPosition"])
z.bi(["uPerspectiveViewMatrix","uModelMatrix"])
z.bn(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"ex","$get$ex",function(){var z=G.ds("SolidColorF")
z.bi(["uColor"])
z.bn(["oFragColor = vec4( uColor, 1.0 );"])
return z},"dW","$get$dW",function(){return[T.C(0,0,1),T.C(0,0,-1),T.C(0,1,0),T.C(0,-1,0),T.C(1,0,0),T.C(-1,0,0)]},"d7","$get$d7",function(){return[G.F(0,11,5),G.F(0,5,1),G.F(0,1,7),G.F(0,7,10),G.F(0,10,11),G.F(1,5,9),G.F(5,11,4),G.F(11,10,2),G.F(10,7,6),G.F(7,1,8),G.F(3,9,4),G.F(3,4,2),G.F(3,2,6),G.F(3,6,8),G.F(3,8,9),G.F(4,9,5),G.F(2,4,11),G.F(6,2,10),G.F(8,6,7),G.F(9,8,1)]},"ez","$get$ez",function(){return(1+P.ks(5))/2},"d8","$get$d8",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$ez()
y=T.C(-1,z,0)
y.E(0)
x=T.C(1,z,0)
x.E(0)
if(typeof z!=="number")return z.es()
w=T.C(-1,-z,0)
w.E(0)
v=T.C(1,-z,0)
v.E(0)
u=T.C(0,-1,z)
u.E(0)
t=T.C(0,1,z)
t.E(0)
s=T.C(0,-1,-z)
s.E(0)
r=T.C(0,1,-z)
r.E(0)
q=T.C(z,0,-1)
q.E(0)
p=T.C(z,0,1)
p.E(0)
o=T.C(-z,0,-1)
o.E(0)
z=T.C(-z,0,1)
z.E(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.N]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.m,args:[P.H]},{func:1,args:[W.bo]},{func:1,ret:P.ch,args:[W.ap,P.m,P.m,W.cb]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aL]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aL]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[P.am,T.e]},{func:1,args:[W.aM]},{func:1,args:[P.H,P.d]},{func:1,v:true,args:[W.ad]},{func:1,v:true,args:[P.aS]},{func:1,ret:P.H,args:[,,]}]
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
if(x==y)H.ku(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(K.eu,[])
else K.eu([])})})()
//# sourceMappingURL=ortho.dart.js.map
