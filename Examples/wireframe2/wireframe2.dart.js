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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.as=function(){}
var dart=[["","",,H,{"^":"",m8:{"^":"d;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
co:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ba:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cm==null){H.kH()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c9("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c_()]
if(v!=null)return v
v=H.kK(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$c_(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
i:{"^":"d;",
C:function(a,b){return a===b},
gA:function(a){return H.aN(a)},
k:["cE",function(a){return"Instance of '"+H.aO(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h9:{"^":"i;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$isci:1},
ha:{"^":"i;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isb1:1},
c0:{"^":"i;",
gA:function(a){return 0},
k:["cG",function(a){return String(a)}]},
hI:{"^":"c0;"},
b6:{"^":"c0;"},
aK:{"^":"c0;",
k:function(a){var z=a[$.$get$cU()]
return z==null?this.cG(a):J.aC(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aG:{"^":"i;$ti",
M:function(a,b){var z
if(!!a.fixed$length)H.I(P.p("addAll"))
for(z=0;z<1;++z)a.push(b[z])},
w:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.J(a))}},
aa:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.c(a[x])
if(x>=z)return H.b(y,x)
y[x]=w}return y.join(b)},
b1:function(a,b){return H.dB(a,b,null,H.D(a,0))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
gec:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.d7())},
cv:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.I(P.p("setRange"))
P.hS(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.D()
if(typeof b!=="number")return H.x(b)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$isf){x=e
w=d}else{w=y.b1(d,e).es(0,!1)
x=0}y=J.a5(w)
v=y.gj(w)
if(typeof v!=="number")return H.x(v)
if(x+z>v)throw H.a(H.h6())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
ac:function(a,b,c,d){return this.cv(a,b,c,d,0)},
bB:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.J(a))}return!1},
cw:function(a,b){if(!!a.immutable$list)H.I(P.p("sort"))
H.i6(a,J.kc())},
b2:function(a){return this.cw(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.A(a[z],b))return!0
return!1},
k:function(a){return P.bZ(a,"[","]")},
gJ:function(a){return new J.fp(a,a.length,0,null,[H.D(a,0)])},
gA:function(a){return H.aN(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.I(P.p("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cL(b,"newLength",null))
if(b<0)throw H.a(P.an(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.Y(a,b))
if(b>=a.length||b<0)throw H.a(H.Y(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.I(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.Y(a,b))
if(b>=a.length||b<0)throw H.a(H.Y(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gj(b))
y=H.w([],[H.D(a,0)])
this.sj(y,z)
this.ac(y,0,a.length,a)
this.ac(y,a.length,z,b)
return y},
$ism:1,
$asm:I.as,
$isf:1,
p:{
aH:function(a){a.fixed$length=Array
return a},
m6:[function(a,b){return J.eO(a,b)},"$2","kc",8,0,24]}},
m7:{"^":"aG;$ti"},
fp:{"^":"d;a,b,c,d,$ti",
gv:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aI:{"^":"i;",
P:function(a,b){var z
if(typeof b!=="number")throw H.a(H.N(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gai(b)
if(this.gai(a)===z)return 0
if(this.gai(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gai:function(a){return a===0?1/a<0:a<0},
er:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
dR:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".ceil()"))},
dS:function(a,b,c){if(this.P(b,c)>0)throw H.a(H.N(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
ev:function(a,b){var z
if(b>20)throw H.a(P.an(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gai(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.N(b))
return a+b},
D:function(a,b){if(typeof b!=="number")throw H.a(H.N(b))
return a-b},
cI:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bu(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.bu(a,b)},
bu:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
bs:function(a,b){var z
if(a>0)z=this.dC(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dC:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.a(H.N(b))
return a<b},
ab:function(a,b){if(typeof b!=="number")throw H.a(H.N(b))
return a>b},
$isaU:1,
$isaW:1},
d9:{"^":"aI;",$isE:1},
d8:{"^":"aI;"},
aJ:{"^":"i;",
aD:function(a,b){if(b<0)throw H.a(H.Y(a,b))
if(b>=a.length)H.I(H.Y(a,b))
return a.charCodeAt(b)},
ad:function(a,b){if(b>=a.length)throw H.a(H.Y(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cL(b,null,null))
return a+b},
ek:function(a,b,c){return H.kT(a,b,c)},
cz:function(a,b){var z=H.w(a.split(b),[P.l])
return z},
cB:function(a,b,c){var z
if(c>a.length)throw H.a(P.an(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cA:function(a,b){return this.cB(a,b,0)},
an:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.I(H.N(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.I(H.N(c))
if(b<0)throw H.a(P.bs(b,null,null))
if(typeof c!=="number")return H.x(c)
if(b>c)throw H.a(P.bs(b,null,null))
if(c>a.length)throw H.a(P.bs(c,null,null))
return a.substring(b,c)},
cC:function(a,b){return this.an(a,b,null)},
eu:function(a){return a.toLowerCase()},
ex:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.ad(z,0)===133){x=J.hb(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.aD(z,w)===133?J.hc(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
dU:function(a,b,c){if(c>a.length)throw H.a(P.an(c,0,a.length,null,null))
return H.kS(a,b,c)},
P:function(a,b){var z
if(typeof b!=="string")throw H.a(H.N(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gA:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.Y(a,b))
if(b>=a.length||b<0)throw H.a(H.Y(a,b))
return a[b]},
$ism:1,
$asm:I.as,
$isl:1,
p:{
da:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hb:function(a,b){var z,y
for(z=a.length;b<z;){y=C.i.ad(a,b)
if(y!==32&&y!==13&&!J.da(y))break;++b}return b},
hc:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.i.aD(a,z)
if(y!==32&&y!==13&&!J.da(y))break}return b}}}}],["","",,H,{"^":"",
d7:function(){return new P.bv("No element")},
h7:function(){return new P.bv("Too many elements")},
h6:function(){return new P.bv("Too few elements")},
i6:function(a,b){var z=J.a0(a)
if(typeof z!=="number")return z.D()
H.b3(a,0,z-1,b)},
b3:function(a,b,c,d){if(c-b<=32)H.i5(a,b,c,d)
else H.i4(a,b,c,d)},
i5:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.a5(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.R(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
i4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.W(c-b+1,6)
y=b+z
x=c-z
w=C.b.W(b+c,2)
v=w-z
u=w+z
t=J.a5(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.R(d.$2(s,r),0)){n=r
r=s
s=n}if(J.R(d.$2(p,o),0)){n=o
o=p
p=n}if(J.R(d.$2(s,q),0)){n=q
q=s
s=n}if(J.R(d.$2(r,q),0)){n=q
q=r
r=n}if(J.R(d.$2(s,p),0)){n=p
p=s
s=n}if(J.R(d.$2(q,p),0)){n=p
p=q
q=n}if(J.R(d.$2(r,o),0)){n=o
o=r
r=n}if(J.R(d.$2(r,q),0)){n=q
q=r
r=n}if(J.R(d.$2(p,o),0)){n=o
o=p
p=n}t.i(a,y,s)
t.i(a,w,q)
t.i(a,x,o)
t.i(a,v,t.h(a,b))
t.i(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.A(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.C(i,0))continue
if(h.T(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aV(i)
if(h.ab(i,0)){--l
continue}else{g=l-1
if(h.T(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.az(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.R(d.$2(j,p),0))for(;!0;)if(J.R(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.az(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
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
H.b3(a,b,m-2,d)
H.b3(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.A(d.$2(t.h(a,m),r),0);)++m
for(;J.A(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.A(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.A(d.$2(j,p),0))for(;!0;)if(J.A(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.az(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.b3(a,m,l,d)}else H.b3(a,m,l,d)},
bT:{"^":"bn;$ti"},
bp:{"^":"bT;$ti",
gJ:function(a){return new H.dg(this,this.gj(this),0,null,[H.cl(this,"bp",0)])},
w:function(a,b){var z,y
z=this.gj(this)
if(typeof z!=="number")return H.x(z)
y=0
for(;y<z;++y){b.$1(this.t(0,y))
if(z!==this.gj(this))throw H.a(P.J(this))}},
aS:function(a,b){return this.cF(0,b)}},
ij:{"^":"bp;a,b,c,$ti",
d2:function(a,b,c,d){},
gdl:function(){var z=J.a0(this.a)
return z},
gdD:function(){var z,y
z=J.a0(this.a)
y=this.b
if(typeof z!=="number")return H.x(z)
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a0(this.a)
y=this.b
if(typeof z!=="number")return H.x(z)
if(y>=z)return 0
return z-y},
t:function(a,b){var z,y
z=this.gdD()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.x(b)
y=z+b
if(!(b<0)){z=this.gdl()
if(typeof z!=="number")return H.x(z)
z=y>=z}else z=!0
if(z)throw H.a(P.y(b,this,"index",null,null))
return J.cw(this.a,y)},
es:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.a5(y)
w=x.gj(y)
if(typeof w!=="number")return w.D()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.w(u,this.$ti)
for(s=0;s<v;++s){u=x.t(y,z+s)
if(s>=t.length)return H.b(t,s)
t[s]=u
u=x.gj(y)
if(typeof u!=="number")return u.T()
if(u<w)throw H.a(P.J(this))}return t},
p:{
dB:function(a,b,c,d){var z=new H.ij(a,b,c,[d])
z.d2(a,b,c,d)
return z}}},
dg:{"^":"d;a,b,c,d,$ti",
gv:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.a5(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.J(z))
w=this.c
if(typeof x!=="number")return H.x(x)
if(w>=x){this.d=null
return!1}this.d=y.t(z,w);++this.c
return!0}},
ho:{"^":"bp;a,b,$ti",
gj:function(a){return J.a0(this.a)},
t:function(a,b){return this.b.$1(J.cw(this.a,b))},
$asbT:function(a,b){return[b]},
$asbp:function(a,b){return[b]},
$asbn:function(a,b){return[b]}},
dV:{"^":"bn;a,b,$ti",
gJ:function(a){return new H.is(J.ak(this.a),this.b,this.$ti)}},
is:{"^":"h8;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gv(z))===!0)return!0
return!1},
gv:function(a){var z=this.a
return z.gv(z)}},
bk:{"^":"d;$ti"}}],["","",,H,{"^":"",
kz:function(a){return init.types[a]},
ey:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$iso},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aC(a)
if(typeof z!=="string")throw H.a(H.N(a))
return z},
aN:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
hR:function(a,b){var z,y
if(typeof a!=="string")H.I(H.N(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.b(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
hQ:function(a){var z,y
if(typeof a!=="string")H.I(H.N(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.ff(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
aO:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.n(a).$isb6){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.ad(w,0)===36)w=C.i.cC(w,1)
r=H.bG(H.au(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
H:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hP:function(a){return a.b?H.H(a).getUTCFullYear()+0:H.H(a).getFullYear()+0},
hN:function(a){return a.b?H.H(a).getUTCMonth()+1:H.H(a).getMonth()+1},
hJ:function(a){return a.b?H.H(a).getUTCDate()+0:H.H(a).getDate()+0},
hK:function(a){return a.b?H.H(a).getUTCHours()+0:H.H(a).getHours()+0},
hM:function(a){return a.b?H.H(a).getUTCMinutes()+0:H.H(a).getMinutes()+0},
hO:function(a){return a.b?H.H(a).getUTCSeconds()+0:H.H(a).getSeconds()+0},
hL:function(a){return a.b?H.H(a).getUTCMilliseconds()+0:H.H(a).getMilliseconds()+0},
x:function(a){throw H.a(H.N(a))},
b:function(a,b){if(a==null)J.a0(a)
throw H.a(H.Y(a,b))},
Y:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a7(!0,b,"index",null)
z=J.a0(a)
if(!(b<0)){if(typeof z!=="number")return H.x(z)
y=b>=z}else y=!0
if(y)return P.y(b,a,"index",null,z)
return P.bs(b,"index",null)},
N:function(a){return new P.a7(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.br()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eF})
z.name=""}else z.toString=H.eF
return z},
eF:function(){return J.aC(this.dartException)},
I:function(a){throw H.a(a)},
C:function(a){throw H.a(P.J(a))},
Q:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bs(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c1(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dp(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dH()
u=$.$get$dI()
t=$.$get$dJ()
s=$.$get$dK()
r=$.$get$dO()
q=$.$get$dP()
p=$.$get$dM()
$.$get$dL()
o=$.$get$dR()
n=$.$get$dQ()
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
if(l)return z.$1(H.dp(y,m))}}return z.$1(new H.iq(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dx()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a7(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dx()
return a},
ad:function(a){var z
if(a==null)return new H.eb(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eb(a,null)},
kv:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kJ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.d4("Unsupported number of arguments for wrapped closure"))},
O:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kJ)
a.$identity=z
return z},
fy:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$isf){z.$reflectionInfo=c
x=H.hU(z).r}else x=c
w=d?Object.create(new H.i7().constructor.prototype):Object.create(new H.bQ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a1
$.a1=J.ay(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cQ(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kz,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cO:H.bR
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.cQ(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fv:function(a,b,c,d){var z=H.bR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cQ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fx(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fv(y,!w,z,b)
if(y===0){w=$.a1
$.a1=J.ay(w,1)
u="self"+H.c(w)
w="return function(){var "+u+" = this."
v=$.aD
if(v==null){v=H.bg("self")
$.aD=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a1
$.a1=J.ay(w,1)
t+=H.c(w)
w="return function("+t+"){return this."
v=$.aD
if(v==null){v=H.bg("self")
$.aD=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
fw:function(a,b,c,d){var z,y
z=H.bR
y=H.cO
switch(b?-1:a){case 0:throw H.a(H.i0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fx:function(a,b){var z,y,x,w,v,u,t,s
z=$.aD
if(z==null){z=H.bg("self")
$.aD=z}y=$.cN
if(y==null){y=H.bg("receiver")
$.cN=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fw(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.a1
$.a1=J.ay(y,1)
return new Function(z+H.c(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.a1
$.a1=J.ay(y,1)
return new Function(z+H.c(y)+"}")()},
cj:function(a,b,c,d,e,f){var z,y
z=J.aH(b)
y=!!J.n(c).$isf?J.aH(c):c
return H.fy(a,z,y,!!d,e,f)},
kQ:function(a,b){var z=J.a5(b)
throw H.a(H.cP(a,z.an(b,3,z.gj(b))))},
Z:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.kQ(a,b)},
ck:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
er:function(a,b){var z,y
if(a==null)return!1
z=H.ck(J.n(a))
if(z==null)y=!1
else y=H.ex(z,b)
return y},
kk:function(a){var z
if(a instanceof H.h){z=H.ck(J.n(a))
if(z!=null)return H.cp(z,null)
return"Closure"}return H.aO(a)},
kX:function(a){throw H.a(new P.fC(a))},
ev:function(a){return init.getIsolateTag(a)},
w:function(a,b){a.$ti=b
return a},
au:function(a){if(a==null)return
return a.$ti},
nw:function(a,b,c){return H.aX(a["$as"+H.c(c)],H.au(b))},
bb:function(a,b,c,d){var z=H.aX(a["$as"+H.c(c)],H.au(b))
return z==null?null:z[d]},
cl:function(a,b,c){var z=H.aX(a["$as"+H.c(b)],H.au(a))
return z==null?null:z[c]},
D:function(a,b){var z=H.au(a)
return z==null?null:z[b]},
cp:function(a,b){var z=H.ax(a,b)
return z},
ax:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bG(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.c(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.ax(z,b)
return H.kb(a,b)}return"unknown-reified-type"},
kb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.ax(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.ax(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.ax(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.ku(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.ax(r[p],b)+(" "+H.c(p))}w+="}"}return"("+w+") => "+z},
bG:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c7("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ax(u,c)}return w?"":"<"+z.k(0)+">"},
ky:function(a){var z,y,x
if(a instanceof H.h){z=H.ck(J.n(a))
if(z!=null)return H.cp(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bG(a.$ti,0,null)
return y+x},
aX:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b8:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.au(a)
y=J.n(a)
if(y[b]==null)return!1
return H.en(H.aX(y[d],z),c)},
aY:function(a,b,c,d){var z,y
if(a==null)return a
z=H.b8(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bG(c,0,null)
throw H.a(H.cP(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
en:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.P(a[y],b[y]))return!1
return!0},
nu:function(a,b,c){return a.apply(b,H.aX(J.n(b)["$as"+H.c(c)],H.au(b)))},
P:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b1")return!0
if('func' in b)return H.ex(a,b)
if('func' in a)return b.builtin$cls==="m_"||b.builtin$cls==="d"
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
return H.en(H.aX(u,z),x)},
em:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.P(z,v)||H.P(v,z)))return!1}return!0},
kl:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aH(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.P(v,u)||H.P(u,v)))return!1}return!0},
ex:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.P(z,y)||H.P(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.em(x,w,!1))return!1
if(!H.em(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.P(o,n)||H.P(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.P(o,n)||H.P(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.P(o,n)||H.P(n,o)))return!1}}return H.kl(a.named,b.named)},
nv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kK:function(a){var z,y,x,w,v,u
z=$.ew.$1(a)
y=$.bE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bF[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.el.$2(a,z)
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
return u.i}if(v==="+")return H.eA(a,x)
if(v==="*")throw H.a(P.c9(z))
if(init.leafTags[z]===true){u=H.bH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eA(a,x)},
eA:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.co(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bH:function(a){return J.co(a,!1,null,!!a.$iso)},
kN:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bH(z)
else return J.co(z,c,null,null)},
kH:function(){if(!0===$.cm)return
$.cm=!0
H.kI()},
kI:function(){var z,y,x,w,v,u,t,s
$.bE=Object.create(null)
$.bF=Object.create(null)
H.kD()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eC.$1(v)
if(u!=null){t=H.kN(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kD:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.ar(C.G,H.ar(C.L,H.ar(C.u,H.ar(C.u,H.ar(C.K,H.ar(C.H,H.ar(C.I(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ew=new H.kE(v)
$.el=new H.kF(u)
$.eC=new H.kG(t)},
ar:function(a,b){return a(b)||b},
kS:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
kU:function(a,b,c,d){var z,y,x
z=b.dn(a,d)
if(z==null)return a
y=z.b
x=y.index
return H.kW(a,x,x+y[0].length,c)},
kT:function(a,b,c){var z,y
z=b.gbp()
z.lastIndex=0
y=a.replace(z,c.replace(/\$/g,"$$$$"))
return y},
kV:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.kU(a,b,c,d)},
kW:function(a,b,c,d){var z,y
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
hT:{"^":"d;a,b,c,d,e,f,r,x",p:{
hU:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aH(z)
y=z[0]
x=z[1]
return new H.hT(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
io:{"^":"d;a,b,c,d,e,f",
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
a3:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.io(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dN:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hF:{"^":"F;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+H.c(z)+"' on null"},
p:{
dp:function(a,b){return new H.hF(a,b==null?null:b.method)}}},
he:{"^":"F;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
p:{
c1:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.he(a,y,z?null:b.receiver)}}},
iq:{"^":"F;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kY:{"^":"h:0;a",
$1:function(a){if(!!J.n(a).$isF)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eb:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaP:1},
h:{"^":"d;",
k:function(a){return"Closure '"+H.aO(this).trim()+"'"},
gcr:function(){return this},
gcr:function(){return this}},
dC:{"^":"h;"},
i7:{"^":"dC;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bQ:{"^":"dC;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bQ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.aN(this.a)
else y=typeof z!=="object"?J.a6(z):H.aN(z)
return(y^H.aN(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.aO(z)+"'")},
p:{
bR:function(a){return a.a},
cO:function(a){return a.c},
bg:function(a){var z,y,x,w,v
z=new H.bQ("self","target","receiver","name")
y=J.aH(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ft:{"^":"F;a",
k:function(a){return this.a},
p:{
cP:function(a,b){return new H.ft("CastError: "+H.c(P.bV(a))+": type '"+H.kk(a)+"' is not a subtype of type '"+b+"'")}}},
i_:{"^":"F;a",
k:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
i0:function(a){return new H.i_(a)}}},
dS:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gA:function(a){return J.a6(this.a)},
C:function(a,b){if(b==null)return!1
return b instanceof H.dS&&J.A(this.a,b.a)}},
dc:{"^":"c4;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gF:function(a){return new H.hk(this,[H.D(this,0)])},
ag:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bl(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bl(y,b)}else return this.e9(b)},
e9:function(a){var z=this.d
if(z==null)return!1
return this.aG(this.av(z,J.a6(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.af(z,b)
x=y==null?null:y.ga9()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.af(w,b)
x=y==null?null:y.ga9()
return x}else return this.ea(b)},
ea:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.av(z,J.a6(a)&0x3ffffff)
x=this.aG(y,a)
if(x<0)return
return y[x].ga9()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.ay()
this.b=z}this.bd(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ay()
this.c=y}this.bd(y,b,c)}else{x=this.d
if(x==null){x=this.ay()
this.d=x}w=J.a6(b)&0x3ffffff
v=this.av(x,w)
if(v==null)this.aC(x,w,[this.ap(b,c)])
else{u=this.aG(v,b)
if(u>=0)v[u].sa9(c)
else v.push(this.ap(b,c))}}},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.J(this))
z=z.c}},
bd:function(a,b,c){var z=this.af(a,b)
if(z==null)this.aC(a,b,this.ap(b,c))
else z.sa9(c)},
be:function(){this.r=this.r+1&67108863},
ap:function(a,b){var z,y
z=new H.hj(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.be()
return z},
aG:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.A(a[y].ge8(),b))return y
return-1},
k:function(a){return P.dh(this)},
af:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aC:function(a,b,c){a[b]=c},
dj:function(a,b){delete a[b]},
bl:function(a,b){return this.af(a,b)!=null},
ay:function(){var z=Object.create(null)
this.aC(z,"<non-identifier-key>",z)
this.dj(z,"<non-identifier-key>")
return z}},
hj:{"^":"d;e8:a<,a9:b@,c,d"},
hk:{"^":"bT;a,$ti",
gj:function(a){return this.a.a},
gJ:function(a){var z,y
z=this.a
y=new H.aL(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
w:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.J(z))
y=y.c}}},
aL:{"^":"d;a,b,c,d,$ti",
gv:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.J(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kE:{"^":"h:0;a",
$1:function(a){return this.a(a)}},
kF:{"^":"h:10;a",
$2:function(a,b){return this.a(a,b)}},
kG:{"^":"h:11;a",
$1:function(a){return this.a(a)}},
hd:{"^":"d;a,b,c,d",
k:function(a){return"RegExp/"+this.a+"/"},
gbp:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.db(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
dn:function(a,b){var z,y
z=this.gbp()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.jg(this,y)},
p:{
db:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.bX("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
jg:{"^":"d;a,b",
h:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return z[b]}}}],["","",,H,{"^":"",
ku:function(a){return J.aH(H.w(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
aw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bC:function(a){var z,y,x
if(!!J.n(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.Y(b,a))},
hB:{"^":"i;","%":"DataView;ArrayBufferView;c5|e5|e6|dk|e7|e8|af"},
c5:{"^":"hB;",
gj:function(a){return a.length},
$ism:1,
$asm:I.as,
$iso:1,
$aso:I.as},
dk:{"^":"e6;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a4(b,a,a.length)
a[b]=c},
$asbk:function(){return[P.aU]},
$asj:function(){return[P.aU]},
$isf:1,
$asf:function(){return[P.aU]},
"%":"Float64Array"},
af:{"^":"e8;",
i:function(a,b,c){H.a4(b,a,a.length)
a[b]=c},
$asbk:function(){return[P.E]},
$asj:function(){return[P.E]},
$isf:1,
$asf:function(){return[P.E]}},
hA:{"^":"dk;",$isbW:1,"%":"Float32Array"},
mn:{"^":"af;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mo:{"^":"af;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
$ish4:1,
"%":"Int32Array"},
mp:{"^":"af;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mq:{"^":"af;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mr:{"^":"af;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ms:{"^":"af;",
gj:function(a){return a.length},
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mt:{"^":"af;",
gj:function(a){return a.length},
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e5:{"^":"c5+j;"},
e6:{"^":"e5+bk;"},
e7:{"^":"c5+j;"},
e8:{"^":"e7+bk;"}}],["","",,P,{"^":"",
iz:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.km()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.O(new P.iB(z),1)).observe(y,{childList:true})
return new P.iA(z,y,x)}else if(self.setImmediate!=null)return P.kn()
return P.ko()},
nh:[function(a){self.scheduleImmediate(H.O(new P.iC(a),0))},"$1","km",4,0,6],
ni:[function(a){self.setImmediate(H.O(new P.iD(a),0))},"$1","kn",4,0,6],
nj:[function(a){P.jP(0,a)},"$1","ko",4,0,6],
kf:function(a,b){if(H.er(a,{func:1,args:[P.b1,P.b1]})){b.toString
return a}else{b.toString
return a}},
fV:function(a,b,c){var z
if(a==null)a=new P.br()
z=$.r
if(z!==C.d)z.toString
z=new P.G(0,z,null,[c])
z.bh(a,b)
return z},
fW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.G(0,$.r,null,[P.f])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fY(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aQ(new P.fX(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.G(0,$.r,null,[null])
r.bg(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.Q(p)
t=H.ad(p)
if(z.b===0||!1)return P.fV(u,t,null)
else{z.c=u
z.d=t}}return y},
ke:function(){var z,y
for(;z=$.ap,z!=null;){$.aS=null
y=z.b
$.ap=y
if(y==null)$.aR=null
z.a.$0()}},
nt:[function(){$.cg=!0
try{P.ke()}finally{$.aS=null
$.cg=!1
if($.ap!=null)$.$get$cb().$1(P.eo())}},"$0","eo",0,0,3],
ej:function(a){var z=new P.dW(a,null)
if($.ap==null){$.aR=z
$.ap=z
if(!$.cg)$.$get$cb().$1(P.eo())}else{$.aR.b=z
$.aR=z}},
kj:function(a){var z,y,x
z=$.ap
if(z==null){P.ej(a)
$.aS=$.aR
return}y=new P.dW(a,null)
x=$.aS
if(x==null){y.b=z
$.aS=y
$.ap=y}else{y.b=x.b
x.b=y
$.aS=y
if(y.b==null)$.aR=y}},
kR:function(a){var z=$.r
if(C.d===z){P.aq(null,null,C.d,a)
return}z.toString
P.aq(null,null,z,z.bE(a))},
ki:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.Q(u)
y=H.ad(u)
$.r.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aB(x)
w=t
v=x.ga_()
c.$2(w,v)}}},
k6:function(a,b,c,d){var z=a.dQ(0)
if(!!J.n(z).$isS&&z!==$.$get$d6())z.ez(new P.k9(b,c,d))
else b.K(c,d)},
k7:function(a,b){return new P.k8(a,b)},
bD:function(a,b,c,d,e){var z={}
z.a=d
P.kj(new P.kg(z,e))},
eh:function(a,b,c,d){var z,y
y=$.r
if(y===c)return d.$0()
$.r=c
z=y
try{y=d.$0()
return y}finally{$.r=z}},
ei:function(a,b,c,d,e){var z,y
y=$.r
if(y===c)return d.$1(e)
$.r=c
z=y
try{y=d.$1(e)
return y}finally{$.r=z}},
kh:function(a,b,c,d,e,f){var z,y
y=$.r
if(y===c)return d.$2(e,f)
$.r=c
z=y
try{y=d.$2(e,f)
return y}finally{$.r=z}},
aq:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bE(d):c.dN(d)
P.ej(d)},
iB:{"^":"h:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iA:{"^":"h:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iC:{"^":"h:1;a",
$0:function(){this.a.$0()}},
iD:{"^":"h:1;a",
$0:function(){this.a.$0()}},
jO:{"^":"d;a,b,c",
de:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.O(new P.jQ(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
jP:function(a,b){var z=new P.jO(!0,null,0)
z.de(a,b)
return z}}},
jQ:{"^":"h:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
S:{"^":"d;$ti"},
fY:{"^":"h:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.K(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.K(z.c,z.d)}},
fX:{"^":"h;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.b(x,z)
x[z]=a
if(y===0)this.c.bk(x)}else if(z.b===0&&!this.e)this.c.K(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
lc:{"^":"d;$ti"},
dY:{"^":"d;$ti",
dT:function(a,b){if(a==null)a=new P.br()
if(this.a.a!==0)throw H.a(P.b5("Future already completed"))
$.r.toString
this.K(a,b)},
bO:function(a){return this.dT(a,null)}},
ca:{"^":"dY;a,$ti",
a8:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b5("Future already completed"))
z.bg(b)},
K:function(a,b){this.a.bh(a,b)}},
jJ:{"^":"dY;a,$ti",
a8:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b5("Future already completed"))
z.ae(b)},
K:function(a,b){this.a.K(a,b)}},
dZ:{"^":"d;aA:a<,b,c,d,e,$ti",
gdI:function(){return this.b.b},
gc1:function(){return(this.c&1)!==0},
ge7:function(){return(this.c&2)!==0},
gc0:function(){return this.c===8},
e5:function(a){return this.b.b.aO(this.d,a)},
ee:function(a){if(this.c!==6)return!0
return this.b.b.aO(this.d,J.aB(a))},
e4:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.er(z,{func:1,args:[P.d,P.aP]}))return x.en(z,y.gL(a),a.ga_())
else return x.aO(z,y.gL(a))},
e6:function(){return this.b.b.c9(this.d)}},
G:{"^":"d;bt:a<,b,dw:c<,$ti",
gdr:function(){return this.a===2},
gaw:function(){return this.a>=4},
aQ:function(a,b){var z,y,x
z=$.r
if(z!==C.d){z.toString
if(b!=null)b=P.kf(b,z)}y=new P.G(0,z,null,[null])
x=b==null?1:3
this.aq(new P.dZ(null,y,x,a,b,[H.D(this,0),null]))
return y},
aP:function(a){return this.aQ(a,null)},
ez:function(a){var z,y
z=$.r
y=new P.G(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.D(this,0)
this.aq(new P.dZ(null,y,8,a,null,[z,z]))
return y},
aq:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaw()){y.aq(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.aq(null,null,z,new P.iW(this,a))}},
bq:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaA()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaw()){v.bq(a)
return}this.a=v.a
this.c=v.c}z.a=this.aB(a)
y=this.b
y.toString
P.aq(null,null,y,new P.j2(z,this))}},
a4:function(){var z=this.c
this.c=null
return this.aB(z)},
aB:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaA()
z.a=y}return y},
ae:function(a){var z,y,x
z=this.$ti
y=H.b8(a,"$isS",z,"$asS")
if(y){z=H.b8(a,"$isG",z,null)
if(z)P.bB(a,this)
else P.e_(a,this)}else{x=this.a4()
this.a=4
this.c=a
P.ao(this,x)}},
bk:function(a){var z=this.a4()
this.a=4
this.c=a
P.ao(this,z)},
K:[function(a,b){var z=this.a4()
this.a=8
this.c=new P.bf(a,b)
P.ao(this,z)},function(a){return this.K(a,null)},"eC","$2","$1","gbj",4,2,13],
bg:function(a){var z=H.b8(a,"$isS",this.$ti,"$asS")
if(z){this.dh(a)
return}this.a=1
z=this.b
z.toString
P.aq(null,null,z,new P.iY(this,a))},
dh:function(a){var z=H.b8(a,"$isG",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.aq(null,null,z,new P.j1(this,a))}else P.bB(a,this)
return}P.e_(a,this)},
bh:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aq(null,null,z,new P.iX(this,a,b))},
$isS:1,
p:{
iV:function(a,b){var z=new P.G(0,$.r,null,[b])
z.a=4
z.c=a
return z},
e_:function(a,b){var z,y,x
b.a=1
try{a.aQ(new P.iZ(b),new P.j_(b))}catch(x){z=H.Q(x)
y=H.ad(x)
P.kR(new P.j0(b,z,y))}},
bB:function(a,b){var z
for(;a.gdr();)a=a.c
if(a.gaw()){z=b.a4()
b.a=a.a
b.c=a.c
P.ao(b,z)}else{z=b.c
b.a=2
b.c=a
a.bq(z)}},
ao:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aB(v)
t=v.ga_()
y.toString
P.bD(null,null,y,u,t)}return}for(;b.gaA()!=null;b=s){s=b.a
b.a=null
P.ao(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc1()||b.gc0()){q=b.gdI()
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
t=v.ga_()
y.toString
P.bD(null,null,y,u,t)
return}p=$.r
if(p==null?q!=null:p!==q)$.r=q
else p=null
if(b.gc0())new P.j5(z,x,b,w).$0()
else if(y){if(b.gc1())new P.j4(x,b,r).$0()}else if(b.ge7())new P.j3(z,x,b).$0()
if(p!=null)$.r=p
y=x.b
if(!!J.n(y).$isS){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aB(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bB(y,o)
return}}o=b.b
b=o.a4()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iW:{"^":"h:1;a,b",
$0:function(){P.ao(this.a,this.b)}},
j2:{"^":"h:1;a,b",
$0:function(){P.ao(this.b,this.a.a)}},
iZ:{"^":"h:0;a",
$1:function(a){var z=this.a
z.a=0
z.ae(a)}},
j_:{"^":"h:14;a",
$2:function(a,b){this.a.K(a,b)},
$1:function(a){return this.$2(a,null)}},
j0:{"^":"h:1;a,b,c",
$0:function(){this.a.K(this.b,this.c)}},
iY:{"^":"h:1;a,b",
$0:function(){this.a.bk(this.b)}},
j1:{"^":"h:1;a,b",
$0:function(){P.bB(this.b,this.a)}},
iX:{"^":"h:1;a,b,c",
$0:function(){this.a.K(this.b,this.c)}},
j5:{"^":"h:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e6()}catch(w){y=H.Q(w)
x=H.ad(w)
if(this.d){v=J.aB(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bf(y,x)
u.a=!0
return}if(!!J.n(z).$isS){if(z instanceof P.G&&z.gbt()>=4){if(z.gbt()===8){v=this.b
v.b=z.gdw()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.aP(new P.j6(t))
v.a=!1}}},
j6:{"^":"h:0;a",
$1:function(a){return this.a}},
j4:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e5(this.c)}catch(x){z=H.Q(x)
y=H.ad(x)
w=this.a
w.b=new P.bf(z,y)
w.a=!0}}},
j3:{"^":"h:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.ee(z)===!0&&w.e!=null){v=this.b
v.b=w.e4(z)
v.a=!1}}catch(u){y=H.Q(u)
x=H.ad(u)
w=this.a
v=J.aB(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bf(y,x)
s.a=!0}}},
dW:{"^":"d;a,b"},
dz:{"^":"d;$ti",
w:function(a,b){var z,y
z={}
y=new P.G(0,$.r,null,[null])
z.a=null
z.a=this.c4(new P.ie(z,this,b,y),!0,new P.ig(y),y.gbj())
return y},
gj:function(a){var z,y
z={}
y=new P.G(0,$.r,null,[P.E])
z.a=0
this.c4(new P.ih(z),!0,new P.ii(z,y),y.gbj())
return y}},
ie:{"^":"h;a,b,c,d",
$1:function(a){P.ki(new P.ic(this.c,a),new P.id(),P.k7(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.cl(this.b,"dz",0)]}}},
ic:{"^":"h:1;a,b",
$0:function(){return this.a.$1(this.b)}},
id:{"^":"h:0;",
$1:function(a){}},
ig:{"^":"h:1;a",
$0:function(){this.a.ae(null)}},
ih:{"^":"h:0;a",
$1:function(a){++this.a.a}},
ii:{"^":"h:1;a,b",
$0:function(){this.b.ae(this.a.a)}},
ib:{"^":"d;$ti"},
k9:{"^":"h:1;a,b,c",
$0:function(){return this.a.K(this.b,this.c)}},
k8:{"^":"h:15;a,b",
$2:function(a,b){P.k6(this.a,this.b,a,b)}},
bf:{"^":"d;L:a>,a_:b<",
k:function(a){return H.c(this.a)},
$isF:1},
jW:{"^":"d;"},
kg:{"^":"h:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.br()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aC(y)
throw x}},
js:{"^":"jW;",
eo:function(a){var z,y,x
try{if(C.d===$.r){a.$0()
return}P.eh(null,null,this,a)}catch(x){z=H.Q(x)
y=H.ad(x)
P.bD(null,null,this,z,y)}},
ep:function(a,b){var z,y,x
try{if(C.d===$.r){a.$1(b)
return}P.ei(null,null,this,a,b)}catch(x){z=H.Q(x)
y=H.ad(x)
P.bD(null,null,this,z,y)}},
dN:function(a){return new P.ju(this,a)},
bE:function(a){return new P.jt(this,a)},
dO:function(a){return new P.jv(this,a)},
h:function(a,b){return},
c9:function(a){if($.r===C.d)return a.$0()
return P.eh(null,null,this,a)},
aO:function(a,b){if($.r===C.d)return a.$1(b)
return P.ei(null,null,this,a,b)},
en:function(a,b,c){if($.r===C.d)return a.$2(b,c)
return P.kh(null,null,this,a,b,c)}},
ju:{"^":"h:1;a,b",
$0:function(){return this.a.c9(this.b)}},
jt:{"^":"h:1;a,b",
$0:function(){return this.a.eo(this.b)}},
jv:{"^":"h:0;a,b",
$1:function(a){return this.a.ep(this.b,a)}}}],["","",,P,{"^":"",
K:function(){return new H.dc(0,null,null,null,null,null,0,[null,null])},
de:function(a){return H.kv(a,new H.dc(0,null,null,null,null,null,0,[null,null]))},
W:function(a,b,c,d){return new P.je(0,null,null,null,null,null,0,[d])},
h5:function(a,b,c){var z,y
if(P.ch(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aT()
y.push(a)
try{P.kd(a,z)}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=P.dA(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bZ:function(a,b,c){var z,y,x
if(P.ch(a))return b+"..."+c
z=new P.c7(b)
y=$.$get$aT()
y.push(a)
try{x=z
x.a=P.dA(x.ga0(),a,", ")}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=z
y.a=y.ga0()+c
y=z.ga0()
return y.charCodeAt(0)==0?y:y},
ch:function(a){var z,y
for(z=0;y=$.$get$aT(),z<y.length;++z)if(a===y[z])return!0
return!1},
kd:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gJ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.c(z.gv(z))
b.push(w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.b(b,-1)
v=b.pop()
if(0>=b.length)return H.b(b,-1)
u=b.pop()}else{t=z.gv(z);++x
if(!z.q()){if(x<=4){b.push(H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.b(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gv(z);++x
for(;z.q();t=s,s=r){r=z.gv(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.c(t)
v=H.c(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
c2:function(a,b){var z,y
z=P.W(null,null,null,b)
for(y=J.ak(a);y.q();)z.O(0,y.gv(y))
return z},
dh:function(a){var z,y,x
z={}
if(P.ch(a))return"{...}"
y=new P.c7("")
try{$.$get$aT().push(a)
x=y
x.a=x.ga0()+"{"
z.a=!0
J.cx(a,new P.hn(z,y))
z=y
z.a=z.ga0()+"}"}finally{z=$.$get$aT()
if(0>=z.length)return H.b(z,-1)
z.pop()}z=y.ga0()
return z.charCodeAt(0)==0?z:z},
je:{"^":"j8;a,b,c,d,e,f,r,$ti",
gJ:function(a){var z=new P.ce(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.di(b)},
di:function(a){var z=this.d
if(z==null)return!1
return this.au(z[this.ar(a)],a)>=0},
w:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.J(this))
z=z.b}},
O:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cf()
this.b=z}return this.bf(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cf()
this.c=y}return this.bf(y,b)}else return this.df(0,b)},
df:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cf()
this.d=z}y=this.ar(b)
x=z[y]
if(x==null)z[y]=[this.az(b)]
else{if(this.au(x,b)>=0)return!1
x.push(this.az(b))}return!0},
c8:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.br(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.br(this.c,b)
else return this.dt(0,b)},
dt:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.ar(b)]
x=this.au(y,b)
if(x<0)return!1
this.bv(y.splice(x,1)[0])
return!0},
a6:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ax()}},
bf:function(a,b){if(a[b]!=null)return!1
a[b]=this.az(b)
return!0},
br:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bv(z)
delete a[b]
return!0},
ax:function(){this.r=this.r+1&67108863},
az:function(a){var z,y
z=new P.jf(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ax()
return z},
bv:function(a){var z,y
z=a.gds()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ax()},
ar:function(a){return J.a6(a)&0x3ffffff},
au:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.A(a[y].gdk(),b))return y
return-1},
p:{
cf:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jf:{"^":"d;dk:a<,b,ds:c<"},
ce:{"^":"d;a,b,c,d,$ti",
gv:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.J(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
j8:{"^":"i1;$ti"},
mb:{"^":"d;$ti"},
df:{"^":"e4;$ti",$isf:1},
j:{"^":"d;$ti",
gJ:function(a){return new H.dg(a,this.gj(a),0,null,[H.bb(this,a,"j",0)])},
t:function(a,b){return this.h(a,b)},
w:function(a,b){var z,y
z=this.gj(a)
if(typeof z!=="number")return H.x(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.a(P.J(a))}},
e2:function(a,b,c){var z,y,x
z=this.gj(a)
if(typeof z!=="number")return H.x(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.J(a))}return y},
b1:function(a,b){return H.dB(a,b,null,H.bb(this,a,"j",0))},
l:function(a,b){var z,y,x
z=H.w([],[H.bb(this,a,"j",0)])
y=this.gj(a)
x=C.b.gj(b)
if(typeof y!=="number")return y.l()
C.c.sj(z,C.b.l(y,x))
C.c.ac(z,0,this.gj(a),a)
C.c.ac(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.bZ(a,"[","]")}},
c4:{"^":"T;$ti"},
hn:{"^":"h:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
T:{"^":"d;$ti",
w:function(a,b){var z,y
for(z=J.ak(this.gF(a));z.q();){y=z.gv(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a0(this.gF(a))},
k:function(a){return P.dh(a)}},
i2:{"^":"d;$ti",
M:function(a,b){var z
for(z=J.ak(b);z.q();)this.O(0,z.gv(z))},
k:function(a){return P.bZ(this,"{","}")},
w:function(a,b){var z
for(z=new P.ce(this,this.r,null,null,[null]),z.c=this.e;z.q();)b.$1(z.d)}},
i1:{"^":"i2;$ti"},
e4:{"^":"d+j;$ti"}}],["","",,P,{"^":"",
cn:function(a,b,c){var z=H.hR(a,c)
if(z!=null)return z
throw H.a(P.bX(a,null,null))},
aj:function(a,b){var z=H.hQ(a)
if(z!=null)return z
throw H.a(P.bX("Invalid double",a,null))},
fN:function(a){var z=J.n(a)
if(!!z.$ish)return z.k(a)
return"Instance of '"+H.aO(a)+"'"},
ds:function(a,b,c){return new H.hd(a,H.db(a,!1,!0,!1),null,null)},
bV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aC(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fN(a)},
d4:function(a){return new P.iR(a)},
a_:function(a){H.aw(H.c(a))},
ci:{"^":"d;"},
"+bool":0,
bi:{"^":"d;dH:a<,b",
gef:function(){return this.a},
cP:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.a(P.fn("DateTime is outside valid range: "+this.gef()))},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.bi))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.gdH())},
gA:function(a){var z=this.a
return(z^C.b.bs(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fD(H.hP(this))
y=P.b_(H.hN(this))
x=P.b_(H.hJ(this))
w=P.b_(H.hK(this))
v=P.b_(H.hM(this))
u=P.b_(H.hO(this))
t=P.fE(H.hL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
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
b_:function(a){if(a>=10)return""+a
return"0"+a}}},
aU:{"^":"aW;"},
"+double":0,
b0:{"^":"d;a3:a<",
l:function(a,b){return new P.b0(C.b.l(this.a,b.ga3()))},
D:function(a,b){return new P.b0(this.a-b.ga3())},
T:function(a,b){return C.b.T(this.a,b.ga3())},
ab:function(a,b){return C.b.ab(this.a,b.ga3())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.b0))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.ga3())},
k:function(a){var z,y,x,w,v
z=new P.fK()
y=this.a
if(y<0)return"-"+new P.b0(0-y).k(0)
x=z.$1(C.b.W(y,6e7)%60)
w=z.$1(C.b.W(y,1e6)%60)
v=new P.fJ().$1(y%1e6)
return""+C.b.W(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
p:{
d0:function(a,b,c,d,e,f){return new P.b0(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fJ:{"^":"h:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fK:{"^":"h:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
F:{"^":"d;",
ga_:function(){return H.ad(this.$thrownJsError)}},
br:{"^":"F;",
k:function(a){return"Throw of null."}},
a7:{"^":"F;a,b,c,d",
gat:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gas:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.c(z)
w=this.gat()+y+x
if(!this.a)return w
v=this.gas()
u=P.bV(this.b)
return w+v+": "+H.c(u)},
p:{
fn:function(a){return new P.a7(!1,null,null,a)},
cL:function(a,b,c){return new P.a7(!0,a,b,c)},
fo:function(a){return new P.a7(!1,null,a,"Must not be null")}}},
dr:{"^":"a7;e,f,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
bs:function(a,b,c){return new P.dr(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.dr(b,c,!0,a,d,"Invalid value")},
hS:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.x(a)
if(0<=a){if(typeof c!=="number")return H.x(c)
z=a>c}else z=!0
if(z)throw H.a(P.an(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.x(c)
z=b>c}else z=!0
if(z)throw H.a(P.an(b,a,c,"end",f))
return b}return c}}},
h3:{"^":"a7;e,j:f>,a,b,c,d",
gat:function(){return"RangeError"},
gas:function(){if(J.az(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
p:{
y:function(a,b,c,d,e){var z=e!=null?e:J.a0(b)
return new P.h3(b,z,!0,a,c,"Index out of range")}}},
ir:{"^":"F;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.ir(a)}}},
ip:{"^":"F;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.c(z):"UnimplementedError"},
p:{
c9:function(a){return new P.ip(a)}}},
bv:{"^":"F;a",
k:function(a){return"Bad state: "+this.a},
p:{
b5:function(a){return new P.bv(a)}}},
fz:{"^":"F;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.bV(z))+"."},
p:{
J:function(a){return new P.fz(a)}}},
dx:{"^":"d;",
k:function(a){return"Stack Overflow"},
ga_:function(){return},
$isF:1},
fC:{"^":"F;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.c(z)+"' during its initialization"}},
ly:{"^":"d;"},
iR:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
fT:{"^":"d;a,b,c",
k:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.c(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.an(x,0,75)+"..."
return y+"\n"+x},
p:{
bX:function(a,b,c){return new P.fT(a,b,c)}}},
E:{"^":"aW;"},
"+int":0,
bn:{"^":"d;$ti",
aS:["cF",function(a,b){return new H.dV(this,b,[H.cl(this,"bn",0)])}],
w:function(a,b){var z
for(z=this.gJ(this);z.q();)b.$1(z.gv(z))},
gj:function(a){var z,y
z=this.gJ(this)
for(y=0;z.q();)++y
return y},
gZ:function(a){var z,y
z=this.gJ(this)
if(!z.q())throw H.a(H.d7())
y=z.gv(z)
if(z.q())throw H.a(H.h7())
return y},
t:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.fo("index"))
if(b<0)H.I(P.an(b,0,null,"index",null))
for(z=this.gJ(this),y=0;z.q();){x=z.gv(z)
if(b===y)return x;++y}throw H.a(P.y(b,this,"index",null,y))},
k:function(a){return P.h5(this,"(",")")}},
h8:{"^":"d;$ti"},
f:{"^":"d;$ti"},
"+List":0,
c3:{"^":"d;$ti"},
b1:{"^":"d;",
gA:function(a){return P.d.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aW:{"^":"d;"},
"+num":0,
d:{"^":";",
C:function(a,b){return this===b},
gA:function(a){return H.aN(this)},
k:function(a){return"Instance of '"+H.aO(this)+"'"},
toString:function(){return this.k(this)}},
mK:{"^":"d;"},
aP:{"^":"d;"},
l:{"^":"d;"},
"+String":0,
c7:{"^":"d;a0:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dA:function(a,b,c){var z=J.ak(b)
if(!z.q())return a
if(c.length===0){do a+=H.c(z.gv(z))
while(z.q())}else{a+=H.c(z.gv(z))
for(;z.q();)a=a+c+H.c(z.gv(z))}return a}}}}],["","",,W,{"^":"",
ep:function(){return document},
eB:function(a){var z,y
z=new P.G(0,$.r,null,[null])
y=new P.ca(z,[null])
a.then(H.O(new W.kO(y),1),H.O(new W.kP(y),1))
return z},
fL:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).R(z,a,b,c)
y.toString
z=new H.dV(new W.U(y),new W.fM(),[W.t])
return z.gZ(z)},
d3:function(a){return"wheel"},
aE:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f1(a)
if(typeof y==="string")z=a.tagName}catch(x){H.Q(x)}return z},
iO:function(a,b){return document.createElement(a)},
ai:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eg:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iI(a)
if(!!J.n(z).$isB)return z
return}else return a},
ka:function(a){var z
if(!!J.n(a).$isd_)return a
z=new P.iw([],[],!1)
z.c=!0
return z.aR(a)},
ek:function(a){var z=$.r
if(z===C.d)return a
return z.dO(a)},
kO:{"^":"h:0;a",
$1:function(a){return this.a.a8(0,a)}},
kP:{"^":"h:0;a",
$1:function(a){return this.a.bO(a)}},
u:{"^":"al;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kZ:{"^":"c6;m:x=,n:y=,H:z=","%":"Accelerometer|LinearAccelerationSensor"},
l_:{"^":"i;j:length=","%":"AccessibleNodeList"},
l0:{"^":"u;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l1:{"^":"u;ah:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
l6:{"^":"u;ah:href}","%":"HTMLBaseElement"},
bP:{"^":"u;",$isbP:1,"%":"HTMLBodyElement"},
l7:{"^":"u;I:name=","%":"HTMLButtonElement"},
l8:{"^":"i;",
eb:[function(a){return W.eB(a.keys())},"$0","gF",1,0,16],
"%":"CacheStorage"},
l9:{"^":"u;E:height},G:width}",
cs:function(a,b,c){var z=a.getContext(b,P.kp(c,null))
return z},
"%":"HTMLCanvasElement"},
la:{"^":"i;",
am:function(a){return P.V(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lb:{"^":"t;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ld:{"^":"a2;V:style=","%":"CSSFontFaceRule"},
le:{"^":"a2;V:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
lf:{"^":"a2;V:style=","%":"CSSPageRule"},
lg:{"^":"bh;j:length=","%":"CSSPerspective"},
lh:{"^":"bS;m:x=,n:y=","%":"CSSPositionValue"},
li:{"^":"bh;m:x=,n:y=,H:z=","%":"CSSRotation"},
a2:{"^":"i;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
lj:{"^":"bh;m:x=,n:y=,H:z=","%":"CSSScale"},
fA:{"^":"iG;j:length=",
bi:function(a,b){var z,y
z=$.$get$cT()
y=z[b]
if(typeof y==="string")return y
y=this.dE(a,b)
z[b]=y
return y},
dE:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fF()+b
if(z in a)return z
return b},
dB:function(a,b,c,d){a.setProperty(b,c,d)},
sE:function(a,b){a.height=b},
sG:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fB:{"^":"d;",
se1:function(a,b){this.dB(a,this.bi(a,"float"),b,"")}},
lk:{"^":"a2;V:style=","%":"CSSStyleRule"},
bS:{"^":"i;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bh:{"^":"i;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
ll:{"^":"bS;j:length=","%":"CSSTransformValue"},
lm:{"^":"bh;m:x=,n:y=,H:z=","%":"CSSTranslation"},
ln:{"^":"bS;j:length=","%":"CSSUnparsedValue"},
lo:{"^":"a2;V:style=","%":"CSSViewportRule"},
lp:{"^":"i;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lq:{"^":"i;m:x=,n:y=,H:z=","%":"DeviceAcceleration"},
fG:{"^":"u;","%":"HTMLDivElement"},
d_:{"^":"t;",
gaJ:function(a){return new W.b7(a,"mousedown",!1,[W.M])},
gaK:function(a){return new W.b7(a,"mousemove",!1,[W.M])},
gaL:function(a){return new W.b7(a,"mouseup",!1,[W.M])},
gaM:function(a){return new W.b7(a,W.d3(a),!1,[W.aQ])},
$isd_:1,
"%":"Document|HTMLDocument|XMLDocument"},
lr:{"^":"i;",
k:function(a){return String(a)},
"%":"DOMException"},
ls:{"^":"fH;",
gal:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z},
"%":"DOMPoint"},
fH:{"^":"i;",
gal:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z},
"%":";DOMPointReadOnly"},
lt:{"^":"iK;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.aa]},
$iso:1,
$aso:function(){return[P.aa]},
$asj:function(){return[P.aa]},
$isf:1,
$asf:function(){return[P.aa]},
$ask:function(){return[P.aa]},
"%":"ClientRectList|DOMRectList"},
fI:{"^":"i;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gG(a))+" x "+H.c(this.gE(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isaa)return!1
return a.left===z.gc2(b)&&a.top===z.gca(b)&&this.gG(a)===z.gG(b)&&this.gE(a)===z.gE(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gG(a)
w=this.gE(a)
return W.e3(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcb:function(a){return new P.a9(a.left,a.top,[null])},
gE:function(a){return a.height},
gc2:function(a){return a.left},
gca:function(a){return a.top},
gG:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isaa:1,
$asaa:I.as,
"%":";DOMRectReadOnly"},
lu:{"^":"iM;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$iso:1,
$aso:function(){return[P.l]},
$asj:function(){return[P.l]},
$isf:1,
$asf:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
lv:{"^":"i;j:length=","%":"DOMTokenList"},
al:{"^":"t;V:style=,bo:namespaceURI=,eq:tagName=",
gdL:function(a){return new W.iN(a)},
k:function(a){return a.localName},
R:["ao",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d2
if(z==null){z=H.w([],[W.dm])
y=new W.dn(z)
z.push(W.e0(null))
z.push(W.ec())
$.d2=y
d=y}else d=z
z=$.d1
if(z==null){z=new W.ef(d)
$.d1=z
c=z}else{z.a=d
c=z}}if($.a8==null){z=document
y=z.implementation.createHTMLDocument("")
$.a8=y
$.bU=y.createRange()
y=$.a8
y.toString
x=y.createElement("base")
J.fb(x,z.baseURI)
$.a8.head.appendChild(x)}z=$.a8
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a8
if(!!this.$isbP)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a8.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.u(C.O,a.tagName)){$.bU.selectNodeContents(w)
v=$.bU.createContextualFragment(b)}else{w.innerHTML=b
v=$.a8.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a8.body
if(w==null?z!=null:w!==z)J.cD(w)
c.b_(v)
document.adoptNode(v)
return v},function(a,b,c){return this.R(a,b,c,null)},"dW",null,null,"geD",5,5,null],
cu:function(a,b,c,d){a.textContent=null
a.appendChild(this.R(a,b,c,d))},
ct:function(a,b){return this.cu(a,b,null,null)},
aT:function(a){return a.getBoundingClientRect()},
gaJ:function(a){return new W.ah(a,"mousedown",!1,[W.M])},
gaK:function(a){return new W.ah(a,"mousemove",!1,[W.M])},
gaL:function(a){return new W.ah(a,"mouseup",!1,[W.M])},
gaM:function(a){return new W.ah(a,W.d3(a),!1,[W.aQ])},
$isal:1,
"%":";Element"},
fM:{"^":"h:0;",
$1:function(a){return!!J.n(a).$isal}},
lw:{"^":"u;E:height},I:name=,G:width}","%":"HTMLEmbedElement"},
lx:{"^":"ae;L:error=","%":"ErrorEvent"},
ae:{"^":"i;",
ak:function(a){return a.preventDefault()},
$isae:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
B:{"^":"i;",
bA:["cD",function(a,b,c,d){if(c!=null)this.dg(a,b,c,!1)}],
dg:function(a,b,c,d){return a.addEventListener(b,H.O(c,1),!1)},
du:function(a,b,c,d){return a.removeEventListener(b,H.O(c,1),!1)},
$isB:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e9|ea|ed|ee"},
lR:{"^":"u;I:name=","%":"HTMLFieldSetElement"},
lS:{"^":"iU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bj]},
$iso:1,
$aso:function(){return[W.bj]},
$asj:function(){return[W.bj]},
$isf:1,
$asf:function(){return[W.bj]},
$ask:function(){return[W.bj]},
"%":"FileList"},
lT:{"^":"B;L:error=","%":"FileReader"},
lU:{"^":"B;L:error=,j:length=","%":"FileWriter"},
lW:{"^":"i;V:style=","%":"FontFace"},
lX:{"^":"B;",
eE:function(a,b,c){return a.forEach(H.O(b,3),c)},
w:function(a,b){b=H.O(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lZ:{"^":"u;j:length=,I:name=","%":"HTMLFormElement"},
m0:{"^":"c6;m:x=,n:y=,H:z=","%":"Gyroscope"},
m1:{"^":"i;j:length=","%":"History"},
m2:{"^":"ja;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.t]},
$iso:1,
$aso:function(){return[W.t]},
$asj:function(){return[W.t]},
$isf:1,
$asf:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h0:{"^":"h1;",
eF:function(a,b,c,d,e,f){return a.open(b,c)},
eh:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
h1:{"^":"B;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
m3:{"^":"u;E:height},I:name=,G:width}","%":"HTMLIFrameElement"},
m4:{"^":"u;E:height},G:width}","%":"HTMLImageElement"},
bY:{"^":"u;E:height},I:name=,G:width}",$isbY:1,"%":"HTMLInputElement"},
bo:{"^":"dT;",
geA:function(a){return a.which},
$isbo:1,
"%":"KeyboardEvent"},
ma:{"^":"u;ah:href}","%":"HTMLLinkElement"},
mc:{"^":"i;",
k:function(a){return String(a)},
"%":"Location"},
md:{"^":"c6;m:x=,n:y=,H:z=","%":"Magnetometer"},
me:{"^":"u;I:name=","%":"HTMLMapElement"},
hq:{"^":"u;L:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mg:{"^":"i;j:length=","%":"MediaList"},
mh:{"^":"B;aF:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
mi:{"^":"B;",
bA:function(a,b,c,d){if(J.A(b,"message"))a.start()
this.cD(a,b,c,!1)},
"%":"MessagePort"},
mj:{"^":"u;I:name=","%":"HTMLMetaElement"},
mk:{"^":"jh;",
h:function(a,b){return P.V(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gF:function(a){var z=H.w([],[P.l])
this.w(a,new W.hs(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.p("Not supported"))},
$asT:function(){return[P.l,null]},
"%":"MIDIInputMap"},
hs:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
ml:{"^":"ji;",
h:function(a,b){return P.V(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gF:function(a){var z=H.w([],[P.l])
this.w(a,new W.ht(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.p("Not supported"))},
$asT:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
ht:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
mm:{"^":"jk;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bq]},
$iso:1,
$aso:function(){return[W.bq]},
$asj:function(){return[W.bq]},
$isf:1,
$asf:function(){return[W.bq]},
$ask:function(){return[W.bq]},
"%":"MimeTypeArray"},
M:{"^":"dT;bK:button=",
geg:function(a){return new P.a9(a.movementX,a.movementY,[null])},
gc7:function(a){var z,y,x
if(!!a.offsetX)return new P.a9(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.eg(z)).$isal)throw H.a(P.p("offsetX is only supported on elements"))
y=W.eg(z)
z=[null]
x=new P.a9(a.clientX,a.clientY,z).D(0,J.f2(J.f4(y)))
return new P.a9(J.cF(x.a),J.cF(x.b),z)}},
$isM:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
U:{"^":"df;a",
gZ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.b5("No elements"))
if(y>1)throw H.a(P.b5("More than one element"))
return z.firstChild},
M:function(a,b){var z,y,x,w
z=J.n(b)
if(!!z.$isU){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gJ(b),y=this.a;z.q();)y.appendChild(z.gv(z))},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.b(y,b)
z.replaceChild(c,y[b])},
gJ:function(a){var z=this.a.childNodes
return new W.d5(z,z.length,-1,null,[H.bb(C.Q,z,"k",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return z[b]},
$asdf:function(){return[W.t]},
$asj:function(){return[W.t]},
$asf:function(){return[W.t]},
$ase4:function(){return[W.t]}},
t:{"^":"B;aj:parentNode=,aN:previousSibling=",
gc6:function(a){return new W.U(a)},
ej:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cE(a):z},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mu:{"^":"i;",
ei:[function(a){return a.previousNode()},"$0","gaN",1,0,4],
"%":"NodeIterator"},
hC:{"^":"jm;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.t]},
$iso:1,
$aso:function(){return[W.t]},
$asj:function(){return[W.t]},
$isf:1,
$asf:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
mx:{"^":"u;E:height},I:name=,G:width}","%":"HTMLObjectElement"},
mz:{"^":"u;I:name=","%":"HTMLOutputElement"},
mA:{"^":"u;I:name=","%":"HTMLParamElement"},
mC:{"^":"i;",
eb:[function(a){return W.eB(a.keys())},"$0","gF",1,0,17],
"%":"PaymentInstruments"},
b2:{"^":"i;j:length=","%":"Plugin"},
mD:{"^":"jq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b2]},
$iso:1,
$aso:function(){return[W.b2]},
$asj:function(){return[W.b2]},
$isf:1,
$asf:function(){return[W.b2]},
$ask:function(){return[W.b2]},
"%":"PluginArray"},
mH:{"^":"i;",
aT:function(a){return a.getBoundingClientRect()},
"%":"Range"},
mO:{"^":"jw;",
h:function(a,b){return P.V(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gF:function(a){var z=H.w([],[P.l])
this.w(a,new W.hZ(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.p("Not supported"))},
$asT:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hZ:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
mP:{"^":"u;j:length=,I:name=","%":"HTMLSelectElement"},
c6:{"^":"B;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mQ:{"^":"ae;L:error=","%":"SensorErrorEvent"},
mR:{"^":"u;I:name=","%":"HTMLSlotElement"},
mS:{"^":"ea;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bt]},
$iso:1,
$aso:function(){return[W.bt]},
$asj:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$ask:function(){return[W.bt]},
"%":"SourceBufferList"},
mT:{"^":"jC;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bu]},
$iso:1,
$aso:function(){return[W.bu]},
$asj:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$ask:function(){return[W.bu]},
"%":"SpeechGrammarList"},
mU:{"^":"ae;L:error=","%":"SpeechRecognitionError"},
b4:{"^":"i;j:length=","%":"SpeechRecognitionResult"},
mW:{"^":"jF;",
h:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
w:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gF:function(a){var z=H.w([],[P.l])
this.w(a,new W.ia(z))
return z},
gj:function(a){return a.length},
$asT:function(){return[P.l,P.l]},
"%":"Storage"},
ia:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},
ik:{"^":"u;",
R:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=W.fL("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.U(y).M(0,J.f_(z))
return y},
"%":"HTMLTableElement"},
mZ:{"^":"u;",
R:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.gZ(z)
x.toString
z=new W.U(x)
w=z.gZ(z)
y.toString
w.toString
new W.U(y).M(0,new W.U(w))
return y},
"%":"HTMLTableRowElement"},
n_:{"^":"u;",
R:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ao(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.gZ(z)
y.toString
x.toString
new W.U(y).M(0,new W.U(x))
return y},
"%":"HTMLTableSectionElement"},
dD:{"^":"u;",$isdD:1,"%":"HTMLTemplateElement"},
n0:{"^":"u;I:name=","%":"HTMLTextAreaElement"},
n2:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.by]},
$iso:1,
$aso:function(){return[W.by]},
$asj:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$ask:function(){return[W.by]},
"%":"TextTrackCueList"},
n3:{"^":"ee;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bx]},
$iso:1,
$aso:function(){return[W.bx]},
$asj:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$ask:function(){return[W.bx]},
"%":"TextTrackList"},
n4:{"^":"i;j:length=","%":"TimeRanges"},
n5:{"^":"jS;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bz]},
$iso:1,
$aso:function(){return[W.bz]},
$asj:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$ask:function(){return[W.bz]},
"%":"TouchList"},
n6:{"^":"i;j:length=","%":"TrackDefaultList"},
n9:{"^":"i;",
eG:[function(a){return a.parentNode()},"$0","gaj",1,0,4],
ei:[function(a){return a.previousNode()},"$0","gaN",1,0,4],
"%":"TreeWalker"},
dT:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nb:{"^":"i;",
k:function(a){return String(a)},
"%":"URL"},
nd:{"^":"i;m:x=,H:z=","%":"VRStageBoundsPoint"},
ne:{"^":"hq;E:height},G:width}","%":"HTMLVideoElement"},
nf:{"^":"B;j:length=","%":"VideoTrackList"},
aQ:{"^":"M;",
gdY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaQ:1,
"%":"WheelEvent"},
it:{"^":"B;",
gdK:function(a){var z,y
z=P.aW
y=new P.G(0,$.r,null,[z])
this.dm(a)
this.dv(a,W.ek(new W.iu(new P.jJ(y,[z]))))
return y},
dv:function(a,b){return a.requestAnimationFrame(H.O(b,1))},
dm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
iu:{"^":"h:0;a",
$1:function(a){this.a.a8(0,a)}},
ng:{"^":"B;"},
nk:{"^":"t;I:name=,bo:namespaceURI=","%":"Attr"},
nl:{"^":"jY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.a2]},
$iso:1,
$aso:function(){return[W.a2]},
$asj:function(){return[W.a2]},
$isf:1,
$asf:function(){return[W.a2]},
$ask:function(){return[W.a2]},
"%":"CSSRuleList"},
nm:{"^":"fI;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isaa)return!1
return a.left===z.gc2(b)&&a.top===z.gca(b)&&a.width===z.gG(b)&&a.height===z.gE(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.e3(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcb:function(a){return new P.a9(a.left,a.top,[null])},
gE:function(a){return a.height},
gG:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nn:{"^":"k_;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$iso:1,
$aso:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$ask:function(){return[W.bm]},
"%":"GamepadList"},
nq:{"^":"k1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.t]},
$iso:1,
$aso:function(){return[W.t]},
$asj:function(){return[W.t]},
$isf:1,
$asf:function(){return[W.t]},
$ask:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nr:{"^":"k3;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b4]},
$iso:1,
$aso:function(){return[W.b4]},
$asj:function(){return[W.b4]},
$isf:1,
$asf:function(){return[W.b4]},
$ask:function(){return[W.b4]},
"%":"SpeechRecognitionResultList"},
ns:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bw]},
$iso:1,
$aso:function(){return[W.bw]},
$asj:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$ask:function(){return[W.bw]},
"%":"StyleSheetList"},
iE:{"^":"c4;dq:a<",
w:function(a,b){var z,y,x,w,v
for(z=this.gF(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gF:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.w([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
v=z[w]
u=J.e(v)
if(u.gbo(v)==null)y.push(u.gI(v))}return y},
$asc4:function(){return[P.l,P.l]},
$asT:function(){return[P.l,P.l]}},
iN:{"^":"iE;a",
h:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gj:function(a){return this.gF(this).length}},
b7:{"^":"dz;a,b,c,$ti",
c4:function(a,b,c,d){return W.ac(this.a,this.b,a,!1,H.D(this,0))}},
ah:{"^":"b7;a,b,c,$ti"},
iP:{"^":"ib;a,b,c,d,e,$ti",
d9:function(a,b,c,d,e){this.dF()},
dQ:function(a){if(this.b==null)return
this.dG()
this.b=null
this.d=null
return},
dF:function(){var z=this.d
if(z!=null&&this.a<=0)J.eH(this.b,this.c,z,!1)},
dG:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eG(x,this.c,z,!1)}},
p:{
ac:function(a,b,c,d,e){var z=c==null?null:W.ek(new W.iQ(c))
z=new W.iP(0,a,b,z,!1,[e])
z.d9(a,b,c,!1,e)
return z}}},
iQ:{"^":"h:0;a",
$1:function(a){return this.a.$1(a)}},
cc:{"^":"d;cm:a<",
da:function(a){var z,y
z=$.$get$cd()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.N[y],W.kB())
for(y=0;y<12;++y)z.i(0,C.p[y],W.kC())}},
a1:function(a){return $.$get$e1().u(0,W.aE(a))},
X:function(a,b,c){var z,y,x
z=W.aE(a)
y=$.$get$cd()
x=y.h(0,H.c(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
e0:function(a){var z,y
z=document.createElement("a")
y=new W.jx(z,window.location)
y=new W.cc(y)
y.da(a)
return y},
no:[function(a,b,c,d){return!0},"$4","kB",16,0,9],
np:[function(a,b,c,d){var z,y,x,w,v
z=d.gcm()
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
return z},"$4","kC",16,0,9]}},
k:{"^":"d;$ti",
gJ:function(a){return new W.d5(a,this.gj(a),-1,null,[H.bb(this,a,"k",0)])}},
dn:{"^":"d;a",
a1:function(a){return C.c.bB(this.a,new W.hE(a))},
X:function(a,b,c){return C.c.bB(this.a,new W.hD(a,b,c))}},
hE:{"^":"h:0;a",
$1:function(a){return a.a1(this.a)}},
hD:{"^":"h:0;a,b,c",
$1:function(a){return a.X(this.a,this.b,this.c)}},
jy:{"^":"d;cm:d<",
dd:function(a,b,c,d){var z,y,x
this.a.M(0,c)
z=b.aS(0,new W.jz())
y=b.aS(0,new W.jA())
this.b.M(0,z)
x=this.c
x.M(0,C.w)
x.M(0,y)},
a1:function(a){return this.a.u(0,W.aE(a))},
X:["cH",function(a,b,c){var z,y
z=W.aE(a)
y=this.c
if(y.u(0,H.c(z)+"::"+b))return this.d.dJ(c)
else if(y.u(0,"*::"+b))return this.d.dJ(c)
else{y=this.b
if(y.u(0,H.c(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.c(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}]},
jz:{"^":"h:0;",
$1:function(a){return!C.c.u(C.p,a)}},
jA:{"^":"h:0;",
$1:function(a){return C.c.u(C.p,a)}},
jK:{"^":"jy;e,a,b,c,d",
X:function(a,b,c){if(this.cH(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cy(a).a.getAttribute("template")==="")return this.e.u(0,b)
return!1},
p:{
ec:function(){var z=P.l
z=new W.jK(P.c2(C.o,z),P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),null)
z.dd(null,new H.ho(C.o,new W.jL(),[H.D(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jL:{"^":"h:0;",
$1:function(a){return"TEMPLATE::"+H.c(a)}},
jI:{"^":"d;",
a1:function(a){var z=J.n(a)
if(!!z.$isdu)return!1
z=!!z.$isz
if(z&&W.aE(a)==="foreignObject")return!1
if(z)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.i.cA(b,"on"))return!1
return this.a1(a)}},
d5:{"^":"d;a,b,c,d,$ti",
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aA(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gv:function(a){return this.d}},
iH:{"^":"d;a",$isB:1,p:{
iI:function(a){if(a===window)return a
else return new W.iH(a)}}},
dm:{"^":"d;"},
mv:{"^":"d;"},
na:{"^":"d;"},
jx:{"^":"d;a,b"},
ef:{"^":"d;a",
b_:function(a){new W.jV(this).$2(a,null)},
a5:function(a,b){if(b==null)J.cD(a)
else b.removeChild(a)},
dA:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cy(a)
x=y.gdq().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Q(t)}v="element unprintable"
try{v=J.aC(a)}catch(t){H.Q(t)}try{u=W.aE(a)
this.dz(a,b,z,v,u,y,x)}catch(t){if(H.Q(t) instanceof P.a7)throw t
else{this.a5(a,b)
window
s="Removing corrupted element "+H.c(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dz:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a5(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a1(a)){this.a5(a,b)
window
z="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.a5(a,b)
window
z="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gF(f)
y=H.w(z.slice(0),[H.D(z,0)])
for(x=f.gF(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.b(y,x)
w=y[x]
if(!this.a.X(a,J.fd(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.c(e)+" "+w+'="'+H.c(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$isdD)this.b_(a.content)}},
jV:{"^":"h:18;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dA(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a5(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f0(z)}catch(w){H.Q(w)
v=z
if(x){u=J.e(v)
if(u.gaj(v)!=null){u.gaj(v)
u.gaj(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
iG:{"^":"i+fB;"},
iJ:{"^":"i+j;"},
iK:{"^":"iJ+k;"},
iL:{"^":"i+j;"},
iM:{"^":"iL+k;"},
iT:{"^":"i+j;"},
iU:{"^":"iT+k;"},
j9:{"^":"i+j;"},
ja:{"^":"j9+k;"},
jh:{"^":"i+T;"},
ji:{"^":"i+T;"},
jj:{"^":"i+j;"},
jk:{"^":"jj+k;"},
jl:{"^":"i+j;"},
jm:{"^":"jl+k;"},
jp:{"^":"i+j;"},
jq:{"^":"jp+k;"},
jw:{"^":"i+T;"},
e9:{"^":"B+j;"},
ea:{"^":"e9+k;"},
jB:{"^":"i+j;"},
jC:{"^":"jB+k;"},
jF:{"^":"i+T;"},
jM:{"^":"i+j;"},
jN:{"^":"jM+k;"},
ed:{"^":"B+j;"},
ee:{"^":"ed+k;"},
jR:{"^":"i+j;"},
jS:{"^":"jR+k;"},
jX:{"^":"i+j;"},
jY:{"^":"jX+k;"},
jZ:{"^":"i+j;"},
k_:{"^":"jZ+k;"},
k0:{"^":"i+j;"},
k1:{"^":"k0+k;"},
k2:{"^":"i+j;"},
k3:{"^":"k2+k;"},
k4:{"^":"i+j;"},
k5:{"^":"k4+k;"}}],["","",,P,{"^":"",
V:function(a){var z,y,x,w,v
if(a==null)return
z=P.K()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
kp:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cx(a,new P.kq(z))
return z},
kr:function(a){var z,y
z=new P.G(0,$.r,null,[null])
y=new P.ca(z,[null])
a.then(H.O(new P.ks(y),1))["catch"](H.O(new P.kt(y),1))
return z},
cZ:function(){var z=$.cY
if(z==null){z=J.bJ(window.navigator.userAgent,"Opera",0)
$.cY=z}return z},
fF:function(){var z,y
z=$.cV
if(z!=null)return z
y=$.cW
if(y==null){y=J.bJ(window.navigator.userAgent,"Firefox",0)
$.cW=y}if(y)z="-moz-"
else{y=$.cX
if(y==null){y=P.cZ()!==!0&&J.bJ(window.navigator.userAgent,"Trident/",0)
$.cX=y}if(y)z="-ms-"
else z=P.cZ()===!0?"-o-":"-webkit-"}$.cV=z
return z},
iv:{"^":"d;",
c_:function(a){var z,y,x,w
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
x=new P.bi(y,!0)
x.cP(y,!0)
return x}if(a instanceof RegExp)throw H.a(P.c9("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kr(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.c_(a)
x=this.b
u=x.length
if(v>=u)return H.b(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.K()
z.a=t
if(v>=u)return H.b(x,v)
x[v]=t
this.e3(a,new P.ix(z,this))
return z.a}if(a instanceof Array){s=a
v=this.c_(s)
x=this.b
if(v>=x.length)return H.b(x,v)
t=x[v]
if(t!=null)return t
u=J.a5(s)
r=u.gj(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.b(x,v)
x[v]=t
if(typeof r!=="number")return H.x(r)
x=J.at(t)
q=0
for(;q<r;++q)x.i(t,q,this.aR(u.h(s,q)))
return t}return a}},
ix:{"^":"h:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aR(b)
J.cq(z,a,y)
return y}},
kq:{"^":"h:2;a",
$2:function(a,b){this.a[a]=b}},
iw:{"^":"iv;a,b,c",
e3:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
b.$2(w,a[w])}}},
ks:{"^":"h:0;a",
$1:function(a){return this.a.a8(0,a)}},
kt:{"^":"h:0;a",
$1:function(a){return this.a.bO(a)}}}],["","",,P,{"^":"",mN:{"^":"B;L:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},n7:{"^":"B;L:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
e2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a9:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
C:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.a9))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gA:function(a){var z,y
z=J.a6(this.a)
y=J.a6(this.b)
return P.jb(P.e2(P.e2(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.a9(y,C.a.l(z,x),this.$ti)},
D:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.D()
if(typeof x!=="number")return H.x(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.D()
if(typeof y!=="number")return H.x(y)
return new P.a9(z-x,w-y,this.$ti)}},
jr:{"^":"d;$ti"},
aa:{"^":"jr;$ti"}}],["","",,P,{"^":"",lz:{"^":"z;m:x=,n:y=","%":"SVGFEBlendElement"},lA:{"^":"z;m:x=,n:y=","%":"SVGFEColorMatrixElement"},lB:{"^":"z;m:x=,n:y=","%":"SVGFEComponentTransferElement"},lC:{"^":"z;m:x=,n:y=","%":"SVGFECompositeElement"},lD:{"^":"z;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},lE:{"^":"z;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},lF:{"^":"z;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},lG:{"^":"z;m:x=,n:y=","%":"SVGFEFloodElement"},lH:{"^":"z;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},lI:{"^":"z;m:x=,n:y=","%":"SVGFEImageElement"},lJ:{"^":"z;m:x=,n:y=","%":"SVGFEMergeElement"},lK:{"^":"z;m:x=,n:y=","%":"SVGFEMorphologyElement"},lL:{"^":"z;m:x=,n:y=","%":"SVGFEOffsetElement"},lM:{"^":"z;m:x=,n:y=,H:z=","%":"SVGFEPointLightElement"},lN:{"^":"z;m:x=,n:y=","%":"SVGFESpecularLightingElement"},lO:{"^":"z;m:x=,n:y=,H:z=","%":"SVGFESpotLightElement"},lP:{"^":"z;m:x=,n:y=","%":"SVGFETileElement"},lQ:{"^":"z;m:x=,n:y=","%":"SVGFETurbulenceElement"},lV:{"^":"z;m:x=,n:y=","%":"SVGFilterElement"},lY:{"^":"aF;m:x=,n:y=","%":"SVGForeignObjectElement"},h_:{"^":"aF;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aF:{"^":"z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},m5:{"^":"aF;m:x=,n:y=","%":"SVGImageElement"},m9:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dd]},
$isf:1,
$asf:function(){return[P.dd]},
$ask:function(){return[P.dd]},
"%":"SVGLengthList"},mf:{"^":"z;m:x=,n:y=","%":"SVGMaskElement"},mw:{"^":"jo;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dq]},
$isf:1,
$asf:function(){return[P.dq]},
$ask:function(){return[P.dq]},
"%":"SVGNumberList"},mB:{"^":"z;m:x=,n:y=","%":"SVGPatternElement"},mE:{"^":"i;m:x=,n:y=","%":"SVGPoint"},mF:{"^":"i;j:length=","%":"SVGPointList"},mI:{"^":"i;m:x=,n:y=","%":"SVGRect"},mJ:{"^":"h_;m:x=,n:y=","%":"SVGRectElement"},du:{"^":"z;",$isdu:1,"%":"SVGScriptElement"},mX:{"^":"jH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$isf:1,
$asf:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},z:{"^":"al;",
R:function(a,b,c,d){var z,y,x,w,v,u
z=H.w([],[W.dm])
z.push(W.e0(null))
z.push(W.ec())
z.push(new W.jI())
c=new W.ef(new W.dn(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dW(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.U(w)
u=z.gZ(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaJ:function(a){return new W.ah(a,"mousedown",!1,[W.M])},
gaK:function(a){return new W.ah(a,"mousemove",!1,[W.M])},
gaL:function(a){return new W.ah(a,"mouseup",!1,[W.M])},
gaM:function(a){return new W.ah(a,"mousewheel",!1,[W.aQ])},
$isz:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mY:{"^":"aF;m:x=,n:y=","%":"SVGSVGElement"},il:{"^":"aF;","%":"SVGTextPathElement;SVGTextContentElement"},n1:{"^":"il;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},n8:{"^":"jU;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dG]},
$isf:1,
$asf:function(){return[P.dG]},
$ask:function(){return[P.dG]},
"%":"SVGTransformList"},nc:{"^":"aF;m:x=,n:y=","%":"SVGUseElement"},jc:{"^":"i+j;"},jd:{"^":"jc+k;"},jn:{"^":"i+j;"},jo:{"^":"jn+k;"},jG:{"^":"i+j;"},jH:{"^":"jG+k;"},jT:{"^":"i+j;"},jU:{"^":"jT+k;"}}],["","",,P,{"^":"",l2:{"^":"i;j:length=","%":"AudioBuffer"},l3:{"^":"iF;",
h:function(a,b){return P.V(a.get(b))},
w:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gF:function(a){var z=H.w([],[P.l])
this.w(a,new P.fq(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.p("Not supported"))},
$asT:function(){return[P.l,null]},
"%":"AudioParamMap"},fq:{"^":"h:2;a",
$2:function(a,b){return this.a.push(a)}},l4:{"^":"i;aF:enabled=","%":"AudioTrack"},l5:{"^":"B;j:length=","%":"AudioTrackList"},fr:{"^":"B;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},my:{"^":"fr;j:length=","%":"OfflineAudioContext"},iF:{"^":"i+T;"}}],["","",,P,{"^":"",mL:{"^":"i;",
bz:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindFramebuffer(b,c)},
bG:function(a,b,c){return a.bindTexture(b,c)},
bH:function(a,b){return a.blendEquation(b)},
bI:function(a,b,c){return a.blendFunc(b,c)},
bJ:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b){return a.clear(b)},
bM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bN:function(a,b){return a.compileShader(b)},
bP:function(a){return a.createBuffer()},
bQ:function(a){return a.createProgram()},
bR:function(a,b){return a.createShader(b)},
bT:function(a,b){return a.depthMask(b)},
bU:function(a,b){return a.disable(b)},
bV:function(a,b,c,d){return a.drawArrays(b,c,d)},
bW:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bX:function(a,b){return a.enable(b)},
bY:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.V(a.getContextAttributes())},
aU:function(a,b){return a.getProgramInfoLog(b)},
aV:function(a,b,c){return a.getProgramParameter(b,c)},
aW:function(a,b){return a.getShaderInfoLog(b)},
aX:function(a,b,c){return a.getShaderParameter(b,c)},
aY:function(a,b,c){return a.getUniformLocation(b,c)},
c3:function(a,b){return a.linkProgram(b)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cc:function(a,b,c){return a.uniform1f(b,c)},
cd:function(a,b,c){return a.uniform1fv(b,c)},
ce:function(a,b,c){return a.uniform1i(b,c)},
cf:function(a,b,c){return a.uniform1iv(b,c)},
cg:function(a,b,c){return a.uniform2fv(b,c)},
ci:function(a,b,c){return a.uniform3fv(b,c)},
cj:function(a,b,c){return a.uniform4fv(b,c)},
ck:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cl:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cn:function(a,b){return a.useProgram(b)},
co:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cq:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mM:{"^":"i;",
dM:function(a,b){return a.beginTransformFeedback(b)},
dP:function(a,b){return a.bindVertexArray(b)},
dX:function(a){return a.createVertexArray()},
dZ:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
e_:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
e0:function(a){return a.endTransformFeedback()},
ew:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
ey:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bz:function(a,b){return a.activeTexture(b)},
bC:function(a,b,c){return a.attachShader(b,c)},
bD:function(a,b,c){return a.bindBuffer(b,c)},
bF:function(a,b,c){return a.bindFramebuffer(b,c)},
bG:function(a,b,c){return a.bindTexture(b,c)},
bH:function(a,b){return a.blendEquation(b)},
bI:function(a,b,c){return a.blendFunc(b,c)},
bJ:function(a,b,c,d){return a.bufferData(b,c,d)},
bL:function(a,b){return a.clear(b)},
bM:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bN:function(a,b){return a.compileShader(b)},
bP:function(a){return a.createBuffer()},
bQ:function(a){return a.createProgram()},
bR:function(a,b){return a.createShader(b)},
bT:function(a,b){return a.depthMask(b)},
bU:function(a,b){return a.disable(b)},
bV:function(a,b,c,d){return a.drawArrays(b,c,d)},
bW:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bX:function(a,b){return a.enable(b)},
bY:function(a,b){return a.enableVertexAttribArray(b)},
am:function(a){return P.V(a.getContextAttributes())},
aU:function(a,b){return a.getProgramInfoLog(b)},
aV:function(a,b,c){return a.getProgramParameter(b,c)},
aW:function(a,b){return a.getShaderInfoLog(b)},
aX:function(a,b,c){return a.getShaderParameter(b,c)},
aY:function(a,b,c){return a.getUniformLocation(b,c)},
c3:function(a,b){return a.linkProgram(b)},
b0:function(a,b,c){return a.shaderSource(b,c)},
b3:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cc:function(a,b,c){return a.uniform1f(b,c)},
cd:function(a,b,c){return a.uniform1fv(b,c)},
ce:function(a,b,c){return a.uniform1i(b,c)},
cf:function(a,b,c){return a.uniform1iv(b,c)},
cg:function(a,b,c){return a.uniform2fv(b,c)},
ci:function(a,b,c){return a.uniform3fv(b,c)},
cj:function(a,b,c){return a.uniform4fv(b,c)},
ck:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cl:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cn:function(a,b){return a.useProgram(b)},
co:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cq:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mV:{"^":"jE;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return P.V(a.item(b))},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$asj:function(){return[P.c3]},
$isf:1,
$asf:function(){return[P.c3]},
$ask:function(){return[P.c3]},
"%":"SQLResultSetRowList"},jD:{"^":"i+j;"},jE:{"^":"jD+k;"}}],["","",,G,{"^":"",
iy:function(a){var z,y,x,w
z=H.w(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.b(z,y)
w+=H.c(z[y])
if(y>=z.length)return H.b(z,y)
z[y]=w}return C.c.aa(z,"\n")},
dX:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.bR(a,b)
z.b0(a,y,c)
z.bN(a,y)
x=z.aX(a,y,35713)
if(x!=null&&J.A(x,!1)){w=z.aW(a,y)
P.a_("E:Compilation failed:")
P.a_("E:"+G.iy(c))
P.a_("E:Failure:")
P.a_(C.i.l("E:",w))
throw H.a(w)}return y},
bl:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bM(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.bN(a[y])
if(x>=w)return H.b(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.b(a,y)
v=J.cB(a[y])
if(z>=w)return H.b(b,z)
b[z]=v}return b},
fR:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bM(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x;++z
if(y>=a.length)return H.b(a,y)
x=J.bN(a[y])
if(z>=w)return H.b(b,z)
b[z]=x}return b},
fS:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bM(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.bN(a[y])
if(x>=w)return H.b(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.b(a,y)
x=J.cB(a[y])
if(v>=w)return H.b(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.b(a,y)
x=J.f3(a[y])
if(z>=w)return H.b(b,z)
b[z]=x}return b},
fQ:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aA(a[y],0)
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.aA(a[y],1)
if(x>=w)return H.b(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.b(a,y)
x=J.aA(a[y],2)
if(v>=w)return H.b(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.b(a,y)
x=J.aA(a[y],3)
if(z>=w)return H.b(b,z)
b[z]=x}return b},
j7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.aL(z,z.r,null,null,[H.D(z,0)]),y.c=z.e,x=b.x,w=[[P.f,P.E]],v=[P.aU],u=[T.ag],t=[T.q],s=[T.ab];y.q();){r=y.d
if(!x.ag(0,r)){q="Dropping unnecessary attribute: "+H.c(r)
if($.es>0)H.aw("I: "+q)
continue}p=z.h(0,r)
switch($.$get$X().h(0,r).a){case"vec2":b.a2(r,G.fR(H.aY(p,"$isf",s,"$asf"),null),2)
break
case"vec3":b.a2(r,G.bl(H.aY(p,"$isf",t,"$asf"),null),3)
break
case"vec4":b.a2(r,G.fS(H.aY(p,"$isf",u,"$asf"),null),4)
break
case"float":b.a2(r,new Float32Array(H.bC(H.aY(p,"$isf",v,"$asf"))),1)
break
case"uvec4":b.a2(r,G.fQ(H.aY(p,"$isf",w,"$asf"),null),4)
break}}},
iS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b.length
y=2*z
x=new Float32Array(y)
for(w=x.length,v=c.length,u=0;u<z;u+=3){t=2*u
s=b[u]
if(t>=w)return H.b(x,t)
x[t]=s
s=t+1
r=u+1
if(r>=z)return H.b(b,r)
q=b[r]
if(s>=w)return H.b(x,s)
x[s]=q
q=t+2
s=u+2
if(s>=z)return H.b(b,s)
p=b[s]
if(q>=w)return H.b(x,q)
x[q]=p
p=t+3
q=b[u]
if(u>=v)return H.b(c,u)
o=c[u]
if(p>=w)return H.b(x,p)
x[p]=q+d*o
o=t+4
q=b[r]
if(r>=v)return H.b(c,r)
r=c[r]
if(o>=w)return H.b(x,o)
x[o]=q+d*r
t+=5
r=b[s]
if(s>=v)return H.b(c,s)
s=c[s]
if(t>=w)return H.b(x,t)
x[t]=r+d*s}a.b6(x)
n=C.b.W(y,3)
z=new Array(n)
z.fixed$length=Array
m=H.w(z,[P.E])
for(z=m.length,u=0;u<n;++u){if(u>=z)return H.b(m,u)
m[u]=u}a.b4(m)
return a},
aM:{"^":"d;aF:c>"},
c8:{"^":"aM;d,a,b,c",
ba:function(){return this.d},
k:function(a){var z,y,x,w
z=H.w(["{"+H.c(new H.dS(H.ky(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.aL(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.q();){w=x.d
z.push(H.c(w)+": "+H.c(y.h(0,w)))}return C.c.aa(z,"\n")}},
fs:{"^":"dw;"},
fu:{"^":"d;a,b",
bZ:function(a,b,c){J.eW(this.a,b)
if(c>0)J.fk(this.a,b,c)},
cp:function(a,b,c,d,e,f,g,h){J.bI(this.a,34962,b)
J.fl(this.a,c,d,e,!1,g,h)}},
fU:{"^":"d;a,b,c,d,e"},
fO:{"^":"d;a,b,c"},
fP:{"^":"d;a,b,c,d"},
fZ:{"^":"d;a,b,c,d,e",
b8:function(a){switch($.$get$X().h(0,a).a){case"vec2":this.e.i(0,a,H.w([],[T.ab]))
break
case"vec3":this.e.i(0,a,H.w([],[T.q]))
break
case"vec4":this.e.i(0,a,H.w([],[T.ag]))
break
case"float":this.e.i(0,a,H.w([],[P.aU]))
break
case"uvec4":this.e.i(0,a,H.w([],[[P.f,P.E]]))
break}},
cM:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.fO(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.C)(a),++w)z.push(a[w].a7(0))},
cK:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.C)(b),++x)z.push(b[x].a7(0))},
cL:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.C)(b),++x)z.push(b[x].a7(0))},
cN:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.fP(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.C)(a),++w)z.push(a[w].a7(0))},
cT:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.b
y=this.c
x=new Array(z.length*6+y.length*8)
x.fixed$length=Array
w=H.w(x,[P.E])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
r=s.a
if(u>=v)return H.b(w,u)
w[u]=r
q=u+1
p=s.b
if(q>=v)return H.b(w,q)
w[q]=p
q=u+2
if(q>=v)return H.b(w,q)
w[q]=p
p=u+3
q=s.c
if(p>=v)return H.b(w,p)
w[p]=q
p=u+4
if(p>=v)return H.b(w,p)
w[p]=q
q=u+5
if(q>=v)return H.b(w,q)
w[q]=r
u+=6}for(z=y.length,t=0;t<z;++t){o=y[t]
x=o.a
if(u>=v)return H.b(w,u)
w[u]=x
r=u+1
q=o.b
if(r>=v)return H.b(w,r)
w[r]=q
r=u+2
if(r>=v)return H.b(w,r)
w[r]=q
q=u+3
r=o.c
if(q>=v)return H.b(w,q)
w[q]=r
q=u+4
if(q>=v)return H.b(w,q)
w[q]=r
r=u+5
q=o.d
if(r>=v)return H.b(w,r)
w[r]=q
r=u+6
if(r>=v)return H.b(w,r)
w[r]=q
q=u+7
if(q>=v)return H.b(w,q)
w[q]=x
u+=8}return w},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.aL(y,y.r,null,null,[H.D(y,0)]),x.c=y.e;x.q();){w=x.d
v=$.$get$X().h(0,w).a
z.push(H.c(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.aa(z," ")}},
dF:{"^":"d;a,b,c"},
dE:{"^":"d;a,b,c"},
hp:{"^":"c8;d,a,b,c",
cX:function(a){var z=this.d
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.$get$cM())
z.i(0,"cStencilFunc",$.$get$dy())},
p:{
di:function(a){var z=new G.hp(P.K(),a,!1,!0)
z.cX(a)
return z}}},
hr:{"^":"aM;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
b7:function(a,b,c){var z,y
C.i.ad(a,0)
J.cq(this.cy,a,b)
z=this.d
y=this.r.h(0,a)
J.bI(z.a,34962,y)
J.cu(z.a,34962,b,35048)},
cU:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a2:function(a,b,c){var z,y,x,w,v
z=J.cv(a,0)===105
if(z&&this.z===0)this.z=C.b.cI(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bK(x.a))
this.b7(a,b,c)
w=$.$get$X().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.be(x.a,this.e)
x.bZ(0,v,z?1:0)
x.cp(0,y.h(0,a),v,w.b9(),5126,!1,0,0)},
b6:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.bK(y.a))
this.ch=a
this.b7("aPosition",a,3)
x=$.$get$X().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.be(y.a,this.e)
y.bZ(0,w,0)
y.cp(0,z.h(0,"aPosition"),w,x.b9(),5126,!1,0,0)},
b4:function(a){var z,y,x
z=this.d
this.y=J.bK(z.a)
y=this.ch.length
if(y<768){this.cx=new Uint8Array(H.bC(a))
this.Q=5121}else if(y<196608){this.cx=new Uint16Array(H.bC(a))
this.Q=5123}else{this.cx=new Uint32Array(H.bC(a))
this.Q=5125}J.be(z.a,this.e)
y=this.y
x=this.cx
J.bI(z.a,34963,y)
J.cu(z.a,34963,x,35048)},
k:function(a){var z,y,x,w,v
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=J.e(z),w=J.ak(x.gF(z));w.q();){v=w.gv(w)
y.push(H.c(v)+":"+H.c(J.a0(x.h(z,v))))}return"MESH["+this.a+"] "+C.c.aa(y,"  ")},
p:{
dj:function(a,b,c,d){return new G.hr(b,J.eQ(b.a),c,P.K(),d,null,0,-1,null,null,P.K(),"meshdata:"+a,!1,!0)}}},
hH:{"^":"c8;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
cO:function(a,b){var z
if(typeof a!=="number")return a.eB()
if(typeof b!=="number")return H.x(b)
z=a/b
if(this.z===z)return
this.z=z
this.bc()},
bc:function(){var z,y,x,w,v,u
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
ba:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.q(new Float32Array(3))
u.Y(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
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
y=J.n(t)
x=!!y.$isag
q=x?y.gal(t):1
if(!!y.$isq){p=y.gm(t)
s=y.gn(t)
r=y.gH(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gH(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.x(t)
x=z[4]
if(typeof s!=="number")return H.x(s)
w=z[8]
if(typeof r!=="number")return H.x(r)
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
c.c5(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
hX:{"^":"aM;d,e,f,r,x,y,z,Q,ch,a,b,c",
d_:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
x.i(0,t,J.cC(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
x.i(0,t,J.cC(w.a,v,t))}},
d3:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.aL(y,y.r,null,null,[H.D(y,0)]),w.c=y.e;w.q();){v=w.d
if(!z.ag(0,v))x.push(v)}for(z=this.x,y=new P.ce(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.q();){v=y.d
if(!z.u(0,v))x.push(v)}return x},
d7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.aL(b,b.r,null,null,[H.D(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.cv(t,0)){case 117:if(w.ag(0,t)){s=b.h(0,t)
if(v.ag(0,t))H.aw("E:"+(t+" : group ["+H.c(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$X().h(0,t)
if(r==null)H.I("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bO(x.a,q,s)
else if(!!J.n(s).$ish4)J.fi(x.a,q,s)
break
case"float":if(r.c===0)J.fg(x.a,q,s)
else if(!!J.n(s).$isbW)J.fh(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.Z(s,"$isL").a
J.cK(x.a,q,!1,p)}else if(!!J.n(s).$isbW)J.cK(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.Z(s,"$isam").a
J.cJ(x.a,q,!1,p)}else if(!!J.n(s).$isbW)J.cJ(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cI(o,q,H.Z(s,"$isag").a)
else J.cI(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cH(o,q,H.Z(s,"$isq").a)
else J.cH(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cG(o,q,H.Z(s,"$isab").a)
else J.cG(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.x(p)
J.cr(x.a,33984+p)
p=H.Z(s,"$isim").cV()
J.ct(x.a,3553,p)
p=this.ch
J.bO(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.x(p)
J.cr(x.a,33984+p)
p=H.Z(s,"$isim").cV()
J.ct(x.a,34067,p)
p=this.ch
J.bO(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.aw("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.A(s,!0)
o=x.a
if(p)J.aZ(o,2929)
else J.bL(o,2929)
break
case"cStencilFunc":H.Z(s,"$isdF")
p=s.a
o=x.a
if(p===1281)J.bL(o,2960)
else{J.aZ(o,2960)
o=s.b
n=s.c
J.fc(x.a,p,o,n)}break
case"cDepthWrite":J.eR(x.a,s)
break
case"cBlendEquation":H.Z(s,"$isdE")
p=s.a
o=x.a
if(p===1281)J.bL(o,3042)
else{J.aZ(o,3042)
o=s.b
n=s.c
J.eL(x.a,o,n)
J.eK(x.a,p)}break}++u
break}}m=P.d0(0,0,0,Date.now()-new P.bi(z,!1).a,0,0)
""+u
m.k(0)},
cS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fj(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.be()}for(y=b.length,x=0;x<b.length;b.length===y||(0,H.C)(b),++x){w=b[x]
this.d7(w.a,w.ba())}y=this.Q
y.a6(0)
for(v=J.ak(J.eZ(a.cy));v.q();)y.O(0,v.gv(v))
u=this.d3()
if(u.length!==0)P.a_("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.c(u)))
J.be(a.d.a,a.e)
t=this.e.f.length>0
y=a.f
v=a.cU()
s=a.Q
r=a.z
if(t)J.eI(z.a,y)
if(s!==-1){q=z.a
if(r>1)J.eV(q,y,v,s,0,r)
else J.eU(q,y,v,s,0)}else{s=z.a
if(r>1)J.eT(s,y,0,v,r)
else J.eS(s,y,0,v)}if(t)J.eX(z.a)},
p:{
hY:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.W(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.eP(b.a)
u=G.dX(b.a,35633,y)
J.cs(b.a,v,u)
t=G.dX(b.a,35632,x)
J.cs(b.a,v,t)
if(w.length>0)J.fe(b.a,v,w,35980)
J.f9(b.a,v)
if(J.f8(b.a,v,35714)!==!0)H.I(J.f7(b.a,v))
z=new G.hX(b,c,d,v,P.c2(c.c,null),P.K(),P.K(),z,null,a,!1,!0)
z.d_(a,b,c,d)
return z}}},
v:{"^":"d;a,b,c",
b9:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
i3:{"^":"d;a,b,c,d,e,f,r,x",
cJ:function(a){var z,y,x,w
for(z=this.c,y=this.x,x=0;x<1;++x){w=a[x]
z.push(w)
y.i(0,w,this.r);++this.r}C.c.b2(z)},
b5:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.C)(a),++x)y.push(a[x])
C.c.b2(y)},
d0:function(a,b){this.b=this.d8(!0,a,b)},
bb:function(a){return this.d0(a,null)},
d8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
s=$.$get$X().h(0,t)
w.push("layout (location="+H.c(v.h(0,t))+") in "+s.a+" "+H.c(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,u=0;!1;++u){if(u>=0)return H.b(z,u)
q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){q=z[u]
s=$.$get$X().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.c(q)+p+";")}w.push("")
w.push("void main(void) {")
C.c.M(w,b)
w.push("}")
return C.c.aa(w,"\n")},
p:{
dv:function(a){return new G.i3(a,null,[],[],[],[],0,P.K())}}},
dw:{"^":"aM;",
ed:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.q(new Float32Array(3))
b.Y(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
t=v.D(0,a)
t.aI(0)
s=b.bS(t)
s.aI(0)
r=t.bS(s)
r.aI(0)
u=s.aE(v)
q=r.aE(v)
v=t.aE(v)
p=s.a
o=p[0]
n=r.a
m=n[0]
l=t.a
k=l[0]
j=p[1]
i=n[1]
h=l[1]
p=p[2]
n=n[2]
l=l[2]
z[15]=1
z[14]=-v
z[13]=-q
z[12]=-u
z[11]=0
z[10]=l
z[9]=n
z[8]=p
z[7]=0
z[6]=h
z[5]=i
z[4]=j
z[3]=0
z[2]=k
z[1]=m
z[0]=o
z[12]=y
z[13]=x
z[14]=w},
aH:function(a){return this.ed(a,null)}}}],["","",,Y,{"^":"",
h2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=new G.fZ(!1,[],[],[],P.K())
z.b8("aTexUV")
z.b8("aNormal")
y=P.K()
x=J.cE(a,"\n")
w=[]
v=[]
u=[]
t=Date.now()
s=P.ds("\\s+",!0,!1)
r=P.ds("\\s\\s*\\$",!0,!1)
for(q=x.length,p=0;p<x.length;x.length===q||(0,H.C)(x),++p){o=J.fa(x[p],s," ")
n=H.kV(o,r,"",0)
o=n.length
if(o!==0){if(0>=o)return H.b(n,0)
o=n[0]==="#"}else o=!0
if(o)continue
m=n.split(" ")
o=m.length
if(0>=o)return H.b(m,0)
l=m[0]
if(J.A(l,"g")){if(1>=o)return H.b(m,1)
y.i(0,m[1],w.length)}else if(J.A(l,"v")){if(1>=o)return H.b(m,1)
l=P.aj(m[1],null)
if(2>=o)return H.b(m,2)
k=P.aj(m[2],null)
if(3>=o)return H.b(m,3)
o=P.aj(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
w.push(new T.q(j))}else if(J.A(l,"vt")){if(1>=o)return H.b(m,1)
l=P.aj(m[1],null)
if(2>=o)return H.b(m,2)
o=P.aj(m[2],null)
k=new Float32Array(2)
k[0]=l
k[1]=o
u.push(new T.ab(k))}else if(J.A(l,"vn")){if(1>=o)return H.b(m,1)
l=P.aj(m[1],null)
if(2>=o)return H.b(m,2)
k=P.aj(m[2],null)
if(3>=o)return H.b(m,3)
o=P.aj(m[3],null)
j=new Float32Array(3)
j[0]=l
j[1]=k
j[2]=o
v.push(new T.q(j))}else if(J.A(l,"f")){if(o!==4&&o!==5){H.aw("*** Error: face '"+n+"' not handled")
continue}i=[]
h=[]
g=[]
for(f=1;o=m.length,f<o;++f){e=J.cE(m[f],"/")
for(;e.length<3;)e.push("")
d=J.bd(P.cn(e[0],null,null),1)
if(1>=e.length)return H.b(e,1)
if(J.A(e[1],""))c=-1
else{if(1>=e.length)return H.b(e,1)
c=J.bd(P.cn(e[1],null,null),1)}if(2>=e.length)return H.b(e,2)
if(J.A(e[2],""))b=-1
else{if(2>=e.length)return H.b(e,2)
b=J.bd(P.cn(e[2],null,null),1)}o=w.length
if(J.az(d,o)){if(d>>>0!==d||d>=o)return H.b(w,d)
i.push(w[d])}else i.push(new T.q(new Float32Array(3)))
o=J.n(c)
if(!o.C(c,-1)&&o.T(c,u.length)){if(c>>>0!==c||c>=u.length)return H.b(u,c)
g.push(u[c])}else{H.aw("problem uv "+f+" "+H.c(c))
g.push(new T.ab(new Float32Array(2)))}o=J.n(b)
if(!o.C(b,-1)&&o.T(b,v.length)){if(b>>>0!==b||b>=v.length)return H.b(v,b)
h.push(v[b])}else{H.aw("problem normals "+f+" "+H.c(b))
h.push(new T.q(new Float32Array(3)))}}if(o===4)z.cM(i)
else z.cN(i)
z.cL("aNormal",h)
z.cK("aTexUV",g)}}P.a_("loaded ("+P.d0(0,0,0,Date.now()-new P.bi(t,!1).a,0,0).k(0)+") "+z.k(0))
return z}}],["","",,R,{"^":"",hW:{"^":"hV;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
em:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sG(z,y)
w.sE(z,x)
P.a_("size change "+H.c(y)+" "+H.c(x))
this.dx.cO(y,x)
this.z=y
this.Q=x},"$1","gel",4,0,19]},i8:{"^":"d;",
d1:function(a,b,c){var z,y,x
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
x=this.dc(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dc:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iO("span",null)
y=J.cz(v)
J.e(y).sG(y,"1px")
C.n.sE(y,""+d+"px")
C.n.se1(y,"left")
x=C.n.bi(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},i9:{"^":"i8;e,f,a,b,c,d",
d5:function(a,b){var z,y,x,w,v;++this.e
if(J.az(J.bd(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.ev(z,2)+" fps"
y=this.c;(y&&C.D).ct(y,b)
x=C.b.W(30*C.t.dR(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cz(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d4:function(a){return this.d5(a,"")}}}],["","",,A,{"^":"",
eq:function(a,b,c,d,e){var z,y,x,w,v,u,t,s
if(J.eY(b)!==!0)return
z=b.d6(c)
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
x.dV(new T.am(v))
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
a.cS(b.cx,e,d)
if(0>=e.length)return H.b(e,-1)
e.pop()
for(y=b.cy,x=y.length,s=0;s<y.length;y.length===x||(0,H.C)(y),++s)A.eq(a,y[s],z,d,e)},
dl:{"^":"dw;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
d6:function(a){var z=this.dx
z.B(a)
z.c5(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
dt:{"^":"aM;d,e,c6:f>,a,b,c"},
hV:{"^":"aM;",
cZ:function(a,b,c){if(this.d==null)this.d=new G.fU(this.e,null,null,null,null)},
cR:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eJ(v.a,36160,z)
J.fm(v.a,this.x,this.y,x,w)
if(y!==0)J.eM(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.C)(z),++u){t=z[u]
if(t.c!==!0)continue
x=t.d
if(x.c!==!0)continue
s=t.e
s.push(new G.c8(P.K(),"transforms",!1,!0))
r=new T.L(new Float32Array(16))
r.U()
for(w=t.f,v=w.length,q=0;q<w.length;w.length===v||(0,H.C)(w),++q)A.eq(x,w[q],r,a,s)
if(0>=s.length)return H.b(s,-1)
s.pop()}},
cQ:function(){return this.cR(null)}}}],["","",,V,{}],["","",,D,{"^":"",
hl:function(a){var z,y
z=new P.G(0,$.r,null,[null])
y=new XMLHttpRequest()
C.E.eh(y,"GET",a)
W.ac(y,"loadend",new D.hm(new P.ca(z,[null]),y),!1,W.mG)
y.send("")
return z},
hm:{"^":"h:0;a,b",
$1:function(a){this.a.a8(0,W.ka(this.b.response))}},
hf:{"^":"d;a,b,c",
cW:function(a){var z
a=document
z=W.bo
W.ac(a,"keydown",new D.hh(this),!1,z)
W.ac(a,"keyup",new D.hi(this),!1,z)},
p:{
hg:function(a){var z=P.E
z=new D.hf(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z))
z.cW(a)
return z}}},
hh:{"^":"h:8;a",
$1:function(a){var z=this.a
z.a.O(0,J.cA(a))
z.b.O(0,a.which)}},
hi:{"^":"h:8;a",
$1:function(a){var z=this.a
z.a.c8(0,J.cA(a))
z.c.O(0,a.which)}},
hu:{"^":"d;a,b,c,d,e,f,r,x",
cY:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaK(a)
W.ac(y.a,y.b,new D.hw(this),!1,H.D(y,0))
y=z.gaJ(a)
W.ac(y.a,y.b,new D.hx(this),!1,H.D(y,0))
y=z.gaL(a)
W.ac(y.a,y.b,new D.hy(this),!1,H.D(y,0))
z=z.gaM(a)
W.ac(z.a,z.b,new D.hz(this),!1,H.D(z,0))},
p:{
hv:function(a){var z=P.E
z=new D.hu(P.W(null,null,null,z),P.W(null,null,null,z),P.W(null,null,null,z),0,0,0,0,0)
z.cY(a)
return z}}},
hw:{"^":"h:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ak(a)
y=this.a
y.r=z.gc7(a).a
y.x=z.gc7(a).b
y.d=z.geg(a).a
y.e=a.movementY}},
hx:{"^":"h:5;a",
$1:function(a){var z=J.e(a)
z.ak(a)
P.a_("BUTTON "+H.c(z.gbK(a)))
z=this.a
z.a.O(0,a.button)
z.b.O(0,a.button)}},
hy:{"^":"h:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ak(a)
y=this.a
y.a.c8(0,z.gbK(a))
y.c.O(0,a.button)}},
hz:{"^":"h:20;a",
$1:function(a){var z=J.e(a)
z.ak(a)
this.a.f=z.gdY(a)}},
hG:{"^":"fs;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bc:function(a){var z,y
z=C.P.e2(a,0,new A.kA())
if(typeof z!=="number")return H.x(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kA:{"^":"h:21;",
$2:function(a,b){var z,y
z=J.ay(a,J.a6(b))
if(typeof z!=="number")return H.x(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",am:{"^":"d;bm:a<",
B:function(a){var z,y
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
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=9)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=9)return H.b(z,b)
z[b]=c},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.am){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gA:function(a){return A.bc(this.a)},
S:function(a){var z,y,x
z=new Float32Array(3)
y=this.a
if(a>=9)return H.b(y,a)
z[0]=y[a]
x=3+a
if(x>=9)return H.b(y,x)
z[1]=y[x]
x=6+a
if(x>=9)return H.b(y,x)
z[2]=y[x]
return new T.q(z)},
l:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.am(z)
y.B(this)
x=b.gbm()
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
D:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.am(z)
y.B(this)
x=b.gbm()
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
dV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.B(a)
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
return m}},L:{"^":"d;bn:a<",
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
k:function(a){return"[0] "+this.S(0).k(0)+"\n[1] "+this.S(1).k(0)+"\n[2] "+this.S(2).k(0)+"\n[3] "+this.S(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=16)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=16)return H.b(z,b)
z[b]=c},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.L){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.bc(this.a)},
S:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.b(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.b(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.b(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.b(y,x)
z[3]=y[x]
return new T.ag(z)},
l:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.L(z)
y.B(this)
x=b.gbn()
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
D:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.L(z)
y.B(this)
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
U:function(){var z=this.a
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
c5:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},ab:{"^":"d;bw:a<",
B:function(a){var z,y
z=a.a
y=this.a
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ab){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.bc(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.ab(z)
y.B(this)
x=b.gbw()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.ab(z)
y.B(this)
x=b.gbw()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=2)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=2)return H.b(z,b)
z[b]=c},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
a7:function(a){var z=new T.ab(new Float32Array(2))
z.B(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},q:{"^":"d;bx:a<",
Y:function(a,b,c){var z=this.a
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
return"["+H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+"]"},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.q){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.bc(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.q(z)
y.B(this)
x=b.gbx()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.q(z)
y.B(this)
x=b.gbx()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=3)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=3)return H.b(z,b)
z[b]=c},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
aI:function(a){var z,y,x,w,v,u
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
aE:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bS:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.q(new Float32Array(3))
z.Y(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
a7:function(a){var z=new T.q(new Float32Array(3))
z.B(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
p:{
dU:function(a,b,c){var z=new T.q(new Float32Array(3))
z.Y(a,b,c)
return z}}},ag:{"^":"d;by:a<",
B:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+","+H.c(z[3])},
C:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ag){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.bc(this.a)},
D:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ag(z)
y.B(this)
x=b.gby()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.ag(z)
y.B(this)
x=b.gby()
z[0]=C.a.l(z[0],x.h(0,0))
z[1]=C.a.l(z[1],x.h(0,1))
z[2]=C.a.l(z[2],x.h(0,2))
z[3]=C.a.l(z[3],x.h(0,3))
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=4)return H.b(z,b)
z[b]=c},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
gal:function(a){return this.a[3]}}}],["","",,V,{"^":"",
ez:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=document
x=new R.i9(0,0,null,null,null,null)
x.d1(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fu(null,w)
y=J.f5(w,"webgl2",P.de(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.I(P.d4('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.c(J.f6(y))
if($.es>0)P.a_("I: "+u)
J.eN(y,0,0,0,1)
J.aZ(y,2929)
J.aZ(y,2884)
y=new Float32Array(3)
u=D.hg(null)
t=D.hv(w)
s=new T.L(new Float32Array(16))
s.U()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.hG(25,10,0,0,new T.q(y),-0.02,u,t,s,new T.q(r),new T.q(q),new T.q(p),new T.q(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.L(new Float32Array(16))
y.U()
u=new T.L(new Float32Array(16))
u.U()
n=new G.hH(o,50,1,0.1,1000,y,u,new T.L(new Float32Array(16)),P.K(),"perspective",!1,!0)
n.bc()
y=H.w([],[A.dt])
m=new R.hW(w,n,null,v,y,17664,0,0,0,0,"main",!1,!0)
m.cZ("main",v,null)
m.em(null)
W.ac(window,"resize",m.gel(),!1,W.ae)
u=G.hY("solid",v,$.$get$eE(),$.$get$eD())
l=new A.dt(u,[n],[],"solid",!1,!0)
y.push(l)
k=G.di("wire")
k.d.i(0,"uColor",$.$get$cS())
j=G.di("normal")
j.d.i(0,"uColor",$.$get$cR())
z.a=null
z.b=null
z.c=0
P.fW([D.hl("../asset/dragon/dragon.obj")],null,!1).aP(new V.kM(z,l,k,j,new V.kL(z,o,m,x)))},
kL:{"^":"h:22;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a
y=J.aV(a7)
y.D(a7,z.c)
z.c=y.l(a7,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.u(0,0)||w.u(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.aZ()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.aZ()
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
if(typeof v!=="number")return v.aZ()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.dS(y.id,-1.4707963267948965,1.4707963267948965)
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
y.aH(t)
t=y.f.a
t[0]=q[2]
t[1]=q[6]
t[2]=q[10]
y=-y.k1
v=t[0]
u=t[1]
r=t[2]
p=Math.sqrt(v*v+u*u+r*r)
o=t[0]/p
n=t[1]/p
m=t[2]/p
l=Math.cos(y)
k=Math.sin(y)
j=1-l
i=o*o*j+l
y=m*k
h=o*n*j-y
t=n*k
g=o*m*j+t
f=n*o*j+y
e=n*n*j+l
y=o*k
d=n*m*j-y
c=m*o*j-t
b=m*n*j+y
a=m*m*j+l
y=q[0]
t=q[4]
r=q[8]
u=q[1]
v=q[5]
a0=q[9]
a1=q[2]
a2=q[6]
a3=q[10]
a4=q[3]
a5=q[7]
a6=q[11]
q[0]=y*i+t*f+r*c
q[1]=u*i+v*f+a0*c
q[2]=a1*i+a2*f+a3*c
q[3]=a4*i+a5*f+a6*c
q[4]=y*h+t*e+r*b
q[5]=u*h+v*e+a0*b
q[6]=a1*h+a2*e+a3*b
q[7]=a4*h+a5*e+a6*b
q[8]=y*g+t*d+r*a
q[9]=u*g+v*d+a0*a
q[10]=a1*g+a2*d+a3*a
q[11]=a4*g+a5*d+a6*a
w.c.a6(0)
w.b.a6(0)
x.e=0
x.d=0
x.f=0
x.c.a6(0)
x.b.a6(0)
z.b.c=$.$get$et().checked
z.a.c=$.$get$eu().checked
this.c.cQ()
C.a6.gdK(window).aP(this)
this.d.d4(z.c)}},
kM:{"^":"h:23;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=Y.h2(J.aA(a,0))
P.a_(z)
y=this.b
x=y.d
w=x.d
x=x.e.x
v=G.dj("../asset/dragon/dragon.obj",w,1,x)
u=z.d
v.b6(G.bl(u,null))
v.b4(z.cT())
G.j7(z,v)
P.a_(v)
t=new Float32Array(9)
s=new T.L(new Float32Array(16))
s.U()
r=new T.L(new Float32Array(16))
r.U()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new A.dl(this.c,v,[],new T.am(t),s,r,new T.q(q),new T.q(p),new T.q(o),new T.q(new Float32Array(3)),v.a,!1,!0)
t=this.a
t.a=n
s=new T.q(new Float32Array(3))
s.Y(100,0,0)
n.aH(s)
y=y.f
y.push(t.a)
m=G.iS(G.dj("norm",w,1,x),G.bl(u,null),G.bl(H.aY(z.e.h(0,"aNormal"),"$isf",[T.q],"$asf"),null),0.05)
x=new Float32Array(9)
w=new T.L(new Float32Array(16))
w.U()
u=new T.L(new Float32Array(16))
u.U()
s=new Float32Array(3)
r=new Float32Array(3)
q=new Float32Array(3)
l=new A.dl(this.d,m,[],new T.am(x),w,u,new T.q(s),new T.q(r),new T.q(q),new T.q(new Float32Array(3)),m.a,!1,!0)
t.b=l
x=new T.q(new Float32Array(3))
x.Y(100,0,0)
l.aH(x)
y.push(t.b)
this.e.$1(0)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d9.prototype
return J.d8.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.ha.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.d)return a
return J.ba(a)}
J.kw=function(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.d)return a
return J.ba(a)}
J.a5=function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.d)return a
return J.ba(a)}
J.at=function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.d)return a
return J.ba(a)}
J.aV=function(a){if(typeof a=="number")return J.aI.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.b6.prototype
return a}
J.kx=function(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.b6.prototype
return a}
J.b9=function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.b6.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.d)return a
return J.ba(a)}
J.ay=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kw(a).l(a,b)}
J.A=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).C(a,b)}
J.R=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aV(a).ab(a,b)}
J.az=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aV(a).T(a,b)}
J.bd=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aV(a).D(a,b)}
J.aA=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ey(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a5(a).h(a,b)}
J.cq=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ey(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.at(a).i(a,b,c)}
J.eG=function(a,b,c,d){return J.e(a).du(a,b,c,d)}
J.cr=function(a,b){return J.e(a).bz(a,b)}
J.eH=function(a,b,c,d){return J.e(a).bA(a,b,c,d)}
J.cs=function(a,b,c){return J.e(a).bC(a,b,c)}
J.eI=function(a,b){return J.e(a).dM(a,b)}
J.bI=function(a,b,c){return J.e(a).bD(a,b,c)}
J.eJ=function(a,b,c){return J.e(a).bF(a,b,c)}
J.ct=function(a,b,c){return J.e(a).bG(a,b,c)}
J.be=function(a,b){return J.e(a).dP(a,b)}
J.eK=function(a,b){return J.e(a).bH(a,b)}
J.eL=function(a,b,c){return J.e(a).bI(a,b,c)}
J.cu=function(a,b,c,d){return J.e(a).bJ(a,b,c,d)}
J.eM=function(a,b){return J.at(a).bL(a,b)}
J.eN=function(a,b,c,d,e){return J.e(a).bM(a,b,c,d,e)}
J.cv=function(a,b){return J.b9(a).aD(a,b)}
J.eO=function(a,b){return J.kx(a).P(a,b)}
J.bJ=function(a,b,c){return J.a5(a).dU(a,b,c)}
J.bK=function(a){return J.e(a).bP(a)}
J.eP=function(a){return J.e(a).bQ(a)}
J.eQ=function(a){return J.e(a).dX(a)}
J.eR=function(a,b){return J.e(a).bT(a,b)}
J.bL=function(a,b){return J.e(a).bU(a,b)}
J.eS=function(a,b,c,d){return J.e(a).bV(a,b,c,d)}
J.eT=function(a,b,c,d,e){return J.e(a).dZ(a,b,c,d,e)}
J.eU=function(a,b,c,d,e){return J.e(a).bW(a,b,c,d,e)}
J.eV=function(a,b,c,d,e,f){return J.e(a).e_(a,b,c,d,e,f)}
J.cw=function(a,b){return J.at(a).t(a,b)}
J.aZ=function(a,b){return J.e(a).bX(a,b)}
J.eW=function(a,b){return J.e(a).bY(a,b)}
J.eX=function(a){return J.e(a).e0(a)}
J.cx=function(a,b){return J.at(a).w(a,b)}
J.cy=function(a){return J.e(a).gdL(a)}
J.eY=function(a){return J.e(a).gaF(a)}
J.aB=function(a){return J.e(a).gL(a)}
J.a6=function(a){return J.n(a).gA(a)}
J.ak=function(a){return J.at(a).gJ(a)}
J.eZ=function(a){return J.e(a).gF(a)}
J.a0=function(a){return J.a5(a).gj(a)}
J.f_=function(a){return J.e(a).gc6(a)}
J.f0=function(a){return J.e(a).gaN(a)}
J.cz=function(a){return J.e(a).gV(a)}
J.f1=function(a){return J.e(a).geq(a)}
J.f2=function(a){return J.e(a).gcb(a)}
J.f3=function(a){return J.e(a).gal(a)}
J.cA=function(a){return J.e(a).geA(a)}
J.bM=function(a){return J.e(a).gm(a)}
J.bN=function(a){return J.e(a).gn(a)}
J.cB=function(a){return J.e(a).gH(a)}
J.f4=function(a){return J.e(a).aT(a)}
J.f5=function(a,b,c){return J.e(a).cs(a,b,c)}
J.f6=function(a){return J.e(a).am(a)}
J.f7=function(a,b){return J.e(a).aU(a,b)}
J.f8=function(a,b,c){return J.e(a).aV(a,b,c)}
J.cC=function(a,b,c){return J.e(a).aY(a,b,c)}
J.f9=function(a,b){return J.e(a).c3(a,b)}
J.cD=function(a){return J.at(a).ej(a)}
J.fa=function(a,b,c){return J.b9(a).ek(a,b,c)}
J.fb=function(a,b){return J.e(a).sah(a,b)}
J.cE=function(a,b){return J.b9(a).cz(a,b)}
J.fc=function(a,b,c,d){return J.e(a).b3(a,b,c,d)}
J.cF=function(a){return J.aV(a).er(a)}
J.fd=function(a){return J.b9(a).eu(a)}
J.aC=function(a){return J.n(a).k(a)}
J.fe=function(a,b,c,d){return J.e(a).ew(a,b,c,d)}
J.ff=function(a){return J.b9(a).ex(a)}
J.fg=function(a,b,c){return J.e(a).cc(a,b,c)}
J.fh=function(a,b,c){return J.e(a).cd(a,b,c)}
J.bO=function(a,b,c){return J.e(a).ce(a,b,c)}
J.fi=function(a,b,c){return J.e(a).cf(a,b,c)}
J.cG=function(a,b,c){return J.e(a).cg(a,b,c)}
J.cH=function(a,b,c){return J.e(a).ci(a,b,c)}
J.cI=function(a,b,c){return J.e(a).cj(a,b,c)}
J.cJ=function(a,b,c,d){return J.e(a).ck(a,b,c,d)}
J.cK=function(a,b,c,d){return J.e(a).cl(a,b,c,d)}
J.fj=function(a,b){return J.e(a).cn(a,b)}
J.fk=function(a,b,c){return J.e(a).ey(a,b,c)}
J.fl=function(a,b,c,d,e,f,g){return J.e(a).co(a,b,c,d,e,f,g)}
J.fm=function(a,b,c,d,e){return J.e(a).cq(a,b,c,d,e)}
I.av=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bP.prototype
C.n=W.fA.prototype
C.D=W.fG.prototype
C.E=W.h0.prototype
C.F=J.i.prototype
C.c=J.aG.prototype
C.t=J.d8.prototype
C.b=J.d9.prototype
C.a=J.aI.prototype
C.i=J.aJ.prototype
C.M=J.aK.prototype
C.P=H.hA.prototype
C.Q=W.hC.prototype
C.x=J.hI.prototype
C.C=W.ik.prototype
C.q=J.b6.prototype
C.a6=W.it.prototype
C.d=new P.js()
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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

C.I=function(getTagFallback) {
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
C.J=function() {
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
C.K=function(hooks) {
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
C.L=function(hooks) {
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
C.N=H.w(I.av(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.O=I.av(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.av([])
C.o=H.w(I.av(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.w(I.av(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.R=new G.v("vec3","vertex btangents",0)
C.e=new G.v("vec3","",0)
C.S=new G.v("vec4","delta from light",0)
C.m=new G.v("","",0)
C.y=new G.v("vec3","vertex coordinates",0)
C.T=new G.v("vec3","vertex binormals",0)
C.z=new G.v("vec4","for wireframe",0)
C.U=new G.v("vec4","per vertex color",0)
C.V=new G.v("float","for normal maps",0)
C.j=new G.v("mat4","",0)
C.X=new G.v("mat4","",4)
C.W=new G.v("mat4","",128)
C.f=new G.v("float","",0)
C.Y=new G.v("float","",4)
C.Z=new G.v("float","depth for shadowmaps",0)
C.h=new G.v("sampler2D","",0)
C.a_=new G.v("float","for bump maps",0)
C.a0=new G.v("vec2","texture uvs",0)
C.a1=new G.v("float","time since program start in sec",0)
C.k=new G.v("vec2","",0)
C.a2=new G.v("samplerCube","",0)
C.l=new G.v("vec4","",0)
C.a3=new G.v("vec3","vertex normals",0)
C.a4=new G.v("sampler2DShadow","",0)
C.A=new G.v("vec3","per vertex color",0)
C.B=new G.v("mat3","",0)
C.a5=new G.v("vec3","vertex tangents",0)
$.a1=0
$.aD=null
$.cN=null
$.ew=null
$.el=null
$.eC=null
$.bE=null
$.bF=null
$.cm=null
$.ap=null
$.aR=null
$.aS=null
$.cg=!1
$.r=C.d
$.a8=null
$.bU=null
$.d2=null
$.d1=null
$.cY=null
$.cX=null
$.cW=null
$.cV=null
$.es=0
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
I.$lazy(y,x,w)}})(["cU","$get$cU",function(){return H.ev("_$dart_dartClosure")},"c_","$get$c_",function(){return H.ev("_$dart_js")},"dH","$get$dH",function(){return H.a3(H.bA({
toString:function(){return"$receiver$"}}))},"dI","$get$dI",function(){return H.a3(H.bA({$method$:null,
toString:function(){return"$receiver$"}}))},"dJ","$get$dJ",function(){return H.a3(H.bA(null))},"dK","$get$dK",function(){return H.a3(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dO","$get$dO",function(){return H.a3(H.bA(void 0))},"dP","$get$dP",function(){return H.a3(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dM","$get$dM",function(){return H.a3(H.dN(null))},"dL","$get$dL",function(){return H.a3(function(){try{null.$method$}catch(z){return z.message}}())},"dR","$get$dR",function(){return H.a3(H.dN(void 0))},"dQ","$get$dQ",function(){return H.a3(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cb","$get$cb",function(){return P.iz()},"d6","$get$d6",function(){return P.iV(null,P.b1)},"aT","$get$aT",function(){return[]},"cT","$get$cT",function(){return{}},"e1","$get$e1",function(){return P.c2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cd","$get$cd",function(){return P.K()},"dy","$get$dy",function(){return new G.dF(1281,0,4294967295)},"cM","$get$cM",function(){return new G.dE(1281,1281,1281)},"X","$get$X",function(){return P.de(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.U,"aPosition",C.y,"aTexUV",C.a0,"aNormal",C.a3,"aBinormal",C.T,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a5,"aBitangent",C.R,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.S,"vCenter",C.z,"vDepth",C.Z,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a4,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a2,"uAnimationTable",C.h,"uTime",C.a1,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.W,"uLightDescs",C.X,"uLightCount",C.f,"uLightTypes",C.Y,"uBumpScale",C.a_,"uNormalScale",C.V])},"cR","$get$cR",function(){return T.dU(0,0,1)},"cS","$get$cS",function(){return T.dU(1,1,0)},"eE","$get$eE",function(){var z=G.dv("SolidColor")
z.cJ(["aPosition"])
z.b5(["uPerspectiveViewMatrix","uModelMatrix"])
z.bb(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"eD","$get$eD",function(){var z=G.dv("SolidColorF")
z.b5(["uColor"])
z.bb(["oFragColor = vec4( uColor, 1.0 );"])
return z},"et","$get$et",function(){return H.Z(W.ep().querySelector("#normals"),"$isbY")},"eu","$get$eu",function(){return H.Z(W.ep().querySelector("#wires"),"$isbY")}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.t},{func:1,args:[W.M]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.E]},{func:1,args:[W.bo]},{func:1,ret:P.ci,args:[W.al,P.l,P.l,W.cc]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aP]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aP]},{func:1,ret:P.S},{func:1,ret:[P.S,[P.f,P.l]]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[W.ae]},{func:1,args:[W.aQ]},{func:1,args:[P.E,P.d]},{func:1,v:true,args:[P.aW]},{func:1,args:[P.f]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.kX(d||a)
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
Isolate.as=a.as
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
if(typeof dartMainRunner==="function")dartMainRunner(V.ez,[])
else V.ez([])})})()
//# sourceMappingURL=wireframe2.dart.js.map
