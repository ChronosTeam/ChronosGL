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
if(a1==="n"){processStatics(init.statics[b2]=b3.n,b4)
delete b3.n}else if(a2===43){w[g]=a1.substring(1)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.bW"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.bW"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.bW(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ab=function(){}
var dart=[["","",,H,{"^":"",ky:{"^":"c;a"}}],["","",,J,{"^":"",
p:function(a){return void 0},
c_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aQ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.bZ==null){H.ja()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.d9("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bC()]
if(v!=null)return v
v=H.je(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$bC(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
d:{"^":"c;",
G:function(a,b){return a===b},
gv:function(a){return H.ar(a)},
k:["c1",function(a){return"Instance of '"+H.as(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ff:{"^":"d;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isbU:1},
cB:{"^":"d;",
G:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isb3:1},
bD:{"^":"d;",
gv:function(a){return 0},
k:["c3",function(a){return String(a)}]},
fx:{"^":"bD;"},
aO:{"^":"bD;"},
aq:{"^":"bD;",
k:function(a){var z=a[$.$get$cm()]
return z==null?this.c3(a):J.ai(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
am:{"^":"d;$ti",
M:function(a,b){var z,y
if(!!a.fixed$length)H.G(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.N)(b),++y)a.push(b[y])},
a5:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.e(y,x)
y[x]=w}return y.join(b)},
aL:function(a,b){return H.cU(a,b,null,H.z(a,0))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
bW:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.G(P.r("setRange"))
P.fG(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.p(d)
if(!!y.$isf){x=e
w=d}else{w=y.aL(d,e).dt(0,!1)
x=0}y=J.a0(w)
if(x+z>y.gj(w))throw H.a(H.fc())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
a7:function(a,b,c,d){return this.bW(a,b,c,d,0)},
ba:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.a1(a))}return!1},
bX:function(a,b){if(!!a.immutable$list)H.G(P.r("sort"))
H.fT(a,J.iL())},
aM:function(a){return this.bX(a,null)},
D:function(a,b){var z
for(z=0;z<a.length;++z)if(J.H(a[z],b))return!0
return!1},
k:function(a){return P.bB(a,"[","]")},
gH:function(a){return new J.eB(a,a.length,0,null,[H.z(a,0)])},
gv:function(a){return H.ar(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.G(P.r("set length"))
if(b<0)throw H.a(P.a8(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.V(a,b))
if(b>=a.length||b<0)throw H.a(H.V(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.G(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.V(a,b))
if(b>=a.length||b<0)throw H.a(H.V(a,b))
a[b]=c},
t:function(a,b){var z,y
z=C.b.t(a.length,C.b.gj(b))
y=H.w([],[H.z(a,0)])
this.sj(y,z)
this.a7(y,0,a.length,a)
this.a7(y,a.length,z,b)
return y},
$ism:1,
$asm:I.ab,
$isf:1,
n:{
an:function(a){a.fixed$length=Array
return a},
kw:[function(a,b){return J.e1(a,b)},"$2","iL",8,0,17]}},
kx:{"^":"am;$ti"},
eB:{"^":"c;a,b,c,d,$ti",
gu:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.N(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ao:{"^":"d;",
X:function(a,b){var z
if(typeof b!=="number")throw H.a(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gaf(b)
if(this.gaf(a)===z)return 0
if(this.gaf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaf:function(a){return a===0?1/a<0:a<0},
cY:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
dv:function(a,b){var z
if(b>20)throw H.a(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaf(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
t:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a-b},
ah:function(a,b){return a/b},
c5:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b5(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.b5(a,b)},
b5:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
b3:function(a,b){var z
if(a>0)z=this.cL(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cL:function(a,b){return b>31?0:a>>>b},
Y:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a<b},
a6:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a>b},
$isay:1,
$isaz:1},
cA:{"^":"ao;",$isC:1},
cz:{"^":"ao;"},
ap:{"^":"d;",
ay:function(a,b){if(b<0)throw H.a(H.V(a,b))
if(b>=a.length)H.G(H.V(a,b))
return a.charCodeAt(b)},
a9:function(a,b){if(b>=a.length)throw H.a(H.V(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!=="string")throw H.a(P.eA(b,null,null))
return a+b},
bZ:function(a,b,c){var z
if(c>a.length)throw H.a(P.a8(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bY:function(a,b){return this.bZ(a,b,0)},
aj:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.G(H.U(c))
if(b<0)throw H.a(P.b4(b,null,null))
if(typeof c!=="number")return H.ae(c)
if(b>c)throw H.a(P.b4(b,null,null))
if(c>a.length)throw H.a(P.b4(c,null,null))
return a.substring(b,c)},
c_:function(a,b){return this.aj(a,b,null)},
du:function(a){return a.toLowerCase()},
dz:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.a9(z,0)===133){x=J.fg(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.ay(z,w)===133?J.fh(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
d0:function(a,b,c){if(c>a.length)throw H.a(P.a8(c,0,a.length,null,null))
return H.jl(a,b,c)},
X:function(a,b){var z
if(typeof b!=="string")throw H.a(H.U(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.V(a,b))
return a[b]},
$ism:1,
$asm:I.ab,
$isl:1,
n:{
cC:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fg:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.a9(a,b)
if(y!==32&&y!==13&&!J.cC(y))break;++b}return b},
fh:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.ay(a,z)
if(y!==32&&y!==13&&!J.cC(y))break}return b}}}}],["","",,H,{"^":"",
fb:function(){return new P.b8("No element")},
fd:function(){return new P.b8("Too many elements")},
fc:function(){return new P.b8("Too few elements")},
fT:function(a,b){H.aL(a,0,J.X(a)-1,b)},
aL:function(a,b,c,d){if(c-b<=32)H.fS(a,b,c,d)
else H.fR(a,b,c,d)},
fS:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a0(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.I(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
fR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.V(c-b+1,6)
y=b+z
x=c-z
w=C.b.V(b+c,2)
v=w-z
u=w+z
t=J.a0(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.I(d.$2(s,r),0)){n=r
r=s
s=n}if(J.I(d.$2(p,o),0)){n=o
o=p
p=n}if(J.I(d.$2(s,q),0)){n=q
q=s
s=n}if(J.I(d.$2(r,q),0)){n=q
q=r
r=n}if(J.I(d.$2(s,p),0)){n=p
p=s
s=n}if(J.I(d.$2(q,p),0)){n=p
p=q
q=n}if(J.I(d.$2(r,o),0)){n=o
o=r
r=n}if(J.I(d.$2(r,q),0)){n=q
q=r
r=n}if(J.I(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.H(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.p(i)
if(h.G(i,0))continue
if(h.Y(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.bi(i)
if(h.a6(i,0)){--l
continue}else{g=l-1
if(h.Y(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aC(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.I(d.$2(j,p),0))for(;!0;)if(J.I(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aC(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
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
H.aL(a,b,m-2,d)
H.aL(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.H(d.$2(t.h(a,m),r),0);)++m
for(;J.H(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.H(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.H(d.$2(j,p),0))for(;!0;)if(J.H(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aC(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.aL(a,m,l,d)}else H.aL(a,m,l,d)},
bx:{"^":"b0;$ti"},
b1:{"^":"bx;$ti",
gH:function(a){return new H.cH(this,this.gj(this),0,null,[H.dM(this,"b1",0)])},
aD:function(a,b){return this.c2(0,b)}},
h1:{"^":"b1;a,b,c,$ti",
ck:function(a,b,c,d){},
gcC:function(){var z=J.X(this.a)
return z},
gcM:function(){var z,y
z=J.X(this.a)
y=this.b
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.X(this.a)
y=this.b
if(y>=z)return 0
return z-y},
p:function(a,b){var z,y
z=this.gcM()+b
if(b>=0){y=this.gcC()
if(typeof y!=="number")return H.ae(y)
y=z>=y}else y=!0
if(y)throw H.a(P.v(b,this,"index",null,null))
return J.c6(this.a,z)},
dt:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a0(y)
w=x.gj(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.w(u,this.$ti)
for(s=0;s<v;++s){u=x.p(y,z+s)
if(s>=t.length)return H.e(t,s)
t[s]=u
if(x.gj(y)<w)throw H.a(P.a1(this))}return t},
n:{
cU:function(a,b,c,d){var z=new H.h1(a,b,c,[d])
z.ck(a,b,c,d)
return z}}},
cH:{"^":"c;a,b,c,d,$ti",
gu:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.a0(z)
x=y.gj(z)
if(this.b!==x)throw H.a(P.a1(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.p(z,w);++this.c
return!0}},
fm:{"^":"b1;a,b,$ti",
gj:function(a){return J.X(this.a)},
p:function(a,b){return this.b.$1(J.c6(this.a,b))},
$asbx:function(a,b){return[b]},
$asb1:function(a,b){return[b]},
$asb0:function(a,b){return[b]}},
da:{"^":"b0;a,b,$ti",
gH:function(a){return new H.ha(J.aG(this.a),this.b,this.$ti)}},
ha:{"^":"fe;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gu(z))===!0)return!0
return!1},
gu:function(a){var z=this.a
return z.gu(z)}},
aY:{"^":"c;$ti"}}],["","",,H,{"^":"",
j2:function(a){return init.types[a]},
jd:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.p(a).$isn},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ai(a)
if(typeof z!=="string")throw H.a(H.U(a))
return z},
ar:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
fF:function(a){var z,y
if(typeof a!=="string")H.G(H.U(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.et(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
as:function(a){var z,y,x,w,v,u,t,s,r
z=J.p(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.p(a).$isaO){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.a9(w,0)===36)w=C.h.c_(w,1)
r=H.bk(H.ac(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
B:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fE:function(a){return a.b?H.B(a).getUTCFullYear()+0:H.B(a).getFullYear()+0},
fC:function(a){return a.b?H.B(a).getUTCMonth()+1:H.B(a).getMonth()+1},
fy:function(a){return a.b?H.B(a).getUTCDate()+0:H.B(a).getDate()+0},
fz:function(a){return a.b?H.B(a).getUTCHours()+0:H.B(a).getHours()+0},
fB:function(a){return a.b?H.B(a).getUTCMinutes()+0:H.B(a).getMinutes()+0},
fD:function(a){return a.b?H.B(a).getUTCSeconds()+0:H.B(a).getSeconds()+0},
fA:function(a){return a.b?H.B(a).getUTCMilliseconds()+0:H.B(a).getMilliseconds()+0},
ae:function(a){throw H.a(H.U(a))},
e:function(a,b){if(a==null)J.X(a)
throw H.a(H.V(a,b))},
V:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a6(!0,b,"index",null)
z=J.X(a)
if(!(b<0)){if(typeof z!=="number")return H.ae(z)
y=b>=z}else y=!0
if(y)return P.v(b,a,"index",null,z)
return P.b4(b,"index",null)},
U:function(a){return new P.a6(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.cN()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.dV})
z.name=""}else z.toString=H.dV
return z},
dV:function(){return J.ai(this.dartException)},
G:function(a){throw H.a(a)},
N:function(a){throw H.a(P.a1(a))},
O:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.b3(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bE(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cM(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$cY()
u=$.$get$cZ()
t=$.$get$d_()
s=$.$get$d0()
r=$.$get$d4()
q=$.$get$d5()
p=$.$get$d2()
$.$get$d1()
o=$.$get$d7()
n=$.$get$d6()
m=v.N(y)
if(m!=null)return z.$1(H.bE(y,m))
else{m=u.N(y)
if(m!=null){m.method="call"
return z.$1(H.bE(y,m))}else{m=t.N(y)
if(m==null){m=s.N(y)
if(m==null){m=r.N(y)
if(m==null){m=q.N(y)
if(m==null){m=p.N(y)
if(m==null){m=s.N(y)
if(m==null){m=o.N(y)
if(m==null){m=n.N(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cM(y,m))}}return z.$1(new H.h8(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cS()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a6(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cS()
return a},
ad:function(a){var z
if(a==null)return new H.dt(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dt(a,null)},
j_:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
jc:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cv("Unsupported number of arguments for wrapped closure"))},
ax:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jc)
a.$identity=z
return z},
eK:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.p(c).$isf){z.$reflectionInfo=c
x=H.fI(z).r}else x=c
w=d?Object.create(new H.fU().constructor.prototype):Object.create(new H.bu(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.P
$.P=J.ah(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.ck(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.j2,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.ci:H.bv
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.ck(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
eH:function(a,b,c,d){var z=H.bv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ck:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eJ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eH(y,!w,z,b)
if(y===0){w=$.P
$.P=J.ah(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aj
if(v==null){v=H.aV("self")
$.aj=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.P
$.P=J.ah(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aj
if(v==null){v=H.aV("self")
$.aj=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
eI:function(a,b,c,d){var z,y
z=H.bv
y=H.ci
switch(b?-1:a){case 0:throw H.a(H.fN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eJ:function(a,b){var z,y,x,w,v,u,t,s
z=$.aj
if(z==null){z=H.aV("self")
$.aj=z}y=$.ch
if(y==null){y=H.aV("receiver")
$.ch=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eI(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.P
$.P=J.ah(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.P
$.P=J.ah(y,1)
return new Function(z+H.b(y)+"}")()},
bW:function(a,b,c,d,e,f){var z,y
z=J.an(b)
y=!!J.p(c).$isf?J.an(c):c
return H.eK(a,z,y,!!d,e,f)},
ji:function(a,b){var z=J.a0(b)
throw H.a(H.cj(a,z.aj(b,3,z.gj(b))))},
W:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else z=!0
if(z)return a
H.ji(a,b)},
bX:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
dI:function(a,b){var z,y
if(a==null)return!1
z=H.bX(J.p(a))
if(z==null)y=!1
else y=H.dP(z,b)
return y},
iS:function(a){var z
if(a instanceof H.j){z=H.bX(J.p(a))
if(z!=null)return H.c0(z,null)
return"Closure"}return H.as(a)},
jm:function(a){throw H.a(new P.eP(a))},
dL:function(a){return init.getIsolateTag(a)},
w:function(a,b){a.$ti=b
return a},
ac:function(a){if(a==null)return
return a.$ti},
m7:function(a,b,c){return H.aB(a["$as"+H.b(c)],H.ac(b))},
aR:function(a,b,c,d){var z=H.aB(a["$as"+H.b(c)],H.ac(b))
return z==null?null:z[d]},
dM:function(a,b,c){var z=H.aB(a["$as"+H.b(b)],H.ac(a))
return z==null?null:z[c]},
z:function(a,b){var z=H.ac(a)
return z==null?null:z[b]},
c0:function(a,b){var z=H.ag(a,b)
return z},
ag:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bk(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ag(z,b)
return H.iK(a,b)}return"unknown-reified-type"},
iK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ag(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ag(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ag(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.iZ(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ag(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bk:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bM("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ag(u,c)}return w?"":"<"+z.k(0)+">"},
j1:function(a){var z,y,x
if(a instanceof H.j){z=H.bX(J.p(a))
if(z!=null)return H.c0(z,null)}y=J.p(a).constructor.builtin$cls
if(a==null)return y
x=H.bk(a.$ti,0,null)
return y+x},
aB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bV:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ac(a)
y=J.p(a)
if(y[b]==null)return!1
return H.dF(H.aB(y[d],z),c)},
aS:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bV(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bk(c,0,null)
throw H.a(H.cj(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
dF:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.F(a[y],b[y]))return!1
return!0},
m5:function(a,b,c){return a.apply(b,H.aB(J.p(b)["$as"+H.b(c)],H.ac(b)))},
F:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b3")return!0
if('func' in b)return H.dP(a,b)
if('func' in a)return b.builtin$cls==="ko"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.c0(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dF(H.aB(u,z),x)},
dE:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.F(z,v)||H.F(v,z)))return!1}return!0},
iT:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.an(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.F(v,u)||H.F(u,v)))return!1}return!0},
dP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.F(z,y)||H.F(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dE(x,w,!1))return!1
if(!H.dE(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.F(o,n)||H.F(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.F(o,n)||H.F(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.F(o,n)||H.F(n,o)))return!1}}return H.iT(a.named,b.named)},
m6:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
je:function(a){var z,y,x,w,v,u
z=$.dN.$1(a)
y=$.bg[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dD.$2(a,z)
if(z!=null){y=$.bg[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bl(x)
$.bg[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bj[z]=x
return x}if(v==="-"){u=H.bl(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dT(a,x)
if(v==="*")throw H.a(P.d9(z))
if(init.leafTags[z]===true){u=H.bl(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dT(a,x)},
dT:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c_(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bl:function(a){return J.c_(a,!1,null,!!a.$isn)},
jh:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bl(z)
else return J.c_(z,c,null,null)},
ja:function(){if(!0===$.bZ)return
$.bZ=!0
H.jb()},
jb:function(){var z,y,x,w,v,u,t,s
$.bg=Object.create(null)
$.bj=Object.create(null)
H.j6()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.dU.$1(v)
if(u!=null){t=H.jh(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
j6:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.aa(C.F,H.aa(C.K,H.aa(C.v,H.aa(C.v,H.aa(C.J,H.aa(C.G,H.aa(C.H(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dN=new H.j7(v)
$.dD=new H.j8(u)
$.dU=new H.j9(t)},
aa:function(a,b){return a(b)||b},
jl:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fH:{"^":"c;a,b,c,d,e,f,r,x",n:{
fI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.an(z)
y=z[0]
x=z[1]
return new H.fH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
h5:{"^":"c;a,b,c,d,e,f",
N:function(a){var z,y,x
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
n:{
S:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.h5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bc:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
d3:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fw:{"^":"A;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
n:{
cM:function(a,b){return new H.fw(a,b==null?null:b.method)}}},
fi:{"^":"A;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
n:{
bE:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fi(a,y,z?null:b.receiver)}}},
h8:{"^":"A;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jn:{"^":"j:0;a",
$1:function(a){if(!!J.p(a).$isA)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dt:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isb7:1},
j:{"^":"c;",
k:function(a){return"Closure '"+H.as(this).trim()+"'"},
gbQ:function(){return this},
gbQ:function(){return this}},
cV:{"^":"j;"},
fU:{"^":"cV;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bu:{"^":"cV;a,b,c,d",
G:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.ar(this.a)
else y=typeof z!=="object"?J.a5(z):H.ar(z)
return(y^H.ar(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.as(z)+"'")},
n:{
bv:function(a){return a.a},
ci:function(a){return a.c},
aV:function(a){var z,y,x,w,v
z=new H.bu("self","target","receiver","name")
y=J.an(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
eE:{"^":"A;a",
k:function(a){return this.a},
n:{
cj:function(a,b){return new H.eE("CastError: "+H.b(P.bz(a))+": type '"+H.iS(a)+"' is not a subtype of type '"+b+"'")}}},
fM:{"^":"A;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
n:{
fN:function(a){return new H.fM(a)}}},
d8:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gv:function(a){return J.a5(this.a)},
G:function(a,b){if(b==null)return!1
return b instanceof H.d8&&J.H(this.a,b.a)}},
cD:{"^":"bH;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gI:function(a){return new H.fk(this,[H.z(this,0)])},
ad:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.aZ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.aZ(y,b)}else return this.dg(b)},
dg:function(a){var z=this.d
if(z==null)return!1
return this.az(this.aq(z,J.a5(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aa(z,b)
x=y==null?null:y.ga4()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aa(w,b)
x=y==null?null:y.ga4()
return x}else return this.dh(b)},
dh:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aq(z,J.a5(a)&0x3ffffff)
x=this.az(y,a)
if(x<0)return
return y[x].ga4()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.as()
this.b=z}this.aT(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.as()
this.c=y}this.aT(y,b,c)}else{x=this.d
if(x==null){x=this.as()
this.d=x}w=J.a5(b)&0x3ffffff
v=this.aq(x,w)
if(v==null)this.aw(x,w,[this.al(b,c)])
else{u=this.az(v,b)
if(u>=0)v[u].sa4(c)
else v.push(this.al(b,c))}}},
E:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.a1(this))
z=z.c}},
aT:function(a,b,c){var z=this.aa(a,b)
if(z==null)this.aw(a,b,this.al(b,c))
else z.sa4(c)},
aU:function(){this.r=this.r+1&67108863},
al:function(a,b){var z,y
z=new H.fj(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.aU()
return z},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].gdf(),b))return y
return-1},
k:function(a){return P.cI(this)},
aa:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
cA:function(a,b){delete a[b]},
aZ:function(a,b){return this.aa(a,b)!=null},
as:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.cA(z,"<non-identifier-key>")
return z}},
fj:{"^":"c;df:a<,a4:b@,c,d"},
fk:{"^":"bx;a,$ti",
gj:function(a){return this.a.a},
gH:function(a){var z,y
z=this.a
y=new H.a2(z,z.r,null,null,this.$ti)
y.c=z.e
return y}},
a2:{"^":"c;a,b,c,d,$ti",
gu:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.a1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
j7:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
j8:{"^":"j:8;a",
$2:function(a,b){return this.a(a,b)}},
j9:{"^":"j:9;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
iZ:function(a){return J.an(H.w(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bd:function(a){var z,y,x
if(!!J.p(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
T:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.V(b,a))},
fs:{"^":"d;","%":"DataView;ArrayBufferView;bJ|dm|dn|cJ|dp|dq|a3"},
bJ:{"^":"fs;",
gj:function(a){return a.length},
$ism:1,
$asm:I.ab,
$isn:1,
$asn:I.ab},
cJ:{"^":"dn;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
i:function(a,b,c){H.T(b,a,a.length)
a[b]=c},
$asaY:function(){return[P.ay]},
$asi:function(){return[P.ay]},
$isf:1,
$asf:function(){return[P.ay]},
"%":"Float64Array"},
a3:{"^":"dq;",
i:function(a,b,c){H.T(b,a,a.length)
a[b]=c},
$asaY:function(){return[P.C]},
$asi:function(){return[P.C]},
$isf:1,
$asf:function(){return[P.C]}},
fr:{"^":"cJ;",$isbA:1,"%":"Float32Array"},
kR:{"^":"a3;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kS:{"^":"a3;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
$isf9:1,
"%":"Int32Array"},
kT:{"^":"a3;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kU:{"^":"a3;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kV:{"^":"a3;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kW:{"^":"a3;",
gj:function(a){return a.length},
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
kX:{"^":"a3;",
gj:function(a){return a.length},
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dm:{"^":"bJ+i;"},
dn:{"^":"dm+aY;"},
dp:{"^":"bJ+i;"},
dq:{"^":"dp+aY;"}}],["","",,P,{"^":"",
he:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.iU()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ax(new P.hg(z),1)).observe(y,{childList:true})
return new P.hf(z,y,x)}else if(self.setImmediate!=null)return P.iV()
return P.iW()},
lT:[function(a){self.scheduleImmediate(H.ax(new P.hh(a),0))},"$1","iU",4,0,5],
lU:[function(a){self.setImmediate(H.ax(new P.hi(a),0))},"$1","iV",4,0,5],
lV:[function(a){P.is(0,a)},"$1","iW",4,0,5],
iO:function(a,b){if(H.dI(a,{func:1,args:[P.b3,P.b3]})){b.toString
return a}else{b.toString
return a}},
iN:function(){var z,y
for(;z=$.a9,z!=null;){$.av=null
y=z.b
$.a9=y
if(y==null)$.au=null
z.a.$0()}},
m4:[function(){$.bS=!0
try{P.iN()}finally{$.av=null
$.bS=!1
if($.a9!=null)$.$get$bO().$1(P.dG())}},"$0","dG",0,0,3],
dB:function(a){var z=new P.db(a,null)
if($.a9==null){$.au=z
$.a9=z
if(!$.bS)$.$get$bO().$1(P.dG())}else{$.au.b=z
$.au=z}},
iR:function(a){var z,y,x
z=$.a9
if(z==null){P.dB(a)
$.av=$.au
return}y=new P.db(a,null)
x=$.av
if(x==null){y.b=z
$.av=y
$.a9=y}else{y.b=x.b
x.b=y
$.av=y
if(y.b==null)$.au=y}},
jj:function(a){var z=$.x
if(C.e===z){P.bf(null,null,C.e,a)
return}z.toString
P.bf(null,null,z,z.bd(a))},
be:function(a,b,c,d,e){var z={}
z.a=d
P.iR(new P.iP(z,e))},
dz:function(a,b,c,d){var z,y
y=$.x
if(y===c)return d.$0()
$.x=c
z=y
try{y=d.$0()
return y}finally{$.x=z}},
dA:function(a,b,c,d,e){var z,y
y=$.x
if(y===c)return d.$1(e)
$.x=c
z=y
try{y=d.$1(e)
return y}finally{$.x=z}},
iQ:function(a,b,c,d,e,f){var z,y
y=$.x
if(y===c)return d.$2(e,f)
$.x=c
z=y
try{y=d.$2(e,f)
return y}finally{$.x=z}},
bf:function(a,b,c,d){var z=C.e!==c
if(z)d=!(!z||!1)?c.bd(d):c.cV(d)
P.dB(d)},
hg:{"^":"j:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hf:{"^":"j:10;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hh:{"^":"j:1;a",
$0:function(){this.a.$0()}},
hi:{"^":"j:1;a",
$0:function(){this.a.$0()}},
ir:{"^":"c;a,b,c",
ct:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ax(new P.it(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
n:{
is:function(a,b){var z=new P.ir(!0,null,0)
z.ct(a,b)
return z}}},
it:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jA:{"^":"c;$ti"},
hl:{"^":"c;$ti"},
il:{"^":"hl;a,$ti",
d_:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bL("Future already completed"))
z.am(b)}},
hA:{"^":"c;au:a<,b,c,d,e,$ti",
gcQ:function(){return this.b.b},
gbv:function(){return(this.c&1)!==0},
gde:function(){return(this.c&2)!==0},
gbu:function(){return this.c===8},
dc:function(a){return this.b.b.aC(this.d,a)},
dj:function(a){if(this.c!==6)return!0
return this.b.b.aC(this.d,J.aF(a))},
da:function(a){var z,y,x
z=this.e
y=J.h(a)
x=this.b.b
if(H.dI(z,{func:1,args:[P.c,P.b7]}))return x.dn(z,y.gL(a),a.ga0())
else return x.aC(z,y.gL(a))},
dd:function(){return this.b.b.by(this.d)}},
aP:{"^":"c;b4:a<,b,cH:c<,$ti",
gcF:function(){return this.a===2},
gar:function(){return this.a>=4},
bA:function(a,b){var z,y,x
z=$.x
if(z!==C.e){z.toString
if(b!=null)b=P.iO(b,z)}y=new P.aP(0,z,null,[null])
x=b==null?1:3
this.aW(new P.hA(null,y,x,a,b,[H.z(this,0),null]))
return y},
bz:function(a){return this.bA(a,null)},
aW:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gar()){y.aW(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bf(null,null,z,new P.hB(this,a))}},
b2:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gau()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gar()){v.b2(a)
return}this.a=v.a
this.c=v.c}z.a=this.av(a)
y=this.b
y.toString
P.bf(null,null,y,new P.hG(z,this))}},
ab:function(){var z=this.c
this.c=null
return this.av(z)},
av:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gau()
z.a=y}return y},
am:function(a){var z,y,x
z=this.$ti
y=H.bV(a,"$isaZ",z,"$asaZ")
if(y){z=H.bV(a,"$isaP",z,null)
if(z)P.dg(a,this)
else P.hC(a,this)}else{x=this.ab()
this.a=4
this.c=a
P.at(this,x)}},
an:[function(a,b){var z=this.ab()
this.a=8
this.c=new P.aU(a,b)
P.at(this,z)},function(a){return this.an(a,null)},"dC","$2","$1","gcw",4,2,11],
$isaZ:1,
n:{
hC:function(a,b){var z,y,x
b.a=1
try{a.bA(new P.hD(b),new P.hE(b))}catch(x){z=H.O(x)
y=H.ad(x)
P.jj(new P.hF(b,z,y))}},
dg:function(a,b){var z
for(;a.gcF();)a=a.c
if(a.gar()){z=b.ab()
b.a=a.a
b.c=a.c
P.at(b,z)}else{z=b.c
b.a=2
b.c=a
a.b2(z)}},
at:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aF(v)
t=v.ga0()
y.toString
P.be(null,null,y,u,t)}return}for(;b.gau()!=null;b=s){s=b.a
b.a=null
P.at(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbv()||b.gbu()){q=b.gcQ()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aF(v)
t=v.ga0()
y.toString
P.be(null,null,y,u,t)
return}p=$.x
if(p==null?q!=null:p!==q)$.x=q
else p=null
if(b.gbu())new P.hJ(z,x,b,w).$0()
else if(y){if(b.gbv())new P.hI(x,b,r).$0()}else if(b.gde())new P.hH(z,x,b).$0()
if(p!=null)$.x=p
y=x.b
if(!!J.p(y).$isaZ){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.av(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dg(y,o)
return}}o=b.b
b=o.ab()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
hB:{"^":"j:1;a,b",
$0:function(){P.at(this.a,this.b)}},
hG:{"^":"j:1;a,b",
$0:function(){P.at(this.b,this.a.a)}},
hD:{"^":"j:0;a",
$1:function(a){var z=this.a
z.a=0
z.am(a)}},
hE:{"^":"j:12;a",
$2:function(a,b){this.a.an(a,b)},
$1:function(a){return this.$2(a,null)}},
hF:{"^":"j:1;a,b,c",
$0:function(){this.a.an(this.b,this.c)}},
hJ:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dd()}catch(w){y=H.O(w)
x=H.ad(w)
if(this.d){v=J.aF(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.aU(y,x)
u.a=!0
return}if(!!J.p(z).$isaZ){if(z instanceof P.aP&&z.gb4()>=4){if(z.gb4()===8){v=this.b
v.b=z.gcH()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.bz(new P.hK(t))
v.a=!1}}},
hK:{"^":"j:0;a",
$1:function(a){return this.a}},
hI:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dc(this.c)}catch(x){z=H.O(x)
y=H.ad(x)
w=this.a
w.b=new P.aU(z,y)
w.a=!0}}},
hH:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dj(z)===!0&&w.e!=null){v=this.b
v.b=w.da(z)
v.a=!1}}catch(u){y=H.O(u)
x=H.ad(u)
w=this.a
v=J.aF(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.aU(y,x)
s.a=!0}}},
db:{"^":"c;a,b"},
fY:{"^":"c;$ti",
gj:function(a){var z,y
z={}
y=new P.aP(0,$.x,null,[P.C])
z.a=0
this.di(new P.h_(z),!0,new P.h0(z,y),y.gcw())
return y}},
h_:{"^":"j:0;a",
$1:function(a){++this.a.a}},
h0:{"^":"j:1;a,b",
$0:function(){this.b.am(this.a.a)}},
fZ:{"^":"c;$ti"},
aU:{"^":"c;L:a>,a0:b<",
k:function(a){return H.b(this.a)},
$isA:1},
iz:{"^":"c;"},
iP:{"^":"j:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cN()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.ai(y)
throw x}},
i3:{"^":"iz;",
dq:function(a){var z,y,x
try{if(C.e===$.x){a.$0()
return}P.dz(null,null,this,a)}catch(x){z=H.O(x)
y=H.ad(x)
P.be(null,null,this,z,y)}},
dr:function(a,b){var z,y,x
try{if(C.e===$.x){a.$1(b)
return}P.dA(null,null,this,a,b)}catch(x){z=H.O(x)
y=H.ad(x)
P.be(null,null,this,z,y)}},
cV:function(a){return new P.i5(this,a)},
bd:function(a){return new P.i4(this,a)},
cW:function(a){return new P.i6(this,a)},
h:function(a,b){return},
by:function(a){if($.x===C.e)return a.$0()
return P.dz(null,null,this,a)},
aC:function(a,b){if($.x===C.e)return a.$1(b)
return P.dA(null,null,this,a,b)},
dn:function(a,b,c){if($.x===C.e)return a.$2(b,c)
return P.iQ(null,null,this,a,b,c)}},
i5:{"^":"j:1;a,b",
$0:function(){return this.a.by(this.b)}},
i4:{"^":"j:1;a,b",
$0:function(){return this.a.dq(this.b)}},
i6:{"^":"j:0;a,b",
$1:function(a){return this.a.dr(this.b,a)}}}],["","",,P,{"^":"",
Z:function(){return new H.cD(0,null,null,null,null,null,0,[null,null])},
cF:function(a){return H.j_(a,new H.cD(0,null,null,null,null,null,0,[null,null]))},
aJ:function(a,b,c,d){return new P.hR(0,null,null,null,null,null,0,[d])},
fa:function(a,b,c){var z,y
if(P.bT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aw()
y.push(a)
try{P.iM(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.cT(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bB:function(a,b,c){var z,y,x
if(P.bT(a))return b+"..."+c
z=new P.bM(b)
y=$.$get$aw()
y.push(a)
try{x=z
x.a=P.cT(x.gU(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gU()+c
y=z.gU()
return y.charCodeAt(0)==0?y:y},
bT:function(a){var z,y
for(z=0;y=$.$get$aw(),z<y.length;++z)if(a===y[z])return!0
return!1},
iM:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gH(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.b(z.gu(z))
b.push(w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gu(z);++x
if(!z.q()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gu(z);++x
for(;z.q();t=s,s=r){r=z.gu(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
bF:function(a,b){var z,y
z=P.aJ(null,null,null,b)
for(y=J.aG(a);y.q();)z.ax(0,y.gu(y))
return z},
cI:function(a){var z,y,x
z={}
if(P.bT(a))return"{...}"
y=new P.bM("")
try{$.$get$aw().push(a)
x=y
x.a=x.gU()+"{"
z.a=!0
J.ec(a,new P.fl(z,y))
z=y
z.a=z.gU()+"}"}finally{z=$.$get$aw()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gU()
return z.charCodeAt(0)==0?z:z},
hR:{"^":"hM;a,b,c,d,e,f,r,$ti",
gH:function(a){var z=new P.dk(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
D:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cz(b)},
cz:function(a){var z=this.d
if(z==null)return!1
return this.b_(z[this.aY(a)],a)>=0},
ax:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bR()
this.b=z}return this.aV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bR()
this.c=y}return this.aV(y,b)}else return this.cu(0,b)},
cu:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bR()
this.d=z}y=this.aY(b)
x=z[y]
if(x==null)z[y]=[this.at(b)]
else{if(this.b_(x,b)>=0)return!1
x.push(this.at(b))}return!0},
aV:function(a,b){if(a[b]!=null)return!1
a[b]=this.at(b)
return!0},
b0:function(){this.r=this.r+1&67108863},
at:function(a){var z,y
z=new P.hS(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.b0()
return z},
aY:function(a){return J.a5(a)&0x3ffffff},
b_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].gcB(),b))return y
return-1},
n:{
bR:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
hS:{"^":"c;cB:a<,b,c"},
dk:{"^":"c;a,b,c,d,$ti",
gu:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.a1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
hM:{"^":"fO;$ti"},
kC:{"^":"c;$ti"},
cG:{"^":"dl;$ti",$isf:1},
i:{"^":"c;$ti",
gH:function(a){return new H.cH(a,this.gj(a),0,null,[H.aR(this,a,"i",0)])},
p:function(a,b){return this.h(a,b)},
d8:function(a,b,c){var z,y,x
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.a1(a))}return y},
aL:function(a,b){return H.cU(a,b,null,H.aR(this,a,"i",0))},
t:function(a,b){var z=H.w([],[H.aR(this,a,"i",0)])
C.c.sj(z,C.b.t(this.gj(a),C.b.gj(b)))
C.c.a7(z,0,this.gj(a),a)
C.c.a7(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.bB(a,"[","]")}},
bH:{"^":"J;$ti"},
fl:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
J:{"^":"c;$ti",
E:function(a,b){var z,y
for(z=J.aG(this.gI(a));z.q();){y=z.gu(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.X(this.gI(a))},
k:function(a){return P.cI(a)}},
fP:{"^":"c;$ti",
M:function(a,b){var z
for(z=J.aG(b);z.q();)this.ax(0,z.gu(z))},
k:function(a){return P.bB(this,"{","}")}},
fO:{"^":"fP;$ti"},
dl:{"^":"c+i;$ti"}}],["","",,P,{"^":"",
dH:function(a,b){var z=H.fF(a)
if(z!=null)return z
throw H.a(new P.f5("Invalid double",a,null))},
f0:function(a){var z=J.p(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.as(a)+"'"},
bz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.f0(a)},
cv:function(a){return new P.hx(a)},
aA:function(a){H.bm(H.b(a))},
bU:{"^":"c;"},
"+bool":0,
cn:{"^":"c;cP:a<,b",
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.cn))return!1
return this.a===b.a&&this.b===b.b},
X:function(a,b){return C.b.X(this.a,b.gcP())},
gv:function(a){var z=this.a
return(z^C.b.b3(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.eQ(H.fE(this))
y=P.aH(H.fC(this))
x=P.aH(H.fy(this))
w=P.aH(H.fz(this))
v=P.aH(H.fB(this))
u=P.aH(H.fD(this))
t=P.eR(H.fA(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
eQ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aH:function(a){if(a>=10)return""+a
return"0"+a}}},
ay:{"^":"az;"},
"+double":0,
aI:{"^":"c;a2:a<",
t:function(a,b){return new P.aI(C.b.t(this.a,b.ga2()))},
a8:function(a,b){return new P.aI(this.a-b.ga2())},
Y:function(a,b){return C.b.Y(this.a,b.ga2())},
a6:function(a,b){return C.b.a6(this.a,b.ga2())},
G:function(a,b){if(b==null)return!1
if(!(b instanceof P.aI))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
X:function(a,b){return C.b.X(this.a,b.ga2())},
k:function(a){var z,y,x,w,v
z=new P.eY()
y=this.a
if(y<0)return"-"+new P.aI(0-y).k(0)
x=z.$1(C.b.V(y,6e7)%60)
w=z.$1(C.b.V(y,1e6)%60)
v=new P.eX().$1(y%1e6)
return""+C.b.V(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
n:{
eW:function(a,b,c,d,e,f){return new P.aI(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
eX:{"^":"j:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
eY:{"^":"j:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
A:{"^":"c;",
ga0:function(){return H.ad(this.$thrownJsError)}},
cN:{"^":"A;",
k:function(a){return"Throw of null."}},
a6:{"^":"A;a,b,c,d",
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
u=P.bz(this.b)
return w+v+": "+H.b(u)},
n:{
eA:function(a,b,c){return new P.a6(!0,a,b,c)}}},
cP:{"^":"a6;e,f,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
n:{
b4:function(a,b,c){return new P.cP(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.cP(b,c,!0,a,d,"Invalid value")},
fG:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.a8(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.a8(b,a,c,"end",f))
return b}}},
f8:{"^":"a6;e,j:f>,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){if(J.aC(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
n:{
v:function(a,b,c,d,e){var z=e!=null?e:J.X(b)
return new P.f8(b,z,!0,a,c,"Index out of range")}}},
h9:{"^":"A;a",
k:function(a){return"Unsupported operation: "+this.a},
n:{
r:function(a){return new P.h9(a)}}},
h7:{"^":"A;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
n:{
d9:function(a){return new P.h7(a)}}},
b8:{"^":"A;a",
k:function(a){return"Bad state: "+this.a},
n:{
bL:function(a){return new P.b8(a)}}},
eM:{"^":"A;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bz(z))+"."},
n:{
a1:function(a){return new P.eM(a)}}},
cS:{"^":"c;",
k:function(a){return"Stack Overflow"},
ga0:function(){return},
$isA:1},
eP:{"^":"A;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
jY:{"^":"c;"},
hx:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
f5:{"^":"c;a,b,c",
k:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.h.aj(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"az;"},
"+int":0,
b0:{"^":"c;$ti",
aD:["c2",function(a,b){return new H.da(this,b,[H.dM(this,"b0",0)])}],
gj:function(a){var z,y
z=this.gH(this)
for(y=0;z.q();)++y
return y},
gT:function(a){var z,y
z=this.gH(this)
if(!z.q())throw H.a(H.fb())
y=z.gu(z)
if(z.q())throw H.a(H.fd())
return y},
p:function(a,b){var z,y,x
if(b<0)H.G(P.a8(b,0,null,"index",null))
for(z=this.gH(this),y=0;z.q();){x=z.gu(z)
if(b===y)return x;++y}throw H.a(P.v(b,this,"index",null,y))},
k:function(a){return P.fa(this,"(",")")}},
fe:{"^":"c;$ti"},
f:{"^":"c;$ti"},
"+List":0,
bG:{"^":"c;$ti"},
b3:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
az:{"^":"c;"},
"+num":0,
c:{"^":";",
G:function(a,b){return this===b},
gv:function(a){return H.ar(this)},
k:function(a){return"Instance of '"+H.as(this)+"'"},
toString:function(){return this.k(this)}},
b7:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
bM:{"^":"c;U:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
cT:function(a,b,c){var z=J.aG(b)
if(!z.q())return a
if(c.length===0){do a+=H.b(z.gu(z))
while(z.q())}else{a+=H.b(z.gu(z))
for(;z.q();)a=a+c+H.b(z.gu(z))}return a}}}}],["","",,W,{"^":"",
eZ:function(a,b,c){var z,y
z=document.body
y=(z&&C.t).P(z,a,b,c)
y.toString
z=new H.da(new W.L(y),new W.f_(),[W.q])
return z.gT(z)},
al:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eg(a)
if(typeof y==="string")z=a.tagName}catch(x){H.O(x)}return z},
hu:function(a,b){return document.createElement(a)},
a4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dj:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dy:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.ho(a)
if(!!J.p(z).$isy)return z
return}else return a},
dC:function(a){var z=$.x
if(z===C.e)return a
return z.cW(a)},
o:{"^":"ak;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLModElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLShadowElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jp:{"^":"bK;l:x=,m:y=,F:z=","%":"Accelerometer|LinearAccelerationSensor"},
jq:{"^":"d;j:length=","%":"AccessibleNodeList"},
jr:{"^":"o;J:target=,w:type=,ae:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
js:{"^":"o;J:target=,ae:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
jw:{"^":"o;ae:href},J:target=","%":"HTMLBaseElement"},
bt:{"^":"o;",$isbt:1,"%":"HTMLBodyElement"},
jx:{"^":"o;C:name=,w:type=,K:value}","%":"HTMLButtonElement"},
jy:{"^":"o;A:height},B:width}",
bR:function(a,b,c){var z=a.getContext(b,P.iX(c,null))
return z},
"%":"HTMLCanvasElement"},
jz:{"^":"d;",
ai:function(a){return P.K(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
eF:{"^":"q;j:length=","%":"CDATASection|Comment|Text;CharacterData"},
jB:{"^":"Q;R:style=","%":"CSSFontFaceRule"},
jC:{"^":"Q;R:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
jD:{"^":"Q;R:style=","%":"CSSPageRule"},
jE:{"^":"aW;j:length=","%":"CSSPerspective"},
jF:{"^":"bw;l:x=,m:y=","%":"CSSPositionValue"},
jG:{"^":"aW;l:x=,m:y=,F:z=","%":"CSSRotation"},
Q:{"^":"d;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
jH:{"^":"aW;l:x=,m:y=,F:z=","%":"CSSScale"},
eN:{"^":"hm;j:length=",
aX:function(a,b){var z,y
z=$.$get$cl()
y=z[b]
if(typeof y==="string")return y
y=this.cN(a,b)
z[b]=y
return y},
cN:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.eS()+b
if(z in a)return z
return b},
cK:function(a,b,c,d){a.setProperty(b,c,d)},
sA:function(a,b){a.height=b},
sB:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eO:{"^":"c;",
sd7:function(a,b){this.cK(a,this.aX(a,"float"),b,"")}},
jI:{"^":"Q;R:style=","%":"CSSStyleRule"},
bw:{"^":"d;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
aW:{"^":"d;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
jJ:{"^":"bw;j:length=","%":"CSSTransformValue"},
jK:{"^":"aW;l:x=,m:y=,F:z=","%":"CSSTranslation"},
jL:{"^":"bw;j:length=","%":"CSSUnparsedValue"},
jM:{"^":"Q;R:style=","%":"CSSViewportRule"},
jN:{"^":"o;K:value}","%":"HTMLDataElement"},
jO:{"^":"d;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
jP:{"^":"d;l:x=,m:y=,F:z=","%":"DeviceAcceleration"},
eT:{"^":"o;","%":"HTMLDivElement"},
jQ:{"^":"q;",
gaA:function(a){return new W.de(a,"change",!1,[W.R])},
"%":"Document|HTMLDocument|XMLDocument"},
jR:{"^":"d;",
k:function(a){return String(a)},
"%":"DOMException"},
jS:{"^":"eU;",
gbP:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gF:function(a){return a.z},
"%":"DOMPoint"},
eU:{"^":"d;",
gbP:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gF:function(a){return a.z},
"%":";DOMPointReadOnly"},
jT:{"^":"hq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a_]},
$isn:1,
$asn:function(){return[P.a_]},
$asi:function(){return[P.a_]},
$isf:1,
$asf:function(){return[P.a_]},
$ask:function(){return[P.a_]},
"%":"ClientRectList|DOMRectList"},
eV:{"^":"d;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gB(a))+" x "+H.b(this.gA(a))},
G:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isa_)return!1
return a.left===z.gbw(b)&&a.top===z.gbB(b)&&this.gB(a)===z.gB(b)&&this.gA(a)===z.gA(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gB(a)
w=this.gA(a)
return W.dj(W.a4(W.a4(W.a4(W.a4(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gA:function(a){return a.height},
gbw:function(a){return a.left},
gbB:function(a){return a.top},
gB:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa_:1,
$asa_:I.ab,
"%":";DOMRectReadOnly"},
jU:{"^":"hs;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$isn:1,
$asn:function(){return[P.l]},
$asi:function(){return[P.l]},
$isf:1,
$asf:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
jV:{"^":"d;j:length=","%":"DOMTokenList"},
ak:{"^":"q;R:style=,b1:namespaceURI=,ds:tagName=",
gcT:function(a){return new W.ht(a)},
k:function(a){return a.localName},
P:["ak",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cu
if(z==null){z=H.w([],[W.cK])
y=new W.cL(z)
z.push(W.dh(null))
z.push(W.du())
$.cu=y
d=y}else d=z
z=$.ct
if(z==null){z=new W.dx(d)
$.ct=z
c=z}else{z.a=d
c=z}}if($.Y==null){z=document
y=z.implementation.createHTMLDocument("")
$.Y=y
$.by=y.createRange()
y=$.Y
y.toString
x=y.createElement("base")
J.eo(x,z.baseURI)
$.Y.head.appendChild(x)}z=$.Y
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.Y
if(!!this.$isbt)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.Y.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.D(C.N,a.tagName)){$.by.selectNodeContents(w)
v=$.by.createContextualFragment(b)}else{w.innerHTML=b
v=$.Y.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.Y.body
if(w==null?z!=null:w!==z)J.cb(w)
c.aJ(v)
document.adoptNode(v)
return v},function(a,b,c){return this.P(a,b,c,null)},"d1",null,null,"gdG",5,5,null],
bV:function(a,b,c,d){a.textContent=null
a.appendChild(this.P(a,b,c,d))},
bU:function(a,b){return this.bV(a,b,null,null)},
gaA:function(a){return new W.dd(a,"change",!1,[W.R])},
$isak:1,
"%":";Element"},
f_:{"^":"j:0;",
$1:function(a){return!!J.p(a).$isak}},
jW:{"^":"o;A:height},C:name=,w:type=,B:width}","%":"HTMLEmbedElement"},
jX:{"^":"R;L:error=","%":"ErrorEvent"},
R:{"^":"d;",
gJ:function(a){return W.dy(a.target)},
$isR:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CompositionEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|DragEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FocusEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|KeyboardEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MouseEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PointerEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TextEvent|TouchEvent|TrackEvent|TransitionEvent|UIEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent|WheelEvent;Event|InputEvent"},
y:{"^":"d;",
b9:["c0",function(a,b,c,d){if(c!=null)this.cv(a,b,c,!1)}],
cv:function(a,b,c,d){return a.addEventListener(b,H.ax(c,1),!1)},
$isy:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FontFaceSet|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dr|ds|dv|dw"},
kg:{"^":"o;C:name=,w:type=","%":"HTMLFieldSetElement"},
kh:{"^":"hz;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aX]},
$isn:1,
$asn:function(){return[W.aX]},
$asi:function(){return[W.aX]},
$isf:1,
$asf:function(){return[W.aX]},
$ask:function(){return[W.aX]},
"%":"FileList"},
ki:{"^":"y;L:error=","%":"FileReader"},
kj:{"^":"y;L:error=,j:length=","%":"FileWriter"},
kl:{"^":"d;R:style=","%":"FontFace"},
kn:{"^":"o;j:length=,C:name=,J:target=","%":"HTMLFormElement"},
kp:{"^":"bK;l:x=,m:y=,F:z=","%":"Gyroscope"},
kq:{"^":"d;j:length=","%":"History"},
kr:{"^":"hO;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asi:function(){return[W.q]},
$isf:1,
$asf:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ks:{"^":"o;A:height},C:name=,B:width}","%":"HTMLIFrameElement"},
kt:{"^":"o;A:height},B:width}","%":"HTMLImageElement"},
cy:{"^":"o;cZ:checked=,A:height},C:name=,w:type=,K:value},B:width}",$iscy:1,"%":"HTMLInputElement"},
kv:{"^":"d;J:target=","%":"IntersectionObserverEntry"},
kz:{"^":"o;K:value}","%":"HTMLLIElement"},
kB:{"^":"o;ae:href},w:type=","%":"HTMLLinkElement"},
kD:{"^":"d;",
k:function(a){return String(a)},
"%":"Location"},
kE:{"^":"bK;l:x=,m:y=,F:z=","%":"Magnetometer"},
kF:{"^":"o;C:name=","%":"HTMLMapElement"},
fn:{"^":"o;L:error=","%":"HTMLAudioElement;HTMLMediaElement"},
kJ:{"^":"d;j:length=","%":"MediaList"},
kK:{"^":"y;",
b9:function(a,b,c,d){if(b==="message")a.start()
this.c0(a,b,c,!1)},
"%":"MessagePort"},
kL:{"^":"o;C:name=","%":"HTMLMetaElement"},
kM:{"^":"o;K:value}","%":"HTMLMeterElement"},
kN:{"^":"hT;",
h:function(a,b){return P.K(a.get(b))},
E:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.K(y.value[1]))}},
gI:function(a){var z=H.w([],[P.l])
this.E(a,new W.fp(z))
return z},
gj:function(a){return a.size},
$asJ:function(){return[P.l,null]},
"%":"MIDIInputMap"},
fp:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
kO:{"^":"hU;",
h:function(a,b){return P.K(a.get(b))},
E:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.K(y.value[1]))}},
gI:function(a){var z=H.w([],[P.l])
this.E(a,new W.fq(z))
return z},
gj:function(a){return a.size},
$asJ:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
fq:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
kP:{"^":"hW;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b2]},
$isn:1,
$asn:function(){return[W.b2]},
$asi:function(){return[W.b2]},
$isf:1,
$asf:function(){return[W.b2]},
$ask:function(){return[W.b2]},
"%":"MimeTypeArray"},
kQ:{"^":"d;J:target=","%":"MutationRecord"},
L:{"^":"cG;a",
gT:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.bL("No elements"))
if(y>1)throw H.a(P.bL("More than one element"))
return z.firstChild},
M:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gH:function(a){var z=this.a.childNodes
return new W.cw(z,z.length,-1,null,[H.aR(C.Q,z,"k",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$ascG:function(){return[W.q]},
$asi:function(){return[W.q]},
$asf:function(){return[W.q]},
$asdl:function(){return[W.q]}},
q:{"^":"y;ag:parentNode=,aB:previousSibling=",
gdk:function(a){return new W.L(a)},
dm:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.c1(a):z},
$isq:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
kY:{"^":"d;",
dl:[function(a){return a.previousNode()},"$0","gaB",1,0,4],
"%":"NodeIterator"},
ft:{"^":"hY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asi:function(){return[W.q]},
$isf:1,
$asf:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"NodeList|RadioNodeList"},
l0:{"^":"o;w:type=","%":"HTMLOListElement"},
l1:{"^":"o;A:height},C:name=,w:type=,B:width}","%":"HTMLObjectElement"},
l3:{"^":"o;K:value}","%":"HTMLOptionElement"},
l4:{"^":"o;C:name=,w:type=,K:value}","%":"HTMLOutputElement"},
l5:{"^":"o;C:name=,K:value}","%":"HTMLParamElement"},
aK:{"^":"d;j:length=","%":"Plugin"},
l7:{"^":"i1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aK]},
$isn:1,
$asn:function(){return[W.aK]},
$asi:function(){return[W.aK]},
$isf:1,
$asf:function(){return[W.aK]},
$ask:function(){return[W.aK]},
"%":"PluginArray"},
la:{"^":"eF;J:target=","%":"ProcessingInstruction"},
lb:{"^":"o;K:value}","%":"HTMLProgressElement"},
lh:{"^":"d;J:target=","%":"ResizeObserverEntry"},
li:{"^":"i7;",
h:function(a,b){return P.K(a.get(b))},
E:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.K(y.value[1]))}},
gI:function(a){var z=H.w([],[P.l])
this.E(a,new W.fL(z))
return z},
gj:function(a){return a.size},
$asJ:function(){return[P.l,null]},
"%":"RTCStatsReport"},
fL:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
lj:{"^":"o;w:type=","%":"HTMLScriptElement"},
lk:{"^":"o;j:length=,C:name=,w:type=,K:value}","%":"HTMLSelectElement"},
bK:{"^":"y;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ll:{"^":"R;L:error=","%":"SensorErrorEvent"},
lm:{"^":"o;C:name=","%":"HTMLSlotElement"},
ln:{"^":"ds;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b5]},
$isn:1,
$asn:function(){return[W.b5]},
$asi:function(){return[W.b5]},
$isf:1,
$asf:function(){return[W.b5]},
$ask:function(){return[W.b5]},
"%":"SourceBufferList"},
lo:{"^":"o;w:type=","%":"HTMLSourceElement"},
lp:{"^":"id;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b6]},
$isn:1,
$asn:function(){return[W.b6]},
$asi:function(){return[W.b6]},
$isf:1,
$asf:function(){return[W.b6]},
$ask:function(){return[W.b6]},
"%":"SpeechGrammarList"},
lq:{"^":"R;L:error=","%":"SpeechRecognitionError"},
aM:{"^":"d;j:length=","%":"SpeechRecognitionResult"},
ls:{"^":"ih;",
h:function(a,b){return a.getItem(b)},
E:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gI:function(a){var z=H.w([],[P.l])
this.E(a,new W.fX(z))
return z},
gj:function(a){return a.length},
$asJ:function(){return[P.l,P.l]},
"%":"Storage"},
fX:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
lu:{"^":"o;w:type=","%":"HTMLStyleElement"},
h2:{"^":"o;",
P:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=W.eZ("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.L(y).M(0,J.ed(z))
return y},
"%":"HTMLTableElement"},
lx:{"^":"o;",
P:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.P(z.createElement("table"),b,c,d)
z.toString
z=new W.L(z)
x=z.gT(z)
x.toString
z=new W.L(x)
w=z.gT(z)
y.toString
w.toString
new W.L(y).M(0,new W.L(w))
return y},
"%":"HTMLTableRowElement"},
ly:{"^":"o;",
P:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.P(z.createElement("table"),b,c,d)
z.toString
z=new W.L(z)
x=z.gT(z)
y.toString
x.toString
new W.L(y).M(0,new W.L(x))
return y},
"%":"HTMLTableSectionElement"},
cW:{"^":"o;",$iscW:1,"%":"HTMLTemplateElement"},
lz:{"^":"o;C:name=,w:type=,K:value}","%":"HTMLTextAreaElement"},
lB:{"^":"iq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bb]},
$isn:1,
$asn:function(){return[W.bb]},
$asi:function(){return[W.bb]},
$isf:1,
$asf:function(){return[W.bb]},
$ask:function(){return[W.bb]},
"%":"TextTrackCueList"},
lC:{"^":"dw;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.ba]},
$isn:1,
$asn:function(){return[W.ba]},
$asi:function(){return[W.ba]},
$isf:1,
$asf:function(){return[W.ba]},
$ask:function(){return[W.ba]},
"%":"TextTrackList"},
lF:{"^":"d;j:length=","%":"TimeRanges"},
aN:{"^":"d;",
gJ:function(a){return W.dy(a.target)},
"%":"Touch"},
lG:{"^":"iv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aN]},
$isn:1,
$asn:function(){return[W.aN]},
$asi:function(){return[W.aN]},
$isf:1,
$asf:function(){return[W.aN]},
$ask:function(){return[W.aN]},
"%":"TouchList"},
lH:{"^":"d;j:length=","%":"TrackDefaultList"},
lK:{"^":"d;",
dJ:[function(a){return a.parentNode()},"$0","gag",1,0,4],
dl:[function(a){return a.previousNode()},"$0","gaB",1,0,4],
"%":"TreeWalker"},
lM:{"^":"d;",
k:function(a){return String(a)},
"%":"URL"},
lO:{"^":"d;l:x=,F:z=","%":"VRStageBoundsPoint"},
lQ:{"^":"fn;A:height},B:width}","%":"HTMLVideoElement"},
lR:{"^":"y;j:length=","%":"VideoTrackList"},
hb:{"^":"y;",
gcS:function(a){var z,y
z=P.az
y=new P.aP(0,$.x,null,[z])
this.cD(a)
this.cG(a,W.dC(new W.hc(new P.il(y,[z]))))
return y},
cG:function(a,b){return a.requestAnimationFrame(H.ax(b,1))},
cD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hc:{"^":"j:0;a",
$1:function(a){this.a.d_(0,a)}},
lS:{"^":"y;"},
lW:{"^":"q;C:name=,b1:namespaceURI=","%":"Attr"},
lX:{"^":"iB;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.Q]},
$isn:1,
$asn:function(){return[W.Q]},
$asi:function(){return[W.Q]},
$isf:1,
$asf:function(){return[W.Q]},
$ask:function(){return[W.Q]},
"%":"CSSRuleList"},
lY:{"^":"eV;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
G:function(a,b){var z
if(b==null)return!1
z=J.p(b)
if(!z.$isa_)return!1
return a.left===z.gbw(b)&&a.top===z.gbB(b)&&a.width===z.gB(b)&&a.height===z.gA(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dj(W.a4(W.a4(W.a4(W.a4(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gA:function(a){return a.height},
gB:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
lZ:{"^":"iD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b_]},
$isn:1,
$asn:function(){return[W.b_]},
$asi:function(){return[W.b_]},
$isf:1,
$asf:function(){return[W.b_]},
$ask:function(){return[W.b_]},
"%":"GamepadList"},
m1:{"^":"iF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asi:function(){return[W.q]},
$isf:1,
$asf:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"MozNamedAttrMap|NamedNodeMap"},
m2:{"^":"iH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aM]},
$isn:1,
$asn:function(){return[W.aM]},
$asi:function(){return[W.aM]},
$isf:1,
$asf:function(){return[W.aM]},
$ask:function(){return[W.aM]},
"%":"SpeechRecognitionResultList"},
m3:{"^":"iJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b9]},
$isn:1,
$asn:function(){return[W.b9]},
$asi:function(){return[W.b9]},
$isf:1,
$asf:function(){return[W.b9]},
$ask:function(){return[W.b9]},
"%":"StyleSheetList"},
hj:{"^":"bH;cE:a<",
E:function(a,b){var z,y,x,w,v
for(z=this.gI(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.N)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gI:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.w([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.e(z,w)
v=z[w]
u=J.h(v)
if(u.gb1(v)==null)y.push(u.gC(v))}return y},
$asbH:function(){return[P.l,P.l]},
$asJ:function(){return[P.l,P.l]}},
ht:{"^":"hj;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gI(this).length}},
de:{"^":"fY;a,b,c,$ti",
di:function(a,b,c,d){return W.df(this.a,this.b,a,!1,H.z(this,0))}},
dd:{"^":"de;a,b,c,$ti"},
hv:{"^":"fZ;a,b,c,d,e,$ti",
cp:function(a,b,c,d,e){this.cO()},
cO:function(){var z=this.d
if(z!=null&&this.a<=0)J.dX(this.b,this.c,z,!1)},
n:{
df:function(a,b,c,d,e){var z=W.dC(new W.hw(c))
z=new W.hv(0,a,b,z,!1,[e])
z.cp(a,b,c,!1,e)
return z}}},
hw:{"^":"j:0;a",
$1:function(a){return this.a.$1(a)}},
bP:{"^":"c;bL:a<",
cq:function(a){var z,y
z=$.$get$bQ()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.M[y],W.j4())
for(y=0;y<12;++y)z.i(0,C.q[y],W.j5())}},
W:function(a){return $.$get$di().D(0,W.al(a))},
S:function(a,b,c){var z,y,x
z=W.al(a)
y=$.$get$bQ()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
n:{
dh:function(a){var z,y
z=document.createElement("a")
y=new W.i8(z,window.location)
y=new W.bP(y)
y.cq(a)
return y},
m_:[function(a,b,c,d){return!0},"$4","j4",16,0,7],
m0:[function(a,b,c,d){var z,y,x,w,v
z=d.gbL()
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
return z},"$4","j5",16,0,7]}},
k:{"^":"c;$ti",
gH:function(a){return new W.cw(a,this.gj(a),-1,null,[H.aR(this,a,"k",0)])}},
cL:{"^":"c;a",
W:function(a){return C.c.ba(this.a,new W.fv(a))},
S:function(a,b,c){return C.c.ba(this.a,new W.fu(a,b,c))}},
fv:{"^":"j:0;a",
$1:function(a){return a.W(this.a)}},
fu:{"^":"j:0;a,b,c",
$1:function(a){return a.S(this.a,this.b,this.c)}},
i9:{"^":"c;bL:d<",
cs:function(a,b,c,d){var z,y,x
this.a.M(0,c)
z=b.aD(0,new W.ia())
y=b.aD(0,new W.ib())
this.b.M(0,z)
x=this.c
x.M(0,C.O)
x.M(0,y)},
W:function(a){return this.a.D(0,W.al(a))},
S:["c4",function(a,b,c){var z,y
z=W.al(a)
y=this.c
if(y.D(0,H.b(z)+"::"+b))return this.d.cR(c)
else if(y.D(0,"*::"+b))return this.d.cR(c)
else{y=this.b
if(y.D(0,H.b(z)+"::"+b))return!0
else if(y.D(0,"*::"+b))return!0
else if(y.D(0,H.b(z)+"::*"))return!0
else if(y.D(0,"*::*"))return!0}return!1}]},
ia:{"^":"j:0;",
$1:function(a){return!C.c.D(C.q,a)}},
ib:{"^":"j:0;",
$1:function(a){return C.c.D(C.q,a)}},
im:{"^":"i9;e,a,b,c,d",
S:function(a,b,c){if(this.c4(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c7(a).a.getAttribute("template")==="")return this.e.D(0,b)
return!1},
n:{
du:function(){var z=P.l
z=new W.im(P.bF(C.p,z),P.aJ(null,null,null,z),P.aJ(null,null,null,z),P.aJ(null,null,null,z),null)
z.cs(null,new H.fm(C.p,new W.io(),[H.z(C.p,0),null]),["TEMPLATE"],null)
return z}}},
io:{"^":"j:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
ik:{"^":"c;",
W:function(a){var z=J.p(a)
if(!!z.$iscQ)return!1
z=!!z.$isu
if(z&&W.al(a)==="foreignObject")return!1
if(z)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.h.bY(b,"on"))return!1
return this.W(a)}},
cw:{"^":"c;a,b,c,d,$ti",
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aD(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gu:function(a){return this.d}},
hn:{"^":"c;a",$isy:1,n:{
ho:function(a){if(a===window)return a
else return new W.hn(a)}}},
cK:{"^":"c;"},
kZ:{"^":"c;"},
lL:{"^":"c;"},
i8:{"^":"c;a,b"},
dx:{"^":"c;a",
aJ:function(a){new W.iy(this).$2(a,null)},
a3:function(a,b){if(b==null)J.cb(a)
else b.removeChild(a)},
cJ:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.c7(a)
x=y.gcE().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.O(t)}v="element unprintable"
try{v=J.ai(a)}catch(t){H.O(t)}try{u=W.al(a)
this.cI(a,b,z,v,u,y,x)}catch(t){if(H.O(t) instanceof P.a6)throw t
else{this.a3(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cI:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a3(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.W(a)){this.a3(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.a3(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gI(f)
y=H.w(z.slice(0),[H.z(z,0)])
for(x=f.gI(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.e(y,x)
w=y[x]
if(!this.a.S(a,J.er(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.p(a).$iscW)this.aJ(a.content)}},
iy:{"^":"j:13;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a3(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.ef(z)}catch(w){H.O(w)
v=z
if(x){u=J.h(v)
if(u.gag(v)!=null){u.gag(v)
u.gag(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
hm:{"^":"d+eO;"},
hp:{"^":"d+i;"},
hq:{"^":"hp+k;"},
hr:{"^":"d+i;"},
hs:{"^":"hr+k;"},
hy:{"^":"d+i;"},
hz:{"^":"hy+k;"},
hN:{"^":"d+i;"},
hO:{"^":"hN+k;"},
hT:{"^":"d+J;"},
hU:{"^":"d+J;"},
hV:{"^":"d+i;"},
hW:{"^":"hV+k;"},
hX:{"^":"d+i;"},
hY:{"^":"hX+k;"},
i0:{"^":"d+i;"},
i1:{"^":"i0+k;"},
i7:{"^":"d+J;"},
dr:{"^":"y+i;"},
ds:{"^":"dr+k;"},
ic:{"^":"d+i;"},
id:{"^":"ic+k;"},
ih:{"^":"d+J;"},
ip:{"^":"d+i;"},
iq:{"^":"ip+k;"},
dv:{"^":"y+i;"},
dw:{"^":"dv+k;"},
iu:{"^":"d+i;"},
iv:{"^":"iu+k;"},
iA:{"^":"d+i;"},
iB:{"^":"iA+k;"},
iC:{"^":"d+i;"},
iD:{"^":"iC+k;"},
iE:{"^":"d+i;"},
iF:{"^":"iE+k;"},
iG:{"^":"d+i;"},
iH:{"^":"iG+k;"},
iI:{"^":"d+i;"},
iJ:{"^":"iI+k;"}}],["","",,P,{"^":"",
K:function(a){var z,y,x,w,v
if(a==null)return
z=P.Z()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.N)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
iX:function(a,b){var z={}
a.E(0,new P.iY(z))
return z},
cs:function(){var z=$.cr
if(z==null){z=J.bo(window.navigator.userAgent,"Opera",0)
$.cr=z}return z},
eS:function(){var z,y
z=$.co
if(z!=null)return z
y=$.cp
if(y==null){y=J.bo(window.navigator.userAgent,"Firefox",0)
$.cp=y}if(y)z="-moz-"
else{y=$.cq
if(y==null){y=P.cs()!==!0&&J.bo(window.navigator.userAgent,"Trident/",0)
$.cq=y}if(y)z="-ms-"
else z=P.cs()===!0?"-o-":"-webkit-"}$.co=z
return z},
iY:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",lg:{"^":"y;L:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},lI:{"^":"y;L:error=","%":"IDBTransaction"},lP:{"^":"R;J:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",i2:{"^":"c;$ti"},a_:{"^":"i2;$ti"}}],["","",,P,{"^":"",jo:{"^":"a7;J:target=","%":"SVGAElement"},jZ:{"^":"u;l:x=,m:y=","%":"SVGFEBlendElement"},k_:{"^":"u;w:type=,l:x=,m:y=","%":"SVGFEColorMatrixElement"},k0:{"^":"u;l:x=,m:y=","%":"SVGFEComponentTransferElement"},k1:{"^":"u;l:x=,m:y=","%":"SVGFECompositeElement"},k2:{"^":"u;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},k3:{"^":"u;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},k4:{"^":"u;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},k5:{"^":"u;l:x=,m:y=","%":"SVGFEFloodElement"},k6:{"^":"u;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},k7:{"^":"u;l:x=,m:y=","%":"SVGFEImageElement"},k8:{"^":"u;l:x=,m:y=","%":"SVGFEMergeElement"},k9:{"^":"u;l:x=,m:y=","%":"SVGFEMorphologyElement"},ka:{"^":"u;l:x=,m:y=","%":"SVGFEOffsetElement"},kb:{"^":"u;l:x=,m:y=,F:z=","%":"SVGFEPointLightElement"},kc:{"^":"u;l:x=,m:y=","%":"SVGFESpecularLightingElement"},kd:{"^":"u;l:x=,m:y=,F:z=","%":"SVGFESpotLightElement"},ke:{"^":"u;l:x=,m:y=","%":"SVGFETileElement"},kf:{"^":"u;w:type=,l:x=,m:y=","%":"SVGFETurbulenceElement"},kk:{"^":"u;l:x=,m:y=","%":"SVGFilterElement"},km:{"^":"a7;l:x=,m:y=","%":"SVGForeignObjectElement"},f7:{"^":"a7;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},a7:{"^":"u;","%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ku:{"^":"a7;l:x=,m:y=","%":"SVGImageElement"},kA:{"^":"hQ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cE]},
$isf:1,
$asf:function(){return[P.cE]},
$ask:function(){return[P.cE]},
"%":"SVGLengthList"},kG:{"^":"u;l:x=,m:y=","%":"SVGMaskElement"},l_:{"^":"i_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cO]},
$isf:1,
$asf:function(){return[P.cO]},
$ask:function(){return[P.cO]},
"%":"SVGNumberList"},l6:{"^":"u;l:x=,m:y=","%":"SVGPatternElement"},l8:{"^":"d;l:x=,m:y=","%":"SVGPoint"},l9:{"^":"d;j:length=","%":"SVGPointList"},lc:{"^":"d;l:x=,m:y=","%":"SVGRect"},ld:{"^":"f7;l:x=,m:y=","%":"SVGRectElement"},cQ:{"^":"u;w:type=",$iscQ:1,"%":"SVGScriptElement"},lt:{"^":"ij;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.l]},
$isf:1,
$asf:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},lv:{"^":"u;w:type=","%":"SVGStyleElement"},u:{"^":"ak;",
P:function(a,b,c,d){var z,y,x,w,v,u
z=H.w([],[W.cK])
z.push(W.dh(null))
z.push(W.du())
z.push(new W.ik())
c=new W.dx(new W.cL(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.t).d1(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.L(w)
u=z.gT(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaA:function(a){return new W.dd(a,"change",!1,[W.R])},
$isu:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lw:{"^":"a7;l:x=,m:y=","%":"SVGSVGElement"},h3:{"^":"a7;","%":"SVGTextPathElement;SVGTextContentElement"},lA:{"^":"h3;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},lJ:{"^":"ix;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cX]},
$isf:1,
$asf:function(){return[P.cX]},
$ask:function(){return[P.cX]},
"%":"SVGTransformList"},lN:{"^":"a7;l:x=,m:y=","%":"SVGUseElement"},hP:{"^":"d+i;"},hQ:{"^":"hP+k;"},hZ:{"^":"d+i;"},i_:{"^":"hZ+k;"},ii:{"^":"d+i;"},ij:{"^":"ii+k;"},iw:{"^":"d+i;"},ix:{"^":"iw+k;"}}],["","",,P,{"^":"",jt:{"^":"d;j:length=","%":"AudioBuffer"},ju:{"^":"hk;",
h:function(a,b){return P.K(a.get(b))},
E:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.K(y.value[1]))}},
gI:function(a){var z=H.w([],[P.l])
this.E(a,new P.eC(z))
return z},
gj:function(a){return a.size},
$asJ:function(){return[P.l,null]},
"%":"AudioParamMap"},eC:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},jv:{"^":"y;j:length=","%":"AudioTrackList"},eD:{"^":"y;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},l2:{"^":"eD;j:length=","%":"OfflineAudioContext"},hk:{"^":"d+J;"}}],["","",,P,{"^":"",le:{"^":"d;",
b8:function(a,b){return a.activeTexture(b)},
bb:function(a,b,c){return a.attachShader(b,c)},
bc:function(a,b,c){return a.bindBuffer(b,c)},
be:function(a,b,c){return a.bindTexture(b,c)},
bf:function(a,b){return a.blendEquation(b)},
bg:function(a,b,c){return a.blendFunc(b,c)},
bh:function(a,b,c,d){return a.bufferData(b,c,d)},
bi:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bj:function(a,b){return a.compileShader(b)},
bk:function(a){return a.createBuffer()},
bl:function(a){return a.createProgram()},
bm:function(a,b){return a.createShader(b)},
bn:function(a,b){return a.depthMask(b)},
bo:function(a,b){return a.disable(b)},
bp:function(a,b,c,d){return a.drawArrays(b,c,d)},
bq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
br:function(a,b){return a.enable(b)},
bs:function(a,b){return a.enableVertexAttribArray(b)},
ai:function(a){return P.K(a.getContextAttributes())},
aE:function(a,b){return a.getProgramInfoLog(b)},
aF:function(a,b,c){return a.getProgramParameter(b,c)},
aG:function(a,b){return a.getShaderInfoLog(b)},
aH:function(a,b,c){return a.getShaderParameter(b,c)},
aI:function(a,b,c){return a.getUniformLocation(b,c)},
bx:function(a,b){return a.linkProgram(b)},
aK:function(a,b,c){return a.shaderSource(b,c)},
aN:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bC:function(a,b,c){return a.uniform1f(b,c)},
bD:function(a,b,c){return a.uniform1fv(b,c)},
bE:function(a,b,c){return a.uniform1i(b,c)},
bF:function(a,b,c){return a.uniform1iv(b,c)},
bG:function(a,b,c){return a.uniform2fv(b,c)},
bH:function(a,b,c){return a.uniform3fv(b,c)},
bI:function(a,b,c){return a.uniform4fv(b,c)},
bJ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bK:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bM:function(a,b){return a.useProgram(b)},
bN:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGLRenderingContext"},lf:{"^":"d;",
cU:function(a,b){return a.beginTransformFeedback(b)},
cX:function(a,b){return a.bindVertexArray(b)},
d2:function(a){return a.createVertexArray()},
d3:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
d4:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
d5:function(a){return a.endTransformFeedback()},
dw:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
dA:function(a,b,c){return a.vertexAttribDivisor(b,c)},
b8:function(a,b){return a.activeTexture(b)},
bb:function(a,b,c){return a.attachShader(b,c)},
bc:function(a,b,c){return a.bindBuffer(b,c)},
be:function(a,b,c){return a.bindTexture(b,c)},
bf:function(a,b){return a.blendEquation(b)},
bg:function(a,b,c){return a.blendFunc(b,c)},
bh:function(a,b,c,d){return a.bufferData(b,c,d)},
bi:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bj:function(a,b){return a.compileShader(b)},
bk:function(a){return a.createBuffer()},
bl:function(a){return a.createProgram()},
bm:function(a,b){return a.createShader(b)},
bn:function(a,b){return a.depthMask(b)},
bo:function(a,b){return a.disable(b)},
bp:function(a,b,c,d){return a.drawArrays(b,c,d)},
bq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
br:function(a,b){return a.enable(b)},
bs:function(a,b){return a.enableVertexAttribArray(b)},
ai:function(a){return P.K(a.getContextAttributes())},
aE:function(a,b){return a.getProgramInfoLog(b)},
aF:function(a,b,c){return a.getProgramParameter(b,c)},
aG:function(a,b){return a.getShaderInfoLog(b)},
aH:function(a,b,c){return a.getShaderParameter(b,c)},
aI:function(a,b,c){return a.getUniformLocation(b,c)},
bx:function(a,b){return a.linkProgram(b)},
aK:function(a,b,c){return a.shaderSource(b,c)},
aN:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bC:function(a,b,c){return a.uniform1f(b,c)},
bD:function(a,b,c){return a.uniform1fv(b,c)},
bE:function(a,b,c){return a.uniform1i(b,c)},
bF:function(a,b,c){return a.uniform1iv(b,c)},
bG:function(a,b,c){return a.uniform2fv(b,c)},
bH:function(a,b,c){return a.uniform3fv(b,c)},
bI:function(a,b,c){return a.uniform4fv(b,c)},
bJ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bK:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bM:function(a,b){return a.useProgram(b)},
bN:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",lr:{"^":"ig;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return P.K(a.item(b))},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.bG]},
$isf:1,
$asf:function(){return[P.bG]},
$ask:function(){return[P.bG]},
"%":"SQLResultSetRowList"},ie:{"^":"d+i;"},ig:{"^":"ie+k;"}}],["","",,G,{"^":"",
hd:function(a){var z,y,x,w
z=H.w(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.e(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.e(z,y)
z[y]=w}return C.c.a5(z,"\n")},
dc:function(a,b,c){var z,y,x,w
z=J.h(a)
y=z.bm(a,b)
z.aK(a,y,c)
z.bj(a,y)
x=z.aH(a,y,35713)
if(x!=null&&J.H(x,!1)){w=z.aG(a,y)
P.aA("E:Compilation failed:")
P.aA("E:"+G.hd(c))
P.aA("E:Failure:")
P.aA(C.h.t("E:",w))
throw H.a(w)}return y},
cx:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bq(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.br(a[y])
if(x>=w)return H.e(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.e(a,y)
v=J.c9(a[y])
if(z>=w)return H.e(b,z)
b[z]=v}return b},
f3:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bq(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x;++z
if(y>=a.length)return H.e(a,y)
x=J.br(a[y])
if(z>=w)return H.e(b,z)
b[z]=x}return b},
f4:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bq(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.br(a[y])
if(x>=w)return H.e(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.e(a,y)
x=J.c9(a[y])
if(v>=w)return H.e(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.e(a,y)
x=J.ei(a[y])
if(z>=w)return H.e(b,z)
b[z]=x}return b},
f2:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aD(a[y],0)
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.aD(a[y],1)
if(x>=w)return H.e(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.e(a,y)
x=J.aD(a[y],2)
if(v>=w)return H.e(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.e(a,y)
x=J.aD(a[y],3)
if(z>=w)return H.e(b,z)
b[z]=x}return b},
hL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.a2(z,z.r,null,null,[H.z(z,0)]),y.c=z.e,x=b.x,w=[[P.f,P.C]],v=[P.ay],u=[T.bN],t=[T.E],s=[T.D];y.q();){r=y.d
if(!x.ad(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.dJ>0)H.bm("I: "+q)
continue}p=z.h(0,r)
switch($.$get$M().h(0,r).a){case"vec2":b.a1(r,G.f3(H.aS(p,"$isf",s,"$asf"),null),2)
break
case"vec3":b.a1(r,G.cx(H.aS(p,"$isf",t,"$asf"),null),3)
break
case"vec4":b.a1(r,G.f4(H.aS(p,"$isf",u,"$asf"),null),4)
break
case"float":b.a1(r,new Float32Array(H.bd(H.aS(p,"$isf",v,"$asf"))),1)
break
case"uvec4":b.a1(r,G.f2(H.aS(p,"$isf",w,"$asf"),null),4)
break}}},
bI:{"^":"c;"},
h6:{"^":"bI;d,a,b,c",
cg:function(){return this.d},
k:function(a){var z,y,x,w
z=H.w(["{"+H.b(new H.d8(H.j1(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.a2(y,y.r,null,null,[H.z(y,0)]),x.c=y.e;x.q();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a5(z,"\n")}},
eG:{"^":"c;a,b",
bt:function(a,b,c){J.ea(this.a,b)
if(c>0)J.ey(this.a,b,c)},
bO:function(a,b,c,d,e,f,g,h){J.bn(this.a,34962,b)
J.ez(this.a,c,d,e,!1,g,h)}},
f1:{"^":"c;a,b,c,d"},
f6:{"^":"c;a,b,c,d,e",
aQ:function(a){switch($.$get$M().h(0,a).a){case"vec2":this.e.i(0,a,H.w([],[T.D]))
break
case"vec3":this.e.i(0,a,H.w([],[T.E]))
break
case"vec4":this.e.i(0,a,H.w([],[T.bN]))
break
case"float":this.e.i(0,a,H.w([],[P.ay]))
break
case"uvec4":this.e.i(0,a,H.w([],[[P.f,P.C]]))
break}},
c7:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].ac(0))},
c8:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].ac(0))},
ca:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.f1(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].ac(0))},
cd:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.w(y,[P.C])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.e(y,u)
t=y[u]
s=t.gdD(t)
if(v>=w)return H.e(x,v)
x[v]=s
s=v+1
r=t.gdE(t)
if(s>=w)return H.e(x,s)
x[s]=r
r=v+2
s=t.gdF(t)
if(r>=w)return H.e(x,r)
x[r]=s
v+=3}for(y=z.length,u=0;u<y;++u){q=z[u]
s=q.a
if(v>=w)return H.e(x,v)
x[v]=s
r=v+1
if(r>=w)return H.e(x,r)
x[r]=q.b
r=v+2
p=q.c
if(r>=w)return H.e(x,r)
x[r]=p
r=v+3
if(r>=w)return H.e(x,r)
x[r]=s
s=v+4
if(s>=w)return H.e(x,s)
x[s]=p
p=v+5
if(p>=w)return H.e(x,p)
x[p]=q.d
v+=6}return x},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.a2(y,y.r,null,null,[H.z(y,0)]),x.c=y.e;x.q();){w=x.d
v=$.$get$M().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a5(z," ")}},
fo:{"^":"bI;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aP:function(a,b,c){var z,y
C.h.a9(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bn(z.a,34962,y)
J.c4(z.a,34962,b,35048)},
ce:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a1:function(a,b,c){var z,y,x,w,v
z=J.c5(a,0)===105
if(z&&this.z===0)this.z=C.b.c5(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bp(x.a))
this.aP(a,b,c)
w=$.$get$M().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.aT(x.a,this.e)
x.bt(0,v,z?1:0)
x.bO(0,y.h(0,a),v,w.aR(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a2(z,z.r,null,null,[H.z(z,0)]),x.c=z.e;x.q();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a5(y,"  ")}},
fJ:{"^":"bI;d,e,f,r,x,y,z,Q,ch,a,b,c",
ci:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.ca(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
x.i(0,t,J.ca(w.a,v,t))}},
cl:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a2(y,y.r,null,null,[H.z(y,0)]),w.c=y.e;w.q();){v=w.d
if(!z.ad(0,v))x.push(v)}for(z=this.x,y=new P.dk(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.q();){v=y.d
if(!z.D(0,v))x.push(v)}return x},
co:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a2(b,b.r,null,null,[H.z(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.c5(t,0)){case 117:if(w.ad(0,t)){s=b.h(0,t)
if(v.ad(0,t))H.bm("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$M().h(0,t)
if(r==null)H.G("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bs(x.a,q,s)
else if(!!J.p(s).$isf9)J.ew(x.a,q,s)
break
case"float":if(r.c===0)J.eu(x.a,q,s)
else if(!!J.p(s).$isbA)J.ev(x.a,q,s)
break
case"mat4":if(r.c===0){p=C.o.gaO(H.W(s,"$iskI"))
J.cg(x.a,q,!1,p)}else if(!!J.p(s).$isbA)J.cg(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.o.gaO(H.W(s,"$iskH"))
J.cf(x.a,q,!1,p)}else if(!!J.p(s).$isbA)J.cf(x.a,q,!1,s)
break
case"vec4":if(r.c===0){p=C.o.gaO(H.W(s,"$isbN"))
J.ce(x.a,q,p)}else J.ce(x.a,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cd(o,q,H.W(s,"$isE").a)
else J.cd(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cc(o,q,H.W(s,"$isD").a)
else J.cc(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.ae(p)
J.c1(x.a,33984+p)
p=H.W(s,"$ish4").cf()
J.c3(x.a,3553,p)
p=this.ch
J.bs(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.t()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.ae(p)
J.c1(x.a,33984+p)
p=H.W(s,"$ish4").cf()
J.c3(x.a,34067,p)
p=this.ch
J.bs(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.t()
this.ch=p+1
break
default:H.bm("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.H(s,!0)
o=x.a
if(p)J.aE(o,2929)
else J.e5(o,2929)
break
case"cStencilFunc":H.W(s,"$islE")
s.gd9()
J.aE(x.a,2960)
p=s.gd9()
o=s.gK(s)
n=s.gdI(s)
J.eq(x.a,p,o,n)
break
case"cDepthWrite":J.e4(x.a,s)
break
case"cBlendEquation":H.W(s,"$islD")
s.gd6()
J.aE(x.a,3042)
p=s.gdB()
o=s.gdH()
J.e_(x.a,p,o)
o=s.gd6()
J.dZ(x.a,o)
break}++u
break}}m=P.eW(0,0,0,Date.now()-new P.cn(z,!1).a,0,0)
""+u
m.k(0)},
cc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.ex(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.aU()}for(x=0;x<1;++x){w=b[x]
this.co(w.a,w.cg())}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b0()}for(v=a.cy,u=new H.a2(v,v.r,null,null,[H.z(v,0)]),u.c=v.e;u.q();)y.ax(0,u.d)
t=this.cl()
if(t.length!==0)P.aA("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.aT(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.ce()
u=a.Q
r=a.z
if(s)J.dY(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.e9(q,y,v,u,0,r)
else J.e8(q,y,v,u,0)}else{u=z.a
if(r>1)J.e7(u,y,0,v,r)
else J.e6(u,y,0,v)}if(s)J.eb(z.a)},
cb:function(a,b){return this.cc(a,b,null)},
n:{
fK:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.aJ(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.e2(b.a)
u=G.dc(b.a,35633,y)
J.c2(b.a,v,u)
t=G.dc(b.a,35632,x)
J.c2(b.a,v,t)
if(w.length>0)J.es(b.a,v,w,35980)
J.en(b.a,v)
if(J.em(b.a,v,35714)!==!0)H.G(J.el(b.a,v))
z=new G.fJ(b,c,d,v,P.bF(c.c,null),P.Z(),P.Z(),z,null,a,!1,!0)
z.ci(a,b,c,d)
return z}}},
t:{"^":"c;a,b,c",
aR:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
fQ:{"^":"c;a,b,c,d,e,f,r,x",
c6:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.i(0,w,this.r);++this.r}C.c.aM(z)},
c9:function(a){var z,y
for(z=this.d,y=0;y<9;++y)z.push(a[y])
C.c.aM(z)},
aS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){t=z[u]
s=$.$get$M().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.e(z,u)
q=z[u]
s=$.$get$M().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.$get$M().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.N)(z),++u){q=z[u]
s=$.$get$M().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.c.M(w,b)
if(a)w.push("}")
return C.c.a5(w,"\n")},
n:{
cR:function(a){return new G.fQ(a,null,[],[],[],[],0,P.Z())}}}}],["","",,R,{"^":"",fV:{"^":"c;",
cj:function(a,b,c){var z,y,x
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
x=this.cr(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
cr:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.hu("span",null)
y=J.c8(v)
J.h(y).sB(y,"1px")
C.n.sA(y,""+d+"px")
C.n.sd7(y,"left")
x=C.n.aX(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},fW:{"^":"fV;e,f,a,b,c,d",
cn:function(a,b){var z,y,x,w,v;++this.e
if(J.aC(J.dW(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.u.dv(z,2)+" fps"
y=this.c;(y&&C.D).bU(y,b)
x=C.b.V(30*C.u.cY(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.c8(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
cm:function(a){return this.cn(a,"")}}}],["","",,A,{"^":"",
dO:function(a){var z,y
z=C.P.d8(a,0,new A.j3())
if(typeof z!=="number")return H.ae(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
j3:{"^":"j:14;",
$2:function(a,b){var z,y
z=J.ah(a,J.a5(b))
if(typeof z!=="number")return H.ae(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",D:{"^":"c;b6:a<",
Z:function(a,b){var z=this.a
z[0]=a
z[1]=b},
O:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.D){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.dO(this.a)},
a8:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.D(z)
y.O(this)
x=b.gb6()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
t:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.D(z)
y.O(this)
x=b.gb6()
z[0]=C.i.t(z[0],x.h(0,0))
z[1]=C.i.t(z[1],x.h(0,1))
return y},
ah:function(a,b){var z=new T.D(new Float32Array(2))
z.O(this)
z.bS(0,1/b)
return z},
h:function(a,b){var z=this.a
if(b>=2)return H.e(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
bS:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
ac:function(a){var z=new T.D(new Float32Array(2))
z.O(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},E:{"^":"c;b7:a<",
a_:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
O:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
G:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.E){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.dO(this.a)},
a8:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.E(z)
y.O(this)
x=b.gb7()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
t:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.E(z)
y.O(this)
x=b.gb7()
z[0]=C.i.t(z[0],x.h(0,0))
z[1]=C.i.t(z[1],x.h(0,1))
z[2]=C.i.t(z[2],x.h(0,2))
return y},
ah:function(a,b){return this.bT(1/b)},
h:function(a,b){var z=this.a
if(b>=3)return H.e(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
bT:function(a){var z,y
z=new Float32Array(3)
y=new T.E(z)
y.O(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
ac:function(a){var z=new T.E(new Float32Array(3))
z.O(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gF:function(a){return this.a[2]}},bN:{"^":"c;"}}],["","",,R,{"^":"",
dQ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z={}
y=$.$get$M()
y.i(0,"uFreqMul",C.a)
y.i(0,"uAmplMul",C.a)
y.i(0,"uAmpl1",C.a)
y.i(0,"uAmpl2",C.a)
y.i(0,"uAmpl3",C.a)
y.i(0,"uMode",C.a)
y.i(0,"uSpeed",C.a)
x=document
w=new R.fW(0,0,null,null,null,null)
w.cj(x.getElementById("stats"),"blue","gray")
v=x.querySelector("#webgl-canvas")
u=v.clientWidth
t=v.clientHeight
s=J.h(v)
s.sB(v,u)
s.sA(v,t)
r=new G.eG(null,v)
s=J.ej(v,"webgl2",P.cF(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
r.a=s
if(s==null)H.G(P.cv('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.b(J.ek(s))
if($.dJ>0)P.aA("I: "+q)
J.e0(s,0,0,0,1)
J.aE(s,2929)
J.aE(s,2884)
p=G.fK("perlin",r,$.$get$dS(),$.$get$dR())
s=new T.E(new Float32Array(3))
s.a_(-1,-1,0)
q=new T.E(new Float32Array(3))
q.a_(1,-1,0)
o=new T.E(new Float32Array(3))
o.a_(1,1,0)
n=new T.E(new Float32Array(3))
n.a_(-1,1,0)
m=new T.D(new Float32Array(2))
m.Z(0,0)
l=new T.D(new Float32Array(2))
l.Z(1,0)
k=new T.D(new Float32Array(2))
k.Z(1,1)
j=new T.D(new Float32Array(2))
j.Z(0,1)
i=new T.E(new Float32Array(3))
i.a_(0,0,1)
h=[]
g=new G.f6(!1,[],[],h,P.Z())
g.aQ("aTexUV")
g.ca([s,q,o,n])
g.c7("aTexUV",[m,l,k,j])
g.aQ("aNormal")
g.c8("aNormal",[i,i,i,i])
s=p.d
q=p.e.x
o=P.Z()
n=J.e3(s.a)
f=new G.fo(s,n,4,o,q,null,0,-1,null,null,P.Z(),"meshdata:quad",!1,!0)
h=G.cx(h,null)
o.i(0,"aPosition",J.bp(s.a))
f.ch=h
f.aP("aPosition",h,3)
e=y.h(0,"aPosition")
if(e==null)H.G("Unknown canonical aPosition")
d=q.h(0,"aPosition")
J.aT(s.a,n)
s.bt(0,d,0)
s.bO(0,o.h(0,"aPosition"),d,e.aR(),5126,!1,0,0)
y=g.cd()
f.y=J.bp(s.a)
q=f.ch.length
if(q<768){f.cx=new Uint8Array(H.bd(y))
f.Q=5121}else if(q<196608){f.cx=new Uint16Array(H.bd(y))
f.Q=5123}else{f.cx=new Uint32Array(H.bd(y))
f.Q=5125}J.aT(s.a,n)
y=f.y
q=f.cx
J.bn(s.a,34963,y)
J.c4(s.a,34963,q,35048)
G.hL(g,f)
y=P.Z()
c=new G.h6(y,"simplex",!1,!0)
y.i(0,"uTime",0)
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return t.t()
s=new T.D(new Float32Array(2))
s.Z(u,t)
y.i(0,"uCanvasSize",s)
for(y=x.getElementsByTagName("input"),s=y.length,b=0;b<y.length;y.length===s||(0,H.N)(y),++b){q=J.ee(y[b])
W.df(q.a,q.b,new R.jg(c),!1,H.z(q,0))}for(y=x.getElementsByTagName("input"),s=y.length,b=0;b<y.length;y.length===s||(0,H.N)(y),++b){a=y[b]
q=J.h(a)
if(q.gw(a)==="radio"&&q.gcZ(a)!==!0)continue
a0=x.createEvent("Event")
a0.initEvent("change",!0,!0)
a.dispatchEvent(a0)}z.a=0
new R.jf(z,c,p,f,w).$1(0)},
jg:{"^":"j:15;a",
$1:function(a){var z,y
z=H.W(J.eh(a),"$iscy")
if(z.type==="range"){y=document.getElementById(z.name)
this.a.d.i(0,z.name,P.dH(z.value,null))
J.ep(y,z.value)}if(z.type==="radio")this.a.d.i(0,z.name,P.dH(z.value,null))}},
jf:{"^":"j:16;a,b,c,d,e",
$1:function(a){var z,y,x
z=J.dK(a)
y=this.a
y.a=z.t(a,0)
x=this.b
x.d.i(0,"uTime",z.ah(a,1000))
this.c.cb(this.d,[x])
C.a6.gcS(window).bz(this)
this.e.cm(y.a)}}},1],["","",,V,{"^":""}]]
setupProgram(dart,0,0)
J.p=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cA.prototype
return J.cz.prototype}if(typeof a=="string")return J.ap.prototype
if(a==null)return J.cB.prototype
if(typeof a=="boolean")return J.ff.prototype
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aQ(a)}
J.dK=function(a){if(typeof a=="number")return J.ao.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aQ(a)}
J.a0=function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aQ(a)}
J.bh=function(a){if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aQ(a)}
J.bi=function(a){if(typeof a=="number")return J.ao.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aO.prototype
return a}
J.j0=function(a){if(typeof a=="number")return J.ao.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aO.prototype
return a}
J.bY=function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aO.prototype
return a}
J.h=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aQ(a)}
J.ah=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.dK(a).t(a,b)}
J.H=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).G(a,b)}
J.I=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.bi(a).a6(a,b)}
J.aC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.bi(a).Y(a,b)}
J.dW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.bi(a).a8(a,b)}
J.aD=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jd(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)}
J.c1=function(a,b){return J.h(a).b8(a,b)}
J.dX=function(a,b,c,d){return J.h(a).b9(a,b,c,d)}
J.c2=function(a,b,c){return J.h(a).bb(a,b,c)}
J.dY=function(a,b){return J.h(a).cU(a,b)}
J.bn=function(a,b,c){return J.h(a).bc(a,b,c)}
J.c3=function(a,b,c){return J.h(a).be(a,b,c)}
J.aT=function(a,b){return J.h(a).cX(a,b)}
J.dZ=function(a,b){return J.h(a).bf(a,b)}
J.e_=function(a,b,c){return J.h(a).bg(a,b,c)}
J.c4=function(a,b,c,d){return J.h(a).bh(a,b,c,d)}
J.e0=function(a,b,c,d,e){return J.h(a).bi(a,b,c,d,e)}
J.c5=function(a,b){return J.bY(a).ay(a,b)}
J.e1=function(a,b){return J.j0(a).X(a,b)}
J.bo=function(a,b,c){return J.a0(a).d0(a,b,c)}
J.bp=function(a){return J.h(a).bk(a)}
J.e2=function(a){return J.h(a).bl(a)}
J.e3=function(a){return J.h(a).d2(a)}
J.e4=function(a,b){return J.h(a).bn(a,b)}
J.e5=function(a,b){return J.h(a).bo(a,b)}
J.e6=function(a,b,c,d){return J.h(a).bp(a,b,c,d)}
J.e7=function(a,b,c,d,e){return J.h(a).d3(a,b,c,d,e)}
J.e8=function(a,b,c,d,e){return J.h(a).bq(a,b,c,d,e)}
J.e9=function(a,b,c,d,e,f){return J.h(a).d4(a,b,c,d,e,f)}
J.c6=function(a,b){return J.bh(a).p(a,b)}
J.aE=function(a,b){return J.h(a).br(a,b)}
J.ea=function(a,b){return J.h(a).bs(a,b)}
J.eb=function(a){return J.h(a).d5(a)}
J.ec=function(a,b){return J.bh(a).E(a,b)}
J.c7=function(a){return J.h(a).gcT(a)}
J.aF=function(a){return J.h(a).gL(a)}
J.a5=function(a){return J.p(a).gv(a)}
J.aG=function(a){return J.bh(a).gH(a)}
J.X=function(a){return J.a0(a).gj(a)}
J.ed=function(a){return J.h(a).gdk(a)}
J.ee=function(a){return J.h(a).gaA(a)}
J.ef=function(a){return J.h(a).gaB(a)}
J.c8=function(a){return J.h(a).gR(a)}
J.eg=function(a){return J.h(a).gds(a)}
J.eh=function(a){return J.h(a).gJ(a)}
J.ei=function(a){return J.h(a).gbP(a)}
J.bq=function(a){return J.h(a).gl(a)}
J.br=function(a){return J.h(a).gm(a)}
J.c9=function(a){return J.h(a).gF(a)}
J.ej=function(a,b,c){return J.h(a).bR(a,b,c)}
J.ek=function(a){return J.h(a).ai(a)}
J.el=function(a,b){return J.h(a).aE(a,b)}
J.em=function(a,b,c){return J.h(a).aF(a,b,c)}
J.ca=function(a,b,c){return J.h(a).aI(a,b,c)}
J.en=function(a,b){return J.h(a).bx(a,b)}
J.cb=function(a){return J.bh(a).dm(a)}
J.eo=function(a,b){return J.h(a).sae(a,b)}
J.ep=function(a,b){return J.h(a).sK(a,b)}
J.eq=function(a,b,c,d){return J.h(a).aN(a,b,c,d)}
J.er=function(a){return J.bY(a).du(a)}
J.ai=function(a){return J.p(a).k(a)}
J.es=function(a,b,c,d){return J.h(a).dw(a,b,c,d)}
J.et=function(a){return J.bY(a).dz(a)}
J.eu=function(a,b,c){return J.h(a).bC(a,b,c)}
J.ev=function(a,b,c){return J.h(a).bD(a,b,c)}
J.bs=function(a,b,c){return J.h(a).bE(a,b,c)}
J.ew=function(a,b,c){return J.h(a).bF(a,b,c)}
J.cc=function(a,b,c){return J.h(a).bG(a,b,c)}
J.cd=function(a,b,c){return J.h(a).bH(a,b,c)}
J.ce=function(a,b,c){return J.h(a).bI(a,b,c)}
J.cf=function(a,b,c,d){return J.h(a).bJ(a,b,c,d)}
J.cg=function(a,b,c,d){return J.h(a).bK(a,b,c,d)}
J.ex=function(a,b){return J.h(a).bM(a,b)}
J.ey=function(a,b,c){return J.h(a).dA(a,b,c)}
J.ez=function(a,b,c,d,e,f,g){return J.h(a).bN(a,b,c,d,e,f,g)}
I.af=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.t=W.bt.prototype
C.n=W.eN.prototype
C.D=W.eT.prototype
C.E=J.d.prototype
C.c=J.am.prototype
C.u=J.cz.prototype
C.b=J.cA.prototype
C.o=J.cB.prototype
C.i=J.ao.prototype
C.h=J.ap.prototype
C.L=J.aq.prototype
C.P=H.fr.prototype
C.Q=W.ft.prototype
C.x=J.fx.prototype
C.C=W.h2.prototype
C.r=J.aO.prototype
C.a6=W.hb.prototype
C.e=new P.i3()
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.M=H.w(I.af(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.N=I.af(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.O=I.af([])
C.p=H.w(I.af(["bind","if","ref","repeat","syntax"]),[P.l])
C.q=H.w(I.af(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.R=new G.t("vec3","vertex btangents",0)
C.d=new G.t("vec3","",0)
C.S=new G.t("vec4","delta from light",0)
C.m=new G.t("","",0)
C.y=new G.t("vec3","vertex coordinates",0)
C.T=new G.t("vec3","vertex binormals",0)
C.z=new G.t("vec4","for wireframe",0)
C.U=new G.t("vec4","per vertex color",0)
C.V=new G.t("float","for normal maps",0)
C.j=new G.t("mat4","",0)
C.X=new G.t("mat4","",4)
C.W=new G.t("mat4","",128)
C.a=new G.t("float","",0)
C.Y=new G.t("float","",4)
C.Z=new G.t("float","depth for shadowmaps",0)
C.f=new G.t("sampler2D","",0)
C.a_=new G.t("float","for bump maps",0)
C.a0=new G.t("vec2","texture uvs",0)
C.a1=new G.t("float","time since program start in sec",0)
C.k=new G.t("vec2","",0)
C.a2=new G.t("samplerCube","",0)
C.l=new G.t("vec4","",0)
C.a3=new G.t("vec3","vertex normals",0)
C.a4=new G.t("sampler2DShadow","",0)
C.A=new G.t("vec3","per vertex color",0)
C.B=new G.t("mat3","",0)
C.a5=new G.t("vec3","vertex tangents",0)
$.P=0
$.aj=null
$.ch=null
$.dN=null
$.dD=null
$.dU=null
$.bg=null
$.bj=null
$.bZ=null
$.a9=null
$.au=null
$.av=null
$.bS=!1
$.x=C.e
$.Y=null
$.by=null
$.cu=null
$.ct=null
$.cr=null
$.cq=null
$.cp=null
$.co=null
$.dJ=0
$.eL=" // range is [0, 1] \n vec3 HUEtoRGB(float hue) {\n    float r = clamp(abs(hue * 6.0 - 3.0) - 1.0, 0.0, 1.0);\n    float g = clamp(2.0 - abs(hue * 6.0 - 2.0), 0.0, 1.0);\n    float b = clamp(2.0 - abs(hue * 6.0 - 4.0), 0.0, 1.0);\n    return vec3(r, g, b);\n }\n \n vec3 HSLtoRGB(vec3 HSL) {\n     vec3 RGB = HUEtoRGB(HSL.x);\n     float C = (1.0 - abs(2.0 * HSL.z - 1.0)) * HSL.y;\n     return (RGB - 0.5) * C + HSL.z;\n  }\n"
$.jk="   #define D 3\n   // default:\n   // const float ampls[D] = float[](1.0, 0.5, 0.25);\n\n   const float freqs[D] = float[](1.0, 2.0, 4.0);\n  \n   float ComplexNoise(vec2 xy, \n                      float baseFreq, float freqs[D], \n                      float baseAmpl, float ampls[D]) {\n       float total = 0.0;\n       for(int i = 0; i < D; i++) {\n           total += baseAmpl * ampls[i] * snoise3(vec3(xy * baseFreq * freqs[i], uTime * uSpeed));\n       }             \n       return total;\n   }\n   \n   float Standard(vec2 xy) {\n       float ampls[D] = float[](uAmpl1, uAmpl2, uAmpl3);\n       return ComplexNoise(xy, uFreqMul, freqs, uAmplMul, ampls);\n   }\n \n   float Marble(vec2 xy) {\n       float ampls[D] = float[](uAmpl1, uAmpl2, uAmpl3);\n       float n = ComplexNoise(xy, uFreqMul, freqs, uAmplMul, ampls);\n       return abs(cos(xy.x * 0.008 + xy.y * 0.008 + 4.0 * n)); \n   }\n   \n   float Wood(vec2 xy) {\n       float ampls[D] = float[](uAmpl1, uAmpl2, uAmpl3);\n       vec2 p = xy / 40.0;\n       float n = ComplexNoise(xy, uFreqMul, freqs, uAmplMul, ampls);\n       return cos((length(p) + n) * 4.0); \n   \n       //float n = 0.4 * snoise2(xy * 0.005);   \n       //float n = ComplexNoise(xy, 0.01, freqs, 0.2, ampls);\n   }  \n\n   vec3 Cloud(vec2 xy) {\n       float ampls[D] = float[](uAmpl1, uAmpl2, uAmpl3);\n       float n = ComplexNoise(xy, uFreqMul, freqs, uAmplMul, ampls);\n       return HSLtoRGB(vec3(0.66, 1.0, 0.75 + n / 4.0));\n   }  \n   \n   void main() {\n       // This are pixel coordinates  0, 0 being lowel left\n       vec2 xy = gl_FragCoord.xy - 0.5 * uCanvasSize;\n       \n       // see simple_noise.html for mode coding \n       if (uMode == 4.0) {\n           oFragColor.g = Marble(xy);\n       } else if (uMode == 3.0) {\n           oFragColor.rgb = Cloud(xy);\n       } else if (uMode == 2.0) {\n           oFragColor.g = Wood(xy);\n       } else {\n           oFragColor.g =  Standard(xy);\n       }\n   }\n "
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
I.$lazy(y,x,w)}})(["cm","$get$cm",function(){return H.dL("_$dart_dartClosure")},"bC","$get$bC",function(){return H.dL("_$dart_js")},"cY","$get$cY",function(){return H.S(H.bc({
toString:function(){return"$receiver$"}}))},"cZ","$get$cZ",function(){return H.S(H.bc({$method$:null,
toString:function(){return"$receiver$"}}))},"d_","$get$d_",function(){return H.S(H.bc(null))},"d0","$get$d0",function(){return H.S(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"d4","$get$d4",function(){return H.S(H.bc(void 0))},"d5","$get$d5",function(){return H.S(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"d2","$get$d2",function(){return H.S(H.d3(null))},"d1","$get$d1",function(){return H.S(function(){try{null.$method$}catch(z){return z.message}}())},"d7","$get$d7",function(){return H.S(H.d3(void 0))},"d6","$get$d6",function(){return H.S(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bO","$get$bO",function(){return P.he()},"aw","$get$aw",function(){return[]},"cl","$get$cl",function(){return{}},"di","$get$di",function(){return P.bF(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"bQ","$get$bQ",function(){return P.Z()},"M","$get$M",function(){return P.cF(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.A,"aColorAlpha",C.U,"aPosition",C.y,"aTexUV",C.a0,"aNormal",C.a3,"aBinormal",C.T,"aCenter",C.z,"aPointSize",C.a,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a5,"aBitangent",C.R,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.y,"vPositionFromLight",C.S,"vCenter",C.z,"vDepth",C.Z,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a4,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a2,"uAnimationTable",C.f,"uTime",C.a1,"uCameraNear",C.a,"uCameraFar",C.a,"uFogNear",C.a,"uFogFar",C.a,"uPointSize",C.a,"uScale",C.a,"uAngle",C.a,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.a,"uShininess",C.a,"uShadowBias",C.a,"uOpacity",C.a,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.W,"uLightDescs",C.X,"uLightCount",C.a,"uLightTypes",C.Y,"uBumpScale",C.a_,"uNormalScale",C.V])},"dS","$get$dS",function(){var z=G.cR("nullShaderV")
z.c6(["aPosition"])
z.b=z.aS(!0,["gl_Position = vec4(aPosition, 1.0);"],null)
return z},"dR","$get$dR",function(){var z=G.cR("noiseShaderF")
z.c9(["uTime","uCanvasSize","uAmpl1","uAmpl2","uAmpl3","uAmplMul","uFreqMul","uMode","uSpeed"])
z.b=z.aS(!1,[$.eL,"vec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n","float snoise3(vec3 v) { \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i); \n  vec4 p = permute( permute( permute( \n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n",$.jk],null)
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.q},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.C]},{func:1,ret:P.bU,args:[W.ak,P.l,P.l,W.bP]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.b7]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[W.q,W.q]},{func:1,args:[P.C,P.c]},{func:1,args:[W.R]},{func:1,v:true,args:[P.az]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.jm(d||a)
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
Isolate.af=a.af
Isolate.ab=a.ab
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
if(typeof dartMainRunner==="function")dartMainRunner(R.dQ,[])
else R.dQ([])})})()
//# sourceMappingURL=simplex_noise.dart.js.map
