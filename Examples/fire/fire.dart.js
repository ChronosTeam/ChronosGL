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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ise)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.c0"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.c0"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.c0(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ac=function(){}
var dart=[["","",,H,{"^":"",kP:{"^":"c;a"}}],["","",,J,{"^":"",
o:function(a){return void 0},
c4:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aR:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.c3==null){H.js()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dh("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$bF()]
if(v!=null)return v
v=H.jw(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$bF(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
e:{"^":"c;",
F:function(a,b){return a===b},
gv:function(a){return H.ar(a)},
k:["cd",function(a){return"Instance of '"+H.as(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fv:{"^":"e;",
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$isbZ:1},
cH:{"^":"e;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$isb6:1},
bG:{"^":"e;",
gv:function(a){return 0},
k:["cf",function(a){return String(a)}]},
fN:{"^":"bG;"},
aO:{"^":"bG;"},
aq:{"^":"bG;",
k:function(a){var z=a[$.$get$cq()]
return z==null?this.cf(a):J.ai(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
am:{"^":"e;$ti",
L:function(a,b){var z,y
if(!!a.fixed$length)H.E(P.r("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.K)(b),++y)a.push(b[y])},
a3:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.f(y,x)
y[x]=w}return y.join(b)},
aM:function(a,b){return H.d_(a,b,null,H.z(a,0))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
c7:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.E(P.r("setRange"))
P.fW(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.o(d)
if(!!y.$ish){x=e
w=d}else{w=y.aM(d,e).dF(0,!1)
x=0}y=J.a0(w)
if(x+z>y.gj(w))throw H.a(H.fs())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
a5:function(a,b,c,d){return this.c7(a,b,c,d,0)},
bd:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.a2(a))}return!1},
c8:function(a,b){if(!!a.immutable$list)H.E(P.r("sort"))
H.h7(a,J.j0())},
aN:function(a){return this.c8(a,null)},
C:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
k:function(a){return P.bE(a,"[","]")},
gG:function(a){return new J.eR(a,a.length,0,null,[H.z(a,0)])},
gv:function(a){return H.ar(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.E(P.r("set length"))
if(b<0)throw H.a(P.a9(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.V(a,b))
if(b>=a.length||b<0)throw H.a(H.V(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.E(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.V(a,b))
if(b>=a.length||b<0)throw H.a(H.V(a,b))
a[b]=c},
u:function(a,b){var z,y
z=C.a.u(a.length,C.a.gj(b))
y=H.w([],[H.z(a,0)])
this.sj(y,z)
this.a5(y,0,a.length,a)
this.a5(y,a.length,z,b)
return y},
$ism:1,
$asm:I.ac,
$ish:1,
n:{
an:function(a){a.fixed$length=Array
return a},
kN:[function(a,b){return J.ea(a,b)},"$2","j0",8,0,17]}},
kO:{"^":"am;$ti"},
eR:{"^":"c;a,b,c,d,$ti",
gt:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.K(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ao:{"^":"e;",
W:function(a,b){var z
if(typeof b!=="number")throw H.a(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gag(b)
if(this.gag(a)===z)return 0
if(this.gag(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gag:function(a){return a===0?1/a<0:a<0},
d8:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.r(""+a+".ceil()"))},
dH:function(a,b){var z
if(b>20)throw H.a(P.a9(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gag(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
u:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a+b},
a7:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a-b},
c4:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ci:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b8(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.b8(a,b)},
b8:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.r("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
b6:function(a,b){var z
if(a>0)z=this.cW(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cW:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a<b},
a4:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a>b},
$isay:1,
$isaz:1},
cG:{"^":"ao;",$isC:1},
cF:{"^":"ao;"},
ap:{"^":"e;",
ay:function(a,b){if(b<0)throw H.a(H.V(a,b))
if(b>=a.length)H.E(H.V(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.a(H.V(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!=="string")throw H.a(P.eQ(b,null,null))
return a+b},
ca:function(a,b,c){var z
if(c>a.length)throw H.a(P.a9(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c9:function(a,b){return this.ca(a,b,0)},
aj:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.E(H.U(c))
if(b<0)throw H.a(P.b7(b,null,null))
if(typeof c!=="number")return H.af(c)
if(b>c)throw H.a(P.b7(b,null,null))
if(c>a.length)throw H.a(P.b7(c,null,null))
return a.substring(b,c)},
cb:function(a,b){return this.aj(a,b,null)},
dG:function(a){return a.toLowerCase()},
dJ:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aa(z,0)===133){x=J.fw(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.ay(z,w)===133?J.fx(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
da:function(a,b,c){if(c>a.length)throw H.a(P.a9(c,0,a.length,null,null))
return H.jC(a,b,c)},
W:function(a,b){var z
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
$asm:I.ac,
$isl:1,
n:{
cI:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fw:function(a,b){var z,y
for(z=a.length;b<z;){y=C.h.aa(a,b)
if(y!==32&&y!==13&&!J.cI(y))break;++b}return b},
fx:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.h.ay(a,z)
if(y!==32&&y!==13&&!J.cI(y))break}return b}}}}],["","",,H,{"^":"",
fr:function(){return new P.bb("No element")},
ft:function(){return new P.bb("Too many elements")},
fs:function(){return new P.bb("Too few elements")},
h7:function(a,b){H.aL(a,0,J.X(a)-1,b)},
aL:function(a,b,c,d){if(c-b<=32)H.h6(a,b,c,d)
else H.h5(a,b,c,d)},
h6:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a0(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.G(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
h5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.a.U(c-b+1,6)
y=b+z
x=c-z
w=C.a.U(b+c,2)
v=w-z
u=w+z
t=J.a0(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.G(d.$2(s,r),0)){n=r
r=s
s=n}if(J.G(d.$2(p,o),0)){n=o
o=p
p=n}if(J.G(d.$2(s,q),0)){n=q
q=s
s=n}if(J.G(d.$2(r,q),0)){n=q
q=r
r=n}if(J.G(d.$2(s,p),0)){n=p
p=s
s=n}if(J.G(d.$2(q,p),0)){n=p
p=q
q=n}if(J.G(d.$2(r,o),0)){n=o
o=r
r=n}if(J.G(d.$2(r,q),0)){n=q
q=r
r=n}if(J.G(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.F(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.o(i)
if(h.F(i,0))continue
if(h.X(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.bk(i)
if(h.a4(i,0)){--l
continue}else{g=l-1
if(h.X(i,0)){t.i(a,k,t.h(a,m))
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
t.i(a,m,j)}++m}else if(J.G(d.$2(j,p),0))for(;!0;)if(J.G(d.$2(t.h(a,l),p),0)){--l
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
if(m<y&&l>x){for(;J.F(d.$2(t.h(a,m),r),0);)++m
for(;J.F(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.F(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.F(d.$2(j,p),0))for(;!0;)if(J.F(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aC(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.aL(a,m,l,d)}else H.aL(a,m,l,d)},
bA:{"^":"b3;$ti"},
b4:{"^":"bA;$ti",
gG:function(a){return new H.cN(this,this.gj(this),0,null,[H.dU(this,"b4",0)])},
aD:function(a,b){return this.ce(0,b)}},
hg:{"^":"b4;a,b,c,$ti",
cv:function(a,b,c,d){},
gcN:function(){var z=J.X(this.a)
return z},
gcX:function(){var z,y
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
z=this.gcX()+b
if(b>=0){y=this.gcN()
if(typeof y!=="number")return H.af(y)
y=z>=y}else y=!0
if(y)throw H.a(P.u(b,this,"index",null,null))
return J.ca(this.a,z)},
dF:function(a,b){var z,y,x,w,v,u,t,s
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
if(s>=t.length)return H.f(t,s)
t[s]=u
if(x.gj(y)<w)throw H.a(P.a2(this))}return t},
n:{
d_:function(a,b,c,d){var z=new H.hg(a,b,c,[d])
z.cv(a,b,c,d)
return z}}},
cN:{"^":"c;a,b,c,d,$ti",
gt:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.a0(z)
x=y.gj(z)
if(this.b!==x)throw H.a(P.a2(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.p(z,w);++this.c
return!0}},
fC:{"^":"b4;a,b,$ti",
gj:function(a){return J.X(this.a)},
p:function(a,b){return this.b.$1(J.ca(this.a,b))},
$asbA:function(a,b){return[b]},
$asb4:function(a,b){return[b]},
$asb3:function(a,b){return[b]}},
di:{"^":"b3;a,b,$ti",
gG:function(a){return new H.hq(J.aG(this.a),this.b,this.$ti)}},
hq:{"^":"fu;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gt(z))===!0)return!0
return!1},
gt:function(a){var z=this.a
return z.gt(z)}},
b0:{"^":"c;$ti"}}],["","",,H,{"^":"",
jk:function(a){return init.types[a]},
jv:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.o(a).$isn},
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
fV:function(a){var z,y
if(typeof a!=="string")H.E(H.U(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.eI(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
as:function(a){var z,y,x,w,v,u,t,s,r
z=J.o(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.o(a).$isaO){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aa(w,0)===36)w=C.h.cb(w,1)
r=H.bm(H.ad(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
B:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fU:function(a){return a.b?H.B(a).getUTCFullYear()+0:H.B(a).getFullYear()+0},
fS:function(a){return a.b?H.B(a).getUTCMonth()+1:H.B(a).getMonth()+1},
fO:function(a){return a.b?H.B(a).getUTCDate()+0:H.B(a).getDate()+0},
fP:function(a){return a.b?H.B(a).getUTCHours()+0:H.B(a).getHours()+0},
fR:function(a){return a.b?H.B(a).getUTCMinutes()+0:H.B(a).getMinutes()+0},
fT:function(a){return a.b?H.B(a).getUTCSeconds()+0:H.B(a).getSeconds()+0},
fQ:function(a){return a.b?H.B(a).getUTCMilliseconds()+0:H.B(a).getMilliseconds()+0},
af:function(a){throw H.a(H.U(a))},
f:function(a,b){if(a==null)J.X(a)
throw H.a(H.V(a,b))},
V:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a7(!0,b,"index",null)
z=J.X(a)
if(!(b<0)){if(typeof z!=="number")return H.af(z)
y=b>=z}else y=!0
if(y)return P.u(b,a,"index",null,z)
return P.b7(b,"index",null)},
U:function(a){return new P.a7(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.cT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e1})
z.name=""}else z.toString=H.e1
return z},
e1:function(){return J.ai(this.dartException)},
E:function(a){throw H.a(a)},
K:function(a){throw H.a(P.a2(a))},
O:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jE(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.a.b6(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bH(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.cS(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$d4()
u=$.$get$d5()
t=$.$get$d6()
s=$.$get$d7()
r=$.$get$db()
q=$.$get$dc()
p=$.$get$d9()
$.$get$d8()
o=$.$get$de()
n=$.$get$dd()
m=v.M(y)
if(m!=null)return z.$1(H.bH(y,m))
else{m=u.M(y)
if(m!=null){m.method="call"
return z.$1(H.bH(y,m))}else{m=t.M(y)
if(m==null){m=s.M(y)
if(m==null){m=r.M(y)
if(m==null){m=q.M(y)
if(m==null){m=p.M(y)
if(m==null){m=s.M(y)
if(m==null){m=o.M(y)
if(m==null){m=n.M(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.cS(y,m))}}return z.$1(new H.ho(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.cY()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a7(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.cY()
return a},
ae:function(a){var z
if(a==null)return new H.dB(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dB(a,null)},
jg:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
ju:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.cz("Unsupported number of arguments for wrapped closure"))},
ax:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ju)
a.$identity=z
return z},
f_:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.o(c).$ish){z.$reflectionInfo=c
x=H.fY(z).r}else x=c
w=d?Object.create(new H.h8().constructor.prototype):Object.create(new H.bx(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.P
$.P=J.a1(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.co(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.jk,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cm:H.by
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.co(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
eX:function(a,b,c,d){var z=H.by
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
co:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eX(y,!w,z,b)
if(y===0){w=$.P
$.P=J.a1(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aj
if(v==null){v=H.aY("self")
$.aj=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.P
$.P=J.a1(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aj
if(v==null){v=H.aY("self")
$.aj=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
eY:function(a,b,c,d){var z,y
z=H.by
y=H.cm
switch(b?-1:a){case 0:throw H.a(H.h1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.aj
if(z==null){z=H.aY("self")
$.aj=z}y=$.cl
if(y==null){y=H.aY("receiver")
$.cl=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.P
$.P=J.a1(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.P
$.P=J.a1(y,1)
return new Function(z+H.b(y)+"}")()},
c0:function(a,b,c,d,e,f){var z,y
z=J.an(b)
y=!!J.o(c).$ish?J.an(c):c
return H.f_(a,z,y,!!d,e,f)},
jA:function(a,b){var z=J.a0(b)
throw H.a(H.cn(a,z.aj(b,3,z.gj(b))))},
W:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.o(a)[b]
else z=!0
if(z)return a
H.jA(a,b)},
c1:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
dR:function(a,b){var z,y
if(a==null)return!1
z=H.c1(J.o(a))
if(z==null)y=!1
else y=H.dX(z,b)
return y},
j7:function(a){var z
if(a instanceof H.j){z=H.c1(J.o(a))
if(z!=null)return H.c5(z,null)
return"Closure"}return H.as(a)},
jD:function(a){throw H.a(new P.f4(a))},
dT:function(a){return init.getIsolateTag(a)},
w:function(a,b){a.$ti=b
return a},
ad:function(a){if(a==null)return
return a.$ti},
mj:function(a,b,c){return H.aB(a["$as"+H.b(c)],H.ad(b))},
aS:function(a,b,c,d){var z=H.aB(a["$as"+H.b(c)],H.ad(b))
return z==null?null:z[d]},
dU:function(a,b,c){var z=H.aB(a["$as"+H.b(b)],H.ad(a))
return z==null?null:z[c]},
z:function(a,b){var z=H.ad(a)
return z==null?null:z[b]},
c5:function(a,b){var z=H.ah(a,b)
return z},
ah:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bm(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ah(z,b)
return H.j_(a,b)}return"unknown-reified-type"},
j_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ah(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ah(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ah(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.jf(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ah(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bm:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.bQ("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ah(u,c)}return w?"":"<"+z.k(0)+">"},
jj:function(a){var z,y,x
if(a instanceof H.j){z=H.c1(J.o(a))
if(z!=null)return H.c5(z,null)}y=J.o(a).constructor.builtin$cls
if(a==null)return y
x=H.bm(a.$ti,0,null)
return y+x},
aB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c_:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ad(a)
y=J.o(a)
if(y[b]==null)return!1
return H.dN(H.aB(y[d],z),c)},
aT:function(a,b,c,d){var z,y
if(a==null)return a
z=H.c_(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bm(c,0,null)
throw H.a(H.cn(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
dN:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.D(a[y],b[y]))return!1
return!0},
mh:function(a,b,c){return a.apply(b,H.aB(J.o(b)["$as"+H.b(c)],H.ad(b)))},
D:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b6")return!0
if('func' in b)return H.dX(a,b)
if('func' in a)return b.builtin$cls==="kF"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.c5(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.dN(H.aB(u,z),x)},
dM:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.D(z,v)||H.D(v,z)))return!1}return!0},
j8:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.an(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.D(v,u)||H.D(u,v)))return!1}return!0},
dX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.D(z,y)||H.D(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dM(x,w,!1))return!1
if(!H.dM(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.D(o,n)||H.D(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.D(o,n)||H.D(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.D(o,n)||H.D(n,o)))return!1}}return H.j8(a.named,b.named)},
mi:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jw:function(a){var z,y,x,w,v,u
z=$.dV.$1(a)
y=$.bj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bl[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dL.$2(a,z)
if(z!=null){y=$.bj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bl[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bn(x)
$.bj[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bl[z]=x
return x}if(v==="-"){u=H.bn(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.e_(a,x)
if(v==="*")throw H.a(P.dh(z))
if(init.leafTags[z]===true){u=H.bn(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.e_(a,x)},
e_:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c4(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bn:function(a){return J.c4(a,!1,null,!!a.$isn)},
jz:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bn(z)
else return J.c4(z,c,null,null)},
js:function(){if(!0===$.c3)return
$.c3=!0
H.jt()},
jt:function(){var z,y,x,w,v,u,t,s
$.bj=Object.create(null)
$.bl=Object.create(null)
H.jo()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e0.$1(v)
if(u!=null){t=H.jz(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jo:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.ab(C.F,H.ab(C.K,H.ab(C.v,H.ab(C.v,H.ab(C.J,H.ab(C.G,H.ab(C.H(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.dV=new H.jp(v)
$.dL=new H.jq(u)
$.e0=new H.jr(t)},
ab:function(a,b){return a(b)||b},
jC:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fX:{"^":"c;a,b,c,d,e,f,r,x",n:{
fY:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.an(z)
y=z[0]
x=z[1]
return new H.fX(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
hk:{"^":"c;a,b,c,d,e,f",
M:function(a){var z,y,x
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
return new H.hk(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bf:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
da:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fM:{"^":"A;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
n:{
cS:function(a,b){return new H.fM(a,b==null?null:b.method)}}},
fy:{"^":"A;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
n:{
bH:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fy(a,y,z?null:b.receiver)}}},
ho:{"^":"A;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
jE:{"^":"j:0;a",
$1:function(a){if(!!J.o(a).$isA)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dB:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isba:1},
j:{"^":"c;",
k:function(a){return"Closure '"+H.as(this).trim()+"'"},
gc2:function(){return this},
gc2:function(){return this}},
d0:{"^":"j;"},
h8:{"^":"d0;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bx:{"^":"d0;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bx))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var z,y
z=this.c
if(z==null)y=H.ar(this.a)
else y=typeof z!=="object"?J.a6(z):H.ar(z)
return(y^H.ar(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.as(z)+"'")},
n:{
by:function(a){return a.a},
cm:function(a){return a.c},
aY:function(a){var z,y,x,w,v
z=new H.bx("self","target","receiver","name")
y=J.an(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
eU:{"^":"A;a",
k:function(a){return this.a},
n:{
cn:function(a,b){return new H.eU("CastError: "+H.b(P.bC(a))+": type '"+H.j7(a)+"' is not a subtype of type '"+b+"'")}}},
h0:{"^":"A;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
n:{
h1:function(a){return new H.h0(a)}}},
df:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gv:function(a){return J.a6(this.a)},
F:function(a,b){if(b==null)return!1
return b instanceof H.df&&J.F(this.a,b.a)}},
cJ:{"^":"bK;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gH:function(a){return new H.fA(this,[H.z(this,0)])},
ae:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.b1(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.b1(y,b)}else return this.ds(b)},
ds:function(a){var z=this.d
if(z==null)return!1
return this.az(this.aq(z,J.a6(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ab(z,b)
x=y==null?null:y.ga2()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ab(w,b)
x=y==null?null:y.ga2()
return x}else return this.dt(b)},
dt:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aq(z,J.a6(a)&0x3ffffff)
x=this.az(y,a)
if(x<0)return
return y[x].ga2()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.as()
this.b=z}this.aW(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.as()
this.c=y}this.aW(y,b,c)}else{x=this.d
if(x==null){x=this.as()
this.d=x}w=J.a6(b)&0x3ffffff
v=this.aq(x,w)
if(v==null)this.aw(x,w,[this.al(b,c)])
else{u=this.az(v,b)
if(u>=0)v[u].sa2(c)
else v.push(this.al(b,c))}}},
D:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.a2(this))
z=z.c}},
aW:function(a,b,c){var z=this.ab(a,b)
if(z==null)this.aw(a,b,this.al(b,c))
else z.sa2(c)},
b3:function(){this.r=this.r+1&67108863},
al:function(a,b){var z,y
z=new H.fz(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.b3()
return z},
az:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].gdr(),b))return y
return-1},
k:function(a){return P.cO(this)},
ab:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
aw:function(a,b,c){a[b]=c},
cL:function(a,b){delete a[b]},
b1:function(a,b){return this.ab(a,b)!=null},
as:function(){var z=Object.create(null)
this.aw(z,"<non-identifier-key>",z)
this.cL(z,"<non-identifier-key>")
return z}},
fz:{"^":"c;dr:a<,a2:b@,c,d"},
fA:{"^":"bA;a,$ti",
gj:function(a){return this.a.a},
gG:function(a){var z,y
z=this.a
y=new H.a3(z,z.r,null,null,this.$ti)
y.c=z.e
return y}},
a3:{"^":"c;a,b,c,d,$ti",
gt:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.a2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jp:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
jq:{"^":"j:8;a",
$2:function(a,b){return this.a(a,b)}},
jr:{"^":"j:9;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
jf:function(a){return J.an(H.w(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bo:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bg:function(a){var z,y,x
if(!!J.o(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
T:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.V(b,a))},
fI:{"^":"e;","%":"DataView;ArrayBufferView;bM|dv|dw|cP|dx|dy|a4"},
bM:{"^":"fI;",
gj:function(a){return a.length},
$ism:1,
$asm:I.ac,
$isn:1,
$asn:I.ac},
cP:{"^":"dw;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
i:function(a,b,c){H.T(b,a,a.length)
a[b]=c},
$asb0:function(){return[P.ay]},
$asi:function(){return[P.ay]},
$ish:1,
$ash:function(){return[P.ay]},
"%":"Float64Array"},
a4:{"^":"dy;",
i:function(a,b,c){H.T(b,a,a.length)
a[b]=c},
$asb0:function(){return[P.C]},
$asi:function(){return[P.C]},
$ish:1,
$ash:function(){return[P.C]}},
fH:{"^":"cP;",$isbD:1,"%":"Float32Array"},
l7:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Int16Array"},
l8:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
$isfp:1,
"%":"Int32Array"},
l9:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Int8Array"},
la:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lb:{"^":"a4;",
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lc:{"^":"a4;",
gj:function(a){return a.length},
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ld:{"^":"a4;",
gj:function(a){return a.length},
h:function(a,b){H.T(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
dv:{"^":"bM+i;"},
dw:{"^":"dv+b0;"},
dx:{"^":"bM+i;"},
dy:{"^":"dx+b0;"}}],["","",,P,{"^":"",
hu:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.j9()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ax(new P.hw(z),1)).observe(y,{childList:true})
return new P.hv(z,y,x)}else if(self.setImmediate!=null)return P.ja()
return P.jb()},
m4:[function(a){self.scheduleImmediate(H.ax(new P.hx(a),0))},"$1","j9",4,0,5],
m5:[function(a){self.setImmediate(H.ax(new P.hy(a),0))},"$1","ja",4,0,5],
m6:[function(a){P.iI(0,a)},"$1","jb",4,0,5],
j3:function(a,b){if(H.dR(a,{func:1,args:[P.b6,P.b6]})){b.toString
return a}else{b.toString
return a}},
j2:function(){var z,y
for(;z=$.aa,z!=null;){$.av=null
y=z.b
$.aa=y
if(y==null)$.au=null
z.a.$0()}},
mg:[function(){$.bX=!0
try{P.j2()}finally{$.av=null
$.bX=!1
if($.aa!=null)$.$get$bT().$1(P.dO())}},"$0","dO",0,0,3],
dJ:function(a){var z=new P.dj(a,null)
if($.aa==null){$.au=z
$.aa=z
if(!$.bX)$.$get$bT().$1(P.dO())}else{$.au.b=z
$.au=z}},
j6:function(a){var z,y,x
z=$.aa
if(z==null){P.dJ(a)
$.av=$.au
return}y=new P.dj(a,null)
x=$.av
if(x==null){y.b=z
$.av=y
$.aa=y}else{y.b=x.b
x.b=y
$.av=y
if(y.b==null)$.au=y}},
jB:function(a){var z=$.x
if(C.e===z){P.bi(null,null,C.e,a)
return}z.toString
P.bi(null,null,z,z.bg(a))},
bh:function(a,b,c,d,e){var z={}
z.a=d
P.j6(new P.j4(z,e))},
dH:function(a,b,c,d){var z,y
y=$.x
if(y===c)return d.$0()
$.x=c
z=y
try{y=d.$0()
return y}finally{$.x=z}},
dI:function(a,b,c,d,e){var z,y
y=$.x
if(y===c)return d.$1(e)
$.x=c
z=y
try{y=d.$1(e)
return y}finally{$.x=z}},
j5:function(a,b,c,d,e,f){var z,y
y=$.x
if(y===c)return d.$2(e,f)
$.x=c
z=y
try{y=d.$2(e,f)
return y}finally{$.x=z}},
bi:function(a,b,c,d){var z=C.e!==c
if(z)d=!(!z||!1)?c.bg(d):c.d5(d)
P.dJ(d)},
hw:{"^":"j:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
hv:{"^":"j:10;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
hx:{"^":"j:1;a",
$0:function(){this.a.$0()}},
hy:{"^":"j:1;a",
$0:function(){this.a.$0()}},
iH:{"^":"c;a,b,c",
cG:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ax(new P.iJ(this,b),0),a)
else throw H.a(P.r("`setTimeout()` not found."))},
n:{
iI:function(a,b){var z=new P.iH(!0,null,0)
z.cG(a,b)
return z}}},
iJ:{"^":"j:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jR:{"^":"c;$ti"},
hB:{"^":"c;$ti"},
iC:{"^":"hB;a,$ti",
d9:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bP("Future already completed"))
z.am(b)}},
hQ:{"^":"c;au:a<,b,c,d,e,$ti",
gd0:function(){return this.b.b},
gbE:function(){return(this.c&1)!==0},
gdq:function(){return(this.c&2)!==0},
gbD:function(){return this.c===8},
dm:function(a){return this.b.b.aC(this.d,a)},
dv:function(a){if(this.c!==6)return!0
return this.b.b.aC(this.d,J.aF(a))},
dl:function(a){var z,y,x
z=this.e
y=J.d(a)
x=this.b.b
if(H.dR(z,{func:1,args:[P.c,P.ba]}))return x.dB(z,y.gK(a),a.gZ())
else return x.aC(z,y.gK(a))},
dn:function(){return this.b.b.bH(this.d)}},
aP:{"^":"c;b7:a<,b,cS:c<,$ti",
gcQ:function(){return this.a===2},
gar:function(){return this.a>=4},
bM:function(a,b){var z,y,x
z=$.x
if(z!==C.e){z.toString
if(b!=null)b=P.j3(b,z)}y=new P.aP(0,z,null,[null])
x=b==null?1:3
this.aY(new P.hQ(null,y,x,a,b,[H.z(this,0),null]))
return y},
bL:function(a){return this.bM(a,null)},
aY:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gar()){y.aY(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.bi(null,null,z,new P.hR(this,a))}},
b5:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gau()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gar()){v.b5(a)
return}this.a=v.a
this.c=v.c}z.a=this.av(a)
y=this.b
y.toString
P.bi(null,null,y,new P.hW(z,this))}},
ac:function(){var z=this.c
this.c=null
return this.av(z)},
av:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gau()
z.a=y}return y},
am:function(a){var z,y,x
z=this.$ti
y=H.c_(a,"$isb1",z,"$asb1")
if(y){z=H.c_(a,"$isaP",z,null)
if(z)P.dp(a,this)
else P.hS(a,this)}else{x=this.ac()
this.a=4
this.c=a
P.at(this,x)}},
an:[function(a,b){var z=this.ac()
this.a=8
this.c=new P.aX(a,b)
P.at(this,z)},function(a){return this.an(a,null)},"dM","$2","$1","gcJ",4,2,11],
$isb1:1,
n:{
hS:function(a,b){var z,y,x
b.a=1
try{a.bM(new P.hT(b),new P.hU(b))}catch(x){z=H.O(x)
y=H.ae(x)
P.jB(new P.hV(b,z,y))}},
dp:function(a,b){var z
for(;a.gcQ();)a=a.c
if(a.gar()){z=b.ac()
b.a=a.a
b.c=a.c
P.at(b,z)}else{z=b.c
b.a=2
b.c=a
a.b5(z)}},
at:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aF(v)
t=v.gZ()
y.toString
P.bh(null,null,y,u,t)}return}for(;b.gau()!=null;b=s){s=b.a
b.a=null
P.at(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gbE()||b.gbD()){q=b.gd0()
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
t=v.gZ()
y.toString
P.bh(null,null,y,u,t)
return}p=$.x
if(p==null?q!=null:p!==q)$.x=q
else p=null
if(b.gbD())new P.hZ(z,x,b,w).$0()
else if(y){if(b.gbE())new P.hY(x,b,r).$0()}else if(b.gdq())new P.hX(z,x,b).$0()
if(p!=null)$.x=p
y=x.b
if(!!J.o(y).$isb1){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.av(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.dp(y,o)
return}}o=b.b
b=o.ac()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
hR:{"^":"j:1;a,b",
$0:function(){P.at(this.a,this.b)}},
hW:{"^":"j:1;a,b",
$0:function(){P.at(this.b,this.a.a)}},
hT:{"^":"j:0;a",
$1:function(a){var z=this.a
z.a=0
z.am(a)}},
hU:{"^":"j:12;a",
$2:function(a,b){this.a.an(a,b)},
$1:function(a){return this.$2(a,null)}},
hV:{"^":"j:1;a,b,c",
$0:function(){this.a.an(this.b,this.c)}},
hZ:{"^":"j:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.dn()}catch(w){y=H.O(w)
x=H.ae(w)
if(this.d){v=J.aF(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.aX(y,x)
u.a=!0
return}if(!!J.o(z).$isb1){if(z instanceof P.aP&&z.gb7()>=4){if(z.gb7()===8){v=this.b
v.b=z.gcS()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.bL(new P.i_(t))
v.a=!1}}},
i_:{"^":"j:0;a",
$1:function(a){return this.a}},
hY:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.dm(this.c)}catch(x){z=H.O(x)
y=H.ae(x)
w=this.a
w.b=new P.aX(z,y)
w.a=!0}}},
hX:{"^":"j:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.dv(z)===!0&&w.e!=null){v=this.b
v.b=w.dl(z)
v.a=!1}}catch(u){y=H.O(u)
x=H.ae(u)
w=this.a
v=J.aF(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.aX(y,x)
s.a=!0}}},
dj:{"^":"c;a,b"},
hc:{"^":"c;$ti",
gj:function(a){var z,y
z={}
y=new P.aP(0,$.x,null,[P.C])
z.a=0
this.du(new P.he(z),!0,new P.hf(z,y),y.gcJ())
return y}},
he:{"^":"j:0;a",
$1:function(a){++this.a.a}},
hf:{"^":"j:1;a,b",
$0:function(){this.b.am(this.a.a)}},
hd:{"^":"c;$ti"},
aX:{"^":"c;K:a>,Z:b<",
k:function(a){return H.b(this.a)},
$isA:1},
iP:{"^":"c;"},
j4:{"^":"j:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.cT()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.ai(y)
throw x}},
ik:{"^":"iP;",
dC:function(a){var z,y,x
try{if(C.e===$.x){a.$0()
return}P.dH(null,null,this,a)}catch(x){z=H.O(x)
y=H.ae(x)
P.bh(null,null,this,z,y)}},
dD:function(a,b){var z,y,x
try{if(C.e===$.x){a.$1(b)
return}P.dI(null,null,this,a,b)}catch(x){z=H.O(x)
y=H.ae(x)
P.bh(null,null,this,z,y)}},
d5:function(a){return new P.im(this,a)},
bg:function(a){return new P.il(this,a)},
d6:function(a){return new P.io(this,a)},
h:function(a,b){return},
bH:function(a){if($.x===C.e)return a.$0()
return P.dH(null,null,this,a)},
aC:function(a,b){if($.x===C.e)return a.$1(b)
return P.dI(null,null,this,a,b)},
dB:function(a,b,c){if($.x===C.e)return a.$2(b,c)
return P.j5(null,null,this,a,b,c)}},
im:{"^":"j:1;a,b",
$0:function(){return this.a.bH(this.b)}},
il:{"^":"j:1;a,b",
$0:function(){return this.a.dC(this.b)}},
io:{"^":"j:0;a,b",
$1:function(a){return this.a.dD(this.b,a)}}}],["","",,P,{"^":"",
Z:function(){return new H.cJ(0,null,null,null,null,null,0,[null,null])},
cL:function(a){return H.jg(a,new H.cJ(0,null,null,null,null,null,0,[null,null]))},
aJ:function(a,b,c,d){return new P.i6(0,null,null,null,null,null,0,[d])},
fq:function(a,b,c){var z,y
if(P.bY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aw()
y.push(a)
try{P.j1(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.cZ(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bE:function(a,b,c){var z,y,x
if(P.bY(a))return b+"..."+c
z=new P.bQ(b)
y=$.$get$aw()
y.push(a)
try{x=z
x.a=P.cZ(x.gT(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gT()+c
y=z.gT()
return y.charCodeAt(0)==0?y:y},
bY:function(a){var z,y
for(z=0;y=$.$get$aw(),z<y.length;++z)if(a===y[z])return!0
return!1},
j1:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gG(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.b(z.gt(z))
b.push(w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gt(z);++x
if(!z.q()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gt(z);++x
for(;z.q();t=s,s=r){r=z.gt(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
bI:function(a,b){var z,y
z=P.aJ(null,null,null,b)
for(y=J.aG(a);y.q();)z.ax(0,y.gt(y))
return z},
cO:function(a){var z,y,x
z={}
if(P.bY(a))return"{...}"
y=new P.bQ("")
try{$.$get$aw().push(a)
x=y
x.a=x.gT()+"{"
z.a=!0
J.en(a,new P.fB(z,y))
z=y
z.a=z.gT()+"}"}finally{z=$.$get$aw()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gT()
return z.charCodeAt(0)==0?z:z},
i6:{"^":"i1;a,b,c,d,e,f,r,$ti",
gG:function(a){var z=new P.dt(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
C:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.cK(b)},
cK:function(a){var z=this.d
if(z==null)return!1
return this.b2(z[this.b0(a)],a)>=0},
ax:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.bW()
this.b=z}return this.aX(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.bW()
this.c=y}return this.aX(y,b)}else return this.cH(0,b)},
cH:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.bW()
this.d=z}y=this.b0(b)
x=z[y]
if(x==null)z[y]=[this.at(b)]
else{if(this.b2(x,b)>=0)return!1
x.push(this.at(b))}return!0},
aX:function(a,b){if(a[b]!=null)return!1
a[b]=this.at(b)
return!0},
b_:function(){this.r=this.r+1&67108863},
at:function(a){var z,y
z=new P.i7(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.b_()
return z},
b0:function(a){return J.a6(a)&0x3ffffff},
b2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].gcM(),b))return y
return-1},
n:{
bW:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
i7:{"^":"c;cM:a<,b,c"},
dt:{"^":"c;a,b,c,d,$ti",
gt:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.a2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
i1:{"^":"h2;$ti"},
kT:{"^":"c;$ti"},
cM:{"^":"du;$ti",$ish:1},
i:{"^":"c;$ti",
gG:function(a){return new H.cN(a,this.gj(a),0,null,[H.aS(this,a,"i",0)])},
p:function(a,b){return this.h(a,b)},
dj:function(a,b,c){var z,y,x
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.a2(a))}return y},
aM:function(a,b){return H.d_(a,b,null,H.aS(this,a,"i",0))},
u:function(a,b){var z=H.w([],[H.aS(this,a,"i",0)])
C.c.sj(z,C.a.u(this.gj(a),C.a.gj(b)))
C.c.a5(z,0,this.gj(a),a)
C.c.a5(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.bE(a,"[","]")}},
bK:{"^":"H;$ti"},
fB:{"^":"j:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
H:{"^":"c;$ti",
D:function(a,b){var z,y
for(z=J.aG(this.gH(a));z.q();){y=z.gt(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.X(this.gH(a))},
k:function(a){return P.cO(a)}},
h3:{"^":"c;$ti",
L:function(a,b){var z
for(z=J.aG(b);z.q();)this.ax(0,z.gt(z))},
k:function(a){return P.bE(this,"{","}")}},
h2:{"^":"h3;$ti"},
du:{"^":"c+i;$ti"}}],["","",,P,{"^":"",
je:function(a,b){var z=H.fV(a)
if(z!=null)return z
throw H.a(new P.fl("Invalid double",a,null))},
fg:function(a){var z=J.o(a)
if(!!z.$isj)return z.k(a)
return"Instance of '"+H.as(a)+"'"},
bC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fg(a)},
cz:function(a){return new P.hN(a)},
aA:function(a){H.bo(H.b(a))},
bZ:{"^":"c;"},
"+bool":0,
cr:{"^":"c;d_:a<,b",
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.cr))return!1
return this.a===b.a&&this.b===b.b},
W:function(a,b){return C.a.W(this.a,b.gd_())},
gv:function(a){var z=this.a
return(z^C.a.b6(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.f5(H.fU(this))
y=P.aH(H.fS(this))
x=P.aH(H.fO(this))
w=P.aH(H.fP(this))
v=P.aH(H.fR(this))
u=P.aH(H.fT(this))
t=P.f6(H.fQ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
f5:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
f6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aH:function(a){if(a>=10)return""+a
return"0"+a}}},
ay:{"^":"az;"},
"+double":0,
aI:{"^":"c;a0:a<",
u:function(a,b){return new P.aI(C.a.u(this.a,b.ga0()))},
a7:function(a,b){return new P.aI(this.a-b.ga0())},
X:function(a,b){return C.a.X(this.a,b.ga0())},
a4:function(a,b){return C.a.a4(this.a,b.ga0())},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.aI))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
W:function(a,b){return C.a.W(this.a,b.ga0())},
k:function(a){var z,y,x,w,v
z=new P.fd()
y=this.a
if(y<0)return"-"+new P.aI(0-y).k(0)
x=z.$1(C.a.U(y,6e7)%60)
w=z.$1(C.a.U(y,1e6)%60)
v=new P.fc().$1(y%1e6)
return""+C.a.U(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
n:{
fb:function(a,b,c,d,e,f){return new P.aI(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fc:{"^":"j:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fd:{"^":"j:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
A:{"^":"c;",
gZ:function(){return H.ae(this.$thrownJsError)}},
cT:{"^":"A;",
k:function(a){return"Throw of null."}},
a7:{"^":"A;a,b,c,d",
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
u=P.bC(this.b)
return w+v+": "+H.b(u)},
n:{
eQ:function(a,b,c){return new P.a7(!0,a,b,c)}}},
cV:{"^":"a7;e,f,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
n:{
b7:function(a,b,c){return new P.cV(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.cV(b,c,!0,a,d,"Invalid value")},
fW:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.a9(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.a9(b,a,c,"end",f))
return b}}},
fo:{"^":"a7;e,j:f>,a,b,c,d",
gap:function(){return"RangeError"},
gao:function(){if(J.aC(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
n:{
u:function(a,b,c,d,e){var z=e!=null?e:J.X(b)
return new P.fo(b,z,!0,a,c,"Index out of range")}}},
hp:{"^":"A;a",
k:function(a){return"Unsupported operation: "+this.a},
n:{
r:function(a){return new P.hp(a)}}},
hn:{"^":"A;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
n:{
dh:function(a){return new P.hn(a)}}},
bb:{"^":"A;a",
k:function(a){return"Bad state: "+this.a},
n:{
bP:function(a){return new P.bb(a)}}},
f1:{"^":"A;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bC(z))+"."},
n:{
a2:function(a){return new P.f1(a)}}},
cY:{"^":"c;",
k:function(a){return"Stack Overflow"},
gZ:function(){return},
$isA:1},
f4:{"^":"A;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
ke:{"^":"c;"},
hN:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
fl:{"^":"c;a,b,c",
k:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.h.aj(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"az;"},
"+int":0,
b3:{"^":"c;$ti",
aD:["ce",function(a,b){return new H.di(this,b,[H.dU(this,"b3",0)])}],
gj:function(a){var z,y
z=this.gG(this)
for(y=0;z.q();)++y
return y},
gS:function(a){var z,y
z=this.gG(this)
if(!z.q())throw H.a(H.fr())
y=z.gt(z)
if(z.q())throw H.a(H.ft())
return y},
p:function(a,b){var z,y,x
if(b<0)H.E(P.a9(b,0,null,"index",null))
for(z=this.gG(this),y=0;z.q();){x=z.gt(z)
if(b===y)return x;++y}throw H.a(P.u(b,this,"index",null,y))},
k:function(a){return P.fq(this,"(",")")}},
fu:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
bJ:{"^":"c;$ti"},
b6:{"^":"c;",
gv:function(a){return P.c.prototype.gv.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
az:{"^":"c;"},
"+num":0,
c:{"^":";",
F:function(a,b){return this===b},
gv:function(a){return H.ar(this)},
k:function(a){return"Instance of '"+H.as(this)+"'"},
toString:function(){return this.k(this)}},
ba:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
bQ:{"^":"c;T:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
cZ:function(a,b,c){var z=J.aG(b)
if(!z.q())return a
if(c.length===0){do a+=H.b(z.gt(z))
while(z.q())}else{a+=H.b(z.gt(z))
for(;z.q();)a=a+c+H.b(z.gt(z))}return a}}}}],["","",,W,{"^":"",
fe:function(a,b,c){var z,y
z=document.body
y=(z&&C.t).N(z,a,b,c)
y.toString
z=new H.di(new W.M(y),new W.ff(),[W.q])
return z.gS(z)},
al:function(a){var z,y,x
z="element tag unavailable"
try{y=J.es(a)
if(typeof y==="string")z=a.tagName}catch(x){H.O(x)}return z},
hK:function(a,b){return document.createElement(a)},
a5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ds:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
dG:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.hE(a)
if(!!J.o(z).$isy)return z
return}else return a},
dK:function(a){var z=$.x
if(z===C.e)return a
return z.d6(a)},
p:{"^":"ak;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jG:{"^":"bN;l:x=,m:y=,E:z=","%":"Accelerometer|LinearAccelerationSensor"},
jH:{"^":"e;j:length=","%":"AccessibleNodeList"},
jI:{"^":"p;I:target=,af:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
jJ:{"^":"p;I:target=,af:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
jN:{"^":"p;af:href},I:target=","%":"HTMLBaseElement"},
bw:{"^":"p;",$isbw:1,"%":"HTMLBodyElement"},
jO:{"^":"p;B:name=,J:value}","%":"HTMLButtonElement"},
jP:{"^":"p;w:height},A:width}",
c3:function(a,b,c){var z=a.getContext(b,P.jc(c,null))
return z},
"%":"HTMLCanvasElement"},
jQ:{"^":"e;",
ai:function(a){return P.J(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
eV:{"^":"q;j:length=","%":"CDATASection|Comment|Text;CharacterData"},
jS:{"^":"Q;P:style=","%":"CSSFontFaceRule"},
jT:{"^":"Q;P:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
jU:{"^":"Q;P:style=","%":"CSSPageRule"},
jV:{"^":"aZ;j:length=","%":"CSSPerspective"},
jW:{"^":"bz;l:x=,m:y=","%":"CSSPositionValue"},
jX:{"^":"aZ;l:x=,m:y=,E:z=","%":"CSSRotation"},
Q:{"^":"e;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
jY:{"^":"aZ;l:x=,m:y=,E:z=","%":"CSSScale"},
f2:{"^":"hC;j:length=",
aZ:function(a,b){var z,y
z=$.$get$cp()
y=z[b]
if(typeof y==="string")return y
y=this.cY(a,b)
z[b]=y
return y},
cY:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f7()+b
if(z in a)return z
return b},
cV:function(a,b,c,d){a.setProperty(b,c,d)},
sw:function(a,b){a.height=b},
sA:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
f3:{"^":"c;",
sdi:function(a,b){this.cV(a,this.aZ(a,"float"),b,"")}},
jZ:{"^":"Q;P:style=","%":"CSSStyleRule"},
bz:{"^":"e;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
aZ:{"^":"e;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
k_:{"^":"bz;j:length=","%":"CSSTransformValue"},
k0:{"^":"aZ;l:x=,m:y=,E:z=","%":"CSSTranslation"},
k1:{"^":"bz;j:length=","%":"CSSUnparsedValue"},
k2:{"^":"Q;P:style=","%":"CSSViewportRule"},
k3:{"^":"p;J:value}","%":"HTMLDataElement"},
k4:{"^":"e;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
k5:{"^":"e;l:x=,m:y=,E:z=","%":"DeviceAcceleration"},
f8:{"^":"p;","%":"HTMLDivElement"},
k6:{"^":"q;",
gaA:function(a){return new W.dm(a,"change",!1,[W.R])},
"%":"Document|HTMLDocument|XMLDocument"},
k7:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
k8:{"^":"f9;",
gc1:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gE:function(a){return a.z},
"%":"DOMPoint"},
f9:{"^":"e;",
gc1:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gE:function(a){return a.z},
"%":";DOMPointReadOnly"},
k9:{"^":"hG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a_]},
$isn:1,
$asn:function(){return[P.a_]},
$asi:function(){return[P.a_]},
$ish:1,
$ash:function(){return[P.a_]},
$ask:function(){return[P.a_]},
"%":"ClientRectList|DOMRectList"},
fa:{"^":"e;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gA(a))+" x "+H.b(this.gw(a))},
F:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa_)return!1
return a.left===z.gbF(b)&&a.top===z.gbN(b)&&this.gA(a)===z.gA(b)&&this.gw(a)===z.gw(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gA(a)
w=this.gw(a)
return W.ds(W.a5(W.a5(W.a5(W.a5(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gw:function(a){return a.height},
gbF:function(a){return a.left},
gbN:function(a){return a.top},
gA:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa_:1,
$asa_:I.ac,
"%":";DOMRectReadOnly"},
ka:{"^":"hI;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$isn:1,
$asn:function(){return[P.l]},
$asi:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
kb:{"^":"e;j:length=","%":"DOMTokenList"},
ak:{"^":"q;P:style=,b4:namespaceURI=,dE:tagName=",
gd3:function(a){return new W.hJ(a)},
k:function(a){return a.localName},
N:["ak",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cy
if(z==null){z=H.w([],[W.cQ])
y=new W.cR(z)
z.push(W.dq(null))
z.push(W.dC())
$.cy=y
d=y}else d=z
z=$.cx
if(z==null){z=new W.dF(d)
$.cx=z
c=z}else{z.a=d
c=z}}if($.Y==null){z=document
y=z.implementation.createHTMLDocument("")
$.Y=y
$.bB=y.createRange()
y=$.Y
y.toString
x=y.createElement("base")
J.eB(x,z.baseURI)
$.Y.head.appendChild(x)}z=$.Y
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.Y
if(!!this.$isbw)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.Y.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.C(C.N,a.tagName)){$.bB.selectNodeContents(w)
v=$.bB.createContextualFragment(b)}else{w.innerHTML=b
v=$.Y.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.Y.body
if(w==null?z!=null:w!==z)J.cf(w)
c.aK(v)
document.adoptNode(v)
return v},function(a,b,c){return this.N(a,b,c,null)},"dc",null,null,"gdQ",5,5,null],
c6:function(a,b,c,d){a.textContent=null
a.appendChild(this.N(a,b,c,d))},
c5:function(a,b){return this.c6(a,b,null,null)},
gaA:function(a){return new W.dl(a,"change",!1,[W.R])},
$isak:1,
"%":";Element"},
ff:{"^":"j:0;",
$1:function(a){return!!J.o(a).$isak}},
kc:{"^":"p;w:height},B:name=,A:width}","%":"HTMLEmbedElement"},
kd:{"^":"R;K:error=","%":"ErrorEvent"},
R:{"^":"e;",
gI:function(a){return W.dG(a.target)},
$isR:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CompositionEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|DragEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FocusEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|KeyboardEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MouseEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PointerEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TextEvent|TouchEvent|TrackEvent|TransitionEvent|UIEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent|WheelEvent;Event|InputEvent"},
y:{"^":"e;",
bc:["cc",function(a,b,c,d){if(c!=null)this.cI(a,b,c,!1)}],
cI:function(a,b,c,d){return a.addEventListener(b,H.ax(c,1),!1)},
$isy:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FontFaceSet|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dz|dA|dD|dE"},
kx:{"^":"p;B:name=","%":"HTMLFieldSetElement"},
ky:{"^":"hP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b_]},
$isn:1,
$asn:function(){return[W.b_]},
$asi:function(){return[W.b_]},
$ish:1,
$ash:function(){return[W.b_]},
$ask:function(){return[W.b_]},
"%":"FileList"},
kz:{"^":"y;K:error=","%":"FileReader"},
kA:{"^":"y;K:error=,j:length=","%":"FileWriter"},
kC:{"^":"e;P:style=","%":"FontFace"},
kE:{"^":"p;j:length=,B:name=,I:target=","%":"HTMLFormElement"},
kG:{"^":"bN;l:x=,m:y=,E:z=","%":"Gyroscope"},
kH:{"^":"e;j:length=","%":"History"},
kI:{"^":"i3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asi:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
kJ:{"^":"p;w:height},B:name=,A:width}","%":"HTMLIFrameElement"},
kK:{"^":"p;w:height},A:width}","%":"HTMLImageElement"},
cE:{"^":"p;w:height},B:name=,J:value},A:width}",$iscE:1,"%":"HTMLInputElement"},
kM:{"^":"e;I:target=","%":"IntersectionObserverEntry"},
kQ:{"^":"p;J:value}","%":"HTMLLIElement"},
kS:{"^":"p;af:href}","%":"HTMLLinkElement"},
kU:{"^":"e;",
k:function(a){return String(a)},
"%":"Location"},
kV:{"^":"bN;l:x=,m:y=,E:z=","%":"Magnetometer"},
kW:{"^":"p;B:name=","%":"HTMLMapElement"},
fD:{"^":"p;K:error=","%":"HTMLAudioElement;HTMLMediaElement"},
l_:{"^":"e;j:length=","%":"MediaList"},
l0:{"^":"y;",
bc:function(a,b,c,d){if(b==="message")a.start()
this.cc(a,b,c,!1)},
"%":"MessagePort"},
l1:{"^":"p;B:name=","%":"HTMLMetaElement"},
l2:{"^":"p;J:value}","%":"HTMLMeterElement"},
l3:{"^":"i8;",
h:function(a,b){return P.J(a.get(b))},
D:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.J(y.value[1]))}},
gH:function(a){var z=H.w([],[P.l])
this.D(a,new W.fF(z))
return z},
gj:function(a){return a.size},
$asH:function(){return[P.l,null]},
"%":"MIDIInputMap"},
fF:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
l4:{"^":"i9;",
h:function(a,b){return P.J(a.get(b))},
D:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.J(y.value[1]))}},
gH:function(a){var z=H.w([],[P.l])
this.D(a,new W.fG(z))
return z},
gj:function(a){return a.size},
$asH:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
fG:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
l5:{"^":"ib;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b5]},
$isn:1,
$asn:function(){return[W.b5]},
$asi:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$ask:function(){return[W.b5]},
"%":"MimeTypeArray"},
l6:{"^":"e;I:target=","%":"MutationRecord"},
M:{"^":"cM;a",
gS:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.bP("No elements"))
if(y>1)throw H.a(P.bP("More than one element"))
return z.firstChild},
L:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
gG:function(a){var z=this.a.childNodes
return new W.cA(z,z.length,-1,null,[H.aS(C.Q,z,"k",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$ascM:function(){return[W.q]},
$asi:function(){return[W.q]},
$ash:function(){return[W.q]},
$asdu:function(){return[W.q]}},
q:{"^":"y;ah:parentNode=,aB:previousSibling=",
gdw:function(a){return new W.M(a)},
dA:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cd(a):z},
$isq:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
le:{"^":"e;",
dz:[function(a){return a.previousNode()},"$0","gaB",1,0,4],
"%":"NodeIterator"},
fJ:{"^":"id;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asi:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"NodeList|RadioNodeList"},
lh:{"^":"p;w:height},B:name=,A:width}","%":"HTMLObjectElement"},
lj:{"^":"p;J:value}","%":"HTMLOptionElement"},
lk:{"^":"p;B:name=,J:value}","%":"HTMLOutputElement"},
ll:{"^":"p;B:name=,J:value}","%":"HTMLParamElement"},
aK:{"^":"e;j:length=","%":"Plugin"},
ln:{"^":"ii;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aK]},
$isn:1,
$asn:function(){return[W.aK]},
$asi:function(){return[W.aK]},
$ish:1,
$ash:function(){return[W.aK]},
$ask:function(){return[W.aK]},
"%":"PluginArray"},
lq:{"^":"eV;I:target=","%":"ProcessingInstruction"},
lr:{"^":"p;J:value}","%":"HTMLProgressElement"},
lx:{"^":"e;I:target=","%":"ResizeObserverEntry"},
ly:{"^":"ip;",
h:function(a,b){return P.J(a.get(b))},
D:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.J(y.value[1]))}},
gH:function(a){var z=H.w([],[P.l])
this.D(a,new W.h_(z))
return z},
gj:function(a){return a.size},
$asH:function(){return[P.l,null]},
"%":"RTCStatsReport"},
h_:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
lz:{"^":"p;j:length=,B:name=,J:value}","%":"HTMLSelectElement"},
bN:{"^":"y;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
lA:{"^":"R;K:error=","%":"SensorErrorEvent"},
lB:{"^":"p;B:name=","%":"HTMLSlotElement"},
lC:{"^":"dA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b8]},
$isn:1,
$asn:function(){return[W.b8]},
$asi:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$ask:function(){return[W.b8]},
"%":"SourceBufferList"},
lD:{"^":"iv;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b9]},
$isn:1,
$asn:function(){return[W.b9]},
$asi:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$ask:function(){return[W.b9]},
"%":"SpeechGrammarList"},
lE:{"^":"R;K:error=","%":"SpeechRecognitionError"},
aM:{"^":"e;j:length=","%":"SpeechRecognitionResult"},
lG:{"^":"iy;",
h:function(a,b){return a.getItem(b)},
D:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gH:function(a){var z=H.w([],[P.l])
this.D(a,new W.hb(z))
return z},
gj:function(a){return a.length},
$asH:function(){return[P.l,P.l]},
"%":"Storage"},
hb:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},
hh:{"^":"p;",
N:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=W.fe("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.M(y).L(0,J.ep(z))
return y},
"%":"HTMLTableElement"},
lJ:{"^":"p;",
N:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.N(z.createElement("table"),b,c,d)
z.toString
z=new W.M(z)
x=z.gS(z)
x.toString
z=new W.M(x)
w=z.gS(z)
y.toString
w.toString
new W.M(y).L(0,new W.M(w))
return y},
"%":"HTMLTableRowElement"},
lK:{"^":"p;",
N:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ak(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.N(z.createElement("table"),b,c,d)
z.toString
z=new W.M(z)
x=z.gS(z)
y.toString
x.toString
new W.M(y).L(0,new W.M(x))
return y},
"%":"HTMLTableSectionElement"},
d1:{"^":"p;",$isd1:1,"%":"HTMLTemplateElement"},
lL:{"^":"p;B:name=,J:value}","%":"HTMLTextAreaElement"},
lN:{"^":"iG;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.be]},
$isn:1,
$asn:function(){return[W.be]},
$asi:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$ask:function(){return[W.be]},
"%":"TextTrackCueList"},
lO:{"^":"dE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bd]},
$isn:1,
$asn:function(){return[W.bd]},
$asi:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$ask:function(){return[W.bd]},
"%":"TextTrackList"},
lR:{"^":"e;j:length=","%":"TimeRanges"},
aN:{"^":"e;",
gI:function(a){return W.dG(a.target)},
"%":"Touch"},
lS:{"^":"iL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aN]},
$isn:1,
$asn:function(){return[W.aN]},
$asi:function(){return[W.aN]},
$ish:1,
$ash:function(){return[W.aN]},
$ask:function(){return[W.aN]},
"%":"TouchList"},
lT:{"^":"e;j:length=","%":"TrackDefaultList"},
lW:{"^":"e;",
dT:[function(a){return a.parentNode()},"$0","gah",1,0,4],
dz:[function(a){return a.previousNode()},"$0","gaB",1,0,4],
"%":"TreeWalker"},
lY:{"^":"e;",
k:function(a){return String(a)},
"%":"URL"},
m_:{"^":"e;l:x=,E:z=","%":"VRStageBoundsPoint"},
m1:{"^":"fD;w:height},A:width}","%":"HTMLVideoElement"},
m2:{"^":"y;j:length=","%":"VideoTrackList"},
hr:{"^":"y;",
gd2:function(a){var z,y
z=P.az
y=new P.aP(0,$.x,null,[z])
this.cO(a)
this.cR(a,W.dK(new W.hs(new P.iC(y,[z]))))
return y},
cR:function(a,b){return a.requestAnimationFrame(H.ax(b,1))},
cO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
hs:{"^":"j:0;a",
$1:function(a){this.a.d9(0,a)}},
m3:{"^":"y;"},
m7:{"^":"q;B:name=,b4:namespaceURI=","%":"Attr"},
m8:{"^":"iR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.Q]},
$isn:1,
$asn:function(){return[W.Q]},
$asi:function(){return[W.Q]},
$ish:1,
$ash:function(){return[W.Q]},
$ask:function(){return[W.Q]},
"%":"CSSRuleList"},
m9:{"^":"fa;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
F:function(a,b){var z
if(b==null)return!1
z=J.o(b)
if(!z.$isa_)return!1
return a.left===z.gbF(b)&&a.top===z.gbN(b)&&a.width===z.gA(b)&&a.height===z.gw(b)},
gv:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.ds(W.a5(W.a5(W.a5(W.a5(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gw:function(a){return a.height},
gA:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
ma:{"^":"iT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b2]},
$isn:1,
$asn:function(){return[W.b2]},
$asi:function(){return[W.b2]},
$ish:1,
$ash:function(){return[W.b2]},
$ask:function(){return[W.b2]},
"%":"GamepadList"},
md:{"^":"iV;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.q]},
$isn:1,
$asn:function(){return[W.q]},
$asi:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$ask:function(){return[W.q]},
"%":"MozNamedAttrMap|NamedNodeMap"},
me:{"^":"iX;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aM]},
$isn:1,
$asn:function(){return[W.aM]},
$asi:function(){return[W.aM]},
$ish:1,
$ash:function(){return[W.aM]},
$ask:function(){return[W.aM]},
"%":"SpeechRecognitionResultList"},
mf:{"^":"iZ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bc]},
$isn:1,
$asn:function(){return[W.bc]},
$asi:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$ask:function(){return[W.bc]},
"%":"StyleSheetList"},
hz:{"^":"bK;cP:a<",
D:function(a,b){var z,y,x,w,v
for(z=this.gH(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.K)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gH:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.w([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=z[w]
u=J.d(v)
if(u.gb4(v)==null)y.push(u.gB(v))}return y},
$asbK:function(){return[P.l,P.l]},
$asH:function(){return[P.l,P.l]}},
hJ:{"^":"hz;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gH(this).length}},
dm:{"^":"hc;a,b,c,$ti",
du:function(a,b,c,d){return W.dn(this.a,this.b,a,!1,H.z(this,0))}},
dl:{"^":"dm;a,b,c,$ti"},
hL:{"^":"hd;a,b,c,d,e,$ti",
cC:function(a,b,c,d,e){this.cZ()},
cZ:function(){var z=this.d
if(z!=null&&this.a<=0)J.e3(this.b,this.c,z,!1)},
n:{
dn:function(a,b,c,d,e){var z=W.dK(new W.hM(c))
z=new W.hL(0,a,b,z,!1,[e])
z.cC(a,b,c,!1,e)
return z}}},
hM:{"^":"j:0;a",
$1:function(a){return this.a.$1(a)}},
bU:{"^":"c;bX:a<",
cD:function(a){var z,y
z=$.$get$bV()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.M[y],W.jm())
for(y=0;y<12;++y)z.i(0,C.q[y],W.jn())}},
V:function(a){return $.$get$dr().C(0,W.al(a))},
R:function(a,b,c){var z,y,x
z=W.al(a)
y=$.$get$bV()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
n:{
dq:function(a){var z,y
z=document.createElement("a")
y=new W.iq(z,window.location)
y=new W.bU(y)
y.cD(a)
return y},
mb:[function(a,b,c,d){return!0},"$4","jm",16,0,7],
mc:[function(a,b,c,d){var z,y,x,w,v
z=d.gbX()
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
return z},"$4","jn",16,0,7]}},
k:{"^":"c;$ti",
gG:function(a){return new W.cA(a,this.gj(a),-1,null,[H.aS(this,a,"k",0)])}},
cR:{"^":"c;a",
V:function(a){return C.c.bd(this.a,new W.fL(a))},
R:function(a,b,c){return C.c.bd(this.a,new W.fK(a,b,c))}},
fL:{"^":"j:0;a",
$1:function(a){return a.V(this.a)}},
fK:{"^":"j:0;a,b,c",
$1:function(a){return a.R(this.a,this.b,this.c)}},
ir:{"^":"c;bX:d<",
cF:function(a,b,c,d){var z,y,x
this.a.L(0,c)
z=b.aD(0,new W.is())
y=b.aD(0,new W.it())
this.b.L(0,z)
x=this.c
x.L(0,C.O)
x.L(0,y)},
V:function(a){return this.a.C(0,W.al(a))},
R:["cg",function(a,b,c){var z,y
z=W.al(a)
y=this.c
if(y.C(0,H.b(z)+"::"+b))return this.d.d1(c)
else if(y.C(0,"*::"+b))return this.d.d1(c)
else{y=this.b
if(y.C(0,H.b(z)+"::"+b))return!0
else if(y.C(0,"*::"+b))return!0
else if(y.C(0,H.b(z)+"::*"))return!0
else if(y.C(0,"*::*"))return!0}return!1}]},
is:{"^":"j:0;",
$1:function(a){return!C.c.C(C.q,a)}},
it:{"^":"j:0;",
$1:function(a){return C.c.C(C.q,a)}},
iD:{"^":"ir;e,a,b,c,d",
R:function(a,b,c){if(this.cg(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cb(a).a.getAttribute("template")==="")return this.e.C(0,b)
return!1},
n:{
dC:function(){var z=P.l
z=new W.iD(P.bI(C.p,z),P.aJ(null,null,null,z),P.aJ(null,null,null,z),P.aJ(null,null,null,z),null)
z.cF(null,new H.fC(C.p,new W.iE(),[H.z(C.p,0),null]),["TEMPLATE"],null)
return z}}},
iE:{"^":"j:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
iB:{"^":"c;",
V:function(a){var z=J.o(a)
if(!!z.$iscX)return!1
z=!!z.$isv
if(z&&W.al(a)==="foreignObject")return!1
if(z)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.h.c9(b,"on"))return!1
return this.V(a)}},
cA:{"^":"c;a,b,c,d,$ti",
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aD(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gt:function(a){return this.d}},
hD:{"^":"c;a",$isy:1,n:{
hE:function(a){if(a===window)return a
else return new W.hD(a)}}},
cQ:{"^":"c;"},
lf:{"^":"c;"},
lX:{"^":"c;"},
iq:{"^":"c;a,b"},
dF:{"^":"c;a",
aK:function(a){new W.iO(this).$2(a,null)},
a1:function(a,b){if(b==null)J.cf(a)
else b.removeChild(a)},
cU:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cb(a)
x=y.gcP().getAttribute("is")
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
this.cT(a,b,z,v,u,y,x)}catch(t){if(H.O(t) instanceof P.a7)throw t
else{this.a1(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
cT:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a1(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.V(a)){this.a1(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.a1(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gH(f)
y=H.w(z.slice(0),[H.z(z,0)])
for(x=f.gH(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.R(a,J.eG(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.o(a).$isd1)this.aK(a.content)}},
iO:{"^":"j:13;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.cU(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a1(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.er(z)}catch(w){H.O(w)
v=z
if(x){u=J.d(v)
if(u.gah(v)!=null){u.gah(v)
u.gah(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
hC:{"^":"e+f3;"},
hF:{"^":"e+i;"},
hG:{"^":"hF+k;"},
hH:{"^":"e+i;"},
hI:{"^":"hH+k;"},
hO:{"^":"e+i;"},
hP:{"^":"hO+k;"},
i2:{"^":"e+i;"},
i3:{"^":"i2+k;"},
i8:{"^":"e+H;"},
i9:{"^":"e+H;"},
ia:{"^":"e+i;"},
ib:{"^":"ia+k;"},
ic:{"^":"e+i;"},
id:{"^":"ic+k;"},
ih:{"^":"e+i;"},
ii:{"^":"ih+k;"},
ip:{"^":"e+H;"},
dz:{"^":"y+i;"},
dA:{"^":"dz+k;"},
iu:{"^":"e+i;"},
iv:{"^":"iu+k;"},
iy:{"^":"e+H;"},
iF:{"^":"e+i;"},
iG:{"^":"iF+k;"},
dD:{"^":"y+i;"},
dE:{"^":"dD+k;"},
iK:{"^":"e+i;"},
iL:{"^":"iK+k;"},
iQ:{"^":"e+i;"},
iR:{"^":"iQ+k;"},
iS:{"^":"e+i;"},
iT:{"^":"iS+k;"},
iU:{"^":"e+i;"},
iV:{"^":"iU+k;"},
iW:{"^":"e+i;"},
iX:{"^":"iW+k;"},
iY:{"^":"e+i;"},
iZ:{"^":"iY+k;"}}],["","",,P,{"^":"",
J:function(a){var z,y,x,w,v
if(a==null)return
z=P.Z()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.K)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
jc:function(a,b){var z={}
a.D(0,new P.jd(z))
return z},
cw:function(){var z=$.cv
if(z==null){z=J.br(window.navigator.userAgent,"Opera",0)
$.cv=z}return z},
f7:function(){var z,y
z=$.cs
if(z!=null)return z
y=$.ct
if(y==null){y=J.br(window.navigator.userAgent,"Firefox",0)
$.ct=y}if(y)z="-moz-"
else{y=$.cu
if(y==null){y=P.cw()!==!0&&J.br(window.navigator.userAgent,"Trident/",0)
$.cu=y}if(y)z="-ms-"
else z=P.cw()===!0?"-o-":"-webkit-"}$.cs=z
return z},
jd:{"^":"j:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",lw:{"^":"y;K:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},lU:{"^":"y;K:error=","%":"IDBTransaction"},m0:{"^":"R;I:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",ij:{"^":"c;$ti"},a_:{"^":"ij;$ti"}}],["","",,P,{"^":"",jF:{"^":"a8;I:target=","%":"SVGAElement"},kf:{"^":"v;l:x=,m:y=","%":"SVGFEBlendElement"},kg:{"^":"v;l:x=,m:y=","%":"SVGFEColorMatrixElement"},kh:{"^":"v;l:x=,m:y=","%":"SVGFEComponentTransferElement"},ki:{"^":"v;l:x=,m:y=","%":"SVGFECompositeElement"},kj:{"^":"v;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},kk:{"^":"v;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},kl:{"^":"v;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},km:{"^":"v;l:x=,m:y=","%":"SVGFEFloodElement"},kn:{"^":"v;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},ko:{"^":"v;l:x=,m:y=","%":"SVGFEImageElement"},kp:{"^":"v;l:x=,m:y=","%":"SVGFEMergeElement"},kq:{"^":"v;l:x=,m:y=","%":"SVGFEMorphologyElement"},kr:{"^":"v;l:x=,m:y=","%":"SVGFEOffsetElement"},ks:{"^":"v;l:x=,m:y=,E:z=","%":"SVGFEPointLightElement"},kt:{"^":"v;l:x=,m:y=","%":"SVGFESpecularLightingElement"},ku:{"^":"v;l:x=,m:y=,E:z=","%":"SVGFESpotLightElement"},kv:{"^":"v;l:x=,m:y=","%":"SVGFETileElement"},kw:{"^":"v;l:x=,m:y=","%":"SVGFETurbulenceElement"},kB:{"^":"v;l:x=,m:y=","%":"SVGFilterElement"},kD:{"^":"a8;l:x=,m:y=","%":"SVGForeignObjectElement"},fn:{"^":"a8;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},a8:{"^":"v;","%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},kL:{"^":"a8;l:x=,m:y=","%":"SVGImageElement"},kR:{"^":"i5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cK]},
$ish:1,
$ash:function(){return[P.cK]},
$ask:function(){return[P.cK]},
"%":"SVGLengthList"},kX:{"^":"v;l:x=,m:y=","%":"SVGMaskElement"},lg:{"^":"ig;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.cU]},
$ish:1,
$ash:function(){return[P.cU]},
$ask:function(){return[P.cU]},
"%":"SVGNumberList"},lm:{"^":"v;l:x=,m:y=","%":"SVGPatternElement"},lo:{"^":"e;l:x=,m:y=","%":"SVGPoint"},lp:{"^":"e;j:length=","%":"SVGPointList"},ls:{"^":"e;l:x=,m:y=","%":"SVGRect"},lt:{"^":"fn;l:x=,m:y=","%":"SVGRectElement"},cX:{"^":"v;",$iscX:1,"%":"SVGScriptElement"},lH:{"^":"iA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},v:{"^":"ak;",
N:function(a,b,c,d){var z,y,x,w,v,u
z=H.w([],[W.cQ])
z.push(W.dq(null))
z.push(W.dC())
z.push(new W.iB())
c=new W.dF(new W.cR(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.t).dc(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.M(w)
u=z.gS(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaA:function(a){return new W.dl(a,"change",!1,[W.R])},
$isv:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lI:{"^":"a8;l:x=,m:y=","%":"SVGSVGElement"},hi:{"^":"a8;","%":"SVGTextPathElement;SVGTextContentElement"},lM:{"^":"hi;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},lV:{"^":"iN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.d3]},
$ish:1,
$ash:function(){return[P.d3]},
$ask:function(){return[P.d3]},
"%":"SVGTransformList"},lZ:{"^":"a8;l:x=,m:y=","%":"SVGUseElement"},i4:{"^":"e+i;"},i5:{"^":"i4+k;"},ie:{"^":"e+i;"},ig:{"^":"ie+k;"},iz:{"^":"e+i;"},iA:{"^":"iz+k;"},iM:{"^":"e+i;"},iN:{"^":"iM+k;"}}],["","",,P,{"^":"",jK:{"^":"e;j:length=","%":"AudioBuffer"},jL:{"^":"hA;",
h:function(a,b){return P.J(a.get(b))},
D:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.J(y.value[1]))}},
gH:function(a){var z=H.w([],[P.l])
this.D(a,new P.eS(z))
return z},
gj:function(a){return a.size},
$asH:function(){return[P.l,null]},
"%":"AudioParamMap"},eS:{"^":"j:2;a",
$2:function(a,b){return this.a.push(a)}},jM:{"^":"y;j:length=","%":"AudioTrackList"},eT:{"^":"y;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},li:{"^":"eT;j:length=","%":"OfflineAudioContext"},hA:{"^":"e+H;"}}],["","",,P,{"^":"",lu:{"^":"e;",
bb:function(a,b){return a.activeTexture(b)},
be:function(a,b,c){return a.attachShader(b,c)},
bf:function(a,b,c){return a.bindBuffer(b,c)},
bh:function(a,b,c){return a.bindFramebuffer(b,c)},
bi:function(a,b,c){return a.bindTexture(b,c)},
bj:function(a,b){return a.blendEquation(b)},
bk:function(a,b,c){return a.blendFunc(b,c)},
bl:function(a,b,c,d){return a.bufferData(b,c,d)},
bm:function(a,b){return a.checkFramebufferStatus(b)},
bn:function(a,b){return a.clear(b)},
bo:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bp:function(a,b){return a.compileShader(b)},
bq:function(a){return a.createBuffer()},
br:function(a){return a.createFramebuffer()},
bs:function(a){return a.createProgram()},
bt:function(a,b){return a.createShader(b)},
bu:function(a){return a.createTexture()},
bv:function(a,b){return a.depthMask(b)},
bw:function(a,b){return a.disable(b)},
bx:function(a,b,c,d){return a.drawArrays(b,c,d)},
by:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bz:function(a,b){return a.enable(b)},
bA:function(a,b){return a.enableVertexAttribArray(b)},
bC:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ai:function(a){return P.J(a.getContextAttributes())},
aE:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aH:function(a,b){return a.getShaderInfoLog(b)},
aI:function(a,b,c){return a.getShaderParameter(b,c)},
aJ:function(a,b,c){return a.getUniformLocation(b,c)},
bG:function(a,b){return a.linkProgram(b)},
aL:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bI:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
bJ:function(a,b,c,d){return a.texParameterf(b,c,d)},
bK:function(a,b,c,d){return a.texParameteri(b,c,d)},
bO:function(a,b,c){return a.uniform1f(b,c)},
bP:function(a,b,c){return a.uniform1fv(b,c)},
bQ:function(a,b,c){return a.uniform1i(b,c)},
bR:function(a,b,c){return a.uniform1iv(b,c)},
bS:function(a,b,c){return a.uniform2fv(b,c)},
bT:function(a,b,c){return a.uniform3fv(b,c)},
bU:function(a,b,c){return a.uniform4fv(b,c)},
bV:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bW:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bY:function(a,b){return a.useProgram(b)},
bZ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c0:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},lv:{"^":"e;",
d4:function(a,b){return a.beginTransformFeedback(b)},
d7:function(a,b){return a.bindVertexArray(b)},
dd:function(a){return a.createVertexArray()},
de:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
df:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dg:function(a){return a.endTransformFeedback()},
dI:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
dK:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bb:function(a,b){return a.activeTexture(b)},
be:function(a,b,c){return a.attachShader(b,c)},
bf:function(a,b,c){return a.bindBuffer(b,c)},
bh:function(a,b,c){return a.bindFramebuffer(b,c)},
bi:function(a,b,c){return a.bindTexture(b,c)},
bj:function(a,b){return a.blendEquation(b)},
bk:function(a,b,c){return a.blendFunc(b,c)},
bl:function(a,b,c,d){return a.bufferData(b,c,d)},
bm:function(a,b){return a.checkFramebufferStatus(b)},
bn:function(a,b){return a.clear(b)},
bo:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bp:function(a,b){return a.compileShader(b)},
bq:function(a){return a.createBuffer()},
br:function(a){return a.createFramebuffer()},
bs:function(a){return a.createProgram()},
bt:function(a,b){return a.createShader(b)},
bu:function(a){return a.createTexture()},
bv:function(a,b){return a.depthMask(b)},
bw:function(a,b){return a.disable(b)},
bx:function(a,b,c,d){return a.drawArrays(b,c,d)},
by:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bz:function(a,b){return a.enable(b)},
bA:function(a,b){return a.enableVertexAttribArray(b)},
bC:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ai:function(a){return P.J(a.getContextAttributes())},
aE:function(a){return a.getError()},
aF:function(a,b){return a.getProgramInfoLog(b)},
aG:function(a,b,c){return a.getProgramParameter(b,c)},
aH:function(a,b){return a.getShaderInfoLog(b)},
aI:function(a,b,c){return a.getShaderParameter(b,c)},
aJ:function(a,b,c){return a.getUniformLocation(b,c)},
bG:function(a,b){return a.linkProgram(b)},
aL:function(a,b,c){return a.shaderSource(b,c)},
aO:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bI:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
bJ:function(a,b,c,d){return a.texParameterf(b,c,d)},
bK:function(a,b,c,d){return a.texParameteri(b,c,d)},
bO:function(a,b,c){return a.uniform1f(b,c)},
bP:function(a,b,c){return a.uniform1fv(b,c)},
bQ:function(a,b,c){return a.uniform1i(b,c)},
bR:function(a,b,c){return a.uniform1iv(b,c)},
bS:function(a,b,c){return a.uniform2fv(b,c)},
bT:function(a,b,c){return a.uniform3fv(b,c)},
bU:function(a,b,c){return a.uniform4fv(b,c)},
bV:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bW:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bY:function(a,b){return a.useProgram(b)},
bZ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c0:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",lF:{"^":"ix;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.u(b,a,null,null,null))
return P.J(a.item(b))},
i:function(a,b,c){throw H.a(P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$asi:function(){return[P.bJ]},
$ish:1,
$ash:function(){return[P.bJ]},
$ask:function(){return[P.bJ]},
"%":"SQLResultSetRowList"},iw:{"^":"e+i;"},ix:{"^":"iw+k;"}}],["","",,G,{"^":"",
ht:function(a){var z,y,x,w
z=H.w(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.f(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.f(z,y)
z[y]=w}return C.c.a3(z,"\n")},
dk:function(a,b,c){var z,y,x,w
z=J.d(a)
y=z.bt(a,b)
z.aL(a,y,c)
z.bp(a,y)
x=z.aI(a,y,35713)
if(x!=null&&J.F(x,!1)){w=z.aH(a,y)
P.aA("E:Compilation failed:")
P.aA("E:"+G.ht(c))
P.aA("E:Failure:")
P.aA(C.h.u("E:",w))
throw H.a(w)}return y},
cB:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bt(a[y])
w=b.length
if(z>=w)return H.f(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.f(a,y)
v=J.bu(a[y])
if(x>=w)return H.f(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.f(a,y)
v=J.cd(a[y])
if(z>=w)return H.f(b,z)
b[z]=v}return b},
fj:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bt(a[y])
w=b.length
if(z>=w)return H.f(b,z)
b[z]=x;++z
if(y>=a.length)return H.f(a,y)
x=J.bu(a[y])
if(z>=w)return H.f(b,z)
b[z]=x}return b},
fk:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bt(a[y])
w=b.length
if(z>=w)return H.f(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.f(a,y)
v=J.bu(a[y])
if(x>=w)return H.f(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.f(a,y)
x=J.cd(a[y])
if(v>=w)return H.f(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.f(a,y)
x=J.eu(a[y])
if(z>=w)return H.f(b,z)
b[z]=x}return b},
fi:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aD(a[y],0)
w=b.length
if(z>=w)return H.f(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.f(a,y)
v=J.aD(a[y],1)
if(x>=w)return H.f(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.f(a,y)
x=J.aD(a[y],2)
if(v>=w)return H.f(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.f(a,y)
x=J.aD(a[y],3)
if(z>=w)return H.f(b,z)
b[z]=x}return b},
i0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.a3(z,z.r,null,null,[H.z(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.C]],v=[P.ay],u=[T.bS],t=[T.I],s=[T.L];y.q();){r=y.d
if(!x.ae(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.dS>0)H.bo("I: "+q)
continue}p=z.h(0,r)
switch($.$get$N().h(0,r).a){case"vec2":b.a_(r,G.fj(H.aT(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.a_(r,G.cB(H.aT(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.a_(r,G.fk(H.aT(p,"$ish",u,"$ash"),null),4)
break
case"float":b.a_(r,new Float32Array(H.bg(H.aT(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.a_(r,G.fi(H.aT(p,"$ish",w,"$ash"),null),4)
break}}},
bL:{"^":"c;"},
hm:{"^":"bL;d,a,b,c",
cr:function(){return this.d},
k:function(a){var z,y,x,w
z=H.w(["{"+H.b(new H.df(H.jj(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.a3(y,y.r,null,null,[H.z(y,0)]),x.c=y.e;x.q();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a3(z,"\n")}},
eW:{"^":"c;a,b",
bB:function(a,b,c){J.el(this.a,b)
if(c>0)J.eN(this.a,b,c)},
c_:function(a,b,c,d,e,f,g,h){J.bp(this.a,34962,b)
J.eO(this.a,c,d,e,!1,g,h)}},
cC:{"^":"c;a,b,c,d,e",
co:function(a,b,c,d,e){var z,y,x
z=this.a
y=J.eb(z.a)
this.b=y
J.bq(z.a,36160,y)
y=this.c
if(y!=null){y=y.b
J.eo(z.a,36160,36064,3553,y,0)}x=J.e7(z.a,36160)
if(x!==36053)throw H.a("Error Incomplete Framebuffer: "+H.b(x))
J.bq(z.a,36160,null)},
a8:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.bq(z.a,36160,y)
J.eP(z.a,b,c,d,e)
if(a!==0)J.e8(z.a,a)},
n:{
cD:function(a,b,c,d,e){var z=new G.cC(a,null,b,c,d)
z.co(a,b,c,d,!1)
return z}}},
fh:{"^":"c;a,b,c,d"},
fm:{"^":"c;a,b,c,d,e",
aS:function(a){switch($.$get$N().h(0,a).a){case"vec2":this.e.i(0,a,H.w([],[T.L]))
break
case"vec3":this.e.i(0,a,H.w([],[T.I]))
break
case"vec4":this.e.i(0,a,H.w([],[T.bS]))
break
case"float":this.e.i(0,a,H.w([],[P.ay]))
break
case"uvec4":this.e.i(0,a,H.w([],[[P.h,P.C]]))
break}},
ck:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].ad(0))},
cl:function(a,b){var z,y
z=this.e.h(0,a)
for(y=0;y<4;++y)z.push(b[y].ad(0))},
cm:function(a){var z,y,x
z=this.d
y=z.length
this.c.push(new G.fh(y,y+1,y+2,y+3))
for(x=0;x<4;++x)z.push(a[x].ad(0))},
cp:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.w(y,[P.C])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.f(y,u)
t=y[u]
s=t.gdN(t)
if(v>=w)return H.f(x,v)
x[v]=s
s=v+1
r=t.gdO(t)
if(s>=w)return H.f(x,s)
x[s]=r
r=v+2
s=t.gdP(t)
if(r>=w)return H.f(x,r)
x[r]=s
v+=3}for(y=z.length,u=0;u<y;++u){q=z[u]
s=q.a
if(v>=w)return H.f(x,v)
x[v]=s
r=v+1
if(r>=w)return H.f(x,r)
x[r]=q.b
r=v+2
p=q.c
if(r>=w)return H.f(x,r)
x[r]=p
r=v+3
if(r>=w)return H.f(x,r)
x[r]=s
s=v+4
if(s>=w)return H.f(x,s)
x[s]=p
p=v+5
if(p>=w)return H.f(x,p)
x[p]=q.d
v+=6}return x},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.a3(y,y.r,null,null,[H.z(y,0)]),x.c=y.e;x.q();){w=x.d
v=$.$get$N().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a3(z," ")}},
fE:{"^":"bL;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
aR:function(a,b,c){var z,y
C.h.aa(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bp(z.a,34962,y)
J.c8(z.a,34962,b,35048)},
cq:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a_:function(a,b,c){var z,y,x,w,v
z=J.c9(a,0)===105
if(z&&this.z===0)this.z=C.a.ci(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bs(x.a))
this.aR(a,b,c)
w=$.$get$N().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.aV(x.a,this.e)
x.bB(0,v,z?1:0)
x.c_(0,y.h(0,a),v,w.aT(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.a3(z,z.r,null,null,[H.z(z,0)]),x.c=z.e;x.q();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a3(y,"  ")}},
fZ:{"^":"bL;d,e,f,r,x,y,z,Q,ch,a,b,c",
cs:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.ce(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
x.i(0,t,J.ce(w.a,v,t))}},
cz:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.a3(y,y.r,null,null,[H.z(y,0)]),w.c=y.e;w.q();){v=w.d
if(!z.ae(0,v))x.push(v)}for(z=this.x,y=new P.dt(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.q();){v=y.d
if(!z.C(0,v))x.push(v)}return x},
cB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.a3(b,b.r,null,null,[H.z(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.c9(t,0)){case 117:if(w.ae(0,t)){s=b.h(0,t)
if(v.ae(0,t))H.bo("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$N().h(0,t)
if(r==null)H.E("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bv(x.a,q,s)
else if(!!J.o(s).$isfp)J.eL(x.a,q,s)
break
case"float":if(r.c===0)J.eJ(x.a,q,s)
else if(!!J.o(s).$isbD)J.eK(x.a,q,s)
break
case"mat4":if(r.c===0){p=C.o.gaP(H.W(s,"$iskZ"))
J.ck(x.a,q,!1,p)}else if(!!J.o(s).$isbD)J.ck(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.o.gaP(H.W(s,"$iskY"))
J.cj(x.a,q,!1,p)}else if(!!J.o(s).$isbD)J.cj(x.a,q,!1,s)
break
case"vec4":if(r.c===0){p=C.o.gaP(H.W(s,"$isbS"))
J.ci(x.a,q,p)}else J.ci(x.a,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.ch(o,q,H.W(s,"$isI").a)
else J.ch(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cg(o,q,H.W(s,"$isL").a)
else J.cg(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.af(p)
J.c6(x.a,33984+p)
p=H.W(s,"$isbR").b
J.aU(x.a,3553,p)
p=this.ch
J.bv(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.u()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.af(p)
J.c6(x.a,33984+p)
p=H.W(s,"$isbR").b
J.aU(x.a,34067,p)
p=this.ch
J.bv(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.u()
this.ch=p+1
break
default:H.bo("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.F(s,!0)
o=x.a
if(p)J.aE(o,2929)
else J.eg(o,2929)
break
case"cStencilFunc":H.W(s,"$islQ")
s.gdk()
J.aE(x.a,2960)
p=s.gdk()
o=s.gJ(s)
n=s.gdS(s)
J.eD(x.a,p,o,n)
break
case"cDepthWrite":J.ef(x.a,s)
break
case"cBlendEquation":H.W(s,"$islP")
s.gdh()
J.aE(x.a,3042)
p=s.gdL()
o=s.gdR()
J.e6(x.a,p,o)
o=s.gdh()
J.e5(x.a,o)
break}++u
break}}m=P.fb(0,0,0,Date.now()-new P.cr(z,!1).a,0,0)
""+u
m.k(0)},
cn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.eM(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b3()}for(x=0;x<1;++x){w=b[x]
this.cB(w.a,w.cr())}y=this.Q
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.b_()}for(v=a.cy,u=new H.a3(v,v.r,null,null,[H.z(v,0)]),u.c=v.e;u.q();)y.ax(0,u.d)
t=this.cz()
if(t.length!==0)P.aA("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.aV(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cq()
u=a.Q
r=a.z
if(s)J.e4(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.ek(q,y,v,u,0,r)
else J.ej(q,y,v,u,0)}else{u=z.a
if(r>1)J.ei(u,y,0,v,r)
else J.eh(u,y,0,v)}if(s)J.em(z.a)},
a9:function(a,b){return this.cn(a,b,null)},
n:{
cW:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.aJ(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.ec(b.a)
u=G.dk(b.a,35633,y)
J.c7(b.a,v,u)
t=G.dk(b.a,35632,x)
J.c7(b.a,v,t)
if(w.length>0)J.eH(b.a,v,w,35980)
J.eA(b.a,v)
if(J.ez(b.a,v,35714)!==!0)H.E(J.ey(b.a,v))
z=new G.fZ(b,c,d,v,P.bI(c.c,null),P.Z(),P.Z(),z,null,a,!1,!0)
z.cs(a,b,c,d)
return z}}},
t:{"^":"c;a,b,c",
aT:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
h4:{"^":"c;a,b,c,d,e,f,r,x",
cj:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.i(0,w,this.r);++this.r}C.c.aN(z)},
aQ:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.K)(a),++x)y.push(a[x])
C.c.aN(y)},
ct:function(a,b){this.b=this.aV(!1,a,b)},
aU:function(a){return this.ct(a,null)},
aV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){t=z[u]
s=$.$get$N().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.f(z,u)
q=z[u]
s=$.$get$N().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.$get$N().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.K)(z),++u){q=z[u]
s=$.$get$N().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.c.L(w,b)
if(a)w.push("}")
return C.c.a3(w,"\n")},
n:{
bO:function(a){return new G.h4(a,null,[],[],[],[],0,P.Z())}}},
hj:{"^":"c;a,b,c,d,e,f,r"},
bR:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hl:{"^":"bR;f,r,x,a,b,c,d,e",
cw:function(a,b,c,d,e,f,g,h,i){var z,y,x,w
z=this.d
y=this.c
J.aU(z.a,y,this.b)
J.eE(z.a,3553,0,this.x,this.f,this.r,0,g,h,i)
x=this.e
w=x.e
if(w!==1)J.eF(z.a,y,34046,w)
w=x.r
J.aW(z.a,y,10240,w)
w=x.f
J.aW(z.a,y,10241,w)
if(x.b){J.aW(z.a,y,10242,33071)
J.aW(z.a,y,10243,33071)}x.c
J.ex(z.a)
J.aU(z.a,y,null)},
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+H.b(this.f)+" X "+H.b(this.r)+"]"},
n:{
dg:function(a,b,c,d,e,f,g,h,i){var z=new G.hl(c,d,e,b,J.ed(a.a),3553,a,f)
z.cw(a,b,c,d,e,f,g,h,i)
return z}}}}],["","",,R,{"^":"",h9:{"^":"c;",
cu:function(a,b,c){var z,y,x
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
x=this.cE(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
cE:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.hK("span",null)
y=J.cc(v)
J.d(y).sA(y,"1px")
C.n.sw(y,""+d+"px")
C.n.sdi(y,"left")
x=C.n.aZ(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},ha:{"^":"h9;e,f,a,b,c,d",
cA:function(a,b){var z,y,x,w,v;++this.e
if(J.aC(J.e2(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.u.dH(z,2)+" fps"
y=this.c;(y&&C.D).c5(y,b)
x=C.a.U(30*C.u.d8(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cc(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)}}}],["","",,A,{"^":"",
dW:function(a){var z,y
z=C.P.dj(a,0,new A.jl())
if(typeof z!=="number")return H.af(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
jl:{"^":"j:14;",
$2:function(a,b){var z,y
z=J.a1(a,J.a6(b))
if(typeof z!=="number")return H.af(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",L:{"^":"c;b9:a<",
a6:function(a,b){var z=this.a
z[0]=a
z[1]=b},
O:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.L){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gv:function(a){return A.dW(this.a)},
a7:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.L(z)
y.O(this)
x=b.gb9()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
u:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.L(z)
y.O(this)
x=b.gb9()
z[0]=C.i.u(z[0],x.h(0,0))
z[1]=C.i.u(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.f(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ad:function(a){var z=new T.L(new Float32Array(2))
z.O(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},I:{"^":"c;ba:a<",
Y:function(a,b,c){var z=this.a
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
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.I){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gv:function(a){return A.dW(this.a)},
a7:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.I(z)
y.O(this)
x=b.gba()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
u:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.I(z)
y.O(this)
x=b.gba()
z[0]=C.i.u(z[0],x.h(0,0))
z[1]=C.i.u(z[1],x.h(0,1))
z[2]=C.i.u(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.f(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
ad:function(a){var z=new T.I(new Float32Array(3))
z.O(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gE:function(a){return this.a[2]}},bS:{"^":"c;"}}],["","",,X,{"^":"",
dY:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z={}
y=$.$get$N()
y.i(0,"uFlameHeight",C.b)
y.i(0,"uFlameWidth",C.b)
y.i(0,"uFlameTurbulence",C.b)
y.i(0,"uFlameThrottle",C.b)
y.i(0,"uRandomSeed",C.b)
x=document
w=new R.ha(0,0,null,null,null,null)
w.cu(x.getElementById("stats"),"blue","gray")
v=x.querySelector("#webgl-canvas")
u=v.clientWidth
t=v.clientHeight
s=J.d(v)
s.sA(v,u)
s.sw(v,t)
r=new G.eW(null,v)
s=J.ev(v,"webgl2",P.cL(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
r.a=s
if(s==null)H.E(P.cz('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
q="ChronosGL Config: "+H.b(J.ew(s))
if($.dS>0)P.aA("I: "+q)
J.e9(s,0,0,0,1)
J.aE(s,2929)
J.aE(s,2884)
s=$.$get$d2()
p=G.dg(r,"t1",u,t,6408,s,6408,5121,null)
o=G.dg(r,"t2",u,t,6408,s,6408,5121,null)
s=$.$get$dZ()
n=G.cW("fire",r,s,$.$get$dQ())
m=G.cW("color",r,s,$.$get$dP())
s=new T.I(new Float32Array(3))
s.Y(-1,-1,0)
q=new T.I(new Float32Array(3))
q.Y(1,-1,0)
l=new T.I(new Float32Array(3))
l.Y(1,1,0)
k=new T.I(new Float32Array(3))
k.Y(-1,1,0)
j=new T.L(new Float32Array(2))
j.a6(0,0)
i=new T.L(new Float32Array(2))
i.a6(1,0)
h=new T.L(new Float32Array(2))
h.a6(1,1)
g=new T.L(new Float32Array(2))
g.a6(0,1)
f=new T.I(new Float32Array(3))
f.Y(0,0,1)
e=[]
d=new G.fm(!1,[],[],e,P.Z())
d.aS("aTexUV")
d.cm([s,q,l,k])
d.ck("aTexUV",[j,i,h,g])
d.aS("aNormal")
d.cl("aNormal",[f,f,f,f])
s=n.d
q=n.e.x
l=P.Z()
k=J.ee(s.a)
c=new G.fE(s,k,4,l,q,null,0,-1,null,null,P.Z(),"meshdata:quad",!1,!0)
e=G.cB(e,null)
l.i(0,"aPosition",J.bs(s.a))
c.ch=e
c.aR("aPosition",e,3)
b=y.h(0,"aPosition")
if(b==null)H.E("Unknown canonical aPosition")
a=q.h(0,"aPosition")
J.aV(s.a,k)
s.bB(0,a,0)
s.c_(0,l.h(0,"aPosition"),a,b.aT(),5126,!1,0,0)
y=d.cp()
c.y=J.bs(s.a)
q=c.ch.length
if(q<768){c.cx=new Uint8Array(H.bg(y))
c.Q=5121}else if(q<196608){c.cx=new Uint16Array(H.bg(y))
c.Q=5123}else{c.cx=new Uint32Array(H.bg(y))
c.Q=5125}J.aV(s.a,k)
y=c.y
q=c.cx
J.bp(s.a,34963,y)
J.c8(s.a,34963,q,35048)
G.i0(d,c)
a0=G.cD(r,p,null,null,!1)
a1=G.cD(r,o,null,null,!1)
y=P.Z()
a2=new G.hm(y,"ug",!1,!0)
y.i(0,"uRandomSeed",0)
y.i(0,"uFlameTurbulence",0.2)
y.i(0,"uFlameHeight",3.5)
y.i(0,"uFlameWidth",1.2)
y.i(0,"uFlameThrottle",0.248)
for(y=x.getElementsByTagName("input"),s=y.length,a3=0;a3<y.length;y.length===s||(0,H.K)(y),++a3){q=J.eq(y[a3])
W.dn(q.a,q.b,new X.jy(a2),!1,H.z(q,0))}for(y=x.getElementsByTagName("input"),s=y.length,a3=0;a3<y.length;y.length===s||(0,H.K)(y),++a3){a4=y[a3]
a5=x.createEvent("Event")
a5.initEvent("change",!0,!0)
a4.dispatchEvent(a5)}z.a=0
z.b=0
new X.jx(z,a2,a0,u,t,o,n,c,new G.cC(r,null,null,null,null),p,m,a1,w).$1(0)},
jy:{"^":"j:15;a",
$1:function(a){var z,y
z=H.W(J.et(a),"$iscE")
if(z.type==="range"){y=document.getElementById(J.a1(z.id,"2"))
this.a.d.i(0,z.id,P.je(z.value,null))
J.eC(y,z.value)}}},
jx:{"^":"j:16;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=J.a1(a,0)
y=this.a
y.a=z;++y.b
x=this.b
w=x.d
w.i(0,"uRandomSeed",z)
v=this.Q
u=this.z
t=this.y
s=this.x
r=this.r
q=this.f
p=this.e
o=this.d
if(C.a.c4(y.b,2)===0){this.c.a8(17664,0,0,o,p)
w.i(0,"uTexture",q)
r.a9(s,[x])
t.a8(17664,0,0,o,p)
w.i(0,"uTexture",u)
v.a9(s,[x])}else{this.ch.a8(17664,0,0,o,p)
w.i(0,"uTexture",u)
r.a9(s,[x])
t.a8(17664,0,0,o,p)
w.i(0,"uTexture",q)
v.a9(s,[x])}C.a6.gd2(window).bL(this)
this.cx.cA(y.a,""+y.b)}}},1],["","",,V,{"^":""}]]
setupProgram(dart,0,0)
J.o=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cG.prototype
return J.cF.prototype}if(typeof a=="string")return J.ap.prototype
if(a==null)return J.cH.prototype
if(typeof a=="boolean")return J.fv.prototype
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.jh=function(a){if(typeof a=="number")return J.ao.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.a0=function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.aQ=function(a){if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.bk=function(a){if(typeof a=="number")return J.ao.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aO.prototype
return a}
J.ji=function(a){if(typeof a=="number")return J.ao.prototype
if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aO.prototype
return a}
J.c2=function(a){if(typeof a=="string")return J.ap.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aO.prototype
return a}
J.d=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.c)return a
return J.aR(a)}
J.a1=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jh(a).u(a,b)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.o(a).F(a,b)}
J.G=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.bk(a).a4(a,b)}
J.aC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.bk(a).X(a,b)}
J.e2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.bk(a).a7(a,b)}
J.aD=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jv(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)}
J.c6=function(a,b){return J.d(a).bb(a,b)}
J.e3=function(a,b,c,d){return J.d(a).bc(a,b,c,d)}
J.c7=function(a,b,c){return J.d(a).be(a,b,c)}
J.e4=function(a,b){return J.d(a).d4(a,b)}
J.bp=function(a,b,c){return J.d(a).bf(a,b,c)}
J.bq=function(a,b,c){return J.d(a).bh(a,b,c)}
J.aU=function(a,b,c){return J.d(a).bi(a,b,c)}
J.aV=function(a,b){return J.d(a).d7(a,b)}
J.e5=function(a,b){return J.d(a).bj(a,b)}
J.e6=function(a,b,c){return J.d(a).bk(a,b,c)}
J.c8=function(a,b,c,d){return J.d(a).bl(a,b,c,d)}
J.e7=function(a,b){return J.d(a).bm(a,b)}
J.e8=function(a,b){return J.aQ(a).bn(a,b)}
J.e9=function(a,b,c,d,e){return J.d(a).bo(a,b,c,d,e)}
J.c9=function(a,b){return J.c2(a).ay(a,b)}
J.ea=function(a,b){return J.ji(a).W(a,b)}
J.br=function(a,b,c){return J.a0(a).da(a,b,c)}
J.bs=function(a){return J.d(a).bq(a)}
J.eb=function(a){return J.d(a).br(a)}
J.ec=function(a){return J.d(a).bs(a)}
J.ed=function(a){return J.d(a).bu(a)}
J.ee=function(a){return J.d(a).dd(a)}
J.ef=function(a,b){return J.d(a).bv(a,b)}
J.eg=function(a,b){return J.d(a).bw(a,b)}
J.eh=function(a,b,c,d){return J.d(a).bx(a,b,c,d)}
J.ei=function(a,b,c,d,e){return J.d(a).de(a,b,c,d,e)}
J.ej=function(a,b,c,d,e){return J.d(a).by(a,b,c,d,e)}
J.ek=function(a,b,c,d,e,f){return J.d(a).df(a,b,c,d,e,f)}
J.ca=function(a,b){return J.aQ(a).p(a,b)}
J.aE=function(a,b){return J.d(a).bz(a,b)}
J.el=function(a,b){return J.d(a).bA(a,b)}
J.em=function(a){return J.d(a).dg(a)}
J.en=function(a,b){return J.aQ(a).D(a,b)}
J.eo=function(a,b,c,d,e,f){return J.d(a).bC(a,b,c,d,e,f)}
J.cb=function(a){return J.d(a).gd3(a)}
J.aF=function(a){return J.d(a).gK(a)}
J.a6=function(a){return J.o(a).gv(a)}
J.aG=function(a){return J.aQ(a).gG(a)}
J.X=function(a){return J.a0(a).gj(a)}
J.ep=function(a){return J.d(a).gdw(a)}
J.eq=function(a){return J.d(a).gaA(a)}
J.er=function(a){return J.d(a).gaB(a)}
J.cc=function(a){return J.d(a).gP(a)}
J.es=function(a){return J.d(a).gdE(a)}
J.et=function(a){return J.d(a).gI(a)}
J.eu=function(a){return J.d(a).gc1(a)}
J.bt=function(a){return J.d(a).gl(a)}
J.bu=function(a){return J.d(a).gm(a)}
J.cd=function(a){return J.d(a).gE(a)}
J.ev=function(a,b,c){return J.d(a).c3(a,b,c)}
J.ew=function(a){return J.d(a).ai(a)}
J.ex=function(a){return J.d(a).aE(a)}
J.ey=function(a,b){return J.d(a).aF(a,b)}
J.ez=function(a,b,c){return J.d(a).aG(a,b,c)}
J.ce=function(a,b,c){return J.d(a).aJ(a,b,c)}
J.eA=function(a,b){return J.d(a).bG(a,b)}
J.cf=function(a){return J.aQ(a).dA(a)}
J.eB=function(a,b){return J.d(a).saf(a,b)}
J.eC=function(a,b){return J.d(a).sJ(a,b)}
J.eD=function(a,b,c,d){return J.d(a).aO(a,b,c,d)}
J.eE=function(a,b,c,d,e,f,g,h,i,j){return J.d(a).bI(a,b,c,d,e,f,g,h,i,j)}
J.eF=function(a,b,c,d){return J.d(a).bJ(a,b,c,d)}
J.aW=function(a,b,c,d){return J.d(a).bK(a,b,c,d)}
J.eG=function(a){return J.c2(a).dG(a)}
J.ai=function(a){return J.o(a).k(a)}
J.eH=function(a,b,c,d){return J.d(a).dI(a,b,c,d)}
J.eI=function(a){return J.c2(a).dJ(a)}
J.eJ=function(a,b,c){return J.d(a).bO(a,b,c)}
J.eK=function(a,b,c){return J.d(a).bP(a,b,c)}
J.bv=function(a,b,c){return J.d(a).bQ(a,b,c)}
J.eL=function(a,b,c){return J.d(a).bR(a,b,c)}
J.cg=function(a,b,c){return J.d(a).bS(a,b,c)}
J.ch=function(a,b,c){return J.d(a).bT(a,b,c)}
J.ci=function(a,b,c){return J.d(a).bU(a,b,c)}
J.cj=function(a,b,c,d){return J.d(a).bV(a,b,c,d)}
J.ck=function(a,b,c,d){return J.d(a).bW(a,b,c,d)}
J.eM=function(a,b){return J.d(a).bY(a,b)}
J.eN=function(a,b,c){return J.d(a).dK(a,b,c)}
J.eO=function(a,b,c,d,e,f,g){return J.d(a).bZ(a,b,c,d,e,f,g)}
J.eP=function(a,b,c,d,e){return J.d(a).c0(a,b,c,d,e)}
I.ag=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.t=W.bw.prototype
C.n=W.f2.prototype
C.D=W.f8.prototype
C.E=J.e.prototype
C.c=J.am.prototype
C.u=J.cF.prototype
C.a=J.cG.prototype
C.o=J.cH.prototype
C.i=J.ao.prototype
C.h=J.ap.prototype
C.L=J.aq.prototype
C.P=H.fH.prototype
C.Q=W.fJ.prototype
C.x=J.fN.prototype
C.C=W.hh.prototype
C.r=J.aO.prototype
C.a6=W.hr.prototype
C.e=new P.ik()
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
C.M=H.w(I.ag(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.N=I.ag(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.O=I.ag([])
C.p=H.w(I.ag(["bind","if","ref","repeat","syntax"]),[P.l])
C.q=H.w(I.ag(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
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
C.b=new G.t("float","",0)
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
$.cl=null
$.dV=null
$.dL=null
$.e0=null
$.bj=null
$.bl=null
$.c3=null
$.aa=null
$.au=null
$.av=null
$.bX=!1
$.x=C.e
$.Y=null
$.bB=null
$.cy=null
$.cx=null
$.cv=null
$.cu=null
$.ct=null
$.cs=null
$.dS=0
$.f0=" // range is [0, 1] \n vec3 HUEtoRGB(float hue) {\n    float r = clamp(abs(hue * 6.0 - 3.0) - 1.0, 0.0, 1.0);\n    float g = clamp(2.0 - abs(hue * 6.0 - 2.0), 0.0, 1.0);\n    float b = clamp(2.0 - abs(hue * 6.0 - 4.0), 0.0, 1.0);\n    return vec3(r, g, b);\n }\n \n vec3 HSLtoRGB(vec3 HSL) {\n     vec3 RGB = HUEtoRGB(HSL.x);\n     float C = (1.0 - abs(2.0 * HSL.z - 1.0)) * HSL.y;\n     return (RGB - 0.5) * C + HSL.z;\n  }\n"
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
I.$lazy(y,x,w)}})(["cq","$get$cq",function(){return H.dT("_$dart_dartClosure")},"bF","$get$bF",function(){return H.dT("_$dart_js")},"d4","$get$d4",function(){return H.S(H.bf({
toString:function(){return"$receiver$"}}))},"d5","$get$d5",function(){return H.S(H.bf({$method$:null,
toString:function(){return"$receiver$"}}))},"d6","$get$d6",function(){return H.S(H.bf(null))},"d7","$get$d7",function(){return H.S(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"db","$get$db",function(){return H.S(H.bf(void 0))},"dc","$get$dc",function(){return H.S(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"d9","$get$d9",function(){return H.S(H.da(null))},"d8","$get$d8",function(){return H.S(function(){try{null.$method$}catch(z){return z.message}}())},"de","$get$de",function(){return H.S(H.da(void 0))},"dd","$get$dd",function(){return H.S(function(){try{(void 0).$method$}catch(z){return z.message}}())},"bT","$get$bT",function(){return P.hu()},"aw","$get$aw",function(){return[]},"cp","$get$cp",function(){return{}},"dr","$get$dr",function(){return P.bI(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"bV","$get$bV",function(){return P.Z()},"N","$get$N",function(){return P.cL(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.A,"aColorAlpha",C.U,"aPosition",C.y,"aTexUV",C.a0,"aNormal",C.a3,"aBinormal",C.T,"aCenter",C.z,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a5,"aBitangent",C.R,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.y,"vPositionFromLight",C.S,"vCenter",C.z,"vDepth",C.Z,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a4,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a2,"uAnimationTable",C.f,"uTime",C.a1,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.W,"uLightDescs",C.X,"uLightCount",C.b,"uLightTypes",C.Y,"uBumpScale",C.a_,"uNormalScale",C.V])},"d2","$get$d2",function(){var z=new G.hj(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"dZ","$get$dZ",function(){var z=G.bO("nullShaderV")
z.cj(["aPosition"])
z.b=z.aV(!0,["gl_Position = vec4(aPosition, 1.0);"],null)
return z},"dQ","$get$dQ",function(){var z=G.bO("fireShaderF")
z.aQ(["uTexture","uFlameThrottle","uRandomSeed","uFlameWidth","uFlameHeight","uFlameTurbulence"])
z.aU(["float rand(vec2 xy){\n    return fract(sin(dot(xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n    \nfloat get(vec2 xy) {\n    vec2 DIM = vec2(textureSize(uTexture, 0));  \n    return texture(uTexture, xy / DIM).r;\n}\n\nfloat NextValue(vec2 xy) {\n    if (xy.y < 1.0) {\n        float r = rand(vec2(uRandomSeed, xy.x));\n        return get(xy) + (r - 0.5) * uFlameTurbulence; \n    }\n    \n    float height = uFlameHeight;\n    float width =  uFlameWidth;\n    return (4.0 * get(xy) +\n            get(xy + vec2(0.0, -height)) +\n            get(xy + vec2(-width,  -height)) +\n            get(xy + vec2(width,  -height)) +\n            get(xy + vec2(0.0, -2.0 * height))) * uFlameThrottle * 0.5;\n}\n\nvoid main() {\n    float v = NextValue(gl_FragCoord.xy);\n    oFragColor.r = v;\n}\n"])
return z},"dP","$get$dP",function(){var z=G.bO("colorShaderF")
z.aQ(["uTexture"])
z.aU([$.f0,"float get(vec2 xy) {\n    vec2 DIM = vec2(textureSize(uTexture, 0));  \n    return texture(uTexture, xy / DIM).r;\n}\n\nvoid main() {\n    float v  = get(gl_FragCoord.xy);\n    vec3 hsl = vec3(v / 3.0, 1.0, clamp(2.0 * v, 0.0, 1.0));\n    oFragColor.rgb = HSLtoRGB(hsl);\n}\n"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.q},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.C]},{func:1,ret:P.bZ,args:[W.ak,P.l,P.l,W.bU]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.ba]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[W.q,W.q]},{func:1,args:[P.C,P.c]},{func:1,args:[W.R]},{func:1,v:true,args:[P.az]},{func:1,ret:P.C,args:[,,]}]
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
if(x==y)H.jD(d||a)
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
Isolate.ag=a.ag
Isolate.ac=a.ac
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
if(typeof dartMainRunner==="function")dartMainRunner(X.dY,[])
else X.dY([])})})()
//# sourceMappingURL=fire.dart.js.map
