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
e.$callName=null}}function tearOffGetter(d,e,f,g){return g?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"(x) {"+"if (c === null) c = "+"H.cH"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+f+y+++"() {"+"if (c === null) c = "+"H.cH"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,H,null)}function tearOff(d,e,f,a0,a1){var g
return f?function(){if(g===void 0)g=H.cH(this,d,e,true,[],a0).prototype
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
var dart=[["","",,H,{"^":"",mM:{"^":"d;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
cK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
be:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cJ==null){H.lr()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.cu("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ci()]
if(v!=null)return v
v=H.lu(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$ci(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
h:{"^":"d;",
I:function(a,b){return a===b},
gB:function(a){return H.aQ(a)},
k:["d6",function(a){return"Instance of '"+H.aR(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Blob|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSStyleSheet|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|File|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFaceSource|FormData|Gamepad|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|MimeType|Mojo|MojoHandle|MojoWatcher|MutationObserver|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGLength|SVGMatrix|SVGNumber|SVGPreserveAspectRatio|SVGTransform|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechGrammar|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|StyleSheet|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hL:{"^":"h;",
k:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$iscG:1},
hM:{"^":"h;",
I:function(a,b){return null==b},
k:function(a){return"null"},
gB:function(a){return 0},
$isb6:1},
cj:{"^":"h;",
gB:function(a){return 0},
k:["d8",function(a){return String(a)}]},
il:{"^":"cj;"},
bc:{"^":"cj;"},
aN:{"^":"cj;",
k:function(a){var z=a[$.$get$dj()]
return z==null?this.d8(a):J.aG(z)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
aJ:{"^":"h;$ti",
R:function(a,b){var z,y
if(!!a.fixed$length)H.a4(P.u("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.F)(b),++y)a.push(b[y])},
A:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.N(a))}},
aa:function(a,b){var z,y,x,w
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<a.length;++x){w=H.c(a[x])
if(x>=z)return H.a(y,x)
y[x]=w}return y.join(b)},
bk:function(a,b){return H.dU(a,b,null,H.C(a,0))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
geJ:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.ch())},
d0:function(a,b,c,d,e){var z,y,x,w,v,u
if(!!a.immutable$list)H.a4(P.u("setRange"))
P.iu(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.E()
if(typeof b!=="number")return H.r(b)
z=c-b
if(z===0)return
y=J.n(d)
if(!!y.$isi){x=e
w=d}else{w=y.bk(d,e).eZ(0,!1)
x=0}y=J.w(w)
v=y.gi(w)
if(typeof v!=="number")return H.r(v)
if(x+z>v)throw H.b(H.hI())
if(x<b)for(u=z-1;u>=0;--u)a[b+u]=y.h(w,x+u)
else for(u=0;u<z;++u)a[b+u]=y.h(w,x+u)},
am:function(a,b,c,d){return this.d0(a,b,c,d,0)},
bW:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(P.N(a))}return!1},
d1:function(a,b){if(!!a.immutable$list)H.a4(P.u("sort"))
H.iJ(a,J.kW())},
aA:function(a){return this.d1(a,null)},
w:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
k:function(a){return P.cg(a,"[","]")},
gF:function(a){return new J.d7(a,a.length,0,null,[H.C(a,0)])},
gB:function(a){return H.aQ(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.a4(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.d6(b,"newLength",null))
if(b<0)throw H.b(P.at(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ac(a,b))
if(b>=a.length||b<0)throw H.b(H.ac(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.a4(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ac(a,b))
if(b>=a.length||b<0)throw H.b(H.ac(a,b))
a[b]=c},
l:function(a,b){var z,y
z=C.b.l(a.length,C.b.gi(b))
y=H.p([],[H.C(a,0)])
this.si(y,z)
this.am(y,0,a.length,a)
this.am(y,a.length,z,b)
return y},
$iso:1,
$aso:I.az,
$isi:1,
p:{
aK:function(a){a.fixed$length=Array
return a},
mK:[function(a,b){return J.fa(a,b)},"$2","kW",8,0,24]}},
mL:{"^":"aJ;$ti"},
d7:{"^":"d;a,b,c,d,$ti",
gu:function(a){return this.d},
q:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.F(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aL:{"^":"h;",
V:function(a,b){var z
if(typeof b!=="number")throw H.b(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gau(b)
if(this.gau(a)===z)return 0
if(this.gau(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gau:function(a){return a===0?1/a<0:a<0},
eY:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(P.u(""+a+".toInt()"))},
eg:function(a){var z,y
if(a>=0){if(a<=2147483647){z=a|0
return a===z?z:z+1}}else if(a>=-2147483648)return a|0
y=Math.ceil(a)
if(isFinite(y))return y
throw H.b(P.u(""+a+".ceil()"))},
as:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.u(""+a+".floor()"))},
eh:function(a,b,c){if(this.V(b,c)>0)throw H.b(H.T(b))
if(this.V(a,b)<0)return b
if(this.V(a,c)>0)return c
return a},
eX:function(a){return a},
f0:function(a,b){var z
if(b>20)throw H.b(P.at(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gau(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a+b},
E:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a-b},
Y:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a/b},
al:function(a,b){var z
if(typeof b!=="number")throw H.b(H.T(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
an:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bP(a,b)},
P:function(a,b){return(a|0)===a?a/b|0:this.bP(a,b)},
bP:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.u("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
bN:function(a,b){var z
if(a>0)z=this.e0(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
e0:function(a,b){return b>31?0:a>>>b},
Z:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a<b},
ak:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a>b},
$isay:1,
$isaZ:1},
dy:{"^":"aL;",$isD:1},
dx:{"^":"aL;"},
aM:{"^":"h;",
ei:function(a,b){if(b>=a.length)H.a4(H.ac(a,b))
return a.charCodeAt(b)},
bE:function(a,b){if(b>=a.length)throw H.b(H.ac(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.b(P.d6(b,null,null))
return a+b},
d3:function(a,b,c){var z
if(c>a.length)throw H.b(P.at(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
d2:function(a,b){return this.d3(a,b,0)},
bm:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.a4(H.T(c))
if(b<0)throw H.b(P.bB(b,null,null))
if(typeof c!=="number")return H.r(c)
if(b>c)throw H.b(P.bB(b,null,null))
if(c>a.length)throw H.b(P.bB(c,null,null))
return a.substring(b,c)},
d4:function(a,b){return this.bm(a,b,null)},
f_:function(a){return a.toLowerCase()},
el:function(a,b,c){if(c>a.length)throw H.b(P.at(c,0,a.length,null,null))
return H.lB(a,b,c)},
V:function(a,b){var z
if(typeof b!=="string")throw H.b(H.T(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
k:function(a){return a},
gB:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ac(a,b))
if(b>=a.length||b<0)throw H.b(H.ac(a,b))
return a[b]},
$iso:1,
$aso:I.az,
$isj:1}}],["","",,H,{"^":"",
ch:function(){return new P.bF("No element")},
hJ:function(){return new P.bF("Too many elements")},
hI:function(){return new P.bF("Too few elements")},
iJ:function(a,b){var z=J.a5(a)
if(typeof z!=="number")return z.E()
H.b8(a,0,z-1,b)},
b8:function(a,b,c,d){if(c-b<=32)H.iI(a,b,c,d)
else H.iH(a,b,c,d)},
iI:function(a,b,c,d){var z,y,x,w,v
for(z=b+1,y=J.w(a);z<=c;++z){x=y.h(a,z)
w=z
while(!0){if(!(w>b&&J.V(d.$2(y.h(a,w-1),x),0)))break
v=w-1
y.j(a,w,y.h(a,v))
w=v}y.j(a,w,x)}},
iH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=C.b.P(c-b+1,6)
y=b+z
x=c-z
w=C.b.P(b+c,2)
v=w-z
u=w+z
t=J.w(a)
s=t.h(a,y)
r=t.h(a,v)
q=t.h(a,w)
p=t.h(a,u)
o=t.h(a,x)
if(J.V(d.$2(s,r),0)){n=r
r=s
s=n}if(J.V(d.$2(p,o),0)){n=o
o=p
p=n}if(J.V(d.$2(s,q),0)){n=q
q=s
s=n}if(J.V(d.$2(r,q),0)){n=q
q=r
r=n}if(J.V(d.$2(s,p),0)){n=p
p=s
s=n}if(J.V(d.$2(q,p),0)){n=p
p=q
q=n}if(J.V(d.$2(r,o),0)){n=o
o=r
r=n}if(J.V(d.$2(r,q),0)){n=q
q=r
r=n}if(J.V(d.$2(p,o),0)){n=o
o=p
p=n}t.j(a,y,s)
t.j(a,w,q)
t.j(a,x,o)
t.j(a,v,t.h(a,b))
t.j(a,u,t.h(a,c))
m=b+1
l=c-1
if(J.P(d.$2(r,p),0)){for(k=m;k<=l;++k){j=t.h(a,k)
i=d.$2(j,r)
h=J.n(i)
if(h.I(i,0))continue
if(h.Z(i,0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else for(;!0;){i=d.$2(t.h(a,l),r)
h=J.ad(i)
if(h.ak(i,0)){--l
continue}else{g=l-1
if(h.Z(i,0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
l=g
m=f
break}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)
l=g
break}}}}e=!0}else{for(k=m;k<=l;++k){j=t.h(a,k)
if(J.b0(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.V(d.$2(j,p),0))for(;!0;)if(J.V(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b0(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
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
H.b8(a,b,m-2,d)
H.b8(a,l+2,c,d)
if(e)return
if(m<y&&l>x){for(;J.P(d.$2(t.h(a,m),r),0);)++m
for(;J.P(d.$2(t.h(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.h(a,k)
if(J.P(d.$2(j,r),0)){if(k!==m){t.j(a,k,t.h(a,m))
t.j(a,m,j)}++m}else if(J.P(d.$2(j,p),0))for(;!0;)if(J.P(d.$2(t.h(a,l),p),0)){--l
if(l<k)break
continue}else{g=l-1
if(J.b0(d.$2(t.h(a,l),r),0)){t.j(a,k,t.h(a,m))
f=m+1
t.j(a,m,t.h(a,l))
t.j(a,l,j)
m=f}else{t.j(a,k,t.h(a,l))
t.j(a,l,j)}l=g
break}}H.b8(a,m,l,d)}else H.b8(a,m,l,d)},
bs:{"^":"b4;$ti"},
aO:{"^":"bs;$ti",
gF:function(a){return new H.dD(this,this.gi(this),0,null,[H.bf(this,"aO",0)])},
A:function(a,b){var z,y
z=this.gi(this)
if(typeof z!=="number")return H.r(z)
y=0
for(;y<z;++y){b.$1(this.t(0,y))
if(z!==this.gi(this))throw H.b(P.N(this))}},
b8:function(a,b){return this.d7(0,b)}},
iX:{"^":"aO;a,b,c,$ti",
dv:function(a,b,c,d){},
gdO:function(){var z=J.a5(this.a)
return z},
ge1:function(){var z,y
z=J.a5(this.a)
y=this.b
if(typeof z!=="number")return H.r(z)
if(y>z)return z
return y},
gi:function(a){var z,y
z=J.a5(this.a)
y=this.b
if(typeof z!=="number")return H.r(z)
if(y>=z)return 0
return z-y},
t:function(a,b){var z,y
z=this.ge1()
if(typeof z!=="number")return z.l()
if(typeof b!=="number")return H.r(b)
y=z+b
if(!(b<0)){z=this.gdO()
if(typeof z!=="number")return H.r(z)
z=y>=z}else z=!0
if(z)throw H.b(P.z(b,this,"index",null,null))
return J.cR(this.a,y)},
eZ:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=this.a
x=J.w(y)
w=x.gi(y)
if(typeof w!=="number")return w.E()
v=w-z
if(v<0)v=0
u=new Array(v)
u.fixed$length=Array
t=H.p(u,this.$ti)
for(s=0;s<v;++s){u=x.t(y,z+s)
if(s>=t.length)return H.a(t,s)
t[s]=u
u=x.gi(y)
if(typeof u!=="number")return u.Z()
if(u<w)throw H.b(P.N(this))}return t},
p:{
dU:function(a,b,c,d){var z=new H.iX(a,b,c,[d])
z.dv(a,b,c,d)
return z}}},
dD:{"^":"d;a,b,c,d,$ti",
gu:function(a){return this.d},
q:function(){var z,y,x,w
z=this.a
y=J.w(z)
x=y.gi(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.N(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.t(z,w);++this.c
return!0}},
i0:{"^":"aO;a,b,$ti",
gi:function(a){return J.a5(this.a)},
t:function(a,b){return this.b.$1(J.cR(this.a,b))},
$asbs:function(a,b){return[b]},
$asaO:function(a,b){return[b]},
$asb4:function(a,b){return[b]}},
ee:{"^":"b4;a,b,$ti",
gF:function(a){return new H.j6(J.X(this.a),this.b,this.$ti)}},
j6:{"^":"hK;a,b,$ti",
q:function(){var z,y
for(z=this.a,y=this.b;z.q();)if(y.$1(z.gu(z))===!0)return!0
return!1},
gu:function(a){var z=this.a
return z.gu(z)}},
bu:{"^":"d;$ti"}}],["","",,H,{"^":"",
lj:function(a){return init.types[a]},
eU:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$isq},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aG(a)
if(typeof z!=="string")throw H.b(H.T(a))
return z},
aQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aR:function(a){var z,y,x,w,v,u,t,s,r
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.F||!!J.n(a).$isbc){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bE(w,0)===36)w=C.i.d4(w,1)
r=H.bT(H.aB(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
O:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
it:function(a){return a.b?H.O(a).getUTCFullYear()+0:H.O(a).getFullYear()+0},
ir:function(a){return a.b?H.O(a).getUTCMonth()+1:H.O(a).getMonth()+1},
im:function(a){return a.b?H.O(a).getUTCDate()+0:H.O(a).getDate()+0},
io:function(a){return a.b?H.O(a).getUTCHours()+0:H.O(a).getHours()+0},
iq:function(a){return a.b?H.O(a).getUTCMinutes()+0:H.O(a).getMinutes()+0},
is:function(a){return a.b?H.O(a).getUTCSeconds()+0:H.O(a).getSeconds()+0},
ip:function(a){return a.b?H.O(a).getUTCMilliseconds()+0:H.O(a).getMilliseconds()+0},
r:function(a){throw H.b(H.T(a))},
a:function(a,b){if(a==null)J.a5(a)
throw H.b(H.ac(a,b))},
ac:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
z=J.a5(a)
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.z(b,a,"index",null,z)
return P.bB(b,"index",null)},
T:function(a){return new P.ah(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.bz()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f_})
z.name=""}else z.toString=H.f_
return z},
f_:function(){return J.aG(this.dartException)},
a4:function(a){throw H.b(a)},
F:function(a){throw H.b(P.N(a))},
L:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lD(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.bN(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cl(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dL(H.c(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e1()
u=$.$get$e2()
t=$.$get$e3()
s=$.$get$e4()
r=$.$get$e8()
q=$.$get$e9()
p=$.$get$e6()
$.$get$e5()
o=$.$get$eb()
n=$.$get$ea()
m=v.T(y)
if(m!=null)return z.$1(H.cl(y,m))
else{m=u.T(y)
if(m!=null){m.method="call"
return z.$1(H.cl(y,m))}else{m=t.T(y)
if(m==null){m=s.T(y)
if(m==null){m=r.T(y)
if(m==null){m=q.T(y)
if(m==null){m=p.T(y)
if(m==null){m=s.T(y)
if(m==null){m=o.T(y)
if(m==null){m=n.T(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dL(y,m))}}return z.$1(new H.j3(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dQ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ah(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dQ()
return a},
ae:function(a){var z
if(a==null)return new H.ev(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ev(a,null)},
lf:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
lt:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.du("Unsupported number of arguments for wrapped closure"))},
a3:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lt)
a.$identity=z
return z},
h1:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$isi){z.$reflectionInfo=c
x=H.iw(z).r}else x=c
w=d?Object.create(new H.iK().constructor.prototype):Object.create(new H.c4(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a6
$.a6=J.aE(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.de(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.lj,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.dc:H.c5
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.de(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fZ:function(a,b,c,d){var z=H.c5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
de:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h0(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fZ(y,!w,z,b)
if(y===0){w=$.a6
$.a6=J.aE(w,1)
u="self"+H.c(w)
w="return function(){var "+u+" = this."
v=$.aH
if(v==null){v=H.bp("self")
$.aH=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a6
$.a6=J.aE(w,1)
t+=H.c(w)
w="return function("+t+"){return this."
v=$.aH
if(v==null){v=H.bp("self")
$.aH=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
h_:function(a,b,c,d){var z,y
z=H.c5
y=H.dc
switch(b?-1:a){case 0:throw H.b(H.iC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h0:function(a,b){var z,y,x,w,v,u,t,s
z=$.aH
if(z==null){z=H.bp("self")
$.aH=z}y=$.db
if(y==null){y=H.bp("receiver")
$.db=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h_(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.a6
$.a6=J.aE(y,1)
return new Function(z+H.c(y)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.a6
$.a6=J.aE(y,1)
return new Function(z+H.c(y)+"}")()},
cH:function(a,b,c,d,e,f){var z,y
z=J.aK(b)
y=!!J.n(c).$isi?J.aK(c):c
return H.h1(a,z,y,!!d,e,f)},
lz:function(a,b){var z=J.w(b)
throw H.b(H.dd(a,z.bm(b,3,z.gi(b))))},
af:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.lz(a,b)},
cI:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[z]
else return a.$S()}return},
eO:function(a,b){var z,y
if(a==null)return!1
z=H.cI(J.n(a))
if(z==null)y=!1
else y=H.eT(z,b)
return y},
l4:function(a){var z
if(a instanceof H.f){z=H.cI(J.n(a))
if(z!=null)return H.cL(z,null)
return"Closure"}return H.aR(a)},
lC:function(a){throw H.b(new P.h7(a))},
eR:function(a){return init.getIsolateTag(a)},
p:function(a,b){a.$ti=b
return a},
aB:function(a){if(a==null)return
return a.$ti},
oa:function(a,b,c){return H.b_(a["$as"+H.c(c)],H.aB(b))},
bg:function(a,b,c,d){var z=H.b_(a["$as"+H.c(c)],H.aB(b))
return z==null?null:z[d]},
bf:function(a,b,c){var z=H.b_(a["$as"+H.c(b)],H.aB(a))
return z==null?null:z[c]},
C:function(a,b){var z=H.aB(a)
return z==null?null:z[b]},
cL:function(a,b){var z=H.aD(a,b)
return z},
aD:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.bT(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.c(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aD(z,b)
return H.kV(a,b)}return"unknown-reified-type"},
kV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aD(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aD(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aD(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.le(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aD(r[p],b)+(" "+H.c(p))}w+="}"}return"("+w+") => "+z},
bT:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.cs("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aD(u,c)}return w?"":"<"+z.k(0)+">"},
li:function(a){var z,y,x
if(a instanceof H.f){z=H.cI(J.n(a))
if(z!=null)return H.cL(z,null)}y=J.n(a).constructor.builtin$cls
if(a==null)return y
x=H.bT(a.$ti,0,null)
return y+x},
b_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bd:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aB(a)
y=J.n(a)
if(y[b]==null)return!1
return H.eI(H.b_(y[d],z),c)},
bj:function(a,b,c,d){var z,y
if(a==null)return a
z=H.bd(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.bT(c,0,null)
throw H.b(H.dd(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eI:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.U(a[y],b[y]))return!1
return!0},
o8:function(a,b,c){return a.apply(b,H.b_(J.n(b)["$as"+H.c(c)],H.aB(b)))},
U:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.builtin$cls==="b6")return!0
if('func' in b)return H.eT(a,b)
if('func' in a)return b.builtin$cls==="mD"||b.builtin$cls==="d"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.cL(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.eI(H.b_(u,z),x)},
eH:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.U(z,v)||H.U(v,z)))return!1}return!0},
l5:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=J.aK(Object.getOwnPropertyNames(b))
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.U(v,u)||H.U(u,v)))return!1}return!0},
eT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.U(z,y)||H.U(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.eH(x,w,!1))return!1
if(!H.eH(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.U(o,n)||H.U(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.U(o,n)||H.U(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.U(o,n)||H.U(n,o)))return!1}}return H.l5(a.named,b.named)},
o9:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lu:function(a){var z,y,x,w,v,u
z=$.eS.$1(a)
y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.eE.$2(a,z)
if(z!=null){y=$.bR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bS[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.bU(x)
$.bR[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bS[z]=x
return x}if(v==="-"){u=H.bU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eW(a,x)
if(v==="*")throw H.b(P.cu(z))
if(init.leafTags[z]===true){u=H.bU(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eW(a,x)},
eW:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cK(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
bU:function(a){return J.cK(a,!1,null,!!a.$isq)},
ly:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.bU(z)
else return J.cK(z,c,null,null)},
lr:function(){if(!0===$.cJ)return
$.cJ=!0
H.ls()},
ls:function(){var z,y,x,w,v,u,t,s
$.bR=Object.create(null)
$.bS=Object.create(null)
H.ln()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eX.$1(v)
if(u!=null){t=H.ly(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ln:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.ax(C.G,H.ax(C.L,H.ax(C.u,H.ax(C.u,H.ax(C.K,H.ax(C.H,H.ax(C.I(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eS=new H.lo(v)
$.eE=new H.lp(u)
$.eX=new H.lq(t)},
ax:function(a,b){return a(b)||b},
lB:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
iv:{"^":"d;a,b,c,d,e,f,r,x",p:{
iw:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.aK(z)
y=z[0]
x=z[1]
return new H.iv(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2],null)}}},
j0:{"^":"d;a,b,c,d,e,f",
T:function(a){var z,y,x
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
a8:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e7:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ii:{"^":"J;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+H.c(z)+"' on null"},
p:{
dL:function(a,b){return new H.ii(a,b==null?null:b.method)}}},
hN:{"^":"J;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
p:{
cl:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hN(a,y,z?null:b.receiver)}}},
j3:{"^":"J;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lD:{"^":"f:0;a",
$1:function(a){if(!!J.n(a).$isJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ev:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaT:1},
f:{"^":"d;",
k:function(a){return"Closure '"+H.aR(this).trim()+"'"},
gcV:function(){return this},
gcV:function(){return this}},
dV:{"^":"f;"},
iK:{"^":"dV;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
c4:{"^":"dV;a,b,c,d",
I:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c4))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gB:function(a){var z,y
z=this.c
if(z==null)y=H.aQ(this.a)
else y=typeof z!=="object"?J.ag(z):H.aQ(z)
return(y^H.aQ(this.b))>>>0},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.aR(z)+"'")},
p:{
c5:function(a){return a.a},
dc:function(a){return a.c},
bp:function(a){var z,y,x,w,v
z=new H.c4("self","target","receiver","name")
y=J.aK(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
fW:{"^":"J;a",
k:function(a){return this.a},
p:{
dd:function(a,b){return new H.fW("CastError: "+H.c(P.ca(a))+": type '"+H.l4(a)+"' is not a subtype of type '"+b+"'")}}},
iB:{"^":"J;a",
k:function(a){return"RuntimeError: "+H.c(this.a)},
p:{
iC:function(a){return new H.iB(a)}}},
ec:{"^":"d;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
y=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,init.mangledGlobalNames)
this.b=y
return y},
gB:function(a){return J.ag(this.a)},
I:function(a,b){if(b==null)return!1
return b instanceof H.ec&&J.P(this.a,b.a)}},
ck:{"^":"b5;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gG:function(a){return new H.dA(this,[H.C(this,0)])},
D:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bG(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bG(y,b)}else return this.eH(b)},
eH:function(a){var z=this.d
if(z==null)return!1
return this.aW(this.aM(z,J.ag(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ar(z,b)
x=y==null?null:y.gai()
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ar(w,b)
x=y==null?null:y.gai()
return x}else return this.eI(b)},
eI:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aM(z,J.ag(a)&0x3ffffff)
x=this.aW(y,a)
if(x<0)return
return y[x].gai()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.aP()
this.b=z}this.by(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aP()
this.c=y}this.by(y,b,c)}else{x=this.d
if(x==null){x=this.aP()
this.d=x}w=J.ag(b)&0x3ffffff
v=this.aM(x,w)
if(v==null)this.aT(x,w,[this.aF(b,c)])
else{u=this.aW(v,b)
if(u>=0)v[u].sai(c)
else v.push(this.aF(b,c))}}},
a1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bz()}},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.N(this))
z=z.c}},
by:function(a,b,c){var z=this.ar(a,b)
if(z==null)this.aT(a,b,this.aF(b,c))
else z.sai(c)},
bz:function(){this.r=this.r+1&67108863},
aF:function(a,b){var z,y
z=new H.hV(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bz()
return z},
aW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].geF(),b))return y
return-1},
k:function(a){return P.dE(this)},
ar:function(a,b){return a[b]},
aM:function(a,b){return a[b]},
aT:function(a,b,c){a[b]=c},
dM:function(a,b){delete a[b]},
bG:function(a,b){return this.ar(a,b)!=null},
aP:function(){var z=Object.create(null)
this.aT(z,"<non-identifier-key>",z)
this.dM(z,"<non-identifier-key>")
return z}},
hV:{"^":"d;eF:a<,ai:b@,c,d"},
dA:{"^":"bs;a,$ti",
gi:function(a){return this.a.a},
gF:function(a){var z,y
z=this.a
y=new H.am(z,z.r,null,null,this.$ti)
y.c=z.e
return y},
w:function(a,b){return this.a.D(0,b)},
A:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.b(P.N(z))
y=y.c}}},
am:{"^":"d;a,b,c,d,$ti",
gu:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.N(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lo:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
lp:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
lq:{"^":"f:11;a",
$1:function(a){return this.a(a)}}}],["","",,H,{"^":"",
le:function(a){return J.aK(H.p(a?Object.keys(a):[],[null]))}}],["","",,H,{"^":"",
bi:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bP:function(a){var z,y,x
if(!!J.n(a).$iso)return a
z=a.length
y=new Array(z)
y.fixed$length=Array
for(x=0;x<z;++x)y[x]=a[x]
return y},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ac(b,a))},
id:{"^":"h;","%":"DataView;ArrayBufferView;co|ep|eq|dH|er|es|ao"},
co:{"^":"id;",
gi:function(a){return a.length},
$iso:1,
$aso:I.az,
$isq:1,
$asq:I.az},
dH:{"^":"eq;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ab(b,a,a.length)
a[b]=c},
$asbu:function(){return[P.ay]},
$ask:function(){return[P.ay]},
$isi:1,
$asi:function(){return[P.ay]},
"%":"Float64Array"},
ao:{"^":"es;",
j:function(a,b,c){H.ab(b,a,a.length)
a[b]=c},
$asbu:function(){return[P.D]},
$ask:function(){return[P.D]},
$isi:1,
$asi:function(){return[P.D]}},
ic:{"^":"dH;",$iscb:1,"%":"Float32Array"},
n1:{"^":"ao;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int16Array"},
n2:{"^":"ao;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
$ishG:1,
"%":"Int32Array"},
n3:{"^":"ao;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Int8Array"},
n4:{"^":"ao;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
n5:{"^":"ao;",
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
n6:{"^":"ao;",
gi:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
n7:{"^":"ao;",
gi:function(a){return a.length},
h:function(a,b){H.ab(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ep:{"^":"co+k;"},
eq:{"^":"ep+bu;"},
er:{"^":"co+k;"},
es:{"^":"er+bu;"}}],["","",,P,{"^":"",
jd:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.l6()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a3(new P.jf(z),1)).observe(y,{childList:true})
return new P.je(z,y,x)}else if(self.setImmediate!=null)return P.l7()
return P.l8()},
nW:[function(a){self.scheduleImmediate(H.a3(new P.jg(a),0))},"$1","l6",4,0,6],
nX:[function(a){self.setImmediate(H.a3(new P.jh(a),0))},"$1","l7",4,0,6],
nY:[function(a){P.kv(0,a)},"$1","l8",4,0,6],
l_:function(a,b){if(H.eO(a,{func:1,args:[P.b6,P.b6]})){b.toString
return a}else{b.toString
return a}},
hq:function(a,b,c){var z
if(a==null)a=new P.bz()
z=$.t
if(z!==C.d)z.toString
z=new P.H(0,z,null,[c])
z.bC(a,b)
return z},
hr:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z={}
y=new P.H(0,$.t,null,[P.i])
z.a=null
z.b=0
z.c=null
z.d=null
x=new P.ht(z,b,!1,y)
try{for(s=0,r=0;s<2;++s){w=a[s]
v=r
w.b6(new P.hs(z,v,y,b,!1),x)
r=++z.b}if(r===0){r=new P.H(0,$.t,null,[null])
r.bB(C.w)
return r}q=new Array(r)
q.fixed$length=Array
z.a=q}catch(p){u=H.L(p)
t=H.ae(p)
if(z.b===0||!1)return P.hq(u,t,null)
else{z.c=u
z.d=t}}return y},
kT:function(a,b,c){$.t.toString
a.N(b,c)},
kY:function(){var z,y
for(;z=$.av,z!=null;){$.aX=null
y=z.b
$.av=y
if(y==null)$.aW=null
z.a.$0()}},
o7:[function(){$.cE=!0
try{P.kY()}finally{$.aX=null
$.cE=!1
if($.av!=null)$.$get$cy().$1(P.eJ())}},"$0","eJ",0,0,3],
eC:function(a){var z=new P.ef(a,null)
if($.av==null){$.aW=z
$.av=z
if(!$.cE)$.$get$cy().$1(P.eJ())}else{$.aW.b=z
$.aW=z}},
l3:function(a){var z,y,x
z=$.av
if(z==null){P.eC(a)
$.aX=$.aW
return}y=new P.ef(a,null)
x=$.aX
if(x==null){y.b=z
$.aX=y
$.av=y}else{y.b=x.b
x.b=y
$.aX=y
if(y.b==null)$.aW=y}},
lA:function(a){var z=$.t
if(C.d===z){P.aw(null,null,C.d,a)
return}z.toString
P.aw(null,null,z,z.bZ(a))},
l2:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){z=H.L(u)
y=H.ae(u)
$.t.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.aF(x)
w=t
v=x.ga4()
c.$2(w,v)}}},
kN:function(a,b,c,d){var z=a.c6(0)
if(!!J.n(z).$isaj&&z!==$.$get$cc())z.cU(new P.kQ(b,c,d))
else b.N(c,d)},
kO:function(a,b){return new P.kP(a,b)},
kR:function(a,b,c){var z=a.c6(0)
if(!!J.n(z).$isaj&&z!==$.$get$cc())z.cU(new P.kS(b,c))
else b.a6(c)},
bQ:function(a,b,c,d,e){var z={}
z.a=d
P.l3(new P.l0(z,e))},
eA:function(a,b,c,d){var z,y
y=$.t
if(y===c)return d.$0()
$.t=c
z=y
try{y=d.$0()
return y}finally{$.t=z}},
eB:function(a,b,c,d,e){var z,y
y=$.t
if(y===c)return d.$1(e)
$.t=c
z=y
try{y=d.$1(e)
return y}finally{$.t=z}},
l1:function(a,b,c,d,e,f){var z,y
y=$.t
if(y===c)return d.$2(e,f)
$.t=c
z=y
try{y=d.$2(e,f)
return y}finally{$.t=z}},
aw:function(a,b,c,d){var z=C.d!==c
if(z)d=!(!z||!1)?c.bZ(d):c.ec(d)
P.eC(d)},
jf:{"^":"f:0;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
je:{"^":"f:12;a,b,c",
$1:function(a){var z,y
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jg:{"^":"f:1;a",
$0:function(){this.a.$0()}},
jh:{"^":"f:1;a",
$0:function(){this.a.$0()}},
ku:{"^":"d;a,b,c",
dH:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.a3(new P.kw(this,b),0),a)
else throw H.b(P.u("`setTimeout()` not found."))},
p:{
kv:function(a,b){var z=new P.ku(!0,null,0)
z.dH(a,b)
return z}}},
kw:{"^":"f:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
aj:{"^":"d;$ti"},
ht:{"^":"f:2;a,b,c,d",
$2:function(a,b){var z,y
z=this.a
y=--z.b
if(z.a!=null){z.a=null
if(z.b===0||this.c)this.d.N(a,b)
else{z.c=a
z.d=b}}else if(y===0&&!this.c)this.d.N(z.c,z.d)}},
hs:{"^":"f;a,b,c,d,e",
$1:function(a){var z,y,x
z=this.a
y=--z.b
x=z.a
if(x!=null){z=this.b
if(z<0||z>=x.length)return H.a(x,z)
x[z]=a
if(y===0)this.c.bF(x)}else if(z.b===0&&!this.e)this.c.N(z.c,z.d)},
$S:function(){return{func:1,args:[,]}}},
lQ:{"^":"d;$ti"},
eh:{"^":"d;$ti",
ek:function(a,b){if(a==null)a=new P.bz()
if(this.a.a!==0)throw H.b(P.ba("Future already completed"))
$.t.toString
this.N(a,b)},
ej:function(a){return this.ek(a,null)}},
cx:{"^":"eh;a,$ti",
ah:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.ba("Future already completed"))
z.bB(b)},
N:function(a,b){this.a.bC(a,b)}},
kp:{"^":"eh;a,$ti",
ah:function(a,b){var z=this.a
if(z.a!==0)throw H.b(P.ba("Future already completed"))
z.a6(b)},
N:function(a,b){this.a.N(a,b)}},
ei:{"^":"d;aR:a<,b,c,d,e,$ti",
ge6:function(){return this.b.b},
gcp:function(){return(this.c&1)!==0},
geE:function(){return(this.c&2)!==0},
gco:function(){return this.c===8},
eC:function(a){return this.b.b.b5(this.d,a)},
eL:function(a){if(this.c!==6)return!0
return this.b.b.b5(this.d,J.aF(a))},
eB:function(a){var z,y,x
z=this.e
y=J.e(a)
x=this.b.b
if(H.eO(z,{func:1,args:[P.d,P.aT]}))return x.eT(z,y.gS(a),a.ga4())
else return x.b5(z,y.gS(a))},
eD:function(){return this.b.b.cz(this.d)}},
H:{"^":"d;bO:a<,b,dX:c<,$ti",
gdR:function(){return this.a===2},
gaN:function(){return this.a>=4},
b6:function(a,b){var z,y,x
z=$.t
if(z!==C.d){z.toString
if(b!=null)b=P.l_(b,z)}y=new P.H(0,z,null,[null])
x=b==null?1:3
this.aG(new P.ei(null,y,x,a,b,[H.C(this,0),null]))
return y},
ay:function(a){return this.b6(a,null)},
cU:function(a){var z,y
z=$.t
y=new P.H(0,z,null,this.$ti)
if(z!==C.d)z.toString
z=H.C(this,0)
this.aG(new P.ei(null,y,8,a,null,[z,z]))
return y},
aG:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gaN()){y.aG(a)
return}this.a=y.a
this.c=y.c}z=this.b
z.toString
P.aw(null,null,z,new P.jz(this,a))}},
bK:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaR()!=null;)w=w.a
w.a=x}}else{if(y===2){v=this.c
if(!v.gaN()){v.bK(a)
return}this.a=v.a
this.c=v.c}z.a=this.aS(a)
y=this.b
y.toString
P.aw(null,null,y,new P.jG(z,this))}},
af:function(){var z=this.c
this.c=null
return this.aS(z)},
aS:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaR()
z.a=y}return y},
a6:function(a){var z,y,x
z=this.$ti
y=H.bd(a,"$isaj",z,"$asaj")
if(y){z=H.bd(a,"$isH",z,null)
if(z)P.bM(a,this)
else P.ej(a,this)}else{x=this.af()
this.a=4
this.c=a
P.au(this,x)}},
bF:function(a){var z=this.af()
this.a=4
this.c=a
P.au(this,z)},
N:[function(a,b){var z=this.af()
this.a=8
this.c=new P.bn(a,b)
P.au(this,z)},function(a){return this.N(a,null)},"f4","$2","$1","gaH",4,2,13],
bB:function(a){var z=H.bd(a,"$isaj",this.$ti,"$asaj")
if(z){this.dK(a)
return}this.a=1
z=this.b
z.toString
P.aw(null,null,z,new P.jB(this,a))},
dK:function(a){var z=H.bd(a,"$isH",this.$ti,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.aw(null,null,z,new P.jF(this,a))}else P.bM(a,this)
return}P.ej(a,this)},
bC:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aw(null,null,z,new P.jA(this,a,b))},
$isaj:1,
p:{
jy:function(a,b){var z=new P.H(0,$.t,null,[b])
z.a=4
z.c=a
return z},
ej:function(a,b){var z,y,x
b.a=1
try{a.b6(new P.jC(b),new P.jD(b))}catch(x){z=H.L(x)
y=H.ae(x)
P.lA(new P.jE(b,z,y))}},
bM:function(a,b){var z
for(;a.gdR();)a=a.c
if(a.gaN()){z=b.af()
b.a=a.a
b.c=a.c
P.au(b,z)}else{z=b.c
b.a=2
b.c=a
a.bK(z)}},
au:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=y.c
y=y.b
u=J.aF(v)
t=v.ga4()
y.toString
P.bQ(null,null,y,u,t)}return}for(;b.gaR()!=null;b=s){s=b.a
b.a=null
P.au(z.a,b)}r=z.a.c
x.a=w
x.b=r
y=!w
if(!y||b.gcp()||b.gco()){q=b.ge6()
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
t=v.ga4()
y.toString
P.bQ(null,null,y,u,t)
return}p=$.t
if(p==null?q!=null:p!==q)$.t=q
else p=null
if(b.gco())new P.jJ(z,x,b,w).$0()
else if(y){if(b.gcp())new P.jI(x,b,r).$0()}else if(b.geE())new P.jH(z,x,b).$0()
if(p!=null)$.t=p
y=x.b
if(!!J.n(y).$isaj){o=b.b
if(y.a>=4){n=o.c
o.c=null
b=o.aS(n)
o.a=y.a
o.c=y.c
z.a=y
continue}else P.bM(y,o)
return}}o=b.b
b=o.af()
y=x.a
u=x.b
if(!y){o.a=4
o.c=u}else{o.a=8
o.c=u}z.a=o
y=o}}}},
jz:{"^":"f:1;a,b",
$0:function(){P.au(this.a,this.b)}},
jG:{"^":"f:1;a,b",
$0:function(){P.au(this.b,this.a.a)}},
jC:{"^":"f:0;a",
$1:function(a){var z=this.a
z.a=0
z.a6(a)}},
jD:{"^":"f:14;a",
$2:function(a,b){this.a.N(a,b)},
$1:function(a){return this.$2(a,null)}},
jE:{"^":"f:1;a,b,c",
$0:function(){this.a.N(this.b,this.c)}},
jB:{"^":"f:1;a,b",
$0:function(){this.a.bF(this.b)}},
jF:{"^":"f:1;a,b",
$0:function(){P.bM(this.b,this.a)}},
jA:{"^":"f:1;a,b,c",
$0:function(){this.a.N(this.b,this.c)}},
jJ:{"^":"f:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.c.eD()}catch(w){y=H.L(w)
x=H.ae(w)
if(this.d){v=J.aF(this.a.a.c)
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.c
else u.b=new P.bn(y,x)
u.a=!0
return}if(!!J.n(z).$isaj){if(z instanceof P.H&&z.gbO()>=4){if(z.gbO()===8){v=this.b
v.b=z.gdX()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.ay(new P.jK(t))
v.a=!1}}},
jK:{"^":"f:0;a",
$1:function(a){return this.a}},
jI:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.eC(this.c)}catch(x){z=H.L(x)
y=H.ae(x)
w=this.a
w.b=new P.bn(z,y)
w.a=!0}}},
jH:{"^":"f:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.c
w=this.c
if(w.eL(z)===!0&&w.e!=null){v=this.b
v.b=w.eB(z)
v.a=!1}}catch(u){y=H.L(u)
x=H.ae(u)
w=this.a
v=J.aF(w.a.c)
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.c
else s.b=new P.bn(y,x)
s.a=!0}}},
ef:{"^":"d;a,b"},
bG:{"^":"d;$ti",
A:function(a,b){var z,y
z={}
y=new P.H(0,$.t,null,[null])
z.a=null
z.a=this.aX(new P.iT(z,this,b,y),!0,new P.iU(y),y.gaH())
return y},
gi:function(a){var z,y
z={}
y=new P.H(0,$.t,null,[P.D])
z.a=0
this.aX(new P.iV(z),!0,new P.iW(z,y),y.gaH())
return y},
gex:function(a){var z,y
z={}
y=new P.H(0,$.t,null,[H.bf(this,"bG",0)])
z.a=null
z.a=this.aX(new P.iP(z,this,y),!0,new P.iQ(y),y.gaH())
return y}},
iT:{"^":"f;a,b,c,d",
$1:function(a){P.l2(new P.iR(this.c,a),new P.iS(),P.kO(this.a.a,this.d))},
$S:function(){return{func:1,args:[H.bf(this.b,"bG",0)]}}},
iR:{"^":"f:1;a,b",
$0:function(){return this.a.$1(this.b)}},
iS:{"^":"f:0;",
$1:function(a){}},
iU:{"^":"f:1;a",
$0:function(){this.a.a6(null)}},
iV:{"^":"f:0;a",
$1:function(a){++this.a.a}},
iW:{"^":"f:1;a,b",
$0:function(){this.b.a6(this.a.a)}},
iP:{"^":"f;a,b,c",
$1:function(a){P.kR(this.a.a,this.c,a)},
$S:function(){return{func:1,args:[H.bf(this.b,"bG",0)]}}},
iQ:{"^":"f:1;a",
$0:function(){var z,y,x,w
try{x=H.ch()
throw H.b(x)}catch(w){z=H.L(w)
y=H.ae(w)
P.kT(this.a,z,y)}}},
iO:{"^":"d;$ti"},
dS:{"^":"d;$ti"},
kQ:{"^":"f:1;a,b,c",
$0:function(){return this.a.N(this.b,this.c)}},
kP:{"^":"f:15;a,b",
$2:function(a,b){P.kN(this.a,this.b,a,b)}},
kS:{"^":"f:1;a,b",
$0:function(){return this.a.a6(this.b)}},
bn:{"^":"d;S:a>,a4:b<",
k:function(a){return H.c(this.a)},
$isJ:1},
kC:{"^":"d;"},
l0:{"^":"f:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bz()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=J.aG(y)
throw x}},
k8:{"^":"kC;",
eU:function(a){var z,y,x
try{if(C.d===$.t){a.$0()
return}P.eA(null,null,this,a)}catch(x){z=H.L(x)
y=H.ae(x)
P.bQ(null,null,this,z,y)}},
eV:function(a,b){var z,y,x
try{if(C.d===$.t){a.$1(b)
return}P.eB(null,null,this,a,b)}catch(x){z=H.L(x)
y=H.ae(x)
P.bQ(null,null,this,z,y)}},
ec:function(a){return new P.ka(this,a)},
bZ:function(a){return new P.k9(this,a)},
ed:function(a){return new P.kb(this,a)},
h:function(a,b){return},
cz:function(a){if($.t===C.d)return a.$0()
return P.eA(null,null,this,a)},
b5:function(a,b){if($.t===C.d)return a.$1(b)
return P.eB(null,null,this,a,b)},
eT:function(a,b,c){if($.t===C.d)return a.$2(b,c)
return P.l1(null,null,this,a,b,c)}},
ka:{"^":"f:1;a,b",
$0:function(){return this.a.cz(this.b)}},
k9:{"^":"f:1;a,b",
$0:function(){return this.a.eU(this.b)}},
kb:{"^":"f:0;a,b",
$1:function(a){return this.a.eV(this.b,a)}}}],["","",,P,{"^":"",
dB:function(a,b){return new H.ck(0,null,null,null,null,null,0,[a,b])},
Y:function(){return new H.ck(0,null,null,null,null,null,0,[null,null])},
cm:function(a){return H.lf(a,new H.ck(0,null,null,null,null,null,0,[null,null]))},
a0:function(a,b,c,d){return new P.jV(0,null,null,null,null,null,0,[d])},
hH:function(a,b,c){var z,y
if(P.cF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aY()
y.push(a)
try{P.kX(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.dT(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
cg:function(a,b,c){var z,y,x
if(P.cF(a))return b+"..."+c
z=new P.cs(b)
y=$.$get$aY()
y.push(a)
try{x=z
x.a=P.dT(x.ga7(),a,", ")}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.a=y.ga7()+c
y=z.ga7()
return y.charCodeAt(0)==0?y:y},
cF:function(a){var z,y
for(z=0;y=$.$get$aY(),z<y.length;++z)if(a===y[z])return!0
return!1},
kX:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gF(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.q())return
w=H.c(z.gu(z))
b.push(w)
y+=w.length+2;++x}if(!z.q()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gu(z);++x
if(!z.q()){if(x<=4){b.push(H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gu(z);++x
for(;z.q();t=s,s=r){r=z.gu(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.c(t)
v=H.c(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
cn:function(a,b){var z,y
z=P.a0(null,null,null,b)
for(y=J.X(a);y.q();)z.C(0,y.gu(y))
return z},
dE:function(a){var z,y,x
z={}
if(P.cF(a))return"{...}"
y=new P.cs("")
try{$.$get$aY().push(a)
x=y
x.a=x.ga7()+"{"
z.a=!0
J.cS(a,new P.i_(z,y))
z=y
z.a=z.ga7()+"}"}finally{z=$.$get$aY()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.ga7()
return z.charCodeAt(0)==0?z:z},
jV:{"^":"jM;a,b,c,d,e,f,r,$ti",
gF:function(a){var z=new P.cC(this,this.r,null,null,[null])
z.c=this.e
return z},
gi:function(a){return this.a},
w:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dL(b)},
dL:function(a){var z=this.d
if(z==null)return!1
return this.aL(z[this.aI(a)],a)>=0},
A:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.b(P.N(this))
z=z.b}},
C:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cD()
this.b=z}return this.bA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cD()
this.c=y}return this.bA(y,b)}else return this.dI(0,b)},
dI:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.cD()
this.d=z}y=this.aI(b)
x=z[y]
if(x==null)z[y]=[this.aQ(b)]
else{if(this.aL(x,b)>=0)return!1
x.push(this.aQ(b))}return!0},
cv:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bM(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bM(this.c,b)
else return this.dU(0,b)},
dU:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aI(b)]
x=this.aL(y,b)
if(x<0)return!1
this.bQ(y.splice(x,1)[0])
return!0},
a1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aO()}},
bA:function(a,b){if(a[b]!=null)return!1
a[b]=this.aQ(b)
return!0},
bM:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bQ(z)
delete a[b]
return!0},
aO:function(){this.r=this.r+1&67108863},
aQ:function(a){var z,y
z=new P.jW(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.aO()
return z},
bQ:function(a){var z,y
z=a.gdS()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.aO()},
aI:function(a){return J.ag(a)&0x3ffffff},
aL:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].gdN(),b))return y
return-1},
p:{
cD:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
jW:{"^":"d;dN:a<,b,dS:c<"},
cC:{"^":"d;a,b,c,d,$ti",
gu:function(a){return this.d},
q:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.N(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
jM:{"^":"iD;$ti"},
mP:{"^":"d;$ti"},
dC:{"^":"eo;$ti",$isi:1},
k:{"^":"d;$ti",
gF:function(a){return new H.dD(a,this.gi(a),0,null,[H.bg(this,a,"k",0)])},
t:function(a,b){return this.h(a,b)},
A:function(a,b){var z,y
z=this.gi(a)
if(typeof z!=="number")return H.r(z)
y=0
for(;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.b(P.N(a))}},
ez:function(a,b,c){var z,y,x
z=this.gi(a)
if(typeof z!=="number")return H.r(z)
y=b
x=0
for(;x<z;++x){y=c.$2(y,this.h(a,x))
if(z!==this.gi(a))throw H.b(P.N(a))}return y},
bk:function(a,b){return H.dU(a,b,null,H.bg(this,a,"k",0))},
l:function(a,b){var z,y,x
z=H.p([],[H.bg(this,a,"k",0)])
y=this.gi(a)
x=C.b.gi(b)
if(typeof y!=="number")return y.l()
C.c.si(z,C.b.l(y,x))
C.c.am(z,0,this.gi(a),a)
C.c.am(z,this.gi(a),z.length,b)
return z},
k:function(a){return P.cg(a,"[","]")}},
b5:{"^":"Q;$ti"},
i_:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.c(a)
z.a=y+": "
z.a+=H.c(b)}},
Q:{"^":"d;$ti",
A:function(a,b){var z,y
for(z=J.X(this.gG(a));z.q();){y=z.gu(z)
b.$2(y,this.h(a,y))}},
D:function(a,b){return J.fb(this.gG(a),b)},
gi:function(a){return J.a5(this.gG(a))},
k:function(a){return P.dE(a)},
$isG:1},
iE:{"^":"d;$ti",
R:function(a,b){var z
for(z=J.X(b);z.q();)this.C(0,z.gu(z))},
k:function(a){return P.cg(this,"{","}")},
A:function(a,b){var z
for(z=new P.cC(this,this.r,null,null,[null]),z.c=this.e;z.q();)b.$1(z.d)}},
iD:{"^":"iE;$ti"},
eo:{"^":"d+k;$ti"}}],["","",,P,{"^":"",
kZ:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.b(H.T(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.L(x)
w=String(y)
throw H.b(new P.ho(w,null,null))}w=P.bN(z)
return w},
bN:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jR(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.bN(a[z])
return a},
jR:{"^":"b5;a,b,c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.dT(b):y}},
gi:function(a){return this.b==null?this.c.a:this.aq().length},
gG:function(a){var z
if(this.b==null){z=this.c
return new H.dA(z,[H.C(z,0)])}return new P.jS(this)},
D:function(a,b){if(this.b==null)return this.c.D(0,b)
return Object.prototype.hasOwnProperty.call(this.a,b)},
A:function(a,b){var z,y,x,w
if(this.b==null)return this.c.A(0,b)
z=this.aq()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.bN(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.b(P.N(this))}},
aq:function(){var z=this.c
if(z==null){z=H.p(Object.keys(this.a),[P.j])
this.c=z}return z},
dT:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.bN(this.a[a])
return this.b[a]=z},
$asb5:function(){return[P.j,null]},
$asQ:function(){return[P.j,null]},
$asG:function(){return[P.j,null]}},
jS:{"^":"aO;a",
gi:function(a){var z=this.a
return z.gi(z)},
t:function(a,b){var z=this.a
if(z.b==null)z=z.gG(z).t(0,b)
else{z=z.aq()
if(b>>>0!==b||b>=z.length)return H.a(z,b)
z=z[b]}return z},
gF:function(a){var z=this.a
if(z.b==null){z=z.gG(z)
z=z.gF(z)}else{z=z.aq()
z=new J.d7(z,z.length,0,null,[H.C(z,0)])}return z},
w:function(a,b){return this.a.D(0,b)},
$asbs:function(){return[P.j]},
$asaO:function(){return[P.j]},
$asb4:function(){return[P.j]}},
df:{"^":"d;$ti"},
dh:{"^":"dS;$ti"},
hO:{"^":"df;a,b",
eq:function(a,b,c){var z=P.kZ(b,this.ger().a)
return z},
ep:function(a,b){return this.eq(a,b,null)},
ger:function(){return C.O},
$asdf:function(){return[P.d,P.j]}},
hP:{"^":"dh;a",
$asdS:function(){return[P.j,P.d]},
$asdh:function(){return[P.j,P.d]}}}],["","",,P,{"^":"",
hj:function(a){var z=J.n(a)
if(!!z.$isf)return z.k(a)
return"Instance of '"+H.aR(a)+"'"},
ca:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aG(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hj(a)},
du:function(a){return new P.jv(a)},
a_:function(a){H.bi(H.c(a))},
cG:{"^":"d;"},
"+bool":0,
c8:{"^":"d;e5:a<,b",
geM:function(){return this.a},
de:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.b(P.c1("DateTime is outside valid range: "+this.geM()))},
I:function(a,b){if(b==null)return!1
if(!(b instanceof P.c8))return!1
return this.a===b.a&&this.b===b.b},
V:function(a,b){return C.b.V(this.a,b.ge5())},
gB:function(a){var z=this.a
return(z^C.b.bN(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.h8(H.it(this))
y=P.b2(H.ir(this))
x=P.b2(H.im(this))
w=P.b2(H.io(this))
v=P.b2(H.iq(this))
u=P.b2(H.is(this))
t=P.h9(H.ip(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
h8:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h9:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
b2:function(a){if(a>=10)return""+a
return"0"+a}}},
ay:{"^":"aZ;"},
"+double":0,
b3:{"^":"d;ae:a<",
l:function(a,b){return new P.b3(C.b.l(this.a,b.gae()))},
E:function(a,b){return new P.b3(this.a-b.gae())},
Z:function(a,b){return C.b.Z(this.a,b.gae())},
ak:function(a,b){return C.b.ak(this.a,b.gae())},
I:function(a,b){if(b==null)return!1
if(!(b instanceof P.b3))return!1
return this.a===b.a},
gB:function(a){return this.a&0x1FFFFFFF},
V:function(a,b){return C.b.V(this.a,b.gae())},
k:function(a){var z,y,x,w,v
z=new P.hg()
y=this.a
if(y<0)return"-"+new P.b3(0-y).k(0)
x=z.$1(C.b.P(y,6e7)%60)
w=z.$1(C.b.P(y,1e6)%60)
v=new P.hf().$1(y%1e6)
return""+C.b.P(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
p:{
he:function(a,b,c,d,e,f){return new P.b3(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hf:{"^":"f:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hg:{"^":"f:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
J:{"^":"d;",
ga4:function(){return H.ae(this.$thrownJsError)}},
bz:{"^":"J;",
k:function(a){return"Throw of null."}},
ah:{"^":"J;a,b,c,d",
gaK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.c(z)
w=this.gaK()+y+x
if(!this.a)return w
v=this.gaJ()
u=P.ca(this.b)
return w+v+": "+H.c(u)},
p:{
c1:function(a){return new P.ah(!1,null,null,a)},
d6:function(a,b,c){return new P.ah(!0,a,b,c)},
fR:function(a){return new P.ah(!1,null,a,"Must not be null")}}},
dN:{"^":"ah;e,f,a,b,c,d",
gaK:function(){return"RangeError"},
gaJ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
p:{
bB:function(a,b,c){return new P.dN(null,null,!0,a,b,"Value not in range")},
at:function(a,b,c,d,e){return new P.dN(b,c,!0,a,d,"Invalid value")},
iu:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
z=a>c}else z=!0
if(z)throw H.b(P.at(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
z=b>c}else z=!0
if(z)throw H.b(P.at(b,a,c,"end",f))
return b}return c}}},
hF:{"^":"ah;e,i:f>,a,b,c,d",
gaK:function(){return"RangeError"},
gaJ:function(){if(J.b0(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
p:{
z:function(a,b,c,d,e){var z=e!=null?e:J.a5(b)
return new P.hF(b,z,!0,a,c,"Index out of range")}}},
j4:{"^":"J;a",
k:function(a){return"Unsupported operation: "+this.a},
p:{
u:function(a){return new P.j4(a)}}},
j2:{"^":"J;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.c(z):"UnimplementedError"},
p:{
cu:function(a){return new P.j2(a)}}},
bF:{"^":"J;a",
k:function(a){return"Bad state: "+this.a},
p:{
ba:function(a){return new P.bF(a)}}},
h2:{"^":"J;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.ca(z))+"."},
p:{
N:function(a){return new P.h2(a)}}},
dQ:{"^":"d;",
k:function(a){return"Stack Overflow"},
ga4:function(){return},
$isJ:1},
h7:{"^":"J;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.c(z)+"' during its initialization"}},
mb:{"^":"d;"},
jv:{"^":"d;a",
k:function(a){return"Exception: "+this.a}},
ho:{"^":"d;a,b,c",
k:function(a){var z,y
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
return y}},
D:{"^":"aZ;"},
"+int":0,
b4:{"^":"d;$ti",
b8:["d7",function(a,b){return new H.ee(this,b,[H.bf(this,"b4",0)])}],
A:function(a,b){var z
for(z=this.gF(this);z.q();)b.$1(z.gu(z))},
gi:function(a){var z,y
z=this.gF(this)
for(y=0;z.q();)++y
return y},
ga3:function(a){var z,y
z=this.gF(this)
if(!z.q())throw H.b(H.ch())
y=z.gu(z)
if(z.q())throw H.b(H.hJ())
return y},
t:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.fR("index"))
if(b<0)H.a4(P.at(b,0,null,"index",null))
for(z=this.gF(this),y=0;z.q();){x=z.gu(z)
if(b===y)return x;++y}throw H.b(P.z(b,this,"index",null,y))},
k:function(a){return P.hH(this,"(",")")}},
hK:{"^":"d;$ti"},
i:{"^":"d;$ti"},
"+List":0,
G:{"^":"d;$ti"},
b6:{"^":"d;",
gB:function(a){return P.d.prototype.gB.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
aZ:{"^":"d;"},
"+num":0,
d:{"^":";",
I:function(a,b){return this===b},
gB:function(a){return H.aQ(this)},
k:function(a){return"Instance of '"+H.aR(this)+"'"},
toString:function(){return this.k(this)}},
aT:{"^":"d;"},
j:{"^":"d;"},
"+String":0,
cs:{"^":"d;a7:a<",
gi:function(a){return this.a.length},
k:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
dT:function(a,b,c){var z=J.X(b)
if(!z.q())return a
if(c.length===0){do a+=H.c(z.gu(z))
while(z.q())}else{a+=H.c(z.gu(z))
for(;z.q();)a=a+c+H.c(z.gu(z))}return a}}}}],["","",,W,{"^":"",
hh:function(a,b,c){var z,y
z=document.body
y=(z&&C.r).W(z,a,b,c)
y.toString
z=new H.ee(new W.Z(y),new W.hi(),[W.v])
return z.ga3(z)},
dt:function(a){return"wheel"},
aI:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fr(a)
if(typeof y==="string")z=a.tagName}catch(x){H.L(x)}return z},
js:function(a,b){return document.createElement(a)},
ap:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
en:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bO:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.jm(a)
if(!!J.n(z).$isE)return z
return}else return a},
kU:function(a){var z
if(!!J.n(a).$isdq)return a
z=new P.ja([],[],!1)
z.c=!0
return z.b7(a)},
eD:function(a){var z=$.t
if(z===C.d)return a
return z.ed(a)},
x:{"^":"ar;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
lF:{"^":"cr;m:x=,n:y=,H:z=","%":"Accelerometer|LinearAccelerationSensor"},
lG:{"^":"h;i:length=","%":"AccessibleNodeList"},
lH:{"^":"x;O:target=,at:href}",
k:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lI:{"^":"x;O:target=,at:href}",
k:function(a){return String(a)},
"%":"HTMLAreaElement"},
lN:{"^":"x;at:href},O:target=","%":"HTMLBaseElement"},
c2:{"^":"x;",$isc2:1,"%":"HTMLBodyElement"},
lO:{"^":"x;L:name=","%":"HTMLButtonElement"},
c6:{"^":"x;J:height},K:width}",
cW:function(a,b,c){var z=a.getContext(b,P.l9(c,null))
return z},
$isc6:1,
"%":"HTMLCanvasElement"},
lP:{"^":"h;",
az:function(a){return P.I(a.getContextAttributes())},
"%":"CanvasRenderingContext2D"},
fX:{"^":"v;i:length=","%":"CDATASection|Comment|Text;CharacterData"},
lR:{"^":"a7;a_:style=","%":"CSSFontFaceRule"},
lS:{"^":"a7;a_:style=","%":"CSSKeyframeRule|MozCSSKeyframeRule|WebKitCSSKeyframeRule"},
lT:{"^":"a7;a_:style=","%":"CSSPageRule"},
lU:{"^":"br;i:length=","%":"CSSPerspective"},
lV:{"^":"c7;m:x=,n:y=","%":"CSSPositionValue"},
lW:{"^":"br;m:x=,n:y=,H:z=","%":"CSSRotation"},
a7:{"^":"h;","%":"CSSCharsetRule|CSSConditionRule|CSSGroupingRule|CSSImportRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSSupportsRule|MozCSSKeyframesRule|WebKitCSSKeyframesRule;CSSRule"},
lX:{"^":"br;m:x=,n:y=,H:z=","%":"CSSScale"},
h5:{"^":"jk;i:length=",
bD:function(a,b){var z,y
z=$.$get$di()
y=z[b]
if(typeof y==="string")return y
y=this.e2(a,b)
z[b]=y
return y},
e2:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ha()+b
if(z in a)return z
return b},
e_:function(a,b,c,d){a.setProperty(b,c,d)},
sJ:function(a,b){a.height=b},
sK:function(a,b){a.width=b},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h6:{"^":"d;",
sey:function(a,b){this.e_(a,this.bD(a,"float"),b,"")}},
lY:{"^":"a7;a_:style=","%":"CSSStyleRule"},
c7:{"^":"h;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
br:{"^":"h;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lZ:{"^":"c7;i:length=","%":"CSSTransformValue"},
m_:{"^":"br;m:x=,n:y=,H:z=","%":"CSSTranslation"},
m0:{"^":"c7;i:length=","%":"CSSUnparsedValue"},
m1:{"^":"a7;a_:style=","%":"CSSViewportRule"},
m2:{"^":"h;i:length=",
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
m3:{"^":"h;m:x=,n:y=,H:z=","%":"DeviceAcceleration"},
hb:{"^":"x;","%":"HTMLDivElement"},
dq:{"^":"v;",
gb_:function(a){return new W.aV(a,"change",!1,[W.K])},
gb0:function(a){return new W.aV(a,"mousedown",!1,[W.R])},
gb1:function(a){return new W.aV(a,"mousemove",!1,[W.R])},
gb2:function(a){return new W.aV(a,"mouseup",!1,[W.R])},
gb3:function(a){return new W.aV(a,W.dt(a),!1,[W.aU])},
$isdq:1,
"%":"Document|HTMLDocument|XMLDocument"},
m4:{"^":"h;",
k:function(a){return String(a)},
"%":"DOMException"},
m5:{"^":"hc;",
gaj:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z},
"%":"DOMPoint"},
hc:{"^":"h;",
gaj:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gH:function(a){return a.z},
"%":";DOMPointReadOnly"},
m6:{"^":"jo;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[P.al]},
$isq:1,
$asq:function(){return[P.al]},
$ask:function(){return[P.al]},
$isi:1,
$asi:function(){return[P.al]},
$asl:function(){return[P.al]},
"%":"ClientRectList|DOMRectList"},
hd:{"^":"h;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gK(a))+" x "+H.c(this.gJ(a))},
I:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isal)return!1
return a.left===z.gcq(b)&&a.top===z.gcD(b)&&this.gK(a)===z.gK(b)&&this.gJ(a)===z.gJ(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gK(a)
w=this.gJ(a)
return W.en(W.ap(W.ap(W.ap(W.ap(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcE:function(a){return new P.ak(a.left,a.top,[null])},
gJ:function(a){return a.height},
gcq:function(a){return a.left},
gcD:function(a){return a.top},
gK:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isal:1,
$asal:I.az,
"%":";DOMRectReadOnly"},
m7:{"^":"jq;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
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
m8:{"^":"h;i:length=","%":"DOMTokenList"},
ar:{"^":"v;a_:style=,eG:id=,bJ:namespaceURI=,eW:tagName=",
gea:function(a){return new W.jr(a)},
k:function(a){return a.localName},
W:["aB",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.ds
if(z==null){z=H.p([],[W.dJ])
y=new W.dK(z)
z.push(W.ek(null))
z.push(W.ew())
$.ds=y
d=y}else d=z
z=$.dr
if(z==null){z=new W.ez(d)
$.dr=z
c=z}else{z.a=d
c=z}}if($.ai==null){z=document
y=z.implementation.createHTMLDocument("")
$.ai=y
$.c9=y.createRange()
y=$.ai
y.toString
x=y.createElement("base")
J.fC(x,z.baseURI)
$.ai.head.appendChild(x)}z=$.ai
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.ai
if(!!this.$isc2)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.ai.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.c.w(C.Q,a.tagName)){$.c9.selectNodeContents(w)
v=$.c9.createContextualFragment(b)}else{w.innerHTML=b
v=$.ai.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.ai.body
if(w==null?z!=null:w!==z)J.cZ(w)
c.bh(v)
document.adoptNode(v)
return v},function(a,b,c){return this.W(a,b,c,null)},"en",null,null,"gf6",5,5,null],
d_:function(a,b,c,d){a.textContent=null
a.appendChild(this.W(a,b,c,d))},
cZ:function(a,b){return this.d_(a,b,null,null)},
b9:function(a){return a.getBoundingClientRect()},
gb_:function(a){return new W.a1(a,"change",!1,[W.K])},
gb0:function(a){return new W.a1(a,"mousedown",!1,[W.R])},
gb1:function(a){return new W.a1(a,"mousemove",!1,[W.R])},
gb2:function(a){return new W.a1(a,"mouseup",!1,[W.R])},
gb3:function(a){return new W.a1(a,W.dt(a),!1,[W.aU])},
$isar:1,
"%":";Element"},
hi:{"^":"f:0;",
$1:function(a){return!!J.n(a).$isar}},
m9:{"^":"x;J:height},L:name=,K:width}","%":"HTMLEmbedElement"},
ma:{"^":"K;S:error=","%":"ErrorEvent"},
K:{"^":"h;",
gO:function(a){return W.bO(a.target)},
aw:function(a){return a.preventDefault()},
$isK:1,
"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
E:{"^":"h;",
bV:["d5",function(a,b,c,d){if(c!=null)this.dJ(a,b,c,!1)}],
dJ:function(a,b,c,d){return a.addEventListener(b,H.a3(c,1),!1)},
dV:function(a,b,c,d){return a.removeEventListener(b,H.a3(c,1),!1)},
$isE:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SourceBuffer|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|TextTrack|TextTrackCue|USB|VR|VRDevice|VRDisplay|VRSession|VTTCue|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;et|eu|ex|ey"},
mu:{"^":"x;L:name=","%":"HTMLFieldSetElement"},
mv:{"^":"jx;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bt]},
$isq:1,
$asq:function(){return[W.bt]},
$ask:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$asl:function(){return[W.bt]},
"%":"FileList"},
mw:{"^":"E;S:error=","%":"FileReader"},
mx:{"^":"E;S:error=,i:length=","%":"FileWriter"},
mz:{"^":"h;a_:style=","%":"FontFace"},
mA:{"^":"E;",
f8:function(a,b,c){return a.forEach(H.a3(b,3),c)},
A:function(a,b){b=H.a3(b,3)
return a.forEach(b)},
"%":"FontFaceSet"},
mC:{"^":"x;i:length=,L:name=,O:target=","%":"HTMLFormElement"},
mE:{"^":"cr;m:x=,n:y=,H:z=","%":"Gyroscope"},
mF:{"^":"h;i:length=","%":"History"},
mG:{"^":"jO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
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
hw:{"^":"hx;",
f9:function(a,b,c,d,e,f){return a.open(b,c)},
eO:function(a,b,c){return a.open(b,c)},
"%":"XMLHttpRequest"},
hx:{"^":"E;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
mH:{"^":"x;J:height},L:name=,K:width}","%":"HTMLIFrameElement"},
cd:{"^":"h;",$iscd:1,"%":"ImageBitmap"},
ce:{"^":"h;",$isce:1,"%":"ImageData"},
cf:{"^":"x;J:height},K:width}",$iscf:1,"%":"HTMLImageElement"},
dw:{"^":"x;J:height},L:name=,K:width}",$isdw:1,"%":"HTMLInputElement"},
mJ:{"^":"h;O:target=","%":"IntersectionObserverEntry"},
bx:{"^":"ed;",
gf3:function(a){return a.which},
$isbx:1,
"%":"KeyboardEvent"},
mO:{"^":"x;at:href}","%":"HTMLLinkElement"},
mQ:{"^":"h;",
k:function(a){return String(a)},
"%":"Location"},
mR:{"^":"cr;m:x=,n:y=,H:z=","%":"Magnetometer"},
mS:{"^":"x;L:name=","%":"HTMLMapElement"},
i2:{"^":"x;S:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mU:{"^":"h;i:length=","%":"MediaList"},
mV:{"^":"E;aV:enabled=","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
mW:{"^":"E;",
bV:function(a,b,c,d){if(J.P(b,"message"))a.start()
this.d5(a,b,c,!1)},
"%":"MessagePort"},
mX:{"^":"x;L:name=","%":"HTMLMetaElement"},
mY:{"^":"jY;",
D:function(a,b){return P.I(a.get(b))!=null},
h:function(a,b){return P.I(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.I(y.value[1]))}},
gG:function(a){var z=H.p([],[P.j])
this.A(a,new W.i4(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.j,null]},
$isG:1,
$asG:function(){return[P.j,null]},
"%":"MIDIInputMap"},
i4:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
mZ:{"^":"jZ;",
D:function(a,b){return P.I(a.get(b))!=null},
h:function(a,b){return P.I(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.I(y.value[1]))}},
gG:function(a){var z=H.p([],[P.j])
this.A(a,new W.i5(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.j,null]},
$isG:1,
$asG:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
i5:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
n_:{"^":"k0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.by]},
$isq:1,
$asq:function(){return[W.by]},
$ask:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$asl:function(){return[W.by]},
"%":"MimeTypeArray"},
R:{"^":"ed;c5:button=",
geN:function(a){return new P.ak(a.movementX,a.movementY,[null])},
gct:function(a){var z,y,x
if(!!a.offsetX)return new P.ak(a.offsetX,a.offsetY,[null])
else{z=a.target
if(!J.n(W.bO(z)).$isar)throw H.b(P.u("offsetX is only supported on elements"))
y=W.bO(z)
z=[null]
x=new P.ak(a.clientX,a.clientY,z).E(0,J.ft(J.fv(y)))
return new P.ak(J.d_(x.a),J.d_(x.b),z)}},
$isR:1,
"%":"PointerEvent;DragEvent|MouseEvent"},
n0:{"^":"h;O:target=","%":"MutationRecord"},
Z:{"^":"dC;a",
ga3:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(P.ba("No elements"))
if(y>1)throw H.b(P.ba("More than one element"))
return z.firstChild},
R:function(a,b){var z,y,x,w
z=J.n(b)
if(!!z.$isZ){z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return}for(z=z.gF(b),y=this.a;z.q();)y.appendChild(z.gu(z))},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.a(y,b)
z.replaceChild(c,y[b])},
gF:function(a){var z=this.a.childNodes
return new W.dv(z,z.length,-1,null,[H.bg(C.S,z,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
$asdC:function(){return[W.v]},
$ask:function(){return[W.v]},
$asi:function(){return[W.v]},
$aseo:function(){return[W.v]}},
v:{"^":"E;av:parentNode=,b4:previousSibling=",
gcs:function(a){return new W.Z(a)},
eQ:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.d6(a):z},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
n8:{"^":"h;",
eP:[function(a){return a.previousNode()},"$0","gb4",1,0,4],
"%":"NodeIterator"},
ie:{"^":"k2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
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
nb:{"^":"x;J:height},L:name=,K:width}","%":"HTMLObjectElement"},
nd:{"^":"x;L:name=","%":"HTMLOutputElement"},
ne:{"^":"x;L:name=","%":"HTMLParamElement"},
b7:{"^":"h;i:length=","%":"Plugin"},
ng:{"^":"k6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b7]},
$isq:1,
$asq:function(){return[W.b7]},
$ask:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$asl:function(){return[W.b7]},
"%":"PluginArray"},
nj:{"^":"fX;O:target=","%":"ProcessingInstruction"},
nl:{"^":"h;",
b9:function(a){return a.getBoundingClientRect()},
"%":"Range"},
nr:{"^":"h;O:target=","%":"ResizeObserverEntry"},
ns:{"^":"kc;",
D:function(a,b){return P.I(a.get(b))!=null},
h:function(a,b){return P.I(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.I(y.value[1]))}},
gG:function(a){var z=H.p([],[P.j])
this.A(a,new W.iA(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.j,null]},
$isG:1,
$asG:function(){return[P.j,null]},
"%":"RTCStatsReport"},
iA:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
nt:{"^":"x;i:length=,L:name=","%":"HTMLSelectElement"},
cr:{"^":"E;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
nu:{"^":"K;S:error=","%":"SensorErrorEvent"},
nv:{"^":"x;L:name=","%":"HTMLSlotElement"},
nw:{"^":"eu;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bD]},
$isq:1,
$asq:function(){return[W.bD]},
$ask:function(){return[W.bD]},
$isi:1,
$asi:function(){return[W.bD]},
$asl:function(){return[W.bD]},
"%":"SourceBufferList"},
nx:{"^":"ki;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bE]},
$isq:1,
$asq:function(){return[W.bE]},
$ask:function(){return[W.bE]},
$isi:1,
$asi:function(){return[W.bE]},
$asl:function(){return[W.bE]},
"%":"SpeechGrammarList"},
ny:{"^":"K;S:error=","%":"SpeechRecognitionError"},
b9:{"^":"h;i:length=","%":"SpeechRecognitionResult"},
nA:{"^":"kl;",
D:function(a,b){return a.getItem(b)!=null},
h:function(a,b){return a.getItem(b)},
A:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gG:function(a){var z=H.p([],[P.j])
this.A(a,new W.iN(z))
return z},
gi:function(a){return a.length},
$asQ:function(){return[P.j,P.j]},
$isG:1,
$asG:function(){return[P.j,P.j]},
"%":"Storage"},
iN:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},
iY:{"^":"x;",
W:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
z=W.hh("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.Z(y).R(0,J.fo(z))
return y},
"%":"HTMLTableElement"},
nD:{"^":"x;",
W:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.W(z.createElement("table"),b,c,d)
z.toString
z=new W.Z(z)
x=z.ga3(z)
x.toString
z=new W.Z(x)
w=z.ga3(z)
y.toString
w.toString
new W.Z(y).R(0,new W.Z(w))
return y},
"%":"HTMLTableRowElement"},
nE:{"^":"x;",
W:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aB(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.C.W(z.createElement("table"),b,c,d)
z.toString
z=new W.Z(z)
x=z.ga3(z)
y.toString
x.toString
new W.Z(y).R(0,new W.Z(x))
return y},
"%":"HTMLTableSectionElement"},
dW:{"^":"x;",$isdW:1,"%":"HTMLTemplateElement"},
nF:{"^":"x;L:name=","%":"HTMLTextAreaElement"},
nH:{"^":"kt;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bJ]},
$isq:1,
$asq:function(){return[W.bJ]},
$ask:function(){return[W.bJ]},
$isi:1,
$asi:function(){return[W.bJ]},
$asl:function(){return[W.bJ]},
"%":"TextTrackCueList"},
nI:{"^":"ey;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bI]},
$isq:1,
$asq:function(){return[W.bI]},
$ask:function(){return[W.bI]},
$isi:1,
$asi:function(){return[W.bI]},
$asl:function(){return[W.bI]},
"%":"TextTrackList"},
nJ:{"^":"h;i:length=","%":"TimeRanges"},
bb:{"^":"h;",
gO:function(a){return W.bO(a.target)},
"%":"Touch"},
nK:{"^":"ky;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bb]},
$isq:1,
$asq:function(){return[W.bb]},
$ask:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$asl:function(){return[W.bb]},
"%":"TouchList"},
nL:{"^":"h;i:length=","%":"TrackDefaultList"},
nO:{"^":"h;",
fa:[function(a){return a.parentNode()},"$0","gav",1,0,4],
eP:[function(a){return a.previousNode()},"$0","gb4",1,0,4],
"%":"TreeWalker"},
ed:{"^":"K;","%":"CompositionEvent|FocusEvent|TextEvent|TouchEvent;UIEvent"},
nQ:{"^":"h;",
k:function(a){return String(a)},
"%":"URL"},
nS:{"^":"h;m:x=,H:z=","%":"VRStageBoundsPoint"},
cw:{"^":"i2;J:height},K:width}",$iscw:1,"%":"HTMLVideoElement"},
nU:{"^":"E;i:length=","%":"VideoTrackList"},
aU:{"^":"R;",
ges:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.u("deltaY is not supported"))},
$isaU:1,
"%":"WheelEvent"},
j7:{"^":"E;",
ge9:function(a){var z,y
z=P.aZ
y=new P.H(0,$.t,null,[z])
this.dP(a)
this.dW(a,W.eD(new W.j8(new P.kp(y,[z]))))
return y},
dW:function(a,b){return a.requestAnimationFrame(H.a3(b,1))},
dP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
j8:{"^":"f:0;a",
$1:function(a){this.a.ah(0,a)}},
nV:{"^":"E;"},
nZ:{"^":"v;L:name=,bJ:namespaceURI=","%":"Attr"},
o_:{"^":"kE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$ask:function(){return[W.a7]},
$isi:1,
$asi:function(){return[W.a7]},
$asl:function(){return[W.a7]},
"%":"CSSRuleList"},
o0:{"^":"hd;",
k:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
I:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isal)return!1
return a.left===z.gcq(b)&&a.top===z.gcD(b)&&a.width===z.gK(b)&&a.height===z.gJ(b)},
gB:function(a){var z,y,x,w
z=a.left
y=a.top
x=a.width
w=a.height
return W.en(W.ap(W.ap(W.ap(W.ap(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcE:function(a){return new P.ak(a.left,a.top,[null])},
gJ:function(a){return a.height},
gK:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
"%":"ClientRect|DOMRect"},
o1:{"^":"kG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bw]},
$isq:1,
$asq:function(){return[W.bw]},
$ask:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$asl:function(){return[W.bw]},
"%":"GamepadList"},
o4:{"^":"kI;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
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
o5:{"^":"kK;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.b9]},
$isq:1,
$asq:function(){return[W.b9]},
$ask:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$asl:function(){return[W.b9]},
"%":"SpeechRecognitionResultList"},
o6:{"^":"kM;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$iso:1,
$aso:function(){return[W.bH]},
$isq:1,
$asq:function(){return[W.bH]},
$ask:function(){return[W.bH]},
$isi:1,
$asi:function(){return[W.bH]},
$asl:function(){return[W.bH]},
"%":"StyleSheetList"},
ji:{"^":"b5;dQ:a<",
A:function(a,b){var z,y,x,w,v
for(z=this.gG(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.F)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gG:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.p([],[P.j])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=z[w]
u=J.e(v)
if(u.gbJ(v)==null)y.push(u.gL(v))}return y},
$asb5:function(){return[P.j,P.j]},
$asQ:function(){return[P.j,P.j]},
$asG:function(){return[P.j,P.j]}},
jr:{"^":"ji;a",
D:function(a,b){return this.a.hasAttribute(b)},
h:function(a,b){return this.a.getAttribute(b)},
gi:function(a){return this.gG(this).length}},
aV:{"^":"bG;a,b,c,$ti",
aX:function(a,b,c,d){return W.aa(this.a,this.b,a,!1,H.C(this,0))}},
a1:{"^":"aV;a,b,c,$ti"},
jt:{"^":"iO;a,b,c,d,e,$ti",
dD:function(a,b,c,d,e){this.e3()},
c6:function(a){if(this.b==null)return
this.e4()
this.b=null
this.d=null
return},
e3:function(){var z=this.d
if(z!=null&&this.a<=0)J.f3(this.b,this.c,z,!1)},
e4:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.f2(x,this.c,z,!1)}},
p:{
aa:function(a,b,c,d,e){var z=c==null?null:W.eD(new W.ju(c))
z=new W.jt(0,a,b,z,!1,[e])
z.dD(a,b,c,!1,e)
return z}}},
ju:{"^":"f:0;a",
$1:function(a){return this.a.$1(a)}},
cA:{"^":"d;cP:a<",
dE:function(a){var z,y
z=$.$get$cB()
if(z.a===0){for(y=0;y<262;++y)z.j(0,C.P[y],W.ll())
for(y=0;y<12;++y)z.j(0,C.p[y],W.lm())}},
a8:function(a){return $.$get$el().w(0,W.aI(a))},
a0:function(a,b,c){var z,y,x
z=W.aI(a)
y=$.$get$cB()
x=y.h(0,H.c(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
p:{
ek:function(a){var z,y
z=document.createElement("a")
y=new W.kd(z,window.location)
y=new W.cA(y)
y.dE(a)
return y},
o2:[function(a,b,c,d){return!0},"$4","ll",16,0,9],
o3:[function(a,b,c,d){var z,y,x,w,v
z=d.gcP()
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
return z},"$4","lm",16,0,9]}},
l:{"^":"d;$ti",
gF:function(a){return new W.dv(a,this.gi(a),-1,null,[H.bg(this,a,"l",0)])}},
dK:{"^":"d;a",
a8:function(a){return C.c.bW(this.a,new W.ih(a))},
a0:function(a,b,c){return C.c.bW(this.a,new W.ig(a,b,c))}},
ih:{"^":"f:0;a",
$1:function(a){return a.a8(this.a)}},
ig:{"^":"f:0;a,b,c",
$1:function(a){return a.a0(this.a,this.b,this.c)}},
ke:{"^":"d;cP:d<",
dG:function(a,b,c,d){var z,y,x
this.a.R(0,c)
z=b.b8(0,new W.kf())
y=b.b8(0,new W.kg())
this.b.R(0,z)
x=this.c
x.R(0,C.w)
x.R(0,y)},
a8:function(a){return this.a.w(0,W.aI(a))},
a0:["d9",function(a,b,c){var z,y
z=W.aI(a)
y=this.c
if(y.w(0,H.c(z)+"::"+b))return this.d.e8(c)
else if(y.w(0,"*::"+b))return this.d.e8(c)
else{y=this.b
if(y.w(0,H.c(z)+"::"+b))return!0
else if(y.w(0,"*::"+b))return!0
else if(y.w(0,H.c(z)+"::*"))return!0
else if(y.w(0,"*::*"))return!0}return!1}]},
kf:{"^":"f:0;",
$1:function(a){return!C.c.w(C.p,a)}},
kg:{"^":"f:0;",
$1:function(a){return C.c.w(C.p,a)}},
kq:{"^":"ke;e,a,b,c,d",
a0:function(a,b,c){if(this.d9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cT(a).a.getAttribute("template")==="")return this.e.w(0,b)
return!1},
p:{
ew:function(){var z=P.j
z=new W.kq(P.cn(C.o,z),P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),null)
z.dG(null,new H.i0(C.o,new W.kr(),[H.C(C.o,0),null]),["TEMPLATE"],null)
return z}}},
kr:{"^":"f:0;",
$1:function(a){return"TEMPLATE::"+H.c(a)}},
ko:{"^":"d;",
a8:function(a){var z=J.n(a)
if(!!z.$isdO)return!1
z=!!z.$isA
if(z&&W.aI(a)==="foreignObject")return!1
if(z)return!0
return!1},
a0:function(a,b,c){if(b==="is"||C.i.d2(b,"on"))return!1
return this.a8(a)}},
dv:{"^":"d;a,b,c,d,$ti",
q:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.W(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gu:function(a){return this.d}},
jl:{"^":"d;a",$isE:1,p:{
jm:function(a){if(a===window)return a
else return new W.jl(a)}}},
dJ:{"^":"d;"},
n9:{"^":"d;"},
nP:{"^":"d;"},
kd:{"^":"d;a,b"},
ez:{"^":"d;a",
bh:function(a){new W.kB(this).$2(a,null)},
ag:function(a,b){if(b==null)J.cZ(a)
else b.removeChild(a)},
dZ:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cT(a)
x=y.gdQ().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.L(t)}v="element unprintable"
try{v=J.aG(a)}catch(t){H.L(t)}try{u=W.aI(a)
this.dY(a,b,z,v,u,y,x)}catch(t){if(H.L(t) instanceof P.ah)throw t
else{this.ag(a,b)
window
s="Removing corrupted element "+H.c(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dY:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ag(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.a8(a)){this.ag(a,b)
window
z="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a0(a,"is",g)){this.ag(a,b)
window
z="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gG(f)
y=H.p(z.slice(0),[H.C(z,0)])
for(x=f.gG(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.a(y,x)
w=y[x]
if(!this.a.a0(a,J.fH(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.c(e)+" "+w+'="'+H.c(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$isdW)this.bh(a.content)}},
kB:{"^":"f:16;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dZ(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ag(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fq(z)}catch(w){H.L(w)
v=z
if(x){u=J.e(v)
if(u.gav(v)!=null){u.gav(v)
u.gav(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}},
jk:{"^":"h+h6;"},
jn:{"^":"h+k;"},
jo:{"^":"jn+l;"},
jp:{"^":"h+k;"},
jq:{"^":"jp+l;"},
jw:{"^":"h+k;"},
jx:{"^":"jw+l;"},
jN:{"^":"h+k;"},
jO:{"^":"jN+l;"},
jY:{"^":"h+Q;"},
jZ:{"^":"h+Q;"},
k_:{"^":"h+k;"},
k0:{"^":"k_+l;"},
k1:{"^":"h+k;"},
k2:{"^":"k1+l;"},
k5:{"^":"h+k;"},
k6:{"^":"k5+l;"},
kc:{"^":"h+Q;"},
et:{"^":"E+k;"},
eu:{"^":"et+l;"},
kh:{"^":"h+k;"},
ki:{"^":"kh+l;"},
kl:{"^":"h+Q;"},
ks:{"^":"h+k;"},
kt:{"^":"ks+l;"},
ex:{"^":"E+k;"},
ey:{"^":"ex+l;"},
kx:{"^":"h+k;"},
ky:{"^":"kx+l;"},
kD:{"^":"h+k;"},
kE:{"^":"kD+l;"},
kF:{"^":"h+k;"},
kG:{"^":"kF+l;"},
kH:{"^":"h+k;"},
kI:{"^":"kH+l;"},
kJ:{"^":"h+k;"},
kK:{"^":"kJ+l;"},
kL:{"^":"h+k;"},
kM:{"^":"kL+l;"}}],["","",,P,{"^":"",
eK:function(a){return a},
I:function(a){var z,y,x,w,v
if(a==null)return
z=P.Y()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
l9:function(a,b){var z
if(a==null)return
z={}
if(b!=null)b.$1(z)
J.cS(a,new P.la(z))
return z},
lb:function(a){var z,y
z=new P.H(0,$.t,null,[null])
y=new P.cx(z,[null])
a.then(H.a3(new P.lc(y),1))["catch"](H.a3(new P.ld(y),1))
return z},
dp:function(){var z=$.dn
if(z==null){z=J.bW(window.navigator.userAgent,"Opera",0)
$.dn=z}return z},
ha:function(){var z,y
z=$.dk
if(z!=null)return z
y=$.dl
if(y==null){y=J.bW(window.navigator.userAgent,"Firefox",0)
$.dl=y}if(y)z="-moz-"
else{y=$.dm
if(y==null){y=P.dp()!==!0&&J.bW(window.navigator.userAgent,"Trident/",0)
$.dm=y}if(y)z="-ms-"
else z=P.dp()===!0?"-o-":"-webkit-"}$.dk=z
return z},
j9:{"^":"d;",
cn:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
b7:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.c8(y,!0)
x.de(y,!0)
return x}if(a instanceof RegExp)throw H.b(P.cu("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.lb(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.cn(a)
x=this.b
u=x.length
if(v>=u)return H.a(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.Y()
z.a=t
if(v>=u)return H.a(x,v)
x[v]=t
this.eA(a,new P.jb(z,this))
return z.a}if(a instanceof Array){s=a
v=this.cn(s)
x=this.b
if(v>=x.length)return H.a(x,v)
t=x[v]
if(t!=null)return t
u=J.w(s)
r=u.gi(s)
t=this.c?new Array(r):s
if(v>=x.length)return H.a(x,v)
x[v]=t
if(typeof r!=="number")return H.r(r)
x=J.aA(t)
q=0
for(;q<r;++q)x.j(t,q,this.b7(u.h(s,q)))
return t}return a}},
jb:{"^":"f:2;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.b7(b)
J.f1(z,a,y)
return y}},
la:{"^":"f:2;a",
$2:function(a,b){this.a[a]=b}},
ja:{"^":"j9;a,b,c",
eA:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
b.$2(w,a[w])}}},
lc:{"^":"f:0;a",
$1:function(a){return this.a.ah(0,a)}},
ld:{"^":"f:0;a",
$1:function(a){return this.a.ej(a)}}}],["","",,P,{"^":"",nq:{"^":"E;S:error=","%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},nM:{"^":"E;S:error=","%":"IDBTransaction"},nT:{"^":"K;O:target=","%":"IDBVersionChangeEvent"}}],["","",,P,{"^":"",
em:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ak:{"^":"d;m:a>,n:b>,$ti",
k:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
I:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ak))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gB:function(a){var z,y
z=J.ag(this.a)
y=J.ag(this.b)
return P.jQ(P.em(P.em(0,z),y))},
l:function(a,b){var z,y,x
z=this.a
y=C.b.gm(b)
if(typeof z!=="number")return z.l()
y=C.a.l(z,y)
z=this.b
x=C.b.gn(b)
if(typeof z!=="number")return z.l()
return new P.ak(y,C.a.l(z,x),this.$ti)},
E:function(a,b){var z,y,x,w
z=this.a
y=J.e(b)
x=y.gm(b)
if(typeof z!=="number")return z.E()
if(typeof x!=="number")return H.r(x)
w=this.b
y=y.gn(b)
if(typeof w!=="number")return w.E()
if(typeof y!=="number")return H.r(y)
return new P.ak(z-x,w-y,this.$ti)}},
k7:{"^":"d;$ti"},
al:{"^":"k7;$ti"}}],["","",,P,{"^":"",lE:{"^":"as;O:target=","%":"SVGAElement"},mc:{"^":"A;m:x=,n:y=","%":"SVGFEBlendElement"},md:{"^":"A;m:x=,n:y=","%":"SVGFEColorMatrixElement"},me:{"^":"A;m:x=,n:y=","%":"SVGFEComponentTransferElement"},mf:{"^":"A;m:x=,n:y=","%":"SVGFECompositeElement"},mg:{"^":"A;m:x=,n:y=","%":"SVGFEConvolveMatrixElement"},mh:{"^":"A;m:x=,n:y=","%":"SVGFEDiffuseLightingElement"},mi:{"^":"A;m:x=,n:y=","%":"SVGFEDisplacementMapElement"},mj:{"^":"A;m:x=,n:y=","%":"SVGFEFloodElement"},mk:{"^":"A;m:x=,n:y=","%":"SVGFEGaussianBlurElement"},ml:{"^":"A;m:x=,n:y=","%":"SVGFEImageElement"},mm:{"^":"A;m:x=,n:y=","%":"SVGFEMergeElement"},mn:{"^":"A;m:x=,n:y=","%":"SVGFEMorphologyElement"},mo:{"^":"A;m:x=,n:y=","%":"SVGFEOffsetElement"},mp:{"^":"A;m:x=,n:y=,H:z=","%":"SVGFEPointLightElement"},mq:{"^":"A;m:x=,n:y=","%":"SVGFESpecularLightingElement"},mr:{"^":"A;m:x=,n:y=,H:z=","%":"SVGFESpotLightElement"},ms:{"^":"A;m:x=,n:y=","%":"SVGFETileElement"},mt:{"^":"A;m:x=,n:y=","%":"SVGFETurbulenceElement"},my:{"^":"A;m:x=,n:y=","%":"SVGFilterElement"},mB:{"^":"as;m:x=,n:y=","%":"SVGForeignObjectElement"},hv:{"^":"as;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},as:{"^":"A;","%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},mI:{"^":"as;m:x=,n:y=","%":"SVGImageElement"},mN:{"^":"jU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dz]},
$isi:1,
$asi:function(){return[P.dz]},
$asl:function(){return[P.dz]},
"%":"SVGLengthList"},mT:{"^":"A;m:x=,n:y=","%":"SVGMaskElement"},na:{"^":"k4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ask:function(){return[P.dM]},
$isi:1,
$asi:function(){return[P.dM]},
$asl:function(){return[P.dM]},
"%":"SVGNumberList"},nf:{"^":"A;m:x=,n:y=","%":"SVGPatternElement"},nh:{"^":"h;m:x=,n:y=","%":"SVGPoint"},ni:{"^":"h;i:length=","%":"SVGPointList"},nm:{"^":"h;m:x=,n:y=","%":"SVGRect"},nn:{"^":"hv;m:x=,n:y=","%":"SVGRectElement"},dO:{"^":"A;",$isdO:1,"%":"SVGScriptElement"},nB:{"^":"kn;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ask:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$asl:function(){return[P.j]},
"%":"SVGStringList"},A:{"^":"ar;",
W:function(a,b,c,d){var z,y,x,w,v,u
z=H.p([],[W.dJ])
z.push(W.ek(null))
z.push(W.ew())
z.push(new W.ko())
c=new W.ez(new W.dK(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.r).en(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.Z(w)
u=z.ga3(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
gb_:function(a){return new W.a1(a,"change",!1,[W.K])},
gb0:function(a){return new W.a1(a,"mousedown",!1,[W.R])},
gb1:function(a){return new W.a1(a,"mousemove",!1,[W.R])},
gb2:function(a){return new W.a1(a,"mouseup",!1,[W.R])},
gb3:function(a){return new W.a1(a,"mousewheel",!1,[W.aU])},
$isA:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},nC:{"^":"as;m:x=,n:y=","%":"SVGSVGElement"},iZ:{"^":"as;","%":"SVGTextPathElement;SVGTextContentElement"},nG:{"^":"iZ;m:x=,n:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nN:{"^":"kA;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ask:function(){return[P.e0]},
$isi:1,
$asi:function(){return[P.e0]},
$asl:function(){return[P.e0]},
"%":"SVGTransformList"},nR:{"^":"as;m:x=,n:y=","%":"SVGUseElement"},jT:{"^":"h+k;"},jU:{"^":"jT+l;"},k3:{"^":"h+k;"},k4:{"^":"k3+l;"},km:{"^":"h+k;"},kn:{"^":"km+l;"},kz:{"^":"h+k;"},kA:{"^":"kz+l;"}}],["","",,P,{"^":"",lJ:{"^":"h;i:length=","%":"AudioBuffer"},lK:{"^":"jj;",
D:function(a,b){return P.I(a.get(b))!=null},
h:function(a,b){return P.I(a.get(b))},
A:function(a,b){var z,y
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.I(y.value[1]))}},
gG:function(a){var z=H.p([],[P.j])
this.A(a,new P.fS(z))
return z},
gi:function(a){return a.size},
$asQ:function(){return[P.j,null]},
$isG:1,
$asG:function(){return[P.j,null]},
"%":"AudioParamMap"},fS:{"^":"f:2;a",
$2:function(a,b){return this.a.push(a)}},lL:{"^":"h;aV:enabled=","%":"AudioTrack"},lM:{"^":"E;i:length=","%":"AudioTrackList"},fT:{"^":"E;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nc:{"^":"fT;i:length=","%":"OfflineAudioContext"},jj:{"^":"h+Q;"}}],["","",,P,{"^":"",no:{"^":"h;",
bU:function(a,b){return a.activeTexture(b)},
bX:function(a,b,c){return a.attachShader(b,c)},
bY:function(a,b,c){return a.bindBuffer(b,c)},
c_:function(a,b,c){return a.bindFramebuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c4:function(a,b,c,d){return a.bufferData(b,c,d)},
c7:function(a,b){return a.clear(b)},
c8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c9:function(a,b){return a.compileShader(b)},
ca:function(a){return a.createBuffer()},
cb:function(a){return a.createProgram()},
cc:function(a,b){return a.createShader(b)},
cd:function(a){return a.createTexture()},
cf:function(a,b){return a.depthMask(b)},
cg:function(a,b){return a.disable(b)},
ci:function(a,b,c,d){return a.drawArrays(b,c,d)},
cj:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ck:function(a,b){return a.enable(b)},
cl:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.I(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cr:function(a,b){return a.linkProgram(b)},
cu:function(a,b,c){return a.pixelStorei(b,c)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bl:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ax:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.n(g)
if(!!y.$isce&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,P.eK(g))
return}if(!!y.$iscf&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,g)
return}if(!!y.$isc6&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,g)
return}if(!!y.$iscw&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,g)
return}if(!!y.$iscd&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.c1("Incorrect number or type of arguments"))},
cA:function(a,b,c,d,e,f,g){return this.ax(a,b,c,d,e,f,g,null,null,null)},
cB:function(a,b,c,d){return a.texParameterf(b,c,d)},
cC:function(a,b,c,d){return a.texParameteri(b,c,d)},
cG:function(a,b,c){return a.uniform1f(b,c)},
cH:function(a,b,c){return a.uniform1fv(b,c)},
cI:function(a,b,c){return a.uniform1i(b,c)},
cJ:function(a,b,c){return a.uniform1iv(b,c)},
cK:function(a,b,c){return a.uniform2fv(b,c)},
cL:function(a,b,c){return a.uniform3fv(b,c)},
cM:function(a,b,c){return a.uniform4fv(b,c)},
cN:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cO:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cQ:function(a,b){return a.useProgram(b)},
cR:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGLRenderingContext"},np:{"^":"h;",
eb:function(a,b){return a.beginTransformFeedback(b)},
ee:function(a,b){return a.bindVertexArray(b)},
eo:function(a){return a.createVertexArray()},
eu:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ev:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ew:function(a){return a.endTransformFeedback()},
f1:function(a,b,c,d){a.transformFeedbackVaryings(b,c,d)
return},
f2:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bU:function(a,b){return a.activeTexture(b)},
bX:function(a,b,c){return a.attachShader(b,c)},
bY:function(a,b,c){return a.bindBuffer(b,c)},
c_:function(a,b,c){return a.bindFramebuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c4:function(a,b,c,d){return a.bufferData(b,c,d)},
c7:function(a,b){return a.clear(b)},
c8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c9:function(a,b){return a.compileShader(b)},
ca:function(a){return a.createBuffer()},
cb:function(a){return a.createProgram()},
cc:function(a,b){return a.createShader(b)},
cd:function(a){return a.createTexture()},
cf:function(a,b){return a.depthMask(b)},
cg:function(a,b){return a.disable(b)},
ci:function(a,b,c,d){return a.drawArrays(b,c,d)},
cj:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ck:function(a,b){return a.enable(b)},
cl:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.I(a.getContextAttributes())},
ba:function(a){return a.getError()},
bb:function(a,b){return a.getProgramInfoLog(b)},
bc:function(a,b,c){return a.getProgramParameter(b,c)},
bd:function(a,b){return a.getShaderInfoLog(b)},
be:function(a,b,c){return a.getShaderParameter(b,c)},
bf:function(a,b,c){return a.getUniformLocation(b,c)},
cr:function(a,b){return a.linkProgram(b)},
cu:function(a,b,c){return a.pixelStorei(b,c)},
bj:function(a,b,c){return a.shaderSource(b,c)},
bl:function(a,b,c,d){return a.stencilFunc(b,c,d)},
ax:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.n(g)
if(!!y.$isce&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,P.eK(g))
return}if(!!y.$iscf&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,g)
return}if(!!y.$isc6&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,g)
return}if(!!y.$iscw&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,g)
return}if(!!y.$iscd&&h==null&&z&&j==null){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.c1("Incorrect number or type of arguments"))},
cA:function(a,b,c,d,e,f,g){return this.ax(a,b,c,d,e,f,g,null,null,null)},
cB:function(a,b,c,d){return a.texParameterf(b,c,d)},
cC:function(a,b,c,d){return a.texParameteri(b,c,d)},
cG:function(a,b,c){return a.uniform1f(b,c)},
cH:function(a,b,c){return a.uniform1fv(b,c)},
cI:function(a,b,c){return a.uniform1i(b,c)},
cJ:function(a,b,c){return a.uniform1iv(b,c)},
cK:function(a,b,c){return a.uniform2fv(b,c)},
cL:function(a,b,c){return a.uniform3fv(b,c)},
cM:function(a,b,c){return a.uniform4fv(b,c)},
cN:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cO:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cQ:function(a,b){return a.useProgram(b)},
cR:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
"%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",nz:{"^":"kk;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.z(b,a,null,null,null))
return P.I(a.item(b))},
j:function(a,b,c){throw H.b(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ask:function(){return[P.G]},
$isi:1,
$asi:function(){return[P.G]},
$asl:function(){return[P.G]},
"%":"SQLResultSetRowList"},kj:{"^":"h+k;"},kk:{"^":"kj+l;"}}],["","",,L,{"^":"",
cv:function(a8,a9,b0,b1,b2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=new Float32Array(16)
y=new T.B(z)
for(x=b0.b,w=x.length,v=b1.a,u=v.length,t=0;t<a8.length;++t){s=a8[t]
if(t>=u)return H.a(v,t)
r=v[t]
q=s.e
if(q<0)r.M()
else{if(q>=u)return H.a(v,q)
r.v(v[q])}if(t>=w)return H.a(x,t)
p=x[t]
if(p!=null){o=L.c3(p.f,b2)
n=L.c3(p.b,b2)
m=L.c3(p.d,b2)
q=p.r
if(o>=q.length)return H.a(q,o)
l=q[o]
q=p.c
if(n>=q.length)return H.a(q,n)
q=q[n]
k=p.e
if(m>=k.length)return H.a(k,m)
j=k[m].a
i=j[0]
h=j[1]
g=j[2]
f=j[3]
e=i+i
d=h+h
c=g+g
b=i*e
a=i*d
a0=i*c
a1=h*d
a2=h*c
a3=g*c
a4=f*e
a5=f*d
a6=f*c
a7=q.a
z[0]=1-(a1+a3)
z[1]=a+a6
z[2]=a0-a5
z[3]=0
z[4]=a-a6
z[5]=1-(b+a3)
z[6]=a2+a4
z[7]=0
z[8]=a0+a5
z[9]=a2-a4
z[10]=1-(b+a1)
z[11]=0
z[12]=a7[0]
z[13]=a7[1]
z[14]=a7[2]
z[15]=1
y.U(0,l)
r.ab(0,y)}else r.ab(0,s.b)}for(z=b1.b,x=z.length,t=0;t<a8.length;++t){if(t>=x)return H.a(z,t)
r=z[t]
r.v(a9)
if(t>=u)return H.a(v,t)
r.ab(0,v[t])
if(t>=a8.length)return H.a(a8,t)
r.ab(0,a8[t].c)}},
h4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=L.d5(a.length)
y=a.length
x=d.length
w=new Float32Array(y*16*x)
for(y=d.length,x=z.b,v=x.length,u=w.length,t=0,s=0;s<d.length;d.length===y||(0,H.F)(d),++s){L.cv(a,b,c,z,d[s])
for(r=0;r<v;++r){q=x[r]
for(p=0;p<16;++p){o=t+p
n=q.h(0,p)
if(o<0||o>=u)return H.a(w,o)
w[o]=n}t+=16}}return w},
bo:{"^":"d;c3:a<,b,c,d,e",
k:function(a){return"BONE["+this.d+"] ("+this.e+") "+H.c(this.a)+"\ntrans:\n"+this.b.k(0)+"offset:\n"+this.c.k(0)}},
fQ:{"^":"d;a,b",
dd:function(a){var z,y,x,w
for(z=this.b,y=this.a,x=0;x<a;++x){w=new Float32Array(16)
if(x>=y.length)return H.a(y,x)
y[x]=new T.B(w)
w=new Float32Array(16)
if(x>=z.length)return H.a(z,x)
z[x]=new T.B(w)}},
p:{
d5:function(a){var z,y,x
z=new Array(a)
z.fixed$length=Array
y=[T.B]
z=H.p(z,y)
x=new Array(a)
x.fixed$length=Array
y=new L.fQ(z,H.p(x,y))
y.dd(a)
return y}}},
d9:{"^":"d;a,b,c,d,e,f,r",
k:function(a){var z=[]
z.push(H.c(this.a.a))
z.push(""+this.b.length+": "+H.c(this.c))
z.push(""+this.d.length+": "+H.c(this.e))
z.push(""+this.f.length+": "+H.c(this.r))
return C.c.aa(z,"\n")},
p:{
c3:function(a,b){var z,y,x
for(z=J.ad(b),y=0;y<a.length-1;y=x){x=y+1
if(z.Z(b,a[x]))return y}return 0}}},
iG:{"^":"d;a,b,c",
k:function(a){return"SkeletalAnimation["+H.c(this.a)+", duration: "+H.c(this.c)+", frames: "+this.b.length+"]"}}}],["","",,G,{"^":"",
jc:function(a){var z,y,x,w
z=H.p(a.split("\n"),[P.j])
for(y=0;y<z.length;y=x){x=y+1
w=""+x+": "
if(y>=z.length)return H.a(z,y)
w+=H.c(z[y])
if(y>=z.length)return H.a(z,y)
z[y]=w}return C.c.aa(z,"\n")},
eg:function(a,b,c){var z,y,x,w
z=J.e(a)
y=z.cc(a,b)
z.bj(a,y,c)
z.c9(a,y)
x=z.be(a,y,35713)
if(x!=null&&J.P(x,!1)){w=z.bd(a,y)
P.a_("E:Compilation failed:")
P.a_("E:"+G.jc(c))
P.a_("E:Failure:")
P.a_(C.i.l("E:",w))
throw H.b(w)}return y},
bv:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*3)
for(y=0;y<a.length;++y){z=y*3
x=J.bZ(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.c_(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
z+=2
if(y>=a.length)return H.a(a,y)
v=J.cW(a[y])
if(z>=w)return H.a(b,z)
b[z]=v}return b},
hm:function(a,b){var z,y,x,w
z=a.length
b=new Float32Array(z*2)
for(y=0;y<a.length;++y){z=y*2
x=J.bZ(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x;++z
if(y>=a.length)return H.a(a,y)
x=J.c_(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hn:function(a,b){var z,y,x,w,v
z=a.length
b=new Float32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.bZ(a[y])
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.c_(a[y])
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.cW(a[y])
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.fu(a[y])
if(z>=w)return H.a(b,z)
b[z]=x}return b},
hl:function(a,b){var z,y,x,w,v
z=a.length
b=new Uint32Array(z*4)
for(y=0;y<a.length;++y){z=y*4
x=J.W(a[y],0)
w=b.length
if(z>=w)return H.a(b,z)
b[z]=x
x=z+1
if(y>=a.length)return H.a(a,y)
v=J.W(a[y],1)
if(x>=w)return H.a(b,x)
b[x]=v
v=z+2
if(y>=a.length)return H.a(a,y)
x=J.W(a[y],2)
if(v>=w)return H.a(b,v)
b[v]=x
z+=3
if(y>=a.length)return H.a(a,y)
x=J.W(a[y],3)
if(z>=w)return H.a(b,z)
b[z]=x}return b},
jL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
for(z=a.e,y=new H.am(z,z.r,null,null,[H.C(z,0)]),y.c=z.e,x=b.x,w=[[P.i,P.D]],v=[P.ay],u=[T.S],t=[T.m],s=[T.a9];y.q();){r=y.d
if(!x.D(0,r)){q="Dropping unnecessary attribute: "+H.c(r)
if($.eP>0)H.bi("I: "+q)
continue}p=z.h(0,r)
switch($.$get$a2().h(0,r).a){case"vec2":b.ac(r,G.hm(H.bj(p,"$isi",s,"$asi"),null),2)
break
case"vec3":b.ac(r,G.bv(H.bj(p,"$isi",t,"$asi"),null),3)
break
case"vec4":b.ac(r,G.hn(H.bj(p,"$isi",u,"$asi"),null),4)
break
case"float":b.ac(r,new Float32Array(H.bP(H.bj(p,"$isi",v,"$asi"))),1)
break
case"uvec4":b.ac(r,G.hl(H.bj(p,"$isi",w,"$asi"),null),4)
break}}},
hU:function(a,b,c){var z,y,x,w,v
z=G.dG(a,b.d,1,b.e.x)
z.ap(G.bv(c,null))
y=new Array(c.length)
y.fixed$length=Array
x=H.p(y,[P.D])
for(y=c.length,w=x.length,v=0;v<y;++v){if(v>=w)return H.a(x,v)
x[v]=v}z.bo(x)
return z},
aP:{"^":"d;aV:c>"},
ct:{"^":"aP;d,a,b,c",
bs:function(){return this.d},
k:function(a){var z,y,x,w
z=H.p(["{"+H.c(new H.ec(H.li(this),null))+"}["+this.a+"]"],[P.j])
for(y=this.d,x=new H.am(y,y.r,null,null,[H.C(y,0)]),x.c=y.e;x.q();){w=x.d
z.push(H.c(w)+": "+H.c(y.h(0,w)))}return C.c.aa(z,"\n")}},
fV:{"^":"dP;"},
fY:{"^":"d;a,b",
cm:function(a,b,c){J.fj(this.a,b)
if(c>0)J.fN(this.a,b,c)},
cS:function(a,b,c,d,e,f,g,h){J.bV(this.a,34962,b)
J.fO(this.a,c,d,e,!1,g,h)}},
hp:{"^":"d;a,b,c,d,e"},
hk:{"^":"d;a,b,c"},
hu:{"^":"d;a,b,c,d,e",
a5:function(a){switch($.$get$a2().h(0,a).a){case"vec2":this.e.j(0,a,H.p([],[T.a9]))
break
case"vec3":this.e.j(0,a,H.p([],[T.m]))
break
case"vec4":this.e.j(0,a,H.p([],[T.S]))
break
case"float":this.e.j(0,a,H.p([],[P.ay]))
break
case"uvec4":this.e.j(0,a,H.p([],[[P.i,P.D]]))
break}},
ap:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<z;++x)y.push(a[x].a9(0))},
da:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<y;++x)z.push(b[x].a9(0))},
aD:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<y;++x)z.push(b[x].a9(0))},
bn:function(a,b){var z,y,x
z=this.e.h(0,a)
for(y=b.length,x=0;x<y;++x)z.push(b[x].a9(0))},
di:function(){var z,y,x,w,v,u,t,s,r
z=this.b
y=new Array(z.length*3)
y.fixed$length=Array
x=H.p(y,[P.D])
for(y=z.length,w=x.length,v=0,u=0;u<y;++u){t=z[u]
if(v>=w)return H.a(x,v)
x[v]=t.a
s=v+1
if(s>=w)return H.a(x,s)
x[s]=t.b
s=v+2
if(s>=w)return H.a(x,s)
x[s]=t.c
v+=3}for(z=this.c,u=0;!1;++u){if(u>=0)return H.a(z,u)
r=z[u]
y=r.ge7(r)
if(v>=w)return H.a(x,v)
x[v]=y
y=v+1
s=r.gf5(r)
if(y>=w)return H.a(x,y)
x[y]=s
s=v+2
y=r.gef(r)
if(s>=w)return H.a(x,s)
x[s]=y
y=v+3
s=r.ge7(r)
if(y>=w)return H.a(x,y)
x[y]=s
s=v+4
y=r.gef(r)
if(s>=w)return H.a(x,s)
x[s]=y
y=v+5
s=r.gf7(r)
if(y>=w)return H.a(x,y)
x[y]=s
v+=6}return x},
k:function(a){var z,y,x,w,v
z=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(y=this.e,x=new H.am(y,y.r,null,null,[H.C(y,0)]),x.c=y.e;x.q();){w=x.d
v=$.$get$a2().h(0,w).a
z.push(H.c(w)+"["+v+","+y.h(0,w).length+"]")}return C.c.aa(z," ")}},
e_:{"^":"d;a,b,c"},
dZ:{"^":"d;a,b,c"},
i1:{"^":"ct;d,a,b,c",
dl:function(a){var z=this.d
z.j(0,"cDepthTest",!0)
z.j(0,"cDepthWrite",!0)
z.j(0,"cBlendEquation",$.$get$d8())
z.j(0,"cStencilFunc",$.$get$dR())},
p:{
dF:function(a){var z=new G.i1(P.Y(),a,!1,!0)
z.dl(a)
return z}}},
i3:{"^":"aP;d,e,f,r,x,y,z,Q,ch,cx,cy,a,b,c",
bp:function(a,b,c){var z,y
C.i.bE(a,0)
this.cy.j(0,a,b)
z=this.d
y=this.r.h(0,a)
J.bV(z.a,34962,y)
J.cO(z.a,34962,b,35048)},
bq:function(a){this.ch=a
this.bp("aPosition",a,3)},
dj:function(){var z=this.cx
if(z!=null)return z.length
return this.ch.length/3|0},
ac:function(a,b,c){var z,y,x,w,v
z=J.cP(a,0)===105
if(z&&this.z===0)this.z=C.b.an(b.length,c)
y=this.r
x=this.d
y.j(0,a,J.bX(x.a))
this.bp(a,b,c)
w=$.$get$a2().h(0,a)
if(w==null)throw H.b("Unknown canonical "+a)
v=this.x.h(0,a)
J.bl(x.a,this.e)
x.cm(0,v,z?1:0)
x.cS(0,y.h(0,a),v,w.br(),5126,!1,0,0)},
ap:function(a){var z,y,x,w
z=this.r
y=this.d
z.j(0,"aPosition",J.bX(y.a))
this.bq(a)
x=$.$get$a2().h(0,"aPosition")
if(x==null)throw H.b("Unknown canonical aPosition")
w=this.x.h(0,"aPosition")
J.bl(y.a,this.e)
y.cm(0,w,0)
y.cS(0,z.h(0,"aPosition"),w,x.br(),5126,!1,0,0)},
bo:function(a){var z,y,x
z=this.d
this.y=J.bX(z.a)
y=this.ch.length
if(y<768){this.cx=new Uint8Array(H.bP(a))
this.Q=5121}else if(y<196608){this.cx=new Uint16Array(H.bP(a))
this.Q=5123}else{this.cx=new Uint32Array(H.bP(a))
this.Q=5125}J.bl(z.a,this.e)
y=this.y
x=this.cx
J.bV(z.a,34963,y)
J.cO(z.a,34963,x,35048)},
k:function(a){var z,y,x,w
z=this.cx
y=["Faces:"+(z==null?0:z.length)]
for(z=this.cy,x=new H.am(z,z.r,null,null,[H.C(z,0)]),x.c=z.e;x.q();){w=x.d
y.push(H.c(w)+":"+z.h(0,w).length)}return"MESH["+this.a+"] "+C.c.aa(y,"  ")},
p:{
dG:function(a,b,c,d){return new G.i3(b,J.fd(b.a),c,P.Y(),d,null,0,-1,null,null,P.Y(),"meshdata:"+a,!1,!0)}}},
ik:{"^":"ct;x,y,z,Q,ch,cx,cy,db,d,a,b,c",
dc:function(a,b){var z
if(typeof a!=="number")return a.Y()
if(typeof b!=="number")return H.r(b)
z=a/b
if(this.z===z)return
this.z=z
this.bw()},
bw:function(){var z,y,x,w,v,u
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
bs:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.x.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
u=new T.m(new Float32Array(3))
u.a2(x,w,v)
v=this.d
v.j(0,"uEyePosition",u)
u=this.cy
u.v(z)
z=u.a
z[12]=0
z[13]=0
z[14]=0
z[15]=1
t=-y[12]
s=-y[13]
r=-y[14]
y=J.n(t)
x=!!y.$isS
q=x?y.gaj(t):1
if(!!y.$ism){p=y.gm(t)
s=y.gn(t)
r=y.gH(t)
t=p}else if(x){p=y.gm(t)
s=y.gn(t)
r=y.gH(t)
t=p}else if(!(typeof t==="number")){t=null
s=null
r=null}y=z[0]
if(typeof t!=="number")return H.r(t)
x=z[4]
if(typeof s!=="number")return H.r(s)
w=z[8]
if(typeof r!=="number")return H.r(r)
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
c.v(this.db)
c.ab(0,u)
v.j(0,"uPerspectiveViewMatrix",c)
return v}},
iz:{"^":"aP;d,e,f,r,x,y,z,Q,ch,a,b,c",
dr:function(a,b,c,d){var z,y,x,w,v,u,t
for(z=this.e.d,y=z.length,x=this.y,w=this.d,v=this.r,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.j(0,t,J.cY(w.a,v,t))}for(z=this.f.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
x.j(0,t,J.cY(w.a,v,t))}},
dw:function(){var z,y,x,w,v
z=this.z
y=this.y
if(z.a===y.a&&this.Q.a===this.x.a)return[]
x=[]
for(w=new H.am(y,y.r,null,null,[H.C(y,0)]),w.c=y.e;w.q();){v=w.d
if(!z.D(0,v))x.push(v)}for(z=this.x,y=new P.cC(z,z.r,null,null,[null]),y.c=z.e,z=this.Q;y.q();){v=y.d
if(!z.w(0,v))x.push(v)}return x},
dC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=Date.now()
for(y=new H.am(b,b.r,null,null,[H.C(b,0)]),y.c=b.e,x=this.d,w=this.y,v=this.z,u=0;y.q();){t=y.d
switch(J.cP(t,0)){case 117:if(w.D(0,t)){s=b.h(0,t)
if(v.D(0,t))H.bi("E:"+(t+" : group ["+H.c(a)+"] overwrites ["+t+"]"))
v.j(0,t,a)
r=$.$get$a2().h(0,t)
if(r==null)H.a4("unknown "+t)
q=w.h(0,t)
p=r.a
switch(p){case"int":if(r.c===0)J.c0(x.a,q,s)
else if(!!J.n(s).$ishG)J.fL(x.a,q,s)
break
case"float":if(r.c===0)J.fJ(x.a,q,s)
else if(!!J.n(s).$iscb)J.fK(x.a,q,s)
break
case"mat4":if(r.c===0){p=H.af(s,"$isB").a
J.d4(x.a,q,!1,p)}else if(!!J.n(s).$iscb)J.d4(x.a,q,!1,s)
break
case"mat3":if(r.c===0){p=H.af(s,"$isan").a
J.d3(x.a,q,!1,p)}else if(!!J.n(s).$iscb)J.d3(x.a,q,!1,s)
break
case"vec4":p=r.c
o=x.a
if(p===0)J.d2(o,q,H.af(s,"$isS").a)
else J.d2(o,q,s)
break
case"vec3":p=r.c
o=x.a
if(p===0)J.d1(o,q,H.af(s,"$ism").a)
else J.d1(o,q,s)
break
case"vec2":p=r.c
o=x.a
if(p===0)J.d0(o,q,H.af(s,"$isa9").a)
else J.d0(o,q,s)
break
case"sampler2D":case"sampler2DShadow":p=this.ch
if(typeof p!=="number")return H.r(p)
J.cM(x.a,33984+p)
p=H.af(s,"$isbK").b
J.aq(x.a,3553,p)
p=this.ch
J.c0(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
case"samplerCube":p=this.ch
if(typeof p!=="number")return H.r(p)
J.cM(x.a,33984+p)
p=H.af(s,"$isbK").b
J.aq(x.a,34067,p)
p=this.ch
J.c0(x.a,q,p)
p=this.ch
if(typeof p!=="number")return p.l()
this.ch=p+1
break
default:H.bi("Error: unknow uniform type: "+p)}++u}break
case 99:s=b.h(0,t)
switch(t){case"cDepthTest":p=J.P(s,!0)
o=x.a
if(p)J.b1(o,2929)
else J.bY(o,2929)
break
case"cStencilFunc":H.af(s,"$ise_")
p=s.a
o=x.a
if(p===1281)J.bY(o,2960)
else{J.b1(o,2960)
o=s.b
n=s.c
J.fD(x.a,p,o,n)}break
case"cDepthWrite":J.fe(x.a,s)
break
case"cBlendEquation":H.af(s,"$isdZ")
p=s.a
o=x.a
if(p===1281)J.bY(o,3042)
else{J.b1(o,3042)
o=s.b
n=s.c
J.f7(x.a,o,n)
J.f6(x.a,p)}break}++u
break}}m=P.he(0,0,0,Date.now()-new P.c8(z,!1).a,0,0)
""+u
m.k(0)},
dh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
Date.now()
z=this.d
J.fM(z.a,this.r)
this.ch=0
this.z.a1(0)
for(y=b.length,x=0;x<b.length;b.length===y||(0,H.F)(b),++x){w=b[x]
this.dC(w.a,w.bs())}y=this.Q
y.a1(0)
for(v=a.cy,u=new H.am(v,v.r,null,null,[H.C(v,0)]),u.c=v.e;u.q();)y.C(0,u.d)
t=this.dw()
if(t.length!==0)P.a_("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.c(t)))
y=a.d
v=a.e
J.bl(y.a,v)
s=this.e.f.length>0
v=a.f
y=a.dj()
u=a.Q
r=a.z
if(s)J.f4(z.a,v)
if(u!==-1){q=z.a
if(r>1)J.fi(q,v,y,u,0,r)
else J.fh(q,v,y,u,0)}else{u=z.a
if(r>1)J.fg(u,v,0,y,r)
else J.ff(u,v,0,y)}if(s)J.fk(z.a)},
p:{
cq:function(a,b,c,d){var z,y,x,w,v,u,t
z=P.a0(null,null,null,P.j)
y=c.b
x=d.b
w=c.f
v=J.fc(b.a)
u=G.eg(b.a,35633,y)
J.cN(b.a,v,u)
t=G.eg(b.a,35632,x)
J.cN(b.a,v,t)
if(w.length>0)J.fI(b.a,v,w,35980)
J.fA(b.a,v)
if(J.fz(b.a,v,35714)!==!0)H.a4(J.fy(b.a,v))
z=new G.iz(b,c,d,v,P.cn(c.c,null),P.Y(),P.Y(),z,null,a,!1,!0)
z.dr(a,b,c,d)
return z}}},
y:{"^":"d;a,b,c",
br:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}},
iF:{"^":"d;a,b,c,d,e,f,r,x",
aC:function(a){var z,y,x,w,v
for(z=a.length,y=this.c,x=this.x,w=0;w<a.length;a.length===z||(0,H.F)(a),++w){v=a[w]
y.push(v)
x.j(0,v,this.r);++this.r}C.c.aA(y)},
ad:function(a){var z,y,x
for(z=a.length,y=this.d,x=0;x<a.length;a.length===z||(0,H.F)(a),++x)y.push(a[x])
C.c.aA(y)},
ao:function(a){var z,y
for(z=this.e,y=0;y<1;++y)z.push(a[y])
C.c.aA(z)},
bv:function(a,b){this.b=this.bx(!0,a,b)},
aE:function(a){return this.bv(a,null)},
ds:function(a,b){this.b=this.bx(!1,a,b)},
bu:function(a){return this.ds(a,null)},
bx:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
z=this.c
y=z.length
x=y===0
w=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(v=this.x,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
s=$.$get$a2().h(0,t)
w.push("layout (location="+H.c(v.h(0,t))+") in "+s.a+" "+H.c(t)+";")}w.push("")
r=x?"in":"out"
if(x)w.push("out vec4 oFragColor;")
for(z=this.e,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$a2().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$a2().h(0,q)
w.push(r+" "+s.a+" "+H.c(q)+";")}w.push("")
for(z=this.d,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){q=z[u]
s=$.$get$a2().h(0,q)
v=s.c
p=v===0?"":"["+v+"]"
w.push("uniform "+s.a+" "+H.c(q)+p+";")}w.push("")
if(c!=null)C.c.R(w,c)
if(a)w.push("void main(void) {")
C.c.R(w,b)
if(a)w.push("}")
return C.c.aa(w,"\n")},
p:{
aS:function(a){return new G.iF(a,null,[],[],[],[],0,P.Y())}}},
dP:{"^":"aP;",
eK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.d
y=z.a
x=y[12]
w=y[13]
v=y[14]
b=new T.m(new Float32Array(3))
b.a2(0,1,0)
u=this.e
t=u.a
t[0]=y[12]
t[1]=y[13]
t[2]=y[14]
s=u.E(0,a)
s.aZ(0)
r=b.ce(s)
r.aZ(0)
q=s.ce(r)
q.aZ(0)
t=r.aU(u)
p=q.aU(u)
u=s.aU(u)
o=r.a
n=q.a
m=s.a
z.bi(o[0],n[0],m[0],0,o[1],n[1],m[1],0,o[2],n[2],m[2],0,-t,-p,-u,1)
y[12]=x
y[13]=w
y[14]=v},
aY:function(a){return this.eK(a,null)}},
dX:{"^":"d;a,b,c,d,e,f,r",
bt:function(a,b){var z=this.e
if(z!==1)J.fG(a.a,b,34046,z)
z=this.r
J.bm(a.a,b,10240,z)
z=this.f
J.bm(a.a,b,10241,z)
if(this.b){J.bm(a.a,b,10242,33071)
J.bm(a.a,b,10243,33071)}},
p:{
j_:function(){return new G.dX(!1,!1,!1,!0,1,9729,9729)}}},
bK:{"^":"d;",
k:function(a){return"Texture["+this.a+", "+this.c+"]"}},
j1:{"^":"bK;f,r,x,a,b,c,d,e",
k:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}},
hy:{"^":"bK;f,a,b,c,d,e",
dt:function(a){var z,y
z=this.d
y=this.c
J.aq(z.a,y,this.b)
J.fE(z.a,y,0,6408,6408,5121,a)}}}],["","",,Y,{"^":"",
cz:function(a){var z,y,x,w,v
z=J.w(a)
y=z.gi(a)
if(typeof y!=="number")return H.r(y)
y=new Array(y)
y.fixed$length=Array
x=H.p(y,[P.ay])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.r(v)
if(!(w<v))break
v=z.h(a,w)
if(typeof v==="number"&&Math.floor(v)===v){v=J.M(z.h(a,w))
if(w>=y)return H.a(x,w)
x[w]=v}else{v=z.h(a,w)
if(typeof v==="number"){v=z.h(a,w)
if(w>=y)return H.a(x,w)
x[w]=v}}++w}return x},
jP:function(a){var z,y,x,w,v
z=J.w(a)
y=z.gi(a)
if(typeof y!=="number")return H.r(y)
y=new Array(y)
y.fixed$length=Array
x=H.p(y,[P.D])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.r(v)
if(!(w<v))break
v=z.h(a,w)
if(w>=y)return H.a(x,w)
x[w]=v;++w}return x},
jX:function(a){var z,y,x,w,v
z=J.w(a)
y=z.gi(a)
if(typeof y!=="number")return H.r(y)
y=new Array(y)
y.fixed$length=Array
x=H.p(y,[[P.i,P.D]])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.r(v)
if(!(w<v))break
v=Y.jP(z.h(a,w))
if(w>=y)return H.a(x,w)
x[w]=v;++w}return x},
hB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=[]
y=new G.hu(!1,z,[],[],P.Y())
x=J.w(a)
w=x.h(a,"name")
y.ap(Y.bq(x.h(a,"vertices")))
if(x.D(a,"normals")===!0){y.a5("aNormal")
y.aD("aNormal",Y.bq(x.h(a,"normals")))}if(x.D(a,"texturecoords")===!0){y.a5("aTexUV")
y.da("aTexUV",Y.h3(J.W(x.h(a,"texturecoords"),0)))}if(x.D(a,"tangents")===!0){y.a5("aTangent")
y.aD("aTangent",Y.bq(x.h(a,"tangents")))}if(x.D(a,"bitangents")===!0){y.a5("aBitangent")
y.aD("aBitangent",Y.bq(x.h(a,"bitangents")))}v=Y.jX(x.h(a,"faces"))
for(u=v.length,t=0;t<u;++t){s=v[t]
r=s.length
if(0>=r)return H.a(s,0)
q=s[0]
if(1>=r)return H.a(s,1)
p=s[1]
if(2>=r)return H.a(s,2)
z.push(new G.hk(q,p,s[2]))}o=P.dB(P.j,L.bo)
C.c.A(b,new Y.hC(o))
z=J.a5(x.h(a,"normals"))
if(typeof z!=="number")return z.an()
z=C.a.P(z,3)
u=new Array(z)
u.fixed$length=Array
r=[T.S]
n=H.p(u,r)
u=new Array(z)
u.fixed$length=Array
m=H.p(u,r)
for(u=m.length,r=n.length,l=0;l<z;++l){q=new Float32Array(4)
if(l>=r)return H.a(n,l)
n[l]=new T.S(q)
q=new Float32Array(4)
if(l>=u)return H.a(m,l)
m[l]=new T.S(q)}for(z=J.X(x.h(a,"bones"));z.q();){k=z.gu(z)
q=J.w(k)
j=o.h(0,q.h(k,"name"))
p=j.c
i=Y.cz(q.h(k,"offsetmatrix"))
h=p.a
if(15>=i.length)return H.a(i,15)
h[15]=i[15]
h[14]=i[14]
h[13]=i[13]
h[12]=i[12]
h[11]=i[11]
h[10]=i[10]
h[9]=i[9]
h[8]=i[8]
h[7]=i[7]
h[6]=i[6]
h[5]=i[5]
h[4]=i[4]
h[3]=i[3]
h[2]=i[2]
h[1]=i[1]
h[0]=i[0]
p.cF()
if(q.D(k,"weights")===!0){g=j.d
for(q=J.X(q.h(k,"weights"));q.q();){f=q.gu(q)
p=J.w(f)
e=p.h(f,0)
for(d=0;d<4;++d){if(e>>>0!==e||e>=u)return H.a(m,e)
if(m[e].a[d]===0)break}if(e>>>0!==e||e>=u)return H.a(m,e)
i=m[e]
p=J.M(p.h(f,1))
i=i.a
if(d>=4)return H.a(i,d)
i[d]=p
if(e>=r)return H.a(n,e)
n[e].a[d]=g}}}y.a5("aBoneIndex")
y.a5("aBoneWeight")
y.bn("aBoneIndex",n)
y.bn("aBoneWeight",m)
P.a_("mesh "+H.c(w)+" "+y.k(0)+" "+H.c(x.gG(a)))
return y},
hD:function(a){var z,y,x,w
z={}
y=H.p([],[L.bo])
z.a=0
x=new Y.hE(z,y)
for(w=J.X(J.W(J.W(a,"rootnode"),"children"));w.q();)x.$2(w.gu(w),-1)
return y},
hz:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=P.dB(P.j,L.bo)
C.c.A(a2,new Y.hA(z))
y=J.w(a1)
x=y.h(a1,"name")
w=J.M(y.h(a1,"tickspersecond"))
v=y.h(a1,"duration")
u=y.h(a1,"channels")
y=new Array(a2.length)
y.fixed$length=Array
y=H.p(y,[L.d9])
t=J.w(u)
P.a_("animated bones: "+H.c(t.gi(u)))
for(t=t.gF(u),s=y.length;t.q();){r=t.gu(t)
q=J.w(r)
p=z.h(0,q.h(r,"name"))
o=[]
n=[]
for(m=J.X(q.h(r,"positionkeys"));m.q();){l=m.gu(m)
k=J.w(l)
o.push(J.bk(k.h(l,0),w))
k=k.h(l,1)
j=J.w(k)
i=J.M(j.h(k,0))
h=J.M(j.h(k,1))
k=J.M(j.h(k,2))
j=new Float32Array(3)
j[0]=i
j[1]=h
j[2]=k
n.push(new T.m(j))}g=[]
f=[]
for(m=J.X(q.h(r,"rotationkeys"));m.q();){e=m.gu(m)
k=J.w(e)
g.push(J.bk(k.h(e,0),w))
d=Y.cz(k.h(e,1))
k=d.length
if(1>=k)return H.a(d,1)
j=d[1]
if(2>=k)return H.a(d,2)
i=d[2]
if(3>=k)return H.a(d,3)
k=d[3]
h=d[0]
c=new Float32Array(4)
c[0]=j
c[1]=i
c[2]=k
c[3]=h
f.push(new T.bA(c))}b=[]
a=[]
for(q=J.X(q.h(r,"scalingkeys"));q.q();){a0=q.gu(q)
m=J.w(a0)
b.push(J.bk(m.h(a0,0),w))
m=m.h(a0,1)
k=J.w(m)
j=J.M(k.h(m,0))
i=J.M(k.h(m,1))
m=J.M(k.h(m,2))
k=new Float32Array(3)
k[0]=j
k[1]=i
k[2]=m
a.push(new T.m(k))}q=new L.d9(p,o,n,g,f,b,a)
m=o.length
if(m===0){q.b=[0]
m=new Float32Array(3)
m[0]=0
m[1]=0
m[2]=0
q.c=[new T.m(m)]}m=g.length
if(m===0){q.d=[0]
m=new Float32Array(4)
m[0]=0
m[1]=0
m[2]=0
m[3]=1
q.e=[new T.bA(m)]}m=b.length
if(m===0){q.f=[0]
m=new Float32Array(3)
m[0]=1
m[1]=1
m[2]=1
q.r=[new T.m(m)]}m=p.d
if(m>=s)return H.a(y,m)
y[m]=q}return new L.iG(x,y,v)},
bq:function(a){var z,y,x,w,v,u,t,s,r
z=J.w(a)
y=z.gi(a)
if(typeof y!=="number")return y.an()
y=new Array(C.a.P(y,3))
y.fixed$length=Array
x=H.p(y,[T.m])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.r(v)
if(!(w<v))break
v=C.b.P(w,3)
u=J.M(z.h(a,w))
t=J.M(z.h(a,w+1))
s=J.M(z.h(a,w+2))
r=new Float32Array(3)
r[0]=u
r[1]=t
r[2]=s
if(v>=y)return H.a(x,v)
x[v]=new T.m(r)
w+=3}return x},
h3:function(a){var z,y,x,w,v,u,t,s
z=J.w(a)
y=z.gi(a)
if(typeof y!=="number")return y.an()
y=new Array(C.a.P(y,2))
y.fixed$length=Array
x=H.p(y,[T.a9])
y=x.length
w=0
while(!0){v=z.gi(a)
if(typeof v!=="number")return H.r(v)
if(!(w<v))break
v=C.b.P(w,2)
u=J.M(z.h(a,w))
t=J.M(z.h(a,w+1))
s=new Float32Array(2)
s[0]=u
s[1]=t
if(v>=y)return H.a(x,v)
x[v]=new T.a9(s)
w+=2}return x},
hC:{"^":"f:0;a",
$1:function(a){this.a.j(0,a.gc3(),a)
return a}},
hE:{"^":"f:17;a,b",
$2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=J.w(a)
y=z.h(a,"name")
x=Y.cz(z.h(a,"transformation"))
w=new T.B(new Float32Array(16))
v=x.length
if(0>=v)return H.a(x,0)
u=x[0]
if(1>=v)return H.a(x,1)
t=x[1]
if(2>=v)return H.a(x,2)
s=x[2]
if(3>=v)return H.a(x,3)
r=x[3]
if(4>=v)return H.a(x,4)
q=x[4]
if(5>=v)return H.a(x,5)
p=x[5]
if(6>=v)return H.a(x,6)
o=x[6]
if(7>=v)return H.a(x,7)
n=x[7]
if(8>=v)return H.a(x,8)
m=x[8]
if(9>=v)return H.a(x,9)
l=x[9]
if(10>=v)return H.a(x,10)
k=x[10]
if(11>=v)return H.a(x,11)
j=x[11]
if(12>=v)return H.a(x,12)
i=x[12]
if(13>=v)return H.a(x,13)
h=x[13]
if(14>=v)return H.a(x,14)
g=x[14]
if(15>=v)return H.a(x,15)
w.bi(u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,x[15])
w.cF()
f=new T.B(new Float32Array(16))
f.M()
x=this.a
v=x.a
x.a=v+1
this.b.push(new L.bo(y,w,f,v,b))
if(z.D(a,"children")===!0)for(z=J.X(z.h(a,"children"));z.q();)this.$2(z.gu(z),v)}},
hA:{"^":"f:0;a",
$1:function(a){this.a.j(0,a.gc3(),a)
return a}}}],["","",,R,{"^":"",
da:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[]
for(y=b.a,x=y.length,w=0;w<a.length;++w){v=a[w].e
if(v===-1)continue
if(w>=x)return H.a(y,w)
u=y[w].a
t=u[14]
s=u[13]
r=u[12]
u=new Float32Array(3)
u[0]=r
u[1]=s
u[2]=t
q=new T.m(new Float32Array(3))
q.v(new T.m(u))
q.U(0,c)
z.push(q)
if(v<0||v>=x)return H.a(y,v)
q=y[v].a
t=q[14]
s=q[13]
r=q[12]
u=new Float32Array(3)
u[0]=r
u[1]=s
u[2]=t
q=new T.m(new Float32Array(3))
q.v(new T.m(u))
q.U(0,c)
z.push(q)}return z},
fU:{"^":"d;a,b,c,d,e,f"},
iy:{"^":"ix;db,dx,d,e,f,r,x,y,z,Q,a,b,c",
eS:[function(a){var z,y,x,w
z=this.db
y=z.clientWidth
x=z.clientHeight
w=J.e(z)
w.sK(z,y)
w.sJ(z,x)
P.a_("size change "+H.c(y)+" "+H.c(x))
this.dx.dc(y,x)
this.z=y
this.Q=x},"$1","geR",4,0,18]},
iL:{"^":"d;",
du:function(a,b,c){var z,y,x
if(a==null)throw H.b("no element provided")
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
x=this.dF(b,c,90,30)
this.d=x
this.a.appendChild(x)
z=z.createElement("div")
this.c=z
this.a.appendChild(z)},
dF:function(a,b,c,d){var z,y,x,w,v
z=document.createElement("div")
y=z.style
x=""+c+"px"
y.width=x
x=""+d+"px"
y.height=x
y.color=a
y.background=a
for(w=0;w<c;++w){v=W.js("span",null)
y=J.cU(v)
J.e(y).sK(y,"1px")
C.n.sJ(y,""+d+"px")
C.n.sey(y,"left")
x=C.n.bD(y,"opacity")
y.setProperty(x,"0.9","")
y.background=b
z.appendChild(v)}return z}},
iM:{"^":"iL;e,f,a,b,c,d",
dA:function(a,b){var z,y,x,w,v;++this.e
if(J.b0(J.f0(a,this.f),1000))return
z=this.e*1000/1000
this.e=0
this.f=a
this.b.textContent=C.t.f0(z,2)+" fps"
y=this.c;(y&&C.D).cZ(y,b)
x=C.b.P(30*C.t.eg(z),90)
if(x<0)x=0
if(x>30)x=30
w=this.d.firstChild
y=J.cU(w)
v=""+x+"px"
y.height=v
this.d.appendChild(w)},
dz:function(a){return this.dA(a,"")}}}],["","",,A,{"^":"",
eN:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
if(J.fm(b)!==!0)return
z=b.dB(c)
y=b.ch
if(y!=null&&b.cx!=null){b.k(0)
x=C.c.geJ(e)
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
w.em(new T.an(u))
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
x.j(0,"uTransformationMatrix",u)
x.j(0,"uModelMatrix",v)
x.j(0,"uNormalMatrix",w)
e.push(y)
a.dh(b.cx,e,d)
if(0>=e.length)return H.a(e,-1)
e.pop()}for(y=b.cy,x=y.length,r=0;r<y.length;y.length===x||(0,H.F)(y),++r)A.eN(a,y[r],z,d,e)},
cp:{"^":"dP;ch,cx,cy,db,dx,d,e,f,r,x,a,b,c",
dn:function(a,b){this.cy.push(b)},
dB:function(a){var z=this.dx
z.v(a)
z.ab(0,this.d)
return z},
k:function(a){return"NODE["+this.a+"]"},
p:{
dI:function(a,b){var z,y,x,w,v,u
z=new Float32Array(9)
y=new T.B(new Float32Array(16))
y.M()
x=new T.B(new Float32Array(16))
x.M()
w=new Float32Array(3)
v=new Float32Array(3)
u=new Float32Array(3)
z=new A.cp(null,null,[],new T.an(z),y,x,new T.m(w),new T.m(v),new T.m(u),new T.m(new Float32Array(3)),a,!1,!0)
z.dn(a,b)
return z}}},
bC:{"^":"aP;d,e,cs:f>,a,b,c"},
ix:{"^":"aP;",
dq:function(a,b,c){if(this.d==null)this.d=new G.hp(this.e,null,null,null,null)},
dg:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d
y=this.r
x=this.z
w=this.Q
v=z.a
z=z.b
J.f5(v.a,36160,z)
J.fP(v.a,this.x,this.y,x,w)
if(y!==0)J.f8(v.a,y)
for(z=this.f,y=z.length,u=0;u<z.length;z.length===y||(0,H.F)(z),++u){t=z[u]
if(t.c!==!0)continue
x=t.d
if(x.c!==!0)continue
s=t.e
s.push(new G.ct(P.Y(),"transforms",!1,!0))
r=new T.B(new Float32Array(16))
r.M()
for(w=t.f,v=w.length,q=0;q<w.length;w.length===v||(0,H.F)(w),++q)A.eN(x,w[q],r,a,s)
if(0>=s.length)return H.a(s,-1)
s.pop()}},
df:function(){return this.dg(null)}}}],["","",,V,{}],["","",,D,{"^":"",
hY:function(a){var z,y
z=new P.H(0,$.t,null,[null])
y=new XMLHttpRequest()
C.E.eO(y,"GET",a)
W.aa(y,"loadend",new D.hZ(new P.cx(z,[null]),y),!1,W.nk)
y.send("")
return z},
hW:function(a){var z,y,x
z=new P.H(0,$.t,null,[null])
y=document.createElement("img")
x=new W.a1(y,"load",!1,[W.K])
x.gex(x).ay(new D.hX(new P.cx(z,[null]),y))
y.src=a
return z},
hZ:{"^":"f:0;a,b",
$1:function(a){this.a.ah(0,C.N.ep(0,W.kU(this.b.response)))}},
hX:{"^":"f:0;a,b",
$1:function(a){return this.a.ah(0,this.b)}},
hQ:{"^":"d;a,b,c",
dk:function(a){var z
a=document
z=W.bx
W.aa(a,"keydown",new D.hS(this),!1,z)
W.aa(a,"keyup",new D.hT(this),!1,z)},
p:{
hR:function(a){var z=P.D
z=new D.hQ(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z))
z.dk(a)
return z}}},
hS:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.C(0,J.cV(a))
z.b.C(0,a.which)}},
hT:{"^":"f:8;a",
$1:function(a){var z=this.a
z.a.cv(0,J.cV(a))
z.c.C(0,a.which)}},
i6:{"^":"d;a,b,c,d,e,f,r,x",
dm:function(a){var z,y
if(a==null)a=document
z=J.e(a)
y=z.gb1(a)
W.aa(y.a,y.b,new D.i8(this),!1,H.C(y,0))
y=z.gb0(a)
W.aa(y.a,y.b,new D.i9(this),!1,H.C(y,0))
y=z.gb2(a)
W.aa(y.a,y.b,new D.ia(this),!1,H.C(y,0))
z=z.gb3(a)
W.aa(z.a,z.b,new D.ib(this),!1,H.C(z,0))},
p:{
i7:function(a){var z=P.D
z=new D.i6(P.a0(null,null,null,z),P.a0(null,null,null,z),P.a0(null,null,null,z),0,0,0,0,0)
z.dm(a)
return z}}},
i8:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.aw(a)
y=this.a
y.r=z.gct(a).a
y.x=z.gct(a).b
y.d=z.geN(a).a
y.e=a.movementY}},
i9:{"^":"f:5;a",
$1:function(a){var z=J.e(a)
z.aw(a)
P.a_("BUTTON "+H.c(z.gc5(a)))
z=this.a
z.a.C(0,a.button)
z.b.C(0,a.button)}},
ia:{"^":"f:5;a",
$1:function(a){var z,y
z=J.e(a)
z.aw(a)
y=this.a
y.a.cv(0,z.gc5(a))
y.c.C(0,a.button)}},
ib:{"^":"f:19;a",
$1:function(a){var z=J.e(a)
z.aw(a)
this.a.f=z.ges(a)}},
ij:{"^":"fV;fy,go,id,k1,k2,k3,k4,r1,d,e,f,r,x,a,b,c"}}],["","",,A,{"^":"",
bh:function(a){var z,y
z=C.R.ez(a,0,new A.lk())
if(typeof z!=="number")return H.r(z)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
lk:{"^":"f:20;",
$2:function(a,b){var z,y
z=J.aE(a,J.ag(b))
if(typeof z!=="number")return H.r(z)
y=536870911&z
y=536870911&y+((524287&y)<<10)
return y^y>>>6}}}],["","",,T,{"^":"",an:{"^":"d;bH:a<",
v:function(a){var z,y
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=9)return H.a(z,b)
return z[b]},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.an){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
X:function(a){var z,y,x
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
return new T.m(z)},
l:function(a,b){var z=new T.an(new Float32Array(9))
z.v(this)
z.C(0,b)
return z},
E:function(a,b){var z,y,x
z=new Float32Array(9)
y=new T.an(z)
y.v(this)
x=b.gbH()
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
em:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(m===0){this.v(a)
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
C:function(a,b){var z,y
z=b.gbH()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))
y[4]=C.a.l(y[4],z.h(0,4))
y[5]=C.a.l(y[5],z.h(0,5))
y[6]=C.a.l(y[6],z.h(0,6))
y[7]=C.a.l(y[7],z.h(0,7))
y[8]=C.a.l(y[8],z.h(0,8))}},B:{"^":"d;bI:a<",
bi:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var z=this.a
z[15]=p
z[14]=o
z[13]=n
z[12]=m
z[11]=l
z[10]=k
z[9]=j
z[8]=i
z[7]=h
z[6]=g
z[5]=f
z[4]=e
z[3]=d
z[2]=c
z[1]=b
z[0]=a},
v:function(a){var z,y
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n[3] "+this.X(3).k(0)+"\n"},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=16)return H.a(z,b)
return z[b]},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.B){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]&&z[4]===x[4]&&z[5]===x[5]&&z[6]===x[6]&&z[7]===x[7]&&z[8]===x[8]&&z[9]===x[9]&&z[10]===x[10]&&z[11]===x[11]&&z[12]===x[12]&&z[13]===x[13]&&z[14]===x[14]&&z[15]===x[15]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
X:function(a){var z,y,x
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
return new T.S(z)},
l:function(a,b){var z=new T.B(new Float32Array(16))
z.v(this)
z.C(0,b)
return z},
E:function(a,b){var z,y,x
z=new Float32Array(16)
y=new T.B(z)
y.v(this)
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
cw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.a
w=x[4]
v=x[8]
u=x[5]
t=x[9]
s=x[6]
r=x[10]
q=x[7]
p=x[11]
o=-y
x[4]=w*z+v*y
x[5]=u*z+t*y
x[6]=s*z+r*y
x[7]=q*z+p*y
x[8]=w*o+v*z
x[9]=u*o+t*z
x[10]=s*o+r*z
x[11]=q*o+p*z},
cX:function(a,b,c,d){var z,y,x,w
z=b.a
y=z[0]
x=z[1]
w=z[2]
z=this.a
z[0]=z[0]*y
z[1]=z[1]*y
z[2]=z[2]*y
z[3]=z[3]*y
z[4]=z[4]*x
z[5]=z[5]*x
z[6]=z[6]*x
z[7]=z[7]*x
z[8]=z[8]*w
z[9]=z[9]*w
z[10]=z[10]*w
z[11]=z[11]*w
z[12]=z[12]
z[13]=z[13]
z[14]=z[14]
z[15]=z[15]},
U:function(a,b){return this.cX(a,b,null,null)},
M:function(){var z=this.a
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
cF:function(){var z,y
z=this.a
y=z[4]
z[4]=z[1]
z[1]=y
y=z[8]
z[8]=z[2]
z[2]=y
y=z[12]
z[12]=z[3]
z[3]=y
y=z[9]
z[9]=z[6]
z[6]=y
y=z[13]
z[13]=z[7]
z[7]=y
y=z[14]
z[14]=z[11]
z[11]=y},
C:function(a,b){var z,y
z=b.gbI()
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
ab:function(a8,a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
z[15]=m*e+l*a+k*a3+j*a7}},bA:{"^":"d;bL:a<",
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
gaj:function(a){return this.a[3]},
v:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]
y[3]=z[3]},
gi:function(a){var z,y,x,w,v
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=z[3]
return Math.sqrt(y*y+x*x+w*w+v*v)},
C:function(a,b){var z,y
z=b.gbL()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))},
l:function(a,b){var z=new T.bA(new Float32Array(4))
z.v(this)
z.C(0,b)
return z},
E:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.bA(z)
y.v(this)
x=b.gbL()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.a(z,b)
return z[b]},
k:function(a){var z=this.a
return H.c(z[0])+", "+H.c(z[1])+", "+H.c(z[2])+" @ "+H.c(z[3])}},a9:{"^":"d;bR:a<",
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+"]"},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.a9){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
E:function(a,b){var z,y,x
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
x=b.gbR()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
return new T.a9(z)},
l:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a9(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.C(0,b)
return y},
Y:function(a,b){var z,y,x
z=new Float32Array(2)
y=new T.a9(z)
x=this.a
z[1]=x[1]
z[0]=x[0]
y.U(0,1/b)
return y},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=2)return H.a(z,b)
return z[b]},
gi:function(a){var z,y
z=this.a
y=z[0]
z=z[1]
return Math.sqrt(y*y+z*z)},
C:function(a,b){var z,y
z=b.gbR()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))},
U:function(a,b){var z=this.a
z[1]=z[1]*b
z[0]=z[0]*b},
as:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])},
a9:function(a){var z,y
z=new Float32Array(2)
y=this.a
z[1]=y[1]
z[0]=y[0]
return new T.a9(z)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}},m:{"^":"d;bS:a<",
a2:function(a,b,c){var z=this.a
z[0]=a
z[1]=b
z[2]=c},
v:function(a){var z,y
z=a.a
y=this.a
y[0]=z[0]
y[1]=z[1]
y[2]=z[2]},
k:function(a){var z=this.a
return"["+H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+"]"},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.m){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
E:function(a,b){var z,y,x
z=new Float32Array(3)
y=new T.m(z)
y.v(this)
x=b.gbS()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
return y},
l:function(a,b){var z=new T.m(new Float32Array(3))
z.v(this)
z.C(0,b)
return z},
Y:function(a,b){return this.cY(1/b)},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=3)return H.a(z,b)
return z[b]},
gi:function(a){var z,y,x
z=this.a
y=z[0]
x=z[1]
z=z[2]
return Math.sqrt(y*y+x*x+z*z)},
aZ:function(a){var z,y,x,w,v,u
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
aU:function(a){var z,y
z=a.a
y=this.a
return y[0]*z[0]+y[1]*z[1]+y[2]*z[2]},
ce:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z[0]
x=z[1]
w=z[2]
v=a.a
u=v[0]
t=v[1]
s=v[2]
z=new T.m(new Float32Array(3))
z.a2(x*s-w*t,w*u-y*s,y*t-x*u)
return z},
C:function(a,b){var z,y
z=b.gbS()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))},
U:function(a,b){var z=this.a
z[2]=z[2]*b
z[1]=z[1]*b
z[0]=z[0]*b},
cY:function(a){var z=new T.m(new Float32Array(3))
z.v(this)
z.U(0,a)
return z},
as:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])},
a9:function(a){var z=new T.m(new Float32Array(3))
z.v(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
p:{
j5:function(a,b,c){var z=new T.m(new Float32Array(3))
z.a2(a,b,c)
return z}}},S:{"^":"d;bT:a<",
v:function(a){var z,y
z=a.a
y=this.a
y[3]=z[3]
y[2]=z[2]
y[1]=z[1]
y[0]=z[0]},
k:function(a){var z=this.a
return H.c(z[0])+","+H.c(z[1])+","+H.c(z[2])+","+H.c(z[3])},
I:function(a,b){var z,y,x
if(b==null)return!1
if(b instanceof T.S){z=this.a
y=z[0]
x=b.a
z=y===x[0]&&z[1]===x[1]&&z[2]===x[2]&&z[3]===x[3]}else z=!1
return z},
gB:function(a){return A.bh(this.a)},
E:function(a,b){var z,y,x
z=new Float32Array(4)
y=new T.S(z)
y.v(this)
x=b.gbT()
z[0]=z[0]-x[0]
z[1]=z[1]-x[1]
z[2]=z[2]-x[2]
z[3]=z[3]-x[3]
return y},
l:function(a,b){var z=new T.S(new Float32Array(4))
z.v(this)
z.C(0,b)
return z},
Y:function(a,b){var z=new T.S(new Float32Array(4))
z.v(this)
z.U(0,1/b)
return z},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=4)return H.a(z,b)
return z[b]},
gi:function(a){var z,y,x,w
z=this.a
y=z[0]
x=z[1]
w=z[2]
z=z[3]
return Math.sqrt(y*y+x*x+w*w+z*z)},
C:function(a,b){var z,y
z=b.gbT()
y=this.a
y[0]=C.a.l(y[0],z.h(0,0))
y[1]=C.a.l(y[1],z.h(0,1))
y[2]=C.a.l(y[2],z.h(0,2))
y[3]=C.a.l(y[3],z.h(0,3))},
U:function(a,b){var z=this.a
z[0]=z[0]*b
z[1]=z[1]*b
z[2]=z[2]*b
z[3]=z[3]*b},
as:function(a){var z=this.a
z[0]=Math.floor(z[0])
z[1]=Math.floor(z[1])
z[2]=Math.floor(z[2])
z[3]=Math.floor(z[3])},
a9:function(a){var z=new T.S(new Float32Array(4))
z.v(this)
return z},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gH:function(a){return this.a[2]},
gaj:function(a){return this.a[3]}}}],["","",,X,{"^":"",
eV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z={}
y=document
x=new R.iM(0,0,null,null,null,null)
x.du(y.getElementById("stats"),"blue","gray")
w=y.querySelector("#webgl-canvas")
v=new G.fY(null,w)
u=J.fw(w,"webgl2",P.cm(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
v.a=u
if(u==null)H.a4(P.du('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
t="ChronosGL Config: "+H.c(J.fx(u))
if($.eP>0)P.a_("I: "+t)
J.f9(u,0,0,0,1)
J.b1(u,2929)
J.b1(u,2884)
u=new Float32Array(3)
t=D.hR(null)
s=D.i7(w)
r=new T.B(new Float32Array(16))
r.M()
q=new Float32Array(3)
p=new Float32Array(3)
o=new Float32Array(3)
n=new D.ij(5000,0,0,0,new T.m(u),-0.02,t,s,r,new T.m(q),new T.m(p),new T.m(o),new T.m(new Float32Array(3)),"camera:orbit",!1,!0)
u=new T.B(new Float32Array(16))
u.M()
t=new T.B(new Float32Array(16))
t.M()
m=new G.ik(n,50,1,1,1e4,u,t,new T.B(new Float32Array(16)),P.Y(),"perspective",!1,!0)
m.bw()
u=G.cq("animation",v,$.$get$eG(),$.$get$eF())
l=new A.bC(u,[m],[],"animation",!1,!0)
t=G.cq("solid",v,$.$get$eZ(),$.$get$eY())
k=new A.bC(t,[m],[],"solid",!1,!0)
s=G.cq("demo",v,$.$get$eM(),$.$get$eL())
j=new A.bC(s,[m],[],"demo",!1,!0)
r=H.p([],[A.bC])
i=new R.iy(w,m,null,v,r,17664,0,0,0,0,"main",!1,!0)
i.dq("main",v,null)
i.eS(null)
W.aa(window,"resize",i.geR(),!1,W.K)
r.push(k)
r.push(l)
r.push(j)
h=G.dF("wire")
h.d.j(0,"uColor",$.$get$dg())
g=G.dF("mat")
z.a=null
z.b=null
z.c=null
f=P.cm(["idSkeleton",t,"idStatic",s,"idAnimation",u])
for(u=y.getElementsByTagName("input"),t=u.length,e=0;e<u.length;u.length===t||(0,H.F)(u),++e){s=J.fp(u[e])
W.aa(s.a,s.b,new X.lw(f),!1,H.C(s,0))}for(u=y.getElementsByTagName("input"),t=u.length,e=0;e<u.length;u.length===t||(0,H.F)(u),++e){d=u[e]
H.bi("initialize inputs "+H.c(J.fn(d)))
c=y.createEvent("Event")
c.initEvent("change",!0,!0)
d.dispatchEvent(c)}z.d=0
g.d.j(0,"uTime",0)
P.hr([D.hY("../asset/monster/monster.json"),D.hW("../asset/monster/monster.jpg")],null,!1).ay(new X.lx(z,v,g,l,j,k,h,new X.lv(z,n,i,x,g)))},
lw:{"^":"f:21;a",
$1:function(a){var z=H.af(J.fs(a),"$isdw")
P.a_(H.c(z.id)+" toggle "+H.c(z.checked))
this.a.h(0,z.id).c=z.checked}},
lv:{"^":"f:22;a,b,c,d,e",
$1:function(a9){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
z=this.a
y=J.ad(a9)
y.E(a9,z.d)
z.d=y.l(a9,0)
x=this.b
x.go+=0.001
w=x.r1
v=w.a
if(v.w(0,0)||v.w(0,1)){v=x.go
u=w.d
if(typeof u!=="number")return u.bg()
x.go=v+u*0.01
u=x.id
v=w.e
if(typeof v!=="number")return v.bg()
x.id=u+v*0.01}v=x.k4
u=v.a
if(u.w(0,37))x.go+=0.03
else if(u.w(0,39))x.go-=0.03
if(u.w(0,38))x.id+=0.03
else if(u.w(0,40))x.id-=0.03
if(u.w(0,33))x.fy*=0.99
else if(u.w(0,34))x.fy*=1.01
if(u.w(0,32)){x.go=0
x.id=0}u=w.f
if(typeof u!=="number")return u.bg()
u=x.fy-u*x.k3
if(u>0)x.fy=u
u=C.a.eh(x.id,-1.4707963267948965,1.4707963267948965)
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
x.aY(s)
s=x.f.a
s[0]=p[2]
s[1]=p[6]
s[2]=p[10]
x=-x.k1
u=s[0]
t=s[1]
q=s[2]
o=Math.sqrt(u*u+t*t+q*q)
n=s[0]/o
m=s[1]/o
l=s[2]/o
k=Math.cos(x)
j=Math.sin(x)
i=1-k
h=n*n*i+k
x=l*j
g=n*m*i-x
s=m*j
f=n*l*i+s
e=m*n*i+x
d=m*m*i+k
x=n*j
c=m*l*i-x
b=l*n*i-s
a=l*m*i+x
a0=l*l*i+k
x=p[0]
s=p[4]
q=p[8]
t=p[1]
u=p[5]
a1=p[9]
a2=p[2]
a3=p[6]
a4=p[10]
a5=p[3]
a6=p[7]
a7=p[11]
p[0]=x*h+s*e+q*b
p[1]=t*h+u*e+a1*b
p[2]=a2*h+a3*e+a4*b
p[3]=a5*h+a6*e+a7*b
p[4]=x*g+s*d+q*a
p[5]=t*g+u*d+a1*a
p[6]=a2*g+a3*d+a4*a
p[7]=a5*g+a6*d+a7*a
p[8]=x*f+s*c+q*a0
p[9]=t*f+u*c+a1*a0
p[10]=a2*f+a3*c+a4*a0
p[11]=a5*f+a6*c+a7*a0
v.c.a1(0)
v.b.a1(0)
w.e=0
w.d=0
w.f=0
w.c.a1(0)
w.b.a1(0)
this.c.df()
C.a8.ge9(window).ay(this)
this.d.dz(z.d)
w=J.fl(J.bk(y.Y(a9,1000),0.0333))
v=z.b.length
if(typeof w!=="number")return w.al()
this.e.d.j(0,"uTime",C.b.al(w,v))
z=z.c
y=y.Y(a9,1000)
v=z.c
w=z.a
a7=z.d
a6=z.e
a5=a7.c
if(typeof y!=="number")return y.al()
if(typeof a5!=="number")return H.r(a5)
L.cv(v,w,a7,a6,C.a.al(y,a5))
a8=R.da(v,z.e,1)
z.b.bq(G.bv(a8,null))}},
lx:{"^":"f:23;a,b,c,d,e,f,r,x",
$1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.b
y=J.w(a)
x=y.h(a,1)
w=new G.dX(!1,!1,!1,!0,1,9729,9729)
v=J.cQ(z.a)
u=new G.hy(x,"../asset/monster/monster.jpg",v,3553,z,w)
J.aq(z.a,3553,v)
v=w.d?1:0
J.fB(z.a,37440,v)
u.dt(x)
w.bt(z,3553)
J.cX(z.a)
J.aq(z.a,3553,null)
w=this.c
x=w.d
x.j(0,"uTexture",u)
t=J.W(J.W(y.h(a,0),"meshes"),0)
s=J.W(J.W(y.h(a,0),"animations"),0)
r=new T.B(new Float32Array(16))
r.M()
q=Y.hD(y.h(a,0))
p=Y.hB(t,q)
o=Y.hz(s,q)
P.a_("Imnported "+o.k(0))
y=this.d
v=y.d
n=G.dG("../asset/monster/monster.json",v.d,4,v.e.x)
n.ap(G.bv(p.d,null))
n.bo(p.di())
G.jL(p,n)
v=new Float32Array(9)
m=new T.B(new Float32Array(16))
m.M()
l=new T.B(new Float32Array(16))
l.M()
k=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
h=new Float32Array(3)
l.cw(-0.785)
g=A.dI("wrapper",new A.cp(w,n,[],new T.an(v),m,l,new T.m(k),new T.m(j),new T.m(i),new T.m(h),n.a,!1,!0))
w=new T.m(new Float32Array(3))
w.a2(100,0,0)
g.aY(w)
this.e.f.push(g)
y.f.push(g)
y=this.a
y.b=[]
w=o.c
if(typeof w!=="number")return H.r(w)
f=0
for(;f<w;f+=0.0333)y.b.push(f)
e=L.h4(q,r,o,y.b)
w=q.length*4
v=y.b.length
m=$.$get$dY()
l=J.cQ(z.a)
d=new G.j1(w,v,34836,"anim",l,3553,z,m)
J.aq(z.a,3553,l)
J.fF(z.a,3553,0,34836,w,v,0,6408,5126,e)
m.bt(z,3553)
J.cX(z.a)
J.aq(z.a,3553,null)
y.a=d
x.j(0,"uAnimationTable",d)
x=this.f
z=new T.B(new Float32Array(16))
z.M()
c=new R.fU(z,null,q,o,null,null)
w=L.d5(q.length)
c.e=w
L.cv(q,z,o,w,0)
w=G.hU("wire",x.d,R.da(q,w,1))
c.b=w
z=new Float32Array(9)
v=new T.B(new Float32Array(16))
v.M()
m=new T.B(new Float32Array(16))
m.M()
l=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
z=new A.cp(this.r,w,[],new T.an(z),v,m,new T.m(l),new T.m(k),new T.m(j),new T.m(new Float32Array(3)),w.a,!1,!0)
c.f=z
y.c=c
m.cw(0.785)
g=A.dI("wrapper",z)
z=new T.m(new Float32Array(3))
z.a2(100,0,0)
g.aY(z)
x.f.push(g)
this.x.$1(0)}}},1]]
setupProgram(dart,0,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dy.prototype
return J.dx.prototype}if(typeof a=="string")return J.aM.prototype
if(a==null)return J.hM.prototype
if(typeof a=="boolean")return J.hL.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.lg=function(a){if(typeof a=="number")return J.aL.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.w=function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.aA=function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.ad=function(a){if(typeof a=="number")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bc.prototype
return a}
J.lh=function(a){if(typeof a=="number")return J.aL.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bc.prototype
return a}
J.eQ=function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.bc.prototype
return a}
J.e=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.d)return a
return J.be(a)}
J.aE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.lg(a).l(a,b)}
J.bk=function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.ad(a).Y(a,b)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).I(a,b)}
J.V=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ad(a).ak(a,b)}
J.b0=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ad(a).Z(a,b)}
J.f0=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ad(a).E(a,b)}
J.W=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.eU(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.w(a).h(a,b)}
J.f1=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.eU(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aA(a).j(a,b,c)}
J.f2=function(a,b,c,d){return J.e(a).dV(a,b,c,d)}
J.cM=function(a,b){return J.e(a).bU(a,b)}
J.f3=function(a,b,c,d){return J.e(a).bV(a,b,c,d)}
J.cN=function(a,b,c){return J.e(a).bX(a,b,c)}
J.f4=function(a,b){return J.e(a).eb(a,b)}
J.bV=function(a,b,c){return J.e(a).bY(a,b,c)}
J.f5=function(a,b,c){return J.e(a).c_(a,b,c)}
J.aq=function(a,b,c){return J.e(a).c0(a,b,c)}
J.bl=function(a,b){return J.e(a).ee(a,b)}
J.f6=function(a,b){return J.e(a).c1(a,b)}
J.f7=function(a,b,c){return J.e(a).c2(a,b,c)}
J.cO=function(a,b,c,d){return J.e(a).c4(a,b,c,d)}
J.f8=function(a,b){return J.aA(a).c7(a,b)}
J.f9=function(a,b,c,d,e){return J.e(a).c8(a,b,c,d,e)}
J.cP=function(a,b){return J.eQ(a).ei(a,b)}
J.fa=function(a,b){return J.lh(a).V(a,b)}
J.fb=function(a,b){return J.w(a).w(a,b)}
J.bW=function(a,b,c){return J.w(a).el(a,b,c)}
J.bX=function(a){return J.e(a).ca(a)}
J.fc=function(a){return J.e(a).cb(a)}
J.cQ=function(a){return J.e(a).cd(a)}
J.fd=function(a){return J.e(a).eo(a)}
J.fe=function(a,b){return J.e(a).cf(a,b)}
J.bY=function(a,b){return J.e(a).cg(a,b)}
J.ff=function(a,b,c,d){return J.e(a).ci(a,b,c,d)}
J.fg=function(a,b,c,d,e){return J.e(a).eu(a,b,c,d,e)}
J.fh=function(a,b,c,d,e){return J.e(a).cj(a,b,c,d,e)}
J.fi=function(a,b,c,d,e,f){return J.e(a).ev(a,b,c,d,e,f)}
J.cR=function(a,b){return J.aA(a).t(a,b)}
J.b1=function(a,b){return J.e(a).ck(a,b)}
J.fj=function(a,b){return J.e(a).cl(a,b)}
J.fk=function(a){return J.e(a).ew(a)}
J.fl=function(a){return J.ad(a).as(a)}
J.cS=function(a,b){return J.aA(a).A(a,b)}
J.cT=function(a){return J.e(a).gea(a)}
J.fm=function(a){return J.e(a).gaV(a)}
J.aF=function(a){return J.e(a).gS(a)}
J.ag=function(a){return J.n(a).gB(a)}
J.fn=function(a){return J.e(a).geG(a)}
J.X=function(a){return J.aA(a).gF(a)}
J.a5=function(a){return J.w(a).gi(a)}
J.fo=function(a){return J.e(a).gcs(a)}
J.fp=function(a){return J.e(a).gb_(a)}
J.fq=function(a){return J.e(a).gb4(a)}
J.cU=function(a){return J.e(a).ga_(a)}
J.fr=function(a){return J.e(a).geW(a)}
J.fs=function(a){return J.e(a).gO(a)}
J.ft=function(a){return J.e(a).gcE(a)}
J.fu=function(a){return J.e(a).gaj(a)}
J.cV=function(a){return J.e(a).gf3(a)}
J.bZ=function(a){return J.e(a).gm(a)}
J.c_=function(a){return J.e(a).gn(a)}
J.cW=function(a){return J.e(a).gH(a)}
J.fv=function(a){return J.e(a).b9(a)}
J.fw=function(a,b,c){return J.e(a).cW(a,b,c)}
J.fx=function(a){return J.e(a).az(a)}
J.cX=function(a){return J.e(a).ba(a)}
J.fy=function(a,b){return J.e(a).bb(a,b)}
J.fz=function(a,b,c){return J.e(a).bc(a,b,c)}
J.cY=function(a,b,c){return J.e(a).bf(a,b,c)}
J.fA=function(a,b){return J.e(a).cr(a,b)}
J.fB=function(a,b,c){return J.e(a).cu(a,b,c)}
J.cZ=function(a){return J.aA(a).eQ(a)}
J.fC=function(a,b){return J.e(a).sat(a,b)}
J.fD=function(a,b,c,d){return J.e(a).bl(a,b,c,d)}
J.fE=function(a,b,c,d,e,f,g){return J.e(a).cA(a,b,c,d,e,f,g)}
J.fF=function(a,b,c,d,e,f,g,h,i,j){return J.e(a).ax(a,b,c,d,e,f,g,h,i,j)}
J.fG=function(a,b,c,d){return J.e(a).cB(a,b,c,d)}
J.bm=function(a,b,c,d){return J.e(a).cC(a,b,c,d)}
J.M=function(a){return J.ad(a).eX(a)}
J.d_=function(a){return J.ad(a).eY(a)}
J.fH=function(a){return J.eQ(a).f_(a)}
J.aG=function(a){return J.n(a).k(a)}
J.fI=function(a,b,c,d){return J.e(a).f1(a,b,c,d)}
J.fJ=function(a,b,c){return J.e(a).cG(a,b,c)}
J.fK=function(a,b,c){return J.e(a).cH(a,b,c)}
J.c0=function(a,b,c){return J.e(a).cI(a,b,c)}
J.fL=function(a,b,c){return J.e(a).cJ(a,b,c)}
J.d0=function(a,b,c){return J.e(a).cK(a,b,c)}
J.d1=function(a,b,c){return J.e(a).cL(a,b,c)}
J.d2=function(a,b,c){return J.e(a).cM(a,b,c)}
J.d3=function(a,b,c,d){return J.e(a).cN(a,b,c,d)}
J.d4=function(a,b,c,d){return J.e(a).cO(a,b,c,d)}
J.fM=function(a,b){return J.e(a).cQ(a,b)}
J.fN=function(a,b,c){return J.e(a).f2(a,b,c)}
J.fO=function(a,b,c,d,e,f,g){return J.e(a).cR(a,b,c,d,e,f,g)}
J.fP=function(a,b,c,d,e){return J.e(a).cT(a,b,c,d,e)}
I.aC=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.c2.prototype
C.n=W.h5.prototype
C.D=W.hb.prototype
C.E=W.hw.prototype
C.F=J.h.prototype
C.c=J.aJ.prototype
C.t=J.dx.prototype
C.b=J.dy.prototype
C.a=J.aL.prototype
C.i=J.aM.prototype
C.M=J.aN.prototype
C.R=H.ic.prototype
C.S=W.ie.prototype
C.x=J.il.prototype
C.C=W.iY.prototype
C.q=J.bc.prototype
C.a8=W.j7.prototype
C.d=new P.k8()
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
C.N=new P.hO(null,null)
C.O=new P.hP(null)
C.P=H.p(I.aC(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.Q=I.aC(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.w=I.aC([])
C.o=H.p(I.aC(["bind","if","ref","repeat","syntax"]),[P.j])
C.p=H.p(I.aC(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.T=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.U=new G.y("vec4","delta from light",0)
C.m=new G.y("","",0)
C.y=new G.y("vec3","vertex coordinates",0)
C.V=new G.y("vec3","vertex binormals",0)
C.z=new G.y("vec4","for wireframe",0)
C.W=new G.y("vec4","per vertex color",0)
C.X=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.Z=new G.y("mat4","",4)
C.Y=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.a_=new G.y("float","",4)
C.a0=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a1=new G.y("float","for bump maps",0)
C.a2=new G.y("vec2","texture uvs",0)
C.a3=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.a4=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.a5=new G.y("vec3","vertex normals",0)
C.a6=new G.y("sampler2DShadow","",0)
C.A=new G.y("vec3","per vertex color",0)
C.B=new G.y("mat3","",0)
C.a7=new G.y("vec3","vertex tangents",0)
$.a6=0
$.aH=null
$.db=null
$.eS=null
$.eE=null
$.eX=null
$.bR=null
$.bS=null
$.cJ=null
$.av=null
$.aW=null
$.aX=null
$.cE=!1
$.t=C.d
$.ai=null
$.c9=null
$.ds=null
$.dr=null
$.dn=null
$.dm=null
$.dl=null
$.dk=null
$.eP=0
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
I.$lazy(y,x,w)}})(["dj","$get$dj",function(){return H.eR("_$dart_dartClosure")},"ci","$get$ci",function(){return H.eR("_$dart_js")},"e1","$get$e1",function(){return H.a8(H.bL({
toString:function(){return"$receiver$"}}))},"e2","$get$e2",function(){return H.a8(H.bL({$method$:null,
toString:function(){return"$receiver$"}}))},"e3","$get$e3",function(){return H.a8(H.bL(null))},"e4","$get$e4",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e8","$get$e8",function(){return H.a8(H.bL(void 0))},"e9","$get$e9",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e6","$get$e6",function(){return H.a8(H.e7(null))},"e5","$get$e5",function(){return H.a8(function(){try{null.$method$}catch(z){return z.message}}())},"eb","$get$eb",function(){return H.a8(H.e7(void 0))},"ea","$get$ea",function(){return H.a8(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cy","$get$cy",function(){return P.jd()},"cc","$get$cc",function(){return P.jy(null,P.b6)},"aY","$get$aY",function(){return[]},"di","$get$di",function(){return{}},"el","$get$el",function(){return P.cn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cB","$get$cB",function(){return P.Y()},"dR","$get$dR",function(){return new G.e_(1281,0,4294967295)},"d8","$get$d8",function(){return new G.dZ(1281,1281,1281)},"a2","$get$a2",function(){return P.cm(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColor",C.A,"aColorAlpha",C.W,"aPosition",C.y,"aTexUV",C.a2,"aNormal",C.a5,"aBinormal",C.V,"aCenter",C.z,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a7,"aBitangent",C.T,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.y,"vPositionFromLight",C.U,"vCenter",C.z,"vDepth",C.a0,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.B,"uConvolutionMatrix",C.B,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a6,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a4,"uAnimationTable",C.h,"uTime",C.a3,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Y,"uLightDescs",C.Z,"uLightCount",C.f,"uLightTypes",C.a_,"uBumpScale",C.a1,"uNormalScale",C.X])},"dY","$get$dY",function(){var z=G.j_()
z.d=!1
z.b=!0
z.a=!1
z.f=9728
z.r=9728
return z},"dg","$get$dg",function(){return T.j5(1,1,0)},"eZ","$get$eZ",function(){var z=G.aS("SolidColor")
z.aC(["aPosition"])
z.ad(["uPerspectiveViewMatrix","uModelMatrix"])
z.aE(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return z},"eY","$get$eY",function(){var z=G.aS("SolidColorF")
z.ad(["uColor"])
z.aE(["oFragColor = vec4( uColor, 1.0 );"])
return z},"eM","$get$eM",function(){var z=G.aS("FixedVertexColorV")
z.aC(["aPosition"])
z.ad(["uPerspectiveViewMatrix","uModelMatrix"])
z.ao(["vColor"])
z.bv(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return z},"eL","$get$eL",function(){var z=G.aS("FixedVertexColorF")
z.ao(["vColor"])
z.aE(["oFragColor = vec4( vColor, 1.0 );"])
return z},"eG","$get$eG",function(){var z=G.aS("AnimationV")
z.aC(["aPosition","aTexUV","aBoneIndex","aBoneWeight"])
z.ao(["vTexUV"])
z.ad(["uPerspectiveViewMatrix","uModelMatrix","uAnimationTable","uTime"])
z.bu(["mat4 GetBoneMatrix(sampler2D table, int index, int time) {\n    vec4 v1 = texelFetch(table, ivec2(index * 4 + 0, time), 0);\n    vec4 v2 = texelFetch(table, ivec2(index * 4 + 1, time), 0);\n    vec4 v3 = texelFetch(table, ivec2(index * 4 + 2, time), 0);\n    vec4 v4 = texelFetch(table, ivec2(index * 4 + 3, time), 0);\n    return mat4(v1, v2, v3, v4);\n    //return uBoneMatrices[index];\n}\n\nmat4 adjustMatrix(sampler2D table, vec4 weights, ivec4 indices, int time) {\n    return weights.x * GetBoneMatrix(table, indices.x, time) +\n           weights.y * GetBoneMatrix(table, indices.y, time) +\n           weights.z * GetBoneMatrix(table, indices.z, time) +\n           weights.w * GetBoneMatrix(table, indices.w, time);\n}\n\nvoid main() {\n   mat4 skinMat = uModelMatrix * adjustMatrix(uAnimationTable,\n                                              aBoneWeight,\n                                              ivec4(aBoneIndex),\n                                              int(uTime));\n   vec4 pos = skinMat * vec4(aPosition, 1.0);\n   // vPosition = pos.xyz;\n   // This is not quite accurate\n   //vNormal = normalize(mat3(skinMat) * aNormal);\n   gl_Position = uPerspectiveViewMatrix * pos;\n\n   vTexUV = aTexUV;\n}\n\n"])
return z},"eF","$get$eF",function(){var z=G.aS("AnimationV")
z.ao(["vTexUV"])
z.ad(["uTexture"])
z.bu(["void main() {\n  oFragColor = texture(uTexture, vTexUV);\n}\n"])
return z}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1},{func:1,args:[,,]},{func:1,v:true},{func:1,ret:W.v},{func:1,args:[W.R]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.j,args:[P.D]},{func:1,args:[W.bx]},{func:1,ret:P.cG,args:[W.ar,P.j,P.j,W.cA]},{func:1,args:[,P.j]},{func:1,args:[P.j]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[P.d],opt:[P.aT]},{func:1,args:[,],opt:[,]},{func:1,args:[,P.aT]},{func:1,v:true,args:[W.v,W.v]},{func:1,v:true,args:[[P.G,P.j,,],P.D]},{func:1,v:true,args:[W.K]},{func:1,args:[W.aU]},{func:1,args:[P.D,P.d]},{func:1,args:[W.K]},{func:1,v:true,args:[P.aZ]},{func:1,args:[P.i]},{func:1,ret:P.D,args:[,,]}]
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
if(x==y)H.lC(d||a)
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
Isolate.aC=a.aC
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
if(typeof dartMainRunner==="function")dartMainRunner(X.eV,[])
else X.eV([])})})()
//# sourceMappingURL=animation.dart.js.map
