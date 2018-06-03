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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cx(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.au=function(){}
var dart=[["","",,H,{"^":"",mw:{"^":"d;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
cA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bb:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cz==null){H.l9()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cm("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ca()]
if(v!=null)return v
v=H.lc(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.y
if(y===Object.prototype)return C.y
if(typeof w=="function"){Object.defineProperty(w,$.$get$ca(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
h:{"^":"d;",
F:function(a,b){return a===b},
gA:function(a){return H.aO(a)},
k:["cX",function(a){return"Instance of '"+H.aP(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hu:{"^":"h;",
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$iscw:1},
hv:{"^":"h;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
$isb3:1},
cb:{"^":"h;",
gA:function(a){return 0},
k:["cZ",function(a){return String(a)}]},
i4:{"^":"cb;"},
b8:{"^":"cb;"},
aL:{"^":"cb;",
k:function(a){var z=a[$.$get$d8()]
return z==null?this.cZ(a):J.aD(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aH:{"^":"h;$ti",
N:function(a,b){var z,y
if(!!a.fixed$length)H.a0(P.p("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y)a.push(b[y])},
u:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.K(a))}},
af:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.c(a[x])
if(x>=z)return H.b(y,x)
y[x]=w}return y.join(b)},
ba:function(a,b){return H.dJ(a,b,null,H.C(a,0))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
geB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.c9())},
cR:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.a0(P.p("setRange"))
P.dB(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.G()
if(typeof b!=="number")return H.t(b)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$isi){x=e
w=d}else{w=y.ba(d,e).eR(0,!1)
x=0}y=J.D(w)
v=y.gj(w)
if(typeof v!=="number")return H.t(v)
if(x+z>v)throw H.a(H.hr())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
ai:function(a,b,c,d){return this.cR(a,b,c,d,0)},
bM:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.K(a))}return!1},
cS:function(a,b){if(!!a.immutable$list)H.a0(P.p("sort"))
H.ir(a,J.kE())},
ar:function(a){return this.cS(a,null)},
v:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
k:function(a){return P.c8(a,"[","]")},
gI:function(a){return new J.cX(a,a.length,0,null,[H.C(a,0)])},
gA:function(a){return H.aO(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.a0(P.p("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cW(b,"newLength",null))
if(b<0)throw H.a(P.ao(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a5(a,b))
if(b>=a.length||b<0)throw H.a(H.a5(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.a0(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a5(a,b))
if(b>=a.length||b<0)throw H.a(H.a5(a,b))
a[b]=c},
l:function(a,b){var z,y,x
z=a.length
y=J.H(b)
if(typeof y!=="number")return H.t(y)
x=z+y
y=H.u([],[H.C(a,0)])
this.sj(y,x)
this.ai(y,0,a.length,a)
this.ai(y,a.length,x,b)
return y},
$iso:1,
$aso:I.au,
$isi:1,
p:{
aI:function(a){a.fixed$length=Array
return a},
mu:[function(a,b){return J.f1(a,b)},"$2","kE",8,0,24]}},
mv:{"^":"aH;$ti"},
cX:{"^":"d;a,b,c,d,$ti",
gw:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aJ:{"^":"h;",
S:function(a,b){var z
if(typeof b!=="number")throw H.a(H.a_(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gam(b)
if(this.gam(a)===z)return 0
if(this.gam(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gam:function(a){return a===0?1/a<0:a<0},
eQ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
e8:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".ceil()"))},
ep:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".floor()"))},
e9:function(a,b,c){if(this.S(b,c)>0)throw H.a(H.a_(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
eP:function(a){return a},
eT:function(a,b){var z
if(b>20)throw H.a(P.ao(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gam(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a+b},
G:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a-b},
V:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bF(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.bF(a,b)},
bF:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
bD:function(a,b){var z
if(a>0)z=this.dU(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dU:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a<b},
ah:function(a,b){if(typeof b!=="number")throw H.a(H.a_(b))
return a>b},
$isat:1,
$isaV:1},
dl:{"^":"aJ;",$isE:1},
dk:{"^":"aJ;"},
aK:{"^":"h;",
ea:function(a,b){if(b>=a.length)H.a0(H.a5(a,b))
return a.charCodeAt(b)},
bv:function(a,b){if(b>=a.length)throw H.a(H.a5(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.a(P.cW(b,null,null))
return a+b},
cU:function(a,b,c){var z
if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cT:function(a,b){return this.cU(a,b,0)},
bd:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.a0(H.a_(c))
if(b<0)throw H.a(P.bs(b,null,null))
if(typeof c!=="number")return H.t(c)
if(b>c)throw H.a(P.bs(b,null,null))
if(c>a.length)throw H.a(P.bs(c,null,null))
return a.substring(b,c)},
cV:function(a,b){return this.bd(a,b,null)},
eS:function(a){return a.toLowerCase()},
ec:function(a,b,c){if(c>a.length)throw H.a(P.ao(c,0,a.length,null,null))
return H.lk(a,b,c)},
S:function(a,b){var z
if(typeof b!=="string")throw H.a(H.a_(b))
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
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.a5(a,b))
if(b>=a.length||b<0)throw H.a(H.a5(a,b))
return a[b]},
$iso:1,
$aso:I.au,
$isj:1}}],["","",,H,{"^":"",
c9:function(){return new P.bw("No element")},
hs:function(){return new P.bw("Too many elements")},
hr:function(){return new P.bw("Too few elements")},
ir:function(a,b){var z=J.H(a)
if(typeof z!=="number")return z.G()
H.b5(a,0,z-1,b)},
b5:function(a,b,c,d){if(c-b<=32)H.iq(a,b,c,d)
else H.ip(a,b,c,d)},
iq:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.D(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.T(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
ip:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.c.M(c-b+1,6)
y=b+z
x=c-z
w=C.c.M(b+c,2)
v=w-z
u=w+z
t=J.D(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.T(d.$2(s,r),0)){n=r
r=s
s=n}if(J.T(d.$2(p,o),0)){n=o
o=p
p=n}if(J.T(d.$2(s,q),0)){n=q
q=s
s=n}if(J.T(d.$2(r,q),0)){n=q
q=r
r=n}if(J.T(d.$2(s,p),0)){n=p
p=s
s=n}if(J.T(d.$2(q,p),0)){n=p
p=q
q=n}if(J.T(d.$2(r,o),0)){n=o
o=r
r=n}if(J.T(d.$2(r,q),0)){n=q
q=r
r=n}if(J.T(d.$2(p,o),0)){n=o
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
h=J.n(i)
if(h.F(i,0))continue
if(h.a0(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aw(i)
if(h.ah(i,0)){--l
continue}else{g=l-1
if(h.a0(i,0)){t.i(a,k,t.h(a,m))
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
t.i(a,m,j)}++m}else if(J.T(d.$2(j,p),0))for(;!0;)if(J.T(d.$2(t.h(a,l),p),0)){--l
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
H.b5(a,b,m-2,d)
H.b5(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.M(d.$2(t.h(a,m),r),0);)++m
for(;J.M(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.M(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.M(d.$2(j,p),0))for(;!0;)if(J.M(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aX(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.b5(a,m,l,d)}else H.b5(a,m,l,d)},
bl:{"^":"b1;$ti"},
aN:{"^":"bl;$ti",
gI:function(a){return new H.dr(this,this.gj(this),0,null,[H.bc(this,"aN",0)])},
u:function(a,b){var z,y
z=this.gj(this)
if(typeof z!=="number")return H.t(z)
y=0
for(;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gj(this))throw H.a(P.K(this))}},
aZ:function(a,b){return this.cY(0,b)}},
iF:{"^":"aN;a,b,c,$ti",
dl:function(a,b,c,d){},
gdH:function(){var z=J.H(this.a)
return z},
gdV:function(){var z,y
z=J.H(this.a)
y=this.b
if(typeof z!=="number")return H.t(z)
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.H(this.a)
y=this.b
if(typeof z!=="number")return H.t(z)
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdV()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.t(b)
y=z+b
if(!(b<0)){z=this.gdH()
if(typeof z!=="number")return H.t(z)
z=y>=z}else z=!0
if(z)throw H.a(P.y(b,this,"index",null,null))
return J.cH(this.a,y)},
eR:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.D(y)
w=x.gj(y)
if(typeof w!=="number")return w.G()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.u(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.b(t,s)
t[s]=u
u=x.gj(y)
if(typeof u!=="number")return u.a0()
if(u<w)throw H.a(P.K(this))}return t},
p:{
dJ:function(a,b,c,d){var z=new H.iF(a,b,c,[d])
z.dl(a,b,c,d)
return z}}},
dr:{"^":"d;a,b,c,d,$ti",
gw:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.D(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.K(z))
w=this.c
if(typeof x!=="number")return H.t(x)
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
hL:{"^":"aN;a,b,$ti",
gj:function(a){return J.H(this.a)},
q:function(a,b){return this.b.$1(J.cH(this.a,b))},
$asbl:function(a,b){return[b]},
$asaN:function(a,b){return[b]},
$asb1:function(a,b){return[b]}},
e2:{"^":"b1;a,b,$ti",
gI:function(a){return new H.iO(J.ak(this.a),this.b,this.$ti)}},
iO:{"^":"ht;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gw(z))===!0)return!0
return!1},
gw:function(a){var z=this.a
return z.gw(z)}},
bn:{"^":"d;$ti"}}],["","",,H,{"^":"",
l1:function(a){return init.types[a]},
eK:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$isq},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aD(a)
if(typeof z!=="string")throw H.a(H.a_(a))
return z},
aO:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aP:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.n(a).$isb8){v=C.w(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bv(w,0)===36)w=C.i.cV(w,1)
r=H.bL(H.ax(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
L:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ib:function(a){return a.b?H.L(a).getUTCFullYear()+0:H.L(a).getFullYear()+0},
i9:function(a){return a.b?H.L(a).getUTCMonth()+1:H.L(a).getMonth()+1},
i5:function(a){return a.b?H.L(a).getUTCDate()+0:H.L(a).getDate()+0},
i6:function(a){return a.b?H.L(a).getUTCHours()+0:H.L(a).getHours()+0},
i8:function(a){return a.b?H.L(a).getUTCMinutes()+0:H.L(a).getMinutes()+0},
ia:function(a){return a.b?H.L(a).getUTCSeconds()+0:H.L(a).getSeconds()+0},
i7:function(a){return a.b?H.L(a).getUTCMilliseconds()+0:H.L(a).getMilliseconds()+0},
t:function(a){throw H.a(H.a_(a))},
b:function(a,b){if(a==null)J.H(a)
throw H.a(H.a5(a,b))},
a5:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a8(!0,b,"index",null)
z=J.H(a)
if(!(b<0)){if(typeof z!=="number")return H.t(z)
y=b>=z}else y=!0
if(y)return P.y(b,a,"index",null,z)
return P.bs(b,"index",null)},
a_:function(a){return new P.a8(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.br()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eR})
z.name=""}else z.toString=H.eR
return z},
eR:function(){return J.aD(this.dartException)},
a0:function(a){throw H.a(a)},
A:function(a){throw H.a(P.K(a))},
J:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lm(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.bD(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cd(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dy(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dP()
u=$.$get$dQ()
t=$.$get$dR()
s=$.$get$dS()
r=$.$get$dW()
q=$.$get$dX()
p=$.$get$dU()
$.$get$dT()
o=$.$get$dZ()
n=$.$get$dY()
m=v.R(y)
if(m!=null)return z.$1(H.cd(y,m))
else{m=u.R(y)
if(m!=null){m.method="call"
return z.$1(H.cd(y,m))}else{m=t.R(y)
if(m==null){m=s.R(y)
if(m==null){m=r.R(y)
if(m==null){m=q.R(y)
if(m==null){m=p.R(y)
if(m==null){m=s.R(y)
if(m==null){m=o.R(y)
if(m==null){m=n.R(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dy(y,m))}}return z.$1(new H.iL(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dF()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a8(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dF()
return a},
a6:function(a){var z
if(a==null)return new H.ej(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ej(a,null)},
kY:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
lb:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.di("Unsupported number of arguments for wrapped closure"))},
R:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lb)
a.$identity=z
return z},
fN:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$isi){z.$reflectionInfo=c
x=H.id(z).r}else x=c
w=d?Object.create(new H.is().constructor.prototype):Object.create(new H.bW(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a1
$.a1=J.aA(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.d1(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.l1,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.d_:H.bX
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.d1(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fK:function(a,b,c,d){var z=H.bX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
d1:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fM(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fK(y,!w,z,b)
if(y===0){w=$.a1
$.a1=J.aA(w,1)
u="self"+H.c(w)
w="return function(){var "+u+" = this."
v=$.aE
if(v==null){v=H.bj("self")
$.aE=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a1
$.a1=J.aA(w,1)
t+=H.c(w)
w="return function("+t+"){return this."
v=$.aE
if(v==null){v=H.bj("self")
$.aE=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
fL:function(a,b,c,d){var z,y
z=H.bX
y=H.d_
switch(b?-1:a){case 0:throw H.a(H.ik("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fM:function(a,b){var z,y,x,w,v,u,t,s
z=$.aE
if(z==null){z=H.bj("self")
$.aE=z}y=$.cZ
if(y==null){y=H.bj("receiver")
$.cZ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fL(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.a1
$.a1=J.aA(y,1)
return new Function(z+H.c(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.a1
$.a1=J.aA(y,1)
return new Function(z+H.c(y)+"}")()},
cx:function(a,b,c,d,e,f){var z,y
z=J.aI(b)
y=!!J.n(c).$isi?J.aI(c):c
return H.fN(a,z,y,!!d,e,f)},
li:function(a,b){var z=J.D(b)
throw H.a(H.d0(a,z.bd(b,3,z.gj(b))))},
ag:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.li(a,b)},
cy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eE:function(a,b){var z,y
if(a==null)return!1
z=H.cy(J.n(a))
if(z==null)y=!1
else y=H.eJ(z,b)
return y},
kN:function(a){var z
if(a instanceof H.f){z=H.cy(J.n(a))
if(z!=null)return H.cB(z,null)
return"Closure"}return H.aP(a)},
ll:function(a){throw H.a(new P.fS(a))},
eH:function(a){return init.getIsolateTag(a)},
u:function(a,b){a.$ti=b
return a},
ax:function(a){if(a==null)return
return a.$ti},
nS:function(a,b,c){return H.aW(a["$as"+H.c(c)],H.ax(b))},
bd:function(a,b,c,d){var z=H.aW(a["$as"+H.c(c)],H.ax(b))
return z==null?null:z[d]},
bc:function(a,b,c){var z=H.aW(a["$as"+H.c(b)],H.ax(a))
return z==null?null:z[c]},
C:function(a,b){var z=H.ax(a)
return z==null?null:z[b]},
cB:function(a,b){var z=H.az(a,b)
return z},
az:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bL(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.c(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.az(z,b)
return H.kD(a,b)}return"unknown-reified-type"},
kD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.az(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.az(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.az(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kX(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.az(r[p],b)+(" "+H.c(p))}w+="}"}return"("+w+") => "+z},
bL:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.ck("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.az(u,c)}return w?"":"<"+z.k(0)+">"},
l0:function(a){var z,y,x
if(a instanceof H.f){z=H.cy(J.n(a))
if(z!=null)return H.cB(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bL(a.$ti,0,null)
return y+x},
aW:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ba:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ax(a)
y=J.n(a)
if(y[b]==null)return!1
return H.ev(H.aW(y[d],z),c)},
bg:function(a,b,c,d){var z,y
if(a==null)return a
z=H.ba(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bL(c,0,null)
throw H.a(H.d0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ev:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.S(a[y],b[y]))return!1
return!0},
nQ:function(a,b,c){return a.apply(b,H.aW(J.n(b)["$as"+H.c(c)],H.ax(b)))},
S:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b3")return!0
if('func' in b)return H.eJ(a,b)
if('func' in a)return b.builtin$cls==="mn"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cB(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.ev(H.aW(u,z),x)},
eu:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.S(z,v)||H.S(v,z)))return!1}return!0},
kO:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aI(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.S(v,u)||H.S(u,v)))return!1}return!0},
eJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.S(z,y)||H.S(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eu(x,w,!1))return!1
if(!H.eu(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.S(o,n)||H.S(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.S(o,n)||H.S(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.S(o,n)||H.S(n,o)))return!1}}return H.kO(a.named,b.named)},
nR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lc:function(a){var z,y,x,w,v,u
z=$.eI.$1(a)
y=$.bJ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.et.$2(a,z)
if(z!=null){y=$.bJ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bK[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bM(x)
$.bJ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bK[z]=x
return x}if(v==="-"){u=H.bM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eM(a,x)
if(v==="*")throw H.a(P.cm(z))
if(init.leafTags[z]===true){u=H.bM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eM(a,x)},
eM:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cA(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bM:function(a){return J.cA(a,!1,null,!!a.$isq)},
lf:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bM(z)
else return J.cA(z,c,null,null)},
l9:function(){if(!0===$.cz)return
$.cz=!0
H.la()},
la:function(){var z,y,x,w,v,u,t,s
$.bJ=Object.create(null)
$.bK=Object.create(null)
H.l5()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eO.$1(v)
if(u!=null){t=H.lf(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l5:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.as(C.H,H.as(C.M,H.as(C.v,H.as(C.v,H.as(C.L,H.as(C.I,H.as(C.J(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eI=new H.l6(v)
$.et=new H.l7(u)
$.eO=new H.l8(t)},
as:function(a,b){return a(b)||b},
lk:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ic:{"^":"d;a,b,c,d,e,f,r,x",p:{
id:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aI(z)
y=z[0]
x=z[1]
return new H.ic(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
iJ:{"^":"d;a,b,c,d,e,f",
R:function(a){var z,y,x
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
return new H.iJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bC:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dV:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i1:{"^":"I;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+H.c(z)+"' on null"},
p:{
dy:function(a,b){return new H.i1(a,b==null?null:b.method)}}},
hw:{"^":"I;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
p:{
cd:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hw(a,y,z?null:b.receiver)}}},
iL:{"^":"I;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lm:{"^":"f:0;a",
$1:function(a){if(!!J.n(a).$isI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ej:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaQ:1},
f:{"^":"d;",
k:function(a){return"Closure '"+H.aP(this).trim()+"'"},
gcM:function(){return this},
gcM:function(){return this}},
dK:{"^":"f;"},
is:{"^":"dK;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bW:{"^":"dK;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var z,y
z=this.c
if(z==null)y=H.aO(this.a)
else y=typeof z!=="object"?J.a7(z):H.aO(z)
return(y^H.aO(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.aP(z)+"'")},
p:{
bX:function(a){return a.a},
d_:function(a){return a.c},
bj:function(a){var z,y,x,w,v
z=new H.bW("self","target","receiver","name")
y=J.aI(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fI:{"^":"I;a",
k:function(a){return this.a},
p:{
d0:function(a,b){return new H.fI("CastError: "+H.c(P.c1(a))+": type '"+H.kN(a)+"' is not a subtype of type '"+b+"'")}}},
ij:{"^":"I;a",
k:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
ik:function(a){return new H.ij(a)}}},
e_:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gA:function(a){return J.a7(this.a)},
F:function(a,b){if(b==null)return!1
return b instanceof H.e_&&J.M(this.a,b.a)}},
cc:{"^":"b2;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gC:function(a){return new H.dn(this,[H.C(this,0)])},
a_:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bx(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bx(y,b)}else return this.ey(b)},
ey:function(a){var z=this.d
if(z==null)return!1
return this.aM(this.aC(z,J.a7(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ak(z,b)
x=y==null?null:y.gae()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ak(w,b)
x=y==null?null:y.gae()
return x}else return this.ez(b)},
ez:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aC(z,J.a7(a)&0x3ffffff)
x=this.aM(y,a)
if(x<0)return
return y[x].gae()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aF()
this.b=z}this.bp(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aF()
this.c=y}this.bp(y,b,c)}else{x=this.d
if(x==null){x=this.aF()
this.d=x}w=J.a7(b)&0x3ffffff
v=this.aC(x,w)
if(v==null)this.aJ(x,w,[this.av(b,c)])
else{u=this.aM(v,b)
if(u>=0)v[u].sae(c)
else v.push(this.av(b,c))}}},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bq()}},
u:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.K(this))
z=z.c}},
bp:function(a,b,c){var z=this.ak(a,b)
if(z==null)this.aJ(a,b,this.av(b,c))
else z.sae(c)},
bq:function(){this.r=this.r+1&67108863},
av:function(a,b){var z,y
z=new H.hE(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bq()
return z},
aM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].gex(),b))return y
return-1},
k:function(a){return P.ds(this)},
ak:function(a,b){return a[b]},
aC:function(a,b){return a[b]},
aJ:function(a,b,c){a[b]=c},
dF:function(a,b){delete a[b]},
bx:function(a,b){return this.ak(a,b)!=null},
aF:function(){var z=Object.create(null)
this.aJ(z,"<non-identifier-key>",z)
this.dF(z,"<non-identifier-key>")
return z}},
hE:{"^":"d;ex:a<,ae:b@,c,d"},
dn:{"^":"bl;a,$ti",
gj:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.aM(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
u:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.K(z))
y=y.c}}},
aM:{"^":"d;a,b,c,d,$ti",
gw:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.K(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
l6:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
l7:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
l8:{"^":"f:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
kX:function(a){return J.aI(H.u(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bH:function(a){var z,y,x
if(!!J.n(a).$iso)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.a5(b,a))},
hY:{"^":"h;","%":"DataView;ArrayBufferView;cg|ed|ee|dv|ef|eg|ai"},
cg:{"^":"hY;",
gj:function(a){return a.length},
$iso:1,
$aso:I.au,
$isq:1,
$asq:I.au},
dv:{"^":"ee;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a4(b,a,a.length)
a[b]=c},
$asbn:function(){return[P.at]},
$ask:function(){return[P.at]},
$isi:1,
$asi:function(){return[P.at]},
"%":"Float64Array"},
ai:{"^":"eg;",
i:function(a,b,c){H.a4(b,a,a.length)
a[b]=c},
$asbn:function(){return[P.E]},
$ask:function(){return[P.E]},
$isi:1,
$asi:function(){return[P.E]}},
hX:{"^":"dv;",$isc3:1,"%":"Float32Array"},
mL:{"^":"ai;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mM:{"^":"ai;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
$ishp:1,
"%":"Int32Array"},
mN:{"^":"ai;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mO:{"^":"ai;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mP:{"^":"ai;",
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mQ:{"^":"ai;",
gj:function(a){return a.length},
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
mR:{"^":"ai;",
gj:function(a){return a.length},
h:function(a,b){H.a4(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ed:{"^":"cg+k;"},
ee:{"^":"ed+bn;"},
ef:{"^":"cg+k;"},
eg:{"^":"ef+bn;"}}],["","",,P,{"^":"",
iV:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kP()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.R(new P.iX(z),1)).observe(y,{childList:true})
return new P.iW(z,y,x)}else if(self.setImmediate!=null)return P.kQ()
return P.kR()},
nD:[function(a){self.scheduleImmediate(H.R(new P.iY(a),0))},"$1","kP",4,0,6],
nE:[function(a){self.setImmediate(H.R(new P.iZ(a),0))},"$1","kQ",4,0,6],
nF:[function(a){P.kd(0,a)},"$1","kR",4,0,6],
kI:function(a,b){if(H.eE(a,{func:1,args:[P.b3,P.b3]})){b.toString
return a}else{b.toString
return a}},
hc:function(a,b,c){var z
if(a==null)a=new P.br()
z=$.r
if(z!==C.d)z.toString
z=new P.G(0,z,null,[c])
z.bt(a,b)
return z},
hd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.G(0,$.r,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.hf(z,b,!1,y)
try{for(s=0,r=0;s<2;++s){w=a[s]
v=r
w.aX(new P.he(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.G(0,$.r,null,[null])
r.bs(C.x)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.J(p)
t=H.a6(p)
if(z.b===0||!1)return P.hc(u,t,null)
else{z.c=u
z.d=t}}return y},
kB:function(a,b,c){$.r.toString
a.L(b,c)},
kG:function(){var z,y
for(;z=$.aq,z!=null;){$.aT=null
y=z.b
$.aq=y
if(y==null)$.aS=null
z.a.$0()}},
nP:[function(){$.cu=!0
try{P.kG()}finally{$.aT=null
$.cu=!1
if($.aq!=null)$.$get$cp().$1(P.ew())}},"$0","ew",0,0,3],
er:function(a){var z=new P.e3(a,null)
if($.aq==null){$.aS=z
$.aq=z
if(!$.cu)$.$get$cp().$1(P.ew())}else{$.aS.b=z
$.aS=z}},
kM:function(a){var z,y,x
z=$.aq
if(z==null){P.er(a)
$.aT=$.aS
return}y=new P.e3(a,null)
x=$.aT
if(x==null){y.b=z
$.aT=y
$.aq=y}else{y.b=x.b
x.b=y
$.aT=y
if(y.b==null)$.aS=y}},
lj:function(a){var z=$.r
if(C.d===z){P.ar(null,null,C.d,a)
return}z.toString
P.ar(null,null,z,z.bP(a))},
kL:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.J(u)
y=H.a6(u)
$.r.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aC(x)
w=t
v=x.ga2()
c.$2(w,v)}}},
kv:function(a,b,c,d){var z=a.bW(0)
if(!!J.n(z).$isN&&z!==$.$get$c4())z.cL(new P.ky(b,c,d))
else b.L(c,d)},
kw:function(a,b){return new P.kx(a,b)},
kz:function(a,b,c){var z=a.bW(0)
if(!!J.n(z).$isN&&z!==$.$get$c4())z.cL(new P.kA(b,c))
else b.a4(c)},
bI:function(a,b,c,d,e){var z={}
z.a=d
P.kM(new P.kJ(z,e))},
ep:function(a,b,c,d){var z,y
y=$.r
if(y===c)return d.$0()
$.r=c
z=y
try{y=d.$0()
return y}finally{$.r=z}},
eq:function(a,b,c,d,e){var z,y
y=$.r
if(y===c)return d.$1(e)
$.r=c
z=y
try{y=d.$1(e)
return y}finally{$.r=z}},
kK:function(a,b,c,d,e,f){var z,y
y=$.r
if(y===c)return d.$2(e,f)
$.r=c
z=y
try{y=d.$2(e,f)
return y}finally{$.r=z}},
ar:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bP(d):c.e5(d)
P.er(d)},
iX:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iW:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iY:{"^":"f:1;a",
$0:function(){this.a.$0()}},
iZ:{"^":"f:1;a",
$0:function(){this.a.$0()}},
kc:{"^":"d;a,b,c",
dA:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.R(new P.ke(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
kd:function(a,b){var z=new P.kc(!0,null,0)
z.dA(a,b)
return z}}},
ke:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
N:{"^":"d;$ti"},
hf:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.L(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.L(z.c,z.d)}},
he:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.b(x,z)
x[z]=a
if(y===0)this.c.bw(x)}else if(z.b===0&&!this.e)this.c.L(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
lA:{"^":"d;$ti"},
e5:{"^":"d;$ti",
eb:function(a,b){if(a==null)a=new P.br()
if(this.a.a!==0)throw H.a(P.b7("Future already completed"))
$.r.toString
this.L(a,b)},
c_:function(a){return this.eb(a,null)}},
bE:{"^":"e5;a,$ti",
a7:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b7("Future already completed"))
z.bs(b)},
L:function(a,b){this.a.bt(a,b)}},
k7:{"^":"e5;a,$ti",
a7:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.b7("Future already completed"))
z.a4(b)},
L:function(a,b){this.a.L(a,b)}},
e6:{"^":"d;aH:a<,b,c,d,e,$ti",
ge0:function(){return this.b.b},
gcf:function(){return(this.c&1)!==0},
gew:function(){return(this.c&2)!==0},
gce:function(){return this.c===8},
eu:function(a){return this.b.b.aV(this.d,a)},
eD:function(a){if(this.c!==6)return!0
return this.b.b.aV(this.d,J.aC(a))},
es:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eE(z,{func:1,args:[P.d,P.aQ]}))return x.eL(z,y.gO(a),a.ga2())
else return x.aV(z,y.gO(a))},
ev:function(){return this.b.b.cp(this.d)}},
G:{"^":"d;bE:a<,b,dQ:c<,$ti",
gdK:function(){return this.a===2},
gaD:function(){return this.a>=4},
aX:function(a,b){var z,y,x
z=$.r
if(z!==C.d){z.toString
if(b!=null)b=P.kI(b,z)}y=new P.G(0,z,null,[null])
x=b==null?1:3
this.aw(new P.e6(null,y,x,a,b,[H.C(this,0),null]))
return y},
ap:function(a){return this.aX(a,null)},
cL:function(a){var z,y
z=$.r
y=new P.G(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.C(this,0)
this.aw(new P.e6(null,y,8,a,null,[z,z]))
return y},
aw:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaD()){y.aw(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.ar(null,null,z,new P.ji(this,a))}},
bB:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaH()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaD()){v.bB(a)
return}this.a=v.a
this.c=v.c}z.a=this.aI(a)
y=this.b
y.toString
P.ar(null,null,y,new P.jp(z,this))}},
ac:function(){var z=this.c
this.c=null
return this.aI(z)},
aI:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaH()
z.a=y}return y},
a4:function(a){var z,y,x
z=this.$ti
y=H.ba(a,"$isN",z,"$asN")
if(y){z=H.ba(a,"$isG",z,null)
if(z)P.bF(a,this)
else P.e7(a,this)}else{x=this.ac()
this.a=4
this.c=a
P.ap(this,x)}},
bw:function(a){var z=this.ac()
this.a=4
this.c=a
P.ap(this,z)},
L:[function(a,b){var z=this.ac()
this.a=8
this.c=new P.bi(a,b)
P.ap(this,z)},function(a){return this.L(a,null)},"eZ","$2","$1","gax",4,2,13],
bs:function(a){var z=H.ba(a,"$isN",this.$ti,"$asN")
if(z){this.dD(a)
return}this.a=1
z=this.b
z.toString
P.ar(null,null,z,new P.jk(this,a))},
dD:function(a){var z=H.ba(a,"$isG",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.ar(null,null,z,new P.jo(this,a))}else P.bF(a,this)
return}P.e7(a,this)},
bt:function(a,b){var z
this.a=1
z=this.b
z.toString
P.ar(null,null,z,new P.jj(this,a,b))},
$isN:1,
p:{
jh:function(a,b){var z=new P.G(0,$.r,null,[b])
z.a=4
z.c=a
return z},
e7:function(a,b){var z,y,x
b.a=1
try{a.aX(new P.jl(b),new P.jm(b))}catch(x){z=H.J(x)
y=H.a6(x)
P.lj(new P.jn(b,z,y))}},
bF:function(a,b){var z
for(;a.gdK();)a=a.c
if(a.gaD()){z=b.ac()
b.a=a.a
b.c=a.c
P.ap(b,z)}else{z=b.c
b.a=2
b.c=a
a.bB(z)}},
ap:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aC(v)
t=v.ga2()
y.toString
P.bI(null,null,y,u,t)}return}for(;b.gaH()!=null;b=s){s=b.a
b.a=null
P.ap(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gcf()||b.gce()){q=b.ge0()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.aC(v)
t=v.ga2()
y.toString
P.bI(null,null,y,u,t)
return}p=$.r
if(p==null?q!=null:p!==q)$.r=q
else p=null
if(b.gce())new P.js(z,x,b,w).$0()
else if(y){if(b.gcf())new P.jr(x,b,r).$0()}else if(b.gew())new P.jq(z,x,b).$0()
if(p!=null)$.r=p
y=x.b
if(!!J.n(y).$isN){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aI(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bF(y,o)
return}}o=b.b
b=o.ac()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
ji:{"^":"f:1;a,b",
$0:function(){P.ap(this.a,this.b)}},
jp:{"^":"f:1;a,b",
$0:function(){P.ap(this.b,this.a.a)}},
jl:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.a4(a)}},
jm:{"^":"f:14;a",
$2:function(a,b){this.a.L(a,b)},
$1:function(a){return this.$2(a,null)}},
jn:{"^":"f:1;a,b,c",
$0:function(){this.a.L(this.b,this.c)}},
jk:{"^":"f:1;a,b",
$0:function(){this.a.bw(this.b)}},
jo:{"^":"f:1;a,b",
$0:function(){P.bF(this.b,this.a)}},
jj:{"^":"f:1;a,b,c",
$0:function(){this.a.L(this.b,this.c)}},
js:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.ev()}catch(w){y=H.J(w)
x=H.a6(w)
if(this.d){v=J.aC(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bi(y,x)
u.a=!0
return}if(!!J.n(z).$isN){if(z instanceof P.G&&z.gbE()>=4){if(z.gbE()===8){v=this.b
v.b=z.gdQ()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.ap(new P.jt(t))
v.a=!1}}},
jt:{"^":"f:0;a",
$1:function(a){return this.a}},
jr:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.eu(this.c)}catch(x){z=H.J(x)
y=H.a6(x)
w=this.a
w.b=new P.bi(z,y)
w.a=!0}}},
jq:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.eD(z)===!0&&w.e!=null){v=this.b
v.b=w.es(z)
v.a=!1}}catch(u){y=H.J(u)
x=H.a6(u)
w=this.a
v=J.aC(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bi(y,x)
s.a=!0}}},
e3:{"^":"d;a,b"},
bx:{"^":"d;$ti",
u:function(a,b){var z,y
z={}
y=new P.G(0,$.r,null,[null])
z.a=null
z.a=this.aO(new P.iB(z,this,b,y),!0,new P.iC(y),y.gax())
return y},
gj:function(a){var z,y
z={}
y=new P.G(0,$.r,null,[P.E])
z.a=0
this.aO(new P.iD(z),!0,new P.iE(z,y),y.gax())
return y},
gen:function(a){var z,y
z={}
y=new P.G(0,$.r,null,[H.bc(this,"bx",0)])
z.a=null
z.a=this.aO(new P.ix(z,this,y),!0,new P.iy(y),y.gax())
return y}},
iB:{"^":"f;a,b,c,d",
$1:function(a){P.kL(new P.iz(this.c,a),new P.iA(),P.kw(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.bc(this.b,"bx",0)]}}},
iz:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
iA:{"^":"f:0;",
$1:function(a){}},
iC:{"^":"f:1;a",
$0:function(){this.a.a4(null)}},
iD:{"^":"f:0;a",
$1:function(a){++this.a.a}},
iE:{"^":"f:1;a,b",
$0:function(){this.b.a4(this.a.a)}},
ix:{"^":"f;a,b,c",
$1:function(a){P.kz(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.bc(this.b,"bx",0)]}}},
iy:{"^":"f:1;a",
$0:function(){var z,y,x,w
try{x=H.c9()
throw H.a(x)}catch(w){z=H.J(w)
y=H.a6(w)
P.kB(this.a,z,y)}}},
iw:{"^":"d;$ti"},
dH:{"^":"d;$ti"},
ky:{"^":"f:1;a,b,c",
$0:function(){return this.a.L(this.b,this.c)}},
kx:{"^":"f:15;a,b",
$2:function(a,b){P.kv(this.a,this.b,a,b)}},
kA:{"^":"f:1;a,b",
$0:function(){return this.a.a4(this.b)}},
bi:{"^":"d;O:a>,a2:b<",
k:function(a){return H.c(this.a)},
$isI:1},
kk:{"^":"d;"},
kJ:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.br()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.aD(y)
throw x}},
jR:{"^":"kk;",
eM:function(a){var z,y,x
try{if(C.d===$.r){a.$0()
return}P.ep(null,null,this,a)}catch(x){z=H.J(x)
y=H.a6(x)
P.bI(null,null,this,z,y)}},
eN:function(a,b){var z,y,x
try{if(C.d===$.r){a.$1(b)
return}P.eq(null,null,this,a,b)}catch(x){z=H.J(x)
y=H.a6(x)
P.bI(null,null,this,z,y)}},
e5:function(a){return new P.jT(this,a)},
bP:function(a){return new P.jS(this,a)},
e6:function(a){return new P.jU(this,a)},
h:function(a,b){return},
cp:function(a){if($.r===C.d)return a.$0()
return P.ep(null,null,this,a)},
aV:function(a,b){if($.r===C.d)return a.$1(b)
return P.eq(null,null,this,a,b)},
eL:function(a,b,c){if($.r===C.d)return a.$2(b,c)
return P.kK(null,null,this,a,b,c)}},
jT:{"^":"f:1;a,b",
$0:function(){return this.a.cp(this.b)}},
jS:{"^":"f:1;a,b",
$0:function(){return this.a.eM(this.b)}},
jU:{"^":"f:0;a,b",
$1:function(a){return this.a.eN(this.b,a)}}}],["","",,P,{"^":"",
hF:function(a,b){return new H.cc(0,null,null,null,null,null,0,[a,b])},
O:function(){return new H.cc(0,null,null,null,null,null,0,[null,null])},
dp:function(a){return H.kY(a,new H.cc(0,null,null,null,null,null,0,[null,null]))},
X:function(a,b,c,d){return new P.jE(0,null,null,null,null,null,0,[d])},
hq:function(a,b,c){var z,y
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aU()
y.push(a)
try{P.kF(a,z)}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=P.dI(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
c8:function(a,b,c){var z,y,x
if(P.cv(a))return b+"..."+c
z=new P.ck(b)
y=$.$get$aU()
y.push(a)
try{x=z
x.a=P.dI(x.ga5(),a,", ")}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=z
y.a=y.ga5()+c
y=z.ga5()
return y.charCodeAt(0)==0?y:y},
cv:function(a){var z,y
for(z=0;y=$.$get$aU(),z<y.length;++z)if(a===y[z])return!0
return!1},
kF:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.c(z.gw(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.b(b,-1)
v=b.pop()
if(0>=b.length)return H.b(b,-1)
u=b.pop()}else{t=z.gw(z);++x
if(!z.t()){if(x<=4){b.push(H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.b(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw(z);++x
for(;z.t();t=s,s=r){r=z.gw(z);++x
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
ce:function(a,b){var z,y
z=P.X(null,null,null,b)
for(y=J.ak(a);y.t();)z.B(0,y.gw(y))
return z},
ds:function(a){var z,y,x
z={}
if(P.cv(a))return"{...}"
y=new P.ck("")
try{$.$get$aU().push(a)
x=y
x.a=x.ga5()+"{"
z.a=!0
J.cI(a,new P.hK(z,y))
z=y
z.a=z.ga5()+"}"}finally{z=$.$get$aU()
if(0>=z.length)return H.b(z,-1)
z.pop()}z=y.ga5()
return z.charCodeAt(0)==0?z:z},
jE:{"^":"jv;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.cs(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
v:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dE(b)},
dE:function(a){var z=this.d
if(z==null)return!1
return this.aB(z[this.ay(a)],a)>=0},
u:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.K(this))
z=z.b}},
B:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ct()
this.b=z}return this.br(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ct()
this.c=y}return this.br(y,b)}else return this.dB(0,b)},
dB:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ct()
this.d=z}y=this.ay(b)
x=z[y]
if(x==null)z[y]=[this.aG(b)]
else{if(this.aB(x,b)>=0)return!1
x.push(this.aG(b))}return!0},
co:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.dN(0,b)},
dN:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.ay(b)]
x=this.aB(y,b)
if(x<0)return!1
this.bG(y.splice(x,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aE()}},
br:function(a,b){if(a[b]!=null)return!1
a[b]=this.aG(b)
return!0},
bC:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bG(z)
delete a[b]
return!0},
aE:function(){this.r=this.r+1&67108863},
aG:function(a){var z,y
z=new P.jF(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aE()
return z},
bG:function(a){var z,y
z=a.gdL()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aE()},
ay:function(a){return J.a7(a)&0x3ffffff},
aB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].gdG(),b))return y
return-1},
p:{
ct:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jF:{"^":"d;dG:a<,b,dL:c<"},
cs:{"^":"d;a,b,c,d,$ti",
gw:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.K(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
jv:{"^":"il;$ti"},
mz:{"^":"d;$ti"},
dq:{"^":"ec;$ti",$isi:1},
k:{"^":"d;$ti",
gI:function(a){return new H.dr(a,this.gj(a),0,null,[H.bd(this,a,"k",0)])},
q:function(a,b){return this.h(a,b)},
u:function(a,b){var z,y
z=this.gj(a)
if(typeof z!=="number")return H.t(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.a(P.K(a))}},
eq:function(a,b,c){var z,y,x
z=this.gj(a)
if(typeof z!=="number")return H.t(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.K(a))}return y},
ba:function(a,b){return H.dJ(a,b,null,H.bd(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.u([],[H.bd(this,a,"k",0)])
y=this.gj(a)
x=J.H(b)
if(typeof y!=="number")return y.l()
if(typeof x!=="number")return H.t(x)
C.b.sj(z,y+x)
C.b.ai(z,0,this.gj(a),a)
C.b.ai(z,this.gj(a),z.length,b)
return z},
cc:function(a,b,c,d){var z
P.dB(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.i(a,z,d)},
k:function(a){return P.c8(a,"[","]")}},
b2:{"^":"P;$ti"},
hK:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
P:{"^":"d;$ti",
u:function(a,b){var z,y
for(z=J.ak(this.gC(a));z.t();){y=z.gw(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.H(this.gC(a))},
k:function(a){return P.ds(a)}},
im:{"^":"d;$ti",
N:function(a,b){var z
for(z=J.ak(b);z.t();)this.B(0,z.gw(z))},
k:function(a){return P.c8(this,"{","}")},
u:function(a,b){var z
for(z=new P.cs(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
il:{"^":"im;$ti"},
ec:{"^":"d+k;$ti"}}],["","",,P,{"^":"",
kH:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.a(H.a_(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.J(x)
w=String(y)
throw H.a(new P.ha(w,null,null))}w=P.bG(z)
return w},
bG:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jA(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.bG(a[z])
return a},
jA:{"^":"b2;a,b,c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.dM(b):y}},
gj:function(a){return this.b==null?this.c.a:this.aa().length},
gC:function(a){var z
if(this.b==null){z=this.c
return new H.dn(z,[H.C(z,0)])}return new P.jB(this)},
i:function(a,b,c){var z,y
if(this.b==null)this.c.i(0,b,c)
else if(this.a_(0,b)){z=this.b
z[b]=c
y=this.a
if(y==null?z!=null:y!==z)y[b]=null}else this.dZ().i(0,b,c)},
a_:function(a,b){if(this.b==null)return this.c.a_(0,b)
return Object.prototype.hasOwnProperty.call(this.a,b)},
u:function(a,b){var z,y,x,w
if(this.b==null)return this.c.u(0,b)
z=this.aa()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.bG(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.a(P.K(this))}},
aa:function(){var z=this.c
if(z==null){z=H.u(Object.keys(this.a),[P.j])
this.c=z}return z},
dZ:function(){var z,y,x,w,v
if(this.b==null)return this.c
z=P.hF(P.j,null)
y=this.aa()
for(x=0;w=y.length,x<w;++x){v=y[x]
z.i(0,v,this.h(0,v))}if(w===0)y.push(null)
else C.b.sj(y,0)
this.b=null
this.a=null
this.c=z
return z},
dM:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.bG(this.a[a])
return this.b[a]=z},
$asb2:function(){return[P.j,null]},
$asP:function(){return[P.j,null]}},
jB:{"^":"aN;a",
gj:function(a){var z=this.a
return z.gj(z)},
q:function(a,b){var z=this.a
if(z.b==null)z=z.gC(z).q(0,b)
else{z=z.aa()
if(b>>>0!==b||b>=z.length)return H.b(z,b)
z=z[b]}return z},
gI:function(a){var z=this.a
if(z.b==null){z=z.gC(z)
z=z.gI(z)}else{z=z.aa()
z=new J.cX(z,z.length,0,null,[H.C(z,0)])}return z},
$asbl:function(){return[P.j]},
$asaN:function(){return[P.j]},
$asb1:function(){return[P.j]}},
d2:{"^":"d;$ti"},
d6:{"^":"dH;$ti"},
hx:{"^":"d2;a,b",
eh:function(a,b,c){var z=P.kH(b,this.gei().a)
return z},
eg:function(a,b){return this.eh(a,b,null)},
gei:function(){return C.P},
$asd2:function(){return[P.d,P.j]}},
hy:{"^":"d6;a",
$asdH:function(){return[P.j,P.d]},
$asd6:function(){return[P.j,P.d]}}}],["","",,P,{"^":"",
h4:function(a){var z=J.n(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aP(a)+"'"},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aD(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h4(a)},
di:function(a){return new P.jc(a)},
W:function(a){H.bf(H.c(a))},
cw:{"^":"d;"},
"+bool":0,
c_:{"^":"d;e_:a<,b",
geE:function(){return this.a},
d5:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.a(P.bU("DateTime is outside valid range: "+this.geE()))},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.c_))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.c.S(this.a,b.ge_())},
gA:function(a){var z=this.a
return(z^C.c.bD(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fT(H.ib(this))
y=P.b_(H.i9(this))
x=P.b_(H.i5(this))
w=P.b_(H.i6(this))
v=P.b_(H.i8(this))
u=P.b_(H.ia(this))
t=P.fU(H.i7(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fT:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b_:function(a){if(a>=10)return""+a
return"0"+a}}},
at:{"^":"aV;"},
"+double":0,
b0:{"^":"d;ab:a<",
l:function(a,b){return new P.b0(C.c.l(this.a,b.gab()))},
G:function(a,b){return new P.b0(this.a-b.gab())},
a0:function(a,b){return C.c.a0(this.a,b.gab())},
ah:function(a,b){return C.c.ah(this.a,b.gab())},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.b0))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.c.S(this.a,b.gab())},
k:function(a){var z,y,x,w,v
z=new P.h1()
y=this.a
if(y<0)return"-"+new P.b0(0-y).k(0)
x=z.$1(C.c.M(y,6e7)%60)
w=z.$1(C.c.M(y,1e6)%60)
v=new P.h0().$1(y%1e6)
return""+C.c.M(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
p:{
h_:function(a,b,c,d,e,f){return new P.b0(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h0:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h1:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
I:{"^":"d;",
ga2:function(){return H.a6(this.$thrownJsError)}},
br:{"^":"I;",
k:function(a){return"Throw of null."}},
a8:{"^":"I;a,b,c,d",
gaA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaz:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.c(z)
w=this.gaA()+y+x
if(!this.a)return w
v=this.gaz()
u=P.c1(this.b)
return w+v+": "+H.c(u)},
p:{
bU:function(a){return new P.a8(!1,null,null,a)},
cW:function(a,b,c){return new P.a8(!0,a,b,c)},
fE:function(a){return new P.a8(!1,null,a,"Must not be null")}}},
dA:{"^":"a8;e,f,a,b,c,d",
gaA:function(){return"RangeError"},
gaz:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
bs:function(a,b,c){return new P.dA(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.dA(b,c,!0,a,d,"Invalid value")},
dB:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
z=a>c}else z=!0
if(z)throw H.a(P.ao(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
z=b>c}else z=!0
if(z)throw H.a(P.ao(b,a,c,"end",f))
return b}return c}}},
ho:{"^":"a8;e,j:f>,a,b,c,d",
gaA:function(){return"RangeError"},
gaz:function(){if(J.aX(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
p:{
y:function(a,b,c,d,e){var z=e!=null?e:J.H(b)
return new P.ho(b,z,!0,a,c,"Index out of range")}}},
iM:{"^":"I;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.iM(a)}}},
iK:{"^":"I;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.c(z):"UnimplementedError"},
p:{
cm:function(a){return new P.iK(a)}}},
bw:{"^":"I;a",
k:function(a){return"Bad state: "+this.a},
p:{
b7:function(a){return new P.bw(a)}}},
fO:{"^":"I;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.c1(z))+"."},
p:{
K:function(a){return new P.fO(a)}}},
dF:{"^":"d;",
k:function(a){return"Stack Overflow"},
ga2:function(){return},
$isI:1},
fS:{"^":"I;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.c(z)+"' during its initialization"}},
lW:{"^":"d;"},
jc:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
ha:{"^":"d;a,b,c",
k:function(a){var z,y
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
return y}},
E:{"^":"aV;"},
"+int":0,
b1:{"^":"d;$ti",
aZ:["cY",function(a,b){return new H.e2(this,b,[H.bc(this,"b1",0)])}],
u:function(a,b){var z
for(z=this.gI(this);z.t();)b.$1(z.gw(z))},
gj:function(a){var z,y
z=this.gI(this)
for(y=0;z.t();)++y
return y},
ga1:function(a){var z,y
z=this.gI(this)
if(!z.t())throw H.a(H.c9())
y=z.gw(z)
if(z.t())throw H.a(H.hs())
return y},
q:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.fE("index"))
if(b<0)H.a0(P.ao(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.t();){x=z.gw(z)
if(b===y)return x;++y}throw H.a(P.y(b,this,"index",null,y))},
k:function(a){return P.hq(this,"(",")")}},
ht:{"^":"d;$ti"},
i:{"^":"d;$ti"},
"+List":0,
cf:{"^":"d;$ti"},
b3:{"^":"d;",
gA:function(a){return P.d.prototype.gA.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aV:{"^":"d;"},
"+num":0,
d:{"^":";",
F:function(a,b){return this===b},
gA:function(a){return H.aO(this)},
k:function(a){return"Instance of '"+H.aP(this)+"'"},
toString:function(){return this.k(this)}},
aQ:{"^":"d;"},
j:{"^":"d;"},
"+String":0,
ck:{"^":"d;a5:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dI:function(a,b,c){var z=J.ak(b)
if(!z.t())return a
if(c.length===0){do a+=H.c(z.gw(z))
while(z.t())}else{a+=H.c(z.gw(z))
for(;z.t();)a=a+c+H.c(z.gw(z))}return a}}}}],["","",,W,{"^":"",
eN:function(a){var z,y
z=new P.G(0,$.r,null,[null])
y=new P.bE(z,[null])
a.then(H.R(new W.lg(y),1),H.R(new W.lh(y),1))
return z},
h2:function(a,b,c){var z,y
z=document.body
y=(z&&C.u).T(z,a,b,c)
y.toString
z=new H.e2(new W.U(y),new W.h3(),[W.v])
return z.ga1(z)},
dh:function(a){return"wheel"},
aF:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fg(a)
if(typeof y==="string")z=a.tagName}catch(x){H.J(x)}return z},
j9:function(a,b){return document.createElement(a)},
aj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eo:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j3(a)
if(!!J.n(z).$isB)return z
return}else return a},
kC:function(a){var z
if(!!J.n(a).$isde)return a
z=new P.iS([],[],!1)
z.c=!0
return z.aY(a)},
es:function(a){var z=$.r
if(z===C.d)return a
return z.e6(a)},
lg:{"^":"f:0;a",
$1:function(a){return this.a.a7(0,a)}},
lh:{"^":"f:0;a",
$1:function(a){return this.a.c_(a)}},
w:{"^":"am;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ln:{"^":"cj;m:x=,n:y=,E:z=","%":"Accelerometer|LinearAccelerationSensor"},
lo:{"^":"h;j:length=","%":"AccessibleNodeList"},
lp:{"^":"w;al:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lq:{"^":"w;al:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
lv:{"^":"w;al:href}","%":"HTMLBaseElement"},
bV:{"^":"w;",$isbV:1,"%":"HTMLBodyElement"},
lw:{"^":"w;K:name=","%":"HTMLButtonElement"},
lx:{"^":"h;",
eA:[function(a){return W.eN(a.keys())},"$0","gC",1,0,16],
"%":"CacheStorage"},
bY:{"^":"w;H:height},J:width}",
cN:function(a,b,c){var z=a.getContext(b,P.kS(c,null))
return z},
$isbY:1,
"%":"HTMLCanvasElement"},
ly:{"^":"h;",
aq:function(a){return P.V(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
lz:{"^":"v;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lB:{"^":"a2;W:style=","%":"CSSFontFaceRule"},
lC:{"^":"a2;W:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
lD:{"^":"a2;W:style=","%":"CSSPageRule"},
lE:{"^":"bk;j:length=","%":"CSSPerspective"},
lF:{"^":"bZ;m:x=,n:y=","%":"CSSPositionValue"},
lG:{"^":"bk;m:x=,n:y=,E:z=","%":"CSSRotation"},
a2:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
lH:{"^":"bk;m:x=,n:y=,E:z=","%":"CSSScale"},
fQ:{"^":"j1;j:length=",
bu:function(a,b){var z,y
z=$.$get$d7()
y=z[b]
if(typeof y==="string")return y
y=this.dW(a,b)
z[b]=y
return y},
dW:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fV()+b
if(z in a)return z
return b},
dT:function(a,b,c,d){a.setProperty(b,c,d)},
sH:function(a,b){a.height=b},
sJ:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fR:{"^":"d;",
seo:function(a,b){this.dT(a,this.bu(a,"float"),b,"")}},
lI:{"^":"a2;W:style=","%":"CSSStyleRule"},
bZ:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bk:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lJ:{"^":"bZ;j:length=","%":"CSSTransformValue"},
lK:{"^":"bk;m:x=,n:y=,E:z=","%":"CSSTranslation"},
lL:{"^":"bZ;j:length=","%":"CSSUnparsedValue"},
lM:{"^":"a2;W:style=","%":"CSSViewportRule"},
lN:{"^":"h;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
lO:{"^":"h;m:x=,n:y=,E:z=","%":"DeviceAcceleration"},
fX:{"^":"w;","%":"HTMLDivElement"},
de:{"^":"v;",
gaQ:function(a){return new W.b9(a,"mousedown",!1,[W.Q])},
gaR:function(a){return new W.b9(a,"mousemove",!1,[W.Q])},
gaS:function(a){return new W.b9(a,"mouseup",!1,[W.Q])},
gaT:function(a){return new W.b9(a,W.dh(a),!1,[W.aR])},
$isde:1,
"%":"Document|HTMLDocument|XMLDocument"},
lP:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
lQ:{"^":"fY;",
gag:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z},
"%":"DOMPoint"},
fY:{"^":"h;",
gag:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gE:function(a){return a.z},
"%":";DOMPointReadOnly"},
lR:{"^":"j5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.ac]},
$isq:1,
$asq:function(){return[P.ac]},
$ask:function(){return[P.ac]},
$isi:1,
$asi:function(){return[P.ac]},
$asl:function(){return[P.ac]},
"%":"ClientRectList|DOMRectList"},
fZ:{"^":"h;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gJ(a))+" x "+H.c(this.gH(a))},
F:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isac)return!1
return a.left===z.gcg(b)&&a.top===z.gct(b)&&this.gJ(a)===z.gJ(b)&&this.gH(a)===z.gH(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gJ(a)
w=this.gH(a)
return W.eb(W.aj(W.aj(W.aj(W.aj(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcu:function(a){return new P.ab(a.left,a.top,[null])},
gH:function(a){return a.height},
gcg:function(a){return a.left},
gct:function(a){return a.top},
gJ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isac:1,
$asac:I.au,
"%":";DOMRectReadOnly"},
lS:{"^":"j7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.j]},
$isq:1,
$asq:function(){return[P.j]},
$ask:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$asl:function(){return[P.j]},
"%":"DOMStringList"},
lT:{"^":"h;j:length=","%":"DOMTokenList"},
am:{"^":"v;W:style=,bA:namespaceURI=,eO:tagName=",
ge3:function(a){return new W.j8(a)},
k:function(a){return a.localName},
T:["as",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dg
if(z==null){z=H.u([],[W.dw])
y=new W.dx(z)
z.push(W.e8(null))
z.push(W.ek())
$.dg=y
d=y}else d=z
z=$.df
if(z==null){z=new W.en(d)
$.df=z
c=z}else{z.a=d
c=z}}if($.a9==null){z=document
y=z.implementation.createHTMLDocument("")
$.a9=y
$.c0=y.createRange()
y=$.a9
y.toString
x=y.createElement("base")
J.fr(x,z.baseURI)
$.a9.head.appendChild(x)}z=$.a9
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a9
if(!!this.$isbV)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a9.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.b.v(C.R,a.tagName)){$.c0.selectNodeContents(w)
v=$.c0.createContextualFragment(b)}else{w.innerHTML=b
v=$.a9.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a9.body
if(w==null?z!=null:w!==z)J.cO(w)
c.b7(v)
document.adoptNode(v)
return v},function(a,b,c){return this.T(a,b,c,null)},"ee",null,null,"gf_",5,5,null],
cQ:function(a,b,c,d){a.textContent=null
a.appendChild(this.T(a,b,c,d))},
cP:function(a,b){return this.cQ(a,b,null,null)},
b_:function(a){return a.getBoundingClientRect()},
gaQ:function(a){return new W.ae(a,"mousedown",!1,[W.Q])},
gaR:function(a){return new W.ae(a,"mousemove",!1,[W.Q])},
gaS:function(a){return new W.ae(a,"mouseup",!1,[W.Q])},
gaT:function(a){return new W.ae(a,W.dh(a),!1,[W.aR])},
$isam:1,
"%":";Element"},
h3:{"^":"f:0;",
$1:function(a){return!!J.n(a).$isam}},
lU:{"^":"w;H:height},K:name=,J:width}","%":"HTMLEmbedElement"},
lV:{"^":"aa;O:error=","%":"ErrorEvent"},
aa:{"^":"h;",
ao:function(a){return a.preventDefault()},
$isaa:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
B:{"^":"h;",
bL:["cW",function(a,b,c,d){if(c!=null)this.dC(a,b,c,!1)}],
dC:function(a,b,c,d){return a.addEventListener(b,H.R(c,1),!1)},
dO:function(a,b,c,d){return a.removeEventListener(b,H.R(c,1),!1)},
$isB:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eh|ei|el|em"},
me:{"^":"w;K:name=","%":"HTMLFieldSetElement"},
mf:{"^":"je;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bm]},
$isq:1,
$asq:function(){return[W.bm]},
$ask:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$asl:function(){return[W.bm]},
"%":"FileList"},
mg:{"^":"B;O:error=","%":"FileReader"},
mh:{"^":"B;O:error=,j:length=","%":"FileWriter"},
mj:{"^":"h;W:style=","%":"FontFace"},
mk:{"^":"B;",
f0:function(a,b,c){return a.forEach(H.R(b,3),c)},
u:function(a,b){b=H.R(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
mm:{"^":"w;j:length=,K:name=","%":"HTMLFormElement"},
mo:{"^":"cj;m:x=,n:y=,E:z=","%":"Gyroscope"},
mp:{"^":"h;j:length=","%":"History"},
mq:{"^":"jx;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.v]},
$isq:1,
$asq:function(){return[W.v]},
$ask:function(){return[W.v]},
$isi:1,
$asi:function(){return[W.v]},
$asl:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hi:{"^":"hj;",
f1:function(a,b,c,d,e,f){return a.open(b,c)},
eG:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
hj:{"^":"B;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mr:{"^":"w;H:height},K:name=,J:width}","%":"HTMLIFrameElement"},
c5:{"^":"h;",$isc5:1,"%":"ImageBitmap"},
c6:{"^":"h;",$isc6:1,"%":"ImageData"},
c7:{"^":"w;H:height},J:width}",$isc7:1,"%":"HTMLImageElement"},
mt:{"^":"w;H:height},K:name=,J:width}","%":"HTMLInputElement"},
bp:{"^":"e0;",
geW:function(a){return a.which},
$isbp:1,
"%":"KeyboardEvent"},
my:{"^":"w;al:href}","%":"HTMLLinkElement"},
mA:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
mB:{"^":"cj;m:x=,n:y=,E:z=","%":"Magnetometer"},
mC:{"^":"w;K:name=","%":"HTMLMapElement"},
hN:{"^":"w;O:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mE:{"^":"h;j:length=","%":"MediaList"},
mF:{"^":"B;aL:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
mG:{"^":"B;",
bL:function(a,b,c,d){if(J.M(b,"message"))a.start()
this.cW(a,b,c,!1)},
"%":"MessagePort"},
mH:{"^":"w;K:name=","%":"HTMLMetaElement"},
mI:{"^":"jG;",
h:function(a,b){return P.V(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gC:function(a){var z=H.u([],[P.j])
this.u(a,new W.hP(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.p("Not supported"))},
$asP:function(){return[P.j,null]},
"%":"MIDIInputMap"},
hP:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mJ:{"^":"jH;",
h:function(a,b){return P.V(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gC:function(a){var z=H.u([],[P.j])
this.u(a,new W.hQ(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.p("Not supported"))},
$asP:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
hQ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mK:{"^":"jJ;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bq]},
$isq:1,
$asq:function(){return[W.bq]},
$ask:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$asl:function(){return[W.bq]},
"%":"MimeTypeArray"},
Q:{"^":"e0;bV:button=",
geF:function(a){return new P.ab(a.movementX,a.movementY,[null])},
gcm:function(a){var z,y,x
if(!!a.offsetX)return new P.ab(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.eo(z)).$isam)throw H.a(P.p("offsetX is only supported on elements"))
y=W.eo(z)
z=[null]
x=new P.ab(a.clientX,a.clientY,z).G(0,J.fh(J.fj(y)))
return new P.ab(J.cQ(x.a),J.cQ(x.b),z)}},
$isQ:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
U:{"^":"dq;a",
ga1:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.b7("No elements"))
if(y>1)throw H.a(P.b7("More than one element"))
return z.firstChild},
N:function(a,b){var z,y,x,w
z=J.n(b)
if(!!z.$isU){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gI(b),y=this.a;z.t();)y.appendChild(z.gw(z))},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.b(y,b)
z.replaceChild(c,y[b])},
gI:function(a){var z=this.a.childNodes
return new W.dj(z,z.length,-1,null,[H.bd(C.S,z,"l",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.b(z,b)
return z[b]},
$asdq:function(){return[W.v]},
$ask:function(){return[W.v]},
$asi:function(){return[W.v]},
$asec:function(){return[W.v]}},
v:{"^":"B;an:parentNode=,aU:previousSibling=",
gcl:function(a){return new W.U(a)},
eI:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cX(a):z},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mS:{"^":"h;",
eH:[function(a){return a.previousNode()},"$0","gaU",1,0,4],
"%":"NodeIterator"},
hZ:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.v]},
$isq:1,
$asq:function(){return[W.v]},
$ask:function(){return[W.v]},
$isi:1,
$asi:function(){return[W.v]},
$asl:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
mV:{"^":"w;H:height},K:name=,J:width}","%":"HTMLObjectElement"},
mX:{"^":"w;K:name=","%":"HTMLOutputElement"},
mY:{"^":"w;K:name=","%":"HTMLParamElement"},
n_:{"^":"h;",
eA:[function(a){return W.eN(a.keys())},"$0","gC",1,0,17],
"%":"PaymentInstruments"},
b4:{"^":"h;j:length=","%":"Plugin"},
n0:{"^":"jP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b4]},
$isq:1,
$asq:function(){return[W.b4]},
$ask:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$asl:function(){return[W.b4]},
"%":"PluginArray"},
n4:{"^":"h;",
b_:function(a){return a.getBoundingClientRect()},
"%":"Range"},
na:{"^":"jV;",
h:function(a,b){return P.V(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gC:function(a){var z=H.u([],[P.j])
this.u(a,new W.ii(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.p("Not supported"))},
$asP:function(){return[P.j,null]},
"%":"RTCStatsReport"},
ii:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
nb:{"^":"w;j:length=,K:name=","%":"HTMLSelectElement"},
cj:{"^":"B;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
nc:{"^":"aa;O:error=","%":"SensorErrorEvent"},
nd:{"^":"w;K:name=","%":"HTMLSlotElement"},
ne:{"^":"ei;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bu]},
$isq:1,
$asq:function(){return[W.bu]},
$ask:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$asl:function(){return[W.bu]},
"%":"SourceBufferList"},
nf:{"^":"k0;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bv]},
$isq:1,
$asq:function(){return[W.bv]},
$ask:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$asl:function(){return[W.bv]},
"%":"SpeechGrammarList"},
ng:{"^":"aa;O:error=","%":"SpeechRecognitionError"},
b6:{"^":"h;j:length=","%":"SpeechRecognitionResult"},
ni:{"^":"k3;",
h:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
u:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gC:function(a){var z=H.u([],[P.j])
this.u(a,new W.iv(z))
return z},
gj:function(a){return a.length},
$asP:function(){return[P.j,P.j]},
"%":"Storage"},
iv:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
iG:{"^":"w;",
T:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.as(a,b,c,d)
z=W.h2("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.U(y).N(0,J.fe(z))
return y},
"%":"HTMLTableElement"},
nl:{"^":"w;",
T:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.as(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.T(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.ga1(z)
x.toString
z=new W.U(x)
w=z.ga1(z)
y.toString
w.toString
new W.U(y).N(0,new W.U(w))
return y},
"%":"HTMLTableRowElement"},
nm:{"^":"w;",
T:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.as(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.D.T(z.createElement("table"),b,c,d)
z.toString
z=new W.U(z)
x=z.ga1(z)
y.toString
x.toString
new W.U(y).N(0,new W.U(x))
return y},
"%":"HTMLTableSectionElement"},
dL:{"^":"w;",$isdL:1,"%":"HTMLTemplateElement"},
nn:{"^":"w;K:name=","%":"HTMLTextAreaElement"},
np:{"^":"kb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bA]},
$isq:1,
$asq:function(){return[W.bA]},
$ask:function(){return[W.bA]},
$isi:1,
$asi:function(){return[W.bA]},
$asl:function(){return[W.bA]},
"%":"TextTrackCueList"},
nq:{"^":"em;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bz]},
$isq:1,
$asq:function(){return[W.bz]},
$ask:function(){return[W.bz]},
$isi:1,
$asi:function(){return[W.bz]},
$asl:function(){return[W.bz]},
"%":"TextTrackList"},
nr:{"^":"h;j:length=","%":"TimeRanges"},
ns:{"^":"kg;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bB]},
$isq:1,
$asq:function(){return[W.bB]},
$ask:function(){return[W.bB]},
$isi:1,
$asi:function(){return[W.bB]},
$asl:function(){return[W.bB]},
"%":"TouchList"},
nt:{"^":"h;j:length=","%":"TrackDefaultList"},
nw:{"^":"h;",
f2:[function(a){return a.parentNode()},"$0","gan",1,0,4],
eH:[function(a){return a.previousNode()},"$0","gaU",1,0,4],
"%":"TreeWalker"},
e0:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
ny:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
nA:{"^":"h;m:x=,E:z=","%":"VRStageBoundsPoint"},
co:{"^":"hN;H:height},J:width}",$isco:1,"%":"HTMLVideoElement"},
nB:{"^":"B;j:length=","%":"VideoTrackList"},
aR:{"^":"Q;",
gej:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaR:1,
"%":"WheelEvent"},
iP:{"^":"B;",
ge2:function(a){var z,y
z=P.aV
y=new P.G(0,$.r,null,[z])
this.dI(a)
this.dP(a,W.es(new W.iQ(new P.k7(y,[z]))))
return y},
dP:function(a,b){return a.requestAnimationFrame(H.R(b,1))},
dI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
iQ:{"^":"f:0;a",
$1:function(a){this.a.a7(0,a)}},
nC:{"^":"B;"},
nG:{"^":"v;K:name=,bA:namespaceURI=","%":"Attr"},
nH:{"^":"km;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a2]},
$isq:1,
$asq:function(){return[W.a2]},
$ask:function(){return[W.a2]},
$isi:1,
$asi:function(){return[W.a2]},
$asl:function(){return[W.a2]},
"%":"CSSRuleList"},
nI:{"^":"fZ;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
F:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isac)return!1
return a.left===z.gcg(b)&&a.top===z.gct(b)&&a.width===z.gJ(b)&&a.height===z.gH(b)},
gA:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.eb(W.aj(W.aj(W.aj(W.aj(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcu:function(a){return new P.ab(a.left,a.top,[null])},
gH:function(a){return a.height},
gJ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nJ:{"^":"ko;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bo]},
$isq:1,
$asq:function(){return[W.bo]},
$ask:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$asl:function(){return[W.bo]},
"%":"GamepadList"},
nM:{"^":"kq;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.v]},
$isq:1,
$asq:function(){return[W.v]},
$ask:function(){return[W.v]},
$isi:1,
$asi:function(){return[W.v]},
$asl:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nN:{"^":"ks;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b6]},
$isq:1,
$asq:function(){return[W.b6]},
$ask:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$asl:function(){return[W.b6]},
"%":"SpeechRecognitionResultList"},
nO:{"^":"ku;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b>>>0!==b||b>=a.length)return H.b(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.by]},
$isq:1,
$asq:function(){return[W.by]},
$ask:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$asl:function(){return[W.by]},
"%":"StyleSheetList"},
j_:{"^":"b2;dJ:a<",
u:function(a,b){var z,y,x,w,v
for(z=this.gC(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gC:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.u([],[P.j])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
v=z[w]
u=J.e(v)
if(u.gbA(v)==null)y.push(u.gK(v))}return y},
$asb2:function(){return[P.j,P.j]},
$asP:function(){return[P.j,P.j]}},
j8:{"^":"j_;a",
h:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gj:function(a){return this.gC(this).length}},
b9:{"^":"bx;a,b,c,$ti",
aO:function(a,b,c,d){return W.af(this.a,this.b,a,!1,H.C(this,0))}},
ae:{"^":"b9;a,b,c,$ti"},
ja:{"^":"iw;a,b,c,d,e,$ti",
du:function(a,b,c,d,e){this.dX()},
bW:function(a){if(this.b==null)return
this.dY()
this.b=null
this.d=null
return},
dX:function(){var z=this.d
if(z!=null&&this.a<=0)J.eV(this.b,this.c,z,!1)},
dY:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eU(x,this.c,z,!1)}},
p:{
af:function(a,b,c,d,e){var z=c==null?null:W.es(new W.jb(c))
z=new W.ja(0,a,b,z,!1,[e])
z.du(a,b,c,!1,e)
return z}}},
jb:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
cq:{"^":"d;cG:a<",
dv:function(a){var z,y
z=$.$get$cr()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.Q[y],W.l3())
for(y=0;y<12;++y)z.i(0,C.q[y],W.l4())}},
a6:function(a){return $.$get$e9().v(0,W.aF(a))},
X:function(a,b,c){var z,y,x
z=W.aF(a)
y=$.$get$cr()
x=y.h(0,H.c(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
e8:function(a){var z,y
z=document.createElement("a")
y=new W.jW(z,window.location)
y=new W.cq(y)
y.dv(a)
return y},
nK:[function(a,b,c,d){return!0},"$4","l3",16,0,9],
nL:[function(a,b,c,d){var z,y,x,w,v
z=d.gcG()
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
return z},"$4","l4",16,0,9]}},
l:{"^":"d;$ti",
gI:function(a){return new W.dj(a,this.gj(a),-1,null,[H.bd(this,a,"l",0)])}},
dx:{"^":"d;a",
a6:function(a){return C.b.bM(this.a,new W.i0(a))},
X:function(a,b,c){return C.b.bM(this.a,new W.i_(a,b,c))}},
i0:{"^":"f:0;a",
$1:function(a){return a.a6(this.a)}},
i_:{"^":"f:0;a,b,c",
$1:function(a){return a.X(this.a,this.b,this.c)}},
jX:{"^":"d;cG:d<",
dz:function(a,b,c,d){var z,y,x
this.a.N(0,c)
z=b.aZ(0,new W.jY())
y=b.aZ(0,new W.jZ())
this.b.N(0,z)
x=this.c
x.N(0,C.x)
x.N(0,y)},
a6:function(a){return this.a.v(0,W.aF(a))},
X:["d_",function(a,b,c){var z,y
z=W.aF(a)
y=this.c
if(y.v(0,H.c(z)+"::"+b))return this.d.e1(c)
else if(y.v(0,"*::"+b))return this.d.e1(c)
else{y=this.b
if(y.v(0,H.c(z)+"::"+b))return!0
else if(y.v(0,"*::"+b))return!0
else if(y.v(0,H.c(z)+"::*"))return!0
else if(y.v(0,"*::*"))return!0}return!1}]},
jY:{"^":"f:0;",
$1:function(a){return!C.b.v(C.q,a)}},
jZ:{"^":"f:0;",
$1:function(a){return C.b.v(C.q,a)}},
k8:{"^":"jX;e,a,b,c,d",
X:function(a,b,c){if(this.d_(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cJ(a).a.getAttribute("template")==="")return this.e.v(0,b)
return!1},
p:{
ek:function(){var z=P.j
z=new W.k8(P.ce(C.p,z),P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z),null)
z.dz(null,new H.hL(C.p,new W.k9(),[H.C(C.p,0),null]),["TEMPLATE"],null)
return z}}},
k9:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.c(a)}},
k6:{"^":"d;",
a6:function(a){var z=J.n(a)
if(!!z.$isdD)return!1
z=!!z.$isz
if(z&&W.aF(a)==="foreignObject")return!1
if(z)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.i.cT(b,"on"))return!1
return this.a6(a)}},
dj:{"^":"d;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aB(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gw:function(a){return this.d}},
j2:{"^":"d;a",$isB:1,p:{
j3:function(a){if(a===window)return a
else return new W.j2(a)}}},
dw:{"^":"d;"},
mT:{"^":"d;"},
nx:{"^":"d;"},
jW:{"^":"d;a,b"},
en:{"^":"d;a",
b7:function(a){new W.kj(this).$2(a,null)},
ad:function(a,b){if(b==null)J.cO(a)
else b.removeChild(a)},
dS:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cJ(a)
x=y.gdJ().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.J(t)}v="element unprintable"
try{v=J.aD(a)}catch(t){H.J(t)}try{u=W.aF(a)
this.dR(a,b,z,v,u,y,x)}catch(t){if(H.J(t) instanceof P.a8)throw t
else{this.ad(a,b)
window
s="Removing corrupted element "+H.c(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dR:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ad(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a6(a)){this.ad(a,b)
window
z="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.ad(a,b)
window
z="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gC(f)
y=H.u(z.slice(0),[H.C(z,0)])
for(x=f.gC(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.b(y,x)
w=y[x]
if(!this.a.X(a,J.fv(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.c(e)+" "+w+'="'+H.c(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$isdL)this.b7(a.content)}},
kj:{"^":"f:18;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dS(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ad(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.ff(z)}catch(w){H.J(w)
v=z
if(x){u=J.e(v)
if(u.gan(v)!=null){u.gan(v)
u.gan(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
j1:{"^":"h+fR;"},
j4:{"^":"h+k;"},
j5:{"^":"j4+l;"},
j6:{"^":"h+k;"},
j7:{"^":"j6+l;"},
jd:{"^":"h+k;"},
je:{"^":"jd+l;"},
jw:{"^":"h+k;"},
jx:{"^":"jw+l;"},
jG:{"^":"h+P;"},
jH:{"^":"h+P;"},
jI:{"^":"h+k;"},
jJ:{"^":"jI+l;"},
jK:{"^":"h+k;"},
jL:{"^":"jK+l;"},
jO:{"^":"h+k;"},
jP:{"^":"jO+l;"},
jV:{"^":"h+P;"},
eh:{"^":"B+k;"},
ei:{"^":"eh+l;"},
k_:{"^":"h+k;"},
k0:{"^":"k_+l;"},
k3:{"^":"h+P;"},
ka:{"^":"h+k;"},
kb:{"^":"ka+l;"},
el:{"^":"B+k;"},
em:{"^":"el+l;"},
kf:{"^":"h+k;"},
kg:{"^":"kf+l;"},
kl:{"^":"h+k;"},
km:{"^":"kl+l;"},
kn:{"^":"h+k;"},
ko:{"^":"kn+l;"},
kp:{"^":"h+k;"},
kq:{"^":"kp+l;"},
kr:{"^":"h+k;"},
ks:{"^":"kr+l;"},
kt:{"^":"h+k;"},
ku:{"^":"kt+l;"}}],["","",,P,{"^":"",
eA:function(a){return a},
V:function(a){var z,y,x,w,v
if(a==null)return
z=P.O()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
kS:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cI(a,new P.kT(z))
return z},
kU:function(a){var z,y
z=new P.G(0,$.r,null,[null])
y=new P.bE(z,[null])
a.then(H.R(new P.kV(y),1))["catch"](H.R(new P.kW(y),1))
return z},
dd:function(){var z=$.dc
if(z==null){z=J.bO(window.navigator.userAgent,"Opera",0)
$.dc=z}return z},
fV:function(){var z,y
z=$.d9
if(z!=null)return z
y=$.da
if(y==null){y=J.bO(window.navigator.userAgent,"Firefox",0)
$.da=y}if(y)z="-moz-"
else{y=$.db
if(y==null){y=P.dd()!==!0&&J.bO(window.navigator.userAgent,"Trident/",0)
$.db=y}if(y)z="-ms-"
else z=P.dd()===!0?"-o-":"-webkit-"}$.d9=z
return z},
iR:{"^":"d;",
cd:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
aY:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.c_(y,!0)
x.d5(y,!0)
return x}if(a instanceof RegExp)throw H.a(P.cm("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.kU(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.cd(a)
x=this.b
u=x.length
if(v>=u)return H.b(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.O()
z.a=t
if(v>=u)return H.b(x,v)
x[v]=t
this.er(a,new P.iT(z,this))
return z.a}if(a instanceof Array){s=a
v=this.cd(s)
x=this.b
if(v>=x.length)return H.b(x,v)
t=x[v]
if(t!=null)return t
u=J.D(s)
r=u.gj(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.b(x,v)
x[v]=t
if(typeof r!=="number")return H.t(r)
x=J.av(t)
q=0
for(;q<r;++q)x.i(t,q,this.aY(u.h(s,q)))
return t}return a}},
iT:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.aY(b)
J.cC(z,a,y)
return y}},
kT:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}},
iS:{"^":"iR;a,b,c",
er:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
b.$2(w,a[w])}}},
kV:{"^":"f:0;a",
$1:function(a){return this.a.a7(0,a)}},
kW:{"^":"f:0;a",
$1:function(a){return this.a.c_(a)}}}],["","",,P,{"^":"",n9:{"^":"B;O:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nu:{"^":"B;O:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
ea:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ab:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
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
gA:function(a){var z,y
z=J.a7(this.a)
y=J.a7(this.b)
return P.jz(P.ea(P.ea(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.c.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.c.gn(b)
if(typeof z!=="number")return z.l()
return new P.ab(y,C.a.l(z,x),this.$ti)},
G:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.G()
if(typeof x!=="number")return H.t(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.G()
if(typeof y!=="number")return H.t(y)
return new P.ab(z-x,w-y,this.$ti)}},
jQ:{"^":"d;$ti"},
ac:{"^":"jQ;$ti"}}],["","",,P,{"^":"",lX:{"^":"z;m:x=,n:y=","%":"SVGFEBlendElement"},lY:{"^":"z;m:x=,n:y=","%":"SVGFEColorMatrixElement"},lZ:{"^":"z;m:x=,n:y=","%":"SVGFEComponentTransferElement"},m_:{"^":"z;m:x=,n:y=","%":"SVGFECompositeElement"},m0:{"^":"z;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},m1:{"^":"z;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},m2:{"^":"z;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},m3:{"^":"z;m:x=,n:y=","%":"SVGFEFloodElement"},m4:{"^":"z;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},m5:{"^":"z;m:x=,n:y=","%":"SVGFEImageElement"},m6:{"^":"z;m:x=,n:y=","%":"SVGFEMergeElement"},m7:{"^":"z;m:x=,n:y=","%":"SVGFEMorphologyElement"},m8:{"^":"z;m:x=,n:y=","%":"SVGFEOffsetElement"},m9:{"^":"z;m:x=,n:y=,E:z=","%":"SVGFEPointLightElement"},ma:{"^":"z;m:x=,n:y=","%":"SVGFESpecularLightingElement"},mb:{"^":"z;m:x=,n:y=,E:z=","%":"SVGFESpotLightElement"},mc:{"^":"z;m:x=,n:y=","%":"SVGFETileElement"},md:{"^":"z;m:x=,n:y=","%":"SVGFETurbulenceElement"},mi:{"^":"z;m:x=,n:y=","%":"SVGFilterElement"},ml:{"^":"aG;m:x=,n:y=","%":"SVGForeignObjectElement"},hh:{"^":"aG;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aG:{"^":"z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ms:{"^":"aG;m:x=,n:y=","%":"SVGImageElement"},mx:{"^":"jD;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dm]},
$isi:1,
$asi:function(){return[P.dm]},
$asl:function(){return[P.dm]},
"%":"SVGLengthList"},mD:{"^":"z;m:x=,n:y=","%":"SVGMaskElement"},mU:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dz]},
$isi:1,
$asi:function(){return[P.dz]},
$asl:function(){return[P.dz]},
"%":"SVGNumberList"},mZ:{"^":"z;m:x=,n:y=","%":"SVGPatternElement"},n1:{"^":"h;m:x=,n:y=","%":"SVGPoint"},n2:{"^":"h;j:length=","%":"SVGPointList"},n5:{"^":"h;m:x=,n:y=","%":"SVGRect"},n6:{"^":"hh;m:x=,n:y=","%":"SVGRectElement"},dD:{"^":"z;",$isdD:1,"%":"SVGScriptElement"},nj:{"^":"k5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ask:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$asl:function(){return[P.j]},
"%":"SVGStringList"},z:{"^":"am;",
T:function(a,b,c,d){var z,y,x,w,v,u
z=H.u([],[W.dw])
z.push(W.e8(null))
z.push(W.ek())
z.push(new W.k6())
c=new W.en(new W.dx(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.u).ee(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.U(w)
u=z.ga1(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaQ:function(a){return new W.ae(a,"mousedown",!1,[W.Q])},
gaR:function(a){return new W.ae(a,"mousemove",!1,[W.Q])},
gaS:function(a){return new W.ae(a,"mouseup",!1,[W.Q])},
gaT:function(a){return new W.ae(a,"mousewheel",!1,[W.aR])},
$isz:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nk:{"^":"aG;m:x=,n:y=","%":"SVGSVGElement"},iH:{"^":"aG;","%":"SVGTextPathElement;SVGTextContentElement"},no:{"^":"iH;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nv:{"^":"ki;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dO]},
$isi:1,
$asi:function(){return[P.dO]},
$asl:function(){return[P.dO]},
"%":"SVGTransformList"},nz:{"^":"aG;m:x=,n:y=","%":"SVGUseElement"},jC:{"^":"h+k;"},jD:{"^":"jC+l;"},jM:{"^":"h+k;"},jN:{"^":"jM+l;"},k4:{"^":"h+k;"},k5:{"^":"k4+l;"},kh:{"^":"h+k;"},ki:{"^":"kh+l;"}}],["","",,P,{"^":"",lr:{"^":"h;j:length=","%":"AudioBuffer"},ls:{"^":"j0;",
h:function(a,b){return P.V(a.get(b))},
u:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.V(y.value[1]))}},
gC:function(a){var z=H.u([],[P.j])
this.u(a,new P.fF(z))
return z},
gj:function(a){return a.size},
i:function(a,b,c){throw H.a(P.p("Not supported"))},
$asP:function(){return[P.j,null]},
"%":"AudioParamMap"},fF:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},lt:{"^":"h;aL:enabled=","%":"AudioTrack"},lu:{"^":"B;j:length=","%":"AudioTrackList"},fG:{"^":"B;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mW:{"^":"fG;j:length=","%":"OfflineAudioContext"},j0:{"^":"h+P;"}}],["","",,P,{"^":"",n7:{"^":"h;",
bK:function(a,b){return a.activeTexture(b)},
bN:function(a,b,c){return a.attachShader(b,c)},
bO:function(a,b,c){return a.bindBuffer(b,c)},
bQ:function(a,b,c){return a.bindFramebuffer(b,c)},
bR:function(a,b,c){return a.bindTexture(b,c)},
bS:function(a,b){return a.blendEquation(b)},
bT:function(a,b,c){return a.blendFunc(b,c)},
bU:function(a,b,c,d){return a.bufferData(b,c,d)},
bX:function(a,b){return a.clear(b)},
bY:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bZ:function(a,b){return a.compileShader(b)},
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
aq:function(a){return P.V(a.getContextAttributes())},
b0:function(a){return a.getError()},
b1:function(a,b){return a.getProgramInfoLog(b)},
b2:function(a,b,c){return a.getProgramParameter(b,c)},
b3:function(a,b){return a.getShaderInfoLog(b)},
b4:function(a,b,c){return a.getShaderParameter(b,c)},
b5:function(a,b,c){return a.getUniformLocation(b,c)},
ci:function(a,b){return a.linkProgram(b)},
cn:function(a,b,c){return a.pixelStorei(b,c)},
b9:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aW:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.n(g)
if(!!z.$isc6)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.eA(g))
return}if(!!z.$isc7)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isco)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc5)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bU("Incorrect number or type of arguments"))},
cq:function(a,b,c,d,e,f,g){return this.aW(a,b,c,d,e,f,g,null,null,null)},
cr:function(a,b,c,d){return a.texParameterf(b,c,d)},
cs:function(a,b,c,d){return a.texParameteri(b,c,d)},
cv:function(a,b,c){return a.uniform1f(b,c)},
cw:function(a,b,c){return a.uniform1fv(b,c)},
cz:function(a,b,c){return a.uniform1i(b,c)},
cA:function(a,b,c){return a.uniform1iv(b,c)},
cB:function(a,b,c){return a.uniform2fv(b,c)},
cC:function(a,b,c){return a.uniform3fv(b,c)},
cD:function(a,b,c){return a.uniform4fv(b,c)},
cE:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cF:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cH:function(a,b){return a.useProgram(b)},
cI:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cK:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},n8:{"^":"h;",
e4:function(a,b){return a.beginTransformFeedback(b)},
e7:function(a,b){return a.bindVertexArray(b)},
ef:function(a){return a.createVertexArray()},
ek:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
el:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
em:function(a){return a.endTransformFeedback()},
eU:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
eV:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bK:function(a,b){return a.activeTexture(b)},
bN:function(a,b,c){return a.attachShader(b,c)},
bO:function(a,b,c){return a.bindBuffer(b,c)},
bQ:function(a,b,c){return a.bindFramebuffer(b,c)},
bR:function(a,b,c){return a.bindTexture(b,c)},
bS:function(a,b){return a.blendEquation(b)},
bT:function(a,b,c){return a.blendFunc(b,c)},
bU:function(a,b,c,d){return a.bufferData(b,c,d)},
bX:function(a,b){return a.clear(b)},
bY:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bZ:function(a,b){return a.compileShader(b)},
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
aq:function(a){return P.V(a.getContextAttributes())},
b0:function(a){return a.getError()},
b1:function(a,b){return a.getProgramInfoLog(b)},
b2:function(a,b,c){return a.getProgramParameter(b,c)},
b3:function(a,b){return a.getShaderInfoLog(b)},
b4:function(a,b,c){return a.getShaderParameter(b,c)},
b5:function(a,b,c){return a.getUniformLocation(b,c)},
ci:function(a,b){return a.linkProgram(b)},
cn:function(a,b,c){return a.pixelStorei(b,c)},
b9:function(a,b,c){return a.shaderSource(b,c)},
bb:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aW:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.n(g)
if(!!z.$isc6)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.eA(g))
return}if(!!z.$isc7)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isco)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isc5)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bU("Incorrect number or type of arguments"))},
cq:function(a,b,c,d,e,f,g){return this.aW(a,b,c,d,e,f,g,null,null,null)},
cr:function(a,b,c,d){return a.texParameterf(b,c,d)},
cs:function(a,b,c,d){return a.texParameteri(b,c,d)},
cv:function(a,b,c){return a.uniform1f(b,c)},
cw:function(a,b,c){return a.uniform1fv(b,c)},
cz:function(a,b,c){return a.uniform1i(b,c)},
cA:function(a,b,c){return a.uniform1iv(b,c)},
cB:function(a,b,c){return a.uniform2fv(b,c)},
cC:function(a,b,c){return a.uniform3fv(b,c)},
cD:function(a,b,c){return a.uniform4fv(b,c)},
cE:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cF:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cH:function(a,b){return a.useProgram(b)},
cI:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cK:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",nh:{"^":"k2;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.y(b,a,null,null,null))
return P.V(a.item(b))},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$ask:function(){return[P.cf]},
$isi:1,
$asi:function(){return[P.cf]},
$asl:function(){return[P.cf]},
"%":"SQLResultSetRowList"},k1:{"^":"h+k;"},k2:{"^":"k1+l;"}}],["","",,G,{"^":"",
iU:function(a){var z,y,x,w
z=H.u(a.split("\n"),[P.j])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.b(z,y)
w+=H.c(z[y])
if(y>=z.length)return H.b(z,y)
z[y]=w}return C.b.af(z,"\n")},
e4:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.c2(a,b)
z.b9(a,y,c)
z.bZ(a,y)
x=z.b4(a,y,35713)
if(x!=null&&J.M(x,!1)){w=z.b3(a,y)
P.W("E:Compilation failed:")
P.W("E:"+G.iU(c))
P.W("E:Failure:")
P.W(C.i.l("E:",w))
throw H.a(w)}return y},
c2:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bR(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.bS(a[y])
if(x>=w)return H.b(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.b(a,y)
v=J.cM(a[y])
if(z>=w)return H.b(b,z)
b[z]=v}return b},
h8:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bR(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x;++z
if(y>=a.length)return H.b(a,y)
x=J.bS(a[y])
if(z>=w)return H.b(b,z)
b[z]=x}return b},
h9:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bR(a[y])
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.bS(a[y])
if(x>=w)return H.b(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.b(a,y)
x=J.cM(a[y])
if(v>=w)return H.b(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.b(a,y)
x=J.fi(a[y])
if(z>=w)return H.b(b,z)
b[z]=x}return b},
h7:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aB(a[y],0)
w=b.length
if(z>=w)return H.b(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.b(a,y)
v=J.aB(a[y],1)
if(x>=w)return H.b(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.b(a,y)
x=J.aB(a[y],2)
if(v>=w)return H.b(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.b(a,y)
x=J.aB(a[y],3)
if(z>=w)return H.b(b,z)
b[z]=x}return b},
ju:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.aM(z,z.r,null,null,[H.C(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.E]],v=[P.at],u=[T.Y],t=[T.m],s=[T.ad];y.t();){r=y.d
if(!x.a_(0,r)){q="Dropping unnecessary attribute: "+H.c(r)
if($.eF>0)H.bf("I: "+q)
continue}p=z.h(0,r)
switch($.$get$Z().h(0,r).a){case"vec2":b.a9(r,G.h8(H.bg(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.a9(r,G.c2(H.bg(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.a9(r,G.h9(H.bg(p,"$isi",u,"$asi"),null),4)
break
case"float":b.a9(r,new Float32Array(H.bH(H.bg(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.a9(r,G.h7(H.bg(p,"$isi",w,"$asi"),null),4)
break}}},
an:{"^":"d;aL:c>"},
bD:{"^":"an;d,a,b,c",
at:function(){return this.d},
k:function(a){var z,y,x,w
z=H.u(["{"+H.c(new H.e_(H.l0(this),null))+"}["+this.a+"]"],[P.j])
for(y=this.d,x=new H.aM(y,y.r,null,null,[H.C(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.c(w)+": "+H.c(y.h(0,w)))}return C.b.af(z,"\n")}},
fH:{"^":"dE;"},
fJ:{"^":"d;a,b",
cb:function(a,b,c){J.fa(this.a,b)
if(c>0)J.fB(this.a,b,c)},
cJ:function(a,b,c,d,e,f,g,h){J.bN(this.a,34962,b)
J.fC(this.a,c,d,e,!1,g,h)}},
hb:{"^":"d;a,b,c,d,e"},
h5:{"^":"d;a,b,c"},
h6:{"^":"d;a,b,c,d"},
hg:{"^":"d;a,b,c,d,e",
aj:function(a){switch($.$get$Z().h(0,a).a){case"vec2":this.e.i(0,a,H.u([],[T.ad]))
break
case"vec3":this.e.i(0,a,H.u([],[T.m]))
break
case"vec4":this.e.i(0,a,H.u([],[T.Y]))
break
case"float":this.e.i(0,a,H.u([],[P.at]))
break
case"uvec4":this.e.i(0,a,H.u([],[[P.i,P.E]]))
break}},
d2:function(a){var z,y,x,w
z=this.d
y=z.length
this.b.push(new G.h5(y,y+1,y+2))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.A)(a),++w)z.push(a[w].Z(0))},
d0:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.A)(b),++x)z.push(b[x].Z(0))},
d1:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.A)(b),++x)z.push(b[x].Z(0))},
bf:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.A)(b),++x)z.push(b[x].Z(0))},
d3:function(a){var z,y,x,w
z=this.d
y=z.length
this.c.push(new G.h6(y,y+1,y+2,y+3))
for(x=a.length,w=0;w<a.length;a.length===x||(0,H.A)(a),++w)z.push(a[w].Z(0))},
da:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.b
y=this.c
x=new Array(z.length*3+y.length*6)
x.fixed$length=Array
w=H.u(x,[P.E])
for(x=z.length,v=w.length,u=0,t=0;t<x;++t){s=z[t]
if(u>=v)return H.b(w,u)
w[u]=s.a
r=u+1
if(r>=v)return H.b(w,r)
w[r]=s.b
r=u+2
if(r>=v)return H.b(w,r)
w[r]=s.c
u+=3}for(z=y.length,t=0;t<z;++t){q=y[t]
x=q.a
if(u>=v)return H.b(w,u)
w[u]=x
r=u+1
if(r>=v)return H.b(w,r)
w[r]=q.b
r=u+2
p=q.c
if(r>=v)return H.b(w,r)
w[r]=p
r=u+3
if(r>=v)return H.b(w,r)
w[r]=x
x=u+4
if(x>=v)return H.b(w,x)
w[x]=p
p=u+5
if(p>=v)return H.b(w,p)
w[p]=q.d
u+=6}return w},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.aM(y,y.r,null,null,[H.C(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$Z().h(0,w).a
z.push(H.c(w)+"["+v+","+y.h(0,w).length+"]")}return C.b.af(z," ")}},
hD:{"^":"an;"},
fW:{"^":"hD;x,y,z,Q,ch,cx,d,a,b,c",
d9:function(a,b){var z,y,x,w
z=b+4
y=this.x.a
x=y[0]
w=a.length
if(z>=w)return H.b(a,z)
a[z]=x
x=b+5
z=y[1]
if(x>=w)return H.b(a,x)
a[x]=z
z=b+6
y=y[2]
if(z>=w)return H.b(a,z)
a[z]=y
y=b+8
z=this.y.a
x=z[0]
if(y>=w)return H.b(a,y)
a[y]=x
x=b+9
y=z[1]
if(x>=w)return H.b(a,x)
a[x]=y
y=b+10
z=z[2]
if(y>=w)return H.b(a,y)
a[y]=z
z=b+12
y=this.z.a
x=y[0]
if(z>=w)return H.b(a,z)
a[z]=x
x=b+13
z=y[1]
if(x>=w)return H.b(a,x)
a[x]=z
z=b+14
y=y[2]
if(z>=w)return H.b(a,z)
a[z]=y},
k:function(a){return"DL: p:"+H.c(this.x)}},
hk:{"^":"bD;x,y,z,d,a,b,c",
at:function(){var z,y,x
z=this.y
y=this.z
G.hl(z,y,this.x)
x=this.d
x.i(0,"uLightDescs",z)
x.i(0,"uLightTypes",y)
return x},
p:{
hl:function(a,b,c){var z,y,x,w
C.r.cc(a,0,a.length,0)
C.r.cc(b,0,4,0)
for(z=c.length,y=0,x=0;x<c.length;c.length===z||(0,H.A)(c),++x){w=c[x]
if(w.c){w.d9(a,y*16)
if(y>=4)return H.b(b,y)
b[y]=w.d;++y}}}}},
dN:{"^":"d;a,b,c"},
dM:{"^":"d;a,b,c"},
hM:{"^":"bD;d,a,b,c",
df:function(a){var z=this.d
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.$get$cY())
z.i(0,"cStencilFunc",$.$get$dG())},
p:{
dt:function(a){var z=new G.hM(P.O(),a,!1,!0)
z.df(a)
return z}}},
hO:{"^":"an;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bj:function(a,b,c){var z,y
C.i.bv(a,0)
J.cC(this.cy,a,b)
z=this.d
y=this.r.h(0,a)
J.bN(z.a,34962,y)
J.cF(z.a,34962,b,35048)},
bl:function(a){this.ch=a
this.bj("aPosition",a,3)},
dc:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a9:function(a,b,c){var z,y,x,w,v
z=J.cG(a,0)===105
if(z&&this.z===0)this.z=C.c.V(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bP(x.a))
this.bj(a,b,c)
w=$.$get$Z().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.bh(x.a,this.e)
x.cb(0,v,z?1:0)
x.cJ(0,y.h(0,a),v,w.bm(),5126,!1,0,0)},
bi:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.bP(y.a))
this.bl(a)
x=$.$get$Z().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bh(y.a,this.e)
y.cb(0,w,0)
y.cJ(0,z.h(0,"aPosition"),w,x.bm(),5126,!1,0,0)},
bk:function(a){var z,y,x
z=this.ch.length
if(z<768){this.cx=new Uint8Array(H.bH(a))
this.Q=5121}else if(z<196608){this.cx=new Uint16Array(H.bH(a))
this.Q=5123}else{this.cx=new Uint32Array(H.bH(a))
this.Q=5125}z=this.d
J.bh(z.a,this.e)
y=this.y
x=this.cx
J.bN(z.a,34963,y)
J.cF(z.a,34963,x,35048)},
bg:function(a){this.y=J.bP(this.d.a)
this.bk(a)},
k:function(a){var z,y,x,w,v
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=J.e(z),w=J.ak(x.gC(z));w.t();){v=w.gw(w)
y.push(H.c(v)+":"+H.c(J.H(x.h(z,v))))}return"MESH["+this.a+"] "+C.b.af(y,"  ")},
p:{
du:function(a,b,c,d){return new G.hO(b,J.f4(b.a),c,P.O(),d,null,0,-1,null,null,P.O(),"meshdata:"+a,!1,!0)}}},
i3:{"^":"bD;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
d4:function(a,b){var z
if(typeof a!=="number")return a.eY()
if(typeof b!=="number")return H.t(b)
z=a/b
if(this.z===z)return
this.z=z
this.bo()},
bo:function(){var z,y,x,w,v,u
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
at:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.m(new Float32Array(3))
u.a8(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.D(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.n(t)
x=!!y.$isY
q=x?y.gag(t):1
if(!!y.$ism){p=y.gm(t)
s=y.gn(t)
r=y.gE(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gE(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.t(t)
x=z[4]
if(typeof s!=="number")return H.t(s)
w=z[8]
if(typeof r!=="number")return H.t(r)
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
c.D(this.db)
c.ck(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
ih:{"^":"an;d,e,f,r,x,y,z,Q,ch,a,b,c",
di:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){t=z[u]
x.i(0,t,J.cN(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){t=z[u]
x.i(0,t,J.cN(w.a,v,t))}},
dm:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.aM(y,y.r,null,null,[H.C(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.a_(0,v))x.push(v)}for(z=this.x,y=new P.cs(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.v(0,v))x.push(v)}return x},
ds:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.aM(b,b.r,null,null,[H.C(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cG(t,0)){case 117:if(w.a_(0,t)){s=b.h(0,t)
if(v.a_(0,t))H.bf("E:"+(t+" : group ["+H.c(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$Z().h(0,t)
if(r==null)H.a0("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bT(x.a,q,s)
else if(!!J.n(s).$ishp)J.fz(x.a,q,s)
break
case"float":if(r.c===0)J.fx(x.a,q,s)
else if(!!J.n(s).$isc3)J.fy(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ag(s,"$isF").a
J.cV(x.a,q,!1,p)}else if(!!J.n(s).$isc3)J.cV(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.ag(s,"$isah").a
J.cU(x.a,q,!1,p)}else if(!!J.n(s).$isc3)J.cU(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cT(o,q,H.ag(s,"$isY").a)
else J.cT(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cS(o,q,H.ag(s,"$ism").a)
else J.cS(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cR(o,q,H.ag(s,"$isad").a)
else J.cR(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.t(p)
J.cD(x.a,33984+p)
p=H.ag(s,"$iscl").b
J.aY(x.a,3553,p)
p=this.ch
J.bT(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.t(p)
J.cD(x.a,33984+p)
p=H.ag(s,"$iscl").b
J.aY(x.a,34067,p)
p=this.ch
J.bT(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bf("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.M(s,!0)
o=x.a
if(p)J.aZ(o,2929)
else J.bQ(o,2929)
break
case"cStencilFunc":H.ag(s,"$isdN")
p=s.a
o=x.a
if(p===1281)J.bQ(o,2960)
else{J.aZ(o,2960)
o=s.b
n=s.c
J.fs(x.a,p,o,n)}break
case"cDepthWrite":J.f5(x.a,s)
break
case"cBlendEquation":H.ag(s,"$isdM")
p=s.a
o=x.a
if(p===1281)J.bQ(o,3042)
else{J.aZ(o,3042)
o=s.b
n=s.c
J.eZ(x.a,o,n)
J.eY(x.a,p)}break}++u
break}}m=P.h_(0,0,0,Date.now()-new P.c_(z,!1).a,0,0)
""+u
m.k(0)},
d8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fA(z.a,this.r)
this.ch=0
this.z.Y(0)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.A)(b),++x){w=b[x]
this.ds(w.a,w.at())}y=this.Q
y.Y(0)
for(v=J.ak(J.fd(a.cy));v.t();)y.B(0,v.gw(v))
u=this.dm()
if(u.length!==0)P.W("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.c(u)))
y=a.d
v=a.e
J.bh(y.a,v)
t=this.e.f.length>0
v=a.f
y=a.dc()
s=a.Q
r=a.z
if(t)J.eW(z.a,v)
if(s!==-1){q=z.a
if(r>1)J.f9(q,v,y,s,0,r)
else J.f8(q,v,y,s,0)}else{s=z.a
if(r>1)J.f7(s,v,0,y,r)
else J.f6(s,v,0,y)}if(t)J.fb(z.a)},
p:{
dC:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.X(null,null,null,P.j)
y=c.b
x=d.b
w=c.f
v=J.f2(b.a)
u=G.e4(b.a,35633,y)
J.cE(b.a,v,u)
t=G.e4(b.a,35632,x)
J.cE(b.a,v,t)
if(w.length>0)J.fw(b.a,v,w,35980)
J.fp(b.a,v)
if(J.fo(b.a,v,35714)!==!0)H.a0(J.fn(b.a,v))
z=new G.ih(b,c,d,v,P.ce(c.c,null),P.O(),P.O(),z,null,a,!1,!0)
z.di(a,b,c,d)
return z}}},
x:{"^":"d;a,b,c",
bm:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
io:{"^":"d;a,b,c,d,e,f,r,x",
be:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.A)(a),++w){v=a[w]
y.push(v)
x.i(0,v,this.r);++this.r}C.b.ar(y)},
a3:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.A)(a),++x)y.push(a[x])
C.b.ar(y)},
bh:function(a){var z,y
for(z=this.e,y=0;y<3;++y)z.push(a[y])
C.b.ar(z)},
bn:function(a,b){this.b=this.dt(!0,a,b)},
au:function(a){return this.bn(a,null)},
dt:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){t=z[u]
s=$.$get$Z().h(0,t)
w.push("layout (location="+H.c(v.h(0,t))+") in "+s.a+" "+H.c(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){q=z[u]
s=$.$get$Z().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){q=z[u]
s=$.$get$Z().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){q=z[u]
s=$.$get$Z().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.c(q)+p+";")}w.push("")
if(c!=null)C.b.N(w,c)
w.push("void main(void) {")
C.b.N(w,b)
w.push("}")
return C.b.af(w,"\n")},
p:{
bt:function(a){return new G.io(a,null,[],[],[],[],0,P.O())}}},
dE:{"^":"an;",
eC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=this.d.a
y=z[12]
x=z[13]
w=z[14]
b=new T.m(new Float32Array(3))
b.a8(0,1,0)
v=this.e
u=v.a
u[0]=z[12]
u[1]=z[13]
u[2]=z[14]
t=v.G(0,a)
t.aP(0)
s=b.c4(t)
s.aP(0)
r=t.c4(s)
r.aP(0)
u=s.aK(v)
q=r.aK(v)
v=t.aK(v)
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
cj:function(a){return this.eC(a,null)}},
iI:{"^":"d;a,b,c,d,e,f,r",
dd:function(a,b){var z=this.e
if(z!==1)J.fu(a.a,b,34046,z)
J.cP(a.a,b,10240,this.r)
J.cP(a.a,b,10241,this.f)}},
cl:{"^":"d;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
hm:{"^":"cl;f,a,b,c,d,e",
dj:function(a){var z,y
z=this.d
y=this.c
J.aY(z.a,y,this.b)
J.ft(z.a,y,0,6408,6408,5121,a)}}}],["","",,Y,{"^":"",
jg:function(a){var z,y,x,w,v
z=J.D(a)
y=z.gj(a)
if(typeof y!=="number")return H.t(y)
y=new Array(y)
y.fixed$length=Array
x=H.u(y,[P.at])
y=x.length
w=0
while(!0){v=z.gj(a)
if(typeof v!=="number")return H.t(v)
if(!(w<v))break
v=z.h(a,w)
if(typeof v==="number"&&Math.floor(v)===v){v=J.al(z.h(a,w))
if(w>=y)return H.b(x,w)
x[w]=v}else{v=z.h(a,w)
if(typeof v==="number"){v=z.h(a,w)
if(w>=y)return H.b(x,w)
x[w]=v}}++w}return x},
jy:function(a){var z,y,x,w,v
z=J.D(a)
y=z.gj(a)
if(typeof y!=="number")return H.t(y)
y=new Array(y)
y.fixed$length=Array
x=H.u(y,[P.E])
y=x.length
w=0
while(!0){v=z.gj(a)
if(typeof v!=="number")return H.t(v)
if(!(w<v))break
v=z.h(a,w)
if(w>=y)return H.b(x,w)
x[w]=v;++w}return x},
jf:function(a){var z,y,x
z=J.D(a)
y=z.h(a,"skinIndices")
z.h(a,"skinWeights")
if(y==null||J.H(y)===0)return 0
z=J.H(z.h(a,"vertices"))
if(typeof z!=="number")return z.V()
z=C.a.M(z,3)
x=J.H(y)
if(typeof x!=="number")return x.V()
z=C.a.V(x,z)
P.W("Skin multiplier is "+H.c(z))
return z},
hn:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=[]
y=Y.jf(a8)
x=J.D(a8)
w=Y.jy(x.h(a8,"faces"))
v=w.length
P.W("faces: "+v)
u=Y.d4(x.h(a8,"vertices"))
t=Y.d4(x.h(a8,"normals"))
s=y===0
r=s?null:Y.d5(y,x.h(a8,"skinIndices"))
q=s?null:Y.d5(y,Y.jg(x.h(a8,"skinWeights")))
if(q!=null)for(s=q.length,p=0;p<s;++p){o=q[p]
n=o.gm(o)+o.gn(o)+o.gE(o)+o.gag(o)
if(n<0.98||n>1.02)H.bf("bad vector: "+o.k(0))}m=Y.fP(J.aB(x.h(a8,"uvs"),0))
for(x=y>0,s=u.length,l=m.length,k=l>0,j=t.length,i=j>0,h=0;h<v;){g=h+1
if(h<0)return H.b(w,h)
f=w[h]
if(typeof f!=="number")return f.eX()
n=(f&1)===0?3:4
e=[]
for(h=g,d=0;d<n;++d,h=g){g=h+1
if(h<0||h>=v)return H.b(w,h)
e.push(w[h])}if((f&2)!==0){g=h+1
if(h<0||h>=v)return H.b(w,h)
c=w[h]
h=g}else c=0
b=[]
if((f&8)!==0)for(d=0;d<n;++d,h=g){g=h+1
if(h<0||h>=v)return H.b(w,h)
a=w[h]
if(a>>>0!==a||a>=l)return H.b(m,a)
b.push(m[a])}a0=[]
if((f&16)!==0){g=h+1
if(h<0||h>=v)return H.b(w,h)
a=w[h]
if(a>>>0!==a||a>=j)return H.b(t,a)
a1=t[a]
for(d=0;d<n;++d)a0.push(a1)
h=g}if((f&32)!==0)for(d=0;d<n;++d,h=g){g=h+1
if(h<0||h>=v)return H.b(w,h)
a=w[h]
if(a>>>0!==a||a>=j)return H.b(t,a)
a0.push(t[a])}a2=[]
if((f&64)!==0){g=h+1
if(h<0||h>=v)return H.b(w,h)
a3=w[h]
for(d=0;d<n;++d)a2.push(a3)
h=g}if((f&128)!==0)for(d=0;d<n;++d,h=g){g=h+1
if(h<0||h>=v)return H.b(w,h)
a2.push(w[h])}if(typeof c!=="number")return H.t(c)
for(;a=z.length,a<=c;){a4=new G.hg(!1,[],[],[],P.O())
if(i)a4.aj("aNormal")
if(k)a4.aj("aTexUV")
if(x){a4.aj("aBoneIndex")
a4.aj("aBoneWeight")}z.push(a4)}if(c>>>0!==c||c>=a)return H.b(z,c)
a4=z[c]
a5=[]
for(a=e.length,p=0;p<e.length;e.length===a||(0,H.A)(e),++p){g=e[p]
if(g>>>0!==g||g>=s)return H.b(u,g)
a5.push(u[g])}if(n===3)a4.d2(a5)
else a4.d3(a5)
if(b.length>0)a4.d0("aTexUV",b)
if(a0.length>0)a4.d1("aNormal",a0)
if(x){a6=[]
a7=[]
for(a=e.length,p=0;p<e.length;e.length===a||(0,H.A)(e),++p){g=e[p]
if(g>>>0!==g||g>=r.length)return H.b(r,g)
a6.push(r[g])
if(g>=q.length)return H.b(q,g)
a7.push(q[g])}a4.bf("aBoneIndex",a6)
a4.bf("aBoneWeight",a7)}}x="out: "+z.length+" "
if(0>=z.length)return H.b(z,0)
P.W(x+z[0].k(0))
return z},
d4:function(a){var z,y,x,w,v,u,t,s,r
z=J.D(a)
y=z.gj(a)
if(typeof y!=="number")return y.V()
y=new Array(C.a.M(y,3))
y.fixed$length=Array
x=H.u(y,[T.m])
y=x.length
w=0
while(!0){v=z.gj(a)
if(typeof v!=="number")return H.t(v)
if(!(w<v))break
v=C.c.M(w,3)
u=J.al(z.h(a,w))
t=J.al(z.h(a,w+1))
s=J.al(z.h(a,w+2))
r=new Float32Array(3)
r[0]=u
r[1]=t
r[2]=s
if(v>=y)return H.b(x,v)
x[v]=new T.m(r)
w+=3}return x},
fP:function(a){var z,y,x,w,v,u,t,s
z=J.D(a)
y=z.gj(a)
if(typeof y!=="number")return y.V()
y=new Array(C.a.M(y,2))
y.fixed$length=Array
x=H.u(y,[T.ad])
y=x.length
w=0
while(!0){v=z.gj(a)
if(typeof v!=="number")return H.t(v)
if(!(w<v))break
v=C.c.M(w,2)
u=J.al(z.h(a,w))
t=J.al(z.h(a,w+1))
s=new Float32Array(2)
s[0]=u
s[1]=t
if(v>=y)return H.b(x,v)
x[v]=new T.ad(s)
w+=2}return x},
d5:function(a,b){var z,y,x,w,v,u,t,s
z=J.D(b)
y=z.gj(b)
if(typeof y!=="number")return y.V()
y=new Array(C.a.V(y,a))
y.fixed$length=Array
x=H.u(y,[T.Y])
y=x.length
w=0
v=0
while(!0){u=z.gj(b)
if(typeof u!=="number")return H.t(u)
if(!(w<u))break
u=new Float32Array(4)
for(t=0;t<a;++t){s=J.al(z.h(b,w+t))
if(t>=4)return H.b(u,t)
u[t]=s}if(v>=y)return H.b(x,v)
x[v]=new T.Y(u)
w+=a;++v}return x}}],["","",,R,{"^":"",
iN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=d.a
if(z[1]===0)return
y=b*0.5
x=c*C.o.ep(y/c)
w=-x
v=d.b8(y).b8(1/z[1])
u=[]
for(t=w;t<=x;t+=c)for(s=w;s<=x;s+=c){z=new Float32Array(3)
r=new T.m(z)
z[0]=t
z[1]=0
z[2]=s
r.B(0,v)
u.push(r)
z=new Float32Array(3)
r=new T.m(z)
z[0]=t
z[1]=0
z[2]=s
r.bc(0,v)
u.push(r)}for(q=0;q<8;++q){t=(q&1)===1?1:-1
p=(q&2)===2?1:-1
s=(q&4)===4?1:-1
if(t>0){z=p*y
r=s*y
o=new Float32Array(3)
o[0]=t*y
o[1]=z
o[2]=r
u.push(new T.m(o))
o=new Float32Array(3)
o[0]=-t*y
o[1]=z
o[2]=r
u.push(new T.m(o))}if(p>0){z=t*y
r=s*y
o=new Float32Array(3)
o[0]=z
o[1]=p*y
o[2]=r
u.push(new T.m(o))
o=new Float32Array(3)
o[0]=z
o[1]=-p*y
o[2]=r
u.push(new T.m(o))}if(s>0){z=t*y
r=p*y
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=s*y
u.push(new T.m(o))
o=new Float32Array(3)
o[0]=z
o[1]=r
o[2]=-s*y
u.push(new T.m(o))}}a.bl(G.c2(u,null))
z=new Array(u.length)
z.fixed$length=Array
n=H.u(z,[P.E])
for(z=u.length,r=n.length,q=0;q<z;++q){if(q>=r)return H.b(n,q)
n[q]=q}a.bk(n)},
ig:{"^":"ie;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
eK:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sJ(z,y)
w.sH(z,x)
P.W("size change "+H.c(y)+" "+H.c(x))
this.dx.d4(y,x)
this.z=y
this.Q=x},"$1","geJ",4,0,19]},
it:{"^":"d;",
dk:function(a,b,c){var z,y,x
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
x=this.dw(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dw:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.j9("span",null)
y=J.cK(v)
J.e(y).sJ(y,"1px")
C.n.sH(y,""+d+"px")
C.n.seo(y,"left")
x=C.n.bu(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
iu:{"^":"it;e,f,a,b,c,d",
dq:function(a,b){var z,y,x,w,v;++this.e
if(J.aX(J.eT(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.o.eT(z,2)+" fps"
y=this.c;(y&&C.E).cP(y,b)
x=C.c.M(30*C.o.e8(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cK(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
dn:function(a){return this.dq(a,"")}}}],["","",,A,{"^":"",
eC:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.fc(b)!==!0)return
z=b.dr(c)
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
w.ed(new T.ah(u))
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
a.d8(b.cx,e,d)
if(0>=e.length)return H.b(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.A)(y),++r)A.eC(a,y[r],z,d,e)},
ch:{"^":"dE;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dr:function(a){var z=this.dx
z.D(a)
z.ck(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"}},
ci:{"^":"an;d,e,cl:f>,a,b,c"},
ie:{"^":"an;",
dh:function(a,b,c){if(this.d==null)this.d=new G.hb(this.e,null,null,null,null)},
d7:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.eX(v.a,36160,z)
J.fD(v.a,this.x,this.y,x,w)
if(y!==0)J.f_(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.A)(z),++u){t=z[u]
if(!t.c)continue
s=t.e
s.push(new G.bD(P.O(),"transforms",!1,!0))
r=new T.F(new Float32Array(16))
r.P()
for(x=t.f,w=x.length,v=t.d,q=0;q<x.length;x.length===w||(0,H.A)(x),++q)A.eC(v,x[q],r,a,s)
if(0>=s.length)return H.b(s,-1)
s.pop()}},
d6:function(){return this.d7(null)}}}],["","",,V,{}],["","",,D,{"^":"",
hI:function(a){var z,y
z=new P.G(0,$.r,null,[null])
y=new XMLHttpRequest()
C.F.eG(y,"GET",a)
W.af(y,"loadend",new D.hJ(new P.bE(z,[null]),y),!1,W.n3)
y.send("")
return z},
hG:function(a){var z,y,x
z=new P.G(0,$.r,null,[null])
y=document.createElement("img")
x=new W.ae(y,"load",!1,[W.aa])
x.gen(x).ap(new D.hH(new P.bE(z,[null]),y))
y.src=a
return z},
hJ:{"^":"f:0;a,b",
$1:function(a){this.a.a7(0,C.O.eg(0,W.kC(this.b.response)))}},
hH:{"^":"f:0;a,b",
$1:function(a){return this.a.a7(0,this.b)}},
hz:{"^":"d;a,b,c",
de:function(a){var z
a=document
z=W.bp
W.af(a,"keydown",new D.hB(this),!1,z)
W.af(a,"keyup",new D.hC(this),!1,z)},
p:{
hA:function(a){var z=P.E
z=new D.hz(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z))
z.de(a)
return z}}},
hB:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.B(0,J.cL(a))
z.b.B(0,a.which)}},
hC:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.co(0,J.cL(a))
z.c.B(0,a.which)}},
hR:{"^":"d;a,b,c,d,e,f,r,x",
dg:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gaR(a)
W.af(y.a,y.b,new D.hT(this),!1,H.C(y,0))
y=z.gaQ(a)
W.af(y.a,y.b,new D.hU(this),!1,H.C(y,0))
y=z.gaS(a)
W.af(y.a,y.b,new D.hV(this),!1,H.C(y,0))
z=z.gaT(a)
W.af(z.a,z.b,new D.hW(this),!1,H.C(z,0))},
p:{
hS:function(a){var z=P.E
z=new D.hR(P.X(null,null,null,z),P.X(null,null,null,z),P.X(null,null,null,z),0,0,0,0,0)
z.dg(a)
return z}}},
hT:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ao(a)
y=this.a
y.r=z.gcm(a).a
y.x=z.gcm(a).b
y.d=z.geF(a).a
y.e=a.movementY}},
hU:{"^":"f:5;a",
$1:function(a){var z=J.e(a)
z.ao(a)
P.W("BUTTON "+H.c(z.gbV(a)))
z=this.a
z.a.B(0,a.button)
z.b.B(0,a.button)}},
hV:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.ao(a)
y=this.a
y.a.co(0,z.gbV(a))
y.c.B(0,a.button)}},
hW:{"^":"f:20;a",
$1:function(a){var z=J.e(a)
z.ao(a)
this.a.f=z.gej(a)}},
i2:{"^":"fH;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
be:function(a){var z,y
z=C.r.eq(a,0,new A.l2())
if(typeof z!=="number")return H.t(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
l2:{"^":"f:21;",
$2:function(a,b){var z,y
z=J.aA(a,J.a7(b))
if(typeof z!=="number")return H.t(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",ah:{"^":"d;by:a<",
D:function(a){var z,y
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=9)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=9)return H.b(z,b)
z[b]=c},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ah){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gA:function(a){return A.be(this.a)},
U:function(a){var z,y,x
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
return new T.m(z)},
l:function(a,b){var z=new T.ah(new Float32Array(9))
z.D(this)
z.B(0,b)
return z},
G:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.ah(z)
y.D(this)
x=b.gby()
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
ed:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.D(a)
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
B:function(a,b){var z,y
z=b.gby()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))
y[4]=C.a.l(y[4],z.h(0,4))
y[5]=C.a.l(y[5],z.h(0,5))
y[6]=C.a.l(y[6],z.h(0,6))
y[7]=C.a.l(y[7],z.h(0,7))
y[8]=C.a.l(y[8],z.h(0,8))}},F:{"^":"d;bz:a<",
D:function(a){var z,y
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n[3] "+this.U(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=16)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=16)return H.b(z,b)
z[b]=c},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.F){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gA:function(a){return A.be(this.a)},
U:function(a){var z,y,x
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
return new T.Y(z)},
l:function(a,b){var z=new T.F(new Float32Array(16))
z.D(this)
z.B(0,b)
return z},
G:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.F(z)
y.D(this)
x=b.gbz()
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
P:function(){var z=this.a
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
B:function(a,b){var z,y
z=b.gbz()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))
y[4]=C.a.l(y[4],z.h(0,4))
y[5]=C.a.l(y[5],z.h(0,5))
y[6]=C.a.l(y[6],z.h(0,6))
y[7]=C.a.l(y[7],z.h(0,7))
y[8]=C.a.l(y[8],z.h(0,8))
y[9]=C.a.l(y[9],z.h(0,9))
y[10]=C.a.l(y[10],z.h(0,10))
y[11]=C.a.l(y[11],z.h(0,11))
y[12]=C.a.l(y[12],z.h(0,12))
y[13]=C.a.l(y[13],z.h(0,13))
y[14]=C.a.l(y[14],z.h(0,14))
y[15]=C.a.l(y[15],z.h(0,15))},
ck:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},ad:{"^":"d;bH:a<",
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.ad){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gA:function(a){return A.be(this.a)},
G:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbH()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return new T.ad(z)},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.ad(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.B(0,b)
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
B:function(a,b){var z,y
z=b.gbH()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))},
Z:function(a){var z,y
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
return new T.ad(z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},m:{"^":"d;bI:a<",
a8:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
D:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.m){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gA:function(a){return A.be(this.a)},
G:function(a,b){var z=new T.m(new Float32Array(3))
z.D(this)
z.bc(0,b)
return z},
l:function(a,b){var z=new T.m(new Float32Array(3))
z.D(this)
z.B(0,b)
return z},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=3)return H.b(z,b)
return z[b]},
i:function(a,b,c){var z=this.a
if(b>>>0!==b||b>=3)return H.b(z,b)
z[b]=c},
gj:function(a){return Math.sqrt(this.gaN())},
gaN:function(){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return y*y+x*x+z*z},
aP:function(a){var z,y,x
z=Math.sqrt(this.gaN())
if(z===0)return 0
y=1/z
x=this.a
x[0]=x[0]*y
x[1]=x[1]*y
x[2]=x[2]*y
return z},
aK:function(a){var z,y
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
z=new T.m(new Float32Array(3))
z.a8(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
B:function(a,b){var z,y
z=b.gbI()
y=this.a
y[0]=y[0]+z[0]
y[1]=y[1]+z[1]
y[2]=y[2]+z[2]},
bc:function(a,b){var z,y
z=b.gbI()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
cO:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
b8:function(a){var z=new T.m(new Float32Array(3))
z.D(this)
z.cO(0,a)
return z},
Z:function(a){var z=new T.m(new Float32Array(3))
z.D(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
p:{
cn:function(a,b,c){var z=new T.m(new Float32Array(3))
z.a8(a,b,c)
return z},
e1:function(a){var z=new Float32Array(3)
z[2]=a
z[1]=a
z[0]=a
return new T.m(z)}}},Y:{"^":"d;bJ:a<",
D:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+","+H.c(z[3])},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.Y){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gA:function(a){return A.be(this.a)},
G:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.Y(z)
y.D(this)
x=b.gbJ()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z=new T.Y(new Float32Array(4))
z.D(this)
z.B(0,b)
return z},
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
B:function(a,b){var z,y
z=b.gbJ()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))},
Z:function(a){var z=new T.Y(new Float32Array(4))
z.D(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gE:function(a){return this.a[2]},
gag:function(a){return this.a[3]}}}],["","",,L,{"^":"",
eL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z={}
y=document
x=new R.iu(0,0,null,null,null,null)
x.dk(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fJ(null,w)
y=J.fk(w,"webgl2",P.dp(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=y
if(y==null)H.a0(P.di('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
u="ChronosGL Config: "+H.c(J.fl(y))
if($.eF>0)P.W("I: "+u)
J.f0(y,0,0,0,1)
J.aZ(y,2929)
J.aZ(y,2884)
y=new Float32Array(3)
u=D.hA(null)
t=D.hS(w)
s=new T.F(new Float32Array(16))
s.P()
r=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new D.i2(0.3,0,0,0,new T.m(y),-0.02,u,t,s,new T.m(r),new T.m(q),new T.m(p),new T.m(new Float32Array(3)),"camera:orbit",!1,!0)
y=new T.F(new Float32Array(16))
y.P()
u=new T.F(new Float32Array(16))
u.P()
n=new G.i3(o,50,1,0.01,1000,y,u,new T.F(new Float32Array(16)),P.O(),"perspective",!1,!0)
n.bo()
y=$.$get$eB()
u=$.$get$ex()
t=$.$get$ez()
s=new Float32Array(16)
r=new Float32Array(16)
q=[]
p=new Float32Array(64)
m=new G.hk(q,p,new Float32Array(4),P.O(),"illumination",!1,!0)
q.push(new G.fW(y,u,t,40,new T.F(s),new T.F(r),1,"dir",!1,!0))
u=H.u([],[A.ci])
l=new R.ig(w,n,null,v,u,17664,0,0,0,0,"main",!1,!0)
l.dh("main",v,null)
l.eK(null)
W.af(window,"resize",l.geJ(),!1,W.aa)
t=G.dC("Fixed",v,$.$get$eQ(),$.$get$eP())
s=[]
u.push(new A.ci(t,[n,m],s,"Fixed",!1,!0))
k=G.dt("light")
k.d.i(0,"uColor",$.$get$d3())
j=G.du("dirLightViz",t.d,1,t.e.x)
j.bi(new Float32Array(3))
j.bg([0,0])
R.iN(j,40,10,y)
y=new Float32Array(9)
t=new T.F(new Float32Array(16))
t.P()
r=new T.F(new Float32Array(16))
r.P()
q=new Float32Array(3)
p=new Float32Array(3)
i=new Float32Array(3)
s.push(new A.ch(k,j,[],new T.ah(y),t,r,new T.m(q),new T.m(p),new T.m(i),new T.m(new Float32Array(3)),"pointLight",!1,!0))
y=G.dC("main",v,$.$get$eS(),$.$get$eD())
h=new A.ci(y,[n,m],[],"main",!1,!0)
u.push(h)
z.a=0
P.hd([D.hI("../asset/leeperrysmith/LeePerrySmith.js"),D.hG("../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg")],null,!1).ap(new L.le(v,h,new L.ld(z,o,l,x)))},
ld:{"^":"f:22;a,b,c,d",
$1:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a
y=J.aw(a7)
y.G(a7,z.a)
z.a=y.l(a7,0)
y=this.b
y.go+=0.001
x=y.r1
w=x.a
if(w.v(0,0)||w.v(0,1)){w=y.go
v=x.d
if(typeof v!=="number")return v.b6()
y.go=w+v*0.01
v=y.id
w=x.e
if(typeof w!=="number")return w.b6()
y.id=v+w*0.01}w=y.k4
v=w.a
if(v.v(0,37))y.go+=0.03
else if(v.v(0,39))y.go-=0.03
if(v.v(0,38))y.id+=0.03
else if(v.v(0,40))y.id-=0.03
if(v.v(0,33))y.fy*=0.99
else if(v.v(0,34))y.fy*=1.01
if(v.v(0,32)){y.go=0
y.id=0}v=x.f
if(typeof v!=="number")return v.b6()
v=y.fy-v*y.k3
if(v>0)y.fy=v
v=C.a.e9(y.id,-1.4707963267948965,1.4707963267948965)
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
y.cj(t)
t=y.f
v=t.a
v[0]=q[2]
v[1]=q[6]
v[2]=q[10]
y=-y.k1
p=Math.sqrt(t.gaN())
o=v[0]/p
n=v[1]/p
m=v[2]/p
l=Math.cos(y)
k=Math.sin(y)
j=1-l
i=o*o*j+l
y=m*k
h=o*n*j-y
v=n*k
g=o*m*j+v
f=n*o*j+y
e=n*n*j+l
y=o*k
d=n*m*j-y
c=m*o*j-v
b=m*n*j+y
a=m*m*j+l
y=q[0]
v=q[4]
t=q[8]
u=q[1]
r=q[5]
a0=q[9]
a1=q[2]
a2=q[6]
a3=q[10]
a4=q[3]
a5=q[7]
a6=q[11]
q[0]=y*i+v*f+t*c
q[1]=u*i+r*f+a0*c
q[2]=a1*i+a2*f+a3*c
q[3]=a4*i+a5*f+a6*c
q[4]=y*h+v*e+t*b
q[5]=u*h+r*e+a0*b
q[6]=a1*h+a2*e+a3*b
q[7]=a4*h+a5*e+a6*b
q[8]=y*g+v*d+t*a
q[9]=u*g+r*d+a0*a
q[10]=a1*g+a2*d+a3*a
q[11]=a4*g+a5*d+a6*a
w.c.Y(0)
w.b.Y(0)
x.e=0
x.d=0
x.f=0
x.c.Y(0)
x.b.Y(0)
this.c.d6()
C.a8.ge2(window).ap(this)
this.d.dn(z.a)}},
le:{"^":"f:23;a,b,c",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.a
y=J.D(a)
x=y.h(a,1)
w=new G.iI(!1,!1,!1,!0,1,9729,9729)
v=J.f3(z.a)
u=new G.hm(x,"../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg",v,3553,z,w)
J.aY(z.a,3553,v)
J.fq(z.a,37440,1)
u.dj(x)
w.dd(z,3553)
J.fm(z.a)
J.aY(z.a,3553,null)
t=G.dt("mat")
z=t.d
z.i(0,"uColor",$.$get$ey())
z.i(0,"uShininess",10)
z.i(0,"uBumpMap",u)
z.i(0,"uBumpScale",12)
s=Y.hn(y.h(a,0))
if(0>=s.length)return H.b(s,0)
P.W(s[0])
y=this.b
z=y.d
if(0>=s.length)return H.b(s,0)
x=s[0]
r=G.du("../asset/leeperrysmith/LeePerrySmith.js",z.d,4,z.e.x)
r.bi(G.c2(x.d,null))
r.bg(x.da())
G.ju(x,r)
z=new Float32Array(9)
x=new T.F(new Float32Array(16))
x.P()
w=new T.F(new Float32Array(16))
w.P()
v=new Float32Array(3)
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=[]
m=new Float32Array(9)
l=new T.F(new Float32Array(16))
l.P()
k=new T.F(new Float32Array(16))
k.P()
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
g=new A.ch(null,null,n,new T.ah(m),l,k,new T.m(j),new T.m(i),new T.m(h),new T.m(new Float32Array(3)),"wrapper",!1,!0)
n.push(new A.ch(t,r,[],new T.ah(z),x,w,new T.m(v),new T.m(q),new T.m(p),new T.m(o),r.a,!1,!0))
z=new T.m(new Float32Array(3))
z.a8(100,0,0)
g.cj(z)
y.f.push(g)
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.dk.prototype}if(typeof a=="string")return J.aK.prototype
if(a==null)return J.hv.prototype
if(typeof a=="boolean")return J.hu.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.d)return a
return J.bb(a)}
J.kZ=function(a){if(typeof a=="number")return J.aJ.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.d)return a
return J.bb(a)}
J.D=function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.d)return a
return J.bb(a)}
J.av=function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.d)return a
return J.bb(a)}
J.aw=function(a){if(typeof a=="number")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.b8.prototype
return a}
J.l_=function(a){if(typeof a=="number")return J.aJ.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.b8.prototype
return a}
J.eG=function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.b8.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.d)return a
return J.bb(a)}
J.aA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kZ(a).l(a,b)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).F(a,b)}
J.T=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aw(a).ah(a,b)}
J.aX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aw(a).a0(a,b)}
J.eT=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aw(a).G(a,b)}
J.aB=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.eK(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.D(a).h(a,b)}
J.cC=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.eK(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.av(a).i(a,b,c)}
J.eU=function(a,b,c,d){return J.e(a).dO(a,b,c,d)}
J.cD=function(a,b){return J.e(a).bK(a,b)}
J.eV=function(a,b,c,d){return J.e(a).bL(a,b,c,d)}
J.cE=function(a,b,c){return J.e(a).bN(a,b,c)}
J.eW=function(a,b){return J.e(a).e4(a,b)}
J.bN=function(a,b,c){return J.e(a).bO(a,b,c)}
J.eX=function(a,b,c){return J.e(a).bQ(a,b,c)}
J.aY=function(a,b,c){return J.e(a).bR(a,b,c)}
J.bh=function(a,b){return J.e(a).e7(a,b)}
J.eY=function(a,b){return J.e(a).bS(a,b)}
J.eZ=function(a,b,c){return J.e(a).bT(a,b,c)}
J.cF=function(a,b,c,d){return J.e(a).bU(a,b,c,d)}
J.f_=function(a,b){return J.av(a).bX(a,b)}
J.f0=function(a,b,c,d,e){return J.e(a).bY(a,b,c,d,e)}
J.cG=function(a,b){return J.eG(a).ea(a,b)}
J.f1=function(a,b){return J.l_(a).S(a,b)}
J.bO=function(a,b,c){return J.D(a).ec(a,b,c)}
J.bP=function(a){return J.e(a).c0(a)}
J.f2=function(a){return J.e(a).c1(a)}
J.f3=function(a){return J.e(a).c3(a)}
J.f4=function(a){return J.e(a).ef(a)}
J.f5=function(a,b){return J.e(a).c5(a,b)}
J.bQ=function(a,b){return J.e(a).c6(a,b)}
J.f6=function(a,b,c,d){return J.e(a).c7(a,b,c,d)}
J.f7=function(a,b,c,d,e){return J.e(a).ek(a,b,c,d,e)}
J.f8=function(a,b,c,d,e){return J.e(a).c8(a,b,c,d,e)}
J.f9=function(a,b,c,d,e,f){return J.e(a).el(a,b,c,d,e,f)}
J.cH=function(a,b){return J.av(a).q(a,b)}
J.aZ=function(a,b){return J.e(a).c9(a,b)}
J.fa=function(a,b){return J.e(a).ca(a,b)}
J.fb=function(a){return J.e(a).em(a)}
J.cI=function(a,b){return J.av(a).u(a,b)}
J.cJ=function(a){return J.e(a).ge3(a)}
J.fc=function(a){return J.e(a).gaL(a)}
J.aC=function(a){return J.e(a).gO(a)}
J.a7=function(a){return J.n(a).gA(a)}
J.ak=function(a){return J.av(a).gI(a)}
J.fd=function(a){return J.e(a).gC(a)}
J.H=function(a){return J.D(a).gj(a)}
J.fe=function(a){return J.e(a).gcl(a)}
J.ff=function(a){return J.e(a).gaU(a)}
J.cK=function(a){return J.e(a).gW(a)}
J.fg=function(a){return J.e(a).geO(a)}
J.fh=function(a){return J.e(a).gcu(a)}
J.fi=function(a){return J.e(a).gag(a)}
J.cL=function(a){return J.e(a).geW(a)}
J.bR=function(a){return J.e(a).gm(a)}
J.bS=function(a){return J.e(a).gn(a)}
J.cM=function(a){return J.e(a).gE(a)}
J.fj=function(a){return J.e(a).b_(a)}
J.fk=function(a,b,c){return J.e(a).cN(a,b,c)}
J.fl=function(a){return J.e(a).aq(a)}
J.fm=function(a){return J.e(a).b0(a)}
J.fn=function(a,b){return J.e(a).b1(a,b)}
J.fo=function(a,b,c){return J.e(a).b2(a,b,c)}
J.cN=function(a,b,c){return J.e(a).b5(a,b,c)}
J.fp=function(a,b){return J.e(a).ci(a,b)}
J.fq=function(a,b,c){return J.e(a).cn(a,b,c)}
J.cO=function(a){return J.av(a).eI(a)}
J.fr=function(a,b){return J.e(a).sal(a,b)}
J.fs=function(a,b,c,d){return J.e(a).bb(a,b,c,d)}
J.ft=function(a,b,c,d,e,f,g){return J.e(a).cq(a,b,c,d,e,f,g)}
J.fu=function(a,b,c,d){return J.e(a).cr(a,b,c,d)}
J.cP=function(a,b,c,d){return J.e(a).cs(a,b,c,d)}
J.al=function(a){return J.aw(a).eP(a)}
J.cQ=function(a){return J.aw(a).eQ(a)}
J.fv=function(a){return J.eG(a).eS(a)}
J.aD=function(a){return J.n(a).k(a)}
J.fw=function(a,b,c,d){return J.e(a).eU(a,b,c,d)}
J.fx=function(a,b,c){return J.e(a).cv(a,b,c)}
J.fy=function(a,b,c){return J.e(a).cw(a,b,c)}
J.bT=function(a,b,c){return J.e(a).cz(a,b,c)}
J.fz=function(a,b,c){return J.e(a).cA(a,b,c)}
J.cR=function(a,b,c){return J.e(a).cB(a,b,c)}
J.cS=function(a,b,c){return J.e(a).cC(a,b,c)}
J.cT=function(a,b,c){return J.e(a).cD(a,b,c)}
J.cU=function(a,b,c,d){return J.e(a).cE(a,b,c,d)}
J.cV=function(a,b,c,d){return J.e(a).cF(a,b,c,d)}
J.fA=function(a,b){return J.e(a).cH(a,b)}
J.fB=function(a,b,c){return J.e(a).eV(a,b,c)}
J.fC=function(a,b,c,d,e,f,g){return J.e(a).cI(a,b,c,d,e,f,g)}
J.fD=function(a,b,c,d,e){return J.e(a).cK(a,b,c,d,e)}
I.ay=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.u=W.bV.prototype
C.n=W.fQ.prototype
C.E=W.fX.prototype
C.F=W.hi.prototype
C.G=J.h.prototype
C.b=J.aH.prototype
C.o=J.dk.prototype
C.c=J.dl.prototype
C.a=J.aJ.prototype
C.i=J.aK.prototype
C.N=J.aL.prototype
C.r=H.hX.prototype
C.S=W.hZ.prototype
C.y=J.i4.prototype
C.D=W.iG.prototype
C.t=J.b8.prototype
C.a8=W.iP.prototype
C.d=new P.jR()
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
C.O=new P.hx(null,null)
C.P=new P.hy(null)
C.Q=H.u(I.ay(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.R=I.ay(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.x=I.ay([])
C.p=H.u(I.ay(["bind","if","ref","repeat","syntax"]),[P.j])
C.q=H.u(I.ay(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.T=new G.x("vec3","vertex btangents",0)
C.e=new G.x("vec3","",0)
C.U=new G.x("vec4","delta from light",0)
C.m=new G.x("","",0)
C.z=new G.x("vec3","vertex coordinates",0)
C.V=new G.x("vec3","vertex binormals",0)
C.A=new G.x("vec4","for wireframe",0)
C.W=new G.x("vec4","per vertex color",0)
C.X=new G.x("float","for normal maps",0)
C.j=new G.x("mat4","",0)
C.Z=new G.x("mat4","",4)
C.Y=new G.x("mat4","",128)
C.f=new G.x("float","",0)
C.a_=new G.x("float","",4)
C.a0=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.a1=new G.x("float","for bump maps",0)
C.a2=new G.x("vec2","texture uvs",0)
C.a3=new G.x("float","time since program start in sec",0)
C.k=new G.x("vec2","",0)
C.a4=new G.x("samplerCube","",0)
C.l=new G.x("vec4","",0)
C.a5=new G.x("vec3","vertex normals",0)
C.a6=new G.x("sampler2DShadow","",0)
C.B=new G.x("vec3","per vertex color",0)
C.C=new G.x("mat3","",0)
C.a7=new G.x("vec3","vertex tangents",0)
$.a1=0
$.aE=null
$.cZ=null
$.eI=null
$.et=null
$.eO=null
$.bJ=null
$.bK=null
$.cz=null
$.aq=null
$.aS=null
$.aT=null
$.cu=!1
$.r=C.d
$.a9=null
$.c0=null
$.dg=null
$.df=null
$.dc=null
$.db=null
$.da=null
$.d9=null
$.eF=0
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
I.$lazy(y,x,w)}})(["d8","$get$d8",function(){return H.eH("_$dart_dartClosure")},"ca","$get$ca",function(){return H.eH("_$dart_js")},"dP","$get$dP",function(){return H.a3(H.bC({
toString:function(){return"$receiver$"}}))},"dQ","$get$dQ",function(){return H.a3(H.bC({$method$:null,
toString:function(){return"$receiver$"}}))},"dR","$get$dR",function(){return H.a3(H.bC(null))},"dS","$get$dS",function(){return H.a3(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dW","$get$dW",function(){return H.a3(H.bC(void 0))},"dX","$get$dX",function(){return H.a3(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dU","$get$dU",function(){return H.a3(H.dV(null))},"dT","$get$dT",function(){return H.a3(function(){try{null.$method$}catch(z){return z.message}}())},"dZ","$get$dZ",function(){return H.a3(H.dV(void 0))},"dY","$get$dY",function(){return H.a3(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cp","$get$cp",function(){return P.iV()},"c4","$get$c4",function(){return P.jh(null,P.b3)},"aU","$get$aU",function(){return[]},"d7","$get$d7",function(){return{}},"e9","$get$e9",function(){return P.ce(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cr","$get$cr",function(){return P.O()},"dG","$get$dG",function(){return new G.dN(1281,0,4294967295)},"cY","$get$cY",function(){return new G.dM(1281,1281,1281)},"Z","$get$Z",function(){return P.dp(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.B,"aColorAlpha",C.W,"aPosition",C.z,"aTexUV",C.a2,"aNormal",C.a5,"aBinormal",C.V,"aCenter",C.A,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a7,"aBitangent",C.T,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.B,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.z,"vPositionFromLight",C.U,"vCenter",C.A,"vDepth",C.a0,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.C,"uConvolutionMatrix",C.C,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a6,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a4,"uAnimationTable",C.h,"uTime",C.a3,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Y,"uLightDescs",C.Z,"uLightCount",C.f,"uLightTypes",C.a_,"uBumpScale",C.a1,"uNormalScale",C.X])},"d3","$get$d3",function(){return T.cn(1,1,0)},"eQ","$get$eQ",function(){var z=G.bt("SolidColor")
z.be(["aPosition"])
z.a3(["uPerspectiveViewMatrix","uModelMatrix"])
z.au(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"eP","$get$eP",function(){var z=G.bt("SolidColorF")
z.a3(["uColor"])
z.au(["oFragColor = vec4( uColor, 1.0 );"])
return z},"eS","$get$eS",function(){var z=G.bt("LightBlinnPhongFancyV")
z.be(["aPosition","aNormal","aTexUV"])
z.bh(["vPosition","vNormal","vTexUV"])
z.a3(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
z.au(["vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\ngl_Position = uPerspectiveViewMatrix * pos;\nvPosition = pos.xyz;\nvTexUV = aTexUV;\nvNormal = uNormalMatrix * aNormal;\n"])
return z},"eD","$get$eD",function(){var z=G.bt("LightBlinnPhongFancyF")
z.bh(["vPosition","vNormal","vTexUV"])
z.a3(["uLightDescs","uLightTypes","uShininess"])
z.a3(["uEyePosition","uColor"])
z.a3(["uBumpScale","uBumpMap"])
z.bn(["vec2 uv = dHdxy_fwd(vTexUV, uBumpScale, uBumpMap);\nvec3 normal =normalize(vNormal);\nnormal = perturbNormalArb(vPosition - uEyePosition, normal, uv);\nColorComponents acc = CombinedLight(vPosition - uEyePosition,\n                                    normal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\noFragColor.rgb = acc.diffuse + acc.specular + uColor;\noFragColor.a = 1.0;\n\n"],["vec2 dHdxy_fwd(vec2 uv, float scale, sampler2D map) {\n    vec2 dSTdx = dFdx( uv );\n    vec2 dSTdy = dFdy( uv );\n\n    float Hll = scale * texture(map, uv ).x;\n    float dBx = scale * texture(map, uv + dSTdx ).x - Hll;\n    float dBy = scale * texture(map, uv + dSTdy ).x - Hll;\n\n    return vec2( dBx, dBy );\n}\n\nvec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {\n    surf_norm = normalize  (surf_norm);\n    vec3 vSigmaX = dFdx( surf_pos );\n    vec3 vSigmaY = dFdy( surf_pos );\n    vec3 vN = surf_norm;            // normalized\n\n    vec3 R1 = cross( vSigmaY, vN );\n    vec3 R2 = cross( vN, vSigmaX );\n\n    float fDet = dot( vSigmaX, R1 );\n\n    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n    return normalize( abs( fDet ) * surf_norm - vGrad );\n}\n","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"ey","$get$ey",function(){return T.cn(0.333,0.157,0.067)},"eB","$get$eB",function(){return T.cn(-1,-1,0)},"ex","$get$ex",function(){return T.e1(0.3)},"ez","$get$ez",function(){return T.e1(0.133)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.v},{func:1,args:[W.Q]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.j,args:[P.E]},{func:1,args:[W.bp]},{func:1,ret:P.cw,args:[W.am,P.j,P.j,W.cq]},{func:1,args:[,P.j]},{func:1,args:[P.j]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aQ]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aQ]},{func:1,ret:P.N},{func:1,ret:[P.N,[P.i,P.j]]},{func:1,v:true,args:[W.v,W.v]},{func:1,v:true,args:[W.aa]},{func:1,args:[W.aR]},{func:1,args:[P.E,P.d]},{func:1,v:true,args:[P.aV]},{func:1,args:[P.i]},{func:1,ret:P.E,args:[,,]}]
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
if(x==y)H.ll(d||a)
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
Isolate.au=a.au
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
if(typeof dartMainRunner==="function")dartMainRunner(L.eL,[])
else L.eL([])})})()
//# sourceMappingURL=bumpmap.dart.js.map
