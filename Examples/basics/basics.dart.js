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
var d=supportsDirectProtoAccess&&b2!="c"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cC"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cC"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cC(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aw=function(){}
var dart=[["","",,H,{"^":"",mh:{"^":"c;a"}}],["","",,J,{"^":"",
p:function(a){return void 0},
cF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bd:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cE==null){H.kU()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.e5("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cc()]
if(v!=null)return v
v=H.kY(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$cc(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"c;",
G:function(a,b){return a===b},
gC:function(a){return H.aN(a)},
k:["cU",function(a){return"Instance of '"+H.aO(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hq:{"^":"h;",
k:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iscB:1},
hr:{"^":"h;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gC:function(a){return 0},
$isb5:1},
cd:{"^":"h;",
gC:function(a){return 0},
k:["cW",function(a){return String(a)}]},
hW:{"^":"cd;"},
b9:{"^":"cd;"},
aK:{"^":"cd;",
k:function(a){var z=a[$.$get$dc()]
return z==null?this.cW(a):J.aC(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aG:{"^":"h;$ti",
O:function(a,b){var z,y
if(!!a.fixed$length)H.Z(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
B:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.O(a))}},
ad:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
bi:function(a,b){return H.dN(a,b,null,H.G(a,0))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
geo:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cb())},
cO:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.Z(P.r("setRange"))
P.i3(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.I()
if(typeof b!=="number")return H.v(b)
z=c-b
if(z===0)return
y=J.p(d)
if(!!y.$isj){x=e
w=d}else{w=y.bi(d,e).eB(0,!1)
x=0}y=J.a4(w)
v=y.gj(w)
if(typeof v!=="number")return H.v(v)
if(x+z>v)throw H.a(H.hn())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
am:function(a,b,c,d){return this.cO(a,b,c,d,0)},
bN:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.O(a))}return!1},
cP:function(a,b){if(!!a.immutable$list)H.Z(P.r("sort"))
H.ik(a,J.ks())},
aC:function(a){return this.cP(a,null)},
A:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
k:function(a){return P.ca(a,"[","]")},
gN:function(a){return new J.fG(a,a.length,0,null,[H.G(a,0)])},
gC:function(a){return H.aN(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Z(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.d0(b,"newLength",null))
if(b<0)throw H.a(P.ar(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ag(a,b))
if(b>=a.length||b<0)throw H.a(H.ag(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.Z(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.ag(a,b))
if(b>=a.length||b<0)throw H.a(H.ag(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.c.l(a.length,C.c.gj(b))
y=H.A([],[H.G(a,0)])
this.sj(y,z)
this.am(y,0,a.length,a)
this.am(y,a.length,z,b)
return y},
$iso:1,
$aso:I.aw,
$isj:1,
q:{
aH:function(a){a.fixed$length=Array
return a},
mf:[function(a,b){return J.f2(a,b)},"$2","ks",8,0,23]}},
mg:{"^":"aG;$ti"},
fG:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aI:{"^":"h;",
Z:function(a,b){var z
if(typeof b!=="number")throw H.a(H.Y(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaw(b)
if(this.gaw(a)===z)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw:function(a){return a===0?1/a<0:a<0},
eA:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.r(""+a+".toInt()"))},
e2:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
e3:function(a,b,c){if(this.Z(b,c)>0)throw H.a(H.Y(b))
if(this.Z(a,b)<0)return b
if(this.Z(a,c)>0)return c
return a},
eD:function(a,b){var z
if(b>20)throw H.a(P.ar(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaw(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a+b},
I:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a-b},
cY:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bH(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.bH(a,b)},
bH:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bF:function(a,b){var z
if(a>0)z=this.dP(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dP:function(a,b){return b>31?0:a>>>b},
a5:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a<b},
al:function(a,b){if(typeof b!=="number")throw H.a(H.Y(b))
return a>b},
$isao:1,
$isaV:1},
dt:{"^":"aI;",$isI:1},
ds:{"^":"aI;"},
aJ:{"^":"h;",
e4:function(a,b){if(b>=a.length)H.Z(H.ag(a,b))
return a.charCodeAt(b)},
bx:function(a,b){if(b>=a.length)throw H.a(H.ag(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.d0(b,null,null))
return a+b},
cR:function(a,b,c){var z
if(c>a.length)throw H.a(P.ar(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cQ:function(a,b){return this.cR(a,b,0)},
bk:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.Z(H.Y(c))
if(b<0)throw H.a(P.bx(b,null,null))
if(typeof c!=="number")return H.v(c)
if(b>c)throw H.a(P.bx(b,null,null))
if(c>a.length)throw H.a(P.bx(c,null,null))
return a.substring(b,c)},
cS:function(a,b){return this.bk(a,b,null)},
eC:function(a){return a.toLowerCase()},
e5:function(a,b,c){if(c>a.length)throw H.a(P.ar(c,0,a.length,null,null))
return H.l4(a,b,c)},
Z:function(a,b){var z
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
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.ag(a,b))
return a[b]},
$iso:1,
$aso:I.aw,
$isn:1}}],["","",,H,{"^":"",
cb:function(){return new P.bB("No element")},
ho:function(){return new P.bB("Too many elements")},
hn:function(){return new P.bB("Too few elements")},
ik:function(a,b){var z=J.a7(a)
if(typeof z!=="number")return z.I()
H.b7(a,0,z-1,b)},
b7:function(a,b,c,d){if(c-b<=32)H.ij(a,b,c,d)
else H.ii(a,b,c,d)},
ij:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a4(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.S(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
ii:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.c.ab(c-b+1,6)
y=b+z
x=c-z
w=C.c.ab(b+c,2)
v=w-z
u=w+z
t=J.a4(a)
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
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.N(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.p(i)
if(h.G(i,0))continue
if(h.a5(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aU(i)
if(h.al(i,0)){--l
continue}else{g=l-1
if(h.a5(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aX(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.S(d.$2(j,p),0))for(;!0;)if(J.S(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aX(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
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
H.b7(a,b,m-2,d)
H.b7(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.N(d.$2(t.h(a,m),r),0);)++m
for(;J.N(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.N(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.N(d.$2(j,p),0))for(;!0;)if(J.N(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aX(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.b7(a,m,l,d)}else H.b7(a,m,l,d)},
c2:{"^":"bt;$ti"},
bv:{"^":"c2;$ti",
gN:function(a){return new H.dy(this,this.gj(this),0,null,[H.be(this,"bv",0)])},
B:function(a,b){var z,y
z=this.gj(this)
if(typeof z!=="number")return H.v(z)
y=0
for(;y<z;++y){b.$1(this.w(0,y))
if(z!==this.gj(this))throw H.a(P.O(this))}},
b6:function(a,b){return this.cV(0,b)}},
iz:{"^":"bv;a,b,c,$ti",
dh:function(a,b,c,d){},
gdD:function(){var z=J.a7(this.a)
return z},
gdQ:function(){var z,y
z=J.a7(this.a)
y=this.b
if(typeof z!=="number")return H.v(z)
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a7(this.a)
y=this.b
if(typeof z!=="number")return H.v(z)
if(y>=z)return 0
return z-y},
w:function(a,b){var z,y
z=this.gdQ()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.v(b)
y=z+b
if(!(b<0)){z=this.gdD()
if(typeof z!=="number")return H.v(z)
z=y>=z}else z=!0
if(z)throw H.a(P.y(b,this,"index",null,null))
return J.cL(this.a,y)},
eB:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a4(y)
w=x.gj(y)
if(typeof w!=="number")return w.I()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.A(u,this.$ti)
for(s=0;s<v;++s){u=x.w(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
u=x.gj(y)
if(typeof u!=="number")return u.a5()
if(u<w)throw H.a(P.O(this))}return t},
q:{
dN:function(a,b,c,d){var z=new H.iz(a,b,c,[d])
z.dh(a,b,c,d)
return z}}},
dy:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.a4(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.O(z))
w=this.c
if(typeof x!=="number")return H.v(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
hB:{"^":"bv;a,b,$ti",
gj:function(a){return J.a7(this.a)},
w:function(a,b){return this.b.$1(J.cL(this.a,b))},
$asc2:function(a,b){return[b]},
$asbv:function(a,b){return[b]},
$asbt:function(a,b){return[b]}},
e7:{"^":"bt;a,b,$ti",
gN:function(a){return new H.iJ(J.b0(this.a),this.b,this.$ti)}},
iJ:{"^":"hp;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gD(z))===!0)return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bq:{"^":"c;$ti"}}],["","",,H,{"^":"",
kM:function(a){return init.types[a]},
kX:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.p(a).$isq},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aC(a)
if(typeof z!=="string")throw H.a(H.Y(a))
return z},
aN:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aO:function(a){var z,y,x,w,v,u,t,s,r
z=J.p(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.p(a).$isb9){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bx(w,0)===36)w=C.i.cS(w,1)
r=H.bO(H.ax(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
K:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i2:function(a){return a.b?H.K(a).getUTCFullYear()+0:H.K(a).getFullYear()+0},
i0:function(a){return a.b?H.K(a).getUTCMonth()+1:H.K(a).getMonth()+1},
hX:function(a){return a.b?H.K(a).getUTCDate()+0:H.K(a).getDate()+0},
hY:function(a){return a.b?H.K(a).getUTCHours()+0:H.K(a).getHours()+0},
i_:function(a){return a.b?H.K(a).getUTCMinutes()+0:H.K(a).getMinutes()+0},
i1:function(a){return a.b?H.K(a).getUTCSeconds()+0:H.K(a).getSeconds()+0},
hZ:function(a){return a.b?H.K(a).getUTCMilliseconds()+0:H.K(a).getMilliseconds()+0},
v:function(a){throw H.a(H.Y(a))},
d:function(a,b){if(a==null)J.a7(a)
throw H.a(H.ag(a,b))},
ag:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a8(!0,b,"index",null)
z=J.a7(a)
if(!(b<0)){if(typeof z!=="number")return H.v(z)
y=b>=z}else y=!0
if(y)return P.y(b,a,"index",null,z)
return P.bx(b,"index",null)},
Y:function(a){return new P.a8(!0,a,null,null)},
ae:function(a){if(typeof a!=="number")throw H.a(H.Y(a))
return a},
a:function(a){var z
if(a==null)a=new P.cl()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eT})
z.name=""}else z.toString=H.eT
return z},
eT:function(){return J.aC(this.dartException)},
Z:function(a){throw H.a(a)},
B:function(a){throw H.a(P.O(a))},
M:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l6(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bF(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ce(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dF(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dT()
u=$.$get$dU()
t=$.$get$dV()
s=$.$get$dW()
r=$.$get$e_()
q=$.$get$e0()
p=$.$get$dY()
$.$get$dX()
o=$.$get$e2()
n=$.$get$e1()
m=v.V(y)
if(m!=null)return z.$1(H.ce(y,m))
else{m=u.V(y)
if(m!=null){m.method="call"
return z.$1(H.ce(y,m))}else{m=t.V(y)
if(m==null){m=s.V(y)
if(m==null){m=r.V(y)
if(m==null){m=q.V(y)
if(m==null){m=p.V(y)
if(m==null){m=s.V(y)
if(m==null){m=o.V(y)
if(m==null){m=n.V(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dF(y,m))}}return z.$1(new H.iG(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dL()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a8(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dL()
return a},
a5:function(a){var z
if(a==null)return new H.ep(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ep(a,null)},
kI:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kW:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.dm("Unsupported number of arguments for wrapped closure"))},
af:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kW)
a.$identity=z
return z},
fQ:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.p(c).$isj){z.$reflectionInfo=c
x=H.i5(z).r}else x=c
w=d?Object.create(new H.il().constructor.prototype):Object.create(new H.bZ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a_
$.a_=J.aA(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.d7(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kM,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.d5:H.c_
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.d7(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fN:function(a,b,c,d){var z=H.c_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d7:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fP(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fN(y,!w,z,b)
if(y===0){w=$.a_
$.a_=J.aA(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aD
if(v==null){v=H.bl("self")
$.aD=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a_
$.a_=J.aA(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aD
if(v==null){v=H.bl("self")
$.aD=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fO:function(a,b,c,d){var z,y
z=H.c_
y=H.d5
switch(b?-1:a){case 0:throw H.a(H.ib("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fP:function(a,b){var z,y,x,w,v,u,t,s
z=$.aD
if(z==null){z=H.bl("self")
$.aD=z}y=$.d4
if(y==null){y=H.bl("receiver")
$.d4=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fO(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.a_
$.a_=J.aA(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.a_
$.a_=J.aA(y,1)
return new Function(z+H.b(y)+"}")()},
cC:function(a,b,c,d,e,f){var z,y
z=J.aH(b)
y=!!J.p(c).$isj?J.aH(c):c
return H.fQ(a,z,y,!!d,e,f)},
l1:function(a,b){var z=J.a4(b)
throw H.a(H.d6(a,z.bk(b,3,z.gj(b))))},
ah:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else z=!0
if(z)return a
H.l1(a,b)},
cD:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eF:function(a,b){var z,y
if(a==null)return!1
z=H.cD(J.p(a))
if(z==null)y=!1
else y=H.eK(z,b)
return y},
kA:function(a){var z
if(a instanceof H.i){z=H.cD(J.p(a))
if(z!=null)return H.cG(z,null)
return"Closure"}return H.aO(a)},
l5:function(a){throw H.a(new P.fV(a))},
eI:function(a){return init.getIsolateTag(a)},
A:function(a,b){a.$ti=b
return a},
ax:function(a){if(a==null)return
return a.$ti},
nE:function(a,b,c){return H.aW(a["$as"+H.b(c)],H.ax(b))},
bf:function(a,b,c,d){var z=H.aW(a["$as"+H.b(c)],H.ax(b))
return z==null?null:z[d]},
be:function(a,b,c){var z=H.aW(a["$as"+H.b(b)],H.ax(a))
return z==null?null:z[c]},
G:function(a,b){var z=H.ax(a)
return z==null?null:z[b]},
cG:function(a,b){var z=H.az(a,b)
return z},
az:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bO(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.az(z,b)
return H.kr(a,b)}return"unknown-reified-type"},
kr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.az(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.az(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.az(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kH(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.az(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bO:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cp("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.az(u,c)}return w?"":"<"+z.k(0)+">"},
kL:function(a){var z,y,x
if(a instanceof H.i){z=H.cD(J.p(a))
if(z!=null)return H.cG(z,null)}y=J.p(a).constructor.builtin$cls
if(a==null)return y
x=H.bO(a.$ti,0,null)
return y+x},
aW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bb:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ax(a)
y=J.p(a)
if(y[b]==null)return!1
return H.eB(H.aW(y[d],z),c)},
bh:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bb(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bO(c,0,null)
throw H.a(H.d6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eB:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.R(a[y],b[y]))return!1
return!0},
nC:function(a,b,c){return a.apply(b,H.aW(J.p(b)["$as"+H.b(c)],H.ax(b)))},
R:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b5")return!0
if('func' in b)return H.eK(a,b)
if('func' in a)return b.builtin$cls==="m8"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cG(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eB(H.aW(u,z),x)},
eA:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.R(z,v)||H.R(v,z)))return!1}return!0},
kB:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aH(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.R(v,u)||H.R(u,v)))return!1}return!0},
eK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.R(z,y)||H.R(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eA(x,w,!1))return!1
if(!H.eA(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.R(o,n)||H.R(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.R(o,n)||H.R(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.R(o,n)||H.R(n,o)))return!1}}return H.kB(a.named,b.named)},
nD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kY:function(a){var z,y,x,w,v,u
z=$.eJ.$1(a)
y=$.bM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bN[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ez.$2(a,z)
if(z!=null){y=$.bM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bN[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bP(x)
$.bM[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bN[z]=x
return x}if(v==="-"){u=H.bP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eM(a,x)
if(v==="*")throw H.a(P.e5(z))
if(init.leafTags[z]===true){u=H.bP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eM(a,x)},
eM:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cF(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bP:function(a){return J.cF(a,!1,null,!!a.$isq)},
l0:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bP(z)
else return J.cF(z,c,null,null)},
kU:function(){if(!0===$.cE)return
$.cE=!0
H.kV()},
kV:function(){var z,y,x,w,v,u,t,s
$.bM=Object.create(null)
$.bN=Object.create(null)
H.kQ()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eP.$1(v)
if(u!=null){t=H.l0(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kQ:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.av(C.H,H.av(C.M,H.av(C.u,H.av(C.u,H.av(C.L,H.av(C.I,H.av(C.J(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eJ=new H.kR(v)
$.ez=new H.kS(u)
$.eP=new H.kT(t)},
av:function(a,b){return a(b)||b},
l4:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
i4:{"^":"c;a,b,c,d,e,f,r,x",q:{
i5:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aH(z)
y=z[0]
x=z[1]
return new H.i4(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
iE:{"^":"c;a,b,c,d,e,f",
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
q:{
a1:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dZ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hS:{"^":"J;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
q:{
dF:function(a,b){return new H.hS(a,b==null?null:b.method)}}},
hs:{"^":"J;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
q:{
ce:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hs(a,y,z?null:b.receiver)}}},
iG:{"^":"J;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l6:{"^":"i:0;a",
$1:function(a){if(!!J.p(a).$isJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ep:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaP:1},
i:{"^":"c;",
k:function(a){return"Closure '"+H.aO(this).trim()+"'"},
gcJ:function(){return this},
gcJ:function(){return this}},
dO:{"^":"i;"},
il:{"^":"dO;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bZ:{"^":"dO;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.aN(this.a)
else y=typeof z!=="object"?J.a6(z):H.aN(z)
return(y^H.aN(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aO(z)+"'")},
q:{
c_:function(a){return a.a},
d5:function(a){return a.c},
bl:function(a){var z,y,x,w,v
z=new H.bZ("self","target","receiver","name")
y=J.aH(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fL:{"^":"J;a",
k:function(a){return this.a},
q:{
d6:function(a,b){return new H.fL("CastError: "+H.b(P.c4(a))+": type '"+H.kA(a)+"' is not a subtype of type '"+b+"'")}}},
ia:{"^":"J;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
q:{
ib:function(a){return new H.ia(a)}}},
e3:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gC:function(a){return J.a6(this.a)},
G:function(a,b){if(b==null)return!1
return b instanceof H.e3&&J.N(this.a,b.a)}},
du:{"^":"ci;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gP:function(a){return new H.hy(this,[H.G(this,0)])},
au:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bz(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bz(y,b)}else return this.em(b)},
em:function(a){var z=this.d
if(z==null)return!1
return this.aX(this.aL(z,J.a6(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.as(z,b)
x=y==null?null:y.gak()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.as(w,b)
x=y==null?null:y.gak()
return x}else return this.en(b)},
en:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aL(z,J.a6(a)&0x3ffffff)
x=this.aX(y,a)
if(x<0)return
return y[x].gak()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aO()
this.b=z}this.bs(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aO()
this.c=y}this.bs(y,b,c)}else{x=this.d
if(x==null){x=this.aO()
this.d=x}w=J.a6(b)&0x3ffffff
v=this.aL(x,w)
if(v==null)this.aS(x,w,[this.aE(b,c)])
else{u=this.aX(v,b)
if(u>=0)v[u].sak(c)
else v.push(this.aE(b,c))}}},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.O(this))
z=z.c}},
bs:function(a,b,c){var z=this.as(a,b)
if(z==null)this.aS(a,b,this.aE(b,c))
else z.sak(c)},
bt:function(){this.r=this.r+1&67108863},
aE:function(a,b){var z,y
z=new H.hx(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bt()
return z},
aX:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].gel(),b))return y
return-1},
k:function(a){return P.dz(this)},
as:function(a,b){return a[b]},
aL:function(a,b){return a[b]},
aS:function(a,b,c){a[b]=c},
dB:function(a,b){delete a[b]},
bz:function(a,b){return this.as(a,b)!=null},
aO:function(){var z=Object.create(null)
this.aS(z,"<non-identifier-key>",z)
this.dB(z,"<non-identifier-key>")
return z}},
hx:{"^":"c;el:a<,ak:b@,c,d"},
hy:{"^":"c2;a,$ti",
gj:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.aj(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
B:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.O(z))
y=y.c}}},
aj:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.O(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kR:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
kS:{"^":"i:10;a",
$2:function(a,b){return this.a(a,b)}},
kT:{"^":"i:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
kH:function(a){return J.aH(H.A(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bK:function(a){var z,y,x
if(!!J.p(a).$iso)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a3:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.ag(b,a))},
hN:{"^":"h;","%":"DataView;ArrayBufferView;ck|ej|ek|dC|el|em|ak"},
ck:{"^":"hN;",
gj:function(a){return a.length},
$iso:1,
$aso:I.aw,
$isq:1,
$asq:I.aw},
dC:{"^":"ek;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a3(b,a,a.length)
a[b]=c},
$asbq:function(){return[P.ao]},
$ask:function(){return[P.ao]},
$isj:1,
$asj:function(){return[P.ao]},
"%":"Float64Array"},
ak:{"^":"em;",
i:function(a,b,c){H.a3(b,a,a.length)
a[b]=c},
$asbq:function(){return[P.I]},
$ask:function(){return[P.I]},
$isj:1,
$asj:function(){return[P.I]}},
hM:{"^":"dC;",$isc5:1,"%":"Float32Array"},
my:{"^":"ak;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mz:{"^":"ak;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
$ishl:1,
"%":"Int32Array"},
mA:{"^":"ak;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mB:{"^":"ak;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mC:{"^":"ak;",
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mD:{"^":"ak;",
gj:function(a){return a.length},
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mE:{"^":"ak;",
gj:function(a){return a.length},
h:function(a,b){H.a3(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ej:{"^":"ck+k;"},
ek:{"^":"ej+bq;"},
el:{"^":"ck+k;"},
em:{"^":"el+bq;"}}],["","",,P,{"^":"",
iO:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kC()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.af(new P.iQ(z),1)).observe(y,{childList:true})
return new P.iP(z,y,x)}else if(self.setImmediate!=null)return P.kD()
return P.kE()},
no:[function(a){self.scheduleImmediate(H.af(new P.iR(a),0))},"$1","kC",4,0,6],
np:[function(a){self.setImmediate(H.af(new P.iS(a),0))},"$1","kD",4,0,6],
nq:[function(a){P.k2(0,a)},"$1","kE",4,0,6],
kv:function(a,b){if(H.eF(a,{func:1,args:[P.b5,P.b5]})){b.toString
return a}else{b.toString
return a}},
hd:function(a,b,c){var z
if(a==null)a=new P.cl()
z=$.t
if(z!==C.d)z.toString
z=new P.L(0,z,null,[c])
z.dw(a,b)
return z},
he:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.L(0,$.t,null,[P.j])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hg(z,b,!1,y)
try{for(s=0,r=0;s<3;++s){w=a[s]
v=r
w.b5(new P.hf(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.L(0,$.t,null,[null])
r.bv(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.M(p)
t=H.a5(p)
if(z.b===0||!1)return P.hd(u,t,null)
else{z.c=u
z.d=t}}return y},
kq:function(a,b,c){$.t.toString
a.T(b,c)},
ku:function(){var z,y
for(;z=$.at,z!=null;){$.aS=null
y=z.b
$.at=y
if(y==null)$.aR=null
z.a.$0()}},
nB:[function(){$.cz=!0
try{P.ku()}finally{$.aS=null
$.cz=!1
if($.at!=null)$.$get$cu().$1(P.eC())}},"$0","eC",0,0,3],
ex:function(a){var z=new P.e8(a,null)
if($.at==null){$.aR=z
$.at=z
if(!$.cz)$.$get$cu().$1(P.eC())}else{$.aR.b=z
$.aR=z}},
kz:function(a){var z,y,x
z=$.at
if(z==null){P.ex(a)
$.aS=$.aR
return}y=new P.e8(a,null)
x=$.aS
if(x==null){y.b=z
$.aS=y
$.at=y}else{y.b=x.b
x.b=y
$.aS=y
if(y.b==null)$.aR=y}},
l2:function(a){var z=$.t
if(C.d===z){P.au(null,null,C.d,a)
return}z.toString
P.au(null,null,z,z.bQ(a))},
ky:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.M(u)
y=H.a5(u)
$.t.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aB(x)
w=t
v=x.ga8()
c.$2(w,v)}}},
kk:function(a,b,c,d){var z=a.bX(0)
if(!!J.p(z).$isab&&z!==$.$get$c6())z.cI(new P.kn(b,c,d))
else b.T(c,d)},
kl:function(a,b){return new P.km(a,b)},
ko:function(a,b,c){var z=a.bX(0)
if(!!J.p(z).$isab&&z!==$.$get$c6())z.cI(new P.kp(b,c))
else b.a9(c)},
bL:function(a,b,c,d,e){var z={}
z.a=d
P.kz(new P.kw(z,e))},
ev:function(a,b,c,d){var z,y
y=$.t
if(y===c)return d.$0()
$.t=c
z=y
try{y=d.$0()
return y}finally{$.t=z}},
ew:function(a,b,c,d,e){var z,y
y=$.t
if(y===c)return d.$1(e)
$.t=c
z=y
try{y=d.$1(e)
return y}finally{$.t=z}},
kx:function(a,b,c,d,e,f){var z,y
y=$.t
if(y===c)return d.$2(e,f)
$.t=c
z=y
try{y=d.$2(e,f)
return y}finally{$.t=z}},
au:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bQ(d):c.e_(d)
P.ex(d)},
iQ:{"^":"i:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iP:{"^":"i:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iR:{"^":"i:1;a",
$0:function(){this.a.$0()}},
iS:{"^":"i:1;a",
$0:function(){this.a.$0()}},
k1:{"^":"c;a,b,c",
dt:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.af(new P.k3(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
q:{
k2:function(a,b){var z=new P.k1(!0,null,0)
z.dt(a,b)
return z}}},
k3:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ab:{"^":"c;$ti"},
hg:{"^":"i:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.T(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.T(z.c,z.d)}},
hf:{"^":"i;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.d(x,z)
x[z]=a
if(y===0)this.c.by(x)}else if(z.b===0&&!this.e)this.c.T(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
lj:{"^":"c;$ti"},
ea:{"^":"c;$ti"},
iN:{"^":"ea;a,$ti",
aU:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bC("Future already completed"))
z.bv(b)}},
jX:{"^":"ea;a,$ti",
aU:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bC("Future already completed"))
z.a9(b)}},
ec:{"^":"c;aQ:a<,b,c,d,e,$ti",
gdV:function(){return this.b.b},
gcd:function(){return(this.c&1)!==0},
gek:function(){return(this.c&2)!==0},
gcc:function(){return this.c===8},
ei:function(a){return this.b.b.b3(this.d,a)},
ep:function(a){if(this.c!==6)return!0
return this.b.b.b3(this.d,J.aB(a))},
eh:function(a){var z,y,x
z=this.e
y=J.f(a)
x=this.b.b
if(H.eF(z,{func:1,args:[P.c,P.aP]}))return x.ew(z,y.gS(a),a.ga8())
else return x.b3(z,y.gS(a))},
ej:function(){return this.b.b.cm(this.d)}},
L:{"^":"c;bG:a<,b,dL:c<,$ti",
gdG:function(){return this.a===2},
gaM:function(){return this.a>=4},
b5:function(a,b){var z,y,x
z=$.t
if(z!==C.d){z.toString
if(b!=null)b=P.kv(b,z)}y=new P.L(0,z,null,[null])
x=b==null?1:3
this.aF(new P.ec(null,y,x,a,b,[H.G(this,0),null]))
return y},
az:function(a){return this.b5(a,null)},
cI:function(a){var z,y
z=$.t
y=new P.L(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.G(this,0)
this.aF(new P.ec(null,y,8,a,null,[z,z]))
return y},
aF:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaM()){y.aF(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.au(null,null,z,new P.j9(this,a))}},
bD:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaQ()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaM()){v.bD(a)
return}this.a=v.a
this.c=v.c}z.a=this.aR(a)
y=this.b
y.toString
P.au(null,null,y,new P.jg(z,this))}},
ah:function(){var z=this.c
this.c=null
return this.aR(z)},
aR:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaQ()
z.a=y}return y},
a9:function(a){var z,y,x
z=this.$ti
y=H.bb(a,"$isab",z,"$asab")
if(y){z=H.bb(a,"$isL",z,null)
if(z)P.bJ(a,this)
else P.ed(a,this)}else{x=this.ah()
this.a=4
this.c=a
P.as(this,x)}},
by:function(a){var z=this.ah()
this.a=4
this.c=a
P.as(this,z)},
T:[function(a,b){var z=this.ah()
this.a=8
this.c=new P.bk(a,b)
P.as(this,z)},function(a){return this.T(a,null)},"eJ","$2","$1","gaG",4,2,13],
bv:function(a){var z=H.bb(a,"$isab",this.$ti,"$asab")
if(z){this.dz(a)
return}this.a=1
z=this.b
z.toString
P.au(null,null,z,new P.jb(this,a))},
dz:function(a){var z=H.bb(a,"$isL",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.au(null,null,z,new P.jf(this,a))}else P.bJ(a,this)
return}P.ed(a,this)},
dw:function(a,b){var z
this.a=1
z=this.b
z.toString
P.au(null,null,z,new P.ja(this,a,b))},
$isab:1,
q:{
j8:function(a,b){var z=new P.L(0,$.t,null,[b])
z.a=4
z.c=a
return z},
ed:function(a,b){var z,y,x
b.a=1
try{a.b5(new P.jc(b),new P.jd(b))}catch(x){z=H.M(x)
y=H.a5(x)
P.l2(new P.je(b,z,y))}},
bJ:function(a,b){var z
for(;a.gdG();)a=a.c
if(a.gaM()){z=b.ah()
b.a=a.a
b.c=a.c
P.as(b,z)}else{z=b.c
b.a=2
b.c=a
a.bD(z)}},
as:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aB(v)
t=v.ga8()
y.toString
P.bL(null,null,y,u,t)}return}for(;b.gaQ()!=null;b=s){s=b.a
b.a=null
P.as(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gcd()||b.gcc()){q=b.gdV()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aB(v)
t=v.ga8()
y.toString
P.bL(null,null,y,u,t)
return}p=$.t
if(p==null?q!=null:p!==q)$.t=q
else p=null
if(b.gcc())new P.jj(z,x,b,w).$0()
else if(y){if(b.gcd())new P.ji(x,b,r).$0()}else if(b.gek())new P.jh(z,x,b).$0()
if(p!=null)$.t=p
y=x.b
if(!!J.p(y).$isab){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aR(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bJ(y,o)
return}}o=b.b
b=o.ah()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
j9:{"^":"i:1;a,b",
$0:function(){P.as(this.a,this.b)}},
jg:{"^":"i:1;a,b",
$0:function(){P.as(this.b,this.a.a)}},
jc:{"^":"i:0;a",
$1:function(a){var z=this.a
z.a=0
z.a9(a)}},
jd:{"^":"i:14;a",
$2:function(a,b){this.a.T(a,b)},
$1:function(a){return this.$2(a,null)}},
je:{"^":"i:1;a,b,c",
$0:function(){this.a.T(this.b,this.c)}},
jb:{"^":"i:1;a,b",
$0:function(){this.a.by(this.b)}},
jf:{"^":"i:1;a,b",
$0:function(){P.bJ(this.b,this.a)}},
ja:{"^":"i:1;a,b,c",
$0:function(){this.a.T(this.b,this.c)}},
jj:{"^":"i:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ej()}catch(w){y=H.M(w)
x=H.a5(w)
if(this.d){v=J.aB(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bk(y,x)
u.a=!0
return}if(!!J.p(z).$isab){if(z instanceof P.L&&z.gbG()>=4){if(z.gbG()===8){v=this.b
v.b=z.gdL()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.az(new P.jk(t))
v.a=!1}}},
jk:{"^":"i:0;a",
$1:function(a){return this.a}},
ji:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.ei(this.c)}catch(x){z=H.M(x)
y=H.a5(x)
w=this.a
w.b=new P.bk(z,y)
w.a=!0}}},
jh:{"^":"i:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ep(z)===!0&&w.e!=null){v=this.b
v.b=w.eh(z)
v.a=!1}}catch(u){y=H.M(u)
x=H.a5(u)
w=this.a
v=J.aB(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bk(y,x)
s.a=!0}}},
e8:{"^":"c;a,b"},
bD:{"^":"c;$ti",
B:function(a,b){var z,y
z={}
y=new P.L(0,$.t,null,[null])
z.a=null
z.a=this.aY(new P.iv(z,this,b,y),!0,new P.iw(y),y.gaG())
return y},
gj:function(a){var z,y
z={}
y=new P.L(0,$.t,null,[P.I])
z.a=0
this.aY(new P.ix(z),!0,new P.iy(z,y),y.gaG())
return y},
gee:function(a){var z,y
z={}
y=new P.L(0,$.t,null,[H.be(this,"bD",0)])
z.a=null
z.a=this.aY(new P.ir(z,this,y),!0,new P.is(y),y.gaG())
return y}},
iv:{"^":"i;a,b,c,d",
$1:function(a){P.ky(new P.it(this.c,a),new P.iu(),P.kl(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.be(this.b,"bD",0)]}}},
it:{"^":"i:1;a,b",
$0:function(){return this.a.$1(this.b)}},
iu:{"^":"i:0;",
$1:function(a){}},
iw:{"^":"i:1;a",
$0:function(){this.a.a9(null)}},
ix:{"^":"i:0;a",
$1:function(a){++this.a.a}},
iy:{"^":"i:1;a,b",
$0:function(){this.b.a9(this.a.a)}},
ir:{"^":"i;a,b,c",
$1:function(a){P.ko(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.be(this.b,"bD",0)]}}},
is:{"^":"i:1;a",
$0:function(){var z,y,x,w
try{x=H.cb()
throw H.a(x)}catch(w){z=H.M(w)
y=H.a5(w)
P.kq(this.a,z,y)}}},
iq:{"^":"c;$ti"},
kn:{"^":"i:1;a,b,c",
$0:function(){return this.a.T(this.b,this.c)}},
km:{"^":"i:15;a,b",
$2:function(a,b){P.kk(this.a,this.b,a,b)}},
kp:{"^":"i:1;a,b",
$0:function(){return this.a.a9(this.b)}},
bk:{"^":"c;S:a>,a8:b<",
k:function(a){return H.b(this.a)},
$isJ:1},
k9:{"^":"c;"},
kw:{"^":"i:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cl()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aC(y)
throw x}},
jG:{"^":"k9;",
ex:function(a){var z,y,x
try{if(C.d===$.t){a.$0()
return}P.ev(null,null,this,a)}catch(x){z=H.M(x)
y=H.a5(x)
P.bL(null,null,this,z,y)}},
ey:function(a,b){var z,y,x
try{if(C.d===$.t){a.$1(b)
return}P.ew(null,null,this,a,b)}catch(x){z=H.M(x)
y=H.a5(x)
P.bL(null,null,this,z,y)}},
e_:function(a){return new P.jI(this,a)},
bQ:function(a){return new P.jH(this,a)},
e0:function(a){return new P.jJ(this,a)},
h:function(a,b){return},
cm:function(a){if($.t===C.d)return a.$0()
return P.ev(null,null,this,a)},
b3:function(a,b){if($.t===C.d)return a.$1(b)
return P.ew(null,null,this,a,b)},
ew:function(a,b,c){if($.t===C.d)return a.$2(b,c)
return P.kx(null,null,this,a,b,c)}},
jI:{"^":"i:1;a,b",
$0:function(){return this.a.cm(this.b)}},
jH:{"^":"i:1;a,b",
$0:function(){return this.a.ex(this.b)}},
jJ:{"^":"i:0;a,b",
$1:function(a){return this.a.ey(this.b,a)}}}],["","",,P,{"^":"",
H:function(){return new H.du(0,null,null,null,null,null,0,[null,null])},
dw:function(a){return H.kI(a,new H.du(0,null,null,null,null,null,0,[null,null]))},
W:function(a,b,c,d){return new P.jt(0,null,null,null,null,null,0,[d])},
hm:function(a,b,c){var z,y
if(P.cA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aT()
y.push(a)
try{P.kt(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dM(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
ca:function(a,b,c){var z,y,x
if(P.cA(a))return b+"..."+c
z=new P.cp(b)
y=$.$get$aT()
y.push(a)
try{x=z
x.a=P.dM(x.gaa(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaa()+c
y=z.gaa()
return y.charCodeAt(0)==0?y:y},
cA:function(a){var z,y
for(z=0;y=$.$get$aT(),z<y.length;++z)if(a===y[z])return!0
return!1},
kt:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.b(z.gD(z))
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.u()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.u();t=s,s=r){r=z.gD(z);++x
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
cf:function(a,b){var z,y
z=P.W(null,null,null,b)
for(y=J.b0(a);y.u();)z.M(0,y.gD(y))
return z},
dz:function(a){var z,y,x
z={}
if(P.cA(a))return"{...}"
y=new P.cp("")
try{$.$get$aT().push(a)
x=y
x.a=x.gaa()+"{"
z.a=!0
J.cM(a,new P.hA(z,y))
z=y
z.a=z.gaa()+"}"}finally{z=$.$get$aT()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaa()
return z.charCodeAt(0)==0?z:z},
jt:{"^":"jm;a,b,c,d,e,f,r,$ti",
gN:function(a){var z=new P.cx(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
A:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dA(b)},
dA:function(a){var z=this.d
if(z==null)return!1
return this.aK(z[this.aH(a)],a)>=0},
B:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.O(this))
z=z.b}},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cy()
this.b=z}return this.bu(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cy()
this.c=y}return this.bu(y,b)}else return this.du(0,b)},
du:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cy()
this.d=z}y=this.aH(b)
x=z[y]
if(x==null)z[y]=[this.aP(b)]
else{if(this.aK(x,b)>=0)return!1
x.push(this.aP(b))}return!0},
cl:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bE(this.c,b)
else return this.dI(0,b)},
dI:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aH(b)]
x=this.aK(y,b)
if(x<0)return!1
this.bI(y.splice(x,1)[0])
return!0},
aj:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aN()}},
bu:function(a,b){if(a[b]!=null)return!1
a[b]=this.aP(b)
return!0},
bE:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bI(z)
delete a[b]
return!0},
aN:function(){this.r=this.r+1&67108863},
aP:function(a){var z,y
z=new P.ju(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aN()
return z},
bI:function(a){var z,y
z=a.gdH()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aN()},
aH:function(a){return J.a6(a)&0x3ffffff},
aK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].gdC(),b))return y
return-1},
q:{
cy:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ju:{"^":"c;dC:a<,b,dH:c<"},
cx:{"^":"c;a,b,c,d,$ti",
gD:function(a){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.O(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
jm:{"^":"ic;$ti"},
mk:{"^":"c;$ti"},
dx:{"^":"ei;$ti",$isj:1},
k:{"^":"c;$ti",
gN:function(a){return new H.dy(a,this.gj(a),0,null,[H.bf(this,a,"k",0)])},
w:function(a,b){return this.h(a,b)},
B:function(a,b){var z,y
z=this.gj(a)
if(typeof z!=="number")return H.v(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.a(P.O(a))}},
eg:function(a,b,c){var z,y,x
z=this.gj(a)
if(typeof z!=="number")return H.v(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.O(a))}return y},
bi:function(a,b){return H.dN(a,b,null,H.bf(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.A([],[H.bf(this,a,"k",0)])
y=this.gj(a)
x=C.c.gj(b)
if(typeof y!=="number")return y.l()
C.b.sj(z,C.c.l(y,x))
C.b.am(z,0,this.gj(a),a)
C.b.am(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.ca(a,"[","]")}},
ci:{"^":"T;$ti"},
hA:{"^":"i:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
T:{"^":"c;$ti",
B:function(a,b){var z,y
for(z=J.b0(this.gP(a));z.u();){y=z.gD(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a7(this.gP(a))},
k:function(a){return P.dz(a)}},
id:{"^":"c;$ti",
O:function(a,b){var z
for(z=J.b0(b);z.u();)this.M(0,z.gD(z))},
k:function(a){return P.ca(this,"{","}")},
B:function(a,b){var z
for(z=new P.cx(this,this.r,null,null,[null]),z.c=this.e;z.u();)b.$1(z.d)}},
ic:{"^":"id;$ti"},
ei:{"^":"c+k;$ti"}}],["","",,P,{"^":"",
h8:function(a){var z=J.p(a)
if(!!z.$isi)return z.k(a)
return"Instance of '"+H.aO(a)+"'"},
c4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aC(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h8(a)},
dm:function(a){return new P.j5(a)},
ap:function(a){H.bQ(H.b(a))},
cB:{"^":"c;"},
"+bool":0,
c1:{"^":"c;dU:a<,b",
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.c1))return!1
return this.a===b.a&&this.b===b.b},
Z:function(a,b){return C.c.Z(this.a,b.gdU())},
gC:function(a){var z=this.a
return(z^C.c.bF(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fX(H.i2(this))
y=P.b1(H.i0(this))
x=P.b1(H.hX(this))
w=P.b1(H.hY(this))
v=P.b1(H.i_(this))
u=P.b1(H.i1(this))
t=P.fY(H.hZ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fX:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b1:function(a){if(a>=10)return""+a
return"0"+a}}},
ao:{"^":"aV;"},
"+double":0,
b2:{"^":"c;ag:a<",
l:function(a,b){return new P.b2(C.c.l(this.a,b.gag()))},
I:function(a,b){return new P.b2(this.a-b.gag())},
a5:function(a,b){return C.c.a5(this.a,b.gag())},
al:function(a,b){return C.c.al(this.a,b.gag())},
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.b2))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
Z:function(a,b){return C.c.Z(this.a,b.gag())},
k:function(a){var z,y,x,w,v
z=new P.h5()
y=this.a
if(y<0)return"-"+new P.b2(0-y).k(0)
x=z.$1(C.c.ab(y,6e7)%60)
w=z.$1(C.c.ab(y,1e6)%60)
v=new P.h4().$1(y%1e6)
return""+C.c.ab(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
q:{
di:function(a,b,c,d,e,f){return new P.b2(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h4:{"^":"i:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h5:{"^":"i:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
J:{"^":"c;",
ga8:function(){return H.a5(this.$thrownJsError)}},
cl:{"^":"J;",
k:function(a){return"Throw of null."}},
a8:{"^":"J;a,b,c,d",
gaJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaJ()+y+x
if(!this.a)return w
v=this.gaI()
u=P.c4(this.b)
return w+v+": "+H.b(u)},
q:{
d_:function(a){return new P.a8(!1,null,null,a)},
d0:function(a,b,c){return new P.a8(!0,a,b,c)},
fF:function(a){return new P.a8(!1,null,a,"Must not be null")}}},
dH:{"^":"a8;e,f,a,b,c,d",
gaJ:function(){return"RangeError"},
gaI:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
q:{
bx:function(a,b,c){return new P.dH(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.dH(b,c,!0,a,d,"Invalid value")},
i3:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
z=a>c}else z=!0
if(z)throw H.a(P.ar(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
z=b>c}else z=!0
if(z)throw H.a(P.ar(b,a,c,"end",f))
return b}return c}}},
hk:{"^":"a8;e,j:f>,a,b,c,d",
gaJ:function(){return"RangeError"},
gaI:function(){if(J.aX(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
q:{
y:function(a,b,c,d,e){var z=e!=null?e:J.a7(b)
return new P.hk(b,z,!0,a,c,"Index out of range")}}},
iH:{"^":"J;a",
k:function(a){return"Unsupported operation: "+this.a},
q:{
r:function(a){return new P.iH(a)}}},
iF:{"^":"J;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
q:{
e5:function(a){return new P.iF(a)}}},
bB:{"^":"J;a",
k:function(a){return"Bad state: "+this.a},
q:{
bC:function(a){return new P.bB(a)}}},
fR:{"^":"J;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.c4(z))+"."},
q:{
O:function(a){return new P.fR(a)}}},
dL:{"^":"c;",
k:function(a){return"Stack Overflow"},
ga8:function(){return},
$isJ:1},
fV:{"^":"J;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
lH:{"^":"c;"},
j5:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
I:{"^":"aV;"},
"+int":0,
bt:{"^":"c;$ti",
b6:["cV",function(a,b){return new H.e7(this,b,[H.be(this,"bt",0)])}],
B:function(a,b){var z
for(z=this.gN(this);z.u();)b.$1(z.gD(z))},
gj:function(a){var z,y
z=this.gN(this)
for(y=0;z.u();)++y
return y},
ga7:function(a){var z,y
z=this.gN(this)
if(!z.u())throw H.a(H.cb())
y=z.gD(z)
if(z.u())throw H.a(H.ho())
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.fF("index"))
if(b<0)H.Z(P.ar(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.u();){x=z.gD(z)
if(b===y)return x;++y}throw H.a(P.y(b,this,"index",null,y))},
k:function(a){return P.hm(this,"(",")")}},
hp:{"^":"c;$ti"},
j:{"^":"c;$ti"},
"+List":0,
ch:{"^":"c;$ti"},
b5:{"^":"c;",
gC:function(a){return P.c.prototype.gC.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aV:{"^":"c;"},
"+num":0,
c:{"^":";",
G:function(a,b){return this===b},
gC:function(a){return H.aN(this)},
k:function(a){return"Instance of '"+H.aO(this)+"'"},
toString:function(){return this.k(this)}},
aP:{"^":"c;"},
n:{"^":"c;"},
"+String":0,
cp:{"^":"c;aa:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
dM:function(a,b,c){var z=J.b0(b)
if(!z.u())return a
if(c.length===0){do a+=H.b(z.gD(z))
while(z.u())}else{a+=H.b(z.gD(z))
for(;z.u();)a=a+c+H.b(z.gD(z))}return a}}}}],["","",,W,{"^":"",
h6:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).a_(z,a,b,c)
y.toString
z=new H.e7(new W.U(y),new W.h7(),[W.u])
return z.ga7(z)},
dl:function(a){return"wheel"},
aE:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fh(a)
if(typeof y==="string")z=a.tagName}catch(x){H.M(x)}return z},
j2:function(a,b){return document.createElement(a)},
an:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eh:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eu:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iX(a)
if(!!J.p(z).$isE)return z
return}else return a},
ey:function(a){var z=$.t
if(z===C.d)return a
return z.e0(a)},
w:{"^":"aq;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
l7:{"^":"cn;m:x=,n:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
l8:{"^":"h;j:length=","%":"AccessibleNodeList"},
l9:{"^":"w;av:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
la:{"^":"w;av:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
lf:{"^":"w;av:href}","%":"HTMLBaseElement"},
fJ:{"^":"h;","%":"Response;Body"},
bY:{"^":"w;",$isbY:1,"%":"HTMLBodyElement"},
lg:{"^":"w;L:name=","%":"HTMLButtonElement"},
bm:{"^":"w;J:height},K:width}",
b8:function(a,b,c){if(c!=null)return a.getContext(b,P.kF(c,null))
return a.getContext(b)},
cK:function(a,b){return this.b8(a,b,null)},
$isbm:1,
"%":"HTMLCanvasElement"},
lh:{"^":"h;",
e8:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
aB:function(a){return P.V(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
li:{"^":"u;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lk:{"^":"a0;a3:style=","%":"CSSFontFaceRule"},
ll:{"^":"a0;a3:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
lm:{"^":"a0;a3:style=","%":"CSSPageRule"},
ln:{"^":"bn;j:length=","%":"CSSPerspective"},
lo:{"^":"c0;m:x=,n:y=","%":"CSSPositionValue"},
lp:{"^":"bn;m:x=,n:y=,F:z=","%":"CSSRotation"},
a0:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
lq:{"^":"bn;m:x=,n:y=,F:z=","%":"CSSScale"},
fS:{"^":"iV;j:length=",
bw:function(a,b){var z,y
z=$.$get$db()
y=z[b]
if(typeof y==="string")return y
y=this.dR(a,b)
z[b]=y
return y},
dR:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fZ()+b
if(z in a)return z
return b},
dO:function(a,b,c,d){a.setProperty(b,c,d)},
sJ:function(a,b){a.height=b},
sK:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fT:{"^":"c;",
sef:function(a,b){this.dO(a,this.bw(a,"float"),b,"")}},
lr:{"^":"a0;a3:style=","%":"CSSStyleRule"},
c0:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bn:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
ls:{"^":"c0;j:length=","%":"CSSTransformValue"},
lt:{"^":"bn;m:x=,n:y=,F:z=","%":"CSSTranslation"},
lu:{"^":"c0;j:length=","%":"CSSUnparsedValue"},
lv:{"^":"a0;a3:style=","%":"CSSViewportRule"},
lw:{"^":"h;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lx:{"^":"h;m:x=,n:y=,F:z=","%":"DeviceAcceleration"},
h_:{"^":"w;","%":"HTMLDivElement"},
ly:{"^":"u;",
gaZ:function(a){return new W.ba(a,"mousedown",!1,[W.Q])},
gb_:function(a){return new W.ba(a,"mousemove",!1,[W.Q])},
gb0:function(a){return new W.ba(a,"mouseup",!1,[W.Q])},
gb1:function(a){return new W.ba(a,W.dl(a),!1,[W.aQ])},
"%":"Document|HTMLDocument|XMLDocument"},
lz:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
lA:{"^":"h0;",
gY:function(a){return a.a},
gU:function(a){return a.b},
ga1:function(a){return a.c},
"%":"DOMMatrix"},
h0:{"^":"h;",
gY:function(a){return a.a},
gU:function(a){return a.b},
ga1:function(a){return a.c},
"%":";DOMMatrixReadOnly"},
lB:{"^":"h1;",
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
h1:{"^":"h;",
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
lC:{"^":"iZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.ac]},
$isq:1,
$asq:function(){return[P.ac]},
$ask:function(){return[P.ac]},
$isj:1,
$asj:function(){return[P.ac]},
$asl:function(){return[P.ac]},
"%":"ClientRectList|DOMRectList"},
h2:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gK(a))+" x "+H.b(this.gJ(a))},
G:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isac)return!1
return a.left===z.gce(b)&&a.top===z.gcq(b)&&this.gK(a)===z.gK(b)&&this.gJ(a)===z.gJ(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gK(a)
w=this.gJ(a)
return W.eh(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcr:function(a){return new P.al(a.left,a.top,[null])},
gJ:function(a){return a.height},
gce:function(a){return a.left},
gcq:function(a){return a.top},
gK:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isac:1,
$asac:I.aw,
"%":";DOMRectReadOnly"},
lD:{"^":"j0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.n]},
$isq:1,
$asq:function(){return[P.n]},
$ask:function(){return[P.n]},
$isj:1,
$asj:function(){return[P.n]},
$asl:function(){return[P.n]},
"%":"DOMStringList"},
lE:{"^":"h;j:length=","%":"DOMTokenList"},
aq:{"^":"u;a3:style=,bC:namespaceURI=,ez:tagName=",
gdY:function(a){return new W.j1(a)},
k:function(a){return a.localName},
a_:["aD",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dk
if(z==null){z=H.A([],[W.dD])
y=new W.dE(z)
z.push(W.ee(null))
z.push(W.eq())
$.dk=y
d=y}else d=z
z=$.dj
if(z==null){z=new W.et(d)
$.dj=z
c=z}else{z.a=d
c=z}}if($.a9==null){z=document
y=z.implementation.createHTMLDocument("")
$.a9=y
$.c3=y.createRange()
y=$.a9
y.toString
x=y.createElement("base")
J.fs(x,z.baseURI)
$.a9.head.appendChild(x)}z=$.a9
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a9
if(!!this.$isbY)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a9.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.A(C.P,a.tagName)){$.c3.selectNodeContents(w)
v=$.c3.createContextualFragment(b)}else{w.innerHTML=b
v=$.a9.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a9.body
if(w==null?z!=null:w!==z)J.cS(w)
c.bg(v)
document.adoptNode(v)
return v},function(a,b,c){return this.a_(a,b,c,null)},"e7",null,null,"geK",5,5,null],
cN:function(a,b,c,d){a.textContent=null
a.appendChild(this.a_(a,b,c,d))},
cM:function(a,b){return this.cN(a,b,null,null)},
b7:function(a){return a.getBoundingClientRect()},
gaZ:function(a){return new W.ad(a,"mousedown",!1,[W.Q])},
gb_:function(a){return new W.ad(a,"mousemove",!1,[W.Q])},
gb0:function(a){return new W.ad(a,"mouseup",!1,[W.Q])},
gb1:function(a){return new W.ad(a,W.dl(a),!1,[W.aQ])},
$isaq:1,
"%":";Element"},
h7:{"^":"i:0;",
$1:function(a){return!!J.p(a).$isaq}},
lF:{"^":"w;J:height},L:name=,K:width}","%":"HTMLEmbedElement"},
lG:{"^":"aa;S:error=","%":"ErrorEvent"},
aa:{"^":"h;",
ay:function(a){return a.preventDefault()},
$isaa:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
E:{"^":"h;",
bM:["cT",function(a,b,c,d){if(c!=null)this.dv(a,b,c,!1)}],
dv:function(a,b,c,d){return a.addEventListener(b,H.af(c,1),!1)},
dJ:function(a,b,c,d){return a.removeEventListener(b,H.af(c,1),!1)},
$isE:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;en|eo|er|es"},
m_:{"^":"w;L:name=","%":"HTMLFieldSetElement"},
m0:{"^":"j7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bp]},
$isq:1,
$asq:function(){return[W.bp]},
$ask:function(){return[W.bp]},
$isj:1,
$asj:function(){return[W.bp]},
$asl:function(){return[W.bp]},
"%":"FileList"},
m1:{"^":"E;S:error=","%":"FileReader"},
m2:{"^":"E;S:error=,j:length=","%":"FileWriter"},
m4:{"^":"h;a3:style=","%":"FontFace"},
m5:{"^":"E;",
eL:function(a,b,c){return a.forEach(H.af(b,3),c)},
B:function(a,b){b=H.af(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
m7:{"^":"w;j:length=,L:name=","%":"HTMLFormElement"},
m9:{"^":"cn;m:x=,n:y=,F:z=","%":"Gyroscope"},
ma:{"^":"h;j:length=","%":"History"},
mb:{"^":"jo;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.u]},
$isq:1,
$asq:function(){return[W.u]},
$ask:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$asl:function(){return[W.u]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
mc:{"^":"w;J:height},L:name=,K:width}","%":"HTMLIFrameElement"},
c7:{"^":"h;",$isc7:1,"%":"ImageBitmap"},
c8:{"^":"h;",$isc8:1,"%":"ImageData"},
c9:{"^":"w;J:height},K:width}",$isc9:1,"%":"HTMLImageElement"},
me:{"^":"w;J:height},L:name=,K:width}","%":"HTMLInputElement"},
bu:{"^":"e4;",
geG:function(a){return a.which},
$isbu:1,
"%":"KeyboardEvent"},
mj:{"^":"w;av:href}","%":"HTMLLinkElement"},
ml:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
mm:{"^":"cn;m:x=,n:y=,F:z=","%":"Magnetometer"},
mn:{"^":"w;L:name=","%":"HTMLMapElement"},
hC:{"^":"w;S:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mq:{"^":"h;j:length=","%":"MediaList"},
mr:{"^":"E;",
R:function(a){return a.clone()},
"%":"MediaStream"},
ms:{"^":"E;aW:enabled=",
R:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
mt:{"^":"E;",
bM:function(a,b,c,d){if(J.N(b,"message"))a.start()
this.cT(a,b,c,!1)},
"%":"MessagePort"},
mu:{"^":"w;L:name=","%":"HTMLMetaElement"},
mv:{"^":"jv;",
h:function(a,b){return P.V(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gP:function(a){var z=H.A([],[P.n])
this.B(a,new W.hE(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hE:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
mw:{"^":"jw;",
h:function(a,b){return P.V(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gP:function(a){var z=H.A([],[P.n])
this.B(a,new W.hF(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hF:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
mx:{"^":"jy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bw]},
$isq:1,
$asq:function(){return[W.bw]},
$ask:function(){return[W.bw]},
$isj:1,
$asj:function(){return[W.bw]},
$asl:function(){return[W.bw]},
"%":"MimeTypeArray"},
Q:{"^":"e4;bW:button=",
gcj:function(a){var z,y,x
if(!!a.offsetX)return new P.al(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.p(W.eu(z)).$isaq)throw H.a(P.r("offsetX is only supported on elements"))
y=W.eu(z)
z=[null]
x=new P.al(a.clientX,a.clientY,z).I(0,J.fi(J.fk(y)))
return new P.al(J.cU(x.a),J.cU(x.b),z)}},
$isQ:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
U:{"^":"dx;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.bC("No elements"))
if(y>1)throw H.a(P.bC("More than one element"))
return z.firstChild},
O:function(a,b){var z,y,x,w
z=J.p(b)
if(!!z.$isU){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gN(b),y=this.a;z.u();)y.appendChild(z.gD(z))},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gN:function(a){var z=this.a.childNodes
return new W.dn(z,z.length,-1,null,[H.bf(C.R,z,"l",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asdx:function(){return[W.u]},
$ask:function(){return[W.u]},
$asj:function(){return[W.u]},
$asei:function(){return[W.u]}},
u:{"^":"E;ax:parentNode=,b2:previousSibling=",
gci:function(a){return new W.U(a)},
es:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cU(a):z},
$isu:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mF:{"^":"h;",
er:[function(a){return a.previousNode()},"$0","gb2",1,0,4],
"%":"NodeIterator"},
hO:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.u]},
$isq:1,
$asq:function(){return[W.u]},
$ask:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$asl:function(){return[W.u]},
"%":"NodeList|RadioNodeList"},
mI:{"^":"w;J:height},L:name=,K:width}","%":"HTMLObjectElement"},
mK:{"^":"w;L:name=","%":"HTMLOutputElement"},
mL:{"^":"w;L:name=","%":"HTMLParamElement"},
b6:{"^":"h;j:length=","%":"Plugin"},
mN:{"^":"jE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b6]},
$isq:1,
$asq:function(){return[W.b6]},
$ask:function(){return[W.b6]},
$isj:1,
$asj:function(){return[W.b6]},
$asl:function(){return[W.b6]},
"%":"PluginArray"},
mQ:{"^":"h;",
b7:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mW:{"^":"jK;",
h:function(a,b){return P.V(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gP:function(a){var z=H.A([],[P.n])
this.B(a,new W.i9(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.n,null]},
"%":"RTCStatsReport"},
i9:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
mX:{"^":"w;j:length=,L:name=","%":"HTMLSelectElement"},
cn:{"^":"E;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mY:{"^":"aa;S:error=","%":"SensorErrorEvent"},
mZ:{"^":"w;L:name=","%":"HTMLSlotElement"},
n_:{"^":"eo;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bz]},
$isq:1,
$asq:function(){return[W.bz]},
$ask:function(){return[W.bz]},
$isj:1,
$asj:function(){return[W.bz]},
$asl:function(){return[W.bz]},
"%":"SourceBufferList"},
n0:{"^":"jQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bA]},
$isq:1,
$asq:function(){return[W.bA]},
$ask:function(){return[W.bA]},
$isj:1,
$asj:function(){return[W.bA]},
$asl:function(){return[W.bA]},
"%":"SpeechGrammarList"},
n1:{"^":"aa;S:error=","%":"SpeechRecognitionError"},
b8:{"^":"h;j:length=","%":"SpeechRecognitionResult"},
n3:{"^":"jT;",
h:function(a,b){return a.getItem(b)},
B:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gP:function(a){var z=H.A([],[P.n])
this.B(a,new W.ip(z))
return z},
gj:function(a){return a.length},
$asT:function(){return[P.n,P.n]},
"%":"Storage"},
ip:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},
iA:{"^":"w;",
a_:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
z=W.h6("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.U(y).O(0,J.ff(z))
return y},
"%":"HTMLTableElement"},
n6:{"^":"w;",
a_:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.a_(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.ga7(z)
x.toString
z=new W.U(x)
w=z.ga7(z)
y.toString
w.toString
new W.U(y).O(0,new W.U(w))
return y},
"%":"HTMLTableRowElement"},
n7:{"^":"w;",
a_:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.a_(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.ga7(z)
y.toString
x.toString
new W.U(y).O(0,new W.U(x))
return y},
"%":"HTMLTableSectionElement"},
dP:{"^":"w;",$isdP:1,"%":"HTMLTemplateElement"},
n8:{"^":"w;L:name=","%":"HTMLTextAreaElement"},
na:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bG]},
$isq:1,
$asq:function(){return[W.bG]},
$ask:function(){return[W.bG]},
$isj:1,
$asj:function(){return[W.bG]},
$asl:function(){return[W.bG]},
"%":"TextTrackCueList"},
nb:{"^":"es;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bF]},
$isq:1,
$asq:function(){return[W.bF]},
$ask:function(){return[W.bF]},
$isj:1,
$asj:function(){return[W.bF]},
$asl:function(){return[W.bF]},
"%":"TextTrackList"},
nc:{"^":"h;j:length=","%":"TimeRanges"},
nd:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bH]},
$isq:1,
$asq:function(){return[W.bH]},
$ask:function(){return[W.bH]},
$isj:1,
$asj:function(){return[W.bH]},
$asl:function(){return[W.bH]},
"%":"TouchList"},
ne:{"^":"h;j:length=","%":"TrackDefaultList"},
nh:{"^":"h;",
eM:[function(a){return a.parentNode()},"$0","gax",1,0,4],
er:[function(a){return a.previousNode()},"$0","gb2",1,0,4],
"%":"TreeWalker"},
e4:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nj:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
nl:{"^":"h;m:x=,F:z=","%":"VRStageBoundsPoint"},
ct:{"^":"hC;J:height},K:width}",$isct:1,"%":"HTMLVideoElement"},
nm:{"^":"E;j:length=","%":"VideoTrackList"},
aQ:{"^":"Q;",
gea:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.r("deltaY is not supported"))},
$isaQ:1,
"%":"WheelEvent"},
iK:{"^":"E;",
gdX:function(a){var z,y
z=P.aV
y=new P.L(0,$.t,null,[z])
this.dE(a)
this.dK(a,W.ey(new W.iL(new P.jX(y,[z]))))
return y},
dK:function(a,b){return a.requestAnimationFrame(H.af(b,1))},
dE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
iL:{"^":"i:0;a",
$1:function(a){this.a.aU(0,a)}},
nn:{"^":"E;"},
nr:{"^":"u;L:name=,bC:namespaceURI=","%":"Attr"},
ns:{"^":"kb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a0]},
$isq:1,
$asq:function(){return[W.a0]},
$ask:function(){return[W.a0]},
$isj:1,
$asj:function(){return[W.a0]},
$asl:function(){return[W.a0]},
"%":"CSSRuleList"},
nt:{"^":"h2;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
G:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isac)return!1
return a.left===z.gce(b)&&a.top===z.gcq(b)&&a.width===z.gK(b)&&a.height===z.gJ(b)},
gC:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.eh(W.an(W.an(W.an(W.an(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcr:function(a){return new P.al(a.left,a.top,[null])},
gJ:function(a){return a.height},
gK:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nu:{"^":"kd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.br]},
$isq:1,
$asq:function(){return[W.br]},
$ask:function(){return[W.br]},
$isj:1,
$asj:function(){return[W.br]},
$asl:function(){return[W.br]},
"%":"GamepadList"},
nx:{"^":"kf;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.u]},
$isq:1,
$asq:function(){return[W.u]},
$ask:function(){return[W.u]},
$isj:1,
$asj:function(){return[W.u]},
$asl:function(){return[W.u]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ny:{"^":"fJ;",
R:function(a){return a.clone()},
"%":"Request"},
nz:{"^":"kh;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b8]},
$isq:1,
$asq:function(){return[W.b8]},
$ask:function(){return[W.b8]},
$isj:1,
$asj:function(){return[W.b8]},
$asl:function(){return[W.b8]},
"%":"SpeechRecognitionResultList"},
nA:{"^":"kj;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bE]},
$isq:1,
$asq:function(){return[W.bE]},
$ask:function(){return[W.bE]},
$isj:1,
$asj:function(){return[W.bE]},
$asl:function(){return[W.bE]},
"%":"StyleSheetList"},
iT:{"^":"ci;dF:a<",
B:function(a,b){var z,y,x,w,v
for(z=this.gP(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gP:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.A([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.f(v)
if(u.gbC(v)==null)y.push(u.gL(v))}return y},
$asci:function(){return[P.n,P.n]},
$asT:function(){return[P.n,P.n]}},
j1:{"^":"iT;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gP(this).length}},
ba:{"^":"bD;a,b,c,$ti",
aY:function(a,b,c,d){return W.am(this.a,this.b,a,!1,H.G(this,0))}},
ad:{"^":"ba;a,b,c,$ti"},
j3:{"^":"iq;a,b,c,d,e,$ti",
dn:function(a,b,c,d,e){this.dS()},
bX:function(a){if(this.b==null)return
this.dT()
this.b=null
this.d=null
return},
dS:function(){var z=this.d
if(z!=null&&this.a<=0)J.eW(this.b,this.c,z,!1)},
dT:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eV(x,this.c,z,!1)}},
q:{
am:function(a,b,c,d,e){var z=c==null?null:W.ey(new W.j4(c))
z=new W.j3(0,a,b,z,!1,[e])
z.dn(a,b,c,!1,e)
return z}}},
j4:{"^":"i:0;a",
$1:function(a){return this.a.$1(a)}},
cv:{"^":"c;cD:a<",
dq:function(a){var z,y
z=$.$get$cw()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.O[y],W.kO())
for(y=0;y<12;++y)z.i(0,C.p[y],W.kP())}},
ac:function(a){return $.$get$ef().A(0,W.aE(a))},
a4:function(a,b,c){var z,y,x
z=W.aE(a)
y=$.$get$cw()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
q:{
ee:function(a){var z,y
z=document.createElement("a")
y=new W.jL(z,window.location)
y=new W.cv(y)
y.dq(a)
return y},
nv:[function(a,b,c,d){return!0},"$4","kO",16,0,9],
nw:[function(a,b,c,d){var z,y,x,w,v
z=d.gcD()
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
return z},"$4","kP",16,0,9]}},
l:{"^":"c;$ti",
gN:function(a){return new W.dn(a,this.gj(a),-1,null,[H.bf(this,a,"l",0)])}},
dE:{"^":"c;a",
ac:function(a){return C.b.bN(this.a,new W.hQ(a))},
a4:function(a,b,c){return C.b.bN(this.a,new W.hP(a,b,c))}},
hQ:{"^":"i:0;a",
$1:function(a){return a.ac(this.a)}},
hP:{"^":"i:0;a,b,c",
$1:function(a){return a.a4(this.a,this.b,this.c)}},
jM:{"^":"c;cD:d<",
ds:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.b6(0,new W.jN())
y=b.b6(0,new W.jO())
this.b.O(0,z)
x=this.c
x.O(0,C.w)
x.O(0,y)},
ac:function(a){return this.a.A(0,W.aE(a))},
a4:["cX",function(a,b,c){var z,y
z=W.aE(a)
y=this.c
if(y.A(0,H.b(z)+"::"+b))return this.d.dW(c)
else if(y.A(0,"*::"+b))return this.d.dW(c)
else{y=this.b
if(y.A(0,H.b(z)+"::"+b))return!0
else if(y.A(0,"*::"+b))return!0
else if(y.A(0,H.b(z)+"::*"))return!0
else if(y.A(0,"*::*"))return!0}return!1}]},
jN:{"^":"i:0;",
$1:function(a){return!C.b.A(C.p,a)}},
jO:{"^":"i:0;",
$1:function(a){return C.b.A(C.p,a)}},
jY:{"^":"jM;e,a,b,c,d",
a4:function(a,b,c){if(this.cX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cN(a).a.getAttribute("template")==="")return this.e.A(0,b)
return!1},
q:{
eq:function(){var z=P.n
z=new W.jY(P.cf(C.o,z),P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),null)
z.ds(null,new H.hB(C.o,new W.jZ(),[H.G(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jZ:{"^":"i:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jW:{"^":"c;",
ac:function(a){var z=J.p(a)
if(!!z.$isdJ)return!1
z=!!z.$isz
if(z&&W.aE(a)==="foreignObject")return!1
if(z)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.i.cQ(b,"on"))return!1
return this.ac(a)}},
dn:{"^":"c;a,b,c,d,$ti",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aY(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
iW:{"^":"c;a",$isE:1,q:{
iX:function(a){if(a===window)return a
else return new W.iW(a)}}},
dD:{"^":"c;"},
mG:{"^":"c;"},
ni:{"^":"c;"},
jL:{"^":"c;a,b"},
et:{"^":"c;a",
bg:function(a){new W.k8(this).$2(a,null)},
ai:function(a,b){if(b==null)J.cS(a)
else b.removeChild(a)},
dN:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cN(a)
x=y.gdF().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.M(t)}v="element unprintable"
try{v=J.aC(a)}catch(t){H.M(t)}try{u=W.aE(a)
this.dM(a,b,z,v,u,y,x)}catch(t){if(H.M(t) instanceof P.a8)throw t
else{this.ai(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dM:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ai(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ac(a)){this.ai(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a4(a,"is",g)){this.ai(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gP(f)
y=H.A(z.slice(0),[H.G(z,0)])
for(x=f.gP(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.a4(a,J.fw(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.p(a).$isdP)this.bg(a.content)}},
k8:{"^":"i:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dN(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ai(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fg(z)}catch(w){H.M(w)
v=z
if(x){u=J.f(v)
if(u.gax(v)!=null){u.gax(v)
u.gax(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
iV:{"^":"h+fT;"},
iY:{"^":"h+k;"},
iZ:{"^":"iY+l;"},
j_:{"^":"h+k;"},
j0:{"^":"j_+l;"},
j6:{"^":"h+k;"},
j7:{"^":"j6+l;"},
jn:{"^":"h+k;"},
jo:{"^":"jn+l;"},
jv:{"^":"h+T;"},
jw:{"^":"h+T;"},
jx:{"^":"h+k;"},
jy:{"^":"jx+l;"},
jz:{"^":"h+k;"},
jA:{"^":"jz+l;"},
jD:{"^":"h+k;"},
jE:{"^":"jD+l;"},
jK:{"^":"h+T;"},
en:{"^":"E+k;"},
eo:{"^":"en+l;"},
jP:{"^":"h+k;"},
jQ:{"^":"jP+l;"},
jT:{"^":"h+T;"},
k_:{"^":"h+k;"},
k0:{"^":"k_+l;"},
er:{"^":"E+k;"},
es:{"^":"er+l;"},
k4:{"^":"h+k;"},
k5:{"^":"k4+l;"},
ka:{"^":"h+k;"},
kb:{"^":"ka+l;"},
kc:{"^":"h+k;"},
kd:{"^":"kc+l;"},
ke:{"^":"h+k;"},
kf:{"^":"ke+l;"},
kg:{"^":"h+k;"},
kh:{"^":"kg+l;"},
ki:{"^":"h+k;"},
kj:{"^":"ki+l;"}}],["","",,P,{"^":"",
eD:function(a){return a},
V:function(a){var z,y,x,w,v
if(a==null)return
z=P.H()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
kF:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cM(a,new P.kG(z))
return z},
dh:function(){var z=$.dg
if(z==null){z=J.bS(window.navigator.userAgent,"Opera",0)
$.dg=z}return z},
fZ:function(){var z,y
z=$.dd
if(z!=null)return z
y=$.de
if(y==null){y=J.bS(window.navigator.userAgent,"Firefox",0)
$.de=y}if(y)z="-moz-"
else{y=$.df
if(y==null){y=P.dh()!==!0&&J.bS(window.navigator.userAgent,"Trident/",0)
$.df=y}if(y)z="-ms-"
else z=P.dh()===!0?"-o-":"-webkit-"}$.dd=z
return z},
kG:{"^":"i:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",mV:{"^":"E;S:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nf:{"^":"E;S:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
l3:function(a){return Math.sqrt(a)},
eg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jp:{"^":"c;",
eq:function(){return Math.random()}},
al:{"^":"c;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
G:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.al))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y
z=J.a6(this.a)
y=J.a6(this.b)
return P.jq(P.eg(P.eg(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.c.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.c.gn(b)
if(typeof z!=="number")return z.l()
return new P.al(y,C.a.l(z,x),this.$ti)},
I:function(a,b){var z,y,x,w
z=this.a
y=J.f(b)
x=y.gm(b)
if(typeof z!=="number")return z.I()
if(typeof x!=="number")return H.v(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.I()
if(typeof y!=="number")return H.v(y)
return new P.al(z-x,w-y,this.$ti)}},
jF:{"^":"c;$ti"},
ac:{"^":"jF;$ti"}}],["","",,P,{"^":"",lI:{"^":"z;m:x=,n:y=","%":"SVGFEBlendElement"},lJ:{"^":"z;m:x=,n:y=","%":"SVGFEColorMatrixElement"},lK:{"^":"z;m:x=,n:y=","%":"SVGFEComponentTransferElement"},lL:{"^":"z;m:x=,n:y=","%":"SVGFECompositeElement"},lM:{"^":"z;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},lN:{"^":"z;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},lO:{"^":"z;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},lP:{"^":"z;m:x=,n:y=","%":"SVGFEFloodElement"},lQ:{"^":"z;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},lR:{"^":"z;m:x=,n:y=","%":"SVGFEImageElement"},lS:{"^":"z;m:x=,n:y=","%":"SVGFEMergeElement"},lT:{"^":"z;m:x=,n:y=","%":"SVGFEMorphologyElement"},lU:{"^":"z;m:x=,n:y=","%":"SVGFEOffsetElement"},lV:{"^":"z;m:x=,n:y=,F:z=","%":"SVGFEPointLightElement"},lW:{"^":"z;m:x=,n:y=","%":"SVGFESpecularLightingElement"},lX:{"^":"z;m:x=,n:y=,F:z=","%":"SVGFESpotLightElement"},lY:{"^":"z;m:x=,n:y=","%":"SVGFETileElement"},lZ:{"^":"z;m:x=,n:y=","%":"SVGFETurbulenceElement"},m3:{"^":"z;m:x=,n:y=","%":"SVGFilterElement"},m6:{"^":"aF;m:x=,n:y=","%":"SVGForeignObjectElement"},hh:{"^":"aF;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aF:{"^":"z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},md:{"^":"aF;m:x=,n:y=","%":"SVGImageElement"},mi:{"^":"js;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dv]},
$isj:1,
$asj:function(){return[P.dv]},
$asl:function(){return[P.dv]},
"%":"SVGLengthList"},mo:{"^":"z;m:x=,n:y=","%":"SVGMaskElement"},mp:{"^":"h;Y:a=,U:b=,a1:c=","%":"SVGMatrix"},mH:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dG]},
$isj:1,
$asj:function(){return[P.dG]},
$asl:function(){return[P.dG]},
"%":"SVGNumberList"},mM:{"^":"z;m:x=,n:y=","%":"SVGPatternElement"},mO:{"^":"h;m:x=,n:y=","%":"SVGPoint"},mP:{"^":"h;j:length=","%":"SVGPointList"},mR:{"^":"h;m:x=,n:y=","%":"SVGRect"},mS:{"^":"hh;m:x=,n:y=","%":"SVGRectElement"},dJ:{"^":"z;",$isdJ:1,"%":"SVGScriptElement"},n4:{"^":"jV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.n]},
$isj:1,
$asj:function(){return[P.n]},
$asl:function(){return[P.n]},
"%":"SVGStringList"},z:{"^":"aq;",
a_:function(a,b,c,d){var z,y,x,w,v,u
z=H.A([],[W.dD])
z.push(W.ee(null))
z.push(W.eq())
z.push(new W.jW())
c=new W.et(new W.dE(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).e7(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.U(w)
u=z.ga7(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaZ:function(a){return new W.ad(a,"mousedown",!1,[W.Q])},
gb_:function(a){return new W.ad(a,"mousemove",!1,[W.Q])},
gb0:function(a){return new W.ad(a,"mouseup",!1,[W.Q])},
gb1:function(a){return new W.ad(a,"mousewheel",!1,[W.aQ])},
$isz:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},n5:{"^":"aF;m:x=,n:y=","%":"SVGSVGElement"},iB:{"^":"aF;","%":"SVGTextPathElement;SVGTextContentElement"},n9:{"^":"iB;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},ng:{"^":"k7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dS]},
$isj:1,
$asj:function(){return[P.dS]},
$asl:function(){return[P.dS]},
"%":"SVGTransformList"},nk:{"^":"aF;m:x=,n:y=","%":"SVGUseElement"},jr:{"^":"h+k;"},js:{"^":"jr+l;"},jB:{"^":"h+k;"},jC:{"^":"jB+l;"},jU:{"^":"h+k;"},jV:{"^":"jU+l;"},k6:{"^":"h+k;"},k7:{"^":"k6+l;"}}],["","",,P,{"^":"",lb:{"^":"h;j:length=","%":"AudioBuffer"},lc:{"^":"iU;",
h:function(a,b){return P.V(a.get(b))},
B:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gP:function(a){var z=H.A([],[P.n])
this.B(a,new P.fH(z))
return z},
gj:function(a){return a.size},
$asT:function(){return[P.n,null]},
"%":"AudioParamMap"},fH:{"^":"i:2;a",
$2:function(a,b){return this.a.push(a)}},ld:{"^":"h;aW:enabled=","%":"AudioTrack"},le:{"^":"E;j:length=","%":"AudioTrackList"},fI:{"^":"E;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mJ:{"^":"fI;j:length=","%":"OfflineAudioContext"},iU:{"^":"h+T;"}}],["","",,P,{"^":"",mT:{"^":"h;",
bL:function(a,b){return a.activeTexture(b)},
bO:function(a,b,c){return a.attachShader(b,c)},
bP:function(a,b,c){return a.bindBuffer(b,c)},
bR:function(a,b,c){return a.bindFramebuffer(b,c)},
bS:function(a,b,c){return a.bindTexture(b,c)},
bT:function(a,b){return a.blendEquation(b)},
bU:function(a,b,c){return a.blendFunc(b,c)},
bV:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b){return a.clear(b)},
bZ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c_:function(a,b){return a.compileShader(b)},
c0:function(a){return a.createBuffer()},
c1:function(a){return a.createProgram()},
c2:function(a,b){return a.createShader(b)},
c3:function(a){return a.createTexture()},
c5:function(a,b){return a.depthMask(b)},
c6:function(a,b){return a.disable(b)},
c7:function(a,b,c,d){return a.drawArrays(b,c,d)},
c8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c9:function(a,b){return a.enable(b)},
ca:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.V(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cf:function(a,b){return a.linkProgram(b)},
ck:function(a,b,c){return a.pixelStorei(b,c)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b4:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.p(g)
if(!!z.$isc8)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.eD(g))
return}if(!!z.$isc9)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbm)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isct)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc7)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.d_("Incorrect number or type of arguments"))},
cn:function(a,b,c,d,e,f,g){return this.b4(a,b,c,d,e,f,g,null,null,null)},
co:function(a,b,c,d){return a.texParameterf(b,c,d)},
cp:function(a,b,c,d){return a.texParameteri(b,c,d)},
cs:function(a,b,c){return a.uniform1f(b,c)},
ct:function(a,b,c){return a.uniform1fv(b,c)},
cu:function(a,b,c){return a.uniform1i(b,c)},
cv:function(a,b,c){return a.uniform1iv(b,c)},
cw:function(a,b,c){return a.uniform2fv(b,c)},
cz:function(a,b,c){return a.uniform3fv(b,c)},
cA:function(a,b,c){return a.uniform4fv(b,c)},
cB:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cE:function(a,b){return a.useProgram(b)},
cF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cH:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mU:{"^":"h;",
dZ:function(a,b){return a.beginTransformFeedback(b)},
e1:function(a,b){return a.bindVertexArray(b)},
e9:function(a){return a.createVertexArray()},
eb:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ec:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ed:function(a){return a.endTransformFeedback()},
eE:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eF:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bL:function(a,b){return a.activeTexture(b)},
bO:function(a,b,c){return a.attachShader(b,c)},
bP:function(a,b,c){return a.bindBuffer(b,c)},
bR:function(a,b,c){return a.bindFramebuffer(b,c)},
bS:function(a,b,c){return a.bindTexture(b,c)},
bT:function(a,b){return a.blendEquation(b)},
bU:function(a,b,c){return a.blendFunc(b,c)},
bV:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b){return a.clear(b)},
bZ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c_:function(a,b){return a.compileShader(b)},
c0:function(a){return a.createBuffer()},
c1:function(a){return a.createProgram()},
c2:function(a,b){return a.createShader(b)},
c3:function(a){return a.createTexture()},
c5:function(a,b){return a.depthMask(b)},
c6:function(a,b){return a.disable(b)},
c7:function(a,b,c,d){return a.drawArrays(b,c,d)},
c8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c9:function(a,b){return a.enable(b)},
ca:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.V(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cf:function(a,b){return a.linkProgram(b)},
ck:function(a,b,c){return a.pixelStorei(b,c)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b4:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.p(g)
if(!!z.$isc8)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.eD(g))
return}if(!!z.$isc9)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbm)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isct)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc7)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.d_("Incorrect number or type of arguments"))},
cn:function(a,b,c,d,e,f,g){return this.b4(a,b,c,d,e,f,g,null,null,null)},
co:function(a,b,c,d){return a.texParameterf(b,c,d)},
cp:function(a,b,c,d){return a.texParameteri(b,c,d)},
cs:function(a,b,c){return a.uniform1f(b,c)},
ct:function(a,b,c){return a.uniform1fv(b,c)},
cu:function(a,b,c){return a.uniform1i(b,c)},
cv:function(a,b,c){return a.uniform1iv(b,c)},
cw:function(a,b,c){return a.uniform2fv(b,c)},
cz:function(a,b,c){return a.uniform3fv(b,c)},
cA:function(a,b,c){return a.uniform4fv(b,c)},
cB:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cE:function(a,b){return a.useProgram(b)},
cF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cH:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",n2:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return P.V(a.item(b))},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ask:function(){return[P.ch]},
$isj:1,
$asj:function(){return[P.ch]},
$asl:function(){return[P.ch]},
"%":"SQLResultSetRowList"},jR:{"^":"h+k;"},jS:{"^":"jR+l;"}}],["","",,G,{"^":"",
iM:function(a){var z,y,x,w
z=H.A(a.split("\n"),[P.n])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.b.ad(z,"\n")},
e9:function(a,b,c){var z,y,x,w
z=J.f(a)
y=z.c2(a,b)
z.bh(a,y,c)
z.c_(a,y)
x=z.bd(a,y,35713)
if(x!=null&&J.N(x,!1)){w=z.bc(a,y)
P.ap("E:Compilation failed:")
P.ap("E:"+G.iM(c))
P.ap("E:Failure:")
P.ap(C.i.l("E:",w))
throw H.a(w)}return y},
hR:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p
d.p(b)
d.an(0,a)
e.p(c)
e.an(0,a)
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
r=z[0]
q=z[1]
z=z[2]
p=Math.sqrt(r*r+q*q+z*z)
if(p===0)return!1
e.W(0,-1/p)
return!0},
dp:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bV(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bW(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cQ(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
ha:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bV(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bW(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
hb:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bV(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bW(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cQ(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.fj(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
h9:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aY(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.aY(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.aY(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.aY(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
jl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.aj(z,z.r,null,null,[H.G(z,0)]),y.c=z.e,x=b.x,w=[[P.j,P.I]],v=[P.ao],u=[T.a2],t=[T.e],s=[T.m];y.u();){r=y.d
if(!x.au(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.eG>0)H.bQ("I: "+q)
continue}p=z.h(0,r)
switch($.$get$X().h(0,r).a){case"vec2":b.ae(r,G.ha(H.bh(p,"$isj",s,"$asj"),null),2)
break
case"vec3":b.ae(r,G.dp(H.bh(p,"$isj",t,"$asj"),null),3)
break
case"vec4":b.ae(r,G.hb(H.bh(p,"$isj",u,"$asj"),null),4)
break
case"float":b.ae(r,new Float32Array(H.bK(H.bh(p,"$isj",v,"$asj"))),1)
break
case"uvec4":b.ae(r,G.h9(H.bh(p,"$isj",w,"$asj"),null),4)
break}}},
b4:function(a,b,c){var z,y,x,w
z=G.dB(a,b.d,4,b.e.x)
z.af(G.dp(c.d,null))
y=c.d4()
x=z.d
z.y=J.bT(x.a)
w=z.ch.length
if(w<768){z.cx=new Uint8Array(H.bK(y))
z.Q=5121}else if(w<196608){z.cx=new Uint16Array(H.bK(y))
z.Q=5123}else{z.cx=new Uint32Array(H.bK(y))
z.Q=5125}J.bi(x.a,z.e)
y=z.y
w=z.cx
J.bR(x.a,34963,y)
J.cJ(x.a,34963,w,35048)
G.jl(c,z)
return z},
aL:{"^":"c;aW:c>"},
cs:{"^":"aL;d,a,b,c",
bq:function(){return this.d},
k:function(a){var z,y,x,w
z=H.A(["{"+H.b(new H.e3(H.kL(this),null))+"}["+this.a+"]"],[P.n])
for(y=this.d,x=new H.aj(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.u();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.b.ad(z,"\n")}},
fK:{"^":"dK;"},
fM:{"^":"c;a,b",
cb:function(a,b,c){J.fc(this.a,b)
if(c>0)J.fC(this.a,b,c)},
cG:function(a,b,c,d,e,f,g,h){J.bR(this.a,34962,b)
J.fD(this.a,c,d,e,!1,g,h)}},
hc:{"^":"c;a,b,c,d,e"},
ai:{"^":"c;Y:a>,U:b>,a1:c>",q:{
F:function(a,b,c){return new G.ai(a,b,c)}}},
bo:{"^":"c;Y:a>,U:b>,a1:c>,d"},
b3:{"^":"c;a,b,c,d,e",
X:function(a){switch($.$get$X().h(0,a).a){case"vec2":this.e.i(0,a,H.A([],[T.m]))
break
case"vec3":this.e.i(0,a,H.A([],[T.e]))
break
case"vec4":this.e.i(0,a,H.A([],[T.a2]))
break
case"float":this.e.i(0,a,H.A([],[P.ao]))
break
case"uvec4":this.e.i(0,a,H.A([],[[P.j,P.I]]))
break}},
cZ:function(a){var z,y,x
z=this.d.length
for(y=this.c,x=0;x<a;++x,z+=4)y.push(new G.bo(z,z+1,z+2,z+3))},
af:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.B)(a),++x)y.push(a[x].R(0))},
d_:function(a){var z,y,x
z=this.d
y=z.length
this.b.push(new G.ai(y,y+1,y+2))
for(x=0;x<3;++x)z.push(J.bj(a[x]))},
ao:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.B)(b),++x)z.push(b[x].R(0))},
ap:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.B)(b),++x)z.push(J.bj(b[x]))},
d0:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.bo(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].R(0))},
d4:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.A(x,[P.I])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.d(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.d(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.d(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.d(w,u)
w[u]=x
r=u+1
if(r>=v)return H.d(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.d(w,r)
w[r]=p
r=u+3
if(r>=v)return H.d(w,r)
w[r]=x
x=u+4
if(x>=v)return H.d(w,x)
w[x]=p
p=u+5
if(p>=v)return H.d(w,p)
w[p]=q.d
u+=6}return w},
d6:function(a,b){var z,y,x,w,v,u,t
z=[]
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
z.push(new T.m(t))}},
d5:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
z.push(new G.bo(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.aj(y,y.r,null,null,[H.G(y,0)]),x.c=y.e;x.u();){w=x.d
v=$.$get$X().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.ad(z," ")}},
dR:{"^":"c;a,b,c"},
dQ:{"^":"c;a,b,c",q:{
cr:function(a,b,c){return new G.dQ(a,b,c)}}},
dA:{"^":"cs;d,a,b,c",
d9:function(a){var z=this.d
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.$get$d2())
z.i(0,"cStencilFunc",$.$get$co())},
q:{
cj:function(a){var z=new G.dA(P.H(),a,!1,!0)
z.d9(a)
return z}}},
hD:{"^":"aL;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bn:function(a,b,c){var z,y
C.i.bx(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bR(z.a,34962,y)
J.cJ(z.a,34962,b,35048)},
bo:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
ae:function(a,b,c){var z,y,x,w,v
z=J.cK(a,0)===105
if(z&&this.z===0)this.z=C.c.cY(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bT(x.a))
this.bn(a,b,c)
w=$.$get$X().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.bi(x.a,this.e)
x.cb(0,v,z?1:0)
x.cG(0,y.h(0,a),v,w.bp(),5126,!1,0,0)},
af:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.bT(y.a))
this.ch=a
this.bn("aPosition",a,3)
x=$.$get$X().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bi(y.a,this.e)
y.cb(0,w,0)
y.cG(0,z.h(0,"aPosition"),w,x.bp(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.aj(z,z.r,null,null,[H.G(z,0)]),x.c=z.e;x.u();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.b.ad(y,"  ")},
q:{
dB:function(a,b,c,d){return new G.hD(b,J.f6(b.a),c,P.H(),d,null,0,-1,null,null,P.H(),"meshdata:"+a,!1,!0)}}},
hV:{"^":"cs;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
d1:function(a,b){var z
if(typeof a!=="number")return a.eH()
if(typeof b!=="number")return H.v(b)
z=a/b
if(this.z===z)return
this.z=z
this.br()},
br:function(){var z,y,x,w,v,u
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
bq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.e(new Float32Array(3))
u.t(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.p(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.p(t)
x=!!y.$isa2
q=x?y.gaA(t):1
if(!!y.$ise){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gF(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.v(t)
x=z[4]
if(typeof s!=="number")return H.v(s)
w=z[8]
if(typeof r!=="number")return H.v(r)
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
c.p(this.db)
c.cg(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
h3:{"^":"c;a,b,c,d,e",
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}},
i8:{"^":"aL;d,e,f,r,x,y,z,Q,ch,a,b,c",
dd:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
x.i(0,t,J.cR(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
x.i(0,t,J.cR(w.a,v,t))}},
di:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.aj(y,y.r,null,null,[H.G(y,0)]),w.c=y.e;w.u();){v=w.d
if(!z.au(0,v))x.push(v)}for(z=this.x,y=new P.cx(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.u();){v=y.d
if(!z.A(0,v))x.push(v)}return x},
dl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.aj(b,b.r,null,null,[H.G(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.u();){t=y.d
switch(J.cK(t,0)){case 117:if(w.au(0,t)){s=b.h(0,t)
if(v.au(0,t))H.bQ("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$X().h(0,t)
if(r==null)H.Z("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bX(x.a,q,s)
else if(!!J.p(s).$ishl)J.fA(x.a,q,s)
break
case"float":if(r.c===0)J.fy(x.a,q,s)
else if(!!J.p(s).$isc5)J.fz(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ah(s,"$isC").a
J.cZ(x.a,q,!1,p)}else if(!!J.p(s).$isc5)J.cZ(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.ah(s,"$isP").a
J.cY(x.a,q,!1,p)}else if(!!J.p(s).$isc5)J.cY(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cX(o,q,H.ah(s,"$isa2").a)
else J.cX(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cW(o,q,H.ah(s,"$ise").a)
else J.cW(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cV(o,q,H.ah(s,"$ism").a)
else J.cV(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.v(p)
J.cH(x.a,33984+p)
p=H.ah(s,"$iscq").b
J.aZ(x.a,3553,p)
p=this.ch
J.bX(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.v(p)
J.cH(x.a,33984+p)
p=H.ah(s,"$iscq").b
J.aZ(x.a,34067,p)
p=this.ch
J.bX(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bQ("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.N(s,!0)
o=x.a
if(p)J.b_(o,2929)
else J.bU(o,2929)
break
case"cStencilFunc":H.ah(s,"$isdR")
p=s.a
o=x.a
if(p===1281)J.bU(o,2960)
else{J.b_(o,2960)
o=s.b
n=s.c
J.ft(x.a,p,o,n)}break
case"cDepthWrite":J.f7(x.a,s)
break
case"cBlendEquation":H.ah(s,"$isdQ")
p=s.a
o=x.a
if(p===1281)J.bU(o,3042)
else{J.b_(o,3042)
o=s.b
n=s.c
J.f_(x.a,o,n)
J.eZ(x.a,p)}break}++u
break}}m=P.di(0,0,0,Date.now()-new P.c1(z,!1).a,0,0)
""+u
m.k(0)},
d3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=Date.now()
y=this.d
J.fB(y.a,this.r)
this.ch=0
x=this.z
if(x.a>0){x.f=null
x.e=null
x.d=null
x.c=null
x.b=null
x.a=0
x.bt()}for(x=b.length,w=0;w<b.length;b.length===x||(0,H.B)(b),++w){v=b[w]
this.dl(v.a,v.bq())}x=this.Q
x.aj(0)
for(u=a.cy,t=new H.aj(u,u.r,null,null,[H.G(u,0)]),t.c=u.e;t.u();)x.M(0,t.d)
s=this.di()
if(s.length!==0)P.ap("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(s)))
J.bi(a.d.a,a.e)
r=this.e.f.length>0
x=a.f
u=a.bo()
t=a.Q
q=a.z
if(r)J.eX(y.a,x)
if(t!==-1){p=y.a
if(q>1)J.fb(p,x,u,t,0,q)
else J.fa(p,x,u,t,0)}else{t=y.a
if(q>1)J.f9(t,x,0,u,q)
else J.f8(t,x,0,u)}if(r)J.fd(y.a)
c.push(new G.h3(this.a,a.z,a.bo(),x,P.di(0,0,0,Date.now()-new P.c1(z,!1).a,0,0)))},
q:{
dI:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.W(null,null,null,P.n)
y=c.b
x=d.b
w=c.f
v=J.f3(b.a)
u=G.e9(b.a,35633,y)
J.cI(b.a,v,u)
t=G.e9(b.a,35632,x)
J.cI(b.a,v,t)
if(w.length>0)J.fx(b.a,v,w,35980)
J.fq(b.a,v)
if(J.fp(b.a,v,35714)!==!0)H.Z(J.fo(b.a,v))
z=new G.i8(b,c,d,v,P.cf(c.c,null),P.H(),P.H(),z,null,a,!1,!0)
z.dd(a,b,c,d)
return z}}},
x:{"^":"c;a,b,c",
bp:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
ie:{"^":"c;a,b,c,d,e,f,r,x",
bl:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.B)(a),++w){v=a[w]
y.push(v)
x.i(0,v,this.r);++this.r}C.b.aC(y)},
aq:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.B)(a),++x)y.push(a[x])
C.b.aC(y)},
bm:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.b.aC(z)},
de:function(a,b){this.b=this.dm(!0,a,b)},
ar:function(a){return this.de(a,null)},
dm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
s=$.$get$X().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
w.push("void main(void) {")
C.b.O(w,b)
w.push("}")
return C.b.ad(w,"\n")},
q:{
by:function(a){return new G.ie(a,null,[],[],[],[],0,P.H())}}},
dK:{"^":"aL;",
a6:function(a,b,c){var z=this.d.a
z[12]=a
z[13]=b
z[14]=c}},
iC:{"^":"c;a,b,c,d,e,f,r"},
cq:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hj:{"^":"cq;f,a,b,c,d,e",
d7:function(a,b,c,d,e){var z,y,x,w
z=this.d
y=this.c
J.aZ(z.a,y,this.b)
J.fr(z.a,37440,1)
this.df(this.f)
x=this.e
w=x.e
if(w!==1)J.fv(z.a,y,34046,w)
J.cT(z.a,y,10240,x.r)
J.cT(z.a,y,10241,x.f)
J.fn(z.a)
J.aZ(z.a,y,null)},
df:function(a){var z,y
z=this.d
y=this.c
J.aZ(z.a,y,this.b)
J.fu(z.a,y,0,6408,6408,5121,a)},
q:{
bs:function(a,b,c,d,e){var z=new G.hj(c,b,J.f5(a.a),e,a,new G.iC(!1,!1,!1,!0,1,9729,9729))
z.d7(a,b,c,d,e)
return z}}}}],["","",,R,{"^":"",
iI:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$e6().eq()
if(v>=w)return H.d(x,v)
x[v]=(u-0.5)*c}y=G.dB(z,a.d,0,a.e.x)
y.af(x)
return y},
i7:{"^":"i6;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
ev:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.f(z)
w.sK(z,y)
w.sJ(z,x)
P.ap("size change "+H.b(y)+" "+H.b(x))
this.dx.d1(y,x)
this.z=y
this.Q=x},"$1","geu",4,0,17]},
im:{"^":"c;",
dg:function(a,b,c){var z,y,x
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
x=this.dr(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dr:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.j2("span",null)
y=J.cO(v)
J.f(y).sK(y,"1px")
C.n.sJ(y,""+d+"px")
C.n.sef(y,"left")
x=C.n.bw(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
io:{"^":"im;e,f,a,b,c,d",
dj:function(a,b){var z,y,x,w,v;++this.e
if(J.aX(J.eU(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.eD(z,2)+" fps"
y=this.c;(y&&C.F).cM(y,b)
x=C.c.ab(30*C.t.e2(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cO(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)}}}],["","",,A,{"^":"",
eE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.fe(b)!==!0)return
z=b.dk(c)
b.k(0)
y=C.b.geo(e)
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
x.e6(new T.P(v))
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
y.i(0,"uTransformationMatrix",b.d)
y.i(0,"uModelMatrix",w)
y.i(0,"uNormalMatrix",x)
e.push(b.ch)
a.d3(b.cx,e,d)
if(0>=e.length)return H.d(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.B)(y),++s)A.eE(a,y[s],z,d,e)},
aM:{"^":"dK;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dk:function(a){var z=this.dx
z.p(a)
z.cg(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
cm:{"^":"aL;d,e,ci:f>,a,b,c"},
i6:{"^":"aL;",
dc:function(a,b,c){if(this.d==null)this.d=new G.hc(this.e,null,null,null,null)},
d2:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eY(v.a,36160,z)
J.fE(v.a,this.x,this.y,x,w)
if(y!==0)J.f0(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.B)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.cs(P.H(),"transforms",!1,!0))
r=new T.C(new Float32Array(16))
r.H()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.B)(x),++q)A.eE(v,x[q],r,a,s)
if(0>=s.length)return H.d(s,-1)
s.pop()}}}}],["","",,V,{}],["","",,B,{"^":"",
fU:function(c5,c6,c7,c8,c9,d0,d1,d2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
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
z=new T.m(new Float32Array(2))
z.v(c7,c9)
t=new T.m(new Float32Array(2))
t.v(c6,c9)
a0=new T.m(new Float32Array(2))
a0.v(c6,c8)
a1=new T.m(new Float32Array(2))
a1.v(c7,c8)
a2=new T.m(new Float32Array(2))
a2.v(c6,c9)
a3=new T.m(new Float32Array(2))
a3.v(c6,c8)
a4=new T.m(new Float32Array(2))
a4.v(c7,c8)
a5=new T.m(new Float32Array(2))
a5.v(c7,c9)
a6=new T.m(new Float32Array(2))
a6.v(c7,c8)
a7=new T.m(new Float32Array(2))
a7.v(c7,c9)
a8=new T.m(new Float32Array(2))
a8.v(c6,c9)
a9=new T.m(new Float32Array(2))
a9.v(c6,c8)
b0=new T.m(new Float32Array(2))
b0.v(c6,c8)
b1=new T.m(new Float32Array(2))
b1.v(c7,c8)
b2=new T.m(new Float32Array(2))
b2.v(c7,c9)
b3=new T.m(new Float32Array(2))
b3.v(c6,c9)
b4=new T.m(new Float32Array(2))
b4.v(c6,c9)
b5=new T.m(new Float32Array(2))
b5.v(c6,c8)
b6=new T.m(new Float32Array(2))
b6.v(c7,c8)
b7=new T.m(new Float32Array(2))
b7.v(c7,c9)
b8=new T.m(new Float32Array(2))
b8.v(c7,c9)
b9=new T.m(new Float32Array(2))
b9.v(c6,c9)
c0=new T.m(new Float32Array(2))
c0.v(c6,c8)
c1=new T.m(new Float32Array(2))
c1.v(c7,c8)
c2=new G.b3(!1,[],[],[],P.H())
c2.X("aTexUV")
c2.X("aNormal")
c2.cZ(6)
c2.af([x,w,v,u,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,y,a])
c2.ao("aTexUV",[z,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1])
for(c3=0;z=$.$get$eb(),c3<6;++c3){c4=z[c3]
c2.ap("aNormal",[c4,c4,c4,c4])}return c2},
fW:function(a,b,c,d,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=c/2
y=[]
x=[]
w=[]
v=new T.e(new Float32Array(3))
v.t(0,z,0)
y.push(v)
v=new T.m(new Float32Array(2))
v.v(0,0)
x.push(v)
v=new T.e(new Float32Array(3))
v.t(0,1,0)
w.push(v)
v=-z
u=new T.e(new Float32Array(3))
u.t(0,v,0)
y.push(u)
u=new T.m(new Float32Array(2))
u.v(1,1)
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
x.push(new T.m(u))
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
x.push(new T.m(u))
u=new Float32Array(3)
u[0]=0
u[1]=-1
u[2]=0
w.push(new T.e(u))}for(v=2*d,t=0;t<v;t=p){p=t+2
if(p>=y.length)return H.d(y,p)
y.push(y[p])
u=t+3
if(u>=y.length)return H.d(y,u)
y.push(y[u])
if(p>=x.length)return H.d(x,p)
x.push(x[p])
if(u>=x.length)return H.d(x,u)
x.push(x[u])
o=y.length
if(p>=o)return H.d(y,p)
n=y[p]
if(u>=o)return H.d(y,u)
m=y[u]
u=t+4
if(u>=o)return H.d(y,u)
l=y[u]
u=new Float32Array(3)
k=new T.e(new Float32Array(3))
G.hR(n,m,l,new T.e(u),k)
w.push(k)
w.push(k)}v=[]
u=[]
j=new G.b3(!1,v,u,[],P.H())
j.X("aTexUV")
j.af(y)
j.ao("aTexUV",x)
j.X("aNormal")
j.ap("aNormal",w)
for(i=d*2,t=0;t<d;t=g){h=t*2+2
m=h+1
g=t+1
f=(g===d?0:g)*2+2
e=f+1
v.push(new G.ai(0,h,f))
v.push(new G.ai(1,e,m))
u.push(new G.bo(i+f,i+h,i+m,i+e))}return j},
hi:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=[]
y=[]
C.b.O(z,$.$get$dq())
C.b.O(y,$.$get$dr())
for(x=0;x<a;++x,z=w){w=[]
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.B)(z),++u){t=z[u]
s=J.f(t)
r=s.gY(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
q=new T.e(new Float32Array(3))
q.p(r)
r=s.gU(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
q.M(0,y[r])
q.W(0,0.5)
q.E(0)
r=s.gU(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
p=new T.e(new Float32Array(3))
p.p(r)
r=s.ga1(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
p.M(0,y[r])
p.W(0,0.5)
p.E(0)
r=s.ga1(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
r=y[r]
o=new T.e(new Float32Array(3))
o.p(r)
r=s.gY(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
o.M(0,y[r])
o.W(0,0.5)
o.E(0)
n=y.length
y.push(q)
m=y.length
y.push(p)
l=y.length
y.push(o)
w.push(new G.ai(s.gY(t),n,l))
w.push(new G.ai(s.gU(t),m,n))
w.push(new G.ai(s.ga1(t),l,m))
w.push(new G.ai(n,m,l))}}k=new G.b3(!1,[],[],[],P.H())
k.X("aTexUV")
k.X("aNormal")
for(v=z.length,u=0;u<z.length;z.length===v||(0,H.B)(z),++u){t=z[u]
s=J.f(t)
r=s.gY(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
j=y[r]
r=s.gU(t)
if(r>>>0!==r||r>=y.length)return H.d(y,r)
i=y[r]
s=s.ga1(t)
if(s>>>0!==s||s>=y.length)return H.d(y,s)
h=y[s]
s=J.f(j)
r=s.gF(j)
g=s.gm(j)
g=Math.atan2(H.ae(r),H.ae(g))
s=Math.acos(H.ae(s.gn(j)))
r=new Float32Array(2)
r[0]=0.5*(1+g*0.3183098861837907)
r[1]=s*0.3183098861837907
s=J.f(i)
g=s.gF(i)
f=s.gm(i)
f=Math.atan2(H.ae(g),H.ae(f))
s=Math.acos(H.ae(s.gn(i)))
g=new Float32Array(2)
g[0]=0.5*(1+f*0.3183098861837907)
g[1]=s*0.3183098861837907
s=J.f(h)
f=s.gF(h)
e=s.gm(h)
e=Math.atan2(H.ae(f),H.ae(e))
s=Math.acos(H.ae(s.gn(h)))
f=new Float32Array(2)
f[0]=0.5*(1+e*0.3183098861837907)
f[1]=s*0.3183098861837907
k.ap("aNormal",[j,i,h])
k.d_([j.a2(b),i.a2(b),h.a2(b)])
k.ao("aTexUV",[new T.m(r),new T.m(g),new T.m(f)])}return k},
ig:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p
z=h+1
y=g+1
x=B.iD(B.hU(new B.ih(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=[]
v=new G.b3(!1,[],[],w,P.H())
for(u=x.length,t=0;t<x.length;x.length===u||(0,H.B)(x),++t){s=x[t]
for(r=0;r<s.length;r+=2)w.push(J.bj(s[r]))}v.d5(z,y,!1)
v.d6(z,y)
v.X("aNormal")
for(w=x.length,u=v.e,t=0;t<x.length;x.length===w||(0,H.B)(x),++t){s=x[t]
for(r=0;q=s.length,r<q;r+=2){p=r+1
if(p>=q)return H.d(s,p)
p=s[p]
u.h(0,"aNormal").push(J.bj(p))}}return v},
iD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.e(y)
w=new Float32Array(3)
v=new T.e(w)
u=new Float32Array(3)
t=new T.e(u)
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
u[2]=k*j}v.E(0)
t.E(0)
for(i=0;i<s;++i){h=i/b*2*3.141592653589793
g=c*Math.cos(h)
f=c*Math.sin(h)
x.p(p)
x.at(v,g)
x.at(t,f)
q=new T.e(new Float32Array(3))
q.p(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.at(v,g)
x.at(t,f)
x.E(0)
q=new T.e(new Float32Array(3))
q.p(x)
m.push(q)}}return z},
hU:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.e(new Float32Array(3))
x=new T.e(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.an(0,y)
t=new T.e(new Float32Array(3))
t.p(y)
z.push(t)
t=new T.e(new Float32Array(3))
t.p(x)
z.push(t)}return z},
ih:{"^":"i:18;a,b,c,d",
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
b.sF(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",
cg:function(a){var z,y,x
z=new P.L(0,$.t,null,[null])
y=document.createElement("img")
x=new W.ad(y,"load",!1,[W.aa])
x.gee(x).az(new D.hz(new P.iN(z,[null]),y))
y.src=a
return z},
hz:{"^":"i:0;a,b",
$1:function(a){return this.a.aU(0,this.b)}},
ht:{"^":"c;a,b,c",
d8:function(a){var z
a=document
z=W.bu
W.am(a,"keydown",new D.hv(this),!1,z)
W.am(a,"keyup",new D.hw(this),!1,z)},
q:{
hu:function(a){var z=P.I
z=new D.ht(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z))
z.d8(a)
return z}}},
hv:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.M(0,J.cP(a))
z.b.M(0,a.which)}},
hw:{"^":"i:8;a",
$1:function(a){var z=this.a
z.a.cl(0,J.cP(a))
z.c.M(0,a.which)}},
hG:{"^":"c;a,b,c,d,e,f,r,x",
da:function(a){var z,y
if(a==null)a=document
z=J.f(a)
y=z.gb_(a)
W.am(y.a,y.b,new D.hI(this),!1,H.G(y,0))
y=z.gaZ(a)
W.am(y.a,y.b,new D.hJ(this),!1,H.G(y,0))
y=z.gb0(a)
W.am(y.a,y.b,new D.hK(this),!1,H.G(y,0))
z=z.gb1(a)
W.am(z.a,z.b,new D.hL(this),!1,H.G(z,0))},
q:{
hH:function(a){var z=P.I
z=new D.hG(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),0,0,0,0,0)
z.da(a)
return z}}},
hI:{"^":"i:5;a",
$1:function(a){var z,y
z=J.f(a)
z.ay(a)
y=this.a
y.r=z.gcj(a).a
y.x=z.gcj(a).b
y.d=a.movementX
y.e=a.movementY}},
hJ:{"^":"i:5;a",
$1:function(a){var z=J.f(a)
z.ay(a)
P.ap("BUTTON "+H.b(z.gbW(a)))
z=this.a
z.a.M(0,a.button)
z.b.M(0,a.button)}},
hK:{"^":"i:5;a",
$1:function(a){var z,y
z=J.f(a)
z.ay(a)
y=this.a
y.a.cl(0,z.gbW(a))
y.c.M(0,a.button)}},
hL:{"^":"i:19;a",
$1:function(a){var z=J.f(a)
z.ay(a)
this.a.f=z.gea(a)}},
hT:{"^":"fK;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bg:function(a){var z,y
z=C.Q.eg(a,0,new A.kN())
if(typeof z!=="number")return H.v(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kN:{"^":"i:20;",
$2:function(a,b){var z,y
z=J.aA(a,J.a6(b))
if(typeof z!=="number")return H.v(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",P:{"^":"c;bA:a<",
p:function(a){var z,y
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
k:function(a){return"[0] "+this.a0(0).k(0)+"\n[1] "+this.a0(1).k(0)+"\n[2] "+this.a0(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=9)return H.d(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.P){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gC:function(a){return A.bg(this.a)},
a0:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.d(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.d(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.d(y,x)
z[2]=y[x]
return new T.e(z)},
R:function(a){var z=new T.P(new Float32Array(9))
z.p(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.P(z)
y.p(this)
x=b.gbA()
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
I:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.P(z)
y.p(this)
x=b.gbA()
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
e6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.p(a)
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
a2:function(a){var z,y
z=new Float32Array(9)
y=new T.P(z)
y.p(this)
z[0]=z[0]*a
z[1]=z[1]*a
z[2]=z[2]*a
z[3]=z[3]*a
z[4]=z[4]*a
z[5]=z[5]*a
z[6]=z[6]*a
z[7]=z[7]*a
z[8]=z[8]*a
return y}},C:{"^":"c;bB:a<",
p:function(a){var z,y
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
k:function(a){return"[0] "+this.a0(0).k(0)+"\n[1] "+this.a0(1).k(0)+"\n[2] "+this.a0(2).k(0)+"\n[3] "+this.a0(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.C){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gC:function(a){return A.bg(this.a)},
a0:function(a){var z,y,x
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
return new T.a2(z)},
R:function(a){var z=new T.C(new Float32Array(16))
z.p(this)
return z},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.C(z)
y.p(this)
x=b.gbB()
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
I:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.C(z)
y.p(this)
x=b.gbB()
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
cL:function(a,b,c){var z,y,x,w,v,u
z=new Float32Array(16)
y=new T.C(z)
y.p(this)
if(typeof a==="number"){x=a
w=x
v=w}else{v=null
w=null
x=null}u=z[0]
if(typeof v!=="number")return H.v(v)
z[0]=u*v
z[1]=z[1]*v
z[2]=z[2]*v
z[3]=z[3]*v
u=z[4]
if(typeof w!=="number")return H.v(w)
z[4]=u*w
z[5]=z[5]*w
z[6]=z[6]*w
z[7]=z[7]*w
u=z[8]
if(typeof x!=="number")return H.v(x)
z[8]=u*x
z[9]=z[9]*x
z[10]=z[10]*x
z[11]=z[11]*x
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]
return y},
a2:function(a){return this.cL(a,null,null)},
H:function(){var z=this.a
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
cg:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},m:{"^":"c;bJ:a<",
v:function(a,b){var z=this.a
z[0]=a
z[1]=b},
p:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.m){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gC:function(a){return A.bg(this.a)},
I:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.m(z)
y.p(this)
x=b.gbJ()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.m(z)
y.p(this)
x=b.gbJ()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
W:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
a2:function(a){var z=new T.m(new Float32Array(2))
z.p(this)
z.W(0,a)
return z},
R:function(a){var z=new T.m(new Float32Array(2))
z.p(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},e:{"^":"c;aT:a<",
t:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
p:function(a){var z,y
z=a.gaT()
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
gC:function(a){return A.bg(this.a)},
I:function(a,b){var z=new T.e(new Float32Array(3))
z.p(this)
z.an(0,b)
return z},
l:function(a,b){var z=new T.e(new Float32Array(3))
z.p(this)
z.M(0,b)
return z},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
E:function(a){var z,y,x,w,v,u
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
aV:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
c4:function(a){var z,y,x,w,v,u,t,s
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
an:function(a,b){var z,y
z=b.gaT()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
W:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
a2:function(a){var z=new T.e(new Float32Array(3))
z.p(this)
z.W(0,a)
return z},
R:function(a){var z=new T.e(new Float32Array(3))
z.p(this)
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
q:{
D:function(a,b,c){var z=new T.e(new Float32Array(3))
z.t(a,b,c)
return z}}},a2:{"^":"c;bK:a<",
p:function(a){var z,y
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
if(b instanceof T.a2){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gC:function(a){return A.bg(this.a)},
I:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a2(z)
y.p(this)
x=b.gbK()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.a2(z)
y.p(this)
x=b.gbK()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>=4)return H.d(z,b)
return z[b]},
gj:function(a){var z,y,x,w
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
a2:function(a){var z=new T.a2(new Float32Array(4))
z.p(this)
z.W(0,a)
return z},
R:function(a){var z=new T.a2(new Float32Array(4))
z.p(this)
return z},
gU:function(a){return this.a[2]},
gY:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gaA:function(a){return this.a[3]}}}],["","",,V,{"^":"",
eL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=document
x=new R.io(0,0,null,null,null,null)
x.dg(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fM(null,w)
u=J.fl(w,"webgl2",P.dw(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.Z(P.dm('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.fm(u))
if($.eG>0)P.ap("I: "+t)
J.f1(u,0,0,0,1)
J.b_(u,2929)
J.b_(u,2884)
u=new Float32Array(3)
t=D.hu(null)
s=D.hH(w)
r=new T.C(new Float32Array(16))
r.H()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.hT(25,10,0,0,new T.e(u),-0.02,t,s,r,new T.e(q),new T.e(p),new T.e(o),new T.e(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.C(new Float32Array(16))
u.H()
t=new T.C(new Float32Array(16))
t.H()
m=new G.hV(n,50,1,0.1,1000,u,t,new T.C(new Float32Array(16)),P.H(),"perspective",!1,!0)
m.br()
u=H.A([],[A.cm])
l=new R.i7(w,m,null,v,u,17664,0,0,0,0,"main",!1,!0)
l.dc("main",v,null)
l.ev(null)
W.am(window,"resize",l.geu(),!1,W.aa)
t=G.dI("textured",v,$.$get$eS(),$.$get$eR())
s=[]
u.push(new A.cm(t,[m],s,"objects",!1,!0))
k=G.cj("wood")
k.d.i(0,"uColor",$.$get$d8())
j=G.cj("gradient")
j.d.i(0,"uColor",$.$get$da())
i=G.cj("trans")
r=i.d
r.i(0,"uColor",$.$get$d9())
r.i(0,"cBlendEquation",$.$get$d3())
r=G.b4("icosahedron-3",t,B.hi(3,1,!0))
q=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.H()
o=new T.C(new Float32Array(16))
o.H()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
e=new A.aM(k,r,[],new T.P(q),p,o,new T.e(h),new T.e(g),new T.e(f),new T.e(new Float32Array(3)),"sphere",!1,!0)
e.a6(0,0,0)
s.push(e)
r=G.b4("cube",t,B.fU(!0,1,0,1,0,1,1,1))
q=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.H()
o=new T.C(new Float32Array(16))
o.H()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
d=new A.aM(j,r,[],new T.P(q),p,o,new T.e(h),new T.e(g),new T.e(f),new T.e(new Float32Array(3)),"cube",!1,!0)
d.a6(-5,0,-5)
s.push(d)
r=G.b4("cylinder-32",t,B.fW(3,6,2,32,!0))
q=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.H()
o=new T.C(new Float32Array(16))
o.H()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
c=new A.aM(i,r,[],new T.P(q),p,o,new T.e(h),new T.e(g),new T.e(f),new T.e(new Float32Array(3)),"cylinder",!1,!0)
c.a6(5,0,-5)
s.push(c)
r=new T.e(new Float32Array(3))
r.t(-2,-2,0)
q=new T.e(new Float32Array(3))
q.t(2,-2,0)
p=new T.e(new Float32Array(3))
p.t(2,2,0)
o=new T.e(new Float32Array(3))
o.t(-2,2,0)
h=new T.m(new Float32Array(2))
h.v(0,0)
g=new T.m(new Float32Array(2))
g.v(1,0)
f=new T.m(new Float32Array(2))
f.v(1,1)
b=new T.m(new Float32Array(2))
b.v(0,1)
a=new T.e(new Float32Array(3))
a.t(0,0,1)
a0=new G.b3(!1,[],[],[],P.H())
a0.X("aTexUV")
a0.d0([r,q,p,o])
a0.ao("aTexUV",[h,g,f,b])
a0.X("aNormal")
a0.ap("aNormal",[a,a,a,a])
r=G.b4("quad",t,a0)
q=new Float32Array(9)
p=new T.C(new Float32Array(16))
p.H()
o=new T.C(new Float32Array(16))
o.H()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
a1=new A.aM(i,r,[],new T.P(q),p,o,new T.e(h),new T.e(g),new T.e(f),new T.e(new Float32Array(3)),"quad",!1,!0)
a1.a6(-5,0,5)
s.push(a1)
t=G.b4("torusknot",t,B.ig(!0,!0,1,2,3,1,128,16,0.4,!1))
r=new Float32Array(9)
q=new T.C(new Float32Array(16))
q.H()
p=new T.C(new Float32Array(16))
p.H()
o=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
a2=new A.aM(j,t,[],new T.P(r),q,p,new T.e(o),new T.e(h),new T.e(g),new T.e(new Float32Array(3)),"torus",!1,!0)
a2.a6(5,0,5)
s.push(a2)
t=G.dI("stars",v,$.$get$eO(),$.$get$eN())
s=[]
r=$.$get$d1()
q=P.H()
q.i(0,"cDepthTest",!0)
q.i(0,"cDepthWrite",!1)
q.i(0,"cBlendEquation",r)
q.i(0,"cStencilFunc",$.$get$co())
a3=y.createElement("canvas")
a3.width=64
a3.height=64
a4=C.E.cK(a3,"2d")
a5=J.f4(a4,32,32,1,32,32,22)
a5.addColorStop(0,"gray")
a5.addColorStop(1,"black")
a4.fillStyle=a5
a4.fillRect(0,0,64,64)
a5=a4.createRadialGradient(32,32,1,32,32,6)
a5.addColorStop(0,"white")
a5.addColorStop(1,"gray")
a4.globalAlpha=0.9
a4.fillStyle=a5
a4.arc(32,32,4,0,6.283185307179586,!1)
a4.fill("nonzero")
q.i(0,"uTexture",G.bs(t.d,"Utils::Particles",a3,null,3553))
q.i(0,"uPointSize",1000)
a6=R.iI(t,2000,100)
y=new Float32Array(9)
r=new T.C(new Float32Array(16))
r.H()
p=new T.C(new Float32Array(16))
p.H()
o=new Float32Array(3)
h=new Float32Array(3)
g=new Float32Array(3)
s.push(new A.aM(new G.dA(q,"stars",!1,!0),a6,[],new T.P(y),r,p,new T.e(o),new T.e(h),new T.e(g),new T.e(new Float32Array(3)),a6.a,!1,!0))
u.push(new A.cm(t,[m],s,"stars",!1,!0))
z.a=0
P.he([D.cg("../gradient.jpg"),D.cg("../transparent.png"),D.cg("../wood.jpg")],null,!1).az(new V.l_(v,j,i,k,new V.kZ(z,n,l,x)))},
kZ:{"^":"i:21;a,b,c,d",
$1:function(b5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
z=this.a
y=J.aU(b5)
y.I(b5,z.a)
z.a=y.l(b5,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.A(0,0)||w.A(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.bf()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.bf()
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
if(typeof v!=="number")return v.bf()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.e3(y.id,-1.4707963267948965,1.4707963267948965)
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
m=u.I(0,t)
m.E(0)
l=o.c4(m)
l.E(0)
k=m.c4(l)
k.E(0)
t=l.aV(u)
n=k.aV(u)
u=m.aV(u)
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
i=y.f.a
i[0]=v[2]
i[1]=v[6]
i[2]=v[10]
y=-y.k1
g=i[0]
e=i[1]
d=i[2]
a=Math.sqrt(g*g+e*e+d*d)
r=i[0]/a
q=i[1]/a
p=i[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=r*r*a2+a0
y=p*a1
a4=r*q*a2-y
i=q*a1
a5=r*p*a2+i
a6=q*r*a2+y
a7=q*q*a2+a0
y=r*a1
a8=q*p*a2-y
a9=p*r*a2-i
b0=p*q*a2+y
b1=p*p*a2+a0
y=v[0]
i=v[4]
d=v[8]
e=v[1]
g=v[5]
c=v[9]
b=v[2]
j=v[6]
h=v[10]
f=v[3]
t=v[7]
n=v[11]
v[0]=y*a3+i*a6+d*a9
v[1]=e*a3+g*a6+c*a9
v[2]=b*a3+j*a6+h*a9
v[3]=f*a3+t*a6+n*a9
v[4]=y*a4+i*a7+d*b0
v[5]=e*a4+g*a7+c*b0
v[6]=b*a4+j*a7+h*b0
v[7]=f*a4+t*a7+n*b0
v[8]=y*a5+i*a8+d*b1
v[9]=e*a5+g*a8+c*b1
v[10]=b*a5+j*a8+h*b1
v[11]=f*a5+t*a8+n*b1
w.c.aj(0)
w.b.aj(0)
x.e=0
x.d=0
x.f=0
x.c.aj(0)
x.b.aj(0)
b2=[]
this.c.d2(b2)
b3=[]
for(y=b2.length,b4=0;b4<b2.length;b2.length===y||(0,H.B)(b2),++b4)b3.push(b2[b4].k(0))
C.a7.gdX(window).az(this)
this.d.dj(z.a,C.b.ad(b3,"<br>"))}},
l_:{"^":"i:22;a,b,c,d,e",
$1:function(a){var z,y
z=this.a
y=J.a4(a)
this.b.d.i(0,"uTexture",G.bs(z,"../gradient.jpg",y.h(a,0),null,3553))
this.c.d.i(0,"uTexture",G.bs(z,"../transparent.png",y.h(a,1),null,3553))
this.d.d.i(0,"uTexture",G.bs(z,"../wood.jpg",y.h(a,2),null,3553))
this.e.$1(0)}}},1]]
setupProgram(dart,0,0)
J.p=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dt.prototype
return J.ds.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.hr.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.bd(a)}
J.kJ=function(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.bd(a)}
J.a4=function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.bd(a)}
J.bc=function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.bd(a)}
J.aU=function(a){if(typeof a=="number")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.kK=function(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.eH=function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b9.prototype
return a}
J.f=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.c)return a
return J.bd(a)}
J.aA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kJ(a).l(a,b)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).G(a,b)}
J.S=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aU(a).al(a,b)}
J.aX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aU(a).a5(a,b)}
J.eU=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aU(a).I(a,b)}
J.aY=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kX(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a4(a).h(a,b)}
J.eV=function(a,b,c,d){return J.f(a).dJ(a,b,c,d)}
J.cH=function(a,b){return J.f(a).bL(a,b)}
J.eW=function(a,b,c,d){return J.f(a).bM(a,b,c,d)}
J.cI=function(a,b,c){return J.f(a).bO(a,b,c)}
J.eX=function(a,b){return J.f(a).dZ(a,b)}
J.bR=function(a,b,c){return J.f(a).bP(a,b,c)}
J.eY=function(a,b,c){return J.f(a).bR(a,b,c)}
J.aZ=function(a,b,c){return J.f(a).bS(a,b,c)}
J.bi=function(a,b){return J.f(a).e1(a,b)}
J.eZ=function(a,b){return J.f(a).bT(a,b)}
J.f_=function(a,b,c){return J.f(a).bU(a,b,c)}
J.cJ=function(a,b,c,d){return J.f(a).bV(a,b,c,d)}
J.f0=function(a,b){return J.bc(a).bY(a,b)}
J.f1=function(a,b,c,d,e){return J.f(a).bZ(a,b,c,d,e)}
J.bj=function(a){return J.f(a).R(a)}
J.cK=function(a,b){return J.eH(a).e4(a,b)}
J.f2=function(a,b){return J.kK(a).Z(a,b)}
J.bS=function(a,b,c){return J.a4(a).e5(a,b,c)}
J.bT=function(a){return J.f(a).c0(a)}
J.f3=function(a){return J.f(a).c1(a)}
J.f4=function(a,b,c,d,e,f,g){return J.f(a).e8(a,b,c,d,e,f,g)}
J.f5=function(a){return J.f(a).c3(a)}
J.f6=function(a){return J.f(a).e9(a)}
J.f7=function(a,b){return J.f(a).c5(a,b)}
J.bU=function(a,b){return J.f(a).c6(a,b)}
J.f8=function(a,b,c,d){return J.f(a).c7(a,b,c,d)}
J.f9=function(a,b,c,d,e){return J.f(a).eb(a,b,c,d,e)}
J.fa=function(a,b,c,d,e){return J.f(a).c8(a,b,c,d,e)}
J.fb=function(a,b,c,d,e,f){return J.f(a).ec(a,b,c,d,e,f)}
J.cL=function(a,b){return J.bc(a).w(a,b)}
J.b_=function(a,b){return J.f(a).c9(a,b)}
J.fc=function(a,b){return J.f(a).ca(a,b)}
J.fd=function(a){return J.f(a).ed(a)}
J.cM=function(a,b){return J.bc(a).B(a,b)}
J.cN=function(a){return J.f(a).gdY(a)}
J.fe=function(a){return J.f(a).gaW(a)}
J.aB=function(a){return J.f(a).gS(a)}
J.a6=function(a){return J.p(a).gC(a)}
J.b0=function(a){return J.bc(a).gN(a)}
J.a7=function(a){return J.a4(a).gj(a)}
J.ff=function(a){return J.f(a).gci(a)}
J.fg=function(a){return J.f(a).gb2(a)}
J.cO=function(a){return J.f(a).ga3(a)}
J.fh=function(a){return J.f(a).gez(a)}
J.fi=function(a){return J.f(a).gcr(a)}
J.fj=function(a){return J.f(a).gaA(a)}
J.cP=function(a){return J.f(a).geG(a)}
J.bV=function(a){return J.f(a).gm(a)}
J.bW=function(a){return J.f(a).gn(a)}
J.cQ=function(a){return J.f(a).gF(a)}
J.fk=function(a){return J.f(a).b7(a)}
J.fl=function(a,b,c){return J.f(a).b8(a,b,c)}
J.fm=function(a){return J.f(a).aB(a)}
J.fn=function(a){return J.f(a).b9(a)}
J.fo=function(a,b){return J.f(a).ba(a,b)}
J.fp=function(a,b,c){return J.f(a).bb(a,b,c)}
J.cR=function(a,b,c){return J.f(a).be(a,b,c)}
J.fq=function(a,b){return J.f(a).cf(a,b)}
J.fr=function(a,b,c){return J.f(a).ck(a,b,c)}
J.cS=function(a){return J.bc(a).es(a)}
J.fs=function(a,b){return J.f(a).sav(a,b)}
J.ft=function(a,b,c,d){return J.f(a).bj(a,b,c,d)}
J.fu=function(a,b,c,d,e,f,g){return J.f(a).cn(a,b,c,d,e,f,g)}
J.fv=function(a,b,c,d){return J.f(a).co(a,b,c,d)}
J.cT=function(a,b,c,d){return J.f(a).cp(a,b,c,d)}
J.cU=function(a){return J.aU(a).eA(a)}
J.fw=function(a){return J.eH(a).eC(a)}
J.aC=function(a){return J.p(a).k(a)}
J.fx=function(a,b,c,d){return J.f(a).eE(a,b,c,d)}
J.fy=function(a,b,c){return J.f(a).cs(a,b,c)}
J.fz=function(a,b,c){return J.f(a).ct(a,b,c)}
J.bX=function(a,b,c){return J.f(a).cu(a,b,c)}
J.fA=function(a,b,c){return J.f(a).cv(a,b,c)}
J.cV=function(a,b,c){return J.f(a).cw(a,b,c)}
J.cW=function(a,b,c){return J.f(a).cz(a,b,c)}
J.cX=function(a,b,c){return J.f(a).cA(a,b,c)}
J.cY=function(a,b,c,d){return J.f(a).cB(a,b,c,d)}
J.cZ=function(a,b,c,d){return J.f(a).cC(a,b,c,d)}
J.fB=function(a,b){return J.f(a).cE(a,b)}
J.fC=function(a,b,c){return J.f(a).eF(a,b,c)}
J.fD=function(a,b,c,d,e,f,g){return J.f(a).cF(a,b,c,d,e,f,g)}
J.fE=function(a,b,c,d,e){return J.f(a).cH(a,b,c,d,e)}
I.ay=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bY.prototype
C.E=W.bm.prototype
C.n=W.fS.prototype
C.F=W.h_.prototype
C.G=J.h.prototype
C.b=J.aG.prototype
C.t=J.ds.prototype
C.c=J.dt.prototype
C.a=J.aI.prototype
C.i=J.aJ.prototype
C.N=J.aK.prototype
C.Q=H.hM.prototype
C.R=W.hO.prototype
C.x=J.hW.prototype
C.C=W.iA.prototype
C.q=J.b9.prototype
C.a7=W.iK.prototype
C.D=new P.jp()
C.d=new P.jG()
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
C.u=function(hooks) { return hooks; }

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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.O=H.A(I.ay(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.P=I.ay(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.ay([])
C.o=H.A(I.ay(["bind","if","ref","repeat","syntax"]),[P.n])
C.p=H.A(I.ay(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.S=new G.x("vec3","vertex btangents",0)
C.e=new G.x("vec3","",0)
C.T=new G.x("vec4","delta from light",0)
C.m=new G.x("","",0)
C.y=new G.x("vec3","vertex coordinates",0)
C.U=new G.x("vec3","vertex binormals",0)
C.z=new G.x("vec4","for wireframe",0)
C.V=new G.x("vec4","per vertex color",0)
C.W=new G.x("float","for normal maps",0)
C.j=new G.x("mat4","",0)
C.Y=new G.x("mat4","",4)
C.X=new G.x("mat4","",128)
C.f=new G.x("float","",0)
C.Z=new G.x("float","",4)
C.a_=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.a0=new G.x("float","for bump maps",0)
C.a1=new G.x("vec2","texture uvs",0)
C.a2=new G.x("float","time since program start in sec",0)
C.k=new G.x("vec2","",0)
C.a3=new G.x("samplerCube","",0)
C.l=new G.x("vec4","",0)
C.a4=new G.x("vec3","vertex normals",0)
C.a5=new G.x("sampler2DShadow","",0)
C.A=new G.x("vec3","per vertex color",0)
C.B=new G.x("mat3","",0)
C.a6=new G.x("vec3","vertex tangents",0)
$.a_=0
$.aD=null
$.d4=null
$.eJ=null
$.ez=null
$.eP=null
$.bM=null
$.bN=null
$.cE=null
$.at=null
$.aR=null
$.aS=null
$.cz=!1
$.t=C.d
$.a9=null
$.c3=null
$.dk=null
$.dj=null
$.dg=null
$.df=null
$.de=null
$.dd=null
$.eG=0
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
I.$lazy(y,x,w)}})(["dc","$get$dc",function(){return H.eI("_$dart_dartClosure")},"cc","$get$cc",function(){return H.eI("_$dart_js")},"dT","$get$dT",function(){return H.a1(H.bI({
toString:function(){return"$receiver$"}}))},"dU","$get$dU",function(){return H.a1(H.bI({$method$:null,
toString:function(){return"$receiver$"}}))},"dV","$get$dV",function(){return H.a1(H.bI(null))},"dW","$get$dW",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e_","$get$e_",function(){return H.a1(H.bI(void 0))},"e0","$get$e0",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dY","$get$dY",function(){return H.a1(H.dZ(null))},"dX","$get$dX",function(){return H.a1(function(){try{null.$method$}catch(z){return z.message}}())},"e2","$get$e2",function(){return H.a1(H.dZ(void 0))},"e1","$get$e1",function(){return H.a1(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cu","$get$cu",function(){return P.iO()},"c6","$get$c6",function(){return P.j8(null,P.b5)},"aT","$get$aT",function(){return[]},"db","$get$db",function(){return{}},"ef","$get$ef",function(){return P.cf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cw","$get$cw",function(){return P.H()},"co","$get$co",function(){return new G.dR(1281,0,4294967295)},"d2","$get$d2",function(){return G.cr(1281,1281,1281)},"d3","$get$d3",function(){return G.cr(32774,770,771)},"d1","$get$d1",function(){return G.cr(32774,770,769)},"X","$get$X",function(){return P.dw(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a5,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a3,"uAnimationTable",C.h,"uTime",C.a2,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.f,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"e6","$get$e6",function(){return C.D},"d9","$get$d9",function(){return T.D(0.4,0.4,0.4)},"d8","$get$d8",function(){return T.D(0,0,0)},"da","$get$da",function(){return T.D(1,0,0)},"eS","$get$eS",function(){var z=G.by("Textured")
z.bl(["aPosition","aTexUV"])
z.aq(["uPerspectiveViewMatrix","uModelMatrix"])
z.bm(["vTexUV"])
z.ar(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"eR","$get$eR",function(){var z=G.by("TexturedF")
z.bm(["vTexUV"])
z.aq(["uColor","uTexture"])
z.ar(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return z},"eO","$get$eO",function(){var z=G.by("PointSpritesV")
z.bl(["aPosition"])
z.aq(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.ar(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"eN","$get$eN",function(){var z=G.by("PointSpritesF")
z.aq(["uTexture"])
z.ar(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z},"eb","$get$eb",function(){return[T.D(0,0,1),T.D(0,0,-1),T.D(0,1,0),T.D(0,-1,0),T.D(1,0,0),T.D(-1,0,0)]},"dq","$get$dq",function(){return[G.F(0,11,5),G.F(0,5,1),G.F(0,1,7),G.F(0,7,10),G.F(0,10,11),G.F(1,5,9),G.F(5,11,4),G.F(11,10,2),G.F(10,7,6),G.F(7,1,8),G.F(3,9,4),G.F(3,4,2),G.F(3,2,6),G.F(3,6,8),G.F(3,8,9),G.F(4,9,5),G.F(2,4,11),G.F(6,2,10),G.F(8,6,7),G.F(9,8,1)]},"eQ","$get$eQ",function(){return(1+P.l3(5))/2},"dr","$get$dr",function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$eQ()
y=T.D(-1,z,0)
y.E(0)
x=T.D(1,z,0)
x.E(0)
if(typeof z!=="number")return z.eI()
w=T.D(-1,-z,0)
w.E(0)
v=T.D(1,-z,0)
v.E(0)
u=T.D(0,-1,z)
u.E(0)
t=T.D(0,1,z)
t.E(0)
s=T.D(0,-1,-z)
s.E(0)
r=T.D(0,1,-z)
r.E(0)
q=T.D(z,0,-1)
q.E(0)
p=T.D(z,0,1)
p.E(0)
o=T.D(-z,0,-1)
o.E(0)
z=T.D(-z,0,1)
z.E(0)
return[y,x,w,v,u,t,s,r,q,p,o,z]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.u},{func:1,args:[W.Q]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.n,args:[P.I]},{func:1,args:[W.bu]},{func:1,ret:P.cB,args:[W.aq,P.n,P.n,W.cv]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aP]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aP]},{func:1,v:true,args:[W.u,W.u]},{func:1,v:true,args:[W.aa]},{func:1,v:true,args:[P.ao,T.e]},{func:1,args:[W.aQ]},{func:1,args:[P.I,P.c]},{func:1,v:true,args:[P.aV]},{func:1,args:[P.j]},{func:1,ret:P.I,args:[,,]}]
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
if(x==y)H.l5(d||a)
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
Isolate.ay=a.ay
Isolate.aw=a.aw
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
if(typeof dartMainRunner==="function")dartMainRunner(V.eL,[])
else V.eL([])})})()
//# sourceMappingURL=basics.dart.js.map
