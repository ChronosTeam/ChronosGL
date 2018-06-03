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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isi)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aq=function(){}
var dart=[["","",,H,{"^":"",lY:{"^":"c;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
co:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b4:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cm==null){H.kA()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ca("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c_()]
if(v!=null)return v
v=H.kD(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$c_(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
i:{"^":"c;",
B:function(a,b){return a===b},
gw:function(a){return H.aJ(a)},
k:["cL",function(a){return"Instance of '"+H.aK(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h4:{"^":"i;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isci:1},
d9:{"^":"i;",
B:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isaW:1},
c0:{"^":"i;",
gw:function(a){return 0},
k:["cN",function(a){return String(a)}]},
hC:{"^":"c0;"},
b0:{"^":"c0;"},
aI:{"^":"c0;",
k:function(a){var z=a[$.$get$cQ()]
return z==null?this.cN(a):J.aA(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aE:{"^":"i;$ti",
M:function(a,b){var z,y
if(!!a.fixed$length)H.H(P.p("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.L(a))}},
a8:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.d(y,x)
y[x]=w}return y.join(b)},
b2:function(a,b){return H.dw(a,b,null,H.A(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cE:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.H(P.p("setRange"))
P.hM(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$ish){x=e
w=d}else{w=y.b2(d,e).en(0,!1)
x=0}y=J.a1(w)
if(x+z>y.gi(w))throw H.a(H.h1())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
ac:function(a,b,c,d){return this.cE(a,b,c,d,0)},
bB:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.L(a))}return!1},
cF:function(a,b){if(!!a.immutable$list)H.H(P.p("sort"))
H.hX(a,J.k4())},
ar:function(a){return this.cF(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.z(a[z],b))return!0
return!1},
k:function(a){return P.bZ(a,"[","]")},
gI:function(a){return new J.fk(a,a.length,0,null,[H.A(a,0)])},
gw:function(a){return H.aJ(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.H(P.p("set length"))
if(b<0)throw H.a(P.al(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a0(a,b))
if(b>=a.length||b<0)throw H.a(H.a0(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.H(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a0(a,b))
if(b>=a.length||b<0)throw H.a(H.a0(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.b.n(a.length,C.b.gi(b))
y=H.y([],[H.A(a,0)])
this.si(y,z)
this.ac(y,0,a.length,a)
this.ac(y,a.length,z,b)
return y},
$ism:1,
$asm:I.aq,
$ish:1,
p:{
aF:function(a){a.fixed$length=Array
return a},
lW:[function(a,b){return J.eG(a,b)},"$2","k4",8,0,21]}},
lX:{"^":"aE;$ti"},
fk:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aG:{"^":"i;",
P:function(a,b){var z
if(typeof b!=="number")throw H.a(H.M(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gam(b)
if(this.gam(a)===z)return 0
if(this.gam(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gam:function(a){return a===0?1/a<0:a<0},
em:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
dO:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".ceil()"))},
dP:function(a,b,c){if(this.P(b,c)>0)throw H.a(H.M(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
ep:function(a,b){var z
if(b>20)throw H.a(P.al(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gam(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a+b},
J:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a-b},
cP:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bu(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.bu(a,b)},
bu:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bs:function(a,b){var z
if(a>0)z=this.dz(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dz:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a<b},
aa:function(a,b){if(typeof b!=="number")throw H.a(H.M(b))
return a>b},
$isaP:1,
$isaR:1},
d8:{"^":"aG;",$isE:1},
d7:{"^":"aG;"},
aH:{"^":"i;",
aJ:function(a,b){if(b<0)throw H.a(H.a0(a,b))
if(b>=a.length)H.H(H.a0(a,b))
return a.charCodeAt(b)},
ag:function(a,b){if(b>=a.length)throw H.a(H.a0(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.fj(b,null,null))
return a+b},
eg:function(a,b,c){return H.kK(a,b,c)},
cG:function(a,b){var z=H.y(a.split(b),[P.l])
return z},
cI:function(a,b,c){var z
if(c>a.length)throw H.a(P.al(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cH:function(a,b){return this.cI(a,b,0)},
as:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.H(H.M(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.H(H.M(c))
if(b<0)throw H.a(P.bq(b,null,null))
if(typeof c!=="number")return H.G(c)
if(b>c)throw H.a(P.bq(b,null,null))
if(c>a.length)throw H.a(P.bq(c,null,null))
return a.substring(b,c)},
cJ:function(a,b){return this.as(a,b,null)},
eo:function(a){return a.toLowerCase()},
er:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.ag(z,0)===133){x=J.h5(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.aJ(z,w)===133?J.h6(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dS:function(a,b,c){if(c>a.length)throw H.a(P.al(c,0,a.length,null,null))
return H.kJ(a,b,c)},
P:function(a,b){var z
if(typeof b!=="string")throw H.a(H.M(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.a(H.a0(a,b))
return a[b]},
$ism:1,
$asm:I.aq,
$isl:1,
p:{
da:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
h5:function(a,b){var z,y
for(z=a.length;b<z;){y=C.i.ag(a,b)
if(y!==32&&y!==13&&!J.da(y))break;++b}return b},
h6:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.i.aJ(a,z)
if(y!==32&&y!==13&&!J.da(y))break}return b}}}}],["","",,H,{"^":"",
h0:function(){return new P.bu("No element")},
h2:function(){return new P.bu("Too many elements")},
h1:function(){return new P.bu("Too few elements")},
hX:function(a,b){H.aY(a,0,J.a4(a)-1,b)},
aY:function(a,b,c,d){if(c-b<=32)H.hW(a,b,c,d)
else H.hV(a,b,c,d)},
hW:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a1(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.P(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
hV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.Z(c-b+1,6)
y=b+z
x=c-z
w=C.b.Z(b+c,2)
v=w-z
u=w+z
t=J.a1(a)
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
if(J.z(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.B(i,0))continue
if(h.T(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aQ(i)
if(h.aa(i,0)){--l
continue}else{g=l-1
if(h.T(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.ax(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.P(d.$2(j,p),0))for(;!0;)if(J.P(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.ax(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.aY(a,b,m-2,d)
H.aY(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.z(d.$2(t.h(a,m),r),0);)++m
for(;J.z(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.z(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.z(d.$2(j,p),0))for(;!0;)if(J.z(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.ax(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.aY(a,m,l,d)}else H.aY(a,m,l,d)},
bU:{"^":"bk;$ti"},
bm:{"^":"bU;$ti",
gI:function(a){return new H.dg(this,this.gi(this),0,null,[H.cl(this,"bm",0)])},
v:function(a,b){var z,y
z=this.gi(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gi(this))throw H.a(P.L(this))}},
aS:function(a,b){return this.cM(0,b)}},
i9:{"^":"bm;a,b,c,$ti",
d0:function(a,b,c,d){},
gdi:function(){var z=J.a4(this.a)
return z},
gdA:function(){var z,y
z=J.a4(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a4(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdA()+b
if(b>=0){y=this.gdi()
if(typeof y!=="number")return H.G(y)
y=z>=y}else y=!0
if(y)throw H.a(P.v(b,this,"index",null,null))
return J.cu(this.a,z)},
en:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a1(y)
w=x.gi(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.y(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.d(t,s)
t[s]=u
if(x.gi(y)<w)throw H.a(P.L(this))}return t},
p:{
dw:function(a,b,c,d){var z=new H.i9(a,b,c,[d])
z.d0(a,b,c,d)
return z}}},
dg:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.a1(z)
x=y.gi(z)
if(this.b!==x)throw H.a(P.L(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
hi:{"^":"bm;a,b,$ti",
gi:function(a){return J.a4(this.a)},
q:function(a,b){return this.b.$1(J.cu(this.a,b))},
$asbU:function(a,b){return[b]},
$asbm:function(a,b){return[b]},
$asbk:function(a,b){return[b]}},
dR:{"^":"bk;a,b,$ti",
gI:function(a){return new H.ij(J.aT(this.a),this.b,this.$ti)}},
ij:{"^":"h3;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA(z))===!0)return!0
return!1},
gA:function(a){var z=this.a
return z.gA(z)}},
bi:{"^":"c;$ti"}}],["","",,H,{"^":"",
ks:function(a){return init.types[a]},
es:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$iso},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aA(a)
if(typeof z!=="string")throw H.a(H.M(a))
return z},
aJ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hL:function(a,b){var z,y
if(typeof a!=="string")H.H(H.M(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
hK:function(a){var z,y
if(typeof a!=="string")H.H(H.M(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.fa(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aK:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.n(a).$isb0){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.ag(w,0)===36)w=C.i.cJ(w,1)
r=H.bG(H.as(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
I:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hJ:function(a){return a.b?H.I(a).getUTCFullYear()+0:H.I(a).getFullYear()+0},
hH:function(a){return a.b?H.I(a).getUTCMonth()+1:H.I(a).getMonth()+1},
hD:function(a){return a.b?H.I(a).getUTCDate()+0:H.I(a).getDate()+0},
hE:function(a){return a.b?H.I(a).getUTCHours()+0:H.I(a).getHours()+0},
hG:function(a){return a.b?H.I(a).getUTCMinutes()+0:H.I(a).getMinutes()+0},
hI:function(a){return a.b?H.I(a).getUTCSeconds()+0:H.I(a).getSeconds()+0},
hF:function(a){return a.b?H.I(a).getUTCMilliseconds()+0:H.I(a).getMilliseconds()+0},
G:function(a){throw H.a(H.M(a))},
d:function(a,b){if(a==null)J.a4(a)
throw H.a(H.a0(a,b))},
a0:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aa(!0,b,"index",null)
z=J.a4(a)
if(!(b<0)){if(typeof z!=="number")return H.G(z)
y=b>=z}else y=!0
if(y)return P.v(b,a,"index",null,z)
return P.bq(b,"index",null)},
M:function(a){return new P.aa(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.bp()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ew})
z.name=""}else z.toString=H.ew
return z},
ew:function(){return J.aA(this.dartException)},
H:function(a){throw H.a(a)},
D:function(a){throw H.a(P.L(a))},
O:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bs(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c1(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dl(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dD()
u=$.$get$dE()
t=$.$get$dF()
s=$.$get$dG()
r=$.$get$dK()
q=$.$get$dL()
p=$.$get$dI()
$.$get$dH()
o=$.$get$dN()
n=$.$get$dM()
m=v.N(y)
if(m!=null)return z.$1(H.c1(y,m))
else{m=u.N(y)
if(m!=null){m.method="call"
return z.$1(H.c1(y,m))}else{m=t.N(y)
if(m==null){m=s.N(y)
if(m==null){m=r.N(y)
if(m==null){m=q.N(y)
if(m==null){m=p.N(y)
if(m==null){m=s.N(y)
if(m==null){m=o.N(y)
if(m==null){m=n.N(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dl(y,m))}}return z.$1(new H.ih(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ds()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aa(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ds()
return a},
a9:function(a){var z
if(a==null)return new H.e8(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e8(a,null)},
ko:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
kC:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.d_("Unsupported number of arguments for wrapped closure"))},
V:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kC)
a.$identity=z
return z},
ft:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$ish){z.$reflectionInfo=c
x=H.hO(z).r}else x=c
w=d?Object.create(new H.hZ().constructor.prototype):Object.create(new H.bR(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.W
$.W=J.aw(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cO(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.ks,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cM:H.bS
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cO(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fq:function(a,b,c,d){var z=H.bS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cO:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fs(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fq(y,!w,z,b)
if(y===0){w=$.W
$.W=J.aw(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.aB
if(v==null){v=H.bd("self")
$.aB=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.W
$.W=J.aw(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.aB
if(v==null){v=H.bd("self")
$.aB=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fr:function(a,b,c,d){var z,y
z=H.bS
y=H.cM
switch(b?-1:a){case 0:throw H.a(H.hS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fs:function(a,b){var z,y,x,w,v,u,t,s
z=$.aB
if(z==null){z=H.bd("self")
$.aB=z}y=$.cL
if(y==null){y=H.bd("receiver")
$.cL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fr(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.W
$.W=J.aw(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.W
$.W=J.aw(y,1)
return new Function(z+H.b(y)+"}")()},
cj:function(a,b,c,d,e,f){var z,y
z=J.aF(b)
y=!!J.n(c).$ish?J.aF(c):c
return H.ft(a,z,y,!!d,e,f)},
kH:function(a,b){var z=J.a1(b)
throw H.a(H.cN(a,z.as(b,3,z.gi(b))))},
a2:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.kH(a,b)},
ck:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
em:function(a,b){var z,y
if(a==null)return!1
z=H.ck(J.n(a))
if(z==null)y=!1
else y=H.er(z,b)
return y},
kc:function(a){var z
if(a instanceof H.f){z=H.ck(J.n(a))
if(z!=null)return H.cp(z,null)
return"Closure"}return H.aK(a)},
kO:function(a){throw H.a(new P.fx(a))},
ep:function(a){return init.getIsolateTag(a)},
y:function(a,b){a.$ti=b
return a},
as:function(a){if(a==null)return
return a.$ti},
nk:function(a,b,c){return H.aS(a["$as"+H.b(c)],H.as(b))},
b5:function(a,b,c,d){var z=H.aS(a["$as"+H.b(c)],H.as(b))
return z==null?null:z[d]},
cl:function(a,b,c){var z=H.aS(a["$as"+H.b(b)],H.as(a))
return z==null?null:z[c]},
A:function(a,b){var z=H.as(a)
return z==null?null:z[b]},
cp:function(a,b){var z=H.av(a,b)
return z},
av:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bG(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.av(z,b)
return H.k3(a,b)}return"unknown-reified-type"},
k3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.av(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.av(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.av(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kn(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.av(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bG:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c7("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.av(u,c)}return w?"":"<"+z.k(0)+">"},
kr:function(a){var z,y,x
if(a instanceof H.f){z=H.ck(J.n(a))
if(z!=null)return H.cp(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bG(a.$ti,0,null)
return y+x},
aS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b2:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.as(a)
y=J.n(a)
if(y[b]==null)return!1
return H.ek(H.aS(y[d],z),c)},
b6:function(a,b,c,d){var z,y
if(a==null)return a
z=H.b2(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bG(c,0,null)
throw H.a(H.cN(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ek:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.N(a[y],b[y]))return!1
return!0},
ni:function(a,b,c){return a.apply(b,H.aS(J.n(b)["$as"+H.b(c)],H.as(b)))},
N:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aW")return!0
if('func' in b)return H.er(a,b)
if('func' in a)return b.builtin$cls==="lP"||b.builtin$cls==="c"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cp(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.ek(H.aS(u,z),x)},
ej:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.N(z,v)||H.N(v,z)))return!1}return!0},
kd:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aF(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.N(v,u)||H.N(u,v)))return!1}return!0},
er:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.N(z,y)||H.N(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.ej(x,w,!1))return!1
if(!H.ej(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.N(o,n)||H.N(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.N(o,n)||H.N(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.N(o,n)||H.N(n,o)))return!1}}return H.kd(a.named,b.named)},
nj:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kD:function(a){var z,y,x,w,v,u
z=$.eq.$1(a)
y=$.bD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bF[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.ei.$2(a,z)
if(z!=null){y=$.bD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bF[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bH(x)
$.bD[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bF[z]=x
return x}if(v==="-"){u=H.bH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eu(a,x)
if(v==="*")throw H.a(P.ca(z))
if(init.leafTags[z]===true){u=H.bH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eu(a,x)},
eu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.co(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bH:function(a){return J.co(a,!1,null,!!a.$iso)},
kG:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bH(z)
else return J.co(z,c,null,null)},
kA:function(){if(!0===$.cm)return
$.cm=!0
H.kB()},
kB:function(){var z,y,x,w,v,u,t,s
$.bD=Object.create(null)
$.bF=Object.create(null)
H.kw()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ev.$1(v)
if(u!=null){t=H.kG(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kw:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.ap(C.H,H.ap(C.M,H.ap(C.u,H.ap(C.u,H.ap(C.L,H.ap(C.I,H.ap(C.J(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eq=new H.kx(v)
$.ei=new H.ky(u)
$.ev=new H.kz(t)},
ap:function(a,b){return a(b)||b},
kJ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
kL:function(a,b,c,d){var z,y,x
z=b.dk(a,d)
if(z==null)return a
y=z.b
x=y.index
return H.kN(a,x,x+y[0].length,c)},
kK:function(a,b,c){var z,y
z=b.gbp()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
kM:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.kL(a,b,c,d)},
kN:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
hN:{"^":"c;a,b,c,d,e,f,r,x",p:{
hO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aF(z)
y=z[0]
x=z[1]
return new H.hN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
id:{"^":"c;a,b,c,d,e,f",
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
p:{
Z:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.id(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hz:{"^":"F;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dl:function(a,b){return new H.hz(a,b==null?null:b.method)}}},
h8:{"^":"F;a,b,c",
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
return new H.h8(a,y,z?null:b.receiver)}}},
ih:{"^":"F;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kP:{"^":"f:0;a",
$1:function(a){if(!!J.n(a).$isF)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e8:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaL:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.aK(this).trim()+"'"},
gcA:function(){return this},
gcA:function(){return this}},
dx:{"^":"f;"},
hZ:{"^":"dx;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bR:{"^":"dx;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.aJ(this.a)
else y=typeof z!=="object"?J.a3(z):H.aJ(z)
return(y^H.aJ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aK(z)+"'")},
p:{
bS:function(a){return a.a},
cM:function(a){return a.c},
bd:function(a){var z,y,x,w,v
z=new H.bR("self","target","receiver","name")
y=J.aF(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fo:{"^":"F;a",
k:function(a){return this.a},
p:{
cN:function(a,b){return new H.fo("CastError: "+H.b(P.bW(a))+": type '"+H.kc(a)+"' is not a subtype of type '"+b+"'")}}},
hR:{"^":"F;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hS:function(a){return new H.hR(a)}}},
dO:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gw:function(a){return J.a3(this.a)},
B:function(a,b){if(b==null)return!1
return b instanceof H.dO&&J.z(this.a,b.a)}},
dc:{"^":"c4;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gK:function(a){return new H.he(this,[H.A(this,0)])},
ak:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bm(y,b)}else return this.e6(b)},
e6:function(a){var z=this.d
if(z==null)return!1
return this.aL(this.aB(z,J.a3(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ai(z,b)
x=y==null?null:y.ga7()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ai(w,b)
x=y==null?null:y.ga7()
return x}else return this.e7(b)},
e7:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aB(z,J.a3(a)&0x3ffffff)
x=this.aL(y,a)
if(x<0)return
return y[x].ga7()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aE()
this.b=z}this.be(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aE()
this.c=y}this.be(y,b,c)}else{x=this.d
if(x==null){x=this.aE()
this.d=x}w=J.a3(b)&0x3ffffff
v=this.aB(x,w)
if(v==null)this.aI(x,w,[this.av(b,c)])
else{u=this.aL(v,b)
if(u>=0)v[u].sa7(c)
else v.push(this.av(b,c))}}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.L(this))
z=z.c}},
be:function(a,b,c){var z=this.ai(a,b)
if(z==null)this.aI(a,b,this.av(b,c))
else z.sa7(c)},
bf:function(){this.r=this.r+1&67108863},
av:function(a,b){var z,y
z=new H.hd(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bf()
return z},
aL:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.z(a[y].ge5(),b))return y
return-1},
k:function(a){return P.dh(this)},
ai:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
aI:function(a,b,c){a[b]=c},
dg:function(a,b){delete a[b]},
bm:function(a,b){return this.ai(a,b)!=null},
aE:function(){var z=Object.create(null)
this.aI(z,"<non-identifier-key>",z)
this.dg(z,"<non-identifier-key>")
return z}},
hd:{"^":"c;e5:a<,a7:b@,c,d"},
he:{"^":"bU;a,$ti",
gi:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.ac(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.L(z))
y=y.c}}},
ac:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.L(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kx:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
ky:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
kz:{"^":"f:11;a",
$1:function(a){return this.a(a)}},
h7:{"^":"c;a,b,c,d",
k:function(a){return"RegExp/"+this.a+"/"},
gbp:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.db(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
dk:function(a,b){var z,y
z=this.gbp()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.j8(this,y)},
p:{
db:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.bY("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
j8:{"^":"c;a,b",
h:function(a,b){var z=this.b
if(b>=z.length)return H.d(z,b)
return z[b]}}}],["","",,H,{"^":"",
kn:function(a){return J.aF(H.y(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
au:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bB:function(a){var z,y,x
if(!!J.n(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a0(b,a))},
hv:{"^":"i;","%":"DataView;ArrayBufferView;c5|e2|e3|di|e4|e5|ad"},
c5:{"^":"hv;",
gi:function(a){return a.length},
$ism:1,
$asm:I.aq,
$iso:1,
$aso:I.aq},
di:{"^":"e3;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$asbi:function(){return[P.aP]},
$asj:function(){return[P.aP]},
$ish:1,
$ash:function(){return[P.aP]},
"%":"Float64Array"},
ad:{"^":"e5;",
j:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$asbi:function(){return[P.E]},
$asj:function(){return[P.E]},
$ish:1,
$ash:function(){return[P.E]}},
hu:{"^":"di;",$isbX:1,"%":"Float32Array"},
mc:{"^":"ad;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int16Array"},
md:{"^":"ad;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
$isfZ:1,
"%":"Int32Array"},
me:{"^":"ad;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mf:{"^":"ad;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mg:{"^":"ad;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mh:{"^":"ad;",
gi:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mi:{"^":"ad;",
gi:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e2:{"^":"c5+j;"},
e3:{"^":"e2+bi;"},
e4:{"^":"c5+j;"},
e5:{"^":"e4+bi;"}}],["","",,P,{"^":"",
ir:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ke()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.V(new P.it(z),1)).observe(y,{childList:true})
return new P.is(z,y,x)}else if(self.setImmediate!=null)return P.kf()
return P.kg()},
n5:[function(a){self.scheduleImmediate(H.V(new P.iu(a),0))},"$1","ke",4,0,6],
n6:[function(a){self.setImmediate(H.V(new P.iv(a),0))},"$1","kf",4,0,6],
n7:[function(a){P.jH(0,a)},"$1","kg",4,0,6],
k7:function(a,b){if(H.em(a,{func:1,args:[P.aW,P.aW]})){b.toString
return a}else{b.toString
return a}},
fQ:function(a,b,c){var z
if(a==null)a=new P.bp()
z=$.q
if(z!==C.d)z.toString
z=new P.K(0,z,null,[c])
z.bi(a,b)
return z},
fR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.K(0,$.q,null,[P.h])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fT(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aQ(new P.fS(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.K(0,$.q,null,[null])
r.bh(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.O(p)
t=H.a9(p)
if(z.b===0||!1)return P.fQ(u,t,null)
else{z.c=u
z.d=t}}return y},
k6:function(){var z,y
for(;z=$.an,z!=null;){$.aN=null
y=z.b
$.an=y
if(y==null)$.aM=null
z.a.$0()}},
nh:[function(){$.cg=!0
try{P.k6()}finally{$.aN=null
$.cg=!1
if($.an!=null)$.$get$cb().$1(P.el())}},"$0","el",0,0,3],
eg:function(a){var z=new P.dS(a,null)
if($.an==null){$.aM=z
$.an=z
if(!$.cg)$.$get$cb().$1(P.el())}else{$.aM.b=z
$.aM=z}},
kb:function(a){var z,y,x
z=$.an
if(z==null){P.eg(a)
$.aN=$.aM
return}y=new P.dS(a,null)
x=$.aN
if(x==null){y.b=z
$.aN=y
$.an=y}else{y.b=x.b
x.b=y
$.aN=y
if(y.b==null)$.aM=y}},
kI:function(a){var z=$.q
if(C.d===z){P.ao(null,null,C.d,a)
return}z.toString
P.ao(null,null,z,z.bE(a))},
ka:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.O(u)
y=H.a9(u)
$.q.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.az(x)
w=t
v=x.gX()
c.$2(w,v)}}},
jZ:function(a,b,c,d){var z=a.dN(0)
if(!!J.n(z).$isab&&z!==$.$get$d3())z.eu(new P.k1(b,c,d))
else b.H(c,d)},
k_:function(a,b){return new P.k0(a,b)},
bC:function(a,b,c,d,e){var z={}
z.a=d
P.kb(new P.k8(z,e))},
ee:function(a,b,c,d){var z,y
y=$.q
if(y===c)return d.$0()
$.q=c
z=y
try{y=d.$0()
return y}finally{$.q=z}},
ef:function(a,b,c,d,e){var z,y
y=$.q
if(y===c)return d.$1(e)
$.q=c
z=y
try{y=d.$1(e)
return y}finally{$.q=z}},
k9:function(a,b,c,d,e,f){var z,y
y=$.q
if(y===c)return d.$2(e,f)
$.q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.q=z}},
ao:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bE(d):c.dK(d)
P.eg(d)},
it:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
is:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iu:{"^":"f:1;a",
$0:function(){this.a.$0()}},
iv:{"^":"f:1;a",
$0:function(){this.a.$0()}},
jG:{"^":"c;a,b,c",
da:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.V(new P.jI(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
jH:function(a,b){var z=new P.jG(!0,null,0)
z.da(a,b)
return z}}},
jI:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ab:{"^":"c;$ti"},
fT:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.H(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.H(z.c,z.d)}},
fS:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.d(x,z)
x[z]=a
if(y===0)this.c.bl(x)}else if(z.b===0&&!this.e)this.c.H(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
l1:{"^":"c;$ti"},
dV:{"^":"c;$ti",
dR:function(a,b){if(a==null)a=new P.bp()
if(this.a.a!==0)throw H.a(P.b_("Future already completed"))
$.q.toString
this.H(a,b)},
dQ:function(a){return this.dR(a,null)}},
dT:{"^":"dV;a,$ti",
aj:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b_("Future already completed"))
z.bh(b)},
H:function(a,b){this.a.bi(a,b)}},
jB:{"^":"dV;a,$ti",
aj:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b_("Future already completed"))
z.ah(b)},
H:function(a,b){this.a.H(a,b)}},
dW:{"^":"c;aG:a<,b,c,d,e,$ti",
gdF:function(){return this.b.b},
gc4:function(){return(this.c&1)!==0},
ge4:function(){return(this.c&2)!==0},
gc3:function(){return this.c===8},
e2:function(a){return this.b.b.aO(this.d,a)},
e8:function(a){if(this.c!==6)return!0
return this.b.b.aO(this.d,J.az(a))},
e1:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.em(z,{func:1,args:[P.c,P.aL]}))return x.eh(z,y.gL(a),a.gX())
else return x.aO(z,y.gL(a))},
e3:function(){return this.b.b.ce(this.d)}},
K:{"^":"c;bt:a<,b,dt:c<,$ti",
gdm:function(){return this.a===2},
gaC:function(){return this.a>=4},
aQ:function(a,b){var z,y,x
z=$.q
if(z!==C.d){z.toString
if(b!=null)b=P.k7(b,z)}y=new P.K(0,z,null,[null])
x=b==null?1:3
this.aw(new P.dW(null,y,x,a,b,[H.A(this,0),null]))
return y},
aP:function(a){return this.aQ(a,null)},
eu:function(a){var z,y
z=$.q
y=new P.K(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.A(this,0)
this.aw(new P.dW(null,y,8,a,null,[z,z]))
return y},
aw:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaC()){y.aw(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.ao(null,null,z,new P.iO(this,a))}},
bq:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaG()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaC()){v.bq(a)
return}this.a=v.a
this.c=v.c}z.a=this.aH(a)
y=this.b
y.toString
P.ao(null,null,y,new P.iV(z,this))}},
a3:function(){var z=this.c
this.c=null
return this.aH(z)},
aH:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaG()
z.a=y}return y},
ah:function(a){var z,y,x
z=this.$ti
y=H.b2(a,"$isab",z,"$asab")
if(y){z=H.b2(a,"$isK",z,null)
if(z)P.bA(a,this)
else P.dX(a,this)}else{x=this.a3()
this.a=4
this.c=a
P.am(this,x)}},
bl:function(a){var z=this.a3()
this.a=4
this.c=a
P.am(this,z)},
H:[function(a,b){var z=this.a3()
this.a=8
this.c=new P.bc(a,b)
P.am(this,z)},function(a){return this.H(a,null)},"ey","$2","$1","gbk",4,2,13],
bh:function(a){var z=H.b2(a,"$isab",this.$ti,"$asab")
if(z){this.de(a)
return}this.a=1
z=this.b
z.toString
P.ao(null,null,z,new P.iQ(this,a))},
de:function(a){var z=H.b2(a,"$isK",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.ao(null,null,z,new P.iU(this,a))}else P.bA(a,this)
return}P.dX(a,this)},
bi:function(a,b){var z
this.a=1
z=this.b
z.toString
P.ao(null,null,z,new P.iP(this,a,b))},
$isab:1,
p:{
iN:function(a,b){var z=new P.K(0,$.q,null,[b])
z.a=4
z.c=a
return z},
dX:function(a,b){var z,y,x
b.a=1
try{a.aQ(new P.iR(b),new P.iS(b))}catch(x){z=H.O(x)
y=H.a9(x)
P.kI(new P.iT(b,z,y))}},
bA:function(a,b){var z
for(;a.gdm();)a=a.c
if(a.gaC()){z=b.a3()
b.a=a.a
b.c=a.c
P.am(b,z)}else{z=b.c
b.a=2
b.c=a
a.bq(z)}},
am:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.az(v)
t=v.gX()
y.toString
P.bC(null,null,y,u,t)}return}for(;b.gaG()!=null;b=s){s=b.a
b.a=null
P.am(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc4()||b.gc3()){q=b.gdF()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.az(v)
t=v.gX()
y.toString
P.bC(null,null,y,u,t)
return}p=$.q
if(p==null?q!=null:p!==q)$.q=q
else p=null
if(b.gc3())new P.iY(z,x,b,w).$0()
else if(y){if(b.gc4())new P.iX(x,b,r).$0()}else if(b.ge4())new P.iW(z,x,b).$0()
if(p!=null)$.q=p
y=x.b
if(!!J.n(y).$isab){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aH(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bA(y,o)
return}}o=b.b
b=o.a3()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iO:{"^":"f:1;a,b",
$0:function(){P.am(this.a,this.b)}},
iV:{"^":"f:1;a,b",
$0:function(){P.am(this.b,this.a.a)}},
iR:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.ah(a)}},
iS:{"^":"f:14;a",
$2:function(a,b){this.a.H(a,b)},
$1:function(a){return this.$2(a,null)}},
iT:{"^":"f:1;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
iQ:{"^":"f:1;a,b",
$0:function(){this.a.bl(this.b)}},
iU:{"^":"f:1;a,b",
$0:function(){P.bA(this.b,this.a)}},
iP:{"^":"f:1;a,b,c",
$0:function(){this.a.H(this.b,this.c)}},
iY:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e3()}catch(w){y=H.O(w)
x=H.a9(w)
if(this.d){v=J.az(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bc(y,x)
u.a=!0
return}if(!!J.n(z).$isab){if(z instanceof P.K&&z.gbt()>=4){if(z.gbt()===8){v=this.b
v.b=z.gdt()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.aP(new P.iZ(t))
v.a=!1}}},
iZ:{"^":"f:0;a",
$1:function(a){return this.a}},
iX:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e2(this.c)}catch(x){z=H.O(x)
y=H.a9(x)
w=this.a
w.b=new P.bc(z,y)
w.a=!0}}},
iW:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e8(z)===!0&&w.e!=null){v=this.b
v.b=w.e1(z)
v.a=!1}}catch(u){y=H.O(u)
x=H.a9(u)
w=this.a
v=J.az(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bc(y,x)
s.a=!0}}},
dS:{"^":"c;a,b"},
du:{"^":"c;$ti",
v:function(a,b){var z,y
z={}
y=new P.K(0,$.q,null,[null])
z.a=null
z.a=this.c7(new P.i5(z,this,b,y),!0,new P.i6(y),y.gbk())
return y},
gi:function(a){var z,y
z={}
y=new P.K(0,$.q,null,[P.E])
z.a=0
this.c7(new P.i7(z),!0,new P.i8(z,y),y.gbk())
return y}},
i5:{"^":"f;a,b,c,d",
$1:function(a){P.ka(new P.i3(this.c,a),new P.i4(),P.k_(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cl(this.b,"du",0)]}}},
i3:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
i4:{"^":"f:0;",
$1:function(a){}},
i6:{"^":"f:1;a",
$0:function(){this.a.ah(null)}},
i7:{"^":"f:0;a",
$1:function(a){++this.a.a}},
i8:{"^":"f:1;a,b",
$0:function(){this.b.ah(this.a.a)}},
i2:{"^":"c;$ti"},
k1:{"^":"f:1;a,b,c",
$0:function(){return this.a.H(this.b,this.c)}},
k0:{"^":"f:15;a,b",
$2:function(a,b){P.jZ(this.a,this.b,a,b)}},
bc:{"^":"c;L:a>,X:b<",
k:function(a){return H.b(this.a)},
$isF:1},
jO:{"^":"c;"},
k8:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bp()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aA(y)
throw x}},
jk:{"^":"jO;",
ei:function(a){var z,y,x
try{if(C.d===$.q){a.$0()
return}P.ee(null,null,this,a)}catch(x){z=H.O(x)
y=H.a9(x)
P.bC(null,null,this,z,y)}},
ej:function(a,b){var z,y,x
try{if(C.d===$.q){a.$1(b)
return}P.ef(null,null,this,a,b)}catch(x){z=H.O(x)
y=H.a9(x)
P.bC(null,null,this,z,y)}},
dK:function(a){return new P.jm(this,a)},
bE:function(a){return new P.jl(this,a)},
dL:function(a){return new P.jn(this,a)},
h:function(a,b){return},
ce:function(a){if($.q===C.d)return a.$0()
return P.ee(null,null,this,a)},
aO:function(a,b){if($.q===C.d)return a.$1(b)
return P.ef(null,null,this,a,b)},
eh:function(a,b,c){if($.q===C.d)return a.$2(b,c)
return P.k9(null,null,this,a,b,c)}},
jm:{"^":"f:1;a,b",
$0:function(){return this.a.ce(this.b)}},
jl:{"^":"f:1;a,b",
$0:function(){return this.a.ei(this.b)}},
jn:{"^":"f:0;a,b",
$1:function(a){return this.a.ej(this.b,a)}}}],["","",,P,{"^":"",
C:function(){return new H.dc(0,null,null,null,null,null,0,[null,null])},
de:function(a){return H.ko(a,new H.dc(0,null,null,null,null,null,0,[null,null]))},
S:function(a,b,c,d){return new P.j6(0,null,null,null,null,null,0,[d])},
h_:function(a,b,c){var z,y
if(P.ch(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aO()
y.push(a)
try{P.k5(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.dv(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bZ:function(a,b,c){var z,y,x
if(P.ch(a))return b+"..."+c
z=new P.c7(b)
y=$.$get$aO()
y.push(a)
try{x=z
x.a=P.dv(x.gY(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gY()+c
y=z.gY()
return y.charCodeAt(0)==0?y:y},
ch:function(a){var z,y
for(z=0;y=$.$get$aO(),z<y.length;++z)if(a===y[z])return!0
return!1},
k5:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
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
c2:function(a,b){var z,y
z=P.S(null,null,null,b)
for(y=J.aT(a);y.t();)z.O(0,y.gA(y))
return z},
dh:function(a){var z,y,x
z={}
if(P.ch(a))return"{...}"
y=new P.c7("")
try{$.$get$aO().push(a)
x=y
x.a=x.gY()+"{"
z.a=!0
J.cv(a,new P.hh(z,y))
z=y
z.a=z.gY()+"}"}finally{z=$.$get$aO()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gY()
return z.charCodeAt(0)==0?z:z},
j6:{"^":"j0;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.ce(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.df(b)},
df:function(a){var z=this.d
if(z==null)return!1
return this.aA(z[this.ax(a)],a)>=0},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.L(this))
z=z.b}},
O:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cf()
this.b=z}return this.bg(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cf()
this.c=y}return this.bg(y,b)}else return this.dc(0,b)},
dc:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cf()
this.d=z}y=this.ax(b)
x=z[y]
if(x==null)z[y]=[this.aF(b)]
else{if(this.aA(x,b)>=0)return!1
x.push(this.aF(b))}return!0},
cd:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.br(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.br(this.c,b)
else return this.dq(0,b)},
dq:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.ax(b)]
x=this.aA(y,b)
if(x<0)return!1
this.bv(y.splice(x,1)[0])
return!0},
a5:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aD()}},
bg:function(a,b){if(a[b]!=null)return!1
a[b]=this.aF(b)
return!0},
br:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bv(z)
delete a[b]
return!0},
aD:function(){this.r=this.r+1&67108863},
aF:function(a){var z,y
z=new P.j7(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aD()
return z},
bv:function(a){var z,y
z=a.gdn()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aD()},
ax:function(a){return J.a3(a)&0x3ffffff},
aA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.z(a[y].gdh(),b))return y
return-1},
p:{
cf:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
j7:{"^":"c;dh:a<,b,dn:c<"},
ce:{"^":"c;a,b,c,d,$ti",
gA:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.L(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
j0:{"^":"hT;$ti"},
m0:{"^":"c;$ti"},
df:{"^":"e1;$ti",$ish:1},
j:{"^":"c;$ti",
gI:function(a){return new H.dg(a,this.gi(a),0,null,[H.b5(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.a(P.L(a))}},
e_:function(a,b,c){var z,y,x
z=this.gi(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.a(P.L(a))}return y},
b2:function(a,b){return H.dw(a,b,null,H.b5(this,a,"j",0))},
n:function(a,b){var z=H.y([],[H.b5(this,a,"j",0)])
C.c.si(z,C.b.n(this.gi(a),C.b.gi(b)))
C.c.ac(z,0,this.gi(a),a)
C.c.ac(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.bZ(a,"[","]")}},
c4:{"^":"Q;$ti"},
hh:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
Q:{"^":"c;$ti",
v:function(a,b){var z,y
for(z=J.aT(this.gK(a));z.t();){y=z.gA(z)
b.$2(y,this.h(a,y))}},
gi:function(a){return J.a4(this.gK(a))},
k:function(a){return P.dh(a)}},
hU:{"^":"c;$ti",
M:function(a,b){var z
for(z=J.aT(b);z.t();)this.O(0,z.gA(z))},
k:function(a){return P.bZ(this,"{","}")},
v:function(a,b){var z
for(z=new P.ce(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hT:{"^":"hU;$ti"},
e1:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
cn:function(a,b,c){var z=H.hL(a,c)
if(z!=null)return z
throw H.a(P.bY(a,null,null))},
ai:function(a,b){var z=H.hK(a)
if(z!=null)return z
throw H.a(P.bY("Invalid double",a,null))},
fJ:function(a){var z=J.n(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aK(a)+"'"},
dp:function(a,b,c){return new H.h7(a,H.db(a,!1,!0,!1),null,null)},
bW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aA(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fJ(a)},
d_:function(a){return new P.iK(a)},
aj:function(a){H.au(H.b(a))},
ci:{"^":"c;"},
"+bool":0,
bf:{"^":"c;dE:a<,b",
ge9:function(){return this.a},
cS:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.a(P.fi("DateTime is outside valid range: "+this.ge9()))},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.gdE())},
gw:function(a){var z=this.a
return(z^C.b.bs(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fy(H.hJ(this))
y=P.aU(H.hH(this))
x=P.aU(H.hD(this))
w=P.aU(H.hE(this))
v=P.aU(H.hG(this))
u=P.aU(H.hI(this))
t=P.fz(H.hF(this))
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
aU:function(a){if(a>=10)return""+a
return"0"+a}}},
aP:{"^":"aR;"},
"+double":0,
aV:{"^":"c;a2:a<",
n:function(a,b){return new P.aV(C.b.n(this.a,b.ga2()))},
J:function(a,b){return new P.aV(this.a-b.ga2())},
T:function(a,b){return C.b.T(this.a,b.ga2())},
aa:function(a,b){return C.b.aa(this.a,b.ga2())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aV))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.ga2())},
k:function(a){var z,y,x,w,v
z=new P.fF()
y=this.a
if(y<0)return"-"+new P.aV(0-y).k(0)
x=z.$1(C.b.Z(y,6e7)%60)
w=z.$1(C.b.Z(y,1e6)%60)
v=new P.fE().$1(y%1e6)
return""+C.b.Z(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
cX:function(a,b,c,d,e,f){return new P.aV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fE:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fF:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
F:{"^":"c;",
gX:function(){return H.a9(this.$thrownJsError)}},
bp:{"^":"F;",
k:function(a){return"Throw of null."}},
aa:{"^":"F;a,b,c,d",
gaz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gay:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gaz()+y+x
if(!this.a)return w
v=this.gay()
u=P.bW(this.b)
return w+v+": "+H.b(u)},
p:{
fi:function(a){return new P.aa(!1,null,null,a)},
fj:function(a,b,c){return new P.aa(!0,a,b,c)}}},
dn:{"^":"aa;e,f,a,b,c,d",
gaz:function(){return"RangeError"},
gay:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bq:function(a,b,c){return new P.dn(null,null,!0,a,b,"Value not in range")},
al:function(a,b,c,d,e){return new P.dn(b,c,!0,a,d,"Invalid value")},
hM:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.al(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.al(b,a,c,"end",f))
return b}}},
fY:{"^":"aa;e,i:f>,a,b,c,d",
gaz:function(){return"RangeError"},
gay:function(){if(J.ax(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
v:function(a,b,c,d,e){var z=e!=null?e:J.a4(b)
return new P.fY(b,z,!0,a,c,"Index out of range")}}},
ii:{"^":"F;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.ii(a)}}},
ig:{"^":"F;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
ca:function(a){return new P.ig(a)}}},
bu:{"^":"F;a",
k:function(a){return"Bad state: "+this.a},
p:{
b_:function(a){return new P.bu(a)}}},
fu:{"^":"F;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bW(z))+"."},
p:{
L:function(a){return new P.fu(a)}}},
ds:{"^":"c;",
k:function(a){return"Stack Overflow"},
gX:function(){return},
$isF:1},
fx:{"^":"F;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
ln:{"^":"c;"},
iK:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
fP:{"^":"c;a,b,c",
k:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.b(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.as(x,0,75)+"..."
return y+"\n"+x},
p:{
bY:function(a,b,c){return new P.fP(a,b,c)}}},
E:{"^":"aR;"},
"+int":0,
bk:{"^":"c;$ti",
aS:["cM",function(a,b){return new H.dR(this,b,[H.cl(this,"bk",0)])}],
v:function(a,b){var z
for(z=this.gI(this);z.t();)b.$1(z.gA(z))},
gi:function(a){var z,y
z=this.gI(this)
for(y=0;z.t();)++y
return y},
gW:function(a){var z,y
z=this.gI(this)
if(!z.t())throw H.a(H.h0())
y=z.gA(z)
if(z.t())throw H.a(H.h2())
return y},
q:function(a,b){var z,y,x
if(b<0)H.H(P.al(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.t();){x=z.gA(z)
if(b===y)return x;++y}throw H.a(P.v(b,this,"index",null,y))},
k:function(a){return P.h_(this,"(",")")}},
h3:{"^":"c;$ti"},
h:{"^":"c;$ti"},
"+List":0,
c3:{"^":"c;$ti"},
aW:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aR:{"^":"c;"},
"+num":0,
c:{"^":";",
B:function(a,b){return this===b},
gw:function(a){return H.aJ(this)},
k:function(a){return"Instance of '"+H.aK(this)+"'"},
toString:function(){return this.k(this)}},
my:{"^":"c;"},
aL:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
c7:{"^":"c;Y:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dv:function(a,b,c){var z=J.aT(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gA(z))
while(z.t())}else{a+=H.b(z.gA(z))
for(;z.t();)a=a+c+H.b(z.gA(z))}return a}}}}],["","",,W,{"^":"",
km:function(){return document},
fG:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).R(z,a,b,c)
y.toString
z=new H.dR(new W.T(y),new W.fH(),[W.r])
return z.gW(z)},
fI:function(a){return"wheel"},
aC:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eU(a)
if(typeof y==="string")z=a.tagName}catch(x){H.O(x)}return z},
iG:function(a,b){return document.createElement(a)},
ah:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ed:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iA(a)
if(!!J.n(z).$isB)return z
return}else return a},
k2:function(a){var z
if(!!J.n(a).$iscW)return a
z=new P.io([],[],!1)
z.c=!0
return z.aR(a)},
eh:function(a){var z=$.q
if(z===C.d)return a
return z.dL(a)},
t:{"^":"ak;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kQ:{"^":"c6;l:x=,m:y=,E:z=","%":"Accelerometer|LinearAccelerationSensor"},
kR:{"^":"i;i:length=","%":"AccessibleNodeList"},
kS:{"^":"t;al:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kT:{"^":"t;al:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kX:{"^":"t;al:href}","%":"HTMLBaseElement"},
bQ:{"^":"t;",$isbQ:1,"%":"HTMLBodyElement"},
kY:{"^":"t;G:name=","%":"HTMLButtonElement"},
kZ:{"^":"t;C:height},D:width}",
cB:function(a,b,c){var z=a.getContext(b,P.kh(c,null))
return z},
"%":"HTMLCanvasElement"},
l_:{"^":"i;",
aq:function(a){return P.R(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
l0:{"^":"r;i:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l2:{"^":"X;U:style=","%":"CSSFontFaceRule"},
l3:{"^":"X;U:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
l4:{"^":"X;U:style=","%":"CSSPageRule"},
l5:{"^":"be;i:length=","%":"CSSPerspective"},
l6:{"^":"bT;l:x=,m:y=","%":"CSSPositionValue"},
l7:{"^":"be;l:x=,m:y=,E:z=","%":"CSSRotation"},
X:{"^":"i;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
l8:{"^":"be;l:x=,m:y=,E:z=","%":"CSSScale"},
fv:{"^":"iy;i:length=",
bj:function(a,b){var z,y
z=$.$get$cP()
y=z[b]
if(typeof y==="string")return y
y=this.dB(a,b)
z[b]=y
return y},
dB:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fA()+b
if(z in a)return z
return b},
dw:function(a,b,c,d){a.setProperty(b,c,d)},
sC:function(a,b){a.height=b},
sD:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fw:{"^":"c;",
sdZ:function(a,b){this.dw(a,this.bj(a,"float"),b,"")}},
l9:{"^":"X;U:style=","%":"CSSStyleRule"},
bT:{"^":"i;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
be:{"^":"i;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
la:{"^":"bT;i:length=","%":"CSSTransformValue"},
lb:{"^":"be;l:x=,m:y=,E:z=","%":"CSSTranslation"},
lc:{"^":"bT;i:length=","%":"CSSUnparsedValue"},
ld:{"^":"X;U:style=","%":"CSSViewportRule"},
le:{"^":"i;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lf:{"^":"i;l:x=,m:y=,E:z=","%":"DeviceAcceleration"},
fB:{"^":"t;","%":"HTMLDivElement"},
cW:{"^":"r;",$iscW:1,"%":"Document|HTMLDocument|XMLDocument"},
lg:{"^":"i;",
k:function(a){return String(a)},
"%":"DOMException"},
lh:{"^":"fC;",
gap:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gE:function(a){return a.z},
"%":"DOMPoint"},
fC:{"^":"i;",
gap:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gE:function(a){return a.z},
"%":";DOMPointReadOnly"},
li:{"^":"iC;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a8]},
$iso:1,
$aso:function(){return[P.a8]},
$asj:function(){return[P.a8]},
$ish:1,
$ash:function(){return[P.a8]},
$ask:function(){return[P.a8]},
"%":"ClientRectList|DOMRectList"},
fD:{"^":"i;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gD(a))+" x "+H.b(this.gC(a))},
B:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa8)return!1
return a.left===z.gc5(b)&&a.top===z.gci(b)&&this.gD(a)===z.gD(b)&&this.gC(a)===z.gC(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gD(a)
w=this.gC(a)
return W.e0(W.ah(W.ah(W.ah(W.ah(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcj:function(a){return new P.a7(a.left,a.top,[null])},
gC:function(a){return a.height},
gc5:function(a){return a.left},
gci:function(a){return a.top},
gD:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa8:1,
$asa8:I.aq,
"%":";DOMRectReadOnly"},
lj:{"^":"iE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$iso:1,
$aso:function(){return[P.l]},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
lk:{"^":"i;i:length=","%":"DOMTokenList"},
ak:{"^":"r;U:style=,bo:namespaceURI=,ek:tagName=",
gdI:function(a){return new W.iF(a)},
k:function(a){return a.localName},
R:["at",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cZ
if(z==null){z=H.y([],[W.dj])
y=new W.dk(z)
z.push(W.dY(null))
z.push(W.e9())
$.cZ=y
d=y}else d=z
z=$.cY
if(z==null){z=new W.ec(d)
$.cY=z
c=z}else{z.a=d
c=z}}if($.a5==null){z=document
y=z.implementation.createHTMLDocument("")
$.a5=y
$.bV=y.createRange()
y=$.a5
y.toString
x=y.createElement("base")
J.f4(x,z.baseURI)
$.a5.head.appendChild(x)}z=$.a5
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a5
if(!!this.$isbQ)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a5.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.u(C.P,a.tagName)){$.bV.selectNodeContents(w)
v=$.bV.createContextualFragment(b)}else{w.innerHTML=b
v=$.a5.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a5.body
if(w==null?z!=null:w!==z)J.cC(w)
c.b0(v)
document.adoptNode(v)
return v},function(a,b,c){return this.R(a,b,c,null)},"dT",null,null,"gez",5,5,null],
cD:function(a,b,c,d){a.textContent=null
a.appendChild(this.R(a,b,c,d))},
cC:function(a,b){return this.cD(a,b,null,null)},
aT:function(a){return a.getBoundingClientRect()},
gc9:function(a){return new W.af(a,"mousedown",!1,[W.Y])},
gca:function(a){return new W.af(a,"mousemove",!1,[W.Y])},
gcb:function(a){return new W.af(a,"mouseup",!1,[W.Y])},
gcc:function(a){return new W.af(a,W.fI(a),!1,[W.b1])},
$isak:1,
"%":";Element"},
fH:{"^":"f:0;",
$1:function(a){return!!J.n(a).$isak}},
ll:{"^":"t;C:height},G:name=,D:width}","%":"HTMLEmbedElement"},
lm:{"^":"bg;L:error=","%":"ErrorEvent"},
bg:{"^":"i;",
ao:function(a){return a.preventDefault()},
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
B:{"^":"i;",
bA:["cK",function(a,b,c,d){if(c!=null)this.dd(a,b,c,!1)}],
dd:function(a,b,c,d){return a.addEventListener(b,H.V(c,1),!1)},
dr:function(a,b,c,d){return a.removeEventListener(b,H.V(c,1),!1)},
$isB:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e6|e7|ea|eb"},
lG:{"^":"t;G:name=","%":"HTMLFieldSetElement"},
lH:{"^":"iM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bh]},
$iso:1,
$aso:function(){return[W.bh]},
$asj:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$ask:function(){return[W.bh]},
"%":"FileList"},
lI:{"^":"B;L:error=","%":"FileReader"},
lJ:{"^":"B;L:error=,i:length=","%":"FileWriter"},
lL:{"^":"i;U:style=","%":"FontFace"},
lM:{"^":"B;",
eA:function(a,b,c){return a.forEach(H.V(b,3),c)},
v:function(a,b){b=H.V(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lO:{"^":"t;i:length=,G:name=","%":"HTMLFormElement"},
lQ:{"^":"c6;l:x=,m:y=,E:z=","%":"Gyroscope"},
lR:{"^":"i;i:length=","%":"History"},
lS:{"^":"j2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$iso:1,
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fV:{"^":"fW;",
eB:function(a,b,c,d,e,f){return a.open(b,c)},
ed:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
fW:{"^":"B;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
lT:{"^":"t;C:height},G:name=,D:width}","%":"HTMLIFrameElement"},
lU:{"^":"t;C:height},D:width}","%":"HTMLImageElement"},
d6:{"^":"t;C:height},G:name=,D:width}",$isd6:1,"%":"HTMLInputElement"},
bl:{"^":"dQ;",
gev:function(a){return a.which},
$isbl:1,
"%":"KeyboardEvent"},
m_:{"^":"t;al:href}","%":"HTMLLinkElement"},
m1:{"^":"i;",
k:function(a){return String(a)},
"%":"Location"},
m2:{"^":"c6;l:x=,m:y=,E:z=","%":"Magnetometer"},
m3:{"^":"t;G:name=","%":"HTMLMapElement"},
hk:{"^":"t;L:error=","%":"HTMLAudioElement;HTMLMediaElement"},
m6:{"^":"i;i:length=","%":"MediaList"},
m7:{"^":"B;",
bA:function(a,b,c,d){if(J.z(b,"message"))a.start()
this.cK(a,b,c,!1)},
"%":"MessagePort"},
m8:{"^":"t;G:name=","%":"HTMLMetaElement"},
m9:{"^":"j9;",
h:function(a,b){return P.R(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gK:function(a){var z=H.y([],[P.l])
this.v(a,new W.hm(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.l,null]},
"%":"MIDIInputMap"},
hm:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
ma:{"^":"ja;",
h:function(a,b){return P.R(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gK:function(a){var z=H.y([],[P.l])
this.v(a,new W.hn(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
hn:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mb:{"^":"jc;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bn]},
$iso:1,
$aso:function(){return[W.bn]},
$asj:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$ask:function(){return[W.bn]},
"%":"MimeTypeArray"},
Y:{"^":"dQ;bK:button=",
gea:function(a){return new P.a7(a.movementX,a.movementY,[null])},
gc8:function(a){var z,y,x
if(!!a.offsetX)return new P.a7(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.ed(z)).$isak)throw H.a(P.p("offsetX is only supported on elements"))
y=W.ed(z)
z=[null]
x=new P.a7(a.clientX,a.clientY,z).J(0,J.eV(J.eX(y)))
return new P.a7(J.cE(x.a),J.cE(x.b),z)}},
$isY:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
T:{"^":"df;a",
gW:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.b_("No elements"))
if(y>1)throw H.a(P.b_("More than one element"))
return z.firstChild},
M:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gI:function(a){var z=this.a.childNodes
return new W.d0(z,z.length,-1,null,[H.b5(C.R,z,"k",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asdf:function(){return[W.r]},
$asj:function(){return[W.r]},
$ash:function(){return[W.r]},
$ase1:function(){return[W.r]}},
r:{"^":"B;an:parentNode=,aN:previousSibling=",
gec:function(a){return new W.T(a)},
ef:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cL(a):z},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mj:{"^":"i;",
ee:[function(a){return a.previousNode()},"$0","gaN",1,0,4],
"%":"NodeIterator"},
hw:{"^":"je;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$iso:1,
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
mm:{"^":"t;C:height},G:name=,D:width}","%":"HTMLObjectElement"},
mo:{"^":"t;G:name=","%":"HTMLOutputElement"},
mp:{"^":"t;G:name=","%":"HTMLParamElement"},
aX:{"^":"i;i:length=","%":"Plugin"},
mr:{"^":"ji;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aX]},
$iso:1,
$aso:function(){return[W.aX]},
$asj:function(){return[W.aX]},
$ish:1,
$ash:function(){return[W.aX]},
$ask:function(){return[W.aX]},
"%":"PluginArray"},
mv:{"^":"i;",
aT:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mC:{"^":"jo;",
h:function(a,b){return P.R(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gK:function(a){var z=H.y([],[P.l])
this.v(a,new W.hQ(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hQ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mD:{"^":"t;i:length=,G:name=","%":"HTMLSelectElement"},
c6:{"^":"B;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mE:{"^":"bg;L:error=","%":"SensorErrorEvent"},
mF:{"^":"t;G:name=","%":"HTMLSlotElement"},
mG:{"^":"e7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bs]},
$iso:1,
$aso:function(){return[W.bs]},
$asj:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$ask:function(){return[W.bs]},
"%":"SourceBufferList"},
mH:{"^":"ju;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bt]},
$iso:1,
$aso:function(){return[W.bt]},
$asj:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$ask:function(){return[W.bt]},
"%":"SpeechGrammarList"},
mI:{"^":"bg;L:error=","%":"SpeechRecognitionError"},
aZ:{"^":"i;i:length=","%":"SpeechRecognitionResult"},
mK:{"^":"jx;",
h:function(a,b){return a.getItem(b)},
v:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gK:function(a){var z=H.y([],[P.l])
this.v(a,new W.i1(z))
return z},
gi:function(a){return a.length},
$asQ:function(){return[P.l,P.l]},
"%":"Storage"},
i1:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
ia:{"^":"t;",
R:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.at(a,b,c,d)
z=W.fG("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.T(y).M(0,J.eS(z))
return y},
"%":"HTMLTableElement"},
mN:{"^":"t;",
R:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.at(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.T(z)
x=z.gW(z)
x.toString
z=new W.T(x)
w=z.gW(z)
y.toString
w.toString
new W.T(y).M(0,new W.T(w))
return y},
"%":"HTMLTableRowElement"},
mO:{"^":"t;",
R:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.at(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.T(z)
x=z.gW(z)
y.toString
x.toString
new W.T(y).M(0,new W.T(x))
return y},
"%":"HTMLTableSectionElement"},
dy:{"^":"t;",$isdy:1,"%":"HTMLTemplateElement"},
mP:{"^":"t;G:name=","%":"HTMLTextAreaElement"},
mR:{"^":"jF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bx]},
$iso:1,
$aso:function(){return[W.bx]},
$asj:function(){return[W.bx]},
$ish:1,
$ash:function(){return[W.bx]},
$ask:function(){return[W.bx]},
"%":"TextTrackCueList"},
mS:{"^":"eb;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bw]},
$iso:1,
$aso:function(){return[W.bw]},
$asj:function(){return[W.bw]},
$ish:1,
$ash:function(){return[W.bw]},
$ask:function(){return[W.bw]},
"%":"TextTrackList"},
mT:{"^":"i;i:length=","%":"TimeRanges"},
mU:{"^":"jK;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.by]},
$iso:1,
$aso:function(){return[W.by]},
$asj:function(){return[W.by]},
$ish:1,
$ash:function(){return[W.by]},
$ask:function(){return[W.by]},
"%":"TouchList"},
mV:{"^":"i;i:length=","%":"TrackDefaultList"},
mY:{"^":"i;",
eC:[function(a){return a.parentNode()},"$0","gan",1,0,4],
ee:[function(a){return a.previousNode()},"$0","gaN",1,0,4],
"%":"TreeWalker"},
dQ:{"^":"bg;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
n_:{"^":"i;",
k:function(a){return String(a)},
"%":"URL"},
n1:{"^":"i;l:x=,E:z=","%":"VRStageBoundsPoint"},
n2:{"^":"hk;C:height},D:width}","%":"HTMLVideoElement"},
n3:{"^":"B;i:length=","%":"VideoTrackList"},
b1:{"^":"Y;",
gdV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isb1:1,
"%":"WheelEvent"},
ik:{"^":"B;",
gdH:function(a){var z,y
z=P.aR
y=new P.K(0,$.q,null,[z])
this.dj(a)
this.ds(a,W.eh(new W.il(new P.jB(y,[z]))))
return y},
ds:function(a,b){return a.requestAnimationFrame(H.V(b,1))},
dj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
il:{"^":"f:0;a",
$1:function(a){this.a.aj(0,a)}},
n4:{"^":"B;"},
n8:{"^":"r;G:name=,bo:namespaceURI=","%":"Attr"},
n9:{"^":"jQ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$asj:function(){return[W.X]},
$ish:1,
$ash:function(){return[W.X]},
$ask:function(){return[W.X]},
"%":"CSSRuleList"},
na:{"^":"fD;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
B:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa8)return!1
return a.left===z.gc5(b)&&a.top===z.gci(b)&&a.width===z.gD(b)&&a.height===z.gC(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.e0(W.ah(W.ah(W.ah(W.ah(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcj:function(a){return new P.a7(a.left,a.top,[null])},
gC:function(a){return a.height},
gD:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nb:{"^":"jS;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bj]},
$iso:1,
$aso:function(){return[W.bj]},
$asj:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$ask:function(){return[W.bj]},
"%":"GamepadList"},
ne:{"^":"jU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$iso:1,
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nf:{"^":"jW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aZ]},
$iso:1,
$aso:function(){return[W.aZ]},
$asj:function(){return[W.aZ]},
$ish:1,
$ash:function(){return[W.aZ]},
$ask:function(){return[W.aZ]},
"%":"SpeechRecognitionResultList"},
ng:{"^":"jY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bv]},
$iso:1,
$aso:function(){return[W.bv]},
$asj:function(){return[W.bv]},
$ish:1,
$ash:function(){return[W.bv]},
$ask:function(){return[W.bv]},
"%":"StyleSheetList"},
iw:{"^":"c4;dl:a<",
v:function(a,b){var z,y,x,w,v
for(z=this.gK(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gK:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.y([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.d(z,w)
v=z[w]
u=J.e(v)
if(u.gbo(v)==null)y.push(u.gG(v))}return y},
$asc4:function(){return[P.l,P.l]},
$asQ:function(){return[P.l,P.l]}},
iF:{"^":"iw;a",
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gK(this).length}},
iH:{"^":"du;a,b,c,$ti",
c7:function(a,b,c,d){return W.ag(this.a,this.b,a,!1,H.A(this,0))}},
af:{"^":"iH;a,b,c,$ti"},
iI:{"^":"i2;a,b,c,d,e,$ti",
d6:function(a,b,c,d,e){this.dC()},
dN:function(a){if(this.b==null)return
this.dD()
this.b=null
this.d=null
return},
dC:function(){var z=this.d
if(z!=null&&this.a<=0)J.ez(this.b,this.c,z,!1)},
dD:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.ey(x,this.c,z,!1)}},
p:{
ag:function(a,b,c,d,e){var z=W.eh(new W.iJ(c))
z=new W.iI(0,a,b,z,!1,[e])
z.d6(a,b,c,!1,e)
return z}}},
iJ:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
cc:{"^":"c;ct:a<",
d7:function(a){var z,y
z=$.$get$cd()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.O[y],W.ku())
for(y=0;y<12;++y)z.j(0,C.p[y],W.kv())}},
a_:function(a){return $.$get$dZ().u(0,W.aC(a))},
V:function(a,b,c){var z,y,x
z=W.aC(a)
y=$.$get$cd()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dY:function(a){var z,y
z=document.createElement("a")
y=new W.jp(z,window.location)
y=new W.cc(y)
y.d7(a)
return y},
nc:[function(a,b,c,d){return!0},"$4","ku",16,0,9],
nd:[function(a,b,c,d){var z,y,x,w,v
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
return z},"$4","kv",16,0,9]}},
k:{"^":"c;$ti",
gI:function(a){return new W.d0(a,this.gi(a),-1,null,[H.b5(this,a,"k",0)])}},
dk:{"^":"c;a",
a_:function(a){return C.c.bB(this.a,new W.hy(a))},
V:function(a,b,c){return C.c.bB(this.a,new W.hx(a,b,c))}},
hy:{"^":"f:0;a",
$1:function(a){return a.a_(this.a)}},
hx:{"^":"f:0;a,b,c",
$1:function(a){return a.V(this.a,this.b,this.c)}},
jq:{"^":"c;ct:d<",
d9:function(a,b,c,d){var z,y,x
this.a.M(0,c)
z=b.aS(0,new W.jr())
y=b.aS(0,new W.js())
this.b.M(0,z)
x=this.c
x.M(0,C.w)
x.M(0,y)},
a_:function(a){return this.a.u(0,W.aC(a))},
V:["cO",function(a,b,c){var z,y
z=W.aC(a)
y=this.c
if(y.u(0,H.b(z)+"::"+b))return this.d.dG(c)
else if(y.u(0,"*::"+b))return this.d.dG(c)
else{y=this.b
if(y.u(0,H.b(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.b(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}]},
jr:{"^":"f:0;",
$1:function(a){return!C.c.u(C.p,a)}},
js:{"^":"f:0;",
$1:function(a){return C.c.u(C.p,a)}},
jC:{"^":"jq;e,a,b,c,d",
V:function(a,b,c){if(this.cO(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cx(a).a.getAttribute("template")==="")return this.e.u(0,b)
return!1},
p:{
e9:function(){var z=P.l
z=new W.jC(P.c2(C.o,z),P.S(null,null,null,z),P.S(null,null,null,z),P.S(null,null,null,z),null)
z.d9(null,new H.hi(C.o,new W.jD(),[H.A(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jD:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jA:{"^":"c;",
a_:function(a){var z=J.n(a)
if(!!z.$isdr)return!1
z=!!z.$isw
if(z&&W.aC(a)==="foreignObject")return!1
if(z)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.cH(b,"on"))return!1
return this.a_(a)}},
d0:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ay(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gA:function(a){return this.d}},
iz:{"^":"c;a",$isB:1,p:{
iA:function(a){if(a===window)return a
else return new W.iz(a)}}},
dj:{"^":"c;"},
mk:{"^":"c;"},
mZ:{"^":"c;"},
jp:{"^":"c;a,b"},
ec:{"^":"c;a",
b0:function(a){new W.jN(this).$2(a,null)},
a4:function(a,b){if(b==null)J.cC(a)
else b.removeChild(a)},
dv:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cx(a)
x=y.gdl().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.O(t)}v="element unprintable"
try{v=J.aA(a)}catch(t){H.O(t)}try{u=W.aC(a)
this.du(a,b,z,v,u,y,x)}catch(t){if(H.O(t) instanceof P.aa)throw t
else{this.a4(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
du:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a_(a)){this.a4(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.a4(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gK(f)
y=H.y(z.slice(0),[H.A(z,0)])
for(x=f.gK(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.d(y,x)
w=y[x]
if(!this.a.V(a,J.f8(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$isdy)this.b0(a.content)}},
jN:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dv(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eT(z)}catch(w){H.O(w)
v=z
if(x){u=J.e(v)
if(u.gan(v)!=null){u.gan(v)
u.gan(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
iy:{"^":"i+fw;"},
iB:{"^":"i+j;"},
iC:{"^":"iB+k;"},
iD:{"^":"i+j;"},
iE:{"^":"iD+k;"},
iL:{"^":"i+j;"},
iM:{"^":"iL+k;"},
j1:{"^":"i+j;"},
j2:{"^":"j1+k;"},
j9:{"^":"i+Q;"},
ja:{"^":"i+Q;"},
jb:{"^":"i+j;"},
jc:{"^":"jb+k;"},
jd:{"^":"i+j;"},
je:{"^":"jd+k;"},
jh:{"^":"i+j;"},
ji:{"^":"jh+k;"},
jo:{"^":"i+Q;"},
e6:{"^":"B+j;"},
e7:{"^":"e6+k;"},
jt:{"^":"i+j;"},
ju:{"^":"jt+k;"},
jx:{"^":"i+Q;"},
jE:{"^":"i+j;"},
jF:{"^":"jE+k;"},
ea:{"^":"B+j;"},
eb:{"^":"ea+k;"},
jJ:{"^":"i+j;"},
jK:{"^":"jJ+k;"},
jP:{"^":"i+j;"},
jQ:{"^":"jP+k;"},
jR:{"^":"i+j;"},
jS:{"^":"jR+k;"},
jT:{"^":"i+j;"},
jU:{"^":"jT+k;"},
jV:{"^":"i+j;"},
jW:{"^":"jV+k;"},
jX:{"^":"i+j;"},
jY:{"^":"jX+k;"}}],["","",,P,{"^":"",
R:function(a){var z,y,x,w,v
if(a==null)return
z=P.C()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
kh:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cv(a,new P.ki(z))
return z},
kj:function(a){var z,y
z=new P.K(0,$.q,null,[null])
y=new P.dT(z,[null])
a.then(H.V(new P.kk(y),1))["catch"](H.V(new P.kl(y),1))
return z},
cV:function(){var z=$.cU
if(z==null){z=J.bK(window.navigator.userAgent,"Opera",0)
$.cU=z}return z},
fA:function(){var z,y
z=$.cR
if(z!=null)return z
y=$.cS
if(y==null){y=J.bK(window.navigator.userAgent,"Firefox",0)
$.cS=y}if(y)z="-moz-"
else{y=$.cT
if(y==null){y=P.cV()!==!0&&J.bK(window.navigator.userAgent,"Trident/",0)
$.cT=y}if(y)z="-ms-"
else z=P.cV()===!0?"-o-":"-webkit-"}$.cR=z
return z},
im:{"^":"c;",
c1:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
aR:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.bf(y,!0)
x.cS(y,!0)
return x}if(a instanceof RegExp)throw H.a(P.ca("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kj(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.c1(a)
x=this.b
u=x.length
if(v>=u)return H.d(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.C()
z.a=t
if(v>=u)return H.d(x,v)
x[v]=t
this.e0(a,new P.ip(z,this))
return z.a}if(a instanceof Array){s=a
v=this.c1(s)
x=this.b
if(v>=x.length)return H.d(x,v)
t=x[v]
if(t!=null)return t
u=J.a1(s)
r=u.gi(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.d(x,v)
x[v]=t
for(x=J.ar(t),q=0;q<r;++q)x.j(t,q,this.aR(u.h(s,q)))
return t}return a}},
ip:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aR(b)
J.ex(z,a,y)
return y}},
ki:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}},
io:{"^":"im;a,b,c",
e0:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
b.$2(w,a[w])}}},
kk:{"^":"f:0;a",
$1:function(a){return this.a.aj(0,a)}},
kl:{"^":"f:0;a",
$1:function(a){return this.a.dQ(a)}}}],["","",,P,{"^":"",mB:{"^":"B;L:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mW:{"^":"B;L:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
e_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a7:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
B:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a7))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gw:function(a){var z,y
z=J.a3(this.a)
y=J.a3(this.b)
return P.j3(P.e_(P.e_(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.b.gl(b)
if(typeof z!=="number")return z.n()
y=C.a.n(z,y)
z=this.b
x=C.b.gm(b)
if(typeof z!=="number")return z.n()
return new P.a7(y,C.a.n(z,x),this.$ti)},
J:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gl(b)
if(typeof z!=="number")return z.J()
if(typeof x!=="number")return H.G(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.J()
if(typeof y!=="number")return H.G(y)
return new P.a7(z-x,w-y,this.$ti)}},
jj:{"^":"c;$ti"},
a8:{"^":"jj;$ti"}}],["","",,P,{"^":"",lo:{"^":"w;l:x=,m:y=","%":"SVGFEBlendElement"},lp:{"^":"w;l:x=,m:y=","%":"SVGFEColorMatrixElement"},lq:{"^":"w;l:x=,m:y=","%":"SVGFEComponentTransferElement"},lr:{"^":"w;l:x=,m:y=","%":"SVGFECompositeElement"},ls:{"^":"w;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},lt:{"^":"w;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},lu:{"^":"w;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},lv:{"^":"w;l:x=,m:y=","%":"SVGFEFloodElement"},lw:{"^":"w;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},lx:{"^":"w;l:x=,m:y=","%":"SVGFEImageElement"},ly:{"^":"w;l:x=,m:y=","%":"SVGFEMergeElement"},lz:{"^":"w;l:x=,m:y=","%":"SVGFEMorphologyElement"},lA:{"^":"w;l:x=,m:y=","%":"SVGFEOffsetElement"},lB:{"^":"w;l:x=,m:y=,E:z=","%":"SVGFEPointLightElement"},lC:{"^":"w;l:x=,m:y=","%":"SVGFESpecularLightingElement"},lD:{"^":"w;l:x=,m:y=,E:z=","%":"SVGFESpotLightElement"},lE:{"^":"w;l:x=,m:y=","%":"SVGFETileElement"},lF:{"^":"w;l:x=,m:y=","%":"SVGFETurbulenceElement"},lK:{"^":"w;l:x=,m:y=","%":"SVGFilterElement"},lN:{"^":"aD;l:x=,m:y=","%":"SVGForeignObjectElement"},fU:{"^":"aD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aD:{"^":"w;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lV:{"^":"aD;l:x=,m:y=","%":"SVGImageElement"},lZ:{"^":"j5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dd]},
$ish:1,
$ash:function(){return[P.dd]},
$ask:function(){return[P.dd]},
"%":"SVGLengthList"},m4:{"^":"w;l:x=,m:y=","%":"SVGMaskElement"},ml:{"^":"jg;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dm]},
$ish:1,
$ash:function(){return[P.dm]},
$ask:function(){return[P.dm]},
"%":"SVGNumberList"},mq:{"^":"w;l:x=,m:y=","%":"SVGPatternElement"},ms:{"^":"i;l:x=,m:y=","%":"SVGPoint"},mt:{"^":"i;i:length=","%":"SVGPointList"},mw:{"^":"i;l:x=,m:y=","%":"SVGRect"},mx:{"^":"fU;l:x=,m:y=","%":"SVGRectElement"},dr:{"^":"w;",$isdr:1,"%":"SVGScriptElement"},mL:{"^":"jz;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},w:{"^":"ak;",
R:function(a,b,c,d){var z,y,x,w,v,u
z=H.y([],[W.dj])
z.push(W.dY(null))
z.push(W.e9())
z.push(new W.jA())
c=new W.ec(new W.dk(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dT(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.T(w)
u=z.gW(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gc9:function(a){return new W.af(a,"mousedown",!1,[W.Y])},
gca:function(a){return new W.af(a,"mousemove",!1,[W.Y])},
gcb:function(a){return new W.af(a,"mouseup",!1,[W.Y])},
gcc:function(a){return new W.af(a,"mousewheel",!1,[W.b1])},
$isw:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mM:{"^":"aD;l:x=,m:y=","%":"SVGSVGElement"},ib:{"^":"aD;","%":"SVGTextPathElement;SVGTextContentElement"},mQ:{"^":"ib;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mX:{"^":"jM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dC]},
$ish:1,
$ash:function(){return[P.dC]},
$ask:function(){return[P.dC]},
"%":"SVGTransformList"},n0:{"^":"aD;l:x=,m:y=","%":"SVGUseElement"},j4:{"^":"i+j;"},j5:{"^":"j4+k;"},jf:{"^":"i+j;"},jg:{"^":"jf+k;"},jy:{"^":"i+j;"},jz:{"^":"jy+k;"},jL:{"^":"i+j;"},jM:{"^":"jL+k;"}}],["","",,P,{"^":"",kU:{"^":"i;i:length=","%":"AudioBuffer"},kV:{"^":"ix;",
h:function(a,b){return P.R(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.R(y.value[1]))}},
gK:function(a){var z=H.y([],[P.l])
this.v(a,new P.fl(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.l,null]},
"%":"AudioParamMap"},fl:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},kW:{"^":"B;i:length=","%":"AudioTrackList"},fm:{"^":"B;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mn:{"^":"fm;i:length=","%":"OfflineAudioContext"},ix:{"^":"i+Q;"}}],["","",,P,{"^":"",mz:{"^":"i;",
bz:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindFramebuffer(b,c)},
bG:function(a,b,c){return a.bindTexture(b,c)},
bH:function(a,b){return a.blendEquation(b)},
bI:function(a,b,c){return a.blendFunc(b,c)},
bJ:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b){return a.checkFramebufferStatus(b)},
bM:function(a,b){return a.clear(b)},
bN:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bO:function(a,b){return a.compileShader(b)},
bP:function(a){return a.createBuffer()},
bQ:function(a){return a.createFramebuffer()},
bR:function(a){return a.createProgram()},
bS:function(a,b){return a.createShader(b)},
bT:function(a){return a.createTexture()},
bV:function(a,b){return a.depthMask(b)},
bW:function(a,b){return a.disable(b)},
bX:function(a,b,c,d){return a.drawArrays(b,c,d)},
bY:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bZ:function(a,b){return a.enable(b)},
c_:function(a,b){return a.enableVertexAttribArray(b)},
c2:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aq:function(a){return P.R(a.getContextAttributes())},
aU:function(a){return a.getError()},
aV:function(a,b){return a.getProgramInfoLog(b)},
aW:function(a,b,c){return a.getProgramParameter(b,c)},
aX:function(a,b){return a.getShaderInfoLog(b)},
aY:function(a,b,c){return a.getShaderParameter(b,c)},
aZ:function(a,b,c){return a.getUniformLocation(b,c)},
c6:function(a,b){return a.linkProgram(b)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cf:function(a,b,c,d){return a.texParameterf(b,c,d)},
cg:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGLRenderingContext"},mA:{"^":"i;",
dJ:function(a,b){return a.beginTransformFeedback(b)},
dM:function(a,b){return a.bindVertexArray(b)},
dU:function(a){return a.createVertexArray()},
dW:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dX:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dY:function(a){return a.endTransformFeedback()},
el:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
eq:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
es:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bz:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindFramebuffer(b,c)},
bG:function(a,b,c){return a.bindTexture(b,c)},
bH:function(a,b){return a.blendEquation(b)},
bI:function(a,b,c){return a.blendFunc(b,c)},
bJ:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b){return a.checkFramebufferStatus(b)},
bM:function(a,b){return a.clear(b)},
bN:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bO:function(a,b){return a.compileShader(b)},
bP:function(a){return a.createBuffer()},
bQ:function(a){return a.createFramebuffer()},
bR:function(a){return a.createProgram()},
bS:function(a,b){return a.createShader(b)},
bT:function(a){return a.createTexture()},
bV:function(a,b){return a.depthMask(b)},
bW:function(a,b){return a.disable(b)},
bX:function(a,b,c,d){return a.drawArrays(b,c,d)},
bY:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bZ:function(a,b){return a.enable(b)},
c_:function(a,b){return a.enableVertexAttribArray(b)},
c2:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aq:function(a){return P.R(a.getContextAttributes())},
aU:function(a){return a.getError()},
aV:function(a,b){return a.getProgramInfoLog(b)},
aW:function(a,b,c){return a.getProgramParameter(b,c)},
aX:function(a,b){return a.getShaderInfoLog(b)},
aY:function(a,b,c){return a.getShaderParameter(b,c)},
aZ:function(a,b,c){return a.getUniformLocation(b,c)},
c6:function(a,b){return a.linkProgram(b)},
b1:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cf:function(a,b,c,d){return a.texParameterf(b,c,d)},
cg:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mJ:{"^":"jw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.v(b,a,null,null,null))
return P.R(a.item(b))},
j:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.c3]},
$ish:1,
$ash:function(){return[P.c3]},
$ask:function(){return[P.c3]},
"%":"SQLResultSetRowList"},jv:{"^":"i+j;"},jw:{"^":"jv+k;"}}],["","",,G,{"^":"",
iq:function(a){var z,y,x,w
z=H.y(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.d(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.d(z,y)
z[y]=w}return C.c.a8(z,"\n")},
dU:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bS(a,b)
z.b1(a,y,c)
z.bO(a,y)
x=z.aY(a,y,35713)
if(x!=null&&J.z(x,!1)){w=z.aX(a,y)
P.aj("E:Compilation failed:")
P.aj("E:"+G.iq(c))
P.aj("E:Failure:")
P.aj(C.i.n("E:",w))
throw H.a(w)}return y},
d1:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bN(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bO(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.d(a,y)
v=J.cA(a[y])
if(z>=w)return H.d(b,z)
b[z]=v}return b},
fN:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bN(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x;++z
if(y>=a.length)return H.d(a,y)
x=J.bO(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fO:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bN(a[y])
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.bO(a[y])
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.cA(a[y])
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.eW(a[y])
if(z>=w)return H.d(b,z)
b[z]=x}return b},
fM:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.ay(a[y],0)
w=b.length
if(z>=w)return H.d(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.d(a,y)
v=J.ay(a[y],1)
if(x>=w)return H.d(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.d(a,y)
x=J.ay(a[y],2)
if(v>=w)return H.d(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.d(a,y)
x=J.ay(a[y],3)
if(z>=w)return H.d(b,z)
b[z]=x}return b},
j_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ac(z,z.r,null,null,[H.A(z,0)]),y.c=z.e,x=b.x,w=[[P.h,P.E]],v=[P.aP],u=[T.ae],t=[T.x],s=[T.J];y.t();){r=y.d
if(!x.ak(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.en>0)H.au("I: "+q)
continue}p=z.h(0,r)
switch($.$get$U().h(0,r).a){case"vec2":b.a1(r,G.fN(H.b6(p,"$ish",s,"$ash"),null),2)
break
case"vec3":b.a1(r,G.d1(H.b6(p,"$ish",t,"$ash"),null),3)
break
case"vec4":b.a1(r,G.fO(H.b6(p,"$ish",u,"$ash"),null),4)
break
case"float":b.a1(r,new Float32Array(H.bB(H.b6(p,"$ish",v,"$ash"))),1)
break
case"uvec4":b.a1(r,G.fM(H.b6(p,"$ish",w,"$ash"),null),4)
break}}},
d5:function(a,b,c){var z,y,x,w,v,u,t,s
z=b.d
y=b.e.x
x=P.C()
w=J.eK(z.a)
v=new G.hl(z,w,4,x,y,null,0,-1,null,null,P.C(),"meshdata:"+a,!1,!0)
u=G.d1(c.d,null)
x.j(0,"aPosition",J.bL(z.a))
v.ch=u
v.ba("aPosition",u,3)
t=$.$get$U().h(0,"aPosition")
if(t==null)H.H("Unknown canonical aPosition")
s=y.h(0,"aPosition")
J.b9(z.a,w)
z.c0(0,s,0)
z.cw(0,x.h(0,"aPosition"),s,t.bb(),5126,!1,0,0)
y=c.cV()
v.y=J.bL(z.a)
x=v.ch.length
if(x<768){v.cx=new Uint8Array(H.bB(y))
v.Q=5121}else if(x<196608){v.cx=new Uint16Array(H.bB(y))
v.Q=5123}else{v.cx=new Uint32Array(H.bB(y))
v.Q=5125}J.b9(z.a,w)
y=v.y
x=v.cx
J.bI(z.a,34963,y)
J.cs(z.a,34963,x,35048)
G.j_(c,v)
return v},
bo:{"^":"c;"},
c9:{"^":"bo;d,a,b,c",
bc:function(){return this.d},
k:function(a){var z,y,x,w
z=H.y(["{"+H.b(new H.dO(H.kr(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.ac(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.a8(z,"\n")}},
fn:{"^":"hY;"},
fp:{"^":"c;a,b",
c0:function(a,b,c){J.eQ(this.a,b)
if(c>0)J.ff(this.a,b,c)},
cw:function(a,b,c,d,e,f,g,h){J.bI(this.a,34962,b)
J.fg(this.a,c,d,e,!1,g,h)}},
d2:{"^":"c;a,b,c,d,e",
cU:function(a,b,c,d,e){var z,y,x
z=this.a
y=J.eH(z.a)
this.b=y
J.bJ(z.a,36160,y)
y=this.c
if(y!=null){y=y.b
J.cw(z.a,36160,36064,3553,y,0)}y=this.d
if(y!=null){y=y.b
J.cw(z.a,36160,36096,3553,y,0)}x=J.eD(z.a,36160)
if(x!==36053)throw H.a("Error Incomplete Framebuffer: "+H.b(x))
J.bJ(z.a,36160,null)},
b4:function(a,b,c,d,e){var z,y
z=this.a
y=this.b
J.bJ(z.a,36160,y)
J.fh(z.a,b,c,d,e)
if(a!==0)J.eE(z.a,a)}},
fK:{"^":"c;a,b,c"},
fL:{"^":"c;a,b,c,d"},
d4:{"^":"c;a,b,c,d,e",
ae:function(a){switch($.$get$U().h(0,a).a){case"vec2":this.e.j(0,a,H.y([],[T.J]))
break
case"vec3":this.e.j(0,a,H.y([],[T.x]))
break
case"vec4":this.e.j(0,a,H.y([],[T.ae]))
break
case"float":this.e.j(0,a,H.y([],[P.aP]))
break
case"uvec4":this.e.j(0,a,H.y([],[[P.h,P.E]]))
break}},
cQ:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.fK(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.D)(a),++w)z.push(a[w].a6(0))},
b6:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x)z.push(b[x].a6(0))},
b7:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x)z.push(b[x].a6(0))},
b9:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.fL(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.D)(a),++w)z.push(a[w].a6(0))},
cV:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.y(x,[P.E])
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
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ac(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$U().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.a8(z," ")}},
dB:{"^":"c;a,b,c"},
dA:{"^":"c;a,b,c"},
hj:{"^":"c9;d,a,b,c"},
hl:{"^":"bo;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
ba:function(a,b,c){var z,y
C.i.ag(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bI(z.a,34962,y)
J.cs(z.a,34962,b,35048)},
cW:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a1:function(a,b,c){var z,y,x,w,v
z=J.ct(a,0)===105
if(z&&this.z===0)this.z=C.b.cP(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bL(x.a))
this.ba(a,b,c)
w=$.$get$U().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b9(x.a,this.e)
x.c0(0,v,z?1:0)
x.cw(0,y.h(0,a),v,w.bb(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ac(z,z.r,null,null,[H.A(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.a8(y,"  ")}},
hB:{"^":"c9;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cR:function(a,b){var z
if(typeof a!=="number")return a.ew()
if(typeof b!=="number")return H.G(b)
z=a/b
if(this.z===z)return
this.z=z
this.bd()},
bd:function(){var z,y,x,w,v,u
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
bc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.x(new Float32Array(3))
u.S(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.F(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.n(t)
x=!!y.$isae
q=x?y.gap(t):1
if(!!y.$isx){p=y.gl(t)
s=y.gm(t)
r=y.gE(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gE(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.G(t)
x=z[4]
if(typeof s!=="number")return H.G(s)
w=z[8]
if(typeof r!=="number")return H.G(r)
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
c.F(this.db)
c.eb(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
hP:{"^":"bo;d,e,f,r,x,y,z,Q,ch,a,b,c",
cZ:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cB(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
x.j(0,t,J.cB(w.a,v,t))}},
d2:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ac(y,y.r,null,null,[H.A(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.ak(0,v))x.push(v)}for(z=this.x,y=new P.ce(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.u(0,v))x.push(v)}return x},
d5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ac(b,b.r,null,null,[H.A(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.ct(t,0)){case 117:if(w.ak(0,t)){s=b.h(0,t)
if(v.ak(0,t))H.au("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$U().h(0,t)
if(r==null)H.H("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bP(x.a,q,s)
else if(!!J.n(s).$isfZ)J.fd(x.a,q,s)
break
case"float":if(r.c===0)J.fb(x.a,q,s)
else if(!!J.n(s).$isbX)J.fc(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.a2(s,"$isa6").a
J.cJ(x.a,q,!1,p)}else if(!!J.n(s).$isbX)J.cJ(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.G.gex(H.a2(s,"$ism5"))
J.cI(x.a,q,!1,p)}else if(!!J.n(s).$isbX)J.cI(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cH(o,q,H.a2(s,"$isae").a)
else J.cH(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cG(o,q,H.a2(s,"$isx").a)
else J.cG(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cF(o,q,H.a2(s,"$isJ").a)
else J.cF(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.G(p)
J.cq(x.a,33984+p)
p=H.a2(s,"$isc8").b
J.b8(x.a,3553,p)
p=this.ch
J.bP(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.G(p)
J.cq(x.a,33984+p)
p=H.a2(s,"$isc8").b
J.b8(x.a,34067,p)
p=this.ch
J.bP(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.au("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.z(s,!0)
o=x.a
if(p)J.ba(o,2929)
else J.bM(o,2929)
break
case"cStencilFunc":H.a2(s,"$isdB")
p=s.a
o=x.a
if(p===1281)J.bM(o,2960)
else{J.ba(o,2960)
o=s.b
n=s.c
J.f5(x.a,p,o,n)}break
case"cDepthWrite":J.eL(x.a,s)
break
case"cBlendEquation":H.a2(s,"$isdA")
p=s.a
o=x.a
if(p===1281)J.bM(o,3042)
else{J.ba(o,3042)
o=s.b
n=s.c
J.eC(x.a,o,n)
J.eB(x.a,p)}break}++u
break}}m=P.cX(0,0,0,Date.now()-new P.bf(z,!1).a,0,0)
""+u
m.k(0)},
cT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
y.bf()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.D)(b),++x){w=b[x]
this.d5(w.a,w.bc())}y=this.Q
y.a5(0)
for(v=a.cy,u=new H.ac(v,v.r,null,null,[H.A(v,0)]),u.c=v.e;u.t();)y.O(0,u.d)
t=this.d2()
if(t.length!==0)P.aj("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
y=a.d
v=a.e
J.b9(y.a,v)
s=this.e.f.length>0
v=a.f
y=a.cW()
u=a.Q
r=a.z
if(s)J.eA(z.a,v)
if(u!==-1){q=z.a
if(r>1)J.eP(q,v,y,u,0,r)
else J.eO(q,v,y,u,0)}else{u=z.a
if(r>1)J.eN(u,v,0,y,r)
else J.eM(u,v,0,y)}if(s)J.eR(z.a)},
au:function(a,b){return this.cT(a,b,null)},
p:{
dq:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.S(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.eI(b.a)
u=G.dU(b.a,35633,y)
J.cr(b.a,v,u)
t=G.dU(b.a,35632,x)
J.cr(b.a,v,t)
if(w.length>0)J.f9(b.a,v,w,35980)
J.f2(b.a,v)
if(J.f1(b.a,v,35714)!==!0)H.H(J.f0(b.a,v))
z=new G.hP(b,c,d,v,P.c2(c.c,null),P.C(),P.C(),z,null,a,!1,!0)
z.cZ(a,b,c,d)
return z}}},
u:{"^":"c;a,b,c",
bb:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
br:{"^":"c;a,b,c,d,e,f,r,x",
b5:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<2;++x){w=a[x]
z.push(w)
y.j(0,w,this.r);++this.r}C.c.ar(z)},
b8:function(a){var z,y
for(z=this.d,y=0;y<2;++y)z.push(a[y])
C.c.ar(z)},
ad:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.ar(z)},
af:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){t=z[u]
s=$.$get$U().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.D)(z),++u){q=z[u]
s=$.$get$U().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.c.M(w,b)
if(a)w.push("}")
return C.c.a8(w,"\n")}},
hY:{"^":"bo;"},
ic:{"^":"c;a,b,c,d,e,f,r"},
c8:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
ie:{"^":"c8;f,r,x,a,b,c,d,e",
d1:function(a,b,c,d,e,f){var z,y,x,w
z=this.d
y=this.c
J.b8(z.a,y,this.b)
J.f7(z.a,3553,1,this.x,this.f,this.r)
x=this.e
w=x.e
if(w!==1)J.f6(z.a,y,34046,w)
w=x.r
J.bb(z.a,y,10240,w)
w=x.f
J.bb(z.a,y,10241,w)
if(x.b){J.bb(z.a,y,10242,33071)
J.bb(z.a,y,10243,33071)}x.c
J.f_(z.a)
J.b8(z.a,y,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.b(this.f)+" X "+H.b(this.r)+"]"},
p:{
dP:function(a,b,c,d,e,f){var z=new G.ie(c,d,e,b,J.eJ(a.a),3553,a,f)
z.d1(a,b,c,d,e,f)
return z}}}}],["","",,Y,{"^":"",
fX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=new G.d4(!1,[],[],[],P.C())
z.ae("aTexUV")
z.ae("aNormal")
y=P.C()
x=J.cD(a,"\n")
w=[]
v=[]
u=[]
t=Date.now()
s=P.dp("\\s+",!0,!1)
r=P.dp("\\s\\s*\\$",!0,!1)
for(q=x.length,p=0;p<x.length;x.length===q||(0,H.D)(x),++p){o=J.f3(x[p],s," ")
n=H.kM(o,r,"",0)
o=n.length
if(o!==0){if(0>=o)return H.d(n,0)
o=n[0]==="#"}else o=!0
if(o)continue
m=n.split(" ")
o=m.length
if(0>=o)return H.d(m,0)
l=m[0]
if(J.z(l,"g")){if(1>=o)return H.d(m,1)
y.j(0,m[1],w.length)}else if(J.z(l,"v")){if(1>=o)return H.d(m,1)
l=P.ai(m[1],null)
if(2>=o)return H.d(m,2)
k=P.ai(m[2],null)
if(3>=o)return H.d(m,3)
o=P.ai(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
w.push(new T.x(j))}else if(J.z(l,"vt")){if(1>=o)return H.d(m,1)
l=P.ai(m[1],null)
if(2>=o)return H.d(m,2)
o=P.ai(m[2],null)
k=new Float32Array(2)
k[0]=l
k[1]=o
u.push(new T.J(k))}else if(J.z(l,"vn")){if(1>=o)return H.d(m,1)
l=P.ai(m[1],null)
if(2>=o)return H.d(m,2)
k=P.ai(m[2],null)
if(3>=o)return H.d(m,3)
o=P.ai(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
v.push(new T.x(j))}else if(J.z(l,"f")){if(o!==4&&o!==5){H.au("*** Error: face '"+n+"' not handled")
continue}i=[]
h=[]
g=[]
for(f=1;o=m.length,f<o;++f){e=J.cD(m[f],"/")
for(;e.length<3;)e.push("")
d=J.b7(P.cn(e[0],null,null),1)
if(1>=e.length)return H.d(e,1)
if(J.z(e[1],""))c=-1
else{if(1>=e.length)return H.d(e,1)
c=J.b7(P.cn(e[1],null,null),1)}if(2>=e.length)return H.d(e,2)
if(J.z(e[2],""))b=-1
else{if(2>=e.length)return H.d(e,2)
b=J.b7(P.cn(e[2],null,null),1)}o=w.length
if(J.ax(d,o)){if(d>>>0!==d||d>=o)return H.d(w,d)
i.push(w[d])}else i.push(new T.x(new Float32Array(3)))
o=J.n(c)
if(!o.B(c,-1)&&o.T(c,u.length)){if(c>>>0!==c||c>=u.length)return H.d(u,c)
g.push(u[c])}else{H.au("problem uv "+f+" "+H.b(c))
g.push(new T.J(new Float32Array(2)))}o=J.n(b)
if(!o.B(b,-1)&&o.T(b,v.length)){if(b>>>0!==b||b>=v.length)return H.d(v,b)
h.push(v[b])}else{H.au("problem normals "+f+" "+H.b(b))
h.push(new T.x(new Float32Array(3)))}}if(o===4)z.cQ(i)
else z.b9(i)
z.b7("aNormal",h)
z.b6("aTexUV",g)}}P.aj("loaded ("+P.cX(0,0,0,Date.now()-new P.bf(t,!1).a,0,0).k(0)+") "+z.k(0))
return z}}],["","",,R,{"^":"",i_:{"^":"c;",
d_:function(a,b,c){var z,y,x
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
x=this.d8(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
d8:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iG("span",null)
y=J.cy(v)
J.e(y).sD(y,"1px")
C.n.sC(y,""+d+"px")
C.n.sdZ(y,"left")
x=C.n.bj(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},i0:{"^":"i_;e,f,a,b,c,d",
d4:function(a,b){var z,y,x,w,v;++this.e
if(J.ax(J.b7(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ep(z,2)+" fps"
y=this.c;(y&&C.D).cC(y,b)
x=C.b.Z(30*C.t.dO(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cy(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d3:function(a){return this.d4(a,"")}}}],["","",,D,{"^":"",
hf:function(a){var z,y
z=new P.K(0,$.q,null,[null])
y=new XMLHttpRequest()
C.E.ed(y,"GET",a)
W.ag(y,"loadend",new D.hg(new P.dT(z,[null]),y),!1,W.mu)
y.send("")
return z},
hg:{"^":"f:0;a,b",
$1:function(a){this.a.aj(0,W.k2(this.b.response))}},
h9:{"^":"c;a,b,c",
cX:function(a){var z
a=document
z=W.bl
W.ag(a,"keydown",new D.hb(this),!1,z)
W.ag(a,"keyup",new D.hc(this),!1,z)},
p:{
ha:function(a){var z=P.E
z=new D.h9(P.S(null,null,null,z),P.S(null,null,null,z),P.S(null,null,null,z))
z.cX(a)
return z}}},
hb:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.O(0,J.cz(a))
z.b.O(0,a.which)}},
hc:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.cd(0,J.cz(a))
z.c.O(0,a.which)}},
ho:{"^":"c;a,b,c,d,e,f,r,x",
cY:function(a){var z,y
z=J.e(a)
y=z.gca(a)
W.ag(y.a,y.b,new D.hq(this),!1,H.A(y,0))
y=z.gc9(a)
W.ag(y.a,y.b,new D.hr(this),!1,H.A(y,0))
y=z.gcb(a)
W.ag(y.a,y.b,new D.hs(this),!1,H.A(y,0))
z=z.gcc(a)
W.ag(z.a,z.b,new D.ht(this),!1,H.A(z,0))},
p:{
hp:function(a){var z=P.E
z=new D.ho(P.S(null,null,null,z),P.S(null,null,null,z),P.S(null,null,null,z),0,0,0,0,0)
z.cY(a)
return z}}},
hq:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ao(a)
y=this.a
y.r=z.gc8(a).a
y.x=z.gc8(a).b
y.d=z.gea(a).a
y.e=a.movementY}},
hr:{"^":"f:5;a",
$1:function(a){var z=J.e(a)
z.ao(a)
P.aj("BUTTON "+H.b(z.gbK(a)))
z=this.a
z.a.O(0,a.button)
z.b.O(0,a.button)}},
hs:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ao(a)
y=this.a
y.a.cd(0,z.gbK(a))
y.c.O(0,a.button)}},
ht:{"^":"f:17;a",
$1:function(a){var z=J.e(a)
z.ao(a)
this.a.f=z.gdV(a)}},
hA:{"^":"fn;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bE:function(a){var z,y
z=C.Q.e_(a,0,new A.kt())
if(typeof z!=="number")return H.G(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kt:{"^":"f:18;",
$2:function(a,b){var z,y
z=J.aw(a,J.a3(b))
if(typeof z!=="number")return H.G(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",a6:{"^":"c;bn:a<",
F:function(a){var z,y
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
k:function(a){return"[0] "+this.a9(0).k(0)+"\n[1] "+this.a9(1).k(0)+"\n[2] "+this.a9(2).k(0)+"\n[3] "+this.a9(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.d(z,b)
return z[b]},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a6){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.bE(this.a)},
a9:function(a){var z,y,x
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
return new T.ae(z)},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.a6(z)
y.F(this)
x=b.gbn()
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
J:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.a6(z)
y.F(this)
x=b.gbn()
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
ab:function(){var z=this.a
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
eb:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},J:{"^":"c;bw:a<",
a0:function(a,b){var z=this.a
z[0]=a
z[1]=b},
F:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.J){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.bE(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.J(z)
y.F(this)
x=b.gbw()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.J(z)
y.F(this)
x=b.gbw()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.d(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
a6:function(a){var z=new T.J(new Float32Array(2))
z.F(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},x:{"^":"c;bx:a<",
S:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
F:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.x){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.bE(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.x(z)
y.F(this)
x=b.gbx()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.x(z)
y.F(this)
x=b.gbx()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>=3)return H.d(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
aM:function(a){var z,y,x,w,v,u
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
aK:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bU:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.x(new Float32Array(3))
z.S(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a6:function(a){var z=new T.x(new Float32Array(3))
z.F(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gE:function(a){return this.a[2]}},ae:{"^":"c;by:a<",
F:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+","+H.b(z[3])},
B:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ae){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.bE(this.a)},
J:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ae(z)
y.F(this)
x=b.gby()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ae(z)
y.F(this)
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
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
gap:function(a){return this.a[3]}}}],["","",,S,{"^":"",
et:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z={}
y=document
x=new R.i0(0,0,null,null,null,null)
x.d_(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=w.clientWidth
u=w.clientHeight
y=J.e(w)
y.sD(w,v)
y.sC(w,u)
t=new G.fp(null,w)
y=J.eY(w,"webgl2",P.de(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
t.a=y
if(y==null)H.H(P.d_('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
s="ChronosGL Config: "+H.b(J.eZ(y))
if($.en>0)P.aj("I: "+s)
J.eF(y,0,0,0,1)
J.ba(y,2929)
y=new Float32Array(3)
s=D.ha(null)
r=D.hp(w)
q=new T.a6(new Float32Array(16))
q.ab()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new D.hA(15,-45,0.3,0,new T.x(y),-0.02,s,r,q,new T.x(p),new T.x(o),new T.x(n),new T.x(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.a6(new Float32Array(16))
y.ab()
s=new T.a6(new Float32Array(16))
s.ab()
l=new G.hB(m,50,1,0.1,2520,y,s,new T.a6(new Float32Array(16)),P.C(),"perspective",!1,!0)
l.bd()
l.cR(v,u)
y=$.$get$dz()
s=G.dP(t,"frame::color",v,u,32856,y)
y=G.dP(t,"frame::depth",v,u,33190,y)
k=new G.d2(t,null,s,y,null)
k.cU(t,s,y,null,!1)
r=new G.br("Plane2GreyV",null,[],[],[],[],0,P.C())
r.b5(["aPosition","aNormal"])
r.ad(["vColor"])
r.b8(["uPerspectiveViewMatrix","uModelMatrix"])
r.b=r.af(!0,["float d = sin(dot( aPosition, aNormal)) / 2.0 + 0.5;","vColor = vec3(d,d,d);","gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],null)
q=new G.br("Plane2GreyF",null,[],[],[],[],0,P.C())
q.ad(["vColor"])
q.b=q.af(!0,["oFragColor = vec4(vColor, 1.0);"],null)
j=[r,q]
i=G.dq("grey",t,j[0],j[1])
q=new G.br("SobelV",null,[],[],[],[],0,P.C())
q.b5(["aPosition","aTexUV"])
q.ad(["vTexUV"])
q.b=q.af(!0,["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"],null)
r=new G.br("SobelF",null,[],[],[],[],0,P.C())
r.ad(["vTexUV"])
r.b8(["uTexture","uCanvasSize"])
r.b=r.af(!1,["  float lum(vec4 c) {\n    return dot(c.xyz, vec3(0.3, 0.59, 0.11));\n  }\n\n\n  float sobel() {\n      vec2 imageIncrement = vec2(1.0/uCanvasSize.x,1.0/uCanvasSize.y);\n      float t00 = lum(texture(uTexture, vTexUV + imageIncrement * vec2(-1, -1)));\n      float t10 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 0, -1)));\n      float t20 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 1, -1)));\n      float t01 = lum(texture(uTexture, vTexUV + imageIncrement * vec2(-1,  0)));\n      float t21 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 1,  0)));\n      float t02 = lum(texture(uTexture, vTexUV + imageIncrement * vec2(-1,  1)));\n      float t12 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 0,  1)));\n      float t22 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 1,  1)));\n      vec2 grad;\n      grad.x = t00 + 2.0 * t01 + t02 - t20 - 2.0 * t21 - t22;\n      grad.y = t00 + 2.0 * t10 + t20 - t02 - 2.0 * t12 - t22;\n      return length(grad);\n  } \n\n  void main(void) {\n      float len = sobel();\n      oFragColor = vec4(len, len, len, 1.0); //\n  }\n  "],null)
h=[q,r]
g=G.dq("ssao",t,h[0],h[1])
r=P.C()
if(typeof v!=="number")return H.G(v)
if(typeof u!=="number")return H.G(u)
q=new T.J(new Float32Array(2))
q.a0(v,u)
r.j(0,"uCanvasSize",q)
r.j(0,"uDepthMap",y)
r.j(0,"uTexture",s)
y=new T.x(new Float32Array(3))
y.S(-1,-1,0)
s=new T.x(new Float32Array(3))
s.S(1,-1,0)
q=new T.x(new Float32Array(3))
q.S(1,1,0)
p=new T.x(new Float32Array(3))
p.S(-1,1,0)
o=new T.J(new Float32Array(2))
o.a0(0,0)
n=new T.J(new Float32Array(2))
n.a0(1,0)
f=new T.J(new Float32Array(2))
f.a0(1,1)
e=new T.J(new Float32Array(2))
e.a0(0,1)
d=new T.x(new Float32Array(3))
d.S(0,0,1)
c=new G.d4(!1,[],[],[],P.C())
c.ae("aTexUV")
c.b9([y,s,q,p])
c.b6("aTexUV",[o,n,f,e])
c.ae("aNormal")
c.b7("aNormal",[d,d,d,d])
b=G.d5("quad",g,c)
z.a=null
y=P.C()
y.j(0,"cDepthTest",!0)
y.j(0,"cDepthWrite",!0)
y.j(0,"cBlendEquation",$.$get$cK())
y.j(0,"cStencilFunc",$.$get$dt())
s=new Float32Array(16)
q=new T.a6(s)
q.ab()
a=Math.cos(1.5707963267948966)
a0=Math.sin(1.5707963267948966)
p=s[4]
o=s[8]
n=s[5]
f=s[9]
e=s[6]
a1=s[10]
a2=s[7]
a3=s[11]
a4=-a0
s[4]=p*a+o*a0
s[5]=n*a+f*a0
s[6]=e*a+a1*a0
s[7]=a2*a+a3*a0
s[8]=p*a4+o*a
s[9]=n*a4+f*a
s[10]=e*a4+a1*a
s[11]=a2*a4+a3*a
y.j(0,"uModelMatrix",q)
z.b=0
P.fR([D.hf("../ct_logo.obj")],null,!1).aP(new S.kF(z,i,new S.kE(z,m,k,v,u,i,l,new G.hj(y,"mat",!1,!0),new G.d2(t,null,null,null,null),g,b,new G.c9(r,"plain",!1,!0),x)))},
kE:{"^":"f:19;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",
$1:function(b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
z=this.a
y=J.aQ(b2)
y.J(b2,z.b)
z.b=y.n(b2,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b_()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b_()
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
if(typeof v!=="number")return v.b_()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dP(y.id,-1.4707963267948965,1.4707963267948965)
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
t=y.k2
v=t.a
q[12]=q[12]+v[0]
q[13]=q[13]+v[1]
q[14]=q[14]+v[2]
p=q[12]
o=q[13]
n=q[14]
m=new T.x(new Float32Array(3))
m.S(0,1,0)
v=y.e
u=v.a
u[0]=q[12]
u[1]=q[13]
u[2]=q[14]
l=v.J(0,t)
l.aM(0)
k=m.bU(l)
k.aM(0)
j=l.bU(k)
j.aM(0)
t=k.aK(v)
u=j.aK(v)
v=l.aK(v)
r=k.a
i=r[0]
h=j.a
g=h[0]
f=l.a
e=f[0]
d=r[1]
c=h[1]
b=f[1]
r=r[2]
h=h[2]
f=f[2]
q[15]=1
q[14]=-v
q[13]=-u
q[12]=-t
q[11]=0
q[10]=f
q[9]=h
q[8]=r
q[7]=0
q[6]=b
q[5]=c
q[4]=d
q[3]=0
q[2]=e
q[1]=g
q[0]=i
q[12]=p
q[13]=o
q[14]=n
i=y.f.a
i[0]=q[2]
i[1]=q[6]
i[2]=q[10]
y=-y.k1
g=i[0]
e=i[1]
d=i[2]
a=Math.sqrt(g*g+e*e+d*d)
p=i[0]/a
o=i[1]/a
n=i[2]/a
a0=Math.cos(y)
a1=Math.sin(y)
a2=1-a0
a3=p*p*a2+a0
y=n*a1
a4=p*o*a2-y
i=o*a1
a5=p*n*a2+i
a6=o*p*a2+y
a7=o*o*a2+a0
y=p*a1
a8=o*n*a2-y
a9=n*p*a2-i
b0=n*o*a2+y
b1=n*n*a2+a0
y=q[0]
i=q[4]
d=q[8]
e=q[1]
g=q[5]
c=q[9]
b=q[2]
r=q[6]
h=q[10]
f=q[3]
t=q[7]
u=q[11]
q[0]=y*a3+i*a6+d*a9
q[1]=e*a3+g*a6+c*a9
q[2]=b*a3+r*a6+h*a9
q[3]=f*a3+t*a6+u*a9
q[4]=y*a4+i*a7+d*b0
q[5]=e*a4+g*a7+c*b0
q[6]=b*a4+r*a7+h*b0
q[7]=f*a4+t*a7+u*b0
q[8]=y*a5+i*a8+d*b1
q[9]=e*a5+g*a8+c*b1
q[10]=b*a5+r*a8+h*b1
q[11]=f*a5+t*a8+u*b1
w.c.a5(0)
w.b.a5(0)
x.e=0
x.d=0
x.f=0
x.c.a5(0)
x.b.a5(0)
y=this.f
x=this.r
w=this.x
if($.$get$eo().checked===!0){v=this.d
u=this.e
this.c.b4(17664,0,0,v,u)
y.au(z.a,[x,w])
this.y.b4(17664,0,0,v,u)
this.z.au(this.Q,[this.ch])}else y.au(z.a,[x,w])
C.a7.gdH(window).aP(this)
this.cx.d3(z.b)}},
kF:{"^":"f:20;a,b,c",
$1:function(a){this.a.a=G.d5("",this.b,Y.fX(J.ay(a,0)))
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.aH.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.h4.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.kp=function(a){if(typeof a=="number")return J.aG.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.a1=function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.ar=function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.aQ=function(a){if(typeof a=="number")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.kq=function(a){if(typeof a=="number")return J.aG.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.b3=function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b0.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.aw=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kp(a).n(a,b)}
J.z=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).B(a,b)}
J.P=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aQ(a).aa(a,b)}
J.ax=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aQ(a).T(a,b)}
J.b7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aQ(a).J(a,b)}
J.ay=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.es(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a1(a).h(a,b)}
J.ex=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.es(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ar(a).j(a,b,c)}
J.ey=function(a,b,c,d){return J.e(a).dr(a,b,c,d)}
J.cq=function(a,b){return J.e(a).bz(a,b)}
J.ez=function(a,b,c,d){return J.e(a).bA(a,b,c,d)}
J.cr=function(a,b,c){return J.e(a).bC(a,b,c)}
J.eA=function(a,b){return J.e(a).dJ(a,b)}
J.bI=function(a,b,c){return J.e(a).bD(a,b,c)}
J.bJ=function(a,b,c){return J.e(a).bF(a,b,c)}
J.b8=function(a,b,c){return J.e(a).bG(a,b,c)}
J.b9=function(a,b){return J.e(a).dM(a,b)}
J.eB=function(a,b){return J.e(a).bH(a,b)}
J.eC=function(a,b,c){return J.e(a).bI(a,b,c)}
J.cs=function(a,b,c,d){return J.e(a).bJ(a,b,c,d)}
J.eD=function(a,b){return J.e(a).bL(a,b)}
J.eE=function(a,b){return J.ar(a).bM(a,b)}
J.eF=function(a,b,c,d,e){return J.e(a).bN(a,b,c,d,e)}
J.ct=function(a,b){return J.b3(a).aJ(a,b)}
J.eG=function(a,b){return J.kq(a).P(a,b)}
J.bK=function(a,b,c){return J.a1(a).dS(a,b,c)}
J.bL=function(a){return J.e(a).bP(a)}
J.eH=function(a){return J.e(a).bQ(a)}
J.eI=function(a){return J.e(a).bR(a)}
J.eJ=function(a){return J.e(a).bT(a)}
J.eK=function(a){return J.e(a).dU(a)}
J.eL=function(a,b){return J.e(a).bV(a,b)}
J.bM=function(a,b){return J.e(a).bW(a,b)}
J.eM=function(a,b,c,d){return J.e(a).bX(a,b,c,d)}
J.eN=function(a,b,c,d,e){return J.e(a).dW(a,b,c,d,e)}
J.eO=function(a,b,c,d,e){return J.e(a).bY(a,b,c,d,e)}
J.eP=function(a,b,c,d,e,f){return J.e(a).dX(a,b,c,d,e,f)}
J.cu=function(a,b){return J.ar(a).q(a,b)}
J.ba=function(a,b){return J.e(a).bZ(a,b)}
J.eQ=function(a,b){return J.e(a).c_(a,b)}
J.eR=function(a){return J.e(a).dY(a)}
J.cv=function(a,b){return J.ar(a).v(a,b)}
J.cw=function(a,b,c,d,e,f){return J.e(a).c2(a,b,c,d,e,f)}
J.cx=function(a){return J.e(a).gdI(a)}
J.az=function(a){return J.e(a).gL(a)}
J.a3=function(a){return J.n(a).gw(a)}
J.aT=function(a){return J.ar(a).gI(a)}
J.a4=function(a){return J.a1(a).gi(a)}
J.eS=function(a){return J.e(a).gec(a)}
J.eT=function(a){return J.e(a).gaN(a)}
J.cy=function(a){return J.e(a).gU(a)}
J.eU=function(a){return J.e(a).gek(a)}
J.eV=function(a){return J.e(a).gcj(a)}
J.eW=function(a){return J.e(a).gap(a)}
J.cz=function(a){return J.e(a).gev(a)}
J.bN=function(a){return J.e(a).gl(a)}
J.bO=function(a){return J.e(a).gm(a)}
J.cA=function(a){return J.e(a).gE(a)}
J.eX=function(a){return J.e(a).aT(a)}
J.eY=function(a,b,c){return J.e(a).cB(a,b,c)}
J.eZ=function(a){return J.e(a).aq(a)}
J.f_=function(a){return J.e(a).aU(a)}
J.f0=function(a,b){return J.e(a).aV(a,b)}
J.f1=function(a,b,c){return J.e(a).aW(a,b,c)}
J.cB=function(a,b,c){return J.e(a).aZ(a,b,c)}
J.f2=function(a,b){return J.e(a).c6(a,b)}
J.cC=function(a){return J.ar(a).ef(a)}
J.f3=function(a,b,c){return J.b3(a).eg(a,b,c)}
J.f4=function(a,b){return J.e(a).sal(a,b)}
J.cD=function(a,b){return J.b3(a).cG(a,b)}
J.f5=function(a,b,c,d){return J.e(a).b3(a,b,c,d)}
J.f6=function(a,b,c,d){return J.e(a).cf(a,b,c,d)}
J.bb=function(a,b,c,d){return J.e(a).cg(a,b,c,d)}
J.f7=function(a,b,c,d,e,f){return J.e(a).el(a,b,c,d,e,f)}
J.cE=function(a){return J.aQ(a).em(a)}
J.f8=function(a){return J.b3(a).eo(a)}
J.aA=function(a){return J.n(a).k(a)}
J.f9=function(a,b,c,d){return J.e(a).eq(a,b,c,d)}
J.fa=function(a){return J.b3(a).er(a)}
J.fb=function(a,b,c){return J.e(a).ck(a,b,c)}
J.fc=function(a,b,c){return J.e(a).cl(a,b,c)}
J.bP=function(a,b,c){return J.e(a).cm(a,b,c)}
J.fd=function(a,b,c){return J.e(a).cn(a,b,c)}
J.cF=function(a,b,c){return J.e(a).co(a,b,c)}
J.cG=function(a,b,c){return J.e(a).cp(a,b,c)}
J.cH=function(a,b,c){return J.e(a).cq(a,b,c)}
J.cI=function(a,b,c,d){return J.e(a).cr(a,b,c,d)}
J.cJ=function(a,b,c,d){return J.e(a).cs(a,b,c,d)}
J.fe=function(a,b){return J.e(a).cu(a,b)}
J.ff=function(a,b,c){return J.e(a).es(a,b,c)}
J.fg=function(a,b,c,d,e,f,g){return J.e(a).cv(a,b,c,d,e,f,g)}
J.fh=function(a,b,c,d,e){return J.e(a).cz(a,b,c,d,e)}
I.at=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bQ.prototype
C.n=W.fv.prototype
C.D=W.fB.prototype
C.E=W.fV.prototype
C.F=J.i.prototype
C.c=J.aE.prototype
C.t=J.d7.prototype
C.b=J.d8.prototype
C.G=J.d9.prototype
C.a=J.aG.prototype
C.i=J.aH.prototype
C.N=J.aI.prototype
C.Q=H.hu.prototype
C.R=W.hw.prototype
C.x=J.hC.prototype
C.C=W.ia.prototype
C.q=J.b0.prototype
C.a7=W.ik.prototype
C.d=new P.jk()
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
C.O=H.y(I.at(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.P=I.at(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.at([])
C.o=H.y(I.at(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.y(I.at(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.S=new G.u("vec3","vertex btangents",0)
C.e=new G.u("vec3","",0)
C.T=new G.u("vec4","delta from light",0)
C.m=new G.u("","",0)
C.y=new G.u("vec3","vertex coordinates",0)
C.U=new G.u("vec3","vertex binormals",0)
C.z=new G.u("vec4","for wireframe",0)
C.V=new G.u("vec4","per vertex color",0)
C.W=new G.u("float","for normal maps",0)
C.j=new G.u("mat4","",0)
C.Y=new G.u("mat4","",4)
C.X=new G.u("mat4","",128)
C.f=new G.u("float","",0)
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
$.W=0
$.aB=null
$.cL=null
$.eq=null
$.ei=null
$.ev=null
$.bD=null
$.bF=null
$.cm=null
$.an=null
$.aM=null
$.aN=null
$.cg=!1
$.q=C.d
$.a5=null
$.bV=null
$.cZ=null
$.cY=null
$.cU=null
$.cT=null
$.cS=null
$.cR=null
$.en=0
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
I.$lazy(y,x,w)}})(["cQ","$get$cQ",function(){return H.ep("_$dart_dartClosure")},"c_","$get$c_",function(){return H.ep("_$dart_js")},"dD","$get$dD",function(){return H.Z(H.bz({
toString:function(){return"$receiver$"}}))},"dE","$get$dE",function(){return H.Z(H.bz({$method$:null,
toString:function(){return"$receiver$"}}))},"dF","$get$dF",function(){return H.Z(H.bz(null))},"dG","$get$dG",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dK","$get$dK",function(){return H.Z(H.bz(void 0))},"dL","$get$dL",function(){return H.Z(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dI","$get$dI",function(){return H.Z(H.dJ(null))},"dH","$get$dH",function(){return H.Z(function(){try{null.$method$}catch(z){return z.message}}())},"dN","$get$dN",function(){return H.Z(H.dJ(void 0))},"dM","$get$dM",function(){return H.Z(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cb","$get$cb",function(){return P.ir()},"d3","$get$d3",function(){return P.iN(null,P.aW)},"aO","$get$aO",function(){return[]},"cP","$get$cP",function(){return{}},"dZ","$get$dZ",function(){return P.c2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cd","$get$cd",function(){return P.C()},"dt","$get$dt",function(){return new G.dB(1281,0,4294967295)},"cK","$get$cK",function(){return new G.dA(1281,1281,1281)},"U","$get$U",function(){return P.de(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.V,"aPosition",C.y,"aTexUV",C.a1,"aNormal",C.a4,"aBinormal",C.U,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a6,"aBitangent",C.S,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.T,"vCenter",C.z,"vDepth",C.a_,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a5,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a3,"uAnimationTable",C.h,"uTime",C.a2,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.X,"uLightDescs",C.Y,"uLightCount",C.f,"uLightTypes",C.Z,"uBumpScale",C.a0,"uNormalScale",C.W])},"dz","$get$dz",function(){var z=new G.ic(!1,!1,!1,!0,1,9729,9729)
z.d=!1
z.b=!0
z.f=9728
z.r=9728
return z},"eo","$get$eo",function(){return H.a2(W.km().querySelector("#activate"),"$isd6")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.r},{func:1,args:[W.Y]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.E]},{func:1,args:[W.bl]},{func:1,ret:P.ci,args:[W.ak,P.l,P.l,W.cc]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aL]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aL]},{func:1,v:true,args:[W.r,W.r]},{func:1,args:[W.b1]},{func:1,args:[P.E,P.c]},{func:1,v:true,args:[P.aR]},{func:1,args:[P.h]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.kO(d||a)
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
Isolate.at=a.at
Isolate.aq=a.aq
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
if(typeof dartMainRunner==="function")dartMainRunner(S.et,[])
else S.et([])})})()
//# sourceMappingURL=sobel.dart.js.map
