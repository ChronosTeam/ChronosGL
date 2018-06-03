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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cl"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cl"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cl(this,d,e,true,[],a0).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ar=function(){}
var dart=[["","",,H,{"^":"",lO:{"^":"c;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
co:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b4:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cn==null){H.kt()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.dO("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c_()]
if(v!=null)return v
v=H.kx(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$c_(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"c;",
F:function(a,b){return a===b},
gw:function(a){return H.aH(a)},
k:["cI",function(a){return"Instance of '"+H.aI(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|ResizeObserver|ResizeObserverEntry|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|Touch|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h1:{"^":"h;",
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$isck:1},
d8:{"^":"h;",
F:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
$isaX:1},
c0:{"^":"h;",
gw:function(a){return 0},
k:["cK",function(a){return String(a)}]},
hx:{"^":"c0;"},
b1:{"^":"c0;"},
aG:{"^":"c0;",
k:function(a){var z=a[$.$get$cS()]
return z==null?this.cK(a):J.ay(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aC:{"^":"h;$ti",
M:function(a,b){var z,y
if(!!a.fixed$length)H.V(P.p("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.F)(b),++y)a.push(b[y])},
v:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.I(a))}},
ab:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.b(a[x])
if(x>=z)return H.e(y,x)
y[x]=w}return y.join(b)},
bb:function(a,b){return H.dt(a,b,null,H.A(a,0))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cC:function(a,b,c,d,e){var z,y,x,w,v
if(!!a.immutable$list)H.V(P.p("setRange"))
P.hF(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$isi){x=e
w=d}else{w=y.bb(d,e).el(0,!1)
x=0}y=J.ab(w)
if(x+z>y.gj(w))throw H.a(H.fZ())
if(x<b)for(v=z-1;v>=0;--v)a[b+v]=y.h(w,x+v)
else for(v=0;v<z;++v)a[b+v]=y.h(w,x+v)},
ae:function(a,b,c,d){return this.cC(a,b,c,d,0)},
bF:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.a(P.I(a))}return!1},
cD:function(a,b){if(!!a.immutable$list)H.V(P.p("sort"))
H.hS(a,J.k1())},
at:function(a){return this.cD(a,null)},
u:function(a,b){var z
for(z=0;z<a.length;++z)if(J.H(a[z],b))return!0
return!1},
k:function(a){return P.bZ(a,"[","]")},
gH:function(a){return new J.fk(a,a.length,0,null,[H.A(a,0)])},
gw:function(a){return H.aH(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.V(P.p("set length"))
if(b<0)throw H.a(P.am(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.V(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aa(a,b))
if(b>=a.length||b<0)throw H.a(H.aa(a,b))
a[b]=c},
n:function(a,b){var z,y
z=C.b.n(a.length,C.b.gj(b))
y=H.y([],[H.A(a,0)])
this.sj(y,z)
this.ae(y,0,a.length,a)
this.ae(y,a.length,z,b)
return y},
$ism:1,
$asm:I.ar,
$isi:1,
p:{
aD:function(a){a.fixed$length=Array
return a},
lM:[function(a,b){return J.eI(a,b)},"$2","k1",8,0,23]}},
lN:{"^":"aC;$ti"},
fk:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.F(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aE:{"^":"h;",
P:function(a,b){var z
if(typeof b!=="number")throw H.a(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gal(b)
if(this.gal(a)===z)return 0
if(this.gal(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gal:function(a){return a===0?1/a<0:a<0},
ek:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.p(""+a+".toInt()"))},
dO:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.a(P.p(""+a+".ceil()"))},
dP:function(a,b,c){if(this.P(b,c)>0)throw H.a(H.U(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
en:function(a,b){var z
if(b>20)throw H.a(P.am(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gal(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a+b},
I:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a-b},
a3:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a/b},
cM:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.by(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.by(a,b)},
by:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.p("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bw:function(a,b){var z
if(a>0)z=this.dA(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dA:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a<b},
ad:function(a,b){if(typeof b!=="number")throw H.a(H.U(b))
return a>b},
$isaj:1,
$isaP:1},
d7:{"^":"aE;",$isB:1},
d6:{"^":"aE;"},
aF:{"^":"h;",
dQ:function(a,b){if(b>=a.length)H.V(H.aa(a,b))
return a.charCodeAt(b)},
bp:function(a,b){if(b>=a.length)throw H.a(H.aa(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.a(P.fj(b,null,null))
return a+b},
cF:function(a,b,c){var z
if(c>a.length)throw H.a(P.am(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
cE:function(a,b){return this.cF(a,b,0)},
be:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.V(H.U(c))
if(b<0)throw H.a(P.bl(b,null,null))
if(typeof c!=="number")return H.L(c)
if(b>c)throw H.a(P.bl(b,null,null))
if(c>a.length)throw H.a(P.bl(c,null,null))
return a.substring(b,c)},
cG:function(a,b){return this.be(a,b,null)},
em:function(a){return a.toLowerCase()},
dR:function(a,b,c){if(c>a.length)throw H.a(P.am(c,0,a.length,null,null))
return H.kD(a,b,c)},
P:function(a,b){var z
if(typeof b!=="string")throw H.a(H.U(b))
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
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.a(H.aa(a,b))
return a[b]},
$ism:1,
$asm:I.ar,
$isl:1}}],["","",,H,{"^":"",
d5:function(){return new P.bo("No element")},
h_:function(){return new P.bo("Too many elements")},
fZ:function(){return new P.bo("Too few elements")},
hS:function(a,b){H.b_(a,0,J.a2(a)-1,b)},
b_:function(a,b,c,d){if(c-b<=32)H.hR(a,b,c,d)
else H.hQ(a,b,c,d)},
hR:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.ab(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.N(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.i(a,w,y.h(a,v))
w=v}y.i(a,w,x)}},
hQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.a0(c-b+1,6)
y=b+z
x=c-z
w=C.b.a0(b+c,2)
v=w-z
u=w+z
t=J.ab(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.N(d.$2(s,r),0)){n=r
r=s
s=n}if(J.N(d.$2(p,o),0)){n=o
o=p
p=n}if(J.N(d.$2(s,q),0)){n=q
q=s
s=n}if(J.N(d.$2(r,q),0)){n=q
q=r
r=n}if(J.N(d.$2(s,p),0)){n=p
p=s
s=n}if(J.N(d.$2(q,p),0)){n=p
p=q
q=n}if(J.N(d.$2(r,o),0)){n=o
o=r
r=n}if(J.N(d.$2(r,q),0)){n=q
q=r
r=n}if(J.N(d.$2(p,o),0)){n=o
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
h=J.n(i)
if(h.F(i,0))continue
if(h.a4(i,0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.aO(i)
if(h.ad(i,0)){--l
continue}else{g=l-1
if(h.a4(i,0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
l=g
m=f
break}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.aR(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.N(d.$2(j,p),0))for(;!0;)if(J.N(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aR(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
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
H.b_(a,b,m-2,d)
H.b_(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.H(d.$2(t.h(a,m),r),0);)++m
for(;J.H(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.H(d.$2(j,r),0)){if(k!==m){t.i(a,k,t.h(a,m))
t.i(a,m,j)}++m}else if(J.H(d.$2(j,p),0))for(;!0;)if(J.H(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.aR(d.$2(t.h(a,l),r),0)){t.i(a,k,t.h(a,m))
f=m+1
t.i(a,m,t.h(a,l))
t.i(a,l,j)
m=f}else{t.i(a,k,t.h(a,l))
t.i(a,l,j)}l=g
break}}H.b_(a,m,l,d)}else H.b_(a,m,l,d)},
bR:{"^":"bg;$ti"},
bi:{"^":"bR;$ti",
gH:function(a){return new H.dd(this,this.gj(this),0,null,[H.b5(this,"bi",0)])},
v:function(a,b){var z,y
z=this.gj(this)
for(y=0;y<z;++y){b.$1(this.q(0,y))
if(z!==this.gj(this))throw H.a(P.I(this))}},
aZ:function(a,b){return this.cJ(0,b)}},
i6:{"^":"bi;a,b,c,$ti",
d2:function(a,b,c,d){},
gdk:function(){var z=J.a2(this.a)
return z},
gdB:function(){var z,y
z=J.a2(this.a)
y=this.b
if(y>z)return z
return y},
gj:function(a){var z,y
z=J.a2(this.a)
y=this.b
if(y>=z)return 0
return z-y},
q:function(a,b){var z,y
z=this.gdB()+b
if(b>=0){y=this.gdk()
if(typeof y!=="number")return H.L(y)
y=z>=y}else y=!0
if(y)throw H.a(P.w(b,this,"index",null,null))
return J.cv(this.a,z)},
el:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.ab(y)
w=x.gj(y)
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.y(u,this.$ti)
for(s=0;s<v;++s){u=x.q(y,z+s)
if(s>=t.length)return H.e(t,s)
t[s]=u
if(x.gj(y)<w)throw H.a(P.I(this))}return t},
p:{
dt:function(a,b,c,d){var z=new H.i6(a,b,c,[d])
z.d2(a,b,c,d)
return z}}},
dd:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.ab(z)
x=y.gj(z)
if(this.b!==x)throw H.a(P.I(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.q(z,w);++this.c
return!0}},
hc:{"^":"bi;a,b,$ti",
gj:function(a){return J.a2(this.a)},
q:function(a,b){return this.b.$1(J.cv(this.a,b))},
$asbR:function(a,b){return[b]},
$asbi:function(a,b){return[b]},
$asbg:function(a,b){return[b]}},
dQ:{"^":"bg;a,b,$ti",
gH:function(a){return new H.ih(J.aU(this.a),this.b,this.$ti)}},
ih:{"^":"h0;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gB(z))===!0)return!0
return!1},
gB:function(a){var z=this.a
return z.gB(z)}},
be:{"^":"c;$ti"}}],["","",,H,{"^":"",
kl:function(a){return init.types[a]},
kw:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$iso},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ay(a)
if(typeof z!=="string")throw H.a(H.U(a))
return z},
aH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aI:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.n(a).$isb1){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bp(w,0)===36)w=C.i.cG(w,1)
r=H.bD(H.as(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
D:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hE:function(a){return a.b?H.D(a).getUTCFullYear()+0:H.D(a).getFullYear()+0},
hC:function(a){return a.b?H.D(a).getUTCMonth()+1:H.D(a).getMonth()+1},
hy:function(a){return a.b?H.D(a).getUTCDate()+0:H.D(a).getDate()+0},
hz:function(a){return a.b?H.D(a).getUTCHours()+0:H.D(a).getHours()+0},
hB:function(a){return a.b?H.D(a).getUTCMinutes()+0:H.D(a).getMinutes()+0},
hD:function(a){return a.b?H.D(a).getUTCSeconds()+0:H.D(a).getSeconds()+0},
hA:function(a){return a.b?H.D(a).getUTCMilliseconds()+0:H.D(a).getMilliseconds()+0},
L:function(a){throw H.a(H.U(a))},
e:function(a,b){if(a==null)J.a2(a)
throw H.a(H.aa(a,b))},
aa:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,"index",null)
z=J.a2(a)
if(!(b<0)){if(typeof z!=="number")return H.L(z)
y=b>=z}else y=!0
if(y)return P.w(b,a,"index",null,z)
return P.bl(b,"index",null)},
U:function(a){return new P.ad(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.c6()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eA})
z.name=""}else z.toString=H.eA
return z},
eA:function(){return J.ay(this.dartException)},
V:function(a){throw H.a(a)},
F:function(a){throw H.a(P.I(a))},
G:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bw(x,16)&8191)===10)switch(w){case 438:return z.$1(H.c1(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dl(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dA()
u=$.$get$dB()
t=$.$get$dC()
s=$.$get$dD()
r=$.$get$dH()
q=$.$get$dI()
p=$.$get$dF()
$.$get$dE()
o=$.$get$dK()
n=$.$get$dJ()
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
if(l)return z.$1(H.dl(y,m))}}return z.$1(new H.id(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dr()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ad(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dr()
return a},
a0:function(a){var z
if(a==null)return new H.e6(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.e6(a,null)},
kh:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
kv:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.d1("Unsupported number of arguments for wrapped closure"))},
a9:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kv)
a.$identity=z
return z},
fu:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$isi){z.$reflectionInfo=c
x=H.hH(z).r}else x=c
w=d?Object.create(new H.hU().constructor.prototype):Object.create(new H.bO(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.W
$.W=J.av(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.cQ(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.kl,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.cO:H.bP
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
fr:function(a,b,c,d){var z=H.bP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cQ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ft(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fr(y,!w,z,b)
if(y===0){w=$.W
$.W=J.av(w,1)
u="self"+H.b(w)
w="return function(){var "+u+" = this."
v=$.az
if(v==null){v=H.ba("self")
$.az=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.W
$.W=J.av(w,1)
t+=H.b(w)
w="return function("+t+"){return this."
v=$.az
if(v==null){v=H.ba("self")
$.az=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fs:function(a,b,c,d){var z,y
z=H.bP
y=H.cO
switch(b?-1:a){case 0:throw H.a(H.hL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ft:function(a,b){var z,y,x,w,v,u,t,s
z=$.az
if(z==null){z=H.ba("self")
$.az=z}y=$.cN
if(y==null){y=H.ba("receiver")
$.cN=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fs(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.W
$.W=J.av(y,1)
return new Function(z+H.b(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.W
$.W=J.av(y,1)
return new Function(z+H.b(y)+"}")()},
cl:function(a,b,c,d,e,f){var z,y
z=J.aD(b)
y=!!J.n(c).$isi?J.aD(c):c
return H.fu(a,z,y,!!d,e,f)},
kB:function(a,b){var z=J.ab(b)
throw H.a(H.cP(a,z.be(b,3,z.gj(b))))},
ac:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.kB(a,b)},
cm:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
el:function(a,b){var z,y
if(a==null)return!1
z=H.cm(J.n(a))
if(z==null)y=!1
else y=H.eq(z,b)
return y},
k9:function(a){var z
if(a instanceof H.f){z=H.cm(J.n(a))
if(z!=null)return H.cp(z,null)
return"Closure"}return H.aI(a)},
kE:function(a){throw H.a(new P.fy(a))},
eo:function(a){return init.getIsolateTag(a)},
y:function(a,b){a.$ti=b
return a},
as:function(a){if(a==null)return
return a.$ti},
na:function(a,b,c){return H.aQ(a["$as"+H.b(c)],H.as(b))},
b6:function(a,b,c,d){var z=H.aQ(a["$as"+H.b(c)],H.as(b))
return z==null?null:z[d]},
b5:function(a,b,c){var z=H.aQ(a["$as"+H.b(b)],H.as(a))
return z==null?null:z[c]},
A:function(a,b){var z=H.as(a)
return z==null?null:z[b]},
cp:function(a,b){var z=H.au(a,b)
return z},
au:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bD(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.b(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.au(z,b)
return H.k0(a,b)}return"unknown-reified-type"},
k0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.au(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.au(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.au(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.kg(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.au(r[p],b)+(" "+H.b(p))}w+="}"}return"("+w+") => "+z},
bD:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.ca("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.au(u,c)}return w?"":"<"+z.k(0)+">"},
kk:function(a){var z,y,x
if(a instanceof H.f){z=H.cm(J.n(a))
if(z!=null)return H.cp(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bD(a.$ti,0,null)
return y+x},
aQ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b3:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.as(a)
y=J.n(a)
if(y[b]==null)return!1
return H.ei(H.aQ(y[d],z),c)},
b7:function(a,b,c,d){var z,y
if(a==null)return a
z=H.b3(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bD(c,0,null)
throw H.a(H.cP(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ei:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.M(a[y],b[y]))return!1
return!0},
n8:function(a,b,c){return a.apply(b,H.aQ(J.n(b)["$as"+H.b(c)],H.as(b)))},
M:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="aX")return!0
if('func' in b)return H.eq(a,b)
if('func' in a)return b.builtin$cls==="lF"||b.builtin$cls==="c"
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
return H.ei(H.aQ(u,z),x)},
eh:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.M(z,v)||H.M(v,z)))return!1}return!0},
ka:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aD(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.M(v,u)||H.M(u,v)))return!1}return!0},
eq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.M(z,y)||H.M(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eh(x,w,!1))return!1
if(!H.eh(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.M(o,n)||H.M(n,o)))return!1}}return H.ka(a.named,b.named)},
n9:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kx:function(a){var z,y,x,w,v,u
z=$.ep.$1(a)
y=$.bz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eg.$2(a,z)
if(z!=null){y=$.bz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bE(x)
$.bz[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bC[z]=x
return x}if(v==="-"){u=H.bE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.es(a,x)
if(v==="*")throw H.a(P.dO(z))
if(init.leafTags[z]===true){u=H.bE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.es(a,x)},
es:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.co(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bE:function(a){return J.co(a,!1,null,!!a.$iso)},
kA:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bE(z)
else return J.co(z,c,null,null)},
kt:function(){if(!0===$.cn)return
$.cn=!0
H.ku()},
ku:function(){var z,y,x,w,v,u,t,s
$.bz=Object.create(null)
$.bC=Object.create(null)
H.kp()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ew.$1(v)
if(u!=null){t=H.kA(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kp:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.aq(C.I,H.aq(C.N,H.aq(C.u,H.aq(C.u,H.aq(C.M,H.aq(C.J,H.aq(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ep=new H.kq(v)
$.eg=new H.kr(u)
$.ew=new H.ks(t)},
aq:function(a,b){return a(b)||b},
kD:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hG:{"^":"c;a,b,c,d,e,f,r,x",p:{
hH:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aD(z)
y=z[0]
x=z[1]
return new H.hG(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
ib:{"^":"c;a,b,c,d,e,f",
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
Y:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ib(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dG:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hs:{"^":"C;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+H.b(z)+"' on null"},
p:{
dl:function(a,b){return new H.hs(a,b==null?null:b.method)}}},
h2:{"^":"C;a,b,c",
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
return new H.h2(a,y,z?null:b.receiver)}}},
id:{"^":"C;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kF:{"^":"f:0;a",
$1:function(a){if(!!J.n(a).$isC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
e6:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaJ:1},
f:{"^":"c;",
k:function(a){return"Closure '"+H.aI(this).trim()+"'"},
gcv:function(){return this},
gcv:function(){return this}},
du:{"^":"f;"},
hU:{"^":"du;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bO:{"^":"du;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bO))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var z,y
z=this.c
if(z==null)y=H.aH(this.a)
else y=typeof z!=="object"?J.a1(z):H.aH(z)
return(y^H.aH(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.aI(z)+"'")},
p:{
bP:function(a){return a.a},
cO:function(a){return a.c},
ba:function(a){var z,y,x,w,v
z=new H.bO("self","target","receiver","name")
y=J.aD(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fp:{"^":"C;a",
k:function(a){return this.a},
p:{
cP:function(a,b){return new H.fp("CastError: "+H.b(P.bT(a))+": type '"+H.k9(a)+"' is not a subtype of type '"+b+"'")}}},
hK:{"^":"C;a",
k:function(a){return"RuntimeError: "+H.b(this.a)},
p:{
hL:function(a){return new H.hK(a)}}},
dL:{"^":"c;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gw:function(a){return J.a1(this.a)},
F:function(a,b){if(b==null)return!1
return b instanceof H.dL&&J.H(this.a,b.a)}},
d9:{"^":"c4;a,b,c,d,e,f,r,$ti",
gj:function(a){return this.a},
gJ:function(a){return new H.h8(this,[H.A(this,0)])},
aj:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.br(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.br(y,b)}else return this.e6(b)},
e6:function(a){var z=this.d
if(z==null)return!1
return this.aP(this.aF(z,J.a1(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ah(z,b)
x=y==null?null:y.gaa()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ah(w,b)
x=y==null?null:y.gaa()
return x}else return this.e7(b)},
e7:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aF(z,J.a1(a)&0x3ffffff)
x=this.aP(y,a)
if(x<0)return
return y[x].gaa()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aI()
this.b=z}this.bk(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aI()
this.c=y}this.bk(y,b,c)}else{x=this.d
if(x==null){x=this.aI()
this.d=x}w=J.a1(b)&0x3ffffff
v=this.aF(x,w)
if(v==null)this.aM(x,w,[this.ay(b,c)])
else{u=this.aP(v,b)
if(u>=0)v[u].saa(c)
else v.push(this.ay(b,c))}}},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.I(this))
z=z.c}},
bk:function(a,b,c){var z=this.ah(a,b)
if(z==null)this.aM(a,b,this.ay(b,c))
else z.saa(c)},
bl:function(){this.r=this.r+1&67108863},
ay:function(a,b){var z,y
z=new H.h7(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bl()
return z},
aP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].ge5(),b))return y
return-1},
k:function(a){return P.de(this)},
ah:function(a,b){return a[b]},
aF:function(a,b){return a[b]},
aM:function(a,b,c){a[b]=c},
di:function(a,b){delete a[b]},
br:function(a,b){return this.ah(a,b)!=null},
aI:function(){var z=Object.create(null)
this.aM(z,"<non-identifier-key>",z)
this.di(z,"<non-identifier-key>")
return z}},
h7:{"^":"c;e5:a<,aa:b@,c,d"},
h8:{"^":"bR;a,$ti",
gj:function(a){return this.a.a},
gH:function(a){var z,y
z=this.a
y=new H.ae(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
v:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.a(P.I(z))
y=y.c}}},
ae:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kq:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
kr:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
ks:{"^":"f:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
kg:function(a){return J.aD(H.y(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bx:function(a){var z,y,x
if(!!J.n(a).$ism)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
a_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aa(b,a))},
ho:{"^":"h;","%":"DataView;ArrayBufferView;c5|e0|e1|di|e2|e3|af"},
c5:{"^":"ho;",
gj:function(a){return a.length},
$ism:1,
$asm:I.ar,
$iso:1,
$aso:I.ar},
di:{"^":"e1;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
i:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$asbe:function(){return[P.aj]},
$asj:function(){return[P.aj]},
$isi:1,
$asi:function(){return[P.aj]},
"%":"Float64Array"},
af:{"^":"e3;",
i:function(a,b,c){H.a_(b,a,a.length)
a[b]=c},
$asbe:function(){return[P.B]},
$asj:function(){return[P.B]},
$isi:1,
$asi:function(){return[P.B]}},
hn:{"^":"di;",$isbU:1,"%":"Float32Array"},
m4:{"^":"af;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m5:{"^":"af;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
$isfX:1,
"%":"Int32Array"},
m6:{"^":"af;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m7:{"^":"af;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m8:{"^":"af;",
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m9:{"^":"af;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ma:{"^":"af;",
gj:function(a){return a.length},
h:function(a,b){H.a_(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
e0:{"^":"c5+j;"},
e1:{"^":"e0+be;"},
e2:{"^":"c5+j;"},
e3:{"^":"e2+be;"}}],["","",,P,{"^":"",
im:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a9(new P.ip(z),1)).observe(y,{childList:true})
return new P.io(z,y,x)}else if(self.setImmediate!=null)return P.kc()
return P.kd()},
mV:[function(a){self.scheduleImmediate(H.a9(new P.iq(a),0))},"$1","kb",4,0,6],
mW:[function(a){self.setImmediate(H.a9(new P.ir(a),0))},"$1","kc",4,0,6],
mX:[function(a){P.jC(0,a)},"$1","kd",4,0,6],
k4:function(a,b){if(H.el(a,{func:1,args:[P.aX,P.aX]})){b.toString
return a}else{b.toString
return a}},
fP:function(a,b,c){var z
if(a==null)a=new P.c6()
z=$.q
if(z!==C.d)z.toString
z=new P.E(0,z,null,[c])
z.df(a,b)
return z},
fQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.E(0,$.q,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.fS(z,b,!1,y)
try{for(s=0,r=0;s<1;++s){w=a[s]
v=r
w.aY(new P.fR(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.E(0,$.q,null,[null])
r.bn(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.G(p)
t=H.a0(p)
if(z.b===0||!1)return P.fP(u,t,null)
else{z.c=u
z.d=t}}return y},
k_:function(a,b,c){$.q.toString
a.L(b,c)},
k3:function(){var z,y
for(;z=$.ao,z!=null;){$.aM=null
y=z.b
$.ao=y
if(y==null)$.aL=null
z.a.$0()}},
n7:[function(){$.ci=!0
try{P.k3()}finally{$.aM=null
$.ci=!1
if($.ao!=null)$.$get$cd().$1(P.ej())}},"$0","ej",0,0,3],
ee:function(a){var z=new P.dR(a,null)
if($.ao==null){$.aL=z
$.ao=z
if(!$.ci)$.$get$cd().$1(P.ej())}else{$.aL.b=z
$.aL=z}},
k8:function(a){var z,y,x
z=$.ao
if(z==null){P.ee(a)
$.aM=$.aL
return}y=new P.dR(a,null)
x=$.aM
if(x==null){y.b=z
$.aM=y
$.ao=y}else{y.b=x.b
x.b=y
$.aM=y
if(y.b==null)$.aL=y}},
kC:function(a){var z=$.q
if(C.d===z){P.ap(null,null,C.d,a)
return}z.toString
P.ap(null,null,z,z.bI(a))},
k7:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.G(u)
y=H.a0(u)
$.q.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.ax(x)
w=t
v=x.gX()
c.$2(w,v)}}},
jU:function(a,b,c,d){var z=a.bO(0)
if(!!J.n(z).$isa5&&z!==$.$get$bV())z.cu(new P.jX(b,c,d))
else b.L(c,d)},
jV:function(a,b){return new P.jW(a,b)},
jY:function(a,b,c){var z=a.bO(0)
if(!!J.n(z).$isa5&&z!==$.$get$bV())z.cu(new P.jZ(b,c))
else b.Z(c)},
by:function(a,b,c,d,e){var z={}
z.a=d
P.k8(new P.k5(z,e))},
ec:function(a,b,c,d){var z,y
y=$.q
if(y===c)return d.$0()
$.q=c
z=y
try{y=d.$0()
return y}finally{$.q=z}},
ed:function(a,b,c,d,e){var z,y
y=$.q
if(y===c)return d.$1(e)
$.q=c
z=y
try{y=d.$1(e)
return y}finally{$.q=z}},
k6:function(a,b,c,d,e,f){var z,y
y=$.q
if(y===c)return d.$2(e,f)
$.q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.q=z}},
ap:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bI(d):c.dL(d)
P.ee(d)},
ip:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
io:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iq:{"^":"f:1;a",
$0:function(){this.a.$0()}},
ir:{"^":"f:1;a",
$0:function(){this.a.$0()}},
jB:{"^":"c;a,b,c",
dc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a9(new P.jD(this,b),0),a)
else throw H.a(P.p("`setTimeout()` not found."))},
p:{
jC:function(a,b){var z=new P.jB(!0,null,0)
z.dc(a,b)
return z}}},
jD:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
a5:{"^":"c;$ti"},
fS:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.L(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.L(z.c,z.d)}},
fR:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.e(x,z)
x[z]=a
if(y===0)this.c.bq(x)}else if(z.b===0&&!this.e)this.c.L(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
kR:{"^":"c;$ti"},
dT:{"^":"c;$ti"},
il:{"^":"dT;a,$ti",
aN:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bp("Future already completed"))
z.bn(b)}},
jw:{"^":"dT;a,$ti",
aN:function(a,b){var z=this.a
if(z.a!==0)throw H.a(P.bp("Future already completed"))
z.Z(b)}},
dU:{"^":"c;aK:a<,b,c,d,e,$ti",
gdG:function(){return this.b.b},
gc3:function(){return(this.c&1)!==0},
ge4:function(){return(this.c&2)!==0},
gc2:function(){return this.c===8},
e2:function(a){return this.b.b.aW(this.d,a)},
e8:function(a){if(this.c!==6)return!0
return this.b.b.aW(this.d,J.ax(a))},
e1:function(a){var z,y,x
z=this.e
y=J.d(a)
x=this.b.b
if(H.el(z,{func:1,args:[P.c,P.aJ]}))return x.eg(z,y.gK(a),a.gX())
else return x.aW(z,y.gK(a))},
e3:function(){return this.b.b.c9(this.d)}},
E:{"^":"c;bx:a<,b,du:c<,$ti",
gdn:function(){return this.a===2},
gaG:function(){return this.a>=4},
aY:function(a,b){var z,y,x
z=$.q
if(z!==C.d){z.toString
if(b!=null)b=P.k4(b,z)}y=new P.E(0,z,null,[null])
x=b==null?1:3
this.az(new P.dU(null,y,x,a,b,[H.A(this,0),null]))
return y},
ao:function(a){return this.aY(a,null)},
cu:function(a){var z,y
z=$.q
y=new P.E(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.A(this,0)
this.az(new P.dU(null,y,8,a,null,[z,z]))
return y},
az:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaG()){y.az(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.ap(null,null,z,new P.iJ(this,a))}},
bu:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaK()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaG()){v.bu(a)
return}this.a=v.a
this.c=v.c}z.a=this.aL(a)
y=this.b
y.toString
P.ap(null,null,y,new P.iQ(z,this))}},
a7:function(){var z=this.c
this.c=null
return this.aL(z)},
aL:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaK()
z.a=y}return y},
Z:function(a){var z,y,x
z=this.$ti
y=H.b3(a,"$isa5",z,"$asa5")
if(y){z=H.b3(a,"$isE",z,null)
if(z)P.bw(a,this)
else P.dV(a,this)}else{x=this.a7()
this.a=4
this.c=a
P.an(this,x)}},
bq:function(a){var z=this.a7()
this.a=4
this.c=a
P.an(this,z)},
L:[function(a,b){var z=this.a7()
this.a=8
this.c=new P.b9(a,b)
P.an(this,z)},function(a){return this.L(a,null)},"es","$2","$1","gaA",4,2,13],
bn:function(a){var z=H.b3(a,"$isa5",this.$ti,"$asa5")
if(z){this.dg(a)
return}this.a=1
z=this.b
z.toString
P.ap(null,null,z,new P.iL(this,a))},
dg:function(a){var z=H.b3(a,"$isE",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.ap(null,null,z,new P.iP(this,a))}else P.bw(a,this)
return}P.dV(a,this)},
df:function(a,b){var z
this.a=1
z=this.b
z.toString
P.ap(null,null,z,new P.iK(this,a,b))},
$isa5:1,
p:{
iI:function(a,b){var z=new P.E(0,$.q,null,[b])
z.a=4
z.c=a
return z},
dV:function(a,b){var z,y,x
b.a=1
try{a.aY(new P.iM(b),new P.iN(b))}catch(x){z=H.G(x)
y=H.a0(x)
P.kC(new P.iO(b,z,y))}},
bw:function(a,b){var z
for(;a.gdn();)a=a.c
if(a.gaG()){z=b.a7()
b.a=a.a
b.c=a.c
P.an(b,z)}else{z=b.c
b.a=2
b.c=a
a.bu(z)}},
an:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.ax(v)
t=v.gX()
y.toString
P.by(null,null,y,u,t)}return}for(;b.gaK()!=null;b=s){s=b.a
b.a=null
P.an(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gc3()||b.gc2()){q=b.gdG()
if(w){u=z.a.b
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){y=z.a
v=y.c
y=y.b
u=J.ax(v)
t=v.gX()
y.toString
P.by(null,null,y,u,t)
return}p=$.q
if(p==null?q!=null:p!==q)$.q=q
else p=null
if(b.gc2())new P.iT(z,x,b,w).$0()
else if(y){if(b.gc3())new P.iS(x,b,r).$0()}else if(b.ge4())new P.iR(z,x,b).$0()
if(p!=null)$.q=p
y=x.b
if(!!J.n(y).$isa5){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aL(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bw(y,o)
return}}o=b.b
b=o.a7()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
iJ:{"^":"f:1;a,b",
$0:function(){P.an(this.a,this.b)}},
iQ:{"^":"f:1;a,b",
$0:function(){P.an(this.b,this.a.a)}},
iM:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.Z(a)}},
iN:{"^":"f:14;a",
$2:function(a,b){this.a.L(a,b)},
$1:function(a){return this.$2(a,null)}},
iO:{"^":"f:1;a,b,c",
$0:function(){this.a.L(this.b,this.c)}},
iL:{"^":"f:1;a,b",
$0:function(){this.a.bq(this.b)}},
iP:{"^":"f:1;a,b",
$0:function(){P.bw(this.b,this.a)}},
iK:{"^":"f:1;a,b,c",
$0:function(){this.a.L(this.b,this.c)}},
iT:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.e3()}catch(w){y=H.G(w)
x=H.a0(w)
if(this.d){v=J.ax(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.b9(y,x)
u.a=!0
return}if(!!J.n(z).$isa5){if(z instanceof P.E&&z.gbx()>=4){if(z.gbx()===8){v=this.b
v.b=z.gdu()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.ao(new P.iU(t))
v.a=!1}}},
iU:{"^":"f:0;a",
$1:function(a){return this.a}},
iS:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.e2(this.c)}catch(x){z=H.G(x)
y=H.a0(x)
w=this.a
w.b=new P.b9(z,y)
w.a=!0}}},
iR:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.e8(z)===!0&&w.e!=null){v=this.b
v.b=w.e1(z)
v.a=!1}}catch(u){y=H.G(u)
x=H.a0(u)
w=this.a
v=J.ax(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.b9(y,x)
s.a=!0}}},
dR:{"^":"c;a,b"},
bq:{"^":"c;$ti",
v:function(a,b){var z,y
z={}
y=new P.E(0,$.q,null,[null])
z.a=null
z.a=this.aQ(new P.i2(z,this,b,y),!0,new P.i3(y),y.gaA())
return y},
gj:function(a){var z,y
z={}
y=new P.E(0,$.q,null,[P.B])
z.a=0
this.aQ(new P.i4(z),!0,new P.i5(z,y),y.gaA())
return y},
gdZ:function(a){var z,y
z={}
y=new P.E(0,$.q,null,[H.b5(this,"bq",0)])
z.a=null
z.a=this.aQ(new P.hZ(z,this,y),!0,new P.i_(y),y.gaA())
return y}},
i2:{"^":"f;a,b,c,d",
$1:function(a){P.k7(new P.i0(this.c,a),new P.i1(),P.jV(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.b5(this.b,"bq",0)]}}},
i0:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
i1:{"^":"f:0;",
$1:function(a){}},
i3:{"^":"f:1;a",
$0:function(){this.a.Z(null)}},
i4:{"^":"f:0;a",
$1:function(a){++this.a.a}},
i5:{"^":"f:1;a,b",
$0:function(){this.b.Z(this.a.a)}},
hZ:{"^":"f;a,b,c",
$1:function(a){P.jY(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.b5(this.b,"bq",0)]}}},
i_:{"^":"f:1;a",
$0:function(){var z,y,x,w
try{x=H.d5()
throw H.a(x)}catch(w){z=H.G(w)
y=H.a0(w)
P.k_(this.a,z,y)}}},
hY:{"^":"c;$ti"},
jX:{"^":"f:1;a,b,c",
$0:function(){return this.a.L(this.b,this.c)}},
jW:{"^":"f:15;a,b",
$2:function(a,b){P.jU(this.a,this.b,a,b)}},
jZ:{"^":"f:1;a,b",
$0:function(){return this.a.Z(this.b)}},
b9:{"^":"c;K:a>,X:b<",
k:function(a){return H.b(this.a)},
$isC:1},
jJ:{"^":"c;"},
k5:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.c6()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=J.ay(y)
throw x}},
jf:{"^":"jJ;",
eh:function(a){var z,y,x
try{if(C.d===$.q){a.$0()
return}P.ec(null,null,this,a)}catch(x){z=H.G(x)
y=H.a0(x)
P.by(null,null,this,z,y)}},
ei:function(a,b){var z,y,x
try{if(C.d===$.q){a.$1(b)
return}P.ed(null,null,this,a,b)}catch(x){z=H.G(x)
y=H.a0(x)
P.by(null,null,this,z,y)}},
dL:function(a){return new P.jh(this,a)},
bI:function(a){return new P.jg(this,a)},
dM:function(a){return new P.ji(this,a)},
h:function(a,b){return},
c9:function(a){if($.q===C.d)return a.$0()
return P.ec(null,null,this,a)},
aW:function(a,b){if($.q===C.d)return a.$1(b)
return P.ed(null,null,this,a,b)},
eg:function(a,b,c){if($.q===C.d)return a.$2(b,c)
return P.k6(null,null,this,a,b,c)}},
jh:{"^":"f:1;a,b",
$0:function(){return this.a.c9(this.b)}},
jg:{"^":"f:1;a,b",
$0:function(){return this.a.eh(this.b)}},
ji:{"^":"f:0;a,b",
$1:function(a){return this.a.ei(this.b,a)}}}],["","",,P,{"^":"",
O:function(){return new H.d9(0,null,null,null,null,null,0,[null,null])},
db:function(a){return H.kh(a,new H.d9(0,null,null,null,null,null,0,[null,null]))},
R:function(a,b,c,d){return new P.j2(0,null,null,null,null,null,0,[d])},
fY:function(a,b,c){var z,y
if(P.cj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aN()
y.push(a)
try{P.k2(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.ds(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bZ:function(a,b,c){var z,y,x
if(P.cj(a))return b+"..."+c
z=new P.ca(b)
y=$.$get$aN()
y.push(a)
try{x=z
x.a=P.ds(x.ga_(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.ga_()+c
y=z.ga_()
return y.charCodeAt(0)==0?y:y},
cj:function(a){var z,y
for(z=0;y=$.$get$aN(),z<y.length;++z)if(a===y[z])return!0
return!1},
k2:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gH(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.b(z.gB(z))
b.push(w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gB(z);++x
if(!z.t()){if(x<=4){b.push(H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB(z);++x
for(;z.t();t=s,s=r){r=z.gB(z);++x
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
c2:function(a,b){var z,y
z=P.R(null,null,null,b)
for(y=J.aU(a);y.t();)z.O(0,y.gB(y))
return z},
de:function(a){var z,y,x
z={}
if(P.cj(a))return"{...}"
y=new P.ca("")
try{$.$get$aN().push(a)
x=y
x.a=x.ga_()+"{"
z.a=!0
J.cw(a,new P.hb(z,y))
z=y
z.a=z.ga_()+"}"}finally{z=$.$get$aN()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.ga_()
return z.charCodeAt(0)==0?z:z},
j2:{"^":"iW;a,b,c,d,e,f,r,$ti",
gH:function(a){var z=new P.cg(this,this.r,null,null,[null])
z.c=this.e
return z},
gj:function(a){return this.a},
u:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dh(b)},
dh:function(a){var z=this.d
if(z==null)return!1
return this.aE(z[this.aB(a)],a)>=0},
v:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.a(P.I(this))
z=z.b}},
O:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.ch()
this.b=z}return this.bm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.ch()
this.c=y}return this.bm(y,b)}else return this.dd(0,b)},
dd:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.ch()
this.d=z}y=this.aB(b)
x=z[y]
if(x==null)z[y]=[this.aJ(b)]
else{if(this.aE(x,b)>=0)return!1
x.push(this.aJ(b))}return!0},
c8:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bv(this.c,b)
else return this.dr(0,b)},
dr:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aB(b)]
x=this.aE(y,b)
if(x<0)return!1
this.bz(y.splice(x,1)[0])
return!0},
a9:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aH()}},
bm:function(a,b){if(a[b]!=null)return!1
a[b]=this.aJ(b)
return!0},
bv:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bz(z)
delete a[b]
return!0},
aH:function(){this.r=this.r+1&67108863},
aJ:function(a){var z,y
z=new P.j3(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aH()
return z},
bz:function(a){var z,y
z=a.gdq()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aH()},
aB:function(a){return J.a1(a)&0x3ffffff},
aE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].gdj(),b))return y
return-1},
p:{
ch:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
j3:{"^":"c;dj:a<,b,dq:c<"},
cg:{"^":"c;a,b,c,d,$ti",
gB:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.I(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iW:{"^":"hM;$ti"},
lR:{"^":"c;$ti"},
dc:{"^":"e_;$ti",$isi:1},
j:{"^":"c;$ti",
gH:function(a){return new H.dd(a,this.gj(a),0,null,[H.b6(this,a,"j",0)])},
q:function(a,b){return this.h(a,b)},
v:function(a,b){var z,y
z=this.gj(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.a(P.I(a))}},
e0:function(a,b,c){var z,y,x
z=this.gj(a)
for(y=b,x=0;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gj(a))throw H.a(P.I(a))}return y},
bb:function(a,b){return H.dt(a,b,null,H.b6(this,a,"j",0))},
n:function(a,b){var z=H.y([],[H.b6(this,a,"j",0)])
C.c.sj(z,C.b.n(this.gj(a),C.b.gj(b)))
C.c.ae(z,0,this.gj(a),a)
C.c.ae(z,this.gj(a),z.length,b)
return z},
k:function(a){return P.bZ(a,"[","]")}},
c4:{"^":"P;$ti"},
hb:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
P:{"^":"c;$ti",
v:function(a,b){var z,y
for(z=J.aU(this.gJ(a));z.t();){y=z.gB(z)
b.$2(y,this.h(a,y))}},
gj:function(a){return J.a2(this.gJ(a))},
k:function(a){return P.de(a)}},
hN:{"^":"c;$ti",
M:function(a,b){var z
for(z=J.aU(b);z.t();)this.O(0,z.gB(z))},
k:function(a){return P.bZ(this,"{","}")},
v:function(a,b){var z
for(z=new P.cg(this,this.r,null,null,[null]),z.c=this.e;z.t();)b.$1(z.d)}},
hM:{"^":"hN;$ti"},
e_:{"^":"c+j;$ti"}}],["","",,P,{"^":"",
fK:function(a){var z=J.n(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aI(a)+"'"},
bT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ay(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fK(a)},
d1:function(a){return new P.iF(a)},
ak:function(a){H.bF(H.b(a))},
ck:{"^":"c;"},
"+bool":0,
cT:{"^":"c;dF:a<,b",
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.cT))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.gdF())},
gw:function(a){var z=this.a
return(z^C.b.bw(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.fz(H.hE(this))
y=P.aV(H.hC(this))
x=P.aV(H.hy(this))
w=P.aV(H.hz(this))
v=P.aV(H.hB(this))
u=P.aV(H.hD(this))
t=P.fA(H.hA(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fz:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aV:function(a){if(a>=10)return""+a
return"0"+a}}},
aj:{"^":"aP;"},
"+double":0,
aW:{"^":"c;a6:a<",
n:function(a,b){return new P.aW(C.b.n(this.a,b.ga6()))},
I:function(a,b){return new P.aW(this.a-b.ga6())},
a4:function(a,b){return C.b.a4(this.a,b.ga6())},
ad:function(a,b){return C.b.ad(this.a,b.ga6())},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.aW))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.ga6())},
k:function(a){var z,y,x,w,v
z=new P.fH()
y=this.a
if(y<0)return"-"+new P.aW(0-y).k(0)
x=z.$1(C.b.a0(y,6e7)%60)
w=z.$1(C.b.a0(y,1e6)%60)
v=new P.fG().$1(y%1e6)
return""+C.b.a0(y,36e8)+":"+H.b(x)+":"+H.b(w)+"."+H.b(v)},
p:{
fF:function(a,b,c,d,e,f){return new P.aW(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fG:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fH:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
C:{"^":"c;",
gX:function(){return H.a0(this.$thrownJsError)}},
c6:{"^":"C;",
k:function(a){return"Throw of null."}},
ad:{"^":"C;a,b,c,d",
gaD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaC:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gaD()+y+x
if(!this.a)return w
v=this.gaC()
u=P.bT(this.b)
return w+v+": "+H.b(u)},
p:{
cK:function(a){return new P.ad(!1,null,null,a)},
fj:function(a,b,c){return new P.ad(!0,a,b,c)}}},
dn:{"^":"ad;e,f,a,b,c,d",
gaD:function(){return"RangeError"},
gaC:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
p:{
bl:function(a,b,c){return new P.dn(null,null,!0,a,b,"Value not in range")},
am:function(a,b,c,d,e){return new P.dn(b,c,!0,a,d,"Invalid value")},
hF:function(a,b,c,d,e,f){if(0>a||a>c)throw H.a(P.am(a,0,c,"start",f))
if(a>b||b>c)throw H.a(P.am(b,a,c,"end",f))
return b}}},
fW:{"^":"ad;e,j:f>,a,b,c,d",
gaD:function(){return"RangeError"},
gaC:function(){if(J.aR(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
p:{
w:function(a,b,c,d,e){var z=e!=null?e:J.a2(b)
return new P.fW(b,z,!0,a,c,"Index out of range")}}},
ie:{"^":"C;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
p:function(a){return new P.ie(a)}}},
ic:{"^":"C;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.b(z):"UnimplementedError"},
p:{
dO:function(a){return new P.ic(a)}}},
bo:{"^":"C;a",
k:function(a){return"Bad state: "+this.a},
p:{
bp:function(a){return new P.bo(a)}}},
fv:{"^":"C;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.bT(z))+"."},
p:{
I:function(a){return new P.fv(a)}}},
dr:{"^":"c;",
k:function(a){return"Stack Overflow"},
gX:function(){return},
$isC:1},
fy:{"^":"C;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.b(z)+"' during its initialization"}},
ld:{"^":"c;"},
iF:{"^":"c;a",
k:function(a){return"Exception: "+this.a}},
B:{"^":"aP;"},
"+int":0,
bg:{"^":"c;$ti",
aZ:["cJ",function(a,b){return new H.dQ(this,b,[H.b5(this,"bg",0)])}],
v:function(a,b){var z
for(z=this.gH(this);z.t();)b.$1(z.gB(z))},
gj:function(a){var z,y
z=this.gH(this)
for(y=0;z.t();)++y
return y},
gW:function(a){var z,y
z=this.gH(this)
if(!z.t())throw H.a(H.d5())
y=z.gB(z)
if(z.t())throw H.a(H.h_())
return y},
q:function(a,b){var z,y,x
if(b<0)H.V(P.am(b,0,null,"index",null))
for(z=this.gH(this),y=0;z.t();){x=z.gB(z)
if(b===y)return x;++y}throw H.a(P.w(b,this,"index",null,y))},
k:function(a){return P.fY(this,"(",")")}},
h0:{"^":"c;$ti"},
i:{"^":"c;$ti"},
"+List":0,
c3:{"^":"c;$ti"},
aX:{"^":"c;",
gw:function(a){return P.c.prototype.gw.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aP:{"^":"c;"},
"+num":0,
c:{"^":";",
F:function(a,b){return this===b},
gw:function(a){return H.aH(this)},
k:function(a){return"Instance of '"+H.aI(this)+"'"},
toString:function(){return this.k(this)}},
aJ:{"^":"c;"},
l:{"^":"c;"},
"+String":0,
ca:{"^":"c;a_:a<",
gj:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
ds:function(a,b,c){var z=J.aU(b)
if(!z.t())return a
if(c.length===0){do a+=H.b(z.gB(z))
while(z.t())}else{a+=H.b(z.gB(z))
for(;z.t();)a=a+c+H.b(z.gB(z))}return a}}}}],["","",,W,{"^":"",
fI:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).R(z,a,b,c)
y.toString
z=new H.dQ(new W.S(y),new W.fJ(),[W.r])
return z.gW(z)},
d0:function(a){return"wheel"},
aA:function(a){var z,y,x
z="element tag unavailable"
try{y=J.eW(a)
if(typeof y==="string")z=a.tagName}catch(x){H.G(x)}return z},
iC:function(a,b){return document.createElement(a)},
ai:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
dZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eb:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.iw(a)
if(!!J.n(z).$isz)return z
return}else return a},
ef:function(a){var z=$.q
if(z===C.d)return a
return z.dM(a)},
u:{"^":"al;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
kG:{"^":"c8;l:x=,m:y=,C:z=","%":"Accelerometer|LinearAccelerationSensor"},
kH:{"^":"h;j:length=","%":"AccessibleNodeList"},
kI:{"^":"u;ak:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kJ:{"^":"u;ak:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
kN:{"^":"u;ak:href}","%":"HTMLBaseElement"},
fn:{"^":"h;","%":"Response;Body"},
bN:{"^":"u;",$isbN:1,"%":"HTMLBodyElement"},
kO:{"^":"u;G:name=","%":"HTMLButtonElement"},
bb:{"^":"u;D:height},E:width}",
b0:function(a,b,c){if(c!=null)return a.getContext(b,P.ke(c,null))
return a.getContext(b)},
cw:function(a,b){return this.b0(a,b,null)},
$isbb:1,
"%":"HTMLCanvasElement"},
kP:{"^":"h;",
dT:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
aq:function(a){return P.Q(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
kQ:{"^":"r;j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kS:{"^":"X;S:style=","%":"CSSFontFaceRule"},
kT:{"^":"X;S:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
kU:{"^":"X;S:style=","%":"CSSPageRule"},
kV:{"^":"bc;j:length=","%":"CSSPerspective"},
kW:{"^":"bQ;l:x=,m:y=","%":"CSSPositionValue"},
kX:{"^":"bc;l:x=,m:y=,C:z=","%":"CSSRotation"},
X:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
kY:{"^":"bc;l:x=,m:y=,C:z=","%":"CSSScale"},
fw:{"^":"iu;j:length=",
bo:function(a,b){var z,y
z=$.$get$cR()
y=z[b]
if(typeof y==="string")return y
y=this.dC(a,b)
z[b]=y
return y},
dC:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fB()+b
if(z in a)return z
return b},
dz:function(a,b,c,d){a.setProperty(b,c,d)},
sD:function(a,b){a.height=b},
sE:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fx:{"^":"c;",
se_:function(a,b){this.dz(a,this.bo(a,"float"),b,"")}},
kZ:{"^":"X;S:style=","%":"CSSStyleRule"},
bQ:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bc:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
l_:{"^":"bQ;j:length=","%":"CSSTransformValue"},
l0:{"^":"bc;l:x=,m:y=,C:z=","%":"CSSTranslation"},
l1:{"^":"bQ;j:length=","%":"CSSUnparsedValue"},
l2:{"^":"X;S:style=","%":"CSSViewportRule"},
l3:{"^":"h;j:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
l4:{"^":"h;l:x=,m:y=,C:z=","%":"DeviceAcceleration"},
fC:{"^":"u;","%":"HTMLDivElement"},
l5:{"^":"r;",
gaR:function(a){return new W.b2(a,"mousedown",!1,[W.K])},
gaS:function(a){return new W.b2(a,"mousemove",!1,[W.K])},
gaT:function(a){return new W.b2(a,"mouseup",!1,[W.K])},
gaU:function(a){return new W.b2(a,W.d0(a),!1,[W.aK])},
"%":"Document|HTMLDocument|XMLDocument"},
l6:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
l7:{"^":"fD;",
gap:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gC:function(a){return a.z},
"%":"DOMPoint"},
fD:{"^":"h;",
gap:function(a){return a.w},
gl:function(a){return a.x},
gm:function(a){return a.y},
gC:function(a){return a.z},
"%":";DOMPointReadOnly"},
l8:{"^":"iy;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.a6]},
$iso:1,
$aso:function(){return[P.a6]},
$asj:function(){return[P.a6]},
$isi:1,
$asi:function(){return[P.a6]},
$ask:function(){return[P.a6]},
"%":"ClientRectList|DOMRectList"},
fE:{"^":"h;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(this.gE(a))+" x "+H.b(this.gD(a))},
F:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa6)return!1
return a.left===z.gc4(b)&&a.top===z.gcd(b)&&this.gE(a)===z.gE(b)&&this.gD(a)===z.gD(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gE(a)
w=this.gD(a)
return W.dZ(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gce:function(a){return new P.ag(a.left,a.top,[null])},
gD:function(a){return a.height},
gc4:function(a){return a.left},
gcd:function(a){return a.top},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
$isa6:1,
$asa6:I.ar,
"%":";DOMRectReadOnly"},
l9:{"^":"iA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[P.l]},
$iso:1,
$aso:function(){return[P.l]},
$asj:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"DOMStringList"},
la:{"^":"h;j:length=","%":"DOMTokenList"},
al:{"^":"r;S:style=,bt:namespaceURI=,ej:tagName=",
gdJ:function(a){return new W.iB(a)},
k:function(a){return a.localName},
R:["au",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.d_
if(z==null){z=H.y([],[W.dj])
y=new W.dk(z)
z.push(W.dW(null))
z.push(W.e7())
$.d_=y
d=y}else d=z
z=$.cZ
if(z==null){z=new W.ea(d)
$.cZ=z
c=z}else{z.a=d
c=z}}if($.a3==null){z=document
y=z.implementation.createHTMLDocument("")
$.a3=y
$.bS=y.createRange()
y=$.a3
y.toString
x=y.createElement("base")
J.f6(x,z.baseURI)
$.a3.head.appendChild(x)}z=$.a3
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.a3
if(!!this.$isbN)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.a3.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.u(C.Q,a.tagName)){$.bS.selectNodeContents(w)
v=$.bS.createContextualFragment(b)}else{w.innerHTML=b
v=$.a3.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.a3.body
if(w==null?z!=null:w!==z)J.cC(w)
c.b8(v)
document.adoptNode(v)
return v},function(a,b,c){return this.R(a,b,c,null)},"dS",null,null,"gex",5,5,null],
cB:function(a,b,c,d){a.textContent=null
a.appendChild(this.R(a,b,c,d))},
cA:function(a,b){return this.cB(a,b,null,null)},
b_:function(a){return a.getBoundingClientRect()},
gaR:function(a){return new W.a8(a,"mousedown",!1,[W.K])},
gaS:function(a){return new W.a8(a,"mousemove",!1,[W.K])},
gaT:function(a){return new W.a8(a,"mouseup",!1,[W.K])},
gaU:function(a){return new W.a8(a,W.d0(a),!1,[W.aK])},
$isal:1,
"%":";Element"},
fJ:{"^":"f:0;",
$1:function(a){return!!J.n(a).$isal}},
lb:{"^":"u;D:height},G:name=,E:width}","%":"HTMLEmbedElement"},
lc:{"^":"a4;K:error=","%":"ErrorEvent"},
a4:{"^":"h;",
an:function(a){return a.preventDefault()},
$isa4:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
z:{"^":"h;",
bE:["cH",function(a,b,c,d){if(c!=null)this.de(a,b,c,!1)}],
de:function(a,b,c,d){return a.addEventListener(b,H.a9(c,1),!1)},
ds:function(a,b,c,d){return a.removeEventListener(b,H.a9(c,1),!1)},
$isz:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;e4|e5|e8|e9"},
lw:{"^":"u;G:name=","%":"HTMLFieldSetElement"},
lx:{"^":"iH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bd]},
$iso:1,
$aso:function(){return[W.bd]},
$asj:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$ask:function(){return[W.bd]},
"%":"FileList"},
ly:{"^":"z;K:error=","%":"FileReader"},
lz:{"^":"z;K:error=,j:length=","%":"FileWriter"},
lB:{"^":"h;S:style=","%":"FontFace"},
lC:{"^":"z;",
ey:function(a,b,c){return a.forEach(H.a9(b,3),c)},
v:function(a,b){b=H.a9(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
lE:{"^":"u;j:length=,G:name=","%":"HTMLFormElement"},
lG:{"^":"c8;l:x=,m:y=,C:z=","%":"Gyroscope"},
lH:{"^":"h;j:length=","%":"History"},
lI:{"^":"iY;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$iso:1,
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
lJ:{"^":"u;D:height},G:name=,E:width}","%":"HTMLIFrameElement"},
bW:{"^":"h;",$isbW:1,"%":"ImageBitmap"},
bX:{"^":"h;",$isbX:1,"%":"ImageData"},
bY:{"^":"u;D:height},E:width}",$isbY:1,"%":"HTMLImageElement"},
lL:{"^":"u;D:height},G:name=,E:width}","%":"HTMLInputElement"},
bh:{"^":"dM;",
geq:function(a){return a.which},
$isbh:1,
"%":"KeyboardEvent"},
lQ:{"^":"u;ak:href}","%":"HTMLLinkElement"},
lS:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
lT:{"^":"c8;l:x=,m:y=,C:z=","%":"Magnetometer"},
lU:{"^":"u;G:name=","%":"HTMLMapElement"},
hd:{"^":"u;K:error=","%":"HTMLAudioElement;HTMLMediaElement"},
lX:{"^":"h;j:length=","%":"MediaList"},
lY:{"^":"z;",
U:function(a){return a.clone()},
"%":"MediaStream"},
lZ:{"^":"z;",
U:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
m_:{"^":"z;",
bE:function(a,b,c,d){if(J.H(b,"message"))a.start()
this.cH(a,b,c,!1)},
"%":"MessagePort"},
m0:{"^":"u;G:name=","%":"HTMLMetaElement"},
m1:{"^":"j4;",
h:function(a,b){return P.Q(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new W.hf(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.l,null]},
"%":"MIDIInputMap"},
hf:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
m2:{"^":"j5;",
h:function(a,b){return P.Q(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new W.hg(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
hg:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
m3:{"^":"j7;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bj]},
$iso:1,
$aso:function(){return[W.bj]},
$asj:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$ask:function(){return[W.bj]},
"%":"MimeTypeArray"},
K:{"^":"dM;bN:button=",
gc6:function(a){var z,y,x
if(!!a.offsetX)return new P.ag(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.eb(z)).$isal)throw H.a(P.p("offsetX is only supported on elements"))
y=W.eb(z)
z=[null]
x=new P.ag(a.clientX,a.clientY,z).I(0,J.eX(J.eZ(y)))
return new P.ag(J.cE(x.a),J.cE(x.b),z)}},
$isK:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
S:{"^":"dc;a",
gW:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.bp("No elements"))
if(y>1)throw H.a(P.bp("More than one element"))
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
return new W.d2(z,z.length,-1,null,[H.b6(C.S,z,"k",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asdc:function(){return[W.r]},
$asj:function(){return[W.r]},
$asi:function(){return[W.r]},
$ase_:function(){return[W.r]}},
r:{"^":"z;am:parentNode=,aV:previousSibling=",
geb:function(a){return new W.S(a)},
ed:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.cI(a):z},
$isr:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
mb:{"^":"h;",
ec:[function(a){return a.previousNode()},"$0","gaV",1,0,4],
"%":"NodeIterator"},
hp:{"^":"j9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$iso:1,
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"NodeList|RadioNodeList"},
me:{"^":"u;D:height},G:name=,E:width}","%":"HTMLObjectElement"},
mg:{"^":"u;G:name=","%":"HTMLOutputElement"},
mh:{"^":"u;G:name=","%":"HTMLParamElement"},
aY:{"^":"h;j:length=","%":"Plugin"},
mj:{"^":"jd;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.aY]},
$iso:1,
$aso:function(){return[W.aY]},
$asj:function(){return[W.aY]},
$isi:1,
$asi:function(){return[W.aY]},
$ask:function(){return[W.aY]},
"%":"PluginArray"},
mm:{"^":"h;",
b_:function(a){return a.getBoundingClientRect()},
"%":"Range"},
ms:{"^":"jj;",
h:function(a,b){return P.Q(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new W.hJ(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hJ:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mt:{"^":"u;j:length=,G:name=","%":"HTMLSelectElement"},
c8:{"^":"z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
mu:{"^":"a4;K:error=","%":"SensorErrorEvent"},
mv:{"^":"u;G:name=","%":"HTMLSlotElement"},
mw:{"^":"e5;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bm]},
$iso:1,
$aso:function(){return[W.bm]},
$asj:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$ask:function(){return[W.bm]},
"%":"SourceBufferList"},
mx:{"^":"jp;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bn]},
$iso:1,
$aso:function(){return[W.bn]},
$asj:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$ask:function(){return[W.bn]},
"%":"SpeechGrammarList"},
my:{"^":"a4;K:error=","%":"SpeechRecognitionError"},
b0:{"^":"h;j:length=","%":"SpeechRecognitionResult"},
mA:{"^":"js;",
h:function(a,b){return a.getItem(b)},
v:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new W.hX(z))
return z},
gj:function(a){return a.length},
$asP:function(){return[P.l,P.l]},
"%":"Storage"},
hX:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
i7:{"^":"u;",
R:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.au(a,b,c,d)
z=W.fI("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.S(y).M(0,J.eU(z))
return y},
"%":"HTMLTableElement"},
mD:{"^":"u;",
R:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.au(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.gW(z)
x.toString
z=new W.S(x)
w=z.gW(z)
y.toString
w.toString
new W.S(y).M(0,new W.S(w))
return y},
"%":"HTMLTableRowElement"},
mE:{"^":"u;",
R:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.au(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.R(z.createElement("table"),b,c,d)
z.toString
z=new W.S(z)
x=z.gW(z)
y.toString
x.toString
new W.S(y).M(0,new W.S(x))
return y},
"%":"HTMLTableSectionElement"},
dv:{"^":"u;",$isdv:1,"%":"HTMLTemplateElement"},
mF:{"^":"u;G:name=","%":"HTMLTextAreaElement"},
mH:{"^":"jA;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bt]},
$iso:1,
$aso:function(){return[W.bt]},
$asj:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$ask:function(){return[W.bt]},
"%":"TextTrackCueList"},
mI:{"^":"e9;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bs]},
$iso:1,
$aso:function(){return[W.bs]},
$asj:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$ask:function(){return[W.bs]},
"%":"TextTrackList"},
mJ:{"^":"h;j:length=","%":"TimeRanges"},
mK:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bu]},
$iso:1,
$aso:function(){return[W.bu]},
$asj:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$ask:function(){return[W.bu]},
"%":"TouchList"},
mL:{"^":"h;j:length=","%":"TrackDefaultList"},
mO:{"^":"h;",
ez:[function(a){return a.parentNode()},"$0","gam",1,0,4],
ec:[function(a){return a.previousNode()},"$0","gaV",1,0,4],
"%":"TreeWalker"},
dM:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
mQ:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
mS:{"^":"h;l:x=,C:z=","%":"VRStageBoundsPoint"},
cc:{"^":"hd;D:height},E:width}",$iscc:1,"%":"HTMLVideoElement"},
mT:{"^":"z;j:length=","%":"VideoTrackList"},
aK:{"^":"K;",
gdV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.p("deltaY is not supported"))},
$isaK:1,
"%":"WheelEvent"},
ii:{"^":"z;",
gdI:function(a){var z,y
z=P.aP
y=new P.E(0,$.q,null,[z])
this.dl(a)
this.dt(a,W.ef(new W.ij(new P.jw(y,[z]))))
return y},
dt:function(a,b){return a.requestAnimationFrame(H.a9(b,1))},
dl:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ij:{"^":"f:0;a",
$1:function(a){this.a.aN(0,a)}},
mU:{"^":"z;"},
mY:{"^":"r;G:name=,bt:namespaceURI=","%":"Attr"},
mZ:{"^":"jL;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$asj:function(){return[W.X]},
$isi:1,
$asi:function(){return[W.X]},
$ask:function(){return[W.X]},
"%":"CSSRuleList"},
n_:{"^":"fE;",
k:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
F:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isa6)return!1
return a.left===z.gc4(b)&&a.top===z.gcd(b)&&a.width===z.gE(b)&&a.height===z.gD(b)},
gw:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.dZ(W.ai(W.ai(W.ai(W.ai(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gce:function(a){return new P.ag(a.left,a.top,[null])},
gD:function(a){return a.height},
gE:function(a){return a.width},
gl:function(a){return a.x},
gm:function(a){return a.y},
"%":"ClientRect|DOMRect"},
n0:{"^":"jN;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.bf]},
$iso:1,
$aso:function(){return[W.bf]},
$asj:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$ask:function(){return[W.bf]},
"%":"GamepadList"},
n3:{"^":"jP;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$iso:1,
$aso:function(){return[W.r]},
$asj:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$ask:function(){return[W.r]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n4:{"^":"fn;",
U:function(a){return a.clone()},
"%":"Request"},
n5:{"^":"jR;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.b0]},
$iso:1,
$aso:function(){return[W.b0]},
$asj:function(){return[W.b0]},
$isi:1,
$asi:function(){return[W.b0]},
$ask:function(){return[W.b0]},
"%":"SpeechRecognitionResultList"},
n6:{"^":"jT;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ism:1,
$asm:function(){return[W.br]},
$iso:1,
$aso:function(){return[W.br]},
$asj:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$ask:function(){return[W.br]},
"%":"StyleSheetList"},
is:{"^":"c4;dm:a<",
v:function(a,b){var z,y,x,w,v
for(z=this.gJ(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.F)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gJ:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.y([],[P.l])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.e(z,w)
v=z[w]
u=J.d(v)
if(u.gbt(v)==null)y.push(u.gG(v))}return y},
$asc4:function(){return[P.l,P.l]},
$asP:function(){return[P.l,P.l]}},
iB:{"^":"is;a",
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.gJ(this).length}},
b2:{"^":"bq;a,b,c,$ti",
aQ:function(a,b,c,d){return W.ah(this.a,this.b,a,!1,H.A(this,0))}},
a8:{"^":"b2;a,b,c,$ti"},
iD:{"^":"hY;a,b,c,d,e,$ti",
d7:function(a,b,c,d,e){this.dD()},
bO:function(a){if(this.b==null)return
this.dE()
this.b=null
this.d=null
return},
dD:function(){var z=this.d
if(z!=null&&this.a<=0)J.eD(this.b,this.c,z,!1)},
dE:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.eC(x,this.c,z,!1)}},
p:{
ah:function(a,b,c,d,e){var z=W.ef(new W.iE(c))
z=new W.iD(0,a,b,z,!1,[e])
z.d7(a,b,c,!1,e)
return z}}},
iE:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
ce:{"^":"c;cp:a<",
d8:function(a){var z,y
z=$.$get$cf()
if(z.a===0){for(y=0;y<262;++y)z.i(0,C.P[y],W.kn())
for(y=0;y<12;++y)z.i(0,C.p[y],W.ko())}},
a1:function(a){return $.$get$dX().u(0,W.aA(a))},
T:function(a,b,c){var z,y,x
z=W.aA(a)
y=$.$get$cf()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
dW:function(a){var z,y
z=document.createElement("a")
y=new W.jk(z,window.location)
y=new W.ce(y)
y.d8(a)
return y},
n1:[function(a,b,c,d){return!0},"$4","kn",16,0,9],
n2:[function(a,b,c,d){var z,y,x,w,v
z=d.gcp()
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
return z},"$4","ko",16,0,9]}},
k:{"^":"c;$ti",
gH:function(a){return new W.d2(a,this.gj(a),-1,null,[H.b6(this,a,"k",0)])}},
dk:{"^":"c;a",
a1:function(a){return C.c.bF(this.a,new W.hr(a))},
T:function(a,b,c){return C.c.bF(this.a,new W.hq(a,b,c))}},
hr:{"^":"f:0;a",
$1:function(a){return a.a1(this.a)}},
hq:{"^":"f:0;a,b,c",
$1:function(a){return a.T(this.a,this.b,this.c)}},
jl:{"^":"c;cp:d<",
da:function(a,b,c,d){var z,y,x
this.a.M(0,c)
z=b.aZ(0,new W.jm())
y=b.aZ(0,new W.jn())
this.b.M(0,z)
x=this.c
x.M(0,C.w)
x.M(0,y)},
a1:function(a){return this.a.u(0,W.aA(a))},
T:["cL",function(a,b,c){var z,y
z=W.aA(a)
y=this.c
if(y.u(0,H.b(z)+"::"+b))return this.d.dH(c)
else if(y.u(0,"*::"+b))return this.d.dH(c)
else{y=this.b
if(y.u(0,H.b(z)+"::"+b))return!0
else if(y.u(0,"*::"+b))return!0
else if(y.u(0,H.b(z)+"::*"))return!0
else if(y.u(0,"*::*"))return!0}return!1}]},
jm:{"^":"f:0;",
$1:function(a){return!C.c.u(C.p,a)}},
jn:{"^":"f:0;",
$1:function(a){return C.c.u(C.p,a)}},
jx:{"^":"jl;e,a,b,c,d",
T:function(a,b,c){if(this.cL(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cx(a).a.getAttribute("template")==="")return this.e.u(0,b)
return!1},
p:{
e7:function(){var z=P.l
z=new W.jx(P.c2(C.o,z),P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z),null)
z.da(null,new H.hc(C.o,new W.jy(),[H.A(C.o,0),null]),["TEMPLATE"],null)
return z}}},
jy:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.b(a)}},
jv:{"^":"c;",
a1:function(a){var z=J.n(a)
if(!!z.$isdp)return!1
z=!!z.$isx
if(z&&W.aA(a)==="foreignObject")return!1
if(z)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.i.cE(b,"on"))return!1
return this.a1(a)}},
d2:{"^":"c;a,b,c,d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aw(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gB:function(a){return this.d}},
iv:{"^":"c;a",$isz:1,p:{
iw:function(a){if(a===window)return a
else return new W.iv(a)}}},
dj:{"^":"c;"},
mc:{"^":"c;"},
mP:{"^":"c;"},
jk:{"^":"c;a,b"},
ea:{"^":"c;a",
b8:function(a){new W.jI(this).$2(a,null)},
a8:function(a,b){if(b==null)J.cC(a)
else b.removeChild(a)},
dw:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cx(a)
x=y.gdm().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.G(t)}v="element unprintable"
try{v=J.ay(a)}catch(t){H.G(t)}try{u=W.aA(a)
this.dv(a,b,z,v,u,y,x)}catch(t){if(H.G(t) instanceof P.ad)throw t
else{this.a8(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dv:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.a8(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a1(a)){this.a8(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.T(a,"is",g)){this.a8(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ(f)
y=H.y(z.slice(0),[H.A(z,0)])
for(x=f.gJ(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.e(y,x)
w=y[x]
if(!this.a.T(a,J.fa(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.b(e)+" "+w+'="'+H.b(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$isdv)this.b8(a.content)}},
jI:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dw(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.a8(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.eV(z)}catch(w){H.G(w)
v=z
if(x){u=J.d(v)
if(u.gam(v)!=null){u.gam(v)
u.gam(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
iu:{"^":"h+fx;"},
ix:{"^":"h+j;"},
iy:{"^":"ix+k;"},
iz:{"^":"h+j;"},
iA:{"^":"iz+k;"},
iG:{"^":"h+j;"},
iH:{"^":"iG+k;"},
iX:{"^":"h+j;"},
iY:{"^":"iX+k;"},
j4:{"^":"h+P;"},
j5:{"^":"h+P;"},
j6:{"^":"h+j;"},
j7:{"^":"j6+k;"},
j8:{"^":"h+j;"},
j9:{"^":"j8+k;"},
jc:{"^":"h+j;"},
jd:{"^":"jc+k;"},
jj:{"^":"h+P;"},
e4:{"^":"z+j;"},
e5:{"^":"e4+k;"},
jo:{"^":"h+j;"},
jp:{"^":"jo+k;"},
js:{"^":"h+P;"},
jz:{"^":"h+j;"},
jA:{"^":"jz+k;"},
e8:{"^":"z+j;"},
e9:{"^":"e8+k;"},
jE:{"^":"h+j;"},
jF:{"^":"jE+k;"},
jK:{"^":"h+j;"},
jL:{"^":"jK+k;"},
jM:{"^":"h+j;"},
jN:{"^":"jM+k;"},
jO:{"^":"h+j;"},
jP:{"^":"jO+k;"},
jQ:{"^":"h+j;"},
jR:{"^":"jQ+k;"},
jS:{"^":"h+j;"},
jT:{"^":"jS+k;"}}],["","",,P,{"^":"",
ek:function(a){return a},
Q:function(a){var z,y,x,w,v
if(a==null)return
z=P.O()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=y[w]
z.i(0,v,a[v])}return z},
ke:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cw(a,new P.kf(z))
return z},
cY:function(){var z=$.cX
if(z==null){z=J.bH(window.navigator.userAgent,"Opera",0)
$.cX=z}return z},
fB:function(){var z,y
z=$.cU
if(z!=null)return z
y=$.cV
if(y==null){y=J.bH(window.navigator.userAgent,"Firefox",0)
$.cV=y}if(y)z="-moz-"
else{y=$.cW
if(y==null){y=P.cY()!==!0&&J.bH(window.navigator.userAgent,"Trident/",0)
$.cW=y}if(y)z="-ms-"
else z=P.cY()===!0?"-o-":"-webkit-"}$.cU=z
return z},
kf:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}}}],["","",,P,{"^":"",mr:{"^":"z;K:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},mM:{"^":"z;K:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
dY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iZ:{"^":"c;",
ea:function(){return Math.random()}},
ag:{"^":"c;l:a>,m:b>,$ti",
k:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
F:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ag))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gw:function(a){var z,y
z=J.a1(this.a)
y=J.a1(this.b)
return P.j_(P.dY(P.dY(0,z),y))},
n:function(a,b){var z,y,x
z=this.a
y=C.b.gl(b)
if(typeof z!=="number")return z.n()
y=C.a.n(z,y)
z=this.b
x=C.b.gm(b)
if(typeof z!=="number")return z.n()
return new P.ag(y,C.a.n(z,x),this.$ti)},
I:function(a,b){var z,y,x,w
z=this.a
y=J.d(b)
x=y.gl(b)
if(typeof z!=="number")return z.I()
if(typeof x!=="number")return H.L(x)
w=this.b
y=y.gm(b)
if(typeof w!=="number")return w.I()
if(typeof y!=="number")return H.L(y)
return new P.ag(z-x,w-y,this.$ti)}},
je:{"^":"c;$ti"},
a6:{"^":"je;$ti"}}],["","",,P,{"^":"",le:{"^":"x;l:x=,m:y=","%":"SVGFEBlendElement"},lf:{"^":"x;l:x=,m:y=","%":"SVGFEColorMatrixElement"},lg:{"^":"x;l:x=,m:y=","%":"SVGFEComponentTransferElement"},lh:{"^":"x;l:x=,m:y=","%":"SVGFECompositeElement"},li:{"^":"x;l:x=,m:y=","%":"SVGFEConvolveMatrixElement"},lj:{"^":"x;l:x=,m:y=","%":"SVGFEDiffuseLightingElement"},lk:{"^":"x;l:x=,m:y=","%":"SVGFEDisplacementMapElement"},ll:{"^":"x;l:x=,m:y=","%":"SVGFEFloodElement"},lm:{"^":"x;l:x=,m:y=","%":"SVGFEGaussianBlurElement"},ln:{"^":"x;l:x=,m:y=","%":"SVGFEImageElement"},lo:{"^":"x;l:x=,m:y=","%":"SVGFEMergeElement"},lp:{"^":"x;l:x=,m:y=","%":"SVGFEMorphologyElement"},lq:{"^":"x;l:x=,m:y=","%":"SVGFEOffsetElement"},lr:{"^":"x;l:x=,m:y=,C:z=","%":"SVGFEPointLightElement"},ls:{"^":"x;l:x=,m:y=","%":"SVGFESpecularLightingElement"},lt:{"^":"x;l:x=,m:y=,C:z=","%":"SVGFESpotLightElement"},lu:{"^":"x;l:x=,m:y=","%":"SVGFETileElement"},lv:{"^":"x;l:x=,m:y=","%":"SVGFETurbulenceElement"},lA:{"^":"x;l:x=,m:y=","%":"SVGFilterElement"},lD:{"^":"aB;l:x=,m:y=","%":"SVGForeignObjectElement"},fU:{"^":"aB;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aB:{"^":"x;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lK:{"^":"aB;l:x=,m:y=","%":"SVGImageElement"},lP:{"^":"j1;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.da]},
$isi:1,
$asi:function(){return[P.da]},
$ask:function(){return[P.da]},
"%":"SVGLengthList"},lV:{"^":"x;l:x=,m:y=","%":"SVGMaskElement"},md:{"^":"jb;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dm]},
$isi:1,
$asi:function(){return[P.dm]},
$ask:function(){return[P.dm]},
"%":"SVGNumberList"},mi:{"^":"x;l:x=,m:y=","%":"SVGPatternElement"},mk:{"^":"h;l:x=,m:y=","%":"SVGPoint"},ml:{"^":"h;j:length=","%":"SVGPointList"},mn:{"^":"h;l:x=,m:y=","%":"SVGRect"},mo:{"^":"fU;l:x=,m:y=","%":"SVGRectElement"},dp:{"^":"x;",$isdp:1,"%":"SVGScriptElement"},mB:{"^":"ju;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.l]},
$isi:1,
$asi:function(){return[P.l]},
$ask:function(){return[P.l]},
"%":"SVGStringList"},x:{"^":"al;",
R:function(a,b,c,d){var z,y,x,w,v,u
z=H.y([],[W.dj])
z.push(W.dW(null))
z.push(W.e7())
z.push(new W.jv())
c=new W.ea(new W.dk(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).dS(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.S(w)
u=z.gW(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gaR:function(a){return new W.a8(a,"mousedown",!1,[W.K])},
gaS:function(a){return new W.a8(a,"mousemove",!1,[W.K])},
gaT:function(a){return new W.a8(a,"mouseup",!1,[W.K])},
gaU:function(a){return new W.a8(a,"mousewheel",!1,[W.aK])},
$isx:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mC:{"^":"aB;l:x=,m:y=","%":"SVGSVGElement"},i8:{"^":"aB;","%":"SVGTextPathElement;SVGTextContentElement"},mG:{"^":"i8;l:x=,m:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mN:{"^":"jH;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.dz]},
$isi:1,
$asi:function(){return[P.dz]},
$ask:function(){return[P.dz]},
"%":"SVGTransformList"},mR:{"^":"aB;l:x=,m:y=","%":"SVGUseElement"},j0:{"^":"h+j;"},j1:{"^":"j0+k;"},ja:{"^":"h+j;"},jb:{"^":"ja+k;"},jt:{"^":"h+j;"},ju:{"^":"jt+k;"},jG:{"^":"h+j;"},jH:{"^":"jG+k;"}}],["","",,P,{"^":"",kK:{"^":"h;j:length=","%":"AudioBuffer"},kL:{"^":"it;",
h:function(a,b){return P.Q(a.get(b))},
v:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.Q(y.value[1]))}},
gJ:function(a){var z=H.y([],[P.l])
this.v(a,new P.fl(z))
return z},
gj:function(a){return a.size},
$asP:function(){return[P.l,null]},
"%":"AudioParamMap"},fl:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},kM:{"^":"z;j:length=","%":"AudioTrackList"},fm:{"^":"z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mf:{"^":"fm;j:length=","%":"OfflineAudioContext"},it:{"^":"h+P;"}}],["","",,P,{"^":"",mp:{"^":"h;",
bD:function(a,b){return a.activeTexture(b)},
bG:function(a,b,c){return a.attachShader(b,c)},
bH:function(a,b,c){return a.bindBuffer(b,c)},
bJ:function(a,b,c){return a.bindTexture(b,c)},
bK:function(a,b){return a.blendEquation(b)},
bL:function(a,b,c){return a.blendFunc(b,c)},
bM:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bQ:function(a,b){return a.compileShader(b)},
bR:function(a){return a.createBuffer()},
bS:function(a){return a.createProgram()},
bT:function(a,b){return a.createShader(b)},
bU:function(a){return a.createTexture()},
bW:function(a,b){return a.depthMask(b)},
bX:function(a,b){return a.disable(b)},
bY:function(a,b,c,d){return a.drawArrays(b,c,d)},
bZ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c_:function(a,b){return a.enable(b)},
c0:function(a,b){return a.enableVertexAttribArray(b)},
aq:function(a){return P.Q(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aX:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.n(g)
if(!!z.$isbX)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ek(g))
return}if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbb)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbW)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cK("Incorrect number or type of arguments"))},
ca:function(a,b,c,d,e,f,g){return this.aX(a,b,c,d,e,f,g,null,null,null)},
cb:function(a,b,c,d){return a.texParameterf(b,c,d)},
cc:function(a,b,c,d){return a.texParameteri(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ct:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},mq:{"^":"h;",
dK:function(a,b){return a.beginTransformFeedback(b)},
dN:function(a,b){return a.bindVertexArray(b)},
dU:function(a){return a.createVertexArray()},
dW:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dX:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dY:function(a){return a.endTransformFeedback()},
eo:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
ep:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bD:function(a,b){return a.activeTexture(b)},
bG:function(a,b,c){return a.attachShader(b,c)},
bH:function(a,b,c){return a.bindBuffer(b,c)},
bJ:function(a,b,c){return a.bindTexture(b,c)},
bK:function(a,b){return a.blendEquation(b)},
bL:function(a,b,c){return a.blendFunc(b,c)},
bM:function(a,b,c,d){return a.bufferData(b,c,d)},
bP:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bQ:function(a,b){return a.compileShader(b)},
bR:function(a){return a.createBuffer()},
bS:function(a){return a.createProgram()},
bT:function(a,b){return a.createShader(b)},
bU:function(a){return a.createTexture()},
bW:function(a,b){return a.depthMask(b)},
bX:function(a,b){return a.disable(b)},
bY:function(a,b,c,d){return a.drawArrays(b,c,d)},
bZ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c_:function(a,b){return a.enable(b)},
c0:function(a,b){return a.enableVertexAttribArray(b)},
aq:function(a){return P.Q(a.getContextAttributes())},
b1:function(a){return a.getError()},
b2:function(a,b){return a.getProgramInfoLog(b)},
b3:function(a,b,c){return a.getProgramParameter(b,c)},
b4:function(a,b){return a.getShaderInfoLog(b)},
b5:function(a,b,c){return a.getShaderParameter(b,c)},
b6:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
c7:function(a,b,c){return a.pixelStorei(b,c)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aX:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.n(g)
if(!!z.$isbX)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ek(g))
return}if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbb)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$iscc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,g)
return}if(!!z.$isbW)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cK("Incorrect number or type of arguments"))},
ca:function(a,b,c,d,e,f,g){return this.aX(a,b,c,d,e,f,g,null,null,null)},
cb:function(a,b,c,d){return a.texParameterf(b,c,d)},
cc:function(a,b,c,d){return a.texParameteri(b,c,d)},
cf:function(a,b,c){return a.uniform1f(b,c)},
cg:function(a,b,c){return a.uniform1fv(b,c)},
ci:function(a,b,c){return a.uniform1i(b,c)},
cj:function(a,b,c){return a.uniform1iv(b,c)},
ck:function(a,b,c){return a.uniform2fv(b,c)},
cl:function(a,b,c){return a.uniform3fv(b,c)},
cm:function(a,b,c){return a.uniform4fv(b,c)},
cn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
co:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
cr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ct:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",mz:{"^":"jr;",
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.w(b,a,null,null,null))
return P.Q(a.item(b))},
i:function(a,b,c){throw H.a(P.p("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$asj:function(){return[P.c3]},
$isi:1,
$asi:function(){return[P.c3]},
$ask:function(){return[P.c3]},
"%":"SQLResultSetRowList"},jq:{"^":"h+j;"},jr:{"^":"jq+k;"}}],["","",,G,{"^":"",
ik:function(a){var z,y,x,w
z=H.y(a.split("\n"),[P.l])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.e(z,y)
w+=H.b(z[y])
if(y>=z.length)return H.e(z,y)
z[y]=w}return C.c.ab(z,"\n")},
dS:function(a,b,c){var z,y,x,w
z=J.d(a)
y=z.bT(a,b)
z.ba(a,y,c)
z.bQ(a,y)
x=z.b5(a,y,35713)
if(x!=null&&J.H(x,!1)){w=z.b4(a,y)
P.ak("E:Compilation failed:")
P.ak("E:"+G.ik(c))
P.ak("E:Failure:")
P.ak(C.i.n("E:",w))
throw H.a(w)}return y},
d3:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bK(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.bL(a[y])
if(x>=w)return H.e(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.e(a,y)
v=J.cA(a[y])
if(z>=w)return H.e(b,z)
b[z]=v}return b},
fN:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bK(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x;++z
if(y>=a.length)return H.e(a,y)
x=J.bL(a[y])
if(z>=w)return H.e(b,z)
b[z]=x}return b},
fO:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bK(a[y])
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.bL(a[y])
if(x>=w)return H.e(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.e(a,y)
x=J.cA(a[y])
if(v>=w)return H.e(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.e(a,y)
x=J.eY(a[y])
if(z>=w)return H.e(b,z)
b[z]=x}return b},
fM:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.aw(a[y],0)
w=b.length
if(z>=w)return H.e(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.e(a,y)
v=J.aw(a[y],1)
if(x>=w)return H.e(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.e(a,y)
x=J.aw(a[y],2)
if(v>=w)return H.e(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.e(a,y)
x=J.aw(a[y],3)
if(z>=w)return H.e(b,z)
b[z]=x}return b},
iV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.ae(z,z.r,null,null,[H.A(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.B]],v=[P.aj],u=[T.Z],t=[T.t],s=[T.a7];y.t();){r=y.d
if(!x.aj(0,r)){q="Dropping unnecessary attribute: "+H.b(r)
if($.em>0)H.bF("I: "+q)
continue}p=z.h(0,r)
switch($.$get$T().h(0,r).a){case"vec2":b.a5(r,G.fN(H.b7(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.a5(r,G.d3(H.b7(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.a5(r,G.fO(H.b7(p,"$isi",u,"$asi"),null),4)
break
case"float":b.a5(r,new Float32Array(H.bx(H.b7(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.a5(r,G.fM(H.b7(p,"$isi",w,"$asi"),null),4)
break}}},
bk:{"^":"c;"},
dN:{"^":"bk;",
bi:function(){return this.d},
k:function(a){var z,y,x,w
z=H.y(["{"+H.b(new H.dL(H.kk(this),null))+"}["+this.a+"]"],[P.l])
for(y=this.d,x=new H.ae(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
z.push(H.b(w)+": "+H.b(y.h(0,w)))}return C.c.ab(z,"\n")}},
fo:{"^":"hT;"},
fq:{"^":"c;a,b",
c1:function(a,b,c){J.eS(this.a,b)
if(c>0)J.fg(this.a,b,c)},
cs:function(a,b,c,d,e,f,g,h){J.bG(this.a,34962,b)
J.fh(this.a,c,d,e,!1,g,h)}},
fL:{"^":"c;a,b,c,d"},
fT:{"^":"c;a,b,c,d,e",
cP:function(){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=new Array(z.length*6)
y.fixed$length=Array
x=H.y(y,[P.B])
for(y=this.b,w=x.length,v=0,u=0;!1;++u){if(u>=0)return H.e(y,u)
t=y[u]
s=t.geu(t)
if(v>=w)return H.e(x,v)
x[v]=s
s=v+1
r=t.gev(t)
if(s>=w)return H.e(x,s)
x[s]=r
r=v+2
s=t.gew(t)
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
cR:function(a,b){var z,y,x,w,v,u,t
z=[]
this.e.i(0,"aTexUV",z)
for(y=b-1,x=a-1,w=0;w<b;++w)for(v=w/y,u=0;u<a;++u){t=new Float32Array(2)
t[0]=v
t[1]=u/x
z.push(new T.a7(t))}},
cQ:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
z.push(new G.fL(v+s,r+s,r+t,v+t))
t=s}w=u}},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(y=this.e,x=new H.ae(y,y.r,null,null,[H.A(y,0)]),x.c=y.e;x.t();){w=x.d
v=$.$get$T().h(0,w).a
z.push(H.b(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.ab(z," ")}},
dy:{"^":"c;a,b,c"},
dw:{"^":"c;a,b,c",p:{
dx:function(a,b,c){return new G.dw(a,b,c)}}},
df:{"^":"dN;d,a,b,c",
cV:function(a){var z=this.d
z.i(0,"cDepthTest",!0)
z.i(0,"cDepthWrite",!0)
z.i(0,"cBlendEquation",$.$get$cM())
z.i(0,"cStencilFunc",$.$get$c9())},
p:{
dg:function(a){var z=new G.df(P.O(),a,!1,!0)
z.cV(a)
return z}}},
he:{"^":"bk;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bg:function(a,b,c){var z,y
C.i.bp(a,0)
this.cy.i(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bG(z.a,34962,y)
J.cs(z.a,34962,b,35048)},
cS:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
a5:function(a,b,c){var z,y,x,w,v
z=J.cu(a,0)===105
if(z&&this.z===0)this.z=C.b.cM(b.length,c)
y=this.r
x=this.d
y.i(0,a,J.bI(x.a))
this.bg(a,b,c)
w=$.$get$T().h(0,a)
if(w==null)throw H.a("Unknown canonical "+a)
v=this.x.h(0,a)
J.b8(x.a,this.e)
x.c1(0,v,z?1:0)
x.cs(0,y.h(0,a),v,w.bh(),5126,!1,0,0)},
bf:function(a){var z,y,x,w
z=this.r
y=this.d
z.i(0,"aPosition",J.bI(y.a))
this.ch=a
this.bg("aPosition",a,3)
x=$.$get$T().h(0,"aPosition")
if(x==null)throw H.a("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.b8(y.a,this.e)
y.c1(0,w,0)
y.cs(0,z.h(0,"aPosition"),w,x.bh(),5126,!1,0,0)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.ae(z,z.r,null,null,[H.A(z,0)]),x.c=z.e;x.t();){w=x.d
y.push(H.b(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.ab(y,"  ")},
p:{
dh:function(a,b,c,d){return new G.he(b,J.eM(b.a),c,P.O(),d,null,0,-1,null,null,P.O(),"meshdata:"+a,!1,!0)}}},
hv:{"^":"dN;",
cN:function(a,b){var z
if(typeof a!=="number")return a.a3()
if(typeof b!=="number")return H.L(b)
z=a/b
if(this.z===z)return
this.z=z
this.bj()},
bj:function(){var z,y,x,w,v,u
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
bi:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.t(new Float32Array(3))
u.as(x,w,v)
v=this.d
v.i(0,"uEyePosition",u)
u=this.cy
u.A(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.n(t)
x=!!y.$isZ
q=x?y.gap(t):1
if(!!y.$ist){p=y.gl(t)
s=y.gm(t)
r=y.gC(t)
t=p}else if(x){p=y.gl(t)
s=y.gm(t)
r=y.gC(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.L(t)
x=z[4]
if(typeof s!=="number")return H.L(s)
w=z[8]
if(typeof r!=="number")return H.L(r)
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
c.A(this.db)
c.e9(0,u)
v.i(0,"uPerspectiveViewMatrix",c)
return v}},
hI:{"^":"bk;d,e,f,r,x,y,z,Q,ch,a,b,c",
cX:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.cB(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.i(0,t,J.cB(w.a,v,t))}},
d3:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.ae(y,y.r,null,null,[H.A(y,0)]),w.c=y.e;w.t();){v=w.d
if(!z.aj(0,v))x.push(v)}for(z=this.x,y=new P.cg(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.t();){v=y.d
if(!z.u(0,v))x.push(v)}return x},
d6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.ae(b,b.r,null,null,[H.A(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.t();){t=y.d
switch(J.cu(t,0)){case 117:if(w.aj(0,t)){s=b.h(0,t)
if(v.aj(0,t))H.bF("E:"+(t+" : group ["+H.b(a)+"] overwrites ["+t+"]"))
v.i(0,t,a)
r=$.$get$T().h(0,t)
if(r==null)H.V("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.bM(x.a,q,s)
else if(!!J.n(s).$isfX)J.fe(x.a,q,s)
break
case"float":if(r.c===0)J.fc(x.a,q,s)
else if(!!J.n(s).$isbU)J.fd(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.ac(s,"$isJ").a
J.cJ(x.a,q,!1,p)}else if(!!J.n(s).$isbU)J.cJ(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=C.H.ger(H.ac(s,"$islW"))
J.cI(x.a,q,!1,p)}else if(!!J.n(s).$isbU)J.cI(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.cH(o,q,H.ac(s,"$isZ").a)
else J.cH(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.cG(o,q,H.ac(s,"$ist").a)
else J.cG(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.cF(o,q,H.ac(s,"$isa7").a)
else J.cF(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.L(p)
J.cq(x.a,33984+p)
p=H.ac(s,"$iscb").b
J.aS(x.a,3553,p)
p=this.ch
J.bM(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.L(p)
J.cq(x.a,33984+p)
p=H.ac(s,"$iscb").b
J.aS(x.a,34067,p)
p=this.ch
J.bM(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.n()
this.ch=p+1
break
default:H.bF("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.H(s,!0)
o=x.a
if(p)J.aT(o,2929)
else J.bJ(o,2929)
break
case"cStencilFunc":H.ac(s,"$isdy")
p=s.a
o=x.a
if(p===1281)J.bJ(o,2960)
else{J.aT(o,2960)
o=s.b
n=s.c
J.f7(x.a,p,o,n)}break
case"cDepthWrite":J.eN(x.a,s)
break
case"cBlendEquation":H.ac(s,"$isdw")
p=s.a
o=x.a
if(p===1281)J.bJ(o,3042)
else{J.aT(o,3042)
o=s.b
n=s.c
J.eG(x.a,o,n)
J.eF(x.a,p)}break}++u
break}}m=P.fF(0,0,0,Date.now()-new P.cT(z,!1).a,0,0)
""+u
m.k(0)},
cO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.ff(z.a,this.r)
this.ch=0
y=this.z
if(y.a>0){y.f=null
y.e=null
y.d=null
y.c=null
y.b=null
y.a=0
y.bl()}for(x=0;x<2;++x){w=b[x]
this.d6(w.a,w.bi())}y=this.Q
y.a9(0)
for(v=a.cy,u=new H.ae(v,v.r,null,null,[H.A(v,0)]),u.c=v.e;u.t();)y.O(0,u.d)
t=this.d3()
if(t.length!==0)P.ak("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.b(t)))
J.b8(a.d.a,a.e)
s=this.e.f.length>0
y=a.f
v=a.cS()
u=a.Q
r=a.z
if(s)J.eE(z.a,y)
if(u!==-1){q=z.a
if(r>1)J.eR(q,y,v,u,0,r)
else J.eQ(q,y,v,u,0)}else{u=z.a
if(r>1)J.eP(u,y,0,v,r)
else J.eO(u,y,0,v)}if(s)J.eT(z.a)},
aw:function(a,b){return this.cO(a,b,null)},
p:{
c7:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.R(null,null,null,P.l)
y=c.b
x=d.b
w=c.f
v=J.eJ(b.a)
u=G.dS(b.a,35633,y)
J.cr(b.a,v,u)
t=G.dS(b.a,35632,x)
J.cr(b.a,v,t)
if(w.length>0)J.fb(b.a,v,w,35980)
J.f4(b.a,v)
if(J.f3(b.a,v,35714)!==!0)H.V(J.f2(b.a,v))
z=new G.hI(b,c,d,v,P.c2(c.c,null),P.O(),P.O(),z,null,a,!1,!0)
z.cX(a,b,c,d)
return z}}},
v:{"^":"c;a,b,c",
bh:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
dq:{"^":"c;a,b,c,d,e,f,r,x",
av:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.F)(a),++w){v=a[w]
y.push(v)
x.i(0,v,this.r);++this.r}C.c.at(y)},
Y:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x)y.push(a[x])
C.c.at(y)},
af:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.at(z)},
d_:function(a,b){this.b=this.ax(!0,a,b)},
ag:function(a){return this.d_(a,null)},
cZ:function(a,b){this.b=this.ax(!1,a,b)},
cY:function(a){return this.cZ(a,null)},
ax:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
s=$.$get$T().h(0,t)
w.push("layout (location="+H.b(v.h(0,t))+") in "+s.a+" "+H.b(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
w.push(r+" "+s.a+" "+H.b(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$T().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.b(q)+p+";")}w.push("")
if(a)w.push("void main(void) {")
C.c.M(w,b)
if(a)w.push("}")
return C.c.ab(w,"\n")},
p:{
aZ:function(a){return new G.dq(a,null,[],[],[],[],0,P.O())}}},
hT:{"^":"bk;"},
i9:{"^":"c;a,b,c,d,e,f,r"},
cb:{"^":"c;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
fV:{"^":"cb;f,a,b,c,d,e",
cT:function(a,b,c,d,e){var z,y,x,w
z=this.d
y=this.c
J.aS(z.a,y,this.b)
J.f5(z.a,37440,1)
this.d0(this.f)
x=this.e
w=x.e
if(w!==1)J.f9(z.a,y,34046,w)
J.cD(z.a,y,10240,x.r)
J.cD(z.a,y,10241,x.f)
J.f1(z.a)
J.aS(z.a,y,null)},
d0:function(a){var z,y
z=this.d
y=this.c
J.aS(z.a,y,this.b)
J.f8(z.a,y,0,6408,6408,5121,a)},
p:{
d4:function(a,b,c,d,e){var z=new G.fV(c,b,J.eL(a.a),e,a,new G.i9(!1,!1,!1,!0,1,9729,9729))
z.cT(a,b,c,d,e)
return z}}}}],["","",,R,{"^":"",
ig:function(a,b,c){var z,y,x,w,v,u
z="stars_"+b
y=b*3
x=new Float32Array(y)
for(w=x.length,v=0;v<y;++v){u=$.$get$dP().ea()
if(v>=w)return H.e(x,v)
x[v]=(u-0.5)*c}y=G.dh(z,a.d,0,a.e.x)
y.bf(x)
return y},
hw:{"^":"hv;fy,go,x,y,z,Q,ch,cx,cy,db,d,a,b,c",
ef:[function(a){var z,y,x,w
z=this.fy
y=z.clientWidth
x=z.clientHeight
w=J.d(z)
w.sE(z,y)
w.sD(z,x)
P.ak("size change "+H.b(y)+" "+H.b(x))
this.cN(y,x)
J.fi(this.go.a,0,0,y,x)},"$1","gee",4,0,17]},
hV:{"^":"c;",
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
x=this.d9(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
d9:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.iC("span",null)
y=J.cy(v)
J.d(y).sE(y,"1px")
C.n.sD(y,""+d+"px")
C.n.se_(y,"left")
x=C.n.bo(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
hW:{"^":"hV;e,f,a,b,c,d",
d5:function(a,b){var z,y,x,w,v;++this.e
if(J.aR(J.eB(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.en(z,2)+" fps"
y=this.c;(y&&C.F).cA(y,b)
x=C.b.a0(30*C.t.dO(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cy(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
d4:function(a){return this.d5(a,"")}}}],["","",,V,{}],["","",,B,{"^":"",
hO:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t,s,r,q,p,o
z=h+1
y=g+1
x=B.ia(B.hu(new B.hP(e,d,f,c),0,6.283185307179586,y,!1,0.001),h,i,!1)
w=[]
v=new G.fT(!1,[],[],w,P.O())
for(u=x.length,t=0;t<x.length;x.length===u||(0,H.F)(x),++t){s=x[t]
for(r=0;r<s.length;r+=2)w.push(J.ct(s[r]))}v.cQ(z,y,!1)
v.cR(z,y)
q=$.$get$T().h(0,"aNormal")
switch(q.a){case"vec2":v.e.i(0,"aNormal",H.y([],[T.a7]))
break
case"vec3":v.e.i(0,"aNormal",H.y([],[T.t]))
break
case"vec4":v.e.i(0,"aNormal",H.y([],[T.Z]))
break
case"float":v.e.i(0,"aNormal",H.y([],[P.aj]))
break
case"uvec4":v.e.i(0,"aNormal",H.y([],[[P.i,P.B]]))
break}for(w=x.length,u=v.e,t=0;t<x.length;x.length===w||(0,H.F)(x),++t){s=x[t]
for(r=0;p=s.length,r<p;r+=2){o=r+1
if(o>=p)return H.e(s,o)
o=s[o]
u.h(0,"aNormal").push(J.ct(o))}}return v},
ia:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=[]
y=new Float32Array(3)
x=new T.t(y)
w=new Float32Array(3)
v=new T.t(w)
u=new Float32Array(3)
t=new T.t(u)
for(s=b+1,r=0;q=a.length,r<q;r+=2){p=a[r]
o=r+1
if(o>=q)return H.e(a,o)
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
x.A(p)
x.ai(v,g)
x.ai(t,f)
q=new T.t(new Float32Array(3))
q.A(x)
m.push(q)
y[2]=0
y[1]=0
y[0]=0
x.ai(v,g)
x.ai(t,f)
x.a2(0)
q=new T.t(new Float32Array(3))
q.A(x)
m.push(q)}}return z},
hu:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=[]
y=new T.t(new Float32Array(3))
x=new T.t(new Float32Array(3))
for(w=(c-b)/(d-1),v=0;v<d;++v){u=w*v+b
a.$2(u,y)
a.$2(u+f,x)
x.bd(0,y)
t=new T.t(new Float32Array(3))
t.A(y)
z.push(t)
t=new T.t(new Float32Array(3))
t.A(x)
z.push(t)}return z},
hP:{"^":"f:18;a,b,c,d",
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
b.sC(0,this.d*z*0.5*w)}}}],["","",,D,{"^":"",
h9:function(a){var z,y,x
z=new P.E(0,$.q,null,[null])
y=document.createElement("img")
x=new W.a8(y,"load",!1,[W.a4])
x.gdZ(x).ao(new D.ha(new P.il(z,[null]),y))
y.src=a
return z},
ha:{"^":"f:0;a,b",
$1:function(a){return this.a.aN(0,this.b)}},
h3:{"^":"c;a,b,c",
cU:function(a){var z
a=document
z=W.bh
W.ah(a,"keydown",new D.h5(this),!1,z)
W.ah(a,"keyup",new D.h6(this),!1,z)},
p:{
h4:function(a){var z=P.B
z=new D.h3(P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z))
z.cU(a)
return z}}},
h5:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.O(0,J.cz(a))
z.b.O(0,a.which)}},
h6:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.c8(0,J.cz(a))
z.c.O(0,a.which)}},
hh:{"^":"c;a,b,c,d,e,f,r,x",
cW:function(a){var z,y
if(a==null)a=document
z=J.d(a)
y=z.gaS(a)
W.ah(y.a,y.b,new D.hj(this),!1,H.A(y,0))
y=z.gaR(a)
W.ah(y.a,y.b,new D.hk(this),!1,H.A(y,0))
y=z.gaT(a)
W.ah(y.a,y.b,new D.hl(this),!1,H.A(y,0))
z=z.gaU(a)
W.ah(z.a,z.b,new D.hm(this),!1,H.A(z,0))},
p:{
hi:function(a){var z=P.B
z=new D.hh(P.R(null,null,null,z),P.R(null,null,null,z),P.R(null,null,null,z),0,0,0,0,0)
z.cW(a)
return z}}},
hj:{"^":"f:5;a",
$1:function(a){var z,y
z=J.d(a)
z.an(a)
y=this.a
y.r=z.gc6(a).a
y.x=z.gc6(a).b
y.d=a.movementX
y.e=a.movementY}},
hk:{"^":"f:5;a",
$1:function(a){var z=J.d(a)
z.an(a)
P.ak("BUTTON "+H.b(z.gbN(a)))
z=this.a
z.a.O(0,a.button)
z.b.O(0,a.button)}},
hl:{"^":"f:5;a",
$1:function(a){var z,y
z=J.d(a)
z.an(a)
y=this.a
y.a.c8(0,z.gbN(a))
y.c.O(0,a.button)}},
hm:{"^":"f:19;a",
$1:function(a){var z=J.d(a)
z.an(a)
this.a.f=z.gdV(a)}},
ht:{"^":"fo;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bB:function(a){var z,y
z=C.R.e0(a,0,new A.km())
if(typeof z!=="number")return H.L(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
km:{"^":"f:20;",
$2:function(a,b){var z,y
z=J.av(a,J.a1(b))
if(typeof z!=="number")return H.L(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",J:{"^":"c;bs:a<",
A:function(a){var z,y
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
k:function(a){return"[0] "+this.ac(0).k(0)+"\n[1] "+this.ac(1).k(0)+"\n[2] "+this.ac(2).k(0)+"\n[3] "+this.ac(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>=16)return H.e(z,b)
return z[b]},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.J){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gw:function(a){return A.bB(this.a)},
ac:function(a){var z,y,x
z=new Float32Array(4)
y=this.a
if(a>=16)return H.e(y,a)
z[0]=y[a]
x=4+a
if(x>=16)return H.e(y,x)
z[1]=y[x]
x=8+a
if(x>=16)return H.e(y,x)
z[2]=y[x]
x=12+a
if(x>=16)return H.e(y,x)
z[3]=y[x]
return new T.Z(z)},
U:function(a){var z=new T.J(new Float32Array(16))
z.A(this)
return z},
n:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.J(z)
y.A(this)
x=b.gbs()
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
y=new T.J(z)
y.A(this)
x=b.gbs()
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
V:function(){var z=this.a
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
b9:function(a,b,c){var z=this.a
z[14]=c
z[13]=b
z[12]=a},
e9:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},a7:{"^":"c;bA:a<",
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a7){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gw:function(a){return A.bB(this.a)},
I:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbA()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return new T.a7(z)},
n:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbA()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
return new T.a7(z)},
a3:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a7(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.ar(0,1/b)
return y},
h:function(a,b){var z=this.a
if(b>=2)return H.e(z,b)
return z[b]},
gj:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
ar:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
U:function(a){var z,y
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
return new T.a7(z)},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]}},t:{"^":"c;bB:a<",
as:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
A:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.b(z[0])+","+H.b(z[1])+","+H.b(z[2])+"]"},
F:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.t){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gw:function(a){return A.bB(this.a)},
I:function(a,b){var z=new T.t(new Float32Array(3))
z.A(this)
z.bd(0,b)
return z},
n:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.t(z)
y.A(this)
x=b.gbB()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
return y},
a3:function(a,b){return this.cz(1/b)},
h:function(a,b){var z=this.a
if(b>=3)return H.e(z,b)
return z[b]},
gj:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
a2:function(a){var z,y,x,w,v,u
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
aO:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
bV:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.t(new Float32Array(3))
z.as(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
ai:function(a,b){var z,y
z=a.a
y=this.a
y[0]=y[0]+z[0]*b
y[1]=y[1]+z[1]*b
y[2]=y[2]+z[2]*b},
bd:function(a,b){var z,y
z=b.gbB()
y=this.a
y[0]=y[0]-z[0]
y[1]=y[1]-z[1]
y[2]=y[2]-z[2]},
cz:function(a){var z,y
z=new Float32Array(3)
y=new T.t(z)
y.A(this)
z[2]=z[2]*a
z[1]=z[1]*a
z[0]=z[0]*a
return y},
U:function(a){var z=new T.t(new Float32Array(3))
z.A(this)
return z},
sl:function(a,b){this.a[0]=b
return b},
sm:function(a,b){this.a[1]=b
return b},
sC:function(a,b){this.a[2]=b
return b},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gC:function(a){return this.a[2]}},Z:{"^":"c;bC:a<",
A:function(a){var z,y
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
if(b instanceof T.Z){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gw:function(a){return A.bB(this.a)},
I:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.Z(z)
y.A(this)
x=b.gbC()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
n:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.Z(z)
y.A(this)
x=b.gbC()
z[0]=C.a.n(z[0],x.h(0,0))
z[1]=C.a.n(z[1],x.h(0,1))
z[2]=C.a.n(z[2],x.h(0,2))
z[3]=C.a.n(z[3],x.h(0,3))
return y},
a3:function(a,b){var z=new T.Z(new Float32Array(4))
z.A(this)
z.ar(0,1/b)
return z},
h:function(a,b){var z=this.a
if(b>=4)return H.e(z,b)
return z[b]},
gj:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
ar:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
U:function(a){var z=new T.Z(new Float32Array(4))
z.A(this)
return z},
gl:function(a){return this.a[0]},
gm:function(a){return this.a[1]},
gC:function(a){return this.a[2]},
gap:function(a){return this.a[3]}}}],["","",,G,{"^":"",
er:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z={}
y=document
x=new R.hW(0,0,null,null,null,null)
x.d1(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fq(null,w)
u=J.f_(w,"webgl2",P.db(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.V(P.d1('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.b(J.f0(u))
if($.em>0)P.ak("I: "+t)
J.eH(u,0,0,0,1)
J.aT(u,2929)
J.aT(u,2884)
u=new Float32Array(3)
t=D.h4(null)
s=D.hi(w)
r=new T.J(new Float32Array(16))
r.V()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.ht(165,0,0,0,new T.t(u),-0.02,t,s,r,new T.t(q),new T.t(p),new T.t(o),new T.t(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.J(new Float32Array(16))
u.V()
t=new T.J(new Float32Array(16))
t.V()
m=new R.hw(w,v,n,50,1,0.1,1000,u,t,new T.J(new Float32Array(16)),P.O(),"perspective",!1,!0)
m.bj()
m.ef(null)
W.ah(window,"resize",m.gee(),!1,W.a4)
l=G.c7("textured",v,$.$get$ez(),$.$get$ey())
u=$.$get$et()
t=new G.dq("PerlinNoiseColor F",null,[],[],[],[],0,P.O())
t.af(["vNormal"])
t.Y(["uTime","uTransformationMatrix"])
t.b=t.ax(!1,["","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],null)
k=G.c7("perlin",v,u,t)
j=B.hO(!0,!0,1,2,3,20,128,16,4,!1)
i=G.dh("torusknot",l.d,4,l.e.x)
i.bf(G.d3(j.d,null))
u=j.cP()
t=i.d
i.y=J.bI(t.a)
s=i.ch.length
if(s<768){i.cx=new Uint8Array(H.bx(u))
i.Q=5121}else if(s<196608){i.cx=new Uint16Array(H.bx(u))
i.Q=5123}else{i.cx=new Uint32Array(H.bx(u))
i.Q=5125}J.b8(t.a,i.e)
u=i.y
s=i.cx
J.bG(t.a,34963,u)
J.cs(t.a,34963,s,35048)
G.iV(j,i)
h=G.dg("texture")
u=new T.J(new Float32Array(16))
u.V()
u.b9(-50,0,0)
t=h.d
t.i(0,"uModelMatrix",u)
t.i(0,"uColor",new T.t(new Float32Array(3)))
g=G.dg("perlin")
u=g.d
u.i(0,"uTransformationMatrix",new T.J(new Float32Array(16)))
t=new T.J(new Float32Array(16))
t.V()
t.b9(50,0,0)
u.i(0,"uModelMatrix",t)
f=G.c7("stars",v,$.$get$ev(),$.$get$eu())
t=$.$get$cL()
u=P.O()
u.i(0,"cDepthTest",!0)
u.i(0,"cDepthWrite",!1)
u.i(0,"cBlendEquation",t)
u.i(0,"cStencilFunc",$.$get$c9())
e=y.createElement("canvas")
e.width=64
e.height=64
d=C.E.cw(e,"2d")
c=J.eK(d,32,32,1,32,32,22)
c.addColorStop(0,"gray")
c.addColorStop(1,"black")
d.fillStyle=c
d.fillRect(0,0,64,64)
c=d.createRadialGradient(32,32,1,32,32,6)
c.addColorStop(0,"white")
c.addColorStop(1,"gray")
d.globalAlpha=0.9
d.fillStyle=c
d.arc(32,32,4,0,6.283185307179586,!1)
d.fill("nonzero")
u.i(0,"uTexture",G.d4(v,"Utils::Particles",e,null,3553))
u.i(0,"uPointSize",1000)
y=new T.J(new Float32Array(16))
y.V()
u.i(0,"uModelMatrix",y)
b=R.ig(f,2000,200)
z.a=0
P.fQ([D.h9($.ex)],null,!1).ao(new G.kz(v,h,new G.ky(z,n,g,l,i,m,h,k,f,b,new G.df(u,"stars",!1,!0),x)))},
ky:{"^":"f:21;a,b,c,d,e,f,r,x,y,z,Q,ch",
$1:function(b3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
z=this.a
y=J.aO(b3)
y.I(b3,z.a)
z.a=y.n(b3,0)
x=this.b
x.go+=0.001
w=x.r1
v=w.a
if(v.u(0,0)||v.u(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.b7()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.b7()
x.id=u+v*0.01}v=x.k4
u=v.a
if(u.u(0,37))x.go+=0.03
else if(u.u(0,39))x.go-=0.03
if(u.u(0,38))x.id+=0.03
else if(u.u(0,40))x.id-=0.03
if(u.u(0,33))x.fy*=0.99
else if(u.u(0,34))x.fy*=1.01
if(u.u(0,32)){x.go=0
x.id=0}u=w.f
if(typeof u!=="number")return u.b7()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.a.dP(x.id,-1.4707963267948965,1.4707963267948965)
x.id=u
t=x.fy
s=x.go
r=t*Math.cos(u)
q=Math.cos(s)
u=Math.sin(u)
s=Math.sin(s)
p=x.d.a
p[12]=r*q
p[13]=t*u
p[14]=r*s
s=x.k2
u=s.a
p[12]=p[12]+u[0]
p[13]=p[13]+u[1]
p[14]=p[14]+u[2]
o=p[12]
n=p[13]
m=p[14]
l=new T.t(new Float32Array(3))
l.as(0,1,0)
u=x.e
t=u.a
t[0]=p[12]
t[1]=p[13]
t[2]=p[14]
k=u.I(0,s)
k.a2(0)
j=l.bV(k)
j.a2(0)
i=k.bV(j)
i.a2(0)
s=j.aO(u)
t=i.aO(u)
u=k.aO(u)
q=j.a
h=q[0]
g=i.a
f=g[0]
e=k.a
d=e[0]
c=q[1]
b=g[1]
a=e[1]
q=q[2]
g=g[2]
e=e[2]
p[15]=1
p[14]=-u
p[13]=-t
p[12]=-s
p[11]=0
p[10]=e
p[9]=g
p[8]=q
p[7]=0
p[6]=a
p[5]=b
p[4]=c
p[3]=0
p[2]=d
p[1]=f
p[0]=h
p[12]=o
p[13]=n
p[14]=m
h=x.f.a
h[0]=p[2]
h[1]=p[6]
h[2]=p[10]
x=-x.k1
f=h[0]
d=h[1]
c=h[2]
a0=Math.sqrt(f*f+d*d+c*c)
o=h[0]/a0
n=h[1]/a0
m=h[2]/a0
a1=Math.cos(x)
a2=Math.sin(x)
a3=1-a1
a4=o*o*a3+a1
x=m*a2
a5=o*n*a3-x
h=n*a2
a6=o*m*a3+h
a7=n*o*a3+x
a8=n*n*a3+a1
x=o*a2
a9=n*m*a3-x
b0=m*o*a3-h
b1=m*n*a3+x
b2=m*m*a3+a1
x=p[0]
h=p[4]
c=p[8]
d=p[1]
f=p[5]
b=p[9]
a=p[2]
q=p[6]
g=p[10]
e=p[3]
s=p[7]
t=p[11]
p[0]=x*a4+h*a7+c*b0
p[1]=d*a4+f*a7+b*b0
p[2]=a*a4+q*a7+g*b0
p[3]=e*a4+s*a7+t*b0
p[4]=x*a5+h*a8+c*b1
p[5]=d*a5+f*a8+b*b1
p[6]=a*a5+q*a8+g*b1
p[7]=e*a5+s*a8+t*b1
p[8]=x*a6+h*a9+c*b2
p[9]=d*a6+f*a9+b*b2
p[10]=a*a6+q*a9+g*b2
p[11]=e*a6+s*a9+t*b2
v.c.a9(0)
v.b.a9(0)
w.e=0
w.d=0
w.f=0
w.c.a9(0)
w.b.a9(0)
w=this.c
w.d.i(0,"uTime",y.a3(b3,1000))
y=this.e
v=this.f
this.d.aw(y,[v,this.r])
this.x.aw(y,[v,w])
this.y.aw(this.z,[this.Q,v])
C.a8.gdI(window).ao(this)
this.ch.d4(z.a)}},
kz:{"^":"f:22;a,b,c",
$1:function(a){this.b.d.i(0,"uTexture",G.d4(this.a,$.ex,J.aw(a,0),null,3553))
this.c.$1(0)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d7.prototype
return J.d6.prototype}if(typeof a=="string")return J.aF.prototype
if(a==null)return J.d8.prototype
if(typeof a=="boolean")return J.h1.prototype
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.ki=function(a){if(typeof a=="number")return J.aE.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.ab=function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.bA=function(a){if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.aO=function(a){if(typeof a=="number")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.kj=function(a){if(typeof a=="number")return J.aE.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.en=function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.b1.prototype
return a}
J.d=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.c)return a
return J.b4(a)}
J.av=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ki(a).n(a,b)}
J.H=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).F(a,b)}
J.N=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.aO(a).ad(a,b)}
J.aR=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.aO(a).a4(a,b)}
J.eB=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.aO(a).I(a,b)}
J.aw=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kw(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ab(a).h(a,b)}
J.eC=function(a,b,c,d){return J.d(a).ds(a,b,c,d)}
J.cq=function(a,b){return J.d(a).bD(a,b)}
J.eD=function(a,b,c,d){return J.d(a).bE(a,b,c,d)}
J.cr=function(a,b,c){return J.d(a).bG(a,b,c)}
J.eE=function(a,b){return J.d(a).dK(a,b)}
J.bG=function(a,b,c){return J.d(a).bH(a,b,c)}
J.aS=function(a,b,c){return J.d(a).bJ(a,b,c)}
J.b8=function(a,b){return J.d(a).dN(a,b)}
J.eF=function(a,b){return J.d(a).bK(a,b)}
J.eG=function(a,b,c){return J.d(a).bL(a,b,c)}
J.cs=function(a,b,c,d){return J.d(a).bM(a,b,c,d)}
J.eH=function(a,b,c,d,e){return J.d(a).bP(a,b,c,d,e)}
J.ct=function(a){return J.d(a).U(a)}
J.cu=function(a,b){return J.en(a).dQ(a,b)}
J.eI=function(a,b){return J.kj(a).P(a,b)}
J.bH=function(a,b,c){return J.ab(a).dR(a,b,c)}
J.bI=function(a){return J.d(a).bR(a)}
J.eJ=function(a){return J.d(a).bS(a)}
J.eK=function(a,b,c,d,e,f,g){return J.d(a).dT(a,b,c,d,e,f,g)}
J.eL=function(a){return J.d(a).bU(a)}
J.eM=function(a){return J.d(a).dU(a)}
J.eN=function(a,b){return J.d(a).bW(a,b)}
J.bJ=function(a,b){return J.d(a).bX(a,b)}
J.eO=function(a,b,c,d){return J.d(a).bY(a,b,c,d)}
J.eP=function(a,b,c,d,e){return J.d(a).dW(a,b,c,d,e)}
J.eQ=function(a,b,c,d,e){return J.d(a).bZ(a,b,c,d,e)}
J.eR=function(a,b,c,d,e,f){return J.d(a).dX(a,b,c,d,e,f)}
J.cv=function(a,b){return J.bA(a).q(a,b)}
J.aT=function(a,b){return J.d(a).c_(a,b)}
J.eS=function(a,b){return J.d(a).c0(a,b)}
J.eT=function(a){return J.d(a).dY(a)}
J.cw=function(a,b){return J.bA(a).v(a,b)}
J.cx=function(a){return J.d(a).gdJ(a)}
J.ax=function(a){return J.d(a).gK(a)}
J.a1=function(a){return J.n(a).gw(a)}
J.aU=function(a){return J.bA(a).gH(a)}
J.a2=function(a){return J.ab(a).gj(a)}
J.eU=function(a){return J.d(a).geb(a)}
J.eV=function(a){return J.d(a).gaV(a)}
J.cy=function(a){return J.d(a).gS(a)}
J.eW=function(a){return J.d(a).gej(a)}
J.eX=function(a){return J.d(a).gce(a)}
J.eY=function(a){return J.d(a).gap(a)}
J.cz=function(a){return J.d(a).geq(a)}
J.bK=function(a){return J.d(a).gl(a)}
J.bL=function(a){return J.d(a).gm(a)}
J.cA=function(a){return J.d(a).gC(a)}
J.eZ=function(a){return J.d(a).b_(a)}
J.f_=function(a,b,c){return J.d(a).b0(a,b,c)}
J.f0=function(a){return J.d(a).aq(a)}
J.f1=function(a){return J.d(a).b1(a)}
J.f2=function(a,b){return J.d(a).b2(a,b)}
J.f3=function(a,b,c){return J.d(a).b3(a,b,c)}
J.cB=function(a,b,c){return J.d(a).b6(a,b,c)}
J.f4=function(a,b){return J.d(a).c5(a,b)}
J.f5=function(a,b,c){return J.d(a).c7(a,b,c)}
J.cC=function(a){return J.bA(a).ed(a)}
J.f6=function(a,b){return J.d(a).sak(a,b)}
J.f7=function(a,b,c,d){return J.d(a).bc(a,b,c,d)}
J.f8=function(a,b,c,d,e,f,g){return J.d(a).ca(a,b,c,d,e,f,g)}
J.f9=function(a,b,c,d){return J.d(a).cb(a,b,c,d)}
J.cD=function(a,b,c,d){return J.d(a).cc(a,b,c,d)}
J.cE=function(a){return J.aO(a).ek(a)}
J.fa=function(a){return J.en(a).em(a)}
J.ay=function(a){return J.n(a).k(a)}
J.fb=function(a,b,c,d){return J.d(a).eo(a,b,c,d)}
J.fc=function(a,b,c){return J.d(a).cf(a,b,c)}
J.fd=function(a,b,c){return J.d(a).cg(a,b,c)}
J.bM=function(a,b,c){return J.d(a).ci(a,b,c)}
J.fe=function(a,b,c){return J.d(a).cj(a,b,c)}
J.cF=function(a,b,c){return J.d(a).ck(a,b,c)}
J.cG=function(a,b,c){return J.d(a).cl(a,b,c)}
J.cH=function(a,b,c){return J.d(a).cm(a,b,c)}
J.cI=function(a,b,c,d){return J.d(a).cn(a,b,c,d)}
J.cJ=function(a,b,c,d){return J.d(a).co(a,b,c,d)}
J.ff=function(a,b){return J.d(a).cq(a,b)}
J.fg=function(a,b,c){return J.d(a).ep(a,b,c)}
J.fh=function(a,b,c,d,e,f,g){return J.d(a).cr(a,b,c,d,e,f,g)}
J.fi=function(a,b,c,d,e){return J.d(a).ct(a,b,c,d,e)}
I.at=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.bN.prototype
C.E=W.bb.prototype
C.n=W.fw.prototype
C.F=W.fC.prototype
C.G=J.h.prototype
C.c=J.aC.prototype
C.t=J.d6.prototype
C.b=J.d7.prototype
C.H=J.d8.prototype
C.a=J.aE.prototype
C.i=J.aF.prototype
C.O=J.aG.prototype
C.R=H.hn.prototype
C.S=W.hp.prototype
C.x=J.hx.prototype
C.C=W.i7.prototype
C.q=J.b1.prototype
C.a8=W.ii.prototype
C.D=new P.iZ()
C.d=new P.jf()
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.P=H.y(I.at(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.Q=I.at(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.at([])
C.o=H.y(I.at(["bind","if","ref","repeat","syntax"]),[P.l])
C.p=H.y(I.at(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.T=new G.v("vec3","vertex btangents",0)
C.e=new G.v("vec3","",0)
C.U=new G.v("vec4","delta from light",0)
C.m=new G.v("","",0)
C.y=new G.v("vec3","vertex coordinates",0)
C.V=new G.v("vec3","vertex binormals",0)
C.z=new G.v("vec4","for wireframe",0)
C.W=new G.v("vec4","per vertex color",0)
C.X=new G.v("float","for normal maps",0)
C.j=new G.v("mat4","",0)
C.Z=new G.v("mat4","",4)
C.Y=new G.v("mat4","",128)
C.f=new G.v("float","",0)
C.a_=new G.v("float","",4)
C.a0=new G.v("float","depth for shadowmaps",0)
C.h=new G.v("sampler2D","",0)
C.a1=new G.v("float","for bump maps",0)
C.a2=new G.v("vec2","texture uvs",0)
C.a3=new G.v("float","time since program start in sec",0)
C.k=new G.v("vec2","",0)
C.a4=new G.v("samplerCube","",0)
C.l=new G.v("vec4","",0)
C.a5=new G.v("vec3","vertex normals",0)
C.a6=new G.v("sampler2DShadow","",0)
C.A=new G.v("vec3","per vertex color",0)
C.B=new G.v("mat3","",0)
C.a7=new G.v("vec3","vertex tangents",0)
$.W=0
$.az=null
$.cN=null
$.ep=null
$.eg=null
$.ew=null
$.bz=null
$.bC=null
$.cn=null
$.ao=null
$.aL=null
$.aM=null
$.ci=!1
$.q=C.d
$.a3=null
$.bS=null
$.d_=null
$.cZ=null
$.cX=null
$.cW=null
$.cV=null
$.cU=null
$.em=0
$.ex="../gradient.jpg"
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
I.$lazy(y,x,w)}})(["cS","$get$cS",function(){return H.eo("_$dart_dartClosure")},"c_","$get$c_",function(){return H.eo("_$dart_js")},"dA","$get$dA",function(){return H.Y(H.bv({
toString:function(){return"$receiver$"}}))},"dB","$get$dB",function(){return H.Y(H.bv({$method$:null,
toString:function(){return"$receiver$"}}))},"dC","$get$dC",function(){return H.Y(H.bv(null))},"dD","$get$dD",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dH","$get$dH",function(){return H.Y(H.bv(void 0))},"dI","$get$dI",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dF","$get$dF",function(){return H.Y(H.dG(null))},"dE","$get$dE",function(){return H.Y(function(){try{null.$method$}catch(z){return z.message}}())},"dK","$get$dK",function(){return H.Y(H.dG(void 0))},"dJ","$get$dJ",function(){return H.Y(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cd","$get$cd",function(){return P.im()},"bV","$get$bV",function(){return P.iI(null,P.aX)},"aN","$get$aN",function(){return[]},"cR","$get$cR",function(){return{}},"dX","$get$dX",function(){return P.c2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cf","$get$cf",function(){return P.O()},"c9","$get$c9",function(){return new G.dy(1281,0,4294967295)},"cM","$get$cM",function(){return G.dx(1281,1281,1281)},"cL","$get$cL",function(){return G.dx(32774,770,769)},"T","$get$T",function(){return P.db(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.W,"aPosition",C.y,"aTexUV",C.a2,"aNormal",C.a5,"aBinormal",C.V,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a7,"aBitangent",C.T,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.U,"vCenter",C.z,"vDepth",C.a0,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a6,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a4,"uAnimationTable",C.h,"uTime",C.a3,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Y,"uLightDescs",C.Z,"uLightCount",C.f,"uLightTypes",C.a_,"uBumpScale",C.a1,"uNormalScale",C.X])},"dP","$get$dP",function(){return C.D},"et","$get$et",function(){var z=G.aZ("PerlinNoiseV")
z.av(["aPosition"])
z.af(["vNormal"])
z.Y(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
z.cY(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"])
return z},"ez","$get$ez",function(){var z=G.aZ("Textured")
z.av(["aPosition","aTexUV"])
z.Y(["uPerspectiveViewMatrix","uModelMatrix"])
z.af(["vTexUV"])
z.ag(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return z},"ey","$get$ey",function(){var z=G.aZ("TexturedF")
z.af(["vTexUV"])
z.Y(["uColor","uTexture"])
z.ag(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return z},"ev","$get$ev",function(){var z=G.aZ("PointSpritesV")
z.av(["aPosition"])
z.Y(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
z.ag(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return z},"eu","$get$eu",function(){var z=G.aZ("PointSpritesF")
z.Y(["uTexture"])
z.ag(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.r},{func:1,args:[W.K]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.l,args:[P.B]},{func:1,args:[W.bh]},{func:1,ret:P.ck,args:[W.al,P.l,P.l,W.ce]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.c],opt:[P.aJ]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aJ]},{func:1,v:true,args:[W.r,W.r]},{func:1,v:true,args:[W.a4]},{func:1,v:true,args:[P.aj,T.t]},{func:1,args:[W.aK]},{func:1,args:[P.B,P.c]},{func:1,v:true,args:[P.aP]},{func:1,args:[P.i]},{func:1,ret:P.B,args:[,,]}]
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
if(x==y)H.kE(d||a)
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
Isolate.ar=a.ar
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
if(typeof dartMainRunner==="function")dartMainRunner(G.er,[])
else G.er([])})})()
//# sourceMappingURL=perlin.dart.js.map
